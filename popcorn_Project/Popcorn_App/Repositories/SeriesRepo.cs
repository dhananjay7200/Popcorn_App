using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Repositories
{
    public class SeriesRepo : SeriesInterface
    {
        private readonly MajorContext _context;


        public SeriesRepo(MajorContext context)
        {
            _context = context;
        }
        private SeriesTbl CheckSeries(SeriesTbl movie)
        {
            SeriesTbl data = _context.SeriesTbls.FirstOrDefault(x => x.SeriesTitle.Equals(movie.SeriesTitle));
            if (data == null)
            {
                return null;
            }
            return data;
        }
        public SeriesTbl AddSeries(SeriesTbl series)
        {
            SeriesTbl data = CheckSeries(series);
            if (data != null)
            {
                return null;
            }
            _context.SeriesTbls.Add(series);
            _context.SaveChanges();

            return series;
        }



        public IEnumerable<SeriesTbl> ClientAllSeries(int id)
        {
            IEnumerable<SeriesTbl> movies = _context.SeriesTbls.Where(x => x.FkClientId == id && x.IsDeleted == 0).ToList();

            return movies;
        }



        public string RemoveSeries(int id)
        {
            SeriesTbl m = _context.SeriesTbls.FirstOrDefault(x => x.PkSeriesId == id && x.IsDeleted == 0);
            if (m == null)
            {
                return string.Empty;
            }
            m.IsDeleted = 1;
            _context.SaveChanges();
            return "deleted";
        }

        //sham
        public IEnumerable<SeriesTbl> GetSeriesTbls()
        {
            if (_context.SeriesTbls == null)
            {
                return null;
            }
            return _context.SeriesTbls.ToList();
        }
    }
}
