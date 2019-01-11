<template>
  <div id="app">
		<el-container>
			<menu-slide></menu-slide>
		  <el-container>
		    <el-header>
				<menu-top></menu-top>
		    </el-header>

		    <el-main>
    			<router-view/>
		    </el-main>

		    <!-- <el-footer>Footer</el-footer> -->
		  </el-container>
		</el-container>
  </div>
</template>

<script>
import MenuTop from './components/menu-top.vue'
import MenuSlide from './components/menu-slide.vue'
export default {
  name: 'App',
  components:{
  	MenuTop,
  	MenuSlide
  }
}
</script>

<style scoped lang="less">
#app {
	font-family: -apple-system,Noto Sans,Helvetica Neue,Helvetica,Nimbus Sans L,Arial,Liberation Sans,PingFang SC,Hiragino Sans GB,Noto Sans CJK SC,Source Han Sans SC,Source Han Sans CN,Microsoft YaHei,Wenquanyi Micro Hei,WenQuanYi Zen Hei,ST Heiti,SimHei,WenQuanYi Zen Hei Sharp,sans-serif;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
/* .el-aside{
	background-color: #222430;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	color: #878997;
} */
.el-container{
	margin-left: 60px;
}
.el-header{
	background:#fff;
	box-shadow: 0 2px 20px 0 rgba(15,12,70,.1);
}
</style>
