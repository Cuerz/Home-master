<template>
    <el-container style="height:100%">
        <!--  自定义宽度 auto-->
  <el-aside width="auto">
      <common-aside></common-aside>  
      <!-- 在Aside引入CommonAside 组件 注意命名规范 这里要求小写 common-aside -->
  </el-aside>
  <el-container>
    <el-header>
        <common-header />
    
    </el-header>
        <common-tag/>
    <el-main>
        <router-view></router-view>
</el-main>
  </el-container>
</el-container>
</template>
<script>
import CommonAside from '../src/components/CommonAside.vue' //引入组件ConmmonAside
import CommonHeader from '../src/components/CommonHeader.vue' 
import CommonTag from '../src/components/CommonTag.vue'
export default {
    name:'Home',
    components:{
        CommonAside,
        CommonHeader,
        CommonTag
    },
    data(){
        return {}
    }
}
</script>
<style lang="less" scoped>
.el-header{
    background: black;

}
.el-main{
    padding-top: 0;
}
</style>
