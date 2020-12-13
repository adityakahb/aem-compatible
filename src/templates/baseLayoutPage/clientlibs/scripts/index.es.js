import "core-js/stable";
import SiteHeader from '../../../../components/siteheader/_index.es';

document.addEventListener( 'DOMContentLoaded', function () {
  const siteheader = new SiteHeader();
  siteheader.__init();
});