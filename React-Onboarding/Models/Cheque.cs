using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace React_Onboarding.Models
{
    public class Cheque
    {
        [Key]
        public int ChequeId { get; set; }

        [Required(ErrorMessage = "Enter Payee Name")]
        [StringLength(20, MinimumLength = 2)]
        public string PayeeName { get; set; }

        [Range(1,10000000000000,ErrorMessage = "Please enter valid the Amount")]
        public double Amount { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime Date { get; set; }
    }
}