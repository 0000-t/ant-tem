/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-08 23:54:47
 */
import {
  request,
  IP
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/detail/search/${page}/${size}`,
    method: 'post'
  })
}

export function searchById(id) {
  return request({
    url: `/detail/${id}`
  })
}

export function search(data) {
  return request({
    url: `/detail/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/detail`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/detail/${id}`,
    method: 'delete'
  })
}

export function appendData(data) {
  return request({
    url: `/detail`,
    method: 'post',
    data
  })
}

export function getAll() {
  return request({
    url: `/detail`
  })
}