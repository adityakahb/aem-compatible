import validate from 'validate.js';
import { _ArrayCall } from './_constants.es';

export default class FormValidators {
  constructor() {
    this.aemForms = [];
  }
  formSubmitEvent(form, constraints) {
    return () => {
      if (event && form) {
        event.preventDefault();
      }
      let errors = validate(form, constraints);
      console.log('========errors', errors);
    };
  }
  __init() {

    _ArrayCall(document.querySelectorAll('[data-aemvalidate="true"]') || []).forEach(element => {
      let formObj = {};
      let constraints = {};
      let submitFn;

      let validatingElems = _ArrayCall(element.querySelectorAll('[data-rules]') || []);
      validatingElems.forEach(childElem => {
        let rulesObj = JSON.parse(childElem.getAttribute('data-rules'));
        let childElemName = childElem.getAttribute('name');
        constraints[childElemName] = {};
        if (rulesObj.required) {
          constraints[childElemName].presence = {message: '^' + rulesObj.required.message || ''};
        }
        if (rulesObj.email) {
          constraints[childElemName].email = {message: '^' + rulesObj.email.message || ''};
        }
        if (rulesObj.format) {
          constraints[childElemName].format = {
            pattern: rulesObj.format.pattern,
            message: '^' + rulesObj.format.message || ''
          };
        }
        if (rulesObj.equal) {
          constraints[childElemName].equality = {
            attribute: rulesObj.equal.to,
            message: '^' + rulesObj.equal.message || ''
          };
        }
      });
      if (!submitFn) {
        submitFn = this.formSubmitEvent(element, constraints);
      }
      element.addEventListener('submit', submitFn);
      formObj.formElem = element;
      formObj.submitFn = submitFn;
      formObj.constraints = constraints;
      this.aemForms.push(formObj);
    });
  }
}