/* Acá va tu código */
/* var descifrar = document.getElementById("number");

function codificar() {
  var caracteres = [];
  valor = cifrar.value;
  for (var i=0; i <valor.length; i++) {
    caracteres[i] = valor.charAt(i).charCodeAt(0);
    }

let text = */
const input= document.getElementById("text");
const button= document.getElementById("cifrar");
const text= document.getElementById("text1");

button.addEventListener("click", () => {
  const mensajeCifrado = input.value;
  console.log(mensajeCifrado);
  text.value = mensajeCifrado;

});
