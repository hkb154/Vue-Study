<template>
  <div class="school">
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
  </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'华南师范大学',
                address:'佛山市南海区狮山镇'
            }
        }
    }
</script>

<style>
    .school{
        background: gray;
    }
</style>