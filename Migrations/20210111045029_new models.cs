using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace farmaplus.Migrations
{
    public partial class newmodels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HistorialVentas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Fecha = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Total = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HistorialVentas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductosVentas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Id_Producto = table.Column<int>(type: "INTEGER", nullable: true),
                    Id_HistorialVentas = table.Column<int>(type: "INTEGER", nullable: true),
                    Total = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductosVentas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductosVentas_HistorialVentas_Id_HistorialVentas",
                        column: x => x.Id_HistorialVentas,
                        principalTable: "HistorialVentas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ProductosVentas_Productos_Id_Producto",
                        column: x => x.Id_Producto,
                        principalTable: "Productos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductosVentas_Id_HistorialVentas",
                table: "ProductosVentas",
                column: "Id_HistorialVentas");

            migrationBuilder.CreateIndex(
                name: "IX_ProductosVentas_Id_Producto",
                table: "ProductosVentas",
                column: "Id_Producto");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductosVentas");

            migrationBuilder.DropTable(
                name: "HistorialVentas");
        }
    }
}
