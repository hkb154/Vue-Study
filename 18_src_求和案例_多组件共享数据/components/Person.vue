<template>
  <div>
    <h2>人员列表</h2>
    <h3>Count组件中求和的值为{{sum}}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="addPerson">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
import {mapState} from 'vuex';

export default {
    name:'Person',
    data() {
        return {
            name:'',
        }
    },
    computed:{
        // personList(){
        //     return this.$store.state.personList;
        // },
        ...mapState(['personList']),
        sum(){
            return this.$store.state.sum;
        }
    },
    methods:{
        addPerson(){
            if(!this.name){
               return alert('姓名不能为空噢~宝宝');
            }
            const person = {id:nanoid(), name:this.name};
            this.$store.commit('ADD_PERSON', person);
            this.name = '';
        }
    }
}
</script>

<style>

</style>