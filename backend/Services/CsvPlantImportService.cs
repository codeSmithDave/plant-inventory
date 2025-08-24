using CsvHelper;
using Microsoft.AspNetCore.Http;
using PlantInventoryApi;
using PlantInventoryApi.Models;
using System.Globalization;
using System.Threading.Tasks;

public class CsvPlantImportService : ICsvPlantImportService{
    private readonly PlantInventoryDbContext _context;

    public CsvPlantImportService(PlantInventoryDbContext context){
        _context = context;
    }

// ***does this need to be async?***
    public async Task<CsvImportResult> ImportAsync(IFormFile csvFile){
        var result = new CsvImportResult();
        using var stream = csvFile.OpenReadStream();
        using var reader = new StreamReader(stream);
        using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
        
        // used to compare & confirm the CSV file column headers match with the model property names, so we can properly parse the data
        // var expectedCsvHeaders = typeof(PlantCsv).GetProperties().Select( p => p.Name).ToArray();
        
        // hold unique family names regardless of their capitalization (in case the csv data is odd / not standardised)
        var uniqueFamilies = new HashSet<string>(StringComparer.InvariantCultureIgnoreCase);
        // to hold initial CSV records until they are ready to be insterted into the database
        var csvRecords = new List<PlantCsv>();
        // hold database ready plant records
        var plantsDbReady = new List<Plant>();
        // keep track of the current csv row
        var rowNum = 1;

        // don't go further if the file is empty or does not have a header row
        if(!await csv.ReadAsync() || !csv.ReadHeader()){
            result.Errors.Add("The CSV file does not have a header row, or it is empty.");
            return result;
        }

        // check that CSV headers match what I am expecting (in PlantCsv model)
        // ...

        await foreach(var record in csv.GetRecordsAsync<PlantCsv>()){
            uniqueFamilies.Add(record.family);
            csvRecords.Add(record);
            
            rowNum++;
        }

        // foreach(var family in uniqueFamilies){
        //     Console.WriteLine($"family = {family}");
        //     // Console.WriteLine($"scientificName={record.scientificName} | family={record.family} | verbatimTaxonRank={record.verbatimTaxonRank} | taxonomicStatus={record.taxonomicStatus} | taxonRemarks={record.taxonRemarks} | references={record.references}");
        // }
        // Console.WriteLine($"csvRecords = {csvRecords.Count}");
        // Console.WriteLine($"uniqueFamilies={uniqueFamilies.Count}");
        // Console.WriteLine($"*** we broke out of the foreach loop ***; rowNum = {rowNum}");
        // Console.WriteLine($"uniqueFamilies = {uniqueFamilies}");

        // for (int i = 0; i < csvRecords.Count; i++)
        // {
        //     Console.WriteLine($"csvRecords[{i}.scientificName] = {csvRecords[i].scientificName}");
        // }
 

        // TODO: implement CSV parsing, validation, and DB insert logic here.
        // This is your main import workflow.
        // For now, just simulate success.
        result.ImportedCount = 0;
        // result.Errors.Add("Fake error example"); // for testing

        return result;
    }
}