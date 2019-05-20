using React_Onboarding.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Web;
using System.Data.Entity;

namespace React_Onboarding.Repositories
{
    public class BaseRepo: IBaseRepo
    {
        private readonly DbModel _dbContext;

        public BaseRepo(DbModel dbContext)
        {
            _dbContext = dbContext;
        }
        public IEnumerable<Cheque> GetCheques()
        {
            return _dbContext.Cheque.ToList();
        }
        public Cheque GetChequeByID(int id)
        {
            return _dbContext.Cheque.Find(id);
        }
        public void AddCheque(Cheque cheque)
        {
            _dbContext.Cheque.Add(cheque);
        }
        public void DeleteCheque(int ChequeId)
        {
            Cheque cheque = _dbContext.Cheque.Find(ChequeId);
            _dbContext.Cheque.Remove(cheque);
        }
        public void UpdateCheque(Cheque cheque)
        {
            _dbContext.Entry(cheque).State = EntityState.Modified;
        }
        public void Save()
        {
            _dbContext.SaveChanges();
        }
        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _dbContext.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}