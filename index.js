const textArea = document.querySelector(".ingreso-de-texto");
const mensaje = document.querySelector(".mensaje");
let textos = document.querySelector(".textos");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea = "";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada
    
}

function btnDesncriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea = "";

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll( matrizCodigo[i][1],matrizCodigo[i][0])
        }

    }
    return stringDesencriptada
}

function copiarResultado(){
    document.getElementById("bnCopiar").addEventListener("click", () => {
        let textarea = document.getElementById("resultado");
        if (textarea.value) {
          textarea.select();
          navigator.clipboard.writeText(textarea.value);
          alert("Texto copiado a portapapeles");
        } else {
          alert("No hay texto para copiar");
        }
      });
}
