export function initMenuMobile() {
  const toggleBtn = document.querySelector(".toggle-btn");
  const menu = document.querySelector(".menu-mobile");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}
