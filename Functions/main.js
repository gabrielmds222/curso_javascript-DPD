// ================ FUNCTION ================

// Uma função é um procedimento de JavaScript um conjunto de instruções que executa uma tarefa ou calcula um valor.

// function soma() {  Essa é a estrutura de uma função 
// } E agora um exemplo:

function soma(x, y) { // x e y são parâmetros que foram passados e receberão algum valor
    return x * y; // Essa função deverá pegar os valores de x e y e multiplicá-los
}

const valorSoma = soma(3, 4); // Nessa variável foram declarados os valores dos parâmetros da função

console.log(valorSoma);