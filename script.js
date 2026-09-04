const messageButton = document.getElementById("messageButton");
const welcomeCard = document.getElementById("welcomeCard");
const salmoCard = document.getElementById("salmoCard");
const instagramCard = document.querySelector(".instagram-card");
const instagramButton = document.getElementById("instagramButton");

// ===========================
// SALMOS
// ===========================


const salmos = [

    {
        titulo: "Salmo 23",
        texto: "“Jehová es mi pastor; nada me faltará.”",
        referencia: "Salmo 23:1"
    },

    {
        titulo: "Salmo 91",
        texto: "“El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.”",
        referencia: "Salmo 91:1"
    },

    {
        titulo: "Salmo 121",
        texto: "“Jehová guardará tu salida y tu entrada desde ahora y para siempre.”",
        referencia: "Salmo 121:8"
    },

    {
        titulo: "Salmo 46",
        texto: "“Dios es nuestro amparo y fortaleza, nuestro pronto auxilio.”",
        referencia: "Salmo 46:1"
    },

    {
        titulo: "Salmo 27",
        texto: "“Jehová es mi luz y mi salvación; ¿de quién temeré?”",
        referencia: "Salmo 27:1"
    },

    {
        titulo: "Salmo 34",
        texto: "“Busqué a Jehová, y él me oyó, y me libró de todos mis temores.”",
        referencia: "Salmo 34:4"
    },

    {
        titulo: "Salmo 37",
        texto: "“Encomienda a Jehová tu camino, y confía en él.”",
        referencia: "Salmo 37:5"
    },

    {
        titulo: "Salmo 40",
        texto: "“Pacientemente esperé a Jehová, y se inclinó a mí, y oyó mi clamor.”",
        referencia: "Salmo 40:1"
    },

    {
        titulo: "Salmo 42",
        texto: "“Espera en Dios; porque aún he de alabarle.”",
        referencia: "Salmo 42:5"
    },

    {
        titulo: "Salmo 55",
        texto: "“Echa sobre Jehová tu carga, y él te sustentará.”",
        referencia: "Salmo 55:22"
    },

    {
        titulo: "Salmo 62",
        texto: "“En Dios solamente está acallada mi alma; de él viene mi salvación.”",
        referencia: "Salmo 62:1"
    },

    {
        titulo: "Salmo 63",
        texto: "“Mi alma tiene sed de ti, mi carne te anhela.”",
        referencia: "Salmo 63:1"
    },

    {
        titulo: "Salmo 84",
        texto: "“Bienaventurado el hombre que tiene en ti sus fuerzas.”",
        referencia: "Salmo 84:5"
    },

    {
        titulo: "Salmo 103",
        texto: "“Bendice, alma mía, a Jehová, y bendiga todo mi ser su santo nombre.”",
        referencia: "Salmo 103:1"
    },

    {
        titulo: "Salmo 112",
        texto: "“Bienaventurado el hombre que teme a Jehová, y en sus mandamientos se deleita.”",
        referencia: "Salmo 112:1"
    },

    {
        titulo: "Salmo 119",
        texto: "“Lámpara es a mis pies tu palabra, y lumbrera a mi camino.”",
        referencia: "Salmo 119:105"
    },

    {
        titulo: "Salmo 138",
        texto: "“Jehová cumplirá su propósito en mí.”",
        referencia: "Salmo 138:8"
    },

    {
        titulo: "Salmo 139",
        texto: "“Te alabaré; porque formidables, maravillosas son tus obras.”",
        referencia: "Salmo 139:14"
    },

    {
        titulo: "Salmo 145",
        texto: "“Cercano está Jehová a todos los que le invocan.”",
        referencia: "Salmo 145:18"
    },

    {
        titulo: "Salmo 147",
        texto: "“Él sana a los quebrantados de corazón, y venda sus heridas.”",
        referencia: "Salmo 147:3"
    },

    {
        titulo: "Salmo 150",
        texto: "“Todo lo que respira alabe a Jehová.”",
        referencia: "Salmo 150:6"
    },
    
     {
        titulo: "Salmo 1",
        texto: "Dios bendice el camino de quien confía en Él y permanece firme.",
        referencia: "Salmo 1:1-3"
    },

     {
        titulo: "Salmo 4",
        texto: "Puedes descansar en paz, porque Dios escucha cuando le llamas.",
        referencia: "Salmo 4:8"
    },

     {
        titulo: "Salmo 5",
        texto: "Pon tu camino delante de Dios y confía en su dirección.",
        referencia: "Salmo 5:11"
    },

     {
        titulo: "Salmo 16",
        texto: "En Dios encuentras seguridad, alegría y un camino que permanece.",
        referencia: "Salmo 16:8-11"
    },

     {
        titulo: "Salmo 18",
        texto: "Cuando sientas que no puedes más, recuerda de dónde viene tu fuerza.",
        referencia: "Salmo 18:2"
    },

     {
        titulo: "Salmo 19",
        texto: "La creación habla de la grandeza de Dios y su palabra ilumina el camino.",
        referencia: "Salmo 19:1,8"
    },

     {
        titulo: "Salmo 25",
        texto: "Dios puede mostrarte el camino cuando no sabes hacia dónde ir.",
        referencia: "Salmo 25:4-5"
    },

     {
        titulo: "Salmo 31",
        texto: "Puedes poner tu vida en las manos de Dios; Él es tu refugio.",
        referencia: "Salmo 31:3-5"
    },

     {
        titulo: "Salmo 32",
        texto: "Hay libertad cuando dejas de cargar solo aquello que puedes entregar a Dios.",
        referencia: "Salmo 32:7"
    },

     {
        titulo: "Salmo 33",
        texto: "Confía: los planes de Dios permanecen aun cuando tú todavía no los entiendas.",
        referencia: "Salmo 33:11"
    },

     {
        titulo: "Salmo 61",
        texto: "Cuando tu corazón esté cansado, corre hacia Dios; Él puede ser tu refugio.",
        referencia: "Salmo 61:2-3"
    },

     {
        titulo: "Salmo 65",
        texto: "Hay razones para agradecer incluso antes de ver todo lo que estás esperando.",
        referencia: "Salmo 65:5"
    },

     {
        titulo: "Salmo 66",
        texto: "Dios escucha cuando clamas y no ignora las oraciones que salen de tu corazón.",
        referencia: "Salmo 66:19"
    },

     {
        titulo: "Salmo 71",
        texto: "Puedes seguir confiando en Dios; Él ha sido tu esperanza desde siempre.",
        referencia: "Salmo 71:5"
    },

     {
        titulo: "Salmo 73",
        texto: "Aunque no entiendas lo que sucede, permanecer cerca de Dios sigue siendo suficiente.",
        referencia: "Salmo 73:28"
    },

     {
        titulo: "Salmo 86",
        texto: "Puedes acercarte a Dios con confianza: Él es bueno, compasivo y dispuesto a escuchar.",
        referencia: "Salmo 86:5"
    },

     {
        titulo: "Salmo 90",
        texto: "Pídele a Dios sabiduría para vivir bien el tiempo que tienes hoy.",
        referencia: "Salmo 90:12"
    },

     {
        titulo: "Salmo 100",
        texto: "Entra con gratitud: todavía hay motivos para celebrar la bondad de Dios.",
        referencia: "Salmo 100:4-5"
    },

     {
        titulo: "Salmo 118",
        texto: "Aunque hoy sea difícil, recuerda que la misericordia de Dios permanece.",
        referencia: "Salmo 118:5-6"
    },

    {
        titulo: "Salmo 126",
        texto: "Lo que hoy siembras con lágrimas puede convertirse mañana en una cosecha de alegría.",
        referencia: "Salmo 126:5"
    }

];


