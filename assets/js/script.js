const slides = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Mostrar el slide actual
function showSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) currentIndex = 0;
  if (index < 0) currentIndex = totalSlides - 1;
  document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Eventos de botones
nextBtn.addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});
