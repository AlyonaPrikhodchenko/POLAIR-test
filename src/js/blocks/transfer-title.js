let mediaQueries = window.matchMedia('(min-width: 1024px)');
const footerProducts = document.querySelector('.js-products');
const footerTitleProducts = document.querySelector('.js-title');
const footerContent = document.querySelector('.js-content');

const transferTitle = (media) => {
  if (media.matches) {
    footerContent.insertBefore(footerTitleProducts, footerContent.firstChild);
  } else {
    footerProducts.insertBefore(footerTitleProducts, footerProducts.firstChild);
  }
}

export {transferTitle, mediaQueries};
