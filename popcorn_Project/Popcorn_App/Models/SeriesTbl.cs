using System;
using System.Collections.Generic;

namespace Popcorn_App.Models;

public partial class SeriesTbl
{
    public int PkSeriesId { get; set; }

    public string? SeriesTitle { get; set; }

    public string? SeriesDesc { get; set; }

    public string? ImgUrl { get; set; }

    public string? VidUrl { get; set; }

    public string? Country { get; set; }

    public byte? IsDeleted { get; set; }

    public int? FkCategoryId { get; set; }

    public int? FkClientId { get; set; }

    public virtual ICollection<FavSeriesTbl> FavSeriesTbls { get; set; } = new List<FavSeriesTbl>();

    public virtual CategoryTbl? FkCategory { get; set; }

    public virtual UserTbl? FkClient { get; set; }
}
