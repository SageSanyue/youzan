webpackJsonp([2],{"/q06":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")(null,s,!1,function(t){a("pu0U")},"data-v-71b4342a",null);e.default=i.exports},"0R9t":function(t,e){},"7VB7":function(t,e){},"9ksb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("0R9t"),i=a.n(s);for(var l in s)"default"!==l&&function(t){a.d(e,t,function(){return s[t]})}(l);var r=a("q1jN");var n=function(t){a("r2Yj")},c=a("VU/8")(i.a,r.a,!1,n,"data-v-37dbf9da",null);e.default=c.exports},KrO5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Zrlr"),i=a.n(s),l=a("wxAW"),r=a.n(l),n=a("wI4f"),c=a("TFhR"),o=function(){function t(){i()(this,t)}return r()(t,null,[{key:"list",value:function(){return Object(n.a)(c.a.addressLists)}},{key:"add",value:function(t){return Object(n.a)(c.a.addressAdd,t)}},{key:"remove",value:function(t){return Object(n.a)(c.a.addressRemove,t)}},{key:"update",value:function(t){return Object(n.a)(c.a.addressUpdate,t)}},{key:"setDefault",value:function(t){return Object(n.a)(c.a.addressSetDefault,t)}}]),t}(),d=(a("7VB7"),a("v0zw"),{data:function(){return{lists:null}},created:function(){var t=this;o.list().then(function(e){t.lists=e.data.lists})},methods:{toEdit:function(t){this.$router.push({name:"form",query:{type:"edit",instance:t}})}}}),u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container ",staticStyle:{"min-height":"597px"}},[t.lists&&t.lists.length?a("div",{staticClass:"block-list address-list section section-first js-no-webview-block"},t._l(t.lists,function(e){return a("a",{key:e.id,staticClass:"block-item js-address-item address-item ",class:{"address-item-default":e.isDefault},on:{click:function(a){t.toEdit(e)}}},[a("div",{staticClass:"address-title"},[t._v(t._s(e.name)+" "+t._s(e.tel))]),t._v(" "),a("p",[t._v(t._s(e.provinceName)+t._s(e.cityName)+t._s(e.districtName)+t._s(e.address))]),t._v(" "),a("a",{staticClass:"address-edit"},[t._v("修改")])])})):t._e(),t._v(" "),t.lists&&!t.lists.length?a("div",[t._v("\n        没有收货地址，请添加。\n    ")]):t._e(),t._v(" "),a("div",{staticClass:"block stick-bottom-row center"},[a("router-link",{staticClass:"btn btn-blue js-no-webview-block js-add-address-btn",attrs:{to:{name:"form",query:{type:"add"}}}},[t._v("\n            新增地址\n      ")])],1)])},staticRenderFns:[]},v=a("VU/8")(d,u,!1,null,null,null);e.default=v.exports},"Q+HK":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("/ocq");s.default.use(i.a);var l=[{path:"/",component:a("9ksb").default},{path:"/address",component:a("/q06").default,children:[{path:"",component:a("KrO5").default},{path:"/all",name:"all",component:a("KrO5").default},{path:"form",name:"form",component:a("xYTl").default}]}],r=new i.a({routes:l});new s.default({el:"#app",router:r})},TFhR:function(t,e,a){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"address/remove",addressUpdate:"address/update",addressSetDefault:"address/setDefault"};for(var i in s)s.hasOwnProperty(i)&&(s[i]="//rap2api.taobao.org/app/mock/7058"+s[i]);e.a=s},pu0U:function(t,e){},q1jN:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container ",staticStyle:{"min-height":"581px"}},[a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"order-related"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"block block-list list-vertical"},[a("router-link",{staticClass:"block-item link clearfix ico-setting js-login",attrs:{to:"/address",target:"_self"}},[a("p",{staticClass:"title-info c-black font-size-14"},[t._v("收货地址管理")])]),t._v(" "),t._m(5)],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-infos"},[e("div",{staticClass:"pull-left avatar"},[e("div",{staticClass:"img",staticStyle:{"background-image":"url(https://img.yzcdn.cn/upload_files/no_pic.png?imageView2/2/w/280/h/280/q/75/format/webp)"}})]),this._v(" "),e("div",{staticClass:"pull-left desc"},[e("p",[this._v("tonyfree")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"uc-order list-horizon clearfix js-order-overview"},[a("li",[a("a",{staticClass:"link clearfix relative link-topay",attrs:{"data-for":"topay",href:"https://h5.youzan.com/v2/trade/record/alllist?type=topay",target:"_blank"}},[a("p",{staticClass:"title-info c-black font-size-12"},[t._v("待付款")])])]),t._v(" "),a("li",[a("a",{staticClass:"link clearfix relative link-totuan",attrs:{"data-for":"totuan",href:"https://h5.youzan.com/v2/trade/record/alllist?type=totuan",target:"_blank"}},[a("p",{staticClass:"title-info c-black font-size-12"},[t._v("待接单")])])]),t._v(" "),a("li",[a("a",{staticClass:"link clearfix relative link-tosend",attrs:{"data-for":"tosend",href:"https://h5.youzan.com/v2/trade/record/alllist?type=tosend",target:"_blank"}},[a("p",{staticClass:"title-info c-black font-size-12"},[t._v("待发货")])])]),t._v(" "),a("li",[a("a",{staticClass:"link clearfix relative link-send",attrs:{"data-for":"send",href:"https://h5.youzan.com/v2/trade/record/alllist?type=send",target:"_blank"}},[a("p",{staticClass:"title-info c-black font-size-12"},[t._v("待收货")])])]),t._v(" "),a("li",[a("a",{staticClass:"link clearfix relative link-rights",attrs:{href:"https://h5.youzan.com/v2/trade/record/rightsOrder",target:"_blank"}},[a("p",{staticClass:"title-info c-black font-size-12"},[t._v("退款/维权")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block block-list list-vertical"},[e("a",{staticClass:"block-item link clearfix ico-order",attrs:{href:"https://h5.youzan.com/v2/trade/record/alllist?type=all",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("全部订单")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block block-list list-vertical"},[e("a",{staticClass:"block-item link clearfix ico-favior js-login",attrs:{href:"https://maijia.youzan.com/mars/collect/goods",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("收藏的商品")])]),this._v(" "),e("a",{staticClass:"block-item link clearfix ico-shop js-login",attrs:{href:"https://maijia.youzan.com/mars/collect/shop",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("收藏的店铺")])]),this._v(" "),e("a",{staticClass:"block-item link clearfix ico-bought js-login",attrs:{href:"https://maijia.youzan.com/mars/record/bought",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("我买过的")])]),this._v(" "),e("a",{staticClass:"block-item link clearfix ico-history js-login",attrs:{href:"https://maijia.youzan.com/mars/record/goodsbrowse",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("我的浏览记录")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block block-list list-vertical"},[e("a",{staticClass:"block-item link clearfix ico-card",attrs:{href:"https://maijia.youzan.com/mars/record/MemberCard",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("我的会员卡")])]),this._v(" "),e("a",{staticClass:"block-item link clearfix ico-coupon",attrs:{href:"https://h5.youzan.com/v2/ump/promocard/crosssite?empty_redirect=yzapp",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("我的优惠券")])]),this._v(" "),e("a",{staticClass:"block-item link clearfix ico-luckymoney hide",attrs:{href:"https://h5.youzan.com/v2/trade/record/luckymoney?f_platform=yzapp",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("我的红包")])]),this._v(" "),e("a",{staticClass:"block-item link clearfix ico-backs",attrs:{href:"https://h5.youzan.com/v2/trade/record/backs?f_platform=yzapp",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("我的返现")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"block-item link clearfix ico-help",attrs:{href:"http://bbs.youzan.com/home.php?mod=space&do=thread&view=me&order=lastpost&mobile=2&fid=85&filter=common&in_app_type=weixin",target:"_blank"}},[e("p",{staticClass:"title-info c-black font-size-14"},[this._v("联系有赞客服")])])}]};e.a=s},r2Yj:function(t,e){},v0zw:function(t,e){},wI4f:function(t,e,a){"use strict";var s=a("//Fk"),i=a.n(s),l=a("mtWM"),r=a.n(l);e.a=function(t,e){return new i.a(function(a,s){r.a.post(t,e).then(function(t){t.data.status,a(t)}).catch(function(t){s(t)})})}},xYTl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container ",staticStyle:{"min-height":"597px"}},[a("div",{staticClass:"section section-first"},[a("div",{staticClass:"block form js-form"},[a("input",{staticClass:"js-id",attrs:{name:"id",type:"hidden",value:""}}),t._v(" "),a("div",{staticClass:"block-item",staticStyle:{"border-top":"0"}},[a("label",[t._v("收货人")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入姓名",name:"user_name",maxlength:"20"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"block-item"},[a("label",[t._v("联系电话")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"tel",placeholder:"联系电话",name:"tel",maxlength:"11"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"block-item"},[a("label",[t._v("详细地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",placeholder:"街道门牌信息",name:"address_detail",maxlength:"100"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])])]),t._v(" "),t._m(1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"edit"===t.type,expression:"type==='edit'"}],staticClass:"block section js-delete block-control-btn"},[a("div",{staticClass:"block-item c-red center"},[t._v("删除")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"edit"===t.type,expression:"type==='edit'"}],staticClass:"block stick-bottom-row center js-save-default"},[a("button",{staticClass:"btn btn-standard js-save-default-btn"},[t._v("设为默认收货地址")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block-item"},[a("label",[t._v("选择地区")]),t._v(" "),a("div",{staticClass:"select-group"},[a("select",{staticClass:"js-province-selector"},[a("option",{attrs:{value:"-1"}},[t._v("选择省份")]),t._v(" "),a("option",{attrs:{value:"110000"}},[t._v("北京市")])]),t._v(" "),a("select",{staticClass:"js-city-selector"},[a("option",{attrs:{value:"-1"}},[t._v("选择城市")])]),t._v(" "),a("select",{staticClass:"js-county-selector",attrs:{name:"area_code","data-code":""}},[a("option",{attrs:{value:"-1"}},[t._v("选择地区")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block section js-save block-control-btn"},[e("div",{staticClass:"block-item c-blue center"},[this._v("保存")])])}]},i=a("VU/8")({data:function(){return{name:"",tel:"",provinceValue:-1,cityValue:-1,districtValue:-1,address:"",id:"",type:"",instance:""}},created:function(){var t=this.$route.query;this.type=t.type,this.instance=t.instance}},s,!1,null,null,null);e.default=i.exports}},["Q+HK"]);
//# sourceMappingURL=member.2790978c2a42aca54bea.js.map