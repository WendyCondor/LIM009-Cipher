#CodyJuegos

Alguna ves te has preguntado como cifrar y descifrar palabras, CodyJuegos es una pagina que te permite aprender a jugar cifrando o descifrando palabras u oraciones a traves de una cantidad de desplazamiento (offset). Se ha tomado como referencia el método de cifrado César que usaba el emperador Julio César para enviar mensajes secretos a sus generales que estaban en campo de batalla.

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.


![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C



## Definición del producto

1.- ¿Quiénes son los principales usuarios del producto?
   - Los principales usuarios son personas que tengan el interes de aprender a cifrar y descifrar

2.- ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

  - El principal objetivo es cifrar y descifrar palabras u oraciones y asi      crean  el interes por conocer mas sobre el cifrado César

3.- ¿Cómo crees que el producto que estas creando esta resolviendo sus problemas?

  - La creación de este producto permitira al usuario cifrar y descifrar palabras u oraciones asi aprendera sobre el cifrado César y les generará la curiosodad por investigar sobre el tema.



## PROCESO - DESICIONES DE DISEÑO

#Realización de USER STORIES

  1.- Como usuario quiero tener una opción de elegir si quiero cifrar o descifrar una palabra.

  2.- Como usua quiero tener un cuadro dond epuedo elegir que cantidad deseo desplazar una letra para poder cifrarla.

  3.- Como usuario quiero poder cifrar y descifrar la misma palabra.

## Checklist

Esta sección está  para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
