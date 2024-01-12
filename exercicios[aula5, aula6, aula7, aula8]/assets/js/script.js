function calcularImc() {
    const form = document.querySelector(".form");
    function obterDados(evento) {
        evento.preventDefault();

        function calcular(peso, altura) {
            const resultadoCalc = peso / (altura * 2)
            return resultadoCalc;
        }

        const peso = form.querySelector(".peso").value;
        const altura = form.querySelector(".altura").value;
        const calculo = calcular(peso, altura).toPrecision(2);

        const resultado = document.querySelector(".resultado")
        console.log(calculo)
        console.log(typeof (parseFloat(peso)))
        if ((peso === '' || altura === '') || (typeof (parseFloat(peso)) != 'number' && typeof (parseFloat(altura)) != 'number')) {
            resultado.style.background = 'red'
            resultado.style.padding = '10px'
            resultado.innerHTML = `<p>Dados invalidos</p>`
        }
        else {
            if (calculo < 18.5) {
                resultado.style.background = 'blue'
                resultado.style.padding = '10px'
                resultado.innerHTML = `<p>Imc: ${calculo} - Abaixo do peso</p>`
            }
            else if (calculo >= 18.5 && calculo <= 24.9) {
                resultado.style.background = 'green'
                resultado.style.padding = '10px'
                resultado.innerHTML = `<p>Imc: ${calculo} - Peso normal</p>`
            }
            else if (calculo >= 25 && calculo <= 29.9) {
                resultado.style.background = 'orange'
                resultado.style.padding = '10px'
                resultado.innerHTML = `<p>Imc: ${calculo} - Sobrepeso</p>`
            }
            else if (calculo >= 30 && calculo <= 34.9) {
                resultado.style.background = 'orange'
                resultado.style.padding = '10px'
                resultado.innerHTML = `<p>Imc: ${calculo} - Obesidade grau 1</p>`
            }
            else if (calculo >= 35 && calculo <= 39.9) {
                resultado.style.background = 'orange'
                resultado.style.padding = '10px'
                resultado.innerHTML = `<p>Imc: ${calculo} - Obesidade grau 2</p>`
            }
            else if (calculo > 40) {
                resultado.style.background = 'red'
                resultado.style.padding = '10px'
                resultado.innerHTML = `<p>Imc: ${calculo} - Obesidade grau 3</p>`
            }
            else {
                resultado.style.background = 'red'
                resultado.style.padding = '10px'
                resultado.innerHTML = `<p>Fora de escopo</p>`
            }


        }

    }
    form.addEventListener('submit', obterDados);

}



calcularImc()