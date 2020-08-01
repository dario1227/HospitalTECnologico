using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalTEC_API.Models;
namespace HospitalTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("HospitalTECnologico/Pacientes")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad Cama.
     */
    public class PacienteController : Controller
    {

        private readonly MyDbContext context;
        public PacienteController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las camas de la
        // la base de datos.
        public IEnumerable<Pacientes> GetPacientes()
        {
            return context.paciente.ToList();
        }
        
        [HttpPost]
        // Metodo que se encarga publicar una region en la base de datos.
        public  IActionResult PostPaciente([FromBody]Pacientes paciente)
        {
            if (ModelState.IsValid)
            {
                context.paciente.Add(paciente);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{cedula}")]
        // Metodo que se encarga de 
        public IActionResult PutPaciente([FromBody] Pacientes paciente, string cedula)
        {
            if (paciente.cedula != cedula)
            {
                return BadRequest();
            }

            context.Entry(paciente).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(paciente);
        }

        [HttpDelete("{cedula}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeletePaciente(string cedula)
        {
            var paciente = context.paciente.FirstOrDefault(x => x.cedula == cedula);
            if (paciente== null)
            {
                return BadRequest();
            }

            context.paciente.Remove(paciente);
            context.SaveChanges();
            return Ok(paciente);
        }
    }
}