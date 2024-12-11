document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    // Función que se ejecuta cuando el formulario se envía
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const asunto = document.getElementById("asunto").value;
        const mensaje = document.getElementById("mensaje").value;

        // Validar que todos los campos estén llenos
        if (nombre && email && asunto && mensaje) {
            // Si todo está bien, mostrar un mensaje de éxito
            alert("¡Gracias por contactarnos! Hemos recibido tu mensaje.");
            form.reset(); // Limpia el formulario
        } else {
            // Si falta algún campo, mostrar un mensaje de advertencia
            alert("Por favor, completa todos los campos.");
        }
    });
});