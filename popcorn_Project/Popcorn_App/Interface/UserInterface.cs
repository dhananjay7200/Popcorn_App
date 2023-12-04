
using Popcorn_App.Models;

namespace Popcorn_App.Interface
{
    public interface UserInterface
    {
        UserTbl getuserbyId(int id);

        string UserLogin(Userlogin user);

        UserTbl UserRegistration(UserTbl user);

        UserTbl UpdateUser(int id, UserTbl user);

        UserTbl UserPresent(string email);
    }
}
