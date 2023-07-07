import 'regenerator-runtime';
import '../styles/style_buttons.css'
// import './ar/state';
import './ar/ar';
import './ar/distance';
// import './ar/image-view';
import './ar/entity-modal';
import './ar/entity-visible';
import swRegister from './utils/sw-register';


window.addEventListener('load', () => {
  swRegister()
})
