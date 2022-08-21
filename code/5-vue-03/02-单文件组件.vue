<template>
  <div class="box">
      <a href="http://">百度的链接</a>
      <a href="http://">淘宝的链接</a>
      <a href="#">{{content}}</a>
  </div>
</template>



<style scoped>
    /* scoped 局部范围;  有了scoped 的修饰 代表当前的样式 只在你的组件有效 */
    .box{
        height: 300px;
        color: red;
        background: green;
    }
</style>


<script>
// 组件导出
    export default {
        name:"linkcom",
        data:function (){
            return{
                content:0
            }
        },
        methods:{
            
        }
    }
</script>

