const menu = document.getElementById("menu");

function showMenu() {
  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle("active");
}

menu.addEventListener("click", showMenu);
