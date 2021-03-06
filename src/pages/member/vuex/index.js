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
        },
        add(state,instance){
            state.lists.push(instance)
        },
        remove(state,id){
            let lists = state.lists
            let index = lists.findIndex(item => {
                return item.id == id
            })
            lists.splice(index,1)
        },
        update(state,instance){
            let lists = JSON.parse(JSON.stringify(state.lists))
            let index = lists.findIndex(item => {
                return item.id == instance.id
            })
            lists[index] = instance
            state.lists = lists
        },
        setDefault(state,id){
            let lists = state.lists
            lists.forEach(item => {
                if(item.id == id){
                    item.isDefault = true
                }
            })
        }
    },
    actions: {
        //异步逻辑都应封装到action里
        getLists({commit}){
            Address.list().then(res => {
                //this.lists = res.data.lists
                commit('init',res.data.lists)
            })
        },
        addAction({commit},instance){
            Address.add(instance).then(res => {
                //模拟添加id但实际上instance最好后台返回
                instance.id = parseInt(Math.random()*10000)
                commit('add',instance)
            })
        },
        removeAction({commit},id){
            Address.remove(id).then(res => {
                commit('remove',id)
            })
        },
        updateAction({commit},instance){
            Address.update(instance).then(res => {
                commit('update',instance)
            })
        },
        setDefaultAction({commit},id){
            Address.setDefault(id).then(res => {
                commit('setDefault',id)
            })
        }
    }
})

export default store