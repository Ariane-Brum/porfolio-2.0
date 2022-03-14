export function initGallery() {
  const gallery = document.querySelectorAll(".project-img img");
  const galleryContainer = document.querySelector(".project-img");

  function changeImage(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galleryContainer.prepend(img);
    }
  }

  gallery.forEach((img) => {
    img.addEventListener("click", changeImage);
  });
}
