using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ComicStoryBook.Web.Models;

namespace ComicStoryBook.Web.Controllers
{
    public class TilesController : Controller
    {
        private ComicStoryBookdbWebContext db = new ComicStoryBookdbWebContext();

        // GET: Tiles
        public ActionResult Index()
        {
            return View(db.Tiles.ToList());
        }

        // GET: Tiles/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Tile tile = db.Tiles.Find(id);
            if (tile == null)
            {
                return HttpNotFound();
            }
            return View(tile);
        }

        // GET: Tiles/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Tiles/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Text,Image,TileType")] Tile tile)
        {
            if (ModelState.IsValid)
            {
                db.Tiles.Add(tile);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(tile);
        }

        // GET: Tiles/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Tile tile = db.Tiles.Find(id);
            if (tile == null)
            {
                return HttpNotFound();
            }
            return View(tile);
        }

        // POST: Tiles/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Text,Image,TileType")] Tile tile)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tile).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(tile);
        }

        // GET: Tiles/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Tile tile = db.Tiles.Find(id);
            if (tile == null)
            {
                return HttpNotFound();
            }
            return View(tile);
        }

        // POST: Tiles/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Tile tile = db.Tiles.Find(id);
            db.Tiles.Remove(tile);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
