using Base.Domain;

namespace Domain;

public class Wishlist : BaseEntity
{
    public Guid UserId { get; set; }
    public User? User { get; set; }
    
    public Guid CardId { get; set; }
    public Card? Card { get; set; }
}