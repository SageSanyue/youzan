//使用vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Address from 'js/addressService.js'

//创建Store实例
const store = new Vuex.Store({
    state: {
        //应用层级的状态应集中到单个store对象中
        lists: null
    },
    mutations: {
        //提交mutation是更改状态的唯一方法，且该过程同步
        init(state,lists){
            state.lists = lists
        }
    },
    actions: {
        //异步逻辑都应封装到action里
        getLists({commit}){
            Address.list().then(res => {
                //this.lists = res.data.lists
                store.commit('init',res.data.lists)
            })
        }
    }
})

export default store