import "core-js/stable";
import stickybits from 'stickybits';
import GridCarousel from '../../../../components/grid-carousel/_index.es';
import {__aemHeaderHeightMobile, __aemHeaderHeightDesktop, __aemHeaderBreakpoint} from './../../../../assets/scripts/_constants.es';

let stickySearchFilters;
let stickySearchElem;

class EventsListing {
  constructor() {}
  resetAndInvokeSticky() {
    if (stickySearchElem) {
      if (window.innerWidth < parseInt(__aemHeaderBreakpoint)) {
        if (stickySearchFilters) {
          stickySearchFilters.cleanup();
        }
        stickySearchFilters = stickybits('#sticky_events', {stickyBitStickyOffset: parseInt(__aemHeaderHeightMobile), useStickyClasses: true});
      } else {
        if (stickySearchFilters) {
          stickySearchFilters.cleanup();
        }
        stickySearchFilters = stickybits('#sticky_events', {stickyBitStickyOffset: parseInt(__aemHeaderHeightDesktop), useStickyClasses: true});
      }
    }
  }
  __init() {
    const gridCarousel = new GridCarousel();
    stickySearchElem = document.getElementById('sticky_events');
    gridCarousel.__init();
    this.resetAndInvokeSticky();
    window.addEventListener('resize', this.resetAndInvokeSticky, false);
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const eventsListing = new EventsListing();
  eventsListing.__init();
});