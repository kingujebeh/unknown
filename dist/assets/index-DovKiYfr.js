(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ql=()=>{};var Ni={};/**
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
 */const fa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zl=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new eu;const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const I=l<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tu=function(t){const e=fa(t);return da.encodeByteArray(e,!0)},ha=function(t){return tu(t).replace(/\./g,"")},pa=function(t){try{return da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ru=()=>nu().__FIREBASE_DEFAULTS__,su=()=>{if(typeof process>"u"||typeof Ni>"u")return;const t=Ni.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pa(t[1]);return e&&JSON.parse(e)},Vs=()=>{try{return Ql()||ru()||su()||iu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ou=t=>Vs()?.emulatorHosts?.[t],ga=()=>Vs()?.config,ma=t=>Vs()?.[`_${t}`];/**
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
 */class au{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Or(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cu(t){return(await fetch(t,{credentials:"include"})).ok}const En={};function lu(){const t={prod:[],emulator:[]};for(const e of Object.keys(En))En[e]?t.emulator.push(e):t.prod.push(e);return t}function uu(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let xi=!1;function fu(t,e){if(typeof window>"u"||typeof document>"u"||!Or(window.location.host)||En[t]===e||En[t]||xi)return;En[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=lu().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,m){h.setAttribute("width","24"),h.setAttribute("id",m),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{xi=!0,o()},h}function u(h,m){h.setAttribute("id",m),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function d(){const h=uu(r),m=n("text"),I=document.getElementById(m)||document.createElement("span"),R=n("learnmore"),U=document.getElementById(R)||document.createElement("a"),D=n("preprendIcon"),O=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const N=h.element;a(N),u(U,R);const k=l();c(O,D),N.append(O,I,U,k),document.body.appendChild(N)}i?(I.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function du(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function hu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _a(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gu(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ya(){try{return typeof indexedDB=="object"}catch{return!1}}function ba(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function mu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _u="FirebaseError";class Qe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_u,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gt.prototype.create)}}class Gt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yu(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qe(s,a,r)}}function yu(t,e){return t.replace(bu,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bu=/\{\$([^}]+)}/g;function wu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Mi(i)&&Mi(o)){if(!jt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mi(t){return t!==null&&typeof t=="object"}/**
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
 */function Kn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vu(t,e){const n=new Iu(t,e);return n.subscribe.bind(n)}class Iu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Eu(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Kr),s.error===void 0&&(s.error=Kr),s.complete===void 0&&(s.complete=Kr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kr(){}/**
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
 */const Su=1e3,Tu=2,Cu=14400*1e3,Au=.5;function Li(t,e=Su,n=Tu){const r=e*Math.pow(n,t),s=Math.round(Au*r*(Math.random()-.5)*2);return Math.min(Cu,r+s)}/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class Ye{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class Ru{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new au;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ou(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pu(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pu(t){return t===Lt?void 0:t}function Ou(t){return t.instantiationMode==="EAGER"}/**
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
 */class ku{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ru(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Du={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Nu=ee.INFO,xu={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Mu=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xu[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class js{constructor(e){this.name=e,this._logLevel=Nu,this._logHandler=Mu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Du[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Lu=(t,e)=>e.some(n=>t instanceof n);let Ui,Fi;function Uu(){return Ui||(Ui=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fu(){return Fi||(Fi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wa=new WeakMap,_s=new WeakMap,va=new WeakMap,qr=new WeakMap,Ws=new WeakMap;function $u(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wa.set(n,t)}).catch(()=>{}),Ws.set(e,t),e}function Bu(t){if(_s.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_s.set(t,e)}let ys={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _s.get(t);if(e==="objectStoreNames")return t.objectStoreNames||va.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hu(t){ys=t(ys)}function Vu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gr(this),e,...n);return va.set(r,e.sort?e.sort():[e]),Pt(r)}:Fu().includes(t)?function(...e){return t.apply(Gr(this),e),Pt(wa.get(this))}:function(...e){return Pt(t.apply(Gr(this),e))}}function ju(t){return typeof t=="function"?Vu(t):(t instanceof IDBTransaction&&Bu(t),Lu(t,Uu())?new Proxy(t,ys):t)}function Pt(t){if(t instanceof IDBRequest)return $u(t);if(qr.has(t))return qr.get(t);const e=ju(t);return e!==t&&(qr.set(t,e),Ws.set(e,t)),e}const Gr=t=>Ws.get(t);function Ia(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Wu=["get","getKey","getAll","getAllKeys","count"],zu=["put","add","delete","clear"],Jr=new Map;function $i(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jr.get(e))return Jr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Jr.set(e,i),i}Hu(t=>({...t,get:(e,n,r)=>$i(e,n)||t.get(e,n,r),has:(e,n)=>!!$i(e,n)||t.has(e,n)}));/**
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
 */class Ku{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qu(t){return t.getComponent()?.type==="VERSION"}const bs="@firebase/app",Bi="0.14.1";/**
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
 */const ct=new js("@firebase/app"),Gu="@firebase/app-compat",Ju="@firebase/analytics-compat",Yu="@firebase/analytics",Xu="@firebase/app-check-compat",Qu="@firebase/app-check",Zu="@firebase/auth",ef="@firebase/auth-compat",tf="@firebase/database",nf="@firebase/data-connect",rf="@firebase/database-compat",sf="@firebase/functions",of="@firebase/functions-compat",af="@firebase/installations",cf="@firebase/installations-compat",lf="@firebase/messaging",uf="@firebase/messaging-compat",ff="@firebase/performance",df="@firebase/performance-compat",hf="@firebase/remote-config",pf="@firebase/remote-config-compat",gf="@firebase/storage",mf="@firebase/storage-compat",_f="@firebase/firestore",yf="@firebase/ai",bf="@firebase/firestore-compat",wf="firebase",vf="12.1.0";/**
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
 */const ws="[DEFAULT]",If={[bs]:"fire-core",[Gu]:"fire-core-compat",[Yu]:"fire-analytics",[Ju]:"fire-analytics-compat",[Qu]:"fire-app-check",[Xu]:"fire-app-check-compat",[Zu]:"fire-auth",[ef]:"fire-auth-compat",[tf]:"fire-rtdb",[nf]:"fire-data-connect",[rf]:"fire-rtdb-compat",[sf]:"fire-fn",[of]:"fire-fn-compat",[af]:"fire-iid",[cf]:"fire-iid-compat",[lf]:"fire-fcm",[uf]:"fire-fcm-compat",[ff]:"fire-perf",[df]:"fire-perf-compat",[hf]:"fire-rc",[pf]:"fire-rc-compat",[gf]:"fire-gcs",[mf]:"fire-gcs-compat",[_f]:"fire-fst",[bf]:"fire-fst-compat",[yf]:"fire-vertex","fire-js":"fire-js",[wf]:"fire-js-all"};/**
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
 */const pr=new Map,Ef=new Map,vs=new Map;function Hi(t,e){try{t.container.addComponent(e)}catch(n){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(vs.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;vs.set(e,t);for(const n of pr.values())Hi(n,t);for(const n of Ef.values())Hi(n,t);return!0}function mn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function st(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Sf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new Gt("app","Firebase",Sf);/**
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
 */class Tf{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const qn=vf;function Ea(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ws,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(n||(n=ga()),!n)throw Ot.create("no-options");const i=pr.get(s);if(i){if(jt(n,i.options)&&jt(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const o=new ku(s);for(const c of vs.values())o.addComponent(c);const a=new Tf(n,r,o);return pr.set(s,a),a}function Sa(t=ws){const e=pr.get(t);if(!e&&t===ws&&ga())return Ea();if(!e)throw Ot.create("no-app",{appName:t});return e}function ze(t,e,n){let r=If[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(o.join(" "));return}lt(new Ye(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Cf="firebase-heartbeat-database",Af=1,Un="firebase-heartbeat-store";let Yr=null;function Ta(){return Yr||(Yr=Ia(Cf,Af,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Un)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Yr}async function Rf(t){try{const n=(await Ta()).transaction(Un),r=await n.objectStore(Un).get(Ca(t));return await n.done,r}catch(e){if(e instanceof Qe)ct.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e?.message});ct.warn(n.message)}}}async function Vi(t,e){try{const r=(await Ta()).transaction(Un,"readwrite");await r.objectStore(Un).put(e,Ca(t)),await r.done}catch(n){if(n instanceof Qe)ct.warn(n.message);else{const r=Ot.create("idb-set",{originalErrorMessage:n?.message});ct.warn(r.message)}}}function Ca(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pf=1024,Of=30;class kf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ji();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Of){const s=xf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ct.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ji(),{heartbeatsToSend:n,unsentEntries:r}=Df(this._heartbeatsCache.heartbeats),s=ha(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ct.warn(e),""}}}function ji(){return new Date().toISOString().substring(0,10)}function Df(t,e=Pf){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ya()?ba().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rf(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wi(t){return ha(JSON.stringify({version:2,heartbeats:t})).length}function xf(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Mf(t){lt(new Ye("platform-logger",e=>new Ku(e),"PRIVATE")),lt(new Ye("heartbeat",e=>new kf(e),"PRIVATE")),ze(bs,Bi,t),ze(bs,Bi,"esm2020"),ze("fire-js","")}Mf("");var Lf="firebase",Uf="12.1.0";/**
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
 */ze(Lf,Uf,"app");function Aa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ff=Aa,Ra=new Gt("auth","Firebase",Aa());/**
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
 */const gr=new js("@firebase/auth");function $f(t,...e){gr.logLevel<=ee.WARN&&gr.warn(`Auth (${qn}): ${t}`,...e)}function or(t,...e){gr.logLevel<=ee.ERROR&&gr.error(`Auth (${qn}): ${t}`,...e)}/**
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
 */function ut(t,...e){throw zs(t,...e)}function Ke(t,...e){return zs(t,...e)}function Pa(t,e,n){const r={...Ff(),[e]:n};return new Gt("auth","Firebase",r).create(e,{appName:t.name})}function $t(t){return Pa(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ra.create(t,...e)}function F(t,e,...n){if(!t)throw zs(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw or(e),new Error(e)}function ft(t,e){t||ot(e)}/**
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
 */function Is(){return typeof self<"u"&&self.location?.href||""}function Bf(){return zi()==="http:"||zi()==="https:"}function zi(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Hf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bf()||_a()||"connection"in navigator)?navigator.onLine:!0}function Vf(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=du()||pu()}get(){return Hf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ks(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Oa{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zf=new Gn(3e4,6e4);function qs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _n(t,e,n,r,s={}){return ka(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Kn({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return hu()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&Or(t.emulatorConfig.host)&&(l.credentials="include"),Oa.fetch()(await Da(t,t.config.apiHost,n,a),l)})}async function ka(t,e,n){t._canInitEmulator=!1;const r={...jf,...e};try{const s=new qf(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw tr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw tr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw tr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw tr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Pa(t,u,l);ut(t,u)}}catch(s){if(s instanceof Qe)throw s;ut(t,"network-request-failed",{message:String(s)})}}async function Kf(t,e,n,r,s={}){const i=await _n(t,e,n,r,s);return"mfaPendingCredential"in i&&ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Da(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ks(t.config,s):`${t.config.apiScheme}://${s}`;return Wf.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class qf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),zf.get())})}}function tr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Gf(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function mr(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jf(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=Gs(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Sn(Xr(s.auth_time)),issuedAtTime:Sn(Xr(s.iat)),expirationTime:Sn(Xr(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Xr(t){return Number(t)*1e3}function Gs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return or("JWT malformed, contained fewer than 3 sections"),null;try{const s=pa(n);return s?JSON.parse(s):(or("Failed to decode base64 JWT payload"),null)}catch(s){return or("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ki(t){const e=Gs(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qe&&Yf(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Xf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Es{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sn(this.lastLoginAt),this.creationTime=Sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _r(t){const e=t.auth,n=await t.getIdToken(),r=await Fn(t,mr(e,{idToken:n}));F(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Na(s.providerUserInfo):[],o=Zf(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Es(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function Qf(t){const e=pt(t);await _r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zf(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Na(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function ed(t,e){const n=await ka(t,{},async()=>{const r=Kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Da(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&Or(t.emulatorConfig.host)&&(c.credentials="include"),Oa.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function td(t,e){return _n(t,"POST","/v2/accounts:revokeToken",qs(t,e))}/**
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
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ki(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=Ki(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ed(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function yt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ne{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Xf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Es(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jf(this,e)}reload(){return Qf(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ne({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await Fn(this,Gf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:m,providerData:I,stsTokenManager:R}=n;F(d&&R,e,"internal-error");const U=rn.fromJSON(this.name,R);F(typeof d=="string",e,"internal-error"),yt(r,e.name),yt(s,e.name),F(typeof h=="boolean",e,"internal-error"),F(typeof m=="boolean",e,"internal-error"),yt(i,e.name),yt(o,e.name),yt(a,e.name),yt(c,e.name),yt(l,e.name),yt(u,e.name);const D=new Ne({uid:d,auth:e,email:s,emailVerified:h,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:U,createdAt:l,lastLoginAt:u});return I&&Array.isArray(I)&&(D.providerData=I.map(O=>({...O}))),c&&(D._redirectEventId=c),D}static async _fromIdTokenResponse(e,n,r=!1){const s=new rn;s.updateFromServerResponse(n);const i=new Ne({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _r(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Na(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new rn;a.updateFromIdToken(r);const c=new Ne({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Es(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const qi=new Map;function at(t){ft(t instanceof Function,"Expected a class definition");let e=qi.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qi.set(t,e),e)}/**
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
 */class xa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xa.type="NONE";const Gi=xa;/**
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
 */function ar(t,e,n){return`firebase:${t}:${e}:${n}`}class sn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ar(this.userKey,s.apiKey,i),this.fullPersistenceKey=ar("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mr(this.auth,{idToken:e}).catch(()=>{});return n?Ne._fromGetAccountInfoResponse(this.auth,n,e):null}return Ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sn(at(Gi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||at(Gi);const o=ar(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let d;if(typeof u=="string"){const h=await mr(e,{idToken:u}).catch(()=>{});if(!h)break;d=await Ne._fromGetAccountInfoResponse(e,h,u)}else d=Ne._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new sn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new sn(i,e,r))}}/**
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
 */function Ji(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ma(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ba(e))return"Blackberry";if(Ha(e))return"Webos";if(La(e))return"Safari";if((e.includes("chrome/")||Ua(e))&&!e.includes("edge/"))return"Chrome";if($a(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Ma(t=ye()){return/firefox\//i.test(t)}function La(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ua(t=ye()){return/crios\//i.test(t)}function Fa(t=ye()){return/iemobile/i.test(t)}function $a(t=ye()){return/android/i.test(t)}function Ba(t=ye()){return/blackberry/i.test(t)}function Ha(t=ye()){return/webos/i.test(t)}function Js(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nd(t=ye()){return Js(t)&&!!window.navigator?.standalone}function rd(){return gu()&&document.documentMode===10}function Va(t=ye()){return Js(t)||$a(t)||Ha(t)||Ba(t)||/windows phone/i.test(t)||Fa(t)}/**
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
 */function ja(t,e=[]){let n;switch(t){case"Browser":n=Ji(ye());break;case"Worker":n=`${Ji(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qn}/${r}`}/**
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
 */class sd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function id(t,e={}){return _n(t,"GET","/v2/passwordPolicy",qs(t,e))}/**
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
 */const od=6;class ad{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??od,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cd{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yi(this),this.idTokenSubscription=new Yi(this),this.beforeStateQueue=new sd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ra,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mr(this,{idToken:e}),r=await Ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(st(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _r(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject($t(this));const n=e?pt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await id(this),n=new ad(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await td(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ja(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(st(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&$f(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ys(t){return pt(t)}class Yi{constructor(e){this.auth=e,this.observer=null,this.addObserver=vu(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ld(t){Xs=t}function ud(t){return Xs.loadJS(t)}function fd(){return Xs.gapiScript}function dd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function hd(t,e){const n=mn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jt(i,e??{}))return s;ut(s,"already-initialized")}return n.initialize({options:e})}function pd(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(at);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function gd(t,e,n){const r=Ys(t);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Wa(e),{host:o,port:a}=md(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(jt(l,r.config.emulator)&&jt(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Or(o)?(cu(`${i}//${o}${c}`),fu("Auth",!0)):_d()}function Wa(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function md(t){const e=Wa(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xi(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xi(o)}}}function Xi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _d(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class za{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
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
 */async function on(t,e){return Kf(t,"POST","/v1/accounts:signInWithIdp",qs(t,e))}/**
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
 */const yd="http://localhost";class Wt extends za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Wt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return on(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,on(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,on(e,n)}buildRequest(){const e={requestUri:yd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kn(n)}return e}}/**
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
 */class Ka{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jn extends Ka{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends Jn{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends Jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class Ct extends Jn{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
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
 */class At extends Jn{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return At.credential(n,r)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
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
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ne._fromIdTokenResponse(e,r,s),o=Qi(r);return new fn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qi(r);return new fn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yr extends Qe{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yr(e,n,r,s)}}function qa(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,i,e,r):i})}async function bd(t,e,n=!1){const r=await Fn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",r)}/**
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
 */async function wd(t,e,n=!1){const{auth:r}=t;if(st(r.app))return Promise.reject($t(r));const s="reauthenticate";try{const i=await Fn(t,qa(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Gs(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),fn._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&ut(r,"user-mismatch"),i}}/**
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
 */async function vd(t,e,n=!1){if(st(t.app))return Promise.reject($t(t));const r="signIn",s=await qa(t,r,e),i=await fn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Id(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function Ed(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function Sd(t,e,n,r){return pt(t).onAuthStateChanged(e,n,r)}const br="__sak";/**
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
 */class Ga{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Td=1e3,Cd=10;class Ja extends Ga{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Va(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Cd):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Td)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ja.type="LOCAL";const Ad=Ja;/**
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
 */class Ya extends Ga{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ya.type="SESSION";const Xa=Ya;/**
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
 */function Rd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Rd(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kr.receivers=[];/**
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
 */function Qs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Qs("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qe(){return window}function Od(t){qe().location.href=t}/**
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
 */function Qa(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function kd(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dd(){return navigator?.serviceWorker?.controller||null}function Nd(){return Qa()?self:null}/**
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
 */const Za="firebaseLocalStorageDb",xd=1,wr="firebaseLocalStorage",ec="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dr(t,e){return t.transaction([wr],e?"readwrite":"readonly").objectStore(wr)}function Md(){const t=indexedDB.deleteDatabase(Za);return new Yn(t).toPromise()}function Ss(){const t=indexedDB.open(Za,xd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wr,{keyPath:ec})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wr)?e(r):(r.close(),await Md(),e(await Ss()))})})}async function Zi(t,e,n){const r=Dr(t,!0).put({[ec]:e,value:n});return new Yn(r).toPromise()}async function Ld(t,e){const n=Dr(t,!1).get(e),r=await new Yn(n).toPromise();return r===void 0?null:r.value}function eo(t,e){const n=Dr(t,!0).delete(e);return new Yn(n).toPromise()}const Ud=800,Fd=3;class tc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ss(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fd)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kr._getInstance(Nd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await kd(),!this.activeServiceWorker)return;this.sender=new Pd(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ss();return await Zi(e,br,"1"),await eo(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ld(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Dr(s,!1).getAll();return new Yn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ud)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tc.type="LOCAL";const $d=tc;new Gn(3e4,6e4);/**
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
 */function Bd(t,e){return e?at(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zs extends za{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,n){return on(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hd(t){return vd(t.auth,new Zs(t),t.bypassAuthState)}function Vd(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),wd(n,new Zs(t),t.bypassAuthState)}async function jd(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),bd(n,new Zs(t),t.bypassAuthState)}/**
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
 */class nc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hd;case"linkViaPopup":case"linkViaRedirect":return jd;case"reauthViaPopup":case"reauthViaRedirect":return Vd;default:ut(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wd=new Gn(2e3,1e4);class nn extends nc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Qs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wd.get())};e()}}nn.currentPopupAction=null;/**
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
 */const zd="pendingRedirect",cr=new Map;class Kd extends nc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cr.get(this.auth._key());if(!e){try{const r=await qd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cr.set(this.auth._key(),e)}return this.bypassAuthState||cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qd(t,e){const n=Yd(e),r=Jd(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Gd(t,e){cr.set(t._key(),e)}function Jd(t){return at(t._redirectPersistence)}function Yd(t){return ar(zd,t.config.apiKey,t.name)}async function Xd(t,e,n=!1){if(st(t.app))return Promise.reject($t(t));const r=Ys(t),s=Bd(r,e),o=await new Kd(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Qd=600*1e3;class Zd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!rc(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Ke(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qd&&this.cachedEventUids.clear(),this.cachedEventUids.has(to(e))}saveEventToCache(e){this.cachedEventUids.add(to(e)),this.lastProcessedEventTime=Date.now()}}function to(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rc({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function eh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rc(t);default:return!1}}/**
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
 */async function th(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
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
 */const nh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rh=/^https?/;async function sh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await th(t);for(const n of e)try{if(ih(n))return}catch{}ut(t,"unauthorized-domain")}function ih(t){const e=Is(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rh.test(n))return!1;if(nh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const oh=new Gn(3e4,6e4);function no(){const t=qe().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ah(t){return new Promise((e,n)=>{function r(){no(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{no(),n(Ke(t,"network-request-failed"))},timeout:oh.get()})}if(qe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(qe().gapi?.load)r();else{const s=dd("iframefcb");return qe()[s]=()=>{gapi.load?r():n(Ke(t,"network-request-failed"))},ud(`${fd()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw lr=null,e})}let lr=null;function ch(t){return lr=lr||ah(t),lr}/**
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
 */const lh=new Gn(5e3,15e3),uh="__/auth/iframe",fh="emulator/auth/iframe",dh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ph(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ks(e,fh):`https://${t.config.authDomain}/${uh}`,r={apiKey:e.apiKey,appName:t.name,v:qn},s=hh.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Kn(r).slice(1)}`}async function gh(t){const e=await ch(t),n=qe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:ph(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dh,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=qe().setTimeout(()=>{i(o)},lh.get());function c(){qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const mh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_h=500,yh=600,bh="_blank",wh="http://localhost";class ro{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vh(t,e,n,r=_h,s=yh){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...mh,width:r.toString(),height:s.toString(),top:i,left:o},l=ye().toLowerCase();n&&(a=Ua(l)?bh:n),Ma(l)&&(e=e||wh,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,I])=>`${h}${m}=${I},`,"");if(nd(l)&&a!=="_self")return Ih(e||"",a),new ro(null);const d=window.open(e||"",a,u);F(d,t,"popup-blocked");try{d.focus()}catch{}return new ro(d)}function Ih(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Eh="__/auth/handler",Sh="emulator/auth/handler",Th=encodeURIComponent("fac");async function so(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qn,eventId:s};if(e instanceof Ka){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Jn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Th}=${encodeURIComponent(c)}`:"";return`${Ch(t)}?${Kn(a).slice(1)}${l}`}function Ch({config:t}){return t.emulator?Ks(t,Sh):`https://${t.authDomain}/${Eh}`}/**
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
 */const Qr="webStorageSupport";class Ah{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xa,this._completeRedirectFn=Xd,this._overrideRedirectResult=Gd}async _openPopup(e,n,r,s){ft(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await so(e,n,r,Is(),s);return vh(e,i,Qs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await so(e,n,r,Is(),s);return Od(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gh(e),r=new Zd(e);return n.register("authEvent",s=>(F(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qr,{type:Qr},s=>{const i=s?.[0]?.[Qr];i!==void 0&&n(!!i),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Va()||La()||Js()}}const Rh=Ah;var io="@firebase/auth",oo="1.11.0";/**
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
 */class Ph{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Oh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kh(t){lt(new Ye("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ja(t)},l=new cd(r,s,i,c);return pd(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),lt(new Ye("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new Ph(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(io,oo,Oh(t)),ze(io,oo,"esm2020")}/**
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
 */const Dh=300,Nh=ma("authIdTokenMaxAge")||Dh;let ao=null;const xh=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nh)return;const s=n?.token;ao!==s&&(ao=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mh(t=Sa()){const e=mn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hd(t,{popupRedirectResolver:Rh,persistence:[$d,Ad,Xa]}),r=ma("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=xh(i.toString());Ed(n,o,()=>o(n.currentUser)),Id(n,a=>o(a))}}const s=ou("auth");return s&&gd(n,`http://${s}`),n}function Lh(){return document.getElementsByTagName("head")?.[0]??document}ld({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Lh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kh("Browser");const sc="@firebase/installations",ei="0.6.19";/**
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
 */const ic=1e4,oc=`w:${ei}`,ac="FIS_v2",Uh="https://firebaseinstallations.googleapis.com/v1",Fh=3600*1e3,$h="installations",Bh="Installations";/**
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
 */const Hh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},zt=new Gt($h,Bh,Hh);function cc(t){return t instanceof Qe&&t.code.includes("request-failed")}/**
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
 */function lc({projectId:t}){return`${Uh}/projects/${t}/installations`}function uc(t){return{token:t.token,requestStatus:2,expiresIn:jh(t.expiresIn),creationTime:Date.now()}}async function fc(t,e){const r=(await e.json()).error;return zt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vh(t,{refreshToken:e}){const n=dc(t);return n.append("Authorization",Wh(e)),n}async function hc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function jh(t){return Number(t.replace("s","000"))}function Wh(t){return`${ac} ${t}`}/**
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
 */async function zh({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lc(t),s=dc(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:ac,appId:t.appId,sdkVersion:oc},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await hc(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:uc(l.authToken)}}else throw await fc("Create Installation",c)}/**
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
 */function pc(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Kh(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qh=/^[cdef][\w-]{21}$/,Ts="";function Gh(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Jh(t);return qh.test(n)?n:Ts}catch{return Ts}}function Jh(t){return Kh(t).substr(0,22)}/**
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
 */function Nr(t){return`${t.appName}!${t.appId}`}/**
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
 */const gc=new Map;function mc(t,e){const n=Nr(t);_c(n,e),Yh(n,e)}function _c(t,e){const n=gc.get(t);if(n)for(const r of n)r(e)}function Yh(t,e){const n=Xh();n&&n.postMessage({key:t,fid:e}),Qh()}let Ft=null;function Xh(){return!Ft&&"BroadcastChannel"in self&&(Ft=new BroadcastChannel("[Firebase] FID Change"),Ft.onmessage=t=>{_c(t.data.key,t.data.fid)}),Ft}function Qh(){gc.size===0&&Ft&&(Ft.close(),Ft=null)}/**
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
 */const Zh="firebase-installations-database",ep=1,Kt="firebase-installations-store";let Zr=null;function ti(){return Zr||(Zr=Ia(Zh,ep,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kt)}}})),Zr}async function vr(t,e){const n=Nr(t),s=(await ti()).transaction(Kt,"readwrite"),i=s.objectStore(Kt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&mc(t,e.fid),e}async function yc(t){const e=Nr(t),r=(await ti()).transaction(Kt,"readwrite");await r.objectStore(Kt).delete(e),await r.done}async function xr(t,e){const n=Nr(t),s=(await ti()).transaction(Kt,"readwrite"),i=s.objectStore(Kt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&mc(t,a.fid),a}/**
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
 */async function ni(t){let e;const n=await xr(t.appConfig,r=>{const s=tp(r),i=np(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Ts?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tp(t){const e=t||{fid:Gh(),registrationStatus:0};return bc(e)}function np(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(zt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rp(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sp(t)}:{installationEntry:e}}async function rp(t,e){try{const n=await zh(t,e);return vr(t.appConfig,n)}catch(n){throw cc(n)&&n.customData.serverCode===409?await yc(t.appConfig):await vr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sp(t){let e=await co(t.appConfig);for(;e.registrationStatus===1;)await pc(100),e=await co(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ni(t);return r||n}return e}function co(t){return xr(t,e=>{if(!e)throw zt.create("installation-not-found");return bc(e)})}function bc(t){return ip(t)?{fid:t.fid,registrationStatus:0}:t}function ip(t){return t.registrationStatus===1&&t.registrationTime+ic<Date.now()}/**
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
 */async function op({appConfig:t,heartbeatServiceProvider:e},n){const r=ap(t,n),s=Vh(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:oc,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await hc(()=>fetch(r,a));if(c.ok){const l=await c.json();return uc(l)}else throw await fc("Generate Auth Token",c)}function ap(t,{fid:e}){return`${lc(t)}/${e}/authTokens:generate`}/**
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
 */async function ri(t,e=!1){let n;const r=await xr(t.appConfig,i=>{if(!wc(i))throw zt.create("not-registered");const o=i.authToken;if(!e&&up(o))return i;if(o.requestStatus===1)return n=cp(t,e),i;{if(!navigator.onLine)throw zt.create("app-offline");const a=dp(i);return n=lp(t,a),a}});return n?await n:r.authToken}async function cp(t,e){let n=await lo(t.appConfig);for(;n.authToken.requestStatus===1;)await pc(100),n=await lo(t.appConfig);const r=n.authToken;return r.requestStatus===0?ri(t,e):r}function lo(t){return xr(t,e=>{if(!wc(e))throw zt.create("not-registered");const n=e.authToken;return hp(n)?{...e,authToken:{requestStatus:0}}:e})}async function lp(t,e){try{const n=await op(t,e),r={...e,authToken:n};return await vr(t.appConfig,r),n}catch(n){if(cc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yc(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await vr(t.appConfig,r)}throw n}}function wc(t){return t!==void 0&&t.registrationStatus===2}function up(t){return t.requestStatus===2&&!fp(t)}function fp(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Fh}function dp(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function hp(t){return t.requestStatus===1&&t.requestTime+ic<Date.now()}/**
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
 */async function pp(t){const e=t,{installationEntry:n,registrationPromise:r}=await ni(e);return r?r.catch(console.error):ri(e).catch(console.error),n.fid}/**
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
 */async function gp(t,e=!1){const n=t;return await mp(n),(await ri(n,e)).token}async function mp(t){const{registrationPromise:e}=await ni(t);e&&await e}/**
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
 */function _p(t){if(!t||!t.options)throw es("App Configuration");if(!t.name)throw es("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw es(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function es(t){return zt.create("missing-app-config-values",{valueName:t})}/**
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
 */const vc="installations",yp="installations-internal",bp=t=>{const e=t.getProvider("app").getImmediate(),n=_p(e),r=mn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wp=t=>{const e=t.getProvider("app").getImmediate(),n=mn(e,vc).getImmediate();return{getId:()=>pp(n),getToken:s=>gp(n,s)}};function vp(){lt(new Ye(vc,bp,"PUBLIC")),lt(new Ye(yp,wp,"PRIVATE"))}vp();ze(sc,ei);ze(sc,ei,"esm2020");/**
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
 */const Ir="analytics",Ip="firebase_id",Ep="origin",Sp=60*1e3,Tp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",si="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ee=new js("@firebase/analytics");/**
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
 */const Cp={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pe=new Gt("analytics","Analytics",Cp);/**
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
 */function Ap(t){if(!t.startsWith(si)){const e=Pe.create("invalid-gtag-resource",{gtagURL:t});return Ee.warn(e.message),""}return t}function Ic(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Rp(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Pp(t,e){const n=Rp("firebase-js-sdk-policy",{createScriptURL:Ap}),r=document.createElement("script"),s=`${si}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Op(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function kp(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Ic(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ee.error(a)}t("config",s,i)}async function Dp(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Ic(n);for(const c of o){const l=a.find(d=>d.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ee.error(i)}}function Np(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Dp(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await kp(t,e,n,r,a,c)}else if(i==="consent"){const[a,c]=o;t("consent",a,c)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ee.error(a)}}return s}function xp(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Np(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Mp(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(si)&&n.src.includes(t))return n;return null}/**
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
 */const Lp=30,Up=1e3;class Fp{constructor(e={},n=Up){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ec=new Fp;function $p(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Bp(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:$p(n)},s=Tp.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw Pe.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function Hp(t,e=Ec,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Pe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Pe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Wp;return setTimeout(async()=>{a.abort()},Sp),Sc({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Sc(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Ec){const{appId:i,measurementId:o}=t;try{await Vp(r,e)}catch(a){if(o)return Ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await Bp(t);return s.deleteThrottleMetadata(i),a}catch(a){const c=a;if(!jp(c)){if(s.deleteThrottleMetadata(i),o)return Ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw a}const l=Number(c?.customData?.httpStatus)===503?Li(n,s.intervalMillis,Lp):Li(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),Ee.debug(`Calling attemptFetch again in ${l} millis`),Sc(t,u,r,s)}}function Vp(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Pe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jp(t){if(!(t instanceof Qe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Wp{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zp(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
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
 */async function Kp(){if(ya())try{await ba()}catch(t){return Ee.warn(Pe.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ee.warn(Pe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qp(t,e,n,r,s,i,o){const a=Hp(t);a.then(h=>{n[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&Ee.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Ee.error(h)),e.push(a);const c=Kp().then(h=>{if(h)return r.getId()}),[l,u]=await Promise.all([a,c]);Mp(i)||Pp(i,l.measurementId),s("js",new Date);const d=o?.config??{};return d[Ep]="firebase",d.update=!0,u!=null&&(d[Ip]=u),s("config",l.measurementId,d),l.measurementId}/**
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
 */class Gp{constructor(e){this.app=e}_delete(){return delete Tn[this.app.options.appId],Promise.resolve()}}let Tn={},uo=[];const fo={};let ts="dataLayer",Jp="gtag",ho,Tc,po=!1;function Yp(){const t=[];if(_a()&&t.push("This is a browser extension environment."),mu()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Pe.create("invalid-analytics-context",{errorInfo:e});Ee.warn(n.message)}}function Xp(t,e,n){Yp();const r=t.options.appId;if(!r)throw Pe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pe.create("no-api-key");if(Tn[r]!=null)throw Pe.create("already-exists",{id:r});if(!po){Op(ts);const{wrappedGtag:i,gtagCore:o}=xp(Tn,uo,fo,ts,Jp);Tc=i,ho=o,po=!0}return Tn[r]=qp(t,uo,fo,e,ho,ts,n),new Gp(t)}function Qp(t=Sa()){t=pt(t);const e=mn(t,Ir);return e.isInitialized()?e.getImmediate():Zp(t)}function Zp(t,e={}){const n=mn(t,Ir);if(n.isInitialized()){const s=n.getImmediate();if(jt(e,n.getOptions()))return s;throw Pe.create("already-initialized")}return n.initialize({options:e})}function eg(t,e,n,r){t=pt(t),zp(Tc,Tn[t.app.options.appId],e,n,r).catch(s=>Ee.error(s))}const go="@firebase/analytics",mo="0.10.18";function tg(){lt(new Ye(Ir,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Xp(r,s,n)},"PUBLIC")),lt(new Ye("analytics-internal",t,"PRIVATE")),ze(go,mo),ze(go,mo,"esm2020");function t(e){try{const n=e.getProvider(Ir).getImmediate();return{logEvent:(r,s,i)=>eg(n,r,s,i)}}catch(n){throw Pe.create("interop-component-reg-failed",{reason:n})}}}tg();const ng={apiKey:"AIzaSyC4Ge5BojUJkC4_kvSkj9a4johP4tOd7RA",authDomain:"great-unknown.firebaseapp.com",projectId:"great-unknown",storageBucket:"great-unknown.firebasestorage.app",messagingSenderId:"199011519338",appId:"1:199011519338:web:86c235a1af6ac6e0b8f313",measurementId:"G-JDQ21T5BBY"},Cc=Ea(ng);Qp(Cc);const rg=Mh(Cc);/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ii(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},an=[],Ge=()=>{},sg=()=>!1,Mr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oi=t=>t.startsWith("onUpdate:"),he=Object.assign,ai=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ig=Object.prototype.hasOwnProperty,Y=(t,e)=>ig.call(t,e),B=Array.isArray,cn=t=>Lr(t)==="[object Map]",Ac=t=>Lr(t)==="[object Set]",H=t=>typeof t=="function",ce=t=>typeof t=="string",Dt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Rc=t=>(oe(t)||H(t))&&H(t.then)&&H(t.catch),Pc=Object.prototype.toString,Lr=t=>Pc.call(t),og=t=>Lr(t).slice(8,-1),Oc=t=>Lr(t)==="[object Object]",ci=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cn=ii(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ur=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ag=/-(\w)/g,De=Ur(t=>t.replace(ag,(e,n)=>n?n.toUpperCase():"")),cg=/\B([A-Z])/g,Jt=Ur(t=>t.replace(cg,"-$1").toLowerCase()),Fr=Ur(t=>t.charAt(0).toUpperCase()+t.slice(1)),ns=Ur(t=>t?`on${Fr(t)}`:""),kt=(t,e)=>!Object.is(t,e),rs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cs=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},lg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _o;const $r=()=>_o||(_o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function li(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?hg(r):li(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ce(t)||oe(t))return t}const ug=/;(?![^(]*\))/g,fg=/:([^]+)/,dg=/\/\*[^]*?\*\//g;function hg(t){const e={};return t.replace(dg,"").split(ug).forEach(n=>{if(n){const r=n.split(fg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ui(t){let e="";if(ce(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=ui(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gg=ii(pg);function kc(t){return!!t||t===""}const Dc=t=>!!(t&&t.__v_isRef===!0),mg=t=>ce(t)?t:t==null?"":B(t)||oe(t)&&(t.toString===Pc||!H(t.toString))?Dc(t)?mg(t.value):JSON.stringify(t,Nc,2):String(t),Nc=(t,e)=>Dc(e)?Nc(t,e.value):cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ss(r,i)+" =>"]=s,n),{})}:Ac(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ss(n))}:Dt(e)?ss(e):oe(e)&&!B(e)&&!Oc(e)?String(e):e,ss=(t,e="")=>{var n;return Dt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class xc{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!e&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ue;try{return ue=this,e()}finally{ue=n}}}on(){++this._on===1&&(this.prevScope=ue,ue=this)}off(){this._on>0&&--this._on===0&&(ue=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Mc(t){return new xc(t)}function Lc(){return ue}function _g(t,e=!1){ue&&ue.cleanups.push(t)}let ne;const is=new WeakSet;class Uc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,is.has(this)&&(is.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$c(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yo(this),Bc(this);const e=ne,n=Me;ne=this,Me=!0;try{return this.fn()}finally{Hc(this),ne=e,Me=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hi(e);this.deps=this.depsTail=void 0,yo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?is.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){As(this)&&this.run()}get dirty(){return As(this)}}let Fc=0,An,Rn;function $c(t,e=!1){if(t.flags|=8,e){t.next=Rn,Rn=t;return}t.next=An,An=t}function fi(){Fc++}function di(){if(--Fc>0)return;if(Rn){let e=Rn;for(Rn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;An;){let e=An;for(An=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Bc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),hi(r),yg(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function As(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Vc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$n)||(t.globalVersion=$n,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!As(t))))return;t.flags|=2;const e=t.dep,n=ne,r=Me;ne=t,Me=!0;try{Bc(t);const s=t.fn(t._value);(e.version===0||kt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ne=n,Me=r,Hc(t),t.flags&=-3}}function hi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Me=!0;const jc=[];function dt(){jc.push(Me),Me=!1}function ht(){const t=jc.pop();Me=t===void 0?!0:t}function yo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let $n=0;class bg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ne||!Me||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new bg(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Wc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=r)}return n}trigger(e){this.version++,$n++,this.notify(e)}notify(e){fi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{di()}}}function Wc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Er=new WeakMap,Bt=Symbol(""),Rs=Symbol(""),Bn=Symbol("");function fe(t,e,n){if(Me&&ne){let r=Er.get(t);r||Er.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new pi),s.map=r,s.key=n),s.track()}}function it(t,e,n,r,s,i){const o=Er.get(t);if(!o){$n++;return}const a=c=>{c&&c.trigger()};if(fi(),e==="clear")o.forEach(a);else{const c=B(t),l=c&&ci(n);if(c&&n==="length"){const u=Number(r);o.forEach((d,h)=>{(h==="length"||h===Bn||!Dt(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Bn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Bt)),cn(t)&&a(o.get(Rs)));break;case"delete":c||(a(o.get(Bt)),cn(t)&&a(o.get(Rs)));break;case"set":cn(t)&&a(o.get(Bt));break}}di()}function wg(t,e){const n=Er.get(t);return n&&n.get(e)}function Qt(t){const e=q(t);return e===t?e:(fe(e,"iterate",Bn),Le(t)?e:e.map(me))}function gi(t){return fe(t=q(t),"iterate",Bn),t}const vg={__proto__:null,[Symbol.iterator](){return os(this,Symbol.iterator,me)},concat(...t){return Qt(this).concat(...t.map(e=>B(e)?Qt(e):e))},entries(){return os(this,"entries",t=>(t[1]=me(t[1]),t))},every(t,e){return et(this,"every",t,e,void 0,arguments)},filter(t,e){return et(this,"filter",t,e,n=>n.map(me),arguments)},find(t,e){return et(this,"find",t,e,me,arguments)},findIndex(t,e){return et(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return et(this,"findLast",t,e,me,arguments)},findLastIndex(t,e){return et(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return et(this,"forEach",t,e,void 0,arguments)},includes(...t){return as(this,"includes",t)},indexOf(...t){return as(this,"indexOf",t)},join(t){return Qt(this).join(t)},lastIndexOf(...t){return as(this,"lastIndexOf",t)},map(t,e){return et(this,"map",t,e,void 0,arguments)},pop(){return bn(this,"pop")},push(...t){return bn(this,"push",t)},reduce(t,...e){return bo(this,"reduce",t,e)},reduceRight(t,...e){return bo(this,"reduceRight",t,e)},shift(){return bn(this,"shift")},some(t,e){return et(this,"some",t,e,void 0,arguments)},splice(...t){return bn(this,"splice",t)},toReversed(){return Qt(this).toReversed()},toSorted(t){return Qt(this).toSorted(t)},toSpliced(...t){return Qt(this).toSpliced(...t)},unshift(...t){return bn(this,"unshift",t)},values(){return os(this,"values",me)}};function os(t,e,n){const r=gi(t),s=r[e]();return r!==t&&!Le(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ig=Array.prototype;function et(t,e,n,r,s,i){const o=gi(t),a=o!==t&&!Le(t),c=o[e];if(c!==Ig[e]){const d=c.apply(t,i);return a?me(d):d}let l=n;o!==t&&(a?l=function(d,h){return n.call(this,me(d),h,t)}:n.length>2&&(l=function(d,h){return n.call(this,d,h,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function bo(t,e,n,r){const s=gi(t);let i=n;return s!==t&&(Le(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,me(a),c,t)}),s[e](i,...r)}function as(t,e,n){const r=q(t);fe(r,"iterate",Bn);const s=r[e](...n);return(s===-1||s===!1)&&yi(n[0])?(n[0]=q(n[0]),r[e](...n)):s}function bn(t,e,n=[]){dt(),fi();const r=q(t)[e].apply(t,n);return di(),ht(),r}const Eg=ii("__proto__,__v_isRef,__isVue"),zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dt));function Sg(t){Dt(t)||(t=String(t));const e=q(this);return fe(e,"has",t),e.hasOwnProperty(t)}class Kc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xg:Yc:i?Jc:Gc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=B(e);if(!s){let c;if(o&&(c=vg[n]))return c;if(n==="hasOwnProperty")return Sg}const a=Reflect.get(e,n,ae(e)?e:r);return(Dt(n)?zc.has(n):Eg(n))||(s||fe(e,"get",n),i)?a:ae(a)?o&&ci(n)?a:a.value:oe(a)?s?Qc(a):Xn(a):a}}class qc extends Kc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=qt(i);if(!Le(r)&&!qt(r)&&(i=q(i),r=q(r)),!B(e)&&ae(i)&&!ae(r))return c?!1:(i.value=r,!0)}const o=B(e)&&ci(n)?Number(n)<e.length:Y(e,n),a=Reflect.set(e,n,r,ae(e)?e:s);return e===q(s)&&(o?kt(r,i)&&it(e,"set",n,r):it(e,"add",n,r)),a}deleteProperty(e,n){const r=Y(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&it(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dt(n)||!zc.has(n))&&fe(e,"has",n),r}ownKeys(e){return fe(e,"iterate",B(e)?"length":Bt),Reflect.ownKeys(e)}}class Tg extends Kc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Cg=new qc,Ag=new Tg,Rg=new qc(!0);const Ps=t=>t,nr=t=>Reflect.getPrototypeOf(t);function Pg(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=cn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ps:e?Os:me;return!e&&fe(i,"iterate",c?Rs:Bt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function rr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Og(t,e){const n={get(s){const i=this.__v_raw,o=q(i),a=q(s);t||(kt(s,a)&&fe(o,"get",s),fe(o,"get",a));const{has:c}=nr(o),l=e?Ps:t?Os:me;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&fe(q(s),"iterate",Bt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=q(i),a=q(s);return t||(kt(s,a)&&fe(o,"has",s),fe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=q(a),l=e?Ps:t?Os:me;return!t&&fe(c,"iterate",Bt),a.forEach((u,d)=>s.call(i,l(u),l(d),o))}};return he(n,t?{add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear")}:{add(s){!e&&!Le(s)&&!qt(s)&&(s=q(s));const i=q(this);return nr(i).has.call(i,s)||(i.add(s),it(i,"add",s,s)),this},set(s,i){!e&&!Le(i)&&!qt(i)&&(i=q(i));const o=q(this),{has:a,get:c}=nr(o);let l=a.call(o,s);l||(s=q(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?kt(i,u)&&it(o,"set",s,i):it(o,"add",s,i),this},delete(s){const i=q(this),{has:o,get:a}=nr(i);let c=o.call(i,s);c||(s=q(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&it(i,"delete",s,void 0),l},clear(){const s=q(this),i=s.size!==0,o=s.clear();return i&&it(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Pg(s,t,e)}),n}function mi(t,e){const n=Og(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,i)}const kg={get:mi(!1,!1)},Dg={get:mi(!1,!0)},Ng={get:mi(!0,!1)};const Gc=new WeakMap,Jc=new WeakMap,Yc=new WeakMap,xg=new WeakMap;function Mg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lg(t){return t.__v_skip||!Object.isExtensible(t)?0:Mg(og(t))}function Xn(t){return qt(t)?t:_i(t,!1,Cg,kg,Gc)}function Xc(t){return _i(t,!1,Rg,Dg,Jc)}function Qc(t){return _i(t,!0,Ag,Ng,Yc)}function _i(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Lg(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Ht(t){return qt(t)?Ht(t.__v_raw):!!(t&&t.__v_isReactive)}function qt(t){return!!(t&&t.__v_isReadonly)}function Le(t){return!!(t&&t.__v_isShallow)}function yi(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function bi(t){return!Y(t,"__v_skip")&&Object.isExtensible(t)&&Cs(t,"__v_skip",!0),t}const me=t=>oe(t)?Xn(t):t,Os=t=>oe(t)?Qc(t):t;function ae(t){return t?t.__v_isRef===!0:!1}function wi(t){return Zc(t,!1)}function Ug(t){return Zc(t,!0)}function Zc(t,e){return ae(t)?t:new Fg(t,e)}class Fg{constructor(e,n){this.dep=new pi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:me(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Le(e)||qt(e);e=r?e:q(e),kt(e,n)&&(this._rawValue=e,this._value=r?e:me(e),this.dep.trigger())}}function ln(t){return ae(t)?t.value:t}const $g={get:(t,e,n)=>e==="__v_raw"?t:ln(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ae(s)&&!ae(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function el(t){return Ht(t)?t:new Proxy(t,$g)}function Bg(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=Vg(t,n);return e}class Hg{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wg(q(this._object),this._key)}}function Vg(t,e,n){const r=t[e];return ae(r)?r:new Hg(t,e,n)}class jg{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$n-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return $c(this,!0),!0}get value(){const e=this.dep.track();return Vc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wg(t,e,n=!1){let r,s;return H(t)?r=t:(r=t.get,s=t.set),new jg(r,s,n)}const sr={},Sr=new WeakMap;let Ut;function zg(t,e=!1,n=Ut){if(n){let r=Sr.get(n);r||Sr.set(n,r=[]),r.push(t)}}function Kg(t,e,n=re){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=k=>s?k:Le(k)||s===!1||s===0?Rt(k,1):Rt(k);let u,d,h,m,I=!1,R=!1;if(ae(t)?(d=()=>t.value,I=Le(t)):Ht(t)?(d=()=>l(t),I=!0):B(t)?(R=!0,I=t.some(k=>Ht(k)||Le(k)),d=()=>t.map(k=>{if(ae(k))return k.value;if(Ht(k))return l(k);if(H(k))return c?c(k,2):k()})):H(t)?e?d=c?()=>c(t,2):t:d=()=>{if(h){dt();try{h()}finally{ht()}}const k=Ut;Ut=u;try{return c?c(t,3,[m]):t(m)}finally{Ut=k}}:d=Ge,e&&s){const k=d,j=s===!0?1/0:s;d=()=>Rt(k(),j)}const U=Lc(),D=()=>{u.stop(),U&&U.active&&ai(U.effects,u)};if(i&&e){const k=e;e=(...j)=>{k(...j),D()}}let O=R?new Array(t.length).fill(sr):sr;const N=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const j=u.run();if(s||I||(R?j.some((le,X)=>kt(le,O[X])):kt(j,O))){h&&h();const le=Ut;Ut=u;try{const X=[j,O===sr?void 0:R&&O[0]===sr?[]:O,m];O=j,c?c(e,3,X):e(...X)}finally{Ut=le}}}else u.run()};return a&&a(N),u=new Uc(d),u.scheduler=o?()=>o(N,!1):N,m=k=>zg(k,!1,u),h=u.onStop=()=>{const k=Sr.get(u);if(k){if(c)c(k,4);else for(const j of k)j();Sr.delete(u)}},e?r?N(!0):O=u.run():o?o(N.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function Rt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ae(t))Rt(t.value,e,n);else if(B(t))for(let r=0;r<t.length;r++)Rt(t[r],e,n);else if(Ac(t)||cn(t))t.forEach(r=>{Rt(r,e,n)});else if(Oc(t)){for(const r in t)Rt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Rt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qn(t,e,n,r){try{return r?t(...r):t()}catch(s){Br(s,e,n)}}function Xe(t,e,n,r){if(H(t)){const s=Qn(t,e,n,r);return s&&Rc(s)&&s.catch(i=>{Br(i,e,n)}),s}if(B(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xe(t[i],e,n,r));return s}}function Br(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(i){dt(),Qn(i,null,10,[t,c,l]),ht();return}}qg(t,n,s,r,o)}function qg(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _e=[];let je=-1;const un=[];let vt=null,en=0;const tl=Promise.resolve();let Tr=null;function vi(t){const e=Tr||tl;return t?e.then(this?t.bind(this):t):e}function Gg(t){let e=je+1,n=_e.length;for(;e<n;){const r=e+n>>>1,s=_e[r],i=Hn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ii(t){if(!(t.flags&1)){const e=Hn(t),n=_e[_e.length-1];!n||!(t.flags&2)&&e>=Hn(n)?_e.push(t):_e.splice(Gg(e),0,t),t.flags|=1,nl()}}function nl(){Tr||(Tr=tl.then(sl))}function Jg(t){B(t)?un.push(...t):vt&&t.id===-1?vt.splice(en+1,0,t):t.flags&1||(un.push(t),t.flags|=1),nl()}function wo(t,e,n=je+1){for(;n<_e.length;n++){const r=_e[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_e.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function rl(t){if(un.length){const e=[...new Set(un)].sort((n,r)=>Hn(n)-Hn(r));if(un.length=0,vt){vt.push(...e);return}for(vt=e,en=0;en<vt.length;en++){const n=vt[en];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vt=null,en=0}}const Hn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function sl(t){try{for(je=0;je<_e.length;je++){const e=_e[je];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;je<_e.length;je++){const e=_e[je];e&&(e.flags&=-2)}je=-1,_e.length=0,rl(),Tr=null,(_e.length||un.length)&&sl()}}let xe=null,il=null;function Cr(t){const e=xe;return xe=t,il=t&&t.type.__scopeId||null,e}function Yg(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oo(-1);const i=Cr(e);let o;try{o=t(...s)}finally{Cr(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(dt(),Xe(c,n,8,[t.el,a,t,e]),ht())}}const Xg=Symbol("_vte"),Qg=t=>t.__isTeleport;function Ei(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ei(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ol(t,e){return H(t)?he({name:t.name},e,{setup:t}):t}function al(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Pn(t,e,n,r,s=!1){if(B(t)){t.forEach((I,R)=>Pn(I,e&&(B(e)?e[R]:e),n,r,s));return}if(On(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Pn(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ai(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,d=a.setupState,h=q(d),m=d===re?()=>!1:I=>Y(h,I);if(l!=null&&l!==c&&(ce(l)?(u[l]=null,m(l)&&(d[l]=null)):ae(l)&&(l.value=null)),H(c))Qn(c,a,12,[o,u]);else{const I=ce(c),R=ae(c);if(I||R){const U=()=>{if(t.f){const D=I?m(c)?d[c]:u[c]:c.value;s?B(D)&&ai(D,i):B(D)?D.includes(i)||D.push(i):I?(u[c]=[i],m(c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else I?(u[c]=o,m(c)&&(d[c]=o)):R&&(c.value=o,t.k&&(u[t.k]=o))};o?(U.id=-1,Ce(U,n)):U()}}}$r().requestIdleCallback;$r().cancelIdleCallback;const On=t=>!!t.type.__asyncLoader,cl=t=>t.type.__isKeepAlive;function Zg(t,e){ll(t,"a",e)}function em(t,e){ll(t,"da",e)}function ll(t,e,n=de){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Hr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cl(s.parent.vnode)&&tm(r,e,n,s),s=s.parent}}function tm(t,e,n,r){const s=Hr(e,t,r,!0);ul(()=>{ai(r[e],s)},n)}function Hr(t,e,n=de,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{dt();const a=Zn(n),c=Xe(e,n,t,o);return a(),ht(),c});return r?s.unshift(i):s.push(i),i}}const gt=t=>(e,n=de)=>{(!jn||t==="sp")&&Hr(t,(...r)=>e(...r),n)},nm=gt("bm"),rm=gt("m"),sm=gt("bu"),im=gt("u"),om=gt("bum"),ul=gt("um"),am=gt("sp"),cm=gt("rtg"),lm=gt("rtc");function um(t,e=de){Hr("ec",t,e)}const fm="components";function dm(t,e){return pm(fm,t,!0,e)||t}const hm=Symbol.for("v-ndc");function pm(t,e,n=!0,r=!1){const s=xe||de;if(s){const i=s.type;{const a=i_(i,!1);if(a&&(a===e||a===De(e)||a===Fr(De(e))))return i}const o=vo(s[t]||i[t],e)||vo(s.appContext[t],e);return!o&&r?i:o}}function vo(t,e){return t&&(t[e]||t[De(e)]||t[Fr(De(e))])}const ks=t=>t?kl(t)?Ai(t):ks(t.parent):null,kn=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ks(t.parent),$root:t=>ks(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dl(t),$forceUpdate:t=>t.f||(t.f=()=>{Ii(t.update)}),$nextTick:t=>t.n||(t.n=vi.bind(t.proxy)),$watch:t=>Lm.bind(t)}),cs=(t,e)=>t!==re&&!t.__isScriptSetup&&Y(t,e),gm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(cs(r,e))return o[e]=1,r[e];if(s!==re&&Y(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Y(l,e))return o[e]=3,i[e];if(n!==re&&Y(n,e))return o[e]=4,n[e];Ds&&(o[e]=0)}}const u=kn[e];let d,h;if(u)return e==="$attrs"&&fe(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==re&&Y(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Y(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return cs(s,e)?(s[e]=n,!0):r!==re&&Y(r,e)?(r[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==re&&Y(t,o)||cs(e,o)||(a=i[0])&&Y(a,o)||Y(r,o)||Y(kn,o)||Y(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Io(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ds=!0;function mm(t){const e=dl(t),n=t.proxy,r=t.ctx;Ds=!1,e.beforeCreate&&Eo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:I,activated:R,deactivated:U,beforeDestroy:D,beforeUnmount:O,destroyed:N,unmounted:k,render:j,renderTracked:le,renderTriggered:X,errorCaptured:W,serverPrefetch:z,expose:ie,inheritAttrs:pe,components:Se,directives:be,filters:Nt}=e;if(l&&_m(l,r,null),o)for(const V in o){const G=o[V];H(G)&&(r[V]=G.bind(n))}if(s){const V=s.call(n,n);oe(V)&&(t.data=Xn(V))}if(Ds=!0,i)for(const V in i){const G=i[V],Ze=H(G)?G.bind(n,n):H(G.get)?G.get.bind(n,n):Ge,_t=!H(G)&&H(G.set)?G.set.bind(n):Ge,Fe=ke({get:Ze,set:_t});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:we=>Fe.value=we})}if(a)for(const V in a)fl(a[V],r,n,V);if(c){const V=H(c)?c.call(n):c;Reflect.ownKeys(V).forEach(G=>{ur(G,V[G])})}u&&Eo(u,t,"c");function se(V,G){B(G)?G.forEach(Ze=>V(Ze.bind(n))):G&&V(G.bind(n))}if(se(nm,d),se(rm,h),se(sm,m),se(im,I),se(Zg,R),se(em,U),se(um,W),se(lm,le),se(cm,X),se(om,O),se(ul,k),se(am,z),B(ie))if(ie.length){const V=t.exposed||(t.exposed={});ie.forEach(G=>{Object.defineProperty(V,G,{get:()=>n[G],set:Ze=>n[G]=Ze,enumerable:!0})})}else t.exposed||(t.exposed={});j&&t.render===Ge&&(t.render=j),pe!=null&&(t.inheritAttrs=pe),Se&&(t.components=Se),be&&(t.directives=be),z&&al(t)}function _m(t,e,n=Ge){B(t)&&(t=Ns(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=Je(s.from||r,s.default,!0):i=Je(s.from||r):i=Je(s),ae(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Eo(t,e,n){Xe(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fl(t,e,n,r){let s=r.includes(".")?Tl(n,r):()=>n[r];if(ce(t)){const i=e[t];H(i)&&Dn(s,i)}else if(H(t))Dn(s,t.bind(n));else if(oe(t))if(B(t))t.forEach(i=>fl(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Dn(s,i,t)}}function dl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ar(c,l,o,!0)),Ar(c,e,o)),oe(e)&&i.set(e,c),c}function Ar(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ar(t,i,n,!0),s&&s.forEach(o=>Ar(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ym[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ym={data:So,props:To,emits:To,methods:In,computed:In,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:In,directives:In,watch:wm,provide:So,inject:bm};function So(t,e){return e?t?function(){return he(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function bm(t,e){return In(Ns(t),Ns(e))}function Ns(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function In(t,e){return t?he(Object.create(null),t,e):e}function To(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:he(Object.create(null),Io(t),Io(e??{})):e}function wm(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const r in e)n[r]=ge(t[r],e[r]);return n}function hl(){return{app:null,config:{isNativeTag:sg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vm=0;function Im(t,e){return function(r,s=null){H(r)||(r=he({},r)),s!=null&&!oe(s)&&(s=null);const i=hl(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:vm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:a_,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(l,...d)):H(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,h){if(!c){const m=l._ceVNode||Re(r,s);return m.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(m,u,h),c=!0,l._container=u,u.__vue_app__=l,Ai(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Xe(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Vt;Vt=l;try{return u()}finally{Vt=d}}};return l}}let Vt=null;function ur(t,e){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[t]=e}}function Je(t,e,n=!1){const r=Ol();if(r||Vt){let s=Vt?Vt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function Em(){return!!(Ol()||Vt)}const pl={},gl=()=>Object.create(pl),ml=t=>Object.getPrototypeOf(t)===pl;function Sm(t,e,n,r=!1){const s={},i=gl();t.propsDefaults=Object.create(null),_l(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Tm(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Vr(t.emitsOptions,h))continue;const m=e[h];if(c)if(Y(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const I=De(h);s[I]=xs(c,a,I,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{_l(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!Y(e,d)&&((u=Jt(d))===d||!Y(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=xs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Y(e,d))&&(delete i[d],l=!0)}l&&it(t.attrs,"set","")}function _l(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Cn(c))continue;const l=e[c];let u;s&&Y(s,u=De(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Vr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=q(n),l=a||re;for(let u=0;u<i.length;u++){const d=i[u];n[d]=xs(s,c,d,l[d],t,!Y(l,d))}}return o}function xs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Zn(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Jt(n))&&(r=!0))}return r}const Cm=new WeakMap;function yl(t,e,n=!1){const r=n?Cm:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=d=>{c=!0;const[h,m]=yl(d,e,!0);he(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return oe(t)&&r.set(t,an),an;if(B(i))for(let u=0;u<i.length;u++){const d=De(i[u]);Co(d)&&(o[d]=re)}else if(i)for(const u in i){const d=De(u);if(Co(d)){const h=i[u],m=o[d]=B(h)||H(h)?{type:h}:he({},h),I=m.type;let R=!1,U=!0;if(B(I))for(let D=0;D<I.length;++D){const O=I[D],N=H(O)&&O.name;if(N==="Boolean"){R=!0;break}else N==="String"&&(U=!1)}else R=H(I)&&I.name==="Boolean";m[0]=R,m[1]=U,(R||Y(m,"default"))&&a.push(d)}}const l=[o,a];return oe(t)&&r.set(t,l),l}function Co(t){return t[0]!=="$"&&!Cn(t)}const Si=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Ti=t=>B(t)?t.map(We):[We(t)],Am=(t,e,n)=>{if(e._n)return e;const r=Yg((...s)=>Ti(e(...s)),n);return r._c=!1,r},bl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Si(s))continue;const i=t[s];if(H(i))e[s]=Am(s,i,r);else if(i!=null){const o=Ti(i);e[s]=()=>o}}},wl=(t,e)=>{const n=Ti(e);t.slots.default=()=>n},vl=(t,e,n)=>{for(const r in e)(n||!Si(r))&&(t[r]=e[r])},Rm=(t,e,n)=>{const r=t.slots=gl();if(t.vnode.shapeFlag&32){const s=e.__;s&&Cs(r,"__",s,!0);const i=e._;i?(vl(r,e,n),n&&Cs(r,"_",i,!0)):bl(e,r)}else e&&wl(t,e)},Pm=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:vl(s,e,n):(i=!e.$stable,bl(e,s)),o=e}else e&&(wl(t,e),o={default:1});if(i)for(const a in s)!Si(a)&&o[a]==null&&delete s[a]},Ce=jm;function Om(t){return km(t)}function km(t,e){const n=$r();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Ge,insertStaticContent:I}=t,R=(f,p,g,_=null,w=null,b=null,T=void 0,S=null,E=!!p.dynamicChildren)=>{if(f===p)return;f&&!wn(f,p)&&(_=y(f),we(f,w,b,!0),f=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:v,ref:L,shapeFlag:A}=p;switch(v){case jr:U(f,p,g,_);break;case dn:D(f,p,g,_);break;case fr:f==null&&O(p,g,_,T);break;case rt:Se(f,p,g,_,w,b,T,S,E);break;default:A&1?j(f,p,g,_,w,b,T,S,E):A&6?be(f,p,g,_,w,b,T,S,E):(A&64||A&128)&&v.process(f,p,g,_,w,b,T,S,E,x)}L!=null&&w?Pn(L,f&&f.ref,b,p||f,!p):L==null&&f&&f.ref!=null&&Pn(f.ref,null,b,f,!0)},U=(f,p,g,_)=>{if(f==null)r(p.el=a(p.children),g,_);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},D=(f,p,g,_)=>{f==null?r(p.el=c(p.children||""),g,_):p.el=f.el},O=(f,p,g,_)=>{[f.el,f.anchor]=I(f.children,p,g,_,f.el,f.anchor)},N=({el:f,anchor:p},g,_)=>{let w;for(;f&&f!==p;)w=h(f),r(f,g,_),f=w;r(p,g,_)},k=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),s(f),f=g;s(p)},j=(f,p,g,_,w,b,T,S,E)=>{p.type==="svg"?T="svg":p.type==="math"&&(T="mathml"),f==null?le(p,g,_,w,b,T,S,E):z(f,p,w,b,T,S,E)},le=(f,p,g,_,w,b,T,S)=>{let E,v;const{props:L,shapeFlag:A,transition:M,dirs:$}=f;if(E=f.el=o(f.type,b,L&&L.is,L),A&8?u(E,f.children):A&16&&W(f.children,E,null,_,w,ls(f,b),T,S),$&&xt(f,null,_,"created"),X(E,f,f.scopeId,T,_),L){for(const te in L)te!=="value"&&!Cn(te)&&i(E,te,null,L[te],b,_);"value"in L&&i(E,"value",null,L.value,b),(v=L.onVnodeBeforeMount)&&Ve(v,_,f)}$&&xt(f,null,_,"beforeMount");const K=Dm(w,M);K&&M.beforeEnter(E),r(E,p,g),((v=L&&L.onVnodeMounted)||K||$)&&Ce(()=>{v&&Ve(v,_,f),K&&M.enter(E),$&&xt(f,null,_,"mounted")},w)},X=(f,p,g,_,w)=>{if(g&&m(f,g),_)for(let b=0;b<_.length;b++)m(f,_[b]);if(w){let b=w.subTree;if(p===b||Al(b.type)&&(b.ssContent===p||b.ssFallback===p)){const T=w.vnode;X(f,T,T.scopeId,T.slotScopeIds,w.parent)}}},W=(f,p,g,_,w,b,T,S,E=0)=>{for(let v=E;v<f.length;v++){const L=f[v]=S?It(f[v]):We(f[v]);R(null,L,p,g,_,w,b,T,S)}},z=(f,p,g,_,w,b,T)=>{const S=p.el=f.el;let{patchFlag:E,dynamicChildren:v,dirs:L}=p;E|=f.patchFlag&16;const A=f.props||re,M=p.props||re;let $;if(g&&Mt(g,!1),($=M.onVnodeBeforeUpdate)&&Ve($,g,p,f),L&&xt(p,f,g,"beforeUpdate"),g&&Mt(g,!0),(A.innerHTML&&M.innerHTML==null||A.textContent&&M.textContent==null)&&u(S,""),v?ie(f.dynamicChildren,v,S,g,_,ls(p,w),b):T||G(f,p,S,null,g,_,ls(p,w),b,!1),E>0){if(E&16)pe(S,A,M,g,w);else if(E&2&&A.class!==M.class&&i(S,"class",null,M.class,w),E&4&&i(S,"style",A.style,M.style,w),E&8){const K=p.dynamicProps;for(let te=0;te<K.length;te++){const Q=K[te],ve=A[Q],Ie=M[Q];(Ie!==ve||Q==="value")&&i(S,Q,ve,Ie,w,g)}}E&1&&f.children!==p.children&&u(S,p.children)}else!T&&v==null&&pe(S,A,M,g,w);(($=M.onVnodeUpdated)||L)&&Ce(()=>{$&&Ve($,g,p,f),L&&xt(p,f,g,"updated")},_)},ie=(f,p,g,_,w,b,T)=>{for(let S=0;S<p.length;S++){const E=f[S],v=p[S],L=E.el&&(E.type===rt||!wn(E,v)||E.shapeFlag&198)?d(E.el):g;R(E,v,L,null,_,w,b,T,!0)}},pe=(f,p,g,_,w)=>{if(p!==g){if(p!==re)for(const b in p)!Cn(b)&&!(b in g)&&i(f,b,p[b],null,w,_);for(const b in g){if(Cn(b))continue;const T=g[b],S=p[b];T!==S&&b!=="value"&&i(f,b,S,T,w,_)}"value"in g&&i(f,"value",p.value,g.value,w)}},Se=(f,p,g,_,w,b,T,S,E)=>{const v=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:$}=p;$&&(S=S?S.concat($):$),f==null?(r(v,g,_),r(L,g,_),W(p.children||[],g,L,w,b,T,S,E)):A>0&&A&64&&M&&f.dynamicChildren?(ie(f.dynamicChildren,M,g,w,b,T,S),(p.key!=null||w&&p===w.subTree)&&Il(f,p,!0)):G(f,p,g,L,w,b,T,S,E)},be=(f,p,g,_,w,b,T,S,E)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?w.ctx.activate(p,g,_,T,E):Nt(p,g,_,w,b,T,E):mt(f,p,E)},Nt=(f,p,g,_,w,b,T)=>{const S=f.component=e_(f,_,w);if(cl(f)&&(S.ctx.renderer=x),t_(S,!1,T),S.asyncDep){if(w&&w.registerDep(S,se,T),!f.el){const E=S.subTree=Re(dn);D(null,E,p,g),f.placeholder=E.el}}else se(S,f,p,g,w,b,T)},mt=(f,p,g)=>{const _=p.component=f.component;if(Hm(f,p,g))if(_.asyncDep&&!_.asyncResolved){V(_,p,g);return}else _.next=p,_.update();else p.el=f.el,_.vnode=p},se=(f,p,g,_,w,b,T)=>{const S=()=>{if(f.isMounted){let{next:A,bu:M,u:$,parent:K,vnode:te}=f;{const Be=El(f);if(Be){A&&(A.el=te.el,V(f,A,T)),Be.asyncDep.then(()=>{f.isUnmounted||S()});return}}let Q=A,ve;Mt(f,!1),A?(A.el=te.el,V(f,A,T)):A=te,M&&rs(M),(ve=A.props&&A.props.onVnodeBeforeUpdate)&&Ve(ve,K,A,te),Mt(f,!0);const Ie=Ro(f),$e=f.subTree;f.subTree=Ie,R($e,Ie,d($e.el),y($e),f,w,b),A.el=Ie.el,Q===null&&Vm(f,Ie.el),$&&Ce($,w),(ve=A.props&&A.props.onVnodeUpdated)&&Ce(()=>Ve(ve,K,A,te),w)}else{let A;const{el:M,props:$}=p,{bm:K,m:te,parent:Q,root:ve,type:Ie}=f,$e=On(p);Mt(f,!1),K&&rs(K),!$e&&(A=$&&$.onVnodeBeforeMount)&&Ve(A,Q,p),Mt(f,!0);{ve.ce&&ve.ce._def.shadowRoot!==!1&&ve.ce._injectChildStyle(Ie);const Be=f.subTree=Ro(f);R(null,Be,g,_,f,w,b),p.el=Be.el}if(te&&Ce(te,w),!$e&&(A=$&&$.onVnodeMounted)){const Be=p;Ce(()=>Ve(A,Q,Be),w)}(p.shapeFlag&256||Q&&On(Q.vnode)&&Q.vnode.shapeFlag&256)&&f.a&&Ce(f.a,w),f.isMounted=!0,p=g=_=null}};f.scope.on();const E=f.effect=new Uc(S);f.scope.off();const v=f.update=E.run.bind(E),L=f.job=E.runIfDirty.bind(E);L.i=f,L.id=f.uid,E.scheduler=()=>Ii(L),Mt(f,!0),v()},V=(f,p,g)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Tm(f,p.props,_,g),Pm(f,p.children,g),dt(),wo(f),ht()},G=(f,p,g,_,w,b,T,S,E=!1)=>{const v=f&&f.children,L=f?f.shapeFlag:0,A=p.children,{patchFlag:M,shapeFlag:$}=p;if(M>0){if(M&128){_t(v,A,g,_,w,b,T,S,E);return}else if(M&256){Ze(v,A,g,_,w,b,T,S,E);return}}$&8?(L&16&&Oe(v,w,b),A!==v&&u(g,A)):L&16?$&16?_t(v,A,g,_,w,b,T,S,E):Oe(v,w,b,!0):(L&8&&u(g,""),$&16&&W(A,g,_,w,b,T,S,E))},Ze=(f,p,g,_,w,b,T,S,E)=>{f=f||an,p=p||an;const v=f.length,L=p.length,A=Math.min(v,L);let M;for(M=0;M<A;M++){const $=p[M]=E?It(p[M]):We(p[M]);R(f[M],$,g,null,w,b,T,S,E)}v>L?Oe(f,w,b,!0,!1,A):W(p,g,_,w,b,T,S,E,A)},_t=(f,p,g,_,w,b,T,S,E)=>{let v=0;const L=p.length;let A=f.length-1,M=L-1;for(;v<=A&&v<=M;){const $=f[v],K=p[v]=E?It(p[v]):We(p[v]);if(wn($,K))R($,K,g,null,w,b,T,S,E);else break;v++}for(;v<=A&&v<=M;){const $=f[A],K=p[M]=E?It(p[M]):We(p[M]);if(wn($,K))R($,K,g,null,w,b,T,S,E);else break;A--,M--}if(v>A){if(v<=M){const $=M+1,K=$<L?p[$].el:_;for(;v<=M;)R(null,p[v]=E?It(p[v]):We(p[v]),g,K,w,b,T,S,E),v++}}else if(v>M)for(;v<=A;)we(f[v],w,b,!0),v++;else{const $=v,K=v,te=new Map;for(v=K;v<=M;v++){const Te=p[v]=E?It(p[v]):We(p[v]);Te.key!=null&&te.set(Te.key,v)}let Q,ve=0;const Ie=M-K+1;let $e=!1,Be=0;const yn=new Array(Ie);for(v=0;v<Ie;v++)yn[v]=0;for(v=$;v<=A;v++){const Te=f[v];if(ve>=Ie){we(Te,w,b,!0);continue}let He;if(Te.key!=null)He=te.get(Te.key);else for(Q=K;Q<=M;Q++)if(yn[Q-K]===0&&wn(Te,p[Q])){He=Q;break}He===void 0?we(Te,w,b,!0):(yn[He-K]=v+1,He>=Be?Be=He:$e=!0,R(Te,p[He],g,null,w,b,T,S,E),ve++)}const Oi=$e?Nm(yn):an;for(Q=Oi.length-1,v=Ie-1;v>=0;v--){const Te=K+v,He=p[Te],ki=p[Te+1],Di=Te+1<L?ki.el||ki.placeholder:_;yn[v]===0?R(null,He,g,Di,w,b,T,S,E):$e&&(Q<0||v!==Oi[Q]?Fe(He,g,Di,2):Q--)}}},Fe=(f,p,g,_,w=null)=>{const{el:b,type:T,transition:S,children:E,shapeFlag:v}=f;if(v&6){Fe(f.component.subTree,p,g,_);return}if(v&128){f.suspense.move(p,g,_);return}if(v&64){T.move(f,p,g,x);return}if(T===rt){r(b,p,g);for(let A=0;A<E.length;A++)Fe(E[A],p,g,_);r(f.anchor,p,g);return}if(T===fr){N(f,p,g);return}if(_!==2&&v&1&&S)if(_===0)S.beforeEnter(b),r(b,p,g),Ce(()=>S.enter(b),w);else{const{leave:A,delayLeave:M,afterLeave:$}=S,K=()=>{f.ctx.isUnmounted?s(b):r(b,p,g)},te=()=>{A(b,()=>{K(),$&&$()})};M?M(b,K,te):te()}else r(b,p,g)},we=(f,p,g,_=!1,w=!1)=>{const{type:b,props:T,ref:S,children:E,dynamicChildren:v,shapeFlag:L,patchFlag:A,dirs:M,cacheIndex:$}=f;if(A===-2&&(w=!1),S!=null&&(dt(),Pn(S,null,g,f,!0),ht()),$!=null&&(p.renderCache[$]=void 0),L&256){p.ctx.deactivate(f);return}const K=L&1&&M,te=!On(f);let Q;if(te&&(Q=T&&T.onVnodeBeforeUnmount)&&Ve(Q,p,f),L&6)er(f.component,g,_);else{if(L&128){f.suspense.unmount(g,_);return}K&&xt(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,g,x,_):v&&!v.hasOnce&&(b!==rt||A>0&&A&64)?Oe(v,p,g,!1,!0):(b===rt&&A&384||!w&&L&16)&&Oe(E,p,g),_&&Yt(f)}(te&&(Q=T&&T.onVnodeUnmounted)||K)&&Ce(()=>{Q&&Ve(Q,p,f),K&&xt(f,null,p,"unmounted")},g)},Yt=f=>{const{type:p,el:g,anchor:_,transition:w}=f;if(p===rt){Xt(g,_);return}if(p===fr){k(f);return}const b=()=>{s(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:T,delayLeave:S}=w,E=()=>T(g,b);S?S(f.el,b,E):E()}else b()},Xt=(f,p)=>{let g;for(;f!==p;)g=h(f),s(f),f=g;s(p)},er=(f,p,g)=>{const{bum:_,scope:w,job:b,subTree:T,um:S,m:E,a:v,parent:L,slots:{__:A}}=f;Ao(E),Ao(v),_&&rs(_),L&&B(A)&&A.forEach(M=>{L.renderCache[M]=void 0}),w.stop(),b&&(b.flags|=8,we(T,f,p,g)),S&&Ce(S,p),Ce(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Oe=(f,p,g,_=!1,w=!1,b=0)=>{for(let T=b;T<f.length;T++)we(f[T],p,g,_,w)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),g=p&&p[Xg];return g?h(g):p};let P=!1;const C=(f,p,g)=>{f==null?p._vnode&&we(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,g),p._vnode=f,P||(P=!0,wo(),rl(),P=!1)},x={p:R,um:we,m:Fe,r:Yt,mt:Nt,mc:W,pc:G,pbc:ie,n:y,o:t};return{render:C,hydrate:void 0,createApp:Im(C)}}function ls({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Dm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Il(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=It(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Il(o,a)),a.type===jr&&(a.el=o.el),a.type===dn&&!a.el&&(a.el=o.el)}}function Nm(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function El(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:El(e)}function Ao(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const xm=Symbol.for("v-scx"),Mm=()=>Je(xm);function Dn(t,e,n){return Sl(t,e,n)}function Sl(t,e,n=re){const{immediate:r,deep:s,flush:i,once:o}=n,a=he({},n),c=e&&r||!e&&i!=="post";let l;if(jn){if(i==="sync"){const m=Mm();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ge,m.resume=Ge,m.pause=Ge,m}}const u=de;a.call=(m,I,R)=>Xe(m,u,I,R);let d=!1;i==="post"?a.scheduler=m=>{Ce(m,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,I)=>{I?m():Ii(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Kg(t,e,a);return jn&&(l?l.push(h):c&&h()),h}function Lm(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?Tl(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Zn(this),a=Sl(s,i.bind(r),n);return o(),a}function Tl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Um=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${Jt(e)}Modifiers`];function Fm(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&Um(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ce(u)?u.trim():u)),o.number&&(s=n.map(lg)));let a,c=r[a=ns(e)]||r[a=ns(De(e))];!c&&i&&(c=r[a=ns(Jt(e))]),c&&Xe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xe(l,t,6,s)}}function Cl(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=Cl(l,e,!0);u&&(a=!0,he(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):he(o,i),oe(t)&&r.set(t,o),o)}function Vr(t,e){return!t||!Mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,Jt(e))||Y(t,e))}function Ro(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:h,setupState:m,ctx:I,inheritAttrs:R}=t,U=Cr(t);let D,O;try{if(n.shapeFlag&4){const k=s||r,j=k;D=We(l.call(j,k,u,d,m,h,I)),O=a}else{const k=e;D=We(k.length>1?k(d,{attrs:a,slots:o,emit:c}):k(d,null)),O=e.props?a:$m(a)}}catch(k){Nn.length=0,Br(k,t,1),D=Re(dn)}let N=D;if(O&&R!==!1){const k=Object.keys(O),{shapeFlag:j}=N;k.length&&j&7&&(i&&k.some(oi)&&(O=Bm(O,i)),N=hn(N,O,!1,!0))}return n.dirs&&(N=hn(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Ei(N,n.transition),D=N,Cr(U),D}const $m=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mr(n))&&((e||(e={}))[n]=t[n]);return e},Bm=(t,e)=>{const n={};for(const r in t)(!oi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hm(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Po(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Vr(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Po(r,o,l):!0:!!o;return!1}function Po(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Vr(n,i))return!0}return!1}function Vm({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Al=t=>t.__isSuspense;function jm(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Jg(t)}const rt=Symbol.for("v-fgt"),jr=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),Nn=[];let Ae=null;function Wm(t=!1){Nn.push(Ae=t?null:[])}function zm(){Nn.pop(),Ae=Nn[Nn.length-1]||null}let Vn=1;function Oo(t,e=!1){Vn+=t,t<0&&Ae&&e&&(Ae.hasOnce=!0)}function Km(t){return t.dynamicChildren=Vn>0?Ae||an:null,zm(),Vn>0&&Ae&&Ae.push(t),t}function qm(t,e,n,r,s,i){return Km(Pl(t,e,n,r,s,i,!0))}function Rr(t){return t?t.__v_isVNode===!0:!1}function wn(t,e){return t.type===e.type&&t.key===e.key}const Rl=({key:t})=>t??null,dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||ae(t)||H(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function Pl(t,e=null,n=null,r=0,s=null,i=t===rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rl(e),ref:e&&dr(e),scopeId:il,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(Ci(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),Vn>0&&!o&&Ae&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ae.push(c),c}const Re=Gm;function Gm(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===hm)&&(t=dn),Rr(t)){const a=hn(t,e,!0);return n&&Ci(a,n),Vn>0&&!i&&Ae&&(a.shapeFlag&6?Ae[Ae.indexOf(t)]=a:Ae.push(a)),a.patchFlag=-2,a}if(o_(t)&&(t=t.__vccOpts),e){e=Jm(e);let{class:a,style:c}=e;a&&!ce(a)&&(e.class=ui(a)),oe(c)&&(yi(c)&&!B(c)&&(c=he({},c)),e.style=li(c))}const o=ce(t)?1:Al(t)?128:Qg(t)?64:oe(t)?4:H(t)?2:0;return Pl(t,e,n,r,s,o,i,!0)}function Jm(t){return t?yi(t)||ml(t)?he({},t):t:null}function hn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Xm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Rl(l),ref:e&&e.ref?n&&i?B(i)?i.concat(dr(e)):[i,dr(e)]:dr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hn(t.ssContent),ssFallback:t.ssFallback&&hn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ei(u,c.clone(u)),u}function Ym(t=" ",e=0){return Re(jr,null,t,e)}function Zy(t,e){const n=Re(fr,null,t);return n.staticCount=e,n}function We(t){return t==null||typeof t=="boolean"?Re(dn):B(t)?Re(rt,null,t.slice()):Rr(t)?It(t):Re(jr,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hn(t)}function Ci(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ci(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ml(e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[Ym(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ui([e.class,r.class]));else if(s==="style")e.style=li([e.style,r.style]);else if(Mr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){Xe(t,e,7,[n,r])}const Qm=hl();let Zm=0;function e_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Qm,i={uid:Zm++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yl(r,s),emitsOptions:Cl(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Fm.bind(null,i),t.ce&&t.ce(i),i}let de=null;const Ol=()=>de||xe;let Pr,Ms;{const t=$r(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Pr=e("__VUE_INSTANCE_SETTERS__",n=>de=n),Ms=e("__VUE_SSR_SETTERS__",n=>jn=n)}const Zn=t=>{const e=de;return Pr(t),t.scope.on(),()=>{t.scope.off(),Pr(e)}},ko=()=>{de&&de.scope.off(),Pr(null)};function kl(t){return t.vnode.shapeFlag&4}let jn=!1;function t_(t,e=!1,n=!1){e&&Ms(e);const{props:r,children:s}=t.vnode,i=kl(t);Sm(t,r,i,e),Rm(t,s,n||e);const o=i?n_(t,e):void 0;return e&&Ms(!1),o}function n_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gm);const{setup:r}=n;if(r){dt();const s=t.setupContext=r.length>1?s_(t):null,i=Zn(t),o=Qn(r,t,0,[t.props,s]),a=Rc(o);if(ht(),i(),(a||t.sp)&&!On(t)&&al(t),a){if(o.then(ko,ko),e)return o.then(c=>{Do(t,c)}).catch(c=>{Br(c,t,0)});t.asyncDep=o}else Do(t,o)}else Dl(t)}function Do(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=el(e)),Dl(t)}function Dl(t,e,n){const r=t.type;t.render||(t.render=r.render||Ge);{const s=Zn(t);dt();try{mm(t)}finally{ht(),s()}}}const r_={get(t,e){return fe(t,"get",""),t[e]}};function s_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,r_),slots:t.slots,emit:t.emit,expose:e}}function Ai(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(el(bi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in kn)return kn[n](t)},has(e,n){return n in e||n in kn}})):t.proxy}function i_(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function o_(t){return H(t)&&"__vccOpts"in t}const ke=(t,e)=>Wg(t,e,jn);function Nl(t,e,n){const r=arguments.length;return r===2?oe(e)&&!B(e)?Rr(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),Re(t,e,n))}const a_="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ls;const No=typeof window<"u"&&window.trustedTypes;if(No)try{Ls=No.createPolicy("vue",{createHTML:t=>t})}catch{}const xl=Ls?t=>Ls.createHTML(t):t=>t,c_="http://www.w3.org/2000/svg",l_="http://www.w3.org/1998/Math/MathML",nt=typeof document<"u"?document:null,xo=nt&&nt.createElement("template"),u_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?nt.createElementNS(c_,t):e==="mathml"?nt.createElementNS(l_,t):n?nt.createElement(t,{is:n}):nt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nt.createTextNode(t),createComment:t=>nt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xo.innerHTML=xl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=xo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},f_=Symbol("_vtc");function d_(t,e,n){const r=t[f_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mo=Symbol("_vod"),h_=Symbol("_vsh"),p_=Symbol(""),g_=/(^|;)\s*display\s*:/;function m_(t,e,n){const r=t.style,s=ce(n);let i=!1;if(n&&!s){if(e)if(ce(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hr(r,a,"")}else for(const o in e)n[o]==null&&hr(r,o,"");for(const o in n)o==="display"&&(i=!0),hr(r,o,n[o])}else if(s){if(e!==n){const o=r[p_];o&&(n+=";"+o),r.cssText=n,i=g_.test(n)}}else e&&t.removeAttribute("style");Mo in t&&(t[Mo]=i?r.display:"",t[h_]&&(r.display="none"))}const Lo=/\s*!important$/;function hr(t,e,n){if(B(n))n.forEach(r=>hr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=__(t,e);Lo.test(n)?t.setProperty(Jt(r),n.replace(Lo,""),"important"):t[r]=n}}const Uo=["Webkit","Moz","ms"],us={};function __(t,e){const n=us[e];if(n)return n;let r=De(e);if(r!=="filter"&&r in t)return us[e]=r;r=Fr(r);for(let s=0;s<Uo.length;s++){const i=Uo[s]+r;if(i in t)return us[e]=i}return e}const Fo="http://www.w3.org/1999/xlink";function $o(t,e,n,r,s,i=gg(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Fo,e.slice(6,e.length)):t.setAttributeNS(Fo,e,n):n==null||i&&!kc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dt(n)?String(n):n)}function Bo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xl(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=kc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function y_(t,e,n,r){t.addEventListener(e,n,r)}function b_(t,e,n,r){t.removeEventListener(e,n,r)}const Ho=Symbol("_vei");function w_(t,e,n,r,s=null){const i=t[Ho]||(t[Ho]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=v_(e);if(r){const l=i[e]=S_(r,s);y_(t,a,l,c)}else o&&(b_(t,a,o,c),i[e]=void 0)}}const Vo=/(?:Once|Passive|Capture)$/;function v_(t){let e;if(Vo.test(t)){e={};let r;for(;r=t.match(Vo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jt(t.slice(2)),e]}let fs=0;const I_=Promise.resolve(),E_=()=>fs||(I_.then(()=>fs=0),fs=Date.now());function S_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xe(T_(r,n.value),e,5,[r])};return n.value=t,n.attached=E_(),n}function T_(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,C_=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?d_(t,r,o):e==="style"?m_(t,n,r):Mr(e)?oi(e)||w_(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A_(t,e,r,o))?(Bo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$o(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ce(r))?Bo(t,De(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$o(t,e,r,o))};function A_(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&jo(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jo(e)&&ce(n)?!1:e in t}const R_=he({patchProp:C_},u_);let Wo;function P_(){return Wo||(Wo=Om(R_))}const O_=(...t)=>{const e=P_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=D_(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,k_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function k_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function D_(t){return ce(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ml;const Wr=t=>Ml=t,Ll=Symbol();function Us(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xn||(xn={}));function N_(){const t=Mc(!0),e=t.run(()=>wi({}));let n=[],r=[];const s=bi({install(i){Wr(s),s._a=i,i.provide(Ll,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ul=()=>{};function zo(t,e,n,r=Ul){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Lc()&&_g(s),s}function Zt(t,...e){t.slice().forEach(n=>{n(...e)})}const x_=t=>t(),Ko=Symbol(),ds=Symbol();function Fs(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Us(s)&&Us(r)&&t.hasOwnProperty(n)&&!ae(r)&&!Ht(r)?t[n]=Fs(s,r):t[n]=r}return t}const M_=Symbol();function L_(t){return!Us(t)||!Object.prototype.hasOwnProperty.call(t,M_)}const{assign:wt}=Object;function U_(t){return!!(ae(t)&&t.effect)}function F_(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Bg(n.state.value[t]);return wt(u,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=bi(ke(()=>{Wr(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return c=Fl(t,l,e,n,r,!0),c}function Fl(t,e,n={},r,s,i){let o;const a=wt({actions:{}},n),c={deep:!0};let l,u,d=[],h=[],m;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),wi({});let R;function U(W){let z;l=u=!1,typeof W=="function"?(W(r.state.value[t]),z={type:xn.patchFunction,storeId:t,events:m}):(Fs(r.state.value[t],W),z={type:xn.patchObject,payload:W,storeId:t,events:m});const ie=R=Symbol();vi().then(()=>{R===ie&&(l=!0)}),u=!0,Zt(d,z,r.state.value[t])}const D=i?function(){const{state:z}=n,ie=z?z():{};this.$patch(pe=>{wt(pe,ie)})}:Ul;function O(){o.stop(),d=[],h=[],r._s.delete(t)}const N=(W,z="")=>{if(Ko in W)return W[ds]=z,W;const ie=function(){Wr(r);const pe=Array.from(arguments),Se=[],be=[];function Nt(V){Se.push(V)}function mt(V){be.push(V)}Zt(h,{args:pe,name:ie[ds],store:j,after:Nt,onError:mt});let se;try{se=W.apply(this&&this.$id===t?this:j,pe)}catch(V){throw Zt(be,V),V}return se instanceof Promise?se.then(V=>(Zt(Se,V),V)).catch(V=>(Zt(be,V),Promise.reject(V))):(Zt(Se,se),se)};return ie[Ko]=!0,ie[ds]=z,ie},k={_p:r,$id:t,$onAction:zo.bind(null,h),$patch:U,$reset:D,$subscribe(W,z={}){const ie=zo(d,W,z.detached,()=>pe()),pe=o.run(()=>Dn(()=>r.state.value[t],Se=>{(z.flush==="sync"?u:l)&&W({storeId:t,type:xn.direct,events:m},Se)},wt({},c,z)));return ie},$dispose:O},j=Xn(k);r._s.set(t,j);const X=(r._a&&r._a.runWithContext||x_)(()=>r._e.run(()=>(o=Mc()).run(()=>e({action:N}))));for(const W in X){const z=X[W];if(ae(z)&&!U_(z)||Ht(z))i||(I&&L_(z)&&(ae(z)?z.value=I[W]:Fs(z,I[W])),r.state.value[t][W]=z);else if(typeof z=="function"){const ie=N(z,W);X[W]=ie,a.actions[W]=z}}return wt(j,X),wt(q(j),X),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:W=>{U(z=>{wt(z,W)})}}),r._p.forEach(W=>{wt(j,o.run(()=>W({store:j,app:r._a,pinia:r,options:a})))}),I&&i&&n.hydrate&&n.hydrate(j.$state,I),l=!0,u=!0,j}/*! #__NO_SIDE_EFFECTS__ */function $_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const c=Em();return o=o||(c?Je(Ll,null):null),o&&Wr(o),o=Ml,o._s.has(t)||(s?Fl(t,e,r,o):F_(t,r,o)),o._s.get(t)}return i.$id=t,i}const B_="modulepreload",H_=function(t){return"/"+t},qo={},ir=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=c(n.map(l=>{if(l=H_(l),l in qo)return;qo[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":B_,u||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((m,I)=>{h.addEventListener("load",m),h.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof document<"u";function $l(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function V_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$l(t.default)}const J=Object.assign;function hs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ue(s)?s.map(t):t(s)}return n}const Mn=()=>{},Ue=Array.isArray,Bl=/#/g,j_=/&/g,W_=/\//g,z_=/=/g,K_=/\?/g,Hl=/\+/g,q_=/%5B/g,G_=/%5D/g,Vl=/%5E/g,J_=/%60/g,jl=/%7B/g,Y_=/%7C/g,Wl=/%7D/g,X_=/%20/g;function Ri(t){return encodeURI(""+t).replace(Y_,"|").replace(q_,"[").replace(G_,"]")}function Q_(t){return Ri(t).replace(jl,"{").replace(Wl,"}").replace(Vl,"^")}function $s(t){return Ri(t).replace(Hl,"%2B").replace(X_,"+").replace(Bl,"%23").replace(j_,"%26").replace(J_,"`").replace(jl,"{").replace(Wl,"}").replace(Vl,"^")}function Z_(t){return $s(t).replace(z_,"%3D")}function ey(t){return Ri(t).replace(Bl,"%23").replace(K_,"%3F")}function ty(t){return t==null?"":ey(t).replace(W_,"%2F")}function Wn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ny=/\/$/,ry=t=>t.replace(ny,"");function ps(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ay(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Wn(o)}}function sy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Go(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iy(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&pn(e.matched[r],n.matched[s])&&zl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!oy(t[n],e[n]))return!1;return!0}function oy(t,e){return Ue(t)?Jo(t,e):Ue(e)?Jo(e,t):t===e}function Jo(t,e){return Ue(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ay(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zn;(function(t){t.pop="pop",t.push="push"})(zn||(zn={}));var Ln;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ln||(Ln={}));function cy(t){if(!t)if(tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ry(t)}const ly=/^[^#]+#/;function uy(t,e){return t.replace(ly,"#")+e}function fy(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zr=()=>({left:window.scrollX,top:window.scrollY});function dy(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fy(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yo(t,e){return(history.state?history.state.position-e:-1)+t}const Bs=new Map;function hy(t,e){Bs.set(t,e)}function py(t){const e=Bs.get(t);return Bs.delete(t),e}let gy=()=>location.protocol+"//"+location.host;function Kl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Go(c,"")}return Go(n,t)+r+s}function my(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=Kl(t,location),I=n.value,R=e.value;let U=0;if(h){if(n.value=m,e.value=h,o&&o===I){o=null;return}U=R?h.position-R.position:0}else r(m);s.forEach(D=>{D(n.value,I,{delta:U,type:zn.pop,direction:U?U>0?Ln.forward:Ln.back:Ln.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const I=s.indexOf(h);I>-1&&s.splice(I,1)};return i.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(J({},h.state,{scroll:zr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Xo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zr():null}}function _y(t){const{history:e,location:n}=window,r={value:Kl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:gy()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=J({},e.state,Xo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=J({},s.value,e.state,{forward:c,scroll:zr()});i(u.current,u,!0);const d=J({},Xo(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function yy(t){t=cy(t);const e=_y(t),n=my(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:uy.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function by(t){return typeof t=="string"||t&&typeof t=="object"}function ql(t){return typeof t=="string"||typeof t=="symbol"}const Gl=Symbol("");var Qo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qo||(Qo={}));function gn(t,e){return J(new Error,{type:t,[Gl]:!0},e)}function tt(t,e){return t instanceof Error&&Gl in t&&(e==null||!!(t.type&e))}const Zo="[^/]+?",wy={sensitive:!1,strict:!1,start:!0,end:!0},vy=/[.+*?^${}()[\]/\\]/g;function Iy(t,e){const n=J({},wy,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const h=l[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(vy,"\\$&"),m+=40;else if(h.type===1){const{value:I,repeatable:R,optional:U,regexp:D}=h;i.push({name:I,repeatable:R,optional:U});const O=D||Zo;if(O!==Zo){m+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${I}" (${O}): `+k.message)}}let N=R?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(N=U&&l.length<2?`(?:/${N})`:"/"+N),U&&(N+="?"),s+=N,m+=20,U&&(m+=-8),R&&(m+=-20),O===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",I=i[h-1];d[I.name]=m&&I.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:R,optional:U}=m,D=I in l?l[I]:"";if(Ue(D)&&!R)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const O=Ue(D)?D.join("/"):D;if(!O)if(U)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ey(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Jl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ey(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ea(r))return 1;if(ea(s))return-1}return s.length-r.length}function ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Sy={type:0,value:""},Ty=/[a-zA-Z0-9_]/;function Cy(t){if(!t)return[[]];if(t==="/")return[[Sy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Ty.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Ay(t,e,n){const r=Iy(Cy(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ry(t,e){const n=[],r=new Map;e=sa({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,h,m){const I=!m,R=na(d);R.aliasOf=m&&m.record;const U=sa(e,d),D=[R];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const j of k)D.push(na(J({},R,{components:m?m.record.components:R.components,path:j,aliasOf:m?m.record:R})))}let O,N;for(const k of D){const{path:j}=k;if(h&&j[0]!=="/"){const le=h.record.path,X=le[le.length-1]==="/"?"":"/";k.path=h.record.path+(j&&X+j)}if(O=Ay(k,h,U),m?m.alias.push(O):(N=N||O,N!==O&&N.alias.push(O),I&&d.name&&!ra(O)&&o(d.name)),Yl(O)&&c(O),R.children){const le=R.children;for(let X=0;X<le.length;X++)i(le[X],O,m&&m.children[X])}m=m||O}return N?()=>{o(N)}:Mn}function o(d){if(ql(d)){const h=r.get(d);h&&(r.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const h=ky(d,n);n.splice(h,0,d),d.record.name&&!ra(d)&&r.set(d.record.name,d)}function l(d,h){let m,I={},R,U;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw gn(1,{location:d});U=m.record.name,I=J(ta(h.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&ta(d.params,m.keys.map(N=>N.name))),R=m.stringify(I)}else if(d.path!=null)R=d.path,m=n.find(N=>N.re.test(R)),m&&(I=m.parse(R),U=m.record.name);else{if(m=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!m)throw gn(1,{location:d,currentLocation:h});U=m.record.name,I=J({},h.params,d.params),R=m.stringify(I)}const D=[];let O=m;for(;O;)D.unshift(O.record),O=O.parent;return{name:U,path:R,params:I,matched:D,meta:Oy(D)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function ta(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function na(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Py(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Py(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ra(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Oy(t){return t.reduce((e,n)=>J(e,n.meta),{})}function sa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ky(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Jl(t,e[i])<0?r=i:n=i+1}const s=Dy(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Dy(t){let e=t;for(;e=e.parent;)if(Yl(e)&&Jl(t,e)===0)return e}function Yl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ny(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Hl," "),o=i.indexOf("="),a=Wn(o<0?i:i.slice(0,o)),c=o<0?null:Wn(i.slice(o+1));if(a in e){let l=e[a];Ue(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ia(t){let e="";for(let n in t){const r=t[n];if(n=Z_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ue(r)?r.map(i=>i&&$s(i)):[r&&$s(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function xy(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ue(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const My=Symbol(""),oa=Symbol(""),Pi=Symbol(""),Xl=Symbol(""),Hs=Symbol("");function vn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Et(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(gn(4,{from:n,to:e})):h instanceof Error?c(h):by(h)?c(gn(2,{from:e,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(h=>c(h))})}function gs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if($l(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Et(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=V_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Et(m,n,r,o,a,s)()}))}}return i}function aa(t){const e=Je(Pi),n=Je(Xl),r=ke(()=>{const c=ln(t.to);return e.resolve(c)}),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(pn.bind(null,u));if(h>-1)return h;const m=ca(c[l-2]);return l>1&&ca(u)===m&&d[d.length-1].path!==m?d.findIndex(pn.bind(null,c[l-2])):h}),i=ke(()=>s.value>-1&&By(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&zl(n.params,r.value.params));function a(c={}){if($y(c)){const l=e[ln(t.replace)?"replace":"push"](ln(t.to)).catch(Mn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Ly(t){return t.length===1?t[0]:t}const Uy=ol({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:aa,setup(t,{slots:e}){const n=Xn(aa(t)),{options:r}=Je(Pi),s=ke(()=>({[la(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[la(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Ly(e.default(n));return t.custom?i:Nl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Fy=Uy;function $y(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function By(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ue(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ca(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const la=(t,e,n)=>t??e??n,Hy=ol({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Je(Hs),s=ke(()=>t.route||r.value),i=Je(oa,0),o=ke(()=>{let l=ln(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=ke(()=>s.value.matched[o.value]);ur(oa,ke(()=>o.value+1)),ur(My,a),ur(Hs,s);const c=wi();return Dn(()=>[c.value,a.value,t.name],([l,u,d],[h,m,I])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!pn(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return ua(n.default,{Component:h,route:l});const m=d.props[u],I=m?m===!0?l.params:typeof m=="function"?m(l):m:null,U=Nl(h,J({},I,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return ua(n.default,{Component:U,route:l})||U}}});function ua(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vy=Hy;function jy(t){const e=Ry(t.routes,t),n=t.parseQuery||Ny,r=t.stringifyQuery||ia,s=t.history,i=vn(),o=vn(),a=vn(),c=Ug(bt);let l=bt;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hs.bind(null,y=>""+y),d=hs.bind(null,ty),h=hs.bind(null,Wn);function m(y,P){let C,x;return ql(y)?(C=e.getRecordMatcher(y),x=P):x=y,e.addRoute(x,C)}function I(y){const P=e.getRecordMatcher(y);P&&e.removeRoute(P)}function R(){return e.getRoutes().map(y=>y.record)}function U(y){return!!e.getRecordMatcher(y)}function D(y,P){if(P=J({},P||c.value),typeof y=="string"){const g=ps(n,y,P.path),_=e.resolve({path:g.path},P),w=s.createHref(g.fullPath);return J(g,_,{params:h(_.params),hash:Wn(g.hash),redirectedFrom:void 0,href:w})}let C;if(y.path!=null)C=J({},y,{path:ps(n,y.path,P.path).path});else{const g=J({},y.params);for(const _ in g)g[_]==null&&delete g[_];C=J({},y,{params:d(g)}),P.params=d(P.params)}const x=e.resolve(C,P),Z=y.hash||"";x.params=u(h(x.params));const f=sy(r,J({},y,{hash:Q_(Z),path:x.path})),p=s.createHref(f);return J({fullPath:f,hash:Z,query:r===ia?xy(y.query):y.query||{}},x,{redirectedFrom:void 0,href:p})}function O(y){return typeof y=="string"?ps(n,y,c.value.path):J({},y)}function N(y,P){if(l!==y)return gn(8,{from:P,to:y})}function k(y){return X(y)}function j(y){return k(J(O(y),{replace:!0}))}function le(y){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let x=typeof C=="function"?C(y):C;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=O(x):{path:x},x.params={}),J({query:y.query,hash:y.hash,params:x.path!=null?{}:y.params},x)}}function X(y,P){const C=l=D(y),x=c.value,Z=y.state,f=y.force,p=y.replace===!0,g=le(C);if(g)return X(J(O(g),{state:typeof g=="object"?J({},Z,g.state):Z,force:f,replace:p}),P||C);const _=C;_.redirectedFrom=P;let w;return!f&&iy(r,x,C)&&(w=gn(16,{to:_,from:x}),Fe(x,x,!0,!1)),(w?Promise.resolve(w):ie(_,x)).catch(b=>tt(b)?tt(b,2)?b:_t(b):G(b,_,x)).then(b=>{if(b){if(tt(b,2))return X(J({replace:p},O(b.to),{state:typeof b.to=="object"?J({},Z,b.to.state):Z,force:f}),P||_)}else b=Se(_,x,!0,p,Z);return pe(_,x,b),b})}function W(y,P){const C=N(y,P);return C?Promise.reject(C):Promise.resolve()}function z(y){const P=Xt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(y):y()}function ie(y,P){let C;const[x,Z,f]=Wy(y,P);C=gs(x.reverse(),"beforeRouteLeave",y,P);for(const g of x)g.leaveGuards.forEach(_=>{C.push(Et(_,y,P))});const p=W.bind(null,y,P);return C.push(p),Oe(C).then(()=>{C=[];for(const g of i.list())C.push(Et(g,y,P));return C.push(p),Oe(C)}).then(()=>{C=gs(Z,"beforeRouteUpdate",y,P);for(const g of Z)g.updateGuards.forEach(_=>{C.push(Et(_,y,P))});return C.push(p),Oe(C)}).then(()=>{C=[];for(const g of f)if(g.beforeEnter)if(Ue(g.beforeEnter))for(const _ of g.beforeEnter)C.push(Et(_,y,P));else C.push(Et(g.beforeEnter,y,P));return C.push(p),Oe(C)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),C=gs(f,"beforeRouteEnter",y,P,z),C.push(p),Oe(C))).then(()=>{C=[];for(const g of o.list())C.push(Et(g,y,P));return C.push(p),Oe(C)}).catch(g=>tt(g,8)?g:Promise.reject(g))}function pe(y,P,C){a.list().forEach(x=>z(()=>x(y,P,C)))}function Se(y,P,C,x,Z){const f=N(y,P);if(f)return f;const p=P===bt,g=tn?history.state:{};C&&(x||p?s.replace(y.fullPath,J({scroll:p&&g&&g.scroll},Z)):s.push(y.fullPath,Z)),c.value=y,Fe(y,P,C,p),_t()}let be;function Nt(){be||(be=s.listen((y,P,C)=>{if(!er.listening)return;const x=D(y),Z=le(x);if(Z){X(J(Z,{replace:!0,force:!0}),x).catch(Mn);return}l=x;const f=c.value;tn&&hy(Yo(f.fullPath,C.delta),zr()),ie(x,f).catch(p=>tt(p,12)?p:tt(p,2)?(X(J(O(p.to),{force:!0}),x).then(g=>{tt(g,20)&&!C.delta&&C.type===zn.pop&&s.go(-1,!1)}).catch(Mn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),G(p,x,f))).then(p=>{p=p||Se(x,f,!1),p&&(C.delta&&!tt(p,8)?s.go(-C.delta,!1):C.type===zn.pop&&tt(p,20)&&s.go(-1,!1)),pe(x,f,p)}).catch(Mn)}))}let mt=vn(),se=vn(),V;function G(y,P,C){_t(y);const x=se.list();return x.length?x.forEach(Z=>Z(y,P,C)):console.error(y),Promise.reject(y)}function Ze(){return V&&c.value!==bt?Promise.resolve():new Promise((y,P)=>{mt.add([y,P])})}function _t(y){return V||(V=!y,Nt(),mt.list().forEach(([P,C])=>y?C(y):P()),mt.reset()),y}function Fe(y,P,C,x){const{scrollBehavior:Z}=t;if(!tn||!Z)return Promise.resolve();const f=!C&&py(Yo(y.fullPath,0))||(x||!C)&&history.state&&history.state.scroll||null;return vi().then(()=>Z(y,P,f)).then(p=>p&&dy(p)).catch(p=>G(p,y,P))}const we=y=>s.go(y);let Yt;const Xt=new Set,er={currentRoute:c,listening:!0,addRoute:m,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:U,getRoutes:R,resolve:D,options:t,push:k,replace:j,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Ze,install(y){const P=this;y.component("RouterLink",Fy),y.component("RouterView",Vy),y.config.globalProperties.$router=P,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ln(c)}),tn&&!Yt&&c.value===bt&&(Yt=!0,k(s.location).catch(Z=>{}));const C={};for(const Z in bt)Object.defineProperty(C,Z,{get:()=>c.value[Z],enumerable:!0});y.provide(Pi,P),y.provide(Xl,Xc(C)),y.provide(Hs,c);const x=y.unmount;Xt.add(y),y.unmount=function(){Xt.delete(y),Xt.size<1&&(l=bt,be&&be(),be=null,c.value=bt,Yt=!1,V=!1),x()}}};function Oe(y){return y.reduce((P,C)=>P.then(()=>z(C)),Promise.resolve())}return er}function Wy(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>pn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>pn(l,c))||s.push(c))}return[n,r,s]}const zy=[{path:"/",redirect:"/home",component:()=>ir(()=>import("./Index-DCmHsk2J.js"),[]),children:[{path:"home",component:()=>ir(()=>import("./Index-CiWpl8kw.js"),[])},{path:"market",component:()=>ir(()=>import("./Index-DE2tsBvi.js"),[])},{path:"info",component:()=>ir(()=>import("./Index--puQAdpY.js"),[])}]}],Ky=jy({history:yy(),routes:zy}),qy=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Gy={};function Jy(t,e){const n=dm("RouterView");return Wm(),qm("main",null,[Re(n)])}const Yy=qy(Gy,[["render",Jy]]),Xy=$_("unknown",()=>{function t(){console.info("App Initialized")}return{init:t}}),Qy=N_(),ms=O_(Yy);Sd(rg,t=>{ms.use(Qy);const e=Xy();console.log(t),e.init(),ms.use(Ky),ms.mount("#app")});export{qy as _,Pl as a,Zy as b,qm as c,Wm as o,mg as t,ln as u};
