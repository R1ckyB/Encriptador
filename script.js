var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var contenedor2 = document.querySelector(".a1");
var contenedor = document.querySelector(".parrafo");
var resultado = document.querySelector(".resultado1");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    contenedor2.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var MensajeFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            MensajeFinal = MensajeFinal + "ai"
        }
        else if(texto[i] == "e"){
            MensajeFinal = MensajeFinal + "enter"
        }
        else if(texto[i] == "i"){
            MensajeFinal = MensajeFinal + "imes"
        }
        else if(texto[i] == "o"){
            MensajeFinal = MensajeFinal + "ober"
        }
        else if(texto[i] == "u"){
            MensajeFinal = MensajeFinal + "ufat"
        }
        else{
            MensajeFinal = MensajeFinal + texto[i]
        }
    }
    return MensajeFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var MensajeFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            MensajeFinal = MensajeFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            MensajeFinal = MensajeFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            MensajeFinal = MensajeFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            MensajeFinal = MensajeFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            MensajeFinal = MensajeFinal + "u"
            i = i+3;
        }
        else{
            MensajeFinal = MensajeFinal + texto[i];
        }
        
    }

    return MensajeFinal;

}

const btnCopiar = document.querySelector(".copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});