import{g as c}from"./get-intrinsic-BKEvijrG.js";import{f as b}from"./function-bind-BbkWVFrm.js";import{s as h}from"./set-function-length-B5OANX0j.js";import{t as B}from"./es-errors-DzOT6E3C.js";import{r as O}from"./es-define-property-tzmkNPou.js";var F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function I(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function M(t){if(t.__esModule)return t;var r=t.default;if(typeof r=="function"){var e=function n(){return this instanceof n?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var o=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:function(){return t[n]}})}),e}var s={exports:{}};(function(t){var r=b,e=c,n=h,o=B,a=e("%Function.prototype.apply%"),i=e("%Function.prototype.call%"),p=e("%Reflect.apply%",!0)||r.call(i,a),f=O(),v=e("%Math.max%");t.exports=function(l){if(typeof l!="function")throw new o("a function is required");var m=p(r,i,arguments);return n(m,1+v(0,l.length-(arguments.length-1)),!0)};var u=function(){return p(r,a,arguments)};f?f(t.exports,"apply",{value:u}):t.exports.apply=u})(s);var $=s.exports,d=c,y=$,w=y(d("String.prototype.indexOf")),D=function(r,e){var n=d(r,!!e);return typeof n=="function"&&w(r,".prototype.")>-1?y(n):n};export{I as a,D as b,F as c,M as g};
