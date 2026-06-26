
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