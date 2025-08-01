// 1. cálculo de desconto progressivo

let valorCompra = 1000;
let valorFinal;

if (valorCompra > 1000) {
    valorFinal = valorCompra * 0.8; // 20% 
} else if (valorCompra >= 500 && valorCompra <= 1000) {
    valorFinal = valorCompra * 0.9; // 10%
} else {
    valorFinal = valorCompra; // sem desconto
}

console.log(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`);

// 2. Sistema de ponto de fidelidade

let categoria = "ouro";
let qtdPontos;


switch (categoria) {
    case "ouro":
        qtdPontos = 20;
        break;
    case "prata":
        qtdPontos = 15;
        break;
    case "bronze":
        qtdPontos = 10;
        break;  
    default:
        qtdPontos = "Categoria inválida";
        break;
}

console.log(`Quantidade de pontos: ${qtdPontos}`);

// 3. sequencia de fibonacci

function fibonacci(n) {
    let fib = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) fib[i] = 0;
        else if (i === 1) fib[i] = 1;
        else fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(10));

// 4. simulador de bateria

let nivelBateria = 100;

while (nivelBateria > 0) {
    console.log(`Nível da bateria: ${nivelBateria}%`);
    nivelBateria -= 10;
}

// 5. função para calcular dias de vida

function calcularDiasDeVida (idadeEmVida) {
    const diasAno = 365;
    return idadeEmVida * diasAno;
}

console.log(`Uma pessoa de 30 anos viveu aproximadamente ${calcularDiasDeVida(30)} dias.`);

// 6. verificador de aprovação escolar

const n1 = 7;
const n2 = 6;
const n3 = 8;     
const n4 = 10;

let frequencia = 80; // porcentagem da frequencia

let media = (n1 + n2 + n3 + n3) / 4;

// só é aprovado se tiver >= 85 de frequencia e(&&) media >= 6

if (frequencia >= 75 && media >= 6) {
    console.log(`Aprovado com média: ${media}`);
} else {
    console.log(`Reprovado com média: ${media}`);
};

// 7. Maior número da lista

let numeros = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log(`O maior número da lista é: ${maiorNumero}`);