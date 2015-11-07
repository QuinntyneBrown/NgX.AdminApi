using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Common.Data;
using Common.Data.Contracts;
using NgX.AdminApi.Server.Data.Contracts;
using NgX.AdminApi.Server.Models;

namespace NgX.AdminApi.Server.Data
{
    public class AdminUow: BaseUow, IAdminUow
    {
        public AdminUow(AdminContext adminContext)
            : base(adminContext)
        {

        }

        public IRepository<WebComponent> Photos { get { return GetStandardRepo<WebComponent>(); } }
    }
}