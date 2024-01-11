const numeros = [1, 2, 3, 4, 5]
console.log(numeros)
numeros.push(6) // adicionando itens ao final da lista com o metodo .push('recebe um paremetro')
const remove_fim = numeros.pop() // remove o ultimo item da lista
const remove_inicio = numeros.shift();
numeros.unshift(0.5) //adicionando itens ao inicio de uma lista 
console.log(numeros)
console.log(remove_fim)
console.log(remove_inicio)
console.log(numeros)
delete numeros[2];// deletando valor de uma lista
console.log(numeros)

// metodo slice
console.log(numeros.slice(0, 1))