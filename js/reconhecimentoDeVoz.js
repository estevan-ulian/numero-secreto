const elementoChute = document.getElementById('chute')

SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-BR'
recognition.start()

recognition.addEventListener('result', onSpeak)

recognition.addEventListener('end', () => recognition.start())

function onSpeak(evento) {
    let chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}