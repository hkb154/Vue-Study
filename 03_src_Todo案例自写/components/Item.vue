<template>
<div class="todo">
    <input type="checkbox" name="list">
    睡觉
    <button class="btn">删除</button>
</div>
</template>

<script>
export default {
    name:'Item'
}
</script>

<style scoped>
    .todo{
        width: 500px;
        border: 1px solid gray;
        padding: 5px;
    }

    .btn{
        color: #fff;
        background-color: palevioletred;
        border: 0px;
        float: right;
        visibility: hidden;
    }

    .todo:hover .btn{
        visibility: visible;
    }
</style>