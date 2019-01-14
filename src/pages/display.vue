<template>
  <div>
  	<h3>动态渲染 .vue 文件的组件—— Display</h3>
	<i-display :code="code"></i-display>
  </div>
</template>

<script>
import iDistplay from '@/components/display'
import defaultCode from '../utils/idisplay.js'
export default {
  name: 'display',
  data () {
    return {
      code:defaultCode
    }
  },
  components:{
  	iDistplay
  }
}
</script>

<style scoped lang="less">


</style>
