using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Common.Controllers;
using NgX.AdminApi.Server.Data.Contracts;
using NgX.AdminApi.Server.Models;

namespace NgX.AdminApi.Server.Api
{
    [RoutePrefix("api/webcomponents")]
    public class WebComponentController : EFController<WebComponent>
    {
        
        public WebComponentController(IAdminUow uow)
        {
            this.uow = uow;
        }

        [Route("getall")]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return Ok();
        }



        public override IHttpActionResult Add(WebComponent entity)
        {
            return base.Add(entity);
        }

        protected IAdminUow uow;

    }
}
