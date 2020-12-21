import Vendors from './../../../../assets/scripts/_vendors.es';
import SiteHeader from '../../../../components/siteheader/_index.es';
import SiteFooter from '../../../../components/sitefooter/_index.es';
import {_AddClass, _RemoveClass, _LandscapeCSSClass, _PortraitCSSClass, _GetElemDimensions} from './../../../../assets/scripts/_constants.es';
import ColorThief from 'colorthief/dist/color-thief.mjs';

let bodyElem;
let bgElements;
let bgElementDimension;
let imgElem;

class GlobalScripts {
  constructor() {}
  imgLoadEvent() {
    const colorThief = new ColorThief();
    if ((bgElements || []).length > 0) {
      bgElements.forEach(element => {
        imgElem = element.querySelector('img');
        if (imgElem) {
          if (imgElem.complete) {
            console.log('===============colorThief complete', colorThief.getColor(imgElem));
          } else {
            imgElem.addEventListener('load', function() {
              console.log('===============colorThief load', colorThief.getColor(imgElem));
            });
          }
        }
      });
    }
  }
  reportWindowOrientation() {
    setTimeout(() => {
      if ((bgElements || []).length > 0) {
        bgElements.forEach(element => {
          bgElementDimension = _GetElemDimensions(element);
          if (bgElementDimension.height > bgElementDimension.width) {
            _AddClass(element, _PortraitCSSClass);
            _RemoveClass(element, _LandscapeCSSClass);
          }
          if (bgElementDimension.height <= bgElementDimension.width) {
            _RemoveClass(element, _PortraitCSSClass);
            _AddClass(element, _LandscapeCSSClass);
          }
        });
      }
      if (bodyElem && window.innerHeight > window.innerWidth) {
        _AddClass(bodyElem, _PortraitCSSClass);
        _RemoveClass(bodyElem, _LandscapeCSSClass);
      }
      if (bodyElem && window.innerHeight <= window.innerWidth) {
        _RemoveClass(bodyElem, _PortraitCSSClass);
        _AddClass(bodyElem, _LandscapeCSSClass);
      }
    }, 0);
  }
  __initHeader() {
    bodyElem = document.querySelector('body');
    bgElements = Array.prototype.slice.call(document.querySelectorAll('.bg-img-wrap') || []);
    this.reportWindowOrientation();
    window.addEventListener('resize', this.reportWindowOrientation, false);
    this.imgLoadEvent();

    const siteheader = new SiteHeader();
    const vendors = new Vendors();
    siteheader.__init();
    vendors.__init();
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
