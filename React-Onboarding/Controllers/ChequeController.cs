﻿using React_Onboarding.Models;
using React_Onboarding.Repositories;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http.Results;
using System.Web.Http;

namespace React_Onboarding.Controllers
{
    
    public class ChequeController : Controller
    {
 
        // GET: Customer
        public ActionResult Index()
        {
            //Return the View
            return View();
        }
        
    }
}