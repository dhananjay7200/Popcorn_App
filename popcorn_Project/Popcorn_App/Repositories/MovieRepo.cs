using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Repositories
{
    public class MovieRepo : MovieInterface
    {
        private readonly MajorContext _context;


        public MovieRepo(MajorContext context)
        {
            _context = context;
        }

        private MovieTbl CheckMovie(MovieTbl movie)
        {
            MovieTbl data = _context.MovieTbls.FirstOrDefault(x => x.MovieTitle.Equals(movie.MovieTitle));
            if (data == null)
            {
                return null;
            }
            return data;
        }
        public MovieTbl AddMovie(MovieTbl movie)
        {
            MovieTbl data = CheckMovie(movie);
            if (data != null)
            {
                return null;
            }
            _context.MovieTbls.Add(movie);
            _context.SaveChanges();

            return movie;
        }

        public IEnumerable<MovieTbl> ClientAllMovies(int id)
        {
            IEnumerable<MovieTbl> movies = _context.MovieTbls.Where(x => x.FkClientId == id && x.IsDeleted == 0).ToList();

            return movies;
        }

        public MovieTbl GetMovieById(int id)
        {
            throw new NotImplementedException();
        }

        public string RemoveMovie(int id)
        {
            MovieTbl m = _context.MovieTbls.FirstOrDefault(x => x.PkMovieId == id && x.IsDeleted == 0);
            if (m == null)
            {
                return string.Empty;
            }
            m.IsDeleted = 1;
            _context.SaveChanges();
            return "deleted";
        }

        //sham
        public IEnumerable<MovieTbl> GetMovieTbls()
        {
            if (_context.MovieTbls == null)
            {
                return null;
            }
            return _context.MovieTbls.ToList();
        }
    }
}
