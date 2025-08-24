using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

public interface ICsvPlantImportService
{
    Task<CsvImportResult> ImportAsync(IFormFile csvFile);
}
