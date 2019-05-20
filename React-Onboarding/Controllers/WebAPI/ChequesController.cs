using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using React_Onboarding.Models;
using React_Onboarding.Repositories;

namespace React_Onboarding.Controllers
{
    public class ChequesController : ApiController
    {
        private IBaseRepo _chequerepo;

        public ChequesController()
        {
            this._chequerepo = new BaseRepo(new DbModel());
        }

        // GET: api/Cheques
        public IHttpActionResult GetCheque()
        {
            var cheques = from cheque in _chequerepo.GetCheques()
                          select cheque;
            return Ok(cheques); 
        }

        // POST: api/Cheques
        [ResponseType(typeof(Cheque))]
        public IHttpActionResult PostCheque(Cheque cheque)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _chequerepo.AddCheque(cheque);
            _chequerepo.Save();

            return CreatedAtRoute("DefaultApi", new { id = cheque.ChequeId }, cheque);
        }  
    }
}