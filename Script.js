// const input4 = document.getElementById("pregunta_4_respuesta");
const input3 = document.getElementById("pregunta_3_respuesta");
const categorias = document.querySelectorAll(".col-md-12.categoria.imagen-fondo");
categorias.forEach(categoria => {
  categoria.style.cursor = "pointer";
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
footerNavbar.style.display = "none";
const navbarElement =document.createElement("div");
navbarElement.className = "navbar-footer";
navbarElement.innerHTML = `
<div style="" class="navbar-footer">                                                
                                <button type="button" style="" onclick="openNav()" class="btn my-btn-primary animated fadeIn" id="mobile-nav-toggle">
                                        <i class="fa fa-bars"></i>
                                </button>
                                <button class="btn my-btn-primary" id="boton_buscador" style="HCHdisplay:none;" type="button" onclick="mostrar_buscador();">
                                        <i id="icono_buscador" class="fas fa-search"></i>
                                </button>
                                <button class="btn helper_changuito my-btn-primary" type="button" onclick="mostrar_resumen_pedido();">
                                        <i id="icono_resumen_pedido" class="fas fa-shopping-bag"></i>
                                        <div class="badge hchbadge-primary pedido_productos_cantidad_total">0</div>
                                </button>                
                                <!-- <div style="background-color:#000000!important; padding-left: 10px; z-index:999999;"></div> -->
                </div>
    `;
    nav.appendChild(navbarElement);
const botonBuscador = document.getElementById("boton_buscador");
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const carritoCompra = document.querySelector(".helper_changuito");
botonBuscador.style.order = "1"; 
mobileNavToggle.style.order = "2";
carritoCompra.style.order = "3";
nav.style.flexDirection = "column"
navbarElement.style.justifyContent = "space-between"
const productos = document.querySelectorAll(".producto-box-main");

productos.forEach(producto => {
  producto.style.cursor = "pointer";
});
const slider = document.querySelector(".slider-container");
const carrito = document.getElementById("icono_resumen_pedido");
function handleCarritoClassChange() {
  if (carrito.classList.contains("fas") && carrito.classList.contains("fa-arrow-left")) {
    slider.style.display = "none";
  } else {
    slider.style.display = "";
  }
}
const observer = new MutationObserver(handleCarritoClassChange);
observer.observe(carrito, { attributes: true, attributeFilter: ['class'] });
handleCarritoClassChange();