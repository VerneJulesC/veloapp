using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;
using veloservices.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace veloservices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public string Get()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM velo_user", con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<VeloUser> vu = new List<VeloUser>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    VeloUser vuser = new VeloUser();
                    if (dt.Rows[i] is not null)
                    {
                        vuser.user_id = Convert.ToInt32(dt.Rows[i]["user_id"]);
                        vuser.username = Convert.ToString(dt.Rows[i]["username"]);
                        vuser.password = Convert.ToString(dt.Rows[i]["password"]);
                        vu.Add(vuser);
                    }
                }
            }
            if (vu.Count > 0)
            {
                return JsonConvert.SerializeObject(vu);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM velo_user WHERE user_id = @id", con);
            da.SelectCommand.Parameters.Add(new SqlParameter {
                ParameterName = "@id",
                Value = id,
                SqlDbType = SqlDbType.Int
            });
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<VeloUser> vu = new List<VeloUser>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    VeloUser vuser = new VeloUser();
                    if (dt.Rows[i] is not null)
                    {
                        vuser.user_id = Convert.ToInt32(dt.Rows[i]["user_id"]);
                        vuser.username = Convert.ToString(dt.Rows[i]["username"]);
                        //vuser.password = Convert.ToString(dt.Rows[i]["password"]);
                        vu.Add(vuser);
                    }
                }
            }
            if (vu.Count > 0)
            {
                return JsonConvert.SerializeObject(vu);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
