document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector(".brands_button");
  const list = document.querySelector(".brands_list");

  button.addEventListener("click", () => {
    const expanded = list.classList.toggle("expanded");

    button.textContent = expanded
      ? "Скрыть"
      : "Показать все";
  });

  new Swiper(".brands_swiper", {
    slidesPerView: 1.3,
    spaceBetween: 16,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    breakpoints: {

      768: {
        enabled: false
      }

    }

  });

});