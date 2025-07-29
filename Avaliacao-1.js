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
