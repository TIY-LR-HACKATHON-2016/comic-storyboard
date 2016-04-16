using ComicStoryBook.Web.Models;
using FizzWare.NBuilder;

namespace ComicStoryBook.Web.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ComicStoryBookdbWebContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ComicStoryBookdbWebContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            if (!context.ComicBooks.Any())
            {
                var books = Builder<ComicBook>.CreateListOfSize(8)
                    .All()
                    .With(cb => cb.Name = "Adventures of " + Faker.NameFaker.Name())
                    .With(cb => cb.Tiles = Builder<Tile>.CreateListOfSize(Faker.NumberFaker.Number(3, 10)).All()
                        .With(x => x.ComicBook = cb)
                        .With(x => x.Text = Faker.TextFaker.Sentence())
                        .With(x => x.TileType = Faker.EnumFaker.SelectFrom<TileType>())
                        .With(x => x.Image = "http://i.imgur.com/9E8Bypx.jpg")
                        .Build())
                    .Build();
                context.ComicBooks.AddRange(books);

                context.SaveChanges();
            }
        }
    }
}
