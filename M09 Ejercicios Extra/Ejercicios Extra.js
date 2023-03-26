/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
  var arregloPadre=[];
for(let clave in objeto){
   arregloPadre.push([clave,objeto[clave]]);
}
return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var arregloDeLetras=string.split("").sort();
   var ordenYCantidad={};
   var b=1
 for(let i=0;i<arregloDeLetras.length;i++){
    let char=arregloDeLetras[i]
  if(arregloDeLetras[i]===arregloDeLetras[i+1]){
      b++;
    }else{
       ordenYCantidad[char]=b
        b=1;
      continue;}
   }
   return ordenYCantidad;
   //   var arregloDeLetras = string.split("").sort();
   //    var ordenYCantidad = {};
    
   //   for (let i = 0; i < arregloDeLetras.length; i++) {
   //     if (ordenYCantidad[arregloDeLetras[i]]) {
   //       ordenYCantidad[arregloDeLetras[i]]++;
   //     } else {
   //       ordenYCantidad[arregloDeLetras[i]] = 1;
   //     }
   //   }
    
   //   return ordenYCantidad;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   arraystring=string.split("");
  var arrayArreglado=[];
   
for(let i =0;i<arraystring.length;i++){
   if(arraystring[i]===arraystring[i].toUpperCase()){
   let b=arraystring[i];
   arrayArreglado.push(b);
   }
}
for(let i =0;i<arraystring.length;i++){
   if(arraystring[i]!=arraystring[i].toUpperCase()){
   arrayArreglado.push(arraystring[i]);
   }
}

arrayArreglado= arrayArreglado.join("");
return arrayArreglado;


}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   arrayFrase=frase.split(" ");
   var arrayDeArrays=[];
   var a=0;
   var arrayEspejo=[];
   for(let i=0;i<arrayFrase.length;i++){
      arrayDeArrays.push(arrayFrase[i].split(""));
   }
   for(let i=0;i<arrayDeArrays.length;i++){
      arrayEspejo[i]=arrayDeArrays[i].reverse();
   }
   for(let i=0;i<arrayEspejo.length;i++){
   arrayEspejo[i]= arrayEspejo[i].join("")
   }
   arrayEspejo=arrayEspejo.join(" ")
   return arrayEspejo;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
  var num=numero.toString();
  var numerocapícua=num.split("").reverse().join("");
  if(num===numerocapícua){
   return "Es capicua";
  }else{
   return "No es capicua";
  }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   arraystring=string.split("");
   for(let i=arraystring.length-1;i>=0;i--) {
      if(arraystring[i]==="c"||arraystring[i]==="a"||arraystring[i]==="b"){
         arraystring.splice(i,1);
      }
   }

   return arraystring.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort( (a,b) => {
      if(a.length<b.length)return -1;
      if(a.length>b.length)return 1;
      return 0
   })
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayComun=[]
   var a=0
   for(let i=0;i<array1.length;i++){
      for(let b=0;b<array2.length;b++){
         if(array1[i]===array2[b]){
            arrayComun.push(array1[i])
         }
      }
   }
   
   return arrayComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
