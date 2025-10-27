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

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycby_8YwzwSqTaHtiwNHevple7jUSAJmYjzvS7ydqg3GL7WUwdrHmqECUWWZ2gnBnVLT9/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Message Sent Successfully";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })

//     .catch((error) => console.error("Error!", error.message));
// });
