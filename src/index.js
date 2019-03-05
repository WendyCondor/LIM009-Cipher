/* Para obtener id e imprimir en pantalla */
const input= document.getElementById("text");
const button= document.getElementById("cifrar");
const offset= document.getElementById("number");
const text= document.getElementById("text1");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const mensajeCifrado = input.value.toUpperCase(text);
  const desplazamiento = offset.value;
  text.value = cipher.encode(mensajeCifrado,desplazamiento);
});

//const input1= document.getElementById("text");
const button1= document.getElementById("descifrar");
const texto= document.getElementById("text1");

button1.addEventListener("click", (event) => {
  event.preventDefault();
  const mensajeDescifrado = input.value.toUpperCase(text);
  const desplazamiento = offset.value;
  texto.value = cipher.decode (mensajeDescifrado,desplazamiento);

});

const buttonLimpiar= document.getElementById("refrescar");
buttonLimpiar.addEventListener("click", () => {
  document.getElementById("form").reset();
});
