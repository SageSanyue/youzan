webpackJsonp([5],{"035s":function(t,e){},"0mhr":function(t,e){},TFhR:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var r in n)n.hasOwnProperty(r)&&(n[r]="http://rap2api.taobao.org/app/mock/7058"+n[r]);e.a=n},"U/rD":function(t,e,a){"use strict";var n={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>-1){var a=e.split(".");return a[0]+"."+(a[1]+"0").substr(0,2)}return e+".00"}},components:{Foot:a("nq5D").a}};e.a=n},nq5D:function(t,e,a){"use strict";var n=a("mw3O"),r=a.n(n).a.parse(location.search.substr(1)).index,s=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],i={data:function(){return{navConfig:s,curIndex:parseInt(r)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{class:{active:n==t.curIndex},on:{click:function(a){t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var c=a("VU/8")(i,o,!1,function(t){a("zti2")},null,null);e.a=c.exports},sSMw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("035s"),r=(a.n(n),a("0mhr")),s=(a.n(r),a("7+uW")),i=a("mtWM"),o=a.n(i),c=a("TFhR"),d=a("mw3O"),u=a.n(d),l=a("U/rD"),h=a("9qgI"),f=a.n(h),m=u.a.parse(location.search.substr(1)),v=m.keyword,p=m.id;new s.default({el:".container",data:{searchList:null,keyword:v,isShow:!1},created:function(){this.getSearchList()},methods:{getSearchList:function(){var t=this;o.a.post(c.a.searchList,{keyword:v,id:p}).then(function(e){t.searchList=e.data.lists})},move:function(){document.scrollingElement.scrollTop>100?this.isShow=!0:this.isShow=!1},toTop:function(){f()(document.body,"scroll",{duration:1e3})}},mixins:[l.a]})},zti2:function(t,e){}},["sSMw"]);
//# sourceMappingURL=search.66be1bed5d10db5e7654.js.map