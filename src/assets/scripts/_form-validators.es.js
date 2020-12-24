import validate from 'validate.js';
import { _AddClass, _RemoveClass, _ArrayCall } from './_constants.es';

const resetFormGroup = (formGroup) => {
  if (formGroup) {
    _RemoveClass(formGroup, 'has-error has-success');
    console.log('============length', _ArrayCall(formGroup.querySelectorAll('.help-block.error') || []).length);
    _ArrayCall(formGroup.querySelectorAll('.help-block.error') || []).forEach(el => {
      el.parentNode.removeChild(el);
    });
  }
};

const addError = (errorContainer, msg) => {
  let block = document.createElement("p");
  _AddClass(block, 'help-block error');
  block.innerText = msg;
  errorContainer.appendChild(block);
};

const showErrorForElement = (formitem, errors) => {
  resetFormGroup(formitem.formGroup);
  if (errors) {
    _AddClass(formitem.formGroup, 'has-error');
    errors.forEach(error => {
      addError(formitem.messageElem, error);
    });
  } else {
    _AddClass(formitem.formGroup, 'has-success');
  }
};

const showErrors = (formObj, errors) => {
  (formObj.elements || []).forEach(item => {
    showErrorForElement(item, errors && errors[item.name]);
  });
};

const elementChangeEvent = (formObj, item) => {
  return () => {
    let errors = validate(formObj.form, formObj.constraints);
    showErrorForElement(item, errors && errors[item.name]);
  };
};

const formSubmitEvent = (formObj) =>{
  return () => {
    if (event && formObj.form) {
      event.preventDefault();
    }
    let errors = validate(formObj.form, formObj.constraints);
    if (errors) {
      showErrors(formObj, errors);
    } else {
      alert('All passed');
    }
    // if (!errors) {
    //   // return true;
    //   alert('All passed');
    // }
  };
};

export default class FormValidators {
  constructor() {
    this.aemForms = [];
  }
  __init() {
    _ArrayCall(document.querySelectorAll('[data-aemvalidate="true"]') || []).forEach(element => {
      let formObj = {};
      formObj.constraints = {};
      let submitFn;

      let validatingElems = _ArrayCall(element.querySelectorAll('[data-rules]') || []);
      formObj.elements = [];
      validatingElems.forEach(childElem => {
        let childObj = {};
        let rulesObj = JSON.parse(childElem.getAttribute('data-rules'));
        let childElemName = childElem.getAttribute('name');
        let changeEvent;

        formObj.constraints[childElemName] = {};
        if (rulesObj.required) {
          formObj.constraints[childElemName].presence = {message: '^' + rulesObj.required.message || ''};
        }
        if (rulesObj.email) {
          formObj.constraints[childElemName].email = {message: '^' + rulesObj.email.message || ''};
        }
        if (rulesObj.format) {
          formObj.constraints[childElemName].format = {
            pattern: rulesObj.format.pattern,
            message: '^' + rulesObj.format.message || ''
          };
        }
        if (rulesObj.equal) {
          formObj.constraints[childElemName].equality = {
            attribute: rulesObj.equal.to,
            message: '^' + rulesObj.equal.message || ''
          };
        }
        childObj.name = childElemName;
        childObj.rules = rulesObj;
        childObj.messageElem = element.querySelector(`[data-forname="${childElemName}"]`);
        childObj.formGroup = childElem.closest('.form-group');
        
        if (!changeEvent) {
          changeEvent = elementChangeEvent(formObj, childObj);
        }
        childElem.addEventListener('keyup', changeEvent, false);

        childObj.element = childElem;
        formObj.elements.push(childObj);
      });
      if (!submitFn) {
        submitFn = formSubmitEvent(formObj);
      }
      element.addEventListener('submit', submitFn, false);
      formObj.submitFn = submitFn;
      formObj.form = element;
      this.aemForms.push(formObj);
    });
  }
}