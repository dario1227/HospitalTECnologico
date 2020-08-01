using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalTEC_API.Models;
namespace HospitalTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("HospitalTECnologico/Reservacion")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad Cama.
     */
    public class ReservacionController : Controller
    {

        private readonly MyDbContext context;
        public ReservacionController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las camas de la
        // la base de datos.
        public IEnumerable<Reservacion> GetReservacion()
        {
            return context.reservacion.ToList();
        }
        
        [HttpPost]
        // Metodo que se encarga publicar una region en la base de datos.
        public  IActionResult PostReservacion([FromBody]Reservacion reservacion)
        {
            if (ModelState.IsValid)
            {
                context.reservacion.Add(reservacion);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{reservacionid}")]
        // Metodo que se encarga de 
        public IActionResult PutReservacion([FromBody] Reservacion reservacion, string reservacionid)
        {
            if (reservacion.reservacionid != reservacionid)
            {
                return BadRequest();
            }

            context.Entry(reservacion).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(reservacion);
        }

        [HttpDelete("{reservacionid}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeleteReservacion(string reservacionid)
        {
            var reservacion = context.reservacion.FirstOrDefault(x => x.reservacionid == reservacionid);
            if (reservacion== null)
            {
                return BadRequest();
            }
            context.reservacion.Remove(reservacion);
            context.SaveChanges();
            return Ok(reservacion);
        }
    }
}