using System.ComponentModel.DataAnnotations;

namespace WebApi.Entities
{
    public class Order
    {
        public int OrderId { get; set; }

        [Required]
        [MaxLength(100)]
        public string CustomerName { get; set; } = null!;

        [Required]
        public int ProductId { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int Quantity { get; set; }

        public DateTime OrderDate { get; set; }

        public Product Product { get; set; } = null!;
    }
}
