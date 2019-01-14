<template>
  <div id="app">
	<router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{

  },
  created(){
  	// console.log(this.$route)
  }
}
</script>

<style scoped lang="less">
#app {
	font-family: -apple-system,Noto Sans,Helvetica Neue,Helvetica,Nimbus Sans L,Arial,Liberation Sans,PingFang SC,Hiragino Sans GB,Noto Sans CJK SC,Source Han Sans SC,Source Han Sans CN,Microsoft YaHei,Wenquanyi Micro Hei,WenQuanYi Zen Hei,ST Heiti,SimHei,WenQuanYi Zen Hei Sharp,sans-serif;
}
</style>
