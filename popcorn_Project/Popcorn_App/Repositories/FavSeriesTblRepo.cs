using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Repositories
{
    public class FavSeriesTblRepo : FavSeriesTblInterface
    {
        private readonly MajorContext _context;

        public FavSeriesTblRepo(MajorContext context)
        {
            _context = context;
        }

        public IEnumerable<FavSeriesTbl> GetFavSeriesTbls()
        {
            return _context.FavSeriesTbls.ToList();
        }

        //posting the fav series
        public FavSeriesTbl PostFavSeriesTbl(FavSeriesTbl favSeriesTbl)
        {
            FavSeriesTbl data = CheckRepeatFavSeries((int)favSeriesTbl.FkUserId, (int)favSeriesTbl.FkSeriesId);


            if (data != null)
            {
                return null;
            }
            _context.FavSeriesTbls.Add(favSeriesTbl);
            _context.SaveChanges();

            //  return favSongsTbl;
            return favSeriesTbl;
        }
        //posting the fav series ends


        //checkRepeatFav
        public FavSeriesTbl CheckRepeatFavSeries(int userid, int seriesid)
        {
            FavSeriesTbl ft = _context.FavSeriesTbls.FirstOrDefault(x => x.FkSeriesId == seriesid && x.FkUserId == userid);
            if (ft == null)
            {
                return null;
            }
            return ft;
        }
        //checkRepeatFav ends


        //getting the userfav series
        public IQueryable<SeriesTbl> userfavseries(int id)
        {
            List<SeriesTbl> list = new List<SeriesTbl>();
            return from a in _context.SeriesTbls
                   join p in _context.FavSeriesTbls on a.PkSeriesId equals p.FkSeriesId
                   where p.FkUserId == id
                   select a;
        }
        //getting the userfav series ends


        //DELETING THE FAV SERIES
        public string DeleteFavSeriesTbl(int userid, int seriesid)
        {

            FavSeriesTbl favdels = _context.FavSeriesTbls.FirstOrDefault(x => x.FkSeriesId == seriesid && x.FkUserId == userid);


            _context.FavSeriesTbls.Remove(favdels);
            _context.SaveChanges();
            return "removed";


        }
        //deleting the fav series ends


    }
}
