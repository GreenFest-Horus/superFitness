const initSwipers = () => {
  if (document.querySelector('.coaches__swiper')) {
    const coachesSwiper = new Swiper ('.coaches__swiper', { // eslint-disable-line
      direction: 'horizontal',
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },

      navigation: {
        nextEl: '.coaches__button--next',
        prevEl: '.coaches__button--prev',
      },
    });
  }

  if (document.querySelector('.comments__swiper')) {
    const commentsSwiper = new Swiper('.comments__swiper', { // eslint-disable-line
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 110,
      autoHeight: true,

      navigation: {
        nextEl: '.comments__button--next',
        prevEl: '.comments__button--prev',
      },
    });
  }
};

export {initSwipers};
