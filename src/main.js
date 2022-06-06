import Vue from 'vue'
import App from './App.vue'
import { Button, Radio, Container, Main, Header, Aside, Menu, 
  Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownItem, 
  DropdownMenu, Row, Col, Card, Table, TableColumn, 
  Breadcrumb, BreadcrumbItem, Tag ,Form,FormItem,Input,Select,Switch,
  DatePicker,Option,Dialog,Pagination,MessageBox,Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 这里通过ipmport 进行按需引入 Vue.use进行使用，这样的方法适合在大的项目中使用  
// 按需引入是有点麻烦 小项目尽量使用全局
import './assets/less/index.less'
import router from '../router'
import store from '../store'

import http from 'axios';
import '../api/mock.js'
Vue.config.silent = true
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)


// 导航守卫逻辑
router.beforeEach((to,from,next)=>{
    store.commit('getToken')
    const token = store.state.user.token
    // 这里权限的逻辑就是不等于token 并且 值为login
    if(!token && to.name!=='login'){
      next({name:'login'})
    }else{
      next()
    }
})




Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
new Vue({
  store,
  router,
  render: (h) => h(App),
  created(){
    store.commit('addMenu',router)
  }

}).$mount('#app')
