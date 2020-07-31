using System.ComponentModel.DataAnnotations;

namespace HospitalTEC_API.Models
{
    public class Camas
    {
        [Key]
        public string camaid { get; set; }
        public string uci { get; set; }
        public string salon { get; set; }
        public string equipomedico { get; set; }

    }
}