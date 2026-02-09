if (window.innerWidth <= 767) {

  new Swiper('.brands__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

}