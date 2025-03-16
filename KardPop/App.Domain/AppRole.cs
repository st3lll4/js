using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Domain;

public class AppRole : IdentityRole<Guid>
{
    [MaxLength(128)]public string? UserRoleDescription { get; set; }
}