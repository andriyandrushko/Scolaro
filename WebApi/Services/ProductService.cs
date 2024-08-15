using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

namespace WebApi.Services
{
    public class ProductService : IProductService
    {
        private readonly OrderDbContext _context;

        public ProductService(OrderDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            return await _context.Products.ToListAsync();

        }
    }
}
