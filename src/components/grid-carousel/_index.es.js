import Swiper, { Navigation } from 'swiper';
import { __aemDefaultCarouselOptions } from './../../assets/scripts/_constants.es';

export default class HeroSlider {
  constructor() {
    Swiper.use([Navigation]);
  }
  __init() {
    const sliderElem = document.querySelector('.grid-carousel .swiper-container');
    if (sliderElem) {
      let options = {};
      options.loop = __aemDefaultCarouselOptions.loop;
      options.navigation = __aemDefaultCarouselOptions.navigation;
      options.slidesPerView = __aemDefaultCarouselOptions.responsive4.slidesPerView;
      options.breakpoints = __aemDefaultCarouselOptions.responsive4.breakpoints;
      new Swiper('.grid-carousel .swiper-container', options);
    }
  }
}