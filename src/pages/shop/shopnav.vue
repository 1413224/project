<template>
  <div class="main-content">
	<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
  </div>
</template>

<script>
export default {
  name: 'shopnav',
  data () {
    return {
     
    }
  },
  created(){
  	// console.log(this.$route)
  }
}
</script>

<style scoped lang="less">
.main-content{
	/* position: fixed;
	  width: calc(100% - 290px);
	  top: 70px;
	  bottom: 10px;
	  right: 10px;
	  background: #fff; 
	  box-shadow: 0 0 4px 0 rgba(200,200,200,.5);
	  overflow: auto; */
	  position: absolute;
	  width: calc(100% - 290px);
	  top: 70px;
	  right: 10px;
	  background: #fff; 
	  box-shadow: 0 0 4px 0 rgba(200,200,200,.5);
	  min-height: 90%; 
  p{
  	height: 50px;
  	border-bottom:@border;
  }
}
</style>
