import Vue from 'vue'
import App from './App.vue'

import {Numberinput, Field, Button} from 'buefy'
import 'buefy/dist/buefy.css'

const pjson = require('../package.json');

Vue.use(Numberinput)
Vue.use(Field)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount(`#${pjson.name}`)
