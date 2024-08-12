import{_ as p}from"./react-DFNuXNLg.js";var y={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=p;function E(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var V=typeof Object.is=="function"?Object.is:E,g=c.useSyncExternalStore,x=c.useRef,j=c.useEffect,O=c.useMemo,R=c.useDebugValue;y.useSyncExternalStoreWithSelector=function(e,n,a,f,o){var u=x(null);if(u.current===null){var t={hasValue:!1,value:null};u.current=t}else t=u.current;u=O(function(){function S(r){if(!d){if(d=!0,s=r,r=f(r),o!==void 0&&t.hasValue){var i=t.value;if(o(i,r))return v=i}return v=r}if(i=v,V(s,r))return i;var _=f(r);return o!==void 0&&o(i,_)?i:(s=r,v=_)}var d=!1,s,v,m=a===void 0?null:a;return[function(){return S(n())},m===null?void 0:function(){return S(m())}]},[n,a,f,o]);var l=g(e,u[0],u[1]);return j(function(){t.hasValue=!0,t.value=l},[l]),R(l),l};
