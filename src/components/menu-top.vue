<template>
  <div class="header">
    <span class="tit">智慧零售</span>
    <div class="right">
      <span>客户消息</span>
      <span>系统通知</span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="less">
.header{
	.tit{
		font-size: 14px;
		color: #595961;
		font-weight: bold;
	}
  .right{
    float: right;
    span{
      cursor: pointer;
      &:hover{
        color:#2589ff;
      }
    }
  }

}
</style>
