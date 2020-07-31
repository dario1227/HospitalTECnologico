using Microsoft.EntityFrameworkCore;

namespace HospitalTEC_API.Models
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }
        public DbSet<Pacientes> paciente { get; set; }
    }
}