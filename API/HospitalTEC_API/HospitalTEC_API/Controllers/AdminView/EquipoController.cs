using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalTEC_API.Models;
namespace HospitalTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("HospitalTECnologico/Equipo")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad Cama.
     */
    public class EquipoController : Controller
    {

        private readonly MyDbContext context;
        public EquipoController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las camas de la
        // la base de datos.
        public IEnumerable<EquipoMedico> GetEquipoMedicos()
        {
            return context.equipo_medico.ToList();
        }
        
        [HttpPost]
        // Metodo que se encarga publicar una region en la base de datos.
        public  IActionResult PostEquipo([FromBody]EquipoMedico equipo )
        {
            if (ModelState.IsValid)
            {
                context.equipo_medico.Add(equipo);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{equipoid}")]
        // Metodo que se encarga de 
        public IActionResult PutEquipo([FromBody] EquipoMedico equipo, string equipoid)
        {
            if (equipo.equipoid!= equipoid)
            {
                return BadRequest();
            }

            context.Entry(equipo).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(equipo);
        }

        [HttpDelete("{equipoid}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeleteEquipo(string equipoid)
        {
            var equipo = context.equipo_medico.FirstOrDefault(x => x.equipoid == equipoid);
            if (equipo == null)
            {
                return BadRequest();
            }

            context.equipo_medico.Remove(equipo);
            context.SaveChanges();
            return Ok(equipo);
        }
    }
}