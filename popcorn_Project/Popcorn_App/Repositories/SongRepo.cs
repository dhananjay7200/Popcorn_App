using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Repositories
{
    public class SongRepo : SongInterface
    {
        private readonly MajorContext _context;


        public SongRepo(MajorContext context)
        {
            _context = context;
        }
        private SongsTbl CheckSongs(SongsTbl song)
        {
            SongsTbl data = _context.SongsTbls.FirstOrDefault(x => x.SongTitle.Equals(song.SongTitle));
            if (data == null)
            {
                return null;
            }
            return data;
        }
        public SongsTbl AddSong(SongsTbl song)
        {
            SongsTbl data = CheckSongs(song);
            if (data != null)
            {
                return null;
            }
            _context.SongsTbls.Add(song);
            _context.SaveChanges();

            return song;
        }

        public IEnumerable<SongsTbl> ClientAllSongs(int id)
        {
            IEnumerable<SongsTbl> songs = _context.SongsTbls.Where(x => x.FkClientId == id && x.IsDeleted == 0).ToList();

            return songs;
        }

        public string RemoveSongs(int id)
        {
            SongsTbl m = _context.SongsTbls.FirstOrDefault(x => x.PkSongsId == id);
            if (m == null)
            {
                return string.Empty;
            }
            m.IsDeleted = 1;
            _context.SaveChanges();
            return "deleted";
        }

        public IEnumerable<SongsTbl> GetSongsTbls()
        {
            if (_context.SongsTbls == null)
            {
                return null;
            }
            return _context.SongsTbls.ToList();
        }
    }

}
