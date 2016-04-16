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
    public class ComicBooksController : Controller
    {
        private ComicStoryBookdbWebContext db = new ComicStoryBookdbWebContext();

        // GET: ComicBooks
        public ActionResult Index()
        {

            //var model =
            //  db.ComicBooks//.Where(x => x.Id == 1)
            //      .Select(cb => new {Foo = cb.Name, TileCount = cb.Tiles.Count(), Bar = cb.Id});
            //return Json(model,JsonRequestBehavior.AllowGet);
            return View(db.ComicBooks.ToList());
        }

        // GET: ComicBooks/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ComicBook comicBook = db.ComicBooks.Find(id);
            if (comicBook == null)
            {
                return HttpNotFound();
            }
            return View(comicBook);
        }

        // GET: ComicBooks/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ComicBooks/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name")] ComicBook comicBook)
        {
            if (ModelState.IsValid)
            {
                db.ComicBooks.Add(comicBook);
                db.SaveChanges();
               // return RedirectToAction("Index");
                return RedirectToAction("Index", "Tiles");
            }

            return View(comicBook);
        }

        // GET: ComicBooks/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ComicBook comicBook = db.ComicBooks.Find(id);
            if (comicBook == null)
            {
                return HttpNotFound();
            }
            return View(comicBook);
        }

        // POST: ComicBooks/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name")] ComicBook comicBook)
        {
            if (ModelState.IsValid)
            {
                db.Entry(comicBook).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(comicBook);
        }

        // GET: ComicBooks/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ComicBook comicBook = db.ComicBooks.Find(id);
            if (comicBook == null)
            {
                return HttpNotFound();
            }
            return View(comicBook);
        }

        // POST: ComicBooks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ComicBook comicBook = db.ComicBooks.Find(id);
            db.ComicBooks.Remove(comicBook);
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
