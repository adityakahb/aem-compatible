import Vendors from './../../../../assets/scripts/_vendors.es';
import SiteHeader from '../../../../components/siteheader/_index.es';

document.addEventListener( 'DOMContentLoaded', function () {
  const siteheader = new SiteHeader();
  const vendors = new Vendors();
  vendors.__init();
  siteheader.__init();
});