// ================ FUNCTION ================

// Uma função é um procedimento de JavaScript um conjunto de instruções que executa uma tarefa ou calcula um valor.

// function soma() {  Essa é a estrutura de uma função 
// } E agora um exemplo:

function mult(x, y) { // x e y são parâmetros que foram passados e receberão algum valor
    return x * y; // Essa função deverá pegar os valores de x e y e multiplicá-los
}

function soma2(x, y = 4) { // O valor do parâmetro também pode ser passado na própria função, como neste exemplo.
    return x + y; 
}

const valorMult = mult(4, 3); // Nessa variável foram declarados os valores dos parâmetros da função
const valorSoma2 = soma2(5);

console.log(valorMult);
console.log(valorSoma2);



// ================ ARROW FUNCTION ================

// As arrow functions permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavar return.
// As arrow functions também possuem uma sintaxe mais curta.

const sumArrow = (a, b) => { // Esse é um exemplo de arrow function, se diferencia pela seta após o parênteses
    return a + b; 
  };
  
  // Mesma coisa que acima
  const sumArrow2 = (a, b) => a + b; // A função acima também pode ser escrita dessa forma, não precisando do comando return
  
  const sumValue = sumArrow2(2, 10);
  
  console.log(sumValue);