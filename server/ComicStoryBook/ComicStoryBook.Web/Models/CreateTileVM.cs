using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ComicStoryBook.Web.Models
{
    public class CreateTileVM
    {
        public int ComicBookId { get; set; }

        [Required]
        public string Text { get; set; }

        [Required]
        [DataType(DataType.Url)]
        public string Image { get; set; }
        public TileType TileType { get; set; } = TileType.Small;
    }
}