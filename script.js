const words = [
  "tailored to your needs",
  "crafted to your comfort in mind",
  "fatigue",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.getElementById("typed-text");

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
    typedText.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex++;
    typedText.textContent = currentWord.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 3500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const delay = isDeleting ? 50 : 100;
  setTimeout(type, delay);
}

type();

document.querySelectorAll(".contact-item").forEach((item) => {
  item.addEventListener("click", () => {
    alert(`You clicked: ${item.textContent.trim()}`);
  });
});

// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (menuOpen == false) {
    navLinks.style.display = "block";
    menuOpen = true;
  } else if (menuOpen == true) {
    navLinks.style.display = "none";
    menuOpen = false;
  }
});

// document.getElementById("hamburger").addEventListener("click", function () {
//   const navLinks = document.querySelector(".nav-link");
//   navLinks.classList.toggle("active");
// });
