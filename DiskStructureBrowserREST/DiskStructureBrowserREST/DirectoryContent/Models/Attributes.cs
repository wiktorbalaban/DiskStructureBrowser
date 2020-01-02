namespace DiskStructureBrowserREST.Models
{
    public class Attributes
    {
        public bool Compressed { get; set; }
        public bool Encrypted { get; set; }
        public bool Hidden { get; set; }
        public bool ReadOnly { get; set; }
        public bool System { get; set; }

        public Attributes(bool compressed, bool encrypted, bool hidden, bool readOnly, bool system)
        {
            Compressed = compressed;
            Encrypted = encrypted;
            Hidden = hidden;
            ReadOnly = readOnly;
            System = system;
        }
    }
}
