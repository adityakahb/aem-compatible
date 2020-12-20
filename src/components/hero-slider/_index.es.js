import 'slick-carousel';
import { _DefaultCarouselOptions } from './../../assets/scripts/_constants.es';
export default class HeroSlider {
  constructor() {
  }
  __init() {
    const heroElem = document.querySelector('.hero-slider');
    const heroSliderOptions = {};
    heroSliderOptions.nextArrow = _DefaultCarouselOptions.nextArrow;
    heroSliderOptions.prevArrow = _DefaultCarouselOptions.prevArrow;
    if (heroElem && $) {
      $('.hero-slider').slick(heroSliderOptions);
    }
  }
}