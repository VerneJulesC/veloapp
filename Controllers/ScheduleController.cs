using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System.Data;
using veloapp.Models;
using veloservices.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace veloapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        public readonly IConfiguration _configuration;

        public ScheduleController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        // GET: api/<ScheduleController>
        [HttpGet]
        public string Get()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM schedule", con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Schedule> schedules = new List<Schedule>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Schedule schedule = new Schedule();
                    if (dt.Rows[i] is not null)
                    {
                        schedule.sched_id = Convert.ToInt32(dt.Rows[i]["sched_id"]);
                        schedule.sched_date = Convert.ToDateTime(dt.Rows[i]["sched_date"]);
                        schedule.patient_id = Convert.ToInt32(dt.Rows[i]["patient_id"]);
                        schedule.sched_type = Convert.ToString(dt.Rows[i]["sched_type"]);
                        schedule.location_desc = Convert.ToString(dt.Rows[i]["location_desc"]);
                        schedule.location_coord = Convert.ToString(dt.Rows[i]["location_coord"]);
                        schedule.destination_desc = Convert.ToString(dt.Rows[i]["destination_desc"]);
                        schedule.destination_coord = Convert.ToString(dt.Rows[i]["destination_coord"]);
                        schedule.status = Convert.ToString(dt.Rows[i]["status"]);
                        schedule.last_modified = Convert.ToDateTime(dt.Rows[i]["last_modified"]);
                        schedules.Add(schedule);
                    }
                }
            }
            if (schedules.Count > 0)
            {
                return JsonConvert.SerializeObject(schedules);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // GET api/<ScheduleController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM schedule where sched_id = @id", con);
            da.SelectCommand.Parameters.Add(new SqlParameter
            {
                ParameterName = "@id",
                Value = id,
                SqlDbType = SqlDbType.Int
            });
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Schedule> schedules = new List<Schedule>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Schedule schedule = new Schedule();
                    if (dt.Rows[i] is not null)
                    {
                        schedule.sched_id = Convert.ToInt32(dt.Rows[i]["sched_id"]);
                        schedule.sched_date = Convert.ToDateTime(dt.Rows[i]["sched_date"]);
                        schedule.patient_id = Convert.ToInt32(dt.Rows[i]["patient_id"]);
                        schedule.sched_type = Convert.ToString(dt.Rows[i]["sched_type"]);
                        schedule.location_desc = Convert.ToString(dt.Rows[i]["location_desc"]);
                        schedule.location_coord = Convert.ToString(dt.Rows[i]["location_coord"]);
                        schedule.destination_desc = Convert.ToString(dt.Rows[i]["destination_desc"]);
                        schedule.destination_coord = Convert.ToString(dt.Rows[i]["destination_coord"]);
                        schedule.status = Convert.ToString(dt.Rows[i]["status"]);
                        schedule.last_modified = Convert.ToDateTime(dt.Rows[i]["last_modified"]);
                        schedules.Add(schedule);
                    }
                }
            }
            if (schedules.Count > 0)
            {
                return JsonConvert.SerializeObject(schedules);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // POST api/<ScheduleController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ScheduleController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ScheduleController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
