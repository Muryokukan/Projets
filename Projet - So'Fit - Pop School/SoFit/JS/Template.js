const toggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = e => {
  toggler.classList.toggle("open");

  const ariaToggle =
    toggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
  toggler.setAttribute("aria-expanded", ariaToggle);


  navLinksContainer.classList.toggle("open");
};

toggler.addEventListener("click", toggleNav);


new ResizeObserver(entries => {
  if (entries[0].contentRect.width <= 1186){
    navLinksContainer.style.transition = "transform 0.4s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body)

// Partie Login & Register

// let a = document.getElementById("loginBtn");
// let b = document.getElementById("registerBtn");
// let x = document.getElementById("login");
// let y = document.getElementById("register");

// function login() {
//     x.style.left = "4px";
//     y.style.right = "-520px";
//     a.className += " white-btn";
//     b.className = "btn";
//     x.style.opacity = 1;
//     y.style.opacity = 0;
// }

// function register() {
//     x.style.left = "-510px";
//     y.style.right = "5px";
//     a.className = "btn";
//     b.className += " white-btn";
//     x.style.opacity = 0;
//     y.style.opacity = 1;
// }


const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('.loginLog');
const registerBtn = document.querySelector('.registerLog');
const btnPopup = document.querySelector('.btnLoginPopup');
const iconClose = document.querySelector('.icon-close');


registerBtn.addEventListener('click', ()=> {
  wrapper.classList.add('active');
})

loginBtn.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
})

















