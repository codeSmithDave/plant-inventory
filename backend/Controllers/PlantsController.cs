using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using PlantInventoryApi;
using PlantInventoryApi.Enums;

namespace NamespaceName.Controllers;

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

    [HttpGet]
    public ActionResult<IEnumerable<Plant>> GetAll(){
        return Ok(_plants);
    }

    [HttpGet("{id}")]
    public ActionResult<Plant> GetById(int id){
        var plant = _plants.FirstOrDefault(p => p.PlantId == id);

        return plant == null ? NotFound() : Ok(plant);
    }
}
