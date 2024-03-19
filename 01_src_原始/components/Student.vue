<template>
  <div class="demo1">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showStudent">点我和{{ name }}打招呼</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            name:'小焦',
            age:18
        }
    },
    methods:{
        showStudent(){
            alert('你好呀！' + this.name)
        }
    }
}
</script>

<style>
    .demo1{
        background-color: skyblue;
    }
</style>