using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalTEC_API.Models;
namespace HospitalTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("HospitalTECnologico/Camas")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad Cama.
     */
    public class CamasController : Controller
    {

        private readonly MyDbContext context;
        public CamasController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las camas de la
        // la base de datos.
        public IEnumerable<Camas> GetCamas()
        {
            return context.cama.ToList();
        }
        
        [HttpPost]
        // Metodo que se encarga publicar una region en la base de datos.
        public  IActionResult PostCama([FromBody]Camas cama)
        {
            if (ModelState.IsValid)
            {
                context.cama.Add(cama);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{camaid}")]
        // Metodo que se encarga de 
        public IActionResult PutCama([FromBody] Camas cama, string camaid)
        {
            if (cama.camaid != camaid)
            {
                return BadRequest();
            }

            context.Entry(cama).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(cama);
        }

        [HttpDelete("{id}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeleteCama(string id)
        {
            var cama = context.cama.FirstOrDefault(x => x.camaid == id);
            if (cama == null)
            {
                return BadRequest();
            }

            context.cama.Remove(cama);
            context.SaveChanges();
            return Ok(cama);
        }
    }
}