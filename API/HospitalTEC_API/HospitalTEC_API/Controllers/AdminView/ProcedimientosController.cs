using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalTEC_API.Models;
namespace HospitalTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("HospitalTECnologico/Procedimiento")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad Cama.
     */
    public class ProcedimientoController : Controller
    {

        private readonly MyDbContext context;
        public ProcedimientoController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las camas de la
        // la base de datos.
        public IEnumerable<Procedimientos> GetProcedimientos()
        {
            return context.procedimiento.ToList();
        }
        
        [HttpPost]
        // Metodo que se encarga publicar una region en la base de datos.
        public  IActionResult PostProcedimiento([FromBody]Procedimientos Proc)
        {
            if (ModelState.IsValid)
            {
                context.procedimiento.Add(Proc);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{procid}")]
        // Metodo que se encarga de 
        public IActionResult PutProcedimiento([FromBody] Procedimientos proc, string procid)
        {
            if (proc.procedimientoid!= procid)
            {
                return BadRequest();
            }

            context.Entry(proc).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(proc);
        }

        [HttpDelete("{procid}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeleteProcedimiento(string procid)
        {
            var proc = context.procedimiento.FirstOrDefault(x => x.procedimientoid == procid);
            if (proc == null)
            {
                return BadRequest();
            }

            context.procedimiento.Remove(proc);
            context.SaveChanges();
            return Ok(proc);
        }
    }
}