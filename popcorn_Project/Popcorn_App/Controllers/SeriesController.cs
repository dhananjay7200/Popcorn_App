using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeriesController : ControllerBase
    {
        private readonly SeriesInterface _series;

        public SeriesController(SeriesInterface context)
        {
            _series = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<SeriesTbl>>> GetAllSeries(int id)
        {
            IEnumerable<SeriesTbl> seriess = _series.ClientAllSeries(id);
            if (seriess == null)
            {
                return NotFound();
            }
            return Ok(seriess);
        }


        [HttpPost]
        public ActionResult<SeriesTbl> PostMovieTbl(SeriesTbl series)
        {
            SeriesTbl data = _series.AddSeries(series);
            if (data == null)
            {
                return BadRequest();
            }
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMovieTbl(int id)
        {
            string m = _series.RemoveSeries(id);
            if (m == null)
            {
                return NotFound();
            }
            return Ok(m);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SeriesTbl>>> GetSeriesTbls()
        {
            List<SeriesTbl> list = new List<SeriesTbl>();
            list = (List<SeriesTbl>)_series.GetSeriesTbls();
            return Ok(list);
        }

    }
}
