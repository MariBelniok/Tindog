        // *** Entendendo os três tipos de funções ***

//Passando o valor entregue ao robo para comprar o leite e retornando o valor do troco.
function getMilk(money, costPerBottles){
    //na linha abaixo retorna a função calcBottles
    console.log(`You can buy ${calcBottles(money, costPerBottles)} bottles of milk`)
    // return referente ao troco
    console.log(`You'll recieve U$${calcChange(money, costPerBottles)} of change`)
}
//função para calcular quantidade de caixas de leites que da para comprar com o valor entregue ao robo
function calcBottles(startingMoney, costPerBottles){
    var numberOfBottles = Math.floor(startingMoney / costPerBottles)
    return numberOfBottles
}
//função para calcular o troco
function calcChange(startingAmount, costPerBottle){
    var change = Math.floor(startingAmount % costPerBottle) // A sobra da divisão será o troco
    return change 
}

getMilk(4, 1.5)

