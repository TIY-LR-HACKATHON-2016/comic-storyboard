namespace ComicStoryBook.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TileCascadeDelet : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Tiles", "ComicBook_Id", "dbo.ComicBooks");
            DropIndex("dbo.Tiles", new[] { "ComicBook_Id" });
            AlterColumn("dbo.Tiles", "ComicBook_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.Tiles", "ComicBook_Id");
            AddForeignKey("dbo.Tiles", "ComicBook_Id", "dbo.ComicBooks", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Tiles", "ComicBook_Id", "dbo.ComicBooks");
            DropIndex("dbo.Tiles", new[] { "ComicBook_Id" });
            AlterColumn("dbo.Tiles", "ComicBook_Id", c => c.Int());
            CreateIndex("dbo.Tiles", "ComicBook_Id");
            AddForeignKey("dbo.Tiles", "ComicBook_Id", "dbo.ComicBooks", "Id");
        }
    }
}
