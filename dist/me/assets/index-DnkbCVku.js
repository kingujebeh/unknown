const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Index-BNnIRM3x.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Index-CCWmWFN9.js","assets/Index-BIcFPRFK.js","assets/Index-DeH8zlGo.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Df=()=>{};var Io={};/**
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
 */const hc=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Mf=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},pc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(hc(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Mf(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Lf;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Lf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(e){const t=hc(e);return pc.encodeByteArray(t,!0)},mc=function(e){return Uf(e).replace(/\./g,"")},gc=function(e){try{return pc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ff(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bf=()=>Ff().__FIREBASE_DEFAULTS__,$f=()=>{if(typeof process>"u"||typeof Io>"u")return;const e=Io.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jf=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gc(e[1]);return t&&JSON.parse(t)},Ai=()=>{try{return Df()||Bf()||$f()||jf()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Hf=e=>Ai()?.emulatorHosts?.[e],yc=()=>Ai()?.config,_c=e=>Ai()?.[`_${e}`];/**
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
 */class Vf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ts(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wf(e){return(await fetch(e,{credentials:"include"})).ok}const Bn={};function qf(){const e={prod:[],emulator:[]};for(const t of Object.keys(Bn))Bn[t]?e.emulator.push(t):e.prod.push(t);return e}function zf(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let So=!1;function Kf(e,t){if(typeof window>"u"||typeof document>"u"||!ts(window.location.host)||Bn[e]===t||Bn[e]||So)return;Bn[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=qf().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,m){d.setAttribute("width","24"),d.setAttribute("id",m),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{So=!0,o()},d}function u(d,m){d.setAttribute("id",m),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=zf(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),S=document.getElementById(b)||document.createElement("a"),A=n("preprendIcon"),R=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const O=d.element;a(O),u(S,b);const D=l();c(R,A),O.append(R,y,S,D),document.body.appendChild(O)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Jf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bc(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Yf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xf(){const e=ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function wc(){try{return typeof indexedDB=="object"}catch{return!1}}function Ec(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}function Qf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Zf="FirebaseError";class ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Zf,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?ed(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ot(s,a,r)}}function ed(e,t){return e.replace(td,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const td=/\{\$([^}]+)}/g;function nd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function en(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(To(i)&&To(o)){if(!en(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function To(e){return e!==null&&typeof e=="object"}/**
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
 */function lr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function rd(e,t){const n=new sd(e,t);return n.subscribe.bind(n)}class sd{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");id(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Is),s.error===void 0&&(s.error=Is),s.complete===void 0&&(s.complete=Is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function id(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Is(){}/**
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
 */const od=1e3,ad=2,cd=14400*1e3,ld=.5;function Ro(e,t=od,n=ad){const r=t*Math.pow(n,e),s=Math.round(ld*r*(Math.random()-.5)*2);return Math.min(cd,r+s)}/**
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
 */function vt(e){return e&&e._delegate?e._delegate:e}class st{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class ud{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Vf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dd(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fd(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fd(e){return e===qt?void 0:e}function dd(e){return e.instantiationMode==="EAGER"}/**
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
 */class hd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ud(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const pd={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},md=re.INFO,gd={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},yd=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=gd[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ci{constructor(t){this.name=t,this._logLevel=md,this._logHandler=yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const _d=(e,t)=>t.some(n=>e instanceof n);let Ao,Co;function bd(){return Ao||(Ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wd(){return Co||(Co=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vc=new WeakMap,Ys=new WeakMap,Ic=new WeakMap,Ss=new WeakMap,Pi=new WeakMap;function Ed(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ut(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&vc.set(n,e)}).catch(()=>{}),Pi.set(t,e),t}function vd(e){if(Ys.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ys.set(e,t)}let Xs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ys.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ic.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Id(e){Xs=e(Xs)}function Sd(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ts(this),t,...n);return Ic.set(r,t.sort?t.sort():[t]),Ut(r)}:wd().includes(e)?function(...t){return e.apply(Ts(this),t),Ut(vc.get(this))}:function(...t){return Ut(e.apply(Ts(this),t))}}function Td(e){return typeof e=="function"?Sd(e):(e instanceof IDBTransaction&&vd(e),_d(e,bd())?new Proxy(e,Xs):e)}function Ut(e){if(e instanceof IDBRequest)return Ed(e);if(Ss.has(e))return Ss.get(e);const t=Td(e);return t!==e&&(Ss.set(e,t),Pi.set(t,e)),t}const Ts=e=>Pi.get(e);function Sc(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ut(o.result),c.oldVersion,c.newVersion,Ut(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Rd=["get","getKey","getAll","getAllKeys","count"],Ad=["put","add","delete","clear"],Rs=new Map;function Po(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rs.get(t))return Rs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ad.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Rd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Rs.set(t,i),i}Id(e=>({...e,get:(t,n,r)=>Po(t,n)||e.get(t,n,r),has:(t,n)=>!!Po(t,n)||e.has(t,n)}));/**
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
 */class Cd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pd(e){return e.getComponent()?.type==="VERSION"}const Qs="@firebase/app",Oo="0.14.1";/**
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
 */const gt=new Ci("@firebase/app"),Od="@firebase/app-compat",kd="@firebase/analytics-compat",xd="@firebase/analytics",Nd="@firebase/app-check-compat",Dd="@firebase/app-check",Md="@firebase/auth",Ld="@firebase/auth-compat",Ud="@firebase/database",Fd="@firebase/data-connect",Bd="@firebase/database-compat",$d="@firebase/functions",jd="@firebase/functions-compat",Hd="@firebase/installations",Vd="@firebase/installations-compat",Wd="@firebase/messaging",qd="@firebase/messaging-compat",zd="@firebase/performance",Kd="@firebase/performance-compat",Gd="@firebase/remote-config",Jd="@firebase/remote-config-compat",Yd="@firebase/storage",Xd="@firebase/storage-compat",Qd="@firebase/firestore",Zd="@firebase/ai",eh="@firebase/firestore-compat",th="firebase",nh="12.1.0";/**
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
 */const Zs="[DEFAULT]",rh={[Qs]:"fire-core",[Od]:"fire-core-compat",[xd]:"fire-analytics",[kd]:"fire-analytics-compat",[Dd]:"fire-app-check",[Nd]:"fire-app-check-compat",[Md]:"fire-auth",[Ld]:"fire-auth-compat",[Ud]:"fire-rtdb",[Fd]:"fire-data-connect",[Bd]:"fire-rtdb-compat",[$d]:"fire-fn",[jd]:"fire-fn-compat",[Hd]:"fire-iid",[Vd]:"fire-iid-compat",[Wd]:"fire-fcm",[qd]:"fire-fcm-compat",[zd]:"fire-perf",[Kd]:"fire-perf-compat",[Gd]:"fire-rc",[Jd]:"fire-rc-compat",[Yd]:"fire-gcs",[Xd]:"fire-gcs-compat",[Qd]:"fire-fst",[eh]:"fire-fst-compat",[Zd]:"fire-vertex","fire-js":"fire-js",[th]:"fire-js-all"};/**
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
 */const Ur=new Map,sh=new Map,ei=new Map;function ko(e,t){try{e.container.addComponent(t)}catch(n){gt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yt(e){const t=e.name;if(ei.has(t))return gt.debug(`There were multiple attempts to register component ${t}.`),!1;ei.set(t,e);for(const n of Ur.values())ko(n,e);for(const n of sh.values())ko(n,e);return!0}function Pn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function dt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const ih={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new cn("app","Firebase",ih);/**
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
 */class oh{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=nh;function Tc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Zs,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(n||(n=yc()),!n)throw Ft.create("no-options");const i=Ur.get(s);if(i){if(en(n,i.options)&&en(r,i.config))return i;throw Ft.create("duplicate-app",{appName:s})}const o=new hd(s);for(const c of ei.values())o.addComponent(c);const a=new oh(n,r,o);return Ur.set(s,a),a}function Rc(e=Zs){const t=Ur.get(e);if(!t&&e===Zs&&yc())return Tc();if(!t)throw Ft.create("no-app",{appName:e});return t}function Ze(e,t,n){let r=rh[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gt.warn(o.join(" "));return}yt(new st(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const ah="firebase-heartbeat-database",ch=1,Zn="firebase-heartbeat-store";let As=null;function Ac(){return As||(As=Sc(ah,ch,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Zn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),As}async function lh(e){try{const n=(await Ac()).transaction(Zn),r=await n.objectStore(Zn).get(Cc(e));return await n.done,r}catch(t){if(t instanceof ot)gt.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t?.message});gt.warn(n.message)}}}async function xo(e,t){try{const r=(await Ac()).transaction(Zn,"readwrite");await r.objectStore(Zn).put(t,Cc(e)),await r.done}catch(n){if(n instanceof ot)gt.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n?.message});gt.warn(r.message)}}}function Cc(e){return`${e.name}!${e.options.appId}`}/**
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
 */const uh=1024,fh=30;class dh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ph(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=No();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>fh){const s=mh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){gt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=No(),{heartbeatsToSend:n,unsentEntries:r}=hh(this._heartbeatsCache.heartbeats),s=mc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return gt.warn(t),""}}}function No(){return new Date().toISOString().substring(0,10)}function hh(e,t=uh){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Do(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Do(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ph{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wc()?Ec().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lh(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return xo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return xo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Do(e){return mc(JSON.stringify({version:2,heartbeats:e})).length}function mh(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function gh(e){yt(new st("platform-logger",t=>new Cd(t),"PRIVATE")),yt(new st("heartbeat",t=>new dh(t),"PRIVATE")),Ze(Qs,Oo,e),Ze(Qs,Oo,"esm2020"),Ze("fire-js","")}gh("");var yh="firebase",_h="12.1.0";/**
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
 */Ze(yh,_h,"app");function Pc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bh=Pc,Oc=new cn("auth","Firebase",Pc());/**
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
 */const Fr=new Ci("@firebase/auth");function wh(e,...t){Fr.logLevel<=re.WARN&&Fr.warn(`Auth (${ur}): ${e}`,...t)}function Rr(e,...t){Fr.logLevel<=re.ERROR&&Fr.error(`Auth (${ur}): ${e}`,...t)}/**
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
 */function _t(e,...t){throw Oi(e,...t)}function et(e,...t){return Oi(e,...t)}function kc(e,t,n){const r={...bh(),[t]:n};return new cn("auth","Firebase",r).create(t,{appName:e.name})}function Jt(e){return kc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Oc.create(e,...t)}function $(e,t,...n){if(!e)throw Oi(t,...n)}function pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Rr(t),new Error(t)}function bt(e,t){e||pt(t)}/**
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
 */function ti(){return typeof self<"u"&&self.location?.href||""}function Eh(){return Mo()==="http:"||Mo()==="https:"}function Mo(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function vh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eh()||bc()||"connection"in navigator)?navigator.onLine:!0}function Ih(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class fr{constructor(t,n){this.shortDelay=t,this.longDelay=n,bt(n>t,"Short delay should be less than long delay!"),this.isMobile=Gf()||Yf()}get(){return vh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ki(e,t){bt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class xc{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Sh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Th=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rh=new fr(3e4,6e4);function xi(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function On(e,t,n,r,s={}){return Nc(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=lr({key:e.config.apiKey,...o}).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:c,...i};return Jf()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ts(e.emulatorConfig.host)&&(l.credentials="include"),xc.fetch()(await Dc(e,e.config.apiHost,n,a),l)})}async function Nc(e,t,n){e._canInitEmulator=!1;const r={...Sh,...t};try{const s=new Ch(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Er(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Er(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Er(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Er(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw kc(e,u,l);_t(e,u)}}catch(s){if(s instanceof ot)throw s;_t(e,"network-request-failed",{message:String(s)})}}async function Ah(e,t,n,r,s={}){const i=await On(e,t,n,r,s);return"mfaPendingCredential"in i&&_t(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Dc(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?ki(e.config,s):`${e.config.apiScheme}://${s}`;return Th.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Ch{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Rh.get())})}}function Er(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Ph(e,t){return On(e,"POST","/v1/accounts:delete",t)}async function Br(e,t){return On(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function $n(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Oh(e,t=!1){const n=vt(e),r=await n.getIdToken(t),s=Ni(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:$n(Cs(s.auth_time)),issuedAtTime:$n(Cs(s.iat)),expirationTime:$n(Cs(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Cs(e){return Number(e)*1e3}function Ni(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=gc(n);return s?JSON.parse(s):(Rr("Failed to decode base64 JWT payload"),null)}catch(s){return Rr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Lo(e){const t=Ni(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function er(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ot&&kh(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function kh({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class xh{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ni{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $r(e){const t=e.auth,n=await e.getIdToken(),r=await er(e,Br(t,{idToken:n}));$(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?Mc(s.providerUserInfo):[],o=Dh(e.providerData,i),a=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ni(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,u)}async function Nh(e){const t=vt(e);await $r(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Dh(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Mc(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Mh(e,t){const n=await Nc(e,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await Dc(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&ts(e.emulatorConfig.host)&&(c.credentials="include"),xc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lh(e,t){return On(e,"POST","/v2/accounts:revokeToken",xi(e,t))}/**
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
 */class yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Lo(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=Lo(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Mh(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new yn;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new yn,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function Rt(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Be{constructor({uid:t,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new xh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ni(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await er(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Oh(this,t)}reload(){return Nh(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Be({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(Jt(this.auth));const t=await this.getIdToken();return await er(this,Ph(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:m,providerData:y,stsTokenManager:b}=n;$(f&&b,t,"internal-error");const S=yn.fromJSON(this.name,b);$(typeof f=="string",t,"internal-error"),Rt(r,t.name),Rt(s,t.name),$(typeof d=="boolean",t,"internal-error"),$(typeof m=="boolean",t,"internal-error"),Rt(i,t.name),Rt(o,t.name),Rt(a,t.name),Rt(c,t.name),Rt(l,t.name),Rt(u,t.name);const A=new Be({uid:f,auth:t,email:s,emailVerified:d,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:S,createdAt:l,lastLoginAt:u});return y&&Array.isArray(y)&&(A.providerData=y.map(R=>({...R}))),c&&(A._redirectEventId=c),A}static async _fromIdTokenResponse(t,n,r=!1){const s=new yn;s.updateFromServerResponse(n);const i=new Be({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await $r(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Mc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new yn;a.updateFromIdToken(r);const c=new Be({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ni(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const Uo=new Map;function mt(e){bt(e instanceof Function,"Expected a class definition");let t=Uo.get(e);return t?(bt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Uo.set(e,t),t)}/**
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
 */class Lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Lc.type="NONE";const Fo=Lc;/**
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
 */function Ar(e,t,n){return`firebase:${e}:${t}:${n}`}class _n{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ar(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ar("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Br(this.auth,{idToken:t}).catch(()=>{});return n?Be._fromGetAccountInfoResponse(this.auth,n,t):null}return Be._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new _n(mt(Fo),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||mt(Fo);const o=Ar(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await Br(t,{idToken:u}).catch(()=>{});if(!d)break;f=await Be._fromGetAccountInfoResponse(t,d,u)}else f=Be._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _n(i,t,r))}}/**
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
 */function Bo(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($c(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hc(t))return"Blackberry";if(Vc(t))return"Webos";if(Fc(t))return"Safari";if((t.includes("chrome/")||Bc(t))&&!t.includes("edge/"))return"Chrome";if(jc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Uc(e=ve()){return/firefox\//i.test(e)}function Fc(e=ve()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Bc(e=ve()){return/crios\//i.test(e)}function $c(e=ve()){return/iemobile/i.test(e)}function jc(e=ve()){return/android/i.test(e)}function Hc(e=ve()){return/blackberry/i.test(e)}function Vc(e=ve()){return/webos/i.test(e)}function Di(e=ve()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Uh(e=ve()){return Di(e)&&!!window.navigator?.standalone}function Fh(){return Xf()&&document.documentMode===10}function Wc(e=ve()){return Di(e)||jc(e)||Vc(e)||Hc(e)||/windows phone/i.test(e)||$c(e)}/**
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
 */function qc(e,t=[]){let n;switch(e){case"Browser":n=Bo(ve());break;case"Worker":n=`${Bo(ve())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${r}`}/**
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
 */class Bh{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function $h(e,t={}){return On(e,"GET","/v2/passwordPolicy",xi(e,t))}/**
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
 */const jh=6;class Hh{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??jh,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Vh{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $o(this),this.idTokenSubscription=new $o(this),this.beforeStateQueue=new Bh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _n.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Br(this,{idToken:t}),r=await Be._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(dt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(t);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await $r(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ih()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(dt(this.app))return Promise.reject(Jt(this));const n=t?vt(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(Jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return dt(this.app)?Promise.reject(Jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $h(this),n=new Hh(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new cn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Lh(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&mt(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=qc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&wh(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Mi(e){return vt(e)}class $o{constructor(t){this.auth=t,this.observer=null,this.addObserver=rd(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Li={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wh(e){Li=e}function qh(e){return Li.loadJS(e)}function zh(){return Li.gapiScript}function Kh(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Gh(e,t){const n=Pn(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(en(i,t??{}))return s;_t(s,"already-initialized")}return n.initialize({options:t})}function Jh(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(mt);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Yh(e,t,n){const r=Mi(e);$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=zc(t),{host:o,port:a}=Xh(t),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(en(l,r.config.emulator)&&en(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ts(o)?(Wf(`${i}//${o}${c}`),Kf("Auth",!0)):Qh()}function zc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xh(e){const t=zc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jo(o)}}}function jo(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Qh(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Kc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(t){return pt("not implemented")}_linkToIdToken(t,n){return pt("not implemented")}_getReauthenticationResolver(t){return pt("not implemented")}}/**
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
 */async function bn(e,t){return Ah(e,"POST","/v1/accounts:signInWithIdp",xi(e,t))}/**
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
 */const Zh="http://localhost";class tn extends Kc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new tn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new tn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return bn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,bn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,bn(t,n)}buildRequest(){const t={requestUri:Zh,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=lr(n)}return t}}/**
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
 */class Gc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dr extends Gc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends dr{constructor(){super("facebook.com")}static credential(t){return tn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return tn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Dt extends dr{constructor(){super("github.com")}static credential(t){return tn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
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
 */class Mt extends dr{constructor(){super("twitter.com")}static credential(t,n){return tn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */class Sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Be._fromIdTokenResponse(t,r,s),o=Ho(r);return new Sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Ho(r);return new Sn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Ho(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class jr extends ot{constructor(t,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jr.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new jr(t,n,r,s)}}function Jc(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jr._fromErrorAndOperation(e,i,t,r):i})}async function ep(e,t,n=!1){const r=await er(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Sn._forOperation(e,"link",r)}/**
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
 */async function tp(e,t,n=!1){const{auth:r}=e;if(dt(r.app))return Promise.reject(Jt(r));const s="reauthenticate";try{const i=await er(e,Jc(r,s,t,e),n);$(i.idToken,r,"internal-error");const o=Ni(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(e.uid===a,r,"user-mismatch"),Sn._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&_t(r,"user-mismatch"),i}}/**
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
 */async function np(e,t,n=!1){if(dt(e.app))return Promise.reject(Jt(e));const r="signIn",s=await Jc(e,r,t),i=await Sn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function rp(e,t,n,r){return vt(e).onIdTokenChanged(t,n,r)}function sp(e,t,n){return vt(e).beforeAuthStateChanged(t,n)}function ip(e,t,n,r){return vt(e).onAuthStateChanged(t,n,r)}const Hr="__sak";/**
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
 */class Yc{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const op=1e3,ap=10;class Xc extends Yc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Fh()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,ap):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},op)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xc.type="LOCAL";const cp=Xc;/**
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
 */class Qc extends Yc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Qc.type="SESSION";const Zc=Qc;/**
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
 */function lp(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ns{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ns(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await lp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ns.receivers=[];/**
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
 */function Ui(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class up{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ui("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function fp(e){tt().location.href=e}/**
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
 */function el(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function dp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hp(){return navigator?.serviceWorker?.controller||null}function pp(){return el()?self:null}/**
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
 */const tl="firebaseLocalStorageDb",mp=1,Vr="firebaseLocalStorage",nl="fbase_key";class hr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rs(e,t){return e.transaction([Vr],t?"readwrite":"readonly").objectStore(Vr)}function gp(){const e=indexedDB.deleteDatabase(tl);return new hr(e).toPromise()}function ri(){const e=indexedDB.open(tl,mp);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Vr,{keyPath:nl})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Vr)?t(r):(r.close(),await gp(),t(await ri()))})})}async function Vo(e,t,n){const r=rs(e,!0).put({[nl]:t,value:n});return new hr(r).toPromise()}async function yp(e,t){const n=rs(e,!1).get(t),r=await new hr(n).toPromise();return r===void 0?null:r.value}function Wo(e,t){const n=rs(e,!0).delete(t);return new hr(n).toPromise()}const _p=800,bp=3;class rl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ri(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>bp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return el()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ns._getInstance(pp()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await dp(),!this.activeServiceWorker)return;this.sender=new up(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||hp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ri();return await Vo(t,Hr,"1"),await Wo(t,Hr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vo(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>yp(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wo(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=rs(s,!1).getAll();return new hr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rl.type="LOCAL";const wp=rl;new fr(3e4,6e4);/**
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
 */function Ep(e,t){return t?mt(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Fi extends Kc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return bn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return bn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function vp(e){return np(e.auth,new Fi(e),e.bypassAuthState)}function Ip(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),tp(n,new Fi(e),e.bypassAuthState)}async function Sp(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),ep(n,new Fi(e),e.bypassAuthState)}/**
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
 */class sl{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return vp;case"linkViaPopup":case"linkViaRedirect":return Sp;case"reauthViaPopup":case"reauthViaRedirect":return Ip;default:_t(this.auth,"internal-error")}}resolve(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tp=new fr(2e3,1e4);class gn extends sl{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const t=Ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Tp.get())};t()}}gn.currentPopupAction=null;/**
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
 */const Rp="pendingRedirect",Cr=new Map;class Ap extends sl{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Cr.get(this.auth._key());if(!t){try{const r=await Cp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Cr.set(this.auth._key(),t)}return this.bypassAuthState||Cr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cp(e,t){const n=kp(t),r=Op(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Pp(e,t){Cr.set(e._key(),t)}function Op(e){return mt(e._redirectPersistence)}function kp(e){return Ar(Rp,e.config.apiKey,e.name)}async function xp(e,t,n=!1){if(dt(e.app))return Promise.reject(Jt(e));const r=Mi(e),s=Ep(r,t),o=await new Ap(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Np=600*1e3;class Dp{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Mp(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!il(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";n.onError(et(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Np&&this.cachedEventUids.clear(),this.cachedEventUids.has(qo(t))}saveEventToCache(t){this.cachedEventUids.add(qo(t)),this.lastProcessedEventTime=Date.now()}}function qo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function il({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Mp(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return il(e);default:return!1}}/**
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
 */async function Lp(e,t={}){return On(e,"GET","/v1/projects",t)}/**
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
 */const Up=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fp=/^https?/;async function Bp(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Lp(e);for(const n of t)try{if($p(n))return}catch{}_t(e,"unauthorized-domain")}function $p(e){const t=ti(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fp.test(n))return!1;if(Up.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jp=new fr(3e4,6e4);function zo(){const e=tt().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Hp(e){return new Promise((t,n)=>{function r(){zo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zo(),n(et(e,"network-request-failed"))},timeout:jp.get()})}if(tt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(tt().gapi?.load)r();else{const s=Kh("iframefcb");return tt()[s]=()=>{gapi.load?r():n(et(e,"network-request-failed"))},qh(`${zh()}?onload=${s}`).catch(i=>n(i))}}).catch(t=>{throw Pr=null,t})}let Pr=null;function Vp(e){return Pr=Pr||Hp(e),Pr}/**
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
 */const Wp=new fr(5e3,15e3),qp="__/auth/iframe",zp="emulator/auth/iframe",Kp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jp(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ki(t,zp):`https://${e.config.authDomain}/${qp}`,r={apiKey:t.apiKey,appName:e.name,v:ur},s=Gp.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lr(r).slice(1)}`}async function Yp(e){const t=await Vp(e),n=tt().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:Jp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(e,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},Wp.get());function c(){tt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Xp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qp=500,Zp=600,em="_blank",tm="http://localhost";class Ko{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nm(e,t,n,r=Qp,s=Zp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...Xp,width:r.toString(),height:s.toString(),top:i,left:o},l=ve().toLowerCase();n&&(a=Bc(l)?em:n),Uc(l)&&(t=t||tm,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(Uh(l)&&a!=="_self")return rm(t||"",a),new Ko(null);const f=window.open(t||"",a,u);$(f,e,"popup-blocked");try{f.focus()}catch{}return new Ko(f)}function rm(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sm="__/auth/handler",im="emulator/auth/handler",om=encodeURIComponent("fac");async function Go(e,t,n,r,s,i){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ur,eventId:s};if(t instanceof Gc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",nd(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof dr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${om}=${encodeURIComponent(c)}`:"";return`${am(e)}?${lr(a).slice(1)}${l}`}function am({config:e}){return e.emulator?ki(e,im):`https://${e.authDomain}/${sm}`}/**
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
 */const Ps="webStorageSupport";class cm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zc,this._completeRedirectFn=xp,this._overrideRedirectResult=Pp}async _openPopup(t,n,r,s){bt(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Go(t,n,r,ti(),s);return nm(t,i,Ui())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Go(t,n,r,ti(),s);return fp(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Yp(t),r=new Dp(t);return n.register("authEvent",s=>($(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ps,{type:Ps},s=>{const i=s?.[0]?.[Ps];i!==void 0&&n(!!i),_t(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bp(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wc()||Fc()||Di()}}const lm=cm;var Jo="@firebase/auth",Yo="1.11.0";/**
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
 */class um{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fm(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dm(e){yt(new st("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qc(e)},l=new Vh(r,s,i,c);return Jh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),yt(new st("auth-internal",t=>{const n=Mi(t.getProvider("auth").getImmediate());return(r=>new um(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Jo,Yo,fm(e)),Ze(Jo,Yo,"esm2020")}/**
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
 */const hm=300,pm=_c("authIdTokenMaxAge")||hm;let Xo=null;const mm=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pm)return;const s=n?.token;Xo!==s&&(Xo=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gm(e=Rc()){const t=Pn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Gh(e,{popupRedirectResolver:lm,persistence:[wp,cp,Zc]}),r=_c("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=mm(i.toString());sp(n,o,()=>o(n.currentUser)),rp(n,a=>o(a))}}const s=Hf("auth");return s&&Yh(n,`http://${s}`),n}function ym(){return document.getElementsByTagName("head")?.[0]??document}Wh({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ym().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dm("Browser");const ol="@firebase/installations",Bi="0.6.19";/**
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
 */const al=1e4,cl=`w:${Bi}`,ll="FIS_v2",_m="https://firebaseinstallations.googleapis.com/v1",bm=3600*1e3,wm="installations",Em="Installations";/**
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
 */const vm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nn=new cn(wm,Em,vm);function ul(e){return e instanceof ot&&e.code.includes("request-failed")}/**
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
 */function fl({projectId:e}){return`${_m}/projects/${e}/installations`}function dl(e){return{token:e.token,requestStatus:2,expiresIn:Sm(e.expiresIn),creationTime:Date.now()}}async function hl(e,t){const r=(await t.json()).error;return nn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function pl({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Im(e,{refreshToken:t}){const n=pl(e);return n.append("Authorization",Tm(t)),n}async function ml(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Sm(e){return Number(e.replace("s","000"))}function Tm(e){return`${ll} ${e}`}/**
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
 */async function Rm({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=fl(e),s=pl(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:ll,appId:e.appId,sdkVersion:cl},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await ml(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:dl(l.authToken)}}else throw await hl("Create Installation",c)}/**
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
 */function gl(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Am(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Cm=/^[cdef][\w-]{21}$/,si="";function Pm(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Om(e);return Cm.test(n)?n:si}catch{return si}}function Om(e){return Am(e).substr(0,22)}/**
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
 */function ss(e){return`${e.appName}!${e.appId}`}/**
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
 */const yl=new Map;function _l(e,t){const n=ss(e);bl(n,t),km(n,t)}function bl(e,t){const n=yl.get(e);if(n)for(const r of n)r(t)}function km(e,t){const n=xm();n&&n.postMessage({key:e,fid:t}),Nm()}let Kt=null;function xm(){return!Kt&&"BroadcastChannel"in self&&(Kt=new BroadcastChannel("[Firebase] FID Change"),Kt.onmessage=e=>{bl(e.data.key,e.data.fid)}),Kt}function Nm(){yl.size===0&&Kt&&(Kt.close(),Kt=null)}/**
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
 */const Dm="firebase-installations-database",Mm=1,rn="firebase-installations-store";let Os=null;function $i(){return Os||(Os=Sc(Dm,Mm,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(rn)}}})),Os}async function Wr(e,t){const n=ss(e),s=(await $i()).transaction(rn,"readwrite"),i=s.objectStore(rn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&_l(e,t.fid),t}async function wl(e){const t=ss(e),r=(await $i()).transaction(rn,"readwrite");await r.objectStore(rn).delete(t),await r.done}async function is(e,t){const n=ss(e),s=(await $i()).transaction(rn,"readwrite"),i=s.objectStore(rn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&_l(e,a.fid),a}/**
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
 */async function ji(e){let t;const n=await is(e.appConfig,r=>{const s=Lm(r),i=Um(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===si?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Lm(e){const t=e||{fid:Pm(),registrationStatus:0};return El(t)}function Um(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(nn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Fm(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Bm(e)}:{installationEntry:t}}async function Fm(e,t){try{const n=await Rm(e,t);return Wr(e.appConfig,n)}catch(n){throw ul(n)&&n.customData.serverCode===409?await wl(e.appConfig):await Wr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Bm(e){let t=await Qo(e.appConfig);for(;t.registrationStatus===1;)await gl(100),t=await Qo(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ji(e);return r||n}return t}function Qo(e){return is(e,t=>{if(!t)throw nn.create("installation-not-found");return El(t)})}function El(e){return $m(e)?{fid:e.fid,registrationStatus:0}:e}function $m(e){return e.registrationStatus===1&&e.registrationTime+al<Date.now()}/**
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
 */async function jm({appConfig:e,heartbeatServiceProvider:t},n){const r=Hm(e,n),s=Im(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:cl,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await ml(()=>fetch(r,a));if(c.ok){const l=await c.json();return dl(l)}else throw await hl("Generate Auth Token",c)}function Hm(e,{fid:t}){return`${fl(e)}/${t}/authTokens:generate`}/**
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
 */async function Hi(e,t=!1){let n;const r=await is(e.appConfig,i=>{if(!vl(i))throw nn.create("not-registered");const o=i.authToken;if(!t&&qm(o))return i;if(o.requestStatus===1)return n=Vm(e,t),i;{if(!navigator.onLine)throw nn.create("app-offline");const a=Km(i);return n=Wm(e,a),a}});return n?await n:r.authToken}async function Vm(e,t){let n=await Zo(e.appConfig);for(;n.authToken.requestStatus===1;)await gl(100),n=await Zo(e.appConfig);const r=n.authToken;return r.requestStatus===0?Hi(e,t):r}function Zo(e){return is(e,t=>{if(!vl(t))throw nn.create("not-registered");const n=t.authToken;return Gm(n)?{...t,authToken:{requestStatus:0}}:t})}async function Wm(e,t){try{const n=await jm(e,t),r={...t,authToken:n};return await Wr(e.appConfig,r),n}catch(n){if(ul(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wl(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await Wr(e.appConfig,r)}throw n}}function vl(e){return e!==void 0&&e.registrationStatus===2}function qm(e){return e.requestStatus===2&&!zm(e)}function zm(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+bm}function Km(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Gm(e){return e.requestStatus===1&&e.requestTime+al<Date.now()}/**
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
 */async function Jm(e){const t=e,{installationEntry:n,registrationPromise:r}=await ji(t);return r?r.catch(console.error):Hi(t).catch(console.error),n.fid}/**
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
 */async function Ym(e,t=!1){const n=e;return await Xm(n),(await Hi(n,t)).token}async function Xm(e){const{registrationPromise:t}=await ji(e);t&&await t}/**
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
 */function Qm(e){if(!e||!e.options)throw ks("App Configuration");if(!e.name)throw ks("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ks(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ks(e){return nn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Il="installations",Zm="installations-internal",eg=e=>{const t=e.getProvider("app").getImmediate(),n=Qm(t),r=Pn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tg=e=>{const t=e.getProvider("app").getImmediate(),n=Pn(t,Il).getImmediate();return{getId:()=>Jm(n),getToken:s=>Ym(n,s)}};function ng(){yt(new st(Il,eg,"PUBLIC")),yt(new st(Zm,tg,"PRIVATE"))}ng();Ze(ol,Bi);Ze(ol,Bi,"esm2020");/**
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
 */const qr="analytics",rg="firebase_id",sg="origin",ig=60*1e3,og="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vi="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ae=new Ci("@firebase/analytics");/**
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
 */const ag={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new cn("analytics","Analytics",ag);/**
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
 */function cg(e){if(!e.startsWith(Vi)){const t=Me.create("invalid-gtag-resource",{gtagURL:e});return Ae.warn(t.message),""}return e}function Sl(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function lg(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ug(e,t){const n=lg("firebase-js-sdk-policy",{createScriptURL:cg}),r=document.createElement("script"),s=`${Vi}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function fg(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function dg(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Sl(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){Ae.error(a)}e("config",s,i)}async function hg(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Sl(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Ae.error(i)}}function pg(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await hg(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await dg(e,t,n,r,a,c)}else if(i==="consent"){const[a,c]=o;e("consent",a,c)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){Ae.error(a)}}return s}function mg(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=pg(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function gg(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Vi)&&n.src.includes(e))return n;return null}/**
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
 */const yg=30,_g=1e3;class bg{constructor(t={},n=_g){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Tl=new bg;function wg(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Eg(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:wg(n)},s=og.replace("{app-id}",t),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function vg(e,t=Tl,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Me.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Me.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Tg;return setTimeout(async()=>{a.abort()},ig),Rl({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Rl(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Tl){const{appId:i,measurementId:o}=e;try{await Ig(r,t)}catch(a){if(o)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await Eg(e);return s.deleteThrottleMetadata(i),a}catch(a){const c=a;if(!Sg(c)){if(s.deleteThrottleMetadata(i),o)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw a}const l=Number(c?.customData?.httpStatus)===503?Ro(n,s.intervalMillis,yg):Ro(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),Ae.debug(`Calling attemptFetch again in ${l} millis`),Rl(e,u,r,s)}}function Ig(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Me.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Sg(e){if(!(e instanceof ot)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Tg{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Rg(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o={...r,send_to:i};e("event",n,o)}}/**
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
 */async function Ag(){if(wc())try{await Ec()}catch(e){return Ae.warn(Me.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return Ae.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cg(e,t,n,r,s,i,o){const a=vg(e);a.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>Ae.error(d)),t.push(a);const c=Ag().then(d=>{if(d)return r.getId()}),[l,u]=await Promise.all([a,c]);gg(i)||ug(i,l.measurementId),s("js",new Date);const f=o?.config??{};return f[sg]="firebase",f.update=!0,u!=null&&(f[rg]=u),s("config",l.measurementId,f),l.measurementId}/**
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
 */class Pg{constructor(t){this.app=t}_delete(){return delete jn[this.app.options.appId],Promise.resolve()}}let jn={},ea=[];const ta={};let xs="dataLayer",Og="gtag",na,Al,ra=!1;function kg(){const e=[];if(bc()&&e.push("This is a browser extension environment."),Qf()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Me.create("invalid-analytics-context",{errorInfo:t});Ae.warn(n.message)}}function xg(e,t,n){kg();const r=e.options.appId;if(!r)throw Me.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(jn[r]!=null)throw Me.create("already-exists",{id:r});if(!ra){fg(xs);const{wrappedGtag:i,gtagCore:o}=mg(jn,ea,ta,xs,Og);Al=i,na=o,ra=!0}return jn[r]=Cg(e,ea,ta,t,na,xs,n),new Pg(e)}function Ng(e=Rc()){e=vt(e);const t=Pn(e,qr);return t.isInitialized()?t.getImmediate():Dg(e)}function Dg(e,t={}){const n=Pn(e,qr);if(n.isInitialized()){const s=n.getImmediate();if(en(t,n.getOptions()))return s;throw Me.create("already-initialized")}return n.initialize({options:t})}function Mg(e,t,n,r){e=vt(e),Rg(Al,jn[e.app.options.appId],t,n,r).catch(s=>Ae.error(s))}const sa="@firebase/analytics",ia="0.10.18";function Lg(){yt(new st(qr,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return xg(r,s,n)},"PUBLIC")),yt(new st("analytics-internal",e,"PRIVATE")),Ze(sa,ia),Ze(sa,ia,"esm2020");function e(t){try{const n=t.getProvider(qr).getImmediate();return{logEvent:(r,s,i)=>Mg(n,r,s,i)}}catch(n){throw Me.create("interop-component-reg-failed",{reason:n})}}}Lg();const Ug={apiKey:"AIzaSyC4Ge5BojUJkC4_kvSkj9a4johP4tOd7RA",authDomain:"great-unknown.firebaseapp.com",projectId:"great-unknown",storageBucket:"great-unknown.firebasestorage.app",messagingSenderId:"199011519338",appId:"1:199011519338:web:86c235a1af6ac6e0b8f313",measurementId:"G-JDQ21T5BBY"},Cl=Tc(Ug);Ng(Cl);const Fg=gm(Cl);/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const oe={},wn=[],nt=()=>{},Bg=()=>!1,os=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),qi=e=>e.startsWith("onUpdate:"),ye=Object.assign,zi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$g=Object.prototype.hasOwnProperty,Z=(e,t)=>$g.call(e,t),H=Array.isArray,En=e=>as(e)==="[object Map]",Pl=e=>as(e)==="[object Set]",W=e=>typeof e=="function",de=e=>typeof e=="string",$t=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Ol=e=>(le(e)||W(e))&&W(e.then)&&W(e.catch),kl=Object.prototype.toString,as=e=>kl.call(e),jg=e=>as(e).slice(8,-1),xl=e=>as(e)==="[object Object]",Ki=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hn=Wi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Hg=/-(\w)/g,Fe=cs(e=>e.replace(Hg,(t,n)=>n?n.toUpperCase():"")),Vg=/\B([A-Z])/g,ln=cs(e=>e.replace(Vg,"-$1").toLowerCase()),ls=cs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ns=cs(e=>e?`on${ls(e)}`:""),Bt=(e,t)=>!Object.is(e,t),Ds=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ii=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Wg=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oa;const us=()=>oa||(oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gi(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?Gg(r):Gi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(de(e)||le(e))return e}const qg=/;(?![^(]*\))/g,zg=/:([^]+)/,Kg=/\/\*[^]*?\*\//g;function Gg(e){const t={};return e.replace(Kg,"").split(qg).forEach(n=>{if(n){const r=n.split(zg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ji(e){let t="";if(de(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Ji(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Jg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yg=Wi(Jg);function Nl(e){return!!e||e===""}const Dl=e=>!!(e&&e.__v_isRef===!0),Xg=e=>de(e)?e:e==null?"":H(e)||le(e)&&(e.toString===kl||!W(e.toString))?Dl(e)?Xg(e.value):JSON.stringify(e,Ml,2):String(e),Ml=(e,t)=>Dl(t)?Ml(e,t.value):En(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Ms(r,i)+" =>"]=s,n),{})}:Pl(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ms(n))}:$t(t)?Ms(t):le(t)&&!H(t)&&!xl(t)?String(t):t,Ms=(e,t="")=>{var n;return $t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class Ll{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=he,!t&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=he;try{return he=this,t()}finally{he=n}}}on(){++this._on===1&&(this.prevScope=he,he=this)}off(){this._on>0&&--this._on===0&&(he=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ul(e){return new Ll(e)}function Fl(){return he}function Qg(e,t=!1){he&&he.cleanups.push(e)}let ie;const Ls=new WeakSet;class Bl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,he&&he.active&&he.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ls.has(this)&&(Ls.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,aa(this),Hl(this);const t=ie,n=je;ie=this,je=!0;try{return this.fn()}finally{Vl(this),ie=t,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qi(t);this.deps=this.depsTail=void 0,aa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ls.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oi(this)&&this.run()}get dirty(){return oi(this)}}let $l=0,Vn,Wn;function jl(e,t=!1){if(e.flags|=8,t){e.next=Wn,Wn=e;return}e.next=Vn,Vn=e}function Yi(){$l++}function Xi(){if(--$l>0)return;if(Wn){let t=Wn;for(Wn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Vn;){let t=Vn;for(Vn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Hl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Vl(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Qi(r),Zg(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function oi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Wl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Wl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===tr)||(e.globalVersion=tr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!oi(e))))return;e.flags|=2;const t=e.dep,n=ie,r=je;ie=e,je=!0;try{Hl(e);const s=e.fn(e._value);(t.version===0||Bt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ie=n,je=r,Vl(e),e.flags&=-3}}function Qi(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qi(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zg(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let je=!0;const ql=[];function wt(){ql.push(je),je=!1}function Et(){const e=ql.pop();je=e===void 0?!0:e}function aa(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ie;ie=void 0;try{t()}finally{ie=n}}}let tr=0;class ey{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ie||!je||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new ey(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,zl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(t){this.version++,tr++,this.notify(t)}notify(t){Yi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xi()}}}function zl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)zl(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const zr=new WeakMap,Yt=Symbol(""),ai=Symbol(""),nr=Symbol("");function pe(e,t,n){if(je&&ie){let r=zr.get(e);r||zr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Zi),s.map=r,s.key=n),s.track()}}function ht(e,t,n,r,s,i){const o=zr.get(e);if(!o){tr++;return}const a=c=>{c&&c.trigger()};if(Yi(),t==="clear")o.forEach(a);else{const c=H(e),l=c&&Ki(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===nr||!$t(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(nr)),t){case"add":c?l&&a(o.get("length")):(a(o.get(Yt)),En(e)&&a(o.get(ai)));break;case"delete":c||(a(o.get(Yt)),En(e)&&a(o.get(ai)));break;case"set":En(e)&&a(o.get(Yt));break}}Xi()}function ty(e,t){const n=zr.get(e);return n&&n.get(t)}function dn(e){const t=Y(e);return t===e?t:(pe(t,"iterate",nr),He(e)?t:t.map(we))}function eo(e){return pe(e=Y(e),"iterate",nr),e}const ny={__proto__:null,[Symbol.iterator](){return Us(this,Symbol.iterator,we)},concat(...e){return dn(this).concat(...e.map(t=>H(t)?dn(t):t))},entries(){return Us(this,"entries",e=>(e[1]=we(e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(we),arguments)},find(e,t){return ct(this,"find",e,t,we,arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,we,arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return Fs(this,"includes",e)},indexOf(...e){return Fs(this,"indexOf",e)},join(e){return dn(this).join(e)},lastIndexOf(...e){return Fs(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return Dn(this,"pop")},push(...e){return Dn(this,"push",e)},reduce(e,...t){return ca(this,"reduce",e,t)},reduceRight(e,...t){return ca(this,"reduceRight",e,t)},shift(){return Dn(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return Dn(this,"splice",e)},toReversed(){return dn(this).toReversed()},toSorted(e){return dn(this).toSorted(e)},toSpliced(...e){return dn(this).toSpliced(...e)},unshift(...e){return Dn(this,"unshift",e)},values(){return Us(this,"values",we)}};function Us(e,t,n){const r=eo(e),s=r[t]();return r!==e&&!He(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ry=Array.prototype;function ct(e,t,n,r,s,i){const o=eo(e),a=o!==e&&!He(e),c=o[t];if(c!==ry[t]){const f=c.apply(e,i);return a?we(f):f}let l=n;o!==e&&(a?l=function(f,d){return n.call(this,we(f),d,e)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function ca(e,t,n,r){const s=eo(e);let i=n;return s!==e&&(He(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,we(a),c,e)}),s[t](i,...r)}function Fs(e,t,n){const r=Y(e);pe(r,"iterate",nr);const s=r[t](...n);return(s===-1||s===!1)&&ro(n[0])?(n[0]=Y(n[0]),r[t](...n)):s}function Dn(e,t,n=[]){wt(),Yi();const r=Y(e)[t].apply(e,n);return Xi(),Et(),r}const sy=Wi("__proto__,__v_isRef,__isVue"),Kl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($t));function iy(e){$t(e)||(e=String(e));const t=Y(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Gl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?my:Ql:i?Xl:Yl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=H(t);if(!s){let c;if(o&&(c=ny[n]))return c;if(n==="hasOwnProperty")return iy}const a=Reflect.get(t,n,ue(t)?t:r);return($t(n)?Kl.has(n):sy(n))||(s||pe(t,"get",n),i)?a:ue(a)?o&&Ki(n)?a:a.value:le(a)?s?eu(a):sn(a):a}}class Jl extends Gl{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=on(i);if(!He(r)&&!on(r)&&(i=Y(i),r=Y(r)),!H(t)&&ue(i)&&!ue(r))return c?!1:(i.value=r,!0)}const o=H(t)&&Ki(n)?Number(n)<t.length:Z(t,n),a=Reflect.set(t,n,r,ue(t)?t:s);return t===Y(s)&&(o?Bt(r,i)&&ht(t,"set",n,r):ht(t,"add",n,r)),a}deleteProperty(t,n){const r=Z(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ht(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!$t(n)||!Kl.has(n))&&pe(t,"has",n),r}ownKeys(t){return pe(t,"iterate",H(t)?"length":Yt),Reflect.ownKeys(t)}}class oy extends Gl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ay=new Jl,cy=new oy,ly=new Jl(!0);const ci=e=>e,vr=e=>Reflect.getPrototypeOf(e);function uy(e,t,n){return function(...r){const s=this.__v_raw,i=Y(s),o=En(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?ci:t?li:we;return!t&&pe(i,"iterate",c?ai:Yt),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ir(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function fy(e,t){const n={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);e||(Bt(s,a)&&pe(o,"get",s),pe(o,"get",a));const{has:c}=vr(o),l=t?ci:e?li:we;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&pe(Y(s),"iterate",Yt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return e||(Bt(s,a)&&pe(o,"has",s),pe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),l=t?ci:e?li:we;return!e&&pe(c,"iterate",Yt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ye(n,e?{add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear")}:{add(s){!t&&!He(s)&&!on(s)&&(s=Y(s));const i=Y(this);return vr(i).has.call(i,s)||(i.add(s),ht(i,"add",s,s)),this},set(s,i){!t&&!He(i)&&!on(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=vr(o);let l=a.call(o,s);l||(s=Y(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Bt(i,u)&&ht(o,"set",s,i):ht(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=vr(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ht(i,"delete",s,void 0),l},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&ht(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=uy(s,e,t)}),n}function to(e,t){const n=fy(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const dy={get:to(!1,!1)},hy={get:to(!1,!0)},py={get:to(!0,!1)};const Yl=new WeakMap,Xl=new WeakMap,Ql=new WeakMap,my=new WeakMap;function gy(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yy(e){return e.__v_skip||!Object.isExtensible(e)?0:gy(jg(e))}function sn(e){return on(e)?e:no(e,!1,ay,dy,Yl)}function Zl(e){return no(e,!1,ly,hy,Xl)}function eu(e){return no(e,!0,cy,py,Ql)}function no(e,t,n,r,s){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=yy(e);if(i===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Xt(e){return on(e)?Xt(e.__v_raw):!!(e&&e.__v_isReactive)}function on(e){return!!(e&&e.__v_isReadonly)}function He(e){return!!(e&&e.__v_isShallow)}function ro(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function so(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&ii(e,"__v_skip",!0),e}const we=e=>le(e)?sn(e):e,li=e=>le(e)?eu(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function io(e){return tu(e,!1)}function _y(e){return tu(e,!0)}function tu(e,t){return ue(e)?e:new by(e,t)}class by{constructor(t,n){this.dep=new Zi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:we(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||He(t)||on(t);t=r?t:Y(t),Bt(t,n)&&(this._rawValue=t,this._value=r?t:we(t),this.dep.trigger())}}function vn(e){return ue(e)?e.value:e}const wy={get:(e,t,n)=>t==="__v_raw"?e:vn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function nu(e){return Xt(e)?e:new Proxy(e,wy)}function Ey(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=Iy(e,n);return t}class vy{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ty(Y(this._object),this._key)}}function Iy(e,t,n){const r=e[t];return ue(r)?r:new vy(e,t,n)}class Sy{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Zi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return jl(this,!0),!0}get value(){const t=this.dep.track();return Wl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ty(e,t,n=!1){let r,s;return W(e)?r=e:(r=e.get,s=e.set),new Sy(r,s,n)}const Sr={},Kr=new WeakMap;let zt;function Ry(e,t=!1,n=zt){if(n){let r=Kr.get(n);r||Kr.set(n,r=[]),r.push(e)}}function Ay(e,t,n=oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=D=>s?D:He(D)||s===!1||s===0?Lt(D,1):Lt(D);let u,f,d,m,y=!1,b=!1;if(ue(e)?(f=()=>e.value,y=He(e)):Xt(e)?(f=()=>l(e),y=!0):H(e)?(b=!0,y=e.some(D=>Xt(D)||He(D)),f=()=>e.map(D=>{if(ue(D))return D.value;if(Xt(D))return l(D);if(W(D))return c?c(D,2):D()})):W(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){wt();try{d()}finally{Et()}}const D=zt;zt=u;try{return c?c(e,3,[m]):e(m)}finally{zt=D}}:f=nt,t&&s){const D=f,F=s===!0?1/0:s;f=()=>Lt(D(),F)}const S=Fl(),A=()=>{u.stop(),S&&S.active&&zi(S.effects,u)};if(i&&t){const D=t;t=(...F)=>{D(...F),A()}}let R=b?new Array(e.length).fill(Sr):Sr;const O=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(t){const F=u.run();if(s||y||(b?F.some((te,G)=>Bt(te,R[G])):Bt(F,R))){d&&d();const te=zt;zt=u;try{const G=[F,R===Sr?void 0:b&&R[0]===Sr?[]:R,m];R=F,c?c(t,3,G):t(...G)}finally{zt=te}}}else u.run()};return a&&a(O),u=new Bl(f),u.scheduler=o?()=>o(O,!1):O,m=D=>Ry(D,!1,u),d=u.onStop=()=>{const D=Kr.get(u);if(D){if(c)c(D,4);else for(const F of D)F();Kr.delete(u)}},t?r?O(!0):R=u.run():o?o(O.bind(null,!0),!0):u.run(),A.pause=u.pause.bind(u),A.resume=u.resume.bind(u),A.stop=A,A}function Lt(e,t=1/0,n){if(t<=0||!le(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ue(e))Lt(e.value,t,n);else if(H(e))for(let r=0;r<e.length;r++)Lt(e[r],t,n);else if(Pl(e)||En(e))e.forEach(r=>{Lt(r,t,n)});else if(xl(e)){for(const r in e)Lt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Lt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pr(e,t,n,r){try{return r?e(...r):e()}catch(s){fs(s,t,n)}}function it(e,t,n,r){if(W(e)){const s=pr(e,t,n,r);return s&&Ol(s)&&s.catch(i=>{fs(i,t,n)}),s}if(H(e)){const s=[];for(let i=0;i<e.length;i++)s.push(it(e[i],t,n,r));return s}}function fs(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||oe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){wt(),pr(i,null,10,[e,c,l]),Et();return}}Cy(e,n,s,r,o)}function Cy(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ee=[];let Xe=-1;const In=[];let Pt=null,pn=0;const ru=Promise.resolve();let Gr=null;function oo(e){const t=Gr||ru;return e?t.then(this?e.bind(this):e):t}function Py(e){let t=Xe+1,n=Ee.length;for(;t<n;){const r=t+n>>>1,s=Ee[r],i=rr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function ao(e){if(!(e.flags&1)){const t=rr(e),n=Ee[Ee.length-1];!n||!(e.flags&2)&&t>=rr(n)?Ee.push(e):Ee.splice(Py(t),0,e),e.flags|=1,su()}}function su(){Gr||(Gr=ru.then(ou))}function Oy(e){H(e)?In.push(...e):Pt&&e.id===-1?Pt.splice(pn+1,0,e):e.flags&1||(In.push(e),e.flags|=1),su()}function la(e,t,n=Xe+1){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ee.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function iu(e){if(In.length){const t=[...new Set(In)].sort((n,r)=>rr(n)-rr(r));if(In.length=0,Pt){Pt.push(...t);return}for(Pt=t,pn=0;pn<Pt.length;pn++){const n=Pt[pn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pt=null,pn=0}}const rr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ou(e){try{for(Xe=0;Xe<Ee.length;Xe++){const t=Ee[Xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),pr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Xe<Ee.length;Xe++){const t=Ee[Xe];t&&(t.flags&=-2)}Xe=-1,Ee.length=0,iu(),Gr=null,(Ee.length||In.length)&&ou()}}let $e=null,au=null;function Jr(e){const t=$e;return $e=e,au=e&&e.type.__scopeId||null,t}function ky(e,t=$e,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ba(-1);const i=Jr(t);let o;try{o=e(...s)}finally{Jr(i),r._d&&ba(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ht(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(wt(),it(c,n,8,[e.el,a,e,t]),Et())}}const xy=Symbol("_vte"),Ny=e=>e.__isTeleport;function co(e,t){e.shapeFlag&6&&e.component?(e.transition=t,co(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function cu(e,t){return W(e)?ye({name:e.name},t,{setup:e}):e}function lu(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function qn(e,t,n,r,s=!1){if(H(e)){e.forEach((y,b)=>qn(y,t&&(H(t)?t[b]:t),n,r,s));return}if(zn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ho(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===oe?a.refs={}:a.refs,f=a.setupState,d=Y(f),m=f===oe?()=>!1:y=>Z(d,y);if(l!=null&&l!==c&&(de(l)?(u[l]=null,m(l)&&(f[l]=null)):ue(l)&&(l.value=null)),W(c))pr(c,a,12,[o,u]);else{const y=de(c),b=ue(c);if(y||b){const S=()=>{if(e.f){const A=y?m(c)?f[c]:u[c]:c.value;s?H(A)&&zi(A,i):H(A)?A.includes(i)||A.push(i):y?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else y?(u[c]=o,m(c)&&(f[c]=o)):b&&(c.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,xe(S,n)):S()}}}us().requestIdleCallback;us().cancelIdleCallback;const zn=e=>!!e.type.__asyncLoader,uu=e=>e.type.__isKeepAlive;function Dy(e,t){fu(e,"a",t)}function My(e,t){fu(e,"da",t)}function fu(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ds(t,r,n),n){let s=n.parent;for(;s&&s.parent;)uu(s.parent.vnode)&&Ly(r,t,n,s),s=s.parent}}function Ly(e,t,n,r){const s=ds(t,e,r,!0);du(()=>{zi(r[t],s)},n)}function ds(e,t,n=me,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{wt();const a=mr(n),c=it(t,n,e,o);return a(),Et(),c});return r?s.unshift(i):s.push(i),i}}const It=e=>(t,n=me)=>{(!ir||e==="sp")&&ds(e,(...r)=>t(...r),n)},Uy=It("bm"),Fy=It("m"),By=It("bu"),$y=It("u"),jy=It("bum"),du=It("um"),Hy=It("sp"),Vy=It("rtg"),Wy=It("rtc");function qy(e,t=me){ds("ec",e,t)}const zy="components";function Ky(e,t){return Jy(zy,e,!0,t)||e}const Gy=Symbol.for("v-ndc");function Jy(e,t,n=!0,r=!1){const s=$e||me;if(s){const i=s.type;{const a=$_(i,!1);if(a&&(a===t||a===Fe(t)||a===ls(Fe(t))))return i}const o=ua(s[e]||i[e],t)||ua(s.appContext[e],t);return!o&&r?i:o}}function ua(e,t){return e&&(e[t]||e[Fe(t)]||e[ls(Fe(t))])}const ui=e=>e?Nu(e)?ho(e):ui(e.parent):null,Kn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ui(e.parent),$root:e=>ui(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>pu(e),$forceUpdate:e=>e.f||(e.f=()=>{ao(e.update)}),$nextTick:e=>e.n||(e.n=oo.bind(e.proxy)),$watch:e=>y_.bind(e)}),Bs=(e,t)=>e!==oe&&!e.__isScriptSetup&&Z(e,t),Yy={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Bs(r,t))return o[t]=1,r[t];if(s!==oe&&Z(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Z(l,t))return o[t]=3,i[t];if(n!==oe&&Z(n,t))return o[t]=4,n[t];fi&&(o[t]=0)}}const u=Kn[t];let f,d;if(u)return t==="$attrs"&&pe(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==oe&&Z(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,Z(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Bs(s,t)?(s[t]=n,!0):r!==oe&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==oe&&Z(e,o)||Bs(t,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(Kn,o)||Z(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fa(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let fi=!0;function Xy(e){const t=pu(e),n=e.proxy,r=e.ctx;fi=!1,t.beforeCreate&&da(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:y,activated:b,deactivated:S,beforeDestroy:A,beforeUnmount:R,destroyed:O,unmounted:D,render:F,renderTracked:te,renderTriggered:G,errorCaptured:q,serverPrefetch:K,expose:ce,inheritAttrs:_e,components:Oe,directives:Ie,filters:jt}=t;if(l&&Qy(l,r,null),o)for(const z in o){const X=o[z];W(X)&&(r[z]=X.bind(n))}if(s){const z=s.call(n,n);le(z)&&(e.data=sn(z))}if(fi=!0,i)for(const z in i){const X=i[z],at=W(X)?X.bind(n,n):W(X.get)?X.get.bind(n,n):nt,Tt=!W(X)&&W(X.set)?X.set.bind(n):nt,qe=Ue({get:at,set:Tt});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Se=>qe.value=Se})}if(a)for(const z in a)hu(a[z],r,n,z);if(c){const z=W(c)?c.call(n):c;Reflect.ownKeys(z).forEach(X=>{Or(X,z[X])})}u&&da(u,e,"c");function ae(z,X){H(X)?X.forEach(at=>z(at.bind(n))):X&&z(X.bind(n))}if(ae(Uy,f),ae(Fy,d),ae(By,m),ae($y,y),ae(Dy,b),ae(My,S),ae(qy,q),ae(Wy,te),ae(Vy,G),ae(jy,R),ae(du,D),ae(Hy,K),H(ce))if(ce.length){const z=e.exposed||(e.exposed={});ce.forEach(X=>{Object.defineProperty(z,X,{get:()=>n[X],set:at=>n[X]=at,enumerable:!0})})}else e.exposed||(e.exposed={});F&&e.render===nt&&(e.render=F),_e!=null&&(e.inheritAttrs=_e),Oe&&(e.components=Oe),Ie&&(e.directives=Ie),K&&lu(e)}function Qy(e,t,n=nt){H(e)&&(e=di(e));for(const r in e){const s=e[r];let i;le(s)?"default"in s?i=rt(s.from||r,s.default,!0):i=rt(s.from||r):i=rt(s),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function da(e,t,n){it(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function hu(e,t,n,r){let s=r.includes(".")?Au(n,r):()=>n[r];if(de(e)){const i=t[e];W(i)&&Gn(s,i)}else if(W(e))Gn(s,e.bind(n));else if(le(e))if(H(e))e.forEach(i=>hu(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&Gn(s,i,e)}}function pu(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Yr(c,l,o,!0)),Yr(c,t,o)),le(t)&&i.set(t,c),c}function Yr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Yr(e,i,n,!0),s&&s.forEach(o=>Yr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Zy[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Zy={data:ha,props:pa,emits:pa,methods:Fn,computed:Fn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Fn,directives:Fn,watch:t_,provide:ha,inject:e_};function ha(e,t){return t?e?function(){return ye(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function e_(e,t){return Fn(di(e),di(t))}function di(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Fn(e,t){return e?ye(Object.create(null),e,t):t}function pa(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:ye(Object.create(null),fa(e),fa(t??{})):t}function t_(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function mu(){return{app:null,config:{isNativeTag:Bg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n_=0;function r_(e,t){return function(r,s=null){W(r)||(r=ye({},r)),s!=null&&!le(s)&&(s=null);const i=mu(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:n_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:H_,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(l,...f)):W(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const m=l._ceVNode||De(r,s);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),e(m,u,d),c=!0,l._container=u,u.__vue_app__=l,ho(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(it(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Qt;Qt=l;try{return u()}finally{Qt=f}}};return l}}let Qt=null;function Or(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function rt(e,t,n=!1){const r=xu();if(r||Qt){let s=Qt?Qt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&W(t)?t.call(r&&r.proxy):t}}function s_(){return!!(xu()||Qt)}const gu={},yu=()=>Object.create(gu),_u=e=>Object.getPrototypeOf(e)===gu;function i_(e,t,n,r=!1){const s={},i=yu();e.propsDefaults=Object.create(null),bu(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Zl(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function o_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=Y(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(hs(e.emitsOptions,d))continue;const m=t[d];if(c)if(Z(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=Fe(d);s[y]=hi(c,a,y,m,e,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{bu(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!Z(t,f)&&((u=ln(f))===f||!Z(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=hi(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Z(t,f))&&(delete i[f],l=!0)}l&&ht(e.attrs,"set","")}function bu(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Hn(c))continue;const l=t[c];let u;s&&Z(s,u=Fe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:hs(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||oe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=hi(s,c,f,l[f],e,!Z(l,f))}}return o}function hi(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=mr(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ln(n))&&(r=!0))}return r}const a_=new WeakMap;function wu(e,t,n=!1){const r=n?a_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!W(e)){const u=f=>{c=!0;const[d,m]=wu(f,t,!0);ye(o,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return le(e)&&r.set(e,wn),wn;if(H(i))for(let u=0;u<i.length;u++){const f=Fe(i[u]);ma(f)&&(o[f]=oe)}else if(i)for(const u in i){const f=Fe(u);if(ma(f)){const d=i[u],m=o[f]=H(d)||W(d)?{type:d}:ye({},d),y=m.type;let b=!1,S=!0;if(H(y))for(let A=0;A<y.length;++A){const R=y[A],O=W(R)&&R.name;if(O==="Boolean"){b=!0;break}else O==="String"&&(S=!1)}else b=W(y)&&y.name==="Boolean";m[0]=b,m[1]=S,(b||Z(m,"default"))&&a.push(f)}}const l=[o,a];return le(e)&&r.set(e,l),l}function ma(e){return e[0]!=="$"&&!Hn(e)}const lo=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",uo=e=>H(e)?e.map(Qe):[Qe(e)],c_=(e,t,n)=>{if(t._n)return t;const r=ky((...s)=>uo(t(...s)),n);return r._c=!1,r},Eu=(e,t,n)=>{const r=e._ctx;for(const s in e){if(lo(s))continue;const i=e[s];if(W(i))t[s]=c_(s,i,r);else if(i!=null){const o=uo(i);t[s]=()=>o}}},vu=(e,t)=>{const n=uo(t);e.slots.default=()=>n},Iu=(e,t,n)=>{for(const r in t)(n||!lo(r))&&(e[r]=t[r])},l_=(e,t,n)=>{const r=e.slots=yu();if(e.vnode.shapeFlag&32){const s=t.__;s&&ii(r,"__",s,!0);const i=t._;i?(Iu(r,t,n),n&&ii(r,"_",i,!0)):Eu(t,r)}else t&&vu(e,t)},u_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=oe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Iu(s,t,n):(i=!t.$stable,Eu(t,s)),o=t}else t&&(vu(e,t),o={default:1});if(i)for(const a in s)!lo(a)&&o[a]==null&&delete s[a]},xe=S_;function f_(e){return d_(e)}function d_(e,t){const n=us();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=nt,insertStaticContent:y}=e,b=(h,p,g,w=null,I=null,v=null,k=void 0,P=null,C=!!p.dynamicChildren)=>{if(h===p)return;h&&!Mn(h,p)&&(w=E(h),Se(h,I,v,!0),h=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:N}=p;switch(T){case ps:S(h,p,g,w);break;case Tn:A(h,p,g,w);break;case kr:h==null&&R(p,g,w,k);break;case ft:Oe(h,p,g,w,I,v,k,P,C);break;default:N&1?F(h,p,g,w,I,v,k,P,C):N&6?Ie(h,p,g,w,I,v,k,P,C):(N&64||N&128)&&T.process(h,p,g,w,I,v,k,P,C,L)}B!=null&&I?qn(B,h&&h.ref,v,p||h,!p):B==null&&h&&h.ref!=null&&qn(h.ref,null,v,h,!0)},S=(h,p,g,w)=>{if(h==null)r(p.el=a(p.children),g,w);else{const I=p.el=h.el;p.children!==h.children&&l(I,p.children)}},A=(h,p,g,w)=>{h==null?r(p.el=c(p.children||""),g,w):p.el=h.el},R=(h,p,g,w)=>{[h.el,h.anchor]=y(h.children,p,g,w,h.el,h.anchor)},O=({el:h,anchor:p},g,w)=>{let I;for(;h&&h!==p;)I=d(h),r(h,g,w),h=I;r(p,g,w)},D=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),s(h),h=g;s(p)},F=(h,p,g,w,I,v,k,P,C)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),h==null?te(p,g,w,I,v,k,P,C):K(h,p,I,v,k,P,C)},te=(h,p,g,w,I,v,k,P)=>{let C,T;const{props:B,shapeFlag:N,transition:U,dirs:j}=h;if(C=h.el=o(h.type,v,B&&B.is,B),N&8?u(C,h.children):N&16&&q(h.children,C,null,w,I,$s(h,v),k,P),j&&Ht(h,null,w,"created"),G(C,h,h.scopeId,k,w),B){for(const se in B)se!=="value"&&!Hn(se)&&i(C,se,null,B[se],v,w);"value"in B&&i(C,"value",null,B.value,v),(T=B.onVnodeBeforeMount)&&Je(T,w,h)}j&&Ht(h,null,w,"beforeMount");const J=h_(I,U);J&&U.beforeEnter(C),r(C,p,g),((T=B&&B.onVnodeMounted)||J||j)&&xe(()=>{T&&Je(T,w,h),J&&U.enter(C),j&&Ht(h,null,w,"mounted")},I)},G=(h,p,g,w,I)=>{if(g&&m(h,g),w)for(let v=0;v<w.length;v++)m(h,w[v]);if(I){let v=I.subTree;if(p===v||Pu(v.type)&&(v.ssContent===p||v.ssFallback===p)){const k=I.vnode;G(h,k,k.scopeId,k.slotScopeIds,I.parent)}}},q=(h,p,g,w,I,v,k,P,C=0)=>{for(let T=C;T<h.length;T++){const B=h[T]=P?Ot(h[T]):Qe(h[T]);b(null,B,p,g,w,I,v,k,P)}},K=(h,p,g,w,I,v,k)=>{const P=p.el=h.el;let{patchFlag:C,dynamicChildren:T,dirs:B}=p;C|=h.patchFlag&16;const N=h.props||oe,U=p.props||oe;let j;if(g&&Vt(g,!1),(j=U.onVnodeBeforeUpdate)&&Je(j,g,p,h),B&&Ht(p,h,g,"beforeUpdate"),g&&Vt(g,!0),(N.innerHTML&&U.innerHTML==null||N.textContent&&U.textContent==null)&&u(P,""),T?ce(h.dynamicChildren,T,P,g,w,$s(p,I),v):k||X(h,p,P,null,g,w,$s(p,I),v,!1),C>0){if(C&16)_e(P,N,U,g,I);else if(C&2&&N.class!==U.class&&i(P,"class",null,U.class,I),C&4&&i(P,"style",N.style,U.style,I),C&8){const J=p.dynamicProps;for(let se=0;se<J.length;se++){const ee=J[se],Te=N[ee],Re=U[ee];(Re!==Te||ee==="value")&&i(P,ee,Te,Re,I,g)}}C&1&&h.children!==p.children&&u(P,p.children)}else!k&&T==null&&_e(P,N,U,g,I);((j=U.onVnodeUpdated)||B)&&xe(()=>{j&&Je(j,g,p,h),B&&Ht(p,h,g,"updated")},w)},ce=(h,p,g,w,I,v,k)=>{for(let P=0;P<p.length;P++){const C=h[P],T=p[P],B=C.el&&(C.type===ft||!Mn(C,T)||C.shapeFlag&198)?f(C.el):g;b(C,T,B,null,w,I,v,k,!0)}},_e=(h,p,g,w,I)=>{if(p!==g){if(p!==oe)for(const v in p)!Hn(v)&&!(v in g)&&i(h,v,p[v],null,I,w);for(const v in g){if(Hn(v))continue;const k=g[v],P=p[v];k!==P&&v!=="value"&&i(h,v,P,k,I,w)}"value"in g&&i(h,"value",p.value,g.value,I)}},Oe=(h,p,g,w,I,v,k,P,C)=>{const T=p.el=h?h.el:a(""),B=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:j}=p;j&&(P=P?P.concat(j):j),h==null?(r(T,g,w),r(B,g,w),q(p.children||[],g,B,I,v,k,P,C)):N>0&&N&64&&U&&h.dynamicChildren?(ce(h.dynamicChildren,U,g,I,v,k,P),(p.key!=null||I&&p===I.subTree)&&Su(h,p,!0)):X(h,p,g,B,I,v,k,P,C)},Ie=(h,p,g,w,I,v,k,P,C)=>{p.slotScopeIds=P,h==null?p.shapeFlag&512?I.ctx.activate(p,g,w,k,C):jt(p,g,w,I,v,k,C):St(h,p,C)},jt=(h,p,g,w,I,v,k)=>{const P=h.component=M_(h,w,I);if(uu(h)&&(P.ctx.renderer=L),L_(P,!1,k),P.asyncDep){if(I&&I.registerDep(P,ae,k),!h.el){const C=P.subTree=De(Tn);A(null,C,p,g),h.placeholder=C.el}}else ae(P,h,p,g,I,v,k)},St=(h,p,g)=>{const w=p.component=h.component;if(v_(h,p,g))if(w.asyncDep&&!w.asyncResolved){z(w,p,g);return}else w.next=p,w.update();else p.el=h.el,w.vnode=p},ae=(h,p,g,w,I,v,k)=>{const P=()=>{if(h.isMounted){let{next:N,bu:U,u:j,parent:J,vnode:se}=h;{const Ke=Tu(h);if(Ke){N&&(N.el=se.el,z(h,N,k)),Ke.asyncDep.then(()=>{h.isUnmounted||P()});return}}let ee=N,Te;Vt(h,!1),N?(N.el=se.el,z(h,N,k)):N=se,U&&Ds(U),(Te=N.props&&N.props.onVnodeBeforeUpdate)&&Je(Te,J,N,se),Vt(h,!0);const Re=ya(h),ze=h.subTree;h.subTree=Re,b(ze,Re,f(ze.el),E(ze),h,I,v),N.el=Re.el,ee===null&&I_(h,Re.el),j&&xe(j,I),(Te=N.props&&N.props.onVnodeUpdated)&&xe(()=>Je(Te,J,N,se),I)}else{let N;const{el:U,props:j}=p,{bm:J,m:se,parent:ee,root:Te,type:Re}=h,ze=zn(p);Vt(h,!1),J&&Ds(J),!ze&&(N=j&&j.onVnodeBeforeMount)&&Je(N,ee,p),Vt(h,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Re);const Ke=h.subTree=ya(h);b(null,Ke,g,w,h,I,v),p.el=Ke.el}if(se&&xe(se,I),!ze&&(N=j&&j.onVnodeMounted)){const Ke=p;xe(()=>Je(N,ee,Ke),I)}(p.shapeFlag&256||ee&&zn(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&xe(h.a,I),h.isMounted=!0,p=g=w=null}};h.scope.on();const C=h.effect=new Bl(P);h.scope.off();const T=h.update=C.run.bind(C),B=h.job=C.runIfDirty.bind(C);B.i=h,B.id=h.uid,C.scheduler=()=>ao(B),Vt(h,!0),T()},z=(h,p,g)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,o_(h,p.props,w,g),u_(h,p.children,g),wt(),la(h),Et()},X=(h,p,g,w,I,v,k,P,C=!1)=>{const T=h&&h.children,B=h?h.shapeFlag:0,N=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){Tt(T,N,g,w,I,v,k,P,C);return}else if(U&256){at(T,N,g,w,I,v,k,P,C);return}}j&8?(B&16&&Le(T,I,v),N!==T&&u(g,N)):B&16?j&16?Tt(T,N,g,w,I,v,k,P,C):Le(T,I,v,!0):(B&8&&u(g,""),j&16&&q(N,g,w,I,v,k,P,C))},at=(h,p,g,w,I,v,k,P,C)=>{h=h||wn,p=p||wn;const T=h.length,B=p.length,N=Math.min(T,B);let U;for(U=0;U<N;U++){const j=p[U]=C?Ot(p[U]):Qe(p[U]);b(h[U],j,g,null,I,v,k,P,C)}T>B?Le(h,I,v,!0,!1,N):q(p,g,w,I,v,k,P,C,N)},Tt=(h,p,g,w,I,v,k,P,C)=>{let T=0;const B=p.length;let N=h.length-1,U=B-1;for(;T<=N&&T<=U;){const j=h[T],J=p[T]=C?Ot(p[T]):Qe(p[T]);if(Mn(j,J))b(j,J,g,null,I,v,k,P,C);else break;T++}for(;T<=N&&T<=U;){const j=h[N],J=p[U]=C?Ot(p[U]):Qe(p[U]);if(Mn(j,J))b(j,J,g,null,I,v,k,P,C);else break;N--,U--}if(T>N){if(T<=U){const j=U+1,J=j<B?p[j].el:w;for(;T<=U;)b(null,p[T]=C?Ot(p[T]):Qe(p[T]),g,J,I,v,k,P,C),T++}}else if(T>U)for(;T<=N;)Se(h[T],I,v,!0),T++;else{const j=T,J=T,se=new Map;for(T=J;T<=U;T++){const ke=p[T]=C?Ot(p[T]):Qe(p[T]);ke.key!=null&&se.set(ke.key,T)}let ee,Te=0;const Re=U-J+1;let ze=!1,Ke=0;const Nn=new Array(Re);for(T=0;T<Re;T++)Nn[T]=0;for(T=j;T<=N;T++){const ke=h[T];if(Te>=Re){Se(ke,I,v,!0);continue}let Ge;if(ke.key!=null)Ge=se.get(ke.key);else for(ee=J;ee<=U;ee++)if(Nn[ee-J]===0&&Mn(ke,p[ee])){Ge=ee;break}Ge===void 0?Se(ke,I,v,!0):(Nn[Ge-J]=T+1,Ge>=Ke?Ke=Ge:ze=!0,b(ke,p[Ge],g,null,I,v,k,P,C),Te++)}const wo=ze?p_(Nn):wn;for(ee=wo.length-1,T=Re-1;T>=0;T--){const ke=J+T,Ge=p[ke],Eo=p[ke+1],vo=ke+1<B?Eo.el||Eo.placeholder:w;Nn[T]===0?b(null,Ge,g,vo,I,v,k,P,C):ze&&(ee<0||T!==wo[ee]?qe(Ge,g,vo,2):ee--)}}},qe=(h,p,g,w,I=null)=>{const{el:v,type:k,transition:P,children:C,shapeFlag:T}=h;if(T&6){qe(h.component.subTree,p,g,w);return}if(T&128){h.suspense.move(p,g,w);return}if(T&64){k.move(h,p,g,L);return}if(k===ft){r(v,p,g);for(let N=0;N<C.length;N++)qe(C[N],p,g,w);r(h.anchor,p,g);return}if(k===kr){O(h,p,g);return}if(w!==2&&T&1&&P)if(w===0)P.beforeEnter(v),r(v,p,g),xe(()=>P.enter(v),I);else{const{leave:N,delayLeave:U,afterLeave:j}=P,J=()=>{h.ctx.isUnmounted?s(v):r(v,p,g)},se=()=>{N(v,()=>{J(),j&&j()})};U?U(v,J,se):se()}else r(v,p,g)},Se=(h,p,g,w=!1,I=!1)=>{const{type:v,props:k,ref:P,children:C,dynamicChildren:T,shapeFlag:B,patchFlag:N,dirs:U,cacheIndex:j}=h;if(N===-2&&(I=!1),P!=null&&(wt(),qn(P,null,g,h,!0),Et()),j!=null&&(p.renderCache[j]=void 0),B&256){p.ctx.deactivate(h);return}const J=B&1&&U,se=!zn(h);let ee;if(se&&(ee=k&&k.onVnodeBeforeUnmount)&&Je(ee,p,h),B&6)wr(h.component,g,w);else{if(B&128){h.suspense.unmount(g,w);return}J&&Ht(h,null,p,"beforeUnmount"),B&64?h.type.remove(h,p,g,L,w):T&&!T.hasOnce&&(v!==ft||N>0&&N&64)?Le(T,p,g,!1,!0):(v===ft&&N&384||!I&&B&16)&&Le(C,p,g),w&&un(h)}(se&&(ee=k&&k.onVnodeUnmounted)||J)&&xe(()=>{ee&&Je(ee,p,h),J&&Ht(h,null,p,"unmounted")},g)},un=h=>{const{type:p,el:g,anchor:w,transition:I}=h;if(p===ft){fn(g,w);return}if(p===kr){D(h);return}const v=()=>{s(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:k,delayLeave:P}=I,C=()=>k(g,v);P?P(h.el,v,C):C()}else v()},fn=(h,p)=>{let g;for(;h!==p;)g=d(h),s(h),h=g;s(p)},wr=(h,p,g)=>{const{bum:w,scope:I,job:v,subTree:k,um:P,m:C,a:T,parent:B,slots:{__:N}}=h;ga(C),ga(T),w&&Ds(w),B&&H(N)&&N.forEach(U=>{B.renderCache[U]=void 0}),I.stop(),v&&(v.flags|=8,Se(k,h,p,g)),P&&xe(P,p),xe(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Le=(h,p,g,w=!1,I=!1,v=0)=>{for(let k=v;k<h.length;k++)Se(h[k],p,g,w,I)},E=h=>{if(h.shapeFlag&6)return E(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),g=p&&p[xy];return g?d(g):p};let M=!1;const x=(h,p,g)=>{h==null?p._vnode&&Se(p._vnode,null,null,!0):b(p._vnode||null,h,p,null,null,null,g),p._vnode=h,M||(M=!0,la(),iu(),M=!1)},L={p:b,um:Se,m:qe,r:un,mt:jt,mc:q,pc:X,pbc:ce,n:E,o:e};return{render:x,hydrate:void 0,createApp:r_(x)}}function $s({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function h_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Su(e,t,n=!1){const r=e.children,s=t.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ot(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Su(o,a)),a.type===ps&&(a.el=o.el),a.type===Tn&&!a.el&&(a.el=o.el)}}function p_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Tu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Tu(t)}function ga(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const m_=Symbol.for("v-scx"),g_=()=>rt(m_);function Gn(e,t,n){return Ru(e,t,n)}function Ru(e,t,n=oe){const{immediate:r,deep:s,flush:i,once:o}=n,a=ye({},n),c=t&&r||!t&&i!=="post";let l;if(ir){if(i==="sync"){const m=g_();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=nt,m.resume=nt,m.pause=nt,m}}const u=me;a.call=(m,y,b)=>it(m,u,y,b);let f=!1;i==="post"?a.scheduler=m=>{xe(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,y)=>{y?m():ao(m)}),a.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Ay(e,t,a);return ir&&(l?l.push(d):c&&d()),d}function y_(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?Au(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=mr(this),a=Ru(s,i.bind(r),n);return o(),a}function Au(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const __=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Fe(t)}Modifiers`]||e[`${ln(t)}Modifiers`];function b_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let s=n;const i=t.startsWith("update:"),o=i&&__(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>de(u)?u.trim():u)),o.number&&(s=n.map(Wg)));let a,c=r[a=Ns(t)]||r[a=Ns(Fe(t))];!c&&i&&(c=r[a=Ns(ln(t))]),c&&it(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,it(l,e,6,s)}}function Cu(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!W(e)){const c=l=>{const u=Cu(l,t,!0);u&&(a=!0,ye(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(le(e)&&r.set(e,null),null):(H(i)?i.forEach(c=>o[c]=null):ye(o,i),le(e)&&r.set(e,o),o)}function hs(e,t){return!e||!os(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,ln(t))||Z(e,t))}function ya(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:m,ctx:y,inheritAttrs:b}=e,S=Jr(e);let A,R;try{if(n.shapeFlag&4){const D=s||r,F=D;A=Qe(l.call(F,D,u,f,m,d,y)),R=a}else{const D=t;A=Qe(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),R=t.props?a:w_(a)}}catch(D){Jn.length=0,fs(D,e,1),A=De(Tn)}let O=A;if(R&&b!==!1){const D=Object.keys(R),{shapeFlag:F}=O;D.length&&F&7&&(i&&D.some(qi)&&(R=E_(R,i)),O=Rn(O,R,!1,!0))}return n.dirs&&(O=Rn(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&co(O,n.transition),A=O,Jr(S),A}const w_=e=>{let t;for(const n in e)(n==="class"||n==="style"||os(n))&&((t||(t={}))[n]=e[n]);return t},E_=(e,t)=>{const n={};for(const r in e)(!qi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function v_(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_a(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!hs(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_a(r,o,l):!0:!!o;return!1}function _a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!hs(n,i))return!0}return!1}function I_({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Pu=e=>e.__isSuspense;function S_(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Oy(e)}const ft=Symbol.for("v-fgt"),ps=Symbol.for("v-txt"),Tn=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),Jn=[];let Ne=null;function T_(e=!1){Jn.push(Ne=e?null:[])}function R_(){Jn.pop(),Ne=Jn[Jn.length-1]||null}let sr=1;function ba(e,t=!1){sr+=e,e<0&&Ne&&t&&(Ne.hasOnce=!0)}function A_(e){return e.dynamicChildren=sr>0?Ne||wn:null,R_(),sr>0&&Ne&&Ne.push(e),e}function C_(e,t,n,r,s,i){return A_(ku(e,t,n,r,s,i,!0))}function Xr(e){return e?e.__v_isVNode===!0:!1}function Mn(e,t){return e.type===t.type&&e.key===t.key}const Ou=({key:e})=>e??null,xr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||ue(e)||W(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function ku(e,t=null,n=null,r=0,s=null,i=e===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ou(t),ref:t&&xr(t),scopeId:au,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return a?(fo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),sr>0&&!o&&Ne&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ne.push(c),c}const De=P_;function P_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Gy)&&(e=Tn),Xr(e)){const a=Rn(e,t,!0);return n&&fo(a,n),sr>0&&!i&&Ne&&(a.shapeFlag&6?Ne[Ne.indexOf(e)]=a:Ne.push(a)),a.patchFlag=-2,a}if(j_(e)&&(e=e.__vccOpts),t){t=O_(t);let{class:a,style:c}=t;a&&!de(a)&&(t.class=Ji(a)),le(c)&&(ro(c)&&!H(c)&&(c=ye({},c)),t.style=Gi(c))}const o=de(e)?1:Pu(e)?128:Ny(e)?64:le(e)?4:W(e)?2:0;return ku(e,t,n,r,s,o,i,!0)}function O_(e){return e?ro(e)||_u(e)?ye({},e):e:null}function Rn(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?x_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ou(l),ref:t&&t.ref?n&&i?H(i)?i.concat(xr(t)):[i,xr(t)]:xr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ft?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rn(e.ssContent),ssFallback:e.ssFallback&&Rn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&co(u,c.clone(u)),u}function k_(e=" ",t=0){return De(ps,null,e,t)}function bv(e,t){const n=De(kr,null,e);return n.staticCount=t,n}function Qe(e){return e==null||typeof e=="boolean"?De(Tn):H(e)?De(ft,null,e.slice()):Xr(e)?Ot(e):De(ps,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rn(e)}function fo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),fo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!_u(t)?t._ctx=$e:s===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[k_(t)]):n=8);e.children=t,e.shapeFlag|=n}function x_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ji([t.class,r.class]));else if(s==="style")t.style=Gi([t.style,r.style]);else if(os(s)){const i=t[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Je(e,t,n,r=null){it(e,t,7,[n,r])}const N_=mu();let D_=0;function M_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||N_,i={uid:D_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ll(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wu(r,s),emitsOptions:Cu(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=b_.bind(null,i),e.ce&&e.ce(i),i}let me=null;const xu=()=>me||$e;let Qr,pi;{const e=us(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Qr=t("__VUE_INSTANCE_SETTERS__",n=>me=n),pi=t("__VUE_SSR_SETTERS__",n=>ir=n)}const mr=e=>{const t=me;return Qr(e),e.scope.on(),()=>{e.scope.off(),Qr(t)}},wa=()=>{me&&me.scope.off(),Qr(null)};function Nu(e){return e.vnode.shapeFlag&4}let ir=!1;function L_(e,t=!1,n=!1){t&&pi(t);const{props:r,children:s}=e.vnode,i=Nu(e);i_(e,r,i,t),l_(e,s,n||t);const o=i?U_(e,t):void 0;return t&&pi(!1),o}function U_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Yy);const{setup:r}=n;if(r){wt();const s=e.setupContext=r.length>1?B_(e):null,i=mr(e),o=pr(r,e,0,[e.props,s]),a=Ol(o);if(Et(),i(),(a||e.sp)&&!zn(e)&&lu(e),a){if(o.then(wa,wa),t)return o.then(c=>{Ea(e,c)}).catch(c=>{fs(c,e,0)});e.asyncDep=o}else Ea(e,o)}else Du(e)}function Ea(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=nu(t)),Du(e)}function Du(e,t,n){const r=e.type;e.render||(e.render=r.render||nt);{const s=mr(e);wt();try{Xy(e)}finally{Et(),s()}}}const F_={get(e,t){return pe(e,"get",""),e[t]}};function B_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,F_),slots:e.slots,emit:e.emit,expose:t}}function ho(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(nu(so(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kn)return Kn[n](e)},has(t,n){return n in t||n in Kn}})):e.proxy}function $_(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function j_(e){return W(e)&&"__vccOpts"in e}const Ue=(e,t)=>Ty(e,t,ir);function Mu(e,t,n){const r=arguments.length;return r===2?le(t)&&!H(t)?Xr(t)?De(e,null,[t]):De(e,t):De(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xr(n)&&(n=[n]),De(e,t,n))}const H_="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mi;const va=typeof window<"u"&&window.trustedTypes;if(va)try{mi=va.createPolicy("vue",{createHTML:e=>e})}catch{}const Lu=mi?e=>mi.createHTML(e):e=>e,V_="http://www.w3.org/2000/svg",W_="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,Ia=ut&&ut.createElement("template"),q_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?ut.createElementNS(V_,e):t==="mathml"?ut.createElementNS(W_,e):n?ut.createElement(e,{is:n}):ut.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ia.innerHTML=Lu(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Ia.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},z_=Symbol("_vtc");function K_(e,t,n){const r=e[z_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Sa=Symbol("_vod"),G_=Symbol("_vsh"),J_=Symbol(""),Y_=/(^|;)\s*display\s*:/;function X_(e,t,n){const r=e.style,s=de(n);let i=!1;if(n&&!s){if(t)if(de(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Nr(r,a,"")}else for(const o in t)n[o]==null&&Nr(r,o,"");for(const o in n)o==="display"&&(i=!0),Nr(r,o,n[o])}else if(s){if(t!==n){const o=r[J_];o&&(n+=";"+o),r.cssText=n,i=Y_.test(n)}}else t&&e.removeAttribute("style");Sa in e&&(e[Sa]=i?r.display:"",e[G_]&&(r.display="none"))}const Ta=/\s*!important$/;function Nr(e,t,n){if(H(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Q_(e,t);Ta.test(n)?e.setProperty(ln(r),n.replace(Ta,""),"important"):e[r]=n}}const Ra=["Webkit","Moz","ms"],js={};function Q_(e,t){const n=js[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return js[t]=r;r=ls(r);for(let s=0;s<Ra.length;s++){const i=Ra[s]+r;if(i in e)return js[t]=i}return t}const Aa="http://www.w3.org/1999/xlink";function Ca(e,t,n,r,s,i=Yg(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Aa,t.slice(6,t.length)):e.setAttributeNS(Aa,t,n):n==null||i&&!Nl(n)?e.removeAttribute(t):e.setAttribute(t,i?"":$t(n)?String(n):n)}function Pa(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Lu(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Nl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Z_(e,t,n,r){e.addEventListener(t,n,r)}function eb(e,t,n,r){e.removeEventListener(t,n,r)}const Oa=Symbol("_vei");function tb(e,t,n,r,s=null){const i=e[Oa]||(e[Oa]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=nb(t);if(r){const l=i[t]=ib(r,s);Z_(e,a,l,c)}else o&&(eb(e,a,o,c),i[t]=void 0)}}const ka=/(?:Once|Passive|Capture)$/;function nb(e){let t;if(ka.test(e)){t={};let r;for(;r=e.match(ka);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ln(e.slice(2)),t]}let Hs=0;const rb=Promise.resolve(),sb=()=>Hs||(rb.then(()=>Hs=0),Hs=Date.now());function ib(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;it(ob(r,n.value),t,5,[r])};return n.value=e,n.attached=sb(),n}function ob(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const xa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ab=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?K_(e,r,o):t==="style"?X_(e,n,r):os(t)?qi(t)||tb(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cb(e,t,r,o))?(Pa(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ca(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(r))?Pa(e,Fe(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ca(e,t,r,o))};function cb(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&xa(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xa(t)&&de(n)?!1:t in e}const lb=ye({patchProp:ab},q_);let Na;function ub(){return Na||(Na=f_(lb))}const fb=(...e)=>{const t=ub().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=hb(r);if(!s)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,db(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function db(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hb(e){return de(e)?document.querySelector(e):e}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Uu;const ms=e=>Uu=e,Fu=Symbol();function gi(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Yn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Yn||(Yn={}));function pb(){const e=Ul(!0),t=e.run(()=>io({}));let n=[],r=[];const s=so({install(i){ms(s),s._a=i,i.provide(Fu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Bu=()=>{};function Da(e,t,n,r=Bu){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Fl()&&Qg(s),s}function hn(e,...t){e.slice().forEach(n=>{n(...t)})}const mb=e=>e(),Ma=Symbol(),Vs=Symbol();function yi(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];gi(s)&&gi(r)&&e.hasOwnProperty(n)&&!ue(r)&&!Xt(r)?e[n]=yi(s,r):e[n]=r}return e}const gb=Symbol();function yb(e){return!gi(e)||!Object.prototype.hasOwnProperty.call(e,gb)}const{assign:Ct}=Object;function _b(e){return!!(ue(e)&&e.effect)}function bb(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=Ey(n.state.value[e]);return Ct(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=so(Ue(()=>{ms(n);const m=n._s.get(e);return o[d].call(m,m)})),f),{}))}return c=$u(e,l,t,n,r,!0),c}function $u(e,t,n={},r,s,i){let o;const a=Ct({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],m;const y=r.state.value[e];!i&&!y&&(r.state.value[e]={}),io({});let b;function S(q){let K;l=u=!1,typeof q=="function"?(q(r.state.value[e]),K={type:Yn.patchFunction,storeId:e,events:m}):(yi(r.state.value[e],q),K={type:Yn.patchObject,payload:q,storeId:e,events:m});const ce=b=Symbol();oo().then(()=>{b===ce&&(l=!0)}),u=!0,hn(f,K,r.state.value[e])}const A=i?function(){const{state:K}=n,ce=K?K():{};this.$patch(_e=>{Ct(_e,ce)})}:Bu;function R(){o.stop(),f=[],d=[],r._s.delete(e)}const O=(q,K="")=>{if(Ma in q)return q[Vs]=K,q;const ce=function(){ms(r);const _e=Array.from(arguments),Oe=[],Ie=[];function jt(z){Oe.push(z)}function St(z){Ie.push(z)}hn(d,{args:_e,name:ce[Vs],store:F,after:jt,onError:St});let ae;try{ae=q.apply(this&&this.$id===e?this:F,_e)}catch(z){throw hn(Ie,z),z}return ae instanceof Promise?ae.then(z=>(hn(Oe,z),z)).catch(z=>(hn(Ie,z),Promise.reject(z))):(hn(Oe,ae),ae)};return ce[Ma]=!0,ce[Vs]=K,ce},D={_p:r,$id:e,$onAction:Da.bind(null,d),$patch:S,$reset:A,$subscribe(q,K={}){const ce=Da(f,q,K.detached,()=>_e()),_e=o.run(()=>Gn(()=>r.state.value[e],Oe=>{(K.flush==="sync"?u:l)&&q({storeId:e,type:Yn.direct,events:m},Oe)},Ct({},c,K)));return ce},$dispose:R},F=sn(D);r._s.set(e,F);const G=(r._a&&r._a.runWithContext||mb)(()=>r._e.run(()=>(o=Ul()).run(()=>t({action:O}))));for(const q in G){const K=G[q];if(ue(K)&&!_b(K)||Xt(K))i||(y&&yb(K)&&(ue(K)?K.value=y[q]:yi(K,y[q])),r.state.value[e][q]=K);else if(typeof K=="function"){const ce=O(K,q);G[q]=ce,a.actions[q]=K}}return Ct(F,G),Ct(Y(F),G),Object.defineProperty(F,"$state",{get:()=>r.state.value[e],set:q=>{S(K=>{Ct(K,q)})}}),r._p.forEach(q=>{Ct(F,o.run(()=>q({store:F,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(F.$state,y),l=!0,u=!0,F}/*! #__NO_SIDE_EFFECTS__ */function wb(e,t,n){let r;const s=typeof t=="function";r=s?n:t;function i(o,a){const c=s_();return o=o||(c?rt(Fu,null):null),o&&ms(o),o=Uu,o._s.has(e)||(s?$u(e,t,r,o):bb(e,r,o)),o._s.get(e)}return i.$id=e,i}const Eb="modulepreload",vb=function(e){return"/"+e},La={},Wt=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=c(n.map(l=>{if(l=vb(l),l in La)return;La[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Eb,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((m,y)=>{d.addEventListener("load",m),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},ju=[],Ib=Object.freeze(Object.defineProperty({__proto__:null,default:ju},Symbol.toStringTag,{value:"Module"})),Hu=[],Sb=Object.freeze(Object.defineProperty({__proto__:null,default:Hu},Symbol.toStringTag,{value:"Module"})),Vu=[],Tb=Object.freeze(Object.defineProperty({__proto__:null,default:Vu},Symbol.toStringTag,{value:"Module"})),Wu=[],Rb=Object.freeze(Object.defineProperty({__proto__:null,default:Wu},Symbol.toStringTag,{value:"Module"})),qu=[],Ab=Object.freeze(Object.defineProperty({__proto__:null,default:qu},Symbol.toStringTag,{value:"Module"})),zu=[],Cb=Object.freeze(Object.defineProperty({__proto__:null,default:zu},Symbol.toStringTag,{value:"Module"})),Ku=[],Pb=Object.freeze(Object.defineProperty({__proto__:null,default:Ku},Symbol.toStringTag,{value:"Module"})),Ob={kingdom:Vu,community:Hu,business:ju,store:Wu,shop:qu,pro:zu,me:Ku},kb=Object.freeze(Object.defineProperty({__proto__:null,default:Ob},Symbol.toStringTag,{value:"Module"})),xb=(e,t,n)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((s,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof document<"u";function Gu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Nb(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Gu(e.default)}const Q=Object.assign;function Ws(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ve(s)?s.map(e):e(s)}return n}const Xn=()=>{},Ve=Array.isArray,Ju=/#/g,Db=/&/g,Mb=/\//g,Lb=/=/g,Ub=/\?/g,Yu=/\+/g,Fb=/%5B/g,Bb=/%5D/g,Xu=/%5E/g,$b=/%60/g,Qu=/%7B/g,jb=/%7C/g,Zu=/%7D/g,Hb=/%20/g;function po(e){return encodeURI(""+e).replace(jb,"|").replace(Fb,"[").replace(Bb,"]")}function Vb(e){return po(e).replace(Qu,"{").replace(Zu,"}").replace(Xu,"^")}function _i(e){return po(e).replace(Yu,"%2B").replace(Hb,"+").replace(Ju,"%23").replace(Db,"%26").replace($b,"`").replace(Qu,"{").replace(Zu,"}").replace(Xu,"^")}function Wb(e){return _i(e).replace(Lb,"%3D")}function qb(e){return po(e).replace(Ju,"%23").replace(Ub,"%3F")}function zb(e){return e==null?"":qb(e).replace(Mb,"%2F")}function or(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Kb=/\/$/,Gb=e=>e.replace(Kb,"");function qs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Qb(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:or(o)}}function Jb(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ua(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yb(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&An(t.matched[r],n.matched[s])&&ef(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function An(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ef(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Xb(e[n],t[n]))return!1;return!0}function Xb(e,t){return Ve(e)?Fa(e,t):Ve(t)?Fa(t,e):e===t}function Fa(e,t){return Ve(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Qb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ar;(function(e){e.pop="pop",e.push="push"})(ar||(ar={}));var Qn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qn||(Qn={}));function Zb(e){if(!e)if(mn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gb(e)}const ew=/^[^#]+#/;function tw(e,t){return e.replace(ew,"#")+t}function nw(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const gs=()=>({left:window.scrollX,top:window.scrollY});function rw(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=nw(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ba(e,t){return(history.state?history.state.position-t:-1)+e}const bi=new Map;function sw(e,t){bi.set(e,t)}function iw(e){const t=bi.get(e);return bi.delete(e),t}let ow=()=>location.protocol+"//"+location.host;function tf(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ua(c,"")}return Ua(n,e)+r+s}function aw(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=tf(e,location),y=n.value,b=t.value;let S=0;if(d){if(n.value=m,t.value=d,o&&o===y){o=null;return}S=b?d.position-b.position:0}else r(m);s.forEach(A=>{A(n.value,y,{delta:S,type:ar.pop,direction:S?S>0?Qn.forward:Qn.back:Qn.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Q({},d.state,{scroll:gs()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function $a(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?gs():null}}function cw(e){const{history:t,location:n}=window,r={value:tf(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:ow()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=Q({},t.state,$a(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Q({},s.value,t.state,{forward:c,scroll:gs()});i(u.current,u,!0);const f=Q({},$a(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function lw(e){e=Zb(e);const t=cw(e),n=aw(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:e,go:r,createHref:tw.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function uw(e){return typeof e=="string"||e&&typeof e=="object"}function nf(e){return typeof e=="string"||typeof e=="symbol"}const rf=Symbol("");var ja;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ja||(ja={}));function Cn(e,t){return Q(new Error,{type:e,[rf]:!0},t)}function lt(e,t){return e instanceof Error&&rf in e&&(t==null||!!(e.type&t))}const Ha="[^/]+?",fw={sensitive:!1,strict:!1,start:!0,end:!0},dw=/[.+*?^${}()[\]/\\]/g;function hw(e,t){const n=Q({},fw,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(dw,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:b,optional:S,regexp:A}=d;i.push({name:y,repeatable:b,optional:S});const R=A||Ha;if(R!==Ha){m+=10;try{new RegExp(`(${R})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+D.message)}}let O=b?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(O=S&&l.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),s+=O,m+=20,S&&(m+=-8),b&&(m+=-20),R===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:b,optional:S}=m,A=y in l?l[y]:"";if(Ve(A)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=Ve(A)?A.join("/"):A;if(!R)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function pw(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function sf(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=pw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Va(r))return 1;if(Va(s))return-1}return s.length-r.length}function Va(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mw={type:0,value:""},gw=/[a-zA-Z0-9_]/;function yw(e){if(!e)return[[]];if(e==="/")return[[mw]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:gw.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function _w(e,t,n){const r=hw(yw(e.path),n),s=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function bw(e,t){const n=[],r=new Map;t=Ka({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,m){const y=!m,b=qa(f);b.aliasOf=m&&m.record;const S=Ka(t,f),A=[b];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of D)A.push(qa(Q({},b,{components:m?m.record.components:b.components,path:F,aliasOf:m?m.record:b})))}let R,O;for(const D of A){const{path:F}=D;if(d&&F[0]!=="/"){const te=d.record.path,G=te[te.length-1]==="/"?"":"/";D.path=d.record.path+(F&&G+F)}if(R=_w(D,d,S),m?m.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),y&&f.name&&!za(R)&&o(f.name)),of(R)&&c(R),b.children){const te=b.children;for(let G=0;G<te.length;G++)i(te[G],R,m&&m.children[G])}m=m||R}return O?()=>{o(O)}:Xn}function o(f){if(nf(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=vw(f,n);n.splice(d,0,f),f.record.name&&!za(f)&&r.set(f.record.name,f)}function l(f,d){let m,y={},b,S;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Cn(1,{location:f});S=m.record.name,y=Q(Wa(d.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Wa(f.params,m.keys.map(O=>O.name))),b=m.stringify(y)}else if(f.path!=null)b=f.path,m=n.find(O=>O.re.test(b)),m&&(y=m.parse(b),S=m.record.name);else{if(m=d.name?r.get(d.name):n.find(O=>O.re.test(d.path)),!m)throw Cn(1,{location:f,currentLocation:d});S=m.record.name,y=Q({},d.params,f.params),b=m.stringify(y)}const A=[];let R=m;for(;R;)A.unshift(R.record),R=R.parent;return{name:S,path:b,params:y,matched:A,meta:Ew(A)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Wa(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function qa(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ww(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ww(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function za(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ew(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function Ka(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function vw(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;sf(e,t[i])<0?r=i:n=i+1}const s=Iw(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Iw(e){let t=e;for(;t=t.parent;)if(of(t)&&sf(e,t)===0)return t}function of({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Sw(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Yu," "),o=i.indexOf("="),a=or(o<0?i:i.slice(0,o)),c=o<0?null:or(i.slice(o+1));if(a in t){let l=t[a];Ve(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ga(e){let t="";for(let n in e){const r=e[n];if(n=Wb(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ve(r)?r.map(i=>i&&_i(i)):[r&&_i(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Tw(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Rw=Symbol(""),Ja=Symbol(""),mo=Symbol(""),af=Symbol(""),wi=Symbol("");function Ln(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function kt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Cn(4,{from:n,to:t})):d instanceof Error?c(d):uw(d)?c(Cn(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function zs(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Gu(c)){const u=(c.__vccOpts||c)[t];u&&i.push(kt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Nb(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[t];return m&&kt(m,n,r,o,a,s)()}))}}return i}function Ya(e){const t=rt(mo),n=rt(af),r=Ue(()=>{const c=vn(e.to);return t.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(An.bind(null,u));if(d>-1)return d;const m=Xa(c[l-2]);return l>1&&Xa(u)===m&&f[f.length-1].path!==m?f.findIndex(An.bind(null,c[l-2])):d}),i=Ue(()=>s.value>-1&&kw(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&ef(n.params,r.value.params));function a(c={}){if(Ow(c)){const l=t[vn(e.replace)?"replace":"push"](vn(e.to)).catch(Xn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Aw(e){return e.length===1?e[0]:e}const Cw=cu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ya,setup(e,{slots:t}){const n=sn(Ya(e)),{options:r}=rt(mo),s=Ue(()=>({[Qa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Aw(t.default(n));return e.custom?i:Mu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Pw=Cw;function Ow(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function kw(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qa=(e,t,n)=>e??t??n,xw=cu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=rt(wi),s=Ue(()=>e.route||r.value),i=rt(Ja,0),o=Ue(()=>{let l=vn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ue(()=>s.value.matched[o.value]);Or(Ja,Ue(()=>o.value+1)),Or(Rw,a),Or(wi,s);const c=io();return Gn(()=>[c.value,a.value,e.name],([l,u,f],[d,m,y])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!An(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return Za(n.default,{Component:d,route:l});const m=f.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,S=Mu(d,Q({},y,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Za(n.default,{Component:S,route:l})||S}}});function Za(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Nw=xw;function Dw(e){const t=bw(e.routes,e),n=e.parseQuery||Sw,r=e.stringifyQuery||Ga,s=e.history,i=Ln(),o=Ln(),a=Ln(),c=_y(At);let l=At;mn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ws.bind(null,E=>""+E),f=Ws.bind(null,zb),d=Ws.bind(null,or);function m(E,M){let x,L;return nf(E)?(x=t.getRecordMatcher(E),L=M):L=E,t.addRoute(L,x)}function y(E){const M=t.getRecordMatcher(E);M&&t.removeRoute(M)}function b(){return t.getRoutes().map(E=>E.record)}function S(E){return!!t.getRecordMatcher(E)}function A(E,M){if(M=Q({},M||c.value),typeof E=="string"){const g=qs(n,E,M.path),w=t.resolve({path:g.path},M),I=s.createHref(g.fullPath);return Q(g,w,{params:d(w.params),hash:or(g.hash),redirectedFrom:void 0,href:I})}let x;if(E.path!=null)x=Q({},E,{path:qs(n,E.path,M.path).path});else{const g=Q({},E.params);for(const w in g)g[w]==null&&delete g[w];x=Q({},E,{params:f(g)}),M.params=f(M.params)}const L=t.resolve(x,M),ne=E.hash||"";L.params=u(d(L.params));const h=Jb(r,Q({},E,{hash:Vb(ne),path:L.path})),p=s.createHref(h);return Q({fullPath:h,hash:ne,query:r===Ga?Tw(E.query):E.query||{}},L,{redirectedFrom:void 0,href:p})}function R(E){return typeof E=="string"?qs(n,E,c.value.path):Q({},E)}function O(E,M){if(l!==E)return Cn(8,{from:M,to:E})}function D(E){return G(E)}function F(E){return D(Q(R(E),{replace:!0}))}function te(E){const M=E.matched[E.matched.length-1];if(M&&M.redirect){const{redirect:x}=M;let L=typeof x=="function"?x(E):x;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=R(L):{path:L},L.params={}),Q({query:E.query,hash:E.hash,params:L.path!=null?{}:E.params},L)}}function G(E,M){const x=l=A(E),L=c.value,ne=E.state,h=E.force,p=E.replace===!0,g=te(x);if(g)return G(Q(R(g),{state:typeof g=="object"?Q({},ne,g.state):ne,force:h,replace:p}),M||x);const w=x;w.redirectedFrom=M;let I;return!h&&Yb(r,L,x)&&(I=Cn(16,{to:w,from:L}),qe(L,L,!0,!1)),(I?Promise.resolve(I):ce(w,L)).catch(v=>lt(v)?lt(v,2)?v:Tt(v):X(v,w,L)).then(v=>{if(v){if(lt(v,2))return G(Q({replace:p},R(v.to),{state:typeof v.to=="object"?Q({},ne,v.to.state):ne,force:h}),M||w)}else v=Oe(w,L,!0,p,ne);return _e(w,L,v),v})}function q(E,M){const x=O(E,M);return x?Promise.reject(x):Promise.resolve()}function K(E){const M=fn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(E):E()}function ce(E,M){let x;const[L,ne,h]=Mw(E,M);x=zs(L.reverse(),"beforeRouteLeave",E,M);for(const g of L)g.leaveGuards.forEach(w=>{x.push(kt(w,E,M))});const p=q.bind(null,E,M);return x.push(p),Le(x).then(()=>{x=[];for(const g of i.list())x.push(kt(g,E,M));return x.push(p),Le(x)}).then(()=>{x=zs(ne,"beforeRouteUpdate",E,M);for(const g of ne)g.updateGuards.forEach(w=>{x.push(kt(w,E,M))});return x.push(p),Le(x)}).then(()=>{x=[];for(const g of h)if(g.beforeEnter)if(Ve(g.beforeEnter))for(const w of g.beforeEnter)x.push(kt(w,E,M));else x.push(kt(g.beforeEnter,E,M));return x.push(p),Le(x)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),x=zs(h,"beforeRouteEnter",E,M,K),x.push(p),Le(x))).then(()=>{x=[];for(const g of o.list())x.push(kt(g,E,M));return x.push(p),Le(x)}).catch(g=>lt(g,8)?g:Promise.reject(g))}function _e(E,M,x){a.list().forEach(L=>K(()=>L(E,M,x)))}function Oe(E,M,x,L,ne){const h=O(E,M);if(h)return h;const p=M===At,g=mn?history.state:{};x&&(L||p?s.replace(E.fullPath,Q({scroll:p&&g&&g.scroll},ne)):s.push(E.fullPath,ne)),c.value=E,qe(E,M,x,p),Tt()}let Ie;function jt(){Ie||(Ie=s.listen((E,M,x)=>{if(!wr.listening)return;const L=A(E),ne=te(L);if(ne){G(Q(ne,{replace:!0,force:!0}),L).catch(Xn);return}l=L;const h=c.value;mn&&sw(Ba(h.fullPath,x.delta),gs()),ce(L,h).catch(p=>lt(p,12)?p:lt(p,2)?(G(Q(R(p.to),{force:!0}),L).then(g=>{lt(g,20)&&!x.delta&&x.type===ar.pop&&s.go(-1,!1)}).catch(Xn),Promise.reject()):(x.delta&&s.go(-x.delta,!1),X(p,L,h))).then(p=>{p=p||Oe(L,h,!1),p&&(x.delta&&!lt(p,8)?s.go(-x.delta,!1):x.type===ar.pop&&lt(p,20)&&s.go(-1,!1)),_e(L,h,p)}).catch(Xn)}))}let St=Ln(),ae=Ln(),z;function X(E,M,x){Tt(E);const L=ae.list();return L.length?L.forEach(ne=>ne(E,M,x)):console.error(E),Promise.reject(E)}function at(){return z&&c.value!==At?Promise.resolve():new Promise((E,M)=>{St.add([E,M])})}function Tt(E){return z||(z=!E,jt(),St.list().forEach(([M,x])=>E?x(E):M()),St.reset()),E}function qe(E,M,x,L){const{scrollBehavior:ne}=e;if(!mn||!ne)return Promise.resolve();const h=!x&&iw(Ba(E.fullPath,0))||(L||!x)&&history.state&&history.state.scroll||null;return oo().then(()=>ne(E,M,h)).then(p=>p&&rw(p)).catch(p=>X(p,E,M))}const Se=E=>s.go(E);let un;const fn=new Set,wr={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:b,resolve:A,options:e,push:D,replace:F,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:at,install(E){const M=this;E.component("RouterLink",Pw),E.component("RouterView",Nw),E.config.globalProperties.$router=M,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>vn(c)}),mn&&!un&&c.value===At&&(un=!0,D(s.location).catch(ne=>{}));const x={};for(const ne in At)Object.defineProperty(x,ne,{get:()=>c.value[ne],enumerable:!0});E.provide(mo,M),E.provide(af,Zl(x)),E.provide(wi,c);const L=E.unmount;fn.add(E),E.unmount=function(){fn.delete(E),fn.size<1&&(l=At,Ie&&Ie(),Ie=null,c.value=At,un=!1,z=!1),L()}}};function Le(E){return E.reduce((M,x)=>M.then(()=>K(x)),Promise.resolve())}return wr}function Mw(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>An(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>An(l,c))||s.push(c))}return[n,r,s]}const go="me",cf=Object.assign({"/src/router/routes/business.js":Ib,"/src/router/routes/community.js":Sb,"/src/router/routes/index.js":kb,"/src/router/routes/kingdom.js":Tb,"/src/router/routes/me.js":Pb,"/src/router/routes/pro.js":Cb,"/src/router/routes/shop.js":Ab,"/src/router/routes/store.js":Rb});console.log(cf);console.log("software:",go);const Lw=cf[`/src/router/routes/${go}.js`].default,Uw=[{path:"/",redirect:"/home",component:()=>Wt(()=>import("./Screen-AaBo_CWd.js"),[]),children:[{path:"/home",component:()=>xb(Object.assign({"../interface/community/Index.vue":()=>Wt(()=>import("./Index-D1jlW7pf.js"),[]),"../interface/kingdom/Index.vue":()=>Wt(()=>import("./Index-0kBzATba.js"),[]),"../interface/me/Index.vue":()=>Wt(()=>import("./Index-BNnIRM3x.js"),__vite__mapDeps([0,1])),"../interface/pro/Index.vue":()=>Wt(()=>import("./Index-CCWmWFN9.js"),__vite__mapDeps([2,1])),"../interface/shop/Index.vue":()=>Wt(()=>import("./Index-BIcFPRFK.js"),__vite__mapDeps([3,1])),"../interface/store/Index.vue":()=>Wt(()=>import("./Index-DeH8zlGo.js"),__vite__mapDeps([4,1]))}),`../interface/${go}/Index.vue`,4)},...Lw]}],Fw=Dw({history:lw(),routes:Uw}),Bw={__name:"App",setup(e){return console.log("great-unknown"),(t,n)=>{const r=Ky("RouterView");return T_(),C_("main",null,[De(r)])}}};function lf(e,t){return function(){return e.apply(t,arguments)}}const{toString:$w}=Object.prototype,{getPrototypeOf:yo}=Object,{iterator:ys,toStringTag:uf}=Symbol,_s=(e=>t=>{const n=$w.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),We=e=>(e=e.toLowerCase(),t=>_s(t)===e),bs=e=>t=>typeof t===e,{isArray:kn}=Array,cr=bs("undefined");function gr(e){return e!==null&&!cr(e)&&e.constructor!==null&&!cr(e.constructor)&&Ce(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ff=We("ArrayBuffer");function jw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ff(e.buffer),t}const Hw=bs("string"),Ce=bs("function"),df=bs("number"),yr=e=>e!==null&&typeof e=="object",Vw=e=>e===!0||e===!1,Dr=e=>{if(_s(e)!=="object")return!1;const t=yo(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(uf in e)&&!(ys in e)},Ww=e=>{if(!yr(e)||gr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},qw=We("Date"),zw=We("File"),Kw=We("Blob"),Gw=We("FileList"),Jw=e=>yr(e)&&Ce(e.pipe),Yw=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ce(e.append)&&((t=_s(e))==="formdata"||t==="object"&&Ce(e.toString)&&e.toString()==="[object FormData]"))},Xw=We("URLSearchParams"),[Qw,Zw,eE,tE]=["ReadableStream","Request","Response","Headers"].map(We),nE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _r(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),kn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(gr(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function hf(e,t){if(gr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Gt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,pf=e=>!cr(e)&&e!==Gt;function Ei(){const{caseless:e}=pf(this)&&this||{},t={},n=(r,s)=>{const i=e&&hf(t,s)||s;Dr(t[i])&&Dr(r)?t[i]=Ei(t[i],r):Dr(r)?t[i]=Ei({},r):kn(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&_r(arguments[r],n);return t}const rE=(e,t,n,{allOwnKeys:r}={})=>(_r(t,(s,i)=>{n&&Ce(s)?e[i]=lf(s,n):e[i]=s},{allOwnKeys:r}),e),sE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),iE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},oE=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&yo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},aE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},cE=e=>{if(!e)return null;if(kn(e))return e;let t=e.length;if(!df(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},lE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&yo(Uint8Array)),uE=(e,t)=>{const r=(e&&e[ys]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},fE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},dE=We("HTMLFormElement"),hE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ec=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pE=We("RegExp"),mf=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_r(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},mE=e=>{mf(e,(t,n)=>{if(Ce(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ce(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gE=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return kn(e)?r(e):r(String(e).split(t)),n},yE=()=>{},_E=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function bE(e){return!!(e&&Ce(e.append)&&e[uf]==="FormData"&&e[ys])}const wE=e=>{const t=new Array(10),n=(r,s)=>{if(yr(r)){if(t.indexOf(r)>=0)return;if(gr(r))return r;if(!("toJSON"in r)){t[s]=r;const i=kn(r)?[]:{};return _r(r,(o,a)=>{const c=n(o,s+1);!cr(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},EE=We("AsyncFunction"),vE=e=>e&&(yr(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),gf=((e,t)=>e?setImmediate:t?((n,r)=>(Gt.addEventListener("message",({source:s,data:i})=>{s===Gt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Gt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ce(Gt.postMessage)),IE=typeof queueMicrotask<"u"?queueMicrotask.bind(Gt):typeof process<"u"&&process.nextTick||gf,SE=e=>e!=null&&Ce(e[ys]),_={isArray:kn,isArrayBuffer:ff,isBuffer:gr,isFormData:Yw,isArrayBufferView:jw,isString:Hw,isNumber:df,isBoolean:Vw,isObject:yr,isPlainObject:Dr,isEmptyObject:Ww,isReadableStream:Qw,isRequest:Zw,isResponse:eE,isHeaders:tE,isUndefined:cr,isDate:qw,isFile:zw,isBlob:Kw,isRegExp:pE,isFunction:Ce,isStream:Jw,isURLSearchParams:Xw,isTypedArray:lE,isFileList:Gw,forEach:_r,merge:Ei,extend:rE,trim:nE,stripBOM:sE,inherits:iE,toFlatObject:oE,kindOf:_s,kindOfTest:We,endsWith:aE,toArray:cE,forEachEntry:uE,matchAll:fE,isHTMLForm:dE,hasOwnProperty:ec,hasOwnProp:ec,reduceDescriptors:mf,freezeMethods:mE,toObjectSet:gE,toCamelCase:hE,noop:yE,toFiniteNumber:_E,findKey:hf,global:Gt,isContextDefined:pf,isSpecCompliantForm:bE,toJSONObject:wE,isAsyncFn:EE,isThenable:vE,setImmediate:gf,asap:IE,isIterable:SE};function V(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const yf=V.prototype,_f={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_f[e]={value:e}});Object.defineProperties(V,_f);Object.defineProperty(yf,"isAxiosError",{value:!0});V.from=(e,t,n,r,s,i)=>{const o=Object.create(yf);return _.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),V.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const TE=null;function vi(e){return _.isPlainObject(e)||_.isArray(e)}function bf(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function tc(e,t,n){return e?e.concat(t).map(function(s,i){return s=bf(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function RE(e){return _.isArray(e)&&!e.some(vi)}const AE=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function ws(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,S){return!_.isUndefined(S[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(_.isBoolean(y))return y.toString();if(!c&&_.isBlob(y))throw new V("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,b,S){let A=y;if(y&&!S&&typeof y=="object"){if(_.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&RE(y)||(_.isFileList(y)||_.endsWith(b,"[]"))&&(A=_.toArray(y)))return b=bf(b),A.forEach(function(O,D){!(_.isUndefined(O)||O===null)&&t.append(o===!0?tc([b],D,i):o===null?b:b+"[]",l(O))}),!1}return vi(y)?!0:(t.append(tc(S,b,i),l(y)),!1)}const f=[],d=Object.assign(AE,{defaultVisitor:u,convertValue:l,isVisitable:vi});function m(y,b){if(!_.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(y),_.forEach(y,function(A,R){(!(_.isUndefined(A)||A===null)&&s.call(t,A,_.isString(R)?R.trim():R,b,d))===!0&&m(A,b?b.concat(R):[R])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return m(e),t}function nc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function _o(e,t){this._pairs=[],e&&ws(e,this,t)}const wf=_o.prototype;wf.append=function(t,n){this._pairs.push([t,n])};wf.toString=function(t){const n=t?function(r){return t.call(this,r,nc)}:nc;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function CE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ef(e,t,n){if(!t)return e;const r=n&&n.encode||CE;_.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(t,n):i=_.isURLSearchParams(t)?t.toString():new _o(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class rc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const vf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},PE=typeof URLSearchParams<"u"?URLSearchParams:_o,OE=typeof FormData<"u"?FormData:null,kE=typeof Blob<"u"?Blob:null,xE={isBrowser:!0,classes:{URLSearchParams:PE,FormData:OE,Blob:kE},protocols:["http","https","file","blob","url","data"]},bo=typeof window<"u"&&typeof document<"u",Ii=typeof navigator=="object"&&navigator||void 0,NE=bo&&(!Ii||["ReactNative","NativeScript","NS"].indexOf(Ii.product)<0),DE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ME=bo&&window.location.href||"http://localhost",LE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:bo,hasStandardBrowserEnv:NE,hasStandardBrowserWebWorkerEnv:DE,navigator:Ii,origin:ME},Symbol.toStringTag,{value:"Module"})),ge={...LE,...xE};function UE(e,t){return ws(e,new ge.classes.URLSearchParams,{visitor:function(n,r,s,i){return ge.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function FE(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function BE(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function If(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=BE(s[o])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,s)=>{t(FE(r),s,n,0)}),n}return null}function $E(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const br={transitional:vf,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return s?JSON.stringify(If(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t)||_.isReadableStream(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return UE(t,this.formSerializer).toString();if((a=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ws(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),$E(t)):t}],transformResponse:[function(t){const n=this.transitional||br.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(t)||_.isReadableStream(t))return t;if(t&&_.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?V.from(a,V.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{br.headers[e]={}});const jE=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),HE=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&jE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},sc=Symbol("internals");function Un(e){return e&&String(e).trim().toLowerCase()}function Mr(e){return e===!1||e==null?e:_.isArray(e)?e.map(Mr):String(e)}function VE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const WE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ks(e,t,n,r,s){if(_.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function qE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function zE(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}let Pe=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,l){const u=Un(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Mr(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));if(_.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(_.isString(t)&&(t=t.trim())&&!WE(t))o(HE(t),n);else if(_.isObject(t)&&_.isIterable(t)){let a={},c,l;for(const u of t){if(!_.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?_.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Un(t),t){const r=_.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return VE(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Un(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ks(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=Un(o),o){const a=_.findKey(r,o);a&&(!n||Ks(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Ks(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=Mr(s),delete n[i];return}const a=t?qE(i):String(i).trim();a!==i&&delete n[i],n[a]=Mr(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[sc]=this[sc]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Un(o);r[a]||(zE(s,o),r[a]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}};Pe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Pe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});_.freezeMethods(Pe);function Gs(e,t){const n=this||br,r=t||n,s=Pe.from(r.headers);let i=r.data;return _.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Sf(e){return!!(e&&e.__CANCEL__)}function xn(e,t,n){V.call(this,e??"canceled",V.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(xn,V,{__CANCEL__:!0});function Tf(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function KE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function GE(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,d=0;for(;f!==s;)d+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function JE(e,t){let n=0,r=1e3/t,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),e(...l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Zr=(e,t,n=3)=>{let r=0;const s=GE(50,250);return JE(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},ic=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},oc=e=>(...t)=>_.asap(()=>e(...t)),YE=ge.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ge.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ge.origin),ge.navigator&&/(msie|trident)/i.test(ge.navigator.userAgent)):()=>!0,XE=ge.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function QE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ZE(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Rf(e,t,n){let r=!QE(t);return e&&(r||n==!1)?ZE(e,t):t}const ac=e=>e instanceof Pe?{...e}:e;function an(e,t){t=t||{};const n={};function r(l,u,f,d){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:d},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f,d){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f,d)}else return r(l,u,f,d)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(ac(l),ac(u),f,!0)};return _.forEach(Object.keys({...e,...t}),function(u){const f=c[u]||s,d=f(e[u],t[u],u);_.isUndefined(d)&&f!==a||(n[u]=d)}),n}const Af=e=>{const t=an({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=t;t.headers=o=Pe.from(o),t.url=Ef(Rf(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(ge.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(t)),r||r!==!1&&YE(t.url))){const l=s&&i&&XE.read(i);l&&o.set(s,l)}return t},ev=typeof XMLHttpRequest<"u",tv=ev&&function(e){return new Promise(function(n,r){const s=Af(e);let i=s.data;const o=Pe.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,d,m,y;function b(){m&&m(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function A(){if(!S)return;const O=Pe.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),F={data:!a||a==="text"||a==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:O,config:e,request:S};Tf(function(G){n(G),b()},function(G){r(G),b()},F),S=null}"onloadend"in S?S.onloadend=A:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(A)},S.onabort=function(){S&&(r(new V("Request aborted",V.ECONNABORTED,e,S)),S=null)},S.onerror=function(){r(new V("Network Error",V.ERR_NETWORK,e,S)),S=null},S.ontimeout=function(){let D=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||vf;s.timeoutErrorMessage&&(D=s.timeoutErrorMessage),r(new V(D,F.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,e,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&_.forEach(o.toJSON(),function(D,F){S.setRequestHeader(F,D)}),_.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),a&&a!=="json"&&(S.responseType=s.responseType),l&&([d,y]=Zr(l,!0),S.addEventListener("progress",d)),c&&S.upload&&([f,m]=Zr(c),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=O=>{S&&(r(!O||O.type?new xn(null,e,S):O),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=KE(s.url);if(R&&ge.protocols.indexOf(R)===-1){r(new V("Unsupported protocol "+R+":",V.ERR_BAD_REQUEST,e));return}S.send(i||null)})},nv=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof V?u:new xn(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new V(`timeout ${t} of ms exceeded`,V.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),e=null)};e.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},rv=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},sv=async function*(e,t){for await(const n of iv(e))yield*rv(n,t)},iv=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},cc=(e,t,n,r)=>{const s=sv(e,t);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let d=i+=f;n(d)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Es=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Cf=Es&&typeof ReadableStream=="function",ov=Es&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Pf=(e,...t)=>{try{return!!e(...t)}catch{return!1}},av=Cf&&Pf(()=>{let e=!1;const t=new Request(ge.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),lc=64*1024,Si=Cf&&Pf(()=>_.isReadableStream(new Response("").body)),es={stream:Si&&(e=>e.body)};Es&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!es[t]&&(es[t]=_.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new V(`Response type '${t}' is not supported`,V.ERR_NOT_SUPPORT,r)})})})(new Response);const cv=async e=>{if(e==null)return 0;if(_.isBlob(e))return e.size;if(_.isSpecCompliantForm(e))return(await new Request(ge.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(_.isArrayBufferView(e)||_.isArrayBuffer(e))return e.byteLength;if(_.isURLSearchParams(e)&&(e=e+""),_.isString(e))return(await ov(e)).byteLength},lv=async(e,t)=>{const n=_.toFiniteNumber(e.getContentLength());return n??cv(t)},uv=Es&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=Af(e);l=l?(l+"").toLowerCase():"text";let m=nv([s,i&&i.toAbortSignal()],o),y;const b=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let S;try{if(c&&av&&n!=="get"&&n!=="head"&&(S=await lv(u,r))!==0){let F=new Request(t,{method:"POST",body:r,duplex:"half"}),te;if(_.isFormData(r)&&(te=F.headers.get("content-type"))&&u.setContentType(te),F.body){const[G,q]=ic(S,Zr(oc(c)));r=cc(F.body,lc,G,q)}}_.isString(f)||(f=f?"include":"omit");const A="credentials"in Request.prototype;y=new Request(t,{...d,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:A?f:void 0});let R=await fetch(y,d);const O=Si&&(l==="stream"||l==="response");if(Si&&(a||O&&b)){const F={};["status","statusText","headers"].forEach(K=>{F[K]=R[K]});const te=_.toFiniteNumber(R.headers.get("content-length")),[G,q]=a&&ic(te,Zr(oc(a),!0))||[];R=new Response(cc(R.body,lc,G,()=>{q&&q(),b&&b()}),F)}l=l||"text";let D=await es[_.findKey(es,l)||"text"](R,e);return!O&&b&&b(),await new Promise((F,te)=>{Tf(F,te,{data:D,headers:Pe.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:y})})}catch(A){throw b&&b(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new V("Network Error",V.ERR_NETWORK,e,y),{cause:A.cause||A}):V.from(A,A&&A.code,e,y)}}),Ti={http:TE,xhr:tv,fetch:uv};_.forEach(Ti,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const uc=e=>`- ${e}`,fv=e=>_.isFunction(e)||e===null||e===!1,Of={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!fv(n)&&(r=Ti[(o=String(n)).toLowerCase()],r===void 0))throw new V(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(uc).join(`
`):" "+uc(i[0]):"as no adapter specified";throw new V("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ti};function Js(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xn(null,e)}function fc(e){return Js(e),e.headers=Pe.from(e.headers),e.data=Gs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Of.getAdapter(e.adapter||br.adapter)(e).then(function(r){return Js(e),r.data=Gs.call(e,e.transformResponse,r),r.headers=Pe.from(r.headers),r},function(r){return Sf(r)||(Js(e),r&&r.response&&(r.response.data=Gs.call(e,e.transformResponse,r.response),r.response.headers=Pe.from(r.response.headers))),Promise.reject(r)})}const kf="1.11.0",vs={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{vs[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const dc={};vs.transitional=function(t,n,r){function s(i,o){return"[Axios v"+kf+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new V(s(o," has been removed"+(n?" in "+n:"")),V.ERR_DEPRECATED);return n&&!dc[o]&&(dc[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};vs.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function dv(e,t,n){if(typeof e!="object")throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new V("option "+i+" must be "+c,V.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new V("Unknown option "+i,V.ERR_BAD_OPTION)}}const Lr={assertOptions:dv,validators:vs},Ye=Lr.validators;let Zt=class{constructor(t){this.defaults=t||{},this.interceptors={request:new rc,response:new rc}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=an(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Lr.assertOptions(r,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Lr.assertOptions(s,{encode:Ye.function,serialize:Ye.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Lr.assertOptions(n,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Pe.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,d;if(!c){const y=[fc.bind(this),void 0];for(y.unshift(...a),y.push(...l),d=y.length,u=Promise.resolve(n);f<d;)u=u.then(y[f++],y[f++]);return u}d=a.length;let m=n;for(f=0;f<d;){const y=a[f++],b=a[f++];try{m=y(m)}catch(S){b.call(this,S);break}}try{u=fc.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=an(this.defaults,t);const n=Rf(t.baseURL,t.url,t.allowAbsoluteUrls);return Ef(n,t.params,t.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(t){Zt.prototype[t]=function(n,r){return this.request(an(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(an(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Zt.prototype[t]=n(),Zt.prototype[t+"Form"]=n(!0)});let hv=class xf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new xn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new xf(function(s){t=s}),cancel:t}}};function pv(e){return function(n){return e.apply(null,n)}}function mv(e){return _.isObject(e)&&e.isAxiosError===!0}const Ri={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ri).forEach(([e,t])=>{Ri[t]=e});function Nf(e){const t=new Zt(e),n=lf(Zt.prototype.request,t);return _.extend(n,Zt.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Nf(an(e,s))},n}const fe=Nf(br);fe.Axios=Zt;fe.CanceledError=xn;fe.CancelToken=hv;fe.isCancel=Sf;fe.VERSION=kf;fe.toFormData=ws;fe.AxiosError=V;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=pv;fe.isAxiosError=mv;fe.mergeConfig=an;fe.AxiosHeaders=Pe;fe.formToJSON=e=>If(_.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=Of.getAdapter;fe.HttpStatusCode=Ri;fe.default=fe;const{Axios:vv,AxiosError:Iv,CanceledError:Sv,isCancel:Tv,CancelToken:Rv,VERSION:Av,all:Cv,Cancel:Pv,isAxiosError:Ov,spread:kv,toFormData:xv,AxiosHeaders:Nv,HttpStatusCode:Dv,formToJSON:Mv,getAdapter:Lv,mergeConfig:Uv}=fe,gv=fe.create({baseURL:"https://augmentplus.space/api"}),yv=wb("unknown",()=>{const e=sn({name:"me"}),t=sn({});async function n(){console.info("App Initialized");try{let{data:r}=await gv.get("/data");Object.assign(t,r),console.log(t)}catch(r){console.error(r)}}return{init:n,software:e,info:t}}),_v=pb(),Tr=fb(Bw);ip(Fg,async e=>{Tr.use(_v);const t=yv();console.log(e),t.init(),Tr.provide("software",{name:"me"}),Tr.use(Fw),Tr.mount("#app")});export{Nw as R,De as a,ku as b,C_ as c,bv as d,rt as i,T_ as o,io as r,Xg as t,vn as u};
