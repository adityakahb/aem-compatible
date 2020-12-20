import 'slick-carousel';
import { _DefaultCarouselOptions } from './../../assets/scripts/_constants.es';

export default class HeroSlider {
  constructor() {
  }
  __init() {
    const gridElem = document.querySelector('.grid-carousel');
    const gridSliderOptions = _DefaultCarouselOptions.responsive4;
    gridSliderOptions.nextArrow = _DefaultCarouselOptions.nextArrow;
    gridSliderOptions.prevArrow = _DefaultCarouselOptions.prevArrow;
    if (gridElem && $) {
      $('.grid-carousel').slick(gridSliderOptions);
    }
  }
}