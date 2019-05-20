using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Threading.Tasks;
using React_Onboarding.Models;

namespace React_Onboarding.Repositories
{
    public interface IBaseRepo : IDisposable
    {
        IEnumerable<Cheque> GetCheques();
        Cheque GetChequeByID(int CheChequeId);
        void AddCheque(Cheque cheque);
        void DeleteCheque(int bookID);
        void UpdateCheque(Cheque cheque);
        void Save();

    }
}