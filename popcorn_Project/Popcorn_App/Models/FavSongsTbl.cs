using System;
using System.Collections.Generic;

namespace Popcorn_App.Models;

public partial class FavSongsTbl
{
    public int PkFavSongsId { get; set; }

    public int? FkSongsId { get; set; }

    public int? FkUserId { get; set; }

    public byte? IsDeleted { get; set; }

    public virtual SongsTbl? FkSongs { get; set; }

    public virtual UserTbl? FkUser { get; set; }
}
