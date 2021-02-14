/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-20 11:59:16
 * @LastEditors: tao
 * @LastEditTime: 2021-01-31 23:22:42
 */
import {
  request
} from './request'

export function getParameters(id = 2) {
  return request({
    url: `/info/${id}`
  })
}
export function setParameters(data) {
  return request({
    url: `/info/${data.id}`,
    method: 'put',
    data
  })
}