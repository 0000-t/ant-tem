/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 10:18:10
 */
import {
  request,
  IP
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/role/search/${page}/${size}`,
    method: 'post'
  })
}

export function searchById(id) {
  return request({
    url: `/role/${id}`
  })
}

export function search(data) {
  return request({
    url: `/role/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/role/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/role/${id}`,
    method: 'delete'
  })
}

export function appendData(data) {
  return request({
    url: `/role`,
    method: 'post',
    data
  })
}