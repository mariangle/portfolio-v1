let controller;
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-link");
const navHead = document.querySelector('.nav-head');
const nav = document.querySelector('.nav-header');
const mouse = document.querySelector(".cursor");

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    openNav();
  } else {
    burger.classList.remove("active");
    closeNav();
  }
}
function openNav(){
    gsap.to(".line1", 0.5, { rotate: "45", y: 3, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -3, background: "black" });
    gsap.to(".nav-bar", 0.7, { clipPath: "circle(2500px at 100% -10%)" });
    gsap.to(".burger", 0.7, { zIndex: 11 });
}

function closeNav() {
  gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
  gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
  gsap.to(".nav-bar", 0.7, { clipPath: "circle(50px at 100% -10%)" });
}

function cursor(e){
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
  if(e.target.parentElement.classList.contains("section") || e.target.classList.contains("section")){
    mouse.style.border = "2px solid black"
  } else{
    mouse.style.border = "2px solid white"
  }
}

function activeCursor(e){
  const item = e.target;
  if(item.classList.contains("clickable") || item.classList.contains("burger")){
      mouse.classList.add("nav-active");
  } else{
      mouse.classList.remove("nav-active");
  }
  if(item.tagName === "A" ){
      mouse.classList.add("link-active");
  } else{
      mouse.classList.remove("link-active");
  }
}

function animateSite(e){
  controller = new ScrollMagic.Controller();
  const slideTl = gsap.timeline({
    defaults: {duration: 1, ease: "power2.inOut"}
  });
    slideTl.fromTo(nav, {y: "-200%"}, {y: "0%"}, "-=0.5")
}

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closeNav();
  });
});

// NAV
window.addEventListener('scroll', () => {
  if (!burger.classList.contains("active")) {
    if (window.scrollY > 0) {
      navHead.classList.add('scrolled');
    } else {
      navHead.classList.remove('scrolled');
    }
  }
});

// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// MOUSE MOVE
burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
animateSite();