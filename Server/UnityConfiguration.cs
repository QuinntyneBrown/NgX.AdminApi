using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Practices.Unity;
using NgX.AdminApi.Server.Data;
using NgX.AdminApi.Server.Data.Contracts;

namespace NgX.AdminApi.Server
{
    public class UnityConfiguration
    {
        public static IUnityContainer GetContainer(bool useMock = false)
        {
            var container = new UnityContainer();

            if (useMock)
            {

            }
            else
            {
                container.RegisterType<IAdminUow, AdminUow>();
                container.RegisterType<IAdminContext, AdminContext>();                
            }

            return container;

        }
    }
}