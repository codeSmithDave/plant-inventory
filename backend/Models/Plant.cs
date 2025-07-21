namespace PlantInventoryApi;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using PlantInventoryApi.Enums;

public class Plant{
    [Key] // primary key
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("plant_id")]
    public int PlantId { get; set; }

    [Required] // foreign key
    [Column("family_id")]
    public int FamilyId { get; set; }

    [Required]
    [Column("scientific_name")]
    public string ScientificName { get; set; } = string.Empty;

    [Column("taxon_remarks")]
    public string TaxonRemarks { get; set; } = string.Empty;

    [Column("verbatim_taxon_ranks")]
    public VerbatimTaxonRank VerbatimTaxonRanks { get; set; } // this can have 3 specific values

    [Column("taxonomic_status")]
    public TaxonomicStatus TaxonomicStatus { get; set; } // this can have 3 specific values

    [Column("plant_references")]
    public string References { get; set; } = string.Empty;
}