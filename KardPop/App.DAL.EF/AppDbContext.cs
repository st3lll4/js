using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace App.DAL.EF;

public class AppDbContext : IdentityDbContext<AppUser, AppRole, Guid>
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Album> Albums { get; set; } = default!;
    public DbSet<AlbumVersion> AlbumVersions { get; set; } = default!;
    public DbSet<Artist> Artists { get; set; } = default!;
    public DbSet<ArtistInGroup> ArtistsInGroups { get; set; } = default!;
    public DbSet<Card> Cards { get; set; } = default!;
    public DbSet<CardPhoto> CardPhotos { get; set; } = default!;
    public DbSet<CardPrice> CardPrices { get; set; } = default!;
    public DbSet<CardType> CardTypes { get; set; } = default!;
    public DbSet<Cart> Carts { get; set; } = default!;
    public DbSet<Contact> Contacts { get; set; } = default!;
    public DbSet<ContactType> ContactTypes { get; set; } = default!;
    public DbSet<DeliveryOption> DeliveryOptions { get; set; } = default!;
    public DbSet<DeliveryOptionPrice> DeliveryOptionPrices { get; set; } = default!;
    public DbSet<DeliveryProvider> DeliveryProviders { get; set; } = default!;
    public DbSet<Group> Groups { get; set; } = default!;
    public DbSet<Message> Messages { get; set; } = default!;
    public DbSet<Order> Orders { get; set; } = default!;
    public DbSet<OrderLine> OrderLines { get; set; } = default!;
    public DbSet<Person> Persons { get; set; } = default!;
    public DbSet<ProfilePhoto> ProfilePhotos { get; set; } = default!;
    public DbSet<Sale> Sales { get; set; } = default!;
    public DbSet<AppUser> AppUsers { get; set; } = default!;
    public DbSet<AppRole> AppRoles { get; set; } = default!;
    public DbSet<Wishlist> Wishlists { get; set; } = default!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder); // idk what is this but it solved my error
        
        modelBuilder.Entity<CardPrice>()
            .Property(cp => cp.Currency)
            .HasConversion<string>();
        
        modelBuilder.Entity<Order>()
            .Property(cp => cp.OrderStatus)
            .HasConversion<string>();
        
        modelBuilder.Entity<CardPrice>()
            .Property(cp => cp.Currency)
            .HasConversion<string>();
        
        modelBuilder.Entity<DeliveryOptionPrice>()
            .Property(cp => cp.Currency)
            .HasConversion<string>();
        
        modelBuilder.Entity<ContactType>()
            .Property(cp => cp.ContactTypeName)
            .HasConversion<string>();
    }
}