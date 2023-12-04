using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Repositories
{
    public class FavMoviesTblRepo : FavMoviesTblInterface
    {
        private readonly MajorContext _context;

        public FavMoviesTblRepo(MajorContext context)
        {
            _context = context;
        }

        public IEnumerable<FavMoviesTbl> GetFavMoviesTbl()
        {
            return _context.FavMoviesTbls.ToList();
        }



        public FavMoviesTbl PostFavMoviesTbl(FavMoviesTbl favMoviesTbl)
        {
            FavMoviesTbl data = CheckRepeatFavMovie((int)favMoviesTbl.FkUserId, (int)favMoviesTbl.FkMovieId);


            if (data != null)
            {
                return null;
            }
            _context.FavMoviesTbls.Add(favMoviesTbl);
            _context.SaveChanges();

            //  return favSongsTbl;
            return favMoviesTbl;
        }




        //checkRepeatFav
        public FavMoviesTbl CheckRepeatFavMovie(int userid, int movieid)
        {
            FavMoviesTbl ft = _context.FavMoviesTbls.FirstOrDefault(x => x.FkMovieId == movieid && x.FkUserId == userid);
            if (ft == null)
            {
                return null;
            }
            return ft;
        }




        public IQueryable<MovieTbl> userfavmovies(int id)
        {
            List<MovieTbl> list = new List<MovieTbl>();
            return from a in _context.MovieTbls
                   join p in _context.FavMoviesTbls on a.PkMovieId equals p.FkMovieId
                   where p.FkUserId == id
                   select a;
        }




        public string DeleteFavMoviesTbl(int userid, int movieid)
        {
            // List<FavMoviesTbl> favdelm = new List<FavMoviesTbl>();
            FavMoviesTbl favdelm = _context.FavMoviesTbls.FirstOrDefault(x => x.FkMovieId == movieid && x.FkUserId == userid);


            _context.FavMoviesTbls.Remove(favdelm);
            _context.SaveChanges();
            return "removed";


        }


    }
}
