using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly MovieInterface _movie;

        public MovieController(MovieInterface context)
        {
            _movie = context;
        }

        // GET: api/Movie
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<MovieTbl>>> GetMovieTbls(int id)
        {
            IEnumerable<MovieTbl> movies = _movie.ClientAllMovies(id);
            if (movies == null)
            {
                return NotFound();
            }
            return Ok(movies);
        }


        // POST: api/Movie
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<MovieTbl> PostMovieTbl(MovieTbl movieTbl)
        {
            MovieTbl data = _movie.AddMovie(movieTbl);
            if (data == null)
            {
                return BadRequest();
            }
            return Ok(data);

        }

        // DELETE: api/Movie/5
        [HttpDelete("{id}")]
        public IActionResult DeleteMovieTbl(int id)
        {
            string m = _movie.RemoveMovie(id);
            if (m == null)
            {
                return NotFound();
            }
            return Ok(m);
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieTbl>>> GetMovieTbls()
        {
            List<MovieTbl> list = new List<MovieTbl>();
            list = (List<MovieTbl>)_movie.GetMovieTbls();
            return Ok(list);
        }

    }
}
