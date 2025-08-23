const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Ct2xEi6j.js","assets/kingdom-IWM-b4wZ.js","assets/community-CVqu_W9m.js","assets/business-CVqu_W9m.js","assets/store-CykOVnSA.js","assets/shop-BBDzb5zf.js","assets/pro-D54ynLlh.js","assets/me-Bs0DscN0.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Tf=()=>{};var Io={};/**
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
 */const dc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Rf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Af;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Af extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cf=function(t){const e=dc(t);return hc.encodeByteArray(e,!0)},pc=function(t){return Cf(t).replace(/\./g,"")},mc=function(t){try{return hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Of=()=>Pf().__FIREBASE_DEFAULTS__,kf=()=>{if(typeof process>"u"||typeof Io>"u")return;const t=Io.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mc(t[1]);return e&&JSON.parse(e)},Ci=()=>{try{return Tf()||Of()||kf()||xf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nf=t=>Ci()?.emulatorHosts?.[t],gc=()=>Ci()?.config,yc=t=>Ci()?.[`_${t}`];/**
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
 */class Df{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ts(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lf(t){return(await fetch(t,{credentials:"include"})).ok}const Bn={};function Mf(){const t={prod:[],emulator:[]};for(const e of Object.keys(Bn))Bn[e]?t.emulator.push(e):t.prod.push(e);return t}function Uf(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vo=!1;function Ff(t,e){if(typeof window>"u"||typeof document>"u"||!ts(window.location.host)||Bn[t]===e||Bn[t]||vo)return;Bn[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=Mf().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,m){d.setAttribute("width","24"),d.setAttribute("id",m),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{vo=!0,o()},d}function u(d,m){d.setAttribute("id",m),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=Uf(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),S=document.getElementById(b)||document.createElement("a"),A=n("preprendIcon"),R=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const O=d.element;a(O),u(S,b);const D=l();c(R,A),O.append(R,y,S,D),document.body.appendChild(O)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function $f(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _c(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hf(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bc(){try{return typeof indexedDB=="object"}catch{return!1}}function wc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function Vf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Wf="FirebaseError";class ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wf,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ot(s,a,r)}}function qf(t,e){return t.replace(zf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zf=/\{\$([^}]+)}/g;function Kf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function en(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(So(i)&&So(o)){if(!en(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function So(t){return t!==null&&typeof t=="object"}/**
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
 */function lr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gf(t,e){const n=new Jf(t,e);return n.subscribe.bind(n)}class Jf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ss),s.error===void 0&&(s.error=Ss),s.complete===void 0&&(s.complete=Ss);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ss(){}/**
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
 */const Xf=1e3,Qf=2,Zf=14400*1e3,ed=.5;function To(t,e=Xf,n=Qf){const r=e*Math.pow(n,t),s=Math.round(ed*r*(Math.random()-.5)*2);return Math.min(Zf,r+s)}/**
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
 */function It(t){return t&&t._delegate?t._delegate:t}class st{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class td{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Df;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rd(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nd(t){return t===qt?void 0:t}function rd(t){return t.instantiationMode==="EAGER"}/**
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
 */class sd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new td(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const id={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},od=re.INFO,ad={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},cd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ad[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pi{constructor(e){this.name=e,this._logLevel=od,this._logHandler=cd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const ld=(t,e)=>e.some(n=>t instanceof n);let Ro,Ao;function ud(){return Ro||(Ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fd(){return Ao||(Ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ec=new WeakMap,Xs=new WeakMap,Ic=new WeakMap,Ts=new WeakMap,Oi=new WeakMap;function dd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ft(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ec.set(n,t)}).catch(()=>{}),Oi.set(e,t),e}function hd(t){if(Xs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xs.set(t,e)}let Qs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ic.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pd(t){Qs=t(Qs)}function md(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rs(this),e,...n);return Ic.set(r,e.sort?e.sort():[e]),Ft(r)}:fd().includes(t)?function(...e){return t.apply(Rs(this),e),Ft(Ec.get(this))}:function(...e){return Ft(t.apply(Rs(this),e))}}function gd(t){return typeof t=="function"?md(t):(t instanceof IDBTransaction&&hd(t),ld(t,ud())?new Proxy(t,Qs):t)}function Ft(t){if(t instanceof IDBRequest)return dd(t);if(Ts.has(t))return Ts.get(t);const e=gd(t);return e!==t&&(Ts.set(t,e),Oi.set(e,t)),e}const Rs=t=>Oi.get(t);function vc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ft(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const yd=["get","getKey","getAll","getAllKeys","count"],_d=["put","add","delete","clear"],As=new Map;function Co(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(As.get(e))return As.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_d.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return As.set(e,i),i}pd(t=>({...t,get:(e,n,r)=>Co(e,n)||t.get(e,n,r),has:(e,n)=>!!Co(e,n)||t.has(e,n)}));/**
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
 */class bd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wd(t){return t.getComponent()?.type==="VERSION"}const Zs="@firebase/app",Po="0.14.1";/**
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
 */const gt=new Pi("@firebase/app"),Ed="@firebase/app-compat",Id="@firebase/analytics-compat",vd="@firebase/analytics",Sd="@firebase/app-check-compat",Td="@firebase/app-check",Rd="@firebase/auth",Ad="@firebase/auth-compat",Cd="@firebase/database",Pd="@firebase/data-connect",Od="@firebase/database-compat",kd="@firebase/functions",xd="@firebase/functions-compat",Nd="@firebase/installations",Dd="@firebase/installations-compat",Ld="@firebase/messaging",Md="@firebase/messaging-compat",Ud="@firebase/performance",Fd="@firebase/performance-compat",Bd="@firebase/remote-config",$d="@firebase/remote-config-compat",jd="@firebase/storage",Hd="@firebase/storage-compat",Vd="@firebase/firestore",Wd="@firebase/ai",qd="@firebase/firestore-compat",zd="firebase",Kd="12.1.0";/**
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
 */const ei="[DEFAULT]",Gd={[Zs]:"fire-core",[Ed]:"fire-core-compat",[vd]:"fire-analytics",[Id]:"fire-analytics-compat",[Td]:"fire-app-check",[Sd]:"fire-app-check-compat",[Rd]:"fire-auth",[Ad]:"fire-auth-compat",[Cd]:"fire-rtdb",[Pd]:"fire-data-connect",[Od]:"fire-rtdb-compat",[kd]:"fire-fn",[xd]:"fire-fn-compat",[Nd]:"fire-iid",[Dd]:"fire-iid-compat",[Ld]:"fire-fcm",[Md]:"fire-fcm-compat",[Ud]:"fire-perf",[Fd]:"fire-perf-compat",[Bd]:"fire-rc",[$d]:"fire-rc-compat",[jd]:"fire-gcs",[Hd]:"fire-gcs-compat",[Vd]:"fire-fst",[qd]:"fire-fst-compat",[Wd]:"fire-vertex","fire-js":"fire-js",[zd]:"fire-js-all"};/**
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
 */const Ur=new Map,Jd=new Map,ti=new Map;function Oo(t,e){try{t.container.addComponent(e)}catch(n){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yt(t){const e=t.name;if(ti.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;ti.set(e,t);for(const n of Ur.values())Oo(n,t);for(const n of Jd.values())Oo(n,t);return!0}function Pn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Yd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new cn("app","Firebase",Yd);/**
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
 */class Xd{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=Kd;function Sc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ei,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(n||(n=gc()),!n)throw Bt.create("no-options");const i=Ur.get(s);if(i){if(en(n,i.options)&&en(r,i.config))return i;throw Bt.create("duplicate-app",{appName:s})}const o=new sd(s);for(const c of ti.values())o.addComponent(c);const a=new Xd(n,r,o);return Ur.set(s,a),a}function Tc(t=ei){const e=Ur.get(t);if(!e&&t===ei&&gc())return Sc();if(!e)throw Bt.create("no-app",{appName:t});return e}function et(t,e,n){let r=Gd[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(o.join(" "));return}yt(new st(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Qd="firebase-heartbeat-database",Zd=1,Zn="firebase-heartbeat-store";let Cs=null;function Rc(){return Cs||(Cs=vc(Qd,Zd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bt.create("idb-open",{originalErrorMessage:t.message})})),Cs}async function eh(t){try{const n=(await Rc()).transaction(Zn),r=await n.objectStore(Zn).get(Ac(t));return await n.done,r}catch(e){if(e instanceof ot)gt.warn(e.message);else{const n=Bt.create("idb-get",{originalErrorMessage:e?.message});gt.warn(n.message)}}}async function ko(t,e){try{const r=(await Rc()).transaction(Zn,"readwrite");await r.objectStore(Zn).put(e,Ac(t)),await r.done}catch(n){if(n instanceof ot)gt.warn(n.message);else{const r=Bt.create("idb-set",{originalErrorMessage:n?.message});gt.warn(r.message)}}}function Ac(t){return`${t.name}!${t.options.appId}`}/**
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
 */const th=1024,nh=30;class rh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ih(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>nh){const s=oh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){gt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xo(),{heartbeatsToSend:n,unsentEntries:r}=sh(this._heartbeatsCache.heartbeats),s=pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return gt.warn(e),""}}}function xo(){return new Date().toISOString().substring(0,10)}function sh(t,e=th){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),No(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),No(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ih{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bc()?wc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eh(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ko(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ko(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function No(t){return pc(JSON.stringify({version:2,heartbeats:t})).length}function oh(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function ah(t){yt(new st("platform-logger",e=>new bd(e),"PRIVATE")),yt(new st("heartbeat",e=>new rh(e),"PRIVATE")),et(Zs,Po,t),et(Zs,Po,"esm2020"),et("fire-js","")}ah("");var ch="firebase",lh="12.1.0";/**
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
 */et(ch,lh,"app");function Cc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uh=Cc,Pc=new cn("auth","Firebase",Cc());/**
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
 */const Fr=new Pi("@firebase/auth");function fh(t,...e){Fr.logLevel<=re.WARN&&Fr.warn(`Auth (${ur}): ${t}`,...e)}function Rr(t,...e){Fr.logLevel<=re.ERROR&&Fr.error(`Auth (${ur}): ${t}`,...e)}/**
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
 */function _t(t,...e){throw ki(t,...e)}function tt(t,...e){return ki(t,...e)}function Oc(t,e,n){const r={...uh(),[e]:n};return new cn("auth","Firebase",r).create(e,{appName:t.name})}function Jt(t){return Oc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ki(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pc.create(t,...e)}function $(t,e,...n){if(!t)throw ki(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rr(e),new Error(e)}function bt(t,e){t||pt(e)}/**
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
 */function ni(){return typeof self<"u"&&self.location?.href||""}function dh(){return Do()==="http:"||Do()==="https:"}function Do(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function hh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dh()||_c()||"connection"in navigator)?navigator.onLine:!0}function ph(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fr{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Bf()||jf()}get(){return hh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xi(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yh=new fr(3e4,6e4);function Ni(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function On(t,e,n,r,s={}){return xc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=lr({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return $f()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&ts(t.emulatorConfig.host)&&(l.credentials="include"),kc.fetch()(await Nc(t,t.config.apiHost,n,a),l)})}async function xc(t,e,n){t._canInitEmulator=!1;const r={...mh,...e};try{const s=new bh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Er(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Er(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Er(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Er(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Oc(t,u,l);_t(t,u)}}catch(s){if(s instanceof ot)throw s;_t(t,"network-request-failed",{message:String(s)})}}async function _h(t,e,n,r,s={}){const i=await On(t,e,n,r,s);return"mfaPendingCredential"in i&&_t(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Nc(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?xi(t.config,s):`${t.config.apiScheme}://${s}`;return gh.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class bh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),yh.get())})}}function Er(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function wh(t,e){return On(t,"POST","/v1/accounts:delete",e)}async function Br(t,e){return On(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $n(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Eh(t,e=!1){const n=It(t),r=await n.getIdToken(e),s=Di(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:$n(Ps(s.auth_time)),issuedAtTime:$n(Ps(s.iat)),expirationTime:$n(Ps(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ps(t){return Number(t)*1e3}function Di(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=mc(n);return s?JSON.parse(s):(Rr("Failed to decode base64 JWT payload"),null)}catch(s){return Rr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Lo(t){const e=Di(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function er(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ot&&Ih(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ih({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ri{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $r(t){const e=t.auth,n=await t.getIdToken(),r=await er(t,Br(e,{idToken:n}));$(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Dc(s.providerUserInfo):[],o=Th(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ri(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function Sh(t){const e=It(t);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Th(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Dc(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Rh(t,e){const n=await xc(t,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Nc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&ts(t.emulatorConfig.host)&&(c.credentials="include"),kc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ah(t,e){return On(t,"POST","/v2/accounts:revokeToken",Ni(t,e))}/**
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
 */class yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Lo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Rh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new yn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yn,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function Rt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Be{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new vh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ri(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await er(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Eh(this,e)}reload(){return Sh(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Be({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(Jt(this.auth));const e=await this.getIdToken();return await er(this,wh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:m,providerData:y,stsTokenManager:b}=n;$(f&&b,e,"internal-error");const S=yn.fromJSON(this.name,b);$(typeof f=="string",e,"internal-error"),Rt(r,e.name),Rt(s,e.name),$(typeof d=="boolean",e,"internal-error"),$(typeof m=="boolean",e,"internal-error"),Rt(i,e.name),Rt(o,e.name),Rt(a,e.name),Rt(c,e.name),Rt(l,e.name),Rt(u,e.name);const A=new Be({uid:f,auth:e,email:s,emailVerified:d,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:S,createdAt:l,lastLoginAt:u});return y&&Array.isArray(y)&&(A.providerData=y.map(R=>({...R}))),c&&(A._redirectEventId=c),A}static async _fromIdTokenResponse(e,n,r=!1){const s=new yn;s.updateFromServerResponse(n);const i=new Be({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $r(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new yn;a.updateFromIdToken(r);const c=new Be({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ri(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const Mo=new Map;function mt(t){bt(t instanceof Function,"Expected a class definition");let e=Mo.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mo.set(t,e),e)}/**
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
 */class Lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lc.type="NONE";const Uo=Lc;/**
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
 */function Ar(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ar(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ar("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Br(this.auth,{idToken:e}).catch(()=>{});return n?Be._fromGetAccountInfoResponse(this.auth,n,e):null}return Be._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(mt(Uo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||mt(Uo);const o=Ar(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await Br(e,{idToken:u}).catch(()=>{});if(!d)break;f=await Be._fromGetAccountInfoResponse(e,d,u)}else f=Be._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _n(i,e,r))}}/**
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
 */function Fo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jc(e))return"Blackberry";if(Hc(e))return"Webos";if(Uc(e))return"Safari";if((e.includes("chrome/")||Fc(e))&&!e.includes("edge/"))return"Chrome";if($c(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Mc(t=Ie()){return/firefox\//i.test(t)}function Uc(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fc(t=Ie()){return/crios\//i.test(t)}function Bc(t=Ie()){return/iemobile/i.test(t)}function $c(t=Ie()){return/android/i.test(t)}function jc(t=Ie()){return/blackberry/i.test(t)}function Hc(t=Ie()){return/webos/i.test(t)}function Li(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ch(t=Ie()){return Li(t)&&!!window.navigator?.standalone}function Ph(){return Hf()&&document.documentMode===10}function Vc(t=Ie()){return Li(t)||$c(t)||Hc(t)||jc(t)||/windows phone/i.test(t)||Bc(t)}/**
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
 */function Wc(t,e=[]){let n;switch(t){case"Browser":n=Fo(Ie());break;case"Worker":n=`${Fo(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${r}`}/**
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
 */class Oh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function kh(t,e={}){return On(t,"GET","/v2/passwordPolicy",Ni(t,e))}/**
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
 */const xh=6;class Nh{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xh,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Dh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bo(this),this.idTokenSubscription=new Bo(this),this.beforeStateQueue=new Oh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Br(this,{idToken:e}),r=await Be._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(dt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ph()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(Jt(this));const n=e?It(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(Jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(Jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kh(this),n=new Nh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ah(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&fh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Mi(t){return It(t)}class Bo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gf(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ui={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lh(t){Ui=t}function Mh(t){return Ui.loadJS(t)}function Uh(){return Ui.gapiScript}function Fh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Bh(t,e){const n=Pn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(en(i,e??{}))return s;_t(s,"already-initialized")}return n.initialize({options:e})}function $h(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(mt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function jh(t,e,n){const r=Mi(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qc(e),{host:o,port:a}=Hh(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(en(l,r.config.emulator)&&en(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ts(o)?(Lf(`${i}//${o}${c}`),Ff("Auth",!0)):Vh()}function qc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hh(t){const e=qc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$o(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$o(o)}}}function $o(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
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
 */async function bn(t,e){return _h(t,"POST","/v1/accounts:signInWithIdp",Ni(t,e))}/**
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
 */const Wh="http://localhost";class tn extends zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new tn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bn(e,n)}buildRequest(){const e={requestUri:Wh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lr(n)}return e}}/**
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
 */class Kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dr extends Kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nt extends dr{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
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
 */class Dt extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
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
 */class Lt extends dr{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
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
 */class Mt extends dr{constructor(){super("twitter.com")}static credential(e,n){return tn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */class Sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Be._fromIdTokenResponse(e,r,s),o=jo(r);return new Sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jo(r);return new Sn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class jr extends ot{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jr(e,n,r,s)}}function Gc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jr._fromErrorAndOperation(t,i,e,r):i})}async function qh(t,e,n=!1){const r=await er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sn._forOperation(t,"link",r)}/**
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
 */async function zh(t,e,n=!1){const{auth:r}=t;if(dt(r.app))return Promise.reject(Jt(r));const s="reauthenticate";try{const i=await er(t,Gc(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Di(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Sn._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&_t(r,"user-mismatch"),i}}/**
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
 */async function Kh(t,e,n=!1){if(dt(t.app))return Promise.reject(Jt(t));const r="signIn",s=await Gc(t,r,e),i=await Sn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Gh(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function Jh(t,e,n){return It(t).beforeAuthStateChanged(e,n)}function Yh(t,e,n,r){return It(t).onAuthStateChanged(e,n,r)}const Hr="__sak";/**
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
 */class Jc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Xh=1e3,Qh=10;class Yc extends Jc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ph()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Qh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yc.type="LOCAL";const Zh=Yc;/**
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
 */class Xc extends Jc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xc.type="SESSION";const Qc=Xc;/**
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
 */function ep(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await ep(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ns.receivers=[];/**
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
 */function Fi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Fi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function np(t){nt().location.href=t}/**
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
 */function Zc(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function rp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sp(){return navigator?.serviceWorker?.controller||null}function ip(){return Zc()?self:null}/**
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
 */const el="firebaseLocalStorageDb",op=1,Vr="firebaseLocalStorage",tl="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rs(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function ap(){const t=indexedDB.deleteDatabase(el);return new hr(t).toPromise()}function si(){const t=indexedDB.open(el,op);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vr,{keyPath:tl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vr)?e(r):(r.close(),await ap(),e(await si()))})})}async function Ho(t,e,n){const r=rs(t,!0).put({[tl]:e,value:n});return new hr(r).toPromise()}async function cp(t,e){const n=rs(t,!1).get(e),r=await new hr(n).toPromise();return r===void 0?null:r.value}function Vo(t,e){const n=rs(t,!0).delete(e);return new hr(n).toPromise()}const lp=800,up=3;class nl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await si(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>up)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ns._getInstance(ip()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await rp(),!this.activeServiceWorker)return;this.sender=new tp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await si();return await Ho(e,Hr,"1"),await Vo(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ho(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rs(s,!1).getAll();return new hr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nl.type="LOCAL";const fp=nl;new fr(3e4,6e4);/**
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
 */function dp(t,e){return e?mt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bi extends zc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hp(t){return Kh(t.auth,new Bi(t),t.bypassAuthState)}function pp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),zh(n,new Bi(t),t.bypassAuthState)}async function mp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),qh(n,new Bi(t),t.bypassAuthState)}/**
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
 */class rl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hp;case"linkViaPopup":case"linkViaRedirect":return mp;case"reauthViaPopup":case"reauthViaRedirect":return pp;default:_t(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gp=new fr(2e3,1e4);class gn extends rl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Fi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gp.get())};e()}}gn.currentPopupAction=null;/**
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
 */const yp="pendingRedirect",Cr=new Map;class _p extends rl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cr.get(this.auth._key());if(!e){try{const r=await bp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cr.set(this.auth._key(),e)}return this.bypassAuthState||Cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bp(t,e){const n=Ip(e),r=Ep(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wp(t,e){Cr.set(t._key(),e)}function Ep(t){return mt(t._redirectPersistence)}function Ip(t){return Ar(yp,t.config.apiKey,t.name)}async function vp(t,e,n=!1){if(dt(t.app))return Promise.reject(Jt(t));const r=Mi(t),s=dp(r,e),o=await new _p(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Sp=600*1e3;class Tp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!sl(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(tt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wo(e))}saveEventToCache(e){this.cachedEventUids.add(Wo(e)),this.lastProcessedEventTime=Date.now()}}function Wo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sl({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Rp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sl(t);default:return!1}}/**
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
 */async function Ap(t,e={}){return On(t,"GET","/v1/projects",e)}/**
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
 */const Cp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pp=/^https?/;async function Op(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ap(t);for(const n of e)try{if(kp(n))return}catch{}_t(t,"unauthorized-domain")}function kp(t){const e=ni(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Pp.test(n))return!1;if(Cp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xp=new fr(3e4,6e4);function qo(){const t=nt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Np(t){return new Promise((e,n)=>{function r(){qo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qo(),n(tt(t,"network-request-failed"))},timeout:xp.get()})}if(nt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(nt().gapi?.load)r();else{const s=Fh("iframefcb");return nt()[s]=()=>{gapi.load?r():n(tt(t,"network-request-failed"))},Mh(`${Uh()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Pr=null,e})}let Pr=null;function Dp(t){return Pr=Pr||Np(t),Pr}/**
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
 */const Lp=new fr(5e3,15e3),Mp="__/auth/iframe",Up="emulator/auth/iframe",Fp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $p(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xi(e,Up):`https://${t.config.authDomain}/${Mp}`,r={apiKey:e.apiKey,appName:t.name,v:ur},s=Bp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lr(r).slice(1)}`}async function jp(t){const e=await Dp(t),n=nt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:$p(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},Lp.get());function c(){nt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Hp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vp=500,Wp=600,qp="_blank",zp="http://localhost";class zo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kp(t,e,n,r=Vp,s=Wp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...Hp,width:r.toString(),height:s.toString(),top:i,left:o},l=Ie().toLowerCase();n&&(a=Fc(l)?qp:n),Mc(l)&&(e=e||zp,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(Ch(l)&&a!=="_self")return Gp(e||"",a),new zo(null);const f=window.open(e||"",a,u);$(f,t,"popup-blocked");try{f.focus()}catch{}return new zo(f)}function Gp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Jp="__/auth/handler",Yp="emulator/auth/handler",Xp=encodeURIComponent("fac");async function Ko(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ur,eventId:s};if(e instanceof Kc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof dr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Xp}=${encodeURIComponent(c)}`:"";return`${Qp(t)}?${lr(a).slice(1)}${l}`}function Qp({config:t}){return t.emulator?xi(t,Yp):`https://${t.authDomain}/${Jp}`}/**
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
 */const Os="webStorageSupport";class Zp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qc,this._completeRedirectFn=vp,this._overrideRedirectResult=wp}async _openPopup(e,n,r,s){bt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Ko(e,n,r,ni(),s);return Kp(e,i,Fi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ko(e,n,r,ni(),s);return np(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jp(e),r=new Tp(e);return n.register("authEvent",s=>($(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Os,{type:Os},s=>{const i=s?.[0]?.[Os];i!==void 0&&n(!!i),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Op(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vc()||Uc()||Li()}}const em=Zp;var Go="@firebase/auth",Jo="1.11.0";/**
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
 */class tm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rm(t){yt(new st("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wc(t)},l=new Dh(r,s,i,c);return $h(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yt(new st("auth-internal",e=>{const n=Mi(e.getProvider("auth").getImmediate());return(r=>new tm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Go,Jo,nm(t)),et(Go,Jo,"esm2020")}/**
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
 */const sm=300,im=yc("authIdTokenMaxAge")||sm;let Yo=null;const om=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>im)return;const s=n?.token;Yo!==s&&(Yo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function am(t=Tc()){const e=Pn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bh(t,{popupRedirectResolver:em,persistence:[fp,Zh,Qc]}),r=yc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=om(i.toString());Jh(n,o,()=>o(n.currentUser)),Gh(n,a=>o(a))}}const s=Nf("auth");return s&&jh(n,`http://${s}`),n}function cm(){return document.getElementsByTagName("head")?.[0]??document}Lh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rm("Browser");const il="@firebase/installations",$i="0.6.19";/**
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
 */const ol=1e4,al=`w:${$i}`,cl="FIS_v2",lm="https://firebaseinstallations.googleapis.com/v1",um=3600*1e3,fm="installations",dm="Installations";/**
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
 */const hm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nn=new cn(fm,dm,hm);function ll(t){return t instanceof ot&&t.code.includes("request-failed")}/**
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
 */function ul({projectId:t}){return`${lm}/projects/${t}/installations`}function fl(t){return{token:t.token,requestStatus:2,expiresIn:mm(t.expiresIn),creationTime:Date.now()}}async function dl(t,e){const r=(await e.json()).error;return nn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hl({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function pm(t,{refreshToken:e}){const n=hl(t);return n.append("Authorization",gm(e)),n}async function pl(t){const e=await t();return e.status>=500&&e.status<600?t():e}function mm(t){return Number(t.replace("s","000"))}function gm(t){return`${cl} ${t}`}/**
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
 */async function ym({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ul(t),s=hl(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:cl,appId:t.appId,sdkVersion:al},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await pl(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:fl(l.authToken)}}else throw await dl("Create Installation",c)}/**
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
 */function ml(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function _m(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const bm=/^[cdef][\w-]{21}$/,ii="";function wm(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Em(t);return bm.test(n)?n:ii}catch{return ii}}function Em(t){return _m(t).substr(0,22)}/**
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
 */function ss(t){return`${t.appName}!${t.appId}`}/**
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
 */const gl=new Map;function yl(t,e){const n=ss(t);_l(n,e),Im(n,e)}function _l(t,e){const n=gl.get(t);if(n)for(const r of n)r(e)}function Im(t,e){const n=vm();n&&n.postMessage({key:t,fid:e}),Sm()}let Kt=null;function vm(){return!Kt&&"BroadcastChannel"in self&&(Kt=new BroadcastChannel("[Firebase] FID Change"),Kt.onmessage=t=>{_l(t.data.key,t.data.fid)}),Kt}function Sm(){gl.size===0&&Kt&&(Kt.close(),Kt=null)}/**
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
 */const Tm="firebase-installations-database",Rm=1,rn="firebase-installations-store";let ks=null;function ji(){return ks||(ks=vc(Tm,Rm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rn)}}})),ks}async function Wr(t,e){const n=ss(t),s=(await ji()).transaction(rn,"readwrite"),i=s.objectStore(rn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&yl(t,e.fid),e}async function bl(t){const e=ss(t),r=(await ji()).transaction(rn,"readwrite");await r.objectStore(rn).delete(e),await r.done}async function is(t,e){const n=ss(t),s=(await ji()).transaction(rn,"readwrite"),i=s.objectStore(rn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&yl(t,a.fid),a}/**
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
 */async function Hi(t){let e;const n=await is(t.appConfig,r=>{const s=Am(r),i=Cm(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ii?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Am(t){const e=t||{fid:wm(),registrationStatus:0};return wl(e)}function Cm(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(nn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Pm(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Om(t)}:{installationEntry:e}}async function Pm(t,e){try{const n=await ym(t,e);return Wr(t.appConfig,n)}catch(n){throw ll(n)&&n.customData.serverCode===409?await bl(t.appConfig):await Wr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Om(t){let e=await Xo(t.appConfig);for(;e.registrationStatus===1;)await ml(100),e=await Xo(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hi(t);return r||n}return e}function Xo(t){return is(t,e=>{if(!e)throw nn.create("installation-not-found");return wl(e)})}function wl(t){return km(t)?{fid:t.fid,registrationStatus:0}:t}function km(t){return t.registrationStatus===1&&t.registrationTime+ol<Date.now()}/**
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
 */async function xm({appConfig:t,heartbeatServiceProvider:e},n){const r=Nm(t,n),s=pm(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:al,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await pl(()=>fetch(r,a));if(c.ok){const l=await c.json();return fl(l)}else throw await dl("Generate Auth Token",c)}function Nm(t,{fid:e}){return`${ul(t)}/${e}/authTokens:generate`}/**
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
 */async function Vi(t,e=!1){let n;const r=await is(t.appConfig,i=>{if(!El(i))throw nn.create("not-registered");const o=i.authToken;if(!e&&Mm(o))return i;if(o.requestStatus===1)return n=Dm(t,e),i;{if(!navigator.onLine)throw nn.create("app-offline");const a=Fm(i);return n=Lm(t,a),a}});return n?await n:r.authToken}async function Dm(t,e){let n=await Qo(t.appConfig);for(;n.authToken.requestStatus===1;)await ml(100),n=await Qo(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vi(t,e):r}function Qo(t){return is(t,e=>{if(!El(e))throw nn.create("not-registered");const n=e.authToken;return Bm(n)?{...e,authToken:{requestStatus:0}}:e})}async function Lm(t,e){try{const n=await xm(t,e),r={...e,authToken:n};return await Wr(t.appConfig,r),n}catch(n){if(ll(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bl(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Wr(t.appConfig,r)}throw n}}function El(t){return t!==void 0&&t.registrationStatus===2}function Mm(t){return t.requestStatus===2&&!Um(t)}function Um(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+um}function Fm(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Bm(t){return t.requestStatus===1&&t.requestTime+ol<Date.now()}/**
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
 */async function $m(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hi(e);return r?r.catch(console.error):Vi(e).catch(console.error),n.fid}/**
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
 */async function jm(t,e=!1){const n=t;return await Hm(n),(await Vi(n,e)).token}async function Hm(t){const{registrationPromise:e}=await Hi(t);e&&await e}/**
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
 */function Vm(t){if(!t||!t.options)throw xs("App Configuration");if(!t.name)throw xs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xs(t){return nn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Il="installations",Wm="installations-internal",qm=t=>{const e=t.getProvider("app").getImmediate(),n=Vm(e),r=Pn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zm=t=>{const e=t.getProvider("app").getImmediate(),n=Pn(e,Il).getImmediate();return{getId:()=>$m(n),getToken:s=>jm(n,s)}};function Km(){yt(new st(Il,qm,"PUBLIC")),yt(new st(Wm,zm,"PRIVATE"))}Km();et(il,$i);et(il,$i,"esm2020");/**
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
 */const qr="analytics",Gm="firebase_id",Jm="origin",Ym=60*1e3,Xm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wi="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ae=new Pi("@firebase/analytics");/**
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
 */const Qm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Le=new cn("analytics","Analytics",Qm);/**
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
 */function Zm(t){if(!t.startsWith(Wi)){const e=Le.create("invalid-gtag-resource",{gtagURL:t});return Ae.warn(e.message),""}return t}function vl(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function eg(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function tg(t,e){const n=eg("firebase-js-sdk-policy",{createScriptURL:Zm}),r=document.createElement("script"),s=`${Wi}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function ng(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function rg(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await vl(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ae.error(a)}t("config",s,i)}async function sg(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await vl(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ae.error(i)}}function ig(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await sg(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await rg(t,e,n,r,a,c)}else if(i==="consent"){const[a,c]=o;t("consent",a,c)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ae.error(a)}}return s}function og(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ig(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function ag(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wi)&&n.src.includes(t))return n;return null}/**
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
 */const cg=30,lg=1e3;class ug{constructor(e={},n=lg){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Sl=new ug;function fg(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function dg(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:fg(n)},s=Xm.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function hg(t,e=Sl,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Le.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Le.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gg;return setTimeout(async()=>{a.abort()},Ym),Tl({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Tl(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Sl){const{appId:i,measurementId:o}=t;try{await pg(r,e)}catch(a){if(o)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await dg(t);return s.deleteThrottleMetadata(i),a}catch(a){const c=a;if(!mg(c)){if(s.deleteThrottleMetadata(i),o)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw a}const l=Number(c?.customData?.httpStatus)===503?To(n,s.intervalMillis,cg):To(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),Ae.debug(`Calling attemptFetch again in ${l} millis`),Tl(t,u,r,s)}}function pg(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mg(t){if(!(t instanceof ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yg(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
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
 */async function _g(){if(bc())try{await wc()}catch(t){return Ae.warn(Le.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ae.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bg(t,e,n,r,s,i,o){const a=hg(t);a.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>Ae.error(d)),e.push(a);const c=_g().then(d=>{if(d)return r.getId()}),[l,u]=await Promise.all([a,c]);ag(i)||tg(i,l.measurementId),s("js",new Date);const f=o?.config??{};return f[Jm]="firebase",f.update=!0,u!=null&&(f[Gm]=u),s("config",l.measurementId,f),l.measurementId}/**
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
 */class wg{constructor(e){this.app=e}_delete(){return delete jn[this.app.options.appId],Promise.resolve()}}let jn={},Zo=[];const ea={};let Ns="dataLayer",Eg="gtag",ta,Rl,na=!1;function Ig(){const t=[];if(_c()&&t.push("This is a browser extension environment."),Vf()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Le.create("invalid-analytics-context",{errorInfo:e});Ae.warn(n.message)}}function vg(t,e,n){Ig();const r=t.options.appId;if(!r)throw Le.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(jn[r]!=null)throw Le.create("already-exists",{id:r});if(!na){ng(Ns);const{wrappedGtag:i,gtagCore:o}=og(jn,Zo,ea,Ns,Eg);Rl=i,ta=o,na=!0}return jn[r]=bg(t,Zo,ea,e,ta,Ns,n),new wg(t)}function Sg(t=Tc()){t=It(t);const e=Pn(t,qr);return e.isInitialized()?e.getImmediate():Tg(t)}function Tg(t,e={}){const n=Pn(t,qr);if(n.isInitialized()){const s=n.getImmediate();if(en(e,n.getOptions()))return s;throw Le.create("already-initialized")}return n.initialize({options:e})}function Rg(t,e,n,r){t=It(t),yg(Rl,jn[t.app.options.appId],e,n,r).catch(s=>Ae.error(s))}const ra="@firebase/analytics",sa="0.10.18";function Ag(){yt(new st(qr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return vg(r,s,n)},"PUBLIC")),yt(new st("analytics-internal",t,"PRIVATE")),et(ra,sa),et(ra,sa,"esm2020");function t(e){try{const n=e.getProvider(qr).getImmediate();return{logEvent:(r,s,i)=>Rg(n,r,s,i)}}catch(n){throw Le.create("interop-component-reg-failed",{reason:n})}}}Ag();const Cg={apiKey:"AIzaSyC4Ge5BojUJkC4_kvSkj9a4johP4tOd7RA",authDomain:"great-unknown.firebaseapp.com",projectId:"great-unknown",storageBucket:"great-unknown.firebasestorage.app",messagingSenderId:"199011519338",appId:"1:199011519338:web:35104d74ac8e6dbfb8f313",measurementId:"G-VLCG70WXLD"},Al=Sc(Cg);Sg(Al);const Pg=am(Al);/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qi(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const oe={},wn=[],rt=()=>{},Og=()=>!1,os=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zi=t=>t.startsWith("onUpdate:"),ye=Object.assign,Ki=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kg=Object.prototype.hasOwnProperty,Z=(t,e)=>kg.call(t,e),H=Array.isArray,En=t=>as(t)==="[object Map]",Cl=t=>as(t)==="[object Set]",W=t=>typeof t=="function",de=t=>typeof t=="string",jt=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",Pl=t=>(le(t)||W(t))&&W(t.then)&&W(t.catch),Ol=Object.prototype.toString,as=t=>Ol.call(t),xg=t=>as(t).slice(8,-1),kl=t=>as(t)==="[object Object]",Gi=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hn=qi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ng=/-(\w)/g,Fe=cs(t=>t.replace(Ng,(e,n)=>n?n.toUpperCase():"")),Dg=/\B([A-Z])/g,ln=cs(t=>t.replace(Dg,"-$1").toLowerCase()),ls=cs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ds=cs(t=>t?`on${ls(t)}`:""),$t=(t,e)=>!Object.is(t,e),Ls=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},oi=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Lg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ia;const us=()=>ia||(ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ji(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?Bg(r):Ji(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(de(t)||le(t))return t}const Mg=/;(?![^(]*\))/g,Ug=/:([^]+)/,Fg=/\/\*[^]*?\*\//g;function Bg(t){const e={};return t.replace(Fg,"").split(Mg).forEach(n=>{if(n){const r=n.split(Ug);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yi(t){let e="";if(de(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=Yi(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $g="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jg=qi($g);function xl(t){return!!t||t===""}const Nl=t=>!!(t&&t.__v_isRef===!0),Hg=t=>de(t)?t:t==null?"":H(t)||le(t)&&(t.toString===Ol||!W(t.toString))?Nl(t)?Hg(t.value):JSON.stringify(t,Dl,2):String(t),Dl=(t,e)=>Nl(e)?Dl(t,e.value):En(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ms(r,i)+" =>"]=s,n),{})}:Cl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ms(n))}:jt(e)?Ms(e):le(e)&&!H(e)&&!kl(e)?String(e):e,Ms=(t,e="")=>{var n;return jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class Ll{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=he,!e&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=he;try{return he=this,e()}finally{he=n}}}on(){++this._on===1&&(this.prevScope=he,he=this)}off(){this._on>0&&--this._on===0&&(he=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ml(t){return new Ll(t)}function Ul(){return he}function Vg(t,e=!1){he&&he.cleanups.push(t)}let ie;const Us=new WeakSet;class Fl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,he&&he.active&&he.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Us.has(this)&&(Us.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$l(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oa(this),jl(this);const e=ie,n=je;ie=this,je=!0;try{return this.fn()}finally{Hl(this),ie=e,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zi(e);this.deps=this.depsTail=void 0,oa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Us.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ai(this)&&this.run()}get dirty(){return ai(this)}}let Bl=0,Vn,Wn;function $l(t,e=!1){if(t.flags|=8,e){t.next=Wn,Wn=t;return}t.next=Vn,Vn=t}function Xi(){Bl++}function Qi(){if(--Bl>0)return;if(Wn){let e=Wn;for(Wn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vn;){let e=Vn;for(Vn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function jl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hl(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Zi(r),Wg(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ai(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Vl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===tr)||(t.globalVersion=tr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ai(t))))return;t.flags|=2;const e=t.dep,n=ie,r=je;ie=t,je=!0;try{jl(t);const s=t.fn(t._value);(e.version===0||$t(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ie=n,je=r,Hl(t),t.flags&=-3}}function Zi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Zi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let je=!0;const Wl=[];function wt(){Wl.push(je),je=!1}function Et(){const t=Wl.pop();je=t===void 0?!0:t}function oa(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let tr=0;class qg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ie||!je||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new qg(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,ql(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(e){this.version++,tr++,this.notify(e)}notify(e){Xi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qi()}}}function ql(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ql(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zr=new WeakMap,Yt=Symbol(""),ci=Symbol(""),nr=Symbol("");function pe(t,e,n){if(je&&ie){let r=zr.get(t);r||zr.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new eo),s.map=r,s.key=n),s.track()}}function ht(t,e,n,r,s,i){const o=zr.get(t);if(!o){tr++;return}const a=c=>{c&&c.trigger()};if(Xi(),e==="clear")o.forEach(a);else{const c=H(t),l=c&&Gi(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===nr||!jt(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(nr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Yt)),En(t)&&a(o.get(ci)));break;case"delete":c||(a(o.get(Yt)),En(t)&&a(o.get(ci)));break;case"set":En(t)&&a(o.get(Yt));break}}Qi()}function zg(t,e){const n=zr.get(t);return n&&n.get(e)}function dn(t){const e=Y(t);return e===t?e:(pe(e,"iterate",nr),He(t)?e:e.map(we))}function to(t){return pe(t=Y(t),"iterate",nr),t}const Kg={__proto__:null,[Symbol.iterator](){return Fs(this,Symbol.iterator,we)},concat(...t){return dn(this).concat(...t.map(e=>H(e)?dn(e):e))},entries(){return Fs(this,"entries",t=>(t[1]=we(t[1]),t))},every(t,e){return ct(this,"every",t,e,void 0,arguments)},filter(t,e){return ct(this,"filter",t,e,n=>n.map(we),arguments)},find(t,e){return ct(this,"find",t,e,we,arguments)},findIndex(t,e){return ct(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ct(this,"findLast",t,e,we,arguments)},findLastIndex(t,e){return ct(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ct(this,"forEach",t,e,void 0,arguments)},includes(...t){return Bs(this,"includes",t)},indexOf(...t){return Bs(this,"indexOf",t)},join(t){return dn(this).join(t)},lastIndexOf(...t){return Bs(this,"lastIndexOf",t)},map(t,e){return ct(this,"map",t,e,void 0,arguments)},pop(){return Dn(this,"pop")},push(...t){return Dn(this,"push",t)},reduce(t,...e){return aa(this,"reduce",t,e)},reduceRight(t,...e){return aa(this,"reduceRight",t,e)},shift(){return Dn(this,"shift")},some(t,e){return ct(this,"some",t,e,void 0,arguments)},splice(...t){return Dn(this,"splice",t)},toReversed(){return dn(this).toReversed()},toSorted(t){return dn(this).toSorted(t)},toSpliced(...t){return dn(this).toSpliced(...t)},unshift(...t){return Dn(this,"unshift",t)},values(){return Fs(this,"values",we)}};function Fs(t,e,n){const r=to(t),s=r[e]();return r!==t&&!He(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Gg=Array.prototype;function ct(t,e,n,r,s,i){const o=to(t),a=o!==t&&!He(t),c=o[e];if(c!==Gg[e]){const f=c.apply(t,i);return a?we(f):f}let l=n;o!==t&&(a?l=function(f,d){return n.call(this,we(f),d,t)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function aa(t,e,n,r){const s=to(t);let i=n;return s!==t&&(He(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,we(a),c,t)}),s[e](i,...r)}function Bs(t,e,n){const r=Y(t);pe(r,"iterate",nr);const s=r[e](...n);return(s===-1||s===!1)&&so(n[0])?(n[0]=Y(n[0]),r[e](...n)):s}function Dn(t,e,n=[]){wt(),Xi();const r=Y(t)[e].apply(t,n);return Qi(),Et(),r}const Jg=qi("__proto__,__v_isRef,__isVue"),zl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jt));function Yg(t){jt(t)||(t=String(t));const e=Y(this);return pe(e,"has",t),e.hasOwnProperty(t)}class Kl{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?oy:Xl:i?Yl:Jl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=H(e);if(!s){let c;if(o&&(c=Kg[n]))return c;if(n==="hasOwnProperty")return Yg}const a=Reflect.get(e,n,ue(e)?e:r);return(jt(n)?zl.has(n):Jg(n))||(s||pe(e,"get",n),i)?a:ue(a)?o&&Gi(n)?a:a.value:le(a)?s?Zl(a):sn(a):a}}class Gl extends Kl{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=on(i);if(!He(r)&&!on(r)&&(i=Y(i),r=Y(r)),!H(e)&&ue(i)&&!ue(r))return c?!1:(i.value=r,!0)}const o=H(e)&&Gi(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,r,ue(e)?e:s);return e===Y(s)&&(o?$t(r,i)&&ht(e,"set",n,r):ht(e,"add",n,r)),a}deleteProperty(e,n){const r=Z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ht(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jt(n)||!zl.has(n))&&pe(e,"has",n),r}ownKeys(e){return pe(e,"iterate",H(e)?"length":Yt),Reflect.ownKeys(e)}}class Xg extends Kl{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Qg=new Gl,Zg=new Xg,ey=new Gl(!0);const li=t=>t,Ir=t=>Reflect.getPrototypeOf(t);function ty(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=En(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?li:e?ui:we;return!e&&pe(i,"iterate",c?ci:Yt),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function vr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ny(t,e){const n={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);t||($t(s,a)&&pe(o,"get",s),pe(o,"get",a));const{has:c}=Ir(o),l=e?li:t?ui:we;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pe(Y(s),"iterate",Yt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return t||($t(s,a)&&pe(o,"has",s),pe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),l=e?li:t?ui:we;return!t&&pe(c,"iterate",Yt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ye(n,t?{add:vr("add"),set:vr("set"),delete:vr("delete"),clear:vr("clear")}:{add(s){!e&&!He(s)&&!on(s)&&(s=Y(s));const i=Y(this);return Ir(i).has.call(i,s)||(i.add(s),ht(i,"add",s,s)),this},set(s,i){!e&&!He(i)&&!on(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=Ir(o);let l=a.call(o,s);l||(s=Y(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?$t(i,u)&&ht(o,"set",s,i):ht(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=Ir(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ht(i,"delete",s,void 0),l},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&ht(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ty(s,t,e)}),n}function no(t,e){const n=ny(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const ry={get:no(!1,!1)},sy={get:no(!1,!0)},iy={get:no(!0,!1)};const Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,oy=new WeakMap;function ay(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cy(t){return t.__v_skip||!Object.isExtensible(t)?0:ay(xg(t))}function sn(t){return on(t)?t:ro(t,!1,Qg,ry,Jl)}function Ql(t){return ro(t,!1,ey,sy,Yl)}function Zl(t){return ro(t,!0,Zg,iy,Xl)}function ro(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=cy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Xt(t){return on(t)?Xt(t.__v_raw):!!(t&&t.__v_isReactive)}function on(t){return!!(t&&t.__v_isReadonly)}function He(t){return!!(t&&t.__v_isShallow)}function so(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function io(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&oi(t,"__v_skip",!0),t}const we=t=>le(t)?sn(t):t,ui=t=>le(t)?Zl(t):t;function ue(t){return t?t.__v_isRef===!0:!1}function oo(t){return eu(t,!1)}function ly(t){return eu(t,!0)}function eu(t,e){return ue(t)?t:new uy(t,e)}class uy{constructor(e,n){this.dep=new eo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:we(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||He(e)||on(e);e=r?e:Y(e),$t(e,n)&&(this._rawValue=e,this._value=r?e:we(e),this.dep.trigger())}}function In(t){return ue(t)?t.value:t}const fy={get:(t,e,n)=>e==="__v_raw"?t:In(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function tu(t){return Xt(t)?t:new Proxy(t,fy)}function dy(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=py(t,n);return e}class hy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zg(Y(this._object),this._key)}}function py(t,e,n){const r=t[e];return ue(r)?r:new hy(t,e,n)}class my{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new eo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return $l(this,!0),!0}get value(){const e=this.dep.track();return Vl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gy(t,e,n=!1){let r,s;return W(t)?r=t:(r=t.get,s=t.set),new my(r,s,n)}const Sr={},Kr=new WeakMap;let zt;function yy(t,e=!1,n=zt){if(n){let r=Kr.get(n);r||Kr.set(n,r=[]),r.push(t)}}function _y(t,e,n=oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=D=>s?D:He(D)||s===!1||s===0?Ut(D,1):Ut(D);let u,f,d,m,y=!1,b=!1;if(ue(t)?(f=()=>t.value,y=He(t)):Xt(t)?(f=()=>l(t),y=!0):H(t)?(b=!0,y=t.some(D=>Xt(D)||He(D)),f=()=>t.map(D=>{if(ue(D))return D.value;if(Xt(D))return l(D);if(W(D))return c?c(D,2):D()})):W(t)?e?f=c?()=>c(t,2):t:f=()=>{if(d){wt();try{d()}finally{Et()}}const D=zt;zt=u;try{return c?c(t,3,[m]):t(m)}finally{zt=D}}:f=rt,e&&s){const D=f,F=s===!0?1/0:s;f=()=>Ut(D(),F)}const S=Ul(),A=()=>{u.stop(),S&&S.active&&Ki(S.effects,u)};if(i&&e){const D=e;e=(...F)=>{D(...F),A()}}let R=b?new Array(t.length).fill(Sr):Sr;const O=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(e){const F=u.run();if(s||y||(b?F.some((te,G)=>$t(te,R[G])):$t(F,R))){d&&d();const te=zt;zt=u;try{const G=[F,R===Sr?void 0:b&&R[0]===Sr?[]:R,m];R=F,c?c(e,3,G):e(...G)}finally{zt=te}}}else u.run()};return a&&a(O),u=new Fl(f),u.scheduler=o?()=>o(O,!1):O,m=D=>yy(D,!1,u),d=u.onStop=()=>{const D=Kr.get(u);if(D){if(c)c(D,4);else for(const F of D)F();Kr.delete(u)}},e?r?O(!0):R=u.run():o?o(O.bind(null,!0),!0):u.run(),A.pause=u.pause.bind(u),A.resume=u.resume.bind(u),A.stop=A,A}function Ut(t,e=1/0,n){if(e<=0||!le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ue(t))Ut(t.value,e,n);else if(H(t))for(let r=0;r<t.length;r++)Ut(t[r],e,n);else if(Cl(t)||En(t))t.forEach(r=>{Ut(r,e,n)});else if(kl(t)){for(const r in t)Ut(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ut(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pr(t,e,n,r){try{return r?t(...r):t()}catch(s){fs(s,e,n)}}function it(t,e,n,r){if(W(t)){const s=pr(t,e,n,r);return s&&Pl(s)&&s.catch(i=>{fs(i,e,n)}),s}if(H(t)){const s=[];for(let i=0;i<t.length;i++)s.push(it(t[i],e,n,r));return s}}function fs(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||oe;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){wt(),pr(i,null,10,[t,c,l]),Et();return}}by(t,n,s,r,o)}function by(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ee=[];let Qe=-1;const vn=[];let Ot=null,pn=0;const nu=Promise.resolve();let Gr=null;function ao(t){const e=Gr||nu;return t?e.then(this?t.bind(this):t):e}function wy(t){let e=Qe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1,s=Ee[r],i=rr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function co(t){if(!(t.flags&1)){const e=rr(t),n=Ee[Ee.length-1];!n||!(t.flags&2)&&e>=rr(n)?Ee.push(t):Ee.splice(wy(e),0,t),t.flags|=1,ru()}}function ru(){Gr||(Gr=nu.then(iu))}function Ey(t){H(t)?vn.push(...t):Ot&&t.id===-1?Ot.splice(pn+1,0,t):t.flags&1||(vn.push(t),t.flags|=1),ru()}function ca(t,e,n=Qe+1){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ee.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function su(t){if(vn.length){const e=[...new Set(vn)].sort((n,r)=>rr(n)-rr(r));if(vn.length=0,Ot){Ot.push(...e);return}for(Ot=e,pn=0;pn<Ot.length;pn++){const n=Ot[pn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,pn=0}}const rr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function iu(t){try{for(Qe=0;Qe<Ee.length;Qe++){const e=Ee[Qe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qe<Ee.length;Qe++){const e=Ee[Qe];e&&(e.flags&=-2)}Qe=-1,Ee.length=0,su(),Gr=null,(Ee.length||vn.length)&&iu()}}let $e=null,ou=null;function Jr(t){const e=$e;return $e=t,ou=t&&t.type.__scopeId||null,e}function Iy(t,e=$e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_a(-1);const i=Jr(e);let o;try{o=t(...s)}finally{Jr(i),r._d&&_a(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(wt(),it(c,n,8,[t.el,a,t,e]),Et())}}const vy=Symbol("_vte"),Sy=t=>t.__isTeleport;function lo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function au(t,e){return W(t)?ye({name:t.name},e,{setup:t}):t}function cu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qn(t,e,n,r,s=!1){if(H(t)){t.forEach((y,b)=>qn(y,e&&(H(e)?e[b]:e),n,r,s));return}if(zn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qn(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?po(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,f=a.setupState,d=Y(f),m=f===oe?()=>!1:y=>Z(d,y);if(l!=null&&l!==c&&(de(l)?(u[l]=null,m(l)&&(f[l]=null)):ue(l)&&(l.value=null)),W(c))pr(c,a,12,[o,u]);else{const y=de(c),b=ue(c);if(y||b){const S=()=>{if(t.f){const A=y?m(c)?f[c]:u[c]:c.value;s?H(A)&&Ki(A,i):H(A)?A.includes(i)||A.push(i):y?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else y?(u[c]=o,m(c)&&(f[c]=o)):b&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,xe(S,n)):S()}}}us().requestIdleCallback;us().cancelIdleCallback;const zn=t=>!!t.type.__asyncLoader,lu=t=>t.type.__isKeepAlive;function Ty(t,e){uu(t,"a",e)}function Ry(t,e){uu(t,"da",e)}function uu(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ds(e,r,n),n){let s=n.parent;for(;s&&s.parent;)lu(s.parent.vnode)&&Ay(r,e,n,s),s=s.parent}}function Ay(t,e,n,r){const s=ds(e,t,r,!0);fu(()=>{Ki(r[e],s)},n)}function ds(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{wt();const a=mr(n),c=it(e,n,t,o);return a(),Et(),c});return r?s.unshift(i):s.push(i),i}}const vt=t=>(e,n=me)=>{(!ir||t==="sp")&&ds(t,(...r)=>e(...r),n)},Cy=vt("bm"),Py=vt("m"),Oy=vt("bu"),ky=vt("u"),xy=vt("bum"),fu=vt("um"),Ny=vt("sp"),Dy=vt("rtg"),Ly=vt("rtc");function My(t,e=me){ds("ec",t,e)}const Uy="components";function Fy(t,e){return $y(Uy,t,!0,e)||t}const By=Symbol.for("v-ndc");function $y(t,e,n=!0,r=!1){const s=$e||me;if(s){const i=s.type;{const a=k_(i,!1);if(a&&(a===e||a===Fe(e)||a===ls(Fe(e))))return i}const o=la(s[t]||i[t],e)||la(s.appContext[t],e);return!o&&r?i:o}}function la(t,e){return t&&(t[e]||t[Fe(e)]||t[ls(Fe(e))])}const fi=t=>t?xu(t)?po(t):fi(t.parent):null,Kn=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fi(t.parent),$root:t=>fi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>hu(t),$forceUpdate:t=>t.f||(t.f=()=>{co(t.update)}),$nextTick:t=>t.n||(t.n=ao.bind(t.proxy)),$watch:t=>c_.bind(t)}),$s=(t,e)=>t!==oe&&!t.__isScriptSetup&&Z(t,e),jy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if($s(r,e))return o[e]=1,r[e];if(s!==oe&&Z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Z(l,e))return o[e]=3,i[e];if(n!==oe&&Z(n,e))return o[e]=4,n[e];di&&(o[e]=0)}}const u=Kn[e];let f,d;if(u)return e==="$attrs"&&pe(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==oe&&Z(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Z(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return $s(s,e)?(s[e]=n,!0):r!==oe&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==oe&&Z(t,o)||$s(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(Kn,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ua(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let di=!0;function Hy(t){const e=hu(t),n=t.proxy,r=t.ctx;di=!1,e.beforeCreate&&fa(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:y,activated:b,deactivated:S,beforeDestroy:A,beforeUnmount:R,destroyed:O,unmounted:D,render:F,renderTracked:te,renderTriggered:G,errorCaptured:q,serverPrefetch:K,expose:ce,inheritAttrs:_e,components:Oe,directives:ve,filters:Ht}=e;if(l&&Vy(l,r,null),o)for(const z in o){const X=o[z];W(X)&&(r[z]=X.bind(n))}if(s){const z=s.call(n,n);le(z)&&(t.data=sn(z))}if(di=!0,i)for(const z in i){const X=i[z],at=W(X)?X.bind(n,n):W(X.get)?X.get.bind(n,n):rt,Tt=!W(X)&&W(X.set)?X.set.bind(n):rt,ze=Ue({get:at,set:Tt});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Se=>ze.value=Se})}if(a)for(const z in a)du(a[z],r,n,z);if(c){const z=W(c)?c.call(n):c;Reflect.ownKeys(z).forEach(X=>{Or(X,z[X])})}u&&fa(u,t,"c");function ae(z,X){H(X)?X.forEach(at=>z(at.bind(n))):X&&z(X.bind(n))}if(ae(Cy,f),ae(Py,d),ae(Oy,m),ae(ky,y),ae(Ty,b),ae(Ry,S),ae(My,q),ae(Ly,te),ae(Dy,G),ae(xy,R),ae(fu,D),ae(Ny,K),H(ce))if(ce.length){const z=t.exposed||(t.exposed={});ce.forEach(X=>{Object.defineProperty(z,X,{get:()=>n[X],set:at=>n[X]=at,enumerable:!0})})}else t.exposed||(t.exposed={});F&&t.render===rt&&(t.render=F),_e!=null&&(t.inheritAttrs=_e),Oe&&(t.components=Oe),ve&&(t.directives=ve),K&&cu(t)}function Vy(t,e,n=rt){H(t)&&(t=hi(t));for(const r in t){const s=t[r];let i;le(s)?"default"in s?i=Ve(s.from||r,s.default,!0):i=Ve(s.from||r):i=Ve(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function fa(t,e,n){it(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function du(t,e,n,r){let s=r.includes(".")?Ru(n,r):()=>n[r];if(de(t)){const i=e[t];W(i)&&Gn(s,i)}else if(W(t))Gn(s,t.bind(n));else if(le(t))if(H(t))t.forEach(i=>du(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Gn(s,i,t)}}function hu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Yr(c,l,o,!0)),Yr(c,e,o)),le(e)&&i.set(e,c),c}function Yr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yr(t,i,n,!0),s&&s.forEach(o=>Yr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Wy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wy={data:da,props:ha,emits:ha,methods:Fn,computed:Fn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Fn,directives:Fn,watch:zy,provide:da,inject:qy};function da(t,e){return e?t?function(){return ye(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function qy(t,e){return Fn(hi(t),hi(e))}function hi(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?ye(Object.create(null),t,e):e}function ha(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:ye(Object.create(null),ua(t),ua(e??{})):e}function zy(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const r in e)n[r]=be(t[r],e[r]);return n}function pu(){return{app:null,config:{isNativeTag:Og,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ky=0;function Gy(t,e){return function(r,s=null){W(r)||(r=ye({},r)),s!=null&&!le(s)&&(s=null);const i=pu(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Ky++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:N_,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(l,...f)):W(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const m=l._ceVNode||De(r,s);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),t(m,u,d),c=!0,l._container=u,u.__vue_app__=l,po(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(it(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Qt;Qt=l;try{return u()}finally{Qt=f}}};return l}}let Qt=null;function Or(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function Ve(t,e,n=!1){const r=ku();if(r||Qt){let s=Qt?Qt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r&&r.proxy):e}}function Jy(){return!!(ku()||Qt)}const mu={},gu=()=>Object.create(mu),yu=t=>Object.getPrototypeOf(t)===mu;function Yy(t,e,n,r=!1){const s={},i=gu();t.propsDefaults=Object.create(null),_u(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ql(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Xy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(hs(t.emitsOptions,d))continue;const m=e[d];if(c)if(Z(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=Fe(d);s[y]=pi(c,a,y,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{_u(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!Z(e,f)&&((u=ln(f))===f||!Z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=pi(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Z(e,f))&&(delete i[f],l=!0)}l&&ht(t.attrs,"set","")}function _u(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Hn(c))continue;const l=e[c];let u;s&&Z(s,u=Fe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:hs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||oe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=pi(s,c,f,l[f],t,!Z(l,f))}}return o}function pi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=mr(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ln(n))&&(r=!0))}return r}const Qy=new WeakMap;function bu(t,e,n=!1){const r=n?Qy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=f=>{c=!0;const[d,m]=bu(f,e,!0);ye(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return le(t)&&r.set(t,wn),wn;if(H(i))for(let u=0;u<i.length;u++){const f=Fe(i[u]);pa(f)&&(o[f]=oe)}else if(i)for(const u in i){const f=Fe(u);if(pa(f)){const d=i[u],m=o[f]=H(d)||W(d)?{type:d}:ye({},d),y=m.type;let b=!1,S=!0;if(H(y))for(let A=0;A<y.length;++A){const R=y[A],O=W(R)&&R.name;if(O==="Boolean"){b=!0;break}else O==="String"&&(S=!1)}else b=W(y)&&y.name==="Boolean";m[0]=b,m[1]=S,(b||Z(m,"default"))&&a.push(f)}}const l=[o,a];return le(t)&&r.set(t,l),l}function pa(t){return t[0]!=="$"&&!Hn(t)}const uo=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",fo=t=>H(t)?t.map(Ze):[Ze(t)],Zy=(t,e,n)=>{if(e._n)return e;const r=Iy((...s)=>fo(e(...s)),n);return r._c=!1,r},wu=(t,e,n)=>{const r=t._ctx;for(const s in t){if(uo(s))continue;const i=t[s];if(W(i))e[s]=Zy(s,i,r);else if(i!=null){const o=fo(i);e[s]=()=>o}}},Eu=(t,e)=>{const n=fo(e);t.slots.default=()=>n},Iu=(t,e,n)=>{for(const r in e)(n||!uo(r))&&(t[r]=e[r])},e_=(t,e,n)=>{const r=t.slots=gu();if(t.vnode.shapeFlag&32){const s=e.__;s&&oi(r,"__",s,!0);const i=e._;i?(Iu(r,e,n),n&&oi(r,"_",i,!0)):wu(e,r)}else e&&Eu(t,e)},t_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=oe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Iu(s,e,n):(i=!e.$stable,wu(e,s)),o=e}else e&&(Eu(t,e),o={default:1});if(i)for(const a in s)!uo(a)&&o[a]==null&&delete s[a]},xe=m_;function n_(t){return r_(t)}function r_(t,e){const n=us();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=rt,insertStaticContent:y}=t,b=(h,p,g,w=null,v=null,I=null,k=void 0,P=null,C=!!p.dynamicChildren)=>{if(h===p)return;h&&!Ln(h,p)&&(w=E(h),Se(h,v,I,!0),h=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:N}=p;switch(T){case ps:S(h,p,g,w);break;case Tn:A(h,p,g,w);break;case kr:h==null&&R(p,g,w,k);break;case ft:Oe(h,p,g,w,v,I,k,P,C);break;default:N&1?F(h,p,g,w,v,I,k,P,C):N&6?ve(h,p,g,w,v,I,k,P,C):(N&64||N&128)&&T.process(h,p,g,w,v,I,k,P,C,M)}B!=null&&v?qn(B,h&&h.ref,I,p||h,!p):B==null&&h&&h.ref!=null&&qn(h.ref,null,I,h,!0)},S=(h,p,g,w)=>{if(h==null)r(p.el=a(p.children),g,w);else{const v=p.el=h.el;p.children!==h.children&&l(v,p.children)}},A=(h,p,g,w)=>{h==null?r(p.el=c(p.children||""),g,w):p.el=h.el},R=(h,p,g,w)=>{[h.el,h.anchor]=y(h.children,p,g,w,h.el,h.anchor)},O=({el:h,anchor:p},g,w)=>{let v;for(;h&&h!==p;)v=d(h),r(h,g,w),h=v;r(p,g,w)},D=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),s(h),h=g;s(p)},F=(h,p,g,w,v,I,k,P,C)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),h==null?te(p,g,w,v,I,k,P,C):K(h,p,v,I,k,P,C)},te=(h,p,g,w,v,I,k,P)=>{let C,T;const{props:B,shapeFlag:N,transition:U,dirs:j}=h;if(C=h.el=o(h.type,I,B&&B.is,B),N&8?u(C,h.children):N&16&&q(h.children,C,null,w,v,js(h,I),k,P),j&&Vt(h,null,w,"created"),G(C,h,h.scopeId,k,w),B){for(const se in B)se!=="value"&&!Hn(se)&&i(C,se,null,B[se],I,w);"value"in B&&i(C,"value",null,B.value,I),(T=B.onVnodeBeforeMount)&&Ye(T,w,h)}j&&Vt(h,null,w,"beforeMount");const J=s_(v,U);J&&U.beforeEnter(C),r(C,p,g),((T=B&&B.onVnodeMounted)||J||j)&&xe(()=>{T&&Ye(T,w,h),J&&U.enter(C),j&&Vt(h,null,w,"mounted")},v)},G=(h,p,g,w,v)=>{if(g&&m(h,g),w)for(let I=0;I<w.length;I++)m(h,w[I]);if(v){let I=v.subTree;if(p===I||Cu(I.type)&&(I.ssContent===p||I.ssFallback===p)){const k=v.vnode;G(h,k,k.scopeId,k.slotScopeIds,v.parent)}}},q=(h,p,g,w,v,I,k,P,C=0)=>{for(let T=C;T<h.length;T++){const B=h[T]=P?kt(h[T]):Ze(h[T]);b(null,B,p,g,w,v,I,k,P)}},K=(h,p,g,w,v,I,k)=>{const P=p.el=h.el;let{patchFlag:C,dynamicChildren:T,dirs:B}=p;C|=h.patchFlag&16;const N=h.props||oe,U=p.props||oe;let j;if(g&&Wt(g,!1),(j=U.onVnodeBeforeUpdate)&&Ye(j,g,p,h),B&&Vt(p,h,g,"beforeUpdate"),g&&Wt(g,!0),(N.innerHTML&&U.innerHTML==null||N.textContent&&U.textContent==null)&&u(P,""),T?ce(h.dynamicChildren,T,P,g,w,js(p,v),I):k||X(h,p,P,null,g,w,js(p,v),I,!1),C>0){if(C&16)_e(P,N,U,g,v);else if(C&2&&N.class!==U.class&&i(P,"class",null,U.class,v),C&4&&i(P,"style",N.style,U.style,v),C&8){const J=p.dynamicProps;for(let se=0;se<J.length;se++){const ee=J[se],Te=N[ee],Re=U[ee];(Re!==Te||ee==="value")&&i(P,ee,Te,Re,v,g)}}C&1&&h.children!==p.children&&u(P,p.children)}else!k&&T==null&&_e(P,N,U,g,v);((j=U.onVnodeUpdated)||B)&&xe(()=>{j&&Ye(j,g,p,h),B&&Vt(p,h,g,"updated")},w)},ce=(h,p,g,w,v,I,k)=>{for(let P=0;P<p.length;P++){const C=h[P],T=p[P],B=C.el&&(C.type===ft||!Ln(C,T)||C.shapeFlag&198)?f(C.el):g;b(C,T,B,null,w,v,I,k,!0)}},_e=(h,p,g,w,v)=>{if(p!==g){if(p!==oe)for(const I in p)!Hn(I)&&!(I in g)&&i(h,I,p[I],null,v,w);for(const I in g){if(Hn(I))continue;const k=g[I],P=p[I];k!==P&&I!=="value"&&i(h,I,P,k,v,w)}"value"in g&&i(h,"value",p.value,g.value,v)}},Oe=(h,p,g,w,v,I,k,P,C)=>{const T=p.el=h?h.el:a(""),B=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:j}=p;j&&(P=P?P.concat(j):j),h==null?(r(T,g,w),r(B,g,w),q(p.children||[],g,B,v,I,k,P,C)):N>0&&N&64&&U&&h.dynamicChildren?(ce(h.dynamicChildren,U,g,v,I,k,P),(p.key!=null||v&&p===v.subTree)&&vu(h,p,!0)):X(h,p,g,B,v,I,k,P,C)},ve=(h,p,g,w,v,I,k,P,C)=>{p.slotScopeIds=P,h==null?p.shapeFlag&512?v.ctx.activate(p,g,w,k,C):Ht(p,g,w,v,I,k,C):St(h,p,C)},Ht=(h,p,g,w,v,I,k)=>{const P=h.component=R_(h,w,v);if(lu(h)&&(P.ctx.renderer=M),A_(P,!1,k),P.asyncDep){if(v&&v.registerDep(P,ae,k),!h.el){const C=P.subTree=De(Tn);A(null,C,p,g),h.placeholder=C.el}}else ae(P,h,p,g,v,I,k)},St=(h,p,g)=>{const w=p.component=h.component;if(h_(h,p,g))if(w.asyncDep&&!w.asyncResolved){z(w,p,g);return}else w.next=p,w.update();else p.el=h.el,w.vnode=p},ae=(h,p,g,w,v,I,k)=>{const P=()=>{if(h.isMounted){let{next:N,bu:U,u:j,parent:J,vnode:se}=h;{const Ge=Su(h);if(Ge){N&&(N.el=se.el,z(h,N,k)),Ge.asyncDep.then(()=>{h.isUnmounted||P()});return}}let ee=N,Te;Wt(h,!1),N?(N.el=se.el,z(h,N,k)):N=se,U&&Ls(U),(Te=N.props&&N.props.onVnodeBeforeUpdate)&&Ye(Te,J,N,se),Wt(h,!0);const Re=ga(h),Ke=h.subTree;h.subTree=Re,b(Ke,Re,f(Ke.el),E(Ke),h,v,I),N.el=Re.el,ee===null&&p_(h,Re.el),j&&xe(j,v),(Te=N.props&&N.props.onVnodeUpdated)&&xe(()=>Ye(Te,J,N,se),v)}else{let N;const{el:U,props:j}=p,{bm:J,m:se,parent:ee,root:Te,type:Re}=h,Ke=zn(p);Wt(h,!1),J&&Ls(J),!Ke&&(N=j&&j.onVnodeBeforeMount)&&Ye(N,ee,p),Wt(h,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Re);const Ge=h.subTree=ga(h);b(null,Ge,g,w,h,v,I),p.el=Ge.el}if(se&&xe(se,v),!Ke&&(N=j&&j.onVnodeMounted)){const Ge=p;xe(()=>Ye(N,ee,Ge),v)}(p.shapeFlag&256||ee&&zn(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&xe(h.a,v),h.isMounted=!0,p=g=w=null}};h.scope.on();const C=h.effect=new Fl(P);h.scope.off();const T=h.update=C.run.bind(C),B=h.job=C.runIfDirty.bind(C);B.i=h,B.id=h.uid,C.scheduler=()=>co(B),Wt(h,!0),T()},z=(h,p,g)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,Xy(h,p.props,w,g),t_(h,p.children,g),wt(),ca(h),Et()},X=(h,p,g,w,v,I,k,P,C=!1)=>{const T=h&&h.children,B=h?h.shapeFlag:0,N=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){Tt(T,N,g,w,v,I,k,P,C);return}else if(U&256){at(T,N,g,w,v,I,k,P,C);return}}j&8?(B&16&&Me(T,v,I),N!==T&&u(g,N)):B&16?j&16?Tt(T,N,g,w,v,I,k,P,C):Me(T,v,I,!0):(B&8&&u(g,""),j&16&&q(N,g,w,v,I,k,P,C))},at=(h,p,g,w,v,I,k,P,C)=>{h=h||wn,p=p||wn;const T=h.length,B=p.length,N=Math.min(T,B);let U;for(U=0;U<N;U++){const j=p[U]=C?kt(p[U]):Ze(p[U]);b(h[U],j,g,null,v,I,k,P,C)}T>B?Me(h,v,I,!0,!1,N):q(p,g,w,v,I,k,P,C,N)},Tt=(h,p,g,w,v,I,k,P,C)=>{let T=0;const B=p.length;let N=h.length-1,U=B-1;for(;T<=N&&T<=U;){const j=h[T],J=p[T]=C?kt(p[T]):Ze(p[T]);if(Ln(j,J))b(j,J,g,null,v,I,k,P,C);else break;T++}for(;T<=N&&T<=U;){const j=h[N],J=p[U]=C?kt(p[U]):Ze(p[U]);if(Ln(j,J))b(j,J,g,null,v,I,k,P,C);else break;N--,U--}if(T>N){if(T<=U){const j=U+1,J=j<B?p[j].el:w;for(;T<=U;)b(null,p[T]=C?kt(p[T]):Ze(p[T]),g,J,v,I,k,P,C),T++}}else if(T>U)for(;T<=N;)Se(h[T],v,I,!0),T++;else{const j=T,J=T,se=new Map;for(T=J;T<=U;T++){const ke=p[T]=C?kt(p[T]):Ze(p[T]);ke.key!=null&&se.set(ke.key,T)}let ee,Te=0;const Re=U-J+1;let Ke=!1,Ge=0;const Nn=new Array(Re);for(T=0;T<Re;T++)Nn[T]=0;for(T=j;T<=N;T++){const ke=h[T];if(Te>=Re){Se(ke,v,I,!0);continue}let Je;if(ke.key!=null)Je=se.get(ke.key);else for(ee=J;ee<=U;ee++)if(Nn[ee-J]===0&&Ln(ke,p[ee])){Je=ee;break}Je===void 0?Se(ke,v,I,!0):(Nn[Je-J]=T+1,Je>=Ge?Ge=Je:Ke=!0,b(ke,p[Je],g,null,v,I,k,P,C),Te++)}const bo=Ke?i_(Nn):wn;for(ee=bo.length-1,T=Re-1;T>=0;T--){const ke=J+T,Je=p[ke],wo=p[ke+1],Eo=ke+1<B?wo.el||wo.placeholder:w;Nn[T]===0?b(null,Je,g,Eo,v,I,k,P,C):Ke&&(ee<0||T!==bo[ee]?ze(Je,g,Eo,2):ee--)}}},ze=(h,p,g,w,v=null)=>{const{el:I,type:k,transition:P,children:C,shapeFlag:T}=h;if(T&6){ze(h.component.subTree,p,g,w);return}if(T&128){h.suspense.move(p,g,w);return}if(T&64){k.move(h,p,g,M);return}if(k===ft){r(I,p,g);for(let N=0;N<C.length;N++)ze(C[N],p,g,w);r(h.anchor,p,g);return}if(k===kr){O(h,p,g);return}if(w!==2&&T&1&&P)if(w===0)P.beforeEnter(I),r(I,p,g),xe(()=>P.enter(I),v);else{const{leave:N,delayLeave:U,afterLeave:j}=P,J=()=>{h.ctx.isUnmounted?s(I):r(I,p,g)},se=()=>{N(I,()=>{J(),j&&j()})};U?U(I,J,se):se()}else r(I,p,g)},Se=(h,p,g,w=!1,v=!1)=>{const{type:I,props:k,ref:P,children:C,dynamicChildren:T,shapeFlag:B,patchFlag:N,dirs:U,cacheIndex:j}=h;if(N===-2&&(v=!1),P!=null&&(wt(),qn(P,null,g,h,!0),Et()),j!=null&&(p.renderCache[j]=void 0),B&256){p.ctx.deactivate(h);return}const J=B&1&&U,se=!zn(h);let ee;if(se&&(ee=k&&k.onVnodeBeforeUnmount)&&Ye(ee,p,h),B&6)wr(h.component,g,w);else{if(B&128){h.suspense.unmount(g,w);return}J&&Vt(h,null,p,"beforeUnmount"),B&64?h.type.remove(h,p,g,M,w):T&&!T.hasOnce&&(I!==ft||N>0&&N&64)?Me(T,p,g,!1,!0):(I===ft&&N&384||!v&&B&16)&&Me(C,p,g),w&&un(h)}(se&&(ee=k&&k.onVnodeUnmounted)||J)&&xe(()=>{ee&&Ye(ee,p,h),J&&Vt(h,null,p,"unmounted")},g)},un=h=>{const{type:p,el:g,anchor:w,transition:v}=h;if(p===ft){fn(g,w);return}if(p===kr){D(h);return}const I=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:P}=v,C=()=>k(g,I);P?P(h.el,I,C):C()}else I()},fn=(h,p)=>{let g;for(;h!==p;)g=d(h),s(h),h=g;s(p)},wr=(h,p,g)=>{const{bum:w,scope:v,job:I,subTree:k,um:P,m:C,a:T,parent:B,slots:{__:N}}=h;ma(C),ma(T),w&&Ls(w),B&&H(N)&&N.forEach(U=>{B.renderCache[U]=void 0}),v.stop(),I&&(I.flags|=8,Se(k,h,p,g)),P&&xe(P,p),xe(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Me=(h,p,g,w=!1,v=!1,I=0)=>{for(let k=I;k<h.length;k++)Se(h[k],p,g,w,v)},E=h=>{if(h.shapeFlag&6)return E(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),g=p&&p[vy];return g?d(g):p};let L=!1;const x=(h,p,g)=>{h==null?p._vnode&&Se(p._vnode,null,null,!0):b(p._vnode||null,h,p,null,null,null,g),p._vnode=h,L||(L=!0,ca(),su(),L=!1)},M={p:b,um:Se,m:ze,r:un,mt:Ht,mc:q,pc:X,pbc:ce,n:E,o:t};return{render:x,hydrate:void 0,createApp:Gy(x)}}function js({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function s_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vu(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=kt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&vu(o,a)),a.type===ps&&(a.el=o.el),a.type===Tn&&!a.el&&(a.el=o.el)}}function i_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Su(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Su(e)}function ma(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const o_=Symbol.for("v-scx"),a_=()=>Ve(o_);function Gn(t,e,n){return Tu(t,e,n)}function Tu(t,e,n=oe){const{immediate:r,deep:s,flush:i,once:o}=n,a=ye({},n),c=e&&r||!e&&i!=="post";let l;if(ir){if(i==="sync"){const m=a_();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=rt,m.resume=rt,m.pause=rt,m}}const u=me;a.call=(m,y,b)=>it(m,u,y,b);let f=!1;i==="post"?a.scheduler=m=>{xe(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,y)=>{y?m():co(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=_y(t,e,a);return ir&&(l?l.push(d):c&&d()),d}function c_(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?Ru(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=mr(this),a=Tu(s,i.bind(r),n);return o(),a}function Ru(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const l_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Fe(e)}Modifiers`]||t[`${ln(e)}Modifiers`];function u_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||oe;let s=n;const i=e.startsWith("update:"),o=i&&l_(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>de(u)?u.trim():u)),o.number&&(s=n.map(Lg)));let a,c=r[a=Ds(e)]||r[a=Ds(Fe(e))];!c&&i&&(c=r[a=Ds(ln(e))]),c&&it(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,it(l,t,6,s)}}function Au(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=Au(l,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(le(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):ye(o,i),le(t)&&r.set(t,o),o)}function hs(t,e){return!t||!os(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,ln(e))||Z(t,e))}function ga(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:m,ctx:y,inheritAttrs:b}=t,S=Jr(t);let A,R;try{if(n.shapeFlag&4){const D=s||r,F=D;A=Ze(l.call(F,D,u,f,m,d,y)),R=a}else{const D=e;A=Ze(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),R=e.props?a:f_(a)}}catch(D){Jn.length=0,fs(D,t,1),A=De(Tn)}let O=A;if(R&&b!==!1){const D=Object.keys(R),{shapeFlag:F}=O;D.length&&F&7&&(i&&D.some(zi)&&(R=d_(R,i)),O=Rn(O,R,!1,!0))}return n.dirs&&(O=Rn(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&lo(O,n.transition),A=O,Jr(S),A}const f_=t=>{let e;for(const n in t)(n==="class"||n==="style"||os(n))&&((e||(e={}))[n]=t[n]);return e},d_=(t,e)=>{const n={};for(const r in t)(!zi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function h_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ya(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!hs(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ya(r,o,l):!0:!!o;return!1}function ya(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!hs(n,i))return!0}return!1}function p_({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Cu=t=>t.__isSuspense;function m_(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Ey(t)}const ft=Symbol.for("v-fgt"),ps=Symbol.for("v-txt"),Tn=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),Jn=[];let Ne=null;function g_(t=!1){Jn.push(Ne=t?null:[])}function y_(){Jn.pop(),Ne=Jn[Jn.length-1]||null}let sr=1;function _a(t,e=!1){sr+=t,t<0&&Ne&&e&&(Ne.hasOnce=!0)}function __(t){return t.dynamicChildren=sr>0?Ne||wn:null,y_(),sr>0&&Ne&&Ne.push(t),t}function b_(t,e,n,r,s,i){return __(Ou(t,e,n,r,s,i,!0))}function Xr(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const Pu=({key:t})=>t??null,xr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||ue(t)||W(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function Ou(t,e=null,n=null,r=0,s=null,i=t===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pu(e),ref:e&&xr(e),scopeId:ou,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return a?(ho(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),sr>0&&!o&&Ne&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ne.push(c),c}const De=w_;function w_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===By)&&(t=Tn),Xr(t)){const a=Rn(t,e,!0);return n&&ho(a,n),sr>0&&!i&&Ne&&(a.shapeFlag&6?Ne[Ne.indexOf(t)]=a:Ne.push(a)),a.patchFlag=-2,a}if(x_(t)&&(t=t.__vccOpts),e){e=E_(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=Yi(a)),le(c)&&(so(c)&&!H(c)&&(c=ye({},c)),e.style=Ji(c))}const o=de(t)?1:Cu(t)?128:Sy(t)?64:le(t)?4:W(t)?2:0;return Ou(t,e,n,r,s,o,i,!0)}function E_(t){return t?so(t)||yu(t)?ye({},t):t:null}function Rn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?v_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Pu(l),ref:e&&e.ref?n&&i?H(i)?i.concat(xr(e)):[i,xr(e)]:xr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&lo(u,c.clone(u)),u}function I_(t=" ",e=0){return De(ps,null,t,e)}function ZE(t,e){const n=De(kr,null,t);return n.staticCount=e,n}function Ze(t){return t==null||typeof t=="boolean"?De(Tn):H(t)?De(ft,null,t.slice()):Xr(t)?kt(t):De(ps,null,String(t))}function kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rn(t)}function ho(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ho(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!yu(e)?e._ctx=$e:s===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),r&64?(n=16,e=[I_(e)]):n=8);t.children=e,t.shapeFlag|=n}function v_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yi([e.class,r.class]));else if(s==="style")e.style=Ji([e.style,r.style]);else if(os(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ye(t,e,n,r=null){it(t,e,7,[n,r])}const S_=pu();let T_=0;function R_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||S_,i={uid:T_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ll(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bu(r,s),emitsOptions:Au(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=u_.bind(null,i),t.ce&&t.ce(i),i}let me=null;const ku=()=>me||$e;let Qr,mi;{const t=us(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Qr=e("__VUE_INSTANCE_SETTERS__",n=>me=n),mi=e("__VUE_SSR_SETTERS__",n=>ir=n)}const mr=t=>{const e=me;return Qr(t),t.scope.on(),()=>{t.scope.off(),Qr(e)}},ba=()=>{me&&me.scope.off(),Qr(null)};function xu(t){return t.vnode.shapeFlag&4}let ir=!1;function A_(t,e=!1,n=!1){e&&mi(e);const{props:r,children:s}=t.vnode,i=xu(t);Yy(t,r,i,e),e_(t,s,n||e);const o=i?C_(t,e):void 0;return e&&mi(!1),o}function C_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,jy);const{setup:r}=n;if(r){wt();const s=t.setupContext=r.length>1?O_(t):null,i=mr(t),o=pr(r,t,0,[t.props,s]),a=Pl(o);if(Et(),i(),(a||t.sp)&&!zn(t)&&cu(t),a){if(o.then(ba,ba),e)return o.then(c=>{wa(t,c)}).catch(c=>{fs(c,t,0)});t.asyncDep=o}else wa(t,o)}else Nu(t)}function wa(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=tu(e)),Nu(t)}function Nu(t,e,n){const r=t.type;t.render||(t.render=r.render||rt);{const s=mr(t);wt();try{Hy(t)}finally{Et(),s()}}}const P_={get(t,e){return pe(t,"get",""),t[e]}};function O_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,P_),slots:t.slots,emit:t.emit,expose:e}}function po(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tu(io(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kn)return Kn[n](t)},has(e,n){return n in e||n in Kn}})):t.proxy}function k_(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function x_(t){return W(t)&&"__vccOpts"in t}const Ue=(t,e)=>gy(t,e,ir);function Du(t,e,n){const r=arguments.length;return r===2?le(e)&&!H(e)?Xr(e)?De(t,null,[e]):De(t,e):De(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xr(n)&&(n=[n]),De(t,e,n))}const N_="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gi;const Ea=typeof window<"u"&&window.trustedTypes;if(Ea)try{gi=Ea.createPolicy("vue",{createHTML:t=>t})}catch{}const Lu=gi?t=>gi.createHTML(t):t=>t,D_="http://www.w3.org/2000/svg",L_="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,Ia=ut&&ut.createElement("template"),M_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ut.createElementNS(D_,t):e==="mathml"?ut.createElementNS(L_,t):n?ut.createElement(t,{is:n}):ut.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ut.createTextNode(t),createComment:t=>ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ia.innerHTML=Lu(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ia.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},U_=Symbol("_vtc");function F_(t,e,n){const r=t[U_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const va=Symbol("_vod"),B_=Symbol("_vsh"),$_=Symbol(""),j_=/(^|;)\s*display\s*:/;function H_(t,e,n){const r=t.style,s=de(n);let i=!1;if(n&&!s){if(e)if(de(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Nr(r,a,"")}else for(const o in e)n[o]==null&&Nr(r,o,"");for(const o in n)o==="display"&&(i=!0),Nr(r,o,n[o])}else if(s){if(e!==n){const o=r[$_];o&&(n+=";"+o),r.cssText=n,i=j_.test(n)}}else e&&t.removeAttribute("style");va in t&&(t[va]=i?r.display:"",t[B_]&&(r.display="none"))}const Sa=/\s*!important$/;function Nr(t,e,n){if(H(n))n.forEach(r=>Nr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=V_(t,e);Sa.test(n)?t.setProperty(ln(r),n.replace(Sa,""),"important"):t[r]=n}}const Ta=["Webkit","Moz","ms"],Hs={};function V_(t,e){const n=Hs[e];if(n)return n;let r=Fe(e);if(r!=="filter"&&r in t)return Hs[e]=r;r=ls(r);for(let s=0;s<Ta.length;s++){const i=Ta[s]+r;if(i in t)return Hs[e]=i}return e}const Ra="http://www.w3.org/1999/xlink";function Aa(t,e,n,r,s,i=jg(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ra,e.slice(6,e.length)):t.setAttributeNS(Ra,e,n):n==null||i&&!xl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":jt(n)?String(n):n)}function Ca(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lu(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=xl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function W_(t,e,n,r){t.addEventListener(e,n,r)}function q_(t,e,n,r){t.removeEventListener(e,n,r)}const Pa=Symbol("_vei");function z_(t,e,n,r,s=null){const i=t[Pa]||(t[Pa]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=K_(e);if(r){const l=i[e]=Y_(r,s);W_(t,a,l,c)}else o&&(q_(t,a,o,c),i[e]=void 0)}}const Oa=/(?:Once|Passive|Capture)$/;function K_(t){let e;if(Oa.test(t)){e={};let r;for(;r=t.match(Oa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let Vs=0;const G_=Promise.resolve(),J_=()=>Vs||(G_.then(()=>Vs=0),Vs=Date.now());function Y_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;it(X_(r,n.value),e,5,[r])};return n.value=t,n.attached=J_(),n}function X_(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Q_=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?F_(t,r,o):e==="style"?H_(t,n,r):os(e)?zi(e)||z_(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Z_(t,e,r,o))?(Ca(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Aa(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!de(r))?Ca(t,Fe(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Aa(t,e,r,o))};function Z_(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ka(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ka(e)&&de(n)?!1:e in t}const eb=ye({patchProp:Q_},M_);let xa;function tb(){return xa||(xa=n_(eb))}const nb=(...t)=>{const e=tb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sb(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sb(t){return de(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Mu;const ms=t=>Mu=t,Uu=Symbol();function yi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Yn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yn||(Yn={}));function ib(){const t=Ml(!0),e=t.run(()=>oo({}));let n=[],r=[];const s=io({install(i){ms(s),s._a=i,i.provide(Uu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Fu=()=>{};function Na(t,e,n,r=Fu){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ul()&&Vg(s),s}function hn(t,...e){t.slice().forEach(n=>{n(...e)})}const ob=t=>t(),Da=Symbol(),Ws=Symbol();function _i(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];yi(s)&&yi(r)&&t.hasOwnProperty(n)&&!ue(r)&&!Xt(r)?t[n]=_i(s,r):t[n]=r}return t}const ab=Symbol();function cb(t){return!yi(t)||!Object.prototype.hasOwnProperty.call(t,ab)}const{assign:Pt}=Object;function lb(t){return!!(ue(t)&&t.effect)}function ub(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=dy(n.state.value[t]);return Pt(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=io(Ue(()=>{ms(n);const m=n._s.get(t);return o[d].call(m,m)})),f),{}))}return c=Bu(t,l,e,n,r,!0),c}function Bu(t,e,n={},r,s,i){let o;const a=Pt({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],m;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),oo({});let b;function S(q){let K;l=u=!1,typeof q=="function"?(q(r.state.value[t]),K={type:Yn.patchFunction,storeId:t,events:m}):(_i(r.state.value[t],q),K={type:Yn.patchObject,payload:q,storeId:t,events:m});const ce=b=Symbol();ao().then(()=>{b===ce&&(l=!0)}),u=!0,hn(f,K,r.state.value[t])}const A=i?function(){const{state:K}=n,ce=K?K():{};this.$patch(_e=>{Pt(_e,ce)})}:Fu;function R(){o.stop(),f=[],d=[],r._s.delete(t)}const O=(q,K="")=>{if(Da in q)return q[Ws]=K,q;const ce=function(){ms(r);const _e=Array.from(arguments),Oe=[],ve=[];function Ht(z){Oe.push(z)}function St(z){ve.push(z)}hn(d,{args:_e,name:ce[Ws],store:F,after:Ht,onError:St});let ae;try{ae=q.apply(this&&this.$id===t?this:F,_e)}catch(z){throw hn(ve,z),z}return ae instanceof Promise?ae.then(z=>(hn(Oe,z),z)).catch(z=>(hn(ve,z),Promise.reject(z))):(hn(Oe,ae),ae)};return ce[Da]=!0,ce[Ws]=K,ce},D={_p:r,$id:t,$onAction:Na.bind(null,d),$patch:S,$reset:A,$subscribe(q,K={}){const ce=Na(f,q,K.detached,()=>_e()),_e=o.run(()=>Gn(()=>r.state.value[t],Oe=>{(K.flush==="sync"?u:l)&&q({storeId:t,type:Yn.direct,events:m},Oe)},Pt({},c,K)));return ce},$dispose:R},F=sn(D);r._s.set(t,F);const G=(r._a&&r._a.runWithContext||ob)(()=>r._e.run(()=>(o=Ml()).run(()=>e({action:O}))));for(const q in G){const K=G[q];if(ue(K)&&!lb(K)||Xt(K))i||(y&&cb(K)&&(ue(K)?K.value=y[q]:_i(K,y[q])),r.state.value[t][q]=K);else if(typeof K=="function"){const ce=O(K,q);G[q]=ce,a.actions[q]=K}}return Pt(F,G),Pt(Y(F),G),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:q=>{S(K=>{Pt(K,q)})}}),r._p.forEach(q=>{Pt(F,o.run(()=>q({store:F,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(F.$state,y),l=!0,u=!0,F}/*! #__NO_SIDE_EFFECTS__ */function fb(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const c=Jy();return o=o||(c?Ve(Uu,null):null),o&&ms(o),o=Mu,o._s.has(t)||(s?Bu(t,e,r,o):ub(t,r,o)),o._s.get(t)}return i.$id=t,i}const db="modulepreload",hb=function(t){return"/"+t},La={},At=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=c(n.map(l=>{if(l=hb(l),l in La)return;La[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":db,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((m,y)=>{d.addEventListener("load",m),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof document<"u";function $u(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$u(t.default)}const Q=Object.assign;function qs(t,e){const n={};for(const r in e){const s=e[r];n[r]=We(s)?s.map(t):t(s)}return n}const Xn=()=>{},We=Array.isArray,ju=/#/g,mb=/&/g,gb=/\//g,yb=/=/g,_b=/\?/g,Hu=/\+/g,bb=/%5B/g,wb=/%5D/g,Vu=/%5E/g,Eb=/%60/g,Wu=/%7B/g,Ib=/%7C/g,qu=/%7D/g,vb=/%20/g;function mo(t){return encodeURI(""+t).replace(Ib,"|").replace(bb,"[").replace(wb,"]")}function Sb(t){return mo(t).replace(Wu,"{").replace(qu,"}").replace(Vu,"^")}function bi(t){return mo(t).replace(Hu,"%2B").replace(vb,"+").replace(ju,"%23").replace(mb,"%26").replace(Eb,"`").replace(Wu,"{").replace(qu,"}").replace(Vu,"^")}function Tb(t){return bi(t).replace(yb,"%3D")}function Rb(t){return mo(t).replace(ju,"%23").replace(_b,"%3F")}function Ab(t){return t==null?"":Rb(t).replace(gb,"%2F")}function or(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Cb=/\/$/,Pb=t=>t.replace(Cb,"");function zs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Nb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:or(o)}}function Ob(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ma(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&An(e.matched[r],n.matched[s])&&zu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function An(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xb(t[n],e[n]))return!1;return!0}function xb(t,e){return We(t)?Ua(t,e):We(e)?Ua(e,t):t===e}function Ua(t,e){return We(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Nb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ar;(function(t){t.pop="pop",t.push="push"})(ar||(ar={}));var Qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qn||(Qn={}));function Db(t){if(!t)if(mn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Pb(t)}const Lb=/^[^#]+#/;function Mb(t,e){return t.replace(Lb,"#")+e}function Ub(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const gs=()=>({left:window.scrollX,top:window.scrollY});function Fb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ub(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Fa(t,e){return(history.state?history.state.position-e:-1)+t}const wi=new Map;function Bb(t,e){wi.set(t,e)}function $b(t){const e=wi.get(t);return wi.delete(t),e}let jb=()=>location.protocol+"//"+location.host;function Ku(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ma(c,"")}return Ma(n,t)+r+s}function Hb(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=Ku(t,location),y=n.value,b=e.value;let S=0;if(d){if(n.value=m,e.value=d,o&&o===y){o=null;return}S=b?d.position-b.position:0}else r(m);s.forEach(A=>{A(n.value,y,{delta:S,type:ar.pop,direction:S?S>0?Qn.forward:Qn.back:Qn.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Q({},d.state,{scroll:gs()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ba(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?gs():null}}function Vb(t){const{history:e,location:n}=window,r={value:Ku(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:jb()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=Q({},e.state,Ba(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Q({},s.value,e.state,{forward:c,scroll:gs()});i(u.current,u,!0);const f=Q({},Ba(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Wb(t){t=Db(t);const e=Vb(t),n=Hb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:Mb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function qb(t){return typeof t=="string"||t&&typeof t=="object"}function Gu(t){return typeof t=="string"||typeof t=="symbol"}const Ju=Symbol("");var $a;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($a||($a={}));function Cn(t,e){return Q(new Error,{type:t,[Ju]:!0},e)}function lt(t,e){return t instanceof Error&&Ju in t&&(e==null||!!(t.type&e))}const ja="[^/]+?",zb={sensitive:!1,strict:!1,start:!0,end:!0},Kb=/[.+*?^${}()[\]/\\]/g;function Gb(t,e){const n=Q({},zb,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(Kb,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:b,optional:S,regexp:A}=d;i.push({name:y,repeatable:b,optional:S});const R=A||ja;if(R!==ja){m+=10;try{new RegExp(`(${R})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+D.message)}}let O=b?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(O=S&&l.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),s+=O,m+=20,S&&(m+=-8),b&&(m+=-20),R===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:b,optional:S}=m,A=y in l?l[y]:"";if(We(A)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=We(A)?A.join("/"):A;if(!R)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Jb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Yu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Jb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ha(r))return 1;if(Ha(s))return-1}return s.length-r.length}function Ha(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Yb={type:0,value:""},Xb=/[a-zA-Z0-9_]/;function Qb(t){if(!t)return[[]];if(t==="/")return[[Yb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Xb.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Zb(t,e,n){const r=Gb(Qb(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ew(t,e){const n=[],r=new Map;e=za({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,d,m){const y=!m,b=Wa(f);b.aliasOf=m&&m.record;const S=za(e,f),A=[b];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of D)A.push(Wa(Q({},b,{components:m?m.record.components:b.components,path:F,aliasOf:m?m.record:b})))}let R,O;for(const D of A){const{path:F}=D;if(d&&F[0]!=="/"){const te=d.record.path,G=te[te.length-1]==="/"?"":"/";D.path=d.record.path+(F&&G+F)}if(R=Zb(D,d,S),m?m.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),y&&f.name&&!qa(R)&&o(f.name)),Xu(R)&&c(R),b.children){const te=b.children;for(let G=0;G<te.length;G++)i(te[G],R,m&&m.children[G])}m=m||R}return O?()=>{o(O)}:Xn}function o(f){if(Gu(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=rw(f,n);n.splice(d,0,f),f.record.name&&!qa(f)&&r.set(f.record.name,f)}function l(f,d){let m,y={},b,S;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Cn(1,{location:f});S=m.record.name,y=Q(Va(d.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Va(f.params,m.keys.map(O=>O.name))),b=m.stringify(y)}else if(f.path!=null)b=f.path,m=n.find(O=>O.re.test(b)),m&&(y=m.parse(b),S=m.record.name);else{if(m=d.name?r.get(d.name):n.find(O=>O.re.test(d.path)),!m)throw Cn(1,{location:f,currentLocation:d});S=m.record.name,y=Q({},d.params,f.params),b=m.stringify(y)}const A=[];let R=m;for(;R;)A.unshift(R.record),R=R.parent;return{name:S,path:b,params:y,matched:A,meta:nw(A)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Va(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Wa(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:tw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function tw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function qa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nw(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function za(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function rw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Yu(t,e[i])<0?r=i:n=i+1}const s=sw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function sw(t){let e=t;for(;e=e.parent;)if(Xu(e)&&Yu(t,e)===0)return e}function Xu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function iw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Hu," "),o=i.indexOf("="),a=or(o<0?i:i.slice(0,o)),c=o<0?null:or(i.slice(o+1));if(a in e){let l=e[a];We(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ka(t){let e="";for(let n in t){const r=t[n];if(n=Tb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(We(r)?r.map(i=>i&&bi(i)):[r&&bi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ow(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=We(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const aw=Symbol(""),Ga=Symbol(""),ys=Symbol(""),Qu=Symbol(""),Ei=Symbol("");function Mn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Cn(4,{from:n,to:e})):d instanceof Error?c(d):qb(d)?c(Cn(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function Ks(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if($u(c)){const u=(c.__vccOpts||c)[e];u&&i.push(xt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=pb(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&xt(m,n,r,o,a,s)()}))}}return i}function Ja(t){const e=Ve(ys),n=Ve(Qu),r=Ue(()=>{const c=In(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(An.bind(null,u));if(d>-1)return d;const m=Ya(c[l-2]);return l>1&&Ya(u)===m&&f[f.length-1].path!==m?f.findIndex(An.bind(null,c[l-2])):d}),i=Ue(()=>s.value>-1&&dw(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&zu(n.params,r.value.params));function a(c={}){if(fw(c)){const l=e[In(t.replace)?"replace":"push"](In(t.to)).catch(Xn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function cw(t){return t.length===1?t[0]:t}const lw=au({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ja,setup(t,{slots:e}){const n=sn(Ja(t)),{options:r}=Ve(ys),s=Ue(()=>({[Xa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&cw(e.default(n));return t.custom?i:Du("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),uw=lw;function fw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!We(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ya(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xa=(t,e,n)=>t??e??n,hw=au({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ve(Ei),s=Ue(()=>t.route||r.value),i=Ve(Ga,0),o=Ue(()=>{let l=In(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ue(()=>s.value.matched[o.value]);Or(Ga,Ue(()=>o.value+1)),Or(aw,a),Or(Ei,s);const c=oo();return Gn(()=>[c.value,a.value,t.name],([l,u,f],[d,m,y])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!An(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Qa(n.default,{Component:d,route:l});const m=f.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,S=Du(d,Q({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Qa(n.default,{Component:S,route:l})||S}}});function Qa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pw=hw;function mw(t){const e=ew(t.routes,t),n=t.parseQuery||iw,r=t.stringifyQuery||Ka,s=t.history,i=Mn(),o=Mn(),a=Mn(),c=ly(Ct);let l=Ct;mn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qs.bind(null,E=>""+E),f=qs.bind(null,Ab),d=qs.bind(null,or);function m(E,L){let x,M;return Gu(E)?(x=e.getRecordMatcher(E),M=L):M=E,e.addRoute(M,x)}function y(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function b(){return e.getRoutes().map(E=>E.record)}function S(E){return!!e.getRecordMatcher(E)}function A(E,L){if(L=Q({},L||c.value),typeof E=="string"){const g=zs(n,E,L.path),w=e.resolve({path:g.path},L),v=s.createHref(g.fullPath);return Q(g,w,{params:d(w.params),hash:or(g.hash),redirectedFrom:void 0,href:v})}let x;if(E.path!=null)x=Q({},E,{path:zs(n,E.path,L.path).path});else{const g=Q({},E.params);for(const w in g)g[w]==null&&delete g[w];x=Q({},E,{params:f(g)}),L.params=f(L.params)}const M=e.resolve(x,L),ne=E.hash||"";M.params=u(d(M.params));const h=Ob(r,Q({},E,{hash:Sb(ne),path:M.path})),p=s.createHref(h);return Q({fullPath:h,hash:ne,query:r===Ka?ow(E.query):E.query||{}},M,{redirectedFrom:void 0,href:p})}function R(E){return typeof E=="string"?zs(n,E,c.value.path):Q({},E)}function O(E,L){if(l!==E)return Cn(8,{from:L,to:E})}function D(E){return G(E)}function F(E){return D(Q(R(E),{replace:!0}))}function te(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let M=typeof x=="function"?x(E):x;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=R(M):{path:M},M.params={}),Q({query:E.query,hash:E.hash,params:M.path!=null?{}:E.params},M)}}function G(E,L){const x=l=A(E),M=c.value,ne=E.state,h=E.force,p=E.replace===!0,g=te(x);if(g)return G(Q(R(g),{state:typeof g=="object"?Q({},ne,g.state):ne,force:h,replace:p}),L||x);const w=x;w.redirectedFrom=L;let v;return!h&&kb(r,M,x)&&(v=Cn(16,{to:w,from:M}),ze(M,M,!0,!1)),(v?Promise.resolve(v):ce(w,M)).catch(I=>lt(I)?lt(I,2)?I:Tt(I):X(I,w,M)).then(I=>{if(I){if(lt(I,2))return G(Q({replace:p},R(I.to),{state:typeof I.to=="object"?Q({},ne,I.to.state):ne,force:h}),L||w)}else I=Oe(w,M,!0,p,ne);return _e(w,M,I),I})}function q(E,L){const x=O(E,L);return x?Promise.reject(x):Promise.resolve()}function K(E){const L=fn.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function ce(E,L){let x;const[M,ne,h]=gw(E,L);x=Ks(M.reverse(),"beforeRouteLeave",E,L);for(const g of M)g.leaveGuards.forEach(w=>{x.push(xt(w,E,L))});const p=q.bind(null,E,L);return x.push(p),Me(x).then(()=>{x=[];for(const g of i.list())x.push(xt(g,E,L));return x.push(p),Me(x)}).then(()=>{x=Ks(ne,"beforeRouteUpdate",E,L);for(const g of ne)g.updateGuards.forEach(w=>{x.push(xt(w,E,L))});return x.push(p),Me(x)}).then(()=>{x=[];for(const g of h)if(g.beforeEnter)if(We(g.beforeEnter))for(const w of g.beforeEnter)x.push(xt(w,E,L));else x.push(xt(g.beforeEnter,E,L));return x.push(p),Me(x)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),x=Ks(h,"beforeRouteEnter",E,L,K),x.push(p),Me(x))).then(()=>{x=[];for(const g of o.list())x.push(xt(g,E,L));return x.push(p),Me(x)}).catch(g=>lt(g,8)?g:Promise.reject(g))}function _e(E,L,x){a.list().forEach(M=>K(()=>M(E,L,x)))}function Oe(E,L,x,M,ne){const h=O(E,L);if(h)return h;const p=L===Ct,g=mn?history.state:{};x&&(M||p?s.replace(E.fullPath,Q({scroll:p&&g&&g.scroll},ne)):s.push(E.fullPath,ne)),c.value=E,ze(E,L,x,p),Tt()}let ve;function Ht(){ve||(ve=s.listen((E,L,x)=>{if(!wr.listening)return;const M=A(E),ne=te(M);if(ne){G(Q(ne,{replace:!0,force:!0}),M).catch(Xn);return}l=M;const h=c.value;mn&&Bb(Fa(h.fullPath,x.delta),gs()),ce(M,h).catch(p=>lt(p,12)?p:lt(p,2)?(G(Q(R(p.to),{force:!0}),M).then(g=>{lt(g,20)&&!x.delta&&x.type===ar.pop&&s.go(-1,!1)}).catch(Xn),Promise.reject()):(x.delta&&s.go(-x.delta,!1),X(p,M,h))).then(p=>{p=p||Oe(M,h,!1),p&&(x.delta&&!lt(p,8)?s.go(-x.delta,!1):x.type===ar.pop&&lt(p,20)&&s.go(-1,!1)),_e(M,h,p)}).catch(Xn)}))}let St=Mn(),ae=Mn(),z;function X(E,L,x){Tt(E);const M=ae.list();return M.length?M.forEach(ne=>ne(E,L,x)):console.error(E),Promise.reject(E)}function at(){return z&&c.value!==Ct?Promise.resolve():new Promise((E,L)=>{St.add([E,L])})}function Tt(E){return z||(z=!E,Ht(),St.list().forEach(([L,x])=>E?x(E):L()),St.reset()),E}function ze(E,L,x,M){const{scrollBehavior:ne}=t;if(!mn||!ne)return Promise.resolve();const h=!x&&$b(Fa(E.fullPath,0))||(M||!x)&&history.state&&history.state.scroll||null;return ao().then(()=>ne(E,L,h)).then(p=>p&&Fb(p)).catch(p=>X(p,E,L))}const Se=E=>s.go(E);let un;const fn=new Set,wr={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:b,resolve:A,options:t,push:D,replace:F,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:at,install(E){const L=this;E.component("RouterLink",uw),E.component("RouterView",pw),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>In(c)}),mn&&!un&&c.value===Ct&&(un=!0,D(s.location).catch(ne=>{}));const x={};for(const ne in Ct)Object.defineProperty(x,ne,{get:()=>c.value[ne],enumerable:!0});E.provide(ys,L),E.provide(Qu,Ql(x)),E.provide(Ei,c);const M=E.unmount;fn.add(E),E.unmount=function(){fn.delete(E),fn.size<1&&(l=Ct,ve&&ve(),ve=null,c.value=Ct,un=!1,z=!1),M()}}};function Me(E){return E.reduce((L,x)=>L.then(()=>K(x)),Promise.resolve())}return wr}function gw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>An(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>An(l,c))||s.push(c))}return[n,r,s]}function eI(){return Ve(ys)}const yw=Object.assign({"./routes/business.js":()=>At(()=>import("./business-CVqu_W9m.js"),[]),"./routes/community.js":()=>At(()=>import("./community-CVqu_W9m.js"),[]),"./routes/index.js":()=>At(()=>import("./index-Ct2xEi6j.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),"./routes/kingdom.js":()=>At(()=>import("./kingdom-IWM-b4wZ.js"),[]),"./routes/me.js":()=>At(()=>import("./me-Bs0DscN0.js"),[]),"./routes/pro.js":()=>At(()=>import("./pro-D54ynLlh.js"),[]),"./routes/shop.js":()=>At(()=>import("./shop-BBDzb5zf.js"),[]),"./routes/store.js":()=>At(()=>import("./store-CykOVnSA.js"),[])});class _w{constructor(e){this.software=e}async loadRoutes(){const e=yw[`./routes/${this.software}.js`];if(!e)throw new Error(`No routes found for ${this.software}`);const{default:n}=await e();return n}async create(){const e=await this.loadRoutes();return mw({history:Wb(),routes:e})}}const bw={__name:"App",setup(t){return console.log("great-unknown"),(e,n)=>{const r=Fy("RouterView");return g_(),b_("main",null,[De(r)])}}};function Zu(t,e){return function(){return t.apply(e,arguments)}}const{toString:ww}=Object.prototype,{getPrototypeOf:go}=Object,{iterator:_s,toStringTag:ef}=Symbol,bs=(t=>e=>{const n=ww.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qe=t=>(t=t.toLowerCase(),e=>bs(e)===t),ws=t=>e=>typeof e===t,{isArray:kn}=Array,cr=ws("undefined");function gr(t){return t!==null&&!cr(t)&&t.constructor!==null&&!cr(t.constructor)&&Ce(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const tf=qe("ArrayBuffer");function Ew(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&tf(t.buffer),e}const Iw=ws("string"),Ce=ws("function"),nf=ws("number"),yr=t=>t!==null&&typeof t=="object",vw=t=>t===!0||t===!1,Dr=t=>{if(bs(t)!=="object")return!1;const e=go(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(ef in t)&&!(_s in t)},Sw=t=>{if(!yr(t)||gr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Tw=qe("Date"),Rw=qe("File"),Aw=qe("Blob"),Cw=qe("FileList"),Pw=t=>yr(t)&&Ce(t.pipe),Ow=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ce(t.append)&&((e=bs(t))==="formdata"||e==="object"&&Ce(t.toString)&&t.toString()==="[object FormData]"))},kw=qe("URLSearchParams"),[xw,Nw,Dw,Lw]=["ReadableStream","Request","Response","Headers"].map(qe),Mw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _r(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),kn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{if(gr(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function rf(t,e){if(gr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Gt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sf=t=>!cr(t)&&t!==Gt;function Ii(){const{caseless:t}=sf(this)&&this||{},e={},n=(r,s)=>{const i=t&&rf(e,s)||s;Dr(e[i])&&Dr(r)?e[i]=Ii(e[i],r):Dr(r)?e[i]=Ii({},r):kn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&_r(arguments[r],n);return e}const Uw=(t,e,n,{allOwnKeys:r}={})=>(_r(e,(s,i)=>{n&&Ce(s)?t[i]=Zu(s,n):t[i]=s},{allOwnKeys:r}),t),Fw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Bw=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},$w=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&go(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},jw=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Hw=t=>{if(!t)return null;if(kn(t))return t;let e=t.length;if(!nf(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Vw=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&go(Uint8Array)),Ww=(t,e)=>{const r=(t&&t[_s]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},qw=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},zw=qe("HTMLFormElement"),Kw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Za=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Gw=qe("RegExp"),of=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};_r(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Jw=t=>{of(t,(e,n)=>{if(Ce(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Ce(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Yw=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return kn(t)?r(t):r(String(t).split(e)),n},Xw=()=>{},Qw=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Zw(t){return!!(t&&Ce(t.append)&&t[ef]==="FormData"&&t[_s])}const eE=t=>{const e=new Array(10),n=(r,s)=>{if(yr(r)){if(e.indexOf(r)>=0)return;if(gr(r))return r;if(!("toJSON"in r)){e[s]=r;const i=kn(r)?[]:{};return _r(r,(o,a)=>{const c=n(o,s+1);!cr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},tE=qe("AsyncFunction"),nE=t=>t&&(yr(t)||Ce(t))&&Ce(t.then)&&Ce(t.catch),af=((t,e)=>t?setImmediate:e?((n,r)=>(Gt.addEventListener("message",({source:s,data:i})=>{s===Gt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Gt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ce(Gt.postMessage)),rE=typeof queueMicrotask<"u"?queueMicrotask.bind(Gt):typeof process<"u"&&process.nextTick||af,sE=t=>t!=null&&Ce(t[_s]),_={isArray:kn,isArrayBuffer:tf,isBuffer:gr,isFormData:Ow,isArrayBufferView:Ew,isString:Iw,isNumber:nf,isBoolean:vw,isObject:yr,isPlainObject:Dr,isEmptyObject:Sw,isReadableStream:xw,isRequest:Nw,isResponse:Dw,isHeaders:Lw,isUndefined:cr,isDate:Tw,isFile:Rw,isBlob:Aw,isRegExp:Gw,isFunction:Ce,isStream:Pw,isURLSearchParams:kw,isTypedArray:Vw,isFileList:Cw,forEach:_r,merge:Ii,extend:Uw,trim:Mw,stripBOM:Fw,inherits:Bw,toFlatObject:$w,kindOf:bs,kindOfTest:qe,endsWith:jw,toArray:Hw,forEachEntry:Ww,matchAll:qw,isHTMLForm:zw,hasOwnProperty:Za,hasOwnProp:Za,reduceDescriptors:of,freezeMethods:Jw,toObjectSet:Yw,toCamelCase:Kw,noop:Xw,toFiniteNumber:Qw,findKey:rf,global:Gt,isContextDefined:sf,isSpecCompliantForm:Zw,toJSONObject:eE,isAsyncFn:tE,isThenable:nE,setImmediate:af,asap:rE,isIterable:sE};function V(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const cf=V.prototype,lf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{lf[t]={value:t}});Object.defineProperties(V,lf);Object.defineProperty(cf,"isAxiosError",{value:!0});V.from=(t,e,n,r,s,i)=>{const o=Object.create(cf);return _.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),V.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const iE=null;function vi(t){return _.isPlainObject(t)||_.isArray(t)}function uf(t){return _.endsWith(t,"[]")?t.slice(0,-2):t}function ec(t,e,n){return t?t.concat(e).map(function(s,i){return s=uf(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function oE(t){return _.isArray(t)&&!t.some(vi)}const aE=_.toFlatObject(_,{},null,function(e){return/^is[A-Z]/.test(e)});function Es(t,e,n){if(!_.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,S){return!_.isUndefined(S[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(e);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(_.isBoolean(y))return y.toString();if(!c&&_.isBlob(y))throw new V("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,b,S){let A=y;if(y&&!S&&typeof y=="object"){if(_.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&oE(y)||(_.isFileList(y)||_.endsWith(b,"[]"))&&(A=_.toArray(y)))return b=uf(b),A.forEach(function(O,D){!(_.isUndefined(O)||O===null)&&e.append(o===!0?ec([b],D,i):o===null?b:b+"[]",l(O))}),!1}return vi(y)?!0:(e.append(ec(S,b,i),l(y)),!1)}const f=[],d=Object.assign(aE,{defaultVisitor:u,convertValue:l,isVisitable:vi});function m(y,b){if(!_.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(y),_.forEach(y,function(A,R){(!(_.isUndefined(A)||A===null)&&s.call(e,A,_.isString(R)?R.trim():R,b,d))===!0&&m(A,b?b.concat(R):[R])}),f.pop()}}if(!_.isObject(t))throw new TypeError("data must be an object");return m(t),e}function tc(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function yo(t,e){this._pairs=[],t&&Es(t,this,e)}const ff=yo.prototype;ff.append=function(e,n){this._pairs.push([e,n])};ff.toString=function(e){const n=e?function(r){return e.call(this,r,tc)}:tc;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function cE(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function df(t,e,n){if(!e)return t;const r=n&&n.encode||cE;_.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=_.isURLSearchParams(e)?e.toString():new yo(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class nc{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,function(r){r!==null&&e(r)})}}const hf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lE=typeof URLSearchParams<"u"?URLSearchParams:yo,uE=typeof FormData<"u"?FormData:null,fE=typeof Blob<"u"?Blob:null,dE={isBrowser:!0,classes:{URLSearchParams:lE,FormData:uE,Blob:fE},protocols:["http","https","file","blob","url","data"]},_o=typeof window<"u"&&typeof document<"u",Si=typeof navigator=="object"&&navigator||void 0,hE=_o&&(!Si||["ReactNative","NativeScript","NS"].indexOf(Si.product)<0),pE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mE=_o&&window.location.href||"http://localhost",gE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_o,hasStandardBrowserEnv:hE,hasStandardBrowserWebWorkerEnv:pE,navigator:Si,origin:mE},Symbol.toStringTag,{value:"Module"})),ge={...gE,...dE};function yE(t,e){return Es(t,new ge.classes.URLSearchParams,{visitor:function(n,r,s,i){return ge.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function _E(t){return _.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function bE(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function pf(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=bE(s[o])),!a)}if(_.isFormData(t)&&_.isFunction(t.entries)){const n={};return _.forEachEntry(t,(r,s)=>{e(_E(r),s,n,0)}),n}return null}function wE(t,e,n){if(_.isString(t))try{return(e||JSON.parse)(t),_.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const br={transitional:hf,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(e);if(i&&_.isHTMLForm(e)&&(e=new FormData(e)),_.isFormData(e))return s?JSON.stringify(pf(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e)||_.isReadableStream(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yE(e,this.formSerializer).toString();if((a=_.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Es(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),wE(e)):e}],transformResponse:[function(e){const n=this.transitional||br.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(e)||_.isReadableStream(e))return e;if(e&&_.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?V.from(a,V.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],t=>{br.headers[t]={}});const EE=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),IE=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&EE[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},rc=Symbol("internals");function Un(t){return t&&String(t).trim().toLowerCase()}function Lr(t){return t===!1||t==null?t:_.isArray(t)?t.map(Lr):String(t)}function vE(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const SE=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Gs(t,e,n,r,s){if(_.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!_.isString(e)){if(_.isString(r))return e.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(e)}}function TE(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function RE(t,e){const n=_.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Pe=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Un(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Lr(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));if(_.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(_.isString(e)&&(e=e.trim())&&!SE(e))o(IE(e),n);else if(_.isObject(e)&&_.isIterable(e)){let a={},c,l;for(const u of e){if(!_.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?_.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=Un(e),e){const r=_.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return vE(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Un(e),e){const r=_.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Gs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Un(o),o){const a=_.findKey(r,o);a&&(!n||Gs(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Gs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=Lr(s),delete n[i];return}const a=e?TE(i):String(i).trim();a!==i&&delete n[i],n[a]=Lr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[rc]=this[rc]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Un(o);r[a]||(RE(s,o),r[a]=!0)}return _.isArray(e)?e.forEach(i):i(e),this}};Pe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Pe.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});_.freezeMethods(Pe);function Js(t,e){const n=this||br,r=e||n,s=Pe.from(r.headers);let i=r.data;return _.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function mf(t){return!!(t&&t.__CANCEL__)}function xn(t,e,n){V.call(this,t??"canceled",V.ERR_CANCELED,e,n),this.name="CanceledError"}_.inherits(xn,V,{__CANCEL__:!0});function gf(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function AE(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function CE(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function PE(t,e){let n=0,r=1e3/e,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),t(...l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Zr=(t,e,n=3)=>{let r=0;const s=CE(50,250);return PE(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},sc=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},ic=t=>(...e)=>_.asap(()=>t(...e)),OE=ge.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,ge.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(ge.origin),ge.navigator&&/(msie|trident)/i.test(ge.navigator.userAgent)):()=>!0,kE=ge.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function xE(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function NE(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function yf(t,e,n){let r=!xE(e);return t&&(r||n==!1)?NE(t,e):e}const oc=t=>t instanceof Pe?{...t}:t;function an(t,e){e=e||{};const n={};function r(l,u,f,d){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:d},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f,d){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f,d)}else return r(l,u,f,d)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(oc(l),oc(u),f,!0)};return _.forEach(Object.keys({...t,...e}),function(u){const f=c[u]||s,d=f(t[u],e[u],u);_.isUndefined(d)&&f!==a||(n[u]=d)}),n}const _f=t=>{const e=an({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Pe.from(o),e.url=df(yf(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(ge.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(e)),r||r!==!1&&OE(e.url))){const l=s&&i&&kE.read(i);l&&o.set(s,l)}return e},DE=typeof XMLHttpRequest<"u",LE=DE&&function(t){return new Promise(function(n,r){const s=_f(t);let i=s.data;const o=Pe.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,d,m,y;function b(){m&&m(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function A(){if(!S)return;const O=Pe.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),F={data:!a||a==="text"||a==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:O,config:t,request:S};gf(function(G){n(G),b()},function(G){r(G),b()},F),S=null}"onloadend"in S?S.onloadend=A:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(A)},S.onabort=function(){S&&(r(new V("Request aborted",V.ECONNABORTED,t,S)),S=null)},S.onerror=function(){r(new V("Network Error",V.ERR_NETWORK,t,S)),S=null},S.ontimeout=function(){let D=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||hf;s.timeoutErrorMessage&&(D=s.timeoutErrorMessage),r(new V(D,F.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,t,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&_.forEach(o.toJSON(),function(D,F){S.setRequestHeader(F,D)}),_.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),a&&a!=="json"&&(S.responseType=s.responseType),l&&([d,y]=Zr(l,!0),S.addEventListener("progress",d)),c&&S.upload&&([f,m]=Zr(c),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=O=>{S&&(r(!O||O.type?new xn(null,t,S):O),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=AE(s.url);if(R&&ge.protocols.indexOf(R)===-1){r(new V("Unsupported protocol "+R+":",V.ERR_BAD_REQUEST,t));return}S.send(i||null)})},ME=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof V?u:new xn(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new V(`timeout ${e} of ms exceeded`,V.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},UE=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},FE=async function*(t,e){for await(const n of BE(t))yield*UE(n,e)},BE=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},ac=(t,e,n,r)=>{const s=FE(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let d=i+=f;n(d)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Is=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",bf=Is&&typeof ReadableStream=="function",$E=Is&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),wf=(t,...e)=>{try{return!!t(...e)}catch{return!1}},jE=bf&&wf(()=>{let t=!1;const e=new Request(ge.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),cc=64*1024,Ti=bf&&wf(()=>_.isReadableStream(new Response("").body)),es={stream:Ti&&(t=>t.body)};Is&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!es[e]&&(es[e]=_.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new V(`Response type '${e}' is not supported`,V.ERR_NOT_SUPPORT,r)})})})(new Response);const HE=async t=>{if(t==null)return 0;if(_.isBlob(t))return t.size;if(_.isSpecCompliantForm(t))return(await new Request(ge.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(_.isArrayBufferView(t)||_.isArrayBuffer(t))return t.byteLength;if(_.isURLSearchParams(t)&&(t=t+""),_.isString(t))return(await $E(t)).byteLength},VE=async(t,e)=>{const n=_.toFiniteNumber(t.getContentLength());return n??HE(e)},WE=Is&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=_f(t);l=l?(l+"").toLowerCase():"text";let m=ME([s,i&&i.toAbortSignal()],o),y;const b=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let S;try{if(c&&jE&&n!=="get"&&n!=="head"&&(S=await VE(u,r))!==0){let F=new Request(e,{method:"POST",body:r,duplex:"half"}),te;if(_.isFormData(r)&&(te=F.headers.get("content-type"))&&u.setContentType(te),F.body){const[G,q]=sc(S,Zr(ic(c)));r=ac(F.body,cc,G,q)}}_.isString(f)||(f=f?"include":"omit");const A="credentials"in Request.prototype;y=new Request(e,{...d,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:A?f:void 0});let R=await fetch(y,d);const O=Ti&&(l==="stream"||l==="response");if(Ti&&(a||O&&b)){const F={};["status","statusText","headers"].forEach(K=>{F[K]=R[K]});const te=_.toFiniteNumber(R.headers.get("content-length")),[G,q]=a&&sc(te,Zr(ic(a),!0))||[];R=new Response(ac(R.body,cc,G,()=>{q&&q(),b&&b()}),F)}l=l||"text";let D=await es[_.findKey(es,l)||"text"](R,t);return!O&&b&&b(),await new Promise((F,te)=>{gf(F,te,{data:D,headers:Pe.from(R.headers),status:R.status,statusText:R.statusText,config:t,request:y})})}catch(A){throw b&&b(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new V("Network Error",V.ERR_NETWORK,t,y),{cause:A.cause||A}):V.from(A,A&&A.code,t,y)}}),Ri={http:iE,xhr:LE,fetch:WE};_.forEach(Ri,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const lc=t=>`- ${t}`,qE=t=>_.isFunction(t)||t===null||t===!1,Ef={getAdapter:t=>{t=_.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!qE(n)&&(r=Ri[(o=String(n)).toLowerCase()],r===void 0))throw new V(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(lc).join(`
`):" "+lc(i[0]):"as no adapter specified";throw new V("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ri};function Ys(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new xn(null,t)}function uc(t){return Ys(t),t.headers=Pe.from(t.headers),t.data=Js.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ef.getAdapter(t.adapter||br.adapter)(t).then(function(r){return Ys(t),r.data=Js.call(t,t.transformResponse,r),r.headers=Pe.from(r.headers),r},function(r){return mf(r)||(Ys(t),r&&r.response&&(r.response.data=Js.call(t,t.transformResponse,r.response),r.response.headers=Pe.from(r.response.headers))),Promise.reject(r)})}const If="1.11.0",vs={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{vs[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const fc={};vs.transitional=function(e,n,r){function s(i,o){return"[Axios v"+If+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new V(s(o," has been removed"+(n?" in "+n:"")),V.ERR_DEPRECATED);return n&&!fc[o]&&(fc[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};vs.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function zE(t,e,n){if(typeof t!="object")throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new V("option "+i+" must be "+c,V.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new V("Unknown option "+i,V.ERR_BAD_OPTION)}}const Mr={assertOptions:zE,validators:vs},Xe=Mr.validators;let Zt=class{constructor(e){this.defaults=e||{},this.interceptors={request:new nc,response:new nc}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=an(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Mr.assertOptions(r,{silentJSONParsing:Xe.transitional(Xe.boolean),forcedJSONParsing:Xe.transitional(Xe.boolean),clarifyTimeoutError:Xe.transitional(Xe.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Mr.assertOptions(s,{encode:Xe.function,serialize:Xe.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Mr.assertOptions(n,{baseUrl:Xe.spelling("baseURL"),withXsrfToken:Xe.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Pe.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,d;if(!c){const y=[uc.bind(this),void 0];for(y.unshift(...a),y.push(...l),d=y.length,u=Promise.resolve(n);f<d;)u=u.then(y[f++],y[f++]);return u}d=a.length;let m=n;for(f=0;f<d;){const y=a[f++],b=a[f++];try{m=y(m)}catch(S){b.call(this,S);break}}try{u=uc.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=an(this.defaults,e);const n=yf(e.baseURL,e.url,e.allowAbsoluteUrls);return df(n,e.params,e.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(e){Zt.prototype[e]=function(n,r){return this.request(an(r||{},{method:e,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(an(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Zt.prototype[e]=n(),Zt.prototype[e+"Form"]=n(!0)});let KE=class vf{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new xn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new vf(function(s){e=s}),cancel:e}}};function GE(t){return function(n){return t.apply(null,n)}}function JE(t){return _.isObject(t)&&t.isAxiosError===!0}const Ai={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ai).forEach(([t,e])=>{Ai[e]=t});function Sf(t){const e=new Zt(t),n=Zu(Zt.prototype.request,e);return _.extend(n,Zt.prototype,e,{allOwnKeys:!0}),_.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Sf(an(t,s))},n}const fe=Sf(br);fe.Axios=Zt;fe.CanceledError=xn;fe.CancelToken=KE;fe.isCancel=mf;fe.VERSION=If;fe.toFormData=Es;fe.AxiosError=V;fe.Cancel=fe.CanceledError;fe.all=function(e){return Promise.all(e)};fe.spread=GE;fe.isAxiosError=JE;fe.mergeConfig=an;fe.AxiosHeaders=Pe;fe.formToJSON=t=>pf(_.isHTMLForm(t)?new FormData(t):t);fe.getAdapter=Ef.getAdapter;fe.HttpStatusCode=Ai;fe.default=fe;const{Axios:rI,AxiosError:sI,CanceledError:iI,isCancel:oI,CancelToken:aI,VERSION:cI,all:lI,Cancel:uI,isAxiosError:fI,spread:dI,toFormData:hI,AxiosHeaders:pI,HttpStatusCode:mI,formToJSON:gI,getAdapter:yI,mergeConfig:_I}=fe,YE=fe.create({baseURL:"https://augmentplus.space/api"}),XE=fb("unknown",()=>{const t=sn({name:"pro"}),e=sn({});async function n(){console.info("App Initialized");try{let{data:r}=await YE.get("/data");Object.assign(e,r),console.log(e)}catch(r){console.error(r)}}return{init:n,software:t,info:e}}),QE=ib(),Tr=nb(bw);Yh(Pg,async t=>{Tr.use(QE);const e=XE();console.log(t),e.init(),Tr.provide("software",{name:"pro"});const n="pro";(async()=>{const s=await new _w(n).create();Tr.use(s),Tr.mount("#app")})()});export{pw as R,At as _,Ou as a,ZE as b,b_ as c,De as d,In as e,Ve as i,g_ as o,oo as r,Hg as t,eI as u};
