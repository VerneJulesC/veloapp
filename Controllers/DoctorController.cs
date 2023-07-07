using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System.Data;
using veloservices.Models;
using veloapp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace veloapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        public readonly IConfiguration _configuration;

        public DoctorController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        // GET: api/<DoctorController>
        [HttpGet]
        public string Get()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM doctor", con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Doctor> doctors = new List<Doctor>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Doctor doctor = new Doctor();
                    if (dt.Rows[i] is not null)
                    {
                        doctor.doctor_id = Convert.ToInt32(dt.Rows[i]["doctor_id"]);
                        doctor.provider_id = Convert.ToString(dt.Rows[i]["provider_id"]);
                        doctor.doctor_fname = Convert.ToString(dt.Rows[i]["doctor_fname"]);
                        doctor.doctor_mname = Convert.ToString(dt.Rows[i]["doctor_mname"]);
                        doctor.doctor_lname = Convert.ToString(dt.Rows[i]["doctor_lname"]);
                        doctor.doctor_address = Convert.ToString(dt.Rows[i]["doctor_address"]);
                        doctor.doctor_city = Convert.ToString(dt.Rows[i]["doctor_city"]);
                        doctor.doctor_state = Convert.ToString(dt.Rows[i]["doctor_state"]);
                        doctor.doctor_zip = Convert.ToString(dt.Rows[i]["doctor_zip"]);
                        doctor.doctor_ein = Convert.ToString(dt.Rows[i]["doctor_ein"]);
                        doctor.doctor_upin = Convert.ToString(dt.Rows[i]["doctor_upin"]);
                        doctor.doctor_ssn = Convert.ToString(dt.Rows[i]["doctor_ssn"]);
                        doctor.doctor_npi = Convert.ToString(dt.Rows[i]["doctor_npi"]);
                        doctor.doctor_license = Convert.ToString(dt.Rows[i]["doctor_license"]);
                        doctor.doctor_fax = Convert.ToString(dt.Rows[i]["doctor_fax"]);
                        doctor.doctor_email = Convert.ToString(dt.Rows[i]["doctor_email"]);
                        doctor.doctor_phone = Convert.ToString(dt.Rows[i]["doctor_phone"]);
                        doctors.Add(doctor);
                    }
                }
            }
            if (doctors.Count > 0)
            {
                return JsonConvert.SerializeObject(doctors);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // GET api/<DoctorController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM doctor where doctor_id = @id", con);
            da.SelectCommand.Parameters.Add(new SqlParameter
            {
                ParameterName = "@id",
                Value = id,
                SqlDbType = SqlDbType.Int
            });
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Doctor> doctors = new List<Doctor>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Doctor doctor = new Doctor();
                    if (dt.Rows[i] is not null)
                    {
                        doctor.doctor_id = Convert.ToInt32(dt.Rows[i]["doctor_id"]);
                        doctor.provider_id = Convert.ToString(dt.Rows[i]["provider_id"]);
                        doctor.doctor_fname = Convert.ToString(dt.Rows[i]["doctor_fname"]);
                        doctor.doctor_mname = Convert.ToString(dt.Rows[i]["doctor_mname"]);
                        doctor.doctor_lname = Convert.ToString(dt.Rows[i]["doctor_lname"]);
                        doctor.doctor_address = Convert.ToString(dt.Rows[i]["doctor_address"]);
                        doctor.doctor_city = Convert.ToString(dt.Rows[i]["doctor_city"]);
                        doctor.doctor_state = Convert.ToString(dt.Rows[i]["doctor_state"]);
                        doctor.doctor_zip = Convert.ToString(dt.Rows[i]["doctor_zip"]);
                        doctor.doctor_ein = Convert.ToString(dt.Rows[i]["doctor_ein"]);
                        doctor.doctor_upin = Convert.ToString(dt.Rows[i]["doctor_upin"]);
                        doctor.doctor_ssn = Convert.ToString(dt.Rows[i]["doctor_ssn"]);
                        doctor.doctor_npi = Convert.ToString(dt.Rows[i]["doctor_npi"]);
                        doctor.doctor_license = Convert.ToString(dt.Rows[i]["doctor_license"]);
                        doctor.doctor_fax = Convert.ToString(dt.Rows[i]["doctor_fax"]);
                        doctor.doctor_email = Convert.ToString(dt.Rows[i]["doctor_email"]);
                        doctor.doctor_phone = Convert.ToString(dt.Rows[i]["doctor_phone"]);
                        doctors.Add(doctor);
                    }
                }
            }
            if (doctors.Count > 0)
            {
                return JsonConvert.SerializeObject(doctors);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // POST api/<DoctorController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<DoctorController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
