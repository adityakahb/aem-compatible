import 'bootstrap/js/dist/dropdown';
import AMegMen from 'amegmen';

export default class SiteHeader {
    constructor() {}
    init = () => {
      const  amegmen_instance = AMegMen.Root.getInstance();
      const  amegmen_options = {};
      amegmen_instance.init("#__amegmen_root", amegmen_options);
      console.log('==========amegmen_instance', amegmen_instance);
    };
};