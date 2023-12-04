
using Popcorn_App.Models;

namespace Popcorn_App.Interface
{
    public interface SeriesInterface
    {

        SeriesTbl AddSeries(SeriesTbl series);
        string RemoveSeries(int id);
        IEnumerable<SeriesTbl> ClientAllSeries(int id);

        IEnumerable<SeriesTbl> GetSeriesTbls();
    }
}
