using System.ComponentModel.DataAnnotations;

namespace HospitalTEC_API.Models
{
    public class Salones
    {
        [Key]
        public string salonid { get; set; }
        public int piso { get; set; }
        public int capacidad { get; set; }
        public string nombre { get; set; }
        public string medicina{ get; set; }

    }
}