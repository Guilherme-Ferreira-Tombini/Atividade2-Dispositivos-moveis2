// window.onload = () => {
//     "use strict";
//     if("serviceWorker" in navigator){
//         navigator.serviceWorker.register("./sw.js");
//     }
// };

function guarani(){
    let guarani = document.getElementById('guarani').value;
    let calculo = "A conversão entre guarani para reais é equivalente a R$" + Number(guarani * 0.00074);
    document.getElementById('result').textContent = calculo;
}

function dolar(){
    let dolar = document.getElementById('dolar').value;
    let calculo = "A conversão entre dolares para reais é equivalente a R$" + Number(dolar * 5.09);
    document.getElementById('result').textContent = calculo;
}