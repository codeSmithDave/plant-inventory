using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using PlantInventoryApi;
using PlantInventoryApi.Dtos;
using PlantInventoryApi.Enums;

namespace PlantInventoryApi.Controllers;

[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class PlantsController : ControllerBase{
    private static readonly List<Plant> _plants = new (){
        new Plant { PlantId = 1, FamilyId = 1, ScientificName = "Rosa damascena", VerbatimTaxonRanks = VerbatimTaxonRank.Species, TaxonomicStatus = TaxonomicStatus.Accepted, TaxonRemarks = "Damask rose, cultivated for its fine fragrance.", References = "https://en.wikipedia.org/wiki/Rosa_damascena" },
        new Plant { PlantId = 2, FamilyId = 2, ScientificName = "Malus domestica2", VerbatimTaxonRanks = VerbatimTaxonRank.Subspecies, TaxonomicStatus = TaxonomicStatus.Unchecked, TaxonRemarks = "Damask rose, cultivated for its fine fragrance", References = "https://en.wikipedia.org/wiki/Rosa_damascena" },
        new Plant { PlantId = 3, FamilyId = 3, ScientificName = "Malus domestica3", VerbatimTaxonRanks = VerbatimTaxonRank.Species, TaxonomicStatus = TaxonomicStatus.Unchecked, TaxonRemarks = "Damask rose, cultivated for its fine fragrance", References = "https://en.wikipedia.org/wiki/Rosa_damascena" },
        new Plant { PlantId = 4, FamilyId = 2, ScientificName = "Malus domestica4", VerbatimTaxonRanks = VerbatimTaxonRank.Subspecies, TaxonomicStatus = TaxonomicStatus.Accepted, TaxonRemarks = "Damask rose, cultivated for its fine fragrance", References = "https://en.wikipedia.org/wiki/Rosa_damascena" },
        new Plant { PlantId = 5, FamilyId = 2, ScientificName = "Malus domestica5", VerbatimTaxonRanks = VerbatimTaxonRank.Species, TaxonomicStatus = TaxonomicStatus.Synonym, TaxonRemarks = "Damask rose, cultivated for its fine fragrance", References = "https://en.wikipedia.org/wiki/Rosa_damascena" },
        new Plant { PlantId = 6, FamilyId = 2, ScientificName = "TEST-6", VerbatimTaxonRanks = VerbatimTaxonRank.Species, TaxonomicStatus = TaxonomicStatus.Synonym, TaxonRemarks = "This is a test, cultivated for its fine fragrance", References = "https://en.wikipedia.org/wiki/Rosa_damascena" }
    };

    [HttpGet("{id}")]
    public ActionResult<Plant> GetById(int id){
        var plant = _plants.FirstOrDefault(p => p.PlantId == id);

        return plant == null ? NotFound() : Ok(plant);
    }

    [HttpGet]
    // public async Task<ActionResult<PaginationFilterResults<Plant>>> GetPlants
    public ActionResult<PaginationFilterResults<Plant>> GetPlants(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 2
        ){
            // validate the query params to confirm valid values (> 0) and offsets for pagination
            page = page < 1 ? 1 : page;
            pageSize = pageSize < 1 ? 1 : pageSize;
            var offset = (page - 1) * pageSize;
            // get total number of pages based on user input
            var totalPages = (int)Math.Ceiling(_plants.Count() / (double)pageSize);
            // get the paginated results
            var result = new PaginationFilterResults<Plant>{
                // Data = _plants.Skip(offset).Take(pageSize).ToList(),
                Data = [.. _plants.Skip(offset).Take(pageSize)],
                TotalPages = totalPages,
            };

            return Ok(result);
    }
}
