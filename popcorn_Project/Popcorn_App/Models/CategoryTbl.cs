using System;
using System.Collections.Generic;

namespace Popcorn_App.Models;

public partial class CategoryTbl
{
    public int PkCategoryId { get; set; }

    public string? CategoryName { get; set; }

    public virtual ICollection<MovieTbl> MovieTbls { get; set; } = new List<MovieTbl>();

    public virtual ICollection<SeriesTbl> SeriesTbls { get; set; } = new List<SeriesTbl>();

    public virtual ICollection<SongsTbl> SongsTbls { get; set; } = new List<SongsTbl>();
}
