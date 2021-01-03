using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace farmaplus.Models
{
    public class Productos
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public DateTime Caducidad { get; set; }
        public float Precio { get; set; }
        public int Lote { get; set; }

    }
}
