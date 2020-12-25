import Swiper, { Navigation } from 'swiper';
import { __aemDefaultCarouselOptions } from './../../assets/scripts/_constants.es';
export default class HeroSlider {
  constructor() {
    Swiper.use([Navigation]);
  }
  __init() {
    const heroElem = document.querySelector('.hero-slider .swiper-container');
    if (heroElem) {
      let options = {};
      options.loop = __aemDefaultCarouselOptions.loop;
      options.navigation = __aemDefaultCarouselOptions.navigation;
      new Swiper('.hero-slider .swiper-container', options);
    }
  }
}