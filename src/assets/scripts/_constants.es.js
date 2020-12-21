export const _HeaderHeightMobile = '64';
export const _HeaderHeightDesktop = '96';
export const _HeaderBreakpoint = '768';
export const _LandscapeCSSClass = 'is-landscape';
export const _PortraitCSSClass = 'is-portrait';
export const _DefaultCarouselOptions = {
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
export const _GetAverageColor = imageElement => { 
  
  // Create the canavs element 
  let canvas = document.createElement('canvas'), 

      // Get the 2D context of the canvas 
      context = canvas.getContext && canvas.getContext('2d'), 
      imgData, width, height, 
      length, 

      // Define variables for storing 
      // the individual red, blue and 
      // green colors 
      rgb = { r: 0, g: 0, b: 0 }, 

      // Define variable for the  
      // total number of colors 
      count = 0; 

  // Set the height and width equal 
  // to that of the canvas and the image 
  height = canvas.height = 
      imageElement.naturalHeight || 
      imageElement.offsetHeight || 
      imageElement.height; 
  width = canvas.width = 
      imageElement.naturalWidth || 
      imageElement.offsetWidth || 
      imageElement.width; 

  // Draw the image to the canvas 
  context.drawImage(imageElement, 0, 0); 

  // Get the data of the image 
  imgData = context.getImageData(0, 0, width, height); 

  // Get the length of image data object 
  length = imgData.data.length; 

  for (let i = 0; i < length; i += 4) { 

      // Sum all values of red colour 
      rgb.r += imgData.data[i]; 

      // Sum all values of green colour 
      rgb.g += imgData.data[i + 1]; 

      // Sum all values of blue colour 
      rgb.b += imgData.data[i + 2]; 

      // Increment the total number of 
      // values of rgb colours 
      count++; 
  } 

  // Find the average of red 
  rgb.r = Math.floor(rgb.r / count); 

  // Find the average of green 
  rgb.g = Math.floor(rgb.g / count); 

  // Find the average of blue 
  rgb.b = Math.floor(rgb.b / count); 

  return rgb; 
};
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