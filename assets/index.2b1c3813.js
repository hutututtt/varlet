import{A as n}from"./AppType.12f592ea.js";import{S as d}from"./index.bb3d5fdb.js";import{d as f}from"./index.5d153c96.js";import{u as S,a as V,_ as U,b as g,c as C}from"./en-US.ee95b3a9.js";import{a as y,b as B}from"./utils.0c1f0941.js";import{r as z,f as A,h as w,t as o,ag as e,P as t,F as E,M as m,N as s,l as F}from"./elevation.b6664af0.js";import"./components.1dfa4f07.js";import"./provide.24680078.js";import"./elements.e9a3cb11.js";var k={basicUsage:"\u57FA\u672C\u4F7F\u7528",stepSize:"\u6307\u5B9A\u6B65\u957F",dualThumb:"\u53CC\u6ED1\u5757",disable:"\u7981\u7528",readonly:"\u53EA\u8BFB",sliderSize:"\u4E0D\u540C\u5927\u5C0F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",showLabel:"\u663E\u793A\u6807\u7B7E",customBtn:"\u81EA\u5B9A\u4E49\u6309\u94AE",validateValue:"\u503C\u7684\u6821\u9A8C"},x={basicUsage:"Basic Usage",stepSize:"Step Size",dualThumb:"Dual thumb",disable:"Disable",readonly:"Readonly",sliderSize:"Slider Size",customStyle:"Custom Style",showLabel:"Show Label",customBtn:"Custom Button",validateValue:"Validate Value"};const{add:p,use:N,pack:r,packs:G,merge:H}=S(),_=i=>{C(i),N(i)};V("zh-CN",U);V("en-US",g);p("zh-CN",k);p("en-US",x);const D={class:"slider-example__block"},I={setup(i){const a=z({value:3,value1:[24,50],value2:25,value3:40,value4:20,value5:20,value6:70,value7:50,value8:20,value9:[5,38],value10:[7,64]}),b=v=>{console.log(v)};return y(_),B(f),(v,u)=>(A(),w(E,null,[o(e(n),null,{default:t(()=>[m(s(e(r).basicUsage),1)]),_:1}),o(e(d),{modelValue:e(a).value,"onUpdate:modelValue":u[0]||(u[0]=l=>e(a).value=l)},null,8,["modelValue"]),o(e(n),null,{default:t(()=>[m(s(e(r).stepSize),1)]),_:1}),o(e(d),{modelValue:e(a).value2,"onUpdate:modelValue":u[1]||(u[1]=l=>e(a).value2=l),step:"10"},null,8,["modelValue"]),o(e(n),null,{default:t(()=>[m(s(e(r).dualThumb),1)]),_:1}),o(e(d),{modelValue:e(a).value1,"onUpdate:modelValue":u[2]||(u[2]=l=>e(a).value1=l),range:"",onChange:b,"label-visible":"always"},null,8,["modelValue"]),o(e(n),null,{default:t(()=>[m(s(e(r).disable),1)]),_:1}),o(e(d),{modelValue:e(a).value3,"onUpdate:modelValue":u[3]||(u[3]=l=>e(a).value3=l),disabled:""},null,8,["modelValue"]),o(e(n),null,{default:t(()=>[m(s(e(r).readonly),1)]),_:1}),o(e(d),{modelValue:e(a).value3,"onUpdate:modelValue":u[4]||(u[4]=l=>e(a).value3=l),readonly:""},null,8,["modelValue"]),o(e(n),null,{default:t(()=>[m(s(e(r).sliderSize),1)]),_:1}),o(e(d),{modelValue:e(a).value10,"onUpdate:modelValue":u[5]||(u[5]=l=>e(a).value10=l),"track-height":"1vw","thumb-size":"2.4vw",range:""},null,8,["modelValue"]),o(e(n),null,{default:t(()=>[m(s(e(r).customStyle),1)]),_:1}),o(e(d),{modelValue:e(a).value4,"onUpdate:modelValue":u[6]||(u[6]=l=>e(a).value4=l),"label-color":"purple","active-color":"#e0732c","track-color":"#3a68b4","thumb-color":"#e25241","label-text-color":"#ededed"},null,8,["modelValue"]),o(e(n),null,{default:t(()=>[m(s(e(r).customBtn),1)]),_:1}),o(e(d),{modelValue:e(a).value9,"onUpdate:modelValue":u[7]||(u[7]=l=>e(a).value9=l),range:"","active-color":"#52af77"},{button:t(({currentValue:l})=>[F("div",D,s(l),1)]),_:1},8,["modelValue"]),o(e(n),null,{default:t(()=>[m(s(e(r).showLabel),1)]),_:1}),o(e(d),{modelValue:e(a).value5,"onUpdate:modelValue":u[8]||(u[8]=l=>e(a).value5=l),"label-visible":"never"},null,8,["modelValue"]),o(e(d),{modelValue:e(a).value6,"onUpdate:modelValue":u[9]||(u[9]=l=>e(a).value6=l)},null,8,["modelValue"]),o(e(d),{modelValue:e(a).value7,"onUpdate:modelValue":u[10]||(u[10]=l=>e(a).value7=l),"label-visible":"always"},null,8,["modelValue"]),o(e(n),null,{default:t(()=>[m(s(e(r).validateValue),1)]),_:1}),o(e(d),{modelValue:e(a).value8,"onUpdate:modelValue":u[11]||(u[11]=l=>e(a).value8=l),rules:[l=>l>35||"error message"]},null,8,["modelValue","rules"])],64))}};export{I as default};
