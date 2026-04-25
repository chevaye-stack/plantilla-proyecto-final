//Almacenas en una variable llamada elementos, aquel elemento con clase .animacion
const elementos = document.querySelectorAll(".animacion");

//Generamos un evento de escucha que accede a la ventana del navegador y se activa cuando el usuario hace scroll, se ejecuta una sola vez
//Para reiniciar el efecto, actualizar la página
window.addEventListener("scroll", () => {
    //foreach: Realiza un recorrido individual en los elementos alcenamos en la variable elementos
    //Cada elemento recorrido se almacena en "el"
    elementos.forEach(el => {
        
        const posicion = el.getBoundingClientRect().top; //getBoundingClientRect obtiene la posicicon de los elementos en pantalla
        const pantalla = window.innerHeight; //innerHeight obtiene la altura del navegador

        if(posicion < pantalla - 100){ //Evalua si el elemento ya está entrando a la pantalla
            el.classList.add("activo");//agrega la clase activo
        }
    });
});

/* SIMULACIÓN DE AGREGAR - ELIMINAR PRODUCTO */


const producto = document.querySelectorAll(".producto"); //Obtenemos todos los botones que tengan la clase agregar-carrito
const contadorHtml = document.getElementById("contador-carrito");

let total = 0;
/* funcion contador */

function actualizarContador(){
    
    if(contadorHtml){
        contadorHtml.textContent = total;  
    }
}

/* agregar carrito */

producto.forEach(prod => {

    const btnAgregar = prod.querySelector(".agregar-carrito")
    const panel = prod.querySelector(".contador-cantidad");
    const btnRestar = prod.querySelector(".restar");
    const btnSumar = prod.querySelector(".sumar");
    const cantidadHtml = prod.querySelector(".cantidad");

    let cantidad = 0;

    btnAgregar.addEventListener("click", () => {
        panel.classList.remove("oculto");

        cantidad = 1;
        cantidadHtml.textContent = cantidad;
        
        total++;
        actualizarContador();
        btnAgregar.disabled = true;
    });

    btnSumar.addEventListener("click", () => {
        cantidad++;
        cantidadHtml.textContent = cantidad;
        
        total++;
        actualizarContador();
    });

    btnRestar.addEventListener("click", () => {
        if(cantidad>0){
            cantidad--;
            cantidadHtml.textContent = cantidad;

            total--;
            actualizarContador();
        }

        if(cantidad === 0){
            alert("No se puede disminuir más productos.");
            panel.classList.add("oculto");
            btnAgregar.disabled = false;
        }
    });

    /*boton.addEventListener("click", () => {
        if(!boton.classList.contains("activo")){
            contador++;
            boton.classList.add("activo");
            boton.textContent = "Eliminar";
        }else{
            if(contador > 0) contador--;
            boton.classList.remove("activo");
            boton.textContent = "Agregar";
        }
        actualizarContador();
    });*/
});