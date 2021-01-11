using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using farmaplus.Models;

namespace farmaplus.Controllers
{
    public class ProductosVentasController : Controller
    {
        private readonly DataContext _context;

        public ProductosVentasController(DataContext context)
        {
            _context = context;
        }

        // GET: ProductosVentas
        public async Task<IActionResult> Index()
        {
            var dataContext = _context.ProductosVentas.Include(p => p.HistorialVentas).Include(p => p.Productos);
            return View(await dataContext.ToListAsync());
        }

        // GET: ProductosVentas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var productosVentas = await _context.ProductosVentas
                .Include(p => p.HistorialVentas)
                .Include(p => p.Productos)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (productosVentas == null)
            {
                return NotFound();
            }

            return View(productosVentas);
        }

        // GET: ProductosVentas/Create
        public IActionResult Create()
        {
            ViewData["Id_HistorialVentas"] = new SelectList(_context.HistorialVentas, "Id", "Id");
            ViewData["Id_Producto"] = new SelectList(_context.Productos, "Id", "Id");
            return View();
        }

        // POST: ProductosVentas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Id_Producto,Id_HistorialVentas")] ProductosVentas productosVentas)
        {
            if (ModelState.IsValid)
            {
                _context.Add(productosVentas);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["Id_HistorialVentas"] = new SelectList(_context.HistorialVentas, "Id", "Id", productosVentas.Id_HistorialVentas);
            ViewData["Id_Producto"] = new SelectList(_context.Productos, "Id", "Id", productosVentas.Id_Producto);
            return View(productosVentas);
        }

        // GET: ProductosVentas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var productosVentas = await _context.ProductosVentas.FindAsync(id);
            if (productosVentas == null)
            {
                return NotFound();
            }
            ViewData["Id_HistorialVentas"] = new SelectList(_context.HistorialVentas, "Id", "Id", productosVentas.Id_HistorialVentas);
            ViewData["Id_Producto"] = new SelectList(_context.Productos, "Id", "Id", productosVentas.Id_Producto);
            return View(productosVentas);
        }

        // POST: ProductosVentas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Id_Producto,Id_HistorialVentas")] ProductosVentas productosVentas)
        {
            if (id != productosVentas.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(productosVentas);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProductosVentasExists(productosVentas.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["Id_HistorialVentas"] = new SelectList(_context.HistorialVentas, "Id", "Id", productosVentas.Id_HistorialVentas);
            ViewData["Id_Producto"] = new SelectList(_context.Productos, "Id", "Id", productosVentas.Id_Producto);
            return View(productosVentas);
        }

        // GET: ProductosVentas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var productosVentas = await _context.ProductosVentas
                .Include(p => p.HistorialVentas)
                .Include(p => p.Productos)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (productosVentas == null)
            {
                return NotFound();
            }

            return View(productosVentas);
        }

        // POST: ProductosVentas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var productosVentas = await _context.ProductosVentas.FindAsync(id);
            _context.ProductosVentas.Remove(productosVentas);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProductosVentasExists(int id)
        {
            return _context.ProductosVentas.Any(e => e.Id == id);
        }
    }
}
