// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';

// 应用Vuex
Vue.use(Vuex);

// 准备actions —— 用于响应组件中的动作
const actions = {
    // jia(context, value){
    //     context.commit('JIA', value);
    // },
    // jian(context, value){
    //     context.commit('JIAN', value);
    // },
    // 业务逻辑最好写在actions里，不要写在mutations里
    addOdd(context, value){
        if(context.state.sum % 2){
            context.commit('JIA', value);
        }
    },
    addWait(context, value){
        setTimeout(() => {
            context.commit('JIA', value);
        }, 500)
    }
};

// 准备mutations —— 用于操作数据(state)
const mutations = {
    JIA(state, value){
        state.sum += value;
    },
    JIAN(state, value){
        state.sum -= value;
    }
};

// 准备state —— 用于存储数据
const state = {
    sum : 0 //和的值
};

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})