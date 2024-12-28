const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    while(navegacion.children[5]){
        navegacion.removeChild(navegacion.children[5]);
    }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const ensaladas = platillosArreglo.filter(ensalada=> ensalada.getAttribute('data-platillo') === 'ensalada');
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    const postres = platillosArreglo.filter(postre=> postre.getAttribute('data-platillo') === 'postre');

    mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);

}

const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) =>{
    btnEnsaladas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada));
    });

    btnPasta.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
         pastas.forEach(pasta=> contenedorPlatillos.appendChild(pasta));
    });

    btnPizza.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza=> contenedorPlatillos.appendChild(pizza));
    });
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     // Seleccionar los enlaces del menú
//     const ceoLink = document.querySelector('a[href="ceo.html"]');
//     const contactoLink = document.querySelector('a[href="contacto.html"]');
//     const sobreNosotrosLink = document.querySelector('a[href="sobre-nosotros.html"]');

//     // Agregar eventos de clic para redirigir
//     ceoLink.addEventListener('click', (event) => {
//         event.preventDefault(); // Evitar comportamiento predeterminado del enlace
//         window.location.href = 'ceo.html'; // Redirigir a ceo.html
//     });

//     contactoLink.addEventListener('click', (event) => {
//         event.preventDefault();
//         window.location.href = 'contacto.html';
//     });

//     sobreNosotrosLink.addEventListener('click', (event) => {
//         event.preventDefault();
//         window.location.href = 'sobre-nosotros.html';
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     // Código para abrir menú
//     const menu = document.querySelector('.hamburguesa');
//     const navegacion = document.querySelector('.navegacion');
    
//     menu.addEventListener('click', () => {
//         navegacion.classList.toggle('ocultar');
//     });

//     // Código para hacer las imágenes clicables
//     const imagenes = document.querySelectorAll('.platillo img');

//     imagenes.forEach(imagen => {
//         imagen.addEventListener('click', () => {
//             alert('Imagen presionada: ' + imagen.alt);
//         });
//     });

//     // Lazy loading de imágenes
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 observer.unobserve(img);
//             }
//         });
//     });

//     document.querySelectorAll('img[data-src]').forEach(img => {
//         observer.observe(img);
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo => {
        platillo.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace

            const imagen = platillo.dataset.imagen;
            const titulo = platillo.dataset.titulo;
            const descripcion = platillo.dataset.descripcion;

            // Redirigir a la página de detalles con parámetros en la URL
            window.location.href = `detalle.html?imagen=${encodeURIComponent(imagen)}&titulo=${encodeURIComponent(titulo)}&descripcion=${encodeURIComponent(descripcion)}`;
        });
    });
});
