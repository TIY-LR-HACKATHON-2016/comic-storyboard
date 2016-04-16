namespace ComicStoryBook.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class IntialTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ComicBooks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Tiles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                        Image = c.String(),
                        TileType = c.String(),
                        ComicBook_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ComicBooks", t => t.ComicBook_Id)
                .Index(t => t.ComicBook_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Tiles", "ComicBook_Id", "dbo.ComicBooks");
            DropIndex("dbo.Tiles", new[] { "ComicBook_Id" });
            DropTable("dbo.Tiles");
            DropTable("dbo.ComicBooks");
        }
    }
}
