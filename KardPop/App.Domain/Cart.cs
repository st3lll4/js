using Base.Domain;

namespace Domain;

public class Cart : BaseEntity
{
    public Guid UserId { get; set; }
    public User? User { get; set; }
    
    public Guid CardId { get; set; }
    public Card? Card { get; set; }
}