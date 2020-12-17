import "core-js/stable";
import stickybits from 'stickybits';
import GridCarousel from '../../../../components/grid-carousel/_index.es';
import {_HeaderHeightMobile, _HeaderHeightDesktop, _HeaderBreakpoint} from './../../../../assets/scripts/_constants.es';

let stickySearchFilters;
let stickySearchElem;

class SearchResults {
  constructor() {}
  resetAndInvokeSticky() {
    if (stickySearchElem) {
      if (window.innerWidth < parseInt(_HeaderBreakpoint)) {
        if (stickySearchFilters) {
          stickySearchFilters.cleanup();
        }
        stickySearchFilters = stickybits('#sticky_filters', {stickyBitStickyOffset: parseInt(_HeaderHeightMobile)});
        console.log('======stickySearchFilters 1', stickySearchFilters);
      } else {
        if (stickySearchFilters) {
          stickySearchFilters.cleanup();
        }
        stickySearchFilters = stickybits('#sticky_filters', {stickyBitStickyOffset: parseInt(_HeaderHeightDesktop)});
        console.log('======stickySearchFilters 2', stickySearchFilters);
      }
    }
  }
  __init() {
    const gridCarousel = new GridCarousel();
    stickySearchElem = document.getElementById('sticky_filters');
    gridCarousel.__init();
    this.resetAndInvokeSticky();
    window.addEventListener('resize', this.resetAndInvokeSticky, false);
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const searchResults = new SearchResults();
  searchResults.__init();
});