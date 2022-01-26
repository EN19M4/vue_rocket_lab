import Vue from 'vue'
import Vuex from 'vuex'
import employee from './jsonEmployees/employee'

Vue.use(Vuex)

export default new Vuex.Store(employee)