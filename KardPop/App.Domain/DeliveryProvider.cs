using Base.Domain;

namespace Domain;

public class DeliveryProvider : BaseEntity
{
    public ECountry Country { get; set; }
    
    public ICollection<Order>? Orders { get; set; } 
    public ICollection<DeliveryOption>? DeliveryOptions { get; set; } 
}