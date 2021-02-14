/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 14:21:50
 */
import {
  request,
  IP
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/purchaseDetail/search/${page}/${size}`,
    method: 'post'
  })
}

export function searchById(id) {
  return request({
    url: `/purchaseDetail/${id}`
  })
}

export function search(data) {
  return request({
    url: `/purchaseDetail/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/purchaseDetail`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/purchaseDetail/${id}`,
    method: 'delete'
  })
}

export function appendData(data) {
  return request({
    url: `/purchaseDetail`,
    method: 'post',
    data
  })
}

export function getPurchaseAll() {
  return request({
    url: `/purchaseDetail`
  })
}