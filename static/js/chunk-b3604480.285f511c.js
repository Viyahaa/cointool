(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3604480"],{10:function(e,t){},11:function(e,t){},"16a0":function(e,t,a){},"1ba3":function(e,t,a){"use strict";a("16a0")},"323cd":function(e,t,a){"use strict";a.r(t);var n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("SettingDialog",{ref:"SettingDialog",on:{onUpdateRpcInfo:e.onUpdateRpcInfo}}),a("div",{staticClass:"content"},[a("div",{staticClass:"rpcInfo"},[a("span",[e._v(e._s(e.$t("batchCheckBalance.rpc_node"))+": "+e._s(e.form.rpc_node))]),a("span",[e._v(e._s(e.$t("batchCheckBalance.threads"))+": "+e._s(e.form.task_num))]),a("el-button",{attrs:{type:"success",icon:"el-icon-setting",size:"mini"},on:{click:function(t){return e.$refs.SettingDialog.show()}}},[e._v(e._s(e.$t("batchCheckBalance.settings")))])],1),a("div",{staticClass:"inputBox"},[a("div",{staticClass:"inputContext inputContextLeft"},[a("div",{staticClass:"label"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:e._s(e.$t("batchCheckBalance.chainNameTips"))},slot:"content"}),a("div",[e._v("公链")])])],1),a("div",{staticClass:"switchBox"},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"large",filterable:""},model:{value:e.chainName,callback:function(t){e.chainName=t},expression:"chainName"}},e._l(e.chainList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])})),1)],1)]),a("div",{staticClass:"inputContext inputContextRight"},[a("div",{staticClass:"label"},[a("span",[e._v(e._s(e.$t("batchCheckBalance.token"))+" "),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:""!==e.tokenInfo.symbol,expression:"tokenInfo.symbol !== ''"}],staticStyle:{"margin-left":"10px"}},[a("a",{attrs:{target:"_blank",href:"###"}},[e._v(e._s(e.tokenInfo.symbol))])])],1)]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("batchCheckBalance.inputAlert_1"),placement:"top"}},[a("el-select",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_address,expression:"loading_address"}],staticStyle:{width:"100%"},attrs:{size:"large",filterable:"","filter-method":e.handleFilterAddress},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}},e._l(e.addressOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])})),1)],1)],1)]),a("div",{staticClass:"editor"},[a("div",{staticClass:"label"},[a("span",[e._v(e._s(e.$t("batchCheckBalance.token")))]),e.isInput?a("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("batchCheckBalance.upload_file")))]):a("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("batchCheckBalance.iinsert_manually")))])]),e.isInput?a("Editor",{ref:"editor",attrs:{placeholder:e.$t("batchCheckBalance.inputAlert")},on:{changed:e.onChangeEditor},model:{value:e.editorValue,callback:function(t){e.editorValue=t},expression:"editorValue"}}):a("upload-excel-component",{attrs:{"on-success":e.onUploadFileSuccess,"before-upload":e.beforeUpload}}),a("div",{staticClass:"label label-remark"},[e.isInput?a("span",[e._v(e._s(e.$t("batchCheckBalance.inputAlert_3")))]):a("span",[e._v(e._s(e.$t("batchCheckBalance.inputAlert_2")))]),a("div",{staticClass:"right"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isInput,expression:"!isInput"}],staticClass:"btnText"},[a("a",{attrs:{target:"_blank",href:"/example.xlsx"}},[e._v(e._s(e.$t("batchCheckBalance.download_examples")))])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isInput,expression:"isInput"}],staticClass:"btnText",on:{click:e.onExample}},[e._v(e._s(e.$t("batchCheckBalance.show_examples")))])])])],1),a("div",{staticClass:"searchBox"},[a("el-button",{attrs:{type:"success",size:"large"},on:{click:e.onSearchBalance}},[e._v(e._s(e.$t("batchCheckBalance.check_balance")))])],1),a("TransactionTable",{directives:[{name:"show",rawName:"v-show",value:e.list.length>0,expression:"list.length > 0"}],attrs:{list:e.list},on:{"update:list":function(t){e.list=t}}})],1)],1)},r=[],c=a("4833"),o=a("efe2"),l=(a("37de"),a("1e34"),a("f597"),a("c9f2"),a("7479"),a("4a32"),a("96e6"),a("22f9"),a("8b79"),a("6a61"),a("b893")),i=(a("a835"),a("9905")),u=a("4672"),d=a.n(u),p=a("7742"),h=a.n(p),f=a("8feb"),b=a.n(f),m=a("3796"),g=a("fa7e"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,"max-height":650},on:{"selection-change":e.onSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:e.$t("batchCheckBalance.address"),"min-width":"210"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("a",{staticStyle:{color:"blue"},attrs:{target:"_blank",href:"https://explorer.binance.org/address/"+n.address}},[e._v(e._s(e._f("miniAddress")(n.address)))])]}}])}),a("el-table-column",{attrs:{label:e.$t("batchCheckBalance.eth_balance",{balance:e.allBalance,symbol:e.symbol.toLocaleUpperCase()}),width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(e._f("autoFixed")(a.balance))+" ")]}}])}),a("el-table-column",{attrs:{label:e.$t("batchCheckBalance.token_balance",{balance:e.allBalance}),width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(a.token_balance)+" ")]}}])}),a("el-table-column",{attrs:{label:e.$t("batchCheckBalance.result"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-tag",{attrs:{type:e._f("resultTagStyleFilter")(n.result)}},[e._v(" "+e._s(e._f("resultTagFilter")(n.result))+" ")])]}}])}),a("el-table-column",{attrs:{label:e.$t("batchCheckBalance.nonce",{nonce:e.allNonce}),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(a.nonce)+" ")]}}])}),a("el-table-column",{attrs:{label:e.$t("batchCheckBalance.option"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},nativeOn:{click:function(a){return a.preventDefault(),e.onDeleteRow(t.$index)}}})]}}])})],1),a("div",{staticClass:"operationBtn"},[a("el-button",{attrs:{type:"success",plain:""},on:{click:e.onSelectBalanceZero}},[e._v(e._s(e.$t("batchCheckBalance.select_2",{symbol:e.symbol.toLocaleUpperCase()})))]),a("el-button",{attrs:{type:"success",plain:""},on:{click:e.onSelectNonceZero}},[e._v(e._s(e.$t("batchCheckBalance.select_3")))]),a("el-button",{attrs:{type:"success",icon:"el-icon-sort-up"},on:{click:e.onExportTable}},[e._v(e._s(e.$t("batchCheckBalance.export")))]),a("el-button",{attrs:{type:"danger",plain:""},on:{click:e.onSelectResultError}},[e._v(e._s(e.$t("batchCheckBalance.select_4")))]),a("el-button",{attrs:{type:"danger"},on:{click:e.onDelAllSelectList}},[e._v(e._s(e.$t("batchCheckBalance.delete")))])],1)],1)},k=[],v=(a("c9b2"),a("a9b5"),a("fdea"),a("403f"),a("297b"),a("7fe9"),a("9bdd"),a("ed08")),x={filters:{resultTagStyleFilter:function(e){var t={0:"info",1:"success",2:"danger"};return t[e]?t[e]:"info"},resultTagFilter:function(e){var t={0:n.$t("batchCheckBalance.result_0"),1:n.$t("batchCheckBalance.result_1"),2:n.$t("batchCheckBalance.result_2")};return t[e]?t[e]:e},orderNoFilter:function(e){return e.substring(0,30)}},props:{list:{type:Array,required:!0},symbol:{type:String,default:"eth"}},data:function(){return{allNonce:0,selectedList:[]}},computed:{allBalance:function(){return Object(v["b"])(this.list,"balance")}},created:function(){n=this},methods:{onDeleteRow:function(e){this.list.splice(e,1)},onSelectionChange:function(e){this.selectedList=e},onSelectBalanceZero:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){0===parseInt(t.balance)&&e.$refs.multipleTable.toggleRowSelection(t)}))},onSelectResultError:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){1!==parseInt(t.result)&&0!==parseInt(t.result)&&e.$refs.multipleTable.toggleRowSelection(t)}))},onDelAllSelectList:function(){var e=this.selectedList.map((function(e){return e.address})),t=this.list.filter((function(t){return!e.includes(t.address)}));this.$emit("update:list",t)},onSelectNonceZero:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){0===t.nonce&&e.$refs.multipleTable.toggleRowSelection(t)}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},onExportTable:function(){var e=this;Promise.all([a.e("chunk-2bbdefb0"),a.e("chunk-7b4250aa")]).then(a.bind(null,"4bf8")).then((function(t){var a=["Address","Balance","Result","Nonce"],n=["address","balance","result","nonce"],s=e.formatJson(n,e.selectedList);t.export_json_to_excel({header:a,data:s,filename:"list",autoWidth:!0,bookType:"xlsx"}),e.$message.success(e.$t("batchCheckBalance.export_succeeded"))}))}}},C=x,y=(a("1ba3"),a("5d22")),w=Object(y["a"])(C,_,k,!1,null,"2a0d7066",null),S=w.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"append-to-body":!0,width:e.isPc?"500px":"90%",title:e.$t("batchCheckBalance.settings"),visible:e.isShowDialog,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.isShowDialog=t}}},[a("div",{staticClass:"dialogBox"},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{staticClass:"item",attrs:{label:e.$t("batchCheckBalance.rpc_node")}},[a("el-tooltip",{attrs:{placement:"top",content:"https://docs.hecochain.com/#/wallet"}},[a("i",{staticClass:"el-icon-question icon"})]),a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.rpc_node,callback:function(t){e.$set(e.form,"rpc_node",t)},expression:"form.rpc_node"}})],1),a("el-form-item",{attrs:{label:"ChainId"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.chainid,callback:function(t){e.$set(e.form,"chainid",t)},expression:"form.chainid"}})],1),a("el-form-item",{attrs:{label:e.$t("batchCheckBalance.threads")}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.task_num,callback:function(t){e.$set(e.form,"task_num",t)},expression:"form.task_num"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"success"},on:{click:e.onSetting}},[e._v(e._s(e.$t("batchCheckBalance.confirm")))])],1)])},A=[],O=(a("65f0"),a("52c1")),I={components:{},props:{currentLockDate:{require:!0,type:Number}},data:function(){return{isShowDialog:!1,form:{task_num:"1",chainid:56,rpc_node:"https://dex-asiapacific.binance.org"}}},computed:Object(o["a"])(Object(o["a"])({},Object(O["b"])(["isPc","language"])),{},{theme:function(){return this.$store.state.settings.theme}}),created:function(){},methods:{show:function(){this.isShowDialog=!this.isShowDialog},onSetting:function(){this.show(),this.$emit("onUpdateRpcInfo",this.form)}}},B=I,T=(a("9686"),Object(y["a"])(B,$,A,!1,null,"669495e2",null)),j=T.exports,E=a("38c8"),N={zh:{batchCheckBalance:{token:"代币地址",settings:"设置",import:"导入地址",import_address:"导入地址",import_succeeded:"导入成功",export_succeeded:"导出成功",export:"导出选中",delete:"删除选中",rpc_node:"RPC 节点",threads:"线程",balance:"余额",please_check:"请先查询",confirm:"确认",inputAlert:"请输入地址, 一行一个",input_alert_1:"格式: {symbol} 地址 一行一个",input_alert_7:"查询余额完毕",eth_balance:"{symbol}余额 ({balance})",token_balance:"Token 余额 ({balance})",chainNameTips:"选择公链",nonce:"交易数({nonce})",result:"结果",result_0:"未执行",result_1:"成功",result_2:"失败",option:"选项",close:"关闭",select_2:"选中 {symbol} 0 余额",select_3:"选中 0 交易",select_4:"选中 错误",check_balance:"查询余额",address:"地址",inputAlert_1:"请选择代币或粘贴代币地址",inputAlert_2:"支持文件类型： CSV / Excel / Txt",inputAlert_3:"每一行应包括地址和数量，逗号分隔",show_examples:"查看例子",upload_file:"上传文件",iinsert_manually:"手动输入",download_examples:"下载例子"}},en:{batchCheckBalance:{token:"Token",settings:"Settings",import:"Import Address",import_address:"import address",import_succeeded:"Import succeeded",export_succeeded:"Export succeeded",export:"Export selected",delete:"Delete selected",rpc_node:"RPC Node",threads:"Threads",balance:"Balance",please_check:"Please check first",confirm:"Confirm",inputAlert:"Insert address, one per line",input_alert_1:"Format: {symbol} address one per line",input_alert_7:"End of balance inquiry",eth_balance:"{symbol} balance ({balance})",token_balance:"Token balance ({balance}) ",chainNameTips:"Select Chain",nonce:"交易数({nonce})",result:"Result",result_0:"unenforced",result_1:"success",result_2:"failed",option:"Option",close:"Close",select_2:"Select {symbol} 0 balance",select_3:"Selected 0 transactions",select_4:"Selected error",check_balance:"Check balance",address:"Address",inputAlert_1:"Select Or Insert your token address",inputAlert_2:"Accepted: CSV / Excel / Txt",inputAlert_3:"The address and amount are separated by commas",show_examples:"Show examples",upload_file:"Upload file",iinsert_manually:"Insert manually",download_examples:"Download examples"}}},R="demo",D={name:R,inject:["onCheckConnect"],components:{UploadExcelComponent:m["a"],Editor:g["a"],TransactionTable:S,SettingDialog:j,SelectAddress:E["a"]},data:function(){return{form:{task_num:1,chainid:56,rpc_node:""},isInput:!0,address:"",editorValue:"0xb56ce069e2ec13568bc6bd1cb6e13d9899b4d212\n0xFe007531847e3946C56C0c2b8EDb0e46C6cE5422",addressOptions:[],loading_address:!1,list:[{address:"aa",balance:1,result:1,token_balance:1,nonce:1},{address:"bb",balance:0,result:2,token_balance:1,nonce:1},{address:"cc",balance:0,result:0,token_balance:1,nonce:0}],rpcList:{eth:"https://mainnet-eth.compound.finance/",bnb:"https://bsc-dataseed3.binance.org"},chainName:"",tokenInfo:{symbol:"",decimals:""},chainList:[{label:"ETH",value:"eth"},{label:"BSC",value:"bnb"}],queue:null}},computed:Object(o["a"])({},Object(O["b"])(["isConnect","account","isPc","language"])),watch:{editorValue:function(e){this.onEditCheck(e)}},created:function(){var e=this;this.$i18n.getLocaleMessage("en")[R]||(this.$i18n.mergeLocaleMessage("en",N.en),this.$i18n.mergeLocaleMessage("zh",N.zh)),this.queue=i["a"].queue(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(a,n){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getData(a);case 3:n(),t.next=12;break;case 6:t.prev=6,t.t0=t["catch"](0),s={address:a,result:2,balance:-1,token_balance:-1,nonce:-1},e.list.push(s),console.log(t.t0),n();case 12:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,a){return t.apply(this,arguments)}}(),this.form.task_num),this.queue.drain(Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$message.success(e.$t("ethBatchBalance.input_alert_7"));case 1:case"end":return t.stop()}}),t)})))),this.chainName="bnb",this.form.rpc_node=this.rpcList[this.chainName]},mounted:function(){this.onAddContract()},methods:{getData:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e,"datas"),n='[{"id":1,"jsonrpc":"2.0","method":"eth_getBalance","params":["'+e+'","pending"]},{"id":2,"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["'+e+'","pending"]},{"method":"eth_call","params":[{"to":"'+t.address+'","data": "0x70a08231000000000000000000000000'+e.replace("0x","")+'"}, "latest"],"id":3,"jsonrpc":"2.0"}]',a.next=4,t.$ajax({url:t.form.rpc_node,method:"post",data:n});case 4:s=a.sent,console.log(s,"res"),r={address:e,result:1,balance:0,token_balance:0,nonce:0},s.forEach((function(e){1===e.id?r.balance=parseInt(e.result)/1e18:2===e.id?r.nonce=parseInt(e.result):3===e.id&&(r.token_balance=parseInt(e.result)/parseInt("1"+"0".repeat(t.tokenInfo.decimals)))})),t.list.push(r);case 9:case"end":return a.stop()}}),a)})))()},onAddContract:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.adddress){t.next=2;break}return t.abrupt("return");case 2:if(d.a.isValidAddress(e.address)){t.next=5;break}return e.$message.error(e.$t("batchCheckBalance.contract_address_error")),t.abrupt("return");case 5:return e.loading_address=!0,a='[{"method":"eth_call","params":[{"to":"'+e.address+'","data": "0x'+h.a.methodID("symbol",[]).toString("hex")+'"}, "latest"],"id":1,"jsonrpc":"2.0"},{"method":"eth_call","params":[{"to":"'+e.address+'","data": "0x'+h.a.methodID("decimals",[]).toString("hex")+'"}, "latest"],"id":2,"jsonrpc":"2.0"}]',console.log("postdata",a,"onAddContract"),t.next=10,e.$ajax({url:e.form.rpc_node,method:"post",data:a});case 10:for(s in n=t.sent,n)1===n[s].id&&(e.tokenInfo.symbol=l["a"].cleanAsciiText(b.a.toAscii(n[s].result).toString())),2===n[s].id&&(e.tokenInfo.decimals=parseInt(n[s].result));e.loading_address=!1,console.log(e.tokenInfo,"this.tokenInfo");case 14:case"end":return t.stop()}}),t)})))()},handleFilterAddress:function(e){e=e.trim(),this.address=e,this.onAddContract()},onUpTableData:function(e,t,a,n,s){return console.log(111),!0},onSearchBalance:function(){var e=this,t=this.editorValue.split("\n");t.forEach((function(t){e.queue.push(t)}))},onChangeEditor:function(e){this.editorValue=e},onExample:function(){this.editorValue="0x3df332e44a0bbff025838c187873d77f92caf5e9\n0x76d31966abf3edeb29e599eac4adcb72fba85e6a"},onEditCheck:function(e){var t=e.split("\n");console.log(t)},onToggleInputType:function(){this.isInput=!this.isInput},beforeUpload:function(e){var t=e.size/1024/1024<10;return!!t||(this.$message({message:"Please do not upload files larger than 10m in size.",type:"warning"}),!1)},onUploadFileSuccess:function(e){var t=e.results,a=(e.header,"");t.forEach((function(e,n){var s=n===t.length-1?"":"\n";a+="".concat(e.Address,",").concat(e.Amount).concat(s)})),this.editorValue=a,this.onToggleInputType()},onUpdateRpcInfo:function(e){console.log(e)}}},L=D,M=(a("f793"),Object(y["a"])(L,s,r,!1,null,"4ec735cd",null));t["default"]=M.exports},"38c8":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_address,expression:"loading_address"}],staticStyle:{width:"100%"},attrs:{clearable:"","default-first-option":"","allow-create":"",placeholder:"e.g. 0x111111111111111",filterable:"","filter-method":e.handleFilterAddress},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}},e._l(e.selectOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),e.tokenNameif(t.value,t.label).indexOf("Token")>=0?a("span",{staticStyle:{float:"right",color:"red","font-size":"13px"}},[e._v(e._s(e.tokenNameif(t.value,t.label)))]):a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(e.tokenNameif(t.value,t.label)))])])})),1)},s=[],r=a("4833"),c=a("efe2"),o=(a("6a61"),a("96e6"),a("fdea"),a("7479"),a("4a32"),a("52c1")),l=a("a835"),i=a("4672"),u=a.n(i),d=a("7742"),p=a.n(d),h=a("b893"),f=a("8feb"),b=a.n(f),m={inject:["onCheckConnect"],components:{},props:{pairAddress:{require:!0,type:String,default:""}},data:function(){return{address:"",loading_address:!1,selectOptions:[],addressOptionsCopy:[]}},computed:Object(c["a"])({},Object(o["b"])(["isConnect","account","isPc","language"])),watch:{address:function(e){this.$emit("update:pairAddress",e)},account:function(e){""!==e&&this.tokenGet()}},created:function(){this.address=this.pairAddress},mounted:function(){},methods:{tokenNameif:function(e,t){switch(t){case"UNI-V2":return this.lpAddress[e]=!0,"Uniswap Liquidity LP";case"Cake-LP":return this.lpAddress[e]=!0,"Pancake Liquidity LP";default:return"LP"===t.substr(-2,2)||"lp"===t.substr(-2,2)?"Liquidity LP":"Token "+t}},handleFilterAddress:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=e.trim(),t.selectOptions=e?t.selectOptions.filter((function(t){if(~t.label.indexOf(e)||~t.label.toUpperCase().indexOf(e.toUpperCase())||~t.value.indexOf(e)||~t.value.toUpperCase().indexOf(e.toUpperCase()))return!0})):t.addressOptionsCopy,t.onCheckConnect()){a.next=4;break}return a.abrupt("return");case 4:if(40!==e.length&&42!==e.length){a.next=28;break}if(t.loading_address=!0,40===e.length&&(e="0x"+e),u.a.isValidAddress(e)){a.next=11;break}return t.$message.error("Token Address Error1"),t.loading_address=!1,a.abrupt("return");case 11:return a.prev=11,n={to:e,data:"0x"+p.a.methodID("symbol",[]).toString("hex")},a.next=15,l["a"].sendEthcall(n);case 15:if(s=a.sent,"0x"!==s){a.next=20;break}return t.$message.error("Token Address Error"),t.loading_address=!1,a.abrupt("return");case 20:t.selectOptions.push({value:e,label:h["a"].cleanAsciiText(b.a.toAscii(s).toString())}),t.address=e,a.next=27;break;case 24:a.prev=24,a.t0=a["catch"](11),t.$message.error("Token Address Error");case 27:t.loading_address=!1;case 28:case"end":return a.stop()}}),a,null,[[11,24]])})))()},tokenGet:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r,c,o,i,u,d,p,h,f,b,m,g,_,k,v,x,C,y,w,S,$,A;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,null===l["a"].getAccount()||1!==l["a"].getChainId()){t.next=8;break}return t.next=4,e.$ajax({url:"https://api.ethplorer.io/getAddressInfo/"+l["a"].getAccount()+"?apiKey=freekey",method:"get"});case 4:for(s in a=t.sent,n=a.tokens,n){for(c in r=!0,e.selectOptions)e.selectOptions[c].value===n[s].tokenInfo.address&&(r=!1);r&&e.selectOptions.push({value:n[s].tokenInfo.address,label:n[s].tokenInfo.symbol})}e.addressOptionsCopy=e.selectOptions;case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:if(t.prev=13,null===l["a"].getAccount()||56!==l["a"].getChainId()){t.next=21;break}return t.next=17,e.$ajax({url:"https://bitter-pickled-twig.glitch.me/?address="+l["a"].getAccount(),method:"get"});case 17:for(u in o=t.sent,i=o,i){for(p in d=!0,e.selectOptions)e.selectOptions[p].value===i[u].tokenAddress&&(d=!1);d&&e.selectOptions.push({value:i[u].tokenAddress,label:i[u].symbol})}e.addressOptionsCopy=e.selectOptions;case 21:t.next=26;break;case 23:t.prev=23,t.t1=t["catch"](13),console.log(t.t1);case 26:if(t.prev=26,null===l["a"].getAccount()||128!==l["a"].getChainId()){t.next=34;break}return t.next=30,e.$ajax({url:"https://marshy-shiny-socks.glitch.me/?address="+l["a"].getAccount(),method:"get"});case 30:for(b in h=t.sent,f=h,f){for(g in m=!0,e.selectOptions)e.selectOptions[g].value===f[b].tokenAddress&&(m=!1);m&&e.selectOptions.push({value:f[b].tokenAddress,label:f[b].symbol})}e.addressOptionsCopy=e.selectOptions;case 34:t.next=39;break;case 36:t.prev=36,t.t2=t["catch"](26),console.log(t.t2);case 39:if(t.prev=39,null===l["a"].getAccount()||250!==l["a"].getChainId()){t.next=47;break}return t.next=43,e.$ajax({url:"https://ftmscan.glitch.me/?address="+l["a"].getAccount(),method:"get"});case 43:for(v in _=t.sent,k=_,k){for(C in x=!0,e.selectOptions)e.selectOptions[C].value===k[v].tokenAddress&&(x=!1);x&&e.selectOptions.push({value:k[v].tokenAddress,label:k[v].symbol})}e.addressOptionsCopy=e.selectOptions;case 47:t.next=52;break;case 49:t.prev=49,t.t3=t["catch"](39),console.log(t.t3);case 52:if(t.prev=52,null===l["a"].getAccount()||137!==l["a"].getChainId()){t.next=60;break}return t.next=56,e.$ajax({url:"https://token-scan.glitch.me/?platform=polygonscan.com&address="+l["a"].getAccount(),method:"get"});case 56:for(S in y=t.sent,w=y,w){for(A in $=!0,e.selectOptions)e.selectOptions[A].value===w[S].tokenAddress&&($=!1);$&&e.selectOptions.push({value:w[S].tokenAddress,label:w[S].symbol})}e.addressOptionsCopy=e.selectOptions;case 60:t.next=65;break;case 62:t.prev=62,t.t4=t["catch"](52),console.log(t.t4);case 65:case"end":return t.stop()}}),t,null,[[0,10],[13,23],[26,36],[39,49],[52,62]])})))()}}},g=m,_=a("5d22"),k=Object(_["a"])(g,n,s,!1,null,"32423e62",null);t["a"]=k.exports},"41f2":function(e,t,a){},9:function(e,t){},9686:function(e,t,a){"use strict";a("41f2")},b893:function(e,t,a){"use strict";var n=a("1222"),s=a("a3b6"),r=a("55ae"),c=(a("a9b5"),a("37de"),a("22f9"),a("7479"),a("4a32"),a("65f0"),a("476c"),a("63f1"),a("1e34"),a("96e6"),function(){function e(){Object(n["a"])(this,e),Object(r["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(r["a"])(this,"crypt",(function(e,t){var a=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},n=function(e){return("0"+Number(e).toString(16)).substr(-2)},s=function(t){return a(e).reduce((function(e,t){return e^t}),t)};return t.split("").map(a).map(s).map(n).join("")})),Object(r["a"])(this,"decrypt",(function(e,t){var a=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},n=function(t){return a(e).reduce((function(e,t){return e^t}),t)};return t.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})).map(n).map((function(e){return String.fromCharCode(e)})).join("")}))}return Object(s["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,a="x"===e?t:3&t|8;return a.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",a=0;a<e;a++){var n=Math.ceil(61*Math.random());t+=this.chars[n]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var a,n,s;try{a=e.toString().split(".")[1].length}catch(r){a=0}try{n=t.toString().split(".")[1].length}catch(r){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(e,s)+this.numMul(t,s))/s}},{key:"numSub",value:function(e,t){var a,n,s;try{a=e.toString().split(".")[1].length}catch(r){a=0}try{n=t.toString().split(".")[1].length}catch(r){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(e,s)-this.numMul(t,s))/s}},{key:"numMul",value:function(e,t){var a=0,n=e.toString(),s=t.toString();try{a+=n.split(".")[1].length}catch(r){}try{a+=s.split(".")[1].length}catch(r){}return Number(n.replace(".",""))*Number(s.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var a,n,s=0,r=0;try{s=e.toString().split(".")[1].length}catch(c){}try{r=t.toString().split(".")[1].length}catch(c){}return a=Number(e.toString().replace(".","")),n=Number(t.toString().replace(".","")),this.numMul(a/n,Math.pow(10,r-s))}}]),e}()),o=new c;t["a"]=o},c488:function(e,t,a){},f793:function(e,t,a){"use strict";a("c488")}}]);