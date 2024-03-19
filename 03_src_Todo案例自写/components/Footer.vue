<template>
  <div class="foot">
    <input type="checkbox" name="all">
    已完成0 / 全部3
    <button class="btn">清除所有已完成</button>
  </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
    .foot{
        width: 500px;
        padding: 5px;
    }

    .btn{
        color: #fff;
        background-color: palevioletred;
        border: 0px;
        float: right;
        visibility: hidden;
    }

    .foot:hover .btn{
        visibility: visible;
    }
</style>