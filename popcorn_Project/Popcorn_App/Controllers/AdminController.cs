
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Popcorn_App.Interface;
using Popcorn_App.Models;
using System.Collections.Generic;

namespace Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminInterface iadmin;

        public AdminController(IAdminInterface context)
        {
            iadmin = context;
        }

        [HttpGet("ListOfUsers")]
        public IEnumerable<UserTbl> GetAllUsers()
        {
            IEnumerable<UserTbl> u = iadmin.GetAllUsers();
            if (u == null)
            {
                return null;
            }

            return u;
        }

        [HttpGet("ListOfApprovedClients")]
        public IEnumerable<UserTbl> GetApprovedClients()
        {
            IEnumerable<UserTbl> c = iadmin.GetApprovedClients();
            if (c == null)
            {
                return null;
            }

            return c;
        }

        [HttpGet("ListOfPendingClients")]
        public IEnumerable<UserTbl> GetPendingClients()
        {
            IEnumerable<UserTbl> c = iadmin.GetPendingClients();
            if (c == null)
            {
                return null;
            }

            return c;
        }



        [HttpDelete("DeleteUser/{id}")]
        public IActionResult DeleteUser(int id)
        {
            string res = iadmin.DeleteUserByID(id);
            if (res == null)
            {
                return NotFound();
            }
            return Ok(res);
        }

        [HttpDelete("DeleteClient/{id}")]
        public IActionResult DeleteClient(int id)
        {
            string res = iadmin.DeleteClientByID(id);
            if (res == null)
            {
                return NotFound();
            }
            return Ok(res);
        }

        [HttpDelete("approveclient/{id}")]
        public IActionResult ApproveClient(int id)
        {
            string res = iadmin.ApproveClient(id);
            if (res == null)
            {
                return NotFound();
            }
            return Ok(res);
        }
    }
}
