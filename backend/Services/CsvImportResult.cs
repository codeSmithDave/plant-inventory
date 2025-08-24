public class CsvImportResult{
    public int ImportedCount { get; set; }
    public List<string> Errors { get; set; } = new();
    public bool HasErrors => Errors.Count > 0;
}