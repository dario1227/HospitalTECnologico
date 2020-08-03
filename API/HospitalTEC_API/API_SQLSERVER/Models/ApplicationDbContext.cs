﻿using CoTECAPI.Models;
 using Microsoft.EntityFrameworkCore;

namespace API_SQLSERVER.Models
{
    public class ApplicationDbContext : DbContext

    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Paciente> PACIENTE { get; set; }
  
        
    }
}
