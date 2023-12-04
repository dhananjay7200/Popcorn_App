using System;
using System.Collections.Generic;

namespace Popcorn_App.Models;

public partial class MovieTbl
{
    public int PkMovieId { get; set; }

    public string? MovieTitle { get; set; }

    public string? MovieDesc { get; set; }

    public string? ImgUrl { get; set; }

    public string? VidUrl { get; set; }

    public byte? IsDeleted { get; set; }

    public int? FkCategoryId { get; set; }

    public int? FkClientId { get; set; }

    public virtual ICollection<FavMoviesTbl> FavMoviesTbls { get; set; } = new List<FavMoviesTbl>();

    public virtual CategoryTbl? FkCategory { get; set; }

    public virtual UserTbl? FkClient { get; set; }
}
