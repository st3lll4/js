using Base.Domain;

namespace Domain;

public class DeliveryOptionPrice : BaseEntity
{
    public float Amount { get; set; }
    public ECurrency Currency { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    
    public Guid DeliveryOptionId { get; set; }
    public DeliveryOption? DeliveryOption { get; set; }
}