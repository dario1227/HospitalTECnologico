﻿using System;
using System.ComponentModel.DataAnnotations;

namespace HospitalTEC_API.Models
{
    public class Pacientes
    {
        [Key]
        public string cedula { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string telefono { get; set; }
        public DateTime nacimiento { get; set; }
        public string medico { get; set; }
        public string direccion { get; set; }
        public string tratamientos { get; set; }
        public string patologias { get; set; }

    }
}