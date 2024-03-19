<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showSchool">点我显示学校信息</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return{
            name:'华南师范大学',
            address:'南海校区'
        }
    },
    methods:{
        showSchool(){
            alert(this.name + '是非常牛逼的大学')
        }
    }
}
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>