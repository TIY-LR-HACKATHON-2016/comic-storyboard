using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using ComicStoryBook.Web.Models;

namespace ComicStoryBook.Web.Controllers
{
    public class ComicBookAPIController : Controller
    {
        private readonly ComicStoryBookdbWebContext db = new ComicStoryBookdbWebContext();


        // GET: ComicBookAPI
        public ActionResult Index()
        {
            var model =
                db.ComicBooks
                    .Select(cb => new { ComicBookName = cb.Name, TileCount = cb.Tiles.Count(), ComicBookId = cb.Id});
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Create(string title)
        {
            var newbook = new ComicBook() { Name = title };

            db.ComicBooks.Add(newbook);
            db.SaveChanges();

            return Json(newbook);
        }

        [HttpPost]
        public ActionResult CreateTile(int comicbookid, string text, string image)
        {
            var book = db.ComicBooks.Find(comicbookid);
            if (book == null)
            {
                return HttpNotFound();

            }
            var newTile = new Tile
            {
                ComicBook = book,
                Image = image,
                TileType = TileType.Small,
                Text = text
            };
            book.Tiles.Add(newTile);
            db.SaveChanges();


            var model = new 
            {
                Id = newTile.Id,
                Image = newTile.Image,
                TileType = newTile.TileType,
                Text = newTile.Text
            };
            return Json(model);
        }

        [HttpPost]
        public ActionResult EditTile(int? id, string text, string image, TileType tileType)
        {
            
            if (id == null)
            {
                return HttpNotFound();
            }

            var tile = db.Tiles.Find(id);
            tile.Text = text;
            tile.Image = image;
            tile.TileType = TileType.Small;
            db.SaveChanges();


            var model = new
            {
                Id = tile.Id,
                Image = tile.Image,
                TileType = tile.TileType,
                Text = tile.Text
            };
            return Json(model);

        }

        [HttpPost]
        public ActionResult EditComicbook(int? id, string name)
        {

            if (id == null)
            {
                return HttpNotFound();
            }

            var comicbook = db.ComicBooks.Find(id);
            comicbook.Name = name;
            db.SaveChanges();


            var model = new
            {
                id = comicbook.Id,
                name= comicbook.Name,
                
            };
            return Json(model);

        }

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteTile(int? id)
        {
            Tile tile = db.Tiles.Find(id);
            db.Tiles.Remove(tile);
            db.SaveChanges();
            return Content("Done!");
        }

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteComicbook(int? id)
        {
            ComicBook comicBook = db.ComicBooks.Find(id);
            db.ComicBooks.Remove(comicBook);
            db.SaveChanges();
            return Content("Done!");
        }


        // GET: ComicBookAPI
        public ActionResult Tiles(int comicbookid)
        {
            var model =
                db.ComicBooks
                    .Find(comicbookid).Tiles.Select(x => new {TileId = x.Id, x.Image, x.Text, x.TileType});
            return Json(model, JsonRequestBehavior.AllowGet);
        }
    }
}