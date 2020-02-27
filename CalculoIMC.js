/Cálculo de IMC
//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
//Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa.

const nome = 'Walter'
const peso = 103
const altura = 1.80

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso`)
} else {
    console.log(`${nome}, você não está acima do peso`)
}