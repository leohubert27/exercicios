interface IProduto {
    nome: string
    preco: number
    quantidadeEmEstoque: number
}

class CarrinhoDeCompras {
    produtos: IProduto[]

    constructor() {
        this.produtos = []
    }

    adicionarProduto (produto:IProduto): void {
        this.produtos.push(produto)
    }

    calcularTotal(): number {
        return this.produtos.reduce((total, produto) => {
            return total + produto.preco
        }, 0)
    }
}

const produto1: IProduto = {nome: 'Teclado', preco: 150, quantidadeEmEstoque: 10}
const produto2: IProduto = {nome: 'Mouse', preco: 90, quantidadeEmEstoque: 35}
const carrinho = new CarrinhoDeCompras()

carrinho.adicionarProduto(produto1)
carrinho.adicionarProduto(produto2)

console.log('O total no carrinho é R$ ',carrinho.calcularTotal())