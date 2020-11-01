using Microsoft.EntityFrameworkCore;

namespace farma.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        
        public DbSet<Product> Products {set; get;}
    }
}