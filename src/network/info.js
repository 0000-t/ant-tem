/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-06 10:18:00
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 10:22:17
 */
import {
  request,
  IP
} from './request'

export function getStatistic(time) {
  return request({
    url: `/statistic`,
    params: {
      time
    }
  })
}

export function getProfit(time) {
  return request({
    url: `/statistic/profit`,
    params: {
      time
    }
  })
}