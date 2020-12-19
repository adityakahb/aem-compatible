export const _HeaderHeightMobile = '64';
export const _HeaderHeightDesktop = '96';
export const _HeaderBreakpoint = '768';
export const _LandscapeCSSClass = 'is-landscape';
export const _PortraitCSSClass = 'is-portrait';
export const _GetElemDimensions = function (elem) {
  try {
    let docElem, win, box = { top: 0, left: 0 }, doc = elem && elem.ownerDocument;
  
    let isWindow = ( obj ) => {
      return obj != null && obj === obj.window;
    };
    
    let getWindow = ( elem ) => {
      return isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
    };
    
    docElem = doc.documentElement;
    if ( typeof elem.getBoundingClientRect !== typeof undefined ) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow( doc );
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
export const _StringTrim = function (str) {
  return str.replace(/^\s+|\s+$/g, '');
};
export const _ArrayCall = function (arr) {
  try {
      return Array.prototype.slice.call(arr);
  }
  catch (e) {
      return [];
  }
};
export const _HasClass = function (element, cls) {
  if (element) {
      var clsarr = element.className.split(' ');
      return clsarr.indexOf(cls) > -1 ? true : false;
  }
  return false;
};
export const _AddClass = function (element, cls) {
  if (element) {
      var clsarr = cls.split(' ');
      var clsarrLength = clsarr.length;
      for (var i = 0; i < clsarrLength; i++) {
          var thiscls = clsarr[i];
          if (!_HasClass(element, thiscls)) {
              element.className += ' ' + thiscls;
          }
      }
      element.className = _StringTrim(element.className);
  }
};
export const _RemoveClass = function (element, cls) {
  if (element) {
      var clsarr = cls.split(' ');
      var curclass = element.className.split(' ');
      var curclassLength = curclass.length;
      for (var i = 0; i < curclassLength; i++) {
          var thiscls = curclass[i];
          if (clsarr.indexOf(thiscls) > -1) {
              curclass.splice(i, 1);
              i--;
          }
      }
      element.className = _StringTrim(curclass.join(' '));
  }
};