import 'jquery-validation/dist/jquery.validate';
import 'jquery-validation/dist/additional-methods';

import {__aemFormInvalidElementClass} from './_constants.es';

export default class FormValidators {
  constructor() {
    this.aemForms = [];
  }
  __init() {
    // if ($) {
    //   $('[data-aemvalidate="true"]').each((formindex, form) => {
    //     let formObj = {};
    //     let constraints = {
    //       rules: {},
    //       messages: {},
    //       errorPlacement: function ( error, element ) {
    //         let $placement = element.parents('.form-group').find('.error-placement');
    //         if ($placement) {
    //           error.appendTo($placement);
    //         } else {
    //           error.addClass('my-2 text-danger font-weight-bold small');
  
    //           if (element.prop('type') === 'checkbox') {
    //             error.insertAfter( element.next('label') );
    //           } else {
    //             error.insertAfter( element );
    //           }
    //         }
    //       },
    //       highlight: function (element) {
    //         // $( element ).addClass(__aemFormInvalidElementClass).removeClass(__aemFormValidElementClass);
    //         $( element ).addClass(__aemFormInvalidElementClass);
    //       },
    //       unhighlight: function (element) {
    //         // $( element ).addClass(__aemFormValidElementClass).removeClass(__aemFormInvalidElementClass);
    //         $( element ).removeClass(__aemFormInvalidElementClass);
    //       }
    //     };

    //     formObj.elements = [];
    //     $(form).find('[data-aemrules]').each((elemindex, elem) => {
    //       let elemObj = {};
    //       let rulesObj = JSON.parse($(elem).attr('data-aemrules'));
    //       elemObj.elem = $(elem);
    //       elemObj.name = $(elem).attr('name');
    //       elemObj.id = $(elem).attr('id');
    //       constraints.rules[elemObj.name] = {};
    //       constraints.messages[elemObj.name] = {};
    //       if (rulesObj.required) {
    //         if (typeof rulesObj.required.value === 'boolean') {
    //           constraints.rules[elemObj.name].required = rulesObj.required.value;
    //         } else {
    //           constraints.rules[elemObj.name].required = '#' + rulesObj.required.value + ':checked';
    //         }
    //         constraints.messages[elemObj.name].required = rulesObj.required.message;
    //       }
    //       if (rulesObj.email) {
    //         constraints.rules[elemObj.name].email = rulesObj.email.value;
    //         constraints.messages[elemObj.name].email = rulesObj.email.message;
    //       }
    //       if (rulesObj.pattern) {
    //         constraints.rules[elemObj.name].pattern = rulesObj.pattern.value;
    //         constraints.messages[elemObj.name].pattern = rulesObj.pattern.message;
    //       }
    //       if (rulesObj.equalTo) {
    //         constraints.rules[elemObj.name].equalTo = '#' + rulesObj.equalTo.value;
    //         constraints.messages[elemObj.name].equalTo = rulesObj.equalTo.message;
    //       }
    //       if (rulesObj.minlength) {
    //         constraints.rules[elemObj.name].minlength = parseInt(rulesObj.minlength.value) || 0;
    //         constraints.messages[elemObj.name].minlength = rulesObj.minlength.message;
    //       }
    //       formObj.elements.push(elemObj);
    //     });

    //     formObj.form = $(form);
    //     formObj.constraints = constraints;
    //     formObj.form.validate(constraints)
    //     this.aemForms.push(formObj);
    //   });
    // }
  }
}