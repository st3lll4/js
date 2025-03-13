using Base.Domain;

namespace Domain;

public class ProfilePhoto : BaseEntity
{
    public string ImagePath { get; set; } = default!; // todo: length
    public User User { get; set; } = default!;
}