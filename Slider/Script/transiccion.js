var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "images/1.jpg";
imgArray[1] = new Image();
imgArray[1].src = "images/2.jpg";
imgArray[2] = new Image();
imgArray[2].src = "images/3.jpg";
imgArray[3] = new Image();
imgArray[3].src = "images/4.jpg";
imgArray[4] = new Image();
imgArray[4].src = "images/5.jpg";
imgArray[5] = new Image();
imgArray[5].src = "images/6.jpg";
imgArray[6] = new Image();
imgArray[6].src = "images/7.jpg";
imgArray[7] = new Image();
imgArray[7].src = "images/8.jpg";
imgArray[8] = new Image();
imgArray[8].src = "images/9.jpg";
imgArray[9] = new Image();
imgArray[9].src = "images/10.jpg";

var numeros = [];
var lugar;

function iniciar() {
    lugar = 0;
    document.getElementById("imgN").disabled = false;
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ranNums = [];
    (i = nums.length), (j = 0);
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1);
    }
    for (var n = 0; n < 5; n++) numeros[n] = ranNums[n];
    desactivarAnterior();
    ActivarSiguiente();
    document.getElementById("imgN").src = imgArray[numeros[lugar]].src;
}

function siguiente() {

    if (lugar < 4) {
        ActivarAnterior();
        lugar++;
        document.getElementById("imgN").src = imgArray[numeros[lugar]].src;
    }
    if (lugar == 4) {
        desactivarSiguiente();
    }
    console.log(lugar);
}

function anterior() {
    if (lugar > 0) {
        ActivarSiguiente();
        lugar--;
        document.getElementById("imgN").src = imgArray[numeros[lugar]].src;
    }
    if (lugar == 0) {
        desactivarAnterior();
    }
    console.log(lugar);
}

function desactivarAnterior() {
    document.getElementById("btnPrev").disabled = true;
    document.getElementById("btnPrev").style.color = "rgb(83, 81, 81)";
    document.getElementById("btnPrev").style.background = "rgb(170, 165, 165)";
}

function ActivarAnterior() {
    document.getElementById("btnPrev").disabled = false;
    document.getElementById("btnPrev").style.color = "rgb(255, 255, 255)";
    document.getElementById("btnPrev").style.background = "#CAD51E";
}

function desactivarSiguiente() {
    document.getElementById("btnNext").disabled = true;
    document.getElementById("btnNext").style.color = "rgb(83, 81, 81)";
    document.getElementById("btnNext").style.background = " rgb(170, 165, 165)";
}

function ActivarSiguiente() {
    document.getElementById("btnNext").disabled = false;
    document.getElementById("btnNext").style.color = "rgb(255, 255, 255)";
    document.getElementById("btnNext").style.background = "#CAD51E";
}

function currentSlide() {
    document.getElementsByClassName(dot).innerHTML
}

function showSlides(n) {
    var i;
    var slides = document.getElementById("imgN").src = imgArray[numeros[lugar]].src;
    var temp2 = []
    temp2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let k = 0; k < temp2.length; k++) {
        const element = array[k];
        if (element == temp) {
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.imgArray[numeros[lugar]].src;
            }
        }
    }

    document.getElementById("imprime").innerHTML = slides;
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}