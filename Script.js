// const input4 = document.getElementById("pregunta_4_respuesta");
const input3 = document.getElementById("pregunta_3_respuesta");
const categorias = document.querySelectorAll(
  ".col-md-12.categoria.imagen-fondo"
);
categorias.forEach((categoria) => {
  categoria.style.cursor = "pointer";
});
const subcategorias = document.querySelectorAll(".subcategoria");
subcategorias.forEach((subcategoria) => {
  const titulos = subcategoria.querySelectorAll(".subcategoria-titulo");
  titulos.forEach((titulo) => {
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
const footerNavbar = document.querySelector(".navbar-footer");
const navbarFooterContainer = document.querySelector(".navbar-footer-container");
navbarFooterContainer.style.display = "none";
const nav = document.getElementById("mainNav");
nav.appendChild(footerNavbar);
const botonBuscador = document.getElementById("boton_buscador");
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const carritoCompra = document.querySelector(".helper_changuito");
botonBuscador.style.order = "1";
mobileNavToggle.style.order = "2";
carritoCompra.style.order = "3";
nav.style.flexDirection = "column";
const productos = document.querySelectorAll(".producto-box-main");

productos.forEach((producto) => {
  producto.style.cursor = "pointer";
});

// OCULTAR IMG DE SLIDER CUANDO EL CARRITO ESTA ABIERTO

const slider = document.querySelector(".slider-container");
const carrito = document.getElementById("icono_resumen_pedido");
function handleCarritoClassChange() {
  if (
    carrito.classList.contains("fas") &&
    carrito.classList.contains("fa-arrow-left")
  ) {
    slider.style.display = "none";
  } else {
    slider.style.display = "";
  }
}
const observer = new MutationObserver(handleCarritoClassChange);
observer.observe(carrito, { attributes: true, attributeFilter: ["class"] });
handleCarritoClassChange();

// AGREGAR IMG A SUBCATEGORIAS
const categoria = document.querySelector(".row");
const subCategorias = categoria.getElementsByClassName("subcategoria");

subCategorias[0].style.backgroundImage =
  "url('https://yourfiles.cloud/uploads/4f7c175d6fb1f59672542cd74e76ae51/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%2815%29.png')";
subCategorias[1].style.backgroundImage =
  "url('https://yourfiles.cloud/uploads/9ba84e9f5a47d0e6f868a19e2169b462/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%2814%29.png')";

// IMAGEN HEAD LOGO

var link = document.createElement("link");
link.rel = "icon";
link.type = "image/svg+xml";
link.href =
  "https://yourfiles.cloud/uploads/040d9f86f5fb8ebc4b2d062f806cd221/alambradosbelgrano%20-%20Alambres%20Distribuidora.png";
var head = document.head;
head.appendChild(link);
