namespace NgX.AdminApi.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<NgX.AdminApi.Server.Data.AdminContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(NgX.AdminApi.Server.Data.AdminContext context)
        {

        }
    }
}
