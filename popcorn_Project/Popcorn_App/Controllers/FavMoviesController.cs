using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavMoviesController : ControllerBase
    {
        private readonly FavMoviesTblInterface _context;

        public FavMoviesController(FavMoviesTblInterface context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<FavMoviesTbl>>> GetFavMoviesTbls()
        {
            List<FavMoviesTbl> list = new List<FavMoviesTbl>();
            list = (List<FavMoviesTbl>)_context.GetFavMoviesTbl();
            return Ok(list);
        }

        //Posting the favMovies into the database



        [HttpPost]
        public async Task<ActionResult<FavMoviesTbl>> PostFavMoviesTbl(FavMoviesTbl favMoviesTbl)
        {
            FavMoviesTbl m = _context.PostFavMoviesTbl(favMoviesTbl);
            if (m == null)
            {
                return BadRequest();
            }
            return Ok(favMoviesTbl);
        }


        //fetching the favs Movies for the user


        [HttpGet("/favm/{id}")]
        public ActionResult<IQueryable<MovieTbl>> userfavmovies(int id)
        {
            IQueryable mlist = _context.userfavmovies(id);
            return Ok(mlist);
        }





        //deleting the fav movie for the user
        [HttpDelete("{userid}/{movieid}")]
        public ActionResult<IQueryable<FavMoviesTbl>> DeleteFavMoviesTbl(int userid, int movieid)
        {
            string mdeleteList = _context.DeleteFavMoviesTbl(userid, movieid);
            return Ok(mdeleteList);
        }


    }
}
