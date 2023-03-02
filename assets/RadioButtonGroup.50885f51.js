import{a as $,H as O,J as D,v as k,a7 as U,a4 as E,R as H,S as B,n as h,ak as J,G as x,al as L,cA as q,f as K,au as M,aw as F,o as S,j as A,z as T,h as Q,az as W,F as X,ax as Y,aF as Z,B as ee,t as ae}from"./index.ab23b027.js";import{R as y}from"./index.55802221.js";import{u as te}from"./useFormItem.b927064f.js";var ne=J("large","default","small"),oe=function(){return{prefixCls:String,value:x.any,size:x.oneOf(ne),options:{type:Array},disabled:{type:Boolean,default:void 0},name:String,buttonStyle:{type:String,default:"outline"},id:String,optionType:{type:String,default:"default"},onChange:Function,"onUpdate:value":Function}},de=$({name:"ARadioGroup",props:oe(),setup:function(e,r){var d=r.slots,c=r.emit,v=O(),a=D("radio",e),l=a.prefixCls,t=a.direction,b=a.size,s=k(e.value),g=k(!1);U(function(){return e.value},function(u){s.value=u,g.value=!1});var z=function(i){var f=s.value,p=i.target.value;"value"in e||(s.value=p),!g.value&&p!==f&&(g.value=!0,c("update:value",p),c("change",i),v.onFieldChange()),L(function(){g.value=!1})};return E("radioGroupContext",{onRadioChange:z,stateValue:s,props:e}),function(){var u,i,f=e.options,p=e.optionType,I=e.buttonStyle,G=e.id,V=G===void 0?v.id.value:G,m="".concat(l.value,"-group"),N=H(m,"".concat(m,"-").concat(I),(u={},B(u,"".concat(m,"-").concat(b.value),b.value),B(u,"".concat(m,"-rtl"),t.value==="rtl"),u)),C=null;if(f&&f.length>0){var _=p==="button"?"".concat(l.value,"-button"):l.value;C=f.map(function(o){if(typeof o=="string"||typeof o=="number")return h(y,{key:o,prefixCls:_,disabled:e.disabled,value:o,checked:s.value===o},{default:function(){return[o]}});var R=o.value,P=o.disabled,j=o.label;return h(y,{key:"radio-group-value-options-".concat(R),prefixCls:_,disabled:P||e.disabled,value:R,checked:s.value===R},{default:function(){return[j]}})})}else C=(i=d.default)===null||i===void 0?void 0:i.call(d);return h("div",{class:N,id:V},[C])}}});const ue=$({name:"RadioButtonGroup",components:{RadioGroup:y.Group,RadioButton:y.Button},props:{value:{type:[String,Number,Boolean]},options:{type:Array,default:()=>[]}},emits:["change"],setup(n){const e=q(),r=k([]),[d]=te(n,"value","change",r),c=K(()=>{const{options:a}=n;return!a||(a==null?void 0:a.length)===0?[]:a.some(t=>Z(t))?a.map(t=>({label:t,value:t})):a});function v(...a){r.value=a}return{state:d,getOptions:c,attrs:e,handleClick:v}}});function re(n,e,r,d,c,v){const a=F("RadioButton"),l=F("RadioGroup");return S(),A(l,Y(n.attrs,{value:n.state,"onUpdate:value":e[0]||(e[0]=t=>n.state=t),"button-style":"solid"}),{default:T(()=>[(S(!0),Q(X,null,W(n.getOptions,t=>(S(),A(a,{key:`${t.value}`,value:t.value,disabled:t.disabled,onClick:b=>n.handleClick(t)},{default:T(()=>[ee(ae(t.label),1)]),_:2},1032,["value","disabled","onClick"]))),128))]),_:1},16,["value"])}var ce=M(ue,[["render",re]]);export{de as R,ce as a};
