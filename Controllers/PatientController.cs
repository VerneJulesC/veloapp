using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System.Data;
using veloapp.Models;
using veloservices.Models;
using System.Globalization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace veloapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        public readonly IConfiguration _configuration;

        public PatientController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        // GET: api/<PatientController>
        [HttpGet]
        public string Get()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM patient", con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Patient> patients = new List<Patient>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Patient patient = new Patient();
                    if (dt.Rows[i] is not null)
                    {
                        patient.patient_id = Convert.ToInt32(dt.Rows[i]["patient_id"]);
                        patient.doctor_id = Convert.ToInt32(dt.Rows[i]["doctor_id"]);
                        patient.patient_doctor = Convert.ToString(dt.Rows[i]["patient_doctor"]);
                        patient.patient_fname = Convert.ToString(dt.Rows[i]["patient_fname"]);
                        patient.patient_mname = Convert.ToString(dt.Rows[i]["patient_mname"]);
                        patient.patient_lname = Convert.ToString(dt.Rows[i]["patient_lname"]);
                        patient.patient_address = Convert.ToString(dt.Rows[i]["patient_address"]);
                        patient.patient_coordinates = Convert.ToString(dt.Rows[i]["patient_coordinates"]);
                        patient.patient_city = Convert.ToString(dt.Rows[i]["patient_city"]);
                        patient.patient_state = Convert.ToString(dt.Rows[i]["patient_state"]);
                        patient.patient_zip = Convert.ToString(dt.Rows[i]["patient_zip"]);
                        patient.patient_bdate = DateOnly.Parse(Convert.ToString(dt.Rows[i]["patient_bdate"])??"January 1, 0001", CultureInfo.InvariantCulture);
                        patient.patient_sex = Convert.ToString(dt.Rows[i]["patient_sex"]);
                        patient.patient_phone = Convert.ToString(dt.Rows[i]["patient_phone"]);
                        patient.patient_email = Convert.ToString(dt.Rows[i]["patient_email"]);
                        patients.Add(patient);
                    }
                }
            }
            if (patients.Count > 0)
            {
                return JsonConvert.SerializeObject(patients);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // GET api/<PatientController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("VeloAppCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM patient where patient_id = @id", con);
            da.SelectCommand.Parameters.Add(new SqlParameter
            {
                ParameterName = "@id",
                Value = id,
                SqlDbType = SqlDbType.Int
            });
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Patient> patients = new List<Patient>();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Patient patient = new Patient();
                    if (dt.Rows[i] is not null)
                    {
                        patient.patient_id = Convert.ToInt32(dt.Rows[i]["patient_id"]);
                        patient.doctor_id = Convert.ToInt32(dt.Rows[i]["doctor_id"]);
                        patient.patient_doctor = Convert.ToString(dt.Rows[i]["patient_doctor"]);
                        patient.patient_fname = Convert.ToString(dt.Rows[i]["patient_fname"]);
                        patient.patient_mname = Convert.ToString(dt.Rows[i]["patient_mname"]);
                        patient.patient_lname = Convert.ToString(dt.Rows[i]["patient_lname"]);
                        patient.patient_address = Convert.ToString(dt.Rows[i]["patient_address"]);
                        patient.patient_coordinates = Convert.ToString(dt.Rows[i]["patient_coordinates"]);
                        patient.patient_city = Convert.ToString(dt.Rows[i]["patient_city"]);
                        patient.patient_state = Convert.ToString(dt.Rows[i]["patient_state"]);
                        patient.patient_zip = Convert.ToString(dt.Rows[i]["patient_zip"]);
                        patient.patient_bdate = DateOnly.Parse(Convert.ToString(dt.Rows[i]["patient_bdate"]) ?? "January 1, 0001", CultureInfo.InvariantCulture);
                        patient.patient_sex = Convert.ToString(dt.Rows[i]["patient_sex"]);
                        patient.patient_phone = Convert.ToString(dt.Rows[i]["patient_phone"]);
                        patient.patient_email = Convert.ToString(dt.Rows[i]["patient_email"]);
                        patients.Add(patient);
                    }
                }
            }
            if (patients.Count > 0)
            {
                return JsonConvert.SerializeObject(patients);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        // POST api/<PatientController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PatientController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PatientController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
