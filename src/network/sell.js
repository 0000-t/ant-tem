/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 09:16:55
 */
import Vue from 'vue'
import axios from 'axios'
import {
  request,
  IP
} from './request'

let error = Vue.prototype.$message.error;

export async function appendData(data, hide) {
  let {
    order,
    detail
  } = data;

  const result = await axios.post(`${IP}/order`, order)

  console.log(result.data)

  if (!result.data.flag) {
    hide && hide()
    return void error("请求失败", 1)
  }

  detail.forEach(item => item.dealingId = result.data.data)

  return Promise.all([...detail.map(item => appendDetail(item))])
}

export function appendDetail(data) {
  return axios.post(`${IP}/detail`, data)
}

export function getAll() {
  return request({
    url: `/order`
  })
}

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/order/search/${page}/${size}`,
    method: 'post'
  })
}

export function searchById(id) {
  return request({
    url: `/order/${id}`
  })
}

export function search(data) {
  return request({
    url: `/order/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/order/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/order/${id}`,
    method: 'delete'
  })
}