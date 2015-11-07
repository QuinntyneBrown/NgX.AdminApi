using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NgX.AdminApi.Server.Data.Contracts;

namespace NgX.AdminApi.Server.Api
{
    [RoutePrefix("api/webcomponents")]
    public class WebComponentController : ApiController
    {
        
        public WebComponentController(IAdminUow uow)
        {
            this._uow = uow;
        }

        [Route("getall")]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return Ok();
        }

        protected IAdminUow _uow;
    }
}
