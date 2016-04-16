using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComicStoryBook.Web.Models
{
    public class Tile
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Image { get; set; }
        public string TileType { get; set; }


    }

    public enum TileType
    {
    Small,
    Long,
    Wide,
    Big,
    Hero,
    HeroLong,

    };
}