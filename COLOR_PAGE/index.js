
//##############################################
let botao1 = document.querySelector('#gravar');
botao1.addEventListener("click", gravar)

function gravar(){
    alert("Clicado Com Sucesso")
}

//################################################

let aplicacor = document.querySelector("#aplicacor");
let mudarcor = document.querySelector("#mudarcor");
let cortitutlo = document.querySelectorAll("h2");
let posicao = 0;

mudarcor.addEventListener("click", () => {
    if(posicao === 3){
        posicao = 0;
    }
    for(let i = 0; i < cortitutlo.length; i++){
        cortitutlo[i].style.color = "white";
    }

    aplicacor.style.backgroundColor = colorido(posicao);
    ++posicao;                     
})

var colorido = function (posicao){
        let cores = ["blue", "green", "yellow"];
        return cores[posicao]   
}




