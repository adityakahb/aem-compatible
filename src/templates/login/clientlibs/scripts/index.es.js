import "core-js/stable";
import GridCarousel from '../../../../components/grid-carousel/_index.es';
import FormValidators from './../../../../assets/scripts/_form-validators.es';
class Registration {
  constructor() {}
  __init() {
    const formValidators = new FormValidators();
    const gridCarousel = new GridCarousel();
    formValidators.__init();
    gridCarousel.__init();
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const registration = new Registration();
  registration.__init();
});