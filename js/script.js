let input = document.getElementById("input");
let output = document.getElementById("output");

let imagem = document.getElementById("desenho");
let padrao = "[a-z]";

let botao_criptografar = document.getElementById("criptografar");
let botao_descriptografar = document.getElementById("descriptografar");
let botao_copiar = document.getElementById("copiar");

function codifica() {
  let texto = input.value;
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  if (botao_criptografar.click) {
    imagem.style.visibility = "hidden";
    botao_copiar.style.visibility = "visible";
  }

  if (input.value.match(padrao)) {
    return (output.value = texto);
  } else {
    alert("Por favor não use acentos nem letras maiúsculas");
  }
}
function descodifica() {
  let texto = input.value;
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");

  if (botao_descriptografar.click) {
    imagem.style.visibility = "hidden";
    botao_copiar.style.visibility = "visible";
  }

  if (input.value.match(padrao)) {
    return (output.value = texto);
  } else {
    alert("Por favor não use acentos nem letras maiúsculas");
  }
}
function copiar() {
  output.select();
  output.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(output.value);
}

botao_criptografar.onclick = codifica;
botao_descriptografar.onclick = descodifica;
botao_copiar.onclick = copiar;
