(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const fd=!1;var vl=Array.isArray,em=Array.prototype.indexOf,gl=Array.from,Gs=Object.keys,ns=Object.defineProperty,On=Object.getOwnPropertyDescriptor,pd=Object.getOwnPropertyDescriptors,tm=Object.prototype,nm=Array.prototype,_l=Object.getPrototypeOf,Dc=Object.isExtensible;function Pi(n){return typeof n=="function"}const ir=()=>{};function rm(n){return n()}function Ks(n){for(var e=0;e<n.length;e++)n[e]()}function md(){var n,e,t=new Promise((r,i)=>{n=r,e=i});return{promise:t,resolve:n,reject:e}}function im(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const ft=2,bl=4,Ro=8,Hn=16,Wn=32,mr=64,Po=128,dt=1024,Tt=2048,Vn=4096,Ot=8192,Dn=16384,wl=32768,Pr=65536,Mc=1<<17,sm=1<<18,qr=1<<19,vd=1<<20,Vt=256,Ys=512,Qs=32768,Ra=1<<21,yl=1<<22,Sr=1<<23,En=Symbol("$state"),El=Symbol("legacy props"),om=Symbol(""),Zr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},am=1,Cl=3,wi=8;function gd(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function lm(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function cm(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function um(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function dm(n){throw new Error("https://svelte.dev/e/effect_orphan")}function hm(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fm(){throw new Error("https://svelte.dev/e/hydration_failed")}function pm(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function mm(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function vm(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function gm(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function _m(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const No=1,Lo=2,_d=4,bm=8,wm=16,ym=1,Em=2,bd=4,Cm=8,Im=16,Tm=1,km=2,wd="[",Oo="[!",Il="]",ci={},rt=Symbol(),Sm="http://www.w3.org/1999/xhtml",xm="http://www.w3.org/2000/svg",Am="@attach";function Do(n){console.warn("https://svelte.dev/e/hydration_mismatch")}function Rm(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Pm(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let H=!1;function Nt(n){H=n}let ue;function st(n){if(n===null)throw Do(),ci;return ue=n}function Nr(){return st(Tn(ue))}function f(n){if(H){if(Tn(ue)!==null)throw Do(),ci;ue=n}}function bn(n=1){if(H){for(var e=n,t=ue;e--;)t=Tn(t);ue=t}}function Js(n=!0){for(var e=0,t=ue;;){if(t.nodeType===wi){var r=t.data;if(r===Il){if(e===0)return t;e-=1}else(r===wd||r===Oo)&&(e+=1)}var i=Tn(t);n&&t.remove(),t=i}}function yd(n){if(!n||n.nodeType!==wi)throw Do(),ci;return n.data}function Ed(n){return n===this.v}function Cd(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Id(n){return!Cd(n,this.v)}let yi=!1,Nm=!1;function Lm(){yi=!0}let Le=null;function ui(n){Le=n}function Oe(n,e=!1,t){Le={p:Le,i:!1,c:null,e:null,s:n,x:null,l:yi&&!e?{s:null,u:null,$:[]}:null}}function De(n){var e=Le,t=e.e;if(t!==null){e.e=null;for(var r of t)jd(r)}return n!==void 0&&(e.x=n),e.i=!0,Le=e.p,n??{}}function _s(){return!yi||Le!==null&&Le.l===null}let Tr=[];function Td(){var n=Tr;Tr=[],Ks(n)}function vr(n){if(Tr.length===0&&!Hi){var e=Tr;queueMicrotask(()=>{e===Tr&&Td()})}Tr.push(n)}function Om(){for(;Tr.length>0;)Td()}function kd(n){var e=X;if(e===null)return ce.f|=Sr,n;if((e.f&wl)===0){if((e.f&Po)===0)throw n;e.b.error(n)}else di(n,e)}function di(n,e){for(;e!==null;){if((e.f&Po)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const Ms=new Set;let Ce=null,ji=null,Xt=null,yn=[],Mo=null,Pa=!1,Hi=!1;class rn{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#n=0;#i=null;#s=[];#l=[];skipped_effects=new Set;is_fork=!1;process(e){yn=[],ji=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#o(r,t);this.is_fork||this.#c(),this.#n>0||this.is_fork?(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects)):(ji=this,Ce=null,$c(t.render_effects),$c(t.effects),ji=null,this.#i?.resolve()),Xt=null}#o(e,t){e.f^=dt;for(var r=e.first;r!==null;){var i=r.f,s=(i&(Wn|mr))!==0,o=s&&(i&dt)!==0,a=o||(i&Ot)!==0||this.skipped_effects.has(r);if((r.f&Po)!==0&&r.b?.is_pending()&&(t={parent:t,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){s?r.f^=dt:(i&bl)!==0?t.effects.push(r):Es(r)&&((r.f&Hn)!==0&&t.block_effects.push(r),is(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects),t=t.parent),r=c.next,c=c.parent}}#a(e){for(const t of e)((t.f&Tt)!==0?this.#s:this.#l).push(t),ht(t,dt)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),Xt?.set(e,e.v)}activate(){Ce=this}deactivate(){Ce=null,Xt=null}flush(){if(this.activate(),yn.length>0){if(Sd(),Ce!==null&&Ce!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#n===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#u()}#u(){if(Ms.size>1){this.previous.clear();var e=Xt,t=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of Ms){if(i===this){t=!1;continue}const s=[];for(const[a,l]of this.current){if(i.current.has(a))if(t&&l!==i.current.get(a))i.current.set(a,l);else continue;s.push(a)}if(s.length===0)continue;const o=[...i.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of s)xd(c,o,a,l);if(yn.length>0){Ce=i,i.apply();for(const c of yn)i.#o(c,r);yn=[],i.deactivate()}}}Ce=null,Xt=e}this.committed=!0,Ms.delete(this)}increment(e){this.#r+=1,e&&(this.#n+=1)}decrement(e){this.#r-=1,e&&(this.#n-=1),this.revive()}revive(){for(const e of this.#s)ht(e,Tt),Lr(e);for(const e of this.#l)ht(e,Vn),Lr(e);this.#s=[],this.#l=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#i??=md()).promise}static ensure(){if(Ce===null){const e=Ce=new rn;Ms.add(Ce),Hi||rn.enqueue(()=>{Ce===e&&e.flush()})}return Ce}static enqueue(e){vr(e)}apply(){}}function Pt(n){var e=Hi;Hi=!0;try{for(var t;;){if(Om(),yn.length===0&&(Ce?.flush(),yn.length===0))return Mo=null,t;Sd()}}finally{Hi=e}}function Sd(){var n=ri;Pa=!0;try{var e=0;for(jc(!0);yn.length>0;){var t=rn.ensure();if(e++>1e3){var r,i;Dm()}t.process(yn),sr.clear()}}finally{Pa=!1,jc(n),Mo=null}}function Dm(){try{hm()}catch(n){di(n,Mo)}}let Rn=null;function $c(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(Dn|Ot))===0&&Es(r)&&(Rn=new Set,is(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Vd(r):r.fn=null),Rn?.size>0)){sr.clear();for(const i of Rn){if((i.f&(Dn|Ot))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)Rn.has(o)&&(Rn.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(Dn|Ot))===0&&is(l)}}Rn.clear()}}Rn=null}}function xd(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const i of n.reactions){const s=i.f;(s&ft)!==0?xd(i,e,t,r):(s&(yl|Hn))!==0&&(s&Tt)===0&&Ad(i,e,r)&&(ht(i,Tt),Lr(i))}}function Ad(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const i of n.deps){if(e.includes(i))return!0;if((i.f&ft)!==0&&Ad(i,e,t))return t.set(i,!0),!0}return t.set(n,!1),!1}function Lr(n){for(var e=Mo=n;e.parent!==null;){e=e.parent;var t=e.f;if(Pa&&e===X&&(t&Hn)!==0)return;if((t&(mr|Wn))!==0){if((t&dt)===0)return;e.f^=dt}}yn.push(e)}function Mm(n){let e=0,t=dr(0),r;return()=>{Km()&&(g(t),Fo(()=>(e===0&&(r=Cn(()=>n(()=>Wi(t)))),e+=1,()=>{vr(()=>{e-=1,e===0&&(r?.(),r=void 0,Wi(t))})})))}}var $m=Pr|qr|Po;function Fm(n,e,t){new zm(n,e,t)}class zm{parent;#t=!1;#e;#r=H?ue:null;#n;#i;#s;#l=null;#o=null;#a=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#b=Mm(()=>(this.#h=dr(this.#f),()=>{this.#h=null}));constructor(e,t,r){this.#e=e,this.#n=t,this.#i=r,this.parent=X.b,this.#t=!!this.#n.pending,this.#s=Ei(()=>{if(X.b=this,H){const s=this.#r;Nr(),s.nodeType===wi&&s.data===Oo?this.#y():this.#w()}else{var i=this.#g();try{this.#l=yt(()=>r(i))}catch(s){this.error(s)}this.#d>0?this.#v():this.#t=!1}return()=>{this.#u?.remove()}},$m),H&&(this.#e=ue)}#w(){try{this.#l=yt(()=>this.#i(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#n.pending;e&&(this.#o=yt(()=>e(this.#e)),rn.enqueue(()=>{var t=this.#g();this.#l=this.#m(()=>(rn.ensure(),yt(()=>this.#i(t)))),this.#d>0?this.#v():(ni(this.#o,()=>{this.#o=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=Bt(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#m(e){var t=X,r=ce,i=Le;Gt(this.#s),Et(this.#s),ui(this.#s.ctx);try{return e()}catch(s){return kd(s),null}finally{Gt(t),Et(r),ui(i)}}#v(){const e=this.#n.pending;this.#l!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Kd(this.#l,this.#c)),this.#o===null&&(this.#o=yt(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#o&&ni(this.#o,()=>{this.#o=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&hi(this.#h,this.#f)}get_effect_pending(){return this.#b(),g(this.#h)}error(e){var t=this.#n.onerror;let r=this.#n.failed;if(this.#p||!t&&!r)throw e;this.#l&&(We(this.#l),this.#l=null),this.#o&&(We(this.#o),this.#o=null),this.#a&&(We(this.#a),this.#a=null),H&&(st(this.#r),bn(),st(Js()));var i=!1,s=!1;const o=()=>{if(i){Pm();return}i=!0,s&&_m(),rn.ensure(),this.#f=0,this.#a!==null&&ni(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#l=this.#m(()=>(this.#p=!1,yt(()=>this.#i(this.#e)))),this.#d>0?this.#v():this.#t=!1};var a=ce;try{Et(null),s=!0,t?.(e,o),s=!1}catch(l){di(l,this.#s&&this.#s.parent)}finally{Et(a)}r&&vr(()=>{this.#a=this.#m(()=>{rn.ensure(),this.#p=!0;try{return yt(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return di(l,this.#s.parent),null}finally{this.#p=!1}})})}}function Rd(n,e,t,r){const i=_s()?bs:Tl;if(t.length===0&&n.length===0){r(e.map(i));return}var s=Ce,o=X,a=Um();function l(){Promise.all(t.map(c=>qm(c))).then(c=>{a();try{r([...e.map(i),...c])}catch(d){(o.f&Dn)===0&&di(d,o)}s?.deactivate(),Xs()}).catch(c=>{di(c,o)})}n.length>0?Promise.all(n).then(()=>{a();try{return l()}finally{s?.deactivate(),Xs()}}):l()}function Um(){var n=X,e=ce,t=Le,r=Ce;return function(s=!0){Gt(n),Et(e),ui(t),s&&r?.activate()}}function Xs(){Gt(null),Et(null),ui(null)}function bs(n){var e=ft|Tt,t=ce!==null&&(ce.f&ft)!==0?ce:null;return X===null||t!==null&&(t.f&Vt)!==0?e|=Vt:X.f|=qr,{ctx:Le,deps:null,effects:null,equals:Ed,f:e,fn:n,reactions:null,rv:0,v:rt,wv:0,parent:t??X,ac:null}}function qm(n,e){let t=X;t===null&&lm();var r=t.b,i=void 0,s=dr(rt),o=!ce,a=new Map;return Xm(()=>{var l=md();i=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{c===Ce&&c.committed&&c.deactivate(),Xs()})}catch(u){l.reject(u),Xs()}var c=Ce;if(o){var d=!r.is_pending();r.update_pending_count(1),c.increment(d),a.get(c)?.reject(Zr),a.delete(c),a.set(c,l)}const h=(u,m=void 0)=>{if(c.activate(),m)m!==Zr&&(s.f|=Sr,hi(s,m));else{(s.f&Sr)!==0&&(s.f^=Sr),hi(s,u);for(const[v,b]of a){if(a.delete(v),v===c)break;b.reject(Zr)}}o&&(r.update_pending_count(-1),c.decrement(d))};l.promise.then(h,u=>h(null,u||"unknown"))}),ws(()=>{for(const l of a.values())l.reject(Zr)}),new Promise(l=>{function c(d){function h(){d===i?l(s):c(i)}d.then(h,h)}c(i)})}function Na(n){const e=bs(n);return Yd(e),e}function Tl(n){const e=bs(n);return e.equals=Id,e}function Pd(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)We(e[t])}}function jm(n){for(var e=n.parent;e!==null;){if((e.f&ft)===0)return e;e=e.parent}return null}function kl(n){var e,t=X;Gt(jm(n));try{n.f&=~Qs,Pd(n),e=Zd(n)}finally{Gt(t)}return e}function Nd(n){var e=kl(n);if(n.equals(e)||(n.v=e,n.wv=Jd()),!jr)if(Xt!==null)Xt.set(n,n.v);else{var t=(er||(n.f&Vt)!==0)&&n.deps!==null?Vn:dt;ht(n,t)}}let La=new Set;const sr=new Map;let Ld=!1;function dr(n,e){var t={f:0,v:n,reactions:null,equals:Ed,rv:0,wv:0};return t}function te(n,e){const t=dr(n);return Yd(t),t}function Sl(n,e=!1,t=!0){const r=dr(n);return e||(r.equals=Id),yi&&t&&Le!==null&&Le.l!==null&&(Le.l.s??=[]).push(r),r}function A(n,e,t=!1){ce!==null&&(!Zt||(ce.f&Mc)!==0)&&_s()&&(ce.f&(ft|Hn|yl|Mc))!==0&&!Mn?.includes(n)&&gm();let r=t?Ht(e):e;return hi(n,r)}function hi(n,e){if(!n.equals(e)){var t=n.v;jr?sr.set(n,e):sr.set(n,t),n.v=e;var r=rn.ensure();r.capture(n,t),(n.f&ft)!==0&&((n.f&Tt)!==0&&kl(n),ht(n,(n.f&Vt)===0?dt:Vn)),n.wv=Jd(),Od(n,Tt),_s()&&X!==null&&(X.f&dt)!==0&&(X.f&(Wn|mr))===0&&(qt===null?tv([n]):qt.push(n)),!r.is_fork&&La.size>0&&!Ld&&Hm()}return e}function Hm(){Ld=!1;const n=Array.from(La);for(const e of n)(e.f&dt)!==0&&ht(e,Vn),Es(e)&&is(e);La.clear()}function Fc(n,e=1){var t=g(n),r=e===1?t++:t--;return A(n,t),r}function Wi(n){A(n,n.v+1)}function Od(n,e){var t=n.reactions;if(t!==null)for(var r=_s(),i=t.length,s=0;s<i;s++){var o=t[s],a=o.f;if(!(!r&&o===X)){var l=(a&Tt)===0;l&&ht(o,e),(a&ft)!==0?(a&Qs)===0&&(o.f|=Qs,Od(o,Vn)):l&&((a&Hn)!==0&&Rn!==null&&Rn.add(o),Lr(o))}}}function Ht(n){if(typeof n!="object"||n===null||En in n)return n;const e=_l(n);if(e!==tm&&e!==nm)return n;var t=new Map,r=vl(n),i=te(0),s=xr,o=a=>{if(xr===s)return a();var l=ce,c=xr;Et(null),Wc(s);var d=a();return Et(l),Wc(c),d};return r&&t.set("length",te(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&mm();var d=t.get(l);return d===void 0?d=o(()=>{var h=te(c.value);return t.set(l,h),h}):A(d,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const d=o(()=>te(rt));t.set(l,d),Wi(i)}}else A(c,rt),Wi(i);return!0},get(a,l,c){if(l===En)return n;var d=t.get(l),h=l in a;if(d===void 0&&(!h||On(a,l)?.writable)&&(d=o(()=>{var m=Ht(h?a[l]:rt),v=te(m);return v}),t.set(l,d)),d!==void 0){var u=g(d);return u===rt?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var d=t.get(l);d&&(c.value=g(d))}else if(c===void 0){var h=t.get(l),u=h?.v;if(h!==void 0&&u!==rt)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===En)return!0;var c=t.get(l),d=c!==void 0&&c.v!==rt||Reflect.has(a,l);if(c!==void 0||X!==null&&(!d||On(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=d?Ht(a[l]):rt,m=te(u);return m}),t.set(l,c));var h=g(c);if(h===rt)return!1}return d},set(a,l,c,d){var h=t.get(l),u=l in a;if(r&&l==="length")for(var m=c;m<h.v;m+=1){var v=t.get(m+"");v!==void 0?A(v,rt):m in a&&(v=o(()=>te(rt)),t.set(m+"",v))}if(h===void 0)(!u||On(a,l)?.writable)&&(h=o(()=>te(void 0)),A(h,Ht(c)),t.set(l,h));else{u=h.v!==rt;var b=o(()=>Ht(c));A(h,b)}var C=Reflect.getOwnPropertyDescriptor(a,l);if(C?.set&&C.set.call(d,c),!u){if(r&&typeof l=="string"){var S=t.get("length"),k=Number(l);Number.isInteger(k)&&k>=S.v&&A(S,k+1)}Wi(i)}return!0},ownKeys(a){g(i);var l=Reflect.ownKeys(a).filter(h=>{var u=t.get(h);return u===void 0||u.v!==rt});for(var[c,d]of t)d.v!==rt&&!(c in a)&&l.push(c);return l},setPrototypeOf(){vm()}})}function zc(n){try{if(n!==null&&typeof n=="object"&&En in n)return n[En]}catch{}return n}function Wm(n,e){return Object.is(zc(n),zc(e))}var Uc,Dd,Md,$d;function Oa(){if(Uc===void 0){Uc=window,Dd=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Md=On(e,"firstChild").get,$d=On(e,"nextSibling").get,Dc(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Dc(t)&&(t.__t=void 0)}}function Bt(n=""){return document.createTextNode(n)}function ln(n){return Md.call(n)}function Tn(n){return $d.call(n)}function p(n,e){if(!H)return ln(n);var t=ln(ue);if(t===null)t=ue.appendChild(Bt());else if(e&&t.nodeType!==Cl){var r=Bt();return t?.before(r),st(r),r}return st(t),t}function ee(n,e=!1){if(!H){var t=ln(n);return t instanceof Comment&&t.data===""?Tn(t):t}if(e&&ue?.nodeType!==Cl){var r=Bt();return ue?.before(r),st(r),r}return ue}function _(n,e=1,t=!1){let r=H?ue:n;for(var i;e--;)i=r,r=Tn(r);if(!H)return r;if(t&&r?.nodeType!==Cl){var s=Bt();return r===null?i?.after(s):r.before(s),st(s),s}return st(r),r}function xl(n){n.textContent=""}function Fd(){return!1}function Vm(n,e){if(e){const t=document.body;n.autofocus=!0,vr(()=>{document.activeElement===t&&n.focus()})}}function Bm(n){H&&ln(n)!==null&&xl(n)}let qc=!1;function zd(){qc||(qc=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function $o(n){var e=ce,t=X;Et(null),Gt(null);try{return n()}finally{Et(e),Gt(t)}}function Ud(n,e,t,r=t){n.addEventListener(e,()=>$o(t));const i=n.__on_r;i?n.__on_r=()=>{i(),r(!0)}:n.__on_r=()=>r(!0),zd()}function qd(n){X===null&&ce===null&&dm(),ce!==null&&(ce.f&Vt)!==0&&X===null&&um(),jr&&cm()}function Gm(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function un(n,e,t,r=!0){var i=X;i!==null&&(i.f&Ot)!==0&&(n|=Ot);var s={ctx:Le,deps:null,nodes_start:null,nodes_end:null,f:n|Tt,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{is(s),s.f|=wl}catch(l){throw We(s),l}else e!==null&&Lr(s);if(r){var o=s;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&qr)===0&&(o=o.first,(n&Hn)!==0&&(n&Pr)!==0&&o!==null&&(o.f|=Pr)),o!==null&&(o.parent=i,i!==null&&Gm(o,i),ce!==null&&(ce.f&ft)!==0&&(n&mr)===0)){var a=ce;(a.effects??=[]).push(o)}}return s}function Km(){return ce!==null&&!Zt}function ws(n){const e=un(Ro,null,!1);return ht(e,dt),e.teardown=n,e}function Zs(n){qd();var e=X.f,t=!ce&&(e&Wn)!==0&&(e&wl)===0;if(t){var r=Le;(r.e??=[]).push(n)}else return jd(n)}function jd(n){return un(bl|vd,n,!1)}function Ym(n){return qd(),un(Ro|vd,n,!0)}function Qm(n){rn.ensure();const e=un(mr|qr,n,!0);return()=>{We(e)}}function Jm(n){rn.ensure();const e=un(mr|qr,n,!0);return(t={})=>new Promise(r=>{t.outro?ni(e,()=>{We(e),r(void 0)}):(We(e),r(void 0))})}function ys(n){return un(bl,n,!1)}function Xm(n){return un(yl|qr,n,!0)}function Fo(n,e=0){return un(Ro|e,n,!0)}function G(n,e=[],t=[],r=[]){Rd(r,e,t,i=>{un(Ro,()=>n(...i.map(g)),!0)})}function Ei(n,e=0){var t=un(Hn|e,n,!0);return t}function yt(n,e=!0){return un(Wn|qr,n,!0,e)}function Hd(n){var e=n.teardown;if(e!==null){const t=jr,r=ce;Hc(!0),Et(null);try{e.call(null)}finally{Hc(t),Et(r)}}}function Wd(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const i=t.ac;i!==null&&$o(()=>{i.abort(Zr)});var r=t.next;(t.f&mr)!==0?t.parent=null:We(t,e),t=r}}function Zm(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Wn)===0&&We(e),e=t}}function We(n,e=!0){var t=!1;(e||(n.f&sm)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(ev(n.nodes_start,n.nodes_end),t=!0),Wd(n,e&&!t),eo(n,0),ht(n,Dn);var r=n.transitions;if(r!==null)for(const s of r)s.stop();Hd(n);var i=n.parent;i!==null&&i.first!==null&&Vd(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function ev(n,e){for(;n!==null;){var t=n===e?null:Tn(n);n.remove(),n=t}}function Vd(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function ni(n,e,t=!0){var r=[];Al(n,r,!0),Bd(r,()=>{t&&We(n),e&&e()})}function Bd(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var i of n)i.out(r)}else e()}function Al(n,e,t){if((n.f&Ot)===0){if(n.f^=Ot,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var i=r.next,s=(r.f&Pr)!==0||(r.f&Wn)!==0&&(n.f&Hn)!==0;Al(r,e,s?t:!1),r=i}}}function Rl(n){Gd(n,!0)}function Gd(n,e){if((n.f&Ot)!==0){n.f^=Ot,(n.f&dt)===0&&(ht(n,Tt),Lr(n));for(var t=n.first;t!==null;){var r=t.next,i=(t.f&Pr)!==0||(t.f&Wn)!==0;Gd(t,i?e:!1),t=r}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}function Kd(n,e){for(var t=n.nodes_start,r=n.nodes_end;t!==null;){var i=t===r?null:Tn(t);e.append(t),t=i}}let ri=!1;function jc(n){ri=n}let jr=!1;function Hc(n){jr=n}let ce=null,Zt=!1;function Et(n){ce=n}let X=null;function Gt(n){X=n}let Mn=null;function Yd(n){ce!==null&&(Mn===null?Mn=[n]:Mn.push(n))}let gt=null,Rt=0,qt=null;function tv(n){qt=n}let Qd=1,rs=0,xr=rs;function Wc(n){xr=n}let er=!1;function Jd(){return++Qd}function Es(n){var e=n.f;if((e&Tt)!==0)return!0;if((e&Vn)!==0){var t=n.deps,r=(e&Vt)!==0;if(e&ft&&(n.f&=~Qs),t!==null){var i,s,o=(e&Ys)!==0,a=r&&X!==null&&!er,l=t.length;if((o||a)&&(X===null||(X.f&Dn)===0)){var c=n,d=c.parent;for(i=0;i<l;i++)s=t[i],(o||!s?.reactions?.includes(c))&&(s.reactions??=[]).push(c);o&&(c.f^=Ys),a&&d!==null&&(d.f&Vt)===0&&(c.f^=Vt)}for(i=0;i<l;i++)if(s=t[i],Es(s)&&Nd(s),s.wv>n.wv)return!0}(!r||X!==null&&!er)&&ht(n,dt)}return!1}function Xd(n,e,t=!0){var r=n.reactions;if(r!==null&&!Mn?.includes(n))for(var i=0;i<r.length;i++){var s=r[i];(s.f&ft)!==0?Xd(s,e,!1):e===s&&(t?ht(s,Tt):(s.f&dt)!==0&&ht(s,Vn),Lr(s))}}function Zd(n){var e=gt,t=Rt,r=qt,i=ce,s=er,o=Mn,a=Le,l=Zt,c=xr,d=n.f;gt=null,Rt=0,qt=null,er=(d&Vt)!==0&&(Zt||!ri||ce===null),ce=(d&(Wn|mr))===0?n:null,Mn=null,ui(n.ctx),Zt=!1,xr=++rs,n.ac!==null&&($o(()=>{n.ac.abort(Zr)}),n.ac=null);try{n.f|=Ra;var h=n.fn,u=h(),m=n.deps;if(gt!==null){var v;if(eo(n,Rt),m!==null&&Rt>0)for(m.length=Rt+gt.length,v=0;v<gt.length;v++)m[Rt+v]=gt[v];else n.deps=m=gt;if(!er||(d&ft)!==0&&n.reactions!==null)for(v=Rt;v<m.length;v++)(m[v].reactions??=[]).push(n)}else m!==null&&Rt<m.length&&(eo(n,Rt),m.length=Rt);if(_s()&&qt!==null&&!Zt&&m!==null&&(n.f&(ft|Vn|Tt))===0)for(v=0;v<qt.length;v++)Xd(qt[v],n);return i!==null&&i!==n&&(rs++,qt!==null&&(r===null?r=qt:r.push(...qt))),(n.f&Sr)!==0&&(n.f^=Sr),u}catch(b){return kd(b)}finally{n.f^=Ra,gt=e,Rt=t,qt=r,ce=i,er=s,Mn=o,ui(a),Zt=l,xr=c}}function nv(n,e){let t=e.reactions;if(t!==null){var r=em.call(t,n);if(r!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(e.f&ft)!==0&&(gt===null||!gt.includes(e))&&(ht(e,Vn),(e.f&(Vt|Ys))===0&&(e.f^=Ys),Pd(e),eo(e,0))}function eo(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)nv(n,t[r])}function is(n){var e=n.f;if((e&Dn)===0){ht(n,dt);var t=X,r=ri;X=n,ri=!0;try{(e&Hn)!==0?Zm(n):Wd(n),Hd(n);var i=Zd(n);n.teardown=typeof i=="function"?i:null,n.wv=Qd;var s;fd&&Nm&&(n.f&Tt)!==0&&n.deps}finally{ri=r,X=t}}}async function rv(){await Promise.resolve(),Pt()}function g(n){var e=n.f,t=(e&ft)!==0;if(ce!==null&&!Zt){var r=X!==null&&(X.f&Dn)!==0;if(!r&&!Mn?.includes(n)){var i=ce.deps;if((ce.f&Ra)!==0)n.rv<rs&&(n.rv=rs,gt===null&&i!==null&&i[Rt]===n?Rt++:gt===null?gt=[n]:(!er||!gt.includes(n))&&gt.push(n));else{(ce.deps??=[]).push(n);var s=n.reactions;s===null?n.reactions=[ce]:s.includes(ce)||s.push(ce)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,a=o.parent;a!==null&&(a.f&Vt)===0&&(o.f^=Vt)}if(jr){if(sr.has(n))return sr.get(n);if(t){o=n;var l=o.v;return((o.f&dt)===0&&o.reactions!==null||eh(o))&&(l=kl(o)),sr.set(o,l),l}}else if(t){if(o=n,Xt?.has(o))return Xt.get(o);Es(o)&&Nd(o)}if(Xt?.has(n))return Xt.get(n);if((n.f&Sr)!==0)throw n.v;return n.v}function eh(n){if(n.v===rt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(sr.has(e)||(e.f&ft)!==0&&eh(e))return!0;return!1}function Cn(n){var e=Zt;try{return Zt=!0,n()}finally{Zt=e}}const iv=-7169;function ht(n,e){n.f=n.f&iv|e}function Xr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(En in n)Da(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&En in t&&Da(t)}}}function Da(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{Da(n[r],e)}catch{}const t=_l(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=pd(t);for(let i in r){const s=r[i].get;if(s)try{s.call(n)}catch{}}}}}function sv(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const ov=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function av(n){return ov.includes(n)}const lv={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function cv(n){return n=n.toLowerCase(),lv[n]??n}const uv=["touchstart","touchmove"];function dv(n){return uv.includes(n)}const hv=["textarea","script","style","title"];function fv(n){return hv.includes(n)}const th=new Set,Ma=new Set;function nh(n,e,t,r={}){function i(s){if(r.capture||Fi.call(e,s),!s.cancelBubble)return $o(()=>t?.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?vr(()=>{e.addEventListener(n,i,r)}):e.addEventListener(n,i,r),i}function to(n,e,t,r,i){var s={capture:r,passive:i},o=nh(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ws(()=>{e.removeEventListener(n,o,s)})}function at(n){for(var e=0;e<n.length;e++)th.add(n[e]);for(var t of Ma)t(n)}let Vc=null;function Fi(n){var e=this,t=e.ownerDocument,r=n.type,i=n.composedPath?.()||[],s=i[0]||n.target;Vc=n;var o=0,a=Vc===n&&n.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||n.target,s!==e){ns(n,"currentTarget",{configurable:!0,get(){return s||t}});var d=ce,h=X;Et(null),Gt(null);try{for(var u,m=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var b=s["__"+r];b!=null&&(!s.disabled||n.target===s)&&b.call(s,n)}catch(C){u?m.push(C):u=C}if(n.cancelBubble||v===e||v===null)break;s=v}if(u){for(let C of m)queueMicrotask(()=>{throw C});throw u}}finally{n.__root=e,delete n.currentTarget,Et(d),Gt(h)}}}function rh(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function $n(n,e){var t=X;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function O(n,e){var t=(e&Tm)!==0,r=(e&km)!==0,i,s=!n.startsWith("<!>");return()=>{if(H)return $n(ue,null),ue;i===void 0&&(i=rh(s?n:"<!>"+n),t||(i=ln(i)));var o=r||Dd?document.importNode(i,!0):i.cloneNode(!0);if(t){var a=ln(o),l=o.lastChild;$n(a,l)}else $n(o,o);return o}}function pv(n,e,t="svg"){var r=!n.startsWith("<!>"),i=`<${t}>${r?n:"<!>"+n}</${t}>`,s;return()=>{if(H)return $n(ue,null),ue;if(!s){var o=rh(i),a=ln(o);s=ln(a)}var l=s.cloneNode(!0);return $n(l,l),l}}function mv(n,e){return pv(n,e,"svg")}function pe(){if(H)return $n(ue,null),ue;var n=document.createDocumentFragment(),e=document.createComment(""),t=Bt();return n.append(e,t),$n(e,t),n}function y(n,e){if(H){X.nodes_end=ue,Nr();return}n!==null&&n.before(e)}function E(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function Pl(n,e){return ih(n,e)}function vv(n,e){Oa(),e.intro=e.intro??!1;const t=e.target,r=H,i=ue;try{for(var s=ln(t);s&&(s.nodeType!==wi||s.data!==wd);)s=Tn(s);if(!s)throw ci;Nt(!0),st(s);const o=ih(n,{...e,anchor:s});return Nt(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==ci&&console.warn("Failed to hydrate: ",o),e.recover===!1&&fm(),Oa(),xl(t),Nt(!1),Pl(n,e)}finally{Nt(r),st(i)}}const Yr=new Map;function ih(n,{target:e,anchor:t,props:r={},events:i,context:s,intro:o=!0}){Oa();var a=new Set,l=h=>{for(var u=0;u<h.length;u++){var m=h[u];if(!a.has(m)){a.add(m);var v=dv(m);e.addEventListener(m,Fi,{passive:v});var b=Yr.get(m);b===void 0?(document.addEventListener(m,Fi,{passive:v}),Yr.set(m,1)):Yr.set(m,b+1)}}};l(gl(th)),Ma.add(l);var c=void 0,d=Jm(()=>{var h=t??e.appendChild(Bt());return Fm(h,{pending:()=>{}},u=>{if(s){Oe({});var m=Le;m.c=s}if(i&&(r.$$events=i),H&&$n(u,null),c=n(u,r)||{},H&&(X.nodes_end=ue,ue===null||ue.nodeType!==wi||ue.data!==Il))throw Do(),ci;s&&De()}),()=>{for(var u of a){e.removeEventListener(u,Fi);var m=Yr.get(u);--m===0?(document.removeEventListener(u,Fi),Yr.delete(u)):Yr.set(u,m)}Ma.delete(l),h!==t&&h.parentNode?.removeChild(h)}});return $a.set(c,d),c}let $a=new WeakMap;function gv(n,e){const t=$a.get(n);return t?($a.delete(n),t(e)):Promise.resolve()}class sh{anchor;#t=new Map;#e=new Map;#r=new Map;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=()=>{var e=Ce;if(this.#t.has(e)){var t=this.#t.get(e),r=this.#e.get(t);if(r)Rl(r);else{var i=this.#r.get(t);i&&(this.#e.set(t,i.effect),this.#r.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,o]of this.#t){if(this.#t.delete(s),s===e)break;const a=this.#r.get(o);a&&(We(a.effect),this.#r.delete(o))}for(const[s,o]of this.#e){if(s===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(s)){var c=document.createDocumentFragment();Kd(o,c),c.append(Bt()),this.#r.set(s,{effect:o,fragment:c})}else We(o);this.#e.delete(s)};this.#n||!r?ni(o,a,!1):a()}}};#s=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[r,i]of this.#r)t.includes(r)||(We(i.effect),this.#r.delete(r))};ensure(e,t){var r=Ce,i=Fd();if(t&&!this.#e.has(e)&&!this.#r.has(e))if(i){var s=document.createDocumentFragment(),o=Bt();s.append(o),this.#r.set(e,{effect:yt(()=>t(o)),fragment:s})}else this.#e.set(e,yt(()=>t(this.anchor)));if(this.#t.set(r,e),i){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#i),r.ondiscard(this.#s)}else H&&(this.anchor=ue),this.#i()}}function K(n,e,t=!1){H&&Nr();var r=new sh(n),i=t?Pr:0;function s(o,a){if(H){const c=yd(n)===Oo;if(o===c){var l=Js();st(l),r.anchor=l,Nt(!1),r.ensure(o,a),Nt(!0);return}}r.ensure(o,a)}Ei(()=>{var o=!1;e((a,l=!0)=>{o=!0,s(l,a)}),o||s(!1,null)},i)}function tr(n,e){return e}function _v(n,e,t){for(var r=n.items,i=[],s=e.length,o=0;o<s;o++)Al(e[o].e,i,!0);var a=s>0&&i.length===0&&t!==null;if(a){var l=t.parentNode;xl(l),l.append(t),r.clear(),wn(n,e[0].prev,e[s-1].next)}Bd(i,()=>{for(var c=0;c<s;c++){var d=e[c];a||(r.delete(d.k),wn(n,d.prev,d.next)),We(d.e,!a)}})}function Lt(n,e,t,r,i,s=null){var o=n,a={flags:e,items:new Map,first:null},l=(e&_d)!==0;if(l){var c=n;o=H?st(ln(c)):c.appendChild(Bt())}H&&Nr();var d=null,h=!1,u=new Map,m=Tl(()=>{var S=t();return vl(S)?S:S==null?[]:gl(S)}),v,b;function C(){bv(b,v,a,u,o,i,e,r,t),s!==null&&(v.length===0?d?Rl(d):d=yt(()=>s(o)):d!==null&&ni(d,()=>{d=null}))}Ei(()=>{b??=X,v=g(m);var S=v.length;if(h&&S===0)return;h=S===0;let k=!1;if(H){var P=yd(o)===Oo;P!==(S===0)&&(o=Js(),st(o),Nt(!1),k=!0)}if(H){for(var N=null,R,T=0;T<S;T++){if(ue.nodeType===wi&&ue.data===Il){o=ue,k=!0,Nt(!1);break}var I=v[T],w=r(I,T);R=Fa(ue,a,N,null,I,w,T,i,e,t),a.items.set(w,R),N=R}S>0&&st(Js())}if(H)S===0&&s&&(d=yt(()=>s(o)));else if(Fd()){var L=new Set,M=Ce;for(T=0;T<S;T+=1){I=v[T],w=r(I,T);var F=a.items.get(w)??u.get(w);F?(e&(No|Lo))!==0&&oh(F,I,T,e):(R=Fa(null,a,null,null,I,w,T,i,e,t,!0),u.set(w,R)),L.add(w)}for(const[$,B]of a.items)L.has($)||M.skipped_effects.add(B.e);M.oncommit(C)}else C();k&&Nt(!0),g(m)}),H&&(o=ue)}function bv(n,e,t,r,i,s,o,a,l){var c=(o&bm)!==0,d=(o&(No|Lo))!==0,h=e.length,u=t.items,m=t.first,v=m,b,C=null,S,k=[],P=[],N,R,T,I;if(c)for(I=0;I<h;I+=1)N=e[I],R=a(N,I),T=u.get(R),T!==void 0&&(T.a?.measure(),(S??=new Set).add(T));for(I=0;I<h;I+=1){if(N=e[I],R=a(N,I),T=u.get(R),T===void 0){var w=r.get(R);if(w!==void 0){r.delete(R),u.set(R,w);var L=C?C.next:v;wn(t,C,w),wn(t,w,L),oa(w,L,i),C=w}else{var M=v?v.e.nodes_start:i;C=Fa(M,t,C,C===null?t.first:C.next,N,R,I,s,o,l)}u.set(R,C),k=[],P=[],v=C.next;continue}if(d&&oh(T,N,I,o),(T.e.f&Ot)!==0&&(Rl(T.e),c&&(T.a?.unfix(),(S??=new Set).delete(T))),T!==v){if(b!==void 0&&b.has(T)){if(k.length<P.length){var F=P[0],$;C=F.prev;var B=k[0],re=k[k.length-1];for($=0;$<k.length;$+=1)oa(k[$],F,i);for($=0;$<P.length;$+=1)b.delete(P[$]);wn(t,B.prev,re.next),wn(t,C,B),wn(t,re,F),v=F,C=re,I-=1,k=[],P=[]}else b.delete(T),oa(T,v,i),wn(t,T.prev,T.next),wn(t,T,C===null?t.first:C.next),wn(t,C,T),C=T;continue}for(k=[],P=[];v!==null&&v.k!==R;)(v.e.f&Ot)===0&&(b??=new Set).add(v),P.push(v),v=v.next;if(v===null)continue;T=v}k.push(T),C=T,v=T.next}if(v!==null||b!==void 0){for(var U=b===void 0?[]:gl(b);v!==null;)(v.e.f&Ot)===0&&U.push(v),v=v.next;var z=U.length;if(z>0){var Y=(o&_d)!==0&&h===0?i:null;if(c){for(I=0;I<z;I+=1)U[I].a?.measure();for(I=0;I<z;I+=1)U[I].a?.fix()}_v(t,U,Y)}}c&&vr(()=>{if(S!==void 0)for(T of S)T.a?.apply()}),n.first=t.first&&t.first.e,n.last=C&&C.e;for(var V of r.values())We(V.e);r.clear()}function oh(n,e,t,r){(r&No)!==0&&hi(n.v,e),(r&Lo)!==0?hi(n.i,t):n.i=t}function Fa(n,e,t,r,i,s,o,a,l,c,d){var h=(l&No)!==0,u=(l&wm)===0,m=h?u?Sl(i,!1,!1):dr(i):i,v=(l&Lo)===0?o:dr(o),b={i:v,v:m,k:s,a:null,e:null,prev:t,next:r};try{if(n===null){var C=document.createDocumentFragment();C.append(n=Bt())}return b.e=yt(()=>a(n,m,v,c),H),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?d||(e.first=b):(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function oa(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,i=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==null&&s!==r;){var o=Tn(s);i.before(s),s=o}}function wn(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function qe(n,e,t,r,i){H&&Nr();var s=e.$$slots?.[t],o=!1;s===!0&&(s=e.children,o=!0),s===void 0||s(n,o?()=>r:r)}function wv(n,e,t,r,i,s){let o=H;H&&Nr();var a=null;H&&ue.nodeType===am&&(a=ue,Nr());var l=H?ue:n,c=new sh(l,!1);Ei(()=>{const d=e()||null;var h=xm;if(d===null){c.ensure(null,null);return}return c.ensure(d,u=>{if(d){if(a=H?a:document.createElementNS(h,d),$n(a,a),r){H&&fv(d)&&a.append(document.createComment(""));var m=H?ln(a):a.appendChild(Bt());H&&(m===null?Nt(!1):st(m)),r(a,m)}X.nodes_end=a,u.before(a)}H&&st(u)}),()=>{}},Pr),ws(()=>{}),o&&(Nt(!0),st(l))}function $e(n,e){ys(()=>{var t=n.getRootNode(),r=t.host?t:t.head??t.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const i=document.createElement("style");i.id=e.hash,i.textContent=e.code,r.appendChild(i)}})}function yv(n,e){var t=void 0,r;Ei(()=>{t!==(t=e())&&(r&&(We(r),r=null),t&&(r=yt(()=>{ys(()=>t(n))})))})}function ah(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=ah(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Ev(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=ah(n))&&(r&&(r+=" "),r+=e);return r}function Cv(n){return typeof n=="object"?Ev(n):n??""}const Bc=[...` 	
\r\f \v\uFEFF`];function Iv(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s;(o===0||Bc.includes(r[o-1]))&&(a===r.length||Bc.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Gc(n,e=!1){var t=e?" !important;":";",r="";for(var i in n){var s=n[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function aa(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function Tv(n,e){if(e){var t="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(aa)),i&&l.push(...Object.keys(i).map(aa));var c=0,d=-1;const b=n.length;for(var h=0;h<b;h++){var u=n[h];if(a?u==="/"&&n[h-1]==="*"&&(a=!1):s?s===u&&(s=!1):u==="/"&&n[h+1]==="*"?a=!0:u==='"'||u==="'"?s=u:u==="("?o++:u===")"&&o--,!a&&s===!1&&o===0){if(u===":"&&d===-1)d=h;else if(u===";"||h===b-1){if(d!==-1){var m=aa(n.substring(c,d).trim());if(!l.includes(m)){u!==";"&&h++;var v=n.substring(c,h).trim();t+=" "+v+";"}}c=h+1,d=-1}}}}return r&&(t+=Gc(r)),i&&(t+=Gc(i,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function en(n,e,t,r,i,s){var o=n.__className;if(H||o!==t||o===void 0){var a=Iv(t,r,s);(!H||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):e?n.className=a:n.setAttribute("class",a)),n.__className=t}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&n.classList.toggle(l,c)}return s}function la(n,e={},t,r){for(var i in t){var s=t[i];e[i]!==s&&(t[i]==null?n.style.removeProperty(i):n.style.setProperty(i,s,r))}}function kv(n,e,t,r){var i=n.__style;if(H||i!==e){var s=Tv(e,r);(!H||s!==n.getAttribute("style"))&&(s==null?n.removeAttribute("style"):n.style.cssText=s),n.__style=e}else r&&(Array.isArray(r)?(la(n,t?.[0],r[0]),la(n,t?.[1],r[1],"important")):la(n,t,r));return r}function no(n,e,t=!1){if(n.multiple){if(e==null)return;if(!vl(e))return Rm();for(var r of n.options)r.selected=e.includes(Vi(r));return}for(r of n.options){var i=Vi(r);if(Wm(i,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function lh(n){var e=new MutationObserver(()=>{no(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ws(()=>{e.disconnect()})}function ch(n,e,t=e){var r=new WeakSet,i=!0;Ud(n,"change",s=>{var o=s?"[selected]":":checked",a;if(n.multiple)a=[].map.call(n.querySelectorAll(o),Vi);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");a=l&&Vi(l)}t(a),Ce!==null&&r.add(Ce)}),ys(()=>{var s=e();if(n===document.activeElement){var o=ji??Ce;if(r.has(o))return}if(no(n,s,i),i&&s===void 0){var a=n.querySelector(":checked");a!==null&&(s=Vi(a),t(s))}n.__value=s,i=!1}),lh(n)}function Vi(n){return"__value"in n?n.__value:n.value}const Ni=Symbol("class"),Li=Symbol("style"),uh=Symbol("is custom element"),dh=Symbol("is html");function ro(n){if(H){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var r=n.value;Me(n,"value",null),n.value=r}if(n.hasAttribute("checked")){var i=n.checked;Me(n,"checked",null),n.checked=i}}};n.__on_r=t,vr(t),zd()}}function Sv(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Me(n,e,t,r){var i=hh(n);H&&(i[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||i[e]!==(i[e]=t)&&(e==="loading"&&(n[om]=t),t==null?n.removeAttribute(e):typeof t!="string"&&fh(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function xv(n,e,t,r,i=!1,s=!1){if(H&&i&&n.tagName==="INPUT"){var o=n,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in t||ro(o)}var l=hh(n),c=l[uh],d=!l[dh];let h=H&&c;h&&Nt(!1);var u=e||{},m=n.tagName==="OPTION";for(var v in e)v in t||(t[v]=null);t.class?t.class=Cv(t.class):t[Ni]&&(t.class=null),t[Li]&&(t.style??=null);var b=fh(n);for(const I in t){let w=t[I];if(m&&I==="value"&&w==null){n.value=n.__value="",u[I]=w;continue}if(I==="class"){var C=n.namespaceURI==="http://www.w3.org/1999/xhtml";en(n,C,w,r,e?.[Ni],t[Ni]),u[I]=w,u[Ni]=t[Ni];continue}if(I==="style"){kv(n,w,e?.[Li],t[Li]),u[I]=w,u[Li]=t[Li];continue}var S=u[I];if(!(w===S&&!(w===void 0&&n.hasAttribute(I)))){u[I]=w;var k=I[0]+I[1];if(k!=="$$")if(k==="on"){const L={},M="$$"+I;let F=I.slice(2);var P=av(F);if(sv(F)&&(F=F.slice(0,-7),L.capture=!0),!P&&S){if(w!=null)continue;n.removeEventListener(F,u[M],L),u[M]=null}if(w!=null)if(P)n[`__${F}`]=w,at([F]);else{let $=function(B){u[I].call(this,B)};var T=$;u[M]=nh(F,n,$,L)}else P&&(n[`__${F}`]=void 0)}else if(I==="style")Me(n,I,w);else if(I==="autofocus")Vm(n,!!w);else if(!c&&(I==="__value"||I==="value"&&w!=null))n.value=n.__value=w;else if(I==="selected"&&m)Sv(n,w);else{var N=I;d||(N=cv(N));var R=N==="defaultValue"||N==="defaultChecked";if(w==null&&!c&&!R)if(l[I]=null,N==="value"||N==="checked"){let L=n;const M=e===void 0;if(N==="value"){let F=L.defaultValue;L.removeAttribute(N),L.defaultValue=F,L.value=L.__value=M?F:null}else{let F=L.defaultChecked;L.removeAttribute(N),L.defaultChecked=F,L.checked=M?F:!1}}else n.removeAttribute(I);else R||b.includes(N)&&(c||typeof w!="string")?(n[N]=w,N in l&&(l[N]=rt)):typeof w!="function"&&Me(n,N,w)}}}return h&&Nt(!0),u}function Kc(n,e,t=[],r=[],i=[],s,o=!1,a=!1){Rd(i,t,r,l=>{var c=void 0,d={},h=n.nodeName==="SELECT",u=!1;if(Ei(()=>{var v=e(...l.map(g)),b=xv(n,c,v,s,o,a);u&&h&&"value"in v&&no(n,v.value);for(let S of Object.getOwnPropertySymbols(d))v[S]||We(d[S]);for(let S of Object.getOwnPropertySymbols(v)){var C=v[S];S.description===Am&&(!c||C!==c[S])&&(d[S]&&We(d[S]),d[S]=yt(()=>yv(n,()=>C))),b[S]=C}c=b}),h){var m=n;ys(()=>{no(m,c.value,!0),lh(m)})}u=!0})}function hh(n){return n.__attributes??={[uh]:n.nodeName.includes("-"),[dh]:n.namespaceURI===Sm}}var Yc=new Map;function fh(n){var e=n.getAttribute("is")||n.nodeName,t=Yc.get(e);if(t)return t;Yc.set(e,t=[]);for(var r,i=n,s=Element.prototype;s!==i;){r=pd(i);for(var o in r)r[o].set&&t.push(o);i=_l(i)}return t}function io(n,e,t=e){var r=new WeakSet;Ud(n,"input",async i=>{var s=i?n.defaultValue:n.value;if(s=ca(n)?ua(s):s,t(s),Ce!==null&&r.add(Ce),await rv(),s!==(s=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=s??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),(H&&n.defaultValue!==n.value||Cn(e)==null&&n.value)&&(t(ca(n)?ua(n.value):n.value),Ce!==null&&r.add(Ce)),Fo(()=>{var i=e();if(n===document.activeElement){var s=ji??Ce;if(r.has(s))return}ca(n)&&i===ua(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function ca(n){var e=n.type;return e==="number"||e==="range"}function ua(n){return n===""?null:+n}function Qc(n,e){return n===e||n?.[En]===e}function ph(n={},e,t,r){return ys(()=>{var i,s;return Fo(()=>{i=s,s=[],Cn(()=>{n!==t(...s)&&(e(n,...s),i&&Qc(t(...i),n)&&e(null,...i))})}),()=>{vr(()=>{s&&Qc(t(...s),n)&&e(null,...s)})}}),n}function Mt(n=!1){const e=Le,t=e.l.u;if(!t)return;let r=()=>Xr(e.s);if(n){let i=0,s={};const o=bs(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});r=()=>g(o)}t.b.length&&Ym(()=>{Jc(e,r),Ks(t.b)}),Zs(()=>{const i=Cn(()=>t.m.map(rm));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&Zs(()=>{Jc(e,r),Ks(t.a)})}function Jc(n,e){if(n.l.s)for(const t of n.l.s)g(t);e()}function Nl(n,e,t){if(n==null)return e(void 0),t&&t(void 0),ir;const r=Cn(()=>n.subscribe(e,t));return r.unsubscribe?()=>r.unsubscribe():r}const Qr=[];function Av(n,e){return{subscribe:zo(n,e).subscribe}}function zo(n,e=ir){let t=null;const r=new Set;function i(a){if(Cd(n,a)&&(n=a,t)){const l=!Qr.length;for(const c of r)c[1](),Qr.push(c,n);if(l){for(let c=0;c<Qr.length;c+=2)Qr[c][0](Qr[c+1]);Qr.length=0}}}function s(a){i(a(n))}function o(a,l=ir){const c=[a,l];return r.add(c),r.size===1&&(t=e(i,s)||ir),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function Rv(n,e,t){const r=!Array.isArray(n),i=r?[n]:n;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Av(t,(o,a)=>{let l=!1;const c=[];let d=0,h=ir;const u=()=>{if(d)return;h();const v=e(r?c[0]:c,o,a);s?o(v):h=typeof v=="function"?v:ir},m=i.map((v,b)=>Nl(v,C=>{c[b]=C,d&=~(1<<b),l&&u()},()=>{d|=1<<b}));return l=!0,u(),function(){Ks(m),h(),l=!1}})}function Pv(n){let e;return Nl(n,t=>e=t)(),e}let $s=!1,za=Symbol();function In(n,e,t){const r=t[e]??={store:null,source:Sl(void 0),unsubscribe:ir};if(r.store!==n&&!(za in t))if(r.unsubscribe(),r.store=n??null,n==null)r.source.v=void 0,r.unsubscribe=ir;else{var i=!0;r.unsubscribe=Nl(n,s=>{i?r.source.v=s:A(r.source,s)}),i=!1}return n&&za in t?Pv(n):g(r.source)}function Hr(){const n={};function e(){ws(()=>{for(var t in n)n[t].unsubscribe();ns(n,za,{enumerable:!1,value:!0})})}return[n,e]}function Nv(n){var e=$s;try{return $s=!1,[n(),$s]}finally{$s=e}}const Lv={get(n,e){if(!n.exclude.includes(e))return g(n.version),e in n.special?n.special[e]():n.props[e]},set(n,e,t){if(!(e in n.special)){var r=X;try{Gt(n.parent_effect),n.special[e]=jt({get[e](){return n.props[e]}},e,bd)}finally{Gt(r)}}return n.special[e](t),Fc(n.version),!0},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},deleteProperty(n,e){return n.exclude.includes(e)||(n.exclude.push(e),Fc(n.version)),!0},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function Ue(n,e){return new Proxy({props:n,exclude:e,special:{},version:dr(0),parent_effect:X},Lv)}const Ov={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(Pi(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let i=n.props[r];Pi(i)&&(i=i());const s=On(i,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(Pi(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=On(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(n,e){if(e===En||e===El)return!1;for(let t of n.props)if(Pi(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(Pi(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function et(...n){return new Proxy({props:n},Ov)}function jt(n,e,t,r){var i=!yi||(t&Em)!==0,s=(t&Cm)!==0,o=(t&Im)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?Cn(r):r),a),d;if(s){var h=En in n||El in n;d=On(n,e)?.set??(h&&e in n?P=>n[e]=P:void 0)}var u,m=!1;s?[u,m]=Nv(()=>n[e]):u=n[e],u===void 0&&r!==void 0&&(u=c(),d&&(i&&pm(),d(u)));var v;if(i?v=()=>{var P=n[e];return P===void 0?c():(l=!0,P)}:v=()=>{var P=n[e];return P!==void 0&&(a=void 0),P===void 0?a:P},i&&(t&bd)===0)return v;if(d){var b=n.$$legacy;return(function(P,N){return arguments.length>0?((!i||!N||b||m)&&d(N?v():P),P):v()})}var C=!1,S=((t&ym)!==0?bs:Tl)(()=>(C=!1,v()));s&&g(S);var k=X;return(function(P,N){if(arguments.length>0){const R=N?g(S):i&&s?Ht(P):P;return A(S,R),C=!0,a!==void 0&&(a=R),P}return jr&&C||(k.f&Dn)!==0?S.v:g(S)})}function Dv(n){return new Mv(n)}class Mv{#t;#e;constructor(e){var t=new Map,r=(s,o)=>{var a=Sl(o,!1,!1);return t.set(s,a),a};const i=new Proxy({...e.props||{},$$events:{}},{get(s,o){return g(t.get(o)??r(o,Reflect.get(s,o)))},has(s,o){return o===El?!0:(g(t.get(o)??r(o,Reflect.get(s,o))),Reflect.has(s,o))},set(s,o,a){return A(t.get(o)??r(o,a),a),Reflect.set(s,o,a)}});this.#e=(e.hydrate?vv:Pl)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Pt(),this.#t=i.$$events;for(const s of Object.keys(this.#e))s==="$set"||s==="$destroy"||s==="$on"||ns(this,s,{get(){return this.#e[s]},set(o){this.#e[s]=o},enumerable:!0});this.#e.$set=s=>{Object.assign(i,s)},this.#e.$destroy=()=>{gv(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const r=(...i)=>t.call(this,...i);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(i=>i!==r)}}$destroy(){this.#e.$destroy()}}let mh;typeof HTMLElement=="function"&&(mh=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(n,e,t){super(),this.$$ctor=n,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(n,e,t){if(this.$$l[n]=this.$$l[n]||[],this.$$l[n].push(e),this.$$c){const r=this.$$c.$on(n,e);this.$$l_u.set(e,r)}super.addEventListener(n,e,t)}removeEventListener(n,e,t){if(super.removeEventListener(n,e,t),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return s=>{const o=document.createElement("slot");i!=="default"&&(o.name=i),y(s,o)}};var n=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},r=$v(this);for(const i of this.$$s)i in r&&(i==="default"&&!this.$$d.children?(this.$$d.children=e(i),t.default=!0):t[i]=e(i));for(const i of this.attributes){const s=this.$$g_p(i.name);s in this.$$d||(this.$$d[s]=qs(s,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Dv({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=Qm(()=>{Fo(()=>{this.$$r=!0;for(const i of Gs(this.$$c)){if(!this.$$p_d[i]?.reflect)continue;this.$$d[i]=this.$$c[i];const s=qs(i,this.$$d[i],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,s)}this.$$r=!1})});for(const i in this.$$l)for(const s of this.$$l[i]){const o=this.$$c.$on(i,s);this.$$l_u.set(s,o)}this.$$l={}}}attributeChangedCallback(n,e,t){this.$$r||(n=this.$$g_p(n),this.$$d[n]=qs(n,t,this.$$p_d,"toProp"),this.$$c?.$set({[n]:this.$$d[n]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(n){return Gs(this.$$p_d).find(e=>this.$$p_d[e].attribute===n||!this.$$p_d[e].attribute&&e.toLowerCase()===n)||n}});function qs(n,e,t,r){const i=t[n]?.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!t[n])return e;if(r==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function $v(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function ne(n,e,t,r,i,s){let o=class extends mh{constructor(){super(n,t,i),this.$$p_d=e}static get observedAttributes(){return Gs(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Gs(e).forEach(a=>{ns(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=qs(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var d=On(c,a)?.get;d?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{ns(o.prototype,a,{get(){return this.$$c?.[a]}})}),n.element=o,o}function Cs(n){Le===null&&gd(),yi&&Le.l!==null?zv(Le).m.push(n):Zs(()=>{const e=Cn(n);if(typeof e=="function")return e})}function Fv(n){Le===null&&gd(),Cs(()=>()=>Cn(n))}function zv(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const Uv="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Uv);const qv=()=>{};var Xc={};/**
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
 */const vh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(n,e){if(!n)throw Ci(e)},Ci=function(n){return new Error("Firebase Database ("+vh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const gh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},jv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let u=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(u=64)),r.push(t[d],t[h],t[u],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Hv;const u=s<<2|a>>4;if(r.push(u),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _h=function(n){const e=gh(n);return Ll.encodeByteArray(e,!0)},so=function(n){return _h(n).replace(/\./g,"")},oo=function(n){try{return Ll.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wv(n){return bh(void 0,n)}function bh(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Vv(t)||(n[t]=bh(n[t],e[t]));return n}function Vv(n){return n!=="__proto__"}/**
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
 */function Bv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gv=()=>Bv().__FIREBASE_DEFAULTS__,Kv=()=>{if(typeof process>"u"||typeof Xc>"u")return;const n=Xc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&oo(n[1]);return e&&JSON.parse(e)},Ol=()=>{try{return qv()||Gv()||Kv()||Yv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wh=n=>Ol()?.emulatorHosts?.[n],Qv=n=>{const e=wh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},yh=()=>Ol()?.config,Eh=n=>Ol()?.[`_${n}`];/**
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
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ii(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ch(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Jv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[so(JSON.stringify(t)),so(JSON.stringify(o)),""].join(".")}const Bi={};function Xv(){const n={prod:[],emulator:[]};for(const e of Object.keys(Bi))Bi[e]?n.emulator.push(e):n.prod.push(e);return n}function Zv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Zc=!1;function Ih(n,e){if(typeof window>"u"||typeof document>"u"||!Ii(window.location.host)||Bi[n]===e||Bi[n]||Zc)return;Bi[n]=e;function t(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=Xv().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,m){u.setAttribute("width","24"),u.setAttribute("id",m),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Zc=!0,o()},u}function d(u,m){u.setAttribute("id",m),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=Zv(r),m=t("text"),v=document.getElementById(m)||document.createElement("span"),b=t("learnmore"),C=document.getElementById(b)||document.createElement("a"),S=t("preprendIcon"),k=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const P=u.element;a(P),d(C,b);const N=c();l(k,S),P.append(k,v,C,N),document.body.appendChild(P)}s?(v.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function eg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Th(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ng(){const n=bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rg(){return vh.NODE_ADMIN===!0}function ig(){try{return typeof indexedDB=="object"}catch{return!1}}function sg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const og="FirebaseError";class gr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=og,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ag(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gr(i,a,r)}}function ag(n,e){return n.replace(lg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lg=/\{\$([^}]+)}/g;/**
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
 */function ss(n){return JSON.parse(n)}function Ze(n){return JSON.stringify(n)}/**
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
 */const kh=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=ss(oo(s[0])||""),t=ss(oo(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},cg=function(n){const e=kh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ug=function(n){const e=kh(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function fi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ua(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ao(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Or(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(eu(s)&&eu(o)){if(!Or(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function eu(n){return n!==null&&typeof n=="object"}/**
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
 */function Wr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class dg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)r[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const u=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):h<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const u=(i<<5|i>>>27)+c+l+d+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function hg(n,e){const t=new fg(n,e);return t.subscribe.bind(t)}class fg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");pg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=da),i.error===void 0&&(i.error=da),i.complete===void 0&&(i.complete=da);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function da(){}function Uo(n,e){return`${n} failed: ${e} argument `}/**
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
 */const mg=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qo=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function pt(n){return n&&n._delegate?n._delegate:n}class Dr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cr="[DEFAULT]";/**
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
 */class vg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Is;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_g(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gg(n){return n===Cr?void 0:n}function _g(n){return n.instantiationMode==="EAGER"}/**
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
 */class bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ie||(Ie={}));const wg={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},yg=Ie.INFO,Eg={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},Cg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Eg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ml{constructor(e){this.name=e,this._logLevel=yg,this._logHandler=Cg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const Ig=(n,e)=>e.some(t=>n instanceof t);let tu,nu;function Tg(){return tu||(tu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kg(){return nu||(nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sh=new WeakMap,qa=new WeakMap,xh=new WeakMap,ha=new WeakMap,$l=new WeakMap;function Sg(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(or(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Sh.set(t,n)}).catch(()=>{}),$l.set(e,n),e}function xg(n){if(qa.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});qa.set(n,e)}let ja={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return or(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ag(n){ja=n(ja)}function Rg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(fa(this),e,...t);return xh.set(r,e.sort?e.sort():[e]),or(r)}:kg().includes(n)?function(...e){return n.apply(fa(this),e),or(Sh.get(this))}:function(...e){return or(n.apply(fa(this),e))}}function Pg(n){return typeof n=="function"?Rg(n):(n instanceof IDBTransaction&&xg(n),Ig(n,Tg())?new Proxy(n,ja):n)}function or(n){if(n instanceof IDBRequest)return Sg(n);if(ha.has(n))return ha.get(n);const e=Pg(n);return e!==n&&(ha.set(n,e),$l.set(e,n)),e}const fa=n=>$l.get(n);function Ng(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Lg=["get","getKey","getAll","getAllKeys","count"],Og=["put","add","delete","clear"],pa=new Map;function ru(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pa.get(e))return pa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Og.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lg.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return pa.set(e,s),s}Ag(n=>({...n,get:(e,t,r)=>ru(e,t)||n.get(e,t,r),has:(e,t)=>!!ru(e,t)||n.has(e,t)}));/**
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
 */class Dg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Mg(n){return n.getComponent()?.type==="VERSION"}const Ha="@firebase/app",iu="0.14.5";/**
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
 */const zn=new Ml("@firebase/app"),$g="@firebase/app-compat",Fg="@firebase/analytics-compat",zg="@firebase/analytics",Ug="@firebase/app-check-compat",qg="@firebase/app-check",jg="@firebase/auth",Hg="@firebase/auth-compat",Wg="@firebase/database",Vg="@firebase/data-connect",Bg="@firebase/database-compat",Gg="@firebase/functions",Kg="@firebase/functions-compat",Yg="@firebase/installations",Qg="@firebase/installations-compat",Jg="@firebase/messaging",Xg="@firebase/messaging-compat",Zg="@firebase/performance",e_="@firebase/performance-compat",t_="@firebase/remote-config",n_="@firebase/remote-config-compat",r_="@firebase/storage",i_="@firebase/storage-compat",s_="@firebase/firestore",o_="@firebase/ai",a_="@firebase/firestore-compat",l_="firebase",c_="12.5.0";/**
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
 */const Wa="[DEFAULT]",u_={[Ha]:"fire-core",[$g]:"fire-core-compat",[zg]:"fire-analytics",[Fg]:"fire-analytics-compat",[qg]:"fire-app-check",[Ug]:"fire-app-check-compat",[jg]:"fire-auth",[Hg]:"fire-auth-compat",[Wg]:"fire-rtdb",[Vg]:"fire-data-connect",[Bg]:"fire-rtdb-compat",[Gg]:"fire-fn",[Kg]:"fire-fn-compat",[Yg]:"fire-iid",[Qg]:"fire-iid-compat",[Jg]:"fire-fcm",[Xg]:"fire-fcm-compat",[Zg]:"fire-perf",[e_]:"fire-perf-compat",[t_]:"fire-rc",[n_]:"fire-rc-compat",[r_]:"fire-gcs",[i_]:"fire-gcs-compat",[s_]:"fire-fst",[a_]:"fire-fst-compat",[o_]:"fire-vertex","fire-js":"fire-js",[l_]:"fire-js-all"};/**
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
 */const lo=new Map,d_=new Map,Va=new Map;function su(n,e){try{n.container.addComponent(e)}catch(t){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pi(n){const e=n.name;if(Va.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,n);for(const t of lo.values())su(t,n);for(const t of d_.values())su(t,n);return!0}function Fl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const h_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Ts("app","Firebase",h_);/**
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
 */class f_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=c_;function Ah(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Wa,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(t||(t=yh()),!t)throw ar.create("no-options");const s=lo.get(i);if(s){if(Or(t,s.options)&&Or(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new bg(i);for(const l of Va.values())o.addComponent(l);const a=new f_(t,r,o);return lo.set(i,a),a}function Rh(n=Wa){const e=lo.get(n);if(!e&&n===Wa&&yh())return Ah();if(!e)throw ar.create("no-app",{appName:n});return e}function lr(n,e,t){let r=u_[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(o.join(" "));return}pi(new Dr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const p_="firebase-heartbeat-database",m_=1,os="firebase-heartbeat-store";let ma=null;function Ph(){return ma||(ma=Ng(p_,m_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(n=>{throw ar.create("idb-open",{originalErrorMessage:n.message})})),ma}async function v_(n){try{const t=(await Ph()).transaction(os),r=await t.objectStore(os).get(Nh(n));return await t.done,r}catch(e){if(e instanceof gr)zn.warn(e.message);else{const t=ar.create("idb-get",{originalErrorMessage:e?.message});zn.warn(t.message)}}}async function ou(n,e){try{const r=(await Ph()).transaction(os,"readwrite");await r.objectStore(os).put(e,Nh(n)),await r.done}catch(t){if(t instanceof gr)zn.warn(t.message);else{const r=ar.create("idb-set",{originalErrorMessage:t?.message});zn.warn(r.message)}}}function Nh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const g_=1024,__=30;class b_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new y_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=au();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>__){const i=E_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){zn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=au(),{heartbeatsToSend:t,unsentEntries:r}=w_(this._heartbeatsCache.heartbeats),i=so(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return zn.warn(e),""}}}function au(){return new Date().toISOString().substring(0,10)}function w_(n,e=g_){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),lu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class y_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ig()?sg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await v_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ou(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ou(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function lu(n){return so(JSON.stringify({version:2,heartbeats:n})).length}function E_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function C_(n){pi(new Dr("platform-logger",e=>new Dg(e),"PRIVATE")),pi(new Dr("heartbeat",e=>new b_(e),"PRIVATE")),lr(Ha,iu,n),lr(Ha,iu,"esm2020"),lr("fire-js","")}C_("");var I_="firebase",T_="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(I_,T_,"app");function Lh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k_=Lh,Oh=new Ts("auth","Firebase",Lh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Ml("@firebase/auth");function S_(n,...e){co.logLevel<=Ie.WARN&&co.warn(`Auth (${Ti}): ${n}`,...e)}function js(n,...e){co.logLevel<=Ie.ERROR&&co.error(`Auth (${Ti}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n,...e){throw zl(n,...e)}function Dt(n,...e){return zl(n,...e)}function Dh(n,e,t){const r={...k_(),[e]:t};return new Ts("auth","Firebase",r).create(e,{appName:n.name})}function cr(n){return Dh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Oh.create(n,...e)}function D(n,e,...t){if(!n)throw zl(e,...t)}function Pn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw js(e),new Error(e)}function qn(n,e){n||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){return typeof self<"u"&&self.location?.href||""}function Mh(){return cu()==="http:"||cu()==="https:"}function cu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mh()||tg()||"connection"in navigator)?navigator.onLine:!0}function A_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t){this.shortDelay=e,this.longDelay=t,qn(t>e,"Short delay should be less than long delay!"),this.isMobile=Dl()||Th()}get(){return x_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(n,e){qn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],N_=new ks(3e4,6e4);function Sn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function dn(n,e,t,r,i={}){return Fh(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wr({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:l,...s};return eg()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&Ii(n.emulatorConfig.host)&&(c.credentials="include"),$h.fetch()(await zh(n,n.config.apiHost,t,a),c)})}async function Fh(n,e,t){n._canInitEmulator=!1;const r={...R_,...e};try{const i=new O_(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw zi(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Dh(n,d,c);Un(n,d)}}catch(i){if(i instanceof gr)throw i;Un(n,"network-request-failed",{message:String(i)})}}async function jo(n,e,t,r,i={}){const s=await dn(n,e,t,r,i);return"mfaPendingCredential"in s&&Un(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function zh(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Ul(n.config,i):`${n.config.apiScheme}://${i}`;return P_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function L_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class O_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),N_.get())})}}function zi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Dt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n){return n!==void 0&&n.getResponse!==void 0}function du(n){return n!==void 0&&n.enterprise!==void 0}class Uh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return L_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(n){return(await dn(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function qh(n,e){return dn(n,"GET","/v2/recaptchaConfig",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(n,e){return dn(n,"POST","/v1/accounts:delete",e)}async function uo(n,e){return dn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $_(n,e=!1){const t=pt(n),r=await t.getIdToken(e),i=ql(r);D(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Gi(va(i.auth_time)),issuedAtTime:Gi(va(i.iat)),expirationTime:Gi(va(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function va(n){return Number(n)*1e3}function ql(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return js("JWT malformed, contained fewer than 3 sections"),null;try{const i=oo(t);return i?JSON.parse(i):(js("Failed to decode base64 JWT payload"),null)}catch(i){return js("Caught error parsing JWT payload as JSON",i?.toString()),null}}function hu(n){const e=ql(n);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof gr&&F_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function F_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(n){const e=n.auth,t=await n.getIdToken(),r=await as(n,uo(e,{idToken:t}));D(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=i.providerUserInfo?.length?jh(i.providerUserInfo):[],o=q_(n.providerData,s),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!o?.length,c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ga(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(n,d)}async function U_(n){const e=pt(n);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function q_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n,e){const t=await Fh(n,{},async()=>{const r=Wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await zh(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&Ii(n.emulatorConfig.host)&&(l.credentials="include"),$h.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function H_(n,e){return dn(n,"POST","/v2/accounts:revokeToken",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){D(e.length!==0,"internal-error");const t=hu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await j_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ii;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n,e){D(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new z_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ga(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await as(this,this.stsTokenManager.getToken(this.auth,e));return D(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $_(this,e)}reload(){return U_(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(cr(this.auth));const e=await this.getIdToken();return await as(this,M_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:m,providerData:v,stsTokenManager:b}=t;D(h&&b,e,"internal-error");const C=ii.fromJSON(this.name,b);D(typeof h=="string",e,"internal-error"),Yn(r,e.name),Yn(i,e.name),D(typeof u=="boolean",e,"internal-error"),D(typeof m=="boolean",e,"internal-error"),Yn(s,e.name),Yn(o,e.name),Yn(a,e.name),Yn(l,e.name),Yn(c,e.name),Yn(d,e.name);const S=new sn({uid:h,auth:e,email:i,emailVerified:u,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:C,createdAt:c,lastLoginAt:d});return v&&Array.isArray(v)&&(S.providerData=v.map(k=>({...k}))),l&&(S._redirectEventId=l),S}static async _fromIdTokenResponse(e,t,r=!1){const i=new ii;i.updateFromServerResponse(t);const s=new sn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ho(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];D(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?jh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new ii;a.updateFromIdToken(r);const l=new sn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ga(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Map;function Nn(n){qn(n instanceof Function,"Expected a class definition");let e=fu.get(n);return e?(qn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fu.set(n,e),e)}/**
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
 */class Hh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hh.type="NONE";const pu=Hh;/**
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
 */function Hs(n,e,t){return`firebase:${n}:${e}:${t}`}class si{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await uo(this.auth,{idToken:e}).catch(()=>{});return t?sn._fromGetAccountInfoResponse(this.auth,t,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new si(Nn(pu),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nn(pu);const o=Hs(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){let h;if(typeof d=="string"){const u=await uo(e,{idToken:d}).catch(()=>{});if(!u)break;h=await sn._fromGetAccountInfoResponse(e,u,d)}else h=sn._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new si(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new si(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yh(e))return"Blackberry";if(Qh(e))return"Webos";if(Vh(e))return"Safari";if((e.includes("chrome/")||Bh(e))&&!e.includes("edge/"))return"Chrome";if(Kh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Wh(n=bt()){return/firefox\//i.test(n)}function Vh(n=bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bh(n=bt()){return/crios\//i.test(n)}function Gh(n=bt()){return/iemobile/i.test(n)}function Kh(n=bt()){return/android/i.test(n)}function Yh(n=bt()){return/blackberry/i.test(n)}function Qh(n=bt()){return/webos/i.test(n)}function jl(n=bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function W_(n=bt()){return jl(n)&&!!window.navigator?.standalone}function V_(){return ng()&&document.documentMode===10}function Jh(n=bt()){return jl(n)||Kh(n)||Qh(n)||Yh(n)||/windows phone/i.test(n)||Gh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n,e=[]){let t;switch(n){case"Browser":t=mu(bt());break;case"Worker":t=`${mu(bt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ti}/${r}`}/**
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
 */class B_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function G_(n,e={}){return dn(n,"GET","/v2/passwordPolicy",Sn(n,e))}/**
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
 */const K_=6;class Y_{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??K_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vu(this),this.idTokenSubscription=new vu(this),this.beforeStateQueue=new B_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await si.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await uo(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(tn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(cr(this));const t=e?pt(e):null;return t&&D(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G_(this),t=new Y_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await H_(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nn(e)||this._popupRedirectResolver;D(t,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[Nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&S_(`Error while retrieving App Check token: ${e.error}`),e?.token}}function _r(n){return pt(n)}class vu{constructor(e){this.auth=e,this.observer=null,this.addObserver=hg(t=>this.observer=t)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function J_(n){Ss=n}function Hl(n){return Ss.loadJS(n)}function X_(){return Ss.recaptchaV2Script}function Z_(){return Ss.recaptchaEnterpriseScript}function eb(){return Ss.gapiScript}function Zh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=500,nb=6e4,Fs=1e12;class rb{constructor(e){this.auth=e,this.counter=Fs,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new ob(e,this.auth.name,t||{})),this.counter++,r}reset(e){const t=e||Fs;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Fs;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||Fs;return this._widgets.get(t)?.execute(),""}}class ib{constructor(){this.enterprise=new sb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class sb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ob{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ab(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},nb)},tb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ab(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const lb="recaptcha-enterprise",Ki="NO_RECAPTCHA";class ef{constructor(e){this.type=lb,this.auth=_r(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qh(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Uh(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;du(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ki)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ib().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&du(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Z_();l.length!==0&&(l+=a),Hl(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ga(n,e,t,r=!1,i=!1){const s=new ef(n);let o;if(i)o=Ki;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function _a(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await ga(n,e,t);return r(n,s).catch(async o=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const a=await ga(n,e,t,!1,!0);return r(n,a)}return Promise.reject(o)})}else{const s=await ga(n,e,t,!1,!0);return r(n,s)}}async function cb(n){const e=_r(n),t=await qh(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Uh(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new ef(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(n,e){const t=Fl(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Or(s,e??{}))return i;Un(i,"already-initialized")}return t.initialize({options:e})}function db(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Nn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function hb(n,e,t){const r=_r(n);D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=tf(e),{host:o,port:a}=fb(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){D(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),D(Or(c,r.config.emulator)&&Or(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ii(o)?(Ch(`${s}//${o}${l}`),Ih("Auth",!0)):pb()}function tf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fb(n){const e=tf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gu(o)}}}function gu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function pb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,t){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(n,e){return jo(n,"POST","/v1/accounts:signInWithIdp",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="http://localhost";class Mr extends Wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const o=new Mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return oi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,oi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oi(e,t)}buildRequest(){const e={requestUri:mb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(n,e){return dn(n,"POST","/v1/accounts:sendVerificationCode",Sn(n,e))}async function vb(n,e){return jo(n,"POST","/v1/accounts:signInWithPhoneNumber",Sn(n,e))}async function gb(n,e){const t=await jo(n,"POST","/v1/accounts:signInWithPhoneNumber",Sn(n,e));if(t.temporaryProof)throw zi(n,"account-exists-with-different-credential",t);return t}const _b={USER_NOT_FOUND:"user-not-found"};async function bb(n,e){const t={...e,operation:"REAUTH"};return jo(n,"POST","/v1/accounts:signInWithPhoneNumber",Sn(n,t),_b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends Wl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Yi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Yi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return vb(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return gb(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return bb(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Yi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xs extends nf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends xs{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Jn.credential(t,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends xs{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends xs{constructor(){super("twitter.com")}static credential(e,t){return Mr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Zn.credential(t,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await sn._fromIdTokenResponse(e,r,i),o=bu(r);return new mi({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=bu(r);return new mi({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function bu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends gr{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new fo(e,t,r,i)}}function rf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(n,s,e,r):s})}async function wb(n,e,t=!1){const r=await as(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mi._forOperation(n,"link",r)}/**
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
 */async function yb(n,e,t=!1){const{auth:r}=n;if(tn(r.app))return Promise.reject(cr(r));const i="reauthenticate";try{const s=await as(n,rf(r,i,e,n),t);D(s.idToken,r,"internal-error");const o=ql(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(n.uid===a,r,"user-mismatch"),mi._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Un(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sf(n,e,t=!1){if(tn(n.app))return Promise.reject(cr(n));const r="signIn",i=await rf(n,r,e),s=await mi._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Eb(n,e){return sf(_r(n),e)}function Cb(n,e,t,r){return pt(n).onIdTokenChanged(e,t,r)}function Ib(n,e,t){return pt(n).beforeAuthStateChanged(e,t)}function Tb(n,e,t,r){return pt(n).onAuthStateChanged(e,t,r)}function kb(n){return pt(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n,e){return dn(n,"POST","/v2/accounts/mfaEnrollment:start",Sn(n,e))}const po="__sak";/**
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
 */class of{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=1e3,xb=10;class af extends of{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);V_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xb):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}af.type="LOCAL";const Ab=af;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends of{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lf.type="SESSION";const cf=lf;/**
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
 */function Rb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ho(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await Rb(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ho.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Pb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Vl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const u=h;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return window}function Nb(n){ze().location.href=n}/**
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
 */function Bl(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function Lb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ob(){return navigator?.serviceWorker?.controller||null}function Db(){return Bl()?self:null}/**
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
 */const uf="firebaseLocalStorageDb",Mb=1,mo="firebaseLocalStorage",df="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wo(n,e){return n.transaction([mo],e?"readwrite":"readonly").objectStore(mo)}function $b(){const n=indexedDB.deleteDatabase(uf);return new As(n).toPromise()}function Ka(){const n=indexedDB.open(uf,Mb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(mo,{keyPath:df})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(mo)?e(r):(r.close(),await $b(),e(await Ka()))})})}async function yu(n,e,t){const r=Wo(n,!0).put({[df]:e,value:t});return new As(r).toPromise()}async function Fb(n,e){const t=Wo(n,!1).get(e),r=await new As(t).toPromise();return r===void 0?null:r.value}function Eu(n,e){const t=Wo(n,!0).delete(e);return new As(t).toPromise()}const zb=800,Ub=3;class hf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ka(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ub)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ho._getInstance(Db()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Lb(),!this.activeServiceWorker)return;this.sender=new Pb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ob()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ka();return await yu(e,po,"1"),await Eu(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Eu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wo(i,!1).getAll();return new As(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hf.type="LOCAL";const qb=hf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n,e){return dn(n,"POST","/v2/accounts/mfaSignIn:start",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=Zh("rcb"),jb=new ks(3e4,6e4);class Hb{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!ze().grecaptcha?.render}load(e,t=""){return D(Wb(t),e,"argument-error"),this.shouldResolveImmediately(t)&&uu(ze().grecaptcha)?Promise.resolve(ze().grecaptcha):new Promise((r,i)=>{const s=ze().setTimeout(()=>{i(Dt(e,"network-request-failed"))},jb.get());ze()[ba]=()=>{ze().clearTimeout(s),delete ze()[ba];const a=ze().grecaptcha;if(!a||!uu(a)){i(Dt(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const h=l(c,d);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${X_()}?${Wr({onload:ba,render:"explicit",hl:t})}`;Hl(o).catch(()=>{clearTimeout(s),i(Dt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!ze().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Wb(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Vb{async load(e){return new rb(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="recaptcha",Bb={theme:"light",type:"image"};class Gb{constructor(e,t,r={...Bb}){this.parameters=r,this.type=Qi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=_r(e),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Vb:new Hb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ze()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(Mh()&&!Bl(),this.auth,"internal-error"),await Kb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await D_(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Kb(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Yi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Qb(n,e,t){if(tn(n.app))return Promise.reject(cr(n));const r=_r(n),i=await Jb(r,e,pt(t));return new Yb(i,s=>Eb(r,s))}async function Jb(n,e,t){if(!n._getRecaptchaConfig())try{await cb(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){D(i.type==="enroll",n,"internal-error");const s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await _a(n,s,"mfaSmsEnrollment",async(c,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Ki){D(t?.type===Qi,c,"argument-error");const h=await wa(c,d,t);return wu(c,h)}return wu(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{D(i.type==="signin",n,"internal-error");const s=r.multiFactorHint?.uid||r.multiFactorUid;D(s,n,"missing-multi-factor-info");const o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await _a(n,o,"mfaSmsSignIn",async(d,h)=>{if(h.phoneSignInInfo.captchaResponse===Ki){D(t?.type===Qi,d,"argument-error");const u=await wa(d,h,t);return Cu(d,u)}return Cu(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await _a(n,i,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===Ki){D(t?.type===Qi,l,"argument-error");const d=await wa(l,c,t);return _u(l,d)}return _u(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function wa(n,e,t){D(t.type===Qi,n,"argument-error");const r=await t.verify();D(typeof r=="string",n,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Xb(n,e){return e?Nn(e):(D(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Gl extends Wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zb(n){return sf(n.auth,new Gl(n),n.bypassAuthState)}function e1(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),yb(t,new Gl(n),n.bypassAuthState)}async function t1(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),wb(t,new Gl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zb;case"linkViaPopup":case"linkViaRedirect":return t1;case"reauthViaPopup":case"reauthViaRedirect":return e1;default:Un(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new ks(2e3,1e4);class ei extends ff{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Vl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n1.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="pendingRedirect",Ws=new Map;class i1 extends ff{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ws.get(this.auth._key());if(!e){try{const r=await s1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ws.set(this.auth._key(),e)}return this.bypassAuthState||Ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s1(n,e){const t=l1(e),r=a1(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function o1(n,e){Ws.set(n._key(),e)}function a1(n){return Nn(n._redirectPersistence)}function l1(n){return Hs(r1,n.config.apiKey,n.name)}async function c1(n,e,t=!1){if(tn(n.app))return Promise.reject(cr(n));const r=_r(n),i=Xb(r,e),o=await new i1(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=600*1e3;class d1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!h1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!pf(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Dt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Iu(e))}saveEventToCache(e){this.cachedEventUids.add(Iu(e)),this.lastProcessedEventTime=Date.now()}}function Iu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function h1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(n,e={}){return dn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m1=/^https?/;async function v1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await f1(n);for(const t of e)try{if(g1(t))return}catch{}Un(n,"unauthorized-domain")}function g1(n){const e=Ba(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!m1.test(t))return!1;if(p1.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _1=new ks(3e4,6e4);function Tu(){const n=ze().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function b1(n){return new Promise((e,t)=>{function r(){Tu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tu(),t(Dt(n,"network-request-failed"))},timeout:_1.get()})}if(ze().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ze().gapi?.load)r();else{const i=Zh("iframefcb");return ze()[i]=()=>{gapi.load?r():t(Dt(n,"network-request-failed"))},Hl(`${eb()}?onload=${i}`).catch(s=>t(s))}}).catch(e=>{throw Vs=null,e})}let Vs=null;function w1(n){return Vs=Vs||b1(n),Vs}/**
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
 */const y1=new ks(5e3,15e3),E1="__/auth/iframe",C1="emulator/auth/iframe",I1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k1(n){const e=n.config;D(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ul(e,C1):`https://${n.config.authDomain}/${E1}`,r={apiKey:e.apiKey,appName:n.name,v:Ti},i=T1.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Wr(r).slice(1)}`}async function S1(n){const e=await w1(n),t=ze().gapi;return D(t,n,"internal-error"),e.open({where:document.body,url:k1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(n,"network-request-failed"),a=ze().setTimeout(()=>{s(o)},y1.get());function l(){ze().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const x1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A1=500,R1=600,P1="_blank",N1="http://localhost";class ku{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L1(n,e,t,r=A1,i=R1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...x1,width:r.toString(),height:i.toString(),top:s,left:o},c=bt().toLowerCase();t&&(a=Bh(c)?P1:t),Wh(c)&&(e=e||N1,l.scrollbars="yes");const d=Object.entries(l).reduce((u,[m,v])=>`${u}${m}=${v},`,"");if(W_(c)&&a!=="_self")return O1(e||"",a),new ku(null);const h=window.open(e||"",a,d);D(h,n,"popup-blocked");try{h.focus()}catch{}return new ku(h)}function O1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const D1="__/auth/handler",M1="emulator/auth/handler",$1=encodeURIComponent("fac");async function Su(n,e,t,r,i,s){D(n.config.authDomain,n,"auth-domain-config-required"),D(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ti,eventId:i};if(e instanceof nf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ua(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof xs){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${$1}=${encodeURIComponent(l)}`:"";return`${F1(n)}?${Wr(a).slice(1)}${c}`}function F1({config:n}){return n.emulator?Ul(n,M1):`https://${n.authDomain}/${D1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="webStorageSupport";class z1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cf,this._completeRedirectFn=c1,this._overrideRedirectResult=o1}async _openPopup(e,t,r,i){qn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Su(e,t,r,Ba(),i);return L1(e,s,Vl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Su(e,t,r,Ba(),i);return Nb(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await S1(e),r=new d1(e);return t.register("authEvent",i=>(D(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ya,{type:ya},i=>{const s=i?.[0]?.[ya];s!==void 0&&t(!!s),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=v1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jh()||Vh()||jl()}}const U1=z1;var xu="@firebase/auth",Au="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H1(n){pi(new Dr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xh(n)},c=new Q_(r,i,s,l);return db(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pi(new Dr("auth-internal",e=>{const t=_r(e.getProvider("auth").getImmediate());return(r=>new q1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(xu,Au,j1(n)),lr(xu,Au,"esm2020")}/**
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
 */const W1=300,V1=Eh("authIdTokenMaxAge")||W1;let Ru=null;const B1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>V1)return;const i=t?.token;Ru!==i&&(Ru=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function G1(n=Rh()){const e=Fl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ub(n,{popupRedirectResolver:U1,persistence:[qb,Ab,cf]}),r=Eh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=B1(s.toString());Ib(t,o,()=>o(t.currentUser)),Cb(t,a=>o(a))}}const i=wh("auth");return i&&hb(t,`http://${i}`),t}function K1(){return document.getElementsByTagName("head")?.[0]??document}J_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",K1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H1("Browser");var Pu={};const Nu="@firebase/database",Lu="1.1.0";/**
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
 */let mf="";function Y1(n){mf=n}/**
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
 */class Q1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ss(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class J1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return kn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const vf=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Q1(e)}}catch{}return new J1},kr=vf("localStorage"),X1=vf("sessionStorage");/**
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
 */const ai=new Ml("@firebase/database"),Z1=(function(){let n=1;return function(){return n++}})(),gf=function(n){const e=mg(n),t=new dg;t.update(e);const r=t.digest();return Ll.encodeByteArray(r)},Rs=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Rs.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let Ji=null,Ou=!0;const e0=function(n,e){x(!0,"Can't turn on custom loggers persistently."),ai.logLevel=Ie.VERBOSE,Ji=ai.log.bind(ai)},it=function(...n){if(Ou===!0&&(Ou=!1,Ji===null&&X1.get("logging_enabled")===!0&&e0()),Ji){const e=Rs.apply(null,n);Ji(e)}},Ps=function(n){return function(...e){it(n,...e)}},Ya=function(...n){const e="FIREBASE INTERNAL ERROR: "+Rs(...n);ai.error(e)},jn=function(...n){const e=`FIREBASE FATAL ERROR: ${Rs(...n)}`;throw ai.error(e),new Error(e)},_t=function(...n){const e="FIREBASE WARNING: "+Rs(...n);ai.warn(e)},t0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},n0=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},$r="[MIN_NAME]",hr="[MAX_NAME]",Vr=function(n,e){if(n===e)return 0;if(n===$r||e===hr)return-1;if(e===$r||n===hr)return 1;{const t=Du(n),r=Du(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},r0=function(n,e){return n===e?0:n<e?-1:1},Oi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ze(e))},Yl=function(n){if(typeof n!="object"||n===null)return Ze(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ze(e[r]),t+=":",t+=Yl(n[e[r]]);return t+="}",t},_f=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function ot(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const bf=function(n){x(!Kl(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,l;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},i0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},s0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function o0(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const a0=new RegExp("^-?(0*)\\d{1,10}$"),l0=-2147483648,c0=2147483647,Du=function(n){if(a0.test(n)){const e=Number(n);if(e>=l0&&e<=c0)return e}return null},ki=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw _t("Exception was thrown by user callback.",t),e},Math.floor(0))}},u0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class d0{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,tn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){_t(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class h0{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_t(e)}}class Bs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bs.OWNER="owner";/**
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
 */const Ql="5",wf="v",yf="s",Ef="r",Cf="f",If=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tf="ls",kf="p",Qa="ac",Sf="websocket",xf="long_polling";/**
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
 */class Af{constructor(e,t,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function f0(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Rf(n,e,t){x(typeof e=="string","typeof type must == string"),x(typeof t=="object","typeof params must == object");let r;if(e===Sf)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===xf)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);f0(n)&&(t.ns=n.namespace);const i=[];return ot(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class p0{constructor(){this.counters_={}}incrementCounter(e,t=1){kn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Wv(this.counters_)}}/**
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
 */const Ea={},Ca={};function Jl(n){const e=n.toString();return Ea[e]||(Ea[e]=new p0),Ea[e]}function m0(n,e){const t=n.toString();return Ca[t]||(Ca[t]=e()),Ca[t]}/**
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
 */class v0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ki(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Mu="start",g0="close",_0="pLPCommand",b0="pRTLPCB",Pf="id",Nf="pw",Lf="ser",w0="cb",y0="seg",E0="ts",C0="d",I0="dframe",Of=1870,Df=30,T0=Of-Df,k0=25e3,S0=3e4;class ti{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ps(e),this.stats_=Jl(t),this.urlFn=l=>(this.appCheckToken&&(l[Qa]=this.appCheckToken),Rf(t,xf,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new v0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(S0)),n0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xl((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mu)this.id=a,this.password=l;else if(o===g0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Mu]="t",r[Lf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[w0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wf]=Ql,this.transportSessionId&&(r[yf]=this.transportSessionId),this.lastSessionId&&(r[Tf]=this.lastSessionId),this.applicationId&&(r[kf]=this.applicationId),this.appCheckToken&&(r[Qa]=this.appCheckToken),typeof location<"u"&&location.hostname&&If.test(location.hostname)&&(r[Ef]=Cf);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ti.forceAllow_=!0}static forceDisallow(){ti.forceDisallow_=!0}static isAvailable(){return ti.forceAllow_?!0:!ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!i0()&&!s0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ze(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=_h(t),i=_f(r,T0);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[I0]="t",r[Pf]=e,r[Nf]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ze(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xl{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Z1(),window[_0+this.uniqueCallbackIdentifier]=e,window[b0+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xl.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){it("frame writing exception"),a.stack&&it(a.stack),it(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Pf]=this.myID,e[Nf]=this.myPW,e[Lf]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Df+r.length<=Of;){const o=this.pendingSegs.shift();r=r+"&"+y0+i+"="+o.seg+"&"+E0+i+"="+o.ts+"&"+C0+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(k0)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const x0=16384,A0=45e3;let vo=null;typeof MozWebSocket<"u"?vo=MozWebSocket:typeof WebSocket<"u"&&(vo=WebSocket);class nn{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ps(this.connId),this.stats_=Jl(t),this.connURL=nn.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[wf]=Ql,typeof location<"u"&&location.hostname&&If.test(location.hostname)&&(o[Ef]=Cf),t&&(o[yf]=t),r&&(o[Tf]=r),i&&(o[Qa]=i),s&&(o[kf]=s),Rf(e,Sf,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kr.set("previous_websocket_failure",!0);try{let r;rg(),this.mySock=new vo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vo!==null&&!nn.forceDisallow_}static previouslyFailed(){return kr.isInMemoryStorage||kr.get("previous_websocket_failure")===!0}markConnectionHealthy(){kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=ss(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ze(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=_f(t,x0);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(A0))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nn.responsesRequiredToBeHealthy=2;nn.healthyTimeout=3e4;/**
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
 */class ls{static get ALL_TRANSPORTS(){return[ti,nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=nn&&nn.isAvailable();let r=t&&!nn.previouslyFailed();if(e.webSocketOnly&&(t||_t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nn];else{const i=this.transports_=[];for(const s of ls.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
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
 */const R0=6e4,P0=5e3,N0=10*1024,L0=100*1024,Ia="t",$u="d",O0="s",Fu="r",D0="e",zu="o",Uu="a",qu="n",ju="p",M0="h";class $0{constructor(e,t,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ps("c:"+this.id+":"),this.transportManager_=new ls(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>L0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>N0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ia in e){const t=e[Ia];t===Uu?this.upgradeIfSecondaryHealthy_():t===Fu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Oi("t",e),r=Oi("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ju,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Oi("t",e),r=Oi("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Oi(Ia,e);if($u in e){const r=e[$u];if(t===M0){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===qu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===O0?this.onConnectionShutdown_(r):t===Fu?this.onReset_(r):t===D0?Ya("Server Error: "+r):t===zu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ya("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ql!==r&&_t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Xi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(R0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(P0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ju,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Mf{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class $f{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class go extends $f{static getInstance(){return new go}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hu=32,Wu=768;class ye{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function be(){return new ye("")}function oe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function fr(n){return n.pieces_.length-n.pieceNum_}function xe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ye(n.pieces_,e)}function Zl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function F0(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function cs(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ff(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ye(e,0)}function Ne(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new ye(t,0)}function ae(n){return n.pieceNum_>=n.pieces_.length}function Ct(n,e){const t=oe(n),r=oe(e);if(t===null)return e;if(t===r)return Ct(xe(n),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function z0(n,e){const t=cs(n,0),r=cs(e,0);for(let i=0;i<t.length&&i<r.length;i++){const s=Vr(t[i],r[i]);if(s!==0)return s}return t.length===r.length?0:t.length<r.length?-1:1}function ec(n,e){if(fr(n)!==fr(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Wt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(fr(n)>fr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class U0{constructor(e,t){this.errorPrefix_=t,this.parts_=cs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=qo(this.parts_[r]);zf(this)}}function q0(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=qo(e),zf(n)}function j0(n){const e=n.parts_.pop();n.byteLength_-=qo(e),n.parts_.length>0&&(n.byteLength_-=1)}function zf(n){if(n.byteLength_>Wu)throw new Error(n.errorPrefix_+"has a key path longer than "+Wu+" bytes ("+n.byteLength_+").");if(n.parts_.length>Hu)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hu+") or object contains a cycle "+Ir(n))}function Ir(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class tc extends $f{static getInstance(){return new tc}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Di=1e3,H0=300*1e3,Vu=30*1e3,W0=1.3,V0=3e4,B0="server_kill",Bu=3;class Fn extends Mf{constructor(e,t,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=Ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=H0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&go.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Ze(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Is,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Fn.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&kn(e,"w")){const r=fi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();_t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ug(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=cg(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ya("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>V0&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*W0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new $0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,m=>{_t(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(B0)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&_t(h),l())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ua(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>Yl(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){it("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bu&&(this.reconnectDelay_=Vu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){it("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+mf.replace(/\./g,"-")]=1,Dl()?e["framework.cordova"]=1:Th()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=go.getInstance().currentlyOnline();return Ua(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
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
 */class le{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new le(e,t)}}/**
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
 */class Vo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new le($r,e),i=new le($r,t);return this.compare(r,i)!==0}minPost(){return le.MIN}}/**
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
 */let zs;class Uf extends Vo{static get __EMPTY_NODE(){return zs}static set __EMPTY_NODE(e){zs=e}compare(e,t){return Vr(e.name,t.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return le.MIN}maxPost(){return new le(hr,zs)}makePost(e,t){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,zs)}toString(){return".key"}}const Ar=new Uf;/**
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
 */class Us{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Je.RED,this.left=i??It.EMPTY_NODE,this.right=s??It.EMPTY_NODE}copy(e,t,r,i,s){return new Je(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return It.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class G0{copy(e,t,r,i,s){return this}insert(e,t,r){return new Je(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,t=It.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new It(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Us(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Us(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Us(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Us(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new G0;/**
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
 */function K0(n,e){return Vr(n.name,e.name)}function nc(n,e){return Vr(n,e)}/**
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
 */let Ja;function Y0(n){Ja=n}const qf=function(n){return typeof n=="number"?"number:"+bf(n):"string:"+n},jf=function(n){if(n.isLeafNode()){const e=n.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kn(e,".sv"),"Priority must be a string or number.")}else x(n===Ja||n.isEmpty(),"priority of unexpected type.");x(n===Ja||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gu;class Qe{static set __childrenNodeConstructor(e){Gu=e}static get __childrenNodeConstructor(){return Gu}constructor(e,t=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:oe(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=oe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qf(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=bf(this.value_):e+=this.value_,this.lazyHash_=gf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(t),s=Qe.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+t),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Hf,Wf;function Q0(n){Hf=n}function J0(n){Wf=n}class X0 extends Vo{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?Vr(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return le.MIN}maxPost(){return new le(hr,new Qe("[PRIORITY-POST]",Wf))}makePost(e,t){const r=Hf(e);return new le(t,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Pe=new X0;/**
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
 */const Z0=Math.log(2);class ew{constructor(e){const t=s=>parseInt(Math.log(s)/Z0,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _o=function(n,e,t,r){n.sort(e);const i=function(l,c){const d=c-l;let h,u;if(d===0)return null;if(d===1)return h=n[l],u=t?t(h):h,new Je(u,h.node,Je.BLACK,null,null);{const m=parseInt(d/2,10)+l,v=i(l,m),b=i(m+1,c);return h=n[m],u=t?t(h):h,new Je(u,h.node,Je.BLACK,v,b)}},s=function(l){let c=null,d=null,h=n.length;const u=function(v,b){const C=h-v,S=h;h-=v;const k=i(C+1,S),P=n[C],N=t?t(P):P;m(new Je(N,P.node,b,null,k))},m=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<l.count;++v){const b=l.nextBitIsOne(),C=Math.pow(2,l.count-(v+1));b?u(C,Je.BLACK):(u(C,Je.BLACK),u(C,Je.RED))}return d},o=new ew(n.length),a=s(o);return new It(r||e,a)};/**
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
 */let Ta;const Jr={};class Ln{static get Default(){return x(Jr&&Pe,"ChildrenNode.ts has not been loaded"),Ta=Ta||new Ln({".priority":Jr},{".priority":Pe}),Ta}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=fi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof It?t:null}hasIndex(e){return kn(this.indexSet_,e.toString())}addIndex(e,t){x(e!==Ar,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(le.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=_o(r,e.getCompare()):a=Jr;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Ln(d,c)}addToIndexes(e,t){const r=ao(this.indexes_,(i,s)=>{const o=fi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Jr)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(le.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),_o(a,o.getCompare())}else return Jr;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new le(e.name,a))),l.insert(e,e.node)}});return new Ln(r,this.indexSet_)}removeFromIndexes(e,t){const r=ao(this.indexes_,i=>{if(i===Jr)return i;{const s=t.get(e.name);return s?i.remove(new le(e.name,s)):i}});return new Ln(r,this.indexSet_)}}/**
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
 */let Mi;class W{static get EMPTY_NODE(){return Mi||(Mi=new W(new It(nc),null,Ln.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jf(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mi}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Mi:t}}getChild(e){const t=oe(e);return t===null?this:this.getImmediateChild(t).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(x(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new le(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Mi:this.priorityNode_;return new W(i,o,s)}}updateChild(e,t){const r=oe(e);if(r===null)return t;{x(oe(e)!==".priority"||fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(xe(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(Pe,(o,a)=>{t[o]=a.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qf(this.getPriority().val())+":"),this.forEachChild(Pe,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":gf(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new le(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new le(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new le(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ns?-1:0}withIndex(e){if(e===Ar||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ar||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Pe),i=t.getIterator(Pe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ar?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tw extends W{constructor(){super(new It(nc),W.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Ns=new tw;Object.defineProperties(le,{MIN:{value:new le($r,W.EMPTY_NODE)},MAX:{value:new le(hr,Ns)}});Uf.__EMPTY_NODE=W.EMPTY_NODE;Qe.__childrenNodeConstructor=W;Y0(Ns);J0(Ns);/**
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
 */const nw=!0;function Xe(n,e=null){if(n===null)return W.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Qe(t,Xe(e))}if(!(n instanceof Array)&&nw){const t=[];let r=!1;if(ot(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Xe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new le(o,l)))}}),t.length===0)return W.EMPTY_NODE;const s=_o(t,K0,o=>o.name,nc);if(r){const o=_o(t,Pe.getCompare());return new W(s,Xe(e),new Ln({".priority":o},{".priority":Pe}))}else return new W(s,Xe(e),Ln.Default)}else{let t=W.EMPTY_NODE;return ot(n,(r,i)=>{if(kn(n,r)&&r.substring(0,1)!=="."){const s=Xe(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(Xe(e))}}Q0(Xe);/**
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
 */class rc extends Vo{constructor(e){super(),this.indexPath_=e,x(!ae(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?Vr(e.name,t.name):s}makePost(e,t){const r=Xe(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(t,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Ns);return new le(hr,e)}toString(){return cs(this.indexPath_,0).join("/")}}/**
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
 */class rw extends Vo{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Vr(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,t){const r=Xe(e);return new le(t,r)}toString(){return".value"}}const Vf=new rw;/**
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
 */function Bf(n){return{type:"value",snapshotNode:n}}function vi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function us(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ds(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function iw(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ic{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(us(t,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vi(t,r)):o.trackChildChange(ds(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Pe,(i,s)=>{t.hasChild(i)||r.trackChildChange(us(i,s))}),t.isLeafNode()||t.forEachChild(Pe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ds(i,s,o))}else r.trackChildChange(vi(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class hs{constructor(e){this.indexedFilter_=new ic(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new le(t,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=W.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return t.forEachChild(Pe,(o,a)=>{s.matches(new le(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class sw{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new le(t,r))||(r=W.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,m)=>h(m,u)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new le(t,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const m=u==null?1:o(u,l);if(d&&!r.isEmpty()&&m>=0)return s?.trackChildChange(ds(t,r,h)),a.updateImmediateChild(t,r);{s?.trackChildChange(us(t,h));const b=a.updateImmediateChild(t,W.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(s?.trackChildChange(vi(u.name,u.node)),b.updateImmediateChild(u.name,u.node)):b}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(us(c.name,c.node)),s.trackChildChange(vi(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
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
 */class sc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$r}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new sc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ow(n){return n.loadsAllData()?new ic(n.getIndex()):n.hasLimit()?new sw(n):new hs(n)}function aw(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function lw(n,e){const t=n.copy();return t.index_=e,t}function Ku(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Pe?t="$priority":n.index_===Vf?t="$value":n.index_===Ar?t="$key":(x(n.index_ instanceof rc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ze(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ze(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ze(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ze(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Yu(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Pe&&(e.i=n.index_.toString()),e}/**
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
 */class bo extends Mf{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ps("p:rest:"),this.listens_={}}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=bo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ku(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),fi(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,t){const r=bo.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Ku(e._queryParams),r=e._path.toString(),i=new Is;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ss(a.responseText)}catch{_t("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&_t("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class cw{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function wo(){return{value:null,children:new Map}}function Gf(n,e,t){if(ae(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=oe(e);n.children.has(r)||n.children.set(r,wo());const i=n.children.get(r);e=xe(e),Gf(i,e,t)}}function Xa(n,e,t){n.value!==null?t(e,n.value):uw(n,(r,i)=>{const s=new ye(e.toString()+"/"+r);Xa(i,s,t)})}function uw(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class dw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&ot(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const Qu=10*1e3,hw=30*1e3,fw=300*1e3;class pw{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new dw(e);const r=Qu+(hw-Qu)*Math.random();Xi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;ot(e,(i,s)=>{s>0&&kn(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),Xi(this.reportStats_.bind(this),Math.floor(Math.random()*2*fw))}}/**
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
 */var on;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(on||(on={}));function oc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ac(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class yo{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=on.ACK_USER_WRITE,this.source=oc()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ye(e));return new yo(be(),t,this.revert)}}else return x(oe(this.path)===e,"operationForChild called for unrelated child."),new yo(xe(this.path),this.affectedTree,this.revert)}}/**
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
 */class fs{constructor(e,t){this.source=e,this.path=t,this.type=on.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new fs(this.source,be()):new fs(this.source,xe(this.path))}}/**
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
 */class Fr{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=on.OVERWRITE}operationForChild(e){return ae(this.path)?new Fr(this.source,be(),this.snap.getImmediateChild(e)):new Fr(this.source,xe(this.path),this.snap)}}/**
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
 */class gi{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=on.MERGE}operationForChild(e){if(ae(this.path)){const t=this.children.subtree(new ye(e));return t.isEmpty()?null:t.value?new Fr(this.source,be(),t.value):new gi(this.source,be(),t)}else return x(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gi(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class zr{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const t=oe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class mw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vw(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(iw(o.childName,o.snapshotNode))}),$i(n,i,"child_removed",e,r,t),$i(n,i,"child_added",e,r,t),$i(n,i,"child_moved",s,r,t),$i(n,i,"child_changed",e,r,t),$i(n,i,"value",e,r,t),i}function $i(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,l)=>_w(n,a,l)),o.forEach(a=>{const l=gw(n,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function gw(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function _w(n,e,t){if(e.childName==null||t.childName==null)throw Ci("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),i=new le(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function Bo(n,e){return{eventCache:n,serverCache:e}}function Zi(n,e,t,r){return Bo(new zr(e,t,r),n.serverCache)}function Kf(n,e,t,r){return Bo(n.eventCache,new zr(e,t,r))}function Za(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ur(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ka;const bw=()=>(ka||(ka=new It(r0)),ka);class Se{static fromObject(e){let t=new Se(null);return ot(e,(r,i)=>{t=t.set(new ye(r),i)}),t}constructor(e,t=bw()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:be(),value:this.value};if(ae(e))return null;{const r=oe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(xe(e),t);return s!=null?{path:Ne(new ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const t=oe(e),r=this.children.get(t);return r!==null?r.subtree(xe(e)):new Se(null)}}set(e,t){if(ae(e))return new Se(t,this.children);{const r=oe(e),s=(this.children.get(r)||new Se(null)).set(xe(e),t),o=this.children.insert(r,s);return new Se(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const t=oe(e),r=this.children.get(t);if(r){const i=r.remove(xe(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new Se(null):new Se(this.value,s)}else return this}}get(e){if(ae(e))return this.value;{const t=oe(e),r=this.children.get(t);return r?r.get(xe(e)):null}}setTree(e,t){if(ae(e))return t;{const r=oe(e),s=(this.children.get(r)||new Se(null)).setTree(xe(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Se(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ne(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,be(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(ae(e))return null;{const s=oe(e),o=this.children.get(s);return o?o.findOnPath_(xe(e),Ne(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,be(),t)}foreachOnPath_(e,t,r){if(ae(e))return this;{this.value&&r(t,this.value);const i=oe(e),s=this.children.get(i);return s?s.foreachOnPath_(xe(e),Ne(t,i),r):new Se(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Ne(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Se(null))}}function es(n,e,t){if(ae(e))return new an(new Se(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ct(i,e);return s=s.updateChild(o,t),new an(n.writeTree_.set(i,s))}else{const i=new Se(t),s=n.writeTree_.setTree(e,i);return new an(s)}}}function el(n,e,t){let r=n;return ot(t,(i,s)=>{r=es(r,Ne(e,i),s)}),r}function Ju(n,e){if(ae(e))return an.empty();{const t=n.writeTree_.setTree(e,new Se(null));return new an(t)}}function tl(n,e){return Br(n,e)!=null}function Br(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ct(t.path,e)):null}function Xu(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Pe,(r,i)=>{e.push(new le(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new le(r,i.value))}),e}function ur(n,e){if(ae(e))return n;{const t=Br(n,e);return t!=null?new an(new Se(t)):new an(n.writeTree_.subtree(e))}}function nl(n){return n.writeTree_.isEmpty()}function _i(n,e){return Yf(be(),n.writeTree_,e)}function Yf(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=Yf(Ne(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Ne(n,".priority"),r)),t}}/**
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
 */function cc(n,e){return Zf(e,n)}function ww(n,e,t,r,i){x(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=es(n.visibleWrites,e,t)),n.lastWriteId=r}function yw(n,e,t,r){x(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=el(n.visibleWrites,e,t),n.lastWriteId=r}function Ew(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Cw(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);x(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Iw(a,r.path)?i=!1:Wt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Tw(n),!0;if(r.snap)n.visibleWrites=Ju(n.visibleWrites,r.path);else{const a=r.children;ot(a,l=>{n.visibleWrites=Ju(n.visibleWrites,Ne(r.path,l))})}return!0}else return!1}function Iw(n,e){if(n.snap)return Wt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Wt(Ne(n.path,t),e))return!0;return!1}function Tw(n){n.visibleWrites=Qf(n.allWrites,kw,be()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function kw(n){return n.visible}function Qf(n,e,t){let r=an.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)Wt(t,o)?(a=Ct(t,o),r=es(r,a,s.snap)):Wt(o,t)&&(a=Ct(o,t),r=es(r,be(),s.snap.getChild(a)));else if(s.children){if(Wt(t,o))a=Ct(t,o),r=el(r,a,s.children);else if(Wt(o,t))if(a=Ct(o,t),ae(a))r=el(r,be(),s.children);else{const l=fi(s.children,oe(a));if(l){const c=l.getChild(xe(a));r=es(r,be(),c)}}}else throw Ci("WriteRecord should have .snap or .children")}}return r}function Jf(n,e,t,r,i){if(!r&&!i){const s=Br(n.visibleWrites,e);if(s!=null)return s;{const o=ur(n.visibleWrites,e);if(nl(o))return t;if(t==null&&!tl(o,be()))return null;{const a=t||W.EMPTY_NODE;return _i(o,a)}}}else{const s=ur(n.visibleWrites,e);if(!i&&nl(s))return t;if(!i&&t==null&&!tl(s,be()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Wt(c.path,e)||Wt(e,c.path))},a=Qf(n.allWrites,o,e),l=t||W.EMPTY_NODE;return _i(a,l)}}}function Sw(n,e,t){let r=W.EMPTY_NODE;const i=Br(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Pe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=ur(n.visibleWrites,e);return t.forEachChild(Pe,(o,a)=>{const l=_i(ur(s,new ye(o)),a);r=r.updateImmediateChild(o,l)}),Xu(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ur(n.visibleWrites,e);return Xu(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function xw(n,e,t,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ne(e,t);if(tl(n.visibleWrites,s))return null;{const o=ur(n.visibleWrites,s);return nl(o)?i.getChild(t):_i(o,i.getChild(t))}}function Aw(n,e,t,r){const i=Ne(e,t),s=Br(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=ur(n.visibleWrites,i);return _i(o,r.getNode().getImmediateChild(t))}else return null}function Rw(n,e){return Br(n.visibleWrites,e)}function Pw(n,e,t,r,i,s,o){let a;const l=ur(n.visibleWrites,e),c=Br(l,be());if(c!=null)a=c;else if(t!=null)a=_i(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=u.getNext();for(;m&&d.length<i;)h(m,r)!==0&&d.push(m),m=u.getNext();return d}else return[]}function Nw(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function Eo(n,e,t,r){return Jf(n.writeTree,n.treePath,e,t,r)}function uc(n,e){return Sw(n.writeTree,n.treePath,e)}function Zu(n,e,t,r){return xw(n.writeTree,n.treePath,e,t,r)}function Co(n,e){return Rw(n.writeTree,Ne(n.treePath,e))}function Lw(n,e,t,r,i,s){return Pw(n.writeTree,n.treePath,e,t,r,i,s)}function dc(n,e,t){return Aw(n.writeTree,n.treePath,e,t)}function Xf(n,e){return Zf(Ne(n.treePath,e),n.writeTree)}function Zf(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Ow{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;x(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,ds(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,us(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,vi(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,ds(r,e.snapshotNode,i.oldSnap));else throw Ci("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Dw{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const ep=new Dw;class hc{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dc(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ur(this.viewCache_),s=Lw(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Mw(n){return{filter:n}}function $w(n,e){x(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Fw(n,e,t,r,i){const s=new Ow;let o,a;if(t.type===on.OVERWRITE){const c=t;c.source.fromUser?o=rl(n,e,c.path,c.snap,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=Io(n,e,c.path,c.snap,r,i,a,s))}else if(t.type===on.MERGE){const c=t;c.source.fromUser?o=Uw(n,e,c.path,c.children,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=il(n,e,c.path,c.children,r,i,a,s))}else if(t.type===on.ACK_USER_WRITE){const c=t;c.revert?o=Hw(n,e,c.path,r,i,s):o=qw(n,e,c.path,c.affectedTree,r,i,s)}else if(t.type===on.LISTEN_COMPLETE)o=jw(n,e,t.path,r,s);else throw Ci("Unknown operation type: "+t.type);const l=s.getChanges();return zw(e,o,l),{viewCache:o,changes:l}}function zw(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Za(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(Bf(Za(e)))}}function tp(n,e,t,r,i,s){const o=e.eventCache;if(Co(r,t)!=null)return e;{let a,l;if(ae(t))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ur(e),d=c instanceof W?c:W.EMPTY_NODE,h=uc(r,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=Eo(r,Ur(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=oe(t);if(c===".priority"){x(fr(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=Zu(r,t,d,l);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=xe(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Zu(r,t,o.getNode(),l);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=dc(r,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,d,i,s):a=o.getNode()}}return Zi(e,a,o.isFullyInitialized()||ae(t),n.filter.filtersNodes())}}function Io(n,e,t,r,i,s,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(ae(t))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(t,r);c=d.updateFullNode(l.getNode(),m,null)}else{const m=oe(t);if(!l.isCompleteForPath(t)&&fr(t)>1)return e;const v=xe(t),C=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?c=d.updatePriority(l.getNode(),C):c=d.updateChild(l.getNode(),m,C,v,ep,null)}const h=Kf(e,c,l.isFullyInitialized()||ae(t),d.filtersNodes()),u=new hc(i,h,s);return tp(n,h,t,i,u,a)}function rl(n,e,t,r,i,s,o){const a=e.eventCache;let l,c;const d=new hc(i,e,s);if(ae(t))c=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Zi(e,c,!0,n.filter.filtersNodes());else{const h=oe(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),r),l=Zi(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=xe(t),m=a.getNode().getImmediateChild(h);let v;if(ae(u))v=r;else{const b=d.getCompleteChild(h);b!=null?Zl(u)===".priority"&&b.getChild(Ff(u)).isEmpty()?v=b:v=b.updateChild(u,r):v=W.EMPTY_NODE}if(m.equals(v))l=e;else{const b=n.filter.updateChild(a.getNode(),h,v,u,d,o);l=Zi(e,b,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ed(n,e){return n.eventCache.isCompleteForChild(e)}function Uw(n,e,t,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Ne(t,l);ed(e,oe(d))&&(a=rl(n,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Ne(t,l);ed(e,oe(d))||(a=rl(n,a,d,c,i,s,o))}),a}function td(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function il(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ae(t)?c=r:c=new Se(null).setTree(t,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),v=td(n,m,u);l=Io(n,l,new ye(h),v,i,s,o,a)}}),c.children.inorderTraversal((h,u)=>{const m=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!m){const v=e.serverCache.getNode().getImmediateChild(h),b=td(n,v,u);l=Io(n,l,new ye(h),b,i,s,o,a)}}),l}function qw(n,e,t,r,i,s,o){if(Co(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ae(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Io(n,e,t,l.getNode().getChild(t),i,s,a,o);if(ae(t)){let c=new Se(null);return l.getNode().forEachChild(Ar,(d,h)=>{c=c.set(new ye(d),h)}),il(n,e,t,c,i,s,a,o)}else return e}else{let c=new Se(null);return r.foreach((d,h)=>{const u=Ne(t,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),il(n,e,t,c,i,s,a,o)}}function jw(n,e,t,r,i){const s=e.serverCache,o=Kf(e,s.getNode(),s.isFullyInitialized()||ae(t),s.isFiltered());return tp(n,o,t,r,ep,i)}function Hw(n,e,t,r,i,s){let o;if(Co(r,t)!=null)return e;{const a=new hc(r,e,i),l=e.eventCache.getNode();let c;if(ae(t)||oe(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Eo(r,Ur(e));else{const h=e.serverCache.getNode();x(h instanceof W,"serverChildren would be complete if leaf node"),d=uc(r,h)}d=d,c=n.filter.updateFullNode(l,d,s)}else{const d=oe(t);let h=dc(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=n.filter.updateChild(l,d,h,xe(t),a,s):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,W.EMPTY_NODE,xe(t),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eo(r,Ur(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Co(r,be())!=null,Zi(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Ww{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ic(r.getIndex()),s=ow(r);this.processor_=Mw(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(W.EMPTY_NODE,a.getNode(),null),d=new zr(l,o.isFullyInitialized(),i.filtersNodes()),h=new zr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bo(h,d),this.eventGenerator_=new mw(this.query_)}get query(){return this.query_}}function Vw(n){return n.viewCache_.serverCache.getNode()}function Bw(n,e){const t=Ur(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ae(e)&&!t.getImmediateChild(oe(e)).isEmpty())?t.getChild(e):null}function nd(n){return n.eventRegistrations_.length===0}function Gw(n,e){n.eventRegistrations_.push(e)}function rd(n,e,t){const r=[];if(t){x(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function id(n,e,t,r){e.type===on.MERGE&&e.source.queryId!==null&&(x(Ur(n.viewCache_),"We should always have a full cache before handling merges"),x(Za(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=Fw(n.processor_,i,e,t,r);return $w(n.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,np(n,s.changes,s.viewCache.eventCache.getNode(),null)}function Kw(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Pe,(s,o)=>{r.push(vi(s,o))}),t.isFullyInitialized()&&r.push(Bf(t.getNode())),np(n,r,t.getNode(),e)}function np(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return vw(n.eventGenerator_,e,t,i)}/**
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
 */let To;class Yw{constructor(){this.views=new Map}}function Qw(n){x(!To,"__referenceConstructor has already been defined"),To=n}function Jw(){return x(To,"Reference.ts has not been loaded"),To}function Xw(n){return n.views.size===0}function fc(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),id(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(id(o,e,t,r));return s}}function Zw(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=Eo(t,i?r:null),l=!1;a?l=!0:r instanceof W?(a=uc(t,r),l=!1):(a=W.EMPTY_NODE,l=!1);const c=Bo(new zr(a,l,!1),new zr(r,i,!1));return new Ww(e,c)}return o}function ey(n,e,t,r,i,s){const o=Zw(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Gw(o,t),Kw(o,t)}function ty(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const a=pr(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(rd(c,t,r)),nd(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(rd(l,t,r)),nd(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!pr(n)&&s.push(new(Jw())(e._repo,e._path)),{removed:s,events:o}}function rp(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function li(n,e){let t=null;for(const r of n.views.values())t=t||Bw(r,e);return t}function ip(n,e){if(e._queryParams.loadsAllData())return Go(n);{const r=e._queryIdentifier;return n.views.get(r)}}function sp(n,e){return ip(n,e)!=null}function pr(n){return Go(n)!=null}function Go(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ko;function ny(n){x(!ko,"__referenceConstructor has already been defined"),ko=n}function ry(){return x(ko,"Reference.ts has not been loaded"),ko}let iy=1;class sd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=Nw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function op(n,e,t,r,i){return ww(n.pendingWriteTree_,e,t,r,i),i?Si(n,new Fr(oc(),e,t)):[]}function sy(n,e,t,r){yw(n.pendingWriteTree_,e,t,r);const i=Se.fromObject(t);return Si(n,new gi(oc(),e,i))}function nr(n,e,t=!1){const r=Ew(n.pendingWriteTree_,e);if(Cw(n.pendingWriteTree_,e)){let s=new Se(null);return r.snap!=null?s=s.set(be(),!0):ot(r.children,o=>{s=s.set(new ye(o),!0)}),Si(n,new yo(r.path,s,t))}else return[]}function Ko(n,e,t){return Si(n,new Fr(ac(),e,t))}function oy(n,e,t){const r=Se.fromObject(t);return Si(n,new gi(ac(),e,r))}function ay(n,e){return Si(n,new fs(ac(),e))}function ly(n,e,t){const r=mc(n,t);if(r){const i=vc(r),s=i.path,o=i.queryId,a=Ct(s,e),l=new fs(lc(o),a);return gc(n,s,l)}else return[]}function sl(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||sp(o,e))){const l=ty(o,e,t,r);Xw(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(s,(u,m)=>pr(m));if(d&&!h){const u=n.syncPointTree_.subtree(s);if(!u.isEmpty()){const m=dy(u);for(let v=0;v<m.length;++v){const b=m[v],C=b.query,S=cp(n,b);n.listenProvider_.startListening(ts(C),So(n,C),S.hashFn,S.onComplete)}}}!h&&c.length>0&&!r&&(d?n.listenProvider_.stopListening(ts(e),null):c.forEach(u=>{const m=n.queryToTagMap.get(Yo(u));n.listenProvider_.stopListening(ts(u),m)}))}hy(n,c)}return a}function cy(n,e,t,r){const i=mc(n,r);if(i!=null){const s=vc(i),o=s.path,a=s.queryId,l=Ct(o,e),c=new Fr(lc(a),l,t);return gc(n,o,c)}else return[]}function uy(n,e,t,r){const i=mc(n,r);if(i){const s=vc(i),o=s.path,a=s.queryId,l=Ct(o,e),c=Se.fromObject(t),d=new gi(lc(a),l,c);return gc(n,o,d)}else return[]}function od(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,m)=>{const v=Ct(u,i);s=s||li(m,v),o=o||pr(m)});let a=n.syncPointTree_.get(i);a?(o=o||pr(a),s=s||li(a,be())):(a=new Yw,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=W.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,v)=>{const b=li(v,be());b&&(s=s.updateImmediateChild(m,b))}));const c=sp(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=Yo(e);x(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const m=fy();n.queryToTagMap.set(u,m),n.tagToQueryMap.set(m,u)}const d=cc(n.pendingWriteTree_,i);let h=ey(a,e,t,d,s,l);if(!c&&!o&&!r){const u=ip(a,e);h=h.concat(py(n,e,u))}return h}function pc(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ct(o,e),c=li(a,l);if(c)return c});return Jf(i,e,s,t,!0)}function Si(n,e){return ap(e,n.syncPointTree_,null,cc(n.pendingWriteTree_,be()))}function ap(n,e,t,r){if(ae(n.path))return lp(n,e,t,r);{const i=e.get(be());t==null&&i!=null&&(t=li(i,be()));let s=[];const o=oe(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=Xf(r,o);s=s.concat(ap(a,l,c,d))}return i&&(s=s.concat(fc(i,n,r,t))),s}}function lp(n,e,t,r){const i=e.get(be());t==null&&i!=null&&(t=li(i,be()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Xf(r,o),d=n.operationForChild(o);d&&(s=s.concat(lp(d,a,l,c)))}),i&&(s=s.concat(fc(i,n,r,t))),s}function cp(n,e){const t=e.query,r=So(n,t);return{hashFn:()=>(Vw(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ly(n,t._path,r):ay(n,t._path);{const s=o0(i,t);return sl(n,t,null,s)}}}}function So(n,e){const t=Yo(e);return n.queryToTagMap.get(t)}function Yo(n){return n._path.toString()+"$"+n._queryIdentifier}function mc(n,e){return n.tagToQueryMap.get(e)}function vc(n){const e=n.indexOf("$");return x(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ye(n.substr(0,e))}}function gc(n,e,t){const r=n.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=cc(n.pendingWriteTree_,e);return fc(r,t,i,null)}function dy(n){return n.fold((e,t,r)=>{if(t&&pr(t))return[Go(t)];{let i=[];return t&&(i=rp(t)),ot(r,(s,o)=>{i=i.concat(o)}),i}})}function ts(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ry())(n._repo,n._path):n}function hy(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=Yo(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function fy(){return iy++}function py(n,e,t){const r=e._path,i=So(n,e),s=cp(n,t),o=n.listenProvider_.startListening(ts(e),i,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(r);if(i)x(!pr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!ae(c)&&d&&pr(d))return[Go(d).query];{let u=[];return d&&(u=u.concat(rp(d).map(m=>m.query))),ot(h,(m,v)=>{u=u.concat(v)}),u}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(ts(d),So(n,d))}}return o}/**
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
 */class _c{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new _c(t)}node(){return this.node_}}class bc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ne(this.path_,e);return new bc(this.syncTree_,t)}node(){return pc(this.syncTree_,this.path_)}}const my=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ad=function(n,e,t){if(!n||typeof n!="object")return n;if(x(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return vy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return gy(n[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},vy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:x(!1,"Unexpected server value: "+n)}},gy=function(n,e,t){n.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},up=function(n,e,t,r){return wc(e,new bc(t,n),r)},dp=function(n,e,t){return wc(n,new _c(e),t)};function wc(n,e,t){const r=n.getPriority().val(),i=ad(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=ad(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,Xe(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Qe(i))),o.forEachChild(Pe,(a,l)=>{const c=wc(l,e.getImmediateChild(a),t);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class yc{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Ec(n,e){let t=e instanceof ye?e:new ye(e),r=n,i=oe(t);for(;i!==null;){const s=fi(r.node.children,i)||{children:{},childCount:0};r=new yc(i,r,s),t=xe(t),i=oe(t)}return r}function xi(n){return n.node.value}function hp(n,e){n.node.value=e,ol(n)}function fp(n){return n.node.childCount>0}function _y(n){return xi(n)===void 0&&!fp(n)}function Qo(n,e){ot(n.node.children,(t,r)=>{e(new yc(t,n,r))})}function pp(n,e,t,r){t&&e(n),Qo(n,i=>{pp(i,e,!0)})}function by(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ls(n){return new ye(n.parent===null?n.name:Ls(n.parent)+"/"+n.name)}function ol(n){n.parent!==null&&wy(n.parent,n.name,n)}function wy(n,e,t){const r=_y(t),i=kn(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,ol(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ol(n))}/**
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
 */const yy=/[\[\].#$\/\u0000-\u001F\u007F]/,Ey=/[\[\].#$\u0000-\u001F\u007F]/,Sa=10*1024*1024,Cc=function(n){return typeof n=="string"&&n.length!==0&&!yy.test(n)},mp=function(n){return typeof n=="string"&&n.length!==0&&!Ey.test(n)},Cy=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mp(n)},al=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Kl(n)||n&&typeof n=="object"&&kn(n,".sv")},vp=function(n,e,t,r){r&&e===void 0||Jo(Uo(n,"value"),e,t)},Jo=function(n,e,t){const r=t instanceof ye?new U0(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ir(r));if(typeof e=="function")throw new Error(n+"contains a function "+Ir(r)+" with contents = "+e.toString());if(Kl(e))throw new Error(n+"contains "+e.toString()+" "+Ir(r));if(typeof e=="string"&&e.length>Sa/3&&qo(e)>Sa)throw new Error(n+"contains a string greater than "+Sa+" utf8 bytes "+Ir(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ot(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Cc(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ir(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);q0(r,o),Jo(n,a,r),j0(r)}),i&&s)throw new Error(n+' contains ".value" child '+Ir(r)+" in addition to actual children.")}},Iy=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const s=cs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Cc(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(z0);let i=null;for(t=0;t<e.length;t++){if(r=e[t],i!==null&&Wt(i,r))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Ty=function(n,e,t,r){const i=Uo(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ot(e,(o,a)=>{const l=new ye(o);if(Jo(i,a,Ne(t,l)),Zl(l)===".priority"&&!al(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Iy(i,s)},Ic=function(n,e,t,r){if(!mp(t))throw new Error(Uo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ky=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ic(n,e,t)},Tc=function(n,e){if(oe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Sy=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Cy(t))throw new Error(Uo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class xy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xo(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!ec(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function gp(n,e,t){Xo(n,t),_p(n,r=>ec(r,e))}function cn(n,e,t){Xo(n,t),_p(n,r=>Wt(r,e)||Wt(e,r))}function _p(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(Ay(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ay(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Ji&&it("event: "+t.toString()),ki(r)}}}/**
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
 */const Ry="repo_interrupt",Py=25;class Ny{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wo(),this.transactionQueueTree_=new yc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ly(n,e,t){if(n.stats_=Jl(n.repoInfo_),n.forceRestClient_||u0())n.server_=new bo(n.repoInfo_,(r,i,s,o)=>{ld(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>cd(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Fn(n.repoInfo_,e,(r,i,s,o)=>{ld(n,r,i,s,o)},r=>{cd(n,r)},r=>{Oy(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=m0(n.repoInfo_,()=>new pw(n.stats_,n.server_)),n.infoData_=new cw,n.infoSyncTree_=new sd({startListening:(r,i,s,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=Ko(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),kc(n,"connected",!1),n.serverSyncTree_=new sd({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);cn(n.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function bp(n){const t=n.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Zo(n){return my({timestamp:bp(n)})}function ld(n,e,t,r,i){n.dataUpdateCount++;const s=new ye(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const l=ao(t,c=>Xe(c));o=uy(n.serverSyncTree_,s,l,i)}else{const l=Xe(t);o=cy(n.serverSyncTree_,s,l,i)}else if(r){const l=ao(t,c=>Xe(c));o=oy(n.serverSyncTree_,s,l)}else{const l=Xe(t);o=Ko(n.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=bi(n,s)),cn(n.eventQueue_,a,o)}function cd(n,e){kc(n,"connected",e),e===!1&&$y(n)}function Oy(n,e){ot(e,(t,r)=>{kc(n,t,r)})}function kc(n,e,t){const r=new ye("/.info/"+e),i=Xe(t);n.infoData_.updateSnapshot(r,i);const s=Ko(n.infoSyncTree_,r,i);cn(n.eventQueue_,r,s)}function Sc(n){return n.nextWriteId_++}function Dy(n,e,t,r,i){ea(n,"set",{path:e.toString(),value:t,priority:r});const s=Zo(n),o=Xe(t,r),a=pc(n.serverSyncTree_,e),l=dp(o,a,s),c=Sc(n),d=op(n.serverSyncTree_,e,l,c,!0);Xo(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(u,m)=>{const v=u==="ok";v||_t("set at "+e+" failed: "+u);const b=nr(n.serverSyncTree_,c,!v);cn(n.eventQueue_,e,b),cl(n,i,u,m)});const h=Ac(n,e);bi(n,h),cn(n.eventQueue_,h,[])}function My(n,e,t,r){ea(n,"update",{path:e.toString(),value:t});let i=!0;const s=Zo(n),o={};if(ot(t,(a,l)=>{i=!1,o[a]=up(Ne(e,a),Xe(l),n.serverSyncTree_,s)}),i)it("update() called with empty data.  Don't do anything."),cl(n,r,"ok",void 0);else{const a=Sc(n),l=sy(n.serverSyncTree_,e,o,a);Xo(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,d)=>{const h=c==="ok";h||_t("update at "+e+" failed: "+c);const u=nr(n.serverSyncTree_,a,!h),m=u.length>0?bi(n,e):e;cn(n.eventQueue_,m,u),cl(n,r,c,d)}),ot(t,c=>{const d=Ac(n,Ne(e,c));bi(n,d)}),cn(n.eventQueue_,e,[])}}function $y(n){ea(n,"onDisconnectEvents");const e=Zo(n),t=wo();Xa(n.onDisconnect_,be(),(i,s)=>{const o=up(i,s,n.serverSyncTree_,e);Gf(t,i,o)});let r=[];Xa(t,be(),(i,s)=>{r=r.concat(Ko(n.serverSyncTree_,i,s));const o=Ac(n,i);bi(n,o)}),n.onDisconnect_=wo(),cn(n.eventQueue_,be(),r)}function Fy(n,e,t){let r;oe(e._path)===".info"?r=od(n.infoSyncTree_,e,t):r=od(n.serverSyncTree_,e,t),gp(n.eventQueue_,e._path,r)}function ll(n,e,t){let r;oe(e._path)===".info"?r=sl(n.infoSyncTree_,e,t):r=sl(n.serverSyncTree_,e,t),gp(n.eventQueue_,e._path,r)}function zy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ry)}function ea(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),it(t,...e)}function cl(n,e,t,r){e&&ki(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function wp(n,e,t){return pc(n.serverSyncTree_,e,t)||W.EMPTY_NODE}function xc(n,e=n.transactionQueueTree_){if(e||ta(n,e),xi(e)){const t=Ep(n,e);x(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Uy(n,Ls(e),t)}else fp(e)&&Qo(e,t=>{xc(n,t)})}function Uy(n,e,t){const r=t.map(c=>c.currentWriteId),i=wp(n,e,r);let s=i;const o=i.hash();for(let c=0;c<t.length;c++){const d=t[c];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Ct(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ea(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<t.length;u++)t[u].status=2,d=d.concat(nr(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&h.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();ta(n,Ec(n.transactionQueueTree_,e)),xc(n,n.transactionQueueTree_),cn(n.eventQueue_,e,d);for(let u=0;u<h.length;u++)ki(h[u])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{_t("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}bi(n,e)}},o)}function bi(n,e){const t=yp(n,e),r=Ls(t),i=Ep(n,t);return qy(n,i,r),r}function qy(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ct(t,l.path);let d=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,i=i.concat(nr(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Py)d=!0,h="maxretry",i=i.concat(nr(n.serverSyncTree_,l.currentWriteId,!0));else{const u=wp(n,l.path,o);l.currentInputSnapshot=u;const m=e[a].update(u.val());if(m!==void 0){Jo("transaction failed: Data returned ",m,l.path);let v=Xe(m);typeof m=="object"&&m!=null&&kn(m,".priority")||(v=v.updatePriority(u.getPriority()));const C=l.currentWriteId,S=Zo(n),k=dp(v,u,S);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=k,l.currentWriteId=Sc(n),o.splice(o.indexOf(C),1),i=i.concat(op(n.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),i=i.concat(nr(n.serverSyncTree_,C,!0))}else d=!0,h="nodata",i=i.concat(nr(n.serverSyncTree_,l.currentWriteId,!0))}cn(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}ta(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)ki(r[a]);xc(n,n.transactionQueueTree_)}function yp(n,e){let t,r=n.transactionQueueTree_;for(t=oe(e);t!==null&&xi(r)===void 0;)r=Ec(r,t),e=xe(e),t=oe(e);return r}function Ep(n,e){const t=[];return Cp(n,e,t),t.sort((r,i)=>r.order-i.order),t}function Cp(n,e,t){const r=xi(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);Qo(e,i=>{Cp(n,i,t)})}function ta(n,e){const t=xi(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,hp(e,t.length>0?t:void 0)}Qo(e,r=>{ta(n,r)})}function Ac(n,e){const t=Ls(yp(n,e)),r=Ec(n.transactionQueueTree_,e);return by(r,i=>{xa(n,i)}),xa(n,r),pp(r,i=>{xa(n,i)}),t}function xa(n,e){const t=xi(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(x(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(nr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?hp(e,void 0):t.length=s+1,cn(n.eventQueue_,Ls(e),i);for(let o=0;o<r.length;o++)ki(r[o])}}/**
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
 */function jy(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Hy(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):_t(`Invalid query segment '${t}' in query '${n}'`)}return e}const ud=function(n,e){const t=Wy(n),r=t.namespace;t.domain==="firebase.com"&&jn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&jn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||t0();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Af(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new ye(t.pathString)}},Wy=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(i=jy(n.substring(d,h)));const u=Hy(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),t=e.substring(v+1),s=r}"ns"in u&&(s=u.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const dd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Vy=(function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=dd.charAt(t%64),t=Math.floor(t/64);x(t===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=dd.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class By{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class Gy{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ky{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return ae(this._path)?null:Zl(this._path)}get ref(){return new br(this._repo,this._path)}get _queryIdentifier(){const e=Yu(this._queryParams),t=Yl(e);return t==="{}"?"default":t}get _queryObject(){return Yu(this._queryParams)}isEqual(e){if(e=pt(e),!(e instanceof Os))return!1;const t=this._repo===e._repo,r=ec(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+F0(this._path)}}function Yy(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Qy(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Ar){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==$r)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==hr)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===Pe){if(e!=null&&!al(e)||t!=null&&!al(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(x(n.getIndex()instanceof rc||n.getIndex()===Vf,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class br extends Os{constructor(e,t){super(e,t,new sc,!1)}get parent(){const e=Ff(this._path);return e===null?null:new br(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xo{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ye(e),r=ps(this.ref,e);return new xo(this._node.getChild(t),r,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new xo(i,ps(this.ref,r),Pe)))}hasChild(e){const t=new ye(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function na(n,e){return n=pt(n),n._checkNotDeleted("ref"),e!==void 0?ps(n._root,e):n._root}function ps(n,e){return n=pt(n),oe(n._path)===null?ky("child","path",e):Ic("child","path",e),new br(n._repo,Ne(n._path,e))}function Ip(n,e){n=pt(n),Tc("push",n._path),vp("push",e,n._path,!0);const t=bp(n._repo),r=Vy(t),i=ps(n,r),s=ps(n,r);let o;return e!=null?o=Ao(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Jy(n){return Tc("remove",n._path),Ao(n,null)}function Ao(n,e){n=pt(n),Tc("set",n._path),vp("set",e,n._path,!1);const t=new Is;return Dy(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Xy(n,e){Ty("update",e,n._path);const t=new Is;return My(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Rc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new By("value",this,new xo(e.snapshotNode,new br(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Gy(this,e,t):null}matches(e){return e instanceof Rc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Zy(n,e,t,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=t,c=(d,h)=>{ll(n._repo,n,a),l(d,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Ky(t,s||void 0),a=new Rc(o);return Fy(n._repo,n,a),()=>ll(n._repo,n,a)}function Pc(n,e,t,r){return Zy(n,"value",e,t,r)}function Tp(n,e,t){ll(n._repo,n,null)}class kp{}class eE extends kp{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Os(e._repo,e._path,aw(e._queryParams,this._limit),e._orderByCalled)}}function tE(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new eE(n)}class nE extends kp{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Yy(e,"orderByChild");const t=new ye(this._path);if(ae(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new rc(t),i=lw(e._queryParams,r);return Qy(i),new Os(e._repo,e._path,i,!0)}}function rE(n){return Ic("orderByChild","path",n),new nE(n)}function iE(n,...e){let t=pt(n);for(const r of e)t=r._apply(t);return t}Qw(br);ny(br);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="FIREBASE_DATABASE_EMULATOR_HOST",ul={};let oE=!1;function aE(n,e,t,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Ii(s);n.repoInfo_=new Af(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function lE(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||jn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ud(s,i),a=o.repoInfo,l;typeof process<"u"&&Pu&&(l=Pu[sE]),l?(s=`http://${l}?ns=${a.namespace}`,o=ud(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new h0(n.name,n.options,e);Sy("Invalid Firebase Database URL",o),ae(o.path)||jn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=uE(a,n,c,new d0(n,t));return new dE(d,n)}function cE(n,e){const t=ul[e];(!t||t[n.key]!==n)&&jn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),zy(n),delete t[n.key]}function uE(n,e,t,r){let i=ul[e.name];i||(i={},ul[e.name]=i);let s=i[n.toURLString()];return s&&jn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Ny(n,oE,t,r),i[n.toURLString()]=s,s}class dE{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ly(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new br(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jn("Cannot call "+e+" on a deleted database.")}}function hE(n=Rh(),e){const t=Fl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Qv("database");r&&fE(t,...r)}return t}function fE(n,e,t,r={}){n=pt(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Or(r,s.repoInfo_.emulatorOptions))return;jn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&jn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Bs(Bs.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Jv(r.mockUserToken,n.app.options.projectId);o=new Bs(a)}Ii(e)&&(Ch(e),Ih("Database",!0)),aE(s,i,r,o)}/**
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
 */function pE(n){Y1(Ti),pi(new Dr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return lE(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),lr(Nu,Lu,n),lr(Nu,Lu,"esm2020")}Fn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Fn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};pE();const mE={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"},Sp=Ah(mE),ms=G1(Sp),vs=hE(Sp);var vE=O('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),gE=O('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),_E=O('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),bE=O('<h3 class="post-title svelte-1t1odzy"> </h3>'),wE=O('<p class="post-text svelte-1t1odzy"> </p>'),yE=O('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),EE=O('<div class="posts svelte-1t1odzy"></div>'),CE=O('<div class="post-list-container svelte-1t1odzy"><!></div>');const IE={hash:"svelte-1t1odzy",code:`
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
  }`};function TE(n,e){Oe(e,!0),$e(n,IE);let t=jt(e,"path",7,"posts"),r=jt(e,"limit",7,"10"),i=te(Ht([])),s=te(!0),o=te(""),a=null;Cs(()=>{l()}),Fv(()=>{c()});function l(){try{a=na(vs,t()),Pc(a,k=>{const P=k.val();P?A(i,Object.entries(P).map(([N,R])=>({id:N,...R})).sort((N,R)=>(R.timestamp||0)-(N.timestamp||0)).slice(0,parseInt(r())),!0):A(i,[],!0),A(s,!1),A(o,"")},k=>{console.error("데이터 읽기 오류:",k),A(o,"데이터를 불러오는 중 오류가 발생했습니다."),A(s,!1)})}catch(k){console.error("구독 설정 오류:",k),A(o,"데이터베이스 연결에 실패했습니다."),A(s,!1)}}function c(){a&&Tp(a)}function d(k){const P=new CustomEvent("post-click",{detail:{post:k},bubbles:!0,composed:!0});dispatchEvent(P)}function h(k,P){(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),d(P))}function u(k){if(!k)return"";const P=typeof k=="string"?Number(k):k,N=new Date(P),T=new Date().getTime()-N.getTime(),I=Math.floor(T/6e4),w=Math.floor(T/36e5),L=Math.floor(T/864e5);return I<1?"방금 전":I<60?`${I}분 전`:w<24?`${w}시간 전`:L<7?`${L}일 전`:N.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var m={get path(){return t()},set path(k="posts"){t(k),Pt()},get limit(){return r()},set limit(k="10"){r(k),Pt()}},v=CE(),b=p(v);{var C=k=>{var P=vE();y(k,P)},S=k=>{var P=pe(),N=ee(P);{var R=I=>{var w=gE(),L=p(w),M=p(L,!0);f(L),f(w),G(()=>E(M,g(o))),y(I,w)},T=I=>{var w=pe(),L=ee(w);{var M=$=>{var B=_E();y($,B)},F=$=>{var B=EE();Lt(B,21,()=>g(i),re=>re.id,(re,U)=>{var z=yE();z.__click=()=>d(g(U)),z.__keydown=_e=>h(_e,g(U));var Y=p(z),V=p(Y),q=p(V),se=p(q,!0);f(q);var Q=_(q,2),me=p(Q,!0);f(Q),f(V),f(Y);var de=_(Y,2),fe=p(de);{var j=_e=>{var Z=bE(),Ae=p(Z,!0);f(Z),G(()=>E(Ae,g(U).title)),y(_e,Z)};K(fe,_e=>{g(U).title&&_e(j)})}var J=_(fe,2);{var he=_e=>{var Z=wE(),Ae=p(Z,!0);f(Z),G(()=>E(Ae,g(U).content)),y(_e,Z)};K(J,_e=>{g(U).content&&_e(he)})}f(de);var Ee=_(de,2),ve=p(Ee),ie=p(ve);f(ve);var ge=_(ve,2),Re=p(ge);f(ge),f(Ee),f(z),G(_e=>{Me(z,"aria-label",`게시물: ${(g(U).title||g(U).content||"제목 없음")??""}`),E(se,g(U).author||"익명"),E(me,_e),E(ie,`👍 ${(g(U).likes||0)??""}`),E(Re,`💬 ${(g(U).comments?.length||0)??""}`)},[()=>u(g(U).timestamp)]),y(re,z)}),f(B),y($,B)};K(L,$=>{g(i).length===0?$(M):$(F,!1)},!0)}y(I,w)};K(N,I=>{g(o)?I(R):I(T,!1)},!0)}y(k,P)};K(b,k=>{g(s)?k(C):k(S,!1)})}return f(v),y(n,v),De(m)}at(["click","keydown"]);customElements.define("post-list",ne(TE,{path:{},limit:{}},[],[],!0));Lm();/**
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
 */const kE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var SE=mv("<svg><!><!></svg>");function Ve(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]),r=Ue(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Oe(e,!1);let i=jt(e,"name",12,void 0),s=jt(e,"color",12,"currentColor"),o=jt(e,"size",12,24),a=jt(e,"strokeWidth",12,2),l=jt(e,"absoluteStrokeWidth",12,!1),c=jt(e,"iconNode",28,()=>[]);const d=(...b)=>b.filter((C,S,k)=>!!C&&k.indexOf(C)===S).join(" ");var h={get name(){return i()},set name(b){i(b),Pt()},get color(){return s()},set color(b){s(b),Pt()},get size(){return o()},set size(b){o(b),Pt()},get strokeWidth(){return a()},set strokeWidth(b){a(b),Pt()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(b){l(b),Pt()},get iconNode(){return c()},set iconNode(b){c(b),Pt()}};Mt();var u=SE();Kc(u,(b,C)=>({...kE,...r,width:o(),height:o(),stroke:s(),"stroke-width":b,class:C}),[()=>(Xr(l()),Xr(a()),Xr(o()),Cn(()=>l()?Number(a())*24/Number(o()):a())),()=>(Xr(i()),Xr(t),Cn(()=>d("lucide-icon","lucide",i()?`lucide-${i()}`:"",t.class)))]);var m=p(u);Lt(m,1,c,tr,(b,C)=>{var S=Na(()=>im(g(C),2));let k=()=>g(S)[0],P=()=>g(S)[1];var N=pe(),R=ee(N);wv(R,k,!0,(T,I)=>{Kc(T,()=>({...P()}))}),y(b,N)});var v=_(m);return qe(v,e,"default",{}),f(u),y(n,u),De(h)}ne(Ve,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function xp(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];Ve(n,et({name:"book-open"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(xp,{},["default"],[],!0);function dl(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];Ve(n,et({name:"check"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(dl,{},["default"],[],!0);function Nc(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];Ve(n,et({name:"chevron-down"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Nc,{},["default"],[],!0);function hl(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];Ve(n,et({name:"circle-check"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(hl,{},["default"],[],!0);function fl(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];Ve(n,et({name:"circle"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(fl,{},["default"],[],!0);function pl(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ve(n,et({name:"external-link"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(pl,{},["default"],[],!0);function Lc(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];Ve(n,et({name:"file-text"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Lc,{},["default"],[],!0);function Ap(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];Ve(n,et({name:"house"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Ap,{},["default"],[],!0);function Ui(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];Ve(n,et({name:"layout-grid"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Ui,{},["default"],[],!0);function Rp(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];Ve(n,et({name:"log-in"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Rp,{},["default"],[],!0);function Pp(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];Ve(n,et({name:"log-out"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Pp,{},["default"],[],!0);function qi(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];Ve(n,et({name:"menu"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(qi,{},["default"],[],!0);function rr(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];Ve(n,et({name:"message-circle"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(rr,{},["default"],[],!0);function Np(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];Ve(n,et({name:"phone"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Np,{},["default"],[],!0);function Lp(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];Ve(n,et({name:"send"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Lp,{},["default"],[],!0);function Op(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];Ve(n,et({name:"trending-up"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Op,{},["default"],[],!0);function Rr(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];Ve(n,et({name:"user"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(Rr,{},["default"],[],!0);function gs(n,e){const t=Ue(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];Ve(n,et({name:"users"},()=>t,{get iconNode(){return r},children:(i,s)=>{var o=pe(),a=ee(o);qe(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}ne(gs,{},["default"],[],!0);var xE=O("<option> </option>"),AE=O('<div class="error-message svelte-1e01td3"> </div>'),RE=O('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),PE=O("<!> 인증 코드 전송",1),NE=O('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),LE=O('<div class="error-message svelte-1e01td3"> </div>'),OE=O('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),DE=O("<!> 로그인",1),ME=O('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),$E=O('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const FE={hash:"svelte-1e01td3",code:`\r
  /* 전체 컨테이너 */.phone-login.svelte-1e01td3 {width:100%;max-width:28rem; /* max-w-md */margin:0 auto;}\r
\r
  /* 로그인 카드 */.login-card.svelte-1e01td3 {background-color:#ffffff; /* bg-white */border-radius:0.5rem; /* rounded-lg */box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */padding:2rem; /* p-8 */border:1px solid #e5e7eb; /* border-gray-200 */}\r
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
    to { transform: rotate(360deg); }\r
  }\r
\r
  /* 버튼 그룹 */.button-group.svelte-1e01td3 {display:flex;gap:0.75rem;margin-bottom:1rem;}.button-group.svelte-1e01td3 .btn:where(.svelte-1e01td3) {width:auto;flex:1;}\r
\r
  /* 재전송 힌트 */.resend-hint.svelte-1e01td3 {text-align:center;font-size:0.875rem; /* text-sm */color:#6b7280; /* text-gray-500 */}.link-button.svelte-1e01td3 {background:none;border:none;color:#3b82f6; /* text-blue-500 */font-weight:500; /* font-medium */cursor:pointer;text-decoration:underline;padding:0;}.link-button.svelte-1e01td3:hover {color:#2563eb; /* hover:text-blue-600 */}\r
\r
  /* 반응형 */\r
  @media (max-width: 640px) {.login-card.svelte-1e01td3 {padding:1.5rem; /* p-6 */}.step-title.svelte-1e01td3 {font-size:1.25rem; /* text-xl */}\r
  }`};function zE(n,e){Oe(e,!0),$e(n,FE);const t=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=te("+82"),i=te(""),s=te(""),o=te("phone"),a=te(!1),l=te(""),c=te(null),d=te(null),h=te(void 0),u=te(null);function m(){return new Promise((w,L)=>{try{if(!g(u)){const M=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(M),A(l,"reCAPTCHA 초기화에 실패했습니다."),L(M);return}if(g(c)){if(g(h)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(g(h)),console.log("reCAPTCHA reset completed"),w(g(h));return}catch(M){console.warn("Failed to reset reCAPTCHA:",M)}try{g(c).clear(),A(c,null),A(h,void 0)}catch(M){console.warn("Failed to clear reCAPTCHA:",M)}}A(c,new Gb(ms,g(u).id,{size:"invisible",callback:M=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&g(h)!==void 0?window.grecaptcha.reset(g(h)):m()}}),!0),g(c).render().then(M=>{A(h,M,!0),console.log("reCAPTCHA rendered with widgetId:",M),w(M)}).catch(M=>{console.error("Failed to render reCAPTCHA:",M),A(l,"reCAPTCHA 초기화에 실패했습니다."),L(M)})}catch(M){console.error("reCAPTCHA 초기화 실패:",M),A(l,"reCAPTCHA 초기화에 실패했습니다."),L(M)}})}Cs(()=>{const w=document.createElement("div");return w.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),w.className="recaptcha-container-light-dom",w.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(w),A(u,w,!0),m(),()=>{w&&w.parentNode&&w.parentNode.removeChild(w)}});function v(w){return/^[0-9]{6,15}$/.test(w)}async function b(){if(A(l,""),!v(g(i))){A(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}A(a,!0);try{const w=`${g(r)}${g(i)}`;console.log("Sending verification code to:",w),A(d,await Qb(ms,w,g(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),A(o,"code")}catch(w){console.error("SMS 전송 실패:",w),w.code==="auth/invalid-phone-number"?A(l,"잘못된 전화번호 형식입니다."):w.code==="auth/too-many-requests"?A(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):A(l,`SMS 전송 실패: ${w.message}`)}finally{A(a,!1)}}async function C(){if(A(l,""),g(s).length!==6){A(l,"6자리 인증 코드를 입력해주세요.");return}A(a,!0);try{const w=await g(d).confirm(g(s));console.log("Login successful:",w.user);const L=new CustomEvent("login-success",{detail:{user:w.user,phoneNumber:w.user.phoneNumber}});dispatchEvent(L),A(i,""),A(s,""),A(o,"phone")}catch(w){console.error("인증 코드 확인 실패:",w),w.code==="auth/invalid-verification-code"?A(l,"잘못된 인증 코드입니다."):w.code==="auth/code-expired"?A(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):A(l,`인증 실패: ${w.message}`);const L=new CustomEvent("login-error",{detail:{error:w.message}});dispatchEvent(L)}finally{A(a,!1)}}function S(){A(o,"phone"),A(s,""),A(l,"")}var k=$E(),P=p(k),N=p(P);{var R=w=>{var L=NE(),M=p(L),F=p(M);Np(F,{class:"icon-large"}),bn(4),f(M);var $=_(M,2),B=_(p($),2);Lt(B,21,()=>t,tr,(j,J)=>{var he=xE(),Ee=p(he);f(he);var ve={};G(()=>{E(Ee,`${g(J).flag??""} ${g(J).name??""} (${g(J).code??""})`),ve!==(ve=g(J).code)&&(he.value=(he.__value=g(J).code)??"")}),y(j,he)}),f(B),f($);var re=_($,2),U=_(p(re),2),z=p(U),Y=p(z,!0);f(z);var V=_(z,2);ro(V),f(U),bn(2),f(re);var q=_(re,2);{var se=j=>{var J=AE(),he=p(J,!0);f(J),G(()=>E(he,g(l))),y(j,J)};K(q,j=>{g(l)&&j(se)})}var Q=_(q,2);Q.__click=b;var me=p(Q);{var de=j=>{var J=RE();bn(),y(j,J)},fe=j=>{var J=PE(),he=ee(J);Lp(he,{class:"btn-icon"}),bn(),y(j,J)};K(me,j=>{g(a)?j(de):j(fe,!1)})}f(Q),f(L),G(()=>{B.disabled=g(a),E(Y,g(r)),V.disabled=g(a),Q.disabled=g(a)||!g(i)}),ch(B,()=>g(r),j=>A(r,j)),to("keypress",V,j=>{j.key==="Enter"&&(j.preventDefault(),b())}),io(V,()=>g(i),j=>A(i,j)),y(w,L)},T=w=>{var L=pe(),M=ee(L);{var F=$=>{var B=ME(),re=p(B),U=p(re);dl(U,{class:"icon-large"});var z=_(U,4),Y=p(z);bn(2),f(z),f(re);var V=_(re,2),q=_(p(V),2);ro(q),bn(2),f(V);var se=_(V,2);{var Q=ie=>{var ge=LE(),Re=p(ge,!0);f(ge),G(()=>E(Re,g(l))),y(ie,ge)};K(se,ie=>{g(l)&&ie(Q)})}var me=_(se,2),de=p(me);de.__click=S;var fe=_(de,2);fe.__click=C;var j=p(fe);{var J=ie=>{var ge=OE();bn(),y(ie,ge)},he=ie=>{var ge=DE(),Re=ee(ge);dl(Re,{class:"btn-icon"}),bn(),y(ie,ge)};K(j,ie=>{g(a)?ie(J):ie(he,!1)})}f(fe),f(me);var Ee=_(me,2),ve=_(p(Ee));ve.__click=S,f(Ee),f(B),G(()=>{E(Y,`${g(r)??""}${g(i)??""}로 전송된`),q.disabled=g(a),de.disabled=g(a),fe.disabled=g(a)||g(s).length!==6}),to("keypress",q,ie=>{ie.key==="Enter"&&(ie.preventDefault(),C())}),io(q,()=>g(s),ie=>A(s,ie)),y($,B)};K(M,$=>{g(o)==="code"&&$(F)},!0)}y(w,L)};K(N,w=>{g(o)==="phone"?w(R):w(T,!1)})}var I=_(N,2);ph(I,w=>A(u,w),()=>g(u)),f(P),f(k),y(n,k),De()}at(["click"]);customElements.define("phone-login",ne(zE,{},[],[],!0));const ra=zo(null),UE=zo(!0);Tb(ms,n=>{ra.set(n),UE.set(!1)});async function qE(){try{return await kb(ms),{success:!0}}catch(n){return console.error("로그아웃 오류:",n),{success:!1,error:n.message}}}const jE={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}"},HE={프로젝트_명칭:"한바보 0.2",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"실시간 데이터베이스로서 선택","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}"},WE={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}"},VE={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}"},Aa={en:jE,ko:HE,ja:WE,zh:VE};function ml(n){const e=(n??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Dp(){if(typeof navigator>"u")return"en";const n=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of n){const t=ml(e);if(t!=="en")return t}return"en"}function BE(n){let e=ml(n)||Dp();function t(s){e=ml(s)}function r(){return e}function i(s,o={}){return((Aa[e]??Aa.en)[s]??Aa.en[s]??s).replace(/\{(\w+)\}/g,(c,d)=>o[d]??"")}return{t:i,setLocale:t,getLocale:r}}const Mp=Dp(),GE=BE(Mp),KE=zo(Mp),Gr=Rv(KE,n=>(e,t={})=>GE.t(e,t));var YE=O("<span> </span>"),QE=O('<img alt="프로필" class="avatar-image svelte-38psow"/>'),JE=O('<div class="avatar-fallback svelte-38psow"> </div>'),XE=O('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/profile" class="dropdown-item svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span class="svelte-38psow"> </span></button></div>'),ZE=O('<img class="avatar-image svelte-38psow"/>'),eC=O('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),tC=O('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),nC=O('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),rC=O('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><a href="/" class="logo-link svelte-38psow"><div class="logo svelte-38psow"></div></a> <nav class="nav svelte-38psow"><!></nav></div></header>');const iC={hash:"svelte-38psow",code:`\r
  /* 탑바 */.topbar.svelte-38psow {position:fixed;top:0;left:0;right:0;z-index:50;border-bottom:1px solid #e5e7eb;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05);background-color:white;}\r
\r
  /* 컨테이너 */.container.svelte-38psow {max-width:1280px;margin:0 auto;display:flex;height:4rem;align-items:center;justify-content:space-between;padding:0 1rem;}\r
\r
  /* 로고 */.logo-link.svelte-38psow {display:flex;align-items:center;gap:0.5rem;text-decoration:none;color:inherit;}.logo.svelte-38psow {font-size:1.25rem;font-weight:bold;display:flex;align-items:center;}.logo-char.svelte-38psow {display:inline-block;transition:transform 0.3s ease;}\r
\r
  @keyframes svelte-38psow-bounce {\r
    0%, 100% {\r
      transform: translateY(0);\r
    }\r
    50% {\r
      transform: translateY(-0.25rem);\r
    }\r
  }.logo-link.svelte-38psow:hover .logo-char:where(.svelte-38psow) {transform:translateY(-0.25rem);}.logo-link.svelte-38psow:hover .logo-char-2:where(.svelte-38psow) {transition-delay:0.075s;}.logo-link.svelte-38psow:hover .logo-char-3:where(.svelte-38psow) {transition-delay:0.15s;}\r
\r
  /* 네비게이션 */.nav.svelte-38psow {display:flex;align-items:center;gap:0.25rem;}\r
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
  /* 네비게이션 버튼 */.nav-button.svelte-38psow {display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.375rem;font-size:0.875rem;font-weight:500;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.nav-button.svelte-38psow:hover {background-color:#f3f4f6;}\r
\r
  /* 주요 버튼 */.primary-button.svelte-38psow {display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;font-weight:500;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.primary-button.svelte-38psow:hover {background-color:#2563eb;}\r
\r
  /* 아이콘 버튼 */.icon-button.svelte-38psow {display:inline-flex;align-items:center;justify-content:center;padding:0.5rem;background:transparent;color:inherit;border:none;border-radius:0.375rem;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.icon-button.svelte-38psow:hover {background-color:#f3f4f6;}\r
\r
  /* 프로필 버튼 */.profile-button.svelte-38psow {display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.375rem;cursor:pointer;transition:background-color 0.2s;}.profile-button.svelte-38psow:hover {background-color:#f3f4f6;}\r
\r
  /* 프로필 이름 */.profile-name.svelte-38psow {display:none;font-size:0.875rem;}\r
\r
  @media (min-width: 1024px) {.profile-name.svelte-38psow {display:inline-block;}\r
  }\r
\r
  /* 아바타 */.avatar.svelte-38psow {width:1.5rem;height:1.5rem;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:#e5e7eb;}.avatar-small.svelte-38psow {width:1.75rem;height:1.75rem;}.avatar-image.svelte-38psow {width:100%;height:100%;object-fit:cover;}.avatar-fallback.svelte-38psow {width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:500;color:#6b7280;}.avatar-fallback-small.svelte-38psow {font-size:0.625rem;}\r
\r
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function sC(n,e){Oe(e,!0),$e(n,iC);const t=()=>In(ra,"$user",i),r=()=>In(Gr,"$t",i),[i,s]=Hr();let o=te(!1),a=te(null);function l(){g(a)&&(g(a).classList.remove("logo-animate-active"),g(a).offsetWidth,g(a).classList.add("logo-animate-active"),setTimeout(()=>{g(a)?.classList.remove("logo-animate-active")},600))}async function c(){if((await qE()).success){const T=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(T)}A(o,!1)}function d(){return t()?.displayName?t().displayName.charAt(0).toUpperCase():t()?.email?t().email.charAt(0).toUpperCase():"U"}function h(){A(o,!g(o))}function u(R){const T=document.querySelector(".dropdown-menu"),I=document.querySelector(".dropdown-trigger");T&&!T.contains(R.target)&&!I?.contains(R.target)&&A(o,!1)}Cs(()=>{const R=setTimeout(()=>{l()},500),T=setInterval(()=>{l()},1e4);return document.addEventListener("click",u),()=>{clearTimeout(R),clearInterval(T),document.removeEventListener("click",u)}});var m=rC(),v=p(m),b=p(v),C=p(b);Lt(C,5,()=>r()("프로젝트_명칭").split(""),tr,(R,T,I)=>{var w=YE();en(w,1,`logo-char logo-char-${I+1}`,"svelte-38psow");var L=p(w,!0);f(w),G(()=>E(L,g(T))),y(R,w)}),f(C),f(b),ph(b,R=>A(a,R),()=>g(a));var S=_(b,2),k=p(S);{var P=R=>{var T=tC(),I=ee(T),w=p(I),L=p(w);Ui(L,{size:16});var M=_(L,2),F=p(M,!0);f(M),f(w);var $=_(w,2),B=p($);rr(B,{size:16});var re=_(B,2),U=p(re,!0);f(re),f($);var z=_($,2),Y=p(z);gs(Y,{size:16});var V=_(Y,2),q=p(V,!0);f(V),f(z);var se=_(z,2),Q=p(se);Q.__click=h;var me=p(Q),de=p(me);{var fe=Te=>{var we=QE();G(()=>Me(we,"src",t().photoURL)),y(Te,we)},j=Te=>{var we=JE(),je=p(we,!0);f(we),G(He=>E(je,He),[d]),y(Te,we)};K(de,Te=>{t()?.photoURL?Te(fe):Te(j,!1)})}f(me);var J=_(me,2),he=p(J,!0);f(J),f(Q);var Ee=_(Q,2);{var ve=Te=>{var we=XE(),je=p(we),He=p(je,!0);f(je);var St=_(je,4),xt=p(St);Rr(xt,{size:16});var Yt=_(xt,2),$t=p(Yt,!0);f(Yt),f(St);var nt=_(St,4);nt.__click=c;var mt=p(nt);Pp(mt,{size:16});var At=_(mt,2),Ft=p(At,!0);f(At),f(nt),f(we),G((zt,mn,Ge)=>{E(He,zt),E($t,mn),E(Ft,Ge)},[()=>r()("내계정"),()=>r()("프로필수정"),()=>r()("로그아웃")]),y(Te,we)};K(Ee,Te=>{g(o)&&Te(ve)})}f(se);var ie=_(se,2),ge=p(ie);qi(ge,{size:24}),f(ie),f(I);var Re=_(I,2),_e=p(Re),Z=p(_e);Ui(Z,{size:20}),f(_e);var Ae=_(_e,2),Be=p(Ae);gs(Be,{size:20}),f(Ae);var lt=_(Ae,2),kt=p(lt);rr(kt,{size:20}),f(lt);var tt=_(lt,2),Kt=p(tt),hn=p(Kt);{var xn=Te=>{var we=ZE();G(je=>{Me(we,"src",t().photoURL),Me(we,"alt",je)},[()=>r()("프로필")]),y(Te,we)},fn=Te=>{var we=eC(),je=p(we,!0);f(we),G(He=>E(je,He),[d]),y(Te,we)};K(hn,Te=>{t()?.photoURL?Te(xn):Te(fn,!1)})}f(Kt),f(tt);var wt=_(tt,2),pn=p(wt);qi(pn,{size:24}),f(wt),f(Re),G((Te,we,je,He,St,xt,Yt,$t,nt)=>{E(F,Te),E(U,we),E(q,je),E(he,t()?.displayName||t()?.email),Me(ie,"title",He),Me(_e,"title",St),Me(Ae,"title",xt),Me(lt,"title",Yt),Me(tt,"title",$t),Me(wt,"title",nt)},[()=>r()("포럼"),()=>r()("채팅"),()=>r()("사용자찾기"),()=>r()("메뉴"),()=>r()("포럼"),()=>r()("사용자찾기"),()=>r()("채팅"),()=>r()("프로필"),()=>r()("메뉴")]),y(R,T)},N=R=>{var T=nC(),I=ee(T),w=p(I),L=p(w);Ui(L,{size:16});var M=_(L,2),F=p(M,!0);f(M),f(w);var $=_(w,2),B=p($);rr(B,{size:16});var re=_(B,2),U=p(re,!0);f(re),f($);var z=_($,2),Y=p(z,!0);f(z);var V=_(z,2),q=p(V);qi(q,{size:20}),f(V),f(I);var se=_(I,2),Q=p(se),me=p(Q);Ui(me,{size:20}),f(Q);var de=_(Q,2),fe=p(de);rr(fe,{size:20}),f(de);var j=_(de,2),J=p(j);Rr(J,{size:20}),f(j);var he=_(j,2),Ee=p(he);qi(Ee,{size:24}),f(he),f(se),G((ve,ie,ge,Re,_e,Z,Ae,Be)=>{E(F,ve),E(U,ie),E(Y,ge),Me(V,"title",Re),Me(Q,"title",_e),Me(de,"title",Z),Me(j,"title",Ae),Me(he,"title",Be)},[()=>r()("포럼"),()=>r()("채팅"),()=>r()("로그인"),()=>r()("메뉴"),()=>r()("포럼"),()=>r()("채팅"),()=>r()("로그인"),()=>r()("메뉴")]),y(R,T)};K(k,R=>{t()?R(P):R(N,!1)})}f(S),f(v),f(m),y(n,m),De(),s()}at(["click"]);customElements.define("sns-topbar",ne(sC,{},[],[],!0));var oC=O('<a href="/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),aC=O('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),lC=O('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/users" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <div class="menu-item disabled svelte-najsij"><!> <span> </span></div></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/users" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const cC={hash:"svelte-najsij",code:`\r
  /* 사이드바 */.sidebar.svelte-najsij {width:16rem;border-right:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:auto;height:100vh;}\r
\r
  /* 사이드바 콘텐츠 */.sidebar-content.svelte-najsij {position:sticky;top:5rem;}\r
\r
  /* 섹션 제목 */.section-title.svelte-najsij {font-size:1.125rem;font-weight:bold;margin-bottom:1rem;color:#111827;}\r
\r
  /* 섹션 부제목 */.section-subtitle.svelte-najsij {font-size:0.875rem;font-weight:600;margin-bottom:0.5rem;color:#6b7280;}\r
\r
  /* 메뉴 */.menu.svelte-najsij {display:flex;flex-direction:column;gap:0.5rem;}\r
\r
  /* 메뉴 아이템 */.menu-item.svelte-najsij {display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:0.5rem;color:#374151;text-decoration:none;transition:all 0.2s;cursor:pointer;}.menu-item.svelte-najsij:hover {background-color:#f3f4f6;color:#111827;}.menu-item.disabled.svelte-najsij {color:#9ca3af;cursor:not-allowed;}\r
\r
  /* 작은 메뉴 아이템 */.menu-item-small.svelte-najsij {display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:0.5rem;color:#374151;text-decoration:none;transition:all 0.2s;font-size:0.875rem;font-weight:500;cursor:pointer;}.menu-item-small.svelte-najsij:hover {background-color:#f3f4f6;color:#111827;}\r
\r
  /* 외부 링크 아이콘 */\r
\r
  /* 아이콘 */.icon.svelte-najsij {flex-shrink:0;}\r
\r
  /* 구분선 */.divider.svelte-najsij {height:1px;background-color:#e5e7eb;margin:1.5rem 0;}\r
\r
  /* 섹션 */.section.svelte-najsij {margin-bottom:1.5rem;}\r
\r
  /* 언어 설정 섹션 */.language-section.svelte-najsij {margin-top:1.5rem;padding-top:1rem;border-top:1px solid #e5e7eb;}.language-notice.svelte-najsij {padding:0.75rem;background-color:#f3f4f6;border-radius:0.375rem;font-size:0.75rem;color:#6b7280;text-align:center;}\r
\r
  /* 빌드 정보 */.build-info.svelte-najsij {margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e7eb;font-size:0.75rem;color:#6b7280;}.build-row.svelte-najsij {display:flex;align-items:center;justify-content:space-between;}.build-timestamp.svelte-najsij {font-family:'Courier New', monospace;}\r
\r
  /* Copyleft 정보 */.copyleft.svelte-najsij {margin-top:1rem;text-align:center;font-size:0.75rem;color:#6b7280;}.copyleft.svelte-najsij p:where(.svelte-najsij) {line-height:1.5;}\r
\r
  /* 반응형: 모바일에서는 숨김 */\r
  @media (max-width: 768px) {.sidebar.svelte-najsij {display:none;}\r
  }`};function uC(n,e){Oe(e,!1),$e(n,cC);const t=()=>In(Gr,"$t",i),r=()=>In(ra,"$user",i),[i,s]=Hr();Mt();var o=lC(),a=p(o),l=p(a),c=p(l,!0);f(l);var d=_(l,2),h=p(d),u=p(h);Ap(u,{size:20});var m=_(u,2),v=p(m,!0);f(m),f(h);var b=_(h,2),C=p(b);rr(C,{size:20});var S=_(C,2),k=p(S,!0);f(S),f(b);var P=_(b,2),N=p(P);gs(N,{size:20});var R=_(N,2),T=p(R,!0);f(R),f(P);var I=_(P,2),w=p(I);Rr(w,{size:20});var L=_(w,2),M=p(L,!0);f(L),f(I);var F=_(I,2),$=p(F);Lc($,{size:20});var B=_($,2),re=p(B,!0);f(B),f(F),f(d);var U=_(d,4),z=p(U),Y=p(z,!0);f(z);var V=_(z,2),q=p(V);{var se=mt=>{var At=oC(),Ft=p(At);Rr(Ft,{size:16});var zt=_(Ft,2),mn=p(zt,!0);f(zt),f(At),G(Ge=>E(mn,Ge),[()=>t()("회원정보수정")]),y(mt,At)},Q=mt=>{var At=aC(),Ft=ee(At),zt=p(Ft);Rp(zt,{size:16});var mn=_(zt,2),Ge=p(mn,!0);f(mn),f(Ft);var ke=_(Ft,2),Ke=p(ke);Rr(Ke,{size:16});var Ye=_(Ke,2),ct=p(Ye,!0);f(Ye),f(ke),G((vn,Qt)=>{E(Ge,vn),E(ct,Qt)},[()=>t()("로그인"),()=>t()("회원가입")]),y(mt,At)};K(q,mt=>{r()?mt(se):mt(Q,!1)})}f(V),f(U);var me=_(U,4),de=p(me),fe=p(de);gs(fe,{size:16});var j=_(fe,2),J=p(j,!0);f(j),f(de);var he=_(de,2),Ee=_(p(he),2),ve=p(Ee,!0);f(Ee);var ie=_(Ee,2);pl(ie,{size:12,class:"external-icon"}),f(he);var ge=_(he,2),Re=p(ge);rr(Re,{size:16});var _e=_(Re,2),Z=p(_e,!0);f(_e);var Ae=_(_e,2);pl(Ae,{size:12,class:"external-icon"}),f(ge);var Be=_(ge,2),lt=p(Be);xp(lt,{size:16});var kt=_(lt,2),tt=p(kt,!0);f(kt),f(Be),f(me);var Kt=_(me,2),hn=p(Kt),xn=p(hn,!0);f(hn);var fn=_(hn,2),wt=p(fn,!0);f(fn),f(Kt);var pn=_(Kt,2),Te=p(pn),we=p(Te),je=p(we,!0);f(we);var He=_(we,2),St=p(He,!0);f(He),f(Te),f(pn);var xt=_(pn,2),Yt=p(xt),$t=p(Yt,!0),nt=_($t,2);f(Yt),f(xt),f(a),f(o),G((mt,At,Ft,zt,mn,Ge,ke,Ke,Ye,ct,vn,Qt,Bn,wr,Gn,gn,Ut)=>{E(c,mt),E(v,At),E(k,Ft),E(T,zt),E(M,mn),E(re,Ge),E(Y,ke),E(J,Ke),E(ve,Ye),E(Z,ct),E(tt,vn),E(xn,Qt),E(wt,Bn),E(je,wr),E(St,Gn),E($t,gn),E(nt,` ${Ut??""}`)},[()=>t()("퀵메뉴"),()=>t()("홈"),()=>t()("채팅"),()=>t()("사용자목록"),()=>t()("내프로필"),()=>t()("게시판"),()=>t()("시작하기"),()=>t()("회원목록"),()=>t()("프로젝트GitHub"),()=>t()("한바보참여단톡방"),()=>t()("개발일지"),()=>t()("언어설정"),()=>t()("언어전환기능안내"),()=>t()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>t()("카피레프트"),()=>t()("AI소개")]),y(n,o),De(),s()}customElements.define("sns-left-sidebar",ne(uC,{},[],[],!0));var dC=O('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const hC={hash:"svelte-3epon2",code:`\r
  /* 사이드바 */.sidebar.svelte-3epon2 {width:16rem;border-left:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:auto;height:100vh;}\r
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
  }`};function fC(n,e){Oe(e,!0),$e(n,hC);const t=()=>In(Gr,"$t",r),[r,i]=Hr();let s=te(Ht({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=dC(),a=p(o),l=p(a),c=p(l,!0);f(l);var d=_(l,2),h=p(d),u=p(h),m=p(u);Rr(m,{size:20}),f(u);var v=_(u,2),b=p(v),C=p(b,!0);f(b);var S=_(b,2),k=p(S,!0);f(S),f(v),f(h);var P=_(h,2),N=p(P),R=p(N);Op(R,{size:20}),f(N);var T=_(N,2),I=p(T),w=p(I,!0);f(I);var L=_(I,2),M=p(L,!0);f(L),f(T),f(P);var F=_(P,2),$=p(F),B=p($);Lc(B,{size:20}),f($);var re=_($,2),U=p(re),z=p(U,!0);f(U);var Y=_(U,2),V=p(Y,!0);f(Y);var q=_(Y,2),se=p(q,!0);f(q),f(re),f(F);var Q=_(F,2),me=p(Q),de=p(me);rr(de,{size:20}),f(me);var fe=_(me,2),j=p(fe),J=p(j,!0);f(j);var he=_(j,2),Ee=p(he,!0);f(he),f(fe),f(Q),f(d);var ve=_(d,2),ie=p(ve,!0);f(ve),f(a),f(o),G((ge,Re,_e,Z,Ae,Be,lt)=>{E(c,ge),E(C,Re),E(k,g(s).totalUsers),E(w,_e),E(M,g(s).totalScore),E(z,Z),E(V,g(s).totalPosts),E(se,Ae),E(J,Be),E(Ee,g(s).totalMessages),E(ie,lt)},[()=>t()("통계"),()=>t()("전체사용자"),()=>t()("전체점수"),()=>t()("전체글"),()=>t()("준비중"),()=>t()("채팅메시지"),()=>t()("통계실시간업데이트")]),y(n,o),De(),i()}customElements.define("sns-right-sidebar",ne(fC,{},[],[],!0));var pC=O('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const mC={hash:"svelte-um1xbq",code:`\r
  /* 전체 레이아웃 */.layout.svelte-um1xbq {min-height:100vh;background-color:#f9fafb;}\r
\r
  /* 메인 컨테이너 */.main-container.svelte-um1xbq {display:flex;margin-top:4rem; /* Topbar 높이만큼 여백 */min-height:calc(100vh - 4rem);}\r
\r
  /* 왼쪽 사이드바 */.left-sidebar.svelte-um1xbq {display:none;}\r
\r
  @media (min-width: 768px) {.left-sidebar.svelte-um1xbq {display:block;position:sticky;top:4rem;height:calc(100vh - 4rem);overflow-y:auto;}\r
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
  @media (min-width: 1024px) {.right-sidebar.svelte-um1xbq {display:block;position:sticky;top:4rem;height:calc(100vh - 4rem);overflow-y:auto;}\r
  }`};function vC(n,e){$e(n,mC);var t=pC(),r=p(t),i=_(r,2),s=p(i);en(s,1,"left-sidebar svelte-um1xbq");var o=_(s,2),a=p(o);qe(a,e,"default",{}),f(o);var l=_(o,2);en(l,1,"right-sidebar svelte-um1xbq"),f(i),f(t),y(n,t)}customElements.define("sns-layout",ne(vC,{},["default"],[],!0));var gC=O('<div class="icon-container svelte-m3h71q"> </div>'),_C=O('<p class="hint-box svelte-m3h71q"> </p>'),bC=O('<p class="gpl-box svelte-m3h71q"> </p>'),wC=O('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),yC=O('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),EC=O('<div class="accordion svelte-m3h71q"></div>');const CC={hash:"svelte-m3h71q",code:`\r
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
  }`};function IC(n,e){Oe(e,!0),$e(n,CC);let t=jt(e,"items",7,"[]"),r=jt(e,"type",7,"single"),i=jt(e,"collapsible",7,!0),s=Na(()=>{try{const u=typeof t()=="string"?JSON.parse(t()):t();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=Na(()=>()=>{const u=i();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=te(Ht(new Set));function l(u){const m=new Set(g(a));r()==="single"?m.has(u)?g(o)&&m.delete(u):(m.clear(),m.add(u)):m.has(u)?m.delete(u):m.add(u),A(a,m,!0)}function c(u){return g(a).has(u)}var d={get items(){return t()},set items(u="[]"){t(u),Pt()},get type(){return r()},set type(u="single"){r(u),Pt()},get collapsible(){return i()},set collapsible(u=!0){i(u),Pt()}},h=EC();return Lt(h,21,()=>g(s),tr,(u,m,v)=>{var b=yC(),C=p(b);C.__click=()=>l(v);var S=p(C),k=p(S);{var P=F=>{var $=gC(),B=p($,!0);f($),G(()=>E(B,g(m).icon)),y(F,$)};K(k,F=>{g(m).icon&&F(P)})}var N=_(k,2),R=p(N,!0);f(N),f(S);var T=_(S,2);let I;var w=p(T);Nc(w,{size:20}),f(T),f(C);var L=_(C,2);{var M=F=>{var $=wC(),B=p($),re=p(B,!0);f(B);var U=_(B,2);{var z=q=>{var se=_C(),Q=p(se,!0);f(se),G(()=>E(Q,g(m).hint)),y(q,se)};K(U,q=>{g(m).hint&&q(z)})}var Y=_(U,2);{var V=q=>{var se=bC(),Q=p(se,!0);f(se),G(()=>E(Q,g(m).gpl)),y(q,se)};K(Y,q=>{g(m).gpl&&q(V)})}f($),G(()=>E(re,g(m).content)),y(F,$)};K(L,F=>{c(v)&&F(M)})}f(b),G((F,$)=>{Me(C,"aria-expanded",F),E(R,g(m).title),I=en(T,1,"chevron svelte-m3h71q",null,I,$)},[()=>c(v),()=>({"rotate-180":c(v)})]),y(u,b)}),f(h),y(n,h),De(d)}at(["click"]);customElements.define("sns-accordion",ne(IC,{items:{},type:{},collapsible:{}},[],[],!0));console.log("SNS Web Components 로드됨 ✅");class TC{#t=te(null);get data(){return g(this.#t)}set data(e){A(this.#t,e,!0)}#e=te(!0);get loading(){return g(this.#e)}set loading(e){A(this.#e,e,!0)}#r=te(null);get error(){return g(this.#r)}set error(e){A(this.#r,e,!0)}#n=null;#i=null;constructor(e,t=null){this.data=t,typeof window<"u"&&this.#s(e)}#s(e){try{if(!vs)throw new Error("Database instance not available");this.#n=na(vs,e),this.#i=Pc(this.#n,t=>{this.data=t.val(),console.log(`RTDB: Data loaded successfully from path "${this.#n.toString().substring(76)}"`,this.data),this.loading=!1,this.error=null},t=>{this.error=t,this.loading=!1})}catch(t){this.error=t,this.loading=!1}}async push(e){if(!this.#n)return null;try{const t=Ip(this.#n);return await Ao(t,e),t.key}catch(t){throw this.error=t,t}}async set(e){if(this.#n)try{await Ao(this.#n,e)}catch(t){throw this.error=t,t}}async update(e){if(this.#n)try{await Xy(this.#n,e)}catch(t){throw this.error=t,t}}async remove(){if(this.#n)try{await Jy(this.#n)}catch(e){throw this.error=e,e}}get ref(){if(!this.#n)throw new Error("Database reference is not available");return this.#n}dispose(){this.#i&&(this.#i(),this.#i=null)}}function kC(n,e=null){return new TC(n,e)}var SC=O('<div class="gpl-badge svelte-1ubq0t6"> </div>'),xC=O('<div class="hint svelte-1ubq0t6"> </div>'),AC=O('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),RC=O('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),PC=O('<div class="todo-description svelte-1ubq0t6"> </div>'),NC=O('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),LC=O('<div class="todo-subitems svelte-1ubq0t6"></div>'),OC=O('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),DC=O('<span class="badge svelte-1ubq0t6"> </span>'),MC=O('<div class="home svelte-1ubq0t6"><div class="vibe-banner svelte-1ubq0t6"><span class="vibe-text svelte-1ubq0t6"> </span></div> <div class="hero-section svelte-1ubq0t6"><h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p></div> <section class="section techstack-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const $C={hash:"svelte-1ubq0t6",code:`\r
  /* 홈 컨테이너 */.home.svelte-1ubq0t6 {max-width:100%;padding:0;}\r
\r
  /* Vibe 배너 */.vibe-banner.svelte-1ubq0t6 {display:inline-block;margin-bottom:1.5rem;padding:0.5rem 1rem;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:9999px;box-shadow:0 4px 6px rgba(102, 126, 234, 0.3);}.vibe-text.svelte-1ubq0t6 {color:white;font-size:0.875rem;font-weight:500;}\r
\r
  /* 히어로 섹션 */.hero-section.svelte-1ubq0t6 {margin-bottom:3rem;}\r
\r
  /* 기술 스택 섹션 */.techstack-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);border:1px solid #d1d5db;}.techstack-grid.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:flex-start;}.techstack-item.svelte-1ubq0t6 {display:flex;flex-direction:column;align-items:center;text-align:center;padding:0.75rem 0.875rem;background:white;border-radius:0.5rem;box-shadow:0 1px 2px rgba(0, 0, 0, 0.06);transition:all 0.2s ease;border:1px solid #f0f0f0;flex:0 1 auto;min-width:170px;text-decoration:none;color:inherit;}.techstack-item.svelte-1ubq0t6:hover {transform:translateY(-1px);box-shadow:0 3px 6px rgba(0, 0, 0, 0.08);border-color:#e5e7eb;}.techstack-icon.svelte-1ubq0t6 {font-size:1.75rem;margin-bottom:0.375rem;display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);}.techstack-icon.svelte-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);}.techstack-icon.flutter-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);}.techstack-icon.firebase-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);}.techstack-icon.dokplay-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);}.techstack-name.svelte-1ubq0t6 {font-size:0.9rem;font-weight:700;color:#111827;margin:0 0 0.125rem 0;}.techstack-description.svelte-1ubq0t6 {font-size:0.7rem;color:#6b7280;line-height:1.35;margin:0;}.hero-title.svelte-1ubq0t6 {font-size:2.5rem;font-weight:800;margin:0 0 1rem 0;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.2;}.hero-description.svelte-1ubq0t6 {font-size:1.125rem;color:#6b7280;line-height:1.7;margin:0;}.hero-link.svelte-1ubq0t6 {color:#3b82f6;text-decoration:underline;font-weight:500;}.hero-link.svelte-1ubq0t6:hover {color:#2563eb;}\r
\r
  /* 섹션 */.section.svelte-1ubq0t6 {margin-bottom:3rem;padding:2rem;background:white;border-radius:1rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.08);border:1px solid #e5e7eb;transition:all 0.3s ease;}.section.svelte-1ubq0t6:hover {box-shadow:0 8px 16px rgba(0, 0, 0, 0.1);}.section-title.svelte-1ubq0t6 {font-size:1.875rem;font-weight:700;margin:0 0 1.5rem 0;color:#111827;display:flex;align-items:center;gap:0.75rem;}\r
\r
  /* 아코디언 */.accordion.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:0.625rem;}.accordion-item.svelte-1ubq0t6 {border:1px solid #e5e7eb;border-radius:0.625rem;overflow:hidden;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);background:white;}.accordion-item.svelte-1ubq0t6:hover {border-color:#d1d5db;box-shadow:0 4px 12px rgba(102, 126, 234, 0.08);transform:translateY(-1px);}.accordion-trigger.svelte-1ubq0t6 {width:100%;display:flex;justify-content:space-between;align-items:center;padding:0.95rem 1.25rem;background:linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);border:none;cursor:pointer;font-size:0.95rem;font-weight:600;color:#111827;text-align:left;transition:all 0.25s ease;}.accordion-trigger.svelte-1ubq0t6:hover {background:linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);}.accordion-trigger[aria-expanded="true"].svelte-1ubq0t6 {background:linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);}.accordion-title.svelte-1ubq0t6 {flex:1;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.accordion-icon.svelte-1ubq0t6 {display:flex;color:#9ca3af;transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);margin-left:0.75rem;}.accordion-icon.open.svelte-1ubq0t6 {transform:rotate(180deg);color:#667eea;}.accordion-content.svelte-1ubq0t6 {padding:0 1.25rem 1.25rem 1.25rem;color:#374151;line-height:1.7;\r
    animation: svelte-1ubq0t6-slideDown 0.3s ease-out;background:#fafbfc;}\r
\r
  @keyframes svelte-1ubq0t6-slideDown {\r
    from {\r
      opacity: 0;\r
      max-height: 0;\r
    }\r
    to {\r
      opacity: 1;\r
      max-height: 500px;\r
    }\r
  }.accordion-content.svelte-1ubq0t6 p:where(.svelte-1ubq0t6) {margin:0 0 0.75rem 0;}.gpl-badge.svelte-1ubq0t6 {display:inline-block;margin-top:0.875rem;padding:0.5rem 0.875rem;background:linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);border:1px solid #86efac;border-radius:0.5rem;font-size:0.8125rem;font-weight:600;color:#166534;box-shadow:0 2px 4px rgba(34, 197, 94, 0.1);}.hint.svelte-1ubq0t6 {margin-top:0.875rem;padding:0.75rem 1rem;background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);border-left:4px solid #667eea;border-radius:0.5rem;font-size:0.8125rem;color:#1e3a8a;line-height:1.6;box-shadow:0 2px 4px rgba(102, 126, 234, 0.08);}\r
\r
  /* TODO 리스트 */.todo-list.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:1rem;}.todo-item.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:0.5rem;}.todo-main.svelte-1ubq0t6 {display:flex;align-items:flex-start;gap:0.75rem;}.todo-icon.svelte-1ubq0t6 {display:flex;color:#9ca3af;margin-top:0.125rem;flex-shrink:0;}.todo-icon.completed.svelte-1ubq0t6 {color:#10b981;}.todo-content.svelte-1ubq0t6 {flex:1;}.todo-label.svelte-1ubq0t6 {font-size:1rem;font-weight:600;color:#111827;line-height:1.5;}.todo-label.completed.svelte-1ubq0t6 {color:#6b7280;text-decoration:line-through;}.todo-description.svelte-1ubq0t6 {font-size:0.875rem;color:#6b7280;margin-top:0.25rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:2rem;display:flex;flex-direction:column;gap:0.5rem;}.todo-subitem.svelte-1ubq0t6 {display:flex;align-items:center;gap:0.5rem;}.todo-subicon.svelte-1ubq0t6 {display:flex;color:#9ca3af;flex-shrink:0;}.todo-subicon.completed.svelte-1ubq0t6 {color:#10b981;}.todo-subtext.svelte-1ubq0t6 {font-size:0.875rem;color:#374151;}.todo-subtext.completed.svelte-1ubq0t6 {color:#9ca3af;text-decoration:line-through;}\r
\r
  /* 프로젝트 개요 */.overview-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:1px solid #bae6fd;}.overview-text.svelte-1ubq0t6 {font-size:1.125rem;color:#374151;line-height:1.7;margin:0 0 1.5rem 0;}.overview-text.svelte-1ubq0t6 strong:where(.svelte-1ubq0t6) {color:#3b82f6;font-weight:700;}.badges.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;}.badge.svelte-1ubq0t6 {display:inline-block;padding:0.5rem 1rem;background:white;border:1px solid #93c5fd;border-radius:9999px;font-size:0.875rem;font-weight:500;color:#1e40af;box-shadow:0 2px 4px rgba(59, 130, 246, 0.1);}\r
\r
  /* AI 변화 섹션 */.change-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);border:1px solid #fcd34d;}.change-description.svelte-1ubq0t6 {font-size:1.125rem;color:#374151;line-height:1.7;margin:0 0 1rem 0;}.change-emphasis.svelte-1ubq0t6 {font-size:1.125rem;color:#78350f;line-height:1.7;margin:0 0 1rem 0;}.change-highlight.svelte-1ubq0t6 {color:#b45309;font-weight:700;text-decoration:underline;}\r
\r
  /* 반응형 */\r
  @media (max-width: 768px) {.hero-title.svelte-1ubq0t6 {font-size:2rem;}.section.svelte-1ubq0t6 {padding:1.5rem;}.section-title.svelte-1ubq0t6 {font-size:1.5rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:1.5rem;}.techstack-grid.svelte-1ubq0t6 {justify-content:center;gap:0.5rem;}.techstack-item.svelte-1ubq0t6 {min-width:150px;padding:0.6rem 0.75rem;}.techstack-icon.svelte-1ubq0t6 {width:38px;height:38px;font-size:1.5rem;margin-bottom:0.25rem;}.techstack-name.svelte-1ubq0t6 {font-size:0.825rem;}.techstack-description.svelte-1ubq0t6 {font-size:0.65rem;}\r
  }\r
\r
  @media (max-width: 640px) {.hero-title.svelte-1ubq0t6 {font-size:1.75rem;}.hero-description.svelte-1ubq0t6 {font-size:1rem;}.section.svelte-1ubq0t6 {padding:1rem;}.section-title.svelte-1ubq0t6 {font-size:1.25rem;}.accordion-trigger.svelte-1ubq0t6 {padding:0.875rem 1rem;font-size:0.9375rem;}.accordion-content.svelte-1ubq0t6 {padding:0 1rem 1rem 1rem;font-size:0.9375rem;}.badges.svelte-1ubq0t6 {gap:0.5rem;}.badge.svelte-1ubq0t6 {font-size:0.8125rem;padding:0.375rem 0.75rem;}\r
  }`};function $p(n,e){Oe(e,!0),$e(n,$C);const t=()=>In(Gr,"$t",r),[r,i]=Hr();let s=te(null);function o(Ge){A(s,g(s)===Ge?null:Ge,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];kC("/users/apple");var d=MC(),h=p(d),u=p(h),m=p(u);f(u),f(h);var v=_(h,2),b=p(v),C=p(b,!0);f(b);var S=_(b,2),k=p(S),P=_(k),N=p(P,!0);f(P);var R=_(P);f(S),f(v);var T=_(v,2),I=p(T),w=p(I,!0);f(I);var L=_(I,2),M=p(L),F=_(p(M),2),$=p(F,!0);f(F);var B=_(F,2),re=p(B,!0);f(B),f(M);var U=_(M,2),z=_(p(U),2),Y=p(z,!0);f(z);var V=_(z,2),q=p(V,!0);f(V),f(U);var se=_(U,2),Q=_(p(se),2),me=p(Q,!0);f(Q);var de=_(Q,2),fe=p(de,!0);f(de),f(se);var j=_(se,2),J=_(p(j),2),he=p(J,!0);f(J);var Ee=_(J,2),ve=p(Ee,!0);f(Ee),f(j),f(L),f(T);var ie=_(T,2),ge=p(ie),Re=p(ge,!0);f(ge);var _e=_(ge,2);Lt(_e,21,()=>a,tr,(Ge,ke)=>{var Ke=RC(),Ye=p(Ke);Ye.__click=()=>o(g(ke).id);var ct=p(Ye),vn=p(ct,!0);f(ct);var Qt=_(ct,2);let Bn;var wr=p(Qt);Nc(wr,{size:20}),f(Qt),f(Ye);var Gn=_(Ye,2);{var gn=Ut=>{var yr=AC(),Er=p(yr),Ai=p(Er,!0);f(Er);var Kr=_(Er,2);{var Ri=vt=>{var ut=SC(),An=p(ut,!0);f(ut),G(_n=>E(An,_n),[()=>t()("home.aiTruth.item3.gpl")]),y(vt,ut)};K(Kr,vt=>{g(ke).showGpl&&vt(Ri)})}var Fe=_(Kr,2);{var Jt=vt=>{var ut=xC(),An=p(ut,!0);f(ut),G(_n=>E(An,_n),[()=>t()(g(ke).hintKey)]),y(vt,ut)};K(Fe,vt=>{g(ke).hintKey&&vt(Jt)})}f(yr),G(vt=>E(Ai,vt),[()=>t()(g(ke).contentKey)]),y(Ut,yr)};K(Gn,Ut=>{g(s)===g(ke).id&&Ut(gn)})}f(Ke),G(Ut=>{Me(Ye,"aria-expanded",g(s)===g(ke).id),E(vn,Ut),Bn=en(Qt,1,"accordion-icon svelte-1ubq0t6",null,Bn,{open:g(s)===g(ke).id})},[()=>t()(g(ke).titleKey)]),y(Ge,Ke)}),f(_e),f(ie);var Z=_(ie,2),Ae=p(Z),Be=p(Ae,!0);f(Ae);var lt=_(Ae,2);Lt(lt,21,()=>l,tr,(Ge,ke)=>{var Ke=OC(),Ye=p(Ke),ct=p(Ye);let vn;var Qt=p(ct);{var Bn=Fe=>{hl(Fe,{size:20})},wr=Fe=>{fl(Fe,{size:20})};K(Qt,Fe=>{g(ke).completed?Fe(Bn):Fe(wr,!1)})}f(ct);var Gn=_(ct,2),gn=p(Gn);let Ut;var yr=p(gn,!0);f(gn);var Er=_(gn,2);{var Ai=Fe=>{var Jt=PC(),vt=p(Jt,!0);f(Jt),G(ut=>E(vt,ut),[()=>t()(g(ke).descriptionKey)]),y(Fe,Jt)};K(Er,Fe=>{g(ke).descriptionKey&&Fe(Ai)})}f(Gn),f(Ye);var Kr=_(Ye,2);{var Ri=Fe=>{var Jt=LC();Lt(Jt,21,()=>g(ke).subitems,tr,(vt,ut)=>{var An=NC(),_n=p(An);let Ds;var ia=p(_n);{var Jp=Kn=>{hl(Kn,{size:16})},Xp=Kn=>{fl(Kn,{size:16})};K(ia,Kn=>{g(ut).completed?Kn(Jp):Kn(Xp,!1)})}f(_n);var sa=_(_n,2);let Oc;var Zp=p(sa,!0);f(sa),f(An),G(Kn=>{Ds=en(_n,1,"todo-subicon svelte-1ubq0t6",null,Ds,{completed:g(ut).completed}),Oc=en(sa,1,"todo-subtext svelte-1ubq0t6",null,Oc,{completed:g(ut).completed}),E(Zp,Kn)},[()=>t()(g(ut).key)]),y(vt,An)}),f(Jt),y(Fe,Jt)};K(Kr,Fe=>{g(ke).subitems.length>0&&Fe(Ri)})}f(Ke),G(Fe=>{vn=en(ct,1,"todo-icon svelte-1ubq0t6",null,vn,{completed:g(ke).completed}),Ut=en(gn,1,"todo-label svelte-1ubq0t6",null,Ut,{completed:g(ke).completed}),E(yr,Fe)},[()=>t()(g(ke).labelKey)]),y(Ge,Ke)}),f(lt),f(Z);var kt=_(Z,2),tt=p(kt),Kt=p(tt,!0);f(tt);var hn=_(tt,2),xn=p(hn),fn=p(xn),wt=p(fn,!0);f(fn);var pn=_(fn,1,!0);f(xn);var Te=_(xn,2);Lt(Te,21,()=>c,tr,(Ge,ke)=>{var Ke=DC(),Ye=p(Ke,!0);f(Ke),G(ct=>E(Ye,ct),[()=>t()(g(ke))]),y(Ge,Ke)}),f(Te),f(hn),f(kt);var we=_(kt,2),je=p(we),He=p(je,!0);f(je);var St=_(je,2),xt=p(St),Yt=p(xt,!0);f(xt);var $t=_(xt,2),nt=p($t),mt=_(nt),At=p(mt,!0);f(mt);var Ft=_(mt,1,!0);f($t);var zt=_($t,2),mn=p(zt,!0);f(zt),f(St),f(we),f(d),G((Ge,ke,Ke,Ye,ct,vn,Qt,Bn,wr,Gn,gn,Ut,yr,Er,Ai,Kr,Ri,Fe,Jt,vt,ut,An,_n,Ds,ia)=>{E(m,`✨ ${Ge??""}`),E(C,ke),E(k,`${Ke??""} `),E(N,Ye),E(R,` ${ct??""}`),E(w,vn),E($,Qt),E(re,Bn),E(Y,wr),E(q,Gn),E(me,gn),E(fe,Ut),E(he,yr),E(ve,Er),E(Re,Ai),E(Be,Kr),E(Kt,Ri),E(wt,Fe),E(pn,Jt),E(He,vt),E(Yt,ut),E(nt,`${An??""} `),E(At,_n),E(Ft,Ds),E(mn,ia)},[()=>t()("home.vibeBanner"),()=>t()("home.title"),()=>t()("home.description.part1"),()=>t()("home.description.linkText"),()=>t()("home.description.part2"),()=>t()("home.techStack.title"),()=>t()("home.techStack.svelte"),()=>t()("home.techStack.svelteDesc"),()=>t()("home.techStack.flutter"),()=>t()("home.techStack.flutterDesc"),()=>t()("home.techStack.firebase"),()=>t()("home.techStack.firebaseDesc"),()=>t()("home.techStack.dokplay"),()=>t()("home.techStack.dokplayDesc"),()=>t()("home.aiTruth.title"),()=>t()("home.todo.title"),()=>t()("home.overview.title"),()=>t()("home.overview.brand"),()=>t()("home.overview.description"),()=>t()("home.aiChange.title"),()=>t()("home.aiChange.description"),()=>t()("home.aiChange.emphasis"),()=>t()("home.aiChange.highlight"),()=>t()("home.aiChange.conclusion"),()=>t()("home.aiChange.hint")]),y(n,d),De(),i()}at(["click"]);ne($p,{},[],[],!0);var FC=O('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx">전화번호로 간편하게 로그인하세요.</p> <phone-login></phone-login></div>',2),zC=O('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx">환영합니다!</h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx">홈으로 이동</a></div>'),UC=O('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const qC={hash:"svelte-1mz53xx",code:`\r
  /* 로그인 페이지 컨테이너 */.login-page.svelte-1mz53xx {min-height:calc(100vh - 4rem);display:flex;align-items:center;justify-content:center;padding:2rem 1rem;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);}.login-container.svelte-1mz53xx {width:100%;max-width:28rem;}\r
\r
  /* 로그인 카드 */.login-card.svelte-1mz53xx {background:white;border-radius:1rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1),\r
      0 10px 10px -5px rgba(0, 0, 0, 0.04);padding:2rem;}.login-title.svelte-1mz53xx {font-size:2rem;font-weight:800;margin:0 0 0.5rem 0;text-align:center;color:#111827;}.login-description.svelte-1mz53xx {font-size:1rem;color:#6b7280;margin:0 0 2rem 0;text-align:center;}\r
\r
  /* 환영 카드 */.welcome-card.svelte-1mz53xx {background:white;border-radius:1rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1),\r
      0 10px 10px -5px rgba(0, 0, 0, 0.04);padding:3rem 2rem;text-align:center;}.welcome-title.svelte-1mz53xx {font-size:1.875rem;font-weight:800;margin:0 0 1rem 0;color:#111827;}.welcome-message.svelte-1mz53xx {font-size:1.125rem;color:#6b7280;margin:0 0 2rem 0;}.home-button.svelte-1mz53xx {display:inline-block;padding:0.75rem 2rem;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;border-radius:0.5rem;font-weight:600;text-decoration:none;transition:transform 0.2s, box-shadow 0.2s;}.home-button.svelte-1mz53xx:hover {transform:translateY(-2px);box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);}\r
\r
  /* 반응형 */\r
  @media (max-width: 640px) {.login-card.svelte-1mz53xx,\r
    .welcome-card.svelte-1mz53xx {padding:1.5rem;}.login-title.svelte-1mz53xx {font-size:1.5rem;}.welcome-title.svelte-1mz53xx {font-size:1.5rem;}\r
  }`};function Fp(n,e){Oe(e,!1),$e(n,qC);const t=()=>In(ra,"$user",i),r=()=>In(Gr,"$t",i),[i,s]=Hr();function o(m){console.log("Login successful:",m.detail),alert(`로그인 성공!
전화번호: ${m.detail.phoneNumber}`),window.location.href="/"}function a(m){console.error("Login error:",m.detail),alert(`로그인 실패: ${m.detail.error}`)}Mt();var l=UC(),c=p(l),d=p(c);{var h=m=>{var v=FC(),b=p(v),C=p(b,!0);f(b);var S=_(b,4);f(v),G(k=>E(C,k),[()=>r()("로그인")]),to("login-success",S,o),to("login-error",S,a),y(m,v)},u=m=>{var v=zC(),b=_(p(v),2),C=p(b);f(b),bn(2),f(v),G(()=>E(C,`${t().phoneNumber??""}로 로그인하셨습니다.`)),y(m,v)};K(d,m=>{t()?m(u,!1):m(h)})}f(c),f(l),y(n,l),De(),s()}ne(Fp,{},[],[],!0);var jC=O('<button class="menu-item svelte-163o8b2"> </button>'),HC=O('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><h2 class="menu-title svelte-163o8b2"> </h2> <p class="menu-description svelte-163o8b2">아래에서 이동할 페이지를 선택하세요</p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const WC={hash:"svelte-163o8b2",code:`\r
  /* 메뉴 컨테이너 */.menu-container.svelte-163o8b2 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}\r
\r
  /* 메뉴 카드 */.menu-card.svelte-163o8b2 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}\r
\r
  /* 메뉴 제목 */.menu-title.svelte-163o8b2 {margin:0 0 0.5rem 0;font-size:1.5rem;font-weight:bold;color:#111827;}\r
\r
  /* 메뉴 설명 */.menu-description.svelte-163o8b2 {margin:0 0 1.5rem 0;font-size:0.95rem;color:#6b7280;}\r
\r
  /* 메뉴 목록 */.menu-list.svelte-163o8b2 {display:flex;flex-direction:column;gap:0.5rem;}\r
\r
  /* 메뉴 항목 버튼 */.menu-item.svelte-163o8b2 {padding:0.75rem 1rem;background-color:#f3f4f6;border:1px solid #e5e7eb;border-radius:0.375rem;font-size:0.95rem;color:#111827;cursor:pointer;transition:all 0.2s ease;text-align:left;}.menu-item.svelte-163o8b2:hover {background-color:#e5e7eb;border-color:#d1d5db;transform:translateX(4px);}.menu-item.svelte-163o8b2:active {background-color:#d1d5db;}\r
\r
  /* 반응형 */\r
  @media (max-width: 640px) {.menu-card.svelte-163o8b2 {padding:1.5rem;}.menu-title.svelte-163o8b2 {font-size:1.25rem;}\r
  }`};function zp(n,e){Oe(e,!1),$e(n,WC);const t=()=>In(Gr,"$t",r),[r,i]=Hr();function s(u){window.history.pushState({},"",u),window.dispatchEvent(new PopStateEvent("popstate"))}const o=[{label:"홈",path:"/"},{label:"로그인",path:"/user/login"},{label:"사용자 프로필",path:"/user/profile"},{label:"게시물 목록",path:"/post/list"},{label:"게시물 상세 (예: ID:123)",path:"/post/detail/123"},{label:"채팅 목록",path:"/chat/list"},{label:"설정",path:"/settings"},{label:"앱 정보",path:"/about"},{label:"도움말",path:"/help"},{label:"이용 약관",path:"/terms"},{label:"개인정보 처리방침",path:"/privacy"},{label:"문의하기",path:"/contact"}];Mt();var a=HC(),l=p(a),c=p(l),d=p(c);f(c);var h=_(c,4);Lt(h,5,()=>o,u=>u.path,(u,m)=>{var v=jC();v.__click=()=>s(g(m).path);var b=p(v,!0);f(v),G(()=>E(b,g(m).label)),y(u,v)}),f(h),f(l),f(a),G(u=>E(d,`${u??""} - 메뉴`),[()=>t()("데모제목")]),y(n,a),De(),i()}at(["click"]);ne(zp,{},[],[],!0);var VC=O('<div class="user-profile-container svelte-17u94r3"><div class="profile-card svelte-17u94r3"><h2 class="page-title svelte-17u94r3">사용자 프로필</h2> <div class="construction-content svelte-17u94r3"><div class="construction-icon svelte-17u94r3">🚧</div> <p class="construction-message svelte-17u94r3">이 페이지는 공사중입니다</p> <p class="construction-description svelte-17u94r3">사용자 프로필 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-17u94r3">메뉴로 돌아가기</button></div></div>');const BC={hash:"svelte-17u94r3",code:`.user-profile-container.svelte-17u94r3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.profile-card.svelte-17u94r3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-17u94r3 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-17u94r3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-17u94r3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-17u94r3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-17u94r3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-17u94r3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-17u94r3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.profile-card.svelte-17u94r3 {padding:1.5rem;}.page-title.svelte-17u94r3 {font-size:1.25rem;}\r
  }`};function Up(n,e){Oe(e,!1),$e(n,BC);function t(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Mt();var r=VC(),i=p(r),s=_(p(i),4);s.__click=t,f(i),f(r),y(n,r),De()}at(["click"]);ne(Up,{},[],[],!0);async function GC(n,e,t,r,i){try{const s=Date.now(),o={uid:e,title:r,content:i,author:t,category:n,createdAt:s,updatedAt:s},a=na(vs,`forum/${n}/posts`);return{success:!0,postId:(await Ip(a,o)).key}}catch(s){return console.error("게시글 생성 실패:",s),{success:!1,error:s.message}}}function KC(n,e=10,t){try{const r=na(vs,`forum/${n}/posts`),i=iE(r,rE("createdAt"),tE(e)),s=Pc(i,o=>{if(o.exists()){const a=[];o.forEach(l=>{a.push({postId:l.key,...l.val()})}),a.reverse(),t(a)}else t([])});return()=>{Tp(r)}}catch(r){return console.error("게시글 조회 실패:",r),t([]),()=>{}}}const hd=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}];var YC=O('<div class="loading-screen svelte-1r1wwfo"><p>로딩 중...</p></div>'),QC=O("<button> </button>"),JC=O('<div class="empty-state svelte-1r1wwfo"><div class="empty-icon svelte-1r1wwfo">📝</div> <p class="empty-message svelte-1r1wwfo">게시글이 없습니다</p> <p class="empty-hint svelte-1r1wwfo">첫 번째 게시글을 작성해보세요!</p></div>'),XC=O('<div class="post-item svelte-1r1wwfo"><h3 class="post-title svelte-1r1wwfo"> </h3> <p class="post-content svelte-1r1wwfo"> </p> <div class="post-meta svelte-1r1wwfo"><span class="post-author svelte-1r1wwfo"> </span> <span class="post-date svelte-1r1wwfo"> </span></div></div>'),ZC=O('<div class="posts-list svelte-1r1wwfo"></div>'),eI=O("<option> </option>"),tI=O('<div class="modal-backdrop svelte-1r1wwfo" role="presentation"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo">새 게시글 작성</h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo">카테고리</label> <select id="category" class="form-control svelte-1r1wwfo"><option>카테고리 선택</option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo">제목</label> <input id="title" type="text" placeholder="제목을 입력하세요" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo">내용</label> <textarea id="content" placeholder="내용을 입력하세요" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo">취소</button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),nI=O('<div class="post-list-container svelte-1r1wwfo"><div class="header svelte-1r1wwfo"><div class="header-content svelte-1r1wwfo"><h1 class="page-title svelte-1r1wwfo">게시판</h1> <p class="page-subtitle svelte-1r1wwfo">커뮤니티와 정보를 공유하세요</p></div> <button class="btn-create-post svelte-1r1wwfo">✏️ 글쓰기</button></div> <div class="category-tabs svelte-1r1wwfo"></div> <!></div> <!>',1);const rI={hash:"svelte-1r1wwfo",code:`\r
  /* 게시판 컨테이너 */.post-list-container.svelte-1r1wwfo {width:100%;max-width:64rem;margin:0 auto;padding:2rem 1rem;}\r
\r
  /* 헤더 영역 */.header.svelte-1r1wwfo {display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.5rem;gap:1rem;}.header-content.svelte-1r1wwfo h1:where(.svelte-1r1wwfo) {margin:0 0 0.5rem 0;font-size:2rem;font-weight:bold;color:#111827;}.header-content.svelte-1r1wwfo p:where(.svelte-1r1wwfo) {margin:0;font-size:0.95rem;color:#6b7280;}\r
\r
  /* 글쓰기 버튼 */.btn-create-post.svelte-1r1wwfo {padding:0.75rem 1.5rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:background-color 0.2s ease;}.btn-create-post.svelte-1r1wwfo:hover {background-color:#2563eb;}\r
\r
  /* 카테고리 탭 */.category-tabs.svelte-1r1wwfo {display:flex;gap:0.5rem;border-bottom:1px solid #e5e7eb;margin-bottom:1.5rem;overflow-x:auto;}.tab.svelte-1r1wwfo {padding:0.75rem 1rem;background-color:transparent;border:none;color:#6b7280;font-size:0.95rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:all 0.2s ease;}.tab.svelte-1r1wwfo:hover {background-color:#f3f4f6;}.tab.active.svelte-1r1wwfo {background-color:#1f2937;color:#ffffff;border-radius:0.25rem 0.25rem 0 0;}\r
\r
  /* 빈 상태 */.empty-state.svelte-1r1wwfo {background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;padding:3rem;text-align:center;}.empty-icon.svelte-1r1wwfo {font-size:2.5rem;margin-bottom:1rem;display:block;}.empty-message.svelte-1r1wwfo {margin:0 0 0.5rem 0;font-size:1rem;color:#111827;font-weight:600;}.empty-hint.svelte-1r1wwfo {margin:0;font-size:0.875rem;color:#6b7280;}\r
\r
  /* 게시글 목록 */.posts-list.svelte-1r1wwfo {display:flex;flex-direction:column;gap:1rem;}.post-item.svelte-1r1wwfo {background-color:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;padding:1.5rem;transition:box-shadow 0.2s ease, transform 0.2s ease;cursor:pointer;}.post-item.svelte-1r1wwfo:hover {box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);transform:translateY(-2px);}.post-title.svelte-1r1wwfo {margin:0 0 1rem 0;font-size:1.125rem;font-weight:600;color:#111827;}.post-content.svelte-1r1wwfo {margin:0 0 1rem 0;font-size:0.875rem;color:#6b7280;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}.post-meta.svelte-1r1wwfo {display:flex;gap:1rem;font-size:0.75rem;color:#9ca3af;}.post-author.svelte-1r1wwfo,\r
  .post-date.svelte-1r1wwfo {display:inline-block;}\r
\r
  /* 로딩 화면 */.loading-screen.svelte-1r1wwfo {display:flex;align-items:center;justify-content:center;min-height:100vh;font-size:0.95rem;color:#6b7280;}\r
\r
  /* 모달 스타일 */.modal-backdrop.svelte-1r1wwfo {position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:50;border:none;padding:0;margin:0;cursor:pointer;}.modal.svelte-1r1wwfo {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1);width:100%;max-width:600px;max-height:90vh;overflow-y:auto;pointer-events:auto;cursor:default;}.modal-header.svelte-1r1wwfo {display:flex;justify-content:space-between;align-items:center;padding:1.5rem;border-bottom:1px solid #e5e7eb;}.modal-header.svelte-1r1wwfo h2:where(.svelte-1r1wwfo) {margin:0;font-size:1.25rem;font-weight:600;color:#111827;}.btn-close.svelte-1r1wwfo {background:none;border:none;font-size:1.5rem;color:#6b7280;cursor:pointer;padding:0;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;transition:color 0.2s ease;}.btn-close.svelte-1r1wwfo:hover {color:#111827;}.modal-content.svelte-1r1wwfo {padding:1.5rem;display:flex;flex-direction:column;gap:1rem;}\r
\r
  /* 폼 스타일 */.form-group.svelte-1r1wwfo {display:flex;flex-direction:column;gap:0.5rem;}.form-group.svelte-1r1wwfo label:where(.svelte-1r1wwfo) {font-size:0.875rem;font-weight:500;color:#111827;}.form-control.svelte-1r1wwfo {padding:0.75rem;border:1px solid #e5e7eb;border-radius:0.375rem;font-size:0.95rem;color:#111827;transition:border-color 0.2s ease;}.form-control.svelte-1r1wwfo:focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}.form-control.textarea.svelte-1r1wwfo {resize:vertical;font-family:inherit;}\r
\r
  /* 모달 버튼 */.modal-footer.svelte-1r1wwfo {display:flex;justify-content:flex-end;gap:1rem;padding:1.5rem;border-top:1px solid #e5e7eb;}.btn-cancel.svelte-1r1wwfo,\r
  .btn-submit.svelte-1r1wwfo {padding:0.75rem 1.5rem;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;}.btn-cancel.svelte-1r1wwfo {background-color:#e5e7eb;color:#111827;}.btn-cancel.svelte-1r1wwfo:hover:not(:disabled) {background-color:#d1d5db;}.btn-submit.svelte-1r1wwfo {background-color:#3b82f6;color:#ffffff;}.btn-submit.svelte-1r1wwfo:hover:not(:disabled) {background-color:#2563eb;}.btn-cancel.svelte-1r1wwfo:disabled,\r
  .btn-submit.svelte-1r1wwfo:disabled {opacity:0.6;cursor:not-allowed;}\r
\r
  /* 반응형 */\r
  @media (max-width: 640px) {.post-list-container.svelte-1r1wwfo {padding:1rem;}.header.svelte-1r1wwfo {flex-direction:column;align-items:stretch;}.btn-create-post.svelte-1r1wwfo {width:100%;}.modal.svelte-1r1wwfo {width:calc(100% - 2rem);max-height:85vh;}.header-content.svelte-1r1wwfo h1:where(.svelte-1r1wwfo) {font-size:1.5rem;}.category-tabs.svelte-1r1wwfo {overflow-x:auto;-webkit-overflow-scrolling:touch;}\r
  }`};function qp(n,e){Oe(e,!0),$e(n,rI);let t=te(null),r=te(""),i=te(!0);const s=new URLSearchParams(typeof window<"u"?window.location.search:"");let o=te(Ht(s.get("category")||"community")),a=te(!1),l=te(""),c=te(""),d=te(""),h=te(!1),u=te(Ht([]));Cs(()=>{const R=ms.onAuthStateChanged(async T=>{if(T){A(t,T.uid,!0);const I=T.displayName||T.email||"익명";A(r,I,!0)}else A(t,null),A(r,"");A(i,!1)});return()=>R()}),Zs(()=>{if(!g(i)){const R=KC(g(o),10,T=>{A(u,T,!0)});return()=>R()}});function m(){if(!g(t)){window.location.href="/user/login";return}A(a,!0)}function v(){A(a,!1),A(l,""),A(c,""),A(d,"")}async function b(){if(!g(l)){alert("카테고리를 선택해주세요.");return}if(!g(c).trim()){alert("제목을 입력해주세요.");return}if(!g(d).trim()){alert("내용을 입력해주세요.");return}if(!g(t)||!g(r)){alert("로그인 정보를 확인할 수 없습니다.");return}A(h,!0);try{const R=await GC(g(l),g(t),g(r),g(c),g(d));if(R.success){const T=g(l);A(a,!1),A(l,""),A(c,""),A(d,""),alert("게시글이 작성되었습니다.")}else alert(`게시글 저장 실패: ${R.error||"Unknown error"}`)}catch(R){console.error("게시글 저장 오류:",R),alert("게시글 저장 중 오류가 발생했습니다.")}finally{A(h,!1)}}function C(R){A(o,R,!0),window.history.pushState({},"",`/post/list?category=${R}`)}var S=pe(),k=ee(S);{var P=R=>{var T=YC();y(R,T)},N=R=>{var T=nI(),I=ee(T),w=p(I),L=_(p(w),2);L.__click=m,f(w);var M=_(w,2);Lt(M,21,()=>hd,z=>z.value,(z,Y)=>{var V=QC();V.__click=()=>C(g(Y).value);var q=p(V,!0);f(V),G(()=>{en(V,1,`tab ${g(o)===g(Y).value?"active":""}`,"svelte-1r1wwfo"),E(q,g(Y).label)}),y(z,V)}),f(M);var F=_(M,2);{var $=z=>{var Y=JC();y(z,Y)},B=z=>{var Y=ZC();Lt(Y,21,()=>g(u),V=>V.postId,(V,q)=>{var se=XC(),Q=p(se),me=p(Q,!0);f(Q);var de=_(Q,2),fe=p(de,!0);f(de);var j=_(de,2),J=p(j),he=p(J);f(J);var Ee=_(J,2),ve=p(Ee,!0);f(Ee),f(j),f(se),G(ie=>{E(me,g(q).title),E(fe,g(q).content),E(he,`작성자: ${g(q).author??""}`),E(ve,ie)},[()=>new Date(g(q).createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),y(V,se)}),f(Y),y(z,Y)};K(F,z=>{g(u).length===0?z($):z(B,!1)})}f(I);var re=_(I,2);{var U=z=>{var Y=tI();Y.__click=()=>A(a,!1),Y.__keydown=Z=>Z.key==="Escape"&&A(a,!1);var V=p(Y);V.__click=Z=>Z.stopPropagation();var q=p(V),se=_(p(q),2);se.__click=()=>A(a,!1),f(q);var Q=_(q,2),me=p(Q),de=_(p(me),2),fe=p(de);fe.value=fe.__value="";var j=_(fe);Lt(j,17,()=>hd,Z=>Z.value,(Z,Ae)=>{var Be=eI(),lt=p(Be,!0);f(Be);var kt={};G(()=>{E(lt,g(Ae).label),kt!==(kt=g(Ae).value)&&(Be.value=(Be.__value=g(Ae).value)??"")}),y(Z,Be)}),f(de),f(me);var J=_(me,2),he=_(p(J),2);ro(he),f(J);var Ee=_(J,2),ve=_(p(Ee),2);Bm(ve),f(Ee),f(Q);var ie=_(Q,2),ge=p(ie);ge.__click=v;var Re=_(ge,2);Re.__click=b;var _e=p(Re,!0);f(Re),f(ie),f(V),f(Y),G(()=>{ge.disabled=g(h),Re.disabled=g(h),E(_e,g(h)?"전송 중...":"전송")}),ch(de,()=>g(l),Z=>A(l,Z)),io(he,()=>g(c),Z=>A(c,Z)),io(ve,()=>g(d),Z=>A(d,Z)),y(z,Y)};K(re,z=>{g(a)&&z(U)})}y(R,T)};K(k,R=>{g(i)?R(P):R(N,!1)})}y(n,S),De()}at(["click","keydown"]);ne(qp,{},[],[],!0);var iI=O('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><h2 class="page-title svelte-1sszjx6">게시물 상세</h2> <div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1sszjx6">게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1sszjx6">메뉴로 돌아가기</button></div></div>');const sI={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-1sszjx6 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}.page-title.svelte-1sszjx6 {font-size:1.25rem;}\r
  }`};function jp(n,e){Oe(e,!1),$e(n,sI);function t(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Mt();var r=iI(),i=p(r),s=_(p(i),4);s.__click=t,f(i),f(r),y(n,r),De()}at(["click"]);ne(jp,{},[],[],!0);var oI=O('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><h2 class="page-title svelte-1xfn8v9">채팅 목록</h2> <div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1xfn8v9">채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1xfn8v9">메뉴로 돌아가기</button></div></div>');const aI={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-1xfn8v9 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}.page-title.svelte-1xfn8v9 {font-size:1.25rem;}\r
  }`};function Hp(n,e){Oe(e,!1),$e(n,aI);function t(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Mt();var r=oI(),i=p(r),s=_(p(i),4);s.__click=t,f(i),f(r),y(n,r),De()}at(["click"]);ne(Hp,{},[],[],!0);var lI=O('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><h2 class="page-title svelte-177ja08">설정</h2> <div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08">이 페이지는 공사중입니다</p> <p class="construction-description svelte-177ja08">설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-177ja08">메뉴로 돌아가기</button></div></div>');const cI={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-177ja08 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}.page-title.svelte-177ja08 {font-size:1.25rem;}\r
  }`};function Wp(n,e){Oe(e,!1),$e(n,cI);function t(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Mt();var r=lI(),i=p(r),s=_(p(i),4);s.__click=t,f(i),f(r),y(n,r),De()}at(["click"]);ne(Wp,{},[],[],!0);var uI=O('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><h2 class="page-title svelte-65loqe">앱 정보</h2> <div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe">이 페이지는 공사중입니다</p> <p class="construction-description svelte-65loqe">앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-65loqe">메뉴로 돌아가기</button></div></div>');const dI={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-65loqe {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}.page-title.svelte-65loqe {font-size:1.25rem;}\r
  }`};function Vp(n,e){Oe(e,!1),$e(n,dI);function t(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Mt();var r=uI(),i=p(r),s=_(p(i),4);s.__click=t,f(i),f(r),y(n,r),De()}at(["click"]);ne(Vp,{},[],[],!0);var hI=O('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><h2 class="page-title svelte-19u7yna">도움말</h2> <div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna">이 페이지는 공사중입니다</p> <p class="construction-description svelte-19u7yna">도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-19u7yna">메뉴로 돌아가기</button></div></div>');const fI={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-19u7yna {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}.page-title.svelte-19u7yna {font-size:1.25rem;}\r
  }`};function Bp(n,e){Oe(e,!1),$e(n,fI);function t(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Mt();var r=hI(),i=p(r),s=_(p(i),4);s.__click=t,f(i),f(r),y(n,r),De()}at(["click"]);ne(Bp,{},[],[],!0);var pI=O('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><h2 class="page-title svelte-134dw7w">이용 약관</h2> <div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w">이 페이지는 공사중입니다</p> <p class="construction-description svelte-134dw7w">이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-134dw7w">메뉴로 돌아가기</button></div></div>');const mI={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-134dw7w {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}.page-title.svelte-134dw7w {font-size:1.25rem;}\r
  }`};function Gp(n,e){Oe(e,!1),$e(n,mI);function t(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Mt();var r=pI(),i=p(r),s=_(p(i),4);s.__click=t,f(i),f(r),y(n,r),De()}at(["click"]);ne(Gp,{},[],[],!0);var vI=O('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><h2 class="page-title svelte-8iwrwj">개인정보 처리방침</h2> <div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj">이 페이지는 공사중입니다</p> <p class="construction-description svelte-8iwrwj">개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-8iwrwj">메뉴로 돌아가기</button></div></div>');const gI={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-8iwrwj {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}.page-title.svelte-8iwrwj {font-size:1.25rem;}\r
  }`};function Kp(n,e){Oe(e,!1),$e(n,gI);function t(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Mt();var r=vI(),i=p(r),s=_(p(i),4);s.__click=t,f(i),f(r),y(n,r),De()}at(["click"]);ne(Kp,{},[],[],!0);var _I=O('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><h2 class="page-title svelte-1f7uyy3">문의하기</h2> <div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1f7uyy3">문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1f7uyy3">메뉴로 돌아가기</button></div></div>');const bI={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-1f7uyy3 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}.page-title.svelte-1f7uyy3 {font-size:1.25rem;}\r
  }`};function Yp(n,e){Oe(e,!1),$e(n,bI);function t(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Mt();var r=_I(),i=p(r),s=_(p(i),4);s.__click=t,f(i),f(r),y(n,r),De()}at(["click"]);ne(Yp,{},[],[],!0);var wI=O('<sns-layout><main class="content svelte-1hwhcgc"><!></main> <footer class="footer svelte-1hwhcgc"><p class="svelte-1hwhcgc"> </p></footer></sns-layout>',2);const yI={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 */.content.svelte-1hwhcgc {max-width:800px;margin:0 auto;}

  /* 푸터 */.footer.svelte-1hwhcgc {max-width:800px;margin:2rem auto 0;padding-top:2rem;border-top:1px solid #e5e7eb;text-align:center;color:#6b7280;}.footer.svelte-1hwhcgc p:where(.svelte-1hwhcgc) {margin:0;font-size:0.875rem;}

  /* 반응형 */`};function Qp(n,e){Oe(e,!0),$e(n,yI);const t=()=>In(Gr,"$t",r),[r,i]=Hr();let s=te(Ht(window.location.pathname));function o(){A(s,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",o);var a=wI(),l=p(a),c=p(l);{var d=b=>{Fp(b,{})},h=b=>{var C=pe(),S=ee(C);{var k=N=>{zp(N,{})},P=N=>{var R=pe(),T=ee(R);{var I=L=>{Up(L,{})},w=L=>{var M=pe(),F=ee(M);{var $=re=>{qp(re,{})},B=re=>{var U=pe(),z=ee(U);{var Y=q=>{jp(q,{})},V=q=>{var se=pe(),Q=ee(se);{var me=fe=>{Hp(fe,{})},de=fe=>{var j=pe(),J=ee(j);{var he=ve=>{Wp(ve,{})},Ee=ve=>{var ie=pe(),ge=ee(ie);{var Re=Z=>{Vp(Z,{})},_e=Z=>{var Ae=pe(),Be=ee(Ae);{var lt=tt=>{Bp(tt,{})},kt=tt=>{var Kt=pe(),hn=ee(Kt);{var xn=wt=>{Gp(wt,{})},fn=wt=>{var pn=pe(),Te=ee(pn);{var we=He=>{Kp(He,{})},je=He=>{var St=pe(),xt=ee(St);{var Yt=nt=>{Yp(nt,{})},$t=nt=>{$p(nt,{})};K(xt,nt=>{g(s)==="/contact"?nt(Yt):nt($t,!1)},!0)}y(He,St)};K(Te,He=>{g(s)==="/privacy"?He(we):He(je,!1)},!0)}y(wt,pn)};K(hn,wt=>{g(s)==="/terms"?wt(xn):wt(fn,!1)},!0)}y(tt,Kt)};K(Be,tt=>{g(s)==="/help"?tt(lt):tt(kt,!1)},!0)}y(Z,Ae)};K(ge,Z=>{g(s)==="/about"?Z(Re):Z(_e,!1)},!0)}y(ve,ie)};K(J,ve=>{g(s)==="/settings"?ve(he):ve(Ee,!1)},!0)}y(fe,j)};K(Q,fe=>{g(s)==="/chat/list"?fe(me):fe(de,!1)},!0)}y(q,se)};K(z,q=>{g(s).startsWith("/post/detail/")?q(Y):q(V,!1)},!0)}y(re,U)};K(F,re=>{g(s)==="/post/list"?re($):re(B,!1)},!0)}y(L,M)};K(T,L=>{g(s)==="/user/profile"?L(I):L(w,!1)},!0)}y(N,R)};K(S,N=>{g(s)==="/menu"?N(k):N(P,!1)},!0)}y(b,C)};K(c,b=>{g(s)==="/user/login"?b(d):b(h,!1)})}f(l);var u=_(l,2),m=p(u),v=p(m,!0);f(m),f(u),f(a),G(b=>E(v,b),[()=>t()("푸터")]),y(n,a),De(),i()}ne(Qp,{},[],[],!0);Pl(Qp,{target:document.getElementById("app")});
