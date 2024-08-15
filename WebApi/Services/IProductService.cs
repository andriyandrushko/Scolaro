using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Services
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetProductsAsync();
    }
}
