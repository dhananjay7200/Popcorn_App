
using Popcorn_App.Models;

namespace Popcorn_App.Interface
{
    public interface SongInterface
    {

        SongsTbl AddSong(SongsTbl song);
        string RemoveSongs(int id);
        IEnumerable<SongsTbl> ClientAllSongs(int id);

        IEnumerable<SongsTbl> GetSongsTbls();

    }
}
