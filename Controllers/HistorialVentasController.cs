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
    public class HistorialVentasController : Controller
    {
        private readonly DataContext _context;

        public HistorialVentasController(DataContext context)
        {
            _context = context;
        }

        // GET: HistorialVentas
        public async Task<IActionResult> Index()
        {
            return View(await _context.HistorialVentas.ToListAsync());
        }

        // GET: HistorialVentas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var historialVentas = await _context.HistorialVentas
                .FirstOrDefaultAsync(m => m.Id == id);
            if (historialVentas == null)
            {
                return NotFound();
            }

            return View(historialVentas);
        }

        // GET: HistorialVentas/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: HistorialVentas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Fecha,Total")] HistorialVentas historialVentas)
        {
            if (ModelState.IsValid)
            {
                _context.Add(historialVentas);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(historialVentas);
        }

        // GET: HistorialVentas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var historialVentas = await _context.HistorialVentas.FindAsync(id);
            if (historialVentas == null)
            {
                return NotFound();
            }
            return View(historialVentas);
        }

        // POST: HistorialVentas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Fecha,Total")] HistorialVentas historialVentas)
        {
            if (id != historialVentas.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(historialVentas);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!HistorialVentasExists(historialVentas.Id))
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
            return View(historialVentas);
        }

        // GET: HistorialVentas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var historialVentas = await _context.HistorialVentas
                .FirstOrDefaultAsync(m => m.Id == id);
            if (historialVentas == null)
            {
                return NotFound();
            }

            return View(historialVentas);
        }

        // POST: HistorialVentas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var historialVentas = await _context.HistorialVentas.FindAsync(id);
            _context.HistorialVentas.Remove(historialVentas);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool HistorialVentasExists(int id)
        {
            return _context.HistorialVentas.Any(e => e.Id == id);
        }
    }
}
