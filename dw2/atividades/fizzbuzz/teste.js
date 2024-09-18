import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero

while (true){
    numero = prompt("Digite um número inteiro e positivo: ")

    if (isNaN(numero) || numero.trim() === ""){
        console.log("Você deve digitar um número!")
    }
    else {
        numero = Number(numero)

        if (!Number.isInteger(numero)) {
            console.log("Você deve digitar um número inteiro!")
        }
        else if (numero < 1){
            console.log("Digite um número maior que 0!")
        }
        else {
            break
        }
    }
}

for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}