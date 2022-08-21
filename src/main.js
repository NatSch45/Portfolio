import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCode, faMessage, faUserTie, faEnvelopeOpenText, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCode, faMessage, faUserTie, faEnvelopeOpenText, faAnglesRight)

let app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
