(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d856088"],{"0d32":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"containerBg"}),a("div",{staticClass:"titleBox"},[a("h1",[a("div",{staticClass:"left"},[a("img",{attrs:{onerror:"this.src = 'https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png';",width:"18",src:t.logo_link.replace("#address#",t.token_address)}}),a("span",[t._v(t._s(t.token_info.name)+" ("+t._s(t.token_info.symbol)+")")])]),a("div",{staticClass:"right"},[a("a",{attrs:{href:t.addLiquidity_link.replace("#address#",t.token_address),target:"_blank"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",plain:"",size:"mini"}},[t._v("Add Liquidity")])],1),a("a",{attrs:{href:t.trade_link.replace("#address#",t.token_address),target:"_blank"}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("Trade")])],1)])]),a("div",{staticClass:"section"},[t._m(0),a("div",{staticClass:"table"},[a("el-table",{ref:"transactionTableTable",staticStyle:{width:"100%"},attrs:{data:t.pairData,height:"400px"}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{key:"name",attrs:{label:"name",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("img",{staticClass:"img1",attrs:{onerror:"this.src = 'https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png';",width:"18",src:t.logo_link.replace("#address#",n.token1)}}),a("img",{staticClass:"img2",attrs:{onerror:"this.src = 'https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png';",width:"18",src:t.logo_link.replace("#address#",n.token2)}}),a("a",{attrs:{href:"/defi/pair?platform="+t.platform+"&address="+n.pair,target:"_blank"}},[t._v(t._s(n.token1Sybmol)+"-"+t._s(n.token2Sybmol))])]}}])}),a("el-table-column",{attrs:{prop:"token1Sybmol",label:"token1Sybmol"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("autoFixed")(a.liquidity1))+" "+t._s(a.token1Sybmol)+" ")]}}])},[a("template",{slot:"header"},[t._v(" Liquidity Amount ")])],2),a("el-table-column",{attrs:{prop:"token2Sybmol",label:"token2Sybmol"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("autoFixed")(a.liquidity2))+" "+t._s(a.token2Sybmol)+" ")]}}])},[a("template",{slot:"header"},[t._v(" Liquidity Amount ")])],2)],1)],1)]),a("div",{staticClass:"section"},[t._m(1),a("el-row",{staticClass:"information",attrs:{gutter:10,justify:"center"}},[a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("p",[t._v("Symbol")]),a("span",{staticStyle:{"margin-top":"10px",display:"block"}},[t._v(t._s(t.token_info.symbol)+" ")])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("p",[t._v("Name")]),a("span",[t._v(t._s(t.token_info.name)+" ")])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("p",[t._v("Address")]),a("span",[a("a",{attrs:{href:t.blockscan+"/address/"+t.token_address,target:"_blank"}},[t._v(" "+t._s(t._f("miniAddress")(t.token_address)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.token_address,expression:" token_address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],attrs:{type:"text"}},[a("svg-icon",{staticClass:"copy",staticStyle:{color:"rgba(250, 250, 250)"},attrs:{"icon-class":"copy"}})],1)],1)])]),a("el-col",{attrs:{xs:12,span:8,align:"right"}},[a("div",{staticClass:"info"},[a("a",{attrs:{href:t.blockscan+"/address/"+t.token_address,target:"_blank"}},[a("el-button",{attrs:{type:"primary"}},[t._v("View on BlockSacn")])],1)])])],1)],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",[t._v("Top Pairs")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",[t._v("Token Information")])])}],s=(a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("96cf"),a("1da1")),o=a("5530"),i=a("2f62"),c=a("c039"),u=a.n(c),d=a("b893"),l=[],p={lg:[{x:0,y:0,w:4,h:6,i:"liquidity"},{x:0,y:1,w:4,h:6,i:"volume"},{x:0,y:2,w:4,h:6,i:"fees"},{x:0,y:3,w:4,h:8,i:"tokens"},{x:4,y:0,w:8,h:26,i:"charts"}]},h={name:"Pair",components:{},data:function(){return{logo_link:"",token_address:"",factory_address:"",token_info:{},token1:{},token2:{},liquidity1:0,liquidity2:0,token1AmountsOut:0,token2AmountsOut:0,rpc_node:"",blockscan:"",loading:!0,stopBlock:0,stopBurnBlock:0,stopMintBlock:0,pairData:[],AddInit:!1,RemoveInit:!1,transactionsCount:0,platform:"",zero_c:0,layout:p["lg"],responsiveLayouts:p}},computed:Object(o["a"])({},Object(i["b"])(["isPc"])),created:function(){},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.query,n=a.platform,r=a.address,t.platform=n,"uniswap"===n&&(t.rpc_node="https://mainnet.infura.io/v3/7533c3c93ff146b1b791cae8af63c25b",t.factory_address="0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",t.blockscan="https://etherscan.io",t.trade_link="https://app.uniswap.org/#/swap?inputCurrency=#address#&outputCurrency=ETH",t.addLiquidity_link="https://app.uniswap.org/#/add/#address#/ETH",t.logo_link="https://tokens.1inch.exchange/#address#.png"),"mdex"===n&&(t.rpc_node="https://heconode.ifoobar.com/",t.blockscan="https://hecoinfo.com",t.factory_address="0xb0b670fc1F7724119963018DB0BfA86aDb22d941",t.logo_link="https://raw.githubusercontent.com/mdexSwap/token-icons/main/heco/#address#.png",t.trade_link="https://ht.mdex.com/#/swap?inputCurrency=#address#",t.addLiquidity_link="https://ht.mdex.com/#/add/#address#/HT"),"pancakeswap"===n&&(t.rpc_node="https://bsc-dataseed1.binance.org/",t.blockscan="https://bscscan.com",t.factory_address="0xbcfccbde45ce874adcb698cc183debcf17952812",t.logo_link="https://tokens.1inch.exchange/#address#.png",t.trade_link="https://exchange.pancakeswap.finance/#/swap?inputCurrency=#address#",t.addLiquidity_link="https://exchange.pancakeswap.finance/#/add/#address#"),t.token_address=r,e.next=8,t.getTokenInfo(t.token_address);case 8:t.token_info=e.sent,t.getPair();case 10:case"end":return e.stop()}}),e)})))()},methods:{getPair:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,o,i,c,d,p,h,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.Pair1();case 2:a=e.sent,n=1,r=a.length-1;case 5:if(!(r>=0)){e.next=34;break}if(!(n>=80)){e.next=8;break}return e.abrupt("break",34);case 8:if(s=a[r].data.replace("0x000000000000000000000000","0x").substring(0,42),o=a[r].topics[1].replace("000000000000000000000000",""),i=a[r].topics[2].replace("000000000000000000000000",""),l[o]){e.next=15;break}return e.next=14,t.getTokenInfo(o);case 14:l[o]=e.sent;case 15:if(l[i]){e.next=19;break}return e.next=18,t.getTokenInfo(i);case 18:l[i]=e.sent;case 19:return c=l[o].symbol,d=l[i].symbol,e.t0=u.a.abi,e.t1=["uint112","uint112","uint32"],e.next=25,t.Liquidity(s);case 25:e.t2=e.sent,p=e.t0.decodeParams.call(e.t0,e.t1,e.t2),h=parseInt("0x"+p[0].toString(16))/Math.pow(10,l[o].decimal),m=parseInt("0x"+p[1].toString(16))/Math.pow(10,l[i].decimal),t.pairData.push({token1:o,token2:i,token1Sybmol:c,token2Sybmol:d,liquidity1:h,liquidity2:m,pair:s}),n++;case 31:r--,e.next=5;break;case 34:case"end":return e.stop()}}),e)})))()},Pair1:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:t.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getLogs",params:[{address:t.factory_address,topics:["0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9",t.token_address.replace("0x","0x000000000000000000000000")],fromBlock:"earliest",toBlock:"latest"}]}});case 2:return a=e.sent,e.abrupt("return",a.result);case 4:case"end":return e.stop()}}),e)})))()},blockNumber:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:t.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}});case 2:return a=e.sent,e.abrupt("return",parseInt(a.result));case 4:case"end":return e.stop()}}),e)})))()},Liquidity:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0902f1ac"},"latest"]}});case 2:return n=a.sent,a.abrupt("return",n.result);case 4:case"end":return a.stop()}}),a)})))()},getTransactionByHash:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_getTransactionByHash",params:[t],id:1}});case 2:return n=a.sent,a.abrupt("return",n.result);case 4:case"end":return a.stop()}}),a)})))()},BlockByHash:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_getBlockByHash",params:[t,!1],id:1}});case 2:return n=a.sent,a.abrupt("return",n.result);case 4:case"end":return a.stop()}}),a)})))()},getPairToken:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0dfe1681"},"latest"]},{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0xd21220a7"},"latest"]}]});case 2:return n=a.sent,a.abrupt("return",{token1:n[0].result.replace("000000000000000000000000",""),token2:n[1].result.replace("000000000000000000000000","")});case 4:case"end":return a.stop()}}),a)})))()},getTokenInfo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x95d89b41"},"latest"]},{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x06fdde03"},"latest"]},{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x313ce567"},"latest"]}]});case 2:return n=a.sent,a.abrupt("return",{symbol:d["a"].cleanAsciiText(u.a.toAscii(n[0].result).toString()),name:d["a"].cleanAsciiText(u.a.toAscii(n[1].result).toString()),decimal:parseInt(n[2].result)});case 4:case"end":return a.stop()}}),a)})))()},onCopySuccess:function(t){this.$message.success(this.$t("common.copySuccess"))}}},m=h,f=(a("5613"),a("2877")),b=Object(f["a"])(m,n,r,!1,null,"075760c0",null);e["default"]=b.exports},"463c":function(t,e,a){},5613:function(t,e,a){"use strict";a("463c")},b893:function(t,e,a){"use strict";a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("498a");var n=a("d4ec"),r=a("bee2"),s=a("ade3"),o=function(){function t(){Object(n["a"])(this,t),Object(s["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(r["a"])(t,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"===t?e:3&e|8;return a.toString(16)}))}},{key:"generateMixed",value:function(t){for(var e="",a=0;a<t;a++){var n=Math.ceil(61*Math.random());e+=this.chars[n]}return Math.random().toString(36).substr(0)+e+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(t,e){var a,n,r;try{a=t.toString().split(".")[1].length}catch(s){a=0}try{n=e.toString().split(".")[1].length}catch(s){n=0}return r=Math.pow(10,Math.max(a,n)),(this.numMul(t,r)+this.numMul(e,r))/r}},{key:"numSub",value:function(t,e){var a,n,r;try{a=t.toString().split(".")[1].length}catch(s){a=0}try{n=e.toString().split(".")[1].length}catch(s){n=0}return r=Math.pow(10,Math.max(a,n)),(this.numMul(t,r)-this.numMul(e,r))/r}},{key:"numMul",value:function(t,e){var a=0,n=t.toString(),r=e.toString();try{a+=n.split(".")[1].length}catch(s){}try{a+=r.split(".")[1].length}catch(s){}return Number(n.replace(".",""))*Number(r.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(t){if(t)return t.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(t,e){var a,n,r=0,s=0;try{r=t.toString().split(".")[1].length}catch(o){}try{s=e.toString().split(".")[1].length}catch(o){}return a=Number(t.toString().replace(".","")),n=Number(e.toString().replace(".","")),this.numMul(a/n,Math.pow(10,s-r))}}]),t}(),i=new o;e["a"]=i}}]);