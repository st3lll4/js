using Base.Domain;

namespace Domain;

public class CardPhoto : BaseEntity
{
    public bool FrontSide { get; set; }
    public bool FrontSide2 { get; set; }
    public bool BackSide { get; set; }
    public string ImagePath { get; set; } = default!; // todo: length

    public Guid CardId { get; set; }
    public Card? Card { get; set; }
}