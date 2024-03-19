export default {
    namespaced: true,
    actions:{
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
    },
    mutations:{
        JIA(state, value){
            state.sum += value;
        },
        JIAN(state, value){
            state.sum -= value;
        },
    },
    state:{
        sum : 0, //和的值
        school:'华南师大',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10;
        }
    }
}