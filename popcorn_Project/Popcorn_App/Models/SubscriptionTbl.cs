using System;
using System.Collections.Generic;

namespace Popcorn_App.Models;

public partial class SubscriptionTbl
{
    public int PkSubId { get; set; }

    public string? SubType { get; set; }

    public virtual ICollection<UserTbl> UserTbls { get; set; } = new List<UserTbl>();
}
