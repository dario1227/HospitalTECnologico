using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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