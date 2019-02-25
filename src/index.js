/* Acá va tu código */
var Cifrar = document.getElementById("text");
var descifrar = document.getElementById("number");

function codificar() {
  var caracteres = [];
  valor = cifrar.value;
  for (var i=0; i <valor.length; i++) {
    caracteres[i] = valor.charAt(i).charCodeAt(0);
    }

}
