import './normalize.css'
import './style.scss'
import './icons/icomoon/style.css'

import bg_mobile from './images/bg-mobile.png'
import bg_desktop from './images/bg-desktop.png'

const background = document.querySelector('div.background')
const is_mobile = undefined;

const resize = () => {
  if(window.innerWidth > 992 && (is_mobile == undefined || is_mobile)) {
    background.style.backgroundImage = `url(${ bg_desktop })`
  }else if(window.innerWidth <= 992 && (is_mobile == undefined || !is_mobile)) {
    background.style.backgroundImage = `url(${ bg_mobile })`
  }
}

resize()
//
window.onresize = resize
