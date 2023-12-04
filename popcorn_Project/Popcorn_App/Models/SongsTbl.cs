using System;
using System.Collections.Generic;

namespace Popcorn_App.Models;

public partial class SongsTbl
{
    public int PkSongsId { get; set; }

    public string? SongTitle { get; set; }

    public string? SongDesc { get; set; }

    public string? ImgUrl { get; set; }

    public string? VidUrl { get; set; }

    public string? Generation { get; set; }

    public DateTime? ReleaseDate { get; set; }

    public string? SongSinger { get; set; }

    public byte? IsDeleted { get; set; }

    public int? FkCategoryId { get; set; }

    public int? FkClientId { get; set; }

    public virtual ICollection<FavSongsTbl> FavSongsTbls { get; set; } = new List<FavSongsTbl>();

    public virtual CategoryTbl? FkCategory { get; set; }

    public virtual UserTbl? FkClient { get; set; }
}
