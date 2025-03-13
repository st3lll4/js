using Base.Domain;

namespace Domain;

public class DeliveryOption : BaseEntity
{
    public ECountry Country { get; set; }
    
    public Guid DeliveryProviderId { get; set; }
    public DeliveryProvider? DeliveryProvider { get; set; }
    
    public ICollection<DeliveryOptionPrice>? DeliveryOptionPrices { get; set; }
}