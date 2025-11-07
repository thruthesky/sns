(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const gp=!1;var xd=Array.isArray,b1=Array.prototype.indexOf,kd=Array.from,Pa=Object.keys,So=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,_p=Object.getOwnPropertyDescriptors,w1=Object.prototype,y1=Array.prototype,Ed=Object.getPrototypeOf,Rh=Object.isExtensible;function Xi(r){return typeof r=="function"}const Kr=()=>{};function x1(r){return r()}function Na(r){for(var e=0;e<r.length;e++)r[e]()}function bp(){var r,e,t=new Promise((n,s)=>{r=n,e=s});return{promise:t,resolve:r,reject:e}}function k1(r,e){if(Array.isArray(r))return r;if(!(Symbol.iterator in r))return Array.from(r);const t=[];for(const n of r)if(t.push(n),t.length===e)break;return t}const Er=2,Cd=4,hl=8,ns=16,ss=32,Rs=64,fl=128,wr=1024,jr=2048,is=4096,Yr=8192,Vn=16384,Id=32768,Qn=65536,Ph=1<<17,E1=1<<18,Xs=1<<19,wp=1<<20,tn=256,$a=512,La=32768,Pc=1<<21,Td=1<<22,zs=1<<23,En=Symbol("$state"),Sd=Symbol("legacy props"),C1=Symbol(""),fi=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},I1=1,Ad=3,Oi=8;function yp(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function xp(r){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function T1(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function S1(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function A1(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function R1(r){throw new Error("https://svelte.dev/e/effect_orphan")}function P1(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function N1(){throw new Error("https://svelte.dev/e/hydration_failed")}function $1(r){throw new Error("https://svelte.dev/e/props_invalid_value")}function L1(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function D1(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function O1(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function M1(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const pl=1,vl=2,kp=4,q1=8,z1=16,U1=1,F1=2,Ep=4,j1=8,B1=16,V1=1,H1=2,Cp="[",ml="[!",Rd="]",ki={},pr=Symbol(),W1="http://www.w3.org/1999/xhtml",G1="http://www.w3.org/2000/svg",K1="@attach";function gl(r){console.warn("https://svelte.dev/e/hydration_mismatch")}function Y1(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Q1(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let $e=!1;function Rr(r){$e=r}let dt;function mr(r){if(r===null)throw gl(),ki;return dt=r}function Xn(){return mr(Nn(dt))}function c(r){if($e){if(Nn(dt)!==null)throw gl(),ki;dt=r}}function Mr(r=1){if($e){for(var e=r,t=dt;e--;)t=Nn(t);dt=t}}function Da(r=!0){for(var e=0,t=dt;;){if(t.nodeType===Oi){var n=t.data;if(n===Rd){if(e===0)return t;e-=1}else(n===Cp||n===ml)&&(e+=1)}var s=Nn(t);r&&t.remove(),t=s}}function Ip(r){if(!r||r.nodeType!==Oi)throw gl(),ki;return r.data}function Tp(r){return r===this.v}function Sp(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function Ap(r){return!Sp(r,this.v)}let Mi=!1,X1=!1;function J1(){Mi=!0}let Xt=null;function Ei(r){Xt=r}function ot(r,e=!1,t){Xt={p:Xt,i:!1,c:null,e:null,s:r,x:null,l:Mi&&!e?{s:null,u:null,$:[]}:null}}function at(r){var e=Xt,t=e.e;if(t!==null){e.e=null;for(var n of t)Gp(n)}return r!==void 0&&(e.x=r),e.i=!0,Xt=e.p,r??{}}function qi(){return!Mi||Xt!==null&&Xt.l===null}let Os=[];function Rp(){var r=Os;Os=[],Na(r)}function An(r){if(Os.length===0&&!po){var e=Os;queueMicrotask(()=>{e===Os&&Rp()})}Os.push(r)}function Z1(){for(;Os.length>0;)Rp()}function Pp(r){var e=Ye;if(e===null)return it.f|=zs,r;if((e.f&Id)===0){if((e.f&fl)===0)throw r;e.b.error(r)}else Ci(r,e)}function Ci(r,e){for(;e!==null;){if((e.f&fl)!==0)try{e.b.error(r);return}catch(t){r=t}e=e.parent}throw r}const va=new Set;let Ot=null,fo=null,on=null,wn=[],_l=null,Nc=!1,po=!1;class cn{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#n=0;#s=0;#l=null;#o=[];#i=[];skipped_effects=new Set;is_fork=!1;process(e){wn=[],fo=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const n of e)this.#r(n,t);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects)):(fo=this,Ot=null,Nh(t.render_effects),Nh(t.effects),fo=null,this.#l?.resolve()),on=null}#r(e,t){e.f^=wr;for(var n=e.first;n!==null;){var s=n.f,i=(s&(ss|Rs))!==0,o=i&&(s&wr)!==0,a=o||(s&Yr)!==0||this.skipped_effects.has(n);if((n.f&fl)!==0&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[],block_effects:[]}),!a&&n.fn!==null){i?n.f^=wr:(s&Cd)!==0?t.effects.push(n):Ko(n)&&((n.f&ns)!==0&&t.block_effects.push(n),No(n));var l=n.first;if(l!==null){n=l;continue}}var u=n.parent;for(n=n.next;n===null&&u!==null;)u===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects),t=t.parent),n=u.next,u=u.parent}}#a(e){for(const t of e)((t.f&jr)!==0?this.#o:this.#i).push(t),xr(t,wr)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),on?.set(e,e.v)}activate(){Ot=this}deactivate(){Ot=null,on=null}flush(){if(this.activate(),wn.length>0){if(Np(),Ot!==null&&Ot!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#n===0&&this.#d()}#d(){if(va.size>1){this.previous.clear();var e=on,t=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of va){if(s===this){t=!1;continue}const i=[];for(const[a,l]of this.current){if(s.current.has(a))if(t&&l!==s.current.get(a))s.current.set(a,l);else continue;i.push(a)}if(i.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const u of i)$p(u,o,a,l);if(wn.length>0){Ot=s,s.apply();for(const u of wn)s.#r(u,n);wn=[],s.deactivate()}}}Ot=null,on=e}this.committed=!0,va.delete(this)}increment(e){this.#n+=1,e&&(this.#s+=1)}decrement(e){this.#n-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)xr(e,jr),js(e);for(const e of this.#i)xr(e,is),js(e);this.#o=[],this.#i=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=bp()).promise}static ensure(){if(Ot===null){const e=Ot=new cn;va.add(Ot),po||cn.enqueue(()=>{Ot===e&&e.flush()})}return Ot}static enqueue(e){An(e)}apply(){}}function Oe(r){var e=po;po=!0;try{for(var t;;){if(Z1(),wn.length===0&&(Ot?.flush(),wn.length===0))return _l=null,t;Np()}}finally{po=e}}function Np(){var r=gi;Nc=!0;try{var e=0;for(Dh(!0);wn.length>0;){var t=cn.ensure();if(e++>1e3){var n,s;e0()}t.process(wn),_s.clear()}}finally{Nc=!1,Dh(r),_l=null}}function e0(){try{P1()}catch(r){Ci(r,_l)}}let qn=null;function Nh(r){var e=r.length;if(e!==0){for(var t=0;t<e;){var n=r[t++];if((n.f&(Vn|Yr))===0&&Ko(n)&&(qn=new Set,No(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Qp(n):n.fn=null),qn?.size>0)){_s.clear();for(const s of qn){if((s.f&(Vn|Yr))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)qn.has(o)&&(qn.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(Vn|Yr))===0&&No(l)}}qn.clear()}}qn=null}}function $p(r,e,t,n){if(!t.has(r)&&(t.add(r),r.reactions!==null))for(const s of r.reactions){const i=s.f;(i&Er)!==0?$p(s,e,t,n):(i&(Td|ns))!==0&&(i&jr)===0&&Lp(s,e,n)&&(xr(s,jr),js(s))}}function Lp(r,e,t){const n=t.get(r);if(n!==void 0)return n;if(r.deps!==null)for(const s of r.deps){if(e.includes(s))return!0;if((s.f&Er)!==0&&Lp(s,e,t))return t.set(s,!0),!0}return t.set(r,!1),!1}function js(r){for(var e=_l=r;e.parent!==null;){e=e.parent;var t=e.f;if(Nc&&e===Ye&&(t&ns)!==0)return;if((t&(Rs|ss))!==0){if((t&wr)===0)return;e.f^=wr}}wn.push(e)}function t0(r){let e=0,t=Es(0),n;return()=>{d0()&&(f(t),Go(()=>(e===0&&(n=vn(()=>r(()=>vo(t)))),e+=1,()=>{An(()=>{e-=1,e===0&&(n?.(),n=void 0,vo(t))})})))}}var r0=Qn|Xs|fl;function n0(r,e,t){new s0(r,e,t)}class s0{parent;#t=!1;#e;#n=$e?dt:null;#s;#l;#o;#i=null;#r=null;#a=null;#c=null;#d=null;#f=0;#u=0;#p=!1;#h=null;#b=t0(()=>(this.#h=Es(this.#f),()=>{this.#h=null}));constructor(e,t,n){this.#e=e,this.#s=t,this.#l=n,this.parent=Ye.b,this.#t=!!this.#s.pending,this.#o=os(()=>{if(Ye.b=this,$e){const i=this.#n;Xn(),i.nodeType===Oi&&i.data===ml?this.#y():this.#w()}else{var s=this.#g();try{this.#i=zr(()=>n(s))}catch(i){this.error(i)}this.#u>0?this.#m():this.#t=!1}return()=>{this.#d?.remove()}},r0),$e&&(this.#e=dt)}#w(){try{this.#i=zr(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#s.pending;e&&(this.#r=zr(()=>e(this.#e)),cn.enqueue(()=>{var t=this.#g();this.#i=this.#v(()=>(cn.ensure(),zr(()=>this.#l(t)))),this.#u>0?this.#m():(mi(this.#r,()=>{this.#r=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#d=rn(),this.#e.before(this.#d),e=this.#d),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#v(e){var t=Ye,n=it,s=Xt;Br(this.#o),yr(this.#o),Ei(this.#o.ctx);try{return e()}catch(i){return Pp(i),null}finally{Br(t),yr(n),Ei(s)}}#m(){const e=this.#s.pending;this.#i!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#d),Zp(this.#i,this.#c)),this.#r===null&&(this.#r=zr(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#u+=e,this.#u===0&&(this.#t=!1,this.#r&&mi(this.#r,()=>{this.#r=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&Ii(this.#h,this.#f)}get_effect_pending(){return this.#b(),f(this.#h)}error(e){var t=this.#s.onerror;let n=this.#s.failed;if(this.#p||!t&&!n)throw e;this.#i&&(cr(this.#i),this.#i=null),this.#r&&(cr(this.#r),this.#r=null),this.#a&&(cr(this.#a),this.#a=null),$e&&(mr(this.#n),Mr(),mr(Da()));var s=!1,i=!1;const o=()=>{if(s){Q1();return}s=!0,i&&M1(),cn.ensure(),this.#f=0,this.#a!==null&&mi(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#i=this.#v(()=>(this.#p=!1,zr(()=>this.#l(this.#e)))),this.#u>0?this.#m():this.#t=!1};var a=it;try{yr(null),i=!0,t?.(e,o),i=!1}catch(l){Ci(l,this.#o&&this.#o.parent)}finally{yr(a)}n&&An(()=>{this.#a=this.#v(()=>{cn.ensure(),this.#p=!0;try{return zr(()=>{n(this.#e,()=>e,()=>o)})}catch(l){return Ci(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Dp(r,e,t,n){const s=qi()?Wo:Cn;if(t.length===0&&r.length===0){n(e.map(s));return}var i=Ot,o=Ye,a=i0();function l(){Promise.all(t.map(u=>o0(u))).then(u=>{a();try{n([...e.map(s),...u])}catch(p){(o.f&Vn)===0&&Ci(p,o)}i?.deactivate(),Oa()}).catch(u=>{Ci(u,o)})}r.length>0?Promise.all(r).then(()=>{a();try{return l()}finally{i?.deactivate(),Oa()}}):l()}function i0(){var r=Ye,e=it,t=Xt,n=Ot;return function(i=!0){Br(r),yr(e),Ei(t),i&&n?.activate()}}function Oa(){Br(null),yr(null),Ei(null)}function Wo(r){var e=Er|jr,t=it!==null&&(it.f&Er)!==0?it:null;return Ye===null||t!==null&&(t.f&tn)!==0?e|=tn:Ye.f|=Xs,{ctx:Xt,deps:null,effects:null,equals:Tp,f:e,fn:r,reactions:null,rv:0,v:pr,wv:0,parent:t??Ye,ac:null}}function o0(r,e){let t=Ye;t===null&&T1();var n=t.b,s=void 0,i=Es(pr),o=!it,a=new Map;return p0(()=>{var l=bp();s=l.promise;try{Promise.resolve(r()).then(l.resolve,l.reject).then(()=>{u===Ot&&u.committed&&u.deactivate(),Oa()})}catch(v){l.reject(v),Oa()}var u=Ot;if(o){var p=!n.is_pending();n.update_pending_count(1),u.increment(p),a.get(u)?.reject(fi),a.delete(u),a.set(u,l)}const m=(v,b=void 0)=>{if(u.activate(),b)b!==fi&&(i.f|=zs,Ii(i,b));else{(i.f&zs)!==0&&(i.f^=zs),Ii(i,v);for(const[g,w]of a){if(a.delete(g),g===u)break;w.reject(fi)}}o&&(n.update_pending_count(-1),u.decrement(p))};l.promise.then(m,v=>m(null,v||"unknown"))}),zi(()=>{for(const l of a.values())l.reject(fi)}),new Promise(l=>{function u(p){function m(){p===s?l(i):u(s)}p.then(m,m)}u(s)})}function Rn(r){const e=Wo(r);return ev(e),e}function Cn(r){const e=Wo(r);return e.equals=Ap,e}function Op(r){var e=r.effects;if(e!==null){r.effects=null;for(var t=0;t<e.length;t+=1)cr(e[t])}}function a0(r){for(var e=r.parent;e!==null;){if((e.f&Er)===0)return e;e=e.parent}return null}function Pd(r){var e,t=Ye;Br(a0(r));try{r.f&=~La,Op(r),e=sv(r)}finally{Br(t)}return e}function Mp(r){var e=Pd(r);if(r.equals(e)||(r.v=e,r.wv=rv()),!Js)if(on!==null)on.set(r,r.v);else{var t=(vs||(r.f&tn)!==0)&&r.deps!==null?is:wr;xr(r,t)}}let $c=new Set;const _s=new Map;let qp=!1;function Es(r,e){var t={f:0,v:r,reactions:null,equals:Tp,rv:0,wv:0};return t}function ne(r,e){const t=Es(r);return ev(t),t}function Nd(r,e=!1,t=!0){const n=Es(r);return e||(n.equals=Ap),Mi&&t&&Xt!==null&&Xt.l!==null&&(Xt.l.s??=[]).push(n),n}function y(r,e,t=!1){it!==null&&(!an||(it.f&Ph)!==0)&&qi()&&(it.f&(Er|ns|Td|Ph))!==0&&!Hn?.includes(r)&&O1();let n=t?hr(e):e;return Ii(r,n)}function Ii(r,e){if(!r.equals(e)){var t=r.v;Js?_s.set(r,e):_s.set(r,t),r.v=e;var n=cn.ensure();n.capture(r,t),(r.f&Er)!==0&&((r.f&jr)!==0&&Pd(r),xr(r,(r.f&tn)===0?wr:is)),r.wv=rv(),zp(r,jr),qi()&&Ye!==null&&(Ye.f&wr)!==0&&(Ye.f&(ss|Rs))===0&&(Zr===null?g0([r]):Zr.push(r)),!n.is_fork&&$c.size>0&&!qp&&l0()}return e}function l0(){qp=!1;const r=Array.from($c);for(const e of r)(e.f&wr)!==0&&xr(e,is),Ko(e)&&No(e);$c.clear()}function Lc(r,e=1){var t=f(r),n=e===1?t++:t--;return y(r,t),n}function vo(r){y(r,r.v+1)}function zp(r,e){var t=r.reactions;if(t!==null)for(var n=qi(),s=t.length,i=0;i<s;i++){var o=t[i],a=o.f;if(!(!n&&o===Ye)){var l=(a&jr)===0;l&&xr(o,e),(a&Er)!==0?(a&La)===0&&(o.f|=La,zp(o,is)):l&&((a&ns)!==0&&qn!==null&&qn.add(o),js(o))}}}function hr(r){if(typeof r!="object"||r===null||En in r)return r;const e=Ed(r);if(e!==w1&&e!==y1)return r;var t=new Map,n=xd(r),s=ne(0),i=Us,o=a=>{if(Us===i)return a();var l=it,u=Us;yr(null),Mh(i);var p=a();return yr(l),Mh(u),p};return n&&t.set("length",ne(r.length)),new Proxy(r,{defineProperty(a,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&L1();var p=t.get(l);return p===void 0?p=o(()=>{var m=ne(u.value);return t.set(l,m),m}):y(p,u.value,!0),!0},deleteProperty(a,l){var u=t.get(l);if(u===void 0){if(l in a){const p=o(()=>ne(pr));t.set(l,p),vo(s)}}else y(u,pr),vo(s);return!0},get(a,l,u){if(l===En)return r;var p=t.get(l),m=l in a;if(p===void 0&&(!m||Bn(a,l)?.writable)&&(p=o(()=>{var b=hr(m?a[l]:pr),g=ne(b);return g}),t.set(l,p)),p!==void 0){var v=f(p);return v===pr?void 0:v}return Reflect.get(a,l,u)},getOwnPropertyDescriptor(a,l){var u=Reflect.getOwnPropertyDescriptor(a,l);if(u&&"value"in u){var p=t.get(l);p&&(u.value=f(p))}else if(u===void 0){var m=t.get(l),v=m?.v;if(m!==void 0&&v!==pr)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return u},has(a,l){if(l===En)return!0;var u=t.get(l),p=u!==void 0&&u.v!==pr||Reflect.has(a,l);if(u!==void 0||Ye!==null&&(!p||Bn(a,l)?.writable)){u===void 0&&(u=o(()=>{var v=p?hr(a[l]):pr,b=ne(v);return b}),t.set(l,u));var m=f(u);if(m===pr)return!1}return p},set(a,l,u,p){var m=t.get(l),v=l in a;if(n&&l==="length")for(var b=u;b<m.v;b+=1){var g=t.get(b+"");g!==void 0?y(g,pr):b in a&&(g=o(()=>ne(pr)),t.set(b+"",g))}if(m===void 0)(!v||Bn(a,l)?.writable)&&(m=o(()=>ne(void 0)),y(m,hr(u)),t.set(l,m));else{v=m.v!==pr;var w=o(()=>hr(u));y(m,w)}var k=Reflect.getOwnPropertyDescriptor(a,l);if(k?.set&&k.set.call(p,u),!v){if(n&&typeof l=="string"){var I=t.get("length"),P=Number(l);Number.isInteger(P)&&P>=I.v&&y(I,P+1)}vo(s)}return!0},ownKeys(a){f(s);var l=Reflect.ownKeys(a).filter(m=>{var v=t.get(m);return v===void 0||v.v!==pr});for(var[u,p]of t)p.v!==pr&&!(u in a)&&l.push(u);return l},setPrototypeOf(){D1()}})}function $h(r){try{if(r!==null&&typeof r=="object"&&En in r)return r[En]}catch{}return r}function Up(r,e){return Object.is($h(r),$h(e))}var Dc,Fp,jp,Bp;function Oc(){if(Dc===void 0){Dc=window,Fp=/Firefox/.test(navigator.userAgent);var r=Element.prototype,e=Node.prototype,t=Text.prototype;jp=Bn(e,"firstChild").get,Bp=Bn(e,"nextSibling").get,Rh(r)&&(r.__click=void 0,r.__className=void 0,r.__attributes=null,r.__style=void 0,r.__e=void 0),Rh(t)&&(t.__t=void 0)}}function rn(r=""){return document.createTextNode(r)}function pn(r){return jp.call(r)}function Nn(r){return Bp.call(r)}function d(r,e){if(!$e)return pn(r);var t=pn(dt);if(t===null)t=dt.appendChild(rn());else if(e&&t.nodeType!==Ad){var n=rn();return t?.before(n),mr(n),n}return mr(t),t}function de(r,e=!1){if(!$e){var t=pn(r);return t instanceof Comment&&t.data===""?Nn(t):t}if(e&&dt?.nodeType!==Ad){var n=rn();return dt?.before(n),mr(n),n}return dt}function h(r,e=1,t=!1){let n=$e?dt:r;for(var s;e--;)s=n,n=Nn(n);if(!$e)return n;if(t&&n?.nodeType!==Ad){var i=rn();return n===null?s?.after(i):n.before(i),mr(i),i}return mr(n),n}function $d(r){r.textContent=""}function Vp(){return!1}function Ao(r,e){if(e){const t=document.body;r.autofocus=!0,An(()=>{document.activeElement===t&&r.focus()})}}function Ro(r){$e&&pn(r)!==null&&$d(r)}let Lh=!1;function Hp(){Lh||(Lh=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{if(!r.defaultPrevented)for(const e of r.target.elements)e.__on_r?.()})},{capture:!0}))}function bl(r){var e=it,t=Ye;yr(null),Br(null);try{return r()}finally{yr(e),Br(t)}}function Ld(r,e,t,n=t){r.addEventListener(e,()=>bl(t));const s=r.__on_r;s?r.__on_r=()=>{s(),n(!0)}:r.__on_r=()=>n(!0),Hp()}function Wp(r){Ye===null&&it===null&&R1(),it!==null&&(it.f&tn)!==0&&Ye===null&&A1(),Js&&S1()}function c0(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function _n(r,e,t,n=!0){var s=Ye;s!==null&&(s.f&Yr)!==0&&(r|=Yr);var i={ctx:Xt,deps:null,nodes_start:null,nodes_end:null,f:r|jr,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{No(i),i.f|=Id}catch(l){throw cr(i),l}else e!==null&&js(i);if(n){var o=i;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Xs)===0&&(o=o.first,(r&ns)!==0&&(r&Qn)!==0&&o!==null&&(o.f|=Qn)),o!==null&&(o.parent=s,s!==null&&c0(o,s),it!==null&&(it.f&Er)!==0&&(r&Rs)===0)){var a=it;(a.effects??=[]).push(o)}}return i}function d0(){return it!==null&&!an}function zi(r){const e=_n(hl,null,!1);return xr(e,wr),e.teardown=r,e}function Bs(r){Wp();var e=Ye.f,t=!it&&(e&ss)!==0&&(e&Id)===0;if(t){var n=Xt;(n.e??=[]).push(r)}else return Gp(r)}function Gp(r){return _n(Cd|wp,r,!1)}function u0(r){return Wp(),_n(hl|wp,r,!0)}function h0(r){cn.ensure();const e=_n(Rs|Xs,r,!0);return()=>{cr(e)}}function f0(r){cn.ensure();const e=_n(Rs|Xs,r,!0);return(t={})=>new Promise(n=>{t.outro?mi(e,()=>{cr(e),n(void 0)}):(cr(e),n(void 0))})}function Ui(r){return _n(Cd,r,!1)}function p0(r){return _n(Td|Xs,r,!0)}function Go(r,e=0){return _n(hl|e,r,!0)}function L(r,e=[],t=[],n=[]){Dp(n,e,t,s=>{_n(hl,()=>r(...s.map(f)),!0)})}function os(r,e=0){var t=_n(ns|e,r,!0);return t}function zr(r,e=!0){return _n(ss|Xs,r,!0,e)}function Kp(r){var e=r.teardown;if(e!==null){const t=Js,n=it;Oh(!0),yr(null);try{e.call(null)}finally{Oh(t),yr(n)}}}function Yp(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){const s=t.ac;s!==null&&bl(()=>{s.abort(fi)});var n=t.next;(t.f&Rs)!==0?t.parent=null:cr(t,e),t=n}}function v0(r){for(var e=r.first;e!==null;){var t=e.next;(e.f&ss)===0&&cr(e),e=t}}function cr(r,e=!0){var t=!1;(e||(r.f&E1)!==0)&&r.nodes_start!==null&&r.nodes_end!==null&&(m0(r.nodes_start,r.nodes_end),t=!0),Yp(r,e&&!t),Ma(r,0),xr(r,Vn);var n=r.transitions;if(n!==null)for(const i of n)i.stop();Kp(r);var s=r.parent;s!==null&&s.first!==null&&Qp(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes_start=r.nodes_end=r.ac=null}function m0(r,e){for(;r!==null;){var t=r===e?null:Nn(r);r.remove(),r=t}}function Qp(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function mi(r,e,t=!0){var n=[];Dd(r,n,!0),Xp(n,()=>{t&&cr(r),e&&e()})}function Xp(r,e){var t=r.length;if(t>0){var n=()=>--t||e();for(var s of r)s.out(n)}else e()}function Dd(r,e,t){if((r.f&Yr)===0){if(r.f^=Yr,r.transitions!==null)for(const o of r.transitions)(o.is_global||t)&&e.push(o);for(var n=r.first;n!==null;){var s=n.next,i=(n.f&Qn)!==0||(n.f&ss)!==0&&(r.f&ns)!==0;Dd(n,e,i?t:!1),n=s}}}function Od(r){Jp(r,!0)}function Jp(r,e){if((r.f&Yr)!==0){r.f^=Yr,(r.f&wr)===0&&(xr(r,jr),js(r));for(var t=r.first;t!==null;){var n=t.next,s=(t.f&Qn)!==0||(t.f&ss)!==0;Jp(t,s?e:!1),t=n}if(r.transitions!==null)for(const i of r.transitions)(i.is_global||e)&&i.in()}}function Zp(r,e){for(var t=r.nodes_start,n=r.nodes_end;t!==null;){var s=t===n?null:Nn(t);e.append(t),t=s}}let gi=!1;function Dh(r){gi=r}let Js=!1;function Oh(r){Js=r}let it=null,an=!1;function yr(r){it=r}let Ye=null;function Br(r){Ye=r}let Hn=null;function ev(r){it!==null&&(Hn===null?Hn=[r]:Hn.push(r))}let Ar=null,Wr=0,Zr=null;function g0(r){Zr=r}let tv=1,Po=0,Us=Po;function Mh(r){Us=r}let vs=!1;function rv(){return++tv}function Ko(r){var e=r.f;if((e&jr)!==0)return!0;if((e&is)!==0){var t=r.deps,n=(e&tn)!==0;if(e&Er&&(r.f&=~La),t!==null){var s,i,o=(e&$a)!==0,a=n&&Ye!==null&&!vs,l=t.length;if((o||a)&&(Ye===null||(Ye.f&Vn)===0)){var u=r,p=u.parent;for(s=0;s<l;s++)i=t[s],(o||!i?.reactions?.includes(u))&&(i.reactions??=[]).push(u);o&&(u.f^=$a),a&&p!==null&&(p.f&tn)===0&&(u.f^=tn)}for(s=0;s<l;s++)if(i=t[s],Ko(i)&&Mp(i),i.wv>r.wv)return!0}(!n||Ye!==null&&!vs)&&xr(r,wr)}return!1}function nv(r,e,t=!0){var n=r.reactions;if(n!==null&&!Hn?.includes(r))for(var s=0;s<n.length;s++){var i=n[s];(i.f&Er)!==0?nv(i,e,!1):e===i&&(t?xr(i,jr):(i.f&wr)!==0&&xr(i,is),js(i))}}function sv(r){var e=Ar,t=Wr,n=Zr,s=it,i=vs,o=Hn,a=Xt,l=an,u=Us,p=r.f;Ar=null,Wr=0,Zr=null,vs=(p&tn)!==0&&(an||!gi||it===null),it=(p&(ss|Rs))===0?r:null,Hn=null,Ei(r.ctx),an=!1,Us=++Po,r.ac!==null&&(bl(()=>{r.ac.abort(fi)}),r.ac=null);try{r.f|=Pc;var m=r.fn,v=m(),b=r.deps;if(Ar!==null){var g;if(Ma(r,Wr),b!==null&&Wr>0)for(b.length=Wr+Ar.length,g=0;g<Ar.length;g++)b[Wr+g]=Ar[g];else r.deps=b=Ar;if(!vs||(p&Er)!==0&&r.reactions!==null)for(g=Wr;g<b.length;g++)(b[g].reactions??=[]).push(r)}else b!==null&&Wr<b.length&&(Ma(r,Wr),b.length=Wr);if(qi()&&Zr!==null&&!an&&b!==null&&(r.f&(Er|is|jr))===0)for(g=0;g<Zr.length;g++)nv(Zr[g],r);return s!==null&&s!==r&&(Po++,Zr!==null&&(n===null?n=Zr:n.push(...Zr))),(r.f&zs)!==0&&(r.f^=zs),v}catch(w){return Pp(w)}finally{r.f^=Pc,Ar=e,Wr=t,Zr=n,it=s,vs=i,Hn=o,Ei(a),an=l,Us=u}}function _0(r,e){let t=e.reactions;if(t!==null){var n=b1.call(t,r);if(n!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[n]=t[s],t.pop())}}t===null&&(e.f&Er)!==0&&(Ar===null||!Ar.includes(e))&&(xr(e,is),(e.f&(tn|$a))===0&&(e.f^=$a),Op(e),Ma(e,0))}function Ma(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)_0(r,t[n])}function No(r){var e=r.f;if((e&Vn)===0){xr(r,wr);var t=Ye,n=gi;Ye=r,gi=!0;try{(e&ns)!==0?v0(r):Yp(r),Kp(r);var s=sv(r);r.teardown=typeof s=="function"?s:null,r.wv=tv;var i;gp&&X1&&(r.f&jr)!==0&&r.deps}finally{gi=n,Ye=t}}}async function b0(){await Promise.resolve(),Oe()}function f(r){var e=r.f,t=(e&Er)!==0;if(it!==null&&!an){var n=Ye!==null&&(Ye.f&Vn)!==0;if(!n&&!Hn?.includes(r)){var s=it.deps;if((it.f&Pc)!==0)r.rv<Po&&(r.rv=Po,Ar===null&&s!==null&&s[Wr]===r?Wr++:Ar===null?Ar=[r]:(!vs||!Ar.includes(r))&&Ar.push(r));else{(it.deps??=[]).push(r);var i=r.reactions;i===null?r.reactions=[it]:i.includes(it)||i.push(it)}}}else if(t&&r.deps===null&&r.effects===null){var o=r,a=o.parent;a!==null&&(a.f&tn)===0&&(o.f^=tn)}if(Js){if(_s.has(r))return _s.get(r);if(t){o=r;var l=o.v;return((o.f&wr)===0&&o.reactions!==null||iv(o))&&(l=Pd(o)),_s.set(o,l),l}}else if(t){if(o=r,on?.has(o))return on.get(o);Ko(o)&&Mp(o)}if(on?.has(r))return on.get(r);if((r.f&zs)!==0)throw r.v;return r.v}function iv(r){if(r.v===pr)return!0;if(r.deps===null)return!1;for(const e of r.deps)if(_s.has(e)||(e.f&Er)!==0&&iv(e))return!0;return!1}function vn(r){var e=an;try{return an=!0,r()}finally{an=e}}const w0=-7169;function xr(r,e){r.f=r.f&w0|e}function hi(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(En in r)Mc(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&En in t&&Mc(t)}}}function Mc(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{Mc(r[n],e)}catch{}const t=Ed(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=_p(t);for(let s in n){const i=n[s].get;if(i)try{i.call(r)}catch{}}}}}function y0(r){return r.endsWith("capture")&&r!=="gotpointercapture"&&r!=="lostpointercapture"}const x0=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function k0(r){return x0.includes(r)}const E0={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function C0(r){return r=r.toLowerCase(),E0[r]??r}const I0=["touchstart","touchmove"];function T0(r){return I0.includes(r)}const S0=["textarea","script","style","title"];function A0(r){return S0.includes(r)}const ov=new Set,qc=new Set;function av(r,e,t,n={}){function s(i){if(n.capture||oo.call(e,i),!i.cancelBubble)return bl(()=>t?.call(this,i))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?An(()=>{e.addEventListener(r,s,n)}):e.addEventListener(r,s,n),s}function Pn(r,e,t,n,s){var i={capture:n,passive:s},o=av(r,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&zi(()=>{e.removeEventListener(r,o,i)})}function xt(r){for(var e=0;e<r.length;e++)ov.add(r[e]);for(var t of qc)t(r)}let qh=null;function oo(r){var e=this,t=e.ownerDocument,n=r.type,s=r.composedPath?.()||[],i=s[0]||r.target;qh=r;var o=0,a=qh===r&&r.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){r.__root=e;return}var u=s.indexOf(e);if(u===-1)return;l<=u&&(o=l)}if(i=s[o]||r.target,i!==e){So(r,"currentTarget",{configurable:!0,get(){return i||t}});var p=it,m=Ye;yr(null),Br(null);try{for(var v,b=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+n];w!=null&&(!i.disabled||r.target===i)&&w.call(i,r)}catch(k){v?b.push(k):v=k}if(r.cancelBubble||g===e||g===null)break;i=g}if(v){for(let k of b)queueMicrotask(()=>{throw k});throw v}}finally{r.__root=e,delete r.currentTarget,yr(p),Br(m)}}}function lv(r){var e=document.createElement("template");return e.innerHTML=r.replaceAll("<!>","<!---->"),e.content}function Wn(r,e){var t=Ye;t.nodes_start===null&&(t.nodes_start=r,t.nodes_end=e)}function R(r,e){var t=(e&V1)!==0,n=(e&H1)!==0,s,i=!r.startsWith("<!>");return()=>{if($e)return Wn(dt,null),dt;s===void 0&&(s=lv(i?r:"<!>"+r),t||(s=pn(s)));var o=n||Fp?document.importNode(s,!0):s.cloneNode(!0);if(t){var a=pn(o),l=o.lastChild;Wn(a,l)}else Wn(o,o);return o}}function R0(r,e,t="svg"){var n=!r.startsWith("<!>"),s=`<${t}>${n?r:"<!>"+r}</${t}>`,i;return()=>{if($e)return Wn(dt,null),dt;if(!i){var o=lv(s),a=pn(o);i=pn(a)}var l=i.cloneNode(!0);return Wn(l,l),l}}function P0(r,e){return R0(r,e,"svg")}function _e(){if($e)return Wn(dt,null),dt;var r=document.createDocumentFragment(),e=document.createComment(""),t=rn();return r.append(e,t),Wn(e,t),r}function x(r,e){if($e){Ye.nodes_end=dt,Xn();return}r!==null&&r.before(e)}function _(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??=r.nodeValue)&&(r.__t=t,r.nodeValue=t+"")}function Md(r,e){return cv(r,e)}function N0(r,e){Oc(),e.intro=e.intro??!1;const t=e.target,n=$e,s=dt;try{for(var i=pn(t);i&&(i.nodeType!==Oi||i.data!==Cp);)i=Nn(i);if(!i)throw ki;Rr(!0),mr(i);const o=cv(r,{...e,anchor:i});return Rr(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==ki&&console.warn("Failed to hydrate: ",o),e.recover===!1&&N1(),Oc(),$d(t),Rr(!1),Md(r,e)}finally{Rr(n),mr(s)}}const ai=new Map;function cv(r,{target:e,anchor:t,props:n={},events:s,context:i,intro:o=!0}){Oc();var a=new Set,l=m=>{for(var v=0;v<m.length;v++){var b=m[v];if(!a.has(b)){a.add(b);var g=T0(b);e.addEventListener(b,oo,{passive:g});var w=ai.get(b);w===void 0?(document.addEventListener(b,oo,{passive:g}),ai.set(b,1)):ai.set(b,w+1)}}};l(kd(ov)),qc.add(l);var u=void 0,p=f0(()=>{var m=t??e.appendChild(rn());return n0(m,{pending:()=>{}},v=>{if(i){ot({});var b=Xt;b.c=i}if(s&&(n.$$events=s),$e&&Wn(v,null),u=r(v,n)||{},$e&&(Ye.nodes_end=dt,dt===null||dt.nodeType!==Oi||dt.data!==Rd))throw gl(),ki;i&&at()}),()=>{for(var v of a){e.removeEventListener(v,oo);var b=ai.get(v);--b===0?(document.removeEventListener(v,oo),ai.delete(v)):ai.set(v,b)}qc.delete(l),m!==t&&m.parentNode?.removeChild(m)}});return zc.set(u,p),u}let zc=new WeakMap;function $0(r,e){const t=zc.get(r);return t?(zc.delete(r),t(e)):Promise.resolve()}class Yo{anchor;#t=new Map;#e=new Map;#n=new Map;#s=!0;constructor(e,t=!0){this.anchor=e,this.#s=t}#l=()=>{var e=Ot;if(this.#t.has(e)){var t=this.#t.get(e),n=this.#e.get(t);if(n)Od(n);else{var s=this.#n.get(t);s&&(this.#e.set(t,s.effect),this.#n.delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[i,o]of this.#t){if(this.#t.delete(i),i===e)break;const a=this.#n.get(o);a&&(cr(a.effect),this.#n.delete(o))}for(const[i,o]of this.#e){if(i===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(i)){var u=document.createDocumentFragment();Zp(o,u),u.append(rn()),this.#n.set(i,{effect:o,fragment:u})}else cr(o);this.#e.delete(i)};this.#s||!n?mi(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[n,s]of this.#n)t.includes(n)||(cr(s.effect),this.#n.delete(n))};ensure(e,t){var n=Ot,s=Vp();if(t&&!this.#e.has(e)&&!this.#n.has(e))if(s){var i=document.createDocumentFragment(),o=rn();i.append(o),this.#n.set(e,{effect:zr(()=>t(o)),fragment:i})}else this.#e.set(e,zr(()=>t(this.anchor)));if(this.#t.set(n,e),s){for(const[a,l]of this.#e)a===e?n.skipped_effects.delete(l):n.skipped_effects.add(l);for(const[a,l]of this.#n)a===e?n.skipped_effects.delete(l.effect):n.skipped_effects.add(l.effect);n.oncommit(this.#l),n.ondiscard(this.#o)}else $e&&(this.anchor=dt),this.#l()}}function F(r,e,t=!1){$e&&Xn();var n=new Yo(r),s=t?Qn:0;function i(o,a){if($e){const u=Ip(r)===ml;if(o===u){var l=Da();mr(l),n.anchor=l,Rr(!1),n.ensure(o,a),Rr(!0);return}}n.ensure(o,a)}os(()=>{var o=!1;e((a,l=!0)=>{o=!0,i(l,a)}),o||i(!1,null)},s)}function L0(r,e,t){$e&&Xn();var n=new Yo(r),s=!qi();os(()=>{var i=e();s&&i!==null&&typeof i=="object"&&(i={}),n.ensure(i,t)})}function yn(r,e){return e}function D0(r,e,t){for(var n=r.items,s=[],i=e.length,o=0;o<i;o++)Dd(e[o].e,s,!0);var a=i>0&&s.length===0&&t!==null;if(a){var l=t.parentNode;$d(l),l.append(t),n.clear(),bn(r,e[0].prev,e[i-1].next)}Xp(s,()=>{for(var u=0;u<i;u++){var p=e[u];a||(n.delete(p.k),bn(r,p.prev,p.next)),cr(p.e,!a)}})}function nr(r,e,t,n,s,i=null){var o=r,a={flags:e,items:new Map,first:null},l=(e&kp)!==0;if(l){var u=r;o=$e?mr(pn(u)):u.appendChild(rn())}$e&&Xn();var p=null,m=!1,v=new Map,b=Cn(()=>{var I=t();return xd(I)?I:I==null?[]:kd(I)}),g,w;function k(){O0(w,g,a,v,o,s,e,n,t),i!==null&&(g.length===0?p?Od(p):p=zr(()=>i(o)):p!==null&&mi(p,()=>{p=null}))}os(()=>{w??=Ye,g=f(b);var I=g.length;if(m&&I===0)return;m=I===0;let P=!1;if($e){var $=Ip(o)===ml;$!==(I===0)&&(o=Da(),mr(o),Rr(!1),P=!0)}if($e){for(var N=null,q,T=0;T<I;T++){if(dt.nodeType===Oi&&dt.data===Rd){o=dt,P=!0,Rr(!1);break}var A=g[T],C=n(A,T);q=Uc(dt,a,N,null,A,C,T,s,e,t),a.items.set(C,q),N=q}I>0&&mr(Da())}if($e)I===0&&i&&(p=zr(()=>i(o)));else if(Vp()){var E=new Set,S=Ot;for(T=0;T<I;T+=1){A=g[T],C=n(A,T);var O=a.items.get(C)??v.get(C);O?(e&(pl|vl))!==0&&dv(O,A,T,e):(q=Uc(null,a,null,null,A,C,T,s,e,t,!0),v.set(C,q)),E.add(C)}for(const[M,H]of a.items)E.has(M)||S.skipped_effects.add(H.e);S.oncommit(k)}else k();P&&Rr(!0),f(b)}),$e&&(o=dt)}function O0(r,e,t,n,s,i,o,a,l){var u=(o&q1)!==0,p=(o&(pl|vl))!==0,m=e.length,v=t.items,b=t.first,g=b,w,k=null,I,P=[],$=[],N,q,T,A;if(u)for(A=0;A<m;A+=1)N=e[A],q=a(N,A),T=v.get(q),T!==void 0&&(T.a?.measure(),(I??=new Set).add(T));for(A=0;A<m;A+=1){if(N=e[A],q=a(N,A),T=v.get(q),T===void 0){var C=n.get(q);if(C!==void 0){n.delete(q),v.set(q,C);var E=k?k.next:g;bn(t,k,C),bn(t,C,E),sc(C,E,s),k=C}else{var S=g?g.e.nodes_start:s;k=Uc(S,t,k,k===null?t.first:k.next,N,q,A,i,o,l)}v.set(q,k),P=[],$=[],g=k.next;continue}if(p&&dv(T,N,A,o),(T.e.f&Yr)!==0&&(Od(T.e),u&&(T.a?.unfix(),(I??=new Set).delete(T))),T!==g){if(w!==void 0&&w.has(T)){if(P.length<$.length){var O=$[0],M;k=O.prev;var H=P[0],X=P[P.length-1];for(M=0;M<P.length;M+=1)sc(P[M],O,s);for(M=0;M<$.length;M+=1)w.delete($[M]);bn(t,H.prev,X.next),bn(t,k,H),bn(t,X,O),g=O,k=X,A-=1,P=[],$=[]}else w.delete(T),sc(T,g,s),bn(t,T.prev,T.next),bn(t,T,k===null?t.first:k.next),bn(t,k,T),k=T;continue}for(P=[],$=[];g!==null&&g.k!==q;)(g.e.f&Yr)===0&&(w??=new Set).add(g),$.push(g),g=g.next;if(g===null)continue;T=g}P.push(T),k=T,g=T.next}if(g!==null||w!==void 0){for(var V=w===void 0?[]:kd(w);g!==null;)(g.e.f&Yr)===0&&V.push(g),g=g.next;var le=V.length;if(le>0){var ue=(o&kp)!==0&&m===0?s:null;if(u){for(A=0;A<le;A+=1)V[A].a?.measure();for(A=0;A<le;A+=1)V[A].a?.fix()}D0(t,V,ue)}}u&&An(()=>{if(I!==void 0)for(T of I)T.a?.apply()}),r.first=t.first&&t.first.e,r.last=k&&k.e;for(var te of n.values())cr(te.e);n.clear()}function dv(r,e,t,n){(n&pl)!==0&&Ii(r.v,e),(n&vl)!==0?Ii(r.i,t):r.i=t}function Uc(r,e,t,n,s,i,o,a,l,u,p){var m=(l&pl)!==0,v=(l&z1)===0,b=m?v?Nd(s,!1,!1):Es(s):s,g=(l&vl)===0?o:Es(o),w={i:g,v:b,k:i,a:null,e:null,prev:t,next:n};try{if(r===null){var k=document.createDocumentFragment();k.append(r=rn())}return w.e=zr(()=>a(r,b,g,u),$e),w.e.prev=t&&t.e,w.e.next=n&&n.e,t===null?p||(e.first=w):(t.next=w,t.e.next=w.e),n!==null&&(n.prev=w,n.e.prev=w.e),w}finally{}}function sc(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=r.e.nodes_start;i!==null&&i!==n;){var o=Nn(i);s.before(i),i=o}}function bn(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function _t(r,e,t,n,s){$e&&Xn();var i=e.$$slots?.[t],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(r,o?()=>n:n)}function li(r,e,...t){var n=new Yo(r);os(()=>{const s=e()??null;n.ensure(s,s&&(i=>s(i,...t)))},Qn)}function M0(r,e,t){$e&&Xn();var n=new Yo(r);os(()=>{var s=e()??null;n.ensure(s,s&&(i=>t(i,s)))},Qn)}function q0(r,e,t,n,s,i){let o=$e;$e&&Xn();var a=null;$e&&dt.nodeType===I1&&(a=dt,Xn());var l=$e?dt:r,u=new Yo(l,!1);os(()=>{const p=e()||null;var m=G1;if(p===null){u.ensure(null,null);return}return u.ensure(p,v=>{if(p){if(a=$e?a:document.createElementNS(m,p),Wn(a,a),n){$e&&A0(p)&&a.append(document.createComment(""));var b=$e?pn(a):a.appendChild(rn());$e&&(b===null?Rr(!1):mr(b)),n(a,b)}Ye.nodes_end=a,v.before(a)}$e&&mr(v)}),()=>{}},Qn),zi(()=>{}),o&&(Rr(!0),mr(l))}function nt(r,e){Ui(()=>{var t=r.getRootNode(),n=t.host?t:t.head??t.ownerDocument.head;if(!n.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,n.appendChild(s)}})}function qa(r,e,t){Ui(()=>{var n=vn(()=>e(r,t?.())||{});if(n?.destroy)return()=>n.destroy()})}function z0(r,e){var t=void 0,n;os(()=>{t!==(t=e())&&(n&&(cr(n),n=null),t&&(n=zr(()=>{Ui(()=>t(r))})))})}function uv(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(t=uv(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function U0(){for(var r,e,t=0,n="",s=arguments.length;t<s;t++)(r=arguments[t])&&(e=uv(r))&&(n&&(n+=" "),n+=e);return n}function F0(r){return typeof r=="object"?U0(r):r??""}const zh=[...` 	
\r\f \v\uFEFF`];function j0(r,e,t){var n=r==null?"":""+r;if(e&&(n=n?n+" "+e:e),t){for(var s in t)if(t[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var a=o+i;(o===0||zh.includes(n[o-1]))&&(a===n.length||zh.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function Uh(r,e=!1){var t=e?" !important;":";",n="";for(var s in r){var i=r[s];i!=null&&i!==""&&(n+=" "+s+": "+i+t)}return n}function ic(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function B0(r,e){if(e){var t="",n,s;if(Array.isArray(e)?(n=e[0],s=e[1]):n=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,a=!1,l=[];n&&l.push(...Object.keys(n).map(ic)),s&&l.push(...Object.keys(s).map(ic));var u=0,p=-1;const w=r.length;for(var m=0;m<w;m++){var v=r[m];if(a?v==="/"&&r[m-1]==="*"&&(a=!1):i?i===v&&(i=!1):v==="/"&&r[m+1]==="*"?a=!0:v==='"'||v==="'"?i=v:v==="("?o++:v===")"&&o--,!a&&i===!1&&o===0){if(v===":"&&p===-1)p=m;else if(v===";"||m===w-1){if(p!==-1){var b=ic(r.substring(u,p).trim());if(!l.includes(b)){v!==";"&&m++;var g=r.substring(u,m).trim();t+=" "+g+";"}}u=m+1,p=-1}}}}return n&&(t+=Uh(n)),s&&(t+=Uh(s,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function rr(r,e,t,n,s,i){var o=r.__className;if($e||o!==t||o===void 0){var a=j0(t,n,i);(!$e||a!==r.getAttribute("class"))&&(a==null?r.removeAttribute("class"):e?r.className=a:r.setAttribute("class",a)),r.__className=t}else if(i&&s!==i)for(var l in i){var u=!!i[l];(s==null||u!==!!s[l])&&r.classList.toggle(l,u)}return i}function oc(r,e={},t,n){for(var s in t){var i=t[s];e[s]!==i&&(t[s]==null?r.style.removeProperty(s):r.style.setProperty(s,i,n))}}function wl(r,e,t,n){var s=r.__style;if($e||s!==e){var i=B0(e,n);(!$e||i!==r.getAttribute("style"))&&(i==null?r.removeAttribute("style"):r.style.cssText=i),r.__style=e}else n&&(Array.isArray(n)?(oc(r,t?.[0],n[0]),oc(r,t?.[1],n[1],"important")):oc(r,t,n));return n}function $o(r,e,t=!1){if(r.multiple){if(e==null)return;if(!xd(e))return Y1();for(var n of r.options)n.selected=e.includes(mo(n));return}for(n of r.options){var s=mo(n);if(Up(s,e)){n.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function qd(r){var e=new MutationObserver(()=>{$o(r,r.__value)});e.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),zi(()=>{e.disconnect()})}function hv(r,e,t=e){var n=new WeakSet,s=!0;Ld(r,"change",i=>{var o=i?"[selected]":":checked",a;if(r.multiple)a=[].map.call(r.querySelectorAll(o),mo);else{var l=r.querySelector(o)??r.querySelector("option:not([disabled])");a=l&&mo(l)}t(a),Ot!==null&&n.add(Ot)}),Ui(()=>{var i=e();if(r===document.activeElement){var o=fo??Ot;if(n.has(o))return}if($o(r,i,s),s&&i===void 0){var a=r.querySelector(":checked");a!==null&&(i=mo(a),t(i))}r.__value=i,s=!1}),qd(r)}function mo(r){return"__value"in r?r.__value:r.value}const Ji=Symbol("class"),Zi=Symbol("style"),fv=Symbol("is custom element"),pv=Symbol("is html");function Jn(r){if($e){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var n=r.value;Ee(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var s=r.checked;Ee(r,"checked",null),r.checked=s}}};r.__on_r=t,An(t),Hp()}}function V0(r,e){var t=yl(r);t.value===(t.value=e??void 0)||r.value===e&&(e!==0||r.nodeName!=="PROGRESS")||(r.value=e??"")}function H0(r,e){var t=yl(r);t.checked!==(t.checked=e??void 0)&&(r.checked=e)}function W0(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Ee(r,e,t,n){var s=yl(r);$e&&(s[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(r[C1]=t),t==null?r.removeAttribute(e):typeof t!="string"&&zd(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function st(r,e,t){var n=it,s=Ye;let i=$e;$e&&Rr(!1),yr(null),Br(null);try{e!=="style"&&(Fc.has(r.getAttribute("is")||r.nodeName)||!customElements||customElements.get(r.getAttribute("is")||r.tagName.toLowerCase())?zd(r).includes(e):t&&typeof t=="object")?r[e]=t:Ee(r,e,t==null?t:String(t))}finally{yr(n),Br(s),i&&Rr(!0)}}function G0(r,e,t,n,s=!1,i=!1){if($e&&s&&r.tagName==="INPUT"){var o=r,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in t||Jn(o)}var l=yl(r),u=l[fv],p=!l[pv];let m=$e&&u;m&&Rr(!1);var v=e||{},b=r.tagName==="OPTION";for(var g in e)g in t||(t[g]=null);t.class?t.class=F0(t.class):t[Ji]&&(t.class=null),t[Zi]&&(t.style??=null);var w=zd(r);for(const A in t){let C=t[A];if(b&&A==="value"&&C==null){r.value=r.__value="",v[A]=C;continue}if(A==="class"){var k=r.namespaceURI==="http://www.w3.org/1999/xhtml";rr(r,k,C,n,e?.[Ji],t[Ji]),v[A]=C,v[Ji]=t[Ji];continue}if(A==="style"){wl(r,C,e?.[Zi],t[Zi]),v[A]=C,v[Zi]=t[Zi];continue}var I=v[A];if(!(C===I&&!(C===void 0&&r.hasAttribute(A)))){v[A]=C;var P=A[0]+A[1];if(P!=="$$")if(P==="on"){const E={},S="$$"+A;let O=A.slice(2);var $=k0(O);if(y0(O)&&(O=O.slice(0,-7),E.capture=!0),!$&&I){if(C!=null)continue;r.removeEventListener(O,v[S],E),v[S]=null}if(C!=null)if($)r[`__${O}`]=C,xt([O]);else{let M=function(H){v[A].call(this,H)};var T=M;v[S]=av(O,r,M,E)}else $&&(r[`__${O}`]=void 0)}else if(A==="style")Ee(r,A,C);else if(A==="autofocus")Ao(r,!!C);else if(!u&&(A==="__value"||A==="value"&&C!=null))r.value=r.__value=C;else if(A==="selected"&&b)W0(r,C);else{var N=A;p||(N=C0(N));var q=N==="defaultValue"||N==="defaultChecked";if(C==null&&!u&&!q)if(l[A]=null,N==="value"||N==="checked"){let E=r;const S=e===void 0;if(N==="value"){let O=E.defaultValue;E.removeAttribute(N),E.defaultValue=O,E.value=E.__value=S?O:null}else{let O=E.defaultChecked;E.removeAttribute(N),E.defaultChecked=O,E.checked=S?O:!1}}else r.removeAttribute(A);else q||w.includes(N)&&(u||typeof C!="string")?(r[N]=C,N in l&&(l[N]=pr)):typeof C!="function"&&Ee(r,N,C)}}}return m&&Rr(!0),v}function Fh(r,e,t=[],n=[],s=[],i,o=!1,a=!1){Dp(s,t,n,l=>{var u=void 0,p={},m=r.nodeName==="SELECT",v=!1;if(os(()=>{var g=e(...l.map(f)),w=G0(r,u,g,i,o,a);v&&m&&"value"in g&&$o(r,g.value);for(let I of Object.getOwnPropertySymbols(p))g[I]||cr(p[I]);for(let I of Object.getOwnPropertySymbols(g)){var k=g[I];I.description===K1&&(!u||k!==u[I])&&(p[I]&&cr(p[I]),p[I]=zr(()=>z0(r,()=>k))),w[I]=k}u=w}),m){var b=r;Ui(()=>{$o(b,u.value,!0),qd(b)})}v=!0})}function yl(r){return r.__attributes??={[fv]:r.nodeName.includes("-"),[pv]:r.namespaceURI===W1}}var Fc=new Map;function zd(r){var e=r.getAttribute("is")||r.nodeName,t=Fc.get(e);if(t)return t;Fc.set(e,t=[]);for(var n,s=r,i=Element.prototype;i!==s;){n=_p(s);for(var o in n)n[o].set&&t.push(o);s=Ed(s)}return t}function hn(r,e,t=e){var n=new WeakSet;Ld(r,"input",async s=>{var i=s?r.defaultValue:r.value;if(i=lc(r)?cc(i):i,t(i),Ot!==null&&n.add(Ot),await b0(),i!==(i=e())){var o=r.selectionStart,a=r.selectionEnd,l=r.value.length;if(r.value=i??"",a!==null){var u=r.value.length;o===a&&a===l&&u>l?(r.selectionStart=u,r.selectionEnd=u):(r.selectionStart=o,r.selectionEnd=Math.min(a,u))}}}),($e&&r.defaultValue!==r.value||vn(e)==null&&r.value)&&(t(lc(r)?cc(r.value):r.value),Ot!==null&&n.add(Ot)),Go(()=>{var s=e();if(r===document.activeElement){var i=fo??Ot;if(n.has(i))return}lc(r)&&s===cc(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}const ac=new Set;function K0(r,e,t,n,s=n){var i=t.getAttribute("type")==="checkbox",o=r;let a=!1;if(e!==null)for(var l of e)o=o[l]??=[];o.push(t),Ld(t,"change",()=>{var u=t.__value;i&&(u=jh(o,u,t.checked)),s(u)},()=>s(i?[]:null)),Go(()=>{var u=n();if($e&&t.defaultChecked!==t.checked){a=!0;return}i?(u=u||[],t.checked=u.includes(t.__value)):t.checked=Up(t.__value,u)}),zi(()=>{var u=o.indexOf(t);u!==-1&&o.splice(u,1)}),ac.has(o)||(ac.add(o),An(()=>{o.sort((u,p)=>u.compareDocumentPosition(p)===4?-1:1),ac.delete(o)})),An(()=>{if(a){var u;if(i)u=jh(o,u,t.checked);else{var p=o.find(m=>m.checked);u=p?.__value}s(u)}})}function jh(r,e,t){for(var n=new Set,s=0;s<r.length;s+=1)r[s].checked&&n.add(r[s].__value);return t||n.delete(e),Array.from(n)}function lc(r){var e=r.type;return e==="number"||e==="range"}function cc(r){return r===""?null:+r}function Bh(r,e){return r===e||r?.[En]===e}function Qo(r={},e,t,n){return Ui(()=>{var s,i;return Go(()=>{s=i,i=[],vn(()=>{r!==t(...i)&&(e(r,...i),s&&Bh(t(...s),r)&&e(null,...s))})}),()=>{An(()=>{i&&Bh(t(...i),r)&&e(null,...i)})}}),r}function fr(r=!1){const e=Xt,t=e.l.u;if(!t)return;let n=()=>hi(e.s);if(r){let s=0,i={};const o=Wo(()=>{let a=!1;const l=e.s;for(const u in l)l[u]!==i[u]&&(i[u]=l[u],a=!0);return a&&s++,s});n=()=>f(o)}t.b.length&&u0(()=>{Vh(e,n),Na(t.b)}),Bs(()=>{const s=vn(()=>t.m.map(x1));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&Bs(()=>{Vh(e,n),Na(t.a)})}function Vh(r,e){if(r.l.s)for(const t of r.l.s)f(t);e()}function Ud(r,e,t){if(r==null)return e(void 0),t&&t(void 0),Kr;const n=vn(()=>r.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const ci=[];function Y0(r,e){return{subscribe:Zs(r,e).subscribe}}function Zs(r,e=Kr){let t=null;const n=new Set;function s(a){if(Sp(r,a)&&(r=a,t)){const l=!ci.length;for(const u of n)u[1](),ci.push(u,r);if(l){for(let u=0;u<ci.length;u+=2)ci[u][0](ci[u+1]);ci.length=0}}}function i(a){s(a(r))}function o(a,l=Kr){const u=[a,l];return n.add(u),n.size===1&&(t=e(s,i)||Kr),a(r),()=>{n.delete(u),n.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function Q0(r,e,t){const n=!Array.isArray(r),s=n?[r]:r;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return Y0(t,(o,a)=>{let l=!1;const u=[];let p=0,m=Kr;const v=()=>{if(p)return;m();const g=e(n?u[0]:u,o,a);i?o(g):m=typeof g=="function"?g:Kr},b=s.map((g,w)=>Ud(g,k=>{u[w]=k,p&=~(1<<w),l&&v()},()=>{p|=1<<w}));return l=!0,v(),function(){Na(b),m(),l=!1}})}function X0(r){let e;return Ud(r,t=>e=t)(),e}let ma=!1,jc=Symbol();function Je(r,e,t){const n=t[e]??={store:null,source:Nd(void 0),unsubscribe:Kr};if(n.store!==r&&!(jc in t))if(n.unsubscribe(),n.store=r??null,r==null)n.source.v=void 0,n.unsubscribe=Kr;else{var s=!0;n.unsubscribe=Ud(r,i=>{s?n.source.v=i:y(n.source,i)}),s=!1}return r&&jc in t?X0(r):f(n.source)}function $t(){const r={};function e(){zi(()=>{for(var t in r)r[t].unsubscribe();So(r,jc,{enumerable:!1,value:!0})})}return[r,e]}function J0(r){var e=ma;try{return ma=!1,[r(),ma]}finally{ma=e}}const Z0={get(r,e){if(!r.exclude.includes(e))return f(r.version),e in r.special?r.special[e]():r.props[e]},set(r,e,t){if(!(e in r.special)){var n=Ye;try{Br(r.parent_effect),r.special[e]=Fe({get[e](){return r.props[e]}},e,Ep)}finally{Br(n)}}return r.special[e](t),Lc(r.version),!0},getOwnPropertyDescriptor(r,e){if(!r.exclude.includes(e)&&e in r.props)return{enumerable:!0,configurable:!0,value:r.props[e]}},deleteProperty(r,e){return r.exclude.includes(e)||(r.exclude.push(e),Lc(r.version)),!0},has(r,e){return r.exclude.includes(e)?!1:e in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(e=>!r.exclude.includes(e))}};function gt(r,e){return new Proxy({props:r,exclude:e,special:{},version:Es(0),parent_effect:Ye},Z0)}const ew={get(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(Xi(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(r,e,t){let n=r.props.length;for(;n--;){let s=r.props[n];Xi(s)&&(s=s());const i=Bn(s,e);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(Xi(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const s=Bn(n,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(r,e){if(e===En||e===Sd)return!1;for(let t of r.props)if(Xi(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(r){const e=[];for(let t of r.props)if(Xi(t)&&(t=t()),!!t){for(const n in t)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(t))e.includes(n)||e.push(n)}return e}};function Ct(...r){return new Proxy({props:r},ew)}function Fe(r,e,t,n){var s=!Mi||(t&F1)!==0,i=(t&j1)!==0,o=(t&B1)!==0,a=n,l=!0,u=()=>(l&&(l=!1,a=o?vn(n):n),a),p;if(i){var m=En in r||Sd in r;p=Bn(r,e)?.set??(m&&e in r?$=>r[e]=$:void 0)}var v,b=!1;i?[v,b]=J0(()=>r[e]):v=r[e],v===void 0&&n!==void 0&&(v=u(),p&&(s&&$1(),p(v)));var g;if(s?g=()=>{var $=r[e];return $===void 0?u():(l=!0,$)}:g=()=>{var $=r[e];return $!==void 0&&(a=void 0),$===void 0?a:$},s&&(t&Ep)===0)return g;if(p){var w=r.$$legacy;return(function($,N){return arguments.length>0?((!s||!N||w||b)&&p(N?g():$),$):g()})}var k=!1,I=((t&U1)!==0?Wo:Cn)(()=>(k=!1,g()));i&&f(I);var P=Ye;return(function($,N){if(arguments.length>0){const q=N?f(I):s&&i?hr($):$;return y(I,q),k=!0,a!==void 0&&(a=q),$}return Js&&k||(P.f&Vn)!==0?I.v:f(I)})}function tw(r){return new rw(r)}class rw{#t;#e;constructor(e){var t=new Map,n=(i,o)=>{var a=Nd(o,!1,!1);return t.set(i,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(i,o){return f(t.get(o)??n(o,Reflect.get(i,o)))},has(i,o){return o===Sd?!0:(f(t.get(o)??n(o,Reflect.get(i,o))),Reflect.has(i,o))},set(i,o,a){return y(t.get(o)??n(o,a),a),Reflect.set(i,o,a)}});this.#e=(e.hydrate?N0:Md)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Oe(),this.#t=s.$$events;for(const i of Object.keys(this.#e))i==="$set"||i==="$destroy"||i==="$on"||So(this,i,{get(){return this.#e[i]},set(o){this.#e[i]=o},enumerable:!0});this.#e.$set=i=>{Object.assign(s,i)},this.#e.$destroy=()=>{$0(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const n=(...s)=>t.call(this,...s);return this.#t[e].push(n),()=>{this.#t[e]=this.#t[e].filter(s=>s!==n)}}$destroy(){this.#e.$destroy()}}let vv;typeof HTMLElement=="function"&&(vv=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(r,e,t){super(),this.$$ctor=r,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(r,e,t){if(this.$$l[r]=this.$$l[r]||[],this.$$l[r].push(e),this.$$c){const n=this.$$c.$on(r,e);this.$$l_u.set(e,n)}super.addEventListener(r,e,t)}removeEventListener(r,e,t){if(super.removeEventListener(r,e,t),this.$$c){const n=this.$$l_u.get(e);n&&(n(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return i=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),x(i,o)}};var r=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},n=nw(this);for(const s of this.$$s)s in n&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),t.default=!0):t[s]=e(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=Ea(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=tw({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=h0(()=>{Go(()=>{this.$$r=!0;for(const s of Pa(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const i=Ea(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const o=this.$$c.$on(s,i);this.$$l_u.set(i,o)}this.$$l={}}}attributeChangedCallback(r,e,t){this.$$r||(r=this.$$g_p(r),this.$$d[r]=Ea(r,t,this.$$p_d,"toProp"),this.$$c?.$set({[r]:this.$$d[r]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(r){return Pa(this.$$p_d).find(e=>this.$$p_d[e].attribute===r||!this.$$p_d[e].attribute&&e.toLowerCase()===r)||r}});function Ea(r,e,t,n){const s=t[r]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!t[r])return e;if(n==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function nw(r){const e={};return r.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function be(r,e,t,n,s,i){let o=class extends vv{constructor(){super(r,t,s),this.$$p_d=e}static get observedAttributes(){return Pa(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Pa(e).forEach(a=>{So(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=Ea(a,l,e),this.$$d[a]=l;var u=this.$$c;if(u){var p=Bn(u,a)?.get;p?u[a]=l:u.$set({[a]:l})}}})}),n.forEach(a=>{So(o.prototype,a,{get(){return this.$$c?.[a]}})}),r.element=o,o}function Jt(r){Xt===null&&xp(),Mi&&Xt.l!==null?sw(Xt).m.push(r):Bs(()=>{const e=vn(r);if(typeof e=="function")return e})}function mv(r){Xt===null&&xp(),Jt(()=>()=>vn(r))}function sw(r){var e=r.l;return e.u??={a:[],b:[],m:[]}}const iw="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(iw);const ow=()=>{};var Hh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=function(r,e){if(!r)throw Fi(e)},Fi=function(r){return new Error("Firebase Database ("+gv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},aw=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],a=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,a=o?r[s+1]:0,l=s+2<r.length,u=l?r[s+2]:0,p=i>>2,m=(i&3)<<4|a>>4;let v=(a&15)<<2|u>>6,b=u&63;l||(b=64,o||(v=64)),n.push(t[p],t[m],t[v],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(_v(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):aw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],a=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const m=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||a==null||u==null||m==null)throw new lw;const v=i<<2|a>>4;if(n.push(v),u!==64){const b=a<<4&240|u>>2;if(n.push(b),m!==64){const g=u<<6&192|m;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class lw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bv=function(r){const e=_v(r);return Fd.encodeByteArray(e,!0)},za=function(r){return bv(r).replace(/\./g,"")},Ua=function(r){try{return Fd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(r){return wv(void 0,r)}function wv(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!dw(t)||(r[t]=wv(r[t],e[t]));return r}function dw(r){return r!=="__proto__"}/**
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
 */function uw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hw=()=>uw().__FIREBASE_DEFAULTS__,fw=()=>{if(typeof process>"u"||typeof Hh>"u")return;const r=Hh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},pw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ua(r[1]);return e&&JSON.parse(e)},jd=()=>{try{return ow()||hw()||fw()||pw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},yv=r=>jd()?.emulatorHosts?.[r],xv=r=>{const e=yv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},kv=()=>jd()?.config,Ev=r=>jd()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Ps(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bd(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Cv(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[za(JSON.stringify(t)),za(JSON.stringify(o)),""].join(".")}const go={};function vw(){const r={prod:[],emulator:[]};for(const e of Object.keys(go))go[e]?r.emulator.push(e):r.prod.push(e);return r}function mw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Wh=!1;function Vd(r,e){if(typeof window>"u"||typeof document>"u"||!Ps(window.location.host)||go[r]===e||go[r]||Wh)return;go[r]=e;function t(v){return`__firebase__banner__${v}`}const n="__firebase__banner",i=vw().prod.length>0;function o(){const v=document.getElementById(n);v&&v.remove()}function a(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,b){v.setAttribute("width","24"),v.setAttribute("id",b),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function u(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Wh=!0,o()},v}function p(v,b){v.setAttribute("id",b),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function m(){const v=mw(n),b=t("text"),g=document.getElementById(b)||document.createElement("span"),w=t("learnmore"),k=document.getElementById(w)||document.createElement("a"),I=t("preprendIcon"),P=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const $=v.element;a($),p(k,w);const N=u();l(P,I),$.append(P,g,k,N),document.body.appendChild($)}i?(g.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(P.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($r())}function gw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _w(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Iv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bw(){const r=$r();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function ww(){return gv.NODE_ADMIN===!0}function yw(){try{return typeof indexedDB=="object"}catch{return!1}}function xw(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="FirebaseError";class as extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=kw,Object.setPrototypeOf(this,as.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jo.prototype.create)}}class Jo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ew(i,n):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new as(s,a,n)}}function Ew(r,e){return r.replace(Cw,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Cw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(r){return JSON.parse(r)}function lr(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=function(r){let e={},t={},n={},s="";try{const i=r.split(".");e=Lo(Ua(i[0])||""),t=Lo(Ua(i[1])||""),s=i[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:s}},Iw=function(r){const e=Tv(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Tw=function(r){const e=Tv(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Ti(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Bc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Fa(r,e,t){const n={};for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=e.call(t,r[s],s,r));return n}function Vs(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Gh(i)&&Gh(o)){if(!Vs(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Gh(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ao(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function lo(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)n[m]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let m=0;m<16;m++)n[m]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let m=16;m<80;m++){const v=n[m-3]^n[m-8]^n[m-14]^n[m-16];n[m]=(v<<1|v>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,p;for(let m=0;m<80;m++){m<40?m<20?(u=a^i&(o^a),p=1518500249):(u=i^o^a,p=1859775393):m<60?(u=i&o|a&(i|o),p=2400959708):(u=i^o^a,p=3395469782);const v=(s<<5|s>>>27)+u+l+p+n[m]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=v}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=n;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[s]>>i&255,++n;return e}}function Aw(r,e){const t=new Rw(r,e);return t.subscribe.bind(t)}class Rw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Pw(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=dc),s.error===void 0&&(s.error=dc),s.complete===void 0&&(s.complete=dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function dc(){}function xl(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s>=55296&&s<=56319){const i=s-55296;n++,ae(n<r.length,"Surrogate pair missing trail surrogate.");const o=r.charCodeAt(n)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kl=function(r){let e=0;for(let t=0;t<r.length;t++){const n=r.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Vt(r){return r&&r._delegate?r._delegate:r}class Cs{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Xo;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dw(e))try{this.getOrInitializeService({instanceIdentifier:$s})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=$s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$s){return this.instances.has(e)}getOptions(e=$s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Lw(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=$s){return this.component?this.component.multipleInstances?e:$s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lw(r){return r===$s?void 0:r}function Dw(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $w(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const Mw={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},qw=Mt.INFO,zw={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},Uw=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=zw[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wd{constructor(e){this.name=e,this._logLevel=qw,this._logHandler=Uw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Mt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...e),this._logHandler(this,Mt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...e),this._logHandler(this,Mt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...e),this._logHandler(this,Mt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...e),this._logHandler(this,Mt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...e),this._logHandler(this,Mt.ERROR,...e)}}const Fw=(r,e)=>e.some(t=>r instanceof t);let Kh,Yh;function jw(){return Kh||(Kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bw(){return Yh||(Yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sv=new WeakMap,Vc=new WeakMap,Av=new WeakMap,uc=new WeakMap,Gd=new WeakMap;function Vw(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(bs(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Sv.set(t,r)}).catch(()=>{}),Gd.set(e,r),e}function Hw(r){if(Vc.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Vc.set(r,e)}let Hc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Vc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Av.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ww(r){Hc=r(Hc)}function Gw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(hc(this),e,...t);return Av.set(n,e.sort?e.sort():[e]),bs(n)}:Bw().includes(r)?function(...e){return r.apply(hc(this),e),bs(Sv.get(this))}:function(...e){return bs(r.apply(hc(this),e))}}function Kw(r){return typeof r=="function"?Gw(r):(r instanceof IDBTransaction&&Hw(r),Fw(r,jw())?new Proxy(r,Hc):r)}function bs(r){if(r instanceof IDBRequest)return Vw(r);if(uc.has(r))return uc.get(r);const e=Kw(r);return e!==r&&(uc.set(r,e),Gd.set(e,r)),e}const hc=r=>Gd.get(r);function Yw(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),a=bs(o);return n&&o.addEventListener("upgradeneeded",l=>{n(bs(o.result),l.oldVersion,l.newVersion,bs(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Qw=["get","getKey","getAll","getAllKeys","count"],Xw=["put","add","delete","clear"],fc=new Map;function Qh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Xw.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Qw.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return fc.set(e,i),i}Ww(r=>({...r,get:(e,t,n)=>Qh(e,t)||r.get(e,t,n),has:(e,t)=>!!Qh(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zw(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Zw(r){return r.getComponent()?.type==="VERSION"}const Wc="@firebase/app",Xh="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Wd("@firebase/app"),ey="@firebase/app-compat",ty="@firebase/analytics-compat",ry="@firebase/analytics",ny="@firebase/app-check-compat",sy="@firebase/app-check",iy="@firebase/auth",oy="@firebase/auth-compat",ay="@firebase/database",ly="@firebase/data-connect",cy="@firebase/database-compat",dy="@firebase/functions",uy="@firebase/functions-compat",hy="@firebase/installations",fy="@firebase/installations-compat",py="@firebase/messaging",vy="@firebase/messaging-compat",my="@firebase/performance",gy="@firebase/performance-compat",_y="@firebase/remote-config",by="@firebase/remote-config-compat",wy="@firebase/storage",yy="@firebase/storage-compat",xy="@firebase/firestore",ky="@firebase/ai",Ey="@firebase/firestore-compat",Cy="firebase",Iy="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="[DEFAULT]",Ty={[Wc]:"fire-core",[ey]:"fire-core-compat",[ry]:"fire-analytics",[ty]:"fire-analytics-compat",[sy]:"fire-app-check",[ny]:"fire-app-check-compat",[iy]:"fire-auth",[oy]:"fire-auth-compat",[ay]:"fire-rtdb",[ly]:"fire-data-connect",[cy]:"fire-rtdb-compat",[dy]:"fire-fn",[uy]:"fire-fn-compat",[hy]:"fire-iid",[fy]:"fire-iid-compat",[py]:"fire-fcm",[vy]:"fire-fcm-compat",[my]:"fire-perf",[gy]:"fire-perf-compat",[_y]:"fire-rc",[by]:"fire-rc-compat",[wy]:"fire-gcs",[yy]:"fire-gcs-compat",[xy]:"fire-fst",[Ey]:"fire-fst-compat",[ky]:"fire-vertex","fire-js":"fire-js",[Cy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Map,Sy=new Map,Kc=new Map;function Jh(r,e){try{r.container.addComponent(e)}catch(t){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Hs(r){const e=r.name;if(Kc.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Kc.set(e,r);for(const t of ja.values())Jh(t,r);for(const t of Sy.values())Jh(t,r);return!0}function El(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ur(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ws=new Jo("app","Firebase",Ay);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=Iy;function Rv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Gc,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw ws.create("bad-app-name",{appName:String(s)});if(t||(t=kv()),!t)throw ws.create("no-options");const i=ja.get(s);if(i){if(Vs(t,i.options)&&Vs(n,i.config))return i;throw ws.create("duplicate-app",{appName:s})}const o=new Ow(s);for(const l of Kc.values())o.addComponent(l);const a=new Ry(t,n,o);return ja.set(s,a),a}function Kd(r=Gc){const e=ja.get(r);if(!e&&r===Gc&&kv())return Rv();if(!e)throw ws.create("no-app",{appName:r});return e}function In(r,e,t){let n=Ty[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(o.join(" "));return}Hs(new Cs(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Py="firebase-heartbeat-database",Ny=1,Do="firebase-heartbeat-store";let pc=null;function Pv(){return pc||(pc=Yw(Py,Ny,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Do)}catch(t){console.warn(t)}}}}).catch(r=>{throw ws.create("idb-open",{originalErrorMessage:r.message})})),pc}async function $y(r){try{const t=(await Pv()).transaction(Do),n=await t.objectStore(Do).get(Nv(r));return await t.done,n}catch(e){if(e instanceof as)Zn.warn(e.message);else{const t=ws.create("idb-get",{originalErrorMessage:e?.message});Zn.warn(t.message)}}}async function Zh(r,e){try{const n=(await Pv()).transaction(Do,"readwrite");await n.objectStore(Do).put(e,Nv(r)),await n.done}catch(t){if(t instanceof as)Zn.warn(t.message);else{const n=ws.create("idb-set",{originalErrorMessage:t?.message});Zn.warn(n.message)}}}function Nv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Ly=1024,Dy=30;class Oy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qy(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=ef();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>Dy){const s=zy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Zn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ef(),{heartbeatsToSend:t,unsentEntries:n}=My(this._heartbeatsCache.heartbeats),s=za(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Zn.warn(e),""}}}function ef(){return new Date().toISOString().substring(0,10)}function My(r,e=Ly){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),tf(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class qy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yw()?xw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $y(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function tf(r){return za(JSON.stringify({version:2,heartbeats:r})).length}function zy(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(r){Hs(new Cs("platform-logger",e=>new Jw(e),"PRIVATE")),Hs(new Cs("heartbeat",e=>new Oy(e),"PRIVATE")),In(Wc,Xh,r),In(Wc,Xh,"esm2020"),In("fire-js","")}Uy("");var Fy="firebase",jy="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(Fy,jy,"app");function $v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const By=$v,Lv=new Jo("auth","Firebase",$v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new Wd("@firebase/auth");function Vy(r,...e){Ba.logLevel<=Mt.WARN&&Ba.warn(`Auth (${ti}): ${r}`,...e)}function Ca(r,...e){Ba.logLevel<=Mt.ERROR&&Ba.error(`Auth (${ti}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(r,...e){throw Yd(r,...e)}function Qr(r,...e){return Yd(r,...e)}function Dv(r,e,t){const n={...By(),[e]:t};return new Jo("auth","Firebase",n).create(e,{appName:r.name})}function Tn(r){return Dv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yd(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Lv.create(r,...e)}function ye(r,e,...t){if(!r)throw Yd(e,...t)}function Un(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ca(e),new Error(e)}function es(r,e){r||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){return typeof self<"u"&&self.location?.href||""}function Ov(){return rf()==="http:"||rf()==="https:"}function rf(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ov()||_w()||"connection"in navigator)?navigator.onLine:!0}function Wy(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){this.shortDelay=e,this.longDelay=t,es(t>e,"Short delay should be less than long delay!"),this.isMobile=Hd()||Iv()}get(){return Hy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(r,e){es(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yy=new Zo(3e4,6e4);function Vr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Xr(r,e,t,n,s={}){return qv(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=ei({key:r.config.apiKey,...o}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const u={method:e,headers:l,...i};return gw()||(u.referrerPolicy="no-referrer"),r.emulatorConfig&&Ps(r.emulatorConfig.host)&&(u.credentials="include"),Mv.fetch()(await zv(r,r.config.apiHost,t,a),u)})}async function qv(r,e,t){r._canInitEmulator=!1;const n={...Gy,...e};try{const s=new Xy(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw co(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw co(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw co(r,"user-disabled",o);const p=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Dv(r,p,u);mn(r,p)}}catch(s){if(s instanceof as)throw s;mn(r,"network-request-failed",{message:String(s)})}}async function Ns(r,e,t,n,s={}){const i=await Xr(r,e,t,n,s);return"mfaPendingCredential"in i&&mn(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function zv(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?Qd(r.config,s):`${r.config.apiScheme}://${s}`;return Ky.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Qy(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Qr(this.auth,"network-request-failed")),Yy.get())})}}function co(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Qr(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(r){return r!==void 0&&r.getResponse!==void 0}function sf(r){return r!==void 0&&r.enterprise!==void 0}class Uv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(r){return(await Xr(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Fv(r,e){return Xr(r,"GET","/v2/recaptchaConfig",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zy(r,e){return Xr(r,"POST","/v1/accounts:delete",e)}async function Va(r,e){return Xr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e2(r,e=!1){const t=Vt(r),n=await t.getIdToken(e),s=Xd(n);ye(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:n,authTime:_o(vc(s.auth_time)),issuedAtTime:_o(vc(s.iat)),expirationTime:_o(vc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function vc(r){return Number(r)*1e3}function Xd(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ua(t);return s?JSON.parse(s):(Ca("Failed to decode base64 JWT payload"),null)}catch(s){return Ca("Caught error parsing JWT payload as JSON",s?.toString()),null}}function of(r){const e=Xd(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof as&&t2(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function t2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(r){const e=r.auth,t=await r.getIdToken(),n=await Si(r,Va(e,{idToken:t}));ye(n?.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=s.providerUserInfo?.length?jv(s.providerUserInfo):[],o=s2(r.providerData,i),a=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!o?.length,u=a?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Qc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,p)}async function n2(r){const e=Vt(r);await Ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s2(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function jv(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(r,e){const t=await qv(r,{},async()=>{const n=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await zv(r,s,"/v1/token",`key=${i}`),a=await r._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return r.emulatorConfig&&Ps(r.emulatorConfig.host)&&(l.credentials="include"),Mv.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function o2(r,e){return Xr(r,"POST","/v2/accounts:revokeToken",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):of(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=of(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await i2(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new _i;return n&&(ye(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(ye(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ye(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _i,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class dn{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new r2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Si(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return e2(this,e)}reload(){return n2(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ha(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ur(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await Si(this,Zy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:v,isAnonymous:b,providerData:g,stsTokenManager:w}=t;ye(m&&w,e,"internal-error");const k=_i.fromJSON(this.name,w);ye(typeof m=="string",e,"internal-error"),cs(n,e.name),cs(s,e.name),ye(typeof v=="boolean",e,"internal-error"),ye(typeof b=="boolean",e,"internal-error"),cs(i,e.name),cs(o,e.name),cs(a,e.name),cs(l,e.name),cs(u,e.name),cs(p,e.name);const I=new dn({uid:m,auth:e,email:s,emailVerified:v,displayName:n,isAnonymous:b,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:k,createdAt:u,lastLoginAt:p});return g&&Array.isArray(g)&&(I.providerData=g.map(P=>({...P}))),l&&(I._redirectEventId=l),I}static async _fromIdTokenResponse(e,t,n=!1){const s=new _i;s.updateFromServerResponse(t);const i=new dn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Ha(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];ye(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new _i;a.updateFromIdToken(n);const l=new dn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;function Fn(r){es(r instanceof Function,"Expected a class definition");let e=af.get(r);return e?(es(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,af.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bv.type="NONE";const lf=Bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(r,e,t){return`firebase:${r}:${e}:${t}`}class bi{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Ia(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ia("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Va(this.auth,{idToken:e}).catch(()=>{});return t?dn._fromGetAccountInfoResponse(this.auth,t,e):null}return dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new bi(Fn(lf),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fn(lf);const o=Ia(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const p=await u._get(o);if(p){let m;if(typeof p=="string"){const v=await Va(e,{idToken:p}).catch(()=>{});if(!v)break;m=await dn._fromGetAccountInfoResponse(e,v,p)}else m=dn._fromJSON(e,p);u!==i&&(a=m),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new bi(i,e,n):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new bi(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yv(e))return"Blackberry";if(Qv(e))return"Webos";if(Hv(e))return"Safari";if((e.includes("chrome/")||Wv(e))&&!e.includes("edge/"))return"Chrome";if(Kv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function Vv(r=$r()){return/firefox\//i.test(r)}function Hv(r=$r()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wv(r=$r()){return/crios\//i.test(r)}function Gv(r=$r()){return/iemobile/i.test(r)}function Kv(r=$r()){return/android/i.test(r)}function Yv(r=$r()){return/blackberry/i.test(r)}function Qv(r=$r()){return/webos/i.test(r)}function Jd(r=$r()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function a2(r=$r()){return Jd(r)&&!!window.navigator?.standalone}function l2(){return bw()&&document.documentMode===10}function Xv(r=$r()){return Jd(r)||Kv(r)||Qv(r)||Yv(r)||/windows phone/i.test(r)||Gv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(r,e=[]){let t;switch(r){case"Browser":t=cf($r());break;case"Worker":t=`${cf($r())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ti}/${n}`}/**
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
 */class c2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function d2(r,e={}){return Xr(r,"GET","/v2/passwordPolicy",Vr(r,e))}/**
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
 */const u2=6;class h2{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??u2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new df(this),this.idTokenSubscription=new df(this),this.beforeStateQueue=new c2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await bi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Va(this,{idToken:e}),n=await dn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ur(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(n=a.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ur(this.app))return Promise.reject(Tn(this));const t=e?Vt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ur(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ur(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await d2(this),t=new h2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await o2(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fn(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await bi.create(this,[Fn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Ur(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Vy(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ln(r){return Vt(r)}class df{constructor(e){this.auth=e,this.observer=null,this.addObserver=Aw(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p2(r){ea=r}function Zd(r){return ea.loadJS(r)}function v2(){return ea.recaptchaV2Script}function m2(){return ea.recaptchaEnterpriseScript}function g2(){return ea.gapiScript}function Zv(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=500,b2=6e4,ga=1e12;class w2{constructor(e){this.auth=e,this.counter=ga,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new k2(e,this.auth.name,t||{})),this.counter++,n}reset(e){const t=e||ga;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||ga;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||ga;return this._widgets.get(t)?.execute(),""}}class y2{constructor(){this.enterprise=new x2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class x2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class k2{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;ye(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=E2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},b2)},_2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function E2(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const C2="recaptcha-enterprise",bo="NO_RECAPTCHA";class em{constructor(e){this.type=C2,this.auth=Ln(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Fv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Uv(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;sf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(bo)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new y2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(a=>{if(!t&&sf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=m2();l.length!==0&&(l+=a),Zd(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function eo(r,e,t,n=!1,s=!1){const i=new em(r);let o;if(s)o=bo;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function wi(r,e,t,n,s){if(s==="EMAIL_PASSWORD_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await eo(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await eo(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(i)});else if(s==="PHONE_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await eo(r,e,t);return n(r,i).catch(async o=>{if(r._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const a=await eo(r,e,t,!1,!0);return n(r,a)}return Promise.reject(o)})}else{const i=await eo(r,e,t,!1,!0);return n(r,i)}else return Promise.reject(s+" provider is not supported.")}async function I2(r){const e=Ln(r),t=await Fv(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Uv(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new em(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(r,e){const t=El(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Vs(i,e??{}))return s;mn(s,"already-initialized")}return t.initialize({options:e})}function S2(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(Fn);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function A2(r,e,t){const n=Ln(r);ye(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=tm(e),{host:o,port:a}=R2(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},p=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){ye(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),ye(Vs(u,n.config.emulator)&&Vs(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,Ps(o)?(Bd(`${i}//${o}${l}`),Vd("Auth",!0)):P2()}function tm(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function R2(r){const e=tm(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:uf(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:uf(o)}}}function uf(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function P2(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,t){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function N2(r,e){return Xr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $2(r,e){return Ns(r,"POST","/v1/accounts:signInWithPassword",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(r,e){return Ns(r,"POST","/v1/accounts:signInWithEmailLink",Vr(r,e))}async function D2(r,e){return Ns(r,"POST","/v1/accounts:signInWithEmailLink",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Cl{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Oo(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Oo(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wi(e,t,"signInWithPassword",$2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return L2(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wi(e,n,"signUpPassword",N2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return D2(e,{idToken:t,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(r,e){return Ns(r,"POST","/v1/accounts:signInWithIdp",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="http://localhost";class Ws extends Cl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new Ws(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return yi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,yi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yi(e,t)}buildRequest(){const e={requestUri:O2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ei(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(r,e){return Xr(r,"POST","/v1/accounts:sendVerificationCode",Vr(r,e))}async function M2(r,e){return Ns(r,"POST","/v1/accounts:signInWithPhoneNumber",Vr(r,e))}async function q2(r,e){const t=await Ns(r,"POST","/v1/accounts:signInWithPhoneNumber",Vr(r,e));if(t.temporaryProof)throw co(r,"account-exists-with-different-credential",t);return t}const z2={USER_NOT_FOUND:"user-not-found"};async function U2(r,e){const t={...e,operation:"REAUTH"};return Ns(r,"POST","/v1/accounts:signInWithPhoneNumber",Vr(r,t),z2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Cl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new wo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new wo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return M2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return q2(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return U2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i}=e;return!n&&!t&&!s&&!i?null:new wo({verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j2(r){const e=ao(lo(r)).link,t=e?ao(lo(e)).deep_link_id:null,n=ao(lo(r)).deep_link_id;return(n?ao(lo(n)).link:null)||n||t||e||r}class eu{constructor(e){const t=ao(lo(e)),n=t.apiKey??null,s=t.oobCode??null,i=F2(t.mode??null);ye(n&&s&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=j2(e);try{return new eu(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.providerId=ji.PROVIDER_ID}static credential(e,t){return Oo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=eu.parseLink(t);return ye(n,"argument-error"),Oo._fromEmailAndCode(e,n.code,n.tenantId)}}ji.PROVIDER_ID="password";ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends rm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends ta{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.FACEBOOK_SIGN_IN_METHOD="facebook.com";ds.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ws._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return us.credential(t,n)}catch{return null}}}us.GOOGLE_SIGN_IN_METHOD="google.com";us.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends ta{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends ta{constructor(){super("twitter.com")}static credential(e,t){return Ws._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return fs.credential(t,n)}catch{return null}}}fs.TWITTER_SIGN_IN_METHOD="twitter.com";fs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(r,e){return Ns(r,"POST","/v1/accounts:signUp",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await dn._fromIdTokenResponse(e,n,s),o=ff(n);return new Gs({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=ff(n);return new Gs({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function ff(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends as{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Wa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Wa(e,t,n,s)}}function nm(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wa._fromErrorAndOperation(r,i,e,n):i})}async function V2(r,e,t=!1){const n=await Si(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Gs._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(r,e,t=!1){const{auth:n}=r;if(Ur(n.app))return Promise.reject(Tn(n));const s="reauthenticate";try{const i=await Si(r,nm(n,s,e,r),t);ye(i.idToken,n,"internal-error");const o=Xd(i.idToken);ye(o,n,"internal-error");const{sub:a}=o;return ye(r.uid===a,n,"user-mismatch"),Gs._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&mn(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(r,e,t=!1){if(Ur(r.app))return Promise.reject(Tn(r));const n="signIn",s=await nm(r,n,e),i=await Gs._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function im(r,e){return sm(Ln(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(r){const e=Ln(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function W2(r,e,t){if(Ur(r.app))return Promise.reject(Tn(r));const n=Ln(r),o=await wi(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",B2,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&om(r),l}),a=await Gs._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(a.user),a}function G2(r,e,t){return Ur(r.app)?Promise.reject(Tn(r)):im(Vt(r),ji.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&om(r),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K2(r,e){return Xr(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Vt(r),i={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Si(n,K2(n.auth,i));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const a=n.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function Y2(r,e,t,n){return Vt(r).onIdTokenChanged(e,t,n)}function Q2(r,e,t){return Vt(r).beforeAuthStateChanged(e,t)}function tu(r,e,t,n){return Vt(r).onAuthStateChanged(e,t,n)}function X2(r){return Vt(r).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(r,e){return Xr(r,"POST","/v2/accounts/mfaEnrollment:start",Vr(r,e))}const Ga="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ga,"1"),this.storage.removeItem(Ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=1e3,Z2=10;class cm extends lm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);l2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z2):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},J2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cm.type="LOCAL";const ex=cm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm extends lm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dm.type="SESSION";const um=dm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Il(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await tx(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=ru("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(m){const v=m;if(v.data.eventId===u)switch(v.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(v.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function nx(r){sr().location.href=r}/**
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
 */function nu(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function sx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ix(){return navigator?.serviceWorker?.controller||null}function ox(){return nu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="firebaseLocalStorageDb",ax=1,Ka="firebaseLocalStorage",fm="fbase_key";class ra{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Tl(r,e){return r.transaction([Ka],e?"readwrite":"readonly").objectStore(Ka)}function lx(){const r=indexedDB.deleteDatabase(hm);return new ra(r).toPromise()}function Xc(){const r=indexedDB.open(hm,ax);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ka,{keyPath:fm})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ka)?e(n):(n.close(),await lx(),e(await Xc()))})})}async function vf(r,e,t){const n=Tl(r,!0).put({[fm]:e,value:t});return new ra(n).toPromise()}async function cx(r,e){const t=Tl(r,!1).get(e),n=await new ra(t).toPromise();return n===void 0?null:n.value}function mf(r,e){const t=Tl(r,!0).delete(e);return new ra(t).toPromise()}const dx=800,ux=3;class pm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>ux)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(ox()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await sx(),!this.activeServiceWorker)return;this.sender=new rx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ix()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xc();return await vf(e,Ga,"1"),await mf(e,Ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>vf(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>cx(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Tl(s,!1).getAll();return new ra(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pm.type="LOCAL";const hx=pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r,e){return Xr(r,"POST","/v2/accounts/mfaSignIn:start",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=Zv("rcb"),fx=new Zo(3e4,6e4);class px{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!sr().grecaptcha?.render}load(e,t=""){return ye(vx(t),e,"argument-error"),this.shouldResolveImmediately(t)&&nf(sr().grecaptcha)?Promise.resolve(sr().grecaptcha):new Promise((n,s)=>{const i=sr().setTimeout(()=>{s(Qr(e,"network-request-failed"))},fx.get());sr()[mc]=()=>{sr().clearTimeout(i),delete sr()[mc];const a=sr().grecaptcha;if(!a||!nf(a)){s(Qr(e,"internal-error"));return}const l=a.render;a.render=(u,p)=>{const m=l(u,p);return this.counter++,m},this.hostLanguage=t,n(a)};const o=`${v2()}?${ei({onload:mc,render:"explicit",hl:t})}`;Zd(o).catch(()=>{clearTimeout(i),s(Qr(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!sr().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function vx(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class mx{async load(e){return new w2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="recaptcha",gx={theme:"light",type:"image"};class _x{constructor(e,t,n={...gx}){this.parameters=n,this.type=yo,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ln(e),this.isInvisible=this.parameters.size==="invisible",ye(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;ye(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new mx:new px,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ye(!this.parameters.sitekey,this.auth,"argument-error"),ye(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ye(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=sr()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){ye(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ye(Ov()&&!nu(),this.auth,"internal-error"),await bx(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Jy(this.auth);ye(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ye(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function bx(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=wo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function yx(r,e,t){if(Ur(r.app))return Promise.reject(Tn(r));const n=Ln(r),s=await xx(n,e,Vt(t));return new wx(s,i=>im(n,i))}async function xx(r,e,t){if(!r._getRecaptchaConfig())try{await I2(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let n;if(typeof e=="string"?n={phoneNumber:e}:n=e,"session"in n){const s=n.session;if("phoneNumber"in n){ye(s.type==="enroll",r,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await wi(r,i,"mfaSmsEnrollment",async(u,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===bo){ye(t?.type===yo,u,"argument-error");const m=await gc(u,p,t);return pf(u,m)}return pf(u,p)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{ye(s.type==="signin",r,"internal-error");const i=n.multiFactorHint?.uid||n.multiFactorUid;ye(i,r,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await wi(r,o,"mfaSmsSignIn",async(p,m)=>{if(m.phoneSignInInfo.captchaResponse===bo){ye(t?.type===yo,p,"argument-error");const v=await gc(p,m,t);return gf(p,v)}return gf(p,m)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await wi(r,s,"sendVerificationCode",async(l,u)=>{if(u.captchaResponse===bo){ye(t?.type===yo,l,"argument-error");const p=await gc(l,u,t);return hf(l,p)}return hf(l,u)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function gc(r,e,t){ye(t.type===yo,r,"argument-error");const n=await t.verify();ye(typeof n=="string",r,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:n,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:n}),s}/**
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
 */function kx(r,e){return e?Fn(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends Cl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ex(r){return sm(r.auth,new su(r),r.bypassAuthState)}function Cx(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),H2(t,new su(r),r.bypassAuthState)}async function Ix(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),V2(t,new su(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ex;case"linkViaPopup":case"linkViaRedirect":return Ix;case"reauthViaPopup":case"reauthViaRedirect":return Cx;default:mn(this.auth,"internal-error")}}resolve(e){es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=new Zo(2e3,1e4);class pi extends vm{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){es(this.filter.length===1,"Popup operations only handle one event");const e=ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Qr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tx.get())};e()}}pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="pendingRedirect",Ta=new Map;class Ax extends vm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ta.get(this.auth._key());if(!e){try{const n=await Rx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ta.set(this.auth._key(),e)}return this.bypassAuthState||Ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rx(r,e){const t=$x(e),n=Nx(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Px(r,e){Ta.set(r._key(),e)}function Nx(r){return Fn(r._redirectPersistence)}function $x(r){return Ia(Sx,r.config.apiKey,r.name)}async function Lx(r,e,t=!1){if(Ur(r.app))return Promise.reject(Tn(r));const n=Ln(r),s=kx(n,e),o=await new Ax(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=600*1e3;class Ox{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!mm(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Qr(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dx&&this.cachedEventUids.clear(),this.cachedEventUids.has(_f(e))}saveEventToCache(e){this.cachedEventUids.add(_f(e)),this.lastProcessedEventTime=Date.now()}}function _f(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function mm({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function Mx(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mm(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(r,e={}){return Xr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ux=/^https?/;async function Fx(r){if(r.config.emulator)return;const{authorizedDomains:e}=await qx(r);for(const t of e)try{if(jx(t))return}catch{}mn(r,"unauthorized-domain")}function jx(r){const e=Yc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Ux.test(t))return!1;if(zx.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const Bx=new Zo(3e4,6e4);function bf(){const r=sr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Vx(r){return new Promise((e,t)=>{function n(){bf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bf(),t(Qr(r,"network-request-failed"))},timeout:Bx.get()})}if(sr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(sr().gapi?.load)n();else{const s=Zv("iframefcb");return sr()[s]=()=>{gapi.load?n():t(Qr(r,"network-request-failed"))},Zd(`${g2()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Sa=null,e})}let Sa=null;function Hx(r){return Sa=Sa||Vx(r),Sa}/**
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
 */const Wx=new Zo(5e3,15e3),Gx="__/auth/iframe",Kx="emulator/auth/iframe",Yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xx(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Qd(e,Kx):`https://${r.config.authDomain}/${Gx}`,n={apiKey:e.apiKey,appName:r.name,v:ti},s=Qx.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ei(n).slice(1)}`}async function Jx(r){const e=await Hx(r),t=sr().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:Xx(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yx,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Qr(r,"network-request-failed"),a=sr().setTimeout(()=>{i(o)},Wx.get());function l(){sr().clearTimeout(a),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Zx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ek=500,tk=600,rk="_blank",nk="http://localhost";class wf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sk(r,e,t,n=ek,s=tk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l={...Zx,width:n.toString(),height:s.toString(),top:i,left:o},u=$r().toLowerCase();t&&(a=Wv(u)?rk:t),Vv(u)&&(e=e||nk,l.scrollbars="yes");const p=Object.entries(l).reduce((v,[b,g])=>`${v}${b}=${g},`,"");if(a2(u)&&a!=="_self")return ik(e||"",a),new wf(null);const m=window.open(e||"",a,p);ye(m,r,"popup-blocked");try{m.focus()}catch{}return new wf(m)}function ik(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const ok="__/auth/handler",ak="emulator/auth/handler",lk=encodeURIComponent("fac");async function yf(r,e,t,n,s,i){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ti,eventId:s};if(e instanceof rm){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Bc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof ta){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await r._getAppCheckToken(),u=l?`#${lk}=${encodeURIComponent(l)}`:"";return`${ck(r)}?${ei(a).slice(1)}${u}`}function ck({config:r}){return r.emulator?Qd(r,ak):`https://${r.authDomain}/${ok}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="webStorageSupport";class dk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=um,this._completeRedirectFn=Lx,this._overrideRedirectResult=Px}async _openPopup(e,t,n,s){es(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await yf(e,t,n,Yc(),s);return sk(e,i,ru())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await yf(e,t,n,Yc(),s);return nx(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(es(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Jx(e),n=new Ox(e);return t.register("authEvent",s=>(ye(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_c,{type:_c},s=>{const i=s?.[0]?.[_c];i!==void 0&&t(!!i),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xv()||Hv()||Jd()}}const uk=dk;var xf="@firebase/auth",kf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pk(r){Hs(new Cs("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jv(r)},u=new f2(n,s,i,l);return S2(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Hs(new Cs("auth-internal",e=>{const t=Ln(e.getProvider("auth").getImmediate());return(n=>new hk(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(xf,kf,fk(r)),In(xf,kf,"esm2020")}/**
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
 */const vk=300,mk=Ev("authIdTokenMaxAge")||vk;let Ef=null;const gk=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>mk)return;const s=t?.token;Ef!==s&&(Ef=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _k(r=Kd()){const e=El(r,"auth");if(e.isInitialized())return e.getImmediate();const t=T2(r,{popupRedirectResolver:uk,persistence:[hx,ex,um]}),n=Ev("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=gk(i.toString());Q2(t,o,()=>o(t.currentUser)),Y2(t,a=>o(a))}}const s=yv("auth");return s&&A2(t,`http://${s}`),t}function bk(){return document.getElementsByTagName("head")?.[0]??document}p2({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Qr("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",bk().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pk("Browser");var Cf={};const If="@firebase/database",Tf="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gm="";function wk(r){gm=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lr(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Lo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return $n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yk(e)}}catch{}return new xk},Ms=_m("localStorage"),kk=_m("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Wd("@firebase/database"),Ek=(function(){let r=1;return function(){return r++}})(),bm=function(r){const e=Nw(r),t=new Sw;t.update(e);const n=t.digest();return Fd.encodeByteArray(n)},na=function(...r){let e="";for(let t=0;t<r.length;t++){const n=r[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=na.apply(null,n):typeof n=="object"?e+=lr(n):e+=n,e+=" "}return e};let xo=null,Sf=!0;const Ck=function(r,e){ae(!0,"Can't turn on custom loggers persistently."),xi.logLevel=Mt.VERBOSE,xo=xi.log.bind(xi)},vr=function(...r){if(Sf===!0&&(Sf=!1,xo===null&&kk.get("logging_enabled")===!0&&Ck()),xo){const e=na.apply(null,r);xo(e)}},sa=function(r){return function(...e){vr(r,...e)}},Jc=function(...r){const e="FIREBASE INTERNAL ERROR: "+na(...r);xi.error(e)},ts=function(...r){const e=`FIREBASE FATAL ERROR: ${na(...r)}`;throw xi.error(e),new Error(e)},Nr=function(...r){const e="FIREBASE WARNING: "+na(...r);xi.warn(e)},Ik=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iu=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},Tk=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Is="[MIN_NAME]",rs="[MAX_NAME]",ri=function(r,e){if(r===e)return 0;if(r===Is||e===rs)return-1;if(e===Is||r===rs)return 1;{const t=Af(r),n=Af(e);return t!==null?n!==null?t-n===0?r.length-e.length:t-n:-1:n!==null?1:r<e?-1:1}},Sk=function(r,e){return r===e?0:r<e?-1:1},to=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+lr(e))},ou=function(r){if(typeof r!="object"||r===null)return lr(r);const e=[];for(const n in r)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=lr(e[n]),t+=":",t+=ou(r[e[n]]);return t+="}",t},wm=function(r,e){const t=r.length;if(t<=e)return[r];const n=[];for(let s=0;s<t;s+=e)s+e>t?n.push(r.substring(s,t)):n.push(r.substring(s,s+e));return n};function gr(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const ym=function(r){ae(!iu(r),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let s,i,o,a,l;r===0?(i=0,o=0,s=1/r===-1/0?1:0):(s=r<0,r=Math.abs(r),r>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(r)/Math.LN2),n),i=a+n,o=Math.round(r*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(r/Math.pow(2,1-n-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const p=u.join("");let m="";for(l=0;l<64;l+=8){let v=parseInt(p.substr(l,8),2).toString(16);v.length===1&&(v="0"+v),m=m+v}return m.toLowerCase()},Ak=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Rk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Pk(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const n=new Error(r+" at "+e._path.toString()+": "+t);return n.code=r.toUpperCase(),n}const Nk=new RegExp("^-?(0*)\\d{1,10}$"),$k=-2147483648,Lk=2147483647,Af=function(r){if(Nk.test(r)){const e=Number(r);if(e>=$k&&e<=Lk)return e}return null},Bi=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Nr("Exception was thrown by user callback.",t),e},Math.floor(0))}},Dk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ko=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ok{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ur(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Nr(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(vr("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nr(e)}}class Aa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Aa.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="5",xm="v",km="s",Em="r",Cm="f",Im=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tm="ls",Sm="p",Zc="ac",Am="websocket",Rm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t,n,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=n,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ms.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ms.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qk(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Nm(r,e,t){ae(typeof e=="string","typeof type must == string"),ae(typeof t=="object","typeof params must == object");let n;if(e===Am)n=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Rm)n=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qk(r)&&(t.ns=r.namespace);const s=[];return gr(t,(i,o)=>{s.push(i+"="+o)}),n+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.counters_={}}incrementCounter(e,t=1){$n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return cw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc={},wc={};function lu(r){const e=r.toString();return bc[e]||(bc[e]=new zk),bc[e]}function Uk(r,e){const t=r.toString();return wc[t]||(wc[t]=e()),wc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<n.length;++s)n[s]&&Bi(()=>{this.onMessage_(n[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="start",jk="close",Bk="pLPCommand",Vk="pRTLPCB",$m="id",Lm="pw",Dm="ser",Hk="cb",Wk="seg",Gk="ts",Kk="d",Yk="dframe",Om=1870,Mm=30,Qk=Om-Mm,Xk=25e3,Jk=3e4;class vi{constructor(e,t,n,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sa(e),this.stats_=lu(t),this.urlFn=l=>(this.appCheckToken&&(l[Zc]=this.appCheckToken),Nm(t,Rm,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Fk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Jk)),Tk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cu((...i)=>{const[o,a,l,u,p]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rf)this.id=a,this.password=l;else if(o===jk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[Rf]="t",n[Dm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[Hk]=this.scriptTagHolder.uniqueCallbackIdentifier),n[xm]=au,this.transportSessionId&&(n[km]=this.transportSessionId),this.lastSessionId&&(n[Tm]=this.lastSessionId),this.applicationId&&(n[Sm]=this.applicationId),this.appCheckToken&&(n[Zc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Im.test(location.hostname)&&(n[Em]=Cm);const s=this.urlFn(n);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vi.forceAllow_=!0}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){return vi.forceAllow_?!0:!vi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ak()&&!Rk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=lr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=bv(t),s=wm(n,Qk);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[Yk]="t",n[$m]=e,n[Lm]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=lr(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class cu{constructor(e,t,n,s){this.onDisconnect=n,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ek(),window[Bk+this.uniqueCallbackIdentifier]=e,window[Vk+this.uniqueCallbackIdentifier]=t,this.myIFrame=cu.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){vr("frame writing exception"),a.stack&&vr(a.stack),vr(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vr("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$m]=this.myID,e[Lm]=this.myPW,e[Dm]=this.currentSerial;let t=this.urlFn(e),n="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Mm+n.length<=Om;){const o=this.pendingSegs.shift();n=n+"&"+Wk+s+"="+o.seg+"&"+Gk+s+"="+o.ts+"&"+Kk+s+"="+o.d,s++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(n,Math.floor(Xk)),i=()=>{clearTimeout(s),n()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const s=n.readyState;(!s||s==="loaded"||s==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{vr("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=16384,e3=45e3;let Ya=null;typeof MozWebSocket<"u"?Ya=MozWebSocket:typeof WebSocket<"u"&&(Ya=WebSocket);class ln{constructor(e,t,n,s,i,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sa(this.connId),this.stats_=lu(t),this.connURL=ln.connectionURL_(t,o,a,s,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,s,i){const o={};return o[xm]=au,typeof location<"u"&&location.hostname&&Im.test(location.hostname)&&(o[Em]=Cm),t&&(o[km]=t),n&&(o[Tm]=n),s&&(o[Zc]=s),i&&(o[Sm]=i),Nm(e,Am,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ms.set("previous_websocket_failure",!0);try{let n;ww(),this.mySock=new Ya(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&Ya!==null&&!ln.forceDisallow_}static previouslyFailed(){return Ms.isInMemoryStorage||Ms.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ms.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=Lo(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ae(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=lr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=wm(t,Zk);n.length>1&&this.sendString_(String(n.length));for(let s=0;s<n.length;s++)this.sendString_(n[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ln.responsesRequiredToBeHealthy=2;ln.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{static get ALL_TRANSPORTS(){return[vi,ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ln&&ln.isAvailable();let n=t&&!ln.previouslyFailed();if(e.webSocketOnly&&(t||Nr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ln];else{const s=this.transports_=[];for(const i of Mo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Mo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t3=6e4,r3=5e3,n3=10*1024,s3=100*1024,yc="t",Pf="d",i3="s",Nf="r",o3="e",$f="o",Lf="a",Df="n",Of="p",a3="h";class l3{constructor(e,t,n,s,i,o,a,l,u,p){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sa("c:"+this.id+":"),this.transportManager_=new Mo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ko(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>s3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>n3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yc in e){const t=e[yc];t===Lf?this.upgradeIfSecondaryHealthy_():t===Nf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===$f&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=to("t",e),n=to("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Of,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Df,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=to("t",e),n=to("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=to(yc,e);if(Pf in e){const n=e[Pf];if(t===a3){const s={...n};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Df){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===i3?this.onConnectionShutdown_(n):t===Nf?this.onReset_(n):t===o3?Jc("Server Error: "+n):t===$f?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),au!==n&&Nr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ko(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(t3))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ko(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(r3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Of,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ms.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{put(e,t,n,s){}merge(e,t,n,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.allowedEvents_=e,this.listeners_={},ae(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let s=0;s<n.length;s++)n[s].callback.apply(n[s].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const s=this.getInitialEvent(e);s&&t.apply(n,s)}off(e,t,n){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!n||n===s[i].context)){s.splice(i,1);return}}validateEventType_(e){ae(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends zm{static getInstance(){return new Qa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ae(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=32,qf=768;class Nt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[n]=this.pieces_[s],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function yt(){return new Nt("")}function et(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function Ts(r){return r.pieces_.length-r.pieceNum_}function jt(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Nt(r.pieces_,e)}function du(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function c3(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function qo(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Um(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new Nt(e,0)}function Qt(r,e){const t=[];for(let n=r.pieceNum_;n<r.pieces_.length;n++)t.push(r.pieces_[n]);if(e instanceof Nt)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let s=0;s<n.length;s++)n[s].length>0&&t.push(n[s])}return new Nt(t,0)}function tt(r){return r.pieceNum_>=r.pieces_.length}function Pr(r,e){const t=et(r),n=et(e);if(t===null)return e;if(t===n)return Pr(jt(r),jt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function d3(r,e){const t=qo(r,0),n=qo(e,0);for(let s=0;s<t.length&&s<n.length;s++){const i=ri(t[s],n[s]);if(i!==0)return i}return t.length===n.length?0:t.length<n.length?-1:1}function uu(r,e){if(Ts(r)!==Ts(e))return!1;for(let t=r.pieceNum_,n=e.pieceNum_;t<=r.pieces_.length;t++,n++)if(r.pieces_[t]!==e.pieces_[n])return!1;return!0}function en(r,e){let t=r.pieceNum_,n=e.pieceNum_;if(Ts(r)>Ts(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class u3{constructor(e,t){this.errorPrefix_=t,this.parts_=qo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=kl(this.parts_[n]);Fm(this)}}function h3(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=kl(e),Fm(r)}function f3(r){const e=r.parts_.pop();r.byteLength_-=kl(e),r.parts_.length>0&&(r.byteLength_-=1)}function Fm(r){if(r.byteLength_>qf)throw new Error(r.errorPrefix_+"has a key path longer than "+qf+" bytes ("+r.byteLength_+").");if(r.parts_.length>Mf)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mf+") or object contains a cycle "+Ls(r))}function Ls(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends zm{static getInstance(){return new hu}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return ae(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=1e3,p3=300*1e3,zf=30*1e3,v3=1.3,m3=3e4,g3="server_kill",Uf=3;class Gn extends qm{constructor(e,t,n,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Gn.nextPersistentConnectionId_++,this.log_=sa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ro,this.maxReconnectDelay_=p3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(lr(i)),ae(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[s]=n)}get(e){this.initConnection_();const t=new Xo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ae(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+n+" for "+s);const i={p:n},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Gn.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(n,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&$n(e,"w")){const n=Ti(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Nr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Iw(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+s),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,s)&&this.connected_&&this.sendUnlisten_(n,s,e._queryObject,t)}sendUnlisten_(e,t,n,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=n,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,s){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,n,s){this.putInternal("p",e,t,n,s)}merge(e,t,n,s){this.putInternal("m",e,t,n,s)}putInternal(e,t,n,s,i){this.initConnection_();const o={p:t,d:n};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lr(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Jc("Unrecognized action received from server: "+lr(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ae(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>m3&&(this.reconnectDelay_=ro),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*v3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Gn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},u=function(m){ae(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(m)};this.realtime_={close:l,sendRequest:u};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,v]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);o?vr("getToken() completed but was canceled"):(vr("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=v&&v.token,a=new l3(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,b=>{Nr(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(g3)},i))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&Nr(m),l())}}}interrupt(e){vr("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vr("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bc(this.interruptReasons_)&&(this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(i=>ou(i)).join("$"):n="default";const s=this.removeListen_(e,n);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const n=new Nt(e).toString();let s;if(this.listens.has(n)){const i=this.listens.get(n);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else s=void 0;return s}onAuthRevoked_(e,t){vr("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uf&&(this.reconnectDelay_=zf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){vr("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+gm.replace(/\./g,"-")]=1,Hd()?e["framework.cordova"]=1:Iv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qa.getInstance().currentlyOnline();return Bc(this.interruptReasons_)&&e}}Gn.nextPersistentConnectionId_=0;Gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new rt(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new rt(Is,e),s=new rt(Is,t);return this.compare(n,s)!==0}minPost(){return rt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;class jm extends Sl{static get __EMPTY_NODE(){return _a}static set __EMPTY_NODE(e){_a=e}compare(e,t){return ri(e.name,t.name)}isDefinedOn(e){throw Fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return rt.MIN}maxPost(){return new rt(rs,_a)}makePost(e,t){return ae(typeof e=="string","KeyIndex indexValue must always be a string."),new rt(e,_a)}toString(){return".key"}}const Kn=new jm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,n,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ur{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??ur.RED,this.left=s??Fr.EMPTY_NODE,this.right=i??Fr.EMPTY_NODE}copy(e,t,n,s,i){return new ur(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,s;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return Fr.EMPTY_NODE;s=n.right.min_(),n=n.copy(s.key,s.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ur.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ur.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ur.RED=!0;ur.BLACK=!1;class _3{copy(e,t,n,s,i){return this}insert(e,t,n){return new ur(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fr{constructor(e,t=Fr.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Fr(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ur.BLACK,null,null))}remove(e){return new Fr(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ur.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,s=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return s?s.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(s=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ba(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ba(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ba(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ba(this.root_,null,this.comparator_,!0,e)}}Fr.EMPTY_NODE=new _3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(r,e){return ri(r.name,e.name)}function fu(r,e){return ri(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed;function w3(r){ed=r}const Bm=function(r){return typeof r=="number"?"number:"+ym(r):"string:"+r},Vm=function(r){if(r.isLeafNode()){const e=r.val();ae(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$n(e,".sv"),"Priority must be a string or number.")}else ae(r===ed||r.isEmpty(),"priority of unexpected type.");ae(r===ed||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ff;class dr{static set __childrenNodeConstructor(e){Ff=e}static get __childrenNodeConstructor(){return Ff}constructor(e,t=dr.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ae(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new dr(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:dr.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return tt(e)?this:et(e)===".priority"?this.priorityNode_:dr.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:dr.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=et(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(ae(n!==".priority"||Ts(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,dr.__childrenNodeConstructor.EMPTY_NODE.updateChild(jt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bm(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ym(this.value_):e+=this.value_,this.lazyHash_=bm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===dr.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof dr.__childrenNodeConstructor?-1:(ae(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,s=dr.VALUE_TYPE_ORDER.indexOf(t),i=dr.VALUE_TYPE_ORDER.indexOf(n);return ae(s>=0,"Unknown leaf type: "+t),ae(i>=0,"Unknown leaf type: "+n),s===i?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}dr.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hm,Wm;function y3(r){Hm=r}function x3(r){Wm=r}class k3 extends Sl{compare(e,t){const n=e.node.getPriority(),s=t.node.getPriority(),i=n.compareTo(s);return i===0?ri(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return rt.MIN}maxPost(){return new rt(rs,new dr("[PRIORITY-POST]",Wm))}makePost(e,t){const n=Hm(e);return new rt(t,new dr("[PRIORITY-POST]",n))}toString(){return".priority"}}const Kt=new k3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E3=Math.log(2);class C3{constructor(e){const t=i=>parseInt(Math.log(i)/E3,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=n(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xa=function(r,e,t,n){r.sort(e);const s=function(l,u){const p=u-l;let m,v;if(p===0)return null;if(p===1)return m=r[l],v=t?t(m):m,new ur(v,m.node,ur.BLACK,null,null);{const b=parseInt(p/2,10)+l,g=s(l,b),w=s(b+1,u);return m=r[b],v=t?t(m):m,new ur(v,m.node,ur.BLACK,g,w)}},i=function(l){let u=null,p=null,m=r.length;const v=function(g,w){const k=m-g,I=m;m-=g;const P=s(k+1,I),$=r[k],N=t?t($):$;b(new ur(N,$.node,w,null,P))},b=function(g){u?(u.left=g,u=g):(p=g,u=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(g+1));w?v(k,ur.BLACK):(v(k,ur.BLACK),v(k,ur.RED))}return p},o=new C3(r.length),a=i(o);return new Fr(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;const di={};class jn{static get Default(){return ae(di&&Kt,"ChildrenNode.ts has not been loaded"),xc=xc||new jn({".priority":di},{".priority":Kt}),xc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ti(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Fr?t:null}hasIndex(e){return $n(this.indexSet_,e.toString())}addIndex(e,t){ae(e!==Kn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let s=!1;const i=t.getIterator(rt.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),n.push(o),o=i.getNext();let a;s?a=Xa(n,e.getCompare()):a=di;const l=e.toString(),u={...this.indexSet_};u[l]=e;const p={...this.indexes_};return p[l]=a,new jn(p,u)}addToIndexes(e,t){const n=Fa(this.indexes_,(s,i)=>{const o=Ti(this.indexSet_,i);if(ae(o,"Missing index implementation for "+i),s===di)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(rt.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Xa(a,o.getCompare())}else return di;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new rt(e.name,a))),l.insert(e,e.node)}});return new jn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Fa(this.indexes_,s=>{if(s===di)return s;{const i=t.get(e.name);return i?s.remove(new rt(e.name,i)):s}});return new jn(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;class Me{static get EMPTY_NODE(){return no||(no=new Me(new Fr(fu),null,jn.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Vm(this.priorityNode_),this.children_.isEmpty()&&ae(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||no}updatePriority(e){return this.children_.isEmpty()?this:new Me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?no:t}}getChild(e){const t=et(e);return t===null?this:this.getImmediateChild(t).getChild(jt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ae(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new rt(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=s.isEmpty()?no:this.priorityNode_;return new Me(s,o,i)}}updateChild(e,t){const n=et(e);if(n===null)return t;{ae(et(e)!==".priority"||Ts(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(n).updateChild(jt(e),t);return this.updateImmediateChild(n,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,s=0,i=!0;if(this.forEachChild(Kt,(o,a)=>{t[o]=a.val(e),n++,i&&Me.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bm(this.getPriority().val())+":"),this.forEachChild(Kt,(t,n)=>{const s=n.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":bm(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const s=this.resolveIndex_(n);if(s){const i=s.getPredecessorKey(new rt(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new rt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new rt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,rt.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,rt.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ia?-1:0}withIndex(e){if(e===Kn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Me(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Kn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Kt),s=t.getIterator(Kt);let i=n.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kn?null:this.indexMap_.get(e.toString())}}Me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class I3 extends Me{constructor(){super(new Fr(fu),Me.EMPTY_NODE,jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Me.EMPTY_NODE}isEmpty(){return!1}}const ia=new I3;Object.defineProperties(rt,{MIN:{value:new rt(Is,Me.EMPTY_NODE)},MAX:{value:new rt(rs,ia)}});jm.__EMPTY_NODE=Me.EMPTY_NODE;dr.__childrenNodeConstructor=Me;w3(ia);x3(ia);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3=!0;function ar(r,e=null){if(r===null)return Me.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),ae(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new dr(t,ar(e))}if(!(r instanceof Array)&&T3){const t=[];let n=!1;if(gr(r,(o,a)=>{if(o.substring(0,1)!=="."){const l=ar(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new rt(o,l)))}}),t.length===0)return Me.EMPTY_NODE;const i=Xa(t,b3,o=>o.name,fu);if(n){const o=Xa(t,Kt.getCompare());return new Me(i,ar(e),new jn({".priority":o},{".priority":Kt}))}else return new Me(i,ar(e),jn.Default)}else{let t=Me.EMPTY_NODE;return gr(r,(n,s)=>{if($n(r,n)&&n.substring(0,1)!=="."){const i=ar(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority(ar(e))}}y3(ar);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends Sl{constructor(e){super(),this.indexPath_=e,ae(!tt(e)&&et(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),s=this.extractChild(t.node),i=n.compareTo(s);return i===0?ri(e.name,t.name):i}makePost(e,t){const n=ar(e),s=Me.EMPTY_NODE.updateChild(this.indexPath_,n);return new rt(t,s)}maxPost(){const e=Me.EMPTY_NODE.updateChild(this.indexPath_,ia);return new rt(rs,e)}toString(){return qo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3 extends Sl{compare(e,t){const n=e.node.compareTo(t.node);return n===0?ri(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return rt.MIN}maxPost(){return rt.MAX}makePost(e,t){const n=ar(e);return new rt(t,n)}toString(){return".value"}}const Gm=new S3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(r){return{type:"value",snapshotNode:r}}function Ai(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function zo(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Uo(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function A3(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.index_=e}updateChild(e,t,n,s,i,o){ae(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(n.getChild(s))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(zo(t,a)):ae(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ai(t,n)):o.trackChildChange(Uo(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Kt,(s,i)=>{t.hasChild(s)||n.trackChildChange(zo(s,i))}),t.isLeafNode()||t.forEachChild(Kt,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||n.trackChildChange(Uo(s,i,o))}else n.trackChildChange(Ai(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Me.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.indexedFilter_=new vu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fo.getStartPost_(e),this.endPost_=Fo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,s,i,o){return this.matches(new rt(t,n))||(n=Me.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,s,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Me.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Me.EMPTY_NODE);const i=this;return t.forEachChild(Kt,(o,a)=>{i.matches(new rt(o,a))||(s=s.updateImmediateChild(o,Me.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new Fo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,s,i,o){return this.rangedFilter_.matches(new rt(t,n))||(n=Me.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,s,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let s;if(t.isLeafNode()||t.isEmpty())s=Me.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Me.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Me.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Me.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,s,i){let o;if(this.reverse_){const m=this.index_.getCompare();o=(v,b)=>m(b,v)}else o=this.index_.getCompare();const a=e;ae(a.numChildren()===this.limit_,"");const l=new rt(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),p=this.rangedFilter_.matches(l);if(a.hasChild(t)){const m=a.getImmediateChild(t);let v=s.getChildAfterChild(this.index_,u,this.reverse_);for(;v!=null&&(v.name===t||a.hasChild(v.name));)v=s.getChildAfterChild(this.index_,v,this.reverse_);const b=v==null?1:o(v,l);if(p&&!n.isEmpty()&&b>=0)return i?.trackChildChange(Uo(t,n,m)),a.updateImmediateChild(t,n);{i?.trackChildChange(zo(t,m));const w=a.updateImmediateChild(t,Me.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(i?.trackChildChange(Ai(v.name,v.node)),w.updateImmediateChild(v.name,v.node)):w}}else return n.isEmpty()?e:p&&o(u,l)>=0?(i!=null&&(i.trackChildChange(zo(u.name,u.node)),i.trackChildChange(Ai(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,Me.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Kt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ae(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ae(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Is}hasEnd(){return this.endSet_}getIndexEndValue(){return ae(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ae(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ae(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Kt}copy(){const e=new mu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function P3(r){return r.loadsAllData()?new vu(r.getIndex()):r.hasLimit()?new R3(r):new Fo(r)}function N3(r,e){const t=r.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function $3(r,e){const t=r.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function td(r,e,t){const n=r.copy();return n.startSet_=!0,e===void 0&&(e=null),n.indexStartValue_=e,t!=null?(n.startNameSet_=!0,n.indexStartName_=t):(n.startNameSet_=!1,n.indexStartName_=""),n}function L3(r,e,t){let n;return r.index_===Kn||t?n=td(r,e,t):n=td(r,e,rs),n.startAfterSet_=!0,n}function rd(r,e,t){const n=r.copy();return n.endSet_=!0,e===void 0&&(e=null),n.indexEndValue_=e,t!==void 0?(n.endNameSet_=!0,n.indexEndName_=t):(n.endNameSet_=!1,n.indexEndName_=""),n}function D3(r,e,t){let n;return r.index_===Kn||t?n=rd(r,e,t):n=rd(r,e,Is),n.endBeforeSet_=!0,n}function O3(r,e){const t=r.copy();return t.index_=e,t}function jf(r){const e={};if(r.isDefault())return e;let t;if(r.index_===Kt?t="$priority":r.index_===Gm?t="$value":r.index_===Kn?t="$key":(ae(r.index_ instanceof pu,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=lr(t),r.startSet_){const n=r.startAfterSet_?"startAfter":"startAt";e[n]=lr(r.indexStartValue_),r.startNameSet_&&(e[n]+=","+lr(r.indexStartName_))}if(r.endSet_){const n=r.endBeforeSet_?"endBefore":"endAt";e[n]=lr(r.indexEndValue_),r.endNameSet_&&(e[n]+=","+lr(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Bf(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==Kt&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends qm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ae(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=s,this.log_=sa("p:rest:"),this.listens_={}}listen(e,t,n,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ja.getListenId_(e,n),a={};this.listens_[o]=a;const l=jf(e._queryParams);this.restRequest_(i+".json",l,(u,p)=>{let m=p;if(u===404&&(m=null,u=null),u===null&&this.onDataUpdate_(i,m,!1,n),Ti(this.listens_,o)===a){let v;u?u===401?v="permission_denied":v="rest_error:"+u:v="ok",s(v,null)}})}unlisten(e,t){const n=Ja.getListenId_(e,t);delete this.listens_[n]}get(e){const t=jf(e._queryParams),n=e._path.toString(),s=new Xo;return this.restRequest_(n+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(n,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ei(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Lo(a.responseText)}catch{Nr("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&Nr("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(){this.rootNode_=Me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){return{value:null,children:new Map}}function Ym(r,e,t){if(tt(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const n=et(e);r.children.has(n)||r.children.set(n,Za());const s=r.children.get(n);e=jt(e),Ym(s,e,t)}}function nd(r,e,t){r.value!==null?t(e,r.value):q3(r,(n,s)=>{const i=new Nt(e.toString()+"/"+n);nd(s,i,t)})}function q3(r,e){r.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&gr(this.last_,(n,s)=>{t[n]=t[n]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=10*1e3,U3=30*1e3,F3=300*1e3;class j3{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new z3(e);const n=Vf+(U3-Vf)*Math.random();ko(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;gr(e,(s,i)=>{i>0&&$n(this.statsToReport_,s)&&(t[s]=i,n=!0)}),n&&this.server_.reportStats(t),ko(this.reportStats_.bind(this),Math.floor(Math.random()*2*F3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var un;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(un||(un={}));function gu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _u(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bu(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=un.ACK_USER_WRITE,this.source=gu()}operationForChild(e){if(tt(this.path)){if(this.affectedTree.value!=null)return ae(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Nt(e));return new el(yt(),t,this.revert)}}else return ae(et(this.path)===e,"operationForChild called for unrelated child."),new el(jt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.source=e,this.path=t,this.type=un.LISTEN_COMPLETE}operationForChild(e){return tt(this.path)?new jo(this.source,yt()):new jo(this.source,jt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=un.OVERWRITE}operationForChild(e){return tt(this.path)?new Ks(this.source,yt(),this.snap.getImmediateChild(e)):new Ks(this.source,jt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=un.MERGE}operationForChild(e){if(tt(this.path)){const t=this.children.subtree(new Nt(e));return t.isEmpty()?null:t.value?new Ks(this.source,yt(),t.value):new Ri(this.source,yt(),t)}else return ae(et(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ri(this.source,jt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(tt(e))return this.isFullyInitialized()&&!this.filtered_;const t=et(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B3{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function V3(r,e,t,n){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&r.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(A3(o.childName,o.snapshotNode))}),so(r,s,"child_removed",e,n,t),so(r,s,"child_added",e,n,t),so(r,s,"child_moved",i,n,t),so(r,s,"child_changed",e,n,t),so(r,s,"value",e,n,t),s}function so(r,e,t,n,s,i){const o=n.filter(a=>a.type===t);o.sort((a,l)=>W3(r,a,l)),o.forEach(a=>{const l=H3(r,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,r.query_))})})}function H3(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function W3(r,e,t){if(e.childName==null||t.childName==null)throw Fi("Should only compare child_ events.");const n=new rt(e.childName,e.snapshotNode),s=new rt(t.childName,t.snapshotNode);return r.index_.compare(n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r,e){return{eventCache:r,serverCache:e}}function Eo(r,e,t,n){return Al(new Ss(e,t,n),r.serverCache)}function Qm(r,e,t,n){return Al(r.eventCache,new Ss(e,t,n))}function tl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Ys(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc;const G3=()=>(kc||(kc=new Fr(Sk)),kc);class Ft{static fromObject(e){let t=new Ft(null);return gr(e,(n,s)=>{t=t.set(new Nt(n),s)}),t}constructor(e,t=G3()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:yt(),value:this.value};if(tt(e))return null;{const n=et(e),s=this.children.get(n);if(s!==null){const i=s.findRootMostMatchingPathAndValue(jt(e),t);return i!=null?{path:Qt(new Nt(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(tt(e))return this;{const t=et(e),n=this.children.get(t);return n!==null?n.subtree(jt(e)):new Ft(null)}}set(e,t){if(tt(e))return new Ft(t,this.children);{const n=et(e),i=(this.children.get(n)||new Ft(null)).set(jt(e),t),o=this.children.insert(n,i);return new Ft(this.value,o)}}remove(e){if(tt(e))return this.children.isEmpty()?new Ft(null):new Ft(null,this.children);{const t=et(e),n=this.children.get(t);if(n){const s=n.remove(jt(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new Ft(null):new Ft(this.value,i)}else return this}}get(e){if(tt(e))return this.value;{const t=et(e),n=this.children.get(t);return n?n.get(jt(e)):null}}setTree(e,t){if(tt(e))return t;{const n=et(e),i=(this.children.get(n)||new Ft(null)).setTree(jt(e),t);let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),new Ft(this.value,o)}}fold(e){return this.fold_(yt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((s,i)=>{n[s]=i.fold_(Qt(e,s),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,yt(),t)}findOnPath_(e,t,n){const s=this.value?n(t,this.value):!1;if(s)return s;if(tt(e))return null;{const i=et(e),o=this.children.get(i);return o?o.findOnPath_(jt(e),Qt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,yt(),t)}foreachOnPath_(e,t,n){if(tt(e))return this;{this.value&&n(t,this.value);const s=et(e),i=this.children.get(s);return i?i.foreachOnPath_(jt(e),Qt(t,s),n):new Ft(null)}}foreach(e){this.foreach_(yt(),e)}foreach_(e,t){this.children.inorderTraversal((n,s)=>{s.foreach_(Qt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.writeTree_=e}static empty(){return new fn(new Ft(null))}}function Co(r,e,t){if(tt(e))return new fn(new Ft(t));{const n=r.writeTree_.findRootMostValueAndPath(e);if(n!=null){const s=n.path;let i=n.value;const o=Pr(s,e);return i=i.updateChild(o,t),new fn(r.writeTree_.set(s,i))}else{const s=new Ft(t),i=r.writeTree_.setTree(e,s);return new fn(i)}}}function sd(r,e,t){let n=r;return gr(t,(s,i)=>{n=Co(n,Qt(e,s),i)}),n}function Hf(r,e){if(tt(e))return fn.empty();{const t=r.writeTree_.setTree(e,new Ft(null));return new fn(t)}}function id(r,e){return ni(r,e)!=null}function ni(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(Pr(t.path,e)):null}function Wf(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Kt,(n,s)=>{e.push(new rt(n,s))}):r.writeTree_.children.inorderTraversal((n,s)=>{s.value!=null&&e.push(new rt(n,s.value))}),e}function ys(r,e){if(tt(e))return r;{const t=ni(r,e);return t!=null?new fn(new Ft(t)):new fn(r.writeTree_.subtree(e))}}function od(r){return r.writeTree_.isEmpty()}function Pi(r,e){return Xm(yt(),r.writeTree_,e)}function Xm(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let n=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(ae(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=Xm(Qt(r,s),i,t)}),!t.getChild(r).isEmpty()&&n!==null&&(t=t.updateChild(Qt(r,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(r,e){return tg(e,r)}function K3(r,e,t,n,s){ae(n>r.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),r.allWrites.push({path:e,snap:t,writeId:n,visible:s}),s&&(r.visibleWrites=Co(r.visibleWrites,e,t)),r.lastWriteId=n}function Y3(r,e,t,n){ae(n>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:n,visible:!0}),r.visibleWrites=sd(r.visibleWrites,e,t),r.lastWriteId=n}function Q3(r,e){for(let t=0;t<r.allWrites.length;t++){const n=r.allWrites[t];if(n.writeId===e)return n}return null}function X3(r,e){const t=r.allWrites.findIndex(a=>a.writeId===e);ae(t>=0,"removeWrite called with nonexistent writeId.");const n=r.allWrites[t];r.allWrites.splice(t,1);let s=n.visible,i=!1,o=r.allWrites.length-1;for(;s&&o>=0;){const a=r.allWrites[o];a.visible&&(o>=t&&J3(a,n.path)?s=!1:en(n.path,a.path)&&(i=!0)),o--}if(s){if(i)return Z3(r),!0;if(n.snap)r.visibleWrites=Hf(r.visibleWrites,n.path);else{const a=n.children;gr(a,l=>{r.visibleWrites=Hf(r.visibleWrites,Qt(n.path,l))})}return!0}else return!1}function J3(r,e){if(r.snap)return en(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&en(Qt(r.path,t),e))return!0;return!1}function Z3(r){r.visibleWrites=Jm(r.allWrites,eE,yt()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function eE(r){return r.visible}function Jm(r,e,t){let n=fn.empty();for(let s=0;s<r.length;++s){const i=r[s];if(e(i)){const o=i.path;let a;if(i.snap)en(t,o)?(a=Pr(t,o),n=Co(n,a,i.snap)):en(o,t)&&(a=Pr(o,t),n=Co(n,yt(),i.snap.getChild(a)));else if(i.children){if(en(t,o))a=Pr(t,o),n=sd(n,a,i.children);else if(en(o,t))if(a=Pr(o,t),tt(a))n=sd(n,yt(),i.children);else{const l=Ti(i.children,et(a));if(l){const u=l.getChild(jt(a));n=Co(n,yt(),u)}}}else throw Fi("WriteRecord should have .snap or .children")}}return n}function Zm(r,e,t,n,s){if(!n&&!s){const i=ni(r.visibleWrites,e);if(i!=null)return i;{const o=ys(r.visibleWrites,e);if(od(o))return t;if(t==null&&!id(o,yt()))return null;{const a=t||Me.EMPTY_NODE;return Pi(o,a)}}}else{const i=ys(r.visibleWrites,e);if(!s&&od(i))return t;if(!s&&t==null&&!id(i,yt()))return null;{const o=function(u){return(u.visible||s)&&(!n||!~n.indexOf(u.writeId))&&(en(u.path,e)||en(e,u.path))},a=Jm(r.allWrites,o,e),l=t||Me.EMPTY_NODE;return Pi(a,l)}}}function tE(r,e,t){let n=Me.EMPTY_NODE;const s=ni(r.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Kt,(i,o)=>{n=n.updateImmediateChild(i,o)}),n;if(t){const i=ys(r.visibleWrites,e);return t.forEachChild(Kt,(o,a)=>{const l=Pi(ys(i,new Nt(o)),a);n=n.updateImmediateChild(o,l)}),Wf(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const i=ys(r.visibleWrites,e);return Wf(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function rE(r,e,t,n,s){ae(n||s,"Either existingEventSnap or existingServerSnap must exist");const i=Qt(e,t);if(id(r.visibleWrites,i))return null;{const o=ys(r.visibleWrites,i);return od(o)?s.getChild(t):Pi(o,s.getChild(t))}}function nE(r,e,t,n){const s=Qt(e,t),i=ni(r.visibleWrites,s);if(i!=null)return i;if(n.isCompleteForChild(t)){const o=ys(r.visibleWrites,s);return Pi(o,n.getNode().getImmediateChild(t))}else return null}function sE(r,e){return ni(r.visibleWrites,e)}function iE(r,e,t,n,s,i,o){let a;const l=ys(r.visibleWrites,e),u=ni(l,yt());if(u!=null)a=u;else if(t!=null)a=Pi(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const p=[],m=o.getCompare(),v=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let b=v.getNext();for(;b&&p.length<s;)m(b,n)!==0&&p.push(b),b=v.getNext();return p}else return[]}function oE(){return{visibleWrites:fn.empty(),allWrites:[],lastWriteId:-1}}function rl(r,e,t,n){return Zm(r.writeTree,r.treePath,e,t,n)}function wu(r,e){return tE(r.writeTree,r.treePath,e)}function Gf(r,e,t,n){return rE(r.writeTree,r.treePath,e,t,n)}function nl(r,e){return sE(r.writeTree,Qt(r.treePath,e))}function aE(r,e,t,n,s,i){return iE(r.writeTree,r.treePath,e,t,n,s,i)}function yu(r,e,t){return nE(r.writeTree,r.treePath,e,t)}function eg(r,e){return tg(Qt(r.treePath,e),r.writeTree)}function tg(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;ae(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ae(n!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(n);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,Uo(n,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,zo(n,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,Ai(n,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,Uo(n,e.snapshotNode,s.oldSnap));else throw Fi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const rg=new cE;class xu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new Ss(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yu(this.writes_,e,n)}}getChildAfterChild(e,t,n){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ys(this.viewCache_),i=aE(this.writes_,s,t,1,n,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(r){return{filter:r}}function uE(r,e){ae(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),ae(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function hE(r,e,t,n,s){const i=new lE;let o,a;if(t.type===un.OVERWRITE){const u=t;u.source.fromUser?o=ad(r,e,u.path,u.snap,n,s,i):(ae(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!tt(u.path),o=sl(r,e,u.path,u.snap,n,s,a,i))}else if(t.type===un.MERGE){const u=t;u.source.fromUser?o=pE(r,e,u.path,u.children,n,s,i):(ae(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ld(r,e,u.path,u.children,n,s,a,i))}else if(t.type===un.ACK_USER_WRITE){const u=t;u.revert?o=gE(r,e,u.path,n,s,i):o=vE(r,e,u.path,u.affectedTree,n,s,i)}else if(t.type===un.LISTEN_COMPLETE)o=mE(r,e,t.path,n,i);else throw Fi("Unknown operation type: "+t.type);const l=i.getChanges();return fE(e,o,l),{viewCache:o,changes:l}}function fE(r,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const s=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=tl(r);(t.length>0||!r.eventCache.isFullyInitialized()||s&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(Km(tl(e)))}}function ng(r,e,t,n,s,i){const o=e.eventCache;if(nl(n,t)!=null)return e;{let a,l;if(tt(t))if(ae(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ys(e),p=u instanceof Me?u:Me.EMPTY_NODE,m=wu(n,p);a=r.filter.updateFullNode(e.eventCache.getNode(),m,i)}else{const u=rl(n,Ys(e));a=r.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=et(t);if(u===".priority"){ae(Ts(t)===1,"Can't have a priority with additional path components");const p=o.getNode();l=e.serverCache.getNode();const m=Gf(n,t,p,l);m!=null?a=r.filter.updatePriority(p,m):a=o.getNode()}else{const p=jt(t);let m;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const v=Gf(n,t,o.getNode(),l);v!=null?m=o.getNode().getImmediateChild(u).updateChild(p,v):m=o.getNode().getImmediateChild(u)}else m=yu(n,u,e.serverCache);m!=null?a=r.filter.updateChild(o.getNode(),u,m,p,s,i):a=o.getNode()}}return Eo(e,a,o.isFullyInitialized()||tt(t),r.filter.filtersNodes())}}function sl(r,e,t,n,s,i,o,a){const l=e.serverCache;let u;const p=o?r.filter:r.filter.getIndexedFilter();if(tt(t))u=p.updateFullNode(l.getNode(),n,null);else if(p.filtersNodes()&&!l.isFiltered()){const b=l.getNode().updateChild(t,n);u=p.updateFullNode(l.getNode(),b,null)}else{const b=et(t);if(!l.isCompleteForPath(t)&&Ts(t)>1)return e;const g=jt(t),k=l.getNode().getImmediateChild(b).updateChild(g,n);b===".priority"?u=p.updatePriority(l.getNode(),k):u=p.updateChild(l.getNode(),b,k,g,rg,null)}const m=Qm(e,u,l.isFullyInitialized()||tt(t),p.filtersNodes()),v=new xu(s,m,i);return ng(r,m,t,s,v,a)}function ad(r,e,t,n,s,i,o){const a=e.eventCache;let l,u;const p=new xu(s,e,i);if(tt(t))u=r.filter.updateFullNode(e.eventCache.getNode(),n,o),l=Eo(e,u,!0,r.filter.filtersNodes());else{const m=et(t);if(m===".priority")u=r.filter.updatePriority(e.eventCache.getNode(),n),l=Eo(e,u,a.isFullyInitialized(),a.isFiltered());else{const v=jt(t),b=a.getNode().getImmediateChild(m);let g;if(tt(v))g=n;else{const w=p.getCompleteChild(m);w!=null?du(v)===".priority"&&w.getChild(Um(v)).isEmpty()?g=w:g=w.updateChild(v,n):g=Me.EMPTY_NODE}if(b.equals(g))l=e;else{const w=r.filter.updateChild(a.getNode(),m,g,v,p,o);l=Eo(e,w,a.isFullyInitialized(),r.filter.filtersNodes())}}}return l}function Kf(r,e){return r.eventCache.isCompleteForChild(e)}function pE(r,e,t,n,s,i,o){let a=e;return n.foreach((l,u)=>{const p=Qt(t,l);Kf(e,et(p))&&(a=ad(r,a,p,u,s,i,o))}),n.foreach((l,u)=>{const p=Qt(t,l);Kf(e,et(p))||(a=ad(r,a,p,u,s,i,o))}),a}function Yf(r,e,t){return t.foreach((n,s)=>{e=e.updateChild(n,s)}),e}function ld(r,e,t,n,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;tt(t)?u=n:u=new Ft(null).setTree(t,n);const p=e.serverCache.getNode();return u.children.inorderTraversal((m,v)=>{if(p.hasChild(m)){const b=e.serverCache.getNode().getImmediateChild(m),g=Yf(r,b,v);l=sl(r,l,new Nt(m),g,s,i,o,a)}}),u.children.inorderTraversal((m,v)=>{const b=!e.serverCache.isCompleteForChild(m)&&v.value===null;if(!p.hasChild(m)&&!b){const g=e.serverCache.getNode().getImmediateChild(m),w=Yf(r,g,v);l=sl(r,l,new Nt(m),w,s,i,o,a)}}),l}function vE(r,e,t,n,s,i,o){if(nl(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(tt(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return sl(r,e,t,l.getNode().getChild(t),s,i,a,o);if(tt(t)){let u=new Ft(null);return l.getNode().forEachChild(Kn,(p,m)=>{u=u.set(new Nt(p),m)}),ld(r,e,t,u,s,i,a,o)}else return e}else{let u=new Ft(null);return n.foreach((p,m)=>{const v=Qt(t,p);l.isCompleteForPath(v)&&(u=u.set(p,l.getNode().getChild(v)))}),ld(r,e,t,u,s,i,a,o)}}function mE(r,e,t,n,s){const i=e.serverCache,o=Qm(e,i.getNode(),i.isFullyInitialized()||tt(t),i.isFiltered());return ng(r,o,t,n,rg,s)}function gE(r,e,t,n,s,i){let o;if(nl(n,t)!=null)return e;{const a=new xu(n,e,s),l=e.eventCache.getNode();let u;if(tt(t)||et(t)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=rl(n,Ys(e));else{const m=e.serverCache.getNode();ae(m instanceof Me,"serverChildren would be complete if leaf node"),p=wu(n,m)}p=p,u=r.filter.updateFullNode(l,p,i)}else{const p=et(t);let m=yu(n,p,e.serverCache);m==null&&e.serverCache.isCompleteForChild(p)&&(m=l.getImmediateChild(p)),m!=null?u=r.filter.updateChild(l,p,m,jt(t),a,i):e.eventCache.getNode().hasChild(p)?u=r.filter.updateChild(l,p,Me.EMPTY_NODE,jt(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rl(n,Ys(e)),o.isLeafNode()&&(u=r.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||nl(n,yt())!=null,Eo(e,u,o,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,s=new vu(n.getIndex()),i=P3(n);this.processor_=dE(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(Me.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(Me.EMPTY_NODE,a.getNode(),null),p=new Ss(l,o.isFullyInitialized(),s.filtersNodes()),m=new Ss(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Al(m,p),this.eventGenerator_=new B3(this.query_)}get query(){return this.query_}}function bE(r){return r.viewCache_.serverCache.getNode()}function wE(r){return tl(r.viewCache_)}function yE(r,e){const t=Ys(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!tt(e)&&!t.getImmediateChild(et(e)).isEmpty())?t.getChild(e):null}function Qf(r){return r.eventRegistrations_.length===0}function xE(r,e){r.eventRegistrations_.push(e)}function Xf(r,e,t){const n=[];if(t){ae(e==null,"A cancel should cancel all event registrations.");const s=r.query._path;r.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&n.push(o)})}if(e){let s=[];for(let i=0;i<r.eventRegistrations_.length;++i){const o=r.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(r.eventRegistrations_.slice(i+1));break}}r.eventRegistrations_=s}else r.eventRegistrations_=[];return n}function Jf(r,e,t,n){e.type===un.MERGE&&e.source.queryId!==null&&(ae(Ys(r.viewCache_),"We should always have a full cache before handling merges"),ae(tl(r.viewCache_),"Missing event cache, even though we have a server cache"));const s=r.viewCache_,i=hE(r.processor_,s,e,t,n);return uE(r.processor_,i.viewCache),ae(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=i.viewCache,sg(r,i.changes,i.viewCache.eventCache.getNode(),null)}function kE(r,e){const t=r.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Kt,(i,o)=>{n.push(Ai(i,o))}),t.isFullyInitialized()&&n.push(Km(t.getNode())),sg(r,n,t.getNode(),e)}function sg(r,e,t,n){const s=n?[n]:r.eventRegistrations_;return V3(r.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il;class ig{constructor(){this.views=new Map}}function EE(r){ae(!il,"__referenceConstructor has already been defined"),il=r}function CE(){return ae(il,"Reference.ts has not been loaded"),il}function IE(r){return r.views.size===0}function ku(r,e,t,n){const s=e.source.queryId;if(s!==null){const i=r.views.get(s);return ae(i!=null,"SyncTree gave us an op for an invalid query."),Jf(i,e,t,n)}else{let i=[];for(const o of r.views.values())i=i.concat(Jf(o,e,t,n));return i}}function og(r,e,t,n,s){const i=e._queryIdentifier,o=r.views.get(i);if(!o){let a=rl(t,s?n:null),l=!1;a?l=!0:n instanceof Me?(a=wu(t,n),l=!1):(a=Me.EMPTY_NODE,l=!1);const u=Al(new Ss(a,l,!1),new Ss(n,s,!1));return new _E(e,u)}return o}function TE(r,e,t,n,s,i){const o=og(r,e,n,s,i);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,o),xE(o,t),kE(o,t)}function SE(r,e,t,n){const s=e._queryIdentifier,i=[];let o=[];const a=As(r);if(s==="default")for(const[l,u]of r.views.entries())o=o.concat(Xf(u,t,n)),Qf(u)&&(r.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=r.views.get(s);l&&(o=o.concat(Xf(l,t,n)),Qf(l)&&(r.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!As(r)&&i.push(new(CE())(e._repo,e._path)),{removed:i,events:o}}function ag(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function xs(r,e){let t=null;for(const n of r.views.values())t=t||yE(n,e);return t}function lg(r,e){if(e._queryParams.loadsAllData())return Pl(r);{const n=e._queryIdentifier;return r.views.get(n)}}function cg(r,e){return lg(r,e)!=null}function As(r){return Pl(r)!=null}function Pl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol;function AE(r){ae(!ol,"__referenceConstructor has already been defined"),ol=r}function RE(){return ae(ol,"Reference.ts has not been loaded"),ol}let PE=1;class Zf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ft(null),this.pendingWriteTree_=oE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dg(r,e,t,n,s){return K3(r.pendingWriteTree_,e,t,n,s),s?Vi(r,new Ks(gu(),e,t)):[]}function NE(r,e,t,n){Y3(r.pendingWriteTree_,e,t,n);const s=Ft.fromObject(t);return Vi(r,new Ri(gu(),e,s))}function ms(r,e,t=!1){const n=Q3(r.pendingWriteTree_,e);if(X3(r.pendingWriteTree_,e)){let i=new Ft(null);return n.snap!=null?i=i.set(yt(),!0):gr(n.children,o=>{i=i.set(new Nt(o),!0)}),Vi(r,new el(n.path,i,t))}else return[]}function oa(r,e,t){return Vi(r,new Ks(_u(),e,t))}function $E(r,e,t){const n=Ft.fromObject(t);return Vi(r,new Ri(_u(),e,n))}function LE(r,e){return Vi(r,new jo(_u(),e))}function DE(r,e,t){const n=Cu(r,t);if(n){const s=Iu(n),i=s.path,o=s.queryId,a=Pr(i,e),l=new jo(bu(o),a);return Tu(r,i,l)}else return[]}function al(r,e,t,n,s=!1){const i=e._path,o=r.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||cg(o,e))){const l=SE(o,e,t,n);IE(o)&&(r.syncPointTree_=r.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const p=u.findIndex(v=>v._queryParams.loadsAllData())!==-1,m=r.syncPointTree_.findOnPath(i,(v,b)=>As(b));if(p&&!m){const v=r.syncPointTree_.subtree(i);if(!v.isEmpty()){const b=qE(v);for(let g=0;g<b.length;++g){const w=b[g],k=w.query,I=pg(r,w);r.listenProvider_.startListening(Io(k),Bo(r,k),I.hashFn,I.onComplete)}}}!m&&u.length>0&&!n&&(p?r.listenProvider_.stopListening(Io(e),null):u.forEach(v=>{const b=r.queryToTagMap.get(Nl(v));r.listenProvider_.stopListening(Io(v),b)}))}zE(r,u)}return a}function ug(r,e,t,n){const s=Cu(r,n);if(s!=null){const i=Iu(s),o=i.path,a=i.queryId,l=Pr(o,e),u=new Ks(bu(a),l,t);return Tu(r,o,u)}else return[]}function OE(r,e,t,n){const s=Cu(r,n);if(s){const i=Iu(s),o=i.path,a=i.queryId,l=Pr(o,e),u=Ft.fromObject(t),p=new Ri(bu(a),l,u);return Tu(r,o,p)}else return[]}function cd(r,e,t,n=!1){const s=e._path;let i=null,o=!1;r.syncPointTree_.foreachOnPath(s,(v,b)=>{const g=Pr(v,s);i=i||xs(b,g),o=o||As(b)});let a=r.syncPointTree_.get(s);a?(o=o||As(a),i=i||xs(a,yt())):(a=new ig,r.syncPointTree_=r.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=Me.EMPTY_NODE,r.syncPointTree_.subtree(s).foreachChild((b,g)=>{const w=xs(g,yt());w&&(i=i.updateImmediateChild(b,w))}));const u=cg(a,e);if(!u&&!e._queryParams.loadsAllData()){const v=Nl(e);ae(!r.queryToTagMap.has(v),"View does not exist, but we have a tag");const b=UE();r.queryToTagMap.set(v,b),r.tagToQueryMap.set(b,v)}const p=Rl(r.pendingWriteTree_,s);let m=TE(a,e,t,p,i,l);if(!u&&!o&&!n){const v=lg(a,e);m=m.concat(FE(r,e,v))}return m}function Eu(r,e,t){const s=r.pendingWriteTree_,i=r.syncPointTree_.findOnPath(e,(o,a)=>{const l=Pr(o,e),u=xs(a,l);if(u)return u});return Zm(s,e,i,t,!0)}function ME(r,e){const t=e._path;let n=null;r.syncPointTree_.foreachOnPath(t,(u,p)=>{const m=Pr(u,t);n=n||xs(p,m)});let s=r.syncPointTree_.get(t);s?n=n||xs(s,yt()):(s=new ig,r.syncPointTree_=r.syncPointTree_.set(t,s));const i=n!=null,o=i?new Ss(n,!0,!1):null,a=Rl(r.pendingWriteTree_,e._path),l=og(s,e,a,i?o.getNode():Me.EMPTY_NODE,i);return wE(l)}function Vi(r,e){return hg(e,r.syncPointTree_,null,Rl(r.pendingWriteTree_,yt()))}function hg(r,e,t,n){if(tt(r.path))return fg(r,e,t,n);{const s=e.get(yt());t==null&&s!=null&&(t=xs(s,yt()));let i=[];const o=et(r.path),a=r.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,p=eg(n,o);i=i.concat(hg(a,l,u,p))}return s&&(i=i.concat(ku(s,r,n,t))),i}}function fg(r,e,t,n){const s=e.get(yt());t==null&&s!=null&&(t=xs(s,yt()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=eg(n,o),p=r.operationForChild(o);p&&(i=i.concat(fg(p,a,l,u)))}),s&&(i=i.concat(ku(s,r,n,t))),i}function pg(r,e){const t=e.query,n=Bo(r,t);return{hashFn:()=>(bE(e)||Me.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return n?DE(r,t._path,n):LE(r,t._path);{const i=Pk(s,t);return al(r,t,null,i)}}}}function Bo(r,e){const t=Nl(e);return r.queryToTagMap.get(t)}function Nl(r){return r._path.toString()+"$"+r._queryIdentifier}function Cu(r,e){return r.tagToQueryMap.get(e)}function Iu(r){const e=r.indexOf("$");return ae(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Nt(r.substr(0,e))}}function Tu(r,e,t){const n=r.syncPointTree_.get(e);ae(n,"Missing sync point for query tag that we're tracking");const s=Rl(r.pendingWriteTree_,e);return ku(n,t,s,null)}function qE(r){return r.fold((e,t,n)=>{if(t&&As(t))return[Pl(t)];{let s=[];return t&&(s=ag(t)),gr(n,(i,o)=>{s=s.concat(o)}),s}})}function Io(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(RE())(r._repo,r._path):r}function zE(r,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const s=Nl(n),i=r.queryToTagMap.get(s);r.queryToTagMap.delete(s),r.tagToQueryMap.delete(i)}}}function UE(){return PE++}function FE(r,e,t){const n=e._path,s=Bo(r,e),i=pg(r,t),o=r.listenProvider_.startListening(Io(e),s,i.hashFn,i.onComplete),a=r.syncPointTree_.subtree(n);if(s)ae(!As(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,p,m)=>{if(!tt(u)&&p&&As(p))return[Pl(p).query];{let v=[];return p&&(v=v.concat(ag(p).map(b=>b.query))),gr(m,(b,g)=>{v=v.concat(g)}),v}});for(let u=0;u<l.length;++u){const p=l[u];r.listenProvider_.stopListening(Io(p),Bo(r,p))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Su(t)}node(){return this.node_}}class Au{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Qt(this.path_,e);return new Au(this.syncTree_,t)}node(){return Eu(this.syncTree_,this.path_)}}const jE=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},ep=function(r,e,t){if(!r||typeof r!="object")return r;if(ae(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return BE(r[".sv"],e,t);if(typeof r[".sv"]=="object")return VE(r[".sv"],e);ae(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},BE=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:ae(!1,"Unexpected server value: "+r)}},VE=function(r,e,t){r.hasOwnProperty("increment")||ae(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const n=r.increment;typeof n!="number"&&ae(!1,"Unexpected increment value: "+n);const s=e.node();if(ae(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return n;const o=s.getValue();return typeof o!="number"?n:o+n},vg=function(r,e,t,n){return Ru(e,new Au(t,r),n)},mg=function(r,e,t){return Ru(r,new Su(e),t)};function Ru(r,e,t){const n=r.getPriority().val(),s=ep(n,e.getImmediateChild(".priority"),t);let i;if(r.isLeafNode()){const o=r,a=ep(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new dr(a,ar(s)):r}else{const o=r;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new dr(s))),o.forEachChild(Kt,(a,l)=>{const u=Ru(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Nu(r,e){let t=e instanceof Nt?e:new Nt(e),n=r,s=et(t);for(;s!==null;){const i=Ti(n.node.children,s)||{children:{},childCount:0};n=new Pu(s,n,i),t=jt(t),s=et(t)}return n}function Hi(r){return r.node.value}function gg(r,e){r.node.value=e,dd(r)}function _g(r){return r.node.childCount>0}function HE(r){return Hi(r)===void 0&&!_g(r)}function $l(r,e){gr(r.node.children,(t,n)=>{e(new Pu(t,r,n))})}function bg(r,e,t,n){t&&e(r),$l(r,s=>{bg(s,e,!0)})}function WE(r,e,t){let n=r.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function aa(r){return new Nt(r.parent===null?r.name:aa(r.parent)+"/"+r.name)}function dd(r){r.parent!==null&&GE(r.parent,r.name,r)}function GE(r,e,t){const n=HE(t),s=$n(r.node.children,e);n&&s?(delete r.node.children[e],r.node.childCount--,dd(r)):!n&&!s&&(r.node.children[e]=t.node,r.node.childCount++,dd(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=/[\[\].#$\/\u0000-\u001F\u007F]/,YE=/[\[\].#$\u0000-\u001F\u007F]/,Ec=10*1024*1024,$u=function(r){return typeof r=="string"&&r.length!==0&&!KE.test(r)},wg=function(r){return typeof r=="string"&&r.length!==0&&!YE.test(r)},QE=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),wg(r)},ud=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!iu(r)||r&&typeof r=="object"&&$n(r,".sv")},Wi=function(r,e,t,n){n&&e===void 0||Ll(xl(r,"value"),e,t)},Ll=function(r,e,t){const n=t instanceof Nt?new u3(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+Ls(n));if(typeof e=="function")throw new Error(r+"contains a function "+Ls(n)+" with contents = "+e.toString());if(iu(e))throw new Error(r+"contains "+e.toString()+" "+Ls(n));if(typeof e=="string"&&e.length>Ec/3&&kl(e)>Ec)throw new Error(r+"contains a string greater than "+Ec+" utf8 bytes "+Ls(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(gr(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!$u(o)))throw new Error(r+" contains an invalid key ("+o+") "+Ls(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);h3(n,o),Ll(r,a,n),f3(n)}),s&&i)throw new Error(r+' contains ".value" child '+Ls(n)+" in addition to actual children.")}},XE=function(r,e){let t,n;for(t=0;t<e.length;t++){n=e[t];const i=qo(n);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!$u(i[o]))throw new Error(r+"contains an invalid key ("+i[o]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(d3);let s=null;for(t=0;t<e.length;t++){if(n=e[t],s!==null&&en(s,n))throw new Error(r+"contains a path "+s.toString()+" that is ancestor of another path "+n.toString());s=n}},JE=function(r,e,t,n){const s=xl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];gr(e,(o,a)=>{const l=new Nt(o);if(Ll(s,a,Qt(t,l)),du(l)===".priority"&&!ud(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),XE(s,i)},Lu=function(r,e,t,n){if(!wg(t))throw new Error(xl(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZE=function(r,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Lu(r,e,t)},Du=function(r,e){if(et(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},e5=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$u(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!QE(t))throw new Error(xl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dl(r,e){let t=null;for(let n=0;n<e.length;n++){const s=e[n],i=s.getPath();t!==null&&!uu(i,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&r.eventLists_.push(t)}function yg(r,e,t){Dl(r,t),xg(r,n=>uu(n,e))}function nn(r,e,t){Dl(r,t),xg(r,n=>en(n,e)||en(e,n))}function xg(r,e){r.recursionDepth_++;let t=!0;for(let n=0;n<r.eventLists_.length;n++){const s=r.eventLists_[n];if(s){const i=s.path;e(i)?(r5(r.eventLists_[n]),r.eventLists_[n]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function r5(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const n=t.getEventRunner();xo&&vr("event: "+t.toString()),Bi(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5="repo_interrupt",s5=25;class i5{constructor(e,t,n,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new t5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Za(),this.transactionQueueTree_=new Pu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function o5(r,e,t){if(r.stats_=lu(r.repoInfo_),r.forceRestClient_||Dk())r.server_=new Ja(r.repoInfo_,(n,s,i,o)=>{tp(r,n,s,i,o)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>rp(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lr(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}r.persistentConnection_=new Gn(r.repoInfo_,e,(n,s,i,o)=>{tp(r,n,s,i,o)},n=>{rp(r,n)},n=>{a5(r,n)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(n=>{r.server_.refreshAuthToken(n)}),r.appCheckProvider_.addTokenChangeListener(n=>{r.server_.refreshAppCheckToken(n.token)}),r.statsReporter_=Uk(r.repoInfo_,()=>new j3(r.stats_,r.server_)),r.infoData_=new M3,r.infoSyncTree_=new Zf({startListening:(n,s,i,o)=>{let a=[];const l=r.infoData_.getNode(n._path);return l.isEmpty()||(a=oa(r.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ou(r,"connected",!1),r.serverSyncTree_=new Zf({startListening:(n,s,i,o)=>(r.server_.listen(n,i,s,(a,l)=>{const u=o(a,l);nn(r.eventQueue_,n._path,u)}),[]),stopListening:(n,s)=>{r.server_.unlisten(n,s)}})}function kg(r){const t=r.infoData_.getNode(new Nt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ol(r){return jE({timestamp:kg(r)})}function tp(r,e,t,n,s){r.dataUpdateCount++;const i=new Nt(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(n){const l=Fa(t,u=>ar(u));o=OE(r.serverSyncTree_,i,l,s)}else{const l=ar(t);o=ug(r.serverSyncTree_,i,l,s)}else if(n){const l=Fa(t,u=>ar(u));o=$E(r.serverSyncTree_,i,l)}else{const l=ar(t);o=oa(r.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Ni(r,i)),nn(r.eventQueue_,a,o)}function rp(r,e){Ou(r,"connected",e),e===!1&&u5(r)}function a5(r,e){gr(e,(t,n)=>{Ou(r,t,n)})}function Ou(r,e,t){const n=new Nt("/.info/"+e),s=ar(t);r.infoData_.updateSnapshot(n,s);const i=oa(r.infoSyncTree_,n,s);nn(r.eventQueue_,n,i)}function Mu(r){return r.nextWriteId_++}function l5(r,e,t){const n=ME(r.serverSyncTree_,e);return n!=null?Promise.resolve(n):r.server_.get(e).then(s=>{const i=ar(s).withIndex(e._queryParams.getIndex());cd(r.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=oa(r.serverSyncTree_,e._path,i);else{const a=Bo(r.serverSyncTree_,e);o=ug(r.serverSyncTree_,e._path,i,a)}return nn(r.eventQueue_,e._path,o),al(r.serverSyncTree_,e,t,null,!0),i},s=>(la(r,"get for query "+lr(e)+" failed: "+s),Promise.reject(new Error(s))))}function c5(r,e,t,n,s){la(r,"set",{path:e.toString(),value:t,priority:n});const i=Ol(r),o=ar(t,n),a=Eu(r.serverSyncTree_,e),l=mg(o,a,i),u=Mu(r),p=dg(r.serverSyncTree_,e,l,u,!0);Dl(r.eventQueue_,p),r.server_.put(e.toString(),o.val(!0),(v,b)=>{const g=v==="ok";g||Nr("set at "+e+" failed: "+v);const w=ms(r.serverSyncTree_,u,!g);nn(r.eventQueue_,e,w),fd(r,s,v,b)});const m=zu(r,e);Ni(r,m),nn(r.eventQueue_,m,[])}function d5(r,e,t,n){la(r,"update",{path:e.toString(),value:t});let s=!0;const i=Ol(r),o={};if(gr(t,(a,l)=>{s=!1,o[a]=vg(Qt(e,a),ar(l),r.serverSyncTree_,i)}),s)vr("update() called with empty data.  Don't do anything."),fd(r,n,"ok",void 0);else{const a=Mu(r),l=NE(r.serverSyncTree_,e,o,a);Dl(r.eventQueue_,l),r.server_.merge(e.toString(),t,(u,p)=>{const m=u==="ok";m||Nr("update at "+e+" failed: "+u);const v=ms(r.serverSyncTree_,a,!m),b=v.length>0?Ni(r,e):e;nn(r.eventQueue_,b,v),fd(r,n,u,p)}),gr(t,u=>{const p=zu(r,Qt(e,u));Ni(r,p)}),nn(r.eventQueue_,e,[])}}function u5(r){la(r,"onDisconnectEvents");const e=Ol(r),t=Za();nd(r.onDisconnect_,yt(),(s,i)=>{const o=vg(s,i,r.serverSyncTree_,e);Ym(t,s,o)});let n=[];nd(t,yt(),(s,i)=>{n=n.concat(oa(r.serverSyncTree_,s,i));const o=zu(r,s);Ni(r,o)}),r.onDisconnect_=Za(),nn(r.eventQueue_,yt(),n)}function h5(r,e,t){let n;et(e._path)===".info"?n=cd(r.infoSyncTree_,e,t):n=cd(r.serverSyncTree_,e,t),yg(r.eventQueue_,e._path,n)}function hd(r,e,t){let n;et(e._path)===".info"?n=al(r.infoSyncTree_,e,t):n=al(r.serverSyncTree_,e,t),yg(r.eventQueue_,e._path,n)}function f5(r){r.persistentConnection_&&r.persistentConnection_.interrupt(n5)}function la(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),vr(t,...e)}function fd(r,e,t,n){e&&Bi(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;n&&(i+=": "+n);const o=new Error(i);o.code=s,e(o)}})}function Eg(r,e,t){return Eu(r.serverSyncTree_,e,t)||Me.EMPTY_NODE}function qu(r,e=r.transactionQueueTree_){if(e||Ml(r,e),Hi(e)){const t=Ig(r,e);ae(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&p5(r,aa(e),t)}else _g(e)&&$l(e,t=>{qu(r,t)})}function p5(r,e,t){const n=t.map(u=>u.currentWriteId),s=Eg(r,e,n);let i=s;const o=s.hash();for(let u=0;u<t.length;u++){const p=t[u];ae(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const m=Pr(e,p.path);i=i.updateChild(m,p.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;r.server_.put(l.toString(),a,u=>{la(r,"transaction put response",{path:l.toString(),status:u});let p=[];if(u==="ok"){const m=[];for(let v=0;v<t.length;v++)t[v].status=2,p=p.concat(ms(r.serverSyncTree_,t[v].currentWriteId)),t[v].onComplete&&m.push(()=>t[v].onComplete(null,!0,t[v].currentOutputSnapshotResolved)),t[v].unwatcher();Ml(r,Nu(r.transactionQueueTree_,e)),qu(r,r.transactionQueueTree_),nn(r.eventQueue_,e,p);for(let v=0;v<m.length;v++)Bi(m[v])}else{if(u==="datastale")for(let m=0;m<t.length;m++)t[m].status===3?t[m].status=4:t[m].status=0;else{Nr("transaction at "+l.toString()+" failed: "+u);for(let m=0;m<t.length;m++)t[m].status=4,t[m].abortReason=u}Ni(r,e)}},o)}function Ni(r,e){const t=Cg(r,e),n=aa(t),s=Ig(r,t);return v5(r,s,n),n}function v5(r,e,t){if(e.length===0)return;const n=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Pr(t,l.path);let p=!1,m;if(ae(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)p=!0,m=l.abortReason,s=s.concat(ms(r.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=s5)p=!0,m="maxretry",s=s.concat(ms(r.serverSyncTree_,l.currentWriteId,!0));else{const v=Eg(r,l.path,o);l.currentInputSnapshot=v;const b=e[a].update(v.val());if(b!==void 0){Ll("transaction failed: Data returned ",b,l.path);let g=ar(b);typeof b=="object"&&b!=null&&$n(b,".priority")||(g=g.updatePriority(v.getPriority()));const k=l.currentWriteId,I=Ol(r),P=mg(g,v,I);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=P,l.currentWriteId=Mu(r),o.splice(o.indexOf(k),1),s=s.concat(dg(r.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),s=s.concat(ms(r.serverSyncTree_,k,!0))}else p=!0,m="nodata",s=s.concat(ms(r.serverSyncTree_,l.currentWriteId,!0))}nn(r.eventQueue_,t,s),s=[],p&&(e[a].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(m==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(m),!1,null))))}Ml(r,r.transactionQueueTree_);for(let a=0;a<n.length;a++)Bi(n[a]);qu(r,r.transactionQueueTree_)}function Cg(r,e){let t,n=r.transactionQueueTree_;for(t=et(e);t!==null&&Hi(n)===void 0;)n=Nu(n,t),e=jt(e),t=et(e);return n}function Ig(r,e){const t=[];return Tg(r,e,t),t.sort((n,s)=>n.order-s.order),t}function Tg(r,e,t){const n=Hi(e);if(n)for(let s=0;s<n.length;s++)t.push(n[s]);$l(e,s=>{Tg(r,s,t)})}function Ml(r,e){const t=Hi(e);if(t){let n=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[n]=t[s],n++);t.length=n,gg(e,t.length>0?t:void 0)}$l(e,n=>{Ml(r,n)})}function zu(r,e){const t=aa(Cg(r,e)),n=Nu(r.transactionQueueTree_,e);return WE(n,s=>{Cc(r,s)}),Cc(r,n),bg(n,s=>{Cc(r,s)}),t}function Cc(r,e){const t=Hi(e);if(t){const n=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ae(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(ae(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(ms(r.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?gg(e,void 0):t.length=i+1,nn(r.eventQueue_,aa(e),s);for(let o=0;o<n.length;o++)Bi(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m5(r){let e="";const t=r.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let s=t[n];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function g5(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):Nr(`Invalid query segment '${t}' in query '${r}'`)}return e}const np=function(r,e){const t=_5(r),n=t.namespace;t.domain==="firebase.com"&&ts(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&ts("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ik();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Pm(t.host,t.secure,n,s,e,"",n!==t.subdomain),path:new Nt(t.pathString)}},_5=function(r){let e="",t="",n="",s="",i="",o=!0,a="https",l=443;if(typeof r=="string"){let u=r.indexOf("//");u>=0&&(a=r.substring(0,u-1),r=r.substring(u+2));let p=r.indexOf("/");p===-1&&(p=r.length);let m=r.indexOf("?");m===-1&&(m=r.length),e=r.substring(0,Math.min(p,m)),p<m&&(s=m5(r.substring(p,m)));const v=g5(r.substring(Math.min(r.length,m)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const b=e.slice(0,u);if(b.toLowerCase()==="localhost")t="localhost";else if(b.split(".").length<=2)t=b;else{const g=e.indexOf(".");n=e.substring(0,g).toLowerCase(),t=e.substring(g+1),i=n}"ns"in v&&(i=v.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",b5=(function(){let r=0;const e=[];return function(t){const n=t===r;r=t;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=sp.charAt(t%64),t=Math.floor(t/64);ae(t===0,"Cannot push at time == 0");let o=i.join("");if(n){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=sp.charAt(e[s]);return ae(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t,n,s){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+lr(this.snapshot.exportVal())}}class Ag{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ae(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,n,s){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=s}get key(){return tt(this._path)?null:du(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=Bf(this._queryParams),t=ou(e);return t==="{}"?"default":t}get _queryObject(){return Bf(this._queryParams)}isEqual(e){if(e=Vt(e),!(e instanceof Dn))return!1;const t=this._repo===e._repo,n=uu(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&n&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+c3(this._path)}}function w5(r,e){if(r._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ca(r){let e=null,t=null;if(r.hasStart()&&(e=r.getIndexStartValue()),r.hasEnd()&&(t=r.getIndexEndValue()),r.getIndex()===Kn){const n="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(r.hasStart()){if(r.getIndexStartName()!==Is)throw new Error(n);if(typeof e!="string")throw new Error(s)}if(r.hasEnd()){if(r.getIndexEndName()!==rs)throw new Error(n);if(typeof t!="string")throw new Error(s)}}else if(r.getIndex()===Kt){if(e!=null&&!ud(e)||t!=null&&!ud(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(ae(r.getIndex()instanceof pu||r.getIndex()===Gm,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ql(r){if(r.hasStart()&&r.hasEnd()&&r.hasLimit()&&!r.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class On extends Dn{constructor(e,t){super(e,t,new mu,!1)}get parent(){const e=Um(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $i{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Nt(e),n=Li(this.ref,e);return new $i(this._node.getChild(t),n,Kt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,s)=>e(new $i(s,Li(this.ref,n),Kt)))}hasChild(e){const t=new Nt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function St(r,e){return r=Vt(r),r._checkNotDeleted("ref"),e!==void 0?Li(r._root,e):r._root}function Li(r,e){return r=Vt(r),et(r._path)===null?ZE("child","path",e):Lu("child","path",e),new On(r._repo,Qt(r._path,e))}function Vo(r,e){r=Vt(r),Du("push",r._path),Wi("push",e,r._path,!0);const t=kg(r._repo),n=b5(t),s=Li(r,n),i=Li(r,n);let o;return e!=null?o=Ng(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Pg(r){return Du("remove",r._path),Ng(r,null)}function Ng(r,e){r=Vt(r),Du("set",r._path),Wi("set",e,r._path,!1);const t=new Xo;return c5(r._repo,r._path,e,null,t.wrapCallback(()=>{})),t.promise}function ls(r,e){JE("update",e,r._path);const t=new Xo;return d5(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}function gn(r){r=Vt(r);const e=new Rg(()=>{}),t=new zl(e);return l5(r._repo,r,t).then(n=>new $i(n,new On(r._repo,r._path),r._queryParams.getIndex()))}class zl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new Sg("value",this,new $i(e.snapshotNode,new On(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ag(this,e,t):null}matches(e){return e instanceof zl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Uu{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ag(this,e,t):null}createEvent(e,t){ae(e.childName!=null,"Child events should have a childName.");const n=Li(new On(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Sg(e.type,this,new $i(e.snapshotNode,n,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Uu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Fu(r,e,t,n,s){let i;if(typeof n=="object"&&(i=void 0,s=n),typeof n=="function"&&(i=n),s&&s.onlyOnce){const l=t,u=(p,m)=>{hd(r._repo,r,a),l(p,m)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new Rg(t,i||void 0),a=e==="value"?new zl(o):new Uu(e,o);return h5(r._repo,r,a),()=>hd(r._repo,r,a)}function da(r,e,t,n){return Fu(r,"value",e,t,n)}function y5(r,e,t,n){return Fu(r,"child_added",e,t,n)}function x5(r,e,t,n){return Fu(r,"child_removed",e,t,n)}function ju(r,e,t){hd(r._repo,r,null)}class si{}class k5 extends si{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){Wi("endAt",this._value,e._path,!0);const t=rd(e._queryParams,this._value,this._key);if(ql(t),ca(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Dn(e._repo,e._path,t,e._orderByCalled)}}function qs(r,e){return new k5(r,e)}class E5 extends si{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){Wi("endBefore",this._value,e._path,!1);const t=D3(e._queryParams,this._value,this._key);if(ql(t),ca(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Dn(e._repo,e._path,t,e._orderByCalled)}}function ip(r,e){return new E5(r,e)}class C5 extends si{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){Wi("startAt",this._value,e._path,!0);const t=td(e._queryParams,this._value,this._key);if(ql(t),ca(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Dn(e._repo,e._path,t,e._orderByCalled)}}function sn(r=null,e){return new C5(r,e)}class I5 extends si{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){Wi("startAfter",this._value,e._path,!1);const t=L3(e._queryParams,this._value,this._key);if(ql(t),ca(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Dn(e._repo,e._path,t,e._orderByCalled)}}function op(r,e){return new I5(r,e)}class T5 extends si{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Dn(e._repo,e._path,N3(e._queryParams,this._limit),e._orderByCalled)}}function wa(r){if(typeof r!="number"||Math.floor(r)!==r||r<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new T5(r)}class S5 extends si{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Dn(e._repo,e._path,$3(e._queryParams,this._limit),e._orderByCalled)}}function ya(r){if(typeof r!="number"||Math.floor(r)!==r||r<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new S5(r)}class A5 extends si{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){w5(e,"orderByChild");const t=new Nt(this._path);if(tt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new pu(t),s=O3(e._queryParams,n);return ca(s),new Dn(e._repo,e._path,s,!0)}}function Tr(r){if(r==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(r==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(r==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Lu("orderByChild","path",r),new A5(r)}function Sr(r,...e){let t=Vt(r);for(const n of e)t=n._apply(t);return t}EE(On);AE(On);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R5="FIREBASE_DATABASE_EMULATOR_HOST",pd={};let P5=!1;function N5(r,e,t,n){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Ps(i);r.repoInfo_=new Pm(e,o,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(r.authTokenProvider_=n)}function $5(r,e,t,n,s){let i=n||r.options.databaseURL;i===void 0&&(r.options.projectId||ts("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vr("Using default host for project ",r.options.projectId),i=`${r.options.projectId}-default-rtdb.firebaseio.com`);let o=np(i,s),a=o.repoInfo,l;typeof process<"u"&&Cf&&(l=Cf[R5]),l?(i=`http://${l}?ns=${a.namespace}`,o=np(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new Mk(r.name,r.options,e);e5("Invalid Firebase Database URL",o),tt(o.path)||ts("Database URL must point to the root of a Firebase Database (not including a child path).");const p=D5(a,r,u,new Ok(r,t));return new O5(p,r)}function L5(r,e){const t=pd[e];(!t||t[r.key]!==r)&&ts(`Database ${e}(${r.repoInfo_}) has already been deleted.`),f5(r),delete t[r.key]}function D5(r,e,t,n){let s=pd[e.name];s||(s={},pd[e.name]=s);let i=s[r.toURLString()];return i&&ts("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new i5(r,P5,t,n),s[r.toURLString()]=i,i}class O5{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(o5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,yt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(L5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ts("Cannot call "+e+" on a deleted database.")}}function M5(r=Kd(),e){const t=El(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=xv("database");n&&q5(t,...n)}return t}function q5(r,e,t,n={}){r=Vt(r),r._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=r._repoInternal;if(r._instanceStarted){if(s===r._repoInternal.repoInfo_.host&&Vs(n,i.repoInfo_.emulatorOptions))return;ts("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)n.mockUserToken&&ts('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Aa(Aa.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:Cv(n.mockUserToken,r.app.options.projectId);o=new Aa(a)}Ps(e)&&(Bd(e),Vd("Database",!0)),N5(i,s,n,o)}/**
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
 */function z5(r){wk(ti),Hs(new Cs("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return $5(n,s,i,t)},"PUBLIC").setMultipleInstances(!0)),In(If,Tf,r),In(If,Tf,"esm2020")}Gn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Gn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};z5();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="firebasestorage.googleapis.com",Lg="storageBucket",U5=120*1e3,F5=600*1e3,j5=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends as{constructor(e,t,n=0){super(Ic(e),`Firebase Storage: ${t} (${Ic(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Yt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ic(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Bt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Bt||(Bt={}));function Ic(r){return"storage/"+r}function Bu(){const r="An unknown error occurred, please check the error payload for server response.";return new Yt(Bt.UNKNOWN,r)}function B5(r){return new Yt(Bt.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function V5(r){return new Yt(Bt.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function H5(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Yt(Bt.UNAUTHENTICATED,r)}function W5(){return new Yt(Bt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function G5(r){return new Yt(Bt.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function Dg(){return new Yt(Bt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Og(){return new Yt(Bt.CANCELED,"User canceled the upload/download.")}function K5(r){return new Yt(Bt.INVALID_URL,"Invalid URL '"+r+"'.")}function Y5(r){return new Yt(Bt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Q5(){return new Yt(Bt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Lg+"' property when initializing the app?")}function Mg(){return new Yt(Bt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function X5(){return new Yt(Bt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function J5(){return new Yt(Bt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Z5(r){return new Yt(Bt.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vd(r){return new Yt(Bt.INVALID_ARGUMENT,r)}function qg(){return new Yt(Bt.APP_DELETED,"The Firebase app was deleted.")}function eC(r){return new Yt(Bt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function To(r,e){return new Yt(Bt.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function io(r){throw new Yt(Bt.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Gr.makeFromUrl(e,t)}catch{return new Gr(e,"")}if(n.path==="")return n;throw Y5(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const p="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",b=new RegExp(`^https?://${m}/${p}/b/${s}/o${v}`,"i"),g={bucket:1,path:3},w=t===$g?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",I=new RegExp(`^https?://${w}/${s}/${k}`,"i"),$=[{regex:a,indices:l,postModify:i},{regex:b,indices:g,postModify:u},{regex:I,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<$.length;N++){const q=$[N],T=q.regex.exec(e);if(T){const A=T[q.indices.bucket];let C=T[q.indices.path];C||(C=""),n=new Gr(A,C),q.postModify(n);break}}if(n==null)throw K5(e);return n}}class tC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(r,e,t){let n=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function p(...k){u||(u=!0,e.apply(null,k))}function m(k){s=setTimeout(()=>{s=null,r(b,l())},k)}function v(){i&&clearTimeout(i)}function b(k,...I){if(u){v();return}if(k){v(),p.call(null,k,...I);return}if(l()||o){v(),p.call(null,k,...I);return}n<64&&(n*=2);let $;a===1?(a=2,$=0):$=(n+Math.random())*1e3,m($)}let g=!1;function w(k){g||(g=!0,v(),!u&&(s!==null?(k||(a=2),clearTimeout(s),m(0)):k||(a=1)))}return m(0),i=setTimeout(()=>{o=!0,w(!0)},t),w}function nC(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(r){return r!==void 0}function iC(r){return typeof r=="function"}function oC(r){return typeof r=="object"&&!Array.isArray(r)}function Ul(r){return typeof r=="string"||r instanceof String}function ap(r){return Vu()&&r instanceof Blob}function Vu(){return typeof Blob<"u"}function lp(r,e,t,n){if(n<e)throw vd(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw vd(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(r,e,t){let n=e;return t==null&&(n=`https://${e}`),`${t}://${n}/v0${r}`}function zg(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var Fs;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Fs||(Fs={}));/**
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
 */function Ug(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t,n,s,i,o,a,l,u,p,m,v=!0,b=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=p,this.connectionFactory_=m,this.retry=v,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new xa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Fs.NO_ERROR,l=i.getStatus();if(!a||Ug(l,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Fs.ABORT;n(!1,new xa(!1,null,p));return}const u=this.successCodes_.indexOf(l)!==-1;n(!0,new xa(u,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());sC(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Bu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?qg():Og();o(l)}else{const l=Dg();o(l)}};this.canceled_?t(!1,new xa(!1,null,!0)):this.backoffId_=rC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xa{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function lC(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function cC(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dC(r,e){e&&(r["X-Firebase-GMPID"]=e)}function uC(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function hC(r,e,t,n,s,i,o=!0,a=!1){const l=zg(r.urlParams),u=r.url+l,p=Object.assign({},r.headers);return dC(p,e),lC(p,t),cC(p,i),uC(p,n),new aC(u,r.method,p,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pC(...r){const e=fC();if(e!==void 0){const t=new e;for(let n=0;n<r.length;n++)t.append(r[n]);return t.getBlob()}else{if(Vu())return new Blob(r);throw new Yt(Bt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vC(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function mC(r){if(typeof atob>"u")throw Z5("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Tc{constructor(e,t){this.data=e,this.contentType=t||null}}function gC(r,e){switch(r){case xn.RAW:return new Tc(Fg(e));case xn.BASE64:case xn.BASE64URL:return new Tc(jg(r,e));case xn.DATA_URL:return new Tc(bC(e),wC(e))}throw Bu()}function Fg(r){const e=[];for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=n,o=r.charCodeAt(++t);n=65536|(i&1023)<<10|o&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function _C(r){let e;try{e=decodeURIComponent(r)}catch{throw To(xn.DATA_URL,"Malformed data URL.")}return Fg(e)}function jg(r,e){switch(r){case xn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw To(r,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case xn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw To(r,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=mC(e)}catch(s){throw s.message.includes("polyfill")?s:To(r,"Invalid character found")}const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}class Bg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw To(xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;n!=null&&(this.base64=yC(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function bC(r){const e=new Bg(r);return e.base64?jg(xn.BASE64,e.rest):_C(e.rest)}function wC(r){return new Bg(r).contentType}function yC(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){let n=0,s="";ap(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(ap(this.data_)){const n=this.data_,s=vC(n,e,t);return s===null?null:new zn(s)}else{const n=new Uint8Array(this.data_.buffer,e,t-e);return new zn(n,!0)}}static getBlob(...e){if(Vu()){const t=e.map(n=>n instanceof zn?n.data_:n);return new zn(pC.apply(null,t))}else{const t=e.map(o=>Ul(o)?gC(xn.RAW,o).data:o.data_);let n=0;t.forEach(o=>{n+=o.byteLength});const s=new Uint8Array(n);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new zn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(r){let e;try{e=JSON.parse(r)}catch{return null}return oC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function kC(r,e){const t=e.split("/").filter(n=>n.length>0).join("/");return r.length===0?t:r+"/"+t}function Hg(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(r,e){return e}class Ir{constructor(e,t,n,s){this.server=e,this.local=t||e,this.writable=!!n,this.xform=s||EC}}let ka=null;function CC(r){return!Ul(r)||r.length<2?r:Hg(r)}function Hu(){if(ka)return ka;const r=[];r.push(new Ir("bucket")),r.push(new Ir("generation")),r.push(new Ir("metageneration")),r.push(new Ir("name","fullPath",!0));function e(i,o){return CC(o)}const t=new Ir("name");t.xform=e,r.push(t);function n(i,o){return o!==void 0?Number(o):o}const s=new Ir("size");return s.xform=n,r.push(s),r.push(new Ir("timeCreated")),r.push(new Ir("updated")),r.push(new Ir("md5Hash",null,!0)),r.push(new Ir("cacheControl",null,!0)),r.push(new Ir("contentDisposition",null,!0)),r.push(new Ir("contentEncoding",null,!0)),r.push(new Ir("contentLanguage",null,!0)),r.push(new Ir("contentType",null,!0)),r.push(new Ir("metadata","customMetadata",!0)),ka=r,ka}function IC(r,e){function t(){const n=r.bucket,s=r.fullPath,i=new Gr(n,s);return e._makeStorageReference(i)}Object.defineProperty(r,"ref",{get:t})}function TC(r,e,t){const n={};n.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];n[o.local]=o.xform(n,e[o.server])}return IC(n,r),n}function Wg(r,e,t){const n=Vg(e);return n===null?null:TC(r,n,t)}function SC(r,e,t,n){const s=Vg(e);if(s===null||!Ul(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const p=r.bucket,m=r.fullPath,v="/b/"+o(p)+"/o/"+o(m),b=Gi(v,t,n),g=zg({alt:"media",token:u});return b+g})[0]}function Gg(r,e){const t={},n=e.length;for(let s=0;s<n;s++){const i=e[s];i.writable&&(t[i.server]=r[i.local])}return JSON.stringify(t)}class ii{constructor(e,t,n,s){this.url=e,this.method=t,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(r){if(!r)throw Bu()}function Wu(r,e){function t(n,s){const i=Wg(r,s,e);return Yn(i!==null),i}return t}function AC(r,e){function t(n,s){const i=Wg(r,s,e);return Yn(i!==null),SC(i,s,r.host,r._protocol)}return t}function ua(r){function e(t,n){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=W5():s=H5():t.getStatus()===402?s=V5(r.bucket):t.getStatus()===403?s=G5(r.path):s=n,s.status=t.getStatus(),s.serverResponse=n.serverResponse,s}return e}function Gu(r){const e=ua(r);function t(n,s){let i=e(n,s);return n.getStatus()===404&&(i=B5(r.path)),i.serverResponse=s.serverResponse,i}return t}function RC(r,e,t){const n=e.fullServerUrl(),s=Gi(n,r.host,r._protocol),i="GET",o=r.maxOperationRetryTime,a=new ii(s,i,Wu(r,t),o);return a.errorHandler=Gu(e),a}function PC(r,e,t){const n=e.fullServerUrl(),s=Gi(n,r.host,r._protocol),i="GET",o=r.maxOperationRetryTime,a=new ii(s,i,AC(r,t),o);return a.errorHandler=Gu(e),a}function NC(r,e){const t=e.fullServerUrl(),n=Gi(t,r.host,r._protocol),s="DELETE",i=r.maxOperationRetryTime;function o(l,u){}const a=new ii(n,s,o,i);return a.successCodes=[200,204],a.errorHandler=Gu(e),a}function $C(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function Kg(r,e,t){const n=Object.assign({},t);return n.fullPath=r.path,n.size=e.size(),n.contentType||(n.contentType=$C(null,e)),n}function Yg(r,e,t,n,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let $="";for(let N=0;N<2;N++)$=$+Math.random().toString().slice(2);return $}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Kg(e,n,s),p=Gg(u,t),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,v=`\r
--`+l+"--",b=zn.getBlob(m,n,v);if(b===null)throw Mg();const g={name:u.fullPath},w=Gi(i,r.host,r._protocol),k="POST",I=r.maxUploadRetryTime,P=new ii(w,k,Wu(r,t),I);return P.urlParams=g,P.headers=o,P.body=b.uploadData(),P.errorHandler=ua(e),P}class ll{constructor(e,t,n,s){this.current=e,this.total=t,this.finalized=!!n,this.metadata=s||null}}function Ku(r,e){let t=null;try{t=r.getResponseHeader("X-Goog-Upload-Status")}catch{Yn(!1)}return Yn(!!t&&(e||["active"]).indexOf(t)!==-1),t}function LC(r,e,t,n,s){const i=e.bucketOnlyServerUrl(),o=Kg(e,n,s),a={name:o.fullPath},l=Gi(i,r.host,r._protocol),u="POST",p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=Gg(o,t),v=r.maxUploadRetryTime;function b(w){Ku(w);let k;try{k=w.getResponseHeader("X-Goog-Upload-URL")}catch{Yn(!1)}return Yn(Ul(k)),k}const g=new ii(l,u,b,v);return g.urlParams=a,g.headers=p,g.body=m,g.errorHandler=ua(e),g}function DC(r,e,t,n){const s={"X-Goog-Upload-Command":"query"};function i(u){const p=Ku(u,["active","final"]);let m=null;try{m=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Yn(!1)}m||Yn(!1);const v=Number(m);return Yn(!isNaN(v)),new ll(v,n.size(),p==="final")}const o="POST",a=r.maxUploadRetryTime,l=new ii(t,o,i,a);return l.headers=s,l.errorHandler=ua(e),l}const cp=256*1024;function OC(r,e,t,n,s,i,o,a){const l=new ll(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=n.size()),n.size()!==l.total)throw X5();const u=l.total-l.current;let p=u;s>0&&(p=Math.min(p,s));const m=l.current,v=m+p;let b="";p===0?b="finalize":u===p?b="upload, finalize":b="upload";const g={"X-Goog-Upload-Command":b,"X-Goog-Upload-Offset":`${l.current}`},w=n.slice(m,v);if(w===null)throw Mg();function k(N,q){const T=Ku(N,["active","final"]),A=l.current+p,C=n.size();let E;return T==="final"?E=Wu(e,i)(N,q):E=null,new ll(A,C,T==="final",E)}const I="POST",P=e.maxUploadRetryTime,$=new ii(t,I,k,P);return $.headers=g,$.body=w.uploadData(),$.progressCallback=a||null,$.errorHandler=ua(r),$}const qr={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Sc(r){switch(r){case"running":case"pausing":case"canceling":return qr.RUNNING;case"paused":return qr.PAUSED;case"success":return qr.SUCCESS;case"canceled":return qr.CANCELED;case"error":return qr.ERROR;default:return qr.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,t,n){if(iC(e)||t!=null||n!=null)this.next=e,this.error=t??void 0,this.complete=n??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(r){return(...e)=>{Promise.resolve().then(()=>r(...e))}}class qC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,s,i){if(this.sent_)throw io("cannot .send() more than once");if(Ps(e)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zC extends qC{initXhr(){this.xhr_.responseType="text"}}function ps(){return new zC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Hu(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Bt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Ug(s.status,[]))if(i)s=Dg();else{this.sleepTime=Math.max(this.sleepTime*2,j5),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Bt.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=LC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,ps,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const s=DC(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,ps,t,n);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=cp*this._chunkMultiplier,t=new ll(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=OC(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ps,s,i,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){cp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=RC(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(n,ps,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=Yg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,ps,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Og(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Sc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,s){const i=new MC(t||void 0,n||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Sc(this._state)){case qr.SUCCESS:ui(this._resolve.bind(null,this.snapshot))();break;case qr.CANCELED:case qr.ERROR:const t=this._reject;ui(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Sc(this._state)){case qr.RUNNING:case qr.PAUSED:e.next&&ui(e.next.bind(e,this.snapshot))();break;case qr.SUCCESS:e.complete&&ui(e.complete.bind(e))();break;case qr.CANCELED:case qr.ERROR:e.error&&ui(e.error.bind(e,this._error))();break;default:e.error&&ui(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t){this._service=e,t instanceof Gr?this._location=t:this._location=Gr.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Qs(e,t)}get root(){const e=new Gr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hg(this._location.path)}get storage(){return this._service}get parent(){const e=xC(this._location.path);if(e===null)return null;const t=new Gr(this._location.bucket,e);return new Qs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw eC(e)}}function FC(r,e,t){r._throwIfRoot("uploadBytes");const n=Yg(r.storage,r._location,Hu(),new zn(e,!0),t);return r.storage.makeRequestWithTokens(n,ps).then(s=>({metadata:s,ref:r}))}function jC(r,e,t){return r._throwIfRoot("uploadBytesResumable"),new UC(r,new zn(e),t)}function BC(r){r._throwIfRoot("getDownloadURL");const e=PC(r.storage,r._location,Hu());return r.storage.makeRequestWithTokens(e,ps).then(t=>{if(t===null)throw J5();return t})}function VC(r){r._throwIfRoot("deleteObject");const e=NC(r.storage,r._location);return r.storage.makeRequestWithTokens(e,ps)}function HC(r,e){const t=kC(r._location.path,e),n=new Gr(r._location.bucket,t);return new Qs(r.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(r){return/^[A-Za-z]+:\/\//.test(r)}function GC(r,e){return new Qs(r,e)}function Qg(r,e){if(r instanceof Yu){const t=r;if(t._bucket==null)throw Q5();const n=new Qs(t,t._bucket);return e!=null?Qg(n,e):n}else return e!==void 0?HC(r,e):r}function KC(r,e){if(e&&WC(e)){if(r instanceof Yu)return GC(r,e);throw vd("To use ref(service, url), the first argument must be a Storage instance.")}else return Qg(r,e)}function dp(r,e){const t=e?.[Lg];return t==null?null:Gr.makeFromBucketSpec(t,r)}function YC(r,e,t,n={}){r.host=`${e}:${t}`;const s=Ps(e);s&&(Bd(`https://${r.host}/b`),Vd("Storage",!0)),r._isUsingEmulator=!0,r._protocol=s?"https":"http";const{mockUserToken:i}=n;i&&(r._overrideAuthToken=typeof i=="string"?i:Cv(i,r.app.options.projectId))}class Yu{constructor(e,t,n,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=$g,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=U5,this._maxUploadRetryTime=F5,this._requests=new Set,s!=null?this._bucket=Gr.makeFromBucketSpec(s,this._host):this._bucket=dp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gr.makeFromBucketSpec(this._url,e):this._bucket=dp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ur(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qs(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new tC(qg());{const o=hC(e,this._appId,n,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const up="@firebase/storage",hp="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="storage";function QC(r,e,t){return r=Vt(r),FC(r,e,t)}function XC(r,e,t){return r=Vt(r),jC(r,e,t)}function Jg(r){return r=Vt(r),BC(r)}function JC(r){return r=Vt(r),VC(r)}function Qu(r,e){return r=Vt(r),KC(r,e)}function ZC(r=Kd(),e){r=Vt(r);const n=El(r,Xg).getImmediate({identifier:e}),s=xv("storage");return s&&eI(n,...s),n}function eI(r,e,t,n={}){YC(r,e,t,n)}function tI(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new Yu(t,n,s,e,ti)}function rI(){Hs(new Cs(Xg,tI,"PUBLIC").setMultipleInstances(!0)),In(up,hp,""),In(up,hp,"esm2020")}rI();const Zg={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",Zg);const Xu=Rv(Zg),Sn=_k(Xu),Et=M5(Xu),Ju=ZC(Xu);var nI=R('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),sI=R('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),iI=R('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),oI=R('<h3 class="post-title svelte-1t1odzy"> </h3>'),aI=R('<p class="post-text svelte-1t1odzy"> </p>'),lI=R('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),cI=R('<div class="posts svelte-1t1odzy"></div>'),dI=R('<div class="post-list-container svelte-1t1odzy"><!></div>');const uI={hash:"svelte-1t1odzy",code:`
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
  }`};function hI(r,e){ot(e,!0),nt(r,uI);let t=Fe(e,"path",7,"posts"),n=Fe(e,"limit",7,"10"),s=ne(hr([])),i=ne(!0),o=ne(""),a=null;Jt(()=>{l()}),mv(()=>{u()});function l(){try{a=St(Et,t()),da(a,P=>{const $=P.val();$?y(s,Object.entries($).map(([N,q])=>({id:N,...q})).sort((N,q)=>(q.timestamp||0)-(N.timestamp||0)).slice(0,parseInt(n())),!0):y(s,[],!0),y(i,!1),y(o,"")},P=>{console.error("데이터 읽기 오류:",P),y(o,"데이터를 불러오는 중 오류가 발생했습니다."),y(i,!1)})}catch(P){console.error("구독 설정 오류:",P),y(o,"데이터베이스 연결에 실패했습니다."),y(i,!1)}}function u(){a&&ju(a)}function p(P){const $=new CustomEvent("post-click",{detail:{post:P},bubbles:!0,composed:!0});dispatchEvent($)}function m(P,$){(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),p($))}function v(P){if(!P)return"";const $=typeof P=="string"?Number(P):P,N=new Date($),T=new Date().getTime()-N.getTime(),A=Math.floor(T/6e4),C=Math.floor(T/36e5),E=Math.floor(T/864e5);return A<1?"방금 전":A<60?`${A}분 전`:C<24?`${C}시간 전`:E<7?`${E}일 전`:N.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var b={get path(){return t()},set path(P="posts"){t(P),Oe()},get limit(){return n()},set limit(P="10"){n(P),Oe()}},g=dI(),w=d(g);{var k=P=>{var $=nI();x(P,$)},I=P=>{var $=_e(),N=de($);{var q=A=>{var C=sI(),E=d(C),S=d(E,!0);c(E),c(C),L(()=>_(S,f(o))),x(A,C)},T=A=>{var C=_e(),E=de(C);{var S=M=>{var H=iI();x(M,H)},O=M=>{var H=cI();nr(H,21,()=>f(s),X=>X.id,(X,V)=>{var le=lI();le.__click=()=>p(f(V)),le.__keydown=oe=>m(oe,f(V));var ue=d(le),te=d(ue),fe=d(te),Z=d(fe,!0);c(fe);var W=h(fe,2),z=d(W,!0);c(W),c(te),c(ue);var Y=h(ue,2),re=d(Y);{var J=oe=>{var xe=oI(),he=d(xe,!0);c(xe),L(()=>_(he,f(V).title)),x(oe,xe)};F(re,oe=>{f(V).title&&oe(J)})}var D=h(re,2);{var G=oe=>{var xe=aI(),he=d(xe,!0);c(xe),L(()=>_(he,f(V).content)),x(oe,xe)};F(D,oe=>{f(V).content&&oe(G)})}c(Y);var ce=h(Y,2),K=d(ce),se=d(K);c(K);var U=h(K,2),ie=d(U);c(U),c(ce),c(le),L(oe=>{Ee(le,"aria-label",`게시물: ${(f(V).title||f(V).content||"제목 없음")??""}`),_(Z,f(V).author||"익명"),_(z,oe),_(se,`👍 ${(f(V).likes||0)??""}`),_(ie,`💬 ${(f(V).comments?.length||0)??""}`)},[()=>v(f(V).timestamp)]),x(X,le)}),c(H),x(M,H)};F(E,M=>{f(s).length===0?M(S):M(O,!1)},!0)}x(A,C)};F(N,A=>{f(o)?A(q):A(T,!1)},!0)}x(P,$)};F(w,P=>{f(i)?P(k):P(I,!1)})}return c(g),x(r,g),at(b)}xt(["click","keydown"]);customElements.define("post-list",be(hI,{path:{},limit:{}},[],[],!0));J1();/**
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
 */const fI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var pI=P0("<svg><!><!></svg>");function kt(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]),n=gt(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ot(e,!1);let s=Fe(e,"name",12,void 0),i=Fe(e,"color",12,"currentColor"),o=Fe(e,"size",12,24),a=Fe(e,"strokeWidth",12,2),l=Fe(e,"absoluteStrokeWidth",12,!1),u=Fe(e,"iconNode",28,()=>[]);const p=(...w)=>w.filter((k,I,P)=>!!k&&P.indexOf(k)===I).join(" ");var m={get name(){return s()},set name(w){s(w),Oe()},get color(){return i()},set color(w){i(w),Oe()},get size(){return o()},set size(w){o(w),Oe()},get strokeWidth(){return a()},set strokeWidth(w){a(w),Oe()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(w){l(w),Oe()},get iconNode(){return u()},set iconNode(w){u(w),Oe()}};fr();var v=pI();Fh(v,(w,k)=>({...fI,...n,width:o(),height:o(),stroke:i(),"stroke-width":w,class:k}),[()=>(hi(l()),hi(a()),hi(o()),vn(()=>l()?Number(a())*24/Number(o()):a())),()=>(hi(s()),hi(t),vn(()=>p("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var b=d(v);nr(b,1,u,yn,(w,k)=>{var I=Rn(()=>k1(f(k),2));let P=()=>f(I)[0],$=()=>f(I)[1];var N=_e(),q=de(N);q0(q,P,!0,(T,A)=>{Fh(T,()=>({...$()}))}),x(w,N)});var g=h(b);return _t(g,e,"default",{}),c(v),x(r,v),at(m)}be(kt,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function e_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];kt(r,Ct({name:"book-open"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(e_,{},["default"],[],!0);function t_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];kt(r,Ct({name:"camera"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(t_,{},["default"],[],!0);function md(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];kt(r,Ct({name:"check"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(md,{},["default"],[],!0);function Zu(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];kt(r,Ct({name:"chevron-down"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(Zu,{},["default"],[],!0);function r_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];kt(r,Ct({name:"circle-alert"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(r_,{},["default"],[],!0);function cl(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];kt(r,Ct({name:"circle-check"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(cl,{},["default"],[],!0);function n_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];kt(r,Ct({name:"circle-x"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(n_,{},["default"],[],!0);function gd(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];kt(r,Ct({name:"circle"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(gd,{},["default"],[],!0);function _d(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];kt(r,Ct({name:"external-link"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(_d,{},["default"],[],!0);function eh(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];kt(r,Ct({name:"file-text"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(eh,{},["default"],[],!0);function s_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];kt(r,Ct({name:"house"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(s_,{},["default"],[],!0);function i_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]];kt(r,Ct({name:"image-plus"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(i_,{},["default"],[],!0);function bd(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];kt(r,Ct({name:"info"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(bd,{},["default"],[],!0);function uo(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];kt(r,Ct({name:"layout-grid"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(uo,{},["default"],[],!0);function o_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];kt(r,Ct({name:"log-in"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(o_,{},["default"],[],!0);function a_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];kt(r,Ct({name:"log-out"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(a_,{},["default"],[],!0);function ho(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];kt(r,Ct({name:"menu"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(ho,{},["default"],[],!0);function gs(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];kt(r,Ct({name:"message-circle"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(gs,{},["default"],[],!0);function l_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];kt(r,Ct({name:"pencil"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(l_,{},["default"],[],!0);function c_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];kt(r,Ct({name:"phone"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(c_,{},["default"],[],!0);function d_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];kt(r,Ct({name:"send"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(d_,{},["default"],[],!0);function u_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];kt(r,Ct({name:"server"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(u_,{},["default"],[],!0);function h_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];kt(r,Ct({name:"settings"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(h_,{},["default"],[],!0);function f_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];kt(r,Ct({name:"square-pen"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(f_,{},["default"],[],!0);function th(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];kt(r,Ct({name:"trash-2"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(th,{},["default"],[],!0);function p_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];kt(r,Ct({name:"triangle-alert"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(p_,{},["default"],[],!0);function v_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];kt(r,Ct({name:"trending-up"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(v_,{},["default"],[],!0);function ks(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];kt(r,Ct({name:"user"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(ks,{},["default"],[],!0);function Ho(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];kt(r,Ct({name:"users"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(Ho,{},["default"],[],!0);function Fl(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];kt(r,Ct({name:"x"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(Fl,{},["default"],[],!0);function m_(r,e){const t=gt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];kt(r,Ct({name:"zap"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=_e(),a=de(o);_t(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}be(m_,{},["default"],[],!0);var vI=R("<option> </option>"),mI=R('<div class="error-message svelte-1e01td3"> </div>'),gI=R('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),_I=R("<!> 인증 코드 전송",1),bI=R('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),wI=R('<div class="error-message svelte-1e01td3"> </div>'),yI=R('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),xI=R("<!> 로그인",1),kI=R('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),EI=R('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const CI={hash:"svelte-1e01td3",code:`\r
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
  }`};function II(r,e){ot(e,!0),nt(r,CI);const t=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let n=ne("+82"),s=ne(""),i=ne(""),o=ne("phone"),a=ne(!1),l=ne(""),u=ne(null),p=ne(null),m=ne(void 0),v=ne(null);function b(){return new Promise((C,E)=>{try{if(!f(v)){const S=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(S),y(l,"reCAPTCHA 초기화에 실패했습니다."),E(S);return}if(f(u)){if(f(m)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(f(m)),console.log("reCAPTCHA reset completed"),C(f(m));return}catch(S){console.warn("Failed to reset reCAPTCHA:",S)}try{f(u).clear(),y(u,null),y(m,void 0)}catch(S){console.warn("Failed to clear reCAPTCHA:",S)}}y(u,new _x(Sn,f(v).id,{size:"invisible",callback:()=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&f(m)!==void 0?window.grecaptcha.reset(f(m)):b()}}),!0),f(u).render().then(S=>{y(m,S,!0),console.log("✅ reCAPTCHA 렌더링 성공!"),console.log("  - Widget ID:",S),console.log("  - 컨테이너 ID:",f(v)?.id),console.log("  - 현재 도메인:",window.location.hostname),C(S)}).catch(S=>{console.error("❌ reCAPTCHA 렌더링 실패!"),console.error("  - 에러:",S),console.error("  - 에러 코드:",S.code),console.error("  - 에러 메시지:",S.message),console.error("  - 현재 도메인:",window.location.hostname),console.error("  - 컨테이너 ID:",f(v)?.id),y(l,"reCAPTCHA 초기화에 실패했습니다."),E(S)})}catch(S){console.error("reCAPTCHA 초기화 실패:",S),y(l,"reCAPTCHA 초기화에 실패했습니다."),E(S)}})}Jt(()=>{console.log("=== Phone Login Debug Info ==="),console.log("현재 도메인:",window.location.hostname),console.log("현재 전체 URL:",window.location.href),console.log("Firebase Auth Domain:","withcenter-test-5.firebaseapp.com"),console.log("Firebase Project ID:","withcenter-test-5"),console.log("reCAPTCHA 스크립트 로드:",typeof window.grecaptcha<"u"),console.log("==============================");const C=document.createElement("div");return C.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),C.className="recaptcha-container-light-dom",C.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(C),y(v,C,!0),console.log("🔍 reCAPTCHA 컨테이너 생성:",C.id),b(),()=>{C&&C.parentNode&&C.parentNode.removeChild(C)}});function g(C){return/^[0-9]{6,15}$/.test(C)}async function w(){if(y(l,""),!g(f(s))){y(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}y(a,!0);try{const C=`${f(n)}${f(s)}`;console.log("📱 SMS 전송 시작..."),console.log("  - 전화번호:",C),console.log("  - 현재 도메인:",window.location.hostname),console.log("  - reCAPTCHA 준비:",f(u)!==null),console.log("  - reCAPTCHA Widget ID:",f(m)),y(p,await yx(Sn,C,f(u)),!0),console.log("✅ SMS 전송 성공! (reCAPTCHA 검증 완료)"),y(o,"code")}catch(C){console.error("❌ SMS 전송 실패!"),console.error("  - 에러 코드:",C.code),console.error("  - 에러 메시지:",C.message),console.error("  - 현재 도메인:",window.location.hostname),console.error("  - Firebase Auth Domain:","withcenter-test-5.firebaseapp.com"),console.error("  - 전체 에러 객체:",C),C.code==="auth/invalid-phone-number"?y(l,"잘못된 전화번호 형식입니다."):C.code==="auth/too-many-requests"?y(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):C.code==="auth/captcha-check-failed"?(y(l,`reCAPTCHA 검증 실패: 도메인이 Firebase Console에 등록되어 있는지 확인해주세요. (현재 도메인: ${window.location.hostname})`),console.error("🔥 reCAPTCHA 에러 해결 방법:"),console.error("  1. Firebase Console → Authentication → Settings → Authorized domains"),console.error(`  2. '${window.location.hostname}' 도메인을 추가하세요`),console.error("  3. reCAPTCHA 버전이 v2인지 확인하세요 (Sign-in method → Phone)")):y(l,`SMS 전송 실패: ${C.message}`)}finally{y(a,!1)}}async function k(){if(y(l,""),f(i).length!==6){y(l,"6자리 인증 코드를 입력해주세요.");return}y(a,!0);try{const C=await f(p).confirm(f(i));console.log("Login successful:",C.user);const E=new CustomEvent("login-success",{detail:{user:C.user,phoneNumber:C.user.phoneNumber}});dispatchEvent(E),y(s,""),y(i,""),y(o,"phone")}catch(C){console.error("인증 코드 확인 실패:",C),C.code==="auth/invalid-verification-code"?y(l,"잘못된 인증 코드입니다."):C.code==="auth/code-expired"?y(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):y(l,`인증 실패: ${C.message}`);const E=new CustomEvent("login-error",{detail:{error:C.message}});dispatchEvent(E)}finally{y(a,!1)}}function I(){y(o,"phone"),y(i,""),y(l,"")}var P=EI(),$=d(P),N=d($);{var q=C=>{var E=bI(),S=d(E),O=d(S);c_(O,{class:"icon-large"}),Mr(4),c(S);var M=h(S,2),H=h(d(M),2);nr(H,21,()=>t,yn,(J,D)=>{var G=vI(),ce=d(G);c(G);var K={};L(()=>{_(ce,`${f(D).flag??""}
                ${f(D).name??""} (${f(D).code??""})`),K!==(K=f(D).code)&&(G.value=(G.__value=f(D).code)??"")}),x(J,G)}),c(H),c(M);var X=h(M,2),V=h(d(X),2),le=d(V),ue=d(le,!0);c(le);var te=h(le,2);Jn(te),c(V),Mr(2),c(X);var fe=h(X,2);{var Z=J=>{var D=mI(),G=d(D,!0);c(D),L(()=>_(G,f(l))),x(J,D)};F(fe,J=>{f(l)&&J(Z)})}var W=h(fe,2);W.__click=w;var z=d(W);{var Y=J=>{var D=gI();Mr(),x(J,D)},re=J=>{var D=_I(),G=de(D);d_(G,{class:"btn-icon"}),Mr(),x(J,D)};F(z,J=>{f(a)?J(Y):J(re,!1)})}c(W),c(E),L(()=>{H.disabled=f(a),_(ue,f(n)),te.disabled=f(a),W.disabled=f(a)||!f(s)}),hv(H,()=>f(n),J=>y(n,J)),Pn("keypress",te,J=>{J.key==="Enter"&&(J.preventDefault(),w())}),hn(te,()=>f(s),J=>y(s,J)),x(C,E)},T=C=>{var E=_e(),S=de(E);{var O=M=>{var H=kI(),X=d(H),V=d(X);md(V,{class:"icon-large"});var le=h(V,4),ue=d(le);Mr(2),c(le),c(X);var te=h(X,2),fe=h(d(te),2);Jn(fe),Mr(2),c(te);var Z=h(te,2);{var W=se=>{var U=wI(),ie=d(U,!0);c(U),L(()=>_(ie,f(l))),x(se,U)};F(Z,se=>{f(l)&&se(W)})}var z=h(Z,2),Y=d(z);Y.__click=I;var re=h(Y,2);re.__click=k;var J=d(re);{var D=se=>{var U=yI();Mr(),x(se,U)},G=se=>{var U=xI(),ie=de(U);md(ie,{class:"btn-icon"}),Mr(),x(se,U)};F(J,se=>{f(a)?se(D):se(G,!1)})}c(re),c(z);var ce=h(z,2),K=h(d(ce));K.__click=I,c(ce),c(H),L(()=>{_(ue,`${f(n)??""}${f(s)??""}로 전송된`),fe.disabled=f(a),Y.disabled=f(a),re.disabled=f(a)||f(i).length!==6}),Pn("keypress",fe,se=>{se.key==="Enter"&&(se.preventDefault(),k())}),hn(fe,()=>f(i),se=>y(i,se)),x(M,H)};F(S,M=>{f(o)==="code"&&M(O)},!0)}x(C,E)};F(N,C=>{f(o)==="phone"?C(q):C(T,!1)})}var A=h(N,2);Qo(A,C=>y(v,C),()=>f(v)),c($),c(P),x(r,P),at()}xt(["click"]);customElements.define("phone-login",be(II,{},[],[],!0));const ha=Zs(null),TI=Zs(!0);tu(Sn,r=>{ha.set(r),TI.set(!1)});async function SI(){try{return await X2(Sn),{success:!0}}catch(r){return console.error("로그아웃 오류:",r),{success:!1,error:r.message}}}class Ds{static#t=null;#e=ne(!0);get loading(){return f(this.#e)}set loading(e){y(this.#e,e,!0)}#n=ne(!1);get isAuthenticated(){return f(this.#n)}set isAuthenticated(e){y(this.#n,e,!0)}uid=null;email=null;phoneNumber=null;#s=ne(null);get data(){return f(this.#s)}set data(e){y(this.#s,e,!0)}#l=ne(null);get error(){return f(this.#l)}set error(e){y(this.#l,e,!0)}#o=null;#i=null;#r=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return Ds.#t||(Ds.#t=new Ds),Ds.#t}#a(){try{if(!Sn)throw new Error("Auth instance not available");this.#i=tu(Sn,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#r&&(this.#r(),this.#r=null);const t=St(Et,`users/${e.uid}`);this.#r=da(t,async n=>{this.data=n.val(),!this.data&&e&&console.log("FirebaseLoginUser: 사용자 데이터가 없습니다.")},n=>{this.error=n})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#r&&(this.#r(),this.#r=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const t={};e.displayName!==void 0&&(t.displayName=e.displayName),e.photoUrl!==void 0&&(t.photoURL=e.photoUrl),Object.keys(t).length>0&&await am(this.#o,t);const n={...e},s=St(Et,`users/${this.uid}`);await ls(s,n)}catch(t){throw this.error=t,t}}async updateField(e,t){return this.updateProfile({[e]:t})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#i&&(this.#i(),this.#i=null),this.#r&&(this.#r(),this.#r=null),Ds.#t=null}}const Ue=Ds.getInstance(),AI="GitHub",RI={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",관리자:"Admin",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",신고:"Report",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",전체댓글:"Total Comments",전체좋아요:"Total Likes",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"Server-side logic and data consistency","home.todo.item8.subitem1":"User profile synchronization (onUserProfileUpdate)","home.todo.item8.subitem2":"Like/comment count synchronization","home.todo.item8.subitem3":"Cleanup associated data on post deletion","home.todo.item8.subitem4":"Notification triggers and delivery","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese",공사중메시지:"This page is under construction",공사중설명_채팅목록:"The chat list feature is currently under development and will be updated soon.",공사중설명_설정:"The settings feature is currently under development and will be updated soon.",공사중설명_관리자:"Admin features are under development, including user management, post management, and report management.",공사중설명_게시물상세:"The post detail view feature is currently under development and will be updated soon.",공사중설명_앱정보:"The about page is currently under development and will be updated soon.",공사중설명_도움말:"The help page is currently under development and will be updated soon.",공사중설명_이용약관:"The terms of service page is currently under development and will be updated soon.",공사중설명_개인정보:"The privacy policy page is currently under development and will be updated soon.",공사중설명_문의하기:"The contact page is currently under development and will be updated soon.",메뉴로돌아가기:"Back to Menu",페이지선택:"Select a page to navigate to below",사용자프로필:"User Profile",게시물상세예시:"Post Detail (e.g., ID:123)",채팅목록:"Chat List",테스트게시글생성:"[Dev] Generate Test Posts",로그인성공알림:`Login successful!
Phone: {phone}`,로그인실패:"Login failed: {error}",전화번호로로그인:"Sign in easily with your phone number.",로그인하셨습니다:"You are logged in as {phone}.",홈으로이동:"Go to Home",사용자목록로딩:"Loading user list...",등록된사용자없음:"No registered users yet.",사용자목록실패:"Failed to load user list.",더많은사용자로딩:"Loading more users...",모든사용자로딩완료:"All users have been loaded.",정보없음:"No information",사용자:"User",이름없음:"No name",나:"Me",가입일:"Joined on",프로필보기:"View Profile",프로필사진:"Profile Photo",사진업로드중:"Uploading photo...",사진업로드실패:"Failed to upload photo: {error}",다른사진작업중:"Another photo operation is in progress...",프로필사진제거중:"Removing profile photo...",프로필사진제거완료:"Profile photo has been removed.",프로필사진제거실패:"Failed to remove profile photo: {error}",프로필업데이트중:"Updating profile...",프로필업데이트완료:"Profile has been updated successfully.",프로필업데이트실패:"Failed to update profile: {error}",닉네임입력:"Enter your nickname",닉네임최대길이:"Maximum 50 characters",소개글:"Bio",소개글입력:"Tell us about yourself",소개글최대길이:"Maximum 200 characters",홈페이지:"Website",홈페이지입력:"Enter your website URL",GitHub:AI,GitHub입력:"Enter your GitHub profile URL",사진업로드:"Upload Photo",사진제거:"Remove Photo",저장하기:"Save Changes",저장중:"Saving...",테스트게시글생성타이틀:"📝 Generate Test Posts",테스트게시글생성설명:"Generate 100 fun test posts for each category, totaling 400 posts.",로그인필요메시지:"⚠️ Login required to use this feature.",로그인하러가기:"Go to Login",게시글생성시작:"Start Generating Posts",생성중:"Generating...",생성성공:"✅ Successfully generated {count} posts!",생성실패:"❌ Failed to generate posts: {error}",경고:"⚠️ Warning",경고메시지:"This will create {count} test posts. Only use for testing purposes.",진행상황:"Progress",생성된게시글수:"{count} of {total} posts created",로딩중:"Loading...",게시판설명:" for the latest news and share your opinions.",글쓰기:"Write",게시글없음:"No posts yet",첫게시글공유:"Share your first story and start the community.",새글작성2:"Write New Post",게시글로딩중:"Loading posts...",게시글로드실패:"Failed to load posts.",더많은게시글로딩:"Loading more posts...",모든게시글확인:"All posts have been loaded.",새게시글작성:"Write New Post",카테고리:"Category",카테고리선택:"Select Category",카테고리선택필요:"Please select a category.",제목:"Title",제목입력:"Enter title",제목입력필요:"Please enter a title.",내용:"Content",내용입력:"Enter content",내용입력필요:"Please enter content.",전송:"Send",전송중:"Sending...",게시글작성완료:"Post has been created.",게시글저장실패:"Failed to save post: {error}",게시글저장중오류:"An error occurred while saving the post.",로그인정보확인불가:"Could not verify login information.",좋아요실패:"An error occurred while processing like.",이미좋아요:"You already liked this post.",댓글작성:"Write Comment",댓글내용입력:"Enter comment content",댓글이작성되었습니다:"Comment has been created.",댓글작성실패:"Failed to create comment: {error}",댓글내용입력필요:"Please enter comment content.","error.unknown":"An unknown error occurred.","error.network":"Please check your network connection.","error.offline":"No internet connection.","error.auth.invalidEmail":"Invalid email format.","error.auth.userDisabled":"This account has been disabled.","error.auth.userNotFound":"User not found.","error.auth.wrongPassword":"Incorrect password.","error.auth.emailAlreadyInUse":"This email is already in use.","error.auth.weakPassword":"Password is too weak. (Minimum 6 characters)","error.auth.operationNotAllowed":"This operation is not allowed.","error.auth.tooManyRequests":"Too many requests. Please try again later.","error.auth.invalidVerificationCode":"Invalid verification code.","error.auth.invalidPhoneNumber":"Invalid phone number.","error.auth.missingVerificationCode":"Please enter verification code.","error.auth.sessionExpired":"Session expired. Please log in again.","error.auth.requiresRecentLogin":"Please log in again for security.","error.auth.credentialAlreadyInUse":"This credential is already in use by another account.","error.db.permissionDenied":"You don't have permission to perform this action.","error.db.authenticationRequired":"Please log in first.","error.db.networkError":"Database connection error.","error.storage.unauthorized":"No permission to access file.","error.storage.bucketNotFound":"Storage bucket not found.","error.storage.invalidArgument":"Invalid argument.","error.storage.objectNotFound":"File not found.","error.storage.retryLimitExceeded":"File upload error. Please try again.","error.storage.quotaExceeded":"Storage quota exceeded.","error.storage.canceled":"File upload canceled.",게시글수정:"Edit Post",게시글수정완료:"Post has been updated.",게시글삭제확인:"Are you sure you want to delete this post?",게시글삭제완료:"Post has been deleted.",댓글이달려있어수정불가:"Cannot edit post with comments.",댓글이달려있어삭제불가:"Cannot delete post with comments.",제목과내용을입력하세요:"Please enter title and content.",수정불가:"Cannot Edit",댓글이달려있어수정불가메시지:`Cannot edit the post because there are comments.
Please delete the comments first before editing.`,답글:"Reply",답글작성:"Write Reply",좋아요를하였습니다:"You liked this.",좋아요를취소했습니다:"You unliked this.",댓글수정:"Edit Comment",수정중:"Updating...",댓글이수정되었습니다:"Comment has been updated.",댓글삭제확인:"Are you sure you want to delete this comment?",댓글이삭제되었습니다:"Comment has been deleted.",신고하기:"Report",신고_제목:"Report",신고_게시물_설명:"Do you want to report this post?",신고_댓글_설명:"Do you want to report this comment?",신고사유_선택:"Please select a reason for reporting",신고사유_abuse:"Abusive language, harassment, insults, defamation","신고사유_fake-news":"Fake news, misinformation",신고사유_spam:"Spam, abuse",신고사유_inappropriate:"Post not relevant to category",신고사유_other:"Other",신고_상세_메시지:"Detailed description (optional)",신고_상세_메시지_placeholder:"Please provide details about your report...",신고_취소:"Cancel",신고_제출:"Submit Report",신고_성공:"Your report has been submitted.",신고_실패:"Failed to submit report: {error}",신고_이미함:"You have already reported this post/comment.",신고_로그인필요:"You must be logged in to report.",관리자_신고목록:"Report List",신고_없음:"No reported posts/comments.",신고_유형:"Type",신고_게시물:"Post",신고_댓글:"Comment",신고_사용자:"Reporter",신고_날짜:"Report Date",신고_사유:"Reason",신고_메시지:"Details",내_신고_목록:"My Reports",관리자_신고_목록:"Admin Report List",모든_사용자의_신고를_확인할_수_있습니다:"You can view all user reports.",내가_작성한_신고를_확인할_수_있습니다:"You can view your submitted reports.",신고자:"Reporter",대상ID:"Target ID",대상_보기:"View Target",신고를취소하시겠습니까:"Do you want to cancel this report?",신고가취소되었습니다:"Your report has been canceled.",게시글:"Post",상세메시지:"Detailed Message"},PI={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",관리자:"관리자",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",신고:"신고",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",바이브코딩SED:"바이브 코딩 - SED",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",전체댓글:"전체 댓글",전체좋아요:"전체 좋아요",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다. 자세히보기...","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"모든 것을 실시간 업데이트","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 (한국 바이브 보스) - 소셜 네트워크 서비스 웹/앱 개발","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"서버 측 로직 및 데이터 일관성 보장","home.todo.item8.subitem1":"사용자 프로필 동기화 (onUserProfileUpdate)","home.todo.item8.subitem2":"좋아요/댓글 개수 동기화","home.todo.item8.subitem3":"게시글 삭제 시 연관 데이터 정리","home.todo.item8.subitem4":"알림 트리거 및 전송","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",공사중메시지:"이 페이지는 공사중입니다",공사중설명_채팅목록:"채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_설정:"설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_관리자:"관리자 기능을 개발 중이며, 사용자 관리, 게시물 관리, 신고 관리 등의 기능이 추가될 예정입니다.",공사중설명_게시물상세:"게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_앱정보:"앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_도움말:"도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_이용약관:"이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_개인정보:"개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_문의하기:"문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",메뉴로돌아가기:"메뉴로 돌아가기",페이지선택:"아래에서 이동할 페이지를 선택하세요",사용자프로필:"사용자 프로필",게시물상세예시:"게시물 상세 (예: ID:123)",채팅목록:"채팅 목록",테스트게시글생성:"[개발] 테스트 게시글 생성",로그인성공알림:`로그인 성공!
전화번호: {phone}`,로그인실패:"로그인 실패: {error}",전화번호로로그인:"전화번호로 간편하게 로그인하세요.",로그인하셨습니다:"{phone}로 로그인하셨습니다.",홈으로이동:"홈으로 이동",게시물상세:"게시물 상세",정보없음:"정보 없음",이름없음:"이름 없음",가입일:"가입일",프로필보기:"프로필 보기",사용자목록로딩:"사용자 목록을 불러오는 중...",등록된사용자없음:"등록된 사용자가 없습니다.",사용자목록실패:"사용자 목록을 불러오는데 실패했습니다.",더많은사용자로딩:"더 많은 사용자를 불러오는 중...",모든사용자로딩완료:"모든 사용자를 불러왔습니다.",다른사용자프로필:"다른 사용자 프로필:",프로필사진:"프로필 사진",프로필사진변경:"프로필 사진 변경",프로필사진추가:"프로필 사진 추가",프로필사진제거:"프로필 사진 제거",프로필사진클릭변경:"프로필 사진을 클릭하여 변경",사진저장중:"사진을 저장하는 중입니다...",닉네임입력:"닉네임을 입력하세요",닉네임헬퍼:"최대 50자까지 입력할 수 있습니다",선택하지않음:"선택하지 않음",남자:"남자",여자:"여자",생년월일헬퍼:"YYYY-MM-DD 형식으로 선택해주세요",저장중:"저장 중...",다른사진작업중:"다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",로그인후이용:"로그인 후 이용해주세요.",이미지파일만:"이미지 파일만 선택 가능합니다.",파일크기제한:"파일 크기는 5MB 이하여야 합니다.",프로필사진제거됨:"프로필 사진이 제거되었습니다.",사진제거실패:"사진 제거 실패: {error}",프로필사진저장됨:"프로필 사진이 저장되었습니다.",사진저장실패:"사진 저장 실패: {error}",프로필업데이트성공:"프로필이 성공적으로 업데이트되었습니다!",프로필업데이트오류:"오류: {error}",테스트데이터생성:"테스트 데이터 생성",테스트게시글생성타이틀:"📝 테스트 게시글 생성",테스트게시글설명:"각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",로그인하러가기:"로그인하러 가기",게시글생성시작:"게시글 생성 시작",실행로그:"실행 로그",완료게시판확인:"✅ 완료! 게시판 페이지에서 확인해보세요.",사용자:"사용자",로딩중:"로딩 중...",게시판설명:"에서 최신 소식을 확인하고 의견을 나눠보세요.",글쓰기:"글쓰기",게시글없음:"아직 등록된 게시글이 없어요",첫게시글공유:"첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",새글작성2:"새 글 작성하기",게시글로딩중:"게시글을 불러오는 중입니다...",게시글로드실패:"게시글을 불러오는 중 문제가 발생했습니다.",더많은게시글로딩:"더 많은 게시글을 불러오는 중...",모든게시글확인:"모든 게시글을 확인했습니다.",새게시글작성:"새 게시글 작성",카테고리:"카테고리",카테고리선택:"카테고리 선택",카테고리선택필요:"카테고리를 선택해주세요.",제목:"제목",제목입력:"제목을 입력하세요",제목입력필요:"제목을 입력해주세요.",내용:"내용",내용입력:"내용을 입력하세요",내용입력필요:"내용을 입력해주세요.",전송:"전송",전송중:"전송 중...",게시글작성완료:"게시글이 작성되었습니다.",게시글저장실패:"게시글 저장 실패: {error}",게시글저장중오류:"게시글 저장 중 오류가 발생했습니다.",로그인정보확인불가:"로그인 정보를 확인할 수 없습니다.",좋아요실패:"좋아요 처리 중 오류가 발생했습니다.",이미좋아요:"이미 좋아요를 눌렀습니다.",댓글작성:"댓글 작성",댓글내용입력:"댓글 내용을 입력하세요",댓글이작성되었습니다:"댓글이 작성되었습니다.",댓글작성실패:"댓글 작성 실패: {error}",댓글내용입력필요:"댓글 내용을 입력해주세요.",댓글더보기:"더 보기 (총 {count}개)",모든댓글보기:"모든 댓글 보기",댓글숨기기:"댓글 숨기기",답글:"답글",답글작성:"답글 작성",좋아요를하였습니다:"좋아요를 하였습니다.",좋아요를취소했습니다:"좋아요를 취소했습니다.","error.unknown":"알 수 없는 오류가 발생했습니다.","error.network":"네트워크 연결을 확인해주세요.","error.offline":"인터넷 연결이 없습니다.","error.auth.invalidEmail":"올바른 이메일 형식이 아닙니다.","error.auth.userDisabled":"비활성화된 계정입니다.","error.auth.userNotFound":"사용자를 찾을 수 없습니다.","error.auth.wrongPassword":"비밀번호가 올바르지 않습니다.","error.auth.emailAlreadyInUse":"이미 사용 중인 이메일입니다.","error.auth.weakPassword":"비밀번호가 너무 약합니다. (최소 6자 이상)","error.auth.operationNotAllowed":"이 작업은 허용되지 않습니다.","error.auth.tooManyRequests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","error.auth.invalidVerificationCode":"잘못된 인증 코드입니다.","error.auth.invalidPhoneNumber":"올바른 전화번호가 아닙니다.","error.auth.missingVerificationCode":"인증 코드를 입력해주세요.","error.auth.sessionExpired":"세션이 만료되었습니다. 다시 로그인해주세요.","error.auth.requiresRecentLogin":"보안을 위해 다시 로그인해주세요.","error.auth.credentialAlreadyInUse":"이미 다른 계정에서 사용 중인 인증 정보입니다.","error.db.permissionDenied":"이 작업을 수행할 권한이 없습니다.","error.db.authenticationRequired":"먼저 로그인해주세요.","error.db.networkError":"데이터베이스 연결 중 오류가 발생했습니다.","error.storage.unauthorized":"파일 접근 권한이 없습니다.","error.storage.bucketNotFound":"저장소를 찾을 수 없습니다.","error.storage.invalidArgument":"올바르지 않은 인자입니다.","error.storage.objectNotFound":"파일을 찾을 수 없습니다.","error.storage.retryLimitExceeded":"파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.","error.storage.quotaExceeded":"저장 공간이 부족합니다.","error.storage.canceled":"파일 업로드가 취소되었습니다.","dev.history.title":"📝 스터디 로그","dev.history.subtitle":"한바보 프로젝트의 개발 진행 현황을 기록합니다.","dev.history.updateIndicator":"최신 업데이트 자동 동기화","dev.history.seminar1.date":"2025-10-27 (첫 번째 세미나)","dev.history.seminar1.completed":"✅ 구현 완료","dev.history.seminar1.item1":"기본 프로젝트 셋업 (Next.js 16, React 19, TypeScript)","dev.history.seminar1.item2":"Firebase 설정 및 인증 구현","dev.history.seminar1.item3":"이메일/비밀번호 회원가입 & 로그인","dev.history.seminar1.item4":"회원 정보 수정 (프로필 업데이트)","dev.history.seminar1.item5":"1:1 채팅 기능 (실시간 메시지 동기화)","dev.history.seminar1.learned":"💡 배운 것들","dev.history.seminar1.learned1":"Next.js App Router 구조 이해","dev.history.seminar1.learned2":"Firebase Authentication 사용법","dev.history.seminar1.learned3":"Firebase Realtime Database 실시간 동기화","dev.history.seminar1.learned4":"Git PR을 통한 협업 방식","dev.history.seminar2.date":"2025-11-03 (두 번째 세미나)","dev.history.seminar2.completed":"✅ 기술 스택 전환 완료","dev.history.seminar2.item1":"React.js + Next.js + Firebase + Supabase → Svelte + Firebase로 전환","dev.history.seminar2.item2":"Svelte 5 Custom Elements 기반 아키텍처 구축","dev.history.seminar2.item3":"Web Components로 프레임워크 독립적인 구조 구현","dev.history.seminar2.item4":"Firebase만으로 모든 기능 구현 (Supabase 제거)","dev.history.seminar2.item5":"전체 프로젝트 리팩토링 및 재구성","dev.history.seminar2.learned":"💡 배운 것들","dev.history.seminar2.learned1":"Svelte 5 Runes ($state, $derived, $effect) 활용법","dev.history.seminar2.learned2":"Web Components의 장점과 재사용성","dev.history.seminar2.learned3":"Firebase만으로 충분한 기능 구현 가능","dev.history.seminar2.learned4":"더 가볍고 빠른 개발 환경 구축","dev.history.seminar3.date":"2025-11-04","dev.history.seminar3.completed":"✅ 핵심 기능 구현 완료","dev.history.seminar3.item1":"Svelte 5를 JavaScript에서 TypeScript로 전환","dev.history.seminar3.item2":"게시판 좋아요 기능 구현","dev.history.seminar3.item3":"댓글 작성, 수정, 삭제 기능 구현","dev.history.seminar3.item4":"댓글 좋아요 기능 추가","dev.history.seminar3.item5":"통계 기능 추가 (사용자 수, 게시글 수, 댓글 수 등)","dev.history.seminar3.learned":"💡 배운 것들","dev.history.seminar3.learned1":"TypeScript의 타입 안정성이 주는 바이브코딩의 코드 생성 향상","dev.history.seminar3.learned2":"바이브코딩의 한계를 극복하기 위한 Spec-Exact Development (SED) 개념 창조: LLM이 충분히 이해할 수 있는 상세한 스펙(DB 구조, 인증 방식, 암호화, 비밀번호 확인란 등) 제공. LLM이 작업 전 스펙 점수를 매겨 90점 이상일 때만 개발 시작","dev.history.seminar3.learned3":"Firebase increment()로 동시성 안전한 카운터 구현","dev.history.seminar3.learned4":"실시간 데이터 동기화를 활용한 통계 기능","dev.history.seminar3.learned5":"사용자 경험을 고려한 좋아요 및 댓글 UX 설계","dev.history.seminar4.date":"2025-11-05","dev.history.seminar4.completed":"✅ 구현 완료","dev.history.seminar4.item1":"각종 통계 (사용자 수, 게시글 수, 댓글 수, 좋아요 수 등)","dev.history.seminar4.item2":"댓글 작성 기능 완성 (실시간 동기화)","dev.history.seminar4.item3":"코멘트 좋아요 버그 수정 (Firebase push 키 처리)","dev.history.seminar4.item4":"Firebase Cloud Functions 배포 자동화 (npm run deploy)","dev.history.seminar4.item5":"CLAUDE.md 문서 구조 개선 (요약/레퍼런스 분리)","dev.history.seminar4.learned":"💡 배운 것들","dev.history.seminar4.learned1":"본 프로젝트를 100% 바이브 코딩(노코딩)으로 개발 진행하면서, 아무리 잘 작성된 프롬프트라고 해도, 프롬프트 몇 번만에 완전한 소셜 서비스 웹/앱 개발이 불가능하다는 것을 깨달았다.","dev.history.seminar4.learned2":"그래서 SED (Spec-Exact Development)의 중요성을 다시 한번 깨닫게 되었다.","dev.history.seminar4.learned3":"Firebase Cloud Functions의 increment() 함수로 동시성 안전한 카운터 업데이트 구현","dev.history.seminar4.learned4":"문서화의 중요성: 요약은 CLAUDE.md에, 상세 예제는 docs/*.md에 분리하여 관리","dev.history.upcoming":"더 많은 스터디 로그가 추가될 예정입니다...",게시글수정:"게시글 수정",게시글수정완료:"게시글이 수정되었습니다.",게시글삭제확인:"정말로 이 게시글을 삭제하시겠습니까?",게시글삭제완료:"게시글이 삭제되었습니다.",댓글이달려있어수정불가:"댓글이 달려 있는 경우 수정을 할 수 없습니다.",댓글이달려있어삭제불가:"댓글이 달려 있는 경우 삭제를 할 수 없습니다.",제목과내용을입력하세요:"제목과 내용을 입력하세요.",수정불가:"수정할 수 없습니다",댓글이달려있어수정불가메시지:`댓글이 달려 있어서 게시글을 수정할 수 없습니다.
댓글을 먼저 삭제한 후 수정해주세요.`,댓글수정:"댓글 수정",수정중:"수정 중...",댓글이수정되었습니다:"댓글이 수정되었습니다.",댓글삭제확인:"정말로 이 댓글을 삭제하시겠습니까?",댓글이삭제되었습니다:"댓글이 삭제되었습니다.",파일첨부:"파일 첨부",이미지첨부:"업로드",파일선택:"파일 선택",파일삭제:"삭제",파일크기초과:"파일 크기가 5MB를 초과합니다",지원하지않는파일형식:"지원하지 않는 파일 형식입니다 (JPEG, PNG, WebP만 가능)",파일업로드중:"업로드 중...",파일업로드완료:"업로드 완료",파일업로드실패:"업로드 실패: {error}",파일목록:"첨부 파일",파일없음:"첨부된 파일이 없습니다",업로드진행중:"업로드 진행 중: {progress}%","error.file.tooLarge":"파일 크기가 5MB를 초과합니다","error.file.invalidType":"지원하지 않는 파일 형식입니다 (JPEG, PNG, WebP만 가능)","error.file.invalidUrl":"올바르지 않은 파일 URL입니다",신고하기:"신고하기",신고_제목:"신고하기",신고_게시물_설명:"이 게시물을 신고하시겠습니까?",신고_댓글_설명:"이 댓글을 신고하시겠습니까?",신고사유_선택:"신고 사유를 선택해주세요",신고사유_abuse:"욕설, 시비, 모욕, 명예훼손","신고사유_fake-news":"가짜 뉴스, 잘못된 정보",신고사유_spam:"스팸, 악용",신고사유_inappropriate:"카테고리에 맞지 않는 글 등록",신고사유_other:"기타",신고_상세_메시지:"상세 설명 (선택사항)",신고_상세_메시지_placeholder:"신고 사유를 상세히 설명해주세요...",신고_취소:"취소",신고_제출:"신고 제출",신고_성공:"신고가 접수되었습니다.",신고_실패:"신고 접수에 실패했습니다: {error}",신고_이미함:"이미 신고한 게시물/댓글입니다.",신고_로그인필요:"신고하려면 로그인이 필요합니다.",관리자_신고목록:"신고 목록",신고_없음:"신고된 게시물/댓글이 없습니다.",신고_유형:"유형",신고_게시물:"게시물",신고_댓글:"댓글",신고_사용자:"신고자",신고_날짜:"신고 날짜",신고_사유:"신고 사유",신고_메시지:"상세 설명",내_신고_목록:"내 신고 목록",관리자_신고_목록:"관리자 신고 목록",모든_사용자의_신고를_확인할_수_있습니다:"모든 사용자의 신고를 확인할 수 있습니다.",내가_작성한_신고를_확인할_수_있습니다:"내가 작성한 신고를 확인할 수 있습니다.",신고자:"신고자",대상ID:"대상 ID",대상_보기:"대상 보기",신고를취소하시겠습니까:"신고를 취소하시겠습니까?",신고가취소되었습니다:"신고가 취소되었습니다.",게시글:"게시글",상세메시지:"상세 메시지"},NI="GitHub",$I={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",관리자:"管理者",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",신고:"通報",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",전체댓글:"総コメント数",전체좋아요:"総いいね数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"サーバー側ロジックとデータ整合性の保証","home.todo.item8.subitem1":"ユーザープロフィール同期 (onUserProfileUpdate)","home.todo.item8.subitem2":"いいね/コメント数の同期","home.todo.item8.subitem3":"投稿削除時の関連データクリーンアップ","home.todo.item8.subitem4":"通知トリガーと配信","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語",공사중메시지:"このページは工事中です",공사중설명_채팅목록:"チャットリスト機能は現在開発中で、まもなく更新される予定です。",공사중설명_설정:"設定機能は現在開発中で、まもなく更新される予定です。",공사중설명_관리자:"管理者機能は開発中で、ユーザー管理、投稿管理、通報管理などの機能が追加される予定です。",공사중설명_게시물상세:"投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",공사중설명_앱정보:"アプリ情報ページは現在開発中で、まもなく更新される予定です。",공사중설명_도움말:"ヘルプページは現在開発中で、まもなく更新される予定です。",공사중설명_이용약관:"利用規約ページは現在開発中で、まもなく更新される予定です。",공사중설명_개인정보:"プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",공사중설명_문의하기:"お問い合わせページは現在開発中で、まもなく更新される予定です。",메뉴로돌아가기:"メニューに戻る",페이지선택:"移動するページを下から選択してください",사용자프로필:"ユーザープロフィール",게시물상세예시:"投稿詳細 (例: ID:123)",채팅목록:"チャットリスト",테스트게시글생성:"[開発] テスト投稿生成",로그인성공알림:`ログイン成功!
電話番号: {phone}`,로그인실패:"ログイン失敗: {error}",전화번호로로그인:"電話番号で簡単にログインしてください。",로그인하셨습니다:"{phone}でログインしています。",홈으로이동:"ホームへ移動",사용자목록로딩:"ユーザーリストを読み込み中...",등록된사용자없음:"登録されたユーザーがいません。",사용자목록실패:"ユーザーリストの読み込みに失敗しました。",더많은사용자로딩:"さらにユーザーを読み込み中...",모든사용자로딩완료:"すべてのユーザーを読み込みました。",정보없음:"情報なし",사용자:"ユーザー",이름없음:"名前なし",나:"私",가입일:"登録日",프로필보기:"プロフィール表示",프로필사진:"プロフィール写真",사진업로드중:"写真をアップロード中...",사진업로드실패:"写真のアップロードに失敗しました: {error}",다른사진작업중:"他の写真操作が進行中です...",프로필사진제거중:"プロフィール写真を削除中...",프로필사진제거완료:"プロフィール写真を削除しました。",프로필사진제거실패:"プロフィール写真の削除に失敗しました: {error}",프로필업데이트중:"プロフィールを更新中...",프로필업데이트완료:"プロフィールを正常に更新しました。",프로필업데이트실패:"プロフィールの更新に失敗しました: {error}",닉네임입력:"ニックネームを入力してください",닉네임최대길이:"最大50文字まで入力できます",소개글:"自己紹介",소개글입력:"自己紹介を入力してください",소개글최대길이:"最大200文字まで入力できます",홈페이지:"ウェブサイト",홈페이지입력:"ウェブサイトURLを入力してください",GitHub:NI,GitHub입력:"GitHubプロフィールURLを入力してください",사진업로드:"写真をアップロード",사진제거:"写真を削除",저장하기:"変更を保存",저장중:"保存中...",테스트게시글생성타이틀:"📝 テスト投稿生成",테스트게시글생성설명:"各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",로그인필요메시지:"⚠️ この機能を使用するにはログインが必要です。",로그인하러가기:"ログインへ",게시글생성시작:"投稿生成開始",생성중:"生成中...",생성성공:"✅ {count}件の投稿を正常に生成しました！",생성실패:"❌ 投稿の生成に失敗しました: {error}",경고:"⚠️ 警告",경고메시지:"{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",진행상황:"進行状況",생성된게시글수:"{total}件中{count}件の投稿を作成",로딩중:"読み込み中...",게시판설명:"の最新ニュースを確認し、意見を共有してください。",글쓰기:"書く",게시글없음:"まだ投稿がありません",첫게시글공유:"最初のストーリーを共有してコミュニティを始めましょう。",새글작성2:"新規投稿を書く",게시글로딩중:"投稿を読み込み中...",게시글로드실패:"投稿の読み込みに失敗しました。",더많은게시글로딩:"さらに多くの投稿を読み込み中...",모든게시글확인:"すべての投稿を読み込みました。",새게시글작성:"新規投稿を書く",카테고리:"カテゴリ",카테고리선택:"カテゴリを選択",카테고리선택필요:"カテゴリを選択してください。",제목:"タイトル",제목입력:"タイトルを入力してください",제목입력필요:"タイトルを入力してください。",내용:"コンテンツ",내용입력:"コンテンツを入力してください",내용입력필요:"コンテンツを入力してください。",전송:"送信",전송중:"送信中...",게시글작성완료:"投稿が作成されました。",게시글저장실패:"投稿の保存に失敗しました: {error}",게시글저장중오류:"投稿の保存中にエラーが発生しました。",로그인정보확인불가:"ログイン情報を確認できませんでした。",좋아요실패:"いいね処理中にエラーが発生しました。",이미좋아요:"すでにいいねしています。",댓글작성:"コメントを書く",댓글내용입력:"コメント内容を入力してください",댓글이작성되었습니다:"コメントが作成されました。",댓글작성실패:"コメント作成に失敗しました: {error}",댓글내용입력필요:"コメント内容を入力してください。","error.unknown":"不明なエラーが発生しました。","error.network":"ネットワーク接続を確認してください。","error.offline":"インターネット接続がありません。","error.auth.invalidEmail":"正しいメール形式ではありません。","error.auth.userDisabled":"無効なアカウントです。","error.auth.userNotFound":"ユーザーが見つかりません。","error.auth.wrongPassword":"パスワードが正しくありません。","error.auth.emailAlreadyInUse":"すでに使用されているメールアドレスです。","error.auth.weakPassword":"パスワードが弱すぎます。（最低6文字以上）","error.auth.operationNotAllowed":"この操作は許可されていません。","error.auth.tooManyRequests":"リクエストが多すぎます。しばらくしてから再試行してください。","error.auth.invalidVerificationCode":"無効な認証コードです。","error.auth.invalidPhoneNumber":"正しい電話番号ではありません。","error.auth.missingVerificationCode":"認証コードを入力してください。","error.auth.sessionExpired":"セッションが期限切れです。再度ログインしてください。","error.auth.requiresRecentLogin":"セキュリティのため、再度ログインしてください。","error.auth.credentialAlreadyInUse":"すでに他のアカウントで使用されている認証情報です。","error.db.permissionDenied":"この操作を実行する権限がありません。","error.db.authenticationRequired":"まずログインしてください。","error.db.networkError":"データベース接続中にエラーが発生しました。","error.storage.unauthorized":"ファイルへのアクセス権限がありません。","error.storage.bucketNotFound":"ストレージが見つかりません。","error.storage.invalidArgument":"無効な引数です。","error.storage.objectNotFound":"ファイルが見つかりません。","error.storage.retryLimitExceeded":"ファイルアップロード中にエラーが発生しました。再試行してください。","error.storage.quotaExceeded":"ストレージ容量が不足しています。","error.storage.canceled":"ファイルアップロードがキャンセルされました。",신고하기:"通報",신고_제목:"通報",신고_게시물_설명:"この投稿を通報しますか？",신고_댓글_설명:"このコメントを通報しますか？",신고사유_선택:"通報理由を選択してください",신고사유_abuse:"暴言、嫌がらせ、侮辱、名誉毀損","신고사유_fake-news":"フェイクニュース、誤情報",신고사유_spam:"スパム、悪用",신고사유_inappropriate:"カテゴリに合わない投稿",신고사유_other:"その他",신고_상세_메시지:"詳細説明（任意）",신고_상세_메시지_placeholder:"通報理由を詳しく説明してください...",신고_취소:"キャンセル",신고_제출:"通報を送信",신고_성공:"通報が受理されました。",신고_실패:"通報の受理に失敗しました: {error}",신고_이미함:"すでに通報済みの投稿/コメントです。",신고_로그인필요:"通報するにはログインが必要です。",관리자_신고목록:"通報リスト",신고_없음:"通報された投稿/コメントはありません。",신고_유형:"タイプ",신고_게시물:"投稿",신고_댓글:"コメント",신고_사용자:"通報者",신고_날짜:"通報日",신고_사유:"理由",신고_메시지:"詳細",내_신고_목록:"私の通報リスト",관리자_신고_목록:"管理者通報リスト",모든_사용자의_신고를_확인할_수_있습니다:"すべてのユーザーの通報を確認できます。",내가_작성한_신고를_확인할_수_있습니다:"自分が送信した通報を確認できます。",신고자:"通報者",대상ID:"対象ID",대상_보기:"対象を表示",신고를취소하시겠습니까:"この通報をキャンセルしますか？",신고가취소되었습니다:"通報がキャンセルされました。",게시글:"投稿",상세메시지:"詳細メッセージ"},LI="GitHub",DI={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",관리자:"管理员",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",신고:"举报",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",전체댓글:"总评论",전체좋아요:"总点赞",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"服务器端逻辑和数据一致性保障","home.todo.item8.subitem1":"用户资料同步 (onUserProfileUpdate)","home.todo.item8.subitem2":"点赞/评论数同步","home.todo.item8.subitem3":"帖子删除时清理关联数据","home.todo.item8.subitem4":"通知触发和发送","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文",공사중메시지:"此页面正在建设中",공사중설명_채팅목록:"聊天列表功能正在开发中，即将更新。",공사중설명_설정:"设置功能正在开发中，即将更新。",공사중설명_관리자:"管理员功能正在开发中，包括用户管理、帖子管理、举报管理等功能。",공사중설명_게시물상세:"帖子详情查看功能正在开发中，即将更新。",공사중설명_앱정보:"应用信息页面正在开发中，即将更新。",공사중설명_도움말:"帮助页面正在开发中，即将更新。",공사중설명_이용약관:"使用条款页面正在开发中，即将更新。",공사중설명_개인정보:"隐私政策页面正在开发中，即将更新。",공사중설명_문의하기:"联系我们页面正在开发中，即将更新。",메뉴로돌아가기:"返回菜单",페이지선택:"从下方选择要导航的页面",사용자프로필:"用户资料",게시물상세예시:"帖子详情 (例: ID:123)",채팅목록:"聊天列表",테스트게시글생성:"[开发] 生成测试帖子",로그인성공알림:`登录成功！
手机号: {phone}`,로그인실패:"登录失败: {error}",전화번호로로그인:"使用手机号轻松登录。",로그인하셨습니다:"您已使用 {phone} 登录。",홈으로이동:"前往首页",사용자목록로딩:"正在加载用户列表...",등록된사용자없음:"尚无注册用户。",사용자목록실패:"加载用户列表失败。",더많은사용자로딩:"正在加载更多用户...",모든사용자로딩완료:"已加载所有用户。",정보없음:"无信息",사용자:"用户",이름없음:"无名称",나:"我",가입일:"注册日期",프로필보기:"查看资料",프로필사진:"头像",사진업로드중:"正在上传照片...",사진업로드실패:"照片上传失败: {error}",다른사진작업중:"另一个照片操作正在进行中...",프로필사진제거중:"正在删除头像...",프로필사진제거완료:"头像已删除。",프로필사진제거실패:"删除头像失败: {error}",프로필업데이트중:"正在更新资料...",프로필업데이트완료:"资料更新成功。",프로필업데이트실패:"资料更新失败: {error}",닉네임입력:"输入您的昵称",닉네임최대길이:"最多可输入50个字符",소개글:"个人简介",소개글입력:"请输入自我介绍",소개글최대길이:"最多可输入200个字符",홈페이지:"网站",홈페이지입력:"请输入您的网站URL",GitHub:LI,GitHub입력:"请输入您的GitHub个人资料URL",사진업로드:"上传照片",사진제거:"删除照片",저장하기:"保存更改",저장중:"保存中...",테스트게시글생성타이틀:"📝 生成测试帖子",테스트게시글생성설명:"每个类别生成100条有趣的测试帖子，共400条。",로그인필요메시지:"⚠️ 使用此功能需要登录。",로그인하러가기:"前往登录",게시글생성시작:"开始生成帖子",생성중:"生成中...",생성성공:"✅ 成功生成了 {count} 条帖子！",생성실패:"❌ 生成帖子失败: {error}",경고:"⚠️ 警告",경고메시지:"这将创建 {count} 条测试帖子。仅用于测试目的。",진행상황:"进度",생성된게시글수:"已创建 {count} / {total} 条帖子",로딩중:"加载中...",게시판설명:"的最新新闻，分享您的意见。",글쓰기:"写作",게시글없음:"还没有帖子",첫게시글공유:"分享您的第一个故事并开始社区。",새글작성2:"写新帖子",게시글로딩중:"正在加载帖子...",게시글로드실패:"加载帖子失败。",더많은게시글로딩:"正在加载更多帖子...",모든게시글확인:"已加载所有帖子。",새게시글작성:"写新帖子",카테고리:"类别",카테고리선택:"选择类别",카테고리선택필요:"请选择一个类别。",제목:"标题",제목입력:"输入标题",제목입력필요:"请输入标题。",내용:"内容",내용입력:"输入内容",내용입력필요:"请输入内容。",전송:"发送",전송중:"发送中...",게시글작성완료:"帖子已创建。",게시글저장실패:"帖子保存失败: {error}",게시글저장중오류:"保存帖子时出错。",로그인정보확인불가:"无法验证登录信息。",좋아요실패:"处理点赞时出错。",이미좋아요:"您已经点赞过了。",댓글작성:"写评论",댓글내용입력:"请输入评论内容",댓글이작성되었습니다:"评论已创建。",댓글작성실패:"评论创建失败: {error}",댓글내용입력필요:"请输入评论内容。","error.unknown":"发生未知错误。","error.network":"请检查网络连接。","error.offline":"没有互联网连接。","error.auth.invalidEmail":"邮箱格式不正确。","error.auth.userDisabled":"账户已被禁用。","error.auth.userNotFound":"找不到用户。","error.auth.wrongPassword":"密码不正确。","error.auth.emailAlreadyInUse":"该邮箱已被使用。","error.auth.weakPassword":"密码太弱。（至少6个字符）","error.auth.operationNotAllowed":"此操作不被允许。","error.auth.tooManyRequests":"请求过多。请稍后再试。","error.auth.invalidVerificationCode":"验证码无效。","error.auth.invalidPhoneNumber":"电话号码格式不正确。","error.auth.missingVerificationCode":"请输入验证码。","error.auth.sessionExpired":"会话已过期。请重新登录。","error.auth.requiresRecentLogin":"为了安全，请重新登录。","error.auth.credentialAlreadyInUse":"此凭证已被其他账户使用。","error.db.permissionDenied":"您没有执行此操作的权限。","error.db.authenticationRequired":"请先登录。","error.db.networkError":"数据库连接时出错。","error.storage.unauthorized":"没有文件访问权限。","error.storage.bucketNotFound":"找不到存储桶。","error.storage.invalidArgument":"参数无效。","error.storage.objectNotFound":"找不到文件。","error.storage.retryLimitExceeded":"文件上传出错。请重试。","error.storage.quotaExceeded":"存储空间不足。","error.storage.canceled":"文件上传已取消。",신고하기:"举报",신고_제목:"举报",신고_게시물_설명:"您要举报此帖子吗？",신고_댓글_설명:"您要举报此评论吗？",신고사유_선택:"请选择举报原因",신고사유_abuse:"辱骂、骚扰、侮辱、诽谤","신고사유_fake-news":"假新闻、虚假信息",신고사유_spam:"垃圾信息、滥用",신고사유_inappropriate:"帖子与类别不符",신고사유_other:"其他",신고_상세_메시지:"详细说明（可选）",신고_상세_메시지_placeholder:"请详细说明举报原因...",신고_취소:"取消",신고_제출:"提交举报",신고_성공:"您的举报已提交。",신고_실패:"提交举报失败: {error}",신고_이미함:"您已举报过此帖子/评论。",신고_로그인필요:"您必须登录才能举报。",관리자_신고목록:"举报列表",신고_없음:"没有举报的帖子/评论。",신고_유형:"类型",신고_게시물:"帖子",신고_댓글:"评论",신고_사용자:"举报人",신고_날짜:"举报日期",신고_사유:"原因",신고_메시지:"详情",내_신고_목록:"我的举报列表",관리자_신고_목록:"管理员举报列表",모든_사용자의_신고를_확인할_수_있습니다:"您可以查看所有用户的举报。",내가_작성한_신고를_확인할_수_있습니다:"您可以查看您提交的举报。",신고자:"举报人",대상ID:"目标ID",대상_보기:"查看目标",신고를취소하시겠습니까:"您确定要取消此举报吗？",신고가취소되었습니다:"您的举报已取消。",게시글:"帖子",상세메시지:"详细信息"},Ac={en:RI,ko:PI,ja:$I,zh:DI};function wd(r){const e=(r??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function g_(){if(typeof navigator>"u")return"en";const r=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of r){const t=wd(e);if(t!=="en")return t}return"en"}function OI(r){let e=wd(r)||g_();function t(i){e=wd(i)}function n(){return e}function s(i,o={}){return((Ac[e]??Ac.en)[i]??Ac.en[i]??i).replace(/\{(\w+)\}/g,(u,p)=>o[p]??"")}return{t:s,setLocale:t,getLocale:n}}const rh="sns-web-locale",__=[{code:"ko",label:"🇰🇷 한국어"},{code:"en",label:"🇺🇸 English"},{code:"ja",label:"🇯🇵 日本語"},{code:"zh",label:"🇨🇳 中文"}];function MI(){if(typeof localStorage>"u")return null;const r=localStorage.getItem(rh);if(!r)return null;const e=__.find(t=>t.code===r);return e?e.code:null}const b_=MI()??g_(),dl=OI(b_);typeof localStorage<"u"&&localStorage.setItem(rh,dl.getLocale());const nh=Zs(b_);function qI(r){dl.setLocale(r);const e=dl.getLocale();nh.set(e),typeof localStorage<"u"&&localStorage.setItem(rh,e)}const qt=Q0(nh,r=>(e,t={})=>dl.t(e,t)),w_=Zs("");function Hr(r){w_.set(r)}function or(r){window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}var zI=R('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),UI=R('<img alt="프로필" class="avatar-image svelte-38psow"/>'),FI=R('<div class="avatar-fallback svelte-38psow"> </div>'),jI=R('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <button type="button" class="dropdown-item svelte-38psow"><!> <span> </span></button> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),BI=R('<img class="avatar-image svelte-38psow"/>'),VI=R('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),HI=R('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),WI=R('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"> </button> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),GI=R('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><button type="button" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></button> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const KI={hash:"svelte-38psow",code:`\r
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
  /* 아바타 */.avatar.svelte-38psow {width:1.5rem;height:1.5rem;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:#e5e7eb;}.avatar-small.svelte-38psow {width:1.75rem;height:1.75rem;}.avatar-image.svelte-38psow {width:100%;height:100%;object-fit:cover;}.avatar-fallback.svelte-38psow {width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:500;color:#6b7280;}.avatar-fallback-small.svelte-38psow {font-size:0.625rem;}\r
\r
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function YI(r,e){ot(e,!0),nt(r,KI);const t=()=>Je(w_,"$pageTitle",i),n=()=>Je(ha,"$user",i),s=()=>Je(qt,"$t",i),[i,o]=$t();let a=ne(!1);function l(A){or(A),y(a,!1)}async function u(){if((await SI()).success){const C=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(C)}y(a,!1)}function p(){return Ue.data?.displayName?Ue.data.displayName.charAt(0).toUpperCase():Ue.email?Ue.email.charAt(0).toUpperCase():"U"}function m(){y(a,!f(a))}function v(A){const C=document.querySelector(".dropdown-menu"),E=document.querySelector(".dropdown-trigger"),S=A.target;C&&!C.contains(S)&&!E?.contains(S)&&y(a,!1)}Jt(()=>(document.addEventListener("click",v),()=>{document.removeEventListener("click",v)}));var b=GI(),g=d(b),w=d(g),k=d(w);k.__click=()=>l("/");var I=h(k,2);{var P=A=>{var C=zI(),E=d(C),S=d(E,!0);c(E),c(C),L(()=>_(S,t())),x(A,C)};F(I,A=>{t()&&A(P)})}c(w);var $=h(w,2),N=d($);{var q=A=>{var C=HI(),E=de(C),S=d(E);S.__click=()=>l("/post/list");var O=d(S);uo(O,{size:16});var M=h(O,2),H=d(M,!0);c(M),c(S);var X=h(S,2);X.__click=()=>l("/chat/list");var V=d(X);gs(V,{size:16});var le=h(V,2),ue=d(le,!0);c(le),c(X);var te=h(X,2);te.__click=()=>l("/user/list");var fe=d(te);Ho(fe,{size:16});var Z=h(fe,2),W=d(Z,!0);c(Z),c(te);var z=h(te,2),Y=d(z);Y.__click=m;var re=d(Y),J=d(re);{var D=Se=>{var Pe=UI();L(()=>Ee(Pe,"src",Ue.data.photoUrl)),x(Se,Pe)},G=Se=>{var Pe=FI(),ze=d(Pe,!0);c(Pe),L(Ke=>_(ze,Ke),[p]),x(Se,Pe)};F(J,Se=>{Ue.data?.photoUrl?Se(D):Se(G,!1)})}c(re);var ce=h(re,2),K=d(ce,!0);c(ce),c(Y);var se=h(Y,2);{var U=Se=>{var Pe=jI(),ze=d(Pe),Ke=d(ze,!0);c(ze);var Le=h(ze,4);Le.__click=()=>l("/user/profile");var vt=d(Le);ks(vt,{size:16});var ct=h(vt,2),Ze=d(ct,!0);c(ct),c(Le);var j=h(Le,4);j.__click=u;var B=d(j);a_(B,{size:16});var Ae=h(B,2),ee=d(Ae,!0);c(Ae),c(j),c(Pe),L((ve,ke,Ie)=>{_(Ke,ve),_(Ze,ke),_(ee,Ie)},[()=>s()("내계정"),()=>s()("프로필수정"),()=>s()("로그아웃")]),x(Se,Pe)};F(se,Se=>{f(a)&&Se(U)})}c(z);var ie=h(z,2);ie.__click=()=>l("/menu");var oe=d(ie);ho(oe,{size:24}),c(ie),c(E);var xe=h(E,2),he=d(xe);he.__click=()=>l("/post/list");var ge=d(he);uo(ge,{size:20}),c(he);var Ce=h(he,2);Ce.__click=()=>l("/user/list");var Te=d(Ce);Ho(Te,{size:20}),c(Ce);var qe=h(Ce,2);qe.__click=()=>l("/chat/list");var je=d(qe);gs(je,{size:20}),c(qe);var He=h(qe,2);He.__click=()=>l("/user/profile");var We=d(He),Ge=d(We);{var Qe=Se=>{var Pe=BI();L(ze=>{Ee(Pe,"src",Ue.data.photoUrl),Ee(Pe,"alt",ze)},[()=>s()("프로필")]),x(Se,Pe)},lt=Se=>{var Pe=VI(),ze=d(Pe,!0);c(Pe),L(Ke=>_(ze,Ke),[p]),x(Se,Pe)};F(Ge,Se=>{Ue.data?.photoUrl?Se(Qe):Se(lt,!1)})}c(We),c(He);var ut=h(He,2);ut.__click=()=>l("/menu");var pt=d(ut);ho(pt,{size:24}),c(ut),c(xe),L((Se,Pe,ze,Ke,Le,vt,ct,Ze,j)=>{_(H,Se),_(ue,Pe),_(W,ze),_(K,Ue.data?.displayName||Ue.email),Ee(ie,"title",Ke),Ee(he,"title",Le),Ee(Ce,"title",vt),Ee(qe,"title",ct),Ee(He,"title",Ze),Ee(ut,"title",j)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("사용자찾기"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("사용자찾기"),()=>s()("채팅"),()=>s()("프로필"),()=>s()("메뉴")]),x(A,C)},T=A=>{var C=WI(),E=de(C),S=d(E);S.__click=()=>l("/post/list");var O=d(S);uo(O,{size:16});var M=h(O,2),H=d(M,!0);c(M),c(S);var X=h(S,2);X.__click=()=>l("/chat/list");var V=d(X);gs(V,{size:16});var le=h(V,2),ue=d(le,!0);c(le),c(X);var te=h(X,2);te.__click=()=>l("/user/login");var fe=d(te,!0);c(te);var Z=h(te,2);Z.__click=()=>l("/menu");var W=d(Z);ho(W,{size:20}),c(Z),c(E);var z=h(E,2),Y=d(z);Y.__click=()=>l("/post/list");var re=d(Y);uo(re,{size:20}),c(Y);var J=h(Y,2);J.__click=()=>l("/chat/list");var D=d(J);gs(D,{size:20}),c(J);var G=h(J,2);G.__click=()=>l("/user/login");var ce=d(G);ks(ce,{size:20}),c(G);var K=h(G,2);K.__click=()=>l("/menu");var se=d(K);ho(se,{size:24}),c(K),c(z),L((U,ie,oe,xe,he,ge,Ce,Te)=>{_(H,U),_(ue,ie),_(fe,oe),Ee(Z,"title",xe),Ee(Y,"title",he),Ee(J,"title",ge),Ee(G,"title",Ce),Ee(K,"title",Te)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴")]),x(A,C)};F(N,A=>{n()?A(q):A(T,!1)})}c($),c(g),c(b),x(r,b),at(),o()}xt(["click"]);customElements.define("sns-topbar",be(YI,{},[],[],!0));var QI=R('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>'),XI=R('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>',1),JI=R("<option> </option>"),ZI=R('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const eT={hash:"svelte-najsij",code:`
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

  /* 언어 설정 섹션 */.language-section.svelte-najsij {margin-top:1.5rem;padding-top:1rem;border-top:1px solid #e5e7eb;}.language-compact.svelte-najsij {display:flex;align-items:center;gap:0.75rem;}.language-label.svelte-najsij {font-size:0.85rem;font-weight:600;color:#374151;white-space:nowrap;}.language-select.svelte-najsij {flex:1;padding:0.45rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;background-color:#ffffff;color:#111827;font-size:0.85rem;font-weight:500;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 0.75rem center;background-size:12px 8px;cursor:pointer;}.language-select.svelte-najsij:focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.15);}

  /* 빌드 정보 */.build-info.svelte-najsij {margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e7eb;font-size:0.75rem;color:#6b7280;}.build-row.svelte-najsij {display:flex;align-items:center;justify-content:space-between;}.build-timestamp.svelte-najsij {font-family:'Courier New', monospace;}

  /* Copyleft 정보 */.copyleft.svelte-najsij {margin-top:1rem;text-align:center;font-size:0.75rem;color:#6b7280;}.copyleft.svelte-najsij p:where(.svelte-najsij) {line-height:1.5;}

  /* 반응형: 모바일에서는 숨김 */
  @media (max-width: 768px) {.sidebar.svelte-najsij {display:none;}
  }`};function tT(r,e){ot(e,!1),nt(r,eT);const t=()=>Je(qt,"$t",i),n=()=>Je(ha,"$user",i),s=()=>Je(nh,"$locale",i),[i,o]=$t(),a=__;fr();var l=ZI(),u=d(l),p=d(u),m=d(p,!0);c(p);var v=h(p,2),b=d(v);b.__click=()=>or("/");var g=d(b);s_(g,{size:20});var w=h(g,2),k=d(w,!0);c(w),c(b);var I=h(b,2);I.__click=()=>or("/chat/room");var P=d(I);gs(P,{size:20});var $=h(P,2),N=d($,!0);c($),c(I);var q=h(I,2);q.__click=()=>or("/user/list");var T=d(q);Ho(T,{size:20});var A=h(T,2),C=d(A,!0);c(A),c(q);var E=h(q,2);E.__click=()=>or("/user/profile");var S=d(E);ks(S,{size:20});var O=h(S,2),M=d(O,!0);c(O),c(E);var H=h(E,2);H.__click=()=>or("/post/list");var X=d(H);eh(X,{size:20});var V=h(X,2),le=d(V,!0);c(V),c(H),c(v);var ue=h(v,4),te=d(ue),fe=d(te,!0);c(te);var Z=h(te,2),W=d(Z);{var z=Re=>{var we=QI();we.__click=()=>or("/user/profile");var me=d(we);ks(me,{size:16});var Be=h(me,2),ht=d(Be,!0);c(Be),c(we),L(ft=>_(ht,ft),[()=>t()("회원정보수정")]),x(Re,we)},Y=Re=>{var we=XI(),me=de(we);me.__click=()=>or("/auth/login");var Be=d(me);o_(Be,{size:16});var ht=h(Be,2),ft=d(ht,!0);c(ht),c(me);var It=h(me,2);It.__click=()=>or("/auth/signup");var Ve=d(It);ks(Ve,{size:16});var bt=h(Ve,2),At=d(bt,!0);c(bt),c(It),L((Xe,Ht)=>{_(ft,Xe),_(At,Ht)},[()=>t()("로그인"),()=>t()("회원가입")]),x(Re,we)};F(W,Re=>{n()?Re(z):Re(Y,!1)})}c(Z),c(ue);var re=h(ue,4),J=d(re);J.__click=()=>or("/user/list");var D=d(J);Ho(D,{size:16});var G=h(D,2),ce=d(G,!0);c(G),c(J);var K=h(J,2),se=h(d(K),2),U=d(se,!0);c(se);var ie=h(se,2);_d(ie,{size:12,class:"external-icon"}),c(K);var oe=h(K,2),xe=d(oe);gs(xe,{size:16});var he=h(xe,2),ge=d(he,!0);c(he);var Ce=h(he,2);_d(Ce,{size:12,class:"external-icon"}),c(oe);var Te=h(oe,2);Te.__click=()=>or("/dev/history");var qe=d(Te);e_(qe,{size:16});var je=h(qe,2),He=d(je,!0);c(je),c(Te);var We=h(Te,2);We.__click=()=>or("/dev/sed");var Ge=d(We);m_(Ge,{size:16});var Qe=h(Ge,2),lt=d(Qe,!0);c(Qe),c(We),c(re);var ut=h(re,2),pt=d(ut),Se=d(pt,!0);c(pt);var Pe=h(pt,2),ze=d(Pe),Ke=h(ze,2);Ke.__change=Re=>qI(Re.currentTarget.value),nr(Ke,5,()=>a,yn,(Re,we)=>{var me=JI(),Be=d(me,!0);c(me);var ht={};L(()=>{_(Be,f(we).label),ht!==(ht=f(we).code)&&(me.value=(me.__value=f(we).code)??"")}),x(Re,me)}),c(Ke);var Le;qd(Ke),c(Pe),c(ut);var vt=h(ut,2),ct=d(vt),Ze=d(ct),j=d(Ze,!0);c(Ze);var B=h(Ze,2),Ae=d(B,!0);c(B),c(ct),c(vt);var ee=h(vt,2),ve=d(ee),ke=d(ve,!0),Ie=h(ke,2);c(ve),c(ee),c(u),c(l),L((Re,we,me,Be,ht,ft,It,Ve,bt,At,Xe,Ht,Gt,Zt,Lr,Lt,er,Tt)=>{_(m,Re),_(k,we),_(N,me),_(C,Be),_(M,ht),_(le,ft),_(fe,It),_(ce,Ve),_(U,bt),_(ge,At),_(He,Xe),_(lt,Ht),_(Se,Gt),Ee(ze,"aria-label",Zt),Le!==(Le=s())&&(Ke.value=(Ke.__value=s())??"",$o(Ke,s())),_(j,Lr),_(Ae,Lt),_(ke,er),_(Ie,` ${Tt??""}`)},[()=>t()("퀵메뉴"),()=>t()("홈"),()=>t()("채팅"),()=>t()("사용자목록"),()=>t()("내프로필"),()=>t()("게시판"),()=>t()("시작하기"),()=>t()("회원목록"),()=>t()("프로젝트GitHub"),()=>t()("한바보참여단톡방"),()=>t()("개발일지"),()=>t()("바이브코딩SED"),()=>t()("언어설정"),()=>t()("언어설정"),()=>t()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>t()("카피레프트"),()=>t()("AI소개")]),x(r,l),at(),o()}xt(["click","change"]);customElements.define("sns-left-sidebar",be(tT,{},[],[],!0));var rT=R('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const nT={hash:"svelte-3epon2",code:`\r
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
  }`};function sT(r,e){ot(e,!0),nt(r,nT);const t=()=>Je(qt,"$t",n),[n,s]=$t();let i=ne(hr({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=rT(),a=d(o),l=d(a),u=d(l,!0);c(l);var p=h(l,2),m=d(p),v=d(m),b=d(v);ks(b,{size:20}),c(v);var g=h(v,2),w=d(g),k=d(w,!0);c(w);var I=h(w,2),P=d(I,!0);c(I),c(g),c(m);var $=h(m,2),N=d($),q=d(N);v_(q,{size:20}),c(N);var T=h(N,2),A=d(T),C=d(A,!0);c(A);var E=h(A,2),S=d(E,!0);c(E),c(T),c($);var O=h($,2),M=d(O),H=d(M);eh(H,{size:20}),c(M);var X=h(M,2),V=d(X),le=d(V,!0);c(V);var ue=h(V,2),te=d(ue,!0);c(ue);var fe=h(ue,2),Z=d(fe,!0);c(fe),c(X),c(O);var W=h(O,2),z=d(W),Y=d(z);gs(Y,{size:20}),c(z);var re=h(z,2),J=d(re),D=d(J,!0);c(J);var G=h(J,2),ce=d(G,!0);c(G),c(re),c(W),c(p);var K=h(p,2),se=d(K,!0);c(K),c(a),c(o),L((U,ie,oe,xe,he,ge,Ce)=>{_(u,U),_(k,ie),_(P,f(i).totalUsers),_(C,oe),_(S,f(i).totalScore),_(le,xe),_(te,f(i).totalPosts),_(Z,he),_(D,ge),_(ce,f(i).totalMessages),_(se,Ce)},[()=>t()("통계"),()=>t()("전체사용자"),()=>t()("전체점수"),()=>t()("전체글"),()=>t()("준비중"),()=>t()("채팅메시지"),()=>t()("통계실시간업데이트")]),x(r,o),at(),s()}customElements.define("sns-right-sidebar",be(sT,{},[],[],!0));var iT=R('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const oT={hash:"svelte-um1xbq",code:`\r
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
  /* 모바일 화면 (768px 미만): 좌우 여백 최소화 */\r
  @media (max-width: 767px) {.main-content.svelte-um1xbq {padding:1.5rem 0; /* 상하만 여백, 좌우는 0 */}\r
  }\r
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
  }`};function aT(r,e){nt(r,oT);var t=iT(),n=d(t),s=h(n,2),i=d(s);rr(i,1,"left-sidebar svelte-um1xbq");var o=h(i,2),a=d(o);_t(a,e,"default",{}),c(o);var l=h(o,2);rr(l,1,"right-sidebar svelte-um1xbq"),c(s),c(t),x(r,t)}customElements.define("sns-layout",be(aT,{},["default"],[],!0));var lT=R('<div class="icon-container svelte-m3h71q"> </div>'),cT=R('<p class="hint-box svelte-m3h71q"> </p>'),dT=R('<p class="gpl-box svelte-m3h71q"> </p>'),uT=R('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),hT=R('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),fT=R('<div class="accordion svelte-m3h71q"></div>');const pT={hash:"svelte-m3h71q",code:`\r
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
  }`};function vT(r,e){ot(e,!0),nt(r,pT);let t=Fe(e,"items",7,"[]"),n=Fe(e,"type",7,"single"),s=Fe(e,"collapsible",7,!0),i=Rn(()=>{try{const v=typeof t()=="string"?JSON.parse(t()):t();return Array.isArray(v)?v:[]}catch(v){return console.error("Failed to parse accordion items:",v),[]}}),o=Rn(()=>{const v=s();return typeof v=="boolean"?v:typeof v=="string"?v!=="false":!0}),a=ne(hr(new Set));function l(v){const b=new Set(f(a));n()==="single"?b.has(v)?f(o)&&b.delete(v):(b.clear(),b.add(v)):b.has(v)?b.delete(v):b.add(v),y(a,b,!0)}function u(v){return f(a).has(v)}var p={get items(){return t()},set items(v="[]"){t(v),Oe()},get type(){return n()},set type(v="single"){n(v),Oe()},get collapsible(){return s()},set collapsible(v=!0){s(v),Oe()}},m=fT();return nr(m,21,()=>f(i),yn,(v,b,g)=>{var w=hT(),k=d(w);k.__click=()=>l(g);var I=d(k),P=d(I);{var $=O=>{var M=lT(),H=d(M,!0);c(M),L(()=>_(H,f(b).icon)),x(O,M)};F(P,O=>{f(b).icon&&O($)})}var N=h(P,2),q=d(N,!0);c(N),c(I);var T=h(I,2);let A;var C=d(T);Zu(C,{size:20}),c(T),c(k);var E=h(k,2);{var S=O=>{var M=uT(),H=d(M),X=d(H,!0);c(H);var V=h(H,2);{var le=fe=>{var Z=cT(),W=d(Z,!0);c(Z),L(()=>_(W,f(b).hint)),x(fe,Z)};F(V,fe=>{f(b).hint&&fe(le)})}var ue=h(V,2);{var te=fe=>{var Z=dT(),W=d(Z,!0);c(Z),L(()=>_(W,f(b).gpl)),x(fe,Z)};F(ue,fe=>{f(b).gpl&&fe(te)})}c(M),L(()=>_(X,f(b).content)),x(O,M)};F(E,O=>{u(g)&&O(S)})}c(w),L((O,M)=>{Ee(k,"aria-expanded",O),_(q,f(b).title),A=rr(T,1,"chevron svelte-m3h71q",null,A,M)},[()=>u(g),()=>({"rotate-180":u(g)})]),x(v,w)}),c(m),x(r,m),at(p)}xt(["click"]);customElements.define("sns-accordion",be(vT,{items:{},type:{},collapsible:{}},[],[],!0));var mT=R('<h2 id="alert-title" class="alert-title svelte-1vwaezm"> </h2>'),gT=R('<p id="alert-message" class="alert-message svelte-1vwaezm"> </p>'),_T=R('<div class="alert-backdrop svelte-1vwaezm"><div role="alertdialog" aria-modal="true" aria-labelledby="alert-title" aria-describedby="alert-message"><button class="alert-close-btn svelte-1vwaezm" aria-label="닫기" type="button"><!></button> <div class="alert-icon svelte-1vwaezm"><!></div> <!> <!> <button class="alert-confirm-btn svelte-1vwaezm" type="button"> </button></div></div>');const bT={hash:"svelte-1vwaezm",code:`\r
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
  }`};function wT(r,e){ot(e,!0),nt(r,bT);let t=null,n=Fe(e,"open",7,"false"),s=Fe(e,"type",7,"info"),i=Fe(e,"title",7,""),o=Fe(e,"message",7,""),a=Fe(e,"confirmText",7,"확인"),l=Fe(e,"onconfirm",7),u=Fe(e,"onclose",7);const p=Rn(()=>n()==="true"||n()==="");function m(N){switch(N){case"success":return cl;case"error":return n_;case"info":return bd;case"warning":return p_;default:return bd}}function v(N){return`alert-${N}`}function b(N){l()&&l()();const q=new CustomEvent("confirm",{bubbles:!0,composed:!0}),T=e.$$host;T&&T.dispatchEvent(q)}function g(N){u()&&u()();const q=new CustomEvent("close",{bubbles:!0,composed:!0}),T=e.$$host;T&&T.dispatchEvent(q)}function w(N){N.target===N.currentTarget&&g()}Bs(()=>{if(f(p)&&t)return document.body.appendChild(t),()=>{t&&document.body.contains(t)&&document.body.removeChild(t)}});var k={get open(){return n()},set open(N="false"){n(N),Oe()},get type(){return s()},set type(N="info"){s(N),Oe()},get title(){return i()},set title(N=""){i(N),Oe()},get message(){return o()},set message(N=""){o(N),Oe()},get confirmText(){return a()},set confirmText(N="확인"){a(N),Oe()},get onconfirm(){return l()},set onconfirm(N){l(N),Oe()},get onclose(){return u()},set onclose(N){u(N),Oe()}},I=_e(),P=de(I);{var $=N=>{var q=_T();q.__click=w;var T=d(q),A=d(T);A.__click=g;var C=d(A);Fl(C,{size:20}),c(A);var E=h(A,2),S=d(E);M0(S,()=>m(s()),(ue,te)=>{te(ue,{size:48,strokeWidth:2})}),c(E);var O=h(E,2);{var M=ue=>{var te=mT(),fe=d(te,!0);c(te),L(()=>_(fe,i())),x(ue,te)};F(O,ue=>{i()&&ue(M)})}var H=h(O,2);{var X=ue=>{var te=gT(),fe=d(te,!0);c(te),L(()=>_(fe,o())),x(ue,te)};F(H,ue=>{o()&&ue(X)})}var V=h(H,2);V.__click=b;var le=d(V,!0);c(V),c(T),c(q),Qo(q,ue=>t=ue,()=>t),L(ue=>{rr(T,1,`alert-dialog ${ue??""}`,"svelte-1vwaezm"),_(le,a())},[()=>v(s())]),x(N,q)};F(P,N=>{f(p)&&N($)})}return x(r,I),at(k)}xt(["click"]);customElements.define("alert-dialog",be(wT,{open:{},type:{},title:{},message:{},confirmText:{},onconfirm:{},onclose:{}},[],[],!1));var yT=R('<div class="uid-section svelte-1uta475"><div class="uid-label svelte-1uta475">현재 사용자 UID</div> <div class="uid-value svelte-1uta475"> </div></div> <div class="menu-divider svelte-1uta475"></div>',1),xT=R('<button class="account-button svelte-1uta475" role="menuitem"><span class="account-label svelte-1uta475"> </span> <span class="account-phone svelte-1uta475"> </span></button>'),kT=R('<div class="test-fab-menu svelte-1uta475" role="menu"><div class="menu-header svelte-1uta475"><span class="menu-title svelte-1uta475">테스트 도구</span></div> <div class="menu-divider svelte-1uta475"></div> <!> <div class="menu-section svelte-1uta475"><div class="section-title svelte-1uta475"><!> <span>테스트 계정 로그인</span></div> <div class="account-list svelte-1uta475"></div></div> <div class="menu-divider svelte-1uta475"></div> <button class="menu-button svelte-1uta475" role="menuitem"><!> <span>서버 정보 보기</span></button> <div class="menu-divider svelte-1uta475"></div> <div class="version-info svelte-1uta475"><p class="version-label svelte-1uta475">빌드 버전</p> <p class="version-value svelte-1uta475"> </p></div></div>'),ET=R('<div class="modal-overlay svelte-1uta475" role="dialog" aria-modal="true" aria-labelledby="server-info-title" tabindex="-1"><div class="modal-content svelte-1uta475"><h2 id="server-info-title" class="modal-title svelte-1uta475">서버 정보</h2> <div class="info-list svelte-1uta475"><div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">환경:</span> <span class="info-value svelte-1uta475"> </span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Svelte:</span> <span class="info-value svelte-1uta475">5.43.2</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Vite:</span> <span class="info-value svelte-1uta475">6.x</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Firebase:</span> <span class="info-value svelte-1uta475">설정됨</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">프로젝트 ID:</span> <span class="info-value info-value-small svelte-1uta475"> </span></div></div> <button class="modal-close-button svelte-1uta475">닫기</button></div></div>'),CT=R('<div class="test-fab-container svelte-1uta475"><button aria-label="테스트 도구 열기"><!></button> <!></div> <!>',1);const IT={hash:"svelte-1uta475",code:`
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

  /* reCAPTCHA 컨테이너 숨김 */`};function TT(r,e){ot(e,!0),nt(r,IT);const t=[{label:"A",name:"apple",email:"apple@test.com"},{label:"B",name:"banana",email:"banana@test.com"},{label:"C",name:"cherry",email:"cherry@test.com"},{label:"D",name:"durian",email:"durian@test.com"},{label:"E",name:"elderberry",email:"elderberry@test.com"},{label:"F",name:"fig",email:"fig@test.com"},{label:"G",name:"grape",email:"grape@test.com"},{label:"H",name:"honeydew",email:"honeydew@test.com"}],n="12345a,*";let s=ne(!1),i=ne(!1),o=ne(!1),a=ne(null);const l=Date.now(),u=new Date(l).toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),p="withcenter-test-5";Jt(()=>{console.log("TestFab 컴포넌트가 마운트되었습니다.");const C=tu(Sn,E=>{y(a,E,!0),console.log("Auth 상태 변경:",E?`로그인됨 (UID: ${E.uid})`:"로그아웃됨")});return()=>{C()}});async function m(C){if(!f(o)){y(o,!0),console.log(`${C.name} (${C.label}) 계정으로 로그인을 시도합니다...`);try{let E;try{E=await G2(Sn,C.email,n),console.log(`${C.name} 계정으로 로그인 성공!`)}catch(S){if(S.code==="auth/user-not-found"||S.code==="auth/invalid-credential")console.log(`${C.name} 계정이 없습니다. 회원가입을 진행합니다...`),E=await W2(Sn,C.email,n),await am(E.user,{displayName:C.name}),console.log(`${C.name} 계정 회원가입 및 로그인 성공!`);else throw S}alert(`${C.name} (${C.label}) 계정으로 로그인되었습니다.`),y(s,!1),window.location.href="/"}catch(E){console.error("로그인 오류:",E);let S="로그인에 실패했습니다.";E.code==="auth/invalid-email"?S="잘못된 이메일 형식입니다.":E.code==="auth/wrong-password"?S="비밀번호가 일치하지 않습니다.":E.code==="auth/too-many-requests"?S="너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.":E.code==="auth/weak-password"?S="비밀번호가 너무 약합니다.":E.code==="auth/email-already-in-use"&&(S="이미 사용 중인 이메일입니다."),alert(S+`
오류 코드: `+E.code)}finally{y(o,!1)}}}function v(){y(s,!f(s))}function b(){y(i,!f(i)),y(s,!1)}function g(C){const E=C.target;!E.closest(".test-fab-menu")&&!E.closest(".test-fab-button")&&y(s,!1)}var w=CT();Pn("click",Dc,g);var k=de(w),I=d(k);let P;I.__click=v;var $=d(I);h_($,{size:24}),c(I);var N=h(I,2);{var q=C=>{var E=kT(),S=h(d(E),4);{var O=W=>{var z=yT(),Y=de(z),re=h(d(Y),2),J=d(re,!0);c(re),c(Y),Mr(2),L(()=>_(J,f(a).uid)),x(W,z)};F(S,W=>{f(a)&&W(O)})}var M=h(S,2),H=d(M),X=d(H);ks(X,{size:16}),Mr(2),c(H);var V=h(H,2);nr(V,21,()=>t,W=>W.label,(W,z)=>{var Y=xT();Y.__click=()=>m(f(z));var re=d(Y),J=d(re,!0);c(re);var D=h(re,2),G=d(D,!0);c(D),c(Y),L(()=>{Y.disabled=f(o),_(J,f(z).label),_(G,f(z).name)}),x(W,Y)}),c(V),c(M);var le=h(M,4);le.__click=b;var ue=d(le);u_(ue,{size:16}),Mr(2),c(le);var te=h(le,4),fe=h(d(te),2),Z=d(fe,!0);c(fe),c(te),c(E),L(()=>_(Z,u)),x(C,E)};F(N,C=>{f(s)&&C(q)})}c(k);var T=h(k,2);{var A=C=>{var E=ET();E.__click=b;var S=d(E);S.__click=fe=>fe.stopPropagation();var O=h(d(S),2),M=d(O),H=h(d(M),2),X=d(H,!0);c(H),c(M);var V=h(M,8),le=h(d(V),2),ue=d(le,!0);c(le),c(V),c(O);var te=h(O,2);te.__click=b,c(S),c(E),L(()=>{_(X,"production"),_(ue,p)}),x(C,E)};F(T,C=>{f(i)&&C(A)})}L(()=>{P=rr(I,1,"test-fab-button svelte-1uta475",null,P,{loading:f(o)}),I.disabled=f(o)}),x(r,w),at()}xt(["click"]);customElements.define("test-fab",be(TT,{},[],[],!1));function sh(r,e){const{subscribe:t,set:n}=Zs({data:e??null,loading:!0,error:null}),s=St(Et,r);return da(s,i=>{const o=i.val();n({data:o!==null?o:e??null,loading:!1,error:null}),console.log(`✅ 실시간 데이터 로드 성공: ${r}`,o!==null?o:e??null)},i=>{console.error(`❌ 실시간 데이터 로드 실패: ${r}`,i),n({data:e??null,loading:!1,error:i})}),{subscribe:t,set:n,update:i=>{throw new Error("직접 업데이트는 지원하지 않습니다. Firebase를 통해 데이터를 변경하세요.")},unsubscribe:()=>ju(s)}}const y_=sh;function ST(r){if(!r)return"error.unknown";const e={"auth/invalid-email":"error.auth.invalidEmail","auth/user-disabled":"error.auth.userDisabled","auth/user-not-found":"error.auth.userNotFound","auth/wrong-password":"error.auth.wrongPassword","auth/email-already-in-use":"error.auth.emailAlreadyInUse","auth/weak-password":"error.auth.weakPassword","auth/operation-not-allowed":"error.auth.operationNotAllowed","auth/too-many-requests":"error.auth.tooManyRequests","auth/invalid-verification-code":"error.auth.invalidVerificationCode","auth/invalid-phone-number":"error.auth.invalidPhoneNumber","auth/missing-verification-code":"error.auth.missingVerificationCode","auth/session-expired":"error.auth.sessionExpired","auth/requires-recent-login":"error.auth.requiresRecentLogin","auth/credential-already-in-use":"error.auth.credentialAlreadyInUse"},t={PERMISSION_DENIED:"error.db.permissionDenied","permission-denied":"error.db.permissionDenied","network-error":"error.db.networkError",offline:"error.offline","authentication-required":"error.db.authenticationRequired",disconnected:"error.offline",unavailable:"error.db.networkError"},n={"storage/unauthorized":"error.storage.unauthorized","storage/bucket-not-found":"error.storage.bucketNotFound","storage/invalid-argument":"error.storage.invalidArgument","storage/object-not-found":"error.storage.objectNotFound","storage/retry-limit-exceeded":"error.storage.retryLimitExceeded","storage/quota-exceeded":"error.storage.quotaExceeded","storage/canceled":"error.storage.canceled"};return e[r]?e[r]:t[r]?t[r]:n[r]?n[r]:r.includes("network")||r.includes("offline")?"error.network":r.toLowerCase().includes("permission")?"error.db.permissionDenied":"error.unknown"}function kr(r,e="unknown"){if(!r)return console.error(`[${e}] 에러 객체가 없습니다.`),{key:"error.unknown",code:null,message:"No error object provided",context:e};const t=r;let n=t.code??null;if(!n&&t.message){const i=t.message.match(/\(([^)]+)\)/);i&&i[1]&&(n=i[1])}return console.error(`[${e}] Firebase 에러:`,{code:n,message:t.message,stack:t.stack,originalError:r}),{key:ST(n),code:n,message:t.message||"Unknown error",context:e}}async function AT(r,e,t,n,s,i){try{const o=Date.now(),a=`${r}-${o}`,l={uid:e,title:n,content:s,author:t,category:r,order:a,createdAt:o,updatedAt:o,likeCount:0,commentCount:0};i&&i.length>0&&(l.urls=i);const u=St(Et,"posts");return{success:!0,postId:(await Vo(u,l)).key||void 0}}catch(o){const a=kr(o,"createPost");return{success:!1,error:a.key,errorMessage:a.message}}}async function RT(r,e){try{const t=St(Et,`posts/${r}`),n=await gn(t);if(!n.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const s=n.val();if(s.commentCount&&s.commentCount>0)return{success:!1,error:"댓글이달려있어수정불가",errorMessage:"Cannot edit post with comments"};const i={...e,updatedAt:Date.now()};return await ls(t,i),{success:!0}}catch(t){const n=kr(t,"updatePost");return{success:!1,error:n.key,errorMessage:n.message}}}async function PT(r){try{const e=St(Et,`posts/${r}`),t=await gn(e);if(!t.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const n=t.val();return n.commentCount&&n.commentCount>0?{success:!1,error:"댓글이달려있어삭제불가",errorMessage:"Cannot delete post with comments"}:(await Pg(e),{success:!0})}catch(e){const t=kr(e,"deletePost");return{success:!1,error:t.key,errorMessage:t.message}}}const fp=["community","qna","news","market"];function yd(r){let e=r;const t=r.lastIndexOf("-");if(t!==-1&&t<r.length-1){const n=r.substring(t+1);/^\d/.test(n)&&(e=n)}return e.split(",").map(n=>parseInt(n,10))}function x_(r,e){const t=e.map((n,s)=>s===0?String(n).padStart(5,"0"):s===1?String(n).padStart(4,"0"):String(n).padStart(3,"0")).join(",");return`${r}-${t}`}function NT(){return Array(12).fill(0)}async function $T(r){const{postId:e,userId:t,content:n,urls:s}=r;try{const i=Date.now(),o=St(Et,"comments"),a=Sr(o,Tr("order"),sn(`${e}-`),qs(`${e}-z`)),l=await gn(a);let u=0;l.exists()&&l.forEach(I=>{const P=I.val();if(P.depth===1&&P.order){const N=yd(P.order)[0];N!==void 0&&N>u&&(u=N)}});const p=u+1,m=NT();m[0]=p;const v=x_(e,m),b={postId:e,uid:t,content:n,depth:1,order:v,parentId:null,createdAt:i,updatedAt:i};s&&s.length>0&&(b.urls=s);const w=Vo(o).key;if(!w)throw new Error("Failed to generate comment ID");const k={};return k[`comments/${w}`]=b,await ls(St(Et),k),{success:!0,commentId:w}}catch(i){const o=kr(i,"createTopLevelComment");return{success:!1,error:o.key,errorMessage:o.message}}}async function LT(r){const{parentCommentId:e,userId:t,content:n,urls:s}=r;try{const i=St(Et,`comments/${e}`),o=await gn(i);if(!o.exists())return{success:!1,error:"error.comment.parentNotFound",errorMessage:"Parent comment not found"};const a=o.val(),l=a.depth||1,u=a.order||"",p=a.postId,m=l+1;if(m>12)return{success:!1,error:"error.comment.maxDepthExceeded",errorMessage:"Maximum comment depth exceeded (12)"};const v=yd(u),b=St(Et,"comments"),g=Sr(b,Tr("order"),sn(`${p}-`),qs(`${p}-z`)),w=await gn(g);let k=0;w.exists()&&w.forEach(E=>{const S=E.val();if(S.parentId===e&&S.order){const M=yd(S.order)[m-1];M!==void 0&&M>k&&(k=M)}});const I=k+1,P=[...v];P[m-1]=I;const $=x_(p,P),N=Date.now(),q={postId:p,uid:t,content:n,depth:m,order:$,parentId:e,createdAt:N,updatedAt:N};s&&s.length>0&&(q.urls=s);const A=Vo(b).key;if(!A)throw new Error("Failed to generate comment ID");const C={};return C[`comments/${A}`]=q,await ls(St(Et),C),{success:!0,commentId:A}}catch(i){const o=kr(i,"createChildComment");return{success:!1,error:o.key,errorMessage:o.message}}}function DT(r,e){try{const t=St(Et,"comments"),n=Sr(t,Tr("order"),sn(`${r}-`),qs(`${r}-z`));return da(n,s=>{if(s.exists()){const i=[];s.forEach(o=>{i.push({commentId:o.key,...o.val()})}),e(i)}else e([])}),()=>{ju(t)}}catch(t){return console.error("댓글 조회 실패:",t),e([]),()=>{}}}async function OT(r,e){try{const t=St(Et,`comments/${r}`),n=await gn(t);if(!n.exists())return{success:!1,error:"error.comment.notFound",errorMessage:"Comment not found"};if((n.val().commentCount||0)>0)return{success:!1,error:"댓글이달려있어수정불가",errorMessage:"Cannot update comment with child comments"};const o=Date.now(),a={};return a[`comments/${r}/content`]=e.content,a[`comments/${r}/updatedAt`]=o,e.urls!==void 0&&(e.urls.length>0?a[`comments/${r}/urls`]=e.urls:a[`comments/${r}/urls`]=null),await ls(St(Et),a),{success:!0,commentId:r}}catch(t){const n=kr(t,"updateComment");return{success:!1,error:n.key,errorMessage:n.message}}}async function MT(r){try{const e=St(Et,`comments/${r}`),t=await gn(e);return t.exists()?(t.val().commentCount||0)>0?{success:!1,error:"댓글이달려있어삭제불가",errorMessage:"Cannot delete comment with child comments"}:(await ls(St(Et),{[`comments/${r}`]:null}),{success:!0,commentId:r}):{success:!1,error:"error.comment.notFound",errorMessage:"Comment not found"}}catch(e){const t=kr(e,"deleteComment");return{success:!1,error:t.key,errorMessage:t.message}}}async function qT(r,e,t){try{const n=e.startsWith("-")?e.substring(1):e,s={};return s[`likes/${r}-${n}-${t}`]=1,await ls(St(Et),s),{success:!0}}catch(n){const s=kr(n,"addLike");return{success:!1,error:s.key,errorMessage:s.message}}}async function zT(r,e,t){try{const n=e.startsWith("-")?e.substring(1):e,s={};return s[`likes/${r}-${n}-${t}`]=null,await ls(St(Et),s),{success:!0}}catch(n){const s=kr(n,"removeLike");return{success:!1,error:s.key,errorMessage:s.message}}}async function UT(r,e,t){try{const n=e.startsWith("-")?e.substring(1):e,s=St(Et,`likes/${r}-${n}-${t}`);return(await gn(s)).exists()}catch(n){return console.error("좋아요 상태 확인 실패:",n),!1}}async function k_(r,e,t){try{const n=await UT(r,e,t);let s;return n?s=await zT(r,e,t):s=await qT(r,e,t),s.success?{success:!0,isLiked:!n}:{success:!1,isLiked:n,error:s.error,errorMessage:s.errorMessage}}catch(n){const s=kr(n,"toggleLike");return{success:!1,isLiked:!1,error:s.key,errorMessage:s.message}}}console.log("SNS Web Components 로드됨 ✅");var FT=R('<div class="gpl-badge svelte-1ubq0t6"> </div>'),jT=R('<div class="hint svelte-1ubq0t6"> </div>'),BT=R('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),VT=R('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),HT=R('<div class="todo-description svelte-1ubq0t6"> </div>'),WT=R('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),GT=R('<div class="todo-subitems svelte-1ubq0t6"></div>'),KT=R('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),YT=R('<span class="badge svelte-1ubq0t6"> </span>'),QT=R('<div class="home svelte-1ubq0t6"><div class="hero-card svelte-1ubq0t6"><div class="hero-overlay svelte-1ubq0t6"></div> <div class="hero-content svelte-1ubq0t6"><a class="hero-badge-link svelte-1ubq0t6" href="/dev/history"><span class="hero-badge svelte-1ubq0t6"> </span> <span class="hero-badge-text svelte-1ubq0t6"> </span></a> <h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p> <div class="hero-actions svelte-1ubq0t6"><a class="hero-button primary svelte-1ubq0t6" href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer">🚀 단톡방 참여하기</a> <a class="hero-button ghost svelte-1ubq0t6" href="/help">📚 프로젝트 가이드 보기</a> <a class="hero-button ghost svelte-1ubq0t6" href="/dev/sed">🧠 신개념 바이브코딩 - SED</a></div></div></div> <section class="techstack-section svelte-1ubq0t6"><div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const XT={hash:"svelte-1ubq0t6",code:`
  /* 홈 컨테이너 */.home.svelte-1ubq0t6 {max-width:100%;padding:0;}

  /* 히어로 카드 */.hero-card.svelte-1ubq0t6 {position:relative;overflow:hidden;display:grid;gap:1.75rem;max-width:54rem;margin:0 auto 2.5rem;padding:2.25rem 2.5rem;background:linear-gradient(135deg, #f5f3ff 0%, #e0f2fe 100%);border-radius:1.75rem;border:1px solid rgba(99, 102, 241, 0.15);box-shadow:0 25px 50px -12px rgba(59, 130, 246, 0.25);}.hero-card.svelte-1ubq0t6::before,
  .hero-card.svelte-1ubq0t6::after {content:"";position:absolute;border-radius:9999px;filter:blur(45px);opacity:0.45;z-index:0;}.hero-card.svelte-1ubq0t6::before {width:280px;height:280px;top:-120px;right:-80px;background:radial-gradient(
      circle,
      rgba(59, 130, 246, 0.5) 0%,
      rgba(59, 130, 246, 0) 70%
    );}.hero-card.svelte-1ubq0t6::after {width:220px;height:220px;bottom:-120px;left:-60px;background:radial-gradient(
      circle,
      rgba(14, 165, 233, 0.5) 0%,
      rgba(14, 165, 233, 0) 70%
    );}.hero-overlay.svelte-1ubq0t6 {position:absolute;inset:0;background:linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.55) 0%,
      rgba(255, 255, 255, 0) 45%
    );backdrop-filter:blur(6px);z-index:0;}.hero-content.svelte-1ubq0t6 {position:relative;z-index:1;display:grid;gap:0.9rem;}.hero-badge-link.svelte-1ubq0t6 {display:inline-flex;align-items:center;gap:0.5rem;width:fit-content;padding:0.35rem 0.85rem 0.35rem 0.45rem;border-radius:9999px;background:rgba(255, 255, 255, 0.72);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.45);border:1px solid rgba(99, 102, 241, 0.15);text-decoration:none;color:inherit;transition:all 0.25s ease;}.hero-badge-link.svelte-1ubq0t6:hover {transform:translateY(-1px);box-shadow:0 10px 20px rgba(59, 130, 246, 0.15);}.hero-badge.svelte-1ubq0t6 {display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:32px;border-radius:9999px;background:linear-gradient(135deg, #4338ca 0%, #6366f1 100%);color:#ffffff;font-size:0.75rem;font-weight:700;}.hero-badge-text.svelte-1ubq0t6 {font-size:0.75rem;font-weight:600;color:#3730a3;letter-spacing:0.05em;text-transform:uppercase;}.hero-actions.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:0.6rem;}.hero-button.svelte-1ubq0t6 {display:inline-flex;align-items:center;gap:0.5rem;padding:0.75rem 1.5rem;border-radius:9999px;font-size:0.95rem;font-weight:600;text-decoration:none;transition:transform 0.2s ease,
      box-shadow 0.2s ease;}.hero-button.primary.svelte-1ubq0t6 {color:#ffffff;background:linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);box-shadow:0 15px 30px -10px rgba(79, 70, 229, 0.45);}.hero-button.primary.svelte-1ubq0t6:hover {transform:translateY(-2px);box-shadow:0 18px 32px -12px rgba(99, 102, 241, 0.55);}.hero-button.ghost.svelte-1ubq0t6 {color:#4338ca;background:rgba(255, 255, 255, 0.75);border:1px solid rgba(99, 102, 241, 0.2);box-shadow:0 12px 25px -14px rgba(59, 130, 246, 0.45);}.hero-button.ghost.svelte-1ubq0t6:hover {transform:translateY(-2px);background:rgba(255, 255, 255, 0.92);}

  /* 기술 스택 섹션 */.techstack-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);border:1px solid #d1d5db;padding:1.25rem;margin-bottom:3rem;border-radius:1rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.08);transition:all 0.3s ease;}.techstack-section.svelte-1ubq0t6:hover {box-shadow:0 8px 16px rgba(0, 0, 0, 0.1);}.techstack-grid.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:flex-start;}.techstack-item.svelte-1ubq0t6 {display:flex;flex-direction:column;align-items:center;text-align:center;padding:0.625rem 0.75rem;background:white;border-radius:0.5rem;box-shadow:0 1px 2px rgba(0, 0, 0, 0.06);transition:all 0.2s ease;border:1px solid #f0f0f0;flex:0 1 auto;min-width:145px;text-decoration:none;color:inherit;}.techstack-item.svelte-1ubq0t6:hover {transform:translateY(-1px);box-shadow:0 3px 6px rgba(0, 0, 0, 0.08);border-color:#e5e7eb;}.techstack-icon.svelte-1ubq0t6 {font-size:1.5rem;margin-bottom:0.3rem;display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);}.techstack-icon.svelte-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);}.techstack-icon.flutter-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);}.techstack-icon.firebase-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);}.techstack-icon.dokplay-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);}.techstack-name.svelte-1ubq0t6 {font-size:0.825rem;font-weight:700;color:#111827;margin:0 0 0.1rem 0;}.techstack-description.svelte-1ubq0t6 {font-size:0.65rem;color:#6b7280;line-height:1.3;margin:0;}.hero-title.svelte-1ubq0t6 {font-size:2rem;font-weight:800;margin:0;color:#1e1b4b;line-height:1.3;}.hero-description.svelte-1ubq0t6 {font-size:0.95rem;color:#475569;line-height:1.6;margin:0;}.hero-link.svelte-1ubq0t6 {color:#2563eb;text-decoration:none;font-weight:600;}.hero-link.svelte-1ubq0t6:hover {color:#1d4ed8;text-decoration:underline;}

  @media (max-width: 640px) {.hero-card.svelte-1ubq0t6 {max-width:100%;margin:0 0 2rem;padding:1.75rem 1.4rem;gap:1.5rem;}.hero-content.svelte-1ubq0t6 {gap:0.75rem;}.hero-badge-text.svelte-1ubq0t6 {display:none;}.hero-title.svelte-1ubq0t6 {font-size:1.7rem;line-height:1.35;}.hero-description.svelte-1ubq0t6 {font-size:0.95rem;}.hero-actions.svelte-1ubq0t6 {flex-direction:column;align-items:stretch;}.hero-button.svelte-1ubq0t6 {justify-content:center;width:100%;}

  }

  /* 섹션 */.section.svelte-1ubq0t6 {margin-bottom:3rem;padding:2rem;background:white;border-radius:1rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.08);border:1px solid #e5e7eb;transition:all 0.3s ease;}.section.svelte-1ubq0t6:hover {box-shadow:0 8px 16px rgba(0, 0, 0, 0.1);}.section-title.svelte-1ubq0t6 {font-size:1.875rem;font-weight:700;margin:0 0 1.5rem 0;color:#111827;display:flex;align-items:center;gap:0.75rem;}

  /* 아코디언 */.accordion.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:0.625rem;}.accordion-item.svelte-1ubq0t6 {border:1px solid #e5e7eb;border-radius:0.625rem;overflow:hidden;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);background:white;}.accordion-item.svelte-1ubq0t6:hover {border-color:#d1d5db;box-shadow:0 4px 12px rgba(102, 126, 234, 0.08);transform:translateY(-1px);}.accordion-trigger.svelte-1ubq0t6 {width:100%;display:flex;justify-content:space-between;align-items:center;padding:0.95rem 1.25rem;background:linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);border:none;cursor:pointer;font-size:0.95rem;font-weight:600;color:#111827;text-align:left;transition:all 0.25s ease;}.accordion-trigger.svelte-1ubq0t6:hover {background:linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);}.accordion-trigger[aria-expanded="true"].svelte-1ubq0t6 {background:linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);}.accordion-title.svelte-1ubq0t6 {flex:1;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.accordion-icon.svelte-1ubq0t6 {display:flex;color:#9ca3af;transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);margin-left:0.75rem;}.accordion-icon.open.svelte-1ubq0t6 {transform:rotate(180deg);color:#667eea;}.accordion-content.svelte-1ubq0t6 {padding:0 1.25rem 1.25rem 1.25rem;color:#374151;line-height:1.7;
    animation: svelte-1ubq0t6-slideDown 0.3s ease-out;background:#fafbfc;}

  @keyframes svelte-1ubq0t6-slideDown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 500px;
    }
  }.accordion-content.svelte-1ubq0t6 p:where(.svelte-1ubq0t6) {margin:0 0 0.75rem 0;}.gpl-badge.svelte-1ubq0t6 {display:inline-block;margin-top:0.875rem;padding:0.5rem 0.875rem;background:linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);border:1px solid #86efac;border-radius:0.5rem;font-size:0.8125rem;font-weight:600;color:#166534;box-shadow:0 2px 4px rgba(34, 197, 94, 0.1);}.hint.svelte-1ubq0t6 {margin-top:0.875rem;padding:0.75rem 1rem;background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);border-left:4px solid #667eea;border-radius:0.5rem;font-size:0.8125rem;color:#1e3a8a;line-height:1.6;box-shadow:0 2px 4px rgba(102, 126, 234, 0.08);}

  /* TODO 리스트 */.todo-list.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:1rem;}.todo-item.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:0.5rem;}.todo-main.svelte-1ubq0t6 {display:flex;align-items:flex-start;gap:0.75rem;}.todo-icon.svelte-1ubq0t6 {display:flex;color:#9ca3af;margin-top:0.125rem;flex-shrink:0;}.todo-icon.completed.svelte-1ubq0t6 {color:#10b981;}.todo-content.svelte-1ubq0t6 {flex:1;}.todo-label.svelte-1ubq0t6 {font-size:1rem;font-weight:600;color:#111827;line-height:1.5;}.todo-label.completed.svelte-1ubq0t6 {color:#6b7280;text-decoration:line-through;}.todo-description.svelte-1ubq0t6 {font-size:0.875rem;color:#6b7280;margin-top:0.25rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:2rem;display:flex;flex-direction:column;gap:0.5rem;}.todo-subitem.svelte-1ubq0t6 {display:flex;align-items:center;gap:0.5rem;}.todo-subicon.svelte-1ubq0t6 {display:flex;color:#9ca3af;flex-shrink:0;}.todo-subicon.completed.svelte-1ubq0t6 {color:#10b981;}.todo-subtext.svelte-1ubq0t6 {font-size:0.875rem;color:#374151;}.todo-subtext.completed.svelte-1ubq0t6 {color:#9ca3af;text-decoration:line-through;}

  /* 프로젝트 개요 */.overview-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:1px solid #bae6fd;}.overview-text.svelte-1ubq0t6 {font-size:1.125rem;color:#374151;line-height:1.7;margin:0 0 1.5rem 0;}.overview-text.svelte-1ubq0t6 strong:where(.svelte-1ubq0t6) {color:#3b82f6;font-weight:700;}.badges.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;}.badge.svelte-1ubq0t6 {display:inline-block;padding:0.5rem 1rem;background:white;border:1px solid #93c5fd;border-radius:9999px;font-size:0.875rem;font-weight:500;color:#1e40af;box-shadow:0 2px 4px rgba(59, 130, 246, 0.1);}

  /* AI 변화 섹션 */.change-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);border:1px solid #fcd34d;}.change-description.svelte-1ubq0t6 {font-size:1.125rem;color:#374151;line-height:1.7;margin:0 0 1rem 0;}.change-emphasis.svelte-1ubq0t6 {font-size:1.125rem;color:#78350f;line-height:1.7;margin:0 0 1rem 0;}.change-highlight.svelte-1ubq0t6 {color:#b45309;font-weight:700;text-decoration:underline;}

  /* 사용자 정보 섹션 */

  /* 반응형 */
  @media (max-width: 768px) {.hero-title.svelte-1ubq0t6 {font-size:2rem;}.section.svelte-1ubq0t6 {padding:1.5rem;}.section-title.svelte-1ubq0t6 {font-size:1.5rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:1.5rem;}.techstack-grid.svelte-1ubq0t6 {justify-content:center;gap:0.5rem;}.techstack-item.svelte-1ubq0t6 {min-width:130px;padding:0.5rem 0.625rem;}.techstack-icon.svelte-1ubq0t6 {width:32px;height:32px;font-size:1.35rem;margin-bottom:0.2rem;}.techstack-name.svelte-1ubq0t6 {font-size:0.75rem;}.techstack-description.svelte-1ubq0t6 {font-size:0.6rem;}
  }

  @media (max-width: 640px) {.hero-title.svelte-1ubq0t6 {font-size:1.75rem;}.hero-description.svelte-1ubq0t6 {font-size:1rem;}.section.svelte-1ubq0t6 {padding:1rem;}.section-title.svelte-1ubq0t6 {font-size:1.25rem;}.accordion-trigger.svelte-1ubq0t6 {padding:0.875rem 1rem;font-size:0.9375rem;}.accordion-content.svelte-1ubq0t6 {padding:0 1rem 1rem 1rem;font-size:0.9375rem;}.badges.svelte-1ubq0t6 {gap:0.5rem;}.badge.svelte-1ubq0t6 {font-size:0.8125rem;padding:0.375rem 0.75rem;}
  }`};function E_(r,e){ot(e,!0),nt(r,XT);const t=()=>Je(qt,"$t",n),[n,s]=$t();let i=ne(null);function o(ke){y(i,f(i)===ke?null:ke,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]},{labelKey:"home.todo.item8.label",descriptionKey:"home.todo.item8.description",completed:!1,subitems:[{key:"home.todo.item8.subitem1",completed:!1},{key:"home.todo.item8.subitem2",completed:!1},{key:"home.todo.item8.subitem3",completed:!1},{key:"home.todo.item8.subitem4",completed:!1}]}],u=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var p=QT(),m=d(p),v=h(d(m),2),b=d(v),g=d(b),w=d(g);c(g);var k=h(g,2),I=d(k,!0);c(k),c(b);var P=h(b,2),$=d(P,!0);c(P);var N=h(P,2),q=d(N),T=h(q),A=d(T,!0);c(T);var C=h(T);c(N),Mr(2),c(v),c(m);var E=h(m,2),S=d(E),O=d(S),M=h(d(O),2),H=d(M,!0);c(M);var X=h(M,2),V=d(X,!0);c(X),c(O);var le=h(O,2),ue=h(d(le),2),te=d(ue,!0);c(ue);var fe=h(ue,2),Z=d(fe,!0);c(fe),c(le);var W=h(le,2),z=h(d(W),2),Y=d(z,!0);c(z);var re=h(z,2),J=d(re,!0);c(re),c(W);var D=h(W,2),G=h(d(D),2),ce=d(G,!0);c(G);var K=h(G,2),se=d(K,!0);c(K),c(D),c(S),c(E);var U=h(E,2),ie=d(U),oe=d(ie,!0);c(ie);var xe=h(ie,2);nr(xe,21,()=>a,yn,(ke,Ie)=>{var Re=VT(),we=d(Re);we.__click=()=>o(f(Ie).id);var me=d(we),Be=d(me,!0);c(me);var ht=h(me,2);let ft;var It=d(ht);Zu(It,{size:20}),c(ht),c(we);var Ve=h(we,2);{var bt=At=>{var Xe=BT(),Ht=d(Xe),Gt=d(Ht,!0);c(Ht);var Zt=h(Ht,2);{var Lr=Tt=>{var Q=FT(),pe=d(Q,!0);c(Q),L(De=>_(pe,De),[()=>t()("home.aiTruth.item3.gpl")]),x(Tt,Q)};F(Zt,Tt=>{f(Ie).showGpl&&Tt(Lr)})}var Lt=h(Zt,2);{var er=Tt=>{var Q=jT(),pe=d(Q,!0);c(Q),L(De=>_(pe,De),[()=>t()(f(Ie).hintKey)]),x(Tt,Q)};F(Lt,Tt=>{f(Ie).hintKey&&Tt(er)})}c(Xe),L(Tt=>_(Gt,Tt),[()=>t()(f(Ie).contentKey)]),x(At,Xe)};F(Ve,At=>{f(i)===f(Ie).id&&At(bt)})}c(Re),L(At=>{Ee(we,"aria-expanded",f(i)===f(Ie).id),_(Be,At),ft=rr(ht,1,"accordion-icon svelte-1ubq0t6",null,ft,{open:f(i)===f(Ie).id})},[()=>t()(f(Ie).titleKey)]),x(ke,Re)}),c(xe),c(U);var he=h(U,2),ge=d(he),Ce=d(ge,!0);c(ge);var Te=h(ge,2);nr(Te,21,()=>l,yn,(ke,Ie)=>{var Re=KT(),we=d(Re),me=d(we);let Be;var ht=d(me);{var ft=Lt=>{cl(Lt,{size:20})},It=Lt=>{gd(Lt,{size:20})};F(ht,Lt=>{f(Ie).completed?Lt(ft):Lt(It,!1)})}c(me);var Ve=h(me,2),bt=d(Ve);let At;var Xe=d(bt,!0);c(bt);var Ht=h(bt,2);{var Gt=Lt=>{var er=HT(),Tt=d(er,!0);c(er),L(Q=>_(Tt,Q),[()=>t()(f(Ie).descriptionKey)]),x(Lt,er)};F(Ht,Lt=>{f(Ie).descriptionKey&&Lt(Gt)})}c(Ve),c(we);var Zt=h(we,2);{var Lr=Lt=>{var er=GT();nr(er,21,()=>f(Ie).subitems,yn,(Tt,Q)=>{var pe=WT(),De=d(pe);let mt;var wt=d(De);{var _r=Rt=>{cl(Rt,{size:16})},tr=Rt=>{gd(Rt,{size:16})};F(wt,Rt=>{f(Q).completed?Rt(_r):Rt(tr,!1)})}c(De);var Wt=h(De,2);let zt;var Ut=d(Wt,!0);c(Wt),c(pe),L(Rt=>{mt=rr(De,1,"todo-subicon svelte-1ubq0t6",null,mt,{completed:f(Q).completed}),zt=rr(Wt,1,"todo-subtext svelte-1ubq0t6",null,zt,{completed:f(Q).completed}),_(Ut,Rt)},[()=>t()(f(Q).key)]),x(Tt,pe)}),c(er),x(Lt,er)};F(Zt,Lt=>{f(Ie).subitems.length>0&&Lt(Lr)})}c(Re),L(Lt=>{Be=rr(me,1,"todo-icon svelte-1ubq0t6",null,Be,{completed:f(Ie).completed}),At=rr(bt,1,"todo-label svelte-1ubq0t6",null,At,{completed:f(Ie).completed}),_(Xe,Lt)},[()=>t()(f(Ie).labelKey)]),x(ke,Re)}),c(Te),c(he);var qe=h(he,2),je=d(qe),He=d(je,!0);c(je);var We=h(je,2),Ge=d(We),Qe=d(Ge),lt=d(Qe,!0);c(Qe);var ut=h(Qe,1,!0);c(Ge);var pt=h(Ge,2);nr(pt,21,()=>u,yn,(ke,Ie)=>{var Re=YT(),we=d(Re,!0);c(Re),L(me=>_(we,me),[()=>t()(f(Ie))]),x(ke,Re)}),c(pt),c(We),c(qe);var Se=h(qe,2),Pe=d(Se),ze=d(Pe,!0);c(Pe);var Ke=h(Pe,2),Le=d(Ke),vt=d(Le,!0);c(Le);var ct=h(Le,2),Ze=d(ct),j=h(Ze),B=d(j,!0);c(j);var Ae=h(j,1,!0);c(ct);var ee=h(ct,2),ve=d(ee,!0);c(ee),c(Ke),c(Se),c(p),L((ke,Ie,Re,we,me,Be,ht,ft,It,Ve,bt,At,Xe,Ht,Gt,Zt,Lr,Lt,er,Tt,Q,pe,De,mt,wt)=>{_(w,`✨ ${ke??""}`),_(I,Ie),_($,Re),_(q,`${we??""} `),_(A,me),_(C,` ${Be??""}`),_(H,ht),_(V,ft),_(te,It),_(Z,Ve),_(Y,bt),_(J,At),_(ce,Xe),_(se,Ht),_(oe,Gt),_(Ce,Zt),_(He,Lr),_(lt,Lt),_(ut,er),_(ze,Tt),_(vt,Q),_(Ze,`${pe??""} `),_(B,De),_(Ae,mt),_(ve,wt)},[()=>t()("home.vibeBanner"),()=>t()("home.overview.badge3"),()=>t()("home.title"),()=>t()("home.description.part1"),()=>t()("home.description.linkText"),()=>t()("home.description.part2"),()=>t()("home.techStack.svelte"),()=>t()("home.techStack.svelteDesc"),()=>t()("home.techStack.flutter"),()=>t()("home.techStack.flutterDesc"),()=>t()("home.techStack.firebase"),()=>t()("home.techStack.firebaseDesc"),()=>t()("home.techStack.dokplay"),()=>t()("home.techStack.dokplayDesc"),()=>t()("home.aiTruth.title"),()=>t()("home.todo.title"),()=>t()("home.overview.title"),()=>t()("home.overview.brand"),()=>t()("home.overview.description"),()=>t()("home.aiChange.title"),()=>t()("home.aiChange.description"),()=>t()("home.aiChange.emphasis"),()=>t()("home.aiChange.highlight"),()=>t()("home.aiChange.conclusion"),()=>t()("home.aiChange.hint")]),x(r,p),at(),s()}xt(["click"]);be(E_,{},[],[],!0);var JT=R('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx"> </p> <phone-login></phone-login></div>',2),ZT=R('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx"> </h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx"> </a></div>'),eS=R('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const tS={hash:"svelte-1mz53xx",code:`\r
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
  }`};function C_(r,e){ot(e,!1),nt(r,tS);const t=()=>Je(qt,"$t",s),n=()=>Je(ha,"$user",s),[s,i]=$t();function o(b){console.log("Login successful:",b.detail),alert(t()("로그인성공알림",{phone:b.detail.phoneNumber})),window.location.href="/"}function a(b){console.error("Login error:",b.detail),alert(t()("로그인실패",{error:b.detail.error}))}fr();var l=eS(),u=d(l),p=d(u);{var m=b=>{var g=JT(),w=d(g),k=d(w,!0);c(w);var I=h(w,2),P=d(I,!0);c(I);var $=h(I,2);c(g),L((N,q)=>{_(k,N),_(P,q)},[()=>t()("로그인"),()=>t()("전화번호로로그인")]),Pn("login-success",$,o),Pn("login-error",$,a),x(b,g)},v=b=>{var g=ZT(),w=d(g),k=d(w,!0);c(w);var I=h(w,2),P=d(I,!0);c(I);var $=h(I,2),N=d($,!0);c($),c(g),L((q,T,A)=>{_(k,q),_(P,T),_(N,A)},[()=>t()("웰컴"),()=>t()("로그인하셨습니다",{phone:n().phoneNumber}),()=>t()("홈으로이동")]),x(b,g)};F(p,b=>{n()?b(v,!1):b(m)})}c(u),c(l),x(r,l),at(),i()}be(C_,{},[],[],!0);var rS=R('<button class="menu-item svelte-163o8b2"> </button>'),nS=R('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2"> </p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const sS={hash:"svelte-163o8b2",code:`\r
  /* 메뉴 컨테이너 */.menu-container.svelte-163o8b2 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}\r
\r
  /* 메뉴 카드 */.menu-card.svelte-163o8b2 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}\r
\r
  /* 메뉴 설명 */.menu-description.svelte-163o8b2 {margin:0 0 1.5rem 0;font-size:0.95rem;color:#6b7280;}\r
\r
  /* 메뉴 목록 */.menu-list.svelte-163o8b2 {display:flex;flex-direction:column;gap:0.5rem;}\r
\r
  /* 메뉴 항목 버튼 */.menu-item.svelte-163o8b2 {padding:0.75rem 1rem;background-color:#f3f4f6;border:1px solid #e5e7eb;border-radius:0.375rem;font-size:0.95rem;color:#111827;cursor:pointer;transition:all 0.2s ease;text-align:left;}.menu-item.svelte-163o8b2:hover {background-color:#e5e7eb;border-color:#d1d5db;transform:translateX(4px);}.menu-item.svelte-163o8b2:active {background-color:#d1d5db;}\r
\r
  /* 반응형 */\r
  @media (max-width: 640px) {.menu-card.svelte-163o8b2 {padding:1.5rem;}\r
  }`};function I_(r,e){ot(e,!0),nt(r,sS);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("메뉴"))});let i=Rn(()=>[{label:t()("홈"),path:"/"},{label:t()("로그인"),path:"/user/login"},{label:t()("사용자프로필"),path:"/user/profile"},{label:t()("게시물목록"),path:"/post/list"},{label:t()("게시물상세예시"),path:"/post/detail/123"},{label:t()("채팅목록"),path:"/chat/list"},{label:t()("설정"),path:"/settings"},{label:t()("관리자"),path:"/admin"},{label:t()("관리자_신고_목록"),path:"/admin/reports"},{label:t()("내_신고_목록"),path:"/my/reports"},{label:t()("정보"),path:"/about"},{label:t()("도움말"),path:"/help"},{label:t()("이용약관"),path:"/terms"},{label:t()("개인정보"),path:"/privacy"},{label:t()("문의하기"),path:"/contact"},{label:t()("개발일지"),path:"/dev/history"},{label:t()("바이브코딩SED"),path:"/dev/sed"},{label:t()("테스트게시글생성"),path:"/dev/generate-posts"}]);var o=nS(),a=d(o),l=d(a),u=d(l,!0);c(l);var p=h(l,2);nr(p,21,()=>f(i),m=>m.path,(m,v)=>{var b=rS();b.__click=()=>or(f(v).path);var g=d(b,!0);c(b),L(()=>_(g,f(v).label)),x(m,b)}),c(p),c(a),c(o),L(m=>_(u,m),[()=>t()("페이지선택")]),x(r,o),at(),s()}xt(["click"]);be(I_,{},[],[],!0);var iS=R('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),oS=R('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3"> </span></div>'),aS=R('<button type="button" class="photo-remove-button svelte-17u94r3"><!></button>'),lS=R('<p class="upload-status svelte-17u94r3"> </p>'),cS=R('<div class="message-box success-message svelte-17u94r3"> </div>'),dS=R('<div class="message-box error-message svelte-17u94r3"> </div>'),uS=R('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3"> </label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3"> </p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName"> </label> <input type="text" id="displayName" class="form-input svelte-17u94r3" maxlength="50" required/> <p class="form-helper svelte-17u94r3"> </p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender"> </label> <select id="gender" class="form-select svelte-17u94r3"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth"> </label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3"> </p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3"> </button></div></form></div>');const hS={hash:"svelte-17u94r3",code:`
  /* ============================================================================
     페이지 컨테이너
     ============================================================================ */.profile-container.svelte-17u94r3 {width:100%;max-width:600px;margin:0 auto;padding:2rem 1rem;}

  /* ============================================================================
     폼 스타일
     ============================================================================ */.profile-form.svelte-17u94r3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}

  /* ============================================================================
     폼 섹션
     ============================================================================ */.form-section.svelte-17u94r3 {margin-bottom:2rem;}.form-section.svelte-17u94r3:last-of-type {margin-bottom:1.5rem;}

  /* ============================================================================
     폼 라벨
     ============================================================================ */.form-label.svelte-17u94r3 {display:block;font-weight:600;color:#111827;margin-bottom:0.75rem;font-size:0.95rem;}

  /* ============================================================================
     프로필 사진 섹션
     ============================================================================ */.photo-area.svelte-17u94r3 {display:flex;flex-direction:column;align-items:center;gap:0.75rem;}.photo-wrapper.svelte-17u94r3 {position:relative;width:180px;height:180px;}.photo-trigger.svelte-17u94r3 {width:100%;height:100%;border-radius:50%;border:none;box-shadow:0 0 0 4px #e5e7eb;background-color:transparent;display:flex;align-items:center;justify-content:center;overflow:hidden;cursor:pointer;position:relative;transition:transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;}.photo-trigger.svelte-17u94r3:hover:not(:disabled) {transform:scale(1.01);border-color:#2563eb;box-shadow:0 8px 20px rgba(37, 99, 235, 0.25);}.photo-trigger.svelte-17u94r3:focus-visible {outline:3px solid #2563eb;outline-offset:4px;}.photo-trigger.svelte-17u94r3:disabled {cursor:not-allowed;opacity:0.7;}.photo-image.svelte-17u94r3 {position:absolute;inset:0;border-radius:50%;background-size:cover;background-position:center;background-repeat:no-repeat;}.photo-placeholder.svelte-17u94r3 {position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.3rem;color:#6b7280;border-radius:50%;background-color:#f3f4f6;}.placeholder-icon.svelte-17u94r3 {font-size:2.5rem;}.placeholder-text.svelte-17u94r3 {font-size:0.9rem;}.camera-badge.svelte-17u94r3 {position:absolute;bottom:16px;right:16px;transform:translate(40%, 40%);width:42px;height:42px;border-radius:9999px;background-color:#0f172a;color:#ffffff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 18px rgba(15, 23, 42, 0.3);pointer-events:none;}.photo-remove-button.svelte-17u94r3 {position:absolute;top:18px;right:18px;transform:translate(50%, -50%);width:44px;height:44px;border-radius:9999px;background-color:#ef4444;color:#ffffff;border:none;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 26px rgba(239, 68, 68, 0.35);cursor:pointer;}.photo-remove-button.svelte-17u94r3:hover:not(:disabled) {background-color:#dc2626;}.photo-remove-button.svelte-17u94r3:disabled {cursor:not-allowed;opacity:0.6;}.photo-instruction.svelte-17u94r3 {margin-top:0.25rem;color:#4b5563;font-size:0.95rem;text-align:center;}.upload-status.svelte-17u94r3 {margin-top:0.75rem;color:#2563eb;font-size:0.875rem;}

  /* ============================================================================
     입력 필드 & 선택박스
     ============================================================================ */.form-input.svelte-17u94r3,
  .form-select.svelte-17u94r3 {width:100%;padding:0.75rem;border:1px solid #d1d5db;border-radius:0.375rem;font-size:0.95rem;color:#111827;box-sizing:border-box;transition:border-color 0.2s, box-shadow 0.2s;}.form-input.svelte-17u94r3:focus,
  .form-select.svelte-17u94r3:focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}.form-input.svelte-17u94r3:disabled,
  .form-select.svelte-17u94r3:disabled {background-color:#f3f4f6;color:#9ca3af;cursor:not-allowed;}

  /* ============================================================================
     폼 헬퍼 텍스트
     ============================================================================ */.form-helper.svelte-17u94r3 {margin:0.5rem 0 0 0;font-size:0.8rem;color:#6b7280;}

  /* ============================================================================
     메시지 박스
     ============================================================================ */.message-box.svelte-17u94r3 {padding:1rem;border-radius:0.375rem;margin-bottom:1.5rem;font-size:0.95rem;}.success-message.svelte-17u94r3 {background-color:#d1fae5;border:1px solid #6ee7b7;color:#065f46;}.error-message.svelte-17u94r3 {background-color:#fee2e2;border:1px solid #fca5a5;color:#7f1d1d;}

  /* ============================================================================
     버튼 스타일
     ============================================================================ */.btn-primary.svelte-17u94r3,
  .btn-secondary.svelte-17u94r3 {padding:0.75rem 1.5rem;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s, opacity 0.2s;}.btn-primary.svelte-17u94r3 {background-color:#3b82f6;color:#ffffff;}.btn-primary.svelte-17u94r3:hover:not(:disabled) {background-color:#2563eb;}.btn-secondary.svelte-17u94r3 {background-color:#e5e7eb;color:#111827;}.btn-secondary.svelte-17u94r3:hover:not(:disabled) {background-color:#d1d5db;}.btn-primary.svelte-17u94r3:disabled,
  .btn-secondary.svelte-17u94r3:disabled {opacity:0.5;cursor:not-allowed;}

  /* 큰 버튼 */.btn-large.svelte-17u94r3 {width:100%;padding:1rem;font-size:1rem;}

  /* ============================================================================
     버튼 그룹
     ============================================================================ */.form-buttons.svelte-17u94r3 {display:flex;gap:1rem;flex-wrap:wrap;}.form-buttons.svelte-17u94r3 button:where(.svelte-17u94r3) {flex:1;min-width:150px;}

  /* ============================================================================
     반응형 디자인
     ============================================================================ */
  @media (max-width: 640px) {.profile-container.svelte-17u94r3 {padding:1rem 0.75rem;}.profile-form.svelte-17u94r3 {padding:1.5rem;}.form-buttons.svelte-17u94r3 {flex-direction:column;}.form-buttons.svelte-17u94r3 button:where(.svelte-17u94r3) {width:100%;}
  }`};function T_(r,e){ot(e,!0),nt(r,hS);const t=()=>Je(qt,"$t",n),[n,s]=$t();let i=ne(hr({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),o=ne(null),a=ne(null),l=ne(!1),u=ne(!1),p=ne(null),m=ne(null),v=null,b=null;function g(ee){y(p,ee,!0),v&&clearTimeout(v),v=setTimeout(()=>{y(p,null),v=null},3e3)}function w(ee){y(m,ee,!0),b&&clearTimeout(b),b=setTimeout(()=>{y(m,null),b=null},5e3)}mv(()=>{v&&clearTimeout(v),b&&clearTimeout(b)}),Jt(()=>{Hr(t()("프로필수정"))}),Bs(()=>{if(Ue.data){f(i).displayName=Ue.data.displayName||"",f(i).gender=Ue.data.gender||"",f(i).dateOfBirth=Ue.data.dateOfBirth||"";const ee=Ue.data.photoUrl??Ue.data.photoURL??"";f(i).photoUrl=ee,y(o,ee||null,!0)}});function k(){f(u)||f(a)?.click()}async function I(ee){const ke=ee.currentTarget?.files?.[0];if(!ke)return;if(f(u)){w(t()("사진작업진행중"));return}if(!Ue.isAuthenticated||!Ue.uid){w(t()("로그인필요"));return}if(!ke.type.startsWith("image/")){w(t()("이미지파일만가능"));return}if(ke.size>5*1024*1024){w(t()("파일크기5MB제한"));return}const Ie=f(o),Re=f(i).photoUrl,we=new FileReader;we.onload=me=>{const Be=me.target?.result;typeof Be=="string"&&y(o,Be,!0)},we.readAsDataURL(ke);try{await $(ke)}catch{y(o,Ie,!0),f(i).photoUrl=Re,f(a)&&(f(a).value="")}}async function P(){if(f(u))return;if(!Ue.isAuthenticated||!Ue.uid){w(t()("로그인필요"));return}const ee=f(o),ve=f(i).photoUrl;y(o,null),f(i).photoUrl="",f(a)&&(f(a).value="");try{y(u,!0),await Ue.updateProfile({photoUrl:null}),g(t()("프로필사진제거완료"))}catch(ke){console.error("프로필 사진 제거 오류:",ke),w(t()("사진제거실패",{error:ke.message||t()("알수없는오류")})),y(o,ee,!0),f(i).photoUrl=ve}finally{y(u,!1)}}async function $(ee,{showSuccess:ve=!0}={}){if(!Ue.isAuthenticated||!Ue.uid)throw w(t()("로그인필요")),new Error("User is not authenticated");try{y(u,!0);const ke=ee.name.split(".").pop()?.toLowerCase()||"jpg",Ie=`profile_${Ue.uid}_${Date.now()}.${ke}`,Re=Qu(Ju,`users/${Ue.uid}/profile/${Ie}`),we=await QC(Re,ee),me=await Jg(we.ref);return f(i).photoUrl=me,y(o,me,!0),await Ue.updateProfile({photoUrl:me}),ve&&g(t()("프로필사진저장완료")),me}catch(ke){throw console.error("프로필 사진 업로드 오류:",ke),w(t()("사진저장실패",{error:ke.message||t()("알수없는오류")})),ke}finally{y(u,!1),f(a)&&(f(a).value="")}}async function N(ee){ee.preventDefault(),y(l,!0),y(m,null),y(p,null);try{let ve=f(i).photoUrl;const ke=f(a)?.files?.[0];if(ke)try{ve=await $(ke,{showSuccess:!1})}catch{y(l,!1);return}const Ie={displayName:f(i).displayName,gender:f(i).gender,dateOfBirth:f(i).dateOfBirth,photoUrl:ve||null};await Ue.updateProfile(Ie),g(t()("프로필업데이트완료")),console.log("프로필 업데이트 완료:",Ie)}catch(ve){console.error("프로필 업데이트 오류:",ve),w(t()("프로필업데이트실패",{error:ve.message||t()("알수없는오류")}))}finally{y(l,!1)}}function q(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var T=uS(),A=d(T),C=d(A),E=d(C),S=d(E,!0);c(E);var O=h(E,2),M=d(O);M.__change=I,Qo(M,ee=>y(a,ee),()=>f(a));var H=h(M,2),X=d(H);X.__click=k;var V=d(X);{var le=ee=>{var ve=iS();L(()=>wl(ve,`background-image: url("${f(o)}")`)),x(ee,ve)},ue=ee=>{var ve=oS(),ke=h(d(ve),2),Ie=d(ke,!0);c(ke),c(ve),L(Re=>_(Ie,Re),[()=>t()("사진없음")]),x(ee,ve)};F(V,ee=>{f(o)?ee(le):ee(ue,!1)})}c(X);var te=h(X,2);{var fe=ee=>{var ve=aS();ve.__click=P;var ke=d(ve);Fl(ke,{size:18,"stroke-width":3}),c(ve),L(Ie=>{ve.disabled=f(l)||f(u),Ee(ve,"aria-label",Ie)},[()=>t()("프로필사진제거")]),x(ee,ve)};F(te,ee=>{f(o)&&ee(fe)})}var Z=h(te,2),W=d(Z);t_(W,{size:20,"stroke-width":2}),c(Z),c(H);var z=h(H,2),Y=d(z,!0);c(z);var re=h(z,2);{var J=ee=>{var ve=lS(),ke=d(ve,!0);c(ve),L(Ie=>_(ke,Ie),[()=>t()("사진저장중")]),x(ee,ve)};F(re,ee=>{f(u)&&ee(J)})}c(O),c(C);var D=h(C,2),G=d(D),ce=d(G,!0);c(G);var K=h(G,2);Jn(K);var se=h(K,2),U=d(se,!0);c(se),c(D);var ie=h(D,2),oe=d(ie),xe=d(oe,!0);c(oe);var he=h(oe,2),ge=d(he),Ce=d(ge,!0);c(ge),ge.value=ge.__value="";var Te=h(ge),qe=d(Te,!0);c(Te),Te.value=Te.__value="male";var je=h(Te),He=d(je,!0);c(je),je.value=je.__value="female";var We=h(je),Ge=d(We,!0);c(We),We.value=We.__value="other",c(he),c(ie);var Qe=h(ie,2),lt=d(Qe),ut=d(lt,!0);c(lt);var pt=h(lt,2);Jn(pt);var Se=h(pt,2),Pe=d(Se,!0);c(Se),c(Qe);var ze=h(Qe,2);{var Ke=ee=>{var ve=cS(),ke=d(ve);c(ve),L(()=>_(ke,`✅ ${f(p)??""}`)),x(ee,ve)};F(ze,ee=>{f(p)&&ee(Ke)})}var Le=h(ze,2);{var vt=ee=>{var ve=dS(),ke=d(ve);c(ve),L(()=>_(ke,`⚠️ ${f(m)??""}`)),x(ee,ve)};F(Le,ee=>{f(m)&&ee(vt)})}var ct=h(Le,2),Ze=d(ct),j=d(Ze,!0);c(Ze);var B=h(Ze,2);B.__click=q;var Ae=d(B,!0);c(B),c(ct),c(A),c(T),L((ee,ve,ke,Ie,Re,we,me,Be,ht,ft,It,Ve,bt,At,Xe,Ht)=>{_(S,ee),Ee(M,"aria-label",ve),X.disabled=f(l)||f(u),Ee(X,"aria-label",ke),_(Y,Ie),_(ce,Re),Ee(K,"placeholder",we),K.disabled=f(l),_(U,me),_(xe,Be),he.disabled=f(l),_(Ce,ht),_(qe,ft),_(He,It),_(Ge,Ve),_(ut,bt),pt.disabled=f(l),_(Pe,At),Ze.disabled=f(l)||f(u)||!Ue.isAuthenticated,_(j,Xe),B.disabled=f(l),_(Ae,Ht)},[()=>t()("프로필사진"),()=>t()("프로필사진선택"),()=>f(o)?t()("프로필사진변경"):t()("프로필사진추가"),()=>t()("프로필사진클릭변경"),()=>t()("닉네임"),()=>t()("닉네임입력"),()=>t()("닉네임최대50자"),()=>t()("성별"),()=>t()("선택하지않음"),()=>t()("남자"),()=>t()("여자"),()=>t()("기타"),()=>t()("생년월일"),()=>t()("생년월일형식"),()=>f(l)?t()("저장중"):t()("저장"),()=>t()("취소")]),Pn("submit",A,N),hn(K,()=>f(i).displayName,ee=>f(i).displayName=ee),hv(he,()=>f(i).gender,ee=>f(i).gender=ee),hn(pt,()=>f(i).dateOfBirth,ee=>f(i).dateOfBirth=ee),x(r,T),at(),s()}xt(["change","click"]);be(T_,{},[],[],!0);var fS=R('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),pS=R('<div class="loading-container svelte-a4suww"><!></div>'),vS=R('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),mS=R('<div class="error-container svelte-a4suww"><!></div>'),gS=R('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),_S=R('<div class="empty-container svelte-a4suww"><!></div>'),bS=R('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),wS=R('<div class="item-wrapper svelte-a4suww"><!></div>'),yS=R('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),xS=R('<div class="loading-more svelte-a4suww"><!></div>'),kS=R('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),ES=R('<div class="no-more svelte-a4suww"><!></div>'),CS=R('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),IS=R('<div class="database-list-view svelte-a4suww"><!></div>');const TS={hash:"svelte-a4suww",code:`\r
  /* 컨테이너 */.database-list-view.svelte-a4suww {width:100%;\r
    /* height와 overflow는 부모에서 제어하도록 제거 */\r
    /* 이렇게 하면 body 스크롤(window scroll)이 제대로 동작합니다 */\r
    /* 만약 컨테이너 스크롤이 필요하면 부모에서 height와 overflow-y: auto를 설정하세요 */display:flex;flex-direction:column;}\r
\r
  /* 아이템 컨테이너 */.items-container.svelte-a4suww {width:100%;display:flex;flex-direction:column;}\r
\r
  /* 아이템 래퍼 */.item-wrapper.svelte-a4suww {width:100%;}\r
\r
  /* 기본 아이템 스타일 */.default-item.svelte-a4suww {padding:1rem;border-bottom:1px solid #e5e7eb;background-color:#ffffff;}.default-item.svelte-a4suww pre:where(.svelte-a4suww) {margin:0;font-size:0.875rem;white-space:pre-wrap;word-break:break-all;}\r
\r
  /* 로딩 컨테이너 */.loading-container.svelte-a4suww,\r
  .error-container.svelte-a4suww,\r
  .empty-container.svelte-a4suww {display:flex;align-items:center;justify-content:center;min-height:300px;padding:2rem;}\r
\r
  /* 로딩 스피너 */.loading-spinner.svelte-a4suww {display:flex;flex-direction:column;align-items:center;gap:1rem;}.loading-spinner.small.svelte-a4suww {padding:1rem;}.spinner.svelte-a4suww {width:40px;height:40px;border:4px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;\r
    animation: svelte-a4suww-spin 0.8s linear infinite;}.loading-spinner.small.svelte-a4suww .spinner:where(.svelte-a4suww) {width:24px;height:24px;border-width:3px;}\r
\r
  @keyframes svelte-a4suww-spin {\r
    to {\r
      transform: rotate(360deg);\r
    }\r
  }.loading-spinner.svelte-a4suww p:where(.svelte-a4suww) {margin:0;color:#6b7280;font-size:0.875rem;}\r
\r
  /* 더 로드 중 표시 */.loading-more.svelte-a4suww {padding:1rem;text-align:center;}\r
\r
  /* 더 이상 데이터 없음 */.no-more.svelte-a4suww {padding:1.5rem;text-align:center;}.no-more-text.svelte-a4suww {margin:0;color:#9ca3af;font-size:0.875rem;}\r
\r
  /* 빈 상태 메시지 */.empty-message.svelte-a4suww {text-align:center;color:#6b7280;}.empty-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0;font-size:1rem;}\r
\r
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function fa(r,e){ot(e,!0),nt(r,TS);let t=Fe(e,"path",7,""),n=Fe(e,"pageSize",7,10),s=Fe(e,"orderBy",7,"createdAt"),i=Fe(e,"sortPrefix",7,""),o=Fe(e,"threshold",7,300),a=Fe(e,"reverse",7,!1),l=Fe(e,"item",7),u=Fe(e,"loading",7),p=Fe(e,"empty",7),m=Fe(e,"error",7),v=Fe(e,"loadingMore",7),b=Fe(e,"noMore",7),g=ne(hr([])),w=ne(!1),k=ne(!0),I=ne(!0),P=ne(null),$=ne(null),N=ne(0),q=ne(null),T=ne(null),A=new Map,C=new Map,E=null,S=ne(!1),O=null;Bs(()=>(t()&&Et&&le(),()=>{console.log("DatabaseListView: Cleaning up listeners"),E&&(E(),E=null),O&&(O(),O=null),A.forEach(D=>{D()}),A.clear(),console.log("DatabaseListView: All listeners cleaned up")})),Bs(()=>{if(f(T))return f(T).addEventListener("scroll",te),window.addEventListener("scroll",fe),()=>{f(T)?.removeEventListener("scroll",te),window.removeEventListener("scroll",fe)}});function M(D,G){if(D.length===0)return null;const ce=D[D.length-1];if(!ce)return null;const K=ce.data[G];return K!=null&&K!==""?(console.log(`DatabaseListView: Using cursor from '${G}':`,{value:K,key:ce.key}),{value:K,key:ce.key}):(console.error(`DatabaseListView: CRITICAL ERROR - Field '${G}' not found in last item (key: ${ce.key}).`,"This will prevent pagination from working correctly.",`Please ensure all items in '${t()}' have the '${G}' field.`,"Item data:",ce.data),y(q,`데이터 정렬 필드 '${G}'가 누락되었습니다. 데이터베이스 구조를 확인해주세요.`),null)}function H(D,G){const ce=`${D}`;if(A.has(ce))return;const K=St(Et,`${t()}/${D}`),se=da(K,U=>{if(U.exists()){const ie=U.val();f(g)[G]={key:D,data:ie},y(g,[...f(g)],!0),console.log(`DatabaseListView: Item updated ${D}`,ie)}},U=>{console.error(`DatabaseListView: Error listening to item ${D}`,U)});A.set(ce,se)}function X(){E&&(E(),E=null),console.log("DatabaseListView: Setting up child_added listener for",t()),y(S,!1);const D=St(Et,t());let G;i()?(G=Sr(D,Tr(s()),sn(i()),qs(i()+"")),console.log("DatabaseListView: child_added listener with sortPrefix:",i())):(G=Sr(D,Tr(s()),sn(!1)),console.log("DatabaseListView: child_added listener with startAt(false) to filter null/undefined")),E=y5(G,ce=>{if(!f(S))return;const K=ce.key,se=ce.val();if(!K){console.warn("DatabaseListView: Snapshot key is null, skipping");return}if(f(g).some(oe=>oe.key===K)){console.log("DatabaseListView: Child already exists, skipping:",K);return}console.log("DatabaseListView: New child added:",K,se);const ie={key:K,data:se};if(a())y(g,[ie,...f(g)],!0),console.log("DatabaseListView: Added new item to the beginning (reverse mode)"),H(K,0);else{const oe=f(g).length;y(g,[...f(g),ie],!0),console.log("DatabaseListView: Added new item to the end (normal mode)"),H(K,oe)}},ce=>{console.error("DatabaseListView: Error in child_added listener",ce)}),setTimeout(()=>{y(S,!0),console.log("DatabaseListView: child_added listener is now ready to accept new children")},1e3)}function V(){O&&(O(),O=null),console.log("DatabaseListView: Setting up child_removed listener for",t());const D=St(Et,t());let G;i()?(G=Sr(D,Tr(s()),sn(i()),qs(i()+"")),console.log("DatabaseListView: child_removed listener with sortPrefix:",i())):(G=Sr(D,Tr(s()),sn(!1)),console.log("DatabaseListView: child_removed listener with startAt(false)")),O=x5(G,ce=>{const K=ce.key;if(!K){console.warn("DatabaseListView: Removed snapshot key is null, skipping");return}console.log("DatabaseListView: Child removed:",K);const se=f(g).findIndex(U=>U.key===K);if(se!==-1){y(g,f(g).filter(oe=>oe.key!==K),!0),console.log("DatabaseListView: Removed item from list:",K,"(was at index",se,")");const U=`${K}`,ie=A.get(U);ie&&(ie(),A.delete(U),console.log("DatabaseListView: Unsubscribed from removed item:",K))}else console.log("DatabaseListView: Removed item not found in current list:",K)},ce=>{console.error("DatabaseListView: Error in child_removed listener",ce)})}async function le(){console.log("DatabaseListView: Loading initial data from",t(),"(reverse:",a(),")"),y(k,!0),y(q,null),y(g,[],!0),C.clear(),A.forEach(D=>D()),A.clear(),E&&(E(),E=null),y(S,!1),O&&(O(),O=null),y(P,null),y($,null),y(I,!0),y(N,0);try{const D=St(Et,t());let G;a()?i()?(G=Sr(D,Tr(s()),sn(i()),qs(i()+""),ya(n()+1)),console.log("DatabaseListView: Using limitToLast with sortPrefix:",i())):(G=Sr(D,Tr(s()),sn(!1),ya(n()+1)),console.log("DatabaseListView: Using limitToLast with startAt(false) to filter null/undefined")):i()?(G=Sr(D,Tr(s()),sn(i()),qs(i()+""),wa(n()+1)),console.log("DatabaseListView: Using limitToFirst with sortPrefix:",i())):(G=Sr(D,Tr(s()),sn(!1),wa(n()+1)),console.log("DatabaseListView: Using limitToFirst with startAt(false) to filter null/undefined"));const ce=await gn(G);if(ce.exists()){const K=[],se=ce.val();if(Object.entries(se).forEach(([U,ie])=>{K.push({key:U,data:ie})}),console.log(`DatabaseListView: Initial query returned ${K.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",K.map(U=>({key:U.key,[s()]:U.data[s()]}))),a()&&(K.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)")),K.length>n()){y(I,!0),y(g,K.slice(0,n()),!0);const U=M(f(g),s());U?(y(P,U.value,!0),y($,U.key,!0),console.log("DatabaseListView: Next page cursor set:",{lastLoadedValue:f(P),lastLoadedKey:f($)})):y(I,!1)}else if(y(I,!1),y(g,K,!0),f(g).length>0){const U=M(f(g),s());U&&(y(P,U.value,!0),y($,U.key,!0),console.log("DatabaseListView: Last cursor set:",{lastLoadedValue:f(P),lastLoadedKey:f($)}))}C.set(0,f(g)),f(g).forEach((U,ie)=>{H(U.key,ie)}),console.log(`DatabaseListView: Page ${f(N)} - Loaded ${f(g).length} items, hasMore: ${f(I)}`)}else console.log("DatabaseListView: No data found"),y(g,[],!0),y(I,!1)}catch(D){console.error("DatabaseListView: Load error",D),y(q,D instanceof Error?D.message:String(D),!0)}finally{y(k,!1),X(),V()}}async function ue(){if(f(w)||!f(I)){console.log("DatabaseListView: Cannot load more - loading:",f(w),"hasMore:",f(I));return}Lc(N),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${f(N)}`),console.log("DatabaseListView: Current cursor - lastLoadedValue:",f(P),"lastLoadedKey:",f($)),y(w,!0),y(q,null);try{if(f(P)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),y(I,!1),y(w,!1);return}const D=St(Et,t());let G;a()?i()?(G=Sr(D,Tr(s()),ip(f(P)),ya(n()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination with sortPrefix (client-side filtering)")):(G=Sr(D,Tr(s()),ip(f(P)),ya(n()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination (no startAt needed)")):i()?(G=Sr(D,Tr(s()),op(f(P)),wa(n()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination with sortPrefix (client-side filtering)")):(G=Sr(D,Tr(s()),op(f(P)),wa(n()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination (no startAt needed)"));const ce=await gn(G);if(ce.exists()){const K=[],se=ce.val();Object.entries(se).forEach(([he,ge])=>{K.push({key:he,data:ge})}),console.log(`DatabaseListView: Page ${f(N)} - Query returned ${K.length} items from Firebase`),console.log(`DatabaseListView: Page ${f(N)} - Items orderBy values:`,K.map(he=>({key:he.key,[s()]:he.data[s()]})));let U=K;i()&&(U=K.filter(he=>{const ge=he.data[s()];return typeof ge=="string"?ge.startsWith(i()):!1}),console.log(`DatabaseListView: Filtered ${K.length} items to ${U.length} items with sortPrefix "${i()}"`),U.length<K.length&&(console.log("DatabaseListView: Reached end of sortPrefix range, no more items"),y(I,!1))),a()&&(U.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)"));const ie=new Set(f(g).map(he=>he.key)),oe=U.filter(he=>!ie.has(he.key));if(console.log(`DatabaseListView: Page ${f(N)} - After filtering duplicates: ${oe.length} items`),oe.length===0){console.log("DatabaseListView: No more unique items after filtering"),y(I,!1),y(w,!1);return}if(U.length>n()){y(I,!0);const he=oe.slice(0,n());y(g,[...f(g),...he],!0);const ge=M(he,s());ge?(y(P,ge.value,!0),y($,ge.key,!0),console.log("DatabaseListView: Updated cursor for next page:",{lastLoadedValue:f(P),lastLoadedKey:f($)})):(y(I,!1),console.log("DatabaseListView: No valid cursor, hasMore set to false"))}else{if(y(I,!1),y(g,[...f(g),...oe],!0),oe.length>0){const he=M(oe,s());he&&(y(P,he.value,!0),y($,he.key,!0),console.log("DatabaseListView: Updated cursor (last page):",{lastLoadedValue:f(P),lastLoadedKey:f($)}))}console.log("DatabaseListView: Loaded all remaining items, hasMore set to false")}const xe=f(g).length-(oe.length>n()?n():oe.length);f(g).slice(xe).forEach((he,ge)=>{H(he.key,xe+ge)}),console.log(`DatabaseListView: Page ${f(N)} - Loaded ${oe.length} more items, total: ${f(g).length}, hasMore: ${f(I)}`)}else console.log("DatabaseListView: Query returned no data, hasMore set to false"),y(I,!1)}catch(D){D instanceof Error?(console.error("DatabaseListView: Load more error",{name:D.name,message:D.message,toString:D.toString()}),y(q,D.message||"Unknown error",!0)):(console.error("DatabaseListView: Load more error",D),y(q,String(D),!0))}finally{y(w,!1)}}function te(){if(!f(T)||f(w)||!f(I))return;const{scrollTop:D,scrollHeight:G,clientHeight:ce}=f(T);G-(D+ce)<o()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),ue())}function fe(){if(f(w)||!f(I))return;const D=window.pageYOffset||document.documentElement.scrollTop,G=document.documentElement.scrollHeight,ce=window.innerHeight;G-(D+ce)<o()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),ue())}function Z(){console.log("DatabaseListView: Refreshing..."),le()}var W={refresh:Z,get path(){return t()},set path(D=""){t(D),Oe()},get pageSize(){return n()},set pageSize(D=10){n(D),Oe()},get orderBy(){return s()},set orderBy(D="createdAt"){s(D),Oe()},get sortPrefix(){return i()},set sortPrefix(D=""){i(D),Oe()},get threshold(){return o()},set threshold(D=300){o(D),Oe()},get reverse(){return a()},set reverse(D=!1){a(D),Oe()},get item(){return l()},set item(D){l(D),Oe()},get loading(){return u()},set loading(D){u(D),Oe()},get empty(){return p()},set empty(D){p(D),Oe()},get error(){return m()},set error(D){m(D),Oe()},get loadingMore(){return v()},set loadingMore(D){v(D),Oe()},get noMore(){return b()},set noMore(D){b(D),Oe()}},z=IS(),Y=d(z);{var re=D=>{var G=pS(),ce=d(G);{var K=U=>{var ie=_e(),oe=de(ie);li(oe,u),x(U,ie)},se=U=>{var ie=fS();x(U,ie)};F(ce,U=>{u()?U(K):U(se,!1)})}c(G),x(D,G)},J=D=>{var G=_e(),ce=de(G);{var K=U=>{var ie=mS(),oe=d(ie);{var xe=ge=>{var Ce=_e(),Te=de(Ce);li(Te,m,()=>f(q)),x(ge,Ce)},he=ge=>{var Ce=vS(),Te=h(d(Ce),2),qe=d(Te,!0);c(Te);var je=h(Te,2);je.__click=Z,c(Ce),L(()=>_(qe,f(q))),x(ge,Ce)};F(oe,ge=>{m()?ge(xe):ge(he,!1)})}c(ie),x(U,ie)},se=U=>{var ie=_e(),oe=de(ie);{var xe=ge=>{var Ce=_S(),Te=d(Ce);{var qe=He=>{var We=_e(),Ge=de(We);li(Ge,p),x(He,We)},je=He=>{var We=gS();x(He,We)};F(Te,He=>{p()?He(qe):He(je,!1)})}c(Ce),x(ge,Ce)},he=ge=>{var Ce=CS(),Te=d(Ce);nr(Te,19,()=>f(g),Ge=>Ge.key,(Ge,Qe,lt)=>{var ut=wS(),pt=d(ut);{var Se=ze=>{var Ke=_e(),Le=de(Ke);li(Le,l,()=>f(Qe),()=>f(lt)),x(ze,Ke)},Pe=ze=>{var Ke=bS(),Le=d(Ke),vt=d(Le,!0);c(Le),c(Ke),L(ct=>_(vt,ct),[()=>JSON.stringify(f(Qe).data,null,2)]),x(ze,Ke)};F(pt,ze=>{l()?ze(Se):ze(Pe,!1)})}c(ut),L(()=>Ee(ut,"data-key",f(Qe).key)),x(Ge,ut)});var qe=h(Te,2);{var je=Ge=>{var Qe=xS(),lt=d(Qe);{var ut=Se=>{var Pe=_e(),ze=de(Pe);li(ze,v),x(Se,Pe)},pt=Se=>{var Pe=yS();x(Se,Pe)};F(lt,Se=>{v()?Se(ut):Se(pt,!1)})}c(Qe),x(Ge,Qe)};F(qe,Ge=>{f(w)&&Ge(je)})}var He=h(qe,2);{var We=Ge=>{var Qe=ES(),lt=d(Qe);{var ut=Se=>{var Pe=_e(),ze=de(Pe);li(ze,b),x(Se,Pe)},pt=Se=>{var Pe=kS();x(Se,Pe)};F(lt,Se=>{b()?Se(ut):Se(pt,!1)})}c(Qe),x(Ge,Qe)};F(He,Ge=>{!f(I)&&!f(w)&&Ge(We)})}c(Ce),x(ge,Ce)};F(oe,ge=>{f(g).length===0?ge(xe):ge(he,!1)},!0)}x(U,ie)};F(ce,U=>{f(q)?U(K):U(se,!1)},!0)}x(D,G)};F(Y,D=>{f(k)?D(re):D(J,!1)})}return c(z),Qo(z,D=>y(T,D),()=>f(T)),x(r,z),at(W)}xt(["click"]);be(fa,{path:{},pageSize:{},orderBy:{},sortPrefix:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var SS=R('<img class="svelte-r48pmi"/>'),AS=R('<div class="avatar-placeholder svelte-r48pmi"> </div>'),RS=R('<span class="badge-me svelte-r48pmi"> </span>'),PS=R('<p class="user-email svelte-r48pmi"> </p>'),NS=R('<p class="user-bio svelte-r48pmi"> </p>'),$S=R('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi"> </button></div></div>'),LS=R('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p> </p></div>'),DS=R('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi"> </p></div>'),OS=R('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi"> </p> <p class="error-detail svelte-r48pmi"> </p></div>'),MS=R('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi"> </p></div>'),qS=R('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi"> </p></div>');const zS={hash:"svelte-r48pmi",code:`\r
  /* ============================================================================\r
     사용자 카드\r
     ============================================================================ */.user-card.svelte-r48pmi {display:flex;align-items:center;gap:1rem;padding:1rem;border-bottom:1px solid #e5e7eb;cursor:pointer;transition:background-color 0.2s;}.user-card.svelte-r48pmi:hover {background-color:#f9fafb;}.user-card.svelte-r48pmi:focus {outline:2px solid #3b82f6;outline-offset:-2px;background-color:#f9fafb;}.user-card.svelte-r48pmi:last-child {border-bottom:none;}\r
\r
  /* ============================================================================\r
     프로필 사진 (Avatar)\r
     ============================================================================ */.user-avatar.svelte-r48pmi {width:48px;height:48px;border-radius:50%;overflow:hidden;flex-shrink:0;background-color:#e5e7eb;}.user-avatar.svelte-r48pmi img:where(.svelte-r48pmi) {width:100%;height:100%;object-fit:cover;}.avatar-placeholder.svelte-r48pmi {width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#3b82f6;color:white;font-size:1.25rem;font-weight:bold;}\r
\r
  /* ============================================================================\r
     사용자 정보\r
     ============================================================================ */.user-info.svelte-r48pmi {flex:1;min-width:0;}.user-name.svelte-r48pmi {font-size:1rem;font-weight:600;color:#111827;margin:0 0 0.25rem 0;display:flex;align-items:center;gap:0.5rem;}.badge-me.svelte-r48pmi {display:inline-block;padding:0.125rem 0.5rem;background-color:#3b82f6;color:white;font-size:0.75rem;font-weight:600;border-radius:9999px;}.user-email.svelte-r48pmi {color:#6b7280;font-size:0.875rem;margin:0 0 0.25rem 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.user-bio.svelte-r48pmi {color:#374151;font-size:0.875rem;margin:0 0 0.25rem 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.user-date.svelte-r48pmi {color:#9ca3af;font-size:0.75rem;margin:0;}\r
\r
  /* ============================================================================\r
     사용자 액션 버튼\r
     ============================================================================ */.user-actions.svelte-r48pmi {flex-shrink:0;}.btn-view-profile.svelte-r48pmi {padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-view-profile.svelte-r48pmi:hover {background-color:#2563eb;}\r
\r
  /* ============================================================================\r
     상태 메시지 (로딩, 빈 상태, 에러)\r
     ============================================================================ */.loading-state.svelte-r48pmi,\r
  .empty-state.svelte-r48pmi,\r
  .error-state.svelte-r48pmi {display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem 1rem;text-align:center;}.spinner.svelte-r48pmi {width:40px;height:40px;border:4px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;\r
    animation: svelte-r48pmi-spin 0.8s linear infinite;margin-bottom:1rem;}\r
\r
  @keyframes svelte-r48pmi-spin {\r
    to {\r
      transform: rotate(360deg);\r
    }\r
  }.empty-icon.svelte-r48pmi,\r
  .error-icon.svelte-r48pmi {font-size:3rem;margin-bottom:1rem;}.empty-text.svelte-r48pmi,\r
  .error-text.svelte-r48pmi {color:#6b7280;font-size:1rem;margin:0 0 0.5rem 0;}.error-detail.svelte-r48pmi {color:#9ca3af;font-size:0.875rem;margin:0;}\r
\r
  /* ============================================================================\r
     더 로드 중 & 더 이상 없음\r
     ============================================================================ */.loading-more-state.svelte-r48pmi,\r
  .no-more-state.svelte-r48pmi {display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:1.5rem 1rem;text-align:center;}.spinner-small.svelte-r48pmi {width:20px;height:20px;border:3px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;\r
    animation: svelte-r48pmi-spin 0.8s linear infinite;}.loading-more-state.svelte-r48pmi p:where(.svelte-r48pmi),\r
  .no-more-state.svelte-r48pmi p:where(.svelte-r48pmi) {color:#6b7280;font-size:0.875rem;margin:0;}\r
\r
  /* ============================================================================\r
     반응형 (모바일)\r
     ============================================================================ */\r
  @media (max-width: 640px) {.user-card.svelte-r48pmi {flex-direction:column;align-items:flex-start;gap:0.75rem;}.user-avatar.svelte-r48pmi {width:40px;height:40px;}.user-actions.svelte-r48pmi {width:100%;}.btn-view-profile.svelte-r48pmi {width:100%;}\r
  }`};function S_(r,e){ot(e,!1),nt(r,zS);const t=()=>Je(qt,"$t",n),[n,s]=$t();function i(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):t()("정보없음")}Jt(()=>{Hr(t()("사용자찾기"))});function o(a){a===Ue.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}fr(),fa(r,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(b,g=Kr)=>{var w=$S();w.__click=()=>o(g().key),w.__keydown=Z=>{(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),o(g().key))};var k=d(w),I=d(k);{var P=Z=>{var W=SS();L(z=>{Ee(W,"src",g().data?.photoUrl??g().data?.photoURL),Ee(W,"alt",z)},[()=>g().data?.displayName||t()("사용자")]),x(Z,W)},$=Z=>{var W=AS(),z=d(W,!0);c(W),L(Y=>_(z,Y),[()=>g().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),x(Z,W)};F(I,Z=>{g().data?.photoUrl||g().data?.photoURL?Z(P):Z($,!1)})}c(k);var N=h(k,2),q=d(N),T=d(q),A=h(T);{var C=Z=>{var W=RS(),z=d(W,!0);c(W),L(Y=>_(z,Y),[()=>t()("나뱃지")]),x(Z,W)};F(A,Z=>{g().key===Ue.uid&&Z(C)})}c(q);var E=h(q,2),S=d(E,!0);c(E);var O=h(E,2);{var M=Z=>{var W=PS(),z=d(W,!0);c(W),L(()=>_(z,g().data.email)),x(Z,W)};F(O,Z=>{g().data?.email&&Z(M)})}var H=h(O,2);{var X=Z=>{var W=NS(),z=d(W,!0);c(W),L(()=>_(z,g().data.bio)),x(Z,W)};F(H,Z=>{g().data?.bio&&Z(X)})}var V=h(H,2),le=d(V);c(V),c(N);var ue=h(N,2),te=d(ue);te.__click=Z=>{Z.stopPropagation(),o(g().key)};var fe=d(te,!0);c(te),c(ue),c(w),L((Z,W,z,Y)=>{_(T,`${Z??""} `),_(S,g().key),_(le,`${W??""} ${z??""}`),_(fe,Y)},[()=>g().data?.displayName||t()("이름없음"),()=>t()("가입일"),()=>i(g().data?.createdAt),()=>t()("프로필보기")]),x(b,w)},loading:b=>{var g=LS(),w=h(d(g),2),k=d(w,!0);c(w),c(g),L(I=>_(k,I),[()=>t()("사용자목록로딩")]),x(b,g)},empty:b=>{var g=DS(),w=h(d(g),2),k=d(w,!0);c(w),c(g),L(I=>_(k,I),[()=>t()("등록된사용자없음")]),x(b,g)},error:(b,g=Kr)=>{var w=OS(),k=h(d(w),2),I=d(k,!0);c(k);var P=h(k,2),$=d(P,!0);c(P),c(w),L(N=>{_(I,N),_($,g())},[()=>t()("사용자목록로드실패")]),x(b,w)},loadingMore:b=>{var g=MS(),w=h(d(g),2),k=d(w,!0);c(w),c(g),L(I=>_(k,I),[()=>t()("더많은사용자로딩")]),x(b,g)},noMore:b=>{var g=qS(),w=d(g),k=d(w,!0);c(w),c(g),L(I=>_(k,I),[()=>t()("모든사용자로드완료")]),x(b,g)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),at(),s()}xt(["click","keydown"]);be(S_,{},[],[],!0);const ih=Zs([]);function Ne(r,e="success",t=3e3){const n=Date.now();ih.update(s=>[...s,{id:n,message:r,type:e}]),setTimeout(()=>{A_(n)},t)}function A_(r){ih.update(e=>e.filter(t=>t.id!==r))}async function R_(r,e,t,n,s=""){try{const i=e.startsWith("-")?e.substring(1):e,o=`${r}-${i}-${t}`,a={type:r,nodeId:i,uid:t,reason:n,message:s||"",createdAt:Date.now()},l={};return l[`reports/${o}`]=a,await ls(St(Et),l),{success:!0,reportId:o}}catch(i){console.error("[addReport] 에러 발생:",i);const o=kr(i,"addReport");return{success:!1,error:o.i18nKey,errorMessage:o.message}}}async function oh(r,e,t){try{const n=e.startsWith("-")?e.substring(1):e,s=`${r}-${n}-${t}`;return await Pg(St(Et,`reports/${s}`)),{success:!0}}catch(n){console.error("[removeReport] 에러 발생:",n);const s=kr(n,"removeReport");return{success:!1,error:s.i18nKey,errorMessage:s.message}}}async function P_(r,e,t){try{const n=e.startsWith("-")?e.substring(1):e,s=`${r}-${n}-${t}`;return(await gn(St(Et,`reports/${s}`))).exists()?{isReported:!0,reportId:s}:{isReported:!1}}catch(n){return console.error("[checkReportStatus] 에러 발생:",n),{isReported:!1}}}var US=R('<label class="reason-item svelte-1m8w4qr"><input type="radio" name="reason" class="svelte-1m8w4qr"/> <span> </span></label>'),FS=R('<div class="modal-overlay svelte-1m8w4qr"><div class="modal-content svelte-1m8w4qr"><h2 class="modal-title svelte-1m8w4qr"> </h2> <div class="reason-list svelte-1m8w4qr"><label class="label svelte-1m8w4qr"> </label> <!></div> <div class="modal-actions svelte-1m8w4qr"><button class="cancel-btn svelte-1m8w4qr"> </button> <button class="submit-btn svelte-1m8w4qr"> </button></div></div></div>');const jS={hash:"svelte-1m8w4qr",code:`\r
  /* 모달 오버레이 (전체 화면 배경) */.modal-overlay.svelte-1m8w4qr {position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:1000;}\r
\r
  /* 모달 콘텐츠 컨테이너 */.modal-content.svelte-1m8w4qr {background-color:white;border-radius:0.5rem;padding:2rem;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;}\r
\r
  /* 모달 제목 */.modal-title.svelte-1m8w4qr {margin:0 0 1.5rem 0;font-size:1.5rem;font-weight:700;color:#111827;}\r
\r
  /* 라벨 (공통) */.label.svelte-1m8w4qr {display:block;margin-bottom:0.5rem;font-weight:600;color:#374151;}\r
\r
  /* 신고 사유 리스트 */.reason-list.svelte-1m8w4qr {margin-bottom:1.5rem;}\r
\r
  /* 신고 사유 아이템 */.reason-item.svelte-1m8w4qr {display:flex;align-items:center;padding:0.75rem;margin-bottom:0.5rem;border:1px solid #e5e7eb;border-radius:0.375rem;cursor:pointer;transition:background-color 0.2s;}.reason-item.svelte-1m8w4qr:hover {background-color:#f9fafb;}.reason-item.svelte-1m8w4qr input[type="radio"]:where(.svelte-1m8w4qr) {margin-right:0.75rem;}\r
\r
  /* 액션 버튼 컨테이너 */.modal-actions.svelte-1m8w4qr {display:flex;gap:1rem;justify-content:flex-end;}\r
\r
  /* 버튼 공통 스타일 */.cancel-btn.svelte-1m8w4qr,\r
  .submit-btn.svelte-1m8w4qr {padding:0.75rem 1.5rem;border-radius:0.375rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}\r
\r
  /* 취소 버튼 */.cancel-btn.svelte-1m8w4qr {background-color:#f3f4f6;border:1px solid #d1d5db;color:#374151;}.cancel-btn.svelte-1m8w4qr:hover {background-color:#e5e7eb;}\r
\r
  /* 신고 제출 버튼 */.submit-btn.svelte-1m8w4qr {background-color:#ef4444;border:none;color:white;}.submit-btn.svelte-1m8w4qr:hover {background-color:#dc2626;}`};function ah(r,e){ot(e,!0),nt(r,jS);const t=()=>Je(qt,"$t",n),[n,s]=$t(),i=[];let o=Fe(e,"show",15,!1),a=Fe(e,"type",7,"post"),l=Fe(e,"onSubmit",7,()=>{}),u=Fe(e,"onCancel",7,()=>{}),p=ne("");const m=Rn(()=>[{value:"abuse",label:t()("신고사유_abuse")},{value:"fake-news",label:t()("신고사유_fake-news")},{value:"spam",label:t()("신고사유_spam")},{value:"inappropriate",label:t()("신고사유_inappropriate")},{value:"other",label:t()("신고사유_other")}]);function v(){if(!f(p)){alert(t()("신고사유_선택"));return}l()(f(p),""),g()}function b(){u()(),g()}function g(){y(p,"")}function w(){b()}function k(T){T.stopPropagation()}var I={get show(){return o()},set show(T=!1){o(T),Oe()},get type(){return a()},set type(T="post"){a(T),Oe()},get onSubmit(){return l()},set onSubmit(T=()=>{}){l(T),Oe()},get onCancel(){return u()},set onCancel(T=()=>{}){u(T),Oe()}},P=_e(),$=de(P);{var N=T=>{var A=FS();A.__click=w;var C=d(A);C.__click=k;var E=d(C),S=d(E,!0);c(E);var O=h(E,2),M=d(O),H=d(M,!0);c(M);var X=h(M,2);nr(X,17,()=>f(m),yn,(Z,W)=>{var z=US(),Y=d(z);Jn(Y);var re,J=h(Y,2),D=d(J,!0);c(J),c(z),L(()=>{re!==(re=f(W).value)&&(Y.value=(Y.__value=f(W).value)??""),_(D,f(W).label)}),K0(i,[],Y,()=>(f(W).value,f(p)),G=>y(p,G)),x(Z,z)}),c(O);var V=h(O,2),le=d(V);le.__click=b;var ue=d(le,!0);c(le);var te=h(le,2);te.__click=v;var fe=d(te,!0);c(te),c(V),c(C),c(A),L((Z,W,z,Y)=>{_(S,Z),_(H,W),_(ue,z),_(fe,Y)},[()=>a()==="post"?t()("신고_게시물_설명"):t()("신고_댓글_설명"),()=>t()("신고사유_선택"),()=>t()("신고_취소"),()=>t()("신고_제출")]),x(T,A)};F($,T=>{o()&&T(N)})}x(r,P);var q=at(I);return s(),q}xt(["click"]);be(ah,{show:{},type:{},onSubmit:{},onCancel:{}},[],[],!0);const Rc={IMAGE:10*1024*1024,VIDEO:50*1024*1024,DOCUMENT:15*1024*1024},BS=["jpg","jpeg","png","gif","webp","bmp","svg"],N_=["image/jpeg","image/png","image/gif","image/webp","image/bmp","image/svg+xml"],VS=["mp4"],$_=["video/mp4"],HS=["zip","pdf","txt","doc","docx","ppt","pptx","csv","xls","xlsx","rar"],L_=["application/zip","application/pdf","text/plain","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/x-rar-compressed","application/vnd.rar"],WS=[...N_,...$_,...L_].join(",");function jl(r){const e=r.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}function GS(r){const e=jl(r.name),t=r.type.toLowerCase();return BS.includes(e)||N_.includes(t)}function KS(r){const e=jl(r.name),t=r.type.toLowerCase();return VS.includes(e)||$_.includes(t)}function YS(r){const e=jl(r.name),t=r.type.toLowerCase();return HS.includes(e)||L_.includes(t)}function QS(r){return GS(r)?"image":KS(r)?"video":YS(r)?"document":null}function pp(r){return r<1024?`${r} B`:r<1024*1024?`${(r/1024).toFixed(1)} KB`:`${(r/(1024*1024)).toFixed(1)} MB`}function D_(r){const e=QS(r);if(!e)return{valid:!1,error:`지원하지 않는 파일 형식입니다. (확장자: ${jl(r.name)||"알 수 없음"})`};let t,n;switch(e){case"image":t=Rc.IMAGE,n="이미지";break;case"video":t=Rc.VIDEO,n="동영상";break;case"document":t=Rc.DOCUMENT,n="문서/압축";break}return r.size>t?{valid:!1,error:`${n} 파일은 최대 ${pp(t)}까지 업로드 가능합니다. (현재 파일: ${pp(r.size)})`}:{valid:!0,category:e}}async function XS(r,e,t,n){try{const s=D_(e);if(!s.valid)return{success:!1,error:s.error};const o=`${Date.now()}-${e.name}`,a=`users/${r}/${t}/${o}`,l=Qu(Ju,a),u={contentType:e.type,customMetadata:{uploadedBy:r,uploadedAt:new Date().toISOString(),category:t}},p=XC(l,e,u);return new Promise((m,v)=>{p.on("state_changed",b=>{const g=Math.round(b.bytesTransferred/b.totalBytes*100);n&&n(g);const w=b.state;w==="running"?console.log(`업로드 중: ${g}%`):w==="paused"&&console.log("업로드 일시 정지됨")},b=>{console.error("업로드 오류:",b);const g=kr(b);v({success:!1,error:g})},async()=>{try{const b=await Jg(p.snapshot.ref);console.log("업로드 성공:",{fileName:o,size:e.size,url:b}),m({success:!0,url:b,fileName:e.name,size:e.size})}catch(b){console.error("다운로드 URL 획득 실패:",b);const g=kr(b);v({success:!1,error:g})}})})}catch(s){return console.error("파일 업로드 실패:",s),{success:!1,error:kr(s)}}}function JS(r){try{const e=r.match(/\/o\/(.+?)\?/);return!e||!e[1]?(console.error("Storage 경로 추출 실패: URL 형식이 올바르지 않습니다"),null):decodeURIComponent(e[1])}catch(e){return console.error("Storage 경로 추출 오류:",e),null}}async function ZS(r){try{const e=JS(r);if(!e)return{success:!1,error:"error.file.invalidUrl"};const t=Qu(Ju,e);return await JC(t),console.log("파일 삭제 완료:",e),{success:!0}}catch(e){return console.error("파일 삭제 실패:",e),e.code==="storage/object-not-found"?{success:!0}:{success:!1,error:kr(e)}}}const Ra=new Map;function Mn(r){return Ra.has(r)||Ra.set(r,{files:[],listeners:new Set}),Ra.get(r)}function eA(r,e){const t=Mn(r),n=`${Date.now()}-${Math.random().toString(36).substring(2,9)}`,s={id:n,file:e,progress:0,status:"uploading"};return t.files.push(s),Ki(r),n}function tA(r,e,t){const s=Mn(r).files.find(i=>i.id===e);s&&(s.progress=t,Ki(r))}function rA(r,e,t){const s=Mn(r).files.find(i=>i.id===e);s&&(s.status="completed",s.progress=100,s.url=t,Ki(r))}function vp(r,e,t){const s=Mn(r).files.find(i=>i.id===e);s&&(s.status="error",s.error=t,Ki(r))}function nA(r,e){const t=Mn(r),n=t.files.findIndex(s=>s.id===e);n!==-1&&(t.files.splice(n,1),Ki(r))}function Di(r){return Mn(r).files.filter(t=>t.status==="completed"&&t.url).map(t=>t.url)}function mp(r){return[...Mn(r).files]}function sA(r,e){const t=Mn(r);t.files=e.map((n,s)=>({id:`existing-${s}-${Date.now()}`,file:null,progress:100,status:"completed",url:n})),Ki(r)}function iA(r,e){const t=Mn(r);return t.listeners.add(e),()=>{t.listeners.delete(e)}}function Ki(r){Mn(r).listeners.forEach(t=>t())}function kn(r){Ra.delete(r)}var oA=R('<span class="uploading-indicator svelte-1cq0e21">⏳</span>'),aA=R('<div class="file-upload-trigger svelte-1cq0e21"><input type="file" style="display: none;"/> <button type="button" class="upload-button svelte-1cq0e21"><!> <span class="button-text svelte-1cq0e21"> </span> <!></button></div>');const lA={hash:"svelte-1cq0e21",code:`\r
  /* 트리거 컨테이너 */.file-upload-trigger.svelte-1cq0e21 {display:inline-block;}\r
\r
  /* 업로드 버튼 */.upload-button.svelte-1cq0e21 {display:inline-flex;align-items:center;gap:0.5rem;padding:0.625rem 1rem;background:linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);color:#ffffff;border:none;border-radius:0.5rem;font-size:0.875rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;box-shadow:0 2px 8px rgba(59, 130, 246, 0.3);}.upload-button.svelte-1cq0e21:hover:not(:disabled) {background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);box-shadow:0 4px 12px rgba(59, 130, 246, 0.4);transform:translateY(-1px);}.upload-button.svelte-1cq0e21:active:not(:disabled) {transform:translateY(0);}.upload-button.svelte-1cq0e21:disabled {opacity:0.6;cursor:not-allowed;}\r
\r
  /* 버튼 텍스트 */.button-text.svelte-1cq0e21 {line-height:1;}\r
\r
  /* 업로드 중 인디케이터 */.uploading-indicator.svelte-1cq0e21 {\r
    animation: svelte-1cq0e21-spin 1s linear infinite;}\r
\r
  @keyframes svelte-1cq0e21-spin {\r
    from {\r
      transform: rotate(0deg);\r
    }\r
    to {\r
      transform: rotate(360deg);\r
    }\r
  }\r
\r
  /* 반응형 - 모바일 */\r
  @media (max-width: 640px) {.upload-button.svelte-1cq0e21 {font-size:0.8125rem;padding:0.5rem 0.875rem;}\r
  }`};function cA(r,e){ot(e,!0),nt(r,lA);const t=()=>Je(qt,"$t",n),[n,s]=$t();let i=Fe(e,"id",7,""),o=Fe(e,"category",7,"posts"),a=Fe(e,"multiple",7,"true"),l=Fe(e,"buttonText",7,""),u=ne(null),p=ne(!1);const m=Rn(()=>a()==="true"||a()===""),v=Rn(()=>l()||t()("파일선택"));function b(){f(p)||f(u)?.click()}async function g(S){const O=S.target,M=O?.files;if(!M||M.length===0)return;if(!i()){console.error("[FileUploadTrigger] id prop is required"),alert(t()("error.file.invalidUrl"));return}if(!Ue.isAuthenticated||!Ue.uid){alert(t()("로그인필요"));return}const H=Array.from(M);for(const X of H){const V=D_(X);if(!V.valid){alert(V.error),O&&(O.value="");return}}y(p,!0);try{const X=H.map(V=>w(V));await Promise.all(X)}catch(X){console.error("[FileUploadTrigger] Upload error:",X)}finally{y(p,!1),O&&(O.value="")}}async function w(S){const O=eA(i(),S);try{const M=await XS(Ue.uid,S,o(),H=>{tA(i(),O,H)});if(M.success&&M.url)rA(i(),O,M.url);else{const H=M.error?t()(M.error):t()("error.unknown");vp(i(),O,H)}}catch(M){console.error("[FileUploadTrigger] Upload failed:",M);const H=M instanceof Error?M.message:t()("error.unknown");vp(i(),O,H)}}var k={get id(){return i()},set id(S=""){i(S),Oe()},get category(){return o()},set category(S="posts"){o(S),Oe()},get multiple(){return a()},set multiple(S="true"){a(S),Oe()},get buttonText(){return l()},set buttonText(S=""){l(S),Oe()}},I=aA(),P=d(I);P.__change=g,Qo(P,S=>y(u,S),()=>f(u));var $=h(P,2);$.__click=b;var N=d($);i_(N,{size:20});var q=h(N,2),T=d(q,!0);c(q);var A=h(q,2);{var C=S=>{var O=oA();x(S,O)};F(A,S=>{f(p)&&S(C)})}c($),c(I),L(()=>{Ee(P,"accept",WS),P.multiple=f(m),Ee(P,"aria-label",f(v)),$.disabled=f(p),Ee($,"aria-label",f(v)),_(T,f(v))}),x(r,I);var E=at(k);return s(),E}xt(["change","click"]);customElements.define("file-upload-trigger",be(cA,{id:{},category:{},multiple:{},buttonText:{}},[],[],!1));var dA=R('<div class="empty-state svelte-1rscjtl"><p class="empty-text svelte-1rscjtl"> </p></div>'),uA=R('<img class="preview-image svelte-1rscjtl"/>'),hA=R('<video class="preview-video svelte-1rscjtl" controls><track kind="captions"/></video>',2),fA=R('<div class="file-extension svelte-1rscjtl"><div class="extension-text svelte-1rscjtl"> </div></div>'),pA=R('<div class="progress-overlay svelte-1rscjtl"><div class="progress-circle svelte-1rscjtl"> </div></div>'),vA=R('<div class="error-overlay svelte-1rscjtl"><!> <div class="error-text svelte-1rscjtl"> </div></div>'),mA=R('<button type="button" class="delete-button svelte-1rscjtl"><!></button>'),gA=R('<div><div class="file-preview svelte-1rscjtl"><!> <!> <!> <!></div></div>'),_A=R('<div class="files-container svelte-1rscjtl"></div>'),bA=R('<div class="file-upload-list svelte-1rscjtl"><!></div>');const wA={hash:"svelte-1rscjtl",code:`\r
  /* 파일 목록 컨테이너 */.file-upload-list.svelte-1rscjtl {width:100%;margin-top:1rem;}\r
\r
  /* 빈 상태 */.empty-state.svelte-1rscjtl {padding:2rem;text-align:center;background-color:#f9fafb;border:2px dashed #d1d5db;border-radius:0.5rem;}.empty-text.svelte-1rscjtl {margin:0;color:#6b7280;font-size:0.875rem;}\r
\r
  /* 파일 목록 (그리드 레이아웃) */.files-container.svelte-1rscjtl {display:grid;grid-template-columns:repeat(5, 1fr); /* 기본 5열 */gap:1rem;}\r
\r
  /* 파일 항목 */.file-item.svelte-1rscjtl {position:relative;aspect-ratio:1; /* 정사각형 유지 */border-radius:0.5rem;overflow:hidden;border:2px dashed #e5e7eb;background-color:#f9fafb;transition:all 0.2s ease;}.file-item.svelte-1rscjtl:hover {transform:scale(1.02);box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);}\r
\r
  /* 완료 상태 */.file-item.completed.svelte-1rscjtl {border-color:#10b981;border-style:solid;}\r
\r
  /* 에러 상태 */.file-item.error.svelte-1rscjtl {border-color:#ef4444;border-style:solid;}\r
\r
  /* 파일 미리보기 영역 */.file-preview.svelte-1rscjtl {position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#f3f4f6;}\r
\r
  /* 이미지 미리보기 */.preview-image.svelte-1rscjtl {width:100%;height:100%;object-fit:cover;}\r
\r
  /* 비디오 미리보기 */.preview-video.svelte-1rscjtl {width:100%;height:100%;object-fit:cover;background-color:#000000;}\r
\r
  /* 파일 확장자 표시 (문서 파일) */.file-extension.svelte-1rscjtl {width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);}.extension-text.svelte-1rscjtl {font-size:1.5rem;font-weight:700;color:#ffffff;text-align:center;padding:0.5rem;word-break:break-word;}\r
\r
  /* 진행률 오버레이 */.progress-overlay.svelte-1rscjtl {position:absolute;inset:0;background-color:rgba(0, 0, 0, 0.6);display:flex;align-items:center;justify-content:center;z-index:5;}\r
\r
  /* 진행률 원형 표시 */.progress-circle.svelte-1rscjtl {width:60px;height:60px;background-color:white;border-radius:0.5rem;display:flex;align-items:center;justify-content:center;font-size:1.25rem;font-weight:700;color:#3b82f6;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);}\r
\r
  /* 에러 오버레이 */.error-overlay.svelte-1rscjtl {position:absolute;inset:0;background-color:rgba(239, 68, 68, 0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;z-index:5;}.error-icon {color:white;}.error-text.svelte-1rscjtl {color:white;font-size:0.75rem;font-weight:600;}\r
\r
  /* 삭제 버튼 (왼쪽 상단) */.delete-button.svelte-1rscjtl {position:absolute;top:0.25rem;left:0.25rem;width:1.75rem;height:1.75rem;display:flex;align-items:center;justify-content:center;background-color:rgba(239, 68, 68, 0.9);color:white;border:none;border-radius:9999px;cursor:pointer;transition:all 0.2s ease;z-index:10;}.delete-button.svelte-1rscjtl:hover:not(:disabled) {background-color:rgba(220, 38, 38, 1);transform:scale(1.1);}.delete-button.svelte-1rscjtl:disabled {opacity:0.5;cursor:not-allowed;}\r
\r
  /* 반응형 - 모바일 (4열) */\r
  @media (max-width: 640px) {.files-container.svelte-1rscjtl {grid-template-columns:repeat(4, 1fr);gap:0.75rem;}.progress-circle.svelte-1rscjtl {width:50px;height:50px;font-size:1rem;}.delete-button.svelte-1rscjtl {width:1.5rem;height:1.5rem;}.extension-text.svelte-1rscjtl {font-size:1rem;}\r
  }\r
\r
  /* 반응형 - 태블릿 (4열) */\r
  @media (min-width: 641px) and (max-width: 1024px) {.files-container.svelte-1rscjtl {grid-template-columns:repeat(4, 1fr);}\r
  }\r
\r
  /* 반응형 - 데스크톱 (5열) */\r
  @media (min-width: 1025px) {.files-container.svelte-1rscjtl {grid-template-columns:repeat(5, 1fr);}\r
  }`};function yA(r,e){ot(e,!0),nt(r,wA);const t=()=>Je(qt,"$t",n),[n,s]=$t();let i=Fe(e,"id",7,""),o=Fe(e,"initial-urls",7,""),a=ne(hr([])),l=ne(hr(new Set));Jt(()=>{if(!i()){console.error("[FileUploadList] id prop is required");return}if(o())try{const T=JSON.parse(o());Array.isArray(T)&&T.length>0&&(console.log(`[FileUploadList] Initializing with ${T.length} URLs for id: ${i()}`),sA(i(),T))}catch(T){console.error("[FileUploadList] Failed to parse initial-urls:",T)}if(iA(i(),()=>{y(a,mp(i()),!0)}),y(a,mp(i()),!0),typeof window<"u"){const T=document.querySelector(`file-upload-list[id="${i()}"]`);T&&(T.getUrls=()=>Di(i()))}});async function u(T,A){if(!(f(l).has(T)||!confirm(t()("파일삭제")))){f(l).add(T);try{if(A){const E=await ZS(A);E.success||console.error("[FileUploadList] Failed to delete file from Storage:",E.error)}nA(i(),T)}catch(E){console.error("[FileUploadList] Delete error:",E),alert(t()("파일삭제실패"))}finally{f(l).delete(T)}}}function p(T){if(T.file&&T.file.name)return T.file.name;if(T.url)try{const A=T.url,S=new URL(A).pathname.split("/"),O=S[S.length-1];return decodeURIComponent(O??"")}catch{return"파일"}return"파일"}function m(T){return T.url?T.url:T.file&&T.file.type.startsWith("image/")?URL.createObjectURL(T.file):null}function v(T){if(T.file&&T.file.type.startsWith("image/"))return!0;if(T.url){const A=T.url.toLowerCase();return A.includes(".jpg")||A.includes(".jpeg")||A.includes(".png")||A.includes(".gif")||A.includes(".webp")||A.includes(".bmp")||A.includes(".svg")}return!1}function b(T){if(T.file&&T.file.type.startsWith("video/"))return!0;if(T.url){const A=T.url.toLowerCase();return A.includes(".mp4")||A.includes(".webm")||A.includes(".mov")||A.includes(".avi")||A.includes(".mkv")}return!1}function g(T){const C=p(T).split(".");if(C&&C.length>1){const E=C[C.length-1];return E?E.toUpperCase():"FILE"}return"FILE"}function w(T){return T.url?T.url:T.file&&T.file.type.startsWith("video/")?URL.createObjectURL(T.file):null}var k={get id(){return i()},set id(T=""){i(T),Oe()},get"initial-urls"(){return o()},set"initial-urls"(T=""){o(T),Oe()}},I=bA(),P=d(I);{var $=T=>{var A=dA(),C=d(A),E=d(C,!0);c(C),c(A),L(S=>_(E,S),[()=>t()("파일없음")]),x(T,A)},N=T=>{var A=_A();nr(A,21,()=>f(a),C=>C.id,(C,E)=>{var S=gA(),O=d(S),M=d(O);{var H=W=>{var z=uA();L((Y,re)=>{Ee(z,"src",Y),Ee(z,"alt",re)},[()=>m(f(E)),()=>p(f(E))]),x(W,z)},X=W=>{var z=_e(),Y=de(z);{var re=D=>{var G=hA();L(ce=>Ee(G,"src",ce),[()=>w(f(E))]),x(D,G)},J=D=>{var G=fA(),ce=d(G),K=d(ce,!0);c(ce),c(G),L(se=>_(K,se),[()=>g(f(E))]),x(D,G)};F(Y,D=>{b(f(E))?D(re):D(J,!1)},!0)}x(W,z)};F(M,W=>{v(f(E))?W(H):W(X,!1)})}var V=h(M,2);{var le=W=>{var z=pA(),Y=d(z),re=d(Y);c(Y),c(z),L(()=>_(re,`${f(E).progress??""}%`)),x(W,z)};F(V,W=>{f(E).status==="uploading"&&W(le)})}var ue=h(V,2);{var te=W=>{var z=vA(),Y=d(z);r_(Y,{size:32,class:"error-icon"});var re=h(Y,2),J=d(re,!0);c(re),c(z),L(D=>_(J,D),[()=>t()("업로드실패")]),x(W,z)};F(ue,W=>{f(E).status==="error"&&W(te)})}var fe=h(ue,2);{var Z=W=>{var z=mA();z.__click=()=>u(f(E).id,f(E).url);var Y=d(z);Fl(Y,{size:16}),c(z),L((re,J)=>{z.disabled=re,Ee(z,"aria-label",J)},[()=>f(l).has(f(E).id),()=>t()("파일삭제")]),x(W,z)};F(fe,W=>{(f(E).status==="completed"||f(E).status==="error")&&W(Z)})}c(O),c(S),L(()=>rr(S,1,`file-item ${f(E).status??""}`,"svelte-1rscjtl")),x(C,S)}),c(A),x(T,A)};F(P,T=>{f(a).length===0?T($):T(N,!1)})}c(I),x(r,I);var q=at(k);return s(),q}xt(["click"]);customElements.define("file-upload-list",be(yA,{id:{},"initial-urls":{}},[],[],!1));function ul(r){return r.parentElement,r.nextSibling,document.body.appendChild(r),{destroy(){r.parentElement===document.body&&document.body.removeChild(r)}}}var xA=R('<img class="comment-avatar svelte-110g7vh"/>'),kA=R('<span class="comment-avatar-placeholder svelte-110g7vh"> </span>'),EA=R('<a target="_blank" rel="noopener noreferrer" class="file-item image-item svelte-110g7vh"><img alt="첨부 이미지" class="file-image svelte-110g7vh"/></a>'),CA=R('<div class="file-item video-item svelte-110g7vh"><video controls class="file-video svelte-110g7vh"><track kind="captions"/> 브라우저가 비디오를 지원하지 않습니다.</video></div>',2),IA=R('<a target="_blank" rel="noopener noreferrer" class="file-item download-item svelte-110g7vh"><div class="file-icon svelte-110g7vh">📎</div> <div class="file-name svelte-110g7vh"> </div></a>'),TA=R('<div class="comment-files-preview svelte-110g7vh"></div>'),SA=R('<span class="count svelte-110g7vh"> </span>'),AA=R('<button><span class="emoji svelte-110g7vh"> </span> <span class="text svelte-110g7vh"> </span> <!></button>'),RA=R('<button class="action-button reply-button svelte-110g7vh"><span class="emoji svelte-110g7vh">💬</span> <span class="text svelte-110g7vh"> </span></button>'),PA=R('<button><span class="emoji svelte-110g7vh"> </span> <span class="text svelte-110g7vh"> </span></button>'),NA=R('<button class="action-button edit-button svelte-110g7vh"><!></button>'),$A=R('<button class="action-button delete-button svelte-110g7vh"><!></button>'),LA=R('<div class="modal-backdrop svelte-110g7vh"><div class="modal svelte-110g7vh"><div class="modal-header svelte-110g7vh"><h2 class="svelte-110g7vh"> </h2> <button class="btn-close svelte-110g7vh">×</button></div> <div class="modal-content svelte-110g7vh"><textarea rows="5" class="svelte-110g7vh"></textarea></div> <div class="modal-footer svelte-110g7vh"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-110g7vh"><button class="btn-cancel svelte-110g7vh"> </button> <button class="btn-submit svelte-110g7vh"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),DA=R('<div class="modal-backdrop svelte-110g7vh"><div class="modal svelte-110g7vh"><div class="modal-header svelte-110g7vh"><h2 class="svelte-110g7vh"> </h2> <button class="btn-close svelte-110g7vh">×</button></div> <div class="modal-content svelte-110g7vh"><textarea rows="5" class="svelte-110g7vh"></textarea></div> <div class="modal-footer svelte-110g7vh"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-110g7vh"><button class="btn-cancel svelte-110g7vh"> </button> <button class="btn-submit svelte-110g7vh"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),OA=R("<alert-dialog></alert-dialog>",2),MA=R('<div class="comment-item svelte-110g7vh"><div class="comment-header svelte-110g7vh"><div class="comment-author svelte-110g7vh"><!> <span class="comment-author-name svelte-110g7vh"> </span></div> <span class="comment-date svelte-110g7vh"> </span></div> <p class="comment-content svelte-110g7vh"> </p> <!> <div class="comment-actions svelte-110g7vh"><!> <!> <!> <!> <!></div></div> <!> <!> <!> <!>',1);const qA={hash:"svelte-110g7vh",code:`\r
  /* 댓글 아이템 */.comment-item.svelte-110g7vh {padding:0.75rem;background-color:#f9fafb;border-radius:0.5rem;border-left:3px solid #e5e7eb;transition:all 0.2s ease;}.comment-item.svelte-110g7vh:hover {background-color:#f3f4f6;border-left-color:#3b82f6;}\r
\r
  /* 댓글 헤더 */.comment-header.svelte-110g7vh {display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;}\r
\r
  /* 댓글 작성자 */.comment-author.svelte-110g7vh {display:flex;align-items:center;gap:0.5rem;}\r
\r
  /* 댓글 아바타 (이미지) */.comment-avatar.svelte-110g7vh {width:1.75rem;height:1.75rem;border-radius:9999px;object-fit:cover;}\r
\r
  /* 댓글 아바타 (플레이스홀더) */.comment-avatar-placeholder.svelte-110g7vh {width:1.75rem;height:1.75rem;border-radius:9999px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.75rem;}\r
\r
  /* 댓글 작성자 이름 */.comment-author-name.svelte-110g7vh {font-size:0.85rem;font-weight:600;color:#374151;}\r
\r
  /* 댓글 날짜 */.comment-date.svelte-110g7vh {font-size:0.75rem;color:#9ca3af;}\r
\r
  /* 댓글 내용 */.comment-content.svelte-110g7vh {margin:0;font-size:0.85rem;color:#4b5563;line-height:1.6;white-space:pre-wrap;word-break:break-word;}\r
\r
  /* 댓글 액션 버튼 영역 */.comment-actions.svelte-110g7vh {display:flex;align-items:center;gap:0.375rem;margin-top:0.5rem;}\r
\r
  /* 액션 버튼 공통 스타일 */.action-button.svelte-110g7vh {display:inline-flex;align-items:center;gap:0.25rem;padding:0.25rem 0.5rem;font-size:0.75rem;background-color:transparent;border:none;border-radius:0.25rem;cursor:pointer;transition:all 0.2s ease;font-weight:500;}\r
\r
  /* 이모지 스타일 */.action-button.svelte-110g7vh .emoji:where(.svelte-110g7vh) {font-size:0.875rem;line-height:1;}\r
\r
  /* 텍스트 스타일 */.action-button.svelte-110g7vh .text:where(.svelte-110g7vh) {font-size:0.75rem;}\r
\r
  /* 모바일에서 좋아요/답글/신고 버튼의 이모지 숨기기 */\r
  @media (max-width: 768px) {.like-button.svelte-110g7vh .emoji:where(.svelte-110g7vh),\r
    .reply-button.svelte-110g7vh .emoji:where(.svelte-110g7vh),\r
    .report-button.svelte-110g7vh .emoji:where(.svelte-110g7vh) {display:none;}\r
  }\r
\r
  /* 좋아요 버튼 */.like-button.svelte-110g7vh {color:#6b7280;}.like-button.svelte-110g7vh:hover {background-color:#fee2e2;color:#dc2626;}\r
\r
  /* 좋아요 한 버튼 강조 표시 */.like-button.liked.svelte-110g7vh {background-color:#fee2e2;color:#dc2626;font-weight:600;}.like-button.liked.svelte-110g7vh:hover {background-color:#fecaca;color:#b91c1c;}\r
\r
  /* 답글 버튼 */.reply-button.svelte-110g7vh {color:#3b82f6;}.reply-button.svelte-110g7vh:hover {background-color:#dbeafe;color:#2563eb;}\r
\r
  /* 신고 버튼 */.report-button.svelte-110g7vh {color:#6b7280;}.report-button.svelte-110g7vh:hover {background-color:#fef3c7;color:#d97706;}\r
\r
  /* 신고한 버튼 강조 표시 */.report-button.reported.svelte-110g7vh {background-color:#fef3c7;color:#d97706;font-weight:600;}.report-button.reported.svelte-110g7vh:hover {background-color:#fde68a;color:#b45309;}\r
\r
  /* 수정 버튼 (아이콘만 표시, 오른쪽 정렬) */.edit-button.svelte-110g7vh {color:#10b981;padding:0.25rem;min-width:2rem;justify-content:center;margin-left:auto;}.edit-button.svelte-110g7vh:hover {background-color:#d1fae5;color:#059669;}\r
\r
  /* 삭제 버튼 (아이콘만 표시) */.delete-button.svelte-110g7vh {color:#ef4444;padding:0.25rem;min-width:2rem;justify-content:center;}.delete-button.svelte-110g7vh:hover {background-color:#fee2e2;color:#dc2626;}\r
\r
  /* 개수 표시 */.count.svelte-110g7vh {font-weight:600;font-size:0.7rem;}\r
\r
  /* 모달 배경 (backdrop) */.modal-backdrop.svelte-110g7vh {position:fixed;inset:0; /* top, left, right, bottom을 0으로 설정 (더 간결하고 명확함) */background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:3000; /* PostListPage 모달(z-index: 2000)보다 높게 설정 */padding:1rem; /* 모바일에서 여백 확보 */}\r
\r
  /* 모달 컨테이너 */.modal.svelte-110g7vh {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1),\r
      0 10px 10px -5px rgba(0, 0, 0, 0.04);max-width:500px;width:90%;max-height:calc(100vh - 2rem); /* 상하 여백을 고려한 최대 높이 */overflow-y:auto; /* 모달 내용이 길 경우 스크롤 가능 */}\r
\r
  /* 모달 헤더 */.modal-header.svelte-110g7vh {display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;border-bottom:1px solid #e5e7eb;}.modal-header.svelte-110g7vh h2:where(.svelte-110g7vh) {margin:0;font-size:1.25rem;font-weight:600;color:#111827;}\r
\r
  /* 모달 닫기 버튼 */.btn-close.svelte-110g7vh {background:none;border:none;font-size:1.5rem;color:#6b7280;cursor:pointer;padding:0;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:0.25rem;transition:all 0.2s ease;}.btn-close.svelte-110g7vh:hover {background-color:#f3f4f6;color:#111827;}\r
\r
  /* 모달 내용 */.modal-content.svelte-110g7vh {padding:1.5rem;}.modal-content.svelte-110g7vh textarea:where(.svelte-110g7vh) {width:100%;padding:0.75rem;border:1px solid #d1d5db;border-radius:0.375rem;font-size:0.875rem;font-family:inherit;resize:vertical;transition:border-color 0.2s ease;}.modal-content.svelte-110g7vh textarea:where(.svelte-110g7vh):focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}\r
\r
  /* 모달 푸터 */.modal-footer.svelte-110g7vh {display:flex;align-items:center;justify-content:space-between; /* 왼쪽(이미지 버튼)/오른쪽(취소/전송) 배치 */gap:1rem;padding:1rem 1.5rem;border-top:1px solid #e5e7eb;}\r
\r
  /* 취소/전송 버튼 그룹 */.button-group.svelte-110g7vh {display:flex;align-items:center;gap:0.75rem;margin-left:auto; /* 오른쪽 정렬 */}\r
\r
  /* 취소 버튼 */.btn-cancel.svelte-110g7vh {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:#374151;background-color:#ffffff;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;}.btn-cancel.svelte-110g7vh:hover {background-color:#f9fafb;border-color:#9ca3af;}\r
\r
  /* 전송 버튼 */.btn-submit.svelte-110g7vh {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:#ffffff;background-color:#3b82f6;border:none;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;}.btn-submit.svelte-110g7vh:hover:not(:disabled) {background-color:#2563eb;}.btn-submit.svelte-110g7vh:disabled {opacity:0.6;cursor:not-allowed;}\r
\r
  /* === 댓글 첨부 파일 미리보기 스타일 === */\r
\r
  /* 파일 미리보기 컨테이너: 그리드 레이아웃 (반응형, 게시글보다 작게) */.comment-files-preview.svelte-110g7vh {display:grid;grid-template-columns:repeat(auto-fill, minmax(70px, 1fr));gap:0.5rem;margin:0.5rem 0;padding:0.5rem;background-color:#f0f0f0;border-radius:0.375rem;border:1px solid #e5e7eb;}\r
\r
  /* 개별 파일 아이템 (이미지, 동영상, 다운로드) */.comment-files-preview.svelte-110g7vh .file-item:where(.svelte-110g7vh) {position:relative;aspect-ratio:1;border-radius:0.25rem;overflow:hidden;background-color:#e5e7eb;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all 0.2s ease;}\r
\r
  /* 이미지 아이템 */.comment-files-preview.svelte-110g7vh .file-item.image-item:where(.svelte-110g7vh):hover {transform:scale(1.08);box-shadow:0 4px 10px rgba(0, 0, 0, 0.15);}\r
\r
  /* 이미지 */.comment-files-preview.svelte-110g7vh .file-image:where(.svelte-110g7vh) {width:100%;height:100%;object-fit:cover;}\r
\r
  /* 동영상 */.comment-files-preview.svelte-110g7vh .file-video:where(.svelte-110g7vh) {width:100%;height:100%;object-fit:cover;border-radius:0.25rem;}\r
\r
  /* 동영상 아이템 */.comment-files-preview.svelte-110g7vh .file-item.video-item:where(.svelte-110g7vh) {background-color:#000000;}\r
\r
  /* 다운로드 아이템 */.comment-files-preview.svelte-110g7vh .file-item.download-item:where(.svelte-110g7vh) {flex-direction:column;padding:0.375rem;background-color:#ffffff;border:1px solid #d1d5db;gap:0.2rem;}.comment-files-preview.svelte-110g7vh .file-item.download-item:where(.svelte-110g7vh):hover {background-color:#f9fafb;border-color:#3b82f6;transform:translateY(-2px);box-shadow:0 3px 6px rgba(59, 130, 246, 0.2);}\r
\r
  /* 파일 아이콘 (다운로드용, 댓글은 게시글보다 작게) */.comment-files-preview.svelte-110g7vh .file-icon:where(.svelte-110g7vh) {font-size:1.5rem;opacity:0.5;}\r
\r
  /* 파일명 (다운로드용, 댓글은 게시글보다 작게) */.comment-files-preview.svelte-110g7vh .file-name:where(.svelte-110g7vh) {font-size:0.6rem;color:#6b7280;text-align:center;word-break:break-all;line-height:1.2;max-height:2.4em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}.comment-files-preview.svelte-110g7vh .file-item.download-item:where(.svelte-110g7vh):hover .file-name:where(.svelte-110g7vh) {color:#3b82f6;}`};function O_(r,e){ot(e,!0),nt(r,qA);const t=()=>Je(qt,"$t",i),n=()=>Je(u,"$userStore",i),s=()=>Je(m,"$myLikeStore",i),[i,o]=$t();let a=Fe(e,"comment",7),l=Fe(e,"userId",7,null);const u=sh(`users/${a().uid}`),p=a().commentId.startsWith("-")?a().commentId.substring(1):a().commentId,m=l()?y_(`likes/comment-${p}-${l()}`,0):null;let v=ne(!1),b=ne(""),g=ne(!1),w=ne(!1),k=ne(""),I=ne(!1),P=ne(!1),$=ne(""),N=ne(!1),q=ne(!1);async function T(){if(!l()){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const j=await k_("comment",a().commentId,l());j.success?j.isLiked?Ne(t()("좋아요를하였습니다"),"success"):Ne(t()("좋아요를취소했습니다"),"info"):Ne(t()(j.error||"error.unknown"),"error")}catch(j){console.error("좋아요 오류:",j),Ne(t()("error.unknown"),"error")}}function A(){if(!l()){alert(t()("로그인필요")),window.location.href="/user/login";return}y(v,!0)}async function C(){if(!f(b).trim()){Ne(t()("댓글내용입력필요"),"error");return}y(g,!0);try{const j=Di(`comment-reply-${a().commentId}`),B=await LT({parentCommentId:a().commentId,userId:l(),content:f(b),urls:j.length>0?j:void 0});B.success?(kn(`comment-reply-${a().commentId}`),Ne(t()("댓글이작성되었습니다"),"success"),y(v,!1),y(b,"")):Ne(t()(B.error||"error.unknown"),"error")}catch(j){console.error("답글 생성 오류:",j),Ne(t()("error.unknown"),"error")}finally{y(g,!1)}}function E(){kn(`comment-reply-${a().commentId}`),y(v,!1),y(b,"")}function S(){if((a().commentCount||0)>0){y($,t()("댓글이달려있어수정불가"),!0),y(P,!0);return}y(k,a().content,!0),y(w,!0)}async function O(){if(!f(k).trim()){Ne(t()("댓글내용입력필요"),"error");return}y(I,!0);try{const j=Di(`comment-edit-${a().commentId}`),B=await OT(a().commentId,{content:f(k),urls:j.length>0?j:void 0});B.success?(kn(`comment-edit-${a().commentId}`),Ne(t()("댓글이수정되었습니다"),"success"),y(w,!1),y(k,"")):Ne(t()(B.error||"error.unknown"),"error")}catch(j){console.error("댓글 수정 오류:",j),Ne(t()("error.unknown"),"error")}finally{y(I,!1)}}function M(){kn(`comment-edit-${a().commentId}`),y(w,!1),y(k,"")}async function H(){if((a().commentCount||0)>0){y($,t()("댓글이달려있어삭제불가"),!0),y(P,!0);return}if(confirm(t()("댓글삭제확인")))try{const j=await MT(a().commentId);j.success?Ne(t()("댓글이삭제되었습니다"),"success"):Ne(t()(j.error||"error.unknown"),"error")}catch(j){console.error("댓글 삭제 오류:",j),Ne(t()("error.unknown"),"error")}}function X(j){const B=j.toLowerCase();return B.includes(".jpg")||B.includes(".jpeg")||B.includes(".png")||B.includes(".gif")||B.includes(".webp")}function V(j){const B=j.toLowerCase();return B.includes(".mp4")||B.includes(".webm")||B.includes(".mov")||B.includes(".avi")||B.includes(".mkv")}function le(j){try{return new URL(j).pathname.split("/").pop()||"file"}catch{return"file"}}Jt(()=>{l()&&P_("comment",a().commentId,l()).then(j=>{y(N,j.isReported,!0)})});function ue(){if(!l()){alert(t()("로그인필요")),window.location.href="/user/login";return}f(N)?confirm(t()("신고를취소하시겠습니까"))&&fe():y(q,!0)}async function te(j,B){if(!l()){Ne(t()("로그인필요"),"error");return}try{const Ae=await R_("comment",a().commentId,l(),j,B);Ae.success?(Ne(t()("신고가접수되었습니다"),"success"),y(N,!0),y(q,!1)):Ne(t()(Ae.error||"error.unknown"),"error")}catch(Ae){console.error("신고 추가 오류:",Ae),Ne(t()("error.unknown"),"error")}}async function fe(){if(!l()){Ne(t()("로그인필요"),"error");return}try{const j=await oh("comment",a().commentId,l());j.success?(Ne(t()("신고가취소되었습니다"),"success"),y(N,!1)):Ne(t()(j.error||"error.unknown"),"error")}catch(j){console.error("신고 취소 오류:",j),Ne(t()("error.unknown"),"error")}}function Z(){y(q,!1)}var W={get comment(){return a()},set comment(j){a(j),Oe()},get userId(){return l()},set userId(j=null){l(j),Oe()}},z=MA(),Y=de(z),re=d(Y),J=d(re),D=d(J);{var G=j=>{var B=xA();L(Ae=>{Ee(B,"src",n().data.photoUrl),Ee(B,"alt",Ae)},[()=>n().data.displayName||t()("익명")]),x(j,B)},ce=j=>{var B=kA(),Ae=d(B,!0);c(B),L(ee=>_(Ae,ee),[()=>(n().data?.displayName||t()("익명")).charAt(0).toUpperCase()]),x(j,B)};F(D,j=>{n().data?.photoUrl?j(G):j(ce,!1)})}var K=h(D,2),se=d(K,!0);c(K),c(J);var U=h(J,2),ie=d(U,!0);c(U),c(re);var oe=h(re,2),xe=d(oe,!0);c(oe);var he=h(oe,2);{var ge=j=>{var B=TA();nr(B,20,()=>a().urls,Ae=>Ae,(Ae,ee)=>{var ve=_e(),ke=de(ve);{var Ie=we=>{var me=EA(),Be=d(me);c(me),L(()=>{Ee(me,"href",ee),Ee(Be,"src",ee)}),x(we,me)},Re=we=>{var me=_e(),Be=de(me);{var ht=It=>{var Ve=CA(),bt=d(Ve);c(Ve),L(()=>Ee(bt,"src",ee)),x(It,Ve)},ft=It=>{var Ve=IA(),bt=h(d(Ve),2),At=d(bt,!0);c(bt),c(Ve),L(Xe=>{Ee(Ve,"href",ee),_(At,Xe)},[()=>le(ee)]),x(It,Ve)};F(Be,It=>{V(ee)?It(ht):It(ft,!1)},!0)}x(we,me)};F(ke,we=>{X(ee)?we(Ie):we(Re,!1)})}x(Ae,ve)}),c(B),x(j,B)};F(he,j=>{a().urls&&a().urls.length>0&&j(ge)})}var Ce=h(he,2),Te=d(Ce);{var qe=j=>{var B=AA();B.__click=T;var Ae=d(B),ee=d(Ae,!0);c(Ae);var ve=h(Ae,2),ke=d(ve,!0);c(ve);var Ie=h(ve,2);{var Re=we=>{var me=SA(),Be=d(me,!0);c(me),L(()=>_(Be,a().likeCount)),x(we,me)};F(Ie,we=>{a().likeCount>0&&we(Re)})}c(B),L((we,me)=>{rr(B,1,`action-button like-button ${(s()?.data??0)>=1?"liked":""}`,"svelte-110g7vh"),Ee(B,"title",we),_(ee,(s()?.data??0)>=1?"❤️":"🤍"),_(ke,me)},[()=>t()("좋아요"),()=>t()("좋아요")]),x(j,B)};F(Te,j=>{l()&&j(qe)})}var je=h(Te,2);{var He=j=>{var B=RA();B.__click=A;var Ae=h(d(B),2),ee=d(Ae,!0);c(Ae),c(B),L(ve=>_(ee,ve),[()=>t()("답글")]),x(j,B)};F(je,j=>{l()&&a().depth<12&&j(He)})}var We=h(je,2);{var Ge=j=>{var B=PA();B.__click=ue;var Ae=d(B),ee=d(Ae,!0);c(Ae);var ve=h(Ae,2),ke=d(ve,!0);c(ve),c(B),L((Ie,Re)=>{rr(B,1,`action-button report-button ${f(N)?"reported":""}`,"svelte-110g7vh"),Ee(B,"title",Ie),_(ee,f(N)?"🚩":"🚨"),_(ke,Re)},[()=>t()("신고"),()=>t()("신고")]),x(j,B)};F(We,j=>{l()&&j(Ge)})}var Qe=h(We,2);{var lt=j=>{var B=NA();B.__click=S;var Ae=d(B);l_(Ae,{size:14}),c(B),L(ee=>Ee(B,"title",ee),[()=>t()("수정")]),x(j,B)};F(Qe,j=>{l()&&l()===a().uid&&j(lt)})}var ut=h(Qe,2);{var pt=j=>{var B=$A();B.__click=H;var Ae=d(B);th(Ae,{size:14}),c(B),L(ee=>Ee(B,"title",ee),[()=>t()("삭제")]),x(j,B)};F(ut,j=>{l()&&l()===a().uid&&j(pt)})}c(Ce),c(Y);var Se=h(Y,2);{var Pe=j=>{var B=LA();B.__click=E;var Ae=d(B);Ae.__click=Xe=>Xe.stopPropagation();var ee=d(Ae),ve=d(ee),ke=d(ve,!0);c(ve);var Ie=h(ve,2);Ie.__click=E,c(ee);var Re=h(ee,2),we=d(Re);Ro(we),Ao(we,!0),c(Re);var me=h(Re,2),Be=d(me);L(()=>st(Be,"id",`comment-reply-${a().commentId??""}`)),st(Be,"category","comments"),st(Be,"multiple","true"),L(()=>st(Be,"buttonText",t()("이미지첨부")));var ht=h(Be,2),ft=d(ht);ft.__click=E;var It=d(ft,!0);c(ft);var Ve=h(ft,2);Ve.__click=C;var bt=d(Ve,!0);c(Ve),c(ht),c(me);var At=h(me,2);L(()=>st(At,"id",`comment-reply-${a().commentId??""}`)),c(Ae),c(B),qa(B,Xe=>ul?.(Xe)),L((Xe,Ht,Gt,Zt)=>{_(ke,Xe),Ee(we,"placeholder",Ht),_(It,Gt),Ve.disabled=f(g),_(bt,Zt)},[()=>t()("답글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>f(g)?t()("전송중"):t()("전송")]),hn(we,()=>f(b),Xe=>y(b,Xe)),x(j,B)};F(Se,j=>{f(v)&&j(Pe)})}var ze=h(Se,2);{var Ke=j=>{var B=DA();B.__click=M;var Ae=d(B);Ae.__click=Xe=>Xe.stopPropagation();var ee=d(Ae),ve=d(ee),ke=d(ve,!0);c(ve);var Ie=h(ve,2);Ie.__click=M,c(ee);var Re=h(ee,2),we=d(Re);Ro(we),Ao(we,!0),c(Re);var me=h(Re,2),Be=d(me);L(()=>st(Be,"id",`comment-edit-${a().commentId??""}`)),st(Be,"category","comments"),st(Be,"multiple","true"),L(()=>st(Be,"buttonText",t()("이미지첨부")));var ht=h(Be,2),ft=d(ht);ft.__click=M;var It=d(ft,!0);c(ft);var Ve=h(ft,2);Ve.__click=O;var bt=d(Ve,!0);c(Ve),c(ht),c(me);var At=h(me,2);L(()=>st(At,"id",`comment-edit-${a().commentId??""}`)),L(()=>st(At,"initial-urls",JSON.stringify(a().urls||[]))),c(Ae),c(B),qa(B,Xe=>ul?.(Xe)),L((Xe,Ht,Gt,Zt)=>{_(ke,Xe),Ee(we,"placeholder",Ht),_(It,Gt),Ve.disabled=f(I),_(bt,Zt)},[()=>t()("댓글수정"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>f(I)?t()("수정중"):t()("수정")]),hn(we,()=>f(k),Xe=>y(k,Xe)),x(j,B)};F(ze,j=>{f(w)&&j(Ke)})}var Le=h(ze,2);{var vt=j=>{var B=OA();st(B,"open","true"),st(B,"type","warning"),L(()=>st(B,"title",t()("알림"))),L(()=>st(B,"message",f($))),L(()=>st(B,"confirmText",t()("확인"))),Pn("confirm",B,()=>{y(P,!1)}),Pn("close",B,()=>{y(P,!1)}),x(j,B)};F(Le,j=>{f(P)&&j(vt)})}var ct=h(Le,2);ah(ct,{type:"comment",onSubmit:te,onCancel:Z,get show(){return f(q)},set show(j){y(q,j,!0)}}),L((j,B)=>{wl(Y,`padding-left: ${1.5+(a().depth-1)*2}rem;`),_(se,j),_(ie,B),_(xe,a().content)},[()=>n().data?.displayName||t()("익명"),()=>new Date(a().createdAt).toLocaleDateString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),x(r,z);var Ze=at(W);return o(),Ze}xt(["click"]);be(O_,{comment:{},userId:{}},[],[],!0);var zA=R('<a target="_blank" rel="noopener noreferrer" class="file-item image-item svelte-1fsdsc8"><img alt="첨부 이미지" class="file-image svelte-1fsdsc8"/></a>'),UA=R('<div class="file-item video-item svelte-1fsdsc8"><video controls class="file-video svelte-1fsdsc8"><track kind="captions"/> 브라우저가 비디오를 지원하지 않습니다.</video></div>',2),FA=R('<a target="_blank" rel="noopener noreferrer" class="file-item download-item svelte-1fsdsc8"><div class="file-icon svelte-1fsdsc8">📎</div> <div class="file-name svelte-1fsdsc8"> </div></a>'),jA=R('<div class="post-files-preview svelte-1fsdsc8"></div>'),BA=R('<span class="count svelte-1fsdsc8"> </span>'),VA=R('<span class="count svelte-1fsdsc8"> </span>'),HA=R('<button class="action-btn edit icon-only svelte-1fsdsc8"><!></button> <button class="action-btn delete icon-only svelte-1fsdsc8"><!></button>',1),WA=R('<button class="comments-show-more svelte-1fsdsc8"> </button>'),GA=R('<button class="comments-hide-extra svelte-1fsdsc8"> </button>'),KA=R('<div class="comments-list svelte-1fsdsc8"><!> <!> <!></div>'),YA=R('<div class="comments-section svelte-1fsdsc8"><button class="comments-toggle svelte-1fsdsc8"> </button> <!></div>'),QA=R("<alert-dialog></alert-dialog>",2),XA=R('<div class="modal-backdrop svelte-1fsdsc8"><div class="modal svelte-1fsdsc8"><div class="modal-header svelte-1fsdsc8"><h2 class="svelte-1fsdsc8"> </h2> <button class="btn-close svelte-1fsdsc8">×</button></div> <div class="modal-content svelte-1fsdsc8"><textarea rows="5" class="svelte-1fsdsc8"></textarea></div> <div class="modal-footer svelte-1fsdsc8"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-1fsdsc8"><button class="btn-cancel svelte-1fsdsc8"> </button> <button class="btn-submit svelte-1fsdsc8"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),JA=R('<div class="modal-backdrop svelte-1fsdsc8"><div class="modal svelte-1fsdsc8"><div class="modal-header svelte-1fsdsc8"><h2 class="svelte-1fsdsc8"> </h2> <button class="btn-close svelte-1fsdsc8">×</button></div> <div class="modal-content edit-form svelte-1fsdsc8"><input type="text" class="edit-title-input"/> <textarea rows="10" class="edit-content-textarea svelte-1fsdsc8"></textarea></div> <div class="modal-footer svelte-1fsdsc8"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-1fsdsc8"><button class="btn-cancel svelte-1fsdsc8"> </button> <button class="btn-submit svelte-1fsdsc8"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),ZA=R('<div class="post-item svelte-1fsdsc8"><div class="post-item-top svelte-1fsdsc8"><span class="post-category-pill svelte-1fsdsc8"> </span> <span class="post-number svelte-1fsdsc8"> </span></div> <h3 class="post-title svelte-1fsdsc8"> </h3> <!> <p class="post-content svelte-1fsdsc8"> </p> <div class="post-meta svelte-1fsdsc8"><div class="author-chip svelte-1fsdsc8"><span class="author-avatar svelte-1fsdsc8"> </span> <span class="post-author"> </span></div> <span class="post-date svelte-1fsdsc8"> </span></div> <div class="post-actions svelte-1fsdsc8"><div class="post-actions-left svelte-1fsdsc8"><button class="action-btn svelte-1fsdsc8"><span class="icon svelte-1fsdsc8">💬</span> <!></button> <button><span class="icon svelte-1fsdsc8"> </span> <!></button> <button class="action-btn svelte-1fsdsc8"><span class="icon svelte-1fsdsc8">💬</span> </button> <button><span class="icon svelte-1fsdsc8"> </span> </button></div> <div class="post-actions-right svelte-1fsdsc8"><!></div></div> <!></div> <!> <!> <!> <!>',1);const eR={hash:"svelte-1fsdsc8",code:`.post-item.svelte-1fsdsc8 {padding:1.5rem 1.75rem;border-radius:0.85rem;background:linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);border:1px solid #e5e7eb;display:flex;flex-direction:column;gap:1rem;transition:transform 0.2s ease,
      box-shadow 0.2s ease;margin:1rem 0;}.post-item.svelte-1fsdsc8:hover {transform:translateY(-2px);box-shadow:0 16px 28px rgba(17, 24, 39, 0.12);}.post-item-top.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;}.post-category-pill.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.35rem;padding:0.35rem 0.75rem;border-radius:9999px;font-size:0.75rem;font-weight:600;color:#1d4ed8;background-color:#eff6ff;}.post-number.svelte-1fsdsc8 {font-weight:700;color:#9ca3af;font-size:0.9rem;}.post-title.svelte-1fsdsc8 {margin:0;font-size:1.2rem;font-weight:700;color:#111827;line-height:1.5;}.post-content.svelte-1fsdsc8 {margin:0;font-size:0.925rem;color:#4b5563;line-height:1.7;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}.post-meta.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;gap:1rem;font-size:0.8rem;color:#6b7280;}.author-chip.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.5rem;}.author-avatar.svelte-1fsdsc8 {width:2rem;height:2rem;border-radius:9999px;background:#1d4ed8;color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;}.post-date.svelte-1fsdsc8 {color:#9ca3af;font-variant-numeric:tabular-nums;}.post-actions.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding-top:0.5rem;}.post-actions-left.svelte-1fsdsc8,
  .post-actions-right.svelte-1fsdsc8 {display:flex;align-items:center;gap:0.25rem;flex-wrap:wrap;}.action-btn.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.3rem;padding:0.4rem 0.65rem;border:none;border-radius:0.5rem;background-color:transparent;color:#6b7280;font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}.action-btn.svelte-1fsdsc8:hover {background-color:#f3f4f6;color:#111827;}.action-btn.svelte-1fsdsc8:active {transform:scale(0.95);}

  /* 좋아요 한 버튼 강조 표시 */.action-btn.liked.svelte-1fsdsc8 {background-color:#fee2e2;color:#dc2626;font-weight:600;}.action-btn.liked.svelte-1fsdsc8:hover {background-color:#fecaca;color:#b91c1c;}

  /* 신고한 버튼 강조 표시 */.action-btn.reported.svelte-1fsdsc8 {background-color:#fef3c7;color:#d97706;font-weight:600;}.action-btn.reported.svelte-1fsdsc8:hover {background-color:#fde68a;color:#b45309;}.count.svelte-1fsdsc8 {font-weight:600;font-size:0.75rem;}

  /* === 모달 다이얼로그 스타일 === */

  /* 모달 배경 (반투명 오버레이) */.modal-backdrop.svelte-1fsdsc8 {position:fixed;inset:0;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:2500; /* PostListPage 모달(z-index: 2000)보다 높게 설정 */padding:1rem;}

  /* 모달 컨테이너 */.modal.svelte-1fsdsc8 {background-color:#ffffff;border-radius:1rem;box-shadow:0 20px 40px rgba(0, 0, 0, 0.2);max-width:500px;width:100%;max-height:calc(100vh - 2rem); /* 상하 여백을 고려한 최대 높이 */overflow-y:auto; /* 모달 내용이 길 경우 스크롤 가능 */}

  /* 모달 헤더 */.modal-header.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;padding:1.5rem;border-bottom:1px solid #e5e7eb;}.modal-header.svelte-1fsdsc8 h2:where(.svelte-1fsdsc8) {margin:0;font-size:1.25rem;font-weight:700;color:#111827;}.btn-close.svelte-1fsdsc8 {background:none;border:none;font-size:2rem;color:#6b7280;cursor:pointer;line-height:1;padding:0;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:0.5rem;transition:all 0.2s ease;}.btn-close.svelte-1fsdsc8:hover {background-color:#f3f4f6;color:#111827;}

  /* 모달 내용 */.modal-content.svelte-1fsdsc8 {padding:1.5rem;}.modal-content.svelte-1fsdsc8 textarea:where(.svelte-1fsdsc8) {width:100%;padding:0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.95rem;font-family:inherit;resize:vertical;min-height:120px;transition:border-color 0.2s ease;}.modal-content.svelte-1fsdsc8 textarea:where(.svelte-1fsdsc8):focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}

  /* 모달 푸터 */.modal-footer.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between; /* 왼쪽(이미지 버튼)/오른쪽(취소/전송) 배치 */gap:1rem;padding:1.5rem;border-top:1px solid #e5e7eb;}

  /* 취소/전송 버튼 그룹 */.button-group.svelte-1fsdsc8 {display:flex;align-items:center;gap:0.75rem;margin-left:auto; /* 오른쪽 정렬 */}.btn-cancel.svelte-1fsdsc8,
  .btn-submit.svelte-1fsdsc8 {padding:0.65rem 1.25rem;border-radius:0.5rem;font-size:0.95rem;font-weight:600;cursor:pointer;border:none;transition:all 0.2s ease;}.btn-cancel.svelte-1fsdsc8 {background-color:#f3f4f6;color:#374151;}.btn-cancel.svelte-1fsdsc8:hover {background-color:#e5e7eb;}.btn-submit.svelte-1fsdsc8 {background-color:#3b82f6;color:#ffffff;}.btn-submit.svelte-1fsdsc8:hover:not(:disabled) {background-color:#2563eb;}.btn-submit.svelte-1fsdsc8:disabled {opacity:0.6;cursor:not-allowed;}.btn-submit.svelte-1fsdsc8:active:not(:disabled) {transform:scale(0.98);}

  /* === 댓글 목록 스타일 === */

  /* 댓글 섹션 */.comments-section.svelte-1fsdsc8 {margin-top:1rem;padding-top:1rem;border-top:1px solid #e5e7eb;}

  /* 댓글 토글 버튼 */.comments-toggle.svelte-1fsdsc8 {width:100%;padding:0.5rem 0.75rem;background:none;border:none;text-align:left;font-size:0.9rem;font-weight:600;color:#374151;cursor:pointer;display:flex;align-items:center;gap:0.5rem;transition:all 0.2s ease;}.comments-toggle.svelte-1fsdsc8:hover {color:#111827;background-color:#f9fafb;}

  /* 댓글 목록 */.comments-list.svelte-1fsdsc8 {margin-top:0.75rem;display:flex;flex-direction:column;gap:0.75rem;}

  /* 댓글 더 보기 버튼 */.comments-show-more.svelte-1fsdsc8 {margin-top:0.75rem;padding:0.65rem 1rem;width:100%;background-color:#f0f4ff;color:#3b82f6;border:1px solid #d1d5ff;border-radius:0.5rem;font-size:0.875rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;text-align:center;}.comments-show-more.svelte-1fsdsc8:hover {background-color:#e0eaff;border-color:#3b82f6;transform:translateY(-1px);}.comments-show-more.svelte-1fsdsc8:active {transform:translateY(0);}

  /* 댓글 숨기기 버튼 */.comments-hide-extra.svelte-1fsdsc8 {margin-top:0.75rem;padding:0.65rem 1rem;width:100%;background-color:#f9fafb;color:#6b7280;border:1px solid #e5e7eb;border-radius:0.5rem;font-size:0.875rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;text-align:center;}.comments-hide-extra.svelte-1fsdsc8:hover {background-color:#f3f4f6;border-color:#d1d5db;color:#374151;}.comments-hide-extra.svelte-1fsdsc8:active {transform:translateY(0);}

  /* === 게시글 첨부 파일 미리보기 스타일 === */

  /* 파일 미리보기 컨테이너: 그리드 레이아웃 (반응형) */.post-files-preview.svelte-1fsdsc8 {display:grid;grid-template-columns:repeat(auto-fill, minmax(100px, 1fr));gap:0.75rem;margin:0.75rem 0;padding:0.75rem;background-color:#f9fafb;border-radius:0.5rem;border:1px solid #e5e7eb;}

  /* 개별 파일 아이템 (이미지, 동영상, 다운로드) */.file-item.svelte-1fsdsc8 {position:relative;aspect-ratio:1;border-radius:0.375rem;overflow:hidden;background-color:#f3f4f6;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all 0.2s ease;}

  /* 이미지 아이템 */.file-item.image-item.svelte-1fsdsc8:hover {transform:scale(1.05);box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);}

  /* 이미지 */.file-image.svelte-1fsdsc8 {width:100%;height:100%;object-fit:cover;}

  /* 동영상 */.file-video.svelte-1fsdsc8 {width:100%;height:100%;object-fit:cover;border-radius:0.375rem;}

  /* 동영상 아이템 */.file-item.video-item.svelte-1fsdsc8 {background-color:#000000;}

  /* 다운로드 아이템 */.file-item.download-item.svelte-1fsdsc8 {flex-direction:column;padding:0.5rem;background-color:#ffffff;border:1px solid #d1d5db;gap:0.25rem;}.file-item.download-item.svelte-1fsdsc8:hover {background-color:#f9fafb;border-color:#3b82f6;transform:translateY(-2px);box-shadow:0 4px 8px rgba(59, 130, 246, 0.2);}

  /* 파일 아이콘 (다운로드용) */.file-icon.svelte-1fsdsc8 {font-size:2rem;opacity:0.6;}

  /* 파일명 (다운로드용) */.file-name.svelte-1fsdsc8 {font-size:0.7rem;color:#6b7280;text-align:center;word-break:break-all;line-height:1.2;max-height:2.4em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}.file-item.download-item.svelte-1fsdsc8:hover .file-name:where(.svelte-1fsdsc8) {color:#3b82f6;}

  /* === 반응형 스타일 === */

  /* 모바일 화면 (768px 이하): 아이콘 숨김, 텍스트만 표시 */
  @media (max-width: 768px) {.action-btn.svelte-1fsdsc8 .icon:where(.svelte-1fsdsc8) {display:none;}

    /* PostItem 좌우 여백 최소화 */.post-item.svelte-1fsdsc8 {padding:1.25rem 0.75rem;border-radius:0;margin:0;}
  }

  /* 매우 작은 화면 (480px 이하): 여백 더욱 최소화 */
  @media (max-width: 480px) {.post-item.svelte-1fsdsc8 {padding:1rem 0.5rem;border-radius:0;margin:0;}
  }

  /* 데스크톱 화면 (769px 이상): 아이콘과 텍스트 모두 표시 */
  @media (min-width: 769px) {
    /* 아이콘과 텍스트 모두 표시 (기본 동작) */
  }`};function M_(r,e){ot(e,!0),nt(r,eR);const t=()=>Je(qt,"$t",s),n=()=>Je(v,"$myLikeStore",s),[s,i]=$t();let o=Fe(e,"itemData",7),a=Fe(e,"index",7),l=Fe(e,"category",7),u=Fe(e,"userId",7),p=Fe(e,"onLike",7,()=>{});const m=o().postId.startsWith("-")?o().postId.substring(1):o().postId,v=u()?y_(`likes/post-${m}-${u()}`,0):null;let b=ne(!1),g=ne(""),w=ne(!1),k=ne(!1),I=ne(""),P=ne(""),$=ne(!1),N=ne(!1),q=ne(hr([])),T=ne(!0),A=ne(!1),C=ne(!1),E=ne(!1);const S=5;function O(){return f(A)?f(q):f(q).length>S?f(q).slice(-S):f(q)}Jt(()=>{const Q=DT(o().postId,pe=>{y(q,pe,!0)});return u()&&P_("post",o().postId,u()).then(pe=>{y(C,pe.isReported,!0)}),()=>{Q()}});async function M(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const Q=await k_("post",o().postId,u());Q.success?(Q.isLiked?Ne(t()("좋아요를하였습니다"),"success"):Ne(t()("좋아요를취소했습니다"),"info"),p()(o().postId)):Ne(t()(Q.error||"error.unknown"),"error")}catch(Q){console.error("좋아요 오류:",Q),Ne(t()("error.unknown"),"error")}}function H(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}y(b,!0)}async function X(){if(!u()){Ne(t()("로그인필요"),"error");return}if(!f(g).trim()){Ne(t()("댓글내용입력필요"),"error");return}y(w,!0);try{const Q=Di(`comment-create-${o().postId}`),pe=await $T({postId:o().postId,userId:u(),content:f(g),urls:Q.length>0?Q:void 0});pe.success?(kn(`comment-create-${o().postId}`),Ne(t()("댓글이작성되었습니다"),"success"),y(b,!1),y(g,""),y(T,!0)):Ne(t()(pe.error||"error.unknown"),"error")}catch(Q){console.error("댓글 생성 오류:",Q),Ne(t()("error.unknown"),"error")}finally{y(w,!1)}}function V(){kn(`comment-create-${o().postId}`),y(b,!1),y(g,"")}function le(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}if(f(q).length>0){y(N,!0);return}y(I,o().title,!0),y(P,o().content,!0),y(k,!0)}function ue(){y(N,!1)}function te(){kn(`post-edit-${o().postId}`),y(k,!1),y(I,""),y(P,"")}async function fe(){if(!u()){Ne(t()("로그인필요"),"error");return}if(!f(I).trim()||!f(P).trim()){Ne(t()("제목과내용을입력하세요"),"error");return}y($,!0);try{const Q=Di(`post-edit-${o().postId}`),pe=await RT(o().postId,{title:f(I).trim(),content:f(P).trim(),urls:Q.length>0?Q:void 0});pe.success?(kn(`post-edit-${o().postId}`),Ne(t()("게시글수정완료"),"success"),y(k,!1),y(I,""),y(P,"")):Ne(t()(pe.error||"error.unknown"),"error")}catch(Q){console.error("게시글 수정 오류:",Q),Ne(t()("error.unknown"),"error")}finally{y($,!1)}}async function Z(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}if(confirm(t()("게시글삭제확인")))try{const Q=await PT(o().postId);Q.success?Ne(t()("게시글삭제완료"),"success"):Ne(t()(Q.error||"error.unknown"),"error")}catch(Q){console.error("게시글 삭제 오류:",Q),Ne(t()("error.unknown"),"error")}}function W(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}f(C)?confirm(t()("신고를취소하시겠습니까"))&&Y():y(E,!0)}async function z(Q,pe){if(!u()){Ne(t()("로그인필요"),"error");return}try{const De=await R_("post",o().postId,u(),Q,pe);De.success?(Ne(t()("신고가접수되었습니다"),"success"),y(C,!0),y(E,!1)):Ne(t()(De.error||"error.unknown"),"error")}catch(De){console.error("신고 추가 오류:",De),Ne(t()("error.unknown"),"error")}}async function Y(){if(!u()){Ne(t()("로그인필요"),"error");return}try{const Q=await oh("post",o().postId,u());Q.success?(Ne(t()("신고가취소되었습니다"),"success"),y(C,!1)):Ne(t()(Q.error||"error.unknown"),"error")}catch(Q){console.error("신고 취소 오류:",Q),Ne(t()("error.unknown"),"error")}}function re(){y(E,!1)}function J(Q){const pe=Q.toLowerCase();return pe.includes(".jpg")||pe.includes(".jpeg")||pe.includes(".png")||pe.includes(".gif")||pe.includes(".webp")}function D(Q){const pe=Q.toLowerCase();return pe.includes(".mp4")||pe.includes(".webm")||pe.includes(".mov")||pe.includes(".avi")||pe.includes(".mkv")}function G(Q){try{return new URL(Q).pathname.split("/").pop()||"file"}catch{return"file"}}var ce={get itemData(){return o()},set itemData(Q){o(Q),Oe()},get index(){return a()},set index(Q){a(Q),Oe()},get category(){return l()},set category(Q){l(Q),Oe()},get userId(){return u()},set userId(Q){u(Q),Oe()},get onLike(){return p()},set onLike(Q=()=>{}){p(Q),Oe()}},K=ZA(),se=de(K),U=d(se),ie=d(U),oe=d(ie,!0);c(ie);var xe=h(ie,2),he=d(xe);c(xe),c(U);var ge=h(U,2),Ce=d(ge,!0);c(ge);var Te=h(ge,2);{var qe=Q=>{var pe=jA();nr(pe,20,()=>o().urls,De=>De,(De,mt)=>{var wt=_e(),_r=de(wt);{var tr=zt=>{var Ut=zA(),Rt=d(Ut);c(Ut),L(()=>{Ee(Ut,"href",mt),Ee(Rt,"src",mt)}),x(zt,Ut)},Wt=zt=>{var Ut=_e(),Rt=de(Ut);{var br=Dt=>{var Pt=UA(),ir=d(Pt);c(Pt),L(()=>Ee(ir,"src",mt)),x(Dt,Pt)},Cr=Dt=>{var Pt=FA(),ir=h(d(Pt),2),Jr=d(ir,!0);c(ir),c(Pt),L(Dr=>{Ee(Pt,"href",mt),_(Jr,Dr)},[()=>G(mt)]),x(Dt,Pt)};F(Rt,Dt=>{D(mt)?Dt(br):Dt(Cr,!1)},!0)}x(zt,Ut)};F(_r,zt=>{J(mt)?zt(tr):zt(Wt,!1)})}x(De,wt)}),c(pe),x(Q,pe)};F(Te,Q=>{o().urls&&o().urls.length>0&&Q(qe)})}var je=h(Te,2),He=d(je,!0);c(je);var We=h(je,2),Ge=d(We),Qe=d(Ge),lt=d(Qe,!0);c(Qe);var ut=h(Qe,2),pt=d(ut,!0);c(ut),c(Ge);var Se=h(Ge,2),Pe=d(Se,!0);c(Se),c(We);var ze=h(We,2),Ke=d(ze),Le=d(Ke);Le.__click=H;var vt=h(d(Le)),ct=h(vt);{var Ze=Q=>{var pe=BA(),De=d(pe,!0);c(pe),L(()=>_(De,f(q).length)),x(Q,pe)};F(ct,Q=>{f(q).length>0&&Q(Ze)})}c(Le);var j=h(Le,2);j.__click=M;var B=d(j),Ae=d(B,!0);c(B);var ee=h(B),ve=h(ee);{var ke=Q=>{var pe=VA(),De=d(pe,!0);c(pe),L(()=>_(De,o().likeCount)),x(Q,pe)};F(ve,Q=>{o().likeCount>0&&Q(ke)})}c(j);var Ie=h(j,2),Re=h(d(Ie));c(Ie);var we=h(Ie,2);we.__click=W;var me=d(we),Be=d(me,!0);c(me);var ht=h(me);c(we),c(Ke);var ft=h(Ke,2),It=d(ft);{var Ve=Q=>{var pe=HA(),De=de(pe);De.__click=le;var mt=d(De);f_(mt,{size:18}),c(De);var wt=h(De,2);wt.__click=Z;var _r=d(wt);th(_r,{size:18}),c(wt),L((tr,Wt)=>{Ee(De,"title",tr),Ee(wt,"title",Wt)},[()=>t()("게시글수정"),()=>t()("삭제")]),x(Q,pe)};F(It,Q=>{u()===o().uid&&Q(Ve)})}c(ft),c(ze);var bt=h(ze,2);{var At=Q=>{var pe=YA(),De=d(pe);De.__click=()=>y(T,!f(T));var mt=d(De);c(De);var wt=h(De,2);{var _r=tr=>{var Wt=KA(),zt=d(Wt);nr(zt,17,O,Dt=>Dt.commentId,(Dt,Pt)=>{O_(Dt,{get comment(){return f(Pt)},get userId(){return u()}})});var Ut=h(zt,2);{var Rt=Dt=>{var Pt=WA();Pt.__click=()=>y(A,!0);var ir=d(Pt);c(Pt),L(Jr=>_(ir,`📋 ${Jr??""}`),[()=>t()("댓글더보기",{count:f(q).length-S})]),x(Dt,Pt)};F(Ut,Dt=>{f(q).length>S&&!f(A)&&Dt(Rt)})}var br=h(Ut,2);{var Cr=Dt=>{var Pt=GA();Pt.__click=()=>y(A,!1);var ir=d(Pt);c(Pt),L(Jr=>_(ir,`▲ ${Jr??""}`),[()=>t()("댓글숨기기")]),x(Dt,Pt)};F(br,Dt=>{f(A)&&Dt(Cr)})}c(Wt),x(tr,Wt)};F(wt,tr=>{f(T)&&tr(_r)})}c(pe),L(tr=>_(mt,`${f(T)?"▼":"▶"}
        ${tr??""} (${f(q).length??""})`),[()=>t()("댓글")]),x(Q,pe)};F(bt,Q=>{f(q).length>0&&Q(At)})}c(se);var Xe=h(se,2);{var Ht=Q=>{var pe=QA();st(pe,"open","true"),st(pe,"type","error"),L(()=>st(pe,"title",t()("수정불가"))),L(()=>st(pe,"message",t()("댓글이달려있어수정불가메시지"))),L(()=>st(pe,"confirmText",t()("확인"))),Pn("confirm",pe,ue),Pn("close",pe,ue),x(Q,pe)};F(Xe,Q=>{f(N)&&Q(Ht)})}var Gt=h(Xe,2);ah(Gt,{type:"post",onSubmit:z,onCancel:re,get show(){return f(E)},set show(Q){y(E,Q,!0)}});var Zt=h(Gt,2);{var Lr=Q=>{var pe=XA();pe.__click=V;var De=d(pe);De.__click=Dr=>Dr.stopPropagation();var mt=d(De),wt=d(mt),_r=d(wt,!0);c(wt);var tr=h(wt,2);tr.__click=V,c(mt);var Wt=h(mt,2),zt=d(Wt);Ro(zt),Ao(zt,!0),c(Wt);var Ut=h(Wt,2),Rt=d(Ut);L(()=>st(Rt,"id",`comment-create-${o().postId??""}`)),st(Rt,"category","comments"),st(Rt,"multiple","true"),L(()=>st(Rt,"buttonText",t()("이미지첨부")));var br=h(Rt,2),Cr=d(br);Cr.__click=V;var Dt=d(Cr,!0);c(Cr);var Pt=h(Cr,2);Pt.__click=X;var ir=d(Pt,!0);c(Pt),c(br),c(Ut);var Jr=h(Ut,2);L(()=>st(Jr,"id",`comment-create-${o().postId??""}`)),c(De),c(pe),qa(pe,Dr=>ul?.(Dr)),L((Dr,Or,oi,Yi)=>{_(_r,Dr),Ee(zt,"placeholder",Or),_(Dt,oi),Pt.disabled=f(w),_(ir,Yi)},[()=>t()("댓글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>f(w)?t()("전송중"):t()("전송")]),hn(zt,()=>f(g),Dr=>y(g,Dr)),x(Q,pe)};F(Zt,Q=>{f(b)&&Q(Lr)})}var Lt=h(Zt,2);{var er=Q=>{var pe=JA();pe.__click=te;var De=d(pe);De.__click=Or=>Or.stopPropagation();var mt=d(De),wt=d(mt),_r=d(wt,!0);c(wt);var tr=h(wt,2);tr.__click=te,c(mt);var Wt=h(mt,2),zt=d(Wt);Jn(zt),Ao(zt,!0);var Ut=h(zt,2);Ro(Ut),c(Wt);var Rt=h(Wt,2),br=d(Rt);L(()=>st(br,"id",`post-edit-${o().postId??""}`)),st(br,"category","posts"),st(br,"multiple","true"),L(()=>st(br,"buttonText",t()("이미지첨부")));var Cr=h(br,2),Dt=d(Cr);Dt.__click=te;var Pt=d(Dt,!0);c(Dt);var ir=h(Dt,2);ir.__click=fe;var Jr=d(ir,!0);c(ir),c(Cr),c(Rt);var Dr=h(Rt,2);L(()=>st(Dr,"id",`post-edit-${o().postId??""}`)),L(()=>st(Dr,"initial-urls",JSON.stringify(o().urls||[]))),c(De),c(pe),qa(pe,Or=>ul?.(Or)),L((Or,oi,Yi,pa,Qi)=>{_(_r,Or),Ee(zt,"placeholder",oi),Ee(Ut,"placeholder",Yi),_(Pt,pa),ir.disabled=f($),_(Jr,Qi)},[()=>t()("게시글수정"),()=>t()("제목입력"),()=>t()("내용입력"),()=>t()("취소"),()=>f($)?t()("저장중"):t()("저장")]),hn(zt,()=>f(I),Or=>y(I,Or)),hn(Ut,()=>f(P),Or=>y(P,Or)),x(Q,pe)};F(Lt,Q=>{f(k)&&Q(er)})}L((Q,pe,De,mt,wt,_r,tr,Wt,zt,Ut,Rt,br)=>{_(oe,l()),_(he,`#${Q??""}`),_(Ce,o().title),_(He,o().content),_(lt,pe),_(pt,De),_(Pe,mt),Ee(Le,"title",wt),_(vt,` ${_r??""} `),rr(j,1,`action-btn ${(n()?.data??0)>=1?"liked":""}`,"svelte-1fsdsc8"),Ee(j,"title",tr),_(Ae,(n()?.data??0)>=1?"❤️":"🤍"),_(ee,` ${Wt??""} `),Ee(Ie,"title",zt),_(Re,` ${Ut??""}`),rr(we,1,`action-btn ${f(C)?"reported":""}`,"svelte-1fsdsc8"),Ee(we,"title",Rt),_(Be,f(C)?"🚩":"🚨"),_(ht,` ${br??""}`)},[()=>String(a()+1).padStart(2,"0"),()=>(o().author||t()("익명")).charAt(0).toUpperCase(),()=>o().author||t()("익명"),()=>new Date(o().createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),()=>t()("댓글"),()=>t()("댓글"),()=>t()("좋아요"),()=>t()("좋아요"),()=>t()("채팅"),()=>t()("채팅"),()=>t()("신고"),()=>t()("신고")]),x(r,K);var Tt=at(ce);return i(),Tt}xt(["click"]);be(M_,{itemData:{},index:{},category:{},userId:{},onLike:{}},[],[],!0);var tR=R('<div class="loading-screen"><p> </p></div>'),rR=R("<button> </button>"),nR=R('<div class="empty-state"><div class="empty-illustration">🗂️</div> <h3 class="empty-title"> </h3> <p class="empty-message"> </p> <button class="btn-create-post ghost svelte-1r1wwfo"> </button></div>'),sR=R('<div class="loading-state"><div class="spinner"></div> <p> </p></div>'),iR=R('<div class="error-state"><div class="error-icon">⚠️</div> <div><p class="error-message"> </p> <p class="error-detail"> </p></div></div>'),oR=R('<div class="loading-more"><div class="spinner small"></div> <p> </p></div>'),aR=R('<div class="no-more"><p> </p></div>'),lR=R('<div class="category-display svelte-1r1wwfo"><span class="category-name svelte-1r1wwfo"> </span> <button type="button" class="btn-change-category svelte-1r1wwfo">(변경하기)</button></div>'),cR=R('<label class="radio-option svelte-1r1wwfo"><input type="radio" name="category" class="svelte-1r1wwfo"/> <span class="radio-label svelte-1r1wwfo"> </span></label>'),dR=R('<div class="category-select-mode svelte-1r1wwfo"></div>'),uR=R('<div class="modal-backdrop svelte-1r1wwfo" aria-hidden="true"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo"> </h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo"> </label> <!></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo"> </label> <input id="title" type="text" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo"> </label> <textarea id="content" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo"> </button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),hR=R('<div class="post-list-container svelte-1r1wwfo"><div class="toolbar svelte-1r1wwfo"><div class="toolbar-left svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div></div> <button class="btn-create-post svelte-1r1wwfo"> </button></div> <div class="post-list-surface svelte-1r1wwfo"><!></div></div> <!>',1);const fR={hash:"svelte-1r1wwfo",code:`\r
  /* 레이아웃 컨테이너 */.post-list-container.svelte-1r1wwfo {width:100%;max-width:72rem;margin:0 auto;\r
    /* 여백 최소화: 상/하 1.5rem, 좌/우 1rem */padding:1.5rem 1rem 2rem;display:flex;flex-direction:column;\r
    /* 섹션 간 여백 줄임 */gap:1.25rem;}\r
\r
  /* 상단 도구 모음 */.toolbar.svelte-1r1wwfo {display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:1rem 1.5rem;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:0.75rem;box-shadow:0 12px 30px rgba(15, 23, 42, 0.06);}.toolbar-left.svelte-1r1wwfo {display:flex;align-items:center;gap:0.75rem;flex:1;min-width:0;}.category-tabs.svelte-1r1wwfo {display:flex;gap:0.5rem;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;}.category-tabs.svelte-1r1wwfo::-webkit-scrollbar {display:none;}.tab.svelte-1r1wwfo {padding:0.55rem 0.9rem;border-radius:9999px;border:1px solid transparent;background-color:transparent;color:#4b5563;font-size:0.85rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}.tab.svelte-1r1wwfo:hover {background-color:#f3f4f6;}.tab.active.svelte-1r1wwfo {background-color:#111827;border-color:#111827;color:#ffffff;box-shadow:0 8px 18px rgba(17, 24, 39, 0.2);}\r
\r
  /* 글쓰기 버튼 */.btn-create-post.svelte-1r1wwfo {padding:0.65rem 1.25rem;background:linear-gradient(135deg, #3b82f6, #2563eb);color:#ffffff;border:none;border-radius:0.75rem;font-size:0.875rem;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:0.4rem;transition:transform 0.2s ease,\r
      box-shadow 0.2s ease;flex-shrink:0;}.btn-create-post.svelte-1r1wwfo:hover {transform:translateY(-1px);box-shadow:0 12px 24px rgba(37, 99, 235, 0.25);}.btn-create-post.ghost.svelte-1r1wwfo {background:#ffffff;color:#1d4ed8;border:1px solid #bfdbfe;box-shadow:none;}.btn-create-post.ghost.svelte-1r1wwfo:hover {background:#eff6ff;}\r
\r
  /* 게시글 목록 배경 */.post-list-surface.svelte-1r1wwfo {background:transparent;\r
    /* 테두리 제거 - 각 글 카드의 보더가 있으므로 불필요 */border:none;border-radius:1rem;\r
    /* 여백 최소화 */padding:0.5rem 0 1rem 0;box-shadow:none;\r
    /* 게시글 카드 사이 여백 추가: gap 사용 */\r
    /* DatabaseListView의 내부 구조와 무관하게 reliable하게 작동 */display:flex;flex-direction:column;gap:0.75rem;}\r
\r
  /* === Modal Dialog === */.modal-backdrop.svelte-1r1wwfo {position:fixed;inset:0;background:rgba(15, 23, 42, 0.45);display:flex;align-items:center;justify-content:center;padding:1.5rem;z-index:2000;backdrop-filter:blur(2px);}.modal.svelte-1r1wwfo {width:min(90vw, 480px);background:#ffffff;border-radius:1rem;box-shadow:0 25px 60px rgba(15, 23, 42, 0.22);display:flex;flex-direction:column;overflow:hidden;}.modal-header.svelte-1r1wwfo {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding:1.25rem 1.5rem 1rem;border-bottom:1px solid rgba(148, 163, 184, 0.25);}.modal-header.svelte-1r1wwfo h2:where(.svelte-1r1wwfo) {margin:0;font-size:1.1rem;font-weight:600;color:#0f172a;}.btn-close.svelte-1r1wwfo {border:none;background:transparent;font-size:1.5rem;line-height:1;cursor:pointer;color:#475569;transition:color 0.2s ease;}.btn-close.svelte-1r1wwfo:hover {color:#1e293b;}.modal-content.svelte-1r1wwfo {display:flex;flex-direction:column;gap:1rem;padding:1.25rem 1.5rem;}.form-group.svelte-1r1wwfo {display:flex;flex-direction:column;gap:0.5rem;}.form-group.svelte-1r1wwfo label:where(.svelte-1r1wwfo) {font-size:0.85rem;font-weight:600;color:#1f2937;}.form-control.svelte-1r1wwfo {width:100%;padding:0.75rem 0.9rem;font-size:0.9rem;border-radius:0.75rem;border:1px solid #d1d5db;background:#f9fafb;transition:border-color 0.2s ease,\r
      background-color 0.2s ease,\r
      box-shadow 0.2s ease;}.form-control.svelte-1r1wwfo:focus {outline:none;border-color:#2563eb;background:#ffffff;box-shadow:0 0 0 4px rgba(37, 99, 235, 0.15);}.form-control.textarea.svelte-1r1wwfo {resize:vertical;min-height:160px;}.modal-footer.svelte-1r1wwfo {display:flex;align-items:center;justify-content:space-between; /* 왼쪽(이미지 버튼)/오른쪽(취소/전송) 배치 */gap:1rem;padding:1.25rem 1.5rem 1.5rem;background:rgba(248, 250, 252, 0.85);border-top:1px solid rgba(148, 163, 184, 0.25);}\r
\r
  /* 취소/전송 버튼 그룹 */.button-group.svelte-1r1wwfo {display:flex;align-items:center;gap:0.75rem;margin-left:auto; /* 오른쪽 정렬 */}.btn-cancel.svelte-1r1wwfo,\r
  .btn-submit.svelte-1r1wwfo {padding:0.65rem 1.25rem;border-radius:0.75rem;font-size:0.9rem;font-weight:600;cursor:pointer;border:none;transition:transform 0.2s ease,\r
      box-shadow 0.2s ease,\r
      opacity 0.2s ease;}.btn-cancel.svelte-1r1wwfo {background:#e2e8f0;color:#1f2937;}.btn-cancel.svelte-1r1wwfo:hover {transform:translateY(-1px);box-shadow:0 10px 18px rgba(15, 23, 42, 0.12);}.btn-submit.svelte-1r1wwfo {background:linear-gradient(135deg, #2563eb, #1d4ed8);color:#ffffff;}.btn-submit.svelte-1r1wwfo:hover {transform:translateY(-1px);box-shadow:0 14px 24px rgba(37, 99, 235, 0.25);}.btn-cancel.svelte-1r1wwfo:disabled,\r
  .btn-submit.svelte-1r1wwfo:disabled {cursor:not-allowed;opacity:0.65;transform:none;box-shadow:none;}\r
\r
  /* === 카테고리 선택 UI === */\r
\r
  /* 읽기 전용 카테고리 표시 */.category-display.svelte-1r1wwfo {display:flex;align-items:center;gap:0.5rem;padding:0.75rem 0.9rem;background:#f9fafb;border:1px solid #d1d5db;border-radius:0.75rem;}.category-name.svelte-1r1wwfo {font-size:0.9rem;color:#1f2937;font-weight:500;}\r
\r
  /* (변경하기) 버튼 - 링크 스타일 */.btn-change-category.svelte-1r1wwfo {background:none;border:none;color:#2563eb;font-size:0.85rem;cursor:pointer;padding:0;text-decoration:none;transition:color 0.2s ease;}.btn-change-category.svelte-1r1wwfo:hover {color:#1d4ed8;text-decoration:underline;}\r
\r
  /* 카테고리 선택 모드: 라디오 버튼 리스트 */.category-select-mode.svelte-1r1wwfo {display:flex;flex-direction:column;gap:0.5rem;padding:0.5rem;background:#f9fafb;border:1px solid #d1d5db;border-radius:0.75rem;}\r
\r
  /* 라디오 버튼 옵션 */.radio-option.svelte-1r1wwfo {display:flex;align-items:center;gap:0.5rem;padding:0.625rem 0.75rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;cursor:pointer;transition:all 0.2s ease;}.radio-option.svelte-1r1wwfo:hover {background:#eff6ff;border-color:#3b82f6;}\r
\r
  /* 라디오 버튼 선택 시 강조 */.radio-option.svelte-1r1wwfo:has(input:where(.svelte-1r1wwfo):checked) {background:#dbeafe;border-color:#2563eb;box-shadow:0 0 0 3px rgba(37, 99, 235, 0.1);}.radio-option.svelte-1r1wwfo input[type="radio"]:where(.svelte-1r1wwfo) {width:1rem;height:1rem;cursor:pointer;accent-color:#2563eb;}.radio-label.svelte-1r1wwfo {font-size:0.9rem;color:#1f2937;cursor:pointer;}\r
\r
  @media (max-width: 640px) {.modal-backdrop.svelte-1r1wwfo {padding:1rem;}.modal.svelte-1r1wwfo {width:100%;}.modal-content.svelte-1r1wwfo {padding:1.1rem 1.25rem;}.modal-footer.svelte-1r1wwfo {padding:1rem 1.25rem 1.25rem;}\r
  }\r
\r
  /* 모바일 최적화: 화면 너비 640px 이하 */\r
  @media (max-width: 640px) {\r
    /* 컨테이너 패딩 최소화: 좌우 여백 0으로 설정 */.post-list-container.svelte-1r1wwfo {padding:1rem 0 1.5rem;gap:0.875rem;}\r
\r
    /* 도구 모음 압축: 카테고리 탭과 글쓰기 버튼이 같은 줄에 표시 */.toolbar.svelte-1r1wwfo {padding:0.75rem 0.5rem;gap:0.5rem;align-items:stretch;border-radius:0; /* 모바일에서는 전체 너비 사용을 위해 border-radius 제거 */}\r
\r
    /* 왼쪽 도구 모음 영역: 남은 공간을 모두 차지하여 카테고리 탭 확장 */.toolbar-left.svelte-1r1wwfo {gap:0.5rem;flex:1;min-width:0;overflow-x:auto;-webkit-overflow-scrolling:touch;}\r
\r
    /* 카테고리 탭 최소화 */.tab.svelte-1r1wwfo {padding:0.45rem 0.7rem;font-size:0.75rem;}\r
\r
    /* 글쓰기 버튼 모바일 최적화: 이모지만 표시하는 아이콘 모드 */.btn-create-post.svelte-1r1wwfo {padding:0.55rem 0.75rem;font-size:0.8rem;gap:0.25rem;flex-shrink:0;min-width:fit-content;}\r
  }\r
\r
  /* 매우 작은 화면: 480px 이하 */\r
  @media (max-width: 480px) {.post-list-container.svelte-1r1wwfo {padding:0.875rem 0 1.25rem;gap:0.75rem;}\r
\r
    /* 도구 모음: 최소 패딩 유지 */.toolbar.svelte-1r1wwfo {padding:0.625rem 0.5rem;gap:0.4rem;align-items:stretch;border-radius:0; /* 모바일에서는 전체 너비 사용을 위해 border-radius 제거 */}\r
\r
    /* 왼쪽 도구 모음: flex 1로 확장하여 글쓰기 버튼 우측 배치 */.toolbar-left.svelte-1r1wwfo {gap:0.25rem;flex:1;min-width:0;overflow-x:auto;-webkit-overflow-scrolling:touch;}.tab.svelte-1r1wwfo {padding:0.4rem 0.6rem;font-size:0.7rem;}\r
\r
    /* 글쓰기 버튼: 최소 크기로 축소 */.btn-create-post.svelte-1r1wwfo {padding:0.5rem 0.65rem;font-size:0.75rem;gap:0.2rem;flex-shrink:0;min-width:fit-content;}\r
  }\r
\r
  /* 게시글 아이템 스타일은 PostItem.svelte로 이동했습니다 */`};function q_(r,e){ot(e,!0),nt(r,fR);const t=()=>Je(qt,"$t",n),[n,s]=$t();let i=ne(null),o=ne(""),a=ne(!0);const l=new URLSearchParams(typeof window<"u"?window.location.search:"");let u=ne(hr(l.get("category")||"community")),p=ne(!1),m=ne(""),v=ne(""),b=ne(""),g=ne(!1),w=ne(!1);Jt(()=>{Hr(t()("게시판"));const S=Sn.onAuthStateChanged(async O=>{if(O){y(i,O.uid,!0);const M=O.displayName||O.email||t()("익명");y(o,M,!0)}else y(i,null),y(o,"");y(a,!1)});return()=>S()});function k(){if(!f(i)){window.location.href="/user/login";return}y(m,f(u),!0),y(w,!1),y(p,!0)}function I(){kn("post-create"),y(p,!1),y(m,""),y(v,""),y(b,""),y(w,!1)}async function P(){if(!f(m)){alert(t()("카테고리선택필요"));return}if(!f(v).trim()){alert(t()("제목입력필요"));return}if(!f(b).trim()){alert(t()("내용입력필요"));return}if(!f(i)||!f(o)){alert(t()("로그인정보확인불가"));return}y(g,!0);try{const S=Di("post-create");console.log("[PostListPage] 업로드된 파일 URLs (fileUploadState):",S),console.log("[PostListPage] createPost 호출 - urls 파라미터:",S.length>0?S:void 0);const O=await AT(f(m),f(i),f(o),f(v),f(b),S.length>0?S:void 0);O.success?(kn("post-create"),y(p,!1),y(m,""),y(v,""),y(b,""),y(w,!1),Ne(t()("게시글작성완료"),"success")):Ne(t()("게시글저장실패",{error:O.error||"Unknown error"}),"error")}catch(S){console.error("게시글 저장 오류:",S),Ne(t()("게시글저장중오류"),"error")}finally{y(g,!1)}}function $(){y(w,!f(w))}function N(S){y(m,S,!0),y(w,!1)}function q(S){y(u,S,!0),window.history.pushState({},"",`/post/list?category=${S}`)}var T=_e(),A=de(T);{var C=S=>{var O=tR(),M=d(O),H=d(M,!0);c(M),c(O),L(X=>_(H,X),[()=>t()("로딩중")]),x(S,O)},E=S=>{var O=hR(),M=de(O),H=d(M),X=d(H),V=d(X);nr(V,20,()=>fp,z=>z,(z,Y)=>{var re=rR();re.__click=()=>q(Y);var J=d(re,!0);c(re),L(D=>{rr(re,1,`tab ${f(u)===Y?"active":""}`,"svelte-1r1wwfo"),_(J,D)},[()=>t()(`label.category.${Y}`)]),x(z,re)}),c(V),c(X);var le=h(X,2);le.__click=k;var ue=d(le);c(le),c(H);var te=h(H,2),fe=d(te);L0(fe,()=>f(u),z=>{{const Y=(se,U=Kr,ie=Kr)=>{{let oe=Rn(()=>({...U().data,postId:U().key}));M_(se,{get itemData(){return f(oe)},get index(){return ie()},get category(){return U().data.category},get userId(){return f(i)}})}},re=se=>{var U=nR(),ie=h(d(U),2),oe=d(ie,!0);c(ie);var xe=h(ie,2),he=d(xe,!0);c(xe);var ge=h(xe,2);ge.__click=k;var Ce=d(ge);c(ge),c(U),L((Te,qe,je)=>{_(oe,Te),_(he,qe),_(Ce,`✏️ ${je??""}`)},[()=>t()("게시글없음"),()=>t()("첫게시글공유"),()=>t()("새글작성")]),x(se,U)},J=se=>{var U=sR(),ie=h(d(U),2),oe=d(ie,!0);c(ie),c(U),L(xe=>_(oe,xe),[()=>t()("게시글로딩중")]),x(se,U)},D=(se,U=Kr)=>{var ie=iR(),oe=h(d(ie),2),xe=d(oe),he=d(xe,!0);c(xe);var ge=h(xe,2),Ce=d(ge,!0);c(ge),c(oe),c(ie),L(Te=>{_(he,Te),_(Ce,U())},[()=>t()("게시글로드실패")]),x(se,ie)},G=se=>{var U=oR(),ie=h(d(U),2),oe=d(ie,!0);c(ie),c(U),L(xe=>_(oe,xe),[()=>t()("더많은게시글로딩")]),x(se,U)},ce=se=>{var U=aR(),ie=d(U),oe=d(ie,!0);c(ie),c(U),L(xe=>_(oe,xe),[()=>t()("모든게시글확인")]),x(se,U)};let K=Rn(()=>`${f(u)}-`);fa(z,{path:"posts",orderBy:"order",get sortPrefix(){return f(K)},reverse:!0,pageSize:20,item:Y,empty:re,loading:J,error:D,loadingMore:G,noMore:ce,$$slots:{item:!0,empty:!0,loading:!0,error:!0,loadingMore:!0,noMore:!0}})}}),c(te),c(M);var Z=h(M,2);{var W=z=>{var Y=uR();Y.__click=()=>y(p,!1),Y.__keydown=Le=>Le.key==="Escape"&&y(p,!1);var re=d(Y);re.__click=Le=>Le.stopPropagation();var J=d(re),D=d(J),G=d(D,!0);c(D);var ce=h(D,2);ce.__click=()=>y(p,!1),c(J);var K=h(J,2),se=d(K),U=d(se),ie=d(U,!0);c(U);var oe=h(U,2);{var xe=Le=>{var vt=lR(),ct=d(vt),Ze=d(ct,!0);c(ct);var j=h(ct,2);j.__click=$,c(vt),L(B=>_(Ze,B),[()=>t()(`label.category.${f(m)}`)]),x(Le,vt)},he=Le=>{var vt=dR();nr(vt,20,()=>fp,ct=>ct,(ct,Ze)=>{var j=cR(),B=d(j);Jn(B),B.__change=()=>N(Ze);var Ae=h(B,2),ee=d(Ae,!0);c(Ae),c(j),L(ve=>{V0(B,Ze),H0(B,f(m)===Ze),_(ee,ve)},[()=>t()(`label.category.${Ze}`)]),x(ct,j)}),c(vt),x(Le,vt)};F(oe,Le=>{f(w)?Le(he,!1):Le(xe)})}c(se);var ge=h(se,2),Ce=d(ge),Te=d(Ce,!0);c(Ce);var qe=h(Ce,2);Jn(qe),c(ge);var je=h(ge,2),He=d(je),We=d(He,!0);c(He);var Ge=h(He,2);Ro(Ge),c(je),c(K);var Qe=h(K,2),lt=d(Qe);st(lt,"id","post-create"),st(lt,"category","posts"),st(lt,"multiple","true"),L(()=>st(lt,"buttonText",t()("이미지첨부")));var ut=h(lt,2),pt=d(ut);pt.__click=I;var Se=d(pt,!0);c(pt);var Pe=h(pt,2);Pe.__click=P;var ze=d(Pe,!0);c(Pe),c(ut),c(Qe);var Ke=h(Qe,2);st(Ke,"id","post-create"),c(re),c(Y),L((Le,vt,ct,Ze,j,B,Ae,ee)=>{_(G,Le),_(ie,vt),_(Te,ct),Ee(qe,"placeholder",Ze),_(We,j),Ee(Ge,"placeholder",B),pt.disabled=f(g),_(Se,Ae),Pe.disabled=f(g),_(ze,ee)},[()=>t()("새게시글작성"),()=>t()("카테고리"),()=>t()("제목"),()=>t()("제목입력"),()=>t()("내용"),()=>t()("내용입력"),()=>t()("취소"),()=>f(g)?t()("전송중"):t()("전송")]),hn(qe,()=>f(v),Le=>y(v,Le)),hn(Ge,()=>f(b),Le=>y(b,Le)),x(z,Y)};F(Z,z=>{f(p)&&z(W)})}L(z=>_(ue,`✏️ ${z??""}`),[()=>t()("글쓰기")]),x(S,O)};F(A,S=>{f(a)?S(C):S(E,!1)})}x(r,T),at(),s()}xt(["click","keydown","change"]);be(q_,{},[],[],!0);var pR=R('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6"> </p> <p class="construction-description svelte-1sszjx6"> </p></div> <button class="back-button svelte-1sszjx6"> </button></div></div>');const vR={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function z_(r,e){ot(e,!1),nt(r,vR);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("게시물목록"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}fr();var o=pR(),a=d(o),l=d(a),u=h(d(l),2),p=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),L((w,k,I)=>{_(p,w),_(v,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_게시물상세"),()=>t()("메뉴로돌아가기")]),x(r,o),at(),s()}xt(["click"]);be(z_,{},[],[],!0);var mR=R('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9"> </p> <p class="construction-description svelte-1xfn8v9"> </p></div> <button class="back-button svelte-1xfn8v9"> </button></div></div>');const gR={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function U_(r,e){ot(e,!1),nt(r,gR);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("채팅"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}fr();var o=mR(),a=d(o),l=d(a),u=h(d(l),2),p=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),L((w,k,I)=>{_(p,w),_(v,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_채팅목록"),()=>t()("메뉴로돌아가기")]),x(r,o),at(),s()}xt(["click"]);be(U_,{},[],[],!0);var _R=R('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08"> </p> <p class="construction-description svelte-177ja08"> </p></div> <button class="back-button svelte-177ja08"> </button></div></div>');const bR={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function F_(r,e){ot(e,!1),nt(r,bR);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("설정"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}fr();var o=_R(),a=d(o),l=d(a),u=h(d(l),2),p=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),L((w,k,I)=>{_(p,w),_(v,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_설정"),()=>t()("메뉴로돌아가기")]),x(r,o),at(),s()}xt(["click"]);be(F_,{},[],[],!0);var wR=R('<div class="admin-container svelte-1e2r8m3"><div class="admin-card svelte-1e2r8m3"><div class="admin-header svelte-1e2r8m3"><div class="admin-icon svelte-1e2r8m3">🛡️</div> <h1 class="admin-title svelte-1e2r8m3"> </h1></div> <div class="construction-content svelte-1e2r8m3"><p class="construction-message svelte-1e2r8m3"> </p> <p class="construction-description svelte-1e2r8m3"> </p></div>  <button class="back-button svelte-1e2r8m3"> </button></div></div>');const yR={hash:"svelte-1e2r8m3",code:`.admin-container.svelte-1e2r8m3 {width:100%;max-width:56rem;margin:0 auto;padding:0 1rem;}.admin-card.svelte-1e2r8m3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.admin-header.svelte-1e2r8m3 {text-align:center;margin-bottom:2rem;padding-bottom:1.5rem;border-bottom:1px solid #e5e7eb;}.admin-icon.svelte-1e2r8m3 {font-size:3rem;margin-bottom:0.5rem;}.admin-title.svelte-1e2r8m3 {margin:0;font-size:1.5rem;font-weight:700;color:#111827;}.construction-content.svelte-1e2r8m3 {text-align:center;margin-bottom:2rem;padding:2rem;background-color:#fef3c7;border-radius:0.375rem;}.construction-message.svelte-1e2r8m3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#92400e;}.construction-description.svelte-1e2r8m3 {margin:0;font-size:0.95rem;color:#78350f;}\r
\r
  /* 향후 사용될 관리 섹션 스타일 */.back-button.svelte-1e2r8m3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1e2r8m3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.admin-card.svelte-1e2r8m3 {padding:1.5rem;}.construction-content.svelte-1e2r8m3 {padding:1.5rem;}\r
  }`};function j_(r,e){ot(e,!1),nt(r,yR);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("관리자"))});function i(){or("/menu")}fr();var o=wR(),a=d(o),l=d(a),u=h(d(l),2),p=d(u,!0);c(u),c(l);var m=h(l,2),v=d(m),b=d(v,!0);c(v);var g=h(v,2),w=d(g,!0);c(g),c(m);var k=h(m,2);k.__click=i;var I=d(k,!0);c(k),c(a),c(o),L((P,$,N,q)=>{_(p,P),_(b,$),_(w,N),_(I,q)},[()=>t()("관리자"),()=>t()("공사중메시지"),()=>t()("공사중설명_관리자"),()=>t()("메뉴로돌아가기")]),x(r,o),at(),s()}xt(["click"]);be(j_,{},[],[],!0);var xR=R('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe"> </p> <p class="construction-description svelte-65loqe"> </p></div> <button class="back-button svelte-65loqe"> </button></div></div>');const kR={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function B_(r,e){ot(e,!1),nt(r,kR);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}fr();var o=xR(),a=d(o),l=d(a),u=h(d(l),2),p=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),L((w,k,I)=>{_(p,w),_(v,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_앱정보"),()=>t()("메뉴로돌아가기")]),x(r,o),at(),s()}xt(["click"]);be(B_,{},[],[],!0);var ER=R('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna"> </p> <p class="construction-description svelte-19u7yna"> </p></div> <button class="back-button svelte-19u7yna"> </button></div></div>');const CR={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function V_(r,e){ot(e,!1),nt(r,CR);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("도움말"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}fr();var o=ER(),a=d(o),l=d(a),u=h(d(l),2),p=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),L((w,k,I)=>{_(p,w),_(v,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_도움말"),()=>t()("메뉴로돌아가기")]),x(r,o),at(),s()}xt(["click"]);be(V_,{},[],[],!0);var IR=R('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w"> </p> <p class="construction-description svelte-134dw7w"> </p></div> <button class="back-button svelte-134dw7w"> </button></div></div>');const TR={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function H_(r,e){ot(e,!1),nt(r,TR);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("이용약관"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}fr();var o=IR(),a=d(o),l=d(a),u=h(d(l),2),p=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),L((w,k,I)=>{_(p,w),_(v,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_이용약관"),()=>t()("메뉴로돌아가기")]),x(r,o),at(),s()}xt(["click"]);be(H_,{},[],[],!0);var SR=R('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj"> </p> <p class="construction-description svelte-8iwrwj"> </p></div> <button class="back-button svelte-8iwrwj"> </button></div></div>');const AR={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function W_(r,e){ot(e,!1),nt(r,AR);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("개인정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}fr();var o=SR(),a=d(o),l=d(a),u=h(d(l),2),p=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),L((w,k,I)=>{_(p,w),_(v,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_개인정보"),()=>t()("메뉴로돌아가기")]),x(r,o),at(),s()}xt(["click"]);be(W_,{},[],[],!0);var RR=R('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3"> </p> <p class="construction-description svelte-1f7uyy3"> </p></div> <button class="back-button svelte-1f7uyy3"> </button></div></div>');const PR={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function G_(r,e){ot(e,!1),nt(r,PR);const t=()=>Je(qt,"$t",n),[n,s]=$t();Jt(()=>{Hr(t()("문의하기"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}fr();var o=RR(),a=d(o),l=d(a),u=h(d(l),2),p=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),L((w,k,I)=>{_(p,w),_(v,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_문의하기"),()=>t()("메뉴로돌아가기")]),x(r,o),at(),s()}xt(["click"]);be(G_,{},[],[],!0);var NR=R('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/user/login" class="svelte-uqnmwp"> </a></div>'),$R=R('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),LR=R('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),DR=R('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp"> </h3> <div class="logs svelte-uqnmwp"></div></div>'),OR=R('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/post/list" class="btn-view svelte-uqnmwp"> </a></div>'),MR=R('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <button class="btn-generate btn-news svelte-uqnmwp"> </button> <!></div> <!> <!>',1),qR=R('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp"> </h1> <p class="svelte-uqnmwp">커뮤니티 게시판에 100개, 뉴스 게시판에 200개의 테스트 글을 생성합니다.</p> <p class="header-detail svelte-uqnmwp">뉴스 게시판은 각 글의 생성 시간이 1초씩 차이나도록 설정됩니다.</p></div> <!></div></div>');const zR={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 0.25rem 0;color:#6b7280;}.header-detail.svelte-uqnmwp {font-size:0.875rem;color:#9ca3af;margin-top:0.5rem;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;display:flex;flex-direction:column;gap:1rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}\r
\r
  /* 뉴스 버튼 스타일 (초록색) */.btn-news.svelte-uqnmwp {background-color:#10b981;}.btn-news.svelte-uqnmwp:hover:not(:disabled) {background-color:#059669;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function K_(r,e){ot(e,!0),nt(r,zR);const t=()=>Je(qt,"$t",n),[n,s]=$t();let i=ne(!1),o=ne(!1),a=ne(hr({current:0,total:0,category:""})),l=ne(hr([])),u=ne(!1);Jt(()=>{Hr(t()("테스트게시글생성타이틀"))});function p(E,S="info"){y(l,[...f(l),{message:E,type:S,time:new Date().toLocaleTimeString()}],!0)}const m={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]}},v={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function b(E){return E[Math.floor(Math.random()*E.length)]}function g(E){let S=E;for(const[O,M]of Object.entries(v)){const H=new RegExp(`\\{${O}\\}`,"g");S=S.replace(H,b(M))}return S}async function w(){if(!Ue.isAuthenticated||!Ue.uid){p(t()("로그인필요"),"error");return}y(i,!0),y(u,!1),y(l,[],!0),p(t()("테스트데이터생성시작"),"success"),p(t()("사용자정보",{user:Ue.data?.displayName||Ue.email}),"info");const E="community",S=t()("커뮤니티");y(a,{current:0,total:100,category:S},!0),p(t()("카테고리생성중",{category:S}),"info");const O=m.community;let M=0;const H=Date.now();for(let X=0;X<100;X++)try{const V=g(b(O.titles)),le=`${X+1}. ${V}`,ue=g(b(O.contents)),te=H-Math.floor(Math.random()*30*24*60*60*1e3),fe={uid:Ue.uid,title:le,content:ue,author:Ue.data?.displayName||Ue.email||t()("익명"),category:E,order:`${E}-${te}`,createdAt:te,updatedAt:H,likeCount:0,commentCount:0},Z=St(Et,"posts");await Vo(Z,fe),M++,y(a,{...f(a),current:X+1},!0),(X+1)%20===0&&p(t()("생성진행",{current:X+1,total:100}),"success"),await new Promise(W=>setTimeout(W,50))}catch(V){p(t()("생성실패",{error:V.message}),"error")}p(t()("카테고리생성완료",{category:S,count:M}),"success"),p(t()("모든데이터생성완료"),"success"),p(t()("총100개생성"),"success"),y(i,!1),y(u,!0)}async function k(){if(!Ue.isAuthenticated||!Ue.uid){p(t()("로그인필요"),"error");return}y(o,!0),y(u,!1),y(l,[],!0),p("뉴스 게시판 글 생성 시작","success"),p(t()("사용자정보",{user:Ue.data?.displayName||Ue.email}),"info");const E="news",S="뉴스",O=200;y(a,{current:0,total:O,category:S},!0),p(`${S} 카테고리에 ${O}개 글 생성 중...`,"info");const M=m.news;let H=0;const X=Date.now();for(let V=0;V<O;V++)try{const le=g(b(M.titles)),ue=`${V+1}. ${le}`,te=g(b(M.contents)),fe=X-(O-1-V)*1e3,Z={uid:Ue.uid,title:ue,content:te,author:Ue.data?.displayName||Ue.email||t()("익명"),category:E,order:`${E}-${fe}`,createdAt:fe,updatedAt:X,likeCount:0,commentCount:0},W=St(Et,"posts");await Vo(W,Z),H++,y(a,{...f(a),current:V+1},!0),(V+1)%50===0&&p(`${V+1}/${O} 글 생성 완료`,"success"),await new Promise(z=>setTimeout(z,50))}catch(le){p(`글 생성 실패: ${le.message}`,"error")}p(`${S} 카테고리 생성 완료: ${H}개`,"success"),p("모든 뉴스 게시글 생성 완료!","success"),p(`총 ${H}/${O}개 생성됨`,"success"),y(o,!1),y(u,!0)}var I=qR(),P=d(I),$=d(P),N=d($),q=d(N,!0);c(N),Mr(4),c($);var T=h($,2);{var A=E=>{var S=NR(),O=d(S),M=d(O,!0);c(O);var H=h(O,2),X=d(H,!0);c(H),c(S),L((V,le)=>{_(M,V),_(X,le)},[()=>t()("로그인필요"),()=>t()("로그인하러가기")]),x(E,S)},C=E=>{var S=MR(),O=de(S),M=d(O);M.__click=w;var H=d(M,!0);c(M);var X=h(M,2);X.__click=k;var V=d(X,!0);c(X);var le=h(X,2);{var ue=z=>{var Y=$R(),re=d(Y),J=d(re,!0);c(re);var D=h(re,2),G=d(D);c(D);var ce=h(D,2),K=d(ce);c(ce),c(Y),L(()=>{_(J,f(a).category),wl(G,`width: ${f(a).current/f(a).total*100}%`),_(K,`${f(a).current??""} / ${f(a).total??""}`)}),x(z,Y)};F(le,z=>{(f(i)||f(o))&&z(ue)})}c(O);var te=h(O,2);{var fe=z=>{var Y=DR(),re=d(Y),J=d(re,!0);c(re);var D=h(re,2);nr(D,21,()=>f(l),yn,(G,ce)=>{var K=LR(),se=d(K),U=d(se,!0);c(se);var ie=h(se,2),oe=d(ie,!0);c(ie),c(K),L(()=>{rr(K,1,`log-item log-${f(ce).type??""}`,"svelte-uqnmwp"),_(U,f(ce).time),_(oe,f(ce).message)}),x(G,K)}),c(D),c(Y),L(G=>_(J,G),[()=>t()("실행로그")]),x(z,Y)};F(te,z=>{f(l).length>0&&z(fe)})}var Z=h(te,2);{var W=z=>{var Y=OR(),re=d(Y),J=d(re,!0);c(re);var D=h(re,2),G=d(D,!0);c(D),c(Y),L((ce,K)=>{_(J,ce),_(G,K)},[()=>t()("생성완료확인메시지"),()=>t()("게시판보기")]),x(z,Y)};F(Z,z=>{f(u)&&z(W)})}L(z=>{M.disabled=f(i)||f(o),_(H,z),X.disabled=f(i)||f(o),_(V,f(o)?"생성 중...":"뉴스 글 200개 생성 (1초 간격)")},[()=>f(i)?t()("생성중"):"커뮤니티 글 100개 생성"]),x(E,S)};F(T,E=>{Ue.isAuthenticated?E(C,!1):E(A)})}c(P),c(I),L(E=>_(q,E),[()=>t()("테스트게시글생성타이틀")]),x(r,I),at(),s()}xt(["click"]);be(K_,{},[],[],!0);var UR=R('<div class="dev-history svelte-1vras8s"><div class="background-gradient svelte-1vras8s"></div> <div class="container svelte-1vras8s"><div class="header svelte-1vras8s"><h1 class="title svelte-1vras8s"> </h1> <p class="subtitle svelte-1vras8s"> </p> <div class="update-indicator svelte-1vras8s"><span class="indicator-dot svelte-1vras8s"></span> </div></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="upcoming-card svelte-1vras8s"> </div></div></div>');const FR={hash:"svelte-1vras8s",code:`\r
  /* 메인 컨테이너 */.dev-history.svelte-1vras8s {position:relative;min-height:100vh;background:#f0f2f5;padding:1.5rem;}\r
\r
  /* 배경 그라디언트 */.background-gradient.svelte-1vras8s {position:absolute;inset:0;background:radial-gradient(\r
        circle at top,\r
        rgba(198, 219, 255, 0.35),\r
        transparent 55%\r
      ),\r
      radial-gradient(\r
        circle at bottom,\r
        rgba(214, 233, 218, 0.3),\r
        transparent 60%\r
      );pointer-events:none;}\r
\r
  /* 컨테이너 */.container.svelte-1vras8s {position:relative;max-width:48rem;margin:0 auto;display:flex;flex-direction:column;gap:2rem;}\r
\r
  /* 헤더 섹션 */.header.svelte-1vras8s {display:flex;flex-direction:column;gap:0.5rem;}.title.svelte-1vras8s {font-size:2.25rem;font-weight:700;color:#050505;margin:0;letter-spacing:-0.025em;line-height:1.2;}.subtitle.svelte-1vras8s {font-size:0.875rem;color:#5d6472;margin:0;line-height:1.5;}\r
\r
  /* 업데이트 인디케이터 */.update-indicator.svelte-1vras8s {display:inline-flex;align-items:center;gap:0.5rem;width:fit-content;padding:0.25rem 0.75rem;background:rgba(255, 255, 255, 0.9);border:1px solid rgba(255, 255, 255, 0.7);border-radius:9999px;font-size:0.75rem;font-weight:500;color:#1877f2;box-shadow:0 1px 3px rgba(207, 219, 244, 0.5);backdrop-filter:blur(8px);}.indicator-dot.svelte-1vras8s {display:inline-block;width:0.5rem;height:0.5rem;background:#44c46f;border-radius:50%;box-shadow:0 0 6px rgba(68, 196, 111, 0.45);}\r
\r
  /* 타임라인 섹션 */.timeline-section.svelte-1vras8s {display:flex;flex-direction:column;gap:1rem;}\r
\r
  /* 날짜 헤더 */.date-header.svelte-1vras8s {background:rgba(255, 255, 255, 0.8);border-left:4px solid #1877f2;padding:1rem;box-shadow:0 1px 3px rgba(190, 212, 255, 0.4);}.date-title.svelte-1vras8s {font-size:1.5rem;font-weight:600;color:#050505;margin:0;}\r
\r
  /* 카드 */.card.svelte-1vras8s {background:rgba(255, 255, 255, 0.95);border:1px solid rgba(255, 255, 255, 0.6);border-radius:1.5rem;padding:1.5rem;box-shadow:0 10px 25px rgba(204, 217, 240, 0.45);backdrop-filter:blur(8px);display:flex;flex-direction:column;gap:0.75rem;}.card-title.svelte-1vras8s {font-size:1.125rem;font-weight:600;color:#050505;margin:0;display:flex;align-items:center;gap:0.5rem;}\r
\r
  /* 아이템 리스트 */.item-list.svelte-1vras8s {list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem;}.item.svelte-1vras8s {display:flex;align-items:flex-start;gap:0.75rem;font-size:0.875rem;color:#5d6472;line-height:1.6;}.bullet.svelte-1vras8s {color:#1877f2;margin-top:0.25rem;flex-shrink:0;}\r
\r
  /* 구분선 */.divider.svelte-1vras8s {border-top:1px solid #dfe1e6;margin:1rem 0;}\r
\r
  /* 향후 로그 카드 */.upcoming-card.svelte-1vras8s {background:rgba(255, 255, 255, 0.95);border:1px solid rgba(255, 255, 255, 0.6);border-radius:1.5rem;padding:2rem;text-align:center;font-size:0.875rem;color:#5d6472;box-shadow:0 10px 25px rgba(204, 217, 240, 0.45);backdrop-filter:blur(8px);}\r
\r
  /* 반응형 디자인 */\r
  @media (max-width: 768px) {.dev-history.svelte-1vras8s {padding:1rem;}.title.svelte-1vras8s {font-size:1.875rem;}.card.svelte-1vras8s {padding:1.25rem;}.date-title.svelte-1vras8s {font-size:1.25rem;}\r
  }\r
\r
  @media (max-width: 640px) {.title.svelte-1vras8s {font-size:1.5rem;}.subtitle.svelte-1vras8s {font-size:0.8125rem;}.card.svelte-1vras8s {padding:1rem;border-radius:1rem;}.card-title.svelte-1vras8s {font-size:1rem;}.item.svelte-1vras8s {font-size:0.8125rem;}.upcoming-card.svelte-1vras8s {padding:1.5rem;font-size:0.8125rem;}\r
  }`};function Y_(r,e){ot(e,!1),nt(r,FR);const t=()=>Je(qt,"$t",n),[n,s]=$t();fr();var i=UR(),o=h(d(i),2),a=d(o),l=d(a),u=d(l,!0);c(l);var p=h(l,2),m=d(p,!0);c(p);var v=h(p,2),b=h(d(v));c(v),c(a);var g=h(a,2),w=d(g),k=d(w),I=d(k,!0);c(k),c(w);var P=h(w,2),$=d(P),N=d($,!0);c($);var q=h($,2),T=d(q),A=h(d(T),2),C=d(A,!0);c(A),c(T);var E=h(T,2),S=h(d(E),2),O=d(S,!0);c(S),c(E);var M=h(E,2),H=h(d(M),2),X=d(H,!0);c(H),c(M);var V=h(M,2),le=h(d(V),2),ue=d(le,!0);c(le),c(V);var te=h(V,2),fe=h(d(te),2),Z=d(fe,!0);c(fe),c(te),c(q),c(P);var W=h(P,2),z=d(W),Y=d(z,!0);c(z);var re=h(z,2),J=d(re),D=h(d(J),2),G=d(D,!0);c(D),c(J);var ce=h(J,2),K=h(d(ce),2),se=d(K,!0);c(K),c(ce);var U=h(ce,2),ie=h(d(U),2),oe=d(ie,!0);c(ie),c(U);var xe=h(U,2),he=h(d(xe),2),ge=d(he,!0);c(he),c(xe),c(re),c(W),c(g);var Ce=h(g,4),Te=d(Ce),qe=d(Te),je=d(qe,!0);c(qe),c(Te);var He=h(Te,2),We=d(He),Ge=d(We,!0);c(We);var Qe=h(We,2),lt=d(Qe),ut=h(d(lt),2),pt=d(ut,!0);c(ut),c(lt);var Se=h(lt,2),Pe=h(d(Se),2),ze=d(Pe,!0);c(Pe),c(Se);var Ke=h(Se,2),Le=h(d(Ke),2),vt=d(Le,!0);c(Le),c(Ke);var ct=h(Ke,2),Ze=h(d(ct),2),j=d(Ze,!0);c(Ze),c(ct);var B=h(ct,2),Ae=h(d(B),2),ee=d(Ae,!0);c(Ae),c(B),c(Qe),c(He);var ve=h(He,2),ke=d(ve),Ie=d(ke,!0);c(ke);var Re=h(ke,2),we=d(Re),me=h(d(we),2),Be=d(me,!0);c(me),c(we);var ht=h(we,2),ft=h(d(ht),2),It=d(ft,!0);c(ft),c(ht);var Ve=h(ht,2),bt=h(d(Ve),2),At=d(bt,!0);c(bt),c(Ve);var Xe=h(Ve,2),Ht=h(d(Xe),2),Gt=d(Ht,!0);c(Ht),c(Xe);var Zt=h(Xe,2),Lr=h(d(Zt),2),Lt=d(Lr,!0);c(Lr),c(Zt),c(Re),c(ve),c(Ce);var er=h(Ce,4),Tt=d(er),Q=d(Tt),pe=d(Q,!0);c(Q),c(Tt);var De=h(Tt,2),mt=d(De),wt=d(mt,!0);c(mt);var _r=h(mt,2),tr=d(_r),Wt=h(d(tr),2),zt=d(Wt,!0);c(Wt),c(tr);var Ut=h(tr,2),Rt=h(d(Ut),2),br=d(Rt,!0);c(Rt),c(Ut);var Cr=h(Ut,2),Dt=h(d(Cr),2),Pt=d(Dt,!0);c(Dt),c(Cr);var ir=h(Cr,2),Jr=h(d(ir),2),Dr=d(Jr,!0);c(Jr),c(ir);var Or=h(ir,2),oi=h(d(Or),2),Yi=d(oi,!0);c(oi),c(Or),c(_r),c(De);var pa=h(De,2),Qi=d(pa),rb=d(Qi,!0);c(Qi);var lh=h(Qi,2),Bl=d(lh),ch=h(d(Bl),2),nb=d(ch,!0);c(ch),c(Bl);var Vl=h(Bl,2),dh=h(d(Vl),2),sb=d(dh,!0);c(dh),c(Vl);var Hl=h(Vl,2),uh=h(d(Hl),2),ib=d(uh,!0);c(uh),c(Hl);var hh=h(Hl,2),fh=h(d(hh),2),ob=d(fh,!0);c(fh),c(hh),c(lh),c(pa),c(er);var Wl=h(er,4),Gl=d(Wl),ph=d(Gl),ab=d(ph,!0);c(ph),c(Gl);var Kl=h(Gl,2),Yl=d(Kl),lb=d(Yl,!0);c(Yl);var vh=h(Yl,2),Ql=d(vh),mh=h(d(Ql),2),cb=d(mh,!0);c(mh),c(Ql);var Xl=h(Ql,2),gh=h(d(Xl),2),db=d(gh,!0);c(gh),c(Xl);var Jl=h(Xl,2),_h=h(d(Jl),2),ub=d(_h,!0);c(_h),c(Jl);var Zl=h(Jl,2),bh=h(d(Zl),2),hb=d(bh,!0);c(bh),c(Zl);var wh=h(Zl,2),yh=h(d(wh),2),fb=d(yh,!0);c(yh),c(wh),c(vh),c(Kl);var xh=h(Kl,2),ec=d(xh),pb=d(ec,!0);c(ec);var kh=h(ec,2),tc=d(kh),Eh=h(d(tc),2),vb=d(Eh,!0);c(Eh),c(tc);var rc=h(tc,2),Ch=h(d(rc),2),mb=d(Ch,!0);c(Ch),c(rc);var nc=h(rc,2),Ih=h(d(nc),2),gb=d(Ih,!0);c(Ih),c(nc);var Th=h(nc,2),Sh=h(d(Th),2),_b=d(Sh,!0);c(Sh),c(Th),c(kh),c(xh),c(Wl);var Ah=h(Wl,4),bb=d(Ah,!0);c(Ah),c(o),c(i),L((wb,yb,xb,kb,Eb,Cb,Ib,Tb,Sb,Ab,Rb,Pb,Nb,$b,Lb,Db,Ob,Mb,qb,zb,Ub,Fb,jb,Bb,Vb,Hb,Wb,Gb,Kb,Yb,Qb,Xb,Jb,Zb,e1,t1,r1,n1,s1,i1,o1,a1,l1,c1,d1,u1,h1,f1,p1,v1,m1,g1,_1)=>{_(u,wb),_(m,yb),_(b,` ${xb??""}`),_(I,kb),_(N,Eb),_(C,Cb),_(O,Ib),_(X,Tb),_(ue,Sb),_(Z,Ab),_(Y,Rb),_(G,Pb),_(se,Nb),_(oe,$b),_(ge,Lb),_(je,Db),_(Ge,Ob),_(pt,Mb),_(ze,qb),_(vt,zb),_(j,Ub),_(ee,Fb),_(Ie,jb),_(Be,Bb),_(It,Vb),_(At,Hb),_(Gt,Wb),_(Lt,Gb),_(pe,Kb),_(wt,Yb),_(zt,Qb),_(br,Xb),_(Pt,Jb),_(Dr,Zb),_(Yi,e1),_(rb,t1),_(nb,r1),_(sb,n1),_(ib,s1),_(ob,i1),_(ab,o1),_(lb,a1),_(cb,l1),_(db,c1),_(ub,d1),_(hb,u1),_(fb,h1),_(pb,f1),_(vb,p1),_(mb,v1),_(gb,m1),_(_b,g1),_(bb,_1)},[()=>t()("dev.history.title"),()=>t()("dev.history.subtitle"),()=>t()("dev.history.updateIndicator"),()=>t()("dev.history.seminar4.date"),()=>t()("dev.history.seminar4.completed"),()=>t()("dev.history.seminar4.item1"),()=>t()("dev.history.seminar4.item2"),()=>t()("dev.history.seminar4.item3"),()=>t()("dev.history.seminar4.item4"),()=>t()("dev.history.seminar4.item5"),()=>t()("dev.history.seminar4.learned"),()=>t()("dev.history.seminar4.learned1"),()=>t()("dev.history.seminar4.learned2"),()=>t()("dev.history.seminar4.learned3"),()=>t()("dev.history.seminar4.learned4"),()=>t()("dev.history.seminar3.date"),()=>t()("dev.history.seminar3.completed"),()=>t()("dev.history.seminar3.item1"),()=>t()("dev.history.seminar3.item2"),()=>t()("dev.history.seminar3.item3"),()=>t()("dev.history.seminar3.item4"),()=>t()("dev.history.seminar3.item5"),()=>t()("dev.history.seminar3.learned"),()=>t()("dev.history.seminar3.learned1"),()=>t()("dev.history.seminar3.learned2"),()=>t()("dev.history.seminar3.learned3"),()=>t()("dev.history.seminar3.learned4"),()=>t()("dev.history.seminar3.learned5"),()=>t()("dev.history.seminar2.date"),()=>t()("dev.history.seminar2.completed"),()=>t()("dev.history.seminar2.item1"),()=>t()("dev.history.seminar2.item2"),()=>t()("dev.history.seminar2.item3"),()=>t()("dev.history.seminar2.item4"),()=>t()("dev.history.seminar2.item5"),()=>t()("dev.history.seminar2.learned"),()=>t()("dev.history.seminar2.learned1"),()=>t()("dev.history.seminar2.learned2"),()=>t()("dev.history.seminar2.learned3"),()=>t()("dev.history.seminar2.learned4"),()=>t()("dev.history.seminar1.date"),()=>t()("dev.history.seminar1.completed"),()=>t()("dev.history.seminar1.item1"),()=>t()("dev.history.seminar1.item2"),()=>t()("dev.history.seminar1.item3"),()=>t()("dev.history.seminar1.item4"),()=>t()("dev.history.seminar1.item5"),()=>t()("dev.history.seminar1.learned"),()=>t()("dev.history.seminar1.learned1"),()=>t()("dev.history.seminar1.learned2"),()=>t()("dev.history.seminar1.learned3"),()=>t()("dev.history.seminar1.learned4"),()=>t()("dev.history.upcoming")]),x(r,i),at(),s()}be(Y_,{},[],[],!0);var jR=R(`<div class="sed-page svelte-bwqu3o"><div class="background-gradient svelte-bwqu3o"></div> <div class="container svelte-bwqu3o"><div class="header svelte-bwqu3o"><h1 class="title svelte-bwqu3o">🧩 Spec-Exact Development (SED)</h1> <p class="subtitle svelte-bwqu3o">"AI develops exactly as the spec defines — no interpretation, no
        assumption."</p></div> <div class="section intro-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">💡 개요</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">SEDAI</strong>는 AI가 명세(Specification)를 벗어나지 않고 정확히 따라
          솔루션을 구현하는 개발 방법론입니다.</p> <p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">2025년 11월 4일 송재호</strong>가 만든 이 방식은 모호한 요구사항 대신 <strong class="svelte-bwqu3o">완전하고 정밀한 설계도</strong>를 요구함으로써 기존 AI 보조 개발의 한계를 해결합니다.</p> <div class="info-box svelte-bwqu3o" style="margin-top: 1.5rem;"><strong class="svelte-bwqu3o">📦 공식 레포지토리:</strong> <a href="https://github.com/thruthesky/sedai" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; margin-left: 0.5rem;">https://github.com/thruthesky/sedai</a></div></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🚀 설치 및 빠른 시작</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">NPM을 통해 전역 설치하거나 npx로 즉시 실행할 수 있습니다:</p> <div class="code-block svelte-bwqu3o"><div class="code-header svelte-bwqu3o">설치 및 실행</div> <pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">npm install -g sedai
# 또는
npx sedai --help
npx spec init</code></pre></div></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 핵심 원칙</h2> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">1. Spec-Exactness (명세 정확성)</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">개발은 오직 명세에 정의된 내용만 구현합니다.</li> <li class="svelte-bwqu3o">불완전한 명세는 즉시 "Spec Error"를 발생시키고 작업을 중단합니다.</li> <li class="svelte-bwqu3o">AI는 의도를 추론하거나 해석할 수 없으며, 오직 작성된 지시사항만 실행합니다.</li></ul></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">2. Spec Completeness Scoring (명세 완성도 점수)</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">AI는 개발 시작 전 명세를 0~100점으로 평가합니다.</li> <li class="svelte-bwqu3o">작업은 <strong>90점 이상</strong>일 때만 진행됩니다.</li> <li class="svelte-bwqu3o">평가 기준: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">데이터베이스 설계의 완전성</li> <li class="svelte-bwqu3o">비즈니스 로직의 명확성</li> <li class="svelte-bwqu3o">UI/UX 요구사항의 구체성</li> <li class="svelte-bwqu3o">테스트 계획의 상세도</li> <li class="svelte-bwqu3o">배포 및 운영 환경 정의</li></ul></li></ul> <div class="code-block svelte-bwqu3o" style="margin-top: 1rem;"><div class="code-header svelte-bwqu3o">예시: 명세 점수 부족 시 에러</div> <pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">SpecError: Insufficient specification to execute.
Reason: Database schema, authentication flow, or encryption detail missing.
Required Spec Score: ≥90
Current Score: 42</code></pre></div></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">3. Specification Authority (명세의 권위)</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">모호한 문장은 무시되며 구현되지 않습니다.</li> <li class="svelte-bwqu3o">명세는 법이 되지만, 개발자는 편집 권한을 유지합니다.</li> <li class="svelte-bwqu3o">AI는 업데이트를 제안할 수 있지만 일방적으로 명세를 수정할 수 없습니다.</li></ul></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">4. What Must Be Specified (명세해야 할 것들)</h3> <p>완전한 명세는 다음을 명시적으로 문서화해야 합니다:</p> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>클래스 및 함수 이름:</strong> 정확한 식별자</li> <li class="svelte-bwqu3o"><strong>구현 세부사항:</strong> 알고리즘, 계산식, 비즈니스 로직</li> <li class="svelte-bwqu3o"><strong>데이터 구조:</strong> 변수명, 타입, 데이터 흐름</li> <li class="svelte-bwqu3o"><strong>제어 흐름:</strong> 조건문, 반복문, 에러 처리</li> <li class="svelte-bwqu3o"><strong>완전한 소스 코드:</strong> 정확한 패턴을 보여주는 실행 가능한 예제</li></ul></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 개발 프로세스 단계</h2> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🧱 Phase 1: 준비 단계 (Preparation)</h3> <h4 class="subsection-title svelte-bwqu3o">📝 명세 줄거리 작성</h4> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">전체 및 상세 줄거리 초안 작성 (최소 각각 ~100개 항목)</li> <li class="svelte-bwqu3o">완전한 SNS 서비스 예시: ~10,000 토큰 (≈14페이지)</li> <li class="svelte-bwqu3o">상세 명세는 줄거리보다 약 20배 더 길어야 함</li></ul> <h4 class="subsection-title svelte-bwqu3o">📋 상세 명세 작성</h4> <p class="phase-step-description svelte-bwqu3o">모든 줄거리 항목을 설계도 수준의 세부사항으로 변환하되, 중복을 제거하고
          필수 요소만 유지합니다.</p></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">⚙️ Phase 2: 주요 명세 구성 요소</h3> <div class="spec-component svelte-bwqu3o"><h4 class="component-title svelte-bwqu3o">💾 데이터베이스 명세</h4> <p class="svelte-bwqu3o">DBMS 버전, 호스팅 환경, OS, 네트워크 구성, 접근 계정, SQL 설정, 테이블
            구조, 인덱스, 외래키, 트랜잭션 격리 수준, 백업 정책, 유틸리티를
            포함해야 합니다.</p></div> <div class="spec-component svelte-bwqu3o"><h4 class="component-title svelte-bwqu3o">🎯 기능 명세</h4> <p class="svelte-bwqu3o">사용자 등록, 게시판, 결제 처리, 알림 등에 대한 상세 요구사항—API, 유효성
            검증 규칙, 암호화 방법, 에러 처리, 서드파티 통합을 포함합니다.</p></div> <div class="spec-component svelte-bwqu3o"><h4 class="component-title svelte-bwqu3o">🛣️ 라우팅 명세</h4> <p class="svelte-bwqu3o">모든 경로는 명시적이어야 합니다 (예: <code class="svelte-bwqu3o">/auth/signup</code>, <code class="svelte-bwqu3o">/dashboard</code>). 리다이렉트 조건, 예외 흐름, 접근 제어와 함께
            완전한 여정 맵을 문서화합니다.</p></div> <div class="spec-component svelte-bwqu3o"><h4 class="component-title svelte-bwqu3o">⚡ 함수 명세</h4> <p class="svelte-bwqu3o">각 함수는 다음을 요구합니다:</p> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">정확한 이름</li> <li class="svelte-bwqu3o">명시적인 역할/책임</li> <li class="svelte-bwqu3o">파라미터 선언 (이름, 타입, 필수 여부)</li> <li class="svelte-bwqu3o">반환값 구조</li> <li class="svelte-bwqu3o">파일 위치</li> <li class="svelte-bwqu3o">호출 위치 및 실행 시점</li> <li class="svelte-bwqu3o">완전한 워크플로우 단계</li> <li class="svelte-bwqu3o">에러 처리 시나리오</li></ul> <div class="code-block svelte-bwqu3o" style="margin-top: 1rem;"><div class="code-header svelte-bwqu3o">함수 명세 예시</div> <pre style="white-space: pre-wrap; color: #cbd5e1; line-height: 1.8;" class="svelte-bwqu3o">함수명: handleLikeCreate
역할: 좋아요 추가 시 likeCount 증가 및 통계 업데이트
파라미터: likeId: string (필수)
반환값: Promise&lt;&#123; success: boolean; type?: string; error?: string &#125;&gt;
위치: /firebase/functions/src/handlers/like.handler.ts
호출: Firebase onCreate 트리거에서 자동 실행
워크플로우:
  1. likeId 파싱
  2. type이 'post'인 경우 게시글의 likeCount +1
  3. type이 'comment'인 경우 댓글의 likeCount +1
  4. 전역 통계 업데이트</pre></div></div> <div class="spec-component svelte-bwqu3o"><h4 class="component-title svelte-bwqu3o">🎨 UI/UX 요구사항</h4> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">디자인 시스템 및 색상 사양</li> <li class="svelte-bwqu3o">타이포그래피 및 반응형 브레이크포인트</li> <li class="svelte-bwqu3o">치수가 포함된 레이아웃 컴포넌트</li> <li class="svelte-bwqu3o">사용자 플로우 문서</li> <li class="svelte-bwqu3o">접근성 표준 (WCAG 2.1 AA)</li> <li class="svelte-bwqu3o">타이밍이 포함된 애니메이션 사양</li></ul></div> <div class="spec-component highlight-component svelte-bwqu3o"><h4 class="component-title svelte-bwqu3o">🧪 테스트 명세 (가장 중요)</h4> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">테스트 프레임워크 버전 (Vitest, Testing Library, Playwright)</li> <li class="svelte-bwqu3o">환경 설정 (Docker, CI/CD 파이프라인 구성)</li> <li class="svelte-bwqu3o">Unit 테스트 목표 (≥80% 커버리지, 최소 200개 케이스)</li> <li class="svelte-bwqu3o">여러 브라우저에서 E2E 시나리오</li> <li class="svelte-bwqu3o">성능 벤치마크 (LCP &lt; 2.5s, FID &lt; 100ms)</li> <li class="svelte-bwqu3o">보안 테스트 프로토콜</li> <li class="svelte-bwqu3o">CI/CD 파이프라인 단계 및 시간 제한</li> <li class="svelte-bwqu3o">테스트 자동화 및 결과 리포팅</li></ul></div></div></div> <div class="section ip-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">©️ 지적 재산권</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">AI가 공개적으로 사용 가능한 SED 명세를 엄격히 따를 때:</p> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">저작권은 명세 작성자에게 귀속</strong>되며, AI에게 귀속되지
            않습니다.</li> <li class="svelte-bwqu3o">근거: AI는 창작적 결정을 내리지 않으므로, 지적 재산권은 명세 자체에서
            파생됩니다.</li> <li class="svelte-bwqu3o">명세를 작성한 작성자가 구현 소스와 관계없이 창작자입니다.</li></ul> <blockquote class="quote svelte-bwqu3o">"명세를 작성한 사람이 창작자입니다. AI는 단지 도구일 뿐입니다."</blockquote></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">📁 명세 파일 및 조직</h2> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">파일 명명 패턴</h3> <div class="code-block svelte-bwqu3o"><pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">&lt;project-name&gt;-&lt;module-name&gt;-&lt;function-name&gt;.md</code></pre></div></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">YAML 헤더 템플릿</h3> <div class="code-block svelte-bwqu3o"><pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">---
name: 프로젝트 이름 (영문, 숫자, 하이픈, ≤255자)
version: 시맨틱 버저닝
description: 프로젝트 개요 (≤4096자)
author: 작성자 이름 (≤64자)
email: 작성자 이메일 (≤64자)
license: MIT, GPL, SED Specification License 등
step: 실행 순서 (10, 20, 30...)
dependencies: 필요한 다른 명세들
---</code></pre></div></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">주요 포인트</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">모든 명세는 <code>./specs</code> 디렉토리에 있어야 함</li> <li class="svelte-bwqu3o">프로젝트 내 모든 파일에서 동일한 <code>name</code> 값 필요</li> <li class="svelte-bwqu3o">step 필드는 실행 순서 정의 (낮은 숫자가 먼저 실행)</li> <li class="svelte-bwqu3o">동일한 step 값을 가진 여러 명세는 동시에 실행됨</li> <li class="svelte-bwqu3o">Dependencies는 로컬 또는 원격 명세를 참조 가능</li></ul></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">라이센싱</h3> <p>SED Specification License는 작성자 저작권을 보호하면서 적절한 사용을
          허용합니다. 작성자는 명세 파일마다 MIT, GPL, 독점 라이센스 또는 기타
          라이센스를 선택할 수 있습니다.</p></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">⌨️ CLI 명령어</h2> <div class="code-block svelte-bwqu3o"><div class="code-header svelte-bwqu3o">사용 가능한 명령어</div> <pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">spec init [options]          # 새 프로젝트 초기화
  -n, --name &lt;name&gt;         # 프로젝트 이름
  -s, --summary &lt;summary&gt;    # 설명
  -a, --author &lt;author&gt;      # 작성자 이름
  -e, --email &lt;email&gt;        # 작성자 이메일

spec doctor [options]        # 명세 검증 (곧 출시)
spec validate &lt;file&gt;         # 단일 파일 검증 (곧 출시)
spec score &lt;file&gt;            # 명세 완성도 계산 (곧 출시)</code></pre></div> <div class="info-box svelte-bwqu3o" style="margin-top: 1.5rem;"><strong>💡 현재 상태:</strong><br/> - <strong>완전 구현:</strong> 대화형 및 비대화형 모드의 <code>spec init</code> 명령<br/> - <strong>곧 출시:</strong> <code>spec doctor</code>, <code>spec validate</code>, <code>spec score</code> 명령</div></div> <div class="section philosophy-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 핵심 철학</h2> <blockquote class="quote svelte-bwqu3o">"If the spec is wrong, the product is wrong — by design."<br/> <span class="quote-sub svelte-bwqu3o">(명세가 틀리면 제품도 틀립니다 — 설계에 의해)</span></blockquote> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">이것은 SED의 근본적인 균형을 반영합니다: 완벽한 명세 정밀도는 일관되고
          예측 가능한 구현을 보장하지만, 모든 모호함을 제거해야 하는 부담을 명세
          작성자에게 전가합니다.</p> <div class="highlight-box svelte-bwqu3o" style="margin-top: 1.5rem;"><strong class="svelte-bwqu3o">명세 소유권 철학:</strong><br/> 다른 사람의 명세를 수정할 수 있지만, 최종 명세는 여러분의 이해와 가치를
          반영해야 합니다. 인간 의사결정자는 무엇이 만들어질지에 대한 책임을
          유지합니다.</div></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">💬 핵심 표어</h2> <div class="slogan-container svelte-bwqu3o"><div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">🧠</div> <div class="slogan-text svelte-bwqu3o">"AI does not imagine. It executes."<br/> <span class="slogan-sub svelte-bwqu3o">(AI는 상상하지 않는다. 실행할 뿐이다.)</span></div></div> <div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">📜</div> <div class="slogan-text svelte-bwqu3o">"Spec is the contract. Spec is the code."<br/> <span class="slogan-sub svelte-bwqu3o">(명세는 계약이다. 명세는 코드다.)</span></div></div> <div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">⚙️</div> <div class="slogan-text svelte-bwqu3o">"No assumption. No improvisation. Only implementation."<br/> <span class="slogan-sub svelte-bwqu3o">(가정 없음. 즉흥 없음. 오직 구현만.)</span></div></div></div></div> <div class="conclusion svelte-bwqu3o"><p class="svelte-bwqu3o"><strong>Spec-Exact Development (SED)</strong>는 단순한 프롬프트 개발을
        넘어<br/> 명세의 완전성, 자동 검증, 절대적 일관성을 중심으로 한<br/> <strong>AI 기반 개발 표준 철학</strong>입니다.</p></div></div></div>`);const BR={hash:"svelte-bwqu3o",code:`
  /* 메인 컨테이너 */.sed-page.svelte-bwqu3o {position:relative;min-height:100vh;background:#f8f9fa;padding:2rem 1.5rem;}

  /* 배경 그라디언트 */.background-gradient.svelte-bwqu3o {position:absolute;inset:0;background:radial-gradient(
        circle at top right,
        rgba(99, 102, 241, 0.1),
        transparent 50%
      ),
      radial-gradient(
        circle at bottom left,
        rgba(168, 85, 247, 0.08),
        transparent 50%
      );pointer-events:none;}

  /* 컨테이너 */.container.svelte-bwqu3o {position:relative;max-width:56rem;margin:0 auto;display:flex;flex-direction:column;gap:2.5rem;}

  /* 헤더 섹션 */.header.svelte-bwqu3o {text-align:center;margin-bottom:1rem;}.title.svelte-bwqu3o {font-size:2.5rem;font-weight:800;color:#1e293b;margin:0 0 1rem 0;letter-spacing:-0.03em;line-height:1.2;}.subtitle.svelte-bwqu3o {font-size:1.125rem;font-style:italic;color:#64748b;margin:0;font-weight:500;}

  /* 섹션 */.section.svelte-bwqu3o {background:white;border-radius:1rem;padding:2rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.05);border:1px solid #e2e8f0;}.intro-section.svelte-bwqu3o {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);border:2px solid #fbbf24;}.ip-section.svelte-bwqu3o {background:linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);border:2px solid #3b82f6;}.philosophy-section.svelte-bwqu3o {background:linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);border:2px solid #6366f1;}.section-title.svelte-bwqu3o {font-size:1.75rem;font-weight:700;color:#0f172a;margin:0 0 1.5rem 0;}

  /* 콘텐츠 */.content.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1rem;color:#334155;line-height:1.8;margin-bottom:1rem;}.content.svelte-bwqu3o strong:where(.svelte-bwqu3o) {color:#1e293b;font-weight:600;}

  /* 인용구 */.quote.svelte-bwqu3o {background:linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);border-left:4px solid #6366f1;padding:1.5rem;margin:1.5rem 0;border-radius:0.5rem;font-size:1.125rem;font-weight:600;color:#4338ca;line-height:1.6;}.quote-sub.svelte-bwqu3o {display:block;margin-top:0.5rem;font-size:0.9rem;font-weight:500;color:#6366f1;}

  /* 원칙 카드 */.principle-card.svelte-bwqu3o {background:#f8fafc;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin-bottom:1.5rem;}.principle-title.svelte-bwqu3o {font-size:1.25rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.principle-list.svelte-bwqu3o {list-style:none;padding:0;margin:0;}.principle-list.svelte-bwqu3o > li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.75rem;position:relative;color:#475569;line-height:1.7;}.principle-list.svelte-bwqu3o > li:where(.svelte-bwqu3o)::before {content:"•";position:absolute;left:0;color:#6366f1;font-weight:bold;font-size:1.2rem;}.sub-list.svelte-bwqu3o {list-style:none;padding:0;margin-top:0.5rem;margin-left:1rem;}.sub-list.svelte-bwqu3o li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.5rem;position:relative;color:#64748b;font-size:0.95rem;}.sub-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"◦";position:absolute;left:0;color:#94a3b8;}

  /* 코드 블록 */.code-block.svelte-bwqu3o {background:#1e293b;border-radius:0.5rem;overflow:hidden;margin-top:1rem;}.code-header.svelte-bwqu3o {background:#334155;padding:0.5rem 1rem;font-size:0.875rem;color:#94a3b8;font-weight:500;}.code-block.svelte-bwqu3o pre:where(.svelte-bwqu3o) {margin:0;padding:1rem;overflow-x:auto;}.code-block.svelte-bwqu3o code:where(.svelte-bwqu3o) {font-family:"Courier New", monospace;font-size:0.875rem;color:#e2e8f0;line-height:1.6;}

  /* 하이라이트 박스 */.highlight-box.svelte-bwqu3o {background:linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);border:2px solid #22c55e;border-radius:0.5rem;padding:1rem 1.25rem;margin-top:1rem;font-size:1rem;color:#15803d;font-weight:600;line-height:1.7;}

  /* 정보 박스 */.info-box.svelte-bwqu3o {background:linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);border:1px solid #fbbf24;border-radius:0.75rem;padding:1.5rem;line-height:1.7;}

  /* 단계 카드 */.phase-card.svelte-bwqu3o {background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin-bottom:1.5rem;}.phase-title.svelte-bwqu3o {font-size:1.25rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.subsection-title.svelte-bwqu3o {font-size:1.125rem;font-weight:600;color:#334155;margin:1.5rem 0 0.75rem 0;}.phase-list.svelte-bwqu3o {list-style:none;padding:0;margin:0;}.phase-list.svelte-bwqu3o > li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.75rem;position:relative;color:#475569;line-height:1.7;}.phase-list.svelte-bwqu3o > li:where(.svelte-bwqu3o)::before {content:"▸";position:absolute;left:0;color:#6366f1;font-weight:bold;}.phase-step-description.svelte-bwqu3o {margin:0.75rem 0 1rem 0;color:#475569;line-height:1.6;}

  /* 명세 컴포넌트 */.spec-component.svelte-bwqu3o {background:#fafafa;border-left:3px solid #94a3b8;border-radius:0.5rem;padding:1rem 1.25rem;margin-bottom:1.25rem;}.spec-component.highlight-component.svelte-bwqu3o {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);border-left:3px solid #f59e0b;}.component-title.svelte-bwqu3o {font-size:1.125rem;font-weight:600;color:#0f172a;margin:0 0 0.75rem 0;}.spec-component.svelte-bwqu3o p:where(.svelte-bwqu3o) {margin:0 0 0.75rem 0;color:#475569;line-height:1.7;}.spec-component.svelte-bwqu3o code:where(.svelte-bwqu3o) {background:rgba(0, 0, 0, 0.05);padding:0.125rem 0.375rem;border-radius:0.25rem;font-family:"Courier New", monospace;font-size:0.9rem;}

  /* 슬로건 컨테이너 */.slogan-container.svelte-bwqu3o {display:flex;flex-direction:column;gap:1rem;margin-top:1rem;}.slogan-card.svelte-bwqu3o {display:flex;align-items:center;gap:1rem;background:linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);border:1px solid #e9d5ff;border-radius:0.75rem;padding:1.25rem 1.5rem;}.slogan-icon.svelte-bwqu3o {font-size:2rem;flex-shrink:0;}.slogan-text.svelte-bwqu3o {font-size:1.125rem;font-weight:600;color:#6b21a8;font-style:italic;line-height:1.6;}.slogan-sub.svelte-bwqu3o {display:block;font-size:0.95rem;margin-top:0.25rem;color:#7c3aed;font-weight:500;}

  /* 마무리 섹션 */.conclusion.svelte-bwqu3o {background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);border:1px solid #bfdbfe;border-radius:1rem;padding:2rem;text-align:center;}.conclusion.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1.125rem;color:#1e40af;line-height:1.8;margin:0;}

  /* 반응형 디자인 */
  @media (max-width: 768px) {.sed-page.svelte-bwqu3o {padding:1.5rem 1rem;}.title.svelte-bwqu3o {font-size:2rem;}.subtitle.svelte-bwqu3o {font-size:1rem;}.section.svelte-bwqu3o {padding:1.5rem;}.section-title.svelte-bwqu3o {font-size:1.5rem;}.slogan-card.svelte-bwqu3o {flex-direction:column;text-align:center;}.slogan-text.svelte-bwqu3o {font-size:1rem;}
  }

  @media (max-width: 640px) {.title.svelte-bwqu3o {font-size:1.75rem;}.section.svelte-bwqu3o {padding:1.25rem;}.quote.svelte-bwqu3o {font-size:1rem;padding:1rem;}.code-block.svelte-bwqu3o code:where(.svelte-bwqu3o) {font-size:0.8125rem;}.conclusion.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1rem;}
  }`};function Q_(r){nt(r,BR);var e=jR();x(r,e)}be(Q_,{},[],[],!0);var VR=R('<div class="report-info-row svelte-1rjb1qt"><span class="label svelte-1rjb1qt"> </span> <span class="value message svelte-1rjb1qt"> </span></div>'),HR=R('<div class="report-item svelte-1rjb1qt"><div class="report-header svelte-1rjb1qt"><span class="report-number svelte-1rjb1qt"> </span> <span> </span> <span class="report-date svelte-1rjb1qt"> </span></div> <div class="report-content svelte-1rjb1qt"><div class="report-info-row svelte-1rjb1qt"><span class="label svelte-1rjb1qt"> </span> <span class="value svelte-1rjb1qt"> </span></div> <div class="report-info-row svelte-1rjb1qt"><span class="label svelte-1rjb1qt"> </span> <span class="value svelte-1rjb1qt"> </span></div> <div class="report-info-row svelte-1rjb1qt"><span class="label svelte-1rjb1qt"> </span> <span class="value reason svelte-1rjb1qt"> </span></div> <!></div> <div class="report-actions svelte-1rjb1qt"><button class="action-btn go-to-node svelte-1rjb1qt"> </button></div></div>'),WR=R('<div class="admin-report-list-page svelte-1rjb1qt"><div class="page-header svelte-1rjb1qt"><h1 class="page-title svelte-1rjb1qt"> </h1> <p class="page-description svelte-1rjb1qt"> </p></div> <!></div>');const GR={hash:"svelte-1rjb1qt",code:`\r
  /* 페이지 컨테이너 */.admin-report-list-page.svelte-1rjb1qt {max-width:900px;margin:0 auto;padding:2rem 1rem;}\r
\r
  /* 페이지 헤더 */.page-header.svelte-1rjb1qt {margin-bottom:2rem;padding-bottom:1rem;border-bottom:2px solid #e5e7eb;}.page-title.svelte-1rjb1qt {margin:0 0 0.5rem 0;font-size:2rem;font-weight:700;color:#111827;}.page-description.svelte-1rjb1qt {margin:0;font-size:0.95rem;color:#6b7280;}\r
\r
  /* 신고 아이템 */.report-item.svelte-1rjb1qt {background-color:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;padding:1.5rem;margin-bottom:1rem;transition:box-shadow 0.2s ease;}.report-item.svelte-1rjb1qt:hover {box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);}\r
\r
  /* 신고 헤더 */.report-header.svelte-1rjb1qt {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;padding-bottom:0.75rem;border-bottom:1px solid #f3f4f6;}.report-number.svelte-1rjb1qt {font-size:0.85rem;font-weight:700;color:#9ca3af;}.report-type.svelte-1rjb1qt {display:inline-flex;align-items:center;padding:0.25rem 0.75rem;border-radius:9999px;font-size:0.75rem;font-weight:600;color:#ffffff;}.report-type.post.svelte-1rjb1qt {background-color:#3b82f6;}.report-type.comment.svelte-1rjb1qt {background-color:#10b981;}.report-date.svelte-1rjb1qt {margin-left:auto;font-size:0.8rem;color:#9ca3af;}\r
\r
  /* 신고 내용 */.report-content.svelte-1rjb1qt {display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1rem;}.report-info-row.svelte-1rjb1qt {display:flex;align-items:flex-start;gap:0.5rem;}.label.svelte-1rjb1qt {font-size:0.85rem;font-weight:600;color:#374151;min-width:80px;}.value.svelte-1rjb1qt {font-size:0.85rem;color:#4b5563;word-break:break-word;}.value.reason.svelte-1rjb1qt {font-weight:600;color:#dc2626;}.value.message.svelte-1rjb1qt {font-style:italic;}\r
\r
  /* 액션 버튼 */.report-actions.svelte-1rjb1qt {display:flex;gap:0.5rem;justify-content:flex-end;}.action-btn.svelte-1rjb1qt {padding:0.5rem 1rem;border-radius:0.375rem;font-size:0.85rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;border:none;}.action-btn.go-to-node.svelte-1rjb1qt {background-color:#3b82f6;color:#ffffff;}.action-btn.go-to-node.svelte-1rjb1qt:hover {background-color:#2563eb;}\r
\r
  /* 반응형 스타일 */\r
  @media (max-width: 768px) {.admin-report-list-page.svelte-1rjb1qt {padding:1rem 0.5rem;}.page-title.svelte-1rjb1qt {font-size:1.5rem;}.report-item.svelte-1rjb1qt {padding:1rem;}.label.svelte-1rjb1qt {min-width:60px;font-size:0.8rem;}.value.svelte-1rjb1qt {font-size:0.8rem;}\r
  }`};function X_(r,e){ot(e,!1),nt(r,GR);const t=()=>Je(qt,"$t",n),[n,s]=$t();function i(w){return t()(`신고사유_${w}`)}function o(w){return w==="post"?t()("게시글"):t()("댓글")}function a(w){w.type==="post"?or(`/post/detail/${w.nodeId}`):or("/post/list")}fr();var l=WR(),u=d(l),p=d(u),m=d(p,!0);c(p);var v=h(p,2),b=d(v,!0);c(v),c(u);var g=h(u,2);fa(g,{path:"reports",orderBy:"createdAt",limitToFirst:20,children:yp,$$slots:{default:(w,k)=>{const I=Cn(()=>k.item),P=Cn(()=>k.index),$=Cn(()=>f(I));var N=HR(),q=d(N),T=d(q),A=d(T);c(T);var C=h(T,2),E=d(C,!0);c(C);var S=h(C,2),O=d(S,!0);c(S),c(q);var M=h(q,2),H=d(M),X=d(H),V=d(X);c(X);var le=h(X,2),ue=d(le,!0);c(le),c(H);var te=h(H,2),fe=d(te),Z=d(fe);c(fe);var W=h(fe,2),z=d(W,!0);c(W),c(te);var Y=h(te,2),re=d(Y),J=d(re);c(re);var D=h(re,2),G=d(D,!0);c(D),c(Y);var ce=h(Y,2);{var K=oe=>{var xe=VR(),he=d(xe),ge=d(he);c(he);var Ce=h(he,2),Te=d(Ce,!0);c(Ce),c(xe),L(qe=>{_(ge,`${qe??""}:`),_(Te,f($).message)},[()=>t()("상세메시지")]),x(oe,xe)};F(ce,oe=>{f($).message&&oe(K)})}c(M);var se=h(M,2),U=d(se);U.__click=()=>a(f($));var ie=d(U,!0);c(U),c(se),c(N),L((oe,xe,he,ge,Ce,Te,qe)=>{_(A,`#${f(P)+1}`),rr(C,1,`report-type ${f($).type??""}`,"svelte-1rjb1qt"),_(E,oe),_(O,xe),_(V,`${he??""}:`),_(ue,f($).uid),_(Z,`${ge??""}:`),_(z,f($).nodeId),_(J,`${Ce??""}:`),_(G,Te),_(ie,qe)},[()=>o(f($).type),()=>new Date(f($).createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),()=>t()("신고자"),()=>t()("대상ID"),()=>t()("신고사유"),()=>i(f($).reason),()=>t()("대상_보기")]),x(w,N)}}}),c(l),L((w,k)=>{_(m,w),_(b,k)},[()=>t()("관리자_신고_목록"),()=>t()("모든_사용자의_신고를_확인할_수_있습니다")]),x(r,l),at(),s()}xt(["click"]);be(X_,{},[],[],!0);var KR=R('<div class="my-report-list-page svelte-1o4f3fa"><div class="empty-state svelte-1o4f3fa"><p class="svelte-1o4f3fa"> </p> <button class="login-btn svelte-1o4f3fa"> </button></div></div>'),YR=R('<div class="report-info-row svelte-1o4f3fa"><span class="label svelte-1o4f3fa"> </span> <span class="value message svelte-1o4f3fa"> </span></div>'),QR=R('<div class="report-item svelte-1o4f3fa"><div class="report-header svelte-1o4f3fa"><span class="report-number svelte-1o4f3fa"> </span> <span> </span> <span class="report-date svelte-1o4f3fa"> </span></div> <div class="report-content svelte-1o4f3fa"><div class="report-info-row svelte-1o4f3fa"><span class="label svelte-1o4f3fa"> </span> <span class="value svelte-1o4f3fa"> </span></div> <div class="report-info-row svelte-1o4f3fa"><span class="label svelte-1o4f3fa"> </span> <span class="value reason svelte-1o4f3fa"> </span></div> <!></div> <div class="report-actions svelte-1o4f3fa"><button class="action-btn go-to-node svelte-1o4f3fa"> </button> <button class="action-btn cancel-report svelte-1o4f3fa"> </button></div></div>'),XR=R('<div class="my-report-list-page svelte-1o4f3fa"><div class="page-header svelte-1o4f3fa"><h1 class="page-title svelte-1o4f3fa"> </h1> <p class="page-description svelte-1o4f3fa"> </p></div> <!></div>');const JR={hash:"svelte-1o4f3fa",code:`\r
  /* 페이지 컨테이너 */.my-report-list-page.svelte-1o4f3fa {max-width:900px;margin:0 auto;padding:2rem 1rem;}\r
\r
  /* 빈 상태 (로그인 안 됨) */.empty-state.svelte-1o4f3fa {text-align:center;padding:3rem 1rem;}.empty-state.svelte-1o4f3fa p:where(.svelte-1o4f3fa) {margin-bottom:1.5rem;font-size:1.1rem;color:#6b7280;}.login-btn.svelte-1o4f3fa {padding:0.75rem 2rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.5rem;font-size:1rem;font-weight:600;cursor:pointer;transition:background-color 0.2s ease;}.login-btn.svelte-1o4f3fa:hover {background-color:#2563eb;}\r
\r
  /* 페이지 헤더 */.page-header.svelte-1o4f3fa {margin-bottom:2rem;padding-bottom:1rem;border-bottom:2px solid #e5e7eb;}.page-title.svelte-1o4f3fa {margin:0 0 0.5rem 0;font-size:2rem;font-weight:700;color:#111827;}.page-description.svelte-1o4f3fa {margin:0;font-size:0.95rem;color:#6b7280;}\r
\r
  /* 신고 아이템 */.report-item.svelte-1o4f3fa {background-color:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;padding:1.5rem;margin-bottom:1rem;transition:box-shadow 0.2s ease;}.report-item.svelte-1o4f3fa:hover {box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);}\r
\r
  /* 신고 헤더 */.report-header.svelte-1o4f3fa {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;padding-bottom:0.75rem;border-bottom:1px solid #f3f4f6;}.report-number.svelte-1o4f3fa {font-size:0.85rem;font-weight:700;color:#9ca3af;}.report-type.svelte-1o4f3fa {display:inline-flex;align-items:center;padding:0.25rem 0.75rem;border-radius:9999px;font-size:0.75rem;font-weight:600;color:#ffffff;}.report-type.post.svelte-1o4f3fa {background-color:#3b82f6;}.report-type.comment.svelte-1o4f3fa {background-color:#10b981;}.report-date.svelte-1o4f3fa {margin-left:auto;font-size:0.8rem;color:#9ca3af;}\r
\r
  /* 신고 내용 */.report-content.svelte-1o4f3fa {display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1rem;}.report-info-row.svelte-1o4f3fa {display:flex;align-items:flex-start;gap:0.5rem;}.label.svelte-1o4f3fa {font-size:0.85rem;font-weight:600;color:#374151;min-width:80px;}.value.svelte-1o4f3fa {font-size:0.85rem;color:#4b5563;word-break:break-word;}.value.reason.svelte-1o4f3fa {font-weight:600;color:#dc2626;}.value.message.svelte-1o4f3fa {font-style:italic;}\r
\r
  /* 액션 버튼 */.report-actions.svelte-1o4f3fa {display:flex;gap:0.5rem;justify-content:flex-end;}.action-btn.svelte-1o4f3fa {padding:0.5rem 1rem;border-radius:0.375rem;font-size:0.85rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;border:none;}.action-btn.go-to-node.svelte-1o4f3fa {background-color:#3b82f6;color:#ffffff;}.action-btn.go-to-node.svelte-1o4f3fa:hover {background-color:#2563eb;}.action-btn.cancel-report.svelte-1o4f3fa {background-color:#ef4444;color:#ffffff;}.action-btn.cancel-report.svelte-1o4f3fa:hover {background-color:#dc2626;}\r
\r
  /* 반응형 스타일 */\r
  @media (max-width: 768px) {.my-report-list-page.svelte-1o4f3fa {padding:1rem 0.5rem;}.page-title.svelte-1o4f3fa {font-size:1.5rem;}.report-item.svelte-1o4f3fa {padding:1rem;}.label.svelte-1o4f3fa {min-width:60px;font-size:0.8rem;}.value.svelte-1o4f3fa {font-size:0.8rem;}.report-actions.svelte-1o4f3fa {flex-direction:column;}.action-btn.svelte-1o4f3fa {width:100%;}\r
  }`};function J_(r,e){ot(e,!1),nt(r,JR);const t=()=>Je(qt,"$t",s),n=()=>Je(ha,"$user",s),[s,i]=$t();function o(g){return t()(`신고사유_${g}`)}function a(g){return g==="post"?t()("게시글"):t()("댓글")}function l(g){g.type==="post"?or(`/post/detail/${g.nodeId}`):or("/post/list")}async function u(g){if(confirm(t()("신고를취소하시겠습니까"))){if(!n()){Ne(t()("로그인필요"),"error");return}try{const w=await oh(g.type,g.nodeId,n().uid);w.success?Ne(t()("신고가취소되었습니다"),"success"):Ne(t()(w.error||"error.unknown"),"error")}catch(w){console.error("신고 취소 오류:",w),Ne(t()("error.unknown"),"error")}}}fr();var p=_e(),m=de(p);{var v=g=>{var w=KR(),k=d(w),I=d(k),P=d(I,!0);c(I);var $=h(I,2);$.__click=()=>or("/user/login");var N=d($,!0);c($),c(k),c(w),L((q,T)=>{_(P,q),_(N,T)},[()=>t()("로그인필요"),()=>t()("로그인")]),x(g,w)},b=g=>{var w=XR(),k=d(w),I=d(k),P=d(I,!0);c(I);var $=h(I,2),N=d($,!0);c($),c(k);var q=h(k,2);fa(q,{path:"reports",orderBy:"createdAt",limitToFirst:20,filter:T=>T.uid===n()?.uid,children:yp,$$slots:{default:(T,A)=>{const C=Cn(()=>A.item),E=Cn(()=>A.index),S=Cn(()=>f(C));var O=QR(),M=d(O),H=d(M),X=d(H);c(H);var V=h(H,2),le=d(V,!0);c(V);var ue=h(V,2),te=d(ue,!0);c(ue),c(M);var fe=h(M,2),Z=d(fe),W=d(Z),z=d(W);c(W);var Y=h(W,2),re=d(Y,!0);c(Y),c(Z);var J=h(Z,2),D=d(J),G=d(D);c(D);var ce=h(D,2),K=d(ce,!0);c(ce),c(J);var se=h(J,2);{var U=Ce=>{var Te=YR(),qe=d(Te),je=d(qe);c(qe);var He=h(qe,2),We=d(He,!0);c(He),c(Te),L(Ge=>{_(je,`${Ge??""}:`),_(We,f(S).message)},[()=>t()("상세메시지")]),x(Ce,Te)};F(se,Ce=>{f(S).message&&Ce(U)})}c(fe);var ie=h(fe,2),oe=d(ie);oe.__click=()=>l(f(S));var xe=d(oe,!0);c(oe);var he=h(oe,2);he.__click=()=>u(f(S));var ge=d(he,!0);c(he),c(ie),c(O),L((Ce,Te,qe,je,He,We,Ge)=>{_(X,`#${f(E)+1}`),rr(V,1,`report-type ${f(S).type??""}`,"svelte-1o4f3fa"),_(le,Ce),_(te,Te),_(z,`${qe??""}:`),_(re,f(S).nodeId),_(G,`${je??""}:`),_(K,He),_(xe,We),_(ge,Ge)},[()=>a(f(S).type),()=>new Date(f(S).createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),()=>t()("대상ID"),()=>t()("신고사유"),()=>o(f(S).reason),()=>t()("대상_보기"),()=>t()("신고_취소")]),x(T,O)}}}),c(w),L((T,A)=>{_(P,T),_(N,A)},[()=>t()("내_신고_목록"),()=>t()("내가_작성한_신고를_확인할_수_있습니다")]),x(g,w)};F(m,g=>{n()?g(b,!1):g(v)})}x(r,p),at(),i()}xt(["click"]);be(J_,{},[],[],!0);var ZR=R('<div role="alert"><span class="toast-icon svelte-1cpok13"> </span> <span class="toast-message svelte-1cpok13"> </span> <button class="toast-close svelte-1cpok13" aria-label="닫기" type="button">×</button></div>'),e4=R('<div class="toast-container svelte-1cpok13"></div>');const t4={hash:"svelte-1cpok13",code:`\r
  /* Toast 컨테이너 - 화면 상단 중앙에 고정 */.toast-container.svelte-1cpok13 {position:fixed;top:2rem;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;gap:0.5rem;pointer-events:none;max-width:90%;width:auto;}\r
\r
  /* 개별 Toast 항목 */.toast.svelte-1cpok13 {display:flex;align-items:center;gap:0.75rem;padding:1rem 1.5rem;border-radius:0.5rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);pointer-events:auto;min-width:320px;max-width:500px;\r
    animation: svelte-1cpok13-slideDown 0.4s ease-out;font-weight:500;}\r
\r
  /* 슬라이드 다운 애니메이션 - 위에서 아래로 */\r
  @keyframes svelte-1cpok13-slideDown {\r
    from {\r
      opacity: 0;\r
      transform: translateY(-1rem);\r
    }\r
    to {\r
      opacity: 1;\r
      transform: translateY(0);\r
    }\r
  }\r
\r
  /* 타입별 색상 - Success (성공) - 강렬한 초록색 */.toast-success.svelte-1cpok13 {background:linear-gradient(135deg, #059669 0%, #10b981 100%);color:#ffffff;}.toast-success.svelte-1cpok13 .toast-icon:where(.svelte-1cpok13) {color:#ffffff;background-color:rgba(255, 255, 255, 0.25);}\r
\r
  /* 타입별 색상 - Error (에러) - 강렬한 빨간색 */.toast-error.svelte-1cpok13 {background:linear-gradient(135deg, #dc2626 0%, #ef4444 100%);color:#ffffff;}.toast-error.svelte-1cpok13 .toast-icon:where(.svelte-1cpok13) {color:#ffffff;background-color:rgba(255, 255, 255, 0.25);}\r
\r
  /* 타입별 색상 - Info (정보) - 강렬한 파란색 */.toast-info.svelte-1cpok13 {background:linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);color:#ffffff;}.toast-info.svelte-1cpok13 .toast-icon:where(.svelte-1cpok13) {color:#ffffff;background-color:rgba(255, 255, 255, 0.25);}\r
\r
  /* 타입별 색상 - Warning (경고) - 강렬한 주황색 */.toast-warning.svelte-1cpok13 {background:linear-gradient(135deg, #d97706 0%, #f59e0b 100%);color:#ffffff;}.toast-warning.svelte-1cpok13 .toast-icon:where(.svelte-1cpok13) {color:#ffffff;background-color:rgba(255, 255, 255, 0.25);}\r
\r
  /* Toast 아이콘 */.toast-icon.svelte-1cpok13 {display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:50%;font-size:0.875rem;font-weight:700;flex-shrink:0;}\r
\r
  /* Toast 메시지 */.toast-message.svelte-1cpok13 {flex:1;font-size:0.9375rem;color:#ffffff;line-height:1.5;font-weight:500;}\r
\r
  /* Toast 닫기 버튼 */.toast-close.svelte-1cpok13 {background:none;border:none;color:rgba(255, 255, 255, 0.8);font-size:1.75rem;line-height:1;cursor:pointer;padding:0;width:1.75rem;height:1.75rem;display:flex;align-items:center;justify-content:center;transition:all 0.2s ease;flex-shrink:0;border-radius:0.25rem;}.toast-close.svelte-1cpok13:hover {color:#ffffff;background-color:rgba(255, 255, 255, 0.2);}\r
\r
  /* 반응형 - 모바일 */\r
  @media (max-width: 640px) {.toast-container.svelte-1cpok13 {top:1rem;max-width:95%;}.toast.svelte-1cpok13 {min-width:auto;width:100%;padding:1rem 1.25rem;}.toast-message.svelte-1cpok13 {font-size:0.875rem;}\r
  }`};function Z_(r,e){ot(e,!1),nt(r,t4);const t=()=>Je(ih,"$toasts",n),[n,s]=$t();function i(a){switch(a){case"success":return"✓";case"error":return"✗";case"info":return"ℹ";case"warning":return"⚠";default:return"ℹ"}}fr();var o=e4();nr(o,5,t,a=>a.id,(a,l)=>{var u=ZR(),p=d(u),m=d(p,!0);c(p);var v=h(p,2),b=d(v,!0);c(v);var g=h(v,2);g.__click=()=>A_(f(l).id),c(u),L(w=>{rr(u,1,`toast toast-${f(l).type??""}`,"svelte-1cpok13"),_(m,w),_(b,f(l).message)},[()=>i(f(l).type)]),x(a,u)}),c(o),x(r,o),at(),s()}xt(["click"]);be(Z_,{},[],[],!0);var r4=R('<div class="loading-state svelte-z18b0h"><div class="spinner svelte-z18b0h"></div> <p class="svelte-z18b0h"> </p></div>'),n4=R('<div class="error-state svelte-z18b0h"><p class="error-icon svelte-z18b0h">⚠️</p> <p class="error-text svelte-z18b0h"> </p> <p class="error-detail svelte-z18b0h"> </p></div>'),s4=R('<div class="stats-container svelte-z18b0h"><div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">👥</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">📝</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">💬</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">❤️</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div></div>'),i4=R('<div class="empty-state svelte-z18b0h"><p class="empty-icon svelte-z18b0h">📊</p> <p class="empty-text svelte-z18b0h"> </p></div>'),o4=R('<aside class="right-sidebar svelte-z18b0h"><h2 class="sidebar-title svelte-z18b0h"> </h2> <!></aside>');const a4={hash:"svelte-z18b0h",code:`\r
  /* ============================================================================\r
     오른쪽 사이드바\r
     ============================================================================ */.right-sidebar.svelte-z18b0h {position:fixed;top:4rem; /* topbar 높이만큼 아래 */right:0;width:280px;height:calc(100vh - 4rem);padding:1.5rem;background-color:#ffffff;border-left:1px solid #e5e7eb;overflow-y:auto;z-index:10;}\r
\r
  /* ============================================================================\r
     섹션 제목\r
     ============================================================================ */.sidebar-title.svelte-z18b0h {font-size:1.125rem;font-weight:700;color:#111827;margin:0 0 1rem 0;padding-bottom:0.75rem;border-bottom:2px solid #3b82f6;}\r
\r
  /* ============================================================================\r
     통계 컨테이너\r
     ============================================================================ */.stats-container.svelte-z18b0h {display:flex;flex-direction:column;gap:1rem;}\r
\r
  /* ============================================================================\r
     통계 카드\r
     ============================================================================ */.stat-card.svelte-z18b0h {display:flex;align-items:center;gap:1rem;padding:1rem;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;transition:transform 0.2s, box-shadow 0.2s;}.stat-card.svelte-z18b0h:hover {transform:translateY(-2px);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);}\r
\r
  /* 아이콘 */.stat-icon.svelte-z18b0h {font-size:2rem;flex-shrink:0;}\r
\r
  /* 컨텐츠 */.stat-content.svelte-z18b0h {flex:1;min-width:0;}.stat-label.svelte-z18b0h {font-size:0.875rem;font-weight:600;color:#6b7280;margin:0 0 0.25rem 0;}.stat-value.svelte-z18b0h {font-size:1.5rem;font-weight:700;color:#111827;margin:0;}\r
\r
  /* ============================================================================\r
     로딩 상태\r
     ============================================================================ */.loading-state.svelte-z18b0h {display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem;text-align:center;}.spinner.svelte-z18b0h {width:32px;height:32px;border:3px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;\r
    animation: svelte-z18b0h-spin 0.8s linear infinite;margin-bottom:0.75rem;}\r
\r
  @keyframes svelte-z18b0h-spin {\r
    to {\r
      transform: rotate(360deg);\r
    }\r
  }.loading-state.svelte-z18b0h p:where(.svelte-z18b0h) {color:#6b7280;font-size:0.875rem;margin:0;}\r
\r
  /* ============================================================================\r
     에러 상태\r
     ============================================================================ */.error-state.svelte-z18b0h {display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem;text-align:center;}.error-icon.svelte-z18b0h {font-size:2.5rem;margin-bottom:0.75rem;}.error-text.svelte-z18b0h {color:#dc2626;font-size:0.875rem;font-weight:600;margin:0 0 0.5rem 0;}.error-detail.svelte-z18b0h {color:#9ca3af;font-size:0.75rem;margin:0;word-break:break-word;}\r
\r
  /* ============================================================================\r
     빈 상태\r
     ============================================================================ */.empty-state.svelte-z18b0h {display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem;text-align:center;}.empty-icon.svelte-z18b0h {font-size:2.5rem;margin-bottom:0.75rem;}.empty-text.svelte-z18b0h {color:#6b7280;font-size:0.875rem;margin:0;}\r
\r
  /* ============================================================================\r
     반응형 (모바일)\r
     ============================================================================ */\r
  @media (max-width: 1024px) {.right-sidebar.svelte-z18b0h {display:none; /* 태블릿/모바일에서는 사이드바 숨김 */}\r
  }`};function eb(r,e){ot(e,!1),nt(r,a4);const t=()=>Je(qt,"$t",s),n=()=>Je(o,"$statsStore",s),[s,i]=$t(),o=sh("stats/counters");function a(g){return g==null?"0":g.toLocaleString()}fr();var l=o4(),u=d(l),p=d(u,!0);c(u);var m=h(u,2);{var v=g=>{var w=r4(),k=h(d(w),2),I=d(k,!0);c(k),c(w),L(P=>_(I,P),[()=>t()("통계로딩중")]),x(g,w)},b=g=>{var w=_e(),k=de(w);{var I=$=>{var N=n4(),q=h(d(N),2),T=d(q,!0);c(q);var A=h(q,2),C=d(A,!0);c(A),c(N),L(E=>{_(T,E),_(C,n().error.message)},[()=>t()("통계로드실패")]),x($,N)},P=$=>{var N=_e(),q=de(N);{var T=C=>{const E=Cn(()=>n().data);var S=s4(),O=d(S),M=h(d(O),2),H=d(M),X=d(H,!0);c(H);var V=h(H,2),le=d(V,!0);c(V),c(M),c(O);var ue=h(O,2),te=h(d(ue),2),fe=d(te),Z=d(fe,!0);c(fe);var W=h(fe,2),z=d(W,!0);c(W),c(te),c(ue);var Y=h(ue,2),re=h(d(Y),2),J=d(re),D=d(J,!0);c(J);var G=h(J,2),ce=d(G,!0);c(G),c(re),c(Y);var K=h(Y,2),se=h(d(K),2),U=d(se),ie=d(U,!0);c(U);var oe=h(U,2),xe=d(oe,!0);c(oe),c(se),c(K),c(S),L((he,ge,Ce,Te,qe,je,He,We)=>{_(X,he),_(le,ge),_(Z,Ce),_(z,Te),_(D,qe),_(ce,je),_(ie,He),_(xe,We)},[()=>t()("전체사용자"),()=>a(f(E).user),()=>t()("전체글"),()=>a(f(E).post),()=>t()("전체댓글"),()=>a(f(E).comment),()=>t()("전체좋아요"),()=>a(f(E).like)]),x(C,S)},A=C=>{var E=i4(),S=h(d(E),2),O=d(S,!0);c(S),c(E),L(M=>_(O,M),[()=>t()("통계데이터없음")]),x(C,E)};F(q,C=>{n().data?C(T):C(A,!1)},!0)}x($,N)};F(k,$=>{n().error?$(I):$(P,!1)},!0)}x(g,w)};F(m,g=>{n().loading?g(v):g(b,!1)})}c(l),L(g=>_(p,g),[()=>t()("전체통계")]),x(r,l),at(),i()}be(eb,{},[],[],!0);var l4=R('<sns-layout><main class="content-with-sidebar svelte-1hwhcgc"><!></main> <!></sns-layout> <!> <test-fab></test-fab>',3);const c4={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 (사이드바와 함께) */.content-with-sidebar.svelte-1hwhcgc {width:100%;padding:0 20px;box-sizing:border-box;}

  /* 반응형 */
  @media (max-width: 1024px) {.content-with-sidebar.svelte-1hwhcgc {padding-right:20px;}
  }

  /* 모바일 화면 (768px 이하): 좌우 여백 최소화 */
  @media (max-width: 768px) {.content-with-sidebar.svelte-1hwhcgc {padding:0;}
  }`};function tb(r){nt(r,c4);let e=ne(hr(window.location.pathname));function t(){y(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",t);var n=l4(),s=de(n),i=d(s),o=d(i);{var a=m=>{C_(m,{})},l=m=>{var v=_e(),b=de(v);{var g=k=>{I_(k,{})},w=k=>{var I=_e(),P=de(I);{var $=q=>{T_(q,{})},N=q=>{var T=_e(),A=de(T);{var C=S=>{S_(S,{})},E=S=>{var O=_e(),M=de(O);{var H=V=>{q_(V,{})},X=V=>{var le=_e(),ue=de(le);{var te=Z=>{z_(Z,{})},fe=Z=>{var W=_e(),z=de(W);{var Y=J=>{U_(J,{})},re=J=>{var D=_e(),G=de(D);{var ce=se=>{F_(se,{})},K=se=>{var U=_e(),ie=de(U);{var oe=he=>{j_(he,{})},xe=he=>{var ge=_e(),Ce=de(ge);{var Te=je=>{X_(je,{})},qe=je=>{var He=_e(),We=de(He);{var Ge=lt=>{J_(lt,{})},Qe=lt=>{var ut=_e(),pt=de(ut);{var Se=ze=>{B_(ze,{})},Pe=ze=>{var Ke=_e(),Le=de(Ke);{var vt=Ze=>{V_(Ze,{})},ct=Ze=>{var j=_e(),B=de(j);{var Ae=ve=>{H_(ve,{})},ee=ve=>{var ke=_e(),Ie=de(ke);{var Re=me=>{W_(me,{})},we=me=>{var Be=_e(),ht=de(Be);{var ft=Ve=>{G_(Ve,{})},It=Ve=>{var bt=_e(),At=de(bt);{var Xe=Gt=>{K_(Gt,{})},Ht=Gt=>{var Zt=_e(),Lr=de(Zt);{var Lt=Tt=>{Y_(Tt,{})},er=Tt=>{var Q=_e(),pe=de(Q);{var De=wt=>{Q_(wt)},mt=wt=>{E_(wt,{})};F(pe,wt=>{f(e)==="/dev/sed"?wt(De):wt(mt,!1)},!0)}x(Tt,Q)};F(Lr,Tt=>{f(e)==="/dev/history"?Tt(Lt):Tt(er,!1)},!0)}x(Gt,Zt)};F(At,Gt=>{f(e)==="/dev/generate-posts"?Gt(Xe):Gt(Ht,!1)},!0)}x(Ve,bt)};F(ht,Ve=>{f(e)==="/contact"?Ve(ft):Ve(It,!1)},!0)}x(me,Be)};F(Ie,me=>{f(e)==="/privacy"?me(Re):me(we,!1)},!0)}x(ve,ke)};F(B,ve=>{f(e)==="/terms"?ve(Ae):ve(ee,!1)},!0)}x(Ze,j)};F(Le,Ze=>{f(e)==="/help"?Ze(vt):Ze(ct,!1)},!0)}x(ze,Ke)};F(pt,ze=>{f(e)==="/about"?ze(Se):ze(Pe,!1)},!0)}x(lt,ut)};F(We,lt=>{f(e)==="/my/reports"?lt(Ge):lt(Qe,!1)},!0)}x(je,He)};F(Ce,je=>{f(e)==="/admin/reports"?je(Te):je(qe,!1)},!0)}x(he,ge)};F(ie,he=>{f(e)==="/admin"?he(oe):he(xe,!1)},!0)}x(se,U)};F(G,se=>{f(e)==="/settings"?se(ce):se(K,!1)},!0)}x(J,D)};F(z,J=>{f(e)==="/chat/list"?J(Y):J(re,!1)},!0)}x(Z,W)};F(ue,Z=>{f(e).startsWith("/post/detail/")?Z(te):Z(fe,!1)},!0)}x(V,le)};F(M,V=>{f(e)==="/post/list"?V(H):V(X,!1)},!0)}x(S,O)};F(A,S=>{f(e)==="/user/list"?S(C):S(E,!1)},!0)}x(q,T)};F(P,q=>{f(e)==="/user/profile"?q($):q(N,!1)},!0)}x(k,I)};F(b,k=>{f(e)==="/menu"?k(g):k(w,!1)},!0)}x(m,v)};F(o,m=>{f(e)==="/user/login"?m(a):m(l,!1)})}c(i);var u=h(i,2);eb(u,{}),c(s);var p=h(s,2);Z_(p,{}),h(p,2),x(r,n)}be(tb,{},[],[],!0);Md(tb,{target:document.getElementById("app")});
