/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 11:07:10
 */
import {
  request
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/product/Sendsearch/${page}/${size}`,
    method: 'post'
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