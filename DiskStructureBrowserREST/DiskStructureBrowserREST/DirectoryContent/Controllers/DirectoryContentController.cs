using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using DiskStructureBrowserREST.Models;
using System.IO;
using System.Text.Json;
using DiskStructureBrowserREST.DirectoryContent.Models;

namespace DiskStructureBrowserREST.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DirectoryContentController : ControllerBase
    {
        [Route("elements")]
        [HttpPut]
        public IEnumerable<Element> Get([FromBody] JsonElement body)
        {
            string json = JsonSerializer.Serialize(body);
            GetBody getBody = JsonSerializer.Deserialize<GetBody>(json);
            var elements = new List<Element>();
            foreach (string entry in Directory.GetDirectories(getBody.Path))
            {
                elements.Add(CreateElement(new DirectoryInfo(entry)));
            }
            foreach (string entry in Directory.GetFiles(getBody.Path))
            {
                elements.Add(CreateElement(new FileInfo(entry)));
            }
            return elements;
        }

        private Element CreateElement(FileSystemInfo info)
        {
            Attributes attributes = new Attributes(
                (info.Attributes & FileAttributes.Compressed) == FileAttributes.Compressed,
                (info.Attributes & FileAttributes.Encrypted) == FileAttributes.Encrypted,
                (info.Attributes & FileAttributes.Hidden) == FileAttributes.Hidden,
                (info.Attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly,
                (info.Attributes & FileAttributes.System) == FileAttributes.System
                );
            string type = Element.TYPE.DIRECTORY;
            long size = Element.SIZE.NO_SIZE;
            if(info.GetType() == typeof(FileInfo))
            {
                size = ((FileInfo)info).Length;
                type = Element.TYPE.FILE;
            }
            return new Element(
                type,
                info.Name,
                info.LastAccessTimeUtc,
                size,
                attributes
                );
        }
    }
}