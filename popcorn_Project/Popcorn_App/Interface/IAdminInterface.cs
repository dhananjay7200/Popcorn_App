
using Popcorn_App.Models;

namespace Popcorn_App.Interface
{
    public interface IAdminInterface
    {
        IEnumerable<UserTbl> GetAllUsers();
        IEnumerable<UserTbl> GetApprovedClients();
        IEnumerable<UserTbl> GetPendingClients();
        string DeleteClientByID(int id);
        string DeleteUserByID(int id);
        string ApproveClient(int id);
    }
}
