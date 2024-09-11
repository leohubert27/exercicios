import PromptSync from "prompt-sync"
const prompt = PromptSync ()

let serie = Number(prompt("Digite a série de números que deseja ver: "))
let n1 = 0, n2 = 1, proxNum

console.log("Sequência de Fibonacci: ")

for (let i = 1; i <= serie; i++){
    console.log(i, "º série: ",n1)
    proxNum = n1 + n2
    n1 = n2
    n2 = proxNum
}