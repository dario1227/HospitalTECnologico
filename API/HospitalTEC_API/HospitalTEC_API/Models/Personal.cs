using System;
using System.ComponentModel.DataAnnotations;

namespace HospitalTEC_API.Models
{
    public class Personal
    {
        [Key]
        public string cedula{ get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string telefono { get; set; }
        public string direccion { get; set; }
        public DateTime fechaingreso { get; set; }
        public string nacimiento { get; set; }  
        public string cargo{ get; set; }


    }
}