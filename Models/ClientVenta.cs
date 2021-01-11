using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace farmaplus.Models
{
    public class ProductoVenta {
        public String IdProducto { get; set; }
        public float Cantidad { get; set; }
        public float Importe { get; set; }
    }

    public class ClientVenta
    {
        public DateTime Fecha { get; set; }
        public int Total { get; set; }
        public ProductoVenta[] Productos { get; set; }
    }
}
