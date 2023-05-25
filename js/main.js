const timer = document.querySelector("#timer")
const itens = document.querySelectorAll(".radioOption")
const play = document.querySelector("#btnjogar")

function modificabtn(interruptor){
    if(!interruptor){
        play.setAttribute("disabled", true)
        play.style.opacity = "0"
        play.style.cursor = "auto"
    }else{
        play.removeAttribute("disabled")
        play.style.opacity = "1"
        play.style.cursor = "pointer"
    }
}

var tempo;

play.addEventListener("click", () => {
    itens.forEach(element => {
        if(element.checked){
            tempo = element.attributes.value.value
            modificabtn(false)
            chamaCronometro(tempo, timer)
            delayTrocaCores(tempo)
        }
    });
})
