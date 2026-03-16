document.addEventListener("DOMContentLoaded", () => {


  const btn  = document.getElementById("brandsBtn");
  const grid = document.getElementById("brandsGrid");
  const txt  = document.getElementById("brandsBtnTxt");

  btn.addEventListener("click", () => {
    const isOpen = grid.classList.toggle("open");
    btn.classList.toggle("open", isOpen);
    txt.textContent = isOpen ? "Скрыть" : "Показать все";
  });

 
  let swiper = null;

  function handleSwiper() {
    if (window.innerWidth < 768) {
      if (!swiper) {
        swiper = new Swiper(".brands__swiper", {
          slidesPerView: "auto",
          spaceBetween: 12,
          pagination: {
            el: ".brands__pagination",
            clickable: true,
          },
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  }

  handleSwiper();
  window.addEventListener("resize", handleSwiper);

});
