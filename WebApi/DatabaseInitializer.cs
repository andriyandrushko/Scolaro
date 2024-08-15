using WebApi.Entities;

namespace WebApi
{
    public class DatabaseInitializer(OrderDbContext context)
    {
        private readonly OrderDbContext _context = context;

        public void Initialize()
        {
            // Look for any products.
            if (_context.Products.Any())
            {
                return;   // Database has been seeded
            }

            var products = new Product[]
            {
            new Product { ProductName = "Product 1", ProductPrice = 10.99m },
            new Product { ProductName = "Product 2", ProductPrice = 19.99m },
            new Product { ProductName = "Product 3", ProductPrice = 29.99m },
            new Product { ProductName = "Product 4", ProductPrice = 39.99m },
            new Product { ProductName = "Product 5", ProductPrice = 49.99m }
            };

            _context.Products.AddRange(products);
            _context.SaveChanges();
        }
    }
}
