using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace farmaplus.Models
{
    public static class SeedData
    {

        public static async Task InitializeAsync(
                   IServiceProvider serviceProvider)
        {
            var roleManager = serviceProvider
                .GetRequiredService<RoleManager<IdentityRole>>();
            await EnsureRolesAsync(roleManager);
            var userManager = serviceProvider
                .GetRequiredService<UserManager<ApplicationUser>>();
            await EnsureTestAdminAsync(userManager);
        }
        private static async Task EnsureRolesAsync(
        RoleManager<IdentityRole> roleManager)
        {
            var alreadyExists = await roleManager
                .RoleExistsAsync(Constants.AdministratorRole);
            if (alreadyExists) return;
            await roleManager.CreateAsync(
                new IdentityRole(Constants.AdministratorRole));
        }
        private static async Task EnsureTestAdminAsync(
        UserManager<ApplicationUser> userManager)
        {
            var testAdmin = await userManager.Users
                .Where(x => x.UserName == "prueba2@mail.com")
                .SingleOrDefaultAsync();
            if (testAdmin != null) return;
            testAdmin = new ApplicationUser
            {
                UserName = "prueba2@mail.com",
                Email = "prueba2@mail.com"
            };
            await userManager.CreateAsync(
                testAdmin, "j7ThkXJHavu?Mec");
            await userManager.AddToRoleAsync(
                testAdmin, Constants.AdministratorRole);
        }
    }
}