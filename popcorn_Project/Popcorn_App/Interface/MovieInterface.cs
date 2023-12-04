using Popcorn_App.Models;

namespace Popcorn_App.Interface
{
    public interface MovieInterface
    {
        MovieTbl AddMovie(MovieTbl movie);
        string RemoveMovie(int id);
        IEnumerable<MovieTbl> ClientAllMovies(int id);
        IEnumerable<MovieTbl> GetMovieTbls();
        MovieTbl GetMovieById(int id);

    }
}
