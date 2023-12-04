
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Popcorn_App.Interface;
using Popcorn_App.Models;
using Popcorn_App.Repositories;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Popcorn_App.Repositories
{
    public class UserRepo : UserInterface
    {

        private readonly MajorContext _context;
        private readonly IConfiguration iconfiguration;
        private Encryption _encp = new Encryption();
        //for the dependency injection of the serilog
        private readonly ILogger<UserRepo> _logger;

        public UserRepo(MajorContext context, IConfiguration iconfiguration, ILogger<UserRepo> logger)
        {
            _context = context;
            this.iconfiguration = iconfiguration;
            _logger = logger;
        }

        public UserTbl getuserbyId(int id)
        {

            UserTbl u = _context.UserTbls.FirstOrDefault(x => x.PkUserId == id);
            u.UserPassword = _encp.DecodeFrom64(u.UserPassword);

            if (u == null)
            {
                return null;
            }

            return u;
        }

        public UserTbl UpdateUser(int id, UserTbl userTbl)
        {

            UserTbl u = _context.UserTbls.FirstOrDefault(x => x.PkUserId == id);
            if (userTbl.UserPassword != null)
            {
                userTbl.UserPassword = _encp.EncodePasswordToBase64(userTbl.UserPassword);
            }
            if (u == null)
            {
                return null;
            }
            if (userTbl.UserName != null)
            {
                u.UserName = userTbl.UserName;
            }
            if (userTbl.UserCity != null)
            {
                u.UserCity = userTbl.UserCity;
            }
            if (userTbl.UserPhone != null)
            {
                u.UserPhone = userTbl.UserPhone;
            }
            _logger.LogInformation("User updated information having id"+id);
            _context.Entry(u).State = EntityState.Modified;
            _context.SaveChanges();
            return u;

        }

        public string UserLogin(Userlogin user)
        {

            user.UserPassword = _encp.EncodePasswordToBase64(user.UserPassword);
            UserTbl u = _context.UserTbls.FirstOrDefault(x => x.UserEmail == user.UserEmail && x.UserPassword == user.UserPassword && x.IsApproved == 1);
            if (u == null)
            {
                return string.Empty;
            }
            _logger.LogInformation("User logged in"+u.PkUserId);
            var token = GenerateToken(u);
            return token;

        }
        private UserTbl CheckUser(UserTbl u)
        {
            UserTbl data = _context.UserTbls.FirstOrDefault(x => x.UserEmail.Equals(u.UserEmail) && x.IsDeleted == 0);
            if (data == null)
            {
                return null;

            }
            return data;
        }
        public UserTbl UserRegistration(UserTbl user)
        {

            user.UserPassword = _encp.EncodePasswordToBase64(user.UserPassword);
            UserTbl data = CheckUser(user);
            if (data != null)
            {
                return null;
            }
            _logger.LogInformation("resgistration done");
            _context.UserTbls.Add(user);
            _context.SaveChanges();//error
                                   //Microsoft.EntityFrameworkCore.DbUpdateException:
                                   //'An error occurred while saving the entity changes.
                                   //See the inner exception for details.'


            return user;
        }

        private string GenerateToken(UserTbl user)
        {
            var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is my custom Secret key for authentication"));
            var credentials = new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                  new Claim("email",user.UserEmail),
                  new Claim("role", user.Userrole),
                   new Claim("id", user.PkUserId.ToString()),
                   new Claim("name",user.UserName),
              };
            var token = new JwtSecurityToken(iconfiguration["Jwt:Issuer"],
                iconfiguration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
            signingCredentials: credentials);


            return new JwtSecurityTokenHandler().WriteToken(token);

        }
        [AllowAnonymous]
        public UserTbl UserPresent(string email)
        {
            UserTbl u = _context.UserTbls.FirstOrDefault(x => x.UserEmail == email);

            if (u == null)
            {
                return null;
            }
            return u;
        }


        public IQueryable<SongsTbl> userfavsong(int id)
        {
            List<SongsTbl> list = new List<SongsTbl>();

            return from a in _context.SongsTbls
                   join p in _context.FavSongsTbls on a.PkSongsId equals p.FkSongsId
                   where
                   p.FkUserId == id
                   select a;

            /*return from a in db.Artists
            join p in db.Projects on a.ArtistID equals p.ArtistID into artistProjects
            select new
            {
                name = a.ArtistName,
                projects = artistProjects.Select(ap => ap.ProjectName)
            };*/

        }
    }
}
