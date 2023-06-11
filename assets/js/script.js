// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// changes navbar
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky nav
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
  /** remove toggle icon and navbar when click navbar link */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// scroll reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(
  ".home__content, .home__social-media, .skill__heading, .contact__heading, .portfolio__heading, .about__content-heading",
  { origin: "top" }
);
ScrollReveal().reveal(
  ".home__img, .skill__container, .portfolio__box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home__content h1, .about img", { origin: "left" });
ScrollReveal().reveal(".home__content p, .about__content", { origin: "right" });

// typed

const typed = new Typed(".multiple-text", {
  strings: ["Full-stack developer", "Designer", "Gamer"],
  typeSpeed: 80,
  backSpeed: 70,
  backDelay: 900,
  loop: true,
});
