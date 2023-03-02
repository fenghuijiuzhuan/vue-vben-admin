var P=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var v=(e,o,t)=>o in e?P(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))z.call(o,t)&&v(e,t,o[t]);if(f)for(var t of f(o))O.call(o,t)&&v(e,t,o[t]);return e},$=(e,o)=>L(e,R(o));import{a as V,w as A,f as d,bc as B,au as D,aw as a,o as n,j as u,z as i,h as b,q as H,bl as j,n as s,ax as k,F as q,az as M,aB as U,aC as E}from"./index.ab23b027.js";import{d as G}from"./vuedraggable.umd.731e3dae.js";import T from"./FormNode.96b925f2.js";import _ from"./FormNodeOperate.84973113.js";import{u as J}from"./useFormDesignState.b4d3936f.js";/* empty css              */import{R as K}from"./index.129347fb.js";import{C as Q}from"./index.6651ebde.js";import"./index.6ba974d5.js";import"./formItemConfig.3b9ba81a.js";import"./componentMap.ed26ddbe.js";import"./index.55802221.js";import"./Checkbox.36978c0e.js";import"./index.15f64233.js";import"./index.2c3164e1.js";import"./index.cb746f86.js";import"./index.c4e4db09.js";import"./index.d65099af.js";import"./index.aaeaaa7c.js";import"./index.387cc40c.js";import"./useFormItem.b927064f.js";import"./RadioButtonGroup.50885f51.js";import"./get.35b3f508.js";import"./index.839990f9.js";import"./eagerComputed.40335f03.js";import"./index.c8aaaee7.js";import"./_baseIteratee.11e0ff3e.js";import"./DeleteOutlined.1bcb4728.js";import"./index.5063c924.js";import"./useRefs.dd5e6e8f.js";import"./Form.24bbbd28.js";import"./Col.d5288cee.js";import"./useFlexGapSupport.8ccca4fc.js";import"./useSize.8ec9576c.js";import"./transButton.159857d3.js";import"./index.de8a2242.js";import"./index.a56ec756.js";import"./useWindowSizeFn.e1ad71fd.js";import"./FullscreenOutlined.b355312a.js";import"./index.7023afdd.js";import"./index.9384b6b9.js";import"./isNumber.398e6b10.js";import"./uuid.2b29000c.js";import"./download.018bea21.js";import"./base64Conver.08b9f4ec.js";import"./index.0b4f5396.js";import"./index.385a55ee.js";import"./index.e96cf63e.js";const W=V({name:"LayoutItem",components:{FormNode:T,FormNodeOperate:_,draggable:G,Row:K,Col:Q},props:{schema:{type:Object,required:!0},currentItem:{type:Object,required:!0}},emits:["dragStart","handleColAdd","handle-copy","handle-delete"],setup(e){const{formDesignMethods:{handleSetSelectItem:o},formConfig:t}=J(),c=A({}),h=d(()=>{const{colProps:l={}}=e.schema;return l}),g=d(()=>e.schema.columns),p=d(()=>t.value.layout==="horizontal"?"Col":"div");return $(C({},B(c)),{colPropsComputed:h,handleSetSelectItem:o,layoutTag:p,list1:g})}});function X(e,o,t,c,h,g){const p=a("LayoutItem",!0),l=a("draggable"),y=a("Col"),w=a("Row"),I=a("FormNodeOperate"),F=a("FormNode");return n(),u(y,U(E(e.colPropsComputed)),{default:i(()=>[["Grid"].includes(e.schema.component)?(n(),b("div",{key:0,class:H(["grid-box",{active:e.schema.key===e.currentItem.key}]),onClick:o[2]||(o[2]=j(r=>e.handleSetSelectItem(e.schema),["stop"]))},[s(w,k({class:"grid-row"},e.schema.componentProps),{default:i(()=>[(n(!0),b(q,null,M(e.schema.columns,(r,S)=>(n(),u(y,{class:"grid-col",key:S,span:r.span},{default:i(()=>[s(l,k({class:"list-main draggable-box","component-data":{name:"list",tag:"div",type:"transition-group"}},{group:"form-draggable",ghostClass:"moving",animation:180,handle:".drag-move"},{"item-key":"key",modelValue:r.children,"onUpdate:modelValue":m=>r.children=m,onStart:m=>e.$emit("dragStart",m,r.children),onAdd:m=>e.$emit("handleColAdd",m,r.children)}),{item:i(({element:m})=>[s(p,{class:"drag-move",schema:m,"current-item":e.currentItem,onHandleCopy:o[0]||(o[0]=N=>e.$emit("handle-copy")),onHandleDelete:o[1]||(o[1]=N=>e.$emit("handle-delete"))},null,8,["schema","current-item"])]),_:2},1040,["modelValue","onUpdate:modelValue","onStart","onAdd"])]),_:2},1032,["span"]))),128))]),_:1},16),s(I,{schema:e.schema,currentItem:e.currentItem},null,8,["schema","currentItem"])],2)):(n(),u(F,{key:e.schema.key,schema:e.schema,"current-item":e.currentItem,onHandleCopy:o[3]||(o[3]=r=>e.$emit("handle-copy")),onHandleDelete:o[4]||(o[4]=r=>e.$emit("handle-delete"))},null,8,["schema","current-item"]))]),_:1},16)}var Je=D(W,[["render",X]]);export{Je as default};
