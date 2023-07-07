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
    public class FacilityController : ControllerBase
    {
        public readonly IConfiguration _configuration;

        public FacilityController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        // GET: api/<FacilityController>
        [HttpGet]
        public string Get()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM facility", con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Facility> facilities = new List<Facility>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Facility facility = new Facility();
                    if (dt.Rows[i] is not null)
                    {
                        facility.facility_id = Convert.ToInt32(dt.Rows[i]["facility_id"]);
                        facility.facility_name = Convert.ToString(dt.Rows[i]["facility_name"]);
                        facility.facility_doctor_id = Convert.ToInt32(dt.Rows[i]["facility_doctor_id"]);
                        facility.facility_doctor = Convert.ToString(dt.Rows[i]["facility_doctor"]);
                        facility.facility_address = Convert.ToString(dt.Rows[i]["facility_address"]);
                        facility.facility_coordinates = Convert.ToString(dt.Rows[i]["facility_coordinates"]);
                        facility.facility_city = Convert.ToString(dt.Rows[i]["facility_city"]);
                        facility.facility_state = Convert.ToString(dt.Rows[i]["facility_state"]);
                        facility.facility_zip = Convert.ToString(dt.Rows[i]["facility_zip"]);
                        facility.facility_ein = Convert.ToString(dt.Rows[i]["facility_ein"]);
                        facility.facility_ssn = Convert.ToString(dt.Rows[i]["facility_ssn"]);
                        facility.facility_npi = Convert.ToString(dt.Rows[i]["facility_npi"]);
                        facility.facility_fax = Convert.ToString(dt.Rows[i]["facility_fax"]);
                        facility.facility_email = Convert.ToString(dt.Rows[i]["facility_email"]);
                        facility.facility_phone = Convert.ToString(dt.Rows[i]["facility_phone"]);
                        facilities.Add(facility);
                    }
                }
            }
            if (facilities.Count > 0)
            {
                return JsonConvert.SerializeObject(facilities);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // GET api/<FacilityController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM facility where facility_id = @id", con);
            da.SelectCommand.Parameters.Add(new SqlParameter
            {
                ParameterName = "@id",
                Value = id,
                SqlDbType = SqlDbType.Int
            });
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Facility> facilities = new List<Facility>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Facility facility = new Facility();
                    if (dt.Rows[i] is not null)
                    {
                        facility.facility_id = Convert.ToInt32(dt.Rows[i]["facility_id"]);
                        facility.facility_name = Convert.ToString(dt.Rows[i]["facility_name"]);
                        facility.facility_doctor_id = Convert.ToInt32(dt.Rows[i]["facility_doctor_id"]);
                        facility.facility_doctor = Convert.ToString(dt.Rows[i]["facility_doctor"]);
                        facility.facility_address = Convert.ToString(dt.Rows[i]["facility_address"]);
                        facility.facility_coordinates = Convert.ToString(dt.Rows[i]["facility_coordinates"]);
                        facility.facility_city = Convert.ToString(dt.Rows[i]["facility_city"]);
                        facility.facility_state = Convert.ToString(dt.Rows[i]["facility_state"]);
                        facility.facility_zip = Convert.ToString(dt.Rows[i]["facility_zip"]);
                        facility.facility_ein = Convert.ToString(dt.Rows[i]["facility_ein"]);
                        facility.facility_ssn = Convert.ToString(dt.Rows[i]["facility_ssn"]);
                        facility.facility_npi = Convert.ToString(dt.Rows[i]["facility_npi"]);
                        facility.facility_fax = Convert.ToString(dt.Rows[i]["facility_fax"]);
                        facility.facility_email = Convert.ToString(dt.Rows[i]["facility_email"]);
                        facility.facility_phone = Convert.ToString(dt.Rows[i]["facility_phone"]);
                        facilities.Add(facility);
                    }
                }
            }
            if (facilities.Count > 0)
            {
                return JsonConvert.SerializeObject(facilities);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // POST api/<FacilityController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<FacilityController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FacilityController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
