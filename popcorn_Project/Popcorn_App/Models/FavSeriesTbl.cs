using System;
using System.Collections.Generic;

namespace Popcorn_App.Models;

public partial class FavSeriesTbl
{
    public int PkFavSeriesId { get; set; }

    public int? FkSeriesId { get; set; }

    public int? FkUserId { get; set; }

    public byte? IsDeleted { get; set; }

    public virtual SeriesTbl? FkSeries { get; set; }

    public virtual UserTbl? FkUser { get; set; }
}
