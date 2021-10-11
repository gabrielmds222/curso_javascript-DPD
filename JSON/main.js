// JSON (JavaScript Object Notation), é um modelo para armazenamento e transmissão de informações no formato texto.

// ======================= Variável para Json =======================

// Para demonstrar como converter uma variável para o formato Json, utilizaremos de exemplo esse objeto:

const tasks = [
    {
      id: 1,
      description: "Estudar programação",
      isCompleted: false,
    },
    {
      id: 2,
      description: "Ler",
      isCompleted: true,
    },
    {
      id: 3,
      description: "Treinar",
      isCompleted: true,
    },
  ];

//  Agora para passar o objeto para o formato Json, utiliza-se a sequinte estrutura:

const jsonTasks = JSON.stringify(tasks); // O método stringify, converte valores javascript para uma string Json

console.log(jsonTasks);



// ======================= Json para Variável =======================

//  Para fazer o caminho inverso e transformar um arquivo Json em uma lista por exemplo, utiliza-se uma estrutura semelhante

const listTasks = JSON.parse(jsonTasks); // O método parse, analisa uma string Json e a converte em um objeto ou lista.

console.log(listTasks);