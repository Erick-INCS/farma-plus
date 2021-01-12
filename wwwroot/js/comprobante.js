let data = JSON.parse(document.querySelector('span').innerText);

console.log(data);
document.querySelector('#fecha').innerText = new Date(data.fecha).toLocaleDateString();
document.querySelector('#total').innerText = "$" +  parseFloat(data.total).toFixed(2);

document.querySelector('#products-tb').innerHTML = 
data.productos.map(e => `<tr><td>${e.desc}</td><td>$${e.price}</td><td>${e.quantity}</td><td>$${e.total}</td></tr>`).join('');

window.print();