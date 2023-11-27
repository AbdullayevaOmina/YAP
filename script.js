document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("ul li");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
});
