let urlFeliz = "https://w7.pngwing.com/pngs/932/162/png-transparent-smiley-happiness-happy-face-face-smiley-emoticon-thumbnail.png"
let urlTriste = "https://static6.depositphotos.com/1002188/648/i/600/depositphotos_6489061-stock-photo-sad-symbol.jpg"
let imgHtml = document.querySelector("#nota")
let numero1
do {
    numero1 = Number (prompt("Ingrese su primera nota"))
} while (isNaN(numero1) || (numero1 < 0) || (numero1 >= 10));
let numero2
do {
    numero2 = Number (prompt("Ingrese su segunda nota"))
} while (isNaN(numero2) || (numero2 < 0) || (numero2 >= 10));
let numero3
do {
    numero3 = Number (prompt("Ingrese su tercera nota"))
} while (isNaN(numero3) || (numero3 < 0) || (numero3 > 10));
var numero4 = ((numero1 + numero2 + numero3)/3)
if (numero4 >= 6){
    imgHtml.src = urlFeliz
}else{
    imgHtml.src = urlTriste
}



