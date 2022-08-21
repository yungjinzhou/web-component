<template>
<div class="ap">
      <div class="box">AAAAAAA

       <!-- 3.使用组件 B -->
       <!-- <B></B> -->
   </div>
   <B></B>
</div>
</template>
<script>
// 1.导入 B 对象
import B  from '@/components/B.vue'

export default {
  name:'A',
//   2.注册 组件
  components:{
      B
  }
}
</script>

<style scoped>
    .box{
        height: 100px;
        background: red;
        color: white;
        text-align: center;
        font-size:30px;
    }
</style>


