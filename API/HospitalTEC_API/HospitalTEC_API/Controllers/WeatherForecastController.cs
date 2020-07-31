using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HospitalTEC_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HospitalTEC_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : Controller
    {
        private readonly MyDbContext context;
        
        public WeatherForecastController(MyDbContext context)
        {
            
            this.context=context;
        }

        public IEnumerable<Pacientes> GetPacientes()
        {
            return context.paciente.ToList();
        }
    }
}