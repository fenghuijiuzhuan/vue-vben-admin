var m=(i,u,o)=>new Promise((n,l)=>{var r=t=>{try{a(o.next(t))}catch(e){l(e)}},p=t=>{try{a(o.throw(t))}catch(e){l(e)}},a=t=>t.done?n(t.value):Promise.resolve(t.value).then(r,p);a((o=o.apply(i,u)).next())});import{B as w}from"./TableImg.7b696d29.js";import{k as E}from"./componentMap.ed26ddbe.js";import{u as h}from"./useTable.50f9e2f2.js";import{o as F}from"./select.14fe453e.js";import{d as D}from"./table.3f7517b1.js";import{t as b}from"./tree.c706cd33.js";import{au as B,a as v,v as R,aw as c,o as C,h as g,n as x,z as A,j as I,l as k,ah as y,E as T}from"./index.ab23b027.js";import"./index.55802221.js";import"./Checkbox.36978c0e.js";import"./index.15f64233.js";import"./index.839990f9.js";import"./eagerComputed.40335f03.js";import"./BasicForm.9154b5a8.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.af7e6573.js";import"./index.387cc40c.js";import"./index.c8aaaee7.js";import"./_baseIteratee.11e0ff3e.js";import"./get.35b3f508.js";import"./DeleteOutlined.1bcb4728.js";import"./index.5063c924.js";import"./useRefs.dd5e6e8f.js";import"./Form.24bbbd28.js";import"./Col.d5288cee.js";import"./useFlexGapSupport.8ccca4fc.js";import"./useSize.8ec9576c.js";import"./index.6651ebde.js";import"./uniqBy.1e63cba7.js";import"./index.a56ec756.js";import"./useWindowSizeFn.e1ad71fd.js";import"./FullscreenOutlined.b355312a.js";import"./index.129347fb.js";import"./useForm.34032196.js";import"./RadioButtonGroup.50885f51.js";import"./useFormItem.b927064f.js";import"./index.194e2e35.js";import"./index.e590661f.js";import"./index.94da5e24.js";import"./useContentViewHeight.469e581f.js";import"./ArrowLeftOutlined.2282f639.js";import"./index.9a42a741.js";import"./transButton.159857d3.js";import"./index.c4e4db09.js";import"./index.d65099af.js";import"./index.cb746f86.js";import"./index.2c3164e1.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.0e6c552f.js";import"./index.9384b6b9.js";import"./isNumber.398e6b10.js";import"./fromPairs.84aabb58.js";import"./scrollTo.95d5cbd6.js";import"./index.8b4c0f35.js";import"./index.aaeaaa7c.js";import"./index.de8a2242.js";import"./index.7023afdd.js";import"./download.018bea21.js";import"./base64Conver.08b9f4ec.js";import"./index.0b4f5396.js";import"./index.385a55ee.js";const _=[{title:"\u8F93\u5165\u6846",dataIndex:"name-group",editRow:!0,children:[{title:"\u8F93\u5165\u6846",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",editRow:!0,width:150},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",editRow:!0,align:"right",editRule:i=>m(void 0,null,function*(){return i==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""})},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150}]},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:F,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:b,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"\u52FE\u9009\u6846",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:i=>i?"\u662F":"\u5426",width:100},{title:"\u5F00\u5173",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:i=>i?"\u5F00":"\u5173",width:100},{title:"\u5355\u9009\u6846",dataIndex:"radio1",editRow:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u5355\u9009\u6309\u94AE\u6846",dataIndex:"radio2",editRow:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u5355\u9009\u6846",dataIndex:"radio3",editRow:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:F,resultField:"list",labelField:"name",valueField:"id"},width:200}],P=v({components:{BasicTable:w,TableAction:E},setup(){const{createMessage:i}=T(),u=R(""),[o]=h({title:"\u53EF\u7F16\u8F91\u884C\u793A\u4F8B",titleHelpMessage:["\u672C\u4F8B\u4E2D\u4FEE\u6539[\u6570\u5B57\u8F93\u5165\u6846]\u8FD9\u4E00\u5217\u65F6\uFF0C\u540C\u4E00\u884C\u7684[\u8FDC\u7A0B\u4E0B\u62C9]\u5217\u7684\u5F53\u524D\u7F16\u8F91\u6570\u636E\u4E5F\u4F1A\u540C\u6B65\u53D1\u751F\u6539\u53D8"],api:D,columns:_,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action"}});function n(t){var e;u.value=t.key,(e=t.onEdit)==null||e.call(t,!0)}function l(t){var e;u.value="",(e=t.onEdit)==null||e.call(t,!1,!1)}function r(t){return m(this,null,function*(){var d,s;if(i.loading({content:"\u6B63\u5728\u4FDD\u5B58...",duration:0,key:"saving"}),yield(d=t.onValid)==null?void 0:d.call(t))try{const f=y(t.editValueRefs);(yield(s=t.onEdit)==null?void 0:s.call(t,!1,!0))&&(u.value=""),i.success({content:"\u6570\u636E\u5DF2\u4FDD\u5B58",key:"saving"})}catch(f){i.error({content:"\u4FDD\u5B58\u5931\u8D25",key:"saving"})}else i.error({content:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u6570\u636E",key:"saving"})})}function p(t,e){return t.editable?[{label:"\u4FDD\u5B58",onClick:r.bind(null,t,e)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,e)}}]:[{label:"\u7F16\u8F91",disabled:u.value?u.value!==t.key:!1,onClick:n.bind(null,t)}]}function a({column:t,value:e,record:d}){t.dataIndex==="id"&&(d.editValueRefs.name4.value=`${e}`)}return{registerTable:o,handleEdit:n,createActions:p,onEditChange:a}}}),M={class:"p-4"};function S(i,u,o,n,l,r){const p=c("TableAction"),a=c("BasicTable");return C(),g("div",M,[x(a,{onRegister:i.registerTable,onEditChange:i.onEditChange},{bodyCell:A(({column:t,record:e})=>[t.key==="action"?(C(),I(p,{key:0,actions:i.createActions(e,t)},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister","onEditChange"])])}var Kt=B(P,[["render",S]]);export{Kt as default};
