using Microsoft.EntityFrameworkCore;
using PlantInventoryApi;

public class PlantInventoryDbContext : DbContext
{
    public PlantInventoryDbContext(DbContextOptions<PlantInventoryDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder){
        modelBuilder.Entity<Plant>()
        .Property(p => p.TaxonomicStatus)
        .HasConversion<string>();

        modelBuilder.Entity<Plant>()
        .Property(p => p.VerbatimTaxonRanks)
        .HasConversion<string>();
    }

    public DbSet<Plant> Plants { get; set; }
    public DbSet<Family> Families{ get; set; }
}