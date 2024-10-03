"use strict";
class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    calcularTotal() {
        return this.produtos.reduce((total, produto) => {
            return total + produto.preco;
        }, 0);
    }
}
const produto1 = { nome: 'Teclado', preco: 150, quantidadeEmEstoque: 10 };
const produto2 = { nome: 'Mouse', preco: 90, quantidadeEmEstoque: 35 };
const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
console.log('O total no carrinho é R$ ', carrinho.calcularTotal());
