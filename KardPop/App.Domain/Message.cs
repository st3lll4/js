using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Base.Domain;

namespace Domain;

public class Message : BaseEntity
{
    [MaxLength(512)]public string Content { get; set; } = default!;
    [MaxLength(256)]public string SenderEmail { get; set; } = default!;
    [MaxLength(256)]public string ReceiverEmail { get; set; } = default!;
}