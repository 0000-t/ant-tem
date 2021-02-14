/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-30 15:45:01
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 16:01:31
 */
import {
  request
} from './request'

export function loginWeb(data) {
  return request({
    url: `/user/login`,
    method: 'post',
    data,
  })
}