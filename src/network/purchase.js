/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 15:43:36
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
    purchase,
    purchaseDetail
  } = data;

  const result = await axios.post(`${IP}/purchase`, purchase)
  console.log(result);

  if (!result.data.flag) {
    hide && hide()
    return void error("请求失败", 1)
  }

  purchaseDetail.forEach(item => item.dealingId = result.data.data)

  return Promise.all([...purchaseDetail.map(item => appendDetail(item))])
}

export function appendDetail(data) {
  return axios.post(`${IP}/purchaseDetail`, data)
}

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/purchase/search/${page}/${size}`,
    method: 'post'
  })
}

export function searchById(id) {
  return request({
    url: `/purchase/${id}`
  })
}

export function search(data) {
  return request({
    url: `/purchase/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/purchase/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/purchase/${id}`,
    method: 'delete'
  })
}