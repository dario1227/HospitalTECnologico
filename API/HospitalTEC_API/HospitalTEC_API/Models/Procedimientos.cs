using System.ComponentModel.DataAnnotations;

namespace HospitalTEC_API.Models
{
    public class Procedimientos
    {
        [Key]
        public string procedimientoid { get; set; }
        public string nombre { get; set; }
        public string recuperacion { get; set; }

    }
}