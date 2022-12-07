document.getElementById('btn-sim').addEventListener('click', function () {
    alert('Agora somos namorados <3')
})

document.getElementById('btn-nao').addEventListener('click', function () {
    alert('Achou que tinha conseguido??')

    let width = window.screen.width /4;
    var height = window.screen.height /4;

    let posT = Math.floor(Math.random() * (height - (-height) +1) + (-height));
    let posR = Math.floor(Math.random() * (width - (-width) +1) + (-width));

    document.getElementById('btn-nao').style.top = posT + "px";
    document.getElementById('btn-nao').style.right = posR + "px";
})

document.getElementById('btn-nao').addEventListener('mouseover', function () {
    
    let width = window.screen.width /4;
    var height = window.screen.height /4;

    let posT = Math.floor(Math.random() * (height - (-height) +1) + (-height));
    let posR = Math.floor(Math.random() * (width - (-width) +1) + (-width));

    document.getElementById('btn-nao').style.top = posT + "px";
    document.getElementById('btn-nao').style.right = posR + "px";
})
