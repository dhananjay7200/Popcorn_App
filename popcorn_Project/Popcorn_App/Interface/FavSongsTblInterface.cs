using Popcorn_App.Models;

namespace Popcorn_App.Interface
{
    public interface FavSongsTblInterface
    {
        //to get all the fav songs
        IEnumerable<FavSongsTbl> GetFavSongsTbls();

        //to post the favsongs
        FavSongsTbl PostFavSongsTbl(FavSongsTbl favSongsTbl);

        IQueryable<SongsTbl> userfavSongs(int id);

        //to delete the fav songs from favsongs table
        string DeleteFavSongsTbl(int userid, int songid);


    }
}
