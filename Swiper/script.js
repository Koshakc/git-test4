if (window.innerWidth <= 767) {
  new Swiper(".brands__swiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const toggleBtn = document.querySelector(".js-toggle-btn");
const list = document.querySelector(".brands__list");

toggleBtn.addEventListener("click", () => {
  const isExpanded = list.classList.toggle("expanded");

  toggleBtn.textContent = isExpanded
    ? "Скрыть"
    : "Показать все";
});

if (window.innerWidth <= 767) {
  new Swiper(".brands_swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}