/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-01-30 14:38:27
 */
import {
  request
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/detail/search/${page}/${size}`,
    method: 'post'
  })
}

export function searchByDealingId(data) {
  return request({
    url: `/detail/search`,
    method: 'post',
    data
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
    url: `/detail/${data.id}`,
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