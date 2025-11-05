(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Zh=!1;var Cc=Array.isArray,y_=Array.prototype.indexOf,Tc=Array.from,Jo=Object.keys,Zi=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,ef=Object.getOwnPropertyDescriptors,x_=Object.prototype,k_=Array.prototype,Sc=Object.getPrototypeOf,gu=Object.isExtensible;function ki(n){return typeof n=="function"}const In=()=>{};function E_(n){return n()}function Xo(n){for(var e=0;e<n.length;e++)n[e]()}function tf(){var n,e,t=new Promise((r,s)=>{n=r,e=s});return{promise:t,resolve:n,reject:e}}function I_(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const tn=2,Ac=4,Sa=8,Cr=16,Tr=32,ts=64,Aa=128,Xt=1024,vn=2048,Sr=4096,Cn=8192,mr=16384,Pc=32768,Wr=65536,_u=1<<17,C_=1<<18,xs=1<<19,nf=1<<20,Ln=256,Zo=512,ea=32768,Ol=1<<21,Rc=1<<22,us=1<<23,Zn=Symbol("$state"),Nc=Symbol("legacy props"),T_=Symbol(""),qs=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},S_=1,Lc=3,ui=8;function rf(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function A_(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function P_(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function R_(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function N_(n){throw new Error("https://svelte.dev/e/effect_orphan")}function L_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function D_(){throw new Error("https://svelte.dev/e/hydration_failed")}function $_(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function O_(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function q_(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function M_(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function z_(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Pa=1,Ra=2,sf=4,U_=8,F_=16,j_=1,B_=2,of=4,V_=8,H_=16,W_=1,G_=2,af="[",Na="[!",Dc="]",Ks={},Ht=Symbol(),K_="http://www.w3.org/1999/xhtml",Y_="http://www.w3.org/2000/svg",Q_="@attach";function La(n){console.warn("https://svelte.dev/e/hydration_mismatch")}function J_(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function X_(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Ee=!1;function kn(n){Ee=n}let We;function Kt(n){if(n===null)throw La(),Ks;return We=n}function Gr(){return Kt(rr(We))}function d(n){if(Ee){if(rr(We)!==null)throw La(),Ks;We=n}}function xn(n=1){if(Ee){for(var e=n,t=We;e--;)t=rr(t);We=t}}function ta(n=!0){for(var e=0,t=We;;){if(t.nodeType===ui){var r=t.data;if(r===Dc){if(e===0)return t;e-=1}else(r===af||r===Na)&&(e+=1)}var s=rr(t);n&&t.remove(),t=s}}function lf(n){if(!n||n.nodeType!==ui)throw La(),Ks;return n.data}function cf(n){return n===this.v}function df(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function uf(n){return!df(n,this.v)}let hi=!1,Z_=!1;function eb(){hi=!0}let It=null;function Ys(n){It=n}function rt(n,e=!1,t){It={p:It,i:!1,c:null,e:null,s:n,x:null,l:hi&&!e?{s:null,u:null,$:[]}:null}}function st(n){var e=It,t=e.e;if(t!==null){e.e=null;for(var r of t)Af(r)}return n!==void 0&&(e.x=n),e.i=!0,It=e.p,n??{}}function fi(){return!hi||It!==null&&It.l===null}let cs=[];function hf(){var n=cs;cs=[],Xo(n)}function ns(n){if(cs.length===0&&!zi){var e=cs;queueMicrotask(()=>{e===cs&&hf()})}cs.push(n)}function tb(){for(;cs.length>0;)hf()}function ff(n){var e=$e;if(e===null)return He.f|=us,n;if((e.f&Pc)===0){if((e.f&Aa)===0)throw n;e.b.error(n)}else Qs(n,e)}function Qs(n,e){for(;e!==null;){if((e.f&Aa)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const Oo=new Set;let at=null,Mi=null,Un=null,Jn=[],Da=null,ql=!1,zi=!1;class Bn{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#s=0;#l=null;#o=[];#i=[];skipped_effects=new Set;is_fork=!1;process(e){Jn=[],Mi=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#n(r,t);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects)):(Mi=this,at=null,bu(t.render_effects),bu(t.effects),Mi=null,this.#l?.resolve()),Un=null}#n(e,t){e.f^=Xt;for(var r=e.first;r!==null;){var s=r.f,i=(s&(Tr|ts))!==0,o=i&&(s&Xt)!==0,a=o||(s&Cn)!==0||this.skipped_effects.has(r);if((r.f&Aa)!==0&&r.b?.is_pending()&&(t={parent:t,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){i?r.f^=Xt:(s&Ac)!==0?t.effects.push(r):bo(r)&&((r.f&Cr)!==0&&t.block_effects.push(r),to(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects),t=t.parent),r=c.next,c=c.parent}}#a(e){for(const t of e)((t.f&vn)!==0?this.#o:this.#i).push(t),en(t,Xt)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),Un?.set(e,e.v)}activate(){at=this}deactivate(){at=null,Un=null}flush(){if(this.activate(),Jn.length>0){if(pf(),at!==null&&at!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#d()}#d(){if(Oo.size>1){this.previous.clear();var e=Un,t=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of Oo){if(s===this){t=!1;continue}const i=[];for(const[a,l]of this.current){if(s.current.has(a))if(t&&l!==s.current.get(a))s.current.set(a,l);else continue;i.push(a)}if(i.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of i)vf(c,o,a,l);if(Jn.length>0){at=s,s.apply();for(const c of Jn)s.#n(c,r);Jn=[],s.deactivate()}}}at=null,Un=e}this.committed=!0,Oo.delete(this)}increment(e){this.#r+=1,e&&(this.#s+=1)}decrement(e){this.#r-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)en(e,vn),ps(e);for(const e of this.#i)en(e,Sr),ps(e);this.#o=[],this.#i=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=tf()).promise}static ensure(){if(at===null){const e=at=new Bn;Oo.add(at),zi||Bn.enqueue(()=>{at===e&&e.flush()})}return at}static enqueue(e){ns(e)}apply(){}}function Qe(n){var e=zi;zi=!0;try{for(var t;;){if(tb(),Jn.length===0&&(at?.flush(),Jn.length===0))return Da=null,t;pf()}}finally{zi=e}}function pf(){var n=Fs;ql=!0;try{var e=0;for(xu(!0);Jn.length>0;){var t=Bn.ensure();if(e++>1e3){var r,s;nb()}t.process(Jn),Ur.clear()}}finally{ql=!1,xu(n),Da=null}}function nb(){try{L_()}catch(n){Qs(n,Da)}}let cr=null;function bu(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(mr|Cn))===0&&bo(r)&&(cr=new Set,to(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Nf(r):r.fn=null),cr?.size>0)){Ur.clear();for(const s of cr){if((s.f&(mr|Cn))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)cr.has(o)&&(cr.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(mr|Cn))===0&&to(l)}}cr.clear()}}cr=null}}function vf(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;(i&tn)!==0?vf(s,e,t,r):(i&(Rc|Cr))!==0&&(i&vn)===0&&mf(s,e,r)&&(en(s,vn),ps(s))}}function mf(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(e.includes(s))return!0;if((s.f&tn)!==0&&mf(s,e,t))return t.set(s,!0),!0}return t.set(n,!1),!1}function ps(n){for(var e=Da=n;e.parent!==null;){e=e.parent;var t=e.f;if(ql&&e===$e&&(t&Cr)!==0)return;if((t&(ts|Tr))!==0){if((t&Xt)===0)return;e.f^=Xt}}Jn.push(e)}function rb(n){let e=0,t=Kr(0),r;return()=>{fb()&&(v(t),qa(()=>(e===0&&(r=nr(()=>n(()=>Ui(t)))),e+=1,()=>{ns(()=>{e-=1,e===0&&(r?.(),r=void 0,Ui(t))})})))}}var sb=Wr|xs|Aa;function ib(n,e,t){new ob(n,e,t)}class ob{parent;#t=!1;#e;#r=Ee?We:null;#s;#l;#o;#i=null;#n=null;#a=null;#c=null;#d=null;#f=0;#u=0;#p=!1;#h=null;#b=rb(()=>(this.#h=Kr(this.#f),()=>{this.#h=null}));constructor(e,t,r){this.#e=e,this.#s=t,this.#l=r,this.parent=$e.b,this.#t=!!this.#s.pending,this.#o=rs(()=>{if($e.b=this,Ee){const i=this.#r;Gr(),i.nodeType===ui&&i.data===Na?this.#y():this.#w()}else{var s=this.#g();try{this.#i=un(()=>r(s))}catch(i){this.error(i)}this.#u>0?this.#m():this.#t=!1}return()=>{this.#d?.remove()}},sb),Ee&&(this.#e=We)}#w(){try{this.#i=un(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#s.pending;e&&(this.#n=un(()=>e(this.#e)),Bn.enqueue(()=>{var t=this.#g();this.#i=this.#v(()=>(Bn.ensure(),un(()=>this.#l(t)))),this.#u>0?this.#m():(Us(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#d=Dn(),this.#e.before(this.#d),e=this.#d),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#v(e){var t=$e,r=He,s=It;$n(this.#o),fn(this.#o),Ys(this.#o.ctx);try{return e()}catch(i){return ff(i),null}finally{$n(t),fn(r),Ys(s)}}#m(){const e=this.#s.pending;this.#i!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#d),$f(this.#i,this.#c)),this.#n===null&&(this.#n=un(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#u+=e,this.#u===0&&(this.#t=!1,this.#n&&Us(this.#n,()=>{this.#n=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&Xs(this.#h,this.#f)}get_effect_pending(){return this.#b(),v(this.#h)}error(e){var t=this.#s.onerror;let r=this.#s.failed;if(this.#p||!t&&!r)throw e;this.#i&&(Mt(this.#i),this.#i=null),this.#n&&(Mt(this.#n),this.#n=null),this.#a&&(Mt(this.#a),this.#a=null),Ee&&(Kt(this.#r),xn(),Kt(ta()));var s=!1,i=!1;const o=()=>{if(s){X_();return}s=!0,i&&z_(),Bn.ensure(),this.#f=0,this.#a!==null&&Us(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#i=this.#v(()=>(this.#p=!1,un(()=>this.#l(this.#e)))),this.#u>0?this.#m():this.#t=!1};var a=He;try{fn(null),i=!0,t?.(e,o),i=!1}catch(l){Qs(l,this.#o&&this.#o.parent)}finally{fn(a)}r&&ns(()=>{this.#a=this.#v(()=>{Bn.ensure(),this.#p=!0;try{return un(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return Qs(l,this.#o.parent),null}finally{this.#p=!1}})})}}function gf(n,e,t,r){const s=fi()?mo:$a;if(t.length===0&&n.length===0){r(e.map(s));return}var i=at,o=$e,a=ab();function l(){Promise.all(t.map(c=>lb(c))).then(c=>{a();try{r([...e.map(s),...c])}catch(h){(o.f&mr)===0&&Qs(h,o)}i?.deactivate(),na()}).catch(c=>{Qs(c,o)})}n.length>0?Promise.all(n).then(()=>{a();try{return l()}finally{i?.deactivate(),na()}}):l()}function ab(){var n=$e,e=He,t=It,r=at;return function(i=!0){$n(n),fn(e),Ys(t),i&&r?.activate()}}function na(){$n(null),fn(null),Ys(null)}function mo(n){var e=tn|vn,t=He!==null&&(He.f&tn)!==0?He:null;return $e===null||t!==null&&(t.f&Ln)!==0?e|=Ln:$e.f|=xs,{ctx:It,deps:null,effects:null,equals:cf,f:e,fn:n,reactions:null,rv:0,v:Ht,wv:0,parent:t??$e,ac:null}}function lb(n,e){let t=$e;t===null&&A_();var r=t.b,s=void 0,i=Kr(Ht),o=!He,a=new Map;return gb(()=>{var l=tf();s=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{c===at&&c.committed&&c.deactivate(),na()})}catch(f){l.reject(f),na()}var c=at;if(o){var h=!r.is_pending();r.update_pending_count(1),c.increment(h),a.get(c)?.reject(qs),a.delete(c),a.set(c,l)}const m=(f,_=void 0)=>{if(c.activate(),_)_!==qs&&(i.f|=us,Xs(i,_));else{(i.f&us)!==0&&(i.f^=us),Xs(i,f);for(const[g,w]of a){if(a.delete(g),g===c)break;w.reject(qs)}}o&&(r.update_pending_count(-1),c.decrement(h))};l.promise.then(m,f=>m(null,f||"unknown"))}),go(()=>{for(const l of a.values())l.reject(qs)}),new Promise(l=>{function c(h){function m(){h===s?l(i):c(s)}h.then(m,m)}c(s)})}function Js(n){const e=mo(n);return Of(e),e}function $a(n){const e=mo(n);return e.equals=uf,e}function _f(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Mt(e[t])}}function cb(n){for(var e=n.parent;e!==null;){if((e.f&tn)===0)return e;e=e.parent}return null}function $c(n){var e,t=$e;$n(cb(n));try{n.f&=~ea,_f(n),e=Uf(n)}finally{$n(t)}return e}function bf(n){var e=$c(n);if(n.equals(e)||(n.v=e,n.wv=Mf()),!ks)if(Un!==null)Un.set(n,n.v);else{var t=(qr||(n.f&Ln)!==0)&&n.deps!==null?Sr:Xt;en(n,t)}}let Ml=new Set;const Ur=new Map;let wf=!1;function Kr(n,e){var t={f:0,v:n,reactions:null,equals:cf,rv:0,wv:0};return t}function ie(n,e){const t=Kr(n);return Of(t),t}function Oc(n,e=!1,t=!0){const r=Kr(n);return e||(r.equals=uf),hi&&t&&It!==null&&It.l!==null&&(It.l.s??=[]).push(r),r}function y(n,e,t=!1){He!==null&&(!Fn||(He.f&_u)!==0)&&fi()&&(He.f&(tn|Cr|Rc|_u))!==0&&!gr?.includes(n)&&M_();let r=t?Zt(e):e;return Xs(n,r)}function Xs(n,e){if(!n.equals(e)){var t=n.v;ks?Ur.set(n,e):Ur.set(n,t),n.v=e;var r=Bn.ensure();r.capture(n,t),(n.f&tn)!==0&&((n.f&vn)!==0&&$c(n),en(n,(n.f&Ln)===0?Xt:Sr)),n.wv=Mf(),yf(n,vn),fi()&&$e!==null&&($e.f&Xt)!==0&&($e.f&(Tr|ts))===0&&(Rn===null?wb([n]):Rn.push(n)),!r.is_fork&&Ml.size>0&&!wf&&db()}return e}function db(){wf=!1;const n=Array.from(Ml);for(const e of n)(e.f&Xt)!==0&&en(e,Sr),bo(e)&&to(e);Ml.clear()}function zl(n,e=1){var t=v(n),r=e===1?t++:t--;return y(n,t),r}function Ui(n){y(n,n.v+1)}function yf(n,e){var t=n.reactions;if(t!==null)for(var r=fi(),s=t.length,i=0;i<s;i++){var o=t[i],a=o.f;if(!(!r&&o===$e)){var l=(a&vn)===0;l&&en(o,e),(a&tn)!==0?(a&ea)===0&&(o.f|=ea,yf(o,Sr)):l&&((a&Cr)!==0&&cr!==null&&cr.add(o),ps(o))}}}function Zt(n){if(typeof n!="object"||n===null||Zn in n)return n;const e=Sc(n);if(e!==x_&&e!==k_)return n;var t=new Map,r=Cc(n),s=ie(0),i=hs,o=a=>{if(hs===i)return a();var l=He,c=hs;fn(null),Eu(i);var h=a();return fn(l),Eu(c),h};return r&&t.set("length",ie(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&O_();var h=t.get(l);return h===void 0?h=o(()=>{var m=ie(c.value);return t.set(l,m),m}):y(h,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const h=o(()=>ie(Ht));t.set(l,h),Ui(s)}}else y(c,Ht),Ui(s);return!0},get(a,l,c){if(l===Zn)return n;var h=t.get(l),m=l in a;if(h===void 0&&(!m||vr(a,l)?.writable)&&(h=o(()=>{var _=Zt(m?a[l]:Ht),g=ie(_);return g}),t.set(l,h)),h!==void 0){var f=v(h);return f===Ht?void 0:f}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var h=t.get(l);h&&(c.value=v(h))}else if(c===void 0){var m=t.get(l),f=m?.v;if(m!==void 0&&f!==Ht)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(a,l){if(l===Zn)return!0;var c=t.get(l),h=c!==void 0&&c.v!==Ht||Reflect.has(a,l);if(c!==void 0||$e!==null&&(!h||vr(a,l)?.writable)){c===void 0&&(c=o(()=>{var f=h?Zt(a[l]):Ht,_=ie(f);return _}),t.set(l,c));var m=v(c);if(m===Ht)return!1}return h},set(a,l,c,h){var m=t.get(l),f=l in a;if(r&&l==="length")for(var _=c;_<m.v;_+=1){var g=t.get(_+"");g!==void 0?y(g,Ht):_ in a&&(g=o(()=>ie(Ht)),t.set(_+"",g))}if(m===void 0)(!f||vr(a,l)?.writable)&&(m=o(()=>ie(void 0)),y(m,Zt(c)),t.set(l,m));else{f=m.v!==Ht;var w=o(()=>Zt(c));y(m,w)}var x=Reflect.getOwnPropertyDescriptor(a,l);if(x?.set&&x.set.call(h,c),!f){if(r&&typeof l=="string"){var I=t.get("length"),S=Number(l);Number.isInteger(S)&&S>=I.v&&y(I,S+1)}Ui(s)}return!0},ownKeys(a){v(s);var l=Reflect.ownKeys(a).filter(m=>{var f=t.get(m);return f===void 0||f.v!==Ht});for(var[c,h]of t)h.v!==Ht&&!(c in a)&&l.push(c);return l},setPrototypeOf(){q_()}})}function wu(n){try{if(n!==null&&typeof n=="object"&&Zn in n)return n[Zn]}catch{}return n}function ub(n,e){return Object.is(wu(n),wu(e))}var Ul,xf,kf,Ef;function Fl(){if(Ul===void 0){Ul=window,xf=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;kf=vr(e,"firstChild").get,Ef=vr(e,"nextSibling").get,gu(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),gu(t)&&(t.__t=void 0)}}function Dn(n=""){return document.createTextNode(n)}function Gn(n){return kf.call(n)}function rr(n){return Ef.call(n)}function u(n,e){if(!Ee)return Gn(n);var t=Gn(We);if(t===null)t=We.appendChild(Dn());else if(e&&t.nodeType!==Lc){var r=Dn();return t?.before(r),Kt(r),r}return Kt(t),t}function he(n,e=!1){if(!Ee){var t=Gn(n);return t instanceof Comment&&t.data===""?rr(t):t}if(e&&We?.nodeType!==Lc){var r=Dn();return We?.before(r),Kt(r),r}return We}function p(n,e=1,t=!1){let r=Ee?We:n;for(var s;e--;)s=r,r=rr(r);if(!Ee)return r;if(t&&r?.nodeType!==Lc){var i=Dn();return r===null?s?.after(i):r.before(i),Kt(i),i}return Kt(r),r}function qc(n){n.textContent=""}function If(){return!1}function Mc(n,e){if(e){const t=document.body;n.autofocus=!0,ns(()=>{document.activeElement===t&&n.focus()})}}function zc(n){Ee&&Gn(n)!==null&&qc(n)}let yu=!1;function Cf(){yu||(yu=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function Oa(n){var e=He,t=$e;fn(null),$n(null);try{return n()}finally{fn(e),$n(t)}}function Tf(n,e,t,r=t){n.addEventListener(e,()=>Oa(t));const s=n.__on_r;s?n.__on_r=()=>{s(),r(!0)}:n.__on_r=()=>r(!0),Cf()}function Sf(n){$e===null&&He===null&&N_(),He!==null&&(He.f&Ln)!==0&&$e===null&&R_(),ks&&P_()}function hb(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Yn(n,e,t,r=!0){var s=$e;s!==null&&(s.f&Cn)!==0&&(n|=Cn);var i={ctx:It,deps:null,nodes_start:null,nodes_end:null,f:n|vn,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{to(i),i.f|=Pc}catch(l){throw Mt(i),l}else e!==null&&ps(i);if(r){var o=i;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&xs)===0&&(o=o.first,(n&Cr)!==0&&(n&Wr)!==0&&o!==null&&(o.f|=Wr)),o!==null&&(o.parent=s,s!==null&&hb(o,s),He!==null&&(He.f&tn)!==0&&(n&ts)===0)){var a=He;(a.effects??=[]).push(o)}}return i}function fb(){return He!==null&&!Fn}function go(n){const e=Yn(Sa,null,!1);return en(e,Xt),e.teardown=n,e}function Zs(n){Sf();var e=$e.f,t=!He&&(e&Tr)!==0&&(e&Pc)===0;if(t){var r=It;(r.e??=[]).push(n)}else return Af(n)}function Af(n){return Yn(Ac|nf,n,!1)}function pb(n){return Sf(),Yn(Sa|nf,n,!0)}function vb(n){Bn.ensure();const e=Yn(ts|xs,n,!0);return()=>{Mt(e)}}function mb(n){Bn.ensure();const e=Yn(ts|xs,n,!0);return(t={})=>new Promise(r=>{t.outro?Us(e,()=>{Mt(e),r(void 0)}):(Mt(e),r(void 0))})}function _o(n){return Yn(Ac,n,!1)}function gb(n){return Yn(Rc|xs,n,!0)}function qa(n,e=0){return Yn(Sa|e,n,!0)}function U(n,e=[],t=[],r=[]){gf(r,e,t,s=>{Yn(Sa,()=>n(...s.map(v)),!0)})}function rs(n,e=0){var t=Yn(Cr|e,n,!0);return t}function un(n,e=!0){return Yn(Tr|xs,n,!0,e)}function Pf(n){var e=n.teardown;if(e!==null){const t=ks,r=He;ku(!0),fn(null);try{e.call(null)}finally{ku(t),fn(r)}}}function Rf(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const s=t.ac;s!==null&&Oa(()=>{s.abort(qs)});var r=t.next;(t.f&ts)!==0?t.parent=null:Mt(t,e),t=r}}function _b(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Tr)===0&&Mt(e),e=t}}function Mt(n,e=!0){var t=!1;(e||(n.f&C_)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(bb(n.nodes_start,n.nodes_end),t=!0),Rf(n,e&&!t),ra(n,0),en(n,mr);var r=n.transitions;if(r!==null)for(const i of r)i.stop();Pf(n);var s=n.parent;s!==null&&s.first!==null&&Nf(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function bb(n,e){for(;n!==null;){var t=n===e?null:rr(n);n.remove(),n=t}}function Nf(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Us(n,e,t=!0){var r=[];Uc(n,r,!0),Lf(r,()=>{t&&Mt(n),e&&e()})}function Lf(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var s of n)s.out(r)}else e()}function Uc(n,e,t){if((n.f&Cn)===0){if(n.f^=Cn,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next,i=(r.f&Wr)!==0||(r.f&Tr)!==0&&(n.f&Cr)!==0;Uc(r,e,i?t:!1),r=s}}}function Fc(n){Df(n,!0)}function Df(n,e){if((n.f&Cn)!==0){n.f^=Cn,(n.f&Xt)===0&&(en(n,vn),ps(n));for(var t=n.first;t!==null;){var r=t.next,s=(t.f&Wr)!==0||(t.f&Tr)!==0;Df(t,s?e:!1),t=r}if(n.transitions!==null)for(const i of n.transitions)(i.is_global||e)&&i.in()}}function $f(n,e){for(var t=n.nodes_start,r=n.nodes_end;t!==null;){var s=t===r?null:rr(t);e.append(t),t=s}}let Fs=!1;function xu(n){Fs=n}let ks=!1;function ku(n){ks=n}let He=null,Fn=!1;function fn(n){He=n}let $e=null;function $n(n){$e=n}let gr=null;function Of(n){He!==null&&(gr===null?gr=[n]:gr.push(n))}let sn=null,_n=0,Rn=null;function wb(n){Rn=n}let qf=1,eo=0,hs=eo;function Eu(n){hs=n}let qr=!1;function Mf(){return++qf}function bo(n){var e=n.f;if((e&vn)!==0)return!0;if((e&Sr)!==0){var t=n.deps,r=(e&Ln)!==0;if(e&tn&&(n.f&=~ea),t!==null){var s,i,o=(e&Zo)!==0,a=r&&$e!==null&&!qr,l=t.length;if((o||a)&&($e===null||($e.f&mr)===0)){var c=n,h=c.parent;for(s=0;s<l;s++)i=t[s],(o||!i?.reactions?.includes(c))&&(i.reactions??=[]).push(c);o&&(c.f^=Zo),a&&h!==null&&(h.f&Ln)===0&&(c.f^=Ln)}for(s=0;s<l;s++)if(i=t[s],bo(i)&&bf(i),i.wv>n.wv)return!0}(!r||$e!==null&&!qr)&&en(n,Xt)}return!1}function zf(n,e,t=!0){var r=n.reactions;if(r!==null&&!gr?.includes(n))for(var s=0;s<r.length;s++){var i=r[s];(i.f&tn)!==0?zf(i,e,!1):e===i&&(t?en(i,vn):(i.f&Xt)!==0&&en(i,Sr),ps(i))}}function Uf(n){var e=sn,t=_n,r=Rn,s=He,i=qr,o=gr,a=It,l=Fn,c=hs,h=n.f;sn=null,_n=0,Rn=null,qr=(h&Ln)!==0&&(Fn||!Fs||He===null),He=(h&(Tr|ts))===0?n:null,gr=null,Ys(n.ctx),Fn=!1,hs=++eo,n.ac!==null&&(Oa(()=>{n.ac.abort(qs)}),n.ac=null);try{n.f|=Ol;var m=n.fn,f=m(),_=n.deps;if(sn!==null){var g;if(ra(n,_n),_!==null&&_n>0)for(_.length=_n+sn.length,g=0;g<sn.length;g++)_[_n+g]=sn[g];else n.deps=_=sn;if(!qr||(h&tn)!==0&&n.reactions!==null)for(g=_n;g<_.length;g++)(_[g].reactions??=[]).push(n)}else _!==null&&_n<_.length&&(ra(n,_n),_.length=_n);if(fi()&&Rn!==null&&!Fn&&_!==null&&(n.f&(tn|Sr|vn))===0)for(g=0;g<Rn.length;g++)zf(Rn[g],n);return s!==null&&s!==n&&(eo++,Rn!==null&&(r===null?r=Rn:r.push(...Rn))),(n.f&us)!==0&&(n.f^=us),f}catch(w){return ff(w)}finally{n.f^=Ol,sn=e,_n=t,Rn=r,He=s,qr=i,gr=o,Ys(a),Fn=l,hs=c}}function yb(n,e){let t=e.reactions;if(t!==null){var r=y_.call(t,n);if(r!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[r]=t[s],t.pop())}}t===null&&(e.f&tn)!==0&&(sn===null||!sn.includes(e))&&(en(e,Sr),(e.f&(Ln|Zo))===0&&(e.f^=Zo),_f(e),ra(e,0))}function ra(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)yb(n,t[r])}function to(n){var e=n.f;if((e&mr)===0){en(n,Xt);var t=$e,r=Fs;$e=n,Fs=!0;try{(e&Cr)!==0?_b(n):Rf(n),Pf(n);var s=Uf(n);n.teardown=typeof s=="function"?s:null,n.wv=qf;var i;Zh&&Z_&&(n.f&vn)!==0&&n.deps}finally{Fs=r,$e=t}}}async function xb(){await Promise.resolve(),Qe()}function v(n){var e=n.f,t=(e&tn)!==0;if(He!==null&&!Fn){var r=$e!==null&&($e.f&mr)!==0;if(!r&&!gr?.includes(n)){var s=He.deps;if((He.f&Ol)!==0)n.rv<eo&&(n.rv=eo,sn===null&&s!==null&&s[_n]===n?_n++:sn===null?sn=[n]:(!qr||!sn.includes(n))&&sn.push(n));else{(He.deps??=[]).push(n);var i=n.reactions;i===null?n.reactions=[He]:i.includes(He)||i.push(He)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,a=o.parent;a!==null&&(a.f&Ln)===0&&(o.f^=Ln)}if(ks){if(Ur.has(n))return Ur.get(n);if(t){o=n;var l=o.v;return((o.f&Xt)===0&&o.reactions!==null||Ff(o))&&(l=$c(o)),Ur.set(o,l),l}}else if(t){if(o=n,Un?.has(o))return Un.get(o);bo(o)&&bf(o)}if(Un?.has(n))return Un.get(n);if((n.f&us)!==0)throw n.v;return n.v}function Ff(n){if(n.v===Ht)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Ur.has(e)||(e.f&tn)!==0&&Ff(e))return!0;return!1}function nr(n){var e=Fn;try{return Fn=!0,n()}finally{Fn=e}}const kb=-7169;function en(n,e){n.f=n.f&kb|e}function Os(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Zn in n)jl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Zn in t&&jl(t)}}}function jl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{jl(n[r],e)}catch{}const t=Sc(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=ef(t);for(let s in r){const i=r[s].get;if(i)try{i.call(n)}catch{}}}}}function Eb(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const Ib=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Cb(n){return Ib.includes(n)}const Tb={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Sb(n){return n=n.toLowerCase(),Tb[n]??n}const Ab=["touchstart","touchmove"];function Pb(n){return Ab.includes(n)}const Rb=["textarea","script","style","title"];function Nb(n){return Rb.includes(n)}const jf=new Set,Bl=new Set;function Bf(n,e,t,r={}){function s(i){if(r.capture||Ni.call(e,i),!i.cancelBubble)return Oa(()=>t?.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?ns(()=>{e.addEventListener(n,s,r)}):e.addEventListener(n,s,r),s}function ei(n,e,t,r,s){var i={capture:r,passive:s},o=Bf(n,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&go(()=>{e.removeEventListener(n,o,i)})}function vt(n){for(var e=0;e<n.length;e++)jf.add(n[e]);for(var t of Bl)t(n)}let Iu=null;function Ni(n){var e=this,t=e.ownerDocument,r=n.type,s=n.composedPath?.()||[],i=s[0]||n.target;Iu=n;var o=0,a=Iu===n&&n.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=s.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(i=s[o]||n.target,i!==e){Zi(n,"currentTarget",{configurable:!0,get(){return i||t}});var h=He,m=$e;fn(null),$n(null);try{for(var f,_=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+r];w!=null&&(!i.disabled||n.target===i)&&w.call(i,n)}catch(x){f?_.push(x):f=x}if(n.cancelBubble||g===e||g===null)break;i=g}if(f){for(let x of _)queueMicrotask(()=>{throw x});throw f}}finally{n.__root=e,delete n.currentTarget,fn(h),$n(m)}}}function Vf(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function _r(n,e){var t=$e;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function R(n,e){var t=(e&W_)!==0,r=(e&G_)!==0,s,i=!n.startsWith("<!>");return()=>{if(Ee)return _r(We,null),We;s===void 0&&(s=Vf(i?n:"<!>"+n),t||(s=Gn(s)));var o=r||xf?document.importNode(s,!0):s.cloneNode(!0);if(t){var a=Gn(o),l=o.lastChild;_r(a,l)}else _r(o,o);return o}}function Lb(n,e,t="svg"){var r=!n.startsWith("<!>"),s=`<${t}>${r?n:"<!>"+n}</${t}>`,i;return()=>{if(Ee)return _r(We,null),We;if(!i){var o=Vf(s),a=Gn(o);i=Gn(a)}var l=i.cloneNode(!0);return _r(l,l),l}}function Db(n,e){return Lb(n,e,"svg")}function be(){if(Ee)return _r(We,null),We;var n=document.createDocumentFragment(),e=document.createComment(""),t=Dn();return n.append(e,t),_r(e,t),n}function k(n,e){if(Ee){$e.nodes_end=We,Gr();return}n!==null&&n.before(e)}function b(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function jc(n,e){return Hf(n,e)}function $b(n,e){Fl(),e.intro=e.intro??!1;const t=e.target,r=Ee,s=We;try{for(var i=Gn(t);i&&(i.nodeType!==ui||i.data!==af);)i=rr(i);if(!i)throw Ks;kn(!0),Kt(i);const o=Hf(n,{...e,anchor:i});return kn(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Ks&&console.warn("Failed to hydrate: ",o),e.recover===!1&&D_(),Fl(),qc(t),kn(!1),jc(n,e)}finally{kn(r),Kt(s)}}const Ns=new Map;function Hf(n,{target:e,anchor:t,props:r={},events:s,context:i,intro:o=!0}){Fl();var a=new Set,l=m=>{for(var f=0;f<m.length;f++){var _=m[f];if(!a.has(_)){a.add(_);var g=Pb(_);e.addEventListener(_,Ni,{passive:g});var w=Ns.get(_);w===void 0?(document.addEventListener(_,Ni,{passive:g}),Ns.set(_,1)):Ns.set(_,w+1)}}};l(Tc(jf)),Bl.add(l);var c=void 0,h=mb(()=>{var m=t??e.appendChild(Dn());return ib(m,{pending:()=>{}},f=>{if(i){rt({});var _=It;_.c=i}if(s&&(r.$$events=s),Ee&&_r(f,null),c=n(f,r)||{},Ee&&($e.nodes_end=We,We===null||We.nodeType!==ui||We.data!==Dc))throw La(),Ks;i&&st()}),()=>{for(var f of a){e.removeEventListener(f,Ni);var _=Ns.get(f);--_===0?(document.removeEventListener(f,Ni),Ns.delete(f)):Ns.set(f,_)}Bl.delete(l),m!==t&&m.parentNode?.removeChild(m)}});return Vl.set(c,h),c}let Vl=new WeakMap;function Ob(n,e){const t=Vl.get(n);return t?(Vl.delete(n),t(e)):Promise.resolve()}class Ma{anchor;#t=new Map;#e=new Map;#r=new Map;#s=!0;constructor(e,t=!0){this.anchor=e,this.#s=t}#l=()=>{var e=at;if(this.#t.has(e)){var t=this.#t.get(e),r=this.#e.get(t);if(r)Fc(r);else{var s=this.#r.get(t);s&&(this.#e.set(t,s.effect),this.#r.delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#t){if(this.#t.delete(i),i===e)break;const a=this.#r.get(o);a&&(Mt(a.effect),this.#r.delete(o))}for(const[i,o]of this.#e){if(i===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(i)){var c=document.createDocumentFragment();$f(o,c),c.append(Dn()),this.#r.set(i,{effect:o,fragment:c})}else Mt(o);this.#e.delete(i)};this.#s||!r?Us(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[r,s]of this.#r)t.includes(r)||(Mt(s.effect),this.#r.delete(r))};ensure(e,t){var r=at,s=If();if(t&&!this.#e.has(e)&&!this.#r.has(e))if(s){var i=document.createDocumentFragment(),o=Dn();i.append(o),this.#r.set(e,{effect:un(()=>t(o)),fragment:i})}else this.#e.set(e,un(()=>t(this.anchor)));if(this.#t.set(r,e),s){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else Ee&&(this.anchor=We),this.#l()}}function Y(n,e,t=!1){Ee&&Gr();var r=new Ma(n),s=t?Wr:0;function i(o,a){if(Ee){const c=lf(n)===Na;if(o===c){var l=ta();Kt(l),r.anchor=l,kn(!1),r.ensure(o,a),kn(!0);return}}r.ensure(o,a)}rs(()=>{var o=!1;e((a,l=!0)=>{o=!0,i(l,a)}),o||i(!1,null)},s)}function qb(n,e,t){Ee&&Gr();var r=new Ma(n),s=!fi();rs(()=>{var i=e();s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,t)})}function ur(n,e){return e}function Mb(n,e,t){for(var r=n.items,s=[],i=e.length,o=0;o<i;o++)Uc(e[o].e,s,!0);var a=i>0&&s.length===0&&t!==null;if(a){var l=t.parentNode;qc(l),l.append(t),r.clear(),Qn(n,e[0].prev,e[i-1].next)}Lf(s,()=>{for(var c=0;c<i;c++){var h=e[c];a||(r.delete(h.k),Qn(n,h.prev,h.next)),Mt(h.e,!a)}})}function Gt(n,e,t,r,s,i=null){var o=n,a={flags:e,items:new Map,first:null},l=(e&sf)!==0;if(l){var c=n;o=Ee?Kt(Gn(c)):c.appendChild(Dn())}Ee&&Gr();var h=null,m=!1,f=new Map,_=$a(()=>{var I=t();return Cc(I)?I:I==null?[]:Tc(I)}),g,w;function x(){zb(w,g,a,f,o,s,e,r,t),i!==null&&(g.length===0?h?Fc(h):h=un(()=>i(o)):h!==null&&Us(h,()=>{h=null}))}rs(()=>{w??=$e,g=v(_);var I=g.length;if(m&&I===0)return;m=I===0;let S=!1;if(Ee){var P=lf(o)===Na;P!==(I===0)&&(o=ta(),Kt(o),kn(!1),S=!0)}if(Ee){for(var D=null,B,z=0;z<I;z++){if(We.nodeType===ui&&We.data===Dc){o=We,S=!0,kn(!1);break}var C=g[z],E=r(C,z);B=Hl(We,a,D,null,C,E,z,s,e,t),a.items.set(E,B),D=B}I>0&&Kt(ta())}if(Ee)I===0&&i&&(h=un(()=>i(o)));else if(If()){var T=new Set,L=at;for(z=0;z<I;z+=1){C=g[z],E=r(C,z);var $=a.items.get(E)??f.get(E);$?(e&(Pa|Ra))!==0&&Wf($,C,z,e):(B=Hl(null,a,null,null,C,E,z,s,e,t,!0),f.set(E,B)),T.add(E)}for(const[F,G]of a.items)T.has(F)||L.skipped_effects.add(G.e);L.oncommit(x)}else x();S&&kn(!0),v(_)}),Ee&&(o=We)}function zb(n,e,t,r,s,i,o,a,l){var c=(o&U_)!==0,h=(o&(Pa|Ra))!==0,m=e.length,f=t.items,_=t.first,g=_,w,x=null,I,S=[],P=[],D,B,z,C;if(c)for(C=0;C<m;C+=1)D=e[C],B=a(D,C),z=f.get(B),z!==void 0&&(z.a?.measure(),(I??=new Set).add(z));for(C=0;C<m;C+=1){if(D=e[C],B=a(D,C),z=f.get(B),z===void 0){var E=r.get(B);if(E!==void 0){r.delete(B),f.set(B,E);var T=x?x.next:g;Qn(t,x,E),Qn(t,E,T),hl(E,T,s),x=E}else{var L=g?g.e.nodes_start:s;x=Hl(L,t,x,x===null?t.first:x.next,D,B,C,i,o,l)}f.set(B,x),S=[],P=[],g=x.next;continue}if(h&&Wf(z,D,C,o),(z.e.f&Cn)!==0&&(Fc(z.e),c&&(z.a?.unfix(),(I??=new Set).delete(z))),z!==g){if(w!==void 0&&w.has(z)){if(S.length<P.length){var $=P[0],F;x=$.prev;var G=S[0],X=S[S.length-1];for(F=0;F<S.length;F+=1)hl(S[F],$,s);for(F=0;F<P.length;F+=1)w.delete(P[F]);Qn(t,G.prev,X.next),Qn(t,x,G),Qn(t,X,$),g=$,x=X,C-=1,S=[],P=[]}else w.delete(z),hl(z,g,s),Qn(t,z.prev,z.next),Qn(t,z,x===null?t.first:x.next),Qn(t,x,z),x=z;continue}for(S=[],P=[];g!==null&&g.k!==B;)(g.e.f&Cn)===0&&(w??=new Set).add(g),P.push(g),g=g.next;if(g===null)continue;z=g}S.push(z),x=z,g=z.next}if(g!==null||w!==void 0){for(var H=w===void 0?[]:Tc(w);g!==null;)(g.e.f&Cn)===0&&H.push(g),g=g.next;var le=H.length;if(le>0){var pe=(o&sf)!==0&&m===0?s:null;if(c){for(C=0;C<le;C+=1)H[C].a?.measure();for(C=0;C<le;C+=1)H[C].a?.fix()}Mb(t,H,pe)}}c&&ns(()=>{if(I!==void 0)for(z of I)z.a?.apply()}),n.first=t.first&&t.first.e,n.last=x&&x.e;for(var oe of r.values())Mt(oe.e);r.clear()}function Wf(n,e,t,r){(r&Pa)!==0&&Xs(n.v,e),(r&Ra)!==0?Xs(n.i,t):n.i=t}function Hl(n,e,t,r,s,i,o,a,l,c,h){var m=(l&Pa)!==0,f=(l&F_)===0,_=m?f?Oc(s,!1,!1):Kr(s):s,g=(l&Ra)===0?o:Kr(o),w={i:g,v:_,k:i,a:null,e:null,prev:t,next:r};try{if(n===null){var x=document.createDocumentFragment();x.append(n=Dn())}return w.e=un(()=>a(n,_,g,c),Ee),w.e.prev=t&&t.e,w.e.next=r&&r.e,t===null?h||(e.first=w):(t.next=w,t.e.next=w.e),r!==null&&(r.prev=w,r.e.prev=w.e),w}finally{}}function hl(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=n.e.nodes_start;i!==null&&i!==r;){var o=rr(i);s.before(i),i=o}}function Qn(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function mt(n,e,t,r,s){Ee&&Gr();var i=e.$$slots?.[t],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(n,o?()=>r:r)}function Ls(n,e,...t){var r=new Ma(n);rs(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...t)))},Wr)}function Ub(n,e,t,r,s,i){let o=Ee;Ee&&Gr();var a=null;Ee&&We.nodeType===S_&&(a=We,Gr());var l=Ee?We:n,c=new Ma(l,!1);rs(()=>{const h=e()||null;var m=Y_;if(h===null){c.ensure(null,null);return}return c.ensure(h,f=>{if(h){if(a=Ee?a:document.createElementNS(m,h),_r(a,a),r){Ee&&Nb(h)&&a.append(document.createComment(""));var _=Ee?Gn(a):a.appendChild(Dn());Ee&&(_===null?kn(!1):Kt(_)),r(a,_)}$e.nodes_end=a,f.before(a)}Ee&&Kt(f)}),()=>{}},Wr),go(()=>{}),o&&(kn(!0),Kt(l))}function tt(n,e){_o(()=>{var t=n.getRootNode(),r=t.host?t:t.head??t.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,r.appendChild(s)}})}function Fb(n,e){var t=void 0,r;rs(()=>{t!==(t=e())&&(r&&(Mt(r),r=null),t&&(r=un(()=>{_o(()=>t(n))})))})}function Gf(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=Gf(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function jb(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=Gf(n))&&(r&&(r+=" "),r+=e);return r}function Bb(n){return typeof n=="object"?jb(n):n??""}const Cu=[...` 	
\r\f \v\uFEFF`];function Vb(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var s in t)if(t[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var a=o+i;(o===0||Cu.includes(r[o-1]))&&(a===r.length||Cu.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Tu(n,e=!1){var t=e?" !important;":";",r="";for(var s in n){var i=n[s];i!=null&&i!==""&&(r+=" "+s+": "+i+t)}return r}function fl(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function Hb(n,e){if(e){var t="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(fl)),s&&l.push(...Object.keys(s).map(fl));var c=0,h=-1;const w=n.length;for(var m=0;m<w;m++){var f=n[m];if(a?f==="/"&&n[m-1]==="*"&&(a=!1):i?i===f&&(i=!1):f==="/"&&n[m+1]==="*"?a=!0:f==='"'||f==="'"?i=f:f==="("?o++:f===")"&&o--,!a&&i===!1&&o===0){if(f===":"&&h===-1)h=m;else if(f===";"||m===w-1){if(h!==-1){var _=fl(n.substring(c,h).trim());if(!l.includes(_)){f!==";"&&m++;var g=n.substring(c,m).trim();t+=" "+g+";"}}c=m+1,h=-1}}}}return r&&(t+=Tu(r)),s&&(t+=Tu(s,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function on(n,e,t,r,s,i){var o=n.__className;if(Ee||o!==t||o===void 0){var a=Vb(t,r,i);(!Ee||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):e?n.className=a:n.setAttribute("class",a)),n.__className=t}else if(i&&s!==i)for(var l in i){var c=!!i[l];(s==null||c!==!!s[l])&&n.classList.toggle(l,c)}return i}function pl(n,e={},t,r){for(var s in t){var i=t[s];e[s]!==i&&(t[s]==null?n.style.removeProperty(s):n.style.setProperty(s,i,r))}}function za(n,e,t,r){var s=n.__style;if(Ee||s!==e){var i=Hb(e,r);(!Ee||i!==n.getAttribute("style"))&&(i==null?n.removeAttribute("style"):n.style.cssText=i),n.__style=e}else r&&(Array.isArray(r)?(pl(n,t?.[0],r[0]),pl(n,t?.[1],r[1],"important")):pl(n,t,r));return r}function no(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Cc(e))return J_();for(var r of n.options)r.selected=e.includes(Fi(r));return}for(r of n.options){var s=Fi(r);if(ub(s,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Bc(n){var e=new MutationObserver(()=>{no(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),go(()=>{e.disconnect()})}function Vc(n,e,t=e){var r=new WeakSet,s=!0;Tf(n,"change",i=>{var o=i?"[selected]":":checked",a;if(n.multiple)a=[].map.call(n.querySelectorAll(o),Fi);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");a=l&&Fi(l)}t(a),at!==null&&r.add(at)}),_o(()=>{var i=e();if(n===document.activeElement){var o=Mi??at;if(r.has(o))return}if(no(n,i,s),s&&i===void 0){var a=n.querySelector(":checked");a!==null&&(i=Fi(a),t(i))}n.__value=i,s=!1}),Bc(n)}function Fi(n){return"__value"in n?n.__value:n.value}const Ei=Symbol("class"),Ii=Symbol("style"),Kf=Symbol("is custom element"),Yf=Symbol("is html");function ti(n){if(Ee){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var r=n.value;Le(n,"value",null),n.value=r}if(n.hasAttribute("checked")){var s=n.checked;Le(n,"checked",null),n.checked=s}}};n.__on_r=t,ns(t),Cf()}}function Wb(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Le(n,e,t,r){var s=Qf(n);Ee&&(s[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(n[T_]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Jf(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Gb(n,e,t,r,s=!1,i=!1){if(Ee&&s&&n.tagName==="INPUT"){var o=n,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in t||ti(o)}var l=Qf(n),c=l[Kf],h=!l[Yf];let m=Ee&&c;m&&kn(!1);var f=e||{},_=n.tagName==="OPTION";for(var g in e)g in t||(t[g]=null);t.class?t.class=Bb(t.class):t[Ei]&&(t.class=null),t[Ii]&&(t.style??=null);var w=Jf(n);for(const C in t){let E=t[C];if(_&&C==="value"&&E==null){n.value=n.__value="",f[C]=E;continue}if(C==="class"){var x=n.namespaceURI==="http://www.w3.org/1999/xhtml";on(n,x,E,r,e?.[Ei],t[Ei]),f[C]=E,f[Ei]=t[Ei];continue}if(C==="style"){za(n,E,e?.[Ii],t[Ii]),f[C]=E,f[Ii]=t[Ii];continue}var I=f[C];if(!(E===I&&!(E===void 0&&n.hasAttribute(C)))){f[C]=E;var S=C[0]+C[1];if(S!=="$$")if(S==="on"){const T={},L="$$"+C;let $=C.slice(2);var P=Cb($);if(Eb($)&&($=$.slice(0,-7),T.capture=!0),!P&&I){if(E!=null)continue;n.removeEventListener($,f[L],T),f[L]=null}if(E!=null)if(P)n[`__${$}`]=E,vt([$]);else{let F=function(G){f[C].call(this,G)};var z=F;f[L]=Bf($,n,F,T)}else P&&(n[`__${$}`]=void 0)}else if(C==="style")Le(n,C,E);else if(C==="autofocus")Mc(n,!!E);else if(!c&&(C==="__value"||C==="value"&&E!=null))n.value=n.__value=E;else if(C==="selected"&&_)Wb(n,E);else{var D=C;h||(D=Sb(D));var B=D==="defaultValue"||D==="defaultChecked";if(E==null&&!c&&!B)if(l[C]=null,D==="value"||D==="checked"){let T=n;const L=e===void 0;if(D==="value"){let $=T.defaultValue;T.removeAttribute(D),T.defaultValue=$,T.value=T.__value=L?$:null}else{let $=T.defaultChecked;T.removeAttribute(D),T.defaultChecked=$,T.checked=L?$:!1}}else n.removeAttribute(C);else B||w.includes(D)&&(c||typeof E!="string")?(n[D]=E,D in l&&(l[D]=Ht)):typeof E!="function"&&Le(n,D,E)}}}return m&&kn(!0),f}function Su(n,e,t=[],r=[],s=[],i,o=!1,a=!1){gf(s,t,r,l=>{var c=void 0,h={},m=n.nodeName==="SELECT",f=!1;if(rs(()=>{var g=e(...l.map(v)),w=Gb(n,c,g,i,o,a);f&&m&&"value"in g&&no(n,g.value);for(let I of Object.getOwnPropertySymbols(h))g[I]||Mt(h[I]);for(let I of Object.getOwnPropertySymbols(g)){var x=g[I];I.description===Q_&&(!c||x!==c[I])&&(h[I]&&Mt(h[I]),h[I]=un(()=>Fb(n,()=>x))),w[I]=x}c=w}),m){var _=n;_o(()=>{no(_,c.value,!0),Bc(_)})}f=!0})}function Qf(n){return n.__attributes??={[Kf]:n.nodeName.includes("-"),[Yf]:n.namespaceURI===K_}}var Au=new Map;function Jf(n){var e=n.getAttribute("is")||n.nodeName,t=Au.get(e);if(t)return t;Au.set(e,t=[]);for(var r,s=n,i=Element.prototype;i!==s;){r=ef(s);for(var o in r)r[o].set&&t.push(o);s=Sc(s)}return t}function Yr(n,e,t=e){var r=new WeakSet;Tf(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=vl(n)?ml(i):i,t(i),at!==null&&r.add(at),await xb(),i!==(i=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=i??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),(Ee&&n.defaultValue!==n.value||nr(e)==null&&n.value)&&(t(vl(n)?ml(n.value):n.value),at!==null&&r.add(at)),qa(()=>{var s=e();if(n===document.activeElement){var i=Mi??at;if(r.has(i))return}vl(n)&&s===ml(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function vl(n){var e=n.type;return e==="number"||e==="range"}function ml(n){return n===""?null:+n}function Pu(n,e){return n===e||n?.[Zn]===e}function Hc(n={},e,t,r){return _o(()=>{var s,i;return qa(()=>{s=i,i=[],nr(()=>{n!==t(...i)&&(e(n,...i),s&&Pu(t(...s),n)&&e(null,...s))})}),()=>{ns(()=>{i&&Pu(t(...i),n)&&e(null,...i)})}}),n}function dn(n=!1){const e=It,t=e.l.u;if(!t)return;let r=()=>Os(e.s);if(n){let s=0,i={};const o=mo(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==i[c]&&(i[c]=l[c],a=!0);return a&&s++,s});r=()=>v(o)}t.b.length&&pb(()=>{Ru(e,r),Xo(t.b)}),Zs(()=>{const s=nr(()=>t.m.map(E_));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&Zs(()=>{Ru(e,r),Xo(t.a)})}function Ru(n,e){if(n.l.s)for(const t of n.l.s)v(t);e()}function Wc(n,e,t){if(n==null)return e(void 0),t&&t(void 0),In;const r=nr(()=>n.subscribe(e,t));return r.unsubscribe?()=>r.unsubscribe():r}const Ds=[];function Kb(n,e){return{subscribe:Es(n,e).subscribe}}function Es(n,e=In){let t=null;const r=new Set;function s(a){if(df(n,a)&&(n=a,t)){const l=!Ds.length;for(const c of r)c[1](),Ds.push(c,n);if(l){for(let c=0;c<Ds.length;c+=2)Ds[c][0](Ds[c+1]);Ds.length=0}}}function i(a){s(a(n))}function o(a,l=In){const c=[a,l];return r.add(c),r.size===1&&(t=e(s,i)||In),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function Yb(n,e,t){const r=!Array.isArray(n),s=r?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return Kb(t,(o,a)=>{let l=!1;const c=[];let h=0,m=In;const f=()=>{if(h)return;m();const g=e(r?c[0]:c,o,a);i?o(g):m=typeof g=="function"?g:In},_=s.map((g,w)=>Wc(g,x=>{c[w]=x,h&=~(1<<w),l&&f()},()=>{h|=1<<w}));return l=!0,f(),function(){Xo(_),m(),l=!1}})}function Qb(n){let e;return Wc(n,t=>e=t)(),e}let qo=!1,Wl=Symbol();function Xe(n,e,t){const r=t[e]??={store:null,source:Oc(void 0),unsubscribe:In};if(r.store!==n&&!(Wl in t))if(r.unsubscribe(),r.store=n??null,n==null)r.source.v=void 0,r.unsubscribe=In;else{var s=!0;r.unsubscribe=Wc(n,i=>{s?r.source.v=i:y(r.source,i)}),s=!1}return n&&Wl in t?Qb(n):v(r.source)}function yt(){const n={};function e(){go(()=>{for(var t in n)n[t].unsubscribe();Zi(n,Wl,{enumerable:!1,value:!0})})}return[n,e]}function Jb(n){var e=qo;try{return qo=!1,[n(),qo]}finally{qo=e}}const Xb={get(n,e){if(!n.exclude.includes(e))return v(n.version),e in n.special?n.special[e]():n.props[e]},set(n,e,t){if(!(e in n.special)){var r=$e;try{$n(n.parent_effect),n.special[e]=et({get[e](){return n.props[e]}},e,of)}finally{$n(r)}}return n.special[e](t),zl(n.version),!0},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},deleteProperty(n,e){return n.exclude.includes(e)||(n.exclude.push(e),zl(n.version)),!0},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function pt(n,e){return new Proxy({props:n,exclude:e,special:{},version:Kr(0),parent_effect:$e},Xb)}const Zb={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(ki(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let s=n.props[r];ki(s)&&(s=s());const i=vr(s,e);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(ki(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=vr(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(n,e){if(e===Zn||e===Nc)return!1;for(let t of n.props)if(ki(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(ki(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function xt(...n){return new Proxy({props:n},Zb)}function et(n,e,t,r){var s=!hi||(t&B_)!==0,i=(t&V_)!==0,o=(t&H_)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?nr(r):r),a),h;if(i){var m=Zn in n||Nc in n;h=vr(n,e)?.set??(m&&e in n?P=>n[e]=P:void 0)}var f,_=!1;i?[f,_]=Jb(()=>n[e]):f=n[e],f===void 0&&r!==void 0&&(f=c(),h&&(s&&$_(),h(f)));var g;if(s?g=()=>{var P=n[e];return P===void 0?c():(l=!0,P)}:g=()=>{var P=n[e];return P!==void 0&&(a=void 0),P===void 0?a:P},s&&(t&of)===0)return g;if(h){var w=n.$$legacy;return(function(P,D){return arguments.length>0?((!s||!D||w||_)&&h(D?g():P),P):g()})}var x=!1,I=((t&j_)!==0?mo:$a)(()=>(x=!1,g()));i&&v(I);var S=$e;return(function(P,D){if(arguments.length>0){const B=D?v(I):s&&i?Zt(P):P;return y(I,B),x=!0,a!==void 0&&(a=B),P}return ks&&x||(S.f&mr)!==0?I.v:v(I)})}function e1(n){return new t1(n)}class t1{#t;#e;constructor(e){var t=new Map,r=(i,o)=>{var a=Oc(o,!1,!1);return t.set(i,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(i,o){return v(t.get(o)??r(o,Reflect.get(i,o)))},has(i,o){return o===Nc?!0:(v(t.get(o)??r(o,Reflect.get(i,o))),Reflect.has(i,o))},set(i,o,a){return y(t.get(o)??r(o,a),a),Reflect.set(i,o,a)}});this.#e=(e.hydrate?$b:jc)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Qe(),this.#t=s.$$events;for(const i of Object.keys(this.#e))i==="$set"||i==="$destroy"||i==="$on"||Zi(this,i,{get(){return this.#e[i]},set(o){this.#e[i]=o},enumerable:!0});this.#e.$set=i=>{Object.assign(s,i)},this.#e.$destroy=()=>{Ob(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const r=(...s)=>t.call(this,...s);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(s=>s!==r)}}$destroy(){this.#e.$destroy()}}let Xf;typeof HTMLElement=="function"&&(Xf=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(n,e,t){super(),this.$$ctor=n,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(n,e,t){if(this.$$l[n]=this.$$l[n]||[],this.$$l[n].push(e),this.$$c){const r=this.$$c.$on(n,e);this.$$l_u.set(e,r)}super.addEventListener(n,e,t)}removeEventListener(n,e,t){if(super.removeEventListener(n,e,t),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return i=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),k(i,o)}};var n=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},r=n1(this);for(const s of this.$$s)s in r&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),t.default=!0):t[s]=e(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=Ho(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=e1({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=vb(()=>{qa(()=>{this.$$r=!0;for(const s of Jo(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const i=Ho(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const o=this.$$c.$on(s,i);this.$$l_u.set(i,o)}this.$$l={}}}attributeChangedCallback(n,e,t){this.$$r||(n=this.$$g_p(n),this.$$d[n]=Ho(n,t,this.$$p_d,"toProp"),this.$$c?.$set({[n]:this.$$d[n]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(n){return Jo(this.$$p_d).find(e=>this.$$p_d[e].attribute===n||!this.$$p_d[e].attribute&&e.toLowerCase()===n)||n}});function Ho(n,e,t,r){const s=t[n]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!t[n])return e;if(r==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function n1(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function ge(n,e,t,r,s,i){let o=class extends Xf{constructor(){super(n,t,s),this.$$p_d=e}static get observedAttributes(){return Jo(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Jo(e).forEach(a=>{Zi(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=Ho(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var h=vr(c,a)?.get;h?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{Zi(o.prototype,a,{get(){return this.$$c?.[a]}})}),n.element=o,o}function zt(n){It===null&&rf(),hi&&It.l!==null?r1(It).m.push(n):Zs(()=>{const e=nr(n);if(typeof e=="function")return e})}function Zf(n){It===null&&rf(),zt(()=>()=>nr(n))}function r1(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const s1="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(s1);const i1=()=>{};var Nu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(n,e){if(!n)throw pi(e)},pi=function(n){return new Error("Firebase Database ("+ep.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},o1=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=i>>2,m=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),r.push(t[h],t[m],t[f],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(tp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):o1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||m==null)throw new a1;const f=i<<2|a>>4;if(r.push(f),c!==64){const _=a<<4&240|c>>2;if(r.push(_),m!==64){const g=c<<6&192|m;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class a1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const np=function(n){const e=tp(n);return Gc.encodeByteArray(e,!0)},sa=function(n){return np(n).replace(/\./g,"")},ia=function(n){try{return Gc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(n){return rp(void 0,n)}function rp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!c1(t)||(n[t]=rp(n[t],e[t]));return n}function c1(n){return n!=="__proto__"}/**
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
 */function d1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const u1=()=>d1().__FIREBASE_DEFAULTS__,h1=()=>{if(typeof process>"u"||typeof Nu>"u")return;const n=Nu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},f1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ia(n[1]);return e&&JSON.parse(e)},Kc=()=>{try{return i1()||u1()||h1()||f1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sp=n=>Kc()?.emulatorHosts?.[n],ip=n=>{const e=sp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},op=()=>Kc()?.config,ap=n=>Kc()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function lp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[sa(JSON.stringify(t)),sa(JSON.stringify(o)),""].join(".")}const ji={};function p1(){const n={prod:[],emulator:[]};for(const e of Object.keys(ji))ji[e]?n.emulator.push(e):n.prod.push(e);return n}function v1(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Lu=!1;function Qc(n,e){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||ji[n]===e||ji[n]||Lu)return;ji[n]=e;function t(f){return`__firebase__banner__${f}`}const r="__firebase__banner",i=p1().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,_){f.setAttribute("width","24"),f.setAttribute("id",_),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Lu=!0,o()},f}function h(f,_){f.setAttribute("id",_),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function m(){const f=v1(r),_=t("text"),g=document.getElementById(_)||document.createElement("span"),w=t("learnmore"),x=document.getElementById(w)||document.createElement("a"),I=t("preprendIcon"),S=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const P=f.element;a(P),h(x,w);const D=c();l(S,I),P.append(S,g,x,D),document.body.appendChild(P)}i?(g.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cn())}function m1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function g1(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _1(){const n=cn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function b1(){return ep.NODE_ADMIN===!0}function w1(){try{return typeof indexedDB=="object"}catch{return!1}}function y1(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="FirebaseError";class Ar extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=x1,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?k1(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ar(s,a,r)}}function k1(n,e){return n.replace(E1,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const E1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n){return JSON.parse(n)}function qt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=ro(ia(i[0])||""),t=ro(ia(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},I1=function(n){const e=dp(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},C1=function(n){const e=dp(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ni(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Gl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function oa(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function vs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Du(i)&&Du(o)){if(!vs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Du(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Di(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)r[m]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let m=0;m<16;m++)r[m]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let m=16;m<80;m++){const f=r[m-3]^r[m-8]^r[m-14]^r[m-16];r[m]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let m=0;m<80;m++){m<40?m<20?(c=a^i&(o^a),h=1518500249):(c=i^o^a,h=1859775393):m<60?(c=i&o|a&(i|o),h=2400959708):(c=i^o^a,h=3395469782);const f=(s<<5|s>>>27)+c+l+h+r[m]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function S1(n,e){const t=new A1(n,e);return t.subscribe.bind(t)}class A1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");P1(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=gl),s.error===void 0&&(s.error=gl),s.complete===void 0&&(s.complete=gl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gl(){}function Ua(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,Q(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Fa=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function kt(n){return n&&n._delegate?n._delegate:n}class Qr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new wo;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(D1(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:L1(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L1(n){return n===os?void 0:n}function D1(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new N1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(lt||(lt={}));const O1={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},q1=lt.INFO,M1={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},z1=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=M1[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xc{constructor(e){this.name=e,this._logLevel=q1,this._logHandler=z1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in lt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?O1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...e),this._logHandler(this,lt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...e),this._logHandler(this,lt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...e),this._logHandler(this,lt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...e),this._logHandler(this,lt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...e),this._logHandler(this,lt.ERROR,...e)}}const U1=(n,e)=>e.some(t=>n instanceof t);let $u,Ou;function F1(){return $u||($u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j1(){return Ou||(Ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const up=new WeakMap,Kl=new WeakMap,hp=new WeakMap,_l=new WeakMap,Zc=new WeakMap;function B1(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Fr(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&up.set(t,n)}).catch(()=>{}),Zc.set(e,n),e}function V1(n){if(Kl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Kl.set(n,e)}let Yl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Kl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function H1(n){Yl=n(Yl)}function W1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bl(this),e,...t);return hp.set(r,e.sort?e.sort():[e]),Fr(r)}:j1().includes(n)?function(...e){return n.apply(bl(this),e),Fr(up.get(this))}:function(...e){return Fr(n.apply(bl(this),e))}}function G1(n){return typeof n=="function"?W1(n):(n instanceof IDBTransaction&&V1(n),U1(n,F1())?new Proxy(n,Yl):n)}function Fr(n){if(n instanceof IDBRequest)return B1(n);if(_l.has(n))return _l.get(n);const e=G1(n);return e!==n&&(_l.set(n,e),Zc.set(e,n)),e}const bl=n=>Zc.get(n);function K1(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fr(o.result),l.oldVersion,l.newVersion,Fr(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Y1=["get","getKey","getAll","getAllKeys","count"],Q1=["put","add","delete","clear"],wl=new Map;function qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wl.get(e))return wl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Q1.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Y1.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return wl.set(e,i),i}H1(n=>({...n,get:(e,t,r)=>qu(e,t)||n.get(e,t,r),has:(e,t)=>!!qu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(X1(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function X1(n){return n.getComponent()?.type==="VERSION"}const Ql="@firebase/app",Mu="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new Xc("@firebase/app"),Z1="@firebase/app-compat",e0="@firebase/analytics-compat",t0="@firebase/analytics",n0="@firebase/app-check-compat",r0="@firebase/app-check",s0="@firebase/auth",i0="@firebase/auth-compat",o0="@firebase/database",a0="@firebase/data-connect",l0="@firebase/database-compat",c0="@firebase/functions",d0="@firebase/functions-compat",u0="@firebase/installations",h0="@firebase/installations-compat",f0="@firebase/messaging",p0="@firebase/messaging-compat",v0="@firebase/performance",m0="@firebase/performance-compat",g0="@firebase/remote-config",_0="@firebase/remote-config-compat",b0="@firebase/storage",w0="@firebase/storage-compat",y0="@firebase/firestore",x0="@firebase/ai",k0="@firebase/firestore-compat",E0="firebase",I0="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="[DEFAULT]",C0={[Ql]:"fire-core",[Z1]:"fire-core-compat",[t0]:"fire-analytics",[e0]:"fire-analytics-compat",[r0]:"fire-app-check",[n0]:"fire-app-check-compat",[s0]:"fire-auth",[i0]:"fire-auth-compat",[o0]:"fire-rtdb",[a0]:"fire-data-connect",[l0]:"fire-rtdb-compat",[c0]:"fire-fn",[d0]:"fire-fn-compat",[u0]:"fire-iid",[h0]:"fire-iid-compat",[f0]:"fire-fcm",[p0]:"fire-fcm-compat",[v0]:"fire-perf",[m0]:"fire-perf-compat",[g0]:"fire-rc",[_0]:"fire-rc-compat",[b0]:"fire-gcs",[w0]:"fire-gcs-compat",[y0]:"fire-fst",[k0]:"fire-fst-compat",[x0]:"fire-vertex","fire-js":"fire-js",[E0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map,T0=new Map,Xl=new Map;function zu(n,e){try{n.container.addComponent(e)}catch(t){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ms(n){const e=n.name;if(Xl.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;Xl.set(e,n);for(const t of aa.values())zu(t,n);for(const t of T0.values())zu(t,n);return!0}function ja(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function hn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new yo("app","Firebase",S0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=I0;function fp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Jl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw jr.create("bad-app-name",{appName:String(s)});if(t||(t=op()),!t)throw jr.create("no-options");const i=aa.get(s);if(i){if(vs(t,i.options)&&vs(r,i.config))return i;throw jr.create("duplicate-app",{appName:s})}const o=new $1(s);for(const l of Xl.values())o.addComponent(l);const a=new A0(t,r,o);return aa.set(s,a),a}function ed(n=Jl){const e=aa.get(n);if(!e&&n===Jl&&op())return fp();if(!e)throw jr.create("no-app",{appName:n});return e}function er(n,e,t){let r=C0[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(o.join(" "));return}ms(new Qr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const P0="firebase-heartbeat-database",R0=1,so="firebase-heartbeat-store";let yl=null;function pp(){return yl||(yl=K1(P0,R0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(so)}catch(t){console.warn(t)}}}}).catch(n=>{throw jr.create("idb-open",{originalErrorMessage:n.message})})),yl}async function N0(n){try{const t=(await pp()).transaction(so),r=await t.objectStore(so).get(vp(n));return await t.done,r}catch(e){if(e instanceof Ar)yr.warn(e.message);else{const t=jr.create("idb-get",{originalErrorMessage:e?.message});yr.warn(t.message)}}}async function Uu(n,e){try{const r=(await pp()).transaction(so,"readwrite");await r.objectStore(so).put(e,vp(n)),await r.done}catch(t){if(t instanceof Ar)yr.warn(t.message);else{const r=jr.create("idb-set",{originalErrorMessage:t?.message});yr.warn(r.message)}}}function vp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const L0=1024,D0=30;class $0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new q0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>D0){const s=M0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){yr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fu(),{heartbeatsToSend:t,unsentEntries:r}=O0(this._heartbeatsCache.heartbeats),s=sa(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return yr.warn(e),""}}}function Fu(){return new Date().toISOString().substring(0,10)}function O0(n,e=L0){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ju(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ju(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class q0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w1()?y1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await N0(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ju(n){return sa(JSON.stringify({version:2,heartbeats:n})).length}function M0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(n){ms(new Qr("platform-logger",e=>new J1(e),"PRIVATE")),ms(new Qr("heartbeat",e=>new $0(e),"PRIVATE")),er(Ql,Mu,n),er(Ql,Mu,"esm2020"),er("fire-js","")}z0("");var U0="firebase",F0="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(U0,F0,"app");function mp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const j0=mp,gp=new yo("auth","Firebase",mp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Xc("@firebase/auth");function B0(n,...e){la.logLevel<=lt.WARN&&la.warn(`Auth (${Cs}): ${n}`,...e)}function Wo(n,...e){la.logLevel<=lt.ERROR&&la.error(`Auth (${Cs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n,...e){throw td(n,...e)}function Tn(n,...e){return td(n,...e)}function _p(n,e,t){const r={...j0(),[e]:t};return new yo("auth","Firebase",r).create(e,{appName:n.name})}function tr(n){return _p(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function td(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return gp.create(n,...e)}function ce(n,e,...t){if(!n)throw td(e,...t)}function hr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wo(e),new Error(e)}function xr(n,e){n||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){return typeof self<"u"&&self.location?.href||""}function bp(){return Bu()==="http:"||Bu()==="https:"}function Bu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bp()||g1()||"connection"in navigator)?navigator.onLine:!0}function H0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t){this.shortDelay=e,this.longDelay=t,xr(t>e,"Short delay should be less than long delay!"),this.isMobile=Jc()||cp()}get(){return V0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n,e){xr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],K0=new xo(3e4,6e4);function mn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Sn(n,e,t,r,s={}){return yp(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Is({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:l,...i};return m1()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&ss(n.emulatorConfig.host)&&(c.credentials="include"),wp.fetch()(await xp(n,n.config.apiHost,t,a),c)})}async function yp(n,e,t){n._canInitEmulator=!1;const r={...W0,...e};try{const s=new Q0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $i(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $i(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw $i(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _p(n,h,c);Kn(n,h)}}catch(s){if(s instanceof Ar)throw s;Kn(n,"network-request-failed",{message:String(s)})}}async function is(n,e,t,r,s={}){const i=await Sn(n,e,t,r,s);return"mfaPendingCredential"in i&&Kn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function xp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?nd(n.config,s):`${n.config.apiScheme}://${s}`;return G0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Y0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Q0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),K0.get())})}}function $i(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Tn(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){return n!==void 0&&n.getResponse!==void 0}function Hu(n){return n!==void 0&&n.enterprise!==void 0}class kp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Y0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(n){return(await Sn(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ep(n,e){return Sn(n,"GET","/v2/recaptchaConfig",mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(n,e){return Sn(n,"POST","/v1/accounts:delete",e)}async function ca(n,e){return Sn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Z0(n,e=!1){const t=kt(n),r=await t.getIdToken(e),s=rd(r);ce(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Bi(xl(s.auth_time)),issuedAtTime:Bi(xl(s.iat)),expirationTime:Bi(xl(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function xl(n){return Number(n)*1e3}function rd(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ia(t);return s?JSON.parse(s):(Wo("Failed to decode base64 JWT payload"),null)}catch(s){return Wo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Wu(n){const e=rd(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ar&&ew(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ew({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(n){const e=n.auth,t=await n.getIdToken(),r=await ri(n,ca(e,{idToken:t}));ce(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?Ip(s.providerUserInfo):[],o=rw(n.providerData,i),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!o?.length,c=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ec(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function nw(n){const e=kt(n);await da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ip(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(n,e){const t=await yp(n,{},async()=>{const r=Is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await xp(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&ss(n.emulatorConfig.host)&&(l.credentials="include"),wp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iw(n,e){return Sn(n,"POST","/v2/accounts:revokeToken",mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=Wu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await sw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new js;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vn{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ec(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ri(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Z0(this,e)}reload(){return nw(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await da(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await ri(this,X0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:m,emailVerified:f,isAnonymous:_,providerData:g,stsTokenManager:w}=t;ce(m&&w,e,"internal-error");const x=js.fromJSON(this.name,w);ce(typeof m=="string",e,"internal-error"),Rr(r,e.name),Rr(s,e.name),ce(typeof f=="boolean",e,"internal-error"),ce(typeof _=="boolean",e,"internal-error"),Rr(i,e.name),Rr(o,e.name),Rr(a,e.name),Rr(l,e.name),Rr(c,e.name),Rr(h,e.name);const I=new Vn({uid:m,auth:e,email:s,emailVerified:f,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:x,createdAt:c,lastLoginAt:h});return g&&Array.isArray(g)&&(I.providerData=g.map(S=>({...S}))),l&&(I._redirectEventId=l),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new js;s.updateFromServerResponse(t);const i=new Vn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await da(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ip(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new js;a.updateFromIdToken(r);const l=new Vn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ec(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map;function fr(n){xr(n instanceof Function,"Expected a class definition");let e=Gu.get(n);return e?(xr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cp.type="NONE";const Ku=Cp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n,e,t){return`firebase:${n}:${e}:${t}`}class Bs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Go(this.userKey,s.apiKey,i),this.fullPersistenceKey=Go("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ca(this.auth,{idToken:e}).catch(()=>{});return t?Vn._fromGetAccountInfoResponse(this.auth,t,e):null}return Vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Bs(fr(Ku),e,r);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||fr(Ku);const o=Go(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){let m;if(typeof h=="string"){const f=await ca(e,{idToken:h}).catch(()=>{});if(!f)break;m=await Vn._fromGetAccountInfoResponse(e,f,h)}else m=Vn._fromJSON(e,h);c!==i&&(a=m),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Bs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Bs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Np(e))return"Blackberry";if(Lp(e))return"Webos";if(Sp(e))return"Safari";if((e.includes("chrome/")||Ap(e))&&!e.includes("edge/"))return"Chrome";if(Rp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Tp(n=cn()){return/firefox\//i.test(n)}function Sp(n=cn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ap(n=cn()){return/crios\//i.test(n)}function Pp(n=cn()){return/iemobile/i.test(n)}function Rp(n=cn()){return/android/i.test(n)}function Np(n=cn()){return/blackberry/i.test(n)}function Lp(n=cn()){return/webos/i.test(n)}function sd(n=cn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ow(n=cn()){return sd(n)&&!!window.navigator?.standalone}function aw(){return _1()&&document.documentMode===10}function Dp(n=cn()){return sd(n)||Rp(n)||Lp(n)||Np(n)||/windows phone/i.test(n)||Pp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n,e=[]){let t;switch(n){case"Browser":t=Yu(cn());break;case"Worker":t=`${Yu(cn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cs}/${r}`}/**
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
 */class lw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function cw(n,e={}){return Sn(n,"GET","/v2/passwordPolicy",mn(n,e))}/**
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
 */const dw=6;class uw{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??dw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qu(this),this.idTokenSubscription=new Qu(this),this.beforeStateQueue=new lw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ca(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(hn(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await da(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(tr(this));const t=e?kt(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cw(this),t=new uw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await iw(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fr(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$p(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&B0(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ir(n){return kt(n)}class Qu{constructor(e){this.auth=e,this.observer=null,this.addObserver=S1(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fw(n){ko=n}function id(n){return ko.loadJS(n)}function pw(){return ko.recaptchaV2Script}function vw(){return ko.recaptchaEnterpriseScript}function mw(){return ko.gapiScript}function Op(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=500,_w=6e4,Mo=1e12;class bw{constructor(e){this.auth=e,this.counter=Mo,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new xw(e,this.auth.name,t||{})),this.counter++,r}reset(e){const t=e||Mo;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Mo;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||Mo;return this._widgets.get(t)?.execute(),""}}class ww{constructor(){this.enterprise=new yw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class xw{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;ce(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=kw(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},_w)},gw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function kw(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const Ew="recaptcha-enterprise",Vi="NO_RECAPTCHA";class qp{constructor(e){this.type=Ew,this.auth=ir(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ep(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new kp(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Hu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Vi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ww().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&Hu(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=vw();l.length!==0&&(l+=a),id(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ci(n,e,t,r=!1,s=!1){const i=new qp(n);let o;if(s)o=Vi;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Vs(n,e,t,r,s){if(s==="EMAIL_PASSWORD_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ci(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ci(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)});else if(s==="PHONE_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Ci(n,e,t);return r(n,i).catch(async o=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const a=await Ci(n,e,t,!1,!0);return r(n,a)}return Promise.reject(o)})}else{const i=await Ci(n,e,t,!1,!0);return r(n,i)}else return Promise.reject(s+" provider is not supported.")}async function Iw(n){const e=ir(n),t=await Ep(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new kp(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new qp(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n,e){const t=ja(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(vs(i,e??{}))return s;Kn(s,"already-initialized")}return t.initialize({options:e})}function Tw(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(fr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Sw(n,e,t){const r=ir(n);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Mp(e),{host:o,port:a}=Aw(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(vs(c,r.config.emulator)&&vs(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ss(o)?(Yc(`${i}//${o}${l}`),Qc("Auth",!0)):Pw()}function Mp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Aw(n){const e=Mp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ju(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ju(o)}}}function Ju(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Pw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,t){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function Rw(n,e){return Sn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(n,e){return is(n,"POST","/v1/accounts:signInWithPassword",mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,e))}async function Dw(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends Ba{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new io(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new io(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vs(e,t,"signInWithPassword",Nw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Lw(e,{email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vs(e,r,"signUpPassword",Rw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Dw(e,{idToken:t,email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(n,e){return is(n,"POST","/v1/accounts:signInWithIdp",mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="http://localhost";class gs extends Ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new gs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Hs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Hs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hs(e,t)}buildRequest(){const e={requestUri:$w,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Is(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(n,e){return Sn(n,"POST","/v1/accounts:sendVerificationCode",mn(n,e))}async function Ow(n,e){return is(n,"POST","/v1/accounts:signInWithPhoneNumber",mn(n,e))}async function qw(n,e){const t=await is(n,"POST","/v1/accounts:signInWithPhoneNumber",mn(n,e));if(t.temporaryProof)throw $i(n,"account-exists-with-different-credential",t);return t}const Mw={USER_NOT_FOUND:"user-not-found"};async function zw(n,e){const t={...e,operation:"REAUTH"};return is(n,"POST","/v1/accounts:signInWithPhoneNumber",mn(n,t),Mw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Ba{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Hi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Hi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ow(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qw(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return zw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new Hi({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fw(n){const e=Li(Di(n)).link,t=e?Li(Di(e)).deep_link_id:null,r=Li(Di(n)).deep_link_id;return(r?Li(Di(r)).link:null)||r||t||e||n}class od{constructor(e){const t=Li(Di(e)),r=t.apiKey??null,s=t.oobCode??null,i=Uw(t.mode??null);ce(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Fw(e);try{return new od(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,t){return io._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=od.parseLink(t);return ce(r,"argument-error"),io._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends zp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Eo{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Lr.credential(t,r)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Eo{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.GITHUB_SIGN_IN_METHOD="github.com";Dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Eo{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return $r.credential(t,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(n,e){return is(n,"POST","/v1/accounts:signUp",mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Vn._fromIdTokenResponse(e,r,s),o=Zu(r);return new _s({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Zu(r);return new _s({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Zu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends Ar{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ua.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ua(e,t,r,s)}}function Up(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ua._fromErrorAndOperation(n,i,e,r):i})}async function Bw(n,e,t=!1){const r=await ri(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _s._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(n,e,t=!1){const{auth:r}=n;if(hn(r.app))return Promise.reject(tr(r));const s="reauthenticate";try{const i=await ri(n,Up(r,s,e,n),t);ce(i.idToken,r,"internal-error");const o=rd(i.idToken);ce(o,r,"internal-error");const{sub:a}=o;return ce(n.uid===a,r,"user-mismatch"),_s._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Kn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(n,e,t=!1){if(hn(n.app))return Promise.reject(tr(n));const r="signIn",s=await Up(n,r,e),i=await _s._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function jp(n,e){return Fp(ir(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(n){const e=ir(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hw(n,e,t){if(hn(n.app))return Promise.reject(tr(n));const r=ir(n),o=await Vs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jw,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bp(n),l}),a=await _s._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Ww(n,e,t){return hn(n.app)?Promise.reject(tr(n)):jp(kt(n),vi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bp(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(n,e){return Sn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=kt(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ri(r,Gw(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Kw(n,e,t,r){return kt(n).onIdTokenChanged(e,t,r)}function Yw(n,e,t){return kt(n).beforeAuthStateChanged(e,t)}function Hp(n,e,t,r){return kt(n).onAuthStateChanged(e,t,r)}function Qw(n){return kt(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n,e){return Sn(n,"POST","/v2/accounts/mfaEnrollment:start",mn(n,e))}const ha="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=1e3,Xw=10;class Gp extends Wp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);aw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gp.type="LOCAL";const Zw=Gp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp extends Wp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kp.type="SESSION";const Yp=Kp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,i)),l=await ey(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=ad("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const f=m;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function ny(n){Lt().location.href=n}/**
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
 */function ld(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function ry(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sy(){return navigator?.serviceWorker?.controller||null}function iy(){return ld()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="firebaseLocalStorageDb",oy=1,fa="firebaseLocalStorage",Jp="fbase_key";class Io{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ha(n,e){return n.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function ay(){const n=indexedDB.deleteDatabase(Qp);return new Io(n).toPromise()}function tc(){const n=indexedDB.open(Qp,oy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(fa,{keyPath:Jp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(fa)?e(r):(r.close(),await ay(),e(await tc()))})})}async function th(n,e,t){const r=Ha(n,!0).put({[Jp]:e,value:t});return new Io(r).toPromise()}async function ly(n,e){const t=Ha(n,!1).get(e),r=await new Io(t).toPromise();return r===void 0?null:r.value}function nh(n,e){const t=Ha(n,!0).delete(e);return new Io(t).toPromise()}const cy=800,dy=3;class Xp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ld()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(iy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ry(),!this.activeServiceWorker)return;this.sender=new ty(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tc();return await th(e,ha,"1"),await nh(e,ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>th(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ly(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ha(s,!1).getAll();return new Io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xp.type="LOCAL";const uy=Xp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,e){return Sn(n,"POST","/v2/accounts/mfaSignIn:start",mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=Op("rcb"),hy=new xo(3e4,6e4);class fy{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Lt().grecaptcha?.render}load(e,t=""){return ce(py(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Vu(Lt().grecaptcha)?Promise.resolve(Lt().grecaptcha):new Promise((r,s)=>{const i=Lt().setTimeout(()=>{s(Tn(e,"network-request-failed"))},hy.get());Lt()[kl]=()=>{Lt().clearTimeout(i),delete Lt()[kl];const a=Lt().grecaptcha;if(!a||!Vu(a)){s(Tn(e,"internal-error"));return}const l=a.render;a.render=(c,h)=>{const m=l(c,h);return this.counter++,m},this.hostLanguage=t,r(a)};const o=`${pw()}?${Is({onload:kl,render:"explicit",hl:t})}`;id(o).catch(()=>{clearTimeout(i),s(Tn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Lt().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function py(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class vy{async load(e){return new bw(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="recaptcha",my={theme:"light",type:"image"};class gy{constructor(e,t,r={...my}){this.parameters=r,this.type=Wi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ir(e),this.isInvisible=this.parameters.size==="invisible",ce(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;ce(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new vy:new fy,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ce(!this.parameters.sitekey,this.auth,"argument-error"),ce(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ce(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Lt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){ce(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ce(bp()&&!ld(),this.auth,"internal-error"),await _y(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await J0(this.auth);ce(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ce(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function _y(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Hi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function wy(n,e,t){if(hn(n.app))return Promise.reject(tr(n));const r=ir(n),s=await yy(r,e,kt(t));return new by(s,i=>jp(r,i))}async function yy(n,e,t){if(!n._getRecaptchaConfig())try{await Iw(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){ce(s.type==="enroll",n,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Vs(n,i,"mfaSmsEnrollment",async(c,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===Vi){ce(t?.type===Wi,c,"argument-error");const m=await El(c,h,t);return eh(c,m)}return eh(c,h)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{ce(s.type==="signin",n,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;ce(i,n,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Vs(n,o,"mfaSmsSignIn",async(h,m)=>{if(m.phoneSignInInfo.captchaResponse===Vi){ce(t?.type===Wi,h,"argument-error");const f=await El(h,m,t);return rh(h,f)}return rh(h,m)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Vs(n,s,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===Vi){ce(t?.type===Wi,l,"argument-error");const h=await El(l,c,t);return Xu(l,h)}return Xu(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function El(n,e,t){ce(t.type===Wi,n,"argument-error");const r=await t.verify();ce(typeof r=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
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
 */function xy(n,e){return e?fr(e):(ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends Ba{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ky(n){return Fp(n.auth,new cd(n),n.bypassAuthState)}function Ey(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),Vw(t,new cd(n),n.bypassAuthState)}async function Iy(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),Bw(t,new cd(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ky;case"linkViaPopup":case"linkViaRedirect":return Iy;case"reauthViaPopup":case"reauthViaRedirect":return Ey;default:Kn(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new xo(2e3,1e4);class Ms extends Zp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cy.get())};e()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="pendingRedirect",Ko=new Map;class Sy extends Zp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ko.get(this.auth._key());if(!e){try{const r=await Ay(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ko.set(this.auth._key(),e)}return this.bypassAuthState||Ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ay(n,e){const t=Ny(e),r=Ry(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Py(n,e){Ko.set(n._key(),e)}function Ry(n){return fr(n._redirectPersistence)}function Ny(n){return Go(Ty,n.config.apiKey,n.name)}async function Ly(n,e,t=!1){if(hn(n.app))return Promise.reject(tr(n));const r=ir(n),s=xy(r,e),o=await new Sy(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=600*1e3;class $y{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Oy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!ev(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Tn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dy&&this.cachedEventUids.clear(),this.cachedEventUids.has(sh(e))}saveEventToCache(e){this.cachedEventUids.add(sh(e)),this.lastProcessedEventTime=Date.now()}}function sh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ev({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Oy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ev(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(n,e={}){return Sn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zy=/^https?/;async function Uy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qy(n);for(const t of e)try{if(Fy(t))return}catch{}Kn(n,"unauthorized-domain")}function Fy(n){const e=Zl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!zy.test(t))return!1;if(My.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jy=new xo(3e4,6e4);function ih(){const n=Lt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function By(n){return new Promise((e,t)=>{function r(){ih(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ih(),t(Tn(n,"network-request-failed"))},timeout:jy.get()})}if(Lt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Lt().gapi?.load)r();else{const s=Op("iframefcb");return Lt()[s]=()=>{gapi.load?r():t(Tn(n,"network-request-failed"))},id(`${mw()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Yo=null,e})}let Yo=null;function Vy(n){return Yo=Yo||By(n),Yo}/**
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
 */const Hy=new xo(5e3,15e3),Wy="__/auth/iframe",Gy="emulator/auth/iframe",Ky={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qy(n){const e=n.config;ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?nd(e,Gy):`https://${n.config.authDomain}/${Wy}`,r={apiKey:e.apiKey,appName:n.name,v:Cs},s=Yy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Is(r).slice(1)}`}async function Jy(n){const e=await Vy(n),t=Lt().gapi;return ce(t,n,"internal-error"),e.open({where:document.body,url:Qy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ky,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(n,"network-request-failed"),a=Lt().setTimeout(()=>{i(o)},Hy.get());function l(){Lt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Xy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zy=500,e2=600,t2="_blank",n2="http://localhost";class oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r2(n,e,t,r=Zy,s=e2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Xy,width:r.toString(),height:s.toString(),top:i,left:o},c=cn().toLowerCase();t&&(a=Ap(c)?t2:t),Tp(c)&&(e=e||n2,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[_,g])=>`${f}${_}=${g},`,"");if(ow(c)&&a!=="_self")return s2(e||"",a),new oh(null);const m=window.open(e||"",a,h);ce(m,n,"popup-blocked");try{m.focus()}catch{}return new oh(m)}function s2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const i2="__/auth/handler",o2="emulator/auth/handler",a2=encodeURIComponent("fac");async function ah(n,e,t,r,s,i){ce(n.config.authDomain,n,"auth-domain-config-required"),ce(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Cs,eventId:s};if(e instanceof zp){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Gl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Eo){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${a2}=${encodeURIComponent(l)}`:"";return`${l2(n)}?${Is(a).slice(1)}${c}`}function l2({config:n}){return n.emulator?nd(n,o2):`https://${n.authDomain}/${i2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="webStorageSupport";class c2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yp,this._completeRedirectFn=Ly,this._overrideRedirectResult=Py}async _openPopup(e,t,r,s){xr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await ah(e,t,r,Zl(),s);return r2(e,i,ad())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ah(e,t,r,Zl(),s);return ny(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(xr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Jy(e),r=new $y(e);return t.register("authEvent",s=>(ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Il,{type:Il},s=>{const i=s?.[0]?.[Il];i!==void 0&&t(!!i),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Uy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Dp()||Sp()||sd()}}const d2=c2;var lh="@firebase/auth",ch="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function f2(n){ms(new Qr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$p(n)},c=new hw(r,s,i,l);return Tw(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ms(new Qr("auth-internal",e=>{const t=ir(e.getProvider("auth").getImmediate());return(r=>new u2(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(lh,ch,h2(n)),er(lh,ch,"esm2020")}/**
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
 */const p2=300,v2=ap("authIdTokenMaxAge")||p2;let dh=null;const m2=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>v2)return;const s=t?.token;dh!==s&&(dh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function g2(n=ed()){const e=ja(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Cw(n,{popupRedirectResolver:d2,persistence:[uy,Zw,Yp]}),r=ap("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=m2(i.toString());Yw(t,o,()=>o(t.currentUser)),Kw(t,a=>o(a))}}const s=sp("auth");return s&&Sw(t,`http://${s}`),t}function _2(){return document.getElementsByTagName("head")?.[0]??document}fw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Tn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",_2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});f2("Browser");var uh={};const hh="@firebase/database",fh="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tv="";function b2(n){tv=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ro(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return sr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new w2(e)}}catch{}return new y2},ds=nv("localStorage"),x2=nv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Xc("@firebase/database"),k2=(function(){let n=1;return function(){return n++}})(),rv=function(n){const e=R1(n),t=new T1;t.update(e);const r=t.digest();return Gc.encodeByteArray(r)},Co=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Co.apply(null,r):typeof r=="object"?e+=qt(r):e+=r,e+=" "}return e};let Gi=null,ph=!0;const E2=function(n,e){Q(!0,"Can't turn on custom loggers persistently."),Ws.logLevel=lt.VERBOSE,Gi=Ws.log.bind(Ws)},Wt=function(...n){if(ph===!0&&(ph=!1,Gi===null&&x2.get("logging_enabled")===!0&&E2()),Gi){const e=Co.apply(null,n);Gi(e)}},To=function(n){return function(...e){Wt(n,...e)}},nc=function(...n){const e="FIREBASE INTERNAL ERROR: "+Co(...n);Ws.error(e)},kr=function(...n){const e=`FIREBASE FATAL ERROR: ${Co(...n)}`;throw Ws.error(e),new Error(e)},ln=function(...n){const e="FIREBASE WARNING: "+Co(...n);Ws.warn(e)},I2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ln("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},C2=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Jr="[MIN_NAME]",Er="[MAX_NAME]",Ts=function(n,e){if(n===e)return 0;if(n===Jr||e===Er)return-1;if(e===Jr||n===Er)return 1;{const t=vh(n),r=vh(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},T2=function(n,e){return n===e?0:n<e?-1:1},Ti=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+qt(e))},ud=function(n){if(typeof n!="object"||n===null)return qt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=qt(e[r]),t+=":",t+=ud(n[e[r]]);return t+="}",t},sv=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function Yt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const iv=function(n){Q(!dd(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,l;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const h=c.join("");let m="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),m=m+f}return m.toLowerCase()},S2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},A2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function P2(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const R2=new RegExp("^-?(0*)\\d{1,10}$"),N2=-2147483648,L2=2147483647,vh=function(n){if(R2.test(n)){const e=Number(n);if(e>=N2&&e<=L2)return e}return null},mi=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ln("Exception was thrown by user callback.",t),e},Math.floor(0))}},D2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ki=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $2{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,hn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){ln(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ln(e)}}class Qo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="5",ov="v",av="s",lv="r",cv="f",dv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uv="ls",hv="p",rc="ac",fv="websocket",pv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t,r,s,i=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ds.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ds.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function q2(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function mv(n,e,t){Q(typeof e=="string","typeof type must == string"),Q(typeof t=="object","typeof params must == object");let r;if(e===fv)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===pv)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);q2(n)&&(t.ns=n.namespace);const s=[];return Yt(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.counters_={}}incrementCounter(e,t=1){sr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return l1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={},Tl={};function fd(n){const e=n.toString();return Cl[e]||(Cl[e]=new M2),Cl[e]}function z2(n,e){const t=n.toString();return Tl[t]||(Tl[t]=e()),Tl[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&mi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="start",F2="close",j2="pLPCommand",B2="pRTLPCB",gv="id",_v="pw",bv="ser",V2="cb",H2="seg",W2="ts",G2="d",K2="dframe",wv=1870,yv=30,Y2=wv-yv,Q2=25e3,J2=3e4;class zs{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=To(e),this.stats_=fd(t),this.urlFn=l=>(this.appCheckToken&&(l[rc]=this.appCheckToken),mv(t,pv,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new U2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(J2)),C2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pd((...i)=>{const[o,a,l,c,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mh)this.id=a,this.password=l;else if(o===F2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[mh]="t",r[bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[V2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ov]=hd,this.transportSessionId&&(r[av]=this.transportSessionId),this.lastSessionId&&(r[uv]=this.lastSessionId),this.applicationId&&(r[hv]=this.applicationId),this.appCheckToken&&(r[rc]=this.appCheckToken),typeof location<"u"&&location.hostname&&dv.test(location.hostname)&&(r[lv]=cv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zs.forceAllow_=!0}static forceDisallow(){zs.forceDisallow_=!0}static isAvailable(){return zs.forceAllow_?!0:!zs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!S2()&&!A2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=qt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=np(t),s=sv(r,Y2);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[K2]="t",r[gv]=e,r[_v]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=qt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class pd{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=k2(),window[j2+this.uniqueCallbackIdentifier]=e,window[B2+this.uniqueCallbackIdentifier]=t,this.myIFrame=pd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Wt("frame writing exception"),a.stack&&Wt(a.stack),Wt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gv]=this.myID,e[_v]=this.myPW,e[bv]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yv+r.length<=wv;){const o=this.pendingSegs.shift();r=r+"&"+H2+s+"="+o.seg+"&"+W2+s+"="+o.ts+"&"+G2+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(Q2)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=16384,Z2=45e3;let pa=null;typeof MozWebSocket<"u"?pa=MozWebSocket:typeof WebSocket<"u"&&(pa=WebSocket);class jn{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=To(this.connId),this.stats_=fd(t),this.connURL=jn.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[ov]=hd,typeof location<"u"&&location.hostname&&dv.test(location.hostname)&&(o[lv]=cv),t&&(o[av]=t),r&&(o[uv]=r),s&&(o[rc]=s),i&&(o[hv]=i),mv(e,fv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ds.set("previous_websocket_failure",!0);try{let r;b1(),this.mySock=new pa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){jn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pa!==null&&!jn.forceDisallow_}static previouslyFailed(){return ds.isInMemoryStorage||ds.get("previous_websocket_failure")===!0}markConnectionHealthy(){ds.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=ro(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=qt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=sv(t,X2);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Z2))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jn.responsesRequiredToBeHealthy=2;jn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{static get ALL_TRANSPORTS(){return[zs,jn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=jn&&jn.isAvailable();let r=t&&!jn.previouslyFailed();if(e.webSocketOnly&&(t||ln("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[jn];else{const s=this.transports_=[];for(const i of oo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);oo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}oo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=6e4,tx=5e3,nx=10*1024,rx=100*1024,Sl="t",gh="d",sx="s",_h="r",ix="e",bh="o",wh="a",yh="n",xh="p",ox="h";class ax{constructor(e,t,r,s,i,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=To("c:"+this.id+":"),this.transportManager_=new oo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sl in e){const t=e[Sl];t===wh?this.upgradeIfSecondaryHealthy_():t===_h?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===bh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ti("t",e),r=Ti("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ti("t",e),r=Ti("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ti(Sl,e);if(gh in e){const r=e[gh];if(t===ox){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===yh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===sx?this.onConnectionShutdown_(r):t===_h?this.onReset_(r):t===ix?nc("Server Error: "+r):t===bh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),hd!==r&&ln("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ex))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ds.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends kv{static getInstance(){return new va}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=32,Eh=768;class ot{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Je(){return new ot("")}function Ue(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Xr(n){return n.pieces_.length-n.pieceNum_}function ht(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ot(n.pieces_,e)}function vd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function lx(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ao(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ev(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ot(e,0)}function Et(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof ot)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new ot(t,0)}function Fe(n){return n.pieceNum_>=n.pieces_.length}function an(n,e){const t=Ue(n),r=Ue(e);if(t===null)return e;if(t===r)return an(ht(n),ht(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function cx(n,e){const t=ao(n,0),r=ao(e,0);for(let s=0;s<t.length&&s<r.length;s++){const i=Ts(t[s],r[s]);if(i!==0)return i}return t.length===r.length?0:t.length<r.length?-1:1}function md(n,e){if(Xr(n)!==Xr(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Nn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Xr(n)>Xr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class dx{constructor(e,t){this.errorPrefix_=t,this.parts_=ao(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Fa(this.parts_[r]);Iv(this)}}function ux(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Fa(e),Iv(n)}function hx(n){const e=n.parts_.pop();n.byteLength_-=Fa(e),n.parts_.length>0&&(n.byteLength_-=1)}function Iv(n){if(n.byteLength_>Eh)throw new Error(n.errorPrefix_+"has a key path longer than "+Eh+" bytes ("+n.byteLength_+").");if(n.parts_.length>kh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kh+") or object contains a cycle "+as(n))}function as(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends kv{static getInstance(){return new gd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=1e3,fx=300*1e3,Ih=30*1e3,px=1.3,vx=3e4,mx="server_kill",Ch=3;class br extends xv{constructor(e,t,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=br.nextPersistentConnectionId_++,this.log_=To("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Si,this.maxReconnectDelay_=fx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&va.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(qt(i)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new wo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;br.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&sr(e,"w")){const r=ni(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();ln(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||C1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ih)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=I1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):nc("Unrecognized action received from server: "+qt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vx&&(this.reconnectDelay_=Si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*px)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+br.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(m){Q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(m)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Wt("getToken() completed but was canceled"):(Wt("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=f&&f.token,a=new ax(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,_=>{ln(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(mx)},i))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&ln(m),l())}}}interrupt(e){Wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gl(this.interruptReasons_)&&(this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>ud(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new ot(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Wt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ch&&(this.reconnectDelay_=Ih,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Wt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ch&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+tv.replace(/\./g,"-")]=1,Jc()?e["framework.cordova"]=1:cp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=va.getInstance().currentlyOnline();return Gl(this.interruptReasons_)&&e}}br.nextPersistentConnectionId_=0;br.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new je(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new je(Jr,e),s=new je(Jr,t);return this.compare(r,s)!==0}minPost(){return je.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo;class Cv extends Wa{static get __EMPTY_NODE(){return zo}static set __EMPTY_NODE(e){zo=e}compare(e,t){return Ts(e.name,t.name)}isDefinedOn(e){throw pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return je.MIN}maxPost(){return new je(Er,zo)}makePost(e,t){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new je(e,zo)}toString(){return".key"}}const wr=new Cv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Bt.RED,this.left=s??pn.EMPTY_NODE,this.right=i??pn.EMPTY_NODE}copy(e,t,r,s,i){return new Bt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return pn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return pn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0;Bt.BLACK=!1;class gx{copy(e,t,r,s,i){return this}insert(e,t,r){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pn{constructor(e,t=pn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new pn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new pn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Uo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Uo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Uo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Uo(this.root_,null,this.comparator_,!0,e)}}pn.EMPTY_NODE=new gx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(n,e){return Ts(n.name,e.name)}function _d(n,e){return Ts(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;function bx(n){sc=n}const Tv=function(n){return typeof n=="number"?"number:"+iv(n):"string:"+n},Sv=function(n){if(n.isLeafNode()){const e=n.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sr(e,".sv"),"Priority must be a string or number.")}else Q(n===sc||n.isEmpty(),"priority of unexpected type.");Q(n===sc||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th;class jt{static set __childrenNodeConstructor(e){Th=e}static get __childrenNodeConstructor(){return Th}constructor(e,t=jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Fe(e)?this:Ue(e)===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ue(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(Q(r!==".priority"||Xr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=iv(this.value_):e+=this.value_,this.lazyHash_=rv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof jt.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=jt.VALUE_TYPE_ORDER.indexOf(t),i=jt.VALUE_TYPE_ORDER.indexOf(r);return Q(s>=0,"Unknown leaf type: "+t),Q(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Av,Pv;function wx(n){Av=n}function yx(n){Pv=n}class xx extends Wa{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?Ts(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return je.MIN}maxPost(){return new je(Er,new jt("[PRIORITY-POST]",Pv))}makePost(e,t){const r=Av(e);return new je(t,new jt("[PRIORITY-POST]",r))}toString(){return".priority"}}const wt=new xx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=Math.log(2);class Ex{constructor(e){const t=i=>parseInt(Math.log(i)/kx,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ma=function(n,e,t,r){n.sort(e);const s=function(l,c){const h=c-l;let m,f;if(h===0)return null;if(h===1)return m=n[l],f=t?t(m):m,new Bt(f,m.node,Bt.BLACK,null,null);{const _=parseInt(h/2,10)+l,g=s(l,_),w=s(_+1,c);return m=n[_],f=t?t(m):m,new Bt(f,m.node,Bt.BLACK,g,w)}},i=function(l){let c=null,h=null,m=n.length;const f=function(g,w){const x=m-g,I=m;m-=g;const S=s(x+1,I),P=n[x],D=t?t(P):P;_(new Bt(D,P.node,w,null,S))},_=function(g){c?(c.left=g,c=g):(h=g,c=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),x=Math.pow(2,l.count-(g+1));w?f(x,Bt.BLACK):(f(x,Bt.BLACK),f(x,Bt.RED))}return h},o=new Ex(n.length),a=i(o);return new pn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al;const $s={};class pr{static get Default(){return Q($s&&wt,"ChildrenNode.ts has not been loaded"),Al=Al||new pr({".priority":$s},{".priority":wt}),Al}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ni(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof pn?t:null}hasIndex(e){return sr(this.indexSet_,e.toString())}addIndex(e,t){Q(e!==wr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(je.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=ma(r,e.getCompare()):a=$s;const l=e.toString(),c={...this.indexSet_};c[l]=e;const h={...this.indexes_};return h[l]=a,new pr(h,c)}addToIndexes(e,t){const r=oa(this.indexes_,(s,i)=>{const o=ni(this.indexSet_,i);if(Q(o,"Missing index implementation for "+i),s===$s)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(je.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ma(a,o.getCompare())}else return $s;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new je(e.name,a))),l.insert(e,e.node)}});return new pr(r,this.indexSet_)}removeFromIndexes(e,t){const r=oa(this.indexes_,s=>{if(s===$s)return s;{const i=t.get(e.name);return i?s.remove(new je(e.name,i)):s}});return new pr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai;class Ie{static get EMPTY_NODE(){return Ai||(Ai=new Ie(new pn(_d),null,pr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Sv(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ai}updatePriority(e){return this.children_.isEmpty()?this:new Ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ai:t}}getChild(e){const t=Ue(e);return t===null?this:this.getImmediateChild(t).getChild(ht(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Q(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new je(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ai:this.priorityNode_;return new Ie(s,o,i)}}updateChild(e,t){const r=Ue(e);if(r===null)return t;{Q(Ue(e)!==".priority"||Xr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ht(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(wt,(o,a)=>{t[o]=a.val(e),r++,i&&Ie.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tv(this.getPriority().val())+":"),this.forEachChild(wt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":rv(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new je(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new je(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,je.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,je.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===So?-1:0}withIndex(e){if(e===wr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(wt),s=t.getIterator(wt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wr?null:this.indexMap_.get(e.toString())}}Ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ix extends Ie{constructor(){super(new pn(_d),Ie.EMPTY_NODE,pr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ie.EMPTY_NODE}isEmpty(){return!1}}const So=new Ix;Object.defineProperties(je,{MIN:{value:new je(Jr,Ie.EMPTY_NODE)},MAX:{value:new je(Er,So)}});Cv.__EMPTY_NODE=Ie.EMPTY_NODE;jt.__childrenNodeConstructor=Ie;bx(So);yx(So);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=!0;function Ot(n,e=null){if(n===null)return Ie.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new jt(t,Ot(e))}if(!(n instanceof Array)&&Cx){const t=[];let r=!1;if(Yt(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ot(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new je(o,l)))}}),t.length===0)return Ie.EMPTY_NODE;const i=ma(t,_x,o=>o.name,_d);if(r){const o=ma(t,wt.getCompare());return new Ie(i,Ot(e),new pr({".priority":o},{".priority":wt}))}else return new Ie(i,Ot(e),pr.Default)}else{let t=Ie.EMPTY_NODE;return Yt(n,(r,s)=>{if(sr(n,r)&&r.substring(0,1)!=="."){const i=Ot(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(Ot(e))}}wx(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends Wa{constructor(e){super(),this.indexPath_=e,Q(!Fe(e)&&Ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?Ts(e.name,t.name):i}makePost(e,t){const r=Ot(e),s=Ie.EMPTY_NODE.updateChild(this.indexPath_,r);return new je(t,s)}maxPost(){const e=Ie.EMPTY_NODE.updateChild(this.indexPath_,So);return new je(Er,e)}toString(){return ao(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx extends Wa{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ts(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return je.MIN}maxPost(){return je.MAX}makePost(e,t){const r=Ot(e);return new je(t,r)}toString(){return".value"}}const Rv=new Tx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(n){return{type:"value",snapshotNode:n}}function si(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function lo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function co(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Sx(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.index_=e}updateChild(e,t,r,s,i,o){Q(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(lo(t,a)):Q(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(si(t,r)):o.trackChildChange(co(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(wt,(s,i)=>{t.hasChild(s)||r.trackChildChange(lo(s,i))}),t.isLeafNode()||t.forEachChild(wt,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(co(s,i,o))}else r.trackChildChange(si(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.indexedFilter_=new wd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=uo.getStartPost_(e),this.endPost_=uo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,i,o){return this.matches(new je(t,r))||(r=Ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,i,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Ie.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Ie.EMPTY_NODE);const i=this;return t.forEachChild(wt,(o,a)=>{i.matches(new je(o,a))||(s=s.updateImmediateChild(o,Ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new uo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,i,o){return this.rangedFilter_.matches(new je(t,r))||(r=Ie.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,i,o):this.fullLimitUpdateChild_(e,t,r,i,o)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Ie.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Ie.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,i){let o;if(this.reverse_){const m=this.index_.getCompare();o=(f,_)=>m(_,f)}else o=this.index_.getCompare();const a=e;Q(a.numChildren()===this.limit_,"");const l=new je(t,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const m=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(h&&!r.isEmpty()&&_>=0)return i?.trackChildChange(co(t,r,m)),a.updateImmediateChild(t,r);{i?.trackChildChange(lo(t,m));const w=a.updateImmediateChild(t,Ie.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i?.trackChildChange(si(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:h&&o(c,l)>=0?(i!=null&&(i.trackChildChange(lo(c.name,c.node)),i.trackChildChange(si(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(c.name,Ie.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jr}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Er}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new yd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Px(n){return n.loadsAllData()?new wd(n.getIndex()):n.hasLimit()?new Ax(n):new uo(n)}function Rx(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function Nx(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function ic(n,e,t){const r=n.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,t!=null?(r.startNameSet_=!0,r.indexStartName_=t):(r.startNameSet_=!1,r.indexStartName_=""),r}function Lx(n,e,t){let r;return n.index_===wr||t?r=ic(n,e,t):r=ic(n,e,Er),r.startAfterSet_=!0,r}function oc(n,e,t){const r=n.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,t!==void 0?(r.endNameSet_=!0,r.indexEndName_=t):(r.endNameSet_=!1,r.indexEndName_=""),r}function Dx(n,e,t){let r;return n.index_===wr||t?r=oc(n,e,t):r=oc(n,e,Jr),r.endBeforeSet_=!0,r}function $x(n,e){const t=n.copy();return t.index_=e,t}function Sh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===wt?t="$priority":n.index_===Rv?t="$value":n.index_===wr?t="$key":(Q(n.index_ instanceof bd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=qt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=qt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+qt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=qt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+qt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ah(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==wt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends xv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=To("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ga.getListenId_(e,r),a={};this.listens_[o]=a;const l=Sh(e._queryParams);this.restRequest_(i+".json",l,(c,h)=>{let m=h;if(c===404&&(m=null,c=null),c===null&&this.onDataUpdate_(i,m,!1,r),ni(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const r=ga.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Sh(e._queryParams),r=e._path.toString(),s=new wo;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Is(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ro(a.responseText)}catch{ln("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ln("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.rootNode_=Ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){return{value:null,children:new Map}}function Lv(n,e,t){if(Fe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ue(e);n.children.has(r)||n.children.set(r,_a());const s=n.children.get(r);e=ht(e),Lv(s,e,t)}}function ac(n,e,t){n.value!==null?t(e,n.value):qx(n,(r,s)=>{const i=new ot(e.toString()+"/"+r);ac(s,i,t)})}function qx(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Yt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=10*1e3,zx=30*1e3,Ux=300*1e3;class Fx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Mx(e);const r=Ph+(zx-Ph)*Math.random();Ki(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Yt(e,(s,i)=>{i>0&&sr(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),Ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ux))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Hn||(Hn={}));function xd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ed(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Hn.ACK_USER_WRITE,this.source=xd()}operationForChild(e){if(Fe(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ot(e));return new ba(Je(),t,this.revert)}}else return Q(Ue(this.path)===e,"operationForChild called for unrelated child."),new ba(ht(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.source=e,this.path=t,this.type=Hn.LISTEN_COMPLETE}operationForChild(e){return Fe(this.path)?new ho(this.source,Je()):new ho(this.source,ht(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Hn.OVERWRITE}operationForChild(e){return Fe(this.path)?new bs(this.source,Je(),this.snap.getImmediateChild(e)):new bs(this.source,ht(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Hn.MERGE}operationForChild(e){if(Fe(this.path)){const t=this.children.subtree(new ot(e));return t.isEmpty()?null:t.value?new bs(this.source,Je(),t.value):new ii(this.source,Je(),t)}else return Q(Ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ii(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ue(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Bx(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Sx(o.childName,o.snapshotNode))}),Pi(n,s,"child_removed",e,r,t),Pi(n,s,"child_added",e,r,t),Pi(n,s,"child_moved",i,r,t),Pi(n,s,"child_changed",e,r,t),Pi(n,s,"value",e,r,t),s}function Pi(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,l)=>Hx(n,a,l)),o.forEach(a=>{const l=Vx(n,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Vx(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Hx(n,e,t){if(e.childName==null||t.childName==null)throw pi("Should only compare child_ events.");const r=new je(e.childName,e.snapshotNode),s=new je(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,e){return{eventCache:n,serverCache:e}}function Yi(n,e,t,r){return Ga(new Zr(e,t,r),n.serverCache)}function Dv(n,e,t,r){return Ga(n.eventCache,new Zr(e,t,r))}function wa(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ws(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;const Wx=()=>(Pl||(Pl=new pn(T2)),Pl);class ut{static fromObject(e){let t=new ut(null);return Yt(e,(r,s)=>{t=t.set(new ot(r),s)}),t}constructor(e,t=Wx()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Je(),value:this.value};if(Fe(e))return null;{const r=Ue(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ht(e),t);return i!=null?{path:Et(new ot(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Fe(e))return this;{const t=Ue(e),r=this.children.get(t);return r!==null?r.subtree(ht(e)):new ut(null)}}set(e,t){if(Fe(e))return new ut(t,this.children);{const r=Ue(e),i=(this.children.get(r)||new ut(null)).set(ht(e),t),o=this.children.insert(r,i);return new ut(this.value,o)}}remove(e){if(Fe(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=Ue(e),r=this.children.get(t);if(r){const s=r.remove(ht(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new ut(null):new ut(this.value,i)}else return this}}get(e){if(Fe(e))return this.value;{const t=Ue(e),r=this.children.get(t);return r?r.get(ht(e)):null}}setTree(e,t){if(Fe(e))return t;{const r=Ue(e),i=(this.children.get(r)||new ut(null)).setTree(ht(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ut(this.value,o)}}fold(e){return this.fold_(Je(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Et(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Je(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Fe(e))return null;{const i=Ue(e),o=this.children.get(i);return o?o.findOnPath_(ht(e),Et(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Je(),t)}foreachOnPath_(e,t,r){if(Fe(e))return this;{this.value&&r(t,this.value);const s=Ue(e),i=this.children.get(s);return i?i.foreachOnPath_(ht(e),Et(t,s),r):new ut(null)}}foreach(e){this.foreach_(Je(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(Et(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.writeTree_=e}static empty(){return new Wn(new ut(null))}}function Qi(n,e,t){if(Fe(e))return new Wn(new ut(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=an(s,e);return i=i.updateChild(o,t),new Wn(n.writeTree_.set(s,i))}else{const s=new ut(t),i=n.writeTree_.setTree(e,s);return new Wn(i)}}}function lc(n,e,t){let r=n;return Yt(t,(s,i)=>{r=Qi(r,Et(e,s),i)}),r}function Rh(n,e){if(Fe(e))return Wn.empty();{const t=n.writeTree_.setTree(e,new ut(null));return new Wn(t)}}function cc(n,e){return Ss(n,e)!=null}function Ss(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(an(t.path,e)):null}function Nh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(wt,(r,s)=>{e.push(new je(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new je(r,s.value))}),e}function Br(n,e){if(Fe(e))return n;{const t=Ss(n,e);return t!=null?new Wn(new ut(t)):new Wn(n.writeTree_.subtree(e))}}function dc(n){return n.writeTree_.isEmpty()}function oi(n,e){return $v(Je(),n.writeTree_,e)}function $v(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(Q(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=$v(Et(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Et(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n,e){return zv(e,n)}function Gx(n,e,t,r,s){Q(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Qi(n.visibleWrites,e,t)),n.lastWriteId=r}function Kx(n,e,t,r){Q(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=lc(n.visibleWrites,e,t),n.lastWriteId=r}function Yx(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Qx(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);Q(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Jx(a,r.path)?s=!1:Nn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Xx(n),!0;if(r.snap)n.visibleWrites=Rh(n.visibleWrites,r.path);else{const a=r.children;Yt(a,l=>{n.visibleWrites=Rh(n.visibleWrites,Et(r.path,l))})}return!0}else return!1}function Jx(n,e){if(n.snap)return Nn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Nn(Et(n.path,t),e))return!0;return!1}function Xx(n){n.visibleWrites=Ov(n.allWrites,Zx,Je()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Zx(n){return n.visible}function Ov(n,e,t){let r=Wn.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)Nn(t,o)?(a=an(t,o),r=Qi(r,a,i.snap)):Nn(o,t)&&(a=an(o,t),r=Qi(r,Je(),i.snap.getChild(a)));else if(i.children){if(Nn(t,o))a=an(t,o),r=lc(r,a,i.children);else if(Nn(o,t))if(a=an(o,t),Fe(a))r=lc(r,Je(),i.children);else{const l=ni(i.children,Ue(a));if(l){const c=l.getChild(ht(a));r=Qi(r,Je(),c)}}}else throw pi("WriteRecord should have .snap or .children")}}return r}function qv(n,e,t,r,s){if(!r&&!s){const i=Ss(n.visibleWrites,e);if(i!=null)return i;{const o=Br(n.visibleWrites,e);if(dc(o))return t;if(t==null&&!cc(o,Je()))return null;{const a=t||Ie.EMPTY_NODE;return oi(o,a)}}}else{const i=Br(n.visibleWrites,e);if(!s&&dc(i))return t;if(!s&&t==null&&!cc(i,Je()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(Nn(c.path,e)||Nn(e,c.path))},a=Ov(n.allWrites,o,e),l=t||Ie.EMPTY_NODE;return oi(a,l)}}}function ek(n,e,t){let r=Ie.EMPTY_NODE;const s=Ss(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(wt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=Br(n.visibleWrites,e);return t.forEachChild(wt,(o,a)=>{const l=oi(Br(i,new ot(o)),a);r=r.updateImmediateChild(o,l)}),Nh(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Br(n.visibleWrites,e);return Nh(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function tk(n,e,t,r,s){Q(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Et(e,t);if(cc(n.visibleWrites,i))return null;{const o=Br(n.visibleWrites,i);return dc(o)?s.getChild(t):oi(o,s.getChild(t))}}function nk(n,e,t,r){const s=Et(e,t),i=Ss(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=Br(n.visibleWrites,s);return oi(o,r.getNode().getImmediateChild(t))}else return null}function rk(n,e){return Ss(n.visibleWrites,e)}function sk(n,e,t,r,s,i,o){let a;const l=Br(n.visibleWrites,e),c=Ss(l,Je());if(c!=null)a=c;else if(t!=null)a=oi(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],m=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&h.length<s;)m(_,r)!==0&&h.push(_),_=f.getNext();return h}else return[]}function ik(){return{visibleWrites:Wn.empty(),allWrites:[],lastWriteId:-1}}function ya(n,e,t,r){return qv(n.writeTree,n.treePath,e,t,r)}function Id(n,e){return ek(n.writeTree,n.treePath,e)}function Lh(n,e,t,r){return tk(n.writeTree,n.treePath,e,t,r)}function xa(n,e){return rk(n.writeTree,Et(n.treePath,e))}function ok(n,e,t,r,s,i){return sk(n.writeTree,n.treePath,e,t,r,s,i)}function Cd(n,e,t){return nk(n.writeTree,n.treePath,e,t)}function Mv(n,e){return zv(Et(n.treePath,e),n.writeTree)}function zv(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;Q(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Q(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,co(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,lo(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,si(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,co(r,e.snapshotNode,s.oldSnap));else throw pi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Uv=new lk;class Td{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Zr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cd(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ws(this.viewCache_),i=ok(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(n){return{filter:n}}function dk(n,e){Q(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function uk(n,e,t,r,s){const i=new ak;let o,a;if(t.type===Hn.OVERWRITE){const c=t;c.source.fromUser?o=uc(n,e,c.path,c.snap,r,s,i):(Q(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Fe(c.path),o=ka(n,e,c.path,c.snap,r,s,a,i))}else if(t.type===Hn.MERGE){const c=t;c.source.fromUser?o=fk(n,e,c.path,c.children,r,s,i):(Q(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=hc(n,e,c.path,c.children,r,s,a,i))}else if(t.type===Hn.ACK_USER_WRITE){const c=t;c.revert?o=mk(n,e,c.path,r,s,i):o=pk(n,e,c.path,c.affectedTree,r,s,i)}else if(t.type===Hn.LISTEN_COMPLETE)o=vk(n,e,t.path,r,i);else throw pi("Unknown operation type: "+t.type);const l=i.getChanges();return hk(e,o,l),{viewCache:o,changes:l}}function hk(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=wa(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(Nv(wa(e)))}}function Fv(n,e,t,r,s,i){const o=e.eventCache;if(xa(r,t)!=null)return e;{let a,l;if(Fe(t))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ws(e),h=c instanceof Ie?c:Ie.EMPTY_NODE,m=Id(r,h);a=n.filter.updateFullNode(e.eventCache.getNode(),m,i)}else{const c=ya(r,ws(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=Ue(t);if(c===".priority"){Q(Xr(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const m=Lh(r,t,h,l);m!=null?a=n.filter.updatePriority(h,m):a=o.getNode()}else{const h=ht(t);let m;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Lh(r,t,o.getNode(),l);f!=null?m=o.getNode().getImmediateChild(c).updateChild(h,f):m=o.getNode().getImmediateChild(c)}else m=Cd(r,c,e.serverCache);m!=null?a=n.filter.updateChild(o.getNode(),c,m,h,s,i):a=o.getNode()}}return Yi(e,a,o.isFullyInitialized()||Fe(t),n.filter.filtersNodes())}}function ka(n,e,t,r,s,i,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(Fe(t))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(t,r);c=h.updateFullNode(l.getNode(),_,null)}else{const _=Ue(t);if(!l.isCompleteForPath(t)&&Xr(t)>1)return e;const g=ht(t),x=l.getNode().getImmediateChild(_).updateChild(g,r);_===".priority"?c=h.updatePriority(l.getNode(),x):c=h.updateChild(l.getNode(),_,x,g,Uv,null)}const m=Dv(e,c,l.isFullyInitialized()||Fe(t),h.filtersNodes()),f=new Td(s,m,i);return Fv(n,m,t,s,f,a)}function uc(n,e,t,r,s,i,o){const a=e.eventCache;let l,c;const h=new Td(s,e,i);if(Fe(t))c=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Yi(e,c,!0,n.filter.filtersNodes());else{const m=Ue(t);if(m===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),r),l=Yi(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ht(t),_=a.getNode().getImmediateChild(m);let g;if(Fe(f))g=r;else{const w=h.getCompleteChild(m);w!=null?vd(f)===".priority"&&w.getChild(Ev(f)).isEmpty()?g=w:g=w.updateChild(f,r):g=Ie.EMPTY_NODE}if(_.equals(g))l=e;else{const w=n.filter.updateChild(a.getNode(),m,g,f,h,o);l=Yi(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Dh(n,e){return n.eventCache.isCompleteForChild(e)}function fk(n,e,t,r,s,i,o){let a=e;return r.foreach((l,c)=>{const h=Et(t,l);Dh(e,Ue(h))&&(a=uc(n,a,h,c,s,i,o))}),r.foreach((l,c)=>{const h=Et(t,l);Dh(e,Ue(h))||(a=uc(n,a,h,c,s,i,o))}),a}function $h(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function hc(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Fe(t)?c=r:c=new ut(null).setTree(t,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((m,f)=>{if(h.hasChild(m)){const _=e.serverCache.getNode().getImmediateChild(m),g=$h(n,_,f);l=ka(n,l,new ot(m),g,s,i,o,a)}}),c.children.inorderTraversal((m,f)=>{const _=!e.serverCache.isCompleteForChild(m)&&f.value===null;if(!h.hasChild(m)&&!_){const g=e.serverCache.getNode().getImmediateChild(m),w=$h(n,g,f);l=ka(n,l,new ot(m),w,s,i,o,a)}}),l}function pk(n,e,t,r,s,i,o){if(xa(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Fe(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ka(n,e,t,l.getNode().getChild(t),s,i,a,o);if(Fe(t)){let c=new ut(null);return l.getNode().forEachChild(wr,(h,m)=>{c=c.set(new ot(h),m)}),hc(n,e,t,c,s,i,a,o)}else return e}else{let c=new ut(null);return r.foreach((h,m)=>{const f=Et(t,h);l.isCompleteForPath(f)&&(c=c.set(h,l.getNode().getChild(f)))}),hc(n,e,t,c,s,i,a,o)}}function vk(n,e,t,r,s){const i=e.serverCache,o=Dv(e,i.getNode(),i.isFullyInitialized()||Fe(t),i.isFiltered());return Fv(n,o,t,r,Uv,s)}function mk(n,e,t,r,s,i){let o;if(xa(r,t)!=null)return e;{const a=new Td(r,e,s),l=e.eventCache.getNode();let c;if(Fe(t)||Ue(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ya(r,ws(e));else{const m=e.serverCache.getNode();Q(m instanceof Ie,"serverChildren would be complete if leaf node"),h=Id(r,m)}h=h,c=n.filter.updateFullNode(l,h,i)}else{const h=Ue(t);let m=Cd(r,h,e.serverCache);m==null&&e.serverCache.isCompleteForChild(h)&&(m=l.getImmediateChild(h)),m!=null?c=n.filter.updateChild(l,h,m,ht(t),a,i):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,Ie.EMPTY_NODE,ht(t),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ya(r,ws(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||xa(r,Je())!=null,Yi(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new wd(r.getIndex()),i=Px(r);this.processor_=ck(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(Ie.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(Ie.EMPTY_NODE,a.getNode(),null),h=new Zr(l,o.isFullyInitialized(),s.filtersNodes()),m=new Zr(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Ga(m,h),this.eventGenerator_=new jx(this.query_)}get query(){return this.query_}}function _k(n){return n.viewCache_.serverCache.getNode()}function bk(n){return wa(n.viewCache_)}function wk(n,e){const t=ws(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Fe(e)&&!t.getImmediateChild(Ue(e)).isEmpty())?t.getChild(e):null}function Oh(n){return n.eventRegistrations_.length===0}function yk(n,e){n.eventRegistrations_.push(e)}function qh(n,e,t){const r=[];if(t){Q(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function Mh(n,e,t,r){e.type===Hn.MERGE&&e.source.queryId!==null&&(Q(ws(n.viewCache_),"We should always have a full cache before handling merges"),Q(wa(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=uk(n.processor_,s,e,t,r);return dk(n.processor_,i.viewCache),Q(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,jv(n,i.changes,i.viewCache.eventCache.getNode(),null)}function xk(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(wt,(i,o)=>{r.push(si(i,o))}),t.isFullyInitialized()&&r.push(Nv(t.getNode())),jv(n,r,t.getNode(),e)}function jv(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return Bx(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;class Bv{constructor(){this.views=new Map}}function kk(n){Q(!Ea,"__referenceConstructor has already been defined"),Ea=n}function Ek(){return Q(Ea,"Reference.ts has not been loaded"),Ea}function Ik(n){return n.views.size===0}function Sd(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return Q(i!=null,"SyncTree gave us an op for an invalid query."),Mh(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(Mh(o,e,t,r));return i}}function Vv(n,e,t,r,s){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=ya(t,s?r:null),l=!1;a?l=!0:r instanceof Ie?(a=Id(t,r),l=!1):(a=Ie.EMPTY_NODE,l=!1);const c=Ga(new Zr(a,l,!1),new Zr(r,s,!1));return new gk(e,c)}return o}function Ck(n,e,t,r,s,i){const o=Vv(n,e,r,s,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),yk(o,t),xk(o,t)}function Tk(n,e,t,r){const s=e._queryIdentifier,i=[];let o=[];const a=es(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(qh(c,t,r)),Oh(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(qh(l,t,r)),Oh(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!es(n)&&i.push(new(Ek())(e._repo,e._path)),{removed:i,events:o}}function Hv(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Vr(n,e){let t=null;for(const r of n.views.values())t=t||wk(r,e);return t}function Wv(n,e){if(e._queryParams.loadsAllData())return Ya(n);{const r=e._queryIdentifier;return n.views.get(r)}}function Gv(n,e){return Wv(n,e)!=null}function es(n){return Ya(n)!=null}function Ya(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia;function Sk(n){Q(!Ia,"__referenceConstructor has already been defined"),Ia=n}function Ak(){return Q(Ia,"Reference.ts has not been loaded"),Ia}let Pk=1;class zh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=ik(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kv(n,e,t,r,s){return Gx(n.pendingWriteTree_,e,t,r,s),s?gi(n,new bs(xd(),e,t)):[]}function Rk(n,e,t,r){Kx(n.pendingWriteTree_,e,t,r);const s=ut.fromObject(t);return gi(n,new ii(xd(),e,s))}function Mr(n,e,t=!1){const r=Yx(n.pendingWriteTree_,e);if(Qx(n.pendingWriteTree_,e)){let i=new ut(null);return r.snap!=null?i=i.set(Je(),!0):Yt(r.children,o=>{i=i.set(new ot(o),!0)}),gi(n,new ba(r.path,i,t))}else return[]}function Ao(n,e,t){return gi(n,new bs(kd(),e,t))}function Nk(n,e,t){const r=ut.fromObject(t);return gi(n,new ii(kd(),e,r))}function Lk(n,e){return gi(n,new ho(kd(),e))}function Dk(n,e,t){const r=Pd(n,t);if(r){const s=Rd(r),i=s.path,o=s.queryId,a=an(i,e),l=new ho(Ed(o),a);return Nd(n,i,l)}else return[]}function Ca(n,e,t,r,s=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Gv(o,e))){const l=Tk(o,e,t,r);Ik(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,m=n.syncPointTree_.findOnPath(i,(f,_)=>es(_));if(h&&!m){const f=n.syncPointTree_.subtree(i);if(!f.isEmpty()){const _=qk(f);for(let g=0;g<_.length;++g){const w=_[g],x=w.query,I=Xv(n,w);n.listenProvider_.startListening(Ji(x),fo(n,x),I.hashFn,I.onComplete)}}}!m&&c.length>0&&!r&&(h?n.listenProvider_.stopListening(Ji(e),null):c.forEach(f=>{const _=n.queryToTagMap.get(Qa(f));n.listenProvider_.stopListening(Ji(f),_)}))}Mk(n,c)}return a}function Yv(n,e,t,r){const s=Pd(n,r);if(s!=null){const i=Rd(s),o=i.path,a=i.queryId,l=an(o,e),c=new bs(Ed(a),l,t);return Nd(n,o,c)}else return[]}function $k(n,e,t,r){const s=Pd(n,r);if(s){const i=Rd(s),o=i.path,a=i.queryId,l=an(o,e),c=ut.fromObject(t),h=new ii(Ed(a),l,c);return Nd(n,o,h)}else return[]}function fc(n,e,t,r=!1){const s=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,_)=>{const g=an(f,s);i=i||Vr(_,g),o=o||es(_)});let a=n.syncPointTree_.get(s);a?(o=o||es(a),i=i||Vr(a,Je())):(a=new Bv,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=Ie.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((_,g)=>{const w=Vr(g,Je());w&&(i=i.updateImmediateChild(_,w))}));const c=Gv(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Qa(e);Q(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=zk();n.queryToTagMap.set(f,_),n.tagToQueryMap.set(_,f)}const h=Ka(n.pendingWriteTree_,s);let m=Ck(a,e,t,h,i,l);if(!c&&!o&&!r){const f=Wv(a,e);m=m.concat(Uk(n,e,f))}return m}function Ad(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=an(o,e),c=Vr(a,l);if(c)return c});return qv(s,e,i,t,!0)}function Ok(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const m=an(c,t);r=r||Vr(h,m)});let s=n.syncPointTree_.get(t);s?r=r||Vr(s,Je()):(s=new Bv,n.syncPointTree_=n.syncPointTree_.set(t,s));const i=r!=null,o=i?new Zr(r,!0,!1):null,a=Ka(n.pendingWriteTree_,e._path),l=Vv(s,e,a,i?o.getNode():Ie.EMPTY_NODE,i);return bk(l)}function gi(n,e){return Qv(e,n.syncPointTree_,null,Ka(n.pendingWriteTree_,Je()))}function Qv(n,e,t,r){if(Fe(n.path))return Jv(n,e,t,r);{const s=e.get(Je());t==null&&s!=null&&(t=Vr(s,Je()));let i=[];const o=Ue(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Mv(r,o);i=i.concat(Qv(a,l,c,h))}return s&&(i=i.concat(Sd(s,n,r,t))),i}}function Jv(n,e,t,r){const s=e.get(Je());t==null&&s!=null&&(t=Vr(s,Je()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Mv(r,o),h=n.operationForChild(o);h&&(i=i.concat(Jv(h,a,l,c)))}),s&&(i=i.concat(Sd(s,n,r,t))),i}function Xv(n,e){const t=e.query,r=fo(n,t);return{hashFn:()=>(_k(e)||Ie.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?Dk(n,t._path,r):Lk(n,t._path);{const i=P2(s,t);return Ca(n,t,null,i)}}}}function fo(n,e){const t=Qa(e);return n.queryToTagMap.get(t)}function Qa(n){return n._path.toString()+"$"+n._queryIdentifier}function Pd(n,e){return n.tagToQueryMap.get(e)}function Rd(n){const e=n.indexOf("$");return Q(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ot(n.substr(0,e))}}function Nd(n,e,t){const r=n.syncPointTree_.get(e);Q(r,"Missing sync point for query tag that we're tracking");const s=Ka(n.pendingWriteTree_,e);return Sd(r,t,s,null)}function qk(n){return n.fold((e,t,r)=>{if(t&&es(t))return[Ya(t)];{let s=[];return t&&(s=Hv(t)),Yt(r,(i,o)=>{s=s.concat(o)}),s}})}function Ji(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Ak())(n._repo,n._path):n}function Mk(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=Qa(r),i=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(i)}}}function zk(){return Pk++}function Uk(n,e,t){const r=e._path,s=fo(n,e),i=Xv(n,t),o=n.listenProvider_.startListening(Ji(e),s,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(r);if(s)Q(!es(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,m)=>{if(!Fe(c)&&h&&es(h))return[Ya(h).query];{let f=[];return h&&(f=f.concat(Hv(h).map(_=>_.query))),Yt(m,(_,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Ji(h),fo(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ld(t)}node(){return this.node_}}class Dd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Et(this.path_,e);return new Dd(this.syncTree_,t)}node(){return Ad(this.syncTree_,this.path_)}}const Fk=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Uh=function(n,e,t){if(!n||typeof n!="object")return n;if(Q(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return jk(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Bk(n[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},jk=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:Q(!1,"Unexpected server value: "+n)}},Bk=function(n,e,t){n.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&Q(!1,"Unexpected increment value: "+r);const s=e.node();if(Q(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},Zv=function(n,e,t,r){return $d(e,new Dd(t,n),r)},em=function(n,e,t){return $d(n,new Ld(e),t)};function $d(n,e,t){const r=n.getPriority().val(),s=Uh(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=Uh(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new jt(a,Ot(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new jt(s))),o.forEachChild(wt,(a,l)=>{const c=$d(l,e.getImmediateChild(a),t);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function qd(n,e){let t=e instanceof ot?e:new ot(e),r=n,s=Ue(t);for(;s!==null;){const i=ni(r.node.children,s)||{children:{},childCount:0};r=new Od(s,r,i),t=ht(t),s=Ue(t)}return r}function _i(n){return n.node.value}function tm(n,e){n.node.value=e,pc(n)}function nm(n){return n.node.childCount>0}function Vk(n){return _i(n)===void 0&&!nm(n)}function Ja(n,e){Yt(n.node.children,(t,r)=>{e(new Od(t,n,r))})}function rm(n,e,t,r){t&&e(n),Ja(n,s=>{rm(s,e,!0)})}function Hk(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Po(n){return new ot(n.parent===null?n.name:Po(n.parent)+"/"+n.name)}function pc(n){n.parent!==null&&Wk(n.parent,n.name,n)}function Wk(n,e,t){const r=Vk(t),s=sr(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,pc(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,pc(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=/[\[\].#$\/\u0000-\u001F\u007F]/,Kk=/[\[\].#$\u0000-\u001F\u007F]/,Rl=10*1024*1024,Md=function(n){return typeof n=="string"&&n.length!==0&&!Gk.test(n)},sm=function(n){return typeof n=="string"&&n.length!==0&&!Kk.test(n)},Yk=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sm(n)},vc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!dd(n)||n&&typeof n=="object"&&sr(n,".sv")},bi=function(n,e,t,r){r&&e===void 0||Xa(Ua(n,"value"),e,t)},Xa=function(n,e,t){const r=t instanceof ot?new dx(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+as(r));if(typeof e=="function")throw new Error(n+"contains a function "+as(r)+" with contents = "+e.toString());if(dd(e))throw new Error(n+"contains "+e.toString()+" "+as(r));if(typeof e=="string"&&e.length>Rl/3&&Fa(e)>Rl)throw new Error(n+"contains a string greater than "+Rl+" utf8 bytes "+as(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Yt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Md(o)))throw new Error(n+" contains an invalid key ("+o+") "+as(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ux(r,o),Xa(n,a,r),hx(r)}),s&&i)throw new Error(n+' contains ".value" child '+as(r)+" in addition to actual children.")}},Qk=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const i=ao(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Md(i[o]))throw new Error(n+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(cx);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&Nn(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},Jk=function(n,e,t,r){const s=Ua(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Yt(e,(o,a)=>{const l=new ot(o);if(Xa(s,a,Et(t,l)),vd(l)===".priority"&&!vc(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),Qk(s,i)},zd=function(n,e,t,r){if(!sm(t))throw new Error(Ua(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Xk=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zd(n,e,t)},im=function(n,e){if(Ue(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Zk=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Md(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Yk(t))throw new Error(Ua(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Za(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!md(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function om(n,e,t){Za(n,t),am(n,r=>md(r,e))}function On(n,e,t){Za(n,t),am(n,r=>Nn(r,e)||Nn(e,r))}function am(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(t3(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function t3(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Gi&&Wt("event: "+t.toString()),mi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3="repo_interrupt",r3=25;class s3{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new e3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_a(),this.transactionQueueTree_=new Od,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function i3(n,e,t){if(n.stats_=fd(n.repoInfo_),n.forceRestClient_||D2())n.server_=new ga(n.repoInfo_,(r,s,i,o)=>{Fh(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>jh(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new br(n.repoInfo_,e,(r,s,i,o)=>{Fh(n,r,s,i,o)},r=>{jh(n,r)},r=>{o3(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=z2(n.repoInfo_,()=>new Fx(n.stats_,n.server_)),n.infoData_=new Ox,n.infoSyncTree_=new zh({startListening:(r,s,i,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=Ao(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ud(n,"connected",!1),n.serverSyncTree_=new zh({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);On(n.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function lm(n){const t=n.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function el(n){return Fk({timestamp:lm(n)})}function Fh(n,e,t,r,s){n.dataUpdateCount++;const i=new ot(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const l=oa(t,c=>Ot(c));o=$k(n.serverSyncTree_,i,l,s)}else{const l=Ot(t);o=Yv(n.serverSyncTree_,i,l,s)}else if(r){const l=oa(t,c=>Ot(c));o=Nk(n.serverSyncTree_,i,l)}else{const l=Ot(t);o=Ao(n.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=ai(n,i)),On(n.eventQueue_,a,o)}function jh(n,e){Ud(n,"connected",e),e===!1&&d3(n)}function o3(n,e){Yt(e,(t,r)=>{Ud(n,t,r)})}function Ud(n,e,t){const r=new ot("/.info/"+e),s=Ot(t);n.infoData_.updateSnapshot(r,s);const i=Ao(n.infoSyncTree_,r,s);On(n.eventQueue_,r,i)}function Fd(n){return n.nextWriteId_++}function a3(n,e,t){const r=Ok(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const i=Ot(s).withIndex(e._queryParams.getIndex());fc(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ao(n.serverSyncTree_,e._path,i);else{const a=fo(n.serverSyncTree_,e);o=Yv(n.serverSyncTree_,e._path,i,a)}return On(n.eventQueue_,e._path,o),Ca(n.serverSyncTree_,e,t,null,!0),i},s=>(Ro(n,"get for query "+qt(e)+" failed: "+s),Promise.reject(new Error(s))))}function l3(n,e,t,r,s){Ro(n,"set",{path:e.toString(),value:t,priority:r});const i=el(n),o=Ot(t,r),a=Ad(n.serverSyncTree_,e),l=em(o,a,i),c=Fd(n),h=Kv(n.serverSyncTree_,e,l,c,!0);Za(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(f,_)=>{const g=f==="ok";g||ln("set at "+e+" failed: "+f);const w=Mr(n.serverSyncTree_,c,!g);On(n.eventQueue_,e,w),gc(n,s,f,_)});const m=Bd(n,e);ai(n,m),On(n.eventQueue_,m,[])}function c3(n,e,t,r){Ro(n,"update",{path:e.toString(),value:t});let s=!0;const i=el(n),o={};if(Yt(t,(a,l)=>{s=!1,o[a]=Zv(Et(e,a),Ot(l),n.serverSyncTree_,i)}),s)Wt("update() called with empty data.  Don't do anything."),gc(n,r,"ok",void 0);else{const a=Fd(n),l=Rk(n.serverSyncTree_,e,o,a);Za(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{const m=c==="ok";m||ln("update at "+e+" failed: "+c);const f=Mr(n.serverSyncTree_,a,!m),_=f.length>0?ai(n,e):e;On(n.eventQueue_,_,f),gc(n,r,c,h)}),Yt(t,c=>{const h=Bd(n,Et(e,c));ai(n,h)}),On(n.eventQueue_,e,[])}}function d3(n){Ro(n,"onDisconnectEvents");const e=el(n),t=_a();ac(n.onDisconnect_,Je(),(s,i)=>{const o=Zv(s,i,n.serverSyncTree_,e);Lv(t,s,o)});let r=[];ac(t,Je(),(s,i)=>{r=r.concat(Ao(n.serverSyncTree_,s,i));const o=Bd(n,s);ai(n,o)}),n.onDisconnect_=_a(),On(n.eventQueue_,Je(),r)}function u3(n,e,t){let r;Ue(e._path)===".info"?r=fc(n.infoSyncTree_,e,t):r=fc(n.serverSyncTree_,e,t),om(n.eventQueue_,e._path,r)}function mc(n,e,t){let r;Ue(e._path)===".info"?r=Ca(n.infoSyncTree_,e,t):r=Ca(n.serverSyncTree_,e,t),om(n.eventQueue_,e._path,r)}function h3(n){n.persistentConnection_&&n.persistentConnection_.interrupt(n3)}function Ro(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Wt(t,...e)}function gc(n,e,t,r){e&&mi(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function cm(n,e,t){return Ad(n.serverSyncTree_,e,t)||Ie.EMPTY_NODE}function jd(n,e=n.transactionQueueTree_){if(e||tl(n,e),_i(e)){const t=um(n,e);Q(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&f3(n,Po(e),t)}else nm(e)&&Ja(e,t=>{jd(n,t)})}function f3(n,e,t){const r=t.map(c=>c.currentWriteId),s=cm(n,e,r);let i=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];Q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const m=an(e,h.path);i=i.updateChild(m,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Ro(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const m=[];for(let f=0;f<t.length;f++)t[f].status=2,h=h.concat(Mr(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&m.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();tl(n,qd(n.transactionQueueTree_,e)),jd(n,n.transactionQueueTree_),On(n.eventQueue_,e,h);for(let f=0;f<m.length;f++)mi(m[f])}else{if(c==="datastale")for(let m=0;m<t.length;m++)t[m].status===3?t[m].status=4:t[m].status=0;else{ln("transaction at "+l.toString()+" failed: "+c);for(let m=0;m<t.length;m++)t[m].status=4,t[m].abortReason=c}ai(n,e)}},o)}function ai(n,e){const t=dm(n,e),r=Po(t),s=um(n,t);return p3(n,s,r),r}function p3(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=an(t,l.path);let h=!1,m;if(Q(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,m=l.abortReason,s=s.concat(Mr(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=r3)h=!0,m="maxretry",s=s.concat(Mr(n.serverSyncTree_,l.currentWriteId,!0));else{const f=cm(n,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Xa("transaction failed: Data returned ",_,l.path);let g=Ot(_);typeof _=="object"&&_!=null&&sr(_,".priority")||(g=g.updatePriority(f.getPriority()));const x=l.currentWriteId,I=el(n),S=em(g,f,I);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=S,l.currentWriteId=Fd(n),o.splice(o.indexOf(x),1),s=s.concat(Kv(n.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(Mr(n.serverSyncTree_,x,!0))}else h=!0,m="nodata",s=s.concat(Mr(n.serverSyncTree_,l.currentWriteId,!0))}On(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(f){setTimeout(f,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(m==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(m),!1,null))))}tl(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)mi(r[a]);jd(n,n.transactionQueueTree_)}function dm(n,e){let t,r=n.transactionQueueTree_;for(t=Ue(e);t!==null&&_i(r)===void 0;)r=qd(r,t),e=ht(e),t=Ue(e);return r}function um(n,e){const t=[];return hm(n,e,t),t.sort((r,s)=>r.order-s.order),t}function hm(n,e,t){const r=_i(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);Ja(e,s=>{hm(n,s,t)})}function tl(n,e){const t=_i(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,tm(e,t.length>0?t:void 0)}Ja(e,r=>{tl(n,r)})}function Bd(n,e){const t=Po(dm(n,e)),r=qd(n.transactionQueueTree_,e);return Hk(r,s=>{Nl(n,s)}),Nl(n,r),rm(r,s=>{Nl(n,s)}),t}function Nl(n,e){const t=_i(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(Q(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(Q(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Mr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?tm(e,void 0):t.length=i+1,On(n.eventQueue_,Po(e),s);for(let o=0;o<r.length;o++)mi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v3(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function m3(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ln(`Invalid query segment '${t}' in query '${n}'`)}return e}const Bh=function(n,e){const t=g3(n),r=t.namespace;t.domain==="firebase.com"&&kr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&kr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||I2();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new vv(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new ot(t.pathString)}},g3=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let m=n.indexOf("?");m===-1&&(m=n.length),e=n.substring(0,Math.min(h,m)),h<m&&(s=v3(n.substring(h,m)));const f=m3(n.substring(Math.min(n.length,m)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),t=e.substring(g+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_3=(function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Vh.charAt(t%64),t=Math.floor(t/64);Q(t===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Vh.charAt(e[s]);return Q(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qt(this.snapshot.exportVal())}}class pm{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Q(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Fe(this._path)?null:vd(this._path)}get ref(){return new ar(this._repo,this._path)}get _queryIdentifier(){const e=Ah(this._queryParams),t=ud(e);return t==="{}"?"default":t}get _queryObject(){return Ah(this._queryParams)}isEqual(e){if(e=kt(e),!(e instanceof or))return!1;const t=this._repo===e._repo,r=md(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+lx(this._path)}}function b3(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function No(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===wr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Jr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==Er)throw new Error(r);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===wt){if(e!=null&&!vc(e)||t!=null&&!vc(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Q(n.getIndex()instanceof bd||n.getIndex()===Rv,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function nl(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ar extends or{constructor(e,t){super(e,t,new yd,!1)}get parent(){const e=Ev(this._path);return e===null?null:new ar(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class li{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ot(e),r=ci(this.ref,e);return new li(this._node.getChild(t),r,wt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new li(s,ci(this.ref,r),wt)))}hasChild(e){const t=new ot(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $t(n,e){return n=kt(n),n._checkNotDeleted("ref"),e!==void 0?ci(n._root,e):n._root}function ci(n,e){return n=kt(n),Ue(n._path)===null?Xk("child","path",e):zd("child","path",e),new ar(n._repo,Et(n._path,e))}function po(n,e){n=kt(n),im("push",n._path),bi("push",e,n._path,!0);const t=lm(n._repo),r=_3(t),s=ci(n,r),i=ci(n,r);let o;return e!=null?o=w3(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function w3(n,e){n=kt(n),im("set",n._path),bi("set",e,n._path,!1);const t=new wo;return l3(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Lo(n,e){Jk("update",e,n._path);const t=new wo;return c3(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function di(n){n=kt(n);const e=new vm(()=>{}),t=new rl(e);return a3(n._repo,n,t).then(r=>new li(r,new ar(n._repo,n._path),n._queryParams.getIndex()))}class rl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new fm("value",this,new li(e.snapshotNode,new ar(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pm(this,e,t):null}matches(e){return e instanceof rl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Vd{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pm(this,e,t):null}createEvent(e,t){Q(e.childName!=null,"Child events should have a childName.");const r=ci(new ar(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new fm(e.type,this,new li(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Vd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function mm(n,e,t,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=t,c=(h,m)=>{mc(n._repo,n,a),l(h,m)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new vm(t,i||void 0),a=e==="value"?new rl(o):new Vd(e,o);return u3(n._repo,n,a),()=>mc(n._repo,n,a)}function Do(n,e,t,r){return mm(n,"value",e,t,r)}function y3(n,e,t,r){return mm(n,"child_added",e,t,r)}function Hd(n,e,t){mc(n._repo,n,null)}class As{}class x3 extends As{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){bi("endAt",this._value,e._path,!0);const t=oc(e._queryParams,this._value,this._key);if(nl(t),No(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new or(e._repo,e._path,t,e._orderByCalled)}}function Gs(n,e){return new x3(n,e)}class k3 extends As{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){bi("endBefore",this._value,e._path,!1);const t=Dx(e._queryParams,this._value,this._key);if(nl(t),No(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new or(e._repo,e._path,t,e._orderByCalled)}}function Hh(n,e){return new k3(n,e)}class E3 extends As{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){bi("startAt",this._value,e._path,!0);const t=ic(e._queryParams,this._value,this._key);if(nl(t),No(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new or(e._repo,e._path,t,e._orderByCalled)}}function dr(n=null,e){return new E3(n,e)}class I3 extends As{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){bi("startAfter",this._value,e._path,!1);const t=Lx(e._queryParams,this._value,this._key);if(nl(t),No(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new or(e._repo,e._path,t,e._orderByCalled)}}function Wh(n,e){return new I3(n,e)}class C3 extends As{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new or(e._repo,e._path,Rx(e._queryParams,this._limit),e._orderByCalled)}}function Fo(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new C3(n)}class T3 extends As{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new or(e._repo,e._path,Nx(e._queryParams,this._limit),e._orderByCalled)}}function jo(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new T3(n)}class S3 extends As{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){b3(e,"orderByChild");const t=new ot(this._path);if(Fe(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new bd(t),s=$x(e._queryParams,r);return No(s),new or(e._repo,e._path,s,!0)}}function wn(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return zd("orderByChild","path",n),new S3(n)}function yn(n,...e){let t=kt(n);for(const r of e)t=r._apply(t);return t}kk(ar);Sk(ar);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A3="FIREBASE_DATABASE_EMULATOR_HOST",_c={};let P3=!1;function R3(n,e,t,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=ss(i);n.repoInfo_=new vv(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function N3(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||kr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Wt("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Bh(i,s),a=o.repoInfo,l;typeof process<"u"&&uh&&(l=uh[A3]),l?(i=`http://${l}?ns=${a.namespace}`,o=Bh(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new O2(n.name,n.options,e);Zk("Invalid Firebase Database URL",o),Fe(o.path)||kr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=D3(a,n,c,new $2(n,t));return new $3(h,n)}function L3(n,e){const t=_c[e];(!t||t[n.key]!==n)&&kr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),h3(n),delete t[n.key]}function D3(n,e,t,r){let s=_c[e.name];s||(s={},_c[e.name]=s);let i=s[n.toURLString()];return i&&kr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new s3(n,P3,t,r),s[n.toURLString()]=i,i}class $3{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(i3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ar(this._repo,Je())),this._rootInternal}_delete(){return this._rootInternal!==null&&(L3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kr("Cannot call "+e+" on a deleted database.")}}function O3(n=ed(),e){const t=ja(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=ip("database");r&&q3(t,...r)}return t}function q3(n,e,t,r={}){n=kt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&vs(r,i.repoInfo_.emulatorOptions))return;kr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&kr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Qo(Qo.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:lp(r.mockUserToken,n.app.options.projectId);o=new Qo(a)}ss(e)&&(Yc(e),Qc("Database",!0)),R3(i,s,r,o)}/**
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
 */function M3(n){b2(Cs),ms(new Qr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return N3(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),er(hh,fh,n),er(hh,fh,"esm2020")}function gm(n){return{".sv":{increment:n}}}br.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};br.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};M3();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="firebasestorage.googleapis.com",bm="storageBucket",z3=120*1e3,U3=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Ar{constructor(e,t,r=0){super(Ll(e),`Firebase Storage: ${t} (${Ll(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ll(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ct;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ct||(Ct={}));function Ll(n){return"storage/"+n}function Wd(){const n="An unknown error occurred, please check the error payload for server response.";return new Tt(Ct.UNKNOWN,n)}function F3(n){return new Tt(Ct.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function j3(n){return new Tt(Ct.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function B3(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Tt(Ct.UNAUTHENTICATED,n)}function V3(){return new Tt(Ct.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function H3(n){return new Tt(Ct.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function W3(){return new Tt(Ct.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function G3(){return new Tt(Ct.CANCELED,"User canceled the upload/download.")}function K3(n){return new Tt(Ct.INVALID_URL,"Invalid URL '"+n+"'.")}function Y3(n){return new Tt(Ct.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Q3(){return new Tt(Ct.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bm+"' property when initializing the app?")}function J3(){return new Tt(Ct.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function X3(){return new Tt(Ct.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Z3(n){return new Tt(Ct.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bc(n){return new Tt(Ct.INVALID_ARGUMENT,n)}function wm(){return new Tt(Ct.APP_DELETED,"The Firebase app was deleted.")}function eE(n){return new Tt(Ct.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xi(n,e){return new Tt(Ct.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ri(n){throw new Tt(Ct.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=En.makeFromUrl(e,t)}catch{return new En(e,"")}if(r.path==="")return r;throw Y3(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${m}/${h}/b/${s}/o${f}`,"i"),g={bucket:1,path:3},w=t===_m?"(?:storage.googleapis.com|storage.cloud.google.com)":t,x="([^?#]*)",I=new RegExp(`^https?://${w}/${s}/${x}`,"i"),P=[{regex:a,indices:l,postModify:i},{regex:_,indices:g,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<P.length;D++){const B=P[D],z=B.regex.exec(e);if(z){const C=z[B.indices.bucket];let E=z[B.indices.path];E||(E=""),r=new En(C,E),B.postModify(r);break}}if(r==null)throw K3(e);return r}}class tE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...x){c||(c=!0,e.apply(null,x))}function m(x){s=setTimeout(()=>{s=null,n(_,l())},x)}function f(){i&&clearTimeout(i)}function _(x,...I){if(c){f();return}if(x){f(),h.call(null,x,...I);return}if(l()||o){f(),h.call(null,x,...I);return}r<64&&(r*=2);let P;a===1?(a=2,P=0):P=(r+Math.random())*1e3,m(P)}let g=!1;function w(x){g||(g=!0,f(),!c&&(s!==null?(x||(a=2),clearTimeout(s),m(0)):x||(a=1)))}return m(0),i=setTimeout(()=>{o=!0,w(!0)},t),w}function rE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(n){return n!==void 0}function iE(n){return typeof n=="object"&&!Array.isArray(n)}function Gd(n){return typeof n=="string"||n instanceof String}function Gh(n){return Kd()&&n instanceof Blob}function Kd(){return typeof Blob<"u"}function Kh(n,e,t,r){if(r<e)throw bc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw bc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function ym(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var fs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(fs||(fs={}));/**
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
 */function oE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,r,s,i,o,a,l,c,h,m,f=!0,_=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=m,this.retry=f,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Bo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===fs.NO_ERROR,l=i.getStatus();if(!a||oE(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===fs.ABORT;r(!1,new Bo(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Bo(c,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());sE(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Wd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?wm():G3();o(l)}else{const l=W3();o(l)}};this.canceled_?t(!1,new Bo(!1,null,!0)):this.backoffId_=nE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function lE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function cE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function uE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function hE(n,e,t,r,s,i,o=!0,a=!1){const l=ym(n.urlParams),c=n.url+l,h=Object.assign({},n.headers);return dE(h,e),lE(h,t),cE(h,i),uE(h,r),new aE(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pE(...n){const e=fE();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Kd())return new Blob(n);throw new Tt(Ct.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function mE(n){if(typeof atob>"u")throw Z3("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dl{constructor(e,t){this.data=e,this.contentType=t||null}}function gE(n,e){switch(n){case Xn.RAW:return new Dl(xm(e));case Xn.BASE64:case Xn.BASE64URL:return new Dl(km(n,e));case Xn.DATA_URL:return new Dl(bE(e),wE(e))}throw Wd()}function xm(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _E(n){let e;try{e=decodeURIComponent(n)}catch{throw Xi(Xn.DATA_URL,"Malformed data URL.")}return xm(e)}function km(n,e){switch(n){case Xn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Xi(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Xn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Xi(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=mE(e)}catch(s){throw s.message.includes("polyfill")?s:Xi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Em{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Xi(Xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=yE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function bE(n){const e=new Em(n);return e.base64?km(Xn.BASE64,e.rest):_E(e.rest)}function wE(n){return new Em(n).contentType}function yE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t){let r=0,s="";Gh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Gh(this.data_)){const r=this.data_,s=vE(r,e,t);return s===null?null:new Or(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Or(r,!0)}}static getBlob(...e){if(Kd()){const t=e.map(r=>r instanceof Or?r.data_:r);return new Or(pE.apply(null,t))}else{const t=e.map(o=>Gd(o)?gE(Xn.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Or(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n){let e;try{e=JSON.parse(n)}catch{return null}return iE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function kE(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Cm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(n,e){return e}class rn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||EE}}let Vo=null;function IE(n){return!Gd(n)||n.length<2?n:Cm(n)}function Tm(){if(Vo)return Vo;const n=[];n.push(new rn("bucket")),n.push(new rn("generation")),n.push(new rn("metageneration")),n.push(new rn("name","fullPath",!0));function e(i,o){return IE(o)}const t=new rn("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new rn("size");return s.xform=r,n.push(s),n.push(new rn("timeCreated")),n.push(new rn("updated")),n.push(new rn("md5Hash",null,!0)),n.push(new rn("cacheControl",null,!0)),n.push(new rn("contentDisposition",null,!0)),n.push(new rn("contentEncoding",null,!0)),n.push(new rn("contentLanguage",null,!0)),n.push(new rn("contentType",null,!0)),n.push(new rn("metadata","customMetadata",!0)),Vo=n,Vo}function CE(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new En(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function TE(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return CE(r,n),r}function Sm(n,e,t){const r=Im(e);return r===null?null:TE(n,r,t)}function SE(n,e,t,r){const s=Im(e);if(s===null||!Gd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=n.bucket,m=n.fullPath,f="/b/"+o(h)+"/o/"+o(m),_=Yd(f,t,r),g=ym({alt:"media",token:c});return _+g})[0]}function AE(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Am{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(n){if(!n)throw Wd()}function PE(n,e){function t(r,s){const i=Sm(n,s,e);return Pm(i!==null),i}return t}function RE(n,e){function t(r,s){const i=Sm(n,s,e);return Pm(i!==null),SE(i,s,n.host,n._protocol)}return t}function Rm(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=V3():s=B3():t.getStatus()===402?s=j3(n.bucket):t.getStatus()===403?s=H3(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function NE(n){const e=Rm(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=F3(n.path)),i.serverResponse=s.serverResponse,i}return t}function LE(n,e,t){const r=e.fullServerUrl(),s=Yd(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new Am(s,i,RE(n,t),o);return a.errorHandler=NE(e),a}function DE(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function $E(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=DE(null,e)),r}function OE(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let D=0;D<2;D++)P=P+Math.random().toString().slice(2);return P}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=$E(e,r,s),h=AE(c,t),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",_=Or.getBlob(m,r,f);if(_===null)throw J3();const g={name:c.fullPath},w=Yd(i,n.host,n._protocol),x="POST",I=n.maxUploadRetryTime,S=new Am(w,x,PE(n,t),I);return S.urlParams=g,S.headers=o,S.body=_.uploadData(),S.errorHandler=Rm(e),S}class qE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Ri("cannot .send() more than once");if(ss(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ri("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ri("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ri("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ri("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ME extends qE{initXhr(){this.xhr_.responseType="text"}}function Nm(){return new ME}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this._service=e,t instanceof En?this._location=t:this._location=En.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ys(e,t)}get root(){const e=new En(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Cm(this._location.path)}get storage(){return this._service}get parent(){const e=xE(this._location.path);if(e===null)return null;const t=new En(this._location.bucket,e);return new ys(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw eE(e)}}function zE(n,e,t){n._throwIfRoot("uploadBytes");const r=OE(n.storage,n._location,Tm(),new Or(e,!0),t);return n.storage.makeRequestWithTokens(r,Nm).then(s=>({metadata:s,ref:n}))}function UE(n){n._throwIfRoot("getDownloadURL");const e=LE(n.storage,n._location,Tm());return n.storage.makeRequestWithTokens(e,Nm).then(t=>{if(t===null)throw X3();return t})}function FE(n,e){const t=kE(n._location.path,e),r=new En(n._location.bucket,t);return new ys(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n){return/^[A-Za-z]+:\/\//.test(n)}function BE(n,e){return new ys(n,e)}function Lm(n,e){if(n instanceof Qd){const t=n;if(t._bucket==null)throw Q3();const r=new ys(t,t._bucket);return e!=null?Lm(r,e):r}else return e!==void 0?FE(n,e):n}function VE(n,e){if(e&&jE(e)){if(n instanceof Qd)return BE(n,e);throw bc("To use ref(service, url), the first argument must be a Storage instance.")}else return Lm(n,e)}function Yh(n,e){const t=e?.[bm];return t==null?null:En.makeFromBucketSpec(t,n)}function HE(n,e,t,r={}){n.host=`${e}:${t}`;const s=ss(e);s&&(Yc(`https://${n.host}/b`),Qc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:lp(i,n.app.options.projectId))}class Qd{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=_m,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=z3,this._maxUploadRetryTime=U3,this._requests=new Set,s!=null?this._bucket=En.makeFromBucketSpec(s,this._host):this._bucket=Yh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=En.makeFromBucketSpec(this._url,e):this._bucket=Yh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ys(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new tE(wm());{const o=hE(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Qh="@firebase/storage",Jh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="storage";function WE(n,e,t){return n=kt(n),zE(n,e,t)}function GE(n){return n=kt(n),UE(n)}function KE(n,e){return n=kt(n),VE(n,e)}function YE(n=ed(),e){n=kt(n);const r=ja(n,Dm).getImmediate({identifier:e}),s=ip("storage");return s&&QE(r,...s),r}function QE(n,e,t,r={}){HE(n,e,t,r)}function JE(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Qd(t,r,s,e,Cs)}function XE(){ms(new Qr(Dm,JE,"PUBLIC").setMultipleInstances(!0)),er(Qh,Jh,""),er(Qh,Jh,"esm2020")}XE();const $m={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",$m);const Jd=fp($m),Ir=g2(Jd),Rt=O3(Jd),ZE=YE(Jd);var eI=R('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),tI=R('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),nI=R('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),rI=R('<h3 class="post-title svelte-1t1odzy"> </h3>'),sI=R('<p class="post-text svelte-1t1odzy"> </p>'),iI=R('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),oI=R('<div class="posts svelte-1t1odzy"></div>'),aI=R('<div class="post-list-container svelte-1t1odzy"><!></div>');const lI={hash:"svelte-1t1odzy",code:`
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
  }`};function cI(n,e){rt(e,!0),tt(n,lI);let t=et(e,"path",7,"posts"),r=et(e,"limit",7,"10"),s=ie(Zt([])),i=ie(!0),o=ie(""),a=null;zt(()=>{l()}),Zf(()=>{c()});function l(){try{a=$t(Rt,t()),Do(a,S=>{const P=S.val();P?y(s,Object.entries(P).map(([D,B])=>({id:D,...B})).sort((D,B)=>(B.timestamp||0)-(D.timestamp||0)).slice(0,parseInt(r())),!0):y(s,[],!0),y(i,!1),y(o,"")},S=>{console.error("데이터 읽기 오류:",S),y(o,"데이터를 불러오는 중 오류가 발생했습니다."),y(i,!1)})}catch(S){console.error("구독 설정 오류:",S),y(o,"데이터베이스 연결에 실패했습니다."),y(i,!1)}}function c(){a&&Hd(a)}function h(S){const P=new CustomEvent("post-click",{detail:{post:S},bubbles:!0,composed:!0});dispatchEvent(P)}function m(S,P){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),h(P))}function f(S){if(!S)return"";const P=typeof S=="string"?Number(S):S,D=new Date(P),z=new Date().getTime()-D.getTime(),C=Math.floor(z/6e4),E=Math.floor(z/36e5),T=Math.floor(z/864e5);return C<1?"방금 전":C<60?`${C}분 전`:E<24?`${E}시간 전`:T<7?`${T}일 전`:D.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var _={get path(){return t()},set path(S="posts"){t(S),Qe()},get limit(){return r()},set limit(S="10"){r(S),Qe()}},g=aI(),w=u(g);{var x=S=>{var P=eI();k(S,P)},I=S=>{var P=be(),D=he(P);{var B=C=>{var E=tI(),T=u(E),L=u(T,!0);d(T),d(E),U(()=>b(L,v(o))),k(C,E)},z=C=>{var E=be(),T=he(E);{var L=F=>{var G=nI();k(F,G)},$=F=>{var G=oI();Gt(G,21,()=>v(s),X=>X.id,(X,H)=>{var le=iI();le.__click=()=>h(v(H)),le.__keydown=ne=>m(ne,v(H));var pe=u(le),oe=u(pe),te=u(oe),j=u(te,!0);d(te);var K=p(te,2),Z=u(K,!0);d(K),d(oe),d(pe);var re=p(pe,2),N=u(re);{var A=ne=>{var de=rI(),se=u(de,!0);d(de),U(()=>b(se,v(H).title)),k(ne,de)};Y(N,ne=>{v(H).title&&ne(A)})}var M=p(N,2);{var q=ne=>{var de=sI(),se=u(de,!0);d(de),U(()=>b(se,v(H).content)),k(ne,de)};Y(M,ne=>{v(H).content&&ne(q)})}d(re);var J=p(re,2),O=u(J),V=u(O);d(O);var W=p(O,2),me=u(W);d(W),d(J),d(le),U(ne=>{Le(le,"aria-label",`게시물: ${(v(H).title||v(H).content||"제목 없음")??""}`),b(j,v(H).author||"익명"),b(Z,ne),b(V,`👍 ${(v(H).likes||0)??""}`),b(me,`💬 ${(v(H).comments?.length||0)??""}`)},[()=>f(v(H).timestamp)]),k(X,le)}),d(G),k(F,G)};Y(T,F=>{v(s).length===0?F(L):F($,!1)},!0)}k(C,E)};Y(D,C=>{v(o)?C(B):C(z,!1)},!0)}k(S,P)};Y(w,S=>{v(i)?S(x):S(I,!1)})}return d(g),k(n,g),st(_)}vt(["click","keydown"]);customElements.define("post-list",ge(cI,{path:{},limit:{}},[],[],!0));eb();/**
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
 */const dI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var uI=Db("<svg><!><!></svg>");function _t(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]),r=pt(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);rt(e,!1);let s=et(e,"name",12,void 0),i=et(e,"color",12,"currentColor"),o=et(e,"size",12,24),a=et(e,"strokeWidth",12,2),l=et(e,"absoluteStrokeWidth",12,!1),c=et(e,"iconNode",28,()=>[]);const h=(...w)=>w.filter((x,I,S)=>!!x&&S.indexOf(x)===I).join(" ");var m={get name(){return s()},set name(w){s(w),Qe()},get color(){return i()},set color(w){i(w),Qe()},get size(){return o()},set size(w){o(w),Qe()},get strokeWidth(){return a()},set strokeWidth(w){a(w),Qe()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(w){l(w),Qe()},get iconNode(){return c()},set iconNode(w){c(w),Qe()}};dn();var f=uI();Su(f,(w,x)=>({...dI,...r,width:o(),height:o(),stroke:i(),"stroke-width":w,class:x}),[()=>(Os(l()),Os(a()),Os(o()),nr(()=>l()?Number(a())*24/Number(o()):a())),()=>(Os(s()),Os(t),nr(()=>h("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var _=u(f);Gt(_,1,c,ur,(w,x)=>{var I=Js(()=>I_(v(x),2));let S=()=>v(I)[0],P=()=>v(I)[1];var D=be(),B=he(D);Ub(B,S,!0,(z,C)=>{Su(z,()=>({...P()}))}),k(w,D)});var g=p(_);return mt(g,e,"default",{}),d(f),k(n,f),st(m)}ge(_t,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function Om(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];_t(n,xt({name:"book-open"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Om,{},["default"],[],!0);function qm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];_t(n,xt({name:"camera"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(qm,{},["default"],[],!0);function wc(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];_t(n,xt({name:"check"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(wc,{},["default"],[],!0);function Xd(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];_t(n,xt({name:"chevron-down"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Xd,{},["default"],[],!0);function yc(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];_t(n,xt({name:"circle-check"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(yc,{},["default"],[],!0);function xc(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];_t(n,xt({name:"circle"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(xc,{},["default"],[],!0);function kc(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];_t(n,xt({name:"external-link"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(kc,{},["default"],[],!0);function Zd(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];_t(n,xt({name:"file-text"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Zd,{},["default"],[],!0);function Mm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];_t(n,xt({name:"house"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Mm,{},["default"],[],!0);function Oi(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];_t(n,xt({name:"layout-grid"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Oi,{},["default"],[],!0);function zm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];_t(n,xt({name:"log-in"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(zm,{},["default"],[],!0);function Um(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];_t(n,xt({name:"log-out"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Um,{},["default"],[],!0);function qi(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];_t(n,xt({name:"menu"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(qi,{},["default"],[],!0);function zr(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];_t(n,xt({name:"message-circle"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(zr,{},["default"],[],!0);function Fm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];_t(n,xt({name:"phone"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Fm,{},["default"],[],!0);function jm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];_t(n,xt({name:"send"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(jm,{},["default"],[],!0);function Bm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];_t(n,xt({name:"server"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Bm,{},["default"],[],!0);function Vm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];_t(n,xt({name:"settings"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Vm,{},["default"],[],!0);function Hm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];_t(n,xt({name:"trending-up"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Hm,{},["default"],[],!0);function Hr(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];_t(n,xt({name:"user"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Hr,{},["default"],[],!0);function vo(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];_t(n,xt({name:"users"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(vo,{},["default"],[],!0);function Wm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];_t(n,xt({name:"x"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Wm,{},["default"],[],!0);function Gm(n,e){const t=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];_t(n,xt({name:"zap"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=he(o);mt(a,e,"default",{}),k(s,o)},$$slots:{default:!0}}))}ge(Gm,{},["default"],[],!0);var hI=R("<option> </option>"),fI=R('<div class="error-message svelte-1e01td3"> </div>'),pI=R('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),vI=R("<!> 인증 코드 전송",1),mI=R('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),gI=R('<div class="error-message svelte-1e01td3"> </div>'),_I=R('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),bI=R("<!> 로그인",1),wI=R('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),yI=R('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const xI={hash:"svelte-1e01td3",code:`\r
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
  }`};function kI(n,e){rt(e,!0),tt(n,xI);const t=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=ie("+82"),s=ie(""),i=ie(""),o=ie("phone"),a=ie(!1),l=ie(""),c=ie(null),h=ie(null),m=ie(void 0),f=ie(null);function _(){return new Promise((E,T)=>{try{if(!v(f)){const L=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(L),y(l,"reCAPTCHA 초기화에 실패했습니다."),T(L);return}if(v(c)){if(v(m)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(v(m)),console.log("reCAPTCHA reset completed"),E(v(m));return}catch(L){console.warn("Failed to reset reCAPTCHA:",L)}try{v(c).clear(),y(c,null),y(m,void 0)}catch(L){console.warn("Failed to clear reCAPTCHA:",L)}}y(c,new gy(Ir,v(f).id,{size:"invisible",callback:()=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&v(m)!==void 0?window.grecaptcha.reset(v(m)):_()}}),!0),v(c).render().then(L=>{y(m,L,!0),console.log("reCAPTCHA rendered with widgetId:",L),E(L)}).catch(L=>{console.error("Failed to render reCAPTCHA:",L),y(l,"reCAPTCHA 초기화에 실패했습니다."),T(L)})}catch(L){console.error("reCAPTCHA 초기화 실패:",L),y(l,"reCAPTCHA 초기화에 실패했습니다."),T(L)}})}zt(()=>{const E=document.createElement("div");return E.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),E.className="recaptcha-container-light-dom",E.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(E),y(f,E,!0),_(),()=>{E&&E.parentNode&&E.parentNode.removeChild(E)}});function g(E){return/^[0-9]{6,15}$/.test(E)}async function w(){if(y(l,""),!g(v(s))){y(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}y(a,!0);try{const E=`${v(r)}${v(s)}`;console.log("Sending verification code to:",E),y(h,await wy(Ir,E,v(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),y(o,"code")}catch(E){console.error("SMS 전송 실패:",E),E.code==="auth/invalid-phone-number"?y(l,"잘못된 전화번호 형식입니다."):E.code==="auth/too-many-requests"?y(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):y(l,`SMS 전송 실패: ${E.message}`)}finally{y(a,!1)}}async function x(){if(y(l,""),v(i).length!==6){y(l,"6자리 인증 코드를 입력해주세요.");return}y(a,!0);try{const E=await v(h).confirm(v(i));console.log("Login successful:",E.user);const T=new CustomEvent("login-success",{detail:{user:E.user,phoneNumber:E.user.phoneNumber}});dispatchEvent(T),y(s,""),y(i,""),y(o,"phone")}catch(E){console.error("인증 코드 확인 실패:",E),E.code==="auth/invalid-verification-code"?y(l,"잘못된 인증 코드입니다."):E.code==="auth/code-expired"?y(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):y(l,`인증 실패: ${E.message}`);const T=new CustomEvent("login-error",{detail:{error:E.message}});dispatchEvent(T)}finally{y(a,!1)}}function I(){y(o,"phone"),y(i,""),y(l,"")}var S=yI(),P=u(S),D=u(P);{var B=E=>{var T=mI(),L=u(T),$=u(L);Fm($,{class:"icon-large"}),xn(4),d(L);var F=p(L,2),G=p(u(F),2);Gt(G,21,()=>t,ur,(A,M)=>{var q=hI(),J=u(q);d(q);var O={};U(()=>{b(J,`${v(M).flag??""}
                ${v(M).name??""} (${v(M).code??""})`),O!==(O=v(M).code)&&(q.value=(q.__value=v(M).code)??"")}),k(A,q)}),d(G),d(F);var X=p(F,2),H=p(u(X),2),le=u(H),pe=u(le,!0);d(le);var oe=p(le,2);ti(oe),d(H),xn(2),d(X);var te=p(X,2);{var j=A=>{var M=fI(),q=u(M,!0);d(M),U(()=>b(q,v(l))),k(A,M)};Y(te,A=>{v(l)&&A(j)})}var K=p(te,2);K.__click=w;var Z=u(K);{var re=A=>{var M=pI();xn(),k(A,M)},N=A=>{var M=vI(),q=he(M);jm(q,{class:"btn-icon"}),xn(),k(A,M)};Y(Z,A=>{v(a)?A(re):A(N,!1)})}d(K),d(T),U(()=>{G.disabled=v(a),b(pe,v(r)),oe.disabled=v(a),K.disabled=v(a)||!v(s)}),Vc(G,()=>v(r),A=>y(r,A)),ei("keypress",oe,A=>{A.key==="Enter"&&(A.preventDefault(),w())}),Yr(oe,()=>v(s),A=>y(s,A)),k(E,T)},z=E=>{var T=be(),L=he(T);{var $=F=>{var G=wI(),X=u(G),H=u(X);wc(H,{class:"icon-large"});var le=p(H,4),pe=u(le);xn(2),d(le),d(X);var oe=p(X,2),te=p(u(oe),2);ti(te),xn(2),d(oe);var j=p(oe,2);{var K=V=>{var W=gI(),me=u(W,!0);d(W),U(()=>b(me,v(l))),k(V,W)};Y(j,V=>{v(l)&&V(K)})}var Z=p(j,2),re=u(Z);re.__click=I;var N=p(re,2);N.__click=x;var A=u(N);{var M=V=>{var W=_I();xn(),k(V,W)},q=V=>{var W=bI(),me=he(W);wc(me,{class:"btn-icon"}),xn(),k(V,W)};Y(A,V=>{v(a)?V(M):V(q,!1)})}d(N),d(Z);var J=p(Z,2),O=p(u(J));O.__click=I,d(J),d(G),U(()=>{b(pe,`${v(r)??""}${v(s)??""}로 전송된`),te.disabled=v(a),re.disabled=v(a),N.disabled=v(a)||v(i).length!==6}),ei("keypress",te,V=>{V.key==="Enter"&&(V.preventDefault(),x())}),Yr(te,()=>v(i),V=>y(i,V)),k(F,G)};Y(L,F=>{v(o)==="code"&&F($)},!0)}k(E,T)};Y(D,E=>{v(o)==="phone"?E(B):E(z,!1)})}var C=p(D,2);Hc(C,E=>y(f,E),()=>v(f)),d(P),d(S),k(n,S),st()}vt(["click"]);customElements.define("phone-login",ge(kI,{},[],[],!0));const sl=Es(null),EI=Es(!0);Hp(Ir,n=>{sl.set(n),EI.set(!1)});async function II(){try{return await Qw(Ir),{success:!0}}catch(n){return console.error("로그아웃 오류:",n),{success:!1,error:n.message}}}class ls{static#t=null;#e=ie(!0);get loading(){return v(this.#e)}set loading(e){y(this.#e,e,!0)}#r=ie(!1);get isAuthenticated(){return v(this.#r)}set isAuthenticated(e){y(this.#r,e,!0)}uid=null;email=null;phoneNumber=null;#s=ie(null);get data(){return v(this.#s)}set data(e){y(this.#s,e,!0)}#l=ie(null);get error(){return v(this.#l)}set error(e){y(this.#l,e,!0)}#o=null;#i=null;#n=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return ls.#t||(ls.#t=new ls),ls.#t}#a(){try{if(!Ir)throw new Error("Auth instance not available");this.#i=Hp(Ir,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#n&&(this.#n(),this.#n=null);const t=$t(Rt,`users/${e.uid}`);this.#n=Do(t,async r=>{this.data=r.val(),!this.data&&e&&console.log("FirebaseLoginUser: 사용자 데이터가 없습니다.")},r=>{this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#n&&(this.#n(),this.#n=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const t={};e.displayName!==void 0&&(t.displayName=e.displayName),e.photoUrl!==void 0&&(t.photoURL=e.photoUrl),Object.keys(t).length>0&&await Vp(this.#o,t);const r={...e},s=$t(Rt,`users/${this.uid}`);await Lo(s,r)}catch(t){throw this.error=t,t}}async updateField(e,t){return this.updateProfile({[e]:t})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#i&&(this.#i(),this.#i=null),this.#n&&(this.#n(),this.#n=null),ls.#t=null}}const Ae=ls.getInstance(),CI="GitHub",TI={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",신고:"Report",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",전체댓글:"Total Comments",전체좋아요:"Total Likes",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"Server-side logic and data consistency","home.todo.item8.subitem1":"User profile synchronization (onUserProfileUpdate)","home.todo.item8.subitem2":"Like/comment count synchronization","home.todo.item8.subitem3":"Cleanup associated data on post deletion","home.todo.item8.subitem4":"Notification triggers and delivery","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese",공사중메시지:"This page is under construction",공사중설명_채팅목록:"The chat list feature is currently under development and will be updated soon.",공사중설명_설정:"The settings feature is currently under development and will be updated soon.",공사중설명_게시물상세:"The post detail view feature is currently under development and will be updated soon.",공사중설명_앱정보:"The about page is currently under development and will be updated soon.",공사중설명_도움말:"The help page is currently under development and will be updated soon.",공사중설명_이용약관:"The terms of service page is currently under development and will be updated soon.",공사중설명_개인정보:"The privacy policy page is currently under development and will be updated soon.",공사중설명_문의하기:"The contact page is currently under development and will be updated soon.",메뉴로돌아가기:"Back to Menu",페이지선택:"Select a page to navigate to below",사용자프로필:"User Profile",게시물상세예시:"Post Detail (e.g., ID:123)",채팅목록:"Chat List",테스트게시글생성:"[Dev] Generate Test Posts",로그인성공알림:`Login successful!
Phone: {phone}`,로그인실패:"Login failed: {error}",전화번호로로그인:"Sign in easily with your phone number.",로그인하셨습니다:"You are logged in as {phone}.",홈으로이동:"Go to Home",사용자목록로딩:"Loading user list...",등록된사용자없음:"No registered users yet.",사용자목록실패:"Failed to load user list.",더많은사용자로딩:"Loading more users...",모든사용자로딩완료:"All users have been loaded.",정보없음:"No information",사용자:"User",이름없음:"No name",나:"Me",가입일:"Joined on",프로필보기:"View Profile",프로필사진:"Profile Photo",사진업로드중:"Uploading photo...",사진업로드실패:"Failed to upload photo: {error}",다른사진작업중:"Another photo operation is in progress...",프로필사진제거중:"Removing profile photo...",프로필사진제거완료:"Profile photo has been removed.",프로필사진제거실패:"Failed to remove profile photo: {error}",프로필업데이트중:"Updating profile...",프로필업데이트완료:"Profile has been updated successfully.",프로필업데이트실패:"Failed to update profile: {error}",닉네임입력:"Enter your nickname",닉네임최대길이:"Maximum 50 characters",소개글:"Bio",소개글입력:"Tell us about yourself",소개글최대길이:"Maximum 200 characters",홈페이지:"Website",홈페이지입력:"Enter your website URL",GitHub:CI,GitHub입력:"Enter your GitHub profile URL",사진업로드:"Upload Photo",사진제거:"Remove Photo",저장하기:"Save Changes",저장중:"Saving...",테스트게시글생성타이틀:"📝 Generate Test Posts",테스트게시글생성설명:"Generate 100 fun test posts for each category, totaling 400 posts.",로그인필요메시지:"⚠️ Login required to use this feature.",로그인하러가기:"Go to Login",게시글생성시작:"Start Generating Posts",생성중:"Generating...",생성성공:"✅ Successfully generated {count} posts!",생성실패:"❌ Failed to generate posts: {error}",경고:"⚠️ Warning",경고메시지:"This will create {count} test posts. Only use for testing purposes.",진행상황:"Progress",생성된게시글수:"{count} of {total} posts created",로딩중:"Loading...",게시판설명:" for the latest news and share your opinions.",글쓰기:"Write",게시글없음:"No posts yet",첫게시글공유:"Share your first story and start the community.",새글작성2:"Write New Post",게시글로딩중:"Loading posts...",게시글로드실패:"Failed to load posts.",더많은게시글로딩:"Loading more posts...",모든게시글확인:"All posts have been loaded.",새게시글작성:"Write New Post",카테고리:"Category",카테고리선택:"Select Category",카테고리선택필요:"Please select a category.",제목:"Title",제목입력:"Enter title",제목입력필요:"Please enter a title.",내용:"Content",내용입력:"Enter content",내용입력필요:"Please enter content.",전송:"Send",전송중:"Sending...",게시글작성완료:"Post has been created.",게시글저장실패:"Failed to save post: {error}",게시글저장중오류:"An error occurred while saving the post.",로그인정보확인불가:"Could not verify login information.",좋아요실패:"An error occurred while processing like.",이미좋아요:"You already liked this post.",댓글작성:"Write Comment",댓글내용입력:"Enter comment content",댓글이작성되었습니다:"Comment has been created.",댓글작성실패:"Failed to create comment: {error}",댓글내용입력필요:"Please enter comment content.","error.unknown":"An unknown error occurred.","error.network":"Please check your network connection.","error.offline":"No internet connection.","error.auth.invalidEmail":"Invalid email format.","error.auth.userDisabled":"This account has been disabled.","error.auth.userNotFound":"User not found.","error.auth.wrongPassword":"Incorrect password.","error.auth.emailAlreadyInUse":"This email is already in use.","error.auth.weakPassword":"Password is too weak. (Minimum 6 characters)","error.auth.operationNotAllowed":"This operation is not allowed.","error.auth.tooManyRequests":"Too many requests. Please try again later.","error.auth.invalidVerificationCode":"Invalid verification code.","error.auth.invalidPhoneNumber":"Invalid phone number.","error.auth.missingVerificationCode":"Please enter verification code.","error.auth.sessionExpired":"Session expired. Please log in again.","error.auth.requiresRecentLogin":"Please log in again for security.","error.auth.credentialAlreadyInUse":"This credential is already in use by another account.","error.db.permissionDenied":"You don't have permission to perform this action.","error.db.authenticationRequired":"Please log in first.","error.db.networkError":"Database connection error.","error.storage.unauthorized":"No permission to access file.","error.storage.bucketNotFound":"Storage bucket not found.","error.storage.invalidArgument":"Invalid argument.","error.storage.objectNotFound":"File not found.","error.storage.retryLimitExceeded":"File upload error. Please try again.","error.storage.quotaExceeded":"Storage quota exceeded.","error.storage.canceled":"File upload canceled."},SI={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",신고:"신고",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",바이브코딩SED:"바이브 코딩 - SED",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",전체댓글:"전체 댓글",전체좋아요:"전체 좋아요",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다. 자세히보기...","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"모든 것을 실시간 업데이트","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 (한국 바이브 보스) - 소셜 네트워크 서비스 웹/앱 개발","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"서버 측 로직 및 데이터 일관성 보장","home.todo.item8.subitem1":"사용자 프로필 동기화 (onUserProfileUpdate)","home.todo.item8.subitem2":"좋아요/댓글 개수 동기화","home.todo.item8.subitem3":"게시글 삭제 시 연관 데이터 정리","home.todo.item8.subitem4":"알림 트리거 및 전송","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",공사중메시지:"이 페이지는 공사중입니다",공사중설명_채팅목록:"채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_설정:"설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_게시물상세:"게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_앱정보:"앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_도움말:"도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_이용약관:"이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_개인정보:"개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_문의하기:"문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",메뉴로돌아가기:"메뉴로 돌아가기",페이지선택:"아래에서 이동할 페이지를 선택하세요",사용자프로필:"사용자 프로필",게시물상세예시:"게시물 상세 (예: ID:123)",채팅목록:"채팅 목록",테스트게시글생성:"[개발] 테스트 게시글 생성",로그인성공알림:`로그인 성공!
전화번호: {phone}`,로그인실패:"로그인 실패: {error}",전화번호로로그인:"전화번호로 간편하게 로그인하세요.",로그인하셨습니다:"{phone}로 로그인하셨습니다.",홈으로이동:"홈으로 이동",게시물상세:"게시물 상세",정보없음:"정보 없음",이름없음:"이름 없음",가입일:"가입일",프로필보기:"프로필 보기",사용자목록로딩:"사용자 목록을 불러오는 중...",등록된사용자없음:"등록된 사용자가 없습니다.",사용자목록실패:"사용자 목록을 불러오는데 실패했습니다.",더많은사용자로딩:"더 많은 사용자를 불러오는 중...",모든사용자로딩완료:"모든 사용자를 불러왔습니다.",다른사용자프로필:"다른 사용자 프로필:",프로필사진:"프로필 사진",프로필사진변경:"프로필 사진 변경",프로필사진추가:"프로필 사진 추가",프로필사진제거:"프로필 사진 제거",프로필사진클릭변경:"프로필 사진을 클릭하여 변경",사진저장중:"사진을 저장하는 중입니다...",닉네임입력:"닉네임을 입력하세요",닉네임헬퍼:"최대 50자까지 입력할 수 있습니다",선택하지않음:"선택하지 않음",남자:"남자",여자:"여자",생년월일헬퍼:"YYYY-MM-DD 형식으로 선택해주세요",저장중:"저장 중...",다른사진작업중:"다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",로그인후이용:"로그인 후 이용해주세요.",이미지파일만:"이미지 파일만 선택 가능합니다.",파일크기제한:"파일 크기는 5MB 이하여야 합니다.",프로필사진제거됨:"프로필 사진이 제거되었습니다.",사진제거실패:"사진 제거 실패: {error}",프로필사진저장됨:"프로필 사진이 저장되었습니다.",사진저장실패:"사진 저장 실패: {error}",프로필업데이트성공:"프로필이 성공적으로 업데이트되었습니다!",프로필업데이트오류:"오류: {error}",테스트데이터생성:"테스트 데이터 생성",테스트게시글생성타이틀:"📝 테스트 게시글 생성",테스트게시글설명:"각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",로그인하러가기:"로그인하러 가기",게시글생성시작:"게시글 생성 시작",실행로그:"실행 로그",완료게시판확인:"✅ 완료! 게시판 페이지에서 확인해보세요.",사용자:"사용자",로딩중:"로딩 중...",게시판설명:"에서 최신 소식을 확인하고 의견을 나눠보세요.",글쓰기:"글쓰기",게시글없음:"아직 등록된 게시글이 없어요",첫게시글공유:"첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",새글작성2:"새 글 작성하기",게시글로딩중:"게시글을 불러오는 중입니다...",게시글로드실패:"게시글을 불러오는 중 문제가 발생했습니다.",더많은게시글로딩:"더 많은 게시글을 불러오는 중...",모든게시글확인:"모든 게시글을 확인했습니다.",새게시글작성:"새 게시글 작성",카테고리:"카테고리",카테고리선택:"카테고리 선택",카테고리선택필요:"카테고리를 선택해주세요.",제목:"제목",제목입력:"제목을 입력하세요",제목입력필요:"제목을 입력해주세요.",내용:"내용",내용입력:"내용을 입력하세요",내용입력필요:"내용을 입력해주세요.",전송:"전송",전송중:"전송 중...",게시글작성완료:"게시글이 작성되었습니다.",게시글저장실패:"게시글 저장 실패: {error}",게시글저장중오류:"게시글 저장 중 오류가 발생했습니다.",로그인정보확인불가:"로그인 정보를 확인할 수 없습니다.",좋아요실패:"좋아요 처리 중 오류가 발생했습니다.",이미좋아요:"이미 좋아요를 눌렀습니다.",댓글작성:"댓글 작성",댓글내용입력:"댓글 내용을 입력하세요",댓글이작성되었습니다:"댓글이 작성되었습니다.",댓글작성실패:"댓글 작성 실패: {error}",댓글내용입력필요:"댓글 내용을 입력해주세요.",댓글더보기:"더 보기 (총 {count}개)",모든댓글보기:"모든 댓글 보기",댓글숨기기:"댓글 숨기기",답글:"답글",좋아요를하였습니다:"좋아요를 하였습니다.",좋아요를취소했습니다:"좋아요를 취소했습니다.","error.unknown":"알 수 없는 오류가 발생했습니다.","error.network":"네트워크 연결을 확인해주세요.","error.offline":"인터넷 연결이 없습니다.","error.auth.invalidEmail":"올바른 이메일 형식이 아닙니다.","error.auth.userDisabled":"비활성화된 계정입니다.","error.auth.userNotFound":"사용자를 찾을 수 없습니다.","error.auth.wrongPassword":"비밀번호가 올바르지 않습니다.","error.auth.emailAlreadyInUse":"이미 사용 중인 이메일입니다.","error.auth.weakPassword":"비밀번호가 너무 약합니다. (최소 6자 이상)","error.auth.operationNotAllowed":"이 작업은 허용되지 않습니다.","error.auth.tooManyRequests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","error.auth.invalidVerificationCode":"잘못된 인증 코드입니다.","error.auth.invalidPhoneNumber":"올바른 전화번호가 아닙니다.","error.auth.missingVerificationCode":"인증 코드를 입력해주세요.","error.auth.sessionExpired":"세션이 만료되었습니다. 다시 로그인해주세요.","error.auth.requiresRecentLogin":"보안을 위해 다시 로그인해주세요.","error.auth.credentialAlreadyInUse":"이미 다른 계정에서 사용 중인 인증 정보입니다.","error.db.permissionDenied":"이 작업을 수행할 권한이 없습니다.","error.db.authenticationRequired":"먼저 로그인해주세요.","error.db.networkError":"데이터베이스 연결 중 오류가 발생했습니다.","error.storage.unauthorized":"파일 접근 권한이 없습니다.","error.storage.bucketNotFound":"저장소를 찾을 수 없습니다.","error.storage.invalidArgument":"올바르지 않은 인자입니다.","error.storage.objectNotFound":"파일을 찾을 수 없습니다.","error.storage.retryLimitExceeded":"파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.","error.storage.quotaExceeded":"저장 공간이 부족합니다.","error.storage.canceled":"파일 업로드가 취소되었습니다.","dev.history.title":"📝 스터디 로그","dev.history.subtitle":"한바보 프로젝트의 개발 진행 현황을 기록합니다.","dev.history.updateIndicator":"최신 업데이트 자동 동기화","dev.history.seminar1.date":"2025-10-27 (첫 번째 세미나)","dev.history.seminar1.completed":"✅ 구현 완료","dev.history.seminar1.item1":"기본 프로젝트 셋업 (Next.js 16, React 19, TypeScript)","dev.history.seminar1.item2":"Firebase 설정 및 인증 구현","dev.history.seminar1.item3":"이메일/비밀번호 회원가입 & 로그인","dev.history.seminar1.item4":"회원 정보 수정 (프로필 업데이트)","dev.history.seminar1.item5":"1:1 채팅 기능 (실시간 메시지 동기화)","dev.history.seminar1.learned":"💡 배운 것들","dev.history.seminar1.learned1":"Next.js App Router 구조 이해","dev.history.seminar1.learned2":"Firebase Authentication 사용법","dev.history.seminar1.learned3":"Firebase Realtime Database 실시간 동기화","dev.history.seminar1.learned4":"Git PR을 통한 협업 방식","dev.history.seminar2.date":"2025-11-03 (두 번째 세미나)","dev.history.seminar2.completed":"✅ 기술 스택 전환 완료","dev.history.seminar2.item1":"React.js + Next.js + Firebase + Supabase → Svelte + Firebase로 전환","dev.history.seminar2.item2":"Svelte 5 Custom Elements 기반 아키텍처 구축","dev.history.seminar2.item3":"Web Components로 프레임워크 독립적인 구조 구현","dev.history.seminar2.item4":"Firebase만으로 모든 기능 구현 (Supabase 제거)","dev.history.seminar2.item5":"전체 프로젝트 리팩토링 및 재구성","dev.history.seminar2.learned":"💡 배운 것들","dev.history.seminar2.learned1":"Svelte 5 Runes ($state, $derived, $effect) 활용법","dev.history.seminar2.learned2":"Web Components의 장점과 재사용성","dev.history.seminar2.learned3":"Firebase만으로 충분한 기능 구현 가능","dev.history.seminar2.learned4":"더 가볍고 빠른 개발 환경 구축","dev.history.seminar3.date":"2025-11-04","dev.history.seminar3.completed":"✅ 핵심 기능 구현 완료","dev.history.seminar3.item1":"Svelte 5를 JavaScript에서 TypeScript로 전환","dev.history.seminar3.item2":"게시판 좋아요 기능 구현","dev.history.seminar3.item3":"댓글 작성, 수정, 삭제 기능 구현","dev.history.seminar3.item4":"댓글 좋아요 기능 추가","dev.history.seminar3.item5":"통계 기능 추가 (사용자 수, 게시글 수, 댓글 수 등)","dev.history.seminar3.learned":"💡 배운 것들","dev.history.seminar3.learned1":"TypeScript의 타입 안정성이 주는 바이브코딩의 코드 생성 향상","dev.history.seminar3.learned2":"바이브코딩의 한계를 극복하기 위한 Spec-Exact Development (SED) 개념 창조: LLM이 충분히 이해할 수 있는 상세한 스펙(DB 구조, 인증 방식, 암호화, 비밀번호 확인란 등) 제공. LLM이 작업 전 스펙 점수를 매겨 90점 이상일 때만 개발 시작","dev.history.seminar3.learned3":"Firebase increment()로 동시성 안전한 카운터 구현","dev.history.seminar3.learned4":"실시간 데이터 동기화를 활용한 통계 기능","dev.history.seminar3.learned5":"사용자 경험을 고려한 좋아요 및 댓글 UX 설계","dev.history.upcoming":"더 많은 스터디 로그가 추가될 예정입니다..."},AI="GitHub",PI={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",신고:"通報",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",전체댓글:"総コメント数",전체좋아요:"総いいね数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"サーバー側ロジックとデータ整合性の保証","home.todo.item8.subitem1":"ユーザープロフィール同期 (onUserProfileUpdate)","home.todo.item8.subitem2":"いいね/コメント数の同期","home.todo.item8.subitem3":"投稿削除時の関連データクリーンアップ","home.todo.item8.subitem4":"通知トリガーと配信","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語",공사중메시지:"このページは工事中です",공사중설명_채팅목록:"チャットリスト機能は現在開発中で、まもなく更新される予定です。",공사중설명_설정:"設定機能は現在開発中で、まもなく更新される予定です。",공사중설명_게시물상세:"投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",공사중설명_앱정보:"アプリ情報ページは現在開発中で、まもなく更新される予定です。",공사중설명_도움말:"ヘルプページは現在開発中で、まもなく更新される予定です。",공사중설명_이용약관:"利用規約ページは現在開発中で、まもなく更新される予定です。",공사중설명_개인정보:"プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",공사중설명_문의하기:"お問い合わせページは現在開発中で、まもなく更新される予定です。",메뉴로돌아가기:"メニューに戻る",페이지선택:"移動するページを下から選択してください",사용자프로필:"ユーザープロフィール",게시물상세예시:"投稿詳細 (例: ID:123)",채팅목록:"チャットリスト",테스트게시글생성:"[開発] テスト投稿生成",로그인성공알림:`ログイン成功!
電話番号: {phone}`,로그인실패:"ログイン失敗: {error}",전화번호로로그인:"電話番号で簡単にログインしてください。",로그인하셨습니다:"{phone}でログインしています。",홈으로이동:"ホームへ移動",사용자목록로딩:"ユーザーリストを読み込み中...",등록된사용자없음:"登録されたユーザーがいません。",사용자목록실패:"ユーザーリストの読み込みに失敗しました。",더많은사용자로딩:"さらにユーザーを読み込み中...",모든사용자로딩완료:"すべてのユーザーを読み込みました。",정보없음:"情報なし",사용자:"ユーザー",이름없음:"名前なし",나:"私",가입일:"登録日",프로필보기:"プロフィール表示",프로필사진:"プロフィール写真",사진업로드중:"写真をアップロード中...",사진업로드실패:"写真のアップロードに失敗しました: {error}",다른사진작업중:"他の写真操作が進行中です...",프로필사진제거중:"プロフィール写真を削除中...",프로필사진제거완료:"プロフィール写真を削除しました。",프로필사진제거실패:"プロフィール写真の削除に失敗しました: {error}",프로필업데이트중:"プロフィールを更新中...",프로필업데이트완료:"プロフィールを正常に更新しました。",프로필업데이트실패:"プロフィールの更新に失敗しました: {error}",닉네임입력:"ニックネームを入力してください",닉네임최대길이:"最大50文字まで入力できます",소개글:"自己紹介",소개글입력:"自己紹介を入力してください",소개글최대길이:"最大200文字まで入力できます",홈페이지:"ウェブサイト",홈페이지입력:"ウェブサイトURLを入力してください",GitHub:AI,GitHub입력:"GitHubプロフィールURLを入力してください",사진업로드:"写真をアップロード",사진제거:"写真を削除",저장하기:"変更を保存",저장중:"保存中...",테스트게시글생성타이틀:"📝 テスト投稿生成",테스트게시글생성설명:"各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",로그인필요메시지:"⚠️ この機能を使用するにはログインが必要です。",로그인하러가기:"ログインへ",게시글생성시작:"投稿生成開始",생성중:"生成中...",생성성공:"✅ {count}件の投稿を正常に生成しました！",생성실패:"❌ 投稿の生成に失敗しました: {error}",경고:"⚠️ 警告",경고메시지:"{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",진행상황:"進行状況",생성된게시글수:"{total}件中{count}件の投稿を作成",로딩중:"読み込み中...",게시판설명:"の最新ニュースを確認し、意見を共有してください。",글쓰기:"書く",게시글없음:"まだ投稿がありません",첫게시글공유:"最初のストーリーを共有してコミュニティを始めましょう。",새글작성2:"新規投稿を書く",게시글로딩중:"投稿を読み込み中...",게시글로드실패:"投稿の読み込みに失敗しました。",더많은게시글로딩:"さらに多くの投稿を読み込み中...",모든게시글확인:"すべての投稿を読み込みました。",새게시글작성:"新規投稿を書く",카테고리:"カテゴリ",카테고리선택:"カテゴリを選択",카테고리선택필요:"カテゴリを選択してください。",제목:"タイトル",제목입력:"タイトルを入力してください",제목입력필요:"タイトルを入力してください。",내용:"コンテンツ",내용입력:"コンテンツを入力してください",내용입력필요:"コンテンツを入力してください。",전송:"送信",전송중:"送信中...",게시글작성완료:"投稿が作成されました。",게시글저장실패:"投稿の保存に失敗しました: {error}",게시글저장중오류:"投稿の保存中にエラーが発生しました。",로그인정보확인불가:"ログイン情報を確認できませんでした。",좋아요실패:"いいね処理中にエラーが発生しました。",이미좋아요:"すでにいいねしています。",댓글작성:"コメントを書く",댓글내용입력:"コメント内容を入力してください",댓글이작성되었습니다:"コメントが作成されました。",댓글작성실패:"コメント作成に失敗しました: {error}",댓글내용입력필요:"コメント内容を入力してください。","error.unknown":"不明なエラーが発生しました。","error.network":"ネットワーク接続を確認してください。","error.offline":"インターネット接続がありません。","error.auth.invalidEmail":"正しいメール形式ではありません。","error.auth.userDisabled":"無効なアカウントです。","error.auth.userNotFound":"ユーザーが見つかりません。","error.auth.wrongPassword":"パスワードが正しくありません。","error.auth.emailAlreadyInUse":"すでに使用されているメールアドレスです。","error.auth.weakPassword":"パスワードが弱すぎます。（最低6文字以上）","error.auth.operationNotAllowed":"この操作は許可されていません。","error.auth.tooManyRequests":"リクエストが多すぎます。しばらくしてから再試行してください。","error.auth.invalidVerificationCode":"無効な認証コードです。","error.auth.invalidPhoneNumber":"正しい電話番号ではありません。","error.auth.missingVerificationCode":"認証コードを入力してください。","error.auth.sessionExpired":"セッションが期限切れです。再度ログインしてください。","error.auth.requiresRecentLogin":"セキュリティのため、再度ログインしてください。","error.auth.credentialAlreadyInUse":"すでに他のアカウントで使用されている認証情報です。","error.db.permissionDenied":"この操作を実行する権限がありません。","error.db.authenticationRequired":"まずログインしてください。","error.db.networkError":"データベース接続中にエラーが発生しました。","error.storage.unauthorized":"ファイルへのアクセス権限がありません。","error.storage.bucketNotFound":"ストレージが見つかりません。","error.storage.invalidArgument":"無効な引数です。","error.storage.objectNotFound":"ファイルが見つかりません。","error.storage.retryLimitExceeded":"ファイルアップロード中にエラーが発生しました。再試行してください。","error.storage.quotaExceeded":"ストレージ容量が不足しています。","error.storage.canceled":"ファイルアップロードがキャンセルされました。"},RI="GitHub",NI={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",신고:"举报",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",전체댓글:"总评论",전체좋아요:"总点赞",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"服务器端逻辑和数据一致性保障","home.todo.item8.subitem1":"用户资料同步 (onUserProfileUpdate)","home.todo.item8.subitem2":"点赞/评论数同步","home.todo.item8.subitem3":"帖子删除时清理关联数据","home.todo.item8.subitem4":"通知触发和发送","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文",공사중메시지:"此页面正在建设中",공사중설명_채팅목록:"聊天列表功能正在开发中，即将更新。",공사중설명_설정:"设置功能正在开发中，即将更新。",공사중설명_게시물상세:"帖子详情查看功能正在开发中，即将更新。",공사중설명_앱정보:"应用信息页面正在开发中，即将更新。",공사중설명_도움말:"帮助页面正在开发中，即将更新。",공사중설명_이용약관:"使用条款页面正在开发中，即将更新。",공사중설명_개인정보:"隐私政策页面正在开发中，即将更新。",공사중설명_문의하기:"联系我们页面正在开发中，即将更新。",메뉴로돌아가기:"返回菜单",페이지선택:"从下方选择要导航的页面",사용자프로필:"用户资料",게시물상세예시:"帖子详情 (例: ID:123)",채팅목록:"聊天列表",테스트게시글생성:"[开发] 生成测试帖子",로그인성공알림:`登录成功！
手机号: {phone}`,로그인실패:"登录失败: {error}",전화번호로로그인:"使用手机号轻松登录。",로그인하셨습니다:"您已使用 {phone} 登录。",홈으로이동:"前往首页",사용자목록로딩:"正在加载用户列表...",등록된사용자없음:"尚无注册用户。",사용자목록실패:"加载用户列表失败。",더많은사용자로딩:"正在加载更多用户...",모든사용자로딩완료:"已加载所有用户。",정보없음:"无信息",사용자:"用户",이름없음:"无名称",나:"我",가입일:"注册日期",프로필보기:"查看资料",프로필사진:"头像",사진업로드중:"正在上传照片...",사진업로드실패:"照片上传失败: {error}",다른사진작업중:"另一个照片操作正在进行中...",프로필사진제거중:"正在删除头像...",프로필사진제거완료:"头像已删除。",프로필사진제거실패:"删除头像失败: {error}",프로필업데이트중:"正在更新资料...",프로필업데이트완료:"资料更新成功。",프로필업데이트실패:"资料更新失败: {error}",닉네임입력:"输入您的昵称",닉네임최대길이:"最多可输入50个字符",소개글:"个人简介",소개글입력:"请输入自我介绍",소개글최대길이:"最多可输入200个字符",홈페이지:"网站",홈페이지입력:"请输入您的网站URL",GitHub:RI,GitHub입력:"请输入您的GitHub个人资料URL",사진업로드:"上传照片",사진제거:"删除照片",저장하기:"保存更改",저장중:"保存中...",테스트게시글생성타이틀:"📝 生成测试帖子",테스트게시글생성설명:"每个类别生成100条有趣的测试帖子，共400条。",로그인필요메시지:"⚠️ 使用此功能需要登录。",로그인하러가기:"前往登录",게시글생성시작:"开始生成帖子",생성중:"生成中...",생성성공:"✅ 成功生成了 {count} 条帖子！",생성실패:"❌ 生成帖子失败: {error}",경고:"⚠️ 警告",경고메시지:"这将创建 {count} 条测试帖子。仅用于测试目的。",진행상황:"进度",생성된게시글수:"已创建 {count} / {total} 条帖子",로딩중:"加载中...",게시판설명:"的最新新闻，分享您的意见。",글쓰기:"写作",게시글없음:"还没有帖子",첫게시글공유:"分享您的第一个故事并开始社区。",새글작성2:"写新帖子",게시글로딩중:"正在加载帖子...",게시글로드실패:"加载帖子失败。",더많은게시글로딩:"正在加载更多帖子...",모든게시글확인:"已加载所有帖子。",새게시글작성:"写新帖子",카테고리:"类别",카테고리선택:"选择类别",카테고리선택필요:"请选择一个类别。",제목:"标题",제목입력:"输入标题",제목입력필요:"请输入标题。",내용:"内容",내용입력:"输入内容",내용입력필요:"请输入内容。",전송:"发送",전송중:"发送中...",게시글작성완료:"帖子已创建。",게시글저장실패:"帖子保存失败: {error}",게시글저장중오류:"保存帖子时出错。",로그인정보확인불가:"无法验证登录信息。",좋아요실패:"处理点赞时出错。",이미좋아요:"您已经点赞过了。",댓글작성:"写评论",댓글내용입력:"请输入评论内容",댓글이작성되었습니다:"评论已创建。",댓글작성실패:"评论创建失败: {error}",댓글내용입력필요:"请输入评论内容。","error.unknown":"发生未知错误。","error.network":"请检查网络连接。","error.offline":"没有互联网连接。","error.auth.invalidEmail":"邮箱格式不正确。","error.auth.userDisabled":"账户已被禁用。","error.auth.userNotFound":"找不到用户。","error.auth.wrongPassword":"密码不正确。","error.auth.emailAlreadyInUse":"该邮箱已被使用。","error.auth.weakPassword":"密码太弱。（至少6个字符）","error.auth.operationNotAllowed":"此操作不被允许。","error.auth.tooManyRequests":"请求过多。请稍后再试。","error.auth.invalidVerificationCode":"验证码无效。","error.auth.invalidPhoneNumber":"电话号码格式不正确。","error.auth.missingVerificationCode":"请输入验证码。","error.auth.sessionExpired":"会话已过期。请重新登录。","error.auth.requiresRecentLogin":"为了安全，请重新登录。","error.auth.credentialAlreadyInUse":"此凭证已被其他账户使用。","error.db.permissionDenied":"您没有执行此操作的权限。","error.db.authenticationRequired":"请先登录。","error.db.networkError":"数据库连接时出错。","error.storage.unauthorized":"没有文件访问权限。","error.storage.bucketNotFound":"找不到存储桶。","error.storage.invalidArgument":"参数无效。","error.storage.objectNotFound":"找不到文件。","error.storage.retryLimitExceeded":"文件上传出错。请重试。","error.storage.quotaExceeded":"存储空间不足。","error.storage.canceled":"文件上传已取消。"},$l={en:TI,ko:SI,ja:PI,zh:NI};function Ec(n){const e=(n??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Km(){if(typeof navigator>"u")return"en";const n=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of n){const t=Ec(e);if(t!=="en")return t}return"en"}function LI(n){let e=Ec(n)||Km();function t(i){e=Ec(i)}function r(){return e}function s(i,o={}){return(($l[e]??$l.en)[i]??$l.en[i]??i).replace(/\{(\w+)\}/g,(c,h)=>o[h]??"")}return{t:s,setLocale:t,getLocale:r}}const eu="sns-web-locale",Ym=[{code:"ko",label:"🇰🇷 한국어"},{code:"en",label:"🇺🇸 English"},{code:"ja",label:"🇯🇵 日本語"},{code:"zh",label:"🇨🇳 中文"}];function DI(){if(typeof localStorage>"u")return null;const n=localStorage.getItem(eu);if(!n)return null;const e=Ym.find(t=>t.code===n);return e?e.code:null}const Qm=DI()??Km(),Ta=LI(Qm);typeof localStorage<"u"&&localStorage.setItem(eu,Ta.getLocale());const tu=Es(Qm);function $I(n){Ta.setLocale(n);const e=Ta.getLocale();tu.set(e),typeof localStorage<"u"&&localStorage.setItem(eu,e)}const St=Yb(tu,n=>(e,t={})=>Ta.t(e,t)),Jm=Es("");function An(n){Jm.set(n)}function bn(n){window.history.pushState({},"",n),window.dispatchEvent(new PopStateEvent("popstate"))}var OI=R('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),qI=R('<img alt="프로필" class="avatar-image svelte-38psow"/>'),MI=R('<div class="avatar-fallback svelte-38psow"> </div>'),zI=R('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <button type="button" class="dropdown-item svelte-38psow"><!> <span> </span></button> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),UI=R('<img class="avatar-image svelte-38psow"/>'),FI=R('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),jI=R('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),BI=R('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"> </button> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),VI=R('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><button type="button" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></button> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const HI={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function WI(n,e){rt(e,!0),tt(n,HI);const t=()=>Xe(Jm,"$pageTitle",i),r=()=>Xe(sl,"$user",i),s=()=>Xe(St,"$t",i),[i,o]=yt();let a=ie(!1);function l(C){bn(C),y(a,!1)}async function c(){if((await II()).success){const E=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(E)}y(a,!1)}function h(){return Ae.data?.displayName?Ae.data.displayName.charAt(0).toUpperCase():Ae.email?Ae.email.charAt(0).toUpperCase():"U"}function m(){y(a,!v(a))}function f(C){const E=document.querySelector(".dropdown-menu"),T=document.querySelector(".dropdown-trigger"),L=C.target;E&&!E.contains(L)&&!T?.contains(L)&&y(a,!1)}zt(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}));var _=VI(),g=u(_),w=u(g),x=u(w);x.__click=()=>l("/");var I=p(x,2);{var S=C=>{var E=OI(),T=u(E),L=u(T,!0);d(T),d(E),U(()=>b(L,t())),k(C,E)};Y(I,C=>{t()&&C(S)})}d(w);var P=p(w,2),D=u(P);{var B=C=>{var E=jI(),T=he(E),L=u(T);L.__click=()=>l("/post/list");var $=u(L);Oi($,{size:16});var F=p($,2),G=u(F,!0);d(F),d(L);var X=p(L,2);X.__click=()=>l("/chat/list");var H=u(X);zr(H,{size:16});var le=p(H,2),pe=u(le,!0);d(le),d(X);var oe=p(X,2);oe.__click=()=>l("/user/list");var te=u(oe);vo(te,{size:16});var j=p(te,2),K=u(j,!0);d(j),d(oe);var Z=p(oe,2),re=u(Z);re.__click=m;var N=u(re),A=u(N);{var M=we=>{var ye=qI();U(()=>Le(ye,"src",Ae.data.photoUrl)),k(we,ye)},q=we=>{var ye=MI(),Oe=u(ye,!0);d(ye),U(ee=>b(Oe,ee),[h]),k(we,ye)};Y(A,we=>{Ae.data?.photoUrl?we(M):we(q,!1)})}d(N);var J=p(N,2),O=u(J,!0);d(J),d(re);var V=p(re,2);{var W=we=>{var ye=zI(),Oe=u(ye),ee=u(Oe,!0);d(Oe);var xe=p(Oe,4);xe.__click=()=>l("/user/profile");var Ve=u(xe);Hr(Ve,{size:16});var Ke=p(Ve,2),Be=u(Ke,!0);d(Ke),d(xe);var dt=p(xe,4);dt.__click=c;var ct=u(dt);Um(ct,{size:16});var bt=p(ct,2),ae=u(bt,!0);d(bt),d(dt),d(ye),U((fe,ve,ke)=>{b(ee,fe),b(Be,ve),b(ae,ke)},[()=>s()("내계정"),()=>s()("프로필수정"),()=>s()("로그아웃")]),k(we,ye)};Y(V,we=>{v(a)&&we(W)})}d(Z);var me=p(Z,2);me.__click=()=>l("/menu");var ne=u(me);qi(ne,{size:24}),d(me),d(T);var de=p(T,2),se=u(de);se.__click=()=>l("/post/list");var Pe=u(se);Oi(Pe,{size:20}),d(se);var Ne=p(se,2);Ne.__click=()=>l("/user/list");var qe=u(Ne);vo(qe,{size:20}),d(Ne);var Se=p(Ne,2);Se.__click=()=>l("/chat/list");var Me=u(Se);zr(Me,{size:20}),d(Se);var Re=p(Se,2);Re.__click=()=>l("/user/profile");var De=u(Re),it=u(De);{var nt=we=>{var ye=UI();U(Oe=>{Le(ye,"src",Ae.data.photoUrl),Le(ye,"alt",Oe)},[()=>s()("프로필")]),k(we,ye)},Ge=we=>{var ye=FI(),Oe=u(ye,!0);d(ye),U(ee=>b(Oe,ee),[h]),k(we,ye)};Y(it,we=>{Ae.data?.photoUrl?we(nt):we(Ge,!1)})}d(De),d(Re);var ze=p(Re,2);ze.__click=()=>l("/menu");var Ce=u(ze);qi(Ce,{size:24}),d(ze),d(de),U((we,ye,Oe,ee,xe,Ve,Ke,Be,dt)=>{b(G,we),b(pe,ye),b(K,Oe),b(O,Ae.data?.displayName||Ae.email),Le(me,"title",ee),Le(se,"title",xe),Le(Ne,"title",Ve),Le(Se,"title",Ke),Le(Re,"title",Be),Le(ze,"title",dt)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("사용자찾기"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("사용자찾기"),()=>s()("채팅"),()=>s()("프로필"),()=>s()("메뉴")]),k(C,E)},z=C=>{var E=BI(),T=he(E),L=u(T);L.__click=()=>l("/post/list");var $=u(L);Oi($,{size:16});var F=p($,2),G=u(F,!0);d(F),d(L);var X=p(L,2);X.__click=()=>l("/chat/list");var H=u(X);zr(H,{size:16});var le=p(H,2),pe=u(le,!0);d(le),d(X);var oe=p(X,2);oe.__click=()=>l("/user/login");var te=u(oe,!0);d(oe);var j=p(oe,2);j.__click=()=>l("/menu");var K=u(j);qi(K,{size:20}),d(j),d(T);var Z=p(T,2),re=u(Z);re.__click=()=>l("/post/list");var N=u(re);Oi(N,{size:20}),d(re);var A=p(re,2);A.__click=()=>l("/chat/list");var M=u(A);zr(M,{size:20}),d(A);var q=p(A,2);q.__click=()=>l("/user/login");var J=u(q);Hr(J,{size:20}),d(q);var O=p(q,2);O.__click=()=>l("/menu");var V=u(O);qi(V,{size:24}),d(O),d(Z),U((W,me,ne,de,se,Pe,Ne,qe)=>{b(G,W),b(pe,me),b(te,ne),Le(j,"title",de),Le(re,"title",se),Le(A,"title",Pe),Le(q,"title",Ne),Le(O,"title",qe)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴")]),k(C,E)};Y(D,C=>{r()?C(B):C(z,!1)})}d(P),d(g),d(_),k(n,_),st(),o()}vt(["click"]);customElements.define("sns-topbar",ge(WI,{},[],[],!0));var GI=R('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>'),KI=R('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>',1),YI=R("<option> </option>"),QI=R('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const JI={hash:"svelte-najsij",code:`
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
  }`};function XI(n,e){rt(e,!1),tt(n,JI);const t=()=>Xe(St,"$t",i),r=()=>Xe(sl,"$user",i),s=()=>Xe(tu,"$locale",i),[i,o]=yt(),a=Ym;dn();var l=QI(),c=u(l),h=u(c),m=u(h,!0);d(h);var f=p(h,2),_=u(f);_.__click=()=>bn("/");var g=u(_);Mm(g,{size:20});var w=p(g,2),x=u(w,!0);d(w),d(_);var I=p(_,2);I.__click=()=>bn("/chat/room");var S=u(I);zr(S,{size:20});var P=p(S,2),D=u(P,!0);d(P),d(I);var B=p(I,2);B.__click=()=>bn("/user/list");var z=u(B);vo(z,{size:20});var C=p(z,2),E=u(C,!0);d(C),d(B);var T=p(B,2);T.__click=()=>bn("/user/profile");var L=u(T);Hr(L,{size:20});var $=p(L,2),F=u($,!0);d($),d(T);var G=p(T,2);G.__click=()=>bn("/post/list");var X=u(G);Zd(X,{size:20});var H=p(X,2),le=u(H,!0);d(H),d(G),d(f);var pe=p(f,4),oe=u(pe),te=u(oe,!0);d(oe);var j=p(oe,2),K=u(j);{var Z=Te=>{var _e=GI();_e.__click=()=>bn("/user/profile");var ue=u(_e);Hr(ue,{size:16});var Ye=p(ue,2),Ze=u(Ye,!0);d(Ye),d(_e),U(At=>b(Ze,At),[()=>t()("회원정보수정")]),k(Te,_e)},re=Te=>{var _e=KI(),ue=he(_e);ue.__click=()=>bn("/auth/login");var Ye=u(ue);zm(Ye,{size:16});var Ze=p(Ye,2),At=u(Ze,!0);d(Ze),d(ue);var Vt=p(ue,2);Vt.__click=()=>bn("/auth/signup");var gt=u(Vt);Hr(gt,{size:16});var Ut=p(gt,2),Ft=u(Ut,!0);d(Ut),d(Vt),U((Qt,Jt)=>{b(At,Qt),b(Ft,Jt)},[()=>t()("로그인"),()=>t()("회원가입")]),k(Te,_e)};Y(K,Te=>{r()?Te(Z):Te(re,!1)})}d(j),d(pe);var N=p(pe,4),A=u(N);A.__click=()=>bn("/user/list");var M=u(A);vo(M,{size:16});var q=p(M,2),J=u(q,!0);d(q),d(A);var O=p(A,2),V=p(u(O),2),W=u(V,!0);d(V);var me=p(V,2);kc(me,{size:12,class:"external-icon"}),d(O);var ne=p(O,2),de=u(ne);zr(de,{size:16});var se=p(de,2),Pe=u(se,!0);d(se);var Ne=p(se,2);kc(Ne,{size:12,class:"external-icon"}),d(ne);var qe=p(ne,2);qe.__click=()=>bn("/dev/history");var Se=u(qe);Om(Se,{size:16});var Me=p(Se,2),Re=u(Me,!0);d(Me),d(qe);var De=p(qe,2);De.__click=()=>bn("/dev/sed");var it=u(De);Gm(it,{size:16});var nt=p(it,2),Ge=u(nt,!0);d(nt),d(De),d(N);var ze=p(N,2),Ce=u(ze),we=u(Ce,!0);d(Ce);var ye=p(Ce,2),Oe=u(ye),ee=p(Oe,2);ee.__change=Te=>$I(Te.currentTarget.value),Gt(ee,5,()=>a,ur,(Te,_e)=>{var ue=YI(),Ye=u(ue,!0);d(ue);var Ze={};U(()=>{b(Ye,v(_e).label),Ze!==(Ze=v(_e).code)&&(ue.value=(ue.__value=v(_e).code)??"")}),k(Te,ue)}),d(ee);var xe;Bc(ee),d(ye),d(ze);var Ve=p(ze,2),Ke=u(Ve),Be=u(Ke),dt=u(Be,!0);d(Be);var ct=p(Be,2),bt=u(ct,!0);d(ct),d(Ke),d(Ve);var ae=p(Ve,2),fe=u(ae),ve=u(fe,!0),ke=p(ve,2);d(fe),d(ae),d(c),d(l),U((Te,_e,ue,Ye,Ze,At,Vt,gt,Ut,Ft,Qt,Jt,lr,Pn,qn,ft,nn,Pt)=>{b(m,Te),b(x,_e),b(D,ue),b(E,Ye),b(F,Ze),b(le,At),b(te,Vt),b(J,gt),b(W,Ut),b(Pe,Ft),b(Re,Qt),b(Ge,Jt),b(we,lr),Le(Oe,"aria-label",Pn),xe!==(xe=s())&&(ee.value=(ee.__value=s())??"",no(ee,s())),b(dt,qn),b(bt,ft),b(ve,nn),b(ke,` ${Pt??""}`)},[()=>t()("퀵메뉴"),()=>t()("홈"),()=>t()("채팅"),()=>t()("사용자목록"),()=>t()("내프로필"),()=>t()("게시판"),()=>t()("시작하기"),()=>t()("회원목록"),()=>t()("프로젝트GitHub"),()=>t()("한바보참여단톡방"),()=>t()("개발일지"),()=>t()("바이브코딩SED"),()=>t()("언어설정"),()=>t()("언어설정"),()=>t()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>t()("카피레프트"),()=>t()("AI소개")]),k(n,l),st(),o()}vt(["click","change"]);customElements.define("sns-left-sidebar",ge(XI,{},[],[],!0));var ZI=R('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const eC={hash:"svelte-3epon2",code:`\r
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
  }`};function tC(n,e){rt(e,!0),tt(n,eC);const t=()=>Xe(St,"$t",r),[r,s]=yt();let i=ie(Zt({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=ZI(),a=u(o),l=u(a),c=u(l,!0);d(l);var h=p(l,2),m=u(h),f=u(m),_=u(f);Hr(_,{size:20}),d(f);var g=p(f,2),w=u(g),x=u(w,!0);d(w);var I=p(w,2),S=u(I,!0);d(I),d(g),d(m);var P=p(m,2),D=u(P),B=u(D);Hm(B,{size:20}),d(D);var z=p(D,2),C=u(z),E=u(C,!0);d(C);var T=p(C,2),L=u(T,!0);d(T),d(z),d(P);var $=p(P,2),F=u($),G=u(F);Zd(G,{size:20}),d(F);var X=p(F,2),H=u(X),le=u(H,!0);d(H);var pe=p(H,2),oe=u(pe,!0);d(pe);var te=p(pe,2),j=u(te,!0);d(te),d(X),d($);var K=p($,2),Z=u(K),re=u(Z);zr(re,{size:20}),d(Z);var N=p(Z,2),A=u(N),M=u(A,!0);d(A);var q=p(A,2),J=u(q,!0);d(q),d(N),d(K),d(h);var O=p(h,2),V=u(O,!0);d(O),d(a),d(o),U((W,me,ne,de,se,Pe,Ne)=>{b(c,W),b(x,me),b(S,v(i).totalUsers),b(E,ne),b(L,v(i).totalScore),b(le,de),b(oe,v(i).totalPosts),b(j,se),b(M,Pe),b(J,v(i).totalMessages),b(V,Ne)},[()=>t()("통계"),()=>t()("전체사용자"),()=>t()("전체점수"),()=>t()("전체글"),()=>t()("준비중"),()=>t()("채팅메시지"),()=>t()("통계실시간업데이트")]),k(n,o),st(),s()}customElements.define("sns-right-sidebar",ge(tC,{},[],[],!0));var nC=R('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const rC={hash:"svelte-um1xbq",code:`\r
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
  }`};function sC(n,e){tt(n,rC);var t=nC(),r=u(t),s=p(r,2),i=u(s);on(i,1,"left-sidebar svelte-um1xbq");var o=p(i,2),a=u(o);mt(a,e,"default",{}),d(o);var l=p(o,2);on(l,1,"right-sidebar svelte-um1xbq"),d(s),d(t),k(n,t)}customElements.define("sns-layout",ge(sC,{},["default"],[],!0));var iC=R('<div class="icon-container svelte-m3h71q"> </div>'),oC=R('<p class="hint-box svelte-m3h71q"> </p>'),aC=R('<p class="gpl-box svelte-m3h71q"> </p>'),lC=R('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),cC=R('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),dC=R('<div class="accordion svelte-m3h71q"></div>');const uC={hash:"svelte-m3h71q",code:`\r
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
  }`};function hC(n,e){rt(e,!0),tt(n,uC);let t=et(e,"items",7,"[]"),r=et(e,"type",7,"single"),s=et(e,"collapsible",7,!0),i=Js(()=>{try{const f=typeof t()=="string"?JSON.parse(t()):t();return Array.isArray(f)?f:[]}catch(f){return console.error("Failed to parse accordion items:",f),[]}}),o=Js(()=>{const f=s();return typeof f=="boolean"?f:typeof f=="string"?f!=="false":!0}),a=ie(Zt(new Set));function l(f){const _=new Set(v(a));r()==="single"?_.has(f)?v(o)&&_.delete(f):(_.clear(),_.add(f)):_.has(f)?_.delete(f):_.add(f),y(a,_,!0)}function c(f){return v(a).has(f)}var h={get items(){return t()},set items(f="[]"){t(f),Qe()},get type(){return r()},set type(f="single"){r(f),Qe()},get collapsible(){return s()},set collapsible(f=!0){s(f),Qe()}},m=dC();return Gt(m,21,()=>v(i),ur,(f,_,g)=>{var w=cC(),x=u(w);x.__click=()=>l(g);var I=u(x),S=u(I);{var P=$=>{var F=iC(),G=u(F,!0);d(F),U(()=>b(G,v(_).icon)),k($,F)};Y(S,$=>{v(_).icon&&$(P)})}var D=p(S,2),B=u(D,!0);d(D),d(I);var z=p(I,2);let C;var E=u(z);Xd(E,{size:20}),d(z),d(x);var T=p(x,2);{var L=$=>{var F=lC(),G=u(F),X=u(G,!0);d(G);var H=p(G,2);{var le=te=>{var j=oC(),K=u(j,!0);d(j),U(()=>b(K,v(_).hint)),k(te,j)};Y(H,te=>{v(_).hint&&te(le)})}var pe=p(H,2);{var oe=te=>{var j=aC(),K=u(j,!0);d(j),U(()=>b(K,v(_).gpl)),k(te,j)};Y(pe,te=>{v(_).gpl&&te(oe)})}d(F),U(()=>b(X,v(_).content)),k($,F)};Y(T,$=>{c(g)&&$(L)})}d(w),U(($,F)=>{Le(x,"aria-expanded",$),b(B,v(_).title),C=on(z,1,"chevron svelte-m3h71q",null,C,F)},[()=>c(g),()=>({"rotate-180":c(g)})]),k(f,w)}),d(m),k(n,m),st(h)}vt(["click"]);customElements.define("sns-accordion",ge(hC,{items:{},type:{},collapsible:{}},[],[],!0));var fC=R('<button class="account-button svelte-1uta475" role="menuitem"><span class="account-label svelte-1uta475"> </span> <span class="account-phone svelte-1uta475"> </span></button>'),pC=R('<div class="test-fab-menu svelte-1uta475" role="menu"><div class="menu-header svelte-1uta475"><span class="menu-title svelte-1uta475">테스트 도구</span></div> <div class="menu-divider svelte-1uta475"></div> <div class="menu-section svelte-1uta475"><div class="section-title svelte-1uta475"><!> <span>테스트 계정 로그인</span></div> <div class="account-list svelte-1uta475"></div></div> <div class="menu-divider svelte-1uta475"></div> <button class="menu-button svelte-1uta475" role="menuitem"><!> <span>서버 정보 보기</span></button> <div class="menu-divider svelte-1uta475"></div> <div class="version-info svelte-1uta475"><p class="version-label svelte-1uta475">빌드 버전</p> <p class="version-value svelte-1uta475"> </p></div></div>'),vC=R('<div class="modal-overlay svelte-1uta475" role="dialog" aria-modal="true" aria-labelledby="server-info-title" tabindex="-1"><div class="modal-content svelte-1uta475"><h2 id="server-info-title" class="modal-title svelte-1uta475">서버 정보</h2> <div class="info-list svelte-1uta475"><div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">환경:</span> <span class="info-value svelte-1uta475"> </span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Svelte:</span> <span class="info-value svelte-1uta475">5.43.2</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Vite:</span> <span class="info-value svelte-1uta475">6.x</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Firebase:</span> <span class="info-value svelte-1uta475">설정됨</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">프로젝트 ID:</span> <span class="info-value info-value-small svelte-1uta475"> </span></div></div> <button class="modal-close-button svelte-1uta475">닫기</button></div></div>'),mC=R('<div class="test-fab-container svelte-1uta475"><button aria-label="테스트 도구 열기"><!></button> <!></div> <!>',1);const gC={hash:"svelte-1uta475",code:`
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

  /* reCAPTCHA 컨테이너 숨김 */`};function _C(n,e){rt(e,!0),tt(n,gC);const t=[{label:"A",name:"apple",email:"apple@test.com"},{label:"B",name:"banana",email:"banana@test.com"},{label:"C",name:"cherry",email:"cherry@test.com"},{label:"D",name:"durian",email:"durian@test.com"},{label:"E",name:"elderberry",email:"elderberry@test.com"},{label:"F",name:"fig",email:"fig@test.com"},{label:"G",name:"grape",email:"grape@test.com"},{label:"H",name:"honeydew",email:"honeydew@test.com"}],r="12345a,*";let s=ie(!1),i=ie(!1),o=ie(!1);const a=Date.now(),l=new Date(a).toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),c="withcenter-test-5";zt(()=>{console.log("TestFab 컴포넌트가 마운트되었습니다.")});async function h(C){if(!v(o)){y(o,!0),console.log(`${C.name} (${C.label}) 계정으로 로그인을 시도합니다...`);try{let E;try{E=await Ww(Ir,C.email,r),console.log(`${C.name} 계정으로 로그인 성공!`)}catch(T){if(T.code==="auth/user-not-found"||T.code==="auth/invalid-credential")console.log(`${C.name} 계정이 없습니다. 회원가입을 진행합니다...`),E=await Hw(Ir,C.email,r),await Vp(E.user,{displayName:C.name}),console.log(`${C.name} 계정 회원가입 및 로그인 성공!`);else throw T}alert(`${C.name} (${C.label}) 계정으로 로그인되었습니다.`),y(s,!1),window.location.href="/"}catch(E){console.error("로그인 오류:",E);let T="로그인에 실패했습니다.";E.code==="auth/invalid-email"?T="잘못된 이메일 형식입니다.":E.code==="auth/wrong-password"?T="비밀번호가 일치하지 않습니다.":E.code==="auth/too-many-requests"?T="너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.":E.code==="auth/weak-password"?T="비밀번호가 너무 약합니다.":E.code==="auth/email-already-in-use"&&(T="이미 사용 중인 이메일입니다."),alert(T+`
오류 코드: `+E.code)}finally{y(o,!1)}}}function m(){y(s,!v(s))}function f(){y(i,!v(i)),y(s,!1)}function _(C){const E=C.target;!E.closest(".test-fab-menu")&&!E.closest(".test-fab-button")&&y(s,!1)}var g=mC();ei("click",Ul,_);var w=he(g),x=u(w);let I;x.__click=m;var S=u(x);Vm(S,{size:24}),d(x);var P=p(x,2);{var D=C=>{var E=pC(),T=p(u(E),4),L=u(T),$=u(L);Hr($,{size:16}),xn(2),d(L);var F=p(L,2);Gt(F,21,()=>t,oe=>oe.label,(oe,te)=>{var j=fC();j.__click=()=>h(v(te));var K=u(j),Z=u(K,!0);d(K);var re=p(K,2),N=u(re,!0);d(re),d(j),U(()=>{j.disabled=v(o),b(Z,v(te).label),b(N,v(te).name)}),k(oe,j)}),d(F),d(T);var G=p(T,4);G.__click=f;var X=u(G);Bm(X,{size:16}),xn(2),d(G);var H=p(G,4),le=p(u(H),2),pe=u(le,!0);d(le),d(H),d(E),U(()=>b(pe,l)),k(C,E)};Y(P,C=>{v(s)&&C(D)})}d(w);var B=p(w,2);{var z=C=>{var E=vC();E.__click=f;var T=u(E);T.__click=oe=>oe.stopPropagation();var L=p(u(T),2),$=u(L),F=p(u($),2),G=u(F,!0);d(F),d($);var X=p($,8),H=p(u(X),2),le=u(H,!0);d(H),d(X),d(L);var pe=p(L,2);pe.__click=f,d(T),d(E),U(()=>{b(G,"production"),b(le,c)}),k(C,E)};Y(B,C=>{v(i)&&C(z)})}U(()=>{I=on(x,1,"test-fab-button svelte-1uta475",null,I,{loading:v(o)}),x.disabled=v(o)}),k(n,g),st()}vt(["click"]);customElements.define("test-fab",ge(_C,{},[],[],!1));function nu(n,e){const{subscribe:t,set:r}=Es({data:e??null,loading:!0,error:null}),s=$t(Rt,n);return Do(s,i=>{const o=i.val();r({data:o!==null?o:e??null,loading:!1,error:null}),console.log(`✅ 실시간 데이터 로드 성공: ${n}`,o!==null?o:e??null)},i=>{console.error(`❌ 실시간 데이터 로드 실패: ${n}`,i),r({data:e??null,loading:!1,error:i})}),{subscribe:t,set:r,update:i=>{throw new Error("직접 업데이트는 지원하지 않습니다. Firebase를 통해 데이터를 변경하세요.")},unsubscribe:()=>Hd(s)}}const Xm=nu;function bC(n){if(!n)return"error.unknown";const e={"auth/invalid-email":"error.auth.invalidEmail","auth/user-disabled":"error.auth.userDisabled","auth/user-not-found":"error.auth.userNotFound","auth/wrong-password":"error.auth.wrongPassword","auth/email-already-in-use":"error.auth.emailAlreadyInUse","auth/weak-password":"error.auth.weakPassword","auth/operation-not-allowed":"error.auth.operationNotAllowed","auth/too-many-requests":"error.auth.tooManyRequests","auth/invalid-verification-code":"error.auth.invalidVerificationCode","auth/invalid-phone-number":"error.auth.invalidPhoneNumber","auth/missing-verification-code":"error.auth.missingVerificationCode","auth/session-expired":"error.auth.sessionExpired","auth/requires-recent-login":"error.auth.requiresRecentLogin","auth/credential-already-in-use":"error.auth.credentialAlreadyInUse"},t={PERMISSION_DENIED:"error.db.permissionDenied","permission-denied":"error.db.permissionDenied","network-error":"error.db.networkError",offline:"error.offline","authentication-required":"error.db.authenticationRequired",disconnected:"error.offline",unavailable:"error.db.networkError"},r={"storage/unauthorized":"error.storage.unauthorized","storage/bucket-not-found":"error.storage.bucketNotFound","storage/invalid-argument":"error.storage.invalidArgument","storage/object-not-found":"error.storage.objectNotFound","storage/retry-limit-exceeded":"error.storage.retryLimitExceeded","storage/quota-exceeded":"error.storage.quotaExceeded","storage/canceled":"error.storage.canceled"};return e[n]?e[n]:t[n]?t[n]:r[n]?r[n]:n.includes("network")||n.includes("offline")?"error.network":n.toLowerCase().includes("permission")?"error.db.permissionDenied":"error.unknown"}function wi(n,e="unknown"){if(!n)return console.error(`[${e}] 에러 객체가 없습니다.`),{key:"error.unknown",code:null,message:"No error object provided",context:e};const t=n;let r=t.code??null;if(!r&&t.message){const i=t.message.match(/\(([^)]+)\)/);i&&i[1]&&(r=i[1])}return console.error(`[${e}] Firebase 에러:`,{code:r,message:t.message,stack:t.stack,originalError:n}),{key:bC(r),code:r,message:t.message||"Unknown error",context:e}}async function wC(n,e,t,r,s){try{const i=Date.now(),o=`${n}-${i}`,a={uid:e,title:r,content:s,author:t,category:n,order:o,createdAt:i,updatedAt:i,likeCount:0,commentCount:0},l=$t(Rt,"posts");return{success:!0,postId:(await po(l,a)).key||void 0}}catch(i){const o=wi(i,"createPost");return{success:!1,error:o.key,errorMessage:o.message}}}const Xh=["community","qna","news","market"];function Ic(n){let e=n;const t=n.lastIndexOf("-");if(t!==-1&&t<n.length-1){const r=n.substring(t+1);/^\d/.test(r)&&(e=r)}return e.split(",").map(r=>parseInt(r,10))}function Zm(n,e){const t=e.map((r,s)=>s===0?String(r).padStart(5,"0"):s===1?String(r).padStart(4,"0"):String(r).padStart(3,"0")).join(",");return`${n}-${t}`}function yC(){return Array(12).fill(0)}async function xC(n){const{postId:e,userId:t,content:r}=n;try{const s=Date.now(),i=$t(Rt,"comments"),o=yn(i,wn("order"),dr(`${e}-`),Gs(`${e}-z`)),a=await di(o);let l=0;a.exists()&&a.forEach(x=>{const I=x.val();if(I.depth===1&&I.order){const P=Ic(I.order)[0];P!==void 0&&P>l&&(l=P)}});const c=l+1,h=yC();h[0]=c;const m=Zm(e,h),f={postId:e,uid:t,content:r,depth:1,order:m,parentId:null,createdAt:s,updatedAt:s},g=po(i).key;if(!g)throw new Error("Failed to generate comment ID");const w={};return w[`comments/${g}`]=f,await Lo($t(Rt),w),{success:!0,commentId:g}}catch(s){const i=wi(s,"createTopLevelComment");return{success:!1,error:i.key,errorMessage:i.message}}}async function kC(n){const{parentCommentId:e,userId:t,content:r}=n;try{const s=$t(Rt,`comments/${e}`),i=await di(s);if(!i.exists())return{success:!1,error:"error.comment.parentNotFound",errorMessage:"Parent comment not found"};const o=i.val(),a=o.depth||1,l=o.order||"",c=o.postId,h=a+1;if(h>12)return{success:!1,error:"error.comment.maxDepthExceeded",errorMessage:"Maximum comment depth exceeded (12)"};const m=Ic(l),f=$t(Rt,"comments"),_=yn(f,wn("order"),dr(`${c}-`),Gs(`${c}-z`)),g=await di(_);let w=0;g.exists()&&g.forEach(E=>{const T=E.val();if(T.parentId===e&&T.order){const $=Ic(T.order)[h-1];$!==void 0&&$>w&&(w=$)}});const x=w+1,I=[...m];I[h-1]=x;const S=Zm(c,I),P=Date.now(),D={postId:c,uid:t,content:r,depth:h,order:S,parentId:e,createdAt:P,updatedAt:P},z=po(f).key;if(!z)throw new Error("Failed to generate comment ID");const C={};return C[`comments/${z}`]=D,await Lo($t(Rt),C),{success:!0,commentId:z}}catch(s){const i=wi(s,"createChildComment");return{success:!1,error:i.key,errorMessage:i.message}}}function EC(n,e){try{const t=$t(Rt,"comments"),r=yn(t,wn("order"),dr(`${n}-`),Gs(`${n}-z`));return Do(r,s=>{if(s.exists()){const i=[];s.forEach(o=>{i.push({commentId:o.key,...o.val()})}),e(i)}else e([])}),()=>{Hd(t)}}catch(t){return console.error("댓글 조회 실패:",t),e([]),()=>{}}}async function IC(n,e,t){try{const r=e.startsWith("-")?e.substring(1):e,s={};s[`likes/${n}-${r}-${t}`]=1;const i=n==="post"?"posts":"comments";return s[`${i}/${e}/likeCount`]=gm(1),await Lo($t(Rt),s),{success:!0}}catch(r){const s=wi(r,"addLike");return{success:!1,error:s.key,errorMessage:s.message}}}async function CC(n,e,t){try{const r=e.startsWith("-")?e.substring(1):e,s={};s[`likes/${n}-${r}-${t}`]=null;const i=n==="post"?"posts":"comments";return s[`${i}/${e}/likeCount`]=gm(-1),await Lo($t(Rt),s),{success:!0}}catch(r){const s=wi(r,"removeLike");return{success:!1,error:s.key,errorMessage:s.message}}}async function TC(n,e,t){try{const r=e.startsWith("-")?e.substring(1):e,s=$t(Rt,`likes/${n}-${r}-${t}`);return(await di(s)).exists()}catch(r){return console.error("좋아요 상태 확인 실패:",r),!1}}async function eg(n,e,t){try{const r=await TC(n,e,t);let s;return r?s=await CC(n,e,t):s=await IC(n,e,t),s.success?{success:!0,isLiked:!r}:{success:!1,isLiked:r,error:s.error,errorMessage:s.errorMessage}}catch(r){const s=wi(r,"toggleLike");return{success:!1,isLiked:!1,error:s.key,errorMessage:s.message}}}console.log("SNS Web Components 로드됨 ✅");var SC=R('<div class="gpl-badge svelte-1ubq0t6"> </div>'),AC=R('<div class="hint svelte-1ubq0t6"> </div>'),PC=R('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),RC=R('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),NC=R('<div class="todo-description svelte-1ubq0t6"> </div>'),LC=R('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),DC=R('<div class="todo-subitems svelte-1ubq0t6"></div>'),$C=R('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),OC=R('<span class="badge svelte-1ubq0t6"> </span>'),qC=R('<div class="home svelte-1ubq0t6"><div class="hero-card svelte-1ubq0t6"><div class="hero-overlay svelte-1ubq0t6"></div> <div class="hero-content svelte-1ubq0t6"><a class="hero-badge-link svelte-1ubq0t6" href="/dev/history"><span class="hero-badge svelte-1ubq0t6"> </span> <span class="hero-badge-text svelte-1ubq0t6"> </span></a> <h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p> <div class="hero-actions svelte-1ubq0t6"><a class="hero-button primary svelte-1ubq0t6" href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer">🚀 단톡방 참여하기</a> <a class="hero-button ghost svelte-1ubq0t6" href="/help">📚 프로젝트 가이드 보기</a> <a class="hero-button ghost svelte-1ubq0t6" href="/dev/sed">🧠 신개념 바이브코딩 - SED</a></div></div></div> <section class="techstack-section svelte-1ubq0t6"><div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const MC={hash:"svelte-1ubq0t6",code:`
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
  }`};function tg(n,e){rt(e,!0),tt(n,MC);const t=()=>Xe(St,"$t",r),[r,s]=yt();let i=ie(null);function o(ve){y(i,v(i)===ve?null:ve,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]},{labelKey:"home.todo.item8.label",descriptionKey:"home.todo.item8.description",completed:!1,subitems:[{key:"home.todo.item8.subitem1",completed:!1},{key:"home.todo.item8.subitem2",completed:!1},{key:"home.todo.item8.subitem3",completed:!1},{key:"home.todo.item8.subitem4",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var h=qC(),m=u(h),f=p(u(m),2),_=u(f),g=u(_),w=u(g);d(g);var x=p(g,2),I=u(x,!0);d(x),d(_);var S=p(_,2),P=u(S,!0);d(S);var D=p(S,2),B=u(D),z=p(B),C=u(z,!0);d(z);var E=p(z);d(D),xn(2),d(f),d(m);var T=p(m,2),L=u(T),$=u(L),F=p(u($),2),G=u(F,!0);d(F);var X=p(F,2),H=u(X,!0);d(X),d($);var le=p($,2),pe=p(u(le),2),oe=u(pe,!0);d(pe);var te=p(pe,2),j=u(te,!0);d(te),d(le);var K=p(le,2),Z=p(u(K),2),re=u(Z,!0);d(Z);var N=p(Z,2),A=u(N,!0);d(N),d(K);var M=p(K,2),q=p(u(M),2),J=u(q,!0);d(q);var O=p(q,2),V=u(O,!0);d(O),d(M),d(L),d(T);var W=p(T,2),me=u(W),ne=u(me,!0);d(me);var de=p(me,2);Gt(de,21,()=>a,ur,(ve,ke)=>{var Te=RC(),_e=u(Te);_e.__click=()=>o(v(ke).id);var ue=u(_e),Ye=u(ue,!0);d(ue);var Ze=p(ue,2);let At;var Vt=u(Ze);Xd(Vt,{size:20}),d(Ze),d(_e);var gt=p(_e,2);{var Ut=Ft=>{var Qt=PC(),Jt=u(Qt),lr=u(Jt,!0);d(Jt);var Pn=p(Jt,2);{var qn=Pt=>{var Nt=SC(),Mn=u(Nt,!0);d(Nt),U(gn=>b(Mn,gn),[()=>t()("home.aiTruth.item3.gpl")]),k(Pt,Nt)};Y(Pn,Pt=>{v(ke).showGpl&&Pt(qn)})}var ft=p(Pn,2);{var nn=Pt=>{var Nt=AC(),Mn=u(Nt,!0);d(Nt),U(gn=>b(Mn,gn),[()=>t()(v(ke).hintKey)]),k(Pt,Nt)};Y(ft,Pt=>{v(ke).hintKey&&Pt(nn)})}d(Qt),U(Pt=>b(lr,Pt),[()=>t()(v(ke).contentKey)]),k(Ft,Qt)};Y(gt,Ft=>{v(i)===v(ke).id&&Ft(Ut)})}d(Te),U(Ft=>{Le(_e,"aria-expanded",v(i)===v(ke).id),b(Ye,Ft),At=on(Ze,1,"accordion-icon svelte-1ubq0t6",null,At,{open:v(i)===v(ke).id})},[()=>t()(v(ke).titleKey)]),k(ve,Te)}),d(de),d(W);var se=p(W,2),Pe=u(se),Ne=u(Pe,!0);d(Pe);var qe=p(Pe,2);Gt(qe,21,()=>l,ur,(ve,ke)=>{var Te=$C(),_e=u(Te),ue=u(_e);let Ye;var Ze=u(ue);{var At=ft=>{yc(ft,{size:20})},Vt=ft=>{xc(ft,{size:20})};Y(Ze,ft=>{v(ke).completed?ft(At):ft(Vt,!1)})}d(ue);var gt=p(ue,2),Ut=u(gt);let Ft;var Qt=u(Ut,!0);d(Ut);var Jt=p(Ut,2);{var lr=ft=>{var nn=NC(),Pt=u(nn,!0);d(nn),U(Nt=>b(Pt,Nt),[()=>t()(v(ke).descriptionKey)]),k(ft,nn)};Y(Jt,ft=>{v(ke).descriptionKey&&ft(lr)})}d(gt),d(_e);var Pn=p(_e,2);{var qn=ft=>{var nn=DC();Gt(nn,21,()=>v(ke).subitems,ur,(Pt,Nt)=>{var Mn=LC(),gn=u(Mn);let Pr;var Ps=u(gn);{var il=zn=>{yc(zn,{size:16})},yi=zn=>{xc(zn,{size:16})};Y(Ps,zn=>{v(Nt).completed?zn(il):zn(yi,!1)})}d(gn);var Rs=p(gn,2);let $o;var xi=u(Rs,!0);d(Rs),d(Mn),U(zn=>{Pr=on(gn,1,"todo-subicon svelte-1ubq0t6",null,Pr,{completed:v(Nt).completed}),$o=on(Rs,1,"todo-subtext svelte-1ubq0t6",null,$o,{completed:v(Nt).completed}),b(xi,zn)},[()=>t()(v(Nt).key)]),k(Pt,Mn)}),d(nn),k(ft,nn)};Y(Pn,ft=>{v(ke).subitems.length>0&&ft(qn)})}d(Te),U(ft=>{Ye=on(ue,1,"todo-icon svelte-1ubq0t6",null,Ye,{completed:v(ke).completed}),Ft=on(Ut,1,"todo-label svelte-1ubq0t6",null,Ft,{completed:v(ke).completed}),b(Qt,ft)},[()=>t()(v(ke).labelKey)]),k(ve,Te)}),d(qe),d(se);var Se=p(se,2),Me=u(Se),Re=u(Me,!0);d(Me);var De=p(Me,2),it=u(De),nt=u(it),Ge=u(nt,!0);d(nt);var ze=p(nt,1,!0);d(it);var Ce=p(it,2);Gt(Ce,21,()=>c,ur,(ve,ke)=>{var Te=OC(),_e=u(Te,!0);d(Te),U(ue=>b(_e,ue),[()=>t()(v(ke))]),k(ve,Te)}),d(Ce),d(De),d(Se);var we=p(Se,2),ye=u(we),Oe=u(ye,!0);d(ye);var ee=p(ye,2),xe=u(ee),Ve=u(xe,!0);d(xe);var Ke=p(xe,2),Be=u(Ke),dt=p(Be),ct=u(dt,!0);d(dt);var bt=p(dt,1,!0);d(Ke);var ae=p(Ke,2),fe=u(ae,!0);d(ae),d(ee),d(we),d(h),U((ve,ke,Te,_e,ue,Ye,Ze,At,Vt,gt,Ut,Ft,Qt,Jt,lr,Pn,qn,ft,nn,Pt,Nt,Mn,gn,Pr,Ps)=>{b(w,`✨ ${ve??""}`),b(I,ke),b(P,Te),b(B,`${_e??""} `),b(C,ue),b(E,` ${Ye??""}`),b(G,Ze),b(H,At),b(oe,Vt),b(j,gt),b(re,Ut),b(A,Ft),b(J,Qt),b(V,Jt),b(ne,lr),b(Ne,Pn),b(Re,qn),b(Ge,ft),b(ze,nn),b(Oe,Pt),b(Ve,Nt),b(Be,`${Mn??""} `),b(ct,gn),b(bt,Pr),b(fe,Ps)},[()=>t()("home.vibeBanner"),()=>t()("home.overview.badge3"),()=>t()("home.title"),()=>t()("home.description.part1"),()=>t()("home.description.linkText"),()=>t()("home.description.part2"),()=>t()("home.techStack.svelte"),()=>t()("home.techStack.svelteDesc"),()=>t()("home.techStack.flutter"),()=>t()("home.techStack.flutterDesc"),()=>t()("home.techStack.firebase"),()=>t()("home.techStack.firebaseDesc"),()=>t()("home.techStack.dokplay"),()=>t()("home.techStack.dokplayDesc"),()=>t()("home.aiTruth.title"),()=>t()("home.todo.title"),()=>t()("home.overview.title"),()=>t()("home.overview.brand"),()=>t()("home.overview.description"),()=>t()("home.aiChange.title"),()=>t()("home.aiChange.description"),()=>t()("home.aiChange.emphasis"),()=>t()("home.aiChange.highlight"),()=>t()("home.aiChange.conclusion"),()=>t()("home.aiChange.hint")]),k(n,h),st(),s()}vt(["click"]);ge(tg,{},[],[],!0);var zC=R('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx"> </p> <phone-login></phone-login></div>',2),UC=R('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx"> </h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx"> </a></div>'),FC=R('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const jC={hash:"svelte-1mz53xx",code:`\r
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
  }`};function ng(n,e){rt(e,!1),tt(n,jC);const t=()=>Xe(St,"$t",s),r=()=>Xe(sl,"$user",s),[s,i]=yt();function o(_){console.log("Login successful:",_.detail),alert(t()("로그인성공알림",{phone:_.detail.phoneNumber})),window.location.href="/"}function a(_){console.error("Login error:",_.detail),alert(t()("로그인실패",{error:_.detail.error}))}dn();var l=FC(),c=u(l),h=u(c);{var m=_=>{var g=zC(),w=u(g),x=u(w,!0);d(w);var I=p(w,2),S=u(I,!0);d(I);var P=p(I,2);d(g),U((D,B)=>{b(x,D),b(S,B)},[()=>t()("로그인"),()=>t()("전화번호로로그인")]),ei("login-success",P,o),ei("login-error",P,a),k(_,g)},f=_=>{var g=UC(),w=u(g),x=u(w,!0);d(w);var I=p(w,2),S=u(I,!0);d(I);var P=p(I,2),D=u(P,!0);d(P),d(g),U((B,z,C)=>{b(x,B),b(S,z),b(D,C)},[()=>t()("웰컴"),()=>t()("로그인하셨습니다",{phone:r().phoneNumber}),()=>t()("홈으로이동")]),k(_,g)};Y(h,_=>{r()?_(f,!1):_(m)})}d(c),d(l),k(n,l),st(),i()}ge(ng,{},[],[],!0);var BC=R('<button class="menu-item svelte-163o8b2"> </button>'),VC=R('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2"> </p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const HC={hash:"svelte-163o8b2",code:`\r
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
  }`};function rg(n,e){rt(e,!0),tt(n,HC);const t=()=>Xe(St,"$t",r),[r,s]=yt();zt(()=>{An(t()("메뉴"))});let i=Js(()=>[{label:t()("홈"),path:"/"},{label:t()("로그인"),path:"/user/login"},{label:t()("사용자프로필"),path:"/user/profile"},{label:t()("게시물목록"),path:"/post/list"},{label:t()("게시물상세예시"),path:"/post/detail/123"},{label:t()("채팅목록"),path:"/chat/list"},{label:t()("설정"),path:"/settings"},{label:t()("정보"),path:"/about"},{label:t()("도움말"),path:"/help"},{label:t()("이용약관"),path:"/terms"},{label:t()("개인정보"),path:"/privacy"},{label:t()("문의하기"),path:"/contact"},{label:t()("개발일지"),path:"/dev/history"},{label:t()("바이브코딩SED"),path:"/dev/sed"},{label:t()("테스트게시글생성"),path:"/dev/generate-posts"}]);var o=VC(),a=u(o),l=u(a),c=u(l,!0);d(l);var h=p(l,2);Gt(h,21,()=>v(i),m=>m.path,(m,f)=>{var _=BC();_.__click=()=>bn(v(f).path);var g=u(_,!0);d(_),U(()=>b(g,v(f).label)),k(m,_)}),d(h),d(a),d(o),U(m=>b(c,m),[()=>t()("페이지선택")]),k(n,o),st(),s()}vt(["click"]);ge(rg,{},[],[],!0);var WC=R('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),GC=R('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3"> </span></div>'),KC=R('<button type="button" class="photo-remove-button svelte-17u94r3"><!></button>'),YC=R('<p class="upload-status svelte-17u94r3"> </p>'),QC=R('<div class="message-box success-message svelte-17u94r3"> </div>'),JC=R('<div class="message-box error-message svelte-17u94r3"> </div>'),XC=R('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3"> </label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3"> </p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName"> </label> <input type="text" id="displayName" class="form-input svelte-17u94r3" maxlength="50" required/> <p class="form-helper svelte-17u94r3"> </p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender"> </label> <select id="gender" class="form-select svelte-17u94r3"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth"> </label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3"> </p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3"> </button></div></form></div>');const ZC={hash:"svelte-17u94r3",code:`
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
  }`};function sg(n,e){rt(e,!0),tt(n,ZC);const t=()=>Xe(St,"$t",r),[r,s]=yt();let i=ie(Zt({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),o=ie(null),a=ie(null),l=ie(!1),c=ie(!1),h=ie(null),m=ie(null),f=null,_=null;function g(ae){y(h,ae,!0),f&&clearTimeout(f),f=setTimeout(()=>{y(h,null),f=null},3e3)}function w(ae){y(m,ae,!0),_&&clearTimeout(_),_=setTimeout(()=>{y(m,null),_=null},5e3)}Zf(()=>{f&&clearTimeout(f),_&&clearTimeout(_)}),zt(()=>{An(t()("프로필수정"))}),Zs(()=>{if(Ae.data){v(i).displayName=Ae.data.displayName||"",v(i).gender=Ae.data.gender||"",v(i).dateOfBirth=Ae.data.dateOfBirth||"";const ae=Ae.data.photoUrl??Ae.data.photoURL??"";v(i).photoUrl=ae,y(o,ae||null,!0)}});function x(){v(c)||v(a)?.click()}async function I(ae){const ve=ae.currentTarget?.files?.[0];if(!ve)return;if(v(c)){w(t()("사진작업진행중"));return}if(!Ae.isAuthenticated||!Ae.uid){w(t()("로그인필요"));return}if(!ve.type.startsWith("image/")){w(t()("이미지파일만가능"));return}if(ve.size>5*1024*1024){w(t()("파일크기5MB제한"));return}const ke=v(o),Te=v(i).photoUrl,_e=new FileReader;_e.onload=ue=>{const Ye=ue.target?.result;typeof Ye=="string"&&y(o,Ye,!0)},_e.readAsDataURL(ve);try{await P(ve)}catch{y(o,ke,!0),v(i).photoUrl=Te,v(a)&&(v(a).value="")}}async function S(){if(v(c))return;if(!Ae.isAuthenticated||!Ae.uid){w(t()("로그인필요"));return}const ae=v(o),fe=v(i).photoUrl;y(o,null),v(i).photoUrl="",v(a)&&(v(a).value="");try{y(c,!0),await Ae.updateProfile({photoUrl:null}),g(t()("프로필사진제거완료"))}catch(ve){console.error("프로필 사진 제거 오류:",ve),w(t()("사진제거실패",{error:ve.message||t()("알수없는오류")})),y(o,ae,!0),v(i).photoUrl=fe}finally{y(c,!1)}}async function P(ae,{showSuccess:fe=!0}={}){if(!Ae.isAuthenticated||!Ae.uid)throw w(t()("로그인필요")),new Error("User is not authenticated");try{y(c,!0);const ve=ae.name.split(".").pop()?.toLowerCase()||"jpg",ke=`profile_${Ae.uid}_${Date.now()}.${ve}`,Te=KE(ZE,`users/${Ae.uid}/profile/${ke}`),_e=await WE(Te,ae),ue=await GE(_e.ref);return v(i).photoUrl=ue,y(o,ue,!0),await Ae.updateProfile({photoUrl:ue}),fe&&g(t()("프로필사진저장완료")),ue}catch(ve){throw console.error("프로필 사진 업로드 오류:",ve),w(t()("사진저장실패",{error:ve.message||t()("알수없는오류")})),ve}finally{y(c,!1),v(a)&&(v(a).value="")}}async function D(ae){ae.preventDefault(),y(l,!0),y(m,null),y(h,null);try{let fe=v(i).photoUrl;const ve=v(a)?.files?.[0];if(ve)try{fe=await P(ve,{showSuccess:!1})}catch{y(l,!1);return}const ke={displayName:v(i).displayName,gender:v(i).gender,dateOfBirth:v(i).dateOfBirth,photoUrl:fe||null};await Ae.updateProfile(ke),g(t()("프로필업데이트완료")),console.log("프로필 업데이트 완료:",ke)}catch(fe){console.error("프로필 업데이트 오류:",fe),w(t()("프로필업데이트실패",{error:fe.message||t()("알수없는오류")}))}finally{y(l,!1)}}function B(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var z=XC(),C=u(z),E=u(C),T=u(E),L=u(T,!0);d(T);var $=p(T,2),F=u($);F.__change=I,Hc(F,ae=>y(a,ae),()=>v(a));var G=p(F,2),X=u(G);X.__click=x;var H=u(X);{var le=ae=>{var fe=WC();U(()=>za(fe,`background-image: url("${v(o)}")`)),k(ae,fe)},pe=ae=>{var fe=GC(),ve=p(u(fe),2),ke=u(ve,!0);d(ve),d(fe),U(Te=>b(ke,Te),[()=>t()("사진없음")]),k(ae,fe)};Y(H,ae=>{v(o)?ae(le):ae(pe,!1)})}d(X);var oe=p(X,2);{var te=ae=>{var fe=KC();fe.__click=S;var ve=u(fe);Wm(ve,{size:18,"stroke-width":3}),d(fe),U(ke=>{fe.disabled=v(l)||v(c),Le(fe,"aria-label",ke)},[()=>t()("프로필사진제거")]),k(ae,fe)};Y(oe,ae=>{v(o)&&ae(te)})}var j=p(oe,2),K=u(j);qm(K,{size:20,"stroke-width":2}),d(j),d(G);var Z=p(G,2),re=u(Z,!0);d(Z);var N=p(Z,2);{var A=ae=>{var fe=YC(),ve=u(fe,!0);d(fe),U(ke=>b(ve,ke),[()=>t()("사진저장중")]),k(ae,fe)};Y(N,ae=>{v(c)&&ae(A)})}d($),d(E);var M=p(E,2),q=u(M),J=u(q,!0);d(q);var O=p(q,2);ti(O);var V=p(O,2),W=u(V,!0);d(V),d(M);var me=p(M,2),ne=u(me),de=u(ne,!0);d(ne);var se=p(ne,2),Pe=u(se),Ne=u(Pe,!0);d(Pe),Pe.value=Pe.__value="";var qe=p(Pe),Se=u(qe,!0);d(qe),qe.value=qe.__value="male";var Me=p(qe),Re=u(Me,!0);d(Me),Me.value=Me.__value="female";var De=p(Me),it=u(De,!0);d(De),De.value=De.__value="other",d(se),d(me);var nt=p(me,2),Ge=u(nt),ze=u(Ge,!0);d(Ge);var Ce=p(Ge,2);ti(Ce);var we=p(Ce,2),ye=u(we,!0);d(we),d(nt);var Oe=p(nt,2);{var ee=ae=>{var fe=QC(),ve=u(fe);d(fe),U(()=>b(ve,`✅ ${v(h)??""}`)),k(ae,fe)};Y(Oe,ae=>{v(h)&&ae(ee)})}var xe=p(Oe,2);{var Ve=ae=>{var fe=JC(),ve=u(fe);d(fe),U(()=>b(ve,`⚠️ ${v(m)??""}`)),k(ae,fe)};Y(xe,ae=>{v(m)&&ae(Ve)})}var Ke=p(xe,2),Be=u(Ke),dt=u(Be,!0);d(Be);var ct=p(Be,2);ct.__click=B;var bt=u(ct,!0);d(ct),d(Ke),d(C),d(z),U((ae,fe,ve,ke,Te,_e,ue,Ye,Ze,At,Vt,gt,Ut,Ft,Qt,Jt)=>{b(L,ae),Le(F,"aria-label",fe),X.disabled=v(l)||v(c),Le(X,"aria-label",ve),b(re,ke),b(J,Te),Le(O,"placeholder",_e),O.disabled=v(l),b(W,ue),b(de,Ye),se.disabled=v(l),b(Ne,Ze),b(Se,At),b(Re,Vt),b(it,gt),b(ze,Ut),Ce.disabled=v(l),b(ye,Ft),Be.disabled=v(l)||v(c)||!Ae.isAuthenticated,b(dt,Qt),ct.disabled=v(l),b(bt,Jt)},[()=>t()("프로필사진"),()=>t()("프로필사진선택"),()=>v(o)?t()("프로필사진변경"):t()("프로필사진추가"),()=>t()("프로필사진클릭변경"),()=>t()("닉네임"),()=>t()("닉네임입력"),()=>t()("닉네임최대50자"),()=>t()("성별"),()=>t()("선택하지않음"),()=>t()("남자"),()=>t()("여자"),()=>t()("기타"),()=>t()("생년월일"),()=>t()("생년월일형식"),()=>v(l)?t()("저장중"):t()("저장"),()=>t()("취소")]),ei("submit",C,D),Yr(O,()=>v(i).displayName,ae=>v(i).displayName=ae),Vc(se,()=>v(i).gender,ae=>v(i).gender=ae),Yr(Ce,()=>v(i).dateOfBirth,ae=>v(i).dateOfBirth=ae),k(n,z),st(),s()}vt(["change","click"]);ge(sg,{},[],[],!0);var e5=R('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),t5=R('<div class="loading-container svelte-a4suww"><!></div>'),n5=R('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),r5=R('<div class="error-container svelte-a4suww"><!></div>'),s5=R('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),i5=R('<div class="empty-container svelte-a4suww"><!></div>'),o5=R('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),a5=R('<div class="item-wrapper svelte-a4suww"><!></div>'),l5=R('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),c5=R('<div class="loading-more svelte-a4suww"><!></div>'),d5=R('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),u5=R('<div class="no-more svelte-a4suww"><!></div>'),h5=R('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),f5=R('<div class="database-list-view svelte-a4suww"><!></div>');const p5={hash:"svelte-a4suww",code:`\r
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
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function ru(n,e){rt(e,!0),tt(n,p5);let t=et(e,"path",7,""),r=et(e,"pageSize",7,10),s=et(e,"orderBy",7,"createdAt"),i=et(e,"sortPrefix",7,""),o=et(e,"threshold",7,300),a=et(e,"reverse",7,!1),l=et(e,"item",7),c=et(e,"loading",7),h=et(e,"empty",7),m=et(e,"error",7),f=et(e,"loadingMore",7),_=et(e,"noMore",7),g=ie(Zt([])),w=ie(!1),x=ie(!0),I=ie(!0),S=ie(null),P=ie(null),D=ie(0),B=ie(null),z=ie(null),C=new Map,E=new Map,T=null,L=ie(!1);Zs(()=>(t()&&Rt&&X(),()=>{console.log("DatabaseListView: Cleaning up listeners"),T&&(T(),T=null),C.forEach(N=>{N()}),C.clear(),console.log("DatabaseListView: All listeners cleaned up")})),Zs(()=>{if(v(z))return v(z).addEventListener("scroll",le),window.addEventListener("scroll",pe),()=>{v(z)?.removeEventListener("scroll",le),window.removeEventListener("scroll",pe)}});function $(N,A){if(N.length===0)return null;const M=N[N.length-1];if(!M)return null;const q=M.data[A];return q!=null&&q!==""?(console.log(`DatabaseListView: Using cursor from '${A}':`,{value:q,key:M.key}),{value:q,key:M.key}):(console.error(`DatabaseListView: CRITICAL ERROR - Field '${A}' not found in last item (key: ${M.key}).`,"This will prevent pagination from working correctly.",`Please ensure all items in '${t()}' have the '${A}' field.`,"Item data:",M.data),y(B,`데이터 정렬 필드 '${A}'가 누락되었습니다. 데이터베이스 구조를 확인해주세요.`),null)}function F(N,A){const M=`${N}`;if(C.has(M))return;const q=$t(Rt,`${t()}/${N}`),J=Do(q,O=>{if(O.exists()){const V=O.val();v(g)[A]={key:N,data:V},y(g,[...v(g)],!0),console.log(`DatabaseListView: Item updated ${N}`,V)}},O=>{console.error(`DatabaseListView: Error listening to item ${N}`,O)});C.set(M,J)}function G(){T&&(T(),T=null),console.log("DatabaseListView: Setting up child_added listener for",t()),y(L,!1);const N=$t(Rt,t());let A;i()?(A=yn(N,wn(s()),dr(i()),Gs(i()+"")),console.log("DatabaseListView: child_added listener with sortPrefix:",i())):(A=yn(N,wn(s()),dr(!1)),console.log("DatabaseListView: child_added listener with startAt(false) to filter null/undefined")),T=y3(A,M=>{if(!v(L))return;const q=M.key,J=M.val();if(!q){console.warn("DatabaseListView: Snapshot key is null, skipping");return}if(v(g).some(W=>W.key===q)){console.log("DatabaseListView: Child already exists, skipping:",q);return}console.log("DatabaseListView: New child added:",q,J);const V={key:q,data:J};if(a())y(g,[V,...v(g)],!0),console.log("DatabaseListView: Added new item to the beginning (reverse mode)"),F(q,0);else{const W=v(g).length;y(g,[...v(g),V],!0),console.log("DatabaseListView: Added new item to the end (normal mode)"),F(q,W)}},M=>{console.error("DatabaseListView: Error in child_added listener",M)}),setTimeout(()=>{y(L,!0),console.log("DatabaseListView: child_added listener is now ready to accept new children")},1e3)}async function X(){console.log("DatabaseListView: Loading initial data from",t(),"(reverse:",a(),")"),y(x,!0),y(B,null),y(g,[],!0),E.clear(),C.forEach(N=>N()),C.clear(),T&&(T(),T=null),y(L,!1),y(S,null),y(P,null),y(I,!0),y(D,0);try{const N=$t(Rt,t());let A;a()?i()?(A=yn(N,wn(s()),dr(i()),Gs(i()+""),jo(r()+1)),console.log("DatabaseListView: Using limitToLast with sortPrefix:",i())):(A=yn(N,wn(s()),dr(!1),jo(r()+1)),console.log("DatabaseListView: Using limitToLast with startAt(false) to filter null/undefined")):i()?(A=yn(N,wn(s()),dr(i()),Gs(i()+""),Fo(r()+1)),console.log("DatabaseListView: Using limitToFirst with sortPrefix:",i())):(A=yn(N,wn(s()),dr(!1),Fo(r()+1)),console.log("DatabaseListView: Using limitToFirst with startAt(false) to filter null/undefined"));const M=await di(A);if(M.exists()){const q=[],J=M.val();if(Object.entries(J).forEach(([O,V])=>{q.push({key:O,data:V})}),console.log(`DatabaseListView: Initial query returned ${q.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",q.map(O=>({key:O.key,[s()]:O.data[s()]}))),a()&&(q.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)")),q.length>r()){y(I,!0),y(g,q.slice(0,r()),!0);const O=$(v(g),s());O?(y(S,O.value,!0),y(P,O.key,!0),console.log("DatabaseListView: Next page cursor set:",{lastLoadedValue:v(S),lastLoadedKey:v(P)})):y(I,!1)}else if(y(I,!1),y(g,q,!0),v(g).length>0){const O=$(v(g),s());O&&(y(S,O.value,!0),y(P,O.key,!0),console.log("DatabaseListView: Last cursor set:",{lastLoadedValue:v(S),lastLoadedKey:v(P)}))}E.set(0,v(g)),v(g).forEach((O,V)=>{F(O.key,V)}),console.log(`DatabaseListView: Page ${v(D)} - Loaded ${v(g).length} items, hasMore: ${v(I)}`)}else console.log("DatabaseListView: No data found"),y(g,[],!0),y(I,!1)}catch(N){console.error("DatabaseListView: Load error",N),y(B,N instanceof Error?N.message:String(N),!0)}finally{y(x,!1),G()}}async function H(){if(v(w)||!v(I)){console.log("DatabaseListView: Cannot load more - loading:",v(w),"hasMore:",v(I));return}zl(D),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${v(D)}`),console.log("DatabaseListView: Current cursor - lastLoadedValue:",v(S),"lastLoadedKey:",v(P)),y(w,!0),y(B,null);try{if(v(S)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),y(I,!1),y(w,!1);return}const N=$t(Rt,t());let A;a()?i()?(A=yn(N,wn(s()),Hh(v(S)),jo(r()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination with sortPrefix (client-side filtering)")):(A=yn(N,wn(s()),Hh(v(S)),jo(r()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination (no startAt needed)")):i()?(A=yn(N,wn(s()),Wh(v(S)),Fo(r()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination with sortPrefix (client-side filtering)")):(A=yn(N,wn(s()),Wh(v(S)),Fo(r()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination (no startAt needed)"));const M=await di(A);if(M.exists()){const q=[],J=M.val();Object.entries(J).forEach(([ne,de])=>{q.push({key:ne,data:de})}),console.log(`DatabaseListView: Page ${v(D)} - Query returned ${q.length} items from Firebase`),console.log(`DatabaseListView: Page ${v(D)} - Items orderBy values:`,q.map(ne=>({key:ne.key,[s()]:ne.data[s()]})));let O=q;i()&&(O=q.filter(ne=>{const de=ne.data[s()];return typeof de=="string"?de.startsWith(i()):!1}),console.log(`DatabaseListView: Filtered ${q.length} items to ${O.length} items with sortPrefix "${i()}"`),O.length<q.length&&(console.log("DatabaseListView: Reached end of sortPrefix range, no more items"),y(I,!1))),a()&&(O.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)"));const V=new Set(v(g).map(ne=>ne.key)),W=O.filter(ne=>!V.has(ne.key));if(console.log(`DatabaseListView: Page ${v(D)} - After filtering duplicates: ${W.length} items`),W.length===0){console.log("DatabaseListView: No more unique items after filtering"),y(I,!1),y(w,!1);return}if(O.length>r()){y(I,!0);const ne=W.slice(0,r());y(g,[...v(g),...ne],!0);const de=$(ne,s());de?(y(S,de.value,!0),y(P,de.key,!0),console.log("DatabaseListView: Updated cursor for next page:",{lastLoadedValue:v(S),lastLoadedKey:v(P)})):(y(I,!1),console.log("DatabaseListView: No valid cursor, hasMore set to false"))}else{if(y(I,!1),y(g,[...v(g),...W],!0),W.length>0){const ne=$(W,s());ne&&(y(S,ne.value,!0),y(P,ne.key,!0),console.log("DatabaseListView: Updated cursor (last page):",{lastLoadedValue:v(S),lastLoadedKey:v(P)}))}console.log("DatabaseListView: Loaded all remaining items, hasMore set to false")}const me=v(g).length-(W.length>r()?r():W.length);v(g).slice(me).forEach((ne,de)=>{F(ne.key,me+de)}),console.log(`DatabaseListView: Page ${v(D)} - Loaded ${W.length} more items, total: ${v(g).length}, hasMore: ${v(I)}`)}else console.log("DatabaseListView: Query returned no data, hasMore set to false"),y(I,!1)}catch(N){N instanceof Error?(console.error("DatabaseListView: Load more error",{name:N.name,message:N.message,toString:N.toString()}),y(B,N.message||"Unknown error",!0)):(console.error("DatabaseListView: Load more error",N),y(B,String(N),!0))}finally{y(w,!1)}}function le(){if(!v(z)||v(w)||!v(I))return;const{scrollTop:N,scrollHeight:A,clientHeight:M}=v(z);A-(N+M)<o()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),H())}function pe(){if(v(w)||!v(I))return;const N=window.pageYOffset||document.documentElement.scrollTop,A=document.documentElement.scrollHeight,M=window.innerHeight;A-(N+M)<o()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),H())}function oe(){console.log("DatabaseListView: Refreshing..."),X()}var te={refresh:oe,get path(){return t()},set path(N=""){t(N),Qe()},get pageSize(){return r()},set pageSize(N=10){r(N),Qe()},get orderBy(){return s()},set orderBy(N="createdAt"){s(N),Qe()},get sortPrefix(){return i()},set sortPrefix(N=""){i(N),Qe()},get threshold(){return o()},set threshold(N=300){o(N),Qe()},get reverse(){return a()},set reverse(N=!1){a(N),Qe()},get item(){return l()},set item(N){l(N),Qe()},get loading(){return c()},set loading(N){c(N),Qe()},get empty(){return h()},set empty(N){h(N),Qe()},get error(){return m()},set error(N){m(N),Qe()},get loadingMore(){return f()},set loadingMore(N){f(N),Qe()},get noMore(){return _()},set noMore(N){_(N),Qe()}},j=f5(),K=u(j);{var Z=N=>{var A=t5(),M=u(A);{var q=O=>{var V=be(),W=he(V);Ls(W,c),k(O,V)},J=O=>{var V=e5();k(O,V)};Y(M,O=>{c()?O(q):O(J,!1)})}d(A),k(N,A)},re=N=>{var A=be(),M=he(A);{var q=O=>{var V=r5(),W=u(V);{var me=de=>{var se=be(),Pe=he(se);Ls(Pe,m,()=>v(B)),k(de,se)},ne=de=>{var se=n5(),Pe=p(u(se),2),Ne=u(Pe,!0);d(Pe);var qe=p(Pe,2);qe.__click=oe,d(se),U(()=>b(Ne,v(B))),k(de,se)};Y(W,de=>{m()?de(me):de(ne,!1)})}d(V),k(O,V)},J=O=>{var V=be(),W=he(V);{var me=de=>{var se=i5(),Pe=u(se);{var Ne=Se=>{var Me=be(),Re=he(Me);Ls(Re,h),k(Se,Me)},qe=Se=>{var Me=s5();k(Se,Me)};Y(Pe,Se=>{h()?Se(Ne):Se(qe,!1)})}d(se),k(de,se)},ne=de=>{var se=h5(),Pe=u(se);Gt(Pe,19,()=>v(g),Re=>Re.key,(Re,De,it)=>{var nt=a5(),Ge=u(nt);{var ze=we=>{var ye=be(),Oe=he(ye);Ls(Oe,l,()=>v(De),()=>v(it)),k(we,ye)},Ce=we=>{var ye=o5(),Oe=u(ye),ee=u(Oe,!0);d(Oe),d(ye),U(xe=>b(ee,xe),[()=>JSON.stringify(v(De).data,null,2)]),k(we,ye)};Y(Ge,we=>{l()?we(ze):we(Ce,!1)})}d(nt),U(()=>Le(nt,"data-key",v(De).key)),k(Re,nt)});var Ne=p(Pe,2);{var qe=Re=>{var De=c5(),it=u(De);{var nt=ze=>{var Ce=be(),we=he(Ce);Ls(we,f),k(ze,Ce)},Ge=ze=>{var Ce=l5();k(ze,Ce)};Y(it,ze=>{f()?ze(nt):ze(Ge,!1)})}d(De),k(Re,De)};Y(Ne,Re=>{v(w)&&Re(qe)})}var Se=p(Ne,2);{var Me=Re=>{var De=u5(),it=u(De);{var nt=ze=>{var Ce=be(),we=he(Ce);Ls(we,_),k(ze,Ce)},Ge=ze=>{var Ce=d5();k(ze,Ce)};Y(it,ze=>{_()?ze(nt):ze(Ge,!1)})}d(De),k(Re,De)};Y(Se,Re=>{!v(I)&&!v(w)&&Re(Me)})}d(se),k(de,se)};Y(W,de=>{v(g).length===0?de(me):de(ne,!1)},!0)}k(O,V)};Y(M,O=>{v(B)?O(q):O(J,!1)},!0)}k(N,A)};Y(K,N=>{v(x)?N(Z):N(re,!1)})}return d(j),Hc(j,N=>y(z,N),()=>v(z)),k(n,j),st(te)}vt(["click"]);ge(ru,{path:{},pageSize:{},orderBy:{},sortPrefix:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var v5=R('<img class="svelte-r48pmi"/>'),m5=R('<div class="avatar-placeholder svelte-r48pmi"> </div>'),g5=R('<span class="badge-me svelte-r48pmi"> </span>'),_5=R('<p class="user-email svelte-r48pmi"> </p>'),b5=R('<p class="user-bio svelte-r48pmi"> </p>'),w5=R('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi"> </button></div></div>'),y5=R('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p> </p></div>'),x5=R('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi"> </p></div>'),k5=R('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi"> </p> <p class="error-detail svelte-r48pmi"> </p></div>'),E5=R('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi"> </p></div>'),I5=R('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi"> </p></div>');const C5={hash:"svelte-r48pmi",code:`\r
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
  }`};function ig(n,e){rt(e,!1),tt(n,C5);const t=()=>Xe(St,"$t",r),[r,s]=yt();function i(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):t()("정보없음")}zt(()=>{An(t()("사용자찾기"))});function o(a){a===Ae.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}dn(),ru(n,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(_,g=In)=>{var w=w5();w.__click=()=>o(g().key),w.__keydown=j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),o(g().key))};var x=u(w),I=u(x);{var S=j=>{var K=v5();U(Z=>{Le(K,"src",g().data?.photoUrl??g().data?.photoURL),Le(K,"alt",Z)},[()=>g().data?.displayName||t()("사용자")]),k(j,K)},P=j=>{var K=m5(),Z=u(K,!0);d(K),U(re=>b(Z,re),[()=>g().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),k(j,K)};Y(I,j=>{g().data?.photoUrl||g().data?.photoURL?j(S):j(P,!1)})}d(x);var D=p(x,2),B=u(D),z=u(B),C=p(z);{var E=j=>{var K=g5(),Z=u(K,!0);d(K),U(re=>b(Z,re),[()=>t()("나뱃지")]),k(j,K)};Y(C,j=>{g().key===Ae.uid&&j(E)})}d(B);var T=p(B,2),L=u(T,!0);d(T);var $=p(T,2);{var F=j=>{var K=_5(),Z=u(K,!0);d(K),U(()=>b(Z,g().data.email)),k(j,K)};Y($,j=>{g().data?.email&&j(F)})}var G=p($,2);{var X=j=>{var K=b5(),Z=u(K,!0);d(K),U(()=>b(Z,g().data.bio)),k(j,K)};Y(G,j=>{g().data?.bio&&j(X)})}var H=p(G,2),le=u(H);d(H),d(D);var pe=p(D,2),oe=u(pe);oe.__click=j=>{j.stopPropagation(),o(g().key)};var te=u(oe,!0);d(oe),d(pe),d(w),U((j,K,Z,re)=>{b(z,`${j??""} `),b(L,g().key),b(le,`${K??""} ${Z??""}`),b(te,re)},[()=>g().data?.displayName||t()("이름없음"),()=>t()("가입일"),()=>i(g().data?.createdAt),()=>t()("프로필보기")]),k(_,w)},loading:_=>{var g=y5(),w=p(u(g),2),x=u(w,!0);d(w),d(g),U(I=>b(x,I),[()=>t()("사용자목록로딩")]),k(_,g)},empty:_=>{var g=x5(),w=p(u(g),2),x=u(w,!0);d(w),d(g),U(I=>b(x,I),[()=>t()("등록된사용자없음")]),k(_,g)},error:(_,g=In)=>{var w=k5(),x=p(u(w),2),I=u(x,!0);d(x);var S=p(x,2),P=u(S,!0);d(S),d(w),U(D=>{b(I,D),b(P,g())},[()=>t()("사용자목록로드실패")]),k(_,w)},loadingMore:_=>{var g=E5(),w=p(u(g),2),x=u(w,!0);d(w),d(g),U(I=>b(x,I),[()=>t()("더많은사용자로딩")]),k(_,g)},noMore:_=>{var g=I5(),w=u(g),x=u(w,!0);d(w),d(g),U(I=>b(x,I),[()=>t()("모든사용자로드완료")]),k(_,g)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),st(),s()}vt(["click","keydown"]);ge(ig,{},[],[],!0);const su=Es([]);function Dt(n,e="success",t=3e3){const r=Date.now();su.update(s=>[...s,{id:r,message:n,type:e}]),setTimeout(()=>{og(r)},t)}function og(n){su.update(e=>e.filter(t=>t.id!==n))}var T5=R('<img class="comment-avatar svelte-110g7vh"/>'),S5=R('<span class="comment-avatar-placeholder svelte-110g7vh"> </span>'),A5=R('<span class="count svelte-110g7vh"> </span>'),P5=R("<button> <!></button>"),R5=R('<button class="action-button reply-button svelte-110g7vh"> </button>'),N5=R('<div class="modal-backdrop svelte-110g7vh"><div class="modal svelte-110g7vh"><div class="modal-header svelte-110g7vh"><h2 class="svelte-110g7vh"> </h2> <button class="btn-close svelte-110g7vh">×</button></div> <div class="modal-content svelte-110g7vh"><textarea rows="5" class="svelte-110g7vh"></textarea></div> <div class="modal-footer svelte-110g7vh"><button class="btn-cancel svelte-110g7vh"> </button> <button class="btn-submit svelte-110g7vh"> </button></div></div></div>'),L5=R('<div class="comment-item svelte-110g7vh"><div class="comment-header svelte-110g7vh"><div class="comment-author svelte-110g7vh"><!> <span class="comment-author-name svelte-110g7vh"> </span></div> <span class="comment-date svelte-110g7vh"> </span></div> <p class="comment-content svelte-110g7vh"> </p> <div class="comment-actions svelte-110g7vh"><!> <!></div></div> <!>',1);const D5={hash:"svelte-110g7vh",code:`\r
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
  /* 댓글 액션 버튼 영역 */.comment-actions.svelte-110g7vh {display:flex;align-items:center;gap:0.5rem;margin-top:0.5rem;}\r
\r
  /* 액션 버튼 공통 스타일 */.action-button.svelte-110g7vh {display:inline-flex;align-items:center;gap:0.25rem;padding:0.375rem 0.75rem;font-size:0.75rem;background-color:transparent;border:1px solid;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;font-weight:500;}\r
\r
  /* 좋아요 버튼 */.like-button.svelte-110g7vh {color:#6b7280;border-color:#d1d5db;}.like-button.svelte-110g7vh:hover {background-color:#fee2e2;border-color:#fca5a5;color:#dc2626;}\r
\r
  /* 좋아요 한 버튼 강조 표시 */.like-button.liked.svelte-110g7vh {background-color:#fee2e2;border-color:#dc2626;color:#dc2626;font-weight:600;}.like-button.liked.svelte-110g7vh:hover {background-color:#fecaca;border-color:#b91c1c;color:#b91c1c;}\r
\r
  /* 답글 버튼 */.reply-button.svelte-110g7vh {color:#3b82f6;border-color:#93c5fd;}.reply-button.svelte-110g7vh:hover {background-color:#dbeafe;border-color:#3b82f6;color:#2563eb;}\r
\r
  /* 개수 표시 */.count.svelte-110g7vh {font-weight:600;font-size:0.7rem;}\r
\r
  /* 모달 배경 (backdrop) */.modal-backdrop.svelte-110g7vh {position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:1000;}\r
\r
  /* 모달 컨테이너 */.modal.svelte-110g7vh {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);max-width:500px;width:90%;max-height:90vh;overflow-y:auto;}\r
\r
  /* 모달 헤더 */.modal-header.svelte-110g7vh {display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;border-bottom:1px solid #e5e7eb;}.modal-header.svelte-110g7vh h2:where(.svelte-110g7vh) {margin:0;font-size:1.25rem;font-weight:600;color:#111827;}\r
\r
  /* 모달 닫기 버튼 */.btn-close.svelte-110g7vh {background:none;border:none;font-size:1.5rem;color:#6b7280;cursor:pointer;padding:0;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:0.25rem;transition:all 0.2s ease;}.btn-close.svelte-110g7vh:hover {background-color:#f3f4f6;color:#111827;}\r
\r
  /* 모달 내용 */.modal-content.svelte-110g7vh {padding:1.5rem;}.modal-content.svelte-110g7vh textarea:where(.svelte-110g7vh) {width:100%;padding:0.75rem;border:1px solid #d1d5db;border-radius:0.375rem;font-size:0.875rem;font-family:inherit;resize:vertical;transition:border-color 0.2s ease;}.modal-content.svelte-110g7vh textarea:where(.svelte-110g7vh):focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}\r
\r
  /* 모달 푸터 */.modal-footer.svelte-110g7vh {display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding:1rem 1.5rem;border-top:1px solid #e5e7eb;}\r
\r
  /* 취소 버튼 */.btn-cancel.svelte-110g7vh {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:#374151;background-color:#ffffff;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;}.btn-cancel.svelte-110g7vh:hover {background-color:#f9fafb;border-color:#9ca3af;}\r
\r
  /* 전송 버튼 */.btn-submit.svelte-110g7vh {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:#ffffff;background-color:#3b82f6;border:none;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;}.btn-submit.svelte-110g7vh:hover:not(:disabled) {background-color:#2563eb;}.btn-submit.svelte-110g7vh:disabled {opacity:0.6;cursor:not-allowed;}`};function ag(n,e){rt(e,!0),tt(n,D5);const t=()=>Xe(St,"$t",i),r=()=>Xe(c,"$userStore",i),s=()=>Xe(m,"$myLikeStore",i),[i,o]=yt();let a=et(e,"comment",7),l=et(e,"userId",7,null);const c=nu(`users/${a().uid}`),h=a().commentId.startsWith("-")?a().commentId.substring(1):a().commentId,m=l()?Xm(`likes/comment-${h}-${l()}`,0):null;let f=ie(!1),_=ie(""),g=ie(!1);async function w(){if(!l()){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const A=await eg("comment",a().commentId,l());A.success?A.isLiked?Dt(t()("좋아요를하였습니다"),"success"):Dt(t()("좋아요를취소했습니다"),"info"):Dt(t()(A.error),"error")}catch(A){console.error("좋아요 오류:",A),Dt(t()("error.unknown"),"error")}}function x(){if(!l()){alert(t()("로그인필요")),window.location.href="/user/login";return}y(f,!0)}async function I(){if(!v(_).trim()){Dt(t()("댓글내용입력필요"),"error");return}y(g,!0);try{const A=await kC({parentCommentId:a().commentId,userId:l(),content:v(_)});A.success?(Dt(t()("댓글이작성되었습니다"),"success"),y(f,!1),y(_,"")):Dt(t()(A.error),"error")}catch(A){console.error("답글 생성 오류:",A),Dt(t()("error.unknown"),"error")}finally{y(g,!1)}}function S(){y(f,!1),y(_,"")}var P={get comment(){return a()},set comment(A){a(A),Qe()},get userId(){return l()},set userId(A=null){l(A),Qe()}},D=L5(),B=he(D),z=u(B),C=u(z),E=u(C);{var T=A=>{var M=T5();U(q=>{Le(M,"src",r().data.photoUrl),Le(M,"alt",q)},[()=>r().data.displayName||t()("익명")]),k(A,M)},L=A=>{var M=S5(),q=u(M,!0);d(M),U(J=>b(q,J),[()=>(r().data?.displayName||t()("익명")).charAt(0).toUpperCase()]),k(A,M)};Y(E,A=>{r().data?.photoUrl?A(T):A(L,!1)})}var $=p(E,2),F=u($,!0);d($),d(C);var G=p(C,2),X=u(G,!0);d(G),d(z);var H=p(z,2),le=u(H,!0);d(H);var pe=p(H,2),oe=u(pe);{var te=A=>{var M=P5();M.__click=w;var q=u(M),J=p(q);{var O=V=>{var W=A5(),me=u(W,!0);d(W),U(()=>b(me,a().likeCount)),k(V,W)};Y(J,V=>{a().likeCount>0&&V(O)})}d(M),U((V,W)=>{on(M,1,`action-button like-button ${(s()?.data??0)>=1?"liked":""}`,"svelte-110g7vh"),Le(M,"title",V),b(q,`${(s()?.data??0)>=1?"❤️":"🤍"}
        ${W??""} `)},[()=>t()("좋아요"),()=>t()("좋아요")]),k(A,M)};Y(oe,A=>{l()&&A(te)})}var j=p(oe,2);{var K=A=>{var M=R5();M.__click=x;var q=u(M);d(M),U(J=>b(q,`💬 ${J??""}`),[()=>t()("답글")]),k(A,M)};Y(j,A=>{l()&&a().depth<12&&A(K)})}d(pe),d(B);var Z=p(B,2);{var re=A=>{var M=N5();M.__click=S;var q=u(M);q.__click=Se=>Se.stopPropagation();var J=u(q),O=u(J),V=u(O,!0);d(O);var W=p(O,2);W.__click=S,d(J);var me=p(J,2),ne=u(me);zc(ne),Mc(ne,!0),d(me);var de=p(me,2),se=u(de);se.__click=S;var Pe=u(se,!0);d(se);var Ne=p(se,2);Ne.__click=I;var qe=u(Ne,!0);d(Ne),d(de),d(q),d(M),U((Se,Me,Re,De)=>{b(V,Se),Le(ne,"placeholder",Me),b(Pe,Re),Ne.disabled=v(g),b(qe,De)},[()=>t()("답글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>v(g)?t()("전송중"):t()("전송")]),Yr(ne,()=>v(_),Se=>y(_,Se)),k(A,M)};Y(Z,A=>{v(f)&&A(re)})}U((A,M)=>{za(B,`padding-left: ${(a().depth-1)*2}rem;`),b(F,A),b(X,M),b(le,a().content)},[()=>r().data?.displayName||t()("익명"),()=>new Date(a().createdAt).toLocaleDateString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),k(n,D);var N=st(P);return o(),N}vt(["click"]);ge(ag,{comment:{},userId:{}},[],[],!0);var $5=R('<span class="count svelte-1fsdsc8"> </span>'),O5=R('<span class="count svelte-1fsdsc8"> </span>'),q5=R('<button class="action-btn edit icon-only svelte-1fsdsc8">✏️</button> <button class="action-btn delete icon-only svelte-1fsdsc8">🗑️</button>',1),M5=R('<button class="comments-show-more svelte-1fsdsc8"> </button>'),z5=R('<button class="comments-hide-extra svelte-1fsdsc8"> </button>'),U5=R('<div class="comments-list svelte-1fsdsc8"><!> <!> <!></div>'),F5=R('<div class="comments-section svelte-1fsdsc8"><button class="comments-toggle svelte-1fsdsc8"> </button> <!></div>'),j5=R('<div class="modal-backdrop svelte-1fsdsc8"><div class="modal svelte-1fsdsc8"><div class="modal-header svelte-1fsdsc8"><h2 class="svelte-1fsdsc8"> </h2> <button class="btn-close svelte-1fsdsc8">×</button></div> <div class="modal-content svelte-1fsdsc8"><textarea rows="5" class="svelte-1fsdsc8"></textarea></div> <div class="modal-footer svelte-1fsdsc8"><button class="btn-cancel svelte-1fsdsc8"> </button> <button class="btn-submit svelte-1fsdsc8"> </button></div></div></div>'),B5=R('<div class="post-item svelte-1fsdsc8"><div class="post-item-top svelte-1fsdsc8"><span class="post-category-pill svelte-1fsdsc8"> </span> <span class="post-number svelte-1fsdsc8"> </span></div> <h3 class="post-title svelte-1fsdsc8"> </h3> <p class="post-content svelte-1fsdsc8"> </p> <div class="post-meta svelte-1fsdsc8"><div class="author-chip svelte-1fsdsc8"><span class="author-avatar svelte-1fsdsc8"> </span> <span class="post-author"> </span></div> <span class="post-date svelte-1fsdsc8"> </span></div> <div class="post-actions svelte-1fsdsc8"><div class="post-actions-left svelte-1fsdsc8"><button class="action-btn svelte-1fsdsc8"> <!></button> <button> <!></button> <button class="action-btn svelte-1fsdsc8"> </button> <button class="action-btn svelte-1fsdsc8"> </button></div> <div class="post-actions-right svelte-1fsdsc8"><!></div></div> <!></div> <!>',1);const V5={hash:"svelte-1fsdsc8",code:`.post-item.svelte-1fsdsc8 {padding:1.5rem 1.75rem;border-radius:0.85rem;background:linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);border:1px solid #e5e7eb;display:flex;flex-direction:column;gap:1rem;transition:transform 0.2s ease,
      box-shadow 0.2s ease;margin:1rem 0;}.post-item.svelte-1fsdsc8:hover {transform:translateY(-2px);box-shadow:0 16px 28px rgba(17, 24, 39, 0.12);}.post-item-top.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;}.post-category-pill.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.35rem;padding:0.35rem 0.75rem;border-radius:9999px;font-size:0.75rem;font-weight:600;color:#1d4ed8;background-color:#eff6ff;}.post-number.svelte-1fsdsc8 {font-weight:700;color:#9ca3af;font-size:0.9rem;}.post-title.svelte-1fsdsc8 {margin:0;font-size:1.2rem;font-weight:700;color:#111827;line-height:1.5;}.post-content.svelte-1fsdsc8 {margin:0;font-size:0.925rem;color:#4b5563;line-height:1.7;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}.post-meta.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;gap:1rem;font-size:0.8rem;color:#6b7280;}.author-chip.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.5rem;}.author-avatar.svelte-1fsdsc8 {width:2rem;height:2rem;border-radius:9999px;background:#1d4ed8;color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;}.post-date.svelte-1fsdsc8 {color:#9ca3af;font-variant-numeric:tabular-nums;}.post-actions.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding-top:0.5rem;}.post-actions-left.svelte-1fsdsc8,
  .post-actions-right.svelte-1fsdsc8 {display:flex;align-items:center;gap:0.25rem;flex-wrap:wrap;}.action-btn.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.3rem;padding:0.4rem 0.65rem;border:none;border-radius:0.5rem;background-color:transparent;color:#6b7280;font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}.action-btn.svelte-1fsdsc8:hover {background-color:#f3f4f6;color:#111827;}.action-btn.svelte-1fsdsc8:active {transform:scale(0.95);}

  /* 좋아요 한 버튼 강조 표시 */.action-btn.liked.svelte-1fsdsc8 {background-color:#fee2e2;color:#dc2626;font-weight:600;}.action-btn.liked.svelte-1fsdsc8:hover {background-color:#fecaca;color:#b91c1c;}.count.svelte-1fsdsc8 {font-weight:600;font-size:0.75rem;}

  /* === 모달 다이얼로그 스타일 === */

  /* 모달 배경 (반투명 오버레이) */.modal-backdrop.svelte-1fsdsc8 {position:fixed;inset:0;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem;}

  /* 모달 컨테이너 */.modal.svelte-1fsdsc8 {background-color:#ffffff;border-radius:1rem;box-shadow:0 20px 40px rgba(0, 0, 0, 0.2);max-width:500px;width:100%;max-height:90vh;overflow-y:auto;}

  /* 모달 헤더 */.modal-header.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;padding:1.5rem;border-bottom:1px solid #e5e7eb;}.modal-header.svelte-1fsdsc8 h2:where(.svelte-1fsdsc8) {margin:0;font-size:1.25rem;font-weight:700;color:#111827;}.btn-close.svelte-1fsdsc8 {background:none;border:none;font-size:2rem;color:#6b7280;cursor:pointer;line-height:1;padding:0;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:0.5rem;transition:all 0.2s ease;}.btn-close.svelte-1fsdsc8:hover {background-color:#f3f4f6;color:#111827;}

  /* 모달 내용 */.modal-content.svelte-1fsdsc8 {padding:1.5rem;}.modal-content.svelte-1fsdsc8 textarea:where(.svelte-1fsdsc8) {width:100%;padding:0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.95rem;font-family:inherit;resize:vertical;min-height:120px;transition:border-color 0.2s ease;}.modal-content.svelte-1fsdsc8 textarea:where(.svelte-1fsdsc8):focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}

  /* 모달 푸터 */.modal-footer.svelte-1fsdsc8 {display:flex;gap:0.75rem;padding:1.5rem;border-top:1px solid #e5e7eb;justify-content:flex-end;}.btn-cancel.svelte-1fsdsc8,
  .btn-submit.svelte-1fsdsc8 {padding:0.65rem 1.25rem;border-radius:0.5rem;font-size:0.95rem;font-weight:600;cursor:pointer;border:none;transition:all 0.2s ease;}.btn-cancel.svelte-1fsdsc8 {background-color:#f3f4f6;color:#374151;}.btn-cancel.svelte-1fsdsc8:hover {background-color:#e5e7eb;}.btn-submit.svelte-1fsdsc8 {background-color:#3b82f6;color:#ffffff;}.btn-submit.svelte-1fsdsc8:hover:not(:disabled) {background-color:#2563eb;}.btn-submit.svelte-1fsdsc8:disabled {opacity:0.6;cursor:not-allowed;}.btn-submit.svelte-1fsdsc8:active:not(:disabled) {transform:scale(0.98);}

  /* === 댓글 목록 스타일 === */

  /* 댓글 섹션 */.comments-section.svelte-1fsdsc8 {margin-top:1rem;padding-top:1rem;border-top:1px solid #e5e7eb;}

  /* 댓글 토글 버튼 */.comments-toggle.svelte-1fsdsc8 {width:100%;padding:0.5rem 0.75rem;background:none;border:none;text-align:left;font-size:0.9rem;font-weight:600;color:#374151;cursor:pointer;display:flex;align-items:center;gap:0.5rem;transition:all 0.2s ease;}.comments-toggle.svelte-1fsdsc8:hover {color:#111827;background-color:#f9fafb;}

  /* 댓글 목록 */.comments-list.svelte-1fsdsc8 {margin-top:0.75rem;display:flex;flex-direction:column;gap:0.75rem;}

  /* 댓글 더 보기 버튼 */.comments-show-more.svelte-1fsdsc8 {margin-top:0.75rem;padding:0.65rem 1rem;width:100%;background-color:#f0f4ff;color:#3b82f6;border:1px solid #d1d5ff;border-radius:0.5rem;font-size:0.875rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;text-align:center;}.comments-show-more.svelte-1fsdsc8:hover {background-color:#e0eaff;border-color:#3b82f6;transform:translateY(-1px);}.comments-show-more.svelte-1fsdsc8:active {transform:translateY(0);}

  /* 댓글 숨기기 버튼 */.comments-hide-extra.svelte-1fsdsc8 {margin-top:0.75rem;padding:0.65rem 1rem;width:100%;background-color:#f9fafb;color:#6b7280;border:1px solid #e5e7eb;border-radius:0.5rem;font-size:0.875rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;text-align:center;}.comments-hide-extra.svelte-1fsdsc8:hover {background-color:#f3f4f6;border-color:#d1d5db;color:#374151;}.comments-hide-extra.svelte-1fsdsc8:active {transform:translateY(0);}`};function lg(n,e){rt(e,!0),tt(n,V5);const t=()=>Xe(St,"$t",s),r=()=>Xe(f,"$myLikeStore",s),[s,i]=yt();let o=et(e,"itemData",7),a=et(e,"index",7),l=et(e,"category",7),c=et(e,"userId",7),h=et(e,"onLike",7,()=>{});const m=o().postId.startsWith("-")?o().postId.substring(1):o().postId,f=c()?Xm(`likes/post-${m}-${c()}`,0):null;let _=ie(!1),g=ie(""),w=ie(!1),x=ie(Zt([])),I=ie(!0),S=ie(!1);const P=5;function D(){return v(S)?v(x):v(x).length>P?v(x).slice(-P):v(x)}zt(()=>{const ee=EC(o().postId,xe=>{y(x,xe,!0)});return()=>{ee()}});async function B(){if(!c()){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const ee=await eg("post",o().postId,c());ee.success?(ee.isLiked?Dt(t()("좋아요를하였습니다"),"success"):Dt(t()("좋아요를취소했습니다"),"info"),h()(o().postId)):Dt(t()(ee.error),"error")}catch(ee){console.error("좋아요 오류:",ee),Dt(t()("error.unknown"),"error")}}function z(){if(!c()){alert(t()("로그인필요")),window.location.href="/user/login";return}y(_,!0)}async function C(){if(!c()){Dt(t()("로그인필요"),"error");return}if(!v(g).trim()){Dt(t()("댓글내용입력필요"),"error");return}y(w,!0);try{const ee=await xC({postId:o().postId,userId:c(),content:v(g)});ee.success?(Dt(t()("댓글이작성되었습니다"),"success"),y(_,!1),y(g,""),y(I,!0)):Dt(t()(ee.error),"error")}catch(ee){console.error("댓글 생성 오류:",ee),Dt(t()("error.unknown"),"error")}finally{y(w,!1)}}function E(){y(_,!1),y(g,"")}var T={get itemData(){return o()},set itemData(ee){o(ee),Qe()},get index(){return a()},set index(ee){a(ee),Qe()},get category(){return l()},set category(ee){l(ee),Qe()},get userId(){return c()},set userId(ee){c(ee),Qe()},get onLike(){return h()},set onLike(ee=()=>{}){h(ee),Qe()}},L=B5(),$=he(L),F=u($),G=u(F),X=u(G,!0);d(G);var H=p(G,2),le=u(H);d(H),d(F);var pe=p(F,2),oe=u(pe,!0);d(pe);var te=p(pe,2),j=u(te,!0);d(te);var K=p(te,2),Z=u(K),re=u(Z),N=u(re,!0);d(re);var A=p(re,2),M=u(A,!0);d(A),d(Z);var q=p(Z,2),J=u(q,!0);d(q),d(K);var O=p(K,2),V=u(O),W=u(V);W.__click=z;var me=u(W),ne=p(me);{var de=ee=>{var xe=$5(),Ve=u(xe,!0);d(xe),U(()=>b(Ve,v(x).length)),k(ee,xe)};Y(ne,ee=>{v(x).length>0&&ee(de)})}d(W);var se=p(W,2);se.__click=B;var Pe=u(se),Ne=p(Pe);{var qe=ee=>{var xe=O5(),Ve=u(xe,!0);d(xe),U(()=>b(Ve,o().likeCount)),k(ee,xe)};Y(Ne,ee=>{o().likeCount>0&&ee(qe)})}d(se);var Se=p(se,2),Me=u(Se);d(Se);var Re=p(Se,2),De=u(Re);d(Re),d(V);var it=p(V,2),nt=u(it);{var Ge=ee=>{var xe=q5(),Ve=he(xe),Ke=p(Ve,2);U((Be,dt)=>{Le(Ve,"title",Be),Le(Ke,"title",dt)},[()=>t()("수정"),()=>t()("삭제")]),k(ee,xe)};Y(nt,ee=>{c()===o().uid&&ee(Ge)})}d(it),d(O);var ze=p(O,2);{var Ce=ee=>{var xe=F5(),Ve=u(xe);Ve.__click=()=>y(I,!v(I));var Ke=u(Ve);d(Ve);var Be=p(Ve,2);{var dt=ct=>{var bt=U5(),ae=u(bt);Gt(ae,17,D,_e=>_e.commentId,(_e,ue)=>{ag(_e,{get comment(){return v(ue)},get userId(){return c()}})});var fe=p(ae,2);{var ve=_e=>{var ue=M5();ue.__click=()=>y(S,!0);var Ye=u(ue);d(ue),U(Ze=>b(Ye,`📋 ${Ze??""}`),[()=>t()("댓글더보기",{count:v(x).length-P})]),k(_e,ue)};Y(fe,_e=>{v(x).length>P&&!v(S)&&_e(ve)})}var ke=p(fe,2);{var Te=_e=>{var ue=z5();ue.__click=()=>y(S,!1);var Ye=u(ue);d(ue),U(Ze=>b(Ye,`▲ ${Ze??""}`),[()=>t()("댓글숨기기")]),k(_e,ue)};Y(ke,_e=>{v(S)&&_e(Te)})}d(bt),k(ct,bt)};Y(Be,ct=>{v(I)&&ct(dt)})}d(xe),U(ct=>b(Ke,`${v(I)?"▼":"▶"}
        ${ct??""} (${v(x).length??""})`),[()=>t()("댓글")]),k(ee,xe)};Y(ze,ee=>{v(x).length>0&&ee(Ce)})}d($);var we=p($,2);{var ye=ee=>{var xe=j5();xe.__click=E;var Ve=u(xe);Ve.__click=ue=>ue.stopPropagation();var Ke=u(Ve),Be=u(Ke),dt=u(Be,!0);d(Be);var ct=p(Be,2);ct.__click=E,d(Ke);var bt=p(Ke,2),ae=u(bt);zc(ae),Mc(ae,!0),d(bt);var fe=p(bt,2),ve=u(fe);ve.__click=E;var ke=u(ve,!0);d(ve);var Te=p(ve,2);Te.__click=C;var _e=u(Te,!0);d(Te),d(fe),d(Ve),d(xe),U((ue,Ye,Ze,At)=>{b(dt,ue),Le(ae,"placeholder",Ye),b(ke,Ze),Te.disabled=v(w),b(_e,At)},[()=>t()("댓글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>v(w)?t()("전송중"):t()("전송")]),Yr(ae,()=>v(g),ue=>y(g,ue)),k(ee,xe)};Y(we,ee=>{v(_)&&ee(ye)})}U((ee,xe,Ve,Ke,Be,dt,ct,bt,ae,fe,ve,ke)=>{b(X,l()),b(le,`#${ee??""}`),b(oe,o().title),b(j,o().content),b(N,xe),b(M,Ve),b(J,Ke),Le(W,"title",Be),b(me,`💬 ${dt??""} `),on(se,1,`action-btn ${(r()?.data??0)>=1?"liked":""}`,"svelte-1fsdsc8"),Le(se,"title",ct),b(Pe,`${(r()?.data??0)>=1?"❤️":"🤍"}
        ${bt??""} `),Le(Se,"title",ae),b(Me,`💬 ${fe??""}`),Le(Re,"title",ve),b(De,`🚨 ${ke??""}`)},[()=>String(a()+1).padStart(2,"0"),()=>(o().author||t()("익명")).charAt(0).toUpperCase(),()=>o().author||t()("익명"),()=>new Date(o().createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),()=>t()("댓글"),()=>t()("댓글"),()=>t()("좋아요"),()=>t()("좋아요"),()=>t()("채팅"),()=>t()("채팅"),()=>t()("신고"),()=>t()("신고")]),k(n,L);var Oe=st(T);return i(),Oe}vt(["click"]);ge(lg,{itemData:{},index:{},category:{},userId:{},onLike:{}},[],[],!0);var H5=R('<div class="loading-screen"><p> </p></div>'),W5=R("<button> </button>"),G5=R('<div class="empty-state"><div class="empty-illustration">🗂️</div> <h3 class="empty-title"> </h3> <p class="empty-message"> </p> <button class="btn-create-post ghost svelte-1r1wwfo"> </button></div>'),K5=R('<div class="loading-state"><div class="spinner"></div> <p> </p></div>'),Y5=R('<div class="error-state"><div class="error-icon">⚠️</div> <div><p class="error-message"> </p> <p class="error-detail"> </p></div></div>'),Q5=R('<div class="loading-more"><div class="spinner small"></div> <p> </p></div>'),J5=R('<div class="no-more"><p> </p></div>'),X5=R("<option> </option>"),Z5=R('<div class="modal-backdrop svelte-1r1wwfo" aria-hidden="true"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo"> </h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo"> </label> <select id="category" class="form-control svelte-1r1wwfo"><option> </option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo"> </label> <input id="title" type="text" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo"> </label> <textarea id="content" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo"> </button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),eT=R('<div class="post-list-container svelte-1r1wwfo"><div class="toolbar svelte-1r1wwfo"><div class="toolbar-left svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div></div> <button class="btn-create-post svelte-1r1wwfo"> </button></div> <div class="post-list-surface svelte-1r1wwfo"><!></div></div> <!>',1);const tT={hash:"svelte-1r1wwfo",code:`\r
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
      box-shadow 0.2s ease;}.form-control.svelte-1r1wwfo:focus {outline:none;border-color:#2563eb;background:#ffffff;box-shadow:0 0 0 4px rgba(37, 99, 235, 0.15);}.form-control.textarea.svelte-1r1wwfo {resize:vertical;min-height:160px;}.modal-footer.svelte-1r1wwfo {display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding:1.25rem 1.5rem 1.5rem;background:rgba(248, 250, 252, 0.85);border-top:1px solid rgba(148, 163, 184, 0.25);}.btn-cancel.svelte-1r1wwfo,\r
  .btn-submit.svelte-1r1wwfo {padding:0.65rem 1.25rem;border-radius:0.75rem;font-size:0.9rem;font-weight:600;cursor:pointer;border:none;transition:transform 0.2s ease,\r
      box-shadow 0.2s ease,\r
      opacity 0.2s ease;}.btn-cancel.svelte-1r1wwfo {background:#e2e8f0;color:#1f2937;}.btn-cancel.svelte-1r1wwfo:hover {transform:translateY(-1px);box-shadow:0 10px 18px rgba(15, 23, 42, 0.12);}.btn-submit.svelte-1r1wwfo {background:linear-gradient(135deg, #2563eb, #1d4ed8);color:#ffffff;}.btn-submit.svelte-1r1wwfo:hover {transform:translateY(-1px);box-shadow:0 14px 24px rgba(37, 99, 235, 0.25);}.btn-cancel.svelte-1r1wwfo:disabled,\r
  .btn-submit.svelte-1r1wwfo:disabled {cursor:not-allowed;opacity:0.65;transform:none;box-shadow:none;}\r
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
  /* 게시글 아이템 스타일은 PostItem.svelte로 이동했습니다 */`};function cg(n,e){rt(e,!0),tt(n,tT);const t=()=>Xe(St,"$t",r),[r,s]=yt();let i=ie(null),o=ie(""),a=ie(!0);const l=new URLSearchParams(typeof window<"u"?window.location.search:"");let c=ie(Zt(l.get("category")||"community")),h=ie(!1),m=ie(""),f=ie(""),_=ie(""),g=ie(!1);zt(()=>{An(t()("게시판"));const C=Ir.onAuthStateChanged(async E=>{if(E){y(i,E.uid,!0);const T=E.displayName||E.email||t()("익명");y(o,T,!0)}else y(i,null),y(o,"");y(a,!1)});return()=>C()});function w(){if(!v(i)){window.location.href="/user/login";return}y(h,!0)}function x(){y(h,!1),y(m,""),y(f,""),y(_,"")}async function I(){if(!v(m)){alert(t()("카테고리선택필요"));return}if(!v(f).trim()){alert(t()("제목입력필요"));return}if(!v(_).trim()){alert(t()("내용입력필요"));return}if(!v(i)||!v(o)){alert(t()("로그인정보확인불가"));return}y(g,!0);try{const C=await wC(v(m),v(i),v(o),v(f),v(_));C.success?(y(h,!1),y(m,""),y(f,""),y(_,""),Dt(t()("게시글작성완료"),"success")):Dt(t()("게시글저장실패",{error:C.error||"Unknown error"}),"error")}catch(C){console.error("게시글 저장 오류:",C),Dt(t()("게시글저장중오류"),"error")}finally{y(g,!1)}}function S(C){y(c,C,!0),window.history.pushState({},"",`/post/list?category=${C}`)}var P=be(),D=he(P);{var B=C=>{var E=H5(),T=u(E),L=u(T,!0);d(T),d(E),U($=>b(L,$),[()=>t()("로딩중")]),k(C,E)},z=C=>{var E=eT(),T=he(E),L=u(T),$=u(L),F=u($);Gt(F,20,()=>Xh,te=>te,(te,j)=>{var K=W5();K.__click=()=>S(j);var Z=u(K,!0);d(K),U(re=>{on(K,1,`tab ${v(c)===j?"active":""}`,"svelte-1r1wwfo"),b(Z,re)},[()=>t()(`label.category.${j}`)]),k(te,K)}),d(F),d($);var G=p($,2);G.__click=w;var X=u(G);d(G),d(L);var H=p(L,2),le=u(H);qb(le,()=>v(c),te=>{{const j=(q,J=In,O=In)=>{{let V=Js(()=>({...J().data,postId:J().key}));lg(q,{get itemData(){return v(V)},get index(){return O()},get category(){return J().data.category},get userId(){return v(i)}})}},K=q=>{var J=G5(),O=p(u(J),2),V=u(O,!0);d(O);var W=p(O,2),me=u(W,!0);d(W);var ne=p(W,2);ne.__click=w;var de=u(ne);d(ne),d(J),U((se,Pe,Ne)=>{b(V,se),b(me,Pe),b(de,`✏️ ${Ne??""}`)},[()=>t()("게시글없음"),()=>t()("첫게시글공유"),()=>t()("새글작성")]),k(q,J)},Z=q=>{var J=K5(),O=p(u(J),2),V=u(O,!0);d(O),d(J),U(W=>b(V,W),[()=>t()("게시글로딩중")]),k(q,J)},re=(q,J=In)=>{var O=Y5(),V=p(u(O),2),W=u(V),me=u(W,!0);d(W);var ne=p(W,2),de=u(ne,!0);d(ne),d(V),d(O),U(se=>{b(me,se),b(de,J())},[()=>t()("게시글로드실패")]),k(q,O)},N=q=>{var J=Q5(),O=p(u(J),2),V=u(O,!0);d(O),d(J),U(W=>b(V,W),[()=>t()("더많은게시글로딩")]),k(q,J)},A=q=>{var J=J5(),O=u(J),V=u(O,!0);d(O),d(J),U(W=>b(V,W),[()=>t()("모든게시글확인")]),k(q,J)};let M=Js(()=>`${v(c)}-`);ru(te,{path:"posts",orderBy:"order",get sortPrefix(){return v(M)},reverse:!0,pageSize:20,item:j,empty:K,loading:Z,error:re,loadingMore:N,noMore:A,$$slots:{item:!0,empty:!0,loading:!0,error:!0,loadingMore:!0,noMore:!0}})}}),d(H),d(T);var pe=p(T,2);{var oe=te=>{var j=Z5();j.__click=()=>y(h,!1),j.__keydown=Ce=>Ce.key==="Escape"&&y(h,!1);var K=u(j);K.__click=Ce=>Ce.stopPropagation();var Z=u(K),re=u(Z),N=u(re,!0);d(re);var A=p(re,2);A.__click=()=>y(h,!1),d(Z);var M=p(Z,2),q=u(M),J=u(q),O=u(J,!0);d(J);var V=p(J,2),W=u(V),me=u(W,!0);d(W),W.value=W.__value="";var ne=p(W);Gt(ne,16,()=>Xh,Ce=>Ce,(Ce,we)=>{var ye=X5(),Oe=u(ye,!0);d(ye);var ee={};U(xe=>{b(Oe,xe),ee!==(ee=we)&&(ye.value=(ye.__value=we)??"")},[()=>t()(`label.category.${we}`)]),k(Ce,ye)}),d(V),d(q);var de=p(q,2),se=u(de),Pe=u(se,!0);d(se);var Ne=p(se,2);ti(Ne),d(de);var qe=p(de,2),Se=u(qe),Me=u(Se,!0);d(Se);var Re=p(Se,2);zc(Re),d(qe),d(M);var De=p(M,2),it=u(De);it.__click=x;var nt=u(it,!0);d(it);var Ge=p(it,2);Ge.__click=I;var ze=u(Ge,!0);d(Ge),d(De),d(K),d(j),U((Ce,we,ye,Oe,ee,xe,Ve,Ke,Be)=>{b(N,Ce),b(O,we),b(me,ye),b(Pe,Oe),Le(Ne,"placeholder",ee),b(Me,xe),Le(Re,"placeholder",Ve),it.disabled=v(g),b(nt,Ke),Ge.disabled=v(g),b(ze,Be)},[()=>t()("새게시글작성"),()=>t()("카테고리"),()=>t()("카테고리선택"),()=>t()("제목"),()=>t()("제목입력"),()=>t()("내용"),()=>t()("내용입력"),()=>t()("취소"),()=>v(g)?t()("전송중"):t()("전송")]),Vc(V,()=>v(m),Ce=>y(m,Ce)),Yr(Ne,()=>v(f),Ce=>y(f,Ce)),Yr(Re,()=>v(_),Ce=>y(_,Ce)),k(te,j)};Y(pe,te=>{v(h)&&te(oe)})}U(te=>b(X,`✏️ ${te??""}`),[()=>t()("글쓰기")]),k(C,E)};Y(D,C=>{v(a)?C(B):C(z,!1)})}k(n,P),st(),s()}vt(["click","keydown"]);ge(cg,{},[],[],!0);var nT=R('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6"> </p> <p class="construction-description svelte-1sszjx6"> </p></div> <button class="back-button svelte-1sszjx6"> </button></div></div>');const rT={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function dg(n,e){rt(e,!1),tt(n,rT);const t=()=>Xe(St,"$t",r),[r,s]=yt();zt(()=>{An(t()("게시물목록"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}dn();var o=nT(),a=u(o),l=u(a),c=p(u(l),2),h=u(c,!0);d(c);var m=p(c,2),f=u(m,!0);d(m),d(l);var _=p(l,2);_.__click=i;var g=u(_,!0);d(_),d(a),d(o),U((w,x,I)=>{b(h,w),b(f,x),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_게시물상세"),()=>t()("메뉴로돌아가기")]),k(n,o),st(),s()}vt(["click"]);ge(dg,{},[],[],!0);var sT=R('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9"> </p> <p class="construction-description svelte-1xfn8v9"> </p></div> <button class="back-button svelte-1xfn8v9"> </button></div></div>');const iT={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function ug(n,e){rt(e,!1),tt(n,iT);const t=()=>Xe(St,"$t",r),[r,s]=yt();zt(()=>{An(t()("채팅"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}dn();var o=sT(),a=u(o),l=u(a),c=p(u(l),2),h=u(c,!0);d(c);var m=p(c,2),f=u(m,!0);d(m),d(l);var _=p(l,2);_.__click=i;var g=u(_,!0);d(_),d(a),d(o),U((w,x,I)=>{b(h,w),b(f,x),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_채팅목록"),()=>t()("메뉴로돌아가기")]),k(n,o),st(),s()}vt(["click"]);ge(ug,{},[],[],!0);var oT=R('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08"> </p> <p class="construction-description svelte-177ja08"> </p></div> <button class="back-button svelte-177ja08"> </button></div></div>');const aT={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function hg(n,e){rt(e,!1),tt(n,aT);const t=()=>Xe(St,"$t",r),[r,s]=yt();zt(()=>{An(t()("설정"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}dn();var o=oT(),a=u(o),l=u(a),c=p(u(l),2),h=u(c,!0);d(c);var m=p(c,2),f=u(m,!0);d(m),d(l);var _=p(l,2);_.__click=i;var g=u(_,!0);d(_),d(a),d(o),U((w,x,I)=>{b(h,w),b(f,x),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_설정"),()=>t()("메뉴로돌아가기")]),k(n,o),st(),s()}vt(["click"]);ge(hg,{},[],[],!0);var lT=R('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe"> </p> <p class="construction-description svelte-65loqe"> </p></div> <button class="back-button svelte-65loqe"> </button></div></div>');const cT={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function fg(n,e){rt(e,!1),tt(n,cT);const t=()=>Xe(St,"$t",r),[r,s]=yt();zt(()=>{An(t()("정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}dn();var o=lT(),a=u(o),l=u(a),c=p(u(l),2),h=u(c,!0);d(c);var m=p(c,2),f=u(m,!0);d(m),d(l);var _=p(l,2);_.__click=i;var g=u(_,!0);d(_),d(a),d(o),U((w,x,I)=>{b(h,w),b(f,x),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_앱정보"),()=>t()("메뉴로돌아가기")]),k(n,o),st(),s()}vt(["click"]);ge(fg,{},[],[],!0);var dT=R('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna"> </p> <p class="construction-description svelte-19u7yna"> </p></div> <button class="back-button svelte-19u7yna"> </button></div></div>');const uT={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function pg(n,e){rt(e,!1),tt(n,uT);const t=()=>Xe(St,"$t",r),[r,s]=yt();zt(()=>{An(t()("도움말"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}dn();var o=dT(),a=u(o),l=u(a),c=p(u(l),2),h=u(c,!0);d(c);var m=p(c,2),f=u(m,!0);d(m),d(l);var _=p(l,2);_.__click=i;var g=u(_,!0);d(_),d(a),d(o),U((w,x,I)=>{b(h,w),b(f,x),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_도움말"),()=>t()("메뉴로돌아가기")]),k(n,o),st(),s()}vt(["click"]);ge(pg,{},[],[],!0);var hT=R('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w"> </p> <p class="construction-description svelte-134dw7w"> </p></div> <button class="back-button svelte-134dw7w"> </button></div></div>');const fT={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function vg(n,e){rt(e,!1),tt(n,fT);const t=()=>Xe(St,"$t",r),[r,s]=yt();zt(()=>{An(t()("이용약관"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}dn();var o=hT(),a=u(o),l=u(a),c=p(u(l),2),h=u(c,!0);d(c);var m=p(c,2),f=u(m,!0);d(m),d(l);var _=p(l,2);_.__click=i;var g=u(_,!0);d(_),d(a),d(o),U((w,x,I)=>{b(h,w),b(f,x),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_이용약관"),()=>t()("메뉴로돌아가기")]),k(n,o),st(),s()}vt(["click"]);ge(vg,{},[],[],!0);var pT=R('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj"> </p> <p class="construction-description svelte-8iwrwj"> </p></div> <button class="back-button svelte-8iwrwj"> </button></div></div>');const vT={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function mg(n,e){rt(e,!1),tt(n,vT);const t=()=>Xe(St,"$t",r),[r,s]=yt();zt(()=>{An(t()("개인정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}dn();var o=pT(),a=u(o),l=u(a),c=p(u(l),2),h=u(c,!0);d(c);var m=p(c,2),f=u(m,!0);d(m),d(l);var _=p(l,2);_.__click=i;var g=u(_,!0);d(_),d(a),d(o),U((w,x,I)=>{b(h,w),b(f,x),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_개인정보"),()=>t()("메뉴로돌아가기")]),k(n,o),st(),s()}vt(["click"]);ge(mg,{},[],[],!0);var mT=R('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3"> </p> <p class="construction-description svelte-1f7uyy3"> </p></div> <button class="back-button svelte-1f7uyy3"> </button></div></div>');const gT={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function gg(n,e){rt(e,!1),tt(n,gT);const t=()=>Xe(St,"$t",r),[r,s]=yt();zt(()=>{An(t()("문의하기"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}dn();var o=mT(),a=u(o),l=u(a),c=p(u(l),2),h=u(c,!0);d(c);var m=p(c,2),f=u(m,!0);d(m),d(l);var _=p(l,2);_.__click=i;var g=u(_,!0);d(_),d(a),d(o),U((w,x,I)=>{b(h,w),b(f,x),b(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_문의하기"),()=>t()("메뉴로돌아가기")]),k(n,o),st(),s()}vt(["click"]);ge(gg,{},[],[],!0);var _T=R('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/user/login" class="svelte-uqnmwp"> </a></div>'),bT=R('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),wT=R('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),yT=R('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp"> </h3> <div class="logs svelte-uqnmwp"></div></div>'),xT=R('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/post/list" class="btn-view svelte-uqnmwp"> </a></div>'),kT=R('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <button class="btn-generate btn-news svelte-uqnmwp"> </button> <!></div> <!> <!>',1),ET=R('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp"> </h1> <p class="svelte-uqnmwp">커뮤니티 게시판에 100개, 뉴스 게시판에 200개의 테스트 글을 생성합니다.</p> <p class="header-detail svelte-uqnmwp">뉴스 게시판은 각 글의 생성 시간이 1초씩 차이나도록 설정됩니다.</p></div> <!></div></div>');const IT={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 0.25rem 0;color:#6b7280;}.header-detail.svelte-uqnmwp {font-size:0.875rem;color:#9ca3af;margin-top:0.5rem;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;display:flex;flex-direction:column;gap:1rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}\r
\r
  /* 뉴스 버튼 스타일 (초록색) */.btn-news.svelte-uqnmwp {background-color:#10b981;}.btn-news.svelte-uqnmwp:hover:not(:disabled) {background-color:#059669;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function _g(n,e){rt(e,!0),tt(n,IT);const t=()=>Xe(St,"$t",r),[r,s]=yt();let i=ie(!1),o=ie(!1),a=ie(Zt({current:0,total:0,category:""})),l=ie(Zt([])),c=ie(!1);zt(()=>{An(t()("테스트게시글생성타이틀"))});function h(T,L="info"){y(l,[...v(l),{message:T,type:L,time:new Date().toLocaleTimeString()}],!0)}const m={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]}},f={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function _(T){return T[Math.floor(Math.random()*T.length)]}function g(T){let L=T;for(const[$,F]of Object.entries(f)){const G=new RegExp(`\\{${$}\\}`,"g");L=L.replace(G,_(F))}return L}async function w(){if(!Ae.isAuthenticated||!Ae.uid){h(t()("로그인필요"),"error");return}y(i,!0),y(c,!1),y(l,[],!0),h(t()("테스트데이터생성시작"),"success"),h(t()("사용자정보",{user:Ae.data?.displayName||Ae.email}),"info");const T="community",L=t()("커뮤니티");y(a,{current:0,total:100,category:L},!0),h(t()("카테고리생성중",{category:L}),"info");const $=m.community;let F=0;const G=Date.now();for(let X=0;X<100;X++)try{const H=g(_($.titles)),le=`${X+1}. ${H}`,pe=g(_($.contents)),oe=G-Math.floor(Math.random()*30*24*60*60*1e3),te={uid:Ae.uid,title:le,content:pe,author:Ae.data?.displayName||Ae.email||t()("익명"),category:T,order:`${T}-${oe}`,createdAt:oe,updatedAt:G,likeCount:0,commentCount:0},j=$t(Rt,"posts");await po(j,te),F++,y(a,{...v(a),current:X+1},!0),(X+1)%20===0&&h(t()("생성진행",{current:X+1,total:100}),"success"),await new Promise(K=>setTimeout(K,50))}catch(H){h(t()("생성실패",{error:H.message}),"error")}h(t()("카테고리생성완료",{category:L,count:F}),"success"),h(t()("모든데이터생성완료"),"success"),h(t()("총100개생성"),"success"),y(i,!1),y(c,!0)}async function x(){if(!Ae.isAuthenticated||!Ae.uid){h(t()("로그인필요"),"error");return}y(o,!0),y(c,!1),y(l,[],!0),h("뉴스 게시판 글 생성 시작","success"),h(t()("사용자정보",{user:Ae.data?.displayName||Ae.email}),"info");const T="news",L="뉴스",$=200;y(a,{current:0,total:$,category:L},!0),h(`${L} 카테고리에 ${$}개 글 생성 중...`,"info");const F=m.news;let G=0;const X=Date.now();for(let H=0;H<$;H++)try{const le=g(_(F.titles)),pe=`${H+1}. ${le}`,oe=g(_(F.contents)),te=X-($-1-H)*1e3,j={uid:Ae.uid,title:pe,content:oe,author:Ae.data?.displayName||Ae.email||t()("익명"),category:T,order:`${T}-${te}`,createdAt:te,updatedAt:X,likeCount:0,commentCount:0},K=$t(Rt,"posts");await po(K,j),G++,y(a,{...v(a),current:H+1},!0),(H+1)%50===0&&h(`${H+1}/${$} 글 생성 완료`,"success"),await new Promise(Z=>setTimeout(Z,50))}catch(le){h(`글 생성 실패: ${le.message}`,"error")}h(`${L} 카테고리 생성 완료: ${G}개`,"success"),h("모든 뉴스 게시글 생성 완료!","success"),h(`총 ${G}/${$}개 생성됨`,"success"),y(o,!1),y(c,!0)}var I=ET(),S=u(I),P=u(S),D=u(P),B=u(D,!0);d(D),xn(4),d(P);var z=p(P,2);{var C=T=>{var L=_T(),$=u(L),F=u($,!0);d($);var G=p($,2),X=u(G,!0);d(G),d(L),U((H,le)=>{b(F,H),b(X,le)},[()=>t()("로그인필요"),()=>t()("로그인하러가기")]),k(T,L)},E=T=>{var L=kT(),$=he(L),F=u($);F.__click=w;var G=u(F,!0);d(F);var X=p(F,2);X.__click=x;var H=u(X,!0);d(X);var le=p(X,2);{var pe=Z=>{var re=bT(),N=u(re),A=u(N,!0);d(N);var M=p(N,2),q=u(M);d(M);var J=p(M,2),O=u(J);d(J),d(re),U(()=>{b(A,v(a).category),za(q,`width: ${v(a).current/v(a).total*100}%`),b(O,`${v(a).current??""} / ${v(a).total??""}`)}),k(Z,re)};Y(le,Z=>{(v(i)||v(o))&&Z(pe)})}d($);var oe=p($,2);{var te=Z=>{var re=yT(),N=u(re),A=u(N,!0);d(N);var M=p(N,2);Gt(M,21,()=>v(l),ur,(q,J)=>{var O=wT(),V=u(O),W=u(V,!0);d(V);var me=p(V,2),ne=u(me,!0);d(me),d(O),U(()=>{on(O,1,`log-item log-${v(J).type??""}`,"svelte-uqnmwp"),b(W,v(J).time),b(ne,v(J).message)}),k(q,O)}),d(M),d(re),U(q=>b(A,q),[()=>t()("실행로그")]),k(Z,re)};Y(oe,Z=>{v(l).length>0&&Z(te)})}var j=p(oe,2);{var K=Z=>{var re=xT(),N=u(re),A=u(N,!0);d(N);var M=p(N,2),q=u(M,!0);d(M),d(re),U((J,O)=>{b(A,J),b(q,O)},[()=>t()("생성완료확인메시지"),()=>t()("게시판보기")]),k(Z,re)};Y(j,Z=>{v(c)&&Z(K)})}U(Z=>{F.disabled=v(i)||v(o),b(G,Z),X.disabled=v(i)||v(o),b(H,v(o)?"생성 중...":"뉴스 글 200개 생성 (1초 간격)")},[()=>v(i)?t()("생성중"):"커뮤니티 글 100개 생성"]),k(T,L)};Y(z,T=>{Ae.isAuthenticated?T(E,!1):T(C)})}d(S),d(I),U(T=>b(B,T),[()=>t()("테스트게시글생성타이틀")]),k(n,I),st(),s()}vt(["click"]);ge(_g,{},[],[],!0);var CT=R('<div class="dev-history svelte-1vras8s"><div class="background-gradient svelte-1vras8s"></div> <div class="container svelte-1vras8s"><div class="header svelte-1vras8s"><h1 class="title svelte-1vras8s"> </h1> <p class="subtitle svelte-1vras8s"> </p> <div class="update-indicator svelte-1vras8s"><span class="indicator-dot svelte-1vras8s"></span> </div></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="upcoming-card svelte-1vras8s"> </div></div></div>');const TT={hash:"svelte-1vras8s",code:`\r
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
  }`};function bg(n,e){rt(e,!1),tt(n,TT);const t=()=>Xe(St,"$t",r),[r,s]=yt();dn();var i=CT(),o=p(u(i),2),a=u(o),l=u(a),c=u(l,!0);d(l);var h=p(l,2),m=u(h,!0);d(h);var f=p(h,2),_=p(u(f));d(f),d(a);var g=p(a,2),w=u(g),x=u(w),I=u(x,!0);d(x),d(w);var S=p(w,2),P=u(S),D=u(P,!0);d(P);var B=p(P,2),z=u(B),C=p(u(z),2),E=u(C,!0);d(C),d(z);var T=p(z,2),L=p(u(T),2),$=u(L,!0);d(L),d(T);var F=p(T,2),G=p(u(F),2),X=u(G,!0);d(G),d(F);var H=p(F,2),le=p(u(H),2),pe=u(le,!0);d(le),d(H);var oe=p(H,2),te=p(u(oe),2),j=u(te,!0);d(te),d(oe),d(B),d(S);var K=p(S,2),Z=u(K),re=u(Z,!0);d(Z);var N=p(Z,2),A=u(N),M=p(u(A),2),q=u(M,!0);d(M),d(A);var J=p(A,2),O=p(u(J),2),V=u(O,!0);d(O),d(J);var W=p(J,2),me=p(u(W),2),ne=u(me,!0);d(me),d(W);var de=p(W,2),se=p(u(de),2),Pe=u(se,!0);d(se),d(de),d(N),d(K),d(g);var Ne=p(g,4),qe=u(Ne),Se=u(qe),Me=u(Se,!0);d(Se),d(qe);var Re=p(qe,2),De=u(Re),it=u(De,!0);d(De);var nt=p(De,2),Ge=u(nt),ze=p(u(Ge),2),Ce=u(ze,!0);d(ze),d(Ge);var we=p(Ge,2),ye=p(u(we),2),Oe=u(ye,!0);d(ye),d(we);var ee=p(we,2),xe=p(u(ee),2),Ve=u(xe,!0);d(xe),d(ee);var Ke=p(ee,2),Be=p(u(Ke),2),dt=u(Be,!0);d(Be),d(Ke);var ct=p(Ke,2),bt=p(u(ct),2),ae=u(bt,!0);d(bt),d(ct),d(nt),d(Re);var fe=p(Re,2),ve=u(fe),ke=u(ve,!0);d(ve);var Te=p(ve,2),_e=u(Te),ue=p(u(_e),2),Ye=u(ue,!0);d(ue),d(_e);var Ze=p(_e,2),At=p(u(Ze),2),Vt=u(At,!0);d(At),d(Ze);var gt=p(Ze,2),Ut=p(u(gt),2),Ft=u(Ut,!0);d(Ut),d(gt);var Qt=p(gt,2),Jt=p(u(Qt),2),lr=u(Jt,!0);d(Jt),d(Qt),d(Te),d(fe),d(Ne);var Pn=p(Ne,4),qn=u(Pn),ft=u(qn),nn=u(ft,!0);d(ft),d(qn);var Pt=p(qn,2),Nt=u(Pt),Mn=u(Nt,!0);d(Nt);var gn=p(Nt,2),Pr=u(gn),Ps=p(u(Pr),2),il=u(Ps,!0);d(Ps),d(Pr);var yi=p(Pr,2),Rs=p(u(yi),2),$o=u(Rs,!0);d(Rs),d(yi);var xi=p(yi,2),zn=p(u(xi),2),Eg=u(zn,!0);d(zn),d(xi);var ol=p(xi,2),iu=p(u(ol),2),Ig=u(iu,!0);d(iu),d(ol);var ou=p(ol,2),au=p(u(ou),2),Cg=u(au,!0);d(au),d(ou),d(gn),d(Pt);var lu=p(Pt,2),al=u(lu),Tg=u(al,!0);d(al);var cu=p(al,2),ll=u(cu),du=p(u(ll),2),Sg=u(du,!0);d(du),d(ll);var cl=p(ll,2),uu=p(u(cl),2),Ag=u(uu,!0);d(uu),d(cl);var dl=p(cl,2),hu=p(u(dl),2),Pg=u(hu,!0);d(hu),d(dl);var ul=p(dl,2),fu=p(u(ul),2),Rg=u(fu,!0);d(fu),d(ul);var pu=p(ul,2),vu=p(u(pu),2),Ng=u(vu,!0);d(vu),d(pu),d(cu),d(lu),d(Pn);var mu=p(Pn,4),Lg=u(mu,!0);d(mu),d(o),d(i),U((Dg,$g,Og,qg,Mg,zg,Ug,Fg,jg,Bg,Vg,Hg,Wg,Gg,Kg,Yg,Qg,Jg,Xg,Zg,e_,t_,n_,r_,s_,i_,o_,a_,l_,c_,d_,u_,h_,f_,p_,v_,m_,g_,__,b_,w_)=>{b(c,Dg),b(m,$g),b(_,` ${Og??""}`),b(I,qg),b(D,Mg),b(E,zg),b($,Ug),b(X,Fg),b(pe,jg),b(j,Bg),b(re,Vg),b(q,Hg),b(V,Wg),b(ne,Gg),b(Pe,Kg),b(Me,Yg),b(it,Qg),b(Ce,Jg),b(Oe,Xg),b(Ve,Zg),b(dt,e_),b(ae,t_),b(ke,n_),b(Ye,r_),b(Vt,s_),b(Ft,i_),b(lr,o_),b(nn,a_),b(Mn,l_),b(il,c_),b($o,d_),b(Eg,u_),b(Ig,h_),b(Cg,f_),b(Tg,p_),b(Sg,v_),b(Ag,m_),b(Pg,g_),b(Rg,__),b(Ng,b_),b(Lg,w_)},[()=>t()("dev.history.title"),()=>t()("dev.history.subtitle"),()=>t()("dev.history.updateIndicator"),()=>t()("dev.history.seminar1.date"),()=>t()("dev.history.seminar1.completed"),()=>t()("dev.history.seminar1.item1"),()=>t()("dev.history.seminar1.item2"),()=>t()("dev.history.seminar1.item3"),()=>t()("dev.history.seminar1.item4"),()=>t()("dev.history.seminar1.item5"),()=>t()("dev.history.seminar1.learned"),()=>t()("dev.history.seminar1.learned1"),()=>t()("dev.history.seminar1.learned2"),()=>t()("dev.history.seminar1.learned3"),()=>t()("dev.history.seminar1.learned4"),()=>t()("dev.history.seminar2.date"),()=>t()("dev.history.seminar2.completed"),()=>t()("dev.history.seminar2.item1"),()=>t()("dev.history.seminar2.item2"),()=>t()("dev.history.seminar2.item3"),()=>t()("dev.history.seminar2.item4"),()=>t()("dev.history.seminar2.item5"),()=>t()("dev.history.seminar2.learned"),()=>t()("dev.history.seminar2.learned1"),()=>t()("dev.history.seminar2.learned2"),()=>t()("dev.history.seminar2.learned3"),()=>t()("dev.history.seminar2.learned4"),()=>t()("dev.history.seminar3.date"),()=>t()("dev.history.seminar3.completed"),()=>t()("dev.history.seminar3.item1"),()=>t()("dev.history.seminar3.item2"),()=>t()("dev.history.seminar3.item3"),()=>t()("dev.history.seminar3.item4"),()=>t()("dev.history.seminar3.item5"),()=>t()("dev.history.seminar3.learned"),()=>t()("dev.history.seminar3.learned1"),()=>t()("dev.history.seminar3.learned2"),()=>t()("dev.history.seminar3.learned3"),()=>t()("dev.history.seminar3.learned4"),()=>t()("dev.history.seminar3.learned5"),()=>t()("dev.history.upcoming")]),k(n,i),st(),s()}ge(bg,{},[],[],!0);var ST=R(`<div class="sed-page svelte-bwqu3o"><div class="background-gradient svelte-bwqu3o"></div> <div class="container svelte-bwqu3o"><div class="header svelte-bwqu3o"><h1 class="title svelte-bwqu3o">🧩 Spec-Exact Development (SED)</h1> <p class="subtitle svelte-bwqu3o">"AI develops exactly as the spec defines — no interpretation, no
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
                        가드 등도 전부 스펙에 직접 작성한다.</li></ul></li></ul></li> <li class="svelte-bwqu3o"><strong>UI/UX 요구사항 (Design Specification)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>디자인 시스템:</strong> Material Design 3.0, Primary
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

    이것이 SED가 요구하는 스펙의 수준입니다.</pre></div></li> <li class="svelte-bwqu3o"><strong>스펙 검증</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">작성된 스펙은 검증 툴을 통해 점수를 산출하고, <strong>90점 이상</strong>이어야만 개발을 진행할 수 있다.</li> <li class="svelte-bwqu3o">점수가 미달될 경우 보완이 필요한 항목을 식별하고 줄거리 및 상세
                스펙 단계로 되돌려 수정한다.</li> <li class="svelte-bwqu3o">검증 결과와 보완 이력을 모두 기록하여, 스펙과 구현 간 추적성을
                유지한다.</li></ul></li></ol></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">⚙️ 작업 단계 (Execution Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">AI는 스펙에 정의된 내용만 정확히 구현한다.</li> <li class="svelte-bwqu3o">스펙 외의 모든 내용은 무시한다.</li> <li class="svelte-bwqu3o">사람이 중간에 개입할 경우, 그 변경 사항도 스펙으로 재기록되어야
            한다.</li> <li class="svelte-bwqu3o">"코드 수정"은 곧 "스펙 업데이트"를 의미한다.</li></ul></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🔍 검수 단계 (Verification Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">검수 또한 스펙 기반으로 자율적으로 수행된다.</li> <li class="svelte-bwqu3o">테스트 케이스와 기대 결과는 스펙에서 추출된다.</li> <li class="svelte-bwqu3o">모든 기능은 "스펙과 일치하는가?"를 기준으로 평가된다.</li> <li class="svelte-bwqu3o">검수가 통과되지 않으면, AI는 다음 메시지를 반환한다:</li></ul> <div class="code-block svelte-bwqu3o"><pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">SpecDeviationError: Implementation diverged from specification on module 'auth'.
Suggested Action: Review and revise spec or code alignment.</code></pre></div></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🚀 배포 단계 (Deployment Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">배포는 사람의 개입이 필수이다.</li> <li class="svelte-bwqu3o">AI는 배포 스크립트, 환경 구성 파일, CI/CD 절차를 자동 생성하지만,<br/> 실제 배포 명령은 인간 검증 후 수행된다.</li></ul></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🔁 운영 단계 (Operation Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">스펙에는 "운영 자동화" 내용이 반드시 포함되어야 한다.<br/> 예: 로그 수집, 에러 리포팅, 업데이트 시나리오 등.</li> <li class="svelte-bwqu3o">AI는 운영 단계에서 모니터링·리포팅·자동 수정 제안 역할을 수행한다.</li> <li class="svelte-bwqu3o">새로운 요구사항 발생 시, 스펙 업데이트 → 스코어 재평가 → 재개발의
            순서를 따른다.</li></ul></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 4. 철학 요약</h2> <div class="table-container svelte-bwqu3o"><table class="philosophy-table svelte-bwqu3o"><thead class="svelte-bwqu3o"><tr><th class="svelte-bwqu3o">구분</th><th class="svelte-bwqu3o">내용</th></tr></thead><tbody class="svelte-bwqu3o"><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>철학</strong></td><td class="svelte-bwqu3o">스펙이 곧 진리(Spec is the Truth). 개발은 진리를 집행하는 행위.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>AI 역할</strong></td><td class="svelte-bwqu3o">판단하지 않는다. 오직 스펙을 해석 없이 실행한다.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>개발자 역할</strong></td><td class="svelte-bwqu3o">완전하고 명확한 스펙을 만드는 일에 집중한다.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>품질 보증</strong></td><td class="svelte-bwqu3o">테스트 및 검수는 모두 스펙 기반 자동화로 수행된다.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>결과물 특성</strong></td><td class="svelte-bwqu3o">일관성, 검증 가능성, 유지보수 용이성, 예측 가능한 품질.</td></tr></tbody></table></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 5. 표어 및 핵심 문장</h2> <div class="slogan-container svelte-bwqu3o"><div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">🧠</div> <div class="slogan-text svelte-bwqu3o">"AI does not imagine. It executes."</div></div> <div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">📜</div> <div class="slogan-text svelte-bwqu3o">"Spec is the contract. Spec is the code."</div></div> <div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">⚙️</div> <div class="slogan-text svelte-bwqu3o">"No assumption. No improvisation. Only implementation."</div></div></div></div> <div class="section challenge-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">⚠️ SED의 과제</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">SED의 가장 큰 과제는 스펙이 정밀하고 완전해야하므로, <strong class="svelte-bwqu3o">스펙의 크기 또한 커진다는 것</strong>이 문제입니다. 이는 곧 <strong class="svelte-bwqu3o">토큰량이 커진다</strong>는 것을
          의미합니다.</p> <p class="svelte-bwqu3o">완벽한 스펙을 만들기 위해서는 책 한 권 분량의 상세한 명세를 작성해야
          하며, 이를 LLM에 주입하기 위해서는 상당한 양의 토큰이 필요합니다.</p> <div class="challenge-box svelte-bwqu3o"><h3 class="challenge-title svelte-bwqu3o">💡 해결 방안</h3> <p class="svelte-bwqu3o">이 문제를 해결하기 위해서는 <strong class="svelte-bwqu3o">단계별로 스펙을 분리</strong>하여 LLM에게 작업을 시켜야 합니다.</p> <ul class="challenge-list svelte-bwqu3o"><li class="svelte-bwqu3o">전체 스펙을 논리적 단위로 분할 (모듈별, 기능별, 레이어별)</li> <li class="svelte-bwqu3o">각 단계마다 필요한 스펙만 LLM에게 전달</li> <li class="svelte-bwqu3o">단계별 결과물을 검증하고 다음 단계로 진행</li> <li class="svelte-bwqu3o">스펙 문서 자체를 계층적 구조로 설계</li> <li class="svelte-bwqu3o">재사용 가능한 공통 스펙 라이브러리 구축</li></ul></div> <p class="svelte-bwqu3o">이러한 접근을 통해 SED의 철학을 유지하면서도 실제 프로젝트에 적용
          가능한 형태로 발전시킬 수 있습니다.</p></div></div> <div class="conclusion svelte-bwqu3o"><p class="svelte-bwqu3o">이제 "Spec-Exact Development (SED)"는 단순한 프롬프트 개발을 넘어<br/> 명세의 완전성, 자동 검증, 절대적 일관성을 중심으로 한 <strong>AI 기반 개발 표준 철학</strong>으로 정의됩니다.</p></div></div></div>`);const AT={hash:"svelte-bwqu3o",code:`
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

  /* 반응형 디자인 */
  @media (max-width: 768px) {.sed-page.svelte-bwqu3o {padding:1.5rem 1rem;}.title.svelte-bwqu3o {font-size:2rem;}.subtitle.svelte-bwqu3o {font-size:1rem;}.section.svelte-bwqu3o {padding:1.5rem;}.section-title.svelte-bwqu3o {font-size:1.5rem;}.slogan-card.svelte-bwqu3o {flex-direction:column;text-align:center;}.slogan-text.svelte-bwqu3o {font-size:1rem;}
  }

  @media (max-width: 640px) {.title.svelte-bwqu3o {font-size:1.75rem;}.section.svelte-bwqu3o {padding:1.25rem;}.quote.svelte-bwqu3o {font-size:1rem;padding:1rem;}.code-block.svelte-bwqu3o code:where(.svelte-bwqu3o) {font-size:0.8125rem;}.conclusion.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1rem;}
  }`};function wg(n){tt(n,AT);var e=ST();k(n,e)}ge(wg,{},[],[],!0);var PT=R('<div role="alert"><span class="toast-icon svelte-1cpok13"> </span> <span class="toast-message svelte-1cpok13"> </span> <button class="toast-close svelte-1cpok13" aria-label="닫기" type="button">×</button></div>'),RT=R('<div class="toast-container svelte-1cpok13"></div>');const NT={hash:"svelte-1cpok13",code:`\r
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
  }`};function yg(n,e){rt(e,!1),tt(n,NT);const t=()=>Xe(su,"$toasts",r),[r,s]=yt();function i(a){switch(a){case"success":return"✓";case"error":return"✗";case"info":return"ℹ";case"warning":return"⚠";default:return"ℹ"}}dn();var o=RT();Gt(o,5,t,a=>a.id,(a,l)=>{var c=PT(),h=u(c),m=u(h,!0);d(h);var f=p(h,2),_=u(f,!0);d(f);var g=p(f,2);g.__click=()=>og(v(l).id),d(c),U(w=>{on(c,1,`toast toast-${v(l).type??""}`,"svelte-1cpok13"),b(m,w),b(_,v(l).message)},[()=>i(v(l).type)]),k(a,c)}),d(o),k(n,o),st(),s()}vt(["click"]);ge(yg,{},[],[],!0);var LT=R('<div class="loading-state svelte-z18b0h"><div class="spinner svelte-z18b0h"></div> <p class="svelte-z18b0h"> </p></div>'),DT=R('<div class="error-state svelte-z18b0h"><p class="error-icon svelte-z18b0h">⚠️</p> <p class="error-text svelte-z18b0h"> </p> <p class="error-detail svelte-z18b0h"> </p></div>'),$T=R('<div class="stats-container svelte-z18b0h"><div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">👥</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">📝</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">💬</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">❤️</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div></div>'),OT=R('<div class="empty-state svelte-z18b0h"><p class="empty-icon svelte-z18b0h">📊</p> <p class="empty-text svelte-z18b0h"> </p></div>'),qT=R('<aside class="right-sidebar svelte-z18b0h"><h2 class="sidebar-title svelte-z18b0h"> </h2> <!></aside>');const MT={hash:"svelte-z18b0h",code:`\r
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
  }`};function xg(n,e){rt(e,!1),tt(n,MT);const t=()=>Xe(St,"$t",s),r=()=>Xe(o,"$statsStore",s),[s,i]=yt(),o=nu("stats/counters");function a(g){return g==null?"0":g.toLocaleString()}dn();var l=qT(),c=u(l),h=u(c,!0);d(c);var m=p(c,2);{var f=g=>{var w=LT(),x=p(u(w),2),I=u(x,!0);d(x),d(w),U(S=>b(I,S),[()=>t()("통계로딩중")]),k(g,w)},_=g=>{var w=be(),x=he(w);{var I=P=>{var D=DT(),B=p(u(D),2),z=u(B,!0);d(B);var C=p(B,2),E=u(C,!0);d(C),d(D),U(T=>{b(z,T),b(E,r().error.message)},[()=>t()("통계로드실패")]),k(P,D)},S=P=>{var D=be(),B=he(D);{var z=E=>{const T=$a(()=>r().data);var L=$T(),$=u(L),F=p(u($),2),G=u(F),X=u(G,!0);d(G);var H=p(G,2),le=u(H,!0);d(H),d(F),d($);var pe=p($,2),oe=p(u(pe),2),te=u(oe),j=u(te,!0);d(te);var K=p(te,2),Z=u(K,!0);d(K),d(oe),d(pe);var re=p(pe,2),N=p(u(re),2),A=u(N),M=u(A,!0);d(A);var q=p(A,2),J=u(q,!0);d(q),d(N),d(re);var O=p(re,2),V=p(u(O),2),W=u(V),me=u(W,!0);d(W);var ne=p(W,2),de=u(ne,!0);d(ne),d(V),d(O),d(L),U((se,Pe,Ne,qe,Se,Me,Re,De)=>{b(X,se),b(le,Pe),b(j,Ne),b(Z,qe),b(M,Se),b(J,Me),b(me,Re),b(de,De)},[()=>t()("전체사용자"),()=>a(v(T).user),()=>t()("전체글"),()=>a(v(T).post),()=>t()("전체댓글"),()=>a(v(T).comment),()=>t()("전체좋아요"),()=>a(v(T).like)]),k(E,L)},C=E=>{var T=OT(),L=p(u(T),2),$=u(L,!0);d(L),d(T),U(F=>b($,F),[()=>t()("통계데이터없음")]),k(E,T)};Y(B,E=>{r().data?E(z):E(C,!1)},!0)}k(P,D)};Y(x,P=>{r().error?P(I):P(S,!1)},!0)}k(g,w)};Y(m,g=>{r().loading?g(f):g(_,!1)})}d(l),U(g=>b(h,g),[()=>t()("전체통계")]),k(n,l),st(),i()}ge(xg,{},[],[],!0);var zT=R('<sns-layout><main class="content-with-sidebar svelte-1hwhcgc"><!></main> <!></sns-layout> <!> <test-fab></test-fab>',3);const UT={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 (사이드바와 함께) */.content-with-sidebar.svelte-1hwhcgc {width:100%;padding:0 20px;box-sizing:border-box;}

  /* 반응형 */
  @media (max-width: 1024px) {.content-with-sidebar.svelte-1hwhcgc {padding-right:20px;}
  }`};function kg(n){tt(n,UT);let e=ie(Zt(window.location.pathname));function t(){y(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",t);var r=zT(),s=he(r),i=u(s),o=u(i);{var a=m=>{ng(m,{})},l=m=>{var f=be(),_=he(f);{var g=x=>{rg(x,{})},w=x=>{var I=be(),S=he(I);{var P=B=>{sg(B,{})},D=B=>{var z=be(),C=he(z);{var E=L=>{ig(L,{})},T=L=>{var $=be(),F=he($);{var G=H=>{cg(H,{})},X=H=>{var le=be(),pe=he(le);{var oe=j=>{dg(j,{})},te=j=>{var K=be(),Z=he(K);{var re=A=>{ug(A,{})},N=A=>{var M=be(),q=he(M);{var J=V=>{hg(V,{})},O=V=>{var W=be(),me=he(W);{var ne=se=>{fg(se,{})},de=se=>{var Pe=be(),Ne=he(Pe);{var qe=Me=>{pg(Me,{})},Se=Me=>{var Re=be(),De=he(Re);{var it=Ge=>{vg(Ge,{})},nt=Ge=>{var ze=be(),Ce=he(ze);{var we=Oe=>{mg(Oe,{})},ye=Oe=>{var ee=be(),xe=he(ee);{var Ve=Be=>{gg(Be,{})},Ke=Be=>{var dt=be(),ct=he(dt);{var bt=fe=>{_g(fe,{})},ae=fe=>{var ve=be(),ke=he(ve);{var Te=ue=>{bg(ue,{})},_e=ue=>{var Ye=be(),Ze=he(Ye);{var At=gt=>{wg(gt)},Vt=gt=>{tg(gt,{})};Y(Ze,gt=>{v(e)==="/dev/sed"?gt(At):gt(Vt,!1)},!0)}k(ue,Ye)};Y(ke,ue=>{v(e)==="/dev/history"?ue(Te):ue(_e,!1)},!0)}k(fe,ve)};Y(ct,fe=>{v(e)==="/dev/generate-posts"?fe(bt):fe(ae,!1)},!0)}k(Be,dt)};Y(xe,Be=>{v(e)==="/contact"?Be(Ve):Be(Ke,!1)},!0)}k(Oe,ee)};Y(Ce,Oe=>{v(e)==="/privacy"?Oe(we):Oe(ye,!1)},!0)}k(Ge,ze)};Y(De,Ge=>{v(e)==="/terms"?Ge(it):Ge(nt,!1)},!0)}k(Me,Re)};Y(Ne,Me=>{v(e)==="/help"?Me(qe):Me(Se,!1)},!0)}k(se,Pe)};Y(me,se=>{v(e)==="/about"?se(ne):se(de,!1)},!0)}k(V,W)};Y(q,V=>{v(e)==="/settings"?V(J):V(O,!1)},!0)}k(A,M)};Y(Z,A=>{v(e)==="/chat/list"?A(re):A(N,!1)},!0)}k(j,K)};Y(pe,j=>{v(e).startsWith("/post/detail/")?j(oe):j(te,!1)},!0)}k(H,le)};Y(F,H=>{v(e)==="/post/list"?H(G):H(X,!1)},!0)}k(L,$)};Y(C,L=>{v(e)==="/user/list"?L(E):L(T,!1)},!0)}k(B,z)};Y(S,B=>{v(e)==="/user/profile"?B(P):B(D,!1)},!0)}k(x,I)};Y(_,x=>{v(e)==="/menu"?x(g):x(w,!1)},!0)}k(m,f)};Y(o,m=>{v(e)==="/user/login"?m(a):m(l,!1)})}d(i);var c=p(i,2);xg(c,{}),d(s);var h=p(s,2);yg(h,{}),p(h,2),k(n,r)}ge(kg,{},[],[],!0);jc(kg,{target:document.getElementById("app")});
