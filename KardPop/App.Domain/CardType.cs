using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class CardType : BaseEntity
{
    [MaxLength(32)] public string CardTypeName { get; set; } = default!;
    
    public ICollection<Card>? Cards { get; set; }
}