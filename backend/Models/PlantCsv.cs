namespace PlantInventoryApi.Models;

// Model used in record extration from uploaded plants CSV file
public class PlantCsv{
    public string scientificName { get; set; } = string.Empty;
    public string family { get; set; } = string.Empty;
    public string verbatimTaxonRank { get; set; } = string.Empty;
    public string taxonomicStatus { get; set; } = string.Empty;
    public string taxonRemarks { get; set; } = string.Empty;
    public string references { get; set; } = string.Empty;
}