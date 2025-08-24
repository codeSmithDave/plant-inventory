using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;

namespace PlantInventoryApi.Controllers;

[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class FileUploadController : ControllerBase{
    private readonly ICsvPlantImportService _csvImportService;

    public FileUploadController(ICsvPlantImportService csvImportService){
        _csvImportService = csvImportService;
    }

    [RequestSizeLimit(419430400)] // up to 400MB allowed per request body
    [HttpPost("upload-csv")]
    public async Task<IActionResult> UploadCsv(IFormFile file){
        if (file == null || file.Length == 0){
            return BadRequest("No file was uploaded.");
        }
            
        if (!file.FileName.EndsWith(".csv", StringComparison.OrdinalIgnoreCase)){
            return BadRequest("Uploaded file is not a CSV.");
        }

        // call the CSV import service
        var result = await _csvImportService.ImportAsync(file);

        // return result
        if (result.HasErrors){
            return BadRequest(new { status = "error", message = "Import failed", errors = result.Errors });
        }
            
        return Ok(new { status = "success", importedCount = result.ImportedCount });
    }
}