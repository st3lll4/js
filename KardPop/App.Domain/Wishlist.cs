using Base.Domain;

namespace Domain;

public class Wishlist : BaseEntity
{
    public Guid UserId { get; set; }
    public AppUser? User { get; set; }
    
    public Guid CardId { get; set; }
    public Card? Card { get; set; }
}