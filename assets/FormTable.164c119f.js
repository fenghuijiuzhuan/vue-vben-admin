import{B as h}from"./TableImg.7b696d29.js";import"./componentMap.ed26ddbe.js";import{u as _}from"./useTable.50f9e2f2.js";import{getBasicColumns as k,getFormConfig as y}from"./tableData.f1e9215a.js";import{au as B,a as b,v,aw as u,o as l,j as C,z as e,B as c,n as f,h as g,F as A,i as E,t as T}from"./index.ab23b027.js";import{A as w}from"./index.7023afdd.js";import{d as D}from"./table.3f7517b1.js";import"./index.55802221.js";import"./Checkbox.36978c0e.js";import"./index.15f64233.js";import"./index.839990f9.js";import"./eagerComputed.40335f03.js";import"./BasicForm.9154b5a8.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.af7e6573.js";import"./index.387cc40c.js";import"./index.c8aaaee7.js";import"./_baseIteratee.11e0ff3e.js";import"./get.35b3f508.js";import"./DeleteOutlined.1bcb4728.js";import"./index.5063c924.js";import"./useRefs.dd5e6e8f.js";import"./Form.24bbbd28.js";import"./Col.d5288cee.js";import"./useFlexGapSupport.8ccca4fc.js";import"./useSize.8ec9576c.js";import"./index.6651ebde.js";import"./uniqBy.1e63cba7.js";import"./index.a56ec756.js";import"./useWindowSizeFn.e1ad71fd.js";import"./FullscreenOutlined.b355312a.js";import"./index.129347fb.js";import"./useForm.34032196.js";import"./RadioButtonGroup.50885f51.js";import"./useFormItem.b927064f.js";import"./index.194e2e35.js";import"./index.e590661f.js";import"./index.94da5e24.js";import"./useContentViewHeight.469e581f.js";import"./ArrowLeftOutlined.2282f639.js";import"./index.9a42a741.js";import"./transButton.159857d3.js";import"./index.c4e4db09.js";import"./index.d65099af.js";import"./index.cb746f86.js";import"./index.2c3164e1.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.0e6c552f.js";import"./index.9384b6b9.js";import"./isNumber.398e6b10.js";import"./fromPairs.84aabb58.js";import"./scrollTo.95d5cbd6.js";import"./index.8b4c0f35.js";import"./index.aaeaaa7c.js";import"./index.de8a2242.js";import"./download.018bea21.js";import"./base64Conver.08b9f4ec.js";import"./index.0b4f5396.js";import"./index.385a55ee.js";import"./select.14fe453e.js";const S=b({components:{BasicTable:h,AAlert:w},setup(){const o=v([]),[i,{getForm:F}]=_({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:D,columns:k(),useSearchForm:!0,formConfig:y(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:o,onSelect:p,onSelectAll:s}});function d(){}function p(t,m){m?o.value=[...o.value,t.id]:o.value=o.value.filter(r=>r!==t.id)}function s(t,m,r){const a=r.map(n=>n.id);t?o.value=[...o.value,...a]:o.value=o.value.filter(n=>!a.includes(n))}return{registerTable:i,getFormValues:d,checkedKeys:o,onSelect:p,onSelectAll:s}}}),K={key:1};function V(o,i,F,d,p,s){const t=u("a-button"),m=u("a-alert"),r=u("BasicTable");return l(),C(r,{onRegister:o.registerTable},{"form-custom":e(()=>[c(" custom-slot ")]),headerTop:e(()=>[f(m,{type:"info","show-icon":""},{message:e(()=>[o.checkedKeys.length>0?(l(),g(A,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),f(t,{type:"link",onClick:i[0]||(i[0]=a=>o.checkedKeys=[]),size:"small"},{default:e(()=>[c("\u6E05\u7A7A")]),_:1})],64)):(l(),g("span",K,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:e(()=>[f(t,{type:"primary",onClick:o.getFormValues},{default:e(()=>[c("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var Go=B(S,[["render",V]]);export{Go as default};
