using Base.Domain;

namespace Domain;

public class OrderLine : BaseEntity
{
    public int AmountOfCards { get; set; }
    public float TotalAmount { get; set; }
    
    public Guid OrderId { get; set;  }
    public Order? Order { get; set; }
    
    public Guid CardId { get; set; }
    public Card? Card { get; set; }
}