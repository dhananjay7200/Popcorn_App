using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Popcorn_App.Interface;
using Popcorn_App.Models;

namespace Popcorn_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UserController : ControllerBase
    {
        private readonly UserInterface Iuser;
        private IConfiguration _configuration;

        public UserController(UserInterface context, IConfiguration configuration)
        {
            Iuser = context;
            _configuration = configuration;

        }

        // GET: api/UserTbls
        /*[HttpGet]
        public async Task<ActionResult<IEnumerable<UserTbl>>> GetUserTbls()
        {
          if (_context.UserTbls == null)
          {
              return NotFound();
          }
            return await _context.UserTbls.ToListAsync();
        }*/

        // GET: api/UserTbls/5
        [HttpGet("{id}")]
        public async Task<UserTbl> GetUserTbl(int id)
        {
            UserTbl u = Iuser.getuserbyId(id);
            if (u == null)
            {
                return null;
            }

            return u;
        }
        /*
                // PUT: api/UserTbls/5
                // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
                [HttpPut("{id}")]
                public async Task<IActionResult> PutUserTbl(int id, UserTbl userTbl)
                {
                    if (id != userTbl.PkUserId)
                    {
                        return BadRequest();
                    }

                    _context.Entry(userTbl).State = EntityState.Modified;

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!UserTblExists(id))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }

                    return NoContent();
                }*/

        // POST: api/UserTbls
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<UserTbl> PostUserTbl(UserTbl userTbl)
        {
            if (Iuser.UserRegistration(userTbl) == null)
            {
                return BadRequest();
            }
            return Ok(userTbl);

        }
        /*
        // DELETE: api/UserTbls/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserTbl(int id)
        {
            if (_context.UserTbls == null)
            {
                return NotFound();
            }
            var userTbl = await _context.UserTbls.FindAsync(id);
            if (userTbl == null)
            {
                return NotFound();
            }

            _context.UserTbls.Remove(userTbl);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserTblExists(int id)
        {
            return (_context.UserTbls?.Any(e => e.PkUserId == id)).GetValueOrDefault();
        }*/

        [HttpPost("/login")]
        public IActionResult LoginUser(Userlogin user)
        {

            var u = Iuser.UserLogin(user);
            if (u == null)
            {

                return NotFound();
            }
            return Ok(new Tokens { Token = u });

        }

        [HttpPatch("{id}")]
        public IActionResult Updateuser(int id, UserTbl user)
        {
            UserTbl u = Iuser.UpdateUser(id, user);
            if (u == null)
            {
                return BadRequest();
            }
            return Ok(u);

        }
        [HttpGet("userp/{email}")]
        [AllowAnonymous]
        public IActionResult UserPresent(string email)
        {
            UserTbl u = Iuser.UserPresent(email);
            if (u == null)
            {
                return null;
            }
            return Ok(u);
        }

    }
}
