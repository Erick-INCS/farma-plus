using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace farmaplus.Models
{
    public class HistorialVentas
    {
        public int Id { get; set; }

        public DateTime Fecha { get; set; }
        public float Total { get; set; }
    }
}
