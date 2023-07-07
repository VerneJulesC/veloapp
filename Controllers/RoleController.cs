using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System.Data;
using System.Globalization;
using veloapp.Models;
using veloservices.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace veloapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        public readonly IConfiguration _configuration;

        public RoleController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        // GET: api/<RoleController>
        [HttpGet]
        public string Get()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM velo_role", con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<VeloRole> roles = new List<VeloRole>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    VeloRole role = new VeloRole();
                    if (dt.Rows[i] is not null)
                    {
                        role.user_id = Convert.ToInt32(dt.Rows[i]["user_id"]);
                        role.rolename = Convert.ToString(dt.Rows[i]["rolename"]);
                        role.doctor_id = Convert.ToInt32(dt.Rows[i]["doctor_id"]);
                        roles.Add(role);
                    }
                }
            }
            if (roles.Count > 0)
            {
                return JsonConvert.SerializeObject(roles);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // GET api/<RoleController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM velo_role where user_id = @id", con);
            da.SelectCommand.Parameters.Add(new SqlParameter
            {
                ParameterName = "@id",
                Value = id,
                SqlDbType = SqlDbType.Int
            });
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<VeloRole> roles = new List<VeloRole>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    VeloRole role = new VeloRole();
                    if (dt.Rows[i] is not null)
                    {
                        role.user_id = Convert.ToInt32(dt.Rows[i]["user_id"]);
                        role.rolename = Convert.ToString(dt.Rows[i]["rolename"]);
                        role.doctor_id = Convert.ToInt32(dt.Rows[i]["doctor_id"]);
                        roles.Add(role);
                    }
                }
            }
            if (roles.Count > 0)
            {
                return JsonConvert.SerializeObject(roles);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // POST api/<RoleController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<RoleController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RoleController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
