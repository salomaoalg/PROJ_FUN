
//##############################################
let botao1 = document.querySelector('#gravar');
botao1.addEventListener("click", gravar)

function gravar(){
    alert("Clicado Com Sucesso")
}

//################################################

let aplicacor = document.querySelector("#aplicacor");
let mudarcor = document.querySelector("#mudarcor")

mudarcor.addEventListener("click", 
    function mudacoresbody(){
        aplicacor.style.backgroundColor = 'blue';
})





