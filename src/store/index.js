/*
 * @Description: 状态管理
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 21:03:47
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 16:03:45
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  status: null,
  isLogin: false,
  power: [],
  routeList: [],
  user: {}
}

const store = new Vuex.Store({
  state,
  getters: {
    getStatus(state) {
      return state.status
    },
    getIsLogin(state) {
      return state.isLogin;
    },
    getPower(state) {
      return state.power
    },
    getRouteList(state) {
      return state.routeList
    },
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    setStatus(state, payload) {
      state.status = payload.status;
    },
    setIsLogin(state, payload) {
      state.isLogin = payload.login
    },
    setPower(state, payload) {
      state.power = payload.power
    },
    setRouteList(state, payload) {
      state.routeList = payload.routeList
    },
    setUser(state, payload) {
      state.user = payload.user
    }
  }
})

export default store