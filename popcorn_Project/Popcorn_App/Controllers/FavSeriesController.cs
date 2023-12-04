using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavSeriesController : ControllerBase
    {


        private readonly FavSeriesTblInterface _context;

        public FavSeriesController(FavSeriesTblInterface context)
        {
            _context = context;
        }

        [HttpGet("/getseries")]
        public async Task<ActionResult<IEnumerable<FavSeriesTbl>>> GetFavSeriesTbls()
        {
            List<FavSeriesTbl> list = new List<FavSeriesTbl>();
            list = (List<FavSeriesTbl>)_context.GetFavSeriesTbls();
            return Ok(list);
        }

        //Posting the favSeries into the database



        [HttpPost]
        public async Task<ActionResult<FavSeriesTbl>> PostFavSeriesTbl(FavSeriesTbl favSeriesTbl)
        {
            FavSeriesTbl m = _context.PostFavSeriesTbl(favSeriesTbl);
            if (m == null)
            {
                return BadRequest();
            }
            return Ok(favSeriesTbl);
        }
        //posting the favseries into the databse ends

        //fetching the favs series for the user


        [HttpGet("/favse/{id}")]
        public ActionResult<IQueryable<SeriesTbl>> userfavseries(int id)
        {
            IQueryable slist = _context.userfavseries(id);
            return Ok(slist);
        }
        //fetching the favs series for the user ends

        //deleting
        //deleting the fav movie for the user
        [HttpDelete("{userid}/{seriesid}")]
        public ActionResult<IQueryable<FavSeriesTbl>> DeleteFavSeriesTbl(int userid, int seriesid)
        {
            string sdeleteList = _context.DeleteFavSeriesTbl(userid, seriesid);
            return Ok(sdeleteList);
        }
        //deleting ends
    }
}
