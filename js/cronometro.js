var parado = false //verificar se o contador do tempo ja parou para parar tambem a troca de cores.

function chamaCronometro(duration, display){
    var timer = duration, seconds
    var interval = setInterval(() => {

        seconds = parseInt(timer, 10)
        seconds = seconds < 10 ? "0" + seconds : seconds
        display.textContent = "00:" + seconds
        
        if(--timer < 0){
            timer = duration
            clearInterval(interval)
            document.querySelector("#timer").innerHTML = "00:00"   
            modificabtn(true)
            parado = true
        }
    }, 1000); 
}

function delayTrocaCores(time){
    var seconds = time-5;
    var intervalo = setInterval(() => {
        trocaCores()

        if(seconds <= 0 || parado){
            seconds = 0
            clearInterval(intervalo)  
        }else{
            seconds-=5
        }
    }, 5000); 
}