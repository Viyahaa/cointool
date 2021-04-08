(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40cc0188"],{"6af9":function(e,t,r){"use strict";var a,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"transactionTable"},[r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,"max-height":300},on:{"selection-change":e.onSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{type:"index",label:"ID",width:"50",align:"center"}}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.address")+"("+e.list.length+")","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("a",{attrs:{target:"_blank",href:e.blockUrl+"/address/"+a.address}},[e._v(e._s(a.address))])]}}])}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.eth_balance",{allBalance:e.allBalance}),width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(" "+e._s(r.balance)+" ")]}}])}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.token_balance",{allBalance:e.allTokenBalance}),width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(" "+e._s(r.tokenBalance)+" ")]}}])}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.nonce",{nonce:e.allNonce}),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(" "+e._s(r.nonce)+" ")]}}])}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.result"),width:"600",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[66!==a.result.length?r("el-tag",{attrs:{type:e._f("resultTagStyleFilter")(a.result)}},[e._v(" "+e._s(e._f("resultTagFilter")(a.result))+" ")]):r("el-tag",{attrs:{type:a.result}},[r("a",{attrs:{target:"_blank",href:e.blockUrl+"/tx/"+a.result}},[e._v(e._s(a.result))])])]}}])}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.option"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},nativeOn:{click:function(r){return r.preventDefault(),e.onDeleteRow(t.$index)}}})]}}])})],1),r("div",{staticClass:"operationBtn"},[r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onSelectTokenBalanceZero}},[e._v(e._s(e.$t("ethMoreToOne.select_1")))]),r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onSelectBalanceZero}},[e._v(e._s(e.$t("ethMoreToOne.select_2")))]),r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onSelectNonceZero}},[e._v(e._s(e.$t("ethMoreToOne.select_3")))]),r("el-button",{attrs:{type:"danger",plain:""},on:{click:e.onSelectResultError}},[e._v(e._s(e.$t("ethMoreToOne.select_4")))])],1)],1)},o=[],s=(r("fecc"),r("33375"),r("bf2f"),r("3bae"),r("ed08")),i={filters:{resultTagStyleFilter:function(e){var t={0:"info",1:"success",2:"danger"};return t[e]?t[e]:"info"},resultTagFilter:function(e){var t={0:a.$t("ethMoreToOne.result_0"),1:a.$t("ethMoreToOne.result_1"),2:a.$t("ethMoreToOne.result_2"),3:a.$t("ethMoreToOne.result_3"),4:a.$t("ethMoreToOne.result_4"),5:a.$t("ethMoreToOne.result_5")};return t[e]?t[e]:e},orderNoFilter:function(e){return e.substring(0,30)}},props:{list:{type:Array,required:!0},blockUrl:{type:String,required:!0}},data:function(){return{}},computed:{allBalance:function(){return Object(s["b"])(this.list,"balance")},allTokenBalance:function(){return Object(s["b"])(this.list,"tokenBalance")},allNonce:function(){return Object(s["b"])(this.list,"nonce")}},created:function(){a=this},methods:{onDeleteRow:function(e){this.list.splice(e,1),localStorage.setItem("privatekeyObj",JSON.stringify(this.list.map((function(e){return e.result=0,e}))))},onSelectionChange:function(e){this.$emit("onSelectTableList",e)},onSelectTokenBalanceZero:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){0!==t.tokenBalance&&"0"!==t.tokenBalance||e.$refs.multipleTable.toggleRowSelection(t)}))},onSelectBalanceZero:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){0!==t.balance&&"0"!==t.balance||e.$refs.multipleTable.toggleRowSelection(t)}))},onSelectNonceZero:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){0===t.nonce&&e.$refs.multipleTable.toggleRowSelection(t)}))},onSelectResultError:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){1===t.result&&0===t.result||e.$refs.multipleTable.toggleRowSelection(t)}))}}},l=i,c=(r("af29"),r("2877")),u=Object(c["a"])(l,n,o,!1,null,"5c108ec9",null);t["a"]=u.exports},8892:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-row",{staticStyle:{"padding-right":"8px","margin-bottom":"30px"},attrs:{gutter:0}},[r("el-col",{attrs:{xs:24}},[r("div",{staticClass:"operationBtn"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-setting"},on:{click:function(t){e.dialogOne=!0}}},[e._v(e._s(e.$t("ethMoreToOne.settings")))]),r("el-button",{attrs:{type:"success",icon:"el-icon-circle-plus-outline"},on:{click:function(t){e.dialogTwo=!0}}},[e._v(e._s(e.$t("ethMoreToOne.add_contract")))]),r("el-button",{attrs:{type:"primary",icon:"el-icon-sort-down"},on:{click:function(t){e.dialogThree=!0}}},[e._v(e._s(e.$t("ethMoreToOne.import")))]),r("el-button",{attrs:{type:"primary",icon:"el-icon-sort-up"},on:{click:e.onExportTable}},[e._v(e._s(e.$t("ethMoreToOne.export")))]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.onDelAllSelectList}},[e._v(e._s(e.$t("ethMoreToOne.delete")))])],1)])],1),r("el-row",{staticStyle:{"margin-bottom":"30px"},attrs:{gutter:0}},[r("el-col",{attrs:{xs:{span:24}}},[r("TransactionTable",{attrs:{list:e.list,"block-url":e.blockUrl},on:{onSelectTableList:e.onSelectTableList}})],1)],1),r("el-row",{staticClass:"formBox",attrs:{gutter:0}},[r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:e.$t("ethMoreToOne.Basics")}},[r("el-col",{attrs:{xs:{span:24}}},[r("ExecuteForm",{attrs:{form:e.form},on:{onMaxNum:e.onMaxNum,onDeleteConTrac:e.onDeleteConTrac,onQuerybalance:e.onQuerybalance}})],1),r("el-col",{staticStyle:{"text-align":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.onExecute}},[e._v(e._s(e.$t("ethMoreToOne.execute")))])],1)],1),r("el-tab-pane",{attrs:{label:e.$t("ethMoreToOne.advanced")}},[r("el-form",{ref:"form",attrs:{"label-width":"150px"}},[r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.hexdata")}},[r("el-input",{attrs:{type:"textarea",rows:5,placeholder:"0x...."},model:{value:e.hexdata,callback:function(t){e.hexdata=t},expression:"hexdata"}})],1)],1)],1)],1)],1),r("el-dialog",{attrs:{title:e.$t("ethMoreToOne.settings"),visible:e.dialogOne},on:{"update:visible":function(t){e.dialogOne=t}}},[r("el-form",{attrs:{model:e.form}},[r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.rpc_node")}},[r("el-input",{staticStyle:{color:"#000","font-size":"x-large"},attrs:{autocomplete:"off"},model:{value:e.form.rpc_node,callback:function(t){e.$set(e.form,"rpc_node",t)},expression:"form.rpc_node"}}),r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),r("el-form-item",{attrs:{label:"ChainId"}},[r("el-input",{staticStyle:{color:"#000","font-size":"x-large"},attrs:{autocomplete:"off"},model:{value:e.form.chainid,callback:function(t){e.$set(e.form,"chainid",t)},expression:"form.chainid"}}),r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.threads")}},[r("el-input",{staticStyle:{color:"#000","font-size":"x-large"},attrs:{autocomplete:"off"},model:{value:e.form.task_num,callback:function(t){e.$set(e.form,"task_num",t)},expression:"form.task_num"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogOne=!1}}},[e._v(e._s(e.$t("ethMoreToOne.close")))]),r("el-button",{attrs:{type:"primary"},on:{click:e.onSetting}},[e._v(e._s(e.$t("ethMoreToOne.confirm")))])],1)],1),r("el-dialog",{attrs:{title:e.$t("ethMoreToOne.add_contract"),visible:e.dialogTwo},on:{"update:visible":function(t){e.dialogTwo=t}}},[r("el-form",{attrs:{model:e.form}},[r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.contract_address")}},[r("el-input",{staticStyle:{color:"#000","font-size":"x-large"},attrs:{autocomplete:"off"},model:{value:e.form.token_conTractAddress,callback:function(t){e.$set(e.form,"token_conTractAddress",t)},expression:"form.token_conTractAddress"}}),r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogTwo=!1}}},[e._v(e._s(e.$t("ethMoreToOne.close")))]),r("el-button",{attrs:{type:"primary"},on:{click:e.onAddContract}},[e._v(e._s(e.$t("ethMoreToOne.confirm")))])],1)],1),r("el-dialog",{attrs:{title:e.$t("ethMoreToOne.import_address"),visible:e.dialogThree},on:{"update:visible":function(t){e.dialogThree=t}}},[r("el-form",{attrs:{model:e.form}},[r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.type")}},[r("el-select",{model:{value:e.form.importTypeRadio,callback:function(t){e.$set(e.form,"importTypeRadio",t)},expression:"form.importTypeRadio"}},e._l(e.importType,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1!=e.form.importTypeRadio,expression:"form.importTypeRadio != 1"}],attrs:{label:e.$t("ethMoreToOne.password")}},[r("el-input",{attrs:{placeholder:"Password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.input_alert_1")}},[r("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.form.prvlist,callback:function(t){e.$set(e.form,"prvlist",t)},expression:"form.prvlist"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogThree=!1}}},[e._v(e._s(e.$t("ethMoreToOne.close")))]),r("el-button",{attrs:{type:"primary"},on:{click:e.onLead}},[e._v(e._s(e.$t("ethMoreToOne.import")))])],1)],1)],1)},n=[],o=r("d301"),s=o["a"],i=(r("91b9"),r("afe1"),r("2877")),l=Object(i["a"])(s,a,n,!1,null,"0c955d83",null);t["default"]=l.exports},"8eca":function(e,t,r){},"91b9":function(e,t,r){"use strict";r("9498")},9498:function(e,t,r){},a7fd:function(e,t,r){"use strict";t["a"]={zh:{ethMoreToOne:{settings:"设置",Basics:"基础",advanced:"高级",hexdata:"十六进制数据",add_contract:"添加代币",contract_address:"代币地址",contract_address_error:"代币地址错误",contract_added:"代币已添加",contract_error:"代币合约错误，请重试!",import:"导入小号",import_address:"导入地址",import_succeeded:"导入成功",export_succeeded:"导出成功",export:"导出选中",delete:"删除选中",all_amount:"全部数量",delete_err:"不能删除默认ETH",delete_token:"删除Token",rpc_node:"RPC 节点",threads:"线程",network_error_auto:"网络错误自动连接",open:"开启",close:"关闭",confirm:"确认",contract:"选择代币:",gasPrice:"Gas Price(gwei):",gasLimit:"Gas Limit:",sendNumber:"发送数量:",receiveAddress:"接收地址:",input_alert_1:"格式:一行一个",input_alert_2:"合约地址转账 Gas Limit 21000会超出限制!请调整!!",input_alert_3:"ETH 余额不足以支付 gas!!",input_alert_4:"Token余额不足",input_alert_5:"导入发生错误，可能格式错误!",input_alert_6:"导入发生错误，可能密码错误!",input_alert_7:"查询余额完毕",input_alert_8:"注意:Token归集请按照Token实际的上限填写。否则失败，具体可查看Token区块交易",eth_balance:"ETH余额 ({allBalance})",token_balance:"Token余额({allBalance})",nonce:"交易数({nonce})",result:"结果",result_0:"未执行",result_1:"成功",result_2:"失败",result_3:"手续费不足 : gas * price + value",result_4:"余额不足",result_5:"nonce太小 : 请先查询余额",option:"选项",select_1:"选中 Token 0 余额",select_2:"选中 Eth 0 余额",select_3:"选中 0 交易",select_4:"选中 错误",type:"类型",run_out:"执行完毕",password:"密码",get_gasprice:"获取最新Gas Price",check_balance:"查询余额",privatkey:"私钥",receiving_address_t:"输入接收地址",mnemonic:"助记词",receiveAddress_error:"接收地址错误",address:"地址",execute:"执行"}},en:{ethMoreToOne:{settings:"Settings",Basics:"Basics",advanced:"Advanced",hexdata:"Hex Data",add_contract:"Add Token",contract_address:"Token address",contract_address_error:"Token address error",contract_error:"Token Contract error, please try again!",contract_added:"Token added",import:"Import address",import_address:"import address",import_succeeded:"Import succeeded",export_succeeded:"Export succeeded",export:"Export selected",delete:"Delete selected",delete_err:"Default eth cannot be deleted",delete_token:"Delete token",all_amount:"All Amount",rpc_node:"RPC Node",threads:"threads",network_error_auto:"Network error Auto Connection",open:"Open",close:"Close",confirm:"Confirm",contract:"Token:",gasPrice:"Gas Price(gwei):",gasLimit:"Gas Limit:",sendNumber:"Coin Number:",receiveAddress:"Receive Address:",input_alert_1:"Format: one per line",input_alert_2:"The gas limit 21000 of contract address transfer will exceed the limit! Please adjust!!",input_alert_3:"The ETH balance is insufficient to cover gas!!",input_alert_4:"Insufficient token balance",input_alert_5:"Import error, possible format error!",input_alert_6:"Import error, maybe password error!",input_alert_7:"End of balance inquiry",input_alert_8:"Note: Please fill in token collection according to the actual upper limit of token. Otherwise, it fails. You can check the token block transaction for details",eth_balance:"ETH balance({allBalance})",token_balance:"Token balance({allBalance})",nonce:"Nonce({nonce})",result:"Result",result_0:"unenforced",result_1:"success",result_2:"failed",result_3:"Insufficient fee : gas * price + value",result_4:"Insufficient Balance",result_5:"nonce Too small : Please check the balance first",option:"Option",select_1:"Select token 0 balance",select_2:"Select Eth 0 balance",select_3:"Selected 0 transactions",select_4:"Selected error",type:"Type",check_balance:"Check balance",run_out:"completion of enforcement",password:"Password",get_gasprice:"Get latest Gas Price",privatkey:"Privatkey",receiving_address_t:"Please enter the receiving address",mnemonic:"Mnemonic",receiveAddress_error:"Receive address error",address:"Address",execute:"Execute"}}}},af29:function(e,t,r){"use strict";r("e9b3")},afe1:function(e,t,r){"use strict";r("8eca")},b893:function(e,t,r){"use strict";r("24a8"),r("27ae"),r("9b5f"),r("d447"),r("fc13"),r("5b12"),r("ea94");var a=r("d4ec"),n=r("bee2"),o=r("ade3"),s=function(){function e(){Object(a["a"])(this,e),Object(o["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(n["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",r=0;r<e;r++){var a=Math.ceil(61*Math.random());t+=this.chars[a]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(o){r=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)+this.numMul(t,n))/n}},{key:"numSub",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(o){r=0}try{a=t.toString().split(".")[1].length}catch(o){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)-this.numMul(t,n))/n}},{key:"numMul",value:function(e,t){var r=0,a=e.toString(),n=t.toString();try{r+=a.split(".")[1].length}catch(o){}try{r+=n.split(".")[1].length}catch(o){}return Number(a.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,r)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var r,a,n=0,o=0;try{n=e.toString().split(".")[1].length}catch(s){}try{o=t.toString().split(".")[1].length}catch(s){}return r=Number(e.toString().replace(".","")),a=Number(t.toString().replace(".","")),this.numMul(r/a,Math.pow(10,o-n))}}]),e}(),i=new s;t["a"]=i},d301:function(e,t,r){"use strict";(function(e){r("e3b5"),r("b3b0"),r("4b4e"),r("33375"),r("27ae"),r("9b5f"),r("d447"),r("a5f8"),r("90aa"),r("fc13"),r("5b12"),r("ea94"),r("feb3"),r("96cf");var a=r("1da1"),n=r("a7fd"),o=r("b893"),s=r("a835"),i=r("6af9"),l=r("de46"),c=r("2f24"),u=r("b671"),d=r.n(u),m=r("dbd9"),p=r.n(m),h=r("81ad"),f=r.n(h),b=r("c039"),g=r.n(b),_=r("02bb"),v=r.n(_),x=r("bd46"),T=r.n(x),k=r("29c9"),y="ethMoreToOne",S="1",w="https://mainnet-eth.compound.finance/",O="ETH",$="",M={},L={},N={},R=void 0;t["a"]={name:"EthMoreToOne",components:{TransactionTable:i["a"],ExecuteForm:l["a"]},data:function(){return{dialogOne:!1,dialogTwo:!1,dialogThree:!1,importType:[],hexdata:"0x",blockUrl:"",form:{gasPrice:"20",gasLimit:"21000",maxNum:!1,sendNumber:0,receiveAddress:"",importTypeRadio:1,prvlist:"",password:"",task_num:"1",chainid:"1",rpc_node:"",token_conTractAddress:""},selectedList:[],list:[]}},created:function(){this.$i18n.getLocaleMessage("en")[y]||(this.$i18n.mergeLocaleMessage("en",n["a"].en),this.$i18n.mergeLocaleMessage("zh",n["a"].zh))},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:R=e,e.importType.push({value:1,label:e.$t("ethMoreToOne.privatkey")}),e.importType.push({value:2,label:e.$t("ethMoreToOne.mnemonic")}),e.importType.push({value:3,label:"keystore"}),localStorage.getItem("tokenConTract")&&(L=JSON.parse(localStorage.getItem("tokenConTract"))),localStorage.getItem("task_num")&&(S=localStorage.getItem("task_num")),localStorage.getItem("privatekeyObj")&&(e.list=JSON.parse(localStorage.getItem("privatekeyObj"))),localStorage.getItem("task_num")&&(S=localStorage.getItem("task_num"),e.form.task_num=S),e.form.task_num=S,localStorage.getItem("chainid")&&(e.form.chainid=localStorage.getItem("chainid")),e.blockUrl=s["a"].resolveLinkOnEtherscan(parseInt(e.form.chainid)),localStorage.getItem("rpc_node")&&(w=localStorage.getItem("rpc_node")),e.form.rpc_node=w;case 13:case"end":return t.stop()}}),t)})))()},methods:{onSelectTableList:function(e){this.selectedList=e},onExecute:function(){if(0!==this.selectedList.length){var e=this.form.receiveAddress=this.form.receiveAddress.trim();if(d.a.isValidAddress(e))if("ETH"===O||"21000"!==this.form.gasLimit){var t=o["a"].numMul(this.form.gasPrice,this.form.gasLimit),r=g.a.toWei(t,"gwei");if("ETH"===O)for(var a in this.selectedList){var n=0;if(n=this.form.maxNum?g.a.fromWei(o["a"].numSub(g.a.toWei(this.selectedList[a].balance,"ether"),r),"ether"):this.form.sendNumber,n>this.selectedList[a].balance||n<0)R.onUpTableData(this.selectedList[a].address,-1,-1,-1,this.$t("ethMoreToOne.input_alert_3"));else{var s=this.transfer(this.selectedList[a].address,this.selectedList[a].prv,this.form.receiveAddress,n,this.selectedList[a].nonce,this.form.gasPrice,this.form.gasLimit);if(!s)return void this.$message.error("Hex Data Error");A.push({type:"ETH",amount:n,fee:g.a.fromWei(r,"ether"),nonce:this.selectedList[a].nonce,balance:this.selectedList[a].balance,tokenBalance:this.selectedList[a].tokenBalance,address:this.selectedList[a].address,hex:s})}}else for(var i in r=g.a.fromWei(r,"ether"),this.selectedList){var l=0;if(l=this.form.maxNum?this.selectedList[i].tokenBalance:this.form.sendNumber,l>this.selectedList[i].tokenBalance||l<0)R.onUpTableData(this.selectedList[i].address,-1,-1,-1,this.$t("ethMoreToOne.input_alert_4"));else if(this.selectedList[i].balance<r)R.onUpTableData(this.selectedList[i].address,-1,-1,-1,this.$t("ethMoreToOne.input_alert_3"));else{var c=this.transfer(this.selectedList[i].address,this.selectedList[i].prv,this.form.receiveAddress,this.form.maxNum?-1:l,this.selectedList[i].nonce,this.form.gasPrice,this.form.gasLimit,$);if(!c)return void this.$message.error("Hex Data Error");A.push({type:"ConTract",amount:l,fee:r,nonce:this.selectedList[i].nonce,balance:this.selectedList[i].balance,tokenBalance:this.selectedList[i].tokenBalance,address:this.selectedList[i].address,hex:c})}}}else this.$message.error(this.$t("ethMoreToOne.input_alert_2"));else this.$message.error(this.$t("ethMoreToOne.receiveAddress_error"))}else this.$message.error(this.$t("common.no_select_data"))},onDelAllSelectList:function(){var e=this.selectedList.map((function(e){return e.address})),t=this.list.filter((function(t){return!e.includes(t.address)}));this.list=t,localStorage.setItem("privatekeyObj",JSON.stringify(t))},onLead:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.form.prvlist.split("\n"),a={},t.t0=regeneratorRuntime.keys(r);case 3:if((t.t1=t.t0()).done){t.next=31;break}if(n=t.t1.value,2!==e.form.importTypeRadio){t.next=16;break}return t.prev=6,t.next=9,e.mnemonicToEthPrivate(r[n],e.form.password);case 9:r[n]=t.sent,t.next=16;break;case 12:return t.prev=12,t.t2=t["catch"](6),e.$message.error(r[n]+e.$t("ethMoreToOne.input_alert_5")),t.abrupt("continue",3);case 16:if(3!==e.form.importTypeRadio){t.next=25;break}t.prev=17,r[n]=e.keyStoreToPrivate(e.form.password,JSON.parse(r[n])),t.next=25;break;case 21:return t.prev=21,t.t3=t["catch"](17),e.$message.error(r[n]+e.$t("ethMoreToOne.input_alert_6")),t.abrupt("continue",3);case 25:if(r[n]){t.next=27;break}return t.abrupt("continue",3);case 27:r[n].length<66&&(r[n]="0x"+r[n]),d.a.isValidPrivate(d.a.toBuffer(r[n].trim()))&&!M[r[n]]?a[r[n]]=d.a.bufferToHex(d.a.privateToAddress(r[n])):(o=r[n].split("/")[0],o.length<66&&(o="0x"+o),d.a.isValidPrivate(d.a.toBuffer(o))&&!M[o]&&(a[o]=d.a.bufferToHex(d.a.privateToAddress(o)))),t.next=3;break;case 31:for(s in a)e.onUpTableData(a[s],0,0,0,0,s);localStorage.setItem("privatekeyObj",JSON.stringify(e.list.map((function(e){return e.result=0,e})))),e.$message.success(e.$t("ethMoreToOne.import_succeeded")),e.dialogThree=!1;case 35:case"end":return t.stop()}}),t,null,[[6,12],[17,21]])})))()},onAllAmount:function(){},onQuerybalance:function(e){var t=e.selectd,r=e.type;if(O=t,$=t,0!==r)if(0!==this.selectedList.length)for(var a in this.selectedList)E.push(this.selectedList[a].address);else this.$message.error(this.$t("common.no_select_data"))},getConTractAddress:function(e){for(var t in console.log(e),L)if(L[t].symbol===e)return t},onUpTableData:function(e,t,r,a,n){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];for(var s in this.list)if(this.list[s].address===e)return this.list[s].balance=parseFloat(t)>=0?t:this.list[s].balance,this.list[s].tokenBalance=r>=0?r:this.list[s].tokenBalance,this.list[s].nonce=a>=0?a:this.list[s].nonce,this.list[s].result=n,!0;return this.list.push({address:e,balance:t,tokenBalance:r,nonce:a,prv:o,result:n}),!0},onDeleteConTrac:function(e){for(var t in L)t===e&&delete L[t];localStorage.setItem("tokenConTract",JSON.stringify(L))},onSetting:function(){S=this.form.task_num,localStorage.setItem("task_num",S),w=this.form.rpc_node,localStorage.setItem("chainid",this.form.chainid),localStorage.setItem("rpc_node",w),location.reload()},onAddContract:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.form.token_conTractAddress,d.a.isValidAddress(r)){t.next=4;break}return e.$message.error(e.$t("ethMoreToOne.contract_address_error")),t.abrupt("return");case 4:if(!L[r]){t.next=7;break}return e.$message.error(e.$t("ethMoreToOne.contract_added")),t.abrupt("return");case 7:return L[r]={symbol:"",decimals:""},a='[{"method":"eth_call","params":[{"to":"'+r+'","data": "0x'+f.a.methodID("symbol",[]).toString("hex")+'"}, "latest"],"id":1,"jsonrpc":"2.0"},{"method":"eth_call","params":[{"to":"'+r+'","data": "0x'+f.a.methodID("decimals",[]).toString("hex")+'"}, "latest"],"id":2,"jsonrpc":"2.0"}]',t.next=11,e.$ajax({url:w,method:"post",data:a});case 11:for(s in n=t.sent,n)1===n[s].id&&(L[r].symbol=o["a"].cleanAsciiText(g.a.toAscii(n[s].result).toString())),2===n[s].id&&(L[r].decimals=parseInt(n[s].result));if(L[r].symbol&&(L[r].decimals||0===L[r].decimals)){t.next=17;break}return delete L[r],e.$message.error(e.$t("ethMoreToOne.contract_error")),t.abrupt("return");case 17:e.dialogTwo=!1,L[r].address=r,localStorage.setItem("tokenConTract",JSON.stringify(L)),location.reload();case 21:case"end":return t.stop()}}),t)})))()},onMaxNum:function(e){this.form.maxNum=e},mnemonicToEthPrivate:function(e,t){var r=arguments;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=r.length>2&&void 0!==r[2]?r[2]:"m/44'/60'/0'/0/0",e=e.trim(),Object(k["validateMnemonic"])(e)){a.next=4;break}return a.abrupt("return",!1);case 4:return a.next=6,Object(k["mnemonicToSeed"])(e,t);case 6:return o=a.sent,s=T.a.fromMasterSeed(o).derive(n),a.abrupt("return",s.privateKey.toString("hex"));case 9:case"end":return a.stop()}}),a)})))()},keyStoreToPrivate:function(e,t){return v.a.recover(e,t).toString("hex")},onExportTable:function(){var e=this;Promise.all([r.e("chunk-5164a781"),r.e("chunk-39dbb054"),r.e("chunk-552cf32c")]).then(r.bind(null,"4bf8")).then((function(t){var r=["Address","Balance","tokenBalance","Nonce","Result"],a=["address","balance","tokenBalance","nonce","result"],n=e.formatJson(a,e.selectedList);t.export_json_to_excel({header:r,data:n,filename:"list",autoWidth:!0,bookType:"xlsx"}),e.$message.success(e.$t("ethMoreToOne.export_succeeded"))}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},transfer:function(t,r,a,n,o,s,i){var l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=e.from(r.replace("0x",""),"hex"),u="",d="",m="0x";if(""===l){if(this.hexdata.length>2&&(m=this.hexdata.trim(),m=m.replace(/{address}/g,t.replace("0x","")),m=m.replace(/{amount}/g,g.a.toWei(n,"ether").toString(16)),-1!==m.indexOf("{")||-1!==m.indexOf("}")))return!1;u=a,d="0x"+g.a.toWei(n,"ether").toString(16)}else{u=l,d="0x";var h=parseInt("1"+"0".repeat(L[l].decimals));m=n>=0?"0x"+f.a.methodID("transfer",["address","uint256"]).toString("hex")+f.a.rawEncode(["address","uint256"],[a,"0x"+(n*h).toString(16)]).toString("hex"):"0x"+f.a.methodID("transfer",["address","uint256"]).toString("hex")+f.a.rawEncode(["address","uint256"],[a,N[t]]).toString("hex")}var b={nonce:"0x"+parseInt(o).toString(16),gasPrice:"0x"+(1e9*s).toString(16),gasLimit:"0x"+parseInt(i).toString(16),to:u,value:d,data:m,chainId:parseInt(this.form.chainid)},_=new p.a(b);return _.sign(c),"0x"+_.serialize().toString("hex")}}};var E=c["a"].queue((function(e,t){var r="";r="ETH"===O?'[{"id":1,"jsonrpc":"2.0","method":"eth_getBalance","params":["'+e+'","pending"]},{"id":2,"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["'+e+'","pending"]}]':'[{"id":1,"jsonrpc":"2.0","method":"eth_getBalance","params":["'+e+'","pending"]},{"id":2,"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["'+e+'","pending"]},{"method":"eth_call","params":[{"to":"'+$+'","data": "0x70a08231000000000000000000000000'+e.replace("0x","")+'"}, "latest"],"id":3,"jsonrpc":"2.0"}]',Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,s,i,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R.$ajax({url:w,method:"post",data:r});case 3:for(l in n=a.sent,o=0,s=0,i=0,n)1===n[l].id&&(o=g.a.fromWei(n[l].result,"ether")),2===n[l].id&&(s=parseInt(n[l].result)),3===n[l].id&&(N[e]=n[l].result,i=parseInt(n[l].result)/parseInt("1"+"0".repeat(L[$].decimals)));R.onUpTableData(e,o,i,s,1),t(),a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),R.onUpTableData(e,-1,-1,-1,2),t();case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()}),S);E.drain(Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:R.$message.success(R.$t("ethMoreToOne.input_alert_7"));case 1:case"end":return e.stop()}}),e)}))));var A=c["a"].queue((function(e,t){var r='{"method":"eth_sendRawTransaction","params":["'+e.hex+'"],"id":1,"jsonrpc":"2.0"}';Object(a["a"])(regeneratorRuntime.mark((function a(){var n,s,i,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R.$ajax({url:w,method:"post",data:r});case 3:n=a.sent,n.result&&66===n.result.length?(s=0,i=-1,"ETH"===e.type?s=o["a"].numSub(e.balance,o["a"].numAdd(e.amount,e.fee)):(s=o["a"].numSub(e.balance,e.fee),i=o["a"].numSub(e.tokenBalance,e.amount)),R.onUpTableData(e.address,s,i,e.nonce+1,n.result)):n.error.message&&(l="",l="insufficient funds for gas * price + value"===n.error.message?3:"nonce too low"===n.error.message?5:n.error.message,R.onUpTableData(e.address,-1,-1,-1,l)),t(),a.next=12;break;case 8:a.prev=8,a.t0=a["catch"](0),R.onUpTableData(e.address,-1,-1,-1,2),t();case 12:case"end":return a.stop()}}),a,null,[[0,8]])})))()}),S);A.drain(Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:R.$message.success(R.$t("ethMoreToOne.run_out"));case 1:case"end":return e.stop()}}),e)}))))}).call(this,r("1c35").Buffer)},de46:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"150px"}},[r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.contract")}},[r("el-select",{model:{value:e.tokenvalue,callback:function(t){e.tokenvalue=t},expression:"tokenvalue"}},e._l(e.tokenlist,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])})),1),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",plain:"",size:"small"},on:{click:e.onQuerybalance}},[e._v(e._s(e.$t("ethMoreToOne.check_balance")))]),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger",plain:"",size:"small"},on:{click:e.onDeleteConTrac}},[e._v(e._s(e.$t("ethMoreToOne.delete_token")))])],1),r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.gasPrice")}},[r("el-select",{attrs:{filterable:"","allow-create":"","filter-method":e.handleFilterAddress},model:{value:e.form.gasPrice,callback:function(t){e.$set(e.form,"gasPrice",t)},expression:"form.gasPrice"}},e._l(e.gas_price_option,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",plain:"",size:"small"},on:{click:e.updateGasPrice}},[e._v(e._s(e.$t("ethMoreToOne.get_gasprice")))])],1),r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.gasLimit")}},[r("el-input-number",{staticClass:"inputNum",attrs:{min:0},model:{value:e.form.gasLimit,callback:function(t){e.$set(e.form,"gasLimit",t)},expression:"form.gasLimit"}}),e._v(" "),r("el-alert",{staticStyle:{"margin-top":"5px"},attrs:{title:e.$t("ethMoreToOne.input_alert_8"),type:"success"}})],1),r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.sendNumber")}},[r("el-input-number",{staticClass:"inputNum",attrs:{disabled:e.sendNumberStatus,min:0},model:{value:e.form.sendNumber,callback:function(t){e.$set(e.form,"sendNumber",t)},expression:"form.sendNumber"}}),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",plain:"",size:"small"},on:{click:e.onMaxNum}},[e._v(e._s(e.$t("ethMoreToOne.all_amount")))])],1),r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.receiveAddress")}},[r("el-input",{staticClass:"inputNum",attrs:{placeholder:e.$t("ethMoreToOne.receiving_address_t"),min:0},model:{value:e.form.receiveAddress,callback:function(t){e.$set(e.form,"receiveAddress",t)},expression:"form.receiveAddress"}})],1)],1)},n=[],o=(r("e3b5"),r("b3b0"),r("a5f8"),r("96cf"),r("1da1")),s={props:{form:{type:Object,required:!1}},data:function(){return{tokenlist:[],tokenvalue:"ETH",sendNumberStatus:!1,gas_price_option:[]}},watch:{tokenvalue:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:"ETH"!==e&&21e3===t.form.gasLimit&&(t.form.gasLimit=6e4),"ETH"===e&&6e4===t.form.gasLimit&&(t.form.gasLimit=21e3),t.$emit("onQuerybalance",{selectd:e,type:0});case 3:case"end":return r.stop()}}),r)})))()}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.tokenlist.push({value:"ETH",label:"ETH",decimals:18}),localStorage.getItem("tokenConTract"))for(a in r=JSON.parse(localStorage.getItem("tokenConTract")),r)e.tokenlist.push({value:r[a].address,label:r[a].symbol,decimals:r[a].decimals});return t.next=4,e.updateGasPrice();case 4:case"end":return t.stop()}}),t)})))()},methods:{updateGasPrice:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$ajax({url:"https://gasprice.poa.network/",method:"get",data:{a:1}});case 2:for(a in r=t.sent,window.eth_blocknum=r.block_number,window.gas_price={instant:r.instant,fast:r.fast,standard:r.standard,slow:r.slow},e.gas_price_option=[],window.gas_price)e.gas_price_option.push({value:window.gas_price[a],label:a+"-"+window.gas_price[a]+" Gwei"});case 7:case"end":return t.stop()}}),t)})))()},updateGasLimit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={jsonrpc:"2.0",method:"eth_estimateGas",params:[{from:"0x0000000000000000000000000000000000000000",gasPrice:"0x64",to:e,value:"0xde0b6b3a7640000",data:"0x"}],id:1},r.next=3,t.$ajax({url:"https://mainnet-eth.compound.finance/",method:"post",data:a});case 3:n=r.sent,console.log(n);case 5:case"end":return r.stop()}}),r)})))()},onQuerybalance:function(){this.$emit("onQuerybalance",{selectd:this.tokenvalue,type:1})},onDeleteConTrac:function(){var e=this;"ETH"===this.tokenvalue?this.$message.error(this.$t("ethMoreToOne.delete_err")):(this.tokenlist=this.tokenlist.filter((function(t){return!e.tokenvalue.includes(t.value)})),this.$emit("onDeleteConTrac",this.tokenvalue),this.tokenvalue="ETH")},handleFilterAddress:function(e){"number"!==typeof e||isNaN(e)||(this.form.gasPrice=e)},onMaxNum:function(){this.sendNumberStatus?this.sendNumberStatus=!1:this.sendNumberStatus=!0,this.$emit("onMaxNum",this.sendNumberStatus)}}},i=s,l=r("2877"),c=Object(l["a"])(i,a,n,!1,null,null,null);t["a"]=c.exports},e9b3:function(e,t,r){}}]);