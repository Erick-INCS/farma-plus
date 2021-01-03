using farmaplus.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using farmaplus.Models;

namespace farmaplus.Controllers
{
    public class ProductosController : Controller
    {
        private DataContext db;

        public ProductosController(DataContext dbC)
        {
            db = dbC;
        }

        [HttpGet]
        public IActionResult GetProducts() {
            // var data = db.Productos.ToList();
            return Json(db.Productos.ToList());
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
