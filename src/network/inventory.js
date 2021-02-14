/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 14:17:19
 */
import {
  request
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/repository/search/${page}/${size}`,
    method: 'post'
  })
}

export function searchById(id) {
  return request({
    url: `/repository/${id}`
  })
}

export function search(data) {
  return request({
    url: `/repository/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/repository/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/repository/${id}`,
    method: 'delete'
  })
}

export function appendData(data) {
  return request({
    url: `/repository`,
    method: 'post',
    data
  })
}

export function getInventoryAll() {
  return request({
    url: `/repository`
  })
}