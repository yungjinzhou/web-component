

<template>
    <div class="box"  @click="fnAlert">
        BBBBBBBBBBB
    </div>
</template>

<style scoped>
    .box{
        height: 30px;
        background: green;
        color: white;
        text-align: center;
        font-size:20px;
    }
</style>

<script>
export default {
  name:'B',
  methods:{
      fnAlert:function () {
          alert('BBBBBBBBBB')
        }
  }

}
</script>


