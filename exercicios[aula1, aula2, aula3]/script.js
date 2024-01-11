// function meuEscopo() {

//     const form = document.querySelector(".form");
//     // form.onsubmit = function (evento) {
//     //     evento.preventDefault();
//     //     alert('test')
//     // }

//     form.addEventListener('submit', function (evento) {
//         evento.preventDefault();
//         console.log("testando")
//     });
// }
// meuEscopo()

function adicionarPessoa() {
    const pessoas = [];
    const form = document.querySelector(".form");

    function obterDados(evento) {
        evento.preventDefault();

        function criarPessoa(nome, sobrenome, peso, altura) {
            return {
                nome,
                sobrenome,
                peso,
                altura
            };
        }

        const nome = form.querySelector(".nome").value;
        const sobrenome = form.querySelector(".sobrenome").value;
        const peso = form.querySelector(".peso").value;
        const altura = form.querySelector(".altura").value;

        const pessoaAdicionada = criarPessoa(nome, sobrenome, peso, altura);
        pessoas.push(pessoaAdicionada);
        console.log(pessoas);
        const resultado = document.querySelector(".resultados");
        //forma 1 de exibir os resultados
        resultado.innerHTML += `<p>Nome: ${nome} Sobrenome: ${sobrenome}, Peso: ${peso}, Altura: ${altura}</p>`;

        //forma 2 de exibir os resultados
        //const paragrafo = document.createElement('p');
        // paragrafo.textContent = `Nome: ${nome} Sobrenome: ${sobrenome}, Peso: ${peso}, Altura: ${altura}`;
        // resultado.appendChild(paragrafo);



    }

    form.addEventListener('submit', obterDados);
}

adicionarPessoa();