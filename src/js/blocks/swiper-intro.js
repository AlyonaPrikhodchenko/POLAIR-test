const initSwiperSlider = () => {
  new Swiper('#swiperIntro', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    initialSlide: 2,
  });
}

export {initSwiperSlider};
