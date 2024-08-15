namespace WebApi.DTO
{
    public class OrderCreateDto
    {
        public string CustomerName { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public DateTime OrderDate { get; set; }
    }
}
