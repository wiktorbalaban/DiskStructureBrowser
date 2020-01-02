using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DiskStructureBrowserREST.Models;
using System.IO;

namespace DiskStructureBrowserREST.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DirectoryContentController : ControllerBase
    {
        [Route("elements/{path}")]
        [HttpGet]
        public IEnumerable<Element> Get(string path)
        {
            var elements = new List<Element>();
            foreach (string entry in Directory.GetDirectories(path))
            {
                elements.Add(CreateElement(new DirectoryInfo(entry)));
            }
            foreach (string entry in Directory.GetFiles(path))
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