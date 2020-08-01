using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalTEC_API.Models;
namespace HospitalTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("HospitalTECnologico/Salones")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad Cama.
     */
    public class SalonesController : Controller
    {

        private readonly MyDbContext context;
        public SalonesController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las camas de la
        // la base de datos.
        public IEnumerable<Salones> GetSalones()
        {
            return context.salon.ToList();
        }

        [HttpPost]
        // Metodo que se encarga publicar una region en la base de datos.
        public IActionResult PostSalones([FromBody]Salones salon)
        {
            if (ModelState.IsValid)
            {
                context.salon.Add(salon);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{salonid}")]
        // Metodo que se encarga de 
        public IActionResult PutSalon([FromBody] Salones salon, string salonid)
        {
            if (salon.salonid != salonid)
            {
                return BadRequest();
            }
            context.Entry(salon).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(salon);
        }

        [HttpDelete("{salonid}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeleteCama(string salonid)
        {
            var salon = context.salon.FirstOrDefault(x => x.salonid == salonid);
            if (salon == null)
            {
                return BadRequest();
            }
            context.salon.Remove(salon);
            context.SaveChanges();
            return Ok(salon);
        }
    }
}