import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhone)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
