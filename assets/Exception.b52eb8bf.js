import{a as N,aX as e,v as O,aY as R,aZ as v,a_ as S,b as A,f as T,k as s,a$ as _,n as r,C as h,c as k}from"./index.ab23b027.js";import{R as G}from"./index.22eb7021.js";var C="/assets/no-data.f7e550cc.svg",P="/assets/net-error.61b7e6df.svg",w=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:d}=R(),o=v(),c=S(),{t}=k(),{prefixCls:f}=A("app-exception-page"),m=T(()=>{const{status:i}=d,{status:u}=n;return Number(i)||u}),g=T(()=>s(a).get(s(m))),p=t("sys.exception.backLogin"),l=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?p:l,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?p:l,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:l,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:P}),()=>{const{title:i,subTitle:u,btnText:b,icon:x,handler:E,status:y}=s(g)||{};return r(G,{class:f,status:y,title:n.title||i,"sub-title":n.subTitle||u},{extra:()=>b&&r(h,{type:"primary",onClick:E},{default:()=>b}),icon:()=>x?r("img",{src:x},null):null})}}});export{w as default};
