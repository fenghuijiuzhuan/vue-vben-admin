var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(r,t,o)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,C=(r,t)=>{for(var o in t||(t={}))x.call(t,o)&&v(r,o,t[o]);if(d)for(var o of d(t))M.call(t,o)&&v(r,o,t[o]);return r};var _=(r,t,o)=>new Promise((m,a)=>{var u=i=>{try{e(o.next(i))}catch(p){a(p)}},c=i=>{try{e(o.throw(i))}catch(p){a(p)}},e=i=>i.done?m(i.value):Promise.resolve(i.value).then(u,c);e((o=o.apply(r,t)).next())});import{B as b}from"./BasicForm.9154b5a8.js";import"./componentMap.ed26ddbe.js";import{u as k}from"./useForm.34032196.js";import"./RadioButtonGroup.50885f51.js";import w from"./JsonModal.4e071abe.js";import{a as B,v as F,w as y,f as D,o as E,j,z as G,n as g,k as l,ax as O,dG as R}from"./index.ab23b027.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.af7e6573.js";import"./index.387cc40c.js";import"./index.c8aaaee7.js";import"./_baseIteratee.11e0ff3e.js";import"./get.35b3f508.js";import"./DeleteOutlined.1bcb4728.js";import"./index.5063c924.js";import"./useRefs.dd5e6e8f.js";import"./Form.24bbbd28.js";import"./Col.d5288cee.js";import"./useFlexGapSupport.8ccca4fc.js";import"./useSize.8ec9576c.js";import"./index.6651ebde.js";import"./uniqBy.1e63cba7.js";import"./index.a56ec756.js";import"./useWindowSizeFn.e1ad71fd.js";import"./FullscreenOutlined.b355312a.js";import"./index.129347fb.js";import"./index.55802221.js";import"./Checkbox.36978c0e.js";import"./index.15f64233.js";import"./index.2c3164e1.js";import"./index.cb746f86.js";import"./index.c4e4db09.js";import"./index.d65099af.js";import"./index.aaeaaa7c.js";import"./useFormItem.b927064f.js";import"./index.839990f9.js";import"./eagerComputed.40335f03.js";import"./transButton.159857d3.js";import"./index.de8a2242.js";import"./index.7023afdd.js";import"./index.9384b6b9.js";import"./isNumber.398e6b10.js";import"./uuid.2b29000c.js";import"./download.018bea21.js";import"./base64Conver.08b9f4ec.js";import"./index.0b4f5396.js";import"./index.385a55ee.js";import"./PreviewCode.cc749132.js";import"./index.59a5d590.js";import"./index.e96cf63e.js";const Oo=B({__name:"useForm",setup(r,{expose:t}){const o=F(null),m=y({formModel:{},formConfig:{},visible:!1}),a=D(()=>C({},m.formConfig)),u=n=>{m.formConfig=n,m.visible=!0},[c,{validate:e}]=k(),i=()=>{m.visible=!1},p=()=>_(this,null,function*(){var s,f;let n=yield e();(f=(s=o.value)==null?void 0:s.showModal)==null||f.call(s,n)});return t({showModal:u}),(n,s)=>(E(),j(l(R),{title:"\u9884\u89C8(\u4E0D\u652F\u6301\u5E03\u5C40)",visible:m.visible,onOk:p,onCancel:i,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:G(()=>[g(l(b),O(l(a),{onRegister:l(c)}),null,16,["onRegister"]),g(w,{ref_key:"jsonModal",ref:o},null,512)]),_:1},8,["visible"]))}});export{Oo as default};
