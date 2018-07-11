let url = {
    hotLists: '/index/hotLists',
    banner: '/index/banner',
    topList: '/category/topList',
    subList: '/category/subList',
    rank: '/category/rank',
    searchList: '/search/list',
    details: '/goods/details',
    deal: '/goods/deal',
    cartAdd: '/cart/add',
    cartLists: '/cart/list',
    cartReduce: '/cart/reduce',
    cartRemove: '/cart/remove',
    cartMremove: '/cart/mremove',
    cartUpdate: '/cart/update',
    addressLists: '/address/list',
    addressAdd: '/address/add',
    addressRemove: 'address/remove',
    addressUpdate: 'address/update',
    addressSetDefault: 'address/setDefault'
}
 
//开发环境（用的ip接口与后端协商后单独开发）和真实环境(映射到相应后台)的切换
let host = 'https://rap2api.taobao.org/app/mock/7058'

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}

export default url