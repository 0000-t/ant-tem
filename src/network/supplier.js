/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-01 14:04:35
 */
import {
  request
} from './request'

export function getAll() {
  return request({
    url: `/vendor`
  })
}

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/vendor/search/${page}/${size}`,
    method: 'post'
  })
}

export function searchById(id) {
  return request({
    url: `/vendor/${id}`
  })
}

export function search(data) {
  return request({
    url: `/vendor/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/vendor/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/vendor/${id}`,
    method: 'delete'
  })
}

export function appendData(data) {
  return request({
    url: `/vendor`,
    method: 'post',
    data
  })
}