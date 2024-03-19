<template>
    <div>
        <h2 v-text="msg" ref="title"></h2>
        <button @click="showDOM" ref="btn">点我显示DOM元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{
            School
        },
        data() {
            return {
                msg:'你好呀，小焦！'
            }
        },
        methods:{
            showDOM(){
                console.log(this.$refs.title)
                console.log(this.$refs.btn)
                console.log(this.$refs.sch)
            }
        }
    }
</script>
