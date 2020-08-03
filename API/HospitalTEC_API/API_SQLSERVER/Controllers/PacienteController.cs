using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections;
using API_SQLSERVER.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoTECAPI.Models;
using Microsoft.Data.SqlClient;

namespace API_SQLSERVER.Controllers
{
    [Produces("application/json")]
    [Route("CoTEC/Pacientes")]
    public class PacienteController : Controller
    {
        private readonly ApplicationDbContext context;

        public PacienteController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener los pacientes de la
        // la base de datos.
        public IEnumerable<Paciente> GetPacientes()
        {
            return context.PACIENTE.FromSqlRaw("SELECT * FROM PACIENTE WHERE Nacionalidad='Costarricense'").ToList();

     }



    }


}
