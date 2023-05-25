window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeack)
function onSpeack(e){
    const chute  = e.results[0][0].transcript
    validaChute(chute)
}

const placar = document.querySelector("#pontos")
var pontos = 0;

function validaChute(alternativa){

    alternativa = alternativa.toUpperCase()
    nomeDaCor = nomeDaCor.toUpperCase()

    if(valorIsNumeric(alternativa)){
        console.log("alternativa não é um o nome de uma cor")
    }else if(alternativa === nomeDaCor){
        if(tempo == 20){
            pontos += 5
        }else if(tempo == 40){
            pontos += 3
        }else{
            pontos += 2
        }
        placar.innerHTML = pontos
    }else{
        console.log("i cant hear you")
    }
}

recognition.addEventListener('end', () => recognition.start())

function valorIsNumeric(chute){
    return Number.isNaN(chute)
}
