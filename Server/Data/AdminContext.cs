using System.Data.Entity;
using Common.Data.Contracts;
using NgX.AdminApi.Server.Data.Contracts;
using NgX.AdminApi.Server.Models;

namespace NgX.AdminApi.Server.Data
{
    public class AdminContext : DbContext, IAdminContext
    {
        public AdminContext()
            : base(nameOrConnectionString: "ngx.admin")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;

        }

        public DbSet<WebComponent> WebComponents { get; set; }


    }
}