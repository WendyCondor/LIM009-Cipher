window.cipher = {
  encode: (text,number) => {
    let palabraCifrada = '';
    for( i =0; i <text.length; i++) {
      if(text.chartCodeAt(i)== 32){// buscar que significa los 3 iguales, buscar else y
        //sino funciona crear un rango en el if, si es >65 y <90.
        palabraCifrada='';
      }
    const palabraAscii = text.charCodeAt(i);
    const formulaPalabra = (palabraAscii - 65 + parseInt(number))%26+65;
    const cifrado = String.fromCharCode(formulaPalabra);
      palabraCifrada = palabraCifrada + cifrado;
    }
    return palabraCifrada
  },
  decode: (text,number) => {
    let palabraDescifrada = '';
    for ( i=0; i<text.length; i++) {
    const palabraAscii2 = text.charCodeAt(i);
    const formulaPalabra2 = (palabraAscii2 + 65 - parseInt(number))%26 + 65;
    const descifrado = String.fromCharCode(formulaPalabra2);
      palabraDescifrada = palabraDescifrada + descifrado;
    }
    return palabraDescifrada
  }
}

/* Acá va tu código */
