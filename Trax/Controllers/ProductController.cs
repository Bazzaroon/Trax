using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;
using Trax.Models;
using Newtonsoft.Json.Serialization;

namespace Trax.Controllers
{
    public class ProductController : Controller
    {
        //
        // GET: /Product/
        private string API_KEY { get; set; } 
        
        public ProductController()
        {
            API_KEY =  "&api_key=" + ConfigurationManager.AppSettings["ProjectAPIKey"].ToString();
            API_KEY += "&client_key=" + ConfigurationManager.AppSettings["PersonalAPiKey"].ToString();
        }
 
        
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public void AddJson(string format)
        {
            var web = new Web();
            
            string sBuf = string.Empty;
            using (var str = new StreamReader(Request.InputStream))
            {
                sBuf = str.ReadToEnd();
            }

            web.GetLatestMovieFile(format);
        }


    }
}
