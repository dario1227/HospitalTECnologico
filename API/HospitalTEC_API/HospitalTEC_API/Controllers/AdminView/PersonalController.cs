using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalTEC_API.Models;
namespace HospitalTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("HospitalTECnologico/Personal")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad Cama.
     */
    public class PersonalController : Controller
    {

        private readonly MyDbContext context;
        public PersonalController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las camas de la
        // la base de datos.
        public IEnumerable<Personal> GetPersonal()
        {
            return context.personal.ToList();
        }
        
        [HttpPost]
        // Metodo que se encarga publicar una region en la base de datos.
        public  IActionResult PostPersonal([FromBody]Personal personal)
        {
            if (ModelState.IsValid)
            {
                context.personal.Add(personal);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{cedula}")]
        // Metodo que se encarga de 
        public IActionResult PutPersonal([FromBody] Personal personal, string cedula)
        {
            if (personal.cedula != cedula)
            {
                return BadRequest();
            }

            context.Entry(personal).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(personal);
        }

        [HttpDelete("{cedula}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeleteCama(string cedula)
        {
            var personal = context.personal.FirstOrDefault(x => x.cedula == cedula);
            if (personal == null)
            {
                return BadRequest();
            }
            context.personal.Remove(personal);
            context.SaveChanges();
            return Ok(personal);
        }
    }
}