import Swiper, { Navigation, Pagination } from 'swiper';

export default class HeroSlider {
  constructor() {
    Swiper.use([Navigation, Pagination]);
  }
  __init() {
    new Swiper('.grid-carousel .swiper-container', {
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })    
  }
}