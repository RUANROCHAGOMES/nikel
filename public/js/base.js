const nome = "Marcelo Eltz";
let nome2 = "";
let pessoa = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
}

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}


console.log(pessoa);

console.log("Nome");
console.log(pessoa.nome);

console.log("Idade");
console.log(pessoa.idade);

console.log("Trabalho");
console.log(pessoa.trabalho);











//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva")

//alterarNome();



