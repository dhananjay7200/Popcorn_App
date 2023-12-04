using Popcorn_App.Models;

namespace Popcorn_App.Interface
{
    public interface FavSeriesTblInterface
    {
        IEnumerable<FavSeriesTbl> GetFavSeriesTbls();

        FavSeriesTbl PostFavSeriesTbl(FavSeriesTbl favSeriesTbl);

        IQueryable<SeriesTbl> userfavseries(int id);

        string DeleteFavSeriesTbl(int userid, int movieid);

    }
}
