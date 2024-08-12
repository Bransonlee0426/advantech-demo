import{r as h,j as e,a as R}from"./react-CMW9CHtC.js";import{c as I}from"./react-dom-BH5OqI7z.js";import{p as g}from"./styled-components-CucyMm-Y.js";import{N as T,H as N}from"./react-router-dom-CizB4ZOe.js";import{a as y,d as j,e as A,f as D,g as _}from"./react-router-DVuYDN1t.js";import{S as F,C as W}from"./react-transition-group-C4rk-FVi.js";import{P as $}from"./react-redux-KT-FeK8h.js";import{c as O,a as M,b as K}from"./@reduxjs-CIh0T1H3.js";import{a as E}from"./axios-B4uVmeYG.js";import{q as H}from"./qs-DUfR5t84.js";import"./call-bind-oCmkau44.js";import"./get-intrinsic-BKEvijrG.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-B5OANX0j.js";import"./define-data-property-DO9o5wXF.js";import"./es-define-property-tzmkNPou.js";import"./gopd-CEkvUycD.js";import"./has-property-descriptors-DphFXkuo.js";import"./scheduler-CzFDRTuY.js";import"./tslib-CGNu0TuM.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./@remix-run-cSfPjBvS.js";import"./@babel-Bvw1Xzp2.js";import"./dom-helpers-D0mFdbeO.js";import"./use-sync-external-store-Ci2LeNnY.js";import"./redux-DITMfSWq.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";import"./side-channel-uI4cdB7H.js";import"./object-inspect-BxKE6WBr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function m(a){if(a.ep)return;a.ep=!0;const c=o(a);fetch(a.href,c)}})();const L=()=>{const[t,r]=h.useState({upstreamUSBPort:"",serialStandard:"",serialPortType:[],serialPortNumber:[],mounting:[],protection:[],usbCommunication:[],minPrice:"",maxPrice:""}),[o,m]=h.useState(P),[a,c]=h.useState({}),[d,B]=h.useState(!0),u=(i,n)=>{c(l=>({...l,[i]:n}))};h.useEffect(()=>{(()=>{const n=P.filter(l=>{const s=parseFloat(l.price.replace("US$",""));return(!t.upstreamUSBPort||l.upstreamUSBPort===t.upstreamUSBPort)&&(!t.serialStandard||l.serialStandard.includes(t.serialStandard))&&(t.serialPortType.length===0||t.serialPortType.includes(l.serialPortType))&&(t.serialPortNumber.length===0||t.serialPortNumber.includes(l.serialPortNumber))&&(t.mounting.length===0||t.mounting.includes(l.mounting))&&(t.protection.length===0||t.protection.some(S=>l.protection.includes(S)))&&(t.usbCommunication.length===0||t.usbCommunication.includes(l.usbCommunication))&&(t.minPrice===""||s>=Number(t.minPrice))&&(t.maxPrice===""||s<=Number(t.maxPrice))});B(!1),setTimeout(()=>{m(n),B(!0)},220)})()},[t]);const p=(i,n)=>{r(l=>({...l,[i]:n}))},b=(i,n,l)=>{r(s=>({...s,[i]:l?[...Array.isArray(s[i])?s[i]:[],n]:Array.isArray(s[i])?s[i].filter(S=>S!==n):s[i]}))},x=(i,n)=>{const[l,s]=i.split(",");r(S=>({...S,minPrice:l,maxPrice:s}))};return e.jsxs("div",{className:"max-w-[1380px] usb-to-serial-converter-guide pt-12",children:[e.jsx("h1",{className:"text-5xl font-light mb-6 text-[#004280] font-['Montserrat','Microsoft_JhengHei','Heiti_SC','WenQuanYi_Micro_Hei']",children:"USB to Serial Converter"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"filter-options max-w-[280px] w-1/4 pr-4",children:[e.jsx(U,{label:"Upstream USB 2.0 Port",options:["B High Retention","Type B (Female)"],onChange:i=>p("upstreamUSBPort",i),type:"radio",isUnderline:!0}),e.jsx(U,{label:"Serial Standard",options:["RS-232","RS-422","RS-485","RS-4852W","RS-4854W"],onChange:i=>p("serialStandard",i),type:"radio",isUnderline:!0}),e.jsx(U,{label:"Serial Port type",options:["DB9 Female","DB9 Male","Terminal Block"],onChange:(i,n=!1)=>b("serialPortType",i,n),type:"checkbox",isUnderline:!0}),e.jsx(U,{label:"Serial Port Number",options:["1","2","4"],onChange:(i,n=!1)=>b("serialPortNumber",i,n),type:"checkbox",isUnderline:!0}),e.jsx(U,{label:"Mounting",options:["DIN","Panel","In-line"],onChange:(i,n=!1)=>b("mounting",i,n),type:"checkbox",isUnderline:!0}),e.jsx(U,{label:"Protection",options:["Isolation","ESD"],onChange:(i,n=!1)=>b("protection",i,n),type:"checkbox",isUnderline:!0}),e.jsx(U,{label:"USB Communication",options:["Locked Serial Number"],onChange:(i,n=!1)=>b("usbCommunication",i,n),type:"checkbox",isUnderline:!0}),e.jsx(U,{label:"Price Range",type:"priceRange",onChange:x})]}),e.jsx("div",{className:"products-container w-3/4 ",children:e.jsx("div",{className:`grid gap-4 transition-opacity duration-300 ${d?"opacity-100":"opacity-0"}`,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",maxWidth:"100%",justifyContent:"center"},children:o.length>0?o.map((i,n)=>e.jsx("div",{className:"max-w-[240px] w-full",children:e.jsx(G,{product:i,quantity:a[i.sku]??0,onQuantityChange:l=>u(i.sku,l)})},n)):e.jsx("div",{className:"col-span-full text-center text-2xl text-[#B6BFC1] my-8 font-light",children:"抱歉，沒有找到匹配的結果。請調整或探索其他選項"})})})]})]})},Q={"B High Retention":"Type B (Female) High Retention","RS-4852W":"RS-485, 2-wire","RS-4854W":"RS-485, 4-wire"},U=({label:t,options:r=[],onChange:o,type:m,isUnderline:a=!1})=>{const d=(s=>s.map(S=>({value:S,display:Q[S]||S})))(r),[B,u]=h.useState(""),[p,b]=h.useState(""),[x,i]=h.useState(""),n=s=>S=>{const f=S.target.value;(f===""||/^\d*\.?\d*$/.test(f))&&s(f)},l=()=>{switch(m){case"checkbox":return e.jsx("div",{children:r.map((s,S)=>e.jsxs("div",{className:"gap-1",children:[e.jsx("input",{type:"checkbox",id:`${t}-${s}`,className:"mr-2",onChange:f=>o(s,f.target.checked)}),e.jsx("label",{htmlFor:`${t}-${s}`,className:"text-sm text-[#737B7D]",children:s})]},S))});case"radio":return e.jsxs("div",{className:"flex flex-col flex-wrap gap-1",children:[e.jsxs("label",{className:"inline-flex items-center",children:[e.jsx("input",{type:"radio",className:"form-radio h-4 w-4 text-[#006EFF]",name:t,value:"",checked:B==="",onChange:()=>{u(""),o("")}}),e.jsx("span",{className:"ml-2 text-sm text-[#004280]",children:"All"})]}),d.map((s,S)=>e.jsxs("label",{className:"inline-flex items-center",children:[e.jsx("input",{type:"radio",className:"form-radio h-4 w-4 text-[#006EFF]",name:t,value:s.value,checked:B===s.value,onChange:()=>{u(s.value),o(s.value)}}),e.jsx("span",{className:"ml-2 text-sm text-[#004280] break-words max-w-[200px]",children:s.display})]},S))]});case"priceRange":return e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"number",placeholder:"Minimum",value:p,onChange:n(b),className:"w-1/2 px-2 py-2 border border-gray-300 rounded text-sm",onKeyUp:s=>{s.key==="Enter"&&o(`${p},${x}`)}}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:"text-gray-500",children:"-"})}),e.jsx("input",{type:"number",placeholder:"Maximum",value:x,onChange:n(i),className:"w-1/2 px-2 py-2 border border-gray-300 rounded text-sm",onKeyUp:s=>{s.key==="Enter"&&o(`${p},${x}`)}})]}),e.jsx("button",{className:"w-full px-3 py-2 bg-[#006EFF] text-white rounded text-sm hover:bg-[#0056CC] transition-colors duration-300",onClick:()=>{o(`${p},${x}`)},children:"套用"})]})}};return e.jsxs("div",{className:"filter-option",children:[e.jsx("label",{className:"block font-bold text-sm leading-8 text-[#434447]",children:t}),l(),a&&e.jsx("div",{className:"border-b border-gray-300 py-2"})]})},G=({product:t,quantity:r,onQuantityChange:o})=>{const m=u=>{const p=u.target.value.replace(/^0+/,"").replace(/^-\d*$/,"0");o(p)},a=()=>{o(r===""?0:r)},c=()=>{o(+r+1)},d=()=>{+r>0&&o(+r-1)},B=()=>{const u=parseFloat(t.price.replace("US$",""));return isNaN(u)||r===""?0:u*Number(r)};return e.jsxs("div",{className:"product-card bg-white p-3 flex flex-col items-center rounded hover:shadow-lg hover:-translate-y-1 transition-all duration-300",children:[e.jsxs("div",{onClick:()=>window.open(t.link,"_blank"),className:"cursor-pointer",children:[e.jsx("div",{className:"product-image w-full h-40 relative mb-3 overflow-hidden rounded",children:e.jsx("img",{src:t.imageUrl,alt:t.name,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"product-details w-full",children:[e.jsx("h3",{className:"product-code text-2xl font-bold text-[#0C0C0C] mb-1",children:t.name}),e.jsx("p",{className:"product-sku text-xs font-bold text-[#B6BFC1] mb-1",children:t.sku}),e.jsx("p",{className:"product-description text-sm text-[#737B7D] min-h-16 mb-2",children:t.description}),e.jsx("div",{className:"product-price text-right text-xl font-bold text-[#E57B03]",children:t.price}),e.jsxs("div",{className:"total-price text-right font-bold text-[#004280] text-xs mb-2 w-full",children:["Total: US$",B().toFixed(2)]})]})]}),e.jsxs("div",{className:"quantity-input flex items-center mb-2 w-full",children:[e.jsx("button",{onClick:d,className:"bg-gray-200 px-2 py-[1px] rounded-l",children:"-"}),e.jsx("input",{type:"number",value:r===""?"":r,onChange:m,className:"w-full text-center border-t border-b border-gray-200",onBlur:a,min:"0"}),e.jsx("button",{onClick:c,className:"bg-gray-200 px-2 py-[1px] rounded-r",children:"+"})]}),e.jsx("button",{className:"add-to-cart-button w-full bg-[#F39800] text-white font-bold py-2 px-4 rounded hover:bg-[#E67E00] transition duration-300",children:"Add To Cart"})]})},P=[{name:"ULI-314DC",sku:"BB-USR604",description:"USB to RS-232/422/485 (DB9 Male) Industrial Isolated Converter, 4 Port",upstreamUSBPort:"B High Retention",serialStandard:["RS-232","RS-422","RS-485"],serialPortType:"DB9 Male",serialPortNumber:"4",mounting:"DIN",protection:["ESD","Isolation"],usbCommunication:"",price:"US$530.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wesNAAQ?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-314DC_BB-USR604.png"},{name:"ULI-321D",sku:"BB-232USB9M",description:"USB 2.0 to RS-232 Converter, DB9 Male",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-232",serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$70.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZYr4AAG?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321D_BB-232USB9M.png"},{name:"ULI-321DK",sku:"BB-232USB9M-LS",description:"USB 2.0 to RS-232 Converter, DB9 Male. Locked Serial Number",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-232",serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$75.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZYuIAAW?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321DK_BB-232USB9M-LS.png"},{name:"ULI-321DC",sku:"BB-USO9ML2-A",description:"USB 2.0 to RS-232 Converter, DB9 Male. Isolated",upstreamUSBPort:"B High Retention",serialStandard:"RS-232",serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:["ESD","Isolation"],usbCommunication:"",price:"US$130.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005OsAhQAK?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321DC_BB-USO9ML2-A.png"},{name:"ULI-321DCK",sku:"BB-USO9ML2-LS-A",description:"USB 2.0 to RS-232 Converter, DB9 Male. Isolated. Locked Serial Number",upstreamUSBPort:"B High Retention",serialStandard:"RS-232",serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:["ESD","Isolation"],usbCommunication:"Locked Serial Number",price:"US$140.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005OsAiQAK?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321DCK_BB-USO9ML2-LS-A.png"},{name:"ULI-341TC",sku:"BB-USOPTL4",description:"USB to RS-422/485 (Terminal Block) Isolated Converter",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"Isolation",usbCommunication:"",price:"US$120.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wbzpAAA?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-341TC_BB-USOPTL4.png"},{name:"ULI-341TCK",sku:"BB-USOPTL4-LS",description:"ULI-341TCK - USB to RS-422/485 (Terminal Block) Isolated Converter.",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"Isolation",usbCommunication:"Locked Serial Number",price:"US$120.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZYnnAAG?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-341TCK_BB-USOPTL4-LS.png"},{name:"ULI-341DC",sku:"BB-USO9ML4",description:"USB to RS-422/485 (DB9 Male) Isolated Converter",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:"Isolation",usbCommunication:"",price:"US$130.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wefhAAA?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-341DC_BB-USO9ML4.png"},{name:"ULI-342TC",sku:"BB-USOPTL4DR-2",description:"USB to 2 Port RS422/485 (Terminal Block) Isolated Converter, DIN Rail",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"Terminal Block",serialPortNumber:"2",mounting:"DIN",protection:"Isolation",usbCommunication:"",price:"US$215.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wesMAAQ?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-342TC_BB-USOPTL4DR-274ddc11.png"},{name:"ULI-344TC",sku:"BB-USOPTL4-4P",description:"USB to RS-422/485 (Terminal Block) Isolated Converter",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"Terminal Block",serialPortNumber:"4",mounting:"Panel",protection:"Isolation",usbCommunication:"",price:"US$360.00",link:"https://www.iotmart.com/s/product/detail/01t28000001E1GHAA0?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-344TC_BB-USOPTL4-4P.png"},{name:"ULI-351D",sku:"BB-485USB9F-4W",description:"USB to RS-485 4 Wire (DB9 Female) Converter",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-4854W",serialPortType:"DB9 Female",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZYqPAAW?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351D_BB-485USB9F-4W.png"},{name:"ULI-351DK",sku:"BB-485USB9F-4W-LS",description:"USB to RS-485 4 Wire (DB9 Female) Converter Locked Serial Number",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-4854W",serialPortType:"DB9 Female",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZZAAAA4?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351DK_BB-485USB9F-4W-LS.png"},{name:"ULI-351T",sku:"BB-485USBTB-4W-A",description:"ULI-351T - USB to RS-485 4 Wire (Terminal Blaock) Converter",upstreamUSBPort:"B High Retention",serialStandard:"RS-4854W",serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005Oq5eQAC?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351T_BB-485USBTB-4W-A.png"},{name:"ULI-351TK",sku:"BB-485USBTB4WLS-A",description:"USB to RS-485 4-W (TB) Converter Locked Serial Number",upstreamUSBPort:"B High Retention",serialStandard:"RS-4854W",serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005Oq5fQAC?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351TK_BB-485USBTB4WLS-A.png"},{name:"ULI-361D",sku:"BB-485USB9F-2W",description:"USB to RS-485 2 Wire (DB9 Female) Converter",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-4852W",serialPortType:"DB9 Female",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wc21AAA?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361D_BB-485USB9F-2W.png"},{name:"ULI-361DK",sku:"BB-485USB9F-2W-LS",description:"USB to RS-485 2 Wire (DB9 Female) Converter. Locked Serial Number",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-4852W",serialPortType:"DB9 Female",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$95.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZZ4dAAG?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361DK_BB-485USB9F-2W-LS.png"},{name:"ULI-361T",sku:"BB-485USBTB-2W-A",description:"USB to RS-485 2 Wire (Terminal Block) Converter",upstreamUSBPort:"B High Retention",serialStandard:"RS-4852W",serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$80.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005Oq5cQAC?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361T_BB-485USBTB-2W-A.png"},{name:"ULI-361TK",sku:"BB-485USBTB2WLS-A",description:"USB to RS-485 2 Wire (Terminal Block) Converter. Locked Serial Number",upstreamUSBPort:"B High Retention",serialStandard:"RS-4852W",serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005Oq5dQAC?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361TK_BB-485USBTB2WLS-A.png"}],z=({image:t,title:r,subtitle:o,route:m})=>e.jsxs(q,{to:m,children:[e.jsx(Z,{src:t,alt:r}),e.jsx(Y,{children:r}),e.jsx(V,{children:o})]}),q=g(T)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  padding: 0.5rem;
  &:hover {
    background-color: #f8f8f8;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &.active {
    color: #0056b3;
    font-weight: bold;
    background-color: #e6f2ff;
    border-color: #0056b3;
  }
`,Z=g.img`
  max-width: 180px;
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`,Y=g.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  height: 3.5rem;
  width: 10rem;
`,V=g.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--second-text-color);
`,J=""+new URL("../webp/SerialRepeaterIsolator-5jVvaE3G.webp",import.meta.url).href,X=""+new URL("../webp/USBtoSerialConverter-MGxD42Nh.webp",import.meta.url).href,ee=""+new URL("../webp/SerialtoSerialConverter-CbjAFkr2.webp",import.meta.url).href,te=""+new URL("../webp/USBHubIsolator-Clnhqb4l.webp",import.meta.url).href,re=""+new URL("../webp/SerialtoFiberConverter-sgYBsoKU.webp",import.meta.url).href,ie=""+new URL("../webp/SurgeSuppressorDataSplitterTap-D63kX5hM.webp",import.meta.url).href;function oe(){const t=y(),r=j(),o=h.useRef(null);return h.useEffect(()=>{t.pathname==="/"&&r("/usb-to-serial-converter")},[]),e.jsx("div",{children:e.jsxs(ce,{children:[e.jsxs(ae,{children:[e.jsx(ne,{children:"ULI Series Selection Guide"}),e.jsx(se,{children:"2 Steps for Selecting the Right ULI"}),e.jsx(de,{children:k.map(m=>e.jsx(z,{...m},m.route))})]}),e.jsx(F,{children:e.jsx(W,{nodeRef:o,classNames:"fade",timeout:200,children:e.jsx(me,{ref:o,children:e.jsx(le,{children:e.jsx(A,{children:k.map(m=>e.jsx(D,{path:m.route,element:m.element},m.route))})})})},t.pathname)})]})})}const k=[{image:re,title:"Serial to Fiber Converter",subtitle:"ULI-210",route:"/serial-to-fiber-converter"},{image:ee,title:"Serial to Serial Converter",subtitle:"ULI-220",route:"/serial-to-serial-converter"},{image:J,title:"Serial Repeater/Isolator",subtitle:"ULI-230",route:"/serial-repeater-isolator"},{image:ie,title:"Surge Suppressor DataSplitter/Tap",subtitle:"ULI-240/250/260",route:"/surge-suppressor-data-splitter-tap"},{image:X,title:"USB to Serial Converter",subtitle:"ULI-300",route:"/usb-to-serial-converter",element:e.jsx(L,{})},{image:te,title:"USB Hub/Isolator",subtitle:"ULI-400",route:"/usb-hub-isolator"}],ne=g.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`,se=g.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--second-text-color);
`,ae=g.div`
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,le=g.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem 1rem;
`,ce=g.div`
  min-height: 100vh;
  background-color: var(--background-color);
