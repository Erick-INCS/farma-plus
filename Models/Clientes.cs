using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace farmaplus.Models
{
    public class Clientes
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string ApellidoP { get; set; }
        public string ApellidoM { get; set; }
        public string Domicilio { get; set; }
        public string RFC { get; set; }
        public string Email { get; set; }
    }
}
