// Operadores logicos

// && -> AND = E
// || -> OR  = OU
// ! -> NOT -> NAO


console.log(true && true); // true

console.log(true && false); //false

console.log(true || false); // true

console.log(false || false); // false

console.log(!true); // false

console.log(true && !false); // true

//Logica para acessar uma conta

const user = "Gabriel";

const password = "teste";

const verificarUser = user === "Gabriel" && password === "teste";

console.log(verificarUser)

// Utilizando logica

const login = 'Gabriel';

const senha = 'test';

if (login !== '' && senha !== '') {
    if (login === 'Gabriel' && senha === 'teste') {
        console.log("Login aprovado")
    }
    else {
        console.log("Usuario ou senha invalido!")
    }
}
else {
    console.log("Preencha todos os campos!")
}