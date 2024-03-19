<template>
  <div>
    <h2>当前的和为：{{$store.state.sum}}</h2>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">和为奇数再加</button>
    <button @click="increaseWait">等一等再加</button>
  </div>
</template>

<script>
export default {
    name:'Count',
    data() {
        return {
            n : 1, //当前选择的值
        }
    },
    methods: {
        increase(){
            this.$store.commit('JIA', this.n);
        },
        decrease(){
            this.$store.commit('JIAN', this.n);
        },
        increaseOdd(){
            this.$store.dispatch('addOdd', this.n);
        },
        increaseWait(){
            this.$store.dispatch('addWait', this.n);
        }
    },
    mounted() {
        console.log('Count', this);
    },
}
</script>

<style scoped>
button{
    margin-left: 10px;
}
</style>