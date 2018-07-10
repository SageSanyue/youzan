import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin'

new Vue({
    el: '#container',
    data: {
        lists: null,
        total: 0,
        editingShop: null,
        editingShopIndex: -1,
        removePopup: false
    },
    computed: {
        allSelected: {
            get(){
                if(this.lists&&this.lists.length){
                    return this.lists.every(shop => {
                        return shop.checked
                    })
                }
                return false
            },
            set(newVal){
                this.lists.forEach(shop => {
                    shop.checked = newVal
                    shop.goodsList.forEach(good => {
                        good.checked = newVal
                    })
                })
            }
        },
        allRemoveSelected: {
            get(){
                if(this.editingShop){
                    return this.editingShop.removeChecked
                }
                return false
            },
            set(newVal){
                if(this.editingShop){
                    this.editingShop.removeChecked = newVal
                    this.editingShop.goodsList.forEach(good => {
                        good.removeChecked = newVal
                    })
                }
            }
        },
        selectLists(){
            if(this.lists&&this.lists.length){
                let arr = []
                let total = 0
                this.lists.forEach(shop => {
                    shop.goodsList.forEach(good => {
                        if(good.checked){
                            arr.push(good)
                            total += good.price * good.number
                        }
                    })
                })
                this.total = total
                return arr
            }
            return []
        },
        removeLists(){
            if(this.editingShop){
                let arr = []
                this.editingShop.goodsList.forEach(good => {
                    if(good.removeChecked){
                        arr.push(good)
                    }
                })
                return arr
            }
            return []
        }
    },
    created(){
        this.getList()
    },
    methods: {
        getList(){
            axios.post(url.cartLists).then(res => {
                let lists = res.data.cartList
                lists.forEach(shop => {
                    shop.checked = true
                    shop.removeChecked = false
                    shop.editing = false
                    shop.editingMsg = '编辑' 
                    shop.goodsList.forEach(good => {
                        good.checked = true
                        good.removeChecked = false
                    }) 
                })
                this.lists = lists
            })
        },
        selectGood(shop,good){
            //console.log(good.checked)
            let attr = this.editingShop ? 'removeChecked' : 'checked'
            good[attr] = !good[attr]
            shop[attr] = shop.goodsList.every(good => {
                return good[attr]
            })
        },
        selectShop(shop){
            let attr = this.editingShop ? 'removeChecked' : 'checked'
            shop[attr] = !shop[attr]
            shop.goodsList.forEach(good => {
                good[attr] = shop[attr]
            })
        },
        selectAll(){
            //console.log(this.allSelected)
            let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected'
            this[attr] = !this[attr]
        },
        edit(shop,shopIndex){
            
            shop.editing = !shop.editing
            //console.log(shop.editing)
            shop.editingMsg = shop.editing ? '完成' : '编辑'
            this.lists.forEach((item,i) => {
                if(shopIndex !== i){
                    item.editing = false
                    item.editingMsg = shop.editing ? '' : '编辑'
                }
            })
            this.editingShop = shop.editing ? shop : null
            this.editingShopIndex = shop.editing ? shopIndex : -1
        },
        reduce(good){
            if(good.number === 1) return
            axios.post(url.cartReduce,{
                id: good.id,
                number: 1
            }).then(res => {
                good.number--
            })
        },
        add(good){
            axios.post(url.cartAdd,{
                id: good.id,
                number: 1
            }).then(res => {
                good.number++
            })
        },
        remove(shop,shopIndex,good,goodIndex){
            this.removePopup = true
        }
    },
    mixins: [mixin]
})
