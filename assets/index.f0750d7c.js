var k=(h,s,t)=>new Promise((e,n)=>{var f=r=>{try{i(t.next(r))}catch(a){n(a)}},d=r=>{try{i(t.throw(r))}catch(a){n(a)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,d);i((t=t.apply(h,s)).next())});import{dB as x,a as T,v as w,c as B,fw as D,a7 as A,al as R,ah as V,aw as I,o as u,h as _,F as S,az as j,x as M,y as N,n as m,k as o,z as p,B as y,t as b,j as z,l as F}from"./index.ab23b027.js";import $ from"./DetailModal.68ec603e.js";import{B as H}from"./TableImg.7b696d29.js";import{k as q}from"./componentMap.ed26ddbe.js";import{u as G}from"./useTable.50f9e2f2.js";import{b as J}from"./index.a56ec756.js";import{getColumns as K}from"./data.aa4db179.js";import"./index.334baa67.js";import"./index.992fa7fb.js";import"./get.35b3f508.js";import"./useDescription.6fc62f6c.js";import"./index.55802221.js";import"./Checkbox.36978c0e.js";import"./index.15f64233.js";import"./index.839990f9.js";import"./eagerComputed.40335f03.js";import"./BasicForm.9154b5a8.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.af7e6573.js";import"./index.387cc40c.js";import"./index.c8aaaee7.js";import"./_baseIteratee.11e0ff3e.js";import"./DeleteOutlined.1bcb4728.js";import"./index.5063c924.js";import"./useRefs.dd5e6e8f.js";import"./Form.24bbbd28.js";import"./Col.d5288cee.js";import"./useFlexGapSupport.8ccca4fc.js";import"./useSize.8ec9576c.js";import"./index.6651ebde.js";import"./uniqBy.1e63cba7.js";import"./index.129347fb.js";import"./useForm.34032196.js";import"./RadioButtonGroup.50885f51.js";import"./useFormItem.b927064f.js";import"./index.194e2e35.js";import"./index.e590661f.js";import"./index.94da5e24.js";import"./useWindowSizeFn.e1ad71fd.js";import"./useContentViewHeight.469e581f.js";import"./ArrowLeftOutlined.2282f639.js";import"./index.9a42a741.js";import"./transButton.159857d3.js";import"./index.c4e4db09.js";import"./index.d65099af.js";import"./index.cb746f86.js";import"./index.2c3164e1.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.0e6c552f.js";import"./FullscreenOutlined.b355312a.js";import"./index.9384b6b9.js";import"./isNumber.398e6b10.js";import"./fromPairs.84aabb58.js";import"./scrollTo.95d5cbd6.js";import"./index.8b4c0f35.js";import"./index.aaeaaa7c.js";import"./index.de8a2242.js";import"./index.7023afdd.js";import"./download.018bea21.js";import"./base64Conver.08b9f4ec.js";import"./index.0b4f5396.js";import"./index.385a55ee.js";const O=()=>x.get({url:"/error"}),P={class:"p-4"},Q=["src"],po=T({__name:"index",setup(h){const s=w(),t=w([]),{t:e}=B(),n=D(),[f,{setTableData:d}]=G({title:e("sys.errorLog.tableTitle"),columns:K(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=J();A(()=>n.getErrorLogInfoList,l=>{R(()=>{d(V(l))})},{immediate:!0});function a(l){s.value=l,r(!0)}function C(){throw new Error("fire vue error!")}function E(){t.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield O()})}return(l,U)=>{const g=I("a-button");return u(),_("div",P,[(u(!0),_(S,null,j(t.value,c=>M((u(),_("img",{key:c,src:c,alt:""},null,8,Q)),[[N,!1]])),128)),m($,{info:s.value,onRegister:o(i)},null,8,["info","onRegister"]),m(o(H),{onRegister:o(f),class:"error-handle-table"},{toolbar:p(()=>[m(g,{onClick:C,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),m(g,{onClick:E,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),m(g,{onClick:L,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:p(({column:c,record:v})=>[c.key==="action"?(u(),z(o(q),{key:0,actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,v)}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"])])}}});export{po as default};
