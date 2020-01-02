using System;
using System.IO;
using DiskStructureBrowserREST.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DiskStructureBrowserREST.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MainController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            Config config;
            using (StreamReader r = new StreamReader(AppDomain.CurrentDomain.BaseDirectory+"\\config.json"))
            {
                string json = r.ReadToEnd();
                config = JsonConvert.DeserializeObject<Config>(json);
            }
            return config.RootPath;
        }
    }
}
