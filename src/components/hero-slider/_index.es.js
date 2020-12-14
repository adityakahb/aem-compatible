import Swiper, { Navigation, Pagination } from 'swiper';

export default class HeroSlider {
  constructor() {
    Swiper.use([Navigation, Pagination]);
  }
  __init() {
    new Swiper('.swiper-container', {
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })    
  }
}