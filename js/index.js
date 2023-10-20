// Variable para indicar si el reconocimiento está activado
let recognitionActiveTitle = false;
let recognitionActiveImportant = false;
let recognitionTitle; // Declarar la variable fuera del bloque condicional
let recognitionImportant; // Declarar la variable fuera del bloque condicional

// Función para verificar si el navegador es compatible
const elNavegadorEsCompatible = () => {
    if (navigator.userAgent.indexOf("Chrome") !== -1 ||  
        navigator.userAgent.indexOf("Edge") !== -1 ||  
        navigator.userAgent.indexOf("Safari") !== -1) {
        return true;
    }
    alert('El Navegador no es compatible con el Reconocimiento de voz');
    return false;
};

 // Función para iniciar o detener el reconocimiento al hacer clic en el botón
 const toggleRecognitionTitle = () => {
     if (recognitionActiveTitle) {
         recognitionTitle.stop();
         document.getElementById("voice-title").innerText = "Dictado desactivado";
     } else {
         recognitionTitle.start();
         document.getElementById("voice-title").innerText = "Dictado activado";
     }
     recognitionActiveTitle = !recognitionActiveTitle;
 };

 const toggleRecognitionImportant = () => {
     if (recognitionActiveImportant) {
         recognitionImportant.stop();
         document.getElementById("voice-important").innerText = "Dictado desactivado";
     } else {
         recognitionImportant.start();
         document.getElementById("voice-important").innerText = "Dictado activado";
     }
     recognitionActiveImportant = !recognitionActiveImportant;
 };

 document.addEventListener("DOMContentLoaded", function() {

     // Si el navegador es compatible, configurar el reconocimiento de voz para el título
     if (elNavegadorEsCompatible()) {
        recognitionTitle = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
                                 window.mozSpeechRecognition || window.msSpeechRecognition)();
         recognitionTitle.lang = "es-US";

         recognitionTitle.onend = (event) => { 
             if (recognitionActiveTitle) {
                 recognitionTitle.start(); 
             }
         };

         recognitionTitle.onresult = (resultado) => { manejarResultadoTitle(resultado); }; 

         document.getElementById("voice-title").addEventListener("click", toggleRecognitionTitle);
     }

     // Si el navegador es compatible, configurar el reconocimiento de voz para el texto importante
     if (elNavegadorEsCompatible()) {
        recognitionImportant = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
                                     window.mozSpeechRecognition || window.msSpeechRecognition)();
         recognitionImportant.lang = "es-US";

         recognitionImportant.onend = (event) => { 
             if (recognitionActiveImportant) {
                 recognitionImportant.start(); 
             }
         };

         recognitionImportant.onresult = resultado => { manejarResultadoImportant(resultado); }; 

         document.getElementById("voice-important").addEventListener("click", toggleRecognitionImportant);
     }
 });

 // Función que maneja el resultado del reconocimiento de voz para el título
 const manejarResultadoTitle = resultado => {
     document.getElementById("titulo").value = resultado.results[0][0].transcript;
 };

 // Función que maneja el resultado del reconocimiento de voz para el texto importante
 const manejarResultadoImportant = resultado => {
     document.getElementById("important").value = resultado.results[0][0].transcript;
 };


let title = document.getElementById ('titulo')
console.log(title)
let tituloLength = document.getElementById ('titulo-length')
title.addEventListener ('input', function (event) {
let inputLenght = title.value.length
tituloLength.innerText = `${inputLenght}/70`
}
)

let introduction = document.getElementById ('important')
console.log(introduction)
let importantLength = document.getElementById ('important-length')
introduction.addEventListener ('input', function (event) {
let inputLenght = introduction.value.length
importantLength.innerText = `${inputLenght}/5000`
}
)

