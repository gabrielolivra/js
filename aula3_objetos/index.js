// Criando objeto Pessoa

const pessoa = {
    nome: "Gabriel",
    sobrenome: "Oliveira",
    idade: 25,
    habilitado: true,
    telefone: [
        8888888,
        99999999
    ]
}
//Acessando o objeto 

//console.log(pessoa.nome)

//Acessando a lista dentro do objeto

//console.log(pessoa.telefone[0])


//Criando uma função para criar um objeto


function criarPessoa(nome, sobrenome, idade, habilitado, telefone) {
    return {
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade,
        // habilitado: habilitado,
        // telefone: telefone
        //Quando o nome da coluna é o mesmo que o parametro não é necessario criar o campo

        nome,
        sobrenome,
        idade,
        habilitado,
        telefone
    }

}
// Criando objetos e salvando em variaveis 
const joao = criarPessoa('Joao', 'Silva', 28, true, [888888, 4444444])

const maria = criarPessoa('Maria', 'Oliveira', 20, false, 288864)

//Criando lista de pessoas 

const grupo_pessoas = [
    joao, maria
]
// Criando objeto com metodos

const ze = {
    nome: 'ze',
    sobrenome: 'Silva',
    idade: 28,
    habilitado: true,
    telefone: [999999999],

    falar() {
        console.log(`Olá meu nome é ${this.nome}`)
    },

    verificarHabilitado() {
        if (this.habilitado) {
            console.log(`${this.nome} é habilitado`)
        }
        else {
            console.log(`${this.nome} não é habilitado`)
        }
    },

    possuiNumero() {
        const numeros = this.telefone.length
        if (numeros > 0) {
            console.log(`O ${this.nome} possui ${numeros} numeros de telefone`)
        }
        else {
            console.log(`${this.nome} não possui numeros de telefone`)
        }
    }
}

ze.falar();
ze.verificarHabilitado();
ze.possuiNumero();