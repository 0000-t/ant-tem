/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 16:08:54
 */
import {
  request
} from './request'

export function getPowerById(id) {
  return request({
    url: `/authority/getRoleAuthority?roleId=${id}`,
  })
}

export function setPowerById(data) {
  console.log(data.list)
  return request({
    url: `/authority/giveRight2Role?rightIds=${data.list}&roleId=${data.id}`,
    method: 'post',
  })
}

export function getAllRoles() {
  return request({
    url: `/role`
  })
}

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/role/search/${page}/${size}`,
    method: 'get'
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