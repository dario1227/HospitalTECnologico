using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalTEC_API.Models;
namespace HospitalTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("HospitalTECnologico/Historial")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad Cama.
     */
    public class HistorialController : Controller
    {

        private readonly MyDbContext context;
        public HistorialController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las camas de la
        // la base de datos.
        public IEnumerable<Historial> GetHistorial()
        {
            return context.historial_clinico.FromSqlRaw(" SELECT * from ORDENHistorial()");
        }
        
        [HttpPost]
        // Metodo que se encarga publicar una region en la base de datos.
        public  IActionResult PostHistorial([FromBody]Historial historial)
        {
            if (ModelState.IsValid)
            {
                context.historial_clinico.Add(historial);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{historialid}")]
        // Metodo que se encarga de 
        public IActionResult PutHistorial([FromBody] Historial historial, string historialid)
        {
            if (historial.historialid != historialid)
            {
                return BadRequest();
            }

            context.Entry(historial).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(historial);
        }

        [HttpDelete("{historialid}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeleteHistorial(string historialid)
        {
            var historial = context.historial_clinico.FirstOrDefault(x => x.historialid== historialid);
            if (historial == null)
            {
                return BadRequest();
            }

            context.historial_clinico.Remove(historial);
            context.SaveChanges();
            return Ok(historial);
        }
    }
}