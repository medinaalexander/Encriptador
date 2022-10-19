const textoIngresado = document.querySelector(".section__left-input");
const salidaTexto = document.querySelector(".section__right-output");

function encriptar(stringEncriptado){
    let matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
  
   stringEncriptado = stringEncriptado.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
  
      if (stringEncriptado.includes(matrizCodigo[i][0])) {
       stringEncriptado = stringEncriptado.replaceAll(
          matrizCodigo[i][0],
          matrizCodigo[i][1]
        );
      }
    }
    return stringEncriptado;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textoIngresado.value);
    salidaTexto.value = textoEncriptado;
  
    salidaTexto.style.backgroundImage = "none";
    textoIngresado.value = "";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
  
   stringDesencriptado = stringDesencriptado.toLowerCase();
  
    for (let i = 0; i<matrizCodigo.length; i++) {
  
      if (stringDesencriptado.includes(matrizCodigo[i][1])) {
       stringDesencriptado = stringDesencriptado.replaceAll(
          matrizCodigo[i][1],
          matrizCodigo[i][0]
        );
      }
    }
    return stringDesencriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textoIngresado.value);
    salidaTexto.value = textoDesencriptado;
  
    salidaTexto.style.backgroundImage = "none";
    textoIngresado.value = "";
}

function btnCopiar(){
    salidaTexto.select();
    navigator.clipboard.writeText(salidaTexto.value);
  
    salidaTexto.value = "";
}
