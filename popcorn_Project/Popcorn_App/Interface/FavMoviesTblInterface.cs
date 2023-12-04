using Popcorn_App.Models;

namespace Popcorn_App.Interface
{
    public interface FavMoviesTblInterface
    {
        IEnumerable<FavMoviesTbl> GetFavMoviesTbl();
        FavMoviesTbl PostFavMoviesTbl(FavMoviesTbl favMoviesTbl);
        IQueryable<MovieTbl> userfavmovies(int id);
        string DeleteFavMoviesTbl(int userid, int movieid);
    }
}
