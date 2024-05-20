function myfunction() {
    var fullname = document.querySelector('.nomes').value;

    alert(fullname);
    document.querySelector('.sobre').innerHTML = "nomecompleto";
}

function moverbotao(x) {
    marginX = Math.floor(Math.random() * 600)
    marginY = Math.floor(Math.random() * 600)

    x.style.margin = marginY.toString() + 'px ' + marginX.toString() + 'px'
}
