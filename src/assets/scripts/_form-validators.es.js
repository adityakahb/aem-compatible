import 'jquery-validation/dist/jquery.validate';
import 'jquery-validation/dist/additional-methods';

import {__aemFormInvalidElementClass} from './_constants.es';

export default class FormValidators {
  constructor() {
    this.aemForms = [];
  }
  __init() {
    if ($) {
      $('[data-aemvalidate="true"]').each((formindex, form) => {
        let formObj = {};
        let constraints = {
          rules: {},
          messages: {},
          errorPlacement: function ( error, element ) {
            error.addClass('my-2 text-danger font-weight-bold small');
  
            if ( element.prop('type') === 'checkbox') {
              error.insertAfter( element.next('label') );
            } else {
              error.insertAfter( element );
            }
          },
          highlight: function (element) {
            // $( element ).addClass(__aemFormInvalidElementClass).removeClass(__aemFormValidElementClass);
            $( element ).addClass(__aemFormInvalidElementClass);
          },
          unhighlight: function (element) {
            // $( element ).addClass(__aemFormValidElementClass).removeClass(__aemFormInvalidElementClass);
            $( element ).removeClass(__aemFormInvalidElementClass);
          }
        };

        formObj.elements = [];
        $(form).find('[data-aemrules]').each((elemindex, elem) => {
          let elemObj = {};
          let rulesObj = JSON.parse($(elem).attr('data-aemrules'));
          elemObj.elem = $(elem);
          elemObj.name = $(elem).attr('name');
          elemObj.id = $(elem).attr('id');
          constraints.rules[elemObj.name] = {};
          constraints.messages[elemObj.name] = {};
          if (rulesObj.required) {
            constraints.rules[elemObj.name].required = rulesObj.required.value;
            constraints.messages[elemObj.name].required = rulesObj.required.message;
          }
          if (rulesObj.email) {
            constraints.rules[elemObj.name].email = rulesObj.email.value;
            constraints.messages[elemObj.name].email = rulesObj.email.message;
          }
          if (rulesObj.pattern) {
            constraints.rules[elemObj.name].pattern = rulesObj.pattern.value;
            constraints.messages[elemObj.name].pattern = rulesObj.pattern.message;
          }
          if (rulesObj.equalTo) {
            constraints.rules[elemObj.name].equalTo = '#' + rulesObj.equalTo.value;
            constraints.messages[elemObj.name].equalTo = rulesObj.equalTo.message;
          }
          formObj.elements.push(elemObj);
        });

        formObj.form = $(form);
        formObj.constraints = constraints;
        formObj.form.validate(constraints)
        this.aemForms.push(formObj);
      });
    }
    // _ArrayCall(document.querySelectorAll('[data-aemvalidate="true"]') || []).forEach(element => {
    //   let formObj = {};
    //   formObj.constraints = {};
      
    //   let childElements = _ArrayCall(element.querySelectorAll('[data-rules]') || []);
    //   formObj.elements = [];
      
    //   childElements.forEach(childElem => {
    //     let childObj = {};
    //     let rulesObj = JSON.parse(childElem.getAttribute('data-rules'));
    //     let childElemName = childElem.getAttribute('name');
    //     let changeEvent;

    //     formObj.constraints[childElemName] = {};
    //     if (rulesObj.required) {
    //       formObj.constraints[childElemName].presence = {message: '^' + rulesObj.required.message || ''};
    //     }
    //     if (rulesObj.email) {
    //       formObj.constraints[childElemName].email = {message: '^' + rulesObj.email.message || ''};
    //     }
    //     if (rulesObj.format) {
    //       formObj.constraints[childElemName].format = {
    //         pattern: new RegExp(rulesObj.format.pattern),
    //         message: '^' + rulesObj.format.message || ''
    //       };
    //     }
    //     if (rulesObj.equal) {
    //       formObj.constraints[childElemName].equality = {
    //         attribute: rulesObj.equal.to,
    //         message: '^' + rulesObj.equal.message || ''
    //       };
    //     }
    //     childObj.name = childElemName;
    //     childObj.rules = rulesObj;
    //     childObj.messageElem = element.querySelector(`[data-forname="${childElemName}"]`);
    //     childObj.formGroup = childElem.closest('.form-group');
        
    //     if (!changeEvent) {
    //       // changeEvent = __aemElementChangeEvent(formObj, childObj);
    //     }
    //     // childElem.addEventListener('keyup', changeEvent, false);

    //     childObj.element = childElem;
    //     formObj.elements.push(childObj);
    //   });
    //   // if (!submitFn) {
    //   //   // submitFn = __aemFormSubmitEvent(formObj);
    //   // }
    //   // element.addEventListener('submit', submitFn, false);
    //   // formObj.submitFn = submitFn;
    //   formObj.form = element;
    //   this.aemForms.push(formObj);
    // });
  }
}