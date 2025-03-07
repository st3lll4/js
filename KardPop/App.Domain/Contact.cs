namespace Domain;

public class Contact
{
    public string Data { get; set; } = default!;

    public Guid ContactTypeId { get; set; }
    public ContactType? ContactType { get; set; }
    
    //lisa siia person peale seda kui teed personi

}