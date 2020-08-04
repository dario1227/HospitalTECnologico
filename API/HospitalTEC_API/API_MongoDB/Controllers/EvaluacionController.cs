using API_MongoDB.Models;
using API_MongoDB.Servicios;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API_MongoDB.Controllers
{
    [Route("MongoDB")]
    [ApiController]
    public class EvaluacionController : ControllerBase
    {
        private readonly calificacionService _calificacionService;

        public EvaluacionController(calificacionService calificacionService)
        {
            _calificacionService = calificacionService;
        }

        [HttpGet]
        public ActionResult<List<calificacion>> Get() =>
            _calificacionService.Get();
        

        [HttpPost]
        public ActionResult<calificacion> Create(calificacion calificacion)
        {
            _calificacionService.Create(calificacion);

            return calificacion;
        }

        
    }
}