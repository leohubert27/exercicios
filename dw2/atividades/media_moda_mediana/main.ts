// Função para calcular a média
function calcularMedia(numeros: number[]): number | string {
    if (numeros.length === 0) {
        return 'O array está vazio!';
    }
    
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

// Função para calcular a mediana
function calcularMediana(numeros: number[]): number | string {
    if (numeros.length === 0) {
        return 'O array está vazio!';
    }
    
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    const meio = Math.floor(numerosOrdenados.length / 2);

    if (numerosOrdenados.length % 2 === 0) {
        return (numerosOrdenados[meio - 1] + numerosOrdenados[meio]) / 2;
    } else {
        return numerosOrdenados[meio];
    }
}

// Função para calcular a moda
function calcularModa(numeros: number[]): number[] | string {
    if (numeros.length === 0) {
        return 'O array está vazio!';
    }
    
    const frequencias: { [key: number]: number } = {};
    
    numeros.forEach(num => {
        frequencias[num] = (frequencias[num] || 0) + 1;
    });

    const maxFrequencia = Math.max(...Object.values(frequencias));
    const modas = Object.keys(frequencias).filter(num => frequencias[num] === maxFrequencia).map(Number);

    return modas;
}

// Função principal que executa os cálculos e exibe os resultados
function calcularEstatisticas(numeros: number[]): void {
    const media = calcularMedia(numeros);
    const mediana = calcularMediana(numeros);
    const moda = calcularModa(numeros);

    if (typeof media === 'string') {
        console.log(media);
    } else {
        console.log(`Média: ${media}`);
    }

    if (typeof mediana === 'string') {
        console.log(mediana);
    } else {
        console.log(`Mediana: ${mediana}`);
    }

    if (typeof moda === 'string') {
        console.log(moda);
    } else {
        console.log(`Moda: ${moda.join(', ')}`);
    }
}


const listaNumeros: number[] = [1, 3, 4, 4, 7, 9, 4, 2, 3];
calcularEstatisticas(listaNumeros);
