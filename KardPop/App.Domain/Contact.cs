using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class Contact : BaseEntity
{
    [MaxLength(256)]public string Data { get; set; } = default!; // todo: kahtlane 

    public Guid ContactTypeId { get; set; }
    public ContactType? ContactType { get; set; }
    
    public Guid PersonId { get; set; }
    public Person? Person { get; set; }
}