`,me=g.div`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity ease-in;
  }
`,de=g.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  background-color: #fff;
  max-width: 1380px;
  margin: 0 auto;
  padding-bottom: 1rem;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;function ue(){return y(),h.useRef(null),_([{path:"/",element:e.jsx(oe,{}),children:[{path:"serial-to-fiber-converter",element:""},{path:"serial-to-serial-converter",element:""},{path:"serial-repeater-isolator",element:""},{path:"surge-suppressor-data-splitter-tap",element:""},{path:"/usb-to-serial-converter",element:e.jsx(L,{})},{path:"usb-hub-isolator",element:""}]}])}g.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;const pe=()=>e.jsx(ue,{}),Se="modulepreload",ge=function(t,r){return new URL(t,r).href},v={},he=function(r,o,m){let a=Promise.resolve();if(o&&o.length>0){const c=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),B=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=Promise.all(o.map(u=>{if(u=ge(u,m),u in v)return;v[u]=!0;const p=u.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(!!m)for(let n=c.length-1;n>=0;n--){const l=c[n];if(l.href===u&&(!p||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${b}`))return;const i=document.createElement("link");if(i.rel=p?"stylesheet":Se,p||(i.as="script",i.crossOrigin=""),i.href=u,B&&i.setAttribute("nonce",B),document.head.appendChild(i),p)return new Promise((n,l)=>{i.addEventListener("load",n),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${u}`)))})}))}return a.then(()=>r()).catch(c=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c})},Be=t=>{t&&t instanceof Function&&he(()=>import("./web-vitals-BA3w2fPb.js"),[],import.meta.url).then(({getCLS:r,getFID:o,getFCP:m,getLCP:a,getTTFB:c})=>{r(t),o(t),m(t),a(t),c(t)})},C=E.create({baseURL:"https://lyt-top.gitee.io/vue-next-admin-preview/",timeout:5e4,headers:{"Content-Type":"application/json"},paramsSerializer:{serialize(t){return H.stringify(t,{allowDots:!0})}}});C.interceptors.request.use(t=>t,t=>(console.log("request error:",t),Promise.reject(t)));C.interceptors.response.use(t=>{const r=t.data;return["您没有访问权限！","您还没有登录！"].includes(r.msg),r.code&&r.code!==0?(r.code===401||r.code,r):(r.msg,r)},t=>(t.message.indexOf("timeout")!=-1?console.log("timeout error:"):t.message=="Network Error"?console.log("Network Error:"):console.log("response error:",t.response),Promise.reject(t)));function be(){return{getBooks:()=>C({url:"/books/list",method:"get"})}}const w=O("counter/fetchBooks",async()=>{const t=be(),{data:r}=await t.getBooks();return r}),Ue={books:null,status:"",error:null},xe=M({name:"books",initialState:Ue,reducers:{},extraReducers:t=>{t.addCase(w.pending,r=>{r.status="loading"}).addCase(w.fulfilled,(r,o)=>{r.status="succeeded"}).addCase(w.rejected,(r,o)=>{r.status="failed",r.error="error"})}}),fe=xe.reducer,we=K({reducer:{books:fe}}),Ce=I.createRoot(document.getElementById("root"));Ce.render(e.jsx(R.StrictMode,{children:e.jsx($,{store:we,children:e.jsx(N,{children:e.jsx(pe,{})})})}));Be(console.log);