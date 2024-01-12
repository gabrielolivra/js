//if else if e else

const numero = (num) => {
    if (num <= 0) {
        return `o numero ${num} é menor ou igual a zero`
    }
    else {
        return `o numero ${num} é maior que zero`
    }
}

console.log(numero(-4));

const intervaloNumero = (num) => {
    if (num >= 0 && num <= 5) {
        return `o numero ${num} está entre 0 e 5`
    }
    else {
        return `o numero ${num} NÃO está entre 0 e 5`
    }
}

console.log(intervaloNumero(7))