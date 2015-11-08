using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Common.Controllers;
using Common.Data.Contracts;
using NgX.AdminApi.Server.Data.Contracts;
using NgX.AdminApi.Server.Models;

namespace NgX.AdminApi.Server.Api
{
    [RoutePrefix("api/webcomponent")]
    public class WebComponentController: EFController<WebComponent>
    {
        
        public WebComponentController(IAdminUow uow)
        {
            base.uow = uow;
            base.repository = uow.WebComponents;            
        }

        [Route("getAll")]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return Ok(repository.GetAll());
        }

    }
}
