import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './modules/Settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Settings
  }
})
