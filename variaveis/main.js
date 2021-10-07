// Nesse arquivo será feito o estudo da diferença entre as formas
// de se declarar variáveis no javascript


// ===============================
// ============= var =============
// ===============================


// Essa é a primeira forma de se declarar uma variável, utilizando var
var msg = 'olá mundo'

alert(msg) // O alert mostra um alerta na tela, porém trava a aplicação

// Porém é a menos utilizada pois pode ser alterada mesmo de fora, como neste caso

if (1 + 1 == 2) {
    var message = 'true'
}

alert (message)


// ===============================
// ============ const ============
// ===============================

// A segunda forma de declarar uma variável é utilizando const e é mais confiável do que usar var

const texto = 'ola pessoal'

// Porém seu valor não pode ser modificado

alert (texto)



// ===============================
// ============= let =============
// ===============================

// A terceira forma é usando let, que assim como o const é mais confiável do que usar var
// porém ela apresenta o bônus de poder ter seu valor modificado como no exemplo:

let txt = 'olá mundo' //Aqui o valor da variável é o 'olá mundo'

txt = 'mudou o texto' //Já aqui o valor mudou

alert(txt)