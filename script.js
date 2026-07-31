let carrito = [];

/* AGREGAR */
function agregar(producto) {
    carrito.push(producto);
    mostrar();
}

/* ELIMINAR */
function eliminar(index) {
    carrito.splice(index, 1);
    mostrar();
}

/* MOSTRAR */
function mostrar() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    carrito.forEach((item, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${item}
            <span class="eliminar" onclick="eliminar(${index})">X</span>
        `;

        lista.appendChild(li);
    });
}

/* RELOJ */
function actualizarReloj() {
    let ahora = new Date();
    let hora = ahora.toLocaleTimeString();
    document.getElementById("reloj").textContent = "🕒 " + hora;
}

setInterval(actualizarReloj, 1000);

/* WHATSAPP */
function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("Primero agrega productos 😅");
        return;
    }

    let numero = "573132432952";

    let mensaje = "🍓 *FRUTTO & CREMA* 🍓\n";
    mensaje += "🧾 *Pedido:*\n\n";

    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto}\n`;
    });

    mensaje += "\n📍 Dirección: ";
    mensaje += "\n👤 Nombre: ";
    mensaje += "\n\nGracias por tu pedido ❤️";

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}