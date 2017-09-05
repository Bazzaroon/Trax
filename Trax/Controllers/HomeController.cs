using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Trax.Models;

namespace Trax.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //var jd = new jData();
            //return View(jd.GetProducts<Product>());
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
