using System;
using System.Collections.Generic;

namespace DiskStructureBrowserREST.Models
{
    public class Element
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public DateTime ModificationDate { get; set; }
        public long Size { get; set; }
        public Attributes Attributes { get; set; }

        public Element(string type, string name, DateTime modificationDate, long size, Attributes attributes)
        {
            Type = type;
            Name = name;
            ModificationDate = modificationDate;
            Size = size;
            Attributes = attributes;
        }

        public static class TYPE
        {
            public static readonly string DIRECTORY = "directory";
            public static readonly string FILE = "file";
        }

        public static class SIZE
        {
            public static readonly long NO_SIZE = -1;
        }
    }
}
