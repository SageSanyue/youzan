webpackJsonp([4],{"0C+S":function(e,t){},NW8W:function(e,t){},TFhR:function(e,t,i){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"address/remove",addressUpdate:"address/update",addressSetDefault:"address/setDefault"};for(var o in n)n.hasOwnProperty(o)&&(n[o]="http://rap2api.taobao.org/app/mock/7058"+n[o]);t.a=n},"U/rD":function(e,t,i){"use strict";var n={filters:{currency:function(e){var t=""+e;if(t.indexOf(".")>-1){var i=t.split(".");return i[0]+"."+(i[1]+"0").substr(0,2)}return t+".00"}},components:{Foot:i("nq5D").a}};t.a=n},eC21:function(e,t){},gWPi:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("NW8W"),i("0C+S"),i("eC21");var n=i("7+uW"),o=i("mtWM"),s=i.n(o),r=i("TFhR"),c=i("U/rD"),a=i("9qgI"),d=i.n(a),h=i("Zrlr"),u=i.n(h),f=i("wxAW"),l=i.n(f),g=i("wI4f"),v=function(){function e(){u()(this,e)}return l()(e,null,[{key:"add",value:function(e){return Object(g.a)(r.a.cartAdd,{id:e,number:1})}},{key:"reduce",value:function(e){return Object(g.a)(r.a.cartReduce,{id:e,number:1})}}]),e}();new n.default({el:"#container",data:{lists:null,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(e){return e.checked})},set:function(e){this.lists.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(e){this.editingShop&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},selectLists:function(){if(this.lists&&this.lists.length){var e=[],t=0;return this.lists.forEach(function(i){i.goodsList.forEach(function(i){i.checked&&(e.push(i),t+=i.price*i.number)})}),this.total=t,e}return[]},removeLists:function(){if(this.editingShop){var e=[];return this.editingShop.goodsList.forEach(function(t){t.removeChecked&&e.push(t)}),e}return[]}},created:function(){this.getList()},methods:{getList:function(){var e=this;s.a.post(r.a.cartLists).then(function(t){var i=t.data.cartList;i.forEach(function(e){e.checked=!0,e.removeChecked=!1,e.editing=!1,e.editingMsg="编辑",e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.lists=i})},selectGood:function(e,t){var i=this.editingShop?"removeChecked":"checked";t[i]=!t[i],e[i]=e.goodsList.every(function(e){return e[i]})},selectShop:function(e){var t=this.editingShop?"removeChecked":"checked";e[t]=!e[t],e.goodsList.forEach(function(i){i[t]=e[t]})},selectAll:function(){var e=this.editingShop?"allRemoveSelected":"allSelected";this[e]=!this[e]},edit:function(e,t){e.editing=!e.editing,e.editingMsg=e.editing?"完成":"编辑",this.lists.forEach(function(i,n){t!==n&&(i.editing=!1,i.editingMsg=e.editing?"":"编辑")}),this.editingShop=e.editing?e:null,this.editingShopIndex=e.editing?t:-1},reduce:function(e){v.reduce(e.id).then(function(t){1!==e.number&&e.number--})},add:function(e){v.add(e.id).then(function(t){e.number++})},remove:function(e,t,i,n){this.removePopup=!0,this.removeData={shop:e,shopIndex:t,good:i,goodIndex:n},this.removeMsg="确定要删除该商品吗？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定将所选"+this.removeLists.length+"个商品删除?"},removeConfirm:function(){var e=this;if("确定要删除该商品吗？"===this.removeMsg){var t=this.removeData,i=t.shop,n=t.shopIndex,o=t.good,c=t.goodIndex;Object(g.a)(r.a.cartRemove,{id:o.id}).then(function(t){i.goodsList.splice(c,1),i.goodsList.length||(e.lists.splice(n,1),e.removeShop()),e.removePopup=!1})}else{var a=[];this.removeLists.forEach(function(e){a.push(e.id)}),s.a.post(r.a.cartMremove,{ids:a}).then(function(t){var i=[];e.editingShop.goodsList.forEach(function(t){-1===e.removeLists.findIndex(function(e){return e.id==t.id})&&i.push(t)}),i.length?e.editingShop.goodsList=i:(e.lists.splice(e.editingShopIndex,1),e.removeShop()),e.removePopup=!1})}},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})},start:function(e,t){t.startX=e.changedTouches[0].clientX},end:function(e,t,i,n){var o=e.changedTouches[0].clientX,s="0";i.startX-o>100&&(s="-60px"),o-i.startX>100&&(s="0px"),d()(this.$refs["goods-"+t+"-"+n],{left:s})}},mixins:[c.a]})},nq5D:function(e,t,i){"use strict";var n=i("mw3O"),o=i.n(n).a.parse(location.search.substr(1)).index,s=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],r={data:function(){return{navConfig:s,curIndex:parseInt(o)||0}},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bottom-nav"},[i("ul",e._l(e.navConfig,function(t,n){return i("li",{class:{active:n==e.curIndex},on:{click:function(i){e.changeNav(t,n)}}},[i("a",[i("i",{class:t.icon}),e._v(" "),i("div",[e._v(e._s(t.name))])])])}))])},staticRenderFns:[]};var a=i("VU/8")(r,c,!1,function(e){i("zti2")},null,null);t.a=a.exports},wI4f:function(e,t,i){"use strict";var n=i("//Fk"),o=i.n(n),s=i("mtWM"),r=i.n(s);t.a=function(e,t){return new o.a(function(i,n){r.a.post(e,t).then(function(e){e.data.status,i(e)}).catch(function(e){n(e)})})}},zti2:function(e,t){}},["gWPi"]);
//# sourceMappingURL=cart.0868dd55a6d5000fbe82.js.map