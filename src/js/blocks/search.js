const search = document.querySelector('.user-menu__button--search');
const input = document.querySelector('.search');
const mediaQuerySearch = window.matchMedia('(max-width: 1023px)');

const openSearch = (media) => {
  if (media.matches) {
    search.addEventListener('click', () => {
      input.classList.toggle('search--hidden');
    });
  } else {
    input.classList.add('search--hidden');
  }
};

export {openSearch, mediaQuerySearch};
