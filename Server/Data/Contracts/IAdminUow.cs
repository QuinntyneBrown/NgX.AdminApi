using Common.Data.Contracts;
using NgX.AdminApi.Server.Models;

namespace NgX.AdminApi.Server.Data.Contracts
{
    public interface IAdminUow
    {
        IRepository<WebComponent> Photos { get; }
        void SaveChanges();
    }
}
