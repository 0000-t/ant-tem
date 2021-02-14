/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 10:31:05
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 14:56:40
 */

export const power = [
  "sellCount",
  // "sellInfo",
  // "profit",
  "store",
  "supplier",
  // "client",
  "commodityInfo",
  "commodityInventory",
  "commoditySell",
  "commoditySellBack",
  "gift",
  "user",
  "authority",
  "role",
  "purchase",
  "day",
  "month",
  "purchaseInfo",
  "sellDetail"
]

export const routeSet = {
  "sellCount": {
    path: "sellCount",
    name: "销售统计"
  },
  // "sellInfo": {
  //   path: "sellInfo",
  //   name: "销售日报"
  // },
  // "profit": {
  //   path: "profit",
  //   name: "营业利润"
  // },
  "store": {
    path: "store",
    name: "便利店信息"
  },
  "supplier": {
    path: "supplier",
    name: "供应商信息"
  },
  // "client": {
  //   path: "client",
  //   name: "客户关系信息"
  // },
  "commodityInfo": {
    path: "commodityInfo",
    name: "商品信息"
  },
  "commodityInventory": {
    path: "commodityInventory",
    name: "库存管理"
  },
  "commoditySell": {
    path: "commoditySell",
    name: "商品销售"
  },
  "commoditySellBack": {
    path: "commoditySellBack",
    name: "商品退货管理"
  },
  "gift": {
    path: "gift",
    name: "赠品管理"
  },
  "user": {
    path: "user",
    name: "用户管理"
  },
  "role": {
    path: "role",
    name: "角色管理"
  },
  "authority": {
    path: "authority",
    name: "权限管理"
  },
  "purchase": {
    path: 'purchase',
    name: '采购单'
  },
  "day": {
    path: "day",
    name: "日销售统计"
  },
  "month": {
    path: "month",
    name: "月销售统计"
  },
  "purchaseInfo": {
    path: "purchaseInfo",
    name: "采购明细"
  },
  "sellDetail": {
    path: "sellDetail",
    name: "交易明细"
  },
}

export const nav = {
  "sellCount": 0,
  // "profit": 0,
  // "sellInfo": 0,
  "day": 0,
  "month": 0,

  "commoditySell": 1,
  "commoditySellBack": 1,
  "sellDetail": 1,

  "store": 2,
  "supplier": 2,
  "commodityInfo": 2,
  "gift": 2,

  "user": 3,
  "authority": 3,
  "role": 3,

  "purchase": 4,
  "purchaseInfo": 4
}