const chickenImages = [
  "assets/images/chicken1.jpg",
  "assets/images/chicken2.jpg",
  "assets/images/chicken3.jpg",
  "assets/images/chicken4.jpg",
];

let currentImage = 0;

const chickenImage = document.getElementById("chickenImage");
const nextChicken = document.getElementById("nextChicken");
const prevChicken = document.getElementById("prevChicken");

function showChickenImage() {
  chickenImage.style.opacity = 0;

  setTimeout(function () {
    chickenImage.src = chickenImages[currentImage];

    chickenImage.style.opacity = 1;
  }, 250);
}

nextChicken.addEventListener("click", nextImage);

prevChicken.addEventListener("click", previousImage);

function previousImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = chickenImages.length - 1;
  }
  showChickenImage();
}

function nextImage() {
  currentImage++;
  if (currentImage >= chickenImages.length) {
    currentImage = 0;
  }
  showChickenImage();
}

setInterval(nextImage, 10000); // Change image every 10 seconds

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      e.preventDefault();

      alert("Please fill in all required fields.");
    }
  });
}
