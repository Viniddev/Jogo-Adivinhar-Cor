const objetoCores = ['red', 'green', 'blue', 'yellow', 'purple', 'aliceblue']
const textoCores = ['vermelho', 'verde', 'azul', 'amarelo', 'roxo', 'gelo']    

var corDoFundo;
var nomeDaCor;
var corDaFonte;

function trocaCores(){
    corDoFundo = objetoCores[parseInt(Math.random() * (objetoCores.length - 1))]
    document.querySelector("#body").style.background = corDoFundo

    corDaFonte = objetoCores[parseInt(Math.random() * (objetoCores.length - 1))]
    if(corDaFonte == corDoFundo){
        corDaFonte = objetoCores[parseInt(Math.random() * (objetoCores.length - 1)) + 1]
    }
    document.querySelector("#cor").style.color = corDaFonte

    nomeDaCor = textoCores[parseInt(Math.random() * (textoCores.length -1))]
    document.querySelector("h2").innerHTML = nomeDaCor
}

