<template>
  <div>
    <!--<div class="left">1</div>!-->
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { dev } from '@/assets/js/axios/api'
import Socket from '@/assets/js/ws'
export default {
  name: 'index',
  created () {
    window.socket = new Socket(dev.ws)
    window.socket.connection()
  }
}
</script>

<style lang="less" scoped>
  .left {
    width: 100px;
    background: #303133;
    height: 100vh;
  }
  .right {
    // width: 85%;
    // margin: 10px auto;
  }
</style>

