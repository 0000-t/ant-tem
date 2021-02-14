/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-01-25 16:37:22
 */
import {
  request
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/changForm/search/${page}/${size}`,
    method: 'post'
  })
}

export function searchById(id) {
  return request({
    url: `/changForm/${id}`
  })
}

export function search(data) {
  return request({
    url: `/changForm/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/changForm/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/changForm/${id}`,
    method: 'delete'
  })
}

export function appendData(data) {
  return request({
    url: `/changForm`,
    method: 'post',
    data
  })
}