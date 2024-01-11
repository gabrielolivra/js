// funcoes

// funcao sem parametro
function saudacao() {
    console.log("Bom dia")
}

saudacao();

// funcao com parametro

function mensagem(pessoa) {
    console.log("Olá", pessoa) // concatenando variavel ao texto
    console.log(`Olá ${pessoa}`) // interpolando variavel e texto
}

mensagem("Gabriel")


// funcao com parametro e retorno 
function soma(a, b) {
    const resultado = a + b
    console.log(`O valor da soma entre ${a} e ${b} é = ${resultado}`)
    if (resultado % 2 == 0) {

        return `${resultado} é um numero par`
    }
    else {
        return `${resultado} é um numero impar`
    }
}

const resultado = soma(5, 10)

console.log(resultado)

// criando função com variavel

const numeroElevado = function (numero, elevado) {
    return numero ** elevado
};

console.log(numeroElevado(5, 2))

// criando função com arrow function

const raiz = (n) => {
    const result = n ** 0.5
    return result
}


console.log(raiz(9))