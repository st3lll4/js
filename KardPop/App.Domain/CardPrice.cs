using Base.Domain;

namespace Domain;

public class CardPrice : BaseEntity
{
    public float Amount { get; set; }
    public ECurrency Currency { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    
    public Guid CardId { get; set; }
    public Card? Card { get; set; }
}