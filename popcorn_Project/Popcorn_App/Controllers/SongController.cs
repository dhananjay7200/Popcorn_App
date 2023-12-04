using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongController : ControllerBase
    {
        private readonly SongInterface _songs;

        public SongController(SongInterface context)
        {
            _songs = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<SeriesTbl>>> GetAllSongs(int id)
        {
            IEnumerable<SongsTbl> songs = _songs.ClientAllSongs(id);
            if (songs == null)
            {
                return NotFound();
            }
            return Ok(songs);
        }


        [HttpPost]
        public ActionResult<SongsTbl> PostSong(SongsTbl song)
        {
            SongsTbl data = _songs.AddSong(song);
            if (data == null)
            {
                return BadRequest();
            }
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSong(int id)
        {
            string m = _songs.RemoveSongs(id);
            if (m == null)
            {
                return NotFound();
            }
            return Ok(m);
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<SongsTbl>>> GetSongsTbls()
        {
            List<SongsTbl> list = new List<SongsTbl>();
            list = (List<SongsTbl>)_songs.GetSongsTbls();
            return Ok(list);
        }
    }
}
