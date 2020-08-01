using Microsoft.EntityFrameworkCore;

namespace HospitalTEC_API.Models
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }
        public DbSet<Pacientes> paciente { get; set; }
        public DbSet<Camas> cama { get; set; }
        public DbSet<EquipoMedico> equipo_medico { get; set; }
        public DbSet<Historial> historial_clinico { get; set; }
        public DbSet<Personal> personal{ get; set; }
        public DbSet<Reservacion> reservacion { get; set; }
        public DbSet<Salones> salon { get; set; }
        public DbSet<Procedimientos> procedimiento { get; set; }
        
    }
}