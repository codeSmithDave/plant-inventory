namespace PlantInventoryApi;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("plant_families")]
public class Family{
    [Key] // this is the primary key
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // DB auto-generates / increments a value when a row is inserted
    [Column("family_id")]
    public int ColumnId { get; set; }
    
    [Column("family_name")]
    public string ColumnString { get; set; } = string.Empty;
    
}