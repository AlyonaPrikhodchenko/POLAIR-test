let breakpoint = window.matchMedia('(min-width: 768px)');
let mySwiper;

const initSwiperBrands = () => {
  mySwiper = new Swiper('#swiperBrands', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    initialSlide: 2,
  });
};

const breakpointChecker = (breakpoint) => {
  if (breakpoint.matches === true) {
    if (mySwiper !== undefined) mySwiper.destroy();
    return;
  } else if (breakpoint.matches === false) {
    return initSwiperBrands();
  }
};

export {breakpointChecker, breakpoint}
