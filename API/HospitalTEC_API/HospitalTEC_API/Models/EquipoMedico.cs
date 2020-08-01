using System.ComponentModel.DataAnnotations;

namespace HospitalTEC_API.Models
{
    public class EquipoMedico
    {
        [Key]
        public string equipoid { get; set; }
        public string nombre { get; set; }
        public string proveedor { get; set; }
        public int cantdisponible { get; set; }

    }
}