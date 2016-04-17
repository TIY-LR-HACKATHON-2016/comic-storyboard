using System.Linq;
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
                    .Select(cb => new { ComicBookName = cb.Name, TileCount = cb.Tiles.Count(), ComicBookId = cb.Id });
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

            db.SaveChanges();

            return Json(newTile);
        }
    }
}