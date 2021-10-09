// ================== LISTAS ==================

// Uma lista é sempre declarada entre colchetes e permite armazenar e ler vários valores em sequência

const nomes = ["Gabriel", "Fernanda", "Jorge", "Paulo"] // Essa será a lista padrão para os exemplos e, é uma lista apenas de strings

// É possível criar listas com outros tipos de dados como números e booleanos

const listnum = [1, 3, 4, 10]
const bool = [true, false]

// E agora veremos como manipular listas de alguns modos



// ================== ACESSAR ELEMENTOS ==================

// Para acessar um elemento dentro de uma lista, é preciso lembrar que o primeiro elemento de uma lista corresponde ao valor 0

const fernanda = nomes[1] // Ou seja, nesse caso, a variável vai acessar o elemento "Fernanda"

console.log(fernanda)



// ================== ADICIONAR ELEMENTOS ==================

                // ======== PUSH ========

// O .push adiciona um elemento no fim da lista

nomes.push("Davi")

// Nesse caso a lista nomes vai ficar:

console.log(nomes)

// const nomes = ["Gabriel", "Fernanda", "Jorge", "Paulo", "Davi"]


                // ======== UNSHIFT ========

// O .unshift adiciona um elemento no inicio da lista

nomes.unshift("Davi")

// Nesse caso a lista nomes vai ficar:

console.log(nomes)

// const nomes = ["Davi", "Gabriel", "Fernanda", "Jorge", "Paulo"]



// ================== REMOVER ELEMENTOS ==================
                
                // ======== POP ========

// O .pop, ao contrário do push remove o último elemento da lista

nomes.pop()

// Nesse caso a lista nomes vai ficar:

console.log(nomes)

// const nomes = ["Gabriel", "Fernanda", "Jorge"] 


                // ======== SHIFT ========

// já o  .shift remove o primeiro elemento da lista

nomes.shift()

// Nesse caso a lista nomes vai ficar:

console.log(nomes)

// const nomes = ["Fernanda", "Jorge", "Paulo"]



// ================== ALTERAR ELEMENTOS ==================

// É possível alterar um elemento de uma lista da seguinte forma

nomes[2] = "Pedro" // Na lista original, o elemento 2 corresponde ao nome "Jorge", mas aqui o valor será mudado para "Pedro"

// Dando um console.log, a nova lista vai ficar:
// ["Gabriel", "Fernanda", "Pedro", "Paulo"]

console.log(nomes)


// ================== VERIFICAR ÍNDICES ==================

                // ======== INDEXOF ========

// Utilizando o método .indexOf, é possível verificar o índice de um elemento de uma lista

console.log(nomes.indexOf('Fernanda')) // O resultado que aparecerá no navegador é o número 1, que corresponde ao índice de "Fernanda" na lista


                // ======== SORT ========

// O método .sort tem como função, ordenar em ordem alfabética, os elementos de uma lista

const sortednames = nomes.sort();

// Com isso, a lista irá aparecer da seguinte forma:

console.log(sortednames)

// ['Fernanda', 'Gabriel', 'Paulo', 'Pedro']


                // ======== ARRAY.isARRAY ========

// Para verificar se uma variável é uma lista ou não, podemos usar o método Array.isArray

const namesIsArray = Array.isArray(nomes) // Se a variável colocada dentro do parentêses corresponder a uma lista, então o resultado será true

console.log(namesIsArray)


                // ============== length ============== OBS: ESSE MÉTODO JÁ FOI MOSTRADO NO ARQUIVO SOBRE STRINGS


// O comando .length mostra a quantidade de caracteres de uma string incluido os espaços

console.log(nomes.length) // O comando console.log, mostra o resultado do código no navegador



// ================== MÉTODOS AVANÇADOS ==================

                // ======== .MAP ======== 

// O comando .map pega uma lista como parâmetro e executa uma ação em cada elemento da lista

const numbers = [1, 2, 3, 4, 5] // Essa será a lista de exemplo e, o objetivo é multiplicar todos os elementos por 2

const multipliedNumbers = numbers.map(function(num) { // Aqui abrimos uma função dentro do map e vamos passar o que a função deve fazer
    return num * 2; // O num vai representar cada elemento individualmente da lista que vai ser mudado
});

console.log(multipliedNumbers);

// A nova lista ficará [2, 4, 6, 8, 10]



                // ======== .FILTER ========

// O comando .filter pega uma lista como parâmetro e separa somente os elementos da lista que estiverem de acordo com as condições da função

const idades = [20, 5, 10, 14, 19, 25]  // Essa será a lista de exemplo e, o que queremos é pegar apenas as idades ímpares

const imparAges = idades.filter(function(age) {
    return age % 2 !== 0; // O age representa os elementos que serão verificados um por um e, separados apenas os ímpares
});

console.log(imparAges)

// A nova lista ficará [5, 19, 25]



                // ======== .REDUCE ========

