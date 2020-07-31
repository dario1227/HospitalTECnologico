using System;
using System.ComponentModel.DataAnnotations;

namespace HospitalTEC_API.Models
{
    public class Historial
    {
        [Key]
        public string historialid { get; set; }
        public string procedimiento { get; set; }
        public string paciente { get; set; }
        public DateTime fecharealizado{ get; set; }
        public string tratamiento { get; set; }
        public string patologia { get; set; }
        
    }
}