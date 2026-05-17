document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("#sidebar a");
  var here = window.location.pathname;
  var homeHere = here.endsWith("/") || here.endsWith("/index.html");

  links.forEach(function (link) {
    var target = new URL(link.getAttribute("href"), window.location.href);
    var path = target.pathname;
    var isHome = link.classList.contains("sb-home");

    if (path === here || (isHome && homeHere && (path.endsWith("/") || path.endsWith("/index.html")))) {
      link.classList.add("current");
    }
  });
});
