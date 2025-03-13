using Base.Domain;

namespace Domain;

public class ArtistInGroup : BaseEntity
{
    public DateTime InGroupFrom { get; set; }
    public DateTime? InGroupUntil { get; set; }
    
    public Guid ArtistId { get; set; }
    public Artist? Artist { get; set; }
    
    public Guid GroupId { get; set; }
    public Group? Group { get; set; }   
}