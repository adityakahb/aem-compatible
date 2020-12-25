export const __aemHeaderHeightMobile = '64';
export const __aemHeaderHeightDesktop = '96';
export const __aemHeaderBreakpoint = '768';
export const __aemLandscapeCSSClass = 'is-landscape';
export const __aemPortraitCSSClass = 'is-portrait';
export const __aemFormValidElementClass = 'is-valid';
export const __aemFormInvalidElementClass = 'is-invalid';
export const __aemDefaultCarouselOptions = {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next>button',
    prevEl: '.swiper-button-prev>button',
  },
  responsive4: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  }
};
export const __aemGetElementDimensions = function (elem) {
  try {
    let docElem, win, box = {
        top: 0,
        left: 0
      },
      doc = elem && elem.ownerDocument;

    let isWindow = (obj) => {
      return obj != null && obj === obj.window;
    };

    let getWindow = (elem) => {
      return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    };

    docElem = doc.documentElement;
    if (typeof elem.getBoundingClientRect !== typeof undefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft,
      width: box.width ? box.width : 0,
      height: box.height ? box.height : 0
    };
  } catch (e) {
    return {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }
};
export const __aemStringTrim = function (str) {
  return str.replace(/^\s+|\s+$/g, '');
};
export const _ArrayCall = function (arr) {
  try {
    return Array.prototype.slice.call(arr);
  } catch (e) {
    return [];
  }
};
export const __aemHasClass = function (element, cls) {
  if (element) {
    let clsarr = element.className.split(' ');
    return clsarr.indexOf(cls) > -1 ? true : false;
  }
  return false;
};
export const __aemAddClass = function (element, cls) {
  if (element) {
    let clsarr = cls.split(' ');
    let clsarrLength = clsarr.length;
    for (let i = 0; i < clsarrLength; i++) {
      let thiscls = clsarr[i];
      if (!__aemHasClass(element, thiscls)) {
        element.className += ' ' + thiscls;
      }
    }
    element.className = __aemStringTrim(element.className);
  }
};
export const __aemRemoveClass = function (element, cls) {
  if (element) {
    let clsarr = cls.split(' ');
    let curclass = element.className.split(' ');
    let curclassLength = curclass.length;
    for (let i = 0; i < curclassLength; i++) {
      let thiscls = curclass[i];
      if (clsarr.indexOf(thiscls) > -1) {
        curclass.splice(i, 1);
        i--;
      }
    }
    element.className = __aemStringTrim(curclass.join(' '));
  }
};