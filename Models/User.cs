using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace farmaplus.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string ApellidoP { get; set; }
        public string ApellidoM { get; set; }
        public string Email { get; set; }
        public string Pass { get; set; }    
        public int? Id_Typeusr { get; set; }
        [ForeignKey("Id_Typeusr")]
        public UsrType UsrType { get; set; }




    }
}
