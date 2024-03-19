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

        // 展开运算符（...） 和剩余函数区分一下 
        // 对象的展开：把属性罗列出来，用逗号分隔，放到一个 {} 中，构成新对象

        // 借助mapState生成计算属性，从state中读取数据, 返回的是一个对象{sum: ƒ, school: ƒ, subject: ƒ}。（对象写法）
        // ...mapState({sum:'sum', school:'school', subject:'subject'}),

        // 借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState(['sum', 'school', 'subject', 'personList']),

        /********************************************************************** */

        // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
        // ...mapGetters({bigSum:'bigSum'}),

        // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
        ...mapGetters(['bigSum'])

        
    },
    methods: {
        // increase(){
        //     this.$store.commit('JIA', this.n);
        // },
        // decrease(){
        //     this.$store.commit('JIAN', this.n);
        // },
        
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations （对象写法）
        ...mapMutations({increase:'JIA', decrease:'JIAN'}),
        // 上面这段代码相当于在methods中写了如下代码: (注意：此时increase方法是带参数的)
        /*increase(value){
            this.$store.commit('JIA', value);
        }和decrease(省略)*/

        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations （数组写法）
        // ...mapMutations(['JIA', 'JIAN']),  若用这种写法，要把点击事件的方法名改为JIA和JIAN

        /***************************************************************** */

        // increaseOdd(){
        //     this.$store.dispatch('addOdd', this.n);
        // },
        // increaseWait(){
        //     this.$store.dispatch('addWait', this.n);
        // }

        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions （对象写法）
        ...mapActions({increaseOdd:'addOdd', increaseWait:'addWait'}),

        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions （数组写法）
        // ...mapActions(['addOdd', 'addWait'])
        
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