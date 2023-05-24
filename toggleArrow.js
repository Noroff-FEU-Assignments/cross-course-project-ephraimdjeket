const toggle = document.getElementById("toggleDark");
const toggleMobile = document.querySelector(".toggleDark1");
const body = document.querySelector("body");
const logo = document.querySelector(".logo-nav-container");
const logoMobile = document.querySelector(".logo1");
const navColor = document.querySelectorAll(".menu a");
const arrowColor = document.querySelector(".fa-sharp");

const storedMode = localStorage.getItem('mode');

if (storedMode === 'dark') {
  enableDarkMode(false);
} else {
  enableLightMode(false);
}

toggle.addEventListener("click", function() {
  this.classList.toggle("bi-sun-fill");
  this.classList.toggle("bi-moon-stars-fill");

  if (this.classList.contains("bi-moon-stars-fill")) {
    enableLightMode(true);
    arrowColor.style.color = "black";
    localStorage.setItem('mode', 'light');
  } else {
    enableDarkMode(true);
    arrowColor.style.color = "white";
    localStorage.setItem('mode', 'dark');
  }
});

function enableLightMode(withTransition) {
  if (withTransition) {
    body.style.transition = "2s";
  } else {
    body.style.transition = "none";
  }

  body.style.background = "white";
  body.style.color = "black";
  logo.innerHTML = '<a href="index.html"><img src="../images/rainyyy1.png" alt="Rainydays logo" class="logo-switch"></a>';
  logoMobile.innerHTML = '<a href="../index.html"><img src="../images/rainyyy1.png" alt="Rainydays logo" class="logo1"></a>';

  navColor.forEach(function(element) {
    element.style.color = "black";
    element.style.borderColor = "black";
  });
}

function enableDarkMode(withTransition) {
  if (withTransition) {
    body.style.transition = "2s";
  } else {
    body.style.transition = "none";
  }

  body.style.background = "#3A3B3C";
  body.style.color = "white";
  logo.innerHTML = '<a href="index.html"><img src="../images/rainyyy1w.png" alt="Rainydays logo" class="logo-switch"></a>';
  logoMobile.innerHTML = '<a href="../index.html"><img src="../images/rainyyy1w.png" alt="Rainydays logo" class="logo1"></a>';

  navColor.forEach(function(element) {
    element.style.color = "white";
    element.style.borderColor = "white";
  });
}

if (storedMode === 'dark') {
  arrowColor.style.color = "white";
} else {
  arrowColor.style.color = "black";
}
