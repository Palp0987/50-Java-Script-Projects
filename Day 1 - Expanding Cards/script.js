const panels = document.querySelectorAll(".image");

panels.forEach((image) => {
  image.addEventListener("click", () => {
    removeActiveClass();
    image.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((image) => {
    image.classList.remove("active");
  });
}


