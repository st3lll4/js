using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class Artist : BaseEntity
{
   [MaxLength(64)] public string FirstName { get; set; } = default!;
   [MaxLength(64)] public string LastName { get; set; } = default!;
   [MaxLength(64)] public string StageName { get; set; } = default!;
   
   public ICollection<ArtistOnCard>? ArtistOnCards { get; set; }
   
   public ICollection<ArtistInGroup>? ArtistInGroups { get; set; }
   
   public ICollection<Album>? Albums { get; set; }
}