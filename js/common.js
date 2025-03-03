// Make header have a bg when scrolled down a bit
const header = document.querySelector("header");

addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
