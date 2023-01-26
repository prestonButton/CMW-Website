/* Navbar Code:
This code will hide the navbar when the user scrolls down
and show it when the user scrolls up.
*/

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav");

  navbar.classList[window.scrollY > 50 ? "add" : "remove"]("hide");
});
