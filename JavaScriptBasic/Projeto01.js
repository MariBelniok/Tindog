/* SITE INFANTIL PARA CRIANÇAS APREDEREM MATEMÁTICA BÁSICA.
    PRIMEIRA APLICAÇÃO - SOMA E SUBTRAÇÃO ENTRE NÚMEROS INTEIROS. */

// Receber o primeiro e segundo numero.

function soma(num1, num2){
    var som = num1 + num2;
    return (som);
}
function subtr(num1, num2){
    if (num1 >= num2){
        var subt = num1 - num2;
    }else{
        console.log('Favor informar o primeiro número maior que o segundo.')
    }
    return subt;
}
function mult(num1, num2){
    var multi = num1 * num2;
    return multi;
}
function div(num1, num2){
    var divi = num1 / num2;
    return divi;
}
function elev(num1, num2){
    var ele = Math.pow(num1, num2);
    return ele;
}
function raiz(num1, num2){
    var rai = Math.sqrt(num1, num2)
    return rai;
}
console.log(raiz(16, 4))