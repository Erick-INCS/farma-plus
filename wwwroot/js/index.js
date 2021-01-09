let u = {
    products: [],
    btnAdd: {},
    btnCancel: {},
    btnSubmit: {},
    btnSubmit: {},
    btnSubmit: {},
};

function addIterm() {
    
}

window.onload = function() {
    u.products = document.getElementById('products').children;
    
    let arr = [];
    for (var tmp of u.products) {
        arr.push(tmp.dataset);
    }
    u.products = arr;

    u.btnAdd = document.getElementById("btn-agregar");
    u.btnCancel = document.getElementById("btn-cancelar");
    u.btnSubmit = document.getElementById("btn-procesar");
}