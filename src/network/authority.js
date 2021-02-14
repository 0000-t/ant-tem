/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 16:15:30
 */
import {
  request
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/authority/search/${page}/${size}`,
    method: 'get'
  })
}

export function searchById(id) {
  return request({
    url: `/authority/${id}`
  })
}

export function search(data) {
  return request({
    url: `/authority/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/authority`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/authority/${id}`,
    method: 'delete'
  })
}

export function appendData(data) {
  return request({
    url: `/authority`,
    method: 'post',
    data
  })
}