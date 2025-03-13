using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class Person : BaseEntity
{
    [MaxLength(128)] public string FirstName { get; set; } = default!;
    [MaxLength(128)] public string LastName { get; set; } = default!; 
    public DateTime? DeletedAt { get; set; } 
    
    public ICollection<Contact>? Contacts { get; set; }
    public ICollection<User>? Users { get; set; }
    public ICollection<Order>? Orders { get; set; }
}