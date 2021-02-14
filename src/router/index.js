import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode: 'history'
})

//还原仓库状态
function setStatus() {
  if (sessionStorage.getItem("store")) {
    store.replaceState(
      Object.assign({},
        store.state,
        JSON.parse(sessionStorage.getItem("store"))
      )
    );
  }
}

//清空以下状态
function emptyState() {
  store.commit('setRouteList', {
    routeList: []
  })
  store.commit('setPower', {
    power: []
  })
}

router.beforeEach((to, from, next) => {
  let power = store.getters.getPower;
  //判断用户的权限，无权限 则 获取浏览器中的缓存
  if (!power.length) {
    setStatus()
    power = store.getters.getPower;
  }
  //获取目标页面
  let path = to.path.split('/')[1]
  //判断是否拥有该页面的权限
  if (to.path === "/" || power.indexOf(path) > -1) return next();
  //无权限 则跳转到登录页面
  if (to.path === '/login') {
    sessionStorage.removeItem("store");
    emptyState()
    next();
  } else {
    next('/login');
  }
})

export default router