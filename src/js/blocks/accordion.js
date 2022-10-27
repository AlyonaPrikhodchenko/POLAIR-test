let mediaQueriesSize = window.matchMedia('(max-width: 1023px)');

const initAccordion = (media) => {
  const buttons = document.querySelectorAll('.footer__title');
  const contentBlocks = document.querySelectorAll('.footer__content');

  if (media.matches) {
    if (buttons && contentBlocks) {
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const contentBlock = contentBlocks[i];

        button.addEventListener('click', () => {
          if (parseInt(contentBlock.style.height, 10) !== contentBlock.scrollHeight) {
            contentBlock.style.marginBottom = '20px';
            contentBlock.style.height = contentBlock.scrollHeight + 'px';
          } else {
            contentBlock.style.marginBottom = '0';
            contentBlock.style.height = '0px';
          }

          for (let j = 0; j < contentBlocks.length; j++) {
            if (j !== i) {
              contentBlocks[j].style.marginBottom = '0';
              contentBlocks[j].style.height = '0px';
            }
          }
        });
      }
    }
  }
}

export {initAccordion, mediaQueriesSize};
