using System;
using System.ComponentModel.DataAnnotations;

namespace HospitalTEC_API.Models
{
    public class Reservacion
    {
        [Key]
        public string reservacionid { get; set; }
        public string procedimiento { get; set; }
        public DateTime fechaingreso { get; set; }
        public DateTime fechasalida { get; set; }
        public string paciente { get; set; }
        public string cama { get; set; }


    }
}