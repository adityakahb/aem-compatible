import lazysizes from 'lazysizes';
import picturefill from 'picturefill';

class HeadScripts {
  constructor() {}
  
  __init() {
    if(typeof picturefill === "function") {
      picturefill();
    }
  }
}

const hscripts = new HeadScripts();
hscripts.__init();