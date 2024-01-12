// if, elseif, else

// function com if, else if e else
function saudacao(hora) {
    if (hora >= 0 && hora <= 12) {
        return "Bom dia"
    }
    else if (hora > 12 && hora <= 17) {
        return "Boa tarde"
    }
    else if (hora > 17 && hora <= 24) {
        return "Boa noite"
    }
    else {
        return "Valor fora do escopo"
    }
}
console.log(saudacao(25))

