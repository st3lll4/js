using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace App.DAL.EF;

public class AppDbContext : IdentityDbContext
{
    
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}