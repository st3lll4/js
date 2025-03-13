using System.ComponentModel.DataAnnotations;
using Base.Domain;

namespace Domain;

public class Card : BaseEntity
{
    [MaxLength(128)] public string Title { get; set; } = default!;
    [MaxLength(256)] public string Description { get; set; } = default!;
    public DateTime? UpdatedAt { get; set; }
    public DateTime? SoldAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    
    public Guid UserId { get; set; }
    public User? User { get; set; }
    
    public Guid CardTypeId { get; set; }
    public CardType? CardType { get; set; }
    
    public Guid? AlbumVersionId { get; set; }
    public AlbumVersion? AlbumVersion { get; set; }
    
    public Guid? AlbumId { get; set; }
    public Album? Album { get; set; }
    
    public Guid SaleId { get; set; }
    public Sale? Sale { get; set; }
    
    public ICollection<Wishlist>? Wishlists { get; set; }
    
    public ICollection<Cart>? Carts { get; set; } // confusing naming
    
    public ICollection<CardPrice>? Prices { get; set; }
    
    public ICollection<OrderLine>? OrderLines { get; set; }
    
    public ICollection<CardPhoto>? CardPhotos { get; set; }
    
    public ICollection<ArtistOnCard>? ArtistsOnCard { get; set; }
}