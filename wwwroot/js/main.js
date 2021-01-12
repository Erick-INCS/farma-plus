if (document.location.href.includes("Identity/Account/Login") ||
document.location.href.includes('/Identity/Account/Register')) {
    for (var i of document.getElementsByTagName("h4")) {
        i.remove();
    }

    for (var i of document.getElementsByTagName("h4")) {
        i.remove();
    }

    for (var i of document.querySelectorAll(".form-group > p")) {
        i.remove();
    }

    for (var i of document.querySelectorAll("h1")) {
        console.log(i.innerText.trim());
        if (i.innerText.trim() == 'Register') {
            i.innerText = 'Registrar Usuario';
        }
    }

    if (document.querySelector('nav.nav')) {
        document.querySelector('nav.nav').innerHTML = 
        `<a class="nav-link" href="/">Inicio</a>
          <a class="nav-link" href="/Productos">Catalogo</a>
          <a class="nav-link" href="/Identity/Account/Register">Nuevo Usuario</a>
        <a class="nav-link" href="/HistorialVentas">Ventas</a>
        <!-- /Identity/Account/Register?returnUrl=%2F -->
        <!-- <a class="nav-link" href="/Clientes">Clientes</a> -->
        <form class="form-inline" action="/Identity/Account/Logout?returnUrl=%2F" method="post">
          <button type="submit" class="nav-link btn btn-link text-primary">Salir</button>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8CK8x5GKQJhFsSk_C0p-kydz6z17vbifVAaLWex_1JPOeIiQUrsJZd_1lQ4P0OUyqkeyF7Hm_kw2iYKVKJiumTTYonNZv-_aHNi7EY5OWFwgy_me4MTyFlGlMF5ez7NpZLPJqpfhigTZzLnqbh3F1TNhO0kr-t4gqQcGHa_Ge3X7t0G8JFZmcWOxVzwbc8rH4A"></form>`;
    }

    document.querySelector(".col-md-6 section").remove();
    document.querySelector("#registerSubmit").classList.add("mt-3");
    document.querySelector("div.checkbox").remove();
    document.querySelector("#forgot-password").remove();
    document.querySelector(".btn").classList.add("mt-3");

}