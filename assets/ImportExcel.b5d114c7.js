import{I as B}from"./index.966909b2.js";import{B as S}from"./TableImg.7b696d29.js";import"./componentMap.ed26ddbe.js";import{P as h}from"./index.194e2e35.js";import{au as E,a as D,v as F,aw as e,o as i,j as d,z as a,n as f,B as I,h as b,F as g,az as v}from"./index.ab23b027.js";import"./index.a56ec756.js";import"./useWindowSizeFn.e1ad71fd.js";import"./FullscreenOutlined.b355312a.js";import"./BasicForm.9154b5a8.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.af7e6573.js";import"./index.387cc40c.js";import"./index.c8aaaee7.js";import"./_baseIteratee.11e0ff3e.js";import"./get.35b3f508.js";import"./DeleteOutlined.1bcb4728.js";import"./index.5063c924.js";import"./useRefs.dd5e6e8f.js";import"./Form.24bbbd28.js";import"./Col.d5288cee.js";import"./useFlexGapSupport.8ccca4fc.js";import"./useSize.8ec9576c.js";import"./index.6651ebde.js";import"./uniqBy.1e63cba7.js";import"./index.129347fb.js";import"./useForm.34032196.js";import"./RadioButtonGroup.50885f51.js";import"./index.55802221.js";import"./Checkbox.36978c0e.js";import"./useFormItem.b927064f.js";import"./index.15f64233.js";import"./index.839990f9.js";import"./eagerComputed.40335f03.js";import"./index.c4e4db09.js";import"./index.d65099af.js";import"./index.cb746f86.js";import"./index.2c3164e1.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.0e6c552f.js";import"./index.9384b6b9.js";import"./isNumber.398e6b10.js";import"./fromPairs.84aabb58.js";import"./scrollTo.95d5cbd6.js";import"./index.8b4c0f35.js";import"./index.aaeaaa7c.js";import"./transButton.159857d3.js";import"./index.de8a2242.js";import"./index.7023afdd.js";import"./download.018bea21.js";import"./base64Conver.08b9f4ec.js";import"./index.0b4f5396.js";import"./index.385a55ee.js";import"./index.e590661f.js";import"./index.94da5e24.js";import"./useContentViewHeight.469e581f.js";import"./ArrowLeftOutlined.2282f639.js";import"./index.9a42a741.js";const C=D({components:{BasicTable:S,ImpExcel:B,PageWrapper:h},setup(){const t=F([]);function s(c){t.value=[];for(const n of c){const{header:l,results:u,meta:{sheetName:p}}=n,o=[];for(const r of l)o.push({title:r,dataIndex:r});t.value.push({title:p,dataSource:u,columns:o})}}return{loadDataSuccess:s,tableListRef:t}}});function k(t,s,c,n,l,u){const p=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return i(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:a(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:a(()=>[f(p,{class:"m-3"},{default:a(()=>[I(" \u5BFC\u5165Excel ")]),_:1})]),_:1},8,["onSuccess"]),(i(!0),b(g,null,v(t.tableListRef,(m,x)=>(i(),d(r,{key:x,title:m.title,columns:m.columns,dataSource:m.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var Nt=E(C,[["render",k]]);export{Nt as default};