// ===========================
// DESCUBRIR MENSAJE
// ===========================

messageButton.addEventListener("click", function () {


    // ===========================
    // ELEGIR SALMO ALEATORIO
    // ===========================

    const indiceAleatorio =
        Math.floor(Math.random() * salmos.length);

    const salmoActual =
        salmos[indiceAleatorio];



    // ===========================
    // MOSTRAR SALMO
    // ===========================

    document.querySelector(".salmo-card h2").textContent =
        salmoActual.titulo;


    document.querySelector(".salmo-text").textContent =
        salmoActual.texto;


    document.querySelector(".salmo-reference").textContent =
        salmoActual.referencia;



    // ===========================
    // GOOGLE ANALYTICS
    // ===========================

    if (typeof gtag === "function") {

        gtag("event", "descubrir_mensaje", {

            salmo: salmoActual.titulo

        });

    }



    // ===========================
    // PRIMERA TARJETA DESAPARECE
    // ===========================

    welcomeCard.style.opacity = "0";


    setTimeout(function () {


        welcomeCard.style.display = "none";



        // ===========================
        // SEGUNDA TARJETA APARECE
        // ===========================

        salmoCard.style.display = "flex";

        salmoCard.style.opacity = "0";

        salmoCard.style.transform =
            "translateY(15px)";


        setTimeout(function () {

            salmoCard.style.opacity = "1";

            salmoCard.style.transform =
                "translateY(0)";

        }, 50);



        // ===========================
        // TERCERA TARJETA
        // ===========================

        setTimeout(function () {


            instagramCard.style.display = "flex";

            instagramCard.style.opacity = "0";

            instagramCard.style.transform =
                "translateY(18px)";


            setTimeout(function () {


                instagramCard.style.opacity = "1";

                instagramCard.style.transform =
                    "translateY(0)";


            }, 50);


        }, 900);


    }, 600);

});



// ===========================
// CLIC EN INSTAGRAM
// ===========================

instagramButton.addEventListener("click", function () {


    if (typeof gtag === "function") {


        gtag("event", "instagram_click", {

            salmo: document.querySelector(
                ".salmo-card h2"
            ).textContent

        });


    }

});
