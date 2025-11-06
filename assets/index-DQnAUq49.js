(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const cp=!1;var hd=Array.isArray,a1=Array.prototype.indexOf,fd=Array.from,va=Object.keys,vo=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,dp=Object.getOwnPropertyDescriptors,l1=Object.prototype,c1=Array.prototype,pd=Object.getPrototypeOf,kh=Object.isExtensible;function Mi(r){return typeof r=="function"}const Mr=()=>{};function d1(r){return r()}function ma(r){for(var e=0;e<r.length;e++)r[e]()}function up(){var r,e,t=new Promise((n,s)=>{r=n,e=s});return{promise:t,resolve:r,reject:e}}function u1(r,e){if(Array.isArray(r))return r;if(!(Symbol.iterator in r))return Array.from(r);const t=[];for(const n of r)if(t.push(n),t.length===e)break;return t}const vr=2,vd=4,Qa=8,Hn=16,Wn=32,bs=64,Ja=128,hr=1024,Rr=2048,Gn=4096,zr=8192,Nn=16384,md=32768,Mn=65536,Eh=1<<17,h1=1<<18,js=1<<19,hp=1<<20,Hr=256,ga=512,_a=32768,yc=1<<21,gd=1<<22,Ps=1<<23,hn=Symbol("$state"),_d=Symbol("legacy props"),f1=Symbol(""),ni=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},p1=1,bd=3,Ci=8;function fp(r){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function v1(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function m1(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function g1(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _1(r){throw new Error("https://svelte.dev/e/effect_orphan")}function b1(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function w1(){throw new Error("https://svelte.dev/e/hydration_failed")}function y1(r){throw new Error("https://svelte.dev/e/props_invalid_value")}function x1(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function k1(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function E1(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function I1(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Xa=1,Za=2,pp=4,C1=8,T1=16,S1=1,A1=2,vp=4,P1=8,R1=16,N1=1,L1=2,mp="[",el="[!",wd="]",fi={},ar=Symbol(),$1="http://www.w3.org/1999/xhtml",D1="http://www.w3.org/2000/svg",q1="@attach";function tl(r){console.warn("https://svelte.dev/e/hydration_mismatch")}function O1(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function M1(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Le=!1;function wr(r){Le=r}let ut;function dr(r){if(r===null)throw tl(),fi;return ut=r}function zn(){return dr(_n(ut))}function c(r){if(Le){if(_n(ut)!==null)throw tl(),fi;ut=r}}function Ft(r=1){if(Le){for(var e=r,t=ut;e--;)t=_n(t);ut=t}}function ba(r=!0){for(var e=0,t=ut;;){if(t.nodeType===Ci){var n=t.data;if(n===wd){if(e===0)return t;e-=1}else(n===mp||n===el)&&(e+=1)}var s=_n(t);r&&t.remove(),t=s}}function gp(r){if(!r||r.nodeType!==Ci)throw tl(),fi;return r.data}function _p(r){return r===this.v}function bp(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function wp(r){return!bp(r,this.v)}let Ti=!1,z1=!1;function U1(){Ti=!0}let Ht=null;function pi(r){Ht=r}function gt(r,e=!1,t){Ht={p:Ht,i:!1,c:null,e:null,s:r,x:null,l:Ti&&!e?{s:null,u:null,$:[]}:null}}function _t(r){var e=Ht,t=e.e;if(t!==null){e.e=null;for(var n of t)Mp(n)}return r!==void 0&&(e.x=r),e.i=!0,Ht=e.p,r??{}}function Si(){return!Ti||Ht!==null&&Ht.l===null}let Ts=[];function yp(){var r=Ts;Ts=[],ma(r)}function ws(r){if(Ts.length===0&&!eo){var e=Ts;queueMicrotask(()=>{e===Ts&&yp()})}Ts.push(r)}function F1(){for(;Ts.length>0;)yp()}function xp(r){var e=He;if(e===null)return at.f|=Ps,r;if((e.f&md)===0){if((e.f&Ja)===0)throw r;e.b.error(r)}else vi(r,e)}function vi(r,e){for(;e!==null;){if((e.f&Ja)!==0)try{e.b.error(r);return}catch(t){r=t}e=e.parent}throw r}const Zo=new Set;let St=null,Zi=null,Yr=null,cn=[],rl=null,xc=!1,eo=!1;class Xr{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#n=0;#s=0;#l=null;#o=[];#i=[];skipped_effects=new Set;is_fork=!1;process(e){cn=[],Zi=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const n of e)this.#r(n,t);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects)):(Zi=this,St=null,Ih(t.render_effects),Ih(t.effects),Zi=null,this.#l?.resolve()),Yr=null}#r(e,t){e.f^=hr;for(var n=e.first;n!==null;){var s=n.f,i=(s&(Wn|bs))!==0,o=i&&(s&hr)!==0,a=o||(s&zr)!==0||this.skipped_effects.has(n);if((n.f&Ja)!==0&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[],block_effects:[]}),!a&&n.fn!==null){i?n.f^=hr:(s&vd)!==0?t.effects.push(n):Do(n)&&((n.f&Hn)!==0&&t.block_effects.push(n),bo(n));var l=n.first;if(l!==null){n=l;continue}}var u=n.parent;for(n=n.next;n===null&&u!==null;)u===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects),t=t.parent),n=u.next,u=u.parent}}#a(e){for(const t of e)((t.f&Rr)!==0?this.#o:this.#i).push(t),pr(t,hr)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),Yr?.set(e,e.v)}activate(){St=this}deactivate(){St=null,Yr=null}flush(){if(this.activate(),cn.length>0){if(kp(),St!==null&&St!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#n===0&&this.#d()}#d(){if(Zo.size>1){this.previous.clear();var e=Yr,t=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of Zo){if(s===this){t=!1;continue}const i=[];for(const[a,l]of this.current){if(s.current.has(a))if(t&&l!==s.current.get(a))s.current.set(a,l);else continue;i.push(a)}if(i.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const u of i)Ep(u,o,a,l);if(cn.length>0){St=s,s.apply();for(const u of cn)s.#r(u,n);cn=[],s.deactivate()}}}St=null,Yr=e}this.committed=!0,Zo.delete(this)}increment(e){this.#n+=1,e&&(this.#s+=1)}decrement(e){this.#n-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)pr(e,Rr),Ls(e);for(const e of this.#i)pr(e,Gn),Ls(e);this.#o=[],this.#i=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=up()).promise}static ensure(){if(St===null){const e=St=new Xr;Zo.add(St),eo||Xr.enqueue(()=>{St===e&&e.flush()})}return St}static enqueue(e){ws(e)}apply(){}}function je(r){var e=eo;eo=!0;try{for(var t;;){if(F1(),cn.length===0&&(St?.flush(),cn.length===0))return rl=null,t;kp()}}finally{eo=e}}function kp(){var r=ai;xc=!0;try{var e=0;for(Sh(!0);cn.length>0;){var t=Xr.ensure();if(e++>1e3){var n,s;j1()}t.process(cn),os.clear()}}finally{xc=!1,Sh(r),rl=null}}function j1(){try{b1()}catch(r){vi(r,rl)}}let In=null;function Ih(r){var e=r.length;if(e!==0){for(var t=0;t<e;){var n=r[t++];if((n.f&(Nn|zr))===0&&Do(n)&&(In=new Set,bo(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Fp(n):n.fn=null),In?.size>0)){os.clear();for(const s of In){if((s.f&(Nn|zr))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)In.has(o)&&(In.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(Nn|zr))===0&&bo(l)}}In.clear()}}In=null}}function Ep(r,e,t,n){if(!t.has(r)&&(t.add(r),r.reactions!==null))for(const s of r.reactions){const i=s.f;(i&vr)!==0?Ep(s,e,t,n):(i&(gd|Hn))!==0&&(i&Rr)===0&&Ip(s,e,n)&&(pr(s,Rr),Ls(s))}}function Ip(r,e,t){const n=t.get(r);if(n!==void 0)return n;if(r.deps!==null)for(const s of r.deps){if(e.includes(s))return!0;if((s.f&vr)!==0&&Ip(s,e,t))return t.set(s,!0),!0}return t.set(r,!1),!1}function Ls(r){for(var e=rl=r;e.parent!==null;){e=e.parent;var t=e.f;if(xc&&e===He&&(t&Hn)!==0)return;if((t&(bs|Wn))!==0){if((t&hr)===0)return;e.f^=hr}}cn.push(e)}function B1(r){let e=0,t=hs(0),n;return()=>{Z1()&&(p(t),il(()=>(e===0&&(n=sn(()=>r(()=>to(t)))),e+=1,()=>{ws(()=>{e-=1,e===0&&(n?.(),n=void 0,to(t))})})))}}var V1=Mn|js|Ja;function H1(r,e,t){new W1(r,e,t)}class W1{parent;#t=!1;#e;#n=Le?ut:null;#s;#l;#o;#i=null;#r=null;#a=null;#c=null;#d=null;#f=0;#u=0;#p=!1;#h=null;#b=B1(()=>(this.#h=hs(this.#f),()=>{this.#h=null}));constructor(e,t,n){this.#e=e,this.#s=t,this.#l=n,this.parent=He.b,this.#t=!!this.#s.pending,this.#o=Kn(()=>{if(He.b=this,Le){const i=this.#n;zn(),i.nodeType===Ci&&i.data===el?this.#y():this.#w()}else{var s=this.#g();try{this.#i=Tr(()=>n(s))}catch(i){this.error(i)}this.#u>0?this.#m():this.#t=!1}return()=>{this.#d?.remove()}},V1),Le&&(this.#e=ut)}#w(){try{this.#i=Tr(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#s.pending;e&&(this.#r=Tr(()=>e(this.#e)),Xr.enqueue(()=>{var t=this.#g();this.#i=this.#v(()=>(Xr.ensure(),Tr(()=>this.#l(t)))),this.#u>0?this.#m():(oi(this.#r,()=>{this.#r=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#d=Wr(),this.#e.before(this.#d),e=this.#d),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#v(e){var t=He,n=at,s=Ht;Nr(this.#o),fr(this.#o),pi(this.#o.ctx);try{return e()}catch(i){return xp(i),null}finally{Nr(t),fr(n),pi(s)}}#m(){const e=this.#s.pending;this.#i!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#d),Vp(this.#i,this.#c)),this.#r===null&&(this.#r=Tr(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#u+=e,this.#u===0&&(this.#t=!1,this.#r&&oi(this.#r,()=>{this.#r=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&mi(this.#h,this.#f)}get_effect_pending(){return this.#b(),p(this.#h)}error(e){var t=this.#s.onerror;let n=this.#s.failed;if(this.#p||!t&&!n)throw e;this.#i&&(tr(this.#i),this.#i=null),this.#r&&(tr(this.#r),this.#r=null),this.#a&&(tr(this.#a),this.#a=null),Le&&(dr(this.#n),Ft(),dr(ba()));var s=!1,i=!1;const o=()=>{if(s){M1();return}s=!0,i&&I1(),Xr.ensure(),this.#f=0,this.#a!==null&&oi(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#i=this.#v(()=>(this.#p=!1,Tr(()=>this.#l(this.#e)))),this.#u>0?this.#m():this.#t=!1};var a=at;try{fr(null),i=!0,t?.(e,o),i=!1}catch(l){vi(l,this.#o&&this.#o.parent)}finally{fr(a)}n&&ws(()=>{this.#a=this.#v(()=>{Xr.ensure(),this.#p=!0;try{return Tr(()=>{n(this.#e,()=>e,()=>o)})}catch(l){return vi(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Cp(r,e,t,n){const s=Si()?Lo:nl;if(t.length===0&&r.length===0){n(e.map(s));return}var i=St,o=He,a=G1();function l(){Promise.all(t.map(u=>K1(u))).then(u=>{a();try{n([...e.map(s),...u])}catch(f){(o.f&Nn)===0&&vi(f,o)}i?.deactivate(),wa()}).catch(u=>{vi(u,o)})}r.length>0?Promise.all(r).then(()=>{a();try{return l()}finally{i?.deactivate(),wa()}}):l()}function G1(){var r=He,e=at,t=Ht,n=St;return function(i=!0){Nr(r),fr(e),pi(t),i&&n?.activate()}}function wa(){Nr(null),fr(null),pi(null)}function Lo(r){var e=vr|Rr,t=at!==null&&(at.f&vr)!==0?at:null;return He===null||t!==null&&(t.f&Hr)!==0?e|=Hr:He.f|=js,{ctx:Ht,deps:null,effects:null,equals:_p,f:e,fn:r,reactions:null,rv:0,v:ar,wv:0,parent:t??He,ac:null}}function K1(r,e){let t=He;t===null&&v1();var n=t.b,s=void 0,i=hs(ar),o=!at,a=new Map;return n0(()=>{var l=up();s=l.promise;try{Promise.resolve(r()).then(l.resolve,l.reject).then(()=>{u===St&&u.committed&&u.deactivate(),wa()})}catch(v){l.reject(v),wa()}var u=St;if(o){var f=!n.is_pending();n.update_pending_count(1),u.increment(f),a.get(u)?.reject(ni),a.delete(u),a.set(u,l)}const m=(v,_=void 0)=>{if(u.activate(),_)_!==ni&&(i.f|=Ps,mi(i,_));else{(i.f&Ps)!==0&&(i.f^=Ps),mi(i,v);for(const[g,w]of a){if(a.delete(g),g===u)break;w.reject(ni)}}o&&(n.update_pending_count(-1),u.decrement(f))};l.promise.then(m,v=>m(null,v||"unknown"))}),$o(()=>{for(const l of a.values())l.reject(ni)}),new Promise(l=>{function u(f){function m(){f===s?l(i):u(s)}f.then(m,m)}u(s)})}function Un(r){const e=Lo(r);return Hp(e),e}function nl(r){const e=Lo(r);return e.equals=wp,e}function Tp(r){var e=r.effects;if(e!==null){r.effects=null;for(var t=0;t<e.length;t+=1)tr(e[t])}}function Y1(r){for(var e=r.parent;e!==null;){if((e.f&vr)===0)return e;e=e.parent}return null}function yd(r){var e,t=He;Nr(Y1(r));try{r.f&=~_a,Tp(r),e=Yp(r)}finally{Nr(t)}return e}function Sp(r){var e=yd(r);if(r.equals(e)||(r.v=e,r.wv=Gp()),!Bs)if(Yr!==null)Yr.set(r,r.v);else{var t=(ns||(r.f&Hr)!==0)&&r.deps!==null?Gn:hr;pr(r,t)}}let kc=new Set;const os=new Map;let Ap=!1;function hs(r,e){var t={f:0,v:r,reactions:null,equals:_p,rv:0,wv:0};return t}function ee(r,e){const t=hs(r);return Hp(t),t}function xd(r,e=!1,t=!0){const n=hs(r);return e||(n.equals=wp),Ti&&t&&Ht!==null&&Ht.l!==null&&(Ht.l.s??=[]).push(n),n}function x(r,e,t=!1){at!==null&&(!Qr||(at.f&Eh)!==0)&&Si()&&(at.f&(vr|Hn|gd|Eh))!==0&&!Ln?.includes(r)&&E1();let n=t?or(e):e;return mi(r,n)}function mi(r,e){if(!r.equals(e)){var t=r.v;Bs?os.set(r,e):os.set(r,t),r.v=e;var n=Xr.ensure();n.capture(r,t),(r.f&vr)!==0&&((r.f&Rr)!==0&&yd(r),pr(r,(r.f&Hr)===0?hr:Gn)),r.wv=Gp(),Pp(r,Rr),Si()&&He!==null&&(He.f&hr)!==0&&(He.f&(Wn|bs))===0&&(Br===null?o0([r]):Br.push(r)),!n.is_fork&&kc.size>0&&!Ap&&Q1()}return e}function Q1(){Ap=!1;const r=Array.from(kc);for(const e of r)(e.f&hr)!==0&&pr(e,Gn),Do(e)&&bo(e);kc.clear()}function Ec(r,e=1){var t=p(r),n=e===1?t++:t--;return x(r,t),n}function to(r){x(r,r.v+1)}function Pp(r,e){var t=r.reactions;if(t!==null)for(var n=Si(),s=t.length,i=0;i<s;i++){var o=t[i],a=o.f;if(!(!n&&o===He)){var l=(a&Rr)===0;l&&pr(o,e),(a&vr)!==0?(a&_a)===0&&(o.f|=_a,Pp(o,Gn)):l&&((a&Hn)!==0&&In!==null&&In.add(o),Ls(o))}}}function or(r){if(typeof r!="object"||r===null||hn in r)return r;const e=pd(r);if(e!==l1&&e!==c1)return r;var t=new Map,n=hd(r),s=ee(0),i=Rs,o=a=>{if(Rs===i)return a();var l=at,u=Rs;fr(null),Ph(i);var f=a();return fr(l),Ph(u),f};return n&&t.set("length",ee(r.length)),new Proxy(r,{defineProperty(a,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&x1();var f=t.get(l);return f===void 0?f=o(()=>{var m=ee(u.value);return t.set(l,m),m}):x(f,u.value,!0),!0},deleteProperty(a,l){var u=t.get(l);if(u===void 0){if(l in a){const f=o(()=>ee(ar));t.set(l,f),to(s)}}else x(u,ar),to(s);return!0},get(a,l,u){if(l===hn)return r;var f=t.get(l),m=l in a;if(f===void 0&&(!m||Rn(a,l)?.writable)&&(f=o(()=>{var _=or(m?a[l]:ar),g=ee(_);return g}),t.set(l,f)),f!==void 0){var v=p(f);return v===ar?void 0:v}return Reflect.get(a,l,u)},getOwnPropertyDescriptor(a,l){var u=Reflect.getOwnPropertyDescriptor(a,l);if(u&&"value"in u){var f=t.get(l);f&&(u.value=p(f))}else if(u===void 0){var m=t.get(l),v=m?.v;if(m!==void 0&&v!==ar)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return u},has(a,l){if(l===hn)return!0;var u=t.get(l),f=u!==void 0&&u.v!==ar||Reflect.has(a,l);if(u!==void 0||He!==null&&(!f||Rn(a,l)?.writable)){u===void 0&&(u=o(()=>{var v=f?or(a[l]):ar,_=ee(v);return _}),t.set(l,u));var m=p(u);if(m===ar)return!1}return f},set(a,l,u,f){var m=t.get(l),v=l in a;if(n&&l==="length")for(var _=u;_<m.v;_+=1){var g=t.get(_+"");g!==void 0?x(g,ar):_ in a&&(g=o(()=>ee(ar)),t.set(_+"",g))}if(m===void 0)(!v||Rn(a,l)?.writable)&&(m=o(()=>ee(void 0)),x(m,or(u)),t.set(l,m));else{v=m.v!==ar;var w=o(()=>or(u));x(m,w)}var k=Reflect.getOwnPropertyDescriptor(a,l);if(k?.set&&k.set.call(f,u),!v){if(n&&typeof l=="string"){var I=t.get("length"),P=Number(l);Number.isInteger(P)&&P>=I.v&&x(I,P+1)}to(s)}return!0},ownKeys(a){p(s);var l=Reflect.ownKeys(a).filter(m=>{var v=t.get(m);return v===void 0||v.v!==ar});for(var[u,f]of t)f.v!==ar&&!(u in a)&&l.push(u);return l},setPrototypeOf(){k1()}})}function Ch(r){try{if(r!==null&&typeof r=="object"&&hn in r)return r[hn]}catch{}return r}function J1(r,e){return Object.is(Ch(r),Ch(e))}var Ic,Rp,Np,Lp;function Cc(){if(Ic===void 0){Ic=window,Rp=/Firefox/.test(navigator.userAgent);var r=Element.prototype,e=Node.prototype,t=Text.prototype;Np=Rn(e,"firstChild").get,Lp=Rn(e,"nextSibling").get,kh(r)&&(r.__click=void 0,r.__className=void 0,r.__attributes=null,r.__style=void 0,r.__e=void 0),kh(t)&&(t.__t=void 0)}}function Wr(r=""){return document.createTextNode(r)}function nn(r){return Np.call(r)}function _n(r){return Lp.call(r)}function d(r,e){if(!Le)return nn(r);var t=nn(ut);if(t===null)t=ut.appendChild(Wr());else if(e&&t.nodeType!==bd){var n=Wr();return t?.before(n),dr(n),n}return dr(t),t}function de(r,e=!1){if(!Le){var t=nn(r);return t instanceof Comment&&t.data===""?_n(t):t}if(e&&ut?.nodeType!==bd){var n=Wr();return ut?.before(n),dr(n),n}return ut}function h(r,e=1,t=!1){let n=Le?ut:r;for(var s;e--;)s=n,n=_n(n);if(!Le)return n;if(t&&n?.nodeType!==bd){var i=Wr();return n===null?s?.after(i):n.before(i),dr(i),i}return dr(n),n}function kd(r){r.textContent=""}function $p(){return!1}function mo(r,e){if(e){const t=document.body;r.autofocus=!0,ws(()=>{document.activeElement===t&&r.focus()})}}function go(r){Le&&nn(r)!==null&&kd(r)}let Th=!1;function Dp(){Th||(Th=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{if(!r.defaultPrevented)for(const e of r.target.elements)e.__on_r?.()})},{capture:!0}))}function sl(r){var e=at,t=He;fr(null),Nr(null);try{return r()}finally{fr(e),Nr(t)}}function qp(r,e,t,n=t){r.addEventListener(e,()=>sl(t));const s=r.__on_r;s?r.__on_r=()=>{s(),n(!0)}:r.__on_r=()=>n(!0),Dp()}function Op(r){He===null&&at===null&&_1(),at!==null&&(at.f&Hr)!==0&&He===null&&g1(),Bs&&m1()}function X1(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function an(r,e,t,n=!0){var s=He;s!==null&&(s.f&zr)!==0&&(r|=zr);var i={ctx:Ht,deps:null,nodes_start:null,nodes_end:null,f:r|Rr,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{bo(i),i.f|=md}catch(l){throw tr(i),l}else e!==null&&Ls(i);if(n){var o=i;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&js)===0&&(o=o.first,(r&Hn)!==0&&(r&Mn)!==0&&o!==null&&(o.f|=Mn)),o!==null&&(o.parent=s,s!==null&&X1(o,s),at!==null&&(at.f&vr)!==0&&(r&bs)===0)){var a=at;(a.effects??=[]).push(o)}}return i}function Z1(){return at!==null&&!Qr}function $o(r){const e=an(Qa,null,!1);return pr(e,hr),e.teardown=r,e}function $s(r){Op();var e=He.f,t=!at&&(e&Wn)!==0&&(e&md)===0;if(t){var n=Ht;(n.e??=[]).push(r)}else return Mp(r)}function Mp(r){return an(vd|hp,r,!1)}function e0(r){return Op(),an(Qa|hp,r,!0)}function t0(r){Xr.ensure();const e=an(bs|js,r,!0);return()=>{tr(e)}}function r0(r){Xr.ensure();const e=an(bs|js,r,!0);return(t={})=>new Promise(n=>{t.outro?oi(e,()=>{tr(e),n(void 0)}):(tr(e),n(void 0))})}function Ai(r){return an(vd,r,!1)}function n0(r){return an(gd|js,r,!0)}function il(r,e=0){return an(Qa|e,r,!0)}function D(r,e=[],t=[],n=[]){Cp(n,e,t,s=>{an(Qa,()=>r(...s.map(p)),!0)})}function Kn(r,e=0){var t=an(Hn|e,r,!0);return t}function Tr(r,e=!0){return an(Wn|js,r,!0,e)}function zp(r){var e=r.teardown;if(e!==null){const t=Bs,n=at;Ah(!0),fr(null);try{e.call(null)}finally{Ah(t),fr(n)}}}function Up(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){const s=t.ac;s!==null&&sl(()=>{s.abort(ni)});var n=t.next;(t.f&bs)!==0?t.parent=null:tr(t,e),t=n}}function s0(r){for(var e=r.first;e!==null;){var t=e.next;(e.f&Wn)===0&&tr(e),e=t}}function tr(r,e=!0){var t=!1;(e||(r.f&h1)!==0)&&r.nodes_start!==null&&r.nodes_end!==null&&(i0(r.nodes_start,r.nodes_end),t=!0),Up(r,e&&!t),ya(r,0),pr(r,Nn);var n=r.transitions;if(n!==null)for(const i of n)i.stop();zp(r);var s=r.parent;s!==null&&s.first!==null&&Fp(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes_start=r.nodes_end=r.ac=null}function i0(r,e){for(;r!==null;){var t=r===e?null:_n(r);r.remove(),r=t}}function Fp(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function oi(r,e,t=!0){var n=[];Ed(r,n,!0),jp(n,()=>{t&&tr(r),e&&e()})}function jp(r,e){var t=r.length;if(t>0){var n=()=>--t||e();for(var s of r)s.out(n)}else e()}function Ed(r,e,t){if((r.f&zr)===0){if(r.f^=zr,r.transitions!==null)for(const o of r.transitions)(o.is_global||t)&&e.push(o);for(var n=r.first;n!==null;){var s=n.next,i=(n.f&Mn)!==0||(n.f&Wn)!==0&&(r.f&Hn)!==0;Ed(n,e,i?t:!1),n=s}}}function Id(r){Bp(r,!0)}function Bp(r,e){if((r.f&zr)!==0){r.f^=zr,(r.f&hr)===0&&(pr(r,Rr),Ls(r));for(var t=r.first;t!==null;){var n=t.next,s=(t.f&Mn)!==0||(t.f&Wn)!==0;Bp(t,s?e:!1),t=n}if(r.transitions!==null)for(const i of r.transitions)(i.is_global||e)&&i.in()}}function Vp(r,e){for(var t=r.nodes_start,n=r.nodes_end;t!==null;){var s=t===n?null:_n(t);e.append(t),t=s}}let ai=!1;function Sh(r){ai=r}let Bs=!1;function Ah(r){Bs=r}let at=null,Qr=!1;function fr(r){at=r}let He=null;function Nr(r){He=r}let Ln=null;function Hp(r){at!==null&&(Ln===null?Ln=[r]:Ln.push(r))}let br=null,Dr=0,Br=null;function o0(r){Br=r}let Wp=1,_o=0,Rs=_o;function Ph(r){Rs=r}let ns=!1;function Gp(){return++Wp}function Do(r){var e=r.f;if((e&Rr)!==0)return!0;if((e&Gn)!==0){var t=r.deps,n=(e&Hr)!==0;if(e&vr&&(r.f&=~_a),t!==null){var s,i,o=(e&ga)!==0,a=n&&He!==null&&!ns,l=t.length;if((o||a)&&(He===null||(He.f&Nn)===0)){var u=r,f=u.parent;for(s=0;s<l;s++)i=t[s],(o||!i?.reactions?.includes(u))&&(i.reactions??=[]).push(u);o&&(u.f^=ga),a&&f!==null&&(f.f&Hr)===0&&(u.f^=Hr)}for(s=0;s<l;s++)if(i=t[s],Do(i)&&Sp(i),i.wv>r.wv)return!0}(!n||He!==null&&!ns)&&pr(r,hr)}return!1}function Kp(r,e,t=!0){var n=r.reactions;if(n!==null&&!Ln?.includes(r))for(var s=0;s<n.length;s++){var i=n[s];(i.f&vr)!==0?Kp(i,e,!1):e===i&&(t?pr(i,Rr):(i.f&hr)!==0&&pr(i,Gn),Ls(i))}}function Yp(r){var e=br,t=Dr,n=Br,s=at,i=ns,o=Ln,a=Ht,l=Qr,u=Rs,f=r.f;br=null,Dr=0,Br=null,ns=(f&Hr)!==0&&(Qr||!ai||at===null),at=(f&(Wn|bs))===0?r:null,Ln=null,pi(r.ctx),Qr=!1,Rs=++_o,r.ac!==null&&(sl(()=>{r.ac.abort(ni)}),r.ac=null);try{r.f|=yc;var m=r.fn,v=m(),_=r.deps;if(br!==null){var g;if(ya(r,Dr),_!==null&&Dr>0)for(_.length=Dr+br.length,g=0;g<br.length;g++)_[Dr+g]=br[g];else r.deps=_=br;if(!ns||(f&vr)!==0&&r.reactions!==null)for(g=Dr;g<_.length;g++)(_[g].reactions??=[]).push(r)}else _!==null&&Dr<_.length&&(ya(r,Dr),_.length=Dr);if(Si()&&Br!==null&&!Qr&&_!==null&&(r.f&(vr|Gn|Rr))===0)for(g=0;g<Br.length;g++)Kp(Br[g],r);return s!==null&&s!==r&&(_o++,Br!==null&&(n===null?n=Br:n.push(...Br))),(r.f&Ps)!==0&&(r.f^=Ps),v}catch(w){return xp(w)}finally{r.f^=yc,br=e,Dr=t,Br=n,at=s,ns=i,Ln=o,pi(a),Qr=l,Rs=u}}function a0(r,e){let t=e.reactions;if(t!==null){var n=a1.call(t,r);if(n!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[n]=t[s],t.pop())}}t===null&&(e.f&vr)!==0&&(br===null||!br.includes(e))&&(pr(e,Gn),(e.f&(Hr|ga))===0&&(e.f^=ga),Tp(e),ya(e,0))}function ya(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)a0(r,t[n])}function bo(r){var e=r.f;if((e&Nn)===0){pr(r,hr);var t=He,n=ai;He=r,ai=!0;try{(e&Hn)!==0?s0(r):Up(r),zp(r);var s=Yp(r);r.teardown=typeof s=="function"?s:null,r.wv=Wp;var i;cp&&z1&&(r.f&Rr)!==0&&r.deps}finally{ai=n,He=t}}}async function l0(){await Promise.resolve(),je()}function p(r){var e=r.f,t=(e&vr)!==0;if(at!==null&&!Qr){var n=He!==null&&(He.f&Nn)!==0;if(!n&&!Ln?.includes(r)){var s=at.deps;if((at.f&yc)!==0)r.rv<_o&&(r.rv=_o,br===null&&s!==null&&s[Dr]===r?Dr++:br===null?br=[r]:(!ns||!br.includes(r))&&br.push(r));else{(at.deps??=[]).push(r);var i=r.reactions;i===null?r.reactions=[at]:i.includes(at)||i.push(at)}}}else if(t&&r.deps===null&&r.effects===null){var o=r,a=o.parent;a!==null&&(a.f&Hr)===0&&(o.f^=Hr)}if(Bs){if(os.has(r))return os.get(r);if(t){o=r;var l=o.v;return((o.f&hr)===0&&o.reactions!==null||Qp(o))&&(l=yd(o)),os.set(o,l),l}}else if(t){if(o=r,Yr?.has(o))return Yr.get(o);Do(o)&&Sp(o)}if(Yr?.has(r))return Yr.get(r);if((r.f&Ps)!==0)throw r.v;return r.v}function Qp(r){if(r.v===ar)return!0;if(r.deps===null)return!1;for(const e of r.deps)if(os.has(e)||(e.f&vr)!==0&&Qp(e))return!0;return!1}function sn(r){var e=Qr;try{return Qr=!0,r()}finally{Qr=e}}const c0=-7169;function pr(r,e){r.f=r.f&c0|e}function ri(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(hn in r)Tc(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&hn in t&&Tc(t)}}}function Tc(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{Tc(r[n],e)}catch{}const t=pd(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=dp(t);for(let s in n){const i=n[s].get;if(i)try{i.call(r)}catch{}}}}}function d0(r){return r.endsWith("capture")&&r!=="gotpointercapture"&&r!=="lostpointercapture"}const u0=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function h0(r){return u0.includes(r)}const f0={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function p0(r){return r=r.toLowerCase(),f0[r]??r}const v0=["touchstart","touchmove"];function m0(r){return v0.includes(r)}const g0=["textarea","script","style","title"];function _0(r){return g0.includes(r)}const Jp=new Set,Sc=new Set;function Xp(r,e,t,n={}){function s(i){if(n.capture||Gi.call(e,i),!i.cancelBubble)return sl(()=>t?.call(this,i))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?ws(()=>{e.addEventListener(r,s,n)}):e.addEventListener(r,s,n),s}function mn(r,e,t,n,s){var i={capture:n,passive:s},o=Xp(r,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&$o(()=>{e.removeEventListener(r,o,i)})}function Rt(r){for(var e=0;e<r.length;e++)Jp.add(r[e]);for(var t of Sc)t(r)}let Rh=null;function Gi(r){var e=this,t=e.ownerDocument,n=r.type,s=r.composedPath?.()||[],i=s[0]||r.target;Rh=r;var o=0,a=Rh===r&&r.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){r.__root=e;return}var u=s.indexOf(e);if(u===-1)return;l<=u&&(o=l)}if(i=s[o]||r.target,i!==e){vo(r,"currentTarget",{configurable:!0,get(){return i||t}});var f=at,m=He;fr(null),Nr(null);try{for(var v,_=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+n];w!=null&&(!i.disabled||r.target===i)&&w.call(i,r)}catch(k){v?_.push(k):v=k}if(r.cancelBubble||g===e||g===null)break;i=g}if(v){for(let k of _)queueMicrotask(()=>{throw k});throw v}}finally{r.__root=e,delete r.currentTarget,fr(f),Nr(m)}}}function Zp(r){var e=document.createElement("template");return e.innerHTML=r.replaceAll("<!>","<!---->"),e.content}function $n(r,e){var t=He;t.nodes_start===null&&(t.nodes_start=r,t.nodes_end=e)}function R(r,e){var t=(e&N1)!==0,n=(e&L1)!==0,s,i=!r.startsWith("<!>");return()=>{if(Le)return $n(ut,null),ut;s===void 0&&(s=Zp(i?r:"<!>"+r),t||(s=nn(s)));var o=n||Rp?document.importNode(s,!0):s.cloneNode(!0);if(t){var a=nn(o),l=o.lastChild;$n(a,l)}else $n(o,o);return o}}function b0(r,e,t="svg"){var n=!r.startsWith("<!>"),s=`<${t}>${n?r:"<!>"+r}</${t}>`,i;return()=>{if(Le)return $n(ut,null),ut;if(!i){var o=Zp(s),a=nn(o);i=nn(a)}var l=i.cloneNode(!0);return $n(l,l),l}}function w0(r,e){return b0(r,e,"svg")}function ye(){if(Le)return $n(ut,null),ut;var r=document.createDocumentFragment(),e=document.createComment(""),t=Wr();return r.append(e,t),$n(e,t),r}function y(r,e){if(Le){He.nodes_end=ut,zn();return}r!==null&&r.before(e)}function b(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??=r.nodeValue)&&(r.__t=t,r.nodeValue=t+"")}function Cd(r,e){return ev(r,e)}function y0(r,e){Cc(),e.intro=e.intro??!1;const t=e.target,n=Le,s=ut;try{for(var i=nn(t);i&&(i.nodeType!==Ci||i.data!==mp);)i=_n(i);if(!i)throw fi;wr(!0),dr(i);const o=ev(r,{...e,anchor:i});return wr(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==fi&&console.warn("Failed to hydrate: ",o),e.recover===!1&&w1(),Cc(),kd(t),wr(!1),Cd(r,e)}finally{wr(n),dr(s)}}const Js=new Map;function ev(r,{target:e,anchor:t,props:n={},events:s,context:i,intro:o=!0}){Cc();var a=new Set,l=m=>{for(var v=0;v<m.length;v++){var _=m[v];if(!a.has(_)){a.add(_);var g=m0(_);e.addEventListener(_,Gi,{passive:g});var w=Js.get(_);w===void 0?(document.addEventListener(_,Gi,{passive:g}),Js.set(_,1)):Js.set(_,w+1)}}};l(fd(Jp)),Sc.add(l);var u=void 0,f=r0(()=>{var m=t??e.appendChild(Wr());return H1(m,{pending:()=>{}},v=>{if(i){gt({});var _=Ht;_.c=i}if(s&&(n.$$events=s),Le&&$n(v,null),u=r(v,n)||{},Le&&(He.nodes_end=ut,ut===null||ut.nodeType!==Ci||ut.data!==wd))throw tl(),fi;i&&_t()}),()=>{for(var v of a){e.removeEventListener(v,Gi);var _=Js.get(v);--_===0?(document.removeEventListener(v,Gi),Js.delete(v)):Js.set(v,_)}Sc.delete(l),m!==t&&m.parentNode?.removeChild(m)}});return Ac.set(u,f),u}let Ac=new WeakMap;function x0(r,e){const t=Ac.get(r);return t?(Ac.delete(r),t(e)):Promise.resolve()}class qo{anchor;#t=new Map;#e=new Map;#n=new Map;#s=!0;constructor(e,t=!0){this.anchor=e,this.#s=t}#l=()=>{var e=St;if(this.#t.has(e)){var t=this.#t.get(e),n=this.#e.get(t);if(n)Id(n);else{var s=this.#n.get(t);s&&(this.#e.set(t,s.effect),this.#n.delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[i,o]of this.#t){if(this.#t.delete(i),i===e)break;const a=this.#n.get(o);a&&(tr(a.effect),this.#n.delete(o))}for(const[i,o]of this.#e){if(i===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(i)){var u=document.createDocumentFragment();Vp(o,u),u.append(Wr()),this.#n.set(i,{effect:o,fragment:u})}else tr(o);this.#e.delete(i)};this.#s||!n?oi(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[n,s]of this.#n)t.includes(n)||(tr(s.effect),this.#n.delete(n))};ensure(e,t){var n=St,s=$p();if(t&&!this.#e.has(e)&&!this.#n.has(e))if(s){var i=document.createDocumentFragment(),o=Wr();i.append(o),this.#n.set(e,{effect:Tr(()=>t(o)),fragment:i})}else this.#e.set(e,Tr(()=>t(this.anchor)));if(this.#t.set(n,e),s){for(const[a,l]of this.#e)a===e?n.skipped_effects.delete(l):n.skipped_effects.add(l);for(const[a,l]of this.#n)a===e?n.skipped_effects.delete(l.effect):n.skipped_effects.add(l.effect);n.oncommit(this.#l),n.ondiscard(this.#o)}else Le&&(this.anchor=ut),this.#l()}}function j(r,e,t=!1){Le&&zn();var n=new qo(r),s=t?Mn:0;function i(o,a){if(Le){const u=gp(r)===el;if(o===u){var l=ba();dr(l),n.anchor=l,wr(!1),n.ensure(o,a),wr(!0);return}}n.ensure(o,a)}Kn(()=>{var o=!1;e((a,l=!0)=>{o=!0,i(l,a)}),o||i(!1,null)},s)}function k0(r,e,t){Le&&zn();var n=new qo(r),s=!Si();Kn(()=>{var i=e();s&&i!==null&&typeof i=="object"&&(i={}),n.ensure(i,t)})}function Tn(r,e){return e}function E0(r,e,t){for(var n=r.items,s=[],i=e.length,o=0;o<i;o++)Ed(e[o].e,s,!0);var a=i>0&&s.length===0&&t!==null;if(a){var l=t.parentNode;kd(l),l.append(t),n.clear(),ln(r,e[0].prev,e[i-1].next)}jp(s,()=>{for(var u=0;u<i;u++){var f=e[u];a||(n.delete(f.k),ln(r,f.prev,f.next)),tr(f.e,!a)}})}function Qt(r,e,t,n,s,i=null){var o=r,a={flags:e,items:new Map,first:null},l=(e&pp)!==0;if(l){var u=r;o=Le?dr(nn(u)):u.appendChild(Wr())}Le&&zn();var f=null,m=!1,v=new Map,_=nl(()=>{var I=t();return hd(I)?I:I==null?[]:fd(I)}),g,w;function k(){I0(w,g,a,v,o,s,e,n,t),i!==null&&(g.length===0?f?Id(f):f=Tr(()=>i(o)):f!==null&&oi(f,()=>{f=null}))}Kn(()=>{w??=He,g=p(_);var I=g.length;if(m&&I===0)return;m=I===0;let P=!1;if(Le){var L=gp(o)===el;L!==(I===0)&&(o=ba(),dr(o),wr(!1),P=!0)}if(Le){for(var N=null,M,S=0;S<I;S++){if(ut.nodeType===Ci&&ut.data===wd){o=ut,P=!0,wr(!1);break}var A=g[S],C=n(A,S);M=Pc(ut,a,N,null,A,C,S,s,e,t),a.items.set(C,M),N=M}I>0&&dr(ba())}if(Le)I===0&&i&&(f=Tr(()=>i(o)));else if($p()){var E=new Set,T=St;for(S=0;S<I;S+=1){A=g[S],C=n(A,S);var q=a.items.get(C)??v.get(C);q?(e&(Xa|Za))!==0&&tv(q,A,S,e):(M=Pc(null,a,null,null,A,C,S,s,e,t,!0),v.set(C,M)),E.add(C)}for(const[O,V]of a.items)E.has(O)||T.skipped_effects.add(V.e);T.oncommit(k)}else k();P&&wr(!0),p(_)}),Le&&(o=ut)}function I0(r,e,t,n,s,i,o,a,l){var u=(o&C1)!==0,f=(o&(Xa|Za))!==0,m=e.length,v=t.items,_=t.first,g=_,w,k=null,I,P=[],L=[],N,M,S,A;if(u)for(A=0;A<m;A+=1)N=e[A],M=a(N,A),S=v.get(M),S!==void 0&&(S.a?.measure(),(I??=new Set).add(S));for(A=0;A<m;A+=1){if(N=e[A],M=a(N,A),S=v.get(M),S===void 0){var C=n.get(M);if(C!==void 0){n.delete(M),v.set(M,C);var E=k?k.next:g;ln(t,k,C),ln(t,C,E),Yl(C,E,s),k=C}else{var T=g?g.e.nodes_start:s;k=Pc(T,t,k,k===null?t.first:k.next,N,M,A,i,o,l)}v.set(M,k),P=[],L=[],g=k.next;continue}if(f&&tv(S,N,A,o),(S.e.f&zr)!==0&&(Id(S.e),u&&(S.a?.unfix(),(I??=new Set).delete(S))),S!==g){if(w!==void 0&&w.has(S)){if(P.length<L.length){var q=L[0],O;k=q.prev;var V=P[0],Q=P[P.length-1];for(O=0;O<P.length;O+=1)Yl(P[O],q,s);for(O=0;O<L.length;O+=1)w.delete(L[O]);ln(t,V.prev,Q.next),ln(t,k,V),ln(t,Q,q),g=q,k=Q,A-=1,P=[],L=[]}else w.delete(S),Yl(S,g,s),ln(t,S.prev,S.next),ln(t,S,k===null?t.first:k.next),ln(t,k,S),k=S;continue}for(P=[],L=[];g!==null&&g.k!==M;)(g.e.f&zr)===0&&(w??=new Set).add(g),L.push(g),g=g.next;if(g===null)continue;S=g}P.push(S),k=S,g=S.next}if(g!==null||w!==void 0){for(var W=w===void 0?[]:fd(w);g!==null;)(g.e.f&zr)===0&&W.push(g),g=g.next;var le=W.length;if(le>0){var ue=(o&pp)!==0&&m===0?s:null;if(u){for(A=0;A<le;A+=1)W[A].a?.measure();for(A=0;A<le;A+=1)W[A].a?.fix()}E0(t,W,ue)}}u&&ws(()=>{if(I!==void 0)for(S of I)S.a?.apply()}),r.first=t.first&&t.first.e,r.last=k&&k.e;for(var se of n.values())tr(se.e);n.clear()}function tv(r,e,t,n){(n&Xa)!==0&&mi(r.v,e),(n&Za)!==0?mi(r.i,t):r.i=t}function Pc(r,e,t,n,s,i,o,a,l,u,f){var m=(l&Xa)!==0,v=(l&T1)===0,_=m?v?xd(s,!1,!1):hs(s):s,g=(l&Za)===0?o:hs(o),w={i:g,v:_,k:i,a:null,e:null,prev:t,next:n};try{if(r===null){var k=document.createDocumentFragment();k.append(r=Wr())}return w.e=Tr(()=>a(r,_,g,u),Le),w.e.prev=t&&t.e,w.e.next=n&&n.e,t===null?f||(e.first=w):(t.next=w,t.e.next=w.e),n!==null&&(n.prev=w,n.e.prev=w.e),w}finally{}}function Yl(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=r.e.nodes_start;i!==null&&i!==n;){var o=_n(i);s.before(i),i=o}}function ln(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function bt(r,e,t,n,s){Le&&zn();var i=e.$$slots?.[t],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(r,o?()=>n:n)}function Xs(r,e,...t){var n=new qo(r);Kn(()=>{const s=e()??null;n.ensure(s,s&&(i=>s(i,...t)))},Mn)}function C0(r,e,t){Le&&zn();var n=new qo(r);Kn(()=>{var s=e()??null;n.ensure(s,s&&(i=>t(i,s)))},Mn)}function T0(r,e,t,n,s,i){let o=Le;Le&&zn();var a=null;Le&&ut.nodeType===p1&&(a=ut,zn());var l=Le?ut:r,u=new qo(l,!1);Kn(()=>{const f=e()||null;var m=D1;if(f===null){u.ensure(null,null);return}return u.ensure(f,v=>{if(f){if(a=Le?a:document.createElementNS(m,f),$n(a,a),n){Le&&_0(f)&&a.append(document.createComment(""));var _=Le?nn(a):a.appendChild(Wr());Le&&(_===null?wr(!1):dr(_)),n(a,_)}He.nodes_end=a,v.before(a)}Le&&dr(v)}),()=>{}},Mn),$o(()=>{}),o&&(wr(!0),dr(l))}function vt(r,e){Ai(()=>{var t=r.getRootNode(),n=t.host?t:t.head??t.ownerDocument.head;if(!n.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,n.appendChild(s)}})}function xa(r,e,t){Ai(()=>{var n=sn(()=>e(r,t?.())||{});if(n?.destroy)return()=>n.destroy()})}function S0(r,e){var t=void 0,n;Kn(()=>{t!==(t=e())&&(n&&(tr(n),n=null),t&&(n=Tr(()=>{Ai(()=>t(r))})))})}function rv(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(t=rv(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function A0(){for(var r,e,t=0,n="",s=arguments.length;t<s;t++)(r=arguments[t])&&(e=rv(r))&&(n&&(n+=" "),n+=e);return n}function P0(r){return typeof r=="object"?A0(r):r??""}const Nh=[...` 	
\r\f \v\uFEFF`];function R0(r,e,t){var n=r==null?"":""+r;if(e&&(n=n?n+" "+e:e),t){for(var s in t)if(t[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var a=o+i;(o===0||Nh.includes(n[o-1]))&&(a===n.length||Nh.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function Lh(r,e=!1){var t=e?" !important;":";",n="";for(var s in r){var i=r[s];i!=null&&i!==""&&(n+=" "+s+": "+i+t)}return n}function Ql(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function N0(r,e){if(e){var t="",n,s;if(Array.isArray(e)?(n=e[0],s=e[1]):n=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,a=!1,l=[];n&&l.push(...Object.keys(n).map(Ql)),s&&l.push(...Object.keys(s).map(Ql));var u=0,f=-1;const w=r.length;for(var m=0;m<w;m++){var v=r[m];if(a?v==="/"&&r[m-1]==="*"&&(a=!1):i?i===v&&(i=!1):v==="/"&&r[m+1]==="*"?a=!0:v==='"'||v==="'"?i=v:v==="("?o++:v===")"&&o--,!a&&i===!1&&o===0){if(v===":"&&f===-1)f=m;else if(v===";"||m===w-1){if(f!==-1){var _=Ql(r.substring(u,f).trim());if(!l.includes(_)){v!==";"&&m++;var g=r.substring(u,m).trim();t+=" "+g+";"}}u=m+1,f=-1}}}}return n&&(t+=Lh(n)),s&&(t+=Lh(s,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function cr(r,e,t,n,s,i){var o=r.__className;if(Le||o!==t||o===void 0){var a=R0(t,n,i);(!Le||a!==r.getAttribute("class"))&&(a==null?r.removeAttribute("class"):e?r.className=a:r.setAttribute("class",a)),r.__className=t}else if(i&&s!==i)for(var l in i){var u=!!i[l];(s==null||u!==!!s[l])&&r.classList.toggle(l,u)}return i}function Jl(r,e={},t,n){for(var s in t){var i=t[s];e[s]!==i&&(t[s]==null?r.style.removeProperty(s):r.style.setProperty(s,i,n))}}function ol(r,e,t,n){var s=r.__style;if(Le||s!==e){var i=N0(e,n);(!Le||i!==r.getAttribute("style"))&&(i==null?r.removeAttribute("style"):r.style.cssText=i),r.__style=e}else n&&(Array.isArray(n)?(Jl(r,t?.[0],n[0]),Jl(r,t?.[1],n[1],"important")):Jl(r,t,n));return n}function wo(r,e,t=!1){if(r.multiple){if(e==null)return;if(!hd(e))return O1();for(var n of r.options)n.selected=e.includes(ro(n));return}for(n of r.options){var s=ro(n);if(J1(s,e)){n.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function Td(r){var e=new MutationObserver(()=>{wo(r,r.__value)});e.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),$o(()=>{e.disconnect()})}function nv(r,e,t=e){var n=new WeakSet,s=!0;qp(r,"change",i=>{var o=i?"[selected]":":checked",a;if(r.multiple)a=[].map.call(r.querySelectorAll(o),ro);else{var l=r.querySelector(o)??r.querySelector("option:not([disabled])");a=l&&ro(l)}t(a),St!==null&&n.add(St)}),Ai(()=>{var i=e();if(r===document.activeElement){var o=Zi??St;if(n.has(o))return}if(wo(r,i,s),s&&i===void 0){var a=r.querySelector(":checked");a!==null&&(i=ro(a),t(i))}r.__value=i,s=!1}),Td(r)}function ro(r){return"__value"in r?r.__value:r.value}const zi=Symbol("class"),Ui=Symbol("style"),sv=Symbol("is custom element"),iv=Symbol("is html");function fs(r){if(Le){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var n=r.value;ke(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var s=r.checked;ke(r,"checked",null),r.checked=s}}};r.__on_r=t,ws(t),Dp()}}function L0(r,e){var t=al(r);t.value===(t.value=e??void 0)||r.value===e&&(e!==0||r.nodeName!=="PROGRESS")||(r.value=e??"")}function $0(r,e){var t=al(r);t.checked!==(t.checked=e??void 0)&&(r.checked=e)}function D0(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function ke(r,e,t,n){var s=al(r);Le&&(s[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(r[f1]=t),t==null?r.removeAttribute(e):typeof t!="string"&&Sd(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function ot(r,e,t){var n=at,s=He;let i=Le;Le&&wr(!1),fr(null),Nr(null);try{e!=="style"&&(Rc.has(r.getAttribute("is")||r.nodeName)||!customElements||customElements.get(r.getAttribute("is")||r.tagName.toLowerCase())?Sd(r).includes(e):t&&typeof t=="object")?r[e]=t:ke(r,e,t==null?t:String(t))}finally{fr(n),Nr(s),i&&wr(!0)}}function q0(r,e,t,n,s=!1,i=!1){if(Le&&s&&r.tagName==="INPUT"){var o=r,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in t||fs(o)}var l=al(r),u=l[sv],f=!l[iv];let m=Le&&u;m&&wr(!1);var v=e||{},_=r.tagName==="OPTION";for(var g in e)g in t||(t[g]=null);t.class?t.class=P0(t.class):t[zi]&&(t.class=null),t[Ui]&&(t.style??=null);var w=Sd(r);for(const A in t){let C=t[A];if(_&&A==="value"&&C==null){r.value=r.__value="",v[A]=C;continue}if(A==="class"){var k=r.namespaceURI==="http://www.w3.org/1999/xhtml";cr(r,k,C,n,e?.[zi],t[zi]),v[A]=C,v[zi]=t[zi];continue}if(A==="style"){ol(r,C,e?.[Ui],t[Ui]),v[A]=C,v[Ui]=t[Ui];continue}var I=v[A];if(!(C===I&&!(C===void 0&&r.hasAttribute(A)))){v[A]=C;var P=A[0]+A[1];if(P!=="$$")if(P==="on"){const E={},T="$$"+A;let q=A.slice(2);var L=h0(q);if(d0(q)&&(q=q.slice(0,-7),E.capture=!0),!L&&I){if(C!=null)continue;r.removeEventListener(q,v[T],E),v[T]=null}if(C!=null)if(L)r[`__${q}`]=C,Rt([q]);else{let O=function(V){v[A].call(this,V)};var S=O;v[T]=Xp(q,r,O,E)}else L&&(r[`__${q}`]=void 0)}else if(A==="style")ke(r,A,C);else if(A==="autofocus")mo(r,!!C);else if(!u&&(A==="__value"||A==="value"&&C!=null))r.value=r.__value=C;else if(A==="selected"&&_)D0(r,C);else{var N=A;f||(N=p0(N));var M=N==="defaultValue"||N==="defaultChecked";if(C==null&&!u&&!M)if(l[A]=null,N==="value"||N==="checked"){let E=r;const T=e===void 0;if(N==="value"){let q=E.defaultValue;E.removeAttribute(N),E.defaultValue=q,E.value=E.__value=T?q:null}else{let q=E.defaultChecked;E.removeAttribute(N),E.defaultChecked=q,E.checked=T?q:!1}}else r.removeAttribute(A);else M||w.includes(N)&&(u||typeof C!="string")?(r[N]=C,N in l&&(l[N]=ar)):typeof C!="function"&&ke(r,N,C)}}}return m&&wr(!0),v}function $h(r,e,t=[],n=[],s=[],i,o=!1,a=!1){Cp(s,t,n,l=>{var u=void 0,f={},m=r.nodeName==="SELECT",v=!1;if(Kn(()=>{var g=e(...l.map(p)),w=q0(r,u,g,i,o,a);v&&m&&"value"in g&&wo(r,g.value);for(let I of Object.getOwnPropertySymbols(f))g[I]||tr(f[I]);for(let I of Object.getOwnPropertySymbols(g)){var k=g[I];I.description===q1&&(!u||k!==u[I])&&(f[I]&&tr(f[I]),f[I]=Tr(()=>S0(r,()=>k))),w[I]=k}u=w}),m){var _=r;Ai(()=>{wo(_,u.value,!0),Td(_)})}v=!0})}function al(r){return r.__attributes??={[sv]:r.nodeName.includes("-"),[iv]:r.namespaceURI===$1}}var Rc=new Map;function Sd(r){var e=r.getAttribute("is")||r.nodeName,t=Rc.get(e);if(t)return t;Rc.set(e,t=[]);for(var n,s=r,i=Element.prototype;i!==s;){n=dp(s);for(var o in n)n[o].set&&t.push(o);s=pd(s)}return t}function tn(r,e,t=e){var n=new WeakSet;qp(r,"input",async s=>{var i=s?r.defaultValue:r.value;if(i=Xl(r)?Zl(i):i,t(i),St!==null&&n.add(St),await l0(),i!==(i=e())){var o=r.selectionStart,a=r.selectionEnd,l=r.value.length;if(r.value=i??"",a!==null){var u=r.value.length;o===a&&a===l&&u>l?(r.selectionStart=u,r.selectionEnd=u):(r.selectionStart=o,r.selectionEnd=Math.min(a,u))}}}),(Le&&r.defaultValue!==r.value||sn(e)==null&&r.value)&&(t(Xl(r)?Zl(r.value):r.value),St!==null&&n.add(St)),il(()=>{var s=e();if(r===document.activeElement){var i=Zi??St;if(n.has(i))return}Xl(r)&&s===Zl(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}function Xl(r){var e=r.type;return e==="number"||e==="range"}function Zl(r){return r===""?null:+r}function Dh(r,e){return r===e||r?.[hn]===e}function Oo(r={},e,t,n){return Ai(()=>{var s,i;return il(()=>{s=i,i=[],sn(()=>{r!==t(...i)&&(e(r,...i),s&&Dh(t(...s),r)&&e(null,...s))})}),()=>{ws(()=>{i&&Dh(t(...i),r)&&e(null,...i)})}}),r}function Er(r=!1){const e=Ht,t=e.l.u;if(!t)return;let n=()=>ri(e.s);if(r){let s=0,i={};const o=Lo(()=>{let a=!1;const l=e.s;for(const u in l)l[u]!==i[u]&&(i[u]=l[u],a=!0);return a&&s++,s});n=()=>p(o)}t.b.length&&e0(()=>{qh(e,n),ma(t.b)}),$s(()=>{const s=sn(()=>t.m.map(d1));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&$s(()=>{qh(e,n),ma(t.a)})}function qh(r,e){if(r.l.s)for(const t of r.l.s)p(t);e()}function Ad(r,e,t){if(r==null)return e(void 0),t&&t(void 0),Mr;const n=sn(()=>r.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const Zs=[];function O0(r,e){return{subscribe:Vs(r,e).subscribe}}function Vs(r,e=Mr){let t=null;const n=new Set;function s(a){if(bp(r,a)&&(r=a,t)){const l=!Zs.length;for(const u of n)u[1](),Zs.push(u,r);if(l){for(let u=0;u<Zs.length;u+=2)Zs[u][0](Zs[u+1]);Zs.length=0}}}function i(a){s(a(r))}function o(a,l=Mr){const u=[a,l];return n.add(u),n.size===1&&(t=e(s,i)||Mr),a(r),()=>{n.delete(u),n.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function M0(r,e,t){const n=!Array.isArray(r),s=n?[r]:r;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return O0(t,(o,a)=>{let l=!1;const u=[];let f=0,m=Mr;const v=()=>{if(f)return;m();const g=e(n?u[0]:u,o,a);i?o(g):m=typeof g=="function"?g:Mr},_=s.map((g,w)=>Ad(g,k=>{u[w]=k,f&=~(1<<w),l&&v()},()=>{f|=1<<w}));return l=!0,v(),function(){ma(_),m(),l=!1}})}function z0(r){let e;return Ad(r,t=>e=t)(),e}let ea=!1,Nc=Symbol();function pt(r,e,t){const n=t[e]??={store:null,source:xd(void 0),unsubscribe:Mr};if(n.store!==r&&!(Nc in t))if(n.unsubscribe(),n.store=r??null,r==null)n.source.v=void 0,n.unsubscribe=Mr;else{var s=!0;n.unsubscribe=Ad(r,i=>{s?n.source.v=i:x(n.source,i)}),s=!1}return r&&Nc in t?z0(r):p(n.source)}function Ot(){const r={};function e(){$o(()=>{for(var t in r)r[t].unsubscribe();vo(r,Nc,{enumerable:!1,value:!0})})}return[r,e]}function U0(r){var e=ea;try{return ea=!1,[r(),ea]}finally{ea=e}}const F0={get(r,e){if(!r.exclude.includes(e))return p(r.version),e in r.special?r.special[e]():r.props[e]},set(r,e,t){if(!(e in r.special)){var n=He;try{Nr(r.parent_effect),r.special[e]=Be({get[e](){return r.props[e]}},e,vp)}finally{Nr(n)}}return r.special[e](t),Ec(r.version),!0},getOwnPropertyDescriptor(r,e){if(!r.exclude.includes(e)&&e in r.props)return{enumerable:!0,configurable:!0,value:r.props[e]}},deleteProperty(r,e){return r.exclude.includes(e)||(r.exclude.push(e),Ec(r.version)),!0},has(r,e){return r.exclude.includes(e)?!1:e in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(e=>!r.exclude.includes(e))}};function mt(r,e){return new Proxy({props:r,exclude:e,special:{},version:hs(0),parent_effect:He},F0)}const j0={get(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(Mi(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(r,e,t){let n=r.props.length;for(;n--;){let s=r.props[n];Mi(s)&&(s=s());const i=Rn(s,e);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(Mi(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const s=Rn(n,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(r,e){if(e===hn||e===_d)return!1;for(let t of r.props)if(Mi(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(r){const e=[];for(let t of r.props)if(Mi(t)&&(t=t()),!!t){for(const n in t)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(t))e.includes(n)||e.push(n)}return e}};function Et(...r){return new Proxy({props:r},j0)}function Be(r,e,t,n){var s=!Ti||(t&A1)!==0,i=(t&P1)!==0,o=(t&R1)!==0,a=n,l=!0,u=()=>(l&&(l=!1,a=o?sn(n):n),a),f;if(i){var m=hn in r||_d in r;f=Rn(r,e)?.set??(m&&e in r?L=>r[e]=L:void 0)}var v,_=!1;i?[v,_]=U0(()=>r[e]):v=r[e],v===void 0&&n!==void 0&&(v=u(),f&&(s&&y1(),f(v)));var g;if(s?g=()=>{var L=r[e];return L===void 0?u():(l=!0,L)}:g=()=>{var L=r[e];return L!==void 0&&(a=void 0),L===void 0?a:L},s&&(t&vp)===0)return g;if(f){var w=r.$$legacy;return(function(L,N){return arguments.length>0?((!s||!N||w||_)&&f(N?g():L),L):g()})}var k=!1,I=((t&S1)!==0?Lo:nl)(()=>(k=!1,g()));i&&p(I);var P=He;return(function(L,N){if(arguments.length>0){const M=N?p(I):s&&i?or(L):L;return x(I,M),k=!0,a!==void 0&&(a=M),L}return Bs&&k||(P.f&Nn)!==0?I.v:p(I)})}function B0(r){return new V0(r)}class V0{#t;#e;constructor(e){var t=new Map,n=(i,o)=>{var a=xd(o,!1,!1);return t.set(i,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(i,o){return p(t.get(o)??n(o,Reflect.get(i,o)))},has(i,o){return o===_d?!0:(p(t.get(o)??n(o,Reflect.get(i,o))),Reflect.has(i,o))},set(i,o,a){return x(t.get(o)??n(o,a),a),Reflect.set(i,o,a)}});this.#e=(e.hydrate?y0:Cd)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&je(),this.#t=s.$$events;for(const i of Object.keys(this.#e))i==="$set"||i==="$destroy"||i==="$on"||vo(this,i,{get(){return this.#e[i]},set(o){this.#e[i]=o},enumerable:!0});this.#e.$set=i=>{Object.assign(s,i)},this.#e.$destroy=()=>{x0(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const n=(...s)=>t.call(this,...s);return this.#t[e].push(n),()=>{this.#t[e]=this.#t[e].filter(s=>s!==n)}}$destroy(){this.#e.$destroy()}}let ov;typeof HTMLElement=="function"&&(ov=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(r,e,t){super(),this.$$ctor=r,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(r,e,t){if(this.$$l[r]=this.$$l[r]||[],this.$$l[r].push(e),this.$$c){const n=this.$$c.$on(r,e);this.$$l_u.set(e,n)}super.addEventListener(r,e,t)}removeEventListener(r,e,t){if(super.removeEventListener(r,e,t),this.$$c){const n=this.$$l_u.get(e);n&&(n(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return i=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),y(i,o)}};var r=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},n=H0(this);for(const s of this.$$s)s in n&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),t.default=!0):t[s]=e(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=la(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=B0({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=t0(()=>{il(()=>{this.$$r=!0;for(const s of va(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const i=la(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const o=this.$$c.$on(s,i);this.$$l_u.set(i,o)}this.$$l={}}}attributeChangedCallback(r,e,t){this.$$r||(r=this.$$g_p(r),this.$$d[r]=la(r,t,this.$$p_d,"toProp"),this.$$c?.$set({[r]:this.$$d[r]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(r){return va(this.$$p_d).find(e=>this.$$p_d[e].attribute===r||!this.$$p_d[e].attribute&&e.toLowerCase()===r)||r}});function la(r,e,t,n){const s=t[r]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!t[r])return e;if(n==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function H0(r){const e={};return r.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function xe(r,e,t,n,s,i){let o=class extends ov{constructor(){super(r,t,s),this.$$p_d=e}static get observedAttributes(){return va(e).map(a=>(e[a].attribute||a).toLowerCase())}};return va(e).forEach(a=>{vo(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=la(a,l,e),this.$$d[a]=l;var u=this.$$c;if(u){var f=Rn(u,a)?.get;f?u[a]=l:u.$set({[a]:l})}}})}),n.forEach(a=>{vo(o.prototype,a,{get(){return this.$$c?.[a]}})}),r.element=o,o}function Jt(r){Ht===null&&fp(),Ti&&Ht.l!==null?W0(Ht).m.push(r):$s(()=>{const e=sn(r);if(typeof e=="function")return e})}function av(r){Ht===null&&fp(),Jt(()=>()=>sn(r))}function W0(r){var e=r.l;return e.u??={a:[],b:[],m:[]}}const G0="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(G0);const K0=()=>{};var Oh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=function(r,e){if(!r)throw Pi(e)},Pi=function(r){return new Error("Firebase Database ("+lv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Y0=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],a=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,a=o?r[s+1]:0,l=s+2<r.length,u=l?r[s+2]:0,f=i>>2,m=(i&3)<<4|a>>4;let v=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(v=64)),n.push(t[f],t[m],t[v],t[_])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(cv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Y0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],a=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const m=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||a==null||u==null||m==null)throw new Q0;const v=i<<2|a>>4;if(n.push(v),u!==64){const _=a<<4&240|u>>2;if(n.push(_),m!==64){const g=u<<6&192|m;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Q0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dv=function(r){const e=cv(r);return Pd.encodeByteArray(e,!0)},ka=function(r){return dv(r).replace(/\./g,"")},Ea=function(r){try{return Pd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(r){return uv(void 0,r)}function uv(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!X0(t)||(r[t]=uv(r[t],e[t]));return r}function X0(r){return r!=="__proto__"}/**
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
 */function Z0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ew=()=>Z0().__FIREBASE_DEFAULTS__,tw=()=>{if(typeof process>"u"||typeof Oh>"u")return;const r=Oh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},rw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ea(r[1]);return e&&JSON.parse(e)},Rd=()=>{try{return K0()||ew()||tw()||rw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},hv=r=>Rd()?.emulatorHosts?.[r],fv=r=>{const e=hv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},pv=()=>Rd()?.config,vv=r=>Rd()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function ys(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nd(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function mv(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[ka(JSON.stringify(t)),ka(JSON.stringify(o)),""].join(".")}const no={};function nw(){const r={prod:[],emulator:[]};for(const e of Object.keys(no))no[e]?r.emulator.push(e):r.prod.push(e);return r}function sw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Mh=!1;function Ld(r,e){if(typeof window>"u"||typeof document>"u"||!ys(window.location.host)||no[r]===e||no[r]||Mh)return;no[r]=e;function t(v){return`__firebase__banner__${v}`}const n="__firebase__banner",i=nw().prod.length>0;function o(){const v=document.getElementById(n);v&&v.remove()}function a(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,_){v.setAttribute("width","24"),v.setAttribute("id",_),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function u(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Mh=!0,o()},v}function f(v,_){v.setAttribute("id",_),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function m(){const v=sw(n),_=t("text"),g=document.getElementById(_)||document.createElement("span"),w=t("learnmore"),k=document.getElementById(w)||document.createElement("a"),I=t("preprendIcon"),P=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const L=v.element;a(L),f(k,w);const N=u();l(P,I),L.append(P,g,k,N),document.body.appendChild(L)}i?(g.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kr())}function iw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ow(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aw(){const r=kr();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function lw(){return lv.NODE_ADMIN===!0}function cw(){try{return typeof indexedDB=="object"}catch{return!1}}function dw(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="FirebaseError";class Yn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=uw,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hw(i,n):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Yn(s,a,n)}}function hw(r,e){return r.replace(fw,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const fw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(r){return JSON.parse(r)}function er(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=function(r){let e={},t={},n={},s="";try{const i=r.split(".");e=yo(Ea(i[0])||""),t=yo(Ea(i[1])||""),s=i[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:s}},pw=function(r){const e=_v(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},vw=function(r){const e=_v(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function gi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Lc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ia(r,e,t){const n={};for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=e.call(t,r[s],s,r));return n}function Ds(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(zh(i)&&zh(o)){if(!Ds(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function zh(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ki(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Yi(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)n[m]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let m=0;m<16;m++)n[m]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let m=16;m<80;m++){const v=n[m-3]^n[m-8]^n[m-14]^n[m-16];n[m]=(v<<1|v>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,f;for(let m=0;m<80;m++){m<40?m<20?(u=a^i&(o^a),f=1518500249):(u=i^o^a,f=1859775393):m<60?(u=i&o|a&(i|o),f=2400959708):(u=i^o^a,f=3395469782);const v=(s<<5|s>>>27)+u+l+f+n[m]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=v}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=n;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[s]>>i&255,++n;return e}}function gw(r,e){const t=new _w(r,e);return t.subscribe.bind(t)}class _w{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");bw(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ec),s.error===void 0&&(s.error=ec),s.complete===void 0&&(s.complete=ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ec(){}function ll(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s>=55296&&s<=56319){const i=s-55296;n++,te(n<r.length,"Surrogate pair missing trail surrogate.");const o=r.charCodeAt(n)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},cl=function(r){let e=0;for(let t=0;t<r.length;t++){const n=r.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Mt(r){return r&&r._delegate?r._delegate:r}class ps{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Mo;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kw(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:xw(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xw(r){return r===Es?void 0:r}function kw(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(At||(At={}));const Iw={debug:At.DEBUG,verbose:At.VERBOSE,info:At.INFO,warn:At.WARN,error:At.ERROR,silent:At.SILENT},Cw=At.INFO,Tw={[At.DEBUG]:"log",[At.VERBOSE]:"log",[At.INFO]:"info",[At.WARN]:"warn",[At.ERROR]:"error"},Sw=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Tw[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dd{constructor(e){this.name=e,this._logLevel=Cw,this._logHandler=Sw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in At))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Iw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,At.DEBUG,...e),this._logHandler(this,At.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,At.VERBOSE,...e),this._logHandler(this,At.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,At.INFO,...e),this._logHandler(this,At.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,At.WARN,...e),this._logHandler(this,At.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,At.ERROR,...e),this._logHandler(this,At.ERROR,...e)}}const Aw=(r,e)=>e.some(t=>r instanceof t);let Uh,Fh;function Pw(){return Uh||(Uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rw(){return Fh||(Fh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bv=new WeakMap,$c=new WeakMap,wv=new WeakMap,tc=new WeakMap,qd=new WeakMap;function Nw(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(as(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&bv.set(t,r)}).catch(()=>{}),qd.set(e,r),e}function Lw(r){if($c.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});$c.set(r,e)}let Dc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return $c.get(r);if(e==="objectStoreNames")return r.objectStoreNames||wv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return as(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function $w(r){Dc=r(Dc)}function Dw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(rc(this),e,...t);return wv.set(n,e.sort?e.sort():[e]),as(n)}:Rw().includes(r)?function(...e){return r.apply(rc(this),e),as(bv.get(this))}:function(...e){return as(r.apply(rc(this),e))}}function qw(r){return typeof r=="function"?Dw(r):(r instanceof IDBTransaction&&Lw(r),Aw(r,Pw())?new Proxy(r,Dc):r)}function as(r){if(r instanceof IDBRequest)return Nw(r);if(tc.has(r))return tc.get(r);const e=qw(r);return e!==r&&(tc.set(r,e),qd.set(e,r)),e}const rc=r=>qd.get(r);function Ow(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),a=as(o);return n&&o.addEventListener("upgradeneeded",l=>{n(as(o.result),l.oldVersion,l.newVersion,as(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Mw=["get","getKey","getAll","getAllKeys","count"],zw=["put","add","delete","clear"],nc=new Map;function jh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(nc.get(e))return nc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=zw.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Mw.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return nc.set(e,i),i}$w(r=>({...r,get:(e,t,n)=>jh(e,t)||r.get(e,t,n),has:(e,t)=>!!jh(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fw(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Fw(r){return r.getComponent()?.type==="VERSION"}const qc="@firebase/app",Bh="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Dd("@firebase/app"),jw="@firebase/app-compat",Bw="@firebase/analytics-compat",Vw="@firebase/analytics",Hw="@firebase/app-check-compat",Ww="@firebase/app-check",Gw="@firebase/auth",Kw="@firebase/auth-compat",Yw="@firebase/database",Qw="@firebase/data-connect",Jw="@firebase/database-compat",Xw="@firebase/functions",Zw="@firebase/functions-compat",ey="@firebase/installations",ty="@firebase/installations-compat",ry="@firebase/messaging",ny="@firebase/messaging-compat",sy="@firebase/performance",iy="@firebase/performance-compat",oy="@firebase/remote-config",ay="@firebase/remote-config-compat",ly="@firebase/storage",cy="@firebase/storage-compat",dy="@firebase/firestore",uy="@firebase/ai",hy="@firebase/firestore-compat",fy="firebase",py="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="[DEFAULT]",vy={[qc]:"fire-core",[jw]:"fire-core-compat",[Vw]:"fire-analytics",[Bw]:"fire-analytics-compat",[Ww]:"fire-app-check",[Hw]:"fire-app-check-compat",[Gw]:"fire-auth",[Kw]:"fire-auth-compat",[Yw]:"fire-rtdb",[Qw]:"fire-data-connect",[Jw]:"fire-rtdb-compat",[Xw]:"fire-fn",[Zw]:"fire-fn-compat",[ey]:"fire-iid",[ty]:"fire-iid-compat",[ry]:"fire-fcm",[ny]:"fire-fcm-compat",[sy]:"fire-perf",[iy]:"fire-perf-compat",[oy]:"fire-rc",[ay]:"fire-rc-compat",[ly]:"fire-gcs",[cy]:"fire-gcs-compat",[dy]:"fire-fst",[hy]:"fire-fst-compat",[uy]:"fire-vertex","fire-js":"fire-js",[fy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Map,my=new Map,Mc=new Map;function Vh(r,e){try{r.container.addComponent(e)}catch(t){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function qs(r){const e=r.name;if(Mc.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,r);for(const t of Ca.values())Vh(t,r);for(const t of my.values())Vh(t,r);return!0}function dl(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Sr(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ls=new zo("app","Firebase",gy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=py;function yv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Oc,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw ls.create("bad-app-name",{appName:String(s)});if(t||(t=pv()),!t)throw ls.create("no-options");const i=Ca.get(s);if(i){if(Ds(t,i.options)&&Ds(n,i.config))return i;throw ls.create("duplicate-app",{appName:s})}const o=new Ew(s);for(const l of Mc.values())o.addComponent(l);const a=new _y(t,n,o);return Ca.set(s,a),a}function Od(r=Oc){const e=Ca.get(r);if(!e&&r===Oc&&pv())return yv();if(!e)throw ls.create("no-app",{appName:r});return e}function fn(r,e,t){let n=vy[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(o.join(" "));return}qs(new ps(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const by="firebase-heartbeat-database",wy=1,xo="firebase-heartbeat-store";let sc=null;function xv(){return sc||(sc=Ow(by,wy,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(xo)}catch(t){console.warn(t)}}}}).catch(r=>{throw ls.create("idb-open",{originalErrorMessage:r.message})})),sc}async function yy(r){try{const t=(await xv()).transaction(xo),n=await t.objectStore(xo).get(kv(r));return await t.done,n}catch(e){if(e instanceof Yn)Fn.warn(e.message);else{const t=ls.create("idb-get",{originalErrorMessage:e?.message});Fn.warn(t.message)}}}async function Hh(r,e){try{const n=(await xv()).transaction(xo,"readwrite");await n.objectStore(xo).put(e,kv(r)),await n.done}catch(t){if(t instanceof Yn)Fn.warn(t.message);else{const n=ls.create("idb-set",{originalErrorMessage:t?.message});Fn.warn(n.message)}}}function kv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const xy=1024,ky=30;class Ey{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cy(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Wh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>ky){const s=Ty(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Fn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wh(),{heartbeatsToSend:t,unsentEntries:n}=Iy(this._heartbeatsCache.heartbeats),s=ka(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Fn.warn(e),""}}}function Wh(){return new Date().toISOString().substring(0,10)}function Iy(r,e=xy){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Gh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Cy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cw()?dw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yy(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Hh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Hh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Gh(r){return ka(JSON.stringify({version:2,heartbeats:r})).length}function Ty(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(r){qs(new ps("platform-logger",e=>new Uw(e),"PRIVATE")),qs(new ps("heartbeat",e=>new Ey(e),"PRIVATE")),fn(qc,Bh,r),fn(qc,Bh,"esm2020"),fn("fire-js","")}Sy("");var Ay="firebase",Py="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(Ay,Py,"app");function Ev(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ry=Ev,Iv=new zo("auth","Firebase",Ev());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Dd("@firebase/auth");function Ny(r,...e){Ta.logLevel<=At.WARN&&Ta.warn(`Auth (${Ws}): ${r}`,...e)}function ca(r,...e){Ta.logLevel<=At.ERROR&&Ta.error(`Auth (${Ws}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(r,...e){throw Md(r,...e)}function Ur(r,...e){return Md(r,...e)}function Cv(r,e,t){const n={...Ry(),[e]:t};return new zo("auth","Firebase",n).create(e,{appName:r.name})}function pn(r){return Cv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Md(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Iv.create(r,...e)}function be(r,e,...t){if(!r)throw Md(e,...t)}function Sn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ca(e),new Error(e)}function jn(r,e){r||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){return typeof self<"u"&&self.location?.href||""}function Tv(){return Kh()==="http:"||Kh()==="https:"}function Kh(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tv()||ow()||"connection"in navigator)?navigator.onLine:!0}function $y(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t){this.shortDelay=e,this.longDelay=t,jn(t>e,"Short delay should be less than long delay!"),this.isMobile=$d()||gv()}get(){return Ly()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(r,e){jn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Oy=new Uo(3e4,6e4);function Lr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Fr(r,e,t,n,s={}){return Av(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=Hs({key:r.config.apiKey,...o}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const u={method:e,headers:l,...i};return iw()||(u.referrerPolicy="no-referrer"),r.emulatorConfig&&ys(r.emulatorConfig.host)&&(u.credentials="include"),Sv.fetch()(await Pv(r,r.config.apiHost,t,a),u)})}async function Av(r,e,t){r._canInitEmulator=!1;const n={...Dy,...e};try{const s=new zy(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qi(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qi(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qi(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qi(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cv(r,f,u);on(r,f)}}catch(s){if(s instanceof Yn)throw s;on(r,"network-request-failed",{message:String(s)})}}async function xs(r,e,t,n,s={}){const i=await Fr(r,e,t,n,s);return"mfaPendingCredential"in i&&on(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Pv(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?zd(r.config,s):`${r.config.apiScheme}://${s}`;return qy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function My(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ur(this.auth,"network-request-failed")),Oy.get())})}}function Qi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Ur(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(r){return r!==void 0&&r.getResponse!==void 0}function Qh(r){return r!==void 0&&r.enterprise!==void 0}class Rv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return My(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uy(r){return(await Fr(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Nv(r,e){return Fr(r,"GET","/v2/recaptchaConfig",Lr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(r,e){return Fr(r,"POST","/v1/accounts:delete",e)}async function Sa(r,e){return Fr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jy(r,e=!1){const t=Mt(r),n=await t.getIdToken(e),s=Ud(n);be(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:n,authTime:so(ic(s.auth_time)),issuedAtTime:so(ic(s.iat)),expirationTime:so(ic(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ic(r){return Number(r)*1e3}function Ud(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ea(t);return s?JSON.parse(s):(ca("Failed to decode base64 JWT payload"),null)}catch(s){return ca("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Jh(r){const e=Ud(r);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Yn&&By(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function By({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(r){const e=r.auth,t=await r.getIdToken(),n=await _i(r,Sa(e,{idToken:t}));be(n?.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=s.providerUserInfo?.length?Lv(s.providerUserInfo):[],o=Wy(r.providerData,i),a=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!o?.length,u=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Uc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,f)}async function Hy(r){const e=Mt(r);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wy(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Lv(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(r,e){const t=await Av(r,{},async()=>{const n=Hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await Pv(r,s,"/v1/token",`key=${i}`),a=await r._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return r.emulatorConfig&&ys(r.emulatorConfig.host)&&(l.credentials="include"),Sv.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ky(r,e){return Fr(r,"POST","/v2/accounts:revokeToken",Lr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=Jh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await Gy(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new li;return n&&(be(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(be(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(be(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(r,e){be(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Zr{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Vy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await _i(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jy(this,e)}reload(){return Hy(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Zr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Aa(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sr(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await _i(this,Fy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:v,isAnonymous:_,providerData:g,stsTokenManager:w}=t;be(m&&w,e,"internal-error");const k=li.fromJSON(this.name,w);be(typeof m=="string",e,"internal-error"),Jn(n,e.name),Jn(s,e.name),be(typeof v=="boolean",e,"internal-error"),be(typeof _=="boolean",e,"internal-error"),Jn(i,e.name),Jn(o,e.name),Jn(a,e.name),Jn(l,e.name),Jn(u,e.name),Jn(f,e.name);const I=new Zr({uid:m,auth:e,email:s,emailVerified:v,displayName:n,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:k,createdAt:u,lastLoginAt:f});return g&&Array.isArray(g)&&(I.providerData=g.map(P=>({...P}))),l&&(I._redirectEventId=l),I}static async _fromIdTokenResponse(e,t,n=!1){const s=new li;s.updateFromServerResponse(t);const i=new Zr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Aa(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];be(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new li;a.updateFromIdToken(n);const l=new Zr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Uc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new Map;function An(r){jn(r instanceof Function,"Expected a class definition");let e=Xh.get(r);return e?(jn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Xh.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$v.type="NONE";const Zh=$v;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(r,e,t){return`firebase:${r}:${e}:${t}`}class ci{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=da(this.userKey,s.apiKey,i),this.fullPersistenceKey=da("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Sa(this.auth,{idToken:e}).catch(()=>{});return t?Zr._fromGetAccountInfoResponse(this.auth,t,e):null}return Zr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ci(An(Zh),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||An(Zh);const o=da(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const f=await u._get(o);if(f){let m;if(typeof f=="string"){const v=await Sa(e,{idToken:f}).catch(()=>{});if(!v)break;m=await Zr._fromGetAccountInfoResponse(e,v,f)}else m=Zr._fromJSON(e,f);u!==i&&(a=m),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ci(i,e,n):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ci(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uv(e))return"Blackberry";if(Fv(e))return"Webos";if(qv(e))return"Safari";if((e.includes("chrome/")||Ov(e))&&!e.includes("edge/"))return"Chrome";if(zv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function Dv(r=kr()){return/firefox\//i.test(r)}function qv(r=kr()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ov(r=kr()){return/crios\//i.test(r)}function Mv(r=kr()){return/iemobile/i.test(r)}function zv(r=kr()){return/android/i.test(r)}function Uv(r=kr()){return/blackberry/i.test(r)}function Fv(r=kr()){return/webos/i.test(r)}function Fd(r=kr()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Yy(r=kr()){return Fd(r)&&!!window.navigator?.standalone}function Qy(){return aw()&&document.documentMode===10}function jv(r=kr()){return Fd(r)||zv(r)||Fv(r)||Uv(r)||/windows phone/i.test(r)||Mv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(r,e=[]){let t;switch(r){case"Browser":t=ef(kr());break;case"Worker":t=`${ef(kr())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ws}/${n}`}/**
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
 */class Jy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function Xy(r,e={}){return Fr(r,"GET","/v2/passwordPolicy",Lr(r,e))}/**
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
 */const Zy=6;class e2{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Zy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new Jy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=An(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sa(this,{idToken:e}),n=await Zr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Sr(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(n=a.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$y()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sr(this.app))return Promise.reject(pn(this));const t=e?Mt(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sr(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sr(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xy(this),t=new e2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Ky(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&An(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[An(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Sr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ny(`Error while retrieving App Check token: ${e.error}`),e?.token}}function wn(r){return Mt(r)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=gw(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function r2(r){Fo=r}function jd(r){return Fo.loadJS(r)}function n2(){return Fo.recaptchaV2Script}function s2(){return Fo.recaptchaEnterpriseScript}function i2(){return Fo.gapiScript}function Vv(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=500,a2=6e4,ta=1e12;class l2{constructor(e){this.auth=e,this.counter=ta,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new u2(e,this.auth.name,t||{})),this.counter++,n}reset(e){const t=e||ta;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||ta;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||ta;return this._widgets.get(t)?.execute(),""}}class c2{constructor(){this.enterprise=new d2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class d2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class u2{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;be(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=h2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},a2)},o2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function h2(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const f2="recaptcha-enterprise",io="NO_RECAPTCHA";class Hv{constructor(e){this.type=f2,this.auth=wn(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Nv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Rv(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Qh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(io)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new c2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(a=>{if(!t&&Qh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=s2();l.length!==0&&(l+=a),jd(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Fi(r,e,t,n=!1,s=!1){const i=new Hv(r);let o;if(s)o=io;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function di(r,e,t,n,s){if(s==="EMAIL_PASSWORD_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Fi(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Fi(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(i)});else if(s==="PHONE_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Fi(r,e,t);return n(r,i).catch(async o=>{if(r._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const a=await Fi(r,e,t,!1,!0);return n(r,a)}return Promise.reject(o)})}else{const i=await Fi(r,e,t,!1,!0);return n(r,i)}else return Promise.reject(s+" provider is not supported.")}async function p2(r){const e=wn(r),t=await Nv(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Rv(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new Hv(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(r,e){const t=dl(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ds(i,e??{}))return s;on(s,"already-initialized")}return t.initialize({options:e})}function m2(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(An);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function g2(r,e,t){const n=wn(r);be(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Wv(e),{host:o,port:a}=_2(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){be(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),be(Ds(u,n.config.emulator)&&Ds(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,ys(o)?(Nd(`${i}//${o}${l}`),Ld("Auth",!0)):b2()}function Wv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function _2(r){const e=Wv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:rf(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:rf(o)}}}function rf(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function b2(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,t){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function w2(r,e){return Fr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y2(r,e){return xs(r,"POST","/v1/accounts:signInWithPassword",Lr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(r,e){return xs(r,"POST","/v1/accounts:signInWithEmailLink",Lr(r,e))}async function k2(r,e){return xs(r,"POST","/v1/accounts:signInWithEmailLink",Lr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends ul{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ko(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ko(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return di(e,t,"signInWithPassword",y2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return x2(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return di(e,n,"signUpPassword",w2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return k2(e,{idToken:t,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(r,e){return xs(r,"POST","/v1/accounts:signInWithIdp",Lr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="http://localhost";class Os extends ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):on("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new Os(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ui(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ui(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ui(e,t)}buildRequest(){const e={requestUri:E2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nf(r,e){return Fr(r,"POST","/v1/accounts:sendVerificationCode",Lr(r,e))}async function I2(r,e){return xs(r,"POST","/v1/accounts:signInWithPhoneNumber",Lr(r,e))}async function C2(r,e){const t=await xs(r,"POST","/v1/accounts:signInWithPhoneNumber",Lr(r,e));if(t.temporaryProof)throw Qi(r,"account-exists-with-different-credential",t);return t}const T2={USER_NOT_FOUND:"user-not-found"};async function S2(r,e){const t={...e,operation:"REAUTH"};return xs(r,"POST","/v1/accounts:signInWithPhoneNumber",Lr(r,t),T2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends ul{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new oo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new oo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return I2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return C2(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return S2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i}=e;return!n&&!t&&!s&&!i?null:new oo({verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function P2(r){const e=Ki(Yi(r)).link,t=e?Ki(Yi(e)).deep_link_id:null,n=Ki(Yi(r)).deep_link_id;return(n?Ki(Yi(n)).link:null)||n||t||e||r}class Bd{constructor(e){const t=Ki(Yi(e)),n=t.apiKey??null,s=t.oobCode??null,i=A2(t.mode??null);be(n&&s&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=P2(e);try{return new Bd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,t){return ko._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Bd.parseLink(t);return be(n,"argument-error"),ko._fromEmailAndCode(e,n.code,n.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends jo{constructor(){super("facebook.com")}static credential(e){return Os._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Os._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Zn.credential(t,n)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends jo{constructor(){super("github.com")}static credential(e){return Os._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.GITHUB_SIGN_IN_METHOD="github.com";es.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends jo{constructor(){super("twitter.com")}static credential(e,t){return Os._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ts.credential(t,n)}catch{return null}}}ts.TWITTER_SIGN_IN_METHOD="twitter.com";ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(r,e){return xs(r,"POST","/v1/accounts:signUp",Lr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Zr._fromIdTokenResponse(e,n,s),o=sf(n);return new Ms({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=sf(n);return new Ms({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function sf(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Yn{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Pa(e,t,n,s)}}function Kv(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(r,i,e,n):i})}async function N2(r,e,t=!1){const n=await _i(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ms._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(r,e,t=!1){const{auth:n}=r;if(Sr(n.app))return Promise.reject(pn(n));const s="reauthenticate";try{const i=await _i(r,Kv(n,s,e,r),t);be(i.idToken,n,"internal-error");const o=Ud(i.idToken);be(o,n,"internal-error");const{sub:a}=o;return be(r.uid===a,n,"user-mismatch"),Ms._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&on(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(r,e,t=!1){if(Sr(r.app))return Promise.reject(pn(r));const n="signIn",s=await Kv(r,n,e),i=await Ms._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function Qv(r,e){return Yv(wn(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(r){const e=wn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $2(r,e,t){if(Sr(r.app))return Promise.reject(pn(r));const n=wn(r),o=await di(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",R2,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jv(r),l}),a=await Ms._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(a.user),a}function D2(r,e,t){return Sr(r.app)?Promise.reject(pn(r)):Qv(Mt(r),Ri.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Jv(r),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q2(r,e){return Fr(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Mt(r),i={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await _i(n,q2(n.auth,i));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const a=n.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function O2(r,e,t,n){return Mt(r).onIdTokenChanged(e,t,n)}function M2(r,e,t){return Mt(r).beforeAuthStateChanged(e,t)}function Vd(r,e,t,n){return Mt(r).onAuthStateChanged(e,t,n)}function z2(r){return Mt(r).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(r,e){return Fr(r,"POST","/v2/accounts/mfaEnrollment:start",Lr(r,e))}const Ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=1e3,F2=10;class em extends Zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Qy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,F2):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},U2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}em.type="LOCAL";const j2=em;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends Zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tm.type="SESSION";const rm=tm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new hl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await B2(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Hd("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(m){const v=m;if(v.data.eventId===u)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(v.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function H2(r){Yt().location.href=r}/**
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
 */function Wd(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function W2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G2(){return navigator?.serviceWorker?.controller||null}function K2(){return Wd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="firebaseLocalStorageDb",Y2=1,Na="firebaseLocalStorage",sm="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fl(r,e){return r.transaction([Na],e?"readwrite":"readonly").objectStore(Na)}function Q2(){const r=indexedDB.deleteDatabase(nm);return new Bo(r).toPromise()}function Fc(){const r=indexedDB.open(nm,Y2);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Na,{keyPath:sm})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Na)?e(n):(n.close(),await Q2(),e(await Fc()))})})}async function af(r,e,t){const n=fl(r,!0).put({[sm]:e,value:t});return new Bo(n).toPromise()}async function J2(r,e){const t=fl(r,!1).get(e),n=await new Bo(t).toPromise();return n===void 0?null:n.value}function lf(r,e){const t=fl(r,!0).delete(e);return new Bo(t).toPromise()}const X2=800,Z2=3;class im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Z2)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hl._getInstance(K2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await W2(),!this.activeServiceWorker)return;this.sender=new V2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||G2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fc();return await af(e,Ra,"1"),await lf(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>af(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>J2(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fl(s,!1).getAll();return new Bo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}im.type="LOCAL";const ex=im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(r,e){return Fr(r,"POST","/v2/accounts/mfaSignIn:start",Lr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=Vv("rcb"),tx=new Uo(3e4,6e4);class rx{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Yt().grecaptcha?.render}load(e,t=""){return be(nx(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Yh(Yt().grecaptcha)?Promise.resolve(Yt().grecaptcha):new Promise((n,s)=>{const i=Yt().setTimeout(()=>{s(Ur(e,"network-request-failed"))},tx.get());Yt()[oc]=()=>{Yt().clearTimeout(i),delete Yt()[oc];const a=Yt().grecaptcha;if(!a||!Yh(a)){s(Ur(e,"internal-error"));return}const l=a.render;a.render=(u,f)=>{const m=l(u,f);return this.counter++,m},this.hostLanguage=t,n(a)};const o=`${n2()}?${Hs({onload:oc,render:"explicit",hl:t})}`;jd(o).catch(()=>{clearTimeout(i),s(Ur(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Yt().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function nx(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class sx{async load(e){return new l2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="recaptcha",ix={theme:"light",type:"image"};class ox{constructor(e,t,n={...ix}){this.parameters=n,this.type=ao,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=wn(e),this.isInvisible=this.parameters.size==="invisible",be(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;be(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sx:new rx,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){be(!this.parameters.sitekey,this.auth,"argument-error"),be(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),be(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Yt()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){be(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){be(Tv()&&!Wd(),this.auth,"internal-error"),await ax(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Uy(this.auth);be(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return be(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ax(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=oo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function cx(r,e,t){if(Sr(r.app))return Promise.reject(pn(r));const n=wn(r),s=await dx(n,e,Mt(t));return new lx(s,i=>Qv(n,i))}async function dx(r,e,t){if(!r._getRecaptchaConfig())try{await p2(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let n;if(typeof e=="string"?n={phoneNumber:e}:n=e,"session"in n){const s=n.session;if("phoneNumber"in n){be(s.type==="enroll",r,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await di(r,i,"mfaSmsEnrollment",async(u,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===io){be(t?.type===ao,u,"argument-error");const m=await ac(u,f,t);return of(u,m)}return of(u,f)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{be(s.type==="signin",r,"internal-error");const i=n.multiFactorHint?.uid||n.multiFactorUid;be(i,r,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await di(r,o,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===io){be(t?.type===ao,f,"argument-error");const v=await ac(f,m,t);return cf(f,v)}return cf(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await di(r,s,"sendVerificationCode",async(l,u)=>{if(u.captchaResponse===io){be(t?.type===ao,l,"argument-error");const f=await ac(l,u,t);return nf(l,f)}return nf(l,u)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function ac(r,e,t){be(t.type===ao,r,"argument-error");const n=await t.verify();be(typeof n=="string",r,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:n,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:n}),s}/**
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
 */function ux(r,e){return e?An(e):(be(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ui(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hx(r){return Yv(r.auth,new Gd(r),r.bypassAuthState)}function fx(r){const{auth:e,user:t}=r;return be(t,e,"internal-error"),L2(t,new Gd(r),r.bypassAuthState)}async function px(r){const{auth:e,user:t}=r;return be(t,e,"internal-error"),N2(t,new Gd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hx;case"linkViaPopup":case"linkViaRedirect":return px;case"reauthViaPopup":case"reauthViaRedirect":return fx;default:on(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=new Uo(2e3,1e4);class si extends om{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vx.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="pendingRedirect",ua=new Map;class gx extends om{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ua.get(this.auth._key());if(!e){try{const n=await _x(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ua.set(this.auth._key(),e)}return this.bypassAuthState||ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _x(r,e){const t=yx(e),n=wx(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function bx(r,e){ua.set(r._key(),e)}function wx(r){return An(r._redirectPersistence)}function yx(r){return da(mx,r.config.apiKey,r.name)}async function xx(r,e,t=!1){if(Sr(r.app))return Promise.reject(pn(r));const n=wn(r),s=ux(n,e),o=await new gx(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=600*1e3;class Ex{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ix(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!am(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ur(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kx&&this.cachedEventUids.clear(),this.cachedEventUids.has(df(e))}saveEventToCache(e){this.cachedEventUids.add(df(e)),this.lastProcessedEventTime=Date.now()}}function df(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function am({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function Ix(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return am(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(r,e={}){return Fr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sx=/^https?/;async function Ax(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Cx(r);for(const t of e)try{if(Px(t))return}catch{}on(r,"unauthorized-domain")}function Px(r){const e=zc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Sx.test(t))return!1;if(Tx.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const Rx=new Uo(3e4,6e4);function uf(){const r=Yt().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Nx(r){return new Promise((e,t)=>{function n(){uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uf(),t(Ur(r,"network-request-failed"))},timeout:Rx.get()})}if(Yt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Yt().gapi?.load)n();else{const s=Vv("iframefcb");return Yt()[s]=()=>{gapi.load?n():t(Ur(r,"network-request-failed"))},jd(`${i2()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw ha=null,e})}let ha=null;function Lx(r){return ha=ha||Nx(r),ha}/**
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
 */const $x=new Uo(5e3,15e3),Dx="__/auth/iframe",qx="emulator/auth/iframe",Ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zx(r){const e=r.config;be(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?zd(e,qx):`https://${r.config.authDomain}/${Dx}`,n={apiKey:e.apiKey,appName:r.name,v:Ws},s=Mx.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Hs(n).slice(1)}`}async function Ux(r){const e=await Lx(r),t=Yt().gapi;return be(t,r,"internal-error"),e.open({where:document.body,url:zx(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ox,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Ur(r,"network-request-failed"),a=Yt().setTimeout(()=>{i(o)},$x.get());function l(){Yt().clearTimeout(a),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Fx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jx=500,Bx=600,Vx="_blank",Hx="http://localhost";class hf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wx(r,e,t,n=jx,s=Bx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l={...Fx,width:n.toString(),height:s.toString(),top:i,left:o},u=kr().toLowerCase();t&&(a=Ov(u)?Vx:t),Dv(u)&&(e=e||Hx,l.scrollbars="yes");const f=Object.entries(l).reduce((v,[_,g])=>`${v}${_}=${g},`,"");if(Yy(u)&&a!=="_self")return Gx(e||"",a),new hf(null);const m=window.open(e||"",a,f);be(m,r,"popup-blocked");try{m.focus()}catch{}return new hf(m)}function Gx(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Kx="__/auth/handler",Yx="emulator/auth/handler",Qx=encodeURIComponent("fac");async function ff(r,e,t,n,s,i){be(r.config.authDomain,r,"auth-domain-config-required"),be(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Ws,eventId:s};if(e instanceof Gv){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Lc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof jo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await r._getAppCheckToken(),u=l?`#${Qx}=${encodeURIComponent(l)}`:"";return`${Jx(r)}?${Hs(a).slice(1)}${u}`}function Jx({config:r}){return r.emulator?zd(r,Yx):`https://${r.authDomain}/${Kx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="webStorageSupport";class Xx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rm,this._completeRedirectFn=xx,this._overrideRedirectResult=bx}async _openPopup(e,t,n,s){jn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await ff(e,t,n,zc(),s);return Wx(e,i,Hd())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await ff(e,t,n,zc(),s);return H2(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(jn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ux(e),n=new Ex(e);return t.register("authEvent",s=>(be(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lc,{type:lc},s=>{const i=s?.[0]?.[lc];i!==void 0&&t(!!i),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ax(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jv()||qv()||Fd()}}const Zx=Xx;var pf="@firebase/auth",vf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rk(r){qs(new ps("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;be(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bv(r)},u=new t2(n,s,i,l);return m2(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),qs(new ps("auth-internal",e=>{const t=wn(e.getProvider("auth").getImmediate());return(n=>new ek(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(pf,vf,tk(r)),fn(pf,vf,"esm2020")}/**
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
 */const nk=300,sk=vv("authIdTokenMaxAge")||nk;let mf=null;const ik=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>sk)return;const s=t?.token;mf!==s&&(mf=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ok(r=Od()){const e=dl(r,"auth");if(e.isInitialized())return e.getImmediate();const t=v2(r,{popupRedirectResolver:Zx,persistence:[ex,j2,rm]}),n=vv("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=ik(i.toString());M2(t,o,()=>o(t.currentUser)),O2(t,a=>o(a))}}const s=hv("auth");return s&&g2(t,`http://${s}`),t}function ak(){return document.getElementsByTagName("head")?.[0]??document}r2({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Ur("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",ak().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rk("Browser");var gf={};const _f="@firebase/database",bf="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lm="";function lk(r){lm=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),er(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:yo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ck(e)}}catch{}return new dk},Ss=cm("localStorage"),uk=cm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Dd("@firebase/database"),hk=(function(){let r=1;return function(){return r++}})(),dm=function(r){const e=ww(r),t=new mw;t.update(e);const n=t.digest();return Pd.encodeByteArray(n)},Vo=function(...r){let e="";for(let t=0;t<r.length;t++){const n=r[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=Vo.apply(null,n):typeof n=="object"?e+=er(n):e+=n,e+=" "}return e};let lo=null,wf=!0;const fk=function(r,e){te(!0,"Can't turn on custom loggers persistently."),hi.logLevel=At.VERBOSE,lo=hi.log.bind(hi)},lr=function(...r){if(wf===!0&&(wf=!1,lo===null&&uk.get("logging_enabled")===!0&&fk()),lo){const e=Vo.apply(null,r);lo(e)}},Ho=function(r){return function(...e){lr(r,...e)}},jc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Vo(...r);hi.error(e)},Bn=function(...r){const e=`FIREBASE FATAL ERROR: ${Vo(...r)}`;throw hi.error(e),new Error(e)},xr=function(...r){const e="FIREBASE WARNING: "+Vo(...r);hi.warn(e)},pk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},vk=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vs="[MIN_NAME]",Vn="[MAX_NAME]",Gs=function(r,e){if(r===e)return 0;if(r===vs||e===Vn)return-1;if(e===vs||r===Vn)return 1;{const t=yf(r),n=yf(e);return t!==null?n!==null?t-n===0?r.length-e.length:t-n:-1:n!==null?1:r<e?-1:1}},mk=function(r,e){return r===e?0:r<e?-1:1},ji=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+er(e))},Yd=function(r){if(typeof r!="object"||r===null)return er(r);const e=[];for(const n in r)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=er(e[n]),t+=":",t+=Yd(r[e[n]]);return t+="}",t},um=function(r,e){const t=r.length;if(t<=e)return[r];const n=[];for(let s=0;s<t;s+=e)s+e>t?n.push(r.substring(s,t)):n.push(r.substring(s,s+e));return n};function ur(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const hm=function(r){te(!Kd(r),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let s,i,o,a,l;r===0?(i=0,o=0,s=1/r===-1/0?1:0):(s=r<0,r=Math.abs(r),r>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(r)/Math.LN2),n),i=a+n,o=Math.round(r*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(r/Math.pow(2,1-n-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const f=u.join("");let m="";for(l=0;l<64;l+=8){let v=parseInt(f.substr(l,8),2).toString(16);v.length===1&&(v="0"+v),m=m+v}return m.toLowerCase()},gk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_k=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bk(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const n=new Error(r+" at "+e._path.toString()+": "+t);return n.code=r.toUpperCase(),n}const wk=new RegExp("^-?(0*)\\d{1,10}$"),yk=-2147483648,xk=2147483647,yf=function(r){if(wk.test(r)){const e=Number(r);if(e>=yk&&e<=xk)return e}return null},Ni=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xr("Exception was thrown by user callback.",t),e},Math.floor(0))}},kk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},co=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ek{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Sr(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){xr(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(lr("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xr(e)}}class fa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fa.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="5",fm="v",pm="s",vm="r",mm="f",gm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_m="ls",bm="p",Bc="ac",wm="websocket",ym="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t,n,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=n,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ss.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ss.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ck(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function km(r,e,t){te(typeof e=="string","typeof type must == string"),te(typeof t=="object","typeof params must == object");let n;if(e===wm)n=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===ym)n=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ck(r)&&(t.ns=r.namespace);const s=[];return ur(t,(i,o)=>{s.push(i+"="+o)}),n+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.counters_={}}incrementCounter(e,t=1){bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return J0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc={},dc={};function Jd(r){const e=r.toString();return cc[e]||(cc[e]=new Tk),cc[e]}function Sk(r,e){const t=r.toString();return dc[t]||(dc[t]=e()),dc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<n.length;++s)n[s]&&Ni(()=>{this.onMessage_(n[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="start",Pk="close",Rk="pLPCommand",Nk="pRTLPCB",Em="id",Im="pw",Cm="ser",Lk="cb",$k="seg",Dk="ts",qk="d",Ok="dframe",Tm=1870,Sm=30,Mk=Tm-Sm,zk=25e3,Uk=3e4;class ii{constructor(e,t,n,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ho(e),this.stats_=Jd(t),this.urlFn=l=>(this.appCheckToken&&(l[Bc]=this.appCheckToken),km(t,ym,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ak(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Uk)),vk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xd((...i)=>{const[o,a,l,u,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xf)this.id=a,this.password=l;else if(o===Pk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[xf]="t",n[Cm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[Lk]=this.scriptTagHolder.uniqueCallbackIdentifier),n[fm]=Qd,this.transportSessionId&&(n[pm]=this.transportSessionId),this.lastSessionId&&(n[_m]=this.lastSessionId),this.applicationId&&(n[bm]=this.applicationId),this.appCheckToken&&(n[Bc]=this.appCheckToken),typeof location<"u"&&location.hostname&&gm.test(location.hostname)&&(n[vm]=mm);const s=this.urlFn(n);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gk()&&!_k()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=er(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=dv(t),s=um(n,Mk);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[Ok]="t",n[Em]=e,n[Im]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=er(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xd{constructor(e,t,n,s){this.onDisconnect=n,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hk(),window[Rk+this.uniqueCallbackIdentifier]=e,window[Nk+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lr("frame writing exception"),a.stack&&lr(a.stack),lr(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lr("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Em]=this.myID,e[Im]=this.myPW,e[Cm]=this.currentSerial;let t=this.urlFn(e),n="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sm+n.length<=Tm;){const o=this.pendingSegs.shift();n=n+"&"+$k+s+"="+o.seg+"&"+Dk+s+"="+o.ts+"&"+qk+s+"="+o.d,s++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(n,Math.floor(zk)),i=()=>{clearTimeout(s),n()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const s=n.readyState;(!s||s==="loaded"||s==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{lr("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=16384,jk=45e3;let La=null;typeof MozWebSocket<"u"?La=MozWebSocket:typeof WebSocket<"u"&&(La=WebSocket);class Jr{constructor(e,t,n,s,i,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ho(this.connId),this.stats_=Jd(t),this.connURL=Jr.connectionURL_(t,o,a,s,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,s,i){const o={};return o[fm]=Qd,typeof location<"u"&&location.hostname&&gm.test(location.hostname)&&(o[vm]=mm),t&&(o[pm]=t),n&&(o[_m]=n),s&&(o[Bc]=s),i&&(o[bm]=i),km(e,wm,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ss.set("previous_websocket_failure",!0);try{let n;lw(),this.mySock=new La(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Jr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&La!==null&&!Jr.forceDisallow_}static previouslyFailed(){return Ss.isInMemoryStorage||Ss.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ss.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=yo(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(te(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=er(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=um(t,Fk);n.length>1&&this.sendString_(String(n.length));for(let s=0;s<n.length;s++)this.sendString_(n[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jr.responsesRequiredToBeHealthy=2;Jr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{static get ALL_TRANSPORTS(){return[ii,Jr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Jr&&Jr.isAvailable();let n=t&&!Jr.previouslyFailed();if(e.webSocketOnly&&(t||xr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Jr];else{const s=this.transports_=[];for(const i of Eo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Eo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Eo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=6e4,Vk=5e3,Hk=10*1024,Wk=100*1024,uc="t",kf="d",Gk="s",Ef="r",Kk="e",If="o",Cf="a",Tf="n",Sf="p",Yk="h";class Qk{constructor(e,t,n,s,i,o,a,l,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ho("c:"+this.id+":"),this.transportManager_=new Eo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=co(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Hk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(uc in e){const t=e[uc];t===Cf?this.upgradeIfSecondaryHealthy_():t===Ef?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===If&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ji("t",e),n=ji("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ji("t",e),n=ji("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ji(uc,e);if(kf in e){const n=e[kf];if(t===Yk){const s={...n};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Tf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Gk?this.onConnectionShutdown_(n):t===Ef?this.onReset_(n):t===Kk?jc("Server Error: "+n):t===If?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Qd!==n&&xr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),co(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):co(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ss.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{put(e,t,n,s){}merge(e,t,n,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.allowedEvents_=e,this.listeners_={},te(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let s=0;s<n.length;s++)n[s].callback.apply(n[s].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const s=this.getInitialEvent(e);s&&t.apply(n,s)}off(e,t,n){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!n||n===s[i].context)){s.splice(i,1);return}}validateEventType_(e){te(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends Pm{static getInstance(){return new $a}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$d()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return te(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=32,Pf=768;class Ct{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[n]=this.pieces_[s],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function yt(){return new Ct("")}function tt(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function ms(r){return r.pieces_.length-r.pieceNum_}function Dt(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Ct(r.pieces_,e)}function Zd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function Jk(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function Io(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Rm(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new Ct(e,0)}function Vt(r,e){const t=[];for(let n=r.pieceNum_;n<r.pieces_.length;n++)t.push(r.pieces_[n]);if(e instanceof Ct)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let s=0;s<n.length;s++)n[s].length>0&&t.push(n[s])}return new Ct(t,0)}function rt(r){return r.pieceNum_>=r.pieces_.length}function yr(r,e){const t=tt(r),n=tt(e);if(t===null)return e;if(t===n)return yr(Dt(r),Dt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function Xk(r,e){const t=Io(r,0),n=Io(e,0);for(let s=0;s<t.length&&s<n.length;s++){const i=Gs(t[s],n[s]);if(i!==0)return i}return t.length===n.length?0:t.length<n.length?-1:1}function eu(r,e){if(ms(r)!==ms(e))return!1;for(let t=r.pieceNum_,n=e.pieceNum_;t<=r.pieces_.length;t++,n++)if(r.pieces_[t]!==e.pieces_[n])return!1;return!0}function Vr(r,e){let t=r.pieceNum_,n=e.pieceNum_;if(ms(r)>ms(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class Zk{constructor(e,t){this.errorPrefix_=t,this.parts_=Io(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=cl(this.parts_[n]);Nm(this)}}function e3(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=cl(e),Nm(r)}function t3(r){const e=r.parts_.pop();r.byteLength_-=cl(e),r.parts_.length>0&&(r.byteLength_-=1)}function Nm(r){if(r.byteLength_>Pf)throw new Error(r.errorPrefix_+"has a key path longer than "+Pf+" bytes ("+r.byteLength_+").");if(r.parts_.length>Af)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Af+") or object contains a cycle "+Is(r))}function Is(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Pm{static getInstance(){return new tu}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return te(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=1e3,r3=300*1e3,Rf=30*1e3,n3=1.3,s3=3e4,i3="server_kill",Nf=3;class Dn extends Am{constructor(e,t,n,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Dn.nextPersistentConnectionId_++,this.log_=Ho("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bi,this.maxReconnectDelay_=r3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$a.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(er(i)),te(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[s]=n)}get(e){this.initConnection_();const t=new Mo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),te(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+n+" for "+s);const i={p:n},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Dn.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(n,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&bn(e,"w")){const n=gi(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();xr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=pw(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+s),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,s)&&this.connected_&&this.sendUnlisten_(n,s,e._queryObject,t)}sendUnlisten_(e,t,n,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=n,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,s){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,n,s){this.putInternal("p",e,t,n,s)}merge(e,t,n,s){this.putInternal("m",e,t,n,s)}putInternal(e,t,n,s,i){this.initConnection_();const o={p:t,d:n};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+er(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):jc("Unrecognized action received from server: "+er(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){te(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>s3&&(this.reconnectDelay_=Bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*n3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Dn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},u=function(m){te(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(m)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,v]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?lr("getToken() completed but was canceled"):(lr("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=v&&v.token,a=new Qk(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,_=>{xr(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(i3)},i))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&xr(m),l())}}}interrupt(e){lr("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lr("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lc(this.interruptReasons_)&&(this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(i=>Yd(i)).join("$"):n="default";const s=this.removeListen_(e,n);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const n=new Ct(e).toString();let s;if(this.listens.has(n)){const i=this.listens.get(n);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else s=void 0;return s}onAuthRevoked_(e,t){lr("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nf&&(this.reconnectDelay_=Rf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){lr("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+lm.replace(/\./g,"-")]=1,$d()?e["framework.cordova"]=1:gv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$a.getInstance().currentlyOnline();return Lc(this.interruptReasons_)&&e}}Dn.nextPersistentConnectionId_=0;Dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new nt(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new nt(vs,e),s=new nt(vs,t);return this.compare(n,s)!==0}minPost(){return nt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;class Lm extends pl{static get __EMPTY_NODE(){return ra}static set __EMPTY_NODE(e){ra=e}compare(e,t){return Gs(e.name,t.name)}isDefinedOn(e){throw Pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return nt.MIN}maxPost(){return new nt(Vn,ra)}makePost(e,t){return te(typeof e=="string","KeyIndex indexValue must always be a string."),new nt(e,ra)}toString(){return".key"}}const qn=new Lm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,n,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ir{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??ir.RED,this.left=s??Ar.EMPTY_NODE,this.right=i??Ar.EMPTY_NODE}copy(e,t,n,s,i){return new ir(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ar.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,s;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return Ar.EMPTY_NODE;s=n.right.min_(),n=n.copy(s.key,s.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ir.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ir.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ir.RED=!0;ir.BLACK=!1;class o3{copy(e,t,n,s,i){return this}insert(e,t,n){return new ir(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ar{constructor(e,t=Ar.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ar(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ir.BLACK,null,null))}remove(e){return new Ar(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ir.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,s=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return s?s.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(s=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new na(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new na(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new na(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new na(this.root_,null,this.comparator_,!0,e)}}Ar.EMPTY_NODE=new o3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a3(r,e){return Gs(r.name,e.name)}function ru(r,e){return Gs(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;function l3(r){Vc=r}const $m=function(r){return typeof r=="number"?"number:"+hm(r):"string:"+r},Dm=function(r){if(r.isLeafNode()){const e=r.val();te(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bn(e,".sv"),"Priority must be a string or number.")}else te(r===Vc||r.isEmpty(),"priority of unexpected type.");te(r===Vc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf;class sr{static set __childrenNodeConstructor(e){Lf=e}static get __childrenNodeConstructor(){return Lf}constructor(e,t=sr.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,te(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new sr(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:sr.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return rt(e)?this:tt(e)===".priority"?this.priorityNode_:sr.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:sr.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=tt(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(te(n!==".priority"||ms(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,sr.__childrenNodeConstructor.EMPTY_NODE.updateChild(Dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$m(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=hm(this.value_):e+=this.value_,this.lazyHash_=dm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===sr.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof sr.__childrenNodeConstructor?-1:(te(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,s=sr.VALUE_TYPE_ORDER.indexOf(t),i=sr.VALUE_TYPE_ORDER.indexOf(n);return te(s>=0,"Unknown leaf type: "+t),te(i>=0,"Unknown leaf type: "+n),s===i?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}sr.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qm,Om;function c3(r){qm=r}function d3(r){Om=r}class u3 extends pl{compare(e,t){const n=e.node.getPriority(),s=t.node.getPriority(),i=n.compareTo(s);return i===0?Gs(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return nt.MIN}maxPost(){return new nt(Vn,new sr("[PRIORITY-POST]",Om))}makePost(e,t){const n=qm(e);return new nt(t,new sr("[PRIORITY-POST]",n))}toString(){return".priority"}}const jt=new u3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h3=Math.log(2);class f3{constructor(e){const t=i=>parseInt(Math.log(i)/h3,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=n(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Da=function(r,e,t,n){r.sort(e);const s=function(l,u){const f=u-l;let m,v;if(f===0)return null;if(f===1)return m=r[l],v=t?t(m):m,new ir(v,m.node,ir.BLACK,null,null);{const _=parseInt(f/2,10)+l,g=s(l,_),w=s(_+1,u);return m=r[_],v=t?t(m):m,new ir(v,m.node,ir.BLACK,g,w)}},i=function(l){let u=null,f=null,m=r.length;const v=function(g,w){const k=m-g,I=m;m-=g;const P=s(k+1,I),L=r[k],N=t?t(L):L;_(new ir(N,L.node,w,null,P))},_=function(g){u?(u.left=g,u=g):(f=g,u=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(g+1));w?v(k,ir.BLACK):(v(k,ir.BLACK),v(k,ir.RED))}return f},o=new f3(r.length),a=i(o);return new Ar(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;const ei={};class Pn{static get Default(){return te(ei&&jt,"ChildrenNode.ts has not been loaded"),hc=hc||new Pn({".priority":ei},{".priority":jt}),hc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=gi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ar?t:null}hasIndex(e){return bn(this.indexSet_,e.toString())}addIndex(e,t){te(e!==qn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let s=!1;const i=t.getIterator(nt.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),n.push(o),o=i.getNext();let a;s?a=Da(n,e.getCompare()):a=ei;const l=e.toString(),u={...this.indexSet_};u[l]=e;const f={...this.indexes_};return f[l]=a,new Pn(f,u)}addToIndexes(e,t){const n=Ia(this.indexes_,(s,i)=>{const o=gi(this.indexSet_,i);if(te(o,"Missing index implementation for "+i),s===ei)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(nt.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Da(a,o.getCompare())}else return ei;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new nt(e.name,a))),l.insert(e,e.node)}});return new Pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ia(this.indexes_,s=>{if(s===ei)return s;{const i=t.get(e.name);return i?s.remove(new nt(e.name,i)):s}});return new Pn(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;class qe{static get EMPTY_NODE(){return Vi||(Vi=new qe(new Ar(ru),null,Pn.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Dm(this.priorityNode_),this.children_.isEmpty()&&te(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vi}updatePriority(e){return this.children_.isEmpty()?this:new qe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Vi:t}}getChild(e){const t=tt(e);return t===null?this:this.getImmediateChild(t).getChild(Dt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(te(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new nt(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=s.isEmpty()?Vi:this.priorityNode_;return new qe(s,o,i)}}updateChild(e,t){const n=tt(e);if(n===null)return t;{te(tt(e)!==".priority"||ms(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(n).updateChild(Dt(e),t);return this.updateImmediateChild(n,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,s=0,i=!0;if(this.forEachChild(jt,(o,a)=>{t[o]=a.val(e),n++,i&&qe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$m(this.getPriority().val())+":"),this.forEachChild(jt,(t,n)=>{const s=n.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":dm(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const s=this.resolveIndex_(n);if(s){const i=s.getPredecessorKey(new nt(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new nt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new nt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,nt.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,nt.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wo?-1:0}withIndex(e){if(e===qn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new qe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(jt),s=t.getIterator(jt);let i=n.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qn?null:this.indexMap_.get(e.toString())}}qe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class p3 extends qe{constructor(){super(new Ar(ru),qe.EMPTY_NODE,Pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return qe.EMPTY_NODE}isEmpty(){return!1}}const Wo=new p3;Object.defineProperties(nt,{MIN:{value:new nt(vs,qe.EMPTY_NODE)},MAX:{value:new nt(Vn,Wo)}});Lm.__EMPTY_NODE=qe.EMPTY_NODE;sr.__childrenNodeConstructor=qe;l3(Wo);d3(Wo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v3=!0;function Zt(r,e=null){if(r===null)return qe.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),te(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new sr(t,Zt(e))}if(!(r instanceof Array)&&v3){const t=[];let n=!1;if(ur(r,(o,a)=>{if(o.substring(0,1)!=="."){const l=Zt(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new nt(o,l)))}}),t.length===0)return qe.EMPTY_NODE;const i=Da(t,a3,o=>o.name,ru);if(n){const o=Da(t,jt.getCompare());return new qe(i,Zt(e),new Pn({".priority":o},{".priority":jt}))}else return new qe(i,Zt(e),Pn.Default)}else{let t=qe.EMPTY_NODE;return ur(r,(n,s)=>{if(bn(r,n)&&n.substring(0,1)!=="."){const i=Zt(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority(Zt(e))}}c3(Zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends pl{constructor(e){super(),this.indexPath_=e,te(!rt(e)&&tt(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),s=this.extractChild(t.node),i=n.compareTo(s);return i===0?Gs(e.name,t.name):i}makePost(e,t){const n=Zt(e),s=qe.EMPTY_NODE.updateChild(this.indexPath_,n);return new nt(t,s)}maxPost(){const e=qe.EMPTY_NODE.updateChild(this.indexPath_,Wo);return new nt(Vn,e)}toString(){return Io(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3 extends pl{compare(e,t){const n=e.node.compareTo(t.node);return n===0?Gs(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return nt.MIN}maxPost(){return nt.MAX}makePost(e,t){const n=Zt(e);return new nt(t,n)}toString(){return".value"}}const Mm=new m3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(r){return{type:"value",snapshotNode:r}}function bi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Co(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function To(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function g3(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.index_=e}updateChild(e,t,n,s,i,o){te(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(n.getChild(s))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Co(t,a)):te(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(bi(t,n)):o.trackChildChange(To(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(jt,(s,i)=>{t.hasChild(s)||n.trackChildChange(Co(s,i))}),t.isLeafNode()||t.forEachChild(jt,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||n.trackChildChange(To(s,i,o))}else n.trackChildChange(bi(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?qe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.indexedFilter_=new su(e.getIndex()),this.index_=e.getIndex(),this.startPost_=So.getStartPost_(e),this.endPost_=So.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,s,i,o){return this.matches(new nt(t,n))||(n=qe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,s,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=qe.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(qe.EMPTY_NODE);const i=this;return t.forEachChild(jt,(o,a)=>{i.matches(new nt(o,a))||(s=s.updateImmediateChild(o,qe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new So(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,s,i,o){return this.rangedFilter_.matches(new nt(t,n))||(n=qe.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,s,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let s;if(t.isLeafNode()||t.isEmpty())s=qe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=qe.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(qe.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,qe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,s,i){let o;if(this.reverse_){const m=this.index_.getCompare();o=(v,_)=>m(_,v)}else o=this.index_.getCompare();const a=e;te(a.numChildren()===this.limit_,"");const l=new nt(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(t)){const m=a.getImmediateChild(t);let v=s.getChildAfterChild(this.index_,u,this.reverse_);for(;v!=null&&(v.name===t||a.hasChild(v.name));)v=s.getChildAfterChild(this.index_,v,this.reverse_);const _=v==null?1:o(v,l);if(f&&!n.isEmpty()&&_>=0)return i?.trackChildChange(To(t,n,m)),a.updateImmediateChild(t,n);{i?.trackChildChange(Co(t,m));const w=a.updateImmediateChild(t,qe.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(i?.trackChildChange(bi(v.name,v.node)),w.updateImmediateChild(v.name,v.node)):w}}else return n.isEmpty()?e:f&&o(u,l)>=0?(i!=null&&(i.trackChildChange(Co(u.name,u.node)),i.trackChildChange(bi(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,qe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=jt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return te(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return te(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vs}hasEnd(){return this.endSet_}getIndexEndValue(){return te(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return te(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return te(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===jt}copy(){const e=new iu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function b3(r){return r.loadsAllData()?new su(r.getIndex()):r.hasLimit()?new _3(r):new So(r)}function w3(r,e){const t=r.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function y3(r,e){const t=r.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Hc(r,e,t){const n=r.copy();return n.startSet_=!0,e===void 0&&(e=null),n.indexStartValue_=e,t!=null?(n.startNameSet_=!0,n.indexStartName_=t):(n.startNameSet_=!1,n.indexStartName_=""),n}function x3(r,e,t){let n;return r.index_===qn||t?n=Hc(r,e,t):n=Hc(r,e,Vn),n.startAfterSet_=!0,n}function Wc(r,e,t){const n=r.copy();return n.endSet_=!0,e===void 0&&(e=null),n.indexEndValue_=e,t!==void 0?(n.endNameSet_=!0,n.indexEndName_=t):(n.endNameSet_=!1,n.indexEndName_=""),n}function k3(r,e,t){let n;return r.index_===qn||t?n=Wc(r,e,t):n=Wc(r,e,vs),n.endBeforeSet_=!0,n}function E3(r,e){const t=r.copy();return t.index_=e,t}function $f(r){const e={};if(r.isDefault())return e;let t;if(r.index_===jt?t="$priority":r.index_===Mm?t="$value":r.index_===qn?t="$key":(te(r.index_ instanceof nu,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=er(t),r.startSet_){const n=r.startAfterSet_?"startAfter":"startAt";e[n]=er(r.indexStartValue_),r.startNameSet_&&(e[n]+=","+er(r.indexStartName_))}if(r.endSet_){const n=r.endBeforeSet_?"endBefore":"endAt";e[n]=er(r.indexEndValue_),r.endNameSet_&&(e[n]+=","+er(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Df(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==jt&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Am{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(te(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=s,this.log_=Ho("p:rest:"),this.listens_={}}listen(e,t,n,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=qa.getListenId_(e,n),a={};this.listens_[o]=a;const l=$f(e._queryParams);this.restRequest_(i+".json",l,(u,f)=>{let m=f;if(u===404&&(m=null,u=null),u===null&&this.onDataUpdate_(i,m,!1,n),gi(this.listens_,o)===a){let v;u?u===401?v="permission_denied":v="rest_error:"+u:v="ok",s(v,null)}})}unlisten(e,t){const n=qa.getListenId_(e,t);delete this.listens_[n]}get(e){const t=$f(e._queryParams),n=e._path.toString(),s=new Mo;return this.restRequest_(n+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(n,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hs(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=yo(a.responseText)}catch{xr("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&xr("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(){this.rootNode_=qe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){return{value:null,children:new Map}}function Um(r,e,t){if(rt(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const n=tt(e);r.children.has(n)||r.children.set(n,Oa());const s=r.children.get(n);e=Dt(e),Um(s,e,t)}}function Gc(r,e,t){r.value!==null?t(e,r.value):C3(r,(n,s)=>{const i=new Ct(e.toString()+"/"+n);Gc(s,i,t)})}function C3(r,e){r.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T3{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&ur(this.last_,(n,s)=>{t[n]=t[n]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=10*1e3,S3=30*1e3,A3=300*1e3;class P3{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new T3(e);const n=qf+(S3-qf)*Math.random();co(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;ur(e,(s,i)=>{i>0&&bn(this.statsToReport_,s)&&(t[s]=i,n=!0)}),n&&this.server_.reportStats(t),co(this.reportStats_.bind(this),Math.floor(Math.random()*2*A3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var en;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(en||(en={}));function ou(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function au(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lu(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=en.ACK_USER_WRITE,this.source=ou()}operationForChild(e){if(rt(this.path)){if(this.affectedTree.value!=null)return te(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ct(e));return new Ma(yt(),t,this.revert)}}else return te(tt(this.path)===e,"operationForChild called for unrelated child."),new Ma(Dt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.source=e,this.path=t,this.type=en.LISTEN_COMPLETE}operationForChild(e){return rt(this.path)?new Ao(this.source,yt()):new Ao(this.source,Dt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=en.OVERWRITE}operationForChild(e){return rt(this.path)?new zs(this.source,yt(),this.snap.getImmediateChild(e)):new zs(this.source,Dt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=en.MERGE}operationForChild(e){if(rt(this.path)){const t=this.children.subtree(new Ct(e));return t.isEmpty()?null:t.value?new zs(this.source,yt(),t.value):new wi(this.source,yt(),t)}else return te(tt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wi(this.source,Dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(rt(e))return this.isFullyInitialized()&&!this.filtered_;const t=tt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function N3(r,e,t,n){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&r.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(g3(o.childName,o.snapshotNode))}),Hi(r,s,"child_removed",e,n,t),Hi(r,s,"child_added",e,n,t),Hi(r,s,"child_moved",i,n,t),Hi(r,s,"child_changed",e,n,t),Hi(r,s,"value",e,n,t),s}function Hi(r,e,t,n,s,i){const o=n.filter(a=>a.type===t);o.sort((a,l)=>$3(r,a,l)),o.forEach(a=>{const l=L3(r,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,r.query_))})})}function L3(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function $3(r,e,t){if(e.childName==null||t.childName==null)throw Pi("Should only compare child_ events.");const n=new nt(e.childName,e.snapshotNode),s=new nt(t.childName,t.snapshotNode);return r.index_.compare(n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(r,e){return{eventCache:r,serverCache:e}}function uo(r,e,t,n){return vl(new gs(e,t,n),r.serverCache)}function Fm(r,e,t,n){return vl(r.eventCache,new gs(e,t,n))}function za(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Us(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;const D3=()=>(fc||(fc=new Ar(mk)),fc);class $t{static fromObject(e){let t=new $t(null);return ur(e,(n,s)=>{t=t.set(new Ct(n),s)}),t}constructor(e,t=D3()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:yt(),value:this.value};if(rt(e))return null;{const n=tt(e),s=this.children.get(n);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Dt(e),t);return i!=null?{path:Vt(new Ct(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(rt(e))return this;{const t=tt(e),n=this.children.get(t);return n!==null?n.subtree(Dt(e)):new $t(null)}}set(e,t){if(rt(e))return new $t(t,this.children);{const n=tt(e),i=(this.children.get(n)||new $t(null)).set(Dt(e),t),o=this.children.insert(n,i);return new $t(this.value,o)}}remove(e){if(rt(e))return this.children.isEmpty()?new $t(null):new $t(null,this.children);{const t=tt(e),n=this.children.get(t);if(n){const s=n.remove(Dt(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new $t(null):new $t(this.value,i)}else return this}}get(e){if(rt(e))return this.value;{const t=tt(e),n=this.children.get(t);return n?n.get(Dt(e)):null}}setTree(e,t){if(rt(e))return t;{const n=tt(e),i=(this.children.get(n)||new $t(null)).setTree(Dt(e),t);let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),new $t(this.value,o)}}fold(e){return this.fold_(yt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((s,i)=>{n[s]=i.fold_(Vt(e,s),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,yt(),t)}findOnPath_(e,t,n){const s=this.value?n(t,this.value):!1;if(s)return s;if(rt(e))return null;{const i=tt(e),o=this.children.get(i);return o?o.findOnPath_(Dt(e),Vt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,yt(),t)}foreachOnPath_(e,t,n){if(rt(e))return this;{this.value&&n(t,this.value);const s=tt(e),i=this.children.get(s);return i?i.foreachOnPath_(Dt(e),Vt(t,s),n):new $t(null)}}foreach(e){this.foreach_(yt(),e)}foreach_(e,t){this.children.inorderTraversal((n,s)=>{s.foreach_(Vt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.writeTree_=e}static empty(){return new rn(new $t(null))}}function ho(r,e,t){if(rt(e))return new rn(new $t(t));{const n=r.writeTree_.findRootMostValueAndPath(e);if(n!=null){const s=n.path;let i=n.value;const o=yr(s,e);return i=i.updateChild(o,t),new rn(r.writeTree_.set(s,i))}else{const s=new $t(t),i=r.writeTree_.setTree(e,s);return new rn(i)}}}function Kc(r,e,t){let n=r;return ur(t,(s,i)=>{n=ho(n,Vt(e,s),i)}),n}function Of(r,e){if(rt(e))return rn.empty();{const t=r.writeTree_.setTree(e,new $t(null));return new rn(t)}}function Yc(r,e){return Ks(r,e)!=null}function Ks(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(yr(t.path,e)):null}function Mf(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(jt,(n,s)=>{e.push(new nt(n,s))}):r.writeTree_.children.inorderTraversal((n,s)=>{s.value!=null&&e.push(new nt(n,s.value))}),e}function cs(r,e){if(rt(e))return r;{const t=Ks(r,e);return t!=null?new rn(new $t(t)):new rn(r.writeTree_.subtree(e))}}function Qc(r){return r.writeTree_.isEmpty()}function yi(r,e){return jm(yt(),r.writeTree_,e)}function jm(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let n=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(te(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=jm(Vt(r,s),i,t)}),!t.getChild(r).isEmpty()&&n!==null&&(t=t.updateChild(Vt(r,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(r,e){return Wm(e,r)}function q3(r,e,t,n,s){te(n>r.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),r.allWrites.push({path:e,snap:t,writeId:n,visible:s}),s&&(r.visibleWrites=ho(r.visibleWrites,e,t)),r.lastWriteId=n}function O3(r,e,t,n){te(n>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:n,visible:!0}),r.visibleWrites=Kc(r.visibleWrites,e,t),r.lastWriteId=n}function M3(r,e){for(let t=0;t<r.allWrites.length;t++){const n=r.allWrites[t];if(n.writeId===e)return n}return null}function z3(r,e){const t=r.allWrites.findIndex(a=>a.writeId===e);te(t>=0,"removeWrite called with nonexistent writeId.");const n=r.allWrites[t];r.allWrites.splice(t,1);let s=n.visible,i=!1,o=r.allWrites.length-1;for(;s&&o>=0;){const a=r.allWrites[o];a.visible&&(o>=t&&U3(a,n.path)?s=!1:Vr(n.path,a.path)&&(i=!0)),o--}if(s){if(i)return F3(r),!0;if(n.snap)r.visibleWrites=Of(r.visibleWrites,n.path);else{const a=n.children;ur(a,l=>{r.visibleWrites=Of(r.visibleWrites,Vt(n.path,l))})}return!0}else return!1}function U3(r,e){if(r.snap)return Vr(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&Vr(Vt(r.path,t),e))return!0;return!1}function F3(r){r.visibleWrites=Bm(r.allWrites,j3,yt()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function j3(r){return r.visible}function Bm(r,e,t){let n=rn.empty();for(let s=0;s<r.length;++s){const i=r[s];if(e(i)){const o=i.path;let a;if(i.snap)Vr(t,o)?(a=yr(t,o),n=ho(n,a,i.snap)):Vr(o,t)&&(a=yr(o,t),n=ho(n,yt(),i.snap.getChild(a)));else if(i.children){if(Vr(t,o))a=yr(t,o),n=Kc(n,a,i.children);else if(Vr(o,t))if(a=yr(o,t),rt(a))n=Kc(n,yt(),i.children);else{const l=gi(i.children,tt(a));if(l){const u=l.getChild(Dt(a));n=ho(n,yt(),u)}}}else throw Pi("WriteRecord should have .snap or .children")}}return n}function Vm(r,e,t,n,s){if(!n&&!s){const i=Ks(r.visibleWrites,e);if(i!=null)return i;{const o=cs(r.visibleWrites,e);if(Qc(o))return t;if(t==null&&!Yc(o,yt()))return null;{const a=t||qe.EMPTY_NODE;return yi(o,a)}}}else{const i=cs(r.visibleWrites,e);if(!s&&Qc(i))return t;if(!s&&t==null&&!Yc(i,yt()))return null;{const o=function(u){return(u.visible||s)&&(!n||!~n.indexOf(u.writeId))&&(Vr(u.path,e)||Vr(e,u.path))},a=Bm(r.allWrites,o,e),l=t||qe.EMPTY_NODE;return yi(a,l)}}}function B3(r,e,t){let n=qe.EMPTY_NODE;const s=Ks(r.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(jt,(i,o)=>{n=n.updateImmediateChild(i,o)}),n;if(t){const i=cs(r.visibleWrites,e);return t.forEachChild(jt,(o,a)=>{const l=yi(cs(i,new Ct(o)),a);n=n.updateImmediateChild(o,l)}),Mf(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const i=cs(r.visibleWrites,e);return Mf(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function V3(r,e,t,n,s){te(n||s,"Either existingEventSnap or existingServerSnap must exist");const i=Vt(e,t);if(Yc(r.visibleWrites,i))return null;{const o=cs(r.visibleWrites,i);return Qc(o)?s.getChild(t):yi(o,s.getChild(t))}}function H3(r,e,t,n){const s=Vt(e,t),i=Ks(r.visibleWrites,s);if(i!=null)return i;if(n.isCompleteForChild(t)){const o=cs(r.visibleWrites,s);return yi(o,n.getNode().getImmediateChild(t))}else return null}function W3(r,e){return Ks(r.visibleWrites,e)}function G3(r,e,t,n,s,i,o){let a;const l=cs(r.visibleWrites,e),u=Ks(l,yt());if(u!=null)a=u;else if(t!=null)a=yi(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],m=o.getCompare(),v=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let _=v.getNext();for(;_&&f.length<s;)m(_,n)!==0&&f.push(_),_=v.getNext();return f}else return[]}function K3(){return{visibleWrites:rn.empty(),allWrites:[],lastWriteId:-1}}function Ua(r,e,t,n){return Vm(r.writeTree,r.treePath,e,t,n)}function cu(r,e){return B3(r.writeTree,r.treePath,e)}function zf(r,e,t,n){return V3(r.writeTree,r.treePath,e,t,n)}function Fa(r,e){return W3(r.writeTree,Vt(r.treePath,e))}function Y3(r,e,t,n,s,i){return G3(r.writeTree,r.treePath,e,t,n,s,i)}function du(r,e,t){return H3(r.writeTree,r.treePath,e,t)}function Hm(r,e){return Wm(Vt(r.treePath,e),r.writeTree)}function Wm(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;te(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),te(n!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(n);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,To(n,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,Co(n,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,bi(n,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,To(n,e.snapshotNode,s.oldSnap));else throw Pi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Gm=new J3;class uu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new gs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return du(this.writes_,e,n)}}getChildAfterChild(e,t,n){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Us(this.viewCache_),i=Y3(this.writes_,s,t,1,n,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X3(r){return{filter:r}}function Z3(r,e){te(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),te(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function eE(r,e,t,n,s){const i=new Q3;let o,a;if(t.type===en.OVERWRITE){const u=t;u.source.fromUser?o=Jc(r,e,u.path,u.snap,n,s,i):(te(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!rt(u.path),o=ja(r,e,u.path,u.snap,n,s,a,i))}else if(t.type===en.MERGE){const u=t;u.source.fromUser?o=rE(r,e,u.path,u.children,n,s,i):(te(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Xc(r,e,u.path,u.children,n,s,a,i))}else if(t.type===en.ACK_USER_WRITE){const u=t;u.revert?o=iE(r,e,u.path,n,s,i):o=nE(r,e,u.path,u.affectedTree,n,s,i)}else if(t.type===en.LISTEN_COMPLETE)o=sE(r,e,t.path,n,i);else throw Pi("Unknown operation type: "+t.type);const l=i.getChanges();return tE(e,o,l),{viewCache:o,changes:l}}function tE(r,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const s=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=za(r);(t.length>0||!r.eventCache.isFullyInitialized()||s&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(zm(za(e)))}}function Km(r,e,t,n,s,i){const o=e.eventCache;if(Fa(n,t)!=null)return e;{let a,l;if(rt(t))if(te(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Us(e),f=u instanceof qe?u:qe.EMPTY_NODE,m=cu(n,f);a=r.filter.updateFullNode(e.eventCache.getNode(),m,i)}else{const u=Ua(n,Us(e));a=r.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=tt(t);if(u===".priority"){te(ms(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const m=zf(n,t,f,l);m!=null?a=r.filter.updatePriority(f,m):a=o.getNode()}else{const f=Dt(t);let m;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const v=zf(n,t,o.getNode(),l);v!=null?m=o.getNode().getImmediateChild(u).updateChild(f,v):m=o.getNode().getImmediateChild(u)}else m=du(n,u,e.serverCache);m!=null?a=r.filter.updateChild(o.getNode(),u,m,f,s,i):a=o.getNode()}}return uo(e,a,o.isFullyInitialized()||rt(t),r.filter.filtersNodes())}}function ja(r,e,t,n,s,i,o,a){const l=e.serverCache;let u;const f=o?r.filter:r.filter.getIndexedFilter();if(rt(t))u=f.updateFullNode(l.getNode(),n,null);else if(f.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(t,n);u=f.updateFullNode(l.getNode(),_,null)}else{const _=tt(t);if(!l.isCompleteForPath(t)&&ms(t)>1)return e;const g=Dt(t),k=l.getNode().getImmediateChild(_).updateChild(g,n);_===".priority"?u=f.updatePriority(l.getNode(),k):u=f.updateChild(l.getNode(),_,k,g,Gm,null)}const m=Fm(e,u,l.isFullyInitialized()||rt(t),f.filtersNodes()),v=new uu(s,m,i);return Km(r,m,t,s,v,a)}function Jc(r,e,t,n,s,i,o){const a=e.eventCache;let l,u;const f=new uu(s,e,i);if(rt(t))u=r.filter.updateFullNode(e.eventCache.getNode(),n,o),l=uo(e,u,!0,r.filter.filtersNodes());else{const m=tt(t);if(m===".priority")u=r.filter.updatePriority(e.eventCache.getNode(),n),l=uo(e,u,a.isFullyInitialized(),a.isFiltered());else{const v=Dt(t),_=a.getNode().getImmediateChild(m);let g;if(rt(v))g=n;else{const w=f.getCompleteChild(m);w!=null?Zd(v)===".priority"&&w.getChild(Rm(v)).isEmpty()?g=w:g=w.updateChild(v,n):g=qe.EMPTY_NODE}if(_.equals(g))l=e;else{const w=r.filter.updateChild(a.getNode(),m,g,v,f,o);l=uo(e,w,a.isFullyInitialized(),r.filter.filtersNodes())}}}return l}function Uf(r,e){return r.eventCache.isCompleteForChild(e)}function rE(r,e,t,n,s,i,o){let a=e;return n.foreach((l,u)=>{const f=Vt(t,l);Uf(e,tt(f))&&(a=Jc(r,a,f,u,s,i,o))}),n.foreach((l,u)=>{const f=Vt(t,l);Uf(e,tt(f))||(a=Jc(r,a,f,u,s,i,o))}),a}function Ff(r,e,t){return t.foreach((n,s)=>{e=e.updateChild(n,s)}),e}function Xc(r,e,t,n,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;rt(t)?u=n:u=new $t(null).setTree(t,n);const f=e.serverCache.getNode();return u.children.inorderTraversal((m,v)=>{if(f.hasChild(m)){const _=e.serverCache.getNode().getImmediateChild(m),g=Ff(r,_,v);l=ja(r,l,new Ct(m),g,s,i,o,a)}}),u.children.inorderTraversal((m,v)=>{const _=!e.serverCache.isCompleteForChild(m)&&v.value===null;if(!f.hasChild(m)&&!_){const g=e.serverCache.getNode().getImmediateChild(m),w=Ff(r,g,v);l=ja(r,l,new Ct(m),w,s,i,o,a)}}),l}function nE(r,e,t,n,s,i,o){if(Fa(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(rt(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ja(r,e,t,l.getNode().getChild(t),s,i,a,o);if(rt(t)){let u=new $t(null);return l.getNode().forEachChild(qn,(f,m)=>{u=u.set(new Ct(f),m)}),Xc(r,e,t,u,s,i,a,o)}else return e}else{let u=new $t(null);return n.foreach((f,m)=>{const v=Vt(t,f);l.isCompleteForPath(v)&&(u=u.set(f,l.getNode().getChild(v)))}),Xc(r,e,t,u,s,i,a,o)}}function sE(r,e,t,n,s){const i=e.serverCache,o=Fm(e,i.getNode(),i.isFullyInitialized()||rt(t),i.isFiltered());return Km(r,o,t,n,Gm,s)}function iE(r,e,t,n,s,i){let o;if(Fa(n,t)!=null)return e;{const a=new uu(n,e,s),l=e.eventCache.getNode();let u;if(rt(t)||tt(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Ua(n,Us(e));else{const m=e.serverCache.getNode();te(m instanceof qe,"serverChildren would be complete if leaf node"),f=cu(n,m)}f=f,u=r.filter.updateFullNode(l,f,i)}else{const f=tt(t);let m=du(n,f,e.serverCache);m==null&&e.serverCache.isCompleteForChild(f)&&(m=l.getImmediateChild(f)),m!=null?u=r.filter.updateChild(l,f,m,Dt(t),a,i):e.eventCache.getNode().hasChild(f)?u=r.filter.updateChild(l,f,qe.EMPTY_NODE,Dt(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ua(n,Us(e)),o.isLeafNode()&&(u=r.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Fa(n,yt())!=null,uo(e,u,o,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,s=new su(n.getIndex()),i=b3(n);this.processor_=X3(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(qe.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(qe.EMPTY_NODE,a.getNode(),null),f=new gs(l,o.isFullyInitialized(),s.filtersNodes()),m=new gs(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=vl(m,f),this.eventGenerator_=new R3(this.query_)}get query(){return this.query_}}function aE(r){return r.viewCache_.serverCache.getNode()}function lE(r){return za(r.viewCache_)}function cE(r,e){const t=Us(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!rt(e)&&!t.getImmediateChild(tt(e)).isEmpty())?t.getChild(e):null}function jf(r){return r.eventRegistrations_.length===0}function dE(r,e){r.eventRegistrations_.push(e)}function Bf(r,e,t){const n=[];if(t){te(e==null,"A cancel should cancel all event registrations.");const s=r.query._path;r.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&n.push(o)})}if(e){let s=[];for(let i=0;i<r.eventRegistrations_.length;++i){const o=r.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(r.eventRegistrations_.slice(i+1));break}}r.eventRegistrations_=s}else r.eventRegistrations_=[];return n}function Vf(r,e,t,n){e.type===en.MERGE&&e.source.queryId!==null&&(te(Us(r.viewCache_),"We should always have a full cache before handling merges"),te(za(r.viewCache_),"Missing event cache, even though we have a server cache"));const s=r.viewCache_,i=eE(r.processor_,s,e,t,n);return Z3(r.processor_,i.viewCache),te(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=i.viewCache,Ym(r,i.changes,i.viewCache.eventCache.getNode(),null)}function uE(r,e){const t=r.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(jt,(i,o)=>{n.push(bi(i,o))}),t.isFullyInitialized()&&n.push(zm(t.getNode())),Ym(r,n,t.getNode(),e)}function Ym(r,e,t,n){const s=n?[n]:r.eventRegistrations_;return N3(r.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;class Qm{constructor(){this.views=new Map}}function hE(r){te(!Ba,"__referenceConstructor has already been defined"),Ba=r}function fE(){return te(Ba,"Reference.ts has not been loaded"),Ba}function pE(r){return r.views.size===0}function hu(r,e,t,n){const s=e.source.queryId;if(s!==null){const i=r.views.get(s);return te(i!=null,"SyncTree gave us an op for an invalid query."),Vf(i,e,t,n)}else{let i=[];for(const o of r.views.values())i=i.concat(Vf(o,e,t,n));return i}}function Jm(r,e,t,n,s){const i=e._queryIdentifier,o=r.views.get(i);if(!o){let a=Ua(t,s?n:null),l=!1;a?l=!0:n instanceof qe?(a=cu(t,n),l=!1):(a=qe.EMPTY_NODE,l=!1);const u=vl(new gs(a,l,!1),new gs(n,s,!1));return new oE(e,u)}return o}function vE(r,e,t,n,s,i){const o=Jm(r,e,n,s,i);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,o),dE(o,t),uE(o,t)}function mE(r,e,t,n){const s=e._queryIdentifier,i=[];let o=[];const a=_s(r);if(s==="default")for(const[l,u]of r.views.entries())o=o.concat(Bf(u,t,n)),jf(u)&&(r.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=r.views.get(s);l&&(o=o.concat(Bf(l,t,n)),jf(l)&&(r.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!_s(r)&&i.push(new(fE())(e._repo,e._path)),{removed:i,events:o}}function Xm(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ds(r,e){let t=null;for(const n of r.views.values())t=t||cE(n,e);return t}function Zm(r,e){if(e._queryParams.loadsAllData())return gl(r);{const n=e._queryIdentifier;return r.views.get(n)}}function eg(r,e){return Zm(r,e)!=null}function _s(r){return gl(r)!=null}function gl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va;function gE(r){te(!Va,"__referenceConstructor has already been defined"),Va=r}function _E(){return te(Va,"Reference.ts has not been loaded"),Va}let bE=1;class Hf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $t(null),this.pendingWriteTree_=K3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tg(r,e,t,n,s){return q3(r.pendingWriteTree_,e,t,n,s),s?Li(r,new zs(ou(),e,t)):[]}function wE(r,e,t,n){O3(r.pendingWriteTree_,e,t,n);const s=$t.fromObject(t);return Li(r,new wi(ou(),e,s))}function ss(r,e,t=!1){const n=M3(r.pendingWriteTree_,e);if(z3(r.pendingWriteTree_,e)){let i=new $t(null);return n.snap!=null?i=i.set(yt(),!0):ur(n.children,o=>{i=i.set(new Ct(o),!0)}),Li(r,new Ma(n.path,i,t))}else return[]}function Go(r,e,t){return Li(r,new zs(au(),e,t))}function yE(r,e,t){const n=$t.fromObject(t);return Li(r,new wi(au(),e,n))}function xE(r,e){return Li(r,new Ao(au(),e))}function kE(r,e,t){const n=pu(r,t);if(n){const s=vu(n),i=s.path,o=s.queryId,a=yr(i,e),l=new Ao(lu(o),a);return mu(r,i,l)}else return[]}function Ha(r,e,t,n,s=!1){const i=e._path,o=r.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||eg(o,e))){const l=mE(o,e,t,n);pE(o)&&(r.syncPointTree_=r.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const f=u.findIndex(v=>v._queryParams.loadsAllData())!==-1,m=r.syncPointTree_.findOnPath(i,(v,_)=>_s(_));if(f&&!m){const v=r.syncPointTree_.subtree(i);if(!v.isEmpty()){const _=CE(v);for(let g=0;g<_.length;++g){const w=_[g],k=w.query,I=ig(r,w);r.listenProvider_.startListening(fo(k),Po(r,k),I.hashFn,I.onComplete)}}}!m&&u.length>0&&!n&&(f?r.listenProvider_.stopListening(fo(e),null):u.forEach(v=>{const _=r.queryToTagMap.get(_l(v));r.listenProvider_.stopListening(fo(v),_)}))}TE(r,u)}return a}function rg(r,e,t,n){const s=pu(r,n);if(s!=null){const i=vu(s),o=i.path,a=i.queryId,l=yr(o,e),u=new zs(lu(a),l,t);return mu(r,o,u)}else return[]}function EE(r,e,t,n){const s=pu(r,n);if(s){const i=vu(s),o=i.path,a=i.queryId,l=yr(o,e),u=$t.fromObject(t),f=new wi(lu(a),l,u);return mu(r,o,f)}else return[]}function Zc(r,e,t,n=!1){const s=e._path;let i=null,o=!1;r.syncPointTree_.foreachOnPath(s,(v,_)=>{const g=yr(v,s);i=i||ds(_,g),o=o||_s(_)});let a=r.syncPointTree_.get(s);a?(o=o||_s(a),i=i||ds(a,yt())):(a=new Qm,r.syncPointTree_=r.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=qe.EMPTY_NODE,r.syncPointTree_.subtree(s).foreachChild((_,g)=>{const w=ds(g,yt());w&&(i=i.updateImmediateChild(_,w))}));const u=eg(a,e);if(!u&&!e._queryParams.loadsAllData()){const v=_l(e);te(!r.queryToTagMap.has(v),"View does not exist, but we have a tag");const _=SE();r.queryToTagMap.set(v,_),r.tagToQueryMap.set(_,v)}const f=ml(r.pendingWriteTree_,s);let m=vE(a,e,t,f,i,l);if(!u&&!o&&!n){const v=Zm(a,e);m=m.concat(AE(r,e,v))}return m}function fu(r,e,t){const s=r.pendingWriteTree_,i=r.syncPointTree_.findOnPath(e,(o,a)=>{const l=yr(o,e),u=ds(a,l);if(u)return u});return Vm(s,e,i,t,!0)}function IE(r,e){const t=e._path;let n=null;r.syncPointTree_.foreachOnPath(t,(u,f)=>{const m=yr(u,t);n=n||ds(f,m)});let s=r.syncPointTree_.get(t);s?n=n||ds(s,yt()):(s=new Qm,r.syncPointTree_=r.syncPointTree_.set(t,s));const i=n!=null,o=i?new gs(n,!0,!1):null,a=ml(r.pendingWriteTree_,e._path),l=Jm(s,e,a,i?o.getNode():qe.EMPTY_NODE,i);return lE(l)}function Li(r,e){return ng(e,r.syncPointTree_,null,ml(r.pendingWriteTree_,yt()))}function ng(r,e,t,n){if(rt(r.path))return sg(r,e,t,n);{const s=e.get(yt());t==null&&s!=null&&(t=ds(s,yt()));let i=[];const o=tt(r.path),a=r.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,f=Hm(n,o);i=i.concat(ng(a,l,u,f))}return s&&(i=i.concat(hu(s,r,n,t))),i}}function sg(r,e,t,n){const s=e.get(yt());t==null&&s!=null&&(t=ds(s,yt()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=Hm(n,o),f=r.operationForChild(o);f&&(i=i.concat(sg(f,a,l,u)))}),s&&(i=i.concat(hu(s,r,n,t))),i}function ig(r,e){const t=e.query,n=Po(r,t);return{hashFn:()=>(aE(e)||qe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return n?kE(r,t._path,n):xE(r,t._path);{const i=bk(s,t);return Ha(r,t,null,i)}}}}function Po(r,e){const t=_l(e);return r.queryToTagMap.get(t)}function _l(r){return r._path.toString()+"$"+r._queryIdentifier}function pu(r,e){return r.tagToQueryMap.get(e)}function vu(r){const e=r.indexOf("$");return te(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Ct(r.substr(0,e))}}function mu(r,e,t){const n=r.syncPointTree_.get(e);te(n,"Missing sync point for query tag that we're tracking");const s=ml(r.pendingWriteTree_,e);return hu(n,t,s,null)}function CE(r){return r.fold((e,t,n)=>{if(t&&_s(t))return[gl(t)];{let s=[];return t&&(s=Xm(t)),ur(n,(i,o)=>{s=s.concat(o)}),s}})}function fo(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(_E())(r._repo,r._path):r}function TE(r,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const s=_l(n),i=r.queryToTagMap.get(s);r.queryToTagMap.delete(s),r.tagToQueryMap.delete(i)}}}function SE(){return bE++}function AE(r,e,t){const n=e._path,s=Po(r,e),i=ig(r,t),o=r.listenProvider_.startListening(fo(e),s,i.hashFn,i.onComplete),a=r.syncPointTree_.subtree(n);if(s)te(!_s(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,f,m)=>{if(!rt(u)&&f&&_s(f))return[gl(f).query];{let v=[];return f&&(v=v.concat(Xm(f).map(_=>_.query))),ur(m,(_,g)=>{v=v.concat(g)}),v}});for(let u=0;u<l.length;++u){const f=l[u];r.listenProvider_.stopListening(fo(f),Po(r,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new gu(t)}node(){return this.node_}}class _u{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Vt(this.path_,e);return new _u(this.syncTree_,t)}node(){return fu(this.syncTree_,this.path_)}}const PE=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Wf=function(r,e,t){if(!r||typeof r!="object")return r;if(te(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return RE(r[".sv"],e,t);if(typeof r[".sv"]=="object")return NE(r[".sv"],e);te(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},RE=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:te(!1,"Unexpected server value: "+r)}},NE=function(r,e,t){r.hasOwnProperty("increment")||te(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const n=r.increment;typeof n!="number"&&te(!1,"Unexpected increment value: "+n);const s=e.node();if(te(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return n;const o=s.getValue();return typeof o!="number"?n:o+n},og=function(r,e,t,n){return bu(e,new _u(t,r),n)},ag=function(r,e,t){return bu(r,new gu(e),t)};function bu(r,e,t){const n=r.getPriority().val(),s=Wf(n,e.getImmediateChild(".priority"),t);let i;if(r.isLeafNode()){const o=r,a=Wf(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new sr(a,Zt(s)):r}else{const o=r;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new sr(s))),o.forEachChild(jt,(a,l)=>{const u=bu(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function yu(r,e){let t=e instanceof Ct?e:new Ct(e),n=r,s=tt(t);for(;s!==null;){const i=gi(n.node.children,s)||{children:{},childCount:0};n=new wu(s,n,i),t=Dt(t),s=tt(t)}return n}function $i(r){return r.node.value}function lg(r,e){r.node.value=e,ed(r)}function cg(r){return r.node.childCount>0}function LE(r){return $i(r)===void 0&&!cg(r)}function bl(r,e){ur(r.node.children,(t,n)=>{e(new wu(t,r,n))})}function dg(r,e,t,n){t&&e(r),bl(r,s=>{dg(s,e,!0)})}function $E(r,e,t){let n=r.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function Ko(r){return new Ct(r.parent===null?r.name:Ko(r.parent)+"/"+r.name)}function ed(r){r.parent!==null&&DE(r.parent,r.name,r)}function DE(r,e,t){const n=LE(t),s=bn(r.node.children,e);n&&s?(delete r.node.children[e],r.node.childCount--,ed(r)):!n&&!s&&(r.node.children[e]=t.node,r.node.childCount++,ed(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=/[\[\].#$\/\u0000-\u001F\u007F]/,OE=/[\[\].#$\u0000-\u001F\u007F]/,pc=10*1024*1024,xu=function(r){return typeof r=="string"&&r.length!==0&&!qE.test(r)},ug=function(r){return typeof r=="string"&&r.length!==0&&!OE.test(r)},ME=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),ug(r)},td=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Kd(r)||r&&typeof r=="object"&&bn(r,".sv")},Di=function(r,e,t,n){n&&e===void 0||wl(ll(r,"value"),e,t)},wl=function(r,e,t){const n=t instanceof Ct?new Zk(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+Is(n));if(typeof e=="function")throw new Error(r+"contains a function "+Is(n)+" with contents = "+e.toString());if(Kd(e))throw new Error(r+"contains "+e.toString()+" "+Is(n));if(typeof e=="string"&&e.length>pc/3&&cl(e)>pc)throw new Error(r+"contains a string greater than "+pc+" utf8 bytes "+Is(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(ur(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!xu(o)))throw new Error(r+" contains an invalid key ("+o+") "+Is(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);e3(n,o),wl(r,a,n),t3(n)}),s&&i)throw new Error(r+' contains ".value" child '+Is(n)+" in addition to actual children.")}},zE=function(r,e){let t,n;for(t=0;t<e.length;t++){n=e[t];const i=Io(n);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!xu(i[o]))throw new Error(r+"contains an invalid key ("+i[o]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Xk);let s=null;for(t=0;t<e.length;t++){if(n=e[t],s!==null&&Vr(s,n))throw new Error(r+"contains a path "+s.toString()+" that is ancestor of another path "+n.toString());s=n}},UE=function(r,e,t,n){const s=ll(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];ur(e,(o,a)=>{const l=new Ct(o);if(wl(s,a,Vt(t,l)),Zd(l)===".priority"&&!td(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),zE(s,i)},ku=function(r,e,t,n){if(!ug(t))throw new Error(ll(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},FE=function(r,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ku(r,e,t)},Eu=function(r,e){if(tt(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},jE=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ME(t))throw new Error(ll(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yl(r,e){let t=null;for(let n=0;n<e.length;n++){const s=e[n],i=s.getPath();t!==null&&!eu(i,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&r.eventLists_.push(t)}function hg(r,e,t){yl(r,t),fg(r,n=>eu(n,e))}function Gr(r,e,t){yl(r,t),fg(r,n=>Vr(n,e)||Vr(e,n))}function fg(r,e){r.recursionDepth_++;let t=!0;for(let n=0;n<r.eventLists_.length;n++){const s=r.eventLists_[n];if(s){const i=s.path;e(i)?(VE(r.eventLists_[n]),r.eventLists_[n]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function VE(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const n=t.getEventRunner();lo&&lr("event: "+t.toString()),Ni(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="repo_interrupt",WE=25;class GE{constructor(e,t,n,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oa(),this.transactionQueueTree_=new wu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KE(r,e,t){if(r.stats_=Jd(r.repoInfo_),r.forceRestClient_||kk())r.server_=new qa(r.repoInfo_,(n,s,i,o)=>{Gf(r,n,s,i,o)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Kf(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{er(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}r.persistentConnection_=new Dn(r.repoInfo_,e,(n,s,i,o)=>{Gf(r,n,s,i,o)},n=>{Kf(r,n)},n=>{YE(r,n)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(n=>{r.server_.refreshAuthToken(n)}),r.appCheckProvider_.addTokenChangeListener(n=>{r.server_.refreshAppCheckToken(n.token)}),r.statsReporter_=Sk(r.repoInfo_,()=>new P3(r.stats_,r.server_)),r.infoData_=new I3,r.infoSyncTree_=new Hf({startListening:(n,s,i,o)=>{let a=[];const l=r.infoData_.getNode(n._path);return l.isEmpty()||(a=Go(r.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Iu(r,"connected",!1),r.serverSyncTree_=new Hf({startListening:(n,s,i,o)=>(r.server_.listen(n,i,s,(a,l)=>{const u=o(a,l);Gr(r.eventQueue_,n._path,u)}),[]),stopListening:(n,s)=>{r.server_.unlisten(n,s)}})}function pg(r){const t=r.infoData_.getNode(new Ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function xl(r){return PE({timestamp:pg(r)})}function Gf(r,e,t,n,s){r.dataUpdateCount++;const i=new Ct(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(n){const l=Ia(t,u=>Zt(u));o=EE(r.serverSyncTree_,i,l,s)}else{const l=Zt(t);o=rg(r.serverSyncTree_,i,l,s)}else if(n){const l=Ia(t,u=>Zt(u));o=yE(r.serverSyncTree_,i,l)}else{const l=Zt(t);o=Go(r.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=xi(r,i)),Gr(r.eventQueue_,a,o)}function Kf(r,e){Iu(r,"connected",e),e===!1&&ZE(r)}function YE(r,e){ur(e,(t,n)=>{Iu(r,t,n)})}function Iu(r,e,t){const n=new Ct("/.info/"+e),s=Zt(t);r.infoData_.updateSnapshot(n,s);const i=Go(r.infoSyncTree_,n,s);Gr(r.eventQueue_,n,i)}function Cu(r){return r.nextWriteId_++}function QE(r,e,t){const n=IE(r.serverSyncTree_,e);return n!=null?Promise.resolve(n):r.server_.get(e).then(s=>{const i=Zt(s).withIndex(e._queryParams.getIndex());Zc(r.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Go(r.serverSyncTree_,e._path,i);else{const a=Po(r.serverSyncTree_,e);o=rg(r.serverSyncTree_,e._path,i,a)}return Gr(r.eventQueue_,e._path,o),Ha(r.serverSyncTree_,e,t,null,!0),i},s=>(Yo(r,"get for query "+er(e)+" failed: "+s),Promise.reject(new Error(s))))}function JE(r,e,t,n,s){Yo(r,"set",{path:e.toString(),value:t,priority:n});const i=xl(r),o=Zt(t,n),a=fu(r.serverSyncTree_,e),l=ag(o,a,i),u=Cu(r),f=tg(r.serverSyncTree_,e,l,u,!0);yl(r.eventQueue_,f),r.server_.put(e.toString(),o.val(!0),(v,_)=>{const g=v==="ok";g||xr("set at "+e+" failed: "+v);const w=ss(r.serverSyncTree_,u,!g);Gr(r.eventQueue_,e,w),nd(r,s,v,_)});const m=Su(r,e);xi(r,m),Gr(r.eventQueue_,m,[])}function XE(r,e,t,n){Yo(r,"update",{path:e.toString(),value:t});let s=!0;const i=xl(r),o={};if(ur(t,(a,l)=>{s=!1,o[a]=og(Vt(e,a),Zt(l),r.serverSyncTree_,i)}),s)lr("update() called with empty data.  Don't do anything."),nd(r,n,"ok",void 0);else{const a=Cu(r),l=wE(r.serverSyncTree_,e,o,a);yl(r.eventQueue_,l),r.server_.merge(e.toString(),t,(u,f)=>{const m=u==="ok";m||xr("update at "+e+" failed: "+u);const v=ss(r.serverSyncTree_,a,!m),_=v.length>0?xi(r,e):e;Gr(r.eventQueue_,_,v),nd(r,n,u,f)}),ur(t,u=>{const f=Su(r,Vt(e,u));xi(r,f)}),Gr(r.eventQueue_,e,[])}}function ZE(r){Yo(r,"onDisconnectEvents");const e=xl(r),t=Oa();Gc(r.onDisconnect_,yt(),(s,i)=>{const o=og(s,i,r.serverSyncTree_,e);Um(t,s,o)});let n=[];Gc(t,yt(),(s,i)=>{n=n.concat(Go(r.serverSyncTree_,s,i));const o=Su(r,s);xi(r,o)}),r.onDisconnect_=Oa(),Gr(r.eventQueue_,yt(),n)}function e5(r,e,t){let n;tt(e._path)===".info"?n=Zc(r.infoSyncTree_,e,t):n=Zc(r.serverSyncTree_,e,t),hg(r.eventQueue_,e._path,n)}function rd(r,e,t){let n;tt(e._path)===".info"?n=Ha(r.infoSyncTree_,e,t):n=Ha(r.serverSyncTree_,e,t),hg(r.eventQueue_,e._path,n)}function t5(r){r.persistentConnection_&&r.persistentConnection_.interrupt(HE)}function Yo(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),lr(t,...e)}function nd(r,e,t,n){e&&Ni(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;n&&(i+=": "+n);const o=new Error(i);o.code=s,e(o)}})}function vg(r,e,t){return fu(r.serverSyncTree_,e,t)||qe.EMPTY_NODE}function Tu(r,e=r.transactionQueueTree_){if(e||kl(r,e),$i(e)){const t=gg(r,e);te(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&r5(r,Ko(e),t)}else cg(e)&&bl(e,t=>{Tu(r,t)})}function r5(r,e,t){const n=t.map(u=>u.currentWriteId),s=vg(r,e,n);let i=s;const o=s.hash();for(let u=0;u<t.length;u++){const f=t[u];te(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const m=yr(e,f.path);i=i.updateChild(m,f.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;r.server_.put(l.toString(),a,u=>{Yo(r,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const m=[];for(let v=0;v<t.length;v++)t[v].status=2,f=f.concat(ss(r.serverSyncTree_,t[v].currentWriteId)),t[v].onComplete&&m.push(()=>t[v].onComplete(null,!0,t[v].currentOutputSnapshotResolved)),t[v].unwatcher();kl(r,yu(r.transactionQueueTree_,e)),Tu(r,r.transactionQueueTree_),Gr(r.eventQueue_,e,f);for(let v=0;v<m.length;v++)Ni(m[v])}else{if(u==="datastale")for(let m=0;m<t.length;m++)t[m].status===3?t[m].status=4:t[m].status=0;else{xr("transaction at "+l.toString()+" failed: "+u);for(let m=0;m<t.length;m++)t[m].status=4,t[m].abortReason=u}xi(r,e)}},o)}function xi(r,e){const t=mg(r,e),n=Ko(t),s=gg(r,t);return n5(r,s,n),n}function n5(r,e,t){if(e.length===0)return;const n=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=yr(t,l.path);let f=!1,m;if(te(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,m=l.abortReason,s=s.concat(ss(r.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=WE)f=!0,m="maxretry",s=s.concat(ss(r.serverSyncTree_,l.currentWriteId,!0));else{const v=vg(r,l.path,o);l.currentInputSnapshot=v;const _=e[a].update(v.val());if(_!==void 0){wl("transaction failed: Data returned ",_,l.path);let g=Zt(_);typeof _=="object"&&_!=null&&bn(_,".priority")||(g=g.updatePriority(v.getPriority()));const k=l.currentWriteId,I=xl(r),P=ag(g,v,I);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=P,l.currentWriteId=Cu(r),o.splice(o.indexOf(k),1),s=s.concat(tg(r.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),s=s.concat(ss(r.serverSyncTree_,k,!0))}else f=!0,m="nodata",s=s.concat(ss(r.serverSyncTree_,l.currentWriteId,!0))}Gr(r.eventQueue_,t,s),s=[],f&&(e[a].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(m==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(m),!1,null))))}kl(r,r.transactionQueueTree_);for(let a=0;a<n.length;a++)Ni(n[a]);Tu(r,r.transactionQueueTree_)}function mg(r,e){let t,n=r.transactionQueueTree_;for(t=tt(e);t!==null&&$i(n)===void 0;)n=yu(n,t),e=Dt(e),t=tt(e);return n}function gg(r,e){const t=[];return _g(r,e,t),t.sort((n,s)=>n.order-s.order),t}function _g(r,e,t){const n=$i(e);if(n)for(let s=0;s<n.length;s++)t.push(n[s]);bl(e,s=>{_g(r,s,t)})}function kl(r,e){const t=$i(e);if(t){let n=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[n]=t[s],n++);t.length=n,lg(e,t.length>0?t:void 0)}bl(e,n=>{kl(r,n)})}function Su(r,e){const t=Ko(mg(r,e)),n=yu(r.transactionQueueTree_,e);return $E(n,s=>{vc(r,s)}),vc(r,n),dg(n,s=>{vc(r,s)}),t}function vc(r,e){const t=$i(e);if(t){const n=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(te(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(te(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(ss(r.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?lg(e,void 0):t.length=i+1,Gr(r.eventQueue_,Ko(e),s);for(let o=0;o<n.length;o++)Ni(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s5(r){let e="";const t=r.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let s=t[n];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function i5(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):xr(`Invalid query segment '${t}' in query '${r}'`)}return e}const Yf=function(r,e){const t=o5(r),n=t.namespace;t.domain==="firebase.com"&&Bn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||pk();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new xm(t.host,t.secure,n,s,e,"",n!==t.subdomain),path:new Ct(t.pathString)}},o5=function(r){let e="",t="",n="",s="",i="",o=!0,a="https",l=443;if(typeof r=="string"){let u=r.indexOf("//");u>=0&&(a=r.substring(0,u-1),r=r.substring(u+2));let f=r.indexOf("/");f===-1&&(f=r.length);let m=r.indexOf("?");m===-1&&(m=r.length),e=r.substring(0,Math.min(f,m)),f<m&&(s=s5(r.substring(f,m)));const v=i5(r.substring(Math.min(r.length,m)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const g=e.indexOf(".");n=e.substring(0,g).toLowerCase(),t=e.substring(g+1),i=n}"ns"in v&&(i=v.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",a5=(function(){let r=0;const e=[];return function(t){const n=t===r;r=t;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Qf.charAt(t%64),t=Math.floor(t/64);te(t===0,"Cannot push at time == 0");let o=i.join("");if(n){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Qf.charAt(e[s]);return te(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,t,n,s){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+er(this.snapshot.exportVal())}}class wg{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return te(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n,s){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=s}get key(){return rt(this._path)?null:Zd(this._path)}get ref(){return new xn(this._repo,this._path)}get _queryIdentifier(){const e=Df(this._queryParams),t=Yd(e);return t==="{}"?"default":t}get _queryObject(){return Df(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof yn))return!1;const t=this._repo===e._repo,n=eu(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&n&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Jk(this._path)}}function l5(r,e){if(r._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Qo(r){let e=null,t=null;if(r.hasStart()&&(e=r.getIndexStartValue()),r.hasEnd()&&(t=r.getIndexEndValue()),r.getIndex()===qn){const n="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(r.hasStart()){if(r.getIndexStartName()!==vs)throw new Error(n);if(typeof e!="string")throw new Error(s)}if(r.hasEnd()){if(r.getIndexEndName()!==Vn)throw new Error(n);if(typeof t!="string")throw new Error(s)}}else if(r.getIndex()===jt){if(e!=null&&!td(e)||t!=null&&!td(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(te(r.getIndex()instanceof nu||r.getIndex()===Mm,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function El(r){if(r.hasStart()&&r.hasEnd()&&r.hasLimit()&&!r.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class xn extends yn{constructor(e,t){super(e,t,new iu,!1)}get parent(){const e=Rm(this._path);return e===null?null:new xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ki{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ct(e),n=Ei(this.ref,e);return new ki(this._node.getChild(t),n,jt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,s)=>e(new ki(s,Ei(this.ref,n),jt)))}hasChild(e){const t=new Ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Lt(r,e){return r=Mt(r),r._checkNotDeleted("ref"),e!==void 0?Ei(r._root,e):r._root}function Ei(r,e){return r=Mt(r),tt(r._path)===null?FE("child","path",e):ku("child","path",e),new xn(r._repo,Vt(r._path,e))}function Ro(r,e){r=Mt(r),Eu("push",r._path),Di("push",e,r._path,!0);const t=pg(r._repo),n=a5(t),s=Ei(r,n),i=Ei(r,n);let o;return e!=null?o=xg(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function c5(r){return Eu("remove",r._path),xg(r,null)}function xg(r,e){r=Mt(r),Eu("set",r._path),Di("set",e,r._path,!1);const t=new Mo;return JE(r._repo,r._path,e,null,t.wrapCallback(()=>{})),t.promise}function ks(r,e){UE("update",e,r._path);const t=new Mo;return XE(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}function gn(r){r=Mt(r);const e=new yg(()=>{}),t=new Il(e);return QE(r._repo,r,t).then(n=>new ki(n,new xn(r._repo,r._path),r._queryParams.getIndex()))}class Il{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new bg("value",this,new ki(e.snapshotNode,new xn(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wg(this,e,t):null}matches(e){return e instanceof Il?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Au{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wg(this,e,t):null}createEvent(e,t){te(e.childName!=null,"Child events should have a childName.");const n=Ei(new xn(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new bg(e.type,this,new ki(e.snapshotNode,n,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Au?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Pu(r,e,t,n,s){let i;if(typeof n=="object"&&(i=void 0,s=n),typeof n=="function"&&(i=n),s&&s.onlyOnce){const l=t,u=(f,m)=>{rd(r._repo,r,a),l(f,m)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new yg(t,i||void 0),a=e==="value"?new Il(o):new Au(e,o);return e5(r._repo,r,a),()=>rd(r._repo,r,a)}function Jo(r,e,t,n){return Pu(r,"value",e,t,n)}function d5(r,e,t,n){return Pu(r,"child_added",e,t,n)}function u5(r,e,t,n){return Pu(r,"child_removed",e,t,n)}function Ru(r,e,t){rd(r._repo,r,null)}class Ys{}class h5 extends Ys{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){Di("endAt",this._value,e._path,!0);const t=Wc(e._queryParams,this._value,this._key);if(El(t),Qo(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new yn(e._repo,e._path,t,e._orderByCalled)}}function As(r,e){return new h5(r,e)}class f5 extends Ys{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){Di("endBefore",this._value,e._path,!1);const t=k3(e._queryParams,this._value,this._key);if(El(t),Qo(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new yn(e._repo,e._path,t,e._orderByCalled)}}function Jf(r,e){return new f5(r,e)}class p5 extends Ys{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){Di("startAt",this._value,e._path,!0);const t=Hc(e._queryParams,this._value,this._key);if(El(t),Qo(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new yn(e._repo,e._path,t,e._orderByCalled)}}function Kr(r=null,e){return new p5(r,e)}class v5 extends Ys{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){Di("startAfter",this._value,e._path,!1);const t=x3(e._queryParams,this._value,this._key);if(El(t),Qo(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new yn(e._repo,e._path,t,e._orderByCalled)}}function Xf(r,e){return new v5(r,e)}class m5 extends Ys{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new yn(e._repo,e._path,w3(e._queryParams,this._limit),e._orderByCalled)}}function sa(r){if(typeof r!="number"||Math.floor(r)!==r||r<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new m5(r)}class g5 extends Ys{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new yn(e._repo,e._path,y3(e._queryParams,this._limit),e._orderByCalled)}}function ia(r){if(typeof r!="number"||Math.floor(r)!==r||r<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new g5(r)}class _5 extends Ys{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){l5(e,"orderByChild");const t=new Ct(this._path);if(rt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new nu(t),s=E3(e._queryParams,n);return Qo(s),new yn(e._repo,e._path,s,!0)}}function gr(r){if(r==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(r==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(r==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ku("orderByChild","path",r),new _5(r)}function _r(r,...e){let t=Mt(r);for(const n of e)t=n._apply(t);return t}hE(xn);gE(xn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b5="FIREBASE_DATABASE_EMULATOR_HOST",sd={};let w5=!1;function y5(r,e,t,n){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=ys(i);r.repoInfo_=new xm(e,o,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(r.authTokenProvider_=n)}function x5(r,e,t,n,s){let i=n||r.options.databaseURL;i===void 0&&(r.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lr("Using default host for project ",r.options.projectId),i=`${r.options.projectId}-default-rtdb.firebaseio.com`);let o=Yf(i,s),a=o.repoInfo,l;typeof process<"u"&&gf&&(l=gf[b5]),l?(i=`http://${l}?ns=${a.namespace}`,o=Yf(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new Ik(r.name,r.options,e);jE("Invalid Firebase Database URL",o),rt(o.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=E5(a,r,u,new Ek(r,t));return new I5(f,r)}function k5(r,e){const t=sd[e];(!t||t[r.key]!==r)&&Bn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),t5(r),delete t[r.key]}function E5(r,e,t,n){let s=sd[e.name];s||(s={},sd[e.name]=s);let i=s[r.toURLString()];return i&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new GE(r,w5,t,n),s[r.toURLString()]=i,i}class I5{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xn(this._repo,yt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(k5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function C5(r=Od(),e){const t=dl(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=fv("database");n&&T5(t,...n)}return t}function T5(r,e,t,n={}){r=Mt(r),r._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=r._repoInternal;if(r._instanceStarted){if(s===r._repoInternal.repoInfo_.host&&Ds(n,i.repoInfo_.emulatorOptions))return;Bn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)n.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new fa(fa.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:mv(n.mockUserToken,r.app.options.projectId);o=new fa(a)}ys(e)&&(Nd(e),Ld("Database",!0)),y5(i,s,n,o)}/**
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
 */function S5(r){lk(Ws),qs(new ps("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return x5(n,s,i,t)},"PUBLIC").setMultipleInstances(!0)),fn(_f,bf,r),fn(_f,bf,"esm2020")}Dn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Dn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};S5();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="firebasestorage.googleapis.com",Eg="storageBucket",A5=120*1e3,P5=600*1e3,R5=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Yn{constructor(e,t,n=0){super(mc(e),`Firebase Storage: ${t} (${mc(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qt||(qt={}));function mc(r){return"storage/"+r}function Nu(){const r="An unknown error occurred, please check the error payload for server response.";return new Bt(qt.UNKNOWN,r)}function N5(r){return new Bt(qt.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function L5(r){return new Bt(qt.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $5(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Bt(qt.UNAUTHENTICATED,r)}function D5(){return new Bt(qt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function q5(r){return new Bt(qt.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function Ig(){return new Bt(qt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Cg(){return new Bt(qt.CANCELED,"User canceled the upload/download.")}function O5(r){return new Bt(qt.INVALID_URL,"Invalid URL '"+r+"'.")}function M5(r){return new Bt(qt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function z5(){return new Bt(qt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Eg+"' property when initializing the app?")}function Tg(){return new Bt(qt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function U5(){return new Bt(qt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function F5(){return new Bt(qt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function j5(r){return new Bt(qt.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function id(r){return new Bt(qt.INVALID_ARGUMENT,r)}function Sg(){return new Bt(qt.APP_DELETED,"The Firebase app was deleted.")}function B5(r){return new Bt(qt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function po(r,e){return new Bt(qt.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Wi(r){throw new Bt(qt.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Or.makeFromUrl(e,t)}catch{return new Or(e,"")}if(n.path==="")return n;throw M5(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",_=new RegExp(`^https?://${m}/${f}/b/${s}/o${v}`,"i"),g={bucket:1,path:3},w=t===kg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",I=new RegExp(`^https?://${w}/${s}/${k}`,"i"),L=[{regex:a,indices:l,postModify:i},{regex:_,indices:g,postModify:u},{regex:I,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<L.length;N++){const M=L[N],S=M.regex.exec(e);if(S){const A=S[M.indices.bucket];let C=S[M.indices.path];C||(C=""),n=new Or(A,C),M.postModify(n);break}}if(n==null)throw O5(e);return n}}class V5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H5(r,e,t){let n=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function m(k){s=setTimeout(()=>{s=null,r(_,l())},k)}function v(){i&&clearTimeout(i)}function _(k,...I){if(u){v();return}if(k){v(),f.call(null,k,...I);return}if(l()||o){v(),f.call(null,k,...I);return}n<64&&(n*=2);let L;a===1?(a=2,L=0):L=(n+Math.random())*1e3,m(L)}let g=!1;function w(k){g||(g=!0,v(),!u&&(s!==null?(k||(a=2),clearTimeout(s),m(0)):k||(a=1)))}return m(0),i=setTimeout(()=>{o=!0,w(!0)},t),w}function W5(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G5(r){return r!==void 0}function K5(r){return typeof r=="function"}function Y5(r){return typeof r=="object"&&!Array.isArray(r)}function Cl(r){return typeof r=="string"||r instanceof String}function Zf(r){return Lu()&&r instanceof Blob}function Lu(){return typeof Blob<"u"}function ep(r,e,t,n){if(n<e)throw id(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw id(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(r,e,t){let n=e;return t==null&&(n=`https://${e}`),`${t}://${n}/v0${r}`}function Ag(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ns;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ns||(Ns={}));/**
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
 */function Pg(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q5{constructor(e,t,n,s,i,o,a,l,u,f,m,v=!0,_=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=m,this.retry=v,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new oa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ns.NO_ERROR,l=i.getStatus();if(!a||Pg(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ns.ABORT;n(!1,new oa(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;n(!0,new oa(u,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());G5(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Nu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Sg():Cg();o(l)}else{const l=Ig();o(l)}};this.canceled_?t(!1,new oa(!1,null,!0)):this.backoffId_=H5(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&W5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oa{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function J5(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function X5(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Z5(r,e){e&&(r["X-Firebase-GMPID"]=e)}function eI(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function tI(r,e,t,n,s,i,o=!0,a=!1){const l=Ag(r.urlParams),u=r.url+l,f=Object.assign({},r.headers);return Z5(f,e),J5(f,t),X5(f,i),eI(f,n),new Q5(u,r.method,f,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nI(...r){const e=rI();if(e!==void 0){const t=new e;for(let n=0;n<r.length;n++)t.append(r[n]);return t.getBlob()}else{if(Lu())return new Blob(r);throw new Bt(qt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sI(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function iI(r){if(typeof atob>"u")throw j5("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gc{constructor(e,t){this.data=e,this.contentType=t||null}}function oI(r,e){switch(r){case dn.RAW:return new gc(Rg(e));case dn.BASE64:case dn.BASE64URL:return new gc(Ng(r,e));case dn.DATA_URL:return new gc(lI(e),cI(e))}throw Nu()}function Rg(r){const e=[];for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=n,o=r.charCodeAt(++t);n=65536|(i&1023)<<10|o&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function aI(r){let e;try{e=decodeURIComponent(r)}catch{throw po(dn.DATA_URL,"Malformed data URL.")}return Rg(e)}function Ng(r,e){switch(r){case dn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw po(r,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case dn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw po(r,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=iI(e)}catch(s){throw s.message.includes("polyfill")?s:po(r,"Invalid character found")}const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}class Lg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw po(dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;n!=null&&(this.base64=dI(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function lI(r){const e=new Lg(r);return e.base64?Ng(dn.BASE64,e.rest):aI(e.rest)}function cI(r){return new Lg(r).contentType}function dI(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t){let n=0,s="";Zf(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Zf(this.data_)){const n=this.data_,s=sI(n,e,t);return s===null?null:new Cn(s)}else{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Cn(n,!0)}}static getBlob(...e){if(Lu()){const t=e.map(n=>n instanceof Cn?n.data_:n);return new Cn(nI.apply(null,t))}else{const t=e.map(o=>Cl(o)?oI(dn.RAW,o).data:o.data_);let n=0;t.forEach(o=>{n+=o.byteLength});const s=new Uint8Array(n);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Cn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(r){let e;try{e=JSON.parse(r)}catch{return null}return Y5(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function hI(r,e){const t=e.split("/").filter(n=>n.length>0).join("/");return r.length===0?t:r+"/"+t}function Dg(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(r,e){return e}class mr{constructor(e,t,n,s){this.server=e,this.local=t||e,this.writable=!!n,this.xform=s||fI}}let aa=null;function pI(r){return!Cl(r)||r.length<2?r:Dg(r)}function $u(){if(aa)return aa;const r=[];r.push(new mr("bucket")),r.push(new mr("generation")),r.push(new mr("metageneration")),r.push(new mr("name","fullPath",!0));function e(i,o){return pI(o)}const t=new mr("name");t.xform=e,r.push(t);function n(i,o){return o!==void 0?Number(o):o}const s=new mr("size");return s.xform=n,r.push(s),r.push(new mr("timeCreated")),r.push(new mr("updated")),r.push(new mr("md5Hash",null,!0)),r.push(new mr("cacheControl",null,!0)),r.push(new mr("contentDisposition",null,!0)),r.push(new mr("contentEncoding",null,!0)),r.push(new mr("contentLanguage",null,!0)),r.push(new mr("contentType",null,!0)),r.push(new mr("metadata","customMetadata",!0)),aa=r,aa}function vI(r,e){function t(){const n=r.bucket,s=r.fullPath,i=new Or(n,s);return e._makeStorageReference(i)}Object.defineProperty(r,"ref",{get:t})}function mI(r,e,t){const n={};n.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];n[o.local]=o.xform(n,e[o.server])}return vI(n,r),n}function qg(r,e,t){const n=$g(e);return n===null?null:mI(r,n,t)}function gI(r,e,t,n){const s=$g(e);if(s===null||!Cl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=r.bucket,m=r.fullPath,v="/b/"+o(f)+"/o/"+o(m),_=qi(v,t,n),g=Ag({alt:"media",token:u});return _+g})[0]}function Og(r,e){const t={},n=e.length;for(let s=0;s<n;s++){const i=e[s];i.writable&&(t[i.server]=r[i.local])}return JSON.stringify(t)}class Qs{constructor(e,t,n,s){this.url=e,this.method=t,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(r){if(!r)throw Nu()}function Du(r,e){function t(n,s){const i=qg(r,s,e);return On(i!==null),i}return t}function _I(r,e){function t(n,s){const i=qg(r,s,e);return On(i!==null),gI(i,s,r.host,r._protocol)}return t}function Xo(r){function e(t,n){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=D5():s=$5():t.getStatus()===402?s=L5(r.bucket):t.getStatus()===403?s=q5(r.path):s=n,s.status=t.getStatus(),s.serverResponse=n.serverResponse,s}return e}function qu(r){const e=Xo(r);function t(n,s){let i=e(n,s);return n.getStatus()===404&&(i=N5(r.path)),i.serverResponse=s.serverResponse,i}return t}function bI(r,e,t){const n=e.fullServerUrl(),s=qi(n,r.host,r._protocol),i="GET",o=r.maxOperationRetryTime,a=new Qs(s,i,Du(r,t),o);return a.errorHandler=qu(e),a}function wI(r,e,t){const n=e.fullServerUrl(),s=qi(n,r.host,r._protocol),i="GET",o=r.maxOperationRetryTime,a=new Qs(s,i,_I(r,t),o);return a.errorHandler=qu(e),a}function yI(r,e){const t=e.fullServerUrl(),n=qi(t,r.host,r._protocol),s="DELETE",i=r.maxOperationRetryTime;function o(l,u){}const a=new Qs(n,s,o,i);return a.successCodes=[200,204],a.errorHandler=qu(e),a}function xI(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function Mg(r,e,t){const n=Object.assign({},t);return n.fullPath=r.path,n.size=e.size(),n.contentType||(n.contentType=xI(null,e)),n}function zg(r,e,t,n,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let L="";for(let N=0;N<2;N++)L=L+Math.random().toString().slice(2);return L}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Mg(e,n,s),f=Og(u,t),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,v=`\r
--`+l+"--",_=Cn.getBlob(m,n,v);if(_===null)throw Tg();const g={name:u.fullPath},w=qi(i,r.host,r._protocol),k="POST",I=r.maxUploadRetryTime,P=new Qs(w,k,Du(r,t),I);return P.urlParams=g,P.headers=o,P.body=_.uploadData(),P.errorHandler=Xo(e),P}class Wa{constructor(e,t,n,s){this.current=e,this.total=t,this.finalized=!!n,this.metadata=s||null}}function Ou(r,e){let t=null;try{t=r.getResponseHeader("X-Goog-Upload-Status")}catch{On(!1)}return On(!!t&&(e||["active"]).indexOf(t)!==-1),t}function kI(r,e,t,n,s){const i=e.bucketOnlyServerUrl(),o=Mg(e,n,s),a={name:o.fullPath},l=qi(i,r.host,r._protocol),u="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=Og(o,t),v=r.maxUploadRetryTime;function _(w){Ou(w);let k;try{k=w.getResponseHeader("X-Goog-Upload-URL")}catch{On(!1)}return On(Cl(k)),k}const g=new Qs(l,u,_,v);return g.urlParams=a,g.headers=f,g.body=m,g.errorHandler=Xo(e),g}function EI(r,e,t,n){const s={"X-Goog-Upload-Command":"query"};function i(u){const f=Ou(u,["active","final"]);let m=null;try{m=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{On(!1)}m||On(!1);const v=Number(m);return On(!isNaN(v)),new Wa(v,n.size(),f==="final")}const o="POST",a=r.maxUploadRetryTime,l=new Qs(t,o,i,a);return l.headers=s,l.errorHandler=Xo(e),l}const tp=256*1024;function II(r,e,t,n,s,i,o,a){const l=new Wa(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=n.size()),n.size()!==l.total)throw U5();const u=l.total-l.current;let f=u;s>0&&(f=Math.min(f,s));const m=l.current,v=m+f;let _="";f===0?_="finalize":u===f?_="upload, finalize":_="upload";const g={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":`${l.current}`},w=n.slice(m,v);if(w===null)throw Tg();function k(N,M){const S=Ou(N,["active","final"]),A=l.current+f,C=n.size();let E;return S==="final"?E=Du(e,i)(N,M):E=null,new Wa(A,C,S==="final",E)}const I="POST",P=e.maxUploadRetryTime,L=new Qs(t,I,k,P);return L.headers=g,L.body=w.uploadData(),L.progressCallback=a||null,L.errorHandler=Xo(r),L}const Cr={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function _c(r){switch(r){case"running":case"pausing":case"canceling":return Cr.RUNNING;case"paused":return Cr.PAUSED;case"success":return Cr.SUCCESS;case"canceled":return Cr.CANCELED;case"error":return Cr.ERROR;default:return Cr.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t,n){if(K5(e)||t!=null||n!=null)this.next=e,this.error=t??void 0,this.complete=n??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(r){return(...e)=>{Promise.resolve().then(()=>r(...e))}}class TI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ns.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ns.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ns.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,s,i){if(this.sent_)throw Wi("cannot .send() more than once");if(ys(e)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class SI extends TI{initXhr(){this.xhr_.responseType="text"}}function rs(){return new SI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=$u(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(qt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Pg(s.status,[]))if(i)s=Ig();else{this.sleepTime=Math.max(this.sleepTime*2,R5),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(qt.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=kI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,rs,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const s=EI(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,rs,t,n);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=tp*this._chunkMultiplier,t=new Wa(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=II(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,rs,s,i,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){tp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=bI(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(n,rs,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=zg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,rs,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Cg(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=_c(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,s){const i=new CI(t||void 0,n||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(_c(this._state)){case Cr.SUCCESS:ti(this._resolve.bind(null,this.snapshot))();break;case Cr.CANCELED:case Cr.ERROR:const t=this._reject;ti(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(_c(this._state)){case Cr.RUNNING:case Cr.PAUSED:e.next&&ti(e.next.bind(e,this.snapshot))();break;case Cr.SUCCESS:e.complete&&ti(e.complete.bind(e))();break;case Cr.CANCELED:case Cr.ERROR:e.error&&ti(e.error.bind(e,this._error))();break;default:e.error&&ti(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this._service=e,t instanceof Or?this._location=t:this._location=Or.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Fs(e,t)}get root(){const e=new Or(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dg(this._location.path)}get storage(){return this._service}get parent(){const e=uI(this._location.path);if(e===null)return null;const t=new Or(this._location.bucket,e);return new Fs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw B5(e)}}function PI(r,e,t){r._throwIfRoot("uploadBytes");const n=zg(r.storage,r._location,$u(),new Cn(e,!0),t);return r.storage.makeRequestWithTokens(n,rs).then(s=>({metadata:s,ref:r}))}function RI(r,e,t){return r._throwIfRoot("uploadBytesResumable"),new AI(r,new Cn(e),t)}function NI(r){r._throwIfRoot("getDownloadURL");const e=wI(r.storage,r._location,$u());return r.storage.makeRequestWithTokens(e,rs).then(t=>{if(t===null)throw F5();return t})}function LI(r){r._throwIfRoot("deleteObject");const e=yI(r.storage,r._location);return r.storage.makeRequestWithTokens(e,rs)}function $I(r,e){const t=hI(r._location.path,e),n=new Or(r._location.bucket,t);return new Fs(r.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(r){return/^[A-Za-z]+:\/\//.test(r)}function qI(r,e){return new Fs(r,e)}function Ug(r,e){if(r instanceof Mu){const t=r;if(t._bucket==null)throw z5();const n=new Fs(t,t._bucket);return e!=null?Ug(n,e):n}else return e!==void 0?$I(r,e):r}function OI(r,e){if(e&&DI(e)){if(r instanceof Mu)return qI(r,e);throw id("To use ref(service, url), the first argument must be a Storage instance.")}else return Ug(r,e)}function rp(r,e){const t=e?.[Eg];return t==null?null:Or.makeFromBucketSpec(t,r)}function MI(r,e,t,n={}){r.host=`${e}:${t}`;const s=ys(e);s&&(Nd(`https://${r.host}/b`),Ld("Storage",!0)),r._isUsingEmulator=!0,r._protocol=s?"https":"http";const{mockUserToken:i}=n;i&&(r._overrideAuthToken=typeof i=="string"?i:mv(i,r.app.options.projectId))}class Mu{constructor(e,t,n,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=kg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=A5,this._maxUploadRetryTime=P5,this._requests=new Set,s!=null?this._bucket=Or.makeFromBucketSpec(s,this._host):this._bucket=rp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Or.makeFromBucketSpec(this._url,e):this._bucket=rp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ep("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ep("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Sr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fs(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new V5(Sg());{const o=tI(e,this._appId,n,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const np="@firebase/storage",sp="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="storage";function zI(r,e,t){return r=Mt(r),PI(r,e,t)}function UI(r,e,t){return r=Mt(r),RI(r,e,t)}function jg(r){return r=Mt(r),NI(r)}function FI(r){return r=Mt(r),LI(r)}function zu(r,e){return r=Mt(r),OI(r,e)}function jI(r=Od(),e){r=Mt(r);const n=dl(r,Fg).getImmediate({identifier:e}),s=fv("storage");return s&&BI(n,...s),n}function BI(r,e,t,n={}){MI(r,e,t,n)}function VI(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new Mu(t,n,s,e,Ws)}function HI(){qs(new ps(Fg,VI,"PUBLIC").setMultipleInstances(!0)),fn(np,sp,""),fn(np,sp,"esm2020")}HI();const Bg={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",Bg);const Uu=yv(Bg),vn=ok(Uu),Pt=C5(Uu),Fu=jI(Uu);var WI=R('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),GI=R('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),KI=R('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),YI=R('<h3 class="post-title svelte-1t1odzy"> </h3>'),QI=R('<p class="post-text svelte-1t1odzy"> </p>'),JI=R('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),XI=R('<div class="posts svelte-1t1odzy"></div>'),ZI=R('<div class="post-list-container svelte-1t1odzy"><!></div>');const eC={hash:"svelte-1t1odzy",code:`
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
  }`};function tC(r,e){gt(e,!0),vt(r,eC);let t=Be(e,"path",7,"posts"),n=Be(e,"limit",7,"10"),s=ee(or([])),i=ee(!0),o=ee(""),a=null;Jt(()=>{l()}),av(()=>{u()});function l(){try{a=Lt(Pt,t()),Jo(a,P=>{const L=P.val();L?x(s,Object.entries(L).map(([N,M])=>({id:N,...M})).sort((N,M)=>(M.timestamp||0)-(N.timestamp||0)).slice(0,parseInt(n())),!0):x(s,[],!0),x(i,!1),x(o,"")},P=>{console.error("데이터 읽기 오류:",P),x(o,"데이터를 불러오는 중 오류가 발생했습니다."),x(i,!1)})}catch(P){console.error("구독 설정 오류:",P),x(o,"데이터베이스 연결에 실패했습니다."),x(i,!1)}}function u(){a&&Ru(a)}function f(P){const L=new CustomEvent("post-click",{detail:{post:P},bubbles:!0,composed:!0});dispatchEvent(L)}function m(P,L){(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),f(L))}function v(P){if(!P)return"";const L=typeof P=="string"?Number(P):P,N=new Date(L),S=new Date().getTime()-N.getTime(),A=Math.floor(S/6e4),C=Math.floor(S/36e5),E=Math.floor(S/864e5);return A<1?"방금 전":A<60?`${A}분 전`:C<24?`${C}시간 전`:E<7?`${E}일 전`:N.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var _={get path(){return t()},set path(P="posts"){t(P),je()},get limit(){return n()},set limit(P="10"){n(P),je()}},g=ZI(),w=d(g);{var k=P=>{var L=WI();y(P,L)},I=P=>{var L=ye(),N=de(L);{var M=A=>{var C=GI(),E=d(C),T=d(E,!0);c(E),c(C),D(()=>b(T,p(o))),y(A,C)},S=A=>{var C=ye(),E=de(C);{var T=O=>{var V=KI();y(O,V)},q=O=>{var V=XI();Qt(V,21,()=>p(s),Q=>Q.id,(Q,W)=>{var le=JI();le.__click=()=>f(p(W)),le.__keydown=fe=>m(fe,p(W));var ue=d(le),se=d(ue),ve=d(se),Z=d(ve,!0);c(ve);var K=h(ve,2),F=d(K,!0);c(K),c(se),c(ue);var J=h(ue,2),ie=d(J);{var X=fe=>{var Ie=YI(),ge=d(Ie,!0);c(Ie),D(()=>b(ge,p(W).title)),y(fe,Ie)};j(ie,fe=>{p(W).title&&fe(X)})}var $=h(ie,2);{var B=fe=>{var Ie=QI(),ge=d(Ie,!0);c(Ie),D(()=>b(ge,p(W).content)),y(fe,Ie)};j($,fe=>{p(W).content&&fe(B)})}c(J);var oe=h(J,2),H=d(oe),re=d(H);c(H);var U=h(H,2),ne=d(U);c(U),c(oe),c(le),D(fe=>{ke(le,"aria-label",`게시물: ${(p(W).title||p(W).content||"제목 없음")??""}`),b(Z,p(W).author||"익명"),b(F,fe),b(re,`👍 ${(p(W).likes||0)??""}`),b(ne,`💬 ${(p(W).comments?.length||0)??""}`)},[()=>v(p(W).timestamp)]),y(Q,le)}),c(V),y(O,V)};j(E,O=>{p(s).length===0?O(T):O(q,!1)},!0)}y(A,C)};j(N,A=>{p(o)?A(M):A(S,!1)},!0)}y(P,L)};j(w,P=>{p(i)?P(k):P(I,!1)})}return c(g),y(r,g),_t(_)}Rt(["click","keydown"]);customElements.define("post-list",xe(tC,{path:{},limit:{}},[],[],!0));U1();/**
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
 */const rC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var nC=w0("<svg><!><!></svg>");function xt(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]),n=mt(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);gt(e,!1);let s=Be(e,"name",12,void 0),i=Be(e,"color",12,"currentColor"),o=Be(e,"size",12,24),a=Be(e,"strokeWidth",12,2),l=Be(e,"absoluteStrokeWidth",12,!1),u=Be(e,"iconNode",28,()=>[]);const f=(...w)=>w.filter((k,I,P)=>!!k&&P.indexOf(k)===I).join(" ");var m={get name(){return s()},set name(w){s(w),je()},get color(){return i()},set color(w){i(w),je()},get size(){return o()},set size(w){o(w),je()},get strokeWidth(){return a()},set strokeWidth(w){a(w),je()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(w){l(w),je()},get iconNode(){return u()},set iconNode(w){u(w),je()}};Er();var v=nC();$h(v,(w,k)=>({...rC,...n,width:o(),height:o(),stroke:i(),"stroke-width":w,class:k}),[()=>(ri(l()),ri(a()),ri(o()),sn(()=>l()?Number(a())*24/Number(o()):a())),()=>(ri(s()),ri(t),sn(()=>f("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var _=d(v);Qt(_,1,u,Tn,(w,k)=>{var I=Un(()=>u1(p(k),2));let P=()=>p(I)[0],L=()=>p(I)[1];var N=ye(),M=de(N);T0(M,P,!0,(S,A)=>{$h(S,()=>({...L()}))}),y(w,N)});var g=h(_);return bt(g,e,"default",{}),c(v),y(r,v),_t(m)}xe(xt,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function Vg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];xt(r,Et({name:"book-open"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Vg,{},["default"],[],!0);function Hg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];xt(r,Et({name:"camera"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Hg,{},["default"],[],!0);function od(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];xt(r,Et({name:"check"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(od,{},["default"],[],!0);function ju(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];xt(r,Et({name:"chevron-down"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(ju,{},["default"],[],!0);function Wg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];xt(r,Et({name:"circle-alert"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Wg,{},["default"],[],!0);function Ga(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];xt(r,Et({name:"circle-check"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Ga,{},["default"],[],!0);function Gg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];xt(r,Et({name:"circle-x"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Gg,{},["default"],[],!0);function ad(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];xt(r,Et({name:"circle"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(ad,{},["default"],[],!0);function ld(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];xt(r,Et({name:"external-link"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(ld,{},["default"],[],!0);function Bu(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];xt(r,Et({name:"file-text"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Bu,{},["default"],[],!0);function Kg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];xt(r,Et({name:"house"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Kg,{},["default"],[],!0);function Yg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]];xt(r,Et({name:"image-plus"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Yg,{},["default"],[],!0);function cd(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];xt(r,Et({name:"info"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(cd,{},["default"],[],!0);function Ji(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];xt(r,Et({name:"layout-grid"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Ji,{},["default"],[],!0);function Qg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];xt(r,Et({name:"log-in"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Qg,{},["default"],[],!0);function Jg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];xt(r,Et({name:"log-out"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Jg,{},["default"],[],!0);function Xi(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];xt(r,Et({name:"menu"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Xi,{},["default"],[],!0);function is(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];xt(r,Et({name:"message-circle"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(is,{},["default"],[],!0);function Xg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];xt(r,Et({name:"pencil"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Xg,{},["default"],[],!0);function Zg(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];xt(r,Et({name:"phone"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Zg,{},["default"],[],!0);function e_(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];xt(r,Et({name:"send"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(e_,{},["default"],[],!0);function t_(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];xt(r,Et({name:"server"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(t_,{},["default"],[],!0);function r_(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];xt(r,Et({name:"settings"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(r_,{},["default"],[],!0);function n_(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];xt(r,Et({name:"square-pen"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(n_,{},["default"],[],!0);function Vu(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];xt(r,Et({name:"trash-2"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Vu,{},["default"],[],!0);function s_(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];xt(r,Et({name:"triangle-alert"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(s_,{},["default"],[],!0);function i_(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];xt(r,Et({name:"trending-up"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(i_,{},["default"],[],!0);function us(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];xt(r,Et({name:"user"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(us,{},["default"],[],!0);function No(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];xt(r,Et({name:"users"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(No,{},["default"],[],!0);function Tl(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];xt(r,Et({name:"x"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(Tl,{},["default"],[],!0);function o_(r,e){const t=mt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];xt(r,Et({name:"zap"},()=>t,{get iconNode(){return n},children:(s,i)=>{var o=ye(),a=de(o);bt(a,e,"default",{}),y(s,o)},$$slots:{default:!0}}))}xe(o_,{},["default"],[],!0);var sC=R("<option> </option>"),iC=R('<div class="error-message svelte-1e01td3"> </div>'),oC=R('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),aC=R("<!> 인증 코드 전송",1),lC=R('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),cC=R('<div class="error-message svelte-1e01td3"> </div>'),dC=R('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),uC=R("<!> 로그인",1),hC=R('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),fC=R('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const pC={hash:"svelte-1e01td3",code:`\r
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
  }`};function vC(r,e){gt(e,!0),vt(r,pC);const t=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let n=ee("+82"),s=ee(""),i=ee(""),o=ee("phone"),a=ee(!1),l=ee(""),u=ee(null),f=ee(null),m=ee(void 0),v=ee(null);function _(){return new Promise((C,E)=>{try{if(!p(v)){const T=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(T),x(l,"reCAPTCHA 초기화에 실패했습니다."),E(T);return}if(p(u)){if(p(m)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(p(m)),console.log("reCAPTCHA reset completed"),C(p(m));return}catch(T){console.warn("Failed to reset reCAPTCHA:",T)}try{p(u).clear(),x(u,null),x(m,void 0)}catch(T){console.warn("Failed to clear reCAPTCHA:",T)}}x(u,new ox(vn,p(v).id,{size:"invisible",callback:()=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&p(m)!==void 0?window.grecaptcha.reset(p(m)):_()}}),!0),p(u).render().then(T=>{x(m,T,!0),console.log("reCAPTCHA rendered with widgetId:",T),C(T)}).catch(T=>{console.error("Failed to render reCAPTCHA:",T),x(l,"reCAPTCHA 초기화에 실패했습니다."),E(T)})}catch(T){console.error("reCAPTCHA 초기화 실패:",T),x(l,"reCAPTCHA 초기화에 실패했습니다."),E(T)}})}Jt(()=>{const C=document.createElement("div");return C.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),C.className="recaptcha-container-light-dom",C.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(C),x(v,C,!0),_(),()=>{C&&C.parentNode&&C.parentNode.removeChild(C)}});function g(C){return/^[0-9]{6,15}$/.test(C)}async function w(){if(x(l,""),!g(p(s))){x(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}x(a,!0);try{const C=`${p(n)}${p(s)}`;console.log("Sending verification code to:",C),x(f,await cx(vn,C,p(u)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),x(o,"code")}catch(C){console.error("SMS 전송 실패:",C),C.code==="auth/invalid-phone-number"?x(l,"잘못된 전화번호 형식입니다."):C.code==="auth/too-many-requests"?x(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):x(l,`SMS 전송 실패: ${C.message}`)}finally{x(a,!1)}}async function k(){if(x(l,""),p(i).length!==6){x(l,"6자리 인증 코드를 입력해주세요.");return}x(a,!0);try{const C=await p(f).confirm(p(i));console.log("Login successful:",C.user);const E=new CustomEvent("login-success",{detail:{user:C.user,phoneNumber:C.user.phoneNumber}});dispatchEvent(E),x(s,""),x(i,""),x(o,"phone")}catch(C){console.error("인증 코드 확인 실패:",C),C.code==="auth/invalid-verification-code"?x(l,"잘못된 인증 코드입니다."):C.code==="auth/code-expired"?x(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):x(l,`인증 실패: ${C.message}`);const E=new CustomEvent("login-error",{detail:{error:C.message}});dispatchEvent(E)}finally{x(a,!1)}}function I(){x(o,"phone"),x(i,""),x(l,"")}var P=fC(),L=d(P),N=d(L);{var M=C=>{var E=lC(),T=d(E),q=d(T);Zg(q,{class:"icon-large"}),Ft(4),c(T);var O=h(T,2),V=h(d(O),2);Qt(V,21,()=>t,Tn,(X,$)=>{var B=sC(),oe=d(B);c(B);var H={};D(()=>{b(oe,`${p($).flag??""}
                ${p($).name??""} (${p($).code??""})`),H!==(H=p($).code)&&(B.value=(B.__value=p($).code)??"")}),y(X,B)}),c(V),c(O);var Q=h(O,2),W=h(d(Q),2),le=d(W),ue=d(le,!0);c(le);var se=h(le,2);fs(se),c(W),Ft(2),c(Q);var ve=h(Q,2);{var Z=X=>{var $=iC(),B=d($,!0);c($),D(()=>b(B,p(l))),y(X,$)};j(ve,X=>{p(l)&&X(Z)})}var K=h(ve,2);K.__click=w;var F=d(K);{var J=X=>{var $=oC();Ft(),y(X,$)},ie=X=>{var $=aC(),B=de($);e_(B,{class:"btn-icon"}),Ft(),y(X,$)};j(F,X=>{p(a)?X(J):X(ie,!1)})}c(K),c(E),D(()=>{V.disabled=p(a),b(ue,p(n)),se.disabled=p(a),K.disabled=p(a)||!p(s)}),nv(V,()=>p(n),X=>x(n,X)),mn("keypress",se,X=>{X.key==="Enter"&&(X.preventDefault(),w())}),tn(se,()=>p(s),X=>x(s,X)),y(C,E)},S=C=>{var E=ye(),T=de(E);{var q=O=>{var V=hC(),Q=d(V),W=d(Q);od(W,{class:"icon-large"});var le=h(W,4),ue=d(le);Ft(2),c(le),c(Q);var se=h(Q,2),ve=h(d(se),2);fs(ve),Ft(2),c(se);var Z=h(se,2);{var K=re=>{var U=cC(),ne=d(U,!0);c(U),D(()=>b(ne,p(l))),y(re,U)};j(Z,re=>{p(l)&&re(K)})}var F=h(Z,2),J=d(F);J.__click=I;var ie=h(J,2);ie.__click=k;var X=d(ie);{var $=re=>{var U=dC();Ft(),y(re,U)},B=re=>{var U=uC(),ne=de(U);od(ne,{class:"btn-icon"}),Ft(),y(re,U)};j(X,re=>{p(a)?re($):re(B,!1)})}c(ie),c(F);var oe=h(F,2),H=h(d(oe));H.__click=I,c(oe),c(V),D(()=>{b(ue,`${p(n)??""}${p(s)??""}로 전송된`),ve.disabled=p(a),J.disabled=p(a),ie.disabled=p(a)||p(i).length!==6}),mn("keypress",ve,re=>{re.key==="Enter"&&(re.preventDefault(),k())}),tn(ve,()=>p(i),re=>x(i,re)),y(O,V)};j(T,O=>{p(o)==="code"&&O(q)},!0)}y(C,E)};j(N,C=>{p(o)==="phone"?C(M):C(S,!1)})}var A=h(N,2);Oo(A,C=>x(v,C),()=>p(v)),c(L),c(P),y(r,P),_t()}Rt(["click"]);customElements.define("phone-login",xe(vC,{},[],[],!0));const Sl=Vs(null),mC=Vs(!0);Vd(vn,r=>{Sl.set(r),mC.set(!1)});async function gC(){try{return await z2(vn),{success:!0}}catch(r){return console.error("로그아웃 오류:",r),{success:!1,error:r.message}}}class Cs{static#t=null;#e=ee(!0);get loading(){return p(this.#e)}set loading(e){x(this.#e,e,!0)}#n=ee(!1);get isAuthenticated(){return p(this.#n)}set isAuthenticated(e){x(this.#n,e,!0)}uid=null;email=null;phoneNumber=null;#s=ee(null);get data(){return p(this.#s)}set data(e){x(this.#s,e,!0)}#l=ee(null);get error(){return p(this.#l)}set error(e){x(this.#l,e,!0)}#o=null;#i=null;#r=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return Cs.#t||(Cs.#t=new Cs),Cs.#t}#a(){try{if(!vn)throw new Error("Auth instance not available");this.#i=Vd(vn,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#r&&(this.#r(),this.#r=null);const t=Lt(Pt,`users/${e.uid}`);this.#r=Jo(t,async n=>{this.data=n.val(),!this.data&&e&&console.log("FirebaseLoginUser: 사용자 데이터가 없습니다.")},n=>{this.error=n})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#r&&(this.#r(),this.#r=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const t={};e.displayName!==void 0&&(t.displayName=e.displayName),e.photoUrl!==void 0&&(t.photoURL=e.photoUrl),Object.keys(t).length>0&&await Xv(this.#o,t);const n={...e},s=Lt(Pt,`users/${this.uid}`);await ks(s,n)}catch(t){throw this.error=t,t}}async updateField(e,t){return this.updateProfile({[e]:t})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#i&&(this.#i(),this.#i=null),this.#r&&(this.#r(),this.#r=null),Cs.#t=null}}const ze=Cs.getInstance(),_C="GitHub",bC={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",신고:"Report",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",전체댓글:"Total Comments",전체좋아요:"Total Likes",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"Server-side logic and data consistency","home.todo.item8.subitem1":"User profile synchronization (onUserProfileUpdate)","home.todo.item8.subitem2":"Like/comment count synchronization","home.todo.item8.subitem3":"Cleanup associated data on post deletion","home.todo.item8.subitem4":"Notification triggers and delivery","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese",공사중메시지:"This page is under construction",공사중설명_채팅목록:"The chat list feature is currently under development and will be updated soon.",공사중설명_설정:"The settings feature is currently under development and will be updated soon.",공사중설명_게시물상세:"The post detail view feature is currently under development and will be updated soon.",공사중설명_앱정보:"The about page is currently under development and will be updated soon.",공사중설명_도움말:"The help page is currently under development and will be updated soon.",공사중설명_이용약관:"The terms of service page is currently under development and will be updated soon.",공사중설명_개인정보:"The privacy policy page is currently under development and will be updated soon.",공사중설명_문의하기:"The contact page is currently under development and will be updated soon.",메뉴로돌아가기:"Back to Menu",페이지선택:"Select a page to navigate to below",사용자프로필:"User Profile",게시물상세예시:"Post Detail (e.g., ID:123)",채팅목록:"Chat List",테스트게시글생성:"[Dev] Generate Test Posts",로그인성공알림:`Login successful!
Phone: {phone}`,로그인실패:"Login failed: {error}",전화번호로로그인:"Sign in easily with your phone number.",로그인하셨습니다:"You are logged in as {phone}.",홈으로이동:"Go to Home",사용자목록로딩:"Loading user list...",등록된사용자없음:"No registered users yet.",사용자목록실패:"Failed to load user list.",더많은사용자로딩:"Loading more users...",모든사용자로딩완료:"All users have been loaded.",정보없음:"No information",사용자:"User",이름없음:"No name",나:"Me",가입일:"Joined on",프로필보기:"View Profile",프로필사진:"Profile Photo",사진업로드중:"Uploading photo...",사진업로드실패:"Failed to upload photo: {error}",다른사진작업중:"Another photo operation is in progress...",프로필사진제거중:"Removing profile photo...",프로필사진제거완료:"Profile photo has been removed.",프로필사진제거실패:"Failed to remove profile photo: {error}",프로필업데이트중:"Updating profile...",프로필업데이트완료:"Profile has been updated successfully.",프로필업데이트실패:"Failed to update profile: {error}",닉네임입력:"Enter your nickname",닉네임최대길이:"Maximum 50 characters",소개글:"Bio",소개글입력:"Tell us about yourself",소개글최대길이:"Maximum 200 characters",홈페이지:"Website",홈페이지입력:"Enter your website URL",GitHub:_C,GitHub입력:"Enter your GitHub profile URL",사진업로드:"Upload Photo",사진제거:"Remove Photo",저장하기:"Save Changes",저장중:"Saving...",테스트게시글생성타이틀:"📝 Generate Test Posts",테스트게시글생성설명:"Generate 100 fun test posts for each category, totaling 400 posts.",로그인필요메시지:"⚠️ Login required to use this feature.",로그인하러가기:"Go to Login",게시글생성시작:"Start Generating Posts",생성중:"Generating...",생성성공:"✅ Successfully generated {count} posts!",생성실패:"❌ Failed to generate posts: {error}",경고:"⚠️ Warning",경고메시지:"This will create {count} test posts. Only use for testing purposes.",진행상황:"Progress",생성된게시글수:"{count} of {total} posts created",로딩중:"Loading...",게시판설명:" for the latest news and share your opinions.",글쓰기:"Write",게시글없음:"No posts yet",첫게시글공유:"Share your first story and start the community.",새글작성2:"Write New Post",게시글로딩중:"Loading posts...",게시글로드실패:"Failed to load posts.",더많은게시글로딩:"Loading more posts...",모든게시글확인:"All posts have been loaded.",새게시글작성:"Write New Post",카테고리:"Category",카테고리선택:"Select Category",카테고리선택필요:"Please select a category.",제목:"Title",제목입력:"Enter title",제목입력필요:"Please enter a title.",내용:"Content",내용입력:"Enter content",내용입력필요:"Please enter content.",전송:"Send",전송중:"Sending...",게시글작성완료:"Post has been created.",게시글저장실패:"Failed to save post: {error}",게시글저장중오류:"An error occurred while saving the post.",로그인정보확인불가:"Could not verify login information.",좋아요실패:"An error occurred while processing like.",이미좋아요:"You already liked this post.",댓글작성:"Write Comment",댓글내용입력:"Enter comment content",댓글이작성되었습니다:"Comment has been created.",댓글작성실패:"Failed to create comment: {error}",댓글내용입력필요:"Please enter comment content.","error.unknown":"An unknown error occurred.","error.network":"Please check your network connection.","error.offline":"No internet connection.","error.auth.invalidEmail":"Invalid email format.","error.auth.userDisabled":"This account has been disabled.","error.auth.userNotFound":"User not found.","error.auth.wrongPassword":"Incorrect password.","error.auth.emailAlreadyInUse":"This email is already in use.","error.auth.weakPassword":"Password is too weak. (Minimum 6 characters)","error.auth.operationNotAllowed":"This operation is not allowed.","error.auth.tooManyRequests":"Too many requests. Please try again later.","error.auth.invalidVerificationCode":"Invalid verification code.","error.auth.invalidPhoneNumber":"Invalid phone number.","error.auth.missingVerificationCode":"Please enter verification code.","error.auth.sessionExpired":"Session expired. Please log in again.","error.auth.requiresRecentLogin":"Please log in again for security.","error.auth.credentialAlreadyInUse":"This credential is already in use by another account.","error.db.permissionDenied":"You don't have permission to perform this action.","error.db.authenticationRequired":"Please log in first.","error.db.networkError":"Database connection error.","error.storage.unauthorized":"No permission to access file.","error.storage.bucketNotFound":"Storage bucket not found.","error.storage.invalidArgument":"Invalid argument.","error.storage.objectNotFound":"File not found.","error.storage.retryLimitExceeded":"File upload error. Please try again.","error.storage.quotaExceeded":"Storage quota exceeded.","error.storage.canceled":"File upload canceled.",게시글수정:"Edit Post",게시글수정완료:"Post has been updated.",게시글삭제확인:"Are you sure you want to delete this post?",게시글삭제완료:"Post has been deleted.",댓글이달려있어수정불가:"Cannot edit post with comments.",댓글이달려있어삭제불가:"Cannot delete post with comments.",제목과내용을입력하세요:"Please enter title and content.",수정불가:"Cannot Edit",댓글이달려있어수정불가메시지:`Cannot edit the post because there are comments.
Please delete the comments first before editing.`,답글:"Reply",답글작성:"Write Reply",좋아요를하였습니다:"You liked this.",좋아요를취소했습니다:"You unliked this.",댓글수정:"Edit Comment",수정중:"Updating...",댓글이수정되었습니다:"Comment has been updated.",댓글삭제확인:"Are you sure you want to delete this comment?",댓글이삭제되었습니다:"Comment has been deleted."},wC={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",신고:"신고",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",바이브코딩SED:"바이브 코딩 - SED",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",전체댓글:"전체 댓글",전체좋아요:"전체 좋아요",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다. 자세히보기...","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"모든 것을 실시간 업데이트","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 (한국 바이브 보스) - 소셜 네트워크 서비스 웹/앱 개발","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"서버 측 로직 및 데이터 일관성 보장","home.todo.item8.subitem1":"사용자 프로필 동기화 (onUserProfileUpdate)","home.todo.item8.subitem2":"좋아요/댓글 개수 동기화","home.todo.item8.subitem3":"게시글 삭제 시 연관 데이터 정리","home.todo.item8.subitem4":"알림 트리거 및 전송","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",공사중메시지:"이 페이지는 공사중입니다",공사중설명_채팅목록:"채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_설정:"설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_게시물상세:"게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_앱정보:"앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_도움말:"도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_이용약관:"이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_개인정보:"개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_문의하기:"문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",메뉴로돌아가기:"메뉴로 돌아가기",페이지선택:"아래에서 이동할 페이지를 선택하세요",사용자프로필:"사용자 프로필",게시물상세예시:"게시물 상세 (예: ID:123)",채팅목록:"채팅 목록",테스트게시글생성:"[개발] 테스트 게시글 생성",로그인성공알림:`로그인 성공!
전화번호: {phone}`,로그인실패:"로그인 실패: {error}",전화번호로로그인:"전화번호로 간편하게 로그인하세요.",로그인하셨습니다:"{phone}로 로그인하셨습니다.",홈으로이동:"홈으로 이동",게시물상세:"게시물 상세",정보없음:"정보 없음",이름없음:"이름 없음",가입일:"가입일",프로필보기:"프로필 보기",사용자목록로딩:"사용자 목록을 불러오는 중...",등록된사용자없음:"등록된 사용자가 없습니다.",사용자목록실패:"사용자 목록을 불러오는데 실패했습니다.",더많은사용자로딩:"더 많은 사용자를 불러오는 중...",모든사용자로딩완료:"모든 사용자를 불러왔습니다.",다른사용자프로필:"다른 사용자 프로필:",프로필사진:"프로필 사진",프로필사진변경:"프로필 사진 변경",프로필사진추가:"프로필 사진 추가",프로필사진제거:"프로필 사진 제거",프로필사진클릭변경:"프로필 사진을 클릭하여 변경",사진저장중:"사진을 저장하는 중입니다...",닉네임입력:"닉네임을 입력하세요",닉네임헬퍼:"최대 50자까지 입력할 수 있습니다",선택하지않음:"선택하지 않음",남자:"남자",여자:"여자",생년월일헬퍼:"YYYY-MM-DD 형식으로 선택해주세요",저장중:"저장 중...",다른사진작업중:"다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",로그인후이용:"로그인 후 이용해주세요.",이미지파일만:"이미지 파일만 선택 가능합니다.",파일크기제한:"파일 크기는 5MB 이하여야 합니다.",프로필사진제거됨:"프로필 사진이 제거되었습니다.",사진제거실패:"사진 제거 실패: {error}",프로필사진저장됨:"프로필 사진이 저장되었습니다.",사진저장실패:"사진 저장 실패: {error}",프로필업데이트성공:"프로필이 성공적으로 업데이트되었습니다!",프로필업데이트오류:"오류: {error}",테스트데이터생성:"테스트 데이터 생성",테스트게시글생성타이틀:"📝 테스트 게시글 생성",테스트게시글설명:"각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",로그인하러가기:"로그인하러 가기",게시글생성시작:"게시글 생성 시작",실행로그:"실행 로그",완료게시판확인:"✅ 완료! 게시판 페이지에서 확인해보세요.",사용자:"사용자",로딩중:"로딩 중...",게시판설명:"에서 최신 소식을 확인하고 의견을 나눠보세요.",글쓰기:"글쓰기",게시글없음:"아직 등록된 게시글이 없어요",첫게시글공유:"첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",새글작성2:"새 글 작성하기",게시글로딩중:"게시글을 불러오는 중입니다...",게시글로드실패:"게시글을 불러오는 중 문제가 발생했습니다.",더많은게시글로딩:"더 많은 게시글을 불러오는 중...",모든게시글확인:"모든 게시글을 확인했습니다.",새게시글작성:"새 게시글 작성",카테고리:"카테고리",카테고리선택:"카테고리 선택",카테고리선택필요:"카테고리를 선택해주세요.",제목:"제목",제목입력:"제목을 입력하세요",제목입력필요:"제목을 입력해주세요.",내용:"내용",내용입력:"내용을 입력하세요",내용입력필요:"내용을 입력해주세요.",전송:"전송",전송중:"전송 중...",게시글작성완료:"게시글이 작성되었습니다.",게시글저장실패:"게시글 저장 실패: {error}",게시글저장중오류:"게시글 저장 중 오류가 발생했습니다.",로그인정보확인불가:"로그인 정보를 확인할 수 없습니다.",좋아요실패:"좋아요 처리 중 오류가 발생했습니다.",이미좋아요:"이미 좋아요를 눌렀습니다.",댓글작성:"댓글 작성",댓글내용입력:"댓글 내용을 입력하세요",댓글이작성되었습니다:"댓글이 작성되었습니다.",댓글작성실패:"댓글 작성 실패: {error}",댓글내용입력필요:"댓글 내용을 입력해주세요.",댓글더보기:"더 보기 (총 {count}개)",모든댓글보기:"모든 댓글 보기",댓글숨기기:"댓글 숨기기",답글:"답글",답글작성:"답글 작성",좋아요를하였습니다:"좋아요를 하였습니다.",좋아요를취소했습니다:"좋아요를 취소했습니다.","error.unknown":"알 수 없는 오류가 발생했습니다.","error.network":"네트워크 연결을 확인해주세요.","error.offline":"인터넷 연결이 없습니다.","error.auth.invalidEmail":"올바른 이메일 형식이 아닙니다.","error.auth.userDisabled":"비활성화된 계정입니다.","error.auth.userNotFound":"사용자를 찾을 수 없습니다.","error.auth.wrongPassword":"비밀번호가 올바르지 않습니다.","error.auth.emailAlreadyInUse":"이미 사용 중인 이메일입니다.","error.auth.weakPassword":"비밀번호가 너무 약합니다. (최소 6자 이상)","error.auth.operationNotAllowed":"이 작업은 허용되지 않습니다.","error.auth.tooManyRequests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","error.auth.invalidVerificationCode":"잘못된 인증 코드입니다.","error.auth.invalidPhoneNumber":"올바른 전화번호가 아닙니다.","error.auth.missingVerificationCode":"인증 코드를 입력해주세요.","error.auth.sessionExpired":"세션이 만료되었습니다. 다시 로그인해주세요.","error.auth.requiresRecentLogin":"보안을 위해 다시 로그인해주세요.","error.auth.credentialAlreadyInUse":"이미 다른 계정에서 사용 중인 인증 정보입니다.","error.db.permissionDenied":"이 작업을 수행할 권한이 없습니다.","error.db.authenticationRequired":"먼저 로그인해주세요.","error.db.networkError":"데이터베이스 연결 중 오류가 발생했습니다.","error.storage.unauthorized":"파일 접근 권한이 없습니다.","error.storage.bucketNotFound":"저장소를 찾을 수 없습니다.","error.storage.invalidArgument":"올바르지 않은 인자입니다.","error.storage.objectNotFound":"파일을 찾을 수 없습니다.","error.storage.retryLimitExceeded":"파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.","error.storage.quotaExceeded":"저장 공간이 부족합니다.","error.storage.canceled":"파일 업로드가 취소되었습니다.","dev.history.title":"📝 스터디 로그","dev.history.subtitle":"한바보 프로젝트의 개발 진행 현황을 기록합니다.","dev.history.updateIndicator":"최신 업데이트 자동 동기화","dev.history.seminar1.date":"2025-10-27 (첫 번째 세미나)","dev.history.seminar1.completed":"✅ 구현 완료","dev.history.seminar1.item1":"기본 프로젝트 셋업 (Next.js 16, React 19, TypeScript)","dev.history.seminar1.item2":"Firebase 설정 및 인증 구현","dev.history.seminar1.item3":"이메일/비밀번호 회원가입 & 로그인","dev.history.seminar1.item4":"회원 정보 수정 (프로필 업데이트)","dev.history.seminar1.item5":"1:1 채팅 기능 (실시간 메시지 동기화)","dev.history.seminar1.learned":"💡 배운 것들","dev.history.seminar1.learned1":"Next.js App Router 구조 이해","dev.history.seminar1.learned2":"Firebase Authentication 사용법","dev.history.seminar1.learned3":"Firebase Realtime Database 실시간 동기화","dev.history.seminar1.learned4":"Git PR을 통한 협업 방식","dev.history.seminar2.date":"2025-11-03 (두 번째 세미나)","dev.history.seminar2.completed":"✅ 기술 스택 전환 완료","dev.history.seminar2.item1":"React.js + Next.js + Firebase + Supabase → Svelte + Firebase로 전환","dev.history.seminar2.item2":"Svelte 5 Custom Elements 기반 아키텍처 구축","dev.history.seminar2.item3":"Web Components로 프레임워크 독립적인 구조 구현","dev.history.seminar2.item4":"Firebase만으로 모든 기능 구현 (Supabase 제거)","dev.history.seminar2.item5":"전체 프로젝트 리팩토링 및 재구성","dev.history.seminar2.learned":"💡 배운 것들","dev.history.seminar2.learned1":"Svelte 5 Runes ($state, $derived, $effect) 활용법","dev.history.seminar2.learned2":"Web Components의 장점과 재사용성","dev.history.seminar2.learned3":"Firebase만으로 충분한 기능 구현 가능","dev.history.seminar2.learned4":"더 가볍고 빠른 개발 환경 구축","dev.history.seminar3.date":"2025-11-04","dev.history.seminar3.completed":"✅ 핵심 기능 구현 완료","dev.history.seminar3.item1":"Svelte 5를 JavaScript에서 TypeScript로 전환","dev.history.seminar3.item2":"게시판 좋아요 기능 구현","dev.history.seminar3.item3":"댓글 작성, 수정, 삭제 기능 구현","dev.history.seminar3.item4":"댓글 좋아요 기능 추가","dev.history.seminar3.item5":"통계 기능 추가 (사용자 수, 게시글 수, 댓글 수 등)","dev.history.seminar3.learned":"💡 배운 것들","dev.history.seminar3.learned1":"TypeScript의 타입 안정성이 주는 바이브코딩의 코드 생성 향상","dev.history.seminar3.learned2":"바이브코딩의 한계를 극복하기 위한 Spec-Exact Development (SED) 개념 창조: LLM이 충분히 이해할 수 있는 상세한 스펙(DB 구조, 인증 방식, 암호화, 비밀번호 확인란 등) 제공. LLM이 작업 전 스펙 점수를 매겨 90점 이상일 때만 개발 시작","dev.history.seminar3.learned3":"Firebase increment()로 동시성 안전한 카운터 구현","dev.history.seminar3.learned4":"실시간 데이터 동기화를 활용한 통계 기능","dev.history.seminar3.learned5":"사용자 경험을 고려한 좋아요 및 댓글 UX 설계","dev.history.seminar4.date":"2025-11-05","dev.history.seminar4.completed":"✅ 구현 완료","dev.history.seminar4.item1":"각종 통계 (사용자 수, 게시글 수, 댓글 수, 좋아요 수 등)","dev.history.seminar4.item2":"댓글 작성 기능 완성 (실시간 동기화)","dev.history.seminar4.item3":"코멘트 좋아요 버그 수정 (Firebase push 키 처리)","dev.history.seminar4.item4":"Firebase Cloud Functions 배포 자동화 (npm run deploy)","dev.history.seminar4.item5":"CLAUDE.md 문서 구조 개선 (요약/레퍼런스 분리)","dev.history.seminar4.learned":"💡 배운 것들","dev.history.seminar4.learned1":"본 프로젝트를 100% 바이브 코딩(노코딩)으로 개발 진행하면서, 아무리 잘 작성된 프롬프트라고 해도, 프롬프트 몇 번만에 완전한 소셜 서비스 웹/앱 개발이 불가능하다는 것을 깨달았다.","dev.history.seminar4.learned2":"그래서 SED (Spec-Exact Development)의 중요성을 다시 한번 깨닫게 되었다.","dev.history.seminar4.learned3":"Firebase Cloud Functions의 increment() 함수로 동시성 안전한 카운터 업데이트 구현","dev.history.seminar4.learned4":"문서화의 중요성: 요약은 CLAUDE.md에, 상세 예제는 docs/*.md에 분리하여 관리","dev.history.upcoming":"더 많은 스터디 로그가 추가될 예정입니다...",게시글수정:"게시글 수정",게시글수정완료:"게시글이 수정되었습니다.",게시글삭제확인:"정말로 이 게시글을 삭제하시겠습니까?",게시글삭제완료:"게시글이 삭제되었습니다.",댓글이달려있어수정불가:"댓글이 달려 있는 경우 수정을 할 수 없습니다.",댓글이달려있어삭제불가:"댓글이 달려 있는 경우 삭제를 할 수 없습니다.",제목과내용을입력하세요:"제목과 내용을 입력하세요.",수정불가:"수정할 수 없습니다",댓글이달려있어수정불가메시지:`댓글이 달려 있어서 게시글을 수정할 수 없습니다.
댓글을 먼저 삭제한 후 수정해주세요.`,댓글수정:"댓글 수정",수정중:"수정 중...",댓글이수정되었습니다:"댓글이 수정되었습니다.",댓글삭제확인:"정말로 이 댓글을 삭제하시겠습니까?",댓글이삭제되었습니다:"댓글이 삭제되었습니다.",파일첨부:"파일 첨부",이미지첨부:"업로드",파일선택:"파일 선택",파일삭제:"삭제",파일크기초과:"파일 크기가 5MB를 초과합니다",지원하지않는파일형식:"지원하지 않는 파일 형식입니다 (JPEG, PNG, WebP만 가능)",파일업로드중:"업로드 중...",파일업로드완료:"업로드 완료",파일업로드실패:"업로드 실패: {error}",파일목록:"첨부 파일",파일없음:"첨부된 파일이 없습니다",업로드진행중:"업로드 진행 중: {progress}%","error.file.tooLarge":"파일 크기가 5MB를 초과합니다","error.file.invalidType":"지원하지 않는 파일 형식입니다 (JPEG, PNG, WebP만 가능)","error.file.invalidUrl":"올바르지 않은 파일 URL입니다"},yC="GitHub",xC={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",신고:"通報",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",전체댓글:"総コメント数",전체좋아요:"総いいね数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"サーバー側ロジックとデータ整合性の保証","home.todo.item8.subitem1":"ユーザープロフィール同期 (onUserProfileUpdate)","home.todo.item8.subitem2":"いいね/コメント数の同期","home.todo.item8.subitem3":"投稿削除時の関連データクリーンアップ","home.todo.item8.subitem4":"通知トリガーと配信","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語",공사중메시지:"このページは工事中です",공사중설명_채팅목록:"チャットリスト機能は現在開発中で、まもなく更新される予定です。",공사중설명_설정:"設定機能は現在開発中で、まもなく更新される予定です。",공사중설명_게시물상세:"投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",공사중설명_앱정보:"アプリ情報ページは現在開発中で、まもなく更新される予定です。",공사중설명_도움말:"ヘルプページは現在開発中で、まもなく更新される予定です。",공사중설명_이용약관:"利用規約ページは現在開発中で、まもなく更新される予定です。",공사중설명_개인정보:"プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",공사중설명_문의하기:"お問い合わせページは現在開発中で、まもなく更新される予定です。",메뉴로돌아가기:"メニューに戻る",페이지선택:"移動するページを下から選択してください",사용자프로필:"ユーザープロフィール",게시물상세예시:"投稿詳細 (例: ID:123)",채팅목록:"チャットリスト",테스트게시글생성:"[開発] テスト投稿生成",로그인성공알림:`ログイン成功!
電話番号: {phone}`,로그인실패:"ログイン失敗: {error}",전화번호로로그인:"電話番号で簡単にログインしてください。",로그인하셨습니다:"{phone}でログインしています。",홈으로이동:"ホームへ移動",사용자목록로딩:"ユーザーリストを読み込み中...",등록된사용자없음:"登録されたユーザーがいません。",사용자목록실패:"ユーザーリストの読み込みに失敗しました。",더많은사용자로딩:"さらにユーザーを読み込み中...",모든사용자로딩완료:"すべてのユーザーを読み込みました。",정보없음:"情報なし",사용자:"ユーザー",이름없음:"名前なし",나:"私",가입일:"登録日",프로필보기:"プロフィール表示",프로필사진:"プロフィール写真",사진업로드중:"写真をアップロード中...",사진업로드실패:"写真のアップロードに失敗しました: {error}",다른사진작업중:"他の写真操作が進行中です...",프로필사진제거중:"プロフィール写真を削除中...",프로필사진제거완료:"プロフィール写真を削除しました。",프로필사진제거실패:"プロフィール写真の削除に失敗しました: {error}",프로필업데이트중:"プロフィールを更新中...",프로필업데이트완료:"プロフィールを正常に更新しました。",프로필업데이트실패:"プロフィールの更新に失敗しました: {error}",닉네임입력:"ニックネームを入力してください",닉네임최대길이:"最大50文字まで入力できます",소개글:"自己紹介",소개글입력:"自己紹介を入力してください",소개글최대길이:"最大200文字まで入力できます",홈페이지:"ウェブサイト",홈페이지입력:"ウェブサイトURLを入力してください",GitHub:yC,GitHub입력:"GitHubプロフィールURLを入力してください",사진업로드:"写真をアップロード",사진제거:"写真を削除",저장하기:"変更を保存",저장중:"保存中...",테스트게시글생성타이틀:"📝 テスト投稿生成",테스트게시글생성설명:"各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",로그인필요메시지:"⚠️ この機能を使用するにはログインが必要です。",로그인하러가기:"ログインへ",게시글생성시작:"投稿生成開始",생성중:"生成中...",생성성공:"✅ {count}件の投稿を正常に生成しました！",생성실패:"❌ 投稿の生成に失敗しました: {error}",경고:"⚠️ 警告",경고메시지:"{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",진행상황:"進行状況",생성된게시글수:"{total}件中{count}件の投稿を作成",로딩중:"読み込み中...",게시판설명:"の最新ニュースを確認し、意見を共有してください。",글쓰기:"書く",게시글없음:"まだ投稿がありません",첫게시글공유:"最初のストーリーを共有してコミュニティを始めましょう。",새글작성2:"新規投稿を書く",게시글로딩중:"投稿を読み込み中...",게시글로드실패:"投稿の読み込みに失敗しました。",더많은게시글로딩:"さらに多くの投稿を読み込み中...",모든게시글확인:"すべての投稿を読み込みました。",새게시글작성:"新規投稿を書く",카테고리:"カテゴリ",카테고리선택:"カテゴリを選択",카테고리선택필요:"カテゴリを選択してください。",제목:"タイトル",제목입력:"タイトルを入力してください",제목입력필요:"タイトルを入力してください。",내용:"コンテンツ",내용입력:"コンテンツを入力してください",내용입력필요:"コンテンツを入力してください。",전송:"送信",전송중:"送信中...",게시글작성완료:"投稿が作成されました。",게시글저장실패:"投稿の保存に失敗しました: {error}",게시글저장중오류:"投稿の保存中にエラーが発生しました。",로그인정보확인불가:"ログイン情報を確認できませんでした。",좋아요실패:"いいね処理中にエラーが発生しました。",이미좋아요:"すでにいいねしています。",댓글작성:"コメントを書く",댓글내용입력:"コメント内容を入力してください",댓글이작성되었습니다:"コメントが作成されました。",댓글작성실패:"コメント作成に失敗しました: {error}",댓글내용입력필요:"コメント内容を入力してください。","error.unknown":"不明なエラーが発生しました。","error.network":"ネットワーク接続を確認してください。","error.offline":"インターネット接続がありません。","error.auth.invalidEmail":"正しいメール形式ではありません。","error.auth.userDisabled":"無効なアカウントです。","error.auth.userNotFound":"ユーザーが見つかりません。","error.auth.wrongPassword":"パスワードが正しくありません。","error.auth.emailAlreadyInUse":"すでに使用されているメールアドレスです。","error.auth.weakPassword":"パスワードが弱すぎます。（最低6文字以上）","error.auth.operationNotAllowed":"この操作は許可されていません。","error.auth.tooManyRequests":"リクエストが多すぎます。しばらくしてから再試行してください。","error.auth.invalidVerificationCode":"無効な認証コードです。","error.auth.invalidPhoneNumber":"正しい電話番号ではありません。","error.auth.missingVerificationCode":"認証コードを入力してください。","error.auth.sessionExpired":"セッションが期限切れです。再度ログインしてください。","error.auth.requiresRecentLogin":"セキュリティのため、再度ログインしてください。","error.auth.credentialAlreadyInUse":"すでに他のアカウントで使用されている認証情報です。","error.db.permissionDenied":"この操作を実行する権限がありません。","error.db.authenticationRequired":"まずログインしてください。","error.db.networkError":"データベース接続中にエラーが発生しました。","error.storage.unauthorized":"ファイルへのアクセス権限がありません。","error.storage.bucketNotFound":"ストレージが見つかりません。","error.storage.invalidArgument":"無効な引数です。","error.storage.objectNotFound":"ファイルが見つかりません。","error.storage.retryLimitExceeded":"ファイルアップロード中にエラーが発生しました。再試行してください。","error.storage.quotaExceeded":"ストレージ容量が不足しています。","error.storage.canceled":"ファイルアップロードがキャンセルされました。"},kC="GitHub",EC={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",신고:"举报",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",전체댓글:"总评论",전체좋아요:"总点赞",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"服务器端逻辑和数据一致性保障","home.todo.item8.subitem1":"用户资料同步 (onUserProfileUpdate)","home.todo.item8.subitem2":"点赞/评论数同步","home.todo.item8.subitem3":"帖子删除时清理关联数据","home.todo.item8.subitem4":"通知触发和发送","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文",공사중메시지:"此页面正在建设中",공사중설명_채팅목록:"聊天列表功能正在开发中，即将更新。",공사중설명_설정:"设置功能正在开发中，即将更新。",공사중설명_게시물상세:"帖子详情查看功能正在开发中，即将更新。",공사중설명_앱정보:"应用信息页面正在开发中，即将更新。",공사중설명_도움말:"帮助页面正在开发中，即将更新。",공사중설명_이용약관:"使用条款页面正在开发中，即将更新。",공사중설명_개인정보:"隐私政策页面正在开发中，即将更新。",공사중설명_문의하기:"联系我们页面正在开发中，即将更新。",메뉴로돌아가기:"返回菜单",페이지선택:"从下方选择要导航的页面",사용자프로필:"用户资料",게시물상세예시:"帖子详情 (例: ID:123)",채팅목록:"聊天列表",테스트게시글생성:"[开发] 生成测试帖子",로그인성공알림:`登录成功！
手机号: {phone}`,로그인실패:"登录失败: {error}",전화번호로로그인:"使用手机号轻松登录。",로그인하셨습니다:"您已使用 {phone} 登录。",홈으로이동:"前往首页",사용자목록로딩:"正在加载用户列表...",등록된사용자없음:"尚无注册用户。",사용자목록실패:"加载用户列表失败。",더많은사용자로딩:"正在加载更多用户...",모든사용자로딩완료:"已加载所有用户。",정보없음:"无信息",사용자:"用户",이름없음:"无名称",나:"我",가입일:"注册日期",프로필보기:"查看资料",프로필사진:"头像",사진업로드중:"正在上传照片...",사진업로드실패:"照片上传失败: {error}",다른사진작업중:"另一个照片操作正在进行中...",프로필사진제거중:"正在删除头像...",프로필사진제거완료:"头像已删除。",프로필사진제거실패:"删除头像失败: {error}",프로필업데이트중:"正在更新资料...",프로필업데이트완료:"资料更新成功。",프로필업데이트실패:"资料更新失败: {error}",닉네임입력:"输入您的昵称",닉네임최대길이:"最多可输入50个字符",소개글:"个人简介",소개글입력:"请输入自我介绍",소개글최대길이:"最多可输入200个字符",홈페이지:"网站",홈페이지입력:"请输入您的网站URL",GitHub:kC,GitHub입력:"请输入您的GitHub个人资料URL",사진업로드:"上传照片",사진제거:"删除照片",저장하기:"保存更改",저장중:"保存中...",테스트게시글생성타이틀:"📝 生成测试帖子",테스트게시글생성설명:"每个类别生成100条有趣的测试帖子，共400条。",로그인필요메시지:"⚠️ 使用此功能需要登录。",로그인하러가기:"前往登录",게시글생성시작:"开始生成帖子",생성중:"生成中...",생성성공:"✅ 成功生成了 {count} 条帖子！",생성실패:"❌ 生成帖子失败: {error}",경고:"⚠️ 警告",경고메시지:"这将创建 {count} 条测试帖子。仅用于测试目的。",진행상황:"进度",생성된게시글수:"已创建 {count} / {total} 条帖子",로딩중:"加载中...",게시판설명:"的最新新闻，分享您的意见。",글쓰기:"写作",게시글없음:"还没有帖子",첫게시글공유:"分享您的第一个故事并开始社区。",새글작성2:"写新帖子",게시글로딩중:"正在加载帖子...",게시글로드실패:"加载帖子失败。",더많은게시글로딩:"正在加载更多帖子...",모든게시글확인:"已加载所有帖子。",새게시글작성:"写新帖子",카테고리:"类别",카테고리선택:"选择类别",카테고리선택필요:"请选择一个类别。",제목:"标题",제목입력:"输入标题",제목입력필요:"请输入标题。",내용:"内容",내용입력:"输入内容",내용입력필요:"请输入内容。",전송:"发送",전송중:"发送中...",게시글작성완료:"帖子已创建。",게시글저장실패:"帖子保存失败: {error}",게시글저장중오류:"保存帖子时出错。",로그인정보확인불가:"无法验证登录信息。",좋아요실패:"处理点赞时出错。",이미좋아요:"您已经点赞过了。",댓글작성:"写评论",댓글내용입력:"请输入评论内容",댓글이작성되었습니다:"评论已创建。",댓글작성실패:"评论创建失败: {error}",댓글내용입력필요:"请输入评论内容。","error.unknown":"发生未知错误。","error.network":"请检查网络连接。","error.offline":"没有互联网连接。","error.auth.invalidEmail":"邮箱格式不正确。","error.auth.userDisabled":"账户已被禁用。","error.auth.userNotFound":"找不到用户。","error.auth.wrongPassword":"密码不正确。","error.auth.emailAlreadyInUse":"该邮箱已被使用。","error.auth.weakPassword":"密码太弱。（至少6个字符）","error.auth.operationNotAllowed":"此操作不被允许。","error.auth.tooManyRequests":"请求过多。请稍后再试。","error.auth.invalidVerificationCode":"验证码无效。","error.auth.invalidPhoneNumber":"电话号码格式不正确。","error.auth.missingVerificationCode":"请输入验证码。","error.auth.sessionExpired":"会话已过期。请重新登录。","error.auth.requiresRecentLogin":"为了安全，请重新登录。","error.auth.credentialAlreadyInUse":"此凭证已被其他账户使用。","error.db.permissionDenied":"您没有执行此操作的权限。","error.db.authenticationRequired":"请先登录。","error.db.networkError":"数据库连接时出错。","error.storage.unauthorized":"没有文件访问权限。","error.storage.bucketNotFound":"找不到存储桶。","error.storage.invalidArgument":"参数无效。","error.storage.objectNotFound":"找不到文件。","error.storage.retryLimitExceeded":"文件上传出错。请重试。","error.storage.quotaExceeded":"存储空间不足。","error.storage.canceled":"文件上传已取消。"},bc={en:bC,ko:wC,ja:xC,zh:EC};function dd(r){const e=(r??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function a_(){if(typeof navigator>"u")return"en";const r=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of r){const t=dd(e);if(t!=="en")return t}return"en"}function IC(r){let e=dd(r)||a_();function t(i){e=dd(i)}function n(){return e}function s(i,o={}){return((bc[e]??bc.en)[i]??bc.en[i]??i).replace(/\{(\w+)\}/g,(u,f)=>o[f]??"")}return{t:s,setLocale:t,getLocale:n}}const Hu="sns-web-locale",l_=[{code:"ko",label:"🇰🇷 한국어"},{code:"en",label:"🇺🇸 English"},{code:"ja",label:"🇯🇵 日本語"},{code:"zh",label:"🇨🇳 中文"}];function CC(){if(typeof localStorage>"u")return null;const r=localStorage.getItem(Hu);if(!r)return null;const e=l_.find(t=>t.code===r);return e?e.code:null}const c_=CC()??a_(),Ka=IC(c_);typeof localStorage<"u"&&localStorage.setItem(Hu,Ka.getLocale());const Wu=Vs(c_);function TC(r){Ka.setLocale(r);const e=Ka.getLocale();Wu.set(e),typeof localStorage<"u"&&localStorage.setItem(Hu,e)}const zt=M0(Wu,r=>(e,t={})=>Ka.t(e,t)),d_=Vs("");function jr(r){d_.set(r)}function qr(r){window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}var SC=R('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),AC=R('<img alt="프로필" class="avatar-image svelte-38psow"/>'),PC=R('<div class="avatar-fallback svelte-38psow"> </div>'),RC=R('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <button type="button" class="dropdown-item svelte-38psow"><!> <span> </span></button> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),NC=R('<img class="avatar-image svelte-38psow"/>'),LC=R('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),$C=R('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),DC=R('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"> </button> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),qC=R('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><button type="button" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></button> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const OC={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function MC(r,e){gt(e,!0),vt(r,OC);const t=()=>pt(d_,"$pageTitle",i),n=()=>pt(Sl,"$user",i),s=()=>pt(zt,"$t",i),[i,o]=Ot();let a=ee(!1);function l(A){qr(A),x(a,!1)}async function u(){if((await gC()).success){const C=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(C)}x(a,!1)}function f(){return ze.data?.displayName?ze.data.displayName.charAt(0).toUpperCase():ze.email?ze.email.charAt(0).toUpperCase():"U"}function m(){x(a,!p(a))}function v(A){const C=document.querySelector(".dropdown-menu"),E=document.querySelector(".dropdown-trigger"),T=A.target;C&&!C.contains(T)&&!E?.contains(T)&&x(a,!1)}Jt(()=>(document.addEventListener("click",v),()=>{document.removeEventListener("click",v)}));var _=qC(),g=d(_),w=d(g),k=d(w);k.__click=()=>l("/");var I=h(k,2);{var P=A=>{var C=SC(),E=d(C),T=d(E,!0);c(E),c(C),D(()=>b(T,t())),y(A,C)};j(I,A=>{t()&&A(P)})}c(w);var L=h(w,2),N=d(L);{var M=A=>{var C=$C(),E=de(C),T=d(E);T.__click=()=>l("/post/list");var q=d(T);Ji(q,{size:16});var O=h(q,2),V=d(O,!0);c(O),c(T);var Q=h(T,2);Q.__click=()=>l("/chat/list");var W=d(Q);is(W,{size:16});var le=h(W,2),ue=d(le,!0);c(le),c(Q);var se=h(Q,2);se.__click=()=>l("/user/list");var ve=d(se);No(ve,{size:16});var Z=h(ve,2),K=d(Z,!0);c(Z),c(se);var F=h(se,2),J=d(F);J.__click=m;var ie=d(J),X=d(ie);{var $=z=>{var ce=AC();D(()=>ke(ce,"src",ze.data.photoUrl)),y(z,ce)},B=z=>{var ce=PC(),pe=d(ce,!0);c(ce),D(Te=>b(pe,Te),[f]),y(z,ce)};j(X,z=>{ze.data?.photoUrl?z($):z(B,!1)})}c(ie);var oe=h(ie,2),H=d(oe,!0);c(oe),c(J);var re=h(J,2);{var U=z=>{var ce=RC(),pe=d(ce),Te=d(pe,!0);c(pe);var Pe=h(pe,4);Pe.__click=()=>l("/user/profile");var Ze=d(Pe);us(Ze,{size:16});var De=h(Ze,2),Ce=d(De,!0);c(De),c(Pe);var Ne=h(Pe,4);Ne.__click=u;var Ue=d(Ne);Jg(Ue,{size:16});var It=h(Ue,2),he=d(It,!0);c(It),c(Ne),c(ce),D((_e,me,Se)=>{b(Te,_e),b(Ce,me),b(he,Se)},[()=>s()("내계정"),()=>s()("프로필수정"),()=>s()("로그아웃")]),y(z,ce)};j(re,z=>{p(a)&&z(U)})}c(F);var ne=h(F,2);ne.__click=()=>l("/menu");var fe=d(ne);Xi(fe,{size:24}),c(ne),c(E);var Ie=h(E,2),ge=d(Ie);ge.__click=()=>l("/post/list");var we=d(ge);Ji(we,{size:20}),c(ge);var Re=h(ge,2);Re.__click=()=>l("/user/list");var Oe=d(Re);No(Oe,{size:20}),c(Re);var Qe=h(Re,2);Qe.__click=()=>l("/chat/list");var Ve=d(Qe);is(Ve,{size:20}),c(Qe);var st=h(Qe,2);st.__click=()=>l("/user/profile");var it=d(st),lt=d(it);{var Ke=z=>{var ce=NC();D(pe=>{ke(ce,"src",ze.data.photoUrl),ke(ce,"alt",pe)},[()=>s()("프로필")]),y(z,ce)},Je=z=>{var ce=LC(),pe=d(ce,!0);c(ce),D(Te=>b(pe,Te),[f]),y(z,ce)};j(lt,z=>{ze.data?.photoUrl?z(Ke):z(Je,!1)})}c(it),c(st);var Xe=h(st,2);Xe.__click=()=>l("/menu");var G=d(Xe);Xi(G,{size:24}),c(Xe),c(Ie),D((z,ce,pe,Te,Pe,Ze,De,Ce,Ne)=>{b(V,z),b(ue,ce),b(K,pe),b(H,ze.data?.displayName||ze.email),ke(ne,"title",Te),ke(ge,"title",Pe),ke(Re,"title",Ze),ke(Qe,"title",De),ke(st,"title",Ce),ke(Xe,"title",Ne)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("사용자찾기"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("사용자찾기"),()=>s()("채팅"),()=>s()("프로필"),()=>s()("메뉴")]),y(A,C)},S=A=>{var C=DC(),E=de(C),T=d(E);T.__click=()=>l("/post/list");var q=d(T);Ji(q,{size:16});var O=h(q,2),V=d(O,!0);c(O),c(T);var Q=h(T,2);Q.__click=()=>l("/chat/list");var W=d(Q);is(W,{size:16});var le=h(W,2),ue=d(le,!0);c(le),c(Q);var se=h(Q,2);se.__click=()=>l("/user/login");var ve=d(se,!0);c(se);var Z=h(se,2);Z.__click=()=>l("/menu");var K=d(Z);Xi(K,{size:20}),c(Z),c(E);var F=h(E,2),J=d(F);J.__click=()=>l("/post/list");var ie=d(J);Ji(ie,{size:20}),c(J);var X=h(J,2);X.__click=()=>l("/chat/list");var $=d(X);is($,{size:20}),c(X);var B=h(X,2);B.__click=()=>l("/user/login");var oe=d(B);us(oe,{size:20}),c(B);var H=h(B,2);H.__click=()=>l("/menu");var re=d(H);Xi(re,{size:24}),c(H),c(F),D((U,ne,fe,Ie,ge,we,Re,Oe)=>{b(V,U),b(ue,ne),b(ve,fe),ke(Z,"title",Ie),ke(J,"title",ge),ke(X,"title",we),ke(B,"title",Re),ke(H,"title",Oe)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴")]),y(A,C)};j(N,A=>{n()?A(M):A(S,!1)})}c(L),c(g),c(_),y(r,_),_t(),o()}Rt(["click"]);customElements.define("sns-topbar",xe(MC,{},[],[],!0));var zC=R('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>'),UC=R('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>',1),FC=R("<option> </option>"),jC=R('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const BC={hash:"svelte-najsij",code:`
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
  }`};function VC(r,e){gt(e,!1),vt(r,BC);const t=()=>pt(zt,"$t",i),n=()=>pt(Sl,"$user",i),s=()=>pt(Wu,"$locale",i),[i,o]=Ot(),a=l_;Er();var l=jC(),u=d(l),f=d(u),m=d(f,!0);c(f);var v=h(f,2),_=d(v);_.__click=()=>qr("/");var g=d(_);Kg(g,{size:20});var w=h(g,2),k=d(w,!0);c(w),c(_);var I=h(_,2);I.__click=()=>qr("/chat/room");var P=d(I);is(P,{size:20});var L=h(P,2),N=d(L,!0);c(L),c(I);var M=h(I,2);M.__click=()=>qr("/user/list");var S=d(M);No(S,{size:20});var A=h(S,2),C=d(A,!0);c(A),c(M);var E=h(M,2);E.__click=()=>qr("/user/profile");var T=d(E);us(T,{size:20});var q=h(T,2),O=d(q,!0);c(q),c(E);var V=h(E,2);V.__click=()=>qr("/post/list");var Q=d(V);Bu(Q,{size:20});var W=h(Q,2),le=d(W,!0);c(W),c(V),c(v);var ue=h(v,4),se=d(ue),ve=d(se,!0);c(se);var Z=h(se,2),K=d(Z);{var F=$e=>{var Ee=zC();Ee.__click=()=>qr("/user/profile");var Ae=d(Ee);us(Ae,{size:16});var wt=h(Ae,2),kt=d(wt,!0);c(wt),c(Ee),D(Wt=>b(kt,Wt),[()=>t()("회원정보수정")]),y($e,Ee)},J=$e=>{var Ee=UC(),Ae=de(Ee);Ae.__click=()=>qr("/auth/login");var wt=d(Ae);Qg(wt,{size:16});var kt=h(wt,2),Wt=d(kt,!0);c(kt),c(Ae);var Xt=h(Ae,2);Xt.__click=()=>qr("/auth/signup");var Y=d(Xt);us(Y,{size:16});var ae=h(Y,2),Me=d(ae,!0);c(ae),c(Xt),D((We,ct)=>{b(Wt,We),b(Me,ct)},[()=>t()("로그인"),()=>t()("회원가입")]),y($e,Ee)};j(K,$e=>{n()?$e(F):$e(J,!1)})}c(Z),c(ue);var ie=h(ue,4),X=d(ie);X.__click=()=>qr("/user/list");var $=d(X);No($,{size:16});var B=h($,2),oe=d(B,!0);c(B),c(X);var H=h(X,2),re=h(d(H),2),U=d(re,!0);c(re);var ne=h(re,2);ld(ne,{size:12,class:"external-icon"}),c(H);var fe=h(H,2),Ie=d(fe);is(Ie,{size:16});var ge=h(Ie,2),we=d(ge,!0);c(ge);var Re=h(ge,2);ld(Re,{size:12,class:"external-icon"}),c(fe);var Oe=h(fe,2);Oe.__click=()=>qr("/dev/history");var Qe=d(Oe);Vg(Qe,{size:16});var Ve=h(Qe,2),st=d(Ve,!0);c(Ve),c(Oe);var it=h(Oe,2);it.__click=()=>qr("/dev/sed");var lt=d(it);o_(lt,{size:16});var Ke=h(lt,2),Je=d(Ke,!0);c(Ke),c(it),c(ie);var Xe=h(ie,2),G=d(Xe),z=d(G,!0);c(G);var ce=h(G,2),pe=d(ce),Te=h(pe,2);Te.__change=$e=>TC($e.currentTarget.value),Qt(Te,5,()=>a,Tn,($e,Ee)=>{var Ae=FC(),wt=d(Ae,!0);c(Ae);var kt={};D(()=>{b(wt,p(Ee).label),kt!==(kt=p(Ee).code)&&(Ae.value=(Ae.__value=p(Ee).code)??"")}),y($e,Ae)}),c(Te);var Pe;Td(Te),c(ce),c(Xe);var Ze=h(Xe,2),De=d(Ze),Ce=d(De),Ne=d(Ce,!0);c(Ce);var Ue=h(Ce,2),It=d(Ue,!0);c(Ue),c(De),c(Ze);var he=h(Ze,2),_e=d(he),me=d(_e,!0),Se=h(me,2);c(_e),c(he),c(u),c(l),D(($e,Ee,Ae,wt,kt,Wt,Xt,Y,ae,Me,We,ct,Gt,Nt,Tt,Fe,et,Ye)=>{b(m,$e),b(k,Ee),b(N,Ae),b(C,wt),b(O,kt),b(le,Wt),b(ve,Xt),b(oe,Y),b(U,ae),b(we,Me),b(st,We),b(Je,ct),b(z,Gt),ke(pe,"aria-label",Nt),Pe!==(Pe=s())&&(Te.value=(Te.__value=s())??"",wo(Te,s())),b(Ne,Tt),b(It,Fe),b(me,et),b(Se,` ${Ye??""}`)},[()=>t()("퀵메뉴"),()=>t()("홈"),()=>t()("채팅"),()=>t()("사용자목록"),()=>t()("내프로필"),()=>t()("게시판"),()=>t()("시작하기"),()=>t()("회원목록"),()=>t()("프로젝트GitHub"),()=>t()("한바보참여단톡방"),()=>t()("개발일지"),()=>t()("바이브코딩SED"),()=>t()("언어설정"),()=>t()("언어설정"),()=>t()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>t()("카피레프트"),()=>t()("AI소개")]),y(r,l),_t(),o()}Rt(["click","change"]);customElements.define("sns-left-sidebar",xe(VC,{},[],[],!0));var HC=R('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const WC={hash:"svelte-3epon2",code:`\r
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
  }`};function GC(r,e){gt(e,!0),vt(r,WC);const t=()=>pt(zt,"$t",n),[n,s]=Ot();let i=ee(or({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=HC(),a=d(o),l=d(a),u=d(l,!0);c(l);var f=h(l,2),m=d(f),v=d(m),_=d(v);us(_,{size:20}),c(v);var g=h(v,2),w=d(g),k=d(w,!0);c(w);var I=h(w,2),P=d(I,!0);c(I),c(g),c(m);var L=h(m,2),N=d(L),M=d(N);i_(M,{size:20}),c(N);var S=h(N,2),A=d(S),C=d(A,!0);c(A);var E=h(A,2),T=d(E,!0);c(E),c(S),c(L);var q=h(L,2),O=d(q),V=d(O);Bu(V,{size:20}),c(O);var Q=h(O,2),W=d(Q),le=d(W,!0);c(W);var ue=h(W,2),se=d(ue,!0);c(ue);var ve=h(ue,2),Z=d(ve,!0);c(ve),c(Q),c(q);var K=h(q,2),F=d(K),J=d(F);is(J,{size:20}),c(F);var ie=h(F,2),X=d(ie),$=d(X,!0);c(X);var B=h(X,2),oe=d(B,!0);c(B),c(ie),c(K),c(f);var H=h(f,2),re=d(H,!0);c(H),c(a),c(o),D((U,ne,fe,Ie,ge,we,Re)=>{b(u,U),b(k,ne),b(P,p(i).totalUsers),b(C,fe),b(T,p(i).totalScore),b(le,Ie),b(se,p(i).totalPosts),b(Z,ge),b($,we),b(oe,p(i).totalMessages),b(re,Re)},[()=>t()("통계"),()=>t()("전체사용자"),()=>t()("전체점수"),()=>t()("전체글"),()=>t()("준비중"),()=>t()("채팅메시지"),()=>t()("통계실시간업데이트")]),y(r,o),_t(),s()}customElements.define("sns-right-sidebar",xe(GC,{},[],[],!0));var KC=R('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const YC={hash:"svelte-um1xbq",code:`\r
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
  }`};function QC(r,e){vt(r,YC);var t=KC(),n=d(t),s=h(n,2),i=d(s);cr(i,1,"left-sidebar svelte-um1xbq");var o=h(i,2),a=d(o);bt(a,e,"default",{}),c(o);var l=h(o,2);cr(l,1,"right-sidebar svelte-um1xbq"),c(s),c(t),y(r,t)}customElements.define("sns-layout",xe(QC,{},["default"],[],!0));var JC=R('<div class="icon-container svelte-m3h71q"> </div>'),XC=R('<p class="hint-box svelte-m3h71q"> </p>'),ZC=R('<p class="gpl-box svelte-m3h71q"> </p>'),eT=R('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),tT=R('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),rT=R('<div class="accordion svelte-m3h71q"></div>');const nT={hash:"svelte-m3h71q",code:`\r
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
  }`};function sT(r,e){gt(e,!0),vt(r,nT);let t=Be(e,"items",7,"[]"),n=Be(e,"type",7,"single"),s=Be(e,"collapsible",7,!0),i=Un(()=>{try{const v=typeof t()=="string"?JSON.parse(t()):t();return Array.isArray(v)?v:[]}catch(v){return console.error("Failed to parse accordion items:",v),[]}}),o=Un(()=>{const v=s();return typeof v=="boolean"?v:typeof v=="string"?v!=="false":!0}),a=ee(or(new Set));function l(v){const _=new Set(p(a));n()==="single"?_.has(v)?p(o)&&_.delete(v):(_.clear(),_.add(v)):_.has(v)?_.delete(v):_.add(v),x(a,_,!0)}function u(v){return p(a).has(v)}var f={get items(){return t()},set items(v="[]"){t(v),je()},get type(){return n()},set type(v="single"){n(v),je()},get collapsible(){return s()},set collapsible(v=!0){s(v),je()}},m=rT();return Qt(m,21,()=>p(i),Tn,(v,_,g)=>{var w=tT(),k=d(w);k.__click=()=>l(g);var I=d(k),P=d(I);{var L=q=>{var O=JC(),V=d(O,!0);c(O),D(()=>b(V,p(_).icon)),y(q,O)};j(P,q=>{p(_).icon&&q(L)})}var N=h(P,2),M=d(N,!0);c(N),c(I);var S=h(I,2);let A;var C=d(S);ju(C,{size:20}),c(S),c(k);var E=h(k,2);{var T=q=>{var O=eT(),V=d(O),Q=d(V,!0);c(V);var W=h(V,2);{var le=ve=>{var Z=XC(),K=d(Z,!0);c(Z),D(()=>b(K,p(_).hint)),y(ve,Z)};j(W,ve=>{p(_).hint&&ve(le)})}var ue=h(W,2);{var se=ve=>{var Z=ZC(),K=d(Z,!0);c(Z),D(()=>b(K,p(_).gpl)),y(ve,Z)};j(ue,ve=>{p(_).gpl&&ve(se)})}c(O),D(()=>b(Q,p(_).content)),y(q,O)};j(E,q=>{u(g)&&q(T)})}c(w),D((q,O)=>{ke(k,"aria-expanded",q),b(M,p(_).title),A=cr(S,1,"chevron svelte-m3h71q",null,A,O)},[()=>u(g),()=>({"rotate-180":u(g)})]),y(v,w)}),c(m),y(r,m),_t(f)}Rt(["click"]);customElements.define("sns-accordion",xe(sT,{items:{},type:{},collapsible:{}},[],[],!0));var iT=R('<h2 id="alert-title" class="alert-title svelte-1vwaezm"> </h2>'),oT=R('<p id="alert-message" class="alert-message svelte-1vwaezm"> </p>'),aT=R('<div class="alert-backdrop svelte-1vwaezm"><div role="alertdialog" aria-modal="true" aria-labelledby="alert-title" aria-describedby="alert-message"><button class="alert-close-btn svelte-1vwaezm" aria-label="닫기" type="button"><!></button> <div class="alert-icon svelte-1vwaezm"><!></div> <!> <!> <button class="alert-confirm-btn svelte-1vwaezm" type="button"> </button></div></div>');const lT={hash:"svelte-1vwaezm",code:`\r
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
  }`};function cT(r,e){gt(e,!0),vt(r,lT);let t=null,n=Be(e,"open",7,"false"),s=Be(e,"type",7,"info"),i=Be(e,"title",7,""),o=Be(e,"message",7,""),a=Be(e,"confirmText",7,"확인"),l=Be(e,"onconfirm",7),u=Be(e,"onclose",7);const f=Un(()=>n()==="true"||n()==="");function m(N){switch(N){case"success":return Ga;case"error":return Gg;case"info":return cd;case"warning":return s_;default:return cd}}function v(N){return`alert-${N}`}function _(N){l()&&l()();const M=new CustomEvent("confirm",{bubbles:!0,composed:!0}),S=e.$$host;S&&S.dispatchEvent(M)}function g(N){u()&&u()();const M=new CustomEvent("close",{bubbles:!0,composed:!0}),S=e.$$host;S&&S.dispatchEvent(M)}function w(N){N.target===N.currentTarget&&g()}$s(()=>{if(p(f)&&t)return document.body.appendChild(t),()=>{t&&document.body.contains(t)&&document.body.removeChild(t)}});var k={get open(){return n()},set open(N="false"){n(N),je()},get type(){return s()},set type(N="info"){s(N),je()},get title(){return i()},set title(N=""){i(N),je()},get message(){return o()},set message(N=""){o(N),je()},get confirmText(){return a()},set confirmText(N="확인"){a(N),je()},get onconfirm(){return l()},set onconfirm(N){l(N),je()},get onclose(){return u()},set onclose(N){u(N),je()}},I=ye(),P=de(I);{var L=N=>{var M=aT();M.__click=w;var S=d(M),A=d(S);A.__click=g;var C=d(A);Tl(C,{size:20}),c(A);var E=h(A,2),T=d(E);C0(T,()=>m(s()),(ue,se)=>{se(ue,{size:48,strokeWidth:2})}),c(E);var q=h(E,2);{var O=ue=>{var se=iT(),ve=d(se,!0);c(se),D(()=>b(ve,i())),y(ue,se)};j(q,ue=>{i()&&ue(O)})}var V=h(q,2);{var Q=ue=>{var se=oT(),ve=d(se,!0);c(se),D(()=>b(ve,o())),y(ue,se)};j(V,ue=>{o()&&ue(Q)})}var W=h(V,2);W.__click=_;var le=d(W,!0);c(W),c(S),c(M),Oo(M,ue=>t=ue,()=>t),D(ue=>{cr(S,1,`alert-dialog ${ue??""}`,"svelte-1vwaezm"),b(le,a())},[()=>v(s())]),y(N,M)};j(P,N=>{p(f)&&N(L)})}return y(r,I),_t(k)}Rt(["click"]);customElements.define("alert-dialog",xe(cT,{open:{},type:{},title:{},message:{},confirmText:{},onconfirm:{},onclose:{}},[],[],!1));var dT=R('<div class="uid-section svelte-1uta475"><div class="uid-label svelte-1uta475">현재 사용자 UID</div> <div class="uid-value svelte-1uta475"> </div></div> <div class="menu-divider svelte-1uta475"></div>',1),uT=R('<button class="account-button svelte-1uta475" role="menuitem"><span class="account-label svelte-1uta475"> </span> <span class="account-phone svelte-1uta475"> </span></button>'),hT=R('<div class="test-fab-menu svelte-1uta475" role="menu"><div class="menu-header svelte-1uta475"><span class="menu-title svelte-1uta475">테스트 도구</span></div> <div class="menu-divider svelte-1uta475"></div> <!> <div class="menu-section svelte-1uta475"><div class="section-title svelte-1uta475"><!> <span>테스트 계정 로그인</span></div> <div class="account-list svelte-1uta475"></div></div> <div class="menu-divider svelte-1uta475"></div> <button class="menu-button svelte-1uta475" role="menuitem"><!> <span>서버 정보 보기</span></button> <div class="menu-divider svelte-1uta475"></div> <div class="version-info svelte-1uta475"><p class="version-label svelte-1uta475">빌드 버전</p> <p class="version-value svelte-1uta475"> </p></div></div>'),fT=R('<div class="modal-overlay svelte-1uta475" role="dialog" aria-modal="true" aria-labelledby="server-info-title" tabindex="-1"><div class="modal-content svelte-1uta475"><h2 id="server-info-title" class="modal-title svelte-1uta475">서버 정보</h2> <div class="info-list svelte-1uta475"><div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">환경:</span> <span class="info-value svelte-1uta475"> </span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Svelte:</span> <span class="info-value svelte-1uta475">5.43.2</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Vite:</span> <span class="info-value svelte-1uta475">6.x</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Firebase:</span> <span class="info-value svelte-1uta475">설정됨</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">프로젝트 ID:</span> <span class="info-value info-value-small svelte-1uta475"> </span></div></div> <button class="modal-close-button svelte-1uta475">닫기</button></div></div>'),pT=R('<div class="test-fab-container svelte-1uta475"><button aria-label="테스트 도구 열기"><!></button> <!></div> <!>',1);const vT={hash:"svelte-1uta475",code:`
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

  /* reCAPTCHA 컨테이너 숨김 */`};function mT(r,e){gt(e,!0),vt(r,vT);const t=[{label:"A",name:"apple",email:"apple@test.com"},{label:"B",name:"banana",email:"banana@test.com"},{label:"C",name:"cherry",email:"cherry@test.com"},{label:"D",name:"durian",email:"durian@test.com"},{label:"E",name:"elderberry",email:"elderberry@test.com"},{label:"F",name:"fig",email:"fig@test.com"},{label:"G",name:"grape",email:"grape@test.com"},{label:"H",name:"honeydew",email:"honeydew@test.com"}],n="12345a,*";let s=ee(!1),i=ee(!1),o=ee(!1),a=ee(null);const l=Date.now(),u=new Date(l).toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),f="withcenter-test-5";Jt(()=>{console.log("TestFab 컴포넌트가 마운트되었습니다.");const C=Vd(vn,E=>{x(a,E,!0),console.log("Auth 상태 변경:",E?`로그인됨 (UID: ${E.uid})`:"로그아웃됨")});return()=>{C()}});async function m(C){if(!p(o)){x(o,!0),console.log(`${C.name} (${C.label}) 계정으로 로그인을 시도합니다...`);try{let E;try{E=await D2(vn,C.email,n),console.log(`${C.name} 계정으로 로그인 성공!`)}catch(T){if(T.code==="auth/user-not-found"||T.code==="auth/invalid-credential")console.log(`${C.name} 계정이 없습니다. 회원가입을 진행합니다...`),E=await $2(vn,C.email,n),await Xv(E.user,{displayName:C.name}),console.log(`${C.name} 계정 회원가입 및 로그인 성공!`);else throw T}alert(`${C.name} (${C.label}) 계정으로 로그인되었습니다.`),x(s,!1),window.location.href="/"}catch(E){console.error("로그인 오류:",E);let T="로그인에 실패했습니다.";E.code==="auth/invalid-email"?T="잘못된 이메일 형식입니다.":E.code==="auth/wrong-password"?T="비밀번호가 일치하지 않습니다.":E.code==="auth/too-many-requests"?T="너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.":E.code==="auth/weak-password"?T="비밀번호가 너무 약합니다.":E.code==="auth/email-already-in-use"&&(T="이미 사용 중인 이메일입니다."),alert(T+`
오류 코드: `+E.code)}finally{x(o,!1)}}}function v(){x(s,!p(s))}function _(){x(i,!p(i)),x(s,!1)}function g(C){const E=C.target;!E.closest(".test-fab-menu")&&!E.closest(".test-fab-button")&&x(s,!1)}var w=pT();mn("click",Ic,g);var k=de(w),I=d(k);let P;I.__click=v;var L=d(I);r_(L,{size:24}),c(I);var N=h(I,2);{var M=C=>{var E=hT(),T=h(d(E),4);{var q=K=>{var F=dT(),J=de(F),ie=h(d(J),2),X=d(ie,!0);c(ie),c(J),Ft(2),D(()=>b(X,p(a).uid)),y(K,F)};j(T,K=>{p(a)&&K(q)})}var O=h(T,2),V=d(O),Q=d(V);us(Q,{size:16}),Ft(2),c(V);var W=h(V,2);Qt(W,21,()=>t,K=>K.label,(K,F)=>{var J=uT();J.__click=()=>m(p(F));var ie=d(J),X=d(ie,!0);c(ie);var $=h(ie,2),B=d($,!0);c($),c(J),D(()=>{J.disabled=p(o),b(X,p(F).label),b(B,p(F).name)}),y(K,J)}),c(W),c(O);var le=h(O,4);le.__click=_;var ue=d(le);t_(ue,{size:16}),Ft(2),c(le);var se=h(le,4),ve=h(d(se),2),Z=d(ve,!0);c(ve),c(se),c(E),D(()=>b(Z,u)),y(C,E)};j(N,C=>{p(s)&&C(M)})}c(k);var S=h(k,2);{var A=C=>{var E=fT();E.__click=_;var T=d(E);T.__click=ve=>ve.stopPropagation();var q=h(d(T),2),O=d(q),V=h(d(O),2),Q=d(V,!0);c(V),c(O);var W=h(O,8),le=h(d(W),2),ue=d(le,!0);c(le),c(W),c(q);var se=h(q,2);se.__click=_,c(T),c(E),D(()=>{b(Q,"production"),b(ue,f)}),y(C,E)};j(S,C=>{p(i)&&C(A)})}D(()=>{P=cr(I,1,"test-fab-button svelte-1uta475",null,P,{loading:p(o)}),I.disabled=p(o)}),y(r,w),_t()}Rt(["click"]);customElements.define("test-fab",xe(mT,{},[],[],!1));function Gu(r,e){const{subscribe:t,set:n}=Vs({data:e??null,loading:!0,error:null}),s=Lt(Pt,r);return Jo(s,i=>{const o=i.val();n({data:o!==null?o:e??null,loading:!1,error:null}),console.log(`✅ 실시간 데이터 로드 성공: ${r}`,o!==null?o:e??null)},i=>{console.error(`❌ 실시간 데이터 로드 실패: ${r}`,i),n({data:e??null,loading:!1,error:i})}),{subscribe:t,set:n,update:i=>{throw new Error("직접 업데이트는 지원하지 않습니다. Firebase를 통해 데이터를 변경하세요.")},unsubscribe:()=>Ru(s)}}const u_=Gu;function gT(r){if(!r)return"error.unknown";const e={"auth/invalid-email":"error.auth.invalidEmail","auth/user-disabled":"error.auth.userDisabled","auth/user-not-found":"error.auth.userNotFound","auth/wrong-password":"error.auth.wrongPassword","auth/email-already-in-use":"error.auth.emailAlreadyInUse","auth/weak-password":"error.auth.weakPassword","auth/operation-not-allowed":"error.auth.operationNotAllowed","auth/too-many-requests":"error.auth.tooManyRequests","auth/invalid-verification-code":"error.auth.invalidVerificationCode","auth/invalid-phone-number":"error.auth.invalidPhoneNumber","auth/missing-verification-code":"error.auth.missingVerificationCode","auth/session-expired":"error.auth.sessionExpired","auth/requires-recent-login":"error.auth.requiresRecentLogin","auth/credential-already-in-use":"error.auth.credentialAlreadyInUse"},t={PERMISSION_DENIED:"error.db.permissionDenied","permission-denied":"error.db.permissionDenied","network-error":"error.db.networkError",offline:"error.offline","authentication-required":"error.db.authenticationRequired",disconnected:"error.offline",unavailable:"error.db.networkError"},n={"storage/unauthorized":"error.storage.unauthorized","storage/bucket-not-found":"error.storage.bucketNotFound","storage/invalid-argument":"error.storage.invalidArgument","storage/object-not-found":"error.storage.objectNotFound","storage/retry-limit-exceeded":"error.storage.retryLimitExceeded","storage/quota-exceeded":"error.storage.quotaExceeded","storage/canceled":"error.storage.canceled"};return e[r]?e[r]:t[r]?t[r]:n[r]?n[r]:r.includes("network")||r.includes("offline")?"error.network":r.toLowerCase().includes("permission")?"error.db.permissionDenied":"error.unknown"}function Pr(r,e="unknown"){if(!r)return console.error(`[${e}] 에러 객체가 없습니다.`),{key:"error.unknown",code:null,message:"No error object provided",context:e};const t=r;let n=t.code??null;if(!n&&t.message){const i=t.message.match(/\(([^)]+)\)/);i&&i[1]&&(n=i[1])}return console.error(`[${e}] Firebase 에러:`,{code:n,message:t.message,stack:t.stack,originalError:r}),{key:gT(n),code:n,message:t.message||"Unknown error",context:e}}async function _T(r,e,t,n,s,i){try{const o=Date.now(),a=`${r}-${o}`,l={uid:e,title:n,content:s,author:t,category:r,order:a,createdAt:o,updatedAt:o,likeCount:0,commentCount:0};i&&i.length>0&&(l.urls=i);const u=Lt(Pt,"posts");return{success:!0,postId:(await Ro(u,l)).key||void 0}}catch(o){const a=Pr(o,"createPost");return{success:!1,error:a.key,errorMessage:a.message}}}async function bT(r,e){try{const t=Lt(Pt,`posts/${r}`),n=await gn(t);if(!n.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const s=n.val();if(s.commentCount&&s.commentCount>0)return{success:!1,error:"댓글이달려있어수정불가",errorMessage:"Cannot edit post with comments"};const i={...e,updatedAt:Date.now()};return await ks(t,i),{success:!0}}catch(t){const n=Pr(t,"updatePost");return{success:!1,error:n.key,errorMessage:n.message}}}async function wT(r){try{const e=Lt(Pt,`posts/${r}`),t=await gn(e);if(!t.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const n=t.val();return n.commentCount&&n.commentCount>0?{success:!1,error:"댓글이달려있어삭제불가",errorMessage:"Cannot delete post with comments"}:(await c5(e),{success:!0})}catch(e){const t=Pr(e,"deletePost");return{success:!1,error:t.key,errorMessage:t.message}}}const ip=["community","qna","news","market"];function ud(r){let e=r;const t=r.lastIndexOf("-");if(t!==-1&&t<r.length-1){const n=r.substring(t+1);/^\d/.test(n)&&(e=n)}return e.split(",").map(n=>parseInt(n,10))}function h_(r,e){const t=e.map((n,s)=>s===0?String(n).padStart(5,"0"):s===1?String(n).padStart(4,"0"):String(n).padStart(3,"0")).join(",");return`${r}-${t}`}function yT(){return Array(12).fill(0)}async function xT(r){const{postId:e,userId:t,content:n,urls:s}=r;try{const i=Date.now(),o=Lt(Pt,"comments"),a=_r(o,gr("order"),Kr(`${e}-`),As(`${e}-z`)),l=await gn(a);let u=0;l.exists()&&l.forEach(I=>{const P=I.val();if(P.depth===1&&P.order){const N=ud(P.order)[0];N!==void 0&&N>u&&(u=N)}});const f=u+1,m=yT();m[0]=f;const v=h_(e,m),_={postId:e,uid:t,content:n,depth:1,order:v,parentId:null,createdAt:i,updatedAt:i};s&&s.length>0&&(_.urls=s);const w=Ro(o).key;if(!w)throw new Error("Failed to generate comment ID");const k={};return k[`comments/${w}`]=_,await ks(Lt(Pt),k),{success:!0,commentId:w}}catch(i){const o=Pr(i,"createTopLevelComment");return{success:!1,error:o.key,errorMessage:o.message}}}async function kT(r){const{parentCommentId:e,userId:t,content:n,urls:s}=r;try{const i=Lt(Pt,`comments/${e}`),o=await gn(i);if(!o.exists())return{success:!1,error:"error.comment.parentNotFound",errorMessage:"Parent comment not found"};const a=o.val(),l=a.depth||1,u=a.order||"",f=a.postId,m=l+1;if(m>12)return{success:!1,error:"error.comment.maxDepthExceeded",errorMessage:"Maximum comment depth exceeded (12)"};const v=ud(u),_=Lt(Pt,"comments"),g=_r(_,gr("order"),Kr(`${f}-`),As(`${f}-z`)),w=await gn(g);let k=0;w.exists()&&w.forEach(E=>{const T=E.val();if(T.parentId===e&&T.order){const O=ud(T.order)[m-1];O!==void 0&&O>k&&(k=O)}});const I=k+1,P=[...v];P[m-1]=I;const L=h_(f,P),N=Date.now(),M={postId:f,uid:t,content:n,depth:m,order:L,parentId:e,createdAt:N,updatedAt:N};s&&s.length>0&&(M.urls=s);const A=Ro(_).key;if(!A)throw new Error("Failed to generate comment ID");const C={};return C[`comments/${A}`]=M,await ks(Lt(Pt),C),{success:!0,commentId:A}}catch(i){const o=Pr(i,"createChildComment");return{success:!1,error:o.key,errorMessage:o.message}}}function ET(r,e){try{const t=Lt(Pt,"comments"),n=_r(t,gr("order"),Kr(`${r}-`),As(`${r}-z`));return Jo(n,s=>{if(s.exists()){const i=[];s.forEach(o=>{i.push({commentId:o.key,...o.val()})}),e(i)}else e([])}),()=>{Ru(t)}}catch(t){return console.error("댓글 조회 실패:",t),e([]),()=>{}}}async function IT(r,e){try{const t=Lt(Pt,`comments/${r}`),n=await gn(t);if(!n.exists())return{success:!1,error:"error.comment.notFound",errorMessage:"Comment not found"};if((n.val().commentCount||0)>0)return{success:!1,error:"댓글이달려있어수정불가",errorMessage:"Cannot update comment with child comments"};const o=Date.now(),a={};return a[`comments/${r}/content`]=e.content,a[`comments/${r}/updatedAt`]=o,e.urls!==void 0&&(e.urls.length>0?a[`comments/${r}/urls`]=e.urls:a[`comments/${r}/urls`]=null),await ks(Lt(Pt),a),{success:!0,commentId:r}}catch(t){const n=Pr(t,"updateComment");return{success:!1,error:n.key,errorMessage:n.message}}}async function CT(r){try{const e=Lt(Pt,`comments/${r}`),t=await gn(e);return t.exists()?(t.val().commentCount||0)>0?{success:!1,error:"댓글이달려있어삭제불가",errorMessage:"Cannot delete comment with child comments"}:(await ks(Lt(Pt),{[`comments/${r}`]:null}),{success:!0,commentId:r}):{success:!1,error:"error.comment.notFound",errorMessage:"Comment not found"}}catch(e){const t=Pr(e,"deleteComment");return{success:!1,error:t.key,errorMessage:t.message}}}async function TT(r,e,t){try{const n=e.startsWith("-")?e.substring(1):e,s={};return s[`likes/${r}-${n}-${t}`]=1,await ks(Lt(Pt),s),{success:!0}}catch(n){const s=Pr(n,"addLike");return{success:!1,error:s.key,errorMessage:s.message}}}async function ST(r,e,t){try{const n=e.startsWith("-")?e.substring(1):e,s={};return s[`likes/${r}-${n}-${t}`]=null,await ks(Lt(Pt),s),{success:!0}}catch(n){const s=Pr(n,"removeLike");return{success:!1,error:s.key,errorMessage:s.message}}}async function AT(r,e,t){try{const n=e.startsWith("-")?e.substring(1):e,s=Lt(Pt,`likes/${r}-${n}-${t}`);return(await gn(s)).exists()}catch(n){return console.error("좋아요 상태 확인 실패:",n),!1}}async function f_(r,e,t){try{const n=await AT(r,e,t);let s;return n?s=await ST(r,e,t):s=await TT(r,e,t),s.success?{success:!0,isLiked:!n}:{success:!1,isLiked:n,error:s.error,errorMessage:s.errorMessage}}catch(n){const s=Pr(n,"toggleLike");return{success:!1,isLiked:!1,error:s.key,errorMessage:s.message}}}console.log("SNS Web Components 로드됨 ✅");var PT=R('<div class="gpl-badge svelte-1ubq0t6"> </div>'),RT=R('<div class="hint svelte-1ubq0t6"> </div>'),NT=R('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),LT=R('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),$T=R('<div class="todo-description svelte-1ubq0t6"> </div>'),DT=R('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),qT=R('<div class="todo-subitems svelte-1ubq0t6"></div>'),OT=R('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),MT=R('<span class="badge svelte-1ubq0t6"> </span>'),zT=R('<div class="home svelte-1ubq0t6"><div class="hero-card svelte-1ubq0t6"><div class="hero-overlay svelte-1ubq0t6"></div> <div class="hero-content svelte-1ubq0t6"><a class="hero-badge-link svelte-1ubq0t6" href="/dev/history"><span class="hero-badge svelte-1ubq0t6"> </span> <span class="hero-badge-text svelte-1ubq0t6"> </span></a> <h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p> <div class="hero-actions svelte-1ubq0t6"><a class="hero-button primary svelte-1ubq0t6" href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer">🚀 단톡방 참여하기</a> <a class="hero-button ghost svelte-1ubq0t6" href="/help">📚 프로젝트 가이드 보기</a> <a class="hero-button ghost svelte-1ubq0t6" href="/dev/sed">🧠 신개념 바이브코딩 - SED</a></div></div></div> <section class="techstack-section svelte-1ubq0t6"><div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const UT={hash:"svelte-1ubq0t6",code:`
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
  }`};function p_(r,e){gt(e,!0),vt(r,UT);const t=()=>pt(zt,"$t",n),[n,s]=Ot();let i=ee(null);function o(me){x(i,p(i)===me?null:me,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]},{labelKey:"home.todo.item8.label",descriptionKey:"home.todo.item8.description",completed:!1,subitems:[{key:"home.todo.item8.subitem1",completed:!1},{key:"home.todo.item8.subitem2",completed:!1},{key:"home.todo.item8.subitem3",completed:!1},{key:"home.todo.item8.subitem4",completed:!1}]}],u=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var f=zT(),m=d(f),v=h(d(m),2),_=d(v),g=d(_),w=d(g);c(g);var k=h(g,2),I=d(k,!0);c(k),c(_);var P=h(_,2),L=d(P,!0);c(P);var N=h(P,2),M=d(N),S=h(M),A=d(S,!0);c(S);var C=h(S);c(N),Ft(2),c(v),c(m);var E=h(m,2),T=d(E),q=d(T),O=h(d(q),2),V=d(O,!0);c(O);var Q=h(O,2),W=d(Q,!0);c(Q),c(q);var le=h(q,2),ue=h(d(le),2),se=d(ue,!0);c(ue);var ve=h(ue,2),Z=d(ve,!0);c(ve),c(le);var K=h(le,2),F=h(d(K),2),J=d(F,!0);c(F);var ie=h(F,2),X=d(ie,!0);c(ie),c(K);var $=h(K,2),B=h(d($),2),oe=d(B,!0);c(B);var H=h(B,2),re=d(H,!0);c(H),c($),c(T),c(E);var U=h(E,2),ne=d(U),fe=d(ne,!0);c(ne);var Ie=h(ne,2);Qt(Ie,21,()=>a,Tn,(me,Se)=>{var $e=LT(),Ee=d($e);Ee.__click=()=>o(p(Se).id);var Ae=d(Ee),wt=d(Ae,!0);c(Ae);var kt=h(Ae,2);let Wt;var Xt=d(kt);ju(Xt,{size:20}),c(kt),c(Ee);var Y=h(Ee,2);{var ae=Me=>{var We=NT(),ct=d(We),Gt=d(ct,!0);c(ct);var Nt=h(ct,2);{var Tt=Ye=>{var ft=PT(),Ut=d(ft,!0);c(ft),D(Ge=>b(Ut,Ge),[()=>t()("home.aiTruth.item3.gpl")]),y(Ye,ft)};j(Nt,Ye=>{p(Se).showGpl&&Ye(Tt)})}var Fe=h(Nt,2);{var et=Ye=>{var ft=RT(),Ut=d(ft,!0);c(ft),D(Ge=>b(Ut,Ge),[()=>t()(p(Se).hintKey)]),y(Ye,ft)};j(Fe,Ye=>{p(Se).hintKey&&Ye(et)})}c(We),D(Ye=>b(Gt,Ye),[()=>t()(p(Se).contentKey)]),y(Me,We)};j(Y,Me=>{p(i)===p(Se).id&&Me(ae)})}c($e),D(Me=>{ke(Ee,"aria-expanded",p(i)===p(Se).id),b(wt,Me),Wt=cr(kt,1,"accordion-icon svelte-1ubq0t6",null,Wt,{open:p(i)===p(Se).id})},[()=>t()(p(Se).titleKey)]),y(me,$e)}),c(Ie),c(U);var ge=h(U,2),we=d(ge),Re=d(we,!0);c(we);var Oe=h(we,2);Qt(Oe,21,()=>l,Tn,(me,Se)=>{var $e=OT(),Ee=d($e),Ae=d(Ee);let wt;var kt=d(Ae);{var Wt=Fe=>{Ga(Fe,{size:20})},Xt=Fe=>{ad(Fe,{size:20})};j(kt,Fe=>{p(Se).completed?Fe(Wt):Fe(Xt,!1)})}c(Ae);var Y=h(Ae,2),ae=d(Y);let Me;var We=d(ae,!0);c(ae);var ct=h(ae,2);{var Gt=Fe=>{var et=$T(),Ye=d(et,!0);c(et),D(ft=>b(Ye,ft),[()=>t()(p(Se).descriptionKey)]),y(Fe,et)};j(ct,Fe=>{p(Se).descriptionKey&&Fe(Gt)})}c(Y),c(Ee);var Nt=h(Ee,2);{var Tt=Fe=>{var et=qT();Qt(et,21,()=>p(Se).subitems,Tn,(Ye,ft)=>{var Ut=DT(),Ge=d(Ut);let dt;var Kt=d(Ge);{var Ir=$r=>{Ga($r,{size:16})},rr=$r=>{ad($r,{size:16})};j(Kt,$r=>{p(ft).completed?$r(Ir):$r(rr,!1)})}c(Ge);var nr=h(Ge,2);let Qn;var En=d(nr,!0);c(nr),c(Ut),D($r=>{dt=cr(Ge,1,"todo-subicon svelte-1ubq0t6",null,dt,{completed:p(ft).completed}),Qn=cr(nr,1,"todo-subtext svelte-1ubq0t6",null,Qn,{completed:p(ft).completed}),b(En,$r)},[()=>t()(p(ft).key)]),y(Ye,Ut)}),c(et),y(Fe,et)};j(Nt,Fe=>{p(Se).subitems.length>0&&Fe(Tt)})}c($e),D(Fe=>{wt=cr(Ae,1,"todo-icon svelte-1ubq0t6",null,wt,{completed:p(Se).completed}),Me=cr(ae,1,"todo-label svelte-1ubq0t6",null,Me,{completed:p(Se).completed}),b(We,Fe)},[()=>t()(p(Se).labelKey)]),y(me,$e)}),c(Oe),c(ge);var Qe=h(ge,2),Ve=d(Qe),st=d(Ve,!0);c(Ve);var it=h(Ve,2),lt=d(it),Ke=d(lt),Je=d(Ke,!0);c(Ke);var Xe=h(Ke,1,!0);c(lt);var G=h(lt,2);Qt(G,21,()=>u,Tn,(me,Se)=>{var $e=MT(),Ee=d($e,!0);c($e),D(Ae=>b(Ee,Ae),[()=>t()(p(Se))]),y(me,$e)}),c(G),c(it),c(Qe);var z=h(Qe,2),ce=d(z),pe=d(ce,!0);c(ce);var Te=h(ce,2),Pe=d(Te),Ze=d(Pe,!0);c(Pe);var De=h(Pe,2),Ce=d(De),Ne=h(Ce),Ue=d(Ne,!0);c(Ne);var It=h(Ne,1,!0);c(De);var he=h(De,2),_e=d(he,!0);c(he),c(Te),c(z),c(f),D((me,Se,$e,Ee,Ae,wt,kt,Wt,Xt,Y,ae,Me,We,ct,Gt,Nt,Tt,Fe,et,Ye,ft,Ut,Ge,dt,Kt)=>{b(w,`✨ ${me??""}`),b(I,Se),b(L,$e),b(M,`${Ee??""} `),b(A,Ae),b(C,` ${wt??""}`),b(V,kt),b(W,Wt),b(se,Xt),b(Z,Y),b(J,ae),b(X,Me),b(oe,We),b(re,ct),b(fe,Gt),b(Re,Nt),b(st,Tt),b(Je,Fe),b(Xe,et),b(pe,Ye),b(Ze,ft),b(Ce,`${Ut??""} `),b(Ue,Ge),b(It,dt),b(_e,Kt)},[()=>t()("home.vibeBanner"),()=>t()("home.overview.badge3"),()=>t()("home.title"),()=>t()("home.description.part1"),()=>t()("home.description.linkText"),()=>t()("home.description.part2"),()=>t()("home.techStack.svelte"),()=>t()("home.techStack.svelteDesc"),()=>t()("home.techStack.flutter"),()=>t()("home.techStack.flutterDesc"),()=>t()("home.techStack.firebase"),()=>t()("home.techStack.firebaseDesc"),()=>t()("home.techStack.dokplay"),()=>t()("home.techStack.dokplayDesc"),()=>t()("home.aiTruth.title"),()=>t()("home.todo.title"),()=>t()("home.overview.title"),()=>t()("home.overview.brand"),()=>t()("home.overview.description"),()=>t()("home.aiChange.title"),()=>t()("home.aiChange.description"),()=>t()("home.aiChange.emphasis"),()=>t()("home.aiChange.highlight"),()=>t()("home.aiChange.conclusion"),()=>t()("home.aiChange.hint")]),y(r,f),_t(),s()}Rt(["click"]);xe(p_,{},[],[],!0);var FT=R('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx"> </p> <phone-login></phone-login></div>',2),jT=R('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx"> </h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx"> </a></div>'),BT=R('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const VT={hash:"svelte-1mz53xx",code:`\r
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
  }`};function v_(r,e){gt(e,!1),vt(r,VT);const t=()=>pt(zt,"$t",s),n=()=>pt(Sl,"$user",s),[s,i]=Ot();function o(_){console.log("Login successful:",_.detail),alert(t()("로그인성공알림",{phone:_.detail.phoneNumber})),window.location.href="/"}function a(_){console.error("Login error:",_.detail),alert(t()("로그인실패",{error:_.detail.error}))}Er();var l=BT(),u=d(l),f=d(u);{var m=_=>{var g=FT(),w=d(g),k=d(w,!0);c(w);var I=h(w,2),P=d(I,!0);c(I);var L=h(I,2);c(g),D((N,M)=>{b(k,N),b(P,M)},[()=>t()("로그인"),()=>t()("전화번호로로그인")]),mn("login-success",L,o),mn("login-error",L,a),y(_,g)},v=_=>{var g=jT(),w=d(g),k=d(w,!0);c(w);var I=h(w,2),P=d(I,!0);c(I);var L=h(I,2),N=d(L,!0);c(L),c(g),D((M,S,A)=>{b(k,M),b(P,S),b(N,A)},[()=>t()("웰컴"),()=>t()("로그인하셨습니다",{phone:n().phoneNumber}),()=>t()("홈으로이동")]),y(_,g)};j(f,_=>{n()?_(v,!1):_(m)})}c(u),c(l),y(r,l),_t(),i()}xe(v_,{},[],[],!0);var HT=R('<button class="menu-item svelte-163o8b2"> </button>'),WT=R('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2"> </p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const GT={hash:"svelte-163o8b2",code:`\r
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
  }`};function m_(r,e){gt(e,!0),vt(r,GT);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Jt(()=>{jr(t()("메뉴"))});let i=Un(()=>[{label:t()("홈"),path:"/"},{label:t()("로그인"),path:"/user/login"},{label:t()("사용자프로필"),path:"/user/profile"},{label:t()("게시물목록"),path:"/post/list"},{label:t()("게시물상세예시"),path:"/post/detail/123"},{label:t()("채팅목록"),path:"/chat/list"},{label:t()("설정"),path:"/settings"},{label:t()("정보"),path:"/about"},{label:t()("도움말"),path:"/help"},{label:t()("이용약관"),path:"/terms"},{label:t()("개인정보"),path:"/privacy"},{label:t()("문의하기"),path:"/contact"},{label:t()("개발일지"),path:"/dev/history"},{label:t()("바이브코딩SED"),path:"/dev/sed"},{label:t()("테스트게시글생성"),path:"/dev/generate-posts"}]);var o=WT(),a=d(o),l=d(a),u=d(l,!0);c(l);var f=h(l,2);Qt(f,21,()=>p(i),m=>m.path,(m,v)=>{var _=HT();_.__click=()=>qr(p(v).path);var g=d(_,!0);c(_),D(()=>b(g,p(v).label)),y(m,_)}),c(f),c(a),c(o),D(m=>b(u,m),[()=>t()("페이지선택")]),y(r,o),_t(),s()}Rt(["click"]);xe(m_,{},[],[],!0);var KT=R('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),YT=R('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3"> </span></div>'),QT=R('<button type="button" class="photo-remove-button svelte-17u94r3"><!></button>'),JT=R('<p class="upload-status svelte-17u94r3"> </p>'),XT=R('<div class="message-box success-message svelte-17u94r3"> </div>'),ZT=R('<div class="message-box error-message svelte-17u94r3"> </div>'),eS=R('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3"> </label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3"> </p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName"> </label> <input type="text" id="displayName" class="form-input svelte-17u94r3" maxlength="50" required/> <p class="form-helper svelte-17u94r3"> </p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender"> </label> <select id="gender" class="form-select svelte-17u94r3"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth"> </label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3"> </p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3"> </button></div></form></div>');const tS={hash:"svelte-17u94r3",code:`
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
  }`};function g_(r,e){gt(e,!0),vt(r,tS);const t=()=>pt(zt,"$t",n),[n,s]=Ot();let i=ee(or({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),o=ee(null),a=ee(null),l=ee(!1),u=ee(!1),f=ee(null),m=ee(null),v=null,_=null;function g(he){x(f,he,!0),v&&clearTimeout(v),v=setTimeout(()=>{x(f,null),v=null},3e3)}function w(he){x(m,he,!0),_&&clearTimeout(_),_=setTimeout(()=>{x(m,null),_=null},5e3)}av(()=>{v&&clearTimeout(v),_&&clearTimeout(_)}),Jt(()=>{jr(t()("프로필수정"))}),$s(()=>{if(ze.data){p(i).displayName=ze.data.displayName||"",p(i).gender=ze.data.gender||"",p(i).dateOfBirth=ze.data.dateOfBirth||"";const he=ze.data.photoUrl??ze.data.photoURL??"";p(i).photoUrl=he,x(o,he||null,!0)}});function k(){p(u)||p(a)?.click()}async function I(he){const me=he.currentTarget?.files?.[0];if(!me)return;if(p(u)){w(t()("사진작업진행중"));return}if(!ze.isAuthenticated||!ze.uid){w(t()("로그인필요"));return}if(!me.type.startsWith("image/")){w(t()("이미지파일만가능"));return}if(me.size>5*1024*1024){w(t()("파일크기5MB제한"));return}const Se=p(o),$e=p(i).photoUrl,Ee=new FileReader;Ee.onload=Ae=>{const wt=Ae.target?.result;typeof wt=="string"&&x(o,wt,!0)},Ee.readAsDataURL(me);try{await L(me)}catch{x(o,Se,!0),p(i).photoUrl=$e,p(a)&&(p(a).value="")}}async function P(){if(p(u))return;if(!ze.isAuthenticated||!ze.uid){w(t()("로그인필요"));return}const he=p(o),_e=p(i).photoUrl;x(o,null),p(i).photoUrl="",p(a)&&(p(a).value="");try{x(u,!0),await ze.updateProfile({photoUrl:null}),g(t()("프로필사진제거완료"))}catch(me){console.error("프로필 사진 제거 오류:",me),w(t()("사진제거실패",{error:me.message||t()("알수없는오류")})),x(o,he,!0),p(i).photoUrl=_e}finally{x(u,!1)}}async function L(he,{showSuccess:_e=!0}={}){if(!ze.isAuthenticated||!ze.uid)throw w(t()("로그인필요")),new Error("User is not authenticated");try{x(u,!0);const me=he.name.split(".").pop()?.toLowerCase()||"jpg",Se=`profile_${ze.uid}_${Date.now()}.${me}`,$e=zu(Fu,`users/${ze.uid}/profile/${Se}`),Ee=await zI($e,he),Ae=await jg(Ee.ref);return p(i).photoUrl=Ae,x(o,Ae,!0),await ze.updateProfile({photoUrl:Ae}),_e&&g(t()("프로필사진저장완료")),Ae}catch(me){throw console.error("프로필 사진 업로드 오류:",me),w(t()("사진저장실패",{error:me.message||t()("알수없는오류")})),me}finally{x(u,!1),p(a)&&(p(a).value="")}}async function N(he){he.preventDefault(),x(l,!0),x(m,null),x(f,null);try{let _e=p(i).photoUrl;const me=p(a)?.files?.[0];if(me)try{_e=await L(me,{showSuccess:!1})}catch{x(l,!1);return}const Se={displayName:p(i).displayName,gender:p(i).gender,dateOfBirth:p(i).dateOfBirth,photoUrl:_e||null};await ze.updateProfile(Se),g(t()("프로필업데이트완료")),console.log("프로필 업데이트 완료:",Se)}catch(_e){console.error("프로필 업데이트 오류:",_e),w(t()("프로필업데이트실패",{error:_e.message||t()("알수없는오류")}))}finally{x(l,!1)}}function M(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var S=eS(),A=d(S),C=d(A),E=d(C),T=d(E,!0);c(E);var q=h(E,2),O=d(q);O.__change=I,Oo(O,he=>x(a,he),()=>p(a));var V=h(O,2),Q=d(V);Q.__click=k;var W=d(Q);{var le=he=>{var _e=KT();D(()=>ol(_e,`background-image: url("${p(o)}")`)),y(he,_e)},ue=he=>{var _e=YT(),me=h(d(_e),2),Se=d(me,!0);c(me),c(_e),D($e=>b(Se,$e),[()=>t()("사진없음")]),y(he,_e)};j(W,he=>{p(o)?he(le):he(ue,!1)})}c(Q);var se=h(Q,2);{var ve=he=>{var _e=QT();_e.__click=P;var me=d(_e);Tl(me,{size:18,"stroke-width":3}),c(_e),D(Se=>{_e.disabled=p(l)||p(u),ke(_e,"aria-label",Se)},[()=>t()("프로필사진제거")]),y(he,_e)};j(se,he=>{p(o)&&he(ve)})}var Z=h(se,2),K=d(Z);Hg(K,{size:20,"stroke-width":2}),c(Z),c(V);var F=h(V,2),J=d(F,!0);c(F);var ie=h(F,2);{var X=he=>{var _e=JT(),me=d(_e,!0);c(_e),D(Se=>b(me,Se),[()=>t()("사진저장중")]),y(he,_e)};j(ie,he=>{p(u)&&he(X)})}c(q),c(C);var $=h(C,2),B=d($),oe=d(B,!0);c(B);var H=h(B,2);fs(H);var re=h(H,2),U=d(re,!0);c(re),c($);var ne=h($,2),fe=d(ne),Ie=d(fe,!0);c(fe);var ge=h(fe,2),we=d(ge),Re=d(we,!0);c(we),we.value=we.__value="";var Oe=h(we),Qe=d(Oe,!0);c(Oe),Oe.value=Oe.__value="male";var Ve=h(Oe),st=d(Ve,!0);c(Ve),Ve.value=Ve.__value="female";var it=h(Ve),lt=d(it,!0);c(it),it.value=it.__value="other",c(ge),c(ne);var Ke=h(ne,2),Je=d(Ke),Xe=d(Je,!0);c(Je);var G=h(Je,2);fs(G);var z=h(G,2),ce=d(z,!0);c(z),c(Ke);var pe=h(Ke,2);{var Te=he=>{var _e=XT(),me=d(_e);c(_e),D(()=>b(me,`✅ ${p(f)??""}`)),y(he,_e)};j(pe,he=>{p(f)&&he(Te)})}var Pe=h(pe,2);{var Ze=he=>{var _e=ZT(),me=d(_e);c(_e),D(()=>b(me,`⚠️ ${p(m)??""}`)),y(he,_e)};j(Pe,he=>{p(m)&&he(Ze)})}var De=h(Pe,2),Ce=d(De),Ne=d(Ce,!0);c(Ce);var Ue=h(Ce,2);Ue.__click=M;var It=d(Ue,!0);c(Ue),c(De),c(A),c(S),D((he,_e,me,Se,$e,Ee,Ae,wt,kt,Wt,Xt,Y,ae,Me,We,ct)=>{b(T,he),ke(O,"aria-label",_e),Q.disabled=p(l)||p(u),ke(Q,"aria-label",me),b(J,Se),b(oe,$e),ke(H,"placeholder",Ee),H.disabled=p(l),b(U,Ae),b(Ie,wt),ge.disabled=p(l),b(Re,kt),b(Qe,Wt),b(st,Xt),b(lt,Y),b(Xe,ae),G.disabled=p(l),b(ce,Me),Ce.disabled=p(l)||p(u)||!ze.isAuthenticated,b(Ne,We),Ue.disabled=p(l),b(It,ct)},[()=>t()("프로필사진"),()=>t()("프로필사진선택"),()=>p(o)?t()("프로필사진변경"):t()("프로필사진추가"),()=>t()("프로필사진클릭변경"),()=>t()("닉네임"),()=>t()("닉네임입력"),()=>t()("닉네임최대50자"),()=>t()("성별"),()=>t()("선택하지않음"),()=>t()("남자"),()=>t()("여자"),()=>t()("기타"),()=>t()("생년월일"),()=>t()("생년월일형식"),()=>p(l)?t()("저장중"):t()("저장"),()=>t()("취소")]),mn("submit",A,N),tn(H,()=>p(i).displayName,he=>p(i).displayName=he),nv(ge,()=>p(i).gender,he=>p(i).gender=he),tn(G,()=>p(i).dateOfBirth,he=>p(i).dateOfBirth=he),y(r,S),_t(),s()}Rt(["change","click"]);xe(g_,{},[],[],!0);var rS=R('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),nS=R('<div class="loading-container svelte-a4suww"><!></div>'),sS=R('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),iS=R('<div class="error-container svelte-a4suww"><!></div>'),oS=R('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),aS=R('<div class="empty-container svelte-a4suww"><!></div>'),lS=R('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),cS=R('<div class="item-wrapper svelte-a4suww"><!></div>'),dS=R('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),uS=R('<div class="loading-more svelte-a4suww"><!></div>'),hS=R('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),fS=R('<div class="no-more svelte-a4suww"><!></div>'),pS=R('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),vS=R('<div class="database-list-view svelte-a4suww"><!></div>');const mS={hash:"svelte-a4suww",code:`\r
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
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function Ku(r,e){gt(e,!0),vt(r,mS);let t=Be(e,"path",7,""),n=Be(e,"pageSize",7,10),s=Be(e,"orderBy",7,"createdAt"),i=Be(e,"sortPrefix",7,""),o=Be(e,"threshold",7,300),a=Be(e,"reverse",7,!1),l=Be(e,"item",7),u=Be(e,"loading",7),f=Be(e,"empty",7),m=Be(e,"error",7),v=Be(e,"loadingMore",7),_=Be(e,"noMore",7),g=ee(or([])),w=ee(!1),k=ee(!0),I=ee(!0),P=ee(null),L=ee(null),N=ee(0),M=ee(null),S=ee(null),A=new Map,C=new Map,E=null,T=ee(!1),q=null;$s(()=>(t()&&Pt&&le(),()=>{console.log("DatabaseListView: Cleaning up listeners"),E&&(E(),E=null),q&&(q(),q=null),A.forEach($=>{$()}),A.clear(),console.log("DatabaseListView: All listeners cleaned up")})),$s(()=>{if(p(S))return p(S).addEventListener("scroll",se),window.addEventListener("scroll",ve),()=>{p(S)?.removeEventListener("scroll",se),window.removeEventListener("scroll",ve)}});function O($,B){if($.length===0)return null;const oe=$[$.length-1];if(!oe)return null;const H=oe.data[B];return H!=null&&H!==""?(console.log(`DatabaseListView: Using cursor from '${B}':`,{value:H,key:oe.key}),{value:H,key:oe.key}):(console.error(`DatabaseListView: CRITICAL ERROR - Field '${B}' not found in last item (key: ${oe.key}).`,"This will prevent pagination from working correctly.",`Please ensure all items in '${t()}' have the '${B}' field.`,"Item data:",oe.data),x(M,`데이터 정렬 필드 '${B}'가 누락되었습니다. 데이터베이스 구조를 확인해주세요.`),null)}function V($,B){const oe=`${$}`;if(A.has(oe))return;const H=Lt(Pt,`${t()}/${$}`),re=Jo(H,U=>{if(U.exists()){const ne=U.val();p(g)[B]={key:$,data:ne},x(g,[...p(g)],!0),console.log(`DatabaseListView: Item updated ${$}`,ne)}},U=>{console.error(`DatabaseListView: Error listening to item ${$}`,U)});A.set(oe,re)}function Q(){E&&(E(),E=null),console.log("DatabaseListView: Setting up child_added listener for",t()),x(T,!1);const $=Lt(Pt,t());let B;i()?(B=_r($,gr(s()),Kr(i()),As(i()+"")),console.log("DatabaseListView: child_added listener with sortPrefix:",i())):(B=_r($,gr(s()),Kr(!1)),console.log("DatabaseListView: child_added listener with startAt(false) to filter null/undefined")),E=d5(B,oe=>{if(!p(T))return;const H=oe.key,re=oe.val();if(!H){console.warn("DatabaseListView: Snapshot key is null, skipping");return}if(p(g).some(fe=>fe.key===H)){console.log("DatabaseListView: Child already exists, skipping:",H);return}console.log("DatabaseListView: New child added:",H,re);const ne={key:H,data:re};if(a())x(g,[ne,...p(g)],!0),console.log("DatabaseListView: Added new item to the beginning (reverse mode)"),V(H,0);else{const fe=p(g).length;x(g,[...p(g),ne],!0),console.log("DatabaseListView: Added new item to the end (normal mode)"),V(H,fe)}},oe=>{console.error("DatabaseListView: Error in child_added listener",oe)}),setTimeout(()=>{x(T,!0),console.log("DatabaseListView: child_added listener is now ready to accept new children")},1e3)}function W(){q&&(q(),q=null),console.log("DatabaseListView: Setting up child_removed listener for",t());const $=Lt(Pt,t());let B;i()?(B=_r($,gr(s()),Kr(i()),As(i()+"")),console.log("DatabaseListView: child_removed listener with sortPrefix:",i())):(B=_r($,gr(s()),Kr(!1)),console.log("DatabaseListView: child_removed listener with startAt(false)")),q=u5(B,oe=>{const H=oe.key;if(!H){console.warn("DatabaseListView: Removed snapshot key is null, skipping");return}console.log("DatabaseListView: Child removed:",H);const re=p(g).findIndex(U=>U.key===H);if(re!==-1){x(g,p(g).filter(fe=>fe.key!==H),!0),console.log("DatabaseListView: Removed item from list:",H,"(was at index",re,")");const U=`${H}`,ne=A.get(U);ne&&(ne(),A.delete(U),console.log("DatabaseListView: Unsubscribed from removed item:",H))}else console.log("DatabaseListView: Removed item not found in current list:",H)},oe=>{console.error("DatabaseListView: Error in child_removed listener",oe)})}async function le(){console.log("DatabaseListView: Loading initial data from",t(),"(reverse:",a(),")"),x(k,!0),x(M,null),x(g,[],!0),C.clear(),A.forEach($=>$()),A.clear(),E&&(E(),E=null),x(T,!1),q&&(q(),q=null),x(P,null),x(L,null),x(I,!0),x(N,0);try{const $=Lt(Pt,t());let B;a()?i()?(B=_r($,gr(s()),Kr(i()),As(i()+""),ia(n()+1)),console.log("DatabaseListView: Using limitToLast with sortPrefix:",i())):(B=_r($,gr(s()),Kr(!1),ia(n()+1)),console.log("DatabaseListView: Using limitToLast with startAt(false) to filter null/undefined")):i()?(B=_r($,gr(s()),Kr(i()),As(i()+""),sa(n()+1)),console.log("DatabaseListView: Using limitToFirst with sortPrefix:",i())):(B=_r($,gr(s()),Kr(!1),sa(n()+1)),console.log("DatabaseListView: Using limitToFirst with startAt(false) to filter null/undefined"));const oe=await gn(B);if(oe.exists()){const H=[],re=oe.val();if(Object.entries(re).forEach(([U,ne])=>{H.push({key:U,data:ne})}),console.log(`DatabaseListView: Initial query returned ${H.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",H.map(U=>({key:U.key,[s()]:U.data[s()]}))),a()&&(H.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)")),H.length>n()){x(I,!0),x(g,H.slice(0,n()),!0);const U=O(p(g),s());U?(x(P,U.value,!0),x(L,U.key,!0),console.log("DatabaseListView: Next page cursor set:",{lastLoadedValue:p(P),lastLoadedKey:p(L)})):x(I,!1)}else if(x(I,!1),x(g,H,!0),p(g).length>0){const U=O(p(g),s());U&&(x(P,U.value,!0),x(L,U.key,!0),console.log("DatabaseListView: Last cursor set:",{lastLoadedValue:p(P),lastLoadedKey:p(L)}))}C.set(0,p(g)),p(g).forEach((U,ne)=>{V(U.key,ne)}),console.log(`DatabaseListView: Page ${p(N)} - Loaded ${p(g).length} items, hasMore: ${p(I)}`)}else console.log("DatabaseListView: No data found"),x(g,[],!0),x(I,!1)}catch($){console.error("DatabaseListView: Load error",$),x(M,$ instanceof Error?$.message:String($),!0)}finally{x(k,!1),Q(),W()}}async function ue(){if(p(w)||!p(I)){console.log("DatabaseListView: Cannot load more - loading:",p(w),"hasMore:",p(I));return}Ec(N),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${p(N)}`),console.log("DatabaseListView: Current cursor - lastLoadedValue:",p(P),"lastLoadedKey:",p(L)),x(w,!0),x(M,null);try{if(p(P)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),x(I,!1),x(w,!1);return}const $=Lt(Pt,t());let B;a()?i()?(B=_r($,gr(s()),Jf(p(P)),ia(n()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination with sortPrefix (client-side filtering)")):(B=_r($,gr(s()),Jf(p(P)),ia(n()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination (no startAt needed)")):i()?(B=_r($,gr(s()),Xf(p(P)),sa(n()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination with sortPrefix (client-side filtering)")):(B=_r($,gr(s()),Xf(p(P)),sa(n()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination (no startAt needed)"));const oe=await gn(B);if(oe.exists()){const H=[],re=oe.val();Object.entries(re).forEach(([ge,we])=>{H.push({key:ge,data:we})}),console.log(`DatabaseListView: Page ${p(N)} - Query returned ${H.length} items from Firebase`),console.log(`DatabaseListView: Page ${p(N)} - Items orderBy values:`,H.map(ge=>({key:ge.key,[s()]:ge.data[s()]})));let U=H;i()&&(U=H.filter(ge=>{const we=ge.data[s()];return typeof we=="string"?we.startsWith(i()):!1}),console.log(`DatabaseListView: Filtered ${H.length} items to ${U.length} items with sortPrefix "${i()}"`),U.length<H.length&&(console.log("DatabaseListView: Reached end of sortPrefix range, no more items"),x(I,!1))),a()&&(U.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)"));const ne=new Set(p(g).map(ge=>ge.key)),fe=U.filter(ge=>!ne.has(ge.key));if(console.log(`DatabaseListView: Page ${p(N)} - After filtering duplicates: ${fe.length} items`),fe.length===0){console.log("DatabaseListView: No more unique items after filtering"),x(I,!1),x(w,!1);return}if(U.length>n()){x(I,!0);const ge=fe.slice(0,n());x(g,[...p(g),...ge],!0);const we=O(ge,s());we?(x(P,we.value,!0),x(L,we.key,!0),console.log("DatabaseListView: Updated cursor for next page:",{lastLoadedValue:p(P),lastLoadedKey:p(L)})):(x(I,!1),console.log("DatabaseListView: No valid cursor, hasMore set to false"))}else{if(x(I,!1),x(g,[...p(g),...fe],!0),fe.length>0){const ge=O(fe,s());ge&&(x(P,ge.value,!0),x(L,ge.key,!0),console.log("DatabaseListView: Updated cursor (last page):",{lastLoadedValue:p(P),lastLoadedKey:p(L)}))}console.log("DatabaseListView: Loaded all remaining items, hasMore set to false")}const Ie=p(g).length-(fe.length>n()?n():fe.length);p(g).slice(Ie).forEach((ge,we)=>{V(ge.key,Ie+we)}),console.log(`DatabaseListView: Page ${p(N)} - Loaded ${fe.length} more items, total: ${p(g).length}, hasMore: ${p(I)}`)}else console.log("DatabaseListView: Query returned no data, hasMore set to false"),x(I,!1)}catch($){$ instanceof Error?(console.error("DatabaseListView: Load more error",{name:$.name,message:$.message,toString:$.toString()}),x(M,$.message||"Unknown error",!0)):(console.error("DatabaseListView: Load more error",$),x(M,String($),!0))}finally{x(w,!1)}}function se(){if(!p(S)||p(w)||!p(I))return;const{scrollTop:$,scrollHeight:B,clientHeight:oe}=p(S);B-($+oe)<o()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),ue())}function ve(){if(p(w)||!p(I))return;const $=window.pageYOffset||document.documentElement.scrollTop,B=document.documentElement.scrollHeight,oe=window.innerHeight;B-($+oe)<o()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),ue())}function Z(){console.log("DatabaseListView: Refreshing..."),le()}var K={refresh:Z,get path(){return t()},set path($=""){t($),je()},get pageSize(){return n()},set pageSize($=10){n($),je()},get orderBy(){return s()},set orderBy($="createdAt"){s($),je()},get sortPrefix(){return i()},set sortPrefix($=""){i($),je()},get threshold(){return o()},set threshold($=300){o($),je()},get reverse(){return a()},set reverse($=!1){a($),je()},get item(){return l()},set item($){l($),je()},get loading(){return u()},set loading($){u($),je()},get empty(){return f()},set empty($){f($),je()},get error(){return m()},set error($){m($),je()},get loadingMore(){return v()},set loadingMore($){v($),je()},get noMore(){return _()},set noMore($){_($),je()}},F=vS(),J=d(F);{var ie=$=>{var B=nS(),oe=d(B);{var H=U=>{var ne=ye(),fe=de(ne);Xs(fe,u),y(U,ne)},re=U=>{var ne=rS();y(U,ne)};j(oe,U=>{u()?U(H):U(re,!1)})}c(B),y($,B)},X=$=>{var B=ye(),oe=de(B);{var H=U=>{var ne=iS(),fe=d(ne);{var Ie=we=>{var Re=ye(),Oe=de(Re);Xs(Oe,m,()=>p(M)),y(we,Re)},ge=we=>{var Re=sS(),Oe=h(d(Re),2),Qe=d(Oe,!0);c(Oe);var Ve=h(Oe,2);Ve.__click=Z,c(Re),D(()=>b(Qe,p(M))),y(we,Re)};j(fe,we=>{m()?we(Ie):we(ge,!1)})}c(ne),y(U,ne)},re=U=>{var ne=ye(),fe=de(ne);{var Ie=we=>{var Re=aS(),Oe=d(Re);{var Qe=st=>{var it=ye(),lt=de(it);Xs(lt,f),y(st,it)},Ve=st=>{var it=oS();y(st,it)};j(Oe,st=>{f()?st(Qe):st(Ve,!1)})}c(Re),y(we,Re)},ge=we=>{var Re=pS(),Oe=d(Re);Qt(Oe,19,()=>p(g),lt=>lt.key,(lt,Ke,Je)=>{var Xe=cS(),G=d(Xe);{var z=pe=>{var Te=ye(),Pe=de(Te);Xs(Pe,l,()=>p(Ke),()=>p(Je)),y(pe,Te)},ce=pe=>{var Te=lS(),Pe=d(Te),Ze=d(Pe,!0);c(Pe),c(Te),D(De=>b(Ze,De),[()=>JSON.stringify(p(Ke).data,null,2)]),y(pe,Te)};j(G,pe=>{l()?pe(z):pe(ce,!1)})}c(Xe),D(()=>ke(Xe,"data-key",p(Ke).key)),y(lt,Xe)});var Qe=h(Oe,2);{var Ve=lt=>{var Ke=uS(),Je=d(Ke);{var Xe=z=>{var ce=ye(),pe=de(ce);Xs(pe,v),y(z,ce)},G=z=>{var ce=dS();y(z,ce)};j(Je,z=>{v()?z(Xe):z(G,!1)})}c(Ke),y(lt,Ke)};j(Qe,lt=>{p(w)&&lt(Ve)})}var st=h(Qe,2);{var it=lt=>{var Ke=fS(),Je=d(Ke);{var Xe=z=>{var ce=ye(),pe=de(ce);Xs(pe,_),y(z,ce)},G=z=>{var ce=hS();y(z,ce)};j(Je,z=>{_()?z(Xe):z(G,!1)})}c(Ke),y(lt,Ke)};j(st,lt=>{!p(I)&&!p(w)&&lt(it)})}c(Re),y(we,Re)};j(fe,we=>{p(g).length===0?we(Ie):we(ge,!1)},!0)}y(U,ne)};j(oe,U=>{p(M)?U(H):U(re,!1)},!0)}y($,B)};j(J,$=>{p(k)?$(ie):$(X,!1)})}return c(F),Oo(F,$=>x(S,$),()=>p(S)),y(r,F),_t(K)}Rt(["click"]);xe(Ku,{path:{},pageSize:{},orderBy:{},sortPrefix:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var gS=R('<img class="svelte-r48pmi"/>'),_S=R('<div class="avatar-placeholder svelte-r48pmi"> </div>'),bS=R('<span class="badge-me svelte-r48pmi"> </span>'),wS=R('<p class="user-email svelte-r48pmi"> </p>'),yS=R('<p class="user-bio svelte-r48pmi"> </p>'),xS=R('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi"> </button></div></div>'),kS=R('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p> </p></div>'),ES=R('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi"> </p></div>'),IS=R('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi"> </p> <p class="error-detail svelte-r48pmi"> </p></div>'),CS=R('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi"> </p></div>'),TS=R('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi"> </p></div>');const SS={hash:"svelte-r48pmi",code:`\r
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
  }`};function __(r,e){gt(e,!1),vt(r,SS);const t=()=>pt(zt,"$t",n),[n,s]=Ot();function i(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):t()("정보없음")}Jt(()=>{jr(t()("사용자찾기"))});function o(a){a===ze.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}Er(),Ku(r,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(_,g=Mr)=>{var w=xS();w.__click=()=>o(g().key),w.__keydown=Z=>{(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),o(g().key))};var k=d(w),I=d(k);{var P=Z=>{var K=gS();D(F=>{ke(K,"src",g().data?.photoUrl??g().data?.photoURL),ke(K,"alt",F)},[()=>g().data?.displayName||t()("사용자")]),y(Z,K)},L=Z=>{var K=_S(),F=d(K,!0);c(K),D(J=>b(F,J),[()=>g().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),y(Z,K)};j(I,Z=>{g().data?.photoUrl||g().data?.photoURL?Z(P):Z(L,!1)})}c(k);var N=h(k,2),M=d(N),S=d(M),A=h(S);{var C=Z=>{var K=bS(),F=d(K,!0);c(K),D(J=>b(F,J),[()=>t()("나뱃지")]),y(Z,K)};j(A,Z=>{g().key===ze.uid&&Z(C)})}c(M);var E=h(M,2),T=d(E,!0);c(E);var q=h(E,2);{var O=Z=>{var K=wS(),F=d(K,!0);c(K),D(()=>b(F,g().data.email)),y(Z,K)};j(q,Z=>{g().data?.email&&Z(O)})}var V=h(q,2);{var Q=Z=>{var K=yS(),F=d(K,!0);c(K),D(()=>b(F,g().data.bio)),y(Z,K)};j(V,Z=>{g().data?.bio&&Z(Q)})}var W=h(V,2),le=d(W);c(W),c(N);var ue=h(N,2),se=d(ue);se.__click=Z=>{Z.stopPropagation(),o(g().key)};var ve=d(se,!0);c(se),c(ue),c(w),D((Z,K,F,J)=>{b(S,`${Z??""} `),b(T,g().key),b(le,`${K??""} ${F??""}`),b(ve,J)},[()=>g().data?.displayName||t()("이름없음"),()=>t()("가입일"),()=>i(g().data?.createdAt),()=>t()("프로필보기")]),y(_,w)},loading:_=>{var g=kS(),w=h(d(g),2),k=d(w,!0);c(w),c(g),D(I=>b(k,I),[()=>t()("사용자목록로딩")]),y(_,g)},empty:_=>{var g=ES(),w=h(d(g),2),k=d(w,!0);c(w),c(g),D(I=>b(k,I),[()=>t()("등록된사용자없음")]),y(_,g)},error:(_,g=Mr)=>{var w=IS(),k=h(d(w),2),I=d(k,!0);c(k);var P=h(k,2),L=d(P,!0);c(P),c(w),D(N=>{b(I,N),b(L,g())},[()=>t()("사용자목록로드실패")]),y(_,w)},loadingMore:_=>{var g=CS(),w=h(d(g),2),k=d(w,!0);c(w),c(g),D(I=>b(k,I),[()=>t()("더많은사용자로딩")]),y(_,g)},noMore:_=>{var g=TS(),w=d(g),k=d(w,!0);c(w),c(g),D(I=>b(k,I),[()=>t()("모든사용자로드완료")]),y(_,g)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),_t(),s()}Rt(["click","keydown"]);xe(__,{},[],[],!0);const Yu=Vs([]);function ht(r,e="success",t=3e3){const n=Date.now();Yu.update(s=>[...s,{id:n,message:r,type:e}]),setTimeout(()=>{b_(n)},t)}function b_(r){Yu.update(e=>e.filter(t=>t.id!==r))}const wc={IMAGE:10*1024*1024,VIDEO:50*1024*1024,DOCUMENT:15*1024*1024},AS=["jpg","jpeg","png","gif","webp","bmp","svg"],w_=["image/jpeg","image/png","image/gif","image/webp","image/bmp","image/svg+xml"],PS=["mp4"],y_=["video/mp4"],RS=["zip","pdf","txt","doc","docx","ppt","pptx","csv","xls","xlsx","rar"],x_=["application/zip","application/pdf","text/plain","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/x-rar-compressed","application/vnd.rar"],NS=[...w_,...y_,...x_].join(",");function Al(r){const e=r.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}function LS(r){const e=Al(r.name),t=r.type.toLowerCase();return AS.includes(e)||w_.includes(t)}function $S(r){const e=Al(r.name),t=r.type.toLowerCase();return PS.includes(e)||y_.includes(t)}function DS(r){const e=Al(r.name),t=r.type.toLowerCase();return RS.includes(e)||x_.includes(t)}function qS(r){return LS(r)?"image":$S(r)?"video":DS(r)?"document":null}function op(r){return r<1024?`${r} B`:r<1024*1024?`${(r/1024).toFixed(1)} KB`:`${(r/(1024*1024)).toFixed(1)} MB`}function k_(r){const e=qS(r);if(!e)return{valid:!1,error:`지원하지 않는 파일 형식입니다. (확장자: ${Al(r.name)||"알 수 없음"})`};let t,n;switch(e){case"image":t=wc.IMAGE,n="이미지";break;case"video":t=wc.VIDEO,n="동영상";break;case"document":t=wc.DOCUMENT,n="문서/압축";break}return r.size>t?{valid:!1,error:`${n} 파일은 최대 ${op(t)}까지 업로드 가능합니다. (현재 파일: ${op(r.size)})`}:{valid:!0,category:e}}async function OS(r,e,t,n){try{const s=k_(e);if(!s.valid)return{success:!1,error:s.error};const o=`${Date.now()}-${e.name}`,a=`users/${r}/${t}/${o}`,l=zu(Fu,a),u={contentType:e.type,customMetadata:{uploadedBy:r,uploadedAt:new Date().toISOString(),category:t}},f=UI(l,e,u);return new Promise((m,v)=>{f.on("state_changed",_=>{const g=Math.round(_.bytesTransferred/_.totalBytes*100);n&&n(g);const w=_.state;w==="running"?console.log(`업로드 중: ${g}%`):w==="paused"&&console.log("업로드 일시 정지됨")},_=>{console.error("업로드 오류:",_);const g=Pr(_);v({success:!1,error:g})},async()=>{try{const _=await jg(f.snapshot.ref);console.log("업로드 성공:",{fileName:o,size:e.size,url:_}),m({success:!0,url:_,fileName:e.name,size:e.size})}catch(_){console.error("다운로드 URL 획득 실패:",_);const g=Pr(_);v({success:!1,error:g})}})})}catch(s){return console.error("파일 업로드 실패:",s),{success:!1,error:Pr(s)}}}function MS(r){try{const e=r.match(/\/o\/(.+?)\?/);return!e||!e[1]?(console.error("Storage 경로 추출 실패: URL 형식이 올바르지 않습니다"),null):decodeURIComponent(e[1])}catch(e){return console.error("Storage 경로 추출 오류:",e),null}}async function zS(r){try{const e=MS(r);if(!e)return{success:!1,error:"error.file.invalidUrl"};const t=zu(Fu,e);return await FI(t),console.log("파일 삭제 완료:",e),{success:!0}}catch(e){return console.error("파일 삭제 실패:",e),e.code==="storage/object-not-found"?{success:!0}:{success:!1,error:Pr(e)}}}const pa=new Map;function kn(r){return pa.has(r)||pa.set(r,{files:[],listeners:new Set}),pa.get(r)}function US(r,e){const t=kn(r),n=`${Date.now()}-${Math.random().toString(36).substring(2,9)}`,s={id:n,file:e,progress:0,status:"uploading"};return t.files.push(s),Oi(r),n}function FS(r,e,t){const s=kn(r).files.find(i=>i.id===e);s&&(s.progress=t,Oi(r))}function jS(r,e,t){const s=kn(r).files.find(i=>i.id===e);s&&(s.status="completed",s.progress=100,s.url=t,Oi(r))}function ap(r,e,t){const s=kn(r).files.find(i=>i.id===e);s&&(s.status="error",s.error=t,Oi(r))}function BS(r,e){const t=kn(r),n=t.files.findIndex(s=>s.id===e);n!==-1&&(t.files.splice(n,1),Oi(r))}function Ii(r){return kn(r).files.filter(t=>t.status==="completed"&&t.url).map(t=>t.url)}function lp(r){return[...kn(r).files]}function VS(r,e){const t=kn(r);t.files=e.map((n,s)=>({id:`existing-${s}-${Date.now()}`,file:null,progress:100,status:"completed",url:n})),Oi(r)}function HS(r,e){const t=kn(r);return t.listeners.add(e),()=>{t.listeners.delete(e)}}function Oi(r){kn(r).listeners.forEach(t=>t())}function un(r){pa.delete(r)}var WS=R('<span class="uploading-indicator svelte-1cq0e21">⏳</span>'),GS=R('<div class="file-upload-trigger svelte-1cq0e21"><input type="file" style="display: none;"/> <button type="button" class="upload-button svelte-1cq0e21"><!> <span class="button-text svelte-1cq0e21"> </span> <!></button></div>');const KS={hash:"svelte-1cq0e21",code:`\r
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
  }`};function YS(r,e){gt(e,!0),vt(r,KS);const t=()=>pt(zt,"$t",n),[n,s]=Ot();let i=Be(e,"id",7,""),o=Be(e,"category",7,"posts"),a=Be(e,"multiple",7,"true"),l=Be(e,"buttonText",7,""),u=ee(null),f=ee(!1);const m=Un(()=>a()==="true"||a()===""),v=Un(()=>l()||t()("파일선택"));function _(){p(f)||p(u)?.click()}async function g(T){const q=T.target,O=q?.files;if(!O||O.length===0)return;if(!i()){console.error("[FileUploadTrigger] id prop is required"),alert(t()("error.file.invalidUrl"));return}if(!ze.isAuthenticated||!ze.uid){alert(t()("로그인필요"));return}const V=Array.from(O);for(const Q of V){const W=k_(Q);if(!W.valid){alert(W.error),q&&(q.value="");return}}x(f,!0);try{const Q=V.map(W=>w(W));await Promise.all(Q)}catch(Q){console.error("[FileUploadTrigger] Upload error:",Q)}finally{x(f,!1),q&&(q.value="")}}async function w(T){const q=US(i(),T);try{const O=await OS(ze.uid,T,o(),V=>{FS(i(),q,V)});if(O.success&&O.url)jS(i(),q,O.url);else{const V=O.error?t()(O.error):t()("error.unknown");ap(i(),q,V)}}catch(O){console.error("[FileUploadTrigger] Upload failed:",O);const V=O instanceof Error?O.message:t()("error.unknown");ap(i(),q,V)}}var k={get id(){return i()},set id(T=""){i(T),je()},get category(){return o()},set category(T="posts"){o(T),je()},get multiple(){return a()},set multiple(T="true"){a(T),je()},get buttonText(){return l()},set buttonText(T=""){l(T),je()}},I=GS(),P=d(I);P.__change=g,Oo(P,T=>x(u,T),()=>p(u));var L=h(P,2);L.__click=_;var N=d(L);Yg(N,{size:20});var M=h(N,2),S=d(M,!0);c(M);var A=h(M,2);{var C=T=>{var q=WS();y(T,q)};j(A,T=>{p(f)&&T(C)})}c(L),c(I),D(()=>{ke(P,"accept",NS),P.multiple=p(m),ke(P,"aria-label",p(v)),L.disabled=p(f),ke(L,"aria-label",p(v)),b(S,p(v))}),y(r,I);var E=_t(k);return s(),E}Rt(["change","click"]);customElements.define("file-upload-trigger",xe(YS,{id:{},category:{},multiple:{},buttonText:{}},[],[],!1));var QS=R('<div class="empty-state svelte-1rscjtl"><p class="empty-text svelte-1rscjtl"> </p></div>'),JS=R('<img class="preview-image svelte-1rscjtl"/>'),XS=R('<video class="preview-video svelte-1rscjtl" controls><track kind="captions"/></video>',2),ZS=R('<div class="file-extension svelte-1rscjtl"><div class="extension-text svelte-1rscjtl"> </div></div>'),eA=R('<div class="progress-overlay svelte-1rscjtl"><div class="progress-circle svelte-1rscjtl"> </div></div>'),tA=R('<div class="error-overlay svelte-1rscjtl"><!> <div class="error-text svelte-1rscjtl"> </div></div>'),rA=R('<button type="button" class="delete-button svelte-1rscjtl"><!></button>'),nA=R('<div><div class="file-preview svelte-1rscjtl"><!> <!> <!> <!></div></div>'),sA=R('<div class="files-container svelte-1rscjtl"></div>'),iA=R('<div class="file-upload-list svelte-1rscjtl"><!></div>');const oA={hash:"svelte-1rscjtl",code:`\r
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
  }`};function aA(r,e){gt(e,!0),vt(r,oA);const t=()=>pt(zt,"$t",n),[n,s]=Ot();let i=Be(e,"id",7,""),o=Be(e,"initial-urls",7,""),a=ee(or([])),l=ee(or(new Set));Jt(()=>{if(!i()){console.error("[FileUploadList] id prop is required");return}if(o())try{const S=JSON.parse(o());Array.isArray(S)&&S.length>0&&(console.log(`[FileUploadList] Initializing with ${S.length} URLs for id: ${i()}`),VS(i(),S))}catch(S){console.error("[FileUploadList] Failed to parse initial-urls:",S)}if(HS(i(),()=>{x(a,lp(i()),!0)}),x(a,lp(i()),!0),typeof window<"u"){const S=document.querySelector(`file-upload-list[id="${i()}"]`);S&&(S.getUrls=()=>Ii(i()))}});async function u(S,A){if(!(p(l).has(S)||!confirm(t()("파일삭제")))){p(l).add(S);try{if(A){const E=await zS(A);E.success||console.error("[FileUploadList] Failed to delete file from Storage:",E.error)}BS(i(),S)}catch(E){console.error("[FileUploadList] Delete error:",E),alert(t()("파일삭제실패"))}finally{p(l).delete(S)}}}function f(S){if(S.file&&S.file.name)return S.file.name;if(S.url)try{const A=S.url,T=new URL(A).pathname.split("/"),q=T[T.length-1];return decodeURIComponent(q??"")}catch{return"파일"}return"파일"}function m(S){return S.url?S.url:S.file&&S.file.type.startsWith("image/")?URL.createObjectURL(S.file):null}function v(S){if(S.file&&S.file.type.startsWith("image/"))return!0;if(S.url){const A=S.url.toLowerCase();return A.includes(".jpg")||A.includes(".jpeg")||A.includes(".png")||A.includes(".gif")||A.includes(".webp")||A.includes(".bmp")||A.includes(".svg")}return!1}function _(S){if(S.file&&S.file.type.startsWith("video/"))return!0;if(S.url){const A=S.url.toLowerCase();return A.includes(".mp4")||A.includes(".webm")||A.includes(".mov")||A.includes(".avi")||A.includes(".mkv")}return!1}function g(S){const C=f(S).split(".");if(C&&C.length>1){const E=C[C.length-1];return E?E.toUpperCase():"FILE"}return"FILE"}function w(S){return S.url?S.url:S.file&&S.file.type.startsWith("video/")?URL.createObjectURL(S.file):null}var k={get id(){return i()},set id(S=""){i(S),je()},get"initial-urls"(){return o()},set"initial-urls"(S=""){o(S),je()}},I=iA(),P=d(I);{var L=S=>{var A=QS(),C=d(A),E=d(C,!0);c(C),c(A),D(T=>b(E,T),[()=>t()("파일없음")]),y(S,A)},N=S=>{var A=sA();Qt(A,21,()=>p(a),C=>C.id,(C,E)=>{var T=nA(),q=d(T),O=d(q);{var V=K=>{var F=JS();D((J,ie)=>{ke(F,"src",J),ke(F,"alt",ie)},[()=>m(p(E)),()=>f(p(E))]),y(K,F)},Q=K=>{var F=ye(),J=de(F);{var ie=$=>{var B=XS();D(oe=>ke(B,"src",oe),[()=>w(p(E))]),y($,B)},X=$=>{var B=ZS(),oe=d(B),H=d(oe,!0);c(oe),c(B),D(re=>b(H,re),[()=>g(p(E))]),y($,B)};j(J,$=>{_(p(E))?$(ie):$(X,!1)},!0)}y(K,F)};j(O,K=>{v(p(E))?K(V):K(Q,!1)})}var W=h(O,2);{var le=K=>{var F=eA(),J=d(F),ie=d(J);c(J),c(F),D(()=>b(ie,`${p(E).progress??""}%`)),y(K,F)};j(W,K=>{p(E).status==="uploading"&&K(le)})}var ue=h(W,2);{var se=K=>{var F=tA(),J=d(F);Wg(J,{size:32,class:"error-icon"});var ie=h(J,2),X=d(ie,!0);c(ie),c(F),D($=>b(X,$),[()=>t()("업로드실패")]),y(K,F)};j(ue,K=>{p(E).status==="error"&&K(se)})}var ve=h(ue,2);{var Z=K=>{var F=rA();F.__click=()=>u(p(E).id,p(E).url);var J=d(F);Tl(J,{size:16}),c(F),D((ie,X)=>{F.disabled=ie,ke(F,"aria-label",X)},[()=>p(l).has(p(E).id),()=>t()("파일삭제")]),y(K,F)};j(ve,K=>{(p(E).status==="completed"||p(E).status==="error")&&K(Z)})}c(q),c(T),D(()=>cr(T,1,`file-item ${p(E).status??""}`,"svelte-1rscjtl")),y(C,T)}),c(A),y(S,A)};j(P,S=>{p(a).length===0?S(L):S(N,!1)})}c(I),y(r,I);var M=_t(k);return s(),M}Rt(["click"]);customElements.define("file-upload-list",xe(aA,{id:{},"initial-urls":{}},[],[],!1));function Ya(r){return r.parentElement,r.nextSibling,document.body.appendChild(r),{destroy(){r.parentElement===document.body&&document.body.removeChild(r)}}}var lA=R('<img class="comment-avatar svelte-110g7vh"/>'),cA=R('<span class="comment-avatar-placeholder svelte-110g7vh"> </span>'),dA=R('<a target="_blank" rel="noopener noreferrer" class="file-item image-item svelte-110g7vh"><img alt="첨부 이미지" class="file-image svelte-110g7vh"/></a>'),uA=R('<div class="file-item video-item svelte-110g7vh"><video controls class="file-video svelte-110g7vh"><track kind="captions"/> 브라우저가 비디오를 지원하지 않습니다.</video></div>',2),hA=R('<a target="_blank" rel="noopener noreferrer" class="file-item download-item svelte-110g7vh"><div class="file-icon svelte-110g7vh">📎</div> <div class="file-name svelte-110g7vh"> </div></a>'),fA=R('<div class="comment-files-preview svelte-110g7vh"></div>'),pA=R('<span class="count svelte-110g7vh"> </span>'),vA=R('<button><span class="emoji svelte-110g7vh"> </span> <span class="text svelte-110g7vh"> </span> <!></button>'),mA=R('<button class="action-button reply-button svelte-110g7vh"><span class="emoji svelte-110g7vh">💬</span> <span class="text svelte-110g7vh"> </span></button>'),gA=R('<button class="action-button edit-button svelte-110g7vh"><!></button>'),_A=R('<button class="action-button delete-button svelte-110g7vh"><!></button>'),bA=R('<div class="modal-backdrop svelte-110g7vh"><div class="modal svelte-110g7vh"><div class="modal-header svelte-110g7vh"><h2 class="svelte-110g7vh"> </h2> <button class="btn-close svelte-110g7vh">×</button></div> <div class="modal-content svelte-110g7vh"><textarea rows="5" class="svelte-110g7vh"></textarea></div> <div class="modal-footer svelte-110g7vh"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-110g7vh"><button class="btn-cancel svelte-110g7vh"> </button> <button class="btn-submit svelte-110g7vh"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),wA=R('<div class="modal-backdrop svelte-110g7vh"><div class="modal svelte-110g7vh"><div class="modal-header svelte-110g7vh"><h2 class="svelte-110g7vh"> </h2> <button class="btn-close svelte-110g7vh">×</button></div> <div class="modal-content svelte-110g7vh"><textarea rows="5" class="svelte-110g7vh"></textarea></div> <div class="modal-footer svelte-110g7vh"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-110g7vh"><button class="btn-cancel svelte-110g7vh"> </button> <button class="btn-submit svelte-110g7vh"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),yA=R("<alert-dialog></alert-dialog>",2),xA=R('<div class="comment-item svelte-110g7vh"><div class="comment-header svelte-110g7vh"><div class="comment-author svelte-110g7vh"><!> <span class="comment-author-name svelte-110g7vh"> </span></div> <span class="comment-date svelte-110g7vh"> </span></div> <p class="comment-content svelte-110g7vh"> </p> <!> <div class="comment-actions svelte-110g7vh"><!> <!> <!> <!></div></div> <!> <!> <!>',1);const kA={hash:"svelte-110g7vh",code:`\r
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
  /* 모바일에서 좋아요/답글 버튼의 이모지 숨기기 */\r
  @media (max-width: 768px) {.like-button.svelte-110g7vh .emoji:where(.svelte-110g7vh),\r
    .reply-button.svelte-110g7vh .emoji:where(.svelte-110g7vh) {display:none;}\r
  }\r
\r
  /* 좋아요 버튼 */.like-button.svelte-110g7vh {color:#6b7280;}.like-button.svelte-110g7vh:hover {background-color:#fee2e2;color:#dc2626;}\r
\r
  /* 좋아요 한 버튼 강조 표시 */.like-button.liked.svelte-110g7vh {background-color:#fee2e2;color:#dc2626;font-weight:600;}.like-button.liked.svelte-110g7vh:hover {background-color:#fecaca;color:#b91c1c;}\r
\r
  /* 답글 버튼 */.reply-button.svelte-110g7vh {color:#3b82f6;}.reply-button.svelte-110g7vh:hover {background-color:#dbeafe;color:#2563eb;}\r
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
  /* 파일명 (다운로드용, 댓글은 게시글보다 작게) */.comment-files-preview.svelte-110g7vh .file-name:where(.svelte-110g7vh) {font-size:0.6rem;color:#6b7280;text-align:center;word-break:break-all;line-height:1.2;max-height:2.4em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}.comment-files-preview.svelte-110g7vh .file-item.download-item:where(.svelte-110g7vh):hover .file-name:where(.svelte-110g7vh) {color:#3b82f6;}`};function E_(r,e){gt(e,!0),vt(r,kA);const t=()=>pt(zt,"$t",i),n=()=>pt(u,"$userStore",i),s=()=>pt(m,"$myLikeStore",i),[i,o]=Ot();let a=Be(e,"comment",7),l=Be(e,"userId",7,null);const u=Gu(`users/${a().uid}`),f=a().commentId.startsWith("-")?a().commentId.substring(1):a().commentId,m=l()?u_(`likes/comment-${f}-${l()}`,0):null;let v=ee(!1),_=ee(""),g=ee(!1),w=ee(!1),k=ee(""),I=ee(!1),P=ee(!1),L=ee("");async function N(){if(!l()){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const G=await f_("comment",a().commentId,l());G.success?G.isLiked?ht(t()("좋아요를하였습니다"),"success"):ht(t()("좋아요를취소했습니다"),"info"):ht(t()(G.error||"error.unknown"),"error")}catch(G){console.error("좋아요 오류:",G),ht(t()("error.unknown"),"error")}}function M(){if(!l()){alert(t()("로그인필요")),window.location.href="/user/login";return}x(v,!0)}async function S(){if(!p(_).trim()){ht(t()("댓글내용입력필요"),"error");return}x(g,!0);try{const G=Ii(`comment-reply-${a().commentId}`),z=await kT({parentCommentId:a().commentId,userId:l(),content:p(_),urls:G.length>0?G:void 0});z.success?(un(`comment-reply-${a().commentId}`),ht(t()("댓글이작성되었습니다"),"success"),x(v,!1),x(_,"")):ht(t()(z.error||"error.unknown"),"error")}catch(G){console.error("답글 생성 오류:",G),ht(t()("error.unknown"),"error")}finally{x(g,!1)}}function A(){un(`comment-reply-${a().commentId}`),x(v,!1),x(_,"")}function C(){if((a().commentCount||0)>0){x(L,t()("댓글이달려있어수정불가"),!0),x(P,!0);return}x(k,a().content,!0),x(w,!0)}async function E(){if(!p(k).trim()){ht(t()("댓글내용입력필요"),"error");return}x(I,!0);try{const G=Ii(`comment-edit-${a().commentId}`),z=await IT(a().commentId,{content:p(k),urls:G.length>0?G:void 0});z.success?(un(`comment-edit-${a().commentId}`),ht(t()("댓글이수정되었습니다"),"success"),x(w,!1),x(k,"")):ht(t()(z.error||"error.unknown"),"error")}catch(G){console.error("댓글 수정 오류:",G),ht(t()("error.unknown"),"error")}finally{x(I,!1)}}function T(){un(`comment-edit-${a().commentId}`),x(w,!1),x(k,"")}async function q(){if((a().commentCount||0)>0){x(L,t()("댓글이달려있어삭제불가"),!0),x(P,!0);return}if(confirm(t()("댓글삭제확인")))try{const G=await CT(a().commentId);G.success?ht(t()("댓글이삭제되었습니다"),"success"):ht(t()(G.error||"error.unknown"),"error")}catch(G){console.error("댓글 삭제 오류:",G),ht(t()("error.unknown"),"error")}}function O(G){const z=G.toLowerCase();return z.includes(".jpg")||z.includes(".jpeg")||z.includes(".png")||z.includes(".gif")||z.includes(".webp")}function V(G){const z=G.toLowerCase();return z.includes(".mp4")||z.includes(".webm")||z.includes(".mov")||z.includes(".avi")||z.includes(".mkv")}function Q(G){try{return new URL(G).pathname.split("/").pop()||"file"}catch{return"file"}}var W={get comment(){return a()},set comment(G){a(G),je()},get userId(){return l()},set userId(G=null){l(G),je()}},le=xA(),ue=de(le),se=d(ue),ve=d(se),Z=d(ve);{var K=G=>{var z=lA();D(ce=>{ke(z,"src",n().data.photoUrl),ke(z,"alt",ce)},[()=>n().data.displayName||t()("익명")]),y(G,z)},F=G=>{var z=cA(),ce=d(z,!0);c(z),D(pe=>b(ce,pe),[()=>(n().data?.displayName||t()("익명")).charAt(0).toUpperCase()]),y(G,z)};j(Z,G=>{n().data?.photoUrl?G(K):G(F,!1)})}var J=h(Z,2),ie=d(J,!0);c(J),c(ve);var X=h(ve,2),$=d(X,!0);c(X),c(se);var B=h(se,2),oe=d(B,!0);c(B);var H=h(B,2);{var re=G=>{var z=fA();Qt(z,20,()=>a().urls,ce=>ce,(ce,pe)=>{var Te=ye(),Pe=de(Te);{var Ze=Ce=>{var Ne=dA(),Ue=d(Ne);c(Ne),D(()=>{ke(Ne,"href",pe),ke(Ue,"src",pe)}),y(Ce,Ne)},De=Ce=>{var Ne=ye(),Ue=de(Ne);{var It=_e=>{var me=uA(),Se=d(me);c(me),D(()=>ke(Se,"src",pe)),y(_e,me)},he=_e=>{var me=hA(),Se=h(d(me),2),$e=d(Se,!0);c(Se),c(me),D(Ee=>{ke(me,"href",pe),b($e,Ee)},[()=>Q(pe)]),y(_e,me)};j(Ue,_e=>{V(pe)?_e(It):_e(he,!1)},!0)}y(Ce,Ne)};j(Pe,Ce=>{O(pe)?Ce(Ze):Ce(De,!1)})}y(ce,Te)}),c(z),y(G,z)};j(H,G=>{a().urls&&a().urls.length>0&&G(re)})}var U=h(H,2),ne=d(U);{var fe=G=>{var z=vA();z.__click=N;var ce=d(z),pe=d(ce,!0);c(ce);var Te=h(ce,2),Pe=d(Te,!0);c(Te);var Ze=h(Te,2);{var De=Ce=>{var Ne=pA(),Ue=d(Ne,!0);c(Ne),D(()=>b(Ue,a().likeCount)),y(Ce,Ne)};j(Ze,Ce=>{a().likeCount>0&&Ce(De)})}c(z),D((Ce,Ne)=>{cr(z,1,`action-button like-button ${(s()?.data??0)>=1?"liked":""}`,"svelte-110g7vh"),ke(z,"title",Ce),b(pe,(s()?.data??0)>=1?"❤️":"🤍"),b(Pe,Ne)},[()=>t()("좋아요"),()=>t()("좋아요")]),y(G,z)};j(ne,G=>{l()&&G(fe)})}var Ie=h(ne,2);{var ge=G=>{var z=mA();z.__click=M;var ce=h(d(z),2),pe=d(ce,!0);c(ce),c(z),D(Te=>b(pe,Te),[()=>t()("답글")]),y(G,z)};j(Ie,G=>{l()&&a().depth<12&&G(ge)})}var we=h(Ie,2);{var Re=G=>{var z=gA();z.__click=C;var ce=d(z);Xg(ce,{size:14}),c(z),D(pe=>ke(z,"title",pe),[()=>t()("수정")]),y(G,z)};j(we,G=>{l()&&l()===a().uid&&G(Re)})}var Oe=h(we,2);{var Qe=G=>{var z=_A();z.__click=q;var ce=d(z);Vu(ce,{size:14}),c(z),D(pe=>ke(z,"title",pe),[()=>t()("삭제")]),y(G,z)};j(Oe,G=>{l()&&l()===a().uid&&G(Qe)})}c(U),c(ue);var Ve=h(ue,2);{var st=G=>{var z=bA();z.__click=A;var ce=d(z);ce.__click=Ee=>Ee.stopPropagation();var pe=d(ce),Te=d(pe),Pe=d(Te,!0);c(Te);var Ze=h(Te,2);Ze.__click=A,c(pe);var De=h(pe,2),Ce=d(De);go(Ce),mo(Ce,!0),c(De);var Ne=h(De,2),Ue=d(Ne);D(()=>ot(Ue,"id",`comment-reply-${a().commentId??""}`)),ot(Ue,"category","comments"),ot(Ue,"multiple","true"),D(()=>ot(Ue,"buttonText",t()("이미지첨부")));var It=h(Ue,2),he=d(It);he.__click=A;var _e=d(he,!0);c(he);var me=h(he,2);me.__click=S;var Se=d(me,!0);c(me),c(It),c(Ne);var $e=h(Ne,2);D(()=>ot($e,"id",`comment-reply-${a().commentId??""}`)),c(ce),c(z),xa(z,Ee=>Ya?.(Ee)),D((Ee,Ae,wt,kt)=>{b(Pe,Ee),ke(Ce,"placeholder",Ae),b(_e,wt),me.disabled=p(g),b(Se,kt)},[()=>t()("답글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>p(g)?t()("전송중"):t()("전송")]),tn(Ce,()=>p(_),Ee=>x(_,Ee)),y(G,z)};j(Ve,G=>{p(v)&&G(st)})}var it=h(Ve,2);{var lt=G=>{var z=wA();z.__click=T;var ce=d(z);ce.__click=Ee=>Ee.stopPropagation();var pe=d(ce),Te=d(pe),Pe=d(Te,!0);c(Te);var Ze=h(Te,2);Ze.__click=T,c(pe);var De=h(pe,2),Ce=d(De);go(Ce),mo(Ce,!0),c(De);var Ne=h(De,2),Ue=d(Ne);D(()=>ot(Ue,"id",`comment-edit-${a().commentId??""}`)),ot(Ue,"category","comments"),ot(Ue,"multiple","true"),D(()=>ot(Ue,"buttonText",t()("이미지첨부")));var It=h(Ue,2),he=d(It);he.__click=T;var _e=d(he,!0);c(he);var me=h(he,2);me.__click=E;var Se=d(me,!0);c(me),c(It),c(Ne);var $e=h(Ne,2);D(()=>ot($e,"id",`comment-edit-${a().commentId??""}`)),D(()=>ot($e,"initial-urls",JSON.stringify(a().urls||[]))),c(ce),c(z),xa(z,Ee=>Ya?.(Ee)),D((Ee,Ae,wt,kt)=>{b(Pe,Ee),ke(Ce,"placeholder",Ae),b(_e,wt),me.disabled=p(I),b(Se,kt)},[()=>t()("댓글수정"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>p(I)?t()("수정중"):t()("수정")]),tn(Ce,()=>p(k),Ee=>x(k,Ee)),y(G,z)};j(it,G=>{p(w)&&G(lt)})}var Ke=h(it,2);{var Je=G=>{var z=yA();ot(z,"open","true"),ot(z,"type","warning"),D(()=>ot(z,"title",t()("알림"))),D(()=>ot(z,"message",p(L))),D(()=>ot(z,"confirmText",t()("확인"))),mn("confirm",z,()=>{x(P,!1)}),mn("close",z,()=>{x(P,!1)}),y(G,z)};j(Ke,G=>{p(P)&&G(Je)})}D((G,z)=>{ol(ue,`padding-left: ${1.5+(a().depth-1)*2}rem;`),b(ie,G),b($,z),b(oe,a().content)},[()=>n().data?.displayName||t()("익명"),()=>new Date(a().createdAt).toLocaleDateString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),y(r,le);var Xe=_t(W);return o(),Xe}Rt(["click"]);xe(E_,{comment:{},userId:{}},[],[],!0);var EA=R('<a target="_blank" rel="noopener noreferrer" class="file-item image-item svelte-1fsdsc8"><img alt="첨부 이미지" class="file-image svelte-1fsdsc8"/></a>'),IA=R('<div class="file-item video-item svelte-1fsdsc8"><video controls class="file-video svelte-1fsdsc8"><track kind="captions"/> 브라우저가 비디오를 지원하지 않습니다.</video></div>',2),CA=R('<a target="_blank" rel="noopener noreferrer" class="file-item download-item svelte-1fsdsc8"><div class="file-icon svelte-1fsdsc8">📎</div> <div class="file-name svelte-1fsdsc8"> </div></a>'),TA=R('<div class="post-files-preview svelte-1fsdsc8"></div>'),SA=R('<span class="count svelte-1fsdsc8"> </span>'),AA=R('<span class="count svelte-1fsdsc8"> </span>'),PA=R('<button class="action-btn edit icon-only svelte-1fsdsc8"><!></button> <button class="action-btn delete icon-only svelte-1fsdsc8"><!></button>',1),RA=R('<button class="comments-show-more svelte-1fsdsc8"> </button>'),NA=R('<button class="comments-hide-extra svelte-1fsdsc8"> </button>'),LA=R('<div class="comments-list svelte-1fsdsc8"><!> <!> <!></div>'),$A=R('<div class="comments-section svelte-1fsdsc8"><button class="comments-toggle svelte-1fsdsc8"> </button> <!></div>'),DA=R("<alert-dialog></alert-dialog>",2),qA=R('<div class="modal-backdrop svelte-1fsdsc8"><div class="modal svelte-1fsdsc8"><div class="modal-header svelte-1fsdsc8"><h2 class="svelte-1fsdsc8"> </h2> <button class="btn-close svelte-1fsdsc8">×</button></div> <div class="modal-content svelte-1fsdsc8"><textarea rows="5" class="svelte-1fsdsc8"></textarea></div> <div class="modal-footer svelte-1fsdsc8"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-1fsdsc8"><button class="btn-cancel svelte-1fsdsc8"> </button> <button class="btn-submit svelte-1fsdsc8"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),OA=R('<div class="modal-backdrop svelte-1fsdsc8"><div class="modal svelte-1fsdsc8"><div class="modal-header svelte-1fsdsc8"><h2 class="svelte-1fsdsc8"> </h2> <button class="btn-close svelte-1fsdsc8">×</button></div> <div class="modal-content edit-form svelte-1fsdsc8"><input type="text" class="edit-title-input"/> <textarea rows="10" class="edit-content-textarea svelte-1fsdsc8"></textarea></div> <div class="modal-footer svelte-1fsdsc8"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-1fsdsc8"><button class="btn-cancel svelte-1fsdsc8"> </button> <button class="btn-submit svelte-1fsdsc8"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),MA=R('<div class="post-item svelte-1fsdsc8"><div class="post-item-top svelte-1fsdsc8"><span class="post-category-pill svelte-1fsdsc8"> </span> <span class="post-number svelte-1fsdsc8"> </span></div> <h3 class="post-title svelte-1fsdsc8"> </h3> <!> <p class="post-content svelte-1fsdsc8"> </p> <div class="post-meta svelte-1fsdsc8"><div class="author-chip svelte-1fsdsc8"><span class="author-avatar svelte-1fsdsc8"> </span> <span class="post-author"> </span></div> <span class="post-date svelte-1fsdsc8"> </span></div> <div class="post-actions svelte-1fsdsc8"><div class="post-actions-left svelte-1fsdsc8"><button class="action-btn svelte-1fsdsc8"> <!></button> <button> <!></button> <button class="action-btn svelte-1fsdsc8"> </button> <button class="action-btn svelte-1fsdsc8"> </button></div> <div class="post-actions-right svelte-1fsdsc8"><!></div></div> <!></div> <!> <!> <!>',1);const zA={hash:"svelte-1fsdsc8",code:`.post-item.svelte-1fsdsc8 {padding:1.5rem 1.75rem;border-radius:0.85rem;background:linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);border:1px solid #e5e7eb;display:flex;flex-direction:column;gap:1rem;transition:transform 0.2s ease,
      box-shadow 0.2s ease;margin:1rem 0;}.post-item.svelte-1fsdsc8:hover {transform:translateY(-2px);box-shadow:0 16px 28px rgba(17, 24, 39, 0.12);}.post-item-top.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;}.post-category-pill.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.35rem;padding:0.35rem 0.75rem;border-radius:9999px;font-size:0.75rem;font-weight:600;color:#1d4ed8;background-color:#eff6ff;}.post-number.svelte-1fsdsc8 {font-weight:700;color:#9ca3af;font-size:0.9rem;}.post-title.svelte-1fsdsc8 {margin:0;font-size:1.2rem;font-weight:700;color:#111827;line-height:1.5;}.post-content.svelte-1fsdsc8 {margin:0;font-size:0.925rem;color:#4b5563;line-height:1.7;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}.post-meta.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;gap:1rem;font-size:0.8rem;color:#6b7280;}.author-chip.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.5rem;}.author-avatar.svelte-1fsdsc8 {width:2rem;height:2rem;border-radius:9999px;background:#1d4ed8;color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;}.post-date.svelte-1fsdsc8 {color:#9ca3af;font-variant-numeric:tabular-nums;}.post-actions.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding-top:0.5rem;}.post-actions-left.svelte-1fsdsc8,
  .post-actions-right.svelte-1fsdsc8 {display:flex;align-items:center;gap:0.25rem;flex-wrap:wrap;}.action-btn.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.3rem;padding:0.4rem 0.65rem;border:none;border-radius:0.5rem;background-color:transparent;color:#6b7280;font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}.action-btn.svelte-1fsdsc8:hover {background-color:#f3f4f6;color:#111827;}.action-btn.svelte-1fsdsc8:active {transform:scale(0.95);}

  /* 좋아요 한 버튼 강조 표시 */.action-btn.liked.svelte-1fsdsc8 {background-color:#fee2e2;color:#dc2626;font-weight:600;}.action-btn.liked.svelte-1fsdsc8:hover {background-color:#fecaca;color:#b91c1c;}.count.svelte-1fsdsc8 {font-weight:600;font-size:0.75rem;}

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

  /* 파일명 (다운로드용) */.file-name.svelte-1fsdsc8 {font-size:0.7rem;color:#6b7280;text-align:center;word-break:break-all;line-height:1.2;max-height:2.4em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}.file-item.download-item.svelte-1fsdsc8:hover .file-name:where(.svelte-1fsdsc8) {color:#3b82f6;}`};function I_(r,e){gt(e,!0),vt(r,zA);const t=()=>pt(zt,"$t",s),n=()=>pt(v,"$myLikeStore",s),[s,i]=Ot();let o=Be(e,"itemData",7),a=Be(e,"index",7),l=Be(e,"category",7),u=Be(e,"userId",7),f=Be(e,"onLike",7,()=>{});const m=o().postId.startsWith("-")?o().postId.substring(1):o().postId,v=u()?u_(`likes/post-${m}-${u()}`,0):null;let _=ee(!1),g=ee(""),w=ee(!1),k=ee(!1),I=ee(""),P=ee(""),L=ee(!1),N=ee(!1),M=ee(or([])),S=ee(!0),A=ee(!1);const C=5;function E(){return p(A)?p(M):p(M).length>C?p(M).slice(-C):p(M)}Jt(()=>{const Y=ET(o().postId,ae=>{x(M,ae,!0)});return()=>{Y()}});async function T(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const Y=await f_("post",o().postId,u());Y.success?(Y.isLiked?ht(t()("좋아요를하였습니다"),"success"):ht(t()("좋아요를취소했습니다"),"info"),f()(o().postId)):ht(t()(Y.error||"error.unknown"),"error")}catch(Y){console.error("좋아요 오류:",Y),ht(t()("error.unknown"),"error")}}function q(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}x(_,!0)}async function O(){if(!u()){ht(t()("로그인필요"),"error");return}if(!p(g).trim()){ht(t()("댓글내용입력필요"),"error");return}x(w,!0);try{const Y=Ii(`comment-create-${o().postId}`),ae=await xT({postId:o().postId,userId:u(),content:p(g),urls:Y.length>0?Y:void 0});ae.success?(un(`comment-create-${o().postId}`),ht(t()("댓글이작성되었습니다"),"success"),x(_,!1),x(g,""),x(S,!0)):ht(t()(ae.error||"error.unknown"),"error")}catch(Y){console.error("댓글 생성 오류:",Y),ht(t()("error.unknown"),"error")}finally{x(w,!1)}}function V(){un(`comment-create-${o().postId}`),x(_,!1),x(g,"")}function Q(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}if(p(M).length>0){x(N,!0);return}x(I,o().title,!0),x(P,o().content,!0),x(k,!0)}function W(){x(N,!1)}function le(){un(`post-edit-${o().postId}`),x(k,!1),x(I,""),x(P,"")}async function ue(){if(!u()){ht(t()("로그인필요"),"error");return}if(!p(I).trim()||!p(P).trim()){ht(t()("제목과내용을입력하세요"),"error");return}x(L,!0);try{const Y=Ii(`post-edit-${o().postId}`),ae=await bT(o().postId,{title:p(I).trim(),content:p(P).trim(),urls:Y.length>0?Y:void 0});ae.success?(un(`post-edit-${o().postId}`),ht(t()("게시글수정완료"),"success"),x(k,!1),x(I,""),x(P,"")):ht(t()(ae.error||"error.unknown"),"error")}catch(Y){console.error("게시글 수정 오류:",Y),ht(t()("error.unknown"),"error")}finally{x(L,!1)}}async function se(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}if(confirm(t()("게시글삭제확인")))try{const Y=await wT(o().postId);Y.success?ht(t()("게시글삭제완료"),"success"):ht(t()(Y.error||"error.unknown"),"error")}catch(Y){console.error("게시글 삭제 오류:",Y),ht(t()("error.unknown"),"error")}}function ve(Y){const ae=Y.toLowerCase();return ae.includes(".jpg")||ae.includes(".jpeg")||ae.includes(".png")||ae.includes(".gif")||ae.includes(".webp")}function Z(Y){const ae=Y.toLowerCase();return ae.includes(".mp4")||ae.includes(".webm")||ae.includes(".mov")||ae.includes(".avi")||ae.includes(".mkv")}function K(Y){try{return new URL(Y).pathname.split("/").pop()||"file"}catch{return"file"}}var F={get itemData(){return o()},set itemData(Y){o(Y),je()},get index(){return a()},set index(Y){a(Y),je()},get category(){return l()},set category(Y){l(Y),je()},get userId(){return u()},set userId(Y){u(Y),je()},get onLike(){return f()},set onLike(Y=()=>{}){f(Y),je()}},J=MA(),ie=de(J),X=d(ie),$=d(X),B=d($,!0);c($);var oe=h($,2),H=d(oe);c(oe),c(X);var re=h(X,2),U=d(re,!0);c(re);var ne=h(re,2);{var fe=Y=>{var ae=TA();Qt(ae,20,()=>o().urls,Me=>Me,(Me,We)=>{var ct=ye(),Gt=de(ct);{var Nt=Fe=>{var et=EA(),Ye=d(et);c(et),D(()=>{ke(et,"href",We),ke(Ye,"src",We)}),y(Fe,et)},Tt=Fe=>{var et=ye(),Ye=de(et);{var ft=Ge=>{var dt=IA(),Kt=d(dt);c(dt),D(()=>ke(Kt,"src",We)),y(Ge,dt)},Ut=Ge=>{var dt=CA(),Kt=h(d(dt),2),Ir=d(Kt,!0);c(Kt),c(dt),D(rr=>{ke(dt,"href",We),b(Ir,rr)},[()=>K(We)]),y(Ge,dt)};j(Ye,Ge=>{Z(We)?Ge(ft):Ge(Ut,!1)},!0)}y(Fe,et)};j(Gt,Fe=>{ve(We)?Fe(Nt):Fe(Tt,!1)})}y(Me,ct)}),c(ae),y(Y,ae)};j(ne,Y=>{o().urls&&o().urls.length>0&&Y(fe)})}var Ie=h(ne,2),ge=d(Ie,!0);c(Ie);var we=h(Ie,2),Re=d(we),Oe=d(Re),Qe=d(Oe,!0);c(Oe);var Ve=h(Oe,2),st=d(Ve,!0);c(Ve),c(Re);var it=h(Re,2),lt=d(it,!0);c(it),c(we);var Ke=h(we,2),Je=d(Ke),Xe=d(Je);Xe.__click=q;var G=d(Xe),z=h(G);{var ce=Y=>{var ae=SA(),Me=d(ae,!0);c(ae),D(()=>b(Me,p(M).length)),y(Y,ae)};j(z,Y=>{p(M).length>0&&Y(ce)})}c(Xe);var pe=h(Xe,2);pe.__click=T;var Te=d(pe),Pe=h(Te);{var Ze=Y=>{var ae=AA(),Me=d(ae,!0);c(ae),D(()=>b(Me,o().likeCount)),y(Y,ae)};j(Pe,Y=>{o().likeCount>0&&Y(Ze)})}c(pe);var De=h(pe,2),Ce=d(De);c(De);var Ne=h(De,2),Ue=d(Ne);c(Ne),c(Je);var It=h(Je,2),he=d(It);{var _e=Y=>{var ae=PA(),Me=de(ae);Me.__click=Q;var We=d(Me);n_(We,{size:18}),c(Me);var ct=h(Me,2);ct.__click=se;var Gt=d(ct);Vu(Gt,{size:18}),c(ct),D((Nt,Tt)=>{ke(Me,"title",Nt),ke(ct,"title",Tt)},[()=>t()("게시글수정"),()=>t()("삭제")]),y(Y,ae)};j(he,Y=>{u()===o().uid&&Y(_e)})}c(It),c(Ke);var me=h(Ke,2);{var Se=Y=>{var ae=$A(),Me=d(ae);Me.__click=()=>x(S,!p(S));var We=d(Me);c(Me);var ct=h(Me,2);{var Gt=Nt=>{var Tt=LA(),Fe=d(Tt);Qt(Fe,17,E,Ge=>Ge.commentId,(Ge,dt)=>{E_(Ge,{get comment(){return p(dt)},get userId(){return u()}})});var et=h(Fe,2);{var Ye=Ge=>{var dt=RA();dt.__click=()=>x(A,!0);var Kt=d(dt);c(dt),D(Ir=>b(Kt,`📋 ${Ir??""}`),[()=>t()("댓글더보기",{count:p(M).length-C})]),y(Ge,dt)};j(et,Ge=>{p(M).length>C&&!p(A)&&Ge(Ye)})}var ft=h(et,2);{var Ut=Ge=>{var dt=NA();dt.__click=()=>x(A,!1);var Kt=d(dt);c(dt),D(Ir=>b(Kt,`▲ ${Ir??""}`),[()=>t()("댓글숨기기")]),y(Ge,dt)};j(ft,Ge=>{p(A)&&Ge(Ut)})}c(Tt),y(Nt,Tt)};j(ct,Nt=>{p(S)&&Nt(Gt)})}c(ae),D(Nt=>b(We,`${p(S)?"▼":"▶"}
        ${Nt??""} (${p(M).length??""})`),[()=>t()("댓글")]),y(Y,ae)};j(me,Y=>{p(M).length>0&&Y(Se)})}c(ie);var $e=h(ie,2);{var Ee=Y=>{var ae=DA();ot(ae,"open","true"),ot(ae,"type","error"),D(()=>ot(ae,"title",t()("수정불가"))),D(()=>ot(ae,"message",t()("댓글이달려있어수정불가메시지"))),D(()=>ot(ae,"confirmText",t()("확인"))),mn("confirm",ae,W),mn("close",ae,W),y(Y,ae)};j($e,Y=>{p(N)&&Y(Ee)})}var Ae=h($e,2);{var wt=Y=>{var ae=qA();ae.__click=V;var Me=d(ae);Me.__click=rr=>rr.stopPropagation();var We=d(Me),ct=d(We),Gt=d(ct,!0);c(ct);var Nt=h(ct,2);Nt.__click=V,c(We);var Tt=h(We,2),Fe=d(Tt);go(Fe),mo(Fe,!0),c(Tt);var et=h(Tt,2),Ye=d(et);D(()=>ot(Ye,"id",`comment-create-${o().postId??""}`)),ot(Ye,"category","comments"),ot(Ye,"multiple","true"),D(()=>ot(Ye,"buttonText",t()("이미지첨부")));var ft=h(Ye,2),Ut=d(ft);Ut.__click=V;var Ge=d(Ut,!0);c(Ut);var dt=h(Ut,2);dt.__click=O;var Kt=d(dt,!0);c(dt),c(ft),c(et);var Ir=h(et,2);D(()=>ot(Ir,"id",`comment-create-${o().postId??""}`)),c(Me),c(ae),xa(ae,rr=>Ya?.(rr)),D((rr,nr,Qn,En)=>{b(Gt,rr),ke(Fe,"placeholder",nr),b(Ge,Qn),dt.disabled=p(w),b(Kt,En)},[()=>t()("댓글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>p(w)?t()("전송중"):t()("전송")]),tn(Fe,()=>p(g),rr=>x(g,rr)),y(Y,ae)};j(Ae,Y=>{p(_)&&Y(wt)})}var kt=h(Ae,2);{var Wt=Y=>{var ae=OA();ae.__click=le;var Me=d(ae);Me.__click=nr=>nr.stopPropagation();var We=d(Me),ct=d(We),Gt=d(ct,!0);c(ct);var Nt=h(ct,2);Nt.__click=le,c(We);var Tt=h(We,2),Fe=d(Tt);fs(Fe),mo(Fe,!0);var et=h(Fe,2);go(et),c(Tt);var Ye=h(Tt,2),ft=d(Ye);D(()=>ot(ft,"id",`post-edit-${o().postId??""}`)),ot(ft,"category","posts"),ot(ft,"multiple","true"),D(()=>ot(ft,"buttonText",t()("이미지첨부")));var Ut=h(ft,2),Ge=d(Ut);Ge.__click=le;var dt=d(Ge,!0);c(Ge);var Kt=h(Ge,2);Kt.__click=ue;var Ir=d(Kt,!0);c(Kt),c(Ut),c(Ye);var rr=h(Ye,2);D(()=>ot(rr,"id",`post-edit-${o().postId??""}`)),D(()=>ot(rr,"initial-urls",JSON.stringify(o().urls||[]))),c(Me),c(ae),xa(ae,nr=>Ya?.(nr)),D((nr,Qn,En,$r,Pl)=>{b(Gt,nr),ke(Fe,"placeholder",Qn),ke(et,"placeholder",En),b(dt,$r),Kt.disabled=p(L),b(Ir,Pl)},[()=>t()("게시글수정"),()=>t()("제목입력"),()=>t()("내용입력"),()=>t()("취소"),()=>p(L)?t()("저장중"):t()("저장")]),tn(Fe,()=>p(I),nr=>x(I,nr)),tn(et,()=>p(P),nr=>x(P,nr)),y(Y,ae)};j(kt,Y=>{p(k)&&Y(Wt)})}D((Y,ae,Me,We,ct,Gt,Nt,Tt,Fe,et,Ye,ft)=>{b(B,l()),b(H,`#${Y??""}`),b(U,o().title),b(ge,o().content),b(Qe,ae),b(st,Me),b(lt,We),ke(Xe,"title",ct),b(G,`💬 ${Gt??""} `),cr(pe,1,`action-btn ${(n()?.data??0)>=1?"liked":""}`,"svelte-1fsdsc8"),ke(pe,"title",Nt),b(Te,`${(n()?.data??0)>=1?"❤️":"🤍"}
        ${Tt??""} `),ke(De,"title",Fe),b(Ce,`💬 ${et??""}`),ke(Ne,"title",Ye),b(Ue,`🚨 ${ft??""}`)},[()=>String(a()+1).padStart(2,"0"),()=>(o().author||t()("익명")).charAt(0).toUpperCase(),()=>o().author||t()("익명"),()=>new Date(o().createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),()=>t()("댓글"),()=>t()("댓글"),()=>t()("좋아요"),()=>t()("좋아요"),()=>t()("채팅"),()=>t()("채팅"),()=>t()("신고"),()=>t()("신고")]),y(r,J);var Xt=_t(F);return i(),Xt}Rt(["click"]);xe(I_,{itemData:{},index:{},category:{},userId:{},onLike:{}},[],[],!0);var UA=R('<div class="loading-screen"><p> </p></div>'),FA=R("<button> </button>"),jA=R('<div class="empty-state"><div class="empty-illustration">🗂️</div> <h3 class="empty-title"> </h3> <p class="empty-message"> </p> <button class="btn-create-post ghost svelte-1r1wwfo"> </button></div>'),BA=R('<div class="loading-state"><div class="spinner"></div> <p> </p></div>'),VA=R('<div class="error-state"><div class="error-icon">⚠️</div> <div><p class="error-message"> </p> <p class="error-detail"> </p></div></div>'),HA=R('<div class="loading-more"><div class="spinner small"></div> <p> </p></div>'),WA=R('<div class="no-more"><p> </p></div>'),GA=R('<div class="category-display svelte-1r1wwfo"><span class="category-name svelte-1r1wwfo"> </span> <button type="button" class="btn-change-category svelte-1r1wwfo">(변경하기)</button></div>'),KA=R('<label class="radio-option svelte-1r1wwfo"><input type="radio" name="category" class="svelte-1r1wwfo"/> <span class="radio-label svelte-1r1wwfo"> </span></label>'),YA=R('<div class="category-select-mode svelte-1r1wwfo"></div>'),QA=R('<div class="modal-backdrop svelte-1r1wwfo" aria-hidden="true"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo"> </h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo"> </label> <!></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo"> </label> <input id="title" type="text" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo"> </label> <textarea id="content" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><file-upload-trigger></file-upload-trigger> <div class="button-group svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo"> </button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div> <file-upload-list></file-upload-list></div></div>',2),JA=R('<div class="post-list-container svelte-1r1wwfo"><div class="toolbar svelte-1r1wwfo"><div class="toolbar-left svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div></div> <button class="btn-create-post svelte-1r1wwfo"> </button></div> <div class="post-list-surface svelte-1r1wwfo"><!></div></div> <!>',1);const XA={hash:"svelte-1r1wwfo",code:`\r
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
    /* 컨테이너 패딩 최소화 */.post-list-container.svelte-1r1wwfo {padding:1rem 0.75rem 1.5rem;gap:0.875rem;}\r
\r
    /* 도구 모음 압축: 카테고리 탭과 글쓰기 버튼이 같은 줄에 표시 */.toolbar.svelte-1r1wwfo {padding:0.75rem 0.75rem;gap:0.5rem;align-items:stretch;}\r
\r
    /* 왼쪽 도구 모음 영역: 남은 공간을 모두 차지하여 카테고리 탭 확장 */.toolbar-left.svelte-1r1wwfo {gap:0.5rem;flex:1;min-width:0;overflow-x:auto;-webkit-overflow-scrolling:touch;}\r
\r
    /* 카테고리 탭 최소화 */.tab.svelte-1r1wwfo {padding:0.45rem 0.7rem;font-size:0.75rem;}\r
\r
    /* 글쓰기 버튼 모바일 최적화: 이모지만 표시하는 아이콘 모드 */.btn-create-post.svelte-1r1wwfo {padding:0.55rem 0.75rem;font-size:0.8rem;gap:0.25rem;flex-shrink:0;min-width:fit-content;}\r
  }\r
\r
  /* 매우 작은 화면: 480px 이하 */\r
  @media (max-width: 480px) {.post-list-container.svelte-1r1wwfo {padding:0.875rem 0.5rem 1.25rem;gap:0.75rem;}\r
\r
    /* 도구 모음: 최소 패딩 유지 */.toolbar.svelte-1r1wwfo {padding:0.625rem 0.5rem;gap:0.4rem;align-items:stretch;}\r
\r
    /* 왼쪽 도구 모음: flex 1로 확장하여 글쓰기 버튼 우측 배치 */.toolbar-left.svelte-1r1wwfo {gap:0.25rem;flex:1;min-width:0;overflow-x:auto;-webkit-overflow-scrolling:touch;}.tab.svelte-1r1wwfo {padding:0.4rem 0.6rem;font-size:0.7rem;}\r
\r
    /* 글쓰기 버튼: 최소 크기로 축소 */.btn-create-post.svelte-1r1wwfo {padding:0.5rem 0.65rem;font-size:0.75rem;gap:0.2rem;flex-shrink:0;min-width:fit-content;}\r
  }\r
\r
  /* 게시글 아이템 스타일은 PostItem.svelte로 이동했습니다 */`};function C_(r,e){gt(e,!0),vt(r,XA);const t=()=>pt(zt,"$t",n),[n,s]=Ot();let i=ee(null),o=ee(""),a=ee(!0);const l=new URLSearchParams(typeof window<"u"?window.location.search:"");let u=ee(or(l.get("category")||"community")),f=ee(!1),m=ee(""),v=ee(""),_=ee(""),g=ee(!1),w=ee(!1);Jt(()=>{jr(t()("게시판"));const T=vn.onAuthStateChanged(async q=>{if(q){x(i,q.uid,!0);const O=q.displayName||q.email||t()("익명");x(o,O,!0)}else x(i,null),x(o,"");x(a,!1)});return()=>T()});function k(){if(!p(i)){window.location.href="/user/login";return}x(m,p(u),!0),x(w,!1),x(f,!0)}function I(){un("post-create"),x(f,!1),x(m,""),x(v,""),x(_,""),x(w,!1)}async function P(){if(!p(m)){alert(t()("카테고리선택필요"));return}if(!p(v).trim()){alert(t()("제목입력필요"));return}if(!p(_).trim()){alert(t()("내용입력필요"));return}if(!p(i)||!p(o)){alert(t()("로그인정보확인불가"));return}x(g,!0);try{const T=Ii("post-create");console.log("[PostListPage] 업로드된 파일 URLs (fileUploadState):",T),console.log("[PostListPage] createPost 호출 - urls 파라미터:",T.length>0?T:void 0);const q=await _T(p(m),p(i),p(o),p(v),p(_),T.length>0?T:void 0);q.success?(un("post-create"),x(f,!1),x(m,""),x(v,""),x(_,""),x(w,!1),ht(t()("게시글작성완료"),"success")):ht(t()("게시글저장실패",{error:q.error||"Unknown error"}),"error")}catch(T){console.error("게시글 저장 오류:",T),ht(t()("게시글저장중오류"),"error")}finally{x(g,!1)}}function L(){x(w,!p(w))}function N(T){x(m,T,!0),x(w,!1)}function M(T){x(u,T,!0),window.history.pushState({},"",`/post/list?category=${T}`)}var S=ye(),A=de(S);{var C=T=>{var q=UA(),O=d(q),V=d(O,!0);c(O),c(q),D(Q=>b(V,Q),[()=>t()("로딩중")]),y(T,q)},E=T=>{var q=JA(),O=de(q),V=d(O),Q=d(V),W=d(Q);Qt(W,20,()=>ip,F=>F,(F,J)=>{var ie=FA();ie.__click=()=>M(J);var X=d(ie,!0);c(ie),D($=>{cr(ie,1,`tab ${p(u)===J?"active":""}`,"svelte-1r1wwfo"),b(X,$)},[()=>t()(`label.category.${J}`)]),y(F,ie)}),c(W),c(Q);var le=h(Q,2);le.__click=k;var ue=d(le);c(le),c(V);var se=h(V,2),ve=d(se);k0(ve,()=>p(u),F=>{{const J=(re,U=Mr,ne=Mr)=>{{let fe=Un(()=>({...U().data,postId:U().key}));I_(re,{get itemData(){return p(fe)},get index(){return ne()},get category(){return U().data.category},get userId(){return p(i)}})}},ie=re=>{var U=jA(),ne=h(d(U),2),fe=d(ne,!0);c(ne);var Ie=h(ne,2),ge=d(Ie,!0);c(Ie);var we=h(Ie,2);we.__click=k;var Re=d(we);c(we),c(U),D((Oe,Qe,Ve)=>{b(fe,Oe),b(ge,Qe),b(Re,`✏️ ${Ve??""}`)},[()=>t()("게시글없음"),()=>t()("첫게시글공유"),()=>t()("새글작성")]),y(re,U)},X=re=>{var U=BA(),ne=h(d(U),2),fe=d(ne,!0);c(ne),c(U),D(Ie=>b(fe,Ie),[()=>t()("게시글로딩중")]),y(re,U)},$=(re,U=Mr)=>{var ne=VA(),fe=h(d(ne),2),Ie=d(fe),ge=d(Ie,!0);c(Ie);var we=h(Ie,2),Re=d(we,!0);c(we),c(fe),c(ne),D(Oe=>{b(ge,Oe),b(Re,U())},[()=>t()("게시글로드실패")]),y(re,ne)},B=re=>{var U=HA(),ne=h(d(U),2),fe=d(ne,!0);c(ne),c(U),D(Ie=>b(fe,Ie),[()=>t()("더많은게시글로딩")]),y(re,U)},oe=re=>{var U=WA(),ne=d(U),fe=d(ne,!0);c(ne),c(U),D(Ie=>b(fe,Ie),[()=>t()("모든게시글확인")]),y(re,U)};let H=Un(()=>`${p(u)}-`);Ku(F,{path:"posts",orderBy:"order",get sortPrefix(){return p(H)},reverse:!0,pageSize:20,item:J,empty:ie,loading:X,error:$,loadingMore:B,noMore:oe,$$slots:{item:!0,empty:!0,loading:!0,error:!0,loadingMore:!0,noMore:!0}})}}),c(se),c(O);var Z=h(O,2);{var K=F=>{var J=QA();J.__click=()=>x(f,!1),J.__keydown=Pe=>Pe.key==="Escape"&&x(f,!1);var ie=d(J);ie.__click=Pe=>Pe.stopPropagation();var X=d(ie),$=d(X),B=d($,!0);c($);var oe=h($,2);oe.__click=()=>x(f,!1),c(X);var H=h(X,2),re=d(H),U=d(re),ne=d(U,!0);c(U);var fe=h(U,2);{var Ie=Pe=>{var Ze=GA(),De=d(Ze),Ce=d(De,!0);c(De);var Ne=h(De,2);Ne.__click=L,c(Ze),D(Ue=>b(Ce,Ue),[()=>t()(`label.category.${p(m)}`)]),y(Pe,Ze)},ge=Pe=>{var Ze=YA();Qt(Ze,20,()=>ip,De=>De,(De,Ce)=>{var Ne=KA(),Ue=d(Ne);fs(Ue),Ue.__change=()=>N(Ce);var It=h(Ue,2),he=d(It,!0);c(It),c(Ne),D(_e=>{L0(Ue,Ce),$0(Ue,p(m)===Ce),b(he,_e)},[()=>t()(`label.category.${Ce}`)]),y(De,Ne)}),c(Ze),y(Pe,Ze)};j(fe,Pe=>{p(w)?Pe(ge,!1):Pe(Ie)})}c(re);var we=h(re,2),Re=d(we),Oe=d(Re,!0);c(Re);var Qe=h(Re,2);fs(Qe),c(we);var Ve=h(we,2),st=d(Ve),it=d(st,!0);c(st);var lt=h(st,2);go(lt),c(Ve),c(H);var Ke=h(H,2),Je=d(Ke);ot(Je,"id","post-create"),ot(Je,"category","posts"),ot(Je,"multiple","true"),D(()=>ot(Je,"buttonText",t()("이미지첨부")));var Xe=h(Je,2),G=d(Xe);G.__click=I;var z=d(G,!0);c(G);var ce=h(G,2);ce.__click=P;var pe=d(ce,!0);c(ce),c(Xe),c(Ke);var Te=h(Ke,2);ot(Te,"id","post-create"),c(ie),c(J),D((Pe,Ze,De,Ce,Ne,Ue,It,he)=>{b(B,Pe),b(ne,Ze),b(Oe,De),ke(Qe,"placeholder",Ce),b(it,Ne),ke(lt,"placeholder",Ue),G.disabled=p(g),b(z,It),ce.disabled=p(g),b(pe,he)},[()=>t()("새게시글작성"),()=>t()("카테고리"),()=>t()("제목"),()=>t()("제목입력"),()=>t()("내용"),()=>t()("내용입력"),()=>t()("취소"),()=>p(g)?t()("전송중"):t()("전송")]),tn(Qe,()=>p(v),Pe=>x(v,Pe)),tn(lt,()=>p(_),Pe=>x(_,Pe)),y(F,J)};j(Z,F=>{p(f)&&F(K)})}D(F=>b(ue,`✏️ ${F??""}`),[()=>t()("글쓰기")]),y(T,q)};j(A,T=>{p(a)?T(C):T(E,!1)})}y(r,S),_t(),s()}Rt(["click","keydown","change"]);xe(C_,{},[],[],!0);var ZA=R('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6"> </p> <p class="construction-description svelte-1sszjx6"> </p></div> <button class="back-button svelte-1sszjx6"> </button></div></div>');const eP={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function T_(r,e){gt(e,!1),vt(r,eP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Jt(()=>{jr(t()("게시물목록"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Er();var o=ZA(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var _=h(l,2);_.__click=i;var g=d(_,!0);c(_),c(a),c(o),D((w,k,I)=>{b(f,w),b(v,k),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_게시물상세"),()=>t()("메뉴로돌아가기")]),y(r,o),_t(),s()}Rt(["click"]);xe(T_,{},[],[],!0);var tP=R('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9"> </p> <p class="construction-description svelte-1xfn8v9"> </p></div> <button class="back-button svelte-1xfn8v9"> </button></div></div>');const rP={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function S_(r,e){gt(e,!1),vt(r,rP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Jt(()=>{jr(t()("채팅"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Er();var o=tP(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var _=h(l,2);_.__click=i;var g=d(_,!0);c(_),c(a),c(o),D((w,k,I)=>{b(f,w),b(v,k),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_채팅목록"),()=>t()("메뉴로돌아가기")]),y(r,o),_t(),s()}Rt(["click"]);xe(S_,{},[],[],!0);var nP=R('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08"> </p> <p class="construction-description svelte-177ja08"> </p></div> <button class="back-button svelte-177ja08"> </button></div></div>');const sP={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function A_(r,e){gt(e,!1),vt(r,sP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Jt(()=>{jr(t()("설정"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Er();var o=nP(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var _=h(l,2);_.__click=i;var g=d(_,!0);c(_),c(a),c(o),D((w,k,I)=>{b(f,w),b(v,k),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_설정"),()=>t()("메뉴로돌아가기")]),y(r,o),_t(),s()}Rt(["click"]);xe(A_,{},[],[],!0);var iP=R('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe"> </p> <p class="construction-description svelte-65loqe"> </p></div> <button class="back-button svelte-65loqe"> </button></div></div>');const oP={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function P_(r,e){gt(e,!1),vt(r,oP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Jt(()=>{jr(t()("정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Er();var o=iP(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var _=h(l,2);_.__click=i;var g=d(_,!0);c(_),c(a),c(o),D((w,k,I)=>{b(f,w),b(v,k),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_앱정보"),()=>t()("메뉴로돌아가기")]),y(r,o),_t(),s()}Rt(["click"]);xe(P_,{},[],[],!0);var aP=R('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna"> </p> <p class="construction-description svelte-19u7yna"> </p></div> <button class="back-button svelte-19u7yna"> </button></div></div>');const lP={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function R_(r,e){gt(e,!1),vt(r,lP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Jt(()=>{jr(t()("도움말"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Er();var o=aP(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var _=h(l,2);_.__click=i;var g=d(_,!0);c(_),c(a),c(o),D((w,k,I)=>{b(f,w),b(v,k),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_도움말"),()=>t()("메뉴로돌아가기")]),y(r,o),_t(),s()}Rt(["click"]);xe(R_,{},[],[],!0);var cP=R('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w"> </p> <p class="construction-description svelte-134dw7w"> </p></div> <button class="back-button svelte-134dw7w"> </button></div></div>');const dP={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function N_(r,e){gt(e,!1),vt(r,dP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Jt(()=>{jr(t()("이용약관"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Er();var o=cP(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var _=h(l,2);_.__click=i;var g=d(_,!0);c(_),c(a),c(o),D((w,k,I)=>{b(f,w),b(v,k),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_이용약관"),()=>t()("메뉴로돌아가기")]),y(r,o),_t(),s()}Rt(["click"]);xe(N_,{},[],[],!0);var uP=R('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj"> </p> <p class="construction-description svelte-8iwrwj"> </p></div> <button class="back-button svelte-8iwrwj"> </button></div></div>');const hP={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function L_(r,e){gt(e,!1),vt(r,hP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Jt(()=>{jr(t()("개인정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Er();var o=uP(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var _=h(l,2);_.__click=i;var g=d(_,!0);c(_),c(a),c(o),D((w,k,I)=>{b(f,w),b(v,k),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_개인정보"),()=>t()("메뉴로돌아가기")]),y(r,o),_t(),s()}Rt(["click"]);xe(L_,{},[],[],!0);var fP=R('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3"> </p> <p class="construction-description svelte-1f7uyy3"> </p></div> <button class="back-button svelte-1f7uyy3"> </button></div></div>');const pP={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function $_(r,e){gt(e,!1),vt(r,pP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Jt(()=>{jr(t()("문의하기"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Er();var o=fP(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),v=d(m,!0);c(m),c(l);var _=h(l,2);_.__click=i;var g=d(_,!0);c(_),c(a),c(o),D((w,k,I)=>{b(f,w),b(v,k),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_문의하기"),()=>t()("메뉴로돌아가기")]),y(r,o),_t(),s()}Rt(["click"]);xe($_,{},[],[],!0);var vP=R('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/user/login" class="svelte-uqnmwp"> </a></div>'),mP=R('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),gP=R('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),_P=R('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp"> </h3> <div class="logs svelte-uqnmwp"></div></div>'),bP=R('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/post/list" class="btn-view svelte-uqnmwp"> </a></div>'),wP=R('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <button class="btn-generate btn-news svelte-uqnmwp"> </button> <!></div> <!> <!>',1),yP=R('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp"> </h1> <p class="svelte-uqnmwp">커뮤니티 게시판에 100개, 뉴스 게시판에 200개의 테스트 글을 생성합니다.</p> <p class="header-detail svelte-uqnmwp">뉴스 게시판은 각 글의 생성 시간이 1초씩 차이나도록 설정됩니다.</p></div> <!></div></div>');const xP={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 0.25rem 0;color:#6b7280;}.header-detail.svelte-uqnmwp {font-size:0.875rem;color:#9ca3af;margin-top:0.5rem;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;display:flex;flex-direction:column;gap:1rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}\r
\r
  /* 뉴스 버튼 스타일 (초록색) */.btn-news.svelte-uqnmwp {background-color:#10b981;}.btn-news.svelte-uqnmwp:hover:not(:disabled) {background-color:#059669;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function D_(r,e){gt(e,!0),vt(r,xP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();let i=ee(!1),o=ee(!1),a=ee(or({current:0,total:0,category:""})),l=ee(or([])),u=ee(!1);Jt(()=>{jr(t()("테스트게시글생성타이틀"))});function f(E,T="info"){x(l,[...p(l),{message:E,type:T,time:new Date().toLocaleTimeString()}],!0)}const m={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]}},v={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function _(E){return E[Math.floor(Math.random()*E.length)]}function g(E){let T=E;for(const[q,O]of Object.entries(v)){const V=new RegExp(`\\{${q}\\}`,"g");T=T.replace(V,_(O))}return T}async function w(){if(!ze.isAuthenticated||!ze.uid){f(t()("로그인필요"),"error");return}x(i,!0),x(u,!1),x(l,[],!0),f(t()("테스트데이터생성시작"),"success"),f(t()("사용자정보",{user:ze.data?.displayName||ze.email}),"info");const E="community",T=t()("커뮤니티");x(a,{current:0,total:100,category:T},!0),f(t()("카테고리생성중",{category:T}),"info");const q=m.community;let O=0;const V=Date.now();for(let Q=0;Q<100;Q++)try{const W=g(_(q.titles)),le=`${Q+1}. ${W}`,ue=g(_(q.contents)),se=V-Math.floor(Math.random()*30*24*60*60*1e3),ve={uid:ze.uid,title:le,content:ue,author:ze.data?.displayName||ze.email||t()("익명"),category:E,order:`${E}-${se}`,createdAt:se,updatedAt:V,likeCount:0,commentCount:0},Z=Lt(Pt,"posts");await Ro(Z,ve),O++,x(a,{...p(a),current:Q+1},!0),(Q+1)%20===0&&f(t()("생성진행",{current:Q+1,total:100}),"success"),await new Promise(K=>setTimeout(K,50))}catch(W){f(t()("생성실패",{error:W.message}),"error")}f(t()("카테고리생성완료",{category:T,count:O}),"success"),f(t()("모든데이터생성완료"),"success"),f(t()("총100개생성"),"success"),x(i,!1),x(u,!0)}async function k(){if(!ze.isAuthenticated||!ze.uid){f(t()("로그인필요"),"error");return}x(o,!0),x(u,!1),x(l,[],!0),f("뉴스 게시판 글 생성 시작","success"),f(t()("사용자정보",{user:ze.data?.displayName||ze.email}),"info");const E="news",T="뉴스",q=200;x(a,{current:0,total:q,category:T},!0),f(`${T} 카테고리에 ${q}개 글 생성 중...`,"info");const O=m.news;let V=0;const Q=Date.now();for(let W=0;W<q;W++)try{const le=g(_(O.titles)),ue=`${W+1}. ${le}`,se=g(_(O.contents)),ve=Q-(q-1-W)*1e3,Z={uid:ze.uid,title:ue,content:se,author:ze.data?.displayName||ze.email||t()("익명"),category:E,order:`${E}-${ve}`,createdAt:ve,updatedAt:Q,likeCount:0,commentCount:0},K=Lt(Pt,"posts");await Ro(K,Z),V++,x(a,{...p(a),current:W+1},!0),(W+1)%50===0&&f(`${W+1}/${q} 글 생성 완료`,"success"),await new Promise(F=>setTimeout(F,50))}catch(le){f(`글 생성 실패: ${le.message}`,"error")}f(`${T} 카테고리 생성 완료: ${V}개`,"success"),f("모든 뉴스 게시글 생성 완료!","success"),f(`총 ${V}/${q}개 생성됨`,"success"),x(o,!1),x(u,!0)}var I=yP(),P=d(I),L=d(P),N=d(L),M=d(N,!0);c(N),Ft(4),c(L);var S=h(L,2);{var A=E=>{var T=vP(),q=d(T),O=d(q,!0);c(q);var V=h(q,2),Q=d(V,!0);c(V),c(T),D((W,le)=>{b(O,W),b(Q,le)},[()=>t()("로그인필요"),()=>t()("로그인하러가기")]),y(E,T)},C=E=>{var T=wP(),q=de(T),O=d(q);O.__click=w;var V=d(O,!0);c(O);var Q=h(O,2);Q.__click=k;var W=d(Q,!0);c(Q);var le=h(Q,2);{var ue=F=>{var J=mP(),ie=d(J),X=d(ie,!0);c(ie);var $=h(ie,2),B=d($);c($);var oe=h($,2),H=d(oe);c(oe),c(J),D(()=>{b(X,p(a).category),ol(B,`width: ${p(a).current/p(a).total*100}%`),b(H,`${p(a).current??""} / ${p(a).total??""}`)}),y(F,J)};j(le,F=>{(p(i)||p(o))&&F(ue)})}c(q);var se=h(q,2);{var ve=F=>{var J=_P(),ie=d(J),X=d(ie,!0);c(ie);var $=h(ie,2);Qt($,21,()=>p(l),Tn,(B,oe)=>{var H=gP(),re=d(H),U=d(re,!0);c(re);var ne=h(re,2),fe=d(ne,!0);c(ne),c(H),D(()=>{cr(H,1,`log-item log-${p(oe).type??""}`,"svelte-uqnmwp"),b(U,p(oe).time),b(fe,p(oe).message)}),y(B,H)}),c($),c(J),D(B=>b(X,B),[()=>t()("실행로그")]),y(F,J)};j(se,F=>{p(l).length>0&&F(ve)})}var Z=h(se,2);{var K=F=>{var J=bP(),ie=d(J),X=d(ie,!0);c(ie);var $=h(ie,2),B=d($,!0);c($),c(J),D((oe,H)=>{b(X,oe),b(B,H)},[()=>t()("생성완료확인메시지"),()=>t()("게시판보기")]),y(F,J)};j(Z,F=>{p(u)&&F(K)})}D(F=>{O.disabled=p(i)||p(o),b(V,F),Q.disabled=p(i)||p(o),b(W,p(o)?"생성 중...":"뉴스 글 200개 생성 (1초 간격)")},[()=>p(i)?t()("생성중"):"커뮤니티 글 100개 생성"]),y(E,T)};j(S,E=>{ze.isAuthenticated?E(C,!1):E(A)})}c(P),c(I),D(E=>b(M,E),[()=>t()("테스트게시글생성타이틀")]),y(r,I),_t(),s()}Rt(["click"]);xe(D_,{},[],[],!0);var kP=R('<div class="dev-history svelte-1vras8s"><div class="background-gradient svelte-1vras8s"></div> <div class="container svelte-1vras8s"><div class="header svelte-1vras8s"><h1 class="title svelte-1vras8s"> </h1> <p class="subtitle svelte-1vras8s"> </p> <div class="update-indicator svelte-1vras8s"><span class="indicator-dot svelte-1vras8s"></span> </div></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="upcoming-card svelte-1vras8s"> </div></div></div>');const EP={hash:"svelte-1vras8s",code:`\r
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
  }`};function q_(r,e){gt(e,!1),vt(r,EP);const t=()=>pt(zt,"$t",n),[n,s]=Ot();Er();var i=kP(),o=h(d(i),2),a=d(o),l=d(a),u=d(l,!0);c(l);var f=h(l,2),m=d(f,!0);c(f);var v=h(f,2),_=h(d(v));c(v),c(a);var g=h(a,2),w=d(g),k=d(w),I=d(k,!0);c(k),c(w);var P=h(w,2),L=d(P),N=d(L,!0);c(L);var M=h(L,2),S=d(M),A=h(d(S),2),C=d(A,!0);c(A),c(S);var E=h(S,2),T=h(d(E),2),q=d(T,!0);c(T),c(E);var O=h(E,2),V=h(d(O),2),Q=d(V,!0);c(V),c(O);var W=h(O,2),le=h(d(W),2),ue=d(le,!0);c(le),c(W);var se=h(W,2),ve=h(d(se),2),Z=d(ve,!0);c(ve),c(se),c(M),c(P);var K=h(P,2),F=d(K),J=d(F,!0);c(F);var ie=h(F,2),X=d(ie),$=h(d(X),2),B=d($,!0);c($),c(X);var oe=h(X,2),H=h(d(oe),2),re=d(H,!0);c(H),c(oe);var U=h(oe,2),ne=h(d(U),2),fe=d(ne,!0);c(ne),c(U);var Ie=h(U,2),ge=h(d(Ie),2),we=d(ge,!0);c(ge),c(Ie),c(ie),c(K),c(g);var Re=h(g,4),Oe=d(Re),Qe=d(Oe),Ve=d(Qe,!0);c(Qe),c(Oe);var st=h(Oe,2),it=d(st),lt=d(it,!0);c(it);var Ke=h(it,2),Je=d(Ke),Xe=h(d(Je),2),G=d(Xe,!0);c(Xe),c(Je);var z=h(Je,2),ce=h(d(z),2),pe=d(ce,!0);c(ce),c(z);var Te=h(z,2),Pe=h(d(Te),2),Ze=d(Pe,!0);c(Pe),c(Te);var De=h(Te,2),Ce=h(d(De),2),Ne=d(Ce,!0);c(Ce),c(De);var Ue=h(De,2),It=h(d(Ue),2),he=d(It,!0);c(It),c(Ue),c(Ke),c(st);var _e=h(st,2),me=d(_e),Se=d(me,!0);c(me);var $e=h(me,2),Ee=d($e),Ae=h(d(Ee),2),wt=d(Ae,!0);c(Ae),c(Ee);var kt=h(Ee,2),Wt=h(d(kt),2),Xt=d(Wt,!0);c(Wt),c(kt);var Y=h(kt,2),ae=h(d(Y),2),Me=d(ae,!0);c(ae),c(Y);var We=h(Y,2),ct=h(d(We),2),Gt=d(ct,!0);c(ct),c(We);var Nt=h(We,2),Tt=h(d(Nt),2),Fe=d(Tt,!0);c(Tt),c(Nt),c($e),c(_e),c(Re);var et=h(Re,4),Ye=d(et),ft=d(Ye),Ut=d(ft,!0);c(ft),c(Ye);var Ge=h(Ye,2),dt=d(Ge),Kt=d(dt,!0);c(dt);var Ir=h(dt,2),rr=d(Ir),nr=h(d(rr),2),Qn=d(nr,!0);c(nr),c(rr);var En=h(rr,2),$r=h(d(En),2),Pl=d($r,!0);c($r),c(En);var Rl=h(En,2),Qu=h(d(Rl),2),F_=d(Qu,!0);c(Qu),c(Rl);var Nl=h(Rl,2),Ju=h(d(Nl),2),j_=d(Ju,!0);c(Ju),c(Nl);var Xu=h(Nl,2),Zu=h(d(Xu),2),B_=d(Zu,!0);c(Zu),c(Xu),c(Ir),c(Ge);var eh=h(Ge,2),Ll=d(eh),V_=d(Ll,!0);c(Ll);var th=h(Ll,2),$l=d(th),rh=h(d($l),2),H_=d(rh,!0);c(rh),c($l);var Dl=h($l,2),nh=h(d(Dl),2),W_=d(nh,!0);c(nh),c(Dl);var ql=h(Dl,2),sh=h(d(ql),2),G_=d(sh,!0);c(sh),c(ql);var ih=h(ql,2),oh=h(d(ih),2),K_=d(oh,!0);c(oh),c(ih),c(th),c(eh),c(et);var Ol=h(et,4),Ml=d(Ol),ah=d(Ml),Y_=d(ah,!0);c(ah),c(Ml);var zl=h(Ml,2),Ul=d(zl),Q_=d(Ul,!0);c(Ul);var lh=h(Ul,2),Fl=d(lh),ch=h(d(Fl),2),J_=d(ch,!0);c(ch),c(Fl);var jl=h(Fl,2),dh=h(d(jl),2),X_=d(dh,!0);c(dh),c(jl);var Bl=h(jl,2),uh=h(d(Bl),2),Z_=d(uh,!0);c(uh),c(Bl);var Vl=h(Bl,2),hh=h(d(Vl),2),eb=d(hh,!0);c(hh),c(Vl);var fh=h(Vl,2),ph=h(d(fh),2),tb=d(ph,!0);c(ph),c(fh),c(lh),c(zl);var vh=h(zl,2),Hl=d(vh),rb=d(Hl,!0);c(Hl);var mh=h(Hl,2),Wl=d(mh),gh=h(d(Wl),2),nb=d(gh,!0);c(gh),c(Wl);var Gl=h(Wl,2),_h=h(d(Gl),2),sb=d(_h,!0);c(_h),c(Gl);var Kl=h(Gl,2),bh=h(d(Kl),2),ib=d(bh,!0);c(bh),c(Kl);var wh=h(Kl,2),yh=h(d(wh),2),ob=d(yh,!0);c(yh),c(wh),c(mh),c(vh),c(Ol);var xh=h(Ol,4),ab=d(xh,!0);c(xh),c(o),c(i),D((lb,cb,db,ub,hb,fb,pb,vb,mb,gb,_b,bb,wb,yb,xb,kb,Eb,Ib,Cb,Tb,Sb,Ab,Pb,Rb,Nb,Lb,$b,Db,qb,Ob,Mb,zb,Ub,Fb,jb,Bb,Vb,Hb,Wb,Gb,Kb,Yb,Qb,Jb,Xb,Zb,e1,t1,r1,n1,s1,i1,o1)=>{b(u,lb),b(m,cb),b(_,` ${db??""}`),b(I,ub),b(N,hb),b(C,fb),b(q,pb),b(Q,vb),b(ue,mb),b(Z,gb),b(J,_b),b(B,bb),b(re,wb),b(fe,yb),b(we,xb),b(Ve,kb),b(lt,Eb),b(G,Ib),b(pe,Cb),b(Ze,Tb),b(Ne,Sb),b(he,Ab),b(Se,Pb),b(wt,Rb),b(Xt,Nb),b(Me,Lb),b(Gt,$b),b(Fe,Db),b(Ut,qb),b(Kt,Ob),b(Qn,Mb),b(Pl,zb),b(F_,Ub),b(j_,Fb),b(B_,jb),b(V_,Bb),b(H_,Vb),b(W_,Hb),b(G_,Wb),b(K_,Gb),b(Y_,Kb),b(Q_,Yb),b(J_,Qb),b(X_,Jb),b(Z_,Xb),b(eb,Zb),b(tb,e1),b(rb,t1),b(nb,r1),b(sb,n1),b(ib,s1),b(ob,i1),b(ab,o1)},[()=>t()("dev.history.title"),()=>t()("dev.history.subtitle"),()=>t()("dev.history.updateIndicator"),()=>t()("dev.history.seminar4.date"),()=>t()("dev.history.seminar4.completed"),()=>t()("dev.history.seminar4.item1"),()=>t()("dev.history.seminar4.item2"),()=>t()("dev.history.seminar4.item3"),()=>t()("dev.history.seminar4.item4"),()=>t()("dev.history.seminar4.item5"),()=>t()("dev.history.seminar4.learned"),()=>t()("dev.history.seminar4.learned1"),()=>t()("dev.history.seminar4.learned2"),()=>t()("dev.history.seminar4.learned3"),()=>t()("dev.history.seminar4.learned4"),()=>t()("dev.history.seminar3.date"),()=>t()("dev.history.seminar3.completed"),()=>t()("dev.history.seminar3.item1"),()=>t()("dev.history.seminar3.item2"),()=>t()("dev.history.seminar3.item3"),()=>t()("dev.history.seminar3.item4"),()=>t()("dev.history.seminar3.item5"),()=>t()("dev.history.seminar3.learned"),()=>t()("dev.history.seminar3.learned1"),()=>t()("dev.history.seminar3.learned2"),()=>t()("dev.history.seminar3.learned3"),()=>t()("dev.history.seminar3.learned4"),()=>t()("dev.history.seminar3.learned5"),()=>t()("dev.history.seminar2.date"),()=>t()("dev.history.seminar2.completed"),()=>t()("dev.history.seminar2.item1"),()=>t()("dev.history.seminar2.item2"),()=>t()("dev.history.seminar2.item3"),()=>t()("dev.history.seminar2.item4"),()=>t()("dev.history.seminar2.item5"),()=>t()("dev.history.seminar2.learned"),()=>t()("dev.history.seminar2.learned1"),()=>t()("dev.history.seminar2.learned2"),()=>t()("dev.history.seminar2.learned3"),()=>t()("dev.history.seminar2.learned4"),()=>t()("dev.history.seminar1.date"),()=>t()("dev.history.seminar1.completed"),()=>t()("dev.history.seminar1.item1"),()=>t()("dev.history.seminar1.item2"),()=>t()("dev.history.seminar1.item3"),()=>t()("dev.history.seminar1.item4"),()=>t()("dev.history.seminar1.item5"),()=>t()("dev.history.seminar1.learned"),()=>t()("dev.history.seminar1.learned1"),()=>t()("dev.history.seminar1.learned2"),()=>t()("dev.history.seminar1.learned3"),()=>t()("dev.history.seminar1.learned4"),()=>t()("dev.history.upcoming")]),y(r,i),_t(),s()}xe(q_,{},[],[],!0);var IP=R(`<div class="sed-page svelte-bwqu3o"><div class="background-gradient svelte-bwqu3o"></div> <div class="container svelte-bwqu3o"><div class="header svelte-bwqu3o"><h1 class="title svelte-bwqu3o">🧩 Spec-Exact Development (SED)</h1> <p class="subtitle svelte-bwqu3o">"AI develops exactly as the spec defines — no interpretation, no
        assumption."</p></div> <div class="section origin-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">💡 탄생 배경</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">바이브코딩의 한계를 극복하기 위해 <strong class="svelte-bwqu3o">2025년 11월 4일 "송재호"</strong>가 만든 새로운 개발 방법론</p> <p class="highlight-text svelte-bwqu3o"><strong class="svelte-bwqu3o">이름하여 SED (Spec-Exact Development)</strong></p> <p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">기존 방식의 문제점:</strong></p> <ul class="problem-list svelte-bwqu3o"><li class="svelte-bwqu3o">spec, context, skill은 두리뭉실한 설명</li> <li class="svelte-bwqu3o">mcp는 단편적인 정보만 제공</li> <li class="svelte-bwqu3o">AI가 자유롭게 해석하여 예상치 못한 결과 발생</li></ul> <p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">SED의 해결책:</strong></p> <ul class="solution-list svelte-bwqu3o"><li class="svelte-bwqu3o">완전한 설계도를 AI에게 제공</li> <li class="svelte-bwqu3o">AI는 추론하지 않고 설계도를 정확히 따름</li> <li class="svelte-bwqu3o">명세를 절대적 기준으로 삼아 일관성 보장</li></ul></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 1. 개념 정의</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">Spec-Exact Development (SED)</strong>는 인공지능 기반 개발
          패러다임으로,<br/> AI가 명세(specification)에 단 한 줄도 벗어나지 않고 개발을 수행하는 체계를
          말합니다.</p> <p class="svelte-bwqu3o">스펙은 절대적 기준이며,<br/> AI는 이를 해석하거나 추론하지 않고, 오직 명세된 대로 실행합니다.</p> <p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">그만큼 스펙이 정밀하고, 완벽해야한다는 것입니다.</strong></p> <p class="svelte-bwqu3o">즉, <strong class="svelte-bwqu3o">완전한 설계도를 AI 에게 제공하며, AI 는 한치의 오차도 없이, 설계도
            대로 만드는 것입니다.</strong></p> <blockquote class="quote svelte-bwqu3o">"If the spec is wrong, the product is wrong — by design."<br/> <span class="quote-sub svelte-bwqu3o">(스펙이 틀리면, 제품도 틀리다. 하지만 그것이 의도다.)</span></blockquote></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 2. 기본 원칙</h2> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">1. Spec-Exactness Principle</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">개발은 오직 스펙에 정의된 내용만을 수행한다.</li> <li class="svelte-bwqu3o">스펙이 불완전하면, AI는 즉시 Spec Error를 반환하고 개발을 중단한다.</li></ul></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">2. Spec Completeness Scoring</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">개발 시작 전, AI는 주어진 스펙을 평가하여 <strong>점수(0~100점)</strong>를 매긴다.</li> <li class="svelte-bwqu3o"><strong>90점 이상</strong>이어야 개발이 시작된다.</li> <li class="svelte-bwqu3o">점수 기준은 다음 요소로 구성된다: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">데이터베이스 설계의 완전성</li> <li class="svelte-bwqu3o">비즈니스 로직의 명확성</li> <li class="svelte-bwqu3o">UI/UX 요구사항의 구체성</li> <li class="svelte-bwqu3o">테스트 계획의 상세도 (unit/widget/e2e)</li> <li class="svelte-bwqu3o">배포 및 운영 환경 정의</li></ul></li></ul> <div class="code-block svelte-bwqu3o"><div class="code-header svelte-bwqu3o">예시: 스펙 점수 부족 시 에러</div> <pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">SpecError: Insufficient specification to execute.
Reason: Database schema, authentication flow, or encryption detail missing.
Required Spec Score: ≥90
Current Score: 42</code></pre></div></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">3. Spec is the Law</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">AI는 인간의 의도를 추론하지 않는다.</li> <li class="svelte-bwqu3o">스펙에 모호한 문장이 있으면, 그 부분은 수행되지 않는다.</li> <li class="svelte-bwqu3o">"추측"은 금지이며, "기록된 것만" 실행한다.</li> <li class="svelte-bwqu3o"><strong>스펙은 절대 기준이지만, 스펙 자체에도 오류가 있을 수 있다.</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">스펙에 오류가 있어도 AI는 추론하지 않고 스펙을 반드시 따른다.</li> <li class="svelte-bwqu3o">스펙의 오류가 의심되면, AI는 개발자에게 확인(검수)이나 수정
                요청을 할 수 있다.</li> <li class="svelte-bwqu3o"><strong>AI는 인간에게 스펙 수정을 요청할 수 있지만, AI 스스로 스펙을
                  수정할 수 없다.</strong></li> <li class="svelte-bwqu3o">결론적으로 AI는 반드시 스펙을 따르는 것이 원칙이다.</li></ul></li></ul></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 3. 개발 프로세스 단계</h2> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🧱 준비 단계 (Preparation Phase)</h3> <p>AI는 개발자가 제공한 스펙을 분석하고 점수를 부여한다. SED에서는 준비
          단계부터 스펙을 입체적으로 설계해 두어야 이후 단계가 순조롭게
          진행된다.</p> <ol class="phase-steps svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>스펙 줄거리 작성</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">전체 제품의 흐름을 설명하는 <strong>전체 줄거리</strong>와
                기능별·모듈별 <strong>세부 줄거리</strong>를 100 개 이상의
                항목으로 정해서 각각 작성한다.</li> <li class="svelte-bwqu3o">완전한 SNS 웹/앱 서비스라면 줄거리는 약 1만 토큰(약 14페이지)
                분량으로 정리한다.</li> <li class="svelte-bwqu3o">실제 상세 스펙은 이 줄거리 대비 최소 20배(약 2,800페이지) 이상이
                되어야 하며, 필요에 따라 더 많거나 적을 수 있다. 줄거리
                단계에서부터 이 규모를 염두에 두고 설계한다.</li> <li class="svelte-bwqu3o">각 줄거리는 핵심 목표, 주요 사용자 역할, 핵심 기능 흐름을 한눈에
                이해할 수 있도록 요약한다.</li></ul></li> <li class="svelte-bwqu3o"><strong>상세 스펙 작성</strong> <p class="phase-step-description svelte-bwqu3o">줄거리에서 파생된 모든 세부 항목을 설계도 수준으로 정리하되,
              중복되거나 잡다한 설명을 제거하고 꼭 필요한 정보만 남긴다.</p> <div class="highlight-box svelte-bwqu3o" style="margin-bottom: 1.5rem;">⚠️ <strong>스펙 소유권과 개인 철학</strong><br/> 다른 사람이 만든 스펙을 복사하거나, 인공지능에게 스펙을 만들라고 해서
              도움을 받을 수 있지만, 결국 무엇을 만들 지는 인간 스스로 결정하는 것이므로,
              스펙의 모든 내용을 숙지하고, 개인의 철학이 담길 수 있도록 수정해야
              합니다.</div> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>DB 설계 (데이터베이스 명세)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>DBMS 종류 및 버전:</strong> MySQL 8.0.35 Community Edition</li> <li class="svelte-bwqu3o"><strong>호스팅 환경:</strong> Self-hosted on AWS EC2 t3.medium
                    (2 vCPU, 4GB RAM)</li> <li class="svelte-bwqu3o"><strong>운영 체제:</strong> Ubuntu 22.04.3 LTS (Jammy Jellyfish)</li> <li class="svelte-bwqu3o"><strong>네트워크 정보:</strong> Private IP 10.0.1.50, Port 3306,
                    SSH Port 22</li> <li class="svelte-bwqu3o"><strong>접근 계정:</strong> dev@10.0.1.50 (SSH key: ~/.ssh/dev_rsa),
                    DB user: app_dev / password stored in .env</li> <li class="svelte-bwqu3o"><strong>SQL 버전 및 설정:</strong> SQL Mode = STRICT_TRANS_TABLES,
                    Character Set = utf8mb4, Collation = utf8mb4_unicode_ci</li> <li class="svelte-bwqu3o"><strong>테이블 구조:</strong> users (id, email, password_hash,
                    created_at), posts (id, user_id, title, content, created_at),
                    comments (id, post_id, user_id, content)</li> <li class="svelte-bwqu3o"><strong>인덱스:</strong> users.email (UNIQUE), posts.user_id
                    (INDEX), comments.post_id + created_at (COMPOSITE INDEX)</li> <li class="svelte-bwqu3o"><strong>외래 키:</strong> posts.user_id → users.id (ON DELETE
                    CASCADE), comments.post_id → posts.id (ON DELETE CASCADE)</li> <li class="svelte-bwqu3o"><strong>트랜잭션 격리 수준:</strong> READ COMMITTED (InnoDB 엔진
                    사용)</li> <li class="svelte-bwqu3o"><strong>백업 정책:</strong> Daily full backup at 03:00 UTC via
                    mysqldump, 7일간 보관</li> <li class="svelte-bwqu3o"><strong>유틸리티 버전:</strong> mysqldump 8.0.35, mysql-client
                    8.0.35, pt-online-schema-change 3.5.0</li></ul></li> <li class="svelte-bwqu3o"><strong>기능 명세 (Feature Specification)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>회원가입 (User Registration):</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">이메일/비밀번호 회원가입: 이메일 형식 검증 (RFC 5322),
                        비밀번호 최소 8자 + 대소문자 + 숫자 + 특수문자 조합</li> <li class="svelte-bwqu3o">전화번호 인증: Twilio API v2022-05-01 사용, SMS 6자리
                        OTP, 유효시간 5분</li> <li class="svelte-bwqu3o">SNS 로그인: Google OAuth 2.0 (Client ID: xxx), Facebook
                        Login v18.0, Apple Sign-In (Team ID: xxx)</li> <li class="svelte-bwqu3o">비밀번호 암호화: bcrypt (cost factor 12), salt rounds 10</li> <li class="svelte-bwqu3o">이메일 인증: SendGrid API v3 사용, 인증 링크 유효시간
                        24시간</li> <li class="svelte-bwqu3o">중복 검사: 이메일 중복 검사 (DB UNIQUE 제약 +
                        애플리케이션 레벨 검증)</li> <li class="svelte-bwqu3o">에러 처리: 409 Conflict (이미 존재하는 이메일), 400 Bad
                        Request (잘못된 형식), 500 Internal Server Error (서버
                        오류)</li></ul></li> <li class="svelte-bwqu3o"><strong>게시판 (Forum):</strong> CRUD 작업, 페이지네이션 (한
                    페이지당 20개), 정렬 기준 (최신순/조회수/좋아요), 검색 (제목/내용/작성자),
                    파일 업로드 (이미지 최대 5MB, 형식: JPG/PNG/GIF)</li> <li class="svelte-bwqu3o"><strong>결제 (Payment):</strong> Stripe API v2023-10-16, PG사:
                    Stripe + Toss Payments, 결제 수단 (카드/계좌이체/간편결제), 결제
                    금액 범위 (최소 1,000원 ~ 최대 10,000,000원)</li> <li class="svelte-bwqu3o"><strong>알림 (Notification):</strong> Firebase Cloud Messaging
                    (FCM) v1 API, 푸시 알림 (댓글/좋아요/멘션), 이메일 알림 (일일
                    요약/주간 리포트), 알림 설정 (사용자별 ON/OFF)</li> <li class="svelte-bwqu3o"><strong>라우팅 (Routing Specification):</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">SED 명세는 <strong>특징적으로 모든 라우트 경로를 직접 만들어주는 것이
                          원칙</strong>이므로, 예: <code>/auth/signup</code>, <code>/auth/verify</code>, <code>/dashboard</code>처럼
                        실제 경로를 스펙에 기록한다.</li> <li class="svelte-bwqu3o">회원가입은 어느 경로에서 시작되고 (<code>/auth/signup</code>), 완료 후 어느 경로로 이동하는지 (<code>/onboarding/profile</code> 등)까지 반드시 명시한다.</li> <li class="svelte-bwqu3o">가입 → 인증 → 온보딩 → 대시보드 등 전체 사용자 여정에
                        대한 경로 순서도를 스펙에 포함하여 흐름을 완전하게
                        기술한다.</li> <li class="svelte-bwqu3o">리다이렉트 조건, 예외 흐름(실패 시 이동 경로), 접근 제어
                        가드 등도 전부 스펙에 직접 작성한다.</li></ul></li> <li class="svelte-bwqu3o"><strong>함수 명세 (Function Specification):</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">SED 명세는 <strong>모든 함수의 이름, 역할, 파라미터, 사용 위치를 명확히
                          정의하는 것이 원칙</strong>이므로, AI가 임의로 함수명을 추론하거나 설계하지 않도록
                        스펙에 직접 작성한다.</li> <li class="svelte-bwqu3o"><strong>함수 이름:</strong> 정확한 함수명을 제공한다. 예: <code>handleLikeCreate()</code>, <code>parseLikeId()</code>, <code>updatePostLikeCount()</code></li> <li class="svelte-bwqu3o"><strong>함수 역할:</strong> 함수가 수행하는 작업과
                        책임을 명확히 기술한다. 예: "좋아요 추가 시 likeCount
                        증가 및 통계 업데이트", "likeId 파싱하여 type, nodeId,
                        uid 추출"</li> <li class="svelte-bwqu3o"><strong>함수 파라미터:</strong> 모든 매개변수의 이름,
                        타입, 필수 여부를 명시한다. 예: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><code>handleLikeCreate(likeId: string)</code> </li> <li class="svelte-bwqu3o"><code>updateProfile(userId: UserId, data:
                              Partial&lt;UserProfile&gt;)</code> - userId 필수, data는 부분 업데이트 객체</li></ul></li> <li class="svelte-bwqu3o"><strong>반환 값:</strong> 함수가 반환하는 값의 타입과
                        구조를 정의한다. 예: <code></code></li> <li class="svelte-bwqu3o"><strong>함수 위치:</strong> 함수가 작성되어야 할 파일
                        경로를 명시한다. 예: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><code>handleLikeCreate()</code> → <code>/firebase/functions/src/handlers/like.handler.ts</code></li> <li class="svelte-bwqu3o"><code>parseLikeId()</code> → <code>/firebase/functions/src/utils/like.utils.ts</code></li> <li class="svelte-bwqu3o"><code>toggleLike()</code> → <code>/web/src/lib/services/like.ts</code></li></ul></li> <li class="svelte-bwqu3o"><strong>함수 호출 위치:</strong> 함수가 어디서 언제
                        호출되어야 하는지 명시한다. 예: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><code>handleLikeCreate()</code>는 Firebase Cloud
                            Functions의 <code></code> onCreate
                            트리거에서 자동 실행</li> <li class="svelte-bwqu3o"><code>toggleLike()</code>는 클라이언트의 PostItem
                            컴포넌트에서 좋아요 버튼 클릭 시 호출</li> <li class="svelte-bwqu3o"><code>parseLikeId()</code>는 <code>handleLikeCreate()</code> 내부에서 likeId
                            검증 시 호출</li></ul></li> <li class="svelte-bwqu3o"><strong>함수 명세 예시:</strong> <pre style="background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 13px; margin-top: 8px;"></pre></li> <li class="svelte-bwqu3o"><strong>주의사항:</strong> 함수 명세는 개발자가 코드를
                        작성하지 않고도 AI가 정확히 구현할 수 있을 만큼 상세해야
                        한다. 함수명, 파라미터, 위치, 호출 시점 등 어느 하나도
                        모호하게 남겨서는 안 된다.</li></ul></li></ul></li> <li class="svelte-bwqu3o"><strong>UI/UX 요구사항 (Design Specification)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>디자인 시스템:</strong> Material Design 3.0, Primary
                    Color #6366F1, Secondary Color #8B5CF6, Font: Pretendard Variable
                    (한글), Inter (영문)</li> <li class="svelte-bwqu3o"><strong>반응형 규칙:</strong> Mobile (&lt;768px), Tablet (768px~1024px),
                    Desktop (&gt;1024px), Breakpoint 기준: Tailwind CSS v3.4</li> <li class="svelte-bwqu3o"><strong>위젯 구성:</strong> Header (고정, height 64px), Sidebar
                    (접이식, width 280px), Main Content (max-width 1280px, center
                    aligned), Footer (height 120px)</li> <li class="svelte-bwqu3o"><strong>사용자 흐름:</strong> 로그인 → 대시보드 → 게시글 목록
                    → 게시글 상세 → 댓글 작성 → 알림 수신 (Figma 링크: https://figma.com/file/xxx)</li> <li class="svelte-bwqu3o"><strong>접근성:</strong> WCAG 2.1 Level AA 준수, 키보드 네비게이션
                    지원, 스크린 리더 호환 (ARIA labels)</li> <li class="svelte-bwqu3o"><strong>애니메이션:</strong> Framer Motion v11, 페이지 전환 (fade-in
                    300ms), 버튼 호버 (scale 1.05 200ms), 모달 (slide-up 250ms)</li></ul></li> <li class="svelte-bwqu3o"><strong>테스트 계획 (Testing Specification) — 가장 정밀해야 하는 섹션</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>테스트 언어 및 환경:</strong> TypeScript 5.3.3, Node.js
                    20.10.0 LTS, npm 10.2.3</li> <li class="svelte-bwqu3o"><strong>테스트 플랫폼:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">Unit 테스트: Vitest 1.0.4 (Jest-compatible, ESM 지원)</li> <li class="svelte-bwqu3o">Component 테스트: Testing Library
                        (@testing-library/svelte 4.0.5)</li> <li class="svelte-bwqu3o">E2E 테스트: Playwright 1.40.1 (Chromium 120.0, Firefox
                        121.0, WebKit 17.4)</li></ul></li> <li class="svelte-bwqu3o"><strong>테스트 환경 셋업:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">로컬 개발: Docker Compose v2.23.0 (MySQL 8.0 + Redis 7.2
                        + Node.js 20)</li> <li class="svelte-bwqu3o">CI 환경: GitHub Actions (ubuntu-latest, Node.js 20.x
                        matrix)</li> <li class="svelte-bwqu3o">테스트 DB: MySQL 8.0 (Docker 컨테이너, 포트 3307, 초기화
                        스크립트: /docker/mysql/init.sql)</li> <li class="svelte-bwqu3o">Mock 데이터: Faker.js 8.3.1 (사용자 100명, 게시글 500개,
                        댓글 2000개 자동 생성)</li> <li class="svelte-bwqu3o">환경 변수: .env.test 파일 (DATABASE_URL, API_KEY,
                        JWT_SECRET 등)</li></ul></li> <li class="svelte-bwqu3o"><strong>Unit 테스트 시나리오:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">커버리지 목표: 최소 80% (Statement/Branch/Function/Line)</li> <li class="svelte-bwqu3o">테스트 케이스 수: 최소 200개 (utils: 50개, services:
                        80개, stores: 70개)</li> <li class="svelte-bwqu3o">실행 명령: <code>npm run test:unit</code> (병렬 실행, max
                        workers 4)</li> <li class="svelte-bwqu3o">예시: auth.service.test.ts - login() 함수
                        (성공/실패/네트워크 오류/토큰 만료 등 12개 케이스)</li></ul></li> <li class="svelte-bwqu3o"><strong>E2E 테스트 시나리오:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">주요 사용자 플로우: 회원가입 → 로그인 → 게시글 작성 →
                        댓글 작성 → 로그아웃 (총 15단계)</li> <li class="svelte-bwqu3o">브라우저: Chromium (Desktop 1920x1080), Mobile (iPhone
                        13, 390x844)</li> <li class="svelte-bwqu3o">실행 명령: <code>npx playwright test</code> (headless mode,
                        병렬 3개)</li> <li class="svelte-bwqu3o">스크린샷: 각 단계마다 자동 캡처, 실패 시 full page
                        screenshot + video recording</li> <li class="svelte-bwqu3o">예시: e2e/auth.spec.ts - 로그인 실패 후 재시도 시나리오
                        (잘못된 비밀번호 3회 → 계정 잠금 확인)</li></ul></li> <li class="svelte-bwqu3o"><strong>성능 테스트:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">도구: Lighthouse CI 0.12.1, k6 0.48.0</li> <li class="svelte-bwqu3o">성능 기준: LCP &lt; 2.5s, FID &lt; 100ms, CLS &lt; 0.1,
                        TTI &lt; 3.8s</li> <li class="svelte-bwqu3o">부하 테스트: k6 (동시 사용자 1000명, 10분간 지속, RPS
                        목표 500)</li></ul></li> <li class="svelte-bwqu3o"><strong>보안 테스트:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">도구: OWASP ZAP 2.14.0, npm audit, Snyk CLI 1.1266.0</li> <li class="svelte-bwqu3o">취약점 스캔: SQL Injection, XSS, CSRF, 패키지 취약점
                        (주간 1회 자동 실행)</li></ul></li> <li class="svelte-bwqu3o"><strong>CI/CD 파이프라인:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">트리거: Git push to main/develop, Pull Request 생성</li> <li class="svelte-bwqu3o">단계: Lint (ESLint 8.56) → Build → Unit Test → E2E Test
                        → Deploy to Staging</li> <li class="svelte-bwqu3o">실행 시간 제한: 전체 파이프라인 15분 이내 (초과 시 실패)</li> <li class="svelte-bwqu3o">자동 배포: Staging (develop 브랜치), Production (main
                        브랜치 + manual approval)</li> <li class="svelte-bwqu3o">배포 플랫폼: Vercel (프론트엔드), AWS ECS Fargate
                        (백엔드)</li> <li class="svelte-bwqu3o">알림: Slack #dev-alerts 채널 (빌드 성공/실패, 배포 완료)</li></ul></li> <li class="svelte-bwqu3o"><strong>테스트 자동화:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">Husky 8.0.3 + lint-staged 15.2.0 (pre-commit hook: lint
                        + format + affected tests)</li> <li class="svelte-bwqu3o">변경 감지: git diff를 분석하여 영향받는 테스트만 실행
                        (예: auth.ts 변경 → auth.test.ts만 실행)</li> <li class="svelte-bwqu3o">캐싱: GitHub Actions cache (node_modules, Playwright
                        browsers, 빌드 결과물)</li></ul></li> <li class="svelte-bwqu3o"><strong>테스트 결과 리포트:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">포맷: JUnit XML (Vitest), HTML Report (Playwright),
                        Coverage Report (Istanbul/NYC)</li> <li class="svelte-bwqu3o">저장 위치: /test-results (Git ignore), S3 버킷
                        s3://test-reports/YYYY-MM-DD/ (30일 보관)</li> <li class="svelte-bwqu3o">대시보드: Codecov (커버리지 트렌드), Allure Report (E2E
                        테스트 히스토리)</li> <li class="svelte-bwqu3o">실패 분석: 실패한 테스트 케이스별 스크린샷, 에러 스택
                        트레이스, 실행 시간, 재현 단계</li></ul></li> <li class="svelte-bwqu3o"><strong>Firebase Functions 테스트 스펙 (Unit + Handler E2E)</strong> <p><strong>SED에서는 테스트가 무엇보다 중요하며, 아래 항목은 최소
                        요구 사항일 뿐 실제 프로젝트에서는 이보다 훨씬 정밀한
                        스펙이 필요하다.</strong></p> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">구조 원칙: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">핸들러(이벤트 수신 함수)는 <code>firebase/functions/src/index.ts</code>에만 위치시킨다.</li> <li class="svelte-bwqu3o">실제 비즈니스 로직은 별도 모듈로 분리하여 순수 함수
                            형태로 작성한다.</li> <li class="svelte-bwqu3o">이 분리 덕분에 에뮬레이터 없이도 로직 단위(Unit
                            Test)를 직접 호출해 검증할 수 있다.</li></ul></li> <li class="svelte-bwqu3o">테스트 구성: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>Unit Test:</strong> 분리된 로직 함수를 직접 호출한다.
                            외부 의존(데이터베이스 등)은 최소화하거나 간단한 mock으로
                            대체한다.</li> <li class="svelte-bwqu3o"><strong>Handler E2E Test:</strong> <code>firebase-functions-test</code> 라이브러리를 사용해
                            핸들러를 wrap 한 뒤, 에뮬레이터 없이도 이벤트를 시뮬레이션한다.</li></ul></li> <li class="svelte-bwqu3o">Realtime Database 이벤트 테스트 시 <code>functionsTest.database.makeDataSnapshot</code>으로 <code>event.data</code>를 구성한다.</li> <li class="svelte-bwqu3o">테스트 환경 초기화: <pre><code>const testEnv = functionsTest(&#123;
      projectId: 'demo-project',
      databaseURL: 'https://demo-project.firebaseio.com',
    &#125;);

    after(() => testEnv.cleanup());</code></pre></li> <li class="svelte-bwqu3o">핸들러 테스트 예시: <pre><code>import * as functionsTest from 'firebase-functions-test';
    import &#123; onPostCreate &#125; from '../src/index';

    const testEnv = functionsTest(&#123;
      projectId: 'demo-project',
      databaseURL: 'https://demo-project.firebaseio.com',
    &#125;);

    after(() => testEnv.cleanup());

    it('새 글 생성 시 카테고리 통계를 증가시킨다', async () => &#123;
      const wrapped = testEnv.wrap(onPostCreate);
      const snapshot = testEnv.database.makeDataSnapshot(
        &#123; category: 'community' &#125;,
        '/posts/post123'
      );

      await wrapped(&#123; data: snapshot, params: &#123; postId: 'post123' &#125; &#125;);

      // admin.database().ref().update 호출 여부 검증
      ...
    &#125;);</code></pre></li> <li class="svelte-bwqu3o">핵심 원칙 요약: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">핸들러와 로직을 명확히 분리하여 테스트 가능성을
                            극대화한다.</li> <li class="svelte-bwqu3o">Unit Test는 순수 함수 단위로, Handler E2E Test는
                            래핑된 핸들러로 수행한다.</li> <li class="svelte-bwqu3o">에뮬레이터 없이도 실환경에 가깝게 검증하기 위해 <code>firebase-functions-test</code>를 적극 활용한다.</li></ul></li></ul></li></ul></li> <li class="svelte-bwqu3o"><strong>개발 환경 (Development Environment)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>언어:</strong> TypeScript 5.3.3 (strict mode, ESNext
                    target)</li> <li class="svelte-bwqu3o"><strong>프레임워크:</strong> Svelte 5.0.0 (Runes API), SvelteKit
                    2.0.0 (adapter-vercel)</li> <li class="svelte-bwqu3o"><strong>빌드 도구:</strong> Vite 5.0.10 (esbuild, Rollup 4.9.4)</li> <li class="svelte-bwqu3o"><strong>패키지 매니저:</strong> npm 10.2.3 (lockfile version
                    3)</li> <li class="svelte-bwqu3o"><strong>OS:</strong> macOS 14.2 Sonoma (개발), Ubuntu 22.04 (프로덕션)</li> <li class="svelte-bwqu3o"><strong>컨테이너:</strong> Docker 24.0.7, Docker Compose 2.23.0</li> <li class="svelte-bwqu3o"><strong>에디터:</strong> VS Code 1.85 (Extensions: Svelte for
                    VS Code, ESLint, Prettier, Playwright Test)</li> <li class="svelte-bwqu3o"><strong>버전 관리:</strong> Git 2.43.0, GitHub (main/develop
                    브랜치 전략, Conventional Commits)</li></ul></li> <li class="svelte-bwqu3o"><strong>배포 및 운영 (Deployment & Operations)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>호스팅:</strong> Vercel (프론트엔드, Edge Functions),
                    AWS ECS Fargate (백엔드 API)</li> <li class="svelte-bwqu3o"><strong>CDN:</strong> Cloudflare (캐싱, DDoS 방어, SSL/TLS 1.3)</li> <li class="svelte-bwqu3o"><strong>모니터링:</strong> Sentry (에러 추적, Release tracking),
                    Datadog (APM, Logs, Metrics)</li> <li class="svelte-bwqu3o"><strong>로그 수집:</strong> AWS CloudWatch Logs (retention 30일),
                    ELK Stack (Elasticsearch 8.11, Logstash 8.11, Kibana 8.11)</li> <li class="svelte-bwqu3o"><strong>알림:</strong> PagerDuty (Critical 에러), Slack (Warning/Info
                    로그)</li> <li class="svelte-bwqu3o"><strong>백업:</strong> 데이터베이스 (daily full + hourly incremental),
                    파일 스토리지 (S3 versioning + lifecycle policy)</li></ul></li></ul> <div class="highlight-box svelte-bwqu3o">✅ <strong>개발은 스펙 점수가 90점 이상일 때만 시작 가능하다.</strong><br/> 위와 같은 세밀하고 정밀한 명세가 모든 항목에 포함되어야 90점 이상을
              받을 수 있다.</div> <div class="code-block svelte-bwqu3o" style="margin-top: 1.5rem;"><div class="code-header svelte-bwqu3o">💡 왜 이렇게 세밀해야 하는가?</div> <pre style="white-space: pre-wrap; color: #cbd5e1; line-height: 1.8;" class="svelte-bwqu3o">SED의 핵심 원칙은 "AI는 추론하지 않는다"입니다.

    만약 스펙에 "MySQL을 사용한다"라고만 적혀있다면:
    - 어떤 버전? (5.7 vs 8.0 - 문법 차이 존재)
    - 어떤 에디션? (Community vs Enterprise - 기능 차이)
    - 어떤 설정? (Character Set, SQL Mode - 동작 차이)
    - 어디서 실행? (로컬 vs AWS RDS - 접근 방법 차이)

    AI는 이를 추론할 수 없고, 추론해서도 안 됩니다.
    따라서 모든 정보가 명시적으로 스펙에 기록되어야 합니다.

    "완전한 스펙 = 개발자가 직접 개발할 때 알아야 할 모든 정보"

    이것이 SED가 요구하는 스펙의 수준입니다.</pre></div></li> <li class="svelte-bwqu3o"><strong>스펙 파일 구조 및 명명 규칙</strong> <p class="phase-step-description svelte-bwqu3o">스펙을 체계적으로 관리하고 AI가 효율적으로 참조할 수 있도록, 스펙 파일의 구조와 명명 규칙을 명확히 정의합니다.</p> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>스펙 파일 이름 구조</strong> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">스펙 파일 이름은 다음의 구조를 가집니다:</p> <pre style="background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 13px; margin-top: 8px;">
&lt;project-name&gt;-&lt;module-name&gt;-&lt;function-name&gt;.md
                </pre> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">기본적으로 "프로젝트명칭-모듈(기능)-함수(세부 유닛)" 구조로 확장자는 Markdown 파일인 <code>.md</code>가 됩니다.</p></li> <li class="svelte-bwqu3o"><strong>스펙 파일 YAML 헤더 구조</strong> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">모든 스펙 파일 상단에는 다음과 같은 YAML 구조를 가집니다:</p> <pre style="background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 13px; margin-top: 8px;">
---
name: 스펙(또는 프로젝트) 이름. 영문, 숫자, 하이픈만 지원. (255 글자 이내)
version: 스펙 버전. (SEM version 원칙)
description: 프로젝트 설명 (4096 글자 이내)
author: 작성자이름 (64글자 이내)
email: 작성자 메일 주소 (64글자 이내)
homepage: 참고 홈페이지 주소
funding: 스펙 관리자에게 금전적 지원을 할 수 있는 결제 경로
license: GPT, MIT 등
dependencies: thruthesky/forum-spec, *withcenter/chat-spec[chat-rooms-join.md#chat-overview], **https://doma.com/abc/def
---
                </pre></li> <li class="svelte-bwqu3o"><strong>Dependencies (의존성) 설명</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>기본 형식:</strong> 다른 스펙을 참고 또는 종속(반드시 사용)한다는 것으로 다른 사람의 스펙을 가져와 쓸 수 있습니다.</li> <li class="svelte-bwqu3o"><strong>GitHub 레포지토리:</strong> <code>계정/레포지토리</code> 형식으로 작성 (예: <code>thruthesky/forum-spec</code>)</li> <li class="svelte-bwqu3o"><strong>외부 URL:</strong> GitHub가 아닌 경우 전체 URL 경로를 지정 (예: <code>https://doma.com/abc/def</code>)</li> <li class="svelte-bwqu3o"><strong>우선 순위 지정:</strong> 별표(*)가 있는 것은 우선 권이 있다는 것입니다. 만약 동일한 내용의 여러 스펙이 있는 경우, 별 표시가 많을수록 해당 spec을 우선 참조합니다. <pre style="background: #f5f5f5; padding: 8px; border-radius: 4px; font-size: 12px; margin-top: 4px;">
*withcenter/chat-spec     (우선순위 1)
**another/spec            (우선순위 2, 가장 우선)
                    </pre></li> <li class="svelte-bwqu3o"><strong>특정 파일/섹션 참조:</strong> 스펙 끝에 <code>[xxx-yyy-zzz.md#section-name]</code>와 같은 내용이 있으면, 전체 스펙을 참고하지 말고 해당 스펙에서 특정 파일만 참고하거나, <code>#section-name</code>으로 해당 파일에서 해당 섹션만 참고합니다. <pre style="background: #f5f5f5; padding: 8px; border-radius: 4px; font-size: 12px; margin-top: 4px;">
withcenter/chat-spec[chat-rooms-join.md]           # 특정 파일만
withcenter/chat-spec[chat-rooms-join.md#overview]  # 특정 섹션만
                    </pre></li></ul></li> <li class="svelte-bwqu3o"><strong>스펙 인덱스 구조</strong> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">모든 프로젝트는 다음과 같은 인덱스 파일을 반드시 포함해야 합니다:</p> <pre style="background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 13px; margin-top: 8px;">
&lt;project-name&gt;-index.md
                </pre> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>DTOC 형태:</strong> Detailed Table of Contents (DTOC) 형태로 작성합니다.</li> <li class="svelte-bwqu3o"><strong>목차와 요약:</strong> 목차와 함께 해당 파일(항목)이 가지는 스펙의 요약/줄거리를 포함합니다.</li> <li class="svelte-bwqu3o"><strong>LLM 활용:</strong> 스펙의 규모가 큰 경우, LLM이 index.md 파일을 참고하여 언제 어느 문서를 참고할지 결정할 수 있습니다.</li> <li class="svelte-bwqu3o"><strong>상단 YAML:</strong> 인덱스 파일도 상단에 YAML 헤더를 포함합니다.</li></ul></li> <li class="svelte-bwqu3o"><strong>스펙 파일 내용 구조</strong> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">개별 스펙 파일은 다음과 같은 구조를 따릅니다:</p> <ol style="margin: 0.5rem 0; padding-left: 1.5rem; color: #475569; font-size: 0.95rem;"><li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>YAML 헤더:</strong> 파일 상단에 위치하며, dependencies를 기록하여 어떤 문서를 참고할지 지시할 수 있습니다. 외부 문서뿐만 아니라 내부 문서도 참고 가능합니다.</li> <li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>Overview (개요):</strong> YAML 헤더 아래에는 짧은 요약 Overview 항목을 반드시 포함합니다.</li> <li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>요구사항 (Requirements):</strong> 해당 스펙을 구현하기 위해 필요한 사전 조건들을 명시합니다. 명령어 실행, 라이브러리 설치, 환경 설정 등을 포함합니다.</li> <li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>워크플로우:</strong> 요구사항 다음에는 반드시 워크플로우가 따라 나와야 합니다. 워크플로우는 인공지능이 반드시 따라야 하는 단계를 포함합니다.</li> <li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>세부 항목:</strong> 워크플로우 아래로 세부 항목에 대한 설명들이 나옵니다.</li></ol> <div class="code-block svelte-bwqu3o" style="margin-top: 1rem;"><div class="code-header svelte-bwqu3o">스펙 파일 구조 예시</div> <pre style="white-space: pre-wrap; color: #cbd5e1; line-height: 1.8;" class="svelte-bwqu3o">---
name: sns-forum-post-create
version: 1.0.0
description: SNS 게시글 작성 기능 상세 스펙
author: 송재호
email: thruthesky@gmail.com
license: MIT
dependencies: sns-database[posts-schema.md], sns-auth[user-session.md#current-user]
---

## Overview
사용자가 새로운 게시글을 작성하는 기능입니다. 제목, 내용, 카테고리를 입력받아 Firebase Realtime Database에 저장합니다.

## 요구사항 (Requirements)

### 라이브러리
- Firebase SDK 10.7.1 이상
- Svelte 5.0.0 이상

### 설치 명령어
\`\`\`bash
npm install firebase@^10.7.1
\`\`\`

### 환경 설정
- \`.env\` 파일에 Firebase 설정 필수:
  - VITE_FIREBASE_API_KEY
  - VITE_FIREBASE_AUTH_DOMAIN
  - VITE_FIREBASE_DATABASE_URL
  - VITE_FIREBASE_PROJECT_ID

### 사전 조건
- Firebase 프로젝트가 생성되어 있어야 함
- Realtime Database가 활성화되어 있어야 함
- 사용자가 로그인된 상태여야 함

## 워크플로우
1. 사용자 인증 상태 확인
2. 입력 폼 유효성 검증
3. 게시글 데이터 구조 생성
4. Firebase에 저장
5. 성공/실패 처리

## 세부 항목
### 입력 필드
- title: 제목 (필수, 1~100자)
- content: 내용 (필수, 1~5000자)
- category: 카테고리 (필수, community|qna|news|market)

### 데이터베이스 경로
/posts/&#123;category&#125;/&#123;postId&#125;

...</pre></div></li></ul> <div class="highlight-box svelte-bwqu3o" style="margin-top: 1.5rem;">✅ <strong>스펙 파일 구조화의 장점</strong><br/> 명확한 파일 구조와 명명 규칙은 대규모 프로젝트에서 스펙을 체계적으로 관리하고, AI가 필요한 정보를 빠르게 찾아 참조할 수 있게 합니다. Dependencies를 통해 스펙 간 의존성을 명시함으로써 스펙의 재사용성과 일관성을 높일 수 있습니다.</div></li> <li class="svelte-bwqu3o"><strong>스펙 검증</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">작성된 스펙은 검증 툴을 통해 점수를 산출하고, <strong>90점 이상</strong>이어야만 개발을 진행할 수 있다.</li> <li class="svelte-bwqu3o">점수가 미달될 경우 보완이 필요한 항목을 식별하고 줄거리 및 상세
                스펙 단계로 되돌려 수정한다.</li> <li class="svelte-bwqu3o">검증 결과와 보완 이력을 모두 기록하여, 스펙과 구현 간 추적성을
                유지한다.</li></ul></li></ol></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">⚙️ 작업 단계 (Execution Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">AI는 스펙에 정의된 내용만 정확히 구현한다.</li> <li class="svelte-bwqu3o">스펙 외의 모든 내용은 무시한다.</li> <li class="svelte-bwqu3o">사람이 중간에 개입할 경우, 그 변경 사항도 스펙으로 재기록되어야
            한다.</li> <li class="svelte-bwqu3o">"코드 수정"은 곧 "스펙 업데이트"를 의미한다.</li></ul></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🔍 검수 단계 (Verification Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">검수 또한 스펙 기반으로 자율적으로 수행된다.</li> <li class="svelte-bwqu3o">테스트 케이스와 기대 결과는 스펙에서 추출된다.</li> <li class="svelte-bwqu3o">모든 기능은 "스펙과 일치하는가?"를 기준으로 평가된다.</li> <li class="svelte-bwqu3o">검수가 통과되지 않으면, AI는 다음 메시지를 반환한다:</li></ul> <div class="code-block svelte-bwqu3o"><pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">SpecDeviationError: Implementation diverged from specification on module 'auth'.
Suggested Action: Review and revise spec or code alignment.</code></pre></div></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🚀 배포 단계 (Deployment Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">배포는 사람의 개입이 필수이다.</li> <li class="svelte-bwqu3o">AI는 배포 스크립트, 환경 구성 파일, CI/CD 절차를 자동 생성하지만,<br/> 실제 배포 명령은 인간 검증 후 수행된다.</li></ul></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🔁 운영 단계 (Operation Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">스펙에는 "운영 자동화" 내용이 반드시 포함되어야 한다.<br/> 예: 로그 수집, 에러 리포팅, 업데이트 시나리오 등.</li> <li class="svelte-bwqu3o">AI는 운영 단계에서 모니터링·리포팅·자동 수정 제안 역할을 수행한다.</li> <li class="svelte-bwqu3o">새로운 요구사항 발생 시, 스펙 업데이트 → 스코어 재평가 → 재개발의
            순서를 따른다.</li></ul></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 4. 철학 요약</h2> <div class="table-container svelte-bwqu3o"><table class="philosophy-table svelte-bwqu3o"><thead class="svelte-bwqu3o"><tr><th class="svelte-bwqu3o">구분</th><th class="svelte-bwqu3o">내용</th></tr></thead><tbody class="svelte-bwqu3o"><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>철학</strong></td><td class="svelte-bwqu3o">스펙이 곧 진리(Spec is the Truth). 개발은 진리를 집행하는 행위.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>AI 역할</strong></td><td class="svelte-bwqu3o">판단하지 않는다. 오직 스펙을 해석 없이 실행한다.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>개발자 역할</strong></td><td class="svelte-bwqu3o">완전하고 명확한 스펙을 만드는 일에 집중한다.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>품질 보증</strong></td><td class="svelte-bwqu3o">테스트 및 검수는 모두 스펙 기반 자동화로 수행된다.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>결과물 특성</strong></td><td class="svelte-bwqu3o">일관성, 검증 가능성, 유지보수 용이성, 예측 가능한 품질.</td></tr></tbody></table></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 5. 표어 및 핵심 문장</h2> <div class="slogan-container svelte-bwqu3o"><div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">🧠</div> <div class="slogan-text svelte-bwqu3o">"AI does not imagine. It executes."</div></div> <div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">📜</div> <div class="slogan-text svelte-bwqu3o">"Spec is the contract. Spec is the code."</div></div> <div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">⚙️</div> <div class="slogan-text svelte-bwqu3o">"No assumption. No improvisation. Only implementation."</div></div></div></div> <div class="section challenge-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">⚠️ SED의 과제</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">SED의 가장 큰 과제는 스펙이 정밀하고 완전해야하므로, <strong class="svelte-bwqu3o">스펙의 크기 또한 커진다는 것</strong>이 문제입니다. 이는 곧 <strong class="svelte-bwqu3o">토큰량이 커진다</strong>는 것을
          의미합니다.</p> <p class="svelte-bwqu3o">완벽한 스펙을 만들기 위해서는 책 한 권 분량의 상세한 명세를 작성해야
          하며, 이를 LLM에 주입하기 위해서는 상당한 양의 토큰이 필요합니다.</p> <div class="challenge-box svelte-bwqu3o"><h3 class="challenge-title svelte-bwqu3o">💡 해결 방안</h3> <p class="svelte-bwqu3o">이 문제를 해결하기 위해서는 <strong class="svelte-bwqu3o">단계별로 스펙을 분리</strong>하여 LLM에게 작업을 시켜야 합니다.</p> <ul class="challenge-list svelte-bwqu3o"><li class="svelte-bwqu3o">전체 스펙을 논리적 단위로 분할 (모듈별, 기능별, 레이어별)</li> <li class="svelte-bwqu3o">각 단계마다 필요한 스펙만 LLM에게 전달</li> <li class="svelte-bwqu3o">단계별 결과물을 검증하고 다음 단계로 진행</li> <li class="svelte-bwqu3o">스펙 문서 자체를 계층적 구조로 설계</li> <li class="svelte-bwqu3o">재사용 가능한 공통 스펙 라이브러리 구축</li></ul></div> <p class="svelte-bwqu3o">이러한 접근을 통해 SED의 철학을 유지하면서도 실제 프로젝트에 적용
          가능한 형태로 발전시킬 수 있습니다.</p></div></div> <div class="conclusion svelte-bwqu3o"><p class="svelte-bwqu3o">이제 "Spec-Exact Development (SED)"는 단순한 프롬프트 개발을 넘어<br/> 명세의 완전성, 자동 검증, 절대적 일관성을 중심으로 한 <strong>AI 기반 개발 표준 철학</strong>으로 정의됩니다.</p></div> <div class="section utility-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🛠️ SED Utility 다운로드 및 실행</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">SED 방법론을 실제로 적용하기 위해서는 작성한 스펙의 구조와 완성도를
          검증할 수 있는 도구가 필요합니다. <strong class="svelte-bwqu3o">SEDAI</strong>는 여러분이
          작성한 스펙을 분석하고 점수를 매겨주는 유틸리티입니다.</p> <div class="info-box svelte-bwqu3o" style="margin-top: 1rem; margin-bottom: 1.5rem;"><strong class="svelte-bwqu3o">📦 NPM 패키지:</strong> <a href="https://www.npmjs.com/package/sedai" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">https://www.npmjs.com/package/sedai</a></div> <div class="utility-box svelte-bwqu3o"><h3 class="utility-title svelte-bwqu3o">📦 설치 및 실행</h3> <p style="margin-bottom: 1rem; color: #475569;" class="svelte-bwqu3o">NPM을 통해 즉시 실행할 수 있습니다. 별도 설치 없이 npx를 사용하면
            됩니다:</p> <div class="code-block svelte-bwqu3o"><div class="code-header svelte-bwqu3o">스펙 검증 명령어</div> <pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">npx sedai doctor</code></pre></div> <div style="margin-top: 1.5rem;"><h4 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.75rem;">🔍 SEDAI Doctor가 수행하는 작업</h4> <ul class="feature-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">스펙 파일 구조 검증:</strong> YAML 헤더, Overview, 요구사항,
                워크플로우, 세부 항목이 올바른 순서로 작성되었는지 확인합니다.</li> <li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">필수 항목 확인:</strong> 각 스펙 파일에 반드시 포함되어야
                할 필드(name, version, dependencies 등)가 누락되지 않았는지
                검사합니다.</li> <li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">의존성 분석:</strong> dependencies에 명시된 다른 스펙들이
                올바른 형식으로 참조되었는지 확인합니다.</li> <li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">완성도 점수 산출:</strong> 스펙의 정밀함과 완성도를
                분석하여 0~100점 사이의 점수를 부여합니다.</li> <li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">개선 제안:</strong> 점수가 90점 미만인 경우, 어떤 부분을
                보완해야 하는지 구체적인 제안을 제공합니다.</li></ul></div> <div class="highlight-box svelte-bwqu3o" style="margin-top: 1.5rem;">💡 <strong class="svelte-bwqu3o">참고:</strong> SED 방법론에서는 스펙 점수가 <strong class="svelte-bwqu3o">90점 이상</strong>이어야 개발을 시작할 수 있습니다. 90점 미만인 경우, SEDAI Doctor의
            제안을 따라 스펙을 보완한 후 다시 검증하세요.</div></div> <div class="utility-box svelte-bwqu3o" style="margin-top: 1.5rem;"><h3 class="utility-title svelte-bwqu3o">📊 출력 예시</h3> <div class="code-block svelte-bwqu3o"><div class="code-header svelte-bwqu3o">SEDAI Doctor 실행 결과</div> <pre style="white-space: pre-wrap; color: #cbd5e1; line-height: 1.8;" class="svelte-bwqu3o">$ npx sedai doctor

🔍 Analyzing your SED specifications...

📁 Found 12 spec files in ./specs/

✅ sns-forum-post-create.md
   - Structure: Valid
   - Required Fields: Complete
   - Dependencies: Resolved
   - Score: 95/100

⚠️  sns-user-profile.md
   - Structure: Valid
   - Required Fields: Missing 'version'
   - Dependencies: Resolved
   - Score: 78/100

   💡 Suggestions:
   - Add version field to YAML header
   - Expand workflow section (currently 3 steps, recommend 5+ steps)
   - Add more detailed error handling scenarios

❌ sns-payment-integration.md
   - Structure: Invalid (missing workflow section)
   - Required Fields: Complete
   - Dependencies: Unresolved (payment-gateway-spec not found)
   - Score: 42/100

   💡 Suggestions:
   - Add workflow section after requirements
   - Resolve dependency: payment-gateway-spec
   - Add database schema details
   - Include API endpoint specifications

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📈 Overall Project Score: 72/100

✅ Ready for development: 8 files
⚠️  Need improvement: 3 files
❌ Critical issues: 1 file

⚠️  Your project score is below 90.
   Please address the issues above before starting development.</pre></div></div> <div class="info-box svelte-bwqu3o" style="margin-top: 1.5rem;"><h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.75rem;">🚀 다음 단계</h3> <ol style="margin: 0; padding-left: 1.5rem; color: #475569; line-height: 1.8;"><li>SEDAI Doctor를 실행하여 현재 스펙의 상태를 확인합니다.</li> <li>점수가 90점 미만인 파일들을 우선적으로 보완합니다.</li> <li>제안된 개선 사항을 적용한 후 다시 검증을 실행합니다.</li> <li>모든 스펙이 90점 이상이 되면 AI 기반 개발을 시작합니다.</li></ol></div></div></div></div></div>`);const CP={hash:"svelte-bwqu3o",code:`
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

  /* 섹션 */.section.svelte-bwqu3o {background:white;border-radius:1rem;padding:2rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.05);border:1px solid #e2e8f0;}.section-title.svelte-bwqu3o {font-size:1.75rem;font-weight:700;color:#0f172a;margin:0 0 1.5rem 0;}

  /* 콘텐츠 */.content.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1rem;color:#334155;line-height:1.8;margin-bottom:1rem;}.content.svelte-bwqu3o strong:where(.svelte-bwqu3o) {color:#1e293b;font-weight:600;}

  /* 인용구 */.quote.svelte-bwqu3o {background:linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);border-left:4px solid #6366f1;padding:1.5rem;margin:1.5rem 0;border-radius:0.5rem;font-size:1.125rem;font-weight:600;color:#4338ca;line-height:1.6;}.quote-sub.svelte-bwqu3o {display:block;margin-top:0.5rem;font-size:0.9rem;font-weight:500;color:#6366f1;}

  /* 원칙 카드 */.principle-card.svelte-bwqu3o {background:#f8fafc;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin-bottom:1.5rem;}.principle-title.svelte-bwqu3o {font-size:1.25rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.principle-list.svelte-bwqu3o {list-style:none;padding:0;margin:0;}.principle-list.svelte-bwqu3o > li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.75rem;position:relative;color:#475569;line-height:1.7;}.principle-list.svelte-bwqu3o > li:where(.svelte-bwqu3o)::before {content:"•";position:absolute;left:0;color:#6366f1;font-weight:bold;font-size:1.2rem;}.sub-list.svelte-bwqu3o {list-style:none;padding:0;margin-top:0.5rem;margin-left:1rem;}.sub-list.svelte-bwqu3o li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.5rem;position:relative;color:#64748b;font-size:0.95rem;}.sub-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"◦";position:absolute;left:0;color:#94a3b8;}

  /* 코드 블록 */.code-block.svelte-bwqu3o {background:#1e293b;border-radius:0.5rem;overflow:hidden;margin-top:1rem;}.code-header.svelte-bwqu3o {background:#334155;padding:0.5rem 1rem;font-size:0.875rem;color:#94a3b8;font-weight:500;}.code-block.svelte-bwqu3o pre:where(.svelte-bwqu3o) {margin:0;padding:1rem;overflow-x:auto;}.code-block.svelte-bwqu3o code:where(.svelte-bwqu3o) {font-family:"Courier New", monospace;font-size:0.875rem;color:#e2e8f0;line-height:1.6;}

  /* 하이라이트 박스 */.highlight-box.svelte-bwqu3o {background:linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);border:2px solid #22c55e;border-radius:0.5rem;padding:1rem 1.25rem;margin-top:1rem;font-size:1rem;color:#15803d;font-weight:600;}

  /* 단계 카드 */.phase-card.svelte-bwqu3o {background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin-bottom:1.5rem;}.phase-title.svelte-bwqu3o {font-size:1.25rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.phase-list.svelte-bwqu3o {list-style:none;padding:0;margin:0;}.phase-list.svelte-bwqu3o > li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.75rem;position:relative;color:#475569;line-height:1.7;}.phase-list.svelte-bwqu3o > li:where(.svelte-bwqu3o)::before {content:"▸";position:absolute;left:0;color:#6366f1;font-weight:bold;}.phase-steps.svelte-bwqu3o {list-style:decimal;margin:1rem 0 0 1.25rem;padding:0;color:#1f2937;}.phase-steps.svelte-bwqu3o > li:where(.svelte-bwqu3o) {margin-bottom:1.75rem;}.phase-steps.svelte-bwqu3o > li:where(.svelte-bwqu3o):last-child {margin-bottom:0;}.phase-step-description.svelte-bwqu3o {margin:0.75rem 0 0.5rem 0;color:#475569;line-height:1.6;}

  /* 테이블 */.table-container.svelte-bwqu3o {overflow-x:auto;margin-top:1rem;}.philosophy-table.svelte-bwqu3o {width:100%;border-collapse:collapse;font-size:0.95rem;}.philosophy-table.svelte-bwqu3o thead:where(.svelte-bwqu3o) {background:#f1f5f9;}.philosophy-table.svelte-bwqu3o th:where(.svelte-bwqu3o) {padding:0.875rem 1rem;text-align:left;font-weight:600;color:#0f172a;border-bottom:2px solid #e2e8f0;}.philosophy-table.svelte-bwqu3o td:where(.svelte-bwqu3o) {padding:0.875rem 1rem;color:#475569;line-height:1.6;border-bottom:1px solid #e2e8f0;}.philosophy-table.svelte-bwqu3o tbody:where(.svelte-bwqu3o) tr:where(.svelte-bwqu3o):hover {background:#f8fafc;}

  /* 슬로건 컨테이너 */.slogan-container.svelte-bwqu3o {display:flex;flex-direction:column;gap:1rem;margin-top:1rem;}.slogan-card.svelte-bwqu3o {display:flex;align-items:center;gap:1rem;background:linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);border:1px solid #e9d5ff;border-radius:0.75rem;padding:1.25rem 1.5rem;}.slogan-icon.svelte-bwqu3o {font-size:2rem;flex-shrink:0;}.slogan-text.svelte-bwqu3o {font-size:1.125rem;font-weight:600;color:#6b21a8;font-style:italic;}

  /* 마무리 섹션 */.conclusion.svelte-bwqu3o {background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);border:1px solid #bfdbfe;border-radius:1rem;padding:2rem;text-align:center;}.conclusion.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1.125rem;color:#1e40af;line-height:1.8;margin:0;}

  /* 탄생 배경 섹션 */.origin-section.svelte-bwqu3o {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);border:2px solid #fbbf24;}.highlight-text.svelte-bwqu3o {text-align:center;font-size:1.25rem;color:#b45309;margin:1.5rem 0;}.problem-list.svelte-bwqu3o,
  .solution-list.svelte-bwqu3o {list-style:none;padding:0;margin:1rem 0 1.5rem 0;}.problem-list.svelte-bwqu3o li:where(.svelte-bwqu3o),
  .solution-list.svelte-bwqu3o li:where(.svelte-bwqu3o) {padding:0.5rem 0.75rem 0.5rem 2rem;margin-bottom:0.5rem;position:relative;color:#1f2937;line-height:1.6;background:rgba(255, 255, 255, 0.5);border-radius:0.5rem;}.problem-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"❌";position:absolute;left:0.5rem;font-size:1rem;}.solution-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"✅";position:absolute;left:0.5rem;font-size:1rem;}

  /* SED의 과제 섹션 */.challenge-section.svelte-bwqu3o {background:linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);border:2px solid #f87171;}.challenge-box.svelte-bwqu3o {background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin:1.5rem 0;}.challenge-title.svelte-bwqu3o {font-size:1.125rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.challenge-list.svelte-bwqu3o {list-style:none;padding:0;margin:0.75rem 0;}.challenge-list.svelte-bwqu3o li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.5rem;position:relative;color:#475569;line-height:1.7;}.challenge-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"→";position:absolute;left:0;color:#f59e0b;font-weight:bold;}

  /* SED Utility 섹션 */.utility-section.svelte-bwqu3o {background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:2px solid #38bdf8;}.utility-box.svelte-bwqu3o {background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin-top:1.5rem;}.utility-title.svelte-bwqu3o {font-size:1.25rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.feature-list.svelte-bwqu3o {list-style:none;padding:0;margin:0.75rem 0;}.feature-list.svelte-bwqu3o li:where(.svelte-bwqu3o) {padding:0.75rem 0.75rem 0.75rem 2rem;margin-bottom:0.75rem;position:relative;color:#334155;line-height:1.7;background:#f8fafc;border-radius:0.5rem;border-left:3px solid #38bdf8;}.feature-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"✓";position:absolute;left:0.75rem;color:#38bdf8;font-weight:bold;font-size:1.125rem;}.info-box.svelte-bwqu3o {background:linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);border:1px solid #fbbf24;border-radius:0.75rem;padding:1.5rem;}

  /* 반응형 디자인 */
  @media (max-width: 768px) {.sed-page.svelte-bwqu3o {padding:1.5rem 1rem;}.title.svelte-bwqu3o {font-size:2rem;}.subtitle.svelte-bwqu3o {font-size:1rem;}.section.svelte-bwqu3o {padding:1.5rem;}.section-title.svelte-bwqu3o {font-size:1.5rem;}.slogan-card.svelte-bwqu3o {flex-direction:column;text-align:center;}.slogan-text.svelte-bwqu3o {font-size:1rem;}
  }

  @media (max-width: 640px) {.title.svelte-bwqu3o {font-size:1.75rem;}.section.svelte-bwqu3o {padding:1.25rem;}.quote.svelte-bwqu3o {font-size:1rem;padding:1rem;}.code-block.svelte-bwqu3o code:where(.svelte-bwqu3o) {font-size:0.8125rem;}.conclusion.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1rem;}
  }`};function O_(r){vt(r,CP);var e=IP(),t=h(d(e),2),n=h(d(t),8),s=h(d(n),2),i=h(d(s),4),o=h(d(i),2),a=h(d(o),6),l=h(d(a),2),u=h(d(l),2),f=h(d(u),10),m=h(d(f),2),v=h(d(m),6),_=h(d(v),2),g=d(_),w=h(d(g));w.nodeValue=` -
                            likeId는 필수, 형식: "post-{postId}-{uid}"`,c(g),Ft(2),c(_),c(v);var k=h(v,2),I=h(d(k),2);I.textContent=`Promise<{success: boolean; type?: string;
                          error?: string}>`,c(k);var P=h(k,4),L=h(d(P),2),N=d(L),M=h(d(N),2);M.textContent="/likes/{likeId}",Ft(),c(N),Ft(4),c(L),c(P);var S=h(P,2),A=h(d(S),2);A.textContent=`
함수명: handleLikeCreate
역할: 좋아요 추가 시 likeCount 증가 및 통계 업데이트
파라미터:
  - likeId: string (필수)
    형식: "post-{postId}-{uid}" 또는 "comment-{commentId}-{uid}"
반환값: Promise<{success: boolean; type?: string; nodeId?: string; uid?: string; error?: string}>
위치: /firebase/functions/src/handlers/like.handler.ts
호출: Firebase Cloud Functions onCreate 트리거 (/likes/{likeId})
수행 작업:
  1. likeId 파싱 (parseLikeId 함수 사용)
  2. type이 'post'인 경우 해당 게시글의 likeCount +1
  3. type이 'comment'인 경우 해당 댓글의 likeCount +1
  4. /stats/counters/like 전역 통계 +1
에러 처리:
  - likeId 파싱 실패 시 {success: false, error: "Invalid likeId format"}
  - 게시글/댓글을 찾을 수 없는 경우 {success: false, error: "Post/Comment not found"}
                        `,c(S),Ft(2),c(m),c(f),c(u),c(l),Ft(8),c(a),Ft(4),c(o),Ft(4),c(i),c(s),Ft(8),c(n),Ft(10),c(t),c(e),y(r,e)}xe(O_,{},[],[],!0);var TP=R('<div role="alert"><span class="toast-icon svelte-1cpok13"> </span> <span class="toast-message svelte-1cpok13"> </span> <button class="toast-close svelte-1cpok13" aria-label="닫기" type="button">×</button></div>'),SP=R('<div class="toast-container svelte-1cpok13"></div>');const AP={hash:"svelte-1cpok13",code:`\r
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
  }`};function M_(r,e){gt(e,!1),vt(r,AP);const t=()=>pt(Yu,"$toasts",n),[n,s]=Ot();function i(a){switch(a){case"success":return"✓";case"error":return"✗";case"info":return"ℹ";case"warning":return"⚠";default:return"ℹ"}}Er();var o=SP();Qt(o,5,t,a=>a.id,(a,l)=>{var u=TP(),f=d(u),m=d(f,!0);c(f);var v=h(f,2),_=d(v,!0);c(v);var g=h(v,2);g.__click=()=>b_(p(l).id),c(u),D(w=>{cr(u,1,`toast toast-${p(l).type??""}`,"svelte-1cpok13"),b(m,w),b(_,p(l).message)},[()=>i(p(l).type)]),y(a,u)}),c(o),y(r,o),_t(),s()}Rt(["click"]);xe(M_,{},[],[],!0);var PP=R('<div class="loading-state svelte-z18b0h"><div class="spinner svelte-z18b0h"></div> <p class="svelte-z18b0h"> </p></div>'),RP=R('<div class="error-state svelte-z18b0h"><p class="error-icon svelte-z18b0h">⚠️</p> <p class="error-text svelte-z18b0h"> </p> <p class="error-detail svelte-z18b0h"> </p></div>'),NP=R('<div class="stats-container svelte-z18b0h"><div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">👥</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">📝</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">💬</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">❤️</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div></div>'),LP=R('<div class="empty-state svelte-z18b0h"><p class="empty-icon svelte-z18b0h">📊</p> <p class="empty-text svelte-z18b0h"> </p></div>'),$P=R('<aside class="right-sidebar svelte-z18b0h"><h2 class="sidebar-title svelte-z18b0h"> </h2> <!></aside>');const DP={hash:"svelte-z18b0h",code:`\r
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
  }`};function z_(r,e){gt(e,!1),vt(r,DP);const t=()=>pt(zt,"$t",s),n=()=>pt(o,"$statsStore",s),[s,i]=Ot(),o=Gu("stats/counters");function a(g){return g==null?"0":g.toLocaleString()}Er();var l=$P(),u=d(l),f=d(u,!0);c(u);var m=h(u,2);{var v=g=>{var w=PP(),k=h(d(w),2),I=d(k,!0);c(k),c(w),D(P=>b(I,P),[()=>t()("통계로딩중")]),y(g,w)},_=g=>{var w=ye(),k=de(w);{var I=L=>{var N=RP(),M=h(d(N),2),S=d(M,!0);c(M);var A=h(M,2),C=d(A,!0);c(A),c(N),D(E=>{b(S,E),b(C,n().error.message)},[()=>t()("통계로드실패")]),y(L,N)},P=L=>{var N=ye(),M=de(N);{var S=C=>{const E=nl(()=>n().data);var T=NP(),q=d(T),O=h(d(q),2),V=d(O),Q=d(V,!0);c(V);var W=h(V,2),le=d(W,!0);c(W),c(O),c(q);var ue=h(q,2),se=h(d(ue),2),ve=d(se),Z=d(ve,!0);c(ve);var K=h(ve,2),F=d(K,!0);c(K),c(se),c(ue);var J=h(ue,2),ie=h(d(J),2),X=d(ie),$=d(X,!0);c(X);var B=h(X,2),oe=d(B,!0);c(B),c(ie),c(J);var H=h(J,2),re=h(d(H),2),U=d(re),ne=d(U,!0);c(U);var fe=h(U,2),Ie=d(fe,!0);c(fe),c(re),c(H),c(T),D((ge,we,Re,Oe,Qe,Ve,st,it)=>{b(Q,ge),b(le,we),b(Z,Re),b(F,Oe),b($,Qe),b(oe,Ve),b(ne,st),b(Ie,it)},[()=>t()("전체사용자"),()=>a(p(E).user),()=>t()("전체글"),()=>a(p(E).post),()=>t()("전체댓글"),()=>a(p(E).comment),()=>t()("전체좋아요"),()=>a(p(E).like)]),y(C,T)},A=C=>{var E=LP(),T=h(d(E),2),q=d(T,!0);c(T),c(E),D(O=>b(q,O),[()=>t()("통계데이터없음")]),y(C,E)};j(M,C=>{n().data?C(S):C(A,!1)},!0)}y(L,N)};j(k,L=>{n().error?L(I):L(P,!1)},!0)}y(g,w)};j(m,g=>{n().loading?g(v):g(_,!1)})}c(l),D(g=>b(f,g),[()=>t()("전체통계")]),y(r,l),_t(),i()}xe(z_,{},[],[],!0);var qP=R('<sns-layout><main class="content-with-sidebar svelte-1hwhcgc"><!></main> <!></sns-layout> <!> <test-fab></test-fab>',3);const OP={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 (사이드바와 함께) */.content-with-sidebar.svelte-1hwhcgc {width:100%;padding:0 20px;box-sizing:border-box;}

  /* 반응형 */
  @media (max-width: 1024px) {.content-with-sidebar.svelte-1hwhcgc {padding-right:20px;}
  }`};function U_(r){vt(r,OP);let e=ee(or(window.location.pathname));function t(){x(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",t);var n=qP(),s=de(n),i=d(s),o=d(i);{var a=m=>{v_(m,{})},l=m=>{var v=ye(),_=de(v);{var g=k=>{m_(k,{})},w=k=>{var I=ye(),P=de(I);{var L=M=>{g_(M,{})},N=M=>{var S=ye(),A=de(S);{var C=T=>{__(T,{})},E=T=>{var q=ye(),O=de(q);{var V=W=>{C_(W,{})},Q=W=>{var le=ye(),ue=de(le);{var se=Z=>{T_(Z,{})},ve=Z=>{var K=ye(),F=de(K);{var J=X=>{S_(X,{})},ie=X=>{var $=ye(),B=de($);{var oe=re=>{A_(re,{})},H=re=>{var U=ye(),ne=de(U);{var fe=ge=>{P_(ge,{})},Ie=ge=>{var we=ye(),Re=de(we);{var Oe=Ve=>{R_(Ve,{})},Qe=Ve=>{var st=ye(),it=de(st);{var lt=Je=>{N_(Je,{})},Ke=Je=>{var Xe=ye(),G=de(Xe);{var z=pe=>{L_(pe,{})},ce=pe=>{var Te=ye(),Pe=de(Te);{var Ze=Ce=>{$_(Ce,{})},De=Ce=>{var Ne=ye(),Ue=de(Ne);{var It=_e=>{D_(_e,{})},he=_e=>{var me=ye(),Se=de(me);{var $e=Ae=>{q_(Ae,{})},Ee=Ae=>{var wt=ye(),kt=de(wt);{var Wt=Y=>{O_(Y)},Xt=Y=>{p_(Y,{})};j(kt,Y=>{p(e)==="/dev/sed"?Y(Wt):Y(Xt,!1)},!0)}y(Ae,wt)};j(Se,Ae=>{p(e)==="/dev/history"?Ae($e):Ae(Ee,!1)},!0)}y(_e,me)};j(Ue,_e=>{p(e)==="/dev/generate-posts"?_e(It):_e(he,!1)},!0)}y(Ce,Ne)};j(Pe,Ce=>{p(e)==="/contact"?Ce(Ze):Ce(De,!1)},!0)}y(pe,Te)};j(G,pe=>{p(e)==="/privacy"?pe(z):pe(ce,!1)},!0)}y(Je,Xe)};j(it,Je=>{p(e)==="/terms"?Je(lt):Je(Ke,!1)},!0)}y(Ve,st)};j(Re,Ve=>{p(e)==="/help"?Ve(Oe):Ve(Qe,!1)},!0)}y(ge,we)};j(ne,ge=>{p(e)==="/about"?ge(fe):ge(Ie,!1)},!0)}y(re,U)};j(B,re=>{p(e)==="/settings"?re(oe):re(H,!1)},!0)}y(X,$)};j(F,X=>{p(e)==="/chat/list"?X(J):X(ie,!1)},!0)}y(Z,K)};j(ue,Z=>{p(e).startsWith("/post/detail/")?Z(se):Z(ve,!1)},!0)}y(W,le)};j(O,W=>{p(e)==="/post/list"?W(V):W(Q,!1)},!0)}y(T,q)};j(A,T=>{p(e)==="/user/list"?T(C):T(E,!1)},!0)}y(M,S)};j(P,M=>{p(e)==="/user/profile"?M(L):M(N,!1)},!0)}y(k,I)};j(_,k=>{p(e)==="/menu"?k(g):k(w,!1)},!0)}y(m,v)};j(o,m=>{p(e)==="/user/login"?m(a):m(l,!1)})}c(i);var u=h(i,2);z_(u,{}),c(s);var f=h(s,2);M_(f,{}),h(f,2),y(r,n)}xe(U_,{},[],[],!0);Cd(U_,{target:document.getElementById("app")});
