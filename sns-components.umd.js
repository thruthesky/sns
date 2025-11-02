(function(_e,rr){typeof exports=="object"&&typeof module<"u"?rr(exports):typeof define=="function"&&define.amd?define(["exports"],rr):(_e=typeof globalThis<"u"?globalThis:_e||self,rr(_e.SNSComponents={}))})(this,(function(_e){"use strict";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add("5");const or=1,ar=2,nc=4,tp=8,np=16,ip=1,sp=2,ic=4,rp=8,op=16,ap=1,lp=2,sc="[",lr="[!",Po="]",hi={},Ce=Symbol(),cp="http://www.w3.org/1999/xhtml",up="http://www.w3.org/2000/svg",hp="@attach",rc=!1;var xo=Array.isArray,dp=Array.prototype.indexOf,Oo=Array.from,cr=Object.keys,Zi=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,oc=Object.getOwnPropertyDescriptors,fp=Object.prototype,pp=Array.prototype,Do=Object.getPrototypeOf,ac=Object.isExtensible;function es(t){return typeof t=="function"}const hn=()=>{};function _p(t){return t()}function ur(t){for(var e=0;e<t.length;e++)t[e]()}function lc(){var t,e,n=new Promise((i,s)=>{t=i,e=s});return{promise:n,resolve:t,reject:e}}function mp(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const i of t)if(n.push(i),n.length===e)break;return n}const Ne=2,Mo=4,hr=8,Bt=16,Vt=32,dn=64,dr=128,Pe=1024,Be=2048,qt=4096,Qe=8192,Gt=16384,Lo=32768,$n=65536,cc=1<<17,gp=1<<18,Fn=1<<19,uc=1<<20,it=256,fr=512,pr=32768,$o=1<<21,Fo=1<<22,Un=1<<23,Pt=Symbol("$state"),Uo=Symbol("legacy props"),vp=Symbol(""),di=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},yp=1,jo=3,fi=8;function hc(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function bp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function wp(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ep(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ip(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Cp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Tp(){throw new Error("https://svelte.dev/e/hydration_failed")}function Sp(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function kp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ap(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Rp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Np(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function _r(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Pp(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function xp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let M=!1;function Je(t){M=t}let H;function Te(t){if(t===null)throw _r(),hi;return H=t}function jn(){return Te(Dt(H))}function _(t){if(M){if(Dt(H)!==null)throw _r(),hi;H=t}}function Op(t=1){if(M){for(var e=t,n=H;e--;)n=Dt(n);H=n}}function mr(t=!0){for(var e=0,n=H;;){if(n.nodeType===fi){var i=n.data;if(i===Po){if(e===0)return n;e-=1}else(i===sc||i===lr)&&(e+=1)}var s=Dt(n);t&&n.remove(),n=s}}function dc(t){if(!t||t.nodeType!==fi)throw _r(),hi;return t.data}function fc(t){return t===this.v}function pc(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function _c(t){return!pc(t,this.v)}let pi=!1,Dp=!1;function Mp(){pi=!0}let ae=null;function _i(t){ae=t}function fn(t,e=!1,n){ae={p:ae,i:!1,c:null,e:null,s:t,x:null,l:pi&&!e?{s:null,u:null,$:[]}:null}}function pn(t){var e=ae,n=e.e;if(n!==null){e.e=null;for(var i of n)Fc(i)}return t!==void 0&&(e.x=t),e.i=!0,ae=e.p,t??{}}function ts(){return!pi||ae!==null&&ae.l===null}let Wn=[];function mc(){var t=Wn;Wn=[],ur(t)}function _n(t){if(Wn.length===0&&!ns){var e=Wn;queueMicrotask(()=>{e===Wn&&mc()})}Wn.push(t)}function Lp(){for(;Wn.length>0;)mc()}function gc(t){var e=$;if(e===null)return V.f|=Un,t;if((e.f&Lo)===0){if((e.f&dr)===0)throw t;e.b.error(t)}else mi(t,e)}function mi(t,e){for(;e!==null;){if((e.f&dr)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const gr=new Set;let te=null,vr=null,gt=null,xt=[],yr=null,Wo=!1,ns=!1;class vt{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#n=0;#i=0;#l=null;#o=[];#a=[];skipped_effects=new Set;is_fork=!1;process(e){xt=[],vr=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of e)this.#s(i,n);this.is_fork||this.#c(),this.#i>0||this.is_fork?(this.#r(n.effects),this.#r(n.render_effects),this.#r(n.block_effects)):(vr=this,te=null,yc(n.render_effects),yc(n.effects),vr=null,this.#l?.resolve()),gt=null}#s(e,n){e.f^=Pe;for(var i=e.first;i!==null;){var s=i.f,r=(s&(Vt|dn))!==0,o=r&&(s&Pe)!==0,a=o||(s&Qe)!==0||this.skipped_effects.has(i);if((i.f&dr)!==0&&i.b?.is_pending()&&(n={parent:n,effect:i,effects:[],render_effects:[],block_effects:[]}),!a&&i.fn!==null){r?i.f^=Pe:(s&Mo)!==0?n.effects.push(i):as(i)&&((i.f&Bt)!==0&&n.block_effects.push(i),ls(i));var l=i.first;if(l!==null){i=l;continue}}var c=i.parent;for(i=i.next;i===null&&c!==null;)c===n.effect&&(this.#r(n.effects),this.#r(n.render_effects),this.#r(n.block_effects),n=n.parent),i=c.next,c=c.parent}}#r(e){for(const n of e)((n.f&Be)!==0?this.#o:this.#a).push(n),xe(n,Pe)}capture(e,n){this.previous.has(e)||this.previous.set(e,n),this.current.set(e,e.v),gt?.set(e,e.v)}activate(){te=this}deactivate(){te=null,gt=null}flush(){if(this.activate(),xt.length>0){if(vc(),te!==null&&te!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#i===0){for(const e of this.#t)e();this.#t.clear()}this.#n===0&&this.#u()}#u(){if(gr.size>1){this.previous.clear();var e=gt,n=!0,i={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of gr){if(s===this){n=!1;continue}const r=[];for(const[a,l]of this.current){if(s.current.has(a))if(n&&l!==s.current.get(a))s.current.set(a,l);else continue;r.push(a)}if(r.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of r)bc(c,o,a,l);if(xt.length>0){te=s,s.apply();for(const c of xt)s.#s(c,i);xt=[],s.deactivate()}}}te=null,gt=e}this.committed=!0,gr.delete(this)}increment(e){this.#n+=1,e&&(this.#i+=1)}decrement(e){this.#n-=1,e&&(this.#i-=1),this.revive()}revive(){for(const e of this.#o)xe(e,Be),zn(e);for(const e of this.#a)xe(e,qt),zn(e);this.#o=[],this.#a=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=lc()).promise}static ensure(){if(te===null){const e=te=new vt;gr.add(te),ns||vt.enqueue(()=>{te===e&&e.flush()})}return te}static enqueue(e){_n(e)}apply(){}}function Xe(t){var e=ns;ns=!0;try{for(var n;;){if(Lp(),xt.length===0&&(te?.flush(),xt.length===0))return yr=null,n;vc()}}finally{ns=e}}function vc(){var t=bi;Wo=!0;try{var e=0;for(Vc(!0);xt.length>0;){var n=vt.ensure();if(e++>1e3){var i,s;$p()}n.process(xt),mn.clear()}}finally{Wo=!1,Vc(t),yr=null}}function $p(){try{Cp()}catch(t){mi(t,yr)}}let Kt=null;function yc(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var i=t[n++];if((i.f&(Gt|Qe))===0&&as(i)&&(Kt=new Set,ls(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null&&i.ac===null?Wc(i):i.fn=null),Kt?.size>0)){mn.clear();for(const s of Kt){if((s.f&(Gt|Qe))!==0)continue;const r=[s];let o=s.parent;for(;o!==null;)Kt.has(o)&&(Kt.delete(o),r.push(o)),o=o.parent;for(let a=r.length-1;a>=0;a--){const l=r[a];(l.f&(Gt|Qe))===0&&ls(l)}}Kt.clear()}}Kt=null}}function bc(t,e,n,i){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const s of t.reactions){const r=s.f;(r&Ne)!==0?bc(s,e,n,i):(r&(Fo|Bt))!==0&&(r&Be)===0&&wc(s,e,i)&&(xe(s,Be),zn(s))}}function wc(t,e,n){const i=n.get(t);if(i!==void 0)return i;if(t.deps!==null)for(const s of t.deps){if(e.includes(s))return!0;if((s.f&Ne)!==0&&wc(s,e,n))return n.set(s,!0),!0}return n.set(t,!1),!1}function zn(t){for(var e=yr=t;e.parent!==null;){e=e.parent;var n=e.f;if(Wo&&e===$&&(n&Bt)!==0)return;if((n&(dn|Vt))!==0){if((n&Pe)===0)return;e.f^=Pe}}xt.push(e)}function Fp(t){let e=0,n=gn(0),i;return()=>{Qp()&&(E(n),Ir(()=>(e===0&&(i=Mt(()=>t(()=>ss(n)))),e+=1,()=>{_n(()=>{e-=1,e===0&&(i?.(),i=void 0,ss(n))})})))}}var Up=$n|Fn|dr;function jp(t,e,n){new Wp(t,e,n)}class Wp{parent;#t=!1;#e;#n=M?H:null;#i;#l;#o;#a=null;#s=null;#r=null;#c=null;#u=null;#f=0;#h=0;#p=!1;#d=null;#y=Fp(()=>(this.#d=gn(this.#f),()=>{this.#d=null}));constructor(e,n,i){this.#e=e,this.#i=n,this.#l=i,this.parent=$.b,this.#t=!!this.#i.pending,this.#o=vi(()=>{if($.b=this,M){const r=this.#n;jn(),r.nodeType===fi&&r.data===lr?this.#w():this.#b()}else{var s=this.#g();try{this.#a=Ve(()=>i(s))}catch(r){this.error(r)}this.#h>0?this.#m():this.#t=!1}return()=>{this.#u?.remove()}},Up),M&&(this.#e=H)}#b(){try{this.#a=Ve(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#w(){const e=this.#i.pending;e&&(this.#s=Ve(()=>e(this.#e)),vt.enqueue(()=>{var n=this.#g();this.#a=this.#_(()=>(vt.ensure(),Ve(()=>this.#l(n)))),this.#h>0?this.#m():(yi(this.#s,()=>{this.#s=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=st(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#_(e){var n=$,i=V,s=ae;rt(this.#o),qe(this.#o),_i(this.#o.ctx);try{return e()}catch(r){return gc(r),null}finally{rt(n),qe(i),_i(s)}}#m(){const e=this.#i.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Bc(this.#a,this.#c)),this.#s===null&&(this.#s=Ve(()=>e(this.#e)))}#v(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#v(e);return}this.#h+=e,this.#h===0&&(this.#t=!1,this.#s&&yi(this.#s,()=>{this.#s=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#v(e),this.#f+=e,this.#d&&gi(this.#d,this.#f)}get_effect_pending(){return this.#y(),E(this.#d)}error(e){var n=this.#i.onerror;let i=this.#i.failed;if(this.#p||!n&&!i)throw e;this.#a&&(ge(this.#a),this.#a=null),this.#s&&(ge(this.#s),this.#s=null),this.#r&&(ge(this.#r),this.#r=null),M&&(Te(this.#n),Op(),Te(mr()));var s=!1,r=!1;const o=()=>{if(s){xp();return}s=!0,r&&Np(),vt.ensure(),this.#f=0,this.#r!==null&&yi(this.#r,()=>{this.#r=null}),this.#t=this.has_pending_snippet(),this.#a=this.#_(()=>(this.#p=!1,Ve(()=>this.#l(this.#e)))),this.#h>0?this.#m():this.#t=!1};var a=V;try{qe(null),r=!0,n?.(e,o),r=!1}catch(l){mi(l,this.#o&&this.#o.parent)}finally{qe(a)}i&&_n(()=>{this.#r=this.#_(()=>{vt.ensure(),this.#p=!0;try{return Ve(()=>{i(this.#e,()=>e,()=>o)})}catch(l){return mi(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Ec(t,e,n,i){const s=ts()?is:Ho;if(n.length===0&&t.length===0){i(e.map(s));return}var r=te,o=$,a=zp();function l(){Promise.all(n.map(c=>Hp(c))).then(c=>{a();try{i([...e.map(s),...c])}catch(h){(o.f&Gt)===0&&mi(h,o)}r?.deactivate(),br()}).catch(c=>{mi(c,o)})}t.length>0?Promise.all(t).then(()=>{a();try{return l()}finally{r?.deactivate(),br()}}):l()}function zp(){var t=$,e=V,n=ae,i=te;return function(r=!0){rt(t),qe(e),_i(n),r&&i?.activate()}}function br(){rt(null),qe(null),_i(null)}function is(t){var e=Ne|Be,n=V!==null&&(V.f&Ne)!==0?V:null;return $===null||n!==null&&(n.f&it)!==0?e|=it:$.f|=Fn,{ctx:ae,deps:null,effects:null,equals:fc,f:e,fn:t,reactions:null,rv:0,v:Ce,wv:0,parent:n??$,ac:null}}function Hp(t,e){let n=$;n===null&&bp();var i=n.b,s=void 0,r=gn(Ce),o=!V,a=new Map;return e_(()=>{var l=lc();s=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===te&&c.committed&&c.deactivate(),br()})}catch(u){l.reject(u),br()}var c=te;if(o){var h=!i.is_pending();i.update_pending_count(1),c.increment(h),a.get(c)?.reject(di),a.delete(c),a.set(c,l)}const d=(u,f=void 0)=>{if(c.activate(),f)f!==di&&(r.f|=Un,gi(r,f));else{(r.f&Un)!==0&&(r.f^=Un),gi(r,u);for(const[p,g]of a){if(a.delete(p),p===c)break;g.reject(di)}}o&&(i.update_pending_count(-1),c.decrement(h))};l.promise.then(d,u=>d(null,u||"unknown"))}),rs(()=>{for(const l of a.values())l.reject(di)}),new Promise(l=>{function c(h){function d(){h===s?l(r):c(s)}h.then(d,d)}c(s)})}function zo(t){const e=is(t);return Gc(e),e}function Ho(t){const e=is(t);return e.equals=_c,e}function Ic(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)ge(e[n])}}function Bp(t){for(var e=t.parent;e!==null;){if((e.f&Ne)===0)return e;e=e.parent}return null}function Bo(t){var e,n=$;rt(Bp(t));try{t.f&=~pr,Ic(t),e=Xc(t)}finally{rt(n)}return e}function Cc(t){var e=Bo(t);if(t.equals(e)||(t.v=e,t.wv=Qc()),!Hn)if(gt!==null)gt.set(t,t.v);else{var n=(vn||(t.f&it)!==0)&&t.deps!==null?qt:Pe;xe(t,n)}}let Vo=new Set;const mn=new Map;let Tc=!1;function gn(t,e){var n={f:0,v:t,reactions:null,equals:fc,rv:0,wv:0};return n}function he(t,e){const n=gn(t);return Gc(n),n}function qo(t,e=!1,n=!0){const i=gn(t);return e||(i.equals=_c),pi&&n&&ae!==null&&ae.l!==null&&(ae.l.s??=[]).push(i),i}function B(t,e,n=!1){V!==null&&(!bt||(V.f&cc)!==0)&&ts()&&(V.f&(Ne|Bt|Fo|cc))!==0&&!Qt?.includes(t)&&Rp();let i=n?Yt(e):e;return gi(t,i)}function gi(t,e){if(!t.equals(e)){var n=t.v;Hn?mn.set(t,e):mn.set(t,n),t.v=e;var i=vt.ensure();i.capture(t,n),(t.f&Ne)!==0&&((t.f&Be)!==0&&Bo(t),xe(t,(t.f&it)===0?Pe:qt)),t.wv=Qc(),kc(t,Be),ts()&&$!==null&&($.f&Pe)!==0&&($.f&(Vt|dn))===0&&(ot===null?i_([t]):ot.push(t)),!i.is_fork&&Vo.size>0&&!Tc&&Vp()}return e}function Vp(){Tc=!1;const t=Array.from(Vo);for(const e of t)(e.f&Pe)!==0&&xe(e,qt),as(e)&&ls(e);Vo.clear()}function Sc(t,e=1){var n=E(t),i=e===1?n++:n--;return B(t,n),i}function ss(t){B(t,t.v+1)}function kc(t,e){var n=t.reactions;if(n!==null)for(var i=ts(),s=n.length,r=0;r<s;r++){var o=n[r],a=o.f;if(!(!i&&o===$)){var l=(a&Be)===0;l&&xe(o,e),(a&Ne)!==0?(a&pr)===0&&(o.f|=pr,kc(o,qt)):l&&((a&Bt)!==0&&Kt!==null&&Kt.add(o),zn(o))}}}function Yt(t){if(typeof t!="object"||t===null||Pt in t)return t;const e=Do(t);if(e!==fp&&e!==pp)return t;var n=new Map,i=xo(t),s=he(0),r=Bn,o=a=>{if(Bn===r)return a();var l=V,c=Bn;qe(null),Yc(r);var h=a();return qe(l),Yc(c),h};return i&&n.set("length",he(t.length)),new Proxy(t,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&kp();var h=n.get(l);return h===void 0?h=o(()=>{var d=he(c.value);return n.set(l,d),d}):B(h,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const h=o(()=>he(Ce));n.set(l,h),ss(s)}}else B(c,Ce),ss(s);return!0},get(a,l,c){if(l===Pt)return t;var h=n.get(l),d=l in a;if(h===void 0&&(!d||Ht(a,l)?.writable)&&(h=o(()=>{var f=Yt(d?a[l]:Ce),p=he(f);return p}),n.set(l,h)),h!==void 0){var u=E(h);return u===Ce?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var h=n.get(l);h&&(c.value=E(h))}else if(c===void 0){var d=n.get(l),u=d?.v;if(d!==void 0&&u!==Ce)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===Pt)return!0;var c=n.get(l),h=c!==void 0&&c.v!==Ce||Reflect.has(a,l);if(c!==void 0||$!==null&&(!h||Ht(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=h?Yt(a[l]):Ce,f=he(u);return f}),n.set(l,c));var d=E(c);if(d===Ce)return!1}return h},set(a,l,c,h){var d=n.get(l),u=l in a;if(i&&l==="length")for(var f=c;f<d.v;f+=1){var p=n.get(f+"");p!==void 0?B(p,Ce):f in a&&(p=o(()=>he(Ce)),n.set(f+"",p))}if(d===void 0)(!u||Ht(a,l)?.writable)&&(d=o(()=>he(void 0)),B(d,Yt(c)),n.set(l,d));else{u=d.v!==Ce;var g=o(()=>Yt(c));B(d,g)}var b=Reflect.getOwnPropertyDescriptor(a,l);if(b?.set&&b.set.call(h,c),!u){if(i&&typeof l=="string"){var T=n.get("length"),C=Number(l);Number.isInteger(C)&&C>=T.v&&B(T,C+1)}ss(s)}return!0},ownKeys(a){E(s);var l=Reflect.ownKeys(a).filter(d=>{var u=n.get(d);return u===void 0||u.v!==Ce});for(var[c,h]of n)h.v!==Ce&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Ap()}})}function Ac(t){try{if(t!==null&&typeof t=="object"&&Pt in t)return t[Pt]}catch{}return t}function qp(t,e){return Object.is(Ac(t),Ac(e))}var Rc,Nc,Pc,xc;function Go(){if(Rc===void 0){Rc=window,Nc=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Pc=Ht(e,"firstChild").get,xc=Ht(e,"nextSibling").get,ac(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),ac(n)&&(n.__t=void 0)}}function st(t=""){return document.createTextNode(t)}function Ot(t){return Pc.call(t)}function Dt(t){return xc.call(t)}function m(t,e){if(!M)return Ot(t);var n=Ot(H);if(n===null)n=H.appendChild(st());else if(e&&n.nodeType!==jo){var i=st();return n?.before(i),Te(i),i}return Te(n),n}function me(t,e=!1){if(!M){var n=Ot(t);return n instanceof Comment&&n.data===""?Dt(n):n}if(e&&H?.nodeType!==jo){var i=st();return H?.before(i),Te(i),i}return H}function y(t,e=1,n=!1){let i=M?H:t;for(var s;e--;)s=i,i=Dt(i);if(!M)return i;if(n&&i?.nodeType!==jo){var r=st();return i===null?s?.after(r):i.before(r),Te(r),r}return Te(i),i}function Oc(t){t.textContent=""}function Dc(){return!1}function Gp(t,e){if(e){const n=document.body;t.autofocus=!0,_n(()=>{document.activeElement===n&&t.focus()})}}let Mc=!1;function Lc(){Mc||(Mc=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function wr(t){var e=V,n=$;qe(null),rt(null);try{return t()}finally{qe(e),rt(n)}}function Kp(t,e,n,i=n){t.addEventListener(e,()=>wr(n));const s=t.__on_r;s?t.__on_r=()=>{s(),i(!0)}:t.__on_r=()=>i(!0),Lc()}function $c(t){$===null&&V===null&&Ip(),V!==null&&(V.f&it)!==0&&$===null&&Ep(),Hn&&wp()}function Yp(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function yt(t,e,n,i=!0){var s=$;s!==null&&(s.f&Qe)!==0&&(t|=Qe);var r={ctx:ae,deps:null,nodes_start:null,nodes_end:null,f:t|Be,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{ls(r),r.f|=Lo}catch(l){throw ge(r),l}else e!==null&&zn(r);if(i){var o=r;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Fn)===0&&(o=o.first,(t&Bt)!==0&&(t&$n)!==0&&o!==null&&(o.f|=$n)),o!==null&&(o.parent=s,s!==null&&Yp(o,s),V!==null&&(V.f&Ne)!==0&&(t&dn)===0)){var a=V;(a.effects??=[]).push(o)}}return r}function Qp(){return V!==null&&!bt}function rs(t){const e=yt(hr,null,!1);return xe(e,Pe),e.teardown=t,e}function Ko(t){$c();var e=$.f,n=!V&&(e&Vt)!==0&&(e&Lo)===0;if(n){var i=ae;(i.e??=[]).push(t)}else return Fc(t)}function Fc(t){return yt(Mo|uc,t,!1)}function Jp(t){return $c(),yt(hr|uc,t,!0)}function Xp(t){vt.ensure();const e=yt(dn|Fn,t,!0);return()=>{ge(e)}}function Zp(t){vt.ensure();const e=yt(dn|Fn,t,!0);return(n={})=>new Promise(i=>{n.outro?yi(e,()=>{ge(e),i(void 0)}):(ge(e),i(void 0))})}function Er(t){return yt(Mo,t,!1)}function e_(t){return yt(Fo|Fn,t,!0)}function Ir(t,e=0){return yt(hr|e,t,!0)}function ne(t,e=[],n=[],i=[]){Ec(i,e,n,s=>{yt(hr,()=>t(...s.map(E)),!0)})}function vi(t,e=0){var n=yt(Bt|e,t,!0);return n}function Ve(t,e=!0){return yt(Vt|Fn,t,!0,e)}function Uc(t){var e=t.teardown;if(e!==null){const n=Hn,i=V;qc(!0),qe(null);try{e.call(null)}finally{qc(n),qe(i)}}}function jc(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const s=n.ac;s!==null&&wr(()=>{s.abort(di)});var i=n.next;(n.f&dn)!==0?n.parent=null:ge(n,e),n=i}}function t_(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&Vt)===0&&ge(e),e=n}}function ge(t,e=!0){var n=!1;(e||(t.f&gp)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(n_(t.nodes_start,t.nodes_end),n=!0),jc(t,e&&!n),Cr(t,0),xe(t,Gt);var i=t.transitions;if(i!==null)for(const r of i)r.stop();Uc(t);var s=t.parent;s!==null&&s.first!==null&&Wc(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function n_(t,e){for(;t!==null;){var n=t===e?null:Dt(t);t.remove(),t=n}}function Wc(t){var e=t.parent,n=t.prev,i=t.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),e!==null&&(e.first===t&&(e.first=i),e.last===t&&(e.last=n))}function yi(t,e,n=!0){var i=[];Yo(t,i,!0),zc(i,()=>{n&&ge(t),e&&e()})}function zc(t,e){var n=t.length;if(n>0){var i=()=>--n||e();for(var s of t)s.out(i)}else e()}function Yo(t,e,n){if((t.f&Qe)===0){if(t.f^=Qe,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var i=t.first;i!==null;){var s=i.next,r=(i.f&$n)!==0||(i.f&Vt)!==0&&(t.f&Bt)!==0;Yo(i,e,r?n:!1),i=s}}}function Qo(t){Hc(t,!0)}function Hc(t,e){if((t.f&Qe)!==0){t.f^=Qe,(t.f&Pe)===0&&(xe(t,Be),zn(t));for(var n=t.first;n!==null;){var i=n.next,s=(n.f&$n)!==0||(n.f&Vt)!==0;Hc(n,s?e:!1),n=i}if(t.transitions!==null)for(const r of t.transitions)(r.is_global||e)&&r.in()}}function Bc(t,e){for(var n=t.nodes_start,i=t.nodes_end;n!==null;){var s=n===i?null:Dt(n);e.append(n),n=s}}let bi=!1;function Vc(t){bi=t}let Hn=!1;function qc(t){Hn=t}let V=null,bt=!1;function qe(t){V=t}let $=null;function rt(t){$=t}let Qt=null;function Gc(t){V!==null&&(Qt===null?Qt=[t]:Qt.push(t))}let Le=null,Ze=0,ot=null;function i_(t){ot=t}let Kc=1,os=0,Bn=os;function Yc(t){Bn=t}let vn=!1;function Qc(){return++Kc}function as(t){var e=t.f;if((e&Be)!==0)return!0;if((e&qt)!==0){var n=t.deps,i=(e&it)!==0;if(e&Ne&&(t.f&=~pr),n!==null){var s,r,o=(e&fr)!==0,a=i&&$!==null&&!vn,l=n.length;if((o||a)&&($===null||($.f&Gt)===0)){var c=t,h=c.parent;for(s=0;s<l;s++)r=n[s],(o||!r?.reactions?.includes(c))&&(r.reactions??=[]).push(c);o&&(c.f^=fr),a&&h!==null&&(h.f&it)===0&&(c.f^=it)}for(s=0;s<l;s++)if(r=n[s],as(r)&&Cc(r),r.wv>t.wv)return!0}(!i||$!==null&&!vn)&&xe(t,Pe)}return!1}function Jc(t,e,n=!0){var i=t.reactions;if(i!==null&&!Qt?.includes(t))for(var s=0;s<i.length;s++){var r=i[s];(r.f&Ne)!==0?Jc(r,e,!1):e===r&&(n?xe(r,Be):(r.f&Pe)!==0&&xe(r,qt),zn(r))}}function Xc(t){var e=Le,n=Ze,i=ot,s=V,r=vn,o=Qt,a=ae,l=bt,c=Bn,h=t.f;Le=null,Ze=0,ot=null,vn=(h&it)!==0&&(bt||!bi||V===null),V=(h&(Vt|dn))===0?t:null,Qt=null,_i(t.ctx),bt=!1,Bn=++os,t.ac!==null&&(wr(()=>{t.ac.abort(di)}),t.ac=null);try{t.f|=$o;var d=t.fn,u=d(),f=t.deps;if(Le!==null){var p;if(Cr(t,Ze),f!==null&&Ze>0)for(f.length=Ze+Le.length,p=0;p<Le.length;p++)f[Ze+p]=Le[p];else t.deps=f=Le;if(!vn||(h&Ne)!==0&&t.reactions!==null)for(p=Ze;p<f.length;p++)(f[p].reactions??=[]).push(t)}else f!==null&&Ze<f.length&&(Cr(t,Ze),f.length=Ze);if(ts()&&ot!==null&&!bt&&f!==null&&(t.f&(Ne|qt|Be))===0)for(p=0;p<ot.length;p++)Jc(ot[p],t);return s!==null&&s!==t&&(os++,ot!==null&&(i===null?i=ot:i.push(...ot))),(t.f&Un)!==0&&(t.f^=Un),u}catch(g){return gc(g)}finally{t.f^=$o,Le=e,Ze=n,ot=i,V=s,vn=r,Qt=o,_i(a),bt=l,Bn=c}}function s_(t,e){let n=e.reactions;if(n!==null){var i=dp.call(n,t);if(i!==-1){var s=n.length-1;s===0?n=e.reactions=null:(n[i]=n[s],n.pop())}}n===null&&(e.f&Ne)!==0&&(Le===null||!Le.includes(e))&&(xe(e,qt),(e.f&(it|fr))===0&&(e.f^=fr),Ic(e),Cr(e,0))}function Cr(t,e){var n=t.deps;if(n!==null)for(var i=e;i<n.length;i++)s_(t,n[i])}function ls(t){var e=t.f;if((e&Gt)===0){xe(t,Pe);var n=$,i=bi;$=t,bi=!0;try{(e&Bt)!==0?t_(t):jc(t),Uc(t);var s=Xc(t);t.teardown=typeof s=="function"?s:null,t.wv=Kc;var r;rc&&Dp&&(t.f&Be)!==0&&t.deps}finally{bi=i,$=n}}}async function r_(){await Promise.resolve(),Xe()}function E(t){var e=t.f,n=(e&Ne)!==0;if(V!==null&&!bt){var i=$!==null&&($.f&Gt)!==0;if(!i&&!Qt?.includes(t)){var s=V.deps;if((V.f&$o)!==0)t.rv<os&&(t.rv=os,Le===null&&s!==null&&s[Ze]===t?Ze++:Le===null?Le=[t]:(!vn||!Le.includes(t))&&Le.push(t));else{(V.deps??=[]).push(t);var r=t.reactions;r===null?t.reactions=[V]:r.includes(V)||r.push(V)}}}else if(n&&t.deps===null&&t.effects===null){var o=t,a=o.parent;a!==null&&(a.f&it)===0&&(o.f^=it)}if(Hn){if(mn.has(t))return mn.get(t);if(n){o=t;var l=o.v;return((o.f&Pe)===0&&o.reactions!==null||Zc(o))&&(l=Bo(o)),mn.set(o,l),l}}else if(n){if(o=t,gt?.has(o))return gt.get(o);as(o)&&Cc(o)}if(gt?.has(t))return gt.get(t);if((t.f&Un)!==0)throw t.v;return t.v}function Zc(t){if(t.v===Ce)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(mn.has(e)||(e.f&Ne)!==0&&Zc(e))return!0;return!1}function Mt(t){var e=bt;try{return bt=!0,t()}finally{bt=e}}const o_=-7169;function xe(t,e){t.f=t.f&o_|e}function wi(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Pt in t)Jo(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Pt in n&&Jo(n)}}}function Jo(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let i in t)try{Jo(t[i],e)}catch{}const n=Do(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=oc(n);for(let s in i){const r=i[s].get;if(r)try{r.call(t)}catch{}}}}}const eu=new Set,Xo=new Set;function tu(t,e,n,i={}){function s(r){if(i.capture||us.call(e,r),!r.cancelBubble)return wr(()=>n?.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?_n(()=>{e.addEventListener(t,s,i)}):e.addEventListener(t,s,i),s}function a_(t,e,n,i,s){var r={capture:i,passive:s},o=tu(t,e,n,r);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&rs(()=>{e.removeEventListener(t,o,r)})}function cs(t){for(var e=0;e<t.length;e++)eu.add(t[e]);for(var n of Xo)n(t)}let nu=null;function us(t){var e=this,n=e.ownerDocument,i=t.type,s=t.composedPath?.()||[],r=s[0]||t.target;nu=t;var o=0,a=nu===t&&t.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=s.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(r=s[o]||t.target,r!==e){Zi(t,"currentTarget",{configurable:!0,get(){return r||n}});var h=V,d=$;qe(null),rt(null);try{for(var u,f=[];r!==null;){var p=r.assignedSlot||r.parentNode||r.host||null;try{var g=r["__"+i];g!=null&&(!r.disabled||t.target===r)&&g.call(r,t)}catch(b){u?f.push(b):u=b}if(t.cancelBubble||p===e||p===null)break;r=p}if(u){for(let b of f)queueMicrotask(()=>{throw b});throw u}}finally{t.__root=e,delete t.currentTarget,qe(h),rt(d)}}}function iu(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Jt(t,e){var n=$;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function Y(t,e){var n=(e&ap)!==0,i=(e&lp)!==0,s,r=!t.startsWith("<!>");return()=>{if(M)return Jt(H,null),H;s===void 0&&(s=iu(r?t:"<!>"+t),n||(s=Ot(s)));var o=i||Nc?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=Ot(o),l=o.lastChild;Jt(a,l)}else Jt(o,o);return o}}function l_(t,e,n="svg"){var i=!t.startsWith("<!>"),s=`<${n}>${i?t:"<!>"+t}</${n}>`,r;return()=>{if(M)return Jt(H,null),H;if(!r){var o=iu(s),a=Ot(o);r=Ot(a)}var l=r.cloneNode(!0);return Jt(l,l),l}}function c_(t,e){return l_(t,e,"svg")}function Oe(){if(M)return Jt(H,null),H;var t=document.createDocumentFragment(),e=document.createComment(""),n=st();return t.append(e,n),Jt(e,n),t}function x(t,e){if(M){$.nodes_end=H,jn();return}t!==null&&t.before(e)}function u_(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const h_=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function d_(t){return h_.includes(t)}const f_={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function p_(t){return t=t.toLowerCase(),f_[t]??t}const __=["touchstart","touchmove"];function m_(t){return __.includes(t)}const g_=["textarea","script","style","title"];function v_(t){return g_.includes(t)}function R(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function su(t,e){return ru(t,e)}function y_(t,e){Go(),e.intro=e.intro??!1;const n=e.target,i=M,s=H;try{for(var r=Ot(n);r&&(r.nodeType!==fi||r.data!==sc);)r=Dt(r);if(!r)throw hi;Je(!0),Te(r);const o=ru(t,{...e,anchor:r});return Je(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==hi&&console.warn("Failed to hydrate: ",o),e.recover===!1&&Tp(),Go(),Oc(n),Je(!1),su(t,e)}finally{Je(i),Te(s)}}const Ei=new Map;function ru(t,{target:e,anchor:n,props:i={},events:s,context:r,intro:o=!0}){Go();var a=new Set,l=d=>{for(var u=0;u<d.length;u++){var f=d[u];if(!a.has(f)){a.add(f);var p=m_(f);e.addEventListener(f,us,{passive:p});var g=Ei.get(f);g===void 0?(document.addEventListener(f,us,{passive:p}),Ei.set(f,1)):Ei.set(f,g+1)}}};l(Oo(eu)),Xo.add(l);var c=void 0,h=Zp(()=>{var d=n??e.appendChild(st());return jp(d,{pending:()=>{}},u=>{if(r){fn({});var f=ae;f.c=r}if(s&&(i.$$events=s),M&&Jt(u,null),c=t(u,i)||{},M&&($.nodes_end=H,H===null||H.nodeType!==fi||H.data!==Po))throw _r(),hi;r&&pn()}),()=>{for(var u of a){e.removeEventListener(u,us);var f=Ei.get(u);--f===0?(document.removeEventListener(u,us),Ei.delete(u)):Ei.set(u,f)}Xo.delete(l),d!==n&&d.parentNode?.removeChild(d)}});return Zo.set(c,h),c}let Zo=new WeakMap;function b_(t,e){const n=Zo.get(t);return n?(Zo.delete(t),n(e)):Promise.resolve()}class ou{anchor;#t=new Map;#e=new Map;#n=new Map;#i=!0;constructor(e,n=!0){this.anchor=e,this.#i=n}#l=()=>{var e=te;if(this.#t.has(e)){var n=this.#t.get(e),i=this.#e.get(n);if(i)Qo(i);else{var s=this.#n.get(n);s&&(this.#e.set(n,s.effect),this.#n.delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),i=s.effect)}for(const[r,o]of this.#t){if(this.#t.delete(r),r===e)break;const a=this.#n.get(o);a&&(ge(a.effect),this.#n.delete(o))}for(const[r,o]of this.#e){if(r===n)continue;const a=()=>{if(Array.from(this.#t.values()).includes(r)){var c=document.createDocumentFragment();Bc(o,c),c.append(st()),this.#n.set(r,{effect:o,fragment:c})}else ge(o);this.#e.delete(r)};this.#i||!i?yi(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const n=Array.from(this.#t.values());for(const[i,s]of this.#n)n.includes(i)||(ge(s.effect),this.#n.delete(i))};ensure(e,n){var i=te,s=Dc();if(n&&!this.#e.has(e)&&!this.#n.has(e))if(s){var r=document.createDocumentFragment(),o=st();r.append(o),this.#n.set(e,{effect:Ve(()=>n(o)),fragment:r})}else this.#e.set(e,Ve(()=>n(this.anchor)));if(this.#t.set(i,e),s){for(const[a,l]of this.#e)a===e?i.skipped_effects.delete(l):i.skipped_effects.add(l);for(const[a,l]of this.#n)a===e?i.skipped_effects.delete(l.effect):i.skipped_effects.add(l.effect);i.oncommit(this.#l),i.ondiscard(this.#o)}else M&&(this.anchor=H),this.#l()}}function ea(t){ae===null&&hc(),pi&&ae.l!==null?E_(ae).m.push(t):Ko(()=>{const e=Mt(t);if(typeof e=="function")return e})}function w_(t){ae===null&&hc(),ea(()=>()=>Mt(t))}function E_(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}function De(t,e,n=!1){M&&jn();var i=new ou(t),s=n?$n:0;function r(o,a){if(M){const c=dc(t)===lr;if(o===c){var l=mr();Te(l),i.anchor=l,Je(!1),i.ensure(o,a),Je(!0);return}}i.ensure(o,a)}vi(()=>{var o=!1;e((a,l=!0)=>{o=!0,r(l,a)}),o||r(!1,null)},s)}function ta(t,e){return e}function I_(t,e,n){for(var i=t.items,s=[],r=e.length,o=0;o<r;o++)Yo(e[o].e,s,!0);var a=r>0&&s.length===0&&n!==null;if(a){var l=n.parentNode;Oc(l),l.append(n),i.clear(),Lt(t,e[0].prev,e[r-1].next)}zc(s,()=>{for(var c=0;c<r;c++){var h=e[c];a||(i.delete(h.k),Lt(t,h.prev,h.next)),ge(h.e,!a)}})}function Tr(t,e,n,i,s,r=null){var o=t,a={flags:e,items:new Map,first:null},l=(e&nc)!==0;if(l){var c=t;o=M?Te(Ot(c)):c.appendChild(st())}M&&jn();var h=null,d=!1,u=new Map,f=Ho(()=>{var T=n();return xo(T)?T:T==null?[]:Oo(T)}),p,g;function b(){C_(g,p,a,u,o,s,e,i,n),r!==null&&(p.length===0?h?Qo(h):h=Ve(()=>r(o)):h!==null&&yi(h,()=>{h=null}))}vi(()=>{g??=$,p=E(f);var T=p.length;if(d&&T===0)return;d=T===0;let C=!1;if(M){var S=dc(o)===lr;S!==(T===0)&&(o=mr(),Te(o),Je(!1),C=!0)}if(M){for(var k=null,N,v=0;v<T;v++){if(H.nodeType===fi&&H.data===Po){o=H,C=!0,Je(!1);break}var w=p[v],A=i(w,v);N=na(H,a,k,null,w,A,v,s,e,n),a.items.set(A,N),k=N}T>0&&Te(mr())}if(M)T===0&&r&&(h=Ve(()=>r(o)));else if(Dc()){var F=new Set,W=te;for(v=0;v<T;v+=1){w=p[v],A=i(w,v);var L=a.items.get(A)??u.get(A);L?(e&(or|ar))!==0&&au(L,w,v,e):(N=na(null,a,null,null,w,A,v,s,e,n,!0),u.set(A,N)),F.add(A)}for(const[P,q]of a.items)F.has(P)||W.skipped_effects.add(q.e);W.oncommit(b)}else b();C&&Je(!0),E(f)}),M&&(o=H)}function C_(t,e,n,i,s,r,o,a,l){var c=(o&tp)!==0,h=(o&(or|ar))!==0,d=e.length,u=n.items,f=n.first,p=f,g,b=null,T,C=[],S=[],k,N,v,w;if(c)for(w=0;w<d;w+=1)k=e[w],N=a(k,w),v=u.get(N),v!==void 0&&(v.a?.measure(),(T??=new Set).add(v));for(w=0;w<d;w+=1){if(k=e[w],N=a(k,w),v=u.get(N),v===void 0){var A=i.get(N);if(A!==void 0){i.delete(N),u.set(N,A);var F=b?b.next:p;Lt(n,b,A),Lt(n,A,F),ia(A,F,s),b=A}else{var W=p?p.e.nodes_start:s;b=na(W,n,b,b===null?n.first:b.next,k,N,w,r,o,l)}u.set(N,b),C=[],S=[],p=b.next;continue}if(h&&au(v,k,w,o),(v.e.f&Qe)!==0&&(Qo(v.e),c&&(v.a?.unfix(),(T??=new Set).delete(v))),v!==p){if(g!==void 0&&g.has(v)){if(C.length<S.length){var L=S[0],P;b=L.prev;var q=C[0],re=C[C.length-1];for(P=0;P<C.length;P+=1)ia(C[P],L,s);for(P=0;P<S.length;P+=1)g.delete(S[P]);Lt(n,q.prev,re.next),Lt(n,b,q),Lt(n,re,L),p=L,b=re,w-=1,C=[],S=[]}else g.delete(v),ia(v,p,s),Lt(n,v.prev,v.next),Lt(n,v,b===null?n.first:b.next),Lt(n,b,v),b=v;continue}for(C=[],S=[];p!==null&&p.k!==N;)(p.e.f&Qe)===0&&(g??=new Set).add(p),S.push(p),p=p.next;if(p===null)continue;v=p}C.push(v),b=v,p=v.next}if(p!==null||g!==void 0){for(var G=g===void 0?[]:Oo(g);p!==null;)(p.e.f&Qe)===0&&G.push(p),p=p.next;var ee=G.length;if(ee>0){var Ie=(o&nc)!==0&&d===0?s:null;if(c){for(w=0;w<ee;w+=1)G[w].a?.measure();for(w=0;w<ee;w+=1)G[w].a?.fix()}I_(n,G,Ie)}}c&&_n(()=>{if(T!==void 0)for(v of T)v.a?.apply()}),t.first=n.first&&n.first.e,t.last=b&&b.e;for(var Re of i.values())ge(Re.e);i.clear()}function au(t,e,n,i){(i&or)!==0&&gi(t.v,e),(i&ar)!==0?gi(t.i,n):t.i=n}function na(t,e,n,i,s,r,o,a,l,c,h){var d=(l&or)!==0,u=(l&np)===0,f=d?u?qo(s,!1,!1):gn(s):s,p=(l&ar)===0?o:gn(o),g={i:p,v:f,k:r,a:null,e:null,prev:n,next:i};try{if(t===null){var b=document.createDocumentFragment();b.append(t=st())}return g.e=Ve(()=>a(t,f,p,c),M),g.e.prev=n&&n.e,g.e.next=i&&i.e,n===null?h||(e.first=g):(n.next=g,n.e.next=g.e),i!==null&&(i.prev=g,i.e.prev=g.e),g}finally{}}function ia(t,e,n){for(var i=t.next?t.next.e.nodes_start:n,s=e?e.e.nodes_start:n,r=t.e.nodes_start;r!==null&&r!==i;){var o=Dt(r);s.before(r),r=o}}function Lt(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function $e(t,e,n,i,s){M&&jn();var r=e.$$slots?.[n],o=!1;r===!0&&(r=e.children,o=!0),r===void 0||r(t,o?()=>i:i)}function T_(t,e,n,i,s,r){let o=M;M&&jn();var a=null;M&&H.nodeType===yp&&(a=H,jn());var l=M?H:t,c=new ou(l,!1);vi(()=>{const h=e()||null;var d=up;if(h===null){c.ensure(null,null);return}return c.ensure(h,u=>{if(h){if(a=M?a:document.createElementNS(d,h),Jt(a,a),i){M&&v_(h)&&a.append(document.createComment(""));var f=M?Ot(a):a.appendChild(st());M&&(f===null?Je(!1):Te(f)),i(a,f)}$.nodes_end=a,u.before(a)}M&&Te(u)}),()=>{}},$n),rs(()=>{}),o&&(Je(!0),Te(l))}function Vn(t,e){Er(()=>{var n=t.getRootNode(),i=n.host?n:n.head??n.ownerDocument.head;if(!i.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,i.appendChild(s)}})}function S_(t,e){var n=void 0,i;vi(()=>{n!==(n=e())&&(i&&(ge(i),i=null),n&&(i=Ve(()=>{Er(()=>n(t))})))})}function lu(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=lu(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function k_(){for(var t,e,n=0,i="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=lu(t))&&(i&&(i+=" "),i+=e);return i}function A_(t){return typeof t=="object"?k_(t):t??""}const cu=[...` 	
\r\f \v\uFEFF`];function R_(t,e,n){var i=t==null?"":""+t;if(e&&(i=i?i+" "+e:e),n){for(var s in n)if(n[s])i=i?i+" "+s:s;else if(i.length)for(var r=s.length,o=0;(o=i.indexOf(s,o))>=0;){var a=o+r;(o===0||cu.includes(i[o-1]))&&(a===i.length||cu.includes(i[a]))?i=(o===0?"":i.substring(0,o))+i.substring(a+1):o=a}}return i===""?null:i}function uu(t,e=!1){var n=e?" !important;":";",i="";for(var s in t){var r=t[s];r!=null&&r!==""&&(i+=" "+s+": "+r+n)}return i}function sa(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function N_(t,e){if(e){var n="",i,s;if(Array.isArray(e)?(i=e[0],s=e[1]):i=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var r=!1,o=0,a=!1,l=[];i&&l.push(...Object.keys(i).map(sa)),s&&l.push(...Object.keys(s).map(sa));var c=0,h=-1;const g=t.length;for(var d=0;d<g;d++){var u=t[d];if(a?u==="/"&&t[d-1]==="*"&&(a=!1):r?r===u&&(r=!1):u==="/"&&t[d+1]==="*"?a=!0:u==='"'||u==="'"?r=u:u==="("?o++:u===")"&&o--,!a&&r===!1&&o===0){if(u===":"&&h===-1)h=d;else if(u===";"||d===g-1){if(h!==-1){var f=sa(t.substring(c,h).trim());if(!l.includes(f)){u!==";"&&d++;var p=t.substring(c,d).trim();n+=" "+p+";"}}c=d+1,h=-1}}}}return i&&(n+=uu(i)),s&&(n+=uu(s,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function hs(t,e,n,i,s,r){var o=t.__className;if(M||o!==n||o===void 0){var a=R_(n,i,r);(!M||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):e?t.className=a:t.setAttribute("class",a)),t.__className=n}else if(r&&s!==r)for(var l in r){var c=!!r[l];(s==null||c!==!!s[l])&&t.classList.toggle(l,c)}return r}function ra(t,e={},n,i){for(var s in n){var r=n[s];e[s]!==r&&(n[s]==null?t.style.removeProperty(s):t.style.setProperty(s,r,i))}}function P_(t,e,n,i){var s=t.__style;if(M||s!==e){var r=N_(e,i);(!M||r!==t.getAttribute("style"))&&(r==null?t.removeAttribute("style"):t.style.cssText=r),t.__style=e}else i&&(Array.isArray(i)?(ra(t,n?.[0],i[0]),ra(t,n?.[1],i[1],"important")):ra(t,n,i));return i}function oa(t,e,n=!1){if(t.multiple){if(e==null)return;if(!xo(e))return Pp();for(var i of t.options)i.selected=e.includes(hu(i));return}for(i of t.options){var s=hu(i);if(qp(s,e)){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function x_(t){var e=new MutationObserver(()=>{oa(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),rs(()=>{e.disconnect()})}function hu(t){return"__value"in t?t.__value:t.value}const ds=Symbol("class"),fs=Symbol("style"),du=Symbol("is custom element"),fu=Symbol("is html");function Sr(t){if(M){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var i=t.value;de(t,"value",null),t.value=i}if(t.hasAttribute("checked")){var s=t.checked;de(t,"checked",null),t.checked=s}}};t.__on_r=n,_n(n),Lc()}}function O_(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function de(t,e,n,i){var s=_u(t);M&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=n)&&(e==="loading"&&(t[vp]=n),n==null?t.removeAttribute(e):typeof n!="string"&&gu(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function D_(t,e,n,i,s=!1,r=!1){if(M&&s&&t.tagName==="INPUT"){var o=t,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in n||Sr(o)}var l=_u(t),c=l[du],h=!l[fu];let d=M&&c;d&&Je(!1);var u=e||{},f=t.tagName==="OPTION";for(var p in e)p in n||(n[p]=null);n.class?n.class=A_(n.class):n[ds]&&(n.class=null),n[fs]&&(n.style??=null);var g=gu(t);for(const v in n){let w=n[v];if(f&&v==="value"&&w==null){t.value=t.__value="",u[v]=w;continue}if(v==="class"){var b=t.namespaceURI==="http://www.w3.org/1999/xhtml";hs(t,b,w,i,e?.[ds],n[ds]),u[v]=w,u[ds]=n[ds];continue}if(v==="style"){P_(t,w,e?.[fs],n[fs]),u[v]=w,u[fs]=n[fs];continue}var T=u[v];if(!(w===T&&!(w===void 0&&t.hasAttribute(v)))){u[v]=w;var C=v[0]+v[1];if(C!=="$$")if(C==="on"){const A={},F="$$"+v;let W=v.slice(2);var S=d_(W);if(u_(W)&&(W=W.slice(0,-7),A.capture=!0),!S&&T){if(w!=null)continue;t.removeEventListener(W,u[F],A),u[F]=null}if(w!=null)if(S)t[`__${W}`]=w,cs([W]);else{let L=function(P){u[v].call(this,P)};u[F]=tu(W,t,L,A)}else S&&(t[`__${W}`]=void 0)}else if(v==="style")de(t,v,w);else if(v==="autofocus")Gp(t,!!w);else if(!c&&(v==="__value"||v==="value"&&w!=null))t.value=t.__value=w;else if(v==="selected"&&f)O_(t,w);else{var k=v;h||(k=p_(k));var N=k==="defaultValue"||k==="defaultChecked";if(w==null&&!c&&!N)if(l[v]=null,k==="value"||k==="checked"){let A=t;const F=e===void 0;if(k==="value"){let W=A.defaultValue;A.removeAttribute(k),A.defaultValue=W,A.value=A.__value=F?W:null}else{let W=A.defaultChecked;A.removeAttribute(k),A.defaultChecked=W,A.checked=F?W:!1}}else t.removeAttribute(v);else N||g.includes(k)&&(c||typeof w!="string")?(t[k]=w,k in l&&(l[k]=Ce)):typeof w!="function"&&de(t,k,w)}}}return d&&Je(!0),u}function pu(t,e,n=[],i=[],s=[],r,o=!1,a=!1){Ec(s,n,i,l=>{var c=void 0,h={},d=t.nodeName==="SELECT",u=!1;if(vi(()=>{var p=e(...l.map(E)),g=D_(t,c,p,r,o,a);u&&d&&"value"in p&&oa(t,p.value);for(let T of Object.getOwnPropertySymbols(h))p[T]||ge(h[T]);for(let T of Object.getOwnPropertySymbols(p)){var b=p[T];T.description===hp&&(!c||b!==c[T])&&(h[T]&&ge(h[T]),h[T]=Ve(()=>S_(t,()=>b))),g[T]=b}c=g}),d){var f=t;Er(()=>{oa(f,c.value,!0),x_(f)})}u=!0})}function _u(t){return t.__attributes??={[du]:t.nodeName.includes("-"),[fu]:t.namespaceURI===cp}}var mu=new Map;function gu(t){var e=t.getAttribute("is")||t.nodeName,n=mu.get(e);if(n)return n;mu.set(e,n=[]);for(var i,s=t,r=Element.prototype;r!==s;){i=oc(s);for(var o in i)i[o].set&&n.push(o);s=Do(s)}return n}function aa(t,e,n=e){var i=new WeakSet;Kp(t,"input",async s=>{var r=s?t.defaultValue:t.value;if(r=la(t)?ca(r):r,n(r),te!==null&&i.add(te),await r_(),r!==(r=e())){var o=t.selectionStart,a=t.selectionEnd,l=t.value.length;if(t.value=r??"",a!==null){var c=t.value.length;o===a&&a===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(a,c))}}}),(M&&t.defaultValue!==t.value||Mt(e)==null&&t.value)&&(n(la(t)?ca(t.value):t.value),te!==null&&i.add(te)),Ir(()=>{var s=e();if(t===document.activeElement){var r=vr??te;if(i.has(r))return}la(t)&&s===ca(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function la(t){var e=t.type;return e==="number"||e==="range"}function ca(t){return t===""?null:+t}function vu(t,e){return t===e||t?.[Pt]===e}function M_(t={},e,n,i){return Er(()=>{var s,r;return Ir(()=>{s=r,r=[],Mt(()=>{t!==n(...r)&&(e(t,...r),s&&vu(n(...s),t)&&e(null,...s))})}),()=>{_n(()=>{r&&vu(n(...r),t)&&e(null,...r)})}}),t}function yu(t=!1){const e=ae,n=e.l.u;if(!n)return;let i=()=>wi(e.s);if(t){let s=0,r={};const o=is(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==r[c]&&(r[c]=l[c],a=!0);return a&&s++,s});i=()=>E(o)}n.b.length&&Jp(()=>{bu(e,i),ur(n.b)}),Ko(()=>{const s=Mt(()=>n.m.map(_p));return()=>{for(const r of s)typeof r=="function"&&r()}}),n.a.length&&Ko(()=>{bu(e,i),ur(n.a)})}function bu(t,e){if(t.l.s)for(const n of t.l.s)E(n);e()}function ua(t,e,n){if(t==null)return e(void 0),n&&n(void 0),hn;const i=Mt(()=>t.subscribe(e,n));return i.unsubscribe?()=>i.unsubscribe():i}const Ii=[];function L_(t,e){return{subscribe:ps(t,e).subscribe}}function ps(t,e=hn){let n=null;const i=new Set;function s(a){if(pc(t,a)&&(t=a,n)){const l=!Ii.length;for(const c of i)c[1](),Ii.push(c,t);if(l){for(let c=0;c<Ii.length;c+=2)Ii[c][0](Ii[c+1]);Ii.length=0}}}function r(a){s(a(t))}function o(a,l=hn){const c=[a,l];return i.add(c),i.size===1&&(n=e(s,r)||hn),a(t),()=>{i.delete(c),i.size===0&&n&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}function $_(t,e,n){const i=!Array.isArray(t),s=i?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return L_(n,(o,a)=>{let l=!1;const c=[];let h=0,d=hn;const u=()=>{if(h)return;d();const p=e(i?c[0]:c,o,a);r?o(p):d=typeof p=="function"?p:hn},f=s.map((p,g)=>ua(p,b=>{c[g]=b,h&=~(1<<g),l&&u()},()=>{h|=1<<g}));return l=!0,u(),function(){ur(f),d(),l=!1}})}function F_(t){let e;return ua(t,n=>e=n)(),e}let kr=!1,ha=Symbol();function _s(t,e,n){const i=n[e]??={store:null,source:qo(void 0),unsubscribe:hn};if(i.store!==t&&!(ha in n))if(i.unsubscribe(),i.store=t??null,t==null)i.source.v=void 0,i.unsubscribe=hn;else{var s=!0;i.unsubscribe=ua(t,r=>{s?i.source.v=r:B(i.source,r)}),s=!1}return t&&ha in n?F_(t):E(i.source)}function da(){const t={};function e(){rs(()=>{for(var n in t)t[n].unsubscribe();Zi(t,ha,{enumerable:!1,value:!0})})}return[t,e]}function U_(t){var e=kr;try{return kr=!1,[t(),kr]}finally{kr=e}}const j_={get(t,e){if(!t.exclude.includes(e))return E(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var i=$;try{rt(t.parent_effect),t.special[e]=at({get[e](){return t.props[e]}},e,ic)}finally{rt(i)}}return t.special[e](n),Sc(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),Sc(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function Fe(t,e){return new Proxy({props:t,exclude:e,special:{},version:gn(0),parent_effect:$},j_)}const W_={get(t,e){let n=t.props.length;for(;n--;){let i=t.props[n];if(es(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i)return i[e]}},set(t,e,n){let i=t.props.length;for(;i--;){let s=t.props[i];es(s)&&(s=s());const r=Ht(s,e);if(r&&r.set)return r.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let i=t.props[n];if(es(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i){const s=Ht(i,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===Pt||e===Uo)return!1;for(let n of t.props)if(es(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(es(n)&&(n=n()),!!n){for(const i in n)e.includes(i)||e.push(i);for(const i of Object.getOwnPropertySymbols(n))e.includes(i)||e.push(i)}return e}};function et(...t){return new Proxy({props:t},W_)}function at(t,e,n,i){var s=!pi||(n&sp)!==0,r=(n&rp)!==0,o=(n&op)!==0,a=i,l=!0,c=()=>(l&&(l=!1,a=o?Mt(i):i),a),h;if(r){var d=Pt in t||Uo in t;h=Ht(t,e)?.set??(d&&e in t?S=>t[e]=S:void 0)}var u,f=!1;r?[u,f]=U_(()=>t[e]):u=t[e],u===void 0&&i!==void 0&&(u=c(),h&&(s&&Sp(),h(u)));var p;if(s?p=()=>{var S=t[e];return S===void 0?c():(l=!0,S)}:p=()=>{var S=t[e];return S!==void 0&&(a=void 0),S===void 0?a:S},s&&(n&ic)===0)return p;if(h){var g=t.$$legacy;return(function(S,k){return arguments.length>0?((!s||!k||g||f)&&h(k?p():S),S):p()})}var b=!1,T=((n&ip)!==0?is:Ho)(()=>(b=!1,p()));r&&E(T);var C=$;return(function(S,k){if(arguments.length>0){const N=k?E(T):s&&r?Yt(S):S;return B(T,N),b=!0,a!==void 0&&(a=N),S}return Hn&&b||(C.f&Gt)!==0?T.v:E(T)})}function z_(t){return new H_(t)}class H_{#t;#e;constructor(e){var n=new Map,i=(r,o)=>{var a=qo(o,!1,!1);return n.set(r,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(r,o){return E(n.get(o)??i(o,Reflect.get(r,o)))},has(r,o){return o===Uo?!0:(E(n.get(o)??i(o,Reflect.get(r,o))),Reflect.has(r,o))},set(r,o,a){return B(n.get(o)??i(o,a),a),Reflect.set(r,o,a)}});this.#e=(e.hydrate?y_:su)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Xe(),this.#t=s.$$events;for(const r of Object.keys(this.#e))r==="$set"||r==="$destroy"||r==="$on"||Zi(this,r,{get(){return this.#e[r]},set(o){this.#e[r]=o},enumerable:!0});this.#e.$set=r=>{Object.assign(s,r)},this.#e.$destroy=()=>{b_(this.#e)}}$set(e){this.#e.$set(e)}$on(e,n){this.#t[e]=this.#t[e]||[];const i=(...s)=>n.call(this,...s);return this.#t[e].push(i),()=>{this.#t[e]=this.#t[e].filter(s=>s!==i)}}$destroy(){this.#e.$destroy()}}let wu;typeof HTMLElement=="function"&&(wu=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const i=this.$$c.$on(t,e);this.$$l_u.set(e,i)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const i=this.$$l_u.get(e);i&&(i(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(i){return s=>{const r=document.createElement("slot");i!=="default"&&(r.name=i),x(s,r)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},n=B_(this);for(const i of this.$$s)i in n&&(i==="default"&&!this.$$d.children?(this.$$d.children=t(i),e.default=!0):e[i]=t(i));for(const i of this.attributes){const s=this.$$g_p(i.name);s in this.$$d||(this.$$d[s]=Ar(s,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=z_({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$host:this}}),this.$$me=Xp(()=>{Ir(()=>{this.$$r=!0;for(const i of cr(this.$$c)){if(!this.$$p_d[i]?.reflect)continue;this.$$d[i]=this.$$c[i];const s=Ar(i,this.$$d[i],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,s)}this.$$r=!1})});for(const i in this.$$l)for(const s of this.$$l[i]){const r=this.$$c.$on(i,s);this.$$l_u.set(s,r)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=Ar(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return cr(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function Ar(t,e,n,i){const s=n[t]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!n[t])return e;if(i==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function B_(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function fe(t,e,n,i,s,r){let o=class extends wu{constructor(){super(t,n,s),this.$$p_d=e}static get observedAttributes(){return cr(e).map(a=>(e[a].attribute||a).toLowerCase())}};return cr(e).forEach(a=>{Zi(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=Ar(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var h=Ht(c,a)?.get;h?c[a]=l:c.$set({[a]:l})}}})}),i.forEach(a=>{Zi(o.prototype,a,{get(){return this.$$c?.[a]}})}),t.element=o,o}const V_=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Ci(e)},Ci=function(t){return new Error("Firebase Database ("+Eu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},q_=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},fa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(u=64)),i.push(n[h],n[d],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Iu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):q_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new G_;const u=r<<2|a>>4;if(i.push(u),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cu=function(t){const e=Iu(t);return fa.encodeByteArray(e,!0)},Rr=function(t){return Cu(t).replace(/\./g,"")},Nr=function(t){try{return fa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){return Tu(void 0,t)}function Tu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Y_(n)||(t[n]=Tu(t[n],e[n]));return t}function Y_(t){return t!=="__proto__"}/**
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
 */function Q_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const J_=()=>Q_().__FIREBASE_DEFAULTS__,X_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Z_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nr(t[1]);return e&&JSON.parse(e)},pa=()=>{try{return V_()||J_()||X_()||Z_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Su=t=>pa()?.emulatorHosts?.[t],em=t=>{const e=Su(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ku=()=>pa()?.config,Au=t=>pa()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ti(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ru(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function tm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Rr(JSON.stringify(n)),Rr(JSON.stringify(o)),""].join(".")}const gs={};function nm(){const t={prod:[],emulator:[]};for(const e of Object.keys(gs))gs[e]?t.emulator.push(e):t.prod.push(e);return t}function im(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Nu=!1;function Pu(t,e){if(typeof window>"u"||typeof document>"u"||!Ti(window.location.host)||gs[t]===e||gs[t]||Nu)return;gs[t]=e;function n(u){return`__firebase__banner__${u}`}const i="__firebase__banner",r=nm().prod.length>0;function o(){const u=document.getElementById(i);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,f){u.setAttribute("width","24"),u.setAttribute("id",f),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Nu=!0,o()},u}function h(u,f){u.setAttribute("id",f),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=im(i),f=n("text"),p=document.getElementById(f)||document.createElement("span"),g=n("learnmore"),b=document.getElementById(g)||document.createElement("a"),T=n("preprendIcon"),C=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const S=u.element;a(S),h(b,g);const k=c();l(C,T),S.append(C,p,b,k),document.body.appendChild(S)}r?(p.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(C.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,p.innerText="Preview backend running in this workspace."),p.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _a(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function sm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function om(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function am(){return Eu.NODE_ADMIN===!0}function lm(){try{return typeof indexedDB=="object"}catch{return!1}}function cm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="FirebaseError";class yn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=um,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?hm(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,i)}}function hm(t,e){return t.replace(dm,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const dm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=ys(Nr(r[0])||""),n=ys(Nr(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},fm=function(t){const e=Ou(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pm=function(t){const e=Ou(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ma(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function qn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Du(r)&&Du(o)){if(!qn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Du(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):d<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const u=(s<<5|s>>>27)+c+l+h+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function mm(t,e){const n=new gm(t,e);return n.subscribe.bind(n)}class gm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");vm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ga),s.error===void 0&&(s.error=ga),s.complete===void 0&&(s.complete=ga);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ga(){}function xr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,I(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Or=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ms;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Em(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:wm(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wm(t){return t===Kn?void 0:t}function Em(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Cm={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Tm=Q.INFO,Sm={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},km=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Sm[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class va{constructor(e){this.name=e,this._logLevel=Tm,this._logHandler=km,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Am=(t,e)=>e.some(n=>t instanceof n);let Mu,Lu;function Rm(){return Mu||(Mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nm(){return Lu||(Lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $u=new WeakMap,ya=new WeakMap,Fu=new WeakMap,ba=new WeakMap,wa=new WeakMap;function Pm(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$u.set(n,t)}).catch(()=>{}),wa.set(e,t),e}function xm(t){if(ya.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ya.set(t,e)}let Ea={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ya.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Om(t){Ea=t(Ea)}function Dm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ia(this),e,...n);return Fu.set(i,e.sort?e.sort():[e]),bn(i)}:Nm().includes(t)?function(...e){return t.apply(Ia(this),e),bn($u.get(this))}:function(...e){return bn(t.apply(Ia(this),e))}}function Mm(t){return typeof t=="function"?Dm(t):(t instanceof IDBTransaction&&xm(t),Am(t,Rm())?new Proxy(t,Ea):t)}function bn(t){if(t instanceof IDBRequest)return Pm(t);if(ba.has(t))return ba.get(t);const e=Mm(t);return e!==t&&(ba.set(t,e),wa.set(e,t)),e}const Ia=t=>wa.get(t);function Lm(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=bn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(bn(o.result),l.oldVersion,l.newVersion,bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $m=["get","getKey","getAll","getAllKeys","count"],Fm=["put","add","delete","clear"],Ca=new Map;function Uu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Fm.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||$m.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ca.set(e,r),r}Om(t=>({...t,get:(e,n,i)=>Uu(e,n)||t.get(e,n,i),has:(e,n)=>!!Uu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function jm(t){return t.getComponent()?.type==="VERSION"}const Ta="@firebase/app",ju="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new va("@firebase/app"),Wm="@firebase/app-compat",zm="@firebase/analytics-compat",Hm="@firebase/analytics",Bm="@firebase/app-check-compat",Vm="@firebase/app-check",qm="@firebase/auth",Gm="@firebase/auth-compat",Km="@firebase/database",Ym="@firebase/data-connect",Qm="@firebase/database-compat",Jm="@firebase/functions",Xm="@firebase/functions-compat",Zm="@firebase/installations",eg="@firebase/installations-compat",tg="@firebase/messaging",ng="@firebase/messaging-compat",ig="@firebase/performance",sg="@firebase/performance-compat",rg="@firebase/remote-config",og="@firebase/remote-config-compat",ag="@firebase/storage",lg="@firebase/storage-compat",cg="@firebase/firestore",ug="@firebase/ai",hg="@firebase/firestore-compat",dg="firebase",fg="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="[DEFAULT]",pg={[Ta]:"fire-core",[Wm]:"fire-core-compat",[Hm]:"fire-analytics",[zm]:"fire-analytics-compat",[Vm]:"fire-app-check",[Bm]:"fire-app-check-compat",[qm]:"fire-auth",[Gm]:"fire-auth-compat",[Km]:"fire-rtdb",[Ym]:"fire-data-connect",[Qm]:"fire-rtdb-compat",[Jm]:"fire-fn",[Xm]:"fire-fn-compat",[Zm]:"fire-iid",[eg]:"fire-iid-compat",[tg]:"fire-fcm",[ng]:"fire-fcm-compat",[ig]:"fire-perf",[sg]:"fire-perf-compat",[rg]:"fire-rc",[og]:"fire-rc-compat",[ag]:"fire-gcs",[lg]:"fire-gcs-compat",[cg]:"fire-fst",[hg]:"fire-fst-compat",[ug]:"fire-vertex","fire-js":"fire-js",[dg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,_g=new Map,ka=new Map;function Wu(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ai(t){const e=t.name;if(ka.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;ka.set(e,t);for(const n of Dr.values())Wu(n,t);for(const n of _g.values())Wu(n,t);return!0}function Aa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wn=new vs("app","Firebase",mg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=fg;function zu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Sa,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw wn.create("bad-app-name",{appName:String(s)});if(n||(n=ku()),!n)throw wn.create("no-options");const r=Dr.get(s);if(r){if(qn(n,r.options)&&qn(i,r.config))return r;throw wn.create("duplicate-app",{appName:s})}const o=new Im(s);for(const l of ka.values())o.addComponent(l);const a=new gg(n,i,o);return Dr.set(s,a),a}function Hu(t=Sa){const e=Dr.get(t);if(!e&&t===Sa&&ku())return zu();if(!e)throw wn.create("no-app",{appName:t});return e}function En(t,e,n){let i=pg[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(o.join(" "));return}Ai(new Gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vg="firebase-heartbeat-database",yg=1,Es="firebase-heartbeat-store";let Ra=null;function Bu(){return Ra||(Ra=Lm(vg,yg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Es)}catch(n){console.warn(n)}}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),Ra}async function bg(t){try{const n=(await Bu()).transaction(Es),i=await n.objectStore(Es).get(qu(t));return await n.done,i}catch(e){if(e instanceof yn)Xt.warn(e.message);else{const n=wn.create("idb-get",{originalErrorMessage:e?.message});Xt.warn(n.message)}}}async function Vu(t,e){try{const i=(await Bu()).transaction(Es,"readwrite");await i.objectStore(Es).put(e,qu(t)),await i.done}catch(n){if(n instanceof yn)Xt.warn(n.message);else{const i=wn.create("idb-set",{originalErrorMessage:n?.message});Xt.warn(i.message)}}}function qu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wg=1024,Eg=30;class Ig{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>Eg){const s=Sg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Xt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gu(),{heartbeatsToSend:n,unsentEntries:i}=Cg(this._heartbeatsCache.heartbeats),s=Rr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Xt.warn(e),""}}}function Gu(){return new Date().toISOString().substring(0,10)}function Cg(t,e=wg){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ku(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ku(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Tg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lm()?cm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bg(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Vu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Vu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ku(t){return Rr(JSON.stringify({version:2,heartbeats:t})).length}function Sg(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){Ai(new Gn("platform-logger",e=>new Um(e),"PRIVATE")),Ai(new Gn("heartbeat",e=>new Ig(e),"PRIVATE")),En(Ta,ju,t),En(Ta,ju,"esm2020"),En("fire-js","")}kg("");var Ag="firebase",Rg="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(Ag,Rg,"app");function Yu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ng=Yu,Qu=new vs("auth","Firebase",Yu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new va("@firebase/auth");function Pg(t,...e){Mr.logLevel<=Q.WARN&&Mr.warn(`Auth (${Ri}): ${t}`,...e)}function Lr(t,...e){Mr.logLevel<=Q.ERROR&&Mr.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw Na(t,...e)}function Ft(t,...e){return Na(t,...e)}function Ju(t,e,n){const i={...Ng(),[e]:n};return new vs("auth","Firebase",i).create(e,{appName:t.name})}function Zt(t){return Ju(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Na(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Qu.create(t,...e)}function O(t,e,...n){if(!t)throw Na(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lr(e),new Error(e)}function tn(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){return typeof self<"u"&&self.location?.href||""}function xg(){return Xu()==="http:"||Xu()==="https:"}function Xu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xg()||rm()||"connection"in navigator)?navigator.onLine:!0}function Dg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=_a()||xu()}get(){return Og()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$g=new Is(3e4,6e4);function In(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function nn(t,e,n,i,s={}){return eh(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ki({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...r};return sm()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ti(t.emulatorConfig.host)&&(c.credentials="include"),Zu.fetch()(await th(t,t.config.apiHost,n,a),c)})}async function eh(t,e,n){t._canInitEmulator=!1;const i={...Mg,...e};try{const s=new Ug(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $r(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $r(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $r(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $r(t,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ju(t,h,c);wt(t,h)}}catch(s){if(s instanceof yn)throw s;wt(t,"network-request-failed",{message:String(s)})}}async function Cs(t,e,n,i,s={}){const r=await nn(t,e,n,i,s);return"mfaPendingCredential"in r&&wt(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function th(t,e,n,i){const s=`${e}${n}?${i}`,r=t,o=r.config.emulator?xa(t.config,s):`${t.config.apiScheme}://${s}`;return Lg.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Fg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ug{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ft(this.auth,"network-request-failed")),$g.get())})}}function $r(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Ft(t,e,i);return s.customData._tokenResponse=n,s}function nh(t){return t!==void 0&&t.enterprise!==void 0}class jg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Wg(t,e){return nn(t,"GET","/v2/recaptchaConfig",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(t,e){return nn(t,"POST","/v1/accounts:delete",e)}async function Fr(t,e){return nn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hg(t,e=!1){const n=Se(t),i=await n.getIdToken(e),s=Da(i);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r?.sign_in_provider;return{claims:s,token:i,authTime:Ts(Oa(s.auth_time)),issuedAtTime:Ts(Oa(s.iat)),expirationTime:Ts(Oa(s.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Oa(t){return Number(t)*1e3}function Da(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Lr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nr(n);return s?JSON.parse(s):(Lr("Failed to decode base64 JWT payload"),null)}catch(s){return Lr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ih(t){const e=Da(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof yn&&Bg(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Bg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(t){const e=t.auth,n=await t.getIdToken(),i=await Ni(t,Fr(e,{idToken:n}));O(i?.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const r=s.providerUserInfo?.length?sh(s.providerUserInfo):[],o=Gg(t.providerData,r),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,c=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ma(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function qg(t){const e=Se(t);await Ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gg(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function sh(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(t,e){const n=await eh(t,{},async()=>{const i=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await th(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Ti(t.emulatorConfig.host)&&(l.credentials="include"),Zu.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yg(t,e){return nn(t,"POST","/v2/accounts:revokeToken",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ih(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=ih(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Kg(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Pi;return i&&(O(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(O(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Et{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Vg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ma(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ni(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hg(this,e)}reload(){return qg(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Et({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ur(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await Ni(this,zg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:f,providerData:p,stsTokenManager:g}=n;O(d&&g,e,"internal-error");const b=Pi.fromJSON(this.name,g);O(typeof d=="string",e,"internal-error"),Cn(i,e.name),Cn(s,e.name),O(typeof u=="boolean",e,"internal-error"),O(typeof f=="boolean",e,"internal-error"),Cn(r,e.name),Cn(o,e.name),Cn(a,e.name),Cn(l,e.name),Cn(c,e.name),Cn(h,e.name);const T=new Et({uid:d,auth:e,email:s,emailVerified:u,displayName:i,isAnonymous:f,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:b,createdAt:c,lastLoginAt:h});return p&&Array.isArray(p)&&(T.providerData=p.map(C=>({...C}))),l&&(T._redirectEventId=l),T}static async _fromIdTokenResponse(e,n,i=!1){const s=new Pi;s.updateFromServerResponse(n);const r=new Et({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ur(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];O(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?sh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!r?.length,a=new Pi;a.updateFromIdToken(i);const l=new Et({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ma(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!r?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Map;function sn(t){tn(t instanceof Function,"Expected a class definition");let e=rh.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oh.type="NONE";const ah=oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=jr(this.userKey,s.apiKey,r),this.fullPersistenceKey=jr("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fr(this.auth,{idToken:e}).catch(()=>{});return n?Et._fromGetAccountInfoResponse(this.auth,n,e):null}return Et._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new xi(sn(ah),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||sn(ah);const o=jr(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){let d;if(typeof h=="string"){const u=await Fr(e,{idToken:h}).catch(()=>{});if(!u)break;d=await Et._fromGetAccountInfoResponse(e,u,h)}else d=Et._fromJSON(e,h);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new xi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new xi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ph(e))return"Blackberry";if(_h(e))return"Webos";if(uh(e))return"Safari";if((e.includes("chrome/")||hh(e))&&!e.includes("edge/"))return"Chrome";if(fh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function ch(t=Ue()){return/firefox\//i.test(t)}function uh(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hh(t=Ue()){return/crios\//i.test(t)}function dh(t=Ue()){return/iemobile/i.test(t)}function fh(t=Ue()){return/android/i.test(t)}function ph(t=Ue()){return/blackberry/i.test(t)}function _h(t=Ue()){return/webos/i.test(t)}function La(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qg(t=Ue()){return La(t)&&!!window.navigator?.standalone}function Jg(){return om()&&document.documentMode===10}function mh(t=Ue()){return La(t)||fh(t)||_h(t)||ph(t)||/windows phone/i.test(t)||dh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e=[]){let n;switch(t){case"Browser":n=lh(Ue());break;case"Worker":n=`${lh(Ue())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${i}`}/**
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
 */class Xg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Zg(t,e={}){return nn(t,"GET","/v2/passwordPolicy",In(t,e))}/**
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
 */const ev=6;class tv{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ev,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vh(this),this.idTokenSubscription=new vh(this),this.beforeStateQueue=new Xg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fr(this,{idToken:e}),i=await Et._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(lt(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=i?._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===o)&&a?.user&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ur(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Zt(this));const n=e?Se(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zg(this),n=new tv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Yg(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Pg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Yn(t){return Se(t)}class vh{constructor(e){this.auth=e,this.observer=null,this.addObserver=mm(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iv(t){Wr=t}function yh(t){return Wr.loadJS(t)}function sv(){return Wr.recaptchaEnterpriseScript}function rv(){return Wr.gapiScript}function ov(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class av{constructor(){this.enterprise=new lv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class lv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const cv="recaptcha-enterprise",bh="NO_RECAPTCHA";class uv{constructor(e){this.type=cv,this.auth=Yn(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Wg(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new jg(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;nh(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(bh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new av().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&nh(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=sv();l.length!==0&&(l+=a),yh(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function wh(t,e,n,i=!1,s=!1){const r=new uv(t);let o;if(s)o=bh;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $a(t,e,n,i,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await wh(t,e,n,n==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await wh(t,e,n,n==="getOobCode");return i(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e){const n=Aa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(qn(r,e??{}))return s;wt(s,"already-initialized")}return n.initialize({options:e})}function dv(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(sn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function fv(t,e,n){const i=Yn(t);O(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Eh(e),{host:o,port:a}=pv(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){O(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),O(qn(c,i.config.emulator)&&qn(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,Ti(o)?(Ru(`${r}//${o}${l}`),Pu("Auth",!0)):_v()}function Eh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pv(t){const e=Eh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ih(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Ih(o)}}}function Ih(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _v(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function mv(t,e){return nn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(t,e){return Cs(t,"POST","/v1/accounts:signInWithPassword",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(t,e){return Cs(t,"POST","/v1/accounts:signInWithEmailLink",In(t,e))}async function yv(t,e){return Cs(t,"POST","/v1/accounts:signInWithEmailLink",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Fa{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ss(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Ss(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(e,n,"signInWithPassword",gv);case"emailLink":return vv(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(e,i,"signUpPassword",mv);case"emailLink":return yv(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e){return Cs(t,"POST","/v1/accounts:signInWithIdp",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="http://localhost";class Qn extends Fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=n;if(!i||!s)return null;const o=new Qn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Oi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oi(e,n)}buildRequest(){const e={requestUri:bv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ev(t){const e=bs(ws(t)).link,n=e?bs(ws(e)).deep_link_id:null,i=bs(ws(t)).deep_link_id;return(i?bs(ws(i)).link:null)||i||n||e||t}class Ua{constructor(e){const n=bs(ws(e)),i=n.apiKey??null,s=n.oobCode??null,r=wv(n.mode??null);O(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Ev(e);try{return new Ua(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return Ss._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Ua.parseLink(n);return O(i,"argument-error"),Ss._fromEmailAndCode(e,i.code,i.tenantId)}}Di.PROVIDER_ID="password",Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Ch{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends ks{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Sn.credential(n,i)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com",Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends ks{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com",kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends ks{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return An.credential(n,i)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com",An.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(t,e){return Cs(t,"POST","/v1/accounts:signUp",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Et._fromIdTokenResponse(e,i,s),o=Th(i);return new Jn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Th(i);return new Jn({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Th(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends yn{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,zr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new zr(e,n,i,s)}}function Sh(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?zr._fromErrorAndOperation(t,r,e,i):r})}async function Cv(t,e,n=!1){const i=await Ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(t,e,n=!1){const{auth:i}=t;if(lt(i.app))return Promise.reject(Zt(i));const s="reauthenticate";try{const r=await Ni(t,Sh(i,s,e,t),n);O(r.idToken,i,"internal-error");const o=Da(r.idToken);O(o,i,"internal-error");const{sub:a}=o;return O(t.uid===a,i,"user-mismatch"),Jn._forOperation(t,s,r)}catch(r){throw r?.code==="auth/user-not-found"&&wt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kh(t,e,n=!1){if(lt(t.app))return Promise.reject(Zt(t));const i="signIn",s=await Sh(t,i,e),r=await Jn._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Sv(t,e){return kh(Yn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t){const e=Yn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kv(t,e,n){if(lt(t.app))return Promise.reject(Zt(t));const i=Yn(t),o=await $a(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Iv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ah(t),l}),a=await Jn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Av(t,e,n){return lt(t.app)?Promise.reject(Zt(t)):Sv(Se(t),Di.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ah(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(t,e){return nn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Se(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ni(i,Rv(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Pv(t,e,n,i){return Se(t).onIdTokenChanged(e,n,i)}function xv(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function Ov(t,e,n,i){return Se(t).onAuthStateChanged(e,n,i)}function Dv(t){return Se(t).signOut()}const Hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=1e3,Lv=10;class Nh extends Rh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Jg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lv):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nh.type="LOCAL";const $v=Nh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph extends Rh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ph.type="SESSION";const xh=Ph;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Br(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Fv(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Br.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ja("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const u=d;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(u.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function jv(t){Ut().location.href=t}/**
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
 */function Oh(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function Wv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zv(){return navigator?.serviceWorker?.controller||null}function Hv(){return Oh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="firebaseLocalStorageDb",Bv=1,Vr="firebaseLocalStorage",Mh="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qr(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function Vv(){const t=indexedDB.deleteDatabase(Dh);return new As(t).toPromise()}function Wa(){const t=indexedDB.open(Dh,Bv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Vr,{keyPath:Mh})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Vr)?e(i):(i.close(),await Vv(),e(await Wa()))})})}async function Lh(t,e,n){const i=qr(t,!0).put({[Mh]:e,value:n});return new As(i).toPromise()}async function qv(t,e){const n=qr(t,!1).get(e),i=await new As(n).toPromise();return i===void 0?null:i.value}function $h(t,e){const n=qr(t,!0).delete(e);return new As(n).toPromise()}const Gv=800,Kv=3;class Fh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Kv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Br._getInstance(Hv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Wv(),!this.activeServiceWorker)return;this.sender=new Uv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wa();return await Lh(e,Hr,"1"),await $h(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Lh(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>qv(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$h(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=qr(s,!1).getAll();return new As(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fh.type="LOCAL";const Yv=Fh;new Is(3e4,6e4);/**
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
 */function Qv(t,e){return e?sn(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends Fa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jv(t){return kh(t.auth,new za(t),t.bypassAuthState)}function Xv(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Tv(n,new za(t),t.bypassAuthState)}async function Zv(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Cv(n,new za(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jv;case"linkViaPopup":case"linkViaRedirect":return Zv;case"reauthViaPopup":case"reauthViaRedirect":return Xv;default:wt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Is(2e3,1e4);class Mi extends Uh{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Mi.currentPopupAction&&Mi.currentPopupAction.cancel(),Mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ey.get())};e()}}Mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="pendingRedirect",Gr=new Map;class ny extends Uh{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const i=await iy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iy(t,e){const n=oy(e),i=ry(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function sy(t,e){Gr.set(t._key(),e)}function ry(t){return sn(t._redirectPersistence)}function oy(t){return jr(ty,t.config.apiKey,t.name)}async function ay(t,e,n=!1){if(lt(t.app))return Promise.reject(Zt(t));const i=Yn(t),s=Qv(i,e),o=await new ny(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=600*1e3;class cy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Wh(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ly&&this.cachedEventUids.clear(),this.cachedEventUids.has(jh(e))}saveEventToCache(e){this.cachedEventUids.add(jh(e)),this.lastProcessedEventTime=Date.now()}}function jh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wh({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function uy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(t,e={}){return nn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fy=/^https?/;async function py(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hy(t);for(const n of e)try{if(_y(n))return}catch{}wt(t,"unauthorized-domain")}function _y(t){const e=Pa(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!fy.test(n))return!1;if(dy.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const my=new Is(3e4,6e4);function zh(){const t=Ut().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gy(t){return new Promise((e,n)=>{function i(){zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zh(),n(Ft(t,"network-request-failed"))},timeout:my.get()})}if(Ut().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ut().gapi?.load)i();else{const s=ov("iframefcb");return Ut()[s]=()=>{gapi.load?i():n(Ft(t,"network-request-failed"))},yh(`${rv()}?onload=${s}`).catch(r=>n(r))}}).catch(e=>{throw Kr=null,e})}let Kr=null;function vy(t){return Kr=Kr||gy(t),Kr}/**
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
 */const yy=new Is(5e3,15e3),by="__/auth/iframe",wy="emulator/auth/iframe",Ey={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Iy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cy(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xa(e,wy):`https://${t.config.authDomain}/${by}`,i={apiKey:e.apiKey,appName:t.name,v:Ri},s=Iy.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ki(i).slice(1)}`}async function Ty(t){const e=await vy(t),n=Ut().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Cy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ey,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Ut().setTimeout(()=>{r(o)},yy.get());function l(){Ut().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ky=500,Ay=600,Ry="_blank",Ny="http://localhost";class Hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Py(t,e,n,i=ky,s=Ay){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...Sy,width:i.toString(),height:s.toString(),top:r,left:o},c=Ue().toLowerCase();n&&(a=hh(c)?Ry:n),ch(c)&&(e=e||Ny,l.scrollbars="yes");const h=Object.entries(l).reduce((u,[f,p])=>`${u}${f}=${p},`,"");if(Qg(c)&&a!=="_self")return xy(e||"",a),new Hh(null);const d=window.open(e||"",a,h);O(d,t,"popup-blocked");try{d.focus()}catch{}return new Hh(d)}function xy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Oy="__/auth/handler",Dy="emulator/auth/handler",My=encodeURIComponent("fac");async function Bh(t,e,n,i,s,r){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ri,eventId:s};if(e instanceof Ch){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ma(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ks){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${My}=${encodeURIComponent(l)}`:"";return`${Ly(t)}?${ki(a).slice(1)}${c}`}function Ly({config:t}){return t.emulator?xa(t,Dy):`https://${t.authDomain}/${Oy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="webStorageSupport";class $y{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xh,this._completeRedirectFn=ay,this._overrideRedirectResult=sy}async _openPopup(e,n,i,s){tn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await Bh(e,n,i,Pa(),s);return Py(e,r,ja())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Bh(e,n,i,Pa(),s);return jv(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(tn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Ty(e),i=new cy(e);return n.register("authEvent",s=>(O(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ha,{type:Ha},s=>{const r=s?.[0]?.[Ha];r!==void 0&&n(!!r),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=py(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mh()||uh()||La()}}const Fy=$y;var Vh="@firebase/auth",qh="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wy(t){Ai(new Gn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gh(t)},c=new nv(i,s,r,l);return dv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ai(new Gn("auth-internal",e=>{const n=Yn(e.getProvider("auth").getImmediate());return(i=>new Uy(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Vh,qh,jy(t)),En(Vh,qh,"esm2020")}/**
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
 */const zy=Au("authIdTokenMaxAge")||300;let Gh=null;const Hy=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>zy)return;const s=n?.token;Gh!==s&&(Gh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function By(t=Hu()){const e=Aa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hv(t,{popupRedirectResolver:Fy,persistence:[Yv,$v,xh]}),i=Au("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Hy(r.toString());xv(n,o,()=>o(n.currentUser)),Pv(n,a=>o(a))}}const s=Su("auth");return s&&fv(n,`http://${s}`),n}function Vy(){return document.getElementsByTagName("head")?.[0]??document}iv({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Ft("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Vy().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Wy("Browser");const Kh="@firebase/database",Yh="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qh="";function qy(t){Qh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ys(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Gy(e)}}catch{}return new Ky},Xn=Jh("localStorage"),Yy=Jh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new va("@firebase/database"),Qy=(function(){let t=1;return function(){return t++}})(),Xh=function(t){const e=ym(t),n=new _m;n.update(e);const i=n.digest();return fa.encodeByteArray(i)},Rs=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Rs.apply(null,i):typeof i=="object"?e+=ve(i):e+=i,e+=" "}return e};let Ns=null,Zh=!0;const Jy=function(t,e){I(!0,"Can't turn on custom loggers persistently."),Li.logLevel=Q.VERBOSE,Ns=Li.log.bind(Li)},ke=function(...t){if(Zh===!0&&(Zh=!1,Ns===null&&Yy.get("logging_enabled")===!0&&Jy()),Ns){const e=Rs.apply(null,t);Ns(e)}},Ps=function(t){return function(...e){ke(t,...e)}},Ba=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rs(...t);Li.error(e)},rn=function(...t){const e=`FIREBASE FATAL ERROR: ${Rs(...t)}`;throw Li.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+Rs(...t);Li.warn(e)},Xy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Va=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Zy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$i="[MIN_NAME]",Zn="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===$i||e===Zn)return-1;if(e===$i||t===Zn)return 1;{const n=nd(t),i=nd(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},eb=function(t,e){return t===e?0:t<e?-1:1},xs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},qa=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ve(e[i]),n+=":",n+=qa(t[e[i]]);return n+="}",n},ed=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Ae(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const td=function(t){I(!Va(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(h.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},tb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ib(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const sb=new RegExp("^-?(0*)\\d{1,10}$"),rb=-2147483648,ob=2147483647,nd=function(t){if(sb.test(t)){const e=Number(t);if(e>=rb&&e<=ob)return e}return null},Fi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},ab=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Os=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lb{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,lt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class Yr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="5",id="v",sd="s",rd="r",od="f",ad=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ld="ls",cd="p",Ka="ac",ud="websocket",hd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ub(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fd(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let i;if(e===ud)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hd)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ub(t)&&(n.ns=t.namespace);const s=[];return Ae(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.counters_={}}incrementCounter(e,n=1){$t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return K_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={},Qa={};function Ja(t){const e=t.toString();return Ya[e]||(Ya[e]=new hb),Ya[e]}function db(t,e){const n=t.toString();return Qa[n]||(Qa[n]=e()),Qa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Fi(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="start",pb="close",_b="pLPCommand",mb="pRTLPCB",_d="id",md="pw",gd="ser",gb="cb",vb="seg",yb="ts",bb="d",wb="dframe",vd=1870,yd=30,Eb=vd-yd,Ib=25e3,Cb=3e4;class Ui{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ps(e),this.stats_=Ja(n),this.urlFn=l=>(this.appCheckToken&&(l[Ka]=this.appCheckToken),fd(n,hd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cb)),Zy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xa((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pd)this.id=a,this.password=l;else if(o===pb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[pd]="t",i[gd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[gb]=this.scriptTagHolder.uniqueCallbackIdentifier),i[id]=Ga,this.transportSessionId&&(i[sd]=this.transportSessionId),this.lastSessionId&&(i[ld]=this.lastSessionId),this.applicationId&&(i[cd]=this.applicationId),this.appCheckToken&&(i[Ka]=this.appCheckToken),typeof location<"u"&&location.hostname&&ad.test(location.hostname)&&(i[rd]=od);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ui.forceAllow_=!0}static forceDisallow(){Ui.forceDisallow_=!0}static isAvailable(){return Ui.forceAllow_?!0:!Ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tb()&&!nb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Cu(n),s=ed(i,Eb);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[wb]="t",i[_d]=e,i[md]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xa{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qy(),window[_b+this.uniqueCallbackIdentifier]=e,window[mb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ke("frame writing exception"),a.stack&&ke(a.stack),ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_d]=this.myID,e[md]=this.myPW,e[gd]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yd+i.length<=vd;){const o=this.pendingSegs.shift();i=i+"&"+vb+s+"="+o.seg+"&"+yb+s+"="+o.ts+"&"+bb+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Ib)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=16384,Sb=45e3;let Qr=null;typeof MozWebSocket<"u"?Qr=MozWebSocket:typeof WebSocket<"u"&&(Qr=WebSocket);class It{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ps(this.connId),this.stats_=Ja(n),this.connURL=It.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[id]=Ga,typeof location<"u"&&location.hostname&&ad.test(location.hostname)&&(o[rd]=od),n&&(o[sd]=n),i&&(o[ld]=i),s&&(o[Ka]=s),r&&(o[cd]=r),fd(e,ud,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let i;am(),this.mySock=new Qr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){It.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Qr!==null&&!It.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ys(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ed(n,Tb);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}It.responsesRequiredToBeHealthy=2,It.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{static get ALL_TRANSPORTS(){return[Ui,It]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=It&&It.isAvailable();let i=n&&!It.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[It];else{const s=this.transports_=[];for(const r of Ds.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ds.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=6e4,Ab=5e3,Rb=10*1024,Nb=100*1024,Za="t",bd="d",Pb="s",wd="r",xb="e",Ed="o",Id="a",Cd="n",Td="p",Ob="h";class Db{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ps("c:"+this.id+":"),this.transportManager_=new Ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Os(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Nb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Za in e){const n=e[Za];n===Id?this.upgradeIfSecondaryHealthy_():n===wd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ed&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xs("t",e),i=xs("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Td,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Id,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xs("t",e),i=xs("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xs(Za,e);if(bd in e){const i=e[bd];if(n===Ob){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Cd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Pb?this.onConnectionShutdown_(i):n===wd?this.onReset_(i):n===xb?Ba("Server Error: "+i):n===Ed?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ba("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ga!==i&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Os(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Os(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ab))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Td,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends kd{static getInstance(){return new Jr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_a()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=32,Rd=768;class J{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new J("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rn(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new J(t.pieces_,e)}function el(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Mb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ms(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new J(e,0)}function le(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof J)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new J(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=U(t),i=U(e);if(n===null)return e;if(n===i)return We(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Lb(t,e){const n=Ms(t,0),i=Ms(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=ei(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function tl(t,e){if(Rn(t)!==Rn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ct(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Rn(t)>Rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class $b{constructor(e,n){this.errorPrefix_=n,this.parts_=Ms(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Or(this.parts_[i]);Pd(this)}}function Fb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Or(e),Pd(t)}function Ub(t){const e=t.parts_.pop();t.byteLength_-=Or(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pd(t){if(t.byteLength_>Rd)throw new Error(t.errorPrefix_+"has a key path longer than "+Rd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ad)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ad+") or object contains a cycle "+ti(t))}function ti(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends kd{static getInstance(){return new nl}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=1e3,jb=300*1e3,xd=30*1e3,Wb=1.3,zb=3e4,Hb="server_kill",Od=3;class on extends Sd{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=on.nextPersistentConnectionId_++,this.log_=Ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ls,this.maxReconnectDelay_=jb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(ve(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ms,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;on.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$t(e,"w")){const i=Si(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fm(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ba("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zb&&(this.reconnectDelay_=Ls),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Wb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+on.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new Db(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{je(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Hb)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&je(d),l())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ma(this.interruptReasons_)&&(this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>qa(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new J(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Od&&(this.reconnectDelay_=xd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Od&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qh.replace(/\./g,"-")]=1,_a()?e["framework.cordova"]=1:xu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jr.getInstance().currentlyOnline();return ma(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0,on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new j($i,e),s=new j($i,n);return this.compare(i,s)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;class Dd extends Xr{static get __EMPTY_NODE(){return Zr}static set __EMPTY_NODE(e){Zr=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Zn,Zr)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Zr)}toString(){return".key"}}const ji=new Dd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??we.RED,this.left=s??Ge.EMPTY_NODE,this.right=r??Ge.EMPTY_NODE}copy(e,n,i,s,r){return new we(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0,we.BLACK=!1;class Bb{copy(e,n,i,s,r){return this}insert(e,n,i){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new eo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new eo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new eo(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new Bb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t,e){return ei(t.name,e.name)}function il(t,e){return ei(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl;function qb(t){sl=t}const Md=function(t){return typeof t=="number"?"number:"+td(t):"string:"+t},Ld=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$t(e,".sv"),"Priority must be a string or number.")}else I(t===sl||t.isEmpty(),"priority of unexpected type.");I(t===sl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $d;class Ee{static set __childrenNodeConstructor(e){$d=e}static get __childrenNodeConstructor(){return $d}constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ld(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:U(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=U(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||Rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Md(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=td(this.value_):e+=this.value_,this.lazyHash_=Xh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(i);return I(s>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd,Ud;function Gb(t){Fd=t}function Kb(t){Ud=t}class Yb extends Xr{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Zn,new Ee("[PRIORITY-POST]",Ud))}makePost(e,n){const i=Fd(e);return new j(n,new Ee("[PRIORITY-POST]",i))}toString(){return".priority"}}const ce=new Yb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=Math.log(2);class Jb{constructor(e){const n=r=>parseInt(Math.log(r)/Qb,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const to=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let d,u;if(h===0)return null;if(h===1)return d=t[l],u=n?n(d):d,new we(u,d.node,we.BLACK,null,null);{const f=parseInt(h/2,10)+l,p=s(l,f),g=s(f+1,c);return d=t[f],u=n?n(d):d,new we(u,d.node,we.BLACK,p,g)}},r=function(l){let c=null,h=null,d=t.length;const u=function(p,g){const b=d-p,T=d;d-=p;const C=s(b+1,T),S=t[b],k=n?n(S):S;f(new we(k,S.node,g,null,C))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),b=Math.pow(2,l.count-(p+1));g?u(b,we.BLACK):(u(b,we.BLACK),u(b,we.RED))}return h},o=new Jb(t.length),a=r(o);return new Ge(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;const Wi={};class an{static get Default(){return I(Wi&&ce,"ChildrenNode.ts has not been loaded"),rl=rl||new an({".priority":Wi},{".priority":ce}),rl}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return $t(this.indexSet_,e.toString())}addIndex(e,n){I(e!==ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=to(i,e.getCompare()):a=Wi;const l=e.toString(),c={...this.indexSet_};c[l]=e;const h={...this.indexes_};return h[l]=a,new an(h,c)}addToIndexes(e,n){const i=Pr(this.indexes_,(s,r)=>{const o=Si(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),s===Wi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),to(a,o.getCompare())}else return Wi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new an(i,this.indexSet_)}removeFromIndexes(e,n){const i=Pr(this.indexes_,s=>{if(s===Wi)return s;{const r=n.get(e.name);return r?s.remove(new j(e.name,r)):s}});return new an(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s;class D{static get EMPTY_NODE(){return $s||($s=new D(new Ge(il),null,an.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ld(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new j(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?$s:this.priorityNode_;return new D(s,o,r)}}updateChild(e,n){const i=U(e);if(i===null)return n;{I(U(e)!==".priority"||Rn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(X(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(ce,(o,a)=>{n[o]=a.val(e),i++,r&&D.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Md(this.getPriority().val())+":"),this.forEachChild(ce,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Xh(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,j.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fs?-1:0}withIndex(e){if(e===ji||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ce),s=n.getIterator(ce);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ji?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Xb extends D{constructor(){super(new Ge(il),D.EMPTY_NODE,an.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Fs=new Xb;Object.defineProperties(j,{MIN:{value:new j($i,D.EMPTY_NODE)},MAX:{value:new j(Zn,Fs)}}),Dd.__EMPTY_NODE=D.EMPTY_NODE,Ee.__childrenNodeConstructor=D,qb(Fs),Kb(Fs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=!0;function ye(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,ye(e))}if(!(t instanceof Array)&&Zb){const n=[];let i=!1;if(Ae(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ye(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return D.EMPTY_NODE;const r=to(n,Vb,o=>o.name,il);if(i){const o=to(n,ce.getCompare());return new D(r,ye(e),new an({".priority":o},{".priority":ce}))}else return new D(r,ye(e),an.Default)}else{let n=D.EMPTY_NODE;return Ae(t,(i,s)=>{if($t(t,i)&&i.substring(0,1)!=="."){const r=ye(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(ye(e))}}Gb(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew extends Xr{constructor(e){super(),this.indexPath_=e,I(!z(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?ei(e.name,n.name):r}makePost(e,n){const i=ye(e),s=D.EMPTY_NODE.updateChild(this.indexPath_,i);return new j(n,s)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Fs);return new j(Zn,e)}toString(){return Ms(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw extends Xr{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ei(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const i=ye(e);return new j(n,i)}toString(){return".value"}}const nw=new tw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){return{type:"value",snapshotNode:t}}function zi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Us(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function js(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Us(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(zi(n,i)):o.trackChildChange(js(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ce,(s,r)=>{n.hasChild(s)||i.trackChildChange(Us(s,r))}),n.isLeafNode()||n.forEachChild(ce,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(js(s,r,o))}else i.trackChildChange(zi(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.indexedFilter_=new ol(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ws.getStartPost_(e),this.endPost_=Ws.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new j(n,i))||(i=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=D.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(D.EMPTY_NODE);const r=this;return n.forEachChild(ce,(o,a)=>{r.matches(new j(o,a))||(s=s.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new j(n,i))||(i=D.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=D.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(D.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,f)=>d(f,u)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new j(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,l);if(h&&!i.isEmpty()&&f>=0)return r?.trackChildChange(js(n,i,d)),a.updateImmediateChild(n,i);{r?.trackChildChange(Us(n,d));const g=a.updateImmediateChild(n,D.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r?.trackChildChange(zi(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Us(c.name,c.node)),r.trackChildChange(zi(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$i}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new al;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rw(t){return t.loadsAllData()?new ol(t.getIndex()):t.hasLimit()?new sw(t):new Ws(t)}function Wd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===nw?n="$value":t.index_===ji?n="$key":(I(t.index_ instanceof ew,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=ve(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+ve(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=ve(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Sd{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ps("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=no.getListenId_(e,i),a={};this.listens_[o]=a;const l=Wd(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Si(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,n){const i=no.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Wd(e._queryParams),i=e._path.toString(),s=new ms;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ki(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ys(a.responseText)}catch{je("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(){return{value:null,children:new Map}}function Hd(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=U(e);t.children.has(i)||t.children.set(i,io());const s=t.children.get(i);e=X(e),Hd(s,e,n)}}function ll(t,e,n){t.value!==null?n(e,t.value):aw(t,(i,s)=>{const r=new J(e.toString()+"/"+i);ll(s,r,n)})}function aw(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ae(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=10*1e3,cw=30*1e3,uw=300*1e3;class hw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new lw(e);const i=Bd+(cw-Bd)*Math.random();Os(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ae(e,(s,r)=>{r>0&&$t(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Os(this.reportStats_.bind(this),Math.floor(Math.random()*2*uw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ct||(Ct={}));function cl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ul(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ct.ACK_USER_WRITE,this.source=cl()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new J(e));return new so(K(),n,this.revert)}}else return I(U(this.path)===e,"operationForChild called for unrelated child."),new so(X(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.source=e,this.path=n,this.type=Ct.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new zs(this.source,K()):new zs(this.source,X(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ct.OVERWRITE}operationForChild(e){return z(this.path)?new ni(this.source,K(),this.snap.getImmediateChild(e)):new ni(this.source,X(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ct.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new J(e));return n.isEmpty()?null:n.value?new ni(this.source,K(),n.value):new Hi(this.source,K(),n)}else return I(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hi(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fw(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(iw(o.childName,o.snapshotNode))}),Hs(t,s,"child_removed",e,i,n),Hs(t,s,"child_added",e,i,n),Hs(t,s,"child_moved",r,i,n),Hs(t,s,"child_changed",e,i,n),Hs(t,s,"value",e,i,n),s}function Hs(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>_w(t,a,l)),o.forEach(a=>{const l=pw(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function pw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _w(t,e,n){if(e.childName==null||n.childName==null)throw Ci("Should only compare child_ events.");const i=new j(e.childName,e.snapshotNode),s=new j(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t,e){return{eventCache:t,serverCache:e}}function Bs(t,e,n,i){return ro(new Nn(e,n,i),t.serverCache)}function Vd(t,e,n,i){return ro(t.eventCache,new Nn(e,n,i))}function oo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ii(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;const mw=()=>(dl||(dl=new Ge(eb)),dl);class Z{static fromObject(e){let n=new Z(null);return Ae(e,(i,s)=>{n=n.set(new J(i),s)}),n}constructor(e,n=mw()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(z(e))return null;{const i=U(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(X(e),n);return r!=null?{path:le(new J(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=U(e),i=this.children.get(n);return i!==null?i.subtree(X(e)):new Z(null)}}set(e,n){if(z(e))return new Z(n,this.children);{const i=U(e),r=(this.children.get(i)||new Z(null)).set(X(e),n),o=this.children.insert(i,r);return new Z(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=U(e),i=this.children.get(n);if(i){const s=i.remove(X(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Z(null):new Z(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=U(e),i=this.children.get(n);return i?i.get(X(e)):null}}setTree(e,n){if(z(e))return n;{const i=U(e),r=(this.children.get(i)||new Z(null)).setTree(X(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Z(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(le(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(z(e))return null;{const r=U(e),o=this.children.get(r);return o?o.findOnPath_(X(e),le(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,i){if(z(e))return this;{this.value&&i(n,this.value);const s=U(e),r=this.children.get(s);return r?r.foreachOnPath_(X(e),le(n,s),i):new Z(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(le(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new Z(null))}}function Vs(t,e,n){if(z(e))return new Tt(new Z(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=We(s,e);return r=r.updateChild(o,n),new Tt(t.writeTree_.set(s,r))}else{const s=new Z(n),r=t.writeTree_.setTree(e,s);return new Tt(r)}}}function fl(t,e,n){let i=t;return Ae(n,(s,r)=>{i=Vs(i,le(e,s),r)}),i}function qd(t,e){if(z(e))return Tt.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new Tt(n)}}function pl(t,e){return si(t,e)!=null}function si(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function Gd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(i,s)=>{e.push(new j(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new j(i,s.value))}),e}function Pn(t,e){if(z(e))return t;{const n=si(t,e);return n!=null?new Tt(new Z(n)):new Tt(t.writeTree_.subtree(e))}}function _l(t){return t.writeTree_.isEmpty()}function Bi(t,e){return Kd(K(),t.writeTree_,e)}function Kd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Kd(le(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(le(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e){return Zd(e,t)}function gw(t,e,n,i,s){I(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Vs(t.visibleWrites,e,n)),t.lastWriteId=i}function vw(t,e,n,i){I(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=fl(t.visibleWrites,e,n),t.lastWriteId=i}function yw(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function bw(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ww(a,i.path)?s=!1:ct(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Ew(t),!0;if(i.snap)t.visibleWrites=qd(t.visibleWrites,i.path);else{const a=i.children;Ae(a,l=>{t.visibleWrites=qd(t.visibleWrites,le(i.path,l))})}return!0}else return!1}function ww(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(le(t.path,n),e))return!0;return!1}function Ew(t){t.visibleWrites=Yd(t.allWrites,Iw,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Iw(t){return t.visible}function Yd(t,e,n){let i=Tt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ct(n,o)?(a=We(n,o),i=Vs(i,a,r.snap)):ct(o,n)&&(a=We(o,n),i=Vs(i,K(),r.snap.getChild(a)));else if(r.children){if(ct(n,o))a=We(n,o),i=fl(i,a,r.children);else if(ct(o,n))if(a=We(o,n),z(a))i=fl(i,K(),r.children);else{const l=Si(r.children,U(a));if(l){const c=l.getChild(X(a));i=Vs(i,K(),c)}}}else throw Ci("WriteRecord should have .snap or .children")}}return i}function Qd(t,e,n,i,s){if(!i&&!s){const r=si(t.visibleWrites,e);if(r!=null)return r;{const o=Pn(t.visibleWrites,e);if(_l(o))return n;if(n==null&&!pl(o,K()))return null;{const a=n||D.EMPTY_NODE;return Bi(o,a)}}}else{const r=Pn(t.visibleWrites,e);if(!s&&_l(r))return n;if(!s&&n==null&&!pl(r,K()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ct(c.path,e)||ct(e,c.path))},a=Yd(t.allWrites,o,e),l=n||D.EMPTY_NODE;return Bi(a,l)}}}function Cw(t,e,n){let i=D.EMPTY_NODE;const s=si(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ce,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Pn(t.visibleWrites,e);return n.forEachChild(ce,(o,a)=>{const l=Bi(Pn(r,new J(o)),a);i=i.updateImmediateChild(o,l)}),Gd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Pn(t.visibleWrites,e);return Gd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Tw(t,e,n,i,s){I(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=le(e,n);if(pl(t.visibleWrites,r))return null;{const o=Pn(t.visibleWrites,r);return _l(o)?s.getChild(n):Bi(o,s.getChild(n))}}function Sw(t,e,n,i){const s=le(e,n),r=si(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Pn(t.visibleWrites,s);return Bi(o,i.getNode().getImmediateChild(n))}else return null}function kw(t,e){return si(t.visibleWrites,e)}function Aw(t,e,n,i,s,r,o){let a;const l=Pn(t.visibleWrites,e),c=si(l,K());if(c!=null)a=c;else if(n!=null)a=Bi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=u.getNext();for(;f&&h.length<s;)d(f,i)!==0&&h.push(f),f=u.getNext();return h}else return[]}function Rw(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function lo(t,e,n,i){return Qd(t.writeTree,t.treePath,e,n,i)}function ml(t,e){return Cw(t.writeTree,t.treePath,e)}function Jd(t,e,n,i){return Tw(t.writeTree,t.treePath,e,n,i)}function co(t,e){return kw(t.writeTree,le(t.treePath,e))}function Nw(t,e,n,i,s,r){return Aw(t.writeTree,t.treePath,e,n,i,s,r)}function gl(t,e,n){return Sw(t.writeTree,t.treePath,e,n)}function Xd(t,e){return Zd(le(t.treePath,e),t.writeTree)}function Zd(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,js(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Us(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,zi(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,js(i,e.snapshotNode,s.oldSnap));else throw Ci("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const ef=new xw;class vl{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Nn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gl(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ii(this.viewCache_),r=Nw(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t){return{filter:t}}function Dw(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Mw(t,e,n,i,s){const r=new Pw;let o,a;if(n.type===Ct.OVERWRITE){const c=n;c.source.fromUser?o=yl(t,e,c.path,c.snap,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=uo(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Ct.MERGE){const c=n;c.source.fromUser?o=$w(t,e,c.path,c.children,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=bl(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Ct.ACK_USER_WRITE){const c=n;c.revert?o=jw(t,e,c.path,i,s,r):o=Fw(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Ct.LISTEN_COMPLETE)o=Uw(t,e,n.path,i,r);else throw Ci("Unknown operation type: "+n.type);const l=r.getChanges();return Lw(e,o,l),{viewCache:o,changes:l}}function Lw(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=oo(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(jd(oo(e)))}}function tf(t,e,n,i,s,r){const o=e.eventCache;if(co(i,n)!=null)return e;{let a,l;if(z(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ii(e),h=c instanceof D?c:D.EMPTY_NODE,d=ml(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=lo(i,ii(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=U(n);if(c===".priority"){I(Rn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=Jd(i,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=X(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Jd(i,n,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(h,u):d=o.getNode().getImmediateChild(c)}else d=gl(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,h,s,r):a=o.getNode()}}return Bs(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function uo(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),f,null)}else{const f=U(n);if(!l.isCompleteForPath(n)&&Rn(n)>1)return e;const p=X(n),b=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=h.updatePriority(l.getNode(),b):c=h.updateChild(l.getNode(),f,b,p,ef,null)}const d=Vd(e,c,l.isFullyInitialized()||z(n),h.filtersNodes()),u=new vl(s,d,r);return tf(t,d,n,s,u,a)}function yl(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new vl(s,e,r);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Bs(e,c,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Bs(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=X(n),f=a.getNode().getImmediateChild(d);let p;if(z(u))p=i;else{const g=h.getCompleteChild(d);g!=null?el(u)===".priority"&&g.getChild(Nd(u)).isEmpty()?p=g:p=g.updateChild(u,i):p=D.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),d,p,u,h,o);l=Bs(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function nf(t,e){return t.eventCache.isCompleteForChild(e)}function $w(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=le(n,l);nf(e,U(h))&&(a=yl(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=le(n,l);nf(e,U(h))||(a=yl(t,a,h,c,s,r,o))}),a}function sf(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function bl(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;z(n)?c=i:c=new Z(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=sf(t,f,u);l=uo(t,l,new J(d),p,s,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const f=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=sf(t,p,u);l=uo(t,l,new J(d),g,s,r,o,a)}}),l}function Fw(t,e,n,i,s,r,o){if(co(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return uo(t,e,n,l.getNode().getChild(n),s,r,a,o);if(z(n)){let c=new Z(null);return l.getNode().forEachChild(ji,(h,d)=>{c=c.set(new J(h),d)}),bl(t,e,n,c,s,r,a,o)}else return e}else{let c=new Z(null);return i.foreach((h,d)=>{const u=le(n,h);l.isCompleteForPath(u)&&(c=c.set(h,l.getNode().getChild(u)))}),bl(t,e,n,c,s,r,a,o)}}function Uw(t,e,n,i,s){const r=e.serverCache,o=Vd(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return tf(t,o,n,i,ef,s)}function jw(t,e,n,i,s,r){let o;if(co(i,n)!=null)return e;{const a=new vl(i,e,s),l=e.eventCache.getNode();let c;if(z(n)||U(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=lo(i,ii(e));else{const d=e.serverCache.getNode();I(d instanceof D,"serverChildren would be complete if leaf node"),h=ml(i,d)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=U(n);let d=gl(i,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=t.filter.updateChild(l,h,d,X(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,D.EMPTY_NODE,X(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lo(i,ii(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||co(i,K())!=null,Bs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ol(i.getIndex()),r=rw(i);this.processor_=Ow(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(D.EMPTY_NODE,a.getNode(),null),h=new Nn(l,o.isFullyInitialized(),s.filtersNodes()),d=new Nn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ro(d,h),this.eventGenerator_=new dw(this.query_)}get query(){return this.query_}}function zw(t){return t.viewCache_.serverCache.getNode()}function Hw(t){return oo(t.viewCache_)}function Bw(t,e){const n=ii(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function rf(t){return t.eventRegistrations_.length===0}function Vw(t,e){t.eventRegistrations_.push(e)}function of(t,e,n){const i=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function af(t,e,n,i){e.type===Ct.MERGE&&e.source.queryId!==null&&(I(ii(t.viewCache_),"We should always have a full cache before handling merges"),I(oo(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Mw(t.processor_,s,e,n,i);return Dw(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,lf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function qw(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(r,o)=>{i.push(zi(r,o))}),n.isFullyInitialized()&&i.push(jd(n.getNode())),lf(t,i,n.getNode(),e)}function lf(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return fw(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;class cf{constructor(){this.views=new Map}}function Gw(t){I(!ho,"__referenceConstructor has already been defined"),ho=t}function Kw(){return I(ho,"Reference.ts has not been loaded"),ho}function Yw(t){return t.views.size===0}function wl(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return I(r!=null,"SyncTree gave us an op for an invalid query."),af(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(af(o,e,n,i));return r}}function uf(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=lo(n,s?i:null),l=!1;a?l=!0:i instanceof D?(a=ml(n,i),l=!1):(a=D.EMPTY_NODE,l=!1);const c=ro(new Nn(a,l,!1),new Nn(i,s,!1));return new Ww(e,c)}return o}function Qw(t,e,n,i,s,r){const o=uf(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Vw(o,n),qw(o,n)}function Jw(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=On(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(of(c,n,i)),rf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(of(l,n,i)),rf(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!On(t)&&r.push(new(Kw())(e._repo,e._path)),{removed:r,events:o}}function hf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const i of t.views.values())n=n||Bw(i,e);return n}function df(t,e){if(e._queryParams.loadsAllData())return fo(t);{const i=e._queryIdentifier;return t.views.get(i)}}function ff(t,e){return df(t,e)!=null}function On(t){return fo(t)!=null}function fo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;function Xw(t){I(!po,"__referenceConstructor has already been defined"),po=t}function Zw(){return I(po,"Reference.ts has not been loaded"),po}let eE=1;class pf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=Rw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _f(t,e,n,i,s){return gw(t.pendingWriteTree_,e,n,i,s),s?Vi(t,new ni(cl(),e,n)):[]}function tE(t,e,n,i){vw(t.pendingWriteTree_,e,n,i);const s=Z.fromObject(n);return Vi(t,new Hi(cl(),e,s))}function Dn(t,e,n=!1){const i=yw(t.pendingWriteTree_,e);if(bw(t.pendingWriteTree_,e)){let r=new Z(null);return i.snap!=null?r=r.set(K(),!0):Ae(i.children,o=>{r=r.set(new J(o),!0)}),Vi(t,new so(i.path,r,n))}else return[]}function qs(t,e,n){return Vi(t,new ni(ul(),e,n))}function nE(t,e,n){const i=Z.fromObject(n);return Vi(t,new Hi(ul(),e,i))}function iE(t,e){return Vi(t,new zs(ul(),e))}function sE(t,e,n){const i=Cl(t,n);if(i){const s=Tl(i),r=s.path,o=s.queryId,a=We(r,e),l=new zs(hl(o),a);return Sl(t,r,l)}else return[]}function _o(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ff(o,e))){const l=Jw(o,e,n,i);Yw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(u,f)=>On(f));if(h&&!d){const u=t.syncPointTree_.subtree(r);if(!u.isEmpty()){const f=aE(u);for(let p=0;p<f.length;++p){const g=f[p],b=g.query,T=yf(t,g);t.listenProvider_.startListening(Ks(b),Gs(t,b),T.hashFn,T.onComplete)}}}!d&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(Ks(e),null):c.forEach(u=>{const f=t.queryToTagMap.get(mo(u));t.listenProvider_.stopListening(Ks(u),f)}))}lE(t,c)}return a}function mf(t,e,n,i){const s=Cl(t,i);if(s!=null){const r=Tl(s),o=r.path,a=r.queryId,l=We(o,e),c=new ni(hl(a),l,n);return Sl(t,o,c)}else return[]}function rE(t,e,n,i){const s=Cl(t,i);if(s){const r=Tl(s),o=r.path,a=r.queryId,l=We(o,e),c=Z.fromObject(n),h=new Hi(hl(a),l,c);return Sl(t,o,h)}else return[]}function El(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(u,f)=>{const p=We(u,s);r=r||xn(f,p),o=o||On(f)});let a=t.syncPointTree_.get(s);a?(o=o||On(a),r=r||xn(a,K())):(a=new cf,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=D.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,p)=>{const g=xn(p,K());g&&(r=r.updateImmediateChild(f,g))}));const c=ff(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=mo(e);I(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=cE();t.queryToTagMap.set(u,f),t.tagToQueryMap.set(f,u)}const h=ao(t.pendingWriteTree_,s);let d=Qw(a,e,n,h,r,l);if(!c&&!o&&!i){const u=df(a,e);d=d.concat(uE(t,e,u))}return d}function Il(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=We(o,e),c=xn(a,l);if(c)return c});return Qd(s,e,r,n,!0)}function oE(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const d=We(c,n);i=i||xn(h,d)});let s=t.syncPointTree_.get(n);s?i=i||xn(s,K()):(s=new cf,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Nn(i,!0,!1):null,a=ao(t.pendingWriteTree_,e._path),l=uf(s,e,a,r?o.getNode():D.EMPTY_NODE,r);return Hw(l)}function Vi(t,e){return gf(e,t.syncPointTree_,null,ao(t.pendingWriteTree_,K()))}function gf(t,e,n,i){if(z(t.path))return vf(t,e,n,i);{const s=e.get(K());n==null&&s!=null&&(n=xn(s,K()));let r=[];const o=U(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Xd(i,o);r=r.concat(gf(a,l,c,h))}return s&&(r=r.concat(wl(s,t,i,n))),r}}function vf(t,e,n,i){const s=e.get(K());n==null&&s!=null&&(n=xn(s,K()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Xd(i,o),h=t.operationForChild(o);h&&(r=r.concat(vf(h,a,l,c)))}),s&&(r=r.concat(wl(s,t,i,n))),r}function yf(t,e){const n=e.query,i=Gs(t,n);return{hashFn:()=>(zw(e)||D.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?sE(t,n._path,i):iE(t,n._path);{const r=ib(s,n);return _o(t,n,null,r)}}}}function Gs(t,e){const n=mo(e);return t.queryToTagMap.get(n)}function mo(t){return t._path.toString()+"$"+t._queryIdentifier}function Cl(t,e){return t.tagToQueryMap.get(e)}function Tl(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}}function Sl(t,e,n){const i=t.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const s=ao(t.pendingWriteTree_,e);return wl(i,n,s,null)}function aE(t){return t.fold((e,n,i)=>{if(n&&On(n))return[fo(n)];{let s=[];return n&&(s=hf(n)),Ae(i,(r,o)=>{s=s.concat(o)}),s}})}function Ks(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Zw())(t._repo,t._path):t}function lE(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=mo(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function cE(){return eE++}function uE(t,e,n){const i=e._path,s=Gs(t,e),r=yf(t,n),o=t.listenProvider_.startListening(Ks(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)I(!On(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!z(c)&&h&&On(h))return[fo(h).query];{let u=[];return h&&(u=u.concat(hf(h).map(f=>f.query))),Ae(d,(f,p)=>{u=u.concat(p)}),u}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(Ks(h),Gs(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kl(n)}node(){return this.node_}}class Al{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new Al(this.syncTree_,n)}node(){return Il(this.syncTree_,this.path_)}}const hE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bf=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fE(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},fE=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const s=e.node();if(I(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},wf=function(t,e,n,i){return Rl(e,new Al(n,t),i)},Ef=function(t,e,n){return Rl(t,new kl(e),n)};function Rl(t,e,n){const i=t.getPriority().val(),s=bf(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=bf(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ee(a,ye(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ee(s))),o.forEachChild(ce,(a,l)=>{const c=Rl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Pl(t,e){let n=e instanceof J?e:new J(e),i=t,s=U(n);for(;s!==null;){const r=Si(i.node.children,s)||{children:{},childCount:0};i=new Nl(s,i,r),n=X(n),s=U(n)}return i}function qi(t){return t.node.value}function If(t,e){t.node.value=e,xl(t)}function Cf(t){return t.node.childCount>0}function pE(t){return qi(t)===void 0&&!Cf(t)}function go(t,e){Ae(t.node.children,(n,i)=>{e(new Nl(n,t,i))})}function Tf(t,e,n,i){n&&e(t),go(t,s=>{Tf(s,e,!0)})}function _E(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ys(t){return new J(t.parent===null?t.name:Ys(t.parent)+"/"+t.name)}function xl(t){t.parent!==null&&mE(t.parent,t.name,t)}function mE(t,e,n){const i=pE(n),s=$t(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,xl(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,xl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=/[\[\].#$\/\u0000-\u001F\u007F]/,vE=/[\[\].#$\u0000-\u001F\u007F]/,Ol=10*1024*1024,Dl=function(t){return typeof t=="string"&&t.length!==0&&!gE.test(t)},Sf=function(t){return typeof t=="string"&&t.length!==0&&!vE.test(t)},yE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sf(t)},bE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Va(t)||t&&typeof t=="object"&&$t(t,".sv")},kf=function(t,e,n,i){i&&e===void 0||vo(xr(t,"value"),e,n)},vo=function(t,e,n){const i=n instanceof J?new $b(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ti(i));if(typeof e=="function")throw new Error(t+"contains a function "+ti(i)+" with contents = "+e.toString());if(Va(e))throw new Error(t+"contains "+e.toString()+" "+ti(i));if(typeof e=="string"&&e.length>Ol/3&&Or(e)>Ol)throw new Error(t+"contains a string greater than "+Ol+" utf8 bytes "+ti(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ae(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Dl(o)))throw new Error(t+" contains an invalid key ("+o+") "+ti(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Fb(i,o),vo(t,a,i),Ub(i)}),s&&r)throw new Error(t+' contains ".value" child '+ti(i)+" in addition to actual children.")}},wE=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Ms(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Dl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Lb);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&ct(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},EE=function(t,e,n,i){const s=xr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Ae(e,(o,a)=>{const l=new J(o);if(vo(s,a,le(n,l)),el(l)===".priority"&&!bE(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),wE(s,r)},Af=function(t,e,n,i){if(!Sf(n))throw new Error(xr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IE=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Af(t,e,n)},Ml=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},CE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!yE(n))throw new Error(xr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yo(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!tl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Rf(t,e,n){yo(t,n),Nf(t,i=>tl(i,e))}function ut(t,e,n){yo(t,n),Nf(t,i=>ct(i,e)||ct(e,i))}function Nf(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(SE(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function SE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ns&&ke("event: "+n.toString()),Fi(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="repo_interrupt",AE=25;class RE{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=io(),this.transactionQueueTree_=new Nl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NE(t,e,n){if(t.stats_=Ja(t.repoInfo_),t.forceRestClient_||ab())t.server_=new no(t.repoInfo_,(i,s,r,o)=>{xf(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Of(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new on(t.repoInfo_,e,(i,s,r,o)=>{xf(t,i,s,r,o)},i=>{Of(t,i)},i=>{PE(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=db(t.repoInfo_,()=>new hw(t.stats_,t.server_)),t.infoData_=new ow,t.infoSyncTree_=new pf({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=qs(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ll(t,"connected",!1),t.serverSyncTree_=new pf({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ut(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Pf(t){const n=t.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bo(t){return hE({timestamp:Pf(t)})}function xf(t,e,n,i,s){t.dataUpdateCount++;const r=new J(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Pr(n,c=>ye(c));o=rE(t.serverSyncTree_,r,l,s)}else{const l=ye(n);o=mf(t.serverSyncTree_,r,l,s)}else if(i){const l=Pr(n,c=>ye(c));o=nE(t.serverSyncTree_,r,l)}else{const l=ye(n);o=qs(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Gi(t,r)),ut(t.eventQueue_,a,o)}function Of(t,e){Ll(t,"connected",e),e===!1&&ME(t)}function PE(t,e){Ae(e,(n,i)=>{Ll(t,n,i)})}function Ll(t,e,n){const i=new J("/.info/"+e),s=ye(n);t.infoData_.updateSnapshot(i,s);const r=qs(t.infoSyncTree_,i,s);ut(t.eventQueue_,i,r)}function $l(t){return t.nextWriteId_++}function xE(t,e,n){const i=oE(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=ye(s).withIndex(e._queryParams.getIndex());El(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=qs(t.serverSyncTree_,e._path,r);else{const a=Gs(t.serverSyncTree_,e);o=mf(t.serverSyncTree_,e._path,r,a)}return ut(t.eventQueue_,e._path,o),_o(t.serverSyncTree_,e,n,null,!0),r},s=>(Qs(t,"get for query "+ve(e)+" failed: "+s),Promise.reject(new Error(s))))}function OE(t,e,n,i,s){Qs(t,"set",{path:e.toString(),value:n,priority:i});const r=bo(t),o=ye(n,i),a=Il(t.serverSyncTree_,e),l=Ef(o,a,r),c=$l(t),h=_f(t.serverSyncTree_,e,l,c,!0);yo(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(u,f)=>{const p=u==="ok";p||je("set at "+e+" failed: "+u);const g=Dn(t.serverSyncTree_,c,!p);ut(t.eventQueue_,e,g),Ul(t,s,u,f)});const d=Wl(t,e);Gi(t,d),ut(t.eventQueue_,d,[])}function DE(t,e,n,i){Qs(t,"update",{path:e.toString(),value:n});let s=!0;const r=bo(t),o={};if(Ae(n,(a,l)=>{s=!1,o[a]=wf(le(e,a),ye(l),t.serverSyncTree_,r)}),s)ke("update() called with empty data.  Don't do anything."),Ul(t,i,"ok",void 0);else{const a=$l(t),l=tE(t.serverSyncTree_,e,o,a);yo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const d=c==="ok";d||je("update at "+e+" failed: "+c);const u=Dn(t.serverSyncTree_,a,!d),f=u.length>0?Gi(t,e):e;ut(t.eventQueue_,f,u),Ul(t,i,c,h)}),Ae(n,c=>{const h=Wl(t,le(e,c));Gi(t,h)}),ut(t.eventQueue_,e,[])}}function ME(t){Qs(t,"onDisconnectEvents");const e=bo(t),n=io();ll(t.onDisconnect_,K(),(s,r)=>{const o=wf(s,r,t.serverSyncTree_,e);Hd(n,s,o)});let i=[];ll(n,K(),(s,r)=>{i=i.concat(qs(t.serverSyncTree_,s,r));const o=Wl(t,s);Gi(t,o)}),t.onDisconnect_=io(),ut(t.eventQueue_,K(),i)}function LE(t,e,n){let i;U(e._path)===".info"?i=El(t.infoSyncTree_,e,n):i=El(t.serverSyncTree_,e,n),Rf(t.eventQueue_,e._path,i)}function Fl(t,e,n){let i;U(e._path)===".info"?i=_o(t.infoSyncTree_,e,n):i=_o(t.serverSyncTree_,e,n),Rf(t.eventQueue_,e._path,i)}function $E(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kE)}function Qs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function Ul(t,e,n,i){e&&Fi(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Df(t,e,n){return Il(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function jl(t,e=t.transactionQueueTree_){if(e||wo(t,e),qi(e)){const n=Lf(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&FE(t,Ys(e),n)}else Cf(e)&&go(e,n=>{jl(t,n)})}function FE(t,e,n){const i=n.map(c=>c.currentWriteId),s=Df(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];I(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=We(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Qs(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let u=0;u<n.length;u++)n[u].status=2,h=h.concat(Dn(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&d.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();wo(t,Pl(t.transactionQueueTree_,e)),jl(t,t.transactionQueueTree_),ut(t.eventQueue_,e,h);for(let u=0;u<d.length;u++)Fi(d[u])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{je("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Gi(t,e)}},o)}function Gi(t,e){const n=Mf(t,e),i=Ys(n),s=Lf(t,n);return UE(t,s,i),i}function UE(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=We(n,l.path);let h=!1,d;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(Dn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=AE)h=!0,d="maxretry",s=s.concat(Dn(t.serverSyncTree_,l.currentWriteId,!0));else{const u=Df(t,l.path,o);l.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){vo("transaction failed: Data returned ",f,l.path);let p=ye(f);typeof f=="object"&&f!=null&&$t(f,".priority")||(p=p.updatePriority(u.getPriority()));const b=l.currentWriteId,T=bo(t),C=Ef(p,u,T);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=C,l.currentWriteId=$l(t),o.splice(o.indexOf(b),1),s=s.concat(_f(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),s=s.concat(Dn(t.serverSyncTree_,b,!0))}else h=!0,d="nodata",s=s.concat(Dn(t.serverSyncTree_,l.currentWriteId,!0))}ut(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}wo(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Fi(i[a]);jl(t,t.transactionQueueTree_)}function Mf(t,e){let n,i=t.transactionQueueTree_;for(n=U(e);n!==null&&qi(i)===void 0;)i=Pl(i,n),e=X(e),n=U(e);return i}function Lf(t,e){const n=[];return $f(t,e,n),n.sort((i,s)=>i.order-s.order),n}function $f(t,e,n){const i=qi(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);go(e,s=>{$f(t,s,n)})}function wo(t,e){const n=qi(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,If(e,n.length>0?n:void 0)}go(e,i=>{wo(t,i)})}function Wl(t,e){const n=Ys(Mf(t,e)),i=Pl(t.transactionQueueTree_,e);return _E(i,s=>{zl(t,s)}),zl(t,i),Tf(i,s=>{zl(t,s)}),n}function zl(t,e){const n=qi(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Dn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?If(e,void 0):n.length=r+1,ut(t.eventQueue_,Ys(e),s);for(let o=0;o<i.length;o++)Fi(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function WE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ff=function(t,e){const n=zE(t),i=n.namespace;n.domain==="firebase.com"&&rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Xy();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new dd(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new J(n.pathString)}},zE=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=jE(t.substring(h,d)));const u=WE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",HE=(function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Uf.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Uf.charAt(e[s]);return I(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class VE{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return z(this._path)?null:el(this._path)}get ref(){return new ln(this._repo,this._path)}get _queryIdentifier(){const e=zd(this._queryParams),n=qa(e);return n==="{}"?"default":n}get _queryObject(){return zd(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof Hl))return!1;const n=this._repo===e._repo,i=tl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Mb(this._path)}}class ln extends Hl{constructor(e,n){super(e,n,new al,!1)}get parent(){const e=Nd(this._path);return e===null?null:new ln(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Js{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new J(e),i=Xs(this.ref,e);return new Js(this._node.getChild(n),i,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Js(s,Xs(this.ref,i),ce)))}hasChild(e){const n=new J(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jt(t,e){return t=Se(t),t._checkNotDeleted("ref"),e!==void 0?Xs(t._root,e):t._root}function Xs(t,e){return t=Se(t),U(t._path)===null?IE("child","path",e):Af("child","path",e),new ln(t._repo,le(t._path,e))}function qE(t,e){t=Se(t),Ml("push",t._path),kf("push",e,t._path,!0);const n=Pf(t._repo),i=HE(n),s=Xs(t,i),r=Xs(t,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function GE(t){return Ml("remove",t._path),Eo(t,null)}function Eo(t,e){t=Se(t),Ml("set",t._path),kf("set",e,t._path,!1);const n=new ms;return OE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Bl(t,e){EE("update",e,t._path);const n=new ms;return DE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function KE(t){t=Se(t);const e=new jf(()=>{}),n=new Io(e);return xE(t._repo,t,n).then(i=>new Js(i,new ln(t._repo,t._path),t._queryParams.getIndex()))}class Io{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new BE("value",this,new Js(e.snapshotNode,new ln(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new VE(this,e,n):null}matches(e){return e instanceof Io?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function YE(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=n,c=(h,d)=>{Fl(t._repo,t,a),l(h,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new jf(n,r||void 0),a=new Io(o);return LE(t._repo,t,a),()=>Fl(t._repo,t,a)}function Co(t,e,n,i){return YE(t,"value",e,n,i)}function Vl(t,e,n){Fl(t._repo,t,null)}Gw(ln),Xw(ln);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="FIREBASE_DATABASE_EMULATOR_HOST",ql={};let JE=!1;function XE(t,e,n,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=Ti(r);t.repoInfo_=new dd(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function ZE(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ff(r,s),a=o.repoInfo,l;typeof process<"u"&&process.env&&(l=process.env[QE]),l?(r=`http://${l}?ns=${a.namespace}`,o=Ff(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new cb(t.name,t.options,e);CE("Invalid Firebase Database URL",o),z(o.path)||rn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=tI(a,t,c,new lb(t,n));return new nI(h,t)}function eI(t,e){const n=ql[e];(!n||n[t.key]!==t)&&rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$E(t),delete n[t.key]}function tI(t,e,n,i){let s=ql[e.name];s||(s={},ql[e.name]=s);let r=s[t.toURLString()];return r&&rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new RE(t,JE,n,i),s[t.toURLString()]=r,r}class nI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ln(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rn("Cannot call "+e+" on a deleted database.")}}function iI(t=Hu(),e){const n=Aa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=em("database");i&&sI(n,...i)}return n}function sI(t,e,n,i={}){t=Se(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&qn(i,r.repoInfo_.emulatorOptions))return;rn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&rn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Yr(Yr.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:tm(i.mockUserToken,t.app.options.projectId);o=new Yr(a)}Ti(e)&&(Ru(e),Pu("Database",!0)),XE(r,s,i,o)}/**
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
 */function rI(t){qy(Ri),Ai(new Gn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ZE(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),En(Kh,Yh,t),En(Kh,Yh,"esm2020")}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)},rI();const Wf=zu({apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"}),Zs=By(Wf),St=iI(Wf),To=ps(null),zf=ps(!0);Ov(Zs,t=>{To.set(t),zf.set(!1)});async function Hf(t,e){try{return await Av(Zs,t,e),{success:!0}}catch(n){return console.error("로그인 오류:",n),{success:!1,error:qf(n.code)}}}async function Bf(t,e,n=""){try{const i=await kv(Zs,t,e);return n&&await Nv(i.user,{displayName:n}),{success:!0}}catch(i){return console.error("회원가입 오류:",i),{success:!1,error:qf(i.code)}}}async function Vf(){try{return await Dv(Zs),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}}function qf(t){return{"auth/invalid-email":"유효하지 않은 이메일 주소입니다.","auth/user-disabled":"비활성화된 계정입니다.","auth/user-not-found":"등록되지 않은 이메일입니다.","auth/wrong-password":"잘못된 비밀번호입니다.","auth/email-already-in-use":"이미 사용 중인 이메일입니다.","auth/weak-password":"비밀번호는 최소 6자 이상이어야 합니다.","auth/too-many-requests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","auth/network-request-failed":"네트워크 연결을 확인해주세요.","auth/invalid-credential":"인증 정보가 올바르지 않습니다."}[t]||"알 수 없는 오류가 발생했습니다."}var oI=Y('<div class="form-group svelte-16585sj"><label for="displayName" class="label svelte-16585sj">이름</label> <input id="displayName" type="text" required placeholder="이름을 입력하세요" class="input svelte-16585sj"/></div>'),aI=Y('<div class="error-message svelte-16585sj"> </div>'),lI=Y('<div class="login-container svelte-16585sj"><div class="login-card svelte-16585sj"><h2 class="title svelte-16585sj"> </h2> <form class="form svelte-16585sj"><!> <div class="form-group svelte-16585sj"><label for="email" class="label svelte-16585sj">이메일</label> <input id="email" type="email" required placeholder="email@example.com" class="input svelte-16585sj"/></div> <div class="form-group svelte-16585sj"><label for="password" class="label svelte-16585sj">비밀번호</label> <input id="password" type="password" required placeholder="비밀번호 (최소 6자)" minlength="6" class="input svelte-16585sj"/></div> <!> <button type="submit" class="submit-button svelte-16585sj"> </button> <button type="button" class="toggle-button svelte-16585sj"> </button></form></div></div>');const cI={hash:"svelte-16585sj",code:`
  /* 컨테이너 */.login-container.svelte-16585sj {display:flex;justify-content:center;align-items:center;min-height:400px;padding:1rem;}

  /* 로그인 카드 */.login-card.svelte-16585sj {width:100%;max-width:400px;padding:2rem;background:white;border-radius:8px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);}

  /* 제목 */.title.svelte-16585sj {margin:0 0 1.5rem 0;font-size:1.5rem;font-weight:bold;text-align:center;color:#333;}

  /* 폼 */.form.svelte-16585sj {display:flex;flex-direction:column;gap:1rem;}

  /* 폼 그룹 */.form-group.svelte-16585sj {display:flex;flex-direction:column;gap:0.5rem;}

  /* 라벨 */.label.svelte-16585sj {font-weight:500;color:#555;font-size:0.9rem;}

  /* 입력 필드 */.input.svelte-16585sj {padding:0.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem;transition:border-color 0.2s;}.input.svelte-16585sj:focus {outline:none;border-color:#007bff;box-shadow:0 0 0 3px rgba(0, 123, 255, 0.1);}.input.svelte-16585sj:disabled {background-color:#f5f5f5;cursor:not-allowed;}

  /* 오류 메시지 */.error-message.svelte-16585sj {padding:0.75rem;background-color:#fee;color:#c33;border-radius:4px;font-size:0.9rem;}

  /* 제출 버튼 */.submit-button.svelte-16585sj {padding:0.75rem;background-color:#007bff;color:white;border:none;border-radius:4px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.submit-button.svelte-16585sj:hover:not(:disabled) {background-color:#0056b3;}.submit-button.svelte-16585sj:disabled {background-color:#ccc;cursor:not-allowed;}

  /* 모드 전환 버튼 */.toggle-button.svelte-16585sj {padding:0.5rem;background:transparent;color:#007bff;border:none;font-size:0.9rem;cursor:pointer;text-decoration:underline;}.toggle-button.svelte-16585sj:hover:not(:disabled) {color:#0056b3;}.toggle-button.svelte-16585sj:disabled {color:#ccc;cursor:not-allowed;}`};function uI(t,e){fn(e,!0),Vn(t,cI);let n=he(""),i=he(""),s=he(""),r=he(""),o=he(!1),a=he(!1);async function l(L){L.preventDefault(),B(o,!0),B(r,"");let P;if(E(a)?P=await Bf(E(n),E(i),E(s)):P=await Hf(E(n),E(i)),P.success){const q=new CustomEvent("login-success",{detail:{email:E(n)},bubbles:!0,composed:!0});dispatchEvent(q),B(n,""),B(i,""),B(s,"")}else{B(r,P.error,!0);const q=new CustomEvent("login-error",{detail:{error:P.error},bubbles:!0,composed:!0});dispatchEvent(q)}B(o,!1)}function c(){B(a,!E(a)),B(r,"")}var h=lI(),d=m(h),u=m(d),f=m(u,!0);_(u);var p=y(u,2),g=m(p);{var b=L=>{var P=oI(),q=y(m(P),2);Sr(q),_(P),ne(()=>q.disabled=E(o)),aa(q,()=>E(s),re=>B(s,re)),x(L,P)};De(g,L=>{E(a)&&L(b)})}var T=y(g,2),C=y(m(T),2);Sr(C),_(T);var S=y(T,2),k=y(m(S),2);Sr(k),_(S);var N=y(S,2);{var v=L=>{var P=aI(),q=m(P,!0);_(P),ne(()=>R(q,E(r))),x(L,P)};De(N,L=>{E(r)&&L(v)})}var w=y(N,2),A=m(w,!0);_(w);var F=y(w,2);F.__click=c;var W=m(F,!0);_(F),_(p),_(d),_(h),ne(()=>{R(f,E(a)?"회원가입":"로그인"),C.disabled=E(o),k.disabled=E(o),w.disabled=E(o),R(A,E(o)?"처리 중...":E(a)?"회원가입":"로그인"),F.disabled=E(o),R(W,E(a)?"이미 계정이 있으신가요? 로그인":"계정이 없으신가요? 회원가입")}),a_("submit",p,l),aa(C,()=>E(n),L=>B(n,L)),aa(k,()=>E(i),L=>B(i,L)),x(t,h),pn()}cs(["click"]),customElements.define("login-form",fe(uI,{},[],[],!0));var hI=Y('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),dI=Y('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),fI=Y('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),pI=Y('<h3 class="post-title svelte-1t1odzy"> </h3>'),_I=Y('<p class="post-text svelte-1t1odzy"> </p>'),mI=Y('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),gI=Y('<div class="posts svelte-1t1odzy"></div>'),vI=Y('<div class="post-list-container svelte-1t1odzy"><!></div>');const yI={hash:"svelte-1t1odzy",code:`
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
  }`};function bI(t,e){fn(e,!0),Vn(t,yI);let n=at(e,"path",7,"posts"),i=at(e,"limit",7,"10"),s=he(Yt([])),r=he(!0),o=he(""),a=null;ea(()=>{l()}),w_(()=>{c()});function l(){try{a=jt(St,n()),Co(a,C=>{const S=C.val();S?B(s,Object.entries(S).map(([k,N])=>({id:k,...N})).sort((k,N)=>(N.timestamp||0)-(k.timestamp||0)).slice(0,parseInt(i())),!0):B(s,[],!0),B(r,!1),B(o,"")},C=>{console.error("데이터 읽기 오류:",C),B(o,"데이터를 불러오는 중 오류가 발생했습니다."),B(r,!1)})}catch(C){console.error("구독 설정 오류:",C),B(o,"데이터베이스 연결에 실패했습니다."),B(r,!1)}}function c(){a&&Vl(a)}function h(C){const S=new CustomEvent("post-click",{detail:{post:C},bubbles:!0,composed:!0});dispatchEvent(S)}function d(C,S){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),h(S))}function u(C){if(!C)return"";const S=typeof C=="string"?Number(C):C,k=new Date(S),v=new Date().getTime()-k.getTime(),w=Math.floor(v/6e4),A=Math.floor(v/36e5),F=Math.floor(v/864e5);return w<1?"방금 전":w<60?`${w}분 전`:A<24?`${A}시간 전`:F<7?`${F}일 전`:k.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var f={get path(){return n()},set path(C="posts"){n(C),Xe()},get limit(){return i()},set limit(C="10"){i(C),Xe()}},p=vI(),g=m(p);{var b=C=>{var S=hI();x(C,S)},T=C=>{var S=Oe(),k=me(S);{var N=w=>{var A=dI(),F=m(A),W=m(F,!0);_(F),_(A),ne(()=>R(W,E(o))),x(w,A)},v=w=>{var A=Oe(),F=me(A);{var W=P=>{var q=fI();x(P,q)},L=P=>{var q=gI();Tr(q,21,()=>E(s),re=>re.id,(re,G)=>{var ee=mI();ee.__click=()=>h(E(G)),ee.__keydown=ie=>d(ie,E(G));var Ie=m(ee),Re=m(Ie),oe=m(Re),be=m(oe,!0);_(oe);var pe=y(oe,2),ze=m(pe,!0);_(pe),_(Re),_(Ie);var Me=y(Ie,2),ht=m(Me);{var tt=ie=>{var He=pI(),Ye=m(He,!0);_(He),ne(()=>R(Ye,E(G).title)),x(ie,He)};De(ht,ie=>{E(G).title&&ie(tt)})}var dt=y(ht,2);{var ft=ie=>{var He=_I(),Ye=m(He,!0);_(He),ne(()=>R(Ye,E(G).content)),x(ie,He)};De(dt,ie=>{E(G).content&&ie(ft)})}_(Me);var pt=y(Me,2),_t=m(pt),kt=m(_t);_(_t);var mt=y(_t,2),At=m(mt);_(mt),_(pt),_(ee),ne(ie=>{de(ee,"aria-label",`게시물: ${(E(G).title||E(G).content||"제목 없음")??""}`),R(be,E(G).author||"익명"),R(ze,ie),R(kt,`👍 ${(E(G).likes||0)??""}`),R(At,`💬 ${(E(G).comments?.length||0)??""}`)},[()=>u(E(G).timestamp)]),x(re,ee)}),_(q),x(P,q)};De(F,P=>{E(s).length===0?P(W):P(L,!1)},!0)}x(w,A)};De(k,w=>{E(o)?w(N):w(v,!1)},!0)}x(C,S)};De(g,C=>{E(r)?C(b):C(T,!1)})}return _(p),x(t,p),pn(f)}cs(["click","keydown"]),customElements.define("post-list",fe(bI,{path:{},limit:{}},[],[],!0)),Mp();/**
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
 */const wI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var EI=c_("<svg><!><!></svg>");function Ke(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]),i=Fe(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);fn(e,!1);let s=at(e,"name",12,void 0),r=at(e,"color",12,"currentColor"),o=at(e,"size",12,24),a=at(e,"strokeWidth",12,2),l=at(e,"absoluteStrokeWidth",12,!1),c=at(e,"iconNode",28,()=>[]);const h=(...g)=>g.filter((b,T,C)=>!!b&&C.indexOf(b)===T).join(" ");var d={get name(){return s()},set name(g){s(g),Xe()},get color(){return r()},set color(g){r(g),Xe()},get size(){return o()},set size(g){o(g),Xe()},get strokeWidth(){return a()},set strokeWidth(g){a(g),Xe()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(g){l(g),Xe()},get iconNode(){return c()},set iconNode(g){c(g),Xe()}};yu();var u=EI();pu(u,(g,b)=>({...wI,...i,width:o(),height:o(),stroke:r(),"stroke-width":g,class:b}),[()=>(wi(l()),wi(a()),wi(o()),Mt(()=>l()?Number(a())*24/Number(o()):a())),()=>(wi(s()),wi(n),Mt(()=>h("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var f=m(u);Tr(f,1,c,ta,(g,b)=>{var T=zo(()=>mp(E(b),2));let C=()=>E(T)[0],S=()=>E(T)[1];var k=Oe(),N=me(k);T_(N,C,!0,(v,w)=>{pu(v,()=>({...S()}))}),x(g,k)});var p=y(f);return $e(p,e,"default",{}),_(u),x(t,u),pn(d)}fe(Ke,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function Gf(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];Ke(t,et({name:"book-open"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Gf,{},["default"],[],!0);function Kf(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"m6 9 6 6 6-6"}]];Ke(t,et({name:"chevron-down"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Kf,{},["default"],[],!0);function Gl(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ke(t,et({name:"external-link"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Gl,{},["default"],[],!0);function Kl(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];Ke(t,et({name:"file-text"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Kl,{},["default"],[],!0);function Yf(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];Ke(t,et({name:"house"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Yf,{},["default"],[],!0);function er(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];Ke(t,et({name:"layout-grid"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(er,{},["default"],[],!0);function Qf(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];Ke(t,et({name:"log-in"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Qf,{},["default"],[],!0);function Jf(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];Ke(t,et({name:"log-out"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Jf,{},["default"],[],!0);function tr(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];Ke(t,et({name:"menu"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(tr,{},["default"],[],!0);function ri(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];Ke(t,et({name:"message-circle"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(ri,{},["default"],[],!0);function Xf(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];Ke(t,et({name:"trending-up"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Xf,{},["default"],[],!0);function Ki(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];Ke(t,et({name:"user"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Ki,{},["default"],[],!0);function Yi(t,e){const n=Fe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];Ke(t,et({name:"users"},()=>n,{get iconNode(){return i},children:(s,r)=>{var o=Oe(),a=me(o);$e(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}fe(Yi,{},["default"],[],!0);const Yl={en:{프로젝트_명칭:"Hanbabo v0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",데모제목:"SNS Web Components Demo",데모부제:"Svelte 5 Custom Elements + Firebase + lucide-svelte",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"Built with Vibe Coding","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude."},ko:{프로젝트_명칭:"한바보 v0.2",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",데모제목:"SNS Web Components 데모",데모부제:"Svelte 5 Custom Elements + Firebase + lucide-svelte",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"바이브 코딩으로 만들어진 프로젝트입니다","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다."},ja:{프로젝트_명칭:"ハンバボ v0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",데모제목:"SNS Web Components デモ",데모부제:"Svelte 5 Custom Elements + Firebase + lucide-svelte",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"バイブコーディングで作られたプロジェクトです","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。"},zh:{프로젝트_명칭:"韩芭芭 v0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",데모제목:"SNS Web Components 演示",데모부제:"Svelte 5 Custom Elements + Firebase + lucide-svelte",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"使用Vibe编码制作的项目","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。"}};function Ql(t){const e=(t??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Zf(){if(typeof navigator>"u")return"en";const t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of t){const n=Ql(e);if(n!=="en")return n}return"en"}function II(t){let e=Ql(t)||Zf();function n(r){e=Ql(r)}function i(){return e}function s(r,o={}){return((Yl[e]??Yl.en)[r]??Yl.en[r]??r).replace(/\{(\w+)\}/g,(c,h)=>o[h]??"")}return{t:s,setLocale:n,getLocale:i}}const ep=Zf(),CI=II(ep),TI=ps(ep),Jl=$_(TI,t=>(e,n={})=>CI.t(e,n));var SI=Y("<span> </span>"),kI=Y('<img alt="프로필" class="avatar-image svelte-38psow"/>'),AI=Y('<div class="avatar-fallback svelte-38psow"> </div>'),RI=Y('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/profile" class="dropdown-item svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span class="svelte-38psow"> </span></button></div>'),NI=Y('<img class="avatar-image svelte-38psow"/>'),PI=Y('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),xI=Y('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/users" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),OI=Y('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/auth/login" class="nav-button svelte-38psow"> </a> <a href="/auth/signup" class="primary-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/auth/login" class="icon-button svelte-38psow"><!></a> <a href="/auth/login" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><div class="avatar-fallback avatar-fallback-small svelte-38psow">?</div></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),DI=Y('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><a href="/" class="logo-link svelte-38psow"><div class="logo svelte-38psow"></div></a> <nav class="nav svelte-38psow"><!></nav></div></header>');const MI={hash:"svelte-38psow",code:`\r
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
  /* 아바타 */.avatar.svelte-38psow {width:1.5rem;height:1.5rem;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:#e5e7eb;}.avatar-small.svelte-38psow {width:1.75rem;height:1.75rem;}.avatar-image.svelte-38psow {width:100%;height:100%;-o-object-fit:cover;object-fit:cover;}.avatar-fallback.svelte-38psow {width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:500;color:#6b7280;}.avatar-fallback-small.svelte-38psow {font-size:0.625rem;}\r
\r
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function LI(t,e){fn(e,!0),Vn(t,MI);const n=()=>_s(To,"$user",s),i=()=>_s(Jl,"$t",s),[s,r]=da();let o=he(!1),a=he(null);function l(){E(a)&&(E(a).classList.remove("logo-animate-active"),E(a).offsetWidth,E(a).classList.add("logo-animate-active"),setTimeout(()=>{E(a)?.classList.remove("logo-animate-active")},600))}async function c(){if((await Vf()).success){const v=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(v)}B(o,!1)}function h(){return n()?.displayName?n().displayName.charAt(0).toUpperCase():n()?.email?n().email.charAt(0).toUpperCase():"U"}function d(){B(o,!E(o))}function u(N){const v=document.querySelector(".dropdown-menu"),w=document.querySelector(".dropdown-trigger");v&&!v.contains(N.target)&&!w?.contains(N.target)&&B(o,!1)}ea(()=>{const N=setTimeout(()=>{l()},500),v=setInterval(()=>{l()},1e4);return document.addEventListener("click",u),()=>{clearTimeout(N),clearInterval(v),document.removeEventListener("click",u)}});var f=DI(),p=m(f),g=m(p),b=m(g);Tr(b,5,()=>i()("프로젝트_명칭").split(""),ta,(N,v,w)=>{var A=SI();hs(A,1,`logo-char logo-char-${w+1}`,"svelte-38psow");var F=m(A,!0);_(A),ne(()=>R(F,E(v))),x(N,A)}),_(b),_(g),M_(g,N=>B(a,N),()=>E(a));var T=y(g,2),C=m(T);{var S=N=>{var v=xI(),w=me(v),A=m(w),F=m(A);er(F,{size:16});var W=y(F,2),L=m(W,!0);_(W),_(A);var P=y(A,2),q=m(P);ri(q,{size:16});var re=y(q,2),G=m(re,!0);_(re),_(P);var ee=y(P,2),Ie=m(ee);Yi(Ie,{size:16});var Re=y(Ie,2),oe=m(Re,!0);_(Re),_(ee);var be=y(ee,2),pe=m(be);pe.__click=d;var ze=m(pe),Me=m(ze);{var ht=ue=>{var se=kI();ne(()=>de(se,"src",n().photoURL)),x(ue,se)},tt=ue=>{var se=AI(),nt=m(se,!0);_(se),ne(Wt=>R(nt,Wt),[h]),x(ue,se)};De(Me,ue=>{n()?.photoURL?ue(ht):ue(tt,!1)})}_(ze);var dt=y(ze,2),ft=m(dt,!0);_(dt),_(pe);var pt=y(pe,2);{var _t=ue=>{var se=RI(),nt=m(se),Wt=m(nt,!0);_(nt);var oi=y(nt,4),ai=m(oi);Ki(ai,{size:16});var li=y(ai,2),Xi=m(li,!0);_(li),_(oi);var ci=y(oi,4);ci.__click=c;var Rt=m(ci);Jf(Rt,{size:16});var Nt=y(Rt,2),zt=m(Nt,!0);_(Nt),_(ci),_(se),ne((un,Ln,ui)=>{R(Wt,un),R(Xi,Ln),R(zt,ui)},[()=>i()("내계정"),()=>i()("프로필수정"),()=>i()("로그아웃")]),x(ue,se)};De(pt,ue=>{E(o)&&ue(_t)})}_(be);var kt=y(be,2),mt=m(kt);tr(mt,{size:24}),_(kt),_(w);var At=y(w,2),ie=m(At),He=m(ie);er(He,{size:20}),_(ie);var Ye=y(ie,2),Mn=m(Ye);Yi(Mn,{size:20}),_(Ye);var cn=y(Ye,2),So=m(cn);ri(So,{size:20}),_(cn);var Qi=y(cn,2),Ji=m(Qi),nr=m(Ji);{var Xl=ue=>{var se=NI();ne(nt=>{de(se,"src",n().photoURL),de(se,"alt",nt)},[()=>i()("프로필")]),x(ue,se)},ko=ue=>{var se=PI(),nt=m(se,!0);_(se),ne(Wt=>R(nt,Wt),[h]),x(ue,se)};De(nr,ue=>{n()?.photoURL?ue(Xl):ue(ko,!1)})}_(Ji),_(Qi);var ir=y(Qi,2),sr=m(ir);tr(sr,{size:24}),_(ir),_(At),ne((ue,se,nt,Wt,oi,ai,li,Xi,ci)=>{R(L,ue),R(G,se),R(oe,nt),R(ft,n()?.displayName||n()?.email),de(kt,"title",Wt),de(ie,"title",oi),de(Ye,"title",ai),de(cn,"title",li),de(Qi,"title",Xi),de(ir,"title",ci)},[()=>i()("포럼"),()=>i()("채팅"),()=>i()("사용자찾기"),()=>i()("메뉴"),()=>i()("포럼"),()=>i()("사용자찾기"),()=>i()("채팅"),()=>i()("프로필"),()=>i()("메뉴")]),x(N,v)},k=N=>{var v=OI(),w=me(v),A=m(w),F=m(A);er(F,{size:16});var W=y(F,2),L=m(W,!0);_(W),_(A);var P=y(A,2),q=m(P,!0);_(P);var re=y(P,2),G=m(re,!0);_(re);var ee=y(re,2),Ie=m(ee);tr(Ie,{size:20}),_(ee),_(w);var Re=y(w,2),oe=m(Re),be=m(oe);er(be,{size:20}),_(oe);var pe=y(oe,2),ze=m(pe);Yi(ze,{size:20}),_(pe);var Me=y(pe,2),ht=m(Me);ri(ht,{size:20}),_(Me);var tt=y(Me,2),dt=y(tt,2),ft=m(dt);tr(ft,{size:24}),_(dt),_(Re),ne((pt,_t,kt,mt,At,ie,He,Ye,Mn)=>{R(L,pt),R(q,_t),R(G,kt),de(ee,"title",mt),de(oe,"title",At),de(pe,"title",ie),de(Me,"title",He),de(tt,"title",Ye),de(dt,"title",Mn)},[()=>i()("포럼"),()=>i()("로그인"),()=>i()("회원가입"),()=>i()("메뉴"),()=>i()("포럼"),()=>i()("사용자찾기"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴")]),x(N,v)};De(C,N=>{n()?N(S):N(k,!1)})}_(T),_(p),_(f),x(t,f),pn(),r()}cs(["click"]),customElements.define("sns-topbar",fe(LI,{},[],[],!0));var $I=Y('<a href="/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),FI=Y('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),UI=Y('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/users" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <div class="menu-item disabled svelte-najsij"><!> <span> </span></div></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/users" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const jI={hash:"svelte-najsij",code:`\r
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
  }`};function WI(t,e){fn(e,!1),Vn(t,jI);const n=()=>_s(Jl,"$t",s),i=()=>_s(To,"$user",s),[s,r]=da();yu();var o=UI(),a=m(o),l=m(a),c=m(l,!0);_(l);var h=y(l,2),d=m(h),u=m(d);Yf(u,{size:20});var f=y(u,2),p=m(f,!0);_(f),_(d);var g=y(d,2),b=m(g);ri(b,{size:20});var T=y(b,2),C=m(T,!0);_(T),_(g);var S=y(g,2),k=m(S);Yi(k,{size:20});var N=y(k,2),v=m(N,!0);_(N),_(S);var w=y(S,2),A=m(w);Ki(A,{size:20});var F=y(A,2),W=m(F,!0);_(F),_(w);var L=y(w,2),P=m(L);Kl(P,{size:20});var q=y(P,2),re=m(q,!0);_(q),_(L),_(h);var G=y(h,4),ee=m(G),Ie=m(ee,!0);_(ee);var Re=y(ee,2),oe=m(Re);{var be=Rt=>{var Nt=$I(),zt=m(Nt);Ki(zt,{size:16});var un=y(zt,2),Ln=m(un,!0);_(un),_(Nt),ne(ui=>R(Ln,ui),[()=>n()("회원정보수정")]),x(Rt,Nt)},pe=Rt=>{var Nt=FI(),zt=me(Nt),un=m(zt);Qf(un,{size:16});var Ln=y(un,2),ui=m(Ln,!0);_(Ln),_(zt);var Ao=y(zt,2),Ro=m(Ao);Ki(Ro,{size:16});var No=y(Ro,2),Zl=m(No,!0);_(No),_(Ao),ne((ec,tc)=>{R(ui,ec),R(Zl,tc)},[()=>n()("로그인"),()=>n()("회원가입")]),x(Rt,Nt)};De(oe,Rt=>{i()?Rt(be):Rt(pe,!1)})}_(Re),_(G);var ze=y(G,4),Me=m(ze),ht=m(Me);Yi(ht,{size:16});var tt=y(ht,2),dt=m(tt,!0);_(tt),_(Me);var ft=y(Me,2),pt=y(m(ft),2),_t=m(pt,!0);_(pt);var kt=y(pt,2);Gl(kt,{size:12,class:"external-icon"}),_(ft);var mt=y(ft,2),At=m(mt);ri(At,{size:16});var ie=y(At,2),He=m(ie,!0);_(ie);var Ye=y(ie,2);Gl(Ye,{size:12,class:"external-icon"}),_(mt);var Mn=y(mt,2),cn=m(Mn);Gf(cn,{size:16});var So=y(cn,2),Qi=m(So,!0);_(So),_(Mn),_(ze);var Ji=y(ze,2),nr=m(Ji),Xl=m(nr,!0);_(nr);var ko=y(nr,2),ir=m(ko,!0);_(ko),_(Ji);var sr=y(Ji,2),ue=m(sr),se=m(ue),nt=m(se,!0);_(se);var Wt=y(se,2),oi=m(Wt,!0);_(Wt),_(ue),_(sr);var ai=y(sr,2),li=m(ai),Xi=m(li,!0),ci=y(Xi,2);_(li),_(ai),_(a),_(o),ne((Rt,Nt,zt,un,Ln,ui,Ao,Ro,No,Zl,ec,tc,cC,uC,hC,dC,fC)=>{R(c,Rt),R(p,Nt),R(C,zt),R(v,un),R(W,Ln),R(re,ui),R(Ie,Ao),R(dt,Ro),R(_t,No),R(He,Zl),R(Qi,ec),R(Xl,tc),R(ir,cC),R(nt,uC),R(oi,hC),R(Xi,dC),R(ci,` ${fC??""}`)},[()=>n()("퀵메뉴"),()=>n()("홈"),()=>n()("채팅"),()=>n()("사용자목록"),()=>n()("내프로필"),()=>n()("게시판"),()=>n()("시작하기"),()=>n()("회원목록"),()=>n()("프로젝트GitHub"),()=>n()("한바보참여단톡방"),()=>n()("개발일지"),()=>n()("언어설정"),()=>n()("언어전환기능안내"),()=>n()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>n()("카피레프트"),()=>n()("AI소개")]),x(t,o),pn(),r()}customElements.define("sns-left-sidebar",fe(WI,{},[],[],!0));var zI=Y('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const HI={hash:"svelte-3epon2",code:`\r
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
  }`};function BI(t,e){fn(e,!0),Vn(t,HI);const n=()=>_s(Jl,"$t",i),[i,s]=da();let r=he(Yt({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=zI(),a=m(o),l=m(a),c=m(l,!0);_(l);var h=y(l,2),d=m(h),u=m(d),f=m(u);Ki(f,{size:20}),_(u);var p=y(u,2),g=m(p),b=m(g,!0);_(g);var T=y(g,2),C=m(T,!0);_(T),_(p),_(d);var S=y(d,2),k=m(S),N=m(k);Xf(N,{size:20}),_(k);var v=y(k,2),w=m(v),A=m(w,!0);_(w);var F=y(w,2),W=m(F,!0);_(F),_(v),_(S);var L=y(S,2),P=m(L),q=m(P);Kl(q,{size:20}),_(P);var re=y(P,2),G=m(re),ee=m(G,!0);_(G);var Ie=y(G,2),Re=m(Ie,!0);_(Ie);var oe=y(Ie,2),be=m(oe,!0);_(oe),_(re),_(L);var pe=y(L,2),ze=m(pe),Me=m(ze);ri(Me,{size:20}),_(ze);var ht=y(ze,2),tt=m(ht),dt=m(tt,!0);_(tt);var ft=y(tt,2),pt=m(ft,!0);_(ft),_(ht),_(pe),_(h);var _t=y(h,2),kt=m(_t,!0);_(_t),_(a),_(o),ne((mt,At,ie,He,Ye,Mn,cn)=>{R(c,mt),R(b,At),R(C,E(r).totalUsers),R(A,ie),R(W,E(r).totalScore),R(ee,He),R(Re,E(r).totalPosts),R(be,Ye),R(dt,Mn),R(pt,E(r).totalMessages),R(kt,cn)},[()=>n()("통계"),()=>n()("전체사용자"),()=>n()("전체점수"),()=>n()("전체글"),()=>n()("준비중"),()=>n()("채팅메시지"),()=>n()("통계실시간업데이트")]),x(t,o),pn(),s()}customElements.define("sns-right-sidebar",fe(BI,{},[],[],!0));var VI=Y('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const qI={hash:"svelte-um1xbq",code:`\r
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
  }`};function GI(t,e){Vn(t,qI);var n=VI(),i=m(n),s=y(i,2),r=m(s);hs(r,1,"left-sidebar svelte-um1xbq");var o=y(r,2),a=m(o);$e(a,e,"default",{}),_(o);var l=y(o,2);hs(l,1,"right-sidebar svelte-um1xbq"),_(s),_(n),x(t,n)}customElements.define("sns-layout",fe(GI,{},["default"],[],!0));var KI=Y('<div class="text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm"> </div>'),YI=Y('<p class="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-md border border-blue-200"> </p>'),QI=Y('<p class="text-sm text-green-600 bg-green-50 px-4 py-2 rounded-md border border-green-200 mt-2"> </p>'),JI=Y('<div class="accordion-content px-6 py-4 bg-white border-t border-gray-100 svelte-m3h71q"><p class="text-gray-700 leading-relaxed mb-3"> </p> <!> <!></div>'),XI=Y('<div class="accordion-item border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"><button class="accordion-trigger w-full px-6 py-4 flex items-center justify-between text-left bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all svelte-m3h71q"><div class="flex items-center gap-3 flex-1"><!> <span class="text-lg font-semibold text-gray-800"> </span></div> <div><!></div></button> <!></div>'),ZI=Y('<div class="accordion w-full space-y-4"></div>');const eC={hash:"svelte-m3h71q",code:`\r
  /**\r
   * 아코디언 스타일\r
   * Tailwind CSS를 사용하므로 추가 스타일은 최소화\r
   */.chevron.svelte-m3h71q {transition:transform 0.2s ease-in-out;}.rotate-180.svelte-m3h71q {transform:rotate(180deg);}\r
\r
  /* 버튼 기본 스타일 초기화 */button.svelte-m3h71q {background:none;border:none;cursor:pointer;font-family:inherit;}button.svelte-m3h71q:focus {outline:2px solid #3b82f6;outline-offset:2px;}\r
\r
  /* 콘텐츠 애니메이션 */.accordion-content.svelte-m3h71q {\r
    animation: svelte-m3h71q-slideDown 0.2s ease-out;}\r
\r
  @keyframes svelte-m3h71q-slideDown {\r
    from {\r
      opacity: 0;\r
      transform: translateY(-10px);\r
    }\r
    to {\r
      opacity: 1;\r
      transform: translateY(0);\r
    }\r
  }`};function tC(t,e){fn(e,!0),Vn(t,eC);let n=at(e,"items",7,"[]"),i=at(e,"type",7,"single"),s=at(e,"collapsible",7,!0),r=zo(()=>{try{const u=typeof n()=="string"?JSON.parse(n()):n();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=zo(()=>()=>{const u=s();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=he(Yt(new Set));function l(u){const f=new Set(E(a));i()==="single"?f.has(u)?E(o)&&f.delete(u):(f.clear(),f.add(u)):f.has(u)?f.delete(u):f.add(u),B(a,f,!0)}function c(u){return E(a).has(u)}var h={get items(){return n()},set items(u="[]"){n(u),Xe()},get type(){return i()},set type(u="single"){i(u),Xe()},get collapsible(){return s()},set collapsible(u=!0){s(u),Xe()}},d=ZI();return Tr(d,21,()=>E(r),ta,(u,f,p)=>{var g=XI(),b=m(g);b.__click=()=>l(p);var T=m(b),C=m(T);{var S=L=>{var P=KI(),q=m(P,!0);_(P),ne(()=>R(q,E(f).icon)),x(L,P)};De(C,L=>{E(f).icon&&L(S)})}var k=y(C,2),N=m(k,!0);_(k),_(T);var v=y(T,2);let w;var A=m(v);Kf(A,{size:20,class:"text-gray-600"}),_(v),_(b);var F=y(b,2);{var W=L=>{var P=JI(),q=m(P),re=m(q,!0);_(q);var G=y(q,2);{var ee=oe=>{var be=YI(),pe=m(be,!0);_(be),ne(()=>R(pe,E(f).hint)),x(oe,be)};De(G,oe=>{E(f).hint&&oe(ee)})}var Ie=y(G,2);{var Re=oe=>{var be=QI(),pe=m(be,!0);_(be),ne(()=>R(pe,E(f).gpl)),x(oe,be)};De(Ie,oe=>{E(f).gpl&&oe(Re)})}_(P),ne(()=>R(re,E(f).content)),x(L,P)};De(F,L=>{c(p)&&L(W)})}_(g),ne((L,P)=>{de(b,"aria-expanded",L),R(N,E(f).title),w=hs(v,1,"chevron transition-transform duration-200 svelte-m3h71q",null,w,P)},[()=>c(p),()=>({"rotate-180":c(p)})]),x(u,g)}),_(d),x(t,d),pn(h)}cs(["click"]),customElements.define("sns-accordion",fe(tC,{items:{},type:{},collapsible:{}},[],[],!0));function nC(t){const{subscribe:e,set:n}=ps(null),i=jt(St,t);return Co(i,s=>{const r=s.val();n(r)}),{subscribe:e,unsubscribe:()=>Vl(i)}}async function iC(t,e){try{const n=jt(St,t);return await Eo(n,e),{success:!0}}catch(n){return console.error("데이터 쓰기 오류:",n),{success:!1,error:n.message}}}async function sC(t,e){try{const n=jt(St,t);return await Bl(n,e),{success:!0}}catch(n){return console.error("데이터 업데이트 오류:",n),{success:!1,error:n.message}}}async function rC(t){try{const e=jt(St,t);return await GE(e),{success:!0}}catch(e){return console.error("데이터 삭제 오류:",e),{success:!1,error:e.message}}}async function oC(t,e){try{const n=jt(St,t),i=qE(n);return await Eo(i,e),{success:!0,key:i.key}}catch(n){return console.error("데이터 추가 오류:",n),{success:!1,error:n.message}}}async function aC(t){try{const e=jt(St,t),n=await KE(e);return n.exists()?{success:!0,data:n.val()}:{success:!0,data:null}}catch(e){return console.error("데이터 읽기 오류:",e),{success:!1,error:e.message}}}function lC(t){const e=jt(St,`status/${t}`),n=jt(St,".info/connected");return Co(n,i=>{i.val()===!0&&(Eo(e,{online:!0,lastSeen:Date.now()}),Co(jt(St,".info/connected"),s=>{s.val()||Bl(e,{online:!1,lastSeen:Date.now()})}))}),()=>{Bl(e,{online:!1,lastSeen:Date.now()}),Vl(n)}}console.log("SNS Web Components 로드됨 ✅"),_e.auth=Zs,_e.createRealtimeStore=nC,_e.database=St,_e.deleteData=rC,_e.loading=zf,_e.pushData=oC,_e.readData=aC,_e.setupPresence=lC,_e.signIn=Hf,_e.signOut=Vf,_e.signUp=Bf,_e.updateData=sC,_e.user=To,_e.writeData=iC,Object.defineProperty(_e,Symbol.toStringTag,{value:"Module"})}));
