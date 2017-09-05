using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.AccessControl;
using System.Web;
using System.IO.Compression;
using System.IO;

namespace Trax.Models
{
    public class Web
    {
        public string URL { get; set; }

        public string GetImageMetaData()
        {
            string metaData;

            var webcurl = new WebClient();

            metaData = webcurl.DownloadString(URL);

            return metaData;
        }

        public void GetLatestMovieFile(string aDate)
        {
            var fPath = HttpContext.Current.Server.MapPath(Constants.MovieFilesPath) + "\\Movies.json.gz";

            var fName = String.Format(Constants.Movies, aDate);

            using (var webcurl = new WebClient())
            {
                webcurl.DownloadFile(new System.Uri(fName), fPath);
                Decompress(new FileInfo(fPath));
            }
        }

        public static void Decompress(FileInfo fileToDecompress)
        {
            using (FileStream originalFileStream = fileToDecompress.OpenRead())
            {
                string currentFileName = fileToDecompress.FullName;
                string newFileName = currentFileName.Remove(currentFileName.Length - fileToDecompress.Extension.Length);

                using (FileStream decompressedFileStream = File.Create(newFileName))
                {
                    using (GZipStream decompressionStream = new GZipStream(originalFileStream, CompressionMode.Decompress))
                    {
                        decompressionStream.CopyTo(decompressedFileStream);
                        Console.WriteLine("Decompressed: {0}", fileToDecompress.Name);
                    }
                }
            }
        }
    }
}