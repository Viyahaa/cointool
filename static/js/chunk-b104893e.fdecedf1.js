(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b104893e"],{"36ac":function(e,t,a){"use strict";a("6047")},6047:function(e,t,a){},c33c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("svg-icon",{attrs:{"icon-class":"international"}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$t("hboCheck.title")))])],1),a("el-alert",{attrs:{title:e.$t("hboCheck.support"),type:"success",closable:!1}}),a("el-row",[a("el-input",{attrs:{type:"textarea",placeholder:e.$t("hboCheck.placeholder")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),a("el-row",{staticStyle:{margin:"10px 0"}},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onCheck}},[e._v(e._s(e.$t("hboCheck.check")))])],1),a("el-alert",{attrs:{title:"HECO HBO空投 :链上持有HT前一万名将有资格获得空投，初始10w HBO , 5w个作为空投直接打入持仓地址。2月18日晚上21:00的价格为可以卖15个HT以上，兄弟们给我砸!合约地址:0x8764bd4fcc027faf72ba83c0b2028a3bae0d2d57",type:"info",effect:"dark"}}),a("br"),e._l(e.resList,(function(e,t){return a("el-alert",{key:t,attrs:{closable:!1,title:e.address,description:e.desc,type:e.type,"show-icon":""}})})),a("div",{staticClass:"imgBox"},[a("el-alert",{attrs:{title:e.$t("hboCheck.contact"),type:"info"}}),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki/qun.jpg",alt:"wechat"}})],1)],2)],1)},s=[],n=(a("513c"),a("20a5"),a("e35a"),a("5e9f"),a("0d7a"),a("d211")),c=(a("6a61"),a("2e91")),o={zh:{hboCheck:{title:"HECO HBO空投领取资格查询:",placeholder:"请输入HECO地址查询",check:"查询",noPermissions:"少年你没有资格领取",networkError:"少年你没有资格领取",checkAddress:"请检查地址是否正确",alert_ok:"可领取HBO的数量: {a}   -- CoinTool.APP 查询",contact:"扫描下方微信二维码，一起交流",support:"支持多地址查询使用 例如 0xaaaa,0xbbbb"}},en:{hboCheck:{title:"HECO HBO airdrop qualification check:",placeholder:"Please enter heco address for inquiry",check:"Check",networkError:"Juvenile, you are not eligible for it.",noPermissions:"Juvenile, you are not eligible for it",checkAddress:"address length incorrect",alert_ok:"Number of HBO you can claim: {a}    -- CoinTool.APP",contact:"Scan the WeChat qr code below and communicate with each other",support:"Support multi - address query. Demo: 0xaaaa,0xbbbb"}}},i=a("9905"),l="hboCheck",u={name:"HboCheck",data:function(){return{resList:[],address:"",runNum:1}},created:function(){this.$i18n.getLocaleMessage("en")[l]||(this.$i18n.mergeLocaleMessage("en",o.en),this.$i18n.mergeLocaleMessage("zh",o.zh))},methods:{onCheck:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.resList=[],a=e.address.split(","),i["a"].mapLimit(a,e.runNum,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(a,r){var s,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s={},t.prev=1,t.next=4,e.getRes(a);case 4:c=t.sent,o=Number((parseInt(c.result)/1e18).toFixed(4)),s=Object(n["a"])(Object(n["a"])({},c),{},{status:200,address:a,num:o}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),s=t.t0.response&&500===t.t0.response.status?{status:500,address:a}:{status:504,address:a};case 12:return t.prev=12,e.addResListItem(r,s),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e,a){return t.apply(this,arguments)}}(),(function(e,t){e&&console.log(e),console.log(t,"res 拿到全部结果")}));case 3:case"end":return t.stop()}}),t)})))()},addResListItem:function(e,t){var a={200:this.$t("hboCheck.alert_ok",{a:t.num}),500:this.$t("hboCheck.noPermissions"),504:this.$t("hboCheck.networkError")};this.resList.push(Object(n["a"])(Object(n["a"])({},t),{},{type:200===t.status?"success":"error",desc:a[t.status]})),e(null,Object(n["a"])({},t))},getRes:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$ajax({url:"https://http-mainnet-node.huobichain.com",method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0x8764bd4fcc027faf72ba83c0b2028a3bae0d2d57",data:"0x70a08231000000000000000000000000"+e.replace("0x","")},"latest"]}});case 2:return r=a.sent,a.abrupt("return",r);case 4:case"end":return a.stop()}}),a)})))()}}},h=u,d=(a("36ac"),a("5d22")),p=Object(d["a"])(h,r,s,!1,null,"7dd3f874",null);t["default"]=p.exports}}]);