using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class AlbumVersion : BaseEntity
{
    [MaxLength(128)] public string AlbumName { get; set; } = default!;
    [MaxLength(128)] public string? Comment { get; set; } = default!; 
    
    public Guid AlbumId { get; set; }
    public Album? Album { get; set; }
    
    public ICollection<Card>? Cards { get; set; }
}