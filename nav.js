document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("#sidebar a");
  var here = window.location.pathname;
  var homeHere = here.endsWith("/") || here.endsWith("/index.html");
  var menuBtn = document.getElementById("menu-btn");
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");

  function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
  }

  links.forEach(function (link) {
    var path = new URL(link.getAttribute("href"), window.location.href).pathname;
    var homeLink = link.classList.contains("sb-home");
    if (path === here || (homeLink && homeHere && (path.endsWith("/") || path.endsWith("/index.html")))) {
      link.classList.add("current");
    }
    link.addEventListener("click", closeMenu);
  });

  menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("visible");
  });
  overlay.addEventListener("click", closeMenu);
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) closeMenu();
  });
});
