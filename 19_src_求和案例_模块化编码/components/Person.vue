<template>
  <div>
    <h2>人员列表</h2>
    <h3>Count组件中求和的值为{{sum}}</h3>
    <h2>列表中的第一个人是{{firstPerson}}</h2>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="addPerson()">添加</button>
    <button @click="addPersonWang()">添加姓王的人</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
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
        ...mapState('personAbout',['personList']),
        sum(){
            return this.$store.state.countAbout.sum;
        },
        firstPerson(){
            return this.$store.getters['personAbout/firstPerson'];
        }

    },
    methods:{
        // ...mapActions('personAbout', ['addPerson']),
        addPerson(){
            this.$store.dispatch('personAbout/addPerson', this.name);
            this.name = '';
        },
        addPersonWang(){
            this.$store.dispatch('personAbout/addPersonWang', this.name);
            this.name = '';
        }
    }
}
</script>

<style>

</style>