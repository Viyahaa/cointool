(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8949daa4"],{"326e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Card",{attrs:{"is-show-admin-btn":!1,icon:e.icon,title:e.$t("route.tokenAdmin"),desc:e.$t("tokenAdmin.pageDesc")}},[e.isVerify?n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",staticClass:"form",attrs:{"label-position":e.isPc?"right":"top",rules:e.rules,model:e.form,"label-width":"zh"===e.language?"130px":"150px"}},[n("el-form-item",{attrs:{label:e.$t("tokenAdmin.tokenName")}},[n("el-tag",[e._v(e._s(e.form.symbol))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.initialSupply")}},[n("el-tag",{attrs:{type:"danger"}},[e._v(e._s(e.form.initialSupply))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.coinState")}},[n("el-switch",{staticStyle:{display:"block","margin-top":"6px"},attrs:{"active-color":"#1890ff","inactive-color":"#DCDFE6"},on:{change:e.onPaused},model:{value:e.form.coinState,callback:function(t){e.$set(e.form,"coinState",t)},expression:"form.coinState"}})],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.addBlackList")}},[n("el-radio-group",{model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[n("el-radio",{attrs:{label:"1"}},[e._v(e._s(e.$t("tokenAdmin.blackadd")))]),n("el-radio",{attrs:{label:"2"}},[e._v(e._s(e.$t("tokenAdmin.blackdel")))])],1),n("el-input",{staticClass:"input",attrs:{placeholder:e.$t("tokenAdmin.input_1")},model:{value:e.form.blackAddress,callback:function(t){e.$set(e.form,"blackAddress",t)},expression:"form.blackAddress"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onblackAddress}},[e._v(e._s(e.$t("tokenAdmin.confirm")))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.destroyNum")}},[n("el-input",{staticClass:"input",attrs:{placeholder:e.$t("tokenAdmin.input_2")},model:{value:e.form.destroyNum,callback:function(t){e.$set(e.form,"destroyNum",t)},expression:"form.destroyNum"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onBurn}},[e._v(e._s(e.$t("tokenAdmin.confirm")))])],1),n("el-form-item",{attrs:{label:e.$t("tokenAdmin.add")}},[n("div",{staticStyle:{display:"inline-block"}},[n("el-input",{staticClass:"addNum",attrs:{placeholder:e.$t("tokenAdmin.input_3")},model:{value:e.form.addNum,callback:function(t){e.$set(e.form,"addNum",t)},expression:"form.addNum"}}),n("br"),n("el-input",{staticClass:"input",attrs:{placeholder:e.$t("tokenAdmin.input_4")},model:{value:e.form.addAddress,callback:function(t){e.$set(e.form,"addAddress",t)},expression:"form.addAddress"}})],1),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onMint}},[e._v(e._s(e.$t("tokenAdmin.confirm")))])],1)],1):n("div",{staticClass:"verifyToken"},[n("div",{staticClass:"verifyBox"},[n("el-input",{attrs:{placeholder:e.$t("tokenAdmin.verifyPlaceholder")},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}}),n("el-button",{staticClass:"verifyBtn",attrs:{type:"primary"},on:{click:e.onGoAdmin}},[e._v(e._s(e.$t("tokenAdmin.verifyBtn")))])],1)])],1)],1)},r=[],o=(n("e18c"),n("e35a"),n("1c2e"),n("5e9f"),n("6a61"),n("2e91")),s=n("d211"),i=n("52c1"),c={zh:{tokenAdmin:{pageDesc:"管理在CoinTool.App创建的代币功能",placeEnterToken:"请输入Token地址",tokenName:"代币名称：",initialSupply:"代币数量：",add:"增发：",blackadd:"黑名单添加",blackdel:"黑名单解除",unlockwallet:"请解锁钱包",noadmin:"抱歉，这个Token不属于你",nowebcreate:"抱歉，此Token本站不提供服务",destroyNum:"销毁数量：",ojbk:"操作成功",addBlackList:"黑名单：",coinState:"Token暂停：",confirm:"确定",tokenAddress:"Token地址:",getInfo:"获取信息",verifyBtn:"进入管理后台",verifyPlaceholder:"请输入要管理的Token地址",input_1:"请输入要添加的黑名单地址",input_2:"请输入销毁数量",input_3:"请输入要增发的数量",input_4:"请输入要增发的地址"}},en:{tokenAdmin:{pageDesc:"Manage the token function created in CoinTool.App",placeEnterToken:"Please enter the token address",tokenName:"Token name:",initialSupply:"Number of tokens:",add:"Mint:",blackadd:"Blacklist add",blackdel:"blacklist unlock",unlockwallet:"Please unlock the wallet",noadmin:"Sorry, this Token does not belong to you",nowebcreate:"Sorry, this Token is not available on this site",destroyNum:"Burn:",ojbk:"Operation successful",addBlackList:"Blacklist:",coinState:"Token suspension:",confirm:"Confirm",tokenAddress:"Token address:",getInfo:"Get Info",verifyBtn:"Enter admin backend",verifyPlaceholder:"Please enter the Token address to be managed",input_1:"Please enter the address of the blacklist you want to add",input_2:"Please enter the number of destruction",input_3:"Please enter the quantity to be added",input_4:"Please enter the address to be added"}}},l=n("12f9"),d=n("a835"),u=n("b893"),m=n("8feb"),k=n.n(m),f=n("7742"),p=n.n(f),b=n("7921"),h=n.n(b),g="tokenAdmin",x={name:"TokenAdmin",inject:["onCheckConnect"],components:{Card:l["a"]},data:function(){return{icon:"",token:"",isVerify:!1,loading:!0,decimals:0,rules:{},form:{destroyNum:"",blackAddress:"",radio:"1",coinState:!0,addNum:"",addAddress:"",symbol:"BTC",initialSupply:21e6}}},computed:Object(s["a"])({},Object(i["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[g]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh))},mounted:function(){var e=this.$route.query.icon;e&&(this.icon=e)},methods:{onGoAdmin:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,s,i,c,l,m,f,p,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.token){t.next=3;break}return e.$message.error(e.$t("tokenAdmin.placeEnterToken")),t.abrupt("return");case 3:if(d["a"].getAccount()){t.next=6;break}return e.$message.error(e.$t("tokenAdmin.unlockwallet")),t.abrupt("return");case 6:return t.next=8,d["a"].sendEthgetLogs({address:e.token,topics:["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000000000000000000000000000000000000000000000","0x000000000000000000000000"+d["a"].getAccount().replace("0x","")],fromBlock:"earliest",toBlock:"latest"});case 8:if(n=t.sent,0!==n.length){t.next=12;break}return e.$message.error(e.$t("tokenAdmin.noadmin")),t.abrupt("return");case 12:return t.next=14,d["a"].sendEthgetTransactionByHash(n[0].transactionHash);case 14:if(a=t.sent,a.to){t.next=18;break}return e.$message.error(e.$t("tokenAdmin.nowebcreate")),t.abrupt("return");case 18:return e.isVerify=!0,r={to:e.token,data:"0x95d89b41"},o={to:e.token,data:"0x313ce567"},s={to:e.token,data:"0x18160ddd"},i={to:e.token,data:"0x5c975abb"},c={to:e.token,data:"0x8da5cb5b"},t.next=26,d["a"].sendEthcall(r);case 26:return l=t.sent,t.next=29,d["a"].sendEthcall(o);case 29:return m=t.sent,t.next=32,d["a"].sendEthcall(s);case 32:return f=t.sent,t.next=35,d["a"].sendEthcall(i);case 35:return p=t.sent,t.next=38,d["a"].sendEthcall(c);case 38:if(b=t.sent,b.replace("000000000000000000000000","")===d["a"].getAccount()){t.next=42;break}return e.$message.error(e.$t("tokenAdmin.noadmin")),t.abrupt("return");case 42:e.decimals=parseInt(m),e.form.coinState=0!==parseInt(p),e.form.initialSupply=f/Math.pow(10,parseInt(m)),e.form.symbol=u["a"].cleanAsciiText(k.a.toAscii(l).toString()),e.loading=!1;case 47:case"end":return t.stop()}}),t)})))()},onblackAddress:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="1"===e.form.radio,a={from:d["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+p.a.methodID("blackListAddress",["address","bool"]).toString("hex")+p.a.rawEncode(["address","bool"],[e.form.blackAddress,n]).toString("hex")},t.next=4,d["a"].sendTransaction(a);case 4:r=t.sent,r&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 6:case"end":return t.stop()}}),t)})))()},onPaused:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.form.coinState?"0x8456cb59":"0x3f4ba83a",a={from:d["a"].getAccount(),to:e.token,value:"0x0",data:n},t.next=4,d["a"].sendTransaction(a);case 4:r=t.sent,r&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 6:case"end":return t.stop()}}),t)})))()},onBurn:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(parseFloat(e.form.destroyNum)*Math.pow(10,e.decimals),e.decimals),n={from:d["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+p.a.methodID("burn",["uint256"]).toString("hex")+p.a.rawEncode(["uint256"],[new h.a(10).pow(e.decimals).times(e.form.destroyNum).toString(10)]).toString("hex")},t.next=4,d["a"].sendTransaction(n);case 4:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 6:case"end":return t.stop()}}),t)})))()},onMint:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={from:d["a"].getAccount(),to:e.token,value:"0x0",data:"0x"+p.a.methodID("mint",["address","uint256"]).toString("hex")+p.a.rawEncode(["address","uint256"],[e.form.addAddress,new h.a(10).pow(e.decimals).times(e.form.addNum).toString(10)]).toString("hex")},t.next=3,d["a"].sendTransaction(n);case 3:a=t.sent,a&&e.$message({message:e.$t("tokenAdmin.ojbk"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()}}},v=x,y=(n("b340"),n("5d22")),A=Object(y["a"])(v,a,r,!1,null,"21b0767e",null);t["default"]=A.exports},"7b62":function(e,t,n){},b340:function(e,t,n){"use strict";n("7b62")},b893:function(e,t,n){"use strict";n("513c"),n("e18c"),n("e35a"),n("1c2e"),n("5e9f"),n("0d7a"),n("6db4");var a=n("0e4d"),r=n("94ef"),o=n("28f8"),s=function(){function e(){Object(a["a"])(this,e),Object(o["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(r["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",n=0;n<e;n++){var a=Math.ceil(61*Math.random());t+=this.chars[a]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var n,a,r;try{n=e.toString().split(".")[1].length}catch(o){n=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return r=Math.pow(10,Math.max(n,a)),(this.numMul(e,r)+this.numMul(t,r))/r}},{key:"numSub",value:function(e,t){var n,a,r;try{n=e.toString().split(".")[1].length}catch(o){n=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return r=Math.pow(10,Math.max(n,a)),(this.numMul(e,r)-this.numMul(t,r))/r}},{key:"numMul",value:function(e,t){var n=0,a=e.toString(),r=t.toString();try{n+=a.split(".")[1].length}catch(o){}try{n+=r.split(".")[1].length}catch(o){}return Number(a.replace(".",""))*Number(r.replace(".",""))/Math.pow(10,n)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var n,a,r=0,o=0;try{r=e.toString().split(".")[1].length}catch(s){}try{o=t.toString().split(".")[1].length}catch(s){}return n=Number(e.toString().replace(".","")),a=Number(t.toString().replace(".","")),this.numMul(n/a,Math.pow(10,o-r))}}]),e}(),i=new s;t["a"]=i}}]);