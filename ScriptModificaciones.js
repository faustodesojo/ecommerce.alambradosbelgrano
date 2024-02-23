// const input4 = document.getElementById("pregunta_4_respuesta");
const input3 = document.getElementById("pregunta_3_respuesta");
const categorias = document.querySelectorAll(".col-md-12.categoria.imagen-fondo");
categorias.forEach(categoria => {
  categoria.style.cursor = "pointer";
});
const subcategorias = document.querySelectorAll(".subcategoria");
subcategorias.forEach(subcategoria => {
  const titulos = subcategoria.querySelectorAll(".subcategoria-titulo");
  titulos.forEach(titulo => {
    titulo.style.cursor = "pointer";
  });
});

input3.type = "number";
// const nuevoContenido = '<p><select id="pregunta_4_respuesta" name="pr_preg4" class="form-control" required placeholder="">' +
//     '<option value="Efectivo">Efectivo</option>' +
//     '<option value="Transferencia">Transferencia</option>' +
//     '<option value="Mercado Pago">Mercado Pago (+ 10%)</option>' +
//     '</select></p>';
// input4.outerHTML = nuevoContenido;
const footerNavbar =document.querySelector(".navbar-footer");
const nav = document.getElementById("mainNav");
nav.appendChild(footerNavbar);

const botonBuscador = document.getElementById("boton_buscador");
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const carritoCompra = document.querySelector(".helper_changuito");
botonBuscador.style.order = "1"; 
mobileNavToggle.style.order = "2";
carritoCompra.style.order = "3";
nav.style.flexDirection = "column"
const productos = document.querySelectorAll(".producto-box-main");

productos.forEach(producto => {
  producto.style.cursor = "pointer";
});
const slider = document.querySelector(".slider-container");
const carrito = document.getElementById("icono_resumen_pedido");
const bodyPage = document.querySelector("container");

function handleCarritoClassChange() {
  if (carrito.classList.contains("fas") && carrito.classList.contains("fa-arrow-left")) {
    slider.style.display = "none";
    bodyPage.style.backgroundColor = "red";
  } else {
    slider.style.display = "";
    bodyPage.style.backgroundColor = "";
  }
}

const observer = new MutationObserver(handleCarritoClassChange);
observer.observe(carrito, { attributes: true, attributeFilter: ['class'] });
handleCarritoClassChange();
