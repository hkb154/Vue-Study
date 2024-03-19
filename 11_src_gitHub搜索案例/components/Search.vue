<template>
  <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            v-model="key"
          />&nbsp;
          <button @click="searchUsers">Search</button>
        </div>
      </section>
</template>

<script>
import axios from 'axios';
export default {
    name:'Search',
    data() {
        return {
            key:''
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('updateListData', {isFirst:false, isLoading:true, errorMsg:'', users:[]});
            axios.get(`http://api.github.com/search/users?q=${this.key}`).then(
                response => {
                    console.log('请求成功了')
                    this.$bus.$emit('updateListData', {isLoading:false, errorMsg:'', users:response.data.items})
                },
                error => {
                    console.log('请求失败了', error.message);
                    this.$bus.$emit('updateListData', {isLoading:false, errorMsg:error.message, users:[]})
                }
            )
        }
    }
}
</script>

<style>

</style>