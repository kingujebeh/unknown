const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Index-DCmtX_2Y.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Index-uuMTrXvO.js","assets/Index-3FSj3AVI.js","assets/Index-DVvNuNkB.css","assets/SignUp-D62iLsRh.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const wf=()=>{};var vo={};/**
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
 */const dc=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ef=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dc(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ef(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new vf;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const If=function(e){const t=dc(e);return hc.encodeByteArray(t,!0)},pc=function(e){return If(e).replace(/\./g,"")},mc=function(e){try{return hc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Sf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tf=()=>Sf().__FIREBASE_DEFAULTS__,Rf=()=>{if(typeof process>"u"||typeof vo>"u")return;const e=vo.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Af=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&mc(e[1]);return t&&JSON.parse(t)},Ai=()=>{try{return wf()||Tf()||Rf()||Af()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Cf=e=>Ai()?.emulatorHosts?.[e],gc=()=>Ai()?.config,yc=e=>Ai()?.[`_${e}`];/**
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
 */class Pf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function es(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Of(e){return(await fetch(e,{credentials:"include"})).ok}const Fn={};function kf(){const e={prod:[],emulator:[]};for(const t of Object.keys(Fn))Fn[t]?e.emulator.push(t):e.prod.push(t);return e}function xf(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Io=!1;function Nf(e,t){if(typeof window>"u"||typeof document>"u"||!es(window.location.host)||Fn[e]===t||Fn[e]||Io)return;Fn[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=kf().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,m){d.setAttribute("width","24"),d.setAttribute("id",m),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Io=!0,o()},d}function u(d,m){d.setAttribute("id",m),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=xf(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),S=document.getElementById(b)||document.createElement("a"),A=n("preprendIcon"),R=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const O=d.element;a(O),u(S,b);const D=l();c(R,A),O.append(R,y,S,D),document.body.appendChild(O)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Df(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Lf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _c(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Mf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uf(){const e=ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function bc(){try{return typeof indexedDB=="object"}catch{return!1}}function wc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}function Ff(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Bf="FirebaseError";class ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Bf,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}}class on{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?$f(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ot(s,a,r)}}function $f(e,t){return e.replace(Hf,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Hf=/\{\$([^}]+)}/g;function jf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Qt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(So(i)&&So(o)){if(!Qt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function So(e){return e!==null&&typeof e=="object"}/**
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
 */function lr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Vf(e,t){const n=new Wf(e,t);return n.subscribe.bind(n)}class Wf{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qf(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Is),s.error===void 0&&(s.error=Is),s.complete===void 0&&(s.complete=Is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qf(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Is(){}/**
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
 */const zf=1e3,Kf=2,Gf=14400*1e3,Jf=.5;function To(e,t=zf,n=Kf){const r=t*Math.pow(n,e),s=Math.round(Jf*r*(Math.random()-.5)*2);return Math.min(Gf,r+s)}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class Yf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Pf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qf(t))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wt){return this.instances.has(t)}getOptions(t=Wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xf(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Wt){return this.component?this.component.multipleInstances?t:Wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xf(e){return e===Wt?void 0:e}function Qf(e){return e.instantiationMode==="EAGER"}/**
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
 */class Zf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const ed={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},td=re.INFO,nd={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},rd=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=nd[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ci{constructor(t){this.name=t,this._logLevel=td,this._logHandler=rd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ed[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const sd=(e,t)=>t.some(n=>e instanceof n);let Ro,Ao;function id(){return Ro||(Ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function od(){return Ao||(Ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ec=new WeakMap,Ys=new WeakMap,vc=new WeakMap,Ss=new WeakMap,Pi=new WeakMap;function ad(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ut(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ec.set(n,e)}).catch(()=>{}),Pi.set(t,e),t}function cd(e){if(Ys.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ys.set(e,t)}let Xs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ys.get(e);if(t==="objectStoreNames")return e.objectStoreNames||vc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ld(e){Xs=e(Xs)}function ud(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ts(this),t,...n);return vc.set(r,t.sort?t.sort():[t]),Ut(r)}:od().includes(e)?function(...t){return e.apply(Ts(this),t),Ut(Ec.get(this))}:function(...t){return Ut(e.apply(Ts(this),t))}}function fd(e){return typeof e=="function"?ud(e):(e instanceof IDBTransaction&&cd(e),sd(e,id())?new Proxy(e,Xs):e)}function Ut(e){if(e instanceof IDBRequest)return ad(e);if(Ss.has(e))return Ss.get(e);const t=fd(e);return t!==e&&(Ss.set(e,t),Pi.set(t,e)),t}const Ts=e=>Pi.get(e);function Ic(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ut(o.result),c.oldVersion,c.newVersion,Ut(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const dd=["get","getKey","getAll","getAllKeys","count"],hd=["put","add","delete","clear"],Rs=new Map;function Co(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rs.get(t))return Rs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=hd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Rs.set(t,i),i}ld(e=>({...e,get:(t,n,r)=>Co(t,n)||e.get(t,n,r),has:(t,n)=>!!Co(t,n)||e.has(t,n)}));/**
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
 */class pd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(md(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function md(e){return e.getComponent()?.type==="VERSION"}const Qs="@firebase/app",Po="0.14.1";/**
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
 */const gt=new Ci("@firebase/app"),gd="@firebase/app-compat",yd="@firebase/analytics-compat",_d="@firebase/analytics",bd="@firebase/app-check-compat",wd="@firebase/app-check",Ed="@firebase/auth",vd="@firebase/auth-compat",Id="@firebase/database",Sd="@firebase/data-connect",Td="@firebase/database-compat",Rd="@firebase/functions",Ad="@firebase/functions-compat",Cd="@firebase/installations",Pd="@firebase/installations-compat",Od="@firebase/messaging",kd="@firebase/messaging-compat",xd="@firebase/performance",Nd="@firebase/performance-compat",Dd="@firebase/remote-config",Ld="@firebase/remote-config-compat",Md="@firebase/storage",Ud="@firebase/storage-compat",Fd="@firebase/firestore",Bd="@firebase/ai",$d="@firebase/firestore-compat",Hd="firebase",jd="12.1.0";/**
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
 */const Zs="[DEFAULT]",Vd={[Qs]:"fire-core",[gd]:"fire-core-compat",[_d]:"fire-analytics",[yd]:"fire-analytics-compat",[wd]:"fire-app-check",[bd]:"fire-app-check-compat",[Ed]:"fire-auth",[vd]:"fire-auth-compat",[Id]:"fire-rtdb",[Sd]:"fire-data-connect",[Td]:"fire-rtdb-compat",[Rd]:"fire-fn",[Ad]:"fire-fn-compat",[Cd]:"fire-iid",[Pd]:"fire-iid-compat",[Od]:"fire-fcm",[kd]:"fire-fcm-compat",[xd]:"fire-perf",[Nd]:"fire-perf-compat",[Dd]:"fire-rc",[Ld]:"fire-rc-compat",[Md]:"fire-gcs",[Ud]:"fire-gcs-compat",[Fd]:"fire-fst",[$d]:"fire-fst-compat",[Bd]:"fire-vertex","fire-js":"fire-js",[Hd]:"fire-js-all"};/**
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
 */const Mr=new Map,Wd=new Map,ei=new Map;function Oo(e,t){try{e.container.addComponent(t)}catch(n){gt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yt(e){const t=e.name;if(ei.has(t))return gt.debug(`There were multiple attempts to register component ${t}.`),!1;ei.set(t,e);for(const n of Mr.values())Oo(n,e);for(const n of Wd.values())Oo(n,e);return!0}function Rn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function dt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const qd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new on("app","Firebase",qd);/**
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
 */class zd{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=jd;function Sc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Zs,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(n||(n=gc()),!n)throw Ft.create("no-options");const i=Mr.get(s);if(i){if(Qt(n,i.options)&&Qt(r,i.config))return i;throw Ft.create("duplicate-app",{appName:s})}const o=new Zf(s);for(const c of ei.values())o.addComponent(c);const a=new zd(n,r,o);return Mr.set(s,a),a}function Tc(e=Zs){const t=Mr.get(e);if(!t&&e===Zs&&gc())return Sc();if(!t)throw Ft.create("no-app",{appName:e});return t}function Ze(e,t,n){let r=Vd[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gt.warn(o.join(" "));return}yt(new st(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Kd="firebase-heartbeat-database",Gd=1,Zn="firebase-heartbeat-store";let As=null;function Rc(){return As||(As=Ic(Kd,Gd,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Zn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),As}async function Jd(e){try{const n=(await Rc()).transaction(Zn),r=await n.objectStore(Zn).get(Ac(e));return await n.done,r}catch(t){if(t instanceof ot)gt.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t?.message});gt.warn(n.message)}}}async function ko(e,t){try{const r=(await Rc()).transaction(Zn,"readwrite");await r.objectStore(Zn).put(t,Ac(e)),await r.done}catch(n){if(n instanceof ot)gt.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n?.message});gt.warn(r.message)}}}function Ac(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Yd=1024,Xd=30;class Qd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Xd){const s=th(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){gt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xo(),{heartbeatsToSend:n,unsentEntries:r}=Zd(this._heartbeatsCache.heartbeats),s=pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return gt.warn(t),""}}}function xo(){return new Date().toISOString().substring(0,10)}function Zd(e,t=Yd){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),No(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),No(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bc()?wc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jd(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ko(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ko(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function No(e){return pc(JSON.stringify({version:2,heartbeats:e})).length}function th(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function nh(e){yt(new st("platform-logger",t=>new pd(t),"PRIVATE")),yt(new st("heartbeat",t=>new Qd(t),"PRIVATE")),Ze(Qs,Po,e),Ze(Qs,Po,"esm2020"),Ze("fire-js","")}nh("");var rh="firebase",sh="12.1.0";/**
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
 */Ze(rh,sh,"app");function Cc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ih=Cc,Pc=new on("auth","Firebase",Cc());/**
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
 */const Ur=new Ci("@firebase/auth");function oh(e,...t){Ur.logLevel<=re.WARN&&Ur.warn(`Auth (${ur}): ${e}`,...t)}function Tr(e,...t){Ur.logLevel<=re.ERROR&&Ur.error(`Auth (${ur}): ${e}`,...t)}/**
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
 */function _t(e,...t){throw Oi(e,...t)}function et(e,...t){return Oi(e,...t)}function Oc(e,t,n){const r={...ih(),[t]:n};return new on("auth","Firebase",r).create(t,{appName:e.name})}function Gt(e){return Oc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Pc.create(e,...t)}function $(e,t,...n){if(!e)throw Oi(t,...n)}function pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tr(t),new Error(t)}function bt(e,t){e||pt(t)}/**
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
 */function ti(){return typeof self<"u"&&self.location?.href||""}function ah(){return Do()==="http:"||Do()==="https:"}function Do(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function ch(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ah()||_c()||"connection"in navigator)?navigator.onLine:!0}function lh(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class fr{constructor(t,n){this.shortDelay=t,this.longDelay=n,bt(n>t,"Short delay should be less than long delay!"),this.isMobile=Df()||Mf()}get(){return ch()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class kc{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dh=new fr(3e4,6e4);function xi(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function An(e,t,n,r,s={}){return xc(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=lr({key:e.config.apiKey,...o}).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:c,...i};return Lf()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&es(e.emulatorConfig.host)&&(l.credentials="include"),kc.fetch()(await Nc(e,e.config.apiHost,n,a),l)})}async function xc(e,t,n){e._canInitEmulator=!1;const r={...uh,...t};try{const s=new ph(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Er(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Er(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Er(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Er(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Oc(e,u,l);_t(e,u)}}catch(s){if(s instanceof ot)throw s;_t(e,"network-request-failed",{message:String(s)})}}async function hh(e,t,n,r,s={}){const i=await An(e,t,n,r,s);return"mfaPendingCredential"in i&&_t(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Nc(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?ki(e.config,s):`${e.config.apiScheme}://${s}`;return fh.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ph{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),dh.get())})}}function Er(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function mh(e,t){return An(e,"POST","/v1/accounts:delete",t)}async function Fr(e,t){return An(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Bn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gh(e,t=!1){const n=vt(e),r=await n.getIdToken(t),s=Ni(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Bn(Cs(s.auth_time)),issuedAtTime:Bn(Cs(s.iat)),expirationTime:Bn(Cs(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Cs(e){return Number(e)*1e3}function Ni(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=mc(n);return s?JSON.parse(s):(Tr("Failed to decode base64 JWT payload"),null)}catch(s){return Tr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Lo(e){const t=Ni(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function er(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ot&&yh(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function yh({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class _h{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ni{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Br(e){const t=e.auth,n=await e.getIdToken(),r=await er(e,Fr(t,{idToken:n}));$(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?Dc(s.providerUserInfo):[],o=wh(e.providerData,i),a=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ni(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,u)}async function bh(e){const t=vt(e);await Br(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function wh(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Dc(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Eh(e,t){const n=await xc(e,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await Nc(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&es(e.emulatorConfig.host)&&(c.credentials="include"),kc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vh(e,t){return An(e,"POST","/v2/accounts:revokeToken",xi(e,t))}/**
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
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Lo(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=Lo(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Eh(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new mn;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function Rt(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Be{constructor({uid:t,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new _h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ni(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await er(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return gh(this,t)}reload(){return bh(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Be({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Br(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(Gt(this.auth));const t=await this.getIdToken();return await er(this,mh(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:m,providerData:y,stsTokenManager:b}=n;$(f&&b,t,"internal-error");const S=mn.fromJSON(this.name,b);$(typeof f=="string",t,"internal-error"),Rt(r,t.name),Rt(s,t.name),$(typeof d=="boolean",t,"internal-error"),$(typeof m=="boolean",t,"internal-error"),Rt(i,t.name),Rt(o,t.name),Rt(a,t.name),Rt(c,t.name),Rt(l,t.name),Rt(u,t.name);const A=new Be({uid:f,auth:t,email:s,emailVerified:d,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:S,createdAt:l,lastLoginAt:u});return y&&Array.isArray(y)&&(A.providerData=y.map(R=>({...R}))),c&&(A._redirectEventId=c),A}static async _fromIdTokenResponse(t,n,r=!1){const s=new mn;s.updateFromServerResponse(n);const i=new Be({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Br(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new mn;a.updateFromIdToken(r);const c=new Be({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ni(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const Mo=new Map;function mt(e){bt(e instanceof Function,"Expected a class definition");let t=Mo.get(e);return t?(bt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Mo.set(e,t),t)}/**
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
 */class Lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Lc.type="NONE";const Uo=Lc;/**
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
 */function Rr(e,t,n){return`firebase:${e}:${t}:${n}`}class gn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Rr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Rr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Fr(this.auth,{idToken:t}).catch(()=>{});return n?Be._fromGetAccountInfoResponse(this.auth,n,t):null}return Be._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new gn(mt(Uo),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||mt(Uo);const o=Rr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await Fr(t,{idToken:u}).catch(()=>{});if(!d)break;f=await Be._fromGetAccountInfoResponse(t,d,u)}else f=Be._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new gn(i,t,r))}}/**
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
 */function Fo(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Bc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hc(t))return"Blackberry";if(jc(t))return"Webos";if(Uc(t))return"Safari";if((t.includes("chrome/")||Fc(t))&&!t.includes("edge/"))return"Chrome";if($c(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Mc(e=ve()){return/firefox\//i.test(e)}function Uc(e=ve()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fc(e=ve()){return/crios\//i.test(e)}function Bc(e=ve()){return/iemobile/i.test(e)}function $c(e=ve()){return/android/i.test(e)}function Hc(e=ve()){return/blackberry/i.test(e)}function jc(e=ve()){return/webos/i.test(e)}function Di(e=ve()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ih(e=ve()){return Di(e)&&!!window.navigator?.standalone}function Sh(){return Uf()&&document.documentMode===10}function Vc(e=ve()){return Di(e)||$c(e)||jc(e)||Hc(e)||/windows phone/i.test(e)||Bc(e)}/**
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
 */function Wc(e,t=[]){let n;switch(e){case"Browser":n=Fo(ve());break;case"Worker":n=`${Fo(ve())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${r}`}/**
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
 */class Th{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Rh(e,t={}){return An(e,"GET","/v2/passwordPolicy",xi(e,t))}/**
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
 */const Ah=6;class Ch{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ah,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Ph{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bo(this),this.idTokenSubscription=new Bo(this),this.beforeStateQueue=new Th(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await gn.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Fr(this,{idToken:t}),r=await Be._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(dt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(t);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Br(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lh()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(dt(this.app))return Promise.reject(Gt(this));const n=t?vt(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return dt(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Rh(this),n=new Ch(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new on("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vh(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&mt(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&oh(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Li(e){return vt(e)}class Bo{constructor(t){this.auth=t,this.observer=null,this.addObserver=Vf(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Oh(e){Mi=e}function kh(e){return Mi.loadJS(e)}function xh(){return Mi.gapiScript}function Nh(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Dh(e,t){const n=Rn(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qt(i,t??{}))return s;_t(s,"already-initialized")}return n.initialize({options:t})}function Lh(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(mt);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Mh(e,t,n){const r=Li(e);$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=qc(t),{host:o,port:a}=Uh(t),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(Qt(l,r.config.emulator)&&Qt(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,es(o)?(Of(`${i}//${o}${c}`),Nf("Auth",!0)):Fh()}function qc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Uh(e){const t=qc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$o(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$o(o)}}}function $o(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Fh(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class zc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(t){return pt("not implemented")}_linkToIdToken(t,n){return pt("not implemented")}_getReauthenticationResolver(t){return pt("not implemented")}}/**
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
 */async function yn(e,t){return hh(e,"POST","/v1/accounts:signInWithIdp",xi(e,t))}/**
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
 */const Bh="http://localhost";class Zt extends zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Zt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return yn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,yn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,yn(t,n)}buildRequest(){const t={requestUri:Bh,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=lr(n)}return t}}/**
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
 */class Kc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dr extends Kc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends dr{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Zt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Dt extends dr{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
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
 */class Lt extends dr{constructor(){super("twitter.com")}static credential(t,n){return Zt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
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
 */class En{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Be._fromIdTokenResponse(t,r,s),o=Ho(r);return new En({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Ho(r);return new En({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Ho(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class $r extends ot{constructor(t,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$r.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new $r(t,n,r,s)}}function Gc(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$r._fromErrorAndOperation(e,i,t,r):i})}async function $h(e,t,n=!1){const r=await er(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return En._forOperation(e,"link",r)}/**
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
 */async function Hh(e,t,n=!1){const{auth:r}=e;if(dt(r.app))return Promise.reject(Gt(r));const s="reauthenticate";try{const i=await er(e,Gc(r,s,t,e),n);$(i.idToken,r,"internal-error");const o=Ni(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(e.uid===a,r,"user-mismatch"),En._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&_t(r,"user-mismatch"),i}}/**
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
 */async function jh(e,t,n=!1){if(dt(e.app))return Promise.reject(Gt(e));const r="signIn",s=await Gc(e,r,t),i=await En._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function Vh(e,t,n,r){return vt(e).onIdTokenChanged(t,n,r)}function Wh(e,t,n){return vt(e).beforeAuthStateChanged(t,n)}function qh(e,t,n,r){return vt(e).onAuthStateChanged(t,n,r)}const Hr="__sak";/**
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
 */class Jc{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zh=1e3,Kh=10;class Yc extends Jc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Sh()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Kh):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},zh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Yc.type="LOCAL";const Gh=Yc;/**
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
 */class Xc extends Jc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Xc.type="SESSION";const Qc=Xc;/**
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
 */function Jh(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ts{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ts(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Jh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
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
 */class Yh{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ui("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function Xh(e){tt().location.href=e}/**
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
 */function Zc(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Qh(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zh(){return navigator?.serviceWorker?.controller||null}function ep(){return Zc()?self:null}/**
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
 */const el="firebaseLocalStorageDb",tp=1,jr="firebaseLocalStorage",tl="fbase_key";class hr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ns(e,t){return e.transaction([jr],t?"readwrite":"readonly").objectStore(jr)}function np(){const e=indexedDB.deleteDatabase(el);return new hr(e).toPromise()}function ri(){const e=indexedDB.open(el,tp);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(jr,{keyPath:tl})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(jr)?t(r):(r.close(),await np(),t(await ri()))})})}async function jo(e,t,n){const r=ns(e,!0).put({[tl]:t,value:n});return new hr(r).toPromise()}async function rp(e,t){const n=ns(e,!1).get(t),r=await new hr(n).toPromise();return r===void 0?null:r.value}function Vo(e,t){const n=ns(e,!0).delete(t);return new hr(n).toPromise()}const sp=800,ip=3;class nl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ri(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>ip)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(ep()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Qh(),!this.activeServiceWorker)return;this.sender=new Yh(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Zh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ri();return await jo(t,Hr,"1"),await Vo(t,Hr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jo(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>rp(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vo(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=ns(s,!1).getAll();return new hr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nl.type="LOCAL";const op=nl;new fr(3e4,6e4);/**
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
 */function ap(e,t){return t?mt(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Fi extends zc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return yn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return yn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return yn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function cp(e){return jh(e.auth,new Fi(e),e.bypassAuthState)}function lp(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),Hh(n,new Fi(e),e.bypassAuthState)}async function up(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),$h(n,new Fi(e),e.bypassAuthState)}/**
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
 */class rl{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return cp;case"linkViaPopup":case"linkViaRedirect":return up;case"reauthViaPopup":case"reauthViaRedirect":return lp;default:_t(this.auth,"internal-error")}}resolve(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fp=new fr(2e3,1e4);class pn extends rl{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const t=Ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,fp.get())};t()}}pn.currentPopupAction=null;/**
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
 */const dp="pendingRedirect",Ar=new Map;class hp extends rl{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ar.get(this.auth._key());if(!t){try{const r=await pp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ar.set(this.auth._key(),t)}return this.bypassAuthState||Ar.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pp(e,t){const n=yp(t),r=gp(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mp(e,t){Ar.set(e._key(),t)}function gp(e){return mt(e._redirectPersistence)}function yp(e){return Rr(dp,e.config.apiKey,e.name)}async function _p(e,t,n=!1){if(dt(e.app))return Promise.reject(Gt(e));const r=Li(e),s=ap(r,t),o=await new hp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const bp=600*1e3;class wp{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ep(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!sl(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";n.onError(et(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wo(t))}saveEventToCache(t){this.cachedEventUids.add(Wo(t)),this.lastProcessedEventTime=Date.now()}}function Wo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function sl({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Ep(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sl(e);default:return!1}}/**
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
 */async function vp(e,t={}){return An(e,"GET","/v1/projects",t)}/**
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
 */const Ip=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sp=/^https?/;async function Tp(e){if(e.config.emulator)return;const{authorizedDomains:t}=await vp(e);for(const n of t)try{if(Rp(n))return}catch{}_t(e,"unauthorized-domain")}function Rp(e){const t=ti(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Sp.test(n))return!1;if(Ip.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ap=new fr(3e4,6e4);function qo(){const e=tt().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Cp(e){return new Promise((t,n)=>{function r(){qo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qo(),n(et(e,"network-request-failed"))},timeout:Ap.get()})}if(tt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(tt().gapi?.load)r();else{const s=Nh("iframefcb");return tt()[s]=()=>{gapi.load?r():n(et(e,"network-request-failed"))},kh(`${xh()}?onload=${s}`).catch(i=>n(i))}}).catch(t=>{throw Cr=null,t})}let Cr=null;function Pp(e){return Cr=Cr||Cp(e),Cr}/**
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
 */const Op=new fr(5e3,15e3),kp="__/auth/iframe",xp="emulator/auth/iframe",Np={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lp(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ki(t,xp):`https://${e.config.authDomain}/${kp}`,r={apiKey:t.apiKey,appName:e.name,v:ur},s=Dp.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lr(r).slice(1)}`}async function Mp(e){const t=await Pp(e),n=tt().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:Lp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Np,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(e,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},Op.get());function c(){tt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Up={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fp=500,Bp=600,$p="_blank",Hp="http://localhost";class zo{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jp(e,t,n,r=Fp,s=Bp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...Up,width:r.toString(),height:s.toString(),top:i,left:o},l=ve().toLowerCase();n&&(a=Fc(l)?$p:n),Mc(l)&&(t=t||Hp,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(Ih(l)&&a!=="_self")return Vp(t||"",a),new zo(null);const f=window.open(t||"",a,u);$(f,e,"popup-blocked");try{f.focus()}catch{}return new zo(f)}function Vp(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Wp="__/auth/handler",qp="emulator/auth/handler",zp=encodeURIComponent("fac");async function Ko(e,t,n,r,s,i){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ur,eventId:s};if(t instanceof Kc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",jf(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof dr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${zp}=${encodeURIComponent(c)}`:"";return`${Kp(e)}?${lr(a).slice(1)}${l}`}function Kp({config:e}){return e.emulator?ki(e,qp):`https://${e.authDomain}/${Wp}`}/**
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
 */const Ps="webStorageSupport";class Gp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qc,this._completeRedirectFn=_p,this._overrideRedirectResult=mp}async _openPopup(t,n,r,s){bt(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Ko(t,n,r,ti(),s);return jp(t,i,Ui())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Ko(t,n,r,ti(),s);return Xh(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Mp(t),r=new wp(t);return n.register("authEvent",s=>($(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ps,{type:Ps},s=>{const i=s?.[0]?.[Ps];i!==void 0&&n(!!i),_t(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Tp(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vc()||Uc()||Di()}}const Jp=Gp;var Go="@firebase/auth",Jo="1.11.0";/**
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
 */class Yp{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xp(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qp(e){yt(new st("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wc(e)},l=new Ph(r,s,i,c);return Lh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),yt(new st("auth-internal",t=>{const n=Li(t.getProvider("auth").getImmediate());return(r=>new Yp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Go,Jo,Xp(e)),Ze(Go,Jo,"esm2020")}/**
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
 */const Zp=300,em=yc("authIdTokenMaxAge")||Zp;let Yo=null;const tm=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>em)return;const s=n?.token;Yo!==s&&(Yo=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nm(e=Tc()){const t=Rn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Dh(e,{popupRedirectResolver:Jp,persistence:[op,Gh,Qc]}),r=yc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tm(i.toString());Wh(n,o,()=>o(n.currentUser)),Vh(n,a=>o(a))}}const s=Cf("auth");return s&&Mh(n,`http://${s}`),n}function rm(){return document.getElementsByTagName("head")?.[0]??document}Oh({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qp("Browser");const il="@firebase/installations",Bi="0.6.19";/**
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
 */const ol=1e4,al=`w:${Bi}`,cl="FIS_v2",sm="https://firebaseinstallations.googleapis.com/v1",im=3600*1e3,om="installations",am="Installations";/**
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
 */const cm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},en=new on(om,am,cm);function ll(e){return e instanceof ot&&e.code.includes("request-failed")}/**
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
 */function ul({projectId:e}){return`${sm}/projects/${e}/installations`}function fl(e){return{token:e.token,requestStatus:2,expiresIn:um(e.expiresIn),creationTime:Date.now()}}async function dl(e,t){const r=(await t.json()).error;return en.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hl({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function lm(e,{refreshToken:t}){const n=hl(e);return n.append("Authorization",fm(t)),n}async function pl(e){const t=await e();return t.status>=500&&t.status<600?e():t}function um(e){return Number(e.replace("s","000"))}function fm(e){return`${cl} ${e}`}/**
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
 */async function dm({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ul(e),s=hl(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:cl,appId:e.appId,sdkVersion:al},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await pl(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:fl(l.authToken)}}else throw await dl("Create Installation",c)}/**
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
 */function ml(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function hm(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pm=/^[cdef][\w-]{21}$/,si="";function mm(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=gm(e);return pm.test(n)?n:si}catch{return si}}function gm(e){return hm(e).substr(0,22)}/**
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
 */function rs(e){return`${e.appName}!${e.appId}`}/**
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
 */const gl=new Map;function yl(e,t){const n=rs(e);_l(n,t),ym(n,t)}function _l(e,t){const n=gl.get(e);if(n)for(const r of n)r(t)}function ym(e,t){const n=_m();n&&n.postMessage({key:e,fid:t}),bm()}let zt=null;function _m(){return!zt&&"BroadcastChannel"in self&&(zt=new BroadcastChannel("[Firebase] FID Change"),zt.onmessage=e=>{_l(e.data.key,e.data.fid)}),zt}function bm(){gl.size===0&&zt&&(zt.close(),zt=null)}/**
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
 */const wm="firebase-installations-database",Em=1,tn="firebase-installations-store";let Os=null;function $i(){return Os||(Os=Ic(wm,Em,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(tn)}}})),Os}async function Vr(e,t){const n=rs(e),s=(await $i()).transaction(tn,"readwrite"),i=s.objectStore(tn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&yl(e,t.fid),t}async function bl(e){const t=rs(e),r=(await $i()).transaction(tn,"readwrite");await r.objectStore(tn).delete(t),await r.done}async function ss(e,t){const n=rs(e),s=(await $i()).transaction(tn,"readwrite"),i=s.objectStore(tn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&yl(e,a.fid),a}/**
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
 */async function Hi(e){let t;const n=await ss(e.appConfig,r=>{const s=vm(r),i=Im(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===si?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function vm(e){const t=e||{fid:mm(),registrationStatus:0};return wl(t)}function Im(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(en.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Sm(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Tm(e)}:{installationEntry:t}}async function Sm(e,t){try{const n=await dm(e,t);return Vr(e.appConfig,n)}catch(n){throw ll(n)&&n.customData.serverCode===409?await bl(e.appConfig):await Vr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Tm(e){let t=await Xo(e.appConfig);for(;t.registrationStatus===1;)await ml(100),t=await Xo(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hi(e);return r||n}return t}function Xo(e){return ss(e,t=>{if(!t)throw en.create("installation-not-found");return wl(t)})}function wl(e){return Rm(e)?{fid:e.fid,registrationStatus:0}:e}function Rm(e){return e.registrationStatus===1&&e.registrationTime+ol<Date.now()}/**
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
 */async function Am({appConfig:e,heartbeatServiceProvider:t},n){const r=Cm(e,n),s=lm(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:al,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await pl(()=>fetch(r,a));if(c.ok){const l=await c.json();return fl(l)}else throw await dl("Generate Auth Token",c)}function Cm(e,{fid:t}){return`${ul(e)}/${t}/authTokens:generate`}/**
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
 */async function ji(e,t=!1){let n;const r=await ss(e.appConfig,i=>{if(!El(i))throw en.create("not-registered");const o=i.authToken;if(!t&&km(o))return i;if(o.requestStatus===1)return n=Pm(e,t),i;{if(!navigator.onLine)throw en.create("app-offline");const a=Nm(i);return n=Om(e,a),a}});return n?await n:r.authToken}async function Pm(e,t){let n=await Qo(e.appConfig);for(;n.authToken.requestStatus===1;)await ml(100),n=await Qo(e.appConfig);const r=n.authToken;return r.requestStatus===0?ji(e,t):r}function Qo(e){return ss(e,t=>{if(!El(t))throw en.create("not-registered");const n=t.authToken;return Dm(n)?{...t,authToken:{requestStatus:0}}:t})}async function Om(e,t){try{const n=await Am(e,t),r={...t,authToken:n};return await Vr(e.appConfig,r),n}catch(n){if(ll(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bl(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await Vr(e.appConfig,r)}throw n}}function El(e){return e!==void 0&&e.registrationStatus===2}function km(e){return e.requestStatus===2&&!xm(e)}function xm(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+im}function Nm(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Dm(e){return e.requestStatus===1&&e.requestTime+ol<Date.now()}/**
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
 */async function Lm(e){const t=e,{installationEntry:n,registrationPromise:r}=await Hi(t);return r?r.catch(console.error):ji(t).catch(console.error),n.fid}/**
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
 */async function Mm(e,t=!1){const n=e;return await Um(n),(await ji(n,t)).token}async function Um(e){const{registrationPromise:t}=await Hi(e);t&&await t}/**
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
 */function Fm(e){if(!e||!e.options)throw ks("App Configuration");if(!e.name)throw ks("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ks(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ks(e){return en.create("missing-app-config-values",{valueName:e})}/**
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
 */const vl="installations",Bm="installations-internal",$m=e=>{const t=e.getProvider("app").getImmediate(),n=Fm(t),r=Rn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Hm=e=>{const t=e.getProvider("app").getImmediate(),n=Rn(t,vl).getImmediate();return{getId:()=>Lm(n),getToken:s=>Mm(n,s)}};function jm(){yt(new st(vl,$m,"PUBLIC")),yt(new st(Bm,Hm,"PRIVATE"))}jm();Ze(il,Bi);Ze(il,Bi,"esm2020");/**
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
 */const Wr="analytics",Vm="firebase_id",Wm="origin",qm=60*1e3,zm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vi="https://www.googletagmanager.com/gtag/js";/**
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
 */const Km={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new on("analytics","Analytics",Km);/**
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
 */function Gm(e){if(!e.startsWith(Vi)){const t=Me.create("invalid-gtag-resource",{gtagURL:e});return Ae.warn(t.message),""}return e}function Il(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Jm(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ym(e,t){const n=Jm("firebase-js-sdk-policy",{createScriptURL:Gm}),r=document.createElement("script"),s=`${Vi}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Xm(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Qm(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Il(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){Ae.error(a)}e("config",s,i)}async function Zm(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Il(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Ae.error(i)}}function eg(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Zm(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await Qm(e,t,n,r,a,c)}else if(i==="consent"){const[a,c]=o;e("consent",a,c)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){Ae.error(a)}}return s}function tg(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=eg(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function ng(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Vi)&&n.src.includes(e))return n;return null}/**
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
 */const rg=30,sg=1e3;class ig{constructor(t={},n=sg){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Sl=new ig;function og(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ag(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:og(n)},s=zm.replace("{app-id}",t),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function cg(e,t=Sl,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Me.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Me.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new fg;return setTimeout(async()=>{a.abort()},qm),Tl({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Tl(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Sl){const{appId:i,measurementId:o}=e;try{await lg(r,t)}catch(a){if(o)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await ag(e);return s.deleteThrottleMetadata(i),a}catch(a){const c=a;if(!ug(c)){if(s.deleteThrottleMetadata(i),o)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw a}const l=Number(c?.customData?.httpStatus)===503?To(n,s.intervalMillis,rg):To(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),Ae.debug(`Calling attemptFetch again in ${l} millis`),Tl(e,u,r,s)}}function lg(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Me.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ug(e){if(!(e instanceof ot)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class fg{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function dg(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o={...r,send_to:i};e("event",n,o)}}/**
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
 */async function hg(){if(bc())try{await wc()}catch(e){return Ae.warn(Me.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return Ae.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pg(e,t,n,r,s,i,o){const a=cg(e);a.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>Ae.error(d)),t.push(a);const c=hg().then(d=>{if(d)return r.getId()}),[l,u]=await Promise.all([a,c]);ng(i)||Ym(i,l.measurementId),s("js",new Date);const f=o?.config??{};return f[Wm]="firebase",f.update=!0,u!=null&&(f[Vm]=u),s("config",l.measurementId,f),l.measurementId}/**
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
 */class mg{constructor(t){this.app=t}_delete(){return delete $n[this.app.options.appId],Promise.resolve()}}let $n={},Zo=[];const ea={};let xs="dataLayer",gg="gtag",ta,Rl,na=!1;function yg(){const e=[];if(_c()&&e.push("This is a browser extension environment."),Ff()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Me.create("invalid-analytics-context",{errorInfo:t});Ae.warn(n.message)}}function _g(e,t,n){yg();const r=e.options.appId;if(!r)throw Me.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if($n[r]!=null)throw Me.create("already-exists",{id:r});if(!na){Xm(xs);const{wrappedGtag:i,gtagCore:o}=tg($n,Zo,ea,xs,gg);Rl=i,ta=o,na=!0}return $n[r]=pg(e,Zo,ea,t,ta,xs,n),new mg(e)}function bg(e=Tc()){e=vt(e);const t=Rn(e,Wr);return t.isInitialized()?t.getImmediate():wg(e)}function wg(e,t={}){const n=Rn(e,Wr);if(n.isInitialized()){const s=n.getImmediate();if(Qt(t,n.getOptions()))return s;throw Me.create("already-initialized")}return n.initialize({options:t})}function Eg(e,t,n,r){e=vt(e),dg(Rl,$n[e.app.options.appId],t,n,r).catch(s=>Ae.error(s))}const ra="@firebase/analytics",sa="0.10.18";function vg(){yt(new st(Wr,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return _g(r,s,n)},"PUBLIC")),yt(new st("analytics-internal",e,"PRIVATE")),Ze(ra,sa),Ze(ra,sa,"esm2020");function e(t){try{const n=t.getProvider(Wr).getImmediate();return{logEvent:(r,s,i)=>Eg(n,r,s,i)}}catch(n){throw Me.create("interop-component-reg-failed",{reason:n})}}}vg();const Ig={apiKey:"AIzaSyC4Ge5BojUJkC4_kvSkj9a4johP4tOd7RA",authDomain:"great-unknown.firebaseapp.com",projectId:"great-unknown",storageBucket:"great-unknown.firebasestorage.app",messagingSenderId:"199011519338",appId:"1:199011519338:web:86c235a1af6ac6e0b8f313",measurementId:"G-JDQ21T5BBY"},Al=Sc(Ig);bg(Al);const Sg=nm(Al);/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const oe={},_n=[],nt=()=>{},Tg=()=>!1,is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),qi=e=>e.startsWith("onUpdate:"),ye=Object.assign,zi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Rg=Object.prototype.hasOwnProperty,Z=(e,t)=>Rg.call(e,t),j=Array.isArray,Hn=e=>os(e)==="[object Map]",Ag=e=>os(e)==="[object Set]",W=e=>typeof e=="function",de=e=>typeof e=="string",Cn=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Cl=e=>(ue(e)||W(e))&&W(e.then)&&W(e.catch),Cg=Object.prototype.toString,os=e=>Cg.call(e),Pg=e=>os(e).slice(8,-1),Og=e=>os(e)==="[object Object]",Ki=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jn=Wi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),as=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},kg=/-(\w)/g,Fe=as(e=>e.replace(kg,(t,n)=>n?n.toUpperCase():"")),xg=/\B([A-Z])/g,an=as(e=>e.replace(xg,"-$1").toLowerCase()),cs=as(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ns=as(e=>e?`on${cs(e)}`:""),Bt=(e,t)=>!Object.is(e,t),Ds=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ii=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ng=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ia;const ls=()=>ia||(ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gi(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?Ug(r):Gi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(de(e)||ue(e))return e}const Dg=/;(?![^(]*\))/g,Lg=/:([^]+)/,Mg=/\/\*[^]*?\*\//g;function Ug(e){const t={};return e.replace(Mg,"").split(Dg).forEach(n=>{if(n){const r=n.split(Lg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ji(e){let t="";if(de(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=Ji(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bg=Wi(Fg);function Pl(e){return!!e||e===""}/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class Ol{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=he,!t&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=he;try{return he=this,t()}finally{he=n}}}on(){++this._on===1&&(this.prevScope=he,he=this)}off(){this._on>0&&--this._on===0&&(he=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kl(e){return new Ol(e)}function xl(){return he}function $g(e,t=!1){he&&he.cleanups.push(e)}let ie;const Ls=new WeakSet;class Nl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,he&&he.active&&he.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ls.has(this)&&(Ls.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ll(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oa(this),Ml(this);const t=ie,n=He;ie=this,He=!0;try{return this.fn()}finally{Ul(this),ie=t,He=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qi(t);this.deps=this.depsTail=void 0,oa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ls.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oi(this)&&this.run()}get dirty(){return oi(this)}}let Dl=0,Vn,Wn;function Ll(e,t=!1){if(e.flags|=8,t){e.next=Wn,Wn=e;return}e.next=Vn,Vn=e}function Yi(){Dl++}function Xi(){if(--Dl>0)return;if(Wn){let t=Wn;for(Wn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Vn;){let t=Vn;for(Vn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ml(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ul(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Qi(r),Hg(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function oi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Fl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Fl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===tr)||(e.globalVersion=tr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!oi(e))))return;e.flags|=2;const t=e.dep,n=ie,r=He;ie=e,He=!0;try{Ml(e);const s=e.fn(e._value);(t.version===0||Bt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ie=n,He=r,Ul(e),e.flags&=-3}}function Qi(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qi(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hg(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let He=!0;const Bl=[];function wt(){Bl.push(He),He=!1}function Et(){const e=Bl.pop();He=e===void 0?!0:e}function oa(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ie;ie=void 0;try{t()}finally{ie=n}}}let tr=0;class jg{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ie||!He||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new jg(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,$l(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(t){this.version++,tr++,this.notify(t)}notify(t){Yi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xi()}}}function $l(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)$l(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qr=new WeakMap,Jt=Symbol(""),ai=Symbol(""),nr=Symbol("");function pe(e,t,n){if(He&&ie){let r=qr.get(e);r||qr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Zi),s.map=r,s.key=n),s.track()}}function ht(e,t,n,r,s,i){const o=qr.get(e);if(!o){tr++;return}const a=c=>{c&&c.trigger()};if(Yi(),t==="clear")o.forEach(a);else{const c=j(e),l=c&&Ki(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===nr||!Cn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(nr)),t){case"add":c?l&&a(o.get("length")):(a(o.get(Jt)),Hn(e)&&a(o.get(ai)));break;case"delete":c||(a(o.get(Jt)),Hn(e)&&a(o.get(ai)));break;case"set":Hn(e)&&a(o.get(Jt));break}}Xi()}function Vg(e,t){const n=qr.get(e);return n&&n.get(t)}function un(e){const t=Y(e);return t===e?t:(pe(t,"iterate",nr),je(e)?t:t.map(we))}function eo(e){return pe(e=Y(e),"iterate",nr),e}const Wg={__proto__:null,[Symbol.iterator](){return Ms(this,Symbol.iterator,we)},concat(...e){return un(this).concat(...e.map(t=>j(t)?un(t):t))},entries(){return Ms(this,"entries",e=>(e[1]=we(e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(we),arguments)},find(e,t){return ct(this,"find",e,t,we,arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,we,arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return Us(this,"includes",e)},indexOf(...e){return Us(this,"indexOf",e)},join(e){return un(this).join(e)},lastIndexOf(...e){return Us(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return xn(this,"pop")},push(...e){return xn(this,"push",e)},reduce(e,...t){return aa(this,"reduce",e,t)},reduceRight(e,...t){return aa(this,"reduceRight",e,t)},shift(){return xn(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return xn(this,"splice",e)},toReversed(){return un(this).toReversed()},toSorted(e){return un(this).toSorted(e)},toSpliced(...e){return un(this).toSpliced(...e)},unshift(...e){return xn(this,"unshift",e)},values(){return Ms(this,"values",we)}};function Ms(e,t,n){const r=eo(e),s=r[t]();return r!==e&&!je(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const qg=Array.prototype;function ct(e,t,n,r,s,i){const o=eo(e),a=o!==e&&!je(e),c=o[t];if(c!==qg[t]){const f=c.apply(e,i);return a?we(f):f}let l=n;o!==e&&(a?l=function(f,d){return n.call(this,we(f),d,e)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function aa(e,t,n,r){const s=eo(e);let i=n;return s!==e&&(je(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,we(a),c,e)}),s[t](i,...r)}function Us(e,t,n){const r=Y(e);pe(r,"iterate",nr);const s=r[t](...n);return(s===-1||s===!1)&&ro(n[0])?(n[0]=Y(n[0]),r[t](...n)):s}function xn(e,t,n=[]){wt(),Yi();const r=Y(e)[t].apply(e,n);return Xi(),Et(),r}const zg=Wi("__proto__,__v_isRef,__isVue"),Hl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Cn));function Kg(e){Cn(e)||(e=String(e));const t=Y(this);return pe(t,"has",e),t.hasOwnProperty(e)}class jl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ry:zl:i?ql:Wl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=j(t);if(!s){let c;if(o&&(c=Wg[n]))return c;if(n==="hasOwnProperty")return Kg}const a=Reflect.get(t,n,le(t)?t:r);return(Cn(n)?Hl.has(n):zg(n))||(s||pe(t,"get",n),i)?a:le(a)?o&&Ki(n)?a:a.value:ue(a)?s?Gl(a):nn(a):a}}class Vl extends jl{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=rn(i);if(!je(r)&&!rn(r)&&(i=Y(i),r=Y(r)),!j(t)&&le(i)&&!le(r))return c?!1:(i.value=r,!0)}const o=j(t)&&Ki(n)?Number(n)<t.length:Z(t,n),a=Reflect.set(t,n,r,le(t)?t:s);return t===Y(s)&&(o?Bt(r,i)&&ht(t,"set",n,r):ht(t,"add",n,r)),a}deleteProperty(t,n){const r=Z(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ht(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Cn(n)||!Hl.has(n))&&pe(t,"has",n),r}ownKeys(t){return pe(t,"iterate",j(t)?"length":Jt),Reflect.ownKeys(t)}}class Gg extends jl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Jg=new Vl,Yg=new Gg,Xg=new Vl(!0);const ci=e=>e,vr=e=>Reflect.getPrototypeOf(e);function Qg(e,t,n){return function(...r){const s=this.__v_raw,i=Y(s),o=Hn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?ci:t?li:we;return!t&&pe(i,"iterate",c?ai:Jt),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ir(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Zg(e,t){const n={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);e||(Bt(s,a)&&pe(o,"get",s),pe(o,"get",a));const{has:c}=vr(o),l=t?ci:e?li:we;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&pe(Y(s),"iterate",Jt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return e||(Bt(s,a)&&pe(o,"has",s),pe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),l=t?ci:e?li:we;return!e&&pe(c,"iterate",Jt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ye(n,e?{add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear")}:{add(s){!t&&!je(s)&&!rn(s)&&(s=Y(s));const i=Y(this);return vr(i).has.call(i,s)||(i.add(s),ht(i,"add",s,s)),this},set(s,i){!t&&!je(i)&&!rn(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=vr(o);let l=a.call(o,s);l||(s=Y(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Bt(i,u)&&ht(o,"set",s,i):ht(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=vr(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ht(i,"delete",s,void 0),l},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&ht(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Qg(s,e,t)}),n}function to(e,t){const n=Zg(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const ey={get:to(!1,!1)},ty={get:to(!1,!0)},ny={get:to(!0,!1)};const Wl=new WeakMap,ql=new WeakMap,zl=new WeakMap,ry=new WeakMap;function sy(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iy(e){return e.__v_skip||!Object.isExtensible(e)?0:sy(Pg(e))}function nn(e){return rn(e)?e:no(e,!1,Jg,ey,Wl)}function Kl(e){return no(e,!1,Xg,ty,ql)}function Gl(e){return no(e,!0,Yg,ny,zl)}function no(e,t,n,r,s){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=iy(e);if(i===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function $t(e){return rn(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function rn(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function ro(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function so(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&ii(e,"__v_skip",!0),e}const we=e=>ue(e)?nn(e):e,li=e=>ue(e)?Gl(e):e;function le(e){return e?e.__v_isRef===!0:!1}function us(e){return Jl(e,!1)}function oy(e){return Jl(e,!0)}function Jl(e,t){return le(e)?e:new ay(e,t)}class ay{constructor(t,n){this.dep=new Zi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:we(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||je(t)||rn(t);t=r?t:Y(t),Bt(t,n)&&(this._rawValue=t,this._value=r?t:we(t),this.dep.trigger())}}function bn(e){return le(e)?e.value:e}const cy={get:(e,t,n)=>t==="__v_raw"?e:bn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Yl(e){return $t(e)?e:new Proxy(e,cy)}function ly(e){const t=j(e)?new Array(e.length):{};for(const n in e)t[n]=Xl(e,n);return t}class uy{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Vg(Y(this._object),this._key)}}class fy{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function dy(e,t,n){return le(e)?e:W(e)?new fy(e):ue(e)&&arguments.length>1?Xl(e,t,n):us(e)}function Xl(e,t,n){const r=e[t];return le(r)?r:new uy(e,t,n)}class hy{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Zi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return Ll(this,!0),!0}get value(){const t=this.dep.track();return Fl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function py(e,t,n=!1){let r,s;return W(e)?r=e:(r=e.get,s=e.set),new hy(r,s,n)}const Sr={},zr=new WeakMap;let qt;function my(e,t=!1,n=qt){if(n){let r=zr.get(n);r||zr.set(n,r=[]),r.push(e)}}function gy(e,t,n=oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=D=>s?D:je(D)||s===!1||s===0?Mt(D,1):Mt(D);let u,f,d,m,y=!1,b=!1;if(le(e)?(f=()=>e.value,y=je(e)):$t(e)?(f=()=>l(e),y=!0):j(e)?(b=!0,y=e.some(D=>$t(D)||je(D)),f=()=>e.map(D=>{if(le(D))return D.value;if($t(D))return l(D);if(W(D))return c?c(D,2):D()})):W(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){wt();try{d()}finally{Et()}}const D=qt;qt=u;try{return c?c(e,3,[m]):e(m)}finally{qt=D}}:f=nt,t&&s){const D=f,F=s===!0?1/0:s;f=()=>Mt(D(),F)}const S=xl(),A=()=>{u.stop(),S&&S.active&&zi(S.effects,u)};if(i&&t){const D=t;t=(...F)=>{D(...F),A()}}let R=b?new Array(e.length).fill(Sr):Sr;const O=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(t){const F=u.run();if(s||y||(b?F.some((te,G)=>Bt(te,R[G])):Bt(F,R))){d&&d();const te=qt;qt=u;try{const G=[F,R===Sr?void 0:b&&R[0]===Sr?[]:R,m];R=F,c?c(t,3,G):t(...G)}finally{qt=te}}}else u.run()};return a&&a(O),u=new Nl(f),u.scheduler=o?()=>o(O,!1):O,m=D=>my(D,!1,u),d=u.onStop=()=>{const D=zr.get(u);if(D){if(c)c(D,4);else for(const F of D)F();zr.delete(u)}},t?r?O(!0):R=u.run():o?o(O.bind(null,!0),!0):u.run(),A.pause=u.pause.bind(u),A.resume=u.resume.bind(u),A.stop=A,A}function Mt(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,le(e))Mt(e.value,t,n);else if(j(e))for(let r=0;r<e.length;r++)Mt(e[r],t,n);else if(Ag(e)||Hn(e))e.forEach(r=>{Mt(r,t,n)});else if(Og(e)){for(const r in e)Mt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Mt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pr(e,t,n,r){try{return r?e(...r):e()}catch(s){fs(s,t,n)}}function it(e,t,n,r){if(W(e)){const s=pr(e,t,n,r);return s&&Cl(s)&&s.catch(i=>{fs(i,t,n)}),s}if(j(e)){const s=[];for(let i=0;i<e.length;i++)s.push(it(e[i],t,n,r));return s}}function fs(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||oe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){wt(),pr(i,null,10,[e,c,l]),Et();return}}yy(e,n,s,r,o)}function yy(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ee=[];let Xe=-1;const wn=[];let Pt=null,dn=0;const Ql=Promise.resolve();let Kr=null;function io(e){const t=Kr||Ql;return e?t.then(this?e.bind(this):e):t}function _y(e){let t=Xe+1,n=Ee.length;for(;t<n;){const r=t+n>>>1,s=Ee[r],i=rr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function oo(e){if(!(e.flags&1)){const t=rr(e),n=Ee[Ee.length-1];!n||!(e.flags&2)&&t>=rr(n)?Ee.push(e):Ee.splice(_y(t),0,e),e.flags|=1,Zl()}}function Zl(){Kr||(Kr=Ql.then(tu))}function by(e){j(e)?wn.push(...e):Pt&&e.id===-1?Pt.splice(dn+1,0,e):e.flags&1||(wn.push(e),e.flags|=1),Zl()}function ca(e,t,n=Xe+1){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ee.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function eu(e){if(wn.length){const t=[...new Set(wn)].sort((n,r)=>rr(n)-rr(r));if(wn.length=0,Pt){Pt.push(...t);return}for(Pt=t,dn=0;dn<Pt.length;dn++){const n=Pt[dn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pt=null,dn=0}}const rr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function tu(e){try{for(Xe=0;Xe<Ee.length;Xe++){const t=Ee[Xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),pr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Xe<Ee.length;Xe++){const t=Ee[Xe];t&&(t.flags&=-2)}Xe=-1,Ee.length=0,eu(),Kr=null,(Ee.length||wn.length)&&tu()}}let $e=null,nu=null;function Gr(e){const t=$e;return $e=e,nu=e&&e.type.__scopeId||null,t}function wy(e,t=$e,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&_a(-1);const i=Gr(t);let o;try{o=e(...s)}finally{Gr(i),r._d&&_a(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function jt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(wt(),it(c,n,8,[e.el,a,e,t]),Et())}}const Ey=Symbol("_vte"),vy=e=>e.__isTeleport;function ao(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ao(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ru(e,t){return W(e)?ye({name:e.name},t,{setup:e}):e}function su(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function qn(e,t,n,r,s=!1){if(j(e)){e.forEach((y,b)=>qn(y,t&&(j(t)?t[b]:t),n,r,s));return}if(zn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ho(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===oe?a.refs={}:a.refs,f=a.setupState,d=Y(f),m=f===oe?()=>!1:y=>Z(d,y);if(l!=null&&l!==c&&(de(l)?(u[l]=null,m(l)&&(f[l]=null)):le(l)&&(l.value=null)),W(c))pr(c,a,12,[o,u]);else{const y=de(c),b=le(c);if(y||b){const S=()=>{if(e.f){const A=y?m(c)?f[c]:u[c]:c.value;s?j(A)&&zi(A,i):j(A)?A.includes(i)||A.push(i):y?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else y?(u[c]=o,m(c)&&(f[c]=o)):b&&(c.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,xe(S,n)):S()}}}ls().requestIdleCallback;ls().cancelIdleCallback;const zn=e=>!!e.type.__asyncLoader,iu=e=>e.type.__isKeepAlive;function Iy(e,t){ou(e,"a",t)}function Sy(e,t){ou(e,"da",t)}function ou(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ds(t,r,n),n){let s=n.parent;for(;s&&s.parent;)iu(s.parent.vnode)&&Ty(r,t,n,s),s=s.parent}}function Ty(e,t,n,r){const s=ds(t,e,r,!0);au(()=>{zi(r[t],s)},n)}function ds(e,t,n=me,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{wt();const a=mr(n),c=it(t,n,e,o);return a(),Et(),c});return r?s.unshift(i):s.push(i),i}}const It=e=>(t,n=me)=>{(!ir||e==="sp")&&ds(e,(...r)=>t(...r),n)},Ry=It("bm"),Ay=It("m"),Cy=It("bu"),Py=It("u"),Oy=It("bum"),au=It("um"),ky=It("sp"),xy=It("rtg"),Ny=It("rtc");function Dy(e,t=me){ds("ec",e,t)}const Ly="components";function My(e,t){return Fy(Ly,e,!0,t)||e}const Uy=Symbol.for("v-ndc");function Fy(e,t,n=!0,r=!1){const s=$e||me;if(s){const i=s.type;{const a=P_(i,!1);if(a&&(a===t||a===Fe(t)||a===cs(Fe(t))))return i}const o=la(s[e]||i[e],t)||la(s.appContext[e],t);return!o&&r?i:o}}function la(e,t){return e&&(e[t]||e[Fe(t)]||e[cs(Fe(t))])}const ui=e=>e?Au(e)?ho(e):ui(e.parent):null,Kn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ui(e.parent),$root:e=>ui(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>lu(e),$forceUpdate:e=>e.f||(e.f=()=>{oo(e.update)}),$nextTick:e=>e.n||(e.n=io.bind(e.proxy)),$watch:e=>o_.bind(e)}),Fs=(e,t)=>e!==oe&&!e.__isScriptSetup&&Z(e,t),By={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Fs(r,t))return o[t]=1,r[t];if(s!==oe&&Z(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Z(l,t))return o[t]=3,i[t];if(n!==oe&&Z(n,t))return o[t]=4,n[t];fi&&(o[t]=0)}}const u=Kn[t];let f,d;if(u)return t==="$attrs"&&pe(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==oe&&Z(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,Z(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Fs(s,t)?(s[t]=n,!0):r!==oe&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==oe&&Z(e,o)||Fs(t,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(Kn,o)||Z(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ua(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let fi=!0;function $y(e){const t=lu(e),n=e.proxy,r=e.ctx;fi=!1,t.beforeCreate&&fa(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:y,activated:b,deactivated:S,beforeDestroy:A,beforeUnmount:R,destroyed:O,unmounted:D,render:F,renderTracked:te,renderTriggered:G,errorCaptured:q,serverPrefetch:K,expose:ce,inheritAttrs:_e,components:Oe,directives:Ie,filters:Ht}=t;if(l&&Hy(l,r,null),o)for(const z in o){const X=o[z];W(X)&&(r[z]=X.bind(n))}if(s){const z=s.call(n,n);ue(z)&&(e.data=nn(z))}if(fi=!0,i)for(const z in i){const X=i[z],at=W(X)?X.bind(n,n):W(X.get)?X.get.bind(n,n):nt,Tt=!W(X)&&W(X.set)?X.set.bind(n):nt,qe=Ne({get:at,set:Tt});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Se=>qe.value=Se})}if(a)for(const z in a)cu(a[z],r,n,z);if(c){const z=W(c)?c.call(n):c;Reflect.ownKeys(z).forEach(X=>{Pr(X,z[X])})}u&&fa(u,e,"c");function ae(z,X){j(X)?X.forEach(at=>z(at.bind(n))):X&&z(X.bind(n))}if(ae(Ry,f),ae(Ay,d),ae(Cy,m),ae(Py,y),ae(Iy,b),ae(Sy,S),ae(Dy,q),ae(Ny,te),ae(xy,G),ae(Oy,R),ae(au,D),ae(ky,K),j(ce))if(ce.length){const z=e.exposed||(e.exposed={});ce.forEach(X=>{Object.defineProperty(z,X,{get:()=>n[X],set:at=>n[X]=at,enumerable:!0})})}else e.exposed||(e.exposed={});F&&e.render===nt&&(e.render=F),_e!=null&&(e.inheritAttrs=_e),Oe&&(e.components=Oe),Ie&&(e.directives=Ie),K&&su(e)}function Hy(e,t,n=nt){j(e)&&(e=di(e));for(const r in e){const s=e[r];let i;ue(s)?"default"in s?i=rt(s.from||r,s.default,!0):i=rt(s.from||r):i=rt(s),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function fa(e,t,n){it(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function cu(e,t,n,r){let s=r.includes(".")?Eu(n,r):()=>n[r];if(de(e)){const i=t[e];W(i)&&Gn(s,i)}else if(W(e))Gn(s,e.bind(n));else if(ue(e))if(j(e))e.forEach(i=>cu(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&Gn(s,i,e)}}function lu(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Jr(c,l,o,!0)),Jr(c,t,o)),ue(t)&&i.set(t,c),c}function Jr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Jr(e,i,n,!0),s&&s.forEach(o=>Jr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=jy[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const jy={data:da,props:ha,emits:ha,methods:Un,computed:Un,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Un,directives:Un,watch:Wy,provide:da,inject:Vy};function da(e,t){return t?e?function(){return ye(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Vy(e,t){return Un(di(e),di(t))}function di(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Un(e,t){return e?ye(Object.create(null),e,t):t}function ha(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:ye(Object.create(null),ua(e),ua(t??{})):t}function Wy(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function uu(){return{app:null,config:{isNativeTag:Tg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qy=0;function zy(e,t){return function(r,s=null){W(r)||(r=ye({},r)),s!=null&&!ue(s)&&(s=null);const i=uu(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:qy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:k_,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(l,...f)):W(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const m=l._ceVNode||Le(r,s);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),e(m,u,d),c=!0,l._container=u,u.__vue_app__=l,ho(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(it(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Yt;Yt=l;try{return u()}finally{Yt=f}}};return l}}let Yt=null;function Pr(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function rt(e,t,n=!1){const r=Ru();if(r||Yt){let s=Yt?Yt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&W(t)?t.call(r&&r.proxy):t}}function Ky(){return!!(Ru()||Yt)}const fu={},du=()=>Object.create(fu),hu=e=>Object.getPrototypeOf(e)===fu;function Gy(e,t,n,r=!1){const s={},i=du();e.propsDefaults=Object.create(null),pu(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Kl(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Jy(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=Y(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(hs(e.emitsOptions,d))continue;const m=t[d];if(c)if(Z(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=Fe(d);s[y]=hi(c,a,y,m,e,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{pu(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!Z(t,f)&&((u=an(f))===f||!Z(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=hi(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Z(t,f))&&(delete i[f],l=!0)}l&&ht(e.attrs,"set","")}function pu(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(jn(c))continue;const l=t[c];let u;s&&Z(s,u=Fe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:hs(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||oe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=hi(s,c,f,l[f],e,!Z(l,f))}}return o}function hi(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=mr(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===an(n))&&(r=!0))}return r}const Yy=new WeakMap;function mu(e,t,n=!1){const r=n?Yy:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!W(e)){const u=f=>{c=!0;const[d,m]=mu(f,t,!0);ye(o,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return ue(e)&&r.set(e,_n),_n;if(j(i))for(let u=0;u<i.length;u++){const f=Fe(i[u]);pa(f)&&(o[f]=oe)}else if(i)for(const u in i){const f=Fe(u);if(pa(f)){const d=i[u],m=o[f]=j(d)||W(d)?{type:d}:ye({},d),y=m.type;let b=!1,S=!0;if(j(y))for(let A=0;A<y.length;++A){const R=y[A],O=W(R)&&R.name;if(O==="Boolean"){b=!0;break}else O==="String"&&(S=!1)}else b=W(y)&&y.name==="Boolean";m[0]=b,m[1]=S,(b||Z(m,"default"))&&a.push(f)}}const l=[o,a];return ue(e)&&r.set(e,l),l}function pa(e){return e[0]!=="$"&&!jn(e)}const co=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",lo=e=>j(e)?e.map(Qe):[Qe(e)],Xy=(e,t,n)=>{if(t._n)return t;const r=wy((...s)=>lo(t(...s)),n);return r._c=!1,r},gu=(e,t,n)=>{const r=e._ctx;for(const s in e){if(co(s))continue;const i=e[s];if(W(i))t[s]=Xy(s,i,r);else if(i!=null){const o=lo(i);t[s]=()=>o}}},yu=(e,t)=>{const n=lo(t);e.slots.default=()=>n},_u=(e,t,n)=>{for(const r in t)(n||!co(r))&&(e[r]=t[r])},Qy=(e,t,n)=>{const r=e.slots=du();if(e.vnode.shapeFlag&32){const s=t.__;s&&ii(r,"__",s,!0);const i=t._;i?(_u(r,t,n),n&&ii(r,"_",i,!0)):gu(t,r)}else t&&yu(e,t)},Zy=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=oe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:_u(s,t,n):(i=!t.$stable,gu(t,s)),o=t}else t&&(yu(e,t),o={default:1});if(i)for(const a in s)!co(a)&&o[a]==null&&delete s[a]},xe=h_;function e_(e){return t_(e)}function t_(e,t){const n=ls();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=nt,insertStaticContent:y}=e,b=(h,p,g,w=null,I=null,v=null,k=void 0,P=null,C=!!p.dynamicChildren)=>{if(h===p)return;h&&!Nn(h,p)&&(w=E(h),Se(h,I,v,!0),h=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:N}=p;switch(T){case ps:S(h,p,g,w);break;case vn:A(h,p,g,w);break;case Or:h==null&&R(p,g,w,k);break;case ft:Oe(h,p,g,w,I,v,k,P,C);break;default:N&1?F(h,p,g,w,I,v,k,P,C):N&6?Ie(h,p,g,w,I,v,k,P,C):(N&64||N&128)&&T.process(h,p,g,w,I,v,k,P,C,M)}B!=null&&I?qn(B,h&&h.ref,v,p||h,!p):B==null&&h&&h.ref!=null&&qn(h.ref,null,v,h,!0)},S=(h,p,g,w)=>{if(h==null)r(p.el=a(p.children),g,w);else{const I=p.el=h.el;p.children!==h.children&&l(I,p.children)}},A=(h,p,g,w)=>{h==null?r(p.el=c(p.children||""),g,w):p.el=h.el},R=(h,p,g,w)=>{[h.el,h.anchor]=y(h.children,p,g,w,h.el,h.anchor)},O=({el:h,anchor:p},g,w)=>{let I;for(;h&&h!==p;)I=d(h),r(h,g,w),h=I;r(p,g,w)},D=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),s(h),h=g;s(p)},F=(h,p,g,w,I,v,k,P,C)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),h==null?te(p,g,w,I,v,k,P,C):K(h,p,I,v,k,P,C)},te=(h,p,g,w,I,v,k,P)=>{let C,T;const{props:B,shapeFlag:N,transition:U,dirs:H}=h;if(C=h.el=o(h.type,v,B&&B.is,B),N&8?u(C,h.children):N&16&&q(h.children,C,null,w,I,Bs(h,v),k,P),H&&jt(h,null,w,"created"),G(C,h,h.scopeId,k,w),B){for(const se in B)se!=="value"&&!jn(se)&&i(C,se,null,B[se],v,w);"value"in B&&i(C,"value",null,B.value,v),(T=B.onVnodeBeforeMount)&&Je(T,w,h)}H&&jt(h,null,w,"beforeMount");const J=n_(I,U);J&&U.beforeEnter(C),r(C,p,g),((T=B&&B.onVnodeMounted)||J||H)&&xe(()=>{T&&Je(T,w,h),J&&U.enter(C),H&&jt(h,null,w,"mounted")},I)},G=(h,p,g,w,I)=>{if(g&&m(h,g),w)for(let v=0;v<w.length;v++)m(h,w[v]);if(I){let v=I.subTree;if(p===v||Iu(v.type)&&(v.ssContent===p||v.ssFallback===p)){const k=I.vnode;G(h,k,k.scopeId,k.slotScopeIds,I.parent)}}},q=(h,p,g,w,I,v,k,P,C=0)=>{for(let T=C;T<h.length;T++){const B=h[T]=P?Ot(h[T]):Qe(h[T]);b(null,B,p,g,w,I,v,k,P)}},K=(h,p,g,w,I,v,k)=>{const P=p.el=h.el;let{patchFlag:C,dynamicChildren:T,dirs:B}=p;C|=h.patchFlag&16;const N=h.props||oe,U=p.props||oe;let H;if(g&&Vt(g,!1),(H=U.onVnodeBeforeUpdate)&&Je(H,g,p,h),B&&jt(p,h,g,"beforeUpdate"),g&&Vt(g,!0),(N.innerHTML&&U.innerHTML==null||N.textContent&&U.textContent==null)&&u(P,""),T?ce(h.dynamicChildren,T,P,g,w,Bs(p,I),v):k||X(h,p,P,null,g,w,Bs(p,I),v,!1),C>0){if(C&16)_e(P,N,U,g,I);else if(C&2&&N.class!==U.class&&i(P,"class",null,U.class,I),C&4&&i(P,"style",N.style,U.style,I),C&8){const J=p.dynamicProps;for(let se=0;se<J.length;se++){const ee=J[se],Te=N[ee],Re=U[ee];(Re!==Te||ee==="value")&&i(P,ee,Te,Re,I,g)}}C&1&&h.children!==p.children&&u(P,p.children)}else!k&&T==null&&_e(P,N,U,g,I);((H=U.onVnodeUpdated)||B)&&xe(()=>{H&&Je(H,g,p,h),B&&jt(p,h,g,"updated")},w)},ce=(h,p,g,w,I,v,k)=>{for(let P=0;P<p.length;P++){const C=h[P],T=p[P],B=C.el&&(C.type===ft||!Nn(C,T)||C.shapeFlag&198)?f(C.el):g;b(C,T,B,null,w,I,v,k,!0)}},_e=(h,p,g,w,I)=>{if(p!==g){if(p!==oe)for(const v in p)!jn(v)&&!(v in g)&&i(h,v,p[v],null,I,w);for(const v in g){if(jn(v))continue;const k=g[v],P=p[v];k!==P&&v!=="value"&&i(h,v,P,k,I,w)}"value"in g&&i(h,"value",p.value,g.value,I)}},Oe=(h,p,g,w,I,v,k,P,C)=>{const T=p.el=h?h.el:a(""),B=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:H}=p;H&&(P=P?P.concat(H):H),h==null?(r(T,g,w),r(B,g,w),q(p.children||[],g,B,I,v,k,P,C)):N>0&&N&64&&U&&h.dynamicChildren?(ce(h.dynamicChildren,U,g,I,v,k,P),(p.key!=null||I&&p===I.subTree)&&bu(h,p,!0)):X(h,p,g,B,I,v,k,P,C)},Ie=(h,p,g,w,I,v,k,P,C)=>{p.slotScopeIds=P,h==null?p.shapeFlag&512?I.ctx.activate(p,g,w,k,C):Ht(p,g,w,I,v,k,C):St(h,p,C)},Ht=(h,p,g,w,I,v,k)=>{const P=h.component=S_(h,w,I);if(iu(h)&&(P.ctx.renderer=M),T_(P,!1,k),P.asyncDep){if(I&&I.registerDep(P,ae,k),!h.el){const C=P.subTree=Le(vn);A(null,C,p,g),h.placeholder=C.el}}else ae(P,h,p,g,I,v,k)},St=(h,p,g)=>{const w=p.component=h.component;if(f_(h,p,g))if(w.asyncDep&&!w.asyncResolved){z(w,p,g);return}else w.next=p,w.update();else p.el=h.el,w.vnode=p},ae=(h,p,g,w,I,v,k)=>{const P=()=>{if(h.isMounted){let{next:N,bu:U,u:H,parent:J,vnode:se}=h;{const Ke=wu(h);if(Ke){N&&(N.el=se.el,z(h,N,k)),Ke.asyncDep.then(()=>{h.isUnmounted||P()});return}}let ee=N,Te;Vt(h,!1),N?(N.el=se.el,z(h,N,k)):N=se,U&&Ds(U),(Te=N.props&&N.props.onVnodeBeforeUpdate)&&Je(Te,J,N,se),Vt(h,!0);const Re=ga(h),ze=h.subTree;h.subTree=Re,b(ze,Re,f(ze.el),E(ze),h,I,v),N.el=Re.el,ee===null&&d_(h,Re.el),H&&xe(H,I),(Te=N.props&&N.props.onVnodeUpdated)&&xe(()=>Je(Te,J,N,se),I)}else{let N;const{el:U,props:H}=p,{bm:J,m:se,parent:ee,root:Te,type:Re}=h,ze=zn(p);Vt(h,!1),J&&Ds(J),!ze&&(N=H&&H.onVnodeBeforeMount)&&Je(N,ee,p),Vt(h,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Re);const Ke=h.subTree=ga(h);b(null,Ke,g,w,h,I,v),p.el=Ke.el}if(se&&xe(se,I),!ze&&(N=H&&H.onVnodeMounted)){const Ke=p;xe(()=>Je(N,ee,Ke),I)}(p.shapeFlag&256||ee&&zn(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&xe(h.a,I),h.isMounted=!0,p=g=w=null}};h.scope.on();const C=h.effect=new Nl(P);h.scope.off();const T=h.update=C.run.bind(C),B=h.job=C.runIfDirty.bind(C);B.i=h,B.id=h.uid,C.scheduler=()=>oo(B),Vt(h,!0),T()},z=(h,p,g)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,Jy(h,p.props,w,g),Zy(h,p.children,g),wt(),ca(h),Et()},X=(h,p,g,w,I,v,k,P,C=!1)=>{const T=h&&h.children,B=h?h.shapeFlag:0,N=p.children,{patchFlag:U,shapeFlag:H}=p;if(U>0){if(U&128){Tt(T,N,g,w,I,v,k,P,C);return}else if(U&256){at(T,N,g,w,I,v,k,P,C);return}}H&8?(B&16&&Ue(T,I,v),N!==T&&u(g,N)):B&16?H&16?Tt(T,N,g,w,I,v,k,P,C):Ue(T,I,v,!0):(B&8&&u(g,""),H&16&&q(N,g,w,I,v,k,P,C))},at=(h,p,g,w,I,v,k,P,C)=>{h=h||_n,p=p||_n;const T=h.length,B=p.length,N=Math.min(T,B);let U;for(U=0;U<N;U++){const H=p[U]=C?Ot(p[U]):Qe(p[U]);b(h[U],H,g,null,I,v,k,P,C)}T>B?Ue(h,I,v,!0,!1,N):q(p,g,w,I,v,k,P,C,N)},Tt=(h,p,g,w,I,v,k,P,C)=>{let T=0;const B=p.length;let N=h.length-1,U=B-1;for(;T<=N&&T<=U;){const H=h[T],J=p[T]=C?Ot(p[T]):Qe(p[T]);if(Nn(H,J))b(H,J,g,null,I,v,k,P,C);else break;T++}for(;T<=N&&T<=U;){const H=h[N],J=p[U]=C?Ot(p[U]):Qe(p[U]);if(Nn(H,J))b(H,J,g,null,I,v,k,P,C);else break;N--,U--}if(T>N){if(T<=U){const H=U+1,J=H<B?p[H].el:w;for(;T<=U;)b(null,p[T]=C?Ot(p[T]):Qe(p[T]),g,J,I,v,k,P,C),T++}}else if(T>U)for(;T<=N;)Se(h[T],I,v,!0),T++;else{const H=T,J=T,se=new Map;for(T=J;T<=U;T++){const ke=p[T]=C?Ot(p[T]):Qe(p[T]);ke.key!=null&&se.set(ke.key,T)}let ee,Te=0;const Re=U-J+1;let ze=!1,Ke=0;const kn=new Array(Re);for(T=0;T<Re;T++)kn[T]=0;for(T=H;T<=N;T++){const ke=h[T];if(Te>=Re){Se(ke,I,v,!0);continue}let Ge;if(ke.key!=null)Ge=se.get(ke.key);else for(ee=J;ee<=U;ee++)if(kn[ee-J]===0&&Nn(ke,p[ee])){Ge=ee;break}Ge===void 0?Se(ke,I,v,!0):(kn[Ge-J]=T+1,Ge>=Ke?Ke=Ge:ze=!0,b(ke,p[Ge],g,null,I,v,k,P,C),Te++)}const bo=ze?r_(kn):_n;for(ee=bo.length-1,T=Re-1;T>=0;T--){const ke=J+T,Ge=p[ke],wo=p[ke+1],Eo=ke+1<B?wo.el||wo.placeholder:w;kn[T]===0?b(null,Ge,g,Eo,I,v,k,P,C):ze&&(ee<0||T!==bo[ee]?qe(Ge,g,Eo,2):ee--)}}},qe=(h,p,g,w,I=null)=>{const{el:v,type:k,transition:P,children:C,shapeFlag:T}=h;if(T&6){qe(h.component.subTree,p,g,w);return}if(T&128){h.suspense.move(p,g,w);return}if(T&64){k.move(h,p,g,M);return}if(k===ft){r(v,p,g);for(let N=0;N<C.length;N++)qe(C[N],p,g,w);r(h.anchor,p,g);return}if(k===Or){O(h,p,g);return}if(w!==2&&T&1&&P)if(w===0)P.beforeEnter(v),r(v,p,g),xe(()=>P.enter(v),I);else{const{leave:N,delayLeave:U,afterLeave:H}=P,J=()=>{h.ctx.isUnmounted?s(v):r(v,p,g)},se=()=>{N(v,()=>{J(),H&&H()})};U?U(v,J,se):se()}else r(v,p,g)},Se=(h,p,g,w=!1,I=!1)=>{const{type:v,props:k,ref:P,children:C,dynamicChildren:T,shapeFlag:B,patchFlag:N,dirs:U,cacheIndex:H}=h;if(N===-2&&(I=!1),P!=null&&(wt(),qn(P,null,g,h,!0),Et()),H!=null&&(p.renderCache[H]=void 0),B&256){p.ctx.deactivate(h);return}const J=B&1&&U,se=!zn(h);let ee;if(se&&(ee=k&&k.onVnodeBeforeUnmount)&&Je(ee,p,h),B&6)wr(h.component,g,w);else{if(B&128){h.suspense.unmount(g,w);return}J&&jt(h,null,p,"beforeUnmount"),B&64?h.type.remove(h,p,g,M,w):T&&!T.hasOnce&&(v!==ft||N>0&&N&64)?Ue(T,p,g,!1,!0):(v===ft&&N&384||!I&&B&16)&&Ue(C,p,g),w&&cn(h)}(se&&(ee=k&&k.onVnodeUnmounted)||J)&&xe(()=>{ee&&Je(ee,p,h),J&&jt(h,null,p,"unmounted")},g)},cn=h=>{const{type:p,el:g,anchor:w,transition:I}=h;if(p===ft){ln(g,w);return}if(p===Or){D(h);return}const v=()=>{s(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:k,delayLeave:P}=I,C=()=>k(g,v);P?P(h.el,v,C):C()}else v()},ln=(h,p)=>{let g;for(;h!==p;)g=d(h),s(h),h=g;s(p)},wr=(h,p,g)=>{const{bum:w,scope:I,job:v,subTree:k,um:P,m:C,a:T,parent:B,slots:{__:N}}=h;ma(C),ma(T),w&&Ds(w),B&&j(N)&&N.forEach(U=>{B.renderCache[U]=void 0}),I.stop(),v&&(v.flags|=8,Se(k,h,p,g)),P&&xe(P,p),xe(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ue=(h,p,g,w=!1,I=!1,v=0)=>{for(let k=v;k<h.length;k++)Se(h[k],p,g,w,I)},E=h=>{if(h.shapeFlag&6)return E(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),g=p&&p[Ey];return g?d(g):p};let L=!1;const x=(h,p,g)=>{h==null?p._vnode&&Se(p._vnode,null,null,!0):b(p._vnode||null,h,p,null,null,null,g),p._vnode=h,L||(L=!0,ca(),eu(),L=!1)},M={p:b,um:Se,m:qe,r:cn,mt:Ht,mc:q,pc:X,pbc:ce,n:E,o:e};return{render:x,hydrate:void 0,createApp:zy(x)}}function Bs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function n_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bu(e,t,n=!1){const r=e.children,s=t.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ot(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&bu(o,a)),a.type===ps&&(a.el=o.el),a.type===vn&&!a.el&&(a.el=o.el)}}function r_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function wu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wu(t)}function ma(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const s_=Symbol.for("v-scx"),i_=()=>rt(s_);function XE(e,t){return uo(e,null,t)}function Gn(e,t,n){return uo(e,t,n)}function uo(e,t,n=oe){const{immediate:r,deep:s,flush:i,once:o}=n,a=ye({},n),c=t&&r||!t&&i!=="post";let l;if(ir){if(i==="sync"){const m=i_();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=nt,m.resume=nt,m.pause=nt,m}}const u=me;a.call=(m,y,b)=>it(m,u,y,b);let f=!1;i==="post"?a.scheduler=m=>{xe(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,y)=>{y?m():oo(m)}),a.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=gy(e,t,a);return ir&&(l?l.push(d):c&&d()),d}function o_(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?Eu(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=mr(this),a=uo(s,i.bind(r),n);return o(),a}function Eu(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const a_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Fe(t)}Modifiers`]||e[`${an(t)}Modifiers`];function c_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let s=n;const i=t.startsWith("update:"),o=i&&a_(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>de(u)?u.trim():u)),o.number&&(s=n.map(Ng)));let a,c=r[a=Ns(t)]||r[a=Ns(Fe(t))];!c&&i&&(c=r[a=Ns(an(t))]),c&&it(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,it(l,e,6,s)}}function vu(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!W(e)){const c=l=>{const u=vu(l,t,!0);u&&(a=!0,ye(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ue(e)&&r.set(e,null),null):(j(i)?i.forEach(c=>o[c]=null):ye(o,i),ue(e)&&r.set(e,o),o)}function hs(e,t){return!e||!is(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,an(t))||Z(e,t))}function ga(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:m,ctx:y,inheritAttrs:b}=e,S=Gr(e);let A,R;try{if(n.shapeFlag&4){const D=s||r,F=D;A=Qe(l.call(F,D,u,f,m,d,y)),R=a}else{const D=t;A=Qe(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),R=t.props?a:l_(a)}}catch(D){Jn.length=0,fs(D,e,1),A=Le(vn)}let O=A;if(R&&b!==!1){const D=Object.keys(R),{shapeFlag:F}=O;D.length&&F&7&&(i&&D.some(qi)&&(R=u_(R,i)),O=In(O,R,!1,!0))}return n.dirs&&(O=In(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&ao(O,n.transition),A=O,Gr(S),A}const l_=e=>{let t;for(const n in e)(n==="class"||n==="style"||is(n))&&((t||(t={}))[n]=e[n]);return t},u_=(e,t)=>{const n={};for(const r in e)(!qi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function f_(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ya(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!hs(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ya(r,o,l):!0:!!o;return!1}function ya(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!hs(n,i))return!0}return!1}function d_({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Iu=e=>e.__isSuspense;function h_(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):by(e)}const ft=Symbol.for("v-fgt"),ps=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),Jn=[];let De=null;function p_(e=!1){Jn.push(De=e?null:[])}function m_(){Jn.pop(),De=Jn[Jn.length-1]||null}let sr=1;function _a(e,t=!1){sr+=e,e<0&&De&&t&&(De.hasOnce=!0)}function g_(e){return e.dynamicChildren=sr>0?De||_n:null,m_(),sr>0&&De&&De.push(e),e}function y_(e,t,n,r,s,i){return g_(Tu(e,t,n,r,s,i,!0))}function Yr(e){return e?e.__v_isVNode===!0:!1}function Nn(e,t){return e.type===t.type&&e.key===t.key}const Su=({key:e})=>e??null,kr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||le(e)||W(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function Tu(e,t=null,n=null,r=0,s=null,i=e===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Su(t),ref:t&&kr(t),scopeId:nu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return a?(fo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),sr>0&&!o&&De&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&De.push(c),c}const Le=__;function __(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Uy)&&(e=vn),Yr(e)){const a=In(e,t,!0);return n&&fo(a,n),sr>0&&!i&&De&&(a.shapeFlag&6?De[De.indexOf(e)]=a:De.push(a)),a.patchFlag=-2,a}if(O_(e)&&(e=e.__vccOpts),t){t=b_(t);let{class:a,style:c}=t;a&&!de(a)&&(t.class=Ji(a)),ue(c)&&(ro(c)&&!j(c)&&(c=ye({},c)),t.style=Gi(c))}const o=de(e)?1:Iu(e)?128:vy(e)?64:ue(e)?4:W(e)?2:0;return Tu(e,t,n,r,s,o,i,!0)}function b_(e){return e?ro(e)||hu(e)?ye({},e):e:null}function In(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?E_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Su(l),ref:t&&t.ref?n&&i?j(i)?i.concat(kr(t)):[i,kr(t)]:kr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ft?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&In(e.ssContent),ssFallback:e.ssFallback&&In(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ao(u,c.clone(u)),u}function w_(e=" ",t=0){return Le(ps,null,e,t)}function QE(e,t){const n=Le(Or,null,e);return n.staticCount=t,n}function Qe(e){return e==null||typeof e=="boolean"?Le(vn):j(e)?Le(ft,null,e.slice()):Yr(e)?Ot(e):Le(ps,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:In(e)}function fo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),fo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!hu(t)?t._ctx=$e:s===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[w_(t)]):n=8);e.children=t,e.shapeFlag|=n}function E_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ji([t.class,r.class]));else if(s==="style")t.style=Gi([t.style,r.style]);else if(is(s)){const i=t[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Je(e,t,n,r=null){it(e,t,7,[n,r])}const v_=uu();let I_=0;function S_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||v_,i={uid:I_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ol(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(r,s),emitsOptions:vu(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=c_.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Ru=()=>me||$e;let Xr,pi;{const e=ls(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Xr=t("__VUE_INSTANCE_SETTERS__",n=>me=n),pi=t("__VUE_SSR_SETTERS__",n=>ir=n)}const mr=e=>{const t=me;return Xr(e),e.scope.on(),()=>{e.scope.off(),Xr(t)}},ba=()=>{me&&me.scope.off(),Xr(null)};function Au(e){return e.vnode.shapeFlag&4}let ir=!1;function T_(e,t=!1,n=!1){t&&pi(t);const{props:r,children:s}=e.vnode,i=Au(e);Gy(e,r,i,t),Qy(e,s,n||t);const o=i?R_(e,t):void 0;return t&&pi(!1),o}function R_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,By);const{setup:r}=n;if(r){wt();const s=e.setupContext=r.length>1?C_(e):null,i=mr(e),o=pr(r,e,0,[e.props,s]),a=Cl(o);if(Et(),i(),(a||e.sp)&&!zn(e)&&su(e),a){if(o.then(ba,ba),t)return o.then(c=>{wa(e,c)}).catch(c=>{fs(c,e,0)});e.asyncDep=o}else wa(e,o)}else Cu(e)}function wa(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Yl(t)),Cu(e)}function Cu(e,t,n){const r=e.type;e.render||(e.render=r.render||nt);{const s=mr(e);wt();try{$y(e)}finally{Et(),s()}}}const A_={get(e,t){return pe(e,"get",""),e[t]}};function C_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,A_),slots:e.slots,emit:e.emit,expose:t}}function ho(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Yl(so(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kn)return Kn[n](e)},has(t,n){return n in t||n in Kn}})):e.proxy}function P_(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function O_(e){return W(e)&&"__vccOpts"in e}const Ne=(e,t)=>py(e,t,ir);function Pu(e,t,n){const r=arguments.length;return r===2?ue(t)&&!j(t)?Yr(t)?Le(e,null,[t]):Le(e,t):Le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yr(n)&&(n=[n]),Le(e,t,n))}const k_="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mi;const Ea=typeof window<"u"&&window.trustedTypes;if(Ea)try{mi=Ea.createPolicy("vue",{createHTML:e=>e})}catch{}const Ou=mi?e=>mi.createHTML(e):e=>e,x_="http://www.w3.org/2000/svg",N_="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,va=ut&&ut.createElement("template"),D_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?ut.createElementNS(x_,e):t==="mathml"?ut.createElementNS(N_,e):n?ut.createElement(e,{is:n}):ut.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{va.innerHTML=Ou(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=va.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},L_=Symbol("_vtc");function M_(e,t,n){const r=e[L_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ia=Symbol("_vod"),U_=Symbol("_vsh"),F_=Symbol(""),B_=/(^|;)\s*display\s*:/;function $_(e,t,n){const r=e.style,s=de(n);let i=!1;if(n&&!s){if(t)if(de(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xr(r,a,"")}else for(const o in t)n[o]==null&&xr(r,o,"");for(const o in n)o==="display"&&(i=!0),xr(r,o,n[o])}else if(s){if(t!==n){const o=r[F_];o&&(n+=";"+o),r.cssText=n,i=B_.test(n)}}else t&&e.removeAttribute("style");Ia in e&&(e[Ia]=i?r.display:"",e[U_]&&(r.display="none"))}const Sa=/\s*!important$/;function xr(e,t,n){if(j(n))n.forEach(r=>xr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=H_(e,t);Sa.test(n)?e.setProperty(an(r),n.replace(Sa,""),"important"):e[r]=n}}const Ta=["Webkit","Moz","ms"],$s={};function H_(e,t){const n=$s[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return $s[t]=r;r=cs(r);for(let s=0;s<Ta.length;s++){const i=Ta[s]+r;if(i in e)return $s[t]=i}return t}const Ra="http://www.w3.org/1999/xlink";function Aa(e,t,n,r,s,i=Bg(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ra,t.slice(6,t.length)):e.setAttributeNS(Ra,t,n):n==null||i&&!Pl(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Cn(n)?String(n):n)}function Ca(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ou(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Pl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function j_(e,t,n,r){e.addEventListener(t,n,r)}function V_(e,t,n,r){e.removeEventListener(t,n,r)}const Pa=Symbol("_vei");function W_(e,t,n,r,s=null){const i=e[Pa]||(e[Pa]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=q_(t);if(r){const l=i[t]=G_(r,s);j_(e,a,l,c)}else o&&(V_(e,a,o,c),i[t]=void 0)}}const Oa=/(?:Once|Passive|Capture)$/;function q_(e){let t;if(Oa.test(e)){t={};let r;for(;r=e.match(Oa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):an(e.slice(2)),t]}let Hs=0;const z_=Promise.resolve(),K_=()=>Hs||(z_.then(()=>Hs=0),Hs=Date.now());function G_(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;it(J_(r,n.value),t,5,[r])};return n.value=e,n.attached=K_(),n}function J_(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ka=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Y_=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?M_(e,r,o):t==="style"?$_(e,n,r):is(t)?qi(t)||W_(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):X_(e,t,r,o))?(Ca(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Aa(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(r))?Ca(e,Fe(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Aa(e,t,r,o))};function X_(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ka(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ka(t)&&de(n)?!1:t in e}const Q_=ye({patchProp:Y_},D_);let xa;function Z_(){return xa||(xa=e_(Q_))}const eb=(...e)=>{const t=Z_().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=nb(r);if(!s)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,tb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function tb(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function nb(e){return de(e)?document.querySelector(e):e}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ku;const ms=e=>ku=e,xu=Symbol();function gi(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Yn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Yn||(Yn={}));function rb(){const e=kl(!0),t=e.run(()=>us({}));let n=[],r=[];const s=so({install(i){ms(s),s._a=i,i.provide(xu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Nu=()=>{};function Na(e,t,n,r=Nu){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&xl()&&$g(s),s}function fn(e,...t){e.slice().forEach(n=>{n(...t)})}const sb=e=>e(),Da=Symbol(),js=Symbol();function yi(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];gi(s)&&gi(r)&&e.hasOwnProperty(n)&&!le(r)&&!$t(r)?e[n]=yi(s,r):e[n]=r}return e}const ib=Symbol();function ob(e){return!gi(e)||!Object.prototype.hasOwnProperty.call(e,ib)}const{assign:Ct}=Object;function ab(e){return!!(le(e)&&e.effect)}function cb(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=ly(n.state.value[e]);return Ct(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=so(Ne(()=>{ms(n);const m=n._s.get(e);return o[d].call(m,m)})),f),{}))}return c=Du(e,l,t,n,r,!0),c}function Du(e,t,n={},r,s,i){let o;const a=Ct({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],m;const y=r.state.value[e];!i&&!y&&(r.state.value[e]={}),us({});let b;function S(q){let K;l=u=!1,typeof q=="function"?(q(r.state.value[e]),K={type:Yn.patchFunction,storeId:e,events:m}):(yi(r.state.value[e],q),K={type:Yn.patchObject,payload:q,storeId:e,events:m});const ce=b=Symbol();io().then(()=>{b===ce&&(l=!0)}),u=!0,fn(f,K,r.state.value[e])}const A=i?function(){const{state:K}=n,ce=K?K():{};this.$patch(_e=>{Ct(_e,ce)})}:Nu;function R(){o.stop(),f=[],d=[],r._s.delete(e)}const O=(q,K="")=>{if(Da in q)return q[js]=K,q;const ce=function(){ms(r);const _e=Array.from(arguments),Oe=[],Ie=[];function Ht(z){Oe.push(z)}function St(z){Ie.push(z)}fn(d,{args:_e,name:ce[js],store:F,after:Ht,onError:St});let ae;try{ae=q.apply(this&&this.$id===e?this:F,_e)}catch(z){throw fn(Ie,z),z}return ae instanceof Promise?ae.then(z=>(fn(Oe,z),z)).catch(z=>(fn(Ie,z),Promise.reject(z))):(fn(Oe,ae),ae)};return ce[Da]=!0,ce[js]=K,ce},D={_p:r,$id:e,$onAction:Na.bind(null,d),$patch:S,$reset:A,$subscribe(q,K={}){const ce=Na(f,q,K.detached,()=>_e()),_e=o.run(()=>Gn(()=>r.state.value[e],Oe=>{(K.flush==="sync"?u:l)&&q({storeId:e,type:Yn.direct,events:m},Oe)},Ct({},c,K)));return ce},$dispose:R},F=nn(D);r._s.set(e,F);const G=(r._a&&r._a.runWithContext||sb)(()=>r._e.run(()=>(o=kl()).run(()=>t({action:O}))));for(const q in G){const K=G[q];if(le(K)&&!ab(K)||$t(K))i||(y&&ob(K)&&(le(K)?K.value=y[q]:yi(K,y[q])),r.state.value[e][q]=K);else if(typeof K=="function"){const ce=O(K,q);G[q]=ce,a.actions[q]=K}}return Ct(F,G),Ct(Y(F),G),Object.defineProperty(F,"$state",{get:()=>r.state.value[e],set:q=>{S(K=>{Ct(K,q)})}}),r._p.forEach(q=>{Ct(F,o.run(()=>q({store:F,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(F.$state,y),l=!0,u=!0,F}/*! #__NO_SIDE_EFFECTS__ */function lb(e,t,n){let r;const s=typeof t=="function";r=s?n:t;function i(o,a){const c=Ky();return o=o||(c?rt(xu,null):null),o&&ms(o),o=ku,o._s.has(e)||(s?Du(e,t,r,o):cb(e,r,o)),o._s.get(e)}return i.$id=e,i}function ZE(e){const t=Y(e),n={};for(const r in t){const s=t[r];s.effect?n[r]=Ne({get:()=>e[r],set(i){e[r]=i}}):(le(s)||$t(s))&&(n[r]=dy(e,r))}return n}const ub="modulepreload",fb=function(e){return"/"+e},La={},Dn=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=c(n.map(l=>{if(l=fb(l),l in La)return;La[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":ub,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((m,y)=>{d.addEventListener("load",m),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof document<"u";function Lu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function db(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Lu(e.default)}const Q=Object.assign;function Vs(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ve(s)?s.map(e):e(s)}return n}const Xn=()=>{},Ve=Array.isArray,Mu=/#/g,hb=/&/g,pb=/\//g,mb=/=/g,gb=/\?/g,Uu=/\+/g,yb=/%5B/g,_b=/%5D/g,Fu=/%5E/g,bb=/%60/g,Bu=/%7B/g,wb=/%7C/g,$u=/%7D/g,Eb=/%20/g;function po(e){return encodeURI(""+e).replace(wb,"|").replace(yb,"[").replace(_b,"]")}function vb(e){return po(e).replace(Bu,"{").replace($u,"}").replace(Fu,"^")}function _i(e){return po(e).replace(Uu,"%2B").replace(Eb,"+").replace(Mu,"%23").replace(hb,"%26").replace(bb,"`").replace(Bu,"{").replace($u,"}").replace(Fu,"^")}function Ib(e){return _i(e).replace(mb,"%3D")}function Sb(e){return po(e).replace(Mu,"%23").replace(gb,"%3F")}function Tb(e){return e==null?"":Sb(e).replace(pb,"%2F")}function or(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Rb=/\/$/,Ab=e=>e.replace(Rb,"");function Ws(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=kb(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:or(o)}}function Cb(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ma(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Pb(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Sn(t.matched[r],n.matched[s])&&Hu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Sn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Hu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ob(e[n],t[n]))return!1;return!0}function Ob(e,t){return Ve(e)?Ua(e,t):Ve(t)?Ua(t,e):e===t}function Ua(e,t){return Ve(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function kb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ar;(function(e){e.pop="pop",e.push="push"})(ar||(ar={}));var Qn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qn||(Qn={}));function xb(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ab(e)}const Nb=/^[^#]+#/;function Db(e,t){return e.replace(Nb,"#")+t}function Lb(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const gs=()=>({left:window.scrollX,top:window.scrollY});function Mb(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Lb(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fa(e,t){return(history.state?history.state.position-t:-1)+e}const bi=new Map;function Ub(e,t){bi.set(e,t)}function Fb(e){const t=bi.get(e);return bi.delete(e),t}let Bb=()=>location.protocol+"//"+location.host;function ju(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ma(c,"")}return Ma(n,e)+r+s}function $b(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=ju(e,location),y=n.value,b=t.value;let S=0;if(d){if(n.value=m,t.value=d,o&&o===y){o=null;return}S=b?d.position-b.position:0}else r(m);s.forEach(A=>{A(n.value,y,{delta:S,type:ar.pop,direction:S?S>0?Qn.forward:Qn.back:Qn.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Q({},d.state,{scroll:gs()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ba(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?gs():null}}function Hb(e){const{history:t,location:n}=window,r={value:ju(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Bb()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=Q({},t.state,Ba(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Q({},s.value,t.state,{forward:c,scroll:gs()});i(u.current,u,!0);const f=Q({},Ba(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function jb(e){e=xb(e);const t=Hb(e),n=$b(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:e,go:r,createHref:Db.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Vb(e){return typeof e=="string"||e&&typeof e=="object"}function Vu(e){return typeof e=="string"||typeof e=="symbol"}const Wu=Symbol("");var $a;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($a||($a={}));function Tn(e,t){return Q(new Error,{type:e,[Wu]:!0},t)}function lt(e,t){return e instanceof Error&&Wu in e&&(t==null||!!(e.type&t))}const Ha="[^/]+?",Wb={sensitive:!1,strict:!1,start:!0,end:!0},qb=/[.+*?^${}()[\]/\\]/g;function zb(e,t){const n=Q({},Wb,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(qb,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:b,optional:S,regexp:A}=d;i.push({name:y,repeatable:b,optional:S});const R=A||Ha;if(R!==Ha){m+=10;try{new RegExp(`(${R})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+D.message)}}let O=b?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(O=S&&l.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),s+=O,m+=20,S&&(m+=-8),b&&(m+=-20),R===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:b,optional:S}=m,A=y in l?l[y]:"";if(Ve(A)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=Ve(A)?A.join("/"):A;if(!R)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Kb(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function qu(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Kb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ja(r))return 1;if(ja(s))return-1}return s.length-r.length}function ja(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Gb={type:0,value:""},Jb=/[a-zA-Z0-9_]/;function Yb(e){if(!e)return[[]];if(e==="/")return[[Gb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Jb.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Xb(e,t,n){const r=zb(Yb(e.path),n),s=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Qb(e,t){const n=[],r=new Map;t=za({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,m){const y=!m,b=Wa(f);b.aliasOf=m&&m.record;const S=za(t,f),A=[b];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of D)A.push(Wa(Q({},b,{components:m?m.record.components:b.components,path:F,aliasOf:m?m.record:b})))}let R,O;for(const D of A){const{path:F}=D;if(d&&F[0]!=="/"){const te=d.record.path,G=te[te.length-1]==="/"?"":"/";D.path=d.record.path+(F&&G+F)}if(R=Xb(D,d,S),m?m.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),y&&f.name&&!qa(R)&&o(f.name)),zu(R)&&c(R),b.children){const te=b.children;for(let G=0;G<te.length;G++)i(te[G],R,m&&m.children[G])}m=m||R}return O?()=>{o(O)}:Xn}function o(f){if(Vu(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=tw(f,n);n.splice(d,0,f),f.record.name&&!qa(f)&&r.set(f.record.name,f)}function l(f,d){let m,y={},b,S;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Tn(1,{location:f});S=m.record.name,y=Q(Va(d.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Va(f.params,m.keys.map(O=>O.name))),b=m.stringify(y)}else if(f.path!=null)b=f.path,m=n.find(O=>O.re.test(b)),m&&(y=m.parse(b),S=m.record.name);else{if(m=d.name?r.get(d.name):n.find(O=>O.re.test(d.path)),!m)throw Tn(1,{location:f,currentLocation:d});S=m.record.name,y=Q({},d.params,f.params),b=m.stringify(y)}const A=[];let R=m;for(;R;)A.unshift(R.record),R=R.parent;return{name:S,path:b,params:y,matched:A,meta:ew(A)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Va(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Wa(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Zb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Zb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function qa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ew(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function za(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function tw(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;qu(e,t[i])<0?r=i:n=i+1}const s=nw(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function nw(e){let t=e;for(;t=t.parent;)if(zu(t)&&qu(e,t)===0)return t}function zu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function rw(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Uu," "),o=i.indexOf("="),a=or(o<0?i:i.slice(0,o)),c=o<0?null:or(i.slice(o+1));if(a in t){let l=t[a];Ve(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ka(e){let t="";for(let n in e){const r=e[n];if(n=Ib(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ve(r)?r.map(i=>i&&_i(i)):[r&&_i(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function sw(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const iw=Symbol(""),Ga=Symbol(""),mo=Symbol(""),Ku=Symbol(""),wi=Symbol("");function Ln(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function kt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Tn(4,{from:n,to:t})):d instanceof Error?c(d):Vb(d)?c(Tn(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function qs(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Lu(c)){const u=(c.__vccOpts||c)[t];u&&i.push(kt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=db(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[t];return m&&kt(m,n,r,o,a,s)()}))}}return i}function Ja(e){const t=rt(mo),n=rt(Ku),r=Ne(()=>{const c=bn(e.to);return t.resolve(c)}),s=Ne(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Sn.bind(null,u));if(d>-1)return d;const m=Ya(c[l-2]);return l>1&&Ya(u)===m&&f[f.length-1].path!==m?f.findIndex(Sn.bind(null,c[l-2])):d}),i=Ne(()=>s.value>-1&&uw(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&Hu(n.params,r.value.params));function a(c={}){if(lw(c)){const l=t[bn(e.replace)?"replace":"push"](bn(e.to)).catch(Xn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function ow(e){return e.length===1?e[0]:e}const aw=ru({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ja,setup(e,{slots:t}){const n=nn(Ja(e)),{options:r}=rt(mo),s=Ne(()=>({[Xa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&ow(t.default(n));return e.custom?i:Pu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),cw=aw;function lw(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function uw(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ya(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xa=(e,t,n)=>e??t??n,fw=ru({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=rt(wi),s=Ne(()=>e.route||r.value),i=rt(Ga,0),o=Ne(()=>{let l=bn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ne(()=>s.value.matched[o.value]);Pr(Ga,Ne(()=>o.value+1)),Pr(iw,a),Pr(wi,s);const c=us();return Gn(()=>[c.value,a.value,e.name],([l,u,f],[d,m,y])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Sn(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return Qa(n.default,{Component:d,route:l});const m=f.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,S=Pu(d,Q({},y,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Qa(n.default,{Component:S,route:l})||S}}});function Qa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const dw=fw;function hw(e){const t=Qb(e.routes,e),n=e.parseQuery||rw,r=e.stringifyQuery||Ka,s=e.history,i=Ln(),o=Ln(),a=Ln(),c=oy(At);let l=At;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vs.bind(null,E=>""+E),f=Vs.bind(null,Tb),d=Vs.bind(null,or);function m(E,L){let x,M;return Vu(E)?(x=t.getRecordMatcher(E),M=L):M=E,t.addRoute(M,x)}function y(E){const L=t.getRecordMatcher(E);L&&t.removeRoute(L)}function b(){return t.getRoutes().map(E=>E.record)}function S(E){return!!t.getRecordMatcher(E)}function A(E,L){if(L=Q({},L||c.value),typeof E=="string"){const g=Ws(n,E,L.path),w=t.resolve({path:g.path},L),I=s.createHref(g.fullPath);return Q(g,w,{params:d(w.params),hash:or(g.hash),redirectedFrom:void 0,href:I})}let x;if(E.path!=null)x=Q({},E,{path:Ws(n,E.path,L.path).path});else{const g=Q({},E.params);for(const w in g)g[w]==null&&delete g[w];x=Q({},E,{params:f(g)}),L.params=f(L.params)}const M=t.resolve(x,L),ne=E.hash||"";M.params=u(d(M.params));const h=Cb(r,Q({},E,{hash:vb(ne),path:M.path})),p=s.createHref(h);return Q({fullPath:h,hash:ne,query:r===Ka?sw(E.query):E.query||{}},M,{redirectedFrom:void 0,href:p})}function R(E){return typeof E=="string"?Ws(n,E,c.value.path):Q({},E)}function O(E,L){if(l!==E)return Tn(8,{from:L,to:E})}function D(E){return G(E)}function F(E){return D(Q(R(E),{replace:!0}))}function te(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let M=typeof x=="function"?x(E):x;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=R(M):{path:M},M.params={}),Q({query:E.query,hash:E.hash,params:M.path!=null?{}:E.params},M)}}function G(E,L){const x=l=A(E),M=c.value,ne=E.state,h=E.force,p=E.replace===!0,g=te(x);if(g)return G(Q(R(g),{state:typeof g=="object"?Q({},ne,g.state):ne,force:h,replace:p}),L||x);const w=x;w.redirectedFrom=L;let I;return!h&&Pb(r,M,x)&&(I=Tn(16,{to:w,from:M}),qe(M,M,!0,!1)),(I?Promise.resolve(I):ce(w,M)).catch(v=>lt(v)?lt(v,2)?v:Tt(v):X(v,w,M)).then(v=>{if(v){if(lt(v,2))return G(Q({replace:p},R(v.to),{state:typeof v.to=="object"?Q({},ne,v.to.state):ne,force:h}),L||w)}else v=Oe(w,M,!0,p,ne);return _e(w,M,v),v})}function q(E,L){const x=O(E,L);return x?Promise.reject(x):Promise.resolve()}function K(E){const L=ln.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function ce(E,L){let x;const[M,ne,h]=pw(E,L);x=qs(M.reverse(),"beforeRouteLeave",E,L);for(const g of M)g.leaveGuards.forEach(w=>{x.push(kt(w,E,L))});const p=q.bind(null,E,L);return x.push(p),Ue(x).then(()=>{x=[];for(const g of i.list())x.push(kt(g,E,L));return x.push(p),Ue(x)}).then(()=>{x=qs(ne,"beforeRouteUpdate",E,L);for(const g of ne)g.updateGuards.forEach(w=>{x.push(kt(w,E,L))});return x.push(p),Ue(x)}).then(()=>{x=[];for(const g of h)if(g.beforeEnter)if(Ve(g.beforeEnter))for(const w of g.beforeEnter)x.push(kt(w,E,L));else x.push(kt(g.beforeEnter,E,L));return x.push(p),Ue(x)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),x=qs(h,"beforeRouteEnter",E,L,K),x.push(p),Ue(x))).then(()=>{x=[];for(const g of o.list())x.push(kt(g,E,L));return x.push(p),Ue(x)}).catch(g=>lt(g,8)?g:Promise.reject(g))}function _e(E,L,x){a.list().forEach(M=>K(()=>M(E,L,x)))}function Oe(E,L,x,M,ne){const h=O(E,L);if(h)return h;const p=L===At,g=hn?history.state:{};x&&(M||p?s.replace(E.fullPath,Q({scroll:p&&g&&g.scroll},ne)):s.push(E.fullPath,ne)),c.value=E,qe(E,L,x,p),Tt()}let Ie;function Ht(){Ie||(Ie=s.listen((E,L,x)=>{if(!wr.listening)return;const M=A(E),ne=te(M);if(ne){G(Q(ne,{replace:!0,force:!0}),M).catch(Xn);return}l=M;const h=c.value;hn&&Ub(Fa(h.fullPath,x.delta),gs()),ce(M,h).catch(p=>lt(p,12)?p:lt(p,2)?(G(Q(R(p.to),{force:!0}),M).then(g=>{lt(g,20)&&!x.delta&&x.type===ar.pop&&s.go(-1,!1)}).catch(Xn),Promise.reject()):(x.delta&&s.go(-x.delta,!1),X(p,M,h))).then(p=>{p=p||Oe(M,h,!1),p&&(x.delta&&!lt(p,8)?s.go(-x.delta,!1):x.type===ar.pop&&lt(p,20)&&s.go(-1,!1)),_e(M,h,p)}).catch(Xn)}))}let St=Ln(),ae=Ln(),z;function X(E,L,x){Tt(E);const M=ae.list();return M.length?M.forEach(ne=>ne(E,L,x)):console.error(E),Promise.reject(E)}function at(){return z&&c.value!==At?Promise.resolve():new Promise((E,L)=>{St.add([E,L])})}function Tt(E){return z||(z=!E,Ht(),St.list().forEach(([L,x])=>E?x(E):L()),St.reset()),E}function qe(E,L,x,M){const{scrollBehavior:ne}=e;if(!hn||!ne)return Promise.resolve();const h=!x&&Fb(Fa(E.fullPath,0))||(M||!x)&&history.state&&history.state.scroll||null;return io().then(()=>ne(E,L,h)).then(p=>p&&Mb(p)).catch(p=>X(p,E,L))}const Se=E=>s.go(E);let cn;const ln=new Set,wr={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:b,resolve:A,options:e,push:D,replace:F,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:at,install(E){const L=this;E.component("RouterLink",cw),E.component("RouterView",dw),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>bn(c)}),hn&&!cn&&c.value===At&&(cn=!0,D(s.location).catch(ne=>{}));const x={};for(const ne in At)Object.defineProperty(x,ne,{get:()=>c.value[ne],enumerable:!0});E.provide(mo,L),E.provide(Ku,Kl(x)),E.provide(wi,c);const M=E.unmount;ln.add(E),E.unmount=function(){ln.delete(E),ln.size<1&&(l=At,Ie&&Ie(),Ie=null,c.value=At,cn=!1,z=!1),M()}}};function Ue(E){return E.reduce((L,x)=>L.then(()=>K(x)),Promise.resolve())}return wr}function pw(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Sn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Sn(l,c))||s.push(c))}return[n,r,s]}const mw=[{path:"/",redirect:"/home",component:()=>Dn(()=>import("./Screen-1nlKZ-FA.js"),[]),children:[{path:"home",component:()=>Dn(()=>import("./Index-DCmtX_2Y.js"),__vite__mapDeps([0,1]))},{path:"market",component:()=>Dn(()=>import("./Index-uuMTrXvO.js"),__vite__mapDeps([2,1]))},{path:"info",component:()=>Dn(()=>import("./Index-3FSj3AVI.js"),__vite__mapDeps([3,4]))},{path:"signup",component:()=>Dn(()=>import("./SignUp-D62iLsRh.js"),__vite__mapDeps([5,1]))}]}],gw=hw({history:jb(),routes:mw}),yw={__name:"App",setup(e){return(t,n)=>{const r=My("RouterView");return p_(),y_("main",null,[Le(r)])}}};function Gu(e,t){return function(){return e.apply(t,arguments)}}const{toString:_w}=Object.prototype,{getPrototypeOf:go}=Object,{iterator:ys,toStringTag:Ju}=Symbol,_s=(e=>t=>{const n=_w.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),We=e=>(e=e.toLowerCase(),t=>_s(t)===e),bs=e=>t=>typeof t===e,{isArray:Pn}=Array,cr=bs("undefined");function gr(e){return e!==null&&!cr(e)&&e.constructor!==null&&!cr(e.constructor)&&Ce(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Yu=We("ArrayBuffer");function bw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Yu(e.buffer),t}const ww=bs("string"),Ce=bs("function"),Xu=bs("number"),yr=e=>e!==null&&typeof e=="object",Ew=e=>e===!0||e===!1,Nr=e=>{if(_s(e)!=="object")return!1;const t=go(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ju in e)&&!(ys in e)},vw=e=>{if(!yr(e)||gr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Iw=We("Date"),Sw=We("File"),Tw=We("Blob"),Rw=We("FileList"),Aw=e=>yr(e)&&Ce(e.pipe),Cw=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ce(e.append)&&((t=_s(e))==="formdata"||t==="object"&&Ce(e.toString)&&e.toString()==="[object FormData]"))},Pw=We("URLSearchParams"),[Ow,kw,xw,Nw]=["ReadableStream","Request","Response","Headers"].map(We),Dw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _r(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Pn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(gr(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function Qu(e,t){if(gr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Kt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Zu=e=>!cr(e)&&e!==Kt;function Ei(){const{caseless:e}=Zu(this)&&this||{},t={},n=(r,s)=>{const i=e&&Qu(t,s)||s;Nr(t[i])&&Nr(r)?t[i]=Ei(t[i],r):Nr(r)?t[i]=Ei({},r):Pn(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&_r(arguments[r],n);return t}const Lw=(e,t,n,{allOwnKeys:r}={})=>(_r(t,(s,i)=>{n&&Ce(s)?e[i]=Gu(s,n):e[i]=s},{allOwnKeys:r}),e),Mw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Uw=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Fw=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&go(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Bw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},$w=e=>{if(!e)return null;if(Pn(e))return e;let t=e.length;if(!Xu(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Hw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&go(Uint8Array)),jw=(e,t)=>{const r=(e&&e[ys]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Vw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ww=We("HTMLFormElement"),qw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Za=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),zw=We("RegExp"),ef=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_r(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},Kw=e=>{ef(e,(t,n)=>{if(Ce(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ce(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Gw=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Pn(e)?r(e):r(String(e).split(t)),n},Jw=()=>{},Yw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Xw(e){return!!(e&&Ce(e.append)&&e[Ju]==="FormData"&&e[ys])}const Qw=e=>{const t=new Array(10),n=(r,s)=>{if(yr(r)){if(t.indexOf(r)>=0)return;if(gr(r))return r;if(!("toJSON"in r)){t[s]=r;const i=Pn(r)?[]:{};return _r(r,(o,a)=>{const c=n(o,s+1);!cr(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},Zw=We("AsyncFunction"),eE=e=>e&&(yr(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),tf=((e,t)=>e?setImmediate:t?((n,r)=>(Kt.addEventListener("message",({source:s,data:i})=>{s===Kt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Kt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ce(Kt.postMessage)),tE=typeof queueMicrotask<"u"?queueMicrotask.bind(Kt):typeof process<"u"&&process.nextTick||tf,nE=e=>e!=null&&Ce(e[ys]),_={isArray:Pn,isArrayBuffer:Yu,isBuffer:gr,isFormData:Cw,isArrayBufferView:bw,isString:ww,isNumber:Xu,isBoolean:Ew,isObject:yr,isPlainObject:Nr,isEmptyObject:vw,isReadableStream:Ow,isRequest:kw,isResponse:xw,isHeaders:Nw,isUndefined:cr,isDate:Iw,isFile:Sw,isBlob:Tw,isRegExp:zw,isFunction:Ce,isStream:Aw,isURLSearchParams:Pw,isTypedArray:Hw,isFileList:Rw,forEach:_r,merge:Ei,extend:Lw,trim:Dw,stripBOM:Mw,inherits:Uw,toFlatObject:Fw,kindOf:_s,kindOfTest:We,endsWith:Bw,toArray:$w,forEachEntry:jw,matchAll:Vw,isHTMLForm:Ww,hasOwnProperty:Za,hasOwnProp:Za,reduceDescriptors:ef,freezeMethods:Kw,toObjectSet:Gw,toCamelCase:qw,noop:Jw,toFiniteNumber:Yw,findKey:Qu,global:Kt,isContextDefined:Zu,isSpecCompliantForm:Xw,toJSONObject:Qw,isAsyncFn:Zw,isThenable:eE,setImmediate:tf,asap:tE,isIterable:nE};function V(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const nf=V.prototype,rf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rf[e]={value:e}});Object.defineProperties(V,rf);Object.defineProperty(nf,"isAxiosError",{value:!0});V.from=(e,t,n,r,s,i)=>{const o=Object.create(nf);return _.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),V.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const rE=null;function vi(e){return _.isPlainObject(e)||_.isArray(e)}function sf(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function ec(e,t,n){return e?e.concat(t).map(function(s,i){return s=sf(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function sE(e){return _.isArray(e)&&!e.some(vi)}const iE=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function ws(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,S){return!_.isUndefined(S[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(_.isBoolean(y))return y.toString();if(!c&&_.isBlob(y))throw new V("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,b,S){let A=y;if(y&&!S&&typeof y=="object"){if(_.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&sE(y)||(_.isFileList(y)||_.endsWith(b,"[]"))&&(A=_.toArray(y)))return b=sf(b),A.forEach(function(O,D){!(_.isUndefined(O)||O===null)&&t.append(o===!0?ec([b],D,i):o===null?b:b+"[]",l(O))}),!1}return vi(y)?!0:(t.append(ec(S,b,i),l(y)),!1)}const f=[],d=Object.assign(iE,{defaultVisitor:u,convertValue:l,isVisitable:vi});function m(y,b){if(!_.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(y),_.forEach(y,function(A,R){(!(_.isUndefined(A)||A===null)&&s.call(t,A,_.isString(R)?R.trim():R,b,d))===!0&&m(A,b?b.concat(R):[R])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return m(e),t}function tc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function yo(e,t){this._pairs=[],e&&ws(e,this,t)}const of=yo.prototype;of.append=function(t,n){this._pairs.push([t,n])};of.toString=function(t){const n=t?function(r){return t.call(this,r,tc)}:tc;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function oE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function af(e,t,n){if(!t)return e;const r=n&&n.encode||oE;_.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(t,n):i=_.isURLSearchParams(t)?t.toString():new yo(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class nc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const cf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},aE=typeof URLSearchParams<"u"?URLSearchParams:yo,cE=typeof FormData<"u"?FormData:null,lE=typeof Blob<"u"?Blob:null,uE={isBrowser:!0,classes:{URLSearchParams:aE,FormData:cE,Blob:lE},protocols:["http","https","file","blob","url","data"]},_o=typeof window<"u"&&typeof document<"u",Ii=typeof navigator=="object"&&navigator||void 0,fE=_o&&(!Ii||["ReactNative","NativeScript","NS"].indexOf(Ii.product)<0),dE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",hE=_o&&window.location.href||"http://localhost",pE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_o,hasStandardBrowserEnv:fE,hasStandardBrowserWebWorkerEnv:dE,navigator:Ii,origin:hE},Symbol.toStringTag,{value:"Module"})),ge={...pE,...uE};function mE(e,t){return ws(e,new ge.classes.URLSearchParams,{visitor:function(n,r,s,i){return ge.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function gE(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yE(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function lf(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=yE(s[o])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,s)=>{t(gE(r),s,n,0)}),n}return null}function _E(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const br={transitional:cf,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return s?JSON.stringify(lf(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t)||_.isReadableStream(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return mE(t,this.formSerializer).toString();if((a=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ws(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),_E(t)):t}],transformResponse:[function(t){const n=this.transitional||br.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(t)||_.isReadableStream(t))return t;if(t&&_.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?V.from(a,V.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{br.headers[e]={}});const bE=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),wE=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&bE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},rc=Symbol("internals");function Mn(e){return e&&String(e).trim().toLowerCase()}function Dr(e){return e===!1||e==null?e:_.isArray(e)?e.map(Dr):String(e)}function EE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function zs(e,t,n,r,s){if(_.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function IE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function SE(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}let Pe=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,l){const u=Mn(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Dr(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));if(_.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(_.isString(t)&&(t=t.trim())&&!vE(t))o(wE(t),n);else if(_.isObject(t)&&_.isIterable(t)){let a={},c,l;for(const u of t){if(!_.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?_.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Mn(t),t){const r=_.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return EE(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Mn(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||zs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=Mn(o),o){const a=_.findKey(r,o);a&&(!n||zs(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||zs(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=Dr(s),delete n[i];return}const a=t?IE(i):String(i).trim();a!==i&&delete n[i],n[a]=Dr(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[rc]=this[rc]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Mn(o);r[a]||(SE(s,o),r[a]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}};Pe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Pe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});_.freezeMethods(Pe);function Ks(e,t){const n=this||br,r=t||n,s=Pe.from(r.headers);let i=r.data;return _.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function uf(e){return!!(e&&e.__CANCEL__)}function On(e,t,n){V.call(this,e??"canceled",V.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(On,V,{__CANCEL__:!0});function ff(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function TE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function RE(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,d=0;for(;f!==s;)d+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function AE(e,t){let n=0,r=1e3/t,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),e(...l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Qr=(e,t,n=3)=>{let r=0;const s=RE(50,250);return AE(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},sc=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ic=e=>(...t)=>_.asap(()=>e(...t)),CE=ge.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ge.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ge.origin),ge.navigator&&/(msie|trident)/i.test(ge.navigator.userAgent)):()=>!0,PE=ge.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function OE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kE(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function df(e,t,n){let r=!OE(t);return e&&(r||n==!1)?kE(e,t):t}const oc=e=>e instanceof Pe?{...e}:e;function sn(e,t){t=t||{};const n={};function r(l,u,f,d){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:d},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f,d){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f,d)}else return r(l,u,f,d)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(oc(l),oc(u),f,!0)};return _.forEach(Object.keys({...e,...t}),function(u){const f=c[u]||s,d=f(e[u],t[u],u);_.isUndefined(d)&&f!==a||(n[u]=d)}),n}const hf=e=>{const t=sn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=t;t.headers=o=Pe.from(o),t.url=af(df(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(ge.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(t)),r||r!==!1&&CE(t.url))){const l=s&&i&&PE.read(i);l&&o.set(s,l)}return t},xE=typeof XMLHttpRequest<"u",NE=xE&&function(e){return new Promise(function(n,r){const s=hf(e);let i=s.data;const o=Pe.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,d,m,y;function b(){m&&m(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function A(){if(!S)return;const O=Pe.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),F={data:!a||a==="text"||a==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:O,config:e,request:S};ff(function(G){n(G),b()},function(G){r(G),b()},F),S=null}"onloadend"in S?S.onloadend=A:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(A)},S.onabort=function(){S&&(r(new V("Request aborted",V.ECONNABORTED,e,S)),S=null)},S.onerror=function(){r(new V("Network Error",V.ERR_NETWORK,e,S)),S=null},S.ontimeout=function(){let D=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||cf;s.timeoutErrorMessage&&(D=s.timeoutErrorMessage),r(new V(D,F.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,e,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&_.forEach(o.toJSON(),function(D,F){S.setRequestHeader(F,D)}),_.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),a&&a!=="json"&&(S.responseType=s.responseType),l&&([d,y]=Qr(l,!0),S.addEventListener("progress",d)),c&&S.upload&&([f,m]=Qr(c),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=O=>{S&&(r(!O||O.type?new On(null,e,S):O),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=TE(s.url);if(R&&ge.protocols.indexOf(R)===-1){r(new V("Unsupported protocol "+R+":",V.ERR_BAD_REQUEST,e));return}S.send(i||null)})},DE=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof V?u:new On(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new V(`timeout ${t} of ms exceeded`,V.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),e=null)};e.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},LE=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},ME=async function*(e,t){for await(const n of UE(e))yield*LE(n,t)},UE=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},ac=(e,t,n,r)=>{const s=ME(e,t);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let d=i+=f;n(d)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Es=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",pf=Es&&typeof ReadableStream=="function",FE=Es&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),mf=(e,...t)=>{try{return!!e(...t)}catch{return!1}},BE=pf&&mf(()=>{let e=!1;const t=new Request(ge.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),cc=64*1024,Si=pf&&mf(()=>_.isReadableStream(new Response("").body)),Zr={stream:Si&&(e=>e.body)};Es&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Zr[t]&&(Zr[t]=_.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new V(`Response type '${t}' is not supported`,V.ERR_NOT_SUPPORT,r)})})})(new Response);const $E=async e=>{if(e==null)return 0;if(_.isBlob(e))return e.size;if(_.isSpecCompliantForm(e))return(await new Request(ge.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(_.isArrayBufferView(e)||_.isArrayBuffer(e))return e.byteLength;if(_.isURLSearchParams(e)&&(e=e+""),_.isString(e))return(await FE(e)).byteLength},HE=async(e,t)=>{const n=_.toFiniteNumber(e.getContentLength());return n??$E(t)},jE=Es&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=hf(e);l=l?(l+"").toLowerCase():"text";let m=DE([s,i&&i.toAbortSignal()],o),y;const b=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let S;try{if(c&&BE&&n!=="get"&&n!=="head"&&(S=await HE(u,r))!==0){let F=new Request(t,{method:"POST",body:r,duplex:"half"}),te;if(_.isFormData(r)&&(te=F.headers.get("content-type"))&&u.setContentType(te),F.body){const[G,q]=sc(S,Qr(ic(c)));r=ac(F.body,cc,G,q)}}_.isString(f)||(f=f?"include":"omit");const A="credentials"in Request.prototype;y=new Request(t,{...d,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:A?f:void 0});let R=await fetch(y,d);const O=Si&&(l==="stream"||l==="response");if(Si&&(a||O&&b)){const F={};["status","statusText","headers"].forEach(K=>{F[K]=R[K]});const te=_.toFiniteNumber(R.headers.get("content-length")),[G,q]=a&&sc(te,Qr(ic(a),!0))||[];R=new Response(ac(R.body,cc,G,()=>{q&&q(),b&&b()}),F)}l=l||"text";let D=await Zr[_.findKey(Zr,l)||"text"](R,e);return!O&&b&&b(),await new Promise((F,te)=>{ff(F,te,{data:D,headers:Pe.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:y})})}catch(A){throw b&&b(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new V("Network Error",V.ERR_NETWORK,e,y),{cause:A.cause||A}):V.from(A,A&&A.code,e,y)}}),Ti={http:rE,xhr:NE,fetch:jE};_.forEach(Ti,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const lc=e=>`- ${e}`,VE=e=>_.isFunction(e)||e===null||e===!1,gf={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!VE(n)&&(r=Ti[(o=String(n)).toLowerCase()],r===void 0))throw new V(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(lc).join(`
`):" "+lc(i[0]):"as no adapter specified";throw new V("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ti};function Gs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new On(null,e)}function uc(e){return Gs(e),e.headers=Pe.from(e.headers),e.data=Ks.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),gf.getAdapter(e.adapter||br.adapter)(e).then(function(r){return Gs(e),r.data=Ks.call(e,e.transformResponse,r),r.headers=Pe.from(r.headers),r},function(r){return uf(r)||(Gs(e),r&&r.response&&(r.response.data=Ks.call(e,e.transformResponse,r.response),r.response.headers=Pe.from(r.response.headers))),Promise.reject(r)})}const yf="1.11.0",vs={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{vs[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const fc={};vs.transitional=function(t,n,r){function s(i,o){return"[Axios v"+yf+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new V(s(o," has been removed"+(n?" in "+n:"")),V.ERR_DEPRECATED);return n&&!fc[o]&&(fc[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};vs.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function WE(e,t,n){if(typeof e!="object")throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new V("option "+i+" must be "+c,V.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new V("Unknown option "+i,V.ERR_BAD_OPTION)}}const Lr={assertOptions:WE,validators:vs},Ye=Lr.validators;let Xt=class{constructor(t){this.defaults=t||{},this.interceptors={request:new nc,response:new nc}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=sn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Lr.assertOptions(r,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Lr.assertOptions(s,{encode:Ye.function,serialize:Ye.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Lr.assertOptions(n,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Pe.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,d;if(!c){const y=[uc.bind(this),void 0];for(y.unshift(...a),y.push(...l),d=y.length,u=Promise.resolve(n);f<d;)u=u.then(y[f++],y[f++]);return u}d=a.length;let m=n;for(f=0;f<d;){const y=a[f++],b=a[f++];try{m=y(m)}catch(S){b.call(this,S);break}}try{u=uc.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=sn(this.defaults,t);const n=df(t.baseURL,t.url,t.allowAbsoluteUrls);return af(n,t.params,t.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(t){Xt.prototype[t]=function(n,r){return this.request(sn(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(sn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Xt.prototype[t]=n(),Xt.prototype[t+"Form"]=n(!0)});let qE=class _f{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new On(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new _f(function(s){t=s}),cancel:t}}};function zE(e){return function(n){return e.apply(null,n)}}function KE(e){return _.isObject(e)&&e.isAxiosError===!0}const Ri={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ri).forEach(([e,t])=>{Ri[t]=e});function bf(e){const t=new Xt(e),n=Gu(Xt.prototype.request,t);return _.extend(n,Xt.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return bf(sn(e,s))},n}const fe=bf(br);fe.Axios=Xt;fe.CanceledError=On;fe.CancelToken=qE;fe.isCancel=uf;fe.VERSION=yf;fe.toFormData=ws;fe.AxiosError=V;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=zE;fe.isAxiosError=KE;fe.mergeConfig=sn;fe.AxiosHeaders=Pe;fe.formToJSON=e=>lf(_.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=gf.getAdapter;fe.HttpStatusCode=Ri;fe.default=fe;const{Axios:nv,AxiosError:rv,CanceledError:sv,isCancel:iv,CancelToken:ov,VERSION:av,all:cv,Cancel:lv,isAxiosError:uv,spread:fv,toFormData:dv,AxiosHeaders:hv,HttpStatusCode:pv,formToJSON:mv,getAdapter:gv,mergeConfig:yv}=fe,GE=fe.create({baseURL:"https://augmentplus.space/api"}),JE=lb("unknown",()=>{const e=nn({type:"kingdom"}),t=nn({});async function n(){console.info("App Initialized");try{let{data:r}=await GE.get("/data");Object.assign(t,r),console.log(t)}catch(r){console.error(r)}}return{init:n,software:e,info:t}}),YE=rb(),Js=eb(yw);qh(Sg,async e=>{Js.use(YE);const t=JE();console.log(e),t.init(),Js.use(gw),Js.mount("#app")});export{ft as F,dw as R,Tu as a,Le as b,y_ as c,w_ as d,QE as e,XE as f,Gn as g,us as h,nn as i,ru as j,Ne as k,JE as l,p_ as o,My as r,ZE as s,bn as u,wy as w};
