using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace farmaplus.Models
{
    public class Factura
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public float Total { get; set; }
        public float IVA { get; set; }
        public int? Id_Cliente { get; set; }
        [ForeignKey("Id_Cliente")]
        public Clientes Clientes { get; set; }
    }
}
