using farmaplus.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Reflection;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace farmaplus.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private DataContext db;

        public HomeController(ILogger<HomeController> logger, DataContext dbC)
        {
            _logger = logger;
            db = dbC;
        }

        public IActionResult Index()
        {
            // Type type = db.GetType();
            // PropertyInfo[] props = type.GetProperties();
            // string str = "{";
            // foreach (var prop in props)
            // {
            //     str+= prop.Name+ ",";
            // }
            // Console.WriteLine(str);

            ClaimsPrincipal currentUser = this.User;
            var currentUserID = currentUser.FindFirst(ClaimTypes.NameIdentifier).Value;
            Console.WriteLine(currentUserID);
            
            ViewBag.admin = currentUserID == "257c4d5f-f2e3-4563-9da2-d379d5953eaa";
            return View(db.Productos.ToList());
            
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
