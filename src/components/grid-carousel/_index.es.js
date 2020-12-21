import Swiper, { Navigation } from 'swiper';
import { _DefaultCarouselOptions } from './../../assets/scripts/_constants.es';

export default class HeroSlider {
  constructor() {
    Swiper.use([Navigation]);
  }
  __init() {
    const sliderElem = document.querySelector('.grid-carousel .swiper-container');
    if (sliderElem) {
      let options = {};
      options.loop = _DefaultCarouselOptions.loop;
      options.navigation = _DefaultCarouselOptions.navigation;
      options.slidesPerView = _DefaultCarouselOptions.responsive4.slidesPerView;
      options.breakpoints = _DefaultCarouselOptions.responsive4.breakpoints;
      new Swiper('.grid-carousel .swiper-container', options);
    }
  }
}