namespace React_Onboarding.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChequeDB : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cheques",
                c => new
                    {
                        ChequeId = c.Int(nullable: false, identity: true),
                        PayeeName = c.String(nullable: false, maxLength: 20),
                        Amount = c.Double(nullable: false),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ChequeId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Cheques");
        }
    }
}
