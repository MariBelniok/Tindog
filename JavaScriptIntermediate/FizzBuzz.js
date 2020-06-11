var output = [];
var c = 1
function fizzBuzz(){
    while(c <= 100){
    if(c % 3 == 0 && c % 5 == 0){
        output.push('FizzBuzz')
    }
    else if(c % 3 == 0){
        output.push('Fizz')
    }
    else if(c % 5 == 0){
        output.push('Buzz')
    }
    else{
        output.push(c)
    }
    c++;
    
}
console.log(output)
}

fizzBuzz()