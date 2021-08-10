(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b149e40a"],{"189a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:"container "+(e.tableData.length>0?"miniContainer":"")},[r("div",{staticClass:"createBox"},[r("div",{staticClass:"boxCenter"},[r("div",{staticClass:"coinIcon"},[r("svg-icon",{style:"color:"+e.$coinInfo[e.form.coin].color,attrs:{"icon-class":e.$coinInfo[e.form.coin].icon}})],1),r("div",{staticClass:"switchBox"},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"large"},on:{change:e.onChangeChain},model:{value:e.form.coin,callback:function(t){e.$set(e.form,"coin",t)},expression:"form.coin"}},e._l(e.chainList,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"16px"}},[r("svg-icon",{staticClass:"icon",style:"color:"+e.$coinInfo[t.value].color,attrs:{"icon-class":e.$coinInfo[t.value].icon}})],1)])})),1)],1),r("div",{staticClass:"inputBox"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:e.$t("approve.sleep"),placement:"top"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("approve.inputPlaceholder")},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}})]),r("div",{staticClass:"icon",on:{click:e.onCheck}},[r("i",{class:e.loading?"el-icon-loading":"el-icon-right"})])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:0===e.tableData.length,expression:"tableData.length === 0"}],staticClass:"desc"},[r("el-alert",{attrs:{title:e.$t("approve.desc"),type:"success",closable:!1}})],1)])]),r("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],attrs:{"text-inside":!0,"stroke-width":12,percentage:e.percentage}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],staticClass:"scrollBox"},[r("div",{staticClass:"tips"},[r("p",{staticClass:"alertText"},[e._v(e._s(e.$t("approve.alert_text")))]),""!==e.account&&"trx"!==e.form.coin?r("p",[r("el-checkbox",{model:{value:e.donationChecked,callback:function(t){e.donationChecked=t},expression:"donationChecked"}},[e._v(e._s(e.$t("approve.donation",{amount:e.$coinInfo[e.form.coin].approveDonateCost,sybmol:this.$coinInfo[e.form.coin].symbol})))])],1):r("div",{staticClass:"btnBox"},[r("el-button",{attrs:{type:"success"},on:{click:e.onConnectWallet}},[e._v(e._s(e.$t("common.connect")))])],1)]),r("el-row",{staticClass:"cardList",attrs:{gutter:20}},e._l(e.tableData,(function(t,a){return r("el-col",{key:a,attrs:{lg:12,xs:24}},[r("div",{staticClass:"card"},[r("div",{staticClass:"coinInfo"},[r("div",{staticClass:"left"},[r("div",{staticClass:"imgBox"},[r("el-image",{staticClass:"img img1",attrs:{src:e.$coinInfo[e.form.coin].logoLink.replace("#address#","bsc"===e.form.coin?t.symbol:t.token_address)}},[r("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[r("img",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png"}})])])],1),r("div",{staticClass:"sybmol"},[r("a",{staticStyle:{"margin-left":"6px"},attrs:{href:e.getBrowserLink({chainName:e.form.coin,token:t.token_address,address:e.form.address,type:"token"}),target:"_blank"}},[e._v(e._s(t.symbol))])])]),r("div",{staticClass:"right"},[e._v(" "+e._s(e.$t("approve.dangerLevel"))+": "),r("span",{class:"flag "+(1===t.type?"redBg":"greenBg")},[e._v(e._s(1===t.type?e.$t("approve.high"):e.$t("approve.low")))])])]),r("ul",[r("li",[r("p",[r("span",{staticClass:"key"},[e._v(e._s(e.$t("approve.smart_contract"))+":")]),r("a",{attrs:{href:e.getBrowserLink({chainName:e.form.coin,address:t.c_address,type:"contract"}),target:"_blank"}},[e._v(" "+e._s(e._f("autoCheckName")(t.c_address))+" ")])])]),r("li",[r("p",[r("span",{staticClass:"key"},[e._v(e._s(e.$t("approve.token"))+":")]),r("a",{attrs:{href:e.getBrowserLink({chainName:e.form.coin,token:t.token_address,address:e.form.address,type:"token"}),target:"_blank"}},[e._v(" "+e._s(e._f("autoAddress")(t.token_address))+" ")])])]),r("li",[r("p",[r("span",{staticClass:"key"},[e._v(e._s(e.$t("approve.amount"))+":")]),r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.amount)+" "),r("i",{directives:[{name:"show",rawName:"v-show",value:1===t.type,expression:"item.type===1"}],staticClass:"el-icon-warning",staticStyle:{color:"red"}})])])])]),r("div",{staticClass:"unlockBtn"},[e.form.web3Address===e.form.address&&""!==e.form.web3Address?r("el-button",{attrs:{disabled:1===t.status,type:"danger",size:"mini"},on:{click:function(r){"trx"===e.form.coin?e.onCloseTrxApprove(a,t):e.onCloseCommonApprove(a,t)}}},[e._v(e._s(e.$t("approve.decline")))]):r("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.$t("approve.unlock")))])],1)])])})),1)],1)],1)},n=[],o=r("4833"),s=r("efe2"),c=(r("6a61"),r("37de"),r("1e34"),r("8b79"),r("96e6"),r("dfe9"),r("7479"),r("7fe9"),r("9bdd"),r("4a32"),r("05d6"),r("c9b2"),{zh:{approve:{desc:"工具说明：检查您的钱包地址授权过哪些合约，请及时取消不信任的合约授权，保证你钱包的安全性！",smart_contract:"授权智能合约",token:"被授权Token",amount:"授权数量",donation:"请CoinTool.App 喝一杯咖啡({amount}{sybmol})",donation_ok:"谢谢老板请我喝咖啡!",alert_text:"当您向某项合约授权无限额度的权限，该项目有权支配您所有的资产，此类授权危险系数极大，建议您及时收回授权.",action:"操作",decline:"取消授权",decline_ok:"成功取消授权",addressError:"查询地址错误",unlock:"取消授权请先解锁钱包",addressZero:"你没有授权代币给合约过，很棒!",donation_text1:"是否像CoinTool捐赠?",alert:"提示",confirmButtonText:"确定",cancelButtonText:"关闭",unlimited:"无限",sleep:"查询过程缓慢，请耐心等待!",inputPlaceholder:"请输入你要检查的地址",dangerLevel:"危险等级",high:"高",low:"低"}},en:{approve:{desc:"Tips: check your wallet address authorized those contracts, please cancel the authorization of the contracts do not trust, to ensure the security of your wallet!",smart_contract:"Contract",token:"Token",amount:"Allowance",sleep:"The query process is slow, please be patient!",donation:"please CoinTool.App  Have a cup of coffee ({amount}{sybmol})",alert_text:"When you authorize an unlimited amount of access to a contract, the program has the right to control all of your assets, this type of authorization is extremely dangerous and you are advised to withdraw it in time.",donation_ok:"Thank you for the coffee!",action:"Action",decline:"Revoke",decline_ok:"Successfully Decline",addressError:"Address Error",addressZero:"You don't have an allowance token for a contract. It's great!",unlimited:"unlimited",donation_text1:"Please coffee for cointool?",alert:"Alert",confirmButtonText:"Confirm",cancelButtonText:"Cancel",unlock:"Please unlock wallet",inputPlaceholder:"Please enter the address you want to check",dangerLevel:"Danger level",high:"High",low:"Low"}}}),i=r("a835"),u=r("85d4"),d=r("b420"),f=r.n(d),l=r("8feb"),p=r.n(l),m=r("b893"),h=r("ed08"),x=r("52c1"),b=r("986e"),g="approve",k={heco:"https://api.hecoinfo.com/api?module=account&action=txlist&address=#address#",ftm:"https://api.ftmscan.com/api?module=account&action=txlist&address=#address#",matic:"https://api.polygonscan.com/api?module=account&action=txlist&address=#address#",bsc:"https://api.bscscan.com/api?module=account&action=txlist&address=#address#",trx:"https://api.trongrid.io/v1/accounts/#address#/transactions/trc20?limit=200"},v=Object(s["a"])(Object(s["a"])({name:g,inject:["tronwalletStateTest"],props:{}},Object(x["b"])(["isPc"])),{},{data:function(){return{loading:!1,donationChecked:!0,donationOk:!0,form:{coin:"eth",address:"",web3Address:""},tableData:[],chainList:[],percentage:0}},computed:Object(s["a"])({},Object(x["b"])(["isPc","account"])),watch:{account:function(e){this.form.address=e.toLowerCase(),this.form.web3Address=e.toLowerCase()},$route:{immediate:!0,handler:function(e){}}},created:function(){this.$i18n.getLocaleMessage("en")[g]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh)),this.chainList=Object(h["h"])(g);var e=this.$route.path.replace("/".concat(g,"/"),"").replace("/","");"trx"===e&&this.tronwalletStateTest(),this.form.coin=e},mounted:function(){var e=this,t=this.$route.query.address;setTimeout((function(){if("trx"===e.form.coin)try{e.form.web3Address=e.form.address=window.tronWeb.defaultAddress.base58,0!==t.length&&(e.form.address=t)}catch(r){console.log(r)}else t&&0!==t.length&&(e.form.address=t.toLowerCase())}),1e3)},methods:{onConnectWallet:function(){b["d"].$emit(b["a"])},getBrowserLink:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{chainName:"eth",token:"",address:"",type:"token"};return"token"===e.type?"trx"!==e.chainName?"".concat(this.$coinInfo[e.chainName].blockBrowser,"/token/").concat(e.token,"?a=").concat(e.address):"".concat(this.$coinInfo[e.chainName].blockBrowser,"/#/token20/").concat(e.token,"?a=").concat(e.address):"contract"===e.type?"trx"!==e.chainName?"".concat(this.$coinInfo[this.form.coin].blockBrowser,"/address/").concat(e.address):"".concat(this.$coinInfo[this.form.coin].blockBrowser,"/#/address/").concat(e.address):void 0},onChangeChain:function(e){this.tableData=[],this.percentage=0,this.$message.success(this.$t("common.switchChainSuccess",{chain:e.toUpperCase()})),this.$router.replace({path:"/".concat(g,"/").concat(e),query:this.$route.query})},onCheck:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.form.address){t.next=3;break}return e.$message.error(e.$t("approve.inputPlaceholder")),t.abrupt("return");case 3:if(e.form.address=e.form.address.trim(),console.log(e.form.address,"this.form.address"),r="trx"===e.form.coin?"trx":"eth",f.a.validate(e.form.address,r)){t.next=9;break}return e.$message.error(e.$t("approve.addressError")),t.abrupt("return");case 9:if("trx"!==e.form.coin){t.next=14;break}return t.next=12,e.trxCheckList();case 12:t.next=16;break;case 14:return t.next=16,e.commonCheckList();case 16:case"end":return t.stop()}}),t)})))()},commonCheckList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s,c,i,u,d,f,l,p,m,h,x,b,g,k,v,w,y,$,_,C,j,O,I,S,A,T,R,N,D,B,M,L,P,z,F,H,W,E,q;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.tableData=[],e.percentage=0,e.loading=!0,r=[],a=[],t.prev=5,"okt"!==e.form.coin){t.next=35;break}return t.next=9,e.checkOktApi(e.form.address);case 9:n=t.sent,t.t0=regeneratorRuntime.keys(n.data);case 11:if((t.t1=t.t0()).done){t.next=32;break}o=t.t1.value,t.t2=regeneratorRuntime.keys(n.data[o].spenders);case 14:if((t.t3=t.t2()).done){t.next=30;break}if(s=t.t3.value,c=n.data[o].spenders[s].id,i=n.data[o].id+c,!r[i]){t.next=20;break}return t.abrupt("continue",14);case 20:return t.next=22,e.getallowance(e.form.address,n.data[o].id,c);case 22:if(u=t.sent,0!==parseInt(u)){t.next=25;break}return t.abrupt("continue",14);case 25:r[i]=!0,d=e.$t("approve.unlimited"),e.tableData.push({type:1,status:0,symbol:n.data[o].name,token_address:n.data[o].id,c_address:c,amount:d}),t.next=14;break;case 30:t.next=11;break;case 32:return e.percentage=100,e.loading=!1,t.abrupt("return");case 35:if("heco"!==e.form.coin&&"bsc"!==e.form.coin&&"ftm"!==e.form.coin&&"matic"!==e.form.coin){t.next=68;break}return t.next=38,Promise.any([e.checkApi(e.form.address),e.checkApiProxy(e.form.address),e.checkApiProxy1(e.form.address)]);case 38:f=t.sent,l=f.result.length-1;case 40:if(!(l>=0)){t.next=65;break}if(!(f.result[l].input.indexOf("0x095ea7b3")>-1)){t.next=62;break}if(p="0x"+f.result[l].input.substring(34,74),"0x0000000000000000000000000000000000000000"!==p){t.next=45;break}return t.abrupt("continue",62);case 45:if(m=f.result[l].to+p,!r[m]){t.next=48;break}return t.abrupt("continue",62);case 48:if(r[m]=!0,a[f.result[l].to]){t.next=53;break}return t.next=52,e.getTokenInfo(f.result[l].to);case 52:a[f.result[l].to]=t.sent;case 53:if(h=a[f.result[l].to],x=h.symbol,b=h.decimal,g=e.$t("approve.unlimited"),k=1,v="0x"+f.result[l].input.substring(74,200),"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"!==v&&(g=parseFloat(parseInt(v)/Math.pow(10,b)),g.toString().indexOf(".")>-1&&(g=g.toFixed(4)),(g.toString().indexOf("e")>-1||g.toString().indexOf("+")>-1)&&(g="<0.00001"),k=2),0!==g){t.next=60;break}return t.abrupt("continue",62);case 60:e.tableData.push({type:k,status:0,symbol:x,token_address:f.result[l].to,c_address:p,amount:g}),console.log(e.tableData);case 62:l--,t.next=40;break;case 65:return e.percentage=100,e.loading=!1,t.abrupt("return");case 68:t.next=73;break;case 70:t.prev=70,t.t4=t["catch"](5),console.log(t.t4);case 73:if("heco"!==e.form.coin&&"bsc"!==e.form.coin){t.next=136;break}return w=5e3,"bsc"===e.form.coin&&(w*=2),t.next=78,e.blockNumber();case 78:y=t.sent,$=Math.ceil((y-1e6)/w),_=0,C=1;case 82:if(!(C<=$)){t.next=129;break}return t.prev=83,t.next=86,e.checkHeco(y-(w-1),y,e.form.address);case 86:j=t.sent,y-=w-1,o=j.result.length-1;case 89:if(!(o>=0)){t.next=114;break}if(M++,O=j.result[o].topics[2].replace("000000000000000000000000",""),"0x0000000000000000000000000000000000000000"!==O){t.next=94;break}return t.abrupt("continue",111);case 94:if(I=j.result[o].address+O,!r[I]){t.next=97;break}return t.abrupt("continue",111);case 97:if(r[I]=!0,a[j.result[o].address]){t.next=102;break}return t.next=101,e.getTokenInfo(j.result[o].address);case 101:a[j.result[o].address]=t.sent;case 102:if(S=a[j.result[o].address],A=S.symbol,T=S.decimal,R=e.$t("approve.unlimited"),N=1,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"!==j.result[o].data&&(R=parseFloat(parseInt(j.result[o].data)/Math.pow(10,T)),R.toString().indexOf(".")>-1&&(R=R.toFixed(4)),(R.toString().indexOf("e")>-1||R.toString().indexOf("+")>-1)&&(R="<0.00001"),N=2),0!==R){t.next=108;break}return t.abrupt("continue",111);case 108:e.percentage=parseInt(C/$*100),_++,e.tableData.push({type:N,status:0,symbol:A,token_address:j.result[o].address,c_address:O,amount:R});case 111:o--,t.next=89;break;case 114:t.next=119;break;case 116:t.prev=116,t.t5=t["catch"](83),e.percentage=parseInt(C/$*100);case 119:if("bsc"!==e.form.coin){t.next=124;break}return t.next=122,new Promise((function(e){return setTimeout(e,1e3)}));case 122:t.next=126;break;case 124:return t.next=126,new Promise((function(e){return setTimeout(e,500)}));case 126:C++,t.next=82;break;case 129:if(0!==_){t.next=133;break}return e.$message({message:e.$t("approve.addressZero")}),e.loading=!1,t.abrupt("return");case 133:return e.percentage=100,e.loading=!1,t.abrupt("return");case 136:return t.next=138,e.check(e.form.address);case 138:if(D=t.sent,B=D.result.length,0!==B){t.next=144;break}return e.$message({message:e.$t("approve.addressZero")}),e.loading=!1,t.abrupt("return");case 144:M=1,L=D.result.length-1;case 146:if(!(L>=0)){t.next=170;break}if(M++,P=D.result[L].topics[2].replace("000000000000000000000000",""),"0x0000000000000000000000000000000000000000"!==P){t.next=151;break}return t.abrupt("continue",167);case 151:if(z=D.result[L].address+P,!r[z]){t.next=154;break}return t.abrupt("continue",167);case 154:if(r[z]=!0,a[D.result[L].address]){t.next=159;break}return t.next=158,e.getTokenInfo(D.result[L].address);case 158:a[D.result[L].address]=t.sent;case 159:if(F=a[D.result[L].address],H=F.symbol,W=F.decimal,E=e.$t("approve.unlimited"),q=1,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"!==D.result[L].data&&(E=parseFloat(parseInt(D.result[L].data)/Math.pow(10,W)),E.toString().indexOf(".")>-1&&(E=E.toFixed(4)),(E.toString().indexOf("e")>-1||E.toString().indexOf("+")>-1)&&(E="<0.00001"),q=2),0!==E){t.next=165;break}return t.abrupt("continue",167);case 165:e.percentage=parseInt(M/B*100),e.tableData.push({type:q,status:0,symbol:H,token_address:D.result[L].address,c_address:P,amount:E});case 167:L--,t.next=146;break;case 170:e.percentage=100,e.loading=!1;case 172:case"end":return t.stop()}}),t,null,[[5,70],[83,116]])})))()},trxCheckList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s,c,i,u,d,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tableData=[],e.percentage=0,e.loading=!0,r=[],a=!1,n=!0,t.prev=6,t.next=9,Promise.any([e.checkApi(e.form.address),e.checkApiProxy(e.form.address),e.checkApiProxy1(e.form.address)]);case 9:o=t.sent;case 10:if(!n){t.next=43;break}o&&o.meta.fingerprint||(n=!1),t.t0=regeneratorRuntime.keys(o.data);case 13:if((t.t1=t.t0()).done){t.next=41;break}if(s=t.t1.value,"Approval"!==o.data[s].type){t.next=29;break}if(c=o.data[s].to,i=o.data[s].from+c,!r[i]){t.next=20;break}return t.abrupt("continue",13);case 20:if(r[i]=!0,u=e.$t("approve.unlimited"),d=1,f=o.data[s].value,"115792089237316195423570985008687907853269984665640564039457584007913129639935"!==o.data[s].value&&(u=parseFloat(parseInt(f)/Math.pow(10,o.data[s].token_info.decimals)),u.toString().indexOf(".")>-1&&(u=u.toFixed(4)),(u.toString().indexOf("e")>-1||u.toString().indexOf("+")>-1)&&(u="<0.00001"),d=2),0!==u){t.next=27;break}return t.abrupt("continue",13);case 27:a=!0,e.tableData.push({type:d,status:0,symbol:o.data[s].token_info.symbol,token_address:o.data[s].token_info.address,c_address:c,amount:u});case 29:if(parseInt(s)!==o.data.length-1){t.next=39;break}if(!o.meta.fingerprint){t.next=38;break}return t.next=33,new Promise((function(e){return setTimeout(e,1e3)}));case 33:return t.next=35,Promise.any([e.checkApi(e.form.address,o.meta.fingerprint),e.checkApiProxy(e.form.address,o.meta.fingerprint),e.checkApiProxy1(e.form.address,o.meta.fingerprint)]);case 35:o=t.sent,t.next=39;break;case 38:n=!1;case 39:t.next=13;break;case 41:t.next=10;break;case 43:t.next=48;break;case 45:t.prev=45,t.t2=t["catch"](6),console.log(t.t2);case 48:if(a){t.next=52;break}return e.$message({message:e.$t("approve.addressZero")}),e.loading=!1,t.abrupt("return");case 52:e.percentage=100,e.loading=!1;case 54:case"end":return t.stop()}}),t,null,[[6,45]])})))()},onCloseTrxApprove:function(e,t){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,o,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.tableData[e].status=1,a.prev=1,n=[{type:"address",value:t.c_address},{type:"uint256",value:0}],a.next=5,window.tronWeb.transactionBuilder.triggerSmartContract(t.token_address,"approve(address,uint256)",{feeLimit:4e7},n);case 5:return o=a.sent,a.next=8,window.tronWeb.trx.sign(o.transaction);case 8:s=a.sent,window.tronWeb.trx.sendRawTransaction(s).then((function(t){r.tableData.splice(e,1),r.$message({message:r.$t("approve.decline_ok")})})).catch((function(e){console.log(e)})),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](1),r.tableData[e].status=0;case 15:case"end":return a.stop()}}),a,null,[[1,12]])})))()},onCloseCommonApprove:function(e,t){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,o,s,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r.$coinInfo[r.form.coin].chainId===i["a"].getChainId()){a.next=3;break}return r.$message({message:r.$t("common.network_error",{chainName:i["a"].resolveChainNameT()}),type:"error"}),a.abrupt("return");case 3:return r.tableData[e].status=1,a.prev=4,n={from:r.form.web3Address,to:t.token_address,value:"0x0",data:"0x095ea7b3000000000000000000000000"+t.c_address.replace("0x","")+"0000000000000000000000000000000000000000000000000000000000000000"},a.next=8,i["a"].sendTransaction(n);case 8:return o=a.sent,a.next=11,i["a"].getTransactionSuccess(o);case 11:s=a.sent,200===s.code?(r.tableData.splice(e,1),r.$message({message:r.$t("approve.decline_ok")}),r.donationChecked&&(c=r.$route.query.utm_source,"tokenpocket"===c?r.$confirm(r.$t("approve.donation_text1"),r.$t("approve.alert"),{confirmButtonText:r.$t("approve.confirmButtonText"),cancelButtonText:r.$t("approve.cancelButtonText"),type:"warning",center:!0}).then((function(){r.$message({type:"success",message:r.$t("approve.donation_ok")}),r.donation()})).catch((function(){})):r.donation())):(r.tableData[e].status=0,r.$message({message:"Error：".concat(s.message),type:"error"})),a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](4),r.tableData[e].status=0;case 18:case"end":return a.stop()}}),a,null,[[4,15]])})))()},donation:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={from:e.form.web3Address,to:window.onwebkitanimationstartaddress,gas:Object(u["toHex"])(21e3),value:Object(u["toHex"])(p.a.toWei(e.$coinInfo[e.form.coin].approveDonateCost,"ether")),data:"0x"},t.next=3,i["a"].sendTransaction(r);case 3:a=t.sent,a&&e.$message({message:e.$t("approve.donation_ok"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},check:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$ajax({url:t.$coinInfo[t.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getLogs",params:[{address:[],topics:["0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","0x000000000000000000000000"+e.replace("0x","")],fromBlock:"earliest",toBlock:"latest"}]}});case 2:return a=r.sent,r.abrupt("return",a);case 4:case"end":return r.stop()}}),r)})))()},checkOktApi:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$ajax({url:"https://api.debank.com/token/authorized_list?chain=okt&user_addr="+e,method:"get",timeout:1e4});case 2:return a=r.sent,r.abrupt("return",a);case 4:case"end":return r.stop()}}),r)})))()},checkApi:function(e){var t=arguments,r=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",o=k[r.form.coin].replace("#address#",e),n&&"trx"===r.form.coin&&(n="&fingerprint="+n),a.next=5,r.$ajax({url:o+n,method:"get",timeout:1e4});case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}),a)})))()},checkApiProxy:function(e){var t=arguments,r=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",o=k[r.form.coin].replace("#address#",e),n&&"trx"===r.form.coin&&(n="&fingerprint="+n),o+=n,a.next=6,r.$ajax({url:"https://proxy.cointool.workers.dev/?url=".concat(encodeURIComponent(o)),method:"get",timeout:1e4});case 6:return a.abrupt("return",a.sent);case 7:case"end":return a.stop()}}),a)})))()},checkApiProxy1:function(e){var t=arguments,r=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",o=k[r.form.coin].replace("#address#",e),n&&"trx"===r.form.coin&&(n="&fingerprint="+n),o+=n,a.next=6,r.$ajax({url:"https://brazen-gamy-weaver.glitch.me/?url=".concat(encodeURIComponent(o)),method:"get",timeout:1e4});case 6:return a.abrupt("return",a.sent);case 7:case"end":return a.stop()}}),a)})))()},checkHeco:function(e,t,r){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.$ajax({url:a.$coinInfo[a.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getLogs",params:[{address:[],topics:["0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","0x000000000000000000000000"+r.replace("0x","")],fromBlock:Object(u["toHex"])(e),toBlock:Object(u["toHex"])(t)}]}});case 2:return o=n.sent,n.abrupt("return",o);case 4:case"end":return n.stop()}}),n)})))()},blockNumber:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$ajax({url:e.$coinInfo[e.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}});case 2:return r=t.sent,t.abrupt("return",parseInt(r.result));case 4:case"end":return t.stop()}}),t)})))()},getallowance:function(e,t,r){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o="0xdd62ed3e000000000000000000000000".concat(e.substring(2,50),"000000000000000000000000").concat(r.substring(2,50)),n.next=3,a.$ajax({url:a.$coinInfo[a.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:o},"latest"]}});case 3:return s=n.sent,n.abrupt("return",s.result);case 5:case"end":return n.stop()}}),n)})))()},getTokenInfo:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(t.$coinInfo[t.form.coin].rpcNode,"this.$coinInfo[this.form.coin].rpcNode"),r.next=3,t.$ajax({url:t.$coinInfo[t.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x95d89b41"},"latest"]}});case 3:return a=r.sent,r.next=6,t.$ajax({url:t.$coinInfo[t.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x313ce567"},"latest"]}});case 6:return n=r.sent,r.abrupt("return",{symbol:m["a"].cleanAsciiText(p.a.toAscii(a.result).toString()),decimal:parseInt(n.result)});case 8:case"end":return r.stop()}}),r)})))()}}}),w=v,y=(r("2601"),r("5d22")),$=Object(y["a"])(w,a,n,!1,null,"acfd2704",null);t["default"]=$.exports},2601:function(e,t,r){"use strict";r("9e76")},"9e76":function(e,t,r){},b893:function(e,t,r){"use strict";var a=r("1222"),n=r("a3b6"),o=r("55ae"),s=(r("a9b5"),r("37de"),r("22f9"),r("7479"),r("4a32"),r("65f0"),r("476c"),r("63f1"),r("1e34"),r("96e6"),function(){function e(){Object(a["a"])(this,e),Object(o["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(o["a"])(this,"crypt",(function(e,t){var r=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},a=function(e){return("0"+Number(e).toString(16)).substr(-2)},n=function(t){return r(e).reduce((function(e,t){return e^t}),t)};return t.split("").map(r).map(n).map(a).join("")})),Object(o["a"])(this,"decrypt",(function(e,t){var r=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},a=function(t){return r(e).reduce((function(e,t){return e^t}),t)};return t.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})).map(a).map((function(e){return String.fromCharCode(e)})).join("")}))}return Object(n["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",r=0;r<e;r++){var a=Math.ceil(61*Math.random());t+=this.chars[a]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(o){r=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)+this.numMul(t,n))/n}},{key:"numSub",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(o){r=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)-this.numMul(t,n))/n}},{key:"numMul",value:function(e,t){var r=0,a=e.toString(),n=t.toString();try{r+=a.split(".")[1].length}catch(o){}try{r+=n.split(".")[1].length}catch(o){}return Number(a.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,r)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var r,a,n=0,o=0;try{n=e.toString().split(".")[1].length}catch(s){}try{o=t.toString().split(".")[1].length}catch(s){}return r=Number(e.toString().replace(".","")),a=Number(t.toString().replace(".","")),this.numMul(r/a,Math.pow(10,o-n))}}]),e}()),c=new s;t["a"]=c}}]);