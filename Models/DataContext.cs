using Microsoft.EntityFrameworkCore;
using farmaplus.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System;
// using Microsoft.Extensions.Identity.Stores;
// using Microsoft.AspNet.Identity.EntityFramework;

namespace farmaplus.Models
{
    public class DataContext : IdentityDbContext<ApplicationUser>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        // protected override void OnModelCreating( ModelBuilder modelBuilder )
        // {
        //     modelBuilder.Entity<IdentityUserRole<Guid>>().HasKey(p => new { p.UserId, p.RoleId });
        // }

        public DbSet<Productos> Productos { set; get; }

        public DbSet<farmaplus.Models.Role> Role { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers {get; set;}
        public DbSet<farmaplus.Models.Clientes> Clientes { get; set; }
        public DbSet<farmaplus.Models.User> User { get; set; }
        public DbSet<farmaplus.Models.Detalle_Factura> Detalle_Factura { get; set; }
    }
}