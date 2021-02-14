/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 15:53:07
 */
import {
  request
} from './request'

export function getDataByPageAndSize(page = 1, size = 10) {
  return request({
    url: `/user/search/${page}/${size}`,
    method: 'post'
  })
}

export function getRolesById(id) {
  return request({
    url: `/authority/getRoleAuthority?userid=${id}`,
  })
}

export function setRolesById(data) {
  let {
    userId,
    roleIds
  } = data
  return request({
    url: `/authority/giveRole2User?userId=${userId}&roleIds=${roleIds}`,
    method: 'post',
  })
}

export function searchById(id) {
  return request({
    url: `/user/${id}`
  })
}

export function search(data) {
  return request({
    url: `/user/search`,
    method: 'post',
    data
  })
}

export function editData(data) {
  return request({
    url: `/user/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/user/${id}`,
    method: 'delete'
  })
}

export function appendData(data) {
  return request({
    url: `/user/addAdmin`,
    method: 'post',
    data
  })
}