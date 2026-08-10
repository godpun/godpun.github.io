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
        texto: "“Dios es nuestro amparo y fortaleza, nuestro pronto auxilio.”",
        referencia: "Salmo 46:1"
    },

    27: {
        titulo: "Salmo 27",
        texto: "“Jehová es mi luz y mi salvación; ¿de quién temeré?”",
        referencia: "Salmo 27:1"
    },

    34: {
        titulo: "Salmo 34",
        texto: "“Busqué a Jehová, y él me oyó, y me libró de todos mis temores.”",
        referencia: "Salmo 34:4"
    },

    37: {
        titulo: "Salmo 37",
        texto: "“Encomienda a Jehová tu camino, y confía en él.”",
        referencia: "Salmo 37:5"
    },

    40: {
        titulo: "Salmo 40",
        texto: "“Pacientemente esperé a Jehová, y se inclinó a mí, y oyó mi clamor.”",
        referencia: "Salmo 40:1"
    },

    42: {
        titulo: "Salmo 42",
        texto: "“Espera en Dios; porque aún he de alabarle.”",
        referencia: "Salmo 42:5"
    },

    55: {
        titulo: "Salmo 55",
        texto: "“Echa sobre Jehová tu carga, y él te sustentará.”",
        referencia: "Salmo 55:22"
    },

    62: {
        titulo: "Salmo 62",
        texto: "“En Dios solamente está acallada mi alma; de él viene mi salvación.”",
        referencia: "Salmo 62:1"
    },

    63: {
        titulo: "Salmo 63",
        texto: "“Mi alma tiene sed de ti, mi carne te anhela.”",
        referencia: "Salmo 63:1"
    },

    84: {
        titulo: "Salmo 84",
        texto: "“Bienaventurado el hombre que tiene en ti sus fuerzas.”",
        referencia: "Salmo 84:5"
    },

    103: {
        titulo: "Salmo 103",
        texto: "“Bendice, alma mía, a Jehová, y bendiga todo mi ser su santo nombre.”",
        referencia: "Salmo 103:1"
    },

    112: {
        titulo: "Salmo 112",
        texto: "“Bienaventurado el hombre que teme a Jehová, y en sus mandamientos se deleita.”",
        referencia: "Salmo 112:1"
    },

    119: {
        titulo: "Salmo 119",
        texto: "“Lámpara es a mis pies tu palabra, y lumbrera a mi camino.”",
        referencia: "Salmo 119:105"
    },

    138: {
        titulo: "Salmo 138",
        texto: "“Jehová cumplirá su propósito en mí.”",
        referencia: "Salmo 138:8"
    },

    139: {
        titulo: "Salmo 139",
        texto: "“Te alabaré; porque formidables, maravillosas son tus obras.”",
        referencia: "Salmo 139:14"
    },

    145: {
        titulo: "Salmo 145",
        texto: "“Cercano está Jehová a todos los que le invocan.”",
        referencia: "Salmo 145:18"
    },

    147: {
        titulo: "Salmo 147",
        texto: "“Él sana a los quebrantados de corazón, y venda sus heridas.”",
        referencia: "Salmo 147:3"
    },

    150: {
        titulo: "Salmo 150",
        texto: "“Todo lo que respira alabe a Jehová.”",
        referencia: "Salmo 150:6"
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