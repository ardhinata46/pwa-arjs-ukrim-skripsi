import 'regenerator-runtime';
import '../styles/style_buttons.css';
import '../styles/message.css'
import './ar/ar';
import './ar/distance';
import './ar/entity-modal';
import './ar/entity-visible';
import swRegister from './utils/sw-register';


window.addEventListener('load', () => {
  swRegister()
})
