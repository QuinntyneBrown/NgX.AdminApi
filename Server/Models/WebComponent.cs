using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NgX.AdminApi.Server.Models
{
    public class WebComponent
    {
        public int Id { get; set; }

        public string Template { get; set; }

        public string Css { get; set; }

        public string Version { get; set; }
    }
}