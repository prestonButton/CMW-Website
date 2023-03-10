/* Slideshow Code:
This code will display the images in a slideshow.
*/

/* Slideshow Code:This code will display the images in a slideshow. */
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (const slide of slides) {
    slide.style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 5 seconds
}

/*add responsiveness to the navbar*/
/* Toggle between adding and removing the "responsive" class to topnav when the
 * user clicks on the icon */
function responsive() {
  const x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
