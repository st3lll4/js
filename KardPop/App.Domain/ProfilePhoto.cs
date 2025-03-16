using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class ProfilePhoto : BaseEntity
{
    [MaxLength(265)]public string ImagePath { get; set; } = default!; // todo: length
    public AppUser User { get; set; } = default!;
}