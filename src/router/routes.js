/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 11:12:01
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 14:56:22
 */
const CommodityInventory = () => import('views/inventory/CommodityInventory')
const CommodityInfo = () => import('views/basis/info/CommodityInfo')
const CommoditySell = () => import('views/sell/sell/CommoditySell')
const SellDetail = () => import('views/sell/sellDetail/SellDetail')
const CommoditySellBack = () => import('views/sell/sellBack/CommoditySellBack')
const SellCount = () => import("views/chart/count/SellCount")
const SellInfo = () => import("views/chart/info/SellInfo")
const Day = () => import("views/chart/day/Day")
const Month = () => import("views/chart/month/Month")
const Profit = () => import("views/chart/profit/Profit")
// const Client = () => import("views/client/Client")
const Purchase = () => import("views/purchase/Purchase")
const PurchaseInfo = () => import("views/purchaseInfo/PurchaseInfo")
const Gift = () => import("views/basis/gift/Gift")
const Store = () => import("views/basis/store/Store")
const Supplier = () => import("views/basis/supplier/Supplier")
const Login = () => import("views/login/Login")
const User = () => import("views/user/user/User")
const Role = () => import("views/user/role/Role")
const Authority = () => import("views/user/authority/Authority")

const routes = [{
  path: '',
  redirect: '/commodityInventory'
}, {
  path: '/commodityInventory',
  component: CommodityInventory
}, {
  path: '/commodityInfo',
  component: CommodityInfo
}, {
  path: '/commoditySell',
  component: CommoditySell
}, {
  path: '/commoditySellBack',
  component: CommoditySellBack
}, {
  path: '/sellCount',
  component: SellCount
  // }, {
  //   path: '/sellInfo',
  //   component: SellInfo
}, {
  path: '/profit',
  component: Profit
}, {
  //   path: '/client',
  //   component: Client
  // }, {
  path: '/gift',
  component: Gift
}, {
  path: '/store',
  component: Store
}, {
  path: '/supplier',
  component: Supplier
}, {
  path: '/user',
  component: User
}, {
  path: '/authority',
  component: Authority
}, {
  path: '/role',
  component: Role
}, {
  path: '/purchase',
  component: Purchase
}, {
  path: '/month',
  component: Month
}, {
  path: '/day',
  component: Day
}, {
  path: '/login',
  component: Login
}, {
  path: '/sellDetail',
  component: SellDetail
}, {
  path: '/purchaseInfo',
  component: PurchaseInfo
}]

export default routes