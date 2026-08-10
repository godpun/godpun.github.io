const messageButton = document.getElementById("messageButton");
const welcomeCard = document.getElementById("welcomeCard");
const salmoCard = document.getElementById("salmoCard");


// ===========================
// SALMOS
// ===========================

const salmos = {

    23: {
        titulo: "Salmo 23",
        texto: "“Jehová es mi pastor; nada me faltará.”",
        referencia: "Salmo 23:1"
    },

    91: {
        titulo: "Salmo 91",
        texto: "“El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.”",
        referencia: "Salmo 91:1"
    },

    121: {
        titulo: "Salmo 121",
        texto: "“Jehová guardará tu salida y tu entrada desde ahora y para siempre.”",
        referencia: "Salmo 121:8"
    },

    46: {
        titulo: "Salmo 46",
        texto: "“Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.”",
        referencia: "Salmo 46:1"
    }

};


// ===========================
// SALMO ACTUAL
// ===========================

const parametros = new URLSearchParams(window.location.search);

const numeroSalmo = parametros.get("salmo") || "23";

const salmoActual = salmos[numeroSalmo] || salmos[23];

document.querySelector(".salmo-card h2").textContent = salmoActual.titulo;

document.querySelector(".salmo-text").textContent = salmoActual.texto;

document.querySelector(".salmo-reference").textContent = salmoActual.referencia;


// ===========================
// TRANSICIÓN
// ===========================

messageButton.addEventListener("click", function () {

    // Primera tarjeta desaparece
    welcomeCard.style.opacity = "0";

    setTimeout(function () {

        welcomeCard.style.display = "none";

        // Segunda tarjeta aparece
        salmoCard.style.display = "flex";
        salmoCard.style.opacity = "0";

        setTimeout(function () {

            salmoCard.style.opacity = "1";

        }, 50);

    }, 600);

});