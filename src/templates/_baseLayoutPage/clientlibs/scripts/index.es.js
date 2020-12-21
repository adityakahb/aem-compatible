import Vendors from './../../../../assets/scripts/_vendors.es';
import SiteHeader from '../../../../components/siteheader/_index.es';
import SiteFooter from '../../../../components/sitefooter/_index.es';
import {_AddClass, _RemoveClass, _LandscapeCSSClass, _PortraitCSSClass, _GetElemDimensions} from './../../../../assets/scripts/_constants.es';

let bodyElem;
let bgElements;
let bgElementDimension;
let imgElem;
let bgMaskElem;

class GlobalScripts {
  constructor() {}
  imgLoadEvent() {
    if ((bgElements || []).length > 0) {
      bgElements.forEach(element => {
        imgElem = element.querySelector('img');
        bgMaskElem = element.querySelector('.bg-img-wrap-cover');
        if (imgElem && !(bgMaskElem || {}).getAttribute('data-mask')) {
          // try {
          //   if (imgElem.complete) {
          //     thisColor = _GetAverageColor(imgElem);
          //     if (thisColor) {
          //       bgMaskElem.setAttribute('data-mask', _RGBToHex(thisColor.r, thisColor.g, thisColor.b));
          //       console.log('======', `rgba(${thisColor.r}, ${thisColor.g}, ${thisColor.b}, 0.65)`);
          //       bgMaskElem.style.backgroundColor = `rgba(${thisColor.r}, ${thisColor.g}, ${thisColor.b}, 0.65)`;
          //     } else {
          //       bgMaskElem.setAttribute('data-mask', 'na');
          //     }
          //   } else {
          //     imgElem.addEventListener('load', function() {
          //       thisColor = _GetAverageColor(imgElem);
          //       if (thisColor) {
          //         bgMaskElem.setAttribute('data-mask', _RGBToHex(thisColor.r, thisColor.g, thisColor.b));
          //         console.log('======', `rgba(${thisColor.r}, ${thisColor.g}, ${thisColor.b}, 0.65)`);
          //         bgMaskElem.style.backgroundColor = `rgba(${thisColor.r}, ${thisColor.g}, ${thisColor.b}, 0.65)`;
          //       } else {
          //         bgMaskElem.setAttribute('data-mask', 'na');
          //       }
          //     });
          //   }
          // } catch (e) {
          //   console.log('CORS issue on ' + imgElem.getAttribute('src'));
          // }
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
