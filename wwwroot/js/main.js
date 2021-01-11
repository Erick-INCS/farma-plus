if (document.location.href.includes("Identity/Account/Login") ||
document.location.href.includes('/Identity/Account/Register')) {
    for (var i of document.getElementsByTagName("h4")) {
        i.remove();
    }

    for (var i of document.getElementsByTagName("h4")) {
        i.remove();
    }

    document.querySelector(".btn").classList.add("mt-3");
    document.querySelector(".col-md-6 section").remove();
    document.querySelector("div.checkbox").remove();
    document.querySelector("#forgot-password").remove();


    for (var i of document.querySelectorAll(".form-group > p")) {
        i.remove();
    }
}