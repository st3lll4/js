using Base.Domain;

namespace Domain;

public class ArtistOnCard : BaseEntity
{
    public Guid ArtistId { get; set; }
    public Artist? Artist { get; set; }
    
    public Guid CardId { get; set; }
    public Card? Card { get; set; }
}