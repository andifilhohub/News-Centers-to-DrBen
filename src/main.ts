import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faSun, faMoon, faSearch, faInfoCircle, faExclamationTriangle,
  faTimesCircle, faTimes, faStar, faBug, faBolt, faUsers,
  faCheck, faCode, faLightbulb, faBook, faHeadset, faListCheck, faComments
} from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

library.add(
  faSun, faMoon, faSearch, faInfoCircle, faExclamationTriangle, 
  faTimesCircle, faTimes, faStar, faBug, faBolt, faUsers,
  faCheck, faCode, faLightbulb, faBook, faHeadset, faListCheck,
  faComments, faThumbsUp, faThumbsDown
)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')