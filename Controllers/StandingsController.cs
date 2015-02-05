using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Competitr.Controllers
{
    public class StandingsController : Controller
    {
        // GET: Standings
        public ActionResult Index()
        {
            return View();
        }

        // GET: Standings/Details/5
        public ActionResult getStandings(int id)
        {
            return View();
        }
          

        
    }
}
