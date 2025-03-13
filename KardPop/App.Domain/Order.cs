using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class Order : BaseEntity
{
    [MaxLength(20)] public string InvoiceNumber { get; set; } = default!;
    public DateTime InvoiceDate { get; set; } 
    public float TotalAmount { get; set; } 
    public EOrderStatus OrderStatus { get; set; }
    [MaxLength(256)] public string Comment { get; set; } = default!;
    
    public Guid PersonId { get; set; }
    public Person? Person { get; set; }
    
    public Guid DeliveryProviderId { get; set; }
    public DeliveryProvider? DeliveryProvider { get; set; }

    public ICollection<OrderLine>? OrderLines { get; set; } 
}