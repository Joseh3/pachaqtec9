

// 1.Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.  

const base=3;
const exponente = 2;
let r=1;
let i=0;
while(i<exponente){
 r=r*base
 i++;
}

//2.Crea una función que tome el array números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) 


const base2=8;
const exponente2 =3;
const total=855;
let re=1;
let ii=0;
while(ii<exponente2){
re=re*base2
ii++;
}


//3.Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33” 
var uno,dos,tres;
uno ="jose huamani";
dos="33 años";

var union=uno+dos;

 
//4.Crear una función que reciba n cantidad de argumentos y los sume (utilizar parametros rest) 

function sum(...theArgs) {
 let total = 0;
 for (const arg of theArgs) {
   total += arg;
 }
 return total;
}

// 5.Crear una función que reciba un array de valores y filtre los valores que no son string. 

const numeros = [1,2,3,4,5];
let vegetales =['Repollo', 'Nabo', 'Rábano', 'Zanahoria']



// 6.Cree una función que tome una array de números y devuelva los números mínimos y máximos, en ese orden. minMax([1, 2, 3, 4, 5]) ➞ [1, 5] 

let valor=[3,6,8,11,6,2]
const minMax = (arr) => {
 arr.sort((a,b) => a-b)
 return [arr[0] , arr[arr.length -1]]

}

minMax([5,4,3,2,1])

//7. Escriba una función que tome un array de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono. 

let array =([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
//

//let

console.log("El resultado es" +" "+ r);   
console.log("El resultado es" +" "+ total);  
console.log("Mi nombre es"+uno + "y mi edad es"+ " "+ dos);
console.log(sum(1, 2, 3));

// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

console.log(sum(1, 2, 3, 4,5));
// Expected output: 15
console.log("resultado"+numeros);
console.log(`el valor minimo del arreglo de numeros es ${Math.min(...valor)}`);
console.log(`el valor minimo del arreglo de numeros es ${Math.max(...valor)}`);
console.log (array);
