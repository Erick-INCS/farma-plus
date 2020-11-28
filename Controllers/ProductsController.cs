using Microsoft.AspNetCore.Mvc;
using farma.Models;
using System.Linq;

namespace farma.Controllers
{
    public class ProductsController : Controller
    {
        private DataContext dbContext;

        public ProductsController(DataContext db)
        {
            dbContext = db;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public IActionResult GetProducts() {
            var data = dbContext.Products.ToList(); // read all records form table
            return Json(data);
        }

        [HttpPost]
        public IActionResult saveProduct([FromBody] Product prod) 
        {
            // store into DB
            // System.Console.WriteLine("Savig a property");
            // System.Console.WriteLine(prop.Title);

            dbContext.Products.Add(prod);
            dbContext.SaveChanges();

            return Json(prod);
        }

        [HttpPost]
        public IActionResult updateDesc([FromBody] Product prod) 
        {
            // store into DB
            // System.Console.WriteLine("Savig a property");
            // System.Console.WriteLine(prop.Title);

            var result = dbContext.Products.SingleOrDefault(b => b.Id == 1);
            if (result != null)
            {
                result.Description = prod.Description;
                dbContext.SaveChanges();
            }

            return Json(result);
        }

	[HttpPost]
        public IActionResult generic([FromBody] O obj) 
        {
	    obj.Prop = 10 + obj.Prop;
            return Json(obj);
        }
    }

    public class O {
	public int Prop {get; set;}
    }
}
