var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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
//-----------------------------------------------
var but = document.getElementById("but_nav");
but.onclick = f;

function f() {
  var main = document.getElementsByClassName("tinhtrang");
  var id_name = main[0].getAttribute("id");

  if (id_name == "on") {

    main[0].setAttribute("id", "off");

  }
  if (id_name == "off") {
    main[0].setAttribute("id", "on");

  }
}

//---------------------------------------------------
