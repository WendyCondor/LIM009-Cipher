/* Para obtener id e imprimir en pantalla */
const input= document.getElementById("text");
const button= document.getElementById("cifrar");
const text= document.getElementById("text1");

button.addEventListener("click", () => {
  const mensajeCifrado = input.value;
  console.log(mensajeCifrado);
  text.value = mensajeCifrado;

});

const input1= document.getElementById("text");
const button1= document.getElementById("descifrar");
const texto= document.getElementById("text1");

button1.addEventListener("click", () => {
  const mensajeDescifrado = input.value;
  console.log(mensajeDescifrado);
  texto.value = mensajeDescifrado;

});
