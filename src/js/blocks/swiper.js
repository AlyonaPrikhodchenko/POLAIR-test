const initSwiper = () => {
  new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    initialSlide: 2,
  });
}

export {initSwiper};
