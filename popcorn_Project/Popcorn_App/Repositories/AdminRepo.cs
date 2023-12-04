using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Repositories
{
    public class AdminRepo : IAdminInterface
    {
        private readonly MajorContext _context;
        private readonly IConfiguration iconfiguration;
        public AdminRepo(MajorContext context, IConfiguration iconfiguration)
        {
            _context = context;
            this.iconfiguration = iconfiguration;
        }

        public IEnumerable<UserTbl> GetAllUsers()
        {
            IEnumerable<UserTbl> u = _context.UserTbls
                .Where(predicate: x => x.Userrole == "user" && x.IsDeleted == 0)
                .ToList();

            if (u == null)
            {
                return null;
            }

            return u;
        }

        public IEnumerable<UserTbl> GetApprovedClients()
        {
            IEnumerable<UserTbl> c = _context.UserTbls
                .Where(predicate: x => x.Userrole == "client" && x.IsApproved == 1 && x.IsDeleted == 0)
                .ToList();

            if (c == null)
            {
                return null;
            }

            return c;
        }

        public IEnumerable<UserTbl> GetPendingClients()
        {
            IEnumerable<UserTbl> c = _context.UserTbls
                .Where(predicate: x => x.Userrole == "client" && x.IsApproved == 0 && x.IsDeleted == 0)
                .ToList();

            if (c == null)
            {
                return null;
            }

            return c;
        }

        public string DeleteUserByID(int id)
        {
            UserTbl u = _context.UserTbls.FirstOrDefault(x => x.PkUserId == id && x.Userrole == "user");
            if (u == null)
            {
                return string.Empty;
            }
            u.IsDeleted = 1;

            _context.SaveChanges();
            return "user deleted successfully";
        }

        public string DeleteClientByID(int id)
        {
            UserTbl c = _context.UserTbls.FirstOrDefault(x => x.PkUserId == id && x.Userrole == "client");
            if (c == null)
            {
                return string.Empty;
            }
            c.IsDeleted = 1;
            _context.SaveChanges();
            return "client deleted successfully";
        }

        public string ApproveClient(int id)
        {
            UserTbl p = _context.UserTbls.FirstOrDefault(x => x.PkUserId == id && x.Userrole == "client");
            if (p == null)
            {
                return string.Empty;
            }
            p.IsApproved = 1;
            _context.SaveChanges();
            return "client approved";
        }

        public IEnumerable<UserTbl> GetAllClients()
        {
            throw new NotImplementedException();
        }
    }
}
