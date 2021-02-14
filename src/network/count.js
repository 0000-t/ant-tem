/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-06 11:14:58
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 11:20:14
 */
import {
  request
} from './request';

export function getMonthStatistic(time) {
  return request({
    url: `/statistic/MonthStatistic`,
    params: {
      time
    }
  })
}

export function getDayStatistic(time) {
  return request({
    url: `/statistic/dayStatistic`,
    params: {
      time
    }
  })
}