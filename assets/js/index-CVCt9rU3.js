import{j as e}from"./react-DFNuXNLg.js";import{c as y}from"./react-dom-CKrH68in.js";import{S as k,C as v}from"./react-transition-group-Dmq0onXN.js";import{P as T}from"./react-redux-DrR45iLa.js";import{q as I}from"./qs-DUfR5t84.js";import"./@babel-Bvw1Xzp2.js";import"./dom-helpers-D0mFdbeO.js";import"./use-sync-external-store-BX9IGepd.js";import"./call-bind-oCmkau44.js";import"./get-intrinsic-BKEvijrG.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-B5OANX0j.js";import"./define-data-property-DO9o5wXF.js";import"./es-define-property-tzmkNPou.js";import"./gopd-CEkvUycD.js";import"./has-property-descriptors-DphFXkuo.js";import"./side-channel-uI4cdB7H.js";import"./object-inspect-BxKE6WBr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();const P=()=>{const[t,r]=React.useState({upstreamUSBPort:"",serialStandard:"",serialPortType:[],serialPortNumber:[],mounting:[],protection:[],usbCommunication:[],minPrice:"",maxPrice:""}),[o,c]=React.useState(w),[a,s]=React.useState({}),[d,u]=React.useState(!0),g=(i,l)=>{s(m=>({...m,[i]:l}))};React.useEffect(()=>{(()=>{const l=w.filter(m=>{const n=parseFloat(m.price.replace("US$",""));return(!t.upstreamUSBPort||m.upstreamUSBPort===t.upstreamUSBPort)&&(!t.serialStandard||m.serialStandard.includes(t.serialStandard))&&(t.serialPortType.length===0||t.serialPortType.includes(m.serialPortType))&&(t.serialPortNumber.length===0||t.serialPortNumber.includes(m.serialPortNumber))&&(t.mounting.length===0||t.mounting.includes(m.mounting))&&(t.protection.length===0||t.protection.some(S=>m.protection.includes(S)))&&(t.usbCommunication.length===0||t.usbCommunication.includes(m.usbCommunication))&&(t.minPrice===""||n>=Number(t.minPrice))&&(t.maxPrice===""||n<=Number(t.maxPrice))});u(!1),setTimeout(()=>{c(l),u(!0)},220)})()},[t]);const h=(i,l)=>{r(m=>({...m,[i]:l}))},p=(i,l,m)=>{r(n=>({...n,[i]:m?[...Array.isArray(n[i])?n[i]:[],l]:Array.isArray(n[i])?n[i].filter(S=>S!==l):n[i]}))},B=(i,l)=>{const[m,n]=i.split(",");r(S=>({...S,minPrice:m,maxPrice:n}))};return e.jsxs("div",{className:"max-w-[1380px] usb-to-serial-converter-guide pt-12",children:[e.jsx("h1",{className:"text-5xl font-light mb-6 text-[#004280] font-['Montserrat','Microsoft_JhengHei','Heiti_SC','WenQuanYi_Micro_Hei']",children:"USB to Serial Converter"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"filter-options max-w-[280px] w-1/4 pr-4",children:[e.jsx(b,{label:"Upstream USB 2.0 Port",options:["B High Retention","Type B (Female)"],onChange:i=>h("upstreamUSBPort",i),type:"radio",isUnderline:!0}),e.jsx(b,{label:"Serial Standard",options:["RS-232","RS-422","RS-485","RS-4852W","RS-4854W"],onChange:i=>h("serialStandard",i),type:"radio",isUnderline:!0}),e.jsx(b,{label:"Serial Port type",options:["DB9 Female","DB9 Male","Terminal Block"],onChange:(i,l=!1)=>p("serialPortType",i,l),type:"checkbox",isUnderline:!0}),e.jsx(b,{label:"Serial Port Number",options:["1","2","4"],onChange:(i,l=!1)=>p("serialPortNumber",i,l),type:"checkbox",isUnderline:!0}),e.jsx(b,{label:"Mounting",options:["DIN","Panel","In-line"],onChange:(i,l=!1)=>p("mounting",i,l),type:"checkbox",isUnderline:!0}),e.jsx(b,{label:"Protection",options:["Isolation","ESD"],onChange:(i,l=!1)=>p("protection",i,l),type:"checkbox",isUnderline:!0}),e.jsx(b,{label:"USB Communication",options:["Locked Serial Number"],onChange:(i,l=!1)=>p("usbCommunication",i,l),type:"checkbox",isUnderline:!0}),e.jsx(b,{label:"Price Range",type:"priceRange",onChange:B})]}),e.jsx("div",{className:"products-container w-3/4 ",children:e.jsx("div",{className:`grid gap-4 transition-opacity duration-300 ${d?"opacity-100":"opacity-0"}`,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",maxWidth:"100%",justifyContent:"center"},children:o.length>0?o.map((i,l)=>e.jsx("div",{className:"max-w-[240px] w-full",children:e.jsx(N,{product:i,quantity:a[i.sku]??0,onQuantityChange:m=>g(i.sku,m)})},l)):e.jsx("div",{className:"col-span-full text-center text-2xl text-[#B6BFC1] my-8 font-light",children:"抱歉，沒有找到匹配的結果。請調整或探索其他選項"})})})]})]})},L={"B High Retention":"Type B (Female) High Retention","RS-4852W":"RS-485, 2-wire","RS-4854W":"RS-485, 4-wire"},b=({label:t,options:r=[],onChange:o,type:c,isUnderline:a=!1})=>{const d=(n=>n.map(S=>({value:S,display:L[S]||S})))(r),[u,g]=React.useState(""),[h,p]=React.useState(""),[B,i]=React.useState(""),l=n=>S=>{const x=S.target.value;(x===""||/^\d*\.?\d*$/.test(x))&&n(x)},m=()=>{switch(c){case"checkbox":return e.jsx("div",{children:r.map((n,S)=>e.jsxs("div",{className:"gap-1",children:[e.jsx("input",{type:"checkbox",id:`${t}-${n}`,className:"mr-2",onChange:x=>o(n,x.target.checked)}),e.jsx("label",{htmlFor:`${t}-${n}`,className:"text-sm text-[#737B7D]",children:n})]},S))});case"radio":return e.jsxs("div",{className:"flex flex-col flex-wrap gap-1",children:[e.jsxs("label",{className:"inline-flex items-center",children:[e.jsx("input",{type:"radio",className:"form-radio h-4 w-4 text-[#006EFF]",name:t,value:"",checked:u==="",onChange:()=>{g(""),o("")}}),e.jsx("span",{className:"ml-2 text-sm text-[#004280]",children:"All"})]}),d.map((n,S)=>e.jsxs("label",{className:"inline-flex items-center",children:[e.jsx("input",{type:"radio",className:"form-radio h-4 w-4 text-[#006EFF]",name:t,value:n.value,checked:u===n.value,onChange:()=>{g(n.value),o(n.value)}}),e.jsx("span",{className:"ml-2 text-sm text-[#004280] break-words max-w-[200px]",children:n.display})]},S))]});case"priceRange":return e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"number",placeholder:"Minimum",value:h,onChange:l(p),className:"w-1/2 px-2 py-2 border border-gray-300 rounded text-sm",onKeyUp:n=>{n.key==="Enter"&&o(`${h},${B}`)}}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:"text-gray-500",children:"-"})}),e.jsx("input",{type:"number",placeholder:"Maximum",value:B,onChange:l(i),className:"w-1/2 px-2 py-2 border border-gray-300 rounded text-sm",onKeyUp:n=>{n.key==="Enter"&&o(`${h},${B}`)}})]}),e.jsx("button",{className:"w-full px-3 py-2 bg-[#006EFF] text-white rounded text-sm hover:bg-[#0056CC] transition-colors duration-300",onClick:()=>{o(`${h},${B}`)},children:"套用"})]})}};return e.jsxs("div",{className:"filter-option",children:[e.jsx("label",{className:"block font-bold text-sm leading-8 text-[#434447]",children:t}),m(),a&&e.jsx("div",{className:"border-b border-gray-300 py-2"})]})},N=({product:t,quantity:r,onQuantityChange:o})=>{const c=g=>{const h=g.target.value.replace(/^0+/,"").replace(/^-\d*$/,"0");o(h)},a=()=>{o(r===""?0:r)},s=()=>{o(+r+1)},d=()=>{+r>0&&o(+r-1)},u=()=>{const g=parseFloat(t.price.replace("US$",""));return isNaN(g)||r===""?0:g*Number(r)};return e.jsxs("div",{className:"product-card bg-white p-3 flex flex-col items-center rounded hover:shadow-lg hover:-translate-y-1 transition-all duration-300",children:[e.jsxs("div",{onClick:()=>window.open(t.link,"_blank"),className:"cursor-pointer",children:[e.jsx("div",{className:"product-image w-full h-40 relative mb-3 overflow-hidden rounded",children:e.jsx("img",{src:t.imageUrl,alt:t.name,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"product-details w-full",children:[e.jsx("h3",{className:"product-code text-2xl font-bold text-[#0C0C0C] mb-1",children:t.name}),e.jsx("p",{className:"product-sku text-xs font-bold text-[#B6BFC1] mb-1",children:t.sku}),e.jsx("p",{className:"product-description text-sm text-[#737B7D] min-h-16 mb-2",children:t.description}),e.jsx("div",{className:"product-price text-right text-xl font-bold text-[#E57B03]",children:t.price}),e.jsxs("div",{className:"total-price text-right font-bold text-[#004280] text-xs mb-2 w-full",children:["Total: US$",u().toFixed(2)]})]})]}),e.jsxs("div",{className:"quantity-input flex items-center mb-2 w-full",children:[e.jsx("button",{onClick:d,className:"bg-gray-200 px-2 py-[1px] rounded-l",children:"-"}),e.jsx("input",{type:"number",value:r===""?"":r,onChange:c,className:"w-full text-center border-t border-b border-gray-200",onBlur:a,min:"0"}),e.jsx("button",{onClick:s,className:"bg-gray-200 px-2 py-[1px] rounded-r",children:"+"})]}),e.jsx("button",{className:"add-to-cart-button w-full bg-[#F39800] text-white font-bold py-2 px-4 rounded hover:bg-[#E67E00] transition duration-300",children:"Add To Cart"})]})},w=[{name:"ULI-314DC",sku:"BB-USR604",description:"USB to RS-232/422/485 (DB9 Male) Industrial Isolated Converter, 4 Port",upstreamUSBPort:"B High Retention",serialStandard:["RS-232","RS-422","RS-485"],serialPortType:"DB9 Male",serialPortNumber:"4",mounting:"DIN",protection:["ESD","Isolation"],usbCommunication:"",price:"US$530.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wesNAAQ?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-314DC_BB-USR604.png"},{name:"ULI-321D",sku:"BB-232USB9M",description:"USB 2.0 to RS-232 Converter, DB9 Male",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-232",serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$70.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZYr4AAG?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321D_BB-232USB9M.png"},{name:"ULI-321DK",sku:"BB-232USB9M-LS",description:"USB 2.0 to RS-232 Converter, DB9 Male. Locked Serial Number",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-232",serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$75.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZYuIAAW?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321DK_BB-232USB9M-LS.png"},{name:"ULI-321DC",sku:"BB-USO9ML2-A",description:"USB 2.0 to RS-232 Converter, DB9 Male. Isolated",upstreamUSBPort:"B High Retention",serialStandard:"RS-232",serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:["ESD","Isolation"],usbCommunication:"",price:"US$130.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005OsAhQAK?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321DC_BB-USO9ML2-A.png"},{name:"ULI-321DCK",sku:"BB-USO9ML2-LS-A",description:"USB 2.0 to RS-232 Converter, DB9 Male. Isolated. Locked Serial Number",upstreamUSBPort:"B High Retention",serialStandard:"RS-232",serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:["ESD","Isolation"],usbCommunication:"Locked Serial Number",price:"US$140.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005OsAiQAK?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321DCK_BB-USO9ML2-LS-A.png"},{name:"ULI-341TC",sku:"BB-USOPTL4",description:"USB to RS-422/485 (Terminal Block) Isolated Converter",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"Isolation",usbCommunication:"",price:"US$120.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wbzpAAA?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-341TC_BB-USOPTL4.png"},{name:"ULI-341TCK",sku:"BB-USOPTL4-LS",description:"ULI-341TCK - USB to RS-422/485 (Terminal Block) Isolated Converter.",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"Isolation",usbCommunication:"Locked Serial Number",price:"US$120.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZYnnAAG?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-341TCK_BB-USOPTL4-LS.png"},{name:"ULI-341DC",sku:"BB-USO9ML4",description:"USB to RS-422/485 (DB9 Male) Isolated Converter",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"DB9 Male",serialPortNumber:"1",mounting:"In-line",protection:"Isolation",usbCommunication:"",price:"US$130.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wefhAAA?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-341DC_BB-USO9ML4.png"},{name:"ULI-342TC",sku:"BB-USOPTL4DR-2",description:"USB to 2 Port RS422/485 (Terminal Block) Isolated Converter, DIN Rail",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"Terminal Block",serialPortNumber:"2",mounting:"DIN",protection:"Isolation",usbCommunication:"",price:"US$215.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wesMAAQ?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-342TC_BB-USOPTL4DR-274ddc11.png"},{name:"ULI-344TC",sku:"BB-USOPTL4-4P",description:"USB to RS-422/485 (Terminal Block) Isolated Converter",upstreamUSBPort:"B High Retention",serialStandard:["RS-422","RS-485"],serialPortType:"Terminal Block",serialPortNumber:"4",mounting:"Panel",protection:"Isolation",usbCommunication:"",price:"US$360.00",link:"https://www.iotmart.com/s/product/detail/01t28000001E1GHAA0?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-344TC_BB-USOPTL4-4P.png"},{name:"ULI-351D",sku:"BB-485USB9F-4W",description:"USB to RS-485 4 Wire (DB9 Female) Converter",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-4854W",serialPortType:"DB9 Female",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZYqPAAW?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351D_BB-485USB9F-4W.png"},{name:"ULI-351DK",sku:"BB-485USB9F-4W-LS",description:"USB to RS-485 4 Wire (DB9 Female) Converter Locked Serial Number",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-4854W",serialPortType:"DB9 Female",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZZAAAA4?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351DK_BB-485USB9F-4W-LS.png"},{name:"ULI-351T",sku:"BB-485USBTB-4W-A",description:"ULI-351T - USB to RS-485 4 Wire (Terminal Blaock) Converter",upstreamUSBPort:"B High Retention",serialStandard:"RS-4854W",serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005Oq5eQAC?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351T_BB-485USBTB-4W-A.png"},{name:"ULI-351TK",sku:"BB-485USBTB4WLS-A",description:"USB to RS-485 4-W (TB) Converter Locked Serial Number",upstreamUSBPort:"B High Retention",serialStandard:"RS-4854W",serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005Oq5fQAC?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351TK_BB-485USBTB4WLS-A.png"},{name:"ULI-361D",sku:"BB-485USB9F-2W",description:"USB to RS-485 2 Wire (DB9 Female) Converter",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-4852W",serialPortType:"DB9 Female",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t28000000wc21AAA?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361D_BB-485USB9F-2W.png"},{name:"ULI-361DK",sku:"BB-485USB9F-2W-LS",description:"USB to RS-485 2 Wire (DB9 Female) Converter. Locked Serial Number",upstreamUSBPort:"Type B (Female)",serialStandard:"RS-4852W",serialPortType:"DB9 Female",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$95.00",link:"https://www.iotmart.com/s/product/detail/01t28000004ZZ4dAAG?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361DK_BB-485USB9F-2W-LS.png"},{name:"ULI-361T",sku:"BB-485USBTB-2W-A",description:"USB to RS-485 2 Wire (Terminal Block) Converter",upstreamUSBPort:"B High Retention",serialStandard:"RS-4852W",serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"",price:"US$80.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005Oq5cQAC?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361T_BB-485USBTB-2W-A.png"},{name:"ULI-361TK",sku:"BB-485USBTB2WLS-A",description:"USB to RS-485 2 Wire (Terminal Block) Converter. Locked Serial Number",upstreamUSBPort:"B High Retention",serialStandard:"RS-4852W",serialPortType:"Terminal Block",serialPortNumber:"1",mounting:"In-line",protection:"",usbCommunication:"Locked Serial Number",price:"US$90.00",link:"https://www.iotmart.com/s/product/detail/01t0K000005Oq5dQAC?language=en_US",imageUrl:"https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361TK_BB-485USBTB2WLS-A.png"}],j=({image:t,title:r,subtitle:o,route:c})=>e.jsxs(D,{to:c,children:[e.jsx(A,{src:t,alt:r}),e.jsx(_,{children:r}),e.jsx(F,{children:o})]}),D=styled(ReactRouterDOM.NavLink)`
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
`,A=styled.img`
  max-width: 180px;
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`,_=styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  height: 3.5rem;
  width: 10rem;
`,F=styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--second-text-color);
`,O="/assets/webp/SerialRepeaterIsolator-5jVvaE3G.webp",M="/assets/webp/USBtoSerialConverter-MGxD42Nh.webp",W="/assets/webp/SerialtoSerialConverter-CbjAFkr2.webp",$="/assets/webp/USBHubIsolator-Clnhqb4l.webp",K="/assets/webp/SerialtoFiberConverter-sgYBsoKU.webp",E="/assets/webp/SurgeSuppressorDataSplitterTap-D63kX5hM.webp";function H(){const t=ReactRouterDOM.useLocation(),r=ReactRouterDOM.useNavigate(),o=React.useRef(null);return React.useEffect(()=>{t.pathname==="/"&&r("/usb-to-serial-converter")},[]),e.jsx("div",{children:e.jsxs(Z,{children:[e.jsxs(z,{children:[e.jsx(Q,{children:"ULI Series Selection Guide"}),e.jsx(G,{children:"2 Steps for Selecting the Right ULI"}),e.jsx(V,{children:R.map(c=>e.jsx(j,{...c},c.route))})]}),e.jsx(k,{children:e.jsx(v,{nodeRef:o,classNames:"fade",timeout:200,children:e.jsx(Y,{ref:o,children:e.jsx(q,{children:e.jsx(ReactRouterDOM.Routes,{children:R.map(c=>e.jsx(ReactRouterDOM.Route,{path:c.route,element:c.element},c.route))})})})},t.pathname)})]})})}const R=[{image:K,title:"Serial to Fiber Converter",subtitle:"ULI-210",route:"/serial-to-fiber-converter"},{image:W,title:"Serial to Serial Converter",subtitle:"ULI-220",route:"/serial-to-serial-converter"},{image:O,title:"Serial Repeater/Isolator",subtitle:"ULI-230",route:"/serial-repeater-isolator"},{image:E,title:"Surge Suppressor DataSplitter/Tap",subtitle:"ULI-240/250/260",route:"/surge-suppressor-data-splitter-tap"},{image:M,title:"USB to Serial Converter",subtitle:"ULI-300",route:"/usb-to-serial-converter",element:e.jsx(P,{})},{image:$,title:"USB Hub/Isolator",subtitle:"ULI-400",route:"/usb-hub-isolator"}],Q=styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`,G=styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--second-text-color);
`,z=styled.div`
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,q=styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem 1rem;
`,Z=styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
`,Y=styled.div`
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
`,V=styled.div`
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
`;function J(){return ReactRouterDOM.useLocation(),React.useRef(null),ReactRouterDOM.useRoutes([{path:"/",element:e.jsx(H,{}),children:[{path:"serial-to-fiber-converter",element:""},{path:"serial-to-serial-converter",element:""},{path:"serial-repeater-isolator",element:""},{path:"surge-suppressor-data-splitter-tap",element:""},{path:"/usb-to-serial-converter",element:e.jsx(P,{})},{path:"usb-hub-isolator",element:""}]}])}styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;const X=()=>e.jsx(J,{}),ee="modulepreload",te=function(t){return"/"+t},C={},re=function(r,o,c){let a=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.all(o.map(u=>{if(u=te(u),u in C)return;C[u]=!0;const g=u.endsWith(".css"),h=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":ee,g||(p.as="script",p.crossOrigin=""),p.href=u,d&&p.setAttribute("nonce",d),document.head.appendChild(p),g)return new Promise((B,i)=>{p.addEventListener("load",B),p.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${u}`)))})}))}return a.then(()=>r()).catch(s=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s})},ie=t=>{t&&t instanceof Function&&re(()=>import("./web-vitals-BA3w2fPb.js"),[]).then(({getCLS:r,getFID:o,getFCP:c,getLCP:a,getTTFB:s})=>{r(t),o(t),c(t),a(t),s(t)})},f=axios.create({baseURL:"https://lyt-top.gitee.io/vue-next-admin-preview/",timeout:5e4,headers:{"Content-Type":"application/json"},paramsSerializer:{serialize(t){return I.stringify(t,{allowDots:!0})}}});f.interceptors.request.use(t=>t,t=>(console.log("request error:",t),Promise.reject(t)));f.interceptors.response.use(t=>{const r=t.data;return["您没有访问权限！","您还没有登录！"].includes(r.msg),r.code&&r.code!==0?(r.code===401||r.code,r):(r.msg,r)},t=>(t.message.indexOf("timeout")!=-1?console.log("timeout error:"):t.message=="Network Error"?console.log("Network Error:"):console.log("response error:",t.response),Promise.reject(t)));function oe(){return{getBooks:()=>f({url:"/books/list",method:"get"})}}const U=RTK.createAsyncThunk("counter/fetchBooks",async()=>{const t=oe(),{data:r}=await t.getBooks();return r}),ne={books:null,status:"",error:null},se=RTK.createSlice({name:"books",initialState:ne,reducers:{},extraReducers:t=>{t.addCase(U.pending,r=>{r.status="loading"}).addCase(U.fulfilled,(r,o)=>{r.status="succeeded"}).addCase(U.rejected,(r,o)=>{r.status="failed",r.error="error"})}}),ae=se.reducer,le=RTK.configureStore({reducer:{books:ae}}),ce=y.createRoot(document.getElementById("root"));ce.render(e.jsx(React.StrictMode,{children:e.jsx(T,{store:le,children:e.jsx(ReactRouterDOM.BrowserRouter,{children:e.jsx(X,{})})})}));ie(console.log);
