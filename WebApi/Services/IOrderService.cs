using WebApi.DTO;
using WebApi.Entities;

namespace WebApi.Services
{
    public interface IOrderService
    {
        Task<IEnumerable<Order>> GetOrdersAsync();
        Task<Order> GetOrderByIdAsync(int id);
        Task<Order> CreateOrderAsync(OrderCreateDto order);
    }
}
