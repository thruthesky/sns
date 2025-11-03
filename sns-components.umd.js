(function(Re,gs){typeof exports=="object"&&typeof module<"u"?gs(exports):typeof define=="function"&&define.amd?define(["exports"],gs):(Re=typeof globalThis<"u"?globalThis:Re||self,gs(Re.SNSComponents={}))})(this,(function(Re){"use strict";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add("5");const vs=1,ys=2,fc=4,Ep=8,Ip=16,Cp=1,Tp=2,pc=4,Sp=8,kp=16,Ap=1,Rp=2,mc="[",bs="[!",Vo="]",_i={},Ue=Symbol(),Pp="http://www.w3.org/1999/xhtml",Np="http://www.w3.org/2000/svg",xp="@attach",_c=!1;var jo=Array.isArray,Lp=Array.prototype.indexOf,zo=Array.from,ws=Object.keys,nr=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,gc=Object.getOwnPropertyDescriptors,Op=Object.prototype,Dp=Array.prototype,Bo=Object.getPrototypeOf,vc=Object.isExtensible;function ir(t){return typeof t=="function"}const pn=()=>{};function Mp(t){return t()}function Es(t){for(var e=0;e<t.length;e++)t[e]()}function yc(){var t,e,n=new Promise((i,r)=>{t=i,e=r});return{promise:n,resolve:t,reject:e}}function $p(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const i of t)if(n.push(i),n.length===e)break;return n}const qe=2,qo=4,Is=8,Kt=16,Yt=32,mn=64,Cs=128,Ge=1024,nt=2048,Qt=4096,lt=8192,Jt=16384,Go=32768,Hn=65536,bc=1<<17,Fp=1<<18,Vn=1<<19,wc=1<<20,_t=256,Ts=512,Ss=32768,Ko=1<<21,Yo=1<<22,jn=1<<23,Dt=Symbol("$state"),Qo=Symbol("legacy props"),Up=Symbol(""),gi=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Wp=1,Jo=3,vi=8;function Ec(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Hp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Vp(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function jp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function zp(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Bp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qp(){throw new Error("https://svelte.dev/e/hydration_failed")}function Gp(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Yp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Qp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Jp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function ks(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Xp(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Zp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let F=!1;function ct(t){F=t}let q;function We(t){if(t===null)throw ks(),_i;return q=t}function zn(){return We(Ft(q))}function m(t){if(F){if(Ft(q)!==null)throw ks(),_i;q=t}}function Xt(t=1){if(F){for(var e=t,n=q;e--;)n=Ft(n);q=n}}function As(t=!0){for(var e=0,n=q;;){if(n.nodeType===vi){var i=n.data;if(i===Vo){if(e===0)return n;e-=1}else(i===mc||i===bs)&&(e+=1)}var r=Ft(n);t&&n.remove(),n=r}}function Ic(t){if(!t||t.nodeType!==vi)throw ks(),_i;return t.data}function Cc(t){return t===this.v}function Tc(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Sc(t){return!Tc(t,this.v)}let yi=!1,em=!1;function tm(){yi=!0}let ge=null;function bi(t){ge=t}function _n(t,e=!1,n){ge={p:ge,i:!1,c:null,e:null,s:t,x:null,l:yi&&!e?{s:null,u:null,$:[]}:null}}function gn(t){var e=ge,n=e.e;if(n!==null){e.e=null;for(var i of n)Qc(i)}return t!==void 0&&(e.x=t),e.i=!0,ge=e.p,t??{}}function rr(){return!yi||ge!==null&&ge.l===null}let Bn=[];function kc(){var t=Bn;Bn=[],Es(t)}function vn(t){if(Bn.length===0&&!or){var e=Bn;queueMicrotask(()=>{e===Bn&&kc()})}Bn.push(t)}function nm(){for(;Bn.length>0;)kc()}function Ac(t){var e=U;if(e===null)return G.f|=jn,t;if((e.f&Go)===0){if((e.f&Cs)===0)throw t;e.b.error(t)}else wi(t,e)}function wi(t,e){for(;e!==null;){if((e.f&Cs)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const Rs=new Set;let X=null,sr=null,It=null,Mt=[],Ps=null,Xo=!1,or=!1;class Ct{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#n=0;#i=0;#l=null;#o=[];#a=[];skipped_effects=new Set;is_fork=!1;process(e){Mt=[],sr=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of e)this.#r(i,n);this.is_fork||this.#c(),this.#i>0||this.is_fork?(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects)):(sr=this,X=null,Pc(n.render_effects),Pc(n.effects),sr=null,this.#l?.resolve()),It=null}#r(e,n){e.f^=Ge;for(var i=e.first;i!==null;){var r=i.f,s=(r&(Yt|mn))!==0,o=s&&(r&Ge)!==0,a=o||(r&lt)!==0||this.skipped_effects.has(i);if((i.f&Cs)!==0&&i.b?.is_pending()&&(n={parent:n,effect:i,effects:[],render_effects:[],block_effects:[]}),!a&&i.fn!==null){s?i.f^=Ge:(r&qo)!==0?n.effects.push(i):hr(i)&&((i.f&Kt)!==0&&n.block_effects.push(i),fr(i));var l=i.first;if(l!==null){i=l;continue}}var c=i.parent;for(i=i.next;i===null&&c!==null;)c===n.effect&&(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects),n=n.parent),i=c.next,c=c.parent}}#s(e){for(const n of e)((n.f&nt)!==0?this.#o:this.#a).push(n),Ke(n,Ge)}capture(e,n){this.previous.has(e)||this.previous.set(e,n),this.current.set(e,e.v),It?.set(e,e.v)}activate(){X=this}deactivate(){X=null,It=null}flush(){if(this.activate(),Mt.length>0){if(Rc(),X!==null&&X!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#i===0){for(const e of this.#t)e();this.#t.clear()}this.#n===0&&this.#u()}#u(){if(Rs.size>1){this.previous.clear();var e=It,n=!0,i={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of Rs){if(r===this){n=!1;continue}const s=[];for(const[a,l]of this.current){if(r.current.has(a))if(n&&l!==r.current.get(a))r.current.set(a,l);else continue;s.push(a)}if(s.length===0)continue;const o=[...r.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of s)Nc(c,o,a,l);if(Mt.length>0){X=r,r.apply();for(const c of Mt)r.#r(c,i);Mt=[],r.deactivate()}}}X=null,It=e}this.committed=!0,Rs.delete(this)}increment(e){this.#n+=1,e&&(this.#i+=1)}decrement(e){this.#n-=1,e&&(this.#i-=1),this.revive()}revive(){for(const e of this.#o)Ke(e,nt),qn(e);for(const e of this.#a)Ke(e,Qt),qn(e);this.#o=[],this.#a=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=yc()).promise}static ensure(){if(X===null){const e=X=new Ct;Rs.add(X),or||Ct.enqueue(()=>{X===e&&e.flush()})}return X}static enqueue(e){vn(e)}apply(){}}function ut(t){var e=or;or=!0;try{for(var n;;){if(nm(),Mt.length===0&&(X?.flush(),Mt.length===0))return Ps=null,n;Rc()}}finally{or=e}}function Rc(){var t=Ti;Xo=!0;try{var e=0;for(iu(!0);Mt.length>0;){var n=Ct.ensure();if(e++>1e3){var i,r;im()}n.process(Mt),yn.clear()}}finally{Xo=!1,iu(t),Ps=null}}function im(){try{Bp()}catch(t){wi(t,Ps)}}let Zt=null;function Pc(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var i=t[n++];if((i.f&(Jt|lt))===0&&hr(i)&&(Zt=new Set,fr(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null&&i.ac===null?Zc(i):i.fn=null),Zt?.size>0)){yn.clear();for(const r of Zt){if((r.f&(Jt|lt))!==0)continue;const s=[r];let o=r.parent;for(;o!==null;)Zt.has(o)&&(Zt.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(Jt|lt))===0&&fr(l)}}Zt.clear()}}Zt=null}}function Nc(t,e,n,i){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const r of t.reactions){const s=r.f;(s&qe)!==0?Nc(r,e,n,i):(s&(Yo|Kt))!==0&&(s&nt)===0&&xc(r,e,i)&&(Ke(r,nt),qn(r))}}function xc(t,e,n){const i=n.get(t);if(i!==void 0)return i;if(t.deps!==null)for(const r of t.deps){if(e.includes(r))return!0;if((r.f&qe)!==0&&xc(r,e,n))return n.set(r,!0),!0}return n.set(t,!1),!1}function qn(t){for(var e=Ps=t;e.parent!==null;){e=e.parent;var n=e.f;if(Xo&&e===U&&(n&Kt)!==0)return;if((n&(mn|Yt))!==0){if((n&Ge)===0)return;e.f^=Ge}}Mt.push(e)}function rm(t){let e=0,n=bn(0),i;return()=>{mm()&&(v(n),Ls(()=>(e===0&&(i=Ut(()=>t(()=>lr(n)))),e+=1,()=>{vn(()=>{e-=1,e===0&&(i?.(),i=void 0,lr(n))})})))}}var sm=Hn|Vn|Cs;function om(t,e,n){new am(t,e,n)}class am{parent;#t=!1;#e;#n=F?q:null;#i;#l;#o;#a=null;#r=null;#s=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#y=rm(()=>(this.#h=bn(this.#f),()=>{this.#h=null}));constructor(e,n,i){this.#e=e,this.#i=n,this.#l=i,this.parent=U.b,this.#t=!!this.#i.pending,this.#o=Ii(()=>{if(U.b=this,F){const s=this.#n;zn(),s.nodeType===vi&&s.data===bs?this.#w():this.#b()}else{var r=this.#g();try{this.#a=it(()=>i(r))}catch(s){this.error(s)}this.#d>0?this.#_():this.#t=!1}return()=>{this.#u?.remove()}},sm),F&&(this.#e=q)}#b(){try{this.#a=it(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#w(){const e=this.#i.pending;e&&(this.#r=it(()=>e(this.#e)),Ct.enqueue(()=>{var n=this.#g();this.#a=this.#m(()=>(Ct.ensure(),it(()=>this.#l(n)))),this.#d>0?this.#_():(Ci(this.#r,()=>{this.#r=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=gt(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#m(e){var n=U,i=G,r=ge;vt(this.#o),rt(this.#o),bi(this.#o.ctx);try{return e()}catch(s){return Ac(s),null}finally{vt(n),rt(i),bi(r)}}#_(){const e=this.#i.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),nu(this.#a,this.#c)),this.#r===null&&(this.#r=it(()=>e(this.#e)))}#v(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#v(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#r&&Ci(this.#r,()=>{this.#r=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#v(e),this.#f+=e,this.#h&&Ei(this.#h,this.#f)}get_effect_pending(){return this.#y(),v(this.#h)}error(e){var n=this.#i.onerror;let i=this.#i.failed;if(this.#p||!n&&!i)throw e;this.#a&&(Pe(this.#a),this.#a=null),this.#r&&(Pe(this.#r),this.#r=null),this.#s&&(Pe(this.#s),this.#s=null),F&&(We(this.#n),Xt(),We(As()));var r=!1,s=!1;const o=()=>{if(r){Zp();return}r=!0,s&&Jp(),Ct.ensure(),this.#f=0,this.#s!==null&&Ci(this.#s,()=>{this.#s=null}),this.#t=this.has_pending_snippet(),this.#a=this.#m(()=>(this.#p=!1,it(()=>this.#l(this.#e)))),this.#d>0?this.#_():this.#t=!1};var a=G;try{rt(null),s=!0,n?.(e,o),s=!1}catch(l){wi(l,this.#o&&this.#o.parent)}finally{rt(a)}i&&vn(()=>{this.#s=this.#m(()=>{Ct.ensure(),this.#p=!0;try{return it(()=>{i(this.#e,()=>e,()=>o)})}catch(l){return wi(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Lc(t,e,n,i){const r=rr()?ar:ea;if(n.length===0&&t.length===0){i(e.map(r));return}var s=X,o=U,a=lm();function l(){Promise.all(n.map(c=>cm(c))).then(c=>{a();try{i([...e.map(r),...c])}catch(d){(o.f&Jt)===0&&wi(d,o)}s?.deactivate(),Ns()}).catch(c=>{wi(c,o)})}t.length>0?Promise.all(t).then(()=>{a();try{return l()}finally{s?.deactivate(),Ns()}}):l()}function lm(){var t=U,e=G,n=ge,i=X;return function(s=!0){vt(t),rt(e),bi(n),s&&i?.activate()}}function Ns(){vt(null),rt(null),bi(null)}function ar(t){var e=qe|nt,n=G!==null&&(G.f&qe)!==0?G:null;return U===null||n!==null&&(n.f&_t)!==0?e|=_t:U.f|=Vn,{ctx:ge,deps:null,effects:null,equals:Cc,f:e,fn:t,reactions:null,rv:0,v:Ue,wv:0,parent:n??U,ac:null}}function cm(t,e){let n=U;n===null&&Hp();var i=n.b,r=void 0,s=bn(Ue),o=!G,a=new Map;return ym(()=>{var l=yc();r=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===X&&c.committed&&c.deactivate(),Ns()})}catch(u){l.reject(u),Ns()}var c=X;if(o){var d=!i.is_pending();i.update_pending_count(1),c.increment(d),a.get(c)?.reject(gi),a.delete(c),a.set(c,l)}const h=(u,f=void 0)=>{if(c.activate(),f)f!==gi&&(s.f|=jn,Ei(s,f));else{(s.f&jn)!==0&&(s.f^=jn),Ei(s,u);for(const[p,g]of a){if(a.delete(p),p===c)break;g.reject(gi)}}o&&(i.update_pending_count(-1),c.decrement(d))};l.promise.then(h,u=>h(null,u||"unknown"))}),cr(()=>{for(const l of a.values())l.reject(gi)}),new Promise(l=>{function c(d){function h(){d===r?l(s):c(r)}d.then(h,h)}c(r)})}function Zo(t){const e=ar(t);return su(e),e}function ea(t){const e=ar(t);return e.equals=Sc,e}function Oc(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)Pe(e[n])}}function um(t){for(var e=t.parent;e!==null;){if((e.f&qe)===0)return e;e=e.parent}return null}function ta(t){var e,n=U;vt(um(t));try{t.f&=~Ss,Oc(t),e=uu(t)}finally{vt(n)}return e}function Dc(t){var e=ta(t);if(t.equals(e)||(t.v=e,t.wv=lu()),!Gn)if(It!==null)It.set(t,t.v);else{var n=(wn||(t.f&_t)!==0)&&t.deps!==null?Qt:Ge;Ke(t,n)}}let na=new Set;const yn=new Map;let Mc=!1;function bn(t,e){var n={f:0,v:t,reactions:null,equals:Cc,rv:0,wv:0};return n}function de(t,e){const n=bn(t);return su(n),n}function ia(t,e=!1,n=!0){const i=bn(t);return e||(i.equals=Sc),yi&&n&&ge!==null&&ge.l!==null&&(ge.l.s??=[]).push(i),i}function L(t,e,n=!1){G!==null&&(!St||(G.f&bc)!==0)&&rr()&&(G.f&(qe|Kt|Yo|bc))!==0&&!tn?.includes(t)&&Qp();let i=n?en(e):e;return Ei(t,i)}function Ei(t,e){if(!t.equals(e)){var n=t.v;Gn?yn.set(t,e):yn.set(t,n),t.v=e;var i=Ct.ensure();i.capture(t,n),(t.f&qe)!==0&&((t.f&nt)!==0&&ta(t),Ke(t,(t.f&_t)===0?Ge:Qt)),t.wv=lu(),Fc(t,nt),rr()&&U!==null&&(U.f&Ge)!==0&&(U.f&(Yt|mn))===0&&(yt===null?Em([t]):yt.push(t)),!i.is_fork&&na.size>0&&!Mc&&dm()}return e}function dm(){Mc=!1;const t=Array.from(na);for(const e of t)(e.f&Ge)!==0&&Ke(e,Qt),hr(e)&&fr(e);na.clear()}function $c(t,e=1){var n=v(t),i=e===1?n++:n--;return L(t,n),i}function lr(t){L(t,t.v+1)}function Fc(t,e){var n=t.reactions;if(n!==null)for(var i=rr(),r=n.length,s=0;s<r;s++){var o=n[s],a=o.f;if(!(!i&&o===U)){var l=(a&nt)===0;l&&Ke(o,e),(a&qe)!==0?(a&Ss)===0&&(o.f|=Ss,Fc(o,Qt)):l&&((a&Kt)!==0&&Zt!==null&&Zt.add(o),qn(o))}}}function en(t){if(typeof t!="object"||t===null||Dt in t)return t;const e=Bo(t);if(e!==Op&&e!==Dp)return t;var n=new Map,i=jo(t),r=de(0),s=Kn,o=a=>{if(Kn===s)return a();var l=G,c=Kn;rt(null),au(s);var d=a();return rt(l),au(c),d};return i&&n.set("length",de(t.length)),new Proxy(t,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Kp();var d=n.get(l);return d===void 0?d=o(()=>{var h=de(c.value);return n.set(l,h),h}):L(d,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const d=o(()=>de(Ue));n.set(l,d),lr(r)}}else L(c,Ue),lr(r);return!0},get(a,l,c){if(l===Dt)return t;var d=n.get(l),h=l in a;if(d===void 0&&(!h||Gt(a,l)?.writable)&&(d=o(()=>{var f=en(h?a[l]:Ue),p=de(f);return p}),n.set(l,d)),d!==void 0){var u=v(d);return u===Ue?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var d=n.get(l);d&&(c.value=v(d))}else if(c===void 0){var h=n.get(l),u=h?.v;if(h!==void 0&&u!==Ue)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===Dt)return!0;var c=n.get(l),d=c!==void 0&&c.v!==Ue||Reflect.has(a,l);if(c!==void 0||U!==null&&(!d||Gt(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=d?en(a[l]):Ue,f=de(u);return f}),n.set(l,c));var h=v(c);if(h===Ue)return!1}return d},set(a,l,c,d){var h=n.get(l),u=l in a;if(i&&l==="length")for(var f=c;f<h.v;f+=1){var p=n.get(f+"");p!==void 0?L(p,Ue):f in a&&(p=o(()=>de(Ue)),n.set(f+"",p))}if(h===void 0)(!u||Gt(a,l)?.writable)&&(h=o(()=>de(void 0)),L(h,en(c)),n.set(l,h));else{u=h.v!==Ue;var g=o(()=>en(c));L(h,g)}var E=Reflect.getOwnPropertyDescriptor(a,l);if(E?.set&&E.set.call(d,c),!u){if(i&&typeof l=="string"){var S=n.get("length"),T=Number(l);Number.isInteger(T)&&T>=S.v&&L(S,T+1)}lr(r)}return!0},ownKeys(a){v(r);var l=Reflect.ownKeys(a).filter(h=>{var u=n.get(h);return u===void 0||u.v!==Ue});for(var[c,d]of n)d.v!==Ue&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Yp()}})}function Uc(t){try{if(t!==null&&typeof t=="object"&&Dt in t)return t[Dt]}catch{}return t}function hm(t,e){return Object.is(Uc(t),Uc(e))}var Wc,Hc,Vc,jc;function ra(){if(Wc===void 0){Wc=window,Hc=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Vc=Gt(e,"firstChild").get,jc=Gt(e,"nextSibling").get,vc(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),vc(n)&&(n.__t=void 0)}}function gt(t=""){return document.createTextNode(t)}function $t(t){return Vc.call(t)}function Ft(t){return jc.call(t)}function _(t,e){if(!F)return $t(t);var n=$t(q);if(n===null)n=q.appendChild(gt());else if(e&&n.nodeType!==Jo){var i=gt();return n?.before(i),We(i),i}return We(n),n}function he(t,e=!1){if(!F){var n=$t(t);return n instanceof Comment&&n.data===""?Ft(n):n}if(e&&q?.nodeType!==Jo){var i=gt();return q?.before(i),We(i),i}return q}function y(t,e=1,n=!1){let i=F?q:t;for(var r;e--;)r=i,i=Ft(i);if(!F)return i;if(n&&i?.nodeType!==Jo){var s=gt();return i===null?r?.after(s):i.before(s),We(s),s}return We(i),i}function zc(t){t.textContent=""}function Bc(){return!1}function fm(t,e){if(e){const n=document.body;t.autofocus=!0,vn(()=>{document.activeElement===n&&t.focus()})}}let qc=!1;function Gc(){qc||(qc=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function xs(t){var e=G,n=U;rt(null),vt(null);try{return t()}finally{rt(e),vt(n)}}function Kc(t,e,n,i=n){t.addEventListener(e,()=>xs(n));const r=t.__on_r;r?t.__on_r=()=>{r(),i(!0)}:t.__on_r=()=>i(!0),Gc()}function Yc(t){U===null&&G===null&&zp(),G!==null&&(G.f&_t)!==0&&U===null&&jp(),Gn&&Vp()}function pm(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Tt(t,e,n,i=!0){var r=U;r!==null&&(r.f&lt)!==0&&(t|=lt);var s={ctx:ge,deps:null,nodes_start:null,nodes_end:null,f:t|nt,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{fr(s),s.f|=Go}catch(l){throw Pe(s),l}else e!==null&&qn(s);if(i){var o=s;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Vn)===0&&(o=o.first,(t&Kt)!==0&&(t&Hn)!==0&&o!==null&&(o.f|=Hn)),o!==null&&(o.parent=r,r!==null&&pm(o,r),G!==null&&(G.f&qe)!==0&&(t&mn)===0)){var a=G;(a.effects??=[]).push(o)}}return s}function mm(){return G!==null&&!St}function cr(t){const e=Tt(Is,null,!1);return Ke(e,Ge),e.teardown=t,e}function sa(t){Yc();var e=U.f,n=!G&&(e&Yt)!==0&&(e&Go)===0;if(n){var i=ge;(i.e??=[]).push(t)}else return Qc(t)}function Qc(t){return Tt(qo|wc,t,!1)}function _m(t){return Yc(),Tt(Is|wc,t,!0)}function gm(t){Ct.ensure();const e=Tt(mn|Vn,t,!0);return()=>{Pe(e)}}function vm(t){Ct.ensure();const e=Tt(mn|Vn,t,!0);return(n={})=>new Promise(i=>{n.outro?Ci(e,()=>{Pe(e),i(void 0)}):(Pe(e),i(void 0))})}function ur(t){return Tt(qo,t,!1)}function ym(t){return Tt(Yo|Vn,t,!0)}function Ls(t,e=0){return Tt(Is|e,t,!0)}function ae(t,e=[],n=[],i=[]){Lc(i,e,n,r=>{Tt(Is,()=>t(...r.map(v)),!0)})}function Ii(t,e=0){var n=Tt(Kt|e,t,!0);return n}function it(t,e=!0){return Tt(Yt|Vn,t,!0,e)}function Jc(t){var e=t.teardown;if(e!==null){const n=Gn,i=G;ru(!0),rt(null);try{e.call(null)}finally{ru(n),rt(i)}}}function Xc(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const r=n.ac;r!==null&&xs(()=>{r.abort(gi)});var i=n.next;(n.f&mn)!==0?n.parent=null:Pe(n,e),n=i}}function bm(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&Yt)===0&&Pe(e),e=n}}function Pe(t,e=!0){var n=!1;(e||(t.f&Fp)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(wm(t.nodes_start,t.nodes_end),n=!0),Xc(t,e&&!n),Os(t,0),Ke(t,Jt);var i=t.transitions;if(i!==null)for(const s of i)s.stop();Jc(t);var r=t.parent;r!==null&&r.first!==null&&Zc(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function wm(t,e){for(;t!==null;){var n=t===e?null:Ft(t);t.remove(),t=n}}function Zc(t){var e=t.parent,n=t.prev,i=t.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),e!==null&&(e.first===t&&(e.first=i),e.last===t&&(e.last=n))}function Ci(t,e,n=!0){var i=[];oa(t,i,!0),eu(i,()=>{n&&Pe(t),e&&e()})}function eu(t,e){var n=t.length;if(n>0){var i=()=>--n||e();for(var r of t)r.out(i)}else e()}function oa(t,e,n){if((t.f&lt)===0){if(t.f^=lt,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var i=t.first;i!==null;){var r=i.next,s=(i.f&Hn)!==0||(i.f&Yt)!==0&&(t.f&Kt)!==0;oa(i,e,s?n:!1),i=r}}}function aa(t){tu(t,!0)}function tu(t,e){if((t.f&lt)!==0){t.f^=lt,(t.f&Ge)===0&&(Ke(t,nt),qn(t));for(var n=t.first;n!==null;){var i=n.next,r=(n.f&Hn)!==0||(n.f&Yt)!==0;tu(n,r?e:!1),n=i}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}function nu(t,e){for(var n=t.nodes_start,i=t.nodes_end;n!==null;){var r=n===i?null:Ft(n);e.append(n),n=r}}let Ti=!1;function iu(t){Ti=t}let Gn=!1;function ru(t){Gn=t}let G=null,St=!1;function rt(t){G=t}let U=null;function vt(t){U=t}let tn=null;function su(t){G!==null&&(tn===null?tn=[t]:tn.push(t))}let Qe=null,dt=0,yt=null;function Em(t){yt=t}let ou=1,dr=0,Kn=dr;function au(t){Kn=t}let wn=!1;function lu(){return++ou}function hr(t){var e=t.f;if((e&nt)!==0)return!0;if((e&Qt)!==0){var n=t.deps,i=(e&_t)!==0;if(e&qe&&(t.f&=~Ss),n!==null){var r,s,o=(e&Ts)!==0,a=i&&U!==null&&!wn,l=n.length;if((o||a)&&(U===null||(U.f&Jt)===0)){var c=t,d=c.parent;for(r=0;r<l;r++)s=n[r],(o||!s?.reactions?.includes(c))&&(s.reactions??=[]).push(c);o&&(c.f^=Ts),a&&d!==null&&(d.f&_t)===0&&(c.f^=_t)}for(r=0;r<l;r++)if(s=n[r],hr(s)&&Dc(s),s.wv>t.wv)return!0}(!i||U!==null&&!wn)&&Ke(t,Ge)}return!1}function cu(t,e,n=!0){var i=t.reactions;if(i!==null&&!tn?.includes(t))for(var r=0;r<i.length;r++){var s=i[r];(s.f&qe)!==0?cu(s,e,!1):e===s&&(n?Ke(s,nt):(s.f&Ge)!==0&&Ke(s,Qt),qn(s))}}function uu(t){var e=Qe,n=dt,i=yt,r=G,s=wn,o=tn,a=ge,l=St,c=Kn,d=t.f;Qe=null,dt=0,yt=null,wn=(d&_t)!==0&&(St||!Ti||G===null),G=(d&(Yt|mn))===0?t:null,tn=null,bi(t.ctx),St=!1,Kn=++dr,t.ac!==null&&(xs(()=>{t.ac.abort(gi)}),t.ac=null);try{t.f|=Ko;var h=t.fn,u=h(),f=t.deps;if(Qe!==null){var p;if(Os(t,dt),f!==null&&dt>0)for(f.length=dt+Qe.length,p=0;p<Qe.length;p++)f[dt+p]=Qe[p];else t.deps=f=Qe;if(!wn||(d&qe)!==0&&t.reactions!==null)for(p=dt;p<f.length;p++)(f[p].reactions??=[]).push(t)}else f!==null&&dt<f.length&&(Os(t,dt),f.length=dt);if(rr()&&yt!==null&&!St&&f!==null&&(t.f&(qe|Qt|nt))===0)for(p=0;p<yt.length;p++)cu(yt[p],t);return r!==null&&r!==t&&(dr++,yt!==null&&(i===null?i=yt:i.push(...yt))),(t.f&jn)!==0&&(t.f^=jn),u}catch(g){return Ac(g)}finally{t.f^=Ko,Qe=e,dt=n,yt=i,G=r,wn=s,tn=o,bi(a),St=l,Kn=c}}function Im(t,e){let n=e.reactions;if(n!==null){var i=Lp.call(n,t);if(i!==-1){var r=n.length-1;r===0?n=e.reactions=null:(n[i]=n[r],n.pop())}}n===null&&(e.f&qe)!==0&&(Qe===null||!Qe.includes(e))&&(Ke(e,Qt),(e.f&(_t|Ts))===0&&(e.f^=Ts),Oc(e),Os(e,0))}function Os(t,e){var n=t.deps;if(n!==null)for(var i=e;i<n.length;i++)Im(t,n[i])}function fr(t){var e=t.f;if((e&Jt)===0){Ke(t,Ge);var n=U,i=Ti;U=t,Ti=!0;try{(e&Kt)!==0?bm(t):Xc(t),Jc(t);var r=uu(t);t.teardown=typeof r=="function"?r:null,t.wv=ou;var s;_c&&em&&(t.f&nt)!==0&&t.deps}finally{Ti=i,U=n}}}async function Cm(){await Promise.resolve(),ut()}function v(t){var e=t.f,n=(e&qe)!==0;if(G!==null&&!St){var i=U!==null&&(U.f&Jt)!==0;if(!i&&!tn?.includes(t)){var r=G.deps;if((G.f&Ko)!==0)t.rv<dr&&(t.rv=dr,Qe===null&&r!==null&&r[dt]===t?dt++:Qe===null?Qe=[t]:(!wn||!Qe.includes(t))&&Qe.push(t));else{(G.deps??=[]).push(t);var s=t.reactions;s===null?t.reactions=[G]:s.includes(G)||s.push(G)}}}else if(n&&t.deps===null&&t.effects===null){var o=t,a=o.parent;a!==null&&(a.f&_t)===0&&(o.f^=_t)}if(Gn){if(yn.has(t))return yn.get(t);if(n){o=t;var l=o.v;return((o.f&Ge)===0&&o.reactions!==null||du(o))&&(l=ta(o)),yn.set(o,l),l}}else if(n){if(o=t,It?.has(o))return It.get(o);hr(o)&&Dc(o)}if(It?.has(t))return It.get(t);if((t.f&jn)!==0)throw t.v;return t.v}function du(t){if(t.v===Ue)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(yn.has(e)||(e.f&qe)!==0&&du(e))return!0;return!1}function Ut(t){var e=St;try{return St=!0,t()}finally{St=e}}const Tm=-7169;function Ke(t,e){t.f=t.f&Tm|e}function Si(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Dt in t)la(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Dt in n&&la(n)}}}function la(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let i in t)try{la(t[i],e)}catch{}const n=Bo(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=gc(n);for(let r in i){const s=i[r].get;if(s)try{s.call(t)}catch{}}}}}const hu=new Set,ca=new Set;function fu(t,e,n,i={}){function r(s){if(i.capture||mr.call(e,s),!s.cancelBubble)return xs(()=>n?.call(this,s))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?vn(()=>{e.addEventListener(t,r,i)}):e.addEventListener(t,r,i),r}function pu(t,e,n,i,r){var s={capture:i,passive:r},o=fu(t,e,n,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&cr(()=>{e.removeEventListener(t,o,s)})}function pr(t){for(var e=0;e<t.length;e++)hu.add(t[e]);for(var n of ca)n(t)}let mu=null;function mr(t){var e=this,n=e.ownerDocument,i=t.type,r=t.composedPath?.()||[],s=r[0]||t.target;mu=t;var o=0,a=mu===t&&t.__root;if(a){var l=r.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=r[o]||t.target,s!==e){nr(t,"currentTarget",{configurable:!0,get(){return s||n}});var d=G,h=U;rt(null),vt(null);try{for(var u,f=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var g=s["__"+i];g!=null&&(!s.disabled||t.target===s)&&g.call(s,t)}catch(E){u?f.push(E):u=E}if(t.cancelBubble||p===e||p===null)break;s=p}if(u){for(let E of f)queueMicrotask(()=>{throw E});throw u}}finally{t.__root=e,delete t.currentTarget,rt(d),vt(h)}}}function _u(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function nn(t,e){var n=U;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function H(t,e){var n=(e&Ap)!==0,i=(e&Rp)!==0,r,s=!t.startsWith("<!>");return()=>{if(F)return nn(q,null),q;r===void 0&&(r=_u(s?t:"<!>"+t),n||(r=$t(r)));var o=i||Hc?document.importNode(r,!0):r.cloneNode(!0);if(n){var a=$t(o),l=o.lastChild;nn(a,l)}else nn(o,o);return o}}function Sm(t,e,n="svg"){var i=!t.startsWith("<!>"),r=`<${n}>${i?t:"<!>"+t}</${n}>`,s;return()=>{if(F)return nn(q,null),q;if(!s){var o=_u(r),a=$t(o);s=$t(a)}var l=s.cloneNode(!0);return nn(l,l),l}}function km(t,e){return Sm(t,e,"svg")}function Te(){if(F)return nn(q,null),q;var t=document.createDocumentFragment(),e=document.createComment(""),n=gt();return t.append(e,n),nn(e,n),t}function P(t,e){if(F){U.nodes_end=q,zn();return}t!==null&&t.before(e)}function Am(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Rm=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Pm(t){return Rm.includes(t)}const Nm={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function xm(t){return t=t.toLowerCase(),Nm[t]??t}const Lm=["touchstart","touchmove"];function Om(t){return Lm.includes(t)}const Dm=["textarea","script","style","title"];function Mm(t){return Dm.includes(t)}function R(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function gu(t,e){return vu(t,e)}function $m(t,e){ra(),e.intro=e.intro??!1;const n=e.target,i=F,r=q;try{for(var s=$t(n);s&&(s.nodeType!==vi||s.data!==mc);)s=Ft(s);if(!s)throw _i;ct(!0),We(s);const o=vu(t,{...e,anchor:s});return ct(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==_i&&console.warn("Failed to hydrate: ",o),e.recover===!1&&qp(),ra(),zc(n),ct(!1),gu(t,e)}finally{ct(i),We(r)}}const ki=new Map;function vu(t,{target:e,anchor:n,props:i={},events:r,context:s,intro:o=!0}){ra();var a=new Set,l=h=>{for(var u=0;u<h.length;u++){var f=h[u];if(!a.has(f)){a.add(f);var p=Om(f);e.addEventListener(f,mr,{passive:p});var g=ki.get(f);g===void 0?(document.addEventListener(f,mr,{passive:p}),ki.set(f,1)):ki.set(f,g+1)}}};l(zo(hu)),ca.add(l);var c=void 0,d=vm(()=>{var h=n??e.appendChild(gt());return om(h,{pending:()=>{}},u=>{if(s){_n({});var f=ge;f.c=s}if(r&&(i.$$events=r),F&&nn(u,null),c=t(u,i)||{},F&&(U.nodes_end=q,q===null||q.nodeType!==vi||q.data!==Vo))throw ks(),_i;s&&gn()}),()=>{for(var u of a){e.removeEventListener(u,mr);var f=ki.get(u);--f===0?(document.removeEventListener(u,mr),ki.delete(u)):ki.set(u,f)}ca.delete(l),h!==n&&h.parentNode?.removeChild(h)}});return ua.set(c,d),c}let ua=new WeakMap;function Fm(t,e){const n=ua.get(t);return n?(ua.delete(t),n(e)):Promise.resolve()}class yu{anchor;#t=new Map;#e=new Map;#n=new Map;#i=!0;constructor(e,n=!0){this.anchor=e,this.#i=n}#l=()=>{var e=X;if(this.#t.has(e)){var n=this.#t.get(e),i=this.#e.get(n);if(i)aa(i);else{var r=this.#n.get(n);r&&(this.#e.set(n,r.effect),this.#n.delete(n),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,o]of this.#t){if(this.#t.delete(s),s===e)break;const a=this.#n.get(o);a&&(Pe(a.effect),this.#n.delete(o))}for(const[s,o]of this.#e){if(s===n)continue;const a=()=>{if(Array.from(this.#t.values()).includes(s)){var c=document.createDocumentFragment();nu(o,c),c.append(gt()),this.#n.set(s,{effect:o,fragment:c})}else Pe(o);this.#e.delete(s)};this.#i||!i?Ci(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const n=Array.from(this.#t.values());for(const[i,r]of this.#n)n.includes(i)||(Pe(r.effect),this.#n.delete(i))};ensure(e,n){var i=X,r=Bc();if(n&&!this.#e.has(e)&&!this.#n.has(e))if(r){var s=document.createDocumentFragment(),o=gt();s.append(o),this.#n.set(e,{effect:it(()=>n(o)),fragment:s})}else this.#e.set(e,it(()=>n(this.anchor)));if(this.#t.set(i,e),r){for(const[a,l]of this.#e)a===e?i.skipped_effects.delete(l):i.skipped_effects.add(l);for(const[a,l]of this.#n)a===e?i.skipped_effects.delete(l.effect):i.skipped_effects.add(l.effect);i.oncommit(this.#l),i.ondiscard(this.#o)}else F&&(this.anchor=q),this.#l()}}function Ds(t){ge===null&&Ec(),yi&&ge.l!==null?Wm(ge).m.push(t):sa(()=>{const e=Ut(t);if(typeof e=="function")return e})}function Um(t){ge===null&&Ec(),Ds(()=>()=>Ut(t))}function Wm(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}function Se(t,e,n=!1){F&&zn();var i=new yu(t),r=n?Hn:0;function s(o,a){if(F){const c=Ic(t)===bs;if(o===c){var l=As();We(l),i.anchor=l,ct(!1),i.ensure(o,a),ct(!0);return}}i.ensure(o,a)}Ii(()=>{var o=!1;e((a,l=!0)=>{o=!0,s(l,a)}),o||s(!1,null)},r)}function Ms(t,e){return e}function Hm(t,e,n){for(var i=t.items,r=[],s=e.length,o=0;o<s;o++)oa(e[o].e,r,!0);var a=s>0&&r.length===0&&n!==null;if(a){var l=n.parentNode;zc(l),l.append(n),i.clear(),Wt(t,e[0].prev,e[s-1].next)}eu(r,()=>{for(var c=0;c<s;c++){var d=e[c];a||(i.delete(d.k),Wt(t,d.prev,d.next)),Pe(d.e,!a)}})}function _r(t,e,n,i,r,s=null){var o=t,a={flags:e,items:new Map,first:null},l=(e&fc)!==0;if(l){var c=t;o=F?We($t(c)):c.appendChild(gt())}F&&zn();var d=null,h=!1,u=new Map,f=ea(()=>{var S=n();return jo(S)?S:S==null?[]:zo(S)}),p,g;function E(){Vm(g,p,a,u,o,r,e,i,n),s!==null&&(p.length===0?d?aa(d):d=it(()=>s(o)):d!==null&&Ci(d,()=>{d=null}))}Ii(()=>{g??=U,p=v(f);var S=p.length;if(h&&S===0)return;h=S===0;let T=!1;if(F){var k=Ic(o)===bs;k!==(S===0)&&(o=As(),We(o),ct(!1),T=!0)}if(F){for(var N=null,O,w=0;w<S;w++){if(q.nodeType===vi&&q.data===Vo){o=q,T=!0,ct(!1);break}var I=p[w],b=i(I,w);O=da(q,a,N,null,I,b,w,r,e,n),a.items.set(b,O),N=O}S>0&&We(As())}if(F)S===0&&s&&(d=it(()=>s(o)));else if(Bc()){var D=new Set,x=X;for(w=0;w<S;w+=1){I=p[w],b=i(I,w);var K=a.items.get(b)??u.get(b);K?(e&(vs|ys))!==0&&bu(K,I,w,e):(O=da(null,a,null,null,I,b,w,r,e,n,!0),u.set(b,O)),D.add(b)}for(const[M,Y]of a.items)D.has(M)||x.skipped_effects.add(Y.e);x.oncommit(E)}else E();T&&ct(!0),v(f)}),F&&(o=q)}function Vm(t,e,n,i,r,s,o,a,l){var c=(o&Ep)!==0,d=(o&(vs|ys))!==0,h=e.length,u=n.items,f=n.first,p=f,g,E=null,S,T=[],k=[],N,O,w,I;if(c)for(I=0;I<h;I+=1)N=e[I],O=a(N,I),w=u.get(O),w!==void 0&&(w.a?.measure(),(S??=new Set).add(w));for(I=0;I<h;I+=1){if(N=e[I],O=a(N,I),w=u.get(O),w===void 0){var b=i.get(O);if(b!==void 0){i.delete(O),u.set(O,b);var D=E?E.next:p;Wt(n,E,b),Wt(n,b,D),ha(b,D,r),E=b}else{var x=p?p.e.nodes_start:r;E=da(x,n,E,E===null?n.first:E.next,N,O,I,s,o,l)}u.set(O,E),T=[],k=[],p=E.next;continue}if(d&&bu(w,N,I,o),(w.e.f&lt)!==0&&(aa(w.e),c&&(w.a?.unfix(),(S??=new Set).delete(w))),w!==p){if(g!==void 0&&g.has(w)){if(T.length<k.length){var K=k[0],M;E=K.prev;var Y=T[0],te=T[T.length-1];for(M=0;M<T.length;M+=1)ha(T[M],K,r);for(M=0;M<k.length;M+=1)g.delete(k[M]);Wt(n,Y.prev,te.next),Wt(n,E,Y),Wt(n,te,K),p=K,E=te,I-=1,T=[],k=[]}else g.delete(w),ha(w,p,r),Wt(n,w.prev,w.next),Wt(n,w,E===null?n.first:E.next),Wt(n,E,w),E=w;continue}for(T=[],k=[];p!==null&&p.k!==O;)(p.e.f&lt)===0&&(g??=new Set).add(p),k.push(p),p=p.next;if(p===null)continue;w=p}T.push(w),E=w,p=w.next}if(p!==null||g!==void 0){for(var W=g===void 0?[]:zo(g);p!==null;)(p.e.f&lt)===0&&W.push(p),p=p.next;var Q=W.length;if(Q>0){var be=(o&fc)!==0&&h===0?r:null;if(c){for(I=0;I<Q;I+=1)W[I].a?.measure();for(I=0;I<Q;I+=1)W[I].a?.fix()}Hm(n,W,be)}}c&&vn(()=>{if(S!==void 0)for(w of S)w.a?.apply()}),t.first=n.first&&n.first.e,t.last=E&&E.e;for(var re of i.values())Pe(re.e);i.clear()}function bu(t,e,n,i){(i&vs)!==0&&Ei(t.v,e),(i&ys)!==0?Ei(t.i,n):t.i=n}function da(t,e,n,i,r,s,o,a,l,c,d){var h=(l&vs)!==0,u=(l&Ip)===0,f=h?u?ia(r,!1,!1):bn(r):r,p=(l&ys)===0?o:bn(o),g={i:p,v:f,k:s,a:null,e:null,prev:n,next:i};try{if(t===null){var E=document.createDocumentFragment();E.append(t=gt())}return g.e=it(()=>a(t,f,p,c),F),g.e.prev=n&&n.e,g.e.next=i&&i.e,n===null?d||(e.first=g):(n.next=g,n.e.next=g.e),i!==null&&(i.prev=g,i.e.prev=g.e),g}finally{}}function ha(t,e,n){for(var i=t.next?t.next.e.nodes_start:n,r=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==null&&s!==i;){var o=Ft(s);r.before(s),s=o}}function Wt(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Oe(t,e,n,i,r){F&&zn();var s=e.$$slots?.[n],o=!1;s===!0&&(s=e.children,o=!0),s===void 0||s(t,o?()=>i:i)}function jm(t,e,n,i,r,s){let o=F;F&&zn();var a=null;F&&q.nodeType===Wp&&(a=q,zn());var l=F?q:t,c=new yu(l,!1);Ii(()=>{const d=e()||null;var h=Np;if(d===null){c.ensure(null,null);return}return c.ensure(d,u=>{if(d){if(a=F?a:document.createElementNS(h,d),nn(a,a),i){F&&Mm(d)&&a.append(document.createComment(""));var f=F?$t(a):a.appendChild(gt());F&&(f===null?ct(!1):We(f)),i(a,f)}U.nodes_end=a,u.before(a)}F&&We(u)}),()=>{}},Hn),cr(()=>{}),o&&(ct(!0),We(l))}function Yn(t,e){ur(()=>{var n=t.getRootNode(),i=n.host?n:n.head??n.ownerDocument.head;if(!i.querySelector("#"+e.hash)){const r=document.createElement("style");r.id=e.hash,r.textContent=e.code,i.appendChild(r)}})}function zm(t,e){var n=void 0,i;Ii(()=>{n!==(n=e())&&(i&&(Pe(i),i=null),n&&(i=it(()=>{ur(()=>n(t))})))})}function wu(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=wu(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Bm(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=wu(t))&&(i&&(i+=" "),i+=e);return i}function qm(t){return typeof t=="object"?Bm(t):t??""}const Eu=[...` 	
\r\f \v\uFEFF`];function Gm(t,e,n){var i=t==null?"":""+t;if(e&&(i=i?i+" "+e:e),n){for(var r in n)if(n[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,o=0;(o=i.indexOf(r,o))>=0;){var a=o+s;(o===0||Eu.includes(i[o-1]))&&(a===i.length||Eu.includes(i[a]))?i=(o===0?"":i.substring(0,o))+i.substring(a+1):o=a}}return i===""?null:i}function Iu(t,e=!1){var n=e?" !important;":";",i="";for(var r in t){var s=t[r];s!=null&&s!==""&&(i+=" "+r+": "+s+n)}return i}function fa(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Km(t,e){if(e){var n="",i,r;if(Array.isArray(e)?(i=e[0],r=e[1]):i=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,l=[];i&&l.push(...Object.keys(i).map(fa)),r&&l.push(...Object.keys(r).map(fa));var c=0,d=-1;const g=t.length;for(var h=0;h<g;h++){var u=t[h];if(a?u==="/"&&t[h-1]==="*"&&(a=!1):s?s===u&&(s=!1):u==="/"&&t[h+1]==="*"?a=!0:u==='"'||u==="'"?s=u:u==="("?o++:u===")"&&o--,!a&&s===!1&&o===0){if(u===":"&&d===-1)d=h;else if(u===";"||h===g-1){if(d!==-1){var f=fa(t.substring(c,d).trim());if(!l.includes(f)){u!==";"&&h++;var p=t.substring(c,h).trim();n+=" "+p+";"}}c=h+1,d=-1}}}}return i&&(n+=Iu(i)),r&&(n+=Iu(r,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function gr(t,e,n,i,r,s){var o=t.__className;if(F||o!==n||o===void 0){var a=Gm(n,i,s);(!F||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):e?t.className=a:t.setAttribute("class",a)),t.__className=n}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&t.classList.toggle(l,c)}return s}function pa(t,e={},n,i){for(var r in n){var s=n[r];e[r]!==s&&(n[r]==null?t.style.removeProperty(r):t.style.setProperty(r,s,i))}}function Ym(t,e,n,i){var r=t.__style;if(F||r!==e){var s=Km(e,i);(!F||s!==t.getAttribute("style"))&&(s==null?t.removeAttribute("style"):t.style.cssText=s),t.__style=e}else i&&(Array.isArray(i)?(pa(t,n?.[0],i[0]),pa(t,n?.[1],i[1],"important")):pa(t,n,i));return i}function $s(t,e,n=!1){if(t.multiple){if(e==null)return;if(!jo(e))return Xp();for(var i of t.options)i.selected=e.includes(vr(i));return}for(i of t.options){var r=vr(i);if(hm(r,e)){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Cu(t){var e=new MutationObserver(()=>{$s(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),cr(()=>{e.disconnect()})}function Qm(t,e,n=e){var i=new WeakSet,r=!0;Kc(t,"change",s=>{var o=s?"[selected]":":checked",a;if(t.multiple)a=[].map.call(t.querySelectorAll(o),vr);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");a=l&&vr(l)}n(a),X!==null&&i.add(X)}),ur(()=>{var s=e();if(t===document.activeElement){var o=sr??X;if(i.has(o))return}if($s(t,s,r),r&&s===void 0){var a=t.querySelector(":checked");a!==null&&(s=vr(a),n(s))}t.__value=s,r=!1}),Cu(t)}function vr(t){return"__value"in t?t.__value:t.value}const yr=Symbol("class"),br=Symbol("style"),Tu=Symbol("is custom element"),Su=Symbol("is html");function ma(t){if(F){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var i=t.value;ke(t,"value",null),t.value=i}if(t.hasAttribute("checked")){var r=t.checked;ke(t,"checked",null),t.checked=r}}};t.__on_r=n,vn(n),Gc()}}function Jm(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function ke(t,e,n,i){var r=Au(t);F&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=n)&&(e==="loading"&&(t[Up]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Pu(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Xm(t,e,n,i,r=!1,s=!1){if(F&&r&&t.tagName==="INPUT"){var o=t,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in n||ma(o)}var l=Au(t),c=l[Tu],d=!l[Su];let h=F&&c;h&&ct(!1);var u=e||{},f=t.tagName==="OPTION";for(var p in e)p in n||(n[p]=null);n.class?n.class=qm(n.class):n[yr]&&(n.class=null),n[br]&&(n.style??=null);var g=Pu(t);for(const w in n){let I=n[w];if(f&&w==="value"&&I==null){t.value=t.__value="",u[w]=I;continue}if(w==="class"){var E=t.namespaceURI==="http://www.w3.org/1999/xhtml";gr(t,E,I,i,e?.[yr],n[yr]),u[w]=I,u[yr]=n[yr];continue}if(w==="style"){Ym(t,I,e?.[br],n[br]),u[w]=I,u[br]=n[br];continue}var S=u[w];if(!(I===S&&!(I===void 0&&t.hasAttribute(w)))){u[w]=I;var T=w[0]+w[1];if(T!=="$$")if(T==="on"){const b={},D="$$"+w;let x=w.slice(2);var k=Pm(x);if(Am(x)&&(x=x.slice(0,-7),b.capture=!0),!k&&S){if(I!=null)continue;t.removeEventListener(x,u[D],b),u[D]=null}if(I!=null)if(k)t[`__${x}`]=I,pr([x]);else{let K=function(M){u[w].call(this,M)};u[D]=fu(x,t,K,b)}else k&&(t[`__${x}`]=void 0)}else if(w==="style")ke(t,w,I);else if(w==="autofocus")fm(t,!!I);else if(!c&&(w==="__value"||w==="value"&&I!=null))t.value=t.__value=I;else if(w==="selected"&&f)Jm(t,I);else{var N=w;d||(N=xm(N));var O=N==="defaultValue"||N==="defaultChecked";if(I==null&&!c&&!O)if(l[w]=null,N==="value"||N==="checked"){let b=t;const D=e===void 0;if(N==="value"){let x=b.defaultValue;b.removeAttribute(N),b.defaultValue=x,b.value=b.__value=D?x:null}else{let x=b.defaultChecked;b.removeAttribute(N),b.defaultChecked=x,b.checked=D?x:!1}}else t.removeAttribute(w);else O||g.includes(N)&&(c||typeof I!="string")?(t[N]=I,N in l&&(l[N]=Ue)):typeof I!="function"&&ke(t,N,I)}}}return h&&ct(!0),u}function ku(t,e,n=[],i=[],r=[],s,o=!1,a=!1){Lc(r,n,i,l=>{var c=void 0,d={},h=t.nodeName==="SELECT",u=!1;if(Ii(()=>{var p=e(...l.map(v)),g=Xm(t,c,p,s,o,a);u&&h&&"value"in p&&$s(t,p.value);for(let S of Object.getOwnPropertySymbols(d))p[S]||Pe(d[S]);for(let S of Object.getOwnPropertySymbols(p)){var E=p[S];S.description===xp&&(!c||E!==c[S])&&(d[S]&&Pe(d[S]),d[S]=it(()=>zm(t,()=>E))),g[S]=E}c=g}),h){var f=t;ur(()=>{$s(f,c.value,!0),Cu(f)})}u=!0})}function Au(t){return t.__attributes??={[Tu]:t.nodeName.includes("-"),[Su]:t.namespaceURI===Pp}}var Ru=new Map;function Pu(t){var e=t.getAttribute("is")||t.nodeName,n=Ru.get(e);if(n)return n;Ru.set(e,n=[]);for(var i,r=t,s=Element.prototype;s!==r;){i=gc(r);for(var o in i)i[o].set&&n.push(o);r=Bo(r)}return n}function Nu(t,e,n=e){var i=new WeakSet;Kc(t,"input",async r=>{var s=r?t.defaultValue:t.value;if(s=_a(t)?ga(s):s,n(s),X!==null&&i.add(X),await Cm(),s!==(s=e())){var o=t.selectionStart,a=t.selectionEnd,l=t.value.length;if(t.value=s??"",a!==null){var c=t.value.length;o===a&&a===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(a,c))}}}),(F&&t.defaultValue!==t.value||Ut(e)==null&&t.value)&&(n(_a(t)?ga(t.value):t.value),X!==null&&i.add(X)),Ls(()=>{var r=e();if(t===document.activeElement){var s=sr??X;if(i.has(s))return}_a(t)&&r===ga(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function _a(t){var e=t.type;return e==="number"||e==="range"}function ga(t){return t===""?null:+t}function xu(t,e){return t===e||t?.[Dt]===e}function Lu(t={},e,n,i){return ur(()=>{var r,s;return Ls(()=>{r=s,s=[],Ut(()=>{t!==n(...s)&&(e(t,...s),r&&xu(n(...r),t)&&e(null,...r))})}),()=>{vn(()=>{s&&xu(n(...s),t)&&e(null,...s)})}}),t}function Ou(t=!1){const e=ge,n=e.l.u;if(!n)return;let i=()=>Si(e.s);if(t){let r=0,s={};const o=ar(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&r++,r});i=()=>v(o)}n.b.length&&_m(()=>{Du(e,i),Es(n.b)}),sa(()=>{const r=Ut(()=>n.m.map(Mp));return()=>{for(const s of r)typeof s=="function"&&s()}}),n.a.length&&sa(()=>{Du(e,i),Es(n.a)})}function Du(t,e){if(t.l.s)for(const n of t.l.s)v(n);e()}function va(t,e,n){if(t==null)return e(void 0),n&&n(void 0),pn;const i=Ut(()=>t.subscribe(e,n));return i.unsubscribe?()=>i.unsubscribe():i}const Ai=[];function Zm(t,e){return{subscribe:wr(t,e).subscribe}}function wr(t,e=pn){let n=null;const i=new Set;function r(a){if(Tc(t,a)&&(t=a,n)){const l=!Ai.length;for(const c of i)c[1](),Ai.push(c,t);if(l){for(let c=0;c<Ai.length;c+=2)Ai[c][0](Ai[c+1]);Ai.length=0}}}function s(a){r(a(t))}function o(a,l=pn){const c=[a,l];return i.add(c),i.size===1&&(n=e(r,s)||pn),a(t),()=>{i.delete(c),i.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}function e_(t,e,n){const i=!Array.isArray(t),r=i?[t]:t;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Zm(n,(o,a)=>{let l=!1;const c=[];let d=0,h=pn;const u=()=>{if(d)return;h();const p=e(i?c[0]:c,o,a);s?o(p):h=typeof p=="function"?p:pn},f=r.map((p,g)=>va(p,E=>{c[g]=E,d&=~(1<<g),l&&u()},()=>{d|=1<<g}));return l=!0,u(),function(){Es(f),h(),l=!1}})}function t_(t){let e;return va(t,n=>e=n)(),e}let Fs=!1,ya=Symbol();function Er(t,e,n){const i=n[e]??={store:null,source:ia(void 0),unsubscribe:pn};if(i.store!==t&&!(ya in n))if(i.unsubscribe(),i.store=t??null,t==null)i.source.v=void 0,i.unsubscribe=pn;else{var r=!0;i.unsubscribe=va(t,s=>{r?i.source.v=s:L(i.source,s)}),r=!1}return t&&ya in n?t_(t):v(i.source)}function ba(){const t={};function e(){cr(()=>{for(var n in t)t[n].unsubscribe();nr(t,ya,{enumerable:!1,value:!0})})}return[t,e]}function n_(t){var e=Fs;try{return Fs=!1,[t(),Fs]}finally{Fs=e}}const i_={get(t,e){if(!t.exclude.includes(e))return v(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var i=U;try{vt(t.parent_effect),t.special[e]=bt({get[e](){return t.props[e]}},e,pc)}finally{vt(i)}}return t.special[e](n),$c(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),$c(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function De(t,e){return new Proxy({props:t,exclude:e,special:{},version:bn(0),parent_effect:U},i_)}const r_={get(t,e){let n=t.props.length;for(;n--;){let i=t.props[n];if(ir(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i)return i[e]}},set(t,e,n){let i=t.props.length;for(;i--;){let r=t.props[i];ir(r)&&(r=r());const s=Gt(r,e);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let i=t.props[n];if(ir(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i){const r=Gt(i,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(t,e){if(e===Dt||e===Qo)return!1;for(let n of t.props)if(ir(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(ir(n)&&(n=n()),!!n){for(const i in n)e.includes(i)||e.push(i);for(const i of Object.getOwnPropertySymbols(n))e.includes(i)||e.push(i)}return e}};function Ye(...t){return new Proxy({props:t},r_)}function bt(t,e,n,i){var r=!yi||(n&Tp)!==0,s=(n&Sp)!==0,o=(n&kp)!==0,a=i,l=!0,c=()=>(l&&(l=!1,a=o?Ut(i):i),a),d;if(s){var h=Dt in t||Qo in t;d=Gt(t,e)?.set??(h&&e in t?k=>t[e]=k:void 0)}var u,f=!1;s?[u,f]=n_(()=>t[e]):u=t[e],u===void 0&&i!==void 0&&(u=c(),d&&(r&&Gp(),d(u)));var p;if(r?p=()=>{var k=t[e];return k===void 0?c():(l=!0,k)}:p=()=>{var k=t[e];return k!==void 0&&(a=void 0),k===void 0?a:k},r&&(n&pc)===0)return p;if(d){var g=t.$$legacy;return(function(k,N){return arguments.length>0?((!r||!N||g||f)&&d(N?p():k),k):p()})}var E=!1,S=((n&Cp)!==0?ar:ea)(()=>(E=!1,p()));s&&v(S);var T=U;return(function(k,N){if(arguments.length>0){const O=N?v(S):r&&s?en(k):k;return L(S,O),E=!0,a!==void 0&&(a=O),k}return Gn&&E||(T.f&Jt)!==0?S.v:v(S)})}function s_(t){return new o_(t)}class o_{#t;#e;constructor(e){var n=new Map,i=(s,o)=>{var a=ia(o,!1,!1);return n.set(s,a),a};const r=new Proxy({...e.props||{},$$events:{}},{get(s,o){return v(n.get(o)??i(o,Reflect.get(s,o)))},has(s,o){return o===Qo?!0:(v(n.get(o)??i(o,Reflect.get(s,o))),Reflect.has(s,o))},set(s,o,a){return L(n.get(o)??i(o,a),a),Reflect.set(s,o,a)}});this.#e=(e.hydrate?$m:gu)(e.component,{target:e.target,anchor:e.anchor,props:r,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&ut(),this.#t=r.$$events;for(const s of Object.keys(this.#e))s==="$set"||s==="$destroy"||s==="$on"||nr(this,s,{get(){return this.#e[s]},set(o){this.#e[s]=o},enumerable:!0});this.#e.$set=s=>{Object.assign(r,s)},this.#e.$destroy=()=>{Fm(this.#e)}}$set(e){this.#e.$set(e)}$on(e,n){this.#t[e]=this.#t[e]||[];const i=(...r)=>n.call(this,...r);return this.#t[e].push(i),()=>{this.#t[e]=this.#t[e].filter(r=>r!==i)}}$destroy(){this.#e.$destroy()}}let Mu;typeof HTMLElement=="function"&&(Mu=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const i=this.$$c.$on(t,e);this.$$l_u.set(e,i)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const i=this.$$l_u.get(e);i&&(i(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(i){return r=>{const s=document.createElement("slot");i!=="default"&&(s.name=i),P(r,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},n=a_(this);for(const i of this.$$s)i in n&&(i==="default"&&!this.$$d.children?(this.$$d.children=t(i),e.default=!0):e[i]=t(i));for(const i of this.attributes){const r=this.$$g_p(i.name);r in this.$$d||(this.$$d[r]=Us(r,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=s_({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$host:this}}),this.$$me=gm(()=>{Ls(()=>{this.$$r=!0;for(const i of ws(this.$$c)){if(!this.$$p_d[i]?.reflect)continue;this.$$d[i]=this.$$c[i];const r=Us(i,this.$$d[i],this.$$p_d,"toAttribute");r==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,r)}this.$$r=!1})});for(const i in this.$$l)for(const r of this.$$l[i]){const s=this.$$c.$on(i,r);this.$$l_u.set(r,s)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=Us(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return ws(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function Us(t,e,n,i){const r=n[t]?.type;if(e=r==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!n[t])return e;if(i==="toAttribute")switch(r){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(r){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function a_(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function pe(t,e,n,i,r,s){let o=class extends Mu{constructor(){super(t,n,r),this.$$p_d=e}static get observedAttributes(){return ws(e).map(a=>(e[a].attribute||a).toLowerCase())}};return ws(e).forEach(a=>{nr(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=Us(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var d=Gt(c,a)?.get;d?c[a]=l:c.$set({[a]:l})}}})}),i.forEach(a=>{nr(o.prototype,a,{get(){return this.$$c?.[a]}})}),t.element=o,o}const l_=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw Ri(e)},Ri=function(t){return new Error("Firebase Database ("+$u.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},c_=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let u=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(u=64)),i.push(n[d],n[h],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):c_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new u_;const u=s<<2|a>>4;if(i.push(u),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class u_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uu=function(t){const e=Fu(t);return wa.encodeByteArray(e,!0)},Ws=function(t){return Uu(t).replace(/\./g,"")},Hs=function(t){try{return wa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t){return Wu(void 0,t)}function Wu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!h_(n)||(t[n]=Wu(t[n],e[n]));return t}function h_(t){return t!=="__proto__"}/**
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
 */function f_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const p_=()=>f_().__FIREBASE_DEFAULTS__,m_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},__=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hs(t[1]);return e&&JSON.parse(e)},Ea=()=>{try{return l_()||p_()||m_()||__()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hu=t=>Ea()?.emulatorHosts?.[t],g_=t=>{const e=Hu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Vu=()=>Ea()?.config,ju=t=>Ea()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Pi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function v_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ws(JSON.stringify(n)),Ws(JSON.stringify(o)),""].join(".")}const Cr={};function y_(){const t={prod:[],emulator:[]};for(const e of Object.keys(Cr))Cr[e]?t.emulator.push(e):t.prod.push(e);return t}function b_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Bu=!1;function qu(t,e){if(typeof window>"u"||typeof document>"u"||!Pi(window.location.host)||Cr[t]===e||Cr[t]||Bu)return;Cr[t]=e;function n(u){return`__firebase__banner__${u}`}const i="__firebase__banner",s=y_().prod.length>0;function o(){const u=document.getElementById(i);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,f){u.setAttribute("width","24"),u.setAttribute("id",f),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Bu=!0,o()},u}function d(u,f){u.setAttribute("id",f),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=b_(i),f=n("text"),p=document.getElementById(f)||document.createElement("span"),g=n("learnmore"),E=document.getElementById(g)||document.createElement("a"),S=n("preprendIcon"),T=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const k=u.element;a(k),d(E,g);const N=c();l(T,S),k.append(T,p,E,N),document.body.appendChild(k)}s?(p.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ia(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function w_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function E_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I_(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C_(){return $u.NODE_ADMIN===!0}function T_(){try{return typeof indexedDB=="object"}catch{return!1}}function S_(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="FirebaseError";class En extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=k_,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?A_(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new En(r,a,i)}}function A_(t,e){return t.replace(R_,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const R_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){return JSON.parse(t)}function Ne(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Sr(Hs(s[0])||""),n=Sr(Hs(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},P_=function(t){const e=Ku(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},N_=function(t){const e=Ku(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ca(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vs(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Qn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Yu(s)&&Yu(o)){if(!Qn(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Yu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function kr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Ar(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const u=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(u<<1|u>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):h<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const u=(r<<5|r>>>27)+c+l+d+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=u}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function L_(t,e){const n=new O_(t,e);return n.subscribe.bind(n)}class O_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");D_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Ta),r.error===void 0&&(r.error=Ta),r.complete===void 0&&(r.complete=Ta);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ta(){}function js(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,C(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},zs=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ir;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U_(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:F_(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F_(t){return t===Zn?void 0:t}function U_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const H_={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},V_=Z.INFO,j_={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},z_=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=j_[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=V_,this._logHandler=z_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?H_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const B_=(t,e)=>e.some(n=>t instanceof n);let Qu,Ju;function q_(){return Qu||(Qu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G_(){return Ju||(Ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xu=new WeakMap,ka=new WeakMap,Zu=new WeakMap,Aa=new WeakMap,Ra=new WeakMap;function K_(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(In(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xu.set(n,t)}).catch(()=>{}),Ra.set(e,t),e}function Y_(t){if(ka.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ka.set(t,e)}let Pa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ka.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Q_(t){Pa=t(Pa)}function J_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Na(this),e,...n);return Zu.set(i,e.sort?e.sort():[e]),In(i)}:G_().includes(t)?function(...e){return t.apply(Na(this),e),In(Xu.get(this))}:function(...e){return In(t.apply(Na(this),e))}}function X_(t){return typeof t=="function"?J_(t):(t instanceof IDBTransaction&&Y_(t),B_(t,q_())?new Proxy(t,Pa):t)}function In(t){if(t instanceof IDBRequest)return K_(t);if(Aa.has(t))return Aa.get(t);const e=X_(t);return e!==t&&(Aa.set(t,e),Ra.set(e,t)),e}const Na=t=>Ra.get(t);function Z_(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=In(o);return i&&o.addEventListener("upgradeneeded",l=>{i(In(o.result),l.oldVersion,l.newVersion,In(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const eg=["get","getKey","getAll","getAllKeys","count"],tg=["put","add","delete","clear"],xa=new Map;function ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xa.get(e))return xa.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=tg.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||eg.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return xa.set(e,s),s}Q_(t=>({...t,get:(e,n,i)=>ed(e,n)||t.get(e,n,i),has:(e,n)=>!!ed(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ig(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ig(t){return t.getComponent()?.type==="VERSION"}const La="@firebase/app",td="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Sa("@firebase/app"),rg="@firebase/app-compat",sg="@firebase/analytics-compat",og="@firebase/analytics",ag="@firebase/app-check-compat",lg="@firebase/app-check",cg="@firebase/auth",ug="@firebase/auth-compat",dg="@firebase/database",hg="@firebase/data-connect",fg="@firebase/database-compat",pg="@firebase/functions",mg="@firebase/functions-compat",_g="@firebase/installations",gg="@firebase/installations-compat",vg="@firebase/messaging",yg="@firebase/messaging-compat",bg="@firebase/performance",wg="@firebase/performance-compat",Eg="@firebase/remote-config",Ig="@firebase/remote-config-compat",Cg="@firebase/storage",Tg="@firebase/storage-compat",Sg="@firebase/firestore",kg="@firebase/ai",Ag="@firebase/firestore-compat",Rg="firebase",Pg="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="[DEFAULT]",Ng={[La]:"fire-core",[rg]:"fire-core-compat",[og]:"fire-analytics",[sg]:"fire-analytics-compat",[lg]:"fire-app-check",[ag]:"fire-app-check-compat",[cg]:"fire-auth",[ug]:"fire-auth-compat",[dg]:"fire-rtdb",[hg]:"fire-data-connect",[fg]:"fire-rtdb-compat",[pg]:"fire-fn",[mg]:"fire-fn-compat",[_g]:"fire-iid",[gg]:"fire-iid-compat",[vg]:"fire-fcm",[yg]:"fire-fcm-compat",[bg]:"fire-perf",[wg]:"fire-perf-compat",[Eg]:"fire-rc",[Ig]:"fire-rc-compat",[Cg]:"fire-gcs",[Tg]:"fire-gcs-compat",[Sg]:"fire-fst",[Ag]:"fire-fst-compat",[kg]:"fire-vertex","fire-js":"fire-js",[Rg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map,xg=new Map,Da=new Map;function nd(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xi(t){const e=t.name;if(Da.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Da.set(e,t);for(const n of Bs.values())nd(n,t);for(const n of xg.values())nd(n,t);return!0}function Ma(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ht(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new Tr("app","Firebase",Lg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=Pg;function id(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Oa,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw Cn.create("bad-app-name",{appName:String(r)});if(n||(n=Vu()),!n)throw Cn.create("no-options");const s=Bs.get(r);if(s){if(Qn(n,s.options)&&Qn(i,s.config))return s;throw Cn.create("duplicate-app",{appName:r})}const o=new W_(r);for(const l of Da.values())o.addComponent(l);const a=new Og(n,i,o);return Bs.set(r,a),a}function rd(t=Oa){const e=Bs.get(t);if(!e&&t===Oa&&Vu())return id();if(!e)throw Cn.create("no-app",{appName:t});return e}function Tn(t,e,n){let i=Ng[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(o.join(" "));return}xi(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Dg="firebase-heartbeat-database",Mg=1,Rr="firebase-heartbeat-store";let $a=null;function sd(){return $a||($a=Z_(Dg,Mg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Rr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),$a}async function $g(t){try{const n=(await sd()).transaction(Rr),i=await n.objectStore(Rr).get(ad(t));return await n.done,i}catch(e){if(e instanceof En)rn.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e?.message});rn.warn(n.message)}}}async function od(t,e){try{const i=(await sd()).transaction(Rr,"readwrite");await i.objectStore(Rr).put(e,ad(t)),await i.done}catch(n){if(n instanceof En)rn.warn(n.message);else{const i=Cn.create("idb-set",{originalErrorMessage:n?.message});rn.warn(i.message)}}}function ad(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fg=1024,Ug=30;class Wg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ld();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>Ug){const r=jg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){rn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ld(),{heartbeatsToSend:n,unsentEntries:i}=Hg(this._heartbeatsCache.heartbeats),r=Ws(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return rn.warn(e),""}}}function ld(){return new Date().toISOString().substring(0,10)}function Hg(t,e=Fg){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),cd(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),cd(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Vg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T_()?S_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $g(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return od(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return od(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cd(t){return Ws(JSON.stringify({version:2,heartbeats:t})).length}function jg(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){xi(new Xn("platform-logger",e=>new ng(e),"PRIVATE")),xi(new Xn("heartbeat",e=>new Wg(e),"PRIVATE")),Tn(La,td,t),Tn(La,td,"esm2020"),Tn("fire-js","")}zg("");var Bg="firebase",qg="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(Bg,qg,"app");function ud(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gg=ud,dd=new Tr("auth","Firebase",ud());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Sa("@firebase/auth");function Kg(t,...e){qs.logLevel<=Z.WARN&&qs.warn(`Auth (${Li}): ${t}`,...e)}function Gs(t,...e){qs.logLevel<=Z.ERROR&&qs.error(`Auth (${Li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw Fa(t,...e)}function ft(t,...e){return Fa(t,...e)}function hd(t,e,n){const i={...Gg(),[e]:n};return new Tr("auth","Firebase",i).create(e,{appName:t.name})}function Vt(t){return hd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fa(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return dd.create(t,...e)}function A(t,e,...n){if(!t)throw Fa(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gs(e),new Error(e)}function on(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(){return typeof self<"u"&&self.location?.href||""}function fd(){return pd()==="http:"||pd()==="https:"}function pd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fd()||E_()||"connection"in navigator)?navigator.onLine:!0}function Qg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=Ia()||Gu()}get(){return Yg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Zg=new Pr(3e4,6e4);function st(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function pt(t,e,n,i,r={}){return _d(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Jn({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return w_()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Pi(t.emulatorConfig.host)&&(c.credentials="include"),md.fetch()(await gd(t,t.config.apiHost,n,a),c)})}async function _d(t,e,n){t._canInitEmulator=!1;const i={...Jg,...e};try{const r=new tv(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Nr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Nr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Nr(t,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hd(t,d,c);kt(t,d)}}catch(r){if(r instanceof En)throw r;kt(t,"network-request-failed",{message:String(r)})}}async function Sn(t,e,n,i,r={}){const s=await pt(t,e,n,i,r);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function gd(t,e,n,i){const r=`${e}${n}?${i}`,s=t,o=s.config.emulator?Wa(t.config,r):`${t.config.apiScheme}://${r}`;return Xg.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function ev(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ft(this.auth,"network-request-failed")),Zg.get())})}}function Nr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ft(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){return t!==void 0&&t.getResponse!==void 0}function yd(t){return t!==void 0&&t.enterprise!==void 0}class bd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ev(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(t){return(await pt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function wd(t,e){return pt(t,"GET","/v2/recaptchaConfig",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(t,e){return pt(t,"POST","/v1/accounts:delete",e)}async function Ks(t,e){return pt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rv(t,e=!1){const n=Me(t),i=await n.getIdToken(e),r=Va(i);A(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:xr(Ha(r.auth_time)),issuedAtTime:xr(Ha(r.iat)),expirationTime:xr(Ha(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ha(t){return Number(t)*1e3}function Va(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Gs("JWT malformed, contained fewer than 3 sections"),null;try{const r=Hs(n);return r?JSON.parse(r):(Gs("Failed to decode base64 JWT payload"),null)}catch(r){return Gs("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Ed(t){const e=Va(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof En&&sv(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function sv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t){const e=t.auth,n=await t.getIdToken(),i=await Oi(t,Ks(e,{idToken:n}));A(i?.users.length,e,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const s=r.providerUserInfo?.length?Id(r.providerUserInfo):[],o=lv(t.providerData,s),a=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!o?.length,c=a?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ja(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function av(t){const e=Me(t);await Ys(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lv(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Id(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(t,e){const n=await _d(t,{},async()=>{const i=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=await gd(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Pi(t.emulatorConfig.host)&&(l.credentials="include"),md.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uv(t,e){return pt(t,"POST","/v2/accounts:revokeToken",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=Ed(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await cv(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Di;return i&&(A(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(A(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor({uid:e,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new ov(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ja(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rv(this,e)}reload(){return av(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ys(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Oi(this,iv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,r=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:f,providerData:p,stsTokenManager:g}=n;A(h&&g,e,"internal-error");const E=Di.fromJSON(this.name,g);A(typeof h=="string",e,"internal-error"),kn(i,e.name),kn(r,e.name),A(typeof u=="boolean",e,"internal-error"),A(typeof f=="boolean",e,"internal-error"),kn(s,e.name),kn(o,e.name),kn(a,e.name),kn(l,e.name),kn(c,e.name),kn(d,e.name);const S=new At({uid:h,auth:e,email:r,emailVerified:u,displayName:i,isAnonymous:f,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:E,createdAt:c,lastLoginAt:d});return p&&Array.isArray(p)&&(S.providerData=p.map(T=>({...T}))),l&&(S._redirectEventId=l),S}static async _fromIdTokenResponse(e,n,i=!1){const r=new Di;r.updateFromServerResponse(n);const s=new At({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ys(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];A(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Id(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!s?.length,a=new Di;a.updateFromIdToken(i);const l=new At({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ja(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Map;function an(t){on(t instanceof Function,"Expected a class definition");let e=Cd.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Td.type="NONE";const Sd=Td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Qs(this.userKey,r.apiKey,s),this.fullPersistenceKey=Qs("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ks(this.auth,{idToken:e}).catch(()=>{});return n?At._fromGetAccountInfoResponse(this.auth,n,e):null}return At._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Mi(an(Sd),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||an(Sd);const o=Qs(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let h;if(typeof d=="string"){const u=await Ks(e,{idToken:d}).catch(()=>{});if(!u)break;h=await At._fromGetAccountInfoResponse(e,u,d)}else h=At._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mi(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Mi(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ad(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ld(e))return"Blackberry";if(Od(e))return"Webos";if(Rd(e))return"Safari";if((e.includes("chrome/")||Pd(e))&&!e.includes("edge/"))return"Chrome";if(xd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function Ad(t=Je()){return/firefox\//i.test(t)}function Rd(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pd(t=Je()){return/crios\//i.test(t)}function Nd(t=Je()){return/iemobile/i.test(t)}function xd(t=Je()){return/android/i.test(t)}function Ld(t=Je()){return/blackberry/i.test(t)}function Od(t=Je()){return/webos/i.test(t)}function za(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dv(t=Je()){return za(t)&&!!window.navigator?.standalone}function hv(){return I_()&&document.documentMode===10}function Dd(t=Je()){return za(t)||xd(t)||Od(t)||Ld(t)||/windows phone/i.test(t)||Nd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e=[]){let n;switch(t){case"Browser":n=kd(Je());break;case"Worker":n=`${kd(Je())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${i}`}/**
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
 */class fv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function pv(t,e={}){return pt(t,"GET","/v2/passwordPolicy",st(t,e))}/**
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
 */const mv=6;class _v{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??mv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $d(this),this.idTokenSubscription=new $d(this),this.beforeStateQueue=new fv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ks(this,{idToken:e}),i=await At._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ht(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=i?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(i=a.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ys(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(Vt(this));const n=e?Me(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pv(this),n=new _v(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await uv(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Md(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Kg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function jt(t){return Me(t)}class $d{constructor(e){this.auth=e,this.observer=null,this.addObserver=L_(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vv(t){Lr=t}function Ba(t){return Lr.loadJS(t)}function yv(){return Lr.recaptchaV2Script}function bv(){return Lr.recaptchaEnterpriseScript}function wv(){return Lr.gapiScript}function Fd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=500,Iv=6e4,Js=1e12;class Cv{constructor(e){this.auth=e,this.counter=Js,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new kv(e,this.auth.name,n||{})),this.counter++,i}reset(e){const n=e||Js;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||Js;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||Js;return this._widgets.get(n)?.execute(),""}}class Tv{constructor(){this.enterprise=new Sv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Sv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class kv{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;A(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Av(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Iv)},Ev))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Av(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const Rv="recaptcha-enterprise",Or="NO_RECAPTCHA";class Ud{constructor(e){this.type=Rv,this.auth=jt(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{wd(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new bd(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;yd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Or)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Tv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&yd(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=bv();l.length!==0&&(l+=a),Ba(l).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Dr(t,e,n,i=!1,r=!1){const s=new Ud(t);let o;if(r)o=Or;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $i(t,e,n,i,r){if(r==="EMAIL_PASSWORD_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Dr(t,e,n,n==="getOobCode");return i(t,s)}else return i(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Dr(t,e,n,n==="getOobCode");return i(t,o)}else return Promise.reject(s)});else if(r==="PHONE_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await Dr(t,e,n);return i(t,s).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await Dr(t,e,n,!1,!0);return i(t,a)}return Promise.reject(o)})}else{const s=await Dr(t,e,n,!1,!0);return i(t,s)}else return Promise.reject(r+" provider is not supported.")}async function Pv(t){const e=jt(t),n=await wd(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new bd(n);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new Ud(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e){const n=Ma(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Qn(s,e??{}))return r;kt(r,"already-initialized")}return n.initialize({options:e})}function xv(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(an);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function Lv(t,e,n){const i=jt(t);A(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Wd(e),{host:o,port:a}=Ov(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){A(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),A(Qn(c,i.config.emulator)&&Qn(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Pi(o)?(zu(`${s}//${o}${l}`),qu("Auth",!0)):Dv()}function Wd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ov(t){const e=Wd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Hd(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Hd(o)}}}function Hd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function Mv(t,e){return pt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(t,e){return Sn(t,"POST","/v1/accounts:signInWithPassword",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(t,e){return Sn(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}async function Uv(t,e){return Sn(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Xs{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Mr(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Mr(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,n,"signInWithPassword",$v,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Fv(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,i,"signUpPassword",Mv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Uv(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){return Sn(t,"POST","/v1/accounts:signInWithIdp",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="http://localhost";class ei extends Xs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=n;if(!i||!r)return null;const o=new ei(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Fi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:Wv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(t,e){return pt(t,"POST","/v1/accounts:sendVerificationCode",st(t,e))}async function Hv(t,e){return Sn(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,e))}async function Vv(t,e){const n=await Sn(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,e));if(n.temporaryProof)throw Nr(t,"account-exists-with-different-credential",n);return n}const jv={USER_NOT_FOUND:"user-not-found"};async function zv(t,e){const n={...e,operation:"REAUTH"};return Sn(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,n),jv)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Xs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new $r({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new $r({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Hv(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Vv(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return zv(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new $r({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qv(t){const e=kr(Ar(t)).link,n=e?kr(Ar(e)).deep_link_id:null,i=kr(Ar(t)).deep_link_id;return(i?kr(Ar(i)).link:null)||i||n||e||t}class qa{constructor(e){const n=kr(Ar(e)),i=n.apiKey??null,r=n.oobCode??null,s=Bv(n.mode??null);A(i&&r&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=qv(e);try{return new qa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.providerId=Ui.PROVIDER_ID}static credential(e,n){return Mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=qa.parseLink(n);return A(i,"argument-error"),Mr._fromEmailAndCode(e,i.code,i.tenantId)}}Ui.PROVIDER_ID="password",Ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends jd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Fr{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com",An.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Rn.credential(n,i)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com",Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Fr{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com",Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Fr{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Nn.credential(n,i)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com",Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(t,e){return Sn(t,"POST","/v1/accounts:signUp",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await At._fromIdTokenResponse(e,i,r),o=zd(i);return new ti({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=zd(i);return new ti({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function zd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends En{constructor(e,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Zs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Zs(e,n,i,r)}}function Bd(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zs._fromErrorAndOperation(t,s,e,i):s})}async function Kv(t,e,n=!1){const i=await Oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(t,e,n=!1){const{auth:i}=t;if(ht(i.app))return Promise.reject(Vt(i));const r="reauthenticate";try{const s=await Oi(t,Bd(i,r,e,t),n);A(s.idToken,i,"internal-error");const o=Va(s.idToken);A(o,i,"internal-error");const{sub:a}=o;return A(t.uid===a,i,"user-mismatch"),ti._forOperation(t,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&kt(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qd(t,e,n=!1){if(ht(t.app))return Promise.reject(Vt(t));const i="signIn",r=await Bd(t,i,e),s=await ti._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Gd(t,e){return qd(jt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(t){const e=jt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qv(t,e,n){if(ht(t.app))return Promise.reject(Vt(t));const i=jt(t),o=await $i(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Gv,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Kd(t),l}),a=await ti._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Jv(t,e,n){return ht(t.app)?Promise.reject(Vt(t)):Gd(Me(t),Ui.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Kd(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(t,e){return pt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Me(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Oi(i,Xv(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function ey(t,e,n,i){return Me(t).onIdTokenChanged(e,n,i)}function ty(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function ny(t,e,n,i){return Me(t).onAuthStateChanged(e,n,i)}function iy(t){return Me(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){return pt(t,"POST","/v2/accounts/mfaEnrollment:start",st(t,e))}const eo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eo,"1"),this.storage.removeItem(eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=1e3,sy=10;class Jd extends Qd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);hv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,sy):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},ry)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jd.type="LOCAL";const oy=Jd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends Qd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xd.type="SESSION";const Zd=Xd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new to(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await ay(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}to.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ga("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const u=h;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return window}function cy(t){Ae().location.href=t}/**
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
 */function Ka(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function uy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dy(){return navigator?.serviceWorker?.controller||null}function hy(){return Ka()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="firebaseLocalStorageDb",fy=1,no="firebaseLocalStorage",th="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function io(t,e){return t.transaction([no],e?"readwrite":"readonly").objectStore(no)}function py(){const t=indexedDB.deleteDatabase(eh);return new Ur(t).toPromise()}function Ya(){const t=indexedDB.open(eh,fy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(no,{keyPath:th})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(no)?e(i):(i.close(),await py(),e(await Ya()))})})}async function nh(t,e,n){const i=io(t,!0).put({[th]:e,value:n});return new Ur(i).toPromise()}async function my(t,e){const n=io(t,!1).get(e),i=await new Ur(n).toPromise();return i===void 0?null:i.value}function ih(t,e){const n=io(t,!0).delete(e);return new Ur(n).toPromise()}const _y=800,gy=3;class rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ya(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>gy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ka()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=to._getInstance(hy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await uy(),!this.activeServiceWorker)return;this.sender=new ly(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ya();return await nh(e,eo,"1"),await ih(e,eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>nh(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>my(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ih(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=io(r,!1).getAll();return new Ur(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_y)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rh.type="LOCAL";const vy=rh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t,e){return pt(t,"POST","/v2/accounts/mfaSignIn:start",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=Fd("rcb"),yy=new Pr(3e4,6e4);class by{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ae().grecaptcha?.render}load(e,n=""){return A(wy(n),e,"argument-error"),this.shouldResolveImmediately(n)&&vd(Ae().grecaptcha)?Promise.resolve(Ae().grecaptcha):new Promise((i,r)=>{const s=Ae().setTimeout(()=>{r(ft(e,"network-request-failed"))},yy.get());Ae()[Qa]=()=>{Ae().clearTimeout(s),delete Ae()[Qa];const a=Ae().grecaptcha;if(!a||!vd(a)){r(ft(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const h=l(c,d);return this.counter++,h},this.hostLanguage=n,i(a)};const o=`${yv()}?${Jn({onload:Qa,render:"explicit",hl:n})}`;Ba(o).catch(()=>{clearTimeout(s),r(ft(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ae().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wy(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Ey{async load(e){return new Cv(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="recaptcha",Iy={theme:"light",type:"image"};class Cy{constructor(e,n,i={...Iy}){this.parameters=i,this.type=Wr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=jt(e),this.isInvisible=this.parameters.size==="invisible",A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof n=="string"?document.getElementById(n):n;A(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ey:new by,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=Ae()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(fd()&&!Ka(),this.auth,"internal-error"),await Ty(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await nv(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ty(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=$r._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function ky(t,e,n){if(ht(t.app))return Promise.reject(Vt(t));const i=jt(t),r=await Ay(i,e,Me(n));return new Sy(r,s=>Gd(i,s))}async function Ay(t,e,n){if(!t._getRecaptchaConfig())try{await Pv(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const r=i.session;if("phoneNumber"in i){A(r.type==="enroll",t,"internal-error");const s={idToken:r.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await $i(t,s,"mfaSmsEnrollment",async(c,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Or){A(n?.type===Wr,c,"argument-error");const h=await Ja(c,d,n);return Yd(c,h)}return Yd(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{A(r.type==="signin",t,"internal-error");const s=i.multiFactorHint?.uid||i.multiFactorUid;A(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:r.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await $i(t,o,"mfaSmsSignIn",async(d,h)=>{if(h.phoneSignInInfo.captchaResponse===Or){A(n?.type===Wr,d,"argument-error");const u=await Ja(d,h,n);return sh(d,u)}return sh(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const r={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await $i(t,r,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===Or){A(n?.type===Wr,l,"argument-error");const d=await Ja(l,c,n);return Vd(l,d)}return Vd(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{n?._reset()}}async function Ja(t,e,n){A(n.type===Wr,t,"argument-error");const i=await n.verify();A(typeof i=="string",t,"argument-error");const r={...e};if("phoneEnrollmentInfo"in r){const s=r.phoneEnrollmentInfo.phoneNumber,o=r.phoneEnrollmentInfo.captchaResponse,a=r.phoneEnrollmentInfo.clientType,l=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:l}}),r}else if("phoneSignInInfo"in r){const s=r.phoneSignInInfo.captchaResponse,o=r.phoneSignInInfo.clientType,a=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:s,clientType:o,recaptchaVersion:a}}),r}else return Object.assign(r,{recaptchaToken:i}),r}/**
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
 */function Ry(t,e){return e?an(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Xs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Py(t){return qd(t.auth,new Xa(t),t.bypassAuthState)}function Ny(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Yv(n,new Xa(t),t.bypassAuthState)}async function xy(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Kv(n,new Xa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Py;case"linkViaPopup":case"linkViaRedirect":return xy;case"reauthViaPopup":case"reauthViaRedirect":return Ny;default:kt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Pr(2e3,1e4);class Wi extends oh{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ly.get())};e()}}Wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="pendingRedirect",ro=new Map;class Dy extends oh{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const i=await My(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function My(t,e){const n=Uy(e),i=Fy(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function $y(t,e){ro.set(t._key(),e)}function Fy(t){return an(t._redirectPersistence)}function Uy(t){return Qs(Oy,t.config.apiKey,t.name)}async function Wy(t,e,n=!1){if(ht(t.app))return Promise.reject(Vt(t));const i=jt(t),r=Ry(i,e),o=await new Dy(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=600*1e3;class Vy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!lh(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hy&&this.cachedEventUids.clear(),this.cachedEventUids.has(ah(e))}saveEventToCache(e){this.cachedEventUids.add(ah(e)),this.lastProcessedEventTime=Date.now()}}function ah(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lh({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function jy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(t,e={}){return pt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qy=/^https?/;async function Gy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zy(t);for(const n of e)try{if(Ky(n))return}catch{}kt(t,"unauthorized-domain")}function Ky(t){const e=Ua(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!qy.test(n))return!1;if(By.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Yy=new Pr(3e4,6e4);function ch(){const t=Ae().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qy(t){return new Promise((e,n)=>{function i(){ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ch(),n(ft(t,"network-request-failed"))},timeout:Yy.get()})}if(Ae().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ae().gapi?.load)i();else{const r=Fd("iframefcb");return Ae()[r]=()=>{gapi.load?i():n(ft(t,"network-request-failed"))},Ba(`${wv()}?onload=${r}`).catch(s=>n(s))}}).catch(e=>{throw so=null,e})}let so=null;function Jy(t){return so=so||Qy(t),so}/**
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
 */const Xy=new Pr(5e3,15e3),Zy="__/auth/iframe",eb="emulator/auth/iframe",tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ib(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wa(e,eb):`https://${t.config.authDomain}/${Zy}`,i={apiKey:e.apiKey,appName:t.name,v:Li},r=nb.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Jn(i).slice(1)}`}async function rb(t){const e=await Jy(t),n=Ae().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:ib(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tb,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=ft(t,"network-request-failed"),a=Ae().setTimeout(()=>{s(o)},Xy.get());function l(){Ae().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const sb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ob=500,ab=600,lb="_blank",cb="http://localhost";class uh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ub(t,e,n,i=ob,r=ab){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...sb,width:i.toString(),height:r.toString(),top:s,left:o},c=Je().toLowerCase();n&&(a=Pd(c)?lb:n),Ad(c)&&(e=e||cb,l.scrollbars="yes");const d=Object.entries(l).reduce((u,[f,p])=>`${u}${f}=${p},`,"");if(dv(c)&&a!=="_self")return db(e||"",a),new uh(null);const h=window.open(e||"",a,d);A(h,t,"popup-blocked");try{h.focus()}catch{}return new uh(h)}function db(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const hb="__/auth/handler",fb="emulator/auth/handler",pb=encodeURIComponent("fac");async function dh(t,e,n,i,r,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Li,eventId:r};if(e instanceof jd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ca(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Fr){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${pb}=${encodeURIComponent(l)}`:"";return`${mb(t)}?${Jn(a).slice(1)}${c}`}function mb({config:t}){return t.emulator?Wa(t,fb):`https://${t.authDomain}/${hb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="webStorageSupport";class _b{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zd,this._completeRedirectFn=Wy,this._overrideRedirectResult=$y}async _openPopup(e,n,i,r){on(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await dh(e,n,i,Ua(),r);return ub(e,s,Ga())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await dh(e,n,i,Ua(),r);return cy(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(on(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await rb(e),i=new Vy(e);return n.register("authEvent",r=>(A(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Za,{type:Za},r=>{const s=r?.[0]?.[Za];s!==void 0&&n(!!s),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dd()||Rd()||za()}}const gb=_b;var hh="@firebase/auth",fh="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bb(t){xi(new Xn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Md(t)},c=new gv(i,r,s,l);return xv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),xi(new Xn("auth-internal",e=>{const n=jt(e.getProvider("auth").getImmediate());return(i=>new vb(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(hh,fh,yb(t)),Tn(hh,fh,"esm2020")}/**
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
 */const wb=ju("authIdTokenMaxAge")||300;let ph=null;const Eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>wb)return;const r=n?.token;ph!==r&&(ph=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ib(t=rd()){const e=Ma(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nv(t,{popupRedirectResolver:gb,persistence:[vy,oy,Zd]}),i=ju("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=Eb(s.toString());ty(n,o,()=>o(n.currentUser)),ey(n,a=>o(a))}}const r=Hu("auth");return r&&Lv(n,`http://${r}`),n}function Cb(){return document.getElementsByTagName("head")?.[0]??document}vv({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=ft("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Cb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),bb("Browser");const mh="@firebase/database",_h="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gh="";function Tb(t){gh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Sr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Sb(e)}}catch{}return new kb},ni=vh("localStorage"),Ab=vh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Sa("@firebase/database"),Rb=(function(){let t=1;return function(){return t++}})(),yh=function(t){const e=M_(t),n=new x_;n.update(e);const i=n.digest();return wa.encodeByteArray(i)},Hr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Hr.apply(null,i):typeof i=="object"?e+=Ne(i):e+=i,e+=" "}return e};let Vr=null,bh=!0;const Pb=function(t,e){C(!0,"Can't turn on custom loggers persistently."),Hi.logLevel=Z.VERBOSE,Vr=Hi.log.bind(Hi)},He=function(...t){if(bh===!0&&(bh=!1,Vr===null&&Ab.get("logging_enabled")===!0&&Pb()),Vr){const e=Hr.apply(null,t);Vr(e)}},jr=function(t){return function(...e){He(t,...e)}},el=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hr(...t);Hi.error(e)},ln=function(...t){const e=`FIREBASE FATAL ERROR: ${Hr(...t)}`;throw Hi.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+Hr(...t);Hi.warn(e)},Nb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vi="[MIN_NAME]",ii="[MAX_NAME]",ri=function(t,e){if(t===e)return 0;if(t===Vi||e===ii)return-1;if(e===Vi||t===ii)return 1;{const n=Ih(t),i=Ih(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Lb=function(t,e){return t===e?0:t<e?-1:1},zr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},nl=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ne(e[i]),n+=":",n+=nl(t[e[i]]);return n+="}",n},wh=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Eh=function(t){C(!tl(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},Ob=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Db=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Mb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const $b=new RegExp("^-?(0*)\\d{1,10}$"),Fb=-2147483648,Ub=2147483647,Ih=function(t){if($b.test(t)){const e=Number(t);if(e>=Fb&&e<=Ub)return e}return null},ji=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Wb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Br=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Hb{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class oo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}oo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="5",Ch="v",Th="s",Sh="r",kh="f",Ah=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rh="ls",Ph="p",rl="ac",Nh="websocket",xh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Oh(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let i;if(e===Nh)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xh)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jb(t)&&(n.ns=t.namespace);const r=[];return Ve(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return d_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl={},ol={};function al(t){const e=t.toString();return sl[e]||(sl[e]=new zb),sl[e]}function Bb(t,e){const n=t.toString();return ol[n]||(ol[n]=e()),ol[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&ji(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="start",Gb="close",Kb="pLPCommand",Yb="pRTLPCB",Mh="id",$h="pw",Fh="ser",Qb="cb",Jb="seg",Xb="ts",Zb="d",ew="dframe",Uh=1870,Wh=30,tw=Uh-Wh,nw=25e3,iw=3e4;class zi{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jr(e),this.stats_=al(n),this.urlFn=l=>(this.appCheckToken&&(l[rl]=this.appCheckToken),Oh(n,xh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iw)),xb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ll((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dh)this.id=a,this.password=l;else if(o===Gb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Dh]="t",i[Fh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Qb]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ch]=il,this.transportSessionId&&(i[Th]=this.transportSessionId),this.lastSessionId&&(i[Rh]=this.lastSessionId),this.applicationId&&(i[Ph]=this.applicationId),this.appCheckToken&&(i[rl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ah.test(location.hostname)&&(i[Sh]=kh);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zi.forceAllow_=!0}static forceDisallow(){zi.forceDisallow_=!0}static isAvailable(){return zi.forceAllow_?!0:!zi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ob()&&!Db()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Uu(n),r=wh(i,tw);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[ew]="t",i[Mh]=e,i[$h]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ll{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Rb(),window[Kb+this.uniqueCallbackIdentifier]=e,window[Yb+this.uniqueCallbackIdentifier]=n,this.myIFrame=ll.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mh]=this.myID,e[$h]=this.myPW,e[Fh]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wh+i.length<=Uh;){const o=this.pendingSegs.shift();i=i+"&"+Jb+r+"="+o.seg+"&"+Xb+r+"="+o.ts+"&"+Zb+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(nw)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=16384,sw=45e3;let ao=null;typeof MozWebSocket<"u"?ao=MozWebSocket:typeof WebSocket<"u"&&(ao=WebSocket);class Rt{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jr(this.connId),this.stats_=al(n),this.connURL=Rt.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Ch]=il,typeof location<"u"&&location.hostname&&Ah.test(location.hostname)&&(o[Sh]=kh),n&&(o[Th]=n),i&&(o[Rh]=i),r&&(o[rl]=r),s&&(o[Ph]=s),Oh(e,Nh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let i;C_(),this.mySock=new ao(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ao!==null&&!Rt.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Sr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=wh(n,rw);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2,Rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{static get ALL_TRANSPORTS(){return[zi,Rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Rt&&Rt.isAvailable();let i=n&&!Rt.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Rt];else{const r=this.transports_=[];for(const s of qr.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);qr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=6e4,aw=5e3,lw=10*1024,cw=100*1024,cl="t",Hh="d",uw="s",Vh="r",dw="e",jh="o",zh="a",Bh="n",qh="p",hw="h";class fw{constructor(e,n,i,r,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jr("c:"+this.id+":"),this.transportManager_=new qr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Br(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cl in e){const n=e[cl];n===zh?this.upgradeIfSecondaryHealthy_():n===Vh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zr("t",e),i=zr("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zr("t",e),i=zr("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zr(cl,e);if(Hh in e){const i=e[Hh];if(n===hw){const r={...i};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Bh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uw?this.onConnectionShutdown_(i):n===Vh?this.onReset_(i):n===dw?el("Server Error: "+i):n===jh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):el("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),il!==i&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Br(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ow))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Br(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(aw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends Kh{static getInstance(){return new lo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ia()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=32,Qh=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ee("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xn(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function ul(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Gr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function ve(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ee)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ee(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Ze(t,e){const n=V(t),i=V(e);if(n===null)return e;if(n===i)return Ze(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function mw(t,e){const n=Gr(t,0),i=Gr(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=ri(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function dl(t,e){if(xn(t)!==xn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function wt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(xn(t)>xn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class _w{constructor(e,n){this.errorPrefix_=n,this.parts_=Gr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=zs(this.parts_[i]);Xh(this)}}function gw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zs(e),Xh(t)}function vw(t){const e=t.parts_.pop();t.byteLength_-=zs(e),t.parts_.length>0&&(t.byteLength_-=1)}function Xh(t){if(t.byteLength_>Qh)throw new Error(t.errorPrefix_+"has a key path longer than "+Qh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Yh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yh+") or object contains a cycle "+si(t))}function si(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Kh{static getInstance(){return new hl}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=1e3,yw=300*1e3,Zh=30*1e3,bw=1.3,ww=3e4,Ew="server_kill",ef=3;class cn extends Gh{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=cn.nextPersistentConnectionId_++,this.log_=jr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Kr,this.maxReconnectDelay_=yw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&lo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Ne(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Ir,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;cn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const i=Ni(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||N_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=P_(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):el("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Kr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Kr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ww&&(this.reconnectDelay_=Kr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+cn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new fw(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Xe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ew)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Xe(h),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ca(this.interruptReasons_)&&(this.reconnectDelay_=Kr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>nl(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ee(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ef&&(this.reconnectDelay_=Zh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ef&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gh.replace(/\./g,"-")]=1,Ia()?e["framework.cordova"]=1:Gu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=lo.getInstance().currentlyOnline();return Ca(this.interruptReasons_)&&e}}cn.nextPersistentConnectionId_=0,cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class co{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new j(Vi,e),r=new j(Vi,n);return this.compare(i,r)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo;class tf extends co{static get __EMPTY_NODE(){return uo}static set __EMPTY_NODE(e){uo=e}compare(e,n){return ri(e.name,n.name)}isDefinedOn(e){throw Ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(ii,uo)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,uo)}toString(){return".key"}}const Bi=new tf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??$e.RED,this.left=r??ot.EMPTY_NODE,this.right=s??ot.EMPTY_NODE}copy(e,n,i,r,s){return new $e(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0,$e.BLACK=!1;class Iw{copy(e,n,i,r,s){return this}insert(e,n,i){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ot{constructor(e,n=ot.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ot(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ho(this.root_,null,this.comparator_,!0,e)}}ot.EMPTY_NODE=new Iw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t,e){return ri(t.name,e.name)}function fl(t,e){return ri(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;function Tw(t){pl=t}const nf=function(t){return typeof t=="number"?"number:"+Eh(t):"string:"+t},rf=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else C(t===pl||t.isEmpty(),"priority of unexpected type.");C(t===pl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf;class Fe{static set __childrenNodeConstructor(e){sf=e}static get __childrenNodeConstructor(){return sf}constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:V(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=V(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(C(i!==".priority"||xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Eh(this.value_):e+=this.value_,this.lazyHash_=yh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Fe.VALUE_TYPE_ORDER.indexOf(n),s=Fe.VALUE_TYPE_ORDER.indexOf(i);return C(r>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of,af;function Sw(t){of=t}function kw(t){af=t}class Aw extends co{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?ri(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(ii,new Fe("[PRIORITY-POST]",af))}makePost(e,n){const i=of(e);return new j(n,new Fe("[PRIORITY-POST]",i))}toString(){return".priority"}}const ye=new Aw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=Math.log(2);class Pw{constructor(e){const n=s=>parseInt(Math.log(s)/Rw,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fo=function(t,e,n,i){t.sort(e);const r=function(l,c){const d=c-l;let h,u;if(d===0)return null;if(d===1)return h=t[l],u=n?n(h):h,new $e(u,h.node,$e.BLACK,null,null);{const f=parseInt(d/2,10)+l,p=r(l,f),g=r(f+1,c);return h=t[f],u=n?n(h):h,new $e(u,h.node,$e.BLACK,p,g)}},s=function(l){let c=null,d=null,h=t.length;const u=function(p,g){const E=h-p,S=h;h-=p;const T=r(E+1,S),k=t[E],N=n?n(k):k;f(new $e(N,k.node,g,null,T))},f=function(p){c?(c.left=p,c=p):(d=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),E=Math.pow(2,l.count-(p+1));g?u(E,$e.BLACK):(u(E,$e.BLACK),u(E,$e.RED))}return d},o=new Pw(t.length),a=s(o);return new ot(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;const qi={};class un{static get Default(){return C(qi&&ye,"ChildrenNode.ts has not been loaded"),ml=ml||new un({".priority":qi},{".priority":ye}),ml}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ot?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Bi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=fo(i,e.getCompare()):a=qi;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new un(d,c)}addToIndexes(e,n){const i=Vs(this.indexes_,(r,s)=>{const o=Ni(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),r===qi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fo(a,o.getCompare())}else return qi;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new un(i,this.indexSet_)}removeFromIndexes(e,n){const i=Vs(this.indexes_,r=>{if(r===qi)return r;{const s=n.get(e.name);return s?r.remove(new j(e.name,s)):r}});return new un(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr;class ${static get EMPTY_NODE(){return Yr||(Yr=new $(new ot(fl),null,un.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&rf(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Yr}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Yr:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new j(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Yr:this.priorityNode_;return new $(r,o,s)}}updateChild(e,n){const i=V(e);if(i===null)return n;{C(V(e)!==".priority"||xn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(le(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ye,(o,a)=>{n[o]=a.val(e),i++,s&&$.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nf(this.getPriority().val())+":"),this.forEachChild(ye,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":yh(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,j.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qr?-1:0}withIndex(e){if(e===Bi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ye),r=n.getIterator(ye);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bi?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Nw extends ${constructor(){super(new ot(fl),$.EMPTY_NODE,un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Qr=new Nw;Object.defineProperties(j,{MIN:{value:new j(Vi,$.EMPTY_NODE)},MAX:{value:new j(ii,Qr)}}),tf.__EMPTY_NODE=$.EMPTY_NODE,Fe.__childrenNodeConstructor=$,Tw(Qr),kw(Qr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=!0;function xe(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,xe(e))}if(!(t instanceof Array)&&xw){const n=[];let i=!1;if(Ve(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=xe(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return $.EMPTY_NODE;const s=fo(n,Cw,o=>o.name,fl);if(i){const o=fo(n,ye.getCompare());return new $(s,xe(e),new un({".priority":o},{".priority":ye}))}else return new $(s,xe(e),un.Default)}else{let n=$.EMPTY_NODE;return Ve(t,(i,r)=>{if(Ht(t,i)&&i.substring(0,1)!=="."){const s=xe(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(xe(e))}}Sw(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw extends co{constructor(e){super(),this.indexPath_=e,C(!z(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?ri(e.name,n.name):s}makePost(e,n){const i=xe(e),r=$.EMPTY_NODE.updateChild(this.indexPath_,i);return new j(n,r)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Qr);return new j(ii,e)}toString(){return Gr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow extends co{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ri(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const i=xe(e);return new j(n,i)}toString(){return".value"}}const Dw=new Ow;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){return{type:"value",snapshotNode:t}}function Gi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Jr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Mw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Jr(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gi(n,i)):o.trackChildChange(Xr(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ye,(r,s)=>{n.hasChild(r)||i.trackChildChange(Jr(r,s))}),n.isLeafNode()||n.forEachChild(ye,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Xr(r,s,o))}else i.trackChildChange(Gi(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.indexedFilter_=new _l(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zr.getStartPost_(e),this.endPost_=Zr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,o){return this.matches(new j(n,i))||(i=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=$.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority($.EMPTY_NODE);const s=this;return n.forEachChild(ye,(o,a)=>{s.matches(new j(o,a))||(r=r.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Zr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new j(n,i))||(i=$.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=$.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority($.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,f)=>h(f,u)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new j(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let u=r.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,l);if(d&&!i.isEmpty()&&f>=0)return s?.trackChildChange(Xr(n,i,h)),a.updateImmediateChild(n,i);{s?.trackChildChange(Jr(n,h));const g=a.updateImmediateChild(n,$.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(s?.trackChildChange(Gi(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return i.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Jr(c.name,c.node)),s.trackChildChange(Gi(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vi}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ii}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new gl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Fw(t){return t.loadsAllData()?new _l(t.getIndex()):t.hasLimit()?new $w(t):new Zr(t)}function cf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===Dw?n="$value":t.index_===Bi?n="$key":(C(t.index_ instanceof Lw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ne(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ne(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ne(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ne(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function uf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Gh{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=jr("p:rest:"),this.listens_={}}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=po.getListenId_(e,i),a={};this.listens_[o]=a;const l=cf(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),Ni(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",r(u,null)}})}unlisten(e,n){const i=po.getListenId_(e,n);delete this.listens_[i]}get(e){const n=cf(e._queryParams),i=e._path.toString(),r=new Ir;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Sr(a.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(){return{value:null,children:new Map}}function df(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=V(e);t.children.has(i)||t.children.set(i,mo());const r=t.children.get(i);e=le(e),df(r,e,n)}}function vl(t,e,n){t.value!==null?n(e,t.value):Ww(t,(i,r)=>{const s=new ee(e.toString()+"/"+i);vl(r,s,n)})}function Ww(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ve(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=10*1e3,Vw=30*1e3,jw=300*1e3;class zw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Hw(e);const i=hf+(Vw-hf)*Math.random();Br(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ve(e,(r,s)=>{s>0&&Ht(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Br(this.reportStats_.bind(this),Math.floor(Math.random()*2*jw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function yl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Pt.ACK_USER_WRITE,this.source=yl()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new _o(J(),n,this.revert)}}else return C(V(this.path)===e,"operationForChild called for unrelated child."),new _o(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.source=e,this.path=n,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new es(this.source,J()):new es(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Pt.OVERWRITE}operationForChild(e){return z(this.path)?new oi(this.source,J(),this.snap.getImmediateChild(e)):new oi(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Pt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new oi(this.source,J(),n.value):new Ki(this.source,J(),n)}else return C(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ki(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qw(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Mw(o.childName,o.snapshotNode))}),ts(t,r,"child_removed",e,i,n),ts(t,r,"child_added",e,i,n),ts(t,r,"child_moved",s,i,n),ts(t,r,"child_changed",e,i,n),ts(t,r,"value",e,i,n),r}function ts(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Kw(t,a,l)),o.forEach(a=>{const l=Gw(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Gw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Kw(t,e,n){if(e.childName==null||n.childName==null)throw Ri("Should only compare child_ events.");const i=new j(e.childName,e.snapshotNode),r=new j(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e){return{eventCache:t,serverCache:e}}function ns(t,e,n,i){return go(new Ln(e,n,i),t.serverCache)}function ff(t,e,n,i){return go(t.eventCache,new Ln(e,n,i))}function vo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ai(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El;const Yw=()=>(El||(El=new ot(Lb)),El);class ce{static fromObject(e){let n=new ce(null);return Ve(e,(i,r)=>{n=n.set(new ee(i),r)}),n}constructor(e,n=Yw()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(z(e))return null;{const i=V(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:ve(new ee(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=V(e),i=this.children.get(n);return i!==null?i.subtree(le(e)):new ce(null)}}set(e,n){if(z(e))return new ce(n,this.children);{const i=V(e),s=(this.children.get(i)||new ce(null)).set(le(e),n),o=this.children.insert(i,s);return new ce(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=V(e),i=this.children.get(n);if(i){const r=i.remove(le(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=V(e),i=this.children.get(n);return i?i.get(le(e)):null}}setTree(e,n){if(z(e))return n;{const i=V(e),s=(this.children.get(i)||new ce(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ce(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ve(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(z(e))return null;{const s=V(e),o=this.children.get(s);return o?o.findOnPath_(le(e),ve(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,i){if(z(e))return this;{this.value&&i(n,this.value);const r=V(e),s=this.children.get(r);return s?s.foreachOnPath_(le(e),ve(n,r),i):new ce(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(ve(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.writeTree_=e}static empty(){return new Nt(new ce(null))}}function is(t,e,n){if(z(e))return new Nt(new ce(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Ze(r,e);return s=s.updateChild(o,n),new Nt(t.writeTree_.set(r,s))}else{const r=new ce(n),s=t.writeTree_.setTree(e,r);return new Nt(s)}}}function Il(t,e,n){let i=t;return Ve(n,(r,s)=>{i=is(i,ve(e,r),s)}),i}function pf(t,e){if(z(e))return Nt.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new Nt(n)}}function Cl(t,e){return li(t,e)!=null}function li(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ze(n.path,e)):null}function mf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(i,r)=>{e.push(new j(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new j(i,r.value))}),e}function On(t,e){if(z(e))return t;{const n=li(t,e);return n!=null?new Nt(new ce(n)):new Nt(t.writeTree_.subtree(e))}}function Tl(t){return t.writeTree_.isEmpty()}function Yi(t,e){return _f(J(),t.writeTree_,e)}function _f(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=_f(ve(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ve(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e){return wf(e,t)}function Qw(t,e,n,i,r){C(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=is(t.visibleWrites,e,n)),t.lastWriteId=i}function Jw(t,e,n,i){C(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Il(t.visibleWrites,e,n),t.lastWriteId=i}function Xw(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Zw(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&e0(a,i.path)?r=!1:wt(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return t0(t),!0;if(i.snap)t.visibleWrites=pf(t.visibleWrites,i.path);else{const a=i.children;Ve(a,l=>{t.visibleWrites=pf(t.visibleWrites,ve(i.path,l))})}return!0}else return!1}function e0(t,e){if(t.snap)return wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wt(ve(t.path,n),e))return!0;return!1}function t0(t){t.visibleWrites=gf(t.allWrites,n0,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function n0(t){return t.visible}function gf(t,e,n){let i=Nt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)wt(n,o)?(a=Ze(n,o),i=is(i,a,s.snap)):wt(o,n)&&(a=Ze(o,n),i=is(i,J(),s.snap.getChild(a)));else if(s.children){if(wt(n,o))a=Ze(n,o),i=Il(i,a,s.children);else if(wt(o,n))if(a=Ze(o,n),z(a))i=Il(i,J(),s.children);else{const l=Ni(s.children,V(a));if(l){const c=l.getChild(le(a));i=is(i,J(),c)}}}else throw Ri("WriteRecord should have .snap or .children")}}return i}function vf(t,e,n,i,r){if(!i&&!r){const s=li(t.visibleWrites,e);if(s!=null)return s;{const o=On(t.visibleWrites,e);if(Tl(o))return n;if(n==null&&!Cl(o,J()))return null;{const a=n||$.EMPTY_NODE;return Yi(o,a)}}}else{const s=On(t.visibleWrites,e);if(!r&&Tl(s))return n;if(!r&&n==null&&!Cl(s,J()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(wt(c.path,e)||wt(e,c.path))},a=gf(t.allWrites,o,e),l=n||$.EMPTY_NODE;return Yi(a,l)}}}function i0(t,e,n){let i=$.EMPTY_NODE;const r=li(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ye,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=On(t.visibleWrites,e);return n.forEachChild(ye,(o,a)=>{const l=Yi(On(s,new ee(o)),a);i=i.updateImmediateChild(o,l)}),mf(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=On(t.visibleWrites,e);return mf(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function r0(t,e,n,i,r){C(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(Cl(t.visibleWrites,s))return null;{const o=On(t.visibleWrites,s);return Tl(o)?r.getChild(n):Yi(o,r.getChild(n))}}function s0(t,e,n,i){const r=ve(e,n),s=li(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=On(t.visibleWrites,r);return Yi(o,i.getNode().getImmediateChild(n))}else return null}function o0(t,e){return li(t.visibleWrites,e)}function a0(t,e,n,i,r,s,o){let a;const l=On(t.visibleWrites,e),c=li(l,J());if(c!=null)a=c;else if(n!=null)a=Yi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=u.getNext();for(;f&&d.length<r;)h(f,i)!==0&&d.push(f),f=u.getNext();return d}else return[]}function l0(){return{visibleWrites:Nt.empty(),allWrites:[],lastWriteId:-1}}function bo(t,e,n,i){return vf(t.writeTree,t.treePath,e,n,i)}function Sl(t,e){return i0(t.writeTree,t.treePath,e)}function yf(t,e,n,i){return r0(t.writeTree,t.treePath,e,n,i)}function wo(t,e){return o0(t.writeTree,ve(t.treePath,e))}function c0(t,e,n,i,r,s){return a0(t.writeTree,t.treePath,e,n,i,r,s)}function kl(t,e,n){return s0(t.writeTree,t.treePath,e,n)}function bf(t,e){return wf(ve(t.treePath,e),t.writeTree)}function wf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Xr(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,Jr(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Gi(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Xr(i,e.snapshotNode,r.oldSnap));else throw Ri("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ef=new d0;class Al{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kl(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ai(this.viewCache_),s=c0(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t){return{filter:t}}function f0(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function p0(t,e,n,i,r){const s=new u0;let o,a;if(n.type===Pt.OVERWRITE){const c=n;c.source.fromUser?o=Rl(t,e,c.path,c.snap,i,r,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=Eo(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Pt.MERGE){const c=n;c.source.fromUser?o=_0(t,e,c.path,c.children,i,r,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Pl(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Pt.ACK_USER_WRITE){const c=n;c.revert?o=y0(t,e,c.path,i,r,s):o=g0(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Pt.LISTEN_COMPLETE)o=v0(t,e,n.path,i,s);else throw Ri("Unknown operation type: "+n.type);const l=s.getChanges();return m0(e,o,l),{viewCache:o,changes:l}}function m0(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=vo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(lf(vo(e)))}}function If(t,e,n,i,r,s){const o=e.eventCache;if(wo(i,n)!=null)return e;{let a,l;if(z(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ai(e),d=c instanceof $?c:$.EMPTY_NODE,h=Sl(i,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=bo(i,ai(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=V(n);if(c===".priority"){C(xn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=yf(i,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=le(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=yf(i,n,o.getNode(),l);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=kl(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,d,r,s):a=o.getNode()}}return ns(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Eo(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=d.updateFullNode(l.getNode(),f,null)}else{const f=V(n);if(!l.isCompleteForPath(n)&&xn(n)>1)return e;const p=le(n),E=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=d.updatePriority(l.getNode(),E):c=d.updateChild(l.getNode(),f,E,p,Ef,null)}const h=ff(e,c,l.isFullyInitialized()||z(n),d.filtersNodes()),u=new Al(r,h,s);return If(t,h,n,r,u,a)}function Rl(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const d=new Al(r,e,s);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ns(e,c,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ns(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=le(n),f=a.getNode().getImmediateChild(h);let p;if(z(u))p=i;else{const g=d.getCompleteChild(h);g!=null?ul(u)===".priority"&&g.getChild(Jh(u)).isEmpty()?p=g:p=g.updateChild(u,i):p=$.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,u,d,o);l=ns(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Cf(t,e){return t.eventCache.isCompleteForChild(e)}function _0(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const d=ve(n,l);Cf(e,V(d))&&(a=Rl(t,a,d,c,r,s,o))}),i.foreach((l,c)=>{const d=ve(n,l);Cf(e,V(d))||(a=Rl(t,a,d,c,r,s,o))}),a}function Tf(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Pl(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;z(n)?c=i:c=new ce(null).setTree(n,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Tf(t,f,u);l=Eo(t,l,new ee(h),p,r,s,o,a)}}),c.children.inorderTraversal((h,u)=>{const f=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=Tf(t,p,u);l=Eo(t,l,new ee(h),g,r,s,o,a)}}),l}function g0(t,e,n,i,r,s,o){if(wo(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Eo(t,e,n,l.getNode().getChild(n),r,s,a,o);if(z(n)){let c=new ce(null);return l.getNode().forEachChild(Bi,(d,h)=>{c=c.set(new ee(d),h)}),Pl(t,e,n,c,r,s,a,o)}else return e}else{let c=new ce(null);return i.foreach((d,h)=>{const u=ve(n,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),Pl(t,e,n,c,r,s,a,o)}}function v0(t,e,n,i,r){const s=e.serverCache,o=ff(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return If(t,o,n,i,Ef,r)}function y0(t,e,n,i,r,s){let o;if(wo(i,n)!=null)return e;{const a=new Al(i,e,r),l=e.eventCache.getNode();let c;if(z(n)||V(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=bo(i,ai(e));else{const h=e.serverCache.getNode();C(h instanceof $,"serverChildren would be complete if leaf node"),d=Sl(i,h)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=V(n);let h=kl(i,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=t.filter.updateChild(l,d,h,le(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,$.EMPTY_NODE,le(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bo(i,ai(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||wo(i,J())!=null,ns(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new _l(i.getIndex()),s=Fw(i);this.processor_=h0(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode($.EMPTY_NODE,a.getNode(),null),d=new Ln(l,o.isFullyInitialized(),r.filtersNodes()),h=new Ln(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=go(h,d),this.eventGenerator_=new Bw(this.query_)}get query(){return this.query_}}function w0(t){return t.viewCache_.serverCache.getNode()}function E0(t){return vo(t.viewCache_)}function I0(t,e){const n=ai(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Sf(t){return t.eventRegistrations_.length===0}function C0(t,e){t.eventRegistrations_.push(e)}function kf(t,e,n){const i=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Af(t,e,n,i){e.type===Pt.MERGE&&e.source.queryId!==null&&(C(ai(t.viewCache_),"We should always have a full cache before handling merges"),C(vo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=p0(t.processor_,r,e,n,i);return f0(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Rf(t,s.changes,s.viewCache.eventCache.getNode(),null)}function T0(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(s,o)=>{i.push(Gi(s,o))}),n.isFullyInitialized()&&i.push(lf(n.getNode())),Rf(t,i,n.getNode(),e)}function Rf(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return qw(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;class Pf{constructor(){this.views=new Map}}function S0(t){C(!Io,"__referenceConstructor has already been defined"),Io=t}function k0(){return C(Io,"Reference.ts has not been loaded"),Io}function A0(t){return t.views.size===0}function Nl(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return C(s!=null,"SyncTree gave us an op for an invalid query."),Af(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Af(o,e,n,i));return s}}function Nf(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=bo(n,r?i:null),l=!1;a?l=!0:i instanceof $?(a=Sl(n,i),l=!1):(a=$.EMPTY_NODE,l=!1);const c=go(new Ln(a,l,!1),new Ln(i,r,!1));return new b0(e,c)}return o}function R0(t,e,n,i,r,s){const o=Nf(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),C0(o,n),T0(o,n)}function P0(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Mn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(kf(c,n,i)),Sf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(kf(l,n,i)),Sf(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Mn(t)&&s.push(new(k0())(e._repo,e._path)),{removed:s,events:o}}function xf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Dn(t,e){let n=null;for(const i of t.views.values())n=n||I0(i,e);return n}function Lf(t,e){if(e._queryParams.loadsAllData())return Co(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Of(t,e){return Lf(t,e)!=null}function Mn(t){return Co(t)!=null}function Co(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To;function N0(t){C(!To,"__referenceConstructor has already been defined"),To=t}function x0(){return C(To,"Reference.ts has not been loaded"),To}let L0=1;class Df{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=l0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mf(t,e,n,i,r){return Qw(t.pendingWriteTree_,e,n,i,r),r?Qi(t,new oi(yl(),e,n)):[]}function O0(t,e,n,i){Jw(t.pendingWriteTree_,e,n,i);const r=ce.fromObject(n);return Qi(t,new Ki(yl(),e,r))}function $n(t,e,n=!1){const i=Xw(t.pendingWriteTree_,e);if(Zw(t.pendingWriteTree_,e)){let s=new ce(null);return i.snap!=null?s=s.set(J(),!0):Ve(i.children,o=>{s=s.set(new ee(o),!0)}),Qi(t,new _o(i.path,s,n))}else return[]}function rs(t,e,n){return Qi(t,new oi(bl(),e,n))}function D0(t,e,n){const i=ce.fromObject(n);return Qi(t,new Ki(bl(),e,i))}function M0(t,e){return Qi(t,new es(bl(),e))}function $0(t,e,n){const i=Ol(t,n);if(i){const r=Dl(i),s=r.path,o=r.queryId,a=Ze(s,e),l=new es(wl(o),a);return Ml(t,s,l)}else return[]}function So(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Of(o,e))){const l=P0(o,e,n,i);A0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(u,f)=>Mn(f));if(d&&!h){const u=t.syncPointTree_.subtree(s);if(!u.isEmpty()){const f=W0(u);for(let p=0;p<f.length;++p){const g=f[p],E=g.query,S=Wf(t,g);t.listenProvider_.startListening(os(E),ss(t,E),S.hashFn,S.onComplete)}}}!h&&c.length>0&&!i&&(d?t.listenProvider_.stopListening(os(e),null):c.forEach(u=>{const f=t.queryToTagMap.get(ko(u));t.listenProvider_.stopListening(os(u),f)}))}H0(t,c)}return a}function $f(t,e,n,i){const r=Ol(t,i);if(r!=null){const s=Dl(r),o=s.path,a=s.queryId,l=Ze(o,e),c=new oi(wl(a),l,n);return Ml(t,o,c)}else return[]}function F0(t,e,n,i){const r=Ol(t,i);if(r){const s=Dl(r),o=s.path,a=s.queryId,l=Ze(o,e),c=ce.fromObject(n),d=new Ki(wl(a),l,c);return Ml(t,o,d)}else return[]}function xl(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(u,f)=>{const p=Ze(u,r);s=s||Dn(f,p),o=o||Mn(f)});let a=t.syncPointTree_.get(r);a?(o=o||Mn(a),s=s||Dn(a,J())):(a=new Pf,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=$.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((f,p)=>{const g=Dn(p,J());g&&(s=s.updateImmediateChild(f,g))}));const c=Of(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=ko(e);C(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=V0();t.queryToTagMap.set(u,f),t.tagToQueryMap.set(f,u)}const d=yo(t.pendingWriteTree_,r);let h=R0(a,e,n,d,s,l);if(!c&&!o&&!i){const u=Lf(a,e);h=h.concat(j0(t,e,u))}return h}function Ll(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ze(o,e),c=Dn(a,l);if(c)return c});return vf(r,e,s,n,!0)}function U0(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=Ze(c,n);i=i||Dn(d,h)});let r=t.syncPointTree_.get(n);r?i=i||Dn(r,J()):(r=new Pf,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new Ln(i,!0,!1):null,a=yo(t.pendingWriteTree_,e._path),l=Nf(r,e,a,s?o.getNode():$.EMPTY_NODE,s);return E0(l)}function Qi(t,e){return Ff(e,t.syncPointTree_,null,yo(t.pendingWriteTree_,J()))}function Ff(t,e,n,i){if(z(t.path))return Uf(t,e,n,i);{const r=e.get(J());n==null&&r!=null&&(n=Dn(r,J()));let s=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=bf(i,o);s=s.concat(Ff(a,l,c,d))}return r&&(s=s.concat(Nl(r,t,i,n))),s}}function Uf(t,e,n,i){const r=e.get(J());n==null&&r!=null&&(n=Dn(r,J()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=bf(i,o),d=t.operationForChild(o);d&&(s=s.concat(Uf(d,a,l,c)))}),r&&(s=s.concat(Nl(r,t,i,n))),s}function Wf(t,e){const n=e.query,i=ss(t,n);return{hashFn:()=>(w0(e)||$.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?$0(t,n._path,i):M0(t,n._path);{const s=Mb(r,n);return So(t,n,null,s)}}}}function ss(t,e){const n=ko(e);return t.queryToTagMap.get(n)}function ko(t){return t._path.toString()+"$"+t._queryIdentifier}function Ol(t,e){return t.tagToQueryMap.get(e)}function Dl(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function Ml(t,e,n){const i=t.syncPointTree_.get(e);C(i,"Missing sync point for query tag that we're tracking");const r=yo(t.pendingWriteTree_,e);return Nl(i,n,r,null)}function W0(t){return t.fold((e,n,i)=>{if(n&&Mn(n))return[Co(n)];{let r=[];return n&&(r=xf(n)),Ve(i,(s,o)=>{r=r.concat(o)}),r}})}function os(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(x0())(t._repo,t._path):t}function H0(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=ko(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function V0(){return L0++}function j0(t,e,n){const i=e._path,r=ss(t,e),s=Wf(t,n),o=t.listenProvider_.startListening(os(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)C(!Mn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!z(c)&&d&&Mn(d))return[Co(d).query];{let u=[];return d&&(u=u.concat(xf(d).map(f=>f.query))),Ve(h,(f,p)=>{u=u.concat(p)}),u}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(os(d),ss(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $l(n)}node(){return this.node_}}class Fl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Fl(this.syncTree_,n)}node(){return Ll(this.syncTree_,this.path_)}}const z0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hf=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return B0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return q0(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},B0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},q0=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&C(!1,"Unexpected increment value: "+i);const r=e.node();if(C(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Vf=function(t,e,n,i){return Ul(e,new Fl(n,t),i)},jf=function(t,e,n){return Ul(t,new $l(e),n)};function Ul(t,e,n){const i=t.getPriority().val(),r=Hf(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Hf(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Fe(a,xe(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Fe(r))),o.forEachChild(ye,(a,l)=>{const c=Ul(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Hl(t,e){let n=e instanceof ee?e:new ee(e),i=t,r=V(n);for(;r!==null;){const s=Ni(i.node.children,r)||{children:{},childCount:0};i=new Wl(r,i,s),n=le(n),r=V(n)}return i}function Ji(t){return t.node.value}function zf(t,e){t.node.value=e,Vl(t)}function Bf(t){return t.node.childCount>0}function G0(t){return Ji(t)===void 0&&!Bf(t)}function Ao(t,e){Ve(t.node.children,(n,i)=>{e(new Wl(n,t,i))})}function qf(t,e,n,i){n&&e(t),Ao(t,r=>{qf(r,e,!0)})}function K0(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function as(t){return new ee(t.parent===null?t.name:as(t.parent)+"/"+t.name)}function Vl(t){t.parent!==null&&Y0(t.parent,t.name,t)}function Y0(t,e,n){const i=G0(n),r=Ht(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Vl(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Vl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=/[\[\].#$\/\u0000-\u001F\u007F]/,J0=/[\[\].#$\u0000-\u001F\u007F]/,jl=10*1024*1024,zl=function(t){return typeof t=="string"&&t.length!==0&&!Q0.test(t)},Gf=function(t){return typeof t=="string"&&t.length!==0&&!J0.test(t)},X0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Gf(t)},Z0=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!tl(t)||t&&typeof t=="object"&&Ht(t,".sv")},Kf=function(t,e,n,i){i&&e===void 0||Ro(js(t,"value"),e,n)},Ro=function(t,e,n){const i=n instanceof ee?new _w(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+si(i));if(typeof e=="function")throw new Error(t+"contains a function "+si(i)+" with contents = "+e.toString());if(tl(e))throw new Error(t+"contains "+e.toString()+" "+si(i));if(typeof e=="string"&&e.length>jl/3&&zs(e)>jl)throw new Error(t+"contains a string greater than "+jl+" utf8 bytes "+si(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Ve(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!zl(o)))throw new Error(t+" contains an invalid key ("+o+") "+si(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gw(i,o),Ro(t,a,i),vw(i)}),r&&s)throw new Error(t+' contains ".value" child '+si(i)+" in addition to actual children.")}},e1=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=Gr(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!zl(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(mw);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&wt(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},t1=function(t,e,n,i){const r=js(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];Ve(e,(o,a)=>{const l=new ee(o);if(Ro(r,a,ve(n,l)),ul(l)===".priority"&&!Z0(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),e1(r,s)},Yf=function(t,e,n,i){if(!Gf(n))throw new Error(js(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},n1=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yf(t,e,n)},Bl=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},i1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!X0(n))throw new Error(js(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Po(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!dl(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Qf(t,e,n){Po(t,n),Jf(t,i=>dl(i,e))}function Et(t,e,n){Po(t,n),Jf(t,i=>wt(i,e)||wt(e,i))}function Jf(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(s1(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function s1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Vr&&He("event: "+n.toString()),ji(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="repo_interrupt",a1=25;class l1{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new r1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mo(),this.transactionQueueTree_=new Wl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function c1(t,e,n){if(t.stats_=al(t.repoInfo_),t.forceRestClient_||Wb())t.server_=new po(t.repoInfo_,(i,r,s,o)=>{Zf(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ep(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new cn(t.repoInfo_,e,(i,r,s,o)=>{Zf(t,i,r,s,o)},i=>{ep(t,i)},i=>{u1(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Bb(t.repoInfo_,()=>new zw(t.stats_,t.server_)),t.infoData_=new Uw,t.infoSyncTree_=new Df({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=rs(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ql(t,"connected",!1),t.serverSyncTree_=new Df({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Et(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function Xf(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function No(t){return z0({timestamp:Xf(t)})}function Zf(t,e,n,i,r){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Vs(n,c=>xe(c));o=F0(t.serverSyncTree_,s,l,r)}else{const l=xe(n);o=$f(t.serverSyncTree_,s,l,r)}else if(i){const l=Vs(n,c=>xe(c));o=D0(t.serverSyncTree_,s,l)}else{const l=xe(n);o=rs(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Xi(t,s)),Et(t.eventQueue_,a,o)}function ep(t,e){ql(t,"connected",e),e===!1&&p1(t)}function u1(t,e){Ve(e,(n,i)=>{ql(t,n,i)})}function ql(t,e,n){const i=new ee("/.info/"+e),r=xe(n);t.infoData_.updateSnapshot(i,r);const s=rs(t.infoSyncTree_,i,r);Et(t.eventQueue_,i,s)}function Gl(t){return t.nextWriteId_++}function d1(t,e,n){const i=U0(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=xe(r).withIndex(e._queryParams.getIndex());xl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=rs(t.serverSyncTree_,e._path,s);else{const a=ss(t.serverSyncTree_,e);o=$f(t.serverSyncTree_,e._path,s,a)}return Et(t.eventQueue_,e._path,o),So(t.serverSyncTree_,e,n,null,!0),s},r=>(ls(t,"get for query "+Ne(e)+" failed: "+r),Promise.reject(new Error(r))))}function h1(t,e,n,i,r){ls(t,"set",{path:e.toString(),value:n,priority:i});const s=No(t),o=xe(n,i),a=Ll(t.serverSyncTree_,e),l=jf(o,a,s),c=Gl(t),d=Mf(t.serverSyncTree_,e,l,c,!0);Po(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(u,f)=>{const p=u==="ok";p||Xe("set at "+e+" failed: "+u);const g=$n(t.serverSyncTree_,c,!p);Et(t.eventQueue_,e,g),Yl(t,r,u,f)});const h=Jl(t,e);Xi(t,h),Et(t.eventQueue_,h,[])}function f1(t,e,n,i){ls(t,"update",{path:e.toString(),value:n});let r=!0;const s=No(t),o={};if(Ve(n,(a,l)=>{r=!1,o[a]=Vf(ve(e,a),xe(l),t.serverSyncTree_,s)}),r)He("update() called with empty data.  Don't do anything."),Yl(t,i,"ok",void 0);else{const a=Gl(t),l=O0(t.serverSyncTree_,e,o,a);Po(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||Xe("update at "+e+" failed: "+c);const u=$n(t.serverSyncTree_,a,!h),f=u.length>0?Xi(t,e):e;Et(t.eventQueue_,f,u),Yl(t,i,c,d)}),Ve(n,c=>{const d=Jl(t,ve(e,c));Xi(t,d)}),Et(t.eventQueue_,e,[])}}function p1(t){ls(t,"onDisconnectEvents");const e=No(t),n=mo();vl(t.onDisconnect_,J(),(r,s)=>{const o=Vf(r,s,t.serverSyncTree_,e);df(n,r,o)});let i=[];vl(n,J(),(r,s)=>{i=i.concat(rs(t.serverSyncTree_,r,s));const o=Jl(t,r);Xi(t,o)}),t.onDisconnect_=mo(),Et(t.eventQueue_,J(),i)}function m1(t,e,n){let i;V(e._path)===".info"?i=xl(t.infoSyncTree_,e,n):i=xl(t.serverSyncTree_,e,n),Qf(t.eventQueue_,e._path,i)}function Kl(t,e,n){let i;V(e._path)===".info"?i=So(t.infoSyncTree_,e,n):i=So(t.serverSyncTree_,e,n),Qf(t.eventQueue_,e._path,i)}function _1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(o1)}function ls(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function Yl(t,e,n,i){e&&ji(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function tp(t,e,n){return Ll(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function Ql(t,e=t.transactionQueueTree_){if(e||xo(t,e),Ji(e)){const n=ip(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&g1(t,as(e),n)}else Bf(e)&&Ao(e,n=>{Ql(t,n)})}function g1(t,e,n){const i=n.map(c=>c.currentWriteId),r=tp(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const d=n[c];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Ze(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ls(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<n.length;u++)n[u].status=2,d=d.concat($n(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&h.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();xo(t,Hl(t.transactionQueueTree_,e)),Ql(t,t.transactionQueueTree_),Et(t.eventQueue_,e,d);for(let u=0;u<h.length;u++)ji(h[u])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Xe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Xi(t,e)}},o)}function Xi(t,e){const n=np(t,e),i=as(n),r=ip(t,n);return v1(t,r,i),i}function v1(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ze(n,l.path);let d=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,r=r.concat($n(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=a1)d=!0,h="maxretry",r=r.concat($n(t.serverSyncTree_,l.currentWriteId,!0));else{const u=tp(t,l.path,o);l.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){Ro("transaction failed: Data returned ",f,l.path);let p=xe(f);typeof f=="object"&&f!=null&&Ht(f,".priority")||(p=p.updatePriority(u.getPriority()));const E=l.currentWriteId,S=No(t),T=jf(p,u,S);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=T,l.currentWriteId=Gl(t),o.splice(o.indexOf(E),1),r=r.concat(Mf(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),r=r.concat($n(t.serverSyncTree_,E,!0))}else d=!0,h="nodata",r=r.concat($n(t.serverSyncTree_,l.currentWriteId,!0))}Et(t.eventQueue_,n,r),r=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}xo(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)ji(i[a]);Ql(t,t.transactionQueueTree_)}function np(t,e){let n,i=t.transactionQueueTree_;for(n=V(e);n!==null&&Ji(i)===void 0;)i=Hl(i,n),e=le(e),n=V(e);return i}function ip(t,e){const n=[];return rp(t,e,n),n.sort((i,r)=>i.order-r.order),n}function rp(t,e,n){const i=Ji(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ao(e,r=>{rp(t,r,n)})}function xo(t,e){const n=Ji(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,zf(e,n.length>0?n:void 0)}Ao(e,i=>{xo(t,i)})}function Jl(t,e){const n=as(np(t,e)),i=Hl(t.transactionQueueTree_,e);return K0(i,r=>{Xl(t,r)}),Xl(t,i),qf(i,r=>{Xl(t,r)}),n}function Xl(t,e){const n=Ji(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat($n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?zf(e,void 0):n.length=s+1,Et(t.eventQueue_,as(e),r);for(let o=0;o<i.length;o++)ji(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function b1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const sp=function(t,e){const n=w1(t),i=n.namespace;n.domain==="firebase.com"&&ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Nb();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Lh(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ee(n.pathString)}},w1=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(r=y1(t.substring(d,h)));const u=b1(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=i}"ns"in u&&(s=u.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",E1=(function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=op.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=op.charAt(e[r]);return C(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class C1{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return z(this._path)?null:ul(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=uf(this._queryParams),n=nl(e);return n==="{}"?"default":n}get _queryObject(){return uf(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof Zl))return!1;const n=this._repo===e._repo,i=dl(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+pw(this._path)}}class dn extends Zl{constructor(e,n){super(e,n,new gl,!1)}get parent(){const e=Jh(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cs{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),i=us(this.ref,e);return new cs(this._node.getChild(n),i,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new cs(r,us(this.ref,i),ye)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zt(t,e){return t=Me(t),t._checkNotDeleted("ref"),e!==void 0?us(t._root,e):t._root}function us(t,e){return t=Me(t),V(t._path)===null?n1("child","path",e):Yf("child","path",e),new dn(t._repo,ve(t._path,e))}function T1(t,e){t=Me(t),Bl("push",t._path),Kf("push",e,t._path,!0);const n=Xf(t._repo),i=E1(n),r=us(t,i),s=us(t,i);let o;return o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function S1(t){return Bl("remove",t._path),Lo(t,null)}function Lo(t,e){t=Me(t),Bl("set",t._path),Kf("set",e,t._path,!1);const n=new Ir;return h1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ec(t,e){t1("update",e,t._path);const n=new Ir;return f1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function k1(t){t=Me(t);const e=new ap(()=>{}),n=new Oo(e);return d1(t._repo,t,n).then(i=>new cs(i,new dn(t._repo,t._path),t._queryParams.getIndex()))}class Oo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new I1("value",this,new cs(e.snapshotNode,new dn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new C1(this,e,n):null}matches(e){return e instanceof Oo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function A1(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(d,h)=>{Kl(t._repo,t,a),l(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ap(n,s||void 0),a=new Oo(o);return m1(t._repo,t,a),()=>Kl(t._repo,t,a)}function Do(t,e,n,i){return A1(t,"value",e,n,i)}function tc(t,e,n){Kl(t._repo,t,null)}S0(dn),N0(dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1="FIREBASE_DATABASE_EMULATOR_HOST",nc={};let P1=!1;function N1(t,e,n,i){const r=e.lastIndexOf(":"),s=e.substring(0,r),o=Pi(s);t.repoInfo_=new Lh(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function x1(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=sp(s,r),a=o.repoInfo,l;typeof process<"u"&&process.env&&(l=process.env[R1]),l?(s=`http://${l}?ns=${a.namespace}`,o=sp(s,r),a=o.repoInfo):o.repoInfo.secure;const c=new Vb(t.name,t.options,e);i1("Invalid Firebase Database URL",o),z(o.path)||ln("Database URL must point to the root of a Firebase Database (not including a child path).");const d=O1(a,t,c,new Hb(t,n));return new D1(d,t)}function L1(t,e){const n=nc[e];(!n||n[t.key]!==t)&&ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_1(t),delete n[t.key]}function O1(t,e,n,i){let r=nc[e.name];r||(r={},nc[e.name]=r);let s=r[t.toURLString()];return s&&ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new l1(t,P1,n,i),r[t.toURLString()]=s,s}class D1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(c1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(L1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ln("Cannot call "+e+" on a deleted database.")}}function M1(t=rd(),e){const n=Ma(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=g_("database");i&&$1(n,...i)}return n}function $1(t,e,n,i={}){t=Me(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&Qn(i,s.repoInfo_.emulatorOptions))return;ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new oo(oo.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:v_(i.mockUserToken,t.app.options.projectId);o=new oo(a)}Pi(e)&&(zu(e),qu("Database",!0)),N1(s,r,i,o)}/**
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
 */function F1(t){Tb(Li),xi(new Xn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return x1(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Tn(mh,_h,t),Tn(mh,_h,"esm2020")}cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)},F1();const lp=id({apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"}),ci=Ib(lp),xt=M1(lp);var U1=H('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),W1=H('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),H1=H('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),V1=H('<h3 class="post-title svelte-1t1odzy"> </h3>'),j1=H('<p class="post-text svelte-1t1odzy"> </p>'),z1=H('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),B1=H('<div class="posts svelte-1t1odzy"></div>'),q1=H('<div class="post-list-container svelte-1t1odzy"><!></div>');const G1={hash:"svelte-1t1odzy",code:`
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
  }`};function K1(t,e){_n(e,!0),Yn(t,G1);let n=bt(e,"path",7,"posts"),i=bt(e,"limit",7,"10"),r=de(en([])),s=de(!0),o=de(""),a=null;Ds(()=>{l()}),Um(()=>{c()});function l(){try{a=zt(xt,n()),Do(a,T=>{const k=T.val();k?L(r,Object.entries(k).map(([N,O])=>({id:N,...O})).sort((N,O)=>(O.timestamp||0)-(N.timestamp||0)).slice(0,parseInt(i())),!0):L(r,[],!0),L(s,!1),L(o,"")},T=>{console.error("데이터 읽기 오류:",T),L(o,"데이터를 불러오는 중 오류가 발생했습니다."),L(s,!1)})}catch(T){console.error("구독 설정 오류:",T),L(o,"데이터베이스 연결에 실패했습니다."),L(s,!1)}}function c(){a&&tc(a)}function d(T){const k=new CustomEvent("post-click",{detail:{post:T},bubbles:!0,composed:!0});dispatchEvent(k)}function h(T,k){(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),d(k))}function u(T){if(!T)return"";const k=typeof T=="string"?Number(T):T,N=new Date(k),w=new Date().getTime()-N.getTime(),I=Math.floor(w/6e4),b=Math.floor(w/36e5),D=Math.floor(w/864e5);return I<1?"방금 전":I<60?`${I}분 전`:b<24?`${b}시간 전`:D<7?`${D}일 전`:N.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var f={get path(){return n()},set path(T="posts"){n(T),ut()},get limit(){return i()},set limit(T="10"){i(T),ut()}},p=q1(),g=_(p);{var E=T=>{var k=U1();P(T,k)},S=T=>{var k=Te(),N=he(k);{var O=I=>{var b=W1(),D=_(b),x=_(D,!0);m(D),m(b),ae(()=>R(x,v(o))),P(I,b)},w=I=>{var b=Te(),D=he(b);{var x=M=>{var Y=H1();P(M,Y)},K=M=>{var Y=B1();_r(Y,21,()=>v(r),te=>te.id,(te,W)=>{var Q=z1();Q.__click=()=>d(v(W)),Q.__keydown=me=>h(me,v(W));var be=_(Q),re=_(be),ne=_(re),fe=_(ne,!0);m(ne);var ie=y(ne,2),Ie=_(ie,!0);m(ie),m(re),m(be);var we=y(be,2),Le=_(we);{var B=me=>{var tt=V1(),at=_(tt,!0);m(tt),ae(()=>R(at,v(W).title)),P(me,tt)};Se(Le,me=>{v(W).title&&me(B)})}var se=y(Le,2);{var ue=me=>{var tt=j1(),at=_(tt,!0);m(tt),ae(()=>R(at,v(W).content)),P(me,tt)};Se(se,me=>{v(W).content&&me(ue)})}m(we);var ze=y(we,2),Be=_(ze),oe=_(Be);m(Be);var Ce=y(Be,2),et=_(Ce);m(Ce),m(ze),m(Q),ae(me=>{ke(Q,"aria-label",`게시물: ${(v(W).title||v(W).content||"제목 없음")??""}`),R(fe,v(W).author||"익명"),R(Ie,me),R(oe,`👍 ${(v(W).likes||0)??""}`),R(et,`💬 ${(v(W).comments?.length||0)??""}`)},[()=>u(v(W).timestamp)]),P(te,Q)}),m(Y),P(M,Y)};Se(D,M=>{v(r).length===0?M(x):M(K,!1)},!0)}P(I,b)};Se(N,I=>{v(o)?I(O):I(w,!1)},!0)}P(T,k)};Se(g,T=>{v(s)?T(E):T(S,!1)})}return m(p),P(t,p),gn(f)}pr(["click","keydown"]),customElements.define("post-list",pe(K1,{path:{},limit:{}},[],[],!0)),tm();/**
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
 */const Y1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Q1=km("<svg><!><!></svg>");function je(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]),i=De(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);_n(e,!1);let r=bt(e,"name",12,void 0),s=bt(e,"color",12,"currentColor"),o=bt(e,"size",12,24),a=bt(e,"strokeWidth",12,2),l=bt(e,"absoluteStrokeWidth",12,!1),c=bt(e,"iconNode",28,()=>[]);const d=(...g)=>g.filter((E,S,T)=>!!E&&T.indexOf(E)===S).join(" ");var h={get name(){return r()},set name(g){r(g),ut()},get color(){return s()},set color(g){s(g),ut()},get size(){return o()},set size(g){o(g),ut()},get strokeWidth(){return a()},set strokeWidth(g){a(g),ut()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(g){l(g),ut()},get iconNode(){return c()},set iconNode(g){c(g),ut()}};Ou();var u=Q1();ku(u,(g,E)=>({...Y1,...i,width:o(),height:o(),stroke:s(),"stroke-width":g,class:E}),[()=>(Si(l()),Si(a()),Si(o()),Ut(()=>l()?Number(a())*24/Number(o()):a())),()=>(Si(r()),Si(n),Ut(()=>d("lucide-icon","lucide",r()?`lucide-${r()}`:"",n.class)))]);var f=_(u);_r(f,1,c,Ms,(g,E)=>{var S=Zo(()=>$p(v(E),2));let T=()=>v(S)[0],k=()=>v(S)[1];var N=Te(),O=he(N);jm(O,T,!0,(w,I)=>{ku(w,()=>({...k()}))}),P(g,N)});var p=y(f);return Oe(p,e,"default",{}),m(u),P(t,u),gn(h)}pe(je,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function cp(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];je(t,Ye({name:"book-open"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(cp,{},["default"],[],!0);function ic(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M20 6 9 17l-5-5"}]];je(t,Ye({name:"check"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(ic,{},["default"],[],!0);function up(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"m6 9 6 6 6-6"}]];je(t,Ye({name:"chevron-down"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(up,{},["default"],[],!0);function rc(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];je(t,Ye({name:"external-link"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(rc,{},["default"],[],!0);function sc(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];je(t,Ye({name:"file-text"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(sc,{},["default"],[],!0);function dp(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];je(t,Ye({name:"house"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(dp,{},["default"],[],!0);function ds(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];je(t,Ye({name:"layout-grid"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(ds,{},["default"],[],!0);function hp(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];je(t,Ye({name:"log-in"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(hp,{},["default"],[],!0);function fp(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];je(t,Ye({name:"log-out"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(fp,{},["default"],[],!0);function hs(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];je(t,Ye({name:"menu"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(hs,{},["default"],[],!0);function Fn(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];je(t,Ye({name:"message-circle"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(Fn,{},["default"],[],!0);function pp(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];je(t,Ye({name:"phone"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(pp,{},["default"],[],!0);function mp(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];je(t,Ye({name:"send"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(mp,{},["default"],[],!0);function _p(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];je(t,Ye({name:"trending-up"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(_p,{},["default"],[],!0);function ui(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];je(t,Ye({name:"user"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(ui,{},["default"],[],!0);function fs(t,e){const n=De(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];je(t,Ye({name:"users"},()=>n,{get iconNode(){return i},children:(r,s)=>{var o=Te(),a=he(o);Oe(a,e,"default",{}),P(r,o)},$$slots:{default:!0}}))}pe(fs,{},["default"],[],!0);var J1=H("<option> </option>"),X1=H('<div class="error-message svelte-1e01td3"> </div>'),Z1=H('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),eE=H("<!> 인증 코드 전송",1),tE=H('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),nE=H('<div class="error-message svelte-1e01td3"> </div>'),iE=H('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),rE=H("<!> 로그인",1),sE=H('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),oE=H('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const aE={hash:"svelte-1e01td3",code:`\r
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
  }`};function lE(t,e){_n(e,!0),Yn(t,aE);const n=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let i=de("+82"),r=de(""),s=de(""),o=de("phone"),a=de(!1),l=de(""),c=de(null),d=de(null),h=de(void 0),u=de(null);function f(){return new Promise((b,D)=>{try{if(!v(u)){const x=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(x),L(l,"reCAPTCHA 초기화에 실패했습니다."),D(x);return}if(v(c)){if(v(h)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(v(h)),console.log("reCAPTCHA reset completed"),b(v(h));return}catch(x){console.warn("Failed to reset reCAPTCHA:",x)}try{v(c).clear(),L(c,null),L(h,void 0)}catch(x){console.warn("Failed to clear reCAPTCHA:",x)}}L(c,new Cy(ci,v(u).id,{size:"invisible",callback:x=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&v(h)!==void 0?window.grecaptcha.reset(v(h)):f()}}),!0),v(c).render().then(x=>{L(h,x,!0),console.log("reCAPTCHA rendered with widgetId:",x),b(x)}).catch(x=>{console.error("Failed to render reCAPTCHA:",x),L(l,"reCAPTCHA 초기화에 실패했습니다."),D(x)})}catch(x){console.error("reCAPTCHA 초기화 실패:",x),L(l,"reCAPTCHA 초기화에 실패했습니다."),D(x)}})}Ds(()=>{const b=document.createElement("div");return b.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),b.className="recaptcha-container-light-dom",b.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(b),L(u,b,!0),f(),()=>{b&&b.parentNode&&b.parentNode.removeChild(b)}});function p(b){return/^[0-9]{6,15}$/.test(b)}async function g(){if(L(l,""),!p(v(r))){L(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}L(a,!0);try{const b=`${v(i)}${v(r)}`;console.log("Sending verification code to:",b),L(d,await ky(ci,b,v(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),L(o,"code")}catch(b){console.error("SMS 전송 실패:",b),b.code==="auth/invalid-phone-number"?L(l,"잘못된 전화번호 형식입니다."):b.code==="auth/too-many-requests"?L(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):L(l,`SMS 전송 실패: ${b.message}`)}finally{L(a,!1)}}async function E(){if(L(l,""),v(s).length!==6){L(l,"6자리 인증 코드를 입력해주세요.");return}L(a,!0);try{const b=await v(d).confirm(v(s));console.log("Login successful:",b.user);const D=new CustomEvent("login-success",{detail:{user:b.user,phoneNumber:b.user.phoneNumber}});dispatchEvent(D),L(r,""),L(s,""),L(o,"phone")}catch(b){console.error("인증 코드 확인 실패:",b),b.code==="auth/invalid-verification-code"?L(l,"잘못된 인증 코드입니다."):b.code==="auth/code-expired"?L(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):L(l,`인증 실패: ${b.message}`);const D=new CustomEvent("login-error",{detail:{error:b.message}});dispatchEvent(D)}finally{L(a,!1)}}function S(){L(o,"phone"),L(s,""),L(l,"")}var T=oE(),k=_(T),N=_(k);{var O=b=>{var D=tE(),x=_(D),K=_(x);pp(K,{class:"icon-large"}),Xt(4),m(x);var M=y(x,2),Y=y(_(M),2);_r(Y,21,()=>n,Ms,(B,se)=>{var ue=J1(),ze=_(ue);m(ue);var Be={};ae(()=>{R(ze,`${v(se).flag??""} ${v(se).name??""} (${v(se).code??""})`),Be!==(Be=v(se).code)&&(ue.value=(ue.__value=v(se).code)??"")}),P(B,ue)}),m(Y),m(M);var te=y(M,2),W=y(_(te),2),Q=_(W),be=_(Q,!0);m(Q);var re=y(Q,2);ma(re),m(W),Xt(2),m(te);var ne=y(te,2);{var fe=B=>{var se=X1(),ue=_(se,!0);m(se),ae(()=>R(ue,v(l))),P(B,se)};Se(ne,B=>{v(l)&&B(fe)})}var ie=y(ne,2);ie.__click=g;var Ie=_(ie);{var we=B=>{var se=Z1();Xt(),P(B,se)},Le=B=>{var se=eE(),ue=he(se);mp(ue,{class:"btn-icon"}),Xt(),P(B,se)};Se(Ie,B=>{v(a)?B(we):B(Le,!1)})}m(ie),m(D),ae(()=>{Y.disabled=v(a),R(be,v(i)),re.disabled=v(a),ie.disabled=v(a)||!v(r)}),Qm(Y,()=>v(i),B=>L(i,B)),pu("keypress",re,B=>{B.key==="Enter"&&(B.preventDefault(),g())}),Nu(re,()=>v(r),B=>L(r,B)),P(b,D)},w=b=>{var D=Te(),x=he(D);{var K=M=>{var Y=sE(),te=_(Y),W=_(te);ic(W,{class:"icon-large"});var Q=y(W,4),be=_(Q);Xt(2),m(Q),m(te);var re=y(te,2),ne=y(_(re),2);ma(ne),Xt(2),m(re);var fe=y(re,2);{var ie=oe=>{var Ce=nE(),et=_(Ce,!0);m(Ce),ae(()=>R(et,v(l))),P(oe,Ce)};Se(fe,oe=>{v(l)&&oe(ie)})}var Ie=y(fe,2),we=_(Ie);we.__click=S;var Le=y(we,2);Le.__click=E;var B=_(Le);{var se=oe=>{var Ce=iE();Xt(),P(oe,Ce)},ue=oe=>{var Ce=rE(),et=he(Ce);ic(et,{class:"btn-icon"}),Xt(),P(oe,Ce)};Se(B,oe=>{v(a)?oe(se):oe(ue,!1)})}m(Le),m(Ie);var ze=y(Ie,2),Be=y(_(ze));Be.__click=S,m(ze),m(Y),ae(()=>{R(be,`${v(i)??""}${v(r)??""}로 전송된`),ne.disabled=v(a),we.disabled=v(a),Le.disabled=v(a)||v(s).length!==6}),pu("keypress",ne,oe=>{oe.key==="Enter"&&(oe.preventDefault(),E())}),Nu(ne,()=>v(s),oe=>L(s,oe)),P(M,Y)};Se(x,M=>{v(o)==="code"&&M(K)},!0)}P(b,D)};Se(N,b=>{v(o)==="phone"?b(O):b(w,!1)})}var I=y(N,2);Lu(I,b=>L(u,b),()=>v(u)),m(k),m(T),P(t,T),gn()}pr(["click"]),customElements.define("phone-login",pe(lE,{},[],[],!0));const Mo=wr(null),gp=wr(!0);ny(ci,t=>{Mo.set(t),gp.set(!1)});async function cE(t,e){try{return await Jv(ci,t,e),{success:!0}}catch(n){return console.error("로그인 오류:",n),{success:!1,error:yp(n.code)}}}async function uE(t,e,n=""){try{const i=await Qv(ci,t,e);return n&&await Zv(i.user,{displayName:n}),{success:!0}}catch(i){return console.error("회원가입 오류:",i),{success:!1,error:yp(i.code)}}}async function vp(){try{return await iy(ci),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}}function yp(t){return{"auth/invalid-email":"유효하지 않은 이메일 주소입니다.","auth/user-disabled":"비활성화된 계정입니다.","auth/user-not-found":"등록되지 않은 이메일입니다.","auth/wrong-password":"잘못된 비밀번호입니다.","auth/email-already-in-use":"이미 사용 중인 이메일입니다.","auth/weak-password":"비밀번호는 최소 6자 이상이어야 합니다.","auth/too-many-requests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","auth/network-request-failed":"네트워크 연결을 확인해주세요.","auth/invalid-credential":"인증 정보가 올바르지 않습니다."}[t]||"알 수 없는 오류가 발생했습니다."}const oc={en:{프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}"},ko:{프로젝트_명칭:"한바보 0.2",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"실시간 데이터베이스로서 선택","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}"},ja:{프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}"},zh:{프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}"}};function ac(t){const e=(t??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function bp(){if(typeof navigator>"u")return"en";const t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of t){const n=ac(e);if(n!=="en")return n}return"en"}function dE(t){let e=ac(t)||bp();function n(s){e=ac(s)}function i(){return e}function r(s,o={}){return((oc[e]??oc.en)[s]??oc.en[s]??s).replace(/\{(\w+)\}/g,(c,d)=>o[d]??"")}return{t:r,setLocale:n,getLocale:i}}const wp=bp(),hE=dE(wp),fE=wr(wp),lc=e_(fE,t=>(e,n={})=>hE.t(e,n));var pE=H("<span> </span>"),mE=H('<img alt="프로필" class="avatar-image svelte-38psow"/>'),_E=H('<div class="avatar-fallback svelte-38psow"> </div>'),gE=H('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/profile" class="dropdown-item svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span class="svelte-38psow"> </span></button></div>'),vE=H('<img class="avatar-image svelte-38psow"/>'),yE=H('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),bE=H('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/users" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),wE=H('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),EE=H('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><a href="/" class="logo-link svelte-38psow"><div class="logo svelte-38psow"></div></a> <nav class="nav svelte-38psow"><!></nav></div></header>');const IE={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function CE(t,e){_n(e,!0),Yn(t,IE);const n=()=>Er(Mo,"$user",r),i=()=>Er(lc,"$t",r),[r,s]=ba();let o=de(!1),a=de(null);function l(){v(a)&&(v(a).classList.remove("logo-animate-active"),v(a).offsetWidth,v(a).classList.add("logo-animate-active"),setTimeout(()=>{v(a)?.classList.remove("logo-animate-active")},600))}async function c(){if((await vp()).success){const w=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(w)}L(o,!1)}function d(){return n()?.displayName?n().displayName.charAt(0).toUpperCase():n()?.email?n().email.charAt(0).toUpperCase():"U"}function h(){L(o,!v(o))}function u(O){const w=document.querySelector(".dropdown-menu"),I=document.querySelector(".dropdown-trigger");w&&!w.contains(O.target)&&!I?.contains(O.target)&&L(o,!1)}Ds(()=>{const O=setTimeout(()=>{l()},500),w=setInterval(()=>{l()},1e4);return document.addEventListener("click",u),()=>{clearTimeout(O),clearInterval(w),document.removeEventListener("click",u)}});var f=EE(),p=_(f),g=_(p),E=_(g);_r(E,5,()=>i()("프로젝트_명칭").split(""),Ms,(O,w,I)=>{var b=pE();gr(b,1,`logo-char logo-char-${I+1}`,"svelte-38psow");var D=_(b,!0);m(b),ae(()=>R(D,v(w))),P(O,b)}),m(E),m(g),Lu(g,O=>L(a,O),()=>v(a));var S=y(g,2),T=_(S);{var k=O=>{var w=bE(),I=he(w),b=_(I),D=_(b);ds(D,{size:16});var x=y(D,2),K=_(x,!0);m(x),m(b);var M=y(b,2),Y=_(M);Fn(Y,{size:16});var te=y(Y,2),W=_(te,!0);m(te),m(M);var Q=y(M,2),be=_(Q);fs(be,{size:16});var re=y(be,2),ne=_(re,!0);m(re),m(Q);var fe=y(Q,2),ie=_(fe);ie.__click=h;var Ie=_(ie),we=_(Ie);{var Le=Ee=>{var _e=mE();ae(()=>ke(_e,"src",n().photoURL)),P(Ee,_e)},B=Ee=>{var _e=_E(),mt=_(_e,!0);m(_e),ae(Bt=>R(mt,Bt),[d]),P(Ee,_e)};Se(we,Ee=>{n()?.photoURL?Ee(Le):Ee(B,!1)})}m(Ie);var se=y(Ie,2),ue=_(se,!0);m(se),m(ie);var ze=y(ie,2);{var Be=Ee=>{var _e=gE(),mt=_(_e),Bt=_(mt,!0);m(mt);var di=y(mt,4),hi=_(di);ui(hi,{size:16});var fi=y(hi,2),tr=_(fi,!0);m(fi),m(di);var pi=y(di,4);pi.__click=c;var Lt=_(pi);fp(Lt,{size:16});var Ot=y(Lt,2),qt=_(Ot,!0);m(Ot),m(pi),m(_e),ae((fn,Wn,mi)=>{R(Bt,fn),R(tr,Wn),R(qt,mi)},[()=>i()("내계정"),()=>i()("프로필수정"),()=>i()("로그아웃")]),P(Ee,_e)};Se(ze,Ee=>{v(o)&&Ee(Be)})}m(fe);var oe=y(fe,2),Ce=_(oe);hs(Ce,{size:24}),m(oe),m(I);var et=y(I,2),me=_(et),tt=_(me);ds(tt,{size:20}),m(me);var at=y(me,2),Un=_(at);fs(Un,{size:20}),m(at);var hn=y(at,2),$o=_(hn);Fn($o,{size:20}),m(hn);var Zi=y(hn,2),er=_(Zi),ps=_(er);{var cc=Ee=>{var _e=vE();ae(mt=>{ke(_e,"src",n().photoURL),ke(_e,"alt",mt)},[()=>i()("프로필")]),P(Ee,_e)},Fo=Ee=>{var _e=yE(),mt=_(_e,!0);m(_e),ae(Bt=>R(mt,Bt),[d]),P(Ee,_e)};Se(ps,Ee=>{n()?.photoURL?Ee(cc):Ee(Fo,!1)})}m(er),m(Zi);var ms=y(Zi,2),_s=_(ms);hs(_s,{size:24}),m(ms),m(et),ae((Ee,_e,mt,Bt,di,hi,fi,tr,pi)=>{R(K,Ee),R(W,_e),R(ne,mt),R(ue,n()?.displayName||n()?.email),ke(oe,"title",Bt),ke(me,"title",di),ke(at,"title",hi),ke(hn,"title",fi),ke(Zi,"title",tr),ke(ms,"title",pi)},[()=>i()("포럼"),()=>i()("채팅"),()=>i()("사용자찾기"),()=>i()("메뉴"),()=>i()("포럼"),()=>i()("사용자찾기"),()=>i()("채팅"),()=>i()("프로필"),()=>i()("메뉴")]),P(O,w)},N=O=>{var w=wE(),I=he(w),b=_(I),D=_(b);ds(D,{size:16});var x=y(D,2),K=_(x,!0);m(x),m(b);var M=y(b,2),Y=_(M);Fn(Y,{size:16});var te=y(Y,2),W=_(te,!0);m(te),m(M);var Q=y(M,2),be=_(Q,!0);m(Q);var re=y(Q,2),ne=_(re);hs(ne,{size:20}),m(re),m(I);var fe=y(I,2),ie=_(fe),Ie=_(ie);ds(Ie,{size:20}),m(ie);var we=y(ie,2),Le=_(we);Fn(Le,{size:20}),m(we);var B=y(we,2),se=_(B);ui(se,{size:20}),m(B);var ue=y(B,2),ze=_(ue);hs(ze,{size:24}),m(ue),m(fe),ae((Be,oe,Ce,et,me,tt,at,Un)=>{R(K,Be),R(W,oe),R(be,Ce),ke(re,"title",et),ke(ie,"title",me),ke(we,"title",tt),ke(B,"title",at),ke(ue,"title",Un)},[()=>i()("포럼"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴"),()=>i()("포럼"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴")]),P(O,w)};Se(T,O=>{n()?O(k):O(N,!1)})}m(S),m(p),m(f),P(t,f),gn(),s()}pr(["click"]),customElements.define("sns-topbar",pe(CE,{},[],[],!0));var TE=H('<a href="/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),SE=H('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),kE=H('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/users" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <div class="menu-item disabled svelte-najsij"><!> <span> </span></div></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/users" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const AE={hash:"svelte-najsij",code:`\r
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
  }`};function RE(t,e){_n(e,!1),Yn(t,AE);const n=()=>Er(lc,"$t",r),i=()=>Er(Mo,"$user",r),[r,s]=ba();Ou();var o=kE(),a=_(o),l=_(a),c=_(l,!0);m(l);var d=y(l,2),h=_(d),u=_(h);dp(u,{size:20});var f=y(u,2),p=_(f,!0);m(f),m(h);var g=y(h,2),E=_(g);Fn(E,{size:20});var S=y(E,2),T=_(S,!0);m(S),m(g);var k=y(g,2),N=_(k);fs(N,{size:20});var O=y(N,2),w=_(O,!0);m(O),m(k);var I=y(k,2),b=_(I);ui(b,{size:20});var D=y(b,2),x=_(D,!0);m(D),m(I);var K=y(I,2),M=_(K);sc(M,{size:20});var Y=y(M,2),te=_(Y,!0);m(Y),m(K),m(d);var W=y(d,4),Q=_(W),be=_(Q,!0);m(Q);var re=y(Q,2),ne=_(re);{var fe=Lt=>{var Ot=TE(),qt=_(Ot);ui(qt,{size:16});var fn=y(qt,2),Wn=_(fn,!0);m(fn),m(Ot),ae(mi=>R(Wn,mi),[()=>n()("회원정보수정")]),P(Lt,Ot)},ie=Lt=>{var Ot=SE(),qt=he(Ot),fn=_(qt);hp(fn,{size:16});var Wn=y(fn,2),mi=_(Wn,!0);m(Wn),m(qt);var Uo=y(qt,2),Wo=_(Uo);ui(Wo,{size:16});var Ho=y(Wo,2),uc=_(Ho,!0);m(Ho),m(Uo),ae((dc,hc)=>{R(mi,dc),R(uc,hc)},[()=>n()("로그인"),()=>n()("회원가입")]),P(Lt,Ot)};Se(ne,Lt=>{i()?Lt(fe):Lt(ie,!1)})}m(re),m(W);var Ie=y(W,4),we=_(Ie),Le=_(we);fs(Le,{size:16});var B=y(Le,2),se=_(B,!0);m(B),m(we);var ue=y(we,2),ze=y(_(ue),2),Be=_(ze,!0);m(ze);var oe=y(ze,2);rc(oe,{size:12,class:"external-icon"}),m(ue);var Ce=y(ue,2),et=_(Ce);Fn(et,{size:16});var me=y(et,2),tt=_(me,!0);m(me);var at=y(me,2);rc(at,{size:12,class:"external-icon"}),m(Ce);var Un=y(Ce,2),hn=_(Un);cp(hn,{size:16});var $o=y(hn,2),Zi=_($o,!0);m($o),m(Un),m(Ie);var er=y(Ie,2),ps=_(er),cc=_(ps,!0);m(ps);var Fo=y(ps,2),ms=_(Fo,!0);m(Fo),m(er);var _s=y(er,2),Ee=_(_s),_e=_(Ee),mt=_(_e,!0);m(_e);var Bt=y(_e,2),di=_(Bt,!0);m(Bt),m(Ee),m(_s);var hi=y(_s,2),fi=_(hi),tr=_(fi,!0),pi=y(tr,2);m(fi),m(hi),m(a),m(o),ae((Lt,Ot,qt,fn,Wn,mi,Uo,Wo,Ho,uc,dc,hc,JE,XE,ZE,eI,tI)=>{R(c,Lt),R(p,Ot),R(T,qt),R(w,fn),R(x,Wn),R(te,mi),R(be,Uo),R(se,Wo),R(Be,Ho),R(tt,uc),R(Zi,dc),R(cc,hc),R(ms,JE),R(mt,XE),R(di,ZE),R(tr,eI),R(pi,` ${tI??""}`)},[()=>n()("퀵메뉴"),()=>n()("홈"),()=>n()("채팅"),()=>n()("사용자목록"),()=>n()("내프로필"),()=>n()("게시판"),()=>n()("시작하기"),()=>n()("회원목록"),()=>n()("프로젝트GitHub"),()=>n()("한바보참여단톡방"),()=>n()("개발일지"),()=>n()("언어설정"),()=>n()("언어전환기능안내"),()=>n()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>n()("카피레프트"),()=>n()("AI소개")]),P(t,o),gn(),s()}customElements.define("sns-left-sidebar",pe(RE,{},[],[],!0));var PE=H('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const NE={hash:"svelte-3epon2",code:`\r
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
  }`};function xE(t,e){_n(e,!0),Yn(t,NE);const n=()=>Er(lc,"$t",i),[i,r]=ba();let s=de(en({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=PE(),a=_(o),l=_(a),c=_(l,!0);m(l);var d=y(l,2),h=_(d),u=_(h),f=_(u);ui(f,{size:20}),m(u);var p=y(u,2),g=_(p),E=_(g,!0);m(g);var S=y(g,2),T=_(S,!0);m(S),m(p),m(h);var k=y(h,2),N=_(k),O=_(N);_p(O,{size:20}),m(N);var w=y(N,2),I=_(w),b=_(I,!0);m(I);var D=y(I,2),x=_(D,!0);m(D),m(w),m(k);var K=y(k,2),M=_(K),Y=_(M);sc(Y,{size:20}),m(M);var te=y(M,2),W=_(te),Q=_(W,!0);m(W);var be=y(W,2),re=_(be,!0);m(be);var ne=y(be,2),fe=_(ne,!0);m(ne),m(te),m(K);var ie=y(K,2),Ie=_(ie),we=_(Ie);Fn(we,{size:20}),m(Ie);var Le=y(Ie,2),B=_(Le),se=_(B,!0);m(B);var ue=y(B,2),ze=_(ue,!0);m(ue),m(Le),m(ie),m(d);var Be=y(d,2),oe=_(Be,!0);m(Be),m(a),m(o),ae((Ce,et,me,tt,at,Un,hn)=>{R(c,Ce),R(E,et),R(T,v(s).totalUsers),R(b,me),R(x,v(s).totalScore),R(Q,tt),R(re,v(s).totalPosts),R(fe,at),R(se,Un),R(ze,v(s).totalMessages),R(oe,hn)},[()=>n()("통계"),()=>n()("전체사용자"),()=>n()("전체점수"),()=>n()("전체글"),()=>n()("준비중"),()=>n()("채팅메시지"),()=>n()("통계실시간업데이트")]),P(t,o),gn(),r()}customElements.define("sns-right-sidebar",pe(xE,{},[],[],!0));var LE=H('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const OE={hash:"svelte-um1xbq",code:`\r
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
  }`};function DE(t,e){Yn(t,OE);var n=LE(),i=_(n),r=y(i,2),s=_(r);gr(s,1,"left-sidebar svelte-um1xbq");var o=y(s,2),a=_(o);Oe(a,e,"default",{}),m(o);var l=y(o,2);gr(l,1,"right-sidebar svelte-um1xbq"),m(r),m(n),P(t,n)}customElements.define("sns-layout",pe(DE,{},["default"],[],!0));var ME=H('<div class="icon-container svelte-m3h71q"> </div>'),$E=H('<p class="hint-box svelte-m3h71q"> </p>'),FE=H('<p class="gpl-box svelte-m3h71q"> </p>'),UE=H('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),WE=H('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),HE=H('<div class="accordion svelte-m3h71q"></div>');const VE={hash:"svelte-m3h71q",code:`\r
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
  }`};function jE(t,e){_n(e,!0),Yn(t,VE);let n=bt(e,"items",7,"[]"),i=bt(e,"type",7,"single"),r=bt(e,"collapsible",7,!0),s=Zo(()=>{try{const u=typeof n()=="string"?JSON.parse(n()):n();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=Zo(()=>()=>{const u=r();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=de(en(new Set));function l(u){const f=new Set(v(a));i()==="single"?f.has(u)?v(o)&&f.delete(u):(f.clear(),f.add(u)):f.has(u)?f.delete(u):f.add(u),L(a,f,!0)}function c(u){return v(a).has(u)}var d={get items(){return n()},set items(u="[]"){n(u),ut()},get type(){return i()},set type(u="single"){i(u),ut()},get collapsible(){return r()},set collapsible(u=!0){r(u),ut()}},h=HE();return _r(h,21,()=>v(s),Ms,(u,f,p)=>{var g=WE(),E=_(g);E.__click=()=>l(p);var S=_(E),T=_(S);{var k=K=>{var M=ME(),Y=_(M,!0);m(M),ae(()=>R(Y,v(f).icon)),P(K,M)};Se(T,K=>{v(f).icon&&K(k)})}var N=y(T,2),O=_(N,!0);m(N),m(S);var w=y(S,2);let I;var b=_(w);up(b,{size:20}),m(w),m(E);var D=y(E,2);{var x=K=>{var M=UE(),Y=_(M),te=_(Y,!0);m(Y);var W=y(Y,2);{var Q=ne=>{var fe=$E(),ie=_(fe,!0);m(fe),ae(()=>R(ie,v(f).hint)),P(ne,fe)};Se(W,ne=>{v(f).hint&&ne(Q)})}var be=y(W,2);{var re=ne=>{var fe=FE(),ie=_(fe,!0);m(fe),ae(()=>R(ie,v(f).gpl)),P(ne,fe)};Se(be,ne=>{v(f).gpl&&ne(re)})}m(M),ae(()=>R(te,v(f).content)),P(K,M)};Se(D,K=>{c(p)&&K(x)})}m(g),ae((K,M)=>{ke(E,"aria-expanded",K),R(O,v(f).title),I=gr(w,1,"chevron svelte-m3h71q",null,I,M)},[()=>c(p),()=>({"rotate-180":c(p)})]),P(u,g)}),m(h),P(t,h),gn(d)}pr(["click"]),customElements.define("sns-accordion",pe(jE,{items:{},type:{},collapsible:{}},[],[],!0));function zE(t){const{subscribe:e,set:n}=wr(null),i=zt(xt,t);return Do(i,r=>{const s=r.val();n(s)}),{subscribe:e,unsubscribe:()=>tc(i)}}async function BE(t,e){try{const n=zt(xt,t);return await Lo(n,e),{success:!0}}catch(n){return console.error("데이터 쓰기 오류:",n),{success:!1,error:n.message}}}async function qE(t,e){try{const n=zt(xt,t);return await ec(n,e),{success:!0}}catch(n){return console.error("데이터 업데이트 오류:",n),{success:!1,error:n.message}}}async function GE(t){try{const e=zt(xt,t);return await S1(e),{success:!0}}catch(e){return console.error("데이터 삭제 오류:",e),{success:!1,error:e.message}}}async function KE(t,e){try{const n=zt(xt,t),i=T1(n);return await Lo(i,e),{success:!0,key:i.key}}catch(n){return console.error("데이터 추가 오류:",n),{success:!1,error:n.message}}}async function YE(t){try{const e=zt(xt,t),n=await k1(e);return n.exists()?{success:!0,data:n.val()}:{success:!0,data:null}}catch(e){return console.error("데이터 읽기 오류:",e),{success:!1,error:e.message}}}function QE(t){const e=zt(xt,`status/${t}`),n=zt(xt,".info/connected");return Do(n,i=>{i.val()===!0&&(Lo(e,{online:!0,lastSeen:Date.now()}),Do(zt(xt,".info/connected"),r=>{r.val()||ec(e,{online:!1,lastSeen:Date.now()})}))}),()=>{ec(e,{online:!1,lastSeen:Date.now()}),tc(n)}}console.log("SNS Web Components 로드됨 ✅"),Re.auth=ci,Re.createRealtimeStore=zE,Re.database=xt,Re.deleteData=GE,Re.loading=gp,Re.pushData=KE,Re.readData=YE,Re.setupPresence=QE,Re.signIn=cE,Re.signOut=vp,Re.signUp=uE,Re.updateData=qE,Re.user=Mo,Re.writeData=BE,Object.defineProperty(Re,Symbol.toStringTag,{value:"Module"})}));
