using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class Album : BaseEntity
{
    [MaxLength(128)] public string Title { get; set; } = default!;
    public DateTime ReleaseDate { get; set; }
    
    public Guid? ArtistId { get; set; } 
    public Artist? Artist { get; set; }
    
    public Guid? GroupId { get; set; }
    public Group? Group { get; set; }
    
    public ICollection<AlbumVersion>? AlbumVersions { get; set; }
    public ICollection<Card>? Cards { get; set; }
}