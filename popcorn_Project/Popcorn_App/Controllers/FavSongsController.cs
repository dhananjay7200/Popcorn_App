using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavSongsController : ControllerBase
    {
        private readonly FavSongsTblInterface _context;



        public FavSongsController(FavSongsTblInterface context)
        {
            _context = context;
        }


        // GET: api/FavSongsTbls

        [HttpGet("/allfavsong")]
        public async Task<ActionResult<IEnumerable<FavSongsTbl>>> GetFavSongsTbls()
        {
            List<FavSongsTbl> list = new List<FavSongsTbl>();
            list = (List<FavSongsTbl>)_context.GetFavSongsTbls();
            return Ok(list);
        }

        //posting the favsongs into the database 
        [HttpPost]
        public async Task<ActionResult<FavSongsTbl>> PostFavSongsTbl(FavSongsTbl favSongsTbl)
        {
            FavSongsTbl s = _context.PostFavSongsTbl(favSongsTbl);
            if (s == null)
            {
                return BadRequest();
            }
            //  return Ok(favSongsTbl);
            return Ok(favSongsTbl);

        }

        //




        //fetching the favs songs for the user
        [HttpGet("/fav/{id}")]
        public ActionResult<IQueryable<SongsTbl>> userfavSongs(int id)
        {

            //List<SongsTbl> slist =new List<SongsTbl>();
            IQueryable slist = _context.userfavSongs(id);
            //return _context.userfavSongs(id);
            return Ok(slist);
        }

        //deleting the fav songs 
        // DELETE: api/FavSongsTbls/5
        [HttpDelete("{userid}/{songid}")]
        public ActionResult<IQueryable<FavSongsTbl>> DeleteFavSongsTbl(int userid, int songid)
        {
            string dellist = _context.DeleteFavSongsTbl(userid, songid);
            // return _context.FavSongsTbls.Remove(dellist);
            return Ok(new { StatusCode = "200" });

        }


    }
}
