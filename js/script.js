// toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// Cara Menampilkan Menu Ketika Menu diclick untuk hp
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

/* Cara agar menu hilang ketika diclick diluar menu */
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
