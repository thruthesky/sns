(function(G,Us){typeof exports=="object"&&typeof module<"u"?Us(exports):typeof define=="function"&&define.amd?define(["exports"],Us):(G=typeof globalThis<"u"?globalThis:G||self,Us(G.SNSComponents={}))})(this,(function(G){"use strict";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add("5");const zs=1,Hs=2,su=4,$m=8,Fm=16,Um=1,zm=2,ou=4,Hm=8,Wm=16,jm=1,Vm=2,au="[",Ws="[!",wa="]",Ur={},qe=Symbol(),Bm="http://www.w3.org/1999/xhtml",qm="http://www.w3.org/2000/svg",Gm="@attach",lu=!1;var Ea=Array.isArray,Km=Array.prototype.indexOf,Ia=Array.from,js=Object.keys,wi=Object.defineProperty,on=Object.getOwnPropertyDescriptor,cu=Object.getOwnPropertyDescriptors,Ym=Object.prototype,Qm=Array.prototype,Ca=Object.getPrototypeOf,uu=Object.isExtensible;function Ei(t){return typeof t=="function"}const Rn=()=>{};function Jm(t){return t()}function Vs(t){for(var e=0;e<t.length;e++)t[e]()}function du(){var t,e,n=new Promise((r,i)=>{t=r,e=i});return{promise:n,resolve:t,reject:e}}function Xm(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const Xe=2,Ta=4,Bs=8,an=16,ln=32,Pn=64,qs=128,Ze=1024,ct=2048,cn=4096,_t=8192,un=16384,Sa=32768,Nn=65536,hu=1<<17,Zm=1<<18,ur=1<<19,fu=1<<20,Et=256,Gs=512,Ks=32768,ka=1<<21,Aa=1<<22,dr=1<<23,jt=Symbol("$state"),Ra=Symbol("legacy props"),e_=Symbol(""),zr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},t_=1,Pa=3,Hr=8;function pu(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function n_(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function r_(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function i_(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function s_(t){throw new Error("https://svelte.dev/e/effect_orphan")}function o_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function a_(){throw new Error("https://svelte.dev/e/hydration_failed")}function l_(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function c_(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function u_(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function d_(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function h_(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function Ys(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function f_(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function p_(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let U=!1;function gt(t){U=t}let ee;function Ge(t){if(t===null)throw Ys(),Ur;return ee=t}function xn(){return Ge(Kt(ee))}function p(t){if(U){if(Kt(ee)!==null)throw Ys(),Ur;ee=t}}function It(t=1){if(U){for(var e=t,n=ee;e--;)n=Kt(n);ee=n}}function Qs(t=!0){for(var e=0,n=ee;;){if(n.nodeType===Hr){var r=n.data;if(r===wa){if(e===0)return n;e-=1}else(r===au||r===Ws)&&(e+=1)}var i=Kt(n);t&&n.remove(),n=i}}function mu(t){if(!t||t.nodeType!==Hr)throw Ys(),Ur;return t.data}function _u(t){return t===this.v}function gu(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function vu(t){return!gu(t,this.v)}let Wr=!1,m_=!1;function __(){Wr=!0}let Pe=null;function jr(t){Pe=t}function Vt(t,e=!1,n){Pe={p:Pe,i:!1,c:null,e:null,s:t,x:null,l:Wr&&!e?{s:null,u:null,$:[]}:null}}function Bt(t){var e=Pe,n=e.e;if(n!==null){e.e=null;for(var r of n)Hu(r)}return t!==void 0&&(e.x=t),e.i=!0,Pe=e.p,t??{}}function Ii(){return!Wr||Pe!==null&&Pe.l===null}let hr=[];function bu(){var t=hr;hr=[],Vs(t)}function Ln(t){if(hr.length===0&&!Ti){var e=hr;queueMicrotask(()=>{e===hr&&bu()})}hr.push(t)}function g_(){for(;hr.length>0;)bu()}function yu(t){var e=B;if(e===null)return ne.f|=dr,t;if((e.f&Sa)===0){if((e.f&qs)===0)throw t;e.b.error(t)}else Vr(t,e)}function Vr(t,e){for(;e!==null;){if((e.f&qs)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const Js=new Set;let me=null,Ci=null,xt=null,qt=[],Xs=null,Na=!1,Ti=!1;class Lt{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#i=0;#l=null;#o=[];#s=[];skipped_effects=new Set;is_fork=!1;process(e){qt=[],Ci=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#n(r,n);this.is_fork||this.#c(),this.#i>0||this.is_fork?(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects)):(Ci=this,me=null,Eu(n.render_effects),Eu(n.effects),Ci=null,this.#l?.resolve()),xt=null}#n(e,n){e.f^=Ze;for(var r=e.first;r!==null;){var i=r.f,s=(i&(ln|Pn))!==0,o=s&&(i&Ze)!==0,a=o||(i&_t)!==0||this.skipped_effects.has(r);if((r.f&qs)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){s?r.f^=Ze:(i&Ta)!==0?n.effects.push(r):Ni(r)&&((r.f&an)!==0&&n.block_effects.push(r),xi(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===n.effect&&(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects),n=n.parent),r=c.next,c=c.parent}}#a(e){for(const n of e)((n.f&ct)!==0?this.#o:this.#s).push(n),et(n,Ze)}capture(e,n){this.previous.has(e)||this.previous.set(e,n),this.current.set(e,e.v),xt?.set(e,e.v)}activate(){me=this}deactivate(){me=null,xt=null}flush(){if(this.activate(),qt.length>0){if(wu(),me!==null&&me!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#i===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#u()}#u(){if(Js.size>1){this.previous.clear();var e=xt,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of Js){if(i===this){n=!1;continue}const s=[];for(const[a,l]of this.current){if(i.current.has(a))if(n&&l!==i.current.get(a))i.current.set(a,l);else continue;s.push(a)}if(s.length===0)continue;const o=[...i.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of s)Iu(c,o,a,l);if(qt.length>0){me=i,i.apply();for(const c of qt)i.#n(c,r);qt=[],i.deactivate()}}}me=null,xt=e}this.committed=!0,Js.delete(this)}increment(e){this.#r+=1,e&&(this.#i+=1)}decrement(e){this.#r-=1,e&&(this.#i-=1),this.revive()}revive(){for(const e of this.#o)et(e,ct),fr(e);for(const e of this.#s)et(e,cn),fr(e);this.#o=[],this.#s=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=du()).promise}static ensure(){if(me===null){const e=me=new Lt;Js.add(me),Ti||Lt.enqueue(()=>{me===e&&e.flush()})}return me}static enqueue(e){Ln(e)}apply(){}}function Me(t){var e=Ti;Ti=!0;try{for(var n;;){if(g_(),qt.length===0&&(me?.flush(),qt.length===0))return Xs=null,n;wu()}}finally{Ti=e}}function wu(){var t=Gr;Na=!0;try{var e=0;for(Ku(!0);qt.length>0;){var n=Lt.ensure();if(e++>1e3){var r,i;v_()}n.process(qt),Dn.clear()}}finally{Na=!1,Ku(t),Xs=null}}function v_(){try{o_()}catch(t){Vr(t,Xs)}}let dn=null;function Eu(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(un|_t))===0&&Ni(r)&&(dn=new Set,xi(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Vu(r):r.fn=null),dn?.size>0)){Dn.clear();for(const i of dn){if((i.f&(un|_t))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)dn.has(o)&&(dn.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(un|_t))===0&&xi(l)}}dn.clear()}}dn=null}}function Iu(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const i of t.reactions){const s=i.f;(s&Xe)!==0?Iu(i,e,n,r):(s&(Aa|an))!==0&&(s&ct)===0&&Cu(i,e,r)&&(et(i,ct),fr(i))}}function Cu(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const i of t.deps){if(e.includes(i))return!0;if((i.f&Xe)!==0&&Cu(i,e,n))return n.set(i,!0),!0}return n.set(t,!1),!1}function fr(t){for(var e=Xs=t;e.parent!==null;){e=e.parent;var n=e.f;if(Na&&e===B&&(n&an)!==0)return;if((n&(Pn|ln))!==0){if((n&Ze)===0)return;e.f^=Ze}}qt.push(e)}function b_(t){let e=0,n=On(0),r;return()=>{P_()&&(y(n),ro(()=>(e===0&&(r=Yt(()=>t(()=>ki(n)))),e+=1,()=>{Ln(()=>{e-=1,e===0&&(r?.(),r=void 0,ki(n))})})))}}var y_=Nn|ur|qs;function w_(t,e,n){new E_(t,e,n)}class E_{parent;#t=!1;#e;#r=U?ee:null;#i;#l;#o;#s=null;#n=null;#a=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#b=b_(()=>(this.#h=On(this.#f),()=>{this.#h=null}));constructor(e,n,r){this.#e=e,this.#i=n,this.#l=r,this.parent=B.b,this.#t=!!this.#i.pending,this.#o=pr(()=>{if(B.b=this,U){const s=this.#r;xn(),s.nodeType===Hr&&s.data===Ws?this.#w():this.#y()}else{var i=this.#g();try{this.#s=ut(()=>r(i))}catch(s){this.error(s)}this.#d>0?this.#_():this.#t=!1}return()=>{this.#u?.remove()}},y_),U&&(this.#e=ee)}#y(){try{this.#s=ut(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#w(){const e=this.#i.pending;e&&(this.#n=ut(()=>e(this.#e)),Lt.enqueue(()=>{var n=this.#g();this.#s=this.#m(()=>(Lt.ensure(),ut(()=>this.#l(n)))),this.#d>0?this.#_():(qr(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=Ct(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#m(e){var n=B,r=ne,i=Pe;Tt(this.#o),dt(this.#o),jr(this.#o.ctx);try{return e()}catch(s){return yu(s),null}finally{Tt(n),dt(r),jr(i)}}#_(){const e=this.#i.pending;this.#s!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Gu(this.#s,this.#c)),this.#n===null&&(this.#n=ut(()=>e(this.#e)))}#v(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#v(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#n&&qr(this.#n,()=>{this.#n=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#v(e),this.#f+=e,this.#h&&Br(this.#h,this.#f)}get_effect_pending(){return this.#b(),y(this.#h)}error(e){var n=this.#i.onerror;let r=this.#i.failed;if(this.#p||!n&&!r)throw e;this.#s&&(Ue(this.#s),this.#s=null),this.#n&&(Ue(this.#n),this.#n=null),this.#a&&(Ue(this.#a),this.#a=null),U&&(Ge(this.#r),It(),Ge(Qs()));var i=!1,s=!1;const o=()=>{if(i){p_();return}i=!0,s&&h_(),Lt.ensure(),this.#f=0,this.#a!==null&&qr(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#s=this.#m(()=>(this.#p=!1,ut(()=>this.#l(this.#e)))),this.#d>0?this.#_():this.#t=!1};var a=ne;try{dt(null),s=!0,n?.(e,o),s=!1}catch(l){Vr(l,this.#o&&this.#o.parent)}finally{dt(a)}r&&Ln(()=>{this.#a=this.#m(()=>{Lt.ensure(),this.#p=!0;try{return ut(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return Vr(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Tu(t,e,n,r){const i=Ii()?Si:xa;if(n.length===0&&t.length===0){r(e.map(i));return}var s=me,o=B,a=I_();function l(){Promise.all(n.map(c=>C_(c))).then(c=>{a();try{r([...e.map(i),...c])}catch(d){(o.f&un)===0&&Vr(d,o)}s?.deactivate(),Zs()}).catch(c=>{Vr(c,o)})}t.length>0?Promise.all(t).then(()=>{a();try{return l()}finally{s?.deactivate(),Zs()}}):l()}function I_(){var t=B,e=ne,n=Pe,r=me;return function(s=!0){Tt(t),dt(e),jr(n),s&&r?.activate()}}function Zs(){Tt(null),dt(null),jr(null)}function Si(t){var e=Xe|ct,n=ne!==null&&(ne.f&Xe)!==0?ne:null;return B===null||n!==null&&(n.f&Et)!==0?e|=Et:B.f|=ur,{ctx:Pe,deps:null,effects:null,equals:_u,f:e,fn:t,reactions:null,rv:0,v:qe,wv:0,parent:n??B,ac:null}}function C_(t,e){let n=B;n===null&&n_();var r=n.b,i=void 0,s=On(qe),o=!ne,a=new Map;return D_(()=>{var l=du();i=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===me&&c.committed&&c.deactivate(),Zs()})}catch(u){l.reject(u),Zs()}var c=me;if(o){var d=!r.is_pending();r.update_pending_count(1),c.increment(d),a.get(c)?.reject(zr),a.delete(c),a.set(c,l)}const h=(u,f=void 0)=>{if(c.activate(),f)f!==zr&&(s.f|=dr,Br(s,f));else{(s.f&dr)!==0&&(s.f^=dr),Br(s,u);for(const[m,g]of a){if(a.delete(m),m===c)break;g.reject(zr)}}o&&(r.update_pending_count(-1),c.decrement(d))};l.promise.then(h,u=>h(null,u||"unknown"))}),Ai(()=>{for(const l of a.values())l.reject(zr)}),new Promise(l=>{function c(d){function h(){d===i?l(s):c(i)}d.then(h,h)}c(i)})}function eo(t){const e=Si(t);return Qu(e),e}function xa(t){const e=Si(t);return e.equals=vu,e}function Su(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)Ue(e[n])}}function T_(t){for(var e=t.parent;e!==null;){if((e.f&Xe)===0)return e;e=e.parent}return null}function La(t){var e,n=B;Tt(T_(t));try{t.f&=~Ks,Su(t),e=td(t)}finally{Tt(n)}return e}function ku(t){var e=La(t);if(t.equals(e)||(t.v=e,t.wv=Zu()),!mr)if(xt!==null)xt.set(t,t.v);else{var n=(Mn||(t.f&Et)!==0)&&t.deps!==null?cn:Ze;et(t,n)}}let Da=new Set;const Dn=new Map;let Au=!1;function On(t,e){var n={f:0,v:t,reactions:null,equals:_u,rv:0,wv:0};return n}function oe(t,e){const n=On(t);return Qu(n),n}function Oa(t,e=!1,n=!0){const r=On(t);return e||(r.equals=vu),Wr&&n&&Pe!==null&&Pe.l!==null&&(Pe.l.s??=[]).push(r),r}function L(t,e,n=!1){ne!==null&&(!Ot||(ne.f&hu)!==0)&&Ii()&&(ne.f&(Xe|an|Aa|hu))!==0&&!fn?.includes(t)&&d_();let r=n?hn(e):e;return Br(t,r)}function Br(t,e){if(!t.equals(e)){var n=t.v;mr?Dn.set(t,e):Dn.set(t,n),t.v=e;var r=Lt.ensure();r.capture(t,n),(t.f&Xe)!==0&&((t.f&ct)!==0&&La(t),et(t,(t.f&Et)===0?Ze:cn)),t.wv=Zu(),Pu(t,ct),Ii()&&B!==null&&(B.f&Ze)!==0&&(B.f&(ln|Pn))===0&&(St===null?$_([t]):St.push(t)),!r.is_fork&&Da.size>0&&!Au&&S_()}return e}function S_(){Au=!1;const t=Array.from(Da);for(const e of t)(e.f&Ze)!==0&&et(e,cn),Ni(e)&&xi(e);Da.clear()}function Ru(t,e=1){var n=y(t),r=e===1?n++:n--;return L(t,n),r}function ki(t){L(t,t.v+1)}function Pu(t,e){var n=t.reactions;if(n!==null)for(var r=Ii(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f;if(!(!r&&o===B)){var l=(a&ct)===0;l&&et(o,e),(a&Xe)!==0?(a&Ks)===0&&(o.f|=Ks,Pu(o,cn)):l&&((a&an)!==0&&dn!==null&&dn.add(o),fr(o))}}}function hn(t){if(typeof t!="object"||t===null||jt in t)return t;const e=Ca(t);if(e!==Ym&&e!==Qm)return t;var n=new Map,r=Ea(t),i=oe(0),s=_r,o=a=>{if(_r===s)return a();var l=ne,c=_r;dt(null),Xu(s);var d=a();return dt(l),Xu(c),d};return r&&n.set("length",oe(t.length)),new Proxy(t,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&c_();var d=n.get(l);return d===void 0?d=o(()=>{var h=oe(c.value);return n.set(l,h),h}):L(d,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const d=o(()=>oe(qe));n.set(l,d),ki(i)}}else L(c,qe),ki(i);return!0},get(a,l,c){if(l===jt)return t;var d=n.get(l),h=l in a;if(d===void 0&&(!h||on(a,l)?.writable)&&(d=o(()=>{var f=hn(h?a[l]:qe),m=oe(f);return m}),n.set(l,d)),d!==void 0){var u=y(d);return u===qe?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var d=n.get(l);d&&(c.value=y(d))}else if(c===void 0){var h=n.get(l),u=h?.v;if(h!==void 0&&u!==qe)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===jt)return!0;var c=n.get(l),d=c!==void 0&&c.v!==qe||Reflect.has(a,l);if(c!==void 0||B!==null&&(!d||on(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=d?hn(a[l]):qe,f=oe(u);return f}),n.set(l,c));var h=y(c);if(h===qe)return!1}return d},set(a,l,c,d){var h=n.get(l),u=l in a;if(r&&l==="length")for(var f=c;f<h.v;f+=1){var m=n.get(f+"");m!==void 0?L(m,qe):f in a&&(m=o(()=>oe(qe)),n.set(f+"",m))}if(h===void 0)(!u||on(a,l)?.writable)&&(h=o(()=>oe(void 0)),L(h,hn(c)),n.set(l,h));else{u=h.v!==qe;var g=o(()=>hn(c));L(h,g)}var w=Reflect.getOwnPropertyDescriptor(a,l);if(w?.set&&w.set.call(d,c),!u){if(r&&typeof l=="string"){var T=n.get("length"),S=Number(l);Number.isInteger(S)&&S>=T.v&&L(T,S+1)}ki(i)}return!0},ownKeys(a){y(i);var l=Reflect.ownKeys(a).filter(h=>{var u=n.get(h);return u===void 0||u.v!==qe});for(var[c,d]of n)d.v!==qe&&!(c in a)&&l.push(c);return l},setPrototypeOf(){u_()}})}function Nu(t){try{if(t!==null&&typeof t=="object"&&jt in t)return t[jt]}catch{}return t}function k_(t,e){return Object.is(Nu(t),Nu(e))}var Ma,xu,Lu,Du;function $a(){if(Ma===void 0){Ma=window,xu=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Lu=on(e,"firstChild").get,Du=on(e,"nextSibling").get,uu(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),uu(n)&&(n.__t=void 0)}}function Ct(t=""){return document.createTextNode(t)}function Gt(t){return Lu.call(t)}function Kt(t){return Du.call(t)}function _(t,e){if(!U)return Gt(t);var n=Gt(ee);if(n===null)n=ee.appendChild(Ct());else if(e&&n.nodeType!==Pa){var r=Ct();return n?.before(r),Ge(r),r}return Ge(n),n}function te(t,e=!1){if(!U){var n=Gt(t);return n instanceof Comment&&n.data===""?Kt(n):n}if(e&&ee?.nodeType!==Pa){var r=Ct();return ee?.before(r),Ge(r),r}return ee}function b(t,e=1,n=!1){let r=U?ee:t;for(var i;e--;)i=r,r=Kt(r);if(!U)return r;if(n&&r?.nodeType!==Pa){var s=Ct();return r===null?i?.after(s):r.before(s),Ge(s),s}return Ge(r),r}function Ou(t){t.textContent=""}function Mu(){return!1}function A_(t,e){if(e){const n=document.body;t.autofocus=!0,Ln(()=>{document.activeElement===n&&t.focus()})}}let $u=!1;function Fu(){$u||($u=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function to(t){var e=ne,n=B;dt(null),Tt(null);try{return t()}finally{dt(e),Tt(n)}}function Uu(t,e,n,r=n){t.addEventListener(e,()=>to(n));const i=t.__on_r;i?t.__on_r=()=>{i(),r(!0)}:t.__on_r=()=>r(!0),Fu()}function zu(t){B===null&&ne===null&&s_(),ne!==null&&(ne.f&Et)!==0&&B===null&&i_(),mr&&r_()}function R_(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Dt(t,e,n,r=!0){var i=B;i!==null&&(i.f&_t)!==0&&(t|=_t);var s={ctx:Pe,deps:null,nodes_start:null,nodes_end:null,f:t|ct,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{xi(s),s.f|=Sa}catch(l){throw Ue(s),l}else e!==null&&fr(s);if(r){var o=s;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&ur)===0&&(o=o.first,(t&an)!==0&&(t&Nn)!==0&&o!==null&&(o.f|=Nn)),o!==null&&(o.parent=i,i!==null&&R_(o,i),ne!==null&&(ne.f&Xe)!==0&&(t&Pn)===0)){var a=ne;(a.effects??=[]).push(o)}}return s}function P_(){return ne!==null&&!Ot}function Ai(t){const e=Dt(Bs,null,!1);return et(e,Ze),e.teardown=t,e}function no(t){zu();var e=B.f,n=!ne&&(e&ln)!==0&&(e&Sa)===0;if(n){var r=Pe;(r.e??=[]).push(t)}else return Hu(t)}function Hu(t){return Dt(Ta|fu,t,!1)}function N_(t){return zu(),Dt(Bs|fu,t,!0)}function x_(t){Lt.ensure();const e=Dt(Pn|ur,t,!0);return()=>{Ue(e)}}function L_(t){Lt.ensure();const e=Dt(Pn|ur,t,!0);return(n={})=>new Promise(r=>{n.outro?qr(e,()=>{Ue(e),r(void 0)}):(Ue(e),r(void 0))})}function Ri(t){return Dt(Ta,t,!1)}function D_(t){return Dt(Aa|ur,t,!0)}function ro(t,e=0){return Dt(Bs|e,t,!0)}function re(t,e=[],n=[],r=[]){Tu(r,e,n,i=>{Dt(Bs,()=>t(...i.map(y)),!0)})}function pr(t,e=0){var n=Dt(an|e,t,!0);return n}function ut(t,e=!0){return Dt(ln|ur,t,!0,e)}function Wu(t){var e=t.teardown;if(e!==null){const n=mr,r=ne;Yu(!0),dt(null);try{e.call(null)}finally{Yu(n),dt(r)}}}function ju(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const i=n.ac;i!==null&&to(()=>{i.abort(zr)});var r=n.next;(n.f&Pn)!==0?n.parent=null:Ue(n,e),n=r}}function O_(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&ln)===0&&Ue(e),e=n}}function Ue(t,e=!0){var n=!1;(e||(t.f&Zm)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(M_(t.nodes_start,t.nodes_end),n=!0),ju(t,e&&!n),io(t,0),et(t,un);var r=t.transitions;if(r!==null)for(const s of r)s.stop();Wu(t);var i=t.parent;i!==null&&i.first!==null&&Vu(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function M_(t,e){for(;t!==null;){var n=t===e?null:Kt(t);t.remove(),t=n}}function Vu(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function qr(t,e,n=!0){var r=[];Fa(t,r,!0),Bu(r,()=>{n&&Ue(t),e&&e()})}function Bu(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var i of t)i.out(r)}else e()}function Fa(t,e,n){if((t.f&_t)===0){if(t.f^=_t,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var r=t.first;r!==null;){var i=r.next,s=(r.f&Nn)!==0||(r.f&ln)!==0&&(t.f&an)!==0;Fa(r,e,s?n:!1),r=i}}}function Ua(t){qu(t,!0)}function qu(t,e){if((t.f&_t)!==0){t.f^=_t,(t.f&Ze)===0&&(et(t,ct),fr(t));for(var n=t.first;n!==null;){var r=n.next,i=(n.f&Nn)!==0||(n.f&ln)!==0;qu(n,i?e:!1),n=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}function Gu(t,e){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var i=n===r?null:Kt(n);e.append(n),n=i}}let Gr=!1;function Ku(t){Gr=t}let mr=!1;function Yu(t){mr=t}let ne=null,Ot=!1;function dt(t){ne=t}let B=null;function Tt(t){B=t}let fn=null;function Qu(t){ne!==null&&(fn===null?fn=[t]:fn.push(t))}let rt=null,vt=0,St=null;function $_(t){St=t}let Ju=1,Pi=0,_r=Pi;function Xu(t){_r=t}let Mn=!1;function Zu(){return++Ju}function Ni(t){var e=t.f;if((e&ct)!==0)return!0;if((e&cn)!==0){var n=t.deps,r=(e&Et)!==0;if(e&Xe&&(t.f&=~Ks),n!==null){var i,s,o=(e&Gs)!==0,a=r&&B!==null&&!Mn,l=n.length;if((o||a)&&(B===null||(B.f&un)===0)){var c=t,d=c.parent;for(i=0;i<l;i++)s=n[i],(o||!s?.reactions?.includes(c))&&(s.reactions??=[]).push(c);o&&(c.f^=Gs),a&&d!==null&&(d.f&Et)===0&&(c.f^=Et)}for(i=0;i<l;i++)if(s=n[i],Ni(s)&&ku(s),s.wv>t.wv)return!0}(!r||B!==null&&!Mn)&&et(t,Ze)}return!1}function ed(t,e,n=!0){var r=t.reactions;if(r!==null&&!fn?.includes(t))for(var i=0;i<r.length;i++){var s=r[i];(s.f&Xe)!==0?ed(s,e,!1):e===s&&(n?et(s,ct):(s.f&Ze)!==0&&et(s,cn),fr(s))}}function td(t){var e=rt,n=vt,r=St,i=ne,s=Mn,o=fn,a=Pe,l=Ot,c=_r,d=t.f;rt=null,vt=0,St=null,Mn=(d&Et)!==0&&(Ot||!Gr||ne===null),ne=(d&(ln|Pn))===0?t:null,fn=null,jr(t.ctx),Ot=!1,_r=++Pi,t.ac!==null&&(to(()=>{t.ac.abort(zr)}),t.ac=null);try{t.f|=ka;var h=t.fn,u=h(),f=t.deps;if(rt!==null){var m;if(io(t,vt),f!==null&&vt>0)for(f.length=vt+rt.length,m=0;m<rt.length;m++)f[vt+m]=rt[m];else t.deps=f=rt;if(!Mn||(d&Xe)!==0&&t.reactions!==null)for(m=vt;m<f.length;m++)(f[m].reactions??=[]).push(t)}else f!==null&&vt<f.length&&(io(t,vt),f.length=vt);if(Ii()&&St!==null&&!Ot&&f!==null&&(t.f&(Xe|cn|ct))===0)for(m=0;m<St.length;m++)ed(St[m],t);return i!==null&&i!==t&&(Pi++,St!==null&&(r===null?r=St:r.push(...St))),(t.f&dr)!==0&&(t.f^=dr),u}catch(g){return yu(g)}finally{t.f^=ka,rt=e,vt=n,St=r,ne=i,Mn=s,fn=o,jr(a),Ot=l,_r=c}}function F_(t,e){let n=e.reactions;if(n!==null){var r=Km.call(n,t);if(r!==-1){var i=n.length-1;i===0?n=e.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(e.f&Xe)!==0&&(rt===null||!rt.includes(e))&&(et(e,cn),(e.f&(Et|Gs))===0&&(e.f^=Gs),Su(e),io(e,0))}function io(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)F_(t,n[r])}function xi(t){var e=t.f;if((e&un)===0){et(t,Ze);var n=B,r=Gr;B=t,Gr=!0;try{(e&an)!==0?O_(t):ju(t),Wu(t);var i=td(t);t.teardown=typeof i=="function"?i:null,t.wv=Ju;var s;lu&&m_&&(t.f&ct)!==0&&t.deps}finally{Gr=r,B=n}}}async function U_(){await Promise.resolve(),Me()}function y(t){var e=t.f,n=(e&Xe)!==0;if(ne!==null&&!Ot){var r=B!==null&&(B.f&un)!==0;if(!r&&!fn?.includes(t)){var i=ne.deps;if((ne.f&ka)!==0)t.rv<Pi&&(t.rv=Pi,rt===null&&i!==null&&i[vt]===t?vt++:rt===null?rt=[t]:(!Mn||!rt.includes(t))&&rt.push(t));else{(ne.deps??=[]).push(t);var s=t.reactions;s===null?t.reactions=[ne]:s.includes(ne)||s.push(ne)}}}else if(n&&t.deps===null&&t.effects===null){var o=t,a=o.parent;a!==null&&(a.f&Et)===0&&(o.f^=Et)}if(mr){if(Dn.has(t))return Dn.get(t);if(n){o=t;var l=o.v;return((o.f&Ze)===0&&o.reactions!==null||nd(o))&&(l=La(o)),Dn.set(o,l),l}}else if(n){if(o=t,xt?.has(o))return xt.get(o);Ni(o)&&ku(o)}if(xt?.has(t))return xt.get(t);if((t.f&dr)!==0)throw t.v;return t.v}function nd(t){if(t.v===qe)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Dn.has(e)||(e.f&Xe)!==0&&nd(e))return!0;return!1}function Yt(t){var e=Ot;try{return Ot=!0,t()}finally{Ot=e}}const z_=-7169;function et(t,e){t.f=t.f&z_|e}function Kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(jt in t)za(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&jt in n&&za(n)}}}function za(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{za(t[r],e)}catch{}const n=Ca(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=cu(n);for(let i in r){const s=r[i].get;if(s)try{s.call(t)}catch{}}}}}const rd=new Set,Ha=new Set;function id(t,e,n,r={}){function i(s){if(r.capture||Li.call(e,s),!s.cancelBubble)return to(()=>n?.call(this,s))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Ln(()=>{e.addEventListener(t,i,r)}):e.addEventListener(t,i,r),i}function Wa(t,e,n,r,i){var s={capture:r,passive:i},o=id(t,e,n,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Ai(()=>{e.removeEventListener(t,o,s)})}function $n(t){for(var e=0;e<t.length;e++)rd.add(t[e]);for(var n of Ha)n(t)}let sd=null;function Li(t){var e=this,n=e.ownerDocument,r=t.type,i=t.composedPath?.()||[],s=i[0]||t.target;sd=t;var o=0,a=sd===t&&t.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||t.target,s!==e){wi(t,"currentTarget",{configurable:!0,get(){return s||n}});var d=ne,h=B;dt(null),Tt(null);try{for(var u,f=[];s!==null;){var m=s.assignedSlot||s.parentNode||s.host||null;try{var g=s["__"+r];g!=null&&(!s.disabled||t.target===s)&&g.call(s,t)}catch(w){u?f.push(w):u=w}if(t.cancelBubble||m===e||m===null)break;s=m}if(u){for(let w of f)queueMicrotask(()=>{throw w});throw u}}finally{t.__root=e,delete t.currentTarget,dt(d),Tt(h)}}}function od(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function pn(t,e){var n=B;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function H(t,e){var n=(e&jm)!==0,r=(e&Vm)!==0,i,s=!t.startsWith("<!>");return()=>{if(U)return pn(ee,null),ee;i===void 0&&(i=od(s?t:"<!>"+t),n||(i=Gt(i)));var o=r||xu?document.importNode(i,!0):i.cloneNode(!0);if(n){var a=Gt(o),l=o.lastChild;pn(a,l)}else pn(o,o);return o}}function H_(t,e,n="svg"){var r=!t.startsWith("<!>"),i=`<${n}>${r?t:"<!>"+t}</${n}>`,s;return()=>{if(U)return pn(ee,null),ee;if(!s){var o=od(i),a=Gt(o);s=Gt(a)}var l=s.cloneNode(!0);return pn(l,l),l}}function W_(t,e){return H_(t,e,"svg")}function ue(){if(U)return pn(ee,null),ee;var t=document.createDocumentFragment(),e=document.createComment(""),n=Ct();return t.append(e,n),pn(e,n),t}function N(t,e){if(U){B.nodes_end=ee,xn();return}t!==null&&t.before(e)}function j_(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const V_=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function B_(t){return V_.includes(t)}const q_={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function G_(t){return t=t.toLowerCase(),q_[t]??t}const K_=["touchstart","touchmove"];function Y_(t){return K_.includes(t)}const Q_=["textarea","script","style","title"];function J_(t){return Q_.includes(t)}function x(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function ad(t,e){return ld(t,e)}function X_(t,e){$a(),e.intro=e.intro??!1;const n=e.target,r=U,i=ee;try{for(var s=Gt(n);s&&(s.nodeType!==Hr||s.data!==au);)s=Kt(s);if(!s)throw Ur;gt(!0),Ge(s);const o=ld(t,{...e,anchor:s});return gt(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Ur&&console.warn("Failed to hydrate: ",o),e.recover===!1&&a_(),$a(),Ou(n),gt(!1),ad(t,e)}finally{gt(r),Ge(i)}}const Yr=new Map;function ld(t,{target:e,anchor:n,props:r={},events:i,context:s,intro:o=!0}){$a();var a=new Set,l=h=>{for(var u=0;u<h.length;u++){var f=h[u];if(!a.has(f)){a.add(f);var m=Y_(f);e.addEventListener(f,Li,{passive:m});var g=Yr.get(f);g===void 0?(document.addEventListener(f,Li,{passive:m}),Yr.set(f,1)):Yr.set(f,g+1)}}};l(Ia(rd)),Ha.add(l);var c=void 0,d=L_(()=>{var h=n??e.appendChild(Ct());return w_(h,{pending:()=>{}},u=>{if(s){Vt({});var f=Pe;f.c=s}if(i&&(r.$$events=i),U&&pn(u,null),c=t(u,r)||{},U&&(B.nodes_end=ee,ee===null||ee.nodeType!==Hr||ee.data!==wa))throw Ys(),Ur;s&&Bt()}),()=>{for(var u of a){e.removeEventListener(u,Li);var f=Yr.get(u);--f===0?(document.removeEventListener(u,Li),Yr.delete(u)):Yr.set(u,f)}Ha.delete(l),h!==n&&h.parentNode?.removeChild(h)}});return ja.set(c,d),c}let ja=new WeakMap;function Z_(t,e){const n=ja.get(t);return n?(ja.delete(t),n(e)):Promise.resolve()}class Va{anchor;#t=new Map;#e=new Map;#r=new Map;#i=!0;constructor(e,n=!0){this.anchor=e,this.#i=n}#l=()=>{var e=me;if(this.#t.has(e)){var n=this.#t.get(e),r=this.#e.get(n);if(r)Ua(r);else{var i=this.#r.get(n);i&&(this.#e.set(n,i.effect),this.#r.delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,o]of this.#t){if(this.#t.delete(s),s===e)break;const a=this.#r.get(o);a&&(Ue(a.effect),this.#r.delete(o))}for(const[s,o]of this.#e){if(s===n)continue;const a=()=>{if(Array.from(this.#t.values()).includes(s)){var c=document.createDocumentFragment();Gu(o,c),c.append(Ct()),this.#r.set(s,{effect:o,fragment:c})}else Ue(o);this.#e.delete(s)};this.#i||!r?qr(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const n=Array.from(this.#t.values());for(const[r,i]of this.#r)n.includes(r)||(Ue(i.effect),this.#r.delete(r))};ensure(e,n){var r=me,i=Mu();if(n&&!this.#e.has(e)&&!this.#r.has(e))if(i){var s=document.createDocumentFragment(),o=Ct();s.append(o),this.#r.set(e,{effect:ut(()=>n(o)),fragment:s})}else this.#e.set(e,ut(()=>n(this.anchor)));if(this.#t.set(r,e),i){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else U&&(this.anchor=ee),this.#l()}}function Di(t){Pe===null&&pu(),Wr&&Pe.l!==null?tg(Pe).m.push(t):no(()=>{const e=Yt(t);if(typeof e=="function")return e})}function eg(t){Pe===null&&pu(),Di(()=>()=>Yt(t))}function tg(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}function ve(t,e,n=!1){U&&xn();var r=new Va(t),i=n?Nn:0;function s(o,a){if(U){const c=mu(t)===Ws;if(o===c){var l=Qs();Ge(l),r.anchor=l,gt(!1),r.ensure(o,a),gt(!0);return}}r.ensure(o,a)}pr(()=>{var o=!1;e((a,l=!0)=>{o=!0,s(l,a)}),o||s(!1,null)},i)}function so(t,e){return e}function ng(t,e,n){for(var r=t.items,i=[],s=e.length,o=0;o<s;o++)Fa(e[o].e,i,!0);var a=s>0&&i.length===0&&n!==null;if(a){var l=n.parentNode;Ou(l),l.append(n),r.clear(),Qt(t,e[0].prev,e[s-1].next)}Bu(i,()=>{for(var c=0;c<s;c++){var d=e[c];a||(r.delete(d.k),Qt(t,d.prev,d.next)),Ue(d.e,!a)}})}function Qr(t,e,n,r,i,s=null){var o=t,a={flags:e,items:new Map,first:null},l=(e&su)!==0;if(l){var c=t;o=U?Ge(Gt(c)):c.appendChild(Ct())}U&&xn();var d=null,h=!1,u=new Map,f=xa(()=>{var T=n();return Ea(T)?T:T==null?[]:Ia(T)}),m,g;function w(){rg(g,m,a,u,o,i,e,r,n),s!==null&&(m.length===0?d?Ua(d):d=ut(()=>s(o)):d!==null&&qr(d,()=>{d=null}))}pr(()=>{g??=B,m=y(f);var T=m.length;if(h&&T===0)return;h=T===0;let S=!1;if(U){var P=mu(o)===Ws;P!==(T===0)&&(o=Qs(),Ge(o),gt(!1),S=!0)}if(U){for(var E=null,O,C=0;C<T;C++){if(ee.nodeType===Hr&&ee.data===wa){o=ee,S=!0,gt(!1);break}var I=m[C],v=r(I,C);O=Ba(ee,a,E,null,I,v,C,i,e,n),a.items.set(v,O),E=O}T>0&&Ge(Qs())}if(U)T===0&&s&&(d=ut(()=>s(o)));else if(Mu()){var k=new Set,A=me;for(C=0;C<T;C+=1){I=m[C],v=r(I,C);var z=a.items.get(v)??u.get(v);z?(e&(zs|Hs))!==0&&cd(z,I,C,e):(O=Ba(null,a,null,null,I,v,C,i,e,n,!0),u.set(v,O)),k.add(v)}for(const[M,j]of a.items)k.has(M)||A.skipped_effects.add(j.e);A.oncommit(w)}else w();S&&gt(!0),y(f)}),U&&(o=ee)}function rg(t,e,n,r,i,s,o,a,l){var c=(o&$m)!==0,d=(o&(zs|Hs))!==0,h=e.length,u=n.items,f=n.first,m=f,g,w=null,T,S=[],P=[],E,O,C,I;if(c)for(I=0;I<h;I+=1)E=e[I],O=a(E,I),C=u.get(O),C!==void 0&&(C.a?.measure(),(T??=new Set).add(C));for(I=0;I<h;I+=1){if(E=e[I],O=a(E,I),C=u.get(O),C===void 0){var v=r.get(O);if(v!==void 0){r.delete(O),u.set(O,v);var k=w?w.next:m;Qt(n,w,v),Qt(n,v,k),qa(v,k,i),w=v}else{var A=m?m.e.nodes_start:i;w=Ba(A,n,w,w===null?n.first:w.next,E,O,I,s,o,l)}u.set(O,w),S=[],P=[],m=w.next;continue}if(d&&cd(C,E,I,o),(C.e.f&_t)!==0&&(Ua(C.e),c&&(C.a?.unfix(),(T??=new Set).delete(C))),C!==m){if(g!==void 0&&g.has(C)){if(S.length<P.length){var z=P[0],M;w=z.prev;var j=S[0],K=S[S.length-1];for(M=0;M<S.length;M+=1)qa(S[M],z,i);for(M=0;M<P.length;M+=1)g.delete(P[M]);Qt(n,j.prev,K.next),Qt(n,w,j),Qt(n,K,z),m=z,w=K,I-=1,S=[],P=[]}else g.delete(C),qa(C,m,i),Qt(n,C.prev,C.next),Qt(n,C,w===null?n.first:w.next),Qt(n,w,C),w=C;continue}for(S=[],P=[];m!==null&&m.k!==O;)(m.e.f&_t)===0&&(g??=new Set).add(m),P.push(m),m=m.next;if(m===null)continue;C=m}S.push(C),w=C,m=C.next}if(m!==null||g!==void 0){for(var $=g===void 0?[]:Ia(g);m!==null;)(m.e.f&_t)===0&&$.push(m),m=m.next;var Y=$.length;if(Y>0){var q=(o&su)!==0&&h===0?i:null;if(c){for(I=0;I<Y;I+=1)$[I].a?.measure();for(I=0;I<Y;I+=1)$[I].a?.fix()}ng(n,$,q)}}c&&Ln(()=>{if(T!==void 0)for(C of T)C.a?.apply()}),t.first=n.first&&n.first.e,t.last=w&&w.e;for(var W of r.values())Ue(W.e);r.clear()}function cd(t,e,n,r){(r&zs)!==0&&Br(t.v,e),(r&Hs)!==0?Br(t.i,n):t.i=n}function Ba(t,e,n,r,i,s,o,a,l,c,d){var h=(l&zs)!==0,u=(l&Fm)===0,f=h?u?Oa(i,!1,!1):On(i):i,m=(l&Hs)===0?o:On(o),g={i:m,v:f,k:s,a:null,e:null,prev:n,next:r};try{if(t===null){var w=document.createDocumentFragment();w.append(t=Ct())}return g.e=ut(()=>a(t,f,m,c),U),g.e.prev=n&&n.e,g.e.next=r&&r.e,n===null?d||(e.first=g):(n.next=g,n.e.next=g.e),r!==null&&(r.prev=g,r.e.prev=g.e),g}finally{}}function qa(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==null&&s!==r;){var o=Kt(s);i.before(s),s=o}}function Qt(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Ee(t,e,n,r,i){U&&xn();var s=e.$$slots?.[n],o=!1;s===!0&&(s=e.children,o=!0),s===void 0||s(t,o?()=>r:r)}function ig(t,e,n){U&&xn();var r=new Va(t);pr(()=>{var i=e()??null;r.ensure(i,i&&(s=>n(s,i)))},Nn)}function sg(t,e,n,r,i,s){let o=U;U&&xn();var a=null;U&&ee.nodeType===t_&&(a=ee,xn());var l=U?ee:t,c=new Va(l,!1);pr(()=>{const d=e()||null;var h=qm;if(d===null){c.ensure(null,null);return}return c.ensure(d,u=>{if(d){if(a=U?a:document.createElementNS(h,d),pn(a,a),r){U&&J_(d)&&a.append(document.createComment(""));var f=U?Gt(a):a.appendChild(Ct());U&&(f===null?gt(!1):Ge(f)),r(a,f)}B.nodes_end=a,u.before(a)}U&&Ge(u)}),()=>{}},Nn),Ai(()=>{}),o&&(gt(!0),Ge(l))}function mn(t,e){Ri(()=>{var n=t.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const i=document.createElement("style");i.id=e.hash,i.textContent=e.code,r.appendChild(i)}})}function og(t,e){var n=void 0,r;pr(()=>{n!==(n=e())&&(r&&(Ue(r),r=null),n&&(r=ut(()=>{Ri(()=>n(t))})))})}function ud(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=ud(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function ag(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=ud(t))&&(r&&(r+=" "),r+=e);return r}function lg(t){return typeof t=="object"?ag(t):t??""}const dd=[...` 	
\r\f \v\uFEFF`];function cg(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var i in n)if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s;(o===0||dd.includes(r[o-1]))&&(a===r.length||dd.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function hd(t,e=!1){var n=e?" !important;":";",r="";for(var i in t){var s=t[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function Ga(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function ug(t,e){if(e){var n="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(Ga)),i&&l.push(...Object.keys(i).map(Ga));var c=0,d=-1;const g=t.length;for(var h=0;h<g;h++){var u=t[h];if(a?u==="/"&&t[h-1]==="*"&&(a=!1):s?s===u&&(s=!1):u==="/"&&t[h+1]==="*"?a=!0:u==='"'||u==="'"?s=u:u==="("?o++:u===")"&&o--,!a&&s===!1&&o===0){if(u===":"&&d===-1)d=h;else if(u===";"||h===g-1){if(d!==-1){var f=Ga(t.substring(c,d).trim());if(!l.includes(f)){u!==";"&&h++;var m=t.substring(c,h).trim();n+=" "+m+";"}}c=h+1,d=-1}}}}return r&&(n+=hd(r)),i&&(n+=hd(i,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function Jr(t,e,n,r,i,s){var o=t.__className;if(U||o!==n||o===void 0){var a=cg(n,r,s);(!U||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):e?t.className=a:t.setAttribute("class",a)),t.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&t.classList.toggle(l,c)}return s}function Ka(t,e={},n,r){for(var i in n){var s=n[i];e[i]!==s&&(n[i]==null?t.style.removeProperty(i):t.style.setProperty(i,s,r))}}function dg(t,e,n,r){var i=t.__style;if(U||i!==e){var s=ug(e,r);(!U||s!==t.getAttribute("style"))&&(s==null?t.removeAttribute("style"):t.style.cssText=s),t.__style=e}else r&&(Array.isArray(r)?(Ka(t,n?.[0],r[0]),Ka(t,n?.[1],r[1],"important")):Ka(t,n,r));return r}function Oi(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Ea(e))return f_();for(var r of t.options)r.selected=e.includes(Mi(r));return}for(r of t.options){var i=Mi(r);if(k_(i,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ya(t){var e=new MutationObserver(()=>{Oi(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ai(()=>{e.disconnect()})}function hg(t,e,n=e){var r=new WeakSet,i=!0;Uu(t,"change",s=>{var o=s?"[selected]":":checked",a;if(t.multiple)a=[].map.call(t.querySelectorAll(o),Mi);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");a=l&&Mi(l)}n(a),me!==null&&r.add(me)}),Ri(()=>{var s=e();if(t===document.activeElement){var o=Ci??me;if(r.has(o))return}if(Oi(t,s,i),i&&s===void 0){var a=t.querySelector(":checked");a!==null&&(s=Mi(a),n(s))}t.__value=s,i=!1}),Ya(t)}function Mi(t){return"__value"in t?t.__value:t.value}const $i=Symbol("class"),Fi=Symbol("style"),fd=Symbol("is custom element"),pd=Symbol("is html");function Qa(t){if(U){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;Le(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;Le(t,"checked",null),t.checked=i}}};t.__on_r=n,Ln(n),Fu()}}function fg(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Le(t,e,n,r){var i=_d(t);U&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="loading"&&(t[e_]=n),n==null?t.removeAttribute(e):typeof n!="string"&&vd(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function pg(t,e,n,r,i=!1,s=!1){if(U&&i&&t.tagName==="INPUT"){var o=t,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in n||Qa(o)}var l=_d(t),c=l[fd],d=!l[pd];let h=U&&c;h&&gt(!1);var u=e||{},f=t.tagName==="OPTION";for(var m in e)m in n||(n[m]=null);n.class?n.class=lg(n.class):n[$i]&&(n.class=null),n[Fi]&&(n.style??=null);var g=vd(t);for(const C in n){let I=n[C];if(f&&C==="value"&&I==null){t.value=t.__value="",u[C]=I;continue}if(C==="class"){var w=t.namespaceURI==="http://www.w3.org/1999/xhtml";Jr(t,w,I,r,e?.[$i],n[$i]),u[C]=I,u[$i]=n[$i];continue}if(C==="style"){dg(t,I,e?.[Fi],n[Fi]),u[C]=I,u[Fi]=n[Fi];continue}var T=u[C];if(!(I===T&&!(I===void 0&&t.hasAttribute(C)))){u[C]=I;var S=C[0]+C[1];if(S!=="$$")if(S==="on"){const v={},k="$$"+C;let A=C.slice(2);var P=B_(A);if(j_(A)&&(A=A.slice(0,-7),v.capture=!0),!P&&T){if(I!=null)continue;t.removeEventListener(A,u[k],v),u[k]=null}if(I!=null)if(P)t[`__${A}`]=I,$n([A]);else{let z=function(M){u[C].call(this,M)};u[k]=id(A,t,z,v)}else P&&(t[`__${A}`]=void 0)}else if(C==="style")Le(t,C,I);else if(C==="autofocus")A_(t,!!I);else if(!c&&(C==="__value"||C==="value"&&I!=null))t.value=t.__value=I;else if(C==="selected"&&f)fg(t,I);else{var E=C;d||(E=G_(E));var O=E==="defaultValue"||E==="defaultChecked";if(I==null&&!c&&!O)if(l[C]=null,E==="value"||E==="checked"){let v=t;const k=e===void 0;if(E==="value"){let A=v.defaultValue;v.removeAttribute(E),v.defaultValue=A,v.value=v.__value=k?A:null}else{let A=v.defaultChecked;v.removeAttribute(E),v.defaultChecked=A,v.checked=k?A:!1}}else t.removeAttribute(C);else O||g.includes(E)&&(c||typeof I!="string")?(t[E]=I,E in l&&(l[E]=qe)):typeof I!="function"&&Le(t,E,I)}}}return h&&gt(!0),u}function md(t,e,n=[],r=[],i=[],s,o=!1,a=!1){Tu(i,n,r,l=>{var c=void 0,d={},h=t.nodeName==="SELECT",u=!1;if(pr(()=>{var m=e(...l.map(y)),g=pg(t,c,m,s,o,a);u&&h&&"value"in m&&Oi(t,m.value);for(let T of Object.getOwnPropertySymbols(d))m[T]||Ue(d[T]);for(let T of Object.getOwnPropertySymbols(m)){var w=m[T];T.description===Gm&&(!c||w!==c[T])&&(d[T]&&Ue(d[T]),d[T]=ut(()=>og(t,()=>w))),g[T]=w}c=g}),h){var f=t;Ri(()=>{Oi(f,c.value,!0),Ya(f)})}u=!0})}function _d(t){return t.__attributes??={[fd]:t.nodeName.includes("-"),[pd]:t.namespaceURI===Bm}}var gd=new Map;function vd(t){var e=t.getAttribute("is")||t.nodeName,n=gd.get(e);if(n)return n;gd.set(e,n=[]);for(var r,i=t,s=Element.prototype;s!==i;){r=cu(i);for(var o in r)r[o].set&&n.push(o);i=Ca(i)}return n}function bd(t,e,n=e){var r=new WeakSet;Uu(t,"input",async i=>{var s=i?t.defaultValue:t.value;if(s=Ja(t)?Xa(s):s,n(s),me!==null&&r.add(me),await U_(),s!==(s=e())){var o=t.selectionStart,a=t.selectionEnd,l=t.value.length;if(t.value=s??"",a!==null){var c=t.value.length;o===a&&a===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(a,c))}}}),(U&&t.defaultValue!==t.value||Yt(e)==null&&t.value)&&(n(Ja(t)?Xa(t.value):t.value),me!==null&&r.add(me)),ro(()=>{var i=e();if(t===document.activeElement){var s=Ci??me;if(r.has(s))return}Ja(t)&&i===Xa(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function Ja(t){var e=t.type;return e==="number"||e==="range"}function Xa(t){return t===""?null:+t}function yd(t,e){return t===e||t?.[jt]===e}function wd(t={},e,n,r){return Ri(()=>{var i,s;return ro(()=>{i=s,s=[],Yt(()=>{t!==n(...s)&&(e(t,...s),i&&yd(n(...i),t)&&e(null,...i))})}),()=>{Ln(()=>{s&&yd(n(...s),t)&&e(null,...s)})}}),t}function Ed(t=!1){const e=Pe,n=e.l.u;if(!n)return;let r=()=>Kr(e.s);if(t){let i=0,s={};const o=Si(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});r=()=>y(o)}n.b.length&&N_(()=>{Id(e,r),Vs(n.b)}),no(()=>{const i=Yt(()=>n.m.map(Jm));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&no(()=>{Id(e,r),Vs(n.a)})}function Id(t,e){if(t.l.s)for(const n of t.l.s)y(n);e()}function Za(t,e,n){if(t==null)return e(void 0),n&&n(void 0),Rn;const r=Yt(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const Xr=[];function mg(t,e){return{subscribe:Zr(t,e).subscribe}}function Zr(t,e=Rn){let n=null;const r=new Set;function i(a){if(gu(t,a)&&(t=a,n)){const l=!Xr.length;for(const c of r)c[1](),Xr.push(c,t);if(l){for(let c=0;c<Xr.length;c+=2)Xr[c][0](Xr[c+1]);Xr.length=0}}}function s(a){i(a(t))}function o(a,l=Rn){const c=[a,l];return r.add(c),r.size===1&&(n=e(i,s)||Rn),a(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function _g(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return mg(n,(o,a)=>{let l=!1;const c=[];let d=0,h=Rn;const u=()=>{if(d)return;h();const m=e(r?c[0]:c,o,a);s?o(m):h=typeof m=="function"?m:Rn},f=i.map((m,g)=>Za(m,w=>{c[g]=w,d&=~(1<<g),l&&u()},()=>{d|=1<<g}));return l=!0,u(),function(){Vs(f),h(),l=!1}})}function gg(t){let e;return Za(t,n=>e=n)(),e}let oo=!1,el=Symbol();function gr(t,e,n){const r=n[e]??={store:null,source:Oa(void 0),unsubscribe:Rn};if(r.store!==t&&!(el in n))if(r.unsubscribe(),r.store=t??null,t==null)r.source.v=void 0,r.unsubscribe=Rn;else{var i=!0;r.unsubscribe=Za(t,s=>{i?r.source.v=s:L(r.source,s)}),i=!1}return t&&el in n?gg(t):y(r.source)}function tl(){const t={};function e(){Ai(()=>{for(var n in t)t[n].unsubscribe();wi(t,el,{enumerable:!1,value:!0})})}return[t,e]}function vg(t){var e=oo;try{return oo=!1,[t(),oo]}finally{oo=e}}const bg={get(t,e){if(!t.exclude.includes(e))return y(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=B;try{Tt(t.parent_effect),t.special[e]=ze({get[e](){return t.props[e]}},e,ou)}finally{Tt(r)}}return t.special[e](n),Ru(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),Ru(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function Ie(t,e){return new Proxy({props:t,exclude:e,special:{},version:On(0),parent_effect:B},bg)}const yg={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(Ei(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let i=t.props[r];Ei(i)&&(i=i());const s=on(i,e);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(Ei(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=on(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(t,e){if(e===jt||e===Ra)return!1;for(let n of t.props)if(Ei(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(Ei(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function ke(...t){return new Proxy({props:t},yg)}function ze(t,e,n,r){var i=!Wr||(n&zm)!==0,s=(n&Hm)!==0,o=(n&Wm)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?Yt(r):r),a),d;if(s){var h=jt in t||Ra in t;d=on(t,e)?.set??(h&&e in t?P=>t[e]=P:void 0)}var u,f=!1;s?[u,f]=vg(()=>t[e]):u=t[e],u===void 0&&r!==void 0&&(u=c(),d&&(i&&l_(),d(u)));var m;if(i?m=()=>{var P=t[e];return P===void 0?c():(l=!0,P)}:m=()=>{var P=t[e];return P!==void 0&&(a=void 0),P===void 0?a:P},i&&(n&ou)===0)return m;if(d){var g=t.$$legacy;return(function(P,E){return arguments.length>0?((!i||!E||g||f)&&d(E?m():P),P):m()})}var w=!1,T=((n&Um)!==0?Si:xa)(()=>(w=!1,m()));s&&y(T);var S=B;return(function(P,E){if(arguments.length>0){const O=E?y(T):i&&s?hn(P):P;return L(T,O),w=!0,a!==void 0&&(a=O),P}return mr&&w||(S.f&un)!==0?T.v:y(T)})}function wg(t){return new Eg(t)}class Eg{#t;#e;constructor(e){var n=new Map,r=(s,o)=>{var a=Oa(o,!1,!1);return n.set(s,a),a};const i=new Proxy({...e.props||{},$$events:{}},{get(s,o){return y(n.get(o)??r(o,Reflect.get(s,o)))},has(s,o){return o===Ra?!0:(y(n.get(o)??r(o,Reflect.get(s,o))),Reflect.has(s,o))},set(s,o,a){return L(n.get(o)??r(o,a),a),Reflect.set(s,o,a)}});this.#e=(e.hydrate?X_:ad)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Me(),this.#t=i.$$events;for(const s of Object.keys(this.#e))s==="$set"||s==="$destroy"||s==="$on"||wi(this,s,{get(){return this.#e[s]},set(o){this.#e[s]=o},enumerable:!0});this.#e.$set=s=>{Object.assign(i,s)},this.#e.$destroy=()=>{Z_(this.#e)}}$set(e){this.#e.$set(e)}$on(e,n){this.#t[e]=this.#t[e]||[];const r=(...i)=>n.call(this,...i);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(i=>i!==r)}}$destroy(){this.#e.$destroy()}}let Cd;typeof HTMLElement=="function"&&(Cd=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(r){return i=>{const s=document.createElement("slot");r!=="default"&&(s.name=r),N(i,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},n=Ig(this);for(const r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=t(r),e.default=!0):e[r]=t(r));for(const r of this.attributes){const i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=ao(i,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=wg({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$host:this}}),this.$$me=x_(()=>{ro(()=>{this.$$r=!0;for(const r of js(this.$$c)){if(!this.$$p_d[r]?.reflect)continue;this.$$d[r]=this.$$c[r];const i=ao(r,this.$$d[r],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,i)}this.$$r=!1})});for(const r in this.$$l)for(const i of this.$$l[r]){const s=this.$$c.$on(r,i);this.$$l_u.set(i,s)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=ao(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return js(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function ao(t,e,n,r){const i=n[t]?.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Ig(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function ie(t,e,n,r,i,s){let o=class extends Cd{constructor(){super(t,n,i),this.$$p_d=e}static get observedAttributes(){return js(e).map(a=>(e[a].attribute||a).toLowerCase())}};return js(e).forEach(a=>{wi(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=ao(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var d=on(c,a)?.get;d?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{wi(o.prototype,a,{get(){return this.$$c?.[a]}})}),t.element=o,o}const Cg=()=>{};/**
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
 */const Td={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw ei(e)},ei=function(t){return new Error("Firebase Database ("+Td.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Sd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let u=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(u=64)),r.push(n[d],n[h],n[u],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Sg;const u=s<<2|a>>4;if(r.push(u),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const m=c<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kd=function(t){const e=Sd(t);return nl.encodeByteArray(e,!0)},lo=function(t){return kd(t).replace(/\./g,"")},co=function(t){try{return nl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kg(t){return Ad(void 0,t)}function Ad(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ag(n)||(t[n]=Ad(t[n],e[n]));return t}function Ag(t){return t!=="__proto__"}/**
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
 */function Rg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pg=()=>Rg().__FIREBASE_DEFAULTS__,Ng=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&co(t[1]);return e&&JSON.parse(e)},rl=()=>{try{return Cg()||Pg()||Ng()||xg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rd=t=>rl()?.emulatorHosts?.[t],Pd=t=>{const e=Rd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nd=()=>rl()?.config,xd=t=>rl()?.[`_${t}`];/**
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
 */function vr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function il(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Ld(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[lo(JSON.stringify(n)),lo(JSON.stringify(o)),""].join(".")}const zi={};function Lg(){const t={prod:[],emulator:[]};for(const e of Object.keys(zi))zi[e]?t.emulator.push(e):t.prod.push(e);return t}function Dg(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Dd=!1;function sl(t,e){if(typeof window>"u"||typeof document>"u"||!vr(window.location.host)||zi[t]===e||zi[t]||Dd)return;zi[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=Lg().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,f){u.setAttribute("width","24"),u.setAttribute("id",f),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Dd=!0,o()},u}function d(u,f){u.setAttribute("id",f),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=Dg(r),f=n("text"),m=document.getElementById(f)||document.createElement("span"),g=n("learnmore"),w=document.getElementById(g)||document.createElement("a"),T=n("preprendIcon"),S=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const P=u.element;a(P),d(w,g);const E=c();l(S,T),P.append(S,m,w,E),document.body.appendChild(P)}s?(m.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ol(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function Og(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Od(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $g(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fg(){return Td.NODE_ADMIN===!0}function Ug(){try{return typeof indexedDB=="object"}catch{return!1}}function zg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const Hg="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hg,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _n(i,a,r)}}function Wg(t,e){return t.replace(jg,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jg=/\{\$([^}]+)}/g;/**
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
 */function Wi(t){return JSON.parse(t)}function He(t){return JSON.stringify(t)}/**
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
 */const Md=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Wi(co(s[0])||""),n=Wi(co(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Vg=function(t){const e=Md(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Bg=function(t){const e=Md(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Jt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function al(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($d(s)&&$d(o)){if(!br(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $d(t){return t!==null&&typeof t=="object"}/**
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
 */function yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class qg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const u=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):h<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const u=(i<<5|i>>>27)+c+l+d+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Gg(t,e){const n=new Kg(t,e);return n.subscribe.bind(n)}class Kg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ll),i.error===void 0&&(i.error=ll),i.complete===void 0&&(i.complete=ll);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ll(){}function ho(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Qg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fo=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ui;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zg(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xg(t){return t===wr?void 0:t}function Zg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const tv={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},nv=_e.INFO,rv={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},iv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rv[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=nv,this._logHandler=iv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const sv=(t,e)=>e.some(n=>t instanceof n);let Fd,Ud;function ov(){return Fd||(Fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function av(){return Ud||(Ud=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zd=new WeakMap,ul=new WeakMap,Hd=new WeakMap,dl=new WeakMap,hl=new WeakMap;function lv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zd.set(n,t)}).catch(()=>{}),hl.set(e,t),e}function cv(t){if(ul.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ul.set(t,e)}let fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ul.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uv(t){fl=t(fl)}function dv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pl(this),e,...n);return Hd.set(r,e.sort?e.sort():[e]),Un(r)}:av().includes(t)?function(...e){return t.apply(pl(this),e),Un(zd.get(this))}:function(...e){return Un(t.apply(pl(this),e))}}function hv(t){return typeof t=="function"?dv(t):(t instanceof IDBTransaction&&cv(t),sv(t,ov())?new Proxy(t,fl):t)}function Un(t){if(t instanceof IDBRequest)return lv(t);if(dl.has(t))return dl.get(t);const e=hv(t);return e!==t&&(dl.set(t,e),hl.set(e,t)),e}const pl=t=>hl.get(t);function fv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const pv=["get","getKey","getAll","getAllKeys","count"],mv=["put","add","delete","clear"],ml=new Map;function Wd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ml.get(e))return ml.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ml.set(e,s),s}uv(t=>({...t,get:(e,n,r)=>Wd(e,n)||t.get(e,n,r),has:(e,n)=>!!Wd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gv(t){return t.getComponent()?.type==="VERSION"}const _l="@firebase/app",jd="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new cl("@firebase/app"),vv="@firebase/app-compat",bv="@firebase/analytics-compat",yv="@firebase/analytics",wv="@firebase/app-check-compat",Ev="@firebase/app-check",Iv="@firebase/auth",Cv="@firebase/auth-compat",Tv="@firebase/database",Sv="@firebase/data-connect",kv="@firebase/database-compat",Av="@firebase/functions",Rv="@firebase/functions-compat",Pv="@firebase/installations",Nv="@firebase/installations-compat",xv="@firebase/messaging",Lv="@firebase/messaging-compat",Dv="@firebase/performance",Ov="@firebase/performance-compat",Mv="@firebase/remote-config",$v="@firebase/remote-config-compat",Fv="@firebase/storage",Uv="@firebase/storage-compat",zv="@firebase/firestore",Hv="@firebase/ai",Wv="@firebase/firestore-compat",jv="firebase",Vv="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="[DEFAULT]",Bv={[_l]:"fire-core",[vv]:"fire-core-compat",[yv]:"fire-analytics",[bv]:"fire-analytics-compat",[Ev]:"fire-app-check",[wv]:"fire-app-check-compat",[Iv]:"fire-auth",[Cv]:"fire-auth-compat",[Tv]:"fire-rtdb",[Sv]:"fire-data-connect",[kv]:"fire-rtdb-compat",[Av]:"fire-fn",[Rv]:"fire-fn-compat",[Pv]:"fire-iid",[Nv]:"fire-iid-compat",[xv]:"fire-fcm",[Lv]:"fire-fcm-compat",[Dv]:"fire-perf",[Ov]:"fire-perf-compat",[Mv]:"fire-rc",[$v]:"fire-rc-compat",[Fv]:"fire-gcs",[Uv]:"fire-gcs-compat",[zv]:"fire-fst",[Wv]:"fire-fst-compat",[Hv]:"fire-vertex","fire-js":"fire-js",[jv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Map,qv=new Map,vl=new Map;function Vd(t,e){try{t.container.addComponent(e)}catch(n){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Er(t){const e=t.name;if(vl.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of po.values())Vd(n,t);for(const n of qv.values())Vd(n,t);return!0}function mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ht(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new Hi("app","Firebase",Gv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=Vv;function Bd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gl,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw zn.create("bad-app-name",{appName:String(i)});if(n||(n=Nd()),!n)throw zn.create("no-options");const s=po.get(i);if(s){if(br(n,s.options)&&br(r,s.config))return s;throw zn.create("duplicate-app",{appName:i})}const o=new ev(i);for(const l of vl.values())o.addComponent(l);const a=new Kv(n,r,o);return po.set(i,a),a}function bl(t=gl){const e=po.get(t);if(!e&&t===gl&&Nd())return Bd();if(!e)throw zn.create("no-app",{appName:t});return e}function Xt(t,e,n){let r=Bv[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(o.join(" "));return}Er(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Yv="firebase-heartbeat-database",Qv=1,Bi="firebase-heartbeat-store";let yl=null;function qd(){return yl||(yl=fv(Yv,Qv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),yl}async function Jv(t){try{const n=(await qd()).transaction(Bi),r=await n.objectStore(Bi).get(Kd(t));return await n.done,r}catch(e){if(e instanceof _n)gn.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e?.message});gn.warn(n.message)}}}async function Gd(t,e){try{const r=(await qd()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,Kd(t)),await r.done}catch(n){if(n instanceof _n)gn.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n?.message});gn.warn(r.message)}}}function Kd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xv=1024,Zv=30;class eb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Zv){const i=rb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){gn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yd(),{heartbeatsToSend:n,unsentEntries:r}=tb(this._heartbeatsCache.heartbeats),i=lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return gn.warn(e),""}}}function Yd(){return new Date().toISOString().substring(0,10)}function tb(t,e=Xv){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ug()?zg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jv(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qd(t){return lo(JSON.stringify({version:2,heartbeats:t})).length}function rb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){Er(new Fn("platform-logger",e=>new _v(e),"PRIVATE")),Er(new Fn("heartbeat",e=>new eb(e),"PRIVATE")),Xt(_l,jd,t),Xt(_l,jd,"esm2020"),Xt("fire-js","")}ib("");var sb="firebase",ob="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(sb,ob,"app");function Jd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ab=Jd,Xd=new Hi("auth","Firebase",Jd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new cl("@firebase/auth");function lb(t,...e){_o.logLevel<=_e.WARN&&_o.warn(`Auth (${Ir}): ${t}`,...e)}function go(t,...e){_o.logLevel<=_e.ERROR&&_o.error(`Auth (${Ir}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw wl(t,...e)}function bt(t,...e){return wl(t,...e)}function Zd(t,e,n){const r={...ab(),[e]:n};return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function Zt(t){return Zd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xd.create(t,...e)}function D(t,e,...n){if(!t)throw wl(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function bn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return typeof self<"u"&&self.location?.href||""}function eh(){return th()==="http:"||th()==="https:"}function th(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eh()||Mg()||"connection"in navigator)?navigator.onLine:!0}function ub(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=ol()||Od()}get(){return cb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fb=new qi(3e4,6e4);function ft(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function yt(t,e,n,r,i={}){return rh(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return Og()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&vr(t.emulatorConfig.host)&&(c.credentials="include"),nh.fetch()(await ih(t,t.config.apiHost,n,a),c)})}async function rh(t,e,n){t._canInitEmulator=!1;const r={...db,...e};try{const i=new mb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gi(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zd(t,d,c);Mt(t,d)}}catch(i){if(i instanceof _n)throw i;Mt(t,"network-request-failed",{message:String(i)})}}async function Hn(t,e,n,r,i={}){const s=await yt(t,e,n,r,i);return"mfaPendingCredential"in s&&Mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function ih(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Il(t.config,i):`${t.config.apiScheme}://${i}`;return hb.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function pb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),fb.get())})}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t){return t!==void 0&&t.getResponse!==void 0}function oh(t){return t!==void 0&&t.enterprise!==void 0}class ah{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t){return(await yt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function lh(t,e){return yt(t,"GET","/v2/recaptchaConfig",ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(t,e){return yt(t,"POST","/v1/accounts:delete",e)}async function vo(t,e){return yt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vb(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=Tl(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Ki(Cl(i.auth_time)),issuedAtTime:Ki(Cl(i.iat)),expirationTime:Ki(Cl(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Cl(t){return Number(t)*1e3}function Tl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=co(n);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ch(t){const e=Tl(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&bb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t){const e=t.auth,n=await t.getIdToken(),r=await ni(t,vo(e,{idToken:n}));D(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=i.providerUserInfo?.length?uh(i.providerUserInfo):[],o=Eb(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!o?.length,c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Sl(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function wb(t){const e=$e(t);await bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uh(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e){const n=await rh(t,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await ih(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&vr(t.emulatorConfig.host)&&(l.credentials="include"),nh.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cb(t,e){return yt(t,"POST","/v2/accounts:revokeToken",ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ch(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");const n=ch(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ib(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ri;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new yb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ni(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vb(this,e)}reload(){return wb(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await ni(this,gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:f,providerData:m,stsTokenManager:g}=n;D(h&&g,e,"internal-error");const w=ri.fromJSON(this.name,g);D(typeof h=="string",e,"internal-error"),Wn(r,e.name),Wn(i,e.name),D(typeof u=="boolean",e,"internal-error"),D(typeof f=="boolean",e,"internal-error"),Wn(s,e.name),Wn(o,e.name),Wn(a,e.name),Wn(l,e.name),Wn(c,e.name),Wn(d,e.name);const T=new $t({uid:h,auth:e,email:i,emailVerified:u,displayName:r,isAnonymous:f,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:w,createdAt:c,lastLoginAt:d});return m&&Array.isArray(m)&&(T.providerData=m.map(S=>({...S}))),l&&(T._redirectEventId=l),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new ri;i.updateFromServerResponse(n);const s=new $t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];D(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new ri;a.updateFromIdToken(r);const l=new $t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Map;function yn(t){bn(t instanceof Function,"Expected a class definition");let e=dh.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hh.type="NONE";const fh=hh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yo(this.userKey,i.apiKey,s),this.fullPersistenceKey=yo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await vo(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ii(yn(fh),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||yn(fh);const o=yo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let h;if(typeof d=="string"){const u=await vo(e,{idToken:d}).catch(()=>{});if(!u)break;h=await $t._fromGetAccountInfoResponse(e,u,d)}else h=$t._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ii(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ii(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yh(e))return"Blackberry";if(wh(e))return"Webos";if(_h(e))return"Safari";if((e.includes("chrome/")||gh(e))&&!e.includes("edge/"))return"Chrome";if(bh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function mh(t=it()){return/firefox\//i.test(t)}function _h(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gh(t=it()){return/crios\//i.test(t)}function vh(t=it()){return/iemobile/i.test(t)}function bh(t=it()){return/android/i.test(t)}function yh(t=it()){return/blackberry/i.test(t)}function wh(t=it()){return/webos/i.test(t)}function kl(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tb(t=it()){return kl(t)&&!!window.navigator?.standalone}function Sb(){return $g()&&document.documentMode===10}function Eh(t=it()){return kl(t)||bh(t)||wh(t)||yh(t)||/windows phone/i.test(t)||vh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t,e=[]){let n;switch(t){case"Browser":n=ph(it());break;case"Worker":n=`${ph(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ir}/${r}`}/**
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
 */class kb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Ab(t,e={}){return yt(t,"GET","/v2/passwordPolicy",ft(t,e))}/**
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
 */const Rb=6;class Pb{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Rb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ch(this),this.idTokenSubscription=new Ch(this),this.beforeStateQueue=new kb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vo(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ht(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ub()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(Zt(this));const n=e?$e(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ab(this),n=new Pb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cb(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&lb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function en(t){return $e(t)}class Ch{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gg(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xb(t){Yi=t}function Al(t){return Yi.loadJS(t)}function Lb(){return Yi.recaptchaV2Script}function Db(){return Yi.recaptchaEnterpriseScript}function Ob(){return Yi.gapiScript}function Th(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=500,$b=6e4,wo=1e12;class Fb{constructor(e){this.auth=e,this.counter=wo,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Hb(e,this.auth.name,n||{})),this.counter++,r}reset(e){const n=e||wo;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||wo;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||wo;return this._widgets.get(n)?.execute(),""}}class Ub{constructor(){this.enterprise=new zb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Hb{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Wb(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},$b)},Mb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Wb(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const jb="recaptcha-enterprise",Qi="NO_RECAPTCHA";class Sh{constructor(e){this.type=jb,this.auth=en(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{lh(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ah(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;oh(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Qi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ub().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&oh(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Db();l.length!==0&&(l+=a),Al(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ji(t,e,n,r=!1,i=!1){const s=new Sh(t);let o;if(i)o=Qi;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function si(t,e,n,r,i){if(i==="EMAIL_PASSWORD_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ji(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ji(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)});else if(i==="PHONE_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await Ji(t,e,n);return r(t,s).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await Ji(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{const s=await Ji(t,e,n,!1,!0);return r(t,s)}else return Promise.reject(i+" provider is not supported.")}async function Vb(t){const e=en(t),n=await lh(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new ah(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Sh(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t,e){const n=mo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(br(s,e??{}))return i;Mt(i,"already-initialized")}return n.initialize({options:e})}function qb(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(yn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Gb(t,e,n){const r=en(t);D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=kh(e),{host:o,port:a}=Kb(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){D(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),D(br(c,r.config.emulator)&&br(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,vr(o)?(il(`${s}//${o}${l}`),sl("Auth",!0)):Yb()}function kh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kb(t){const e=kh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ah(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ah(o)}}}function Ah(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function Qb(t,e){return yt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e){return Hn(t,"POST","/v1/accounts:signInWithPassword",ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(t,e){return Hn(t,"POST","/v1/accounts:signInWithEmailLink",ft(t,e))}async function Zb(t,e){return Hn(t,"POST","/v1/accounts:signInWithEmailLink",ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Eo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return si(e,n,"signInWithPassword",Jb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Xb(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return si(e,r,"signUpPassword",Qb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Zb(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return Hn(t,"POST","/v1/accounts:signInWithIdp",ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="http://localhost";class Cr extends Eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:ey,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(t,e){return yt(t,"POST","/v1/accounts:sendVerificationCode",ft(t,e))}async function ty(t,e){return Hn(t,"POST","/v1/accounts:signInWithPhoneNumber",ft(t,e))}async function ny(t,e){const n=await Hn(t,"POST","/v1/accounts:signInWithPhoneNumber",ft(t,e));if(n.temporaryProof)throw Gi(t,"account-exists-with-different-credential",n);return n}const ry={USER_NOT_FOUND:"user-not-found"};async function iy(t,e){const n={...e,operation:"REAUTH"};return Hn(t,"POST","/v1/accounts:signInWithPhoneNumber",ft(t,n),ry)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Eo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Zi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Zi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return ty(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return ny(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return iy(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Zi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oy(t){const e=ji(Vi(t)).link,n=e?ji(Vi(e)).deep_link_id:null,r=ji(Vi(t)).deep_link_id;return(r?ji(Vi(r)).link:null)||r||n||e||t}class Rl{constructor(e){const n=ji(Vi(e)),r=n.apiKey??null,i=n.oobCode??null,s=sy(n.mode??null);D(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=oy(e);try{return new Rl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,n){return Xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rl.parseLink(n);return D(r,"argument-error"),Xi._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password",ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends es{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com",jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends es{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com",Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends es{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com",Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends es{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com",qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(t,e){return Hn(t,"POST","/v1/accounts:signUp",ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $t._fromIdTokenResponse(e,r,i),o=Nh(r);return new Tr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nh(r);return new Tr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends _n{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Io(e,n,r,i)}}function xh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(t,s,e,r):s})}async function ly(t,e,n=!1){const r=await ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(t,e,n=!1){const{auth:r}=t;if(ht(r.app))return Promise.reject(Zt(r));const i="reauthenticate";try{const s=await ni(t,xh(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Tl(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Tr._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Mt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t,e,n=!1){if(ht(t.app))return Promise.reject(Zt(t));const r="signIn",i=await xh(t,r,e),s=await Tr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Dh(t,e){return Lh(en(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oh(t){const e=en(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mh(t,e,n){if(ht(t.app))return Promise.reject(Zt(t));const r=en(t),o=await si(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ay,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Oh(t),l}),a=await Tr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $h(t,e,n){return ht(t.app)?Promise.reject(Zt(t)):Dh($e(t),ai.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Oh(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t,e){return yt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$e(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ni(r,uy(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dy(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function hy(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function Nl(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function fy(t){return $e(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e){return yt(t,"POST","/v2/accounts/mfaEnrollment:start",ft(t,e))}const Co="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Co,"1"),this.storage.removeItem(Co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=1e3,my=10;class zh extends Uh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Sb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,my):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},py)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zh.type="LOCAL";const _y=zh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends Uh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hh.type="SESSION";const Wh=Hh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new To(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await gy(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}To.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=xl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const u=h;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function by(t){Fe().location.href=t}/**
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
 */function Ll(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function yy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wy(){return navigator?.serviceWorker?.controller||null}function Ey(){return Ll()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="firebaseLocalStorageDb",Iy=1,So="firebaseLocalStorage",Vh="fbase_key";class ts{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ko(t,e){return t.transaction([So],e?"readwrite":"readonly").objectStore(So)}function Cy(){const t=indexedDB.deleteDatabase(jh);return new ts(t).toPromise()}function Dl(){const t=indexedDB.open(jh,Iy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(So,{keyPath:Vh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(So)?e(r):(r.close(),await Cy(),e(await Dl()))})})}async function Bh(t,e,n){const r=ko(t,!0).put({[Vh]:e,value:n});return new ts(r).toPromise()}async function Ty(t,e){const n=ko(t,!1).get(e),r=await new ts(n).toPromise();return r===void 0?null:r.value}function qh(t,e){const n=ko(t,!0).delete(e);return new ts(n).toPromise()}const Sy=800,ky=3;class Gh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ky)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=To._getInstance(Ey()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await yy(),!this.activeServiceWorker)return;this.sender=new vy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dl();return await Bh(e,Co,"1"),await qh(e,Co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ty(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ko(i,!1).getAll();return new ts(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gh.type="LOCAL";const Ay=Gh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t,e){return yt(t,"POST","/v2/accounts/mfaSignIn:start",ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=Th("rcb"),Ry=new qi(3e4,6e4);class Py{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Fe().grecaptcha?.render}load(e,n=""){return D(Ny(n),e,"argument-error"),this.shouldResolveImmediately(n)&&sh(Fe().grecaptcha)?Promise.resolve(Fe().grecaptcha):new Promise((r,i)=>{const s=Fe().setTimeout(()=>{i(bt(e,"network-request-failed"))},Ry.get());Fe()[Ol]=()=>{Fe().clearTimeout(s),delete Fe()[Ol];const a=Fe().grecaptcha;if(!a||!sh(a)){i(bt(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const h=l(c,d);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${Lb()}?${yr({onload:Ol,render:"explicit",hl:n})}`;Al(o).catch(()=>{clearTimeout(s),i(bt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Fe().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ny(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class xy{async load(e){return new Fb(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="recaptcha",Ly={theme:"light",type:"image"};class Dy{constructor(e,n,r={...Ly}){this.parameters=r,this.type=ns,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=en(e),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new xy:new Py,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Fe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(eh()&&!Ll(),this.auth,"internal-error"),await Oy(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await _b(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Oy(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Zi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function $y(t,e,n){if(ht(t.app))return Promise.reject(Zt(t));const r=en(t),i=await Fy(r,e,$e(n));return new My(i,s=>Dh(r,s))}async function Fy(t,e,n){if(!t._getRecaptchaConfig())try{await Vb(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){D(i.type==="enroll",t,"internal-error");const s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await si(t,s,"mfaSmsEnrollment",async(c,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Qi){D(n?.type===ns,c,"argument-error");const h=await Ml(c,d,n);return Fh(c,h)}return Fh(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{D(i.type==="signin",t,"internal-error");const s=r.multiFactorHint?.uid||r.multiFactorUid;D(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await si(t,o,"mfaSmsSignIn",async(d,h)=>{if(h.phoneSignInInfo.captchaResponse===Qi){D(n?.type===ns,d,"argument-error");const u=await Ml(d,h,n);return Kh(d,u)}return Kh(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await si(t,i,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===Qi){D(n?.type===ns,l,"argument-error");const d=await Ml(l,c,n);return Rh(l,d)}return Rh(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{n?._reset()}}async function Ml(t,e,n){D(n.type===ns,t,"argument-error");const r=await n.verify();D(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Uy(t,e){return e?yn(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends Eo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zy(t){return Lh(t.auth,new $l(t),t.bypassAuthState)}function Hy(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),cy(n,new $l(t),t.bypassAuthState)}async function Wy(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),ly(n,new $l(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zy;case"linkViaPopup":case"linkViaRedirect":return Wy;case"reauthViaPopup":case"reauthViaRedirect":return Hy;default:Mt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new qi(2e3,1e4);class li extends Yh{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jy.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="pendingRedirect",Ao=new Map;class By extends Yh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ao.get(this.auth._key());if(!e){try{const r=await qy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ao.set(this.auth._key(),e)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qy(t,e){const n=Yy(e),r=Ky(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Gy(t,e){Ao.set(t._key(),e)}function Ky(t){return yn(t._redirectPersistence)}function Yy(t){return yo(Vy,t.config.apiKey,t.name)}async function Qy(t,e,n=!1){if(ht(t.app))return Promise.reject(Zt(t));const r=en(t),i=Uy(r,e),o=await new By(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=600*1e3;class Xy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Jh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(bt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qh(e))}saveEventToCache(e){this.cachedEventUids.add(Qh(e)),this.lastProcessedEventTime=Date.now()}}function Qh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jh({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Zy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e={}){return yt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nw=/^https?/;async function rw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ew(t);for(const n of e)try{if(iw(n))return}catch{}Mt(t,"unauthorized-domain")}function iw(t){const e=El(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nw.test(n))return!1;if(tw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const sw=new qi(3e4,6e4);function Xh(){const t=Fe().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ow(t){return new Promise((e,n)=>{function r(){Xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xh(),n(bt(t,"network-request-failed"))},timeout:sw.get()})}if(Fe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Fe().gapi?.load)r();else{const i=Th("iframefcb");return Fe()[i]=()=>{gapi.load?r():n(bt(t,"network-request-failed"))},Al(`${Ob()}?onload=${i}`).catch(s=>n(s))}}).catch(e=>{throw Ro=null,e})}let Ro=null;function aw(t){return Ro=Ro||ow(t),Ro}/**
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
 */const lw=new qi(5e3,15e3),cw="__/auth/iframe",uw="emulator/auth/iframe",dw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fw(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Il(e,uw):`https://${t.config.authDomain}/${cw}`,r={apiKey:e.apiKey,appName:t.name,v:Ir},i=hw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yr(r).slice(1)}`}async function pw(t){const e=await aw(t),n=Fe().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:fw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=Fe().setTimeout(()=>{s(o)},lw.get());function l(){Fe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const mw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_w=500,gw=600,vw="_blank",bw="http://localhost";class Zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yw(t,e,n,r=_w,i=gw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...mw,width:r.toString(),height:i.toString(),top:s,left:o},c=it().toLowerCase();n&&(a=gh(c)?vw:n),mh(c)&&(e=e||bw,l.scrollbars="yes");const d=Object.entries(l).reduce((u,[f,m])=>`${u}${f}=${m},`,"");if(Tb(c)&&a!=="_self")return ww(e||"",a),new Zh(null);const h=window.open(e||"",a,d);D(h,t,"popup-blocked");try{h.focus()}catch{}return new Zh(h)}function ww(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ew="__/auth/handler",Iw="emulator/auth/handler",Cw=encodeURIComponent("fac");async function ef(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ir,eventId:i};if(e instanceof Ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",al(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof es){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${Cw}=${encodeURIComponent(l)}`:"";return`${Tw(t)}?${yr(a).slice(1)}${c}`}function Tw({config:t}){return t.emulator?Il(t,Iw):`https://${t.authDomain}/${Ew}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="webStorageSupport";class Sw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wh,this._completeRedirectFn=Qy,this._overrideRedirectResult=Gy}async _openPopup(e,n,r,i){bn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await ef(e,n,r,El(),i);return yw(e,s,xl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ef(e,n,r,El(),i);return by(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pw(e),r=new Xy(e);return n.register("authEvent",i=>(D(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fl,{type:Fl},i=>{const s=i?.[0]?.[Fl];s!==void 0&&n(!!s),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Eh()||_h()||kl()}}const kw=Sw;var tf="@firebase/auth",nf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pw(t){Er(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ih(t)},c=new Nb(r,i,s,l);return qb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Er(new Fn("auth-internal",e=>{const n=en(e.getProvider("auth").getImmediate());return(r=>new Aw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(tf,nf,Rw(t)),Xt(tf,nf,"esm2020")}/**
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
 */const Nw=xd("authIdTokenMaxAge")||300;let rf=null;const xw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nw)return;const i=n?.token;rf!==i&&(rf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lw(t=bl()){const e=mo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bb(t,{popupRedirectResolver:kw,persistence:[Ay,_y,Wh]}),r=xd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=xw(s.toString());hy(n,o,()=>o(n.currentUser)),dy(n,a=>o(a))}}const i=Rd("auth");return i&&Gb(n,`http://${i}`),n}function Dw(){return document.getElementsByTagName("head")?.[0]??document}xb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Dw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Pw("Browser");const sf="@firebase/database",of="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af="";function Ow(t){af=t}/**
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
 */class Mw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $w{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const lf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mw(e)}}catch{}return new $w},Sr=lf("localStorage"),Fw=lf("sessionStorage");/**
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
 */const ci=new cl("@firebase/database"),Uw=(function(){let t=1;return function(){return t++}})(),cf=function(t){const e=Qg(t),n=new qg;n.update(e);const r=n.digest();return nl.encodeByteArray(r)},rs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=rs.apply(null,r):typeof r=="object"?e+=He(r):e+=r,e+=" "}return e};let is=null,uf=!0;const zw=function(t,e){R(!0,"Can't turn on custom loggers persistently."),ci.logLevel=_e.VERBOSE,is=ci.log.bind(ci)},Ke=function(...t){if(uf===!0&&(uf=!1,is===null&&Fw.get("logging_enabled")===!0&&zw()),is){const e=rs.apply(null,t);is(e)}},ss=function(t){return function(...e){Ke(t,...e)}},Ul=function(...t){const e="FIREBASE INTERNAL ERROR: "+rs(...t);ci.error(e)},wn=function(...t){const e=`FIREBASE FATAL ERROR: ${rs(...t)}`;throw ci.error(e),new Error(e)},st=function(...t){const e="FIREBASE WARNING: "+rs(...t);ci.warn(e)},Hw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ww=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},kr="[MIN_NAME]",Gn="[MAX_NAME]",Ar=function(t,e){if(t===e)return 0;if(t===kr||e===Gn)return-1;if(e===kr||t===Gn)return 1;{const n=ff(t),r=ff(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},jw=function(t,e){return t===e?0:t<e?-1:1},os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+He(e))},Hl=function(t){if(typeof t!="object"||t===null)return He(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=He(e[r]),n+=":",n+=Hl(t[e[r]]);return n+="}",n},df=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ye(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hf=function(t){R(!zl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},Vw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Gw=new RegExp("^-?(0*)\\d{1,10}$"),Kw=-2147483648,Yw=2147483647,ff=function(t){if(Gw.test(t)){const e=Number(t);if(e>=Kw&&e<=Yw)return e}return null},ui=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},Qw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},as=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Jw{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Xw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class Po{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Po.OWNER="owner";/**
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
 */const Wl="5",pf="v",mf="s",_f="r",gf="f",vf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bf="ls",yf="p",jl="ac",wf="websocket",Ef="long_polling";/**
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
 */class If{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Zw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cf(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===wf)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ef)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Zw(t)&&(n.ns=t.namespace);const i=[];return Ye(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class e1{constructor(){this.counters_={}}incrementCounter(e,n=1){Jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kg(this.counters_)}}/**
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
 */const Vl={},Bl={};function ql(t){const e=t.toString();return Vl[e]||(Vl[e]=new e1),Vl[e]}function t1(t,e){const n=t.toString();return Bl[n]||(Bl[n]=e()),Bl[n]}/**
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
 */class n1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ui(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Tf="start",r1="close",i1="pLPCommand",s1="pRTLPCB",Sf="id",kf="pw",Af="ser",o1="cb",a1="seg",l1="ts",c1="d",u1="dframe",Rf=1870,Pf=30,d1=Rf-Pf,h1=25e3,f1=3e4;class di{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ss(e),this.stats_=ql(n),this.urlFn=l=>(this.appCheckToken&&(l[jl]=this.appCheckToken),Cf(n,Ef,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new n1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(f1)),Ww(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gl((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Tf)this.id=a,this.password=l;else if(o===r1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Tf]="t",r[Af]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[o1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[pf]=Wl,this.transportSessionId&&(r[mf]=this.transportSessionId),this.lastSessionId&&(r[bf]=this.lastSessionId),this.applicationId&&(r[yf]=this.applicationId),this.appCheckToken&&(r[jl]=this.appCheckToken),typeof location<"u"&&location.hostname&&vf.test(location.hostname)&&(r[_f]=gf);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){di.forceAllow_=!0}static forceDisallow(){di.forceDisallow_=!0}static isAvailable(){return di.forceAllow_?!0:!di.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vw()&&!Bw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kd(n),i=df(r,d1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[u1]="t",r[Sf]=e,r[kf]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gl{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Uw(),window[i1+this.uniqueCallbackIdentifier]=e,window[s1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gl.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ke("frame writing exception"),a.stack&&Ke(a.stack),Ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sf]=this.myID,e[kf]=this.myPW,e[Af]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pf+r.length<=Rf;){const o=this.pendingSegs.shift();r=r+"&"+a1+i+"="+o.seg+"&"+l1+i+"="+o.ts+"&"+c1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(h1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const p1=16384,m1=45e3;let No=null;typeof MozWebSocket<"u"?No=MozWebSocket:typeof WebSocket<"u"&&(No=WebSocket);class Ft{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ss(this.connId),this.stats_=ql(n),this.connURL=Ft.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[pf]=Wl,typeof location<"u"&&location.hostname&&vf.test(location.hostname)&&(o[_f]=gf),n&&(o[mf]=n),r&&(o[bf]=r),i&&(o[jl]=i),s&&(o[yf]=s),Cf(e,wf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let r;Fg(),this.mySock=new No(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&No!==null&&!Ft.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Wi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=df(n,p1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(m1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ft.responsesRequiredToBeHealthy=2,Ft.healthyTimeout=3e4;/**
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
 */class ls{static get ALL_TRANSPORTS(){return[di,Ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ft&&Ft.isAvailable();let r=n&&!Ft.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ft];else{const i=this.transports_=[];for(const s of ls.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
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
 */const _1=6e4,g1=5e3,v1=10*1024,b1=100*1024,Kl="t",Nf="d",y1="s",xf="r",w1="e",Lf="o",Df="a",Of="n",Mf="p",E1="h";class I1{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ss("c:"+this.id+":"),this.transportManager_=new ls(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=as(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>b1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>v1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kl in e){const n=e[Kl];n===Df?this.upgradeIfSecondaryHealthy_():n===xf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Lf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=os("t",e),r=os("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Df,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Of,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=os("t",e),r=os("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=os(Kl,e);if(Nf in e){const r=e[Nf];if(n===E1){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Of){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===y1?this.onConnectionShutdown_(r):n===xf?this.onReset_(r):n===w1?Ul("Server Error: "+r):n===Lf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ul("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wl!==r&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),as(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):as(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(g1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class $f{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ff{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xo extends Ff{static getInstance(){return new xo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ol()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Uf=32,zf=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new de("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Kn(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function Yl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function C1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=Q(t),r=Q(e);if(n===null)return e;if(n===r)return ot(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function T1(t,e){const n=cs(t,0),r=cs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ar(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Ql(t,e){if(Kn(t)!==Kn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function kt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Kn(t)>Kn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class S1{constructor(e,n){this.errorPrefix_=n,this.parts_=cs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=fo(this.parts_[r]);Wf(this)}}function k1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fo(e),Wf(t)}function A1(t){const e=t.parts_.pop();t.byteLength_-=fo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wf(t){if(t.byteLength_>zf)throw new Error(t.errorPrefix_+"has a key path longer than "+zf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Uf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Uf+") or object contains a cycle "+Rr(t))}function Rr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Jl extends Ff{static getInstance(){return new Jl}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const us=1e3,R1=300*1e3,jf=30*1e3,P1=1.3,N1=3e4,x1="server_kill",Vf=3;class En extends $f{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=En.nextPersistentConnectionId_++,this.log_=ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=us,this.maxReconnectDelay_=R1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(He(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ui,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;En.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jt(e,"w")){const r=ti(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Vg(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ul("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>N1&&(this.reconnectDelay_=us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*P1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+En.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ke("getToken() completed but was canceled"):(Ke("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new I1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{st(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(x1)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&st(h),l())}}}interrupt(e){Ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],al(this.interruptReasons_)&&(this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Hl(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vf&&(this.reconnectDelay_=jf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+af.replace(/\./g,"-")]=1,ol()?e["framework.cordova"]=1:Od()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xo.getInstance().currentlyOnline();return al(this.interruptReasons_)&&e}}En.nextPersistentConnectionId_=0,En.nextConnectionId_=0;/**
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
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
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
 */class Lo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new X(kr,e),i=new X(kr,n);return this.compare(r,i)!==0}minPost(){return X.MIN}}/**
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
 */let Do;class Bf extends Lo{static get __EMPTY_NODE(){return Do}static set __EMPTY_NODE(e){Do=e}compare(e,n){return Ar(e.name,n.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Gn,Do)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,Do)}toString(){return".key"}}const Yn=new Bf;/**
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
 */class Oo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??pt.EMPTY_NODE,this.right=s??pt.EMPTY_NODE}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return pt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ve.RED=!0,Ve.BLACK=!1;class L1{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,n=pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ve.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oo(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new L1;/**
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
 */function D1(t,e){return Ar(t.name,e.name)}function Xl(t,e){return Ar(t,e)}/**
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
 */let Zl;function O1(t){Zl=t}const qf=function(t){return typeof t=="number"?"number:"+hf(t):"string:"+t},Gf=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jt(e,".sv"),"Priority must be a string or number.")}else R(t===Zl||t.isEmpty(),"priority of unexpected type.");R(t===Zl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Kf;class Be{static set __childrenNodeConstructor(e){Kf=e}static get __childrenNodeConstructor(){return Kf}constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Q(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Kn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hf(this.value_):e+=this.value_,this.lazyHash_=cf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Yf,Qf;function M1(t){Yf=t}function $1(t){Qf=t}class F1 extends Lo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ar(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Gn,new Be("[PRIORITY-POST]",Qf))}makePost(e,n){const r=Yf(e);return new X(n,new Be("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ae=new F1;/**
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
 */const U1=Math.log(2);class z1{constructor(e){const n=s=>parseInt(Math.log(s)/U1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mo=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let h,u;if(d===0)return null;if(d===1)return h=t[l],u=n?n(h):h,new Ve(u,h.node,Ve.BLACK,null,null);{const f=parseInt(d/2,10)+l,m=i(l,f),g=i(f+1,c);return h=t[f],u=n?n(h):h,new Ve(u,h.node,Ve.BLACK,m,g)}},s=function(l){let c=null,d=null,h=t.length;const u=function(m,g){const w=h-m,T=h;h-=m;const S=i(w+1,T),P=t[w],E=n?n(P):P;f(new Ve(E,P.node,g,null,S))},f=function(m){c?(c.left=m,c=m):(d=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),w=Math.pow(2,l.count-(m+1));g?u(w,Ve.BLACK):(u(w,Ve.BLACK),u(w,Ve.RED))}return d},o=new z1(t.length),a=s(o);return new pt(r||e,a)};/**
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
 */let ec;const hi={};class In{static get Default(){return R(hi&&Ae,"ChildrenNode.ts has not been loaded"),ec=ec||new In({".priority":hi},{".priority":Ae}),ec}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pt?n:null}hasIndex(e){return Jt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(X.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Mo(r,e.getCompare()):a=hi;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new In(d,c)}addToIndexes(e,n){const r=uo(this.indexes_,(i,s)=>{const o=ti(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===hi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Mo(a,o.getCompare())}else return hi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new In(r,this.indexSet_)}removeFromIndexes(e,n){const r=uo(this.indexes_,i=>{if(i===hi)return i;{const s=n.get(e.name);return s?i.remove(new X(e.name,s)):i}});return new In(r,this.indexSet_)}}/**
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
 */let ds;class F{static get EMPTY_NODE(){return ds||(ds=new F(new pt(Xl),null,In.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Gf(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ds:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new X(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ds:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=Q(e);if(r===null)return n;{R(Q(e)!==".priority"||Kn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ae,(o,a)=>{n[o]=a.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qf(this.getPriority().val())+":"),this.forEachChild(Ae,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cf(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new X(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hs?-1:0}withIndex(e){if(e===Yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ae),i=n.getIterator(Ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class H1 extends F{constructor(){super(new pt(Xl),F.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const hs=new H1;Object.defineProperties(X,{MIN:{value:new X(kr,F.EMPTY_NODE)},MAX:{value:new X(Gn,hs)}}),Bf.__EMPTY_NODE=F.EMPTY_NODE,Be.__childrenNodeConstructor=F,O1(hs),$1(hs);/**
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
 */const W1=!0;function We(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,We(e))}if(!(t instanceof Array)&&W1){const n=[];let r=!1;if(Ye(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=We(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=Mo(n,D1,o=>o.name,Xl);if(r){const o=Mo(n,Ae.getCompare());return new F(s,We(e),new In({".priority":o},{".priority":Ae}))}else return new F(s,We(e),In.Default)}else{let n=F.EMPTY_NODE;return Ye(t,(r,i)=>{if(Jt(t,r)&&r.substring(0,1)!=="."){const s=We(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(We(e))}}M1(We);/**
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
 */class tc extends Lo{constructor(e){super(),this.indexPath_=e,R(!J(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ar(e.name,n.name):s}makePost(e,n){const r=We(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new X(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,hs);return new X(Gn,e)}toString(){return cs(this.indexPath_,0).join("/")}}/**
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
 */class j1 extends Lo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ar(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const r=We(e);return new X(n,r)}toString(){return".value"}}const Jf=new j1;/**
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
 */function Xf(t){return{type:"value",snapshotNode:t}}function fi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ps(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function V1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class nc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(fs(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(fi(n,r)):o.trackChildChange(ps(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ae,(i,s)=>{n.hasChild(i)||r.trackChildChange(fs(i,s))}),n.isLeafNode()||n.forEachChild(Ae,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ps(i,s,o))}else r.trackChildChange(fi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ms{constructor(e){this.indexedFilter_=new nc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new X(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(Ae,(o,a)=>{s.matches(new X(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class B1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new X(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,f)=>h(f,u)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new X(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,l);if(d&&!r.isEmpty()&&f>=0)return s?.trackChildChange(ps(n,r,h)),a.updateImmediateChild(n,r);{s?.trackChildChange(fs(n,h));const g=a.updateImmediateChild(n,F.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(s?.trackChildChange(fi(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(fs(c.name,c.node)),s.trackChildChange(fi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
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
 */class rc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kr}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new rc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function q1(t){return t.loadsAllData()?new nc(t.getIndex()):t.hasLimit()?new B1(t):new ms(t)}function G1(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function K1(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Y1(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Zf(t,e){const n=t.copy();return n.index_=e,n}function ep(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ae?n="$priority":t.index_===Jf?n="$value":t.index_===Yn?n="$key":(R(t.index_ instanceof tc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=He(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=He(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+He(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=He(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+He(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function tp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ae&&(e.i=t.index_.toString()),e}/**
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
 */class $o extends $f{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ss("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=$o.getListenId_(e,r),a={};this.listens_[o]=a;const l=ep(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),ti(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,n){const r=$o.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ep(e._queryParams),r=e._path.toString(),i=new Ui;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Wi(a.responseText)}catch{st("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Q1{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Fo(){return{value:null,children:new Map}}function np(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Q(e);t.children.has(r)||t.children.set(r,Fo());const i=t.children.get(r);e=Ce(e),np(i,e,n)}}function ic(t,e,n){t.value!==null?n(e,t.value):J1(t,(r,i)=>{const s=new de(e.toString()+"/"+r);ic(i,s,n)})}function J1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class X1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ye(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const rp=10*1e3,Z1=30*1e3,e0=300*1e3;class t0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new X1(e);const r=rp+(Z1-rp)*Math.random();as(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ye(e,(i,s)=>{s>0&&Jt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),as(this.reportStats_.bind(this),Math.floor(Math.random()*2*e0))}}/**
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
 */var Ut;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ut||(Ut={}));function sc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function oc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ac(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Uo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ut.ACK_USER_WRITE,this.source=sc()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new Uo(ae(),n,this.revert)}}else return R(Q(this.path)===e,"operationForChild called for unrelated child."),new Uo(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class _s{constructor(e,n){this.source=e,this.path=n,this.type=Ut.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new _s(this.source,ae()):new _s(this.source,Ce(this.path))}}/**
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
 */class Pr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ut.OVERWRITE}operationForChild(e){return J(this.path)?new Pr(this.source,ae(),this.snap.getImmediateChild(e)):new Pr(this.source,Ce(this.path),this.snap)}}/**
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
 */class pi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ut.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new Pr(this.source,ae(),n.value):new pi(this.source,ae(),n)}else return R(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pi(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class n0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function r0(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(V1(o.childName,o.snapshotNode))}),gs(t,i,"child_removed",e,r,n),gs(t,i,"child_added",e,r,n),gs(t,i,"child_moved",s,r,n),gs(t,i,"child_changed",e,r,n),gs(t,i,"value",e,r,n),i}function gs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>s0(t,a,l)),o.forEach(a=>{const l=i0(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function i0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function s0(t,e,n){if(e.childName==null||n.childName==null)throw ei("Should only compare child_ events.");const r=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function zo(t,e){return{eventCache:t,serverCache:e}}function vs(t,e,n,r){return zo(new Qn(e,n,r),t.serverCache)}function ip(t,e,n,r){return zo(t.eventCache,new Qn(e,n,r))}function Ho(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let lc;const o0=()=>(lc||(lc=new pt(jw)),lc);class Te{static fromObject(e){let n=new Te(null);return Ye(e,(r,i)=>{n=n.set(new de(r),i)}),n}constructor(e,n=o0()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(J(e))return null;{const r=Q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Ne(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=Q(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new Te(null)}}set(e,n){if(J(e))return new Te(n,this.children);{const r=Q(e),s=(this.children.get(r)||new Te(null)).set(Ce(e),n),o=this.children.insert(r,s);return new Te(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=Q(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Te(null):new Te(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=Q(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(J(e))return n;{const r=Q(e),s=(this.children.get(r)||new Te(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Te(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=Q(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=Q(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Ne(n,i),r):new Te(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new Te(null))}}function bs(t,e,n){if(J(e))return new zt(new Te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ot(i,e);return s=s.updateChild(o,n),new zt(t.writeTree_.set(i,s))}else{const i=new Te(n),s=t.writeTree_.setTree(e,i);return new zt(s)}}}function cc(t,e,n){let r=t;return Ye(n,(i,s)=>{r=bs(r,Ne(e,i),s)}),r}function sp(t,e){if(J(e))return zt.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new zt(n)}}function uc(t,e){return xr(t,e)!=null}function xr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function op(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(r,i)=>{e.push(new X(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new X(r,i.value))}),e}function Jn(t,e){if(J(e))return t;{const n=xr(t,e);return n!=null?new zt(new Te(n)):new zt(t.writeTree_.subtree(e))}}function dc(t){return t.writeTree_.isEmpty()}function mi(t,e){return ap(ae(),t.writeTree_,e)}function ap(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ap(Ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ne(t,".priority"),r)),n}}/**
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
 */function Wo(t,e){return hp(e,t)}function a0(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=bs(t.visibleWrites,e,n)),t.lastWriteId=r}function l0(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=cc(t.visibleWrites,e,n),t.lastWriteId=r}function c0(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function u0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&d0(a,r.path)?i=!1:kt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return h0(t),!0;if(r.snap)t.visibleWrites=sp(t.visibleWrites,r.path);else{const a=r.children;Ye(a,l=>{t.visibleWrites=sp(t.visibleWrites,Ne(r.path,l))})}return!0}else return!1}function d0(t,e){if(t.snap)return kt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&kt(Ne(t.path,n),e))return!0;return!1}function h0(t){t.visibleWrites=lp(t.allWrites,f0,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function f0(t){return t.visible}function lp(t,e,n){let r=zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)kt(n,o)?(a=ot(n,o),r=bs(r,a,s.snap)):kt(o,n)&&(a=ot(o,n),r=bs(r,ae(),s.snap.getChild(a)));else if(s.children){if(kt(n,o))a=ot(n,o),r=cc(r,a,s.children);else if(kt(o,n))if(a=ot(o,n),J(a))r=cc(r,ae(),s.children);else{const l=ti(s.children,Q(a));if(l){const c=l.getChild(Ce(a));r=bs(r,ae(),c)}}}else throw ei("WriteRecord should have .snap or .children")}}return r}function cp(t,e,n,r,i){if(!r&&!i){const s=xr(t.visibleWrites,e);if(s!=null)return s;{const o=Jn(t.visibleWrites,e);if(dc(o))return n;if(n==null&&!uc(o,ae()))return null;{const a=n||F.EMPTY_NODE;return mi(o,a)}}}else{const s=Jn(t.visibleWrites,e);if(!i&&dc(s))return n;if(!i&&n==null&&!uc(s,ae()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(kt(c.path,e)||kt(e,c.path))},a=lp(t.allWrites,o,e),l=n||F.EMPTY_NODE;return mi(a,l)}}}function p0(t,e,n){let r=F.EMPTY_NODE;const i=xr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Jn(t.visibleWrites,e);return n.forEachChild(Ae,(o,a)=>{const l=mi(Jn(s,new de(o)),a);r=r.updateImmediateChild(o,l)}),op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Jn(t.visibleWrites,e);return op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function m0(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ne(e,n);if(uc(t.visibleWrites,s))return null;{const o=Jn(t.visibleWrites,s);return dc(o)?i.getChild(n):mi(o,i.getChild(n))}}function _0(t,e,n,r){const i=Ne(e,n),s=xr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Jn(t.visibleWrites,i);return mi(o,r.getNode().getImmediateChild(n))}else return null}function g0(t,e){return xr(t.visibleWrites,e)}function v0(t,e,n,r,i,s,o){let a;const l=Jn(t.visibleWrites,e),c=xr(l,ae());if(c!=null)a=c;else if(n!=null)a=mi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=u.getNext();for(;f&&d.length<i;)h(f,r)!==0&&d.push(f),f=u.getNext();return d}else return[]}function b0(){return{visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1}}function jo(t,e,n,r){return cp(t.writeTree,t.treePath,e,n,r)}function hc(t,e){return p0(t.writeTree,t.treePath,e)}function up(t,e,n,r){return m0(t.writeTree,t.treePath,e,n,r)}function Vo(t,e){return g0(t.writeTree,Ne(t.treePath,e))}function y0(t,e,n,r,i,s){return v0(t.writeTree,t.treePath,e,n,r,i,s)}function fc(t,e,n){return _0(t.writeTree,t.treePath,e,n)}function dp(t,e){return hp(Ne(t.treePath,e),t.writeTree)}function hp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class w0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ps(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,fs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,fi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ps(r,e.snapshotNode,i.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class E0{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const fp=new E0;class pc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),s=y0(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function I0(t){return{filter:t}}function C0(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function T0(t,e,n,r,i){const s=new w0;let o,a;if(n.type===Ut.OVERWRITE){const c=n;c.source.fromUser?o=mc(t,e,c.path,c.snap,r,i,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Bo(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Ut.MERGE){const c=n;c.source.fromUser?o=k0(t,e,c.path,c.children,r,i,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=_c(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Ut.ACK_USER_WRITE){const c=n;c.revert?o=P0(t,e,c.path,r,i,s):o=A0(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Ut.LISTEN_COMPLETE)o=R0(t,e,n.path,r,s);else throw ei("Unknown operation type: "+n.type);const l=s.getChanges();return S0(e,o,l),{viewCache:o,changes:l}}function S0(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ho(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Xf(Ho(e)))}}function pp(t,e,n,r,i,s){const o=e.eventCache;if(Vo(r,n)!=null)return e;{let a,l;if(J(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Nr(e),d=c instanceof F?c:F.EMPTY_NODE,h=hc(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=jo(r,Nr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Q(n);if(c===".priority"){R(Kn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=up(r,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=Ce(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=up(r,n,o.getNode(),l);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=fc(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,d,i,s):a=o.getNode()}}return vs(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Bo(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),f,null)}else{const f=Q(n);if(!l.isCompleteForPath(n)&&Kn(n)>1)return e;const m=Ce(n),w=l.getNode().getImmediateChild(f).updateChild(m,r);f===".priority"?c=d.updatePriority(l.getNode(),w):c=d.updateChild(l.getNode(),f,w,m,fp,null)}const h=ip(e,c,l.isFullyInitialized()||J(n),d.filtersNodes()),u=new pc(i,h,s);return pp(t,h,n,i,u,a)}function mc(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new pc(i,e,s);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=vs(e,c,!0,t.filter.filtersNodes());else{const h=Q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=vs(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=Ce(n),f=a.getNode().getImmediateChild(h);let m;if(J(u))m=r;else{const g=d.getCompleteChild(h);g!=null?Yl(u)===".priority"&&g.getChild(Hf(u)).isEmpty()?m=g:m=g.updateChild(u,r):m=F.EMPTY_NODE}if(f.equals(m))l=e;else{const g=t.filter.updateChild(a.getNode(),h,m,u,d,o);l=vs(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function mp(t,e){return t.eventCache.isCompleteForChild(e)}function k0(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Ne(n,l);mp(e,Q(d))&&(a=mc(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Ne(n,l);mp(e,Q(d))||(a=mc(t,a,d,c,i,s,o))}),a}function _p(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _c(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=r:c=new Te(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=_p(t,f,u);l=Bo(t,l,new de(h),m,i,s,o,a)}}),c.children.inorderTraversal((h,u)=>{const f=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),g=_p(t,m,u);l=Bo(t,l,new de(h),g,i,s,o,a)}}),l}function A0(t,e,n,r,i,s,o){if(Vo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Bo(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let c=new Te(null);return l.getNode().forEachChild(Yn,(d,h)=>{c=c.set(new de(d),h)}),_c(t,e,n,c,i,s,a,o)}else return e}else{let c=new Te(null);return r.foreach((d,h)=>{const u=Ne(n,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),_c(t,e,n,c,i,s,a,o)}}function R0(t,e,n,r,i){const s=e.serverCache,o=ip(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return pp(t,o,n,r,fp,i)}function P0(t,e,n,r,i,s){let o;if(Vo(r,n)!=null)return e;{const a=new pc(r,e,i),l=e.eventCache.getNode();let c;if(J(n)||Q(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=jo(r,Nr(e));else{const h=e.serverCache.getNode();R(h instanceof F,"serverChildren would be complete if leaf node"),d=hc(r,h)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=Q(n);let h=fc(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=t.filter.updateChild(l,d,h,Ce(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,F.EMPTY_NODE,Ce(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=jo(r,Nr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Vo(r,ae())!=null,vs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class N0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new nc(r.getIndex()),s=q1(r);this.processor_=I0(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),d=new Qn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Qn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zo(h,d),this.eventGenerator_=new n0(this.query_)}get query(){return this.query_}}function x0(t){return t.viewCache_.serverCache.getNode()}function L0(t){return Ho(t.viewCache_)}function D0(t,e){const n=Nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function gp(t){return t.eventRegistrations_.length===0}function O0(t,e){t.eventRegistrations_.push(e)}function vp(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function bp(t,e,n,r){e.type===Ut.MERGE&&e.source.queryId!==null&&(R(Nr(t.viewCache_),"We should always have a full cache before handling merges"),R(Ho(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=T0(t.processor_,i,e,n,r);return C0(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,yp(t,s.changes,s.viewCache.eventCache.getNode(),null)}function M0(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(s,o)=>{r.push(fi(s,o))}),n.isFullyInitialized()&&r.push(Xf(n.getNode())),yp(t,r,n.getNode(),e)}function yp(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return r0(t.eventGenerator_,e,n,i)}/**
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
 */let qo;class wp{constructor(){this.views=new Map}}function $0(t){R(!qo,"__referenceConstructor has already been defined"),qo=t}function F0(){return R(qo,"Reference.ts has not been loaded"),qo}function U0(t){return t.views.size===0}function gc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),bp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(bp(o,e,n,r));return s}}function Ep(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=jo(n,i?r:null),l=!1;a?l=!0:r instanceof F?(a=hc(n,r),l=!1):(a=F.EMPTY_NODE,l=!1);const c=zo(new Qn(a,l,!1),new Qn(r,i,!1));return new N0(e,c)}return o}function z0(t,e,n,r,i,s){const o=Ep(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),O0(o,n),M0(o,n)}function H0(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Zn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(vp(c,n,r)),gp(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(vp(l,n,r)),gp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Zn(t)&&s.push(new(F0())(e._repo,e._path)),{removed:s,events:o}}function Ip(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xn(t,e){let n=null;for(const r of t.views.values())n=n||D0(r,e);return n}function Cp(t,e){if(e._queryParams.loadsAllData())return Go(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Tp(t,e){return Cp(t,e)!=null}function Zn(t){return Go(t)!=null}function Go(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ko;function W0(t){R(!Ko,"__referenceConstructor has already been defined"),Ko=t}function j0(){return R(Ko,"Reference.ts has not been loaded"),Ko}let V0=1;class Sp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=b0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kp(t,e,n,r,i){return a0(t.pendingWriteTree_,e,n,r,i),i?_i(t,new Pr(sc(),e,n)):[]}function B0(t,e,n,r){l0(t.pendingWriteTree_,e,n,r);const i=Te.fromObject(n);return _i(t,new pi(sc(),e,i))}function er(t,e,n=!1){const r=c0(t.pendingWriteTree_,e);if(u0(t.pendingWriteTree_,e)){let s=new Te(null);return r.snap!=null?s=s.set(ae(),!0):Ye(r.children,o=>{s=s.set(new de(o),!0)}),_i(t,new Uo(r.path,s,n))}else return[]}function ys(t,e,n){return _i(t,new Pr(oc(),e,n))}function q0(t,e,n){const r=Te.fromObject(n);return _i(t,new pi(oc(),e,r))}function G0(t,e){return _i(t,new _s(oc(),e))}function K0(t,e,n){const r=yc(t,n);if(r){const i=wc(r),s=i.path,o=i.queryId,a=ot(s,e),l=new _s(ac(o),a);return Ec(t,s,l)}else return[]}function Yo(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Tp(o,e))){const l=H0(o,e,n,r);U0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(u,f)=>Zn(f));if(d&&!h){const u=t.syncPointTree_.subtree(s);if(!u.isEmpty()){const f=J0(u);for(let m=0;m<f.length;++m){const g=f[m],w=g.query,T=Np(t,g);t.listenProvider_.startListening(Es(w),ws(t,w),T.hashFn,T.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Es(e),null):c.forEach(u=>{const f=t.queryToTagMap.get(Qo(u));t.listenProvider_.stopListening(Es(u),f)}))}X0(t,c)}return a}function Ap(t,e,n,r){const i=yc(t,r);if(i!=null){const s=wc(i),o=s.path,a=s.queryId,l=ot(o,e),c=new Pr(ac(a),l,n);return Ec(t,o,c)}else return[]}function Y0(t,e,n,r){const i=yc(t,r);if(i){const s=wc(i),o=s.path,a=s.queryId,l=ot(o,e),c=Te.fromObject(n),d=new pi(ac(a),l,c);return Ec(t,o,d)}else return[]}function vc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(u,f)=>{const m=ot(u,i);s=s||Xn(f,m),o=o||Zn(f)});let a=t.syncPointTree_.get(i);a?(o=o||Zn(a),s=s||Xn(a,ae())):(a=new wp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,m)=>{const g=Xn(m,ae());g&&(s=s.updateImmediateChild(f,g))}));const c=Tp(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=Qo(e);R(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=Z0();t.queryToTagMap.set(u,f),t.tagToQueryMap.set(f,u)}const d=Wo(t.pendingWriteTree_,i);let h=z0(a,e,n,d,s,l);if(!c&&!o&&!r){const u=Cp(a,e);h=h.concat(eE(t,e,u))}return h}function bc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ot(o,e),c=Xn(a,l);if(c)return c});return cp(i,e,s,n,!0)}function Q0(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=ot(c,n);r=r||Xn(d,h)});let i=t.syncPointTree_.get(n);i?r=r||Xn(i,ae()):(i=new wp,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Qn(r,!0,!1):null,a=Wo(t.pendingWriteTree_,e._path),l=Ep(i,e,a,s?o.getNode():F.EMPTY_NODE,s);return L0(l)}function _i(t,e){return Rp(e,t.syncPointTree_,null,Wo(t.pendingWriteTree_,ae()))}function Rp(t,e,n,r){if(J(t.path))return Pp(t,e,n,r);{const i=e.get(ae());n==null&&i!=null&&(n=Xn(i,ae()));let s=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=dp(r,o);s=s.concat(Rp(a,l,c,d))}return i&&(s=s.concat(gc(i,t,r,n))),s}}function Pp(t,e,n,r){const i=e.get(ae());n==null&&i!=null&&(n=Xn(i,ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dp(r,o),d=t.operationForChild(o);d&&(s=s.concat(Pp(d,a,l,c)))}),i&&(s=s.concat(gc(i,t,r,n))),s}function Np(t,e){const n=e.query,r=ws(t,n);return{hashFn:()=>(x0(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?K0(t,n._path,r):G0(t,n._path);{const s=qw(i,n);return Yo(t,n,null,s)}}}}function ws(t,e){const n=Qo(e);return t.queryToTagMap.get(n)}function Qo(t){return t._path.toString()+"$"+t._queryIdentifier}function yc(t,e){return t.tagToQueryMap.get(e)}function wc(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function Ec(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=Wo(t.pendingWriteTree_,e);return gc(r,n,i,null)}function J0(t){return t.fold((e,n,r)=>{if(n&&Zn(n))return[Go(n)];{let i=[];return n&&(i=Ip(n)),Ye(r,(s,o)=>{i=i.concat(o)}),i}})}function Es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(j0())(t._repo,t._path):t}function X0(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Qo(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Z0(){return V0++}function eE(t,e,n){const r=e._path,i=ws(t,e),s=Np(t,n),o=t.listenProvider_.startListening(Es(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!Zn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!J(c)&&d&&Zn(d))return[Go(d).query];{let u=[];return d&&(u=u.concat(Ip(d).map(f=>f.query))),Ye(h,(f,m)=>{u=u.concat(m)}),u}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Es(d),ws(t,d))}}return o}/**
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
 */class Ic{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ic(n)}node(){return this.node_}}class Cc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Cc(this.syncTree_,n)}node(){return bc(this.syncTree_,this.path_)}}const tE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xp=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rE(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},rE=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Lp=function(t,e,n,r){return Tc(e,new Cc(n,t),r)},Dp=function(t,e,n){return Tc(t,new Ic(e),n)};function Tc(t,e,n){const r=t.getPriority().val(),i=xp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=xp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,We(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Be(i))),o.forEachChild(Ae,(a,l)=>{const c=Tc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Sc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function kc(t,e){let n=e instanceof de?e:new de(e),r=t,i=Q(n);for(;i!==null;){const s=ti(r.node.children,i)||{children:{},childCount:0};r=new Sc(i,r,s),n=Ce(n),i=Q(n)}return r}function gi(t){return t.node.value}function Op(t,e){t.node.value=e,Ac(t)}function Mp(t){return t.node.childCount>0}function iE(t){return gi(t)===void 0&&!Mp(t)}function Jo(t,e){Ye(t.node.children,(n,r)=>{e(new Sc(n,t,r))})}function $p(t,e,n,r){n&&e(t),Jo(t,i=>{$p(i,e,!0)})}function sE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Is(t){return new de(t.parent===null?t.name:Is(t.parent)+"/"+t.name)}function Ac(t){t.parent!==null&&oE(t.parent,t.name,t)}function oE(t,e,n){const r=iE(n),i=Jt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ac(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ac(t))}/**
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
 */const aE=/[\[\].#$\/\u0000-\u001F\u007F]/,lE=/[\[\].#$\u0000-\u001F\u007F]/,Rc=10*1024*1024,Pc=function(t){return typeof t=="string"&&t.length!==0&&!aE.test(t)},Fp=function(t){return typeof t=="string"&&t.length!==0&&!lE.test(t)},cE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fp(t)},Nc=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!zl(t)||t&&typeof t=="object"&&Jt(t,".sv")},Xo=function(t,e,n,r){r&&e===void 0||Zo(ho(t,"value"),e,n)},Zo=function(t,e,n){const r=n instanceof de?new S1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Rr(r)+" with contents = "+e.toString());if(zl(e))throw new Error(t+"contains "+e.toString()+" "+Rr(r));if(typeof e=="string"&&e.length>Rc/3&&fo(e)>Rc)throw new Error(t+"contains a string greater than "+Rc+" utf8 bytes "+Rr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ye(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Pc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);k1(r,o),Zo(t,a,r),A1(r)}),i&&s)throw new Error(t+' contains ".value" child '+Rr(r)+" in addition to actual children.")}},uE=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=cs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Pc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(T1);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&kt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},dE=function(t,e,n,r){const i=ho(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ye(e,(o,a)=>{const l=new de(o);if(Zo(i,a,Ne(n,l)),Yl(l)===".priority"&&!Nc(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),uE(i,s)},xc=function(t,e,n,r){if(!Fp(n))throw new Error(ho(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xc(t,e,n)},Lc=function(t,e){if(Q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Pc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cE(n))throw new Error(ho(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class pE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ea(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ql(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Up(t,e,n){ea(t,n),zp(t,r=>Ql(r,e))}function At(t,e,n){ea(t,n),zp(t,r=>kt(r,e)||kt(e,r))}function zp(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(mE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();is&&Ke("event: "+n.toString()),ui(r)}}}/**
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
 */const _E="repo_interrupt",gE=25;class vE{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fo(),this.transactionQueueTree_=new Sc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bE(t,e,n){if(t.stats_=ql(t.repoInfo_),t.forceRestClient_||Qw())t.server_=new $o(t.repoInfo_,(r,i,s,o)=>{Wp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new En(t.repoInfo_,e,(r,i,s,o)=>{Wp(t,r,i,s,o)},r=>{jp(t,r)},r=>{yE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=t1(t.repoInfo_,()=>new t0(t.stats_,t.server_)),t.infoData_=new Q1,t.infoSyncTree_=new Sp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ys(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Dc(t,"connected",!1),t.serverSyncTree_=new Sp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);At(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Hp(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ta(t){return tE({timestamp:Hp(t)})}function Wp(t,e,n,r,i){t.dataUpdateCount++;const s=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=uo(n,c=>We(c));o=Y0(t.serverSyncTree_,s,l,i)}else{const l=We(n);o=Ap(t.serverSyncTree_,s,l,i)}else if(r){const l=uo(n,c=>We(c));o=q0(t.serverSyncTree_,s,l)}else{const l=We(n);o=ys(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=vi(t,s)),At(t.eventQueue_,a,o)}function jp(t,e){Dc(t,"connected",e),e===!1&&CE(t)}function yE(t,e){Ye(e,(n,r)=>{Dc(t,n,r)})}function Dc(t,e,n){const r=new de("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(r,i);const s=ys(t.infoSyncTree_,r,i);At(t.eventQueue_,r,s)}function Oc(t){return t.nextWriteId_++}function wE(t,e,n){const r=Q0(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=We(i).withIndex(e._queryParams.getIndex());vc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ys(t.serverSyncTree_,e._path,s);else{const a=ws(t.serverSyncTree_,e);o=Ap(t.serverSyncTree_,e._path,s,a)}return At(t.eventQueue_,e._path,o),Yo(t.serverSyncTree_,e,n,null,!0),s},i=>(Cs(t,"get for query "+He(e)+" failed: "+i),Promise.reject(new Error(i))))}function EE(t,e,n,r,i){Cs(t,"set",{path:e.toString(),value:n,priority:r});const s=ta(t),o=We(n,r),a=bc(t.serverSyncTree_,e),l=Dp(o,a,s),c=Oc(t),d=kp(t.serverSyncTree_,e,l,c,!0);ea(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(u,f)=>{const m=u==="ok";m||st("set at "+e+" failed: "+u);const g=er(t.serverSyncTree_,c,!m);At(t.eventQueue_,e,g),$c(t,i,u,f)});const h=Uc(t,e);vi(t,h),At(t.eventQueue_,h,[])}function IE(t,e,n,r){Cs(t,"update",{path:e.toString(),value:n});let i=!0;const s=ta(t),o={};if(Ye(n,(a,l)=>{i=!1,o[a]=Lp(Ne(e,a),We(l),t.serverSyncTree_,s)}),i)Ke("update() called with empty data.  Don't do anything."),$c(t,r,"ok",void 0);else{const a=Oc(t),l=B0(t.serverSyncTree_,e,o,a);ea(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||st("update at "+e+" failed: "+c);const u=er(t.serverSyncTree_,a,!h),f=u.length>0?vi(t,e):e;At(t.eventQueue_,f,u),$c(t,r,c,d)}),Ye(n,c=>{const d=Uc(t,Ne(e,c));vi(t,d)}),At(t.eventQueue_,e,[])}}function CE(t){Cs(t,"onDisconnectEvents");const e=ta(t),n=Fo();ic(t.onDisconnect_,ae(),(i,s)=>{const o=Lp(i,s,t.serverSyncTree_,e);np(n,i,o)});let r=[];ic(n,ae(),(i,s)=>{r=r.concat(ys(t.serverSyncTree_,i,s));const o=Uc(t,i);vi(t,o)}),t.onDisconnect_=Fo(),At(t.eventQueue_,ae(),r)}function TE(t,e,n){let r;Q(e._path)===".info"?r=vc(t.infoSyncTree_,e,n):r=vc(t.serverSyncTree_,e,n),Up(t.eventQueue_,e._path,r)}function Mc(t,e,n){let r;Q(e._path)===".info"?r=Yo(t.infoSyncTree_,e,n):r=Yo(t.serverSyncTree_,e,n),Up(t.eventQueue_,e._path,r)}function SE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_E)}function Cs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ke(n,...e)}function $c(t,e,n,r){e&&ui(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Vp(t,e,n){return bc(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Fc(t,e=t.transactionQueueTree_){if(e||na(t,e),gi(e)){const n=qp(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&kE(t,Is(e),n)}else Mp(e)&&Jo(e,n=>{Fc(t,n)})}function kE(t,e,n){const r=n.map(c=>c.currentWriteId),i=Vp(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=ot(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Cs(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<n.length;u++)n[u].status=2,d=d.concat(er(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&h.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();na(t,kc(t.transactionQueueTree_,e)),Fc(t,t.transactionQueueTree_),At(t.eventQueue_,e,d);for(let u=0;u<h.length;u++)ui(h[u])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{st("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}vi(t,e)}},o)}function vi(t,e){const n=Bp(t,e),r=Is(n),i=qp(t,n);return AE(t,i,r),r}function AE(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ot(n,l.path);let d=!1,h;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,i=i.concat(er(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=gE)d=!0,h="maxretry",i=i.concat(er(t.serverSyncTree_,l.currentWriteId,!0));else{const u=Vp(t,l.path,o);l.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){Zo("transaction failed: Data returned ",f,l.path);let m=We(f);typeof f=="object"&&f!=null&&Jt(f,".priority")||(m=m.updatePriority(u.getPriority()));const w=l.currentWriteId,T=ta(t),S=Dp(m,u,T);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=S,l.currentWriteId=Oc(t),o.splice(o.indexOf(w),1),i=i.concat(kp(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),i=i.concat(er(t.serverSyncTree_,w,!0))}else d=!0,h="nodata",i=i.concat(er(t.serverSyncTree_,l.currentWriteId,!0))}At(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}na(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ui(r[a]);Fc(t,t.transactionQueueTree_)}function Bp(t,e){let n,r=t.transactionQueueTree_;for(n=Q(e);n!==null&&gi(r)===void 0;)r=kc(r,n),e=Ce(e),n=Q(e);return r}function qp(t,e){const n=[];return Gp(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Gp(t,e,n){const r=gi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Jo(e,i=>{Gp(t,i,n)})}function na(t,e){const n=gi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Op(e,n.length>0?n:void 0)}Jo(e,r=>{na(t,r)})}function Uc(t,e){const n=Is(Bp(t,e)),r=kc(t.transactionQueueTree_,e);return sE(r,i=>{zc(t,i)}),zc(t,r),$p(r,i=>{zc(t,i)}),n}function zc(t,e){const n=gi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(er(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Op(e,void 0):n.length=s+1,At(t.eventQueue_,Is(e),i);for(let o=0;o<r.length;o++)ui(r[o])}}/**
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
 */function RE(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function PE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):st(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kp=function(t,e){const n=NE(t),r=n.namespace;n.domain==="firebase.com"&&wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Hw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new If(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new de(n.pathString)}},NE=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(i=RE(t.substring(d,h)));const u=PE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in u&&(s=u.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Yp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",xE=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Yp.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Yp.charAt(e[i]);return R(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class LE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class DE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Qp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:Yl(this._path)}get ref(){return new Cn(this._repo,this._path)}get _queryIdentifier(){const e=tp(this._queryParams),n=Hl(e);return n==="{}"?"default":n}get _queryObject(){return tp(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof tr))return!1;const n=this._repo===e._repo,r=Ql(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+C1(this._path)}}function Jp(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ra(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Yn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==kr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Gn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Ae){if(e!=null&&!Nc(e)||n!=null&&!Nc(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(R(t.getIndex()instanceof tc||t.getIndex()===Jf,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Xp(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Cn extends tr{constructor(e,n){super(e,n,new rc,!1)}get parent(){const e=Hf(this._path);return e===null?null:new Cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ts{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=Ss(this.ref,e);return new Ts(this._node.getChild(n),r,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ts(i,Ss(this.ref,r),Ae)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function be(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?Ss(t._root,e):t._root}function Ss(t,e){return t=$e(t),Q(t._path)===null?hE("child","path",e):xc("child","path",e),new Cn(t._repo,Ne(t._path,e))}function ia(t,e){t=$e(t),Lc("push",t._path),Xo("push",e,t._path,!0);const n=Hp(t._repo),r=xE(n),i=Ss(t,r),s=Ss(t,r);let o;return e!=null?o=ks(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Zp(t){return Lc("remove",t._path),ks(t,null)}function ks(t,e){t=$e(t),Lc("set",t._path),Xo("set",e,t._path,!1);const n=new Ui;return EE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Tn(t,e){dE("update",e,t._path);const n=new Ui;return IE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function nr(t){t=$e(t);const e=new Qp(()=>{}),n=new sa(e);return wE(t._repo,t,n).then(r=>new Ts(r,new Cn(t._repo,t._path),t._queryParams.getIndex()))}class sa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new LE("value",this,new Ts(e.snapshotNode,new Cn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new DE(this,e,n):null}matches(e){return e instanceof sa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function OE(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,h)=>{Mc(t._repo,t,a),l(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Qp(n,s||void 0),a=new sa(o);return TE(t._repo,t,a),()=>Mc(t._repo,t,a)}function rr(t,e,n,r){return OE(t,"value",e,n,r)}function bi(t,e,n){Mc(t._repo,t,null)}class As{}class ME extends As{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Xo("endAt",this._value,e._path,!0);const n=Y1(e._queryParams,this._value,this._key);if(Xp(n),ra(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new tr(e._repo,e._path,n,e._orderByCalled)}}function Rs(t,e){return new ME(t,e)}class $E extends As{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Xo("startAt",this._value,e._path,!0);const n=K1(e._queryParams,this._value,this._key);if(Xp(n),ra(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new tr(e._repo,e._path,n,e._orderByCalled)}}function Ps(t=null,e){return new $E(t,e)}class FE extends As{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new tr(e._repo,e._path,G1(e._queryParams,this._limit),e._orderByCalled)}}function UE(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new FE(t)}class zE extends As{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Jp(e,"orderByChild");const n=new de(this._path);if(J(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new tc(n),i=Zf(e._queryParams,r);return ra(i),new tr(e._repo,e._path,i,!0)}}function oa(t){return xc("orderByChild","path",t),new zE(t)}class HE extends As{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Jp(e,"orderByKey");const n=Zf(e._queryParams,Yn);return ra(n),new tr(e._repo,e._path,n,!0)}}function WE(){return new HE}function Ns(t,...e){let n=$e(t);for(const r of e)n=r._apply(n);return n}$0(Cn),W0(Cn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="FIREBASE_DATABASE_EMULATOR_HOST",Hc={};let VE=!1;function BE(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=vr(s);t.repoInfo_=new If(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function qE(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kp(s,i),a=o.repoInfo,l;typeof process<"u"&&process.env&&(l=process.env[jE]),l?(s=`http://${l}?ns=${a.namespace}`,o=Kp(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new Xw(t.name,t.options,e);fE("Invalid Firebase Database URL",o),J(o.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=KE(a,t,c,new Jw(t,n));return new YE(d,t)}function GE(t,e){const n=Hc[e];(!n||n[t.key]!==t)&&wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),SE(t),delete n[t.key]}function KE(t,e,n,r){let i=Hc[e.name];i||(i={},Hc[e.name]=i);let s=i[t.toURLString()];return s&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new vE(t,VE,n,r),i[t.toURLString()]=s,s}class YE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cn(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(GE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function QE(t=bl(),e){const n=mo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Pd("database");r&&JE(n,...r)}return n}function JE(t,e,n,r={}){t=$e(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&br(r,s.repoInfo_.emulatorOptions))return;wn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Po(Po.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Ld(r.mockUserToken,t.app.options.projectId);o=new Po(a)}vr(e)&&(il(e),sl("Database",!0)),BE(s,i,r,o)}/**
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
 */function XE(t){Ow(Ir),Er(new Fn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return qE(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Xt(sf,of,t),Xt(sf,of,"esm2020")}En.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},En.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)},XE();/**
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
 */const em="firebasestorage.googleapis.com",ZE="storageBucket",eI=120*1e3,tI=600*1e3;/**
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
 */class tn extends _n{constructor(e,n,r=0){super(Wc(e),`Firebase Storage: ${n} (${Wc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nn||(nn={}));function Wc(t){return"storage/"+t}function nI(){const t="An unknown error occurred, please check the error payload for server response.";return new tn(nn.UNKNOWN,t)}function rI(){return new tn(nn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iI(){return new tn(nn.CANCELED,"User canceled the upload/download.")}function sI(t){return new tn(nn.INVALID_URL,"Invalid URL '"+t+"'.")}function oI(t){return new tn(nn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tm(t){return new tn(nn.INVALID_ARGUMENT,t)}function nm(){return new tn(nn.APP_DELETED,"The Firebase app was deleted.")}function aI(t){return new tn(nn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ht.makeFromUrl(e,n)}catch{return new Ht(e,"")}if(r.path==="")return r;throw oI(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${d}/b/${i}/o${u}`,"i"),m={bucket:1,path:3},g=n===em?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",T=new RegExp(`^https?://${g}/${i}/${w}`,"i"),P=[{regex:a,indices:l,postModify:s},{regex:f,indices:m,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<P.length;E++){const O=P[E],C=O.regex.exec(e);if(C){const I=C[O.indices.bucket];let v=C[O.indices.path];v||(v=""),r=new Ht(I,v),O.postModify(r);break}}if(r==null)throw sI(e);return r}}class lI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function cI(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...w){c||(c=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function u(){s&&clearTimeout(s)}function f(w,...T){if(c){u();return}if(w){u(),d.call(null,w,...T);return}if(l()||o){u(),d.call(null,w,...T);return}r<64&&(r*=2);let P;a===1?(a=2,P=0):P=(r+Math.random())*1e3,h(P)}let m=!1;function g(w){m||(m=!0,u(),!c&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function uI(t){t(!1)}/**
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
 */function dI(t){return t!==void 0}function rm(t,e,n,r){if(r<e)throw tm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tm(`Invalid value for '${t}'. Expected ${n} or less.`)}function hI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var aa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(aa||(aa={}));/**
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
 */function fI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class pI{constructor(e,n,r,i,s,o,a,l,c,d,h,u=!0,f=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=u,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new la(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===aa.NO_ERROR,l=s.getStatus();if(!a||fI(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===aa.ABORT;r(!1,new la(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new la(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());dI(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=nI();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?nm():iI();o(l)}else{const l=rI();o(l)}};this.canceled_?n(!1,new la(!1,null,!0)):this.backoffId_=cI(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class la{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mI(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _I(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gI(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vI(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bI(t,e,n,r,i,s,o=!0,a=!1){const l=hI(t.urlParams),c=t.url+l,d=Object.assign({},t.headers);return gI(d,e),mI(d,n),_I(d,s),vI(d,r),new pI(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
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
 */function yI(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function wI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this._service=e,n instanceof Ht?this._location=n:this._location=Ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ca(e,n)}get root(){const e=new Ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wI(this._location.path)}get storage(){return this._service}get parent(){const e=yI(this._location.path);if(e===null)return null;const n=new Ht(this._location.bucket,e);return new ca(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aI(e)}}function im(t,e){const n=e?.[ZE];return n==null?null:Ht.makeFromBucketSpec(n,t)}function EI(t,e,n,r={}){t.host=`${e}:${n}`;const i=vr(e);i&&(il(`https://${t.host}/b`),sl("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Ld(s,t.app.options.projectId))}class II{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=em,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eI,this._maxUploadRetryTime=tI,this._requests=new Set,i!=null?this._bucket=Ht.makeFromBucketSpec(i,this._host):this._bucket=im(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ht.makeFromBucketSpec(this._url,e):this._bucket=im(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ca(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new lI(nm());{const o=bI(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const sm="@firebase/storage",om="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="storage";function CI(t=bl(),e){t=$e(t);const r=mo(t,am).getImmediate({identifier:e}),i=Pd("storage");return i&&TI(r,...i),r}function TI(t,e,n,r={}){EI(t,e,n,r)}function SI(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new II(n,r,i,e,Ir)}function kI(){Er(new Fn(am,SI,"PUBLIC").setMultipleInstances(!0)),Xt(sm,om,""),Xt(sm,om,"esm2020")}kI();const lm={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",lm);const jc=Bd(lm),Rt=Lw(jc),ge=QE(jc),AI=CI(jc);var RI=H('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),PI=H('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),NI=H('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),xI=H('<h3 class="post-title svelte-1t1odzy"> </h3>'),LI=H('<p class="post-text svelte-1t1odzy"> </p>'),DI=H('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),OI=H('<div class="posts svelte-1t1odzy"></div>'),MI=H('<div class="post-list-container svelte-1t1odzy"><!></div>');const $I={hash:"svelte-1t1odzy",code:`
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
  }`};function FI(t,e){Vt(e,!0),mn(t,$I);let n=ze(e,"path",7,"posts"),r=ze(e,"limit",7,"10"),i=oe(hn([])),s=oe(!0),o=oe(""),a=null;Di(()=>{l()}),eg(()=>{c()});function l(){try{a=be(ge,n()),rr(a,S=>{const P=S.val();P?L(i,Object.entries(P).map(([E,O])=>({id:E,...O})).sort((E,O)=>(O.timestamp||0)-(E.timestamp||0)).slice(0,parseInt(r())),!0):L(i,[],!0),L(s,!1),L(o,"")},S=>{console.error("데이터 읽기 오류:",S),L(o,"데이터를 불러오는 중 오류가 발생했습니다."),L(s,!1)})}catch(S){console.error("구독 설정 오류:",S),L(o,"데이터베이스 연결에 실패했습니다."),L(s,!1)}}function c(){a&&bi(a)}function d(S){const P=new CustomEvent("post-click",{detail:{post:S},bubbles:!0,composed:!0});dispatchEvent(P)}function h(S,P){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),d(P))}function u(S){if(!S)return"";const P=typeof S=="string"?Number(S):S,E=new Date(P),C=new Date().getTime()-E.getTime(),I=Math.floor(C/6e4),v=Math.floor(C/36e5),k=Math.floor(C/864e5);return I<1?"방금 전":I<60?`${I}분 전`:v<24?`${v}시간 전`:k<7?`${k}일 전`:E.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var f={get path(){return n()},set path(S="posts"){n(S),Me()},get limit(){return r()},set limit(S="10"){r(S),Me()}},m=MI(),g=_(m);{var w=S=>{var P=RI();N(S,P)},T=S=>{var P=ue(),E=te(P);{var O=I=>{var v=PI(),k=_(v),A=_(k,!0);p(k),p(v),re(()=>x(A,y(o))),N(I,v)},C=I=>{var v=ue(),k=te(v);{var A=M=>{var j=NI();N(M,j)},z=M=>{var j=OI();Qr(j,21,()=>y(i),K=>K.id,(K,$)=>{var Y=DI();Y.__click=()=>d(y($)),Y.__keydown=De=>h(De,y($));var q=_(Y),W=_(q),Z=_(W),he=_(Z,!0);p(Z);var le=b(Z,2),ye=_(le,!0);p(le),p(W),p(q);var se=b(q,2),fe=_(se);{var V=De=>{var Qe=xI(),Je=_(Qe,!0);p(Qe),re(()=>x(Je,y($).title)),N(De,Qe)};ve(fe,De=>{y($).title&&De(V)})}var ce=b(fe,2);{var pe=De=>{var Qe=LI(),Je=_(Qe,!0);p(Qe),re(()=>x(Je,y($).content)),N(De,Qe)};ve(ce,De=>{y($).content&&De(pe)})}p(se);var tt=b(se,2),xe=_(tt),we=_(xe);p(xe);var je=b(xe,2),nt=_(je);p(je),p(tt),p(Y),re(De=>{Le(Y,"aria-label",`게시물: ${(y($).title||y($).content||"제목 없음")??""}`),x(he,y($).author||"익명"),x(ye,De),x(we,`👍 ${(y($).likes||0)??""}`),x(nt,`💬 ${(y($).comments?.length||0)??""}`)},[()=>u(y($).timestamp)]),N(K,Y)}),p(j),N(M,j)};ve(k,M=>{y(i).length===0?M(A):M(z,!1)},!0)}N(I,v)};ve(E,I=>{y(o)?I(O):I(C,!1)},!0)}N(S,P)};ve(g,S=>{y(s)?S(w):S(T,!1)})}return p(m),N(t,m),Bt(f)}$n(["click","keydown"]),customElements.define("post-list",ie(FI,{path:{},limit:{}},[],[],!0)),__();/**
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
 */const UI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var zI=W_("<svg><!><!></svg>");function Se(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]),r=Ie(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Vt(e,!1);let i=ze(e,"name",12,void 0),s=ze(e,"color",12,"currentColor"),o=ze(e,"size",12,24),a=ze(e,"strokeWidth",12,2),l=ze(e,"absoluteStrokeWidth",12,!1),c=ze(e,"iconNode",28,()=>[]);const d=(...g)=>g.filter((w,T,S)=>!!w&&S.indexOf(w)===T).join(" ");var h={get name(){return i()},set name(g){i(g),Me()},get color(){return s()},set color(g){s(g),Me()},get size(){return o()},set size(g){o(g),Me()},get strokeWidth(){return a()},set strokeWidth(g){a(g),Me()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(g){l(g),Me()},get iconNode(){return c()},set iconNode(g){c(g),Me()}};Ed();var u=zI();md(u,(g,w)=>({...UI,...r,width:o(),height:o(),stroke:s(),"stroke-width":g,class:w}),[()=>(Kr(l()),Kr(a()),Kr(o()),Yt(()=>l()?Number(a())*24/Number(o()):a())),()=>(Kr(i()),Kr(n),Yt(()=>d("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var f=_(u);Qr(f,1,c,so,(g,w)=>{var T=eo(()=>Xm(y(w),2));let S=()=>y(T)[0],P=()=>y(T)[1];var E=ue(),O=te(E);sg(O,S,!0,(C,I)=>{md(C,()=>({...P()}))}),N(g,E)});var m=b(f);return Ee(m,e,"default",{}),p(u),N(t,u),Bt(h)}ie(Se,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function cm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];Se(t,ke({name:"book-open"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(cm,{},["default"],[],!0);function Vc(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];Se(t,ke({name:"check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(Vc,{},["default"],[],!0);function um(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];Se(t,ke({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(um,{},["default"],[],!0);function dm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];Se(t,ke({name:"circle-check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(dm,{},["default"],[],!0);function hm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Se(t,ke({name:"circle-x"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(hm,{},["default"],[],!0);function Bc(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Se(t,ke({name:"external-link"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(Bc,{},["default"],[],!0);function qc(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];Se(t,ke({name:"file-text"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(qc,{},["default"],[],!0);function fm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];Se(t,ke({name:"house"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(fm,{},["default"],[],!0);function Gc(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];Se(t,ke({name:"info"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(Gc,{},["default"],[],!0);function xs(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];Se(t,ke({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(xs,{},["default"],[],!0);function pm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];Se(t,ke({name:"log-in"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(pm,{},["default"],[],!0);function mm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];Se(t,ke({name:"log-out"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(mm,{},["default"],[],!0);function Ls(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];Se(t,ke({name:"menu"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(Ls,{},["default"],[],!0);function ir(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];Se(t,ke({name:"message-circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(ir,{},["default"],[],!0);function _m(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];Se(t,ke({name:"phone"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(_m,{},["default"],[],!0);function gm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];Se(t,ke({name:"send"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(gm,{},["default"],[],!0);function vm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];Se(t,ke({name:"server"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(vm,{},["default"],[],!0);function bm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Se(t,ke({name:"settings"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(bm,{},["default"],[],!0);function ym(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];Se(t,ke({name:"triangle-alert"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(ym,{},["default"],[],!0);function wm(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];Se(t,ke({name:"trending-up"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(wm,{},["default"],[],!0);function sr(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];Se(t,ke({name:"user"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(sr,{},["default"],[],!0);function Ds(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];Se(t,ke({name:"users"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(Ds,{},["default"],[],!0);function Em(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];Se(t,ke({name:"x"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(Em,{},["default"],[],!0);function Im(t,e){const n=Ie(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];Se(t,ke({name:"zap"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=te(o);Ee(a,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}ie(Im,{},["default"],[],!0);var HI=H("<option> </option>"),WI=H('<div class="error-message svelte-1e01td3"> </div>'),jI=H('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),VI=H("<!> 인증 코드 전송",1),BI=H('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),qI=H('<div class="error-message svelte-1e01td3"> </div>'),GI=H('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),KI=H("<!> 로그인",1),YI=H('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),QI=H('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const JI={hash:"svelte-1e01td3",code:`\r
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
  }`};function XI(t,e){Vt(e,!0),mn(t,JI);const n=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=oe("+82"),i=oe(""),s=oe(""),o=oe("phone"),a=oe(!1),l=oe(""),c=oe(null),d=oe(null),h=oe(void 0),u=oe(null);function f(){return new Promise((v,k)=>{try{if(!y(u)){const A=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(A),L(l,"reCAPTCHA 초기화에 실패했습니다."),k(A);return}if(y(c)){if(y(h)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(y(h)),console.log("reCAPTCHA reset completed"),v(y(h));return}catch(A){console.warn("Failed to reset reCAPTCHA:",A)}try{y(c).clear(),L(c,null),L(h,void 0)}catch(A){console.warn("Failed to clear reCAPTCHA:",A)}}L(c,new Dy(Rt,y(u).id,{size:"invisible",callback:()=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&y(h)!==void 0?window.grecaptcha.reset(y(h)):f()}}),!0),y(c).render().then(A=>{L(h,A,!0),console.log("reCAPTCHA rendered with widgetId:",A),v(A)}).catch(A=>{console.error("Failed to render reCAPTCHA:",A),L(l,"reCAPTCHA 초기화에 실패했습니다."),k(A)})}catch(A){console.error("reCAPTCHA 초기화 실패:",A),L(l,"reCAPTCHA 초기화에 실패했습니다."),k(A)}})}Di(()=>{const v=document.createElement("div");return v.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),v.className="recaptcha-container-light-dom",v.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(v),L(u,v,!0),f(),()=>{v&&v.parentNode&&v.parentNode.removeChild(v)}});function m(v){return/^[0-9]{6,15}$/.test(v)}async function g(){if(L(l,""),!m(y(i))){L(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}L(a,!0);try{const v=`${y(r)}${y(i)}`;console.log("Sending verification code to:",v),L(d,await $y(Rt,v,y(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),L(o,"code")}catch(v){console.error("SMS 전송 실패:",v),v.code==="auth/invalid-phone-number"?L(l,"잘못된 전화번호 형식입니다."):v.code==="auth/too-many-requests"?L(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):L(l,`SMS 전송 실패: ${v.message}`)}finally{L(a,!1)}}async function w(){if(L(l,""),y(s).length!==6){L(l,"6자리 인증 코드를 입력해주세요.");return}L(a,!0);try{const v=await y(d).confirm(y(s));console.log("Login successful:",v.user);const k=new CustomEvent("login-success",{detail:{user:v.user,phoneNumber:v.user.phoneNumber}});dispatchEvent(k),L(i,""),L(s,""),L(o,"phone")}catch(v){console.error("인증 코드 확인 실패:",v),v.code==="auth/invalid-verification-code"?L(l,"잘못된 인증 코드입니다."):v.code==="auth/code-expired"?L(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):L(l,`인증 실패: ${v.message}`);const k=new CustomEvent("login-error",{detail:{error:v.message}});dispatchEvent(k)}finally{L(a,!1)}}function T(){L(o,"phone"),L(s,""),L(l,"")}var S=QI(),P=_(S),E=_(P);{var O=v=>{var k=BI(),A=_(k),z=_(A);_m(z,{class:"icon-large"}),It(4),p(A);var M=b(A,2),j=b(_(M),2);Qr(j,21,()=>n,so,(V,ce)=>{var pe=HI(),tt=_(pe);p(pe);var xe={};re(()=>{x(tt,`${y(ce).flag??""}
                ${y(ce).name??""} (${y(ce).code??""})`),xe!==(xe=y(ce).code)&&(pe.value=(pe.__value=y(ce).code)??"")}),N(V,pe)}),p(j),p(M);var K=b(M,2),$=b(_(K),2),Y=_($),q=_(Y,!0);p(Y);var W=b(Y,2);Qa(W),p($),It(2),p(K);var Z=b(K,2);{var he=V=>{var ce=WI(),pe=_(ce,!0);p(ce),re(()=>x(pe,y(l))),N(V,ce)};ve(Z,V=>{y(l)&&V(he)})}var le=b(Z,2);le.__click=g;var ye=_(le);{var se=V=>{var ce=jI();It(),N(V,ce)},fe=V=>{var ce=VI(),pe=te(ce);gm(pe,{class:"btn-icon"}),It(),N(V,ce)};ve(ye,V=>{y(a)?V(se):V(fe,!1)})}p(le),p(k),re(()=>{j.disabled=y(a),x(q,y(r)),W.disabled=y(a),le.disabled=y(a)||!y(i)}),hg(j,()=>y(r),V=>L(r,V)),Wa("keypress",W,V=>{V.key==="Enter"&&(V.preventDefault(),g())}),bd(W,()=>y(i),V=>L(i,V)),N(v,k)},C=v=>{var k=ue(),A=te(k);{var z=M=>{var j=YI(),K=_(j),$=_(K);Vc($,{class:"icon-large"});var Y=b($,4),q=_(Y);It(2),p(Y),p(K);var W=b(K,2),Z=b(_(W),2);Qa(Z),It(2),p(W);var he=b(W,2);{var le=we=>{var je=qI(),nt=_(je,!0);p(je),re(()=>x(nt,y(l))),N(we,je)};ve(he,we=>{y(l)&&we(le)})}var ye=b(he,2),se=_(ye);se.__click=T;var fe=b(se,2);fe.__click=w;var V=_(fe);{var ce=we=>{var je=GI();It(),N(we,je)},pe=we=>{var je=KI(),nt=te(je);Vc(nt,{class:"btn-icon"}),It(),N(we,je)};ve(V,we=>{y(a)?we(ce):we(pe,!1)})}p(fe),p(ye);var tt=b(ye,2),xe=b(_(tt));xe.__click=T,p(tt),p(j),re(()=>{x(q,`${y(r)??""}${y(i)??""}로 전송된`),Z.disabled=y(a),se.disabled=y(a),fe.disabled=y(a)||y(s).length!==6}),Wa("keypress",Z,we=>{we.key==="Enter"&&(we.preventDefault(),w())}),bd(Z,()=>y(s),we=>L(s,we)),N(M,j)};ve(A,M=>{y(o)==="code"&&M(z)},!0)}N(v,k)};ve(E,v=>{y(o)==="phone"?v(O):v(C,!1)})}var I=b(E,2);wd(I,v=>L(u,v),()=>y(u)),p(P),p(S),N(t,S),Bt()}$n(["click"]),customElements.define("phone-login",ie(XI,{},[],[],!0));const ua=Zr(null),Cm=Zr(!0);Nl(Rt,t=>{ua.set(t),Cm.set(!1)});async function ZI(t,e){try{return await $h(Rt,t,e),{success:!0}}catch(n){console.error("로그인 오류:",n);const r=n.code;return{success:!1,error:Sm(r)}}}async function eC(t,e,n=""){try{const r=await Mh(Rt,t,e);return n&&await Pl(r.user,{displayName:n}),{success:!0}}catch(r){console.error("회원가입 오류:",r);const i=r.code;return{success:!1,error:Sm(i)}}}async function Tm(){try{return await fy(Rt),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}}function Sm(t){return{"auth/invalid-email":"유효하지 않은 이메일 주소입니다.","auth/user-disabled":"비활성화된 계정입니다.","auth/user-not-found":"등록되지 않은 이메일입니다.","auth/wrong-password":"잘못된 비밀번호입니다.","auth/email-already-in-use":"이미 사용 중인 이메일입니다.","auth/weak-password":"비밀번호는 최소 6자 이상이어야 합니다.","auth/too-many-requests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","auth/network-request-failed":"네트워크 연결을 확인해주세요.","auth/invalid-credential":"인증 정보가 올바르지 않습니다."}[t]||"알 수 없는 오류가 발생했습니다."}class Lr{static#t=null;#e=oe(!0);get loading(){return y(this.#e)}set loading(e){L(this.#e,e,!0)}#r=oe(!1);get isAuthenticated(){return y(this.#r)}set isAuthenticated(e){L(this.#r,e,!0)}uid=null;email=null;phoneNumber=null;#i=oe(null);get data(){return y(this.#i)}set data(e){L(this.#i,e,!0)}#l=oe(null);get error(){return y(this.#l)}set error(e){L(this.#l,e,!0)}#o=null;#s=null;#n=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return Lr.#t||(Lr.#t=new Lr),Lr.#t}#a(){try{if(!Rt)throw new Error("Auth instance not available");this.#s=Nl(Rt,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#n&&(this.#n(),this.#n=null);const n=be(ge,`users/${e.uid}`);this.#n=rr(n,async r=>{this.data=r.val(),!this.data&&e&&console.log("FirebaseLoginUser: 사용자 데이터가 없습니다.")},r=>{this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#n&&(this.#n(),this.#n=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const n={};e.displayName!==void 0&&(n.displayName=e.displayName),e.photoUrl!==void 0&&(n.photoURL=e.photoUrl),Object.keys(n).length>0&&await Pl(this.#o,n);const r={...e},i=be(ge,`users/${this.uid}`);await Tn(i,r)}catch(n){throw this.error=n,n}}async updateField(e,n){return this.updateProfile({[e]:n})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#s&&(this.#s(),this.#s=null),this.#n&&(this.#n(),this.#n=null),Lr.#t=null}}const rn=Lr.getInstance(),Kc={en:{프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",신고:"Report",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",전체댓글:"Total Comments",전체좋아요:"Total Likes",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"Server-side logic and data consistency","home.todo.item8.subitem1":"User profile synchronization (onUserProfileUpdate)","home.todo.item8.subitem2":"Like/comment count synchronization","home.todo.item8.subitem3":"Cleanup associated data on post deletion","home.todo.item8.subitem4":"Notification triggers and delivery","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese",공사중메시지:"This page is under construction",공사중설명_채팅목록:"The chat list feature is currently under development and will be updated soon.",공사중설명_설정:"The settings feature is currently under development and will be updated soon.",공사중설명_게시물상세:"The post detail view feature is currently under development and will be updated soon.",공사중설명_앱정보:"The about page is currently under development and will be updated soon.",공사중설명_도움말:"The help page is currently under development and will be updated soon.",공사중설명_이용약관:"The terms of service page is currently under development and will be updated soon.",공사중설명_개인정보:"The privacy policy page is currently under development and will be updated soon.",공사중설명_문의하기:"The contact page is currently under development and will be updated soon.",메뉴로돌아가기:"Back to Menu",페이지선택:"Select a page to navigate to below",사용자프로필:"User Profile",게시물상세예시:"Post Detail (e.g., ID:123)",채팅목록:"Chat List",테스트게시글생성:"[Dev] Generate Test Posts",로그인성공알림:`Login successful!
Phone: {phone}`,로그인실패:"Login failed: {error}",전화번호로로그인:"Sign in easily with your phone number.",로그인하셨습니다:"You are logged in as {phone}.",홈으로이동:"Go to Home",사용자목록로딩:"Loading user list...",등록된사용자없음:"No registered users yet.",사용자목록실패:"Failed to load user list.",더많은사용자로딩:"Loading more users...",모든사용자로딩완료:"All users have been loaded.",정보없음:"No information",사용자:"User",이름없음:"No name",나:"Me",가입일:"Joined on",프로필보기:"View Profile",프로필사진:"Profile Photo",사진업로드중:"Uploading photo...",사진업로드실패:"Failed to upload photo: {error}",다른사진작업중:"Another photo operation is in progress...",프로필사진제거중:"Removing profile photo...",프로필사진제거완료:"Profile photo has been removed.",프로필사진제거실패:"Failed to remove profile photo: {error}",프로필업데이트중:"Updating profile...",프로필업데이트완료:"Profile has been updated successfully.",프로필업데이트실패:"Failed to update profile: {error}",닉네임입력:"Enter your nickname",닉네임최대길이:"Maximum 50 characters",소개글:"Bio",소개글입력:"Tell us about yourself",소개글최대길이:"Maximum 200 characters",홈페이지:"Website",홈페이지입력:"Enter your website URL",GitHub:"GitHub",GitHub입력:"Enter your GitHub profile URL",사진업로드:"Upload Photo",사진제거:"Remove Photo",저장하기:"Save Changes",저장중:"Saving...",테스트게시글생성타이틀:"📝 Generate Test Posts",테스트게시글생성설명:"Generate 100 fun test posts for each category, totaling 400 posts.",로그인필요메시지:"⚠️ Login required to use this feature.",로그인하러가기:"Go to Login",게시글생성시작:"Start Generating Posts",생성중:"Generating...",생성성공:"✅ Successfully generated {count} posts!",생성실패:"❌ Failed to generate posts: {error}",경고:"⚠️ Warning",경고메시지:"This will create {count} test posts. Only use for testing purposes.",진행상황:"Progress",생성된게시글수:"{count} of {total} posts created",로딩중:"Loading...",게시판설명:" for the latest news and share your opinions.",글쓰기:"Write",게시글없음:"No posts yet",첫게시글공유:"Share your first story and start the community.",새글작성2:"Write New Post",게시글로딩중:"Loading posts...",게시글로드실패:"Failed to load posts.",더많은게시글로딩:"Loading more posts...",모든게시글확인:"All posts have been loaded.",새게시글작성:"Write New Post",카테고리:"Category",카테고리선택:"Select Category",카테고리선택필요:"Please select a category.",제목:"Title",제목입력:"Enter title",제목입력필요:"Please enter a title.",내용:"Content",내용입력:"Enter content",내용입력필요:"Please enter content.",전송:"Send",전송중:"Sending...",게시글작성완료:"Post has been created.",게시글저장실패:"Failed to save post: {error}",게시글저장중오류:"An error occurred while saving the post.",로그인정보확인불가:"Could not verify login information.",좋아요실패:"An error occurred while processing like.",이미좋아요:"You already liked this post.",댓글작성:"Write Comment",댓글내용입력:"Enter comment content",댓글이작성되었습니다:"Comment has been created.",댓글작성실패:"Failed to create comment: {error}",댓글내용입력필요:"Please enter comment content.","error.unknown":"An unknown error occurred.","error.network":"Please check your network connection.","error.offline":"No internet connection.","error.auth.invalidEmail":"Invalid email format.","error.auth.userDisabled":"This account has been disabled.","error.auth.userNotFound":"User not found.","error.auth.wrongPassword":"Incorrect password.","error.auth.emailAlreadyInUse":"This email is already in use.","error.auth.weakPassword":"Password is too weak. (Minimum 6 characters)","error.auth.operationNotAllowed":"This operation is not allowed.","error.auth.tooManyRequests":"Too many requests. Please try again later.","error.auth.invalidVerificationCode":"Invalid verification code.","error.auth.invalidPhoneNumber":"Invalid phone number.","error.auth.missingVerificationCode":"Please enter verification code.","error.auth.sessionExpired":"Session expired. Please log in again.","error.auth.requiresRecentLogin":"Please log in again for security.","error.auth.credentialAlreadyInUse":"This credential is already in use by another account.","error.db.permissionDenied":"You don't have permission to perform this action.","error.db.authenticationRequired":"Please log in first.","error.db.networkError":"Database connection error.","error.storage.unauthorized":"No permission to access file.","error.storage.bucketNotFound":"Storage bucket not found.","error.storage.invalidArgument":"Invalid argument.","error.storage.objectNotFound":"File not found.","error.storage.retryLimitExceeded":"File upload error. Please try again.","error.storage.quotaExceeded":"Storage quota exceeded.","error.storage.canceled":"File upload canceled.",게시글수정:"Edit Post",게시글수정완료:"Post has been updated.",게시글삭제확인:"Are you sure you want to delete this post?",게시글삭제완료:"Post has been deleted.",댓글이달려있어수정불가:"Cannot edit post with comments.",댓글이달려있어삭제불가:"Cannot delete post with comments.",제목과내용을입력하세요:"Please enter title and content.",수정불가:"Cannot Edit",댓글이달려있어수정불가메시지:`Cannot edit the post because there are comments.
Please delete the comments first before editing.`,답글:"Reply",답글작성:"Write Reply",좋아요를하였습니다:"You liked this.",좋아요를취소했습니다:"You unliked this.",댓글수정:"Edit Comment",수정중:"Updating...",댓글이수정되었습니다:"Comment has been updated.",댓글삭제확인:"Are you sure you want to delete this comment?",댓글이삭제되었습니다:"Comment has been deleted."},ko:{프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",신고:"신고",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",바이브코딩SED:"바이브 코딩 - SED",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",전체댓글:"전체 댓글",전체좋아요:"전체 좋아요",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다. 자세히보기...","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"모든 것을 실시간 업데이트","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 (한국 바이브 보스) - 소셜 네트워크 서비스 웹/앱 개발","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"서버 측 로직 및 데이터 일관성 보장","home.todo.item8.subitem1":"사용자 프로필 동기화 (onUserProfileUpdate)","home.todo.item8.subitem2":"좋아요/댓글 개수 동기화","home.todo.item8.subitem3":"게시글 삭제 시 연관 데이터 정리","home.todo.item8.subitem4":"알림 트리거 및 전송","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",공사중메시지:"이 페이지는 공사중입니다",공사중설명_채팅목록:"채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_설정:"설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_게시물상세:"게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_앱정보:"앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_도움말:"도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_이용약관:"이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_개인정보:"개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_문의하기:"문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",메뉴로돌아가기:"메뉴로 돌아가기",페이지선택:"아래에서 이동할 페이지를 선택하세요",사용자프로필:"사용자 프로필",게시물상세예시:"게시물 상세 (예: ID:123)",채팅목록:"채팅 목록",테스트게시글생성:"[개발] 테스트 게시글 생성",로그인성공알림:`로그인 성공!
전화번호: {phone}`,로그인실패:"로그인 실패: {error}",전화번호로로그인:"전화번호로 간편하게 로그인하세요.",로그인하셨습니다:"{phone}로 로그인하셨습니다.",홈으로이동:"홈으로 이동",게시물상세:"게시물 상세",정보없음:"정보 없음",이름없음:"이름 없음",가입일:"가입일",프로필보기:"프로필 보기",사용자목록로딩:"사용자 목록을 불러오는 중...",등록된사용자없음:"등록된 사용자가 없습니다.",사용자목록실패:"사용자 목록을 불러오는데 실패했습니다.",더많은사용자로딩:"더 많은 사용자를 불러오는 중...",모든사용자로딩완료:"모든 사용자를 불러왔습니다.",다른사용자프로필:"다른 사용자 프로필:",프로필사진:"프로필 사진",프로필사진변경:"프로필 사진 변경",프로필사진추가:"프로필 사진 추가",프로필사진제거:"프로필 사진 제거",프로필사진클릭변경:"프로필 사진을 클릭하여 변경",사진저장중:"사진을 저장하는 중입니다...",닉네임입력:"닉네임을 입력하세요",닉네임헬퍼:"최대 50자까지 입력할 수 있습니다",선택하지않음:"선택하지 않음",남자:"남자",여자:"여자",생년월일헬퍼:"YYYY-MM-DD 형식으로 선택해주세요",저장중:"저장 중...",다른사진작업중:"다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",로그인후이용:"로그인 후 이용해주세요.",이미지파일만:"이미지 파일만 선택 가능합니다.",파일크기제한:"파일 크기는 5MB 이하여야 합니다.",프로필사진제거됨:"프로필 사진이 제거되었습니다.",사진제거실패:"사진 제거 실패: {error}",프로필사진저장됨:"프로필 사진이 저장되었습니다.",사진저장실패:"사진 저장 실패: {error}",프로필업데이트성공:"프로필이 성공적으로 업데이트되었습니다!",프로필업데이트오류:"오류: {error}",테스트데이터생성:"테스트 데이터 생성",테스트게시글생성타이틀:"📝 테스트 게시글 생성",테스트게시글설명:"각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",로그인하러가기:"로그인하러 가기",게시글생성시작:"게시글 생성 시작",실행로그:"실행 로그",완료게시판확인:"✅ 완료! 게시판 페이지에서 확인해보세요.",사용자:"사용자",로딩중:"로딩 중...",게시판설명:"에서 최신 소식을 확인하고 의견을 나눠보세요.",글쓰기:"글쓰기",게시글없음:"아직 등록된 게시글이 없어요",첫게시글공유:"첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",새글작성2:"새 글 작성하기",게시글로딩중:"게시글을 불러오는 중입니다...",게시글로드실패:"게시글을 불러오는 중 문제가 발생했습니다.",더많은게시글로딩:"더 많은 게시글을 불러오는 중...",모든게시글확인:"모든 게시글을 확인했습니다.",새게시글작성:"새 게시글 작성",카테고리:"카테고리",카테고리선택:"카테고리 선택",카테고리선택필요:"카테고리를 선택해주세요.",제목:"제목",제목입력:"제목을 입력하세요",제목입력필요:"제목을 입력해주세요.",내용:"내용",내용입력:"내용을 입력하세요",내용입력필요:"내용을 입력해주세요.",전송:"전송",전송중:"전송 중...",게시글작성완료:"게시글이 작성되었습니다.",게시글저장실패:"게시글 저장 실패: {error}",게시글저장중오류:"게시글 저장 중 오류가 발생했습니다.",로그인정보확인불가:"로그인 정보를 확인할 수 없습니다.",좋아요실패:"좋아요 처리 중 오류가 발생했습니다.",이미좋아요:"이미 좋아요를 눌렀습니다.",댓글작성:"댓글 작성",댓글내용입력:"댓글 내용을 입력하세요",댓글이작성되었습니다:"댓글이 작성되었습니다.",댓글작성실패:"댓글 작성 실패: {error}",댓글내용입력필요:"댓글 내용을 입력해주세요.",댓글더보기:"더 보기 (총 {count}개)",모든댓글보기:"모든 댓글 보기",댓글숨기기:"댓글 숨기기",답글:"답글",답글작성:"답글 작성",좋아요를하였습니다:"좋아요를 하였습니다.",좋아요를취소했습니다:"좋아요를 취소했습니다.","error.unknown":"알 수 없는 오류가 발생했습니다.","error.network":"네트워크 연결을 확인해주세요.","error.offline":"인터넷 연결이 없습니다.","error.auth.invalidEmail":"올바른 이메일 형식이 아닙니다.","error.auth.userDisabled":"비활성화된 계정입니다.","error.auth.userNotFound":"사용자를 찾을 수 없습니다.","error.auth.wrongPassword":"비밀번호가 올바르지 않습니다.","error.auth.emailAlreadyInUse":"이미 사용 중인 이메일입니다.","error.auth.weakPassword":"비밀번호가 너무 약합니다. (최소 6자 이상)","error.auth.operationNotAllowed":"이 작업은 허용되지 않습니다.","error.auth.tooManyRequests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","error.auth.invalidVerificationCode":"잘못된 인증 코드입니다.","error.auth.invalidPhoneNumber":"올바른 전화번호가 아닙니다.","error.auth.missingVerificationCode":"인증 코드를 입력해주세요.","error.auth.sessionExpired":"세션이 만료되었습니다. 다시 로그인해주세요.","error.auth.requiresRecentLogin":"보안을 위해 다시 로그인해주세요.","error.auth.credentialAlreadyInUse":"이미 다른 계정에서 사용 중인 인증 정보입니다.","error.db.permissionDenied":"이 작업을 수행할 권한이 없습니다.","error.db.authenticationRequired":"먼저 로그인해주세요.","error.db.networkError":"데이터베이스 연결 중 오류가 발생했습니다.","error.storage.unauthorized":"파일 접근 권한이 없습니다.","error.storage.bucketNotFound":"저장소를 찾을 수 없습니다.","error.storage.invalidArgument":"올바르지 않은 인자입니다.","error.storage.objectNotFound":"파일을 찾을 수 없습니다.","error.storage.retryLimitExceeded":"파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.","error.storage.quotaExceeded":"저장 공간이 부족합니다.","error.storage.canceled":"파일 업로드가 취소되었습니다.","dev.history.title":"📝 스터디 로그","dev.history.subtitle":"한바보 프로젝트의 개발 진행 현황을 기록합니다.","dev.history.updateIndicator":"최신 업데이트 자동 동기화","dev.history.seminar1.date":"2025-10-27 (첫 번째 세미나)","dev.history.seminar1.completed":"✅ 구현 완료","dev.history.seminar1.item1":"기본 프로젝트 셋업 (Next.js 16, React 19, TypeScript)","dev.history.seminar1.item2":"Firebase 설정 및 인증 구현","dev.history.seminar1.item3":"이메일/비밀번호 회원가입 & 로그인","dev.history.seminar1.item4":"회원 정보 수정 (프로필 업데이트)","dev.history.seminar1.item5":"1:1 채팅 기능 (실시간 메시지 동기화)","dev.history.seminar1.learned":"💡 배운 것들","dev.history.seminar1.learned1":"Next.js App Router 구조 이해","dev.history.seminar1.learned2":"Firebase Authentication 사용법","dev.history.seminar1.learned3":"Firebase Realtime Database 실시간 동기화","dev.history.seminar1.learned4":"Git PR을 통한 협업 방식","dev.history.seminar2.date":"2025-11-03 (두 번째 세미나)","dev.history.seminar2.completed":"✅ 기술 스택 전환 완료","dev.history.seminar2.item1":"React.js + Next.js + Firebase + Supabase → Svelte + Firebase로 전환","dev.history.seminar2.item2":"Svelte 5 Custom Elements 기반 아키텍처 구축","dev.history.seminar2.item3":"Web Components로 프레임워크 독립적인 구조 구현","dev.history.seminar2.item4":"Firebase만으로 모든 기능 구현 (Supabase 제거)","dev.history.seminar2.item5":"전체 프로젝트 리팩토링 및 재구성","dev.history.seminar2.learned":"💡 배운 것들","dev.history.seminar2.learned1":"Svelte 5 Runes ($state, $derived, $effect) 활용법","dev.history.seminar2.learned2":"Web Components의 장점과 재사용성","dev.history.seminar2.learned3":"Firebase만으로 충분한 기능 구현 가능","dev.history.seminar2.learned4":"더 가볍고 빠른 개발 환경 구축","dev.history.seminar3.date":"2025-11-04","dev.history.seminar3.completed":"✅ 핵심 기능 구현 완료","dev.history.seminar3.item1":"Svelte 5를 JavaScript에서 TypeScript로 전환","dev.history.seminar3.item2":"게시판 좋아요 기능 구현","dev.history.seminar3.item3":"댓글 작성, 수정, 삭제 기능 구현","dev.history.seminar3.item4":"댓글 좋아요 기능 추가","dev.history.seminar3.item5":"통계 기능 추가 (사용자 수, 게시글 수, 댓글 수 등)","dev.history.seminar3.learned":"💡 배운 것들","dev.history.seminar3.learned1":"TypeScript의 타입 안정성이 주는 바이브코딩의 코드 생성 향상","dev.history.seminar3.learned2":"바이브코딩의 한계를 극복하기 위한 Spec-Exact Development (SED) 개념 창조: LLM이 충분히 이해할 수 있는 상세한 스펙(DB 구조, 인증 방식, 암호화, 비밀번호 확인란 등) 제공. LLM이 작업 전 스펙 점수를 매겨 90점 이상일 때만 개발 시작","dev.history.seminar3.learned3":"Firebase increment()로 동시성 안전한 카운터 구현","dev.history.seminar3.learned4":"실시간 데이터 동기화를 활용한 통계 기능","dev.history.seminar3.learned5":"사용자 경험을 고려한 좋아요 및 댓글 UX 설계","dev.history.seminar4.date":"2025-11-05","dev.history.seminar4.completed":"✅ 구현 완료","dev.history.seminar4.item1":"각종 통계 (사용자 수, 게시글 수, 댓글 수, 좋아요 수 등)","dev.history.seminar4.item2":"댓글 작성 기능 완성 (실시간 동기화)","dev.history.seminar4.item3":"코멘트 좋아요 버그 수정 (Firebase push 키 처리)","dev.history.seminar4.item4":"Firebase Cloud Functions 배포 자동화 (npm run deploy)","dev.history.seminar4.item5":"CLAUDE.md 문서 구조 개선 (요약/레퍼런스 분리)","dev.history.seminar4.learned":"💡 배운 것들","dev.history.seminar4.learned1":"본 프로젝트를 100% 바이브 코딩(노코딩)으로 개발 진행하면서, 아무리 잘 작성된 프롬프트라고 해도, 프롬프트 몇 번만에 완전한 소셜 서비스 웹/앱 개발이 불가능하다는 것을 깨달았다.","dev.history.seminar4.learned2":"그래서 SED (Spec-Exact Development)의 중요성을 다시 한번 깨닫게 되었다.","dev.history.seminar4.learned3":"Firebase Cloud Functions의 increment() 함수로 동시성 안전한 카운터 업데이트 구현","dev.history.seminar4.learned4":"문서화의 중요성: 요약은 CLAUDE.md에, 상세 예제는 docs/*.md에 분리하여 관리","dev.history.upcoming":"더 많은 스터디 로그가 추가될 예정입니다...",게시글수정:"게시글 수정",게시글수정완료:"게시글이 수정되었습니다.",게시글삭제확인:"정말로 이 게시글을 삭제하시겠습니까?",게시글삭제완료:"게시글이 삭제되었습니다.",댓글이달려있어수정불가:"댓글이 달려 있는 경우 수정을 할 수 없습니다.",댓글이달려있어삭제불가:"댓글이 달려 있는 경우 삭제를 할 수 없습니다.",제목과내용을입력하세요:"제목과 내용을 입력하세요.",수정불가:"수정할 수 없습니다",댓글이달려있어수정불가메시지:`댓글이 달려 있어서 게시글을 수정할 수 없습니다.
댓글을 먼저 삭제한 후 수정해주세요.`,댓글수정:"댓글 수정",수정중:"수정 중...",댓글이수정되었습니다:"댓글이 수정되었습니다.",댓글삭제확인:"정말로 이 댓글을 삭제하시겠습니까?",댓글이삭제되었습니다:"댓글이 삭제되었습니다.",파일첨부:"파일 첨부",이미지첨부:"업로드",파일선택:"파일 선택",파일삭제:"삭제",파일크기초과:"파일 크기가 5MB를 초과합니다",지원하지않는파일형식:"지원하지 않는 파일 형식입니다 (JPEG, PNG, WebP만 가능)",파일업로드중:"업로드 중...",파일업로드완료:"업로드 완료",파일업로드실패:"업로드 실패: {error}",파일목록:"첨부 파일",파일없음:"첨부된 파일이 없습니다",업로드진행중:"업로드 진행 중: {progress}%","error.file.tooLarge":"파일 크기가 5MB를 초과합니다","error.file.invalidType":"지원하지 않는 파일 형식입니다 (JPEG, PNG, WebP만 가능)","error.file.invalidUrl":"올바르지 않은 파일 URL입니다"},ja:{프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",신고:"通報",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",전체댓글:"総コメント数",전체좋아요:"総いいね数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"サーバー側ロジックとデータ整合性の保証","home.todo.item8.subitem1":"ユーザープロフィール同期 (onUserProfileUpdate)","home.todo.item8.subitem2":"いいね/コメント数の同期","home.todo.item8.subitem3":"投稿削除時の関連データクリーンアップ","home.todo.item8.subitem4":"通知トリガーと配信","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語",공사중메시지:"このページは工事中です",공사중설명_채팅목록:"チャットリスト機能は現在開発中で、まもなく更新される予定です。",공사중설명_설정:"設定機能は現在開発中で、まもなく更新される予定です。",공사중설명_게시물상세:"投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",공사중설명_앱정보:"アプリ情報ページは現在開発中で、まもなく更新される予定です。",공사중설명_도움말:"ヘルプページは現在開発中で、まもなく更新される予定です。",공사중설명_이용약관:"利用規約ページは現在開発中で、まもなく更新される予定です。",공사중설명_개인정보:"プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",공사중설명_문의하기:"お問い合わせページは現在開発中で、まもなく更新される予定です。",메뉴로돌아가기:"メニューに戻る",페이지선택:"移動するページを下から選択してください",사용자프로필:"ユーザープロフィール",게시물상세예시:"投稿詳細 (例: ID:123)",채팅목록:"チャットリスト",테스트게시글생성:"[開発] テスト投稿生成",로그인성공알림:`ログイン成功!
電話番号: {phone}`,로그인실패:"ログイン失敗: {error}",전화번호로로그인:"電話番号で簡単にログインしてください。",로그인하셨습니다:"{phone}でログインしています。",홈으로이동:"ホームへ移動",사용자목록로딩:"ユーザーリストを読み込み中...",등록된사용자없음:"登録されたユーザーがいません。",사용자목록실패:"ユーザーリストの読み込みに失敗しました。",더많은사용자로딩:"さらにユーザーを読み込み中...",모든사용자로딩완료:"すべてのユーザーを読み込みました。",정보없음:"情報なし",사용자:"ユーザー",이름없음:"名前なし",나:"私",가입일:"登録日",프로필보기:"プロフィール表示",프로필사진:"プロフィール写真",사진업로드중:"写真をアップロード中...",사진업로드실패:"写真のアップロードに失敗しました: {error}",다른사진작업중:"他の写真操作が進行中です...",프로필사진제거중:"プロフィール写真を削除中...",프로필사진제거완료:"プロフィール写真を削除しました。",프로필사진제거실패:"プロフィール写真の削除に失敗しました: {error}",프로필업데이트중:"プロフィールを更新中...",프로필업데이트완료:"プロフィールを正常に更新しました。",프로필업데이트실패:"プロフィールの更新に失敗しました: {error}",닉네임입력:"ニックネームを入力してください",닉네임최대길이:"最大50文字まで入力できます",소개글:"自己紹介",소개글입력:"自己紹介を入力してください",소개글최대길이:"最大200文字まで入力できます",홈페이지:"ウェブサイト",홈페이지입력:"ウェブサイトURLを入力してください",GitHub:"GitHub",GitHub입력:"GitHubプロフィールURLを入力してください",사진업로드:"写真をアップロード",사진제거:"写真を削除",저장하기:"変更を保存",저장중:"保存中...",테스트게시글생성타이틀:"📝 テスト投稿生成",테스트게시글생성설명:"各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",로그인필요메시지:"⚠️ この機能を使用するにはログインが必要です。",로그인하러가기:"ログインへ",게시글생성시작:"投稿生成開始",생성중:"生成中...",생성성공:"✅ {count}件の投稿を正常に生成しました！",생성실패:"❌ 投稿の生成に失敗しました: {error}",경고:"⚠️ 警告",경고메시지:"{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",진행상황:"進行状況",생성된게시글수:"{total}件中{count}件の投稿を作成",로딩중:"読み込み中...",게시판설명:"の最新ニュースを確認し、意見を共有してください。",글쓰기:"書く",게시글없음:"まだ投稿がありません",첫게시글공유:"最初のストーリーを共有してコミュニティを始めましょう。",새글작성2:"新規投稿を書く",게시글로딩중:"投稿を読み込み中...",게시글로드실패:"投稿の読み込みに失敗しました。",더많은게시글로딩:"さらに多くの投稿を読み込み中...",모든게시글확인:"すべての投稿を読み込みました。",새게시글작성:"新規投稿を書く",카테고리:"カテゴリ",카테고리선택:"カテゴリを選択",카테고리선택필요:"カテゴリを選択してください。",제목:"タイトル",제목입력:"タイトルを入力してください",제목입력필요:"タイトルを入力してください。",내용:"コンテンツ",내용입력:"コンテンツを入力してください",내용입력필요:"コンテンツを入力してください。",전송:"送信",전송중:"送信中...",게시글작성완료:"投稿が作成されました。",게시글저장실패:"投稿の保存に失敗しました: {error}",게시글저장중오류:"投稿の保存中にエラーが発生しました。",로그인정보확인불가:"ログイン情報を確認できませんでした。",좋아요실패:"いいね処理中にエラーが発生しました。",이미좋아요:"すでにいいねしています。",댓글작성:"コメントを書く",댓글내용입력:"コメント内容を入力してください",댓글이작성되었습니다:"コメントが作成されました。",댓글작성실패:"コメント作成に失敗しました: {error}",댓글내용입력필요:"コメント内容を入力してください。","error.unknown":"不明なエラーが発生しました。","error.network":"ネットワーク接続を確認してください。","error.offline":"インターネット接続がありません。","error.auth.invalidEmail":"正しいメール形式ではありません。","error.auth.userDisabled":"無効なアカウントです。","error.auth.userNotFound":"ユーザーが見つかりません。","error.auth.wrongPassword":"パスワードが正しくありません。","error.auth.emailAlreadyInUse":"すでに使用されているメールアドレスです。","error.auth.weakPassword":"パスワードが弱すぎます。（最低6文字以上）","error.auth.operationNotAllowed":"この操作は許可されていません。","error.auth.tooManyRequests":"リクエストが多すぎます。しばらくしてから再試行してください。","error.auth.invalidVerificationCode":"無効な認証コードです。","error.auth.invalidPhoneNumber":"正しい電話番号ではありません。","error.auth.missingVerificationCode":"認証コードを入力してください。","error.auth.sessionExpired":"セッションが期限切れです。再度ログインしてください。","error.auth.requiresRecentLogin":"セキュリティのため、再度ログインしてください。","error.auth.credentialAlreadyInUse":"すでに他のアカウントで使用されている認証情報です。","error.db.permissionDenied":"この操作を実行する権限がありません。","error.db.authenticationRequired":"まずログインしてください。","error.db.networkError":"データベース接続中にエラーが発生しました。","error.storage.unauthorized":"ファイルへのアクセス権限がありません。","error.storage.bucketNotFound":"ストレージが見つかりません。","error.storage.invalidArgument":"無効な引数です。","error.storage.objectNotFound":"ファイルが見つかりません。","error.storage.retryLimitExceeded":"ファイルアップロード中にエラーが発生しました。再試行してください。","error.storage.quotaExceeded":"ストレージ容量が不足しています。","error.storage.canceled":"ファイルアップロードがキャンセルされました。"},zh:{프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",신고:"举报",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",전체댓글:"总评论",전체좋아요:"总点赞",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"服务器端逻辑和数据一致性保障","home.todo.item8.subitem1":"用户资料同步 (onUserProfileUpdate)","home.todo.item8.subitem2":"点赞/评论数同步","home.todo.item8.subitem3":"帖子删除时清理关联数据","home.todo.item8.subitem4":"通知触发和发送","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文",공사중메시지:"此页面正在建设中",공사중설명_채팅목록:"聊天列表功能正在开发中，即将更新。",공사중설명_설정:"设置功能正在开发中，即将更新。",공사중설명_게시물상세:"帖子详情查看功能正在开发中，即将更新。",공사중설명_앱정보:"应用信息页面正在开发中，即将更新。",공사중설명_도움말:"帮助页面正在开发中，即将更新。",공사중설명_이용약관:"使用条款页面正在开发中，即将更新。",공사중설명_개인정보:"隐私政策页面正在开发中，即将更新。",공사중설명_문의하기:"联系我们页面正在开发中，即将更新。",메뉴로돌아가기:"返回菜单",페이지선택:"从下方选择要导航的页面",사용자프로필:"用户资料",게시물상세예시:"帖子详情 (例: ID:123)",채팅목록:"聊天列表",테스트게시글생성:"[开发] 生成测试帖子",로그인성공알림:`登录成功！
手机号: {phone}`,로그인실패:"登录失败: {error}",전화번호로로그인:"使用手机号轻松登录。",로그인하셨습니다:"您已使用 {phone} 登录。",홈으로이동:"前往首页",사용자목록로딩:"正在加载用户列表...",등록된사용자없음:"尚无注册用户。",사용자목록실패:"加载用户列表失败。",더많은사용자로딩:"正在加载更多用户...",모든사용자로딩완료:"已加载所有用户。",정보없음:"无信息",사용자:"用户",이름없음:"无名称",나:"我",가입일:"注册日期",프로필보기:"查看资料",프로필사진:"头像",사진업로드중:"正在上传照片...",사진업로드실패:"照片上传失败: {error}",다른사진작업중:"另一个照片操作正在进行中...",프로필사진제거중:"正在删除头像...",프로필사진제거완료:"头像已删除。",프로필사진제거실패:"删除头像失败: {error}",프로필업데이트중:"正在更新资料...",프로필업데이트완료:"资料更新成功。",프로필업데이트실패:"资料更新失败: {error}",닉네임입력:"输入您的昵称",닉네임최대길이:"最多可输入50个字符",소개글:"个人简介",소개글입력:"请输入自我介绍",소개글최대길이:"最多可输入200个字符",홈페이지:"网站",홈페이지입력:"请输入您的网站URL",GitHub:"GitHub",GitHub입력:"请输入您的GitHub个人资料URL",사진업로드:"上传照片",사진제거:"删除照片",저장하기:"保存更改",저장중:"保存中...",테스트게시글생성타이틀:"📝 生成测试帖子",테스트게시글생성설명:"每个类别生成100条有趣的测试帖子，共400条。",로그인필요메시지:"⚠️ 使用此功能需要登录。",로그인하러가기:"前往登录",게시글생성시작:"开始生成帖子",생성중:"生成中...",생성성공:"✅ 成功生成了 {count} 条帖子！",생성실패:"❌ 生成帖子失败: {error}",경고:"⚠️ 警告",경고메시지:"这将创建 {count} 条测试帖子。仅用于测试目的。",진행상황:"进度",생성된게시글수:"已创建 {count} / {total} 条帖子",로딩중:"加载中...",게시판설명:"的最新新闻，分享您的意见。",글쓰기:"写作",게시글없음:"还没有帖子",첫게시글공유:"分享您的第一个故事并开始社区。",새글작성2:"写新帖子",게시글로딩중:"正在加载帖子...",게시글로드실패:"加载帖子失败。",더많은게시글로딩:"正在加载更多帖子...",모든게시글확인:"已加载所有帖子。",새게시글작성:"写新帖子",카테고리:"类别",카테고리선택:"选择类别",카테고리선택필요:"请选择一个类别。",제목:"标题",제목입력:"输入标题",제목입력필요:"请输入标题。",내용:"内容",내용입력:"输入内容",내용입력필요:"请输入内容。",전송:"发送",전송중:"发送中...",게시글작성완료:"帖子已创建。",게시글저장실패:"帖子保存失败: {error}",게시글저장중오류:"保存帖子时出错。",로그인정보확인불가:"无法验证登录信息。",좋아요실패:"处理点赞时出错。",이미좋아요:"您已经点赞过了。",댓글작성:"写评论",댓글내용입력:"请输入评论内容",댓글이작성되었습니다:"评论已创建。",댓글작성실패:"评论创建失败: {error}",댓글내용입력필요:"请输入评论内容。","error.unknown":"发生未知错误。","error.network":"请检查网络连接。","error.offline":"没有互联网连接。","error.auth.invalidEmail":"邮箱格式不正确。","error.auth.userDisabled":"账户已被禁用。","error.auth.userNotFound":"找不到用户。","error.auth.wrongPassword":"密码不正确。","error.auth.emailAlreadyInUse":"该邮箱已被使用。","error.auth.weakPassword":"密码太弱。（至少6个字符）","error.auth.operationNotAllowed":"此操作不被允许。","error.auth.tooManyRequests":"请求过多。请稍后再试。","error.auth.invalidVerificationCode":"验证码无效。","error.auth.invalidPhoneNumber":"电话号码格式不正确。","error.auth.missingVerificationCode":"请输入验证码。","error.auth.sessionExpired":"会话已过期。请重新登录。","error.auth.requiresRecentLogin":"为了安全，请重新登录。","error.auth.credentialAlreadyInUse":"此凭证已被其他账户使用。","error.db.permissionDenied":"您没有执行此操作的权限。","error.db.authenticationRequired":"请先登录。","error.db.networkError":"数据库连接时出错。","error.storage.unauthorized":"没有文件访问权限。","error.storage.bucketNotFound":"找不到存储桶。","error.storage.invalidArgument":"参数无效。","error.storage.objectNotFound":"找不到文件。","error.storage.retryLimitExceeded":"文件上传出错。请重试。","error.storage.quotaExceeded":"存储空间不足。","error.storage.canceled":"文件上传已取消。"}};function Yc(t){const e=(t??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function km(){if(typeof navigator>"u")return"en";const t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of t){const n=Yc(e);if(n!=="en")return n}return"en"}function tC(t){let e=Yc(t)||km();function n(s){e=Yc(s)}function r(){return e}function i(s,o={}){return((Kc[e]??Kc.en)[s]??Kc.en[s]??s).replace(/\{(\w+)\}/g,(c,d)=>o[d]??"")}return{t:i,setLocale:n,getLocale:r}}const Qc="sns-web-locale",Am=[{code:"ko",label:"🇰🇷 한국어"},{code:"en",label:"🇺🇸 English"},{code:"ja",label:"🇯🇵 日本語"},{code:"zh",label:"🇨🇳 中文"}];function nC(){if(typeof localStorage>"u")return null;const t=localStorage.getItem(Qc);if(!t)return null;const e=Am.find(n=>n.code===t);return e?e.code:null}const Rm=nC()??km(),da=tC(Rm);typeof localStorage<"u"&&localStorage.setItem(Qc,da.getLocale());const Jc=Zr(Rm);function rC(t){da.setLocale(t);const e=da.getLocale();Jc.set(e),typeof localStorage<"u"&&localStorage.setItem(Qc,e)}const Xc=_g(Jc,t=>(e,n={})=>da.t(e,n)),iC=Zr("");function Pt(t){window.history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate"))}var sC=H('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),oC=H('<img alt="프로필" class="avatar-image svelte-38psow"/>'),aC=H('<div class="avatar-fallback svelte-38psow"> </div>'),lC=H('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <button type="button" class="dropdown-item svelte-38psow"><!> <span> </span></button> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),cC=H('<img class="avatar-image svelte-38psow"/>'),uC=H('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),dC=H('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),hC=H('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"> </button> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),fC=H('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><button type="button" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></button> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const pC={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function mC(t,e){Vt(e,!0),mn(t,pC);const n=()=>gr(iC,"$pageTitle",s),r=()=>gr(ua,"$user",s),i=()=>gr(Xc,"$t",s),[s,o]=tl();let a=oe(!1);function l(I){Pt(I),L(a,!1)}async function c(){if((await Tm()).success){const v=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(v)}L(a,!1)}function d(){return rn.data?.displayName?rn.data.displayName.charAt(0).toUpperCase():rn.email?rn.email.charAt(0).toUpperCase():"U"}function h(){L(a,!y(a))}function u(I){const v=document.querySelector(".dropdown-menu"),k=document.querySelector(".dropdown-trigger"),A=I.target;v&&!v.contains(A)&&!k?.contains(A)&&L(a,!1)}Di(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}));var f=fC(),m=_(f),g=_(m),w=_(g);w.__click=()=>l("/");var T=b(w,2);{var S=I=>{var v=sC(),k=_(v),A=_(k,!0);p(k),p(v),re(()=>x(A,n())),N(I,v)};ve(T,I=>{n()&&I(S)})}p(g);var P=b(g,2),E=_(P);{var O=I=>{var v=dC(),k=te(v),A=_(k);A.__click=()=>l("/post/list");var z=_(A);xs(z,{size:16});var M=b(z,2),j=_(M,!0);p(M),p(A);var K=b(A,2);K.__click=()=>l("/chat/list");var $=_(K);ir($,{size:16});var Y=b($,2),q=_(Y,!0);p(Y),p(K);var W=b(K,2);W.__click=()=>l("/user/list");var Z=_(W);Ds(Z,{size:16});var he=b(Z,2),le=_(he,!0);p(he),p(W);var ye=b(W,2),se=_(ye);se.__click=h;var fe=_(se),V=_(fe);{var ce=Oe=>{var Re=oC();re(()=>Le(Re,"src",rn.data.photoUrl)),N(Oe,Re)},pe=Oe=>{var Re=aC(),mt=_(Re,!0);p(Re),re(at=>x(mt,at),[d]),N(Oe,Re)};ve(V,Oe=>{rn.data?.photoUrl?Oe(ce):Oe(pe,!1)})}p(fe);var tt=b(fe,2),xe=_(tt,!0);p(tt),p(se);var we=b(se,2);{var je=Oe=>{var Re=lC(),mt=_(Re),at=_(mt,!0);p(mt);var Sn=b(mt,4);Sn.__click=()=>l("/user/profile");var cr=_(Sn);sr(cr,{size:16});var Mr=b(cr,2),$r=_(Mr,!0);p(Mr),p(Sn);var Fr=b(Sn,4);Fr.__click=c;var Ms=_(Fr);mm(Ms,{size:16});var ma=b(Ms,2),_a=_(ma,!0);p(ma),p(Fr),p(Re),re((ga,va,tu)=>{x(at,ga),x($r,va),x(_a,tu)},[()=>i()("내계정"),()=>i()("프로필수정"),()=>i()("로그아웃")]),N(Oe,Re)};ve(we,Oe=>{y(a)&&Oe(je)})}p(ye);var nt=b(ye,2);nt.__click=()=>l("/menu");var De=_(nt);Ls(De,{size:24}),p(nt),p(k);var Qe=b(k,2),Je=_(Qe);Je.__click=()=>l("/post/list");var Dr=_(Je);xs(Dr,{size:20}),p(Je);var Wt=b(Je,2);Wt.__click=()=>l("/user/list");var or=_(Wt);Ds(or,{size:20}),p(Wt);var ar=b(Wt,2);ar.__click=()=>l("/chat/list");var ha=_(ar);ir(ha,{size:20}),p(ar);var Or=b(ar,2);Or.__click=()=>l("/user/profile");var yi=_(Or),fa=_(yi);{var pa=Oe=>{var Re=cC();re(mt=>{Le(Re,"src",rn.data.photoUrl),Le(Re,"alt",mt)},[()=>i()("프로필")]),N(Oe,Re)},eu=Oe=>{var Re=uC(),mt=_(Re,!0);p(Re),re(at=>x(mt,at),[d]),N(Oe,Re)};ve(fa,Oe=>{rn.data?.photoUrl?Oe(pa):Oe(eu,!1)})}p(yi),p(Or);var lr=b(Or,2);lr.__click=()=>l("/menu");var Os=_(lr);Ls(Os,{size:24}),p(lr),p(Qe),re((Oe,Re,mt,at,Sn,cr,Mr,$r,Fr)=>{x(j,Oe),x(q,Re),x(le,mt),x(xe,rn.data?.displayName||rn.email),Le(nt,"title",at),Le(Je,"title",Sn),Le(Wt,"title",cr),Le(ar,"title",Mr),Le(Or,"title",$r),Le(lr,"title",Fr)},[()=>i()("게시판"),()=>i()("채팅"),()=>i()("사용자찾기"),()=>i()("메뉴"),()=>i()("게시판"),()=>i()("사용자찾기"),()=>i()("채팅"),()=>i()("프로필"),()=>i()("메뉴")]),N(I,v)},C=I=>{var v=hC(),k=te(v),A=_(k);A.__click=()=>l("/post/list");var z=_(A);xs(z,{size:16});var M=b(z,2),j=_(M,!0);p(M),p(A);var K=b(A,2);K.__click=()=>l("/chat/list");var $=_(K);ir($,{size:16});var Y=b($,2),q=_(Y,!0);p(Y),p(K);var W=b(K,2);W.__click=()=>l("/user/login");var Z=_(W,!0);p(W);var he=b(W,2);he.__click=()=>l("/menu");var le=_(he);Ls(le,{size:20}),p(he),p(k);var ye=b(k,2),se=_(ye);se.__click=()=>l("/post/list");var fe=_(se);xs(fe,{size:20}),p(se);var V=b(se,2);V.__click=()=>l("/chat/list");var ce=_(V);ir(ce,{size:20}),p(V);var pe=b(V,2);pe.__click=()=>l("/user/login");var tt=_(pe);sr(tt,{size:20}),p(pe);var xe=b(pe,2);xe.__click=()=>l("/menu");var we=_(xe);Ls(we,{size:24}),p(xe),p(ye),re((je,nt,De,Qe,Je,Dr,Wt,or)=>{x(j,je),x(q,nt),x(Z,De),Le(he,"title",Qe),Le(se,"title",Je),Le(V,"title",Dr),Le(pe,"title",Wt),Le(xe,"title",or)},[()=>i()("게시판"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴"),()=>i()("게시판"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴")]),N(I,v)};ve(E,I=>{r()?I(O):I(C,!1)})}p(P),p(m),p(f),N(t,f),Bt(),o()}$n(["click"]),customElements.define("sns-topbar",ie(mC,{},[],[],!0));var _C=H('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>'),gC=H('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>',1),vC=H("<option> </option>"),bC=H('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const yC={hash:"svelte-najsij",code:`
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
  }`};function wC(t,e){Vt(e,!1),mn(t,yC);const n=()=>gr(Xc,"$t",s),r=()=>gr(ua,"$user",s),i=()=>gr(Jc,"$locale",s),[s,o]=tl(),a=Am;Ed();var l=bC(),c=_(l),d=_(c),h=_(d,!0);p(d);var u=b(d,2),f=_(u);f.__click=()=>Pt("/");var m=_(f);fm(m,{size:20});var g=b(m,2),w=_(g,!0);p(g),p(f);var T=b(f,2);T.__click=()=>Pt("/chat/room");var S=_(T);ir(S,{size:20});var P=b(S,2),E=_(P,!0);p(P),p(T);var O=b(T,2);O.__click=()=>Pt("/user/list");var C=_(O);Ds(C,{size:20});var I=b(C,2),v=_(I,!0);p(I),p(O);var k=b(O,2);k.__click=()=>Pt("/user/profile");var A=_(k);sr(A,{size:20});var z=b(A,2),M=_(z,!0);p(z),p(k);var j=b(k,2);j.__click=()=>Pt("/post/list");var K=_(j);qc(K,{size:20});var $=b(K,2),Y=_($,!0);p($),p(j),p(u);var q=b(u,4),W=_(q),Z=_(W,!0);p(W);var he=b(W,2),le=_(he);{var ye=Nt=>{var wt=_C();wt.__click=()=>Pt("/user/profile");var lt=_(wt);sr(lt,{size:16});var kn=b(lt,2),An=_(kn,!0);p(kn),p(wt),re($s=>x(An,$s),[()=>n()("회원정보수정")]),N(Nt,wt)},se=Nt=>{var wt=gC(),lt=te(wt);lt.__click=()=>Pt("/auth/login");var kn=_(lt);pm(kn,{size:16});var An=b(kn,2),$s=_(An,!0);p(An),p(lt);var Fs=b(lt,2);Fs.__click=()=>Pt("/auth/signup");var ba=_(Fs);sr(ba,{size:16});var ya=b(ba,2),nu=_(ya,!0);p(ya),p(Fs),re((ru,iu)=>{x($s,ru),x(nu,iu)},[()=>n()("로그인"),()=>n()("회원가입")]),N(Nt,wt)};ve(le,Nt=>{r()?Nt(ye):Nt(se,!1)})}p(he),p(q);var fe=b(q,4),V=_(fe);V.__click=()=>Pt("/user/list");var ce=_(V);Ds(ce,{size:16});var pe=b(ce,2),tt=_(pe,!0);p(pe),p(V);var xe=b(V,2),we=b(_(xe),2),je=_(we,!0);p(we);var nt=b(we,2);Bc(nt,{size:12,class:"external-icon"}),p(xe);var De=b(xe,2),Qe=_(De);ir(Qe,{size:16});var Je=b(Qe,2),Dr=_(Je,!0);p(Je);var Wt=b(Je,2);Bc(Wt,{size:12,class:"external-icon"}),p(De);var or=b(De,2);or.__click=()=>Pt("/dev/history");var ar=_(or);cm(ar,{size:16});var ha=b(ar,2),Or=_(ha,!0);p(ha),p(or);var yi=b(or,2);yi.__click=()=>Pt("/dev/sed");var fa=_(yi);Im(fa,{size:16});var pa=b(fa,2),eu=_(pa,!0);p(pa),p(yi),p(fe);var lr=b(fe,2),Os=_(lr),Oe=_(Os,!0);p(Os);var Re=b(Os,2),mt=_(Re),at=b(mt,2);at.__change=Nt=>rC(Nt.currentTarget.value),Qr(at,5,()=>a,so,(Nt,wt)=>{var lt=vC(),kn=_(lt,!0);p(lt);var An={};re(()=>{x(kn,y(wt).label),An!==(An=y(wt).code)&&(lt.value=(lt.__value=y(wt).code)??"")}),N(Nt,lt)}),p(at);var Sn;Ya(at),p(Re),p(lr);var cr=b(lr,2),Mr=_(cr),$r=_(Mr),Fr=_($r,!0);p($r);var Ms=b($r,2),ma=_(Ms,!0);p(Ms),p(Mr),p(cr);var _a=b(cr,2),ga=_(_a),va=_(ga,!0),tu=b(va,2);p(ga),p(_a),p(c),p(l),re((Nt,wt,lt,kn,An,$s,Fs,ba,ya,nu,ru,iu,mT,_T,gT,vT,bT,yT)=>{x(h,Nt),x(w,wt),x(E,lt),x(v,kn),x(M,An),x(Y,$s),x(Z,Fs),x(tt,ba),x(je,ya),x(Dr,nu),x(Or,ru),x(eu,iu),x(Oe,mT),Le(mt,"aria-label",_T),Sn!==(Sn=i())&&(at.value=(at.__value=i())??"",Oi(at,i())),x(Fr,gT),x(ma,vT),x(va,bT),x(tu,` ${yT??""}`)},[()=>n()("퀵메뉴"),()=>n()("홈"),()=>n()("채팅"),()=>n()("사용자목록"),()=>n()("내프로필"),()=>n()("게시판"),()=>n()("시작하기"),()=>n()("회원목록"),()=>n()("프로젝트GitHub"),()=>n()("한바보참여단톡방"),()=>n()("개발일지"),()=>n()("바이브코딩SED"),()=>n()("언어설정"),()=>n()("언어설정"),()=>n()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>n()("카피레프트"),()=>n()("AI소개")]),N(t,l),Bt(),o()}$n(["click","change"]),customElements.define("sns-left-sidebar",ie(wC,{},[],[],!0));var EC=H('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const IC={hash:"svelte-3epon2",code:`\r
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
  }`};function CC(t,e){Vt(e,!0),mn(t,IC);const n=()=>gr(Xc,"$t",r),[r,i]=tl();let s=oe(hn({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=EC(),a=_(o),l=_(a),c=_(l,!0);p(l);var d=b(l,2),h=_(d),u=_(h),f=_(u);sr(f,{size:20}),p(u);var m=b(u,2),g=_(m),w=_(g,!0);p(g);var T=b(g,2),S=_(T,!0);p(T),p(m),p(h);var P=b(h,2),E=_(P),O=_(E);wm(O,{size:20}),p(E);var C=b(E,2),I=_(C),v=_(I,!0);p(I);var k=b(I,2),A=_(k,!0);p(k),p(C),p(P);var z=b(P,2),M=_(z),j=_(M);qc(j,{size:20}),p(M);var K=b(M,2),$=_(K),Y=_($,!0);p($);var q=b($,2),W=_(q,!0);p(q);var Z=b(q,2),he=_(Z,!0);p(Z),p(K),p(z);var le=b(z,2),ye=_(le),se=_(ye);ir(se,{size:20}),p(ye);var fe=b(ye,2),V=_(fe),ce=_(V,!0);p(V);var pe=b(V,2),tt=_(pe,!0);p(pe),p(fe),p(le),p(d);var xe=b(d,2),we=_(xe,!0);p(xe),p(a),p(o),re((je,nt,De,Qe,Je,Dr,Wt)=>{x(c,je),x(w,nt),x(S,y(s).totalUsers),x(v,De),x(A,y(s).totalScore),x(Y,Qe),x(W,y(s).totalPosts),x(he,Je),x(ce,Dr),x(tt,y(s).totalMessages),x(we,Wt)},[()=>n()("통계"),()=>n()("전체사용자"),()=>n()("전체점수"),()=>n()("전체글"),()=>n()("준비중"),()=>n()("채팅메시지"),()=>n()("통계실시간업데이트")]),N(t,o),Bt(),i()}customElements.define("sns-right-sidebar",ie(CC,{},[],[],!0));var TC=H('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const SC={hash:"svelte-um1xbq",code:`\r
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
  }`};function kC(t,e){mn(t,SC);var n=TC(),r=_(n),i=b(r,2),s=_(i);Jr(s,1,"left-sidebar svelte-um1xbq");var o=b(s,2),a=_(o);Ee(a,e,"default",{}),p(o);var l=b(o,2);Jr(l,1,"right-sidebar svelte-um1xbq"),p(i),p(n),N(t,n)}customElements.define("sns-layout",ie(kC,{},["default"],[],!0));var AC=H('<div class="icon-container svelte-m3h71q"> </div>'),RC=H('<p class="hint-box svelte-m3h71q"> </p>'),PC=H('<p class="gpl-box svelte-m3h71q"> </p>'),NC=H('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),xC=H('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),LC=H('<div class="accordion svelte-m3h71q"></div>');const DC={hash:"svelte-m3h71q",code:`\r
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
  }`};function OC(t,e){Vt(e,!0),mn(t,DC);let n=ze(e,"items",7,"[]"),r=ze(e,"type",7,"single"),i=ze(e,"collapsible",7,!0),s=eo(()=>{try{const u=typeof n()=="string"?JSON.parse(n()):n();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=eo(()=>{const u=i();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=oe(hn(new Set));function l(u){const f=new Set(y(a));r()==="single"?f.has(u)?y(o)&&f.delete(u):(f.clear(),f.add(u)):f.has(u)?f.delete(u):f.add(u),L(a,f,!0)}function c(u){return y(a).has(u)}var d={get items(){return n()},set items(u="[]"){n(u),Me()},get type(){return r()},set type(u="single"){r(u),Me()},get collapsible(){return i()},set collapsible(u=!0){i(u),Me()}},h=LC();return Qr(h,21,()=>y(s),so,(u,f,m)=>{var g=xC(),w=_(g);w.__click=()=>l(m);var T=_(w),S=_(T);{var P=z=>{var M=AC(),j=_(M,!0);p(M),re(()=>x(j,y(f).icon)),N(z,M)};ve(S,z=>{y(f).icon&&z(P)})}var E=b(S,2),O=_(E,!0);p(E),p(T);var C=b(T,2);let I;var v=_(C);um(v,{size:20}),p(C),p(w);var k=b(w,2);{var A=z=>{var M=NC(),j=_(M),K=_(j,!0);p(j);var $=b(j,2);{var Y=Z=>{var he=RC(),le=_(he,!0);p(he),re(()=>x(le,y(f).hint)),N(Z,he)};ve($,Z=>{y(f).hint&&Z(Y)})}var q=b($,2);{var W=Z=>{var he=PC(),le=_(he,!0);p(he),re(()=>x(le,y(f).gpl)),N(Z,he)};ve(q,Z=>{y(f).gpl&&Z(W)})}p(M),re(()=>x(K,y(f).content)),N(z,M)};ve(k,z=>{c(m)&&z(A)})}p(g),re((z,M)=>{Le(w,"aria-expanded",z),x(O,y(f).title),I=Jr(C,1,"chevron svelte-m3h71q",null,I,M)},[()=>c(m),()=>({"rotate-180":c(m)})]),N(u,g)}),p(h),N(t,h),Bt(d)}$n(["click"]),customElements.define("sns-accordion",ie(OC,{items:{},type:{},collapsible:{}},[],[],!0));var MC=H('<h2 id="alert-title" class="alert-title svelte-1vwaezm"> </h2>'),$C=H('<p id="alert-message" class="alert-message svelte-1vwaezm"> </p>'),FC=H('<div class="alert-backdrop svelte-1vwaezm"><div role="alertdialog" aria-modal="true" aria-labelledby="alert-title" aria-describedby="alert-message"><button class="alert-close-btn svelte-1vwaezm" aria-label="닫기" type="button"><!></button> <div class="alert-icon svelte-1vwaezm"><!></div> <!> <!> <button class="alert-confirm-btn svelte-1vwaezm" type="button"> </button></div></div>');const UC={hash:"svelte-1vwaezm",code:`\r
  /* Alert 배경 (반투명 오버레이) */.alert-backdrop.svelte-1vwaezm {position:fixed;inset:0;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:9999;padding:1rem;\r
    animation: svelte-1vwaezm-fadeIn 0.2s ease-out;}\r
\r
  @keyframes svelte-1vwaezm-fadeIn {\r
    from {\r
      opacity: 0;\r
    }\r
    to {\r
      opacity: 1;\r
    }\r
  }\r
\r
  /* Alert Dialog 컨테이너 */.alert-dialog.svelte-1vwaezm {background-color:#ffffff;border-radius:1rem;box-shadow:0 20px 40px rgba(0, 0, 0, 0.2);max-width:400px;width:100%;padding:2rem;display:flex;flex-direction:column;align-items:center;gap:1rem;position:relative;\r
    animation: svelte-1vwaezm-slideUp 0.3s ease-out;}\r
\r
  @keyframes svelte-1vwaezm-slideUp {\r
    from {\r
      opacity: 0;\r
      transform: translateY(1rem);\r
    }\r
    to {\r
      opacity: 1;\r
      transform: translateY(0);\r
    }\r
  }\r
\r
  /* 닫기 버튼 (우측 상단) */.alert-close-btn.svelte-1vwaezm {position:absolute;top:1rem;right:1rem;background:none;border:none;color:#9ca3af;cursor:pointer;padding:0.25rem;display:flex;align-items:center;justify-content:center;border-radius:0.375rem;transition:all 0.2s ease;}.alert-close-btn.svelte-1vwaezm:hover {background-color:#f3f4f6;color:#6b7280;}\r
\r
  /* Alert 아이콘 영역 */.alert-icon.svelte-1vwaezm {display:flex;align-items:center;justify-content:center;width:4rem;height:4rem;border-radius:50%;margin-bottom:0.5rem;}\r
\r
  /* Success 타입 */.alert-success.svelte-1vwaezm .alert-icon:where(.svelte-1vwaezm) {background-color:#dcfce7;color:#16a34a;}.alert-success.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm) {background:linear-gradient(135deg, #059669 0%, #10b981 100%);color:#ffffff;}.alert-success.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm):hover {background:linear-gradient(135deg, #047857 0%, #059669 100%);}\r
\r
  /* Error 타입 */.alert-error.svelte-1vwaezm .alert-icon:where(.svelte-1vwaezm) {background-color:#fee2e2;color:#dc2626;}.alert-error.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm) {background:linear-gradient(135deg, #dc2626 0%, #ef4444 100%);color:#ffffff;}.alert-error.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm):hover {background:linear-gradient(135deg, #b91c1c 0%, #dc2626 100%);}\r
\r
  /* Info 타입 */.alert-info.svelte-1vwaezm .alert-icon:where(.svelte-1vwaezm) {background-color:#dbeafe;color:#2563eb;}.alert-info.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm) {background:linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);color:#ffffff;}.alert-info.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm):hover {background:linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);}\r
\r
  /* Warning 타입 */.alert-warning.svelte-1vwaezm .alert-icon:where(.svelte-1vwaezm) {background-color:#fef3c7;color:#d97706;}.alert-warning.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm) {background:linear-gradient(135deg, #d97706 0%, #f59e0b 100%);color:#ffffff;}.alert-warning.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm):hover {background:linear-gradient(135deg, #b45309 0%, #d97706 100%);}\r
\r
  /* Alert 제목 */.alert-title.svelte-1vwaezm {margin:0;font-size:1.5rem;font-weight:700;color:#111827;text-align:center;line-height:1.4;}\r
\r
  /* Alert 메시지 */.alert-message.svelte-1vwaezm {margin:0;font-size:1rem;color:#4b5563;text-align:center;line-height:1.6;white-space:pre-wrap;}\r
\r
  /* 확인 버튼 */.alert-confirm-btn.svelte-1vwaezm {width:100%;padding:0.75rem 1.5rem;border:none;border-radius:0.5rem;font-size:1rem;font-weight:600;cursor:pointer;transition:all 0.2s ease;margin-top:0.5rem;}.alert-confirm-btn.svelte-1vwaezm:active {transform:scale(0.98);}\r
\r
  /* 반응형 - 모바일 */\r
  @media (max-width: 640px) {.alert-dialog.svelte-1vwaezm {max-width:90%;padding:1.5rem;}.alert-icon.svelte-1vwaezm {width:3.5rem;height:3.5rem;}.alert-title.svelte-1vwaezm {font-size:1.25rem;}.alert-message.svelte-1vwaezm {font-size:0.9375rem;}\r
  }`};function zC(t,e){Vt(e,!0),mn(t,UC);let n=null,r=ze(e,"open",7,"false"),i=ze(e,"type",7,"info"),s=ze(e,"title",7,""),o=ze(e,"message",7,""),a=ze(e,"confirmText",7,"확인"),l=ze(e,"onconfirm",7),c=ze(e,"onclose",7);const d=eo(()=>r()==="true"||r()==="");function h(E){switch(E){case"success":return dm;case"error":return hm;case"info":return Gc;case"warning":return ym;default:return Gc}}function u(E){return`alert-${E}`}function f(E){l()&&l()();const O=new CustomEvent("confirm",{bubbles:!0,composed:!0}),C=e.$$host;C&&C.dispatchEvent(O)}function m(E){c()&&c()();const O=new CustomEvent("close",{bubbles:!0,composed:!0}),C=e.$$host;C&&C.dispatchEvent(O)}function g(E){E.target===E.currentTarget&&m()}no(()=>{if(y(d)&&n)return document.body.appendChild(n),()=>{n&&document.body.contains(n)&&document.body.removeChild(n)}});var w={get open(){return r()},set open(E="false"){r(E),Me()},get type(){return i()},set type(E="info"){i(E),Me()},get title(){return s()},set title(E=""){s(E),Me()},get message(){return o()},set message(E=""){o(E),Me()},get confirmText(){return a()},set confirmText(E="확인"){a(E),Me()},get onconfirm(){return l()},set onconfirm(E){l(E),Me()},get onclose(){return c()},set onclose(E){c(E),Me()}},T=ue(),S=te(T);{var P=E=>{var O=FC();O.__click=g;var C=_(O),I=_(C);I.__click=m;var v=_(I);Em(v,{size:20}),p(I);var k=b(I,2),A=_(k);ig(A,()=>h(i()),(q,W)=>{W(q,{size:48,strokeWidth:2})}),p(k);var z=b(k,2);{var M=q=>{var W=MC(),Z=_(W,!0);p(W),re(()=>x(Z,s())),N(q,W)};ve(z,q=>{s()&&q(M)})}var j=b(z,2);{var K=q=>{var W=$C(),Z=_(W,!0);p(W),re(()=>x(Z,o())),N(q,W)};ve(j,q=>{o()&&q(K)})}var $=b(j,2);$.__click=f;var Y=_($,!0);p($),p(C),p(O),wd(O,q=>n=q,()=>n),re(q=>{Jr(C,1,`alert-dialog ${q??""}`,"svelte-1vwaezm"),x(Y,a())},[()=>u(i())]),N(E,O)};ve(S,E=>{y(d)&&E(P)})}return N(t,T),Bt(w)}$n(["click"]),customElements.define("alert-dialog",ie(zC,{open:{},type:{},title:{},message:{},confirmText:{},onconfirm:{},onclose:{}},[],[],!1));var HC=H('<div class="uid-section svelte-1uta475"><div class="uid-label svelte-1uta475">현재 사용자 UID</div> <div class="uid-value svelte-1uta475"> </div></div> <div class="menu-divider svelte-1uta475"></div>',1),WC=H('<button class="account-button svelte-1uta475" role="menuitem"><span class="account-label svelte-1uta475"> </span> <span class="account-phone svelte-1uta475"> </span></button>'),jC=H('<div class="test-fab-menu svelte-1uta475" role="menu"><div class="menu-header svelte-1uta475"><span class="menu-title svelte-1uta475">테스트 도구</span></div> <div class="menu-divider svelte-1uta475"></div> <!> <div class="menu-section svelte-1uta475"><div class="section-title svelte-1uta475"><!> <span>테스트 계정 로그인</span></div> <div class="account-list svelte-1uta475"></div></div> <div class="menu-divider svelte-1uta475"></div> <button class="menu-button svelte-1uta475" role="menuitem"><!> <span>서버 정보 보기</span></button> <div class="menu-divider svelte-1uta475"></div> <div class="version-info svelte-1uta475"><p class="version-label svelte-1uta475">빌드 버전</p> <p class="version-value svelte-1uta475"> </p></div></div>'),VC=H('<div class="modal-overlay svelte-1uta475" role="dialog" aria-modal="true" aria-labelledby="server-info-title" tabindex="-1"><div class="modal-content svelte-1uta475"><h2 id="server-info-title" class="modal-title svelte-1uta475">서버 정보</h2> <div class="info-list svelte-1uta475"><div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">환경:</span> <span class="info-value svelte-1uta475"> </span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Svelte:</span> <span class="info-value svelte-1uta475">5.43.2</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Vite:</span> <span class="info-value svelte-1uta475">6.x</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Firebase:</span> <span class="info-value svelte-1uta475">설정됨</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">프로젝트 ID:</span> <span class="info-value info-value-small svelte-1uta475"> </span></div></div> <button class="modal-close-button svelte-1uta475">닫기</button></div></div>'),BC=H('<div class="test-fab-container svelte-1uta475"><button aria-label="테스트 도구 열기"><!></button> <!></div> <!>',1);const qC={hash:"svelte-1uta475",code:`
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

  /* reCAPTCHA 컨테이너 숨김 */`};function GC(t,e){Vt(e,!0),mn(t,qC);const n=[{label:"A",name:"apple",email:"apple@test.com"},{label:"B",name:"banana",email:"banana@test.com"},{label:"C",name:"cherry",email:"cherry@test.com"},{label:"D",name:"durian",email:"durian@test.com"},{label:"E",name:"elderberry",email:"elderberry@test.com"},{label:"F",name:"fig",email:"fig@test.com"},{label:"G",name:"grape",email:"grape@test.com"},{label:"H",name:"honeydew",email:"honeydew@test.com"}],r="12345a,*";let i=oe(!1),s=oe(!1),o=oe(!1),a=oe(null);const l=Date.now(),c=new Date(l).toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),d="withcenter-test-5";Di(()=>{console.log("TestFab 컴포넌트가 마운트되었습니다.");const v=Nl(Rt,k=>{L(a,k,!0),console.log("Auth 상태 변경:",k?`로그인됨 (UID: ${k.uid})`:"로그아웃됨")});return()=>{v()}});async function h(v){if(!y(o)){L(o,!0),console.log(`${v.name} (${v.label}) 계정으로 로그인을 시도합니다...`);try{let k;try{k=await $h(Rt,v.email,r),console.log(`${v.name} 계정으로 로그인 성공!`)}catch(A){if(A.code==="auth/user-not-found"||A.code==="auth/invalid-credential")console.log(`${v.name} 계정이 없습니다. 회원가입을 진행합니다...`),k=await Mh(Rt,v.email,r),await Pl(k.user,{displayName:v.name}),console.log(`${v.name} 계정 회원가입 및 로그인 성공!`);else throw A}alert(`${v.name} (${v.label}) 계정으로 로그인되었습니다.`),L(i,!1),window.location.href="/"}catch(k){console.error("로그인 오류:",k);let A="로그인에 실패했습니다.";k.code==="auth/invalid-email"?A="잘못된 이메일 형식입니다.":k.code==="auth/wrong-password"?A="비밀번호가 일치하지 않습니다.":k.code==="auth/too-many-requests"?A="너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.":k.code==="auth/weak-password"?A="비밀번호가 너무 약합니다.":k.code==="auth/email-already-in-use"&&(A="이미 사용 중인 이메일입니다."),alert(A+`
오류 코드: `+k.code)}finally{L(o,!1)}}}function u(){L(i,!y(i))}function f(){L(s,!y(s)),L(i,!1)}function m(v){const k=v.target;!k.closest(".test-fab-menu")&&!k.closest(".test-fab-button")&&L(i,!1)}var g=BC();Wa("click",Ma,m);var w=te(g),T=_(w);let S;T.__click=u;var P=_(T);bm(P,{size:24}),p(T);var E=b(T,2);{var O=v=>{var k=jC(),A=b(_(k),4);{var z=le=>{var ye=HC(),se=te(ye),fe=b(_(se),2),V=_(fe,!0);p(fe),p(se),It(2),re(()=>x(V,y(a).uid)),N(le,ye)};ve(A,le=>{y(a)&&le(z)})}var M=b(A,2),j=_(M),K=_(j);sr(K,{size:16}),It(2),p(j);var $=b(j,2);Qr($,21,()=>n,le=>le.label,(le,ye)=>{var se=WC();se.__click=()=>h(y(ye));var fe=_(se),V=_(fe,!0);p(fe);var ce=b(fe,2),pe=_(ce,!0);p(ce),p(se),re(()=>{se.disabled=y(o),x(V,y(ye).label),x(pe,y(ye).name)}),N(le,se)}),p($),p(M);var Y=b(M,4);Y.__click=f;var q=_(Y);vm(q,{size:16}),It(2),p(Y);var W=b(Y,4),Z=b(_(W),2),he=_(Z,!0);p(Z),p(W),p(k),re(()=>x(he,c)),N(v,k)};ve(E,v=>{y(i)&&v(O)})}p(w);var C=b(w,2);{var I=v=>{var k=VC();k.__click=f;var A=_(k);A.__click=Z=>Z.stopPropagation();var z=b(_(A),2),M=_(z),j=b(_(M),2),K=_(j,!0);p(j),p(M);var $=b(M,8),Y=b(_($),2),q=_(Y,!0);p(Y),p($),p(z);var W=b(z,2);W.__click=f,p(A),p(k),re(()=>{x(K,"production"),x(q,d)}),N(v,k)};ve(C,v=>{y(s)&&v(I)})}re(()=>{S=Jr(T,1,"test-fab-button svelte-1uta475",null,S,{loading:y(o)}),T.disabled=y(o)}),N(t,g),Bt()}$n(["click"]),customElements.define("test-fab",ie(GC,{},[],[],!1));function Pm(t,e){const{subscribe:n,set:r}=Zr({data:e??null,loading:!0,error:null}),i=be(ge,t);return rr(i,s=>{const o=s.val();r({data:o!==null?o:e??null,loading:!1,error:null}),console.log(`✅ 실시간 데이터 로드 성공: ${t}`,o!==null?o:e??null)},s=>{console.error(`❌ 실시간 데이터 로드 실패: ${t}`,s),r({data:e??null,loading:!1,error:s})}),{subscribe:n,set:r,update:s=>{throw new Error("직접 업데이트는 지원하지 않습니다. Firebase를 통해 데이터를 변경하세요.")},unsubscribe:()=>bi(i)}}const KC=Pm;async function YC(t,e){try{const n=be(ge,t);return await ks(n,e),{success:!0}}catch(n){return console.error("데이터 쓰기 오류:",n),{success:!1,error:n.message}}}async function QC(t,e){try{const n=be(ge,t);return await Tn(n,e),{success:!0}}catch(n){return console.error("데이터 업데이트 오류:",n),{success:!1,error:n.message}}}async function JC(t){try{const e=be(ge,t);return await Zp(e),{success:!0}}catch(e){return console.error("데이터 삭제 오류:",e),{success:!1,error:e.message}}}async function XC(t,e){try{const n=be(ge,t),r=ia(n);return await ks(r,e),{success:!0,key:r.key}}catch(n){return console.error("데이터 추가 오류:",n),{success:!1,error:n.message}}}async function ZC(t){try{const e=be(ge,t),n=await nr(e);return n.exists()?{success:!0,data:n.val()}:{success:!0,data:null}}catch(e){return console.error("데이터 읽기 오류:",e),{success:!1,error:e.message}}}function eT(t){const e=be(ge,`status/${t}`),n=be(ge,".info/connected");return rr(n,r=>{r.val()===!0&&(ks(e,{online:!0,lastSeen:Date.now()}),rr(be(ge,".info/connected"),i=>{i.val()||Tn(e,{online:!1,lastSeen:Date.now()})}))}),()=>{Tn(e,{online:!1,lastSeen:Date.now()}),bi(n)}}function Nm(t){if(!t)return"error.unknown";const e={"auth/invalid-email":"error.auth.invalidEmail","auth/user-disabled":"error.auth.userDisabled","auth/user-not-found":"error.auth.userNotFound","auth/wrong-password":"error.auth.wrongPassword","auth/email-already-in-use":"error.auth.emailAlreadyInUse","auth/weak-password":"error.auth.weakPassword","auth/operation-not-allowed":"error.auth.operationNotAllowed","auth/too-many-requests":"error.auth.tooManyRequests","auth/invalid-verification-code":"error.auth.invalidVerificationCode","auth/invalid-phone-number":"error.auth.invalidPhoneNumber","auth/missing-verification-code":"error.auth.missingVerificationCode","auth/session-expired":"error.auth.sessionExpired","auth/requires-recent-login":"error.auth.requiresRecentLogin","auth/credential-already-in-use":"error.auth.credentialAlreadyInUse"},n={PERMISSION_DENIED:"error.db.permissionDenied","permission-denied":"error.db.permissionDenied","network-error":"error.db.networkError",offline:"error.offline","authentication-required":"error.db.authenticationRequired",disconnected:"error.offline",unavailable:"error.db.networkError"},r={"storage/unauthorized":"error.storage.unauthorized","storage/bucket-not-found":"error.storage.bucketNotFound","storage/invalid-argument":"error.storage.invalidArgument","storage/object-not-found":"error.storage.objectNotFound","storage/retry-limit-exceeded":"error.storage.retryLimitExceeded","storage/quota-exceeded":"error.storage.quotaExceeded","storage/canceled":"error.storage.canceled"};return e[t]?e[t]:n[t]?n[t]:r[t]?r[t]:t.includes("network")||t.includes("offline")?"error.network":t.toLowerCase().includes("permission")?"error.db.permissionDenied":"error.unknown"}function sn(t,e="unknown"){if(!t)return console.error(`[${e}] 에러 객체가 없습니다.`),{key:"error.unknown",code:null,message:"No error object provided",context:e};const n=t;let r=n.code??null;if(!r&&n.message){const s=n.message.match(/\(([^)]+)\)/);s&&s[1]&&(r=s[1])}return console.error(`[${e}] Firebase 에러:`,{code:r,message:n.message,stack:n.stack,originalError:t}),{key:Nm(r),code:r,message:n.message||"Unknown error",context:e}}function tT(t,e,n,r){const i=sn(t,e),s=r(i.key);return n(s,"error"),i}async function nT(t,e,n,r,i,s){try{const o=Date.now(),a=`${t}-${o}`,l={uid:e,title:r,content:i,author:n,category:t,order:a,createdAt:o,updatedAt:o,likeCount:0,commentCount:0};s&&s.length>0&&(l.urls=s);const c=be(ge,"posts");return{success:!0,postId:(await ia(c,l)).key||void 0}}catch(o){const a=sn(o,"createPost");return{success:!1,error:a.key,errorMessage:a.message}}}function rT(t,e=10,n){try{const r=be(ge,"posts"),i=Ns(r,oa("order"),Ps(`${t}-`),Rs(`${t}-`),UE(e));return rr(i,s=>{if(s.exists()){const o=[];s.forEach(a=>{o.push({postId:a.key,...a.val()})}),o.reverse(),n(o)}else n([])}),()=>{bi(r)}}catch(r){return console.error("게시글 조회 실패:",r),n([]),()=>{}}}async function iT(t,e){try{const n=be(ge,`posts/${t}`),r=await nr(n);if(!r.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const i=r.val();if(i.commentCount&&i.commentCount>0)return{success:!1,error:"댓글이달려있어수정불가",errorMessage:"Cannot edit post with comments"};const s={...e,updatedAt:Date.now()};return await Tn(n,s),{success:!0}}catch(n){const r=sn(n,"updatePost");return{success:!1,error:r.key,errorMessage:r.message}}}async function sT(t){try{const e=be(ge,`posts/${t}`),n=await nr(e);if(!n.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const r=n.val();return r.commentCount&&r.commentCount>0?{success:!1,error:"댓글이달려있어삭제불가",errorMessage:"Cannot delete post with comments"}:(await Zp(e),{success:!0})}catch(e){const n=sn(e,"deletePost");return{success:!1,error:n.key,errorMessage:n.message}}}const oT=["community","qna","news","market"];function Zc(t){let e=t;const n=t.lastIndexOf("-");if(n!==-1&&n<t.length-1){const r=t.substring(n+1);/^\d/.test(r)&&(e=r)}return e.split(",").map(r=>parseInt(r,10))}function xm(t,e){const n=e.map((r,i)=>i===0?String(r).padStart(5,"0"):i===1?String(r).padStart(4,"0"):String(r).padStart(3,"0")).join(",");return`${t}-${n}`}function aT(){return Array(12).fill(0)}async function lT(t){const{postId:e,userId:n,content:r,urls:i}=t;try{const s=Date.now(),o=be(ge,"comments"),a=Ns(o,oa("order"),Ps(`${e}-`),Rs(`${e}-z`)),l=await nr(a);let c=0;l.exists()&&l.forEach(T=>{const S=T.val();if(S.depth===1&&S.order){const E=Zc(S.order)[0];E!==void 0&&E>c&&(c=E)}});const d=c+1,h=aT();h[0]=d;const u=xm(e,h),f={postId:e,uid:n,content:r,depth:1,order:u,parentId:null,createdAt:s,updatedAt:s};i&&i.length>0&&(f.urls=i);const g=ia(o).key;if(!g)throw new Error("Failed to generate comment ID");const w={};return w[`comments/${g}`]=f,await Tn(be(ge),w),{success:!0,commentId:g}}catch(s){const o=sn(s,"createTopLevelComment");return{success:!1,error:o.key,errorMessage:o.message}}}async function cT(t){const{parentCommentId:e,userId:n,content:r,urls:i}=t;try{const s=be(ge,`comments/${e}`),o=await nr(s);if(!o.exists())return{success:!1,error:"error.comment.parentNotFound",errorMessage:"Parent comment not found"};const a=o.val(),l=a.depth||1,c=a.order||"",d=a.postId,h=l+1;if(h>12)return{success:!1,error:"error.comment.maxDepthExceeded",errorMessage:"Maximum comment depth exceeded (12)"};const u=Zc(c),f=be(ge,"comments"),m=Ns(f,oa("order"),Ps(`${d}-`),Rs(`${d}-z`)),g=await nr(m);let w=0;g.exists()&&g.forEach(k=>{const A=k.val();if(A.parentId===e&&A.order){const M=Zc(A.order)[h-1];M!==void 0&&M>w&&(w=M)}});const T=w+1,S=[...u];S[h-1]=T;const P=xm(d,S),E=Date.now(),O={postId:d,uid:n,content:r,depth:h,order:P,parentId:e,createdAt:E,updatedAt:E};i&&i.length>0&&(O.urls=i);const I=ia(f).key;if(!I)throw new Error("Failed to generate comment ID");const v={};return v[`comments/${I}`]=O,await Tn(be(ge),v),{success:!0,commentId:I}}catch(s){const o=sn(s,"createChildComment");return{success:!1,error:o.key,errorMessage:o.message}}}function uT(t,e){try{const n=be(ge,"comments"),r=Ns(n,oa("order"),Ps(`${t}-`),Rs(`${t}-z`));return rr(r,i=>{if(i.exists()){const s=[];i.forEach(o=>{s.push({commentId:o.key,...o.val()})}),e(s)}else e([])}),()=>{bi(n)}}catch(n){return console.error("댓글 조회 실패:",n),e([]),()=>{}}}async function Lm(t,e,n){try{const r=e.startsWith("-")?e.substring(1):e,i={};return i[`likes/${t}-${r}-${n}`]=1,await Tn(be(ge),i),{success:!0}}catch(r){const i=sn(r,"addLike");return{success:!1,error:i.key,errorMessage:i.message}}}async function Dm(t,e,n){try{const r=e.startsWith("-")?e.substring(1):e,i={};return i[`likes/${t}-${r}-${n}`]=null,await Tn(be(ge),i),{success:!0}}catch(r){const i=sn(r,"removeLike");return{success:!1,error:i.key,errorMessage:i.message}}}async function Om(t,e,n){try{const r=e.startsWith("-")?e.substring(1):e,i=be(ge,`likes/${t}-${r}-${n}`);return(await nr(i)).exists()}catch(r){return console.error("좋아요 상태 확인 실패:",r),!1}}function dT(t,e,n,r){try{const i=e.startsWith("-")?e.substring(1):e,s=be(ge,`likes/${t}-${i}-${n}`);return rr(s,o=>{r(o.exists())}),()=>{bi(s)}}catch(i){return console.error("좋아요 상태 구독 실패:",i),r(!1),()=>{}}}async function Mm(t,e){try{const n=e.startsWith("-")?e.substring(1):e,r=be(ge,"likes"),i=Ns(r,WE(),Ps(`${t}-${n}-`),Rs(`${t}-${n}-`)),s=await nr(i),o=[];return s.exists()&&s.forEach(a=>{const l=a.key;if(l){const c=l.substring(`${t}-${n}-`.length);o.push({uid:c,value:a.val()})}}),o}catch(n){return console.error("좋아요 목록 조회 실패:",n),[]}}async function hT(t,e,n){try{const r=await Om(t,e,n);let i;return r?i=await Dm(t,e,n):i=await Lm(t,e,n),i.success?{success:!0,isLiked:!r}:{success:!1,isLiked:r,error:i.error,errorMessage:i.errorMessage}}catch(r){const i=sn(r,"toggleLike");return{success:!1,isLiked:!1,error:i.key,errorMessage:i.message}}}async function fT(t){return Mm("post",t)}const pT=["M","F"];console.log("SNS Web Components 로드됨 ✅"),G.POST_CATEGORIES=oT,G.USER_GENDERS=pT,G.addLike=Lm,G.auth=Rt,G.checkLikeStatus=Om,G.createChildComment=cT,G.createPost=nT,G.createRealtimeStore=Pm,G.createTopLevelComment=lT,G.database=ge,G.deleteData=JC,G.deletePost=sT,G.getLikes=Mm,G.getPostLikes=fT,G.handleFirebaseError=sn,G.listenToComments=uT,G.listenToLikeStatus=dT,G.listenToPosts=rT,G.loading=Cm,G.logAndShowError=tT,G.mapFirebaseErrorCode=Nm,G.pushData=XC,G.readData=ZC,G.removeLike=Dm,G.rtdb=KC,G.setupPresence=eT,G.signIn=ZI,G.signOut=Tm,G.signUp=eC,G.storage=AI,G.toggleLike=hT,G.updateData=QC,G.updatePost=iT,G.user=ua,G.writeData=YC,Object.defineProperty(G,Symbol.toStringTag,{value:"Module"})}));
