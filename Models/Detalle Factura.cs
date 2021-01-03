using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace farmaplus.Models
{
    public class Detalle_Factura
    {

        public int? Id_factura { get; set; }
        [ForeignKey("Id_factura")]
        public Factura Factura { get; set; }
        public int? Id_producto { get; set; }
        [ForeignKey("Id_producto")]
        public Productos Productos { get; set; }
        public int Cantidad  { get; set; }
        public float Precio { get; set; }
    }
}
