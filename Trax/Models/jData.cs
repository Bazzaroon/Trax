using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Trax.Models
{
    public class jData
    {
        public List<T> GetProducts<T>() where T : class
        {
            var Products = new List<T>();

            using(var ctx = new TrackerEntities())
            {
                Products = ctx.Set<T>().ToList();
            }
            
            return Products;
        }

        public void Add<T>(T obj) where T : class
        {
            using (var ctx = new TrackerEntities())
            {
                ctx.Set<T>().Add(obj);
            }    
        }
    
    }

    
}