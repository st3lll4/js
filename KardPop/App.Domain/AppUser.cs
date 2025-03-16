using System.ComponentModel.DataAnnotations;
using Base.Domain;
using Microsoft.AspNetCore.Identity;

namespace Domain;

public class AppUser : IdentityUser<Guid>
{
    public Guid? PhotoId { get; set; }
    public ProfilePhoto? Photo { get; set; }
    
    public ICollection<Card>? Cards { get; set; }
    public ICollection<Cart>? Cart { get; set; } // confusing naming
    public ICollection<Wishlist>? Wishlist { get; set; }
    
    public ICollection<Person>? People { get; set; } // kas peaks olema 1:1 
}