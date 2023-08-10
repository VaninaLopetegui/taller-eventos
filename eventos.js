function saludar(event) {
    alert("Hola! Soy el botón.");
    event.stopPropagation(); // Detiene la propagación del evento
}
let divBoton = document.getElementById("divBoton").addEventListener("click", () =>{
    alert("Hola! Soy el div.");
});
