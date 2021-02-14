/*
 * @Description: 请求数据
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-15 16:25:21
 * @LastEditors: tao
 * @LastEditTime: 2021-02-10 13:29:45
 */
import axios from 'axios'
import Vue from 'vue'

let loading = Vue.prototype.$message.loading;
let success = Vue.prototype.$message.success;
let error = Vue.prototype.$message.error;

export const IP = "http://47.94.135.125:6081/shop-store"
// export const IP = "http://localhost:9004"


export function request(config) {
  let hide = null;
  const instance = axios.create({
    baseURL: IP,
    // baseURL: '/api',
    timeout: 5000
  });

  //1.发送请求前
  instance.interceptors.request.use(config => {
    hide = loading("加载中", 0)
    return config
  }, err => {
    //提示错误
    hide()
    error("请求失败", 1)
    console.log('发送请求前报错')
  })

  //2.接收数据后
  instance.interceptors.response.use(res => {
    hide()
    if (res.data.flag) {
      // success("加载成功", 1)
    } else {
      error("请求失败", 1)
    }
    return res.data
  }, err => {
    //提示错误
    hide()
    error("请求失败", 1)
    console.log('接收数据报错')
  })

  //3.真正发送网络请求
  return instance(config)
}