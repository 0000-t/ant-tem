/*
 * @Description: 引入 ant 组件
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-01-30 16:01:05
 */
import Vue from 'vue'
import {
  Button,
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Avatar,
  Dropdown,
  Table,
  Input,
  Popconfirm,
  Select,
  Modal,
  Form,
  Radio,
  DatePicker,
  Pagination,
  Upload,
  message,
  ConfigProvider,
  Checkbox,
  Row,
  Col
} from 'ant-design-vue';

Vue.use(ConfigProvider)
Vue.use(Checkbox)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Radio)
Vue.use(Upload)
Vue.use(DatePicker)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Icon)
Vue.use(Avatar)
Vue.use(Dropdown)
Vue.use(Table)
Vue.use(Input)
Vue.use(Popconfirm)
Vue.use(Select)
Vue.use(Modal)
Vue.use(Form)

Vue.prototype.$message = message;
// Vue.prototype

// console.log(Vue.prototype)