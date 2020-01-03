using System.IO;
using System.Text.Json;
using DiskStructureBrowserREST.ElementManager.Models;
using Microsoft.AspNetCore.Mvc;

namespace DiskStructureBrowserREST.ElementManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        [HttpPut]
        public void Put([FromBody] JsonElement body)
        {
            string json = JsonSerializer.Serialize(body);
            PutBody putBody = JsonSerializer.Deserialize<PutBody>(json);

            int dirPathEnd = putBody.Path.LastIndexOf('\\');
            string dirpath = putBody.Path.Substring(0, dirPathEnd);
            System.IO.File.Move(putBody.Path, Path.Combine(dirpath, putBody.Name));
        }

        [HttpDelete]
        public void Delete([FromBody] JsonElement body)
        {
            string json = JsonSerializer.Serialize(body);
            DeleteBody deleteBody = JsonSerializer.Deserialize<DeleteBody>(json);
            System.IO.File.Delete(deleteBody.Path);
        }
    }
}