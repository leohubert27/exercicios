const pessoa1 = {
    nome: "Pessoa1",
    idade: 20,
    hobbies: ["jogar", "assistir tv", "programar"]
}

console.log(pessoa1.nome)
pessoa1.cpf = 123456

pessoa1.hobbies.push("outra atividade")

console.log(pessoa1)

function criarPessoas(nome,idade,hobbies){
    return{
        nome,
        idade,
        hobbies,
    }
}

const pessoa2 = criarPessoas("Nome2",25,["a","b","c"])
console.log(JSON.stringify(pessoa2)) // Transforma em JSON
// const pessoaJson = JSON.parse('{"nome":"Nome2","idade":25, "hobbies":["a","b","c"]}') - JSON.parse caminho inverso
// console.log(pessoaJson)

// Criando uma classe
class Pessoa {
    constructor(nome,idade,hobbies){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
        this.cpf = ''
    }

    meApresentar(){
        console.log(`Olá meu nome é ${this.nome}`)
    }

    anoNascimento(){
        return 2024 - this.idade
    }
}

const pessoa3 = new Pessoa("Pessoa3",70,['a','b'])
pessoa3.meApresentar();
pessoa3.teste = 10
console.log(pessoa3)