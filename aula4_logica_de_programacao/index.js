//Operadores de comparação

// > maior que
// >= maior que ou igual a
// < menor que
// <= menor que ou igual a
// == verifica se o valor é igual a !Não verifica o tipo!
// === verifica se o valor e o tipo é igual
// != verifica se o valor é diferente !não verifica o tipo!
// !== Verifica se o valor é diferente e tipo

const verificar = 3 == '3'; // return true
const verificar2 = 3 === '3';  // return false, pq 3 number é !== de 3 string
console.log(verificar)

console.log(verificar != verificar2) // true é diferente de false? return true

console.log(verificar == verificar2) // true é igual a false? return false
