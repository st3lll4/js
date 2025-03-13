using Base.Domain;

namespace Domain;

public class Sale : BaseEntity
{
    public int Percentage { get; set; }
    public ICollection<Card>? Cards { get; set; }
}