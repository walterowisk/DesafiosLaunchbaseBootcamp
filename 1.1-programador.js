// Vetores e objetos.
// Programa com um objeto para armazenar dados de um programador 
// e tecnologias que trabalha.
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza

const programador = {
    nome: "Walter",
    idade: 32,
    tecnologias: [
        {nome: "JavaScript", especialidade: "Web/Mobile"},
        {nome: "C++", especialidade: "Desktop"},
        {nome: "Python", especialidade: "Data Science"},
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia 
${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
