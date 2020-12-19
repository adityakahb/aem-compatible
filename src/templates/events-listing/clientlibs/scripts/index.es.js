import "core-js/stable";
import stickybits from 'stickybits';
import GridCarousel from '../../../../components/grid-carousel/_index.es';
import {_HeaderHeightMobile, _HeaderHeightDesktop, _HeaderBreakpoint} from './../../../../assets/scripts/_constants.es';

let stickySearchFilters;
let stickySearchElem;

class EventsListing {
  constructor() {}
  resetAndInvokeSticky() {
    if (stickySearchElem) {
      if (window.innerWidth < parseInt(_HeaderBreakpoint)) {
        if (stickySearchFilters) {
          stickySearchFilters.cleanup();
        }
        stickySearchFilters = stickybits('#sticky_events', {stickyBitStickyOffset: parseInt(_HeaderHeightMobile), useStickyClasses: true});
      } else {
        if (stickySearchFilters) {
          stickySearchFilters.cleanup();
        }
        stickySearchFilters = stickybits('#sticky_events', {stickyBitStickyOffset: parseInt(_HeaderHeightDesktop), useStickyClasses: true});
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