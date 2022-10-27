const burger = document.querySelector('.user-menu__button--burger');
const menu = document.querySelector('.user-menu__wrapper');
const mediaQueryBurger = window.matchMedia('(max-width: 1023px)');

const openNavigation = (media) => {
  if (media.matches) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('user-menu__wrapper--mobile');
    });
  } else {
    menu.classList.remove('user-menu__wrapper--mobile');
  }
};

export {openNavigation, mediaQueryBurger};
