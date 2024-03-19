<template>
  <div>
    <Ani></Ani>
    <Test></Test>
    <Test2/> 
  </div>
</template>

<script>
import Ani from './components/Ani.vue'
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'

export default {
  name:'App',
  components:{
    Ani,
    Test,
    Test2
  }
}
</script>

<style>

</style>