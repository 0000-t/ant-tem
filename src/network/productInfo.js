/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 11:08:01
 */
import {
  request
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/product/search/${page}/${size}`,
    method: 'post'
  })
}

export function getAll() {
  return request({
    url: `/product`
  })
}

export function searchById(id) {
  return request({
    url: `/product/${id}`
  })
}

export function search(data) {
  return request({
    url: `/product/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/product/update`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/product/delete/${id}`,
    method: 'delete'
  })
}

export function appendData(data) {
  return request({
    url: `/product/add`,
    method: 'post',
    data
  })
}