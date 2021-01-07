using Microsoft.EntityFrameworkCore;
using farmaplus.Models;
// using ...Models

namespace farmaplus.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Productos> Productos { set; get; }

        public DbSet<farmaplus.Models.Role> Role { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers {get; set;}
        public DbSet<farmaplus.Models.Clientes> Clientes { get; set; }
    }
}