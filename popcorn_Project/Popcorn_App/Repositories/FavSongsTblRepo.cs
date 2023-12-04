using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Repositories
{
    public class FavSongsTblRepo : FavSongsTblInterface
    {


        private readonly MajorContext _context;

        public FavSongsTblRepo(MajorContext context)
        {
            _context = context;
        }


        public IEnumerable<FavSongsTbl> GetFavSongsTbls()
        {
            return _context.FavSongsTbls.ToList();
        }

        public FavSongsTbl PostFavSongsTbl(FavSongsTbl favSongsTbl)
        {
            FavSongsTbl data = CheckRepeatFav((int)favSongsTbl.FkUserId, (int)favSongsTbl.FkSongsId);

            if (data != null)
            {
                return null;
            }
            _context.FavSongsTbls.Add(favSongsTbl);
            _context.SaveChanges();

            //  return favSongsTbl;
            return favSongsTbl;

        }


        //for  fetchinf the favs of the users
        public IQueryable<SongsTbl> userfavSongs(int id)
        {
            List<SongsTbl> list = new List<SongsTbl>();

            return from a in _context.SongsTbls
                   join p in _context.FavSongsTbls on a.PkSongsId equals p.FkSongsId
                   where
                   p.FkUserId == id
                   select a;
        }

        //to delete from the fav songs
        public string DeleteFavSongsTbl(int userid, int songid)
        {
            // List<FavSongsTbl> favdel=new List<FavSongsTbl>();

            FavSongsTbl favdel1 = _context.FavSongsTbls.FirstOrDefault(x => x.FkSongsId == songid && x.FkUserId == userid); /*from b in _context.FavSongsTbls
                    where
                        b.FkSongsId == songid &&
                        b.FkUserId == userid
                    select b;*/
            _context.FavSongsTbls.Remove(favdel1);
            _context.SaveChanges();
            return "removed";




        }
        //delete fav songs

        //to check repetition
        public FavSongsTbl CheckRepeatFav(int userid, int songid)
        {
            FavSongsTbl ft = _context.FavSongsTbls.FirstOrDefault(x => x.FkSongsId == songid && x.FkUserId == userid);
            if (ft == null)
            {
                return null;
            }
            return ft;
        }


    }
}
