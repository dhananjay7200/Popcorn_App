using System;
using System.Collections.Generic;

namespace Popcorn_App.Models;

public partial class FavMoviesTbl
{
    public int PkFavMovieId { get; set; }

    public int? FkMovieId { get; set; }

    public int? FkUserId { get; set; }

    public byte? IsDeleted { get; set; }

    public virtual MovieTbl? FkMovie { get; set; }

    public virtual UserTbl? FkUser { get; set; }
}
