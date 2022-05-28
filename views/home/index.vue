<template>
<el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top:5px">
    <el-card shadow="hover">
        <div class="user">
            <img :src="userImg" >
            <div class="userinfo">
                <p class="name">Admin</p>
                <p class="acess">超级管理员</p>
            </div>
        </div>
        <div class="login-info">
            <p>上次登陆的时间:<span>2021-5-20</span></p>
            <p>上次登陆的地点:<span>厦门</span></p>

        </div>
    </el-card>
    <el-card style="margin-top:20px; height:400px;">
        <el-table :data="tableData">
            <el-table-column v-for="(val,key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
            >

            </el-table-column>
        </el-table>

    </el-card>
    </el-col>
    <el-col sytle="margin-top:20px" :span="16" >
        <div class="num">
            <el-card v-for="item in countData" :key="item.name" :body-style="{display:flex,padding:0}">
                <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                <div class="detail" >
                            <p class="num" style="margin-left:80px ">{{item.value}}</p>
                            <p class="txt">{{item.name}}</p>
                </div>
            </el-card>
        </div>
        <el-card style="height:180px ">
            <!-- 折线图  -->
            <!-- <div style="height:200px" ref="echarts" ></div> -->
            <echart :chartData="echartData.order" style="height:200px" />
        </el-card>

        <div class="graph">
            <el-card style="height:200px">
                <!-- 柱状图 -->
                <!-- <div style="height:200px" ref="userEcharts"></div> -->
                 <echart :chartData="echartData.user" style="height:200px" />
            </el-card>

            <el-card style="height:200px">
                <!-- 饼图 -->
                    <!-- <div style="height:150px" ref="videoEcharts"></div> -->
                    <echart :chartData="echartData.video"  :isAxisChart="false"  style="height:150px" />
            </el-card>
        </div>

    </el-col>
</el-row>
</template>

<script>



import {getData} from '../../api/data.js'
// import * as echarts from 'echarts'

import Echart from '../../src/components/ECharts'

export default {
    name:'home',
    components:{
        Echart
    },
    data(){
        return {
            userImg:require('../../src/assets/images/user.png'),
            tableData:   
            [
            {
                name: 'oppo',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            },
            {
                name: 'vivo',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            },
            {
                name: '苹果',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            },
            {
                name: '小米',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            },
            {
                name: '三星',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
          },
          {
            name: '魅族',
           todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          }
        ],
            tableLabel:{
                name:'课程',
                todayBuy:'今日购买',
                monthBuy:'本月购买',
                totalBuy:'总购买'
            },
            countData: [
            {
            name: "今日支付订单",
            value: 1234,
            icon: "success",
            color: "#2ec7c9",
            },
            {
            name: "今日收藏订单",
            value: 210,
            icon: "star-on",
            color: "#ffb980",
            },
            {
            name: "今日未支付订单",
            value: 1234,
            icon: "s-goods",
            color: "#5ab1ef",
            },
            {
            name: "本月支付订单",
            value: 1234,
            icon: "success",
            color: "#2ec7c9",
            },
            {
            name: "本月收藏订单",
            value: 210,
            icon: "star-on",
            color: "#ffb980",
            },
            {
            name: "本月未支付订单",
            value: 1234,
            icon: "s-goods",
            color: "#5ab1ef",
            },
        ],
        echartData:{
            order:{
                xData:[],
                series:[]
            },
            user:{
                xData:[],
                series:[]
            },
            video:{
                series:[]
            }
        }

        }
    },
    mounted(){
       getData().then(res=>{
           const{code,data}=res.data
           if(code===20000){
               this.tableData=data.tableData
               const order=data.orderData
               const xData=order.date
               const keyAarry= Object.keys(order.data[0])
               const series=[]
               keyAarry.forEach(key=>{
                   series.push({
                       name:key,
                       data:order.data.map(item=>item[key]),
                       type:'line'

                   })
               })
            //    拿到数据作为下x,y轴  传值用法 
            //    const option={
            //        xAxis:{
            //            data:xData
            //        },
            //        yAxis:{
                      
            //           },
            //            legend:{
            //                data:keyAarry
            //            },
            //        series
            //        }

            // 组件用法
                   this.echartData.order.xData=xData
                   this.echartData.order.series=series
            //  const E=echarts.init(this.$refs.echarts)
            //  E.setOption(option)


             //用户图
            //  const userOption = {
            // legend: {
            //     // 图例文字颜色
            //     textStyle: {
            //     color: "#333",
            //     },
            // },
            // grid: {
            //     left: "20%",
            // },
            // // 提示框
            // tooltip: {
            //     trigger: "axis",
            // },
            // xAxis: {
            //     type: "category", // 类目轴
            //     data: data.userData.map(item=>item.date),
            //     axisLine: {
            //     lineStyle: {
            //         color: "#17b3a3",
            //     },
            //     },
            //     axisLabel: {
            //     interval: 0,
            //     color: "#333",
            //     },
            // },
            // yAxis: [
            //     {
            //     type: "value",
            //     axisLine: {
            //         lineStyle: {
            //         color: "#17b3a3",
            //         },
            //     },
            //     },
            // ],
            // color: ["#2ec7c9", "#b6a2de"],
            // series: [
            //     {
            //         name:'新增用户',
            //         data:data.userData.map(item =>item.new),
            //         type:'bar'
            //     },
            //     {
            //         name:'活跃用户',
            //         data:data.userData.map(item =>item.active),
            //         type:'bar'
            //         // bar 表示柱状图
            //     }
            // ],
            // }
            this.echartData.user.xData=data.userData.map(item=>item.date)
            this.echartData.user.series=[
                {
                    name:'新增用户',
                    data:data.userData.map(item =>item.new),
                    type:'bar'
                },
                {
                    name:'活跃用户',
                    data:data.userData.map(item =>item.active),
                    type:'bar'
                    // bar 表示柱状图
                }
            ]
        //    const U= echarts.init(this.$refs.userEcharts)
        //    U.setOption(userOption)

           //饼图
        //    const videoOption={
        //   tooltip: {
        //     trigger: "item",
        //   },
        //   color: [
        //     "#0f78f4",
        //     "#dd536b",
        //     "#9462e5",
        //     "#a6a6a6",
        //     "#e1bb22",
        //     "#39c362",
        //     "#3ed1cf",
        //   ],
        //   series: [
        //       {
        //           data:data.videoData,
        //           type:'pie'
        //       }
        //   ],
        // }
        //  const V= echarts.init(this.$refs.videoEcharts)
        //    V.setOption(videoOption)
        this.echartData.video.series=[
              {
                  data:data.videoData,
                  type:'pie'
              }
          ]
           }
         console.log(res);
       })
}
}
</script>