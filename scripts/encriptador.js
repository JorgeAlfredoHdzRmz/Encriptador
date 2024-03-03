function ocultarMostrarBoton() {
    // Obtén el botón por su ID
    var boton = document.getElementById("copy");

    // Obtén el estilo computado del botón
    var estiloBoton = window.getComputedStyle(boton);

    // Verifica el estado actual de display
    if (estiloBoton.display === "none" || estiloBoton.display === "") {
        // Si está oculto o no tiene un estilo definido, muéstralo
        boton.style.display = "block";
    }
}

function encriptar(){
    ocultarMostrarBoton();
    var texto = document.getElementById("texto").value;
    var reemplazo = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat',
    };

    for (var letra in reemplazo) {
        if (reemplazo.hasOwnProperty(letra)) {
            texto = texto.replaceAll(letra, reemplazo[letra]);
        }
    };

    document.getElementById("texto").value = texto;
    document.getElementById("textoFinal").innerHTML = texto;
}

function desencriptar(){
    ocultarMostrarBoton();
    var texto = document.getElementById("texto").value;
    var reemplazo = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u',
    };

    for (var letra in reemplazo) {
        if (reemplazo.hasOwnProperty(letra)) {
            texto = texto.replaceAll(letra, reemplazo[letra]);
        }
    };

    document.getElementById("texto").value = texto;
    document.getElementById("textoFinal").innerHTML = texto;   
}

function copiar() {
    var textoFinal = document.querySelector("#textoFinal").innerText;
    var textarea = document.createElement("textarea");
    textarea.value = textoFinal;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    // let copyText = document.querySelector("#texto");
    // copyText.select();
    // document.execCommand("copy");
  }
document.querySelector("#copy").addEventListener("click", copy);