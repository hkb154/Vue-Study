<template>
  <div>
    <h2>当前的和为：{{sum}}</h2>
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
            sum : 0 //和的值
        }
    },
    methods: {
        increase(){
            this.sum += this.n;
        },
        decrease(){
            this.sum -= this.n;
        },
        increaseOdd(){
            if(this.sum % 2){
                this.sum += this.n;
            }
        },
        increaseWait(){
            setTimeout(() => {
                this.sum += this.n;
            }, 500)
        }
    },
}
</script>

<style scoped>
button{
    margin-left: 10px;
}
</style>