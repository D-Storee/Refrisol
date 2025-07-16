// Esperar que el DOM cargue antes de acceder al contenido
document.addEventListener("DOMContentLoaded", function () {
  // ✅ Mostrar el año actual en el footer
  const yearElement = document.getElementById("anio-actual");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ✅ Funcionalidad de galería (lightbox)
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const cerrarBtn = document.querySelector(".cerrar");
  const imagenes = document.querySelectorAll(".imagen-galeria img");

  imagenes.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  cerrarBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

    // ✅ HERO SLIDESHOW
  const heroSection = document.querySelector('.hero');
  const heroImages = [
    'images/hero1.jpg',
    'images/hero2.png',
    'images/hero3.png'
  ];

  let currentImage = 0;

  setInterval(() => {
    currentImage = (currentImage + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url('${heroImages[currentImage]}')`;
  }, 6000); // Cambia cada 6 segundos


  // ✅ MENÚ RESPONSIVE DEL HEADER
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});

// ANIMACIÓN
function mostrarAlScroll() {
  const elementos = document.querySelectorAll('.aparece');
  const trigger = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarAlScroll);
window.addEventListener('load', mostrarAlScroll);

