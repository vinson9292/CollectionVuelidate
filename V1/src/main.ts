import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import pl from "./locales/pl.json";
import ja from "./locales/ja.json";
import de from "./locales/de.json";
import 'mdb-vue-ui-kit/css/mdb.min.css';
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone)
const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
      en,
      pl,
      ja,
      de,
    },
  });
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(i18n)
.mount('#app')
