window.cipher = {
  //Explicacion del cifrado//
  encode: (text,number) => {
    let palabraCifrada = ''; //variable que almacenará palabra cifrada//
    //Bucle para recorrer cada letra de la palabra u oración a cifrar//
    for(let i =0; i <text.length; i++) {
    const palabraAscii = text.charCodeAt(i);//variable para obtener el código ASCII de cada letra//
    const formulaPalabra = (palabraAscii - 65 + parseInt(number))%26+65;//Formula para obtener el código y para incluir el desplazamiento//
    const cifrado = String.fromCharCode(formulaPalabra);//variable para convertir a la posición del alfabeto//
      palabraCifrada = palabraCifrada + cifrado;
    }
    return palabraCifrada
  },

  //Explicacion del descifrado//
  decode: (text,number) => {
    let palabraDescifrada = ''; //variable que almacenará palabra descifrada//
    for ( let i=0; i<text.length; i++) {
    const palabraAscii2 = text.charCodeAt(i);
    const formulaPalabra2 = (palabraAscii2 + 65 - parseInt(number))%26 + 65;
    const descifrado = String.fromCharCode(formulaPalabra2);
      palabraDescifrada = palabraDescifrada + descifrado;
    }
    return palabraDescifrada
  }
}

/* Acá va tu código */
