using System;
using System.Collections.Generic;

namespace Popcorn_App.Models;

public partial class UserTbl
{
    public int PkUserId { get; set; }

    public string? UserName { get; set; }

    public string? Userrole { get; set; }

    public string? UserEmail { get; set; }

    public string? UserPassword { get; set; }

    public string? UserCity { get; set; }

    public string? UserPhone { get; set; }

    public string? UserImage { get; set; }

    public byte? IsDeleted { get; set; }

    public byte? IsApproved { get; set; }

    public int? FkSubId { get; set; }

    public virtual ICollection<FavMoviesTbl> FavMoviesTbls { get; set; } = new List<FavMoviesTbl>();

    public virtual ICollection<FavSeriesTbl> FavSeriesTbls { get; set; } = new List<FavSeriesTbl>();

    public virtual ICollection<FavSongsTbl> FavSongsTbls { get; set; } = new List<FavSongsTbl>();

    public virtual SubscriptionTbl? FkSub { get; set; }

    public virtual ICollection<MovieTbl> MovieTbls { get; set; } = new List<MovieTbl>();

    public virtual ICollection<SeriesTbl> SeriesTbls { get; set; } = new List<SeriesTbl>();

    public virtual ICollection<SongsTbl> SongsTbls { get; set; } = new List<SongsTbl>();
}
