import "core-js/stable";
import HeroSlider from '../../../../components/hero-slider/_index.es';
import GridCarousel from '../../../../components/grid-carousel/_index.es';

class Home {
  constructor() {}
  __init() {
    const heroSlider = new HeroSlider();
    const gridCarousel = new GridCarousel();
    heroSlider.__init();
    gridCarousel.__init();
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const home = new Home();
  home.__init();
});