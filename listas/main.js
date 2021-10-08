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