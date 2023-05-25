const timer = document.querySelector("#timer")
const itens = document.querySelectorAll(".radioOption")
const play = document.querySelector("#btnjogar")

//


function modificabtn(interruptor){
    play.remove()

    if(interruptor){
        const btnreplay = document.querySelector("#espaco") 
        btnreplay.innerHTML = "<button id='btnreplay' class='botoes'>Replay</button>"
        btnreplay.addEventListener("click", ()=>{
            window.location.reload()
        })
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