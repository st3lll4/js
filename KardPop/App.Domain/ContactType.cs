using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class ContactType : BaseEntity
{
    [MaxLength(128)] public EContactType ContactTypeName { get; set; } = default!;
    
    public ICollection<Contact>? Contacts { get; set; } 
}