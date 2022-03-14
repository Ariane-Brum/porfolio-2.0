import { typeWrite } from "./modules/typeWrite.js";
import { initScrollReveal } from "./modules/scrollReveal.js";
import { initGallery } from "./modules/gallery.js";
import { initMenuMobile } from "./modules/menuMobile.js";

if (window.ScrollReveal) {
  initScrollReveal();
}

initMenuMobile();
initGallery();

const type = document.querySelector(".typewriter");
if (type) {
  typeWrite(type);
}
