import SiteHeader from '../../../../components/siteheader/_index.es';
import SiteFooter from '../../../../components/sitefooter/_index.es';
import {__aemAddClass, __aemRemoveClass, __aemLandscapeCSSClass, __aemPortraitCSSClass, __aemGetElementDimensions} from './../../../../assets/scripts/_constants.es';

let bodyElem;
let bgElements;
let bgElementDimension;

export default class GlobalScripts {
  constructor() {}
  reportWindowOrientation() {
    setTimeout(() => {
      if ((bgElements || []).length > 0) {
        bgElements.forEach(element => {
          bgElementDimension = __aemGetElementDimensions(element);
          if (bgElementDimension.height > bgElementDimension.width) {
            __aemAddClass(element, __aemPortraitCSSClass);
            __aemRemoveClass(element, __aemLandscapeCSSClass);
          }
          if (bgElementDimension.height <= bgElementDimension.width) {
            __aemRemoveClass(element, __aemPortraitCSSClass);
            __aemAddClass(element, __aemLandscapeCSSClass);
          }
        });
      }
      if (bodyElem && window.innerHeight > window.innerWidth) {
        __aemAddClass(bodyElem, __aemPortraitCSSClass);
        __aemRemoveClass(bodyElem, __aemLandscapeCSSClass);
      }
      if (bodyElem && window.innerHeight <= window.innerWidth) {
        __aemRemoveClass(bodyElem, __aemPortraitCSSClass);
        __aemAddClass(bodyElem, __aemLandscapeCSSClass);
      }
    }, 0);
  }
  __initHeader() {
    bodyElem = document.querySelector('body');
    bgElements = Array.prototype.slice.call(document.querySelectorAll('.bg-img-wrap') || []);
    this.reportWindowOrientation();
    window.addEventListener('resize', this.reportWindowOrientation, false);

    const siteheader = new SiteHeader();
    siteheader.__init();
  }
  __init() {
    const sitefooter = new SiteFooter();
    sitefooter.__init();
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const globalscripts = new GlobalScripts();
  globalscripts.__initHeader();
});

window.addEventListener('load', function() {
  const globalscripts = new GlobalScripts();
  globalscripts.__init();
});
