// MODO OSCURO - PATITAS FELICES 
document.addEventListener("DOMContentLoaded", () => {
    const btnDarkMode = document.getElementById("toggle-oscuro-modo");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        btnDarkMode.textContent = "☀️ Modo Claro";
    }
   
    btnDarkMode.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        
        if (body.classList.contains("dark-mode")) {
            btnDarkMode.textContent = "☀️ Modo Claro";
            localStorage.setItem("theme", "dark"); 
        } else {
            btnDarkMode.textContent = "🌙 Modo Oscuro";
            localStorage.setItem("theme", "light"); 
        }
    });
});

// VALIDACIÓN DE FORMULARIO DE ADOPCION


const formAdopcion = document.getElementById("form-adopcion"); // selecciona el formulario con id indicado
if (formAdopcion) {
const inputEmail = document.getElementById("email-adopcion"); // selecciona el input con id email-adopcion
const inputMensaje = document.getElementById("mensaje-adopcion"); // selecciona el elemento con id 
const inputNombre = document.getElementById("nombre-adopcion") ;
const inputTelefono = document.getElementById("telefono-adopcion") ;
const selectMascota = document.getElementById("mascota");
// mensaje de alerta
const msgAdopcion = document.getElementById("mensaje-alerta-adopcion");
//estamos trabajando con el formulario evitar que la pagnina recargue (pierda datos)
formAdopcion.addEventListener("submit", (e) => { // cuando se envia el formulario
    e.preventDefault(); // evita que la pagina recargue
//validar email
const email = inputEmail.value.trim(); // trim() elimina los espacios en blanco al inicio y al final del string
const nombre= inputNombre.value.trim();
const telefono= inputTelefono.value.trim();
const mascota = selectMascota.value;
const mensaje = inputMensaje.value.trim();
if(email.length < 4 || !email.includes("@")){ // si el email tiene menos de 4 caracteres o no contiene @
    msgAdopcion.textContent = "Por favor ingrese un email válido"; // muestra el mensaje de error
    msgAdopcion.style.color = "#de1919"; // cambia el color del mensaje a rojo
    return; // termina la funcion 
}

// 2. Validar que completen todo y que SI O SI elijan una mascota (mascota === "elegir")
    if (nombre === "" || telefono === "" || mensaje === "" || mascota === "elegir") {
        msgAdopcion.textContent = "Por favor, completa todos los campos y selecciona qué mascota querés adoptar."; 
        msgAdopcion.className = "Error";
        msgAdopcion.style.color = "#de1919"; 
        return;
    }

// todo ok 
msgAdopcion.textContent = `¡Gracias ${nombre}! Tu mensaje fue recibido.` ;
msgAdopcion.className ="Exito" ;
msgAdopcion.style.color = "#1a6b2a";
// limpiar el formulario
formAdopcion.reset();
})};

//VALIDAR FORMULARIO VOLUNTARIOs  

const formVoluntariado = document.getElementById("form-voluntariado"); 
if (formVoluntariado) {
const inputEmailVol = document.getElementById("email-voluntariado"); 
const inputNombreVol = document.getElementById("nombre-voluntariado"); 
const inputTelefonoVol = document.getElementById("telefono-voluntariado"); 
const inputEdadVol = document.getElementById("edad-voluntariado");
const selectDisponibilidad = document.getElementById("disponibilidad-voluntariado");
const inputExperienciaVol = document.getElementById("experiencia-voluntariado");

// texto que aparece  abajo del botón
const msgVoluntariado = document.getElementById("mensaje-voluntariado"); 

formVoluntariado.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    
   
    const email = inputEmailVol.value.trim(); 
    const nombre = inputNombreVol.value.trim();
    const telefono = inputTelefonoVol.value.trim();
    const edad = inputEdadVol.value.trim();
    const experiencia = inputExperienciaVol.value.trim();
    const disponibilidad = selectDisponibilidad.value; // El select no lleva trim()

    // 1. Validar email
    if (email.length < 4 || !email.includes("@")) { 
        msgVoluntariado.textContent = "Por favor ingrese un email válido"; 
        msgVoluntariado.className = "Error";
        msgVoluntariado.style.color = "#de1919"; 
        return; 
    }
    
    // 2. Validar que completen los campos obligatorios y elijan una opción de horario
    if (nombre === "" || telefono === "" || edad === "" || experiencia === "" || disponibilidad === "seleccionar") {
        msgVoluntariado.textContent = "Por favor, completa todos los campos y selecciona una disponibilidad horaria."; 
        msgVoluntariado.className = "Error";
        msgVoluntariado.style.color = "#de1919"; 
        return;
    }

    // TODO OK 
    msgVoluntariado.textContent = `¡Gracias ${nombre}! Tu solicitud de voluntariado fue recibida.`; 
    msgVoluntariado.className = "Exito"; 
    msgVoluntariado.style.color = "#1a6b2a"; // Verde éxito
    
    // Limpiar el formulario
    formVoluntariado.reset();
})};

// VALIDACIÓN DEL FORMULARIO DE CONTACTO

const formContacto = document.getElementById("form-contacto");

if (formContacto) {

    const msgContacto = document.getElementById("mensaje-contacto");

    formContacto.addEventListener("submit", (e) => {

        e.preventDefault();

        const nombre = document.getElementById("contacto-nombre").value.trim();
        const email = document.getElementById("contacto-email").value.trim();
        const telefono = document.getElementById("contacto-telefono").value.trim();
        const programa = document.getElementById("contacto-programa").value;
        const disponibilidad = document.getElementById("contacto-disponibilidad").value;
        const mensaje = document.getElementById("contacto-mensaje").value.trim();

        // Validar email
        if (email.length < 4 || !email.includes("@")) {
            msgContacto.textContent = "Por favor ingresá un email válido.";
            msgContacto.style.color = "#de1919";
            return;
        }

        // Validar que todos los campos estén completos 
        /* Lo verifica los required en el formulario de contacto */
    

        // Todo correcto
        msgContacto.textContent = `¡Gracias ${nombre}! Tu consulta fue enviada correctamente.`;
        msgContacto.className = "Exito";
        msgContacto.style.color = "#1a6b2a";
        formContacto.reset();

    })};

