<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
      <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
      <input type="text" v-show="todoObj.isEdit" :value="todoObj.title" @blur="handleBlur(todoObj, $event)">
    </label>
    
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
    <button class="btn btn-change" v-show="!todoObj.isEdit"  @click="handleEdit(todoObj)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "MyItem",
  props:['todoObj'],
  methods:{
    handleCheck(id){
        // this.checkTodo(id)
        // this.$bus.$emit('checkTodo', id)
        pubsub.publish('checkTodo', id)
    },
    handleDelete(id){
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish('deleteTodo', id)
    },
    handleEdit(todoObj){
      if(todoObj.hasOwnProperty('isEdit')){
        todoObj.isEdit = true
      }else{
        this.$set(todoObj, 'isEdit', true)
      }
      
    },
    handleBlur(todoObj, e){
      todoObj.isEdit = false
      if(!e.target.value.trim()){
        return alert('输入不能为空')
      }
      //pubsub要传递多个参数时要将数据包装成对象或数组
      pubsub.publish('updateTodo', {'id':todoObj.id, 'title':e.target.value})
    }
}
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
    background-color: #ddd;
}

li:hover button{
    display: block;
}
</style>