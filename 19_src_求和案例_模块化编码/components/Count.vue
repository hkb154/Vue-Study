<template>
  <div>
    <h2>当前的和为：{{sum}}</h2>
    <h2>当前的和放大十倍为：{{bigSum}}</h2>
    <h3>我在{{school}}学{{subject}}</h3>
    <h3>Person组件中共有{{personList.length}}人</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increase(n)">+</button>
    <button @click="decrease(n)">-</button>
    <button @click="increaseOdd(n)">和为奇数再加</button>
    <button @click="increaseWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
    name:'Count',
    data() {
        return {
            n : 1, //当前选择的值
        }
    },
    computed:{
        // 借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState('countAbout', ['sum', 'school', 'subject']),
        ...mapState('personAbout', ['personList']),

        // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
        ...mapGetters('countAbout', ['bigSum'])
    },
    methods: {
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations （对象写法）
        ...mapMutations('countAbout', {increase:'JIA', decrease:'JIAN'}),
        
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions （对象写法）
        ...mapActions('countAbout', {increaseOdd:'addOdd', increaseWait:'addWait'}),
    },
    mounted() {
        console.log(this);
    },
}
</script>

<style scoped>
button{
    margin-left: 10px;
}
</style>