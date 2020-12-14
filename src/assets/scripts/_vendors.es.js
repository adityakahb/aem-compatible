import "core-js/stable";
import picturefill from 'picturefill';

let responsiveImages;
const observer = new MutationObserver((changes) => {
  changes.forEach(change => {
      if(change.attributeName.includes('src')){
        console.dir(img.src);
      }
  });
});

export default class Vendors {
  constructor() {}
  __init() {
    if(typeof picturefill === "function") {
      picturefill();
      responsiveImages = Array.prototype.slice.call(document.querySelectorAll('.bg-img-wrap picture img') || []);
      responsiveImages.forEach(img => {
        console.log('=========img', img);
        let observer = new MutationObserver((changes) => {
          changes.forEach(change => {
              if(change.attributeName.includes('src')){
                console.dir(img.src);
              }
          });
        });
        observer.observe(img, {attributes : true});
      });
    }
  }
}