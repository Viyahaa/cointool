(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3900aaab"],{6678:function(e,t,r){"use strict";r("948a")},"948a":function(e,t,r){},a565:function(e,t,r){"use strict";r("f54d")},b893:function(e,t,r){"use strict";r("24a8"),r("27ae"),r("9b5f"),r("d447"),r("fc13"),r("5b12"),r("ea94");var a=r("d4ec"),n=r("bee2"),o=r("ade3"),s=function(){function e(){Object(a["a"])(this,e),Object(o["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(n["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",r=0;r<e;r++){var a=Math.ceil(61*Math.random());t+=this.chars[a]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(o){r=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)+this.numMul(t,n))/n}},{key:"numSub",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(o){r=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)-this.numMul(t,n))/n}},{key:"numMul",value:function(e,t){var r=0,a=e.toString(),n=t.toString();try{r+=a.split(".")[1].length}catch(o){}try{r+=n.split(".")[1].length}catch(o){}return Number(a.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,r)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var r,a,n=0,o=0;try{n=e.toString().split(".")[1].length}catch(s){}try{o=t.toString().split(".")[1].length}catch(s){}return r=Number(e.toString().replace(".","")),a=Number(t.toString().replace(".","")),this.numMul(r/a,Math.pow(10,o-n))}}]),e}(),i=new s;t["a"]=i},cf42:function(e,t,r){"use strict";r.r(t);var a,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("OpenGrabCoinVipDialog",{ref:"OpenGrabCoinVipDialog"}),r("div",{staticClass:"box"},[r("h1",[e._v(e._s(e.$t("route.grabCoin")))]),r("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":"top",rules:e.rules,model:e.form,"label-width":"160px"}},[r("el-row",[r("el-form-item",{staticClass:"formItem"},[r("div",{staticClass:"textBox"},[r("span",{staticClass:"label"},[e._v(e._s(e.$t("grabCoin.platform")))])]),r("el-select",{staticStyle:{width:"100%"},attrs:{"default-first-option":""},model:{value:e.form.platform,callback:function(t){e.$set(e.form,"platform",t)},expression:"form.platform"}},e._l(e.ptOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{staticClass:"formItem"},[r("div",{staticClass:"textBox"},[r("span",{staticClass:"label"},[e._v("RPC")]),r("el-tooltip",{attrs:{effect:"dark",content:e.$t("grabCoin.rpc_tips"),placement:"top"}},[r("i",{staticClass:"el-icon-question icon"})])],1),r("el-input",{model:{value:e.form.rpc,callback:function(t){e.$set(e.form,"rpc",t)},expression:"form.rpc"}}),r("div",{staticClass:"inputBtnBox"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.isTestRpc}},[e._v(e._s(e.$t("grabCoin.test")))])])],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{staticClass:"formItem"},[r("div",{staticClass:"textBox"},[r("span",{staticClass:"label"},[e._v(e._s(e.$t("grabCoin.private_key")))]),r("el-tooltip",{attrs:{effect:"dark",content:e.$t("grabCoin.private_key_tips"),placement:"top"}},[r("i",{staticClass:"el-icon-question icon"})])],1),r("el-input",{attrs:{type:"password"},model:{value:e.form.pkv,callback:function(t){e.$set(e.form,"pkv",t)},expression:"form.pkv"}}),r("div",{staticClass:"inputBtnBox"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.init_account}},[e._v(e._s(e.$t("grabCoin.import")))])])],1)],1)],1),r("div",{staticClass:"baseInfo"},[r("el-row",{directives:[{name:"show",rawName:"v-show",value:e.address.length>0,expression:"address.length > 0"}],staticStyle:{"margin-top":"20px"},attrs:{gutter:24}},[r("el-col",{attrs:{span:18}},[r("div",{staticClass:"infoBox"},[r("p",{staticClass:"label"},[e._v(e._s(e.$t("grabCoin.address"))+":")]),r("p",{staticClass:"value"},[e._v(e._s(e.address))])])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"infoBox"},[r("p",{staticClass:"label"},[e._v(e._s(e.$t("grabCoin.balance"))+":")]),r("p",{staticClass:"value"},[e._v(e._s(parseFloat(e.balance).toFixed(5)))])])])],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,xs:{span:12}}},[r("el-form-item",{staticClass:"formItem",attrs:{prop:"gwei"}},[r("div",{staticClass:"textBox"},[r("span",{staticClass:"label"},[e._v("GWEI")]),r("el-tooltip",{attrs:{effect:"dark",content:e.$t("grabCoin.gwei_tips"),placement:"top"}},[r("i",{staticClass:"el-icon-question icon"})])],1),r("el-input",{model:{value:e.form.gwei,callback:function(t){e.$set(e.form,"gwei",t)},expression:"form.gwei"}})],1)],1),r("el-col",{attrs:{span:6,xs:{span:12}}},[r("el-form-item",{staticClass:"formItem",attrs:{prop:"amount"}},[r("div",{staticClass:"textBox"},[r("span",{staticClass:"label"},[e._v(e._s(e.$t("grabCoin.buy_num")))]),r("el-tooltip",{attrs:{effect:"dark",content:e.$t("grabCoin.buy_num_tips"),placement:"top"}},[r("i",{staticClass:"el-icon-question icon"})])],1),r("el-input",{attrs:{disabled:e.isRun},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1)],1),r("el-col",{attrs:{span:6,xs:{span:12}}},[r("el-form-item",{staticClass:"formItem",attrs:{prop:"pool"}},[r("div",{staticClass:"textBox"},[r("span",{staticClass:"label"},[e._v(e._s(e.$t("grabCoin.pool_size")))]),r("el-tooltip",{attrs:{effect:"dark",content:e.$t("grabCoin.pool_size_tips"),placement:"top"}},[r("i",{staticClass:"el-icon-question icon"})])],1),r("el-input",{attrs:{disabled:e.isRun},model:{value:e.form.pool,callback:function(t){e.$set(e.form,"pool",t)},expression:"form.pool"}})],1)],1),r("el-col",{attrs:{span:6,xs:{span:12}}},[r("el-form-item",{staticClass:"formItem",attrs:{prop:"timep"}},[r("div",{staticClass:"textBox"},[r("span",{staticClass:"label"},[e._v(e._s(e.$t("grabCoin.watch_frequency")))]),r("el-tooltip",{attrs:{effect:"dark",content:e.$t("grabCoin.watch_frequency_tips"),placement:"top"}},[r("i",{staticClass:"el-icon-question icon"})])],1),r("el-input",{model:{value:e.form.timep,callback:function(t){e.$set(e.form,"timep",t)},expression:"form.timep"}})],1)],1)],1),r("el-row",[r("el-form-item",{staticClass:"formItem",attrs:{prop:"fromToken"}},[r("div",{staticClass:"textBox"},[r("span",{staticClass:"label"},[e._v(e._s(e.$t("grabCoin.send_token")))]),r("el-tooltip",{attrs:{effect:"dark",content:e.$t("grabCoin.send_token_tips"),placement:"top"}},[r("i",{staticClass:"el-icon-question icon"})])],1),r("el-input",{model:{value:e.form.fromToken,callback:function(t){e.$set(e.form,"fromToken",t)},expression:"form.fromToken"}}),r("div",{staticClass:"inputBtnBox"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.isTestToken1}},[e._v(e._s(e.$t("grabCoin.check")))]),r("button",{staticClass:"btn",attrs:{type:"button",disabled:e.approve1_close},on:{click:e.approve1}},[e._v(e._s(e.$t("grabCoin.approve_before")))])])],1)],1),r("el-row",[r("el-form-item",{staticClass:"formItem",attrs:{prop:"toToken"}},[r("div",{staticClass:"textBox"},[r("span",{staticClass:"label"},[e._v(e._s(e.$t("grabCoin.get_token")))]),r("el-tooltip",{attrs:{effect:"dark",content:e.$t("grabCoin.get_token_tips"),placement:"top"}},[r("i",{staticClass:"el-icon-question icon"})])],1),r("el-input",{model:{value:e.form.toToken,callback:function(t){e.$set(e.form,"toToken",t)},expression:"form.toToken"}}),r("div",{staticClass:"inputBtnBox"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.isTestToken2}},[e._v(e._s(e.$t("grabCoin.check")))]),r("button",{staticClass:"btn",attrs:{type:"button",disabled:e.approve2_close},on:{click:e.approve2}},[e._v(e._s(e.$t("grabCoin.approve_before")))])])],1)],1)],1)],1),r("div",{staticClass:"remark"},[e._v(" "+e._s(e.$t("grabCoin.remark"))+" ")]),r("div",{staticClass:"btnBox"},[r("div",{class:{buttonContainer:!0,grabTrue:e.isRun}},[r("div",{staticClass:"fullBg"}),r("div",{staticClass:"fullBg"}),r("div",{staticClass:"fullBg"}),r("button",{on:{click:e.onStart}},[r("svg-icon",{staticClass:"speedIconBox",attrs:{"icon-class":"speed-transaction"}})],1)])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.ojbk,expression:"ojbk"}],staticClass:"result"},[r("div",{staticClass:"iconBox"},[r("svg-icon",{staticClass:"icon",attrs:{"icon-class":"coin-btc1"}})],1),r("div",{staticClass:"info"},[r("p",{staticClass:"p1"},[e._v(e._s(e.$t("grabCoin.grabSuccess")))]),r("p",{staticClass:"p2"},[r("a",{attrs:{href:e.txlink,target:"_blank"}},[e._v(e._s(e.txid))])])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.terminalInfo.length>0,expression:"terminalInfo.length > 0"}],ref:"terminal",staticClass:"terminal"},e._l(e.terminalInfo,(function(t){return r("p",{key:t},[e._v(e._s(t))])})),0)],1)],1)},o=[],s=(r("16ca"),r("4b4e"),r("4200"),r("bf2f"),r("24a8"),r("27ae"),r("f566"),r("9b5f"),r("d447"),r("fc13"),r("5b12"),r("ea94"),r("96cf"),r("1da1")),i=r("5530"),c=r("2f62"),p={zh:{grabCoin:{platform:"平台",rpc_tips:"RPC节点可以自定义，建议选择延迟小的节点，越小越快!",test:"测试",private_key:"私钥",private_key_tips:"本APP完全本地运行，不会上传私钥到服务器，欢迎监督检测",import:"导入",address:"地址",balance:"余额",gwei_tips:"手续费gwei设置，越大越快!",buy_num:"购买数量",buy_num_tips:"发送Token的数量，比如USDT兑换BTC，USDT的数量",pool_size:"池子大小",pool_size_tips:"池子只要大于此值，触发购买事件。比如USDT兑换BTC，如发现USDT池子大于此值，触发购买",watch_frequency:"监控频率",watch_frequency_tips:"秒为单位，越小越快。根据RPC节点合理设置。",send_token:"发送Token地址",send_token_tips:"如用USDT兑换BTC，USDT的合约地址，如用基础代币兑换(ETH、HT、BNB)就为空。此Token余额要等于或大于购买数量，否则出错!",approve_before:"提前授权",approve_success:"授权成功",get_token:"获得Token地址",get_token_tips:"如用USDT兑换BTC，输入框填BTC的合约地址，如用基础代币兑换(ETH、HT、BNB)就为空。",grabSuccess:"大哥发财，抢到了！",error_private_key:"请导入私钥!",error_platform:"请先选择平台",error_gwei:"请填写GWEI!",error_token:"请先检测Token!",error_buy_num:"请填写购买数量!",fromTokenApprove:"发送Token地址请提前授权!",error_pool:"请填写池子数量!",token_approve_repeat:"此token你已授权过",token_err_tips:"错了噢，Token错误",rpc_err_tips:"错了噢，节点错误!",check:"检测",remark:"免责声明：由自身操作失误、填写失误、网络失误造成的损失 CoinTool.App 概不负责"}},en:{grabCoin:{platform:"Platform",rpc_tips:"RPC nodes can be customized, and it is recommended to select nodes with low latency, the smaller the faster!",test:"Test",private_key:"Private Key",private_key_tips:"This APP runs completely locally and will not upload the private key to the server. You are welcome to supervise and check",import:"Import",address:"Address",balance:"Balance",gwei_tips:"Charge GWEI setting, the bigger the faster!",buy_num:"Purchase amount",buy_num_tips:"The number of tokens sent, such as USDT to BTC, the number of USDT",pool_size:"Pool amount",pool_size_tips:"Whenever the pool is greater than this value, a purchase event is triggered. For example, if USDT is converted into BTC, if USDT pool is found to be greater than this value, the purchase will be triggered",watch_frequency:"Watch frequency",watch_frequency_tips:"In seconds, the smaller the faster. Set it appropriately according to the RPC node.",send_token:"Send Token Address",send_token_tips:"If you exchange BTC with USDT, enter the BTC contract address in the input box. If you exchange BTC with basic tokens (ETH, HT, BNB), it will be blank.",approve_before:"Approve before",approve_success:"Approve Success",fromTokenApprove:"Please approve the token address in advance!",get_token:"Recipient Token Address",get_token_tips:"If you exchange the BTC contract address with USDT, if you exchange it with basic tokens (ETH, HT, BNB), it will be empty.",grabSuccess:"Success",error_private_key:"Please import private key",error_platform:"Please select the platform",error_gwei:"Please enter GWEI!",error_token:"Please check the Token first",error_buy_num:"Please enter the purchase quantity",error_pool:"Please enter Pool total!",token_approve_repeat:"You have approve this token",token_err_tips:"Token Error",rpc_err_tips:"RPC Error",check:"Check",remark:"Disclaimer: CoinTool.App is not responsible for any loss caused by its own operation error, filling error or network error"}}},l=r("b893"),u=r("ed08"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{width:e.isPc?"600px":"auto",title:e.$t("openGrabCoinVipDialog.title"),visible:e.isShowDialog,center:""},on:{"update:visible":function(t){e.isShowDialog=t}}},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dialogBox"},[r("div",{staticClass:"vipIconBox"},[r("svg-icon",{staticClass:"icon",attrs:{"icon-class":"vip"}})],1),r("div",{staticClass:"text"},[r("p",[e._v(e._s(e.$t("openGrabCoinVipDialog.text0")))]),r("p",[e._v(e._s(e.$t("openGrabCoinVipDialog.text1",{amount:e.vipfee,sybmol:"HT"})))]),r("p",{domProps:{innerHTML:e._s(e.$t("openGrabCoinVipDialog.text2",{sybmol:"HT"}))}}),r("p",[e._v(e._s(e.$t("openGrabCoinVipDialog.text3")))])]),r("el-tag",{directives:[{name:"show",rawName:"v-show",value:e.txhash.length>0,expression:"txhash.length>0"}],attrs:{type:"warning"}},[e._v(e._s(e.txhash))])],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{disabled:e.isvip,type:"primary"},on:{click:e.onJoinVip}},[r("svg-icon",{staticClass:"icon vipIcon",attrs:{"icon-class":"vip"}}),e._v(e._s(e.$t("openGrabCoinVipDialog.joinBtn")))],1)],1)])},f=[],d={zh:{openGrabCoinVipDialog:{title:"欢迎成为科学家",text0:"灰度测试中，预购从速，不定时涨价",text1:"只需要支付 {amount} {sybmol}，您将获得永久VIP使用权.",text2:"您的科学家抢币神器将永久免费",text3:"如果您想了解更多相关信息，请添加微信(x0Panda)或者直接在电报群中@管理员即可",joinBtn:"加入科学家"}},en:{openGrabCoinVipDialog:{title:"Welcome to join VIP",text0:"",text1:"Just only pay {amount}  {sybmol} to be a vip member.",text2:"{sybmol} Token MultiSender your transactions sent through CoinTool.app will be free forever!<br/> Keep in mind, you would still need to pay for the mining fees.",text3:"If you need additional information, feel free to ask in our Telegram channel",joinBtn:"Buy"}}},b=r("a835"),h=r("5ba3"),g=r("81ad"),x=r.n(g),k="openGrabCoinVipDialog",v={inject:["onCheckConnect"],components:{},props:{routerName:{type:String,default:""}},data:function(){return{window:window,isvip:!1,loading:!0,defaultId:1,vipfee:0,vipfee_wei:"",txhash:"",isShowDialog:!1}},computed:Object(i["a"])({},Object(c["b"])(["isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[k]||(this.$i18n.mergeLocaleMessage("en",d.en),this.$i18n.mergeLocaleMessage("zh",d.zh))},mounted:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onShow:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isShowDialog=!e.isShowDialog,r=128,a=b["a"].rpcNode(r),t.next=5,e.$ajax({url:a,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",data:"0x"+x.a.methodID("vipfee",[]).toString("hex")},"latest"]}});case 5:return n=t.sent,e.vipfee_wei=parseInt(n.result),e.vipfee=parseInt(n.result)/1e18,t.next=10,e.$ajax({url:a,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",data:"0x"+x.a.methodID("isVIP",["address"]).toString("hex")+x.a.rawEncode(["address"],[b["a"].getAccount()]).toString("hex")},"latest"]}});case 10:o=t.sent,parseInt(o.result)>0&&(e.$message({message:"You is vip",type:"success"}),e.isvip=!0),e.loading=!1;case 13:case"end":return t.stop()}}),t)})))()},onJoinVip:function(){this.onJoin()},onJoin:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.onCheckConnect()){t.next=2;break}return t.abrupt("return");case 2:if(128===b["a"].getChainId()){t.next=12;break}return e.$notify.info({title:"Alert",message:e.$t("common.no_connect_heconetwork"),duration:0}),t.prev=4,t.next=7,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x80",chainName:"HECO Mainnet",nativeCurrency:{name:"Huobi Token",symbol:"HT",decimals:18},rpcUrls:["https://http-mainnet-node.huobichain.com"],blockExplorerUrls:["https://scan.hecochain.com/"]}]});case 7:t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](4);case 11:return t.abrupt("return");case 12:return r="0x"+x.a.methodID("registerVIP",[]).toString("hex"),a={from:b["a"].getAccount(),to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",gas:Object(h["toHex"])(9e4),value:Object(h["toHex"])(e.vipfee_wei),data:r},t.next=16,b["a"].sendTransaction(a);case 16:n=t.sent,e.txhash=n,e.isvip=!0;case 19:case"end":return t.stop()}}),t,null,[[4,9]])})))()}}},_=v,C=(r("a565"),r("2877")),w=Object(C["a"])(_,m,f,!1,null,"5e2eef58",null),T=w.exports,y=r("99e5"),$=r.n(y),I=r("c039"),D=r.n(I),j=r("3b1c"),S=r("ed62"),B="grabCoin",O={name:B,inject:["onCheckConnect"],components:{OpenGrabCoinVipDialog:T},data:function(){return{isVip:!1,terminalInfo:[],pt:{},rules:{},address:"",balance:0,fromTokenApprove:!1,token1Info:!1,token2Info:!1,txlink:"",isRun:!1,txid:"",approve1_close:!1,approve2_close:!1,ojbk:!1,ptOptions:[{value:"1",label:"MDEX"},{value:"2",label:"UNISWAP"},{value:"3",label:"PancakeSwap"}],form:{platform:"",fromToken:"",pool:"",toToken:"",amount:"",gwei:"",timep:"2",pkv:"",rpc:""}}},computed:Object(i["a"])({},Object(c["b"])(["isConnect","account","isPc","language"])),watch:{account:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.onCheckVip();case 2:case"end":return e.stop()}}),e)})))()},"form.platform":function(e,t){this.form.rpc=this.pt[parseInt(e)].rpc},"form.fromToken":function(e,t){e!==t&&(this.form.fromToken=e.trim())},"form.toToken":function(e,t){e!==t&&(this.form.toToken=e.trim())},"form.pkv":function(e,t){e!==t&&(this.form.pkv=e.trim())}},created:function(){this.$i18n.getLocaleMessage("en")[B]||(this.$i18n.mergeLocaleMessage("en",p.en),this.$i18n.mergeLocaleMessage("zh",p.zh)),this.rules={}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.pt={1:{rpc:"https://http-mainnet-node.defibox.com",scan:"https://hecoinfo.com",baseCoin:"0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",init_code:"0x2ad889f82040abccb2649ea6a874796c1601fb67f91a747a80e08860c73ddf24",factory_address:"0xb0b670fc1f7724119963018db0bfa86adb22d941",router_address:"0xed7d5f38c79115ca12fe6c0041abb22f0a06c300"},2:{rpc:"https://mainnet.infura.io/v3/b426370b8d7d4847b57db1b1a8603938",scan:"https://etherscan.io",baseCoin:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",init_code:"0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",factory_address:"0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",router_address:"0x7a250d5630b4cf539739df2c5dacb4c659f2488d"},3:{rpc:"https://bsc-dataseed.binance.org/",scan:"https://bscscan.com",baseCoin:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",init_code:"0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66",factory_address:"0xbcfccbde45ce874adcb698cc183debcf17952812",router_address:"0x05ff2b0db69458a0750badebc4f9e13add608c7f"}},t.next=3,Object(u["i"])(1e3);case 3:return t.next=5,e.onCheckVip();case 5:case"end":return t.stop()}}),t)})))()},methods:{onCheckVip:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null===b["a"].getAccount()){t.next=6;break}return r=b["a"].rpcNode(128),t.next=4,e.$ajax({url:r,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",data:"0x"+x.a.methodID("isVIP",["address"]).toString("hex")+x.a.rawEncode(["address"],[b["a"].getAccount()]).toString("hex")},"latest"]}});case 4:a=t.sent,parseInt(a.result)>0&&(e.$message({message:"You is vip",type:"success"}),e.isVip=!0);case 6:case"end":return t.stop()}}),t)})))()},addTerminalInfo:function(e){var t=this.$refs.terminal;this.terminalInfo.push(e),setTimeout((function(){t.scrollTop=t.scrollHeight}),0)},approve1:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,o,s,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return e.$message.error("请导入私钥!"),t.abrupt("return");case 3:if(""!==e.form.gwei){t.next=6;break}return e.$message.error("请填写GWEI!"),t.abrupt("return");case 6:if(r=[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"}],e.token1Info){t.next=10;break}return e.$message.error("请先检测Token!"),t.abrupt("return");case 10:return console.log(2),e.approve1_close=!0,n="0xdd62ed3e000000000000000000000000".concat(e.address.substring(2,50),"000000000000000000000000").concat(e.pt[parseInt(e.form.platform)].router_address.substring(2,50)),t.next=15,e.$ajax({url:e.form.rpc,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e.form.fromToken,data:n},"latest"]}});case 15:if(o=t.sent,"0x"!==o.result&&"0x0000000000000000000000000000000000000000000000000000000000000000"!==o.result){t.next=26;break}return s=new a.eth.Contract(r,e.form.fromToken),i="115792089237316195423570985008687907853269984665640564039457584007913129639935",t.next=21,s.methods.approve(e.pt[parseInt(e.form.platform)].router_address,i).send({from:e.address,gasPrice:D.a.toWei(e.form.gwei,"gwei"),gas:34e4});case 21:c=t.sent;try{c.transactionHash&&e.$message.error(e.$t("grabCoin.approve_success"))}catch(p){}e.fromTokenApprove=!0,t.next=28;break;case 26:e.fromTokenApprove=!0,e.$message.error("此token你已授权过!");case 28:case"end":return t.stop()}}),t)})))()},approve2:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,o,s,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return e.$message.error(e.$t("grabCoin.error_private_key")),t.abrupt("return");case 3:if(""!==e.form.gwei){t.next=6;break}return e.$message.error(e.$t("grabCoin.error_gwei")),t.abrupt("return");case 6:if(r=[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"}],e.token2Info){t.next=10;break}return e.$message.error(e.$t("grabCoin.error_token")),t.abrupt("return");case 10:return e.approve2_close=!0,n="0xdd62ed3e000000000000000000000000".concat(e.address.substring(2,50),"000000000000000000000000").concat(e.pt[parseInt(e.form.platform)].router_address.substring(2,50)),t.next=14,e.$ajax({url:e.form.rpc,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e.form.toToken,data:n},"latest"]}});case 14:if(o=t.sent,"0x"!==o.result&&"0x0000000000000000000000000000000000000000000000000000000000000000"!==o.result){t.next=24;break}return s=new a.eth.Contract(r,e.form.toToken),i="115792089237316195423570985008687907853269984665640564039457584007913129639935",t.next=20,s.methods.approve(e.pt[parseInt(e.form.platform)].router_address,i).send({from:e.address,gasPrice:D.a.toWei(e.form.gwei,"gwei"),gas:34e4});case 20:c=t.sent;try{c.transactionHash&&e.$message.success(e.$t("grabCoin.approve_success"))}catch(p){console.log(p)}t.next=25;break;case 24:e.$message.error(e.$t("grabCoin.token_approve_repeat"));case 25:case"end":return t.stop()}}),t)})))()},onStart:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isVip){t.next=3;break}return e.$refs.OpenGrabCoinVipDialog.onShow(),t.abrupt("return");case 3:if(a){t.next=6;break}return e.$message.error(e.$t("grabCoin.error_private_key")),t.abrupt("return");case 6:if(""!==e.form.gwei){t.next=9;break}return e.$message.error(e.$t("grabCoin.error_gwei")),t.abrupt("return");case 9:if(""!==e.form.amount){t.next=12;break}return e.$message.error(e.$t("grabCoin.error_buy_num")),t.abrupt("return");case 12:if(""!==e.form.pool){t.next=15;break}return e.$message.error(e.$t("grabCoin.error_pool")),t.abrupt("return");case 15:if(""!==e.form.fromToken){t.next=19;break}e.form.fromToken=e.pt[parseInt(e.form.platform)].baseCoin,t.next=25;break;case 19:if(e.token1Info){t.next=22;break}return e.$message.error(e.$t("grabCoin.error_token")),t.abrupt("return");case 22:if(e.fromTokenApprove){t.next=25;break}return e.$message.error(e.$t("grabCoin.fromTokenApprove")),t.abrupt("return");case 25:if(""!==e.form.toToken){t.next=29;break}e.form.toToken=e.pt[parseInt(e.form.platform)].baseCoin,t.next=32;break;case 29:if(e.token2Info){t.next=32;break}return e.$message.error(e.$t("grabCoin.error_token")),t.abrupt("return");case 32:return e.form.fromToken.trim().toLowerCase()===e.pt[parseInt(e.form.platform)].baseCoin.toLowerCase()&&(e.token1Info={symbol:"BaseCoin",decimal:18}),e.form.toToken.trim().toLowerCase()===e.pt[parseInt(e.form.platform)].baseCoin.toLowerCase()&&(e.token2Info={symbol:"BaseCoin",decimal:18}),e.terminalInfo.length>200&&e.terminalInfo.shift(),e.isRun=!e.isRun,e.isRun?(e.addTerminalInfo(e.formatDate((new Date).getTime())+": 启动"),e.$message.success("已启动抢币")):e.$message.success("已暂停抢币"),t.next=39,e.swap();case 39:case"end":return t.stop()}}),t)})))()},swap:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,o,s,i,c,p,l,m,f,d,b,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==e.isRun){t.next=3;break}return e.addTerminalInfo(e.formatDate((new Date).getTime())+": 停止"),t.abrupt("return");case 3:return r=Object(j["c"])(e.pt[parseInt(e.form.platform)].factory_address,Object(S["a"])(["bytes"],[Object(S["b"])(["address","address"],[e.form.fromToken,e.form.toToken])]),e.pt[parseInt(e.form.platform)].init_code),n=Object(j["c"])(e.pt[parseInt(e.form.platform)].factory_address,Object(S["a"])(["bytes"],[Object(S["b"])(["address","address"],[e.form.toToken,e.form.fromToken])]),e.pt[parseInt(e.form.platform)].init_code),o=[{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"}],t.prev=6,t.next=9,e.getTokenBalance(e.form.fromToken,r);case 9:return s=t.sent,t.next=12,e.getTokenBalance(e.form.fromToken,n);case 12:i=t.sent,t.next=22;break;case 15:return t.prev=15,t.t0=t["catch"](6),t.next=19,Object(u["i"])(1e3*Number(e.form.timep));case 19:return t.next=21,e.swap();case 21:return t.abrupt("return");case 22:if(!(parseInt(e.form.pool)>0)){t.next=33;break}if(!(s/Math.pow(10,e.token1Info.decimal)<parseInt(e.form.pool)&&i/Math.pow(10,e.token1Info.decimal)<parseInt(e.form.pool))){t.next=32;break}return e.addTerminalInfo(e.formatDate((new Date).getTime())+": 1 池="+s/Math.pow(10,e.token1Info.decimal)+" 2 池="+i/Math.pow(10,e.token1Info.decimal)+" 没有达到触发条件"+parseInt(e.form.pool)),t.next=27,Object(u["i"])(1e3*Number(e.form.timep));case 27:return t.next=29,e.swap();case 29:return t.abrupt("return");case 32:e.addTerminalInfo(e.formatDate((new Date).getTime())+": 1 池="+s/Math.pow(10,e.token1Info.decimal)+" 2 池="+i/Math.pow(10,e.token1Info.decimal)+" 达到触发条件"+parseInt(e.form.pool));case 33:if(c=new a.eth.Contract(o,e.pt[parseInt(e.form.platform)].router_address),p=e.toolNumber(e.form.amount*Math.pow(10,e.token1Info.decimal)),l=0,m=[e.form.fromToken,e.form.toToken],f=e.address,d=Math.floor(Date.now()/1e3)+1200,t.prev=39,e.form.fromToken.trim().toLowerCase()!==e.pt[parseInt(e.form.platform)].baseCoin.toLowerCase()){t.next=48;break}return t.next=43,c.methods.swapExactETHForTokens(l,m,f,d).send({from:e.address,gas:3e5,value:D.a.toWei(e.form.amount,"ether"),gasPrice:D.a.toWei(e.form.gwei,"gwei")});case 43:b=t.sent,e.isRun=!1;try{b.transactionHash&&(e.ojbk=!0,e.txlink=e.pt[parseInt(e.form.platform)].scan+"/tx/"+b.transactionHash,e.txid=b.transactionHash)}catch(g){}t.next=53;break;case 48:return t.next=50,c.methods.swapExactTokensForTokens(p,l,m,f,d).send({from:e.address,gas:3e5,gasPrice:D.a.toWei(e.form.gwei,"gwei")});case 50:h=t.sent,e.isRun=!1;try{h.transactionHash&&(e.ojbk=!0,e.txlink=e.pt[parseInt(e.form.platform)].scan+"/tx/"+h.transactionHash,e.txid=h.transactionHash)}catch(g){}case 53:t.next=58;break;case 55:t.prev=55,t.t1=t["catch"](39),e.addTerminalInfo(e.formatDate((new Date).getTime())+": "+t.t1);case 58:case"end":return t.stop()}}),t,null,[[6,15],[39,55]])})))()},getTokenBalance:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"}],o=new a.eth.Contract(n,e),r.next=4,o.methods.balanceOf(t).call();case 4:return s=r.sent,r.abrupt("return",s);case 6:case"end":return r.stop()}}),r)})))()},init_account:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,""!==e.form.rpc){t.next=4;break}return e.$message.error(e.$t("grabCoin.error_platform")),t.abrupt("return");case 4:return a=new $.a(e.form.rpc),r=a.eth.accounts.privateKeyToAccount(e.form.pkv),a.eth.accounts.wallet.add(r),a.eth.defaultAccount=r.address,e.address=a.eth.defaultAccount,t.t0=D.a,t.next=12,a.eth.getBalance(e.address);case 12:t.t1=t.sent,e.balance=t.t0.fromWei.call(t.t0,t.t1,"ether"),t.next=20;break;case 16:t.prev=16,t.t2=t["catch"](0),console.log(t.t2.message),e.$message.error(t.t2.message);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()},isTestRpc:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$ajax({url:e.form.rpc,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_blockNumber",params:[]}});case 3:r=t.sent,e.$message({message:"获取到最新区块:"+parseInt(r.result),type:"success"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$message.error(e.$t("grabCoin.rpc_err_tips"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},isTestToken1:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getTokenInfo(e.form.fromToken);case 2:r=t.sent,r.symbol&&r.decimal?(e.token1Info=r,e.$message({message:"Token获取成功:"+r.symbol,type:"success"})):e.$message.error(e.$t("grabCoin.token_err_tips"));case 4:case"end":return t.stop()}}),t)})))()},isTestToken2:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getTokenInfo(e.form.toToken);case 2:r=t.sent,r.symbol&&r.decimal?(e.token2Info=r,e.$message({message:"Token获取成功:"+r.symbol,type:"success"})):e.$message.error(e.$t("grabCoin.token_err_tips"));case 4:case"end":return t.stop()}}),t)})))()},getTokenInfo:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$ajax({url:t.form.rpc,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x95d89b41"},"latest"]}});case 2:return a=r.sent,r.next=5,t.$ajax({url:t.form.rpc,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x313ce567"},"latest"]}});case 5:return n=r.sent,r.abrupt("return",{symbol:l["a"].cleanAsciiText(D.a.toAscii(a.result).toString()),decimal:parseInt(n.result)});case 7:case"end":return r.stop()}}),r)})))()},formatDate:function(e){var t=new Date(e),r=t.getFullYear()+"-",a=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",n=t.getDate()<10?"0"+t.getDate():t.getDate(),o=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",s=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",i=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return r+a+n+" "+o+s+i},toolNumber:function(e){if(e=e.toString(),-1!==e.indexOf("+")&&(e=e.replace("+","")),-1!==e.indexOf("E")||-1!==e.indexOf("e")){var t="",r="",a=null,n=0,o=[],s="",i=e.toString();if("-"===i[0]&&(i=i.substr(1),s="-"),-1!==i.indexOf("E")||-1!==i.indexOf("e")){var c=new RegExp("^(((\\d+.?\\d+)|(\\d+))[Ee]{1}((-(\\d+))|(\\d+)))$","ig");if(a=c.exec(i),null!=a&&(t=a[2],r=a[5],a=null),!t&&!r)return!1;if(n=-1===t.indexOf(".")?0:t.indexOf("."),t=t.replace(".",""),o=t.split(""),Number(r)>=0){var p=t.substr(n);r=Number(r);for(var l=0;l<=r-p.length;l++)o.push("0");r-p.length<0&&o.splice(n+r,0,".")}else{r=r.replace("-",""),r=Number(r);for(l=0;l<r-n;l++)o.unshift("0");var u=r-n>=0?1:-(r-n);o.splice(u,0,".")}}return t=o.join(""),s+t}return e}}},R=O,M=(r("6678"),Object(C["a"])(R,n,o,!1,null,"21b8e9fc",null));t["default"]=M.exports},f54d:function(e,t,r){}}]);