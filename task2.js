function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.classList.add("responsive");
  } else {
    menuBtn.classList.remove("responsive");
  }
}

window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

let typingEffect = new Typed(".typedText", {
  strings: ["programmer", "Developer", "engineer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".project-box", { interval: 200 });

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    const activeLink = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      activeLink.classList.add("active-link");
    } else {
      activeLink.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
