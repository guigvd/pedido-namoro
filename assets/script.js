document.getElementById('btn-sim').addEventListener('click', function(){
    alert('Agora somos namorados <3')
})

document.getElementById('btn-nao').addEventListener('click', function(){
    alert('Achou que tinha conseguido??')
})

document.getElementById('btn-nao').addEventListener('mouseover', function(){
    let posT = Math.floor(Math.random() * (300 - 10) + 10);
    let posR = Math.floor(Math.random() * (300 - 10) + 10);

    document.getElementById('btn-nao').style.top = posT + "px";
    document.getElementById('btn-nao').style.right = posR + "px";
})

