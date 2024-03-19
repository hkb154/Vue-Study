<template>
  <div>
    <h2>当前的和为：{{sum}}</h2>
    <h2>当前的和放大十倍为：{{bigSum}}</h2>
    <h3>我在{{school}}学{{subject}}</h3>
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
import {mapState, mapGetters} from 'vuex';

export default {
    name:'Count',
    data() {
        return {
            n : 1, //当前选择的值
        }
    },
    computed:{
        // 靠程序员自己去写计算属性
        // sum(){
        //     return this.$store.state.sum;
        // },
        // school(){
        //     return this.$store.state.school;
        // },
        // subject(){
        //     return this.$store.state.subject;
        // },

        // 展开运算符（...） 和剩余函数区分一下 
        // 对象的展开：把属性罗列出来，用逗号分隔，放到一个 {} 中，构成新对象

        // 借助mapState生成计算属性，从state中读取数据, 返回的是一个对象{sum: ƒ, school: ƒ, subject: ƒ}。（对象写法）
        // ...mapState({sum:'sum', school:'school', subject:'subject'}),

        // 借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState(['sum', 'school', 'subject']),

        // bigSum(){
        //     return this.$store.getters.bigSum;
        // },

        // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
        // ...mapGetters({bigSum:'bigSum'}),

        // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
        ...mapGetters(['bigSum'])

        
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
        console.log(mapState(['sum', 'school', 'subject']));
    },
}
</script>

<style scoped>
button{
    margin-left: 10px;
}
</style>