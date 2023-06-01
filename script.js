document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active");
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
    }
  
    function autoSlide() {
      showSlide(currentSlide + 1);
    }
  
    setInterval(autoSlide, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)
  });
  