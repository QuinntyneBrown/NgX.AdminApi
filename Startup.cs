using System;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Owin;
using Owin;
using Unity.WebApi;

[assembly: OwinStartup(typeof(NgX.AdminApi.Startup))]

namespace NgX.AdminApi
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(NgX.AdminApi.Server.UnityConfiguration.GetContainer());

            GlobalConfiguration.Configure(config => NgX.AdminApi.Server.ApiConfiguration.Install(config, app));
        }
    }
}
