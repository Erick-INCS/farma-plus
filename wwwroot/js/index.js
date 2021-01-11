let u = {
    products: [],
    btnAdd: {},
    btnCancel: {},
    btnSubmit: {},
    elemSelector: {},
    quantityInput: {},
    lblTotal: {},
    lblCurrentPrice: {},
    selectedProduct: {},
    productsTB: {},
    cart: [],
};

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
    u.elemSelector = document.getElementById("product-selector");
    u.quantityInput = document.getElementById("quantity");
    u.lblTotal = document.getElementById("lbl-total");
    u.lblCurrentPrice = document.getElementById("lbl-cost");
    u.productsTB = document.getElementById("products-tb");

    u.elemSelector.onchange = function(e) {
        u.selected = u.products.find(e2 => e2.id == e.currentTarget.value);
        u.selected.cost = parseInt(u.quantityInput.value) * parseFloat(u.selected.price);
        u.selected.quantity = parseInt(u.quantityInput.value);
        u.lblCurrentPrice.innerText = "$" + parseFloat(u.selected.cost).toFixed(2);
    };

    u.quantityInput.onchange = function() {
        u.selected.cost = parseInt(u.quantityInput.value) * parseFloat(u.selected.price);
        u.selected.quantity = parseInt(u.quantityInput.value);
        u.lblCurrentPrice.innerText = "$" + parseFloat(u.selected.cost).toFixed(2);
    };

    u.btnAdd.onclick = function() {
        let last = u.cart.find(e => e.id == u.selected.id);
        if (last) {
            last.quantity = parseInt(last.quantity) + parseInt(u.selected.quantity);
        } else {
            u.cart.push({id: u.selected.id, desc: u.selected.desc, price: u.selected.price, quantity: u.selected.quantity, total: u.selected.cost});
        }
        u.productsTB.innerHTML = u.cart.map(e => `<tr><td>${e.desc}</td><td>$${e.price}</td><td>${e.quantity}</td><td>$${e.total}</td></tr>`).join('');

        u.quantityInput.value = 1;
        u.elemSelector.selectedIndex = 0;
        u.lblCurrentPrice.innerText = 0.00;
        u.lblTotal.innerText = 'Total $' + u.cart.reduce((p, e)=>p + parseFloat(e.total), 0);
    };

    u.btnSubmit.onclick = function () {
        let data = {
            fecha: new Date(),
            total: u.cart.reduce((p, e)=>p + parseFloat(e.total), 0),
            productos: u.cart.map(e => [{idProducto: e.id, cantidad: parseFloat(e.quantity), importe: parseFloat(e.total)}][0]) 
        };

        fetch('/HistorialVentas/New', {method:'POST', body: JSON.stringify(data), headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }})
	    .then(res => res.json()).then(res => {
		    console.log(res);
	    });
    }
};