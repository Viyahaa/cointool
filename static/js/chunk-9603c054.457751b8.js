(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9603c054"],{1471:function(e,t,r){},"1b59":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("svg-icon",{attrs:{"icon-class":"international"}}),r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$t("inchCheck.title")))])],1),r("el-alert",{attrs:{title:e.$t("inchCheck.support"),type:"success",closable:!1}}),r("el-row",[r("el-input",{attrs:{type:"textarea",placeholder:e.$t("inchCheck.placeholder")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),r("el-row",{staticStyle:{margin:"10px 0"}},[r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onCheck}},[e._v(e._s(e.$t("inchCheck.check")))])],1),e._l(e.resList,(function(e,t){return r("el-alert",{key:t,attrs:{closable:!1,title:e.address,description:e.desc,type:e.type,"show-icon":""}})})),r("div",{staticClass:"imgBox"},[r("el-alert",{attrs:{title:e.$t("inchCheck.contact"),type:"info"}}),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki/qun.jpg",alt:"wechat"}})],1)],2)],1)},a=[],s=(r("513c"),r("20a5"),r("e35a"),r("0d7a"),r("d211")),c=(r("6a61"),r("2e91")),i={zh:{inchCheck:{title:"1inch空投领取资格查询:",placeholder:"请输入ETH地址查询",check:"查询",noPermissions:"少年你没有资格领取",networkError:"因网络原因查询失败，请稍后重试",checkAddress:"请检查地址是否正确",alert_ok:"可领取1inch的数量: {a}   -- CoinTool.APP 查询",contact:"扫描下方微信二维码，一起交流",support:"支持多地址查询使用 例如 0xaaaa,0xbbbb"}},en:{inchCheck:{title:"1inch airdrop qualification check:",placeholder:"Please enter eth address for inquiry",check:"Check",networkError:"The query failed for network reasons. Please try again.",noPermissions:"Juvenile, you are not eligible for it",checkAddress:"address length incorrect",alert_ok:"Number of 1inch you can claim: {a}    -- CoinTool.APP",contact:"Scan the WeChat qr code below and communicate with each other",support:"Support multi - address query. Demo: 0xaaaa,0xbbbb"}}},o=r("9905"),u="1inchCheck",l={name:"1inchCheck",data:function(){return{resList:[],address:"",runNum:1}},created:function(){this.$i18n.getLocaleMessage("en")[u]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh))},methods:{onCheck:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.resList=[],r=e.address.split(","),o["a"].mapLimit(r,e.runNum,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(r,n){var a,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},t.prev=1,t.next=4,e.getRes(r);case 4:c=t.sent,i=Number((parseInt(c.amount)/1e18).toFixed(4)),a=Object(s["a"])(Object(s["a"])({},c),{},{status:200,address:r,num:i}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),a=t.t0.response&&500===t.t0.response.status?{status:500,address:r}:{status:504,address:r};case 12:return t.prev=12,e.addResListItem(n,a),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e,r){return t.apply(this,arguments)}}(),(function(e,t){e&&console.log(e),console.log(t,"res 拿到全部结果")}));case 3:case"end":return t.stop()}}),t)})))()},addResListItem:function(e,t){var r={200:this.$t("inchCheck.alert_ok",{a:t.num}),500:this.$t("inchCheck.noPermissions"),504:this.$t("inchCheck.networkError")};this.resList.push(Object(s["a"])(Object(s["a"])({},t),{},{type:200===t.status?"success":"error",desc:r[t.status]})),e(null,Object(s["a"])({},t))},getRes:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$ajax({url:"https://governance.1inch.exchange/v1.0/distribution/"+e,method:"get"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}}},h=l,d=(r("fa44"),r("5d22")),p=Object(d["a"])(h,n,a,!1,null,"84afbed8",null);t["default"]=p.exports},fa44:function(e,t,r){"use strict";r("1471")}}]);