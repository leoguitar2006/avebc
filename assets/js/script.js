//WOW.JS
new WOW().init();  

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Open the Subtitle
function  openSubtitle() {
  document.querySelector(".caption-container").style.display = "block";
}

// Close the Subtitle
function  closeSubtitle() {
  document.querySelector(".caption-container").style.display = "none"; 
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  let captionTitle = document.querySelector("#title");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  captionTitle.innerHTML = dots[slideIndex-1].title; 
}

function subtitleToggle() {
  const captionContainer = document.querySelector(".caption-container");

    if ((captionContainer.style.display === '') || (captionContainer.style.display === 'block')) {
      closeSubtitle();
    } else {
      openSubtitle();
    }
}

 


