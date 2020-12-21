import Swiper, { Navigation } from 'swiper';
import { _DefaultCarouselOptions } from './../../assets/scripts/_constants.es';
export default class HeroSlider {
  constructor() {
    Swiper.use([Navigation]);
  }
  __init() {
    const heroElem = document.querySelector('.hero-slider .swiper-container');
    if (heroElem) {
      let options = {};
      options.loop = _DefaultCarouselOptions.loop;
      options.navigation = _DefaultCarouselOptions.navigation;
      new Swiper('.hero-slider .swiper-container', options);
    }
  }
}