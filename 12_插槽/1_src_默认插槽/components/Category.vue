<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot>可以设置默认值，当使用者没有传递具体结构时，这句话会显示</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title', 'category']
}
</script>

<style scoped>
.category{
    height: 400px;
    width: 300px;
    background-color: antiquewhite;
}

h3{
    text-align: center;
    background-color: goldenrod;
    padding: 5px;
}

li{
    margin-top: 10px;
}

img{
    margin-top: 10px;
    width: 100%;
}
</style>