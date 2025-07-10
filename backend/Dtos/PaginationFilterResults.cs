namespace PlantInventoryApi.Dtos;

public class PaginationFilterResults<T>{
    public List<T> Data { get; set; } = new List<T>();
    public int TotalPages { get; set; }
}