using System.ComponentModel.DataAnnotations;

namespace WebApi.Entities
{
    public class Product
    {
        public int ProductId { get; set; }

        [Required]
        [MaxLength(50)]
        public string ProductName { get; set; } = null!;

        [Required]
        [Range(0, 9999999999)]
        public decimal ProductPrice { get; set; }
    }
}
