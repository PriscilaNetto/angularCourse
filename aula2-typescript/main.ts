var minhaVar = 'minha var';

function minhaFunc(x, y){
    return x + y;
}
let num = 2;
const PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2; 
});
numeros.map(valor => valor * 2); //arrow function ES 2015

class Matematica {
    soma(x, y){
        return x + y;
    }
}

var n1: any = 'abacaxi';
n1 = 5;