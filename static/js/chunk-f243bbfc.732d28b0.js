(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f243bbfc"],{"0338":function(e,t,a){"use strict";a("ab42")},"2b3c":function(e,t,a){"use strict";a("c1c3")},"5f75":function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var s=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}},6507:function(e,t,a){var n=a("5f75"),s=a("adda");function i(e,t,a){var i=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var r=e.random||(e.rng||n)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var o=0;o<16;++o)t[i+o]=r[o];return t||s(r)}e.exports=i},ab42:function(e,t,a){},adda:function(e,t){for(var a=[],n=0;n<256;++n)a[n]=(n+256).toString(16).substr(1);function s(e,t){var n=t||0,s=a;return[s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]]].join("")}e.exports=s},b893:function(e,t,a){"use strict";var n=a("1222"),s=a("a3b6"),i=a("55ae"),r=(a("37de"),a("1e34"),a("7479"),a("4a32"),a("22f9"),a("65f0"),a("96e6"),function(){function e(){Object(n["a"])(this,e),Object(i["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(s["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,a="x"===e?t:3&t|8;return a.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",a=0;a<e;a++){var n=Math.ceil(61*Math.random());t+=this.chars[n]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var a,n,s;try{a=e.toString().split(".")[1].length}catch(i){a=0}try{n=t.toString().split(".")[1].length}catch(i){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(e,s)+this.numMul(t,s))/s}},{key:"numSub",value:function(e,t){var a,n,s;try{a=e.toString().split(".")[1].length}catch(i){a=0}try{n=t.toString().split(".")[1].length}catch(i){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(e,s)-this.numMul(t,s))/s}},{key:"numMul",value:function(e,t){var a=0,n=e.toString(),s=t.toString();try{a+=n.split(".")[1].length}catch(i){}try{a+=s.split(".")[1].length}catch(i){}return Number(n.replace(".",""))*Number(s.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var a,n,s=0,i=0;try{s=e.toString().split(".")[1].length}catch(r){}try{i=t.toString().split(".")[1].length}catch(r){}return a=Number(e.toString().replace(".","")),n=Number(t.toString().replace(".","")),this.numMul(a/n,Math.pow(10,i-s))}}]),e}()),o=new r;t["a"]=o},c1c3:function(e,t,a){},c81a:function(e,t,a){var n=a("c194"),s=Math.ceil,i=Math.floor;n({target:"Math",stat:!0},{trunc:function(e){return(e>0?i:s)(e)}})},d52c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},["zh"!==e.language?[a("h1",[a("svg-icon",{attrs:{"icon-class":e.route_icon}}),e._v(" "+e._s(e.tokenName)+" Pool")],1),a("div",{staticClass:"h2Box"},[a("h2",[a("svg-icon",{attrs:{"icon-class":"code"}}),e._v("IDO Contract : "),a("span",{staticClass:"contract"},[e._v(e._s(e._f("autoAddress")(e.contract)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.contract,expression:"contract",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[a("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1)]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.init_loading,expression:"init_loading"}],staticClass:"idoExchange"},[a("div",{staticClass:"exchangeInfo"},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("idoExchange.exchangeNumber")))]),a("span",{staticClass:"value"},[e._v(e._s(e.quota)+" "+e._s(e.defSybmol))])]),a("div",{staticClass:"info"},[a("span",{staticClass:"label leftAlign"},[e._v(e._s(e.$t("idoExchange.exchangeRatio")))]),a("span",{staticClass:"value"},[e._v("1 "+e._s(e.defSybmol)+" : "+e._s(e.rate)+" "+e._s(e.tokenName))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isEnd,expression:"isEnd"}],staticClass:"exchangeStatus"},[a("flip-countdown",{attrs:{deadline:e.startTime,labels:{days:e.$t("idoExchange.days"),hours:e.$t("idoExchange.hours"),minutes:e.$t("idoExchange.minutes"),seconds:e.$t("idoExchange.seconds")}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEnd,expression:"!isEnd"}],staticClass:"inputBox"},[a("div",{staticClass:"info"},[a("span",{style:{visibility:e.tokenBalance>0?"visible":"hidden"}},[e._v("Claim available:"+e._s(e.tokenBalance))]),a("span",{on:{click:e.BalanceClick}},[e._v(e._s(e.$t("idoExchange.balance"))+": "+e._s(e.Balance)+" "+e._s(e.defSybmol))])]),a("div",{staticClass:"inputContent"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputModel,expression:"inputModel"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("idoExchange.inputPlaceholder")},domProps:{value:e.inputModel},on:{input:function(t){t.target.composing||(e.inputModel=t.target.value)}}}),a("div",{staticClass:"icon",on:{click:e.onExchange}},[e.loading?a("i",{staticClass:"el-icon-loading"}):a("svg-icon",{attrs:{"icon-class":"exchange2"}})],1)])]),a("div",{staticClass:"progressBox"},[a("el-progress",{attrs:{percentage:e.percentage,"stroke-width":20,color:"#4c4471","text-inside":!0}}),a("div",{staticClass:"textBox"},[a("span",[e._v(e._s(e.self_quota)+" "+e._s(e.defSybmol))]),a("span",[e._v(e._s(e.cap)+" "+e._s(e.defSybmol))])])],1),a("div",{staticClass:"desc"},[a("p",{staticClass:"op",on:{click:e.onChangeUnfold}},[e._v(e._s(e.isUnfold?e.$t("idoExchange.show"):e.$t("idoExchange.hide"))+" "),e.isUnfold?a("i",{staticClass:"el-icon-arrow-down icon"}):a("i",{staticClass:"el-icon-arrow-up icon"})]),a("div",{class:{text:!0,unfold:e.isUnfold}},[a("div",{staticClass:"table"},[a("ul",[a("li",[a("span",{staticClass:"label"},[e._v(e._s("Launch Time"))]),a("span",{staticClass:"value"},[e._v(e._s(e.startTime))])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s("End Time"))]),a("span",{staticClass:"value"},[e._v(e._s(e.endTime))])]),a("li",{directives:[{name:"show",rawName:"v-show",value:1===e.idotype,expression:"idotype===1"}]},[a("span",{staticClass:"label"},[e._v(e._s("Claim Time"))]),a("span",{staticClass:"value"},[e._v(e._s(e.claimTime)),a("span",{directives:[{name:"show",rawName:"v-show",value:e.lockDay>0,expression:"lockDay>0"}]},[e._v("(Lock Day: "+e._s(e.lockDay)+")")])])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s("For Sale"))]),a("span",{staticClass:"value"},[e._v(e._s(e.sale)+" "+e._s(e.tokenName))])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s("To raise")+"("+e._s(e.defSybmol)+")")]),a("span",{staticClass:"value"},[e._v(e._s(e.cap)+" "+e._s(e.defSybmol))])]),a("li",{directives:[{name:"show",rawName:"v-show",value:e.b_amount>0,expression:"b_amount > 0"}]},[a("span",{staticClass:"label"},[e._v(e._s("Amount Limit"))]),a("span",{staticClass:"value"},[e._v(e._s(e.b_amount)+" "+e._s(e.defSybmol))])])])])])]),a("el-divider"),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.idotype,expression:"idotype===1"}],staticClass:"btnBox"},[a("button",{class:{disabled:e.isdisabledFn},on:{click:e.onClaim}},[e._v(e._s("Claim"))])])],1),a("div",{staticClass:"table"},[a("p",{staticClass:"title"},[e._v(e._s(e.$t("idoExchange.tokenInfo")))]),a("ul",[a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("idoExchange.name")))]),a("span",{staticClass:"value"},[e._v(e._s(e.tokenName))])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("idoExchange.address")))]),a("span",{staticClass:"value"},[e._v(e._s(e._f("autoAddress")(e.tokenContract)))])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("idoExchange.totalSupply")))]),a("span",{staticClass:"value"},[e._v(e._s(e.totalSupply))])])])])]:a("div",{staticStyle:{"text-align":"center","line-height":"22px"}},[a("p",[e._v("CoinTool不提供任何技术支持！")]),a("p",[e._v("已关闭IDO功能，请勿用于违法活动!")])])],2)},s=[],i=a("4833"),r=a("efe2"),o=(a("6a61"),a("37de"),a("1e34"),a("05d6"),a("65f0"),a("7479"),a("4a32"),a("ed08")),c=a("52c1"),l={zh:{idoExchange:{exchangeNumber:"剩余额度",exchangeRatio:"兑换比例",end:"已结束",underway:"进行中",name:"名称",address:"地址",totalSupply:"发行量",tokenInfo:"Token 信息",inputPlaceholder:"请输入要进行兑换的数量",show:"展开",hide:"隐藏",balance:"余额",days:"天",hours:"时",minutes:"分",seconds:"秒",tx_submit:"交易已提交"}},en:{idoExchange:{exchangeNumber:"Remaining limit",exchangeRatio:"Exchange proportion",end:"End",underway:"underway",name:"Name",address:"Address",totalSupply:"Total Supply",tokenInfo:"Token Infomation",inputPlaceholder:"Please enter the exchange quantity",show:"Details",hide:"Hide",balance:"Balance",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds",tx_submit:"Transaction submitted"}}},u=a("8feb"),d=a.n(u),p=a("b893"),m=a("a835"),h=a("85d4"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flip-clock"},[e._l(e.timeData,(function(t){return[a("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"data.show"}],key:t.label,staticClass:"flip-clock__piece",attrs:{id:t.elementId}},[a("span",{staticClass:"flip-clock__card flip-card"},[a("b",{staticClass:"flip-card__top"},[e._v(e._s(e._f("twoDigits")(t.current)))]),a("b",{staticClass:"flip-card__bottom",attrs:{"data-value":e._f("twoDigits")(t.current)}}),a("b",{staticClass:"flip-card__back",attrs:{"data-value":e._f("twoDigits")(t.previous)}}),a("b",{staticClass:"flip-card__back-bottom",attrs:{"data-value":e._f("twoDigits")(t.previous)}})]),a("span",{staticClass:"flip-clock__slot"},[e._v(e._s(t.label))])])]}))],2)},b=[],g=a("a892"),v=(a("c81a"),a("403f"),a("297b"),null),x=a("6507"),_={name:"FlipCountdown",filters:{twoDigits:function(e){return e.toString().length<=1?"0"+e.toString():e.toString()}},props:{deadline:{type:String},stop:{type:Boolean},showDays:{type:Boolean,required:!1,default:!0},showHours:{type:Boolean,required:!1,default:!0},showMinutes:{type:Boolean,required:!1,default:!0},showSeconds:{type:Boolean,required:!1,default:!0},labels:{type:Object,required:!1,default:function(){return{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"}}}},data:function(){var e=x();return{now:Math.trunc((new Date).getTime()/1e3),date:null,interval:null,diff:0,show:!1,timeData:[{current:0,previous:0,label:this.labels.days,elementId:"flip-card-days-"+e,show:this.showDays},{current:0,previous:0,label:this.labels.hours,elementId:"flip-card-hours-"+e,show:this.showHours},{current:0,previous:0,label:this.labels.minutes,elementId:"flip-card-minutes-"+e,show:this.showMinutes},{current:0,previous:0,label:this.labels.seconds,elementId:"flip-card-seconds-"+e,show:this.showSeconds}]}},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{deadline:function(e,t){var a=this,n=e;if(this.date=Math.trunc(Date.parse(n.replace(/-/g,"/"))/1e3),!this.date)throw new Error("时间格式错误'");console.log("触发"),this.interval=setInterval((function(){a.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},now:function(e){this.diff=this.date-this.now,this.diff<=0||this.stop?(this.diff=0,this.updateTime(3,0)):this.updateAllCards()},diff:function(e){0===e&&(this.$emit("timeElapsed"),this.updateAllCards())}},created:function(){},mounted:function(){0!==this.diff&&(this.show=!0)},beforeDestroy:function(){window["cancelAnimationFrame"]&&cancelAnimationFrame(this.frame)},destroyed:function(){clearInterval(v)},methods:{updateAllCards:function(){this.updateTime(0,this.days),this.updateTime(1,this.hours),this.updateTime(2,this.minutes),this.updateTime(3,this.seconds)},updateTime:function(e,t){if(!(e>=this.timeData.length||void 0===t)){window["requestAnimationFrame"]&&(this.frame=requestAnimationFrame(this.updateTime.bind(this)));var a=this.timeData[e],n=t<0?0:t,s=document.querySelector("#".concat(a.elementId));if(n!==a.current&&(a.previous=a.current,a.current=n,s&&(s.classList.remove("flip"),s.offsetWidth,s.classList.add("flip")),0===e)){var i=s.querySelectorAll("span b");if(i){var r,o=Object(g["a"])(i);try{for(o.s();!(r=o.n()).done;){var c=r.value,l=c.classList[0];if(t/1e3>=1){if(!l.includes("-4digits")){var u=l+"-4digits";c.classList.add(u),c.classList.remove(l)}}else if(l.includes("-4digits")){var d=l.replace("-4digits","");c.classList.add(d),c.classList.remove(l)}}}catch(p){o.e(p)}finally{o.f()}}}}}}},y=_,w=(a("0338"),a("5d22")),C=Object(w["a"])(y,f,b,!1,null,"2c551d9f",null),k=C.exports,T="idoExchange",S={name:T,inject:["onCheckConnect","onCopySuccess","metaMaskStateTest"],components:{FlipCountdown:k},data:function(){return{buy:!0,contract:"",tokenContract:"",init_loading:!0,isEnd:!1,percentage:0,loading:!1,inputModel:"",isUnfold:!0,rate:0,countDown:"",quota:0,cap:0,startTime:0,b_amount:0,endTime:"",claimTime:0,lockDay:0,Balance:0,startTimeunix:0,endTimeunix:0,claimTimeunix:0,sale:0,idotype:0,defSybmol:"ETH",route_title:"",route_icon:"",tokenBalance:0,tokenName:"CT",totalSupply:0,isdisabledFn:!0,self_quota:0,rpc_node:"https://kovan.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe"}},computed:Object(r["a"])({},Object(c["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[T]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh))},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,s,i,r,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a={1:"https://mainnet.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",3:"https://ropsten.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",4:"https://rinkeby.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",42:"https://kovan.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",5:"https://gorli.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",97:"https://data-seed-prebsc-2-s1.binance.org:8545/",56:"https://bsc-dataseed3.binance.org",65:"http://okexchaintest.okexcn.com:26659",128:"https://http-mainnet-node.huobichain.com",256:"https://http-testnet.hecochain.com"},n={56:{chainId:"0x38",chainName:"BSC Mainnet",nativeCurrency:{name:"Binance Coin",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://bscscan.com/"]},128:{chainId:"0x80",chainName:"HECO Mainnet",nativeCurrency:{name:"Huobi Token",symbol:"HT",decimals:18},rpcUrls:["https://http-mainnet.hecochain.com"],blockExplorerUrls:["https://scan.hecochain.com/"]}},s=e.$route.query,i=s.address,r=s.c,e.rpc_node=a[parseInt(r)],t.t0=parseInt(r),t.next=56===t.t0?7:97===t.t0?10:250===t.t0?13:128===t.t0?16:256===t.t0?19:22;break;case 7:return e.route_icon="coin-bnb",e.defSybmol="BNB",t.abrupt("break",24);case 10:return e.route_icon="coin-bnb",e.defSybmol="BNB",t.abrupt("break",24);case 13:return e.route_icon="coin-ftm",e.defSybmol="FTM",t.abrupt("break",24);case 16:return e.route_icon="coin-heco",e.defSybmol="HT",t.abrupt("break",24);case 19:return e.route_icon="coin-heco",e.defSybmol="HT",t.abrupt("break",24);case 22:e.defSybmol="ETH",e.route_icon="coin-eth2";case 24:return e.contract=i,t.next=27,e.getData();case 27:return c=t.sent,e.tokenContract=c[0].result.replace("0x000000000000000000000000","0x"),t.next=31,e.getTokenInfo(e.tokenContract);case 31:l=t.sent,e.tokenName=l.symbol,document.title=e.tokenName+" Pool",e.totalSupply=l.totalSupply,e.rate=parseInt(c[3].result);try{e.idotype=parseInt(c[2].result)}catch(u){e.idotype=1}return e.quota=parseInt(c[4].result)-parseFloat(d.a.fromWei(parseInt(c[8].result),"ether")).toFixed(2),e.self_quota=parseFloat(d.a.fromWei(parseInt(c[8].result),"ether")).toFixed(2),e.cap=parseInt(c[4].result),e.percentage=(Number(e.self_quota)/e.cap*100).toFixed(2),e.startTime=e.timestampToTime(parseInt(c[1].result)),e.startTimeunix=parseInt(c[1].result),e.endTime=e.timestampToTime(parseInt(c[5].result)),e.endTimeunix=parseInt(c[5].result),e.claimTime=e.timestampToTime(parseInt(c[6].result)),e.claimTimeunix=parseInt(c[6].result),e.lockDay=parseInt(c[7].result),e.sale=e.rate*e.cap,e.b_amount=parseInt(c[9].result),t.next=52,Object(o["i"])(2e3);case 52:if(parseInt(r)!==m["a"].getChainId()&&(e.buy=!1),null===m["a"].getAccount()){t.next=77;break}if(parseInt(r)===m["a"].getChainId()||null===n[parseInt(r)]){t.next=64;break}return t.prev=55,t.next=58,window.ethereum.request({method:"wallet_addEthereumChain",params:[n[parseInt(r)]]});case 58:t.next=62;break;case 60:t.prev=60,t.t1=t["catch"](55);case 62:t.next=76;break;case 64:return t.next=66,e.upBalance();case 66:return t.t2=Number,t.t3=parseInt,t.next=70,e.balanceOf();case 70:t.t4=t.sent,t.t5=(0,t.t3)(t.t4),t.t6=Math.pow(10,l.decimal),t.t7=(t.t5/t.t6).toFixed(2),e.tokenBalance=(0,t.t2)(t.t7),e.tokenBalance>0&&(e.isdisabledFn=!1);case 76:parseInt(m["a"].getChainId())!==parseInt(r)&&e.$message({showClose:!0,duration:0,message:"Wrong network",type:"error"});case 77:(new Date).getTime()/1e3<e.startTimeunix&&(e.isEnd=!0),e.init_loading=!1;case 79:case"end":return t.stop()}}),t,null,[[55,60]])})))()},methods:{onChangeUnfold:function(){this.isUnfold=!this.isUnfold},onClaim:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!((new Date).getTime()/1e3<e.claimTimeunix)){t.next=3;break}return e.$message({showClose:!0,duration:0,message:"Claim time not arrived",type:"error"}),t.abrupt("return");case 3:if(!e.isdisabledFn){t.next=5;break}return t.abrupt("return");case 5:return a={from:m["a"].getAccount(),to:e.contract,gas:Object(h["toHex"])(2e5),value:"0x0",data:"0x4e71d92d"},t.next=8,m["a"].sendTransaction(a);case 8:n=t.sent,n&&e.$message({message:e.$t("idoExchange.tx_submit"),type:"success"});case 10:case"end":return t.stop()}}),t)})))()},BalanceClick:function(){Number(this.Balance)>this.b_amount&&0!==this.b_amount?this.inputModel=this.b_amount:this.inputModel=this.Balance},upBalance:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["a"].sendEthgetBalance(m["a"].getAccount());case 2:a=t.sent,e.Balance=Number(d.a.fromWei(a,"ether")).toFixed(2);case 4:case"end":return t.stop()}}),t)})))()},balanceOf:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.contract,t.next=3,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:a,data:"0x70a08231000000000000000000000000"+m["a"].getAccount().replace("0x","")},"latest"]}});case 3:return n=t.sent,t.abrupt("return",n.result);case 5:case"end":return t.stop()}}),t)})))()},getData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.contract,t.next=3,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:a,data:"0x9d76ea58"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:a,data:"0xba9a061a"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:a,data:"0x05db3194"},"latest"]},{jsonrpc:"2.0",id:4,method:"eth_call",params:[{to:a,data:"0x664e9704"},"latest"]},{jsonrpc:"2.0",id:5,method:"eth_call",params:[{to:a,data:"0xec81b483"},"latest"]},{jsonrpc:"2.0",id:6,method:"eth_call",params:[{to:a,data:"0x3197cbb6"},"latest"]},{jsonrpc:"2.0",id:7,method:"eth_call",params:[{to:a,data:"0x27b3bf11"},"latest"]},{jsonrpc:"2.0",id:8,method:"eth_call",params:[{to:a,data:"0x242c8e69"},"latest"]},{jsonrpc:"2.0",id:9,method:"eth_call",params:[{to:a,data:"0xc59ee1dc"},"latest"]},{jsonrpc:"2.0",id:10,method:"eth_call",params:[{to:a,data:"0xf97c7d12"},"latest"]}]});case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},timestampToTime:function(e){var t=new Date(1e3*e),a=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",s=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",i=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",r=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",o=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+n+s+i+r+o},getTokenInfo:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$ajax({url:t.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x95d89b41"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:e,data:"0x18160ddd"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:e,data:"0x313ce567"},"latest"]}]});case 2:return n=a.sent,s=parseInt(n[2].result),a.abrupt("return",{symbol:p["a"].cleanAsciiText(d.a.toAscii(n[0].result).toString()),totalSupply:parseInt(n[1].result)/Math.pow(10,s),decimal:s});case 5:case"end":return a.stop()}}),a)})))()},onExchange:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.buy||e.$message({showClose:!0,duration:0,message:"Wrong network",type:"error"}),e.loading=!0,!((new Date).getTime()/1e3<e.startTimeunix)){t.next=6;break}return e.$message({showClose:!0,duration:0,message:"It hasn't started yet",type:"error"}),e.loading=!1,t.abrupt("return");case 6:if(!((new Date).getTime()/1e3>e.endTimeunix)){t.next=10;break}return e.$message({showClose:!0,duration:0,message:"It's already over.",type:"error"}),e.loading=!1,t.abrupt("return");case 10:if(m["a"].getAccount()){t.next=14;break}return e.$message({showClose:!0,duration:0,message:"Please connect your wallet",type:"error"}),e.loading=!1,t.abrupt("return");case 14:if(!(Number(e.inputModel)>e.b_amount&&0!==parseInt(e.b_amount))){t.next=18;break}return e.$message({showClose:!0,duration:0,message:"Amount Limit :"+e.b_amount,type:"error"}),e.loading=!1,t.abrupt("return");case 18:return a={from:m["a"].getAccount(),to:e.contract,value:Object(h["toHex"])(d.a.toWei(e.inputModel,"ether")),data:"0xd0febe4c"},t.next=21,m["a"].sendTransaction(a);case 21:n=t.sent,n&&e.$message({message:e.$t("idoExchange.tx_submit"),type:"success"}),e.loading=!1;case 24:case"end":return t.stop()}}),t)})))()}}},M=S,I=(a("2b3c"),Object(w["a"])(M,n,s,!1,null,"79ccc83a",null));t["default"]=I.exports}}]);