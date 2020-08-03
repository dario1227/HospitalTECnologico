﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Models
{
    public class Paciente
    {
        [Key]
        public int Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public string Nacionalidad { get; set; }
        public string UCI { get; set; }
        public int Region { get; set; }
        public int Estado { get; set; }
        public string Internado { get; set; }
        public DateTime  FechaIngreso { get; set; }

    }
}