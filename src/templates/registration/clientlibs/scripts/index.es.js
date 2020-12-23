import "core-js/stable";
import FormValidators from './../../../../assets/scripts/_form-validators.es';
class Registration {
  constructor() {}
  __init() {
    const formValidators = new FormValidators();
    formValidators.__init();
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const registration = new Registration();
  registration.__init();
});