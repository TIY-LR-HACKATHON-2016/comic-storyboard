namespace ComicStoryBook.Web.Models
{
    public class Tile
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Image { get; set; }
        public TileType TileType { get; set; } = TileType.Small;
        public ComicBook ComicBook { get; set; }
    }

    public enum TileType
    {
        Small = 1,
        Long = 2,
        Wide = 3,
        Big = 4,
        Hero = 5,
        HeroLong = 6
    }
}