using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class Group : BaseEntity
{
    [MaxLength(64)] public string GroupName { get; set; } = default!;
    [MaxLength(64)] public string FandomName { get; set; } = default!;

    public ICollection<ArtistInGroup>? ArtistsInGroup { get; set; }
    
    public ICollection<Album>? Albums { get; set; }
}