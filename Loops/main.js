// O loop de programação é como fazer a mesma coisa repetidas vezes.


// ==================== FOR ====================

// A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula,
//  seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

for (cont = 0; cont < 10; cont ++) { // A primeira expressão do for declara uma variável com um valor inicial que nesse caso é 0
    console.log(cont);               // A segunda expressão indica o fim do íntervalo, nesse caso o intervalo é de 0 à 9
}                                    // A terceira expressão indica que a variável do for vai subir de 1 em 1

// O for acima vai imprimir os valores de 0 à 9


// já no caso abaixo, o for vai imprimir os números de 10 a 1 em ordem decescente, por conta do valor da terceira expressão. 

for (cont = 10; cont > 0; cont --) { 
    console.log(cont);               
} 

