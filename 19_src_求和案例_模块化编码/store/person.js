import { nanoid } from 'nanoid';

const personOptions = {
    namespaced: true,
    actions:{
        addPerson(context, value){
            if(!value) return alert('姓名不能为空噢~')
            context.commit('ADD_PERSON', value);
        },
        addPersonWang(context, value){
            if(value.indexOf('王' ) === 0){
                context.commit('ADD_PERSON', value);
            }else{
                alert(value + '不姓王噢');
            }
        }
    },
    mutations:{
        ADD_PERSON(state, value){
            const person = {id: nanoid(), name: value};
            state.personList.unshift(person);
        }
    },
    state:{
        personList:[{id:'001', name:'小焦'}]
    },
    getters:{
        firstPerson(state){
            return state.personList[0].name;
        }
    }
}

export default personOptions;