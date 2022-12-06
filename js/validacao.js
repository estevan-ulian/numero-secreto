function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute.replace(/\./g, "")

    if (chute.toLowerCase().replace(/\./g, "") === 'game over' || chute.toLowerCase().replace(/\./g, "") === 'fim de jogo') {
        document.body.innerHTML = `
            <h2>Game Over</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button class="reiniciar" onclick="recarregarPagina()">Reiniciar</button>
        `
        document.body.style.backgroundColor = "#dd3341";
    }

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era <span class="numeroSecreto">${numeroSecreto}</span></h3>
            <button class="reiniciar" onclick="recarregarPagina()">Reiniciar</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div> O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function recarregarPagina() {
    window.location.reload()
}