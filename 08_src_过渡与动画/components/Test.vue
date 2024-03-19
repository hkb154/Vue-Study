<template>
  <div>
    <button @click="isShow = !isShow">显示 / 隐藏</button><br>
    <transition appear name="hello">
        <h1 v-show="isShow">你好呀！小焦</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
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

/* 进入的起点、离开的终点 */
.hello-enter, .hello-leave-to{
    transform: translateX(-100%);
}

.hello-enter-active, .hello-leave-active{
    transition: 0.5s linear;
}

/* 进入的终点、离开的起点 */
.hello-enter-to, .hello-leave{
    transform: translateX(0);
}

</style>