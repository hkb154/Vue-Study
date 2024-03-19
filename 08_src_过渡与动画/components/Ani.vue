<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button> <br>
    <transition appear name="ani">
        <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name:'Ani',
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

.ani-enter-active{
    animation: ks 0.5s linear;
}

.ani-leave-active{
    animation: ks 0.5s linear reverse;
}

@keyframes ks{
    from{
        transform: translateX(100%);
    }

    to{
        transform: translateX(0px);
    }
}
</style>