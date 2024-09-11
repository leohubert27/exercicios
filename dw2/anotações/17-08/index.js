console.log('Olá mundo')
const a = 10
let b = 20

const total = a + b
console.log(total)

if(total > 30){
    console.log('total > que 30')
} else {
    console.log('total <= 30')
}

const dia = 'segunda'

switch (dia.toLowerCase()) {
    case 'segunda':
    case 'quarta':
        console.log('aberto')
        break;
    default:
        console.log('meio aberto')
        break;
}

let idade = 18
let podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode'
// if(idade >= 18){
//     podeBeber = 'Pode beber'
// } else {
//     podeBeber = 'Não pode'
// }

const maiorIdade = true
const temCarteiraTrab = false
// && And / || Or
const podeAplicarVaga = maiorIdade && temCarteiraTrab

for (let i = 0; i <= 10; i++) {
    console.log(i)
}
// commonjs
//const prompt = require('prompt-sync')()

import PromptSync from "prompt-sync"
const prompt = PromptSync()

let saldo = Number(prompt('Digite o saldo inicial: '))
const saldoDesejado = saldo * 3
const taxaMes = Number(prompt('Digite a taxa: '))
let qtdeMeses = 0

while(saldo < saldoDesejado){
    saldo = saldo + (saldo * taxaMes)
    qtdeMeses++
    console.log(`Mes ${qtdeMeses} - Saldo: ${saldo}`)
}

console.log(`Total de meses ${qtdeMeses}`)