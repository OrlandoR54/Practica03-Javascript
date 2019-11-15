var array = new Array();
array[0] = new Image();
array[0].src = "images/Brooklyn-3.jpg";
array[1] = new Image();
array[1].src = "images/Busa - Carlos-3.jpg";
array[2] = new Image();
array[2].src = "images/Central Park-1.jpg";
array[3] = new Image();
array[3].src = "images/cover 1.jpg";
array[4] = new Image();
array[4].src = "images/cover 2.jpg";
array[5] = new Image();
array[5].src = "images/cover 3.jpg";
array[6] = new Image();
array[6].src = "images/pink.jpg";
array[7] = new Image();
array[7].src = "images/suitUp.jpg";
array[8] = new Image();
array[8].src = "images/Trabajo-3.jpg";
array[9] = new Image();
array[9].src = "images/joker.jpg";

var transicion = [];
var pos;

function iniciar() {
    pos = 0;
    document.getElementById("im").disabled = false;
    var opc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ranNums = [];
    (i = opc.length), (j = 0);
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(opc[j]);
        opc.splice(j, 1);
    }
    for (var n = 0; n < 5; n++) transicion[n] = ranNums[n];
    desactivarAnterior();
    ActivarSiguiente();
    document.getElementById("im").src = array[transicion[pos]].src;
}

function next() {
    if (pos < 4) {
      ActivarAnterior();
      pos++;
      document.getElementById("im").src = imgArray[transicion[pos]].src;
    }
    if (pos == 4) {
      desactivarSiguiente();
    }
    console.log(pos);
  }

  function prev() {
    if (pos > 0) {
      ActivarSiguiente();
      pos--;
      document.getElementById("im").src = array[transicion[pos]].src;
    }
    if (pos == 0) {
      desactivarAnterior();
    }
    console.log(pos);
  }

function desactivarAnterior() {
    document.getElementById("btnPrev").disabled = true;
    document.getElementById("btnPrev").style.color = "rgb(83, 81, 81)";
    document.getElementById("btnPrev").style.background =
        " rgb(170, 165, 165)";
    document.getElementById("btnPrev").style.border = "2px solid #ffffff";
}

function ActivarAnterior() {
    document.getElementById("btnPrev").disabled = false;
    document.getElementById("btnPrev").style.color = "rgb(255, 255, 255)";
    document.getElementById("btnPrev").style.background = "#1883ba";
    document.getElementById("btnPrev").style.border = "2px solid #999";
}

function desactivarSiguiente() {
    document.getElementById("btnNext").disabled = true;
    document.getElementById("btnNext").style.color = "rgb(83, 81, 81)";
    document.getElementById("btnNext").style.background =
        " rgb(170, 165, 165)";
    document.getElementById("btnNext").style.border = "2px solid #ffffff";
}

function ActivarSiguiente() {
    document.getElementById("btnNext").disabled = false;
    document.getElementById("btnNext").style.color = "rgb(255, 255, 255)";
    document.getElementById("btnNext").style.background = "#1883ba";
    document.getElementById("btnNext").style.border = "2px solid #999";
}


showSlides(transicion);

function aumentar(n) {
    showSlides(transicion += n);
}

function currentSlide(n) {
    showSlides(transicion = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("desliz");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { transicion = 1 }
    if (n < 1) { transicion = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[transicion - 1].style.display = "block";
    dots[transicion - 1].className += " active";

}