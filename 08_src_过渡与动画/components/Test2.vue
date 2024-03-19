<template>
  <div>
    <button @click="isShow = !isShow">显示 / 隐藏</button><br>
    <transition-group 
        appear 
        name="animate__animated animate__bounce"
        enter-active-class="animate__zoomInDown"
        leave-active-class="animate__flipOutY"
    >
        <h1 v-show="!isShow" key="1">你好呀！小焦</h1>
        <h1 v-show="isShow" key="2">小焦要努力变强</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css';
export default {
    name:'Test2',
    data() {
        return {
            isShow:true
        }
    }
}
</script>

<style scoped>
h1{
    background-color: bisque;
    padding: 10px;
    text-align: center;
}

button{
    border: 0;
    width: 200px;
    height: 50px;
    color: #fff;
    background-color: rgb(35, 111, 86);
    cursor: pointer;
}

</style>