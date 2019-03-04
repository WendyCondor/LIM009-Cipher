/* Para obtener id e imprimir en pantalla */
const input= document.getElementById("text");
const button= document.getElementById("cifrar");
const offset= document.getElementById("number");
const text= document.getElementById("text1");

button.addEventListener("click", () => {
  const mensajeCifrado = input.value.toUpperCase(text);
  const desplazamiento = offset.value;
  text.value = cipher.encode(mensajeCifrado,desplazamiento);
});

//const input1= document.getElementById("text");
const button1= document.getElementById("descifrar");
const texto= document.getElementById("text1");

button1.addEventListener("click", () => {
  const mensajeDescifrado = input.value.toUpperCase(text);
  const desplazamiento = offset.value;
  texto.value = cipher.decode (mensajeDescifrado,desplazamiento);

});
