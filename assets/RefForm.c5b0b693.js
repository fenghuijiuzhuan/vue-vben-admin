import{B as C}from"./BasicForm.9154b5a8.js";import"./componentMap.ed26ddbe.js";import"./RadioButtonGroup.50885f51.js";import{au as B,a as E,cD as P,v as b,aw as p,o as F,j as v,z as e,i as a,n as u,B as l,E as k}from"./index.ab23b027.js";import{P as c}from"./index.194e2e35.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.af7e6573.js";import"./index.387cc40c.js";import"./index.c8aaaee7.js";import"./_baseIteratee.11e0ff3e.js";import"./get.35b3f508.js";import"./DeleteOutlined.1bcb4728.js";import"./index.5063c924.js";import"./useRefs.dd5e6e8f.js";import"./Form.24bbbd28.js";import"./Col.d5288cee.js";import"./useFlexGapSupport.8ccca4fc.js";import"./useSize.8ec9576c.js";import"./index.6651ebde.js";import"./uniqBy.1e63cba7.js";import"./index.a56ec756.js";import"./useWindowSizeFn.e1ad71fd.js";import"./FullscreenOutlined.b355312a.js";import"./index.129347fb.js";import"./index.55802221.js";import"./Checkbox.36978c0e.js";import"./index.15f64233.js";import"./index.2c3164e1.js";import"./index.cb746f86.js";import"./index.c4e4db09.js";import"./index.d65099af.js";import"./index.aaeaaa7c.js";import"./useFormItem.b927064f.js";import"./index.839990f9.js";import"./eagerComputed.40335f03.js";import"./transButton.159857d3.js";import"./index.de8a2242.js";import"./index.7023afdd.js";import"./index.9384b6b9.js";import"./isNumber.398e6b10.js";import"./uuid.2b29000c.js";import"./download.018bea21.js";import"./base64Conver.08b9f4ec.js";import"./index.0b4f5396.js";import"./index.385a55ee.js";import"./index.e590661f.js";import"./index.94da5e24.js";import"./useContentViewHeight.469e581f.js";import"./ArrowLeftOutlined.2282f639.js";import"./index.9a42a741.js";const $=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:t=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],D=E({components:{BasicForm:C,CollapseContainer:P,PageWrapper:c},setup(){const t=b(null),{createMessage:o}=k();return{formElRef:t,schemas:$,handleSubmit:n=>{o.success("click search,values:"+JSON.stringify(n))},setProps(n){const i=t.value;!i||i.setProps(n)}}}}),A={class:"mb-4"},g={class:"mb-4"};function S(t,o,n,i,w,W){const s=p("a-button"),m=p("BasicForm"),d=p("CollapseContainer"),f=p("PageWrapper");return F(),v(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:e(()=>[a("div",A,[u(s,{onClick:o[0]||(o[0]=r=>t.setProps({labelWidth:150})),class:"mr-2"},{default:e(()=>[l(" \u66F4\u6539labelWidth ")]),_:1}),u(s,{onClick:o[1]||(o[1]=r=>t.setProps({labelWidth:120})),class:"mr-2"},{default:e(()=>[l(" \u8FD8\u539FlabelWidth ")]),_:1}),u(s,{onClick:o[2]||(o[2]=r=>t.setProps({size:"large"})),class:"mr-2"},{default:e(()=>[l(" \u66F4\u6539Size ")]),_:1}),u(s,{onClick:o[3]||(o[3]=r=>t.setProps({size:"default"})),class:"mr-2"},{default:e(()=>[l(" \u8FD8\u539FSize ")]),_:1}),u(s,{onClick:o[4]||(o[4]=r=>t.setProps({disabled:!0})),class:"mr-2"},{default:e(()=>[l(" \u7981\u7528\u8868\u5355 ")]),_:1}),u(s,{onClick:o[5]||(o[5]=r=>t.setProps({disabled:!1})),class:"mr-2"},{default:e(()=>[l(" \u89E3\u9664\u7981\u7528 ")]),_:1}),u(s,{onClick:o[6]||(o[6]=r=>t.setProps({compact:!0})),class:"mr-2"},{default:e(()=>[l(" \u7D27\u51D1\u8868\u5355 ")]),_:1}),u(s,{onClick:o[7]||(o[7]=r=>t.setProps({compact:!1})),class:"mr-2"},{default:e(()=>[l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD ")]),_:1}),u(s,{onClick:o[8]||(o[8]=r=>t.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:e(()=>[l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E ")]),_:1})]),a("div",g,[u(s,{onClick:o[9]||(o[9]=r=>t.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:e(()=>[l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(s,{onClick:o[10]||(o[10]=r=>t.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:e(()=>[l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(s,{onClick:o[11]||(o[11]=r=>t.setProps({showResetButton:!1})),class:"mr-2"},{default:e(()=>[l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[12]||(o[12]=r=>t.setProps({showResetButton:!0})),class:"mr-2"},{default:e(()=>[l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[13]||(o[13]=r=>t.setProps({showSubmitButton:!1})),class:"mr-2"},{default:e(()=>[l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(s,{onClick:o[14]||(o[14]=r=>t.setProps({showSubmitButton:!0})),class:"mr-2"},{default:e(()=>[l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(s,{onClick:o[15]||(o[15]=r=>t.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:e(()=>[l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[16]||(o[16]=r=>t.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:e(()=>[l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ")]),_:1})]),u(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:e(()=>[u(m,{schemas:t.schemas,ref:"formElRef",labelWidth:100,onSubmit:t.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var wo=B(D,[["render",S]]);export{wo as default};
