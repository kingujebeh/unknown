(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Nl=()=>{};var Ii={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xl=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new Ml;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const E=l<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ml extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ll=function(t){const e=Qo(t);return Zo.encodeByteArray(e,!0)},ea=function(t){return Ll(t).replace(/\./g,"")},ta=function(t){try{return Zo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=()=>Ul().__FIREBASE_DEFAULTS__,$l=()=>{if(typeof process>"u"||typeof Ii>"u")return;const t=Ii.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ta(t[1]);return e&&JSON.parse(e)},xs=()=>{try{return Nl()||Fl()||$l()||Bl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hl=t=>xs()?.emulatorHosts?.[t],na=()=>xs()?.config,ra=t=>xs()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jl(t){return(await fetch(t,{credentials:"include"})).ok}const wn={};function Wl(){const t={prod:[],emulator:[]};for(const e of Object.keys(wn))wn[e]?t.emulator.push(e):t.prod.push(e);return t}function zl(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ei=!1;function Kl(t,e){if(typeof window>"u"||typeof document>"u"||!Sr(window.location.host)||wn[t]===e||wn[t]||Ei)return;wn[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=Wl().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,m){p.setAttribute("width","24"),p.setAttribute("id",m),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function l(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Ei=!0,o()},p}function u(p,m){p.setAttribute("id",m),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=zl(r),m=n("text"),E=document.getElementById(m)||document.createElement("span"),R=n("learnmore"),F=document.getElementById(R)||document.createElement("a"),D=n("preprendIcon"),O=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const x=p.element;a(x),u(F,R);const k=l();c(O,D),x.append(O,E,F,k),document.body.appendChild(x)}i?(E.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ql(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function Gl(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sa(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yl(){const t=he();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ia(){try{return typeof indexedDB=="object"}catch{return!1}}function oa(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function Xl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="FirebaseError";class Ge extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ql,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jt.prototype.create)}}class jt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zl(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ge(s,a,r)}}function Zl(t,e){return t.replace(eu,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eu=/\{\$([^}]+)}/g;function tu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ft(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ti(i)&&Ti(o)){if(!Ft(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ti(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nu(t,e){const n=new ru(t,e);return n.subscribe.bind(n)}class ru{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");su(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Hr),s.error===void 0&&(s.error=Hr),s.complete===void 0&&(s.complete=Hr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function su(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=1e3,ou=2,au=14400*1e3,cu=.5;function Si(t,e=iu,n=ou){const r=e*Math.pow(n,t),s=Math.round(cu*r*(Math.random()-.5)*2);return Math.min(au,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return t&&t._delegate?t._delegate:t}class Ke{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fu(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uu(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uu(t){return t===Nt?void 0:t}function fu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const hu={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},pu=X.INFO,gu={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},mu=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gu[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ms{constructor(e){this.name=e,this._logLevel=pu,this._logHandler=mu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const _u=(t,e)=>e.some(n=>t instanceof n);let Ci,Ai;function yu(){return Ci||(Ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bu(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aa=new WeakMap,us=new WeakMap,ca=new WeakMap,Vr=new WeakMap,Ls=new WeakMap;function wu(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ct(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aa.set(n,t)}).catch(()=>{}),Ls.set(e,t),e}function vu(t){if(us.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});us.set(t,e)}let fs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return us.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ca.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Iu(t){fs=t(fs)}function Eu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jr(this),e,...n);return ca.set(r,e.sort?e.sort():[e]),Ct(r)}:bu().includes(t)?function(...e){return t.apply(jr(this),e),Ct(aa.get(this))}:function(...e){return Ct(t.apply(jr(this),e))}}function Tu(t){return typeof t=="function"?Eu(t):(t instanceof IDBTransaction&&vu(t),_u(t,yu())?new Proxy(t,fs):t)}function Ct(t){if(t instanceof IDBRequest)return wu(t);if(Vr.has(t))return Vr.get(t);const e=Tu(t);return e!==t&&(Vr.set(t,e),Ls.set(e,t)),e}const jr=t=>Ls.get(t);function la(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ct(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Su=["get","getKey","getAll","getAllKeys","count"],Cu=["put","add","delete","clear"],Wr=new Map;function Ri(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wr.get(e))return Wr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Cu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Su.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Wr.set(e,i),i}Iu(t=>({...t,get:(e,n,r)=>Ri(e,n)||t.get(e,n,r),has:(e,n)=>!!Ri(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ru(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ru(t){return t.getComponent()?.type==="VERSION"}const ds="@firebase/app",Pi="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Ms("@firebase/app"),Pu="@firebase/app-compat",Ou="@firebase/analytics-compat",ku="@firebase/analytics",Du="@firebase/app-check-compat",Nu="@firebase/app-check",xu="@firebase/auth",Mu="@firebase/auth-compat",Lu="@firebase/database",Uu="@firebase/data-connect",Fu="@firebase/database-compat",$u="@firebase/functions",Bu="@firebase/functions-compat",Hu="@firebase/installations",Vu="@firebase/installations-compat",ju="@firebase/messaging",Wu="@firebase/messaging-compat",zu="@firebase/performance",Ku="@firebase/performance-compat",qu="@firebase/remote-config",Gu="@firebase/remote-config-compat",Ju="@firebase/storage",Yu="@firebase/storage-compat",Xu="@firebase/firestore",Qu="@firebase/ai",Zu="@firebase/firestore-compat",ef="firebase",tf="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]",nf={[ds]:"fire-core",[Pu]:"fire-core-compat",[ku]:"fire-analytics",[Ou]:"fire-analytics-compat",[Nu]:"fire-app-check",[Du]:"fire-app-check-compat",[xu]:"fire-auth",[Mu]:"fire-auth-compat",[Lu]:"fire-rtdb",[Uu]:"fire-data-connect",[Fu]:"fire-rtdb-compat",[$u]:"fire-fn",[Bu]:"fire-fn-compat",[Hu]:"fire-iid",[Vu]:"fire-iid-compat",[ju]:"fire-fcm",[Wu]:"fire-fcm-compat",[zu]:"fire-perf",[Ku]:"fire-perf-compat",[qu]:"fire-rc",[Gu]:"fire-rc-compat",[Ju]:"fire-gcs",[Yu]:"fire-gcs-compat",[Xu]:"fire-fst",[Zu]:"fire-fst-compat",[Qu]:"fire-vertex","fire-js":"fire-js",[ef]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Map,rf=new Map,ps=new Map;function Oi(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ot(t){const e=t.name;if(ps.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;ps.set(e,t);for(const n of ur.values())Oi(n,t);for(const n of rf.values())Oi(n,t);return!0}function dn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function et(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new jt("app","Firebase",sf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=tf;function ua(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:hs,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw At.create("bad-app-name",{appName:String(s)});if(n||(n=na()),!n)throw At.create("no-options");const i=ur.get(s);if(i){if(Ft(n,i.options)&&Ft(r,i.config))return i;throw At.create("duplicate-app",{appName:s})}const o=new du(s);for(const c of ps.values())o.addComponent(c);const a=new of(n,r,o);return ur.set(s,a),a}function fa(t=hs){const e=ur.get(t);if(!e&&t===hs&&na())return ua();if(!e)throw At.create("no-app",{appName:t});return e}function Ve(t,e,n){let r=nf[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(o.join(" "));return}ot(new Ke(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="firebase-heartbeat-database",cf=1,Nn="firebase-heartbeat-store";let zr=null;function da(){return zr||(zr=la(af,cf,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Nn)}catch(n){console.warn(n)}}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),zr}async function lf(t){try{const n=(await da()).transaction(Nn),r=await n.objectStore(Nn).get(ha(t));return await n.done,r}catch(e){if(e instanceof Ge)it.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e?.message});it.warn(n.message)}}}async function ki(t,e){try{const r=(await da()).transaction(Nn,"readwrite");await r.objectStore(Nn).put(e,ha(t)),await r.done}catch(n){if(n instanceof Ge)it.warn(n.message);else{const r=At.create("idb-set",{originalErrorMessage:n?.message});it.warn(r.message)}}}function ha(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=1024,ff=30;class df{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Di();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>ff){const s=gf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){it.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Di(),{heartbeatsToSend:n,unsentEntries:r}=hf(this._heartbeatsCache.heartbeats),s=ea(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return it.warn(e),""}}}function Di(){return new Date().toISOString().substring(0,10)}function hf(t,e=uf){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ni(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ni(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ia()?oa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lf(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ki(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ki(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ni(t){return ea(JSON.stringify({version:2,heartbeats:t})).length}function gf(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){ot(new Ke("platform-logger",e=>new Au(e),"PRIVATE")),ot(new Ke("heartbeat",e=>new df(e),"PRIVATE")),Ve(ds,Pi,t),Ve(ds,Pi,"esm2020"),Ve("fire-js","")}mf("");var _f="firebase",yf="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve(_f,yf,"app");function pa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bf=pa,ga=new jt("auth","Firebase",pa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Ms("@firebase/auth");function wf(t,...e){fr.logLevel<=X.WARN&&fr.warn(`Auth (${jn}): ${t}`,...e)}function tr(t,...e){fr.logLevel<=X.ERROR&&fr.error(`Auth (${jn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,...e){throw Us(t,...e)}function je(t,...e){return Us(t,...e)}function ma(t,e,n){const r={...bf(),[e]:n};return new jt("auth","Firebase",r).create(e,{appName:t.name})}function Lt(t){return ma(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Us(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ga.create(t,...e)}function U(t,e,...n){if(!t)throw Us(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function ct(t,e){t||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(){return typeof self<"u"&&self.location?.href||""}function vf(){return xi()==="http:"||xi()==="https:"}function xi(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vf()||sa()||"connection"in navigator)?navigator.onLine:!0}function Ef(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=ql()||Jl()}get(){return If()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cf=new Wn(3e4,6e4);function $s(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function hn(t,e,n,r,s={}){return ya(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vn({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return Gl()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&Sr(t.emulatorConfig.host)&&(l.credentials="include"),_a.fetch()(await ba(t,t.config.apiHost,n,a),l)})}async function ya(t,e,n){t._canInitEmulator=!1;const r={...Tf,...e};try{const s=new Rf(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Yn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Yn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ma(t,u,l);at(t,u)}}catch(s){if(s instanceof Ge)throw s;at(t,"network-request-failed",{message:String(s)})}}async function Af(t,e,n,r,s={}){const i=await hn(t,e,n,r,s);return"mfaPendingCredential"in i&&at(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ba(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Fs(t.config,s):`${t.config.apiScheme}://${s}`;return Sf.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Rf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),Cf.get())})}}function Yn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=je(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pf(t,e){return hn(t,"POST","/v1/accounts:delete",e)}async function dr(t,e){return hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Of(t,e=!1){const n=ft(t),r=await n.getIdToken(e),s=Bs(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:vn(Kr(s.auth_time)),issuedAtTime:vn(Kr(s.iat)),expirationTime:vn(Kr(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Kr(t){return Number(t)*1e3}function Bs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ta(n);return s?JSON.parse(s):(tr("Failed to decode base64 JWT payload"),null)}catch(s){return tr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Mi(t){const e=Bs(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ge&&kf(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vn(this.lastLoginAt),this.creationTime=vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t){const e=t.auth,n=await t.getIdToken(),r=await xn(t,dr(e,{idToken:n}));U(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?wa(s.providerUserInfo):[],o=xf(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ms(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function Nf(t){const e=ft(t);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xf(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wa(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(t,e){const n=await ya(t,{},async()=>{const r=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ba(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&Sr(t.emulatorConfig.host)&&(c.credentials="include"),_a.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lf(t,e){return hn(t,"POST","/v2/accounts:revokeToken",$s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Mi(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Mf(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qt;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qt,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ae{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Df(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ms(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Of(this,e)}reload(){return Nf(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ae({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await xn(this,Pf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:m,providerData:E,stsTokenManager:R}=n;U(d&&R,e,"internal-error");const F=Qt.fromJSON(this.name,R);U(typeof d=="string",e,"internal-error"),mt(r,e.name),mt(s,e.name),U(typeof p=="boolean",e,"internal-error"),U(typeof m=="boolean",e,"internal-error"),mt(i,e.name),mt(o,e.name),mt(a,e.name),mt(c,e.name),mt(l,e.name),mt(u,e.name);const D=new Ae({uid:d,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:F,createdAt:l,lastLoginAt:u});return E&&Array.isArray(E)&&(D.providerData=E.map(O=>({...O}))),c&&(D._redirectEventId=c),D}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qt;s.updateFromServerResponse(n);const i=new Ae({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?wa(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Qt;a.updateFromIdToken(r);const c=new Ae({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ms(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new Map;function rt(t){ct(t instanceof Function,"Expected a class definition");let e=Li.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Li.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}va.type="NONE";const Ui=va;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Zt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=nr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dr(this.auth,{idToken:e}).catch(()=>{});return n?Ae._fromGetAccountInfoResponse(this.auth,n,e):null}return Ae._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zt(rt(Ui),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rt(Ui);const o=nr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let d;if(typeof u=="string"){const p=await dr(e,{idToken:u}).catch(()=>{});if(!p)break;d=await Ae._fromGetAccountInfoResponse(e,p,u)}else d=Ae._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Zt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ia(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Aa(e))return"Blackberry";if(Ra(e))return"Webos";if(Ea(e))return"Safari";if((e.includes("chrome/")||Ta(e))&&!e.includes("edge/"))return"Chrome";if(Ca(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Ia(t=he()){return/firefox\//i.test(t)}function Ea(t=he()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ta(t=he()){return/crios\//i.test(t)}function Sa(t=he()){return/iemobile/i.test(t)}function Ca(t=he()){return/android/i.test(t)}function Aa(t=he()){return/blackberry/i.test(t)}function Ra(t=he()){return/webos/i.test(t)}function Hs(t=he()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Uf(t=he()){return Hs(t)&&!!window.navigator?.standalone}function Ff(){return Yl()&&document.documentMode===10}function Pa(t=he()){return Hs(t)||Ca(t)||Ra(t)||Aa(t)||/windows phone/i.test(t)||Sa(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e=[]){let n;switch(t){case"Browser":n=Fi(he());break;case"Worker":n=`${Fi(he())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(t,e={}){return hn(t,"GET","/v2/passwordPolicy",$s(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=6;class Vf{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Hf,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $i(this),this.idTokenSubscription=new $i(this),this.beforeStateQueue=new $f(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ga,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Zt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dr(this,{idToken:e}),r=await Ae._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(et(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ef()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(Lt(this));const n=e?ft(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bf(this),n=new Vf(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Lf(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Zt.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&wf(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Vs(t){return ft(t)}class $i{constructor(e){this.auth=e,this.observer=null,this.addObserver=nu(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wf(t){js=t}function zf(t){return js.loadJS(t)}function Kf(){return js.gapiScript}function qf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e){const n=dn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ft(i,e??{}))return s;at(s,"already-initialized")}return n.initialize({options:e})}function Jf(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(rt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Yf(t,e,n){const r=Vs(t);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ka(e),{host:o,port:a}=Xf(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(Ft(l,r.config.emulator)&&Ft(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Sr(o)?(jl(`${i}//${o}${c}`),Kl("Auth",!0)):Qf()}function ka(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Xf(t){const e=ka(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bi(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Bi(o)}}}function Bi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qf(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(t,e){return Af(t,"POST","/v1/accounts:signInWithIdp",$s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="http://localhost";class $t extends Da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):at("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new $t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return en(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,en(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,en(e,n)}buildRequest(){const e={requestUri:Zf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Na{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends zn{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends zn{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends zn{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ae._fromIdTokenResponse(e,r,s),o=Hi(r);return new an({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Hi(r);return new an({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Hi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ge{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pr(e,n,r,s)}}function xa(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pr._fromErrorAndOperation(t,i,e,r):i})}async function ed(t,e,n=!1){const r=await xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return an._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(t,e,n=!1){const{auth:r}=t;if(et(r.app))return Promise.reject(Lt(r));const s="reauthenticate";try{const i=await xn(t,xa(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=Bs(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),an._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&at(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(t,e,n=!1){if(et(t.app))return Promise.reject(Lt(t));const r="signIn",s=await xa(t,r,e),i=await an._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function rd(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function sd(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function id(t,e,n,r){return ft(t).onAuthStateChanged(e,n,r)}const gr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gr,"1"),this.storage.removeItem(gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=1e3,ad=10;class La extends Ma{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ff()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ad):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},od)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}La.type="LOCAL";const cd=La;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Ma{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ua.type="SESSION";const Fa=Ua;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await ld(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ws("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return window}function fd(t){We().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function dd(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hd(){return navigator?.serviceWorker?.controller||null}function pd(){return $a()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="firebaseLocalStorageDb",gd=1,mr="firebaseLocalStorage",Ha="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ar(t,e){return t.transaction([mr],e?"readwrite":"readonly").objectStore(mr)}function md(){const t=indexedDB.deleteDatabase(Ba);return new Kn(t).toPromise()}function _s(){const t=indexedDB.open(Ba,gd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mr,{keyPath:Ha})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mr)?e(r):(r.close(),await md(),e(await _s()))})})}async function Vi(t,e,n){const r=Ar(t,!0).put({[Ha]:e,value:n});return new Kn(r).toPromise()}async function _d(t,e){const n=Ar(t,!1).get(e),r=await new Kn(n).toPromise();return r===void 0?null:r.value}function ji(t,e){const n=Ar(t,!0).delete(e);return new Kn(n).toPromise()}const yd=800,bd=3;class Va{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _s(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bd)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $a()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cr._getInstance(pd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await dd(),!this.activeServiceWorker)return;this.sender=new ud(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _s();return await Vi(e,gr,"1"),await ji(e,gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_d(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ji(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ar(s,!1).getAll();return new Kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Va.type="LOCAL";const wd=Va;new Wn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t,e){return e?rt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return en(e,this._buildIdpRequest())}_linkToIdToken(e,n){return en(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return en(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Id(t){return nd(t.auth,new zs(t),t.bypassAuthState)}function Ed(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),td(n,new zs(t),t.bypassAuthState)}async function Td(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),ed(n,new zs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Id;case"linkViaPopup":case"linkViaRedirect":return Td;case"reauthViaPopup":case"reauthViaRedirect":return Ed;default:at(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=new Wn(2e3,1e4);class Xt extends ja{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=Ws();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sd.get())};e()}}Xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="pendingRedirect",rr=new Map;class Ad extends ja{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const r=await Rd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rd(t,e){const n=kd(e),r=Od(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Pd(t,e){rr.set(t._key(),e)}function Od(t){return rt(t._redirectPersistence)}function kd(t){return nr(Cd,t.config.apiKey,t.name)}async function Dd(t,e,n=!1){if(et(t.app))return Promise.reject(Lt(t));const r=Vs(t),s=vd(r,e),o=await new Ad(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=600*1e3;class xd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Md(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Wa(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(je(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nd&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wi(e))}saveEventToCache(e){this.cachedEventUids.add(Wi(e)),this.lastProcessedEventTime=Date.now()}}function Wi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wa({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Md(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wa(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ld(t,e={}){return hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fd=/^https?/;async function $d(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ld(t);for(const n of e)try{if(Bd(n))return}catch{}at(t,"unauthorized-domain")}function Bd(t){const e=gs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fd.test(n))return!1;if(Ud.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=new Wn(3e4,6e4);function zi(){const t=We().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vd(t){return new Promise((e,n)=>{function r(){zi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zi(),n(je(t,"network-request-failed"))},timeout:Hd.get()})}if(We().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(We().gapi?.load)r();else{const s=qf("iframefcb");return We()[s]=()=>{gapi.load?r():n(je(t,"network-request-failed"))},zf(`${Kf()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw sr=null,e})}let sr=null;function jd(t){return sr=sr||Vd(t),sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Wn(5e3,15e3),zd="__/auth/iframe",Kd="emulator/auth/iframe",qd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jd(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fs(e,Kd):`https://${t.config.authDomain}/${zd}`,r={apiKey:e.apiKey,appName:t.name,v:jn},s=Gd.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vn(r).slice(1)}`}async function Yd(t){const e=await jd(t),n=We().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Jd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qd,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),a=We().setTimeout(()=>{i(o)},Wd.get());function c(){We().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qd=500,Zd=600,eh="_blank",th="http://localhost";class Ki{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nh(t,e,n,r=Qd,s=Zd){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...Xd,width:r.toString(),height:s.toString(),top:i,left:o},l=he().toLowerCase();n&&(a=Ta(l)?eh:n),Ia(l)&&(e=e||th,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,E])=>`${p}${m}=${E},`,"");if(Uf(l)&&a!=="_self")return rh(e||"",a),new Ki(null);const d=window.open(e||"",a,u);U(d,t,"popup-blocked");try{d.focus()}catch{}return new Ki(d)}function rh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="__/auth/handler",ih="emulator/auth/handler",oh=encodeURIComponent("fac");async function qi(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jn,eventId:s};if(e instanceof Na){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof zn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${oh}=${encodeURIComponent(c)}`:"";return`${ah(t)}?${Vn(a).slice(1)}${l}`}function ah({config:t}){return t.emulator?Fs(t,ih):`https://${t.authDomain}/${sh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="webStorageSupport";class ch{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fa,this._completeRedirectFn=Dd,this._overrideRedirectResult=Pd}async _openPopup(e,n,r,s){ct(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await qi(e,n,r,gs(),s);return nh(e,i,Ws())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qi(e,n,r,gs(),s);return fd(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Yd(e),r=new xd(e);return n.register("authEvent",s=>(U(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qr,{type:qr},s=>{const i=s?.[0]?.[qr];i!==void 0&&n(!!i),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$d(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pa()||Ea()||Hs()}}const lh=ch;var Gi="@firebase/auth",Ji="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dh(t){ot(new Ke("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oa(t)},l=new jf(r,s,i,c);return Jf(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ot(new Ke("auth-internal",e=>{const n=Vs(e.getProvider("auth").getImmediate());return(r=>new uh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(Gi,Ji,fh(t)),Ve(Gi,Ji,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=300,ph=ra("authIdTokenMaxAge")||hh;let Yi=null;const gh=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ph)return;const s=n?.token;Yi!==s&&(Yi=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mh(t=fa()){const e=dn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gf(t,{popupRedirectResolver:lh,persistence:[wd,cd,Fa]}),r=ra("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gh(i.toString());sd(n,o,()=>o(n.currentUser)),rd(n,a=>o(a))}}const s=Hl("auth");return s&&Yf(n,`http://${s}`),n}function _h(){return document.getElementsByTagName("head")?.[0]??document}Wf({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_h().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dh("Browser");const za="@firebase/installations",Ks="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=1e4,qa=`w:${Ks}`,Ga="FIS_v2",yh="https://firebaseinstallations.googleapis.com/v1",bh=3600*1e3,wh="installations",vh="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bt=new jt(wh,vh,Ih);function Ja(t){return t instanceof Ge&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya({projectId:t}){return`${yh}/projects/${t}/installations`}function Xa(t){return{token:t.token,requestStatus:2,expiresIn:Th(t.expiresIn),creationTime:Date.now()}}async function Qa(t,e){const r=(await e.json()).error;return Bt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Za({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Eh(t,{refreshToken:e}){const n=Za(t);return n.append("Authorization",Sh(e)),n}async function ec(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Th(t){return Number(t.replace("s","000"))}function Sh(t){return`${Ga} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ya(t),s=Za(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Ga,appId:t.appId,sdkVersion:qa},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await ec(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Xa(l.authToken)}}else throw await Qa("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=/^[cdef][\w-]{21}$/,ys="";function Ph(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Oh(t);return Rh.test(n)?n:ys}catch{return ys}}function Oh(t){return Ah(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Map;function rc(t,e){const n=Rr(t);sc(n,e),kh(n,e)}function sc(t,e){const n=nc.get(t);if(n)for(const r of n)r(e)}function kh(t,e){const n=Dh();n&&n.postMessage({key:t,fid:e}),Nh()}let Mt=null;function Dh(){return!Mt&&"BroadcastChannel"in self&&(Mt=new BroadcastChannel("[Firebase] FID Change"),Mt.onmessage=t=>{sc(t.data.key,t.data.fid)}),Mt}function Nh(){nc.size===0&&Mt&&(Mt.close(),Mt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="firebase-installations-database",Mh=1,Ht="firebase-installations-store";let Gr=null;function qs(){return Gr||(Gr=la(xh,Mh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ht)}}})),Gr}async function _r(t,e){const n=Rr(t),s=(await qs()).transaction(Ht,"readwrite"),i=s.objectStore(Ht),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&rc(t,e.fid),e}async function ic(t){const e=Rr(t),r=(await qs()).transaction(Ht,"readwrite");await r.objectStore(Ht).delete(e),await r.done}async function Pr(t,e){const n=Rr(t),s=(await qs()).transaction(Ht,"readwrite"),i=s.objectStore(Ht),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&rc(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t){let e;const n=await Pr(t.appConfig,r=>{const s=Lh(r),i=Uh(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ys?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Lh(t){const e=t||{fid:Ph(),registrationStatus:0};return oc(e)}function Uh(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Bt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Fh(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$h(t)}:{installationEntry:e}}async function Fh(t,e){try{const n=await Ch(t,e);return _r(t.appConfig,n)}catch(n){throw Ja(n)&&n.customData.serverCode===409?await ic(t.appConfig):await _r(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $h(t){let e=await Xi(t.appConfig);for(;e.registrationStatus===1;)await tc(100),e=await Xi(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Gs(t);return r||n}return e}function Xi(t){return Pr(t,e=>{if(!e)throw Bt.create("installation-not-found");return oc(e)})}function oc(t){return Bh(t)?{fid:t.fid,registrationStatus:0}:t}function Bh(t){return t.registrationStatus===1&&t.registrationTime+Ka<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh({appConfig:t,heartbeatServiceProvider:e},n){const r=Vh(t,n),s=Eh(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:qa,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await ec(()=>fetch(r,a));if(c.ok){const l=await c.json();return Xa(l)}else throw await Qa("Generate Auth Token",c)}function Vh(t,{fid:e}){return`${Ya(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e=!1){let n;const r=await Pr(t.appConfig,i=>{if(!ac(i))throw Bt.create("not-registered");const o=i.authToken;if(!e&&zh(o))return i;if(o.requestStatus===1)return n=jh(t,e),i;{if(!navigator.onLine)throw Bt.create("app-offline");const a=qh(i);return n=Wh(t,a),a}});return n?await n:r.authToken}async function jh(t,e){let n=await Qi(t.appConfig);for(;n.authToken.requestStatus===1;)await tc(100),n=await Qi(t.appConfig);const r=n.authToken;return r.requestStatus===0?Js(t,e):r}function Qi(t){return Pr(t,e=>{if(!ac(e))throw Bt.create("not-registered");const n=e.authToken;return Gh(n)?{...e,authToken:{requestStatus:0}}:e})}async function Wh(t,e){try{const n=await Hh(t,e),r={...e,authToken:n};return await _r(t.appConfig,r),n}catch(n){if(Ja(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ic(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await _r(t.appConfig,r)}throw n}}function ac(t){return t!==void 0&&t.registrationStatus===2}function zh(t){return t.requestStatus===2&&!Kh(t)}function Kh(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+bh}function qh(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Gh(t){return t.requestStatus===1&&t.requestTime+Ka<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(t){const e=t,{installationEntry:n,registrationPromise:r}=await Gs(e);return r?r.catch(console.error):Js(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t,e=!1){const n=t;return await Xh(n),(await Js(n,e)).token}async function Xh(t){const{registrationPromise:e}=await Gs(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){if(!t||!t.options)throw Jr("App Configuration");if(!t.name)throw Jr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Jr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Jr(t){return Bt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="installations",Zh="installations-internal",ep=t=>{const e=t.getProvider("app").getImmediate(),n=Qh(e),r=dn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tp=t=>{const e=t.getProvider("app").getImmediate(),n=dn(e,cc).getImmediate();return{getId:()=>Jh(n),getToken:s=>Yh(n,s)}};function np(){ot(new Ke(cc,ep,"PUBLIC")),ot(new Ke(Zh,tp,"PRIVATE"))}np();Ve(za,Ks);Ve(za,Ks,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="analytics",rp="firebase_id",sp="origin",ip=60*1e3,op="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ys="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Ms("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ee=new jt("analytics","Analytics",ap);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){if(!t.startsWith(Ys)){const e=Ee.create("invalid-gtag-resource",{gtagURL:t});return ye.warn(e.message),""}return t}function lc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function lp(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function up(t,e){const n=lp("firebase-js-sdk-policy",{createScriptURL:cp}),r=document.createElement("script"),s=`${Ys}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function fp(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dp(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await lc(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){ye.error(a)}t("config",s,i)}async function hp(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await lc(n);for(const c of o){const l=a.find(d=>d.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ye.error(i)}}function pp(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await hp(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await dp(t,e,n,r,a,c)}else if(i==="consent"){const[a,c]=o;t("consent",a,c)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){ye.error(a)}}return s}function gp(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=pp(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function mp(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ys)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=30,yp=1e3;class bp{constructor(e={},n=yp){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uc=new bp;function wp(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function vp(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:wp(n)},s=op.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw Ee.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function Ip(t,e=uc,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ee.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ee.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Sp;return setTimeout(async()=>{a.abort()},ip),fc({appId:r,apiKey:s,measurementId:i},o,a,e)}async function fc(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=uc){const{appId:i,measurementId:o}=t;try{await Ep(r,e)}catch(a){if(o)return ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await vp(t);return s.deleteThrottleMetadata(i),a}catch(a){const c=a;if(!Tp(c)){if(s.deleteThrottleMetadata(i),o)return ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw a}const l=Number(c?.customData?.httpStatus)===503?Si(n,s.intervalMillis,_p):Si(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),ye.debug(`Calling attemptFetch again in ${l} millis`),fc(t,u,r,s)}}function Ep(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ee.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Tp(t){if(!(t instanceof Ge)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Sp{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Cp(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(){if(ia())try{await oa()}catch(t){return ye.warn(Ee.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return ye.warn(Ee.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Rp(t,e,n,r,s,i,o){const a=Ip(t);a.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&ye.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>ye.error(p)),e.push(a);const c=Ap().then(p=>{if(p)return r.getId()}),[l,u]=await Promise.all([a,c]);mp(i)||up(i,l.measurementId),s("js",new Date);const d=o?.config??{};return d[sp]="firebase",d.update=!0,u!=null&&(d[rp]=u),s("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.app=e}_delete(){return delete In[this.app.options.appId],Promise.resolve()}}let In={},Zi=[];const eo={};let Yr="dataLayer",Op="gtag",to,dc,no=!1;function kp(){const t=[];if(sa()&&t.push("This is a browser extension environment."),Xl()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ee.create("invalid-analytics-context",{errorInfo:e});ye.warn(n.message)}}function Dp(t,e,n){kp();const r=t.options.appId;if(!r)throw Ee.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ee.create("no-api-key");if(In[r]!=null)throw Ee.create("already-exists",{id:r});if(!no){fp(Yr);const{wrappedGtag:i,gtagCore:o}=gp(In,Zi,eo,Yr,Op);dc=i,to=o,no=!0}return In[r]=Rp(t,Zi,eo,e,to,Yr,n),new Pp(t)}function Np(t=fa()){t=ft(t);const e=dn(t,yr);return e.isInitialized()?e.getImmediate():xp(t)}function xp(t,e={}){const n=dn(t,yr);if(n.isInitialized()){const s=n.getImmediate();if(Ft(e,n.getOptions()))return s;throw Ee.create("already-initialized")}return n.initialize({options:e})}function Mp(t,e,n,r){t=ft(t),Cp(dc,In[t.app.options.appId],e,n,r).catch(s=>ye.error(s))}const ro="@firebase/analytics",so="0.10.18";function Lp(){ot(new Ke(yr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Dp(r,s,n)},"PUBLIC")),ot(new Ke("analytics-internal",t,"PRIVATE")),Ve(ro,so),Ve(ro,so,"esm2020");function t(e){try{const n=e.getProvider(yr).getImmediate();return{logEvent:(r,s,i)=>Mp(n,r,s,i)}}catch(n){throw Ee.create("interop-component-reg-failed",{reason:n})}}}Lp();const Up={apiKey:"AIzaSyC4Ge5BojUJkC4_kvSkj9a4johP4tOd7RA",authDomain:"great-unknown.firebaseapp.com",projectId:"great-unknown",storageBucket:"great-unknown.firebasestorage.app",messagingSenderId:"199011519338",appId:"1:199011519338:web:86c235a1af6ac6e0b8f313",measurementId:"G-JDQ21T5BBY"},hc=ua(Up);Np(hc);const Fp=mh(hc);/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xs(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ee={},tn=[],ze=()=>{},$p=()=>!1,Or=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qs=t=>t.startsWith("onUpdate:"),le=Object.assign,Zs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bp=Object.prototype.hasOwnProperty,K=(t,e)=>Bp.call(t,e),B=Array.isArray,nn=t=>kr(t)==="[object Map]",pc=t=>kr(t)==="[object Set]",H=t=>typeof t=="function",re=t=>typeof t=="string",Pt=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",gc=t=>(ne(t)||H(t))&&H(t.then)&&H(t.catch),mc=Object.prototype.toString,kr=t=>mc.call(t),Hp=t=>kr(t).slice(8,-1),_c=t=>kr(t)==="[object Object]",ei=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,En=Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vp=/-(\w)/g,Se=Dr(t=>t.replace(Vp,(e,n)=>n?n.toUpperCase():"")),jp=/\B([A-Z])/g,Wt=Dr(t=>t.replace(jp,"-$1").toLowerCase()),Nr=Dr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xr=Dr(t=>t?`on${Nr(t)}`:""),Rt=(t,e)=>!Object.is(t,e),Qr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},bs=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Wp=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let io;const xr=()=>io||(io=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ti(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=re(r)?Gp(r):ti(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(re(t)||ne(t))return t}const zp=/;(?![^(]*\))/g,Kp=/:([^]+)/,qp=/\/\*[^]*?\*\//g;function Gp(t){const e={};return t.replace(qp,"").split(zp).forEach(n=>{if(n){const r=n.split(Kp);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ni(t){let e="";if(re(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=ni(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yp=Xs(Jp);function yc(t){return!!t||t===""}const bc=t=>!!(t&&t.__v_isRef===!0),Xp=t=>re(t)?t:t==null?"":B(t)||ne(t)&&(t.toString===mc||!H(t.toString))?bc(t)?Xp(t.value):JSON.stringify(t,wc,2):String(t),wc=(t,e)=>bc(e)?wc(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Zr(r,i)+" =>"]=s,n),{})}:pc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Zr(n))}:Pt(e)?Zr(e):ne(e)&&!B(e)&&!_c(e)?String(e):e,Zr=(t,e="")=>{var n;return Pt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _e;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_e,!e&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_e;try{return _e=this,e()}finally{_e=n}}}on(){++this._on===1&&(this.prevScope=_e,_e=this)}off(){this._on>0&&--this._on===0&&(_e=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zp(){return _e}let Z;const es=new WeakSet;class vc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_e&&_e.active&&_e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,es.has(this)&&(es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ec(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oo(this),Tc(this);const e=Z,n=Pe;Z=this,Pe=!0;try{return this.fn()}finally{Sc(this),Z=e,Pe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ii(e);this.deps=this.depsTail=void 0,oo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ws(this)&&this.run()}get dirty(){return ws(this)}}let Ic=0,Tn,Sn;function Ec(t,e=!1){if(t.flags|=8,e){t.next=Sn,Sn=t;return}t.next=Tn,Tn=t}function ri(){Ic++}function si(){if(--Ic>0)return;if(Sn){let e=Sn;for(Sn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Tn;){let e=Tn;for(Tn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Tc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ii(r),eg(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ws(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Cc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mn)||(t.globalVersion=Mn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ws(t))))return;t.flags|=2;const e=t.dep,n=Z,r=Pe;Z=t,Pe=!0;try{Tc(t);const s=t.fn(t._value);(e.version===0||Rt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Z=n,Pe=r,Sc(t),t.flags&=-3}}function ii(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ii(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function eg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pe=!0;const Ac=[];function lt(){Ac.push(Pe),Pe=!1}function ut(){const t=Ac.pop();Pe=t===void 0?!0:t}function oo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Z;Z=void 0;try{e()}finally{Z=n}}}let Mn=0;class tg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Z||!Pe||Z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Z)n=this.activeLink=new tg(Z,this),Z.deps?(n.prevDep=Z.depsTail,Z.depsTail.nextDep=n,Z.depsTail=n):Z.deps=Z.depsTail=n,Rc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Z.depsTail,n.nextDep=void 0,Z.depsTail.nextDep=n,Z.depsTail=n,Z.deps===n&&(Z.deps=r)}return n}trigger(e){this.version++,Mn++,this.notify(e)}notify(e){ri();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{si()}}}function Rc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Rc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vs=new WeakMap,Ut=Symbol(""),Is=Symbol(""),Ln=Symbol("");function oe(t,e,n){if(Pe&&Z){let r=vs.get(t);r||vs.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new oi),s.map=r,s.key=n),s.track()}}function tt(t,e,n,r,s,i){const o=vs.get(t);if(!o){Mn++;return}const a=c=>{c&&c.trigger()};if(ri(),e==="clear")o.forEach(a);else{const c=B(t),l=c&&ei(n);if(c&&n==="length"){const u=Number(r);o.forEach((d,p)=>{(p==="length"||p===Ln||!Pt(p)&&p>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Ln)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ut)),nn(t)&&a(o.get(Is)));break;case"delete":c||(a(o.get(Ut)),nn(t)&&a(o.get(Is)));break;case"set":nn(t)&&a(o.get(Ut));break}}si()}function Gt(t){const e=z(t);return e===t?e:(oe(e,"iterate",Ln),Oe(t)?e:e.map(fe))}function ai(t){return oe(t=z(t),"iterate",Ln),t}const ng={__proto__:null,[Symbol.iterator](){return ts(this,Symbol.iterator,fe)},concat(...t){return Gt(this).concat(...t.map(e=>B(e)?Gt(e):e))},entries(){return ts(this,"entries",t=>(t[1]=fe(t[1]),t))},every(t,e){return Ye(this,"every",t,e,void 0,arguments)},filter(t,e){return Ye(this,"filter",t,e,n=>n.map(fe),arguments)},find(t,e){return Ye(this,"find",t,e,fe,arguments)},findIndex(t,e){return Ye(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ye(this,"findLast",t,e,fe,arguments)},findLastIndex(t,e){return Ye(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ye(this,"forEach",t,e,void 0,arguments)},includes(...t){return ns(this,"includes",t)},indexOf(...t){return ns(this,"indexOf",t)},join(t){return Gt(this).join(t)},lastIndexOf(...t){return ns(this,"lastIndexOf",t)},map(t,e){return Ye(this,"map",t,e,void 0,arguments)},pop(){return mn(this,"pop")},push(...t){return mn(this,"push",t)},reduce(t,...e){return ao(this,"reduce",t,e)},reduceRight(t,...e){return ao(this,"reduceRight",t,e)},shift(){return mn(this,"shift")},some(t,e){return Ye(this,"some",t,e,void 0,arguments)},splice(...t){return mn(this,"splice",t)},toReversed(){return Gt(this).toReversed()},toSorted(t){return Gt(this).toSorted(t)},toSpliced(...t){return Gt(this).toSpliced(...t)},unshift(...t){return mn(this,"unshift",t)},values(){return ts(this,"values",fe)}};function ts(t,e,n){const r=ai(t),s=r[e]();return r!==t&&!Oe(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const rg=Array.prototype;function Ye(t,e,n,r,s,i){const o=ai(t),a=o!==t&&!Oe(t),c=o[e];if(c!==rg[e]){const d=c.apply(t,i);return a?fe(d):d}let l=n;o!==t&&(a?l=function(d,p){return n.call(this,fe(d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function ao(t,e,n,r){const s=ai(t);let i=n;return s!==t&&(Oe(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,fe(a),c,t)}),s[e](i,...r)}function ns(t,e,n){const r=z(t);oe(r,"iterate",Ln);const s=r[e](...n);return(s===-1||s===!1)&&ui(n[0])?(n[0]=z(n[0]),r[e](...n)):s}function mn(t,e,n=[]){lt(),ri();const r=z(t)[e].apply(t,n);return si(),ut(),r}const sg=Xs("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pt));function ig(t){Pt(t)||(t=String(t));const e=z(this);return oe(e,"has",t),e.hasOwnProperty(t)}class Oc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?gg:xc:i?Nc:Dc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=B(e);if(!s){let c;if(o&&(c=ng[n]))return c;if(n==="hasOwnProperty")return ig}const a=Reflect.get(e,n,ce(e)?e:r);return(Pt(n)?Pc.has(n):sg(n))||(s||oe(e,"get",n),i)?a:ce(a)?o&&ei(n)?a:a.value:ne(a)?s?Lc(a):Mr(a):a}}class kc extends Oc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Vt(i);if(!Oe(r)&&!Vt(r)&&(i=z(i),r=z(r)),!B(e)&&ce(i)&&!ce(r))return c?!1:(i.value=r,!0)}const o=B(e)&&ei(n)?Number(n)<e.length:K(e,n),a=Reflect.set(e,n,r,ce(e)?e:s);return e===z(s)&&(o?Rt(r,i)&&tt(e,"set",n,r):tt(e,"add",n,r)),a}deleteProperty(e,n){const r=K(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Pt(n)||!Pc.has(n))&&oe(e,"has",n),r}ownKeys(e){return oe(e,"iterate",B(e)?"length":Ut),Reflect.ownKeys(e)}}class og extends Oc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ag=new kc,cg=new og,lg=new kc(!0);const Es=t=>t,Xn=t=>Reflect.getPrototypeOf(t);function ug(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=nn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Es:e?Ts:fe;return!e&&oe(i,"iterate",c?Is:Ut),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Qn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fg(t,e){const n={get(s){const i=this.__v_raw,o=z(i),a=z(s);t||(Rt(s,a)&&oe(o,"get",s),oe(o,"get",a));const{has:c}=Xn(o),l=e?Es:t?Ts:fe;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&oe(z(s),"iterate",Ut),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=z(i),a=z(s);return t||(Rt(s,a)&&oe(o,"has",s),oe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=z(a),l=e?Es:t?Ts:fe;return!t&&oe(c,"iterate",Ut),a.forEach((u,d)=>s.call(i,l(u),l(d),o))}};return le(n,t?{add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear")}:{add(s){!e&&!Oe(s)&&!Vt(s)&&(s=z(s));const i=z(this);return Xn(i).has.call(i,s)||(i.add(s),tt(i,"add",s,s)),this},set(s,i){!e&&!Oe(i)&&!Vt(i)&&(i=z(i));const o=z(this),{has:a,get:c}=Xn(o);let l=a.call(o,s);l||(s=z(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Rt(i,u)&&tt(o,"set",s,i):tt(o,"add",s,i),this},delete(s){const i=z(this),{has:o,get:a}=Xn(i);let c=o.call(i,s);c||(s=z(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&tt(i,"delete",s,void 0),l},clear(){const s=z(this),i=s.size!==0,o=s.clear();return i&&tt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ug(s,t,e)}),n}function ci(t,e){const n=fg(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const dg={get:ci(!1,!1)},hg={get:ci(!1,!0)},pg={get:ci(!0,!1)};const Dc=new WeakMap,Nc=new WeakMap,xc=new WeakMap,gg=new WeakMap;function mg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _g(t){return t.__v_skip||!Object.isExtensible(t)?0:mg(Hp(t))}function Mr(t){return Vt(t)?t:li(t,!1,ag,dg,Dc)}function Mc(t){return li(t,!1,lg,hg,Nc)}function Lc(t){return li(t,!0,cg,pg,xc)}function li(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=_g(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Cn(t){return Vt(t)?Cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Vt(t){return!!(t&&t.__v_isReadonly)}function Oe(t){return!!(t&&t.__v_isShallow)}function ui(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function yg(t){return!K(t,"__v_skip")&&Object.isExtensible(t)&&bs(t,"__v_skip",!0),t}const fe=t=>ne(t)?Mr(t):t,Ts=t=>ne(t)?Lc(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function bg(t){return Uc(t,!1)}function wg(t){return Uc(t,!0)}function Uc(t,e){return ce(t)?t:new vg(t,e)}class vg{constructor(e,n){this.dep=new oi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:z(e),this._value=n?e:fe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Oe(e)||Vt(e);e=r?e:z(e),Rt(e,n)&&(this._rawValue=e,this._value=r?e:fe(e),this.dep.trigger())}}function rn(t){return ce(t)?t.value:t}const Ig={get:(t,e,n)=>e==="__v_raw"?t:rn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fc(t){return Cn(t)?t:new Proxy(t,Ig)}class Eg{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new oi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return Ec(this,!0),!0}get value(){const e=this.dep.track();return Cc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tg(t,e,n=!1){let r,s;return H(t)?r=t:(r=t.get,s=t.set),new Eg(r,s,n)}const Zn={},br=new WeakMap;let xt;function Sg(t,e=!1,n=xt){if(n){let r=br.get(n);r||br.set(n,r=[]),r.push(t)}}function Cg(t,e,n=ee){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=k=>s?k:Oe(k)||s===!1||s===0?St(k,1):St(k);let u,d,p,m,E=!1,R=!1;if(ce(t)?(d=()=>t.value,E=Oe(t)):Cn(t)?(d=()=>l(t),E=!0):B(t)?(R=!0,E=t.some(k=>Cn(k)||Oe(k)),d=()=>t.map(k=>{if(ce(k))return k.value;if(Cn(k))return l(k);if(H(k))return c?c(k,2):k()})):H(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){lt();try{p()}finally{ut()}}const k=xt;xt=u;try{return c?c(t,3,[m]):t(m)}finally{xt=k}}:d=ze,e&&s){const k=d,J=s===!0?1/0:s;d=()=>St(k(),J)}const F=Zp(),D=()=>{u.stop(),F&&F.active&&Zs(F.effects,u)};if(i&&e){const k=e;e=(...J)=>{k(...J),D()}}let O=R?new Array(t.length).fill(Zn):Zn;const x=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const J=u.run();if(s||E||(R?J.some((ie,te)=>Rt(ie,O[te])):Rt(J,O))){p&&p();const ie=xt;xt=u;try{const te=[J,O===Zn?void 0:R&&O[0]===Zn?[]:O,m];O=J,c?c(e,3,te):e(...te)}finally{xt=ie}}}else u.run()};return a&&a(x),u=new vc(d),u.scheduler=o?()=>o(x,!1):x,m=k=>Sg(k,!1,u),p=u.onStop=()=>{const k=br.get(u);if(k){if(c)c(k,4);else for(const J of k)J();br.delete(u)}},e?r?x(!0):O=u.run():o?o(x.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function St(t,e=1/0,n){if(e<=0||!ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))St(t.value,e,n);else if(B(t))for(let r=0;r<t.length;r++)St(t[r],e,n);else if(pc(t)||nn(t))t.forEach(r=>{St(r,e,n)});else if(_c(t)){for(const r in t)St(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&St(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(t,e,n,r){try{return r?t(...r):t()}catch(s){Lr(s,e,n)}}function qe(t,e,n,r){if(H(t)){const s=qn(t,e,n,r);return s&&gc(s)&&s.catch(i=>{Lr(i,e,n)}),s}if(B(t)){const s=[];for(let i=0;i<t.length;i++)s.push(qe(t[i],e,n,r));return s}}function Lr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ee;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(i){lt(),qn(i,null,10,[t,c,l]),ut();return}}Ag(t,n,s,r,o)}function Ag(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const de=[];let Be=-1;const sn=[];let yt=null,Jt=0;const $c=Promise.resolve();let wr=null;function Bc(t){const e=wr||$c;return t?e.then(this?t.bind(this):t):e}function Rg(t){let e=Be+1,n=de.length;for(;e<n;){const r=e+n>>>1,s=de[r],i=Un(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function fi(t){if(!(t.flags&1)){const e=Un(t),n=de[de.length-1];!n||!(t.flags&2)&&e>=Un(n)?de.push(t):de.splice(Rg(e),0,t),t.flags|=1,Hc()}}function Hc(){wr||(wr=$c.then(jc))}function Pg(t){B(t)?sn.push(...t):yt&&t.id===-1?yt.splice(Jt+1,0,t):t.flags&1||(sn.push(t),t.flags|=1),Hc()}function co(t,e,n=Be+1){for(;n<de.length;n++){const r=de[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;de.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vc(t){if(sn.length){const e=[...new Set(sn)].sort((n,r)=>Un(n)-Un(r));if(sn.length=0,yt){yt.push(...e);return}for(yt=e,Jt=0;Jt<yt.length;Jt++){const n=yt[Jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yt=null,Jt=0}}const Un=t=>t.id==null?t.flags&2?-1:1/0:t.id;function jc(t){try{for(Be=0;Be<de.length;Be++){const e=de[Be];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Be<de.length;Be++){const e=de[Be];e&&(e.flags&=-2)}Be=-1,de.length=0,Vc(),wr=null,(de.length||sn.length)&&jc()}}let Re=null,Wc=null;function vr(t){const e=Re;return Re=t,Wc=t&&t.type.__scopeId||null,e}function Og(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&bo(-1);const i=vr(e);let o;try{o=t(...s)}finally{vr(i),r._d&&bo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(lt(),qe(c,n,8,[t.el,a,t,e]),ut())}}const kg=Symbol("_vte"),Dg=t=>t.__isTeleport;function di(t,e){t.shapeFlag&6&&t.component?(t.transition=e,di(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function zc(t,e){return H(t)?le({name:t.name},e,{setup:t}):t}function Kc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function An(t,e,n,r,s=!1){if(B(t)){t.forEach((E,R)=>An(E,e&&(B(e)?e[R]:e),n,r,s));return}if(Rn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&An(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?mi(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ee?a.refs={}:a.refs,d=a.setupState,p=z(d),m=d===ee?()=>!1:E=>K(p,E);if(l!=null&&l!==c&&(re(l)?(u[l]=null,m(l)&&(d[l]=null)):ce(l)&&(l.value=null)),H(c))qn(c,a,12,[o,u]);else{const E=re(c),R=ce(c);if(E||R){const F=()=>{if(t.f){const D=E?m(c)?d[c]:u[c]:c.value;s?B(D)&&Zs(D,i):B(D)?D.includes(i)||D.push(i):E?(u[c]=[i],m(c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else E?(u[c]=o,m(c)&&(d[c]=o)):R&&(c.value=o,t.k&&(u[t.k]=o))};o?(F.id=-1,we(F,n)):F()}}}xr().requestIdleCallback;xr().cancelIdleCallback;const Rn=t=>!!t.type.__asyncLoader,qc=t=>t.type.__isKeepAlive;function Ng(t,e){Gc(t,"a",e)}function xg(t,e){Gc(t,"da",e)}function Gc(t,e,n=ae){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ur(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qc(s.parent.vnode)&&Mg(r,e,n,s),s=s.parent}}function Mg(t,e,n,r){const s=Ur(e,t,r,!0);Jc(()=>{Zs(r[e],s)},n)}function Ur(t,e,n=ae,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lt();const a=Gn(n),c=qe(e,n,t,o);return a(),ut(),c});return r?s.unshift(i):s.push(i),i}}const dt=t=>(e,n=ae)=>{(!$n||t==="sp")&&Ur(t,(...r)=>e(...r),n)},Lg=dt("bm"),Ug=dt("m"),Fg=dt("bu"),$g=dt("u"),Bg=dt("bum"),Jc=dt("um"),Hg=dt("sp"),Vg=dt("rtg"),jg=dt("rtc");function Wg(t,e=ae){Ur("ec",t,e)}const zg="components";function Kg(t,e){return Gg(zg,t,!0,e)||t}const qg=Symbol.for("v-ndc");function Gg(t,e,n=!0,r=!1){const s=Re||ae;if(s){const i=s.type;{const a=$m(i,!1);if(a&&(a===e||a===Se(e)||a===Nr(Se(e))))return i}const o=lo(s[t]||i[t],e)||lo(s.appContext[t],e);return!o&&r?i:o}}function lo(t,e){return t&&(t[e]||t[Se(e)]||t[Nr(Se(e))])}const Ss=t=>t?gl(t)?mi(t):Ss(t.parent):null,Pn=le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ss(t.parent),$root:t=>Ss(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xc(t),$forceUpdate:t=>t.f||(t.f=()=>{fi(t.update)}),$nextTick:t=>t.n||(t.n=Bc.bind(t.proxy)),$watch:t=>gm.bind(t)}),rs=(t,e)=>t!==ee&&!t.__isScriptSetup&&K(t,e),Jg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(rs(r,e))return o[e]=1,r[e];if(s!==ee&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==ee&&K(n,e))return o[e]=4,n[e];Cs&&(o[e]=0)}}const u=Pn[e];let d,p;if(u)return e==="$attrs"&&oe(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ee&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return rs(s,e)?(s[e]=n,!0):r!==ee&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ee&&K(t,o)||rs(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(Pn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function uo(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cs=!0;function Yg(t){const e=Xc(t),n=t.proxy,r=t.ctx;Cs=!1,e.beforeCreate&&fo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:E,activated:R,deactivated:F,beforeDestroy:D,beforeUnmount:O,destroyed:x,unmounted:k,render:J,renderTracked:ie,renderTriggered:te,errorCaptured:De,serverPrefetch:ht,expose:Ne,inheritAttrs:pt,components:Ot,directives:xe,filters:pn}=e;if(l&&Xg(l,r,null),o)for(const G in o){const j=o[G];H(j)&&(r[G]=j.bind(n))}if(s){const G=s.call(n,n);ne(G)&&(t.data=Mr(G))}if(Cs=!0,i)for(const G in i){const j=i[G],Je=H(j)?j.bind(n,n):H(j.get)?j.get.bind(n,n):ze,gt=!H(j)&&H(j.set)?j.set.bind(n):ze,Me=Ce({get:Je,set:gt});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Me.value,set:pe=>Me.value=pe})}if(a)for(const G in a)Yc(a[G],r,n,G);if(c){const G=H(c)?c.call(n):c;Reflect.ownKeys(G).forEach(j=>{ir(j,G[j])})}u&&fo(u,t,"c");function se(G,j){B(j)?j.forEach(Je=>G(Je.bind(n))):j&&G(j.bind(n))}if(se(Lg,d),se(Ug,p),se(Fg,m),se($g,E),se(Ng,R),se(xg,F),se(Wg,De),se(jg,ie),se(Vg,te),se(Bg,O),se(Jc,k),se(Hg,ht),B(Ne))if(Ne.length){const G=t.exposed||(t.exposed={});Ne.forEach(j=>{Object.defineProperty(G,j,{get:()=>n[j],set:Je=>n[j]=Je,enumerable:!0})})}else t.exposed||(t.exposed={});J&&t.render===ze&&(t.render=J),pt!=null&&(t.inheritAttrs=pt),Ot&&(t.components=Ot),xe&&(t.directives=xe),ht&&Kc(t)}function Xg(t,e,n=ze){B(t)&&(t=As(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=st(s.from||r,s.default,!0):i=st(s.from||r):i=st(s),ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function fo(t,e,n){qe(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yc(t,e,n,r){let s=r.includes(".")?ul(n,r):()=>n[r];if(re(t)){const i=e[t];H(i)&&or(s,i)}else if(H(t))or(s,t.bind(n));else if(ne(t))if(B(t))t.forEach(i=>Yc(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&or(s,i,t)}}function Xc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ir(c,l,o,!0)),Ir(c,e,o)),ne(e)&&i.set(e,c),c}function Ir(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ir(t,i,n,!0),s&&s.forEach(o=>Ir(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Qg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Qg={data:ho,props:po,emits:po,methods:bn,computed:bn,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:bn,directives:bn,watch:em,provide:ho,inject:Zg};function ho(t,e){return e?t?function(){return le(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Zg(t,e){return bn(As(t),As(e))}function As(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ue(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?le(Object.create(null),t,e):e}function po(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:le(Object.create(null),uo(t),uo(e??{})):e}function em(t,e){if(!t)return e;if(!e)return t;const n=le(Object.create(null),t);for(const r in e)n[r]=ue(t[r],e[r]);return n}function Qc(){return{app:null,config:{isNativeTag:$p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tm=0;function nm(t,e){return function(r,s=null){H(r)||(r=le({},r)),s!=null&&!ne(s)&&(s=null);const i=Qc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:tm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hm,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(l,...d)):H(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const m=l._ceVNode||Ie(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,mi(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(qe(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=on;on=l;try{return u()}finally{on=d}}};return l}}let on=null;function ir(t,e){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[t]=e}}function st(t,e,n=!1){const r=xm();if(r||on){let s=on?on._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}const Zc={},el=()=>Object.create(Zc),tl=t=>Object.getPrototypeOf(t)===Zc;function rm(t,e,n,r=!1){const s={},i=el();t.propsDefaults=Object.create(null),nl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Mc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sm(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=z(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Fr(t.emitsOptions,p))continue;const m=e[p];if(c)if(K(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const E=Se(p);s[E]=Rs(c,a,E,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{nl(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!K(e,d)&&((u=Wt(d))===d||!K(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Rs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!K(e,d))&&(delete i[d],l=!0)}l&&tt(t.attrs,"set","")}function nl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(En(c))continue;const l=e[c];let u;s&&K(s,u=Se(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Fr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=z(n),l=a||ee;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Rs(s,c,d,l[d],t,!K(l,d))}}return o}function Rs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Gn(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Wt(n))&&(r=!0))}return r}const im=new WeakMap;function rl(t,e,n=!1){const r=n?im:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=d=>{c=!0;const[p,m]=rl(d,e,!0);le(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ne(t)&&r.set(t,tn),tn;if(B(i))for(let u=0;u<i.length;u++){const d=Se(i[u]);go(d)&&(o[d]=ee)}else if(i)for(const u in i){const d=Se(u);if(go(d)){const p=i[u],m=o[d]=B(p)||H(p)?{type:p}:le({},p),E=m.type;let R=!1,F=!0;if(B(E))for(let D=0;D<E.length;++D){const O=E[D],x=H(O)&&O.name;if(x==="Boolean"){R=!0;break}else x==="String"&&(F=!1)}else R=H(E)&&E.name==="Boolean";m[0]=R,m[1]=F,(R||K(m,"default"))&&a.push(d)}}const l=[o,a];return ne(t)&&r.set(t,l),l}function go(t){return t[0]!=="$"&&!En(t)}const hi=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",pi=t=>B(t)?t.map(He):[He(t)],om=(t,e,n)=>{if(e._n)return e;const r=Og((...s)=>pi(e(...s)),n);return r._c=!1,r},sl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hi(s))continue;const i=t[s];if(H(i))e[s]=om(s,i,r);else if(i!=null){const o=pi(i);e[s]=()=>o}}},il=(t,e)=>{const n=pi(e);t.slots.default=()=>n},ol=(t,e,n)=>{for(const r in e)(n||!hi(r))&&(t[r]=e[r])},am=(t,e,n)=>{const r=t.slots=el();if(t.vnode.shapeFlag&32){const s=e.__;s&&bs(r,"__",s,!0);const i=e._;i?(ol(r,e,n),n&&bs(r,"_",i,!0)):sl(e,r)}else e&&il(t,e)},cm=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:ol(s,e,n):(i=!e.$stable,sl(e,s)),o=e}else e&&(il(t,e),o={default:1});if(i)for(const a in s)!hi(a)&&o[a]==null&&delete s[a]},we=Im;function lm(t){return um(t)}function um(t,e){const n=xr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=ze,insertStaticContent:E}=t,R=(f,h,g,_=null,w=null,b=null,S=void 0,T=null,I=!!h.dynamicChildren)=>{if(f===h)return;f&&!_n(f,h)&&(_=y(f),pe(f,w,b,!0),f=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:v,ref:L,shapeFlag:A}=h;switch(v){case $r:F(f,h,g,_);break;case cn:D(f,h,g,_);break;case ar:f==null&&O(h,g,_,S);break;case Ze:Ot(f,h,g,_,w,b,S,T,I);break;default:A&1?J(f,h,g,_,w,b,S,T,I):A&6?xe(f,h,g,_,w,b,S,T,I):(A&64||A&128)&&v.process(f,h,g,_,w,b,S,T,I,N)}L!=null&&w?An(L,f&&f.ref,b,h||f,!h):L==null&&f&&f.ref!=null&&An(f.ref,null,b,f,!0)},F=(f,h,g,_)=>{if(f==null)r(h.el=a(h.children),g,_);else{const w=h.el=f.el;h.children!==f.children&&l(w,h.children)}},D=(f,h,g,_)=>{f==null?r(h.el=c(h.children||""),g,_):h.el=f.el},O=(f,h,g,_)=>{[f.el,f.anchor]=E(f.children,h,g,_,f.el,f.anchor)},x=({el:f,anchor:h},g,_)=>{let w;for(;f&&f!==h;)w=p(f),r(f,g,_),f=w;r(h,g,_)},k=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},J=(f,h,g,_,w,b,S,T,I)=>{h.type==="svg"?S="svg":h.type==="math"&&(S="mathml"),f==null?ie(h,g,_,w,b,S,T,I):ht(f,h,w,b,S,T,I)},ie=(f,h,g,_,w,b,S,T)=>{let I,v;const{props:L,shapeFlag:A,transition:M,dirs:$}=f;if(I=f.el=o(f.type,b,L&&L.is,L),A&8?u(I,f.children):A&16&&De(f.children,I,null,_,w,ss(f,b),S,T),$&&kt(f,null,_,"created"),te(I,f,f.scopeId,S,_),L){for(const Q in L)Q!=="value"&&!En(Q)&&i(I,Q,null,L[Q],b,_);"value"in L&&i(I,"value",null,L.value,b),(v=L.onVnodeBeforeMount)&&$e(v,_,f)}$&&kt(f,null,_,"beforeMount");const V=fm(w,M);V&&M.beforeEnter(I),r(I,h,g),((v=L&&L.onVnodeMounted)||V||$)&&we(()=>{v&&$e(v,_,f),V&&M.enter(I),$&&kt(f,null,_,"mounted")},w)},te=(f,h,g,_,w)=>{if(g&&m(f,g),_)for(let b=0;b<_.length;b++)m(f,_[b]);if(w){let b=w.subTree;if(h===b||dl(b.type)&&(b.ssContent===h||b.ssFallback===h)){const S=w.vnode;te(f,S,S.scopeId,S.slotScopeIds,w.parent)}}},De=(f,h,g,_,w,b,S,T,I=0)=>{for(let v=I;v<f.length;v++){const L=f[v]=T?bt(f[v]):He(f[v]);R(null,L,h,g,_,w,b,S,T)}},ht=(f,h,g,_,w,b,S)=>{const T=h.el=f.el;let{patchFlag:I,dynamicChildren:v,dirs:L}=h;I|=f.patchFlag&16;const A=f.props||ee,M=h.props||ee;let $;if(g&&Dt(g,!1),($=M.onVnodeBeforeUpdate)&&$e($,g,h,f),L&&kt(h,f,g,"beforeUpdate"),g&&Dt(g,!0),(A.innerHTML&&M.innerHTML==null||A.textContent&&M.textContent==null)&&u(T,""),v?Ne(f.dynamicChildren,v,T,g,_,ss(h,w),b):S||j(f,h,T,null,g,_,ss(h,w),b,!1),I>0){if(I&16)pt(T,A,M,g,w);else if(I&2&&A.class!==M.class&&i(T,"class",null,M.class,w),I&4&&i(T,"style",A.style,M.style,w),I&8){const V=h.dynamicProps;for(let Q=0;Q<V.length;Q++){const q=V[Q],ge=A[q],me=M[q];(me!==ge||q==="value")&&i(T,q,ge,me,w,g)}}I&1&&f.children!==h.children&&u(T,h.children)}else!S&&v==null&&pt(T,A,M,g,w);(($=M.onVnodeUpdated)||L)&&we(()=>{$&&$e($,g,h,f),L&&kt(h,f,g,"updated")},_)},Ne=(f,h,g,_,w,b,S)=>{for(let T=0;T<h.length;T++){const I=f[T],v=h[T],L=I.el&&(I.type===Ze||!_n(I,v)||I.shapeFlag&198)?d(I.el):g;R(I,v,L,null,_,w,b,S,!0)}},pt=(f,h,g,_,w)=>{if(h!==g){if(h!==ee)for(const b in h)!En(b)&&!(b in g)&&i(f,b,h[b],null,w,_);for(const b in g){if(En(b))continue;const S=g[b],T=h[b];S!==T&&b!=="value"&&i(f,b,T,S,w,_)}"value"in g&&i(f,"value",h.value,g.value,w)}},Ot=(f,h,g,_,w,b,S,T,I)=>{const v=h.el=f?f.el:a(""),L=h.anchor=f?f.anchor:a("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:$}=h;$&&(T=T?T.concat($):$),f==null?(r(v,g,_),r(L,g,_),De(h.children||[],g,L,w,b,S,T,I)):A>0&&A&64&&M&&f.dynamicChildren?(Ne(f.dynamicChildren,M,g,w,b,S,T),(h.key!=null||w&&h===w.subTree)&&al(f,h,!0)):j(f,h,g,L,w,b,S,T,I)},xe=(f,h,g,_,w,b,S,T,I)=>{h.slotScopeIds=T,f==null?h.shapeFlag&512?w.ctx.activate(h,g,_,S,I):pn(h,g,_,w,b,S,I):zt(f,h,I)},pn=(f,h,g,_,w,b,S)=>{const T=f.component=Nm(f,_,w);if(qc(f)&&(T.ctx.renderer=N),Mm(T,!1,S),T.asyncDep){if(w&&w.registerDep(T,se,S),!f.el){const I=T.subTree=Ie(cn);D(null,I,h,g),f.placeholder=I.el}}else se(T,f,h,g,w,b,S)},zt=(f,h,g)=>{const _=h.component=f.component;if(wm(f,h,g))if(_.asyncDep&&!_.asyncResolved){G(_,h,g);return}else _.next=h,_.update();else h.el=f.el,_.vnode=h},se=(f,h,g,_,w,b,S)=>{const T=()=>{if(f.isMounted){let{next:A,bu:M,u:$,parent:V,vnode:Q}=f;{const Ue=cl(f);if(Ue){A&&(A.el=Q.el,G(f,A,S)),Ue.asyncDep.then(()=>{f.isUnmounted||T()});return}}let q=A,ge;Dt(f,!1),A?(A.el=Q.el,G(f,A,S)):A=Q,M&&Qr(M),(ge=A.props&&A.props.onVnodeBeforeUpdate)&&$e(ge,V,A,Q),Dt(f,!0);const me=_o(f),Le=f.subTree;f.subTree=me,R(Le,me,d(Le.el),y(Le),f,w,b),A.el=me.el,q===null&&vm(f,me.el),$&&we($,w),(ge=A.props&&A.props.onVnodeUpdated)&&we(()=>$e(ge,V,A,Q),w)}else{let A;const{el:M,props:$}=h,{bm:V,m:Q,parent:q,root:ge,type:me}=f,Le=Rn(h);Dt(f,!1),V&&Qr(V),!Le&&(A=$&&$.onVnodeBeforeMount)&&$e(A,q,h),Dt(f,!0);{ge.ce&&ge.ce._def.shadowRoot!==!1&&ge.ce._injectChildStyle(me);const Ue=f.subTree=_o(f);R(null,Ue,g,_,f,w,b),h.el=Ue.el}if(Q&&we(Q,w),!Le&&(A=$&&$.onVnodeMounted)){const Ue=h;we(()=>$e(A,q,Ue),w)}(h.shapeFlag&256||q&&Rn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&we(f.a,w),f.isMounted=!0,h=g=_=null}};f.scope.on();const I=f.effect=new vc(T);f.scope.off();const v=f.update=I.run.bind(I),L=f.job=I.runIfDirty.bind(I);L.i=f,L.id=f.uid,I.scheduler=()=>fi(L),Dt(f,!0),v()},G=(f,h,g)=>{h.component=f;const _=f.vnode.props;f.vnode=h,f.next=null,sm(f,h.props,_,g),cm(f,h.children,g),lt(),co(f),ut()},j=(f,h,g,_,w,b,S,T,I=!1)=>{const v=f&&f.children,L=f?f.shapeFlag:0,A=h.children,{patchFlag:M,shapeFlag:$}=h;if(M>0){if(M&128){gt(v,A,g,_,w,b,S,T,I);return}else if(M&256){Je(v,A,g,_,w,b,S,T,I);return}}$&8?(L&16&&Te(v,w,b),A!==v&&u(g,A)):L&16?$&16?gt(v,A,g,_,w,b,S,T,I):Te(v,w,b,!0):(L&8&&u(g,""),$&16&&De(A,g,_,w,b,S,T,I))},Je=(f,h,g,_,w,b,S,T,I)=>{f=f||tn,h=h||tn;const v=f.length,L=h.length,A=Math.min(v,L);let M;for(M=0;M<A;M++){const $=h[M]=I?bt(h[M]):He(h[M]);R(f[M],$,g,null,w,b,S,T,I)}v>L?Te(f,w,b,!0,!1,A):De(h,g,_,w,b,S,T,I,A)},gt=(f,h,g,_,w,b,S,T,I)=>{let v=0;const L=h.length;let A=f.length-1,M=L-1;for(;v<=A&&v<=M;){const $=f[v],V=h[v]=I?bt(h[v]):He(h[v]);if(_n($,V))R($,V,g,null,w,b,S,T,I);else break;v++}for(;v<=A&&v<=M;){const $=f[A],V=h[M]=I?bt(h[M]):He(h[M]);if(_n($,V))R($,V,g,null,w,b,S,T,I);else break;A--,M--}if(v>A){if(v<=M){const $=M+1,V=$<L?h[$].el:_;for(;v<=M;)R(null,h[v]=I?bt(h[v]):He(h[v]),g,V,w,b,S,T,I),v++}}else if(v>M)for(;v<=A;)pe(f[v],w,b,!0),v++;else{const $=v,V=v,Q=new Map;for(v=V;v<=M;v++){const be=h[v]=I?bt(h[v]):He(h[v]);be.key!=null&&Q.set(be.key,v)}let q,ge=0;const me=M-V+1;let Le=!1,Ue=0;const gn=new Array(me);for(v=0;v<me;v++)gn[v]=0;for(v=$;v<=A;v++){const be=f[v];if(ge>=me){pe(be,w,b,!0);continue}let Fe;if(be.key!=null)Fe=Q.get(be.key);else for(q=V;q<=M;q++)if(gn[q-V]===0&&_n(be,h[q])){Fe=q;break}Fe===void 0?pe(be,w,b,!0):(gn[Fe-V]=v+1,Fe>=Ue?Ue=Fe:Le=!0,R(be,h[Fe],g,null,w,b,S,T,I),ge++)}const bi=Le?dm(gn):tn;for(q=bi.length-1,v=me-1;v>=0;v--){const be=V+v,Fe=h[be],wi=h[be+1],vi=be+1<L?wi.el||wi.placeholder:_;gn[v]===0?R(null,Fe,g,vi,w,b,S,T,I):Le&&(q<0||v!==bi[q]?Me(Fe,g,vi,2):q--)}}},Me=(f,h,g,_,w=null)=>{const{el:b,type:S,transition:T,children:I,shapeFlag:v}=f;if(v&6){Me(f.component.subTree,h,g,_);return}if(v&128){f.suspense.move(h,g,_);return}if(v&64){S.move(f,h,g,N);return}if(S===Ze){r(b,h,g);for(let A=0;A<I.length;A++)Me(I[A],h,g,_);r(f.anchor,h,g);return}if(S===ar){x(f,h,g);return}if(_!==2&&v&1&&T)if(_===0)T.beforeEnter(b),r(b,h,g),we(()=>T.enter(b),w);else{const{leave:A,delayLeave:M,afterLeave:$}=T,V=()=>{f.ctx.isUnmounted?s(b):r(b,h,g)},Q=()=>{A(b,()=>{V(),$&&$()})};M?M(b,V,Q):Q()}else r(b,h,g)},pe=(f,h,g,_=!1,w=!1)=>{const{type:b,props:S,ref:T,children:I,dynamicChildren:v,shapeFlag:L,patchFlag:A,dirs:M,cacheIndex:$}=f;if(A===-2&&(w=!1),T!=null&&(lt(),An(T,null,g,f,!0),ut()),$!=null&&(h.renderCache[$]=void 0),L&256){h.ctx.deactivate(f);return}const V=L&1&&M,Q=!Rn(f);let q;if(Q&&(q=S&&S.onVnodeBeforeUnmount)&&$e(q,h,f),L&6)Jn(f.component,g,_);else{if(L&128){f.suspense.unmount(g,_);return}V&&kt(f,null,h,"beforeUnmount"),L&64?f.type.remove(f,h,g,N,_):v&&!v.hasOnce&&(b!==Ze||A>0&&A&64)?Te(v,h,g,!1,!0):(b===Ze&&A&384||!w&&L&16)&&Te(I,h,g),_&&Kt(f)}(Q&&(q=S&&S.onVnodeUnmounted)||V)&&we(()=>{q&&$e(q,h,f),V&&kt(f,null,h,"unmounted")},g)},Kt=f=>{const{type:h,el:g,anchor:_,transition:w}=f;if(h===Ze){qt(g,_);return}if(h===ar){k(f);return}const b=()=>{s(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:S,delayLeave:T}=w,I=()=>S(g,b);T?T(f.el,b,I):I()}else b()},qt=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},Jn=(f,h,g)=>{const{bum:_,scope:w,job:b,subTree:S,um:T,m:I,a:v,parent:L,slots:{__:A}}=f;mo(I),mo(v),_&&Qr(_),L&&B(A)&&A.forEach(M=>{L.renderCache[M]=void 0}),w.stop(),b&&(b.flags|=8,pe(S,f,h,g)),T&&we(T,h),we(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Te=(f,h,g,_=!1,w=!1,b=0)=>{for(let S=b;S<f.length;S++)pe(f[S],h,g,_,w)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),g=h&&h[kg];return g?p(g):h};let P=!1;const C=(f,h,g)=>{f==null?h._vnode&&pe(h._vnode,null,null,!0):R(h._vnode||null,f,h,null,null,null,g),h._vnode=f,P||(P=!0,co(),Vc(),P=!1)},N={p:R,um:pe,m:Me,r:Kt,mt:pn,mc:De,pc:j,pbc:Ne,n:y,o:t};return{render:C,hydrate:void 0,createApp:nm(C)}}function ss({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function al(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=bt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&al(o,a)),a.type===$r&&(a.el=o.el),a.type===cn&&!a.el&&(a.el=o.el)}}function dm(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cl(e)}function mo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hm=Symbol.for("v-scx"),pm=()=>st(hm);function or(t,e,n){return ll(t,e,n)}function ll(t,e,n=ee){const{immediate:r,deep:s,flush:i,once:o}=n,a=le({},n),c=e&&r||!e&&i!=="post";let l;if($n){if(i==="sync"){const m=pm();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=ze,m.resume=ze,m.pause=ze,m}}const u=ae;a.call=(m,E,R)=>qe(m,u,E,R);let d=!1;i==="post"?a.scheduler=m=>{we(m,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,E)=>{E?m():fi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=Cg(t,e,a);return $n&&(l?l.push(p):c&&p()),p}function gm(t,e,n){const r=this.proxy,s=re(t)?t.includes(".")?ul(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Gn(this),a=ll(s,i.bind(r),n);return o(),a}function ul(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const mm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Se(e)}Modifiers`]||t[`${Wt(e)}Modifiers`];function _m(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ee;let s=n;const i=e.startsWith("update:"),o=i&&mm(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>re(u)?u.trim():u)),o.number&&(s=n.map(Wp)));let a,c=r[a=Xr(e)]||r[a=Xr(Se(e))];!c&&i&&(c=r[a=Xr(Wt(e))]),c&&qe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qe(l,t,6,s)}}function fl(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=fl(l,e,!0);u&&(a=!0,le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ne(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):le(o,i),ne(t)&&r.set(t,o),o)}function Fr(t,e){return!t||!Or(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Wt(e))||K(t,e))}function _o(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:p,setupState:m,ctx:E,inheritAttrs:R}=t,F=vr(t);let D,O;try{if(n.shapeFlag&4){const k=s||r,J=k;D=He(l.call(J,k,u,d,m,p,E)),O=a}else{const k=e;D=He(k.length>1?k(d,{attrs:a,slots:o,emit:c}):k(d,null)),O=e.props?a:ym(a)}}catch(k){On.length=0,Lr(k,t,1),D=Ie(cn)}let x=D;if(O&&R!==!1){const k=Object.keys(O),{shapeFlag:J}=x;k.length&&J&7&&(i&&k.some(Qs)&&(O=bm(O,i)),x=ln(x,O,!1,!0))}return n.dirs&&(x=ln(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&di(x,n.transition),D=x,vr(F),D}const ym=t=>{let e;for(const n in t)(n==="class"||n==="style"||Or(n))&&((e||(e={}))[n]=t[n]);return e},bm=(t,e)=>{const n={};for(const r in t)(!Qs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function wm(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Fr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?yo(r,o,l):!0:!!o;return!1}function yo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Fr(n,i))return!0}return!1}function vm({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const dl=t=>t.__isSuspense;function Im(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Pg(t)}const Ze=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),cn=Symbol.for("v-cmt"),ar=Symbol.for("v-stc"),On=[];let ve=null;function Em(t=!1){On.push(ve=t?null:[])}function Tm(){On.pop(),ve=On[On.length-1]||null}let Fn=1;function bo(t,e=!1){Fn+=t,t<0&&ve&&e&&(ve.hasOnce=!0)}function Sm(t){return t.dynamicChildren=Fn>0?ve||tn:null,Tm(),Fn>0&&ve&&ve.push(t),t}function Cm(t,e,n,r,s,i){return Sm(pl(t,e,n,r,s,i,!0))}function Er(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const hl=({key:t})=>t??null,cr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||ce(t)||H(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function pl(t,e=null,n=null,r=0,s=null,i=t===Ze?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hl(e),ref:e&&cr(e),scopeId:Wc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return a?(gi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=re(n)?8:16),Fn>0&&!o&&ve&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ve.push(c),c}const Ie=Am;function Am(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===qg)&&(t=cn),Er(t)){const a=ln(t,e,!0);return n&&gi(a,n),Fn>0&&!i&&ve&&(a.shapeFlag&6?ve[ve.indexOf(t)]=a:ve.push(a)),a.patchFlag=-2,a}if(Bm(t)&&(t=t.__vccOpts),e){e=Rm(e);let{class:a,style:c}=e;a&&!re(a)&&(e.class=ni(a)),ne(c)&&(ui(c)&&!B(c)&&(c=le({},c)),e.style=ti(c))}const o=re(t)?1:dl(t)?128:Dg(t)?64:ne(t)?4:H(t)?2:0;return pl(t,e,n,r,s,o,i,!0)}function Rm(t){return t?ui(t)||tl(t)?le({},t):t:null}function ln(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Om(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&hl(l),ref:e&&e.ref?n&&i?B(i)?i.concat(cr(e)):[i,cr(e)]:cr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&di(u,c.clone(u)),u}function Pm(t=" ",e=0){return Ie($r,null,t,e)}function Ty(t,e){const n=Ie(ar,null,t);return n.staticCount=e,n}function He(t){return t==null||typeof t=="boolean"?Ie(cn):B(t)?Ie(Ze,null,t.slice()):Er(t)?bt(t):Ie($r,null,String(t))}function bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function gi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!tl(e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[Pm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Om(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ni([e.class,r.class]));else if(s==="style")e.style=ti([e.style,r.style]);else if(Or(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $e(t,e,n,r=null){qe(t,e,7,[n,r])}const km=Qc();let Dm=0;function Nm(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||km,i={uid:Dm++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rl(r,s),emitsOptions:fl(r,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_m.bind(null,i),t.ce&&t.ce(i),i}let ae=null;const xm=()=>ae||Re;let Tr,Ps;{const t=xr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Tr=e("__VUE_INSTANCE_SETTERS__",n=>ae=n),Ps=e("__VUE_SSR_SETTERS__",n=>$n=n)}const Gn=t=>{const e=ae;return Tr(t),t.scope.on(),()=>{t.scope.off(),Tr(e)}},wo=()=>{ae&&ae.scope.off(),Tr(null)};function gl(t){return t.vnode.shapeFlag&4}let $n=!1;function Mm(t,e=!1,n=!1){e&&Ps(e);const{props:r,children:s}=t.vnode,i=gl(t);rm(t,r,i,e),am(t,s,n||e);const o=i?Lm(t,e):void 0;return e&&Ps(!1),o}function Lm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Jg);const{setup:r}=n;if(r){lt();const s=t.setupContext=r.length>1?Fm(t):null,i=Gn(t),o=qn(r,t,0,[t.props,s]),a=gc(o);if(ut(),i(),(a||t.sp)&&!Rn(t)&&Kc(t),a){if(o.then(wo,wo),e)return o.then(c=>{vo(t,c)}).catch(c=>{Lr(c,t,0)});t.asyncDep=o}else vo(t,o)}else ml(t)}function vo(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=Fc(e)),ml(t)}function ml(t,e,n){const r=t.type;t.render||(t.render=r.render||ze);{const s=Gn(t);lt();try{Yg(t)}finally{ut(),s()}}}const Um={get(t,e){return oe(t,"get",""),t[e]}};function Fm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Um),slots:t.slots,emit:t.emit,expose:e}}function mi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Fc(yg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pn)return Pn[n](t)},has(e,n){return n in e||n in Pn}})):t.proxy}function $m(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Bm(t){return H(t)&&"__vccOpts"in t}const Ce=(t,e)=>Tg(t,e,$n);function _l(t,e,n){const r=arguments.length;return r===2?ne(e)&&!B(e)?Er(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Er(n)&&(n=[n]),Ie(t,e,n))}const Hm="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Os;const Io=typeof window<"u"&&window.trustedTypes;if(Io)try{Os=Io.createPolicy("vue",{createHTML:t=>t})}catch{}const yl=Os?t=>Os.createHTML(t):t=>t,Vm="http://www.w3.org/2000/svg",jm="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,Eo=Qe&&Qe.createElement("template"),Wm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Qe.createElementNS(Vm,t):e==="mathml"?Qe.createElementNS(jm,t):n?Qe.createElement(t,{is:n}):Qe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qe.createTextNode(t),createComment:t=>Qe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Eo.innerHTML=yl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Eo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zm=Symbol("_vtc");function Km(t,e,n){const r=t[zm];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const To=Symbol("_vod"),qm=Symbol("_vsh"),Gm=Symbol(""),Jm=/(^|;)\s*display\s*:/;function Ym(t,e,n){const r=t.style,s=re(n);let i=!1;if(n&&!s){if(e)if(re(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&lr(r,a,"")}else for(const o in e)n[o]==null&&lr(r,o,"");for(const o in n)o==="display"&&(i=!0),lr(r,o,n[o])}else if(s){if(e!==n){const o=r[Gm];o&&(n+=";"+o),r.cssText=n,i=Jm.test(n)}}else e&&t.removeAttribute("style");To in t&&(t[To]=i?r.display:"",t[qm]&&(r.display="none"))}const So=/\s*!important$/;function lr(t,e,n){if(B(n))n.forEach(r=>lr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Xm(t,e);So.test(n)?t.setProperty(Wt(r),n.replace(So,""),"important"):t[r]=n}}const Co=["Webkit","Moz","ms"],is={};function Xm(t,e){const n=is[e];if(n)return n;let r=Se(e);if(r!=="filter"&&r in t)return is[e]=r;r=Nr(r);for(let s=0;s<Co.length;s++){const i=Co[s]+r;if(i in t)return is[e]=i}return e}const Ao="http://www.w3.org/1999/xlink";function Ro(t,e,n,r,s,i=Yp(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ao,e.slice(6,e.length)):t.setAttributeNS(Ao,e,n):n==null||i&&!yc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Pt(n)?String(n):n)}function Po(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yl(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=yc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qm(t,e,n,r){t.addEventListener(e,n,r)}function Zm(t,e,n,r){t.removeEventListener(e,n,r)}const Oo=Symbol("_vei");function e_(t,e,n,r,s=null){const i=t[Oo]||(t[Oo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=t_(e);if(r){const l=i[e]=s_(r,s);Qm(t,a,l,c)}else o&&(Zm(t,a,o,c),i[e]=void 0)}}const ko=/(?:Once|Passive|Capture)$/;function t_(t){let e;if(ko.test(t)){e={};let r;for(;r=t.match(ko);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wt(t.slice(2)),e]}let os=0;const n_=Promise.resolve(),r_=()=>os||(n_.then(()=>os=0),os=Date.now());function s_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(i_(r,n.value),e,5,[r])};return n.value=t,n.attached=r_(),n}function i_(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Do=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,o_=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Km(t,r,o):e==="style"?Ym(t,n,r):Or(e)?Qs(e)||e_(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):a_(t,e,r,o))?(Po(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ro(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!re(r))?Po(t,Se(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ro(t,e,r,o))};function a_(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Do(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Do(e)&&re(n)?!1:e in t}const c_=le({patchProp:o_},Wm);let No;function l_(){return No||(No=lm(c_))}const u_=(...t)=>{const e=l_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=d_(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,f_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function f_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function d_(t){return re(t)?document.querySelector(t):t}const h_="modulepreload",p_=function(t){return"/"+t},xo={},er=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=c(n.map(l=>{if(l=p_(l),l in xo)return;xo[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":h_,u||(p.as="script"),p.crossOrigin="",p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((m,E)=>{p.addEventListener("load",m),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof document<"u";function bl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function g_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&bl(t.default)}const W=Object.assign;function as(t,e){const n={};for(const r in e){const s=e[r];n[r]=ke(s)?s.map(t):t(s)}return n}const kn=()=>{},ke=Array.isArray,wl=/#/g,m_=/&/g,__=/\//g,y_=/=/g,b_=/\?/g,vl=/\+/g,w_=/%5B/g,v_=/%5D/g,Il=/%5E/g,I_=/%60/g,El=/%7B/g,E_=/%7C/g,Tl=/%7D/g,T_=/%20/g;function _i(t){return encodeURI(""+t).replace(E_,"|").replace(w_,"[").replace(v_,"]")}function S_(t){return _i(t).replace(El,"{").replace(Tl,"}").replace(Il,"^")}function ks(t){return _i(t).replace(vl,"%2B").replace(T_,"+").replace(wl,"%23").replace(m_,"%26").replace(I_,"`").replace(El,"{").replace(Tl,"}").replace(Il,"^")}function C_(t){return ks(t).replace(y_,"%3D")}function A_(t){return _i(t).replace(wl,"%23").replace(b_,"%3F")}function R_(t){return t==null?"":A_(t).replace(__,"%2F")}function Bn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const P_=/\/$/,O_=t=>t.replace(P_,"");function cs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=x_(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Bn(o)}}function k_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function D_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&un(e.matched[r],n.matched[s])&&Sl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!N_(t[n],e[n]))return!1;return!0}function N_(t,e){return ke(t)?Lo(t,e):ke(e)?Lo(e,t):t===e}function Lo(t,e){return ke(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function x_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Hn;(function(t){t.pop="pop",t.push="push"})(Hn||(Hn={}));var Dn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dn||(Dn={}));function M_(t){if(!t)if(Yt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),O_(t)}const L_=/^[^#]+#/;function U_(t,e){return t.replace(L_,"#")+e}function F_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Br=()=>({left:window.scrollX,top:window.scrollY});function $_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=F_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uo(t,e){return(history.state?history.state.position-e:-1)+t}const Ds=new Map;function B_(t,e){Ds.set(t,e)}function H_(t){const e=Ds.get(t);return Ds.delete(t),e}let V_=()=>location.protocol+"//"+location.host;function Cl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Mo(c,"")}return Mo(n,t)+r+s}function j_(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Cl(t,location),E=n.value,R=e.value;let F=0;if(p){if(n.value=m,e.value=p,o&&o===E){o=null;return}F=R?p.position-R.position:0}else r(m);s.forEach(D=>{D(n.value,E,{delta:F,type:Hn.pop,direction:F?F>0?Dn.forward:Dn.back:Dn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(W({},p.state,{scroll:Br()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Fo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Br():null}}function W_(t){const{history:e,location:n}=window,r={value:Cl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:V_()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=W({},e.state,Fo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=W({},s.value,e.state,{forward:c,scroll:Br()});i(u.current,u,!0);const d=W({},Fo(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function z_(t){t=M_(t);const e=W_(t),n=j_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=W({location:"",base:t,go:r,createHref:U_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function K_(t){return typeof t=="string"||t&&typeof t=="object"}function Al(t){return typeof t=="string"||typeof t=="symbol"}const Rl=Symbol("");var $o;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($o||($o={}));function fn(t,e){return W(new Error,{type:t,[Rl]:!0},e)}function Xe(t,e){return t instanceof Error&&Rl in t&&(e==null||!!(t.type&e))}const Bo="[^/]+?",q_={sensitive:!1,strict:!1,start:!0,end:!0},G_=/[.+*?^${}()[\]/\\]/g;function J_(t,e){const n=W({},q_,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(G_,"\\$&"),m+=40;else if(p.type===1){const{value:E,repeatable:R,optional:F,regexp:D}=p;i.push({name:E,repeatable:R,optional:F});const O=D||Bo;if(O!==Bo){m+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${E}" (${O}): `+k.message)}}let x=R?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(x=F&&l.length<2?`(?:/${x})`:"/"+x),F&&(x+="?"),s+=x,m+=20,F&&(m+=-8),R&&(m+=-20),O===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",E=i[p-1];d[E.name]=m&&E.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:R,optional:F}=m,D=E in l?l[E]:"";if(ke(D)&&!R)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const O=ke(D)?D.join("/"):D;if(!O)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Y_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Pl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Y_(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ho(r))return 1;if(Ho(s))return-1}return s.length-r.length}function Ho(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const X_={type:0,value:""},Q_=/[a-zA-Z0-9_]/;function Z_(t){if(!t)return[[]];if(t==="/")return[[X_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Q_.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function ey(t,e,n){const r=J_(Z_(t.path),n),s=W(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ty(t,e){const n=[],r=new Map;e=zo({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const E=!m,R=jo(d);R.aliasOf=m&&m.record;const F=zo(e,d),D=[R];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const J of k)D.push(jo(W({},R,{components:m?m.record.components:R.components,path:J,aliasOf:m?m.record:R})))}let O,x;for(const k of D){const{path:J}=k;if(p&&J[0]!=="/"){const ie=p.record.path,te=ie[ie.length-1]==="/"?"":"/";k.path=p.record.path+(J&&te+J)}if(O=ey(k,p,F),m?m.alias.push(O):(x=x||O,x!==O&&x.alias.push(O),E&&d.name&&!Wo(O)&&o(d.name)),Ol(O)&&c(O),R.children){const ie=R.children;for(let te=0;te<ie.length;te++)i(ie[te],O,m&&m.children[te])}m=m||O}return x?()=>{o(x)}:kn}function o(d){if(Al(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const p=sy(d,n);n.splice(p,0,d),d.record.name&&!Wo(d)&&r.set(d.record.name,d)}function l(d,p){let m,E={},R,F;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw fn(1,{location:d});F=m.record.name,E=W(Vo(p.params,m.keys.filter(x=>!x.optional).concat(m.parent?m.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&Vo(d.params,m.keys.map(x=>x.name))),R=m.stringify(E)}else if(d.path!=null)R=d.path,m=n.find(x=>x.re.test(R)),m&&(E=m.parse(R),F=m.record.name);else{if(m=p.name?r.get(p.name):n.find(x=>x.re.test(p.path)),!m)throw fn(1,{location:d,currentLocation:p});F=m.record.name,E=W({},p.params,d.params),R=m.stringify(E)}const D=[];let O=m;for(;O;)D.unshift(O.record),O=O.parent;return{name:F,path:R,params:E,matched:D,meta:ry(D)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Vo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ny(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ny(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Wo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ry(t){return t.reduce((e,n)=>W(e,n.meta),{})}function zo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function sy(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Pl(t,e[i])<0?r=i:n=i+1}const s=iy(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function iy(t){let e=t;for(;e=e.parent;)if(Ol(e)&&Pl(t,e)===0)return e}function Ol({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function oy(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(vl," "),o=i.indexOf("="),a=Bn(o<0?i:i.slice(0,o)),c=o<0?null:Bn(i.slice(o+1));if(a in e){let l=e[a];ke(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ko(t){let e="";for(let n in t){const r=t[n];if(n=C_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ke(r)?r.map(i=>i&&ks(i)):[r&&ks(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ay(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const cy=Symbol(""),qo=Symbol(""),yi=Symbol(""),kl=Symbol(""),Ns=Symbol("");function yn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(fn(4,{from:n,to:e})):p instanceof Error?c(p):K_(p)?c(fn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(p=>c(p))})}function ls(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(bl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(wt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=g_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&wt(m,n,r,o,a,s)()}))}}return i}function Go(t){const e=st(yi),n=st(kl),r=Ce(()=>{const c=rn(t.to);return e.resolve(c)}),s=Ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(un.bind(null,u));if(p>-1)return p;const m=Jo(c[l-2]);return l>1&&Jo(u)===m&&d[d.length-1].path!==m?d.findIndex(un.bind(null,c[l-2])):p}),i=Ce(()=>s.value>-1&&hy(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&Sl(n.params,r.value.params));function a(c={}){if(dy(c)){const l=e[rn(t.replace)?"replace":"push"](rn(t.to)).catch(kn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function ly(t){return t.length===1?t[0]:t}const uy=zc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Go,setup(t,{slots:e}){const n=Mr(Go(t)),{options:r}=st(yi),s=Ce(()=>({[Yo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&ly(e.default(n));return t.custom?i:_l("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),fy=uy;function dy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hy(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ke(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Jo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yo=(t,e,n)=>t??e??n,py=zc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=st(Ns),s=Ce(()=>t.route||r.value),i=st(qo,0),o=Ce(()=>{let l=rn(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Ce(()=>s.value.matched[o.value]);ir(qo,Ce(()=>o.value+1)),ir(cy,a),ir(Ns,s);const c=bg();return or(()=>[c.value,a.value,t.name],([l,u,d],[p,m,E])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!un(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return Xo(n.default,{Component:p,route:l});const m=d.props[u],E=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=_l(p,W({},E,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Xo(n.default,{Component:F,route:l})||F}}});function Xo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gy=py;function my(t){const e=ty(t.routes,t),n=t.parseQuery||oy,r=t.stringifyQuery||Ko,s=t.history,i=yn(),o=yn(),a=yn(),c=wg(_t);let l=_t;Yt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=as.bind(null,y=>""+y),d=as.bind(null,R_),p=as.bind(null,Bn);function m(y,P){let C,N;return Al(y)?(C=e.getRecordMatcher(y),N=P):N=y,e.addRoute(N,C)}function E(y){const P=e.getRecordMatcher(y);P&&e.removeRoute(P)}function R(){return e.getRoutes().map(y=>y.record)}function F(y){return!!e.getRecordMatcher(y)}function D(y,P){if(P=W({},P||c.value),typeof y=="string"){const g=cs(n,y,P.path),_=e.resolve({path:g.path},P),w=s.createHref(g.fullPath);return W(g,_,{params:p(_.params),hash:Bn(g.hash),redirectedFrom:void 0,href:w})}let C;if(y.path!=null)C=W({},y,{path:cs(n,y.path,P.path).path});else{const g=W({},y.params);for(const _ in g)g[_]==null&&delete g[_];C=W({},y,{params:d(g)}),P.params=d(P.params)}const N=e.resolve(C,P),Y=y.hash||"";N.params=u(p(N.params));const f=k_(r,W({},y,{hash:S_(Y),path:N.path})),h=s.createHref(f);return W({fullPath:f,hash:Y,query:r===Ko?ay(y.query):y.query||{}},N,{redirectedFrom:void 0,href:h})}function O(y){return typeof y=="string"?cs(n,y,c.value.path):W({},y)}function x(y,P){if(l!==y)return fn(8,{from:P,to:y})}function k(y){return te(y)}function J(y){return k(W(O(y),{replace:!0}))}function ie(y){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let N=typeof C=="function"?C(y):C;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=O(N):{path:N},N.params={}),W({query:y.query,hash:y.hash,params:N.path!=null?{}:y.params},N)}}function te(y,P){const C=l=D(y),N=c.value,Y=y.state,f=y.force,h=y.replace===!0,g=ie(C);if(g)return te(W(O(g),{state:typeof g=="object"?W({},Y,g.state):Y,force:f,replace:h}),P||C);const _=C;_.redirectedFrom=P;let w;return!f&&D_(r,N,C)&&(w=fn(16,{to:_,from:N}),Me(N,N,!0,!1)),(w?Promise.resolve(w):Ne(_,N)).catch(b=>Xe(b)?Xe(b,2)?b:gt(b):j(b,_,N)).then(b=>{if(b){if(Xe(b,2))return te(W({replace:h},O(b.to),{state:typeof b.to=="object"?W({},Y,b.to.state):Y,force:f}),P||_)}else b=Ot(_,N,!0,h,Y);return pt(_,N,b),b})}function De(y,P){const C=x(y,P);return C?Promise.reject(C):Promise.resolve()}function ht(y){const P=qt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(y):y()}function Ne(y,P){let C;const[N,Y,f]=_y(y,P);C=ls(N.reverse(),"beforeRouteLeave",y,P);for(const g of N)g.leaveGuards.forEach(_=>{C.push(wt(_,y,P))});const h=De.bind(null,y,P);return C.push(h),Te(C).then(()=>{C=[];for(const g of i.list())C.push(wt(g,y,P));return C.push(h),Te(C)}).then(()=>{C=ls(Y,"beforeRouteUpdate",y,P);for(const g of Y)g.updateGuards.forEach(_=>{C.push(wt(_,y,P))});return C.push(h),Te(C)}).then(()=>{C=[];for(const g of f)if(g.beforeEnter)if(ke(g.beforeEnter))for(const _ of g.beforeEnter)C.push(wt(_,y,P));else C.push(wt(g.beforeEnter,y,P));return C.push(h),Te(C)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),C=ls(f,"beforeRouteEnter",y,P,ht),C.push(h),Te(C))).then(()=>{C=[];for(const g of o.list())C.push(wt(g,y,P));return C.push(h),Te(C)}).catch(g=>Xe(g,8)?g:Promise.reject(g))}function pt(y,P,C){a.list().forEach(N=>ht(()=>N(y,P,C)))}function Ot(y,P,C,N,Y){const f=x(y,P);if(f)return f;const h=P===_t,g=Yt?history.state:{};C&&(N||h?s.replace(y.fullPath,W({scroll:h&&g&&g.scroll},Y)):s.push(y.fullPath,Y)),c.value=y,Me(y,P,C,h),gt()}let xe;function pn(){xe||(xe=s.listen((y,P,C)=>{if(!Jn.listening)return;const N=D(y),Y=ie(N);if(Y){te(W(Y,{replace:!0,force:!0}),N).catch(kn);return}l=N;const f=c.value;Yt&&B_(Uo(f.fullPath,C.delta),Br()),Ne(N,f).catch(h=>Xe(h,12)?h:Xe(h,2)?(te(W(O(h.to),{force:!0}),N).then(g=>{Xe(g,20)&&!C.delta&&C.type===Hn.pop&&s.go(-1,!1)}).catch(kn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),j(h,N,f))).then(h=>{h=h||Ot(N,f,!1),h&&(C.delta&&!Xe(h,8)?s.go(-C.delta,!1):C.type===Hn.pop&&Xe(h,20)&&s.go(-1,!1)),pt(N,f,h)}).catch(kn)}))}let zt=yn(),se=yn(),G;function j(y,P,C){gt(y);const N=se.list();return N.length?N.forEach(Y=>Y(y,P,C)):console.error(y),Promise.reject(y)}function Je(){return G&&c.value!==_t?Promise.resolve():new Promise((y,P)=>{zt.add([y,P])})}function gt(y){return G||(G=!y,pn(),zt.list().forEach(([P,C])=>y?C(y):P()),zt.reset()),y}function Me(y,P,C,N){const{scrollBehavior:Y}=t;if(!Yt||!Y)return Promise.resolve();const f=!C&&H_(Uo(y.fullPath,0))||(N||!C)&&history.state&&history.state.scroll||null;return Bc().then(()=>Y(y,P,f)).then(h=>h&&$_(h)).catch(h=>j(h,y,P))}const pe=y=>s.go(y);let Kt;const qt=new Set,Jn={currentRoute:c,listening:!0,addRoute:m,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:R,resolve:D,options:t,push:k,replace:J,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Je,install(y){const P=this;y.component("RouterLink",fy),y.component("RouterView",gy),y.config.globalProperties.$router=P,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>rn(c)}),Yt&&!Kt&&c.value===_t&&(Kt=!0,k(s.location).catch(Y=>{}));const C={};for(const Y in _t)Object.defineProperty(C,Y,{get:()=>c.value[Y],enumerable:!0});y.provide(yi,P),y.provide(kl,Mc(C)),y.provide(Ns,c);const N=y.unmount;qt.add(y),y.unmount=function(){qt.delete(y),qt.size<1&&(l=_t,xe&&xe(),xe=null,c.value=_t,Kt=!1,G=!1),N()}}};function Te(y){return y.reduce((P,C)=>P.then(()=>ht(C)),Promise.resolve())}return Jn}function _y(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>un(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>un(l,c))||s.push(c))}return[n,r,s]}const yy=[{path:"/",redirect:"/home",component:()=>er(()=>import("./Index-Du_NVZ1t.js"),[]),children:[{path:"home",component:()=>er(()=>import("./Index-B7_opoCY.js"),[])},{path:"market",component:()=>er(()=>import("./Index-fSU4RWfo.js"),[])},{path:"info",component:()=>er(()=>import("./Index-Dtmsyg5e.js"),[])}]}],by=my({history:z_(),routes:yy}),wy=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},vy={};function Iy(t,e){const n=Kg("RouterView");return Em(),Cm("main",null,[Ie(n)])}const Ey=wy(vy,[["render",Iy]]);id(Fp,t=>{console.log(t)});const Dl=u_(Ey);Dl.use(by);Dl.mount("#app");export{wy as _,pl as a,Ty as b,Cm as c,Em as o,Mr as r,Xp as t,rn as u};
