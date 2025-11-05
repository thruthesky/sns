(function(B,Us){typeof exports=="object"&&typeof module<"u"?Us(exports):typeof define=="function"&&define.amd?define(["exports"],Us):(B=typeof globalThis<"u"?globalThis:B||self,Us(B.SNSComponents={}))})(this,(function(B){"use strict";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add("5");const Hs=1,Ws=2,ru=4,Nm=8,xm=16,Lm=1,Dm=2,iu=4,Om=8,Mm=16,$m=1,Fm=2,su="[",js="[!",ba="]",Fr={},Ve=Symbol(),Um="http://www.w3.org/1999/xhtml",Hm="http://www.w3.org/2000/svg",Wm="@attach",ou=!1;var ya=Array.isArray,jm=Array.prototype.indexOf,wa=Array.from,zs=Object.keys,yi=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,au=Object.getOwnPropertyDescriptors,zm=Object.prototype,Vm=Array.prototype,Ea=Object.getPrototypeOf,lu=Object.isExtensible;function wi(t){return typeof t=="function"}const An=()=>{};function Bm(t){return t()}function Vs(t){for(var e=0;e<t.length;e++)t[e]()}function cu(){var t,e,n=new Promise((r,i)=>{t=r,e=i});return{promise:n,resolve:t,reject:e}}function qm(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const Qe=2,Ia=4,Bs=8,sn=16,on=32,Rn=64,qs=128,Je=1024,at=2048,an=4096,pt=8192,ln=16384,Ca=32768,ar=65536,uu=1<<17,Gm=1<<18,lr=1<<19,du=1<<20,wt=256,Gs=512,Ks=32768,Ta=1<<21,Sa=1<<22,cr=1<<23,zt=Symbol("$state"),ka=Symbol("legacy props"),Km=Symbol(""),Ur=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Ym=1,Aa=3,Hr=8;function hu(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Qm(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Jm(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xm(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Zm(t){throw new Error("https://svelte.dev/e/effect_orphan")}function e_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function t_(){throw new Error("https://svelte.dev/e/hydration_failed")}function n_(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function r_(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function i_(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function s_(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function o_(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function Ys(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function a_(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function l_(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let U=!1;function mt(t){U=t}let J;function Be(t){if(t===null)throw Ys(),Fr;return J=t}function ur(){return Be(qt(J))}function m(t){if(U){if(qt(J)!==null)throw Ys(),Fr;J=t}}function Et(t=1){if(U){for(var e=t,n=J;e--;)n=qt(n);J=n}}function Qs(t=!0){for(var e=0,n=J;;){if(n.nodeType===Hr){var r=n.data;if(r===ba){if(e===0)return n;e-=1}else(r===su||r===js)&&(e+=1)}var i=qt(n);t&&n.remove(),n=i}}function fu(t){if(!t||t.nodeType!==Hr)throw Ys(),Fr;return t.data}function pu(t){return t===this.v}function mu(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function _u(t){return!mu(t,this.v)}let Wr=!1,c_=!1;function u_(){Wr=!0}let Se=null;function jr(t){Se=t}function cn(t,e=!1,n){Se={p:Se,i:!1,c:null,e:null,s:t,x:null,l:Wr&&!e?{s:null,u:null,$:[]}:null}}function un(t){var e=Se,n=e.e;if(n!==null){e.e=null;for(var r of n)Uu(r)}return t!==void 0&&(e.x=t),e.i=!0,Se=e.p,t??{}}function Ei(){return!Wr||Se!==null&&Se.l===null}let dr=[];function gu(){var t=dr;dr=[],Vs(t)}function Pn(t){if(dr.length===0&&!Ci){var e=dr;queueMicrotask(()=>{e===dr&&gu()})}dr.push(t)}function d_(){for(;dr.length>0;)gu()}function vu(t){var e=V;if(e===null)return X.f|=cr,t;if((e.f&Ca)===0){if((e.f&qs)===0)throw t;e.b.error(t)}else zr(t,e)}function zr(t,e){for(;e!==null;){if((e.f&qs)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const Js=new Set;let he=null,Ii=null,xt=null,Vt=[],Xs=null,Ra=!1,Ci=!1;class Lt{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#i=0;#l=null;#o=[];#s=[];skipped_effects=new Set;is_fork=!1;process(e){Vt=[],Ii=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#n(r,n);this.is_fork||this.#c(),this.#i>0||this.is_fork?(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects)):(Ii=this,he=null,yu(n.render_effects),yu(n.effects),Ii=null,this.#l?.resolve()),xt=null}#n(e,n){e.f^=Je;for(var r=e.first;r!==null;){var i=r.f,s=(i&(on|Rn))!==0,o=s&&(i&Je)!==0,a=o||(i&pt)!==0||this.skipped_effects.has(r);if((r.f&qs)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){s?r.f^=Je:(i&Ia)!==0?n.effects.push(r):Pi(r)&&((r.f&sn)!==0&&n.block_effects.push(r),Ni(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===n.effect&&(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects),n=n.parent),r=c.next,c=c.parent}}#a(e){for(const n of e)((n.f&at)!==0?this.#o:this.#s).push(n),Xe(n,Je)}capture(e,n){this.previous.has(e)||this.previous.set(e,n),this.current.set(e,e.v),xt?.set(e,e.v)}activate(){he=this}deactivate(){he=null,xt=null}flush(){if(this.activate(),Vt.length>0){if(bu(),he!==null&&he!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#i===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#u()}#u(){if(Js.size>1){this.previous.clear();var e=xt,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of Js){if(i===this){n=!1;continue}const s=[];for(const[a,l]of this.current){if(i.current.has(a))if(n&&l!==i.current.get(a))i.current.set(a,l);else continue;s.push(a)}if(s.length===0)continue;const o=[...i.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of s)wu(c,o,a,l);if(Vt.length>0){he=i,i.apply();for(const c of Vt)i.#n(c,r);Vt=[],i.deactivate()}}}he=null,xt=e}this.committed=!0,Js.delete(this)}increment(e){this.#r+=1,e&&(this.#i+=1)}decrement(e){this.#r-=1,e&&(this.#i-=1),this.revive()}revive(){for(const e of this.#o)Xe(e,at),hr(e);for(const e of this.#s)Xe(e,an),hr(e);this.#o=[],this.#s=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=cu()).promise}static ensure(){if(he===null){const e=he=new Lt;Js.add(he),Ci||Lt.enqueue(()=>{he===e&&e.flush()})}return he}static enqueue(e){Pn(e)}apply(){}}function _t(t){var e=Ci;Ci=!0;try{for(var n;;){if(d_(),Vt.length===0&&(he?.flush(),Vt.length===0))return Xs=null,n;bu()}}finally{Ci=e}}function bu(){var t=Gr;Ra=!0;try{var e=0;for(qu(!0);Vt.length>0;){var n=Lt.ensure();if(e++>1e3){var r,i;h_()}n.process(Vt),Nn.clear()}}finally{Ra=!1,qu(t),Xs=null}}function h_(){try{e_()}catch(t){zr(t,Xs)}}let dn=null;function yu(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(ln|pt))===0&&Pi(r)&&(dn=new Set,Ni(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?ju(r):r.fn=null),dn?.size>0)){Nn.clear();for(const i of dn){if((i.f&(ln|pt))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)dn.has(o)&&(dn.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(ln|pt))===0&&Ni(l)}}dn.clear()}}dn=null}}function wu(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const i of t.reactions){const s=i.f;(s&Qe)!==0?wu(i,e,n,r):(s&(Sa|sn))!==0&&(s&at)===0&&Eu(i,e,r)&&(Xe(i,at),hr(i))}}function Eu(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const i of t.deps){if(e.includes(i))return!0;if((i.f&Qe)!==0&&Eu(i,e,n))return n.set(i,!0),!0}return n.set(t,!1),!1}function hr(t){for(var e=Xs=t;e.parent!==null;){e=e.parent;var n=e.f;if(Ra&&e===V&&(n&sn)!==0)return;if((n&(Rn|on))!==0){if((n&Je)===0)return;e.f^=Je}}Vt.push(e)}function f_(t){let e=0,n=xn(0),r;return()=>{C_()&&(y(n),to(()=>(e===0&&(r=Gt(()=>t(()=>Si(n)))),e+=1,()=>{Pn(()=>{e-=1,e===0&&(r?.(),r=void 0,Si(n))})})))}}var p_=ar|lr|qs;function m_(t,e,n){new __(t,e,n)}class __{parent;#t=!1;#e;#r=U?J:null;#i;#l;#o;#s=null;#n=null;#a=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#b=f_(()=>(this.#h=xn(this.#f),()=>{this.#h=null}));constructor(e,n,r){this.#e=e,this.#i=n,this.#l=r,this.parent=V.b,this.#t=!!this.#i.pending,this.#o=Br(()=>{if(V.b=this,U){const s=this.#r;ur(),s.nodeType===Hr&&s.data===js?this.#w():this.#y()}else{var i=this.#g();try{this.#s=lt(()=>r(i))}catch(s){this.error(s)}this.#d>0?this.#_():this.#t=!1}return()=>{this.#u?.remove()}},p_),U&&(this.#e=J)}#y(){try{this.#s=lt(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#w(){const e=this.#i.pending;e&&(this.#n=lt(()=>e(this.#e)),Lt.enqueue(()=>{var n=this.#g();this.#s=this.#m(()=>(Lt.ensure(),lt(()=>this.#l(n)))),this.#d>0?this.#_():(qr(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=It(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#m(e){var n=V,r=X,i=Se;Ct(this.#o),ct(this.#o),jr(this.#o.ctx);try{return e()}catch(s){return vu(s),null}finally{Ct(n),ct(r),jr(i)}}#_(){const e=this.#i.pending;this.#s!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Bu(this.#s,this.#c)),this.#n===null&&(this.#n=lt(()=>e(this.#e)))}#v(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#v(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#n&&qr(this.#n,()=>{this.#n=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#v(e),this.#f+=e,this.#h&&Vr(this.#h,this.#f)}get_effect_pending(){return this.#b(),y(this.#h)}error(e){var n=this.#i.onerror;let r=this.#i.failed;if(this.#p||!n&&!r)throw e;this.#s&&($e(this.#s),this.#s=null),this.#n&&($e(this.#n),this.#n=null),this.#a&&($e(this.#a),this.#a=null),U&&(Be(this.#r),Et(),Be(Qs()));var i=!1,s=!1;const o=()=>{if(i){l_();return}i=!0,s&&o_(),Lt.ensure(),this.#f=0,this.#a!==null&&qr(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#s=this.#m(()=>(this.#p=!1,lt(()=>this.#l(this.#e)))),this.#d>0?this.#_():this.#t=!1};var a=X;try{ct(null),s=!0,n?.(e,o),s=!1}catch(l){zr(l,this.#o&&this.#o.parent)}finally{ct(a)}r&&Pn(()=>{this.#a=this.#m(()=>{Lt.ensure(),this.#p=!0;try{return lt(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return zr(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Iu(t,e,n,r){const i=Ei()?Ti:Na;if(n.length===0&&t.length===0){r(e.map(i));return}var s=he,o=V,a=g_();function l(){Promise.all(n.map(c=>v_(c))).then(c=>{a();try{r([...e.map(i),...c])}catch(d){(o.f&ln)===0&&zr(d,o)}s?.deactivate(),Zs()}).catch(c=>{zr(c,o)})}t.length>0?Promise.all(t).then(()=>{a();try{return l()}finally{s?.deactivate(),Zs()}}):l()}function g_(){var t=V,e=X,n=Se,r=he;return function(s=!0){Ct(t),ct(e),jr(n),s&&r?.activate()}}function Zs(){Ct(null),ct(null),jr(null)}function Ti(t){var e=Qe|at,n=X!==null&&(X.f&Qe)!==0?X:null;return V===null||n!==null&&(n.f&wt)!==0?e|=wt:V.f|=lr,{ctx:Se,deps:null,effects:null,equals:pu,f:e,fn:t,reactions:null,rv:0,v:Ve,wv:0,parent:n??V,ac:null}}function v_(t,e){let n=V;n===null&&Qm();var r=n.b,i=void 0,s=xn(Ve),o=!X,a=new Map;return A_(()=>{var l=cu();i=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===he&&c.committed&&c.deactivate(),Zs()})}catch(u){l.reject(u),Zs()}var c=he;if(o){var d=!r.is_pending();r.update_pending_count(1),c.increment(d),a.get(c)?.reject(Ur),a.delete(c),a.set(c,l)}const h=(u,f=void 0)=>{if(c.activate(),f)f!==Ur&&(s.f|=cr,Vr(s,f));else{(s.f&cr)!==0&&(s.f^=cr),Vr(s,u);for(const[p,g]of a){if(a.delete(p),p===c)break;g.reject(Ur)}}o&&(r.update_pending_count(-1),c.decrement(d))};l.promise.then(h,u=>h(null,u||"unknown"))}),ki(()=>{for(const l of a.values())l.reject(Ur)}),new Promise(l=>{function c(d){function h(){d===i?l(s):c(i)}d.then(h,h)}c(i)})}function Pa(t){const e=Ti(t);return Ku(e),e}function Na(t){const e=Ti(t);return e.equals=_u,e}function Cu(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)$e(e[n])}}function b_(t){for(var e=t.parent;e!==null;){if((e.f&Qe)===0)return e;e=e.parent}return null}function xa(t){var e,n=V;Ct(b_(t));try{t.f&=~Ks,Cu(t),e=Zu(t)}finally{Ct(n)}return e}function Tu(t){var e=xa(t);if(t.equals(e)||(t.v=e,t.wv=Ju()),!fr)if(xt!==null)xt.set(t,t.v);else{var n=(Ln||(t.f&wt)!==0)&&t.deps!==null?an:Je;Xe(t,n)}}let La=new Set;const Nn=new Map;let Su=!1;function xn(t,e){var n={f:0,v:t,reactions:null,equals:pu,rv:0,wv:0};return n}function ne(t,e){const n=xn(t);return Ku(n),n}function Da(t,e=!1,n=!0){const r=xn(t);return e||(r.equals=_u),Wr&&n&&Se!==null&&Se.l!==null&&(Se.l.s??=[]).push(r),r}function N(t,e,n=!1){X!==null&&(!Ot||(X.f&uu)!==0)&&Ei()&&(X.f&(Qe|sn|Sa|uu))!==0&&!fn?.includes(t)&&s_();let r=n?hn(e):e;return Vr(t,r)}function Vr(t,e){if(!t.equals(e)){var n=t.v;fr?Nn.set(t,e):Nn.set(t,n),t.v=e;var r=Lt.ensure();r.capture(t,n),(t.f&Qe)!==0&&((t.f&at)!==0&&xa(t),Xe(t,(t.f&wt)===0?Je:an)),t.wv=Ju(),Au(t,at),Ei()&&V!==null&&(V.f&Je)!==0&&(V.f&(on|Rn))===0&&(Tt===null?N_([t]):Tt.push(t)),!r.is_fork&&La.size>0&&!Su&&y_()}return e}function y_(){Su=!1;const t=Array.from(La);for(const e of t)(e.f&Je)!==0&&Xe(e,an),Pi(e)&&Ni(e);La.clear()}function ku(t,e=1){var n=y(t),r=e===1?n++:n--;return N(t,n),r}function Si(t){N(t,t.v+1)}function Au(t,e){var n=t.reactions;if(n!==null)for(var r=Ei(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f;if(!(!r&&o===V)){var l=(a&at)===0;l&&Xe(o,e),(a&Qe)!==0?(a&Ks)===0&&(o.f|=Ks,Au(o,an)):l&&((a&sn)!==0&&dn!==null&&dn.add(o),hr(o))}}}function hn(t){if(typeof t!="object"||t===null||zt in t)return t;const e=Ea(t);if(e!==zm&&e!==Vm)return t;var n=new Map,r=ya(t),i=ne(0),s=pr,o=a=>{if(pr===s)return a();var l=X,c=pr;ct(null),Qu(s);var d=a();return ct(l),Qu(c),d};return r&&n.set("length",ne(t.length)),new Proxy(t,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&r_();var d=n.get(l);return d===void 0?d=o(()=>{var h=ne(c.value);return n.set(l,h),h}):N(d,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const d=o(()=>ne(Ve));n.set(l,d),Si(i)}}else N(c,Ve),Si(i);return!0},get(a,l,c){if(l===zt)return t;var d=n.get(l),h=l in a;if(d===void 0&&(!h||rn(a,l)?.writable)&&(d=o(()=>{var f=hn(h?a[l]:Ve),p=ne(f);return p}),n.set(l,d)),d!==void 0){var u=y(d);return u===Ve?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var d=n.get(l);d&&(c.value=y(d))}else if(c===void 0){var h=n.get(l),u=h?.v;if(h!==void 0&&u!==Ve)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===zt)return!0;var c=n.get(l),d=c!==void 0&&c.v!==Ve||Reflect.has(a,l);if(c!==void 0||V!==null&&(!d||rn(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=d?hn(a[l]):Ve,f=ne(u);return f}),n.set(l,c));var h=y(c);if(h===Ve)return!1}return d},set(a,l,c,d){var h=n.get(l),u=l in a;if(r&&l==="length")for(var f=c;f<h.v;f+=1){var p=n.get(f+"");p!==void 0?N(p,Ve):f in a&&(p=o(()=>ne(Ve)),n.set(f+"",p))}if(h===void 0)(!u||rn(a,l)?.writable)&&(h=o(()=>ne(void 0)),N(h,hn(c)),n.set(l,h));else{u=h.v!==Ve;var g=o(()=>hn(c));N(h,g)}var w=Reflect.getOwnPropertyDescriptor(a,l);if(w?.set&&w.set.call(d,c),!u){if(r&&typeof l=="string"){var I=n.get("length"),S=Number(l);Number.isInteger(S)&&S>=I.v&&N(I,S+1)}Si(i)}return!0},ownKeys(a){y(i);var l=Reflect.ownKeys(a).filter(h=>{var u=n.get(h);return u===void 0||u.v!==Ve});for(var[c,d]of n)d.v!==Ve&&!(c in a)&&l.push(c);return l},setPrototypeOf(){i_()}})}function Ru(t){try{if(t!==null&&typeof t=="object"&&zt in t)return t[zt]}catch{}return t}function w_(t,e){return Object.is(Ru(t),Ru(e))}var Oa,Pu,Nu,xu;function Ma(){if(Oa===void 0){Oa=window,Pu=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Nu=rn(e,"firstChild").get,xu=rn(e,"nextSibling").get,lu(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),lu(n)&&(n.__t=void 0)}}function It(t=""){return document.createTextNode(t)}function Bt(t){return Nu.call(t)}function qt(t){return xu.call(t)}function _(t,e){if(!U)return Bt(t);var n=Bt(J);if(n===null)n=J.appendChild(It());else if(e&&n.nodeType!==Aa){var r=It();return n?.before(r),Be(r),r}return Be(n),n}function se(t,e=!1){if(!U){var n=Bt(t);return n instanceof Comment&&n.data===""?qt(n):n}if(e&&J?.nodeType!==Aa){var r=It();return J?.before(r),Be(r),r}return J}function b(t,e=1,n=!1){let r=U?J:t;for(var i;e--;)i=r,r=qt(r);if(!U)return r;if(n&&r?.nodeType!==Aa){var s=It();return r===null?i?.after(s):r.before(s),Be(s),s}return Be(r),r}function Lu(t){t.textContent=""}function Du(){return!1}function E_(t,e){if(e){const n=document.body;t.autofocus=!0,Pn(()=>{document.activeElement===n&&t.focus()})}}let Ou=!1;function Mu(){Ou||(Ou=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function eo(t){var e=X,n=V;ct(null),Ct(null);try{return t()}finally{ct(e),Ct(n)}}function $u(t,e,n,r=n){t.addEventListener(e,()=>eo(n));const i=t.__on_r;i?t.__on_r=()=>{i(),r(!0)}:t.__on_r=()=>r(!0),Mu()}function Fu(t){V===null&&X===null&&Zm(),X!==null&&(X.f&wt)!==0&&V===null&&Xm(),fr&&Jm()}function I_(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Dt(t,e,n,r=!0){var i=V;i!==null&&(i.f&pt)!==0&&(t|=pt);var s={ctx:Se,deps:null,nodes_start:null,nodes_end:null,f:t|at,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Ni(s),s.f|=Ca}catch(l){throw $e(s),l}else e!==null&&hr(s);if(r){var o=s;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&lr)===0&&(o=o.first,(t&sn)!==0&&(t&ar)!==0&&o!==null&&(o.f|=ar)),o!==null&&(o.parent=i,i!==null&&I_(o,i),X!==null&&(X.f&Qe)!==0&&(t&Rn)===0)){var a=X;(a.effects??=[]).push(o)}}return s}function C_(){return X!==null&&!Ot}function ki(t){const e=Dt(Bs,null,!1);return Xe(e,Je),e.teardown=t,e}function $a(t){Fu();var e=V.f,n=!X&&(e&on)!==0&&(e&Ca)===0;if(n){var r=Se;(r.e??=[]).push(t)}else return Uu(t)}function Uu(t){return Dt(Ia|du,t,!1)}function T_(t){return Fu(),Dt(Bs|du,t,!0)}function S_(t){Lt.ensure();const e=Dt(Rn|lr,t,!0);return()=>{$e(e)}}function k_(t){Lt.ensure();const e=Dt(Rn|lr,t,!0);return(n={})=>new Promise(r=>{n.outro?qr(e,()=>{$e(e),r(void 0)}):($e(e),r(void 0))})}function Ai(t){return Dt(Ia,t,!1)}function A_(t){return Dt(Sa|lr,t,!0)}function to(t,e=0){return Dt(Bs|e,t,!0)}function re(t,e=[],n=[],r=[]){Iu(r,e,n,i=>{Dt(Bs,()=>t(...i.map(y)),!0)})}function Br(t,e=0){var n=Dt(sn|e,t,!0);return n}function lt(t,e=!0){return Dt(on|lr,t,!0,e)}function Hu(t){var e=t.teardown;if(e!==null){const n=fr,r=X;Gu(!0),ct(null);try{e.call(null)}finally{Gu(n),ct(r)}}}function Wu(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const i=n.ac;i!==null&&eo(()=>{i.abort(Ur)});var r=n.next;(n.f&Rn)!==0?n.parent=null:$e(n,e),n=r}}function R_(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&on)===0&&$e(e),e=n}}function $e(t,e=!0){var n=!1;(e||(t.f&Gm)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(P_(t.nodes_start,t.nodes_end),n=!0),Wu(t,e&&!n),no(t,0),Xe(t,ln);var r=t.transitions;if(r!==null)for(const s of r)s.stop();Hu(t);var i=t.parent;i!==null&&i.first!==null&&ju(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function P_(t,e){for(;t!==null;){var n=t===e?null:qt(t);t.remove(),t=n}}function ju(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function qr(t,e,n=!0){var r=[];Fa(t,r,!0),zu(r,()=>{n&&$e(t),e&&e()})}function zu(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var i of t)i.out(r)}else e()}function Fa(t,e,n){if((t.f&pt)===0){if(t.f^=pt,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var r=t.first;r!==null;){var i=r.next,s=(r.f&ar)!==0||(r.f&on)!==0&&(t.f&sn)!==0;Fa(r,e,s?n:!1),r=i}}}function Ua(t){Vu(t,!0)}function Vu(t,e){if((t.f&pt)!==0){t.f^=pt,(t.f&Je)===0&&(Xe(t,at),hr(t));for(var n=t.first;n!==null;){var r=n.next,i=(n.f&ar)!==0||(n.f&on)!==0;Vu(n,i?e:!1),n=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}function Bu(t,e){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var i=n===r?null:qt(n);e.append(n),n=i}}let Gr=!1;function qu(t){Gr=t}let fr=!1;function Gu(t){fr=t}let X=null,Ot=!1;function ct(t){X=t}let V=null;function Ct(t){V=t}let fn=null;function Ku(t){X!==null&&(fn===null?fn=[t]:fn.push(t))}let tt=null,gt=0,Tt=null;function N_(t){Tt=t}let Yu=1,Ri=0,pr=Ri;function Qu(t){pr=t}let Ln=!1;function Ju(){return++Yu}function Pi(t){var e=t.f;if((e&at)!==0)return!0;if((e&an)!==0){var n=t.deps,r=(e&wt)!==0;if(e&Qe&&(t.f&=~Ks),n!==null){var i,s,o=(e&Gs)!==0,a=r&&V!==null&&!Ln,l=n.length;if((o||a)&&(V===null||(V.f&ln)===0)){var c=t,d=c.parent;for(i=0;i<l;i++)s=n[i],(o||!s?.reactions?.includes(c))&&(s.reactions??=[]).push(c);o&&(c.f^=Gs),a&&d!==null&&(d.f&wt)===0&&(c.f^=wt)}for(i=0;i<l;i++)if(s=n[i],Pi(s)&&Tu(s),s.wv>t.wv)return!0}(!r||V!==null&&!Ln)&&Xe(t,Je)}return!1}function Xu(t,e,n=!0){var r=t.reactions;if(r!==null&&!fn?.includes(t))for(var i=0;i<r.length;i++){var s=r[i];(s.f&Qe)!==0?Xu(s,e,!1):e===s&&(n?Xe(s,at):(s.f&Je)!==0&&Xe(s,an),hr(s))}}function Zu(t){var e=tt,n=gt,r=Tt,i=X,s=Ln,o=fn,a=Se,l=Ot,c=pr,d=t.f;tt=null,gt=0,Tt=null,Ln=(d&wt)!==0&&(Ot||!Gr||X===null),X=(d&(on|Rn))===0?t:null,fn=null,jr(t.ctx),Ot=!1,pr=++Ri,t.ac!==null&&(eo(()=>{t.ac.abort(Ur)}),t.ac=null);try{t.f|=Ta;var h=t.fn,u=h(),f=t.deps;if(tt!==null){var p;if(no(t,gt),f!==null&&gt>0)for(f.length=gt+tt.length,p=0;p<tt.length;p++)f[gt+p]=tt[p];else t.deps=f=tt;if(!Ln||(d&Qe)!==0&&t.reactions!==null)for(p=gt;p<f.length;p++)(f[p].reactions??=[]).push(t)}else f!==null&&gt<f.length&&(no(t,gt),f.length=gt);if(Ei()&&Tt!==null&&!Ot&&f!==null&&(t.f&(Qe|an|at))===0)for(p=0;p<Tt.length;p++)Xu(Tt[p],t);return i!==null&&i!==t&&(Ri++,Tt!==null&&(r===null?r=Tt:r.push(...Tt))),(t.f&cr)!==0&&(t.f^=cr),u}catch(g){return vu(g)}finally{t.f^=Ta,tt=e,gt=n,Tt=r,X=i,Ln=s,fn=o,jr(a),Ot=l,pr=c}}function x_(t,e){let n=e.reactions;if(n!==null){var r=jm.call(n,t);if(r!==-1){var i=n.length-1;i===0?n=e.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(e.f&Qe)!==0&&(tt===null||!tt.includes(e))&&(Xe(e,an),(e.f&(wt|Gs))===0&&(e.f^=Gs),Cu(e),no(e,0))}function no(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)x_(t,n[r])}function Ni(t){var e=t.f;if((e&ln)===0){Xe(t,Je);var n=V,r=Gr;V=t,Gr=!0;try{(e&sn)!==0?R_(t):Wu(t),Hu(t);var i=Zu(t);t.teardown=typeof i=="function"?i:null,t.wv=Yu;var s;ou&&c_&&(t.f&at)!==0&&t.deps}finally{Gr=r,V=n}}}async function L_(){await Promise.resolve(),_t()}function y(t){var e=t.f,n=(e&Qe)!==0;if(X!==null&&!Ot){var r=V!==null&&(V.f&ln)!==0;if(!r&&!fn?.includes(t)){var i=X.deps;if((X.f&Ta)!==0)t.rv<Ri&&(t.rv=Ri,tt===null&&i!==null&&i[gt]===t?gt++:tt===null?tt=[t]:(!Ln||!tt.includes(t))&&tt.push(t));else{(X.deps??=[]).push(t);var s=t.reactions;s===null?t.reactions=[X]:s.includes(X)||s.push(X)}}}else if(n&&t.deps===null&&t.effects===null){var o=t,a=o.parent;a!==null&&(a.f&wt)===0&&(o.f^=wt)}if(fr){if(Nn.has(t))return Nn.get(t);if(n){o=t;var l=o.v;return((o.f&Je)===0&&o.reactions!==null||ed(o))&&(l=xa(o)),Nn.set(o,l),l}}else if(n){if(o=t,xt?.has(o))return xt.get(o);Pi(o)&&Tu(o)}if(xt?.has(t))return xt.get(t);if((t.f&cr)!==0)throw t.v;return t.v}function ed(t){if(t.v===Ve)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Nn.has(e)||(e.f&Qe)!==0&&ed(e))return!0;return!1}function Gt(t){var e=Ot;try{return Ot=!0,t()}finally{Ot=e}}const D_=-7169;function Xe(t,e){t.f=t.f&D_|e}function Kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(zt in t)Ha(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&zt in n&&Ha(n)}}}function Ha(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Ha(t[r],e)}catch{}const n=Ea(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=au(n);for(let i in r){const s=r[i].get;if(s)try{s.call(t)}catch{}}}}}const td=new Set,Wa=new Set;function nd(t,e,n,r={}){function i(s){if(r.capture||xi.call(e,s),!s.cancelBubble)return eo(()=>n?.call(this,s))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Pn(()=>{e.addEventListener(t,i,r)}):e.addEventListener(t,i,r),i}function ja(t,e,n,r,i){var s={capture:r,passive:i},o=nd(t,e,n,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ki(()=>{e.removeEventListener(t,o,s)})}function mr(t){for(var e=0;e<t.length;e++)td.add(t[e]);for(var n of Wa)n(t)}let rd=null;function xi(t){var e=this,n=e.ownerDocument,r=t.type,i=t.composedPath?.()||[],s=i[0]||t.target;rd=t;var o=0,a=rd===t&&t.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||t.target,s!==e){yi(t,"currentTarget",{configurable:!0,get(){return s||n}});var d=X,h=V;ct(null),Ct(null);try{for(var u,f=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var g=s["__"+r];g!=null&&(!s.disabled||t.target===s)&&g.call(s,t)}catch(w){u?f.push(w):u=w}if(t.cancelBubble||p===e||p===null)break;s=p}if(u){for(let w of f)queueMicrotask(()=>{throw w});throw u}}finally{t.__root=e,delete t.currentTarget,ct(d),Ct(h)}}}function id(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function pn(t,e){var n=V;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function W(t,e){var n=(e&$m)!==0,r=(e&Fm)!==0,i,s=!t.startsWith("<!>");return()=>{if(U)return pn(J,null),J;i===void 0&&(i=id(s?t:"<!>"+t),n||(i=Bt(i)));var o=r||Pu?document.importNode(i,!0):i.cloneNode(!0);if(n){var a=Bt(o),l=o.lastChild;pn(a,l)}else pn(o,o);return o}}function O_(t,e,n="svg"){var r=!t.startsWith("<!>"),i=`<${n}>${r?t:"<!>"+t}</${n}>`,s;return()=>{if(U)return pn(J,null),J;if(!s){var o=id(i),a=Bt(o);s=Bt(a)}var l=s.cloneNode(!0);return pn(l,l),l}}function M_(t,e){return O_(t,e,"svg")}function Ie(){if(U)return pn(J,null),J;var t=document.createDocumentFragment(),e=document.createComment(""),n=It();return t.append(e,n),pn(e,n),t}function x(t,e){if(U){V.nodes_end=J,ur();return}t!==null&&t.before(e)}function $_(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const F_=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function U_(t){return F_.includes(t)}const H_={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function W_(t){return t=t.toLowerCase(),H_[t]??t}const j_=["touchstart","touchmove"];function z_(t){return j_.includes(t)}const V_=["textarea","script","style","title"];function B_(t){return V_.includes(t)}function L(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function sd(t,e){return od(t,e)}function q_(t,e){Ma(),e.intro=e.intro??!1;const n=e.target,r=U,i=J;try{for(var s=Bt(n);s&&(s.nodeType!==Hr||s.data!==su);)s=qt(s);if(!s)throw Fr;mt(!0),Be(s);const o=od(t,{...e,anchor:s});return mt(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Fr&&console.warn("Failed to hydrate: ",o),e.recover===!1&&t_(),Ma(),Lu(n),mt(!1),sd(t,e)}finally{mt(r),Be(i)}}const Yr=new Map;function od(t,{target:e,anchor:n,props:r={},events:i,context:s,intro:o=!0}){Ma();var a=new Set,l=h=>{for(var u=0;u<h.length;u++){var f=h[u];if(!a.has(f)){a.add(f);var p=z_(f);e.addEventListener(f,xi,{passive:p});var g=Yr.get(f);g===void 0?(document.addEventListener(f,xi,{passive:p}),Yr.set(f,1)):Yr.set(f,g+1)}}};l(wa(td)),Wa.add(l);var c=void 0,d=k_(()=>{var h=n??e.appendChild(It());return m_(h,{pending:()=>{}},u=>{if(s){cn({});var f=Se;f.c=s}if(i&&(r.$$events=i),U&&pn(u,null),c=t(u,r)||{},U&&(V.nodes_end=J,J===null||J.nodeType!==Hr||J.data!==ba))throw Ys(),Fr;s&&un()}),()=>{for(var u of a){e.removeEventListener(u,xi);var f=Yr.get(u);--f===0?(document.removeEventListener(u,xi),Yr.delete(u)):Yr.set(u,f)}Wa.delete(l),h!==n&&h.parentNode?.removeChild(h)}});return za.set(c,d),c}let za=new WeakMap;function G_(t,e){const n=za.get(t);return n?(za.delete(t),n(e)):Promise.resolve()}class ad{anchor;#t=new Map;#e=new Map;#r=new Map;#i=!0;constructor(e,n=!0){this.anchor=e,this.#i=n}#l=()=>{var e=he;if(this.#t.has(e)){var n=this.#t.get(e),r=this.#e.get(n);if(r)Ua(r);else{var i=this.#r.get(n);i&&(this.#e.set(n,i.effect),this.#r.delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,o]of this.#t){if(this.#t.delete(s),s===e)break;const a=this.#r.get(o);a&&($e(a.effect),this.#r.delete(o))}for(const[s,o]of this.#e){if(s===n)continue;const a=()=>{if(Array.from(this.#t.values()).includes(s)){var c=document.createDocumentFragment();Bu(o,c),c.append(It()),this.#r.set(s,{effect:o,fragment:c})}else $e(o);this.#e.delete(s)};this.#i||!r?qr(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const n=Array.from(this.#t.values());for(const[r,i]of this.#r)n.includes(r)||($e(i.effect),this.#r.delete(r))};ensure(e,n){var r=he,i=Du();if(n&&!this.#e.has(e)&&!this.#r.has(e))if(i){var s=document.createDocumentFragment(),o=It();s.append(o),this.#r.set(e,{effect:lt(()=>n(o)),fragment:s})}else this.#e.set(e,lt(()=>n(this.anchor)));if(this.#t.set(r,e),i){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else U&&(this.anchor=J),this.#l()}}function Li(t){Se===null&&hu(),Wr&&Se.l!==null?Y_(Se).m.push(t):$a(()=>{const e=Gt(t);if(typeof e=="function")return e})}function K_(t){Se===null&&hu(),Li(()=>()=>Gt(t))}function Y_(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}function Ee(t,e,n=!1){U&&ur();var r=new ad(t),i=n?ar:0;function s(o,a){if(U){const c=fu(t)===js;if(o===c){var l=Qs();Be(l),r.anchor=l,mt(!1),r.ensure(o,a),mt(!0);return}}r.ensure(o,a)}Br(()=>{var o=!1;e((a,l=!0)=>{o=!0,s(l,a)}),o||s(!1,null)},i)}function ro(t,e){return e}function Q_(t,e,n){for(var r=t.items,i=[],s=e.length,o=0;o<s;o++)Fa(e[o].e,i,!0);var a=s>0&&i.length===0&&n!==null;if(a){var l=n.parentNode;Lu(l),l.append(n),r.clear(),Kt(t,e[0].prev,e[s-1].next)}zu(i,()=>{for(var c=0;c<s;c++){var d=e[c];a||(r.delete(d.k),Kt(t,d.prev,d.next)),$e(d.e,!a)}})}function Qr(t,e,n,r,i,s=null){var o=t,a={flags:e,items:new Map,first:null},l=(e&ru)!==0;if(l){var c=t;o=U?Be(Bt(c)):c.appendChild(It())}U&&ur();var d=null,h=!1,u=new Map,f=Na(()=>{var I=n();return ya(I)?I:I==null?[]:wa(I)}),p,g;function w(){J_(g,p,a,u,o,i,e,r,n),s!==null&&(p.length===0?d?Ua(d):d=lt(()=>s(o)):d!==null&&qr(d,()=>{d=null}))}Br(()=>{g??=V,p=y(f);var I=p.length;if(h&&I===0)return;h=I===0;let S=!1;if(U){var R=fu(o)===js;R!==(I===0)&&(o=Qs(),Be(o),mt(!1),S=!0)}if(U){for(var P=null,M,C=0;C<I;C++){if(J.nodeType===Hr&&J.data===ba){o=J,S=!0,mt(!1);break}var E=p[C],v=r(E,C);M=Va(J,a,P,null,E,v,C,i,e,n),a.items.set(v,M),P=M}I>0&&Be(Qs())}if(U)I===0&&s&&(d=lt(()=>s(o)));else if(Du()){var T=new Set,A=he;for(C=0;C<I;C+=1){E=p[C],v=r(E,C);var F=a.items.get(v)??u.get(v);F?(e&(Hs|Ws))!==0&&ld(F,E,C,e):(M=Va(null,a,null,null,E,v,C,i,e,n,!0),u.set(v,M)),T.add(v)}for(const[O,z]of a.items)T.has(O)||A.skipped_effects.add(z.e);A.oncommit(w)}else w();S&&mt(!0),y(f)}),U&&(o=J)}function J_(t,e,n,r,i,s,o,a,l){var c=(o&Nm)!==0,d=(o&(Hs|Ws))!==0,h=e.length,u=n.items,f=n.first,p=f,g,w=null,I,S=[],R=[],P,M,C,E;if(c)for(E=0;E<h;E+=1)P=e[E],M=a(P,E),C=u.get(M),C!==void 0&&(C.a?.measure(),(I??=new Set).add(C));for(E=0;E<h;E+=1){if(P=e[E],M=a(P,E),C=u.get(M),C===void 0){var v=r.get(M);if(v!==void 0){r.delete(M),u.set(M,v);var T=w?w.next:p;Kt(n,w,v),Kt(n,v,T),Ba(v,T,i),w=v}else{var A=p?p.e.nodes_start:i;w=Va(A,n,w,w===null?n.first:w.next,P,M,E,s,o,l)}u.set(M,w),S=[],R=[],p=w.next;continue}if(d&&ld(C,P,E,o),(C.e.f&pt)!==0&&(Ua(C.e),c&&(C.a?.unfix(),(I??=new Set).delete(C))),C!==p){if(g!==void 0&&g.has(C)){if(S.length<R.length){var F=R[0],O;w=F.prev;var z=S[0],Y=S[S.length-1];for(O=0;O<S.length;O+=1)Ba(S[O],F,i);for(O=0;O<R.length;O+=1)g.delete(R[O]);Kt(n,z.prev,Y.next),Kt(n,w,z),Kt(n,Y,F),p=F,w=Y,E-=1,S=[],R=[]}else g.delete(C),Ba(C,p,i),Kt(n,C.prev,C.next),Kt(n,C,w===null?n.first:w.next),Kt(n,w,C),w=C;continue}for(S=[],R=[];p!==null&&p.k!==M;)(p.e.f&pt)===0&&(g??=new Set).add(p),R.push(p),p=p.next;if(p===null)continue;C=p}S.push(C),w=C,p=C.next}if(p!==null||g!==void 0){for(var H=g===void 0?[]:wa(g);p!==null;)(p.e.f&pt)===0&&H.push(p),p=p.next;var Q=H.length;if(Q>0){var ge=(o&ru)!==0&&h===0?i:null;if(c){for(E=0;E<Q;E+=1)H[E].a?.measure();for(E=0;E<Q;E+=1)H[E].a?.fix()}Q_(n,H,ge)}}c&&Pn(()=>{if(I!==void 0)for(C of I)C.a?.apply()}),t.first=n.first&&n.first.e,t.last=w&&w.e;for(var Z of r.values())$e(Z.e);r.clear()}function ld(t,e,n,r){(r&Hs)!==0&&Vr(t.v,e),(r&Ws)!==0?Vr(t.i,n):t.i=n}function Va(t,e,n,r,i,s,o,a,l,c,d){var h=(l&Hs)!==0,u=(l&xm)===0,f=h?u?Da(i,!1,!1):xn(i):i,p=(l&Ws)===0?o:xn(o),g={i:p,v:f,k:s,a:null,e:null,prev:n,next:r};try{if(t===null){var w=document.createDocumentFragment();w.append(t=It())}return g.e=lt(()=>a(t,f,p,c),U),g.e.prev=n&&n.e,g.e.next=r&&r.e,n===null?d||(e.first=g):(n.next=g,n.e.next=g.e),r!==null&&(r.prev=g,r.e.prev=g.e),g}finally{}}function Ba(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==null&&s!==r;){var o=qt(s);i.before(s),s=o}}function Kt(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Re(t,e,n,r,i){U&&ur();var s=e.$$slots?.[n],o=!1;s===!0&&(s=e.children,o=!0),s===void 0||s(t,o?()=>r:r)}function X_(t,e,n,r,i,s){let o=U;U&&ur();var a=null;U&&J.nodeType===Ym&&(a=J,ur());var l=U?J:t,c=new ad(l,!1);Br(()=>{const d=e()||null;var h=Hm;if(d===null){c.ensure(null,null);return}return c.ensure(d,u=>{if(d){if(a=U?a:document.createElementNS(h,d),pn(a,a),r){U&&B_(d)&&a.append(document.createComment(""));var f=U?Bt(a):a.appendChild(It());U&&(f===null?mt(!1):Be(f)),r(a,f)}V.nodes_end=a,u.before(a)}U&&Be(u)}),()=>{}},ar),ki(()=>{}),o&&(mt(!0),Be(l))}function Dn(t,e){Ai(()=>{var n=t.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const i=document.createElement("style");i.id=e.hash,i.textContent=e.code,r.appendChild(i)}})}function Z_(t,e){var n=void 0,r;Br(()=>{n!==(n=e())&&(r&&($e(r),r=null),n&&(r=lt(()=>{Ai(()=>n(t))})))})}function cd(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=cd(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function eg(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=cd(t))&&(r&&(r+=" "),r+=e);return r}function tg(t){return typeof t=="object"?eg(t):t??""}const ud=[...` 	
\r\f \v\uFEFF`];function ng(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var i in n)if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s;(o===0||ud.includes(r[o-1]))&&(a===r.length||ud.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function dd(t,e=!1){var n=e?" !important;":";",r="";for(var i in t){var s=t[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function qa(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function rg(t,e){if(e){var n="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(qa)),i&&l.push(...Object.keys(i).map(qa));var c=0,d=-1;const g=t.length;for(var h=0;h<g;h++){var u=t[h];if(a?u==="/"&&t[h-1]==="*"&&(a=!1):s?s===u&&(s=!1):u==="/"&&t[h+1]==="*"?a=!0:u==='"'||u==="'"?s=u:u==="("?o++:u===")"&&o--,!a&&s===!1&&o===0){if(u===":"&&d===-1)d=h;else if(u===";"||h===g-1){if(d!==-1){var f=qa(t.substring(c,d).trim());if(!l.includes(f)){u!==";"&&h++;var p=t.substring(c,h).trim();n+=" "+p+";"}}c=h+1,d=-1}}}}return r&&(n+=dd(r)),i&&(n+=dd(i,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function Di(t,e,n,r,i,s){var o=t.__className;if(U||o!==n||o===void 0){var a=ng(n,r,s);(!U||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):e?t.className=a:t.setAttribute("class",a)),t.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&t.classList.toggle(l,c)}return s}function Ga(t,e={},n,r){for(var i in n){var s=n[i];e[i]!==s&&(n[i]==null?t.style.removeProperty(i):t.style.setProperty(i,s,r))}}function ig(t,e,n,r){var i=t.__style;if(U||i!==e){var s=rg(e,r);(!U||s!==t.getAttribute("style"))&&(s==null?t.removeAttribute("style"):t.style.cssText=s),t.__style=e}else r&&(Array.isArray(r)?(Ga(t,n?.[0],r[0]),Ga(t,n?.[1],r[1],"important")):Ga(t,n,r));return r}function Oi(t,e,n=!1){if(t.multiple){if(e==null)return;if(!ya(e))return a_();for(var r of t.options)r.selected=e.includes(Mi(r));return}for(r of t.options){var i=Mi(r);if(w_(i,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ka(t){var e=new MutationObserver(()=>{Oi(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ki(()=>{e.disconnect()})}function sg(t,e,n=e){var r=new WeakSet,i=!0;$u(t,"change",s=>{var o=s?"[selected]":":checked",a;if(t.multiple)a=[].map.call(t.querySelectorAll(o),Mi);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");a=l&&Mi(l)}n(a),he!==null&&r.add(he)}),Ai(()=>{var s=e();if(t===document.activeElement){var o=Ii??he;if(r.has(o))return}if(Oi(t,s,i),i&&s===void 0){var a=t.querySelector(":checked");a!==null&&(s=Mi(a),n(s))}t.__value=s,i=!1}),Ka(t)}function Mi(t){return"__value"in t?t.__value:t.value}const $i=Symbol("class"),Fi=Symbol("style"),hd=Symbol("is custom element"),fd=Symbol("is html");function Ya(t){if(U){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;Pe(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;Pe(t,"checked",null),t.checked=i}}};t.__on_r=n,Pn(n),Mu()}}function og(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Pe(t,e,n,r){var i=md(t);U&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="loading"&&(t[Km]=n),n==null?t.removeAttribute(e):typeof n!="string"&&gd(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function ag(t,e,n,r,i=!1,s=!1){if(U&&i&&t.tagName==="INPUT"){var o=t,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in n||Ya(o)}var l=md(t),c=l[hd],d=!l[fd];let h=U&&c;h&&mt(!1);var u=e||{},f=t.tagName==="OPTION";for(var p in e)p in n||(n[p]=null);n.class?n.class=tg(n.class):n[$i]&&(n.class=null),n[Fi]&&(n.style??=null);var g=gd(t);for(const C in n){let E=n[C];if(f&&C==="value"&&E==null){t.value=t.__value="",u[C]=E;continue}if(C==="class"){var w=t.namespaceURI==="http://www.w3.org/1999/xhtml";Di(t,w,E,r,e?.[$i],n[$i]),u[C]=E,u[$i]=n[$i];continue}if(C==="style"){ig(t,E,e?.[Fi],n[Fi]),u[C]=E,u[Fi]=n[Fi];continue}var I=u[C];if(!(E===I&&!(E===void 0&&t.hasAttribute(C)))){u[C]=E;var S=C[0]+C[1];if(S!=="$$")if(S==="on"){const v={},T="$$"+C;let A=C.slice(2);var R=U_(A);if($_(A)&&(A=A.slice(0,-7),v.capture=!0),!R&&I){if(E!=null)continue;t.removeEventListener(A,u[T],v),u[T]=null}if(E!=null)if(R)t[`__${A}`]=E,mr([A]);else{let F=function(O){u[C].call(this,O)};u[T]=nd(A,t,F,v)}else R&&(t[`__${A}`]=void 0)}else if(C==="style")Pe(t,C,E);else if(C==="autofocus")E_(t,!!E);else if(!c&&(C==="__value"||C==="value"&&E!=null))t.value=t.__value=E;else if(C==="selected"&&f)og(t,E);else{var P=C;d||(P=W_(P));var M=P==="defaultValue"||P==="defaultChecked";if(E==null&&!c&&!M)if(l[C]=null,P==="value"||P==="checked"){let v=t;const T=e===void 0;if(P==="value"){let A=v.defaultValue;v.removeAttribute(P),v.defaultValue=A,v.value=v.__value=T?A:null}else{let A=v.defaultChecked;v.removeAttribute(P),v.defaultChecked=A,v.checked=T?A:!1}}else t.removeAttribute(C);else M||g.includes(P)&&(c||typeof E!="string")?(t[P]=E,P in l&&(l[P]=Ve)):typeof E!="function"&&Pe(t,P,E)}}}return h&&mt(!0),u}function pd(t,e,n=[],r=[],i=[],s,o=!1,a=!1){Iu(i,n,r,l=>{var c=void 0,d={},h=t.nodeName==="SELECT",u=!1;if(Br(()=>{var p=e(...l.map(y)),g=ag(t,c,p,s,o,a);u&&h&&"value"in p&&Oi(t,p.value);for(let I of Object.getOwnPropertySymbols(d))p[I]||$e(d[I]);for(let I of Object.getOwnPropertySymbols(p)){var w=p[I];I.description===Wm&&(!c||w!==c[I])&&(d[I]&&$e(d[I]),d[I]=lt(()=>Z_(t,()=>w))),g[I]=w}c=g}),h){var f=t;Ai(()=>{Oi(f,c.value,!0),Ka(f)})}u=!0})}function md(t){return t.__attributes??={[hd]:t.nodeName.includes("-"),[fd]:t.namespaceURI===Um}}var _d=new Map;function gd(t){var e=t.getAttribute("is")||t.nodeName,n=_d.get(e);if(n)return n;_d.set(e,n=[]);for(var r,i=t,s=Element.prototype;s!==i;){r=au(i);for(var o in r)r[o].set&&n.push(o);i=Ea(i)}return n}function vd(t,e,n=e){var r=new WeakSet;$u(t,"input",async i=>{var s=i?t.defaultValue:t.value;if(s=Qa(t)?Ja(s):s,n(s),he!==null&&r.add(he),await L_(),s!==(s=e())){var o=t.selectionStart,a=t.selectionEnd,l=t.value.length;if(t.value=s??"",a!==null){var c=t.value.length;o===a&&a===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(a,c))}}}),(U&&t.defaultValue!==t.value||Gt(e)==null&&t.value)&&(n(Qa(t)?Ja(t.value):t.value),he!==null&&r.add(he)),to(()=>{var i=e();if(t===document.activeElement){var s=Ii??he;if(r.has(s))return}Qa(t)&&i===Ja(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function Qa(t){var e=t.type;return e==="number"||e==="range"}function Ja(t){return t===""?null:+t}function bd(t,e){return t===e||t?.[zt]===e}function lg(t={},e,n,r){return Ai(()=>{var i,s;return to(()=>{i=s,s=[],Gt(()=>{t!==n(...s)&&(e(t,...s),i&&bd(n(...i),t)&&e(null,...i))})}),()=>{Pn(()=>{s&&bd(n(...s),t)&&e(null,...s)})}}),t}function yd(t=!1){const e=Se,n=e.l.u;if(!n)return;let r=()=>Kr(e.s);if(t){let i=0,s={};const o=Ti(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});r=()=>y(o)}n.b.length&&T_(()=>{wd(e,r),Vs(n.b)}),$a(()=>{const i=Gt(()=>n.m.map(Bm));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&$a(()=>{wd(e,r),Vs(n.a)})}function wd(t,e){if(t.l.s)for(const n of t.l.s)y(n);e()}function Xa(t,e,n){if(t==null)return e(void 0),n&&n(void 0),An;const r=Gt(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const Jr=[];function cg(t,e){return{subscribe:Xr(t,e).subscribe}}function Xr(t,e=An){let n=null;const r=new Set;function i(a){if(mu(t,a)&&(t=a,n)){const l=!Jr.length;for(const c of r)c[1](),Jr.push(c,t);if(l){for(let c=0;c<Jr.length;c+=2)Jr[c][0](Jr[c+1]);Jr.length=0}}}function s(a){i(a(t))}function o(a,l=An){const c=[a,l];return r.add(c),r.size===1&&(n=e(i,s)||An),a(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function ug(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return cg(n,(o,a)=>{let l=!1;const c=[];let d=0,h=An;const u=()=>{if(d)return;h();const p=e(r?c[0]:c,o,a);s?o(p):h=typeof p=="function"?p:An},f=i.map((p,g)=>Xa(p,w=>{c[g]=w,d&=~(1<<g),l&&u()},()=>{d|=1<<g}));return l=!0,u(),function(){Vs(f),h(),l=!1}})}function dg(t){let e;return Xa(t,n=>e=n)(),e}let io=!1,Za=Symbol();function _r(t,e,n){const r=n[e]??={store:null,source:Da(void 0),unsubscribe:An};if(r.store!==t&&!(Za in n))if(r.unsubscribe(),r.store=t??null,t==null)r.source.v=void 0,r.unsubscribe=An;else{var i=!0;r.unsubscribe=Xa(t,s=>{i?r.source.v=s:N(r.source,s)}),i=!1}return t&&Za in n?dg(t):y(r.source)}function el(){const t={};function e(){ki(()=>{for(var n in t)t[n].unsubscribe();yi(t,Za,{enumerable:!1,value:!0})})}return[t,e]}function hg(t){var e=io;try{return io=!1,[t(),io]}finally{io=e}}const fg={get(t,e){if(!t.exclude.includes(e))return y(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=V;try{Ct(t.parent_effect),t.special[e]=St({get[e](){return t.props[e]}},e,iu)}finally{Ct(r)}}return t.special[e](n),ku(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),ku(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function Ne(t,e){return new Proxy({props:t,exclude:e,special:{},version:xn(0),parent_effect:V},fg)}const pg={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(wi(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let i=t.props[r];wi(i)&&(i=i());const s=rn(i,e);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(wi(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=rn(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(t,e){if(e===zt||e===ka)return!1;for(let n of t.props)if(wi(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(wi(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function Fe(...t){return new Proxy({props:t},pg)}function St(t,e,n,r){var i=!Wr||(n&Dm)!==0,s=(n&Om)!==0,o=(n&Mm)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?Gt(r):r),a),d;if(s){var h=zt in t||ka in t;d=rn(t,e)?.set??(h&&e in t?R=>t[e]=R:void 0)}var u,f=!1;s?[u,f]=hg(()=>t[e]):u=t[e],u===void 0&&r!==void 0&&(u=c(),d&&(i&&n_(),d(u)));var p;if(i?p=()=>{var R=t[e];return R===void 0?c():(l=!0,R)}:p=()=>{var R=t[e];return R!==void 0&&(a=void 0),R===void 0?a:R},i&&(n&iu)===0)return p;if(d){var g=t.$$legacy;return(function(R,P){return arguments.length>0?((!i||!P||g||f)&&d(P?p():R),R):p()})}var w=!1,I=((n&Lm)!==0?Ti:Na)(()=>(w=!1,p()));s&&y(I);var S=V;return(function(R,P){if(arguments.length>0){const M=P?y(I):i&&s?hn(R):R;return N(I,M),w=!0,a!==void 0&&(a=M),R}return fr&&w||(S.f&ln)!==0?I.v:y(I)})}function mg(t){return new _g(t)}class _g{#t;#e;constructor(e){var n=new Map,r=(s,o)=>{var a=Da(o,!1,!1);return n.set(s,a),a};const i=new Proxy({...e.props||{},$$events:{}},{get(s,o){return y(n.get(o)??r(o,Reflect.get(s,o)))},has(s,o){return o===ka?!0:(y(n.get(o)??r(o,Reflect.get(s,o))),Reflect.has(s,o))},set(s,o,a){return N(n.get(o)??r(o,a),a),Reflect.set(s,o,a)}});this.#e=(e.hydrate?q_:sd)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&_t(),this.#t=i.$$events;for(const s of Object.keys(this.#e))s==="$set"||s==="$destroy"||s==="$on"||yi(this,s,{get(){return this.#e[s]},set(o){this.#e[s]=o},enumerable:!0});this.#e.$set=s=>{Object.assign(i,s)},this.#e.$destroy=()=>{G_(this.#e)}}$set(e){this.#e.$set(e)}$on(e,n){this.#t[e]=this.#t[e]||[];const r=(...i)=>n.call(this,...i);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(i=>i!==r)}}$destroy(){this.#e.$destroy()}}let Ed;typeof HTMLElement=="function"&&(Ed=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(r){return i=>{const s=document.createElement("slot");r!=="default"&&(s.name=r),x(i,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},n=gg(this);for(const r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=t(r),e.default=!0):e[r]=t(r));for(const r of this.attributes){const i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=so(i,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=mg({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$host:this}}),this.$$me=S_(()=>{to(()=>{this.$$r=!0;for(const r of zs(this.$$c)){if(!this.$$p_d[r]?.reflect)continue;this.$$d[r]=this.$$c[r];const i=so(r,this.$$d[r],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,i)}this.$$r=!1})});for(const r in this.$$l)for(const i of this.$$l[r]){const s=this.$$c.$on(r,i);this.$$l_u.set(i,s)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=so(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return zs(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function so(t,e,n,r){const i=n[t]?.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function gg(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function fe(t,e,n,r,i,s){let o=class extends Ed{constructor(){super(t,n,i),this.$$p_d=e}static get observedAttributes(){return zs(e).map(a=>(e[a].attribute||a).toLowerCase())}};return zs(e).forEach(a=>{yi(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=so(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var d=rn(c,a)?.get;d?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{yi(o.prototype,a,{get(){return this.$$c?.[a]}})}),t.element=o,o}const vg=()=>{};/**
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
 */const Id={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw Zr(e)},Zr=function(t){return new Error("Firebase Database ("+Id.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Cd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let u=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(u=64)),r.push(n[d],n[h],n[u],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new yg;const u=s<<2|a>>4;if(r.push(u),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Td=function(t){const e=Cd(t);return tl.encodeByteArray(e,!0)},oo=function(t){return Td(t).replace(/\./g,"")},ao=function(t){try{return tl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wg(t){return Sd(void 0,t)}function Sd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Eg(n)||(t[n]=Sd(t[n],e[n]));return t}function Eg(t){return t!=="__proto__"}/**
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
 */function Ig(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cg=()=>Ig().__FIREBASE_DEFAULTS__,Tg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ao(t[1]);return e&&JSON.parse(e)},nl=()=>{try{return vg()||Cg()||Tg()||Sg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kd=t=>nl()?.emulatorHosts?.[t],Ad=t=>{const e=kd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rd=()=>nl()?.config,Pd=t=>nl()?.[`_${t}`];/**
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
 */class Ui{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rl(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Nd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[oo(JSON.stringify(n)),oo(JSON.stringify(o)),""].join(".")}const Hi={};function kg(){const t={prod:[],emulator:[]};for(const e of Object.keys(Hi))Hi[e]?t.emulator.push(e):t.prod.push(e);return t}function Ag(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let xd=!1;function il(t,e){if(typeof window>"u"||typeof document>"u"||!gr(window.location.host)||Hi[t]===e||Hi[t]||xd)return;Hi[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=kg().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,f){u.setAttribute("width","24"),u.setAttribute("id",f),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{xd=!0,o()},u}function d(u,f){u.setAttribute("id",f),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=Ag(r),f=n("text"),p=document.getElementById(f)||document.createElement("span"),g=n("learnmore"),w=document.getElementById(g)||document.createElement("a"),I=n("preprendIcon"),S=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const R=u.element;a(R),d(w,g);const P=c();l(S,I),R.append(S,p,w,P),document.body.appendChild(R)}s?(p.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,p.innerText="Preview backend running in this workspace."),p.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function Rg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ng(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xg(){return Id.NODE_ADMIN===!0}function Lg(){try{return typeof indexedDB=="object"}catch{return!1}}function Dg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const Og="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Og,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Mg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mn(i,a,r)}}function Mg(t,e){return t.replace($g,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $g=/\{\$([^}]+)}/g;/**
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
 */function ji(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
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
 */const Dd=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ji(ao(s[0])||""),n=ji(ao(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Fg=function(t){const e=Dd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ug=function(t){const e=Dd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Od(s)&&Od(o)){if(!vr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Od(t){return t!==null&&typeof t=="object"}/**
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
 */function br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Hg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const u=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):h<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const u=(i<<5|i>>>27)+c+l+d+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Wg(t,e){const n=new jg(t,e);return n.subscribe.bind(n)}class jg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=al),i.error===void 0&&(i.error=al),i.complete===void 0&&(i.complete=al);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function al(){}function co(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uo=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class Bg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ui;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gg(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qg(t){return t===yr?void 0:t}function Gg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Yg={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Qg=pe.INFO,Jg={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Xg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Jg[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=Qg,this._logHandler=Xg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Zg=(t,e)=>e.some(n=>t instanceof n);let Md,$d;function ev(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tv(){return $d||($d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fd=new WeakMap,cl=new WeakMap,Ud=new WeakMap,ul=new WeakMap,dl=new WeakMap;function nv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fd.set(n,t)}).catch(()=>{}),dl.set(e,t),e}function rv(t){if(cl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cl.set(t,e)}let hl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ud.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iv(t){hl=t(hl)}function sv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fl(this),e,...n);return Ud.set(r,e.sort?e.sort():[e]),Mn(r)}:tv().includes(t)?function(...e){return t.apply(fl(this),e),Mn(Fd.get(this))}:function(...e){return Mn(t.apply(fl(this),e))}}function ov(t){return typeof t=="function"?sv(t):(t instanceof IDBTransaction&&rv(t),Zg(t,ev())?new Proxy(t,hl):t)}function Mn(t){if(t instanceof IDBRequest)return nv(t);if(ul.has(t))return ul.get(t);const e=ov(t);return e!==t&&(ul.set(t,e),dl.set(e,t)),e}const fl=t=>dl.get(t);function av(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mn(o.result),l.oldVersion,l.newVersion,Mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const lv=["get","getKey","getAll","getAllKeys","count"],cv=["put","add","delete","clear"],pl=new Map;function Hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return pl.set(e,s),s}iv(t=>({...t,get:(e,n,r)=>Hd(e,n)||t.get(e,n,r),has:(e,n)=>!!Hd(e,n)||t.has(e,n)}));/**
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
 */class uv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dv(t){return t.getComponent()?.type==="VERSION"}const ml="@firebase/app",Wd="0.14.5";/**
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
 */const _n=new ll("@firebase/app"),hv="@firebase/app-compat",fv="@firebase/analytics-compat",pv="@firebase/analytics",mv="@firebase/app-check-compat",_v="@firebase/app-check",gv="@firebase/auth",vv="@firebase/auth-compat",bv="@firebase/database",yv="@firebase/data-connect",wv="@firebase/database-compat",Ev="@firebase/functions",Iv="@firebase/functions-compat",Cv="@firebase/installations",Tv="@firebase/installations-compat",Sv="@firebase/messaging",kv="@firebase/messaging-compat",Av="@firebase/performance",Rv="@firebase/performance-compat",Pv="@firebase/remote-config",Nv="@firebase/remote-config-compat",xv="@firebase/storage",Lv="@firebase/storage-compat",Dv="@firebase/firestore",Ov="@firebase/ai",Mv="@firebase/firestore-compat",$v="firebase",Fv="12.5.0";/**
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
 */const _l="[DEFAULT]",Uv={[ml]:"fire-core",[hv]:"fire-core-compat",[pv]:"fire-analytics",[fv]:"fire-analytics-compat",[_v]:"fire-app-check",[mv]:"fire-app-check-compat",[gv]:"fire-auth",[vv]:"fire-auth-compat",[bv]:"fire-rtdb",[yv]:"fire-data-connect",[wv]:"fire-rtdb-compat",[Ev]:"fire-fn",[Iv]:"fire-fn-compat",[Cv]:"fire-iid",[Tv]:"fire-iid-compat",[Sv]:"fire-fcm",[kv]:"fire-fcm-compat",[Av]:"fire-perf",[Rv]:"fire-perf-compat",[Pv]:"fire-rc",[Nv]:"fire-rc-compat",[xv]:"fire-gcs",[Lv]:"fire-gcs-compat",[Dv]:"fire-fst",[Mv]:"fire-fst-compat",[Ov]:"fire-vertex","fire-js":"fire-js",[$v]:"fire-js-all"};/**
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
 */const ho=new Map,Hv=new Map,gl=new Map;function jd(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wr(t){const e=t.name;if(gl.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;gl.set(e,t);for(const n of ho.values())jd(n,t);for(const n of Hv.values())jd(n,t);return!0}function fo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ut(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Wv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Wi("app","Firebase",Wv);/**
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
 */class jv{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const Er=Fv;function zd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:_l,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=Rd()),!n)throw $n.create("no-options");const s=ho.get(i);if(s){if(vr(n,s.options)&&vr(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const o=new Kg(i);for(const l of gl.values())o.addComponent(l);const a=new jv(n,r,o);return ho.set(i,a),a}function vl(t=_l){const e=ho.get(t);if(!e&&t===_l&&Rd())return zd();if(!e)throw $n.create("no-app",{appName:t});return e}function Qt(t,e,n){let r=Uv[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(o.join(" "));return}wr(new On(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const zv="firebase-heartbeat-database",Vv=1,Bi="firebase-heartbeat-store";let bl=null;function Vd(){return bl||(bl=av(zv,Vv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),bl}async function Bv(t){try{const n=(await Vd()).transaction(Bi),r=await n.objectStore(Bi).get(qd(t));return await n.done,r}catch(e){if(e instanceof mn)_n.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e?.message});_n.warn(n.message)}}}async function Bd(t,e){try{const r=(await Vd()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,qd(t)),await r.done}catch(n){if(n instanceof mn)_n.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n?.message});_n.warn(r.message)}}}function qd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qv=1024,Gv=30;class Kv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Gv){const i=Jv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){_n.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gd(),{heartbeatsToSend:n,unsentEntries:r}=Yv(this._heartbeatsCache.heartbeats),i=oo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return _n.warn(e),""}}}function Gd(){return new Date().toISOString().substring(0,10)}function Yv(t,e=qv){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Kd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lg()?Dg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bv(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kd(t){return oo(JSON.stringify({version:2,heartbeats:t})).length}function Jv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Xv(t){wr(new On("platform-logger",e=>new uv(e),"PRIVATE")),wr(new On("heartbeat",e=>new Kv(e),"PRIVATE")),Qt(ml,Wd,t),Qt(ml,Wd,"esm2020"),Qt("fire-js","")}Xv("");var Zv="firebase",eb="12.5.0";/**
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
 */Qt(Zv,eb,"app");function Yd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tb=Yd,Qd=new Wi("auth","Firebase",Yd());/**
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
 */const po=new ll("@firebase/auth");function nb(t,...e){po.logLevel<=pe.WARN&&po.warn(`Auth (${Er}): ${t}`,...e)}function mo(t,...e){po.logLevel<=pe.ERROR&&po.error(`Auth (${Er}): ${t}`,...e)}/**
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
 */function Mt(t,...e){throw yl(t,...e)}function vt(t,...e){return yl(t,...e)}function Jd(t,e,n){const r={...tb(),[e]:n};return new Wi("auth","Firebase",r).create(e,{appName:t.name})}function Jt(t){return Jd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qd.create(t,...e)}function D(t,e,...n){if(!t)throw yl(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function vn(t,e){t||gn(e)}/**
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
 */function wl(){return typeof self<"u"&&self.location?.href||""}function Xd(){return Zd()==="http:"||Zd()==="https:"}function Zd(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function rb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xd()||Pg()||"connection"in navigator)?navigator.onLine:!0}function ib(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=sl()||Ld()}get(){return rb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function El(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class eh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ob=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ab=new qi(3e4,6e4);function dt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function bt(t,e,n,r,i={}){return th(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=br({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return Rg()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&gr(t.emulatorConfig.host)&&(c.credentials="include"),eh.fetch()(await nh(t,t.config.apiHost,n,a),c)})}async function th(t,e,n){t._canInitEmulator=!1;const r={...sb,...e};try{const i=new cb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gi(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jd(t,d,c);Mt(t,d)}}catch(i){if(i instanceof mn)throw i;Mt(t,"network-request-failed",{message:String(i)})}}async function Fn(t,e,n,r,i={}){const s=await bt(t,e,n,r,i);return"mfaPendingCredential"in s&&Mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function nh(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?El(t.config,i):`${t.config.apiScheme}://${i}`;return ob.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function lb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),ab.get())})}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function rh(t){return t!==void 0&&t.getResponse!==void 0}function ih(t){return t!==void 0&&t.enterprise!==void 0}class sh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function ub(t){return(await bt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function oh(t,e){return bt(t,"GET","/v2/recaptchaConfig",dt(t,e))}/**
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
 */async function db(t,e){return bt(t,"POST","/v1/accounts:delete",e)}async function _o(t,e){return bt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hb(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=Cl(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Ki(Il(i.auth_time)),issuedAtTime:Ki(Il(i.iat)),expirationTime:Ki(Il(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Il(t){return Number(t)*1e3}function Cl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ao(n);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ah(t){const e=Cl(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&fb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function go(t){const e=t.auth,n=await t.getIdToken(),r=await ti(t,_o(e,{idToken:n}));D(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=i.providerUserInfo?.length?lh(i.providerUserInfo):[],o=_b(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!o?.length,c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Tl(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function mb(t){const e=De(t);await go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _b(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lh(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function gb(t,e){const n=await th(t,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await nh(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&gr(t.emulatorConfig.host)&&(l.credentials="include"),eh.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vb(t,e){return bt(t,"POST","/v2/accounts:revokeToken",dt(t,e))}/**
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
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ah(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");const n=ah(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ni;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Un(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new pb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hb(this,e)}reload(){return mb(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(Jt(this.auth));const e=await this.getIdToken();return await ti(this,db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:f,providerData:p,stsTokenManager:g}=n;D(h&&g,e,"internal-error");const w=ni.fromJSON(this.name,g);D(typeof h=="string",e,"internal-error"),Un(r,e.name),Un(i,e.name),D(typeof u=="boolean",e,"internal-error"),D(typeof f=="boolean",e,"internal-error"),Un(s,e.name),Un(o,e.name),Un(a,e.name),Un(l,e.name),Un(c,e.name),Un(d,e.name);const I=new $t({uid:h,auth:e,email:i,emailVerified:u,displayName:r,isAnonymous:f,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:w,createdAt:c,lastLoginAt:d});return p&&Array.isArray(p)&&(I.providerData=p.map(S=>({...S}))),l&&(I._redirectEventId=l),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new ni;i.updateFromServerResponse(n);const s=new $t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await go(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];D(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new ni;a.updateFromIdToken(r);const l=new $t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Tl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,c),l}}/**
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
 */const ch=new Map;function bn(t){vn(t instanceof Function,"Expected a class definition");let e=ch.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ch.set(t,e),e)}/**
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
 */class uh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uh.type="NONE";const dh=uh;/**
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
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vo(this.userKey,i.apiKey,s),this.fullPersistenceKey=vo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _o(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ri(bn(dh),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||bn(dh);const o=vo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let h;if(typeof d=="string"){const u=await _o(e,{idToken:d}).catch(()=>{});if(!u)break;h=await $t._fromGetAccountInfoResponse(e,u,d)}else h=$t._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ri(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ri(s,e,r))}}/**
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
 */function hh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_h(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vh(e))return"Blackberry";if(bh(e))return"Webos";if(ph(e))return"Safari";if((e.includes("chrome/")||mh(e))&&!e.includes("edge/"))return"Chrome";if(gh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function fh(t=nt()){return/firefox\//i.test(t)}function ph(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mh(t=nt()){return/crios\//i.test(t)}function _h(t=nt()){return/iemobile/i.test(t)}function gh(t=nt()){return/android/i.test(t)}function vh(t=nt()){return/blackberry/i.test(t)}function bh(t=nt()){return/webos/i.test(t)}function Sl(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bb(t=nt()){return Sl(t)&&!!window.navigator?.standalone}function yb(){return Ng()&&document.documentMode===10}function yh(t=nt()){return Sl(t)||gh(t)||bh(t)||vh(t)||/windows phone/i.test(t)||_h(t)}/**
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
 */function wh(t,e=[]){let n;switch(t){case"Browser":n=hh(nt());break;case"Worker":n=`${hh(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Er}/${r}`}/**
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
 */class wb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Eb(t,e={}){return bt(t,"GET","/v2/passwordPolicy",dt(t,e))}/**
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
 */const Ib=6;class Cb{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ib,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Tb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eh(this),this.idTokenSubscription=new Eh(this),this.beforeStateQueue=new wb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _o(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ut(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await go(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ib()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(Jt(this));const n=e?De(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(Jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(Jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Eb(this),n=new Cb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vb(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&nb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Xt(t){return De(t)}class Eh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wg(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sb(t){Yi=t}function kl(t){return Yi.loadJS(t)}function kb(){return Yi.recaptchaV2Script}function Ab(){return Yi.recaptchaEnterpriseScript}function Rb(){return Yi.gapiScript}function Ih(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Pb=500,Nb=6e4,bo=1e12;class xb{constructor(e){this.auth=e,this.counter=bo,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Ob(e,this.auth.name,n||{})),this.counter++,r}reset(e){const n=e||bo;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||bo;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||bo;return this._widgets.get(n)?.execute(),""}}class Lb{constructor(){this.enterprise=new Db}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Db{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ob{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Mb(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Nb)},Pb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Mb(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const $b="recaptcha-enterprise",Qi="NO_RECAPTCHA";class Ch{constructor(e){this.type=$b,this.auth=Xt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{oh(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new sh(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ih(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Qi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Lb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ih(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ab();l.length!==0&&(l+=a),kl(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ji(t,e,n,r=!1,i=!1){const s=new Ch(t);let o;if(i)o=Qi;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ii(t,e,n,r,i){if(i==="EMAIL_PASSWORD_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ji(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ji(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)});else if(i==="PHONE_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await Ji(t,e,n);return r(t,s).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await Ji(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{const s=await Ji(t,e,n,!1,!0);return r(t,s)}else return Promise.reject(i+" provider is not supported.")}async function Fb(t){const e=Xt(t),n=await oh(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new sh(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Ch(e).verify()}/**
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
 */function Ub(t,e){const n=fo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vr(s,e??{}))return i;Mt(i,"already-initialized")}return n.initialize({options:e})}function Hb(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(bn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Wb(t,e,n){const r=Xt(t);D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Th(e),{host:o,port:a}=jb(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){D(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),D(vr(c,r.config.emulator)&&vr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,gr(o)?(rl(`${s}//${o}${l}`),il("Auth",!0)):zb()}function Th(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jb(t){const e=Th(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sh(o)}}}function Sh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function Vb(t,e){return bt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Bb(t,e){return Fn(t,"POST","/v1/accounts:signInWithPassword",dt(t,e))}/**
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
 */async function qb(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}async function Gb(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}/**
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
 */class Xi extends yo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ii(e,n,"signInWithPassword",Bb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return qb(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ii(e,r,"signUpPassword",Vb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Gb(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function si(t,e){return Fn(t,"POST","/v1/accounts:signInWithIdp",dt(t,e))}/**
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
 */const Kb="http://localhost";class Ir extends yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:Kb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=br(n)}return e}}/**
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
 */async function kh(t,e){return bt(t,"POST","/v1/accounts:sendVerificationCode",dt(t,e))}async function Yb(t,e){return Fn(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e))}async function Qb(t,e){const n=await Fn(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e));if(n.temporaryProof)throw Gi(t,"account-exists-with-different-credential",n);return n}const Jb={USER_NOT_FOUND:"user-not-found"};async function Xb(t,e){const n={...e,operation:"REAUTH"};return Fn(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,n),Jb)}/**
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
 */class Zi extends yo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Zi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Zi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Yb(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Qb(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Xb(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Zi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Zb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ey(t){const e=zi(Vi(t)).link,n=e?zi(Vi(e)).deep_link_id:null,r=zi(Vi(t)).deep_link_id;return(r?zi(Vi(r)).link:null)||r||n||e||t}class Al{constructor(e){const n=zi(Vi(e)),r=n.apiKey??null,i=n.oobCode??null,s=Zb(n.mode??null);D(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ey(e);try{return new Al(n)}catch{return null}}}/**
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
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,n){return Xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Al.parseLink(n);return D(r,"argument-error"),Xi._fromEmailAndCode(e,r.code,r.tenantId)}}oi.PROVIDER_ID="password",oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ah{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class es extends Ah{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends es{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Hn.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends es{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com",Wn.PROVIDER_ID="google.com";/**
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
 */class jn extends es{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com",jn.PROVIDER_ID="github.com";/**
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
 */class zn extends es{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com",zn.PROVIDER_ID="twitter.com";/**
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
 */async function ty(t,e){return Fn(t,"POST","/v1/accounts:signUp",dt(t,e))}/**
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
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $t._fromIdTokenResponse(e,r,i),o=Rh(r);return new Cr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rh(r);return new Cr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wo extends mn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wo(e,n,r,i)}}function Ph(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(t,s,e,r):s})}async function ny(t,e,n=!1){const r=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function ry(t,e,n=!1){const{auth:r}=t;if(ut(r.app))return Promise.reject(Jt(r));const i="reauthenticate";try{const s=await ti(t,Ph(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Cl(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Cr._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Mt(r,"user-mismatch"),s}}/**
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
 */async function Nh(t,e,n=!1){if(ut(t.app))return Promise.reject(Jt(t));const r="signIn",i=await Ph(t,r,e),s=await Cr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xh(t,e){return Nh(Xt(t),e)}/**
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
 */async function Lh(t){const e=Xt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dh(t,e,n){if(ut(t.app))return Promise.reject(Jt(t));const r=Xt(t),o=await ii(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ty,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Lh(t),l}),a=await Cr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Oh(t,e,n){return ut(t.app)?Promise.reject(Jt(t)):xh(De(t),oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lh(t),r})}/**
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
 */async function iy(t,e){return bt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Rl(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=De(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ti(r,iy(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sy(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function oy(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function Pl(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function ay(t){return De(t).signOut()}/**
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
 */function Mh(t,e){return bt(t,"POST","/v2/accounts/mfaEnrollment:start",dt(t,e))}const Eo="__sak";/**
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
 */class $h{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ly=1e3,cy=10;class Fh extends $h{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cy):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ly)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fh.type="LOCAL";const uy=Fh;/**
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
 */class Uh extends $h{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uh.type="SESSION";const Hh=Uh;/**
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
 */function dy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Io(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await dy(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Io.receivers=[];/**
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
 */function Nl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Nl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const u=h;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Oe(){return window}function fy(t){Oe().location.href=t}/**
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
 */function xl(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function py(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function my(){return navigator?.serviceWorker?.controller||null}function _y(){return xl()?self:null}/**
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
 */const Wh="firebaseLocalStorageDb",gy=1,Co="firebaseLocalStorage",jh="fbase_key";class ts{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function To(t,e){return t.transaction([Co],e?"readwrite":"readonly").objectStore(Co)}function vy(){const t=indexedDB.deleteDatabase(Wh);return new ts(t).toPromise()}function Ll(){const t=indexedDB.open(Wh,gy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Co,{keyPath:jh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Co)?e(r):(r.close(),await vy(),e(await Ll()))})})}async function zh(t,e,n){const r=To(t,!0).put({[jh]:e,value:n});return new ts(r).toPromise()}async function by(t,e){const n=To(t,!1).get(e),r=await new ts(n).toPromise();return r===void 0?null:r.value}function Vh(t,e){const n=To(t,!0).delete(e);return new ts(n).toPromise()}const yy=800,wy=3;class Bh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Io._getInstance(_y()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await py(),!this.activeServiceWorker)return;this.sender=new hy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||my()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ll();return await zh(e,Eo,"1"),await Vh(e,Eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>by(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=To(i,!1).getAll();return new ts(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bh.type="LOCAL";const Ey=Bh;/**
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
 */function qh(t,e){return bt(t,"POST","/v2/accounts/mfaSignIn:start",dt(t,e))}/**
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
 */const Dl=Ih("rcb"),Iy=new qi(3e4,6e4);class Cy{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Oe().grecaptcha?.render}load(e,n=""){return D(Ty(n),e,"argument-error"),this.shouldResolveImmediately(n)&&rh(Oe().grecaptcha)?Promise.resolve(Oe().grecaptcha):new Promise((r,i)=>{const s=Oe().setTimeout(()=>{i(vt(e,"network-request-failed"))},Iy.get());Oe()[Dl]=()=>{Oe().clearTimeout(s),delete Oe()[Dl];const a=Oe().grecaptcha;if(!a||!rh(a)){i(vt(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const h=l(c,d);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${kb()}?${br({onload:Dl,render:"explicit",hl:n})}`;kl(o).catch(()=>{clearTimeout(s),i(vt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Oe().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ty(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Sy{async load(e){return new xb(e)}clearedOneInstance(){}}/**
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
 */const ns="recaptcha",ky={theme:"light",type:"image"};class Ay{constructor(e,n,r={...ky}){this.parameters=r,this.type=ns,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Xt(e),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Sy:new Cy,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Oe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(Xd()&&!xl(),this.auth,"internal-error"),await Ry(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ub(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ry(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Py{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Zi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Ny(t,e,n){if(ut(t.app))return Promise.reject(Jt(t));const r=Xt(t),i=await xy(r,e,De(n));return new Py(i,s=>xh(r,s))}async function xy(t,e,n){if(!t._getRecaptchaConfig())try{await Fb(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){D(i.type==="enroll",t,"internal-error");const s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ii(t,s,"mfaSmsEnrollment",async(c,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Qi){D(n?.type===ns,c,"argument-error");const h=await Ol(c,d,n);return Mh(c,h)}return Mh(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{D(i.type==="signin",t,"internal-error");const s=r.multiFactorHint?.uid||r.multiFactorUid;D(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ii(t,o,"mfaSmsSignIn",async(d,h)=>{if(h.phoneSignInInfo.captchaResponse===Qi){D(n?.type===ns,d,"argument-error");const u=await Ol(d,h,n);return qh(d,u)}return qh(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ii(t,i,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===Qi){D(n?.type===ns,l,"argument-error");const d=await Ol(l,c,n);return kh(l,d)}return kh(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{n?._reset()}}async function Ol(t,e,n){D(n.type===ns,t,"argument-error");const r=await n.verify();D(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Ly(t,e){return e?bn(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ml extends yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Dy(t){return Nh(t.auth,new Ml(t),t.bypassAuthState)}function Oy(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),ry(n,new Ml(t),t.bypassAuthState)}async function My(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),ny(n,new Ml(t),t.bypassAuthState)}/**
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
 */class Gh{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dy;case"linkViaPopup":case"linkViaRedirect":return My;case"reauthViaPopup":case"reauthViaRedirect":return Oy;default:Mt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $y=new qi(2e3,1e4);class ai extends Gh{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Nl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$y.get())};e()}}ai.currentPopupAction=null;/**
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
 */const Fy="pendingRedirect",So=new Map;class Uy extends Gh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await Hy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hy(t,e){const n=zy(e),r=jy(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Wy(t,e){So.set(t._key(),e)}function jy(t){return bn(t._redirectPersistence)}function zy(t){return vo(Fy,t.config.apiKey,t.name)}async function Vy(t,e,n=!1){if(ut(t.app))return Promise.reject(Jt(t));const r=Xt(t),i=Ly(r,e),o=await new Uy(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const By=600*1e3;class qy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Yh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(vt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=By&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kh(e))}saveEventToCache(e){this.cachedEventUids.add(Kh(e)),this.lastProcessedEventTime=Date.now()}}function Kh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yh({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Gy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yh(t);default:return!1}}/**
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
 */async function Ky(t,e={}){return bt(t,"GET","/v1/projects",e)}/**
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
 */const Yy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qy=/^https?/;async function Jy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ky(t);for(const n of e)try{if(Xy(n))return}catch{}Mt(t,"unauthorized-domain")}function Xy(t){const e=wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Qy.test(n))return!1;if(Yy.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Zy=new qi(3e4,6e4);function Qh(){const t=Oe().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ew(t){return new Promise((e,n)=>{function r(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),n(vt(t,"network-request-failed"))},timeout:Zy.get()})}if(Oe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Oe().gapi?.load)r();else{const i=Ih("iframefcb");return Oe()[i]=()=>{gapi.load?r():n(vt(t,"network-request-failed"))},kl(`${Rb()}?onload=${i}`).catch(s=>n(s))}}).catch(e=>{throw ko=null,e})}let ko=null;function tw(t){return ko=ko||ew(t),ko}/**
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
 */const nw=new qi(5e3,15e3),rw="__/auth/iframe",iw="emulator/auth/iframe",sw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ow=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aw(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?El(e,iw):`https://${t.config.authDomain}/${rw}`,r={apiKey:e.apiKey,appName:t.name,v:Er},i=ow.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${br(r).slice(1)}`}async function lw(t){const e=await tw(t),n=Oe().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:aw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),a=Oe().setTimeout(()=>{s(o)},nw.get());function l(){Oe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const cw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uw=500,dw=600,hw="_blank",fw="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pw(t,e,n,r=uw,i=dw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...cw,width:r.toString(),height:i.toString(),top:s,left:o},c=nt().toLowerCase();n&&(a=mh(c)?hw:n),fh(c)&&(e=e||fw,l.scrollbars="yes");const d=Object.entries(l).reduce((u,[f,p])=>`${u}${f}=${p},`,"");if(bb(c)&&a!=="_self")return mw(e||"",a),new Jh(null);const h=window.open(e||"",a,d);D(h,t,"popup-blocked");try{h.focus()}catch{}return new Jh(h)}function mw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _w="__/auth/handler",gw="emulator/auth/handler",vw=encodeURIComponent("fac");async function Xh(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Er,eventId:i};if(e instanceof Ah){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ol(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof es){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${vw}=${encodeURIComponent(l)}`:"";return`${bw(t)}?${br(a).slice(1)}${c}`}function bw({config:t}){return t.emulator?El(t,gw):`https://${t.authDomain}/${_w}`}/**
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
 */const $l="webStorageSupport";class yw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hh,this._completeRedirectFn=Vy,this._overrideRedirectResult=Wy}async _openPopup(e,n,r,i){vn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Xh(e,n,r,wl(),i);return pw(e,s,Nl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xh(e,n,r,wl(),i);return fy(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lw(e),r=new qy(e);return n.register("authEvent",i=>(D(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($l,{type:$l},i=>{const s=i?.[0]?.[$l];s!==void 0&&n(!!s),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yh()||ph()||Sl()}}const ww=yw;var Zh="@firebase/auth",ef="1.11.1";/**
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
 */class Ew{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Iw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cw(t){wr(new On("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wh(t)},c=new Tb(r,i,s,l);return Hb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wr(new On("auth-internal",e=>{const n=Xt(e.getProvider("auth").getImmediate());return(r=>new Ew(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(Zh,ef,Iw(t)),Qt(Zh,ef,"esm2020")}/**
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
 */const Tw=Pd("authIdTokenMaxAge")||300;let tf=null;const Sw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tw)return;const i=n?.token;tf!==i&&(tf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kw(t=vl()){const e=fo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ub(t,{popupRedirectResolver:ww,persistence:[Ey,uy,Hh]}),r=Pd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Sw(s.toString());oy(n,o,()=>o(n.currentUser)),sy(n,a=>o(a))}}const i=kd("auth");return i&&Wb(n,`http://${i}`),n}function Aw(){return document.getElementsByTagName("head")?.[0]??document}Sb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Aw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Cw("Browser");const nf="@firebase/database",rf="1.1.0";/**
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
 */let sf="";function Rw(t){sf=t}/**
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
 */class Pw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ji(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Nw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const of=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Pw(e)}}catch{}return new Nw},Tr=of("localStorage"),xw=of("sessionStorage");/**
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
 */const li=new ll("@firebase/database"),Lw=(function(){let t=1;return function(){return t++}})(),af=function(t){const e=Vg(t),n=new Hg;n.update(e);const r=n.digest();return tl.encodeByteArray(r)},rs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=rs.apply(null,r):typeof r=="object"?e+=Ue(r):e+=r,e+=" "}return e};let is=null,lf=!0;const Dw=function(t,e){k(!0,"Can't turn on custom loggers persistently."),li.logLevel=pe.VERBOSE,is=li.log.bind(li)},qe=function(...t){if(lf===!0&&(lf=!1,is===null&&xw.get("logging_enabled")===!0&&Dw()),is){const e=rs.apply(null,t);is(e)}},ss=function(t){return function(...e){qe(t,...e)}},Fl=function(...t){const e="FIREBASE INTERNAL ERROR: "+rs(...t);li.error(e)},yn=function(...t){const e=`FIREBASE FATAL ERROR: ${rs(...t)}`;throw li.error(e),new Error(e)},rt=function(...t){const e="FIREBASE WARNING: "+rs(...t);li.warn(e)},Ow=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ul=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Mw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Sr="[MIN_NAME]",Vn="[MAX_NAME]",kr=function(t,e){if(t===e)return 0;if(t===Sr||e===Vn)return-1;if(e===Sr||t===Vn)return 1;{const n=df(t),r=df(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},$w=function(t,e){return t===e?0:t<e?-1:1},os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},Hl=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ue(e[r]),n+=":",n+=Hl(t[e[r]]);return n+="}",n},cf=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const uf=function(t){k(!Ul(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},Fw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Uw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Ww=new RegExp("^-?(0*)\\d{1,10}$"),jw=-2147483648,zw=2147483647,df=function(t){if(Ww.test(t)){const e=Number(t);if(e>=jw&&e<=zw)return e}return null},ci=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw rt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Vw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},as=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Bw{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ut(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){rt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rt(e)}}class Ao{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ao.OWNER="owner";/**
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
 */const Wl="5",hf="v",ff="s",pf="r",mf="f",_f=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gf="ls",vf="p",jl="ac",bf="websocket",yf="long_polling";/**
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
 */class wf{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Gw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ef(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===bf)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yf)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gw(t)&&(n.ns=t.namespace);const i=[];return Ge(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Kw{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return wg(this.counters_)}}/**
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
 */const zl={},Vl={};function Bl(t){const e=t.toString();return zl[e]||(zl[e]=new Kw),zl[e]}function Yw(t,e){const n=t.toString();return Vl[n]||(Vl[n]=e()),Vl[n]}/**
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
 */class Qw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ci(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const If="start",Jw="close",Xw="pLPCommand",Zw="pRTLPCB",Cf="id",Tf="pw",Sf="ser",e1="cb",t1="seg",n1="ts",r1="d",i1="dframe",kf=1870,Af=30,s1=kf-Af,o1=25e3,a1=3e4;class ui{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ss(e),this.stats_=Bl(n),this.urlFn=l=>(this.appCheckToken&&(l[jl]=this.appCheckToken),Ef(n,yf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Qw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(a1)),Mw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ql((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===If)this.id=a,this.password=l;else if(o===Jw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[If]="t",r[Sf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[e1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[hf]=Wl,this.transportSessionId&&(r[ff]=this.transportSessionId),this.lastSessionId&&(r[gf]=this.lastSessionId),this.applicationId&&(r[vf]=this.applicationId),this.appCheckToken&&(r[jl]=this.appCheckToken),typeof location<"u"&&location.hostname&&_f.test(location.hostname)&&(r[pf]=mf);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Fw()&&!Uw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Td(n),i=cf(r,s1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[i1]="t",r[Cf]=e,r[Tf]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ql{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lw(),window[Xw+this.uniqueCallbackIdentifier]=e,window[Zw+this.uniqueCallbackIdentifier]=n,this.myIFrame=ql.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cf]=this.myID,e[Tf]=this.myPW,e[Sf]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Af+r.length<=kf;){const o=this.pendingSegs.shift();r=r+"&"+t1+i+"="+o.seg+"&"+n1+i+"="+o.ts+"&"+r1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(o1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const l1=16384,c1=45e3;let Ro=null;typeof MozWebSocket<"u"?Ro=MozWebSocket:typeof WebSocket<"u"&&(Ro=WebSocket);class Ft{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ss(this.connId),this.stats_=Bl(n),this.connURL=Ft.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[hf]=Wl,typeof location<"u"&&location.hostname&&_f.test(location.hostname)&&(o[pf]=mf),n&&(o[ff]=n),r&&(o[gf]=r),i&&(o[jl]=i),s&&(o[vf]=s),Ef(e,bf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tr.set("previous_websocket_failure",!0);try{let r;xg(),this.mySock=new Ro(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ro!==null&&!Ft.forceDisallow_}static previouslyFailed(){return Tr.isInMemoryStorage||Tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ji(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cf(n,l1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(c1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ft.responsesRequiredToBeHealthy=2,Ft.healthyTimeout=3e4;/**
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
 */class ls{static get ALL_TRANSPORTS(){return[ui,Ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ft&&Ft.isAvailable();let r=n&&!Ft.previouslyFailed();if(e.webSocketOnly&&(n||rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ft];else{const i=this.transports_=[];for(const s of ls.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
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
 */const u1=6e4,d1=5e3,h1=10*1024,f1=100*1024,Gl="t",Rf="d",p1="s",Pf="r",m1="e",Nf="o",xf="a",Lf="n",Df="p",_1="h";class g1{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ss("c:"+this.id+":"),this.transportManager_=new ls(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=as(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>f1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>h1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gl in e){const n=e[Gl];n===xf?this.upgradeIfSecondaryHealthy_():n===Pf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=os("t",e),r=os("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Df,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=os("t",e),r=os("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=os(Gl,e);if(Rf in e){const r=e[Rf];if(n===_1){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===p1?this.onConnectionShutdown_(r):n===Pf?this.onReset_(r):n===m1?Fl("Server Error: "+r):n===Nf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wl!==r&&rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),as(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(u1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):as(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(d1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Df,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Of{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Mf{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Po extends Mf{static getInstance(){return new Po}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $f=32,Ff=768;class le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new le("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function Kl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function v1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Uf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new le(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function it(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return it(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function b1(t,e){const n=cs(t,0),r=cs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=kr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Yl(t,e){if(Bn(t)!==Bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function kt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Bn(t)>Bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class y1{constructor(e,n){this.errorPrefix_=n,this.parts_=cs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=uo(this.parts_[r]);Hf(this)}}function w1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=uo(e),Hf(t)}function E1(t){const e=t.parts_.pop();t.byteLength_-=uo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Hf(t){if(t.byteLength_>Ff)throw new Error(t.errorPrefix_+"has a key path longer than "+Ff+" bytes ("+t.byteLength_+").");if(t.parts_.length>$f)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$f+") or object contains a cycle "+Ar(t))}function Ar(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ql extends Mf{static getInstance(){return new Ql}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const us=1e3,I1=300*1e3,Wf=30*1e3,C1=1.3,T1=3e4,S1="server_kill",jf=3;class wn extends Of{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=wn.nextPersistentConnectionId_++,this.log_=ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=us,this.maxReconnectDelay_=I1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ql.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Po.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ue(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ui,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;wn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const r=ei(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ug(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fg(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fl("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>T1&&(this.reconnectDelay_=us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*C1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+wn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new g1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{rt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(S1)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&rt(h),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ol(this.interruptReasons_)&&(this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Hl(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new le(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jf&&(this.reconnectDelay_=Wf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sf.replace(/\./g,"-")]=1,sl()?e["framework.cordova"]=1:Ld()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Po.getInstance().currentlyOnline();return ol(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0,wn.nextConnectionId_=0;/**
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
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
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
 */class No{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(Sr,e),i=new K(Sr,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
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
 */let xo;class zf extends No{static get __EMPTY_NODE(){return xo}static set __EMPTY_NODE(e){xo=e}compare(e,n){return kr(e.name,n.name)}isDefinedOn(e){throw Zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Vn,xo)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,xo)}toString(){return".key"}}const qn=new zf;/**
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
 */class Lo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??ht.EMPTY_NODE,this.right=s??ht.EMPTY_NODE}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ht.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}je.RED=!0,je.BLACK=!1;class k1{copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ht{constructor(e,n=ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Lo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Lo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Lo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Lo(this.root_,null,this.comparator_,!0,e)}}ht.EMPTY_NODE=new k1;/**
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
 */function A1(t,e){return kr(t.name,e.name)}function Jl(t,e){return kr(t,e)}/**
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
 */let Xl;function R1(t){Xl=t}const Vf=function(t){return typeof t=="number"?"number:"+uf(t):"string:"+t},Bf=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else k(t===Xl||t.isEmpty(),"priority of unexpected type.");k(t===Xl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let qf;class ze{static set __childrenNodeConstructor(e){qf=e}static get __childrenNodeConstructor(){return qf}constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=uf(this.value_):e+=this.value_,this.lazyHash_=af(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ze.VALUE_TYPE_ORDER.indexOf(n),s=ze.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Gf,Kf;function P1(t){Gf=t}function N1(t){Kf=t}class x1 extends No{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?kr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Vn,new ze("[PRIORITY-POST]",Kf))}makePost(e,n){const r=Gf(e);return new K(n,new ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ce=new x1;/**
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
 */const L1=Math.log(2);class D1{constructor(e){const n=s=>parseInt(Math.log(s)/L1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Do=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let h,u;if(d===0)return null;if(d===1)return h=t[l],u=n?n(h):h,new je(u,h.node,je.BLACK,null,null);{const f=parseInt(d/2,10)+l,p=i(l,f),g=i(f+1,c);return h=t[f],u=n?n(h):h,new je(u,h.node,je.BLACK,p,g)}},s=function(l){let c=null,d=null,h=t.length;const u=function(p,g){const w=h-p,I=h;h-=p;const S=i(w+1,I),R=t[w],P=n?n(R):R;f(new je(P,R.node,g,null,S))},f=function(p){c?(c.left=p,c=p):(d=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),w=Math.pow(2,l.count-(p+1));g?u(w,je.BLACK):(u(w,je.BLACK),u(w,je.RED))}return d},o=new D1(t.length),a=s(o);return new ht(r||e,a)};/**
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
 */let Zl;const di={};class En{static get Default(){return k(di&&Ce,"ChildrenNode.ts has not been loaded"),Zl=Zl||new En({".priority":di},{".priority":Ce}),Zl}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ht?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==qn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Do(r,e.getCompare()):a=di;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new En(d,c)}addToIndexes(e,n){const r=lo(this.indexes_,(i,s)=>{const o=ei(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===di)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Do(a,o.getCompare())}else return di;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new En(r,this.indexSet_)}removeFromIndexes(e,n){const r=lo(this.indexes_,i=>{if(i===di)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new En(r,this.indexSet_)}}/**
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
 */let ds;class ${static get EMPTY_NODE(){return ds||(ds=new $(new ht(Jl),null,En.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Bf(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ds:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ds:this.priorityNode_;return new $(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{k(q(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ye(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),r++,s&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vf(this.getPriority().val())+":"),this.forEachChild(Ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":af(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hs?-1:0}withIndex(e){if(e===qn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ce),i=n.getIterator(Ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qn?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class O1 extends ${constructor(){super(new ht(Jl),$.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const hs=new O1;Object.defineProperties(K,{MIN:{value:new K(Sr,$.EMPTY_NODE)},MAX:{value:new K(Vn,hs)}}),zf.__EMPTY_NODE=$.EMPTY_NODE,ze.__childrenNodeConstructor=$,R1(hs),N1(hs);/**
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
 */const M1=!0;function He(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ze(n,He(e))}if(!(t instanceof Array)&&M1){const n=[];let r=!1;if(Ge(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return $.EMPTY_NODE;const s=Do(n,A1,o=>o.name,Jl);if(r){const o=Do(n,Ce.getCompare());return new $(s,He(e),new En({".priority":o},{".priority":Ce}))}else return new $(s,He(e),En.Default)}else{let n=$.EMPTY_NODE;return Ge(t,(r,i)=>{if(Yt(t,r)&&r.substring(0,1)!=="."){const s=He(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(He(e))}}P1(He);/**
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
 */class ec extends No{constructor(e){super(),this.indexPath_=e,k(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?kr(e.name,n.name):s}makePost(e,n){const r=He(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,hs);return new K(Vn,e)}toString(){return cs(this.indexPath_,0).join("/")}}/**
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
 */class $1 extends No{compare(e,n){const r=e.node.compareTo(n.node);return r===0?kr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=He(e);return new K(n,r)}toString(){return".value"}}const Yf=new $1;/**
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
 */function Qf(t){return{type:"value",snapshotNode:t}}function hi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ps(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function F1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class tc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(fs(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(hi(n,r)):o.trackChildChange(ps(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(fs(i,s))}),n.isLeafNode()||n.forEachChild(Ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ps(i,s,o))}else r.trackChildChange(hi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ms{constructor(e){this.indexedFilter_=new tc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const s=this;return n.forEachChild(Ce,(o,a)=>{s.matches(new K(o,a))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class U1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=$.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,f)=>h(f,u)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new K(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,l);if(d&&!r.isEmpty()&&f>=0)return s?.trackChildChange(ps(n,r,h)),a.updateImmediateChild(n,r);{s?.trackChildChange(fs(n,h));const g=a.updateImmediateChild(n,$.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(s?.trackChildChange(hi(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(fs(c.name,c.node)),s.trackChildChange(hi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
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
 */class nc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Sr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new nc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function H1(t){return t.loadsAllData()?new tc(t.getIndex()):t.hasLimit()?new U1(t):new ms(t)}function W1(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function j1(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function z1(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Jf(t,e){const n=t.copy();return n.index_=e,n}function Xf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===Yf?n="$value":t.index_===qn?n="$key":(k(t.index_ instanceof ec,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ue(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ue(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ue(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
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
 */class Oo extends Of{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ss("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Oo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Xf(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),ei(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,n){const r=Oo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Xf(e._queryParams),r=e._path.toString(),i=new Ui;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+br(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ji(a.responseText)}catch{rt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&rt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class V1{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Mo(){return{value:null,children:new Map}}function ep(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,Mo());const i=t.children.get(r);e=ye(e),ep(i,e,n)}}function rc(t,e,n){t.value!==null?n(e,t.value):B1(t,(r,i)=>{const s=new le(e.toString()+"/"+r);rc(i,s,n)})}function B1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class q1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ge(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const tp=10*1e3,G1=30*1e3,K1=300*1e3;class Y1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new q1(e);const r=tp+(G1-tp)*Math.random();as(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ge(e,(i,s)=>{s>0&&Yt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),as(this.reportStats_.bind(this),Math.floor(Math.random()*2*K1))}}/**
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
 */var Ut;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ut||(Ut={}));function ic(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function oc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class $o{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ut.ACK_USER_WRITE,this.source=ic()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(e));return new $o(ie(),n,this.revert)}}else return k(q(this.path)===e,"operationForChild called for unrelated child."),new $o(ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class _s{constructor(e,n){this.source=e,this.path=n,this.type=Ut.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new _s(this.source,ie()):new _s(this.source,ye(this.path))}}/**
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
 */class Rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ut.OVERWRITE}operationForChild(e){return G(this.path)?new Rr(this.source,ie(),this.snap.getImmediateChild(e)):new Rr(this.source,ye(this.path),this.snap)}}/**
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
 */class fi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ut.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new le(e));return n.isEmpty()?null:n.value?new Rr(this.source,ie(),n.value):new fi(this.source,ie(),n)}else return k(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fi(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Gn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Q1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function J1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(F1(o.childName,o.snapshotNode))}),gs(t,i,"child_removed",e,r,n),gs(t,i,"child_added",e,r,n),gs(t,i,"child_moved",s,r,n),gs(t,i,"child_changed",e,r,n),gs(t,i,"value",e,r,n),i}function gs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Z1(t,a,l)),o.forEach(a=>{const l=X1(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function X1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Z1(t,e,n){if(e.childName==null||n.childName==null)throw Zr("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Fo(t,e){return{eventCache:t,serverCache:e}}function vs(t,e,n,r){return Fo(new Gn(e,n,r),t.serverCache)}function np(t,e,n,r){return Fo(t.eventCache,new Gn(e,n,r))}function Uo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ac;const e0=()=>(ac||(ac=new ht($w)),ac);class we{static fromObject(e){let n=new we(null);return Ge(e,(r,i)=>{n=n.set(new le(r),i)}),n}constructor(e,n=e0()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(G(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ye(e),n);return s!=null?{path:ke(new le(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(ye(e)):new we(null)}}set(e,n){if(G(e))return new we(n,this.children);{const r=q(e),s=(this.children.get(r)||new we(null)).set(ye(e),n),o=this.children.insert(r,s);return new we(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(ye(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new we(null):new we(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(ye(e)):null}}setTree(e,n){if(G(e))return n;{const r=q(e),s=(this.children.get(r)||new we(null)).setTree(ye(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new we(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(ye(e),ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(ye(e),ke(n,i),r):new we(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ht{constructor(e){this.writeTree_=e}static empty(){return new Ht(new we(null))}}function bs(t,e,n){if(G(e))return new Ht(new we(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=it(i,e);return s=s.updateChild(o,n),new Ht(t.writeTree_.set(i,s))}else{const i=new we(n),s=t.writeTree_.setTree(e,i);return new Ht(s)}}}function lc(t,e,n){let r=t;return Ge(n,(i,s)=>{r=bs(r,ke(e,i),s)}),r}function rp(t,e){if(G(e))return Ht.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Ht(n)}}function cc(t,e){return Nr(t,e)!=null}function Nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(it(n.path,e)):null}function ip(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function Kn(t,e){if(G(e))return t;{const n=Nr(t,e);return n!=null?new Ht(new we(n)):new Ht(t.writeTree_.subtree(e))}}function uc(t){return t.writeTree_.isEmpty()}function pi(t,e){return sp(ie(),t.writeTree_,e)}function sp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=sp(ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ke(t,".priority"),r)),n}}/**
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
 */function Ho(t,e){return up(e,t)}function t0(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=bs(t.visibleWrites,e,n)),t.lastWriteId=r}function n0(t,e,n,r){k(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=lc(t.visibleWrites,e,n),t.lastWriteId=r}function r0(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function i0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&s0(a,r.path)?i=!1:kt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return o0(t),!0;if(r.snap)t.visibleWrites=rp(t.visibleWrites,r.path);else{const a=r.children;Ge(a,l=>{t.visibleWrites=rp(t.visibleWrites,ke(r.path,l))})}return!0}else return!1}function s0(t,e){if(t.snap)return kt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&kt(ke(t.path,n),e))return!0;return!1}function o0(t){t.visibleWrites=op(t.allWrites,a0,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function a0(t){return t.visible}function op(t,e,n){let r=Ht.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)kt(n,o)?(a=it(n,o),r=bs(r,a,s.snap)):kt(o,n)&&(a=it(o,n),r=bs(r,ie(),s.snap.getChild(a)));else if(s.children){if(kt(n,o))a=it(n,o),r=lc(r,a,s.children);else if(kt(o,n))if(a=it(o,n),G(a))r=lc(r,ie(),s.children);else{const l=ei(s.children,q(a));if(l){const c=l.getChild(ye(a));r=bs(r,ie(),c)}}}else throw Zr("WriteRecord should have .snap or .children")}}return r}function ap(t,e,n,r,i){if(!r&&!i){const s=Nr(t.visibleWrites,e);if(s!=null)return s;{const o=Kn(t.visibleWrites,e);if(uc(o))return n;if(n==null&&!cc(o,ie()))return null;{const a=n||$.EMPTY_NODE;return pi(o,a)}}}else{const s=Kn(t.visibleWrites,e);if(!i&&uc(s))return n;if(!i&&n==null&&!cc(s,ie()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(kt(c.path,e)||kt(e,c.path))},a=op(t.allWrites,o,e),l=n||$.EMPTY_NODE;return pi(a,l)}}}function l0(t,e,n){let r=$.EMPTY_NODE;const i=Nr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Kn(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=pi(Kn(s,new le(o)),a);r=r.updateImmediateChild(o,l)}),ip(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Kn(t.visibleWrites,e);return ip(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function c0(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ke(e,n);if(cc(t.visibleWrites,s))return null;{const o=Kn(t.visibleWrites,s);return uc(o)?i.getChild(n):pi(o,i.getChild(n))}}function u0(t,e,n,r){const i=ke(e,n),s=Nr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Kn(t.visibleWrites,i);return pi(o,r.getNode().getImmediateChild(n))}else return null}function d0(t,e){return Nr(t.visibleWrites,e)}function h0(t,e,n,r,i,s,o){let a;const l=Kn(t.visibleWrites,e),c=Nr(l,ie());if(c!=null)a=c;else if(n!=null)a=pi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=u.getNext();for(;f&&d.length<i;)h(f,r)!==0&&d.push(f),f=u.getNext();return d}else return[]}function f0(){return{visibleWrites:Ht.empty(),allWrites:[],lastWriteId:-1}}function Wo(t,e,n,r){return ap(t.writeTree,t.treePath,e,n,r)}function dc(t,e){return l0(t.writeTree,t.treePath,e)}function lp(t,e,n,r){return c0(t.writeTree,t.treePath,e,n,r)}function jo(t,e){return d0(t.writeTree,ke(t.treePath,e))}function p0(t,e,n,r,i,s){return h0(t.writeTree,t.treePath,e,n,r,i,s)}function hc(t,e,n){return u0(t.writeTree,t.treePath,e,n)}function cp(t,e){return up(ke(t.treePath,e),t.writeTree)}function up(t,e){return{treePath:t,writeTree:e}}/**
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
 */class m0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ps(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,fs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,hi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ps(r,e.snapshotNode,i.oldSnap));else throw Zr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class _0{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const dp=new _0;class fc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Gn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pr(this.viewCache_),s=p0(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function g0(t){return{filter:t}}function v0(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function b0(t,e,n,r,i){const s=new m0;let o,a;if(n.type===Ut.OVERWRITE){const c=n;c.source.fromUser?o=pc(t,e,c.path,c.snap,r,i,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=zo(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Ut.MERGE){const c=n;c.source.fromUser?o=w0(t,e,c.path,c.children,r,i,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=mc(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Ut.ACK_USER_WRITE){const c=n;c.revert?o=C0(t,e,c.path,r,i,s):o=E0(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Ut.LISTEN_COMPLETE)o=I0(t,e,n.path,r,s);else throw Zr("Unknown operation type: "+n.type);const l=s.getChanges();return y0(e,o,l),{viewCache:o,changes:l}}function y0(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Uo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Qf(Uo(e)))}}function hp(t,e,n,r,i,s){const o=e.eventCache;if(jo(r,n)!=null)return e;{let a,l;if(G(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pr(e),d=c instanceof $?c:$.EMPTY_NODE,h=dc(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=Wo(r,Pr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=q(n);if(c===".priority"){k(Bn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=lp(r,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=ye(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=lp(r,n,o.getNode(),l);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=hc(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,d,i,s):a=o.getNode()}}return vs(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function zo(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),f,null)}else{const f=q(n);if(!l.isCompleteForPath(n)&&Bn(n)>1)return e;const p=ye(n),w=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?c=d.updatePriority(l.getNode(),w):c=d.updateChild(l.getNode(),f,w,p,dp,null)}const h=np(e,c,l.isFullyInitialized()||G(n),d.filtersNodes()),u=new fc(i,h,s);return hp(t,h,n,i,u,a)}function pc(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new fc(i,e,s);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=vs(e,c,!0,t.filter.filtersNodes());else{const h=q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=vs(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=ye(n),f=a.getNode().getImmediateChild(h);let p;if(G(u))p=r;else{const g=d.getCompleteChild(h);g!=null?Kl(u)===".priority"&&g.getChild(Uf(u)).isEmpty()?p=g:p=g.updateChild(u,r):p=$.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,u,d,o);l=vs(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function fp(t,e){return t.eventCache.isCompleteForChild(e)}function w0(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=ke(n,l);fp(e,q(d))&&(a=pc(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=ke(n,l);fp(e,q(d))||(a=pc(t,a,d,c,i,s,o))}),a}function pp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function mc(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;G(n)?c=r:c=new we(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=pp(t,f,u);l=zo(t,l,new le(h),p,i,s,o,a)}}),c.children.inorderTraversal((h,u)=>{const f=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=pp(t,p,u);l=zo(t,l,new le(h),g,i,s,o,a)}}),l}function E0(t,e,n,r,i,s,o){if(jo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return zo(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let c=new we(null);return l.getNode().forEachChild(qn,(d,h)=>{c=c.set(new le(d),h)}),mc(t,e,n,c,i,s,a,o)}else return e}else{let c=new we(null);return r.foreach((d,h)=>{const u=ke(n,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),mc(t,e,n,c,i,s,a,o)}}function I0(t,e,n,r,i){const s=e.serverCache,o=np(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return hp(t,o,n,r,dp,i)}function C0(t,e,n,r,i,s){let o;if(jo(r,n)!=null)return e;{const a=new fc(r,e,i),l=e.eventCache.getNode();let c;if(G(n)||q(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Wo(r,Pr(e));else{const h=e.serverCache.getNode();k(h instanceof $,"serverChildren would be complete if leaf node"),d=dc(r,h)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=q(n);let h=hc(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=t.filter.updateChild(l,d,h,ye(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,$.EMPTY_NODE,ye(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wo(r,Pr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||jo(r,ie())!=null,vs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class T0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new tc(r.getIndex()),s=H1(r);this.processor_=g0(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode($.EMPTY_NODE,a.getNode(),null),d=new Gn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Gn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Fo(h,d),this.eventGenerator_=new Q1(this.query_)}get query(){return this.query_}}function S0(t){return t.viewCache_.serverCache.getNode()}function k0(t){return Uo(t.viewCache_)}function A0(t,e){const n=Pr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function mp(t){return t.eventRegistrations_.length===0}function R0(t,e){t.eventRegistrations_.push(e)}function _p(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function gp(t,e,n,r){e.type===Ut.MERGE&&e.source.queryId!==null&&(k(Pr(t.viewCache_),"We should always have a full cache before handling merges"),k(Uo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=b0(t.processor_,i,e,n,r);return v0(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,vp(t,s.changes,s.viewCache.eventCache.getNode(),null)}function P0(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(s,o)=>{r.push(hi(s,o))}),n.isFullyInitialized()&&r.push(Qf(n.getNode())),vp(t,r,n.getNode(),e)}function vp(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return J1(t.eventGenerator_,e,n,i)}/**
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
 */let Vo;class bp{constructor(){this.views=new Map}}function N0(t){k(!Vo,"__referenceConstructor has already been defined"),Vo=t}function x0(){return k(Vo,"Reference.ts has not been loaded"),Vo}function L0(t){return t.views.size===0}function _c(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),gp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(gp(o,e,n,r));return s}}function yp(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Wo(n,i?r:null),l=!1;a?l=!0:r instanceof $?(a=dc(n,r),l=!1):(a=$.EMPTY_NODE,l=!1);const c=Fo(new Gn(a,l,!1),new Gn(r,i,!1));return new T0(e,c)}return o}function D0(t,e,n,r,i,s){const o=yp(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),R0(o,n),P0(o,n)}function O0(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Qn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(_p(c,n,r)),mp(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(_p(l,n,r)),mp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Qn(t)&&s.push(new(x0())(e._repo,e._path)),{removed:s,events:o}}function wp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Yn(t,e){let n=null;for(const r of t.views.values())n=n||A0(r,e);return n}function Ep(t,e){if(e._queryParams.loadsAllData())return Bo(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ip(t,e){return Ep(t,e)!=null}function Qn(t){return Bo(t)!=null}function Bo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let qo;function M0(t){k(!qo,"__referenceConstructor has already been defined"),qo=t}function $0(){return k(qo,"Reference.ts has not been loaded"),qo}let F0=1;class Cp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=f0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Tp(t,e,n,r,i){return t0(t.pendingWriteTree_,e,n,r,i),i?mi(t,new Rr(ic(),e,n)):[]}function U0(t,e,n,r){n0(t.pendingWriteTree_,e,n,r);const i=we.fromObject(n);return mi(t,new fi(ic(),e,i))}function Jn(t,e,n=!1){const r=r0(t.pendingWriteTree_,e);if(i0(t.pendingWriteTree_,e)){let s=new we(null);return r.snap!=null?s=s.set(ie(),!0):Ge(r.children,o=>{s=s.set(new le(o),!0)}),mi(t,new $o(r.path,s,n))}else return[]}function ys(t,e,n){return mi(t,new Rr(sc(),e,n))}function H0(t,e,n){const r=we.fromObject(n);return mi(t,new fi(sc(),e,r))}function W0(t,e){return mi(t,new _s(sc(),e))}function j0(t,e,n){const r=bc(t,n);if(r){const i=yc(r),s=i.path,o=i.queryId,a=it(s,e),l=new _s(oc(o),a);return wc(t,s,l)}else return[]}function Go(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Ip(o,e))){const l=O0(o,e,n,r);L0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(u,f)=>Qn(f));if(d&&!h){const u=t.syncPointTree_.subtree(s);if(!u.isEmpty()){const f=B0(u);for(let p=0;p<f.length;++p){const g=f[p],w=g.query,I=Rp(t,g);t.listenProvider_.startListening(Es(w),ws(t,w),I.hashFn,I.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Es(e),null):c.forEach(u=>{const f=t.queryToTagMap.get(Ko(u));t.listenProvider_.stopListening(Es(u),f)}))}q0(t,c)}return a}function Sp(t,e,n,r){const i=bc(t,r);if(i!=null){const s=yc(i),o=s.path,a=s.queryId,l=it(o,e),c=new Rr(oc(a),l,n);return wc(t,o,c)}else return[]}function z0(t,e,n,r){const i=bc(t,r);if(i){const s=yc(i),o=s.path,a=s.queryId,l=it(o,e),c=we.fromObject(n),d=new fi(oc(a),l,c);return wc(t,o,d)}else return[]}function gc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(u,f)=>{const p=it(u,i);s=s||Yn(f,p),o=o||Qn(f)});let a=t.syncPointTree_.get(i);a?(o=o||Qn(a),s=s||Yn(a,ie())):(a=new bp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=Yn(p,ie());g&&(s=s.updateImmediateChild(f,g))}));const c=Ip(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=Ko(e);k(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=G0();t.queryToTagMap.set(u,f),t.tagToQueryMap.set(f,u)}const d=Ho(t.pendingWriteTree_,i);let h=D0(a,e,n,d,s,l);if(!c&&!o&&!r){const u=Ep(a,e);h=h.concat(K0(t,e,u))}return h}function vc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=it(o,e),c=Yn(a,l);if(c)return c});return ap(i,e,s,n,!0)}function V0(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=it(c,n);r=r||Yn(d,h)});let i=t.syncPointTree_.get(n);i?r=r||Yn(i,ie()):(i=new bp,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Gn(r,!0,!1):null,a=Ho(t.pendingWriteTree_,e._path),l=yp(i,e,a,s?o.getNode():$.EMPTY_NODE,s);return k0(l)}function mi(t,e){return kp(e,t.syncPointTree_,null,Ho(t.pendingWriteTree_,ie()))}function kp(t,e,n,r){if(G(t.path))return Ap(t,e,n,r);{const i=e.get(ie());n==null&&i!=null&&(n=Yn(i,ie()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=cp(r,o);s=s.concat(kp(a,l,c,d))}return i&&(s=s.concat(_c(i,t,r,n))),s}}function Ap(t,e,n,r){const i=e.get(ie());n==null&&i!=null&&(n=Yn(i,ie()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=cp(r,o),d=t.operationForChild(o);d&&(s=s.concat(Ap(d,a,l,c)))}),i&&(s=s.concat(_c(i,t,r,n))),s}function Rp(t,e){const n=e.query,r=ws(t,n);return{hashFn:()=>(S0(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?j0(t,n._path,r):W0(t,n._path);{const s=Hw(i,n);return Go(t,n,null,s)}}}}function ws(t,e){const n=Ko(e);return t.queryToTagMap.get(n)}function Ko(t){return t._path.toString()+"$"+t._queryIdentifier}function bc(t,e){return t.tagToQueryMap.get(e)}function yc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function wc(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Ho(t.pendingWriteTree_,e);return _c(r,n,i,null)}function B0(t){return t.fold((e,n,r)=>{if(n&&Qn(n))return[Bo(n)];{let i=[];return n&&(i=wp(n)),Ge(r,(s,o)=>{i=i.concat(o)}),i}})}function Es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($0())(t._repo,t._path):t}function q0(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ko(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function G0(){return F0++}function K0(t,e,n){const r=e._path,i=ws(t,e),s=Rp(t,n),o=t.listenProvider_.startListening(Es(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)k(!Qn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!G(c)&&d&&Qn(d))return[Bo(d).query];{let u=[];return d&&(u=u.concat(wp(d).map(f=>f.query))),Ge(h,(f,p)=>{u=u.concat(p)}),u}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Es(d),ws(t,d))}}return o}/**
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
 */class Ec{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ec(n)}node(){return this.node_}}class Ic{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new Ic(this.syncTree_,n)}node(){return vc(this.syncTree_,this.path_)}}const Y0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pp=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Q0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return J0(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Q0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},J0=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Np=function(t,e,n,r){return Cc(e,new Ic(n,t),r)},xp=function(t,e,n){return Cc(t,new Ec(e),n)};function Cc(t,e,n){const r=t.getPriority().val(),i=Pp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Pp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ze(a,He(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ze(i))),o.forEachChild(Ce,(a,l)=>{const c=Cc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Tc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Sc(t,e){let n=e instanceof le?e:new le(e),r=t,i=q(n);for(;i!==null;){const s=ei(r.node.children,i)||{children:{},childCount:0};r=new Tc(i,r,s),n=ye(n),i=q(n)}return r}function _i(t){return t.node.value}function Lp(t,e){t.node.value=e,kc(t)}function Dp(t){return t.node.childCount>0}function X0(t){return _i(t)===void 0&&!Dp(t)}function Yo(t,e){Ge(t.node.children,(n,r)=>{e(new Tc(n,t,r))})}function Op(t,e,n,r){n&&e(t),Yo(t,i=>{Op(i,e,!0)})}function Z0(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Is(t){return new le(t.parent===null?t.name:Is(t.parent)+"/"+t.name)}function kc(t){t.parent!==null&&eE(t.parent,t.name,t)}function eE(t,e,n){const r=X0(n),i=Yt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,kc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,kc(t))}/**
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
 */const tE=/[\[\].#$\/\u0000-\u001F\u007F]/,nE=/[\[\].#$\u0000-\u001F\u007F]/,Ac=10*1024*1024,Rc=function(t){return typeof t=="string"&&t.length!==0&&!tE.test(t)},Mp=function(t){return typeof t=="string"&&t.length!==0&&!nE.test(t)},rE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Mp(t)},Pc=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ul(t)||t&&typeof t=="object"&&Yt(t,".sv")},Qo=function(t,e,n,r){r&&e===void 0||Jo(co(t,"value"),e,n)},Jo=function(t,e,n){const r=n instanceof le?new y1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ar(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ar(r)+" with contents = "+e.toString());if(Ul(e))throw new Error(t+"contains "+e.toString()+" "+Ar(r));if(typeof e=="string"&&e.length>Ac/3&&uo(e)>Ac)throw new Error(t+"contains a string greater than "+Ac+" utf8 bytes "+Ar(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ge(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Rc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ar(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);w1(r,o),Jo(t,a,r),E1(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ar(r)+" in addition to actual children.")}},iE=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=cs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Rc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(b1);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&kt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},sE=function(t,e,n,r){const i=co(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ge(e,(o,a)=>{const l=new le(o);if(Jo(i,a,ke(n,l)),Kl(l)===".priority"&&!Pc(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),iE(i,s)},Nc=function(t,e,n,r){if(!Mp(n))throw new Error(co(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},oE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Nc(t,e,n)},xc=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},aE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rE(n))throw new Error(co(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class lE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xo(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Yl(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function $p(t,e,n){Xo(t,n),Fp(t,r=>Yl(r,e))}function At(t,e,n){Xo(t,n),Fp(t,r=>kt(r,e)||kt(e,r))}function Fp(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(cE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();is&&qe("event: "+n.toString()),ci(r)}}}/**
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
 */const uE="repo_interrupt",dE=25;class hE{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mo(),this.transactionQueueTree_=new Tc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fE(t,e,n){if(t.stats_=Bl(t.repoInfo_),t.forceRestClient_||Vw())t.server_=new Oo(t.repoInfo_,(r,i,s,o)=>{Hp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new wn(t.repoInfo_,e,(r,i,s,o)=>{Hp(t,r,i,s,o)},r=>{Wp(t,r)},r=>{pE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Yw(t.repoInfo_,()=>new Y1(t.stats_,t.server_)),t.infoData_=new V1,t.infoSyncTree_=new Cp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ys(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Lc(t,"connected",!1),t.serverSyncTree_=new Cp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);At(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Up(t){const n=t.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zo(t){return Y0({timestamp:Up(t)})}function Hp(t,e,n,r,i){t.dataUpdateCount++;const s=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=lo(n,c=>He(c));o=z0(t.serverSyncTree_,s,l,i)}else{const l=He(n);o=Sp(t.serverSyncTree_,s,l,i)}else if(r){const l=lo(n,c=>He(c));o=H0(t.serverSyncTree_,s,l)}else{const l=He(n);o=ys(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=gi(t,s)),At(t.eventQueue_,a,o)}function Wp(t,e){Lc(t,"connected",e),e===!1&&vE(t)}function pE(t,e){Ge(e,(n,r)=>{Lc(t,n,r)})}function Lc(t,e,n){const r=new le("/.info/"+e),i=He(n);t.infoData_.updateSnapshot(r,i);const s=ys(t.infoSyncTree_,r,i);At(t.eventQueue_,r,s)}function Dc(t){return t.nextWriteId_++}function mE(t,e,n){const r=V0(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=He(i).withIndex(e._queryParams.getIndex());gc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ys(t.serverSyncTree_,e._path,s);else{const a=ws(t.serverSyncTree_,e);o=Sp(t.serverSyncTree_,e._path,s,a)}return At(t.eventQueue_,e._path,o),Go(t.serverSyncTree_,e,n,null,!0),s},i=>(Cs(t,"get for query "+Ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function _E(t,e,n,r,i){Cs(t,"set",{path:e.toString(),value:n,priority:r});const s=Zo(t),o=He(n,r),a=vc(t.serverSyncTree_,e),l=xp(o,a,s),c=Dc(t),d=Tp(t.serverSyncTree_,e,l,c,!0);Xo(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(u,f)=>{const p=u==="ok";p||rt("set at "+e+" failed: "+u);const g=Jn(t.serverSyncTree_,c,!p);At(t.eventQueue_,e,g),Mc(t,i,u,f)});const h=Fc(t,e);gi(t,h),At(t.eventQueue_,h,[])}function gE(t,e,n,r){Cs(t,"update",{path:e.toString(),value:n});let i=!0;const s=Zo(t),o={};if(Ge(n,(a,l)=>{i=!1,o[a]=Np(ke(e,a),He(l),t.serverSyncTree_,s)}),i)qe("update() called with empty data.  Don't do anything."),Mc(t,r,"ok",void 0);else{const a=Dc(t),l=U0(t.serverSyncTree_,e,o,a);Xo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||rt("update at "+e+" failed: "+c);const u=Jn(t.serverSyncTree_,a,!h),f=u.length>0?gi(t,e):e;At(t.eventQueue_,f,u),Mc(t,r,c,d)}),Ge(n,c=>{const d=Fc(t,ke(e,c));gi(t,d)}),At(t.eventQueue_,e,[])}}function vE(t){Cs(t,"onDisconnectEvents");const e=Zo(t),n=Mo();rc(t.onDisconnect_,ie(),(i,s)=>{const o=Np(i,s,t.serverSyncTree_,e);ep(n,i,o)});let r=[];rc(n,ie(),(i,s)=>{r=r.concat(ys(t.serverSyncTree_,i,s));const o=Fc(t,i);gi(t,o)}),t.onDisconnect_=Mo(),At(t.eventQueue_,ie(),r)}function bE(t,e,n){let r;q(e._path)===".info"?r=gc(t.infoSyncTree_,e,n):r=gc(t.serverSyncTree_,e,n),$p(t.eventQueue_,e._path,r)}function Oc(t,e,n){let r;q(e._path)===".info"?r=Go(t.infoSyncTree_,e,n):r=Go(t.serverSyncTree_,e,n),$p(t.eventQueue_,e._path,r)}function yE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uE)}function Cs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function Mc(t,e,n,r){e&&ci(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function jp(t,e,n){return vc(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function $c(t,e=t.transactionQueueTree_){if(e||ea(t,e),_i(e)){const n=Vp(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&wE(t,Is(e),n)}else Dp(e)&&Yo(e,n=>{$c(t,n)})}function wE(t,e,n){const r=n.map(c=>c.currentWriteId),i=jp(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];k(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=it(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Cs(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<n.length;u++)n[u].status=2,d=d.concat(Jn(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&h.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();ea(t,Sc(t.transactionQueueTree_,e)),$c(t,t.transactionQueueTree_),At(t.eventQueue_,e,d);for(let u=0;u<h.length;u++)ci(h[u])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{rt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}gi(t,e)}},o)}function gi(t,e){const n=zp(t,e),r=Is(n),i=Vp(t,n);return EE(t,i,r),r}function EE(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=it(n,l.path);let d=!1,h;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,i=i.concat(Jn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dE)d=!0,h="maxretry",i=i.concat(Jn(t.serverSyncTree_,l.currentWriteId,!0));else{const u=jp(t,l.path,o);l.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){Jo("transaction failed: Data returned ",f,l.path);let p=He(f);typeof f=="object"&&f!=null&&Yt(f,".priority")||(p=p.updatePriority(u.getPriority()));const w=l.currentWriteId,I=Zo(t),S=xp(p,u,I);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=S,l.currentWriteId=Dc(t),o.splice(o.indexOf(w),1),i=i.concat(Tp(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),i=i.concat(Jn(t.serverSyncTree_,w,!0))}else d=!0,h="nodata",i=i.concat(Jn(t.serverSyncTree_,l.currentWriteId,!0))}At(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}ea(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ci(r[a]);$c(t,t.transactionQueueTree_)}function zp(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&_i(r)===void 0;)r=Sc(r,n),e=ye(e),n=q(e);return r}function Vp(t,e){const n=[];return Bp(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Bp(t,e,n){const r=_i(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Yo(e,i=>{Bp(t,i,n)})}function ea(t,e){const n=_i(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Lp(e,n.length>0?n:void 0)}Yo(e,r=>{ea(t,r)})}function Fc(t,e){const n=Is(zp(t,e)),r=Sc(t.transactionQueueTree_,e);return Z0(r,i=>{Uc(t,i)}),Uc(t,r),Op(r,i=>{Uc(t,i)}),n}function Uc(t,e){const n=_i(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Lp(e,void 0):n.length=s+1,At(t.eventQueue_,Is(e),i);for(let o=0;o<r.length;o++)ci(r[o])}}/**
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
 */function IE(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function CE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):rt(`Invalid query segment '${n}' in query '${t}'`)}return e}const qp=function(t,e){const n=TE(t),r=n.namespace;n.domain==="firebase.com"&&yn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ow();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wf(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new le(n.pathString)}},TE=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(i=IE(t.substring(d,h)));const u=CE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in u&&(s=u.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Gp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",SE=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Gp.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Gp.charAt(e[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class kE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class AE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Kp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Xn{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:Kl(this._path)}get ref(){return new In(this._repo,this._path)}get _queryIdentifier(){const e=Zf(this._queryParams),n=Hl(e);return n==="{}"?"default":n}get _queryObject(){return Zf(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof Xn))return!1;const n=this._repo===e._repo,r=Yl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+v1(this._path)}}function Yp(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ta(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===qn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Sr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Vn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Ce){if(e!=null&&!Pc(e)||n!=null&&!Pc(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(k(t.getIndex()instanceof ec||t.getIndex()===Yf,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Qp(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class In extends Xn{constructor(e,n){super(e,n,new nc,!1)}get parent(){const e=Uf(this._path);return e===null?null:new In(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ts{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new le(e),r=Ss(this.ref,e);return new Ts(this._node.getChild(n),r,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ts(i,Ss(this.ref,r),Ce)))}hasChild(e){const n=new le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _e(t,e){return t=De(t),t._checkNotDeleted("ref"),e!==void 0?Ss(t._root,e):t._root}function Ss(t,e){return t=De(t),q(t._path)===null?oE("child","path",e):Nc("child","path",e),new In(t._repo,ke(t._path,e))}function na(t,e){t=De(t),xc("push",t._path),Qo("push",e,t._path,!0);const n=Up(t._repo),r=SE(n),i=Ss(t,r),s=Ss(t,r);let o;return e!=null?o=ks(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Jp(t){return xc("remove",t._path),ks(t,null)}function ks(t,e){t=De(t),xc("set",t._path),Qo("set",e,t._path,!1);const n=new Ui;return _E(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Cn(t,e){sE("update",e,t._path);const n=new Ui;return gE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Zn(t){t=De(t);const e=new Kp(()=>{}),n=new ra(e);return mE(t._repo,t,n).then(r=>new Ts(r,new In(t._repo,t._path),t._queryParams.getIndex()))}class ra{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new kE("value",this,new Ts(e.snapshotNode,new In(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new AE(this,e,n):null}matches(e){return e instanceof ra?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function RE(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,h)=>{Oc(t._repo,t,a),l(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Kp(n,s||void 0),a=new ra(o);return bE(t._repo,t,a),()=>Oc(t._repo,t,a)}function er(t,e,n,r){return RE(t,"value",e,n,r)}function vi(t,e,n){Oc(t._repo,t,null)}class As{}class PE extends As{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Qo("endAt",this._value,e._path,!0);const n=z1(e._queryParams,this._value,this._key);if(Qp(n),ta(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Xn(e._repo,e._path,n,e._orderByCalled)}}function Rs(t,e){return new PE(t,e)}class NE extends As{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Qo("startAt",this._value,e._path,!0);const n=j1(e._queryParams,this._value,this._key);if(Qp(n),ta(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Xn(e._repo,e._path,n,e._orderByCalled)}}function Ps(t=null,e){return new NE(t,e)}class xE extends As{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Xn(e._repo,e._path,W1(e._queryParams,this._limit),e._orderByCalled)}}function LE(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new xE(t)}class DE extends As{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Yp(e,"orderByChild");const n=new le(this._path);if(G(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new ec(n),i=Jf(e._queryParams,r);return ta(i),new Xn(e._repo,e._path,i,!0)}}function ia(t){return Nc("orderByChild","path",t),new DE(t)}class OE extends As{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Yp(e,"orderByKey");const n=Jf(e._queryParams,qn);return ta(n),new Xn(e._repo,e._path,n,!0)}}function ME(){return new OE}function Ns(t,...e){let n=De(t);for(const r of e)n=r._apply(n);return n}N0(In),M0(In);/**
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
 */const $E="FIREBASE_DATABASE_EMULATOR_HOST",Hc={};let FE=!1;function UE(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=gr(s);t.repoInfo_=new wf(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function HE(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qp(s,i),a=o.repoInfo,l;typeof process<"u"&&process.env&&(l=process.env[$E]),l?(s=`http://${l}?ns=${a.namespace}`,o=qp(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new qw(t.name,t.options,e);aE("Invalid Firebase Database URL",o),G(o.path)||yn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=jE(a,t,c,new Bw(t,n));return new zE(d,t)}function WE(t,e){const n=Hc[e];(!n||n[t.key]!==t)&&yn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yE(t),delete n[t.key]}function jE(t,e,n,r){let i=Hc[e.name];i||(i={},Hc[e.name]=i);let s=i[t.toURLString()];return s&&yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new hE(t,FE,n,r),i[t.toURLString()]=s,s}class zE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new In(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(WE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yn("Cannot call "+e+" on a deleted database.")}}function VE(t=vl(),e){const n=fo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ad("database");r&&BE(n,...r)}return n}function BE(t,e,n,r={}){t=De(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&vr(r,s.repoInfo_.emulatorOptions))return;yn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ao(Ao.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Nd(r.mockUserToken,t.app.options.projectId);o=new Ao(a)}gr(e)&&(rl(e),il("Database",!0)),UE(s,i,r,o)}/**
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
 */function qE(t){Rw(Er),wr(new On("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return HE(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Qt(nf,rf,t),Qt(nf,rf,"esm2020")}wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)},qE();/**
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
 */const Xp="firebasestorage.googleapis.com",GE="storageBucket",KE=120*1e3,YE=600*1e3;/**
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
 */class Zt extends mn{constructor(e,n,r=0){super(Wc(e),`Firebase Storage: ${n} (${Wc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Zt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var en;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(en||(en={}));function Wc(t){return"storage/"+t}function QE(){const t="An unknown error occurred, please check the error payload for server response.";return new Zt(en.UNKNOWN,t)}function JE(){return new Zt(en.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XE(){return new Zt(en.CANCELED,"User canceled the upload/download.")}function ZE(t){return new Zt(en.INVALID_URL,"Invalid URL '"+t+"'.")}function eI(t){return new Zt(en.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zp(t){return new Zt(en.INVALID_ARGUMENT,t)}function em(){return new Zt(en.APP_DELETED,"The Firebase app was deleted.")}function tI(t){return new Zt(en.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw eI(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${d}/b/${i}/o${u}`,"i"),p={bucket:1,path:3},g=n===Xp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",I=new RegExp(`^https?://${g}/${i}/${w}`,"i"),R=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<R.length;P++){const M=R[P],C=M.regex.exec(e);if(C){const E=C[M.indices.bucket];let v=C[M.indices.path];v||(v=""),r=new Wt(E,v),M.postModify(r);break}}if(r==null)throw ZE(e);return r}}class nI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function rI(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...w){c||(c=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function u(){s&&clearTimeout(s)}function f(w,...I){if(c){u();return}if(w){u(),d.call(null,w,...I);return}if(l()||o){u(),d.call(null,w,...I);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,h(R)}let p=!1;function g(w){p||(p=!0,u(),!c&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function iI(t){t(!1)}/**
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
 */function sI(t){return t!==void 0}function tm(t,e,n,r){if(r<e)throw Zp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Zp(`Invalid value for '${t}'. Expected ${n} or less.`)}function oI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var sa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(sa||(sa={}));/**
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
 */function aI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class lI{constructor(e,n,r,i,s,o,a,l,c,d,h,u=!0,f=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=u,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new oa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===sa.NO_ERROR,l=s.getStatus();if(!a||aI(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===sa.ABORT;r(!1,new oa(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new oa(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());sI(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=QE();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?em():XE();o(l)}else{const l=JE();o(l)}};this.canceled_?n(!1,new oa(!1,null,!0)):this.backoffId_=rI(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cI(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function uI(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dI(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hI(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fI(t,e,n,r,i,s,o=!0,a=!1){const l=oI(t.urlParams),c=t.url+l,d=Object.assign({},t.headers);return dI(d,e),cI(d,n),uI(d,s),hI(d,r),new lI(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
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
 */function pI(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class aa{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new aa(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mI(this._location.path)}get storage(){return this._service}get parent(){const e=pI(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new aa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tI(e)}}function nm(t,e){const n=e?.[GE];return n==null?null:Wt.makeFromBucketSpec(n,t)}function _I(t,e,n,r={}){t.host=`${e}:${n}`;const i=gr(e);i&&(rl(`https://${t.host}/b`),il("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Nd(s,t.app.options.projectId))}class gI{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=Xp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KE,this._maxUploadRetryTime=YE,this._requests=new Set,i!=null?this._bucket=Wt.makeFromBucketSpec(i,this._host):this._bucket=nm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=nm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){tm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){tm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new aa(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new nI(em());{const o=fI(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const rm="@firebase/storage",im="0.14.0";/**
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
 */const sm="storage";function vI(t=vl(),e){t=De(t);const r=fo(t,sm).getImmediate({identifier:e}),i=Ad("storage");return i&&bI(r,...i),r}function bI(t,e,n,r={}){_I(t,e,n,r)}function yI(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new gI(n,r,i,e,Er)}function wI(){wr(new On(sm,yI,"PUBLIC").setMultipleInstances(!0)),Qt(rm,im,""),Qt(rm,im,"esm2020")}wI();const om={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",om);const jc=zd(om),Rt=kw(jc),me=VE(jc),EI=vI(jc);var II=W('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),CI=W('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),TI=W('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),SI=W('<h3 class="post-title svelte-1t1odzy"> </h3>'),kI=W('<p class="post-text svelte-1t1odzy"> </p>'),AI=W('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),RI=W('<div class="posts svelte-1t1odzy"></div>'),PI=W('<div class="post-list-container svelte-1t1odzy"><!></div>');const NI={hash:"svelte-1t1odzy",code:`
  /* 컨테이너 */.post-list-container.svelte-1t1odzy {width:100%;max-width:800px;margin:0 auto;padding:1rem;}

  /* 로딩 상태 */.loading.svelte-1t1odzy {display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem;color:#666;}.spinner.svelte-1t1odzy {width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid #007bff;border-radius:50%;
    animation: svelte-1t1odzy-spin 1s linear infinite;margin-bottom:1rem;}

  @keyframes svelte-1t1odzy-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* 오류 상태 */.error.svelte-1t1odzy {padding:2rem;text-align:center;color:#c33;background-color:#fee;border-radius:8px;}

  /* 빈 상태 */.empty.svelte-1t1odzy {padding:3rem;text-align:center;color:#999;}

  /* 게시물 목록 */.posts.svelte-1t1odzy {display:flex;flex-direction:column;gap:1rem;}

  /* 게시물 카드 */.post-card.svelte-1t1odzy {padding:1.5rem;background:white;border:1px solid #e0e0e0;border-radius:8px;cursor:pointer;transition:all 0.2s;}.post-card.svelte-1t1odzy:hover {box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);transform:translateY(-2px);}

  /* 게시물 헤더 */.post-header.svelte-1t1odzy {margin-bottom:1rem;}.author-info.svelte-1t1odzy {display:flex;align-items:center;gap:0.5rem;}.author-name.svelte-1t1odzy {font-weight:600;color:#333;}.post-date.svelte-1t1odzy {font-size:0.85rem;color:#999;}

  /* 게시물 내용 */.post-content.svelte-1t1odzy {margin-bottom:1rem;}.post-title.svelte-1t1odzy {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#222;}.post-text.svelte-1t1odzy {margin:0;color:#555;line-height:1.6;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}

  /* 게시물 푸터 */.post-footer.svelte-1t1odzy {display:flex;gap:1rem;padding-top:0.75rem;border-top:1px solid #f0f0f0;}.stat.svelte-1t1odzy {font-size:0.9rem;color:#666;}

  /* 반응형 디자인 */
  @media (max-width: 640px) {.post-list-container.svelte-1t1odzy {padding:0.5rem;}.post-card.svelte-1t1odzy {padding:1rem;}.post-title.svelte-1t1odzy {font-size:1.1rem;}
  }`};function xI(t,e){cn(e,!0),Dn(t,NI);let n=St(e,"path",7,"posts"),r=St(e,"limit",7,"10"),i=ne(hn([])),s=ne(!0),o=ne(""),a=null;Li(()=>{l()}),K_(()=>{c()});function l(){try{a=_e(me,n()),er(a,S=>{const R=S.val();R?N(i,Object.entries(R).map(([P,M])=>({id:P,...M})).sort((P,M)=>(M.timestamp||0)-(P.timestamp||0)).slice(0,parseInt(r())),!0):N(i,[],!0),N(s,!1),N(o,"")},S=>{console.error("데이터 읽기 오류:",S),N(o,"데이터를 불러오는 중 오류가 발생했습니다."),N(s,!1)})}catch(S){console.error("구독 설정 오류:",S),N(o,"데이터베이스 연결에 실패했습니다."),N(s,!1)}}function c(){a&&vi(a)}function d(S){const R=new CustomEvent("post-click",{detail:{post:S},bubbles:!0,composed:!0});dispatchEvent(R)}function h(S,R){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),d(R))}function u(S){if(!S)return"";const R=typeof S=="string"?Number(S):S,P=new Date(R),C=new Date().getTime()-P.getTime(),E=Math.floor(C/6e4),v=Math.floor(C/36e5),T=Math.floor(C/864e5);return E<1?"방금 전":E<60?`${E}분 전`:v<24?`${v}시간 전`:T<7?`${T}일 전`:P.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var f={get path(){return n()},set path(S="posts"){n(S),_t()},get limit(){return r()},set limit(S="10"){r(S),_t()}},p=PI(),g=_(p);{var w=S=>{var R=II();x(S,R)},I=S=>{var R=Ie(),P=se(R);{var M=E=>{var v=CI(),T=_(v),A=_(T,!0);m(T),m(v),re(()=>L(A,y(o))),x(E,v)},C=E=>{var v=Ie(),T=se(v);{var A=O=>{var z=TI();x(O,z)},F=O=>{var z=RI();Qr(z,21,()=>y(i),Y=>Y.id,(Y,H)=>{var Q=AI();Q.__click=()=>d(y(H)),Q.__keydown=xe=>h(xe,y(H));var ge=_(Q),Z=_(ge),ee=_(Z),ce=_(ee,!0);m(ee);var oe=b(ee,2),ve=_(oe,!0);m(oe),m(Z),m(ge);var te=b(ge,2),ue=_(te);{var j=xe=>{var Ke=SI(),Ye=_(Ke,!0);m(Ke),re(()=>L(Ye,y(H).title)),x(xe,Ke)};Ee(ue,xe=>{y(H).title&&xe(j)})}var ae=b(ue,2);{var de=xe=>{var Ke=kI(),Ye=_(Ke,!0);m(Ke),re(()=>L(Ye,y(H).content)),x(xe,Ke)};Ee(ae,xe=>{y(H).content&&xe(de)})}m(te);var Ze=b(te,2),Ae=_(Ze),be=_(Ae);m(Ae);var We=b(Ae,2),et=_(We);m(We),m(Ze),m(Q),re(xe=>{Pe(Q,"aria-label",`게시물: ${(y(H).title||y(H).content||"제목 없음")??""}`),L(ce,y(H).author||"익명"),L(ve,xe),L(be,`👍 ${(y(H).likes||0)??""}`),L(et,`💬 ${(y(H).comments?.length||0)??""}`)},[()=>u(y(H).timestamp)]),x(Y,Q)}),m(z),x(O,z)};Ee(T,O=>{y(i).length===0?O(A):O(F,!1)},!0)}x(E,v)};Ee(P,E=>{y(o)?E(M):E(C,!1)},!0)}x(S,R)};Ee(g,S=>{y(s)?S(w):S(I,!1)})}return m(p),x(t,p),un(f)}mr(["click","keydown"]),customElements.define("post-list",fe(xI,{path:{},limit:{}},[],[],!0)),u_();/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const LI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var DI=M_("<svg><!><!></svg>");function Me(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]),r=Ne(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);cn(e,!1);let i=St(e,"name",12,void 0),s=St(e,"color",12,"currentColor"),o=St(e,"size",12,24),a=St(e,"strokeWidth",12,2),l=St(e,"absoluteStrokeWidth",12,!1),c=St(e,"iconNode",28,()=>[]);const d=(...g)=>g.filter((w,I,S)=>!!w&&S.indexOf(w)===I).join(" ");var h={get name(){return i()},set name(g){i(g),_t()},get color(){return s()},set color(g){s(g),_t()},get size(){return o()},set size(g){o(g),_t()},get strokeWidth(){return a()},set strokeWidth(g){a(g),_t()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(g){l(g),_t()},get iconNode(){return c()},set iconNode(g){c(g),_t()}};yd();var u=DI();pd(u,(g,w)=>({...LI,...r,width:o(),height:o(),stroke:s(),"stroke-width":g,class:w}),[()=>(Kr(l()),Kr(a()),Kr(o()),Gt(()=>l()?Number(a())*24/Number(o()):a())),()=>(Kr(i()),Kr(n),Gt(()=>d("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var f=_(u);Qr(f,1,c,ro,(g,w)=>{var I=Pa(()=>qm(y(w),2));let S=()=>y(I)[0],R=()=>y(I)[1];var P=Ie(),M=se(P);X_(M,S,!0,(C,E)=>{pd(C,()=>({...R()}))}),x(g,P)});var p=b(f);return Re(p,e,"default",{}),m(u),x(t,u),un(h)}fe(Me,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function am(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];Me(t,Fe({name:"book-open"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(am,{},["default"],[],!0);function zc(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];Me(t,Fe({name:"check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(zc,{},["default"],[],!0);function lm(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];Me(t,Fe({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(lm,{},["default"],[],!0);function Vc(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Me(t,Fe({name:"external-link"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(Vc,{},["default"],[],!0);function Bc(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];Me(t,Fe({name:"file-text"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(Bc,{},["default"],[],!0);function cm(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];Me(t,Fe({name:"house"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(cm,{},["default"],[],!0);function xs(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];Me(t,Fe({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(xs,{},["default"],[],!0);function um(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];Me(t,Fe({name:"log-in"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(um,{},["default"],[],!0);function dm(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];Me(t,Fe({name:"log-out"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(dm,{},["default"],[],!0);function Ls(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];Me(t,Fe({name:"menu"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(Ls,{},["default"],[],!0);function tr(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];Me(t,Fe({name:"message-circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(tr,{},["default"],[],!0);function hm(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];Me(t,Fe({name:"phone"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(hm,{},["default"],[],!0);function fm(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];Me(t,Fe({name:"send"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(fm,{},["default"],[],!0);function pm(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];Me(t,Fe({name:"server"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(pm,{},["default"],[],!0);function mm(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Me(t,Fe({name:"settings"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(mm,{},["default"],[],!0);function _m(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];Me(t,Fe({name:"trending-up"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(_m,{},["default"],[],!0);function nr(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];Me(t,Fe({name:"user"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(nr,{},["default"],[],!0);function Ds(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];Me(t,Fe({name:"users"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(Ds,{},["default"],[],!0);function gm(t,e){const n=Ne(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];Me(t,Fe({name:"zap"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=Ie(),a=se(o);Re(a,e,"default",{}),x(i,o)},$$slots:{default:!0}}))}fe(gm,{},["default"],[],!0);var OI=W("<option> </option>"),MI=W('<div class="error-message svelte-1e01td3"> </div>'),$I=W('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),FI=W("<!> 인증 코드 전송",1),UI=W('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),HI=W('<div class="error-message svelte-1e01td3"> </div>'),WI=W('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),jI=W("<!> 로그인",1),zI=W('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),VI=W('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const BI={hash:"svelte-1e01td3",code:`\r
  /* 전체 컨테이너 */.phone-login.svelte-1e01td3 {width:100%;max-width:28rem; /* max-w-md */margin:0 auto;}\r
\r
  /* 로그인 카드 */.login-card.svelte-1e01td3 {background-color:#ffffff; /* bg-white */border-radius:0.5rem; /* rounded-lg */box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),\r
      0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */padding:2rem; /* p-8 */border:1px solid #e5e7eb; /* border-gray-200 */}\r
\r
  /* 단계 헤더 */.step-header.svelte-1e01td3 {text-align:center;margin-bottom:2rem;}.step-title.svelte-1e01td3 {font-size:1.5rem; /* text-2xl */font-weight:700; /* font-bold */color:#111827; /* text-gray-900 */margin:0 0 0.5rem 0;}.step-description.svelte-1e01td3 {font-size:0.875rem; /* text-sm */color:#6b7280; /* text-gray-500 */margin:0;line-height:1.5;}\r
\r
  /* 폼 그룹 */.form-group.svelte-1e01td3 {margin-bottom:1.5rem; /* mb-6 */}.label.svelte-1e01td3 {display:block;font-size:0.875rem; /* text-sm */font-weight:500; /* font-medium */color:#374151; /* text-gray-700 */margin-bottom:0.5rem; /* mb-2 */}\r
\r
  /* Select (국가 선택) */.select.svelte-1e01td3 {width:100%; /* w-full */padding:0.75rem; /* px-3 py-3 */font-size:1rem; /* text-base */border:1px solid #d1d5db; /* border-gray-300 */border-radius:0.375rem; /* rounded-md */background-color:#ffffff; /* bg-white */color:#111827; /* text-gray-900 */transition:all 0.2s;}.select.svelte-1e01td3:focus {outline:none;border-color:#3b82f6; /* focus:border-blue-500 */box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1); /* focus:ring */}.select.svelte-1e01td3:disabled {background-color:#f3f4f6; /* disabled:bg-gray-100 */cursor:not-allowed;}\r
\r
  /* 전화번호 입력 그룹 */.phone-input-group.svelte-1e01td3 {display:flex;align-items:center;gap:0.5rem;}.country-code-display.svelte-1e01td3 {display:inline-block;padding:0.75rem;font-size:1rem;font-weight:600;color:#1f2937; /* text-gray-800 */background-color:#f3f4f6; /* bg-gray-100 */border:1px solid #d1d5db;border-radius:0.375rem;min-width:4rem;text-align:center;}\r
\r
  /* Input */.input.svelte-1e01td3 {width:100%; /* w-full */padding:0.75rem; /* px-3 py-3 */font-size:1rem; /* text-base */border:1px solid #d1d5db; /* border-gray-300 */border-radius:0.375rem; /* rounded-md */background-color:#ffffff; /* bg-white */color:#111827; /* text-gray-900 */transition:all 0.2s;}.input.svelte-1e01td3:focus {outline:none;border-color:#3b82f6; /* focus:border-blue-500 */box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1); /* focus:ring */}.input.svelte-1e01td3:disabled {background-color:#f3f4f6; /* disabled:bg-gray-100 */cursor:not-allowed;}.phone-input.svelte-1e01td3 {flex:1;}.code-input.svelte-1e01td3 {text-align:center;font-size:1.5rem;font-weight:600;letter-spacing:0.5rem;}\r
\r
  /* 입력 힌트 */.input-hint.svelte-1e01td3 {margin-top:0.5rem;font-size:0.75rem; /* text-xs */color:#6b7280; /* text-gray-500 */}\r
\r
  /* reCAPTCHA 컨테이너 */\r
  /* invisible reCAPTCHA는 사용자에게 보이지 않도록 설정 */\r
  /* 중요: 컨테이너는 최소 크기를 유지하면서 화면 밖으로 위치 */\r
  /* display: none이나 visibility: hidden은 사용하면 안됨 - reCAPTCHA가 "제거된 것"으로 간주 */.recaptcha-container.svelte-1e01td3 {position:absolute;top:-9999px;left:-9999px;width:auto;height:auto;pointer-events:none;\r
    /* invisible 모드에서는 reCAPTCHA 배지만 페이지 우측 하단에 자동으로 표시됨 */}\r
\r
  /* 에러 메시지 */.error-message.svelte-1e01td3 {padding:0.75rem 1rem;background-color:#fef2f2; /* bg-red-50 */border:1px solid #fecaca; /* border-red-200 */border-radius:0.375rem; /* rounded-md */color:#dc2626; /* text-red-600 */font-size:0.875rem; /* text-sm */margin-bottom:1rem;}\r
\r
  /* 버튼 */.btn.svelte-1e01td3 {width:100%;display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.75rem 1rem; /* px-4 py-3 */font-size:1rem; /* text-base */font-weight:600; /* font-semibold */border:none;border-radius:0.375rem; /* rounded-md */cursor:pointer;transition:all 0.2s;}.btn.svelte-1e01td3:disabled {opacity:0.5;cursor:not-allowed;}.btn-primary.svelte-1e01td3 {background-color:#3b82f6; /* bg-blue-500 */color:#ffffff; /* text-white */}.btn-primary.svelte-1e01td3:hover:not(:disabled) {background-color:#2563eb; /* hover:bg-blue-600 */}.btn-secondary.svelte-1e01td3 {background-color:#f3f4f6; /* bg-gray-100 */color:#374151; /* text-gray-700 */}.btn-secondary.svelte-1e01td3:hover:not(:disabled) {background-color:#e5e7eb; /* hover:bg-gray-200 */}\r
\r
  /* 로딩 스피너 */.loading-spinner.svelte-1e01td3 {display:inline-block;width:1rem;height:1rem;border:2px solid rgba(255, 255, 255, 0.3);border-top-color:#ffffff;border-radius:50%;\r
    animation: svelte-1e01td3-spin 0.6s linear infinite;}\r
\r
  @keyframes svelte-1e01td3-spin {\r
    to {\r
      transform: rotate(360deg);\r
    }\r
  }\r
\r
  /* 버튼 그룹 */.button-group.svelte-1e01td3 {display:flex;gap:0.75rem;margin-bottom:1rem;}.button-group.svelte-1e01td3 .btn:where(.svelte-1e01td3) {width:auto;flex:1;}\r
\r
  /* 재전송 힌트 */.resend-hint.svelte-1e01td3 {text-align:center;font-size:0.875rem; /* text-sm */color:#6b7280; /* text-gray-500 */}.link-button.svelte-1e01td3 {background:none;border:none;color:#3b82f6; /* text-blue-500 */font-weight:500; /* font-medium */cursor:pointer;text-decoration:underline;padding:0;}.link-button.svelte-1e01td3:hover {color:#2563eb; /* hover:text-blue-600 */}\r
\r
  /* 반응형 */\r
  @media (max-width: 640px) {.login-card.svelte-1e01td3 {padding:1.5rem; /* p-6 */}.step-title.svelte-1e01td3 {font-size:1.25rem; /* text-xl */}\r
  }`};function qI(t,e){cn(e,!0),Dn(t,BI);const n=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=ne("+82"),i=ne(""),s=ne(""),o=ne("phone"),a=ne(!1),l=ne(""),c=ne(null),d=ne(null),h=ne(void 0),u=ne(null);function f(){return new Promise((v,T)=>{try{if(!y(u)){const A=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(A),N(l,"reCAPTCHA 초기화에 실패했습니다."),T(A);return}if(y(c)){if(y(h)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(y(h)),console.log("reCAPTCHA reset completed"),v(y(h));return}catch(A){console.warn("Failed to reset reCAPTCHA:",A)}try{y(c).clear(),N(c,null),N(h,void 0)}catch(A){console.warn("Failed to clear reCAPTCHA:",A)}}N(c,new Ay(Rt,y(u).id,{size:"invisible",callback:()=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&y(h)!==void 0?window.grecaptcha.reset(y(h)):f()}}),!0),y(c).render().then(A=>{N(h,A,!0),console.log("reCAPTCHA rendered with widgetId:",A),v(A)}).catch(A=>{console.error("Failed to render reCAPTCHA:",A),N(l,"reCAPTCHA 초기화에 실패했습니다."),T(A)})}catch(A){console.error("reCAPTCHA 초기화 실패:",A),N(l,"reCAPTCHA 초기화에 실패했습니다."),T(A)}})}Li(()=>{const v=document.createElement("div");return v.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),v.className="recaptcha-container-light-dom",v.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(v),N(u,v,!0),f(),()=>{v&&v.parentNode&&v.parentNode.removeChild(v)}});function p(v){return/^[0-9]{6,15}$/.test(v)}async function g(){if(N(l,""),!p(y(i))){N(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}N(a,!0);try{const v=`${y(r)}${y(i)}`;console.log("Sending verification code to:",v),N(d,await Ny(Rt,v,y(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),N(o,"code")}catch(v){console.error("SMS 전송 실패:",v),v.code==="auth/invalid-phone-number"?N(l,"잘못된 전화번호 형식입니다."):v.code==="auth/too-many-requests"?N(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):N(l,`SMS 전송 실패: ${v.message}`)}finally{N(a,!1)}}async function w(){if(N(l,""),y(s).length!==6){N(l,"6자리 인증 코드를 입력해주세요.");return}N(a,!0);try{const v=await y(d).confirm(y(s));console.log("Login successful:",v.user);const T=new CustomEvent("login-success",{detail:{user:v.user,phoneNumber:v.user.phoneNumber}});dispatchEvent(T),N(i,""),N(s,""),N(o,"phone")}catch(v){console.error("인증 코드 확인 실패:",v),v.code==="auth/invalid-verification-code"?N(l,"잘못된 인증 코드입니다."):v.code==="auth/code-expired"?N(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):N(l,`인증 실패: ${v.message}`);const T=new CustomEvent("login-error",{detail:{error:v.message}});dispatchEvent(T)}finally{N(a,!1)}}function I(){N(o,"phone"),N(s,""),N(l,"")}var S=VI(),R=_(S),P=_(R);{var M=v=>{var T=UI(),A=_(T),F=_(A);hm(F,{class:"icon-large"}),Et(4),m(A);var O=b(A,2),z=b(_(O),2);Qr(z,21,()=>n,ro,(j,ae)=>{var de=OI(),Ze=_(de);m(de);var Ae={};re(()=>{L(Ze,`${y(ae).flag??""}
                ${y(ae).name??""} (${y(ae).code??""})`),Ae!==(Ae=y(ae).code)&&(de.value=(de.__value=y(ae).code)??"")}),x(j,de)}),m(z),m(O);var Y=b(O,2),H=b(_(Y),2),Q=_(H),ge=_(Q,!0);m(Q);var Z=b(Q,2);Ya(Z),m(H),Et(2),m(Y);var ee=b(Y,2);{var ce=j=>{var ae=MI(),de=_(ae,!0);m(ae),re(()=>L(de,y(l))),x(j,ae)};Ee(ee,j=>{y(l)&&j(ce)})}var oe=b(ee,2);oe.__click=g;var ve=_(oe);{var te=j=>{var ae=$I();Et(),x(j,ae)},ue=j=>{var ae=FI(),de=se(ae);fm(de,{class:"btn-icon"}),Et(),x(j,ae)};Ee(ve,j=>{y(a)?j(te):j(ue,!1)})}m(oe),m(T),re(()=>{z.disabled=y(a),L(ge,y(r)),Z.disabled=y(a),oe.disabled=y(a)||!y(i)}),sg(z,()=>y(r),j=>N(r,j)),ja("keypress",Z,j=>{j.key==="Enter"&&(j.preventDefault(),g())}),vd(Z,()=>y(i),j=>N(i,j)),x(v,T)},C=v=>{var T=Ie(),A=se(T);{var F=O=>{var z=zI(),Y=_(z),H=_(Y);zc(H,{class:"icon-large"});var Q=b(H,4),ge=_(Q);Et(2),m(Q),m(Y);var Z=b(Y,2),ee=b(_(Z),2);Ya(ee),Et(2),m(Z);var ce=b(Z,2);{var oe=be=>{var We=HI(),et=_(We,!0);m(We),re(()=>L(et,y(l))),x(be,We)};Ee(ce,be=>{y(l)&&be(oe)})}var ve=b(ce,2),te=_(ve);te.__click=I;var ue=b(te,2);ue.__click=w;var j=_(ue);{var ae=be=>{var We=WI();Et(),x(be,We)},de=be=>{var We=jI(),et=se(We);zc(et,{class:"btn-icon"}),Et(),x(be,We)};Ee(j,be=>{y(a)?be(ae):be(de,!1)})}m(ue),m(ve);var Ze=b(ve,2),Ae=b(_(Ze));Ae.__click=I,m(Ze),m(z),re(()=>{L(ge,`${y(r)??""}${y(i)??""}로 전송된`),ee.disabled=y(a),te.disabled=y(a),ue.disabled=y(a)||y(s).length!==6}),ja("keypress",ee,be=>{be.key==="Enter"&&(be.preventDefault(),w())}),vd(ee,()=>y(s),be=>N(s,be)),x(O,z)};Ee(A,O=>{y(o)==="code"&&O(F)},!0)}x(v,T)};Ee(P,v=>{y(o)==="phone"?v(M):v(C,!1)})}var E=b(P,2);lg(E,v=>N(u,v),()=>y(u)),m(R),m(S),x(t,S),un()}mr(["click"]),customElements.define("phone-login",fe(qI,{},[],[],!0));const la=Xr(null),vm=Xr(!0);Pl(Rt,t=>{la.set(t),vm.set(!1)});async function GI(t,e){try{return await Oh(Rt,t,e),{success:!0}}catch(n){console.error("로그인 오류:",n);const r=n.code;return{success:!1,error:ym(r)}}}async function KI(t,e,n=""){try{const r=await Dh(Rt,t,e);return n&&await Rl(r.user,{displayName:n}),{success:!0}}catch(r){console.error("회원가입 오류:",r);const i=r.code;return{success:!1,error:ym(i)}}}async function bm(){try{return await ay(Rt),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}}function ym(t){return{"auth/invalid-email":"유효하지 않은 이메일 주소입니다.","auth/user-disabled":"비활성화된 계정입니다.","auth/user-not-found":"등록되지 않은 이메일입니다.","auth/wrong-password":"잘못된 비밀번호입니다.","auth/email-already-in-use":"이미 사용 중인 이메일입니다.","auth/weak-password":"비밀번호는 최소 6자 이상이어야 합니다.","auth/too-many-requests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","auth/network-request-failed":"네트워크 연결을 확인해주세요.","auth/invalid-credential":"인증 정보가 올바르지 않습니다."}[t]||"알 수 없는 오류가 발생했습니다."}class xr{static#t=null;#e=ne(!0);get loading(){return y(this.#e)}set loading(e){N(this.#e,e,!0)}#r=ne(!1);get isAuthenticated(){return y(this.#r)}set isAuthenticated(e){N(this.#r,e,!0)}uid=null;email=null;phoneNumber=null;#i=ne(null);get data(){return y(this.#i)}set data(e){N(this.#i,e,!0)}#l=ne(null);get error(){return y(this.#l)}set error(e){N(this.#l,e,!0)}#o=null;#s=null;#n=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return xr.#t||(xr.#t=new xr),xr.#t}#a(){try{if(!Rt)throw new Error("Auth instance not available");this.#s=Pl(Rt,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#n&&(this.#n(),this.#n=null);const n=_e(me,`users/${e.uid}`);this.#n=er(n,async r=>{this.data=r.val(),!this.data&&e&&console.log("FirebaseLoginUser: 사용자 데이터가 없습니다.")},r=>{this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#n&&(this.#n(),this.#n=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const n={};e.displayName!==void 0&&(n.displayName=e.displayName),e.photoUrl!==void 0&&(n.photoURL=e.photoUrl),Object.keys(n).length>0&&await Rl(this.#o,n);const r={...e},i=_e(me,`users/${this.uid}`);await Cn(i,r)}catch(n){throw this.error=n,n}}async updateField(e,n){return this.updateProfile({[e]:n})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#s&&(this.#s(),this.#s=null),this.#n&&(this.#n(),this.#n=null),xr.#t=null}}const tn=xr.getInstance(),qc={en:{프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",신고:"Report",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",전체댓글:"Total Comments",전체좋아요:"Total Likes",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"Server-side logic and data consistency","home.todo.item8.subitem1":"User profile synchronization (onUserProfileUpdate)","home.todo.item8.subitem2":"Like/comment count synchronization","home.todo.item8.subitem3":"Cleanup associated data on post deletion","home.todo.item8.subitem4":"Notification triggers and delivery","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese",공사중메시지:"This page is under construction",공사중설명_채팅목록:"The chat list feature is currently under development and will be updated soon.",공사중설명_설정:"The settings feature is currently under development and will be updated soon.",공사중설명_게시물상세:"The post detail view feature is currently under development and will be updated soon.",공사중설명_앱정보:"The about page is currently under development and will be updated soon.",공사중설명_도움말:"The help page is currently under development and will be updated soon.",공사중설명_이용약관:"The terms of service page is currently under development and will be updated soon.",공사중설명_개인정보:"The privacy policy page is currently under development and will be updated soon.",공사중설명_문의하기:"The contact page is currently under development and will be updated soon.",메뉴로돌아가기:"Back to Menu",페이지선택:"Select a page to navigate to below",사용자프로필:"User Profile",게시물상세예시:"Post Detail (e.g., ID:123)",채팅목록:"Chat List",테스트게시글생성:"[Dev] Generate Test Posts",로그인성공알림:`Login successful!
Phone: {phone}`,로그인실패:"Login failed: {error}",전화번호로로그인:"Sign in easily with your phone number.",로그인하셨습니다:"You are logged in as {phone}.",홈으로이동:"Go to Home",사용자목록로딩:"Loading user list...",등록된사용자없음:"No registered users yet.",사용자목록실패:"Failed to load user list.",더많은사용자로딩:"Loading more users...",모든사용자로딩완료:"All users have been loaded.",정보없음:"No information",사용자:"User",이름없음:"No name",나:"Me",가입일:"Joined on",프로필보기:"View Profile",프로필사진:"Profile Photo",사진업로드중:"Uploading photo...",사진업로드실패:"Failed to upload photo: {error}",다른사진작업중:"Another photo operation is in progress...",프로필사진제거중:"Removing profile photo...",프로필사진제거완료:"Profile photo has been removed.",프로필사진제거실패:"Failed to remove profile photo: {error}",프로필업데이트중:"Updating profile...",프로필업데이트완료:"Profile has been updated successfully.",프로필업데이트실패:"Failed to update profile: {error}",닉네임입력:"Enter your nickname",닉네임최대길이:"Maximum 50 characters",소개글:"Bio",소개글입력:"Tell us about yourself",소개글최대길이:"Maximum 200 characters",홈페이지:"Website",홈페이지입력:"Enter your website URL",GitHub:"GitHub",GitHub입력:"Enter your GitHub profile URL",사진업로드:"Upload Photo",사진제거:"Remove Photo",저장하기:"Save Changes",저장중:"Saving...",테스트게시글생성타이틀:"📝 Generate Test Posts",테스트게시글생성설명:"Generate 100 fun test posts for each category, totaling 400 posts.",로그인필요메시지:"⚠️ Login required to use this feature.",로그인하러가기:"Go to Login",게시글생성시작:"Start Generating Posts",생성중:"Generating...",생성성공:"✅ Successfully generated {count} posts!",생성실패:"❌ Failed to generate posts: {error}",경고:"⚠️ Warning",경고메시지:"This will create {count} test posts. Only use for testing purposes.",진행상황:"Progress",생성된게시글수:"{count} of {total} posts created",로딩중:"Loading...",게시판설명:" for the latest news and share your opinions.",글쓰기:"Write",게시글없음:"No posts yet",첫게시글공유:"Share your first story and start the community.",새글작성2:"Write New Post",게시글로딩중:"Loading posts...",게시글로드실패:"Failed to load posts.",더많은게시글로딩:"Loading more posts...",모든게시글확인:"All posts have been loaded.",새게시글작성:"Write New Post",카테고리:"Category",카테고리선택:"Select Category",카테고리선택필요:"Please select a category.",제목:"Title",제목입력:"Enter title",제목입력필요:"Please enter a title.",내용:"Content",내용입력:"Enter content",내용입력필요:"Please enter content.",전송:"Send",전송중:"Sending...",게시글작성완료:"Post has been created.",게시글저장실패:"Failed to save post: {error}",게시글저장중오류:"An error occurred while saving the post.",로그인정보확인불가:"Could not verify login information.",좋아요실패:"An error occurred while processing like.",이미좋아요:"You already liked this post.",댓글작성:"Write Comment",댓글내용입력:"Enter comment content",댓글이작성되었습니다:"Comment has been created.",댓글작성실패:"Failed to create comment: {error}",댓글내용입력필요:"Please enter comment content.","error.unknown":"An unknown error occurred.","error.network":"Please check your network connection.","error.offline":"No internet connection.","error.auth.invalidEmail":"Invalid email format.","error.auth.userDisabled":"This account has been disabled.","error.auth.userNotFound":"User not found.","error.auth.wrongPassword":"Incorrect password.","error.auth.emailAlreadyInUse":"This email is already in use.","error.auth.weakPassword":"Password is too weak. (Minimum 6 characters)","error.auth.operationNotAllowed":"This operation is not allowed.","error.auth.tooManyRequests":"Too many requests. Please try again later.","error.auth.invalidVerificationCode":"Invalid verification code.","error.auth.invalidPhoneNumber":"Invalid phone number.","error.auth.missingVerificationCode":"Please enter verification code.","error.auth.sessionExpired":"Session expired. Please log in again.","error.auth.requiresRecentLogin":"Please log in again for security.","error.auth.credentialAlreadyInUse":"This credential is already in use by another account.","error.db.permissionDenied":"You don't have permission to perform this action.","error.db.authenticationRequired":"Please log in first.","error.db.networkError":"Database connection error.","error.storage.unauthorized":"No permission to access file.","error.storage.bucketNotFound":"Storage bucket not found.","error.storage.invalidArgument":"Invalid argument.","error.storage.objectNotFound":"File not found.","error.storage.retryLimitExceeded":"File upload error. Please try again.","error.storage.quotaExceeded":"Storage quota exceeded.","error.storage.canceled":"File upload canceled.",게시글수정:"Edit Post",게시글수정완료:"Post has been updated.",게시글삭제확인:"Are you sure you want to delete this post?",게시글삭제완료:"Post has been deleted.",댓글이달려있어수정불가:"Cannot edit post with comments.",댓글이달려있어삭제불가:"Cannot delete post with comments.",제목과내용을입력하세요:"Please enter title and content.",수정불가:"Cannot Edit",댓글이달려있어수정불가메시지:`Cannot edit the post because there are comments.
Please delete the comments first before editing.`},ko:{프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",신고:"신고",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",바이브코딩SED:"바이브 코딩 - SED",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",전체댓글:"전체 댓글",전체좋아요:"전체 좋아요",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다. 자세히보기...","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"모든 것을 실시간 업데이트","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 (한국 바이브 보스) - 소셜 네트워크 서비스 웹/앱 개발","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"서버 측 로직 및 데이터 일관성 보장","home.todo.item8.subitem1":"사용자 프로필 동기화 (onUserProfileUpdate)","home.todo.item8.subitem2":"좋아요/댓글 개수 동기화","home.todo.item8.subitem3":"게시글 삭제 시 연관 데이터 정리","home.todo.item8.subitem4":"알림 트리거 및 전송","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",공사중메시지:"이 페이지는 공사중입니다",공사중설명_채팅목록:"채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_설정:"설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_게시물상세:"게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_앱정보:"앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_도움말:"도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_이용약관:"이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_개인정보:"개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_문의하기:"문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",메뉴로돌아가기:"메뉴로 돌아가기",페이지선택:"아래에서 이동할 페이지를 선택하세요",사용자프로필:"사용자 프로필",게시물상세예시:"게시물 상세 (예: ID:123)",채팅목록:"채팅 목록",테스트게시글생성:"[개발] 테스트 게시글 생성",로그인성공알림:`로그인 성공!
전화번호: {phone}`,로그인실패:"로그인 실패: {error}",전화번호로로그인:"전화번호로 간편하게 로그인하세요.",로그인하셨습니다:"{phone}로 로그인하셨습니다.",홈으로이동:"홈으로 이동",게시물상세:"게시물 상세",정보없음:"정보 없음",이름없음:"이름 없음",가입일:"가입일",프로필보기:"프로필 보기",사용자목록로딩:"사용자 목록을 불러오는 중...",등록된사용자없음:"등록된 사용자가 없습니다.",사용자목록실패:"사용자 목록을 불러오는데 실패했습니다.",더많은사용자로딩:"더 많은 사용자를 불러오는 중...",모든사용자로딩완료:"모든 사용자를 불러왔습니다.",다른사용자프로필:"다른 사용자 프로필:",프로필사진:"프로필 사진",프로필사진변경:"프로필 사진 변경",프로필사진추가:"프로필 사진 추가",프로필사진제거:"프로필 사진 제거",프로필사진클릭변경:"프로필 사진을 클릭하여 변경",사진저장중:"사진을 저장하는 중입니다...",닉네임입력:"닉네임을 입력하세요",닉네임헬퍼:"최대 50자까지 입력할 수 있습니다",선택하지않음:"선택하지 않음",남자:"남자",여자:"여자",생년월일헬퍼:"YYYY-MM-DD 형식으로 선택해주세요",저장중:"저장 중...",다른사진작업중:"다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",로그인후이용:"로그인 후 이용해주세요.",이미지파일만:"이미지 파일만 선택 가능합니다.",파일크기제한:"파일 크기는 5MB 이하여야 합니다.",프로필사진제거됨:"프로필 사진이 제거되었습니다.",사진제거실패:"사진 제거 실패: {error}",프로필사진저장됨:"프로필 사진이 저장되었습니다.",사진저장실패:"사진 저장 실패: {error}",프로필업데이트성공:"프로필이 성공적으로 업데이트되었습니다!",프로필업데이트오류:"오류: {error}",테스트데이터생성:"테스트 데이터 생성",테스트게시글생성타이틀:"📝 테스트 게시글 생성",테스트게시글설명:"각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",로그인하러가기:"로그인하러 가기",게시글생성시작:"게시글 생성 시작",실행로그:"실행 로그",완료게시판확인:"✅ 완료! 게시판 페이지에서 확인해보세요.",사용자:"사용자",로딩중:"로딩 중...",게시판설명:"에서 최신 소식을 확인하고 의견을 나눠보세요.",글쓰기:"글쓰기",게시글없음:"아직 등록된 게시글이 없어요",첫게시글공유:"첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",새글작성2:"새 글 작성하기",게시글로딩중:"게시글을 불러오는 중입니다...",게시글로드실패:"게시글을 불러오는 중 문제가 발생했습니다.",더많은게시글로딩:"더 많은 게시글을 불러오는 중...",모든게시글확인:"모든 게시글을 확인했습니다.",새게시글작성:"새 게시글 작성",카테고리:"카테고리",카테고리선택:"카테고리 선택",카테고리선택필요:"카테고리를 선택해주세요.",제목:"제목",제목입력:"제목을 입력하세요",제목입력필요:"제목을 입력해주세요.",내용:"내용",내용입력:"내용을 입력하세요",내용입력필요:"내용을 입력해주세요.",전송:"전송",전송중:"전송 중...",게시글작성완료:"게시글이 작성되었습니다.",게시글저장실패:"게시글 저장 실패: {error}",게시글저장중오류:"게시글 저장 중 오류가 발생했습니다.",로그인정보확인불가:"로그인 정보를 확인할 수 없습니다.",좋아요실패:"좋아요 처리 중 오류가 발생했습니다.",이미좋아요:"이미 좋아요를 눌렀습니다.",댓글작성:"댓글 작성",댓글내용입력:"댓글 내용을 입력하세요",댓글이작성되었습니다:"댓글이 작성되었습니다.",댓글작성실패:"댓글 작성 실패: {error}",댓글내용입력필요:"댓글 내용을 입력해주세요.",댓글더보기:"더 보기 (총 {count}개)",모든댓글보기:"모든 댓글 보기",댓글숨기기:"댓글 숨기기",답글:"답글",좋아요를하였습니다:"좋아요를 하였습니다.",좋아요를취소했습니다:"좋아요를 취소했습니다.","error.unknown":"알 수 없는 오류가 발생했습니다.","error.network":"네트워크 연결을 확인해주세요.","error.offline":"인터넷 연결이 없습니다.","error.auth.invalidEmail":"올바른 이메일 형식이 아닙니다.","error.auth.userDisabled":"비활성화된 계정입니다.","error.auth.userNotFound":"사용자를 찾을 수 없습니다.","error.auth.wrongPassword":"비밀번호가 올바르지 않습니다.","error.auth.emailAlreadyInUse":"이미 사용 중인 이메일입니다.","error.auth.weakPassword":"비밀번호가 너무 약합니다. (최소 6자 이상)","error.auth.operationNotAllowed":"이 작업은 허용되지 않습니다.","error.auth.tooManyRequests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","error.auth.invalidVerificationCode":"잘못된 인증 코드입니다.","error.auth.invalidPhoneNumber":"올바른 전화번호가 아닙니다.","error.auth.missingVerificationCode":"인증 코드를 입력해주세요.","error.auth.sessionExpired":"세션이 만료되었습니다. 다시 로그인해주세요.","error.auth.requiresRecentLogin":"보안을 위해 다시 로그인해주세요.","error.auth.credentialAlreadyInUse":"이미 다른 계정에서 사용 중인 인증 정보입니다.","error.db.permissionDenied":"이 작업을 수행할 권한이 없습니다.","error.db.authenticationRequired":"먼저 로그인해주세요.","error.db.networkError":"데이터베이스 연결 중 오류가 발생했습니다.","error.storage.unauthorized":"파일 접근 권한이 없습니다.","error.storage.bucketNotFound":"저장소를 찾을 수 없습니다.","error.storage.invalidArgument":"올바르지 않은 인자입니다.","error.storage.objectNotFound":"파일을 찾을 수 없습니다.","error.storage.retryLimitExceeded":"파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.","error.storage.quotaExceeded":"저장 공간이 부족합니다.","error.storage.canceled":"파일 업로드가 취소되었습니다.","dev.history.title":"📝 스터디 로그","dev.history.subtitle":"한바보 프로젝트의 개발 진행 현황을 기록합니다.","dev.history.updateIndicator":"최신 업데이트 자동 동기화","dev.history.seminar1.date":"2025-10-27 (첫 번째 세미나)","dev.history.seminar1.completed":"✅ 구현 완료","dev.history.seminar1.item1":"기본 프로젝트 셋업 (Next.js 16, React 19, TypeScript)","dev.history.seminar1.item2":"Firebase 설정 및 인증 구현","dev.history.seminar1.item3":"이메일/비밀번호 회원가입 & 로그인","dev.history.seminar1.item4":"회원 정보 수정 (프로필 업데이트)","dev.history.seminar1.item5":"1:1 채팅 기능 (실시간 메시지 동기화)","dev.history.seminar1.learned":"💡 배운 것들","dev.history.seminar1.learned1":"Next.js App Router 구조 이해","dev.history.seminar1.learned2":"Firebase Authentication 사용법","dev.history.seminar1.learned3":"Firebase Realtime Database 실시간 동기화","dev.history.seminar1.learned4":"Git PR을 통한 협업 방식","dev.history.seminar2.date":"2025-11-03 (두 번째 세미나)","dev.history.seminar2.completed":"✅ 기술 스택 전환 완료","dev.history.seminar2.item1":"React.js + Next.js + Firebase + Supabase → Svelte + Firebase로 전환","dev.history.seminar2.item2":"Svelte 5 Custom Elements 기반 아키텍처 구축","dev.history.seminar2.item3":"Web Components로 프레임워크 독립적인 구조 구현","dev.history.seminar2.item4":"Firebase만으로 모든 기능 구현 (Supabase 제거)","dev.history.seminar2.item5":"전체 프로젝트 리팩토링 및 재구성","dev.history.seminar2.learned":"💡 배운 것들","dev.history.seminar2.learned1":"Svelte 5 Runes ($state, $derived, $effect) 활용법","dev.history.seminar2.learned2":"Web Components의 장점과 재사용성","dev.history.seminar2.learned3":"Firebase만으로 충분한 기능 구현 가능","dev.history.seminar2.learned4":"더 가볍고 빠른 개발 환경 구축","dev.history.seminar3.date":"2025-11-04","dev.history.seminar3.completed":"✅ 핵심 기능 구현 완료","dev.history.seminar3.item1":"Svelte 5를 JavaScript에서 TypeScript로 전환","dev.history.seminar3.item2":"게시판 좋아요 기능 구현","dev.history.seminar3.item3":"댓글 작성, 수정, 삭제 기능 구현","dev.history.seminar3.item4":"댓글 좋아요 기능 추가","dev.history.seminar3.item5":"통계 기능 추가 (사용자 수, 게시글 수, 댓글 수 등)","dev.history.seminar3.learned":"💡 배운 것들","dev.history.seminar3.learned1":"TypeScript의 타입 안정성이 주는 바이브코딩의 코드 생성 향상","dev.history.seminar3.learned2":"바이브코딩의 한계를 극복하기 위한 Spec-Exact Development (SED) 개념 창조: LLM이 충분히 이해할 수 있는 상세한 스펙(DB 구조, 인증 방식, 암호화, 비밀번호 확인란 등) 제공. LLM이 작업 전 스펙 점수를 매겨 90점 이상일 때만 개발 시작","dev.history.seminar3.learned3":"Firebase increment()로 동시성 안전한 카운터 구현","dev.history.seminar3.learned4":"실시간 데이터 동기화를 활용한 통계 기능","dev.history.seminar3.learned5":"사용자 경험을 고려한 좋아요 및 댓글 UX 설계","dev.history.seminar4.date":"2025-11-05","dev.history.seminar4.completed":"✅ 구현 완료","dev.history.seminar4.item1":"각종 통계 (사용자 수, 게시글 수, 댓글 수, 좋아요 수 등)","dev.history.seminar4.item2":"댓글 작성 기능 완성 (실시간 동기화)","dev.history.seminar4.item3":"코멘트 좋아요 버그 수정 (Firebase push 키 처리)","dev.history.seminar4.item4":"Firebase Cloud Functions 배포 자동화 (npm run deploy)","dev.history.seminar4.item5":"CLAUDE.md 문서 구조 개선 (요약/레퍼런스 분리)","dev.history.seminar4.learned":"💡 배운 것들","dev.history.seminar4.learned1":"본 프로젝트를 100% 바이브 코딩(노코딩)으로 개발 진행하면서, 아무리 잘 작성된 프롬프트라고 해도, 프롬프트 몇 번만에 완전한 소셜 서비스 웹/앱 개발이 불가능하다는 것을 깨달았다.","dev.history.seminar4.learned2":"그래서 SED (Spec-Exact Development)의 중요성을 다시 한번 깨닫게 되었다.","dev.history.seminar4.learned3":"Firebase Cloud Functions의 increment() 함수로 동시성 안전한 카운터 업데이트 구현","dev.history.seminar4.learned4":"문서화의 중요성: 요약은 CLAUDE.md에, 상세 예제는 docs/*.md에 분리하여 관리","dev.history.upcoming":"더 많은 스터디 로그가 추가될 예정입니다...",게시글수정:"게시글 수정",게시글수정완료:"게시글이 수정되었습니다.",게시글삭제확인:"정말로 이 게시글을 삭제하시겠습니까?",게시글삭제완료:"게시글이 삭제되었습니다.",댓글이달려있어수정불가:"댓글이 달려 있는 경우 수정을 할 수 없습니다.",댓글이달려있어삭제불가:"댓글이 달려 있는 경우 삭제를 할 수 없습니다.",제목과내용을입력하세요:"제목과 내용을 입력하세요.",수정불가:"수정할 수 없습니다",댓글이달려있어수정불가메시지:`댓글이 달려 있어서 게시글을 수정할 수 없습니다.
댓글을 먼저 삭제한 후 수정해주세요.`},ja:{프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",신고:"通報",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",전체댓글:"総コメント数",전체좋아요:"総いいね数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"サーバー側ロジックとデータ整合性の保証","home.todo.item8.subitem1":"ユーザープロフィール同期 (onUserProfileUpdate)","home.todo.item8.subitem2":"いいね/コメント数の同期","home.todo.item8.subitem3":"投稿削除時の関連データクリーンアップ","home.todo.item8.subitem4":"通知トリガーと配信","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語",공사중메시지:"このページは工事中です",공사중설명_채팅목록:"チャットリスト機能は現在開発中で、まもなく更新される予定です。",공사중설명_설정:"設定機能は現在開発中で、まもなく更新される予定です。",공사중설명_게시물상세:"投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",공사중설명_앱정보:"アプリ情報ページは現在開発中で、まもなく更新される予定です。",공사중설명_도움말:"ヘルプページは現在開発中で、まもなく更新される予定です。",공사중설명_이용약관:"利用規約ページは現在開発中で、まもなく更新される予定です。",공사중설명_개인정보:"プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",공사중설명_문의하기:"お問い合わせページは現在開発中で、まもなく更新される予定です。",메뉴로돌아가기:"メニューに戻る",페이지선택:"移動するページを下から選択してください",사용자프로필:"ユーザープロフィール",게시물상세예시:"投稿詳細 (例: ID:123)",채팅목록:"チャットリスト",테스트게시글생성:"[開発] テスト投稿生成",로그인성공알림:`ログイン成功!
電話番号: {phone}`,로그인실패:"ログイン失敗: {error}",전화번호로로그인:"電話番号で簡単にログインしてください。",로그인하셨습니다:"{phone}でログインしています。",홈으로이동:"ホームへ移動",사용자목록로딩:"ユーザーリストを読み込み中...",등록된사용자없음:"登録されたユーザーがいません。",사용자목록실패:"ユーザーリストの読み込みに失敗しました。",더많은사용자로딩:"さらにユーザーを読み込み中...",모든사용자로딩완료:"すべてのユーザーを読み込みました。",정보없음:"情報なし",사용자:"ユーザー",이름없음:"名前なし",나:"私",가입일:"登録日",프로필보기:"プロフィール表示",프로필사진:"プロフィール写真",사진업로드중:"写真をアップロード中...",사진업로드실패:"写真のアップロードに失敗しました: {error}",다른사진작업중:"他の写真操作が進行中です...",프로필사진제거중:"プロフィール写真を削除中...",프로필사진제거완료:"プロフィール写真を削除しました。",프로필사진제거실패:"プロフィール写真の削除に失敗しました: {error}",프로필업데이트중:"プロフィールを更新中...",프로필업데이트완료:"プロフィールを正常に更新しました。",프로필업데이트실패:"プロフィールの更新に失敗しました: {error}",닉네임입력:"ニックネームを入力してください",닉네임최대길이:"最大50文字まで入力できます",소개글:"自己紹介",소개글입력:"自己紹介を入力してください",소개글최대길이:"最大200文字まで入力できます",홈페이지:"ウェブサイト",홈페이지입력:"ウェブサイトURLを入力してください",GitHub:"GitHub",GitHub입력:"GitHubプロフィールURLを入力してください",사진업로드:"写真をアップロード",사진제거:"写真を削除",저장하기:"変更を保存",저장중:"保存中...",테스트게시글생성타이틀:"📝 テスト投稿生成",테스트게시글생성설명:"各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",로그인필요메시지:"⚠️ この機能を使用するにはログインが必要です。",로그인하러가기:"ログインへ",게시글생성시작:"投稿生成開始",생성중:"生成中...",생성성공:"✅ {count}件の投稿を正常に生成しました！",생성실패:"❌ 投稿の生成に失敗しました: {error}",경고:"⚠️ 警告",경고메시지:"{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",진행상황:"進行状況",생성된게시글수:"{total}件中{count}件の投稿を作成",로딩중:"読み込み中...",게시판설명:"の最新ニュースを確認し、意見を共有してください。",글쓰기:"書く",게시글없음:"まだ投稿がありません",첫게시글공유:"最初のストーリーを共有してコミュニティを始めましょう。",새글작성2:"新規投稿を書く",게시글로딩중:"投稿を読み込み中...",게시글로드실패:"投稿の読み込みに失敗しました。",더많은게시글로딩:"さらに多くの投稿を読み込み中...",모든게시글확인:"すべての投稿を読み込みました。",새게시글작성:"新規投稿を書く",카테고리:"カテゴリ",카테고리선택:"カテゴリを選択",카테고리선택필요:"カテゴリを選択してください。",제목:"タイトル",제목입력:"タイトルを入力してください",제목입력필요:"タイトルを入力してください。",내용:"コンテンツ",내용입력:"コンテンツを入力してください",내용입력필요:"コンテンツを入力してください。",전송:"送信",전송중:"送信中...",게시글작성완료:"投稿が作成されました。",게시글저장실패:"投稿の保存に失敗しました: {error}",게시글저장중오류:"投稿の保存中にエラーが発生しました。",로그인정보확인불가:"ログイン情報を確認できませんでした。",좋아요실패:"いいね処理中にエラーが発生しました。",이미좋아요:"すでにいいねしています。",댓글작성:"コメントを書く",댓글내용입력:"コメント内容を入力してください",댓글이작성되었습니다:"コメントが作成されました。",댓글작성실패:"コメント作成に失敗しました: {error}",댓글내용입력필요:"コメント内容を入力してください。","error.unknown":"不明なエラーが発生しました。","error.network":"ネットワーク接続を確認してください。","error.offline":"インターネット接続がありません。","error.auth.invalidEmail":"正しいメール形式ではありません。","error.auth.userDisabled":"無効なアカウントです。","error.auth.userNotFound":"ユーザーが見つかりません。","error.auth.wrongPassword":"パスワードが正しくありません。","error.auth.emailAlreadyInUse":"すでに使用されているメールアドレスです。","error.auth.weakPassword":"パスワードが弱すぎます。（最低6文字以上）","error.auth.operationNotAllowed":"この操作は許可されていません。","error.auth.tooManyRequests":"リクエストが多すぎます。しばらくしてから再試行してください。","error.auth.invalidVerificationCode":"無効な認証コードです。","error.auth.invalidPhoneNumber":"正しい電話番号ではありません。","error.auth.missingVerificationCode":"認証コードを入力してください。","error.auth.sessionExpired":"セッションが期限切れです。再度ログインしてください。","error.auth.requiresRecentLogin":"セキュリティのため、再度ログインしてください。","error.auth.credentialAlreadyInUse":"すでに他のアカウントで使用されている認証情報です。","error.db.permissionDenied":"この操作を実行する権限がありません。","error.db.authenticationRequired":"まずログインしてください。","error.db.networkError":"データベース接続中にエラーが発生しました。","error.storage.unauthorized":"ファイルへのアクセス権限がありません。","error.storage.bucketNotFound":"ストレージが見つかりません。","error.storage.invalidArgument":"無効な引数です。","error.storage.objectNotFound":"ファイルが見つかりません。","error.storage.retryLimitExceeded":"ファイルアップロード中にエラーが発生しました。再試行してください。","error.storage.quotaExceeded":"ストレージ容量が不足しています。","error.storage.canceled":"ファイルアップロードがキャンセルされました。"},zh:{프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",신고:"举报",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",전체댓글:"总评论",전체좋아요:"总点赞",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"服务器端逻辑和数据一致性保障","home.todo.item8.subitem1":"用户资料同步 (onUserProfileUpdate)","home.todo.item8.subitem2":"点赞/评论数同步","home.todo.item8.subitem3":"帖子删除时清理关联数据","home.todo.item8.subitem4":"通知触发和发送","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文",공사중메시지:"此页面正在建设中",공사중설명_채팅목록:"聊天列表功能正在开发中，即将更新。",공사중설명_설정:"设置功能正在开发中，即将更新。",공사중설명_게시물상세:"帖子详情查看功能正在开发中，即将更新。",공사중설명_앱정보:"应用信息页面正在开发中，即将更新。",공사중설명_도움말:"帮助页面正在开发中，即将更新。",공사중설명_이용약관:"使用条款页面正在开发中，即将更新。",공사중설명_개인정보:"隐私政策页面正在开发中，即将更新。",공사중설명_문의하기:"联系我们页面正在开发中，即将更新。",메뉴로돌아가기:"返回菜单",페이지선택:"从下方选择要导航的页面",사용자프로필:"用户资料",게시물상세예시:"帖子详情 (例: ID:123)",채팅목록:"聊天列表",테스트게시글생성:"[开发] 生成测试帖子",로그인성공알림:`登录成功！
手机号: {phone}`,로그인실패:"登录失败: {error}",전화번호로로그인:"使用手机号轻松登录。",로그인하셨습니다:"您已使用 {phone} 登录。",홈으로이동:"前往首页",사용자목록로딩:"正在加载用户列表...",등록된사용자없음:"尚无注册用户。",사용자목록실패:"加载用户列表失败。",더많은사용자로딩:"正在加载更多用户...",모든사용자로딩완료:"已加载所有用户。",정보없음:"无信息",사용자:"用户",이름없음:"无名称",나:"我",가입일:"注册日期",프로필보기:"查看资料",프로필사진:"头像",사진업로드중:"正在上传照片...",사진업로드실패:"照片上传失败: {error}",다른사진작업중:"另一个照片操作正在进行中...",프로필사진제거중:"正在删除头像...",프로필사진제거완료:"头像已删除。",프로필사진제거실패:"删除头像失败: {error}",프로필업데이트중:"正在更新资料...",프로필업데이트완료:"资料更新成功。",프로필업데이트실패:"资料更新失败: {error}",닉네임입력:"输入您的昵称",닉네임최대길이:"最多可输入50个字符",소개글:"个人简介",소개글입력:"请输入自我介绍",소개글최대길이:"最多可输入200个字符",홈페이지:"网站",홈페이지입력:"请输入您的网站URL",GitHub:"GitHub",GitHub입력:"请输入您的GitHub个人资料URL",사진업로드:"上传照片",사진제거:"删除照片",저장하기:"保存更改",저장중:"保存中...",테스트게시글생성타이틀:"📝 生成测试帖子",테스트게시글생성설명:"每个类别生成100条有趣的测试帖子，共400条。",로그인필요메시지:"⚠️ 使用此功能需要登录。",로그인하러가기:"前往登录",게시글생성시작:"开始生成帖子",생성중:"生成中...",생성성공:"✅ 成功生成了 {count} 条帖子！",생성실패:"❌ 生成帖子失败: {error}",경고:"⚠️ 警告",경고메시지:"这将创建 {count} 条测试帖子。仅用于测试目的。",진행상황:"进度",생성된게시글수:"已创建 {count} / {total} 条帖子",로딩중:"加载中...",게시판설명:"的最新新闻，分享您的意见。",글쓰기:"写作",게시글없음:"还没有帖子",첫게시글공유:"分享您的第一个故事并开始社区。",새글작성2:"写新帖子",게시글로딩중:"正在加载帖子...",게시글로드실패:"加载帖子失败。",더많은게시글로딩:"正在加载更多帖子...",모든게시글확인:"已加载所有帖子。",새게시글작성:"写新帖子",카테고리:"类别",카테고리선택:"选择类别",카테고리선택필요:"请选择一个类别。",제목:"标题",제목입력:"输入标题",제목입력필요:"请输入标题。",내용:"内容",내용입력:"输入内容",내용입력필요:"请输入内容。",전송:"发送",전송중:"发送中...",게시글작성완료:"帖子已创建。",게시글저장실패:"帖子保存失败: {error}",게시글저장중오류:"保存帖子时出错。",로그인정보확인불가:"无法验证登录信息。",좋아요실패:"处理点赞时出错。",이미좋아요:"您已经点赞过了。",댓글작성:"写评论",댓글내용입력:"请输入评论内容",댓글이작성되었습니다:"评论已创建。",댓글작성실패:"评论创建失败: {error}",댓글내용입력필요:"请输入评论内容。","error.unknown":"发生未知错误。","error.network":"请检查网络连接。","error.offline":"没有互联网连接。","error.auth.invalidEmail":"邮箱格式不正确。","error.auth.userDisabled":"账户已被禁用。","error.auth.userNotFound":"找不到用户。","error.auth.wrongPassword":"密码不正确。","error.auth.emailAlreadyInUse":"该邮箱已被使用。","error.auth.weakPassword":"密码太弱。（至少6个字符）","error.auth.operationNotAllowed":"此操作不被允许。","error.auth.tooManyRequests":"请求过多。请稍后再试。","error.auth.invalidVerificationCode":"验证码无效。","error.auth.invalidPhoneNumber":"电话号码格式不正确。","error.auth.missingVerificationCode":"请输入验证码。","error.auth.sessionExpired":"会话已过期。请重新登录。","error.auth.requiresRecentLogin":"为了安全，请重新登录。","error.auth.credentialAlreadyInUse":"此凭证已被其他账户使用。","error.db.permissionDenied":"您没有执行此操作的权限。","error.db.authenticationRequired":"请先登录。","error.db.networkError":"数据库连接时出错。","error.storage.unauthorized":"没有文件访问权限。","error.storage.bucketNotFound":"找不到存储桶。","error.storage.invalidArgument":"参数无效。","error.storage.objectNotFound":"找不到文件。","error.storage.retryLimitExceeded":"文件上传出错。请重试。","error.storage.quotaExceeded":"存储空间不足。","error.storage.canceled":"文件上传已取消。"}};function Gc(t){const e=(t??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function wm(){if(typeof navigator>"u")return"en";const t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of t){const n=Gc(e);if(n!=="en")return n}return"en"}function YI(t){let e=Gc(t)||wm();function n(s){e=Gc(s)}function r(){return e}function i(s,o={}){return((qc[e]??qc.en)[s]??qc.en[s]??s).replace(/\{(\w+)\}/g,(c,d)=>o[d]??"")}return{t:i,setLocale:n,getLocale:r}}const Kc="sns-web-locale",Em=[{code:"ko",label:"🇰🇷 한국어"},{code:"en",label:"🇺🇸 English"},{code:"ja",label:"🇯🇵 日本語"},{code:"zh",label:"🇨🇳 中文"}];function QI(){if(typeof localStorage>"u")return null;const t=localStorage.getItem(Kc);if(!t)return null;const e=Em.find(n=>n.code===t);return e?e.code:null}const Im=QI()??wm(),ca=YI(Im);typeof localStorage<"u"&&localStorage.setItem(Kc,ca.getLocale());const Yc=Xr(Im);function JI(t){ca.setLocale(t);const e=ca.getLocale();Yc.set(e),typeof localStorage<"u"&&localStorage.setItem(Kc,e)}const Qc=ug(Yc,t=>(e,n={})=>ca.t(e,n)),XI=Xr("");function Pt(t){window.history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate"))}var ZI=W('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),eC=W('<img alt="프로필" class="avatar-image svelte-38psow"/>'),tC=W('<div class="avatar-fallback svelte-38psow"> </div>'),nC=W('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <button type="button" class="dropdown-item svelte-38psow"><!> <span> </span></button> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),rC=W('<img class="avatar-image svelte-38psow"/>'),iC=W('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),sC=W('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),oC=W('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"> </button> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),aC=W('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><button type="button" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></button> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const lC={hash:"svelte-38psow",code:`\r
  /* 탑바 */.topbar.svelte-38psow {position:fixed;top:0;left:0;right:0;z-index:50;border-bottom:1px solid #e5e7eb;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05);background-color:white;}\r
\r
  /* 컨테이너 */.container.svelte-38psow {max-width:1280px;margin:0 auto;display:flex;height:4rem;align-items:center;padding:0 1rem;}\r
\r
  /* 로고 */.logo-link.svelte-38psow {display:flex;align-items:center;text-decoration:none;color:inherit;flex-shrink:0;\r
    /* button 기본 스타일 리셋 */border:none;background:none;padding:0;font-family:inherit;cursor:pointer;}\r
\r
  /* 로고 섹션 (로고 + 페이지 제목) */.logo-section.svelte-38psow {display:flex;align-items:center;gap:1rem;flex-shrink:0;}\r
\r
  /* 로고 이미지 */.logo-img.svelte-38psow {height:2rem;width:auto;display:block;}\r
\r
  /* 페이지 제목 인라인 표시 */.page-title-inline.svelte-38psow {display:flex;align-items:center;padding-left:1rem;border-left:1px solid #e5e7eb;}\r
\r
  /* 페이지 제목 */.page-title.svelte-38psow {margin:0;font-size:1.125rem;font-weight:600;color:#1f2937;}\r
\r
  /* 네비게이션 */.nav.svelte-38psow {display:flex;align-items:center;gap:0.25rem;flex-shrink:0;margin-left:auto;}\r
\r
  /* 데스크톱 메뉴 */.desktop-menu.svelte-38psow {display:none;align-items:center;gap:0.5rem;}\r
\r
  @media (min-width: 768px) {.desktop-menu.svelte-38psow {display:flex;}\r
  }\r
\r
  /* 모바일 메뉴 */.mobile-menu.svelte-38psow {display:flex;align-items:center;gap:0.25rem;}\r
\r
  @media (min-width: 768px) {.mobile-menu.svelte-38psow {display:none;}\r
  }\r
\r
  /* 네비게이션 버튼 */.nav-button.svelte-38psow {display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.375rem;font-size:0.875rem;font-weight:500;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.nav-button.svelte-38psow:hover {background-color:#f3f4f6;}\r
\r
  /* 주요 버튼 */\r
\r
  /* 아이콘 버튼 */.icon-button.svelte-38psow {display:inline-flex;align-items:center;justify-content:center;padding:0.5rem;background:transparent;color:inherit;border:none;border-radius:0.375rem;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.icon-button.svelte-38psow:hover {background-color:#f3f4f6;}\r
\r
  /* 프로필 버튼 */.profile-button.svelte-38psow {display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.375rem;cursor:pointer;transition:background-color 0.2s;}.profile-button.svelte-38psow:hover {background-color:#f3f4f6;}\r
\r
  /* 프로필 이름 */.profile-name.svelte-38psow {display:none;font-size:0.875rem;}\r
\r
  @media (min-width: 1024px) {.profile-name.svelte-38psow {display:inline-block;}\r
  }\r
\r
  /* 아바타 */.avatar.svelte-38psow {width:1.5rem;height:1.5rem;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:#e5e7eb;}.avatar-small.svelte-38psow {width:1.75rem;height:1.75rem;}.avatar-image.svelte-38psow {width:100%;height:100%;-o-object-fit:cover;object-fit:cover;}.avatar-fallback.svelte-38psow {width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:500;color:#6b7280;}.avatar-fallback-small.svelte-38psow {font-size:0.625rem;}\r
\r
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function cC(t,e){cn(e,!0),Dn(t,lC);const n=()=>_r(XI,"$pageTitle",s),r=()=>_r(la,"$user",s),i=()=>_r(Qc,"$t",s),[s,o]=el();let a=ne(!1);function l(E){Pt(E),N(a,!1)}async function c(){if((await bm()).success){const v=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(v)}N(a,!1)}function d(){return tn.data?.displayName?tn.data.displayName.charAt(0).toUpperCase():tn.email?tn.email.charAt(0).toUpperCase():"U"}function h(){N(a,!y(a))}function u(E){const v=document.querySelector(".dropdown-menu"),T=document.querySelector(".dropdown-trigger"),A=E.target;v&&!v.contains(A)&&!T?.contains(A)&&N(a,!1)}Li(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}));var f=aC(),p=_(f),g=_(p),w=_(g);w.__click=()=>l("/");var I=b(w,2);{var S=E=>{var v=ZI(),T=_(v),A=_(T,!0);m(T),m(v),re(()=>L(A,n())),x(E,v)};Ee(I,E=>{n()&&E(S)})}m(g);var R=b(g,2),P=_(R);{var M=E=>{var v=sC(),T=se(v),A=_(T);A.__click=()=>l("/post/list");var F=_(A);xs(F,{size:16});var O=b(F,2),z=_(O,!0);m(O),m(A);var Y=b(A,2);Y.__click=()=>l("/chat/list");var H=_(Y);tr(H,{size:16});var Q=b(H,2),ge=_(Q,!0);m(Q),m(Y);var Z=b(Y,2);Z.__click=()=>l("/user/list");var ee=_(Z);Ds(ee,{size:16});var ce=b(ee,2),oe=_(ce,!0);m(ce),m(Z);var ve=b(Z,2),te=_(ve);te.__click=h;var ue=_(te),j=_(ue);{var ae=Le=>{var Te=eC();re(()=>Pe(Te,"src",tn.data.photoUrl)),x(Le,Te)},de=Le=>{var Te=tC(),ft=_(Te,!0);m(Te),re(st=>L(ft,st),[d]),x(Le,Te)};Ee(j,Le=>{tn.data?.photoUrl?Le(ae):Le(de,!1)})}m(ue);var Ze=b(ue,2),Ae=_(Ze,!0);m(Ze),m(te);var be=b(te,2);{var We=Le=>{var Te=nC(),ft=_(Te),st=_(ft,!0);m(ft);var Tn=b(ft,4);Tn.__click=()=>l("/user/profile");var or=_(Tn);nr(or,{size:16});var Or=b(or,2),Mr=_(Or,!0);m(Or),m(Tn);var $r=b(Tn,4);$r.__click=c;var Ms=_($r);dm(Ms,{size:16});var fa=b(Ms,2),pa=_(fa,!0);m(fa),m($r),m(Te),re((ma,_a,Zc)=>{L(st,ma),L(Mr,_a),L(pa,Zc)},[()=>i()("내계정"),()=>i()("프로필수정"),()=>i()("로그아웃")]),x(Le,Te)};Ee(be,Le=>{y(a)&&Le(We)})}m(ve);var et=b(ve,2);et.__click=()=>l("/menu");var xe=_(et);Ls(xe,{size:24}),m(et),m(T);var Ke=b(T,2),Ye=_(Ke);Ye.__click=()=>l("/post/list");var Lr=_(Ye);xs(Lr,{size:20}),m(Ye);var jt=b(Ye,2);jt.__click=()=>l("/user/list");var rr=_(jt);Ds(rr,{size:20}),m(jt);var ir=b(jt,2);ir.__click=()=>l("/chat/list");var ua=_(ir);tr(ua,{size:20}),m(ir);var Dr=b(ir,2);Dr.__click=()=>l("/user/profile");var bi=_(Dr),da=_(bi);{var ha=Le=>{var Te=rC();re(ft=>{Pe(Te,"src",tn.data.photoUrl),Pe(Te,"alt",ft)},[()=>i()("프로필")]),x(Le,Te)},Xc=Le=>{var Te=iC(),ft=_(Te,!0);m(Te),re(st=>L(ft,st),[d]),x(Le,Te)};Ee(da,Le=>{tn.data?.photoUrl?Le(ha):Le(Xc,!1)})}m(bi),m(Dr);var sr=b(Dr,2);sr.__click=()=>l("/menu");var Os=_(sr);Ls(Os,{size:24}),m(sr),m(Ke),re((Le,Te,ft,st,Tn,or,Or,Mr,$r)=>{L(z,Le),L(ge,Te),L(oe,ft),L(Ae,tn.data?.displayName||tn.email),Pe(et,"title",st),Pe(Ye,"title",Tn),Pe(jt,"title",or),Pe(ir,"title",Or),Pe(Dr,"title",Mr),Pe(sr,"title",$r)},[()=>i()("게시판"),()=>i()("채팅"),()=>i()("사용자찾기"),()=>i()("메뉴"),()=>i()("게시판"),()=>i()("사용자찾기"),()=>i()("채팅"),()=>i()("프로필"),()=>i()("메뉴")]),x(E,v)},C=E=>{var v=oC(),T=se(v),A=_(T);A.__click=()=>l("/post/list");var F=_(A);xs(F,{size:16});var O=b(F,2),z=_(O,!0);m(O),m(A);var Y=b(A,2);Y.__click=()=>l("/chat/list");var H=_(Y);tr(H,{size:16});var Q=b(H,2),ge=_(Q,!0);m(Q),m(Y);var Z=b(Y,2);Z.__click=()=>l("/user/login");var ee=_(Z,!0);m(Z);var ce=b(Z,2);ce.__click=()=>l("/menu");var oe=_(ce);Ls(oe,{size:20}),m(ce),m(T);var ve=b(T,2),te=_(ve);te.__click=()=>l("/post/list");var ue=_(te);xs(ue,{size:20}),m(te);var j=b(te,2);j.__click=()=>l("/chat/list");var ae=_(j);tr(ae,{size:20}),m(j);var de=b(j,2);de.__click=()=>l("/user/login");var Ze=_(de);nr(Ze,{size:20}),m(de);var Ae=b(de,2);Ae.__click=()=>l("/menu");var be=_(Ae);Ls(be,{size:24}),m(Ae),m(ve),re((We,et,xe,Ke,Ye,Lr,jt,rr)=>{L(z,We),L(ge,et),L(ee,xe),Pe(ce,"title",Ke),Pe(te,"title",Ye),Pe(j,"title",Lr),Pe(de,"title",jt),Pe(Ae,"title",rr)},[()=>i()("게시판"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴"),()=>i()("게시판"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴")]),x(E,v)};Ee(P,E=>{r()?E(M):E(C,!1)})}m(R),m(p),m(f),x(t,f),un(),o()}mr(["click"]),customElements.define("sns-topbar",fe(cC,{},[],[],!0));var uC=W('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>'),dC=W('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>',1),hC=W("<option> </option>"),fC=W('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const pC={hash:"svelte-najsij",code:`
  /* 사이드바 */.sidebar.svelte-najsij {width:16rem;border-right:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:hidden;height:100vh;}

  /* 사이드바 콘텐츠 */.sidebar-content.svelte-najsij {position:sticky;top:5rem;}

  /* 섹션 제목 */.section-title.svelte-najsij {font-size:1.125rem;font-weight:bold;margin-bottom:1rem;color:#111827;}

  /* 섹션 부제목 */.section-subtitle.svelte-najsij {font-size:0.875rem;font-weight:600;margin-bottom:0.5rem;color:#6b7280;}

  /* 메뉴 */.menu.svelte-najsij {display:flex;flex-direction:column;gap:0.5rem;}

  /* 메뉴 아이템 */.menu-item.svelte-najsij {display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:0.5rem;color:#374151;text-decoration:none;transition:all 0.2s;cursor:pointer;
    /* button 기본 스타일 리셋 */border:none;background:none;font-family:inherit;font-size:inherit;text-align:left;width:100%;}.menu-item.svelte-najsij:hover {background-color:#f3f4f6;color:#111827;}

  /* 작은 메뉴 아이템 */.menu-item-small.svelte-najsij {display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:0.5rem;color:#374151;text-decoration:none;transition:all 0.2s;font-size:0.875rem;font-weight:500;cursor:pointer;
    /* button 기본 스타일 리셋 */border:none;background:none;font-family:inherit;text-align:left;width:100%;}.menu-item-small.svelte-najsij:hover {background-color:#f3f4f6;color:#111827;}

  /* 외부 링크 아이콘 */

  /* 아이콘 */.icon.svelte-najsij {flex-shrink:0;}

  /* 구분선 */.divider.svelte-najsij {height:1px;background-color:#e5e7eb;margin:1.5rem 0;}

  /* 섹션 */.section.svelte-najsij {margin-bottom:1.5rem;}

  /* 언어 설정 섹션 */.language-section.svelte-najsij {margin-top:1.5rem;padding-top:1rem;border-top:1px solid #e5e7eb;}.language-compact.svelte-najsij {display:flex;align-items:center;gap:0.75rem;}.language-label.svelte-najsij {font-size:0.85rem;font-weight:600;color:#374151;white-space:nowrap;}.language-select.svelte-najsij {flex:1;padding:0.45rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;background-color:#ffffff;color:#111827;font-size:0.85rem;font-weight:500;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 0.75rem center;background-size:12px 8px;cursor:pointer;}.language-select.svelte-najsij:focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.15);}

  /* 빌드 정보 */.build-info.svelte-najsij {margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e7eb;font-size:0.75rem;color:#6b7280;}.build-row.svelte-najsij {display:flex;align-items:center;justify-content:space-between;}.build-timestamp.svelte-najsij {font-family:'Courier New', monospace;}

  /* Copyleft 정보 */.copyleft.svelte-najsij {margin-top:1rem;text-align:center;font-size:0.75rem;color:#6b7280;}.copyleft.svelte-najsij p:where(.svelte-najsij) {line-height:1.5;}

  /* 반응형: 모바일에서는 숨김 */
  @media (max-width: 768px) {.sidebar.svelte-najsij {display:none;}
  }`};function mC(t,e){cn(e,!1),Dn(t,pC);const n=()=>_r(Qc,"$t",s),r=()=>_r(la,"$user",s),i=()=>_r(Yc,"$locale",s),[s,o]=el(),a=Em;yd();var l=fC(),c=_(l),d=_(c),h=_(d,!0);m(d);var u=b(d,2),f=_(u);f.__click=()=>Pt("/");var p=_(f);cm(p,{size:20});var g=b(p,2),w=_(g,!0);m(g),m(f);var I=b(f,2);I.__click=()=>Pt("/chat/room");var S=_(I);tr(S,{size:20});var R=b(S,2),P=_(R,!0);m(R),m(I);var M=b(I,2);M.__click=()=>Pt("/user/list");var C=_(M);Ds(C,{size:20});var E=b(C,2),v=_(E,!0);m(E),m(M);var T=b(M,2);T.__click=()=>Pt("/user/profile");var A=_(T);nr(A,{size:20});var F=b(A,2),O=_(F,!0);m(F),m(T);var z=b(T,2);z.__click=()=>Pt("/post/list");var Y=_(z);Bc(Y,{size:20});var H=b(Y,2),Q=_(H,!0);m(H),m(z),m(u);var ge=b(u,4),Z=_(ge),ee=_(Z,!0);m(Z);var ce=b(Z,2),oe=_(ce);{var ve=Nt=>{var yt=uC();yt.__click=()=>Pt("/user/profile");var ot=_(yt);nr(ot,{size:16});var Sn=b(ot,2),kn=_(Sn,!0);m(Sn),m(yt),re($s=>L(kn,$s),[()=>n()("회원정보수정")]),x(Nt,yt)},te=Nt=>{var yt=dC(),ot=se(yt);ot.__click=()=>Pt("/auth/login");var Sn=_(ot);um(Sn,{size:16});var kn=b(Sn,2),$s=_(kn,!0);m(kn),m(ot);var Fs=b(ot,2);Fs.__click=()=>Pt("/auth/signup");var ga=_(Fs);nr(ga,{size:16});var va=b(ga,2),eu=_(va,!0);m(va),m(Fs),re((tu,nu)=>{L($s,tu),L(eu,nu)},[()=>n()("로그인"),()=>n()("회원가입")]),x(Nt,yt)};Ee(oe,Nt=>{r()?Nt(ve):Nt(te,!1)})}m(ce),m(ge);var ue=b(ge,4),j=_(ue);j.__click=()=>Pt("/user/list");var ae=_(j);Ds(ae,{size:16});var de=b(ae,2),Ze=_(de,!0);m(de),m(j);var Ae=b(j,2),be=b(_(Ae),2),We=_(be,!0);m(be);var et=b(be,2);Vc(et,{size:12,class:"external-icon"}),m(Ae);var xe=b(Ae,2),Ke=_(xe);tr(Ke,{size:16});var Ye=b(Ke,2),Lr=_(Ye,!0);m(Ye);var jt=b(Ye,2);Vc(jt,{size:12,class:"external-icon"}),m(xe);var rr=b(xe,2);rr.__click=()=>Pt("/dev/history");var ir=_(rr);am(ir,{size:16});var ua=b(ir,2),Dr=_(ua,!0);m(ua),m(rr);var bi=b(rr,2);bi.__click=()=>Pt("/dev/sed");var da=_(bi);gm(da,{size:16});var ha=b(da,2),Xc=_(ha,!0);m(ha),m(bi),m(ue);var sr=b(ue,2),Os=_(sr),Le=_(Os,!0);m(Os);var Te=b(Os,2),ft=_(Te),st=b(ft,2);st.__change=Nt=>JI(Nt.currentTarget.value),Qr(st,5,()=>a,ro,(Nt,yt)=>{var ot=hC(),Sn=_(ot,!0);m(ot);var kn={};re(()=>{L(Sn,y(yt).label),kn!==(kn=y(yt).code)&&(ot.value=(ot.__value=y(yt).code)??"")}),x(Nt,ot)}),m(st);var Tn;Ka(st),m(Te),m(sr);var or=b(sr,2),Or=_(or),Mr=_(Or),$r=_(Mr,!0);m(Mr);var Ms=b(Mr,2),fa=_(Ms,!0);m(Ms),m(Or),m(or);var pa=b(or,2),ma=_(pa),_a=_(ma,!0),Zc=b(_a,2);m(ma),m(pa),m(c),m(l),re((Nt,yt,ot,Sn,kn,$s,Fs,ga,va,eu,tu,nu,iT,sT,oT,aT,lT,cT)=>{L(h,Nt),L(w,yt),L(P,ot),L(v,Sn),L(O,kn),L(Q,$s),L(ee,Fs),L(Ze,ga),L(We,va),L(Lr,eu),L(Dr,tu),L(Xc,nu),L(Le,iT),Pe(ft,"aria-label",sT),Tn!==(Tn=i())&&(st.value=(st.__value=i())??"",Oi(st,i())),L($r,oT),L(fa,aT),L(_a,lT),L(Zc,` ${cT??""}`)},[()=>n()("퀵메뉴"),()=>n()("홈"),()=>n()("채팅"),()=>n()("사용자목록"),()=>n()("내프로필"),()=>n()("게시판"),()=>n()("시작하기"),()=>n()("회원목록"),()=>n()("프로젝트GitHub"),()=>n()("한바보참여단톡방"),()=>n()("개발일지"),()=>n()("바이브코딩SED"),()=>n()("언어설정"),()=>n()("언어설정"),()=>n()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>n()("카피레프트"),()=>n()("AI소개")]),x(t,l),un(),o()}mr(["click","change"]),customElements.define("sns-left-sidebar",fe(mC,{},[],[],!0));var _C=W('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const gC={hash:"svelte-3epon2",code:`\r
  /* 사이드바 */.sidebar.svelte-3epon2 {width:16rem;border-left:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:hidden;height:100vh;}\r
\r
  /* 사이드바 콘텐츠 */.sidebar-content.svelte-3epon2 {position:sticky;top:5rem;}\r
\r
  /* 섹션 제목 */.section-title.svelte-3epon2 {font-size:1.125rem;font-weight:bold;margin-bottom:1rem;color:#111827;}\r
\r
  /* 통계 */.stats.svelte-3epon2 {display:flex;flex-direction:column;gap:1rem;}\r
\r
  /* 통계 아이템 */.stat-item.svelte-3epon2 {display:flex;align-items:center;gap:0.75rem;padding:1rem;border-radius:0.5rem;background-color:#f9fafb;border:1px solid #e5e7eb;transition:all 0.2s;}.stat-item.svelte-3epon2:hover {background-color:#f3f4f6;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);}\r
\r
  /* 통계 아이콘 */.stat-icon.svelte-3epon2 {display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border-radius:0.5rem;flex-shrink:0;}.stat-icon-user.svelte-3epon2 {background-color:#dbeafe;color:#1e40af;}.stat-icon-score.svelte-3epon2 {background-color:#d1fae5;color:#047857;}.stat-icon-posts.svelte-3epon2 {background-color:#fce7f3;color:#be185d;}.stat-icon-messages.svelte-3epon2 {background-color:#fef3c7;color:#d97706;}\r
\r
  /* 통계 콘텐츠 */.stat-content.svelte-3epon2 {flex:1;}\r
\r
  /* 통계 라벨 */.stat-label.svelte-3epon2 {font-size:0.875rem;color:#6b7280;margin-bottom:0.25rem;}\r
\r
  /* 통계 값 */.stat-value.svelte-3epon2 {font-size:1.5rem;font-weight:bold;color:#111827;}\r
\r
  /* 통계 설명 */.stat-description.svelte-3epon2 {font-size:0.75rem;color:#9ca3af;margin-top:0.25rem;}\r
\r
  /* 알림 */.notice.svelte-3epon2 {margin-top:1.5rem;padding:0.75rem;background-color:#f3f4f6;border-radius:0.375rem;font-size:0.75rem;color:#6b7280;text-align:center;}\r
\r
  /* 반응형: 모바일에서는 숨김 */\r
  @media (max-width: 1024px) {.sidebar.svelte-3epon2 {display:none;}\r
  }`};function vC(t,e){cn(e,!0),Dn(t,gC);const n=()=>_r(Qc,"$t",r),[r,i]=el();let s=ne(hn({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=_C(),a=_(o),l=_(a),c=_(l,!0);m(l);var d=b(l,2),h=_(d),u=_(h),f=_(u);nr(f,{size:20}),m(u);var p=b(u,2),g=_(p),w=_(g,!0);m(g);var I=b(g,2),S=_(I,!0);m(I),m(p),m(h);var R=b(h,2),P=_(R),M=_(P);_m(M,{size:20}),m(P);var C=b(P,2),E=_(C),v=_(E,!0);m(E);var T=b(E,2),A=_(T,!0);m(T),m(C),m(R);var F=b(R,2),O=_(F),z=_(O);Bc(z,{size:20}),m(O);var Y=b(O,2),H=_(Y),Q=_(H,!0);m(H);var ge=b(H,2),Z=_(ge,!0);m(ge);var ee=b(ge,2),ce=_(ee,!0);m(ee),m(Y),m(F);var oe=b(F,2),ve=_(oe),te=_(ve);tr(te,{size:20}),m(ve);var ue=b(ve,2),j=_(ue),ae=_(j,!0);m(j);var de=b(j,2),Ze=_(de,!0);m(de),m(ue),m(oe),m(d);var Ae=b(d,2),be=_(Ae,!0);m(Ae),m(a),m(o),re((We,et,xe,Ke,Ye,Lr,jt)=>{L(c,We),L(w,et),L(S,y(s).totalUsers),L(v,xe),L(A,y(s).totalScore),L(Q,Ke),L(Z,y(s).totalPosts),L(ce,Ye),L(ae,Lr),L(Ze,y(s).totalMessages),L(be,jt)},[()=>n()("통계"),()=>n()("전체사용자"),()=>n()("전체점수"),()=>n()("전체글"),()=>n()("준비중"),()=>n()("채팅메시지"),()=>n()("통계실시간업데이트")]),x(t,o),un(),i()}customElements.define("sns-right-sidebar",fe(vC,{},[],[],!0));var bC=W('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const yC={hash:"svelte-um1xbq",code:`\r
  /* 전체 레이아웃 */.layout.svelte-um1xbq {min-height:100vh;background-color:#f9fafb;}\r
\r
  /* 메인 컨테이너 */.main-container.svelte-um1xbq {display:flex;margin-top:4rem; /* Topbar 높이만큼 여백 */min-height:calc(100vh - 4rem);}\r
\r
  /* 왼쪽 사이드바 */.left-sidebar.svelte-um1xbq {display:none;}\r
\r
  @media (min-width: 768px) {.left-sidebar.svelte-um1xbq {display:block;position:sticky;top:4rem;height:calc(100vh - 4rem);overflow:hidden;}\r
  }\r
\r
  /* 메인 콘텐츠 */.main-content.svelte-um1xbq {flex:1;max-width:100%;padding:1.5rem;overflow-x:hidden;}\r
\r
  @media (min-width: 768px) {.main-content.svelte-um1xbq {max-width:calc(100% - 16rem); /* LeftSidebar 너비 제외 */}\r
  }\r
\r
  @media (min-width: 1024px) {.main-content.svelte-um1xbq {max-width:calc(100% - 32rem); /* LeftSidebar + RightSidebar 너비 제외 */}\r
  }\r
\r
  /* 오른쪽 사이드바 */.right-sidebar.svelte-um1xbq {display:none;}\r
\r
  @media (min-width: 1024px) {.right-sidebar.svelte-um1xbq {display:block;position:sticky;top:4rem;height:calc(100vh - 4rem);overflow:hidden;}\r
  }`};function wC(t,e){Dn(t,yC);var n=bC(),r=_(n),i=b(r,2),s=_(i);Di(s,1,"left-sidebar svelte-um1xbq");var o=b(s,2),a=_(o);Re(a,e,"default",{}),m(o);var l=b(o,2);Di(l,1,"right-sidebar svelte-um1xbq"),m(i),m(n),x(t,n)}customElements.define("sns-layout",fe(wC,{},["default"],[],!0));var EC=W('<div class="icon-container svelte-m3h71q"> </div>'),IC=W('<p class="hint-box svelte-m3h71q"> </p>'),CC=W('<p class="gpl-box svelte-m3h71q"> </p>'),TC=W('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),SC=W('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),kC=W('<div class="accordion svelte-m3h71q"></div>');const AC={hash:"svelte-m3h71q",code:`\r
  /**\r
   * 아코디언 스타일\r
   * Tailwind CSS 클래스를 순수 CSS로 변환\r
   */\r
\r
  /* 아코디언 컨테이너 */.accordion.svelte-m3h71q {width:100%; /* w-full */display:flex;flex-direction:column;gap:1rem; /* space-y-4 */}\r
\r
  /* 아코디언 아이템 */.accordion-item.svelte-m3h71q {border:1px solid #e5e7eb; /* border border-gray-200 */border-radius:0.5rem; /* rounded-lg */overflow:hidden;background-color:#ffffff; /* bg-white */box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */transition:box-shadow 0.3s ease; /* transition-shadow */}.accordion-item.svelte-m3h71q:hover {box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* hover:shadow-md */}\r
\r
  /* 아코디언 트리거 (헤더) */.accordion-trigger.svelte-m3h71q {width:100%; /* w-full */padding:1rem 1.5rem; /* px-6 py-4 */display:flex; /* flex */align-items:center; /* items-center */justify-content:space-between; /* justify-between */text-align:left; /* text-left */background:linear-gradient(to right, #eff6ff, #faf5ff); /* bg-gradient-to-r from-blue-50 to-purple-50 */transition:all 0.3s ease; /* transition-all */cursor:pointer;border:none;font-family:inherit;}.accordion-trigger.svelte-m3h71q:hover {background:linear-gradient(to right, #dbeafe, #f3e8ff); /* hover:from-blue-100 hover:to-purple-100 */}.accordion-trigger.svelte-m3h71q:focus {outline:2px solid #3b82f6;outline-offset:2px;}\r
\r
  /* 트리거 콘텐츠 (아이콘 + 제목) */.trigger-content.svelte-m3h71q {display:flex; /* flex */align-items:center; /* items-center */gap:0.75rem; /* gap-3 */flex:1; /* flex-1 */}\r
\r
  /* 아이콘 컨테이너 */.icon-container.svelte-m3h71q {font-size:1.5rem; /* text-2xl */background-color:#ffffff; /* bg-white */border-radius:9999px; /* rounded-full */width:2.5rem; /* w-10 */height:2.5rem; /* h-10 */display:flex; /* flex */align-items:center; /* items-center */justify-content:center; /* justify-center */box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */}\r
\r
  /* 제목 */.title.svelte-m3h71q {font-size:1.125rem; /* text-lg */font-weight:600; /* font-semibold */color:#1f2937; /* text-gray-800 */}\r
\r
  /* Chevron 아이콘 */.chevron.svelte-m3h71q {transition:transform 0.2s ease-in-out; /* transition-transform duration-200 */color:#4b5563; /* text-gray-600 */}.rotate-180.svelte-m3h71q {transform:rotate(180deg);}\r
\r
  /* 아코디언 콘텐츠 */.accordion-content.svelte-m3h71q {padding:1rem 1.5rem; /* px-6 py-4 */background-color:#ffffff; /* bg-white */border-top:1px solid #f3f4f6; /* border-t border-gray-100 */\r
    animation: svelte-m3h71q-slideDown 0.2s ease-out;}\r
\r
  /* 콘텐츠 텍스트 */.content-text.svelte-m3h71q {color:#374151; /* text-gray-700 */line-height:1.625; /* leading-relaxed */margin-bottom:0.75rem; /* mb-3 */}\r
\r
  /* 힌트 박스 */.hint-box.svelte-m3h71q {font-size:0.875rem; /* text-sm */color:#2563eb; /* text-blue-600 */background-color:#eff6ff; /* bg-blue-50 */padding:0.5rem 1rem; /* px-4 py-2 */border-radius:0.375rem; /* rounded-md */border:1px solid #bfdbfe; /* border border-blue-200 */}\r
\r
  /* GPL 박스 */.gpl-box.svelte-m3h71q {font-size:0.875rem; /* text-sm */color:#16a34a; /* text-green-600 */background-color:#f0fdf4; /* bg-green-50 */padding:0.5rem 1rem; /* px-4 py-2 */border-radius:0.375rem; /* rounded-md */border:1px solid #bbf7d0; /* border border-green-200 */margin-top:0.5rem; /* mt-2 */}\r
\r
  /* 콘텐츠 애니메이션 */\r
  @keyframes svelte-m3h71q-slideDown {\r
    from {\r
      opacity: 0;\r
      transform: translateY(-10px);\r
    }\r
    to {\r
      opacity: 1;\r
      transform: translateY(0);\r
    }\r
  }`};function RC(t,e){cn(e,!0),Dn(t,AC);let n=St(e,"items",7,"[]"),r=St(e,"type",7,"single"),i=St(e,"collapsible",7,!0),s=Pa(()=>{try{const u=typeof n()=="string"?JSON.parse(n()):n();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=Pa(()=>{const u=i();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=ne(hn(new Set));function l(u){const f=new Set(y(a));r()==="single"?f.has(u)?y(o)&&f.delete(u):(f.clear(),f.add(u)):f.has(u)?f.delete(u):f.add(u),N(a,f,!0)}function c(u){return y(a).has(u)}var d={get items(){return n()},set items(u="[]"){n(u),_t()},get type(){return r()},set type(u="single"){r(u),_t()},get collapsible(){return i()},set collapsible(u=!0){i(u),_t()}},h=kC();return Qr(h,21,()=>y(s),ro,(u,f,p)=>{var g=SC(),w=_(g);w.__click=()=>l(p);var I=_(w),S=_(I);{var R=F=>{var O=EC(),z=_(O,!0);m(O),re(()=>L(z,y(f).icon)),x(F,O)};Ee(S,F=>{y(f).icon&&F(R)})}var P=b(S,2),M=_(P,!0);m(P),m(I);var C=b(I,2);let E;var v=_(C);lm(v,{size:20}),m(C),m(w);var T=b(w,2);{var A=F=>{var O=TC(),z=_(O),Y=_(z,!0);m(z);var H=b(z,2);{var Q=ee=>{var ce=IC(),oe=_(ce,!0);m(ce),re(()=>L(oe,y(f).hint)),x(ee,ce)};Ee(H,ee=>{y(f).hint&&ee(Q)})}var ge=b(H,2);{var Z=ee=>{var ce=CC(),oe=_(ce,!0);m(ce),re(()=>L(oe,y(f).gpl)),x(ee,ce)};Ee(ge,ee=>{y(f).gpl&&ee(Z)})}m(O),re(()=>L(Y,y(f).content)),x(F,O)};Ee(T,F=>{c(p)&&F(A)})}m(g),re((F,O)=>{Pe(w,"aria-expanded",F),L(M,y(f).title),E=Di(C,1,"chevron svelte-m3h71q",null,E,O)},[()=>c(p),()=>({"rotate-180":c(p)})]),x(u,g)}),m(h),x(t,h),un(d)}mr(["click"]),customElements.define("sns-accordion",fe(RC,{items:{},type:{},collapsible:{}},[],[],!0));var PC=W('<div class="uid-section svelte-1uta475"><div class="uid-label svelte-1uta475">현재 사용자 UID</div> <div class="uid-value svelte-1uta475"> </div></div> <div class="menu-divider svelte-1uta475"></div>',1),NC=W('<button class="account-button svelte-1uta475" role="menuitem"><span class="account-label svelte-1uta475"> </span> <span class="account-phone svelte-1uta475"> </span></button>'),xC=W('<div class="test-fab-menu svelte-1uta475" role="menu"><div class="menu-header svelte-1uta475"><span class="menu-title svelte-1uta475">테스트 도구</span></div> <div class="menu-divider svelte-1uta475"></div> <!> <div class="menu-section svelte-1uta475"><div class="section-title svelte-1uta475"><!> <span>테스트 계정 로그인</span></div> <div class="account-list svelte-1uta475"></div></div> <div class="menu-divider svelte-1uta475"></div> <button class="menu-button svelte-1uta475" role="menuitem"><!> <span>서버 정보 보기</span></button> <div class="menu-divider svelte-1uta475"></div> <div class="version-info svelte-1uta475"><p class="version-label svelte-1uta475">빌드 버전</p> <p class="version-value svelte-1uta475"> </p></div></div>'),LC=W('<div class="modal-overlay svelte-1uta475" role="dialog" aria-modal="true" aria-labelledby="server-info-title" tabindex="-1"><div class="modal-content svelte-1uta475"><h2 id="server-info-title" class="modal-title svelte-1uta475">서버 정보</h2> <div class="info-list svelte-1uta475"><div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">환경:</span> <span class="info-value svelte-1uta475"> </span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Svelte:</span> <span class="info-value svelte-1uta475">5.43.2</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Vite:</span> <span class="info-value svelte-1uta475">6.x</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Firebase:</span> <span class="info-value svelte-1uta475">설정됨</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">프로젝트 ID:</span> <span class="info-value info-value-small svelte-1uta475"> </span></div></div> <button class="modal-close-button svelte-1uta475">닫기</button></div></div>'),DC=W('<div class="test-fab-container svelte-1uta475"><button aria-label="테스트 도구 열기"><!></button> <!></div> <!>',1);const OC={hash:"svelte-1uta475",code:`
  /* FAB 컨테이너 - 오른쪽 하단 고정 */.test-fab-container.svelte-1uta475 {position:fixed;z-index:50;bottom:1rem;right:1rem;}

  /* FAB 버튼 */.test-fab-button.svelte-1uta475 {height:3.5rem;width:3.5rem;border-radius:9999px;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);background-color:rgba(180, 83, 9, 0.7);color:white;transition:all 0.2s ease;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;padding:0;}.test-fab-button.svelte-1uta475:hover {background-color:rgba(146, 64, 14, 0.8);}.test-fab-button.svelte-1uta475:disabled {opacity:0.5;cursor:not-allowed;}.test-fab-button.loading.svelte-1uta475 {
    animation: svelte-1uta475-spin 1s linear infinite;}

  @keyframes svelte-1uta475-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* 드롭다운 메뉴 */.test-fab-menu.svelte-1uta475 {position:absolute;right:0;bottom:4rem;width:14rem;background-color:white;border-radius:0.5rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1);border:1px solid #e5e7eb;overflow:hidden;
    animation: svelte-1uta475-slideUp 0.2s ease-out;}

  @keyframes svelte-1uta475-slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 메뉴 헤더 */.menu-header.svelte-1uta475 {padding:0.75rem 1rem;background-color:#f9fafb;}.menu-title.svelte-1uta475 {font-weight:600;color:#1f2937;}

  /* 메뉴 구분선 */.menu-divider.svelte-1uta475 {border-top:1px solid #e5e7eb;}

  /* UID 표시 섹션 */.uid-section.svelte-1uta475 {padding:0.75rem 1rem;background-color:#f0fdf4;}.uid-label.svelte-1uta475 {font-size:0.75rem;color:#059669;margin-bottom:0.25rem;font-weight:500;}.uid-value.svelte-1uta475 {font-family:monospace;font-size:0.75rem;color:#047857;background-color:#dcfce7;border:1px solid #86efac;border-radius:0.25rem;padding:0.375rem 0.5rem;word-break:break-all;line-height:1.4;}

  /* 메뉴 섹션 */.menu-section.svelte-1uta475 {padding:0.75rem 1rem;}.section-title.svelte-1uta475 {display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;font-size:0.875rem;font-weight:500;color:#374151;}

  /* 테스트 계정 목록 */.account-list.svelte-1uta475 {display:flex;flex-direction:column;gap:0.25rem;}.account-button.svelte-1uta475 {width:100%;padding:0.5rem 0.75rem;border-radius:0.25rem;display:flex;align-items:center;gap:0.5rem;background-color:#f3f4f6;border:none;transition:background-color 0.15s ease;cursor:pointer;}.account-button.svelte-1uta475:hover {background-color:#e5e7eb;}.account-button.svelte-1uta475:disabled {opacity:0.5;cursor:not-allowed;}.account-label.svelte-1uta475 {font-family:monospace;font-weight:700;color:#1f2937;}.account-phone.svelte-1uta475 {font-size:0.875rem;color:#6b7280;}

  /* 메뉴 버튼 */.menu-button.svelte-1uta475 {width:100%;padding:0.75rem 1rem;display:flex;align-items:center;gap:0.5rem;background-color:transparent;border:none;transition:background-color 0.15s ease;cursor:pointer;}.menu-button.svelte-1uta475:hover {background-color:#f9fafb;}

  /* 버전 정보 */.version-info.svelte-1uta475 {padding:0.75rem 1rem;}.version-label.svelte-1uta475 {font-size:0.75rem;color:#6b7280;margin-bottom:0.25rem;}.version-value.svelte-1uta475 {font-family:monospace;font-weight:700;color:#1f2937;background-color:#f1f5f9;border:1px solid #cbd5e1;border-radius:0.25rem;padding:0.25rem 0.5rem;font-size:0.875rem;}

  /* 모달 오버레이 */.modal-overlay.svelte-1uta475 {position:fixed;top:0;right:0;bottom:0;left:0;z-index:50;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;padding:1rem;
    animation: svelte-1uta475-fadeIn 0.2s ease-out;}

  @keyframes svelte-1uta475-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* 모달 컨텐츠 */.modal-content.svelte-1uta475 {background-color:white;border:1px solid #e5e7eb;border-radius:0.5rem;padding:1.5rem;max-width:28rem;width:100%;
    animation: svelte-1uta475-slideIn 0.2s ease-out;}

  @keyframes svelte-1uta475-slideIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }.modal-title.svelte-1uta475 {font-size:1.25rem;font-weight:700;margin-bottom:1rem;color:#1f2937;}

  /* 정보 목록 */.info-list.svelte-1uta475 {display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1.5rem;}.info-item.svelte-1uta475 {display:flex;justify-content:space-between;font-size:0.875rem;}.info-label.svelte-1uta475 {color:#6b7280;}.info-value.svelte-1uta475 {font-family:monospace;color:#1f2937;}.info-value-small.svelte-1uta475 {font-size:0.75rem;}

  /* 모달 닫기 버튼 */.modal-close-button.svelte-1uta475 {width:100%;padding:0.5rem 1rem;border:1px solid #d1d5db;border-radius:0.25rem;background-color:white;transition:background-color 0.15s ease;cursor:pointer;}.modal-close-button.svelte-1uta475:hover {background-color:#f9fafb;}

  /* reCAPTCHA 컨테이너 숨김 */`};function MC(t,e){cn(e,!0),Dn(t,OC);const n=[{label:"A",name:"apple",email:"apple@test.com"},{label:"B",name:"banana",email:"banana@test.com"},{label:"C",name:"cherry",email:"cherry@test.com"},{label:"D",name:"durian",email:"durian@test.com"},{label:"E",name:"elderberry",email:"elderberry@test.com"},{label:"F",name:"fig",email:"fig@test.com"},{label:"G",name:"grape",email:"grape@test.com"},{label:"H",name:"honeydew",email:"honeydew@test.com"}],r="12345a,*";let i=ne(!1),s=ne(!1),o=ne(!1),a=ne(null);const l=Date.now(),c=new Date(l).toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),d="withcenter-test-5";Li(()=>{console.log("TestFab 컴포넌트가 마운트되었습니다.");const v=Pl(Rt,T=>{N(a,T,!0),console.log("Auth 상태 변경:",T?`로그인됨 (UID: ${T.uid})`:"로그아웃됨")});return()=>{v()}});async function h(v){if(!y(o)){N(o,!0),console.log(`${v.name} (${v.label}) 계정으로 로그인을 시도합니다...`);try{let T;try{T=await Oh(Rt,v.email,r),console.log(`${v.name} 계정으로 로그인 성공!`)}catch(A){if(A.code==="auth/user-not-found"||A.code==="auth/invalid-credential")console.log(`${v.name} 계정이 없습니다. 회원가입을 진행합니다...`),T=await Dh(Rt,v.email,r),await Rl(T.user,{displayName:v.name}),console.log(`${v.name} 계정 회원가입 및 로그인 성공!`);else throw A}alert(`${v.name} (${v.label}) 계정으로 로그인되었습니다.`),N(i,!1),window.location.href="/"}catch(T){console.error("로그인 오류:",T);let A="로그인에 실패했습니다.";T.code==="auth/invalid-email"?A="잘못된 이메일 형식입니다.":T.code==="auth/wrong-password"?A="비밀번호가 일치하지 않습니다.":T.code==="auth/too-many-requests"?A="너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.":T.code==="auth/weak-password"?A="비밀번호가 너무 약합니다.":T.code==="auth/email-already-in-use"&&(A="이미 사용 중인 이메일입니다."),alert(A+`
오류 코드: `+T.code)}finally{N(o,!1)}}}function u(){N(i,!y(i))}function f(){N(s,!y(s)),N(i,!1)}function p(v){const T=v.target;!T.closest(".test-fab-menu")&&!T.closest(".test-fab-button")&&N(i,!1)}var g=DC();ja("click",Oa,p);var w=se(g),I=_(w);let S;I.__click=u;var R=_(I);mm(R,{size:24}),m(I);var P=b(I,2);{var M=v=>{var T=xC(),A=b(_(T),4);{var F=oe=>{var ve=PC(),te=se(ve),ue=b(_(te),2),j=_(ue,!0);m(ue),m(te),Et(2),re(()=>L(j,y(a).uid)),x(oe,ve)};Ee(A,oe=>{y(a)&&oe(F)})}var O=b(A,2),z=_(O),Y=_(z);nr(Y,{size:16}),Et(2),m(z);var H=b(z,2);Qr(H,21,()=>n,oe=>oe.label,(oe,ve)=>{var te=NC();te.__click=()=>h(y(ve));var ue=_(te),j=_(ue,!0);m(ue);var ae=b(ue,2),de=_(ae,!0);m(ae),m(te),re(()=>{te.disabled=y(o),L(j,y(ve).label),L(de,y(ve).name)}),x(oe,te)}),m(H),m(O);var Q=b(O,4);Q.__click=f;var ge=_(Q);pm(ge,{size:16}),Et(2),m(Q);var Z=b(Q,4),ee=b(_(Z),2),ce=_(ee,!0);m(ee),m(Z),m(T),re(()=>L(ce,c)),x(v,T)};Ee(P,v=>{y(i)&&v(M)})}m(w);var C=b(w,2);{var E=v=>{var T=LC();T.__click=f;var A=_(T);A.__click=ee=>ee.stopPropagation();var F=b(_(A),2),O=_(F),z=b(_(O),2),Y=_(z,!0);m(z),m(O);var H=b(O,8),Q=b(_(H),2),ge=_(Q,!0);m(Q),m(H),m(F);var Z=b(F,2);Z.__click=f,m(A),m(T),re(()=>{L(Y,"production"),L(ge,d)}),x(v,T)};Ee(C,v=>{y(s)&&v(E)})}re(()=>{S=Di(I,1,"test-fab-button svelte-1uta475",null,S,{loading:y(o)}),I.disabled=y(o)}),x(t,g),un()}mr(["click"]),customElements.define("test-fab",fe(MC,{},[],[],!1));function Cm(t,e){const{subscribe:n,set:r}=Xr({data:e??null,loading:!0,error:null}),i=_e(me,t);return er(i,s=>{const o=s.val();r({data:o!==null?o:e??null,loading:!1,error:null}),console.log(`✅ 실시간 데이터 로드 성공: ${t}`,o!==null?o:e??null)},s=>{console.error(`❌ 실시간 데이터 로드 실패: ${t}`,s),r({data:e??null,loading:!1,error:s})}),{subscribe:n,set:r,update:s=>{throw new Error("직접 업데이트는 지원하지 않습니다. Firebase를 통해 데이터를 변경하세요.")},unsubscribe:()=>vi(i)}}const $C=Cm;async function FC(t,e){try{const n=_e(me,t);return await ks(n,e),{success:!0}}catch(n){return console.error("데이터 쓰기 오류:",n),{success:!1,error:n.message}}}async function UC(t,e){try{const n=_e(me,t);return await Cn(n,e),{success:!0}}catch(n){return console.error("데이터 업데이트 오류:",n),{success:!1,error:n.message}}}async function HC(t){try{const e=_e(me,t);return await Jp(e),{success:!0}}catch(e){return console.error("데이터 삭제 오류:",e),{success:!1,error:e.message}}}async function WC(t,e){try{const n=_e(me,t),r=na(n);return await ks(r,e),{success:!0,key:r.key}}catch(n){return console.error("데이터 추가 오류:",n),{success:!1,error:n.message}}}async function jC(t){try{const e=_e(me,t),n=await Zn(e);return n.exists()?{success:!0,data:n.val()}:{success:!0,data:null}}catch(e){return console.error("데이터 읽기 오류:",e),{success:!1,error:e.message}}}function zC(t){const e=_e(me,`status/${t}`),n=_e(me,".info/connected");return er(n,r=>{r.val()===!0&&(ks(e,{online:!0,lastSeen:Date.now()}),er(_e(me,".info/connected"),i=>{i.val()||Cn(e,{online:!1,lastSeen:Date.now()})}))}),()=>{Cn(e,{online:!1,lastSeen:Date.now()}),vi(n)}}function Tm(t){if(!t)return"error.unknown";const e={"auth/invalid-email":"error.auth.invalidEmail","auth/user-disabled":"error.auth.userDisabled","auth/user-not-found":"error.auth.userNotFound","auth/wrong-password":"error.auth.wrongPassword","auth/email-already-in-use":"error.auth.emailAlreadyInUse","auth/weak-password":"error.auth.weakPassword","auth/operation-not-allowed":"error.auth.operationNotAllowed","auth/too-many-requests":"error.auth.tooManyRequests","auth/invalid-verification-code":"error.auth.invalidVerificationCode","auth/invalid-phone-number":"error.auth.invalidPhoneNumber","auth/missing-verification-code":"error.auth.missingVerificationCode","auth/session-expired":"error.auth.sessionExpired","auth/requires-recent-login":"error.auth.requiresRecentLogin","auth/credential-already-in-use":"error.auth.credentialAlreadyInUse"},n={PERMISSION_DENIED:"error.db.permissionDenied","permission-denied":"error.db.permissionDenied","network-error":"error.db.networkError",offline:"error.offline","authentication-required":"error.db.authenticationRequired",disconnected:"error.offline",unavailable:"error.db.networkError"},r={"storage/unauthorized":"error.storage.unauthorized","storage/bucket-not-found":"error.storage.bucketNotFound","storage/invalid-argument":"error.storage.invalidArgument","storage/object-not-found":"error.storage.objectNotFound","storage/retry-limit-exceeded":"error.storage.retryLimitExceeded","storage/quota-exceeded":"error.storage.quotaExceeded","storage/canceled":"error.storage.canceled"};return e[t]?e[t]:n[t]?n[t]:r[t]?r[t]:t.includes("network")||t.includes("offline")?"error.network":t.toLowerCase().includes("permission")?"error.db.permissionDenied":"error.unknown"}function nn(t,e="unknown"){if(!t)return console.error(`[${e}] 에러 객체가 없습니다.`),{key:"error.unknown",code:null,message:"No error object provided",context:e};const n=t;let r=n.code??null;if(!r&&n.message){const s=n.message.match(/\(([^)]+)\)/);s&&s[1]&&(r=s[1])}return console.error(`[${e}] Firebase 에러:`,{code:r,message:n.message,stack:n.stack,originalError:t}),{key:Tm(r),code:r,message:n.message||"Unknown error",context:e}}function VC(t,e,n,r){const i=nn(t,e),s=r(i.key);return n(s,"error"),i}async function BC(t,e,n,r,i){try{const s=Date.now(),o=`${t}-${s}`,a={uid:e,title:r,content:i,author:n,category:t,order:o,createdAt:s,updatedAt:s,likeCount:0,commentCount:0},l=_e(me,"posts");return{success:!0,postId:(await na(l,a)).key||void 0}}catch(s){const o=nn(s,"createPost");return{success:!1,error:o.key,errorMessage:o.message}}}function qC(t,e=10,n){try{const r=_e(me,"posts"),i=Ns(r,ia("order"),Ps(`${t}-`),Rs(`${t}-`),LE(e));return er(i,s=>{if(s.exists()){const o=[];s.forEach(a=>{o.push({postId:a.key,...a.val()})}),o.reverse(),n(o)}else n([])}),()=>{vi(r)}}catch(r){return console.error("게시글 조회 실패:",r),n([]),()=>{}}}async function GC(t,e){try{const n=_e(me,`posts/${t}`),r=await Zn(n);if(!r.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const i=r.val();if(i.commentCount&&i.commentCount>0)return{success:!1,error:"댓글이달려있어수정불가",errorMessage:"Cannot edit post with comments"};const s={...e,updatedAt:Date.now()};return await Cn(n,s),{success:!0}}catch(n){const r=nn(n,"updatePost");return{success:!1,error:r.key,errorMessage:r.message}}}async function KC(t){try{const e=_e(me,`posts/${t}`),n=await Zn(e);if(!n.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const r=n.val();return r.commentCount&&r.commentCount>0?{success:!1,error:"댓글이달려있어삭제불가",errorMessage:"Cannot delete post with comments"}:(await Jp(e),{success:!0})}catch(e){const n=nn(e,"deletePost");return{success:!1,error:n.key,errorMessage:n.message}}}const YC=["community","qna","news","market"];function Jc(t){let e=t;const n=t.lastIndexOf("-");if(n!==-1&&n<t.length-1){const r=t.substring(n+1);/^\d/.test(r)&&(e=r)}return e.split(",").map(r=>parseInt(r,10))}function Sm(t,e){const n=e.map((r,i)=>i===0?String(r).padStart(5,"0"):i===1?String(r).padStart(4,"0"):String(r).padStart(3,"0")).join(",");return`${t}-${n}`}function QC(){return Array(12).fill(0)}async function JC(t){const{postId:e,userId:n,content:r}=t;try{const i=Date.now(),s=_e(me,"comments"),o=Ns(s,ia("order"),Ps(`${e}-`),Rs(`${e}-z`)),a=await Zn(o);let l=0;a.exists()&&a.forEach(w=>{const I=w.val();if(I.depth===1&&I.order){const R=Jc(I.order)[0];R!==void 0&&R>l&&(l=R)}});const c=l+1,d=QC();d[0]=c;const h=Sm(e,d),u={postId:e,uid:n,content:r,depth:1,order:h,parentId:null,createdAt:i,updatedAt:i},p=na(s).key;if(!p)throw new Error("Failed to generate comment ID");const g={};return g[`comments/${p}`]=u,await Cn(_e(me),g),{success:!0,commentId:p}}catch(i){const s=nn(i,"createTopLevelComment");return{success:!1,error:s.key,errorMessage:s.message}}}async function XC(t){const{parentCommentId:e,userId:n,content:r}=t;try{const i=_e(me,`comments/${e}`),s=await Zn(i);if(!s.exists())return{success:!1,error:"error.comment.parentNotFound",errorMessage:"Parent comment not found"};const o=s.val(),a=o.depth||1,l=o.order||"",c=o.postId,d=a+1;if(d>12)return{success:!1,error:"error.comment.maxDepthExceeded",errorMessage:"Maximum comment depth exceeded (12)"};const h=Jc(l),u=_e(me,"comments"),f=Ns(u,ia("order"),Ps(`${c}-`),Rs(`${c}-z`)),p=await Zn(f);let g=0;p.exists()&&p.forEach(v=>{const T=v.val();if(T.parentId===e&&T.order){const F=Jc(T.order)[d-1];F!==void 0&&F>g&&(g=F)}});const w=g+1,I=[...h];I[d-1]=w;const S=Sm(c,I),R=Date.now(),P={postId:c,uid:n,content:r,depth:d,order:S,parentId:e,createdAt:R,updatedAt:R},C=na(u).key;if(!C)throw new Error("Failed to generate comment ID");const E={};return E[`comments/${C}`]=P,await Cn(_e(me),E),{success:!0,commentId:C}}catch(i){const s=nn(i,"createChildComment");return{success:!1,error:s.key,errorMessage:s.message}}}function ZC(t,e){try{const n=_e(me,"comments"),r=Ns(n,ia("order"),Ps(`${t}-`),Rs(`${t}-z`));return er(r,i=>{if(i.exists()){const s=[];i.forEach(o=>{s.push({commentId:o.key,...o.val()})}),e(s)}else e([])}),()=>{vi(n)}}catch(n){return console.error("댓글 조회 실패:",n),e([]),()=>{}}}async function km(t,e,n){try{const r=e.startsWith("-")?e.substring(1):e,i={};return i[`likes/${t}-${r}-${n}`]=1,await Cn(_e(me),i),{success:!0}}catch(r){const i=nn(r,"addLike");return{success:!1,error:i.key,errorMessage:i.message}}}async function Am(t,e,n){try{const r=e.startsWith("-")?e.substring(1):e,i={};return i[`likes/${t}-${r}-${n}`]=null,await Cn(_e(me),i),{success:!0}}catch(r){const i=nn(r,"removeLike");return{success:!1,error:i.key,errorMessage:i.message}}}async function Rm(t,e,n){try{const r=e.startsWith("-")?e.substring(1):e,i=_e(me,`likes/${t}-${r}-${n}`);return(await Zn(i)).exists()}catch(r){return console.error("좋아요 상태 확인 실패:",r),!1}}function eT(t,e,n,r){try{const i=e.startsWith("-")?e.substring(1):e,s=_e(me,`likes/${t}-${i}-${n}`);return er(s,o=>{r(o.exists())}),()=>{vi(s)}}catch(i){return console.error("좋아요 상태 구독 실패:",i),r(!1),()=>{}}}async function Pm(t,e){try{const n=e.startsWith("-")?e.substring(1):e,r=_e(me,"likes"),i=Ns(r,ME(),Ps(`${t}-${n}-`),Rs(`${t}-${n}-`)),s=await Zn(i),o=[];return s.exists()&&s.forEach(a=>{const l=a.key;if(l){const c=l.substring(`${t}-${n}-`.length);o.push({uid:c,value:a.val()})}}),o}catch(n){return console.error("좋아요 목록 조회 실패:",n),[]}}async function tT(t,e,n){try{const r=await Rm(t,e,n);let i;return r?i=await Am(t,e,n):i=await km(t,e,n),i.success?{success:!0,isLiked:!r}:{success:!1,isLiked:r,error:i.error,errorMessage:i.errorMessage}}catch(r){const i=nn(r,"toggleLike");return{success:!1,isLiked:!1,error:i.key,errorMessage:i.message}}}async function nT(t){return Pm("post",t)}const rT=["M","F"];console.log("SNS Web Components 로드됨 ✅"),B.POST_CATEGORIES=YC,B.USER_GENDERS=rT,B.addLike=km,B.auth=Rt,B.checkLikeStatus=Rm,B.createChildComment=XC,B.createPost=BC,B.createRealtimeStore=Cm,B.createTopLevelComment=JC,B.database=me,B.deleteData=HC,B.deletePost=KC,B.getLikes=Pm,B.getPostLikes=nT,B.handleFirebaseError=nn,B.listenToComments=ZC,B.listenToLikeStatus=eT,B.listenToPosts=qC,B.loading=vm,B.logAndShowError=VC,B.mapFirebaseErrorCode=Tm,B.pushData=WC,B.readData=jC,B.removeLike=Am,B.rtdb=$C,B.setupPresence=zC,B.signIn=GI,B.signOut=bm,B.signUp=KI,B.storage=EI,B.toggleLike=tT,B.updateData=UC,B.updatePost=GC,B.user=la,B.writeData=FC,Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})}));
