using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace farmaplus.Migrations
{
    public partial class mig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Factura",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Fecha = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Total = table.Column<float>(type: "REAL", nullable: false),
                    IVA = table.Column<float>(type: "REAL", nullable: false),
                    Id_Cliente = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Factura", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Factura_Clientes_Id_Cliente",
                        column: x => x.Id_Cliente,
                        principalTable: "Clientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nombre = table.Column<string>(type: "TEXT", nullable: true),
                    ApellidoP = table.Column<string>(type: "TEXT", nullable: true),
                    ApellidoM = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Pass = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Detalle_Factura",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Id_factura = table.Column<int>(type: "INTEGER", nullable: true),
                    Id_producto = table.Column<int>(type: "INTEGER", nullable: true),
                    Cantidad = table.Column<int>(type: "INTEGER", nullable: false),
                    Precio = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Detalle_Factura", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Detalle_Factura_Factura_Id_factura",
                        column: x => x.Id_factura,
                        principalTable: "Factura",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Detalle_Factura_Productos_Id_producto",
                        column: x => x.Id_producto,
                        principalTable: "Productos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Detalle_Factura_Id_factura",
                table: "Detalle_Factura",
                column: "Id_factura");

            migrationBuilder.CreateIndex(
                name: "IX_Detalle_Factura_Id_producto",
                table: "Detalle_Factura",
                column: "Id_producto");

            migrationBuilder.CreateIndex(
                name: "IX_Factura_Id_Cliente",
                table: "Factura",
                column: "Id_Cliente");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Detalle_Factura");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Factura");
        }
    }
}
