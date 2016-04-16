using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComicStoryBook.Web.Models
{
    public class ComicBook
    { 
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Tile> Tiles { get; set; }= new List<Tile>();
    }
}