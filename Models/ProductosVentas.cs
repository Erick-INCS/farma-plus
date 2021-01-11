using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace farmaplus.Models
{
    public class ProductosVentas
    {
        public int Id { get; set; }
        public int? Id_Producto { get; set; }
        [ForeignKey("Id_Producto")]
        public Productos Productos { get; set; }

        public int? Id_HistorialVentas { get; set; }
        [ForeignKey("Id_HistorialVentas")]
        public HistorialVentas HistorialVentas { get; set; }

        public float Total { get; set; }
    }
}
