using Microsoft.EntityFrameworkCore;
using WebApi.DTO;
using WebApi.Entities;

namespace WebApi.Services
{
    public class OrderService : IOrderService
    {
        private readonly OrderDbContext _context;

        public OrderService(OrderDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Order>> GetOrdersAsync()
        {
            return await _context.Orders.Include(o => o.Product).ToListAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id)
        {
            return await _context.Orders.Include(o => o.Product).FirstOrDefaultAsync(o => o.OrderId == id);
        }

        public async Task<Order> CreateOrderAsync(OrderCreateDto orderCreateDto)
        {
            var productExists = await _context.Products.AnyAsync(p => p.ProductId == orderCreateDto.ProductId);
            if (!productExists)
            {
                throw new Exception("Product not found");
            }

            var order = new Order
            {
                CustomerName = orderCreateDto.CustomerName,
                ProductId = orderCreateDto.ProductId,
                Quantity = orderCreateDto.Quantity,
                OrderDate = orderCreateDto.OrderDate
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return order;


        }
    }
}
