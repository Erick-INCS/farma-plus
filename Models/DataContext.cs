using Microsoft.EntityFrameworkCore;
// using ...Models

namespace farmaplus.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        
        public DbSet<Productos> Productos {set; get;}
    }
}