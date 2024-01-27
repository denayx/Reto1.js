let listaGenerioca = [];
let lenguajesdeProgramacion = ['JavaScript', 'C', 'c++', 'Kotlin', 'Python'];
lenguajesdeProgramacion.push('java','Ruby', 'Goland');
let listadenumero = [1, 2, 3, 4, 5, 6];
let listadenumero2 = [2, 4, 5, 67, 9, 0];
let listaNumerofinal= [];
function Mostrarele(){
console.log(lenguajesdeProgramacion);
}

function ordenInverso(){
console.log(lenguajesdeProgramacion.reverse());
//let contador = lenguajesdeProgramacion.length-1;
    //for (contador; (contador) >= 0; contador-- ){  
    //    console.log(lenguajesdeProgramacion[contador]);
   // }
}
function PromedioEle(){
   let contador = listadenumero.length-1;
   let promedio =0;
   for (contador; contador >=0;contador --){
    promedio = promedio +listadenumero[contador];
   }
   console.log('El promedio es: '+promedio/listadenumero.length);
}

function NumeroMasyM(){
let numeroMax = Math.max.apply(null, listadenumero);
let numeroMin = Math.min.apply(null, listadenumero);
console.log('Numero maximo es: '+numeroMax+' Numero minimo es: '+ numeroMin);
}
function suma(){
let suma = 0; 
// suma = listadenumero.reduce((acumulador, valorActual)=>acumulador + valorActual);
for(let contador of listadenumero){
    suma += contador;
}
console.log("suma de los elementos: "+ suma);
}

function Posicion(numero){
    for( let cont=0; listadenumero.length-1 >= cont; cont++){
        if(listadenumero[cont]== numero){
            console.log('la posicion del numero es: '+cont);
            break;
        }
        else{
            console.log('-1');
            break;
        }
    }
}

function nuevaLista(){
    if(listadenumero.length == listadenumero2.length){
    let listaNumerofinal = [listadenumero.length];
    for ( let cont =0; listadenumero.length-1 >= cont; cont++){
        listaNumerofinal[cont]= listadenumero[cont]+ listadenumero2[cont];  
    }
    console.log("la lista es: "+ listaNumerofinal);
    }
    else{
        console.log("ingrese una lista del mismo tamaño");
    }
}
function cuadraDo(){
    let listadenuemero3=[];
    for ( let cont =0; listadenumero.length-1 >= cont; cont++){
        listadenuemero3[cont]= listadenumero[cont]* listadenumero[cont];  
    }
    console.log("lista al cyadrado es:"+ listadenuemero3);
}
cuadraDo();
nuevaLista();
Posicion(1);
suma();
NumeroMasyM();
PromedioEle();
Mostrarele();
ordenInverso();